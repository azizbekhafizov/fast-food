import { useShop } from "../context/ShopContext"
import { FiPlus, FiMinus, FiTrash } from "react-icons/fi"

export default function Cart() {

  const {
    cart,
    removeFromCart,
    changeQty,
    getTotal
  } = useShop()

  if (cart.length === 0) {
    return (
      <div className="text-center py-40 text-gray-400 text-xl">
        Savat bo‘sh 😢
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-3xl font-bold mb-10">
        Savatcha 🛒
      </h1>

      <div className="space-y-6">

        {cart.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-2xl shadow"
          >

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                className="w-20 h-20 object-cover rounded-xl"
              />

              <div>
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.price} so'm
                </p>
              </div>

            </div>

            {/* qty */}
            <div className="flex items-center gap-3">

              <button
                onClick={() => changeQty(item.id, "dec")}
                className="p-2 bg-gray-100 rounded-lg"
              >
                <FiMinus />
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => changeQty(item.id, "inc")}
                className="p-2 bg-gray-100 rounded-lg"
              >
                <FiPlus />
              </button>

            </div>

            {/* price */}
            <div className="font-bold text-red-500">
              {item.price * item.qty} so'm
            </div>

            {/* delete */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <FiTrash />
            </button>

          </div>
        ))}

      </div>

      {/* total */}
      <div className="mt-10 text-right">

        <h2 className="text-2xl font-bold">
          Jami: {getTotal()} so'm
        </h2>

        <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition">
          Buyurtma berish
        </button>

      </div>

    </div>
  )
}