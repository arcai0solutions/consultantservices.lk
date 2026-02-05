'use client';

import React from 'react';

const industries = [
    "Manufacturing",
    "Agriculture",
    "Services sector",
    "BPO and ITES",
    "Import and export",
    "IT and technology",
    "SMEs",
    "Tourism and hospitality",
    "Trade and commerce"
];

const IndustriesSection = () => {
    return (
        <section className="py-24 bg-neutral-100 text-[#0B1B32] overflow-hidden font-sans">
            <div className="container mx-auto px-4 md:px-6 mb-16">
                {/* Header */}
                <div className="flex flex-col items-center md:items-start relative">
                    {/* Tag */}
                    <div
                        className="absolute -top-10 left-0 md:-left-4 text-sm font-medium tracking-wide uppercase px-3 py-1 bg-[#0B1B32] text-white border border-[#0B1B32]/10 shadow-sm"
                        style={{ transform: 'rotate(-15deg)' }}
                    >
                        Industries we serve
                    </div>
                    <div className="mt-8 flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#0B1B32] mb-6">
                            Industries we support
                        </h2>
                        <p className="text-lg text-[#0B1B32]/80 leading-relaxed max-w-2xl">
                            We work with businesses across multiple sectors, with documentation and compliance handled to match each industry’s operational needs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Infinite Scroll Rows */}
            <div className="flex flex-col gap-8 w-full">
                {/* Row 1 - Scroll Left */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    {/* We need 3 sets to ensure smooth infinite scroll on wide screens without gaps if the list is short, but 2 might be enough given the card width */}
                    <div className="flex w-max animate-scroll gap-4 px-4">
                        {[...industries, ...industries, ...industries].map((industry, i) => (
                            <Card key={`row1-${i}`} name={industry} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Scroll Right (Reverse) */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    <div className="flex w-max animate-scroll gap-4 px-4" style={{ animationDirection: 'reverse' }}>
                        {[...industries, ...industries, ...industries].map((industry, i) => (
                            <Card key={`row2-${i}`} name={industry} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const Card = ({ name }: { name: string }) => (
    <div 
        className="relative w-48 h-24 md:w-64 md:h-32 rounded-xl overflow-hidden shrink-0 group hover:scale-105 transition-transform duration-300 shadow-lg transform-gpu"
        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
    >
        {/* Background */}
        <img src="/card-bg.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* Blur and Overlay */}
        {/* Use backdrop-blur-md for a noticeable blur on the image behind */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/40 md:backdrop-blur-sm" />

        {/* Text */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-6 text-center">
            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight uppercase tracking-wide">
                {name}
            </h3>
        </div>
    </div>
)

export default IndustriesSection;
