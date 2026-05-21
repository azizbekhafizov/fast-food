import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import NotFound from "./pages/NotFound"

import Cart from "./components/Cart"

import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" />

      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />


          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App