import bannerBg from '../../assets/img/banner-img.png';
import grungeMask from '../../assets/img/grunge-mask-alpha.png';

const Hero = () => {
  return (
    <div
      className="relative flex min-h-75 flex-col bg-cover bg-right bg-no-repeat border-b border-border-main p-4 md:min-h-125 md:bg-top md:p-8 lg:p-12"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="relative z-1 flex flex-1 flex-col items-start justify-center">
        <h1
          className="font-display text-accent-red text-4xl leading-tight md:text-6xl lg:text-7xl text-shadow-accent-red text-shadow-md"
          style={{
            WebkitMaskImage: `url(${grungeMask})`,
            maskImage: `url(${grungeMask})`,
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        >
          ТЕНЬ ЦЕРБЕРА
        </h1>

        <p className="text-text-muted text-lg tracking-widest uppercase md:text-xl">
          Триллер-детектив
        </p>

        <p className="mt-4 max-w-xs text-base leading-relaxed md:max-w-md md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="self-start relative z-10">
      <button className="self-start rounded-md border px-5 py-2 text-base transition-colors hover:bg-white/10 md:px-6 md:py-3 md:text-lg">
        Где читать
      </button>
      </div>
    </div>
  );
};

export default Hero;
