import Navbar from './header/Navbar';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 299.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://via.placeholder.com/400x300?text=Headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    description: "Feature-rich smartwatch with health tracking capabilities.",
    image: "https://via.placeholder.com/400x300?text=Smart+Watch"
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 149.99,
    description: "Portable speaker with premium sound quality.",
    image: "https://via.placeholder.com/400x300?text=Speaker"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <header className="bg-purple-900 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-purple-300">Generic E-Commerce Company</h1>
          <p className="mt-4 text-xl text-gray-300">Your one-stop shop for everything!</p>
        </div>
      </header>
      <main className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-300">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;