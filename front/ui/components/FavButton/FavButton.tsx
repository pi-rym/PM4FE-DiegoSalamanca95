"use client";

import { useState } from "react";

const FavButton = () => {
  const [isFav, setIsFav] = useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    // Evitamos que al hacer clic en el favorito se active el link de la tarjeta
    e.preventDefault();
    e.stopPropagation();
    setIsFav((prev) => !prev);
  };

  return (
    <button 
      onClick={handleClick}
      className={`
        /* Dimensiones y Forma Circular */
        w-10 h-10 flex items-center justify-center rounded-full 
        /* Fondo blanco para que destaque sobre la imagen */
        bg-white border border-border-subtle
        /* Profundidad con la sombra de tu marca */
        shadow-brand-soft transition-all duration-300 ease-in-out 
        hover:scale-110 hover:shadow-brand-hover active:scale-90
        cursor-pointer
      `}
      aria-label="Agregar a favoritos"
    >
      {isFav ? (
        /* Estrella Amarilla cuando es favorito */
        <span className="text-2xl text-yellow-400 drop-shadow-sm transition-all">
          ★
        </span>
      ) : (
        /* Estrella vacía cuando no es favorito */
        <span className="text-2xl text-typography-secondary hover:text-yellow-400/70 transition-colors">
          ☆
        </span>
      )}
    </button>
  );
};

export default FavButton;