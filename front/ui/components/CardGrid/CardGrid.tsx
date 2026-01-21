import { CardGridProps } from "@/types/ui";

const CardGrid = ({ children }: CardGridProps) => {
  return (
    <section 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10"
    >
      {children}
    </section>
  );
};

export default CardGrid;