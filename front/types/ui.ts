import React from "react";
import { Product } from "./products";

export interface CardProps {
  card: Product;
}

export interface CardGridProps {
  children: React.ReactNode[];
}

export type Variant = "primary" | "secondary" | "tertiary" | "quaternary";

export type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: Variant;
  size?: Size;
  isLink?: boolean;
  href?: string;
}

export interface AddToCartButtonProps {
  product: Product
}

