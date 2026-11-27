import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { type ReactNode } from 'react';

export interface IReelItem {
  id: string;
  src: string;
  title?: string;
  text?: string;
}

interface IReelsSliderProps {
  items: IReelItem[];
  children?: (item: IReelItem) => ReactNode;
  breakpoints?: Record<number, { slidesPerView: number }>;
}

const defaultBreakpoints = {
  0: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1280: { slidesPerView: 3 },
};

const ReelsSlider = ({ items, children, breakpoints = defaultBreakpoints }: IReelsSliderProps) => {
  if (!items.length) return null;

  return (
    <Swiper
      className="bg-bg-secondary border-border-component rounded-md border"
      style={
        {
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-size': '24px',
          '--swiper-pagination-color': '#fff',
          '--swiper-pagination-bullet-inactive-color': '#aaa',
          '--swiper-pagination-bullet-inactive-opacity': '0.5',
        } as React.CSSProperties
      }
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation
      loop={false}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={breakpoints}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="pb-10">
          <div className="bg-bg-surface flex h-full flex-col items-center gap-4 rounded-md p-4">
            <iframe
              className="aspect-[363/714] w-full max-w-[363px] rounded-md border-0"
              src={item.src}
              allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              loading="lazy"
              title={item.title ?? 'Видеоклип'}
            />
            {item.text && <p className="text-center hyphens-auto">{item.text}</p>}
            {children?.(item)}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReelsSlider;
