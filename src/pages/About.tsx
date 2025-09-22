import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Heart, Award, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Client-Focused',
      description: 'Every decision we make is guided by what\'s best for our clients\' success'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Results-Driven',
      description: 'We measure success by the growth and achievement of your business goals'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Partnership',
      description: 'We work alongside you as your trusted technology partner, not just a vendor'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We deliver high-quality work that exceeds expectations every time'
    }
  ];

  const team = [
    {
      name: 'Samuel Koranteng Amoah Bampo',
      role: 'Founder & Lead Developer',
      image: '/src/img/sam1.jpeg',
      bio: 'With over 5 years in web development, Samuel founded BrightHost to make professional websites accessible to small businesses.'
    },
    // {
    //   name: 'Gloria Amanda Oteng',
    //   role: 'Founder & Lead Developer',
    //   image: 'image 1',
    //   bio: 'With over 5 years in web development, Samuel founded BrightHost to make professional websites accessible to small businesses.'
    // }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering Small Businesses with
                <span className="text-blue-600"> Professional Web Presence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2023, BrightHost Web Services was born from a simple belief: 
                every small business deserves a professional website that drives real results, 
                without breaking the bank.
              </p>
              <Link
                to="/contact"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center"
              >
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              BrightHost Web Services began when our founder, Samuel, was helping his friend's small
              business get online. After seeing how expensive and complicated most web design 
              agencies made the process, he realized there had to be a better way.
            </p>
            
            <p className="mb-6">
              We started with a mission to make professional web design accessible and affordable 
              for small businesses. No technical jargon, no hidden fees, no months-long projects. 
              Just beautiful, functional websites that help businesses grow.
            </p>
            
            <p className="mb-6">
              Today, we've helped multiple small businesses establish their online presence. We are a 
              small but efficient team who will work around the clock to to provide the best service for each and every client we work with.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to helping small businesses succeed online with affordable, 
              professional web solutions and ongoing support
            </p>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 mb-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              To democratize professional web design by providing small businesses with affordable, 
              high-quality websites and ongoing support that drives real business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Me
            </h2>
            <p className="text-xl text-gray-600">
              The dedicated professional behind your success.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Here's how we've helped small businesses grow online
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-blue-100">Websites Created</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-blue-100">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-blue-100">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Grow Your Business with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of successful small businesses who trust BrightHost with their online presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
            >
              View What I Offer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;