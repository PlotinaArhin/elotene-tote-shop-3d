
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-tote-bags.jpg';

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight opacity-0 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:forwards]">
                Sustainable
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent opacity-0 animate-fade-in [animation-delay:0.6s] [animation-fill-mode:forwards]">
                  Tote Bags
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg opacity-0 animate-fade-in [animation-delay:1.0s] [animation-fill-mode:forwards]">
                Discover our collection of premium, eco-friendly tote bags designed for the modern lifestyle.
                Crafted with care, built to last.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in [animation-delay:1.4s] [animation-fill-mode:forwards]">
              <button 
                onClick={scrollToProducts}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Shop Collection
              </button>
              <Link 
                to="/about"
                className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-amber-200 opacity-0 animate-fade-in [animation-delay:1.8s] [animation-fill-mode:forwards]">
              <div className="text-center transform translate-y-4 animate-fade-in [animation-delay:2.0s] [animation-fill-mode:forwards]">
                <div className="text-2xl font-bold text-amber-600">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center transform translate-y-4 animate-fade-in [animation-delay:2.2s] [animation-fill-mode:forwards]">
                <div className="text-2xl font-bold text-amber-600">Eco</div>
                <div className="text-sm text-gray-600">Friendly Materials</div>
              </div>
              <div className="text-center transform translate-y-4 animate-fade-in [animation-delay:2.4s] [animation-fill-mode:forwards]">
                <div className="text-2xl font-bold text-amber-600">24/7</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative opacity-0 animate-scale-in [animation-delay:0.8s] [animation-fill-mode:forwards]">
            <div className="rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-2xl">
              <img 
                src={heroImage}
                alt="Premium sustainable tote bags" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 animate-[fade-in_1s_ease-out_2.6s_forwards,pulse_2s_ease-in-out_3s_infinite]"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-red-400 rounded-full opacity-0 animate-[fade-in_1s_ease-out_2.8s_forwards,pulse_2s_ease-in-out_3.2s_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
