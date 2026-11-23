import Crow from '../../assets/img/img-crow.png';
import Button from '../button/Button';
import Section from '../section/Section';
import Title from '../title/Title';

const InfoSection = () => {
  return (
    <Section titleText="Краткая информация" className="relative z-9 mt-4 flex flex-col">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="border-border-main bg-bg-secondary flex-1 rounded-md border">
          <Title level={3} className="py-4 text-center">
            Об книге
          </Title>
          <div className="flex flex-col items-center gap-4 p-4 pt-0 sm:flex-row sm:items-start">
            <div className="border-border-main flex-1 rounded-md border">
              <img
                src={Crow}
                alt="Ворона"
                className="w-full max-w-full shrink-0 rounded-md object-cover"
              />
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

        <div className="border-border-main bg-bg-secondary flex-1 rounded-md border">
          <Title level={3} className="py-4 text-center">
            Об авторе
          </Title>
          <div className="flex flex-col items-center gap-4 p-4 pt-0 sm:flex-row sm:items-start">
            <div className="border-border-main flex-1 rounded-md border">
              <img
                src={Crow}
                alt="Ворона"
                className="w-full max-w-full shrink-0 rounded-md object-cover"
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

    // <section className="relative z-9 mt-4 flex flex-col gap-4 px-4  bg-bg-main/60 mr-4 ml-4 rouned-md border border-border-main">
    //   <Title level={2} className="p-4 text-center">
    //     Краткая информация
    //   </Title>
    // <div className='flex flex-col lg:flex-row gap-4'>
    // <div className="border-border-main flex-1 rounded-md border bg-bg-secondary">
    //   <Title level={3} className="py-4 text-center">
    //     Об книге
    //   </Title>
    //   <div className="flex flex-col items-center gap-4 p-4 sm:flex-row sm:items-start">
    //     <div className="border-border-main rounded-md border">
    //       <img
    //         src={Crow}
    //         alt="Ворона"
    //         className="w-full max-w-full shrink-0 rounded-md object-cover sm:w-48 md:w-60"
    //       />
    //     </div>
    //     <p className="min-w-0 flex-1 text-center sm:text-left">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit expedita vero
    //       est exercitationem architecto a explicabo vitae delectus accusantium? lorem50
    //     </p>
    //   </div>
    //   <div className="flex justify-end p-4">
    //     <Button>
    //       <a href="">Узнать подробнее</a>
    //     </Button>
    //   </div>
    // </div>

    // <div className="border-border-main flex-1 rounded-md border bg-black/60">
    //   <Title level={3} className="py-4 text-center">
    //     Об авторе
    //   </Title>
    //   <div className="flex flex-col items-center gap-4 p-4 sm:flex-row sm:items-start">
    //     <div className="border-border-main rounded-md border">
    //       <img
    //         src={Crow}
    //         alt="Ворона"
    //         className="w-full max-w-full shrink-0 rounded-md object-cover sm:w-48 md:w-60"
    //       />
    //     </div>
    //     <p className="min-w-0 flex-1 text-center sm:text-left">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit expedita vero
    //       est exercitationem architecto a explicabo vitae delectus accusantium?
    //     </p>
    //   </div>
    //   <div className="flex justify-end p-4">
    //     <Button>
    //       <a href="">Узнать подробнее</a>
    //     </Button>
    //   </div>
    // </div>
    // </div>
    // </section>
  );
};

export default InfoSection;
