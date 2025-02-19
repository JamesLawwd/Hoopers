import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CircleDot, Hexagon } from 'lucide-react';

const balls = [
  {
    name: 'Pro Elite X1',
    image: 'https://images.unsplash.com/photo-1494199505258-5f95387f933c?auto=format&fit=crop&q=80&w=800',
    description: 'Professional game ball with advanced grip technology',
    features: [
      'Premium composite leather',
      'Deep channel design',
      'Moisture-wicking surface',
      'Official size and weight'
    ],
    manufacturing: [
      'Precision-cut panels',
      'Advanced bladder technology',
      'Multi-layer construction'
    ]
  },
  {
    name: 'Street Master S2',
    image: 'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&q=80&w=800',
    description: 'Engineered for outdoor durability and performance',
    features: [
      'All-weather materials',
      'Enhanced durability coating',
      'High-visibility design',
      'Street-optimized grip'
    ],
    manufacturing: [
      'Reinforced outer layer',
      'Weather-resistant coating',
      'Impact-resistant core'
    ]
  },
  {
    name: 'Indoor Pro I3',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
    description: 'Perfect for indoor courts and competitive play',
    features: [
      'Ultra-soft touch',
      'Consistent bounce technology',
      'Superior ball control',
      'Competition standard'
    ],
    manufacturing: [
      'Premium leather selection',
      'Precision balancing',
      'Hand-crafted finish'
    ]
  },
  {
    name: 'Youth Development Y1',
    image: 'https://images.unsplash.com/photo-1485395578879-6ba080c9cdba?auto=format&fit=crop&q=80&w=800',
    description: 'Designed for young players and skill development',
    features: [
      'Size-optimized design',
      'Enhanced grip pattern',
      'Lighter weight core',
      'Development-focused'
    ],
    manufacturing: [
      'Youth-specific materials',
      'Special size calibration',
      'Safety-first construction'
    ]
  },
  {
    name: 'Training Tech T5',
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced features for skill enhancement and training',
    features: [
      'Smart grip indicators',
      'Training pattern design',
      'Balanced weight distribution',
      'Enhanced feedback surface'
    ],
    manufacturing: [
      'Sensor-ready construction',
      'Training-specific materials',
      'Performance tracking ready'
    ]
  },
  {
    name: 'Limited Edition LE-X',
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=800',
    description: 'Exclusive design with cutting-edge technology',
    features: [
      'Premium materials',
      'Unique color pattern',
      "Collector's edition",
      'Advanced grip technology'
    ],
    manufacturing: [
      'Hand-selected materials',
      'Artisan craftsmanship',
      'Limited production run'
    ]
  }
];

function Technology() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Hexagon className="w-16 h-16 text-[#cc73f8] rotate-90" strokeWidth={1.5} />
              <CircleDot className="w-8 h-8 text-[#cc73f8] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" strokeWidth={2} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white text-center mb-4">Our Technology</h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Discover our range of professional basketballs, each crafted with precision and innovative technology.
          </p>
        </div>
      </header>

      {/* Manufacturing Process */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Manufacturing Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#cc73f8] mb-4">Material Selection</h3>
              <p className="text-gray-300">Our materials undergo rigorous testing and selection process, ensuring only the highest quality components make it to production.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#cc73f8] mb-4">Precision Assembly</h3>
              <p className="text-gray-300">Each ball is assembled with state-of-the-art machinery and hand-finished by skilled craftsmen for perfect balance and durability.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#cc73f8] mb-4">Quality Control</h3>
              <p className="text-gray-300">Every basketball undergoes our 16-point inspection process, ensuring consistent performance and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ball Collection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {balls.map((ball, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img src={ball.image} alt={ball.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#cc73f8] mb-2">{ball.name}</h3>
                  <p className="text-gray-300 mb-4">{ball.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-300 list-disc list-inside">
                      {ball.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Manufacturing:</h4>
                    <ul className="text-gray-300 list-disc list-inside">
                      {ball.manufacturing.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;