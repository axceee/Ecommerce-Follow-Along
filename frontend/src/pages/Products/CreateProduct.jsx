import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./CreateProduct.css"

const CreateProduct = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stockQuantity: '',
    imageUrl: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProductData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const userEmail = localStorage.getItem('userEmail')
    if (!userEmail) {
      setError("Please login to create a product")
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:8000/api/v1/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...productData,
          userEmail
        })
      })

      const data = await response.json()

      if (data.success) {
        navigate('/product/my-products')
      } else {
        setError(data.message || "Failed to create product")
      }
    } catch (err) {
      setError("Error creating product. Please try again later.")
      console.error("Error creating product:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="create-product-container">
      <h2>Create New Product</h2>
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
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleInputChange}
            placeholder="Enter image URL"
            required
          />
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Product'}
        </button>
      </form>
    </div>
  )
}

export default CreateProduct
