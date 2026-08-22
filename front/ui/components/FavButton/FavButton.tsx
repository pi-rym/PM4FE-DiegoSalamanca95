"use client";

import { useState } from "react";

const FavButton = () => {
  const [isFav, setIsFav] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFav((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-950/90 border border-cyan-400/30 shadow-brand-soft transition-all duration-300 ease-in-out hover:scale-110 hover:border-cyan-300 active:scale-90 cursor-pointer"
      aria-label="Agregar a favoritos"
    >
      {isFav ? (
        <span className="text-2xl text-cyan-300 drop-shadow-sm">★</span>
      ) : (
        <span className="text-2xl text-typography-secondary hover:text-cyan-300">☆</span>
      )}
    </button>
  );
};

export default FavButton;
