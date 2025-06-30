
import { Leaf, Heart, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} onCartClick={() => {}} />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
                About Elotene
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Crafting sustainable, stylish tote bags for the conscious consumer. 
                We believe in quality materials, timeless designs, and ethical production.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Elotene was born from a simple belief: that everyday accessories should be both beautiful and responsible. 
                  Founded in 2020, we started with a mission to create tote bags that would last a lifetime while minimizing our environmental impact.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Every Elotene bag is carefully crafted using sustainable materials sourced from ethical suppliers. 
                  We work directly with artisans who share our commitment to quality and environmental stewardship.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to offer a collection of timeless designs that reflect our values: 
                  sustainability, durability, and style that transcends trends.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop" 
                  alt="Woman working on laptop"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything we do is guided by our core values that shape every decision we make.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We use eco-friendly materials and sustainable production methods to minimize our environmental footprint.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
                <p className="text-gray-600">
                  Every bag is crafted with attention to detail and built to last, ensuring you get value for years to come.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Community</h3>
                <p className="text-gray-600">
                  We believe in supporting local artisans and building lasting relationships with our customers and partners.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our business, from design to customer service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The passionate individuals behind Elotene who make it all possible.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=128&h=128&fit=crop&crop=face" 
                    alt="Sarah Johnson"
                    className="w-28 h-28 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarah Johnson</h3>
                <p className="text-amber-600 mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Passionate about sustainable fashion and ethical business practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=128&h=128&fit=crop&crop=face" 
                    alt="Mike Chen"
                    className="w-28 h-28 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mike Chen</h3>
                <p className="text-amber-600 mb-2">Head of Design</p>
                <p className="text-gray-600 text-sm">
                  Creates timeless designs that blend functionality with aesthetic appeal.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=128&h=128&fit=crop&crop=face" 
                    alt="Emma Rodriguez"
                    className="w-28 h-28 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Emma Rodriguez</h3>
                <p className="text-amber-600 mb-2">Sustainability Director</p>
                <p className="text-gray-600 text-sm">
                  Ensures all our practices align with our environmental commitments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
