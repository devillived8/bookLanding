import Crow from '../../assets/img/img-crow.webp';
import Button from '../button/Button';
import InfoItem from '../infoItem/InfoItem';
import Section from '../section/Section';
import Slider from '../slider/Slider';

const sliderItems = [
  {
    title: 'Об книге',
    alt: 'Ворона',
    img: Crow,
    text: 'Разнообразный и богатый опыт говорит нам, что сплочённость команды профессионалов однозначно фиксирует необходимость инновационных методов управления процессами.',
    id: 'crow',
    href: '#AboutBook',
  },
  {
    title: 'Об авторе',
    alt: 'Ворона',
    img: Crow,
    text: 'Разнообразный и богатый опыт говорит нам, что сплочённость команды профессионалов однозначно фиксирует необходимость инновационных методов управления процессами.',
    id: 'crow2',
    href: '#AboutAuthor',
  },
];

const InfoSection = () => {
  return (
    <Section titleText="Краткая информация" className="relative z-9 mt-4!">
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="md:hidden">
          <Slider sliderItems={sliderItems}>
            {(item) => (
              <div className="flex justify-end p-4">
                <Button variant="link" href={item.href}>
                  Узнать подробнее
                </Button>
              </div>
            )}
          </Slider>
        </div>

        {sliderItems.map((item) => (
          <InfoItem
            key={item.id}
            title={item.title}
            text={item.text}
            src={item.img}
            alt={item.alt}
            href={item.href}
            buttonText="Узнать подробнее"
          />
        ))}
      </div>
    </Section>
  );
};

export default InfoSection;
