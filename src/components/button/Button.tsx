import React from 'react';

interface IButtonProps extends React.ComponentProps<'button'> {}

const Button = ({
  children,
  className = '',
  type = 'button',
  ...props
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={`
        rounded-md border px-5 py-2 text-base transition-colors hover:bg-white/20 md:px-6 md:py-3 md:text-lg cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;