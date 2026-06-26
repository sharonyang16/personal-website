import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

const chipVariants = cva(
  'inline-flex items-center rounded-full text-sm w-fit py-0.5 px-2',
  {
    variants: {
      variant: {
        primary: 'bg-gray-200 dark:bg-gray-800',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof chipVariants> {}

const Chip = React.forwardRef<HTMLElement, ChipProps>(
  ({ variant, className, ...props }, ref) => {
    const componentProps = {
      className: cn(chipVariants({ variant, className })),
      ...props,
      ref,
    };

    return React.createElement('div', componentProps);
  }
);

Chip.displayName = 'Chip';

export default Chip;
