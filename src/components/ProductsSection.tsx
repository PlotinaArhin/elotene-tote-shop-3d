
import ProductCard from './ProductCard';
import orangeKenteTote from '../assets/elotene-orange-kente-tote.jpg';
import denimPatchworkTote from '../assets/elotene-denim-patchwork-tote.jpg';
import orangeBrownKenteTote from '../assets/elotene-orange-brown-kente-tote.jpg';
import leatherTote from '../assets/leather-canvas-tote.jpg';
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
      name: "Eloténe Orange Kente Tote",
      price: 64.99,
      originalPrice: 79.99,
      image: orangeKenteTote
    },
    {
      id: 2,
      name: "Eloténe Denim Patchwork Tote",
      price: 69.99,
      image: denimPatchworkTote
    },
    {
      id: 3,
      name: "Eloténe Orange Brown Kente Tote",
      price: 74.99,
      originalPrice: 89.99,
      image: orangeBrownKenteTote
    },
    {
      id: 4,
      name: "Premium Leather Tote",
      price: 89.99,
      image: leatherTote
    },
    {
      id: 5,
      name: "Minimalist Tote",
      price: 39.99,
      image: minimalistTote
    }
  ];

  return (
    <section id="products" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="font-script text-primary text-5xl">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of handcrafted tote bags, each featuring authentic African kente patterns and traditional craftsmanship.
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
          <button className="bg-gradient-warm text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
