import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5"
import { useUI } from "../context/UIContext"
import { useCart } from "../context/CartContext"

export default function CartDrawer() {

  const { cartOpen, toggleCart } = useUI()
  const { cart, removeFromCart } = useCart()

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  )

  return (
    <>
      {/* Overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleCart}
        />
      )}

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: cartOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 w-[380px] h-full bg-white z-50 shadow-2xl flex flex-col"
      >

        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold">
            Savat
          </h2>

          <button
            onClick={toggleCart}
            className="hover:rotate-90 transition"
          >
            <IoClose size={26} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">

          {cart.length === 0 && (
            <p className="text-gray-500 text-center mt-20">
              Savatingiz bo'sh
            </p>
          )}

          {cart.map(item => (

            <div
              key={item.id}
              className="flex gap-4 border-b pb-4"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />

              <div className="flex-1">

                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.price} so'm
                </p>

                <p className="text-sm text-gray-400">
                  Soni: {item.qty}
                </p>

              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600 text-sm"
              >
                O'chirish
              </button>

            </div>

          ))}

        </div>

        {/* Footer */}
        <div className="border-t p-5 space-y-4">

          <div className="flex justify-between font-semibold">
            <span>Jami:</span>
            <span>{totalPrice} so'm</span>
          </div>

          <button
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-xl font-semibold transition"
          >
            Buyurtma berish
          </button>

        </div>

      </motion.div>
    </>
  )
}