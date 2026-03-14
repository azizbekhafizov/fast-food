import { Phone, MapPin, Clock } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-yellow-100 via-white to-yellow-50 border-t shadow-inner">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h1 className="text-2xl font-extrabold text-primary">
            🍔 Orom Fast Food
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Sizga eng mazali burger, pizza va fast food taomlarini tez va
            sifatli yetkazib beramiz. Har kuni yangi va issiq taomlar!
          </p>

          <div className="flex gap-4 pt-1">
            <a
              href="#"
              className="p-3 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-full text-white hover:scale-110 transition shadow-md"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="#"
              className="p-3 bg-blue-500 rounded-full text-white hover:scale-110 transition shadow-md"
            >
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            Tezkor Havolalar
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="/" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-primary transition">
                Menu
              </a>
            </li>
            <li>
              <a href="/checkout" className="hover:text-primary transition">
                Checkout
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary transition">
                Bog‘lanish
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            Biz bilan bog‘lanish
          </h3>
          <div className="flex items-center gap-3 ">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full
    bg-gradient-to-tr from-red-500 to-orange-400 text-white shadow-md"
            >
              <Phone size={18} />
            </div>

            <a href="tel:+998930901111" className="text-gray-700 font-medium">
              +998 93 090 11 11
            </a>
          </div>
          <div className="flex items-center gap-3 ">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full
    bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-md"
            >
              <MapPin size={18} />
            </div>

            <p className="text-gray-700 font-medium">
              Samarqand, Ravot
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full
    bg-gradient-to-tr from-purple-500 to-pink-400 text-white shadow-md"
            >
              <Clock size={18} />
            </div>

            <p className="text-gray-700 font-medium">09:00 – 23:00</p>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-5"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            Yangiliklardan xabardor bo‘ling
          </h3>

          <p className="text-gray-600">
            Emailingizni qoldiring va maxsus takliflardan birinchi bo‘lib
            xabardor bo‘ling.
          </p>

          <form className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Emailingiz"
              className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="bg-primary px-5 py-2 rounded-r-full text-white hover:scale-105 transition"
            >
              Jo‘natish
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-10 py-5 text-center text-gray-500 text-sm px-4">
        © 2026 Orom Fast Food. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
