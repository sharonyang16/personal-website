import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

const linkVariants = cva(' ', {
  variants: {
    variant: {
      primary: 'transition-colors text-black dark:text-white ',
      buttonPrimary:
        'p-2 transition-colors rounded-lg bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100',
      buttonSecondary:
        'p-2 transition-colors rounded-lg border-1 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800',
    },
  },
  defaultVariants: {
    variant: 'buttonPrimary',
  },
});

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  as?: React.ElementType;
}

const Link = React.forwardRef<HTMLElement, LinkProps>(
  ({ variant, className, as: Comp = 'a', ...props }, ref) => {
    const componentProps = {
      className: cn(linkVariants({ variant, className })),
      ...props,
      ref,
    };

    return React.createElement(Comp, componentProps);
  }
);

Link.displayName = 'Link';

export default Link;
