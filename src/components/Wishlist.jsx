import { FiX } from "react-icons/fi";
import { useShop } from "../context/ShopContext"


export default function Wishlist() {
  const { wishlistOpen, setWishlistOpen } = useUI();
  const { wishlist, toggleWishlist } = useShop()

  if (!wishlistOpen) return null;

  return (
    <>
      {/* overlay */}
      <div
        onClick={() => setWishlistOpen(false)}
        className="fixed inset-0 bg-black/30 z-40"
      />

      {/* drawer */}
      <div className="fixed top-20 right-0 w-80 h-[calc(100%-5rem)] bg-white shadow-2xl rounded-l-2xl p-4 z-50 overflow-y-auto">

        {/* header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Sevimlilar</h2>

          <button onClick={() => setWishlistOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        {/* empty */}
        {wishlist.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            Sevimlilar bo'sh
          </p>
        ) : (

          <ul className="space-y-3">

            {wishlist.map(item => (

              <li
                key={item.id}
                className="flex items-center justify-between bg-white p-3 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.price} so'm</p>
                  </div>
                </div>

                <button
                  onClick={() => toggleWishlist(item)}
                  className="text-red-500 text-xl"
                >
                  ×
                </button>
              </li>

            ))}

          </ul>
        )}
      </div>
    </>
  );
}