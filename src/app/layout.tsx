import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/shared/styles/globals.scss';
import { Footer, Header } from '@/widgets';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'AbeloHost shop',
  description: 'AbeloHost shop — your online store with a wide selection',
  openGraph: {
    title: 'AbeloHost shop',
    description: 'AbeloHost shop — your online store with a wide selection',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AbeloHost shop',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=5.0" name="viewport" />
      </head>
      <body className={inter.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
