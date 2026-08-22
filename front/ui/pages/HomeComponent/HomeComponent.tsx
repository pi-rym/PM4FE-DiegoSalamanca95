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

  //const CategoryProducts = products.filter((product) =>
  //  product.
  //);


  return (
    <main className="container py-10 space-y-12">
      {/* SECCIÓN HERO / BUSCADOR */}
      <section className="flex flex-col items-center gap-6 text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-secondary font-bold text-typography-primary leading-tight">
          Encuentra la mejor <span className="text-gradient-brand">Tecnología</span>
        </h1>
        
        {/* Input de Búsqueda Estilizado como 'card-surface' */}
        <label className="flex items-center gap-3 w-full rounded-2xl bg-input-bg border border-cyan-400/20 px-4 py-2 shadow-brand-soft focus-within:border-cyan-400/60 focus-within:ring-4 focus-within:ring-cyan-400/10 transition-all">
          <span className="text-lg text-accent-start shrink-0" aria-hidden>
            🔍
          </span>
          <input
            type="text"
            placeholder="Buscar dispositivos, chips, modelos..."
            value={search}
            onChange={handleChange}
            className="flex-1 min-w-0 bg-transparent border-none outline-none py-2 text-typography-primary placeholder:text-typography-secondary/70"
          />
        </label>
      </section>

      {/* MENSAJE DE ERROR SUTIL */}
      {isError && (
        <div className="bg-amber-500/10 border-l-4 border-amber-400 p-4 rounded-md mb-6">
          <p className="text-amber-200 text-sm font-medium font-secondary">
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