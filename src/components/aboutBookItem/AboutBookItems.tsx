import ImageApp from '../imageApp/ImageApp';

export type Direction = 'toRight' | 'toLeft';

interface IAboutBookItemProps {
  src: string;
  alt: string;
  text: string;
  direction: Direction;
}

const AboutBookItems = ({ src, alt, text, direction }: IAboutBookItemProps) => {
  return (
    <div
      className={`bg-bg-surface border-border-component flex max-w-400 flex-col items-center gap-6 rounded-md border p-4 sm:flex-row sm:gap-16 md:p-8 ${
        direction === 'toRight' ? 'md:self-start' : 'md:self-end'
      }`}
    >
      <div
        className={`dark-neon-border w-64 shrink-0 self-center overflow-hidden rounded-xl sm:w-60 md:w-80 ${direction === 'toRight' ? '' : 'order-1 sm:order-2'}`}
      >
        <ImageApp
          src={src}
          alt={alt}
          width={400}
          height={600}
          position="top"
          className="w-full"
        ></ImageApp>
      </div>
      <p
        className={`max-w-200 hyphens-auto ${direction === 'toRight' ? '' : 'order-2 sm:order-1'}`}
      >
        {text}
      </p>
    </div>
  );
};

export default AboutBookItems;
