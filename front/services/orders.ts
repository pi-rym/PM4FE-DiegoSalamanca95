import { LoginUserResponse } from "@/types/auth";
import { CartItem } from "@/types/cart";

export const postOrder = async (
  clientOrder: CartItem[],
  user: LoginUserResponse
) => {
  const data = {
    userId: user.user.id,
    products: clientOrder.map((item) => item.id),
  };

  const res = await fetch("http://localhost:3001/orders", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });

  return await res.json();
};
