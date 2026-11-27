import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Title from '../title/Title';
import { type ReactNode } from 'react';
import ImageApp from '../imageApp/ImageApp';

interface ISliderItem {
  id: string;
  title: string;
  img: string;
  text: string;
  alt?: string;
  href?: string;
}

interface ISliderProps {
  sliderItems: ISliderItem[];
  children?: (item: ISliderItem) => ReactNode;
}

const Slider = ({ sliderItems, children }: ISliderProps) => {
  return (
    <Swiper
      className="bg-bg-secondary border-border-component max-h-200 rounded-md border"
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
    >
      {sliderItems.map((item) => (
        <SwiperSlide key={item.id} className="pb-10">
          <div className="bg-bg-surface">
            <ImageApp
              src={item.img}
              alt={item.alt ?? item.title}
              position="top"
              width="100%"
              height="auto"
              className="max-h-120 w-full"
            ></ImageApp>
            <Title level={3} className="p-4 pb-0 text-center">
              {item.title}
            </Title>
            <p className="p-4 hyphens-auto">{item.text}</p>
            {children?.(item)}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
