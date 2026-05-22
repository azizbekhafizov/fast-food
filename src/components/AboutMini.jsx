import { FaTruckFast, FaLeaf, FaClock } from "react-icons/fa6";
import { motion } from "framer-motion";

const features = [
  {
    icon: FaLeaf,
    title: "Yangi ingredientlar",
    desc: "Barcha mahsulotlar yangi va sifatli mahsulotlardan tayyorlanadi.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: FaClock,
    title: "Tez tayyorlanadi",
    desc: "Buyurtmangiz bir necha daqiqada tayyor bo‘ladi.",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: FaTruckFast,
    title: "Tez yetkazib berish",
    desc: "Eng tezkor yetkazib berish xizmati Toshkent bo‘ylab.",
    color: "from-blue-400 to-indigo-500",
  },
];

export default function AboutMini() {
  return (
    <section className="relative py-20 bg-[#fff8f5] overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-300/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-10 relative z-10">

        {/* TITLE */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Nega <span className="text-red-500">Orom Fast Food</span> ?
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            Biz har kuni eng sifatli ingredientlardan foydalanib,
            tez va mazali fast food tayyorlaymiz.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white rounded-[30px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-orange-100 overflow-hidden"
              >

                {/* ICON BG */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl shadow-lg mb-6 group-hover:scale-110 transition`}>
                  <Icon />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-500 leading-7">
                  {item.desc}
                </p>

                {/* GLOW EFFECT */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-200/30 blur-3xl rounded-full"></div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}