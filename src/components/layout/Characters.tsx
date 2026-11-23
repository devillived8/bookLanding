import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import character1 from '../../assets/img/character-1.png';
import character2 from '../../assets/img/character-2.png';
import character3 from '../../assets/img/character-3.png';
import CharacterCard from '../characterCard/CharacterCard';
import Title from '../title/Title';
import Section from '../section/Section';

const Characters = () => {
  const charactersArr = [
    {
      id: 'character-1',
      name: 'Ян Северов',
      img: character1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
    {
      id: 'character-2',
      name: 'Ян Северов',
      img: character2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
    {
      id: 'character-3',
      name: 'Ян Северов',
      img: character3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
    {
      id: 'character-4',
      name: 'Ян Северов',
      img: character1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
    {
      id: 'character-5',
      name: 'Ян Северов',
      img: character2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
    {
      id: 'character-6',
      name: 'Ян Северов',
      img: character3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque.',
    },
  ];

  return (
    <Section titleText="Персонажи" id="Characters">
      <div className="md:hidden">
        <Swiper
          className="bg-bg-secondary border-border-main max-h-200 rounded-md border"
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
            <SwiperSlide key={char.id} className="pb-10">
              <div>
                <img
                  src={char.img}
                  loading="lazy"
                  alt=""
                  className="max-h-120 w-full object-cover object-top"
                />
                <Title level={3} className="p-4 text-center">
                  {char.name}
                </Title>
                <p className="p-4">Lorem ipsum dolor</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[auto_auto] md:gap-8">
        {charactersArr.map((char) => (
          <CharacterCard key={char.id} img={char.img} text={char.text} name={char.name} />
        ))}
      </div>
    </Section>

    // <section className="mt-4 p-4 pt-0">
    //   <h2 className="font-display mb-8 text-center text-lg">Персонажи</h2>
    //   <div className="md:hidden">
    //     <Swiper
    //       className="max-h-200 rounded-md bg-black/60 border border-border-main"
    //       style={
    //         {
    //           '--swiper-navigation-color': '#fff', // Цвет стрелок
    //           '--swiper-navigation-size': '24px', // Размер стрелок
    //           '--swiper-pagination-color': '#fff', // Цвет активной точки
    //           '--swiper-pagination-bullet-inactive-color': '#aaa', // Цвет неактивной точки
    //           '--swiper-pagination-bullet-inactive-opacity': '0.5', // Прозрачность неактивной точки
    //         } as React.CSSProperties
    //       }
    //       modules={[Pagination, Navigation]}
    //       pagination={{ clickable: true }}
    //       navigation
    //       loop={true}
    //       spaceBetween={50}
    //       slidesPerView={1}
    //       onSlideChange={() => console.log('slide change')}
    //       onSwiper={(swiper) => console.log(swiper)}
    //     >
    //       {charactersArr.map((char) => (
    //         <SwiperSlide key={char.id} className='pb-10'>
    //           <div>
    //             <Title level={3} className='p-4 text-center'>Ян Северов</Title>
    //             <img src={char.img}    loading="lazy" alt="" className='max-h-120 w-full object-cover object-top'/>
    //               <p className='p-4'>Lorem ipsum dolor</p>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    //   <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[auto_auto] md:gap-8">
    //     {charactersArr.map((char) => (
    //       <CharacterCard key={char.id} img={char.img} text={char.text} />
    //     ))}
    //   </div>
    // </section>
  );
};

export default Characters;
