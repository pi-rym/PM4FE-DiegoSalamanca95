import { Product } from "./products";

export interface User {
  name: string;
  email: string;
  address: string;
  phone: string;
  id: number;
  role: string;
  credential: Credential;
}

export interface UserWithOrders extends User {
  orders: Order[];
}

export interface Order {
  id: number;
  status: string;
  date: string;
}

export interface Credential {
  id: number;
  password: string;
}

export interface OrderResponse {
  id: number;
  status: string;
  date: string;
}