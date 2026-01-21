export const validateEmail = (email: string) => {
  let error = "";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) error = "Invalid email";

  return error;
};

export const validatePassword = (password: string) => {
  let error = "";
  const regex = /^[a-zA-Z0-9]{4,8}$/;
  if (!regex.test(password) ||
  password === "") error = "Invalid password";

  return error;
};