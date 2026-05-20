// src/components/Header.jsx
import { Link } from "react-router-dom";
import { FiMenu, FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";
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

  // AppUIContext orqali barcha UI state’larni olamiz
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
      {wishlistOpen && <Wishlist />}

      {/* Auth Modal */}
      {authOpen && <AuthModal />}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20">

          <h1 className="text-2xl lg:text-3xl font-extrabold text-primary cursor-pointer">
            <Link to="/">🍔 Orom</Link>
          </h1>

          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/menu" className="hover:text-primary transition">Menu</Link>
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            {/* Wishlist */}
            <button
              onClick={() => setWishlistOpen(true)}
              className="relative hover:text-primary transition"
            >
              <FiHeart size={22} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative hover:text-primary transition">
              <FiShoppingCart size={22} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth */}
            {!user ? (
              <button
                onClick={() => setAuthOpen(true)}
                className="flex items-center gap-2 text-black px-4 py-2 rounded-full hover:scale-105 transition"
              >
                <FiUser />
                Login
              </button>
            ) : (
              <div className="relative group hidden md:block">
                <div className="px-4 py-2 text-black rounded-full cursor-pointer">
                  {user.name}
                </div>
                <div className="absolute right-0 mt-3 w-44 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                    Profile
                  </button>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* Mobile Menu */}
            <button onClick={() => setSidebarOpen(true)} className="md:hidden">
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar />
    </>
  );
}