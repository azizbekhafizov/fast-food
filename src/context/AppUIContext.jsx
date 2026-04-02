// src/context/AppUIContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AppUIContext = createContext();

export const AppUIProvider = ({ children }) => {
  // Modal va sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  // User state
  const [user, setUser] = useState(null);

  // User localStorage'dan yuklash
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Login & Logout
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setAuthOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Toggle funksiyalar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleWishlist = () => setWishlistOpen((prev) => !prev);
  const toggleAuth = () => setAuthOpen((prev) => !prev);

  return (
    <AppUIContext.Provider
      value={{
        sidebarOpen,
        wishlistOpen,
        authOpen,
        user,

        setSidebarOpen,
        setWishlistOpen,
        setAuthOpen,

        toggleSidebar,
        toggleWishlist,
        toggleAuth,

        login,
        logout,
      }}
    >
      {children}
    </AppUIContext.Provider>
  );
};

// Custom hook
export const useAppUI = () => useContext(AppUIContext);