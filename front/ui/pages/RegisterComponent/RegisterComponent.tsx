"use client";

import { validateEmail, validatePassword } from "@/helpers/validations";
import { RegisterUserData } from "@/types/auth";
import Button from "@/ui/components/Button/Button";
import { register } from "@/services/auth";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const RegisterComponent = () => {
  const router = useRouter();

  const initialData: RegisterUserData = {
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  };

  const initialDirty: Record<string, boolean> = {
    name: false,
    email: false,
    password: false,
    address: false,
    phone: false,
  };

  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [dirty, setDirty] = useState(initialDirty);

  const isFormDisable = !(
    errors.email && 
    errors.password && 
    errors.name && 
    errors.address && 
    errors.phone
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res: any = await register(data);

      if (res?.statusCode) {
        toast.error(res.message);
      } else {
        toast.success("User register successfully");
        setTimeout(() =>{
          router.push("/login");
        },2000 ) 
          
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
      name: data.name.trim() === "" ? "El nombre es obligatorio" : "",
      email: validateEmail(data.email),
      password: validatePassword(data.password),
      address:
        data.address.trim() === "" ? "La dirección es obligatoria" : "",
      phone:
        data.phone.trim() === "" ? "El teléfono es obligatorio" : "",
    });
  }, [data]);

  return (
    <div className="flex justify-center items-center py-12">
      <div className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 shadow-brand-hover">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-96 bg-slate-950/95 backdrop-blur-md p-8 rounded-2xl"
        >
          <div className="text-center">
            <p className="text-xs font-secondary uppercase tracking-[0.3em] text-accent-start mb-2">
              Nuevo usuario
            </p>
            <h2 className="text-3xl font-bold text-typography-primary">
              Registro
            </h2>
            <p className="text-sm text-typography-secondary mt-1">
              Crea tu cuenta para continuar
            </p>
          </div>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-typography-secondary">
              Nombre
            </span>
            <input
              className="input-custom"
              type="text"
              placeholder="Tu nombre"
              name="name"
              value={data.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.name && errors.name && (
              <p className="text-red-400 text-sm">{errors.name}</p>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-typography-secondary">
              Email
            </span>
            <input
              className="input-custom"
              type="email"
              placeholder="correo@ejemplo.com"
              name="email"
              value={data.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.email && errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-typography-secondary">
              Password
            </span>
            <input
              className="input-custom"
              type="password"
              placeholder="Ej: Tech2026!"
              name="password"
              autoComplete="new-password"
              minLength={8}
              maxLength={64}
              value={data.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="text-xs text-typography-secondary ml-1">
              Mínimo 8 caracteres, con mayúscula, minúscula, número y símbolo.
            </p>
            {dirty.password && errors.password && (
              <p className="text-red-400 text-sm">{errors.password}</p>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-typography-secondary">
              Dirección
            </span>
            <input
              className="input-custom"
              type="text"
              placeholder="Tu dirección"
              name="address"
              value={data.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.address && errors.address && (
              <p className="text-red-400 text-sm">{errors.address}</p>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-typography-secondary">
              Teléfono
            </span>
            <input
              className="input-custom"
              type="tel"
              placeholder="3001234567"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.phone && errors.phone && (
              <p className="text-red-400 text-sm">{errors.phone}</p>
            )}
          </label>

          <Button
            variant="primary"
            type="submit"
            className="mt-2"
          >
            {isFormDisable ? "Complete los campos" : "Registrarse"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
