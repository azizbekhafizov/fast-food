import {
  GiHamburger,
  // GiWrap,
  GiHotDog,
  GiFullPizza,
  GiChickenOven,
  GiFrenchFries,
} from "react-icons/gi";
import { GiSandwich } from "react-icons/gi"; // Lavash o‘rniga sandwich ikonasi

const categories = [
  { id: "burger", name: "Burger", icon: <GiHamburger /> },
  { id: "lavash", name: "Lavash", icon: <GiSandwich /> },
  { id: "hotdog", name: "Hot Dog", icon: <GiHotDog /> },
  { id: "pizza", name: "Pizza", icon: <GiFullPizza /> },
  { id: "chicken", name: "Chicken", icon: <GiChickenOven /> },
  { id: "sides", name: "Sides", icon: <GiFrenchFries /> },
];

export default function CategoryFilter({ active, setActive }) {
  return (
    <div className="sticky top-28 flex flex-col gap-3">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => {
            setActive(cat.id);
            document
              .getElementById(cat.id)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`
          flex items-center gap-3
          px-4 py-3
          rounded-xl
          transition
          ${
            active === cat.id
              ? "bg-red-500 text-white"
              : "bg-white hover:bg-gray-100"
          }
          `}
        >
          <span className="text-xl">{cat.icon}</span>

          <span className="font-medium">{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
