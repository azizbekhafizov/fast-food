import { motion } from "framer-motion"
import { useUI } from "../context/UIContext"
import { IoClose } from "react-icons/io5"
import { useEffect } from "react"

export default function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useUI()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && sidebarOpen) {
        toggleSidebar()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [sidebarOpen])

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: sidebarOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-lg p-6 flex flex-col"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={toggleSidebar}>
            <IoClose size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-lg font-medium">
          <a href="/" onClick={toggleSidebar}>Home</a>
          <a href="/menu" onClick={toggleSidebar}>Menu</a>
          <a href="/checkout" onClick={toggleSidebar}>Checkout</a>
        </nav>
      </motion.div>
    </>
  )
}