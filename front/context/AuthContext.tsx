"use client";
import { LoginUserResponse } from "@/types/auth";
import { OrderResponse } from "@/types/users";
import React, { createContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: LoginUserResponse | null;
  setUser: (user: LoginUserResponse | null) => void;
  logout: () => void;
  orders: OrderResponse[];
  setOrders: (orders: OrderResponse[]) => void;
  isUserLoggedIn: boolean;
  isOrders: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  logout: () => {},
  orders: [],
  setOrders: () => {},
  isUserLoggedIn: false,
  isOrders: false,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<LoginUserResponse | null>(null);
  const [orders, setOrders] = useState<OrderResponse[]>([]);
  
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      const localOrders = JSON.parse(localStorage.getItem("orders") || "null");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOrders(localOrders || user.user.orders || []);
    }
  }, [user]);

  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user") || "null");
    const localOrders = JSON.parse(localStorage.getItem("orders") || "null");
   // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(localUser);
    setOrders(localOrders || localUser?.user?.orders || []);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const isUserLoggedIn = user?.login ? true : false

  const isOrders = orders.length >0

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, user, setUser, logout, orders, setOrders, isOrders  }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



//useEffect(() => {
//    if (user) {
//      localStorage.setItem("user", JSON.stringify(user));
//      const localOrders = JSON.parse(localStorage.getItem("orders") || "null");
//      // eslint-disable-next-line react-hooks/set-state-in-effect
//      setOrders(localOrders || user.user.orders || []);
//    }
//  }, [user]);
//
//  useEffect(() => {
//    if (orders.length > 0) {
//      localStorage.setItem("orders", JSON.stringify(orders));
//    }
//  }, [orders]);
//
//  useEffect(() => {
//    const localUser = JSON.parse(localStorage.getItem("user") || "null");
//    const localOrders = JSON.parse(localStorage.getItem("orders") || "null");
//   // eslint-disable-next-line react-hooks/set-state-in-effect
//    setUser(localUser);
//    setOrders(localOrders || localUser?.user?.orders || []);
//  }, []);