import Crow from '../../assets/img/img-crow.png';
import Button from '../button/Button';
import Section from '../section/Section';
import Slider from '../slider/Slider';
import Title from '../title/Title';
import { Image } from 'react-image-and-background-image-fade';

const sliderItems = [
  {
    title: 'Об книге',
    alt: 'Ворона',
    img: Crow,
    text: 'Разнообразный и богатый опыт говорит нам, что сплочённость команды профессионалов однозначно фиксирует необходимость инновационных методов управления процессами.',
    id: 'crow',
  },
  {
    title: 'Об авторе',
    alt: 'Ворона',
    img: Crow,
    text: 'Разнообразный и богатый опыт говорит нам, что сплочённость команды профессионалов однозначно фиксирует необходимость инновационных методов управления процессами.',
    id: 'crow2',
  },
];

const InfoSection = () => {
  return (
    <Section titleText="Краткая информация" className="relative z-9 mt-4 flex flex-col">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="md:hidden">
          <Slider sliderItems={sliderItems} />
        </div>
        <div className="border-border-main bg-bg-secondary hidden flex-1 rounded-md border md:block">
          <Title level={3} className="py-4 text-center">
            Об книге
          </Title>
          <div className="flex flex-col items-center gap-4 p-4 pt-0 sm:flex-row sm:items-start">
            <div className="border-border-main flex-1 rounded-md border">
              <Image
                src={Crow}
                alt="Ворона"
                fit="cover"
                placeholder="skeleton"
                fadeType="zoom-blur"
                className="w-full max-w-full shrink-0 rounded-md"
              />
              {/* <img
                src={Crow}
                alt="Ворона"
                className="w-full max-w-full shrink-0 rounded-md object-cover"
              /> */}
            </div>
            <p className="min-w-0 flex-1 hyphens-auto sm:text-left">
              Разнообразный и богатый опыт говорит нам, что сплочённость команды профессионалов
              однозначно фиксирует необходимость инновационных методов управления процессами.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <Button>
              <a href="#AboutBook">Узнать подробнее</a>
            </Button>
          </div>
        </div>

        <div className="border-border-main bg-bg-secondary hidden flex-1 rounded-md border md:block">
          <Title level={3} className="py-4 text-center">
            Об авторе
          </Title>
          <div className="flex flex-col items-center gap-4 p-4 pt-0 sm:flex-row sm:items-start">
            <div className="border-border-main flex-1 rounded-md border">
               <Image
                src={Crow}
                alt="Ворона"
                fit="cover"
                placeholder="skeleton"
                fadeType="zoom-blur"
                className="w-full max-w-full shrink-0 rounded-md"
              />
            </div>
            <p className="min-w-0 flex-1 hyphens-auto sm:text-left">
              Равным образом, новая модель организационной деятельности играет определяющее значение
              для новых принципов формирования материально-технической и кадровой базы.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <Button>
              <a href="#AboutAuthor">Узнать подробнее</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InfoSection;
