import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    const savedWishlist = localStorage.getItem("wishlist")

    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(i => i.id === product.id)
      if (exist) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, qty: i.qty + 1 }
            : i
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exist = prev.find(i => i.id === product.id)
      if (exist) {
        return prev.filter(i => i.id !== product.id)
      }
      return [...prev, product]
    })
  }

  const isInWishlist = (id) => {
    return wishlist.some(i => i.id === id)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        toggleWishlist,
        isInWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}