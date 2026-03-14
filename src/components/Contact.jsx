import { Phone, MapPin, Clock } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-50 via-white to-yellow-50 py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-10 lg:mb-12 text-center">
          Biz bilan bog'lanish
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex items-center gap-4 hover:scale-[1.02] transition cursor-pointer">
              <div className="bg-primary p-4 rounded-full text-white shadow-lg flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-lg font-semibold">Telefon</p>
                <a
                  href="tel:+998930901111"
                  className="text-gray-700 hover:text-primary transition"
                >
                  +998 93 090 11 11
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 hover:scale-[1.02] transition cursor-pointer">
              <div className="bg-primary p-4 rounded-full text-white shadow-lg flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-lg font-semibold">Manzil</p>
                <p className="text-gray-700">Samarqand, Registon ko'chasi 12</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-4 hover:scale-[1.02] transition cursor-pointer">
              <div className="bg-primary p-4 rounded-full text-white shadow-lg flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-lg font-semibold">Ish vaqti</p>
                <p className="text-gray-700">
                  Dushanba – Yakshanba: 09:00 – 23:00
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="p-3 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-full text-white hover:scale-110 transition shadow-lg"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-blue-500 rounded-full text-white hover:scale-110 transition shadow-lg"
              >
                <FaTelegramPlane size={20} />
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Orom Fast Food Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5294343114016!2d66.97887091553443!3d39.65593227946666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f49d49dbf3a467b%3A0x123456789abcdef!2sSamarqand!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
