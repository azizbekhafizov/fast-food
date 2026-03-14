    import { FaTruckFast, FaLeaf, FaClock } from "react-icons/fa6"

export default function AboutMini() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Nega <span className="text-red-500">Orom Fast Food</span> ?
          </h2>

          <p className="text-gray-600">
            Biz har kuni yangi ingredientlardan foydalanib,
            eng mazali fast food tayyorlaymiz. Tez tayyorlash,
            sifat va mijozlar mamnunligi — bizning ustuvor maqsadimiz.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <FaLeaf className="text-red-500 text-4xl mx-auto mb-4"/>
            <h3 className="font-semibold text-lg mb-2">
              Yangi ingredientlar
            </h3>
            <p className="text-gray-500 text-sm">
              Barcha mahsulotlar yangi va sifatli ingredientlardan tayyorlanadi.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <FaClock className="text-red-500 text-4xl mx-auto mb-4"/>
            <h3 className="font-semibold text-lg mb-2">
              Tez tayyorlanadi
            </h3>
            <p className="text-gray-500 text-sm">
              Buyurtmangiz qisqa vaqt ichida tayyor bo‘ladi.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <FaTruckFast className="text-red-500 text-4xl mx-auto mb-4"/>
            <h3 className="font-semibold text-lg mb-2">
              Tez yetkazib berish
            </h3>
            <p className="text-gray-500 text-sm">
              Buyurtmalar tez va ishonchli tarzda yetkazib beriladi.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}