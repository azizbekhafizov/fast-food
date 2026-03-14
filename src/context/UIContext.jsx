import { createContext, useContext, useState, useEffect } from "react"

const UIContext = createContext()

export function UIProvider({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
    setAuthOpen(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  // Toggle funksiyalar
  const toggleSidebar = () => setSidebarOpen(prev => !prev)
  const toggleCart = () => setCartOpen(prev => !prev)
  const toggleWishlist = () => setWishlistOpen(prev => !prev)
  const toggleAuth = () => setAuthOpen(prev => !prev)

  return (
    <UIContext.Provider
      value={{
        sidebarOpen,
        cartOpen,
        wishlistOpen,
        authOpen,
        user,

        setSidebarOpen,
        setCartOpen,
        setWishlistOpen,
        setAuthOpen,

        toggleSidebar,
        toggleCart,
        toggleWishlist,
        toggleAuth,

        login,
        logout
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  return useContext(UIContext)
}