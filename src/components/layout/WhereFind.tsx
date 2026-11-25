import Section from '../section/Section';
import Title from '../title/Title';
import WbIcon from '../../assets/img/wb-icon.svg?react';
import OzonIcon from '../../assets/img/ozon-icon.svg?react';
import LitressIcon from '../../assets/img/litres-icon.svg?react';
import LitnetIcon from '../../assets/img/litner-icon.svg?react';

const WhereFind = () => {
  return (
    <Section titleText="Где найти книгу" id="WhereFind" className="flex flex-col items-center">
      <div className="bg-bg-main border-border-main w-full rounded-md border p-4">
        <div className="bg-bg-surface border-border-main border rounded-md p-8">
          <div className="flex justify-center pb-4">
            <p className="max-w-200 hyphens-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus ratione
              doloribus excepturi sunt eligendi aspernatur suscipit optio dignissimos quos.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-8 md:flex-row">
            <div className="p-4">
              <Title level={3} className="mb-4 text-center">
                В электронном варианте
              </Title>
              <div className="flex justify-center gap-10">
                <div className="flex items-center gap-6">
                  <a href="">
                    <LitressIcon className="h-10 w-14"></LitressIcon>
                  </a>
                  <a href="">
                    <LitnetIcon className="h-10 w-14"></LitnetIcon>
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
                    <WbIcon className="h-10 w-14"></WbIcon>
                  </a>
                  <a href="">
                    <OzonIcon className="h-10 w-14"></OzonIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhereFind;
