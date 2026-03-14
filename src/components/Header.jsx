import { useUI } from "../context/UIContext";
import Sidebar from "./Sidebar";
import LanguageSwitcher from "./LanguageSwitcher";
import AuthModal from "./AuthModal";
import { FiShoppingCart, FiMenu, FiHeart, FiUser } from "react-icons/fi";
import CartDrawer from "./CartDrawer";
import Wishlist from "./Wishlist";
import { useCart } from "../context/CartContext"

export default function Header() {
  const {
    toggleSidebar,
    toggleCart,
    toggleAuth,
    toggleWishlist, // <-- qo'shildi
    wishlistOpen,   // <-- qo'shildi
    user,
    logout,
  } = useUI();

  const { cart, wishlist } = useCart()

  return (
    <>
      {/* Wishlist va Cart drawer faqat toggle qilinganida ko‘rinadi */}
      {wishlistOpen && <Wishlist />}
      <CartDrawer />

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20">

          {/* Logo */}
          <h1 className="text-2xl lg:text-3xl font-extrabold text-primary cursor-pointer">
            🍔 Orom
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="/" className="hover:text-primary transition">Home</a>
            <a href="/menu" className="hover:text-primary transition">Menu</a>
            <a href="/checkout" className="hover:text-primary transition">Checkout</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4 lg:gap-6">
            <LanguageSwitcher />

            {/* Wishlist */}
            <button
              onClick={toggleWishlist} // <-- qo‘shildi
              className="relative hover:text-primary transition"
            >
              <FiHeart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            </button>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative hover:text-primary transition"
            >
              <FiShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            </button>

            {/* Auth */}
            {!user ? (
              <button
                onClick={toggleAuth}
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
            <button onClick={toggleSidebar} className="md:hidden">
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </header>

      <Sidebar />
      <AuthModal />
    </>
  );
}