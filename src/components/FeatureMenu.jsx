import { motion } from "framer-motion";

const featuredItems = [
  {
    id: 1,
    name: "Cheese Burger",
    description: "Juicy beef with fresh veggies and melted cheese.",
    price: "$8.99",
    image: "src/assets/FeaturaBurger.png",
    badge: "🔥 Bestseller",
    badgeColor: "bg-red-500",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Crispy crust topped with spicy pepperoni and cheese.",
    price: "$12.50",
    image: "src/assets/FeaturePizza.png",
    badge: "⭐ Popular",
    badgeColor: "bg-yellow-400",
  },
  {
    id: 3,
    name: "Chicken Lavash",
    description:
      "Freshly grilled chicken wrapped in soft lavash with veggies and sauce.",
    price: "$6.50",
    image: "src/assets/FeatureLavash.png", // public/assets/images papkaga joylashtirasiz
    badge: "🔥 Hot & Fresh",
    badgeColor: "bg-red-500",
  },
  {
    id: 4,
    name: "French Fries",
    description: "Golden crispy fries served with ketchup.",
    price: "$3.50",
    image: "src/assets/featureFri.png",
    badge: "⚡ Combo Deal",
    badgeColor: "bg-indigo-500",
  },
];

export default function FeaturedMenu() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Specials
          </h2>
          <p className="mt-2 text-gray-600">
            Taste our most loved dishes, freshly prepared for you.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
              }}
              className="relative bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col items-center p-6"
            >
              {/* Badge */}
              <div
                className={`${item.badgeColor} absolute top-4 left-4 text-white px-2 py-1 rounded-full text-xs font-bold`}
              >
                {item.badge}
              </div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-contain mb-4"
              />

              {/* Name & Description */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {item.name}
              </h3>
              <p className="text-gray-500 text-center mb-4">
                {item.description}
              </p>

              {/* Price & Button */}
              <div className="flex items-center justify-between w-full mt-auto">
                <span className="text-lg font-bold text-primary">
                  {item.price}
                </span>
                <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
