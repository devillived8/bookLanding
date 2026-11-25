import bannerBg from '../../assets/img/banner-img.webp';
import grungeMask from '../../assets/img/grunge-mask-alpha.png';
import Button from '../button/Button';
import Title from '../title/Title';

const Hero = () => {
  return (
    <section className="border-border-section relative flex min-h-75 flex-col overflow-hidden border-b p-4 md:min-h-125 md:p-8 lg:p-12">
      <img
        src={bannerBg}
        alt=""
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-right md:object-top"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-1 flex-col items-start justify-center">
        <Title
          level={1}
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
        </Title>

        <p className="text-text-muted text-lg tracking-widest uppercase md:text-xl">
          Триллер-детектив
        </p>

        <p className="mt-4 max-w-xs text-base leading-relaxed md:max-w-md md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="relative z-10 self-start">
        <Button className="self-start" variant="link" href="#WhereFind">
          Где читать
        </Button>
      </div>
    </section>
  );
};

export default Hero;
