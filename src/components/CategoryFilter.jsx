import {
  GiHamburger,
  GiHotDog,
  GiFullPizza,
  GiChickenOven,
  GiFrenchFries,
  GiSandwich,
  GiSodaCan,
  GiCoffeeCup,
} from "react-icons/gi";

const categories = [
  { id: "burger", name: "Burgerlar", icon: <GiHamburger /> },
  { id: "lavash", name: "Lavashlar", icon: <GiSandwich /> },
  { id: "hotdog", name: "Hot Doglar", icon: <GiHotDog /> },
  { id: "pizza", name: "Pizzalar", icon: <GiFullPizza /> },
  { id: "chicken", name: "Tovuqli taomlar", icon: <GiChickenOven /> },
  { id: "sides", name: "Kartoshka va gazaklar", icon: <GiFrenchFries /> },
  { id: "colddrinks", name: "Sovuq ichimliklar", icon: <GiSodaCan /> },
  { id: "hotdrinks", name: "Issiq ichimliklar", icon: <GiCoffeeCup /> },
];

export default function CategoryFilter({ active, setActive }) {
  return (
    <div className="sticky top-28 self-start w-[220px] flex flex-col gap-3">
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
          ${active === cat.id
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