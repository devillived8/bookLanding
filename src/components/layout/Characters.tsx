import character1 from '../../assets/img/character-1.png';
import character2 from '../../assets/img/character-2.png';
import character3 from '../../assets/img/character-3.png';
import CharacterCard from '../characterCard/CharacterCard';
import Section from '../section/Section';
import Slider from '../slider/Slider';

const charactersArr = [
  {
    id: 'character-1',
    title: 'Ян Северов',
    img: character1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
  },
  {
    id: 'character-2',
    title: 'Ян Северов',
    img: character2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
  },
  {
    id: 'character-3',
    title: 'Ян Северов',
    img: character3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
  },
  {
    id: 'character-4',
    title: 'Ян Северов',
    img: character1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
  },
  {
    id: 'character-5',
    title: 'Ян Северов',
    img: character2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
  },
  {
    id: 'character-6',
    title: 'Ян Северов',
    img: character3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
  },
];

const Characters = () => {
  return (
    <Section titleText="Персонажи" id="Characters">
      <div className="md:hidden">
        <Slider sliderItems={charactersArr} />
      </div>
      <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[auto_auto] md:gap-8">
        {charactersArr.map((char) => (
          <CharacterCard key={char.id} img={char.img} text={char.text} name={char.title} />
        ))}
      </div>
    </Section>
  );
};

export default Characters;
