import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });
const stackSans = localFont({
  src: './fonts/StackSansNotch-VariableFont_wght.ttf',
  variable: '--font-stack-sans',
  display: 'swap',
});

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
        url: 'https://consultantservices.lk/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Secretaries Consultant Services - Your Corporate Compliance Partner',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secretaries Consultant Services | Your Corporate Compliance Partner',
    description: 'From company registration to ongoing statutory compliance, we handle the regulatory work with accuracy, confidentiality, and speed.',
    images: [
      {
        url: 'https://consultantservices.lk/share-img.png',
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
      <body className={`${inter.className} ${stackSans.variable} overflow-x-hidden`}>{children}</body>
    </html>
  );
}

