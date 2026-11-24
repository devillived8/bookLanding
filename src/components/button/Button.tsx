import React from 'react';

type IButtonProps = React.ComponentProps<'button'>;

const Button = ({ children, className = '', type = 'button', ...props }: IButtonProps) => {
  return (
    <button
      type={type}
      className={`cursor-pointer rounded-md border px-5 py-2 text-base transition-colors hover:bg-white/20 md:px-6 md:py-3 md:text-lg ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
