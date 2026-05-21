import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import toast from "react-hot-toast";

import { menuData } from "../data/menuData";
import CategoryFilter from "../components/CategoryFilter";
import ProductModal from "../components/Modal";
import { useShop } from "../context/ShopContext";

export default function Menu() {
  const [active, setActive] = useState("burger");
  const [product, setProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useShop();

  const categories = [
    { id: "burger", name: "Burgerlar", icon: "🍔" },
    { id: "lavash", name: "Lavashlar", icon: "🌯" },
    { id: "hotdog", name: "Hot Doglar", icon: "🌭" },
    { id: "pizza", name: "Pizzalar", icon: "🍕" },
    { id: "chicken", name: "Tovuqli taomlar", icon: "🍗" },
    { id: "sides", name: "Kartoshka va gazaklar", icon: "🍟" },
    { id: "colddrinks", name: "Sovuq ichimliklar", icon: "🧊" },
    { id: "hotdrinks", name: "Issiq ichimliklar", icon: "☕" },
  ];

  // Scroll-based active category detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      categories.forEach(cat => {
        const section = document.getElementById(cat.id);

        if (section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(cat.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = (e, item) => {
    e.stopPropagation();

    if (!item?.id) return;

    addToCart(item);
    toast.success("✅ Savatga qo'shildi", {
      icon: "🛒",
      style: {
        borderRadius: "12px",
        background: "#fff",
        color: "#000",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }
    });
  };

  const handleWishlist = (e, item, liked) => {
    e.stopPropagation();

    toggleWishlist(item);

    toast(liked
      ? "💔 O'chirildi"
      : "❤️ Qo'shildi",
      {
        style: {
          borderRadius: "12px",
          background: "#fff",
          color: "#000",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }
      }
    );
  };

  // Filter items by search
  const getFilteredItems = (items) => {
    if (!searchQuery) return items;
    return items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen py-10 px-4 lg:px-6">

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <input
          type="text"
          placeholder="Mahsulot qidirish... 🔍"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-lg placeholder-gray-400 shadow-sm transition-all hover:border-gray-300"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 lg:gap-10">

        {/* Sidebar - Category Filter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:sticky lg:top-24 h-fit"
        >
          <CategoryFilter
            categories={categories}
            active={active}
            setActive={setActive}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-16"
        >

          {categories.map((cat, catIndex) => {

            const items = menuData
              .filter(Boolean)
              .filter(item => item.category === cat.id);

            const filteredItems = getFilteredItems(items);

            if (!filteredItems.length) return null;

            return (
              <motion.div
                key={cat.id}
                id={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >

                {/* Category Header */}
                <div className="border-b-2 border-gradient-to-r from-orange-500 to-red-500 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{cat.icon}</span>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-black text-gray-800">
                        {cat.name}
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                        {filteredItems.length} ta mahsulot
                      </p>
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <motion.div
                  layout
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >

                  <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, itemIndex) => {

                      const liked = isInWishlist(item?.id);

                      return (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ delay: itemIndex * 0.05 }}
                          whileHover={{ y: -12, scale: 1.04 }}
                          onClick={() => setProduct(item)}
                          className="group cursor-pointer"
                        >

                          {/* Card Container */}
                          <div className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col">

                            {/* Image Container */}
                            <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />

                              {/* Overlay Gradient */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                              {/* Wishlist Button */}
                              <motion.button
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                type="button"
                                onClick={(e) =>
                                  handleWishlist(e, item, liked)
                                }
                                className="absolute top-3 right-3 bg-white/90 backdrop-blur-md w-11 h-11 rounded-full flex items-center justify-center z-20 shadow-lg hover:shadow-xl transition-shadow"
                              >
                                <motion.div
                                  animate={liked ? { scale: [1, 1.2, 1] } : {}}
                                  transition={{ duration: 0.3 }}
                                >
                                  <FiHeart
                                    size={20}
                                    className={
                                      liked
                                        ? "text-red-500 fill-red-500"
                                        : "text-gray-400"
                                    }
                                  />
                                </motion.div>
                              </motion.button>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">

                              <div className="flex-1">
                                <h3 className="font-bold text-gray-800 line-clamp-2 text-lg">
                                  {item.name}
                                </h3>

                                {item.description && (
                                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                                    {item.description}
                                  </p>
                                )}
                              </div>

                              {/* Price & Button */}
                              <div className="mt-4 pt-4 border-t border-gray-100">
                                <p className="text-red-600 font-black text-xl mb-3">
                                  {item.price.toLocaleString()} so'm
                                </p>

                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  type="button"
                                  onClick={(e) => {

                                    e.stopPropagation()

                                    // VARIANTLI PRODUCT
                                    if (item.variants) {
                                      setProduct(item)
                                    }

                                    // ODDIY PRODUCT
                                    else {
                                      handleAddToCart(e, item)
                                    }

                                  }}
                                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                                >
                                  <FiShoppingCart size={18} />
                                  <span>Savatga</span>
                                </motion.button>
                              </div>

                            </div>

                          </div>

                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                </motion.div>

              </motion.div>
            );
          })}

          {/* No Results */}
          {searchQuery && menuData.filter(Boolean).filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-3xl mb-3">🔍</p>
              <p className="text-gray-500 text-lg">
                "{searchQuery}" bo'yicha hech narsa topilmadi
              </p>
            </motion.div>
          )}

        </motion.div>

      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {product && (
          <ProductModal
            product={product}
            onClose={() => setProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}