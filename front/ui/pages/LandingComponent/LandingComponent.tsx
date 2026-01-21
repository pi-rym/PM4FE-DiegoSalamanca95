import { getFeaturedProducts } from '@/services/products';
import Button from '@/ui/components/Button/Button';
import Card from '@/ui/components/Card/Card';
import CardGrid from '@/ui/components/CardGrid/CardGrid';

const LandingComponent = async () => {
    const { data: featuredProducts, isError } = await getFeaturedProducts();

    return (
        <div className='flex flex-col gap-16 py-10'>
            {/* SECCIÓN HERO: Sustituimos bg-tertiary por una atmósfera de marca */}
            <section className='relative overflow-hidden flex justify-center items-center flex-col w-full bg-white card-surface p-12 md:p-24 rounded-3xl text-center border border-border-subtle'>
                {/* Decoración de fondo sutil */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent-start/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent-end/5 rounded-full blur-3xl"></div>

                <h1 className='text-4xl md:text-7xl font-secondary font-bold text-typography-primary mb-6 leading-tight'>
                    Technical <span className='text-gradient-brand'>Tecnology</span>
                </h1>
                
                <p className='text-typography-secondary text-lg md:text-xl max-w-2xl mb-10'>
                    Descubre todos nuestros productos
                </p>

                <Button href="/home" isLink variant="primary" className="px-10 py-4 text-lg shadow-brand-hover"> 
                    Todos nuestros productos
                </Button>
            </section>

            {/* SECCIÓN DE PRODUCTOS DESTACADOS */}
            <section className='container'>
                <div className='flex items-center gap-4 mb-10'>
                    <h2 className='text-3xl font-secondary font-bold text-typography-primary'>
                        Productos <span className='text-accent-start'>Destacados</span>
                    </h2>
                    <div className='flex-grow h-[1px] bg-gradient-to-r from-border-subtle to-transparent'></div>
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