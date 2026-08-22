import { CardProps } from "@/types/ui";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import FavButton from "../FavButton/FavButton";

const Card = ({ card }: CardProps) => {
  return (
    <div className="relative group">
      <div className="absolute top-4 right-4 z-10">
        <FavButton />
      </div>

      <Link href={`/${card.id}`} className="no-underline">
        <article className="card-surface flex flex-col h-full gap-4 hover:shadow-brand-hover hover:border-cyan-400/40 transition-all duration-300">
          <div className="bg-slate-950 rounded-xl overflow-hidden flex justify-center items-center p-6 aspect-square border border-cyan-400/10">
            <Image
              src={card.image}
              alt={card.name}
              width={160}
              height={160}
              className="object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.25)] group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col gap-2 flex-grow">
            <h3 className="text-lg font-secondary text-typography-primary line-clamp-1">
              {card.name}
            </h3>
            <p className="text-typography-secondary text-sm line-clamp-2 min-h-[40px]">
              {card.description}
            </p>
            <p className="text-2xl font-bold text-gradient-brand mt-auto">
              ${card.price}
            </p>
          </div>

          <Button variant="primary">Ver detalle</Button>
        </article>
      </Link>
    </div>
  );
};

export default Card;
