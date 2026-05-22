// src/components/FeaturedMenu.jsx

import { motion } from "framer-motion";
import {
  IoStar,
  IoFlash,
  IoArrowForward,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const featuredItems = [
  {
    id: 1,
    name: "Cheese Burger",
    description: "Yumshoq bulochka, mol go‘shti va eritilgan pishloq.",
    price: "89 000 so'm",
    image: "src/assets/burger-removebg-preview.png",
    badge: "TOP",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Qarsildoq xamir va pepperonili mazali pizza.",
    price: "135 000 so'm",
    image: "src/assets/pizza-removebg-preview.png",
    badge: "MASHHUR",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 3,
    name: "Chicken Lavash",
    description: "Tovuq go‘shti va maxsus sousli issiq lavash.",
    price: "67 000 so'm",
    image: "src/assets/lavash-removebg-preview.png",
    badge: "YANGI",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 4,
    name: "Fri Kartoshka",
    description: "Oltindek qovurilgan issiq fri kartoshka.",
    price: "35 000 so'm",
    image: "src/assets/fri-removebg-preview.png",
    badge: "AKSIYA",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function FeaturedMenu() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#fff8f5]">

      {/* BG EFFECT */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-orange-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-300/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* TOP */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="inline-flex items-center gap-2 bg-white shadow-md border border-orange-100 rounded-full px-4 py-2 mb-5">
            <IoFlash className="text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">
              Eng ko‘p buyurtma qilinadigan taomlar
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Mashhur
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}Taomlar
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            Har kuni minglab mijozlar tanlaydigan eng mazali
            fast food mahsulotlari 🍔
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative rounded-[34px] bg-white border border-orange-100 shadow-[0_15px_40px_rgba(0,0,0,0.06)] overflow-hidden"
            >

              {/* TOP BG */}
              <div
                className={`h-[170px] bg-gradient-to-br ${item.color} relative overflow-hidden`}
              >

                {/* BADGE */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.badge}
                </div>

                {/* GLOW */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>

                {/* IMAGE */}
                <motion.img
                  whileHover={{
                    rotate: -6,
                    scale: 1.08,
                  }}
                  transition={{ type: "spring" }}
                  src={item.image}
                  alt={item.name}
                  className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[210px] object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)]"
                />
              </div>

              {/* CONTENT */}
              <div className="pt-24 px-6 pb-6">

                {/* RATING */}
                <div className="flex items-center gap-1 mb-3">
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />

                  <span className="text-sm text-gray-500 ml-2">
                    5.0
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black text-gray-900">
                  {item.name}
                </h3>

                {/* DESC */}
                <p className="mt-3 text-gray-500 leading-7 text-sm">
                  {item.description}
                </p>

                {/* BOTTOM */}
                <div className="mt-6 flex items-center justify-between">

                  <div>
                    <p className="text-xs text-gray-400">
                      Narxi
                    </p>

                    <h4 className="text-2xl font-black text-orange-500">
                      {item.price}
                    </h4>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center shadow-xl`}
                  >
                    <Link to="/menu">
                      <IoArrowForward size={20} />
                    </Link>
                  </motion.button>

                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}