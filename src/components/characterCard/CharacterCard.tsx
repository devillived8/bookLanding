import ImageApp from '../imageApp/ImageApp';
import Title from '../title/Title';

interface ICharacterCard {
  img: string;
  text: string;
  name: string;
  alt: string;
}

const CharacterCard = ({ img, text, name, alt }: ICharacterCard) => {
  return (
    <div className="border-border-component bg-bg-surface rounded-md border">
      <div className="relative aspect-3/4 w-full">
        <ImageApp
          src={img}
          loading="lazy"
          alt={alt}
          className="h-full w-full rounded-md object-cover object-top"
        ></ImageApp>
      </div>
      <Title level={3} className="p-4 text-center">
        {name}
      </Title>
      <div className="pr-4 pb-4 pl-4">
        <p className="hyphens-auto">{text}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
