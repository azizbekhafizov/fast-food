// src/components/ProductModal.jsx
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppUI } from "../context/AppUIContext";

export default function ProductModal({ product }) {
  const { setSidebarOpen } = useAppUI(); // Agar kerak bo‘lsa boshqa togglelar

  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState(
    product.variants ? product.variants[0] : null
  );

  const price = variant ? variant.price : product.price;

  const handleAdd = () => {
    toast.success(`${product.name} tanlandi (${qty} dona)`);
  };

  return (
    <>
      <div
        onClick={() => setSidebarOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[1000px] max-w-[95%] rounded-3xl shadow-2xl p-6"
      >
        <button onClick={() => setSidebarOpen(false)} className="absolute right-4 top-4">
          <IoClose size={26} />
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <img src={product.image} className="w-full object-contain" />

          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-500 mt-3">{product.description}</p>

            {product.variants && (
              <div className="mt-6">
                <h3 className="font-semibold mb-3">O'lchamni tanlang</h3>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.name}
                      onClick={() => setVariant(v)}
                      className={`px-5 py-2 rounded-xl border font-medium transition ${
                        variant?.name === v.name
                          ? "bg-red-600 text-white border-red-600"
                          : "bg-white hover:bg-gray-100"
                      }`}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-9 h-9 bg-gray-200 rounded-lg"
              >
                -
              </button>
              <span className="text-lg font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-9 h-9 bg-gray-200 rounded-lg"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="mt-8 w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl font-semibold transition"
            >
              Tanlash — {price * qty} so'm
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}