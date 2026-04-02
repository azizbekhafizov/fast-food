import { createContext, useContext, useEffect, useState } from "react"

const ShopContext = createContext()

export const ShopProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState([])
  const [cart, setCart] = useState([])

  // LOAD
  useEffect(() => {
    const w = localStorage.getItem("wishlist")
    const c = localStorage.getItem("cart")

    if (w) setWishlist(JSON.parse(w))
    if (c) setCart(JSON.parse(c))
  }, [])

  // SAVE
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // ❤️ Wishlist
  const toggleWishlist = (item) => {
    setWishlist(prev => {
      const exists = prev.find(i => i.id === item.id)
      return exists
        ? prev.filter(i => i.id !== item.id)
        : [...prev, item]
    })
  }

  const isInWishlist = (id) => {
    return wishlist.some(i => i.id === id)
  }

  // 🛒 Cart
  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id)

      if (exists) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1 }
            : i
        )
      } else {
        return [...prev, { ...item, qty: 1 }]
      }
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const changeQty = (id, type) => {
    setCart(prev =>
      prev.map(i => {
        if (i.id === id) {
          if (type === "inc") return { ...i, qty: i.qty + 1 }
          if (type === "dec" && i.qty > 1) return { ...i, qty: i.qty - 1 }
        }
        return i
      })
    )
  }

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0)
  }

  return (
    <ShopContext.Provider value={{
      wishlist,
      toggleWishlist,
      isInWishlist,

      cart,
      addToCart,
      removeFromCart,
      changeQty,
      getTotal
    }}>
      {children}
    </ShopContext.Provider>
  )
}

export const useShop = () => useContext(ShopContext)