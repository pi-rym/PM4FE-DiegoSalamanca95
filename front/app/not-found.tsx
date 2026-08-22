const NotFound = () => {
  return (
    <div className="card-surface max-w-xl mx-auto text-center py-20">
      <p className="font-secondary text-accent-start tracking-[0.3em] uppercase text-xs mb-4">
        Error 404
      </p>
      <h1 className="text-gradient-brand">Página no encontrada</h1>
      <p className="text-typography-secondary">
        Esta ruta no existe en el sistema. Vuelve al catálogo para seguir explorando.
      </p>
    </div>
  );
};

export default NotFound;
