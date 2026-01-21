"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";

const LoginComponent = () => {
  const { isUserLoggedIn, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    // Redirección a login tras cerrar sesión
    router.push("/login");
  };

  if (isUserLoggedIn) {
    return (
      <div className="flex gap-6 items-center">
        {/* Enlace a Mi Perfil con estilo sutil y coherente */}
        <Button 
          isLink 
          href="/dashboard" 
          className="flex items-center gap-2 text-typography-primary font-semibold hover:text-accent-start transition-all"
        >
          {/* Avatar pequeño con el degradado de tu marca */}
          <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white text-[10px] shadow-sm">
            👤
          </div>
          Mi perfil
        </Button>

        {/* Botón Logout con el estilo de texto interactivo */}
        <button 
          onClick={handleLogout}
          className="text-sm font-bold text-typography-secondary hover:text-accent-end transition-all cursor-pointer border-b-2 border-transparent hover:border-accent-end py-1"
        >
          Logout
        </button>
      </div>
    );
  }

  // Mantenemos el estilo de tu archivo inicial para el botón Login
  return (
    <Button isLink href="/login">
      Login
    </Button>
  );
};

export default LoginComponent;