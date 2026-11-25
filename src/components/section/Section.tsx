import type { ReactNode } from 'react';
import Title from '../title/Title';

interface ISectionProps extends React.ComponentProps<'section'> {
  children: ReactNode;
  titleText: string;
}
// flex flex-col gap-4 lg:flex-row w-full p-4 md:p-8 border-border-main border bg-bg-main rounded-md
const Section = ({ children, titleText, className, ...props }: ISectionProps) => {
  return (
    <section
      className={` mt-20 md:mt-40 mr-4 ml-4 p-4 md:p-8 border-border-section border bg-bg-main rounded-md ${className}`}
      {...props}
    >
      <div>
        <Title level={2} className="pb-8 text-center">
          {titleText}
        </Title>
      </div>
      {children}
    </section>
  );
};

export default Section;
