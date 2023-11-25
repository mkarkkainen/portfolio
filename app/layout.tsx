import Footer from '../components/Footer';
import './globals.css';
import Providers from './providers';
import { cn } from '@/lib/className';
import AnimateEnter from '@/components/AnimateEnter';
import { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const DMsans = DM_Sans({
  fallback: ['Inter'],
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  authors: [{ name: 'Miikka Karkkainen', url: 'https://miikkaaa.com' }],
  category: 'design',
  creator: 'Miikka Karkkainen',
  description: 'Design Engineer.',
  icons: {
    apple: '/static/favicons/apple-touch-icon-180x180.png',
    icon: '/static/favicons/favicon-196x196.png',
    shortcut: '/favicon.ico',
  },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Design',
    'Engineering',
    'Frontend',
    'Developer',
  ],
  manifest: '/static/favicons/site.webmanifest',
  openGraph: {
    description: 'Design Engineer.',
    images: [
      {
        alt: 'Miikka Karkkainen',
        height: 1080,
        url: 'https://miikkaaa.com/static/images/og.png',
        width: 1920,
      },
    ],
    locale: 'en-US',
    siteName: 'Miikka Karkkainen',
    title: 'Miikka Karkkainen',
    type: 'website',
    url: 'https://miikkaaa.com',
  },
  publisher: 'Miikka Karkkainen',
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  themeColor: [
    { color: '#FFEADB', media: '(prefers-color-scheme: light)' },
    { color: '#171717', media: '(prefers-color-scheme: dark)' },
  ],
  title: {
    default: 'Miikka Karkkainen',
    template: '%s | Miikka Karkkainen',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          `${DMsans.className}`,
          'h-full, min-h-screen, relative w-full max-w-4xl mx-auto p-4',
          'bg-[#1c1a29] dark:bg-[#232629] sm:my-24',
          'motion-reduce:transform-none motion-reduce:transition-none'
        )}
      >
        <Providers>
          <nav className='fixed bottom-4 left-2 z-50 sm:left-4 md:left-6'></nav>
          <AnimateEnter>
            <>
              {children}
              <Footer />
            </>
          </AnimateEnter>
        </Providers>
      </body>
    </html>
  );
}
