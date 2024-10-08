'use client';

import { createElement, type HTMLAttributes, type ReactNode } from 'react';

const BASE_CLASS = 'font-bold mt-6 mb-2';

type Props = { children: ReactNode } & HTMLAttributes<HTMLHeadingElement>;

const createHeading = (tag: string, className: string, props: Props) => {
  const { children, ...rest } = props;

  return createElement(
    tag,
    { ...rest, className: [BASE_CLASS, className, rest.className].filter(Boolean).join(' ') },
    children,
  );
};

export const Heading1 = (props: Props) => createHeading('h1', 'text-3xl', props);

export const Heading2 = (props: Props) => createHeading('h2', 'text-2xl', props);
