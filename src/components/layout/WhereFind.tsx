import Section from '../section/Section';
import Title from '../title/Title';
import WbIcon from '../../assets/img/wb-icon.svg?react';
import OzonIcon from '../../assets/img/ozon-icon.svg?react';
import LitressIcon from '../../assets/img/litres-icon.svg?react';
import LitnetIcon from '../../assets/img/litner-icon.svg?react';
import BookLogo from '../../assets/img/book-logo.png';

const WhereFind = () => {
  return (
    <Section titleText="Где найти книгу" id="WhereFind" className="flex flex-col items-center">
      <div className="bg-bg-surface border-border-component flex w-full flex-col gap-8 rounded-md border p-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="order-2 flex min-w-0 flex-1 flex-col gap-8 self-stretch lg:order-1">
          <p className="hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus ratione doloribus
            excepturi sunt eligendi aspernatur suscipit optio dignissimos quos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Illo ducimus ratione doloribus excepturi sunt
            eligendi aspernatur suscipit optio dignissimos quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illo ducimus ratione doloribus excepturi sunt eligendi
            aspernatur suscipit optio dignissimos quos.
          </p>

          <div className="mt-auto flex flex-col justify-center gap-6 sm:flex-row">
            <div className="p-4">
              <Title level={3} className="mb-4 text-center">
                В электронном варианте
              </Title>
              <div className="flex justify-center gap-10">
                <div className="flex items-center gap-6">
                  <a href="">
                    <LitressIcon className="h-10 w-14" />
                  </a>
                  <a href="">
                    <LitnetIcon className="h-10 w-14" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4">
              <Title level={3} className="mb-4 text-center">
                В печатном варианте
              </Title>
              <div className="flex justify-center gap-10">
                <div className="flex items-center gap-6">
                  <a href="">
                    <WbIcon className="h-10 w-14" />
                  </a>
                  <a href="">
                    <OzonIcon className="h-10 w-14" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-border-component order-1 flex flex-col justify-center rounded-md border p-4 lg:order-2 lg:w-[40%] lg:shrink-0">
          <div className="flex w-full items-center justify-center">
            <img
              src={BookLogo}
              alt="Картинка книги"
              className="h-auto w-full max-w-150 object-contain"
            />
          </div>
          <p className="hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus ratione doloribus
            excepturi sunt eligendi aspernatur suscipit optio dignissimos quos.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default WhereFind;
