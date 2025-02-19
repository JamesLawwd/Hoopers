import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { CircleDot, Hexagon, Award, Shield, Truck } from 'lucide-react';
import Technology from './Technology';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <Hexagon className="w-20 h-20 text-[#cc73f8] rotate-90" strokeWidth={1.5} />
              <CircleDot className="w-10 h-10 text-[#cc73f8] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" strokeWidth={2} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              HOOPS
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Engineering the future of basketball through precision and innovation
            </p>
            <Link to="/technology" className="bg-[#cc73f8] text-white px-8 py-3 rounded-full hover:bg-[#b85de4] transition-colors">
              Explore Our Technology
            </Link>
          </div>
        </div>
      </header>

      {/* Technology Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Advanced Ball Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#cc73f8]">Premium Leather</h3>
              <p className="text-gray-300">Full-grain leather carefully selected for optimal grip and durability, treated with our proprietary tanning process.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#cc73f8]">Channel Design</h3>
              <p className="text-gray-300">Deep channel geometry engineered for consistent ball control and enhanced player grip during intense gameplay.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#cc73f8]">Core Technology</h3>
              <p className="text-gray-300">Advanced composite core with optimized weight distribution for perfect bounce consistency and shape retention.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#cc73f8]">Moisture Control</h3>
              <p className="text-gray-300">Innovative surface treatment that maintains grip performance in various weather conditions and humidity levels.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <img
              src="https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&q=80&w=1200"
              alt="Basketball Technology"
              className="rounded-lg shadow-xl mx-auto max-w-3xl"
            />
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Every basketball undergoes our rigorous 16-point inspection process to ensure it meets professional standards.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Award className="w-12 h-12 text-[#cc73f8] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Premium Quality</h3>
              <p className="text-gray-300">
                Made with the finest materials for optimal performance
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Shield className="w-12 h-12 text-[#cc73f8] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">2-Year Warranty</h3>
              <p className="text-gray-300">
                Guaranteed durability for professional use
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Truck className="w-12 h-12 text-[#cc73f8] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Global Shipping</h3>
              <p className="text-gray-300">
                Delivering quality worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800"
                alt="Basketball"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-white">Crafted for Champions</h2>
              <p className="text-gray-300 mb-6">
                Our basketballs are designed to meet the highest standards of professional play.
                Each ball undergoes rigorous quality testing to ensure perfect bounce, grip, and durability.
              </p>
              <Link to="/technology" className="bg-[#cc73f8] text-white px-6 py-2 rounded-full hover:bg-[#b85de4] transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      
      {/* Footer */}
      <footer className="bg-[#cc73f8] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 HOOPS Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;