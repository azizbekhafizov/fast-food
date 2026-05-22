import { Phone, MapPin, Clock } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#fff8f5] overflow-hidden pt-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-300/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-10 relative z-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-black text-gray-900">
              🍔 Orom <span className="text-red-500">Fast Food</span>
            </h1>

            <p className="mt-5 text-gray-600 leading-7">
              Eng mazali burger, pizza va lavashlar tez yetkazib beriladi.
              Har doim issiq va sifatli taomlar 🍟
            </p>

            <div className="flex gap-3 mt-6">

              <a className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
                <FaInstagram />
              </a>

              <a className="w-11 h-11 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
                <FaTelegramPlane />
              </a>

            </div>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Bo‘limlar
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="hover:text-orange-500 cursor-pointer">Bosh sahifa</li>
              <li className="hover:text-orange-500 cursor-pointer">Menyu</li>
              <li className="hover:text-orange-500 cursor-pointer">Aksiyalar</li>
              <li className="hover:text-orange-500 cursor-pointer">Bog‘lanish</li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Aloqa
            </h3>

            <div className="space-y-5 text-gray-700">

              <a href="tel:+998930901111" className="flex items-center gap-3 hover:text-orange-500">
                <Phone className="text-orange-500" size={18} />
                +998 93 090 11 11
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500" size={18} />
                Samarqand, Ravot
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-orange-500" size={18} />
                09:00 – 23:00
              </div>

            </div>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Aksiya xabarlari
            </h3>

            <p className="text-gray-600 mb-5">
              Eng yangi chegirmalardan birinchi bo‘lib xabardor bo‘ling.
            </p>

            <div className="bg-white border border-orange-100 rounded-3xl p-3 flex shadow-lg">
              <input
                type="email"
                placeholder="Email..."
                className="flex-1 px-3 outline-none text-sm"
              />

              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition">
                Jo‘natish
              </button>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-orange-100 py-6 text-center text-gray-500 text-sm">
          © 2026 Orom Fast Food — Barcha huquqlar himoyalangan
        </div>

      </div>
    </footer>
  );
}