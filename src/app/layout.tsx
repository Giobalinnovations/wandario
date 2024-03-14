import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '900', '700'],
});

export const metadata: Metadata = {
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
  title: 'Travel Reviews Guide | Best Travelling Places in the World',
  description:
    'Explore best travelling Places in the World to Visit – 1. SOUTH AFRICA, NIGERIA 2. UNITED KINGDOM, GERMANY 3. MEXICO, Canada 4.THAILAND & More',
  metadataBase: new URL('https://visacollect.com'),

  alternates: {
    canonical: '/',
  },

  openGraph: {
    url: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
