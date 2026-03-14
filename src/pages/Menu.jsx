import { useState } from "react"
import { menuData } from "../data/menuData"
import MenuCard from "../components/MenuCard"
import CategoryFilter from "../components/CategoryFilter"
import ProductModal from "../components/Modal"

export default function Menu() {

  const [active, setActive] = useState("burger")
  const [product, setProduct] = useState(null)

  const categories = [
    "burger",
    "lavash",
    "hotdog",
    "pizza",
    "chicken",
    "sides"
  ]

  return (

    <section className="bg-gray-50 min-h-screen py-20 px-6">

      <div className="max-w-[1400px] mx-auto grid grid-cols-[220px_1fr] gap-10">

        {/* LEFT CATEGORY */}
        <CategoryFilter
          active={active}
          setActive={setActive}
        />

        {/* RIGHT PRODUCTS */}
        <div className="space-y-20">

          {categories.map(cat => {

            const items = menuData.filter(
              item => item.category === cat
            )

            if(items.length === 0) return null

            return (

              <div
                key={cat}
                id={cat}
                className="space-y-6"
              >

                <h2 className="text-3xl font-bold capitalize">
                  {cat}
                </h2>

                <div className="
                grid gap-6
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                ">

                  {items.map(item => (

                    <MenuCard
                      key={item.id}
                      item={item}
                      openProduct={setProduct}
                    />

                  ))}

                </div>

              </div>

            )

          })}

        </div>

      </div>

      {product && (

        <ProductModal
          product={product}
          close={() => setProduct(null)}
        />

      )}

    </section>

  )

}