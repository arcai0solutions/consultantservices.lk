
import React from 'react';

const AboutSection = () => {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-start max-w-5xl mx-auto relative">

                    {/* Rotated Tag */}
                    <div className="mb-6 -ml-2">
                        <div
                            className="inline-block bg-[#0B1B32] text-white text-sm md:text-base font-medium px-6 py-2 rounded-full shadow-2xl shadow-black/20 origin-bottom-left"
                            style={{
                                transform: 'rotate(-10deg)',
                            }}
                        >
                            Who are we?
                        </div>
                    </div>

                    {/* Main Heading Content */}
                    <div className="relative w-full">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-justify text-foreground relative z-10">
                            Secretaries Consultant Services (Pvt) Ltd provides complete end-to-end support spanning the entire corporate lifecycle. This includes incorporation, corporate secretarial work, tax advisory, registrations, and outsourcing. We simplify complex requirements and execute with precision.
                        </h2>


                    </div>

                </div>
            </div>
        </section >
    );
};

export default AboutSection;
