import { useShop } from "../context/ShopContext";
import { FiPlus, FiMinus, FiTrash2, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    changeQty,
    cartTotal,
    cartCount
  } = useShop();

  const [orderPlaced, setOrderPlaced] = useState(false);

  // BUG FIX: cartTotal is NOT a function, it's a useMemo value
  const total = cartTotal;

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Savat bo'sh
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Hozircha savatchada mahsulot yo'q. Menyu'dan biror narsa tanlang!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/menu")}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 hover:shadow-lg transition-shadow"
          >
            Menyu'ga o'tish <FiArrowRight />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    setOrderPlaced(true);
    toast.success("Buyurtma muvaffaqiyatli qabul qilindi! 🎉");

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-center max-w-md bg-white p-8 rounded-3xl shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <FiCheckCircle className="text-green-500 text-6xl" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Rahmat! ✨
          </h2>
          <p className="text-gray-500 mb-2">Buyurtma raqami: #ORD{Math.floor(Math.random() * 100000)}</p>
          <p className="text-gray-500 mb-6">
            Tayyoq vaqti: 30-45 daqiqa
          </p>
          <p className="text-2xl font-bold text-orange-500 mb-6">
            Jami: {total.toLocaleString()} so'm
          </p>
          <p className="text-gray-400 text-sm">
            Bosh sahifaga yo'naltirilmoqdasiz...
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-6">
          <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Savatcha 🛒
          </h1>
          <p className="text-gray-500 mt-2">
            Jami mahsulot: <span className="font-bold text-gray-800">{cartCount}</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="space-y-4"
            >
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-5 items-start">
                    {/* Image */}
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 text-lg truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {item.price.toLocaleString()} so'm / dona
                      </p>
                      <p className="text-orange-600 font-bold text-lg mt-2">
                        {(item.price * item.qty).toLocaleString()} so'm
                      </p>
                    </div>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => changeQty(item.id, "dec")}
                        className="p-2 hover:bg-white rounded-full transition-colors text-gray-600 hover:text-orange-600"
                      >
                        <FiMinus size={16} />
                      </motion.button>

                      <span className="w-8 text-center font-bold text-gray-800">
                        {item.qty}
                      </span>

                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => changeQty(item.id, "inc")}
                        className="p-2 hover:bg-white rounded-full transition-colors text-gray-600 hover:text-orange-600"
                      >
                        <FiPlus size={16} />
                      </motion.button>
                    </div>

                    {/* Delete */}
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.success("Ochirildi");
                      }}
                      className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                    >
                      <FiTrash2 size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Continue Shopping */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/menu")}
              className="mt-8 w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-orange-500 hover:text-orange-600 transition-all"
            >
              ← Menyu'ga qaytish
            </motion.button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-28 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Buyurtma xulosasi
              </h2>

              {/* Summary Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Mahsulotlar:</span>
                  <span className="font-semibold">{cartCount} dona</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Summa:</span>
                  <span className="font-semibold">{total.toLocaleString()} so'm</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Yetkazib berish:</span>
                  <span className="font-semibold text-green-600">Bepul 🚚</span>
                </div>

                <div className="flex justify-between text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <span>Bonus:</span>
                  <span className="font-bold text-yellow-600">+{Math.floor(total / 1000)} ball</span>
                </div>
              </div>

              {/* Total */}
              <div className="mb-6">
                <div className="flex justify-between mb-3">
                  <span className="text-gray-700 font-semibold">Jami:</span>
                  <span className="text-3xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {total.toLocaleString()}
                  </span>
                </div>
                <span className="text-gray-400 text-sm">so'm</span>
              </div>

              {/* Checkout Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlaceOrder}
                className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-bold py-4 rounded-xl hover:shadow-2xl transition-shadow flex items-center justify-center gap-2 group"
              >
                Buyurtma berish <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Info */}
              <p className="text-center text-gray-400 text-xs mt-4">
                ✓ Xavfsiz to'lov
              </p>
              <p className="text-center text-gray-400 text-xs">
                ✓ Tez yetkazib berish
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}