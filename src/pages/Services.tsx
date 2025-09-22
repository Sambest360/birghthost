import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Server, Search, Palette, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: 'Website Design',
      description: 'Custom, responsive websites that look great on all devices',
      features: [
        'Mobile-responsive design',
        'Custom branding integration',
        'User-friendly navigation',
        'Contact forms and CTAs',
        'SEO-friendly structure'
      ]
    },
    {
      icon: <Server className="h-12 w-12 text-blue-600" />,
      title: 'Hosting & Maintenance',
      description: 'Reliable hosting with regular updates and security monitoring',
      features: [
        '99.9% uptime guarantee',
        'SSL certificates included',
        'Daily backups',
        'Security monitoring',
        'Performance optimization'
      ]
    },
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: 'SEO Optimization',
      description: 'Help customers find your business online with search optimization',
      features: [
        'Keyword research',
        'On-page optimization',
        'Google My Business setup',
        'Local SEO focus',
        'Monthly progress reports'
      ]
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-600" />,
      title: 'Branding',
      description: 'Complete brand identity including logos, colors, and guidelines',
      features: [
        'Logo design',
        'Brand color palette',
        'Typography selection',
        'Brand guidelines',
        'Business card design'
      ]
    }
  ];

  const packages = [
    {
      name: 'Basic Plan',
      price: 'R3000',
      period: '/ R300 p.m',
      description: 'Perfect for businesses just getting started or trying to integrate digitally. With a R300 monthly fee.',
      features: [
        '5 custom-designed pages (e.g., Home, About, Services, Contact, Gallery)',
        'Responsive design',
        'Basic SEO setup',
        'Basic Admin management',
        'Professional Business Emails',
        'Domain & hosting'
      ],
      popular: false
    },
    {
      name: 'E-commerce Plan',
      price: 'R5000',
      period: '/ R500 p.m',
      description: 'Perfect for massive businesses or shopping businesses. With a R500 monthly fee.',
      features: [
        'Online store setup with product catalog',
        'Shopping cart & checkout system',
        'Responsive design',
        'Advanced SEO',
        'Advanced Admin management',
        'Secure payment gateway integration',
        'Social media integration',
        'Stock/inventory management system',
        'Professional Business Emails',
        'Product search & filtering',
        'Domain & hosting'
      ],
      popular: true
    },
    {
      name: 'Portfolio/Blog Plan',
      price: 'R1000',
      period: '/ R100 p.m',
      description: 'Perfect for creatives and personal blogs/portfolios. With a R100 monthly fee.',
      features: [
        'Up to 1 stylish page layout',
        'Portfolio/gallery showcase for images, videos, or projects',
        'Blog setup with category tags and search',
        'Simple contact form',
        'Domain & hosting',

      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Web Solutions for Small Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From design to hosting to ongoing maintenance, we provide everything you need to succeed online
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the package that fits your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${
                pkg.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className='text-gray-600 text-sm'>from </span>
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 text-center block ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'How long does it take to build a website?',
                answer: 'Most websites are completed within 2-3 weeks, depending on complexity and content requirements.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! All our packages include 24/7 ongoing maintenance, updates, and support to keep your website running smoothly.'
              },
              {
                question: 'Can I update content myself?',
                answer: 'Absolutely. We build user-friendly websites with easy content management, and provide training on how to make updates.'
              },
              {
                question: 'What if I need to cancel my service?',
                answer: 'You can cancel anytime with a week\'s notice. We\'ll help you transition your website to another provider if needed.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;