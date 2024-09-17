import './globals.css';
import React, { type ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { type Metadata } from 'next';
import { AppHeader } from '@/components/layout/AppHeader';

export const metadata: Metadata = {
  title: 'TMDB Movie Search',
  description: 'Search for movies using the TMDB API',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased dark:bg-gray-950 dark:text-gray-100 text-gray-950 bg-gray-50 transition-colors duration-200">
        <ThemeProvider attribute="class">
          <AppHeader />

          <div className="grid auto-rows-auto min-h-screen px-3 gap-16 sm:px-8 py-10 sm:py-12 mx-auto max-w-screen-2xl">
            <main className="flex flex-col">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
