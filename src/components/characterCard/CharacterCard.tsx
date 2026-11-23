import Title from '../title/Title';

interface ICharacterCard {
  img: string;
  text: string;
  name: string;
}

const CharacterCard = ({ img, text, name }: ICharacterCard) => {
  return (
    <div className="border-border-main bg-bg-secondary rounded-md border">
      <div></div>
      <div className="aspect-3/4 w-full">
        <img src={img} loading="lazy" alt="" className="h-full w-full rounded-md object-cover object-top" />
      </div>
      <Title level={3} className="p-4 text-center">
        {name}
      </Title>
      <div className="pr-4 pl-4 pb-4">
        <p className='hypnens-auto'>{text}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
