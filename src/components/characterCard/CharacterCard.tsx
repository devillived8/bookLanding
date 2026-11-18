interface ICharacterCard {
    img: string;
    text: string;
}


const CharacterCard = ({img, text}: ICharacterCard) => {
  return (
    <div className="bg-black/60 rounded-md">
      <div className="aspect-3/4 w-full">
        <img src={img} alt="" className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-3">
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
