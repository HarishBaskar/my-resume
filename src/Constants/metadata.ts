import type { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: {
    template: '%s | Harish Baskar',
    default: 'Harish Baskar - Frontend Developer'
  },
  description: 'Personal website and portfolio of Harish Baskar, a Frontend Developer specializing in React.js and TypeScript',
  keywords: [
    'Frontend Developer',
    'React.js',
    'TypeScript',
    'Next.js',
    'Web Development',
    'Software Engineer',
    'IQVIA',
    'Thomson Reuters',
    'Infosys'
  ],
  authors: [{ name: 'Harish Baskar' }],
  creator: 'Harish Baskar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harish-baskar.web.app',
    title: 'Harish Baskar - Frontend Developer',
    description: 'Personal website and portfolio of Harish Baskar',
    siteName: 'Harish Baskar',
    images: [
      {
        url: '/images/harish_baskar.JPG',
        width: 800,
        height: 600,
        alt: 'Harish Baskar'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harish Baskar - Frontend Developer',
    description: 'Personal website and portfolio of Harish Baskar',
    images: ['/images/harish_baskar.JPG']
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  }
};

export const getPageMetadata = (page: string): Metadata => {
  const pageMetadata: { [key: string]: Metadata } = {
    about: {
      title: 'About - Harish Baskar',
      description: 'Learn more about Harish Baskar - A passionate Frontend Developer with expertise in React.js, TypeScript, and modern web technologies.'
    },
    projects: {
      title: 'Projects - Harish Baskar',
      description: 'Portfolio of projects by Harish Baskar, showcasing expertise in web development, React.js, and TypeScript.'
    }
  };

  return {
    ...defaultMetadata,
    ...pageMetadata[page]
  };
};

export default defaultMetadata;