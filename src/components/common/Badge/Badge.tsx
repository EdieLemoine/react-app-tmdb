import { type ForwardedRef, forwardRef } from 'react';
import { Badge as BaseBadge, type BadgeProps } from '@mui/base/Badge';

export const Badge = forwardRef(function Badge(props: BadgeProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <BaseBadge
      {...props}
      className="rounded-full px-3 py-1 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white"
      ref={ref}
    />
  );
});
