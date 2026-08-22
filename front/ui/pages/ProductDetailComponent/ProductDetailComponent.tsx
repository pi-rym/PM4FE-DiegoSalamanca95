import { Product } from "@/types/products";
import AddToCartButton from "@/ui/components/AddToCartButton/AddToCartButton";
import Image from "next/image";

const ProductDetailComponent = ({ product }: { product: Product }) => {
  return (
    <main className="container py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: Imagen del Producto */}
        <section className="card-surface p-8 flex justify-center items-center overflow-hidden group">
          <div className="relative w-full aspect-square max-w-[400px] transition-transform duration-500 group-hover:scale-105">
            <Image
              src={product?.image}
              alt={product?.name}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </section>

        {/* COLUMNA DERECHA: Información y Compra */}
        <section className="flex flex-col gap-6">
          {/* Categoría y Stock */}
          <div className="flex justify-between items-center">
            <span className="px-3 py-1 rounded-full bg-input-bg text-accent-start text-xs font-bold uppercase tracking-widest border border-accent-start/10">
              Categoría {product?.categoryId}
            </span>
            <span className={`text-sm font-medium ${product?.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {product?.stock > 0 ? `● En stock (${product?.stock})` : '● Agotado'}
            </span>
          </div>

          {/* Título y Precio */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-secondary font-bold text-typography-primary leading-tight">
              {product?.name}
            </h1>
           <p className="text-3xl font-bold text-gradient-brand">
              ${product?.price}

              {product?.categoryId === 5 ? " ⭐" : ""}
            </p>
          </div>

          {/* Separador sutil */}
          <div className="h-[1px] w-full bg-gradient-to-r from-border-subtle to-transparent" />

          {/* Descripción */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-typography-secondary tracking-widest">
              Descripción del producto
            </h3>
            <p className="text-typography-secondary leading-relaxed text-lg">
              {product?.description}
            </p>
            <p className="text-typography-secondary leading-relaxed text-lg">
              {product?.description}
            </p>
          </div>

          {/* Acción de Compra */}
          <div className="mt-8 p-6 rounded-2xl bg-input-bg/50 border border-border-subtle">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-typography-secondary">
                Pagos seguros y garantía oficial de Technical Tecnology.
              </p>
              <AddToCartButton product={product} />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default ProductDetailComponent;