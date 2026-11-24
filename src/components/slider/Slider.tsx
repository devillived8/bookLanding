import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Title from '../title/Title';
import { Image } from 'react-image-and-background-image-fade';

interface ISliderItem {
  id: string;
  title: string;
  img: string;
  text: string;
  alt?: string;
}

interface ISliderProps {
  sliderItems: ISliderItem[];
}

const Slider = ({ sliderItems }: ISliderProps) => {
  return (
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
      {sliderItems.map((item) => (
        <SwiperSlide key={item.id} className="pb-10">
          <div>
            <Image
            src={item.img}
            alt={item.alt ?? item.title}
            width= '100%'
            height= 'auto'
            placeholder="skeleton"
            fadeType="zoom-blur"
            fit="cover"
            position="top"
            className="max-h-120 w-full"
            />
            <Title level={3} className="p-4 pb-0 text-center">
              {item.title}
            </Title>
            <p className="p-4 hyphens-auto">{item.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
