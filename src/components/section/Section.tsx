import Title from '../title/Title';

interface ISectionProps extends React.ComponentProps<'section'> {
  titleText: string;
};

const Section = ({ children, titleText, className, ...props }: ISectionProps) => {
  return (
    <section
      className={`mt-20 md:mt-30 mr-4 ml-4 p-4 md:p-8 border-border-section border bg-bg-main rounded-md ${className}`}
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
