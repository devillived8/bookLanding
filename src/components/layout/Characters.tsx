import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import character1 from '../../assets/img/character-1.png';
import character2 from '../../assets/img/character-2.png';
import character3 from '../../assets/img/character-3.png';
import CharacterCard from '../characterCard/CharacterCard';

const Characters = () => {
  const charactersArr = [
    {
      id: 'character-1',
      img: character1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
    {
      id: 'character-2',
      img: character2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
    {
      id: 'character-3',
      img: character3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
    {
      id: 'character-4',
      img: character1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
    {
      id: 'character-5',
      img: character2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
    {
      id: 'character-6',
      img: character3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
  ];

  return (
    <section className="p-4">
      <h2 className="font-display mb-4 text-center text-lg">Персонажи</h2>
      <div className="md:hidden">
        <Swiper
          className="max-h-100 rounded-md"
          style={
            {
              '--swiper-navigation-color': '#fff', // Цвет стрелок
              '--swiper-navigation-size': '24px', // Размер стрелок
              '--swiper-pagination-color': '#fff', // Цвет активной точки
              '--swiper-pagination-bullet-inactive-color': '#aaa', // Цвет неактивной точки
              '--swiper-pagination-bullet-inactive-opacity': '0.5', // Прозрачность неактивной точки
            } as React.CSSProperties
          }
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {charactersArr.map((char) => (
                <SwiperSlide key={char.id}><img src={char.img} alt="" /></SwiperSlide>
            ))}
          <SwiperSlide key={'slide-1'}>
            <img src={character1} alt="" />
          </SwiperSlide>

        </Swiper>
      </div>
      <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[auto_auto] md:gap-8">
         {charactersArr.map((char) => (
          <CharacterCard key={char.id} img={char.img} text={char.text} />
        ))}
      </div>
    </section>
  );
};

export default Characters;
