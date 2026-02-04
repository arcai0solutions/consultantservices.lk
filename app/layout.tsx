import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Secretaries Consultant Services | Your Corporate Compliance Partner',
  description: 'From company registration to ongoing statutory compliance, we handle the regulatory work with accuracy, confidentiality, and speed. Corporate secretarial services, business registration, tax advisory, BOI registration, customs registration, trademark registration, and BPO services in Sri Lanka, Maldives, Mauritius, Seychelles, and the Middle East.',
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
  authors: [{ name: 'Secretaries Consultant Services' }],
  creator: 'ARC AI',
  publisher: 'Secretaries Consultant Services',
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
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Secretaries Consultant Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secretaries Consultant Services | Your Corporate Compliance Partner',
    description: 'From company registration to ongoing statutory compliance, we handle the regulatory work with accuracy, confidentiality, and speed.',
    images: ['/logo.jpg'],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

