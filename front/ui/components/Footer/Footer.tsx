const Footer = () => {
  return (
    <footer className="bg-slate-950/90 border-t border-cyan-400/15 py-10 mt-20">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-secondary font-bold text-typography-primary">
            Tecnology <span className="text-accent-start">S.A.S</span>
          </span>
          <p className="text-sm text-typography-secondary font-secondary">
            Hardware, innovación y rendimiento.
          </p>
        </div>
        <div className="text-typography-secondary text-xs uppercase tracking-[0.2em] font-secondary">
          © {new Date().getFullYear()} Sistema en línea
        </div>
      </div>
    </footer>
  );
};

export default Footer;
