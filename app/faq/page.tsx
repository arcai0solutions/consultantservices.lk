import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'FAQ | Secretaries Consultant Services',
    description: 'Find answers to frequently asked questions about company registration, business compliance, and corporate services in Sri Lanka.',
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Top Navigation & Logo Section (Similar to About page) */}
            <div className="relative bg-[#0a192f] text-white overflow-hidden pb-16">
                 

                <PageHeader />


                {/* Hero Content */}
                <div className="container mx-auto px-4 md:px-6 pt-40 md:pt-48 lg:pt-56 pb-12">
                     <div className="max-w-4xl mx-auto text-center md:text-left">
                        <h1
                            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: 'StackSansNotch, sans-serif' }}
                        >
                            Frequently asked questions
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mt-6">
                            Clear, concise answers to the most commonly asked questions on company registration and ongoing compliance to help you move forward with confidence.
                        </p>
                     </div>
                </div>
            </div>

            {/* Accordion List Section */}
            <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <FaqAccordion />
                    </div>
                </div>
            </section>

             {/* FAQ CTA */}
             <section className="w-full py-24 bg-neutral-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-8" style={{ fontFamily: 'StackSansNotch, sans-serif' }}>
                            More Questions?
                        </h2>
                        
                        <a 
                            href="https://wa.me/94773779916" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <MessageCircle className="w-6 h-6" />
                            <span className="text-lg">Contact Us Now</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
