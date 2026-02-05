import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Client Reviews | Secretaries Consultant Services',
    description: 'See what our clients say about our corporate secretarial and business registration services. Trusted by companies for reliable compliance support.',
};

export default function ReviewsPage() {
    const reviews = [
        {
            name: "Mr. Sahan Rathnayake",
            company: "Novera Foundation",
            text: "The team at Secretaries Consultant Services (Pvt) Ltd has been a vital part of our foundation’s establishment. Their well-structured guidance, prompt assistance, and strong command of regulatory matters ensured a smooth and confident setup for the Novera Foundation."
        },
        {
            name: "Mr. Taruka Balasooriya",
            company: "Sports TV Network (Pvt) Ltd",
            text: "Secretaries Consultant Services (Pvt) Ltd has been exceptional in supporting the setup and compliance requirements of Sports TV Network. Their professionalism, clarity, and timely execution have made the entire process smooth and stress-free. We highly value their dependable partnership."
        },
        {
            name: "Mr. Wasantha Kumara",
            company: "Ceylon Mineral Corporation (Pvt) Ltd",
            text: "The expertise and guidance we received were truly outstanding. Secretaries Consultant Services (Pvt) Ltd managed our documentation and compliance processes with exceptional accuracy and care, enabling us to focus on driving our business forward."
        },
        {
            name: "Mr. Michael Quynn",
            company: "Exim Corporation (Pvt) Ltd",
            text: "From company formation to ongoing compliance, the level of service has been exemplary. The team’s consistency, dependability, and thoroughness have played a significant role in supporting our operational expansion."
        },
        {
            name: "Mr. Anton Ramesh",
            company: "Arrow Securities (Pvt) Ltd",
            text: "Your professionalism, steady communication, and ability to manage unexpected challenges set your team apart. Our company registration and back-office tasks were completed with remarkable efficiency thanks to your support."
        },
        {
            name: "Ms. Prarthana Wijesiri",
            company: "I I E M Consultancy (Pvt) Ltd",
            text: "We genuinely value the strong working relationship we have cultivated. The commitment and quality of service provided by Secretaries Consultant Services (Pvt) Ltd have strengthened our processes and elevated our standing with our stakeholders."
        },
        {
            name: "Mr. Amith Priyashantha",
            company: "Noda Enterprises (Pvt) Ltd",
            text: "We greatly appreciate the exceptional service delivered. Your team’s dedication and proactive approach consistently exceed our expectations. We look forward to continuing this partnership across all upcoming initiatives."
        },
        {
            name: "Mr. Hasitha Karunanayaka",
            company: "Titan Fitness Center (Pvt) Ltd",
            text: "Professional, dependable, and highly skilled — Secretaries Consultant Services has been instrumental in our organization’s progress. Their insights and guidance have added immense value to our decision-making."
        },
        {
            name: "Ms. Vidya Jayawickrama",
            company: "Australasia Foreign Employment (Pvt) Ltd",
            text: "Outstanding service with meticulous attention to detail. We are thoroughly impressed by the professionalism displayed and gladly recommend Secretaries Consultant Services to anyone seeking trusted corporate support."
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
                            Client Reviews
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mt-6">
                            See what our clients say about their experience working with us.
                        </p>
                     </div>
                </div>
            </div>

            {/* Reviews Grid Section */}
            <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {reviews.map((review, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="mb-6 text-[#0B1B32]/20">
                                    <Quote className="w-10 h-10 fill-current transform rotate-180" />
                                </div>
                                <p className="text-neutral-600 leading-relaxed mb-6 flex-grow italic">
                                    "{review.text}"
                                </p>
                                <div className="mt-auto border-t border-neutral-100 pt-6">
                                    <h4 className="font-bold text-[#0B1B32] text-lg">{review.name}</h4>
                                    <p className="text-sm text-[#0B1B32]/60 font-medium">{review.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Reviews CTA */}
             <section className="w-full py-24 bg-neutral-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-[#0B1B32] rounded-3xl p-10 md:p-16 shadow-lg text-center text-white relative overflow-hidden">
                        
                         {/* Abstract BG shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'StackSansNotch, sans-serif' }}>
                                Ready to experience the difference?
                            </h2>
                            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                Join hundreds of satisfied clients who trust us with their corporate compliance and growth.
                            </p>
                            <Button asChild size="lg" className="bg-white text-[#0B1B32] hover:bg-neutral-200 px-8 py-6 text-lg rounded-full font-bold">
                                <Link href="/contact">Get started today</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
