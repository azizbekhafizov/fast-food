import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5"
import { useState } from "react"
import { useCart } from "../context/CartContext"

export default function ProductModal({ product, close }) {

  const { addToCart } = useCart()

  const [qty, setQty] = useState(1)
  const [variant, setVariant] = useState(
    product.variants ? product.variants[0] : null
  )

  const price = variant ? variant.price : product.price

  return (
    <>

      {/* overlay */}
      <div
        onClick={close}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="
        fixed z-50
        left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        bg-white
        w-[1000px]
        max-w-[95%]
        rounded-3xl
        shadow-2xl
        p-6
        "
      >

        {/* close */}
        <button
          onClick={close}
          className="absolute right-4 top-4"
        >
          <IoClose size={26}/>
        </button>

        <div className="grid md:grid-cols-2 gap-6">

          <img
            src={product.image}
            className="w-full object-contain"
          />

          <div>

            <h2 className="text-2xl font-bold">
              {product.name}
            </h2>

            <p className="text-gray-500 mt-3">
              {product.description}
            </p>

            {/* variants */}
            {product.variants && (
              <div className="mt-6 space-y-2">

                <h3 className="font-semibold">
                  Variant
                </h3>

                {product.variants.map(v => (
                  <label
                    key={v.name}
                    className="flex items-center gap-3"
                  >

                    <input
                      type="radio"
                      name="variant"
                      checked={variant?.name === v.name}
                      onChange={() => setVariant(v)}
                    />

                    {v.name} — {v.price} UZS

                  </label>
                ))}

              </div>
            )}

            {/* qty */}
            <div className="flex items-center gap-4 mt-8">

              <button
                onClick={() => setQty(q => Math.max(1, q-1))}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{qty}</span>

              <button
                onClick={() => setQty(q => q+1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>

            </div>

            {/* add */}
            <button
              onClick={() =>
                addToCart({
                  ...product,
                  price,
                  qty
                })
              }
              className="
              mt-6
              bg-red-600
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
              "
            >
              {price * qty} UZS
            </button>

          </div>

        </div>

      </motion.div>

    </>
  )
}