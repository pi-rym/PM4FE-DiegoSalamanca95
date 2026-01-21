import { LoginUserData, LoginUserResponse, RegisterUserData, RegisterUserResponse, ResponseError } from "@/types/auth";

export const register = async (
  registerUserData: RegisterUserData
): Promise<RegisterUserResponse | ResponseError | null> => {
  const res = await fetch("http://localhost:3001/users/register", {
    method: "POST",
    body: JSON.stringify(registerUserData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};

export const login = async ( 
    loginUserData :LoginUserData
    ): Promise<LoginUserResponse | ResponseError | null> => {
    const res = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      body: JSON.stringify(loginUserData),
      headers: {
        "Content-Type": "application/json",
    },
  });

  return await res.json();
};
