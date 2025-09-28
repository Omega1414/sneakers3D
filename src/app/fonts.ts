// app/fonts.ts
import localFont from 'next/font/local';

export const obrazec = localFont({
  src: [
    {
      path: './Obrazec2.otf',
      weight: '400',
      style: 'normal',
    },
    // Add more weights if available, e.g.,
    // {
    //   path: './Obrazec2-Bold.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
  ],
  variable: '--font-obrazec', // CSS variable for Tailwind
  display: 'swap', // Improves loading performance
});

export const huitside = localFont({
  src: [
    {
      path: './Huitside.ttf',
      weight: '400',
      style: 'normal',
    },
    // Add more weights if available, e.g.,
    // {
    //   path: './Obrazec2-Bold.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
  ],
  variable: '--font-huitside', // CSS variable for Tailwind
  display: 'swap', // Improves loading performance
});

