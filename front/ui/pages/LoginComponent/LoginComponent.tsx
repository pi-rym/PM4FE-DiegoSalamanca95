"use client";

import { validateEmail, validatePassword } from "@/helpers/validations";
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
      password: validatePassword(data.password),
    });
  }, [data]);

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] py-12 px-4 text-black">
      {/* Card con borde de gradiente */}
      <div className="p-[2px] rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full max-w-sm bg-white p-8 md:p-10 rounded-[23px] text-black"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">
              Bienvenido
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Inicia sesión para continuar
            </p>
          </div>

          {/* Email */}
          <label className="flex flex-col gap-1 text-black">
            <span className="text-sm font-semibold text-gray-700 ml-1">
              Email
            </span>
            <input
              className="p-3 rounded-xl border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              type="email"
              placeholder="correo@ejemplo.com"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.email && errors.email && (
              <p className="text-red-500 text-xs italic ml-1">{errors.email}</p>
            )}
          </label>

          {/* Password */}
          <label className="flex flex-col gap-1 text-black">
            <span className="text-sm font-semibold text-gray-700 ml-1">
              Password
            </span>
            <input
              className="p-3 rounded-xl border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              type="password"
              placeholder="••••••••"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.password && errors.password && (
              <p className="text-red-500 text-xs italic ml-1">{errors.password}</p>
            )}
          </label>

          {/* Login Button */}
          <Button
            variant="tertiary"
            type="submit"
            disabled={isFormDisable}
            className="
              mt-2
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              text-white font-bold
              py-3 rounded-xl
              transition-all duration-300
              hover:shadow-lg active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {isFormDisable ? "Complete los campos" : "Ingresar"}
          </Button>

          {/* REGISTRO: Sección añadida para invitar al usuario */}
          <div className="mt-4 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta aún?
            </p>
            <Link 
              href="/register" 
              className="inline-block mt-2 text-indigo-600 font-bold hover:text-purple-600 transition-colors underline-offset-4 hover:underline"
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