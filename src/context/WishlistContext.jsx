import { createContext, useContext, useEffect, useState } from "react"

const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])

  // LOAD from localStorage
  useEffect(() => {
    const data = localStorage.getItem("wishlist")
    if (data) {
      setWishlist(JSON.parse(data))
    }
  }, [])

  // SAVE to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const toggleWishlist = (item) => {
    setWishlist(prev => {
      const exists = prev.find(i => i.id === item.id)

      if (exists) {
        return prev.filter(i => i.id !== item.id)
      } else {
        return [...prev, item]
      }
    })
  }

  const isInWishlist = (id) => {
    return wishlist.some(i => i.id === id)
  }

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)