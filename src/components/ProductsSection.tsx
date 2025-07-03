
import ProductCard from './ProductCard';
import classicTote from '../assets/canvas-tote-classic.jpg';
import leatherTote from '../assets/leather-canvas-tote.jpg';
import juteTote from '../assets/jute-canvas-tote.jpg';
import designerTote from '../assets/designer-print-tote.jpg';
import minimalistTote from '../assets/minimalist-white-tote.jpg';
import vintageTote from '../assets/vintage-red-tote.jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

interface ProductsSectionProps {
  onAddToCart: (product: any) => void;
}

const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Classic Canvas Tote",
      price: 49.99,
      originalPrice: 59.99,
      image: classicTote
    },
    {
      id: 2,
      name: "Premium Leather Tote",
      price: 89.99,
      image: leatherTote
    },
    {
      id: 3,
      name: "Eco-Friendly Jute Bag",
      price: 34.99,
      originalPrice: 44.99,
      image: juteTote
    },
    {
      id: 4,
      name: "Designer Print Tote",
      price: 64.99,
      image: designerTote
    },
    {
      id: 5,
      name: "Minimalist Tote",
      price: 39.99,
      image: minimalistTote
    },
    {
      id: 6,
      name: "Vintage Style Bag",
      price: 54.99,
      originalPrice: 69.99,
      image: vintageTote
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium tote bags, each designed with sustainability and style in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
