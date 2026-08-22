"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "@/context/CartContext";
import { AddToCartButtonProps } from "@/types/ui";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const router = useRouter();
  const { isUserLoggedIn } = useContext(AuthContext);
  const { onAddToCart, isOnCart } = useContext(CartContext);
  const cartItem = { id: product.id, name: product.name, price: product.price };

  const alreadyInCart = isOnCart(cartItem);

  const handleAddToCart = () => {
    if (alreadyInCart) {
      router.push("/cart");
    } else {
      onAddToCart(cartItem);
      // Personalizamos el toast para que sea coherente con la marca
      toast.success(`${product.name} añadido correctamente`, {
        icon: "🛍️",
        style: { borderRadius: '12px', border: '1px solid #6366f1' }
      });
    }
  };

  // 1. Estado: Usuario NO logueado (Link sutil pero elegante)
  if (!isUserLoggedIn) {
    return (
      <div className="flex flex-col gap-2">
        <Link 
          href="/login" 
          className="group flex items-center justify-center gap-2 p-3 rounded-xl bg-input-bg/50 border border-dashed border-accent-start/30 text-accent-start font-bold hover:bg-accent-start/5 transition-all duration-300"
        >
          <span>🔐</span>
          <span className="group-hover:translate-x-1 transition-transform">
            Inicia sesión para comprar
          </span>
        </Link>
      </div>
    );
  }

  // 2. Estado: Producto YA en el carrito (Botón de navegación)
  if (alreadyInCart) {
    return (
      <Button 
        variant="secondary" 
        onClick={handleAddToCart}
        className="w-full py-4 flex justify-center items-center gap-2"
      >
        <span className="text-xl">🛒</span>
        <span className="font-bold text-accent-start">
          Ir al carrito
        </span>
      </Button>
    );
  }

  // 3. Estado: Disponible para agregar (Botón principal con brillo)
  return (
    <Button 
      variant="primary" 
      onClick={handleAddToCart}
      className="w-full py-4 group relative overflow-hidden shadow-brand-soft hover:shadow-brand-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
    >
      {/* Efecto de brillo interior al pasar el mouse */}
      <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
      
      <div className="flex items-center justify-center gap-3">
        <span className="text-lg group-hover:rotate-12 transition-transform">🛒</span>
        <span className="font-bold tracking-wide">Añadir al carrito</span>
      </div>
    </Button>
  );
};

export default AddToCartButton;