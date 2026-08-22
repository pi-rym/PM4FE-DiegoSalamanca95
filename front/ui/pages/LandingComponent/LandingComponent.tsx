import { getFeaturedProducts } from "@/services/products";
import Button from "@/ui/components/Button/Button";
import Card from "@/ui/components/Card/Card";
import CardGrid from "@/ui/components/CardGrid/CardGrid";

const LandingComponent = async () => {
  const { data: featuredProducts, isError } = await getFeaturedProducts();

  return (
    <div className="flex flex-col gap-16 py-6">
      <section className="relative overflow-hidden flex justify-center items-center flex-col w-full card-surface p-12 md:p-24 rounded-3xl text-center">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />

        <p className="relative z-10 mb-4 text-xs font-secondary uppercase tracking-[0.35em] text-accent-start">
          Next-gen devices
        </p>
        <h1 className="relative z-10 text-4xl md:text-7xl font-secondary font-bold text-typography-primary mb-6 leading-tight">
          Technical <span className="text-gradient-brand">Tecnology</span>
        </h1>
        <p className="relative z-10 text-typography-secondary text-lg md:text-xl max-w-2xl mb-10">
          Explora smartphones, hardware y accesorios con rendimiento de última generación.
        </p>

        <div className="relative z-10">
          <Button href="/home" isLink variant="primary" className="px-10 py-4 text-lg">
            Explorar catálogo
          </Button>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-secondary font-bold text-typography-primary">
            Productos <span className="text-accent-start">Destacados</span>
          </h2>
          <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-400/40 to-transparent" />
        </div>

        {isError ? (
          <div className="card-surface p-10 text-center text-typography-secondary">
            No pudimos cargar los destacados, pero puedes ver todo nuestro catálogo en la tienda.
          </div>
        ) : (
          <CardGrid>
            {featuredProducts.map((product, i) => (
              <Card card={product} key={i} />
            ))}
          </CardGrid>
        )}
      </section>
    </div>
  );
};

export default LandingComponent;
