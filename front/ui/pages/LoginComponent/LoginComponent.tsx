"use client";

import { validateEmail, validateLoginPassword } from "@/helpers/validations";
import Button from "@/ui/components/Button/Button";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth";
import { LoginUserData } from "@/types/auth";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link"; // Importante para la navegación

const LoginComponent = () => {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);
  
  const initialData: LoginUserData = {
    email: "",
    password: "",
  };

  const initialDirty: Record<string, boolean> = {
    email: false,
    password: false,
  };

  const [data, setData] = useState<LoginUserData>(initialData);
  const [errors, setErrors] = useState<LoginUserData>(initialData);
  const [dirty, setDirty] = useState<Record<string, boolean>>(initialDirty);

  const isFormDisable = !!(errors.email || errors.password || !data.email || !data.password);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res: any = await login(data);
      if (res?.statusCode) {
        toast.error(res.message);
      } else {
        toast.success("Login successful");
        setUser(res);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      toast.error("Error connecting to server");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true });
  };

  useEffect(() => {
    setErrors({
      email: validateEmail(data.email),
      password: validateLoginPassword(data.password),
    });
  }, [data]);

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] py-12 px-4">
      <div className="p-[1px] rounded-3xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 shadow-brand-hover">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full max-w-sm bg-slate-950/95 p-8 md:p-10 rounded-[23px]"
        >
          <div className="text-center">
            <p className="text-xs font-secondary uppercase tracking-[0.3em] text-accent-start mb-2">
              Acceso
            </p>
            <h2 className="text-3xl font-bold text-typography-primary">
              Bienvenido
            </h2>
            <p className="text-sm text-typography-secondary mt-1">
              Inicia sesión para continuar
            </p>
          </div>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-typography-secondary ml-1">
              Email
            </span>
            <input
              className="input-custom"
              type="email"
              placeholder="correo@ejemplo.com"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.email && errors.email && (
              <p className="text-red-400 text-xs italic ml-1">{errors.email}</p>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-typography-secondary ml-1">
              Password
            </span>
            <input
              className="input-custom"
              type="password"
              placeholder="••••••••"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.password && errors.password && (
              <p className="text-red-400 text-xs italic ml-1">{errors.password}</p>
            )}
          </label>

          <Button
            variant="primary"
            type="submit"
            disabled={isFormDisable}
            className="mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isFormDisable ? "Complete los campos" : "Ingresar"}
          </Button>

          <div className="mt-4 pt-6 border-t border-cyan-400/15 text-center">
            <p className="text-sm text-typography-secondary">
              ¿No tienes una cuenta aún?
            </p>
            <Link
              href="/register"
              className="inline-block mt-2 text-accent-start font-bold hover:text-accent-end transition-colors"
            >
              Crea una cuenta aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;