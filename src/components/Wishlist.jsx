import { useUI } from "../context/UIContext";
import { useCart } from "../context/CartContext";
import { FiX } from "react-icons/fi";

export default function Wishlist() {
  const { wishlistOpen, setWishlistOpen } = useUI();
  const { wishlist, toggleWishlist } = useCart();

  if (!wishlistOpen) return null; // <-- wishlist faqat ochilganida render bo‘lsin

  return (
    <div className="fixed top-20 right-0 w-80 h-[calc(100%-5rem)] bg-white shadow-2xl rounded-l-2xl p-4 z-50 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Wishlist</h2>
        <button onClick={() => setWishlistOpen(false)}>
          <FiX size={24} />
        </button>
      </div>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Wishlist is empty</p>
      ) : (
        <ul className="space-y-3">
          {wishlist.map(item => (
            <li key={item.id} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                <span>{item.name}</span>
              </div>
              <button
                onClick={() => toggleWishlist(item)}
                className="text-red-500 font-bold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}