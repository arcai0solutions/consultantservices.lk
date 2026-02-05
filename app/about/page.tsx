import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, FileCheck, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About Us | Secretaries Consultant Services',
    description: 'Learn about Secretaries Consultant Services, your trusted partner for corporate compliance, company registration, and business support in Sri Lanka and beyond.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Top Navigation & Logo Section (Simulating the Header) */}
            <div className="relative bg-[#0a192f] text-white overflow-hidden pb-16">
                 {/* Decorative background elements could go here */}


                <PageHeader />


                {/* Hero Content */}
                <div className="container mx-auto px-4 md:px-6 pt-40 md:pt-48 lg:pt-56 pb-12">
                     <div className="max-w-4xl mx-auto text-center md:text-left">
                        <h1
                            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: 'StackSansNotch, sans-serif' }}
                        >
                            Corporate secretarial and business consultancy services you can rely on
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mt-6">
                            We help entrepreneurs, SMEs, foreign investors, and organizations navigate regulatory, administrative, and compliance requirements with confidence.
                        </p>
                     </div>
                </div>
            </div>

            {/* Company Overview - Style matching AboutSection */}
            <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col items-start relative">
                            {/* Rotated Tag */}
                            <div className="mb-8 -ml-2">
                                <div
                                    className="inline-block bg-[#0B1B32] text-white text-sm md:text-base font-medium px-6 py-2 rounded-full shadow-2xl shadow-black/20 origin-bottom-left"
                                    style={{
                                        transform: 'rotate(-5deg)',
                                    }}
                                >
                                    Who we are
                                </div>
                            </div>
                            
                            <div className="mt-4">
                                <p className="text-xl md:text-2xl leading-relaxed text-gray-700 text-justify">
                                    Since 2018, we have supported businesses across Sri Lanka with corporate secretarial services, registrations, compliance management, advisory, and outsourcing. Our work is built around precision, confidentiality, and consistent delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes You Different - Style matching WhyChooseUs */}
            <section className="w-full bg-neutral-100 py-20 lg:py-28">
                <div className="container mx-auto px-4 md:px-6">
                     <div className="flex flex-col items-center justify-center text-center mb-16 px-4">
                        <div
                            className="inline-block bg-[#0B1B32] text-white text-lg md:text-2xl font-bold px-10 py-3 rounded-full shadow-xl shadow-black/10"
                        >
                            What you can expect from us
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                         {/* Card 1 */}
                        <div className="relative p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/10">
                             {/* Background Image & Overlay */}
                             <div className="absolute inset-0 z-0">
                                <Image src="/card-bg.jpeg" alt="" fill className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 bg-[#0B1B32]/90 mix-blend-multiply"></div>
                            </div>

                             <div className="relative z-10">
                                 <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-white border border-white/20">
                                    <Shield className="w-6 h-6" />
                                 </div>
                                 <h3 className="text-xl font-bold text-white mb-3">Integrity and confidentiality</h3>
                                 <p className="text-blue-50/80">Ethical standards and careful handling of sensitive data.</p>
                             </div>
                        </div>
                        
                         {/* Card 2 */}
                         <div className="relative p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/10">
                             {/* Background Image & Overlay */}
                             <div className="absolute inset-0 z-0">
                                <Image src="/card-bg.jpeg" alt="" fill className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 bg-[#0B1B32]/90 mix-blend-multiply"></div>
                            </div>

                             <div className="relative z-10">
                                 <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-white border border-white/20">
                                    <FileCheck className="w-6 h-6" />
                                 </div>
                                 <h3 className="text-xl font-bold text-white mb-3">Professional execution</h3>
                                 <p className="text-blue-50/80">Clear documentation, accurate filing, and transparent communication.</p>
                             </div>
                        </div>

                         {/* Card 3 */}
                         <div className="relative p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/10">
                             {/* Background Image & Overlay */}
                             <div className="absolute inset-0 z-0">
                                <Image src="/card-bg.jpeg" alt="" fill className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 bg-[#0B1B32]/90 mix-blend-multiply"></div>
                            </div>

                             <div className="relative z-10">
                                 <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-white border border-white/20">
                                    <Users className="w-6 h-6" />
                                 </div>
                                 <h3 className="text-xl font-bold text-white mb-3">Client focused solutions</h3>
                                 <p className="text-blue-50/80">Guidance that fits your business stage and industry.</p>
                             </div>
                        </div>

                         {/* Card 4 */}
                         <div className="relative p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/10">
                             {/* Background Image & Overlay */}
                             <div className="absolute inset-0 z-0">
                                <Image src="/card-bg.jpeg" alt="" fill className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 bg-[#0B1B32]/90 mix-blend-multiply"></div>
                            </div>

                             <div className="relative z-10">
                                 <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-white border border-white/20">
                                    <Clock className="w-6 h-6" />
                                 </div>
                                 <h3 className="text-xl font-bold text-white mb-3">Responsive support</h3>
                                 <p className="text-blue-50/80">Proactive follow ups and timely completion.</p>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Vision & Mission */}
            <section className="w-full py-20 lg:py-28 bg-white">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {/* Vision */}
                        <div className="relative flex flex-col p-8 md:p-10 rounded-2xl overflow-hidden group shadow-xl">
                             {/* Background Image & Overlay */}
                             <div className="absolute inset-0 z-0">
                                <Image src="/card-bg.jpeg" alt="" fill className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 bg-[#0B1B32]/90 mix-blend-multiply"></div>
                            </div>

                             <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'StackSansNotch, sans-serif' }}>Our Vision</h3>
                                <p className="text-lg leading-relaxed text-blue-100">
                                    To become the most trusted and leading corporate service provider in Sri Lanka, known for integrity, reliability, and excellence.
                                </p>
                             </div>
                        </div>

                         {/* Mission */}
                        <div className="flex flex-col p-8 md:p-10 rounded-2xl border border-neutral-200 bg-neutral-50 relative overflow-hidden">
                             <h3 className="text-3xl font-bold mb-6 text-[#0B1B32]" style={{ fontFamily: 'StackSansNotch, sans-serif' }}>Our Mission</h3>
                             <p className="text-lg leading-relaxed text-gray-700">
                                To empower entrepreneurs and businesses by simplifying compliance, administration, and regulatory processes through professional, client focused, and innovative solutions.
                             </p>
                        </div>
                    </div>
                 </div>
            </section>

            {/* About CTA */}
            <section className="w-full py-24 bg-neutral-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-lg text-center border border-neutral-100">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0B1B32] mb-8 leading-tight" style={{ fontFamily: 'StackSansNotch, sans-serif' }}>
                            Work with a team that protects your time and your compliance
                        </h2>
                        <Button asChild size="lg" className="bg-[#0B1B32] text-white hover:bg-[#1a2f4d] px-8 py-6 text-lg rounded-full">
                            <Link href="/contact">Book a consultation</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
