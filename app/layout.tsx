import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nuzze - Software Developer',
  description: 'Software developer born and raised in Buenos Aires, Argentina.',
  keywords: 'Software, Developer, Programmer, Web, Fullstack, Frontend, Backend, React, Next.js, TypeScript',
  authors: [{ name: 'Matías Nuccetelli' }],
  openGraph: {
    title: 'Nuzze - Software Developer',
    siteName: 'Nuzze',
    description: 'Software developer born and raised in Buenos Aires, Argentina.',
    url: 'https://www.nuzze.co',
    images: [
      {
        url: 'https://www.nuzze.co/images/seo-image.png',
        width: 1200,
        height: 630,
        alt: 'Nuzze',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nuzzze',
  },
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
