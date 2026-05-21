import { motion } from "framer-motion";
import { useEffect } from "react";

export default function CategoryFilter({ categories, active, setActive }) {

  const handleCategoryClick = (id) => {
    setActive(id);

    // Smooth scroll to section
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-3"
    >
      <h3 className="text-lg font-bold text-gray-800 mb-5 px-2">
        Kategoriyalar
      </h3>

      <div className="flex flex-col gap-2">
        {categories.map((cat, index) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryClick(cat.id)}
            className={`relative w-full px-4 py-3 rounded-xl font-semibold text-left transition-all duration-300 flex items-center gap-3 group overflow-hidden ${
              active === cat.id
                ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {/* Background animation for hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />

            {/* Content */}
            <span className="relative z-10 text-lg">{cat.icon}</span>
            <span className="relative z-10 flex-1 truncate text-sm lg:text-base">
              {cat.name}
            </span>

            {/* Active Indicator */}
            {active === cat.id && (
              <motion.div
                layoutId="activeIndicator"
                className="relative z-10 w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent my-6" />

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 space-y-2"
      >
        <p className="text-sm font-semibold text-gray-800">
          💡 Maslahat
        </p>
        <p className="text-xs text-gray-600 leading-relaxed">
          Sayohatning ro'yxatida o'ng tomonda turgan kategoriyalarni bosing yoki o'zidan asl page'ni asdilash uchun avizsyon o'tkazing.
        </p>
      </motion.div>
    </motion.div>
  );
}