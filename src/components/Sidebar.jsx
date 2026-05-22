// src/components/Sidebar.jsx

import { motion, AnimatePresence } from "framer-motion";
import {
  IoClose,
  IoHomeOutline,
  IoRestaurantOutline,
  IoCallOutline,
  IoChevronForward,
} from "react-icons/io5";

import { Link, useLocation } from "react-router-dom";
import { useAppUI } from "../context/AppUIContext";

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useAppUI();
  const location = useLocation();

  const menuItems = [
    {
      name: "Bosh sahifa",
      path: "/",
      icon: <IoHomeOutline size={22} />,
    },
    {
      name: "Menyu",
      path: "/menu",
      icon: <IoRestaurantOutline size={22} />,
    },
  ];

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
            }}
            className="fixed top-0 right-0 h-screen w-[85%] max-w-[340px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 pt-8 pb-10 rounded-b-[35px]">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold text-white">
                    Sarbon
                  </h2>

                  <p className="text-white/80 text-sm mt-1">
                    Mazali taomlar 🍴
                  </p>
                </div>

                <button
                  onClick={() => setSidebarOpen(false)}
                  className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center text-white backdrop-blur-md"
                >
                  <IoClose size={24} />
                </button>
              </div>
            </div>

            {/* Menu */}
            <div className="flex-1 px-5 py-6">
              <div className="flex flex-col gap-3">
                {menuItems.map((item, index) => {
                  const active = location.pathname === item.path;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 ${
                          active
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                            : "bg-gray-100 hover:bg-orange-50 text-gray-700"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                              active
                                ? "bg-white/20"
                                : "bg-white text-orange-500"
                            }`}
                          >
                            {item.icon}
                          </div>

                          <span className="font-semibold text-[17px]">
                            {item.name}
                          </span>
                        </div>

                        <IoChevronForward
                          size={20}
                          className={
                            active ? "text-white" : "text-gray-400"
                          }
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Promo Card */}
              <div className="mt-8 bg-gradient-to-br from-black to-gray-900 rounded-[28px] p-5 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <span className="bg-orange-500 text-xs px-3 py-1 rounded-full font-semibold">
                    MAXSUS
                  </span>

                  <h3 className="mt-4 text-xl font-bold leading-snug">
                    Tezkor yetkazib berish 🚀
                  </h3>

                  <p className="text-white/70 text-sm mt-2">
                    Eng mazali taomlarni buyurtma qiling
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="p-5 border-t border-gray-100">
              <a href="tel:+99899171411">
                <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] transition">
                  <IoCallOutline size={22} />
                  Bog‘lanish
                </button>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}