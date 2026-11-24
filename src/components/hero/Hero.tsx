import bannerBg from '../../assets/img/banner-img.png';
import grungeMask from '../../assets/img/grunge-mask-alpha.png';
import Button from '../button/Button';
import Title from '../title/Title';

const Hero = () => {
  return (
    <div
      className="border-border-main relative flex min-h-75 flex-col border-b bg-cover bg-right bg-no-repeat p-4 md:min-h-125 md:bg-top md:p-8 lg:p-12"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      <div className="relative z-1 flex flex-1 flex-col items-start justify-center">
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
        <Button className="self-start">
          <a href="#WhereFind">Где читать</a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
