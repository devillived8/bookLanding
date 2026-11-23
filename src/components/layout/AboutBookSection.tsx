import Section from '../section/Section';
import test from '../../assets/img/test.jpg';
import test2 from '../../assets/img/test2.jpg';
import phoneIcon from '../../assets/img/phone-icon.png';
import manIcon from '../../assets/img/man-icon.png';
import pizzaIcon from '../../assets/img/pizza-icon.png';
import heartIcon from '../../assets/img/heart-icon.png';
import hatIcon from '../../assets/img/hat-icon.png';

const listItems = [
  {id:'phone', icon: phoneIcon, text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.', alt: 'Иконка телефона' },
  {id:'man', icon: manIcon, text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.', alt: 'Иконка таинственного человека' },
  {id:'pizza', icon: pizzaIcon, text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.', alt: 'Иконка пиццы' },
  {id:'heart', icon: heartIcon, text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.', alt: 'Иконка сердца' },
  {id:'hat', icon: hatIcon, text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.', alt: 'Иконка шляпы' },
];

const AboutBookSection = () => {
  return (
    <Section titleText="О книге" id="AboutBook">
      <div className="flex flex-col items-center gap-4">
        <div className="sm:flow-root-none flow-root max-w-300 bg-bg-secondary rounded-md p-8 border border-border-main sm:flex sm:items-center sm:gap-8">
          <img
            src={test}
            alt="Персонаж Ян"
            loading="lazy"
            className="float-left mr-4 mb-2 h-60 w-auto rounded-xl  object-contain neon-border sm:float-none sm:mr-0 sm:mb-0 sm:h-120 md:h-160"
          />
          <p className="max-w-lg hyphens-auto">
            И нет сомнений, что акционеры крупнейших компаний призывают нас к новым свершениям,
            которые, в свою очередь, должны быть обнародованы. Разнообразный и богатый опыт говорит
            нам, что консультация с широким активом предоставляет широкие возможности для прогресса
            профессионального сообщества. Каждый из нас понимает очевидную вещь: курс на
            социально-ориентированный национальный проект выявляет срочную потребность
            первоочередных требований.
          </p>
        </div>

        <div className="sm:flow-root-none flow-root max-w-300 rounded-md p-8 border bg-bg-secondary border-border-main sm:flex sm:items-center sm:gap-8">
          <img
            src={test2}
            alt="Персонаж Ника"
            loading="lazy"
            className="float-right mb-2 ml-4 h-60 w-auto rounded-xl object-contain neon-border sm:order-2 sm:float-none sm:mb-0 sm:ml-0 sm:h-120 md:h-160"
          />
          <p className="max-w-lg hyphens-auto sm:order-1">
            И нет сомнений, что акционеры крупнейших компаний призывают нас к новым свершениям,
            которые, в свою очередь, должны быть обнародованы. Разнообразный и богатый опыт говорит
            нам, что консультация с широким активом предоставляет широкие возможности для прогресса
            профессионального сообщества. Каждый из нас понимает очевидную вещь: курс на
            социально-ориентированный национальный проект выявляет срочную потребность
            первоочередных требований.
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center pr-4 pl-4">
        <ul className="flex flex-col items-start gap-8 bg-bg-secondary border border-border-main rounded-md p-8">
          {listItems.map((item) => (
            <li key={item.id} className="flex items-center justify-center gap-4">
              <img
                src={item.icon}
                alt={item.alt}
                className="h-20 w-20 shrink-0 object-contain neon-border"
              />
              <span className="max-w-120">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default AboutBookSection;