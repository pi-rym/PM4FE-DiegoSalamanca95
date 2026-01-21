import { mockProducts } from "@/__mock__/muckProducts";
import { Product } from "@/types/products";
import { cache } from "react";

export const getProducts = async (): Promise<{
  data: Product[];
  isError: boolean;
}> => {
  let data: Product[] = mockProducts;
  let isError = false;

  try {
    const response = await fetch("http://localhost:3001/products", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    } 
    data = await response.json();
  } catch (error) {
    console.error("Error fetching products: ", error);
    isError = true;
  }

  return { data, isError };
};

export const getFeaturedProducts = async (): Promise<{
  data: Product[];
  isError: boolean;
}> => {
  let featuredProducts: Product[] = mockProducts.slice(0, 3);
  const { data, isError } = await getProducts();

  if (!isError) {
    featuredProducts = data.slice(0, 3);
  }

  return { data: featuredProducts, isError };
};

export const getProduct = async (
  id: string
): Promise<{
  data: Product | undefined;
  isError: boolean;
}> => {
  let product: Product | undefined = mockProducts.find(
    (product) => product.id === parseInt(id)
  );

  const { data, isError } = await getProducts();

  if (!isError) {
    product = data.find((product) => product.id === parseInt(id));
  }

  return { data: product, isError };
};