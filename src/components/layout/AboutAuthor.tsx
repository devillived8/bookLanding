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
      <div className=" flex w-full flex-wrap items-center justify-center rounded-md border border-border-component bg-bg-surface">
        <div className="order-2 flex min-w-0 flex-col bg-bg-surface p-4 md:p-8 ">
          <div className="pb-10">
            <p className="max-w-140 hyphens-auto">
              Значимость этих проблем настолько очевидна, что семантический разбор внешних
              противодействий однозначно фиксирует необходимость распределения внутренних резервов и
              ресурсов. Картельные сговоры не допускают ситуации, при которой представители
              современных социальных резервов будут объективно рассмотрены соответствующими
              инстанциями. Повседневная практика показывает, что социально-экономическое развитие
              обеспечивает широкому кругу (специалистов) участие в формировании модели развития.
            </p>
          </div>
          <div className="self-end">
            <ul className="flex justify-center gap-2">
              <li>
                <a href="" target='_blank' rel='noopener noreferrer'>
                  <VkIcon className="h-10 w-14 transition-colors delay-100 duration-300 hover:text-accent-red" title="Вк автора" aria-label='Логотип вк' />
                </a>
              </li>
              <li>
                <a href="" target='_blank' rel='noopener noreferrer'>
                  <TgIcon className="h-10 w-14 transition-colors delay-100 duration-300 hover:text-accent-red" title="Тг автора" aria-label='Логотип тг' />
                </a>
              </li>
              <li>
                <a href="" target='_blank' rel='noopener noreferrer'>
                  <GroupIcon className="h-10 w-14 transition-colors delay-100 duration-300 hover:text-accent-red" title="Канал автора в телеграмме" aria-label='Логотип группы тг' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="order-1 w-60 min-w-0 shrink sm:min-w-80 p-4 md:p-8">
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
