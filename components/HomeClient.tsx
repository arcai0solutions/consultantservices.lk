'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StaggeredMenu from '@/components/StaggeredMenu';
import Preloader from '@/components/Preloader';
import { Button } from '@/components/ui/button';

interface HomeClientProps {
    children: React.ReactNode;
}

export default function HomeClient({ children }: HomeClientProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [videoReady, setVideoReady] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleVideoLoaded = useCallback(() => {
        setVideoReady(true);
    }, []);

    const handlePreloaderComplete = useCallback(() => {
        if (videoReady) {
            setIsLoading(false);
        } else {
            const checkVideo = setInterval(() => {
                if (videoRef.current && videoRef.current.readyState >= 3) {
                    setIsLoading(false);
                    clearInterval(checkVideo);
                }
            }, 100);
        }
    }, [videoReady]);

    const logoContent = (
        <div className={`relative rounded-full overflow-hidden border-2 border-white/20 transition-all duration-500 ease-in-out ${isScrolled ? 'w-20 h-20' : 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'
            }`}>
            <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className={`object-cover transition-transform duration-500 ease-in-out ${isScrolled ? 'scale-100' : 'scale-150'
                    }`}
            />
        </div>
    );

    return (
        <>
            {/* Preloader overlays the content while loading */}
            {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
            {/* Main content always renders - hero loads behind preloader */}
            <main className={`min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 p-2 ${isLoading ? 'overflow-hidden' : ''}`}>
                <section className="relative mx-auto w-full h-[calc(100vh-16px)] flex flex-col mb-2">
                    <div className="relative overflow-hidden rounded-xl flex-1">
                        <video
                            ref={videoRef}
                            src="/hero-vid.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            onLoadedData={handleVideoLoaded}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                        {/* Hero Content */}
                        <div className="relative z-10 flex flex-col items-start justify-center md:justify-end h-full px-8 md:px-12 lg:px-16 md:pb-32 lg:pb-40 text-left">
                            <h1
                                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 max-w-4xl"
                                style={{ fontFamily: 'var(--font-stack-sans), sans-serif' }}
                            >
                                Your Corporate Compliance Partner
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed text-left">
                                From company registration to ongoing statutory compliance, we handle the regulatory work with accuracy, confidentiality, and speed so you can focus on growth.
                            </p>
                            <div className="flex flex-row gap-4 mt-12">
                                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-semibold text-lg px-8">
                                    <Link href="/services">
                                        Learn More
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20 hover:text-white bg-transparent font-semibold text-lg px-8">
                                    <Link href="/contact">
                                        Contact Us
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Staggered Menu */}
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
                            menuButtonColor={isScrolled ? "#000000" : "#ffffff"}
                            colors={['#0a192f', '#112240', '#0a192f']}
                            accentColor="#0a192f"
                            logoUrl=""
                            openMenuButtonColor="#000000"
                            customLogo={logoContent}
                            isScrolled={isScrolled}
                        />
                    </div>
                </section>

                {children}
            </main>
        </>
    );
}
