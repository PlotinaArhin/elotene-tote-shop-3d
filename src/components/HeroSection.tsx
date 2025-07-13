
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
    <section id="home" className="min-h-screen bg-background pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight opacity-0 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:forwards]">
                Authentic
                <span className="block font-script text-primary opacity-0 animate-fade-in [animation-delay:0.6s] [animation-fill-mode:forwards]">
                  African Style
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg opacity-0 animate-fade-in [animation-delay:1.0s] [animation-fill-mode:forwards]">
                Discover our collection of handcrafted tote bags featuring traditional African kente patterns.
                Each piece tells a story of heritage and craftsmanship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in [animation-delay:1.4s] [animation-fill-mode:forwards]">
              <button 
                onClick={scrollToProducts}
                className="bg-gradient-warm text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Shop Collection
              </button>
              <Link 
                to="/about"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border opacity-0 animate-fade-in [animation-delay:1.8s] [animation-fill-mode:forwards]">
              <div className="text-center transform translate-y-4 animate-fade-in [animation-delay:2.0s] [animation-fill-mode:forwards]">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Handcrafted Pieces</div>
              </div>
              <div className="text-center transform translate-y-4 animate-fade-in [animation-delay:2.2s] [animation-fill-mode:forwards]">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Authentic Kente</div>
              </div>
              <div className="text-center transform translate-y-4 animate-fade-in [animation-delay:2.4s] [animation-fill-mode:forwards]">
                <div className="text-2xl font-bold text-primary">Ghana</div>
                <div className="text-sm text-muted-foreground">Heritage Inspired</div>
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
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-kente rounded-full opacity-0 animate-[fade-in_1s_ease-out_2.6s_forwards,pulse_2s_ease-in-out_3s_infinite]"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-warm rounded-full opacity-0 animate-[fade-in_1s_ease-out_2.8s_forwards,pulse_2s_ease-in-out_3.2s_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
