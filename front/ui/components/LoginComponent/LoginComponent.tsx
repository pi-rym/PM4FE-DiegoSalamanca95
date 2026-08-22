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
    router.push("/login");
  };

  if (isUserLoggedIn) {
    return (
      <div className="flex gap-4 items-center">
        <Button
          isLink
          href="/dashboard"
          variant="ghost"
          className="flex items-center gap-2 !px-2 !py-1 text-typography-primary hover:text-accent-start"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-slate-950 text-[10px] shadow-sm">
            👤
          </div>
          Mi perfil
        </Button>

        <button
          onClick={handleLogout}
          className="text-xs font-secondary font-bold uppercase tracking-widest text-typography-secondary hover:text-accent-start transition-all cursor-pointer"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Button isLink href="/login" variant="secondary" className="text-xs uppercase tracking-widest !py-2">
      Login
    </Button>
  );
};

export default LoginComponent;
