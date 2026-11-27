import React from 'react';

type ButtonProps =
  | (React.ComponentProps<'button'> & {
      variant?: 'button';
    })
  | (React.ComponentProps<'a'> & {
      variant: 'link';
    });

const Button = (props: ButtonProps) => {
  const className = `cursor-pointer rounded-md border px-5 py-2 text-base transition-colors hover:bg-white/20 md:px-6 md:py-3 md:text-lg ${props.className ?? ''}`;

  if (props.variant === 'link') {
    return (
      <a {...props} className={className}>
        {props.children}
      </a>
    );
  }

  return (
    <button {...props} type={props.type ?? 'button'} className={className}>
      {props.children}
    </button>
  );
};

export default Button;
