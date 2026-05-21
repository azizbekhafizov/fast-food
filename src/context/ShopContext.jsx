import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {

  // ================= LOAD FROM LOCALSTORAGE =================

  const [wishlist, setWishlist] = useState(() => {
    try {
      const data = localStorage.getItem("wishlist");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.log("Wishlist load error:", error);
      return [];
    }
  });

  const [cart, setCart] = useState(() => {
    try {
      const data = localStorage.getItem("cart");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.log("Cart load error:", error);
      return [];
    }
  });

  // ================= SAVE TO LOCALSTORAGE =================

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ================= WISHLIST =================

  const toggleWishlist = (item) => {
    if (!item?.id) return;

    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      }

      return [...prev, item];
    });
  };

  const isInWishlist = (id) => {
    return wishlist.some((i) => i.id === id);
  };

  // ================= CART =================

  const addToCart = (item) => {
    if (!item?.id) return;

    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      // AGAR PRODUCT OLDIN QO'SHILGAN BO'LSA
      if (exists) {
        return prev.map((i) =>
          i.id === item.id
            ? {
                ...i,
                qty: (i.qty || 1) + 1,
              }
            : i
        );
      }

      // YANGI PRODUCT
      return [
        ...prev,
        {
          ...item,
          qty: 1,
        },
      ];
    });
  };

  // ================= REMOVE CART =================

  const removeFromCart = (id) => {
    if (!id) return;

    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // ================= CHANGE QTY =================

  const changeQty = (id, type) => {
    if (!id || !type) return;

    setCart((prev) =>
      prev.map((i) => {

        if (i.id !== id) return i;

        const qty =
          type === "inc"
            ? (i.qty || 1) + 1
            : Math.max(1, (i.qty || 1) - 1);

        return {
          ...i,
          qty,
        };
      })
    );
  };

  // ================= CLEAR CART =================

  const clearCart = () => {
    setCart([]);
  };

  // ================= TOTALS =================

  const cartCount = useMemo(() => {
    return cart.reduce((acc, item) => {
      return acc + (item.qty || 1);
    }, 0);
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, item) => {

      const price = Number(item.price) || 0;
      const qty = item.qty || 1;

      return acc + (price * qty);

    }, 0);
  }, [cart]);

  // ================= CONTEXT VALUE =================

  const value = {
    // wishlist
    wishlist,
    toggleWishlist,
    isInWishlist,

    // cart
    cart,
    addToCart,
    removeFromCart,
    changeQty,
    clearCart,

    // totals
    cartCount,
    cartTotal,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

// ================= CUSTOM HOOK =================

export const useShop = () => {

  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used within ShopProvider");
  }

  return context;
};