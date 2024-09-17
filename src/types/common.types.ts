import { type ReactNode } from 'react';

export type ChildrenProps = { children: ReactNode };

export type StringKey<T> = Extract<T, string>;
