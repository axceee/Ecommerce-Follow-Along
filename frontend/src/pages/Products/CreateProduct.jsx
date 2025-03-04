import { useState } from 'react'
import "./CreateProduct.css"

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    images: []
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProductData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    setProductData(prev => ({
      ...prev,
      images: files
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Product Data:', productData)
    // Will handle API integration later
  }

  return (
    <div className="create-product-container">
      <h2>Create New Product</h2>
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
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={productData.stock}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="images">Product Images</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageChange}
            multiple
            accept="image/*"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Create Product
        </button>
      </form>
    </div>
  )
}

export default CreateProduct