import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Globe, Shield, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Professional Design',
      description: 'Custom websites that represent your brand and attract customers'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Secure Hosting',
      description: 'Reliable, fast hosting with 99.9% uptime guarantee'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Ongoing Support',
      description: 'Regular updates and maintenance so you can focus on your business'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Johnson\'s Bakery',
      content: 'BrightHost transformed our online presence. Our website looks amazing and we\'ve seen a 40% increase in orders!',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      business: 'Rodriguez Consulting',
      content: 'Professional service, great support, and affordable pricing. Exactly what my small business needed.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      business: 'Chen\'s Photography',
      content: 'They made the whole process so easy. Now I have a beautiful portfolio website that brings in new clients.',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Affordable Website Hosting & Design for{' '}
                <span className="text-blue-600">Small Businesses</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                We create professional websites, host them securely, and provide ongoing updates 
                so you can focus on running your business.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 text-center inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional web design workspace"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-semibold text-gray-900">15+ Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to hosting to maintenance, we handle all aspects of your web presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied business owners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of small businesses who trust BrightHost with their web presence
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;