import React, {
  createContext,
  useContext,
  useState
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [Product, SetProduct] = useState([]);

  // Add Product
  const addToCart = (product) => {

    SetProduct((prevCart) => {

      const exist = prevCart.find(
        (item) => item.id === product.id
      );

      if (exist) {

        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      } else {

        return [
          ...prevCart,
          {
            ...product,
            quantity: 1
          }
        ];

      }
    });
  };


  // Increase
  const increaseQuantity = (id) => {

    SetProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };


  // Decrease
  const decreaseQuantity = (id) => {

    SetProduct((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  // Remove
  const RemoveItem = (id) => {

    SetProduct((prevCart) =>
      prevCart.filter(
        (item) => item.id !== id
      )
    );
  };


  return (
    <CartContext.Provider
      value={{
        Product,
        addToCart,
        RemoveItem,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {

  return useContext(CartContext);

}