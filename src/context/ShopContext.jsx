import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // LOAD
  useEffect(() => {

    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setWishlist(savedWishlist);
    setCart(savedCart);

  }, []);

  // SAVE
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // =================
  // WISHLIST
  // =================

  const toggleWishlist = (item) => {

    setWishlist(prev => {

      const exists =
        prev.some(i => i.id === item.id);

      if (exists) {
        return prev.filter(i => i.id !== item.id);
      }

      return [...prev, item];

    });
  };

  const isInWishlist = (id) => {
    return wishlist.some(i => i.id === id);
  };

  // =================
  // CART
  // =================

  const addToCart = (item) => {

    setCart(prev => {

      const exists =
        prev.find(i => i.id === item.id);

      if (exists) {

        return prev.map(i =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [
        ...prev,
        {
          ...item,
          qty: 1
        }
      ];

    });
  };

  const removeFromCart = (id) => {
    setCart(prev =>
      prev.filter(i => i.id !== id)
    );
  };

  const changeQty = (id, type) => {

    setCart(prev =>
      prev.map(i => {

        if (i.id !== id) return i;

        if (type === "inc") {
          return {
            ...i,
            qty: i.qty + 1
          };
        }

        if (type === "dec") {
          return {
            ...i,
            qty: i.qty > 1
              ? i.qty - 1
              : 1
          };
        }

        return i;

      })
    );
  };

  // =================
  // TOTALS
  // =================

  const cartCount = useMemo(() => {
    return cart.reduce(
      (acc, item) => acc + item.qty,
      0
    );
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce(
      (acc, item) =>
        acc + item.price * item.qty,
      0
    );
  }, [cart]);

  return (
    <ShopContext.Provider
      value={{

        wishlist,
        toggleWishlist,
        isInWishlist,

        cart,
        addToCart,
        removeFromCart,
        changeQty,

        cartCount,
        cartTotal

      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);