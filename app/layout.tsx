import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'WedNest | Your Dream Wedding, Within Budget',
  description: 'Discover trusted local vendors in Nizamabad, Warangal, and beyond. Verified professionals, transparent pricing. #1 Marketplace for Telangana Tier 2 & 3 Cities.',
  keywords: ['wedding', 'vendors', 'Telangana', 'Nizamabad', 'Warangal', 'wedding planning', 'budget planning'],
  authors: [{ name: 'WedNest' }],
  openGraph: {
    title: 'WedNest | Your Dream Wedding, Within Budget',
    description: 'Discover trusted local vendors in Telangana. Verified professionals, transparent pricing.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WedNest | Your Dream Wedding, Within Budget',
    description: 'Discover trusted local vendors in Telangana. Verified professionals, transparent pricing.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

