import { getProduct } from "@/services/products";
import ProductDetailComponent from "@/ui/pages/ProductDetailComponent/ProductDetailComponent";
import { notFound } from "next/navigation";

const Product = async ({ params }: { params: { idProduct: string } }) => {
  const { idProduct } = await params;
  const { data: product, isError } = await getProduct(idProduct);

  if (!product) {
    notFound();
  }

  return (
    <>
      {isError && (
        <p className="text-red-600 mb-4">
          Error fetching products, working with mock data
        </p>
      )}
      <ProductDetailComponent product={product} />
    </>
  );
};

export default Product;
