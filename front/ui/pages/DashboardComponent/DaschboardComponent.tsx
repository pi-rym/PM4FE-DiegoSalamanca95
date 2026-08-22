"use client";

import { AuthContext } from "@/context/AuthContext";
import Button from "@/ui/components/Button/Button";
import { useContext } from "react";


const DashboardComponent = () => {
  const { orders, isOrders, user } = useContext(AuthContext);

  return (
    <div className="container py-12 max-w-5xl">
      <h1 className="text-gradient-brand mb-10">Mi Panel de Control</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: Información del Usuario */}
        <aside className="md:col-span-1">
          <div className="card-surface sticky top-24 border border-accent-start/10">
            <div className="flex flex-col items-center text-center">
              {/* Avatar con degradado */}
              <div className="w-20 h-20 rounded-full bg-gradient-brand flex items-center justify-center text-slate-950 text-3xl font-bold shadow-brand-soft mb-4">
                {user?.user.name?.charAt(0).toUpperCase() || "U"}
              </div>
              <h2 className="text-xl font-secondary text-typography-primary">{user?.user.name}</h2>
              <p className="text-sm text-typography-secondary mb-6">{user?.user.email}</p>
            </div>

            <div className="space-y-4 border-t border-border-subtle pt-6">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-accent-start uppercase tracking-wider">Dirección</span>
                <p className="text-typography-primary">{user?.user.address || "No especificada"}</p>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-accent-start uppercase tracking-wider">Teléfono</span>
                <p className="text-typography-primary">{user?.user.phone || "No especificado"}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* COLUMNA DERECHA: Órdenes */}
        <main className="md:col-span-2">
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-2xl font-secondary">Tus Órdenes</h3>
            <span className="bg-input-bg text-accent-start px-4 py-1 rounded-full text-sm font-bold border border-accent-start/20">
              Total: {orders.length}
            </span>
          </div>

          {isOrders && orders.length > 0 ? (
            <div className="flex flex-col gap-4">
              {orders.map((order, i) => (
                <div 
                  key={i} 
                  className="card-surface flex justify-between items-center p-6 hover:translate-x-2 transition-all duration-300 border-l-4 border-l-accent-start"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-typography-secondary uppercase">ID de Orden</span>
                    <span className="font-mono text-typography-primary font-medium tracking-tighter">
                      #{order.id.toString().slice(-8).toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right mr-4">
                      <p className="text-xs text-typography-secondary">Estado</p>
                      <p className="text-sm font-bold text-green-500">Completado</p>
                    </div>
                    <Button variant="secondary" className="text-xs py-2 px-4">
                      Ver detalle
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card-surface py-16 text-center">
              <span className="text-4xl mb-4 block">📦</span>
              <p className="text-typography-secondary italic">Aún no has realizado ninguna compra.</p>
              <Button isLink href="/products" variant="primary" className="mt-6">
                Explorar productos
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardComponent;