import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    // Existing items
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
    },

    // Retail & E-commerce
    {
      title: 'Urban Style Boutique',
      category: 'Retail & E-commerce',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fashion boutique with seasonal collections and size guides',
      features: ['Product Catalog', 'Size Guides', 'Lookbook Gallery', 'Secure Checkout'],
      url: '#'
    },
    {
      title: 'TechGadget Store',
      category: 'Retail & E-commerce',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Electronics retailer with product comparisons and tech specs',
      features: ['Product Comparisons', 'Tech Specs', 'Warranty Info', 'Customer Reviews'],
      url: '#'
    },
    {
      title: 'Beauty Glam Cosmetics',
      category: 'Retail & E-commerce',
      image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cosmetics e-commerce with virtual try-on and beauty tutorials',
      features: ['Virtual Try-On', 'Beauty Tutorials', 'Product Reviews', 'Loyalty Program'],
      url: '#'
    },

    // Professional Services
    {
      title: 'Financial Solutions Inc.',
      category: 'Professional Services',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Financial advisory firm with client portal and investment tools',
      features: ['Client Portal', 'Investment Tools', 'Financial Calculators', 'Secure Document Upload'],
      url: '#'
    },
    {
      title: 'Prime Real Estate',
      category: 'Professional Services',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Real estate agency with property search and virtual tours',
      features: ['Property Search', 'Virtual Tours', 'Mortgage Calculator', 'Agent Profiles'],
      url: '#'
    },
    {
      title: 'Creative Architects',
      category: 'Professional Services',
      image: 'https://images.pexels.com/photos/164877/pexels-photo-164877.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Architecture firm with portfolio gallery and project timelines',
      features: ['Portfolio Gallery', 'Project Timelines', '3D Renderings', 'Consultation Booking'],
      url: '#'
    },

    // Health & Wellness
    {
      title: 'Wellness Medical Center',
      category: 'Health & Wellness',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Medical practice with online appointments and patient portal',
      features: ['Online Appointments', 'Patient Portal', 'Telemedicine', 'Health Resources'],
      url: '#'
    },
    {
      title: 'Elite Dental Care',
      category: 'Health & Wellness',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dental practice with service information and smile gallery',
      features: ['Service Information', 'Smile Gallery', 'Appointment Booking', 'Dental Tips'],
      url: '#'
    },
    {
      title: 'FitLife Wellness',
      category: 'Health & Wellness',
      image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Wellness center with program overviews and success stories',
      features: ['Program Overviews', 'Success Stories', 'Coach Profiles', 'Nutrition Guides'],
      url: '#'
    },

    // Education & Training
    {
      title: 'LearnTech Academy',
      category: 'Education & Training',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Online learning platform with course catalog and progress tracking',
      features: ['Course Catalog', 'Progress Tracking', 'Certification', 'Student Dashboard'],
      url: '#'
    },
    {
      title: 'SkillBuild Tutors',
      category: 'Education & Training',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tutoring service with subject specialists and scheduling system',
      features: ['Tutor Profiles', 'Scheduling System', 'Progress Reports', 'Resource Library'],
      url: '#'
    },

    // Food & Hospitality
    {
      title: 'Grand Hotel & Resort',
      category: 'Food & Hospitality',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury hotel with booking system and amenity information',
      features: ['Online Booking', 'Room Gallery', 'Amenity Info', 'Special Offers'],
      url: '#'
    },
    {
      title: 'Taste Catering Co.',
      category: 'Food & Hospitality',
      image: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Catering service with menu customization and event planning',
      features: ['Menu Customization', 'Event Planning', 'Gallery', 'Quote Calculator'],
      url: '#'
    },

    // Arts, Media & Entertainment
    {
      title: 'Capture Moments Photography',
      category: 'Arts, Media & Entertainment',
      image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Photography business with portfolio and booking system',
      features: ['Portfolio Gallery', 'Booking System', 'Package Options', 'Client Reviews'],
      url: '#'
    },
    {
      title: 'Dream Wedding Planners',
      category: 'Arts, Media & Entertainment',
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Wedding planning service with vendor network and inspiration gallery',
      features: ['Vendor Network', 'Inspiration Gallery', 'Budget Planner', 'Checklist Tools'],
      url: '#'
    },

    // Technology & Startups
    {
      title: 'CloudSolutions SaaS',
      category: 'Technology & Startups',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'SaaS platform with feature demonstrations and pricing tiers',
      features: ['Feature Demos', 'Pricing Tiers', 'API Documentation', 'Customer Support'],
      url: '#'
    },
    {
      title: 'AppCraft Developers',
      category: 'Technology & Startups',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'App development agency with project portfolio and client testimonials',
      features: ['Project Portfolio', 'Client Testimonials', 'Development Process', 'Contact Forms'],
      url: '#'
    },

    // Home & Lifestyle
    {
      title: 'GreenThumb Landscaping',
      category: 'Home & Lifestyle',
      image: 'https://images.pexels.com/photos/177557/pexels-photo-177557.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Landscaping service with project gallery and maintenance plans',
      features: ['Project Gallery', 'Maintenance Plans', 'Free Estimates', 'Seasonal Services'],
      url: '#'
    },
    {
      title: 'Sparkle Clean Services',
      category: 'Home & Lifestyle',
      image: 'https://images.pexels.com/photos/4107262/pexels-photo-4107262.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cleaning service with booking system and service packages',
      features: ['Online Booking', 'Service Packages', 'Recurring Plans', 'Satisfaction Guarantee'],
      url: '#'
    },

    // Travel & Transportation
    {
      title: 'ExploreMore Travel',
      category: 'Travel & Transportation',
      image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Travel agency with destination guides and package deals',
      features: ['Destination Guides', 'Package Deals', 'Booking System', 'Travel Tips'],
      url: '#'
    },
    {
      title: 'QuickRide Taxi',
      category: 'Travel & Transportation',
      image: 'https://images.pexels.com/photos/4489770/pexels-photo-4489770.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Taxi service with booking app integration and fare calculator',
      features: ['App Integration', 'Fare Calculator', 'Driver Tracking', 'Multiple Payment Options'],
      url: '#'
    },

    // Nonprofits & Organizations
    {
      title: 'Hope Foundation',
      category: 'Nonprofits & Organizations',
      image: 'https://images.pexels.com/photos/6646904/pexels-photo-6646904.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nonprofit organization with donation system and impact stories',
      features: ['Donation System', 'Impact Stories', 'Volunteer Registration', 'Event Calendar'],
      url: '#'
    },
    {
      title: 'Community Church',
      category: 'Nonprofits & Organizations',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Religious institution with event calendar and sermon library',
      features: ['Event Calendar', 'Sermon Library', 'Online Giving', 'Ministry Groups'],
      url: '#'
    }
  ];

  const categories = [
    'All', 
    'Restaurant', 
    'Service Business', 
    'Retail', 
    'Professional Services', 
    'Health & Fitness',
    'E-commerce',
    'Retail & E-commerce',
    'Health & Wellness',
    'Education & Training',
    'Food & Hospitality',
    'Arts, Media & Entertainment',
    'Technology & Startups',
    'Home & Lifestyle',
    'Travel & Transportation',
    'Nonprofits & Organizations'
  ];
  
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
            Explore our diverse portfolio of websites across various industries. Like what you see? Let's chat!
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600">
              Our websites deliver real business results for clients in diverse sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Industries Served</div>
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