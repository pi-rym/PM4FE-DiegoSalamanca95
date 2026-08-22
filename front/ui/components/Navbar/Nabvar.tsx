"use client";

import LoginComponent from "../LoginComponent/LoginComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { AuthContext } from "@/context/AuthContext";

const Navbar = () => {
  const pathname = usePathname();
  const { cart } = useContext(CartContext);
  const { isUserLoggedIn } = useContext(AuthContext);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-xl border-b border-cyan-400/15 shadow-brand-soft">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand-soft group-hover:scale-110 transition-transform duration-300">
            <span className="text-slate-950 font-bold text-xl">T</span>
          </div>
          <span className="text-2xl font-secondary font-bold text-typography-primary">
            Tecno<span className="text-accent-start">logy</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/home"
              className={`text-xs font-secondary font-semibold uppercase tracking-[0.18em] transition-colors ${pathname === "/home" ? "text-accent-start" : "text-typography-secondary hover:text-accent-start"}`}
            >
              Tienda
            </Link>
          </nav>

          <div className="flex items-center gap-4 border-l border-cyan-400/15 pl-6">
            {!isUserLoggedIn && (
              <Link
                href="/register"
                className="hidden sm:inline-flex items-center gap-2 relative overflow-hidden px-4 py-2 rounded-full text-white text-xs font-bold tracking-widest uppercase bg-slate-950 border border-cyan-400/40 shadow-[0_0_18px_rgba(34,211,238,0.28)] hover:border-cyan-300 hover:shadow-[0_0_28px_rgba(129,140,248,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 no-underline"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-indigo-500/30 to-fuchsia-500/20" />
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                </span>
                <span className="relative">Crear cuenta</span>
              </Link>
            )}

            <Link
              href="/cart"
              className="relative group p-2 rounded-full bg-slate-900 border border-cyan-400/20 hover:border-cyan-300 hover:shadow-brand-soft transition-all duration-300"
            >
              <span className="text-xl group-hover:scale-110 block">🛒</span>
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-end text-white text-[10px] flex items-center justify-center rounded-full border-2 border-slate-950 font-bold">
                  {cart.length}
                </span>
              )}
            </Link>

            <LoginComponent />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
