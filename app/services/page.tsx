import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Services | Secretaries Consultant Services',
    description: 'Explore our comprehensive services including company registration, corporate secretarial services, tax advisory, BOI registration, and trademark protection.',
};

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
                 

                <PageHeader />


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
                            Whether you’re a startup or an established business at any stage of your journey we provide the right solutions to help you take the next step toward success
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
                                    <Image src="/card-bg.jpeg" alt="" fill className="w-full h-full object-cover opacity-60 blur-[2px] scale-105" />
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
                            Looking for immediate assistance?
                        </h2>
                        <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
                            Chat directly with our team on WhatsApp for quick answers and guidance.
                        </p>
                        <a 
                            href="https://wa.me/94773779916" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-10 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Connect on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}