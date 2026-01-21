"use client";
import { ButtonProps } from "@/types/ui";
import Link from "next/link";

const Button = ({
  children,
  onClick = () => {},
  variant = "primary",
  isLink = false,
  href = "/",
  ...otherProps
}: ButtonProps) => {
  
  // Definimos estilos basados en el variante para mantener la coherencia
  const variantClasses = {
    // El "primary" ahora usa el degradado del formulario (btn-brand)
    primary: "btn-brand shadow-brand-soft hover:shadow-brand-hover",
    // El "secondary" es más sobrio para no competir con el botón principal
    secondary: "bg-white border border-border-subtle text-typography-secondary hover:bg-input-bg hover:text-typography-primary shadow-sm",
    // Un estilo minimalista
    ghost: "bg-transparent text-typography-secondary hover:text-accent-start"
  };

  // Clase base para botones (incluye la animación de escala que definimos)
  const baseClasses = "inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer font-semibold";

  if (isLink) {
    return (
      <Link 
        className={`text-accent-start hover:text-accent-end font-medium transition-colors duration-300 underline-offset-4 hover:underline`} 
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant as keyof typeof variantClasses] || variantClasses.primary} py-2.5 px-6 rounded-xl`} 
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;