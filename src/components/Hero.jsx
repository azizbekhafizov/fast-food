import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [scale, setScale] = useState(1);
  const [growing, setGrowing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => {
        if (prev >= 1.05) {
          setGrowing(false);
          return prev - 0.001;
        } else if (prev <= 0.98) {
          setGrowing(true);
          return prev + 0.001;
        } else {
          return growing ? prev + 0.001 : prev - 0.001;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [growing]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* LEFT */}
        <div className="space-y-6 text-center lg:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Eng Mazali
            <span className="text-red-500"> Fast Food </span>
            Siz Uchun
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            Orom Fast Food — yangi, issiq va juda mazali burgerlar, pizza,
            kartoshka va ichimliklar. Bir necha soniyada buyurtma bering.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">

            <button
              onClick={() => navigate("/checkout")}
              className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              Buyurtma berish
            </button>

            <button
              onClick={() => navigate("/menu")}
              className="border border-gray-300 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Menu ko‘rish
            </button>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">

          {/* Glow */}
          <div className="absolute w-[280px] sm:w-[350px] md:w-[420px] lg:w-[520px] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[520px] bg-orange-300 blur-[120px] opacity-30 rounded-full"></div>

          {/* IMAGE */}
          <img
            src="/src/assets/food-orginal.png"
            alt="fast food"
            className="relative w-[260px] sm:w-[320px] md:w-[420px] lg:w-[600px] drop-shadow-2xl transition-transform"
            style={{ transform: `scale(${scale})` }}
          />

        </div>
      </div>

    </section>
  );
}