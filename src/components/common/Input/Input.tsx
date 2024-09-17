import { type ForwardedRef, forwardRef } from 'react';
import { Input as BaseInput, type InputOwnerState, type InputProps } from '@mui/base/Input';

export const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <BaseInput
      {...props}
      ref={ref}
      slotProps={{
        input: (state: InputOwnerState) => ({
          className: [
            state.disabled ? 'opacity-50 cursor-not-allowed' : '',
            state.error ? 'ring-2 ring-red-500' : '',
            state.focused ? 'ring-2 ring-emerald-500' : 'focus:ring-2 focus:ring-emerald-500',
            'w-full',
            'bg-white text-gray-900 border-gray-300',
            'dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700',
            'py-1 px-4',
            'group',
            'inline-flex',
            'items-center',
            'space-x-2',
            'transition-colors duration-200',
            'border',
            'rounded-lg',
          ],
        }),
      }}
    />
  );
});
