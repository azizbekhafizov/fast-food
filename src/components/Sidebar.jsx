// src/components/Sidebar.jsx
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAppUI } from "../context/AppUIContext";

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useAppUI();
  if (!sidebarOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setSidebarOpen(false)}
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: sidebarOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-lg p-6 flex flex-col"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <IoClose size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-lg font-medium">
          <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setSidebarOpen(false)}>Menu</Link>
          <Link to="/checkout" onClick={() => setSidebarOpen(false)}>Checkout</Link>
        </nav>
      </motion.div>
    </>
  );
}