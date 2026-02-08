'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus } from 'lucide-react';

const services = [
    {
        id: '01',
        title: 'Corporate Secretarial Services',
        description: 'Statutory compliance support for companies under the Companies Act. Board and general meeting coordination, minutes, resolutions, registers, annual returns, restructuring guidance, strike offs and related filings.',
        image: '/Corporate Secretarial Services.jpeg'
    },
    {
        id: '02',
        title: 'Business Registration Services',
        description: 'Name reservation, incorporation documents, Articles of Association, required forms, certifications, post incorporation compliance guidance.',
        image: '/Business Registration Services.jpeg'
    },
    {
        id: '03',
        title: 'Tax Advisory Services',
        description: 'Tax compliant structuring, investment and expansion guidance, audit and assessment support, TIN registration assistance.',
        image: '/Tax Advisory Services.jpeg'
    },
    {
        id: '04',
        title: 'BOI Registration',
        description: 'End to end application support, coordination, concessions guidance, reporting and compliance assistance.',
        image: '/BOI Registration.jpeg'
    },
    {
        id: '05',
        title: 'Customs Registration',
        description: 'Importer and exporter registration support, licensing guidance, documentation assistance, VAT registration support where relevant.',
        image: '/Customs Registration.jpeg'
    },
    {
        id: '06',
        title: 'Trademark Registration',
        description: 'Availability searches, application filing, responses, renewals, hearing support, protection support for local and foreign entities.',
        image: '/Trademark Registration.jpeg'
    },
    {
        id: '07',
        title: 'Business Process Outsourcing (BPO)',
        description: 'Feasibility reports, valuations, fixed asset registers, internal control reviews, process improvements.',
        image: '/Business Process Outsourcing (BPO).jpeg'
    }
];

const ServicesSection = () => {
    const [activeService, setActiveService] = useState('');

    return (
        <section className="py-24 bg-white text-[#0B1B32] overflow-hidden font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-16">

                    {/* Top Section */}
                    <div className="flex flex-col items-center md:items-start relative">

                        {/* Main Heading */}
                        <div className="mt-8 flex flex-col items-center md:items-start">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#0B1B32]">
                                <span className="block" style={{ opacity: 1, transform: 'translate3d(0,0,0)' }}>Tailored Solutions</span>
                                <span className="block text-[#0B1B32]/60" style={{ opacity: 1, transform: 'translate3d(0,0,0)' }}>for your Business Success</span>
                            </h2>
                        </div>
                    </div>

                    {/* Bottom Section: Accordion */}
                    <div className="flex flex-col border-t border-[#0B1B32]/10">
                        {services.map((Item) => {
                            const isActive = activeService === Item.id;

                            return (
                                <div
                                    key={Item.id}
                                    className="flex flex-col border-b border-[#0B1B32]/10 group cursor-pointer"
                                    onClick={() => setActiveService(isActive ? '' : Item.id)}
                                >
                                    {/* Card Heading */}
                                    <div className="py-6 md:py-8 flex items-center justify-between">
                                        <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-[#0B1B32] transition-colors duration-300 group-hover:text-[#0B1B32]/70">
                                            {Item.title}
                                        </h3>

                                        {/* Expand Button with Custom Image Background */}
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-md">
                                            <Image
                                                src="/button-bg.png"
                                                alt=""
                                                fill
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40" />
                                            <div className={`relative z-10 transition-transform duration-300 ${isActive ? 'rotate-45' : 'rotate-0'}`}>
                                                <Plus className="w-6 h-6 text-white" strokeWidth={2} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Expanded Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="pb-8 md:pb-12 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

                                            {/* Text Column */}
                                            <div className="lg:col-span-5 flex flex-col justify-between h-full">
                                                <div>
                                                    <div className="text-sm font-bold mb-4 block lg:hidden text-[#0B1B32]">{Item.id}.</div>
                                                    <p className="text-lg text-[#0B1B32]/80 leading-relaxed max-w-md">
                                                        {Item.description}
                                                    </p>
                                                </div>

                                                <div className="mt-8">
                                                    <Link href="/contact" className="inline-block group/btn">
                                                        <div className="flex items-center gap-4">
                                                            <span className="text-lg font-medium text-[#0B1B32] border-b border-[#0B1B32] pb-0.5 transition-all group-hover/btn:border-transparent">
                                                                Get free consultation
                                                            </span>
                                                            <div className="relative w-8 h-8 rounded-full border border-[#0B1B32]/20 flex items-center justify-center overflow-hidden bg-white transition-all group-hover/btn:border-[#0B1B32] group-hover/btn:scale-105">
                                                                <svg
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="text-[#0B1B32] absolute transition-transform duration-300 group-hover/btn:translate-y-[-150%] group-hover/btn:translate-x-[150%]"
                                                                >
                                                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <svg
                                                                    width="12"
                                                                    height="12"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="text-[#0B1B32] absolute translate-y-[150%] translate-x-[-150%] transition-transform duration-300 group-hover/btn:translate-y-0 group-hover/btn:translate-x-0"
                                                                >
                                                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Image Column */}
                                            <div className="lg:col-span-7">
                                                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-neutral-100">
                                                    <Image
                                                        src={Item.image}
                                                        alt={Item.title}
                                                        fill
                                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Learn More Button */}
                    <div className="flex justify-center">
                        <Link href="/services" className="relative px-8 py-3 rounded-full overflow-hidden group shadow-lg">
                            <Image
                                src="/button-bg.png"
                                alt=""
                                fill
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                            <span className="relative z-10 text-white font-bold text-base tracking-wide uppercase">
                                Learn more about services
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
