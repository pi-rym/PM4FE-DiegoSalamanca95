"use client";

import { AuthContext } from "@/context/AuthContext";
import { CartContext } from "@/context/CartContext";
import { postOrder } from "@/services/orders";
import { LoginUserResponse } from "@/types/auth";
import Button from "@/ui/components/Button/Button";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const CartComponent = () => {
  const { cart, totalCart, onEmptyCart } = useContext(CartContext);
  const { user, setOrders, orders } = useContext(AuthContext);
  const [isPending, setIsPending] = useState(false); // Estado para el efecto de carga

  const handleBuy = async () => {
    setIsPending(true);
    try {
      const res = await postOrder(cart, user as LoginUserResponse);
      if (res.status === "approved") {
        toast.success("¡Pedido realizado con éxito!", { icon: "🚀" });
        setOrders([...orders, { id: res.id, status: res.status, date: res.date }]);
        onEmptyCart();
      } else {
        toast.error("Error al realizar el pedido");
      }
    } catch (error) {
      toast.error("Hubo un problema con la transacción");
    } finally {
      setIsPending(false);
    }
  };

  if (cart?.length === 0) {
    return (
      <div className="container flex flex-col items-center justify-center py-32 text-center animate-fade-in">
        <span className="text-6xl mb-6">🛒</span>
        <h2 className="text-typography-secondary text-2xl font-secondary mb-2">
          Tu carrito está vacío
        </h2>
        <p className="text-typography-secondary/60 mb-8 max-w-xs">
          Parece que aún no has añadido productos a tu lista.
        </p>
        <Button variant="primary" className="px-10 py-4 shadow-brand-soft" isLink href="/home">
          Ir a la tienda
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-gradient-brand mb-10">Tu Carrito</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Lista de Items */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="card-surface flex justify-between items-center p-6 hover:translate-x-1 transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="font-bold text-lg text-typography-primary">{item.name}</span>
                <span className="text-typography-secondary text-xs uppercase tracking-wider font-bold opacity-60">
                  Producto
                </span>
              </div>
              <span className="font-secondary font-bold text-accent-start text-2xl">
                ${item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Resumen de Compra - SIDEBAR ESTILIZADO */}
        <aside className="card-surface sticky top-28 border border-accent-start/10 p-8 shadow-brand-hover">
          <h3 className="text-xl font-secondary font-bold mb-6 border-b border-border-subtle pb-4">
            Resumen de compra
          </h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-typography-secondary">
              <span>Subtotal</span>
              <span>${totalCart}</span>
            </div>
            <div className="flex justify-between text-typography-secondary">
              <span>Envío</span>
              <span className="text-green-500 font-bold uppercase text-xs tracking-widest">Gratis</span>
            </div>
            
            <div className="flex justify-between items-center border-t border-border-subtle pt-6">
              <span className="text-lg font-bold">Total</span>
              <div className="text-right">
                <span className="text-3xl font-bold text-gradient-brand">
                  ${totalCart}
                </span>
                <p className="text-[10px] text-typography-secondary uppercase tracking-tighter">IVA incluido</p>
              </div>
            </div>
          </div>

          {/* BOTÓN FINALIZAR COMPRA ESTILIZADO */}
          <Button 
            variant="primary" 
            onClick={handleBuy} 
            disabled={isPending}
            className={`
              w-full py-5 text-xl font-bold rounded-2xl
              shadow-brand-soft hover:shadow-brand-hover 
              transform hover:-translate-y-1 active:scale-95
              transition-all duration-300
              flex items-center justify-center gap-3
              ${isPending ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Procesando...
              </span>
            ) : (
              <>
                <span>Finalizar Compra</span>
                <span className="text-2xl">→</span>
              </>
            )}
          </Button>
        </aside>
      </div>
    </div>
  );
};

export default CartComponent;