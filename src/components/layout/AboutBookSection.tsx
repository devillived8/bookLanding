import Section from '../section/Section';
import test from '../../assets/img/test.webp';
import test2 from '../../assets/img/test2.webp';
import phoneIcon from '../../assets/img/phone-icon.png';
import manIcon from '../../assets/img/man-icon.png';
import pizzaIcon from '../../assets/img/pizza-icon.png';
import heartIcon from '../../assets/img/heart-icon.png';
import hatIcon from '../../assets/img/hat-icon.png';
import { Image } from 'react-image-and-background-image-fade';

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

const AboutBookSection = () => {
  return (
    <Section titleText="О книге" id="AboutBook" className='flex flex-col items-center'>
      <div className="flex flex-col self-start  gap-8 w-full bg-bg-main border border-border-main rounded-md md:p-8">
        <div className=" flex max-w-400 flex-col items-center gap-6 rounded-md p-4 md:p-8 sm:flex-row sm:gap-16 bg-bg-surface border-border-main border">
          <div className="neon-border w-64 shrink-0 self-center  overflow-hidden rounded-xl sm:w-60 md:w-80">
            <Image
              src={test}
              alt="Персонаж Ян"
              width={400}
              height={600}
              fit="cover"
              position="top"
              placeholder="skeleton"
              fadeType="zoom-blur"
              className="w-full"
            />
          </div>
          <p className="max-w-200 hyphens-auto">
            И нет сомнений, что акционеры крупнейших компаний призывают нас к новым свершениям,
            которые, в свою очередь, должны быть обнародованы. Разнообразный и богатый опыт говорит
            нам, что консультация с широким активом предоставляет широкие возможности для прогресса
            профессионального сообщества. Каждый из нас понимает очевидную вещь: курс на
            социально-ориентированный национальный проект выявляет срочную потребность
            первоочередных требований.
          </p>
        </div>

        <div className=" flex flex-col items-center self-end gap-6 rounded-md p-4 md:p-8 sm:flex-row sm:gap-16 bg-bg-surface border-border-main border">
          <div className="neon-border order-1 w-64 shrink-0 self-center overflow-hidden rounded-xl sm:order-2 sm:w-60 md:w-80 ">
            <Image
              src={test2}
              alt="Персонаж Ника"
              width={400}
              height={600}
              fit="cover"
              position="top"
              placeholder="skeleton"
              fadeType="zoom-blur"
              className="w-full"
            />
          </div>
          <p className="order-2 max-w-200 hyphens-auto sm:order-1">
            И нет сомнений, что акционеры крупнейших компаний призывают нас к новым свершениям,
            которые, в свою очередь, должны быть обнародованы. Разнообразный и богатый опыт говорит
            нам, что консультация с широким активом предоставляет широкие возможности для прогресса
            профессионального сообщества. Каждый из нас понимает очевидную вещь: курс на
            социально-ориентированный национальный проект выявляет срочную потребность
            первоочередных требований.
          </p>
        </div>

        <div className="flex flex-col w-full justify-center items-center p-4 md:p-8 mt-8 bg-bg-surface border-border-main border rounded-md">
          <p className="max-w-200 hyphens-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum ullam fugiat rem eius provident, nostrum possimus? Obcaecati, quas animi.</p>
          <ul className=" flex flex-col items-center gap-8 rounded-md p-8">
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
