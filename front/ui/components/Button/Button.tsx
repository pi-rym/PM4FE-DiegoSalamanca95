"use client";
import { ButtonProps } from "@/types/ui";
import Link from "next/link";

const Button = ({
  children,
  onClick = () => {},
  variant = "primary",
  isLink = false,
  href = "/",
  className = "",
  ...otherProps
}: ButtonProps) => {
  const variantClasses = {
    primary: "btn-brand shadow-brand-soft hover:shadow-brand-hover",
    secondary:
      "bg-slate-900/80 border border-cyan-400/25 text-cyan-200 hover:border-cyan-300 hover:bg-slate-800 shadow-brand-soft",
    ghost: "bg-transparent text-typography-secondary hover:text-accent-start",
    tertiary: "btn-brand shadow-brand-soft hover:shadow-brand-hover",
    quaternary: "bg-slate-900/80 border border-cyan-400/25 text-cyan-200",
  };

  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer font-semibold py-2.5 px-6 rounded-xl no-underline";

  const classes = `${baseClasses} ${variantClasses[variant as keyof typeof variantClasses] || variantClasses.primary} ${className}`;

  if (isLink) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
