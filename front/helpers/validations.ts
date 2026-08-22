const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 64;

export const validateEmail = (email: string) => {
  let error = "";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) error = "Email inválido";

  return error;
};

export const validateLoginPassword = (password: string) => {
  if (!password.trim()) return "La contraseña es obligatoria";
  return "";
};

export const validatePassword = (password: string) => {
  if (!password) {
    return "La contraseña es obligatoria";
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres`;
  }

  if (password.length > MAX_PASSWORD_LENGTH) {
    return `La contraseña no puede superar ${MAX_PASSWORD_LENGTH} caracteres`;
  }

  if (!/[a-z]/.test(password)) {
    return "La contraseña debe incluir al menos una minúscula";
  }

  if (!/[A-Z]/.test(password)) {
    return "La contraseña debe incluir al menos una mayúscula";
  }

  if (!/\d/.test(password)) {
    return "La contraseña debe incluir al menos un número";
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    return "La contraseña debe incluir al menos un carácter especial";
  }

  return "";
};
