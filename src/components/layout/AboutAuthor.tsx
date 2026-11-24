import Section from '../section/Section';
import author from '../../assets/img/author.jpg';
import VkIcon from '../../assets/img/vk-icon.svg?react';
import TgIcon from '../../assets/img/tg-icon.svg?react';
import GroupIcon from '../../assets/img/group-icon.svg?react';
import { Image } from 'react-image-and-background-image-fade';

const AboutAuthor = () => {
  return (
    <Section
      titleText="Об авторе"
      id="AboutAuthor"
      className="flex flex-col items-center justify-center"
    >
      <div className="bg-bg-secondary border-border-main flex max-w-300 flex-wrap items-center justify-center gap-8 rounded-md border p-8">
        <div className="order-2 flex min-w-0 flex-col">
          <div className="pb-10">
            <p className="max-w-120 hyphens-auto">
              Значимость этих проблем настолько очевидна, что семантический разбор внешних
              противодействий однозначно фиксирует необходимость распределения внутренних резервов и
              ресурсов. Картельные сговоры не допускают ситуации, при которой представители
              современных социальных резервов будут объективно рассмотрены соответствующими
              инстанциями. Повседневная практика показывает, что социально-экономическое развитие
              обеспечивает широкому кругу (специалистов) участие в формировании модели развития.
            </p>
          </div>
          <div className="self-start">
            <ul className="flex justify-center gap-2">
              <li>
                <a href="">
                  <VkIcon className="h-10 w-14" title="Вк автора" />
                </a>
              </li>
              <li>
                <a href="">
                  <TgIcon className="h-10 w-14" title="Тг автора" />
                </a>
              </li>
              <li>
                <a href="">
                  <GroupIcon className="h-10 w-14" title="Канал автора в телеграмме" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="order-1 w-60 min-w-0 shrink sm:min-w-40">
          <Image
            src={author}
            height='420'
            width='280'
            alt="Фото автора"
            fit="cover"
            placeholder="skeleton"
            fadeType="zoom-blur"
            className="rounded-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutAuthor;
