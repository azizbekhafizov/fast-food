import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiHeart } from "react-icons/fi"
import toast from "react-hot-toast"

import { menuData } from "../data/menuData"
import CategoryFilter from "../components/CategoryFilter"
import ProductModal from "../components/Modal"
import { useShop } from "../context/ShopContext"

export default function Menu() {

  const [active, setActive] = useState("burger")
  const [product, setProduct] = useState(null)

  const {
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useShop()

  const categories = [
    { id: "burger", name: "Burgerlar" },
    { id: "lavash", name: "Lavashlar" },
    { id: "hotdog", name: "Hot Doglar" },
    { id: "pizza", name: "Pizzalar" },
    { id: "chicken", name: "Tovuqli taomlar" },
    { id: "sides", name: "Kartoshka va gazaklar" },
    { id: "colddrinks", name: "Sovuq ichimliklar" },
    { id: "hotdrinks", name: "Issiq ichimliklar" },
  ]

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY + 200

      categories.forEach(cat => {

        const section = document.getElementById(cat.id)

        if (section) {

          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActive(cat.id)
          }

        }

      })

    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  const handleWishlist = (e, item, liked) => {

    e.stopPropagation()

    toggleWishlist(item)

    if (liked) {
      toast("Sevimlilardan olib tashlandi", {
        icon: "💔"
      })
    } else {
      toast.success("Sevimlilarga qo'shildi ❤️")
    }

  }

  const handleAddToCart = (item) => {

  console.log("ADD TO CART FIRED:", item);

    if (!item?.id) return;

    addToCart(item);
  };

  return (
    <section className="bg-gray-100 min-h-screen py-20 px-6">

      <div className="max-w-[1400px] mx-auto grid grid-cols-[220px_1fr] gap-10">

        {/* LEFT */}
        <CategoryFilter
          active={active}
          setActive={setActive}
        />

        {/* RIGHT */}
        <div className="space-y-20">

          {categories.map(cat => {

            const items = menuData.filter(
              item => item?.category === cat.id
            )

            if (!items.length) return null

            return (

              <div
                key={cat.id}
                id={cat.id}
                className="space-y-6"
              >

                <h2 className="text-3xl font-bold">
                  {cat.name}
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                  {items
                    .filter(Boolean)
                    .map(item => {


                      const liked = isInWishlist(item?.id)

                      return (

                        <motion.div
                          key={item.id}
                          whileHover={{
                            y: -10,
                            scale: 1.03
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 250
                          }}
                          onClick={() => setProduct(item)}
                          className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition cursor-pointer overflow-hidden"
                        >

                          {/* gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                          {/* wishlist */}
                          <button
                            onClick={(e) =>
                              handleWishlist(
                                e,
                                item,
                                liked
                              )
                            }
                            className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
                          >

                            <FiHeart
                              size={18}
                              className={
                                liked
                                  ? "text-red-500 fill-red-500 drop-shadow"
                                  : "text-gray-400"
                              }
                            />

                          </button>

                          {/* image */}
                          <div className="overflow-hidden">

                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
                            />

                          </div>

                          {/* content */}
                          <div className="p-4">

                            <h3 className="font-semibold text-lg group-hover:text-red-500 transition">
                              {item.name}
                            </h3>

                            <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                              {item.description}
                            </p>

                            <div className="mt-3 flex items-center justify-between gap-3">

                              <div className="text-red-500 font-bold text-lg">
                                {item.price} so'm
                              </div>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();

                                  console.log("CLICK OK", item);

                                  addToCart(item);
                                }}
                                className="bg-black text-white px-4 py-2 rounded-xl text-sm"
                              >
                                Savatga
                              </button>

                            </div>

                          </div>

                        </motion.div>

                      )
                    })}

                </div>

              </div>

            )
          })}

        </div>

      </div>

      {/* MODAL */}
      {
        product && (
          <ProductModal
            product={product}
            onClose={() => setProduct(null)}
          />
        )
      }

    </section >
  )
}