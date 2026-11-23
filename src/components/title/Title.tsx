import React from 'react';

type HeadingLevel = 1 | 2 | 3;

interface ITitleProps extends React.ComponentProps<'h2'> {
  level?: HeadingLevel;
}

const titleStyles: Record<HeadingLevel, string> = {
  1: 'text-4xl md:text-6xl lg:text-7xl font-display text-accent-red text-shadow-accent-red text-shadow-md',
  2: 'text-2xl font-display font-bold',
  3: 'text-xl font-display font-md',
};

const Title = ({
  level = 2,
  className = '',
  children,
  ...props
}: ITitleProps) => {

  const Tag = `h${level}` as const;

  return (
    <Tag
      className={`${titleStyles[level]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Title