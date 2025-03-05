import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'

const MyProducts = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const handleEdit = (productId) => {
        navigate(`/create-product/${productId}`)
    }

    const handleDelete = async (productId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();

            if (data.success) {
                setProducts(products => products.filter(product => product._id !== productId));
            } else {
                setError(data.message || "Failed to delete product");
            }
        } catch (err) {
            setError("Error deleting product. Please try again later.");
            console.error("Error deleting product:", err);
        }
    }

    const userEmail = localStorage.getItem('userEmail') // Get logged in user's email

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (!userEmail) {
                    setError("Please login to view your products")
                    setLoading(false)
                    return
                }

                const response = await fetch(`http://localhost:8000/api/v1/products/user/${userEmail}`)
                const data = await response.json()

                if (data.success) {
                    setProducts(data.data)
                } else {
                    setError(data.message || "Failed to fetch products")
                }
            } catch (err) {
                setError("Error fetching products. Please try again later.")
                console.error("Error fetching products:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [userEmail])

    if (loading) return <div className="text-center p-4">Loading...</div>
    if (error) return <div className="text-center p-4 text-red-500">{error}</div>

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">My Products</h1>
            {products.length === 0 ? (
                <div className="text-center p-4">
                    No products found. Start by creating a product!
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <ProductCard
                            key={product._id}
                            _id={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.imageUrl}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyProducts