import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://consultantservices.lk'),
  title: 'Secretaries Consultant Services | Your Corporate Compliance Partner',
  description: 'From company registration to ongoing statutory compliance, we handle the regulatory work with accuracy, confidentiality, and speed. Global corporate services.',
  applicationName: 'Secretaries Consultant Services',
  authors: [{ name: 'Secretaries Consultant Services', url: 'https://consultantservices.lk' }],
  generator: 'Next.js',
  keywords: [
    'corporate secretarial services',
    'business registration',
    'company incorporation',
    'tax advisory',
    'BOI registration',
    'customs registration',
    'trademark registration',
    'BPO services',
    'Sri Lanka',
    'Maldives',
    'Mauritius',
    'Seychelles',
    'Middle East',
    'Saudi Arabia',
    'UAE',
    'compliance',
    'statutory compliance',
    'company formation'
  ],
  publisher: 'Secretaries Consultant Services',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://consultantservices.lk',
    siteName: 'Secretaries Consultant Services',
    title: 'Secretaries Consultant Services | Your Corporate Compliance Partner',
    description: 'From company registration to ongoing statutory compliance, we handle the regulatory work with accuracy, confidentiality, and speed.',
    images: [
      {
        url: 'https://consultantservices.lk/shareable-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Secretaries Consultant Services - Your Corporate Compliance Partner',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secretaries Consultant Services | Your Corporate Compliance Partner',
    description: 'From company registration to ongoing statutory compliance, we handle the regulatory work with accuracy, confidentiality, and speed.',
    images: [
      {
        url: 'https://consultantservices.lk/shareable-logo.jpg',
        alt: 'Secretaries Consultant Services - Your Corporate Compliance Partner',
      },
    ],
    creator: '@SecretariesConsultantServices',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}

