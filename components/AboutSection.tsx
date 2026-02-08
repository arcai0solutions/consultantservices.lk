
import React from 'react';

const AboutSection = () => {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-start max-w-5xl mx-auto relative">

                    {/* Main Heading Content */}
                    <div className="relative w-full">

                        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-justify text-foreground relative z-10">
                            Secretaries Consultant Services (Pvt) Ltd provides complete end-to-end support spanning the entire corporate lifecycle. This includes incorporation, corporate secretarial work, tax advisory, registrations, and outsourcing. We simplify complex requirements and execute with precision.
                        </h3>


                    </div>

                </div>
            </div>
        </section >
    );
};

export default AboutSection;
