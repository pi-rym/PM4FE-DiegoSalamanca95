"use client";

import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      // Redirigimos después de 2 segundos para que el usuario lea el mensaje
      const timeout = setTimeout(() => {
        router.push("/login");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] container animate-fade-in">
        <div className="card-surface p-12 flex flex-col items-center max-w-md text-center shadow-brand-hover">
          
          {/* Spinner animado con los colores de la marca */}
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 border-4 border-input-bg rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-accent-start border-r-accent-end rounded-full animate-spin"></div>
          </div>

          <h2 className="text-2xl font-secondary font-bold text-typography-primary mb-2">
            Acceso Restringido
          </h2>
          
          <p className="text-typography-secondary mb-6">
            Debes iniciar sesión para acceder a este contenido. Redirigiéndote al portal...
          </p>

          {/* Barra de progreso visual */}
          <div className="w-full h-1.5 bg-input-bg rounded-full overflow-hidden">
            <div className="h-full bg-gradient-brand animate-progress-loading"></div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default WithAuth;