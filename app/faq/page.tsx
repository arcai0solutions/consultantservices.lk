import React from 'react';
import StaggeredMenu from '@/components/StaggeredMenu';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function FAQPage() {
    const mfaqs = [
        {
            questions: "Why should I register a Private Limited Company?",
            answer: "A Private Limited Company provides limited liability, stronger credibility, and a clear legal structure for working with clients, banks, and partners."
        },
        {
            questions: "What documents are required?",
            answer: "Typically you will need identification details and a registered business address. Requirements can vary based on ownership and industry."
        },
        {
            questions: "What is the company registration process?",
            answer: "Common steps include name reservation, preparing incorporation documents, signing required forms, submitting to Registrar of Companies, receiving the certificate of incorporation, and completing initial banking and tax registrations."
        },
        {
            questions: "Can someone else use my business name after I register it?",
            answer: "Once approved and registered, your company name is protected and cannot be used by another entity in the same manner."
        },
        {
            questions: "Is there a minimum capital requirement?",
            answer: "In general, there is no minimum capital requirement, except for certain regulated industries."
        },
        {
            questions: "How many directors are required?",
            answer: "A Private Limited Company can be registered with one director."
        },
        {
            questions: "Can a foreigner own a Private Limited Company?",
            answer: "Yes, foreign ownership is possible, though some sectors may have restrictions or special requirements."
        },
        {
            questions: "Can directors or shareholders be changed after registration?",
            answer: "Yes. Changes can be made by filing the relevant forms and updates."
        },
        {
            questions: "How long does registration take?",
            answer: "After documents are signed and submitted, registration commonly takes about five working days, depending on completeness and processing."
        },
        {
            questions: "What should I do after registering my company?",
            answer: "Open a corporate bank account, complete tax registrations, maintain statutory records, file annual returns, and prepare audited financial statements where required."
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Top Navigation & Logo Section (Similar to About page) */}
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
                            { label: 'Twitter', link: 'https://twitter.com' },
                            { label: 'GitHub', link: 'https://github.com' },
                            { label: 'LinkedIn', link: 'https://linkedin.com' }
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
                            Frequently asked questions
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mt-6">
                            Quick answers to common questions about company registration and compliance.
                        </p>
                     </div>
                </div>
            </div>

            {/* Accordion List Section */}
            <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {mfaqs.map((faq, index) => (
                                <AccordionItem 
                                    key={index} 
                                    value={`item-${index}`} 
                                    className="border border-neutral-200 rounded-lg px-6 data-[state=open]:bg-neutral-50 data-[state=open]:border-[#0B1B32]/20 transition-colors"
                                >
                                    <AccordionTrigger className="text-left text-lg font-medium text-[#0B1B32] py-6 hover:no-underline">
                                        {faq.questions}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-neutral-600 text-base pb-6 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

             {/* FAQ CTA */}
             <section className="w-full py-24 bg-neutral-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-8" style={{ fontFamily: 'StackSansNotch, sans-serif' }}>
                            Still have a question?
                        </h2>
                        
                        <a 
                            href="https://wa.me/94773779916" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <MessageCircle className="w-6 h-6" />
                            <span className="text-lg">Message us on WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
