import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./CreateProduct.css"

const CreateProduct = () => {
  const navigate = useNavigate()
  const { productId } = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const isEditMode = !!productId

  useEffect(() => {
    if (isEditMode) {
      fetchProductDetails()
    }
  }, [productId])

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/products/${productId}`)
      const data = await response.json()
      
      if (data.success) {
        setProductData({
          name: data.data.name,
          description: data.data.description,
          price: data.data.price,
          category: data.data.category,
          stockQuantity: data.data.stockQuantity,
          imageUrl: data.data.imageUrl
        })
      } else {
        setError("Failed to fetch product details")
      }
    } catch (err) {
      setError("Error fetching product details")
      console.error("Error fetching product:", err)
    }
  }
  
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stockQuantity: '',
    imageUrl: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      setError("Please login to continue");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('description', productData.description);
      formData.append('price', productData.price);
      formData.append('category', productData.category);
      formData.append('stockQuantity', productData.stockQuantity);
      
      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      if (!isEditMode) {
        formData.append('userEmail', userEmail);
      }

      const url = isEditMode
        ? `http://localhost:8000/api/v1/products/${productId}`
        : 'http://localhost:8000/api/v1/products';

      const response = await fetch(url, {
        method: isEditMode ? 'PUT' : 'POST',
        body: formData // FormData automatically sets the correct Content-Type
      });

      const data = await response.json();

      if (data.success) {
        navigate('/my-products');
      } else {
        setError(data.message || `Failed to ${isEditMode ? 'update' : 'create'} product`);
      }
    } catch (err) {
      setError(`Error ${isEditMode ? 'updating' : 'creating'} product. Please try again later.`);
      console.error(`Error ${isEditMode ? 'updating' : 'creating'} product:`, err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-product-container">
      <h2>{isEditMode ? 'Edit Product' : 'Create New Product'}</h2>
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stockQuantity">Stock Quantity</label>
          <input
            type="number"
            id="stockQuantity"
            name="stockQuantity"
            value={productData.stockQuantity}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-2"
            required={!isEditMode}
          />
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-w-xs h-auto rounded-lg shadow-md"
              />
            </div>
          )}
          {!imagePreview && productData.imageUrl && (
            <div className="mt-2">
              <img
                src={productData.imageUrl}
                alt="Current Product"
                className="max-w-xs h-auto rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={loading}
        >
          {loading
            ? `${isEditMode ? 'Updating' : 'Creating'}...`
            : `${isEditMode ? 'Update' : 'Create'} Product`
          }
        </button>
      </form>
    </div>
  )
}

export default CreateProduct
