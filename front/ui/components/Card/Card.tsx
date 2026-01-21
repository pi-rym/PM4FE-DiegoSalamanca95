import { CardProps } from "@/types/ui";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import FavButton from "../FavButton/FavButton";

const Card = ({ card }: CardProps) => {
  return (
    <div className="relative group">
      {/* FavButton posicionado de forma absoluta para que flote sobre la tarjeta */}
      <div className="absolute top-4 right-4 z-10">
        <FavButton />
      </div>

      <Link href={`/${card.id}`}>
        <article className="card-surface flex flex-col h-full gap-4 transition-default hover:shadow-brand-hover border border-transparent hover:border-accent-start/20">
          
          {/* Contenedor de imagen con un fondo suave para resaltar el producto */}
          <div className="bg-input-bg rounded-xl overflow-hidden flex justify-center items-center p-6 aspect-square">
            <Image 
              src={card.image} 
              alt={card.name} 
              width={160} 
              height={160} 
              className="object-contain drop-shadow-md"
            />
          </div>

          <div className="flex flex-col gap-2 flex-grow">
            {/* Nombre del producto con la tipografía secundaria definida */}
            <h3 className="text-xl font-secondary text-typography-primary line-clamp-1">
              {card.name}
            </h3>
            
            {/* Descripción con color secundario para jerarquía visual */}
            <p className="text-typography-secondary text-sm line-clamp-2 min-h-[40px]">
              {card.description}
            </p>
            
            {/* Precio destacado con un color de la marca */}
            <p className="text-2xl font-bold text-accent-start mt-auto">
              ${card.price}
            </p>
          </div>

          {/* Botón principal que utiliza el degradado de la marca */}
          <Button variant="primary">
            Ver detalle
          </Button>

        </article>
      </Link>
    </div>    
  );
};

export default Card;