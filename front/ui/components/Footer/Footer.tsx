const Footer = () => {
  return (
    <footer className="bg-white border-t border-border-subtle py-10 mt-20">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Nombre de la empresa */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-secondary font-bold text-typography-primary">
            Tecnology <span className="text-accent-end">S.A.S</span>
          </span>
          <p className="text-sm text-typography-secondary">
            Innovación y calidad en cada componente.
          </p>
        </div>

        {/* Copyright y Redes */}
        <div className="text-typography-secondary text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;