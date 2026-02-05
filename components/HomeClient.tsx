'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import StaggeredMenu from '@/components/StaggeredMenu';
import Preloader from '@/components/Preloader';
import { Button } from '@/components/ui/button';

interface HomeClientProps {
    children: React.ReactNode;
}

export default function HomeClient({ children }: HomeClientProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

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

    return (
        <>
            {/* Preloader overlays the content while loading */}
            {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
            {/* Main content always renders - hero loads behind preloader */}
            <main className={`min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 p-2 ${isLoading ? 'overflow-hidden' : ''}`}>
                <section className="mx-auto w-full h-[calc(100vh-16px)] flex flex-col mb-2">
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
                                menuButtonColor="#ffffff"
                                colors={['#0a192f', '#112240', '#0a192f']}
                                accentColor="#0a192f"
                                logoUrl=""
                                openMenuButtonColor="#000000"
                            />
                        </div>

                        <div className="absolute top-6 left-8 md:top-8 md:left-12 lg:top-10 lg:left-16 z-20">
                            <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white/20">
                                <img
                                    src="/logo.jpg"
                                    alt="Logo"
                                    className="w-full h-full object-cover scale-150"
                                />
                            </div>
                        </div>

                        {/* Hero Content */}
                        <div className="relative z-10 flex flex-col items-start justify-center md:justify-end h-full px-8 md:px-12 lg:px-16 md:pb-32 lg:pb-40 text-left">
                            <h1
                                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 max-w-4xl"
                                style={{ fontFamily: 'StackSansNotch, sans-serif' }}
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
                </section>

                {children}
            </main>
        </>
    );
}
