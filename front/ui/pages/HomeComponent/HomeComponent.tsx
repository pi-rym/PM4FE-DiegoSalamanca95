"use client";
import { getProducts } from "@/services/products";
import { Product } from "@/types/products";
import Card from "@/ui/components/Card/Card";
import CardGrid from "@/ui/components/CardGrid/CardGrid";
import { ChangeEvent, useEffect, useState } from "react";

const HomeComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      const { data, isError } = await fetchedProducts;
      setProducts(data);
      setIsError(isError);
    };
    fetchProducts();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container py-10 space-y-12">
      {/* SECCIÓN HERO / BUSCADOR */}
      <section className="flex flex-col items-center gap-6 text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-secondary font-bold text-typography-primary leading-tight">
          Encuentra la mejor <span className="text-gradient-brand">Tecnología</span>
        </h1>
        
        {/* Input de Búsqueda Estilizado como 'card-surface' */}
        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="text-xl group-focus-within:scale-110 transition-transform">🔍</span>
          </div>
          <input
            type="text"
            placeholder="¿Qué estás buscando hoy?"
            value={search}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-border-subtle shadow-brand-soft outline-none focus:ring-2 focus:ring-accent-start/20 focus:border-accent-start transition-all text-typography-primary placeholder:text-typography-secondary/50"
          />
        </div>
      </section>

      {/* MENSAJE DE ERROR SUTIL */}
      {isError && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md mb-6 shadow-sm">
          <p className="text-yellow-700 text-sm font-medium">
            ⚠️ Estamos teniendo problemas para conectar. Mostrando catálogo local.
          </p>
        </div>
      )}

      {/* GRILLA DE PRODUCTOS */}
      <section>
        {filteredProducts.length > 0 ? (
          <CardGrid>
            {filteredProducts.map((product, i) => (
              <Card key={i} card={product} />
            ))}
          </CardGrid>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center card-surface">
            <span className="text-5xl mb-4">🔍</span>
            <h3 className="text-xl font-secondary text-typography-primary">
              No encontramos productos que coincidan
            </h3>
            <p className="text-typography-secondary mt-2">
              Prueba con otros términos de búsqueda.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default HomeComponent;