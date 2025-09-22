import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: 'Restaurants',
      category: 'Restaurant',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern restaurant website with online reservations and menu showcase',
      features: ['Online Reservations', 'Digital Menu', 'Location Map', 'Customer Reviews'],
      url: '#'
    },
    {
      title: 'TechFix Repair Services',
      category: 'Service Business',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional service website with appointment booking and service areas',
      features: ['Service Booking', 'Service Areas', 'Testimonials', 'Contact Forms'],
      url: '#'
    },
    {
      title: 'Flower Shop',
      category: 'Retail',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'E-commerce flower shop with online ordering and delivery options',
      features: ['Online Store', 'Delivery Tracking', 'Gift Cards', 'Seasonal Promotions'],
      url: '#'
    },
    {
      title: 'Law Firm',
      category: 'Professional Services',
      image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional law firm website with case studies and attorney profiles',
      features: ['Attorney Profiles', 'Case Studies', 'Consultation Booking', 'Resource Library'],
      url: '#'
    },
    {
      title: 'Fitness First Gym',
      category: 'Health & Fitness',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dynamic gym website with class schedules and membership information',
      features: ['Class Schedules', 'Membership Plans', 'Trainer Profiles', 'Virtual Tours'],
      url: '#'
    },
    {
      title: 'Artisan Crafts Co.',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Handcrafted goods e-commerce site with custom product galleries',
      features: ['Product Catalog', 'Custom Orders', 'Artist Stories', 'Secure Checkout'],
      url: '#'
    }
  ];

  const categories = ['All', 'Restaurant', 'Service Business', 'Retail', 'Professional Services', 'Health & Fitness', 'E-commerce'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Here are a few of the kind of sites we offer. Like what you see? Let's chat!
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 h-8 w-8 transition-opacity duration-300" />
                  </div> */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-900">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {item.features.length > 2 && (
                        <span className="text-gray-500 text-xs">
                          +{item.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    View Case Study →
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results for Our Clients
            </h2>
            <p className="text-xl text-gray-600">
              Our websites don't just look great - they deliver real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Websites Built</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-gray-600">Average Traffic Increase</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a website that showcases your business and drives real results
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;