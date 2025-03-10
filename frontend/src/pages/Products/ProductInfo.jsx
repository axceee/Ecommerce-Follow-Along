import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0 && value <= product?.stockQuantity) {
            setQuantity(value);
        }
    };

    const handleAddToCart = () => {
        // TODO: Implement cart functionality
        alert(`Added ${quantity} ${product.name}(s) to cart`);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {product && (
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Product Image */}
                    <div className="md:w-1/2">
                        <img 
                            src={product.imageUrl} 
                            alt={product.name}
                            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                        <p className="text-xl text-gray-600">${product.price.toFixed(2)}</p>
                        <div className="border-t border-b border-gray-200 py-4">
                            <p className="text-gray-700">{product.description}</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <label htmlFor="quantity" className="text-gray-700">Quantity:</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min="1"
                                    max={product.stockQuantity}
                                    className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-gray-500">
                                    ({product.stockQuantity} available)
                                </span>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200"
                            >
                                Add to Cart
                            </button>

                            <div className="mt-4">
                                <p className="text-sm text-gray-500">
                                    Category: {product.category}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductInfo;