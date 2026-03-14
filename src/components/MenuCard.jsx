import { motion } from "framer-motion"

export default function MenuCard({ item, openProduct }) {

  return (

    <motion.div
      whileHover={{ y:-6 }}
      onClick={() => openProduct(item)}
      className="
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-xl
      transition
      cursor-pointer
      overflow-hidden
      "
    >

      <img
        src={item.image}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h3 className="font-semibold text-lg">
          {item.name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {item.description}
        </p>

        <div className="mt-3 text-red-500 font-bold">
          {item.price} so'm
        </div>

      </div>

    </motion.div>

  )

}