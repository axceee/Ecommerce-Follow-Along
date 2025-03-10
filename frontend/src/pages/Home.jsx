import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/products');
        const data = await response.json();
        
        if (data.statusCode === 200) {
          setProducts(data.data);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError('Error connecting to server');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-purple-900 text-white py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-purple-300">Generic E-Commerce Company</h1>
          <p className="mt-4 text-xl text-gray-300">Your one-stop shop for everything!</p>
        </div>
      </header>
      <main className="py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-300">Featured Products</h2>
          {loading ? (
            <div className="text-center text-purple-300 text-xl">Loading products...</div>
          ) : error ? (
            <div className="text-center text-red-500 text-xl">{error}</div>
          ) : products.length === 0 ? (
            <div className="text-center text-purple-300 text-xl">No products available</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  image={product.imageUrl}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;