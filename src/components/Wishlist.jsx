import { FiX } from "react-icons/fi";
import { useShop } from "../context/ShopContext";
import { useAppUI } from "../context/AppUIContext";

export default function Wishlist() {

  const {
    wishlistOpen,
    setWishlistOpen
  } = useAppUI();

  const {
    wishlist,
    toggleWishlist,
    addToCart
  } = useShop();

  if (!wishlistOpen) return null;

  return (
    <>
      {/* overlay */}
      <div
        onClick={() => setWishlistOpen(false)}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* drawer */}
      <div className="fixed top-0 right-0 w-[360px] h-screen bg-white z-50 shadow-2xl p-5 overflow-y-auto">

        <div className="flex items-center justify-between border-b pb-4">

          <h2 className="text-2xl font-bold">
            Wishlist ❤️
          </h2>

          <button
            onClick={() => setWishlistOpen(false)}
          >
            <FiX size={24} />
          </button>

        </div>

        {wishlist.length === 0 ? (

          <div className="flex justify-center items-center h-[80vh] text-gray-400">
            Wishlist bo'sh 😢
          </div>

        ) : (

          <div className="space-y-4 mt-5">

            {wishlist.map(item => (

              <div
                key={item.id}
                className="bg-gray-50 rounded-2xl p-3 flex gap-3"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-red-500 font-bold mt-1">
                    {item.price} so'm
                  </p>

                  <div className="flex gap-2 mt-3">

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-black text-white px-4 py-2 rounded-xl text-sm"
                    >
                      Cart
                    </button>

                    <button
                      onClick={() => toggleWishlist(item)}
                      className="border px-4 py-2 rounded-xl text-sm"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </>
  );
}