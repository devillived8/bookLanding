import type { ReactNode } from 'react';
import Title from '../title/Title';

interface ISectionProps extends React.ComponentProps<'section'> {
  children: ReactNode;
  titleText: string;
}

const Section = ({ children, titleText, className, ...props }: ISectionProps) => {
  return (
    <section
      className={`border-border-main bg-bg-main mt-4 mr-4 ml-4 rounded-md border p-4 ${className}`}
      {...props}
    >
      <div>
        <Title level={2} className="pb-4 text-center">
          {titleText}
        </Title>
      </div>
      {children}
    </section>
  );
};

export default Section;
