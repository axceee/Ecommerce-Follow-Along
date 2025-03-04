import Navbar from './header/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold animate-bounce">Generic E-Commerce Company</h1>
          <p className="mt-4 text-xl">Your one-stop shop for everything!</p>
        </div>
      </header>
      <main className="container mx-auto py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Product 1</h3>
              <p className="text-gray-700">Description of product 1.</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">Buy Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Product 2</h3>
              <p className="text-gray-700">Description of product 2.</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">Buy Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Product 3</h3>
              <p className="text-gray-700">Description of product 3.</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">Buy Now</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;