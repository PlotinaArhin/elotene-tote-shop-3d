
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  onAddToCart: (product: any) => void;
}

const ProductCard = ({ id, name, price, originalPrice, image, onAddToCart }: ProductCardProps) => {
  const product = { id, name, price, image };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 p-8">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Wishlist button */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
          <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {/* Sale badge */}
        {originalPrice && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sale
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-amber-600">${price}</span>
            {originalPrice && (
              <span className="text-lg text-gray-400 line-through">${originalPrice}</span>
            )}
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <ShoppingCart size={20} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
