import Section from '../section/Section';
import Title from '../title/Title';
import WbIcon from '../../assets/img/wb-icon.svg?react';
import OzonIcon from '../../assets/img/ozon-icon.svg?react';
import LitressIcon from '../../assets/img/litres-icon.svg?react';
import LitnetIcon from '../../assets/img/litner-icon.svg?react';

const WhereFind = () => {
  return (
    <Section titleText="Где найти книгу" id="WhereFind">
      <div className='pb-4 flex justify-center'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus ratione doloribus excepturi sunt eligendi aspernatur suscipit optio dignissimos quos.</p>
      </div>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        <div className="bg-bg-secondary border border-border-main rounded-md p-4">
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
        <div className="bg-bg-secondary border border-border-main rounded-md p-4">
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
    </Section>
  );
};

export default WhereFind;
