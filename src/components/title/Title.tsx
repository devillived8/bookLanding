import React from 'react';

type HeadingLevel = 1 | 2 | 3;

interface TitleProps extends React.ComponentProps<'h1'> {
  level?: HeadingLevel;
}

const titleStyles: Record<HeadingLevel, string> = {
  1: 'text-4xl md:text-6xl lg:text-7xl font-display text-accent-red text-shadow-accent-red text-shadow-md',
  2: 'text-2xl font-display font-bold',
  3: 'text-xl font-display font-bold',
};

const Title = ({
  level = 2,
  className = '',
  children,
  ...props
}: TitleProps) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3';

  return (
    <Tag className={`${titleStyles[level]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Title;