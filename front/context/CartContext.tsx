"use client";

import { CartItem } from "@/types/cart";
import React, { createContext, useEffect, useState } from "react";

interface CartContextProps {
  cart: CartItem[];
  onAddToCart: (cartItem: CartItem) => void;
  isOnCart: (cartItem: CartItem) => boolean;
  totalCart: number;
  onEmptyCart: () => void
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  onAddToCart: () => {},
  isOnCart: () => false,
  totalCart: 0,
  onEmptyCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Guardar en localStorage
  useEffect(() => {
    if (cart?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Leer del localStorage al iniciar
  useEffect(() => {
    const localCart = localStorage.getItem("cart");

    if (localCart) {
      try {
        const parsedCart = JSON.parse(localCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      } catch (error) {
        console.error("Error parsing cart from localStorage", error);
      }
    }
  }, []);

  const onAddToCart = (cartItem: CartItem) => {
    setCart((prev) => [...prev, cartItem]);
  };

  const isOnCart = (cartItem: CartItem) => {
    return cart.some((item) => item.id === cartItem.id);
  };

  const totalCart = cart?.reduce((acc: number, item: CartItem) => acc + item.price, 0);

  const onEmptyCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        onAddToCart,
        isOnCart,
        totalCart,
        onEmptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
