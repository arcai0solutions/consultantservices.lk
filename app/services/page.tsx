import React from 'react';
import StaggeredMenu from '@/components/StaggeredMenu';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            title: "Corporate Secretarial Services",
            bestFor: "Companies that need ongoing statutory support and clean governance.",
            includes: "Meetings, minutes, resolutions, registers, annual returns, statutory filings, and guidance for restructuring, strike offs, amalgamations, and compliance obligations."
        },
        {
            title: "Business Registration Services",
            bestFor: "Entrepreneurs and investors starting a new entity.",
            includes: "Name reservation, incorporation, drafting core documents, completing required forms, obtaining certifications, and post incorporation compliance guidance."
        },
        {
            title: "BOI Registration",
            bestFor: "Projects seeking BOI approval and incentives.",
            includes: "Application preparation, coordination, concessions guidance, post investment reporting, and compliance support."
        },
        {
            title: "Tax Advisory Services",
            bestFor: "Businesses that want compliant structuring and practical guidance.",
            includes: "Tax efficient structuring, investment and expansion implications, support during audits and assessments, and tax registration guidance."
        },
        {
            title: "Customs Registration",
            bestFor: "Importers, exporters, logistics and trading businesses.",
            includes: "Documentation support, guidance on import export licensing, and related registration support where applicable."
        },
        {
            title: "Trademark Registration",
            bestFor: "Businesses protecting brand names and marks.",
            includes: "Searches, filing, responses, renewals, hearing support, and protection support for local and foreign applicants."
        },
        {
            title: "Business Process Outsourcing (BPO)",
            bestFor: "Teams that want to reduce operational load and improve controls.",
            includes: "Feasibility reports, valuations, fixed asset registers, internal control assessments, and process improvements."
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Top Navigation & Logo Section */}
            <div className="relative bg-[#0a192f] text-white overflow-hidden pb-16">
                 
                {/* Navbar */}
                <div className="absolute top-0 right-0 z-50 h-full w-full pointer-events-none">
                    <StaggeredMenu
                        isFixed
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

                {/* Logo */}
                <div className="absolute top-6 left-8 md:top-8 md:left-12 lg:top-10 lg:left-16 z-20">
                     <Link href="/">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white/20 cursor-pointer">
                            <img
                                src="/logo.jpg"
                                alt="Logo"
                                className="w-full h-full object-cover scale-150"
                            />
                        </div>
                    </Link>
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 md:px-6 pt-40 md:pt-48 lg:pt-56 pb-12">
                     <div className="max-w-4xl mx-auto text-center md:text-left">
                        <h1
                            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: 'StackSansNotch, sans-serif' }}
                        >
                            Services designed to reduce risk and speed up progress
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mt-6">
                            Choose a specific service or request a bundled solution for your business stage.
                        </p>
                     </div>
                </div>
            </div>

            {/* Services Grid Section */}
            <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className="relative flex flex-col p-8 rounded-xl overflow-hidden group shadow-xl border border-white/10"
                            >
                                {/* Background Image & Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img src="/card-bg.jpeg" alt="" className="w-full h-full object-cover opacity-60 blur-[2px] scale-105" />
                                    <div className="absolute inset-0 bg-[#0B1B32]/90 mix-blend-multiply"></div>
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'StackSansNotch, sans-serif' }}>
                                        {service.title}
                                    </h3>
                                    
                                    <div className="mb-6">
                                        <span className="text-blue-200 text-sm uppercase tracking-wider font-semibold block mb-2">Best for</span>
                                        <p className="text-white/90 leading-relaxed">
                                            {service.bestFor}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-white/10">
                                        <span className="text-blue-200 text-sm uppercase tracking-wider font-semibold block mb-3">Includes</span>
                                        <p className="text-blue-50/80 text-sm leading-relaxed">
                                            {service.includes}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* CTA Section */}
             <section className="w-full py-24 bg-neutral-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-lg text-center border border-neutral-100">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-6 leading-tight" style={{ fontFamily: 'StackSansNotch, sans-serif' }}>
                            Not sure which service you need?
                        </h2>
                        <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
                            Describe your situation and we will recommend the fastest compliant path.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-[#0B1B32] hover:bg-[#152b4d] text-white rounded-full px-10 py-6 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                Contact us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}