import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

const buttonVariants = cva('p-2 rounded-lg cursor-pointer', {
  variants: {
    variant: {
      primary:
        'bg-black transition-colors text-white dark:bg-white dark:text-black hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 dark:hover:bg-gray-100 dark:active:bg-gray-100 dark:focus:bg-gray-100',
      secondary:
        'border-1 transition-colors border-black dark:border-white hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-800 dark:focus:bg-gray-800',
      ghost:
        'transition-colors hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:active:bg-gray-900 dark:focus:bg-gray-900',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ variant, className, ...props }, ref) => {
    const componentProps = {
      className: cn(buttonVariants({ variant, className })),
      ...props,
      ref,
    };

    return React.createElement('button', componentProps);
  }
);

Button.displayName = 'Button';

export default Button;
