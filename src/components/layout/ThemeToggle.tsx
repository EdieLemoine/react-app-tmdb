'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '../common/Button/Button';

export function ThemeToggle() {
  const { theme, themes, setTheme } = useTheme();

  const cycleTheme = () => {
    const index = themes.findIndex((t) => t === theme);
    const nextIndex = (index + 1) % themes.length;

    setTheme(themes[nextIndex]);
  };

  const [emoji, setEmoji] = useState('⚙️');

  useEffect(() => {
    switch (theme) {
      case 'dark':
        setEmoji('🌙');
        break;

      case 'light':
        setEmoji('☀️');
        break;

      default:
        setEmoji('🌗');
        break;
    }
  }, [theme]);

  return <Button onClick={cycleTheme}>{emoji}</Button>;
}
