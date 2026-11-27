import Title from '../title/Title';

interface ISectionProps extends React.ComponentProps<'section'> {
  titleText: string;
}

const Section = ({ children, titleText, className, ...props }: ISectionProps) => {
  return (
    <section
      className={`border-border-section bg-bg-main mt-20 mr-4 ml-4 rounded-md border p-4 md:mt-30 md:p-8 ${className}`}
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
