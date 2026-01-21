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
    <div className="flex justify-center items-center h-screen bg-gradient-to-br text-black">
      {/* Card */}
      <div className="p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-96 bg-white/90 backdrop-blur-md p-8 rounded-2xl text-black"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">
              Registro
            </h2>
            <p className="text-sm text-black mt-1">
              Crea tu cuenta para continuar
            </p>
          </div>

          {/* Name */}
          <label className="flex flex-col gap-1 text-black">
            <span className="text-sm font-medium text-black">
              Nombre
            </span>
            <input
              className="p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              type="text"
              placeholder="Tu nombre"
              name="name"
              value={data.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.name && errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}
          </label>

          {/* Email */}
          <label className="flex flex-col gap-1 text-black">
            <span className="text-sm font-medium text-black">
              Email
            </span>
            <input
              className="p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              type="email"
              placeholder="correo@ejemplo.com"
              name="email"
              value={data.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.email && errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </label>

          {/* Password */}
          <label className="flex flex-col gap-1 text-black">
            <span className="text-sm font-medium text-black">
              Password
            </span>
            <input
              className="p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              type="password"
              placeholder="••••••••"
              name="password"
              value={data.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.password && errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
          </label>

          {/* Address */}
          <label className="flex flex-col gap-1 text-black">
            <span className="text-sm font-medium text-black">
              Dirección
            </span>
            <input
              className="p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              type="text"
              placeholder="Tu dirección"
              name="address"
              value={data.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.address && errors.address && (
              <p className="text-red-600 text-sm">{errors.address}</p>
            )}
          </label>

          {/* Phone */}
          <label className="flex flex-col gap-1 text-black">
            <span className="text-sm font-medium text-black">
              Teléfono
            </span>
            <input
              className="p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              type="tel"
              placeholder="3001234567"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {dirty.phone && errors.phone && (
              <p className="text-red-600 text-sm">{errors.phone}</p>
            )}
          </label>

          {/* Button */}
          <Button
            variant="tertiary"
            type="submit"
            //disabled={isFormDisable}
            className="
              mt-2
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              text-white font-semibold
              py-3 rounded-xl
              transition-all duration-300 ease-in-out
              hover:scale-[1.03] hover:shadow-xl
              active:scale-95
              disabled:opacity-50
              disabled:cursor-not-allowed
              disabled:hover:scale-100
            "
          >
            {isFormDisable ? "Complete los campos" : "Registrarse"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
