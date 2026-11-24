const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <h1 className="animate-pulse-glow font-display text-3xl text-accent-red">
        ТЕНЬ ЦЕРБЕРА
      </h1>

      <div className="mt-8 h-1 w-48 overflow-hidden bg-white/10">
        <div className="h-full w-1/2 animate-loader bg-accent-red" />
      </div>

      <p className="mt-4 animate-pulse text-sm tracking-[0.3em] text-text-muted">
        ЗАГРУЗКА...
      </p>
    </div>
  );
};

export default Preloader;
