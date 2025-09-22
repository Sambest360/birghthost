import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "7bfa105c-8315-4f24-b4ed-2b45c2f50d39");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
      
      if (res.success) {
        setIsSubmitted(true);
        
        // Show mobile popup on small screens instead of inline message
        if (isMobile) {
          setShowMobilePopup(true);
        }
        
        setTimeout(() => {
          setIsSubmitted(false);
          setShowMobilePopup(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            business: '',
            service: '',
            budget: '',
            message: ''
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // You might want to show an error popup here as well
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeMobilePopup = () => {
    setShowMobilePopup(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '0678224015',
      link: 'tel:+27678224015'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'sambampo200@gmail.com',
      link: 'mailto:sambampo200@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      details: 'Port Elizabeth (Gqeberha)',
      link: '#'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: 'Mon - Sun | 24/7 Support',
      link: '#'
    }
  ];

  const services = [
    'Basic Site',
    'E-commerce site',
    'Portfolio/Blog site',
    'Other'
  ];

  return (
    <div className="pt-20">
      {/* Mobile Success Popup */}
      {showMobilePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 md:hidden">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <button 
                onClick={closeMobilePopup}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-4">
              We've received your message and will get back to you within 24 hours.
            </p>
            <button
              onClick={closeMobilePopup}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to take your business online? Get a free consultation and quote. 
            We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {/* Show success message only on desktop */}
              {isSubmitted && !isMobile ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="Sam Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="sam@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="(111) 111-1111"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements...If other, please specify."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We'd love to hear about your project! Whether you need a new website, 
                  hosting services, or just have questions, we're here to help. 
                  Contact us today for a free consultation.
                </p>
              </div>

              <div className="grid gap-4 md:gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-blue-600 mt-1 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.link !== '#' ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-blue-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <p className="text-blue-100 mb-4">
                  Stay updated with our latest work and web design tips (Our social media links are currently under construction and will be added soon).
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom CSS for animation */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Contact;