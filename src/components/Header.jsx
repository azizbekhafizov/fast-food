import { Link } from "react-router-dom";
import { FiMenu, FiHeart, FiUser, FiShoppingCart, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import Wishlist from "./Wishlist";
import AuthModal from "./AuthModal";
import { useShop } from "../context/ShopContext";
import { useAppUI } from "../context/AppUIContext";

export default function Header() {
  const {
    cart,
    wishlist,
    cartCount
  } = useShop();

  const {
    sidebarOpen,
    wishlistOpen,
    authOpen,
    user,
    setSidebarOpen,
    setWishlistOpen,
    setAuthOpen,
    logout,
  } = useAppUI();

  return (
    <>
      {/* Wishlist Modal */}
      <AnimatePresence>
        {wishlistOpen && <Wishlist />}
      </AnimatePresence>

      {/* Auth Modal */}
      <AnimatePresence>
        {authOpen && <AuthModal />}
      </AnimatePresence>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Link
              to="/"
              className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent hover:from-orange-500 hover:to-red-500 transition-all"
            >
              🍔 Orom
            </Link>
          </motion.div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-8 font-medium">
            <Link
              to="/"
              className="relative text-gray-700 hover:text-orange-600 transition-colors group"
            >
              Bosh sahifa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/menu"
              className="relative text-gray-700 hover:text-orange-600 transition-colors group"
            >
              Menyu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3 lg:gap-6">

            {/* Wishlist Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setWishlistOpen(true)}
              className="relative p-2 lg:p-2.5 hover:bg-orange-50 rounded-full transition-colors group"
            >
              <FiHeart
                size={22}
                className="text-gray-700 group-hover:text-orange-600 transition-colors"
              />
              <AnimatePresence>
                {wishlist.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center"
                  >
                    {wishlist.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Cart Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/cart"
                className="relative p-2 lg:p-2.5 hover:bg-orange-50 rounded-full transition-colors group inline-block"
              >
                <FiShoppingCart
                  size={22}
                  className="text-gray-700 group-hover:text-orange-600 transition-colors"
                />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>

            {/* Auth Section - Desktop */}
            {!user ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAuthOpen(true)}
                className="hidden md:flex items-center gap-2 text-gray-700 px-4 py-2 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
              >
                <FiUser size={20} />
                Kirish
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hidden md:block relative group"
              >
                <div className="px-4 py-2 text-gray-700 rounded-full cursor-pointer hover:bg-orange-50 transition-colors font-medium group-hover:text-orange-600">
                  {user.name.split(" ")[0]}
                </div>

                {/* Dropdown Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-3 w-48 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 border border-gray-100 overflow-hidden"
                >
                  <button className="w-full text-left px-4 py-3 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors font-medium">
                    👤 Profil
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors font-medium">
                    📋 Buyurtmalar
                  </button>
                  <div className="h-px bg-gray-100" />
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors font-medium"
                  >
                    🚪 Chiqish
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 hover:bg-orange-50 rounded-full transition-colors"
            >
              <FiMenu size={28} className="text-gray-700" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Sidebar */}
      <Sidebar />
    </>
  );
}