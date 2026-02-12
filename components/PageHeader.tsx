'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StaggeredMenu from '@/components/StaggeredMenu';

export default function PageHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logoContent = (
        <Link href="/">
            <div className={`relative rounded-full overflow-hidden border-2 border-white/20 transition-all duration-500 ease-in-out cursor-pointer ${isScrolled ? 'w-20 h-20' : 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'}`}>
                <Image
                    src="/logo.jpg"
                    alt="Logo"
                    fill
                    className={`object-cover transition-transform duration-500 ease-in-out ${isScrolled ? 'scale-100' : 'scale-150'}`}
                />
            </div>
        </Link>
    );

    return (
        <div className="absolute top-0 right-0 z-50 h-full w-full pointer-events-none">
            <StaggeredMenu
                items={[
                    { label: 'Home', ariaLabel: 'Home page', link: '/' },
                    { label: 'About Us', ariaLabel: 'About our company', link: '/about' },
                    { label: 'Our Services', ariaLabel: 'View our services', link: '/services' },
                    { label: 'FAQ', ariaLabel: 'Frequently Asked Questions', link: '/faq' },
                    { label: 'Reviews', ariaLabel: 'See what clients say', link: '/reviews' },
                    { label: 'Contact Us', ariaLabel: 'Get in touch', link: '/contact' }
                ]}
                displayItemNumbering={false}
                socialItems={[
                    { label: 'Facebook', link: 'https://www.facebook.com/people/Secretaries-Consultant-Services/100081628302029/' },
                    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/secretaries-consultant-services' }
                ]}
                menuButtonColor="#ffffff"
                colors={['#0a192f', '#112240', '#0a192f']}
                accentColor="#0a192f"
                logoUrl=""
                openMenuButtonColor="#000000"
                customLogo={logoContent}
                isScrolled={isScrolled}
                splitNavigation={true}
            />
        </div>
    );
}
