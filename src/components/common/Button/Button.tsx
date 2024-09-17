'use client';

import { type ForwardedRef, forwardRef } from 'react';
import { Button as BaseButton, type ButtonOwnerState, type ButtonProps } from '@mui/base/Button';

export const Button = forwardRef(function Button(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <BaseButton
      {...props}
      slotProps={{
        root: (state: ButtonOwnerState) => ({
          className: [
            state.focusVisible ? 'outline-none ring-2 ring-emerald-500' : 'focus:outline-none',
            state.active
              ? 'bg-emerald-600 text-white dark:bg-emerald-500'
              : 'bg-white text-emerald-600 border-emerald-600 hover:text-white hover:bg-emerald-100 dark:bg-gray-800 dark:text-emerald-500 dark:border-emerald-500 dark:hover:bg-emerald-700 dark:hover:text-white',
            'py-1 px-4',
            'transition-colors duration-200',
            'border',
            'rounded-lg',
          ],
        }),
      }}
      ref={ref}
    />
  );
});
