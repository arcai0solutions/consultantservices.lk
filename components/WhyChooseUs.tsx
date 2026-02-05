import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WhyChooseUs = () => {
    const cards = [
        {
            id: 1,
            title: "Expert-Led Support, Compliance-First",
            description: "Experienced professionals who handle corporate compliance, documentation, and regulatory coordination with strict statutory alignment to reduce risk.",
            image: "/Expert-Led Support, Compliance-First.jpeg",
            alt: "Research",
            iconClass: "scale-100"
        },
        {
            id: 2,
            title: "End-to-End Service, Delivered On Time",
            description: "From incorporation to ongoing compliance and expansion milestones, we manage the full process with clear timelines, proactive follow ups, and accurate submissions.",
            image: "/End-to-End Service, Delivered On Time.jpeg",
            alt: "3D Box",
            iconClass: "scale-100"
        },
        {
            id: 3,
            title: "Transparent Solutions For Every Client",
            description: "Cost effective, upfront pricing with no hidden fees, plus smooth guidance for Sri Lankan and foreign investors establishing operations locally.",
            image: "/Transparent Solutions For Every Client.jpeg",
            alt: "Shape",
            iconClass: "scale-100"
        }
    ];

    return (
        <section className="w-full bg-neutral-100 py-12 lg:py-24">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-20">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#0B1B32]">
                        Why choose us
                    </h2>
                </div>

                {/* Grid Container with Borders */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-l border-r border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200 bg-neutral-100">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="flex flex-col group bg-white transition-colors duration-300"
                        >
                            {/* Top Section: Image */}
                            <div className="h-64 flex items-center justify-center p-8 border-b border-neutral-200">
                                <div className="relative w-32 h-32 md:w-40 md:h-40">
                                    <Image
                                        src={card.image}
                                        alt={card.alt}
                                        fill
                                        className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 ${card.iconClass}`}
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Bottom Section: Text */}
                            <div className="flex-1 flex flex-col items-center text-center p-8 md:p-10 space-y-4">
                                <div className="h-20 md:h-24 flex items-start justify-center w-full">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#0B1B32] max-w-[280px]">
                                        {card.title}
                                    </h3>
                                </div>

                                <p className="text-neutral-500 leading-relaxed text-sm md:text-base max-w-sm text-justify">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Learn More Button */}
                <div className="flex justify-center mt-12">
                    <Link href="/about" className="relative px-8 py-3 rounded-full overflow-hidden group shadow-lg">
                        <Image
                            src="/button-bg.png"
                            alt=""
                            fill
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                        <span className="relative z-10 text-white font-bold text-base tracking-wide uppercase">
                            Learn more
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
