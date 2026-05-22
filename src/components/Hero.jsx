// src/components/Hero.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  IoPlayCircleOutline,
  IoStar,
  IoFlash,
} from "react-icons/io5";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8f5] via-[#fffbf7] to-[#fff8f5]">

      {/* BACKGROUND EFFECTS - OPTIMIZED */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-orange-300/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-red-300/20 blur-3xl rounded-full pointer-events-none"></div>

      {/* DECORATIVE ELEMENT */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none opacity-30"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8"
          >

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg border border-orange-200 rounded-full px-4 sm:px-5 py-2.5 w-fit hover:scale-105 transition-transform"
            >
              <IoFlash className="text-orange-500 text-lg sm:text-xl flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                Eng tez yetkazib berish 🚀
              </span>
            </motion.div>

            {/* TITLE - RESPONSIVE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight sm:leading-snug lg:leading-tight text-gray-900 tracking-tight"
            >
              Eng Mazali{" "}
              <span className="block">
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Fast Food
                </span>
              </span>
              <span className="block text-gray-900">Siz Uchun</span>
            </motion.h1>

            {/* DESCRIPTION - READABLE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-7 lg:leading-8 max-w-xl"
            >
              Orom Fast Food — issiq burgerlar, pizza, fri va ichimliklarni eng tezkor usulda uyingizgacha yetkazib beramiz. Mazali ta'm va premium servis bir joyda.
            </motion.p>

            {/* BUTTONS - RESPONSIVE */}
            <div
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >

              <button
                onClick={() => navigate("/menu")}
                className="h-11 sm:h-12 px-6 sm:px-7 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap flex items-center justify-center gap-2"
              >
                Buyurtma berish
              </button>

              <button
                onClick={() => navigate("/menu")}
                className="h-11 sm:h-12 px-6 sm:px-7 rounded-xl bg-white border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 font-semibold text-gray-700 hover:text-orange-600 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all text-sm"
              >
                <IoPlayCircleOutline size={18} />
                <span>Menuni ko'rish</span>
              </button>

            </div>

            {/* STATS - RESPONSIVE GRID */}
            <div className="flex gap-3 sm:gap-4 pt-4">

              <div className="flex-1 bg-white rounded-2xl px-3 sm:px-4 py-3 sm:py-4 shadow-md border border-orange-100/50">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                  15k+
                </h3>
                <p className="text-gray-500 text-xs mt-1">
                  Mamnun mijozlar
                </p>
              </div>

              <div className="flex-1 bg-white rounded-2xl px-3 sm:px-4 py-3 sm:py-4 shadow-md border border-orange-100/50">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} className="text-yellow-400 text-sm sm:text-base" />
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-1.5">
                  5 yulduzli servis
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SECTION - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] w-full"
          >

            {/* BACKGROUND GLOW - STATIC */}
            <div className="absolute inset-0 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px] mx-auto bg-gradient-to-br from-orange-400/25 to-red-400/25 blur-3xl rounded-full pointer-events-none"></div>

            {/* ORANGE CIRCLE */}
            <div className="absolute inset-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] mx-auto rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-5 pointer-events-none"></div>

            {/* FLOATING CARD 1 - BURGER - STATIC */}
            <div className="hidden sm:flex absolute top-6 sm:top-8 lg:top-12 left-0 sm:left-2 lg:left-4 bg-white shadow-lg rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 items-center gap-2 sm:gap-3 z-20">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-100 flex items-center justify-center text-xl flex-shrink-0">
                🍔
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-xs sm:text-sm">
                  Double Burger
                </h4>
                <p className="text-xs text-gray-500">
                  Juda mazali 🔥
                </p>
              </div>
            </div>

            {/* FLOATING CARD 2 - FRIES - STATIC */}
            <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 lg:bottom-12 right-0 sm:right-2 lg:right-4 bg-white shadow-lg rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 items-center gap-2 sm:gap-3 z-20">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-100 flex items-center justify-center text-xl flex-shrink-0">
                🍟
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-xs sm:text-sm">
                  Crispy Fries
                </h4>
                <p className="text-xs text-gray-500">
                  Issiq va yangi
                </p>
              </div>
            </div>

            {/* FOOD IMAGE - STATIC, RESPONSIVE */}
            <img
              src="/src/assets/food-orginal.png"
              alt="Orom Fast Food - Delicious burgers and fries"
              className="relative z-10 w-[240px] h-auto sm:w-[320px] md:w-[420px] lg:w-[520px] drop-shadow-2xl object-contain max-w-full"
              loading="lazy"
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}