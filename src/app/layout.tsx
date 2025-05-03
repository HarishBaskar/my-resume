import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RootLayoutClient from './RootLayoutClient';
import '../index.css';
import Navigation from '@/Components/Resume/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://harish-baskar.web.app'),
  title: {
    template: '%s | Harish Baskar',
    default: 'Harish Baskar - Frontend Developer'
  },
  description: 'Personal website and portfolio of Harish Baskar, a Frontend Developer specializing in React.js and TypeScript',
  keywords: ['Frontend Developer', 'React.js', 'TypeScript', 'Next.js', 'Web Development'],
  authors: [{ name: 'Harish Baskar' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harish-baskar.web.app',
    title: 'Harish Baskar - Frontend Developer',
    description: 'Personal website and portfolio of Harish Baskar',
    siteName: 'Harish Baskar'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0070f3" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com;" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </head>
      <body className={inter.className}>
        <Navigation/>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}