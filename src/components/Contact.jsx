import { Phone, MapPin, Clock } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-[#fff8f5] overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-orange-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-300/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-10 relative z-10">

        {/* TITLE */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Biz bilan <span className="text-red-500">bog‘laning</span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            Istalgan vaqtda biz bilan bog‘laning — tezkor javob va sifatli xizmat kafolatlanadi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* CARD */}
            {[
              {
                icon: Phone,
                title: "Telefon",
                desc: "+998 93 090 11 11",
                link: "tel:+998930901111",
              },
              {
                icon: MapPin,
                title: "Manzil",
                desc: "Samarqand, Registon ko'chasi 12",
              },
              {
                icon: Clock,
                title: "Ish vaqti",
                desc: "Har kuni: 09:00 – 23:00",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
                  href={item.link || "#"}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-5 bg-white border border-orange-100 rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {item.title}
                    </p>

                    <p className="text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* SOCIAL */}
            <div className="flex gap-4 pt-4">

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
              >
                <FaTelegramPlane size={20} />
              </a>

            </div>
          </motion.div>

          {/* RIGHT MAP */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 blur-2xl opacity-20 rounded-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-100">

              <iframe
                title="Orom Fast Food Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5294343114016!2d66.97887091553443!3d39.65593227946666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
                className="w-full h-[420px]"
                loading="lazy"
              ></iframe>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}