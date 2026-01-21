"use client";

import Button from "../Button/Button";
import LoginComponent from "../LoginComponent/LoginComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const Navbar = () => {
  const pathname = usePathname();
  const { cart } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border-subtle shadow-brand-soft">
      <div className="container flex justify-between items-center py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand-soft group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-2xl font-secondary font-bold text-typography-primary group-hover:text-accent-start transition-colors">
            Tecno<span className="text-accent-end">logy</span>
          </span>
        </Link>

        {/* NAVEGACIÓN Y ACCIONES */}
        <div className="flex items-center gap-6">
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/home" 
              className={`text-sm font-semibold transition-colors ${pathname === "/home" ? "text-accent-start" : "text-typography-secondary hover:text-accent-start"}`}
            >
              Tienda
            </Link>
          </nav>

          <div className="flex items-center gap-4 border-l border-border-subtle pl-6">
            
            {/* BOTÓN REGISTRARME (Acceso Fijo) */}
            <Button 
              isLink 
              href="/register" 
              variant="secondary" 
              className="hidden sm:block py-2 px-4 text-xs font-bold border-accent-start/20 hover:border-accent-start/50"
            >
              Registrarme
            </Button>

            {/* CARRITO */}
            <Link href="/cart" className="relative group p-2 rounded-full bg-input-bg hover:bg-white hover:shadow-brand-soft transition-all duration-300">
              <span className="text-xl group-hover:scale-110 block">🛒</span>
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-end text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* LOGIN COMPONENT (Maneja el botón de Ingresar o Perfil) */}
            <LoginComponent />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;

//import Button from "../Button/Button";
//import LoginComponent from "../LoginComponent/LoginComponent";

//const Navbar = () => {
//  return (
//    <header className="bg-tertiary">
//      <div className="container flex justify-between">
//        <Button href="/" isLink>
//          Navbar
//        </Button>
//        <LoginComponent />
//      </div>
//    </header>
//  );
//};
//
//export default Navbar;