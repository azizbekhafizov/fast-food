// src/components/AuthModal.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useAppUI } from "../context/AppUIContext";

export default function AuthModal() {
  const { authOpen, setAuthOpen, login } = useAppUI();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!authOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login/Register uchun minimal implementatsiya
    login({ name: name || "User", email });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setAuthOpen(false)}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed z-50 bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{isLogin ? "Login" : "Register"}</h2>
          <button onClick={() => setAuthOpen(false)}>
            <IoClose size={24} />
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-lg ${
              isLogin ? "bg-primary text-white" : "bg-gray-100"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-lg ${
              !isLogin ? "bg-primary text-white" : "bg-gray-100"
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bg-primary text-white py-3 rounded-lg hover:opacity-90 transition">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
      </motion.div>
    </>
  );
}