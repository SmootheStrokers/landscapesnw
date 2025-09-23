import type { Metadata } from 'next';
import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import SEOHead from '@/components/SEOHead';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import SEOOptimizer from '@/components/SEOOptimizer';
import AccessibilityOptimizer from '@/components/AccessibilityOptimizer';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NW Landscape Management | Award-Winning Landscaping Services | Federal Way, Tacoma, South Sound',
  description: 'Award-winning landscape design and maintenance services for Federal Way, Tacoma, and the South Sound area. 29+ years of excellence. Starting at $325/month for maintenance.',
  keywords: 'landscaping, landscape maintenance, Federal Way, Tacoma, Kent, Auburn, landscape design, irrigation, hardscaping, patio installation, landscape lighting',
  authors: [{ name: 'NW Landscape Management' }],
  creator: 'NW Landscape Management',
  publisher: 'NW Landscape Management',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nwlandscape.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NW Landscape Management | Award-Winning Landscaping Services',
    description: 'Transform your Pacific Northwest landscape with our award-winning design and maintenance services. 29+ years of excellence serving Federal Way, Tacoma, and South Sound.',
    url: 'https://nwlandscape.com',
    siteName: 'NW Landscape Management',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NW Landscape Management - Award-Winning Landscaping Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NW Landscape Management | Award-Winning Landscaping Services',
    description: 'Transform your Pacific Northwest landscape with our award-winning design and maintenance services.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        <SEOHead />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1B3B0D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <PerformanceOptimizer />
        <SEOOptimizer 
          title={metadata.title as string}
          description={metadata.description as string}
          keywords={metadata.keywords as string}
          canonical="https://nwlandscape.com"
          ogImage="https://nwlandscape.com/images/og-image.jpg"
        />
        <AccessibilityOptimizer />
        <ServiceWorkerRegistration />
        <Navigation />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
