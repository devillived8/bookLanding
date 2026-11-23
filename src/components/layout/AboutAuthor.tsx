import Section from '../section/Section';
import author from '../../assets/img/author.jpg';

const AboutAuthor = () => {
  return (
    <Section
      titleText="Об авторе"
      id="AboutAuthor"
      className="flex flex-col items-center justify-center"
    >
      <div className="bg-bg-secondary border-border-main flex max-w-300 flex-wrap items-center justify-center gap-8 rounded-md border p-8">
        <div className="flex flex-col min-w-0 order-2">
          <div className='pb-10'>
            <p className="max-w-120 hyphens-auto">
              Значимость этих проблем настолько очевидна, что семантический разбор внешних
              противодействий однозначно фиксирует необходимость распределения внутренних резервов и
              ресурсов. Картельные сговоры не допускают ситуации, при которой представители
              современных социальных резервов будут объективно рассмотрены соответствующими
              инстанциями. Повседневная практика показывает, что социально-экономическое развитие
              обеспечивает широкому кругу (специалистов) участие в формировании модели развития.
            </p>
          </div>
          <div>
            <ul className='flex gap-8 justify-center'>
              <li>gfds</li>
              <li>gfds</li>
              <li>gdfg</li>
              <li>gfds</li>
            </ul>
          </div>
        </div>

        <img
          src={author}
          alt="Фото автора"
          className="order-1 w-70 min-w-0 shrink rounded-full object-cover sm:min-w-40"
        />
      </div>
    </Section>
  );
};

export default AboutAuthor;
