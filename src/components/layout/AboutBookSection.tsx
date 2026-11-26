import Section from '../section/Section';
import test from '../../assets/img/test.webp';
import test2 from '../../assets/img/test2.webp';
import phoneIcon from '../../assets/img/phone-icon.png';
import manIcon from '../../assets/img/man-icon.png';
import pizzaIcon from '../../assets/img/pizza-icon.png';
import heartIcon from '../../assets/img/heart-icon.png';
import hatIcon from '../../assets/img/hat-icon.png';
import AboutBookItems from '../aboutBookItem/AboutBookItems';
import Title from '../title/Title';

const listItems = [
  {
    id: 'phone',
    icon: phoneIcon,
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    alt: 'Иконка телефона',
  },
  {
    id: 'man',
    icon: manIcon,
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    alt: 'Иконка таинственного человека',
  },
  {
    id: 'pizza',
    icon: pizzaIcon,
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    alt: 'Иконка пиццы',
  },
  {
    id: 'heart',
    icon: heartIcon,
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    alt: 'Иконка сердца',
  },
  {
    id: 'hat',
    icon: hatIcon,
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    alt: 'Иконка шляпы',
  },
];

const aboutBookItems = [
  {
    id: 'first',
    src: test,
    alt: 'Персонаж Ян',
    text: 'И нет сомнений, что акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть обнародованы. Разнообразный и богатый опыт говорит нам, что консультация с широким активом предоставляет широкие возможности для прогресса профессионального сообщества. Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект выявляет срочную потребность первоочередных требований.',
    direction: 'toRight',
  },
  {
    id: 'twice',
    src: test2,
    alt: 'Персонаж Ника',
    text: 'И нет сомнений, что акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть обнародованы. Разнообразный и богатый опыт говорит нам, что консультация с широким активом предоставляет широкие возможности для прогресса профессионального сообщества. Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект выявляет срочную потребность первоочередных требований.',
    direction: 'toLeft',
  },
] as const;

const AboutBookSection = () => {
  return (
    <Section titleText="О книге" id="AboutBook" className="flex flex-col items-center">
      <div className="flex w-full flex-col justify-center gap-8 self-start">
        {aboutBookItems.map((item) => (
          <AboutBookItems
            key={item.id}
            src={item.src}
            alt={item.alt}
            text={item.text}
            direction={item.direction}
          />
        ))}

        <div className="bg-bg-surface border-border-component flex w-full flex-col items-center justify-center rounded-md border p-4 md:p-8">
          <Title level={3} className='text-center mb-4 md:mb-8'>Заголовок</Title>
          <p className="max-w-200 hyphens-auto mb-4 md:mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum ullam fugiat
            rem eius provident, nostrum possimus? Obcaecati, quas animi.
          </p>
          <ul className="flex flex-col items-center gap-8 rounded-md p-4 md:p-8">
            {listItems.map((item) => (
              <li key={item.id} className="flex items-center justify-center gap-4">
                <img
                  src={item.icon}
                  alt={item.alt}
                  loading="lazy"
                  className="neon-border h-20 w-20 shrink-0 object-contain"
                />
                <span className="max-w-120">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default AboutBookSection;
