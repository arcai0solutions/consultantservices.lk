import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const metadata: Metadata = {
    title: 'Contact Us | Secretaries Consultant Services',
    description: 'Get in touch with Secretaries Consultant Services for expert guidance on company registration, compliance, and business support. Call, email, or visit us.',
};

export default function ContactPage() {
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
                            Contact us
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mt-6">
                            Share your requirements with us, and we will respond with clear next steps and a structured checklist to guide you forward.
                        </p>
                     </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
                        
                        {/* Left Column: Quick Contact Info */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <p className="text-neutral-600 mb-8 leading-relaxed">
                                    Whether you're starting a new business or need support with ongoing compliance, our team is here to help.
                                </p>
                            </div>

                            <div className="flex flex-col gap-5 max-w-md">
                                {/* WhatsApp */}
                                <div className="flex items-center gap-5 p-4 bg-[#0B1B32] rounded-xl border border-white/10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(11,27,50,0.5)] transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
                                     {/* Background Image & Overlay */}
                                    <div className="absolute inset-0 z-0">
                                        <Image src="/card-bg.jpeg" alt="" fill className="w-full h-full object-cover opacity-60" />
                                        <div className="absolute inset-0 bg-[#0B1B32]/80 mix-blend-multiply"></div>
                                    </div>
                                    
                                    <div className="p-3 bg-white/10 text-white rounded-lg relative z-10 transition-colors duration-300">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-white mb-0.5 text-lg">WhatsApp</h4>
                                        <a href="https://wa.me/94773779916" className="text-blue-100 font-medium hover:text-white transition-colors block leading-none">
                                            +94 773 77 99 16
                                        </a>
                                    </div>
                                </div>

                                {/* Telephone */}
                                <div className="flex items-center gap-5 p-4 bg-[#0B1B32] rounded-xl border border-white/10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(11,27,50,0.5)] transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
                                     {/* Background Image & Overlay */}
                                     <div className="absolute inset-0 z-0">
                                        <Image src="/card-bg.jpeg" alt="" fill className="w-full h-full object-cover opacity-60" />
                                        <div className="absolute inset-0 bg-[#0B1B32]/80 mix-blend-multiply"></div>
                                    </div>

                                    <div className="p-3 bg-white/10 text-white rounded-lg relative z-10 transition-colors duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-white mb-0.5 text-lg">Telephone</h4>
                                        <div className="flex flex-col gap-1">
                                            <a href="tel:+94773779916" className="text-blue-100 font-medium hover:text-white transition-colors leading-tight">+94 773 77 99 16</a>
                                            <a href="tel:+94772443778" className="text-blue-100 font-medium hover:text-white transition-colors leading-tight">+94 772 44 37 78</a>
                                            <a href="tel:+94117871571" className="text-blue-100 font-medium hover:text-white transition-colors leading-tight">+94 117 871 571</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-5 p-4 bg-[#0B1B32] rounded-xl border border-white/10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(11,27,50,0.5)] transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
                                    {/* Background Image & Overlay */}
                                    <div className="absolute inset-0 z-0">
                                        <Image src="/card-bg.jpeg" alt="" fill className="w-full h-full object-cover opacity-60" />
                                        <div className="absolute inset-0 bg-[#0B1B32]/80 mix-blend-multiply"></div>
                                    </div>

                                    <div className="p-3 bg-white/10 text-white rounded-lg relative z-10 transition-colors duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-white mb-0.5 text-lg">Email</h4>
                                        <a href="mailto:scs@consultantservices.lk" className="text-blue-100 font-medium hover:text-white transition-colors break-all leading-none">
                                            scs@consultantservices.lk
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="bg-neutral-50 p-8 md:p-10 rounded-3xl border border-neutral-200 shadow-sm">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullname">Full Name</Label>
                                        <Input id="fullname" placeholder="Enter your name" className="bg-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company Name (Optional)</Label>
                                        <Input id="company" placeholder="Your company" className="bg-white" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" className="bg-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone or WhatsApp</Label>
                                        <Input id="phone" type="tel" placeholder="+94 777 123 456" className="bg-white" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="service">Service Needed</Label>
                                    <Select>
                                        <SelectTrigger className="bg-white">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="company-registration">Company Registration</SelectItem>
                                            <SelectItem value="company-secretarial">Company Secretarial Services</SelectItem>
                                            <SelectItem value="tax-advisory">Tax Advisory</SelectItem>
                                            <SelectItem value="trademark">Trademark Registration</SelectItem>
                                            <SelectItem value="boi">BOI Registration</SelectItem>
                                            <SelectItem value="other">Other Inquiry</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Tell us about your requirements..." className="min-h-[120px] bg-white resize-y" />
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" size="lg" className="w-full bg-[#0B1B32] hover:bg-[#1a2f4d] text-white py-6 text-lg rounded-xl">
                                        Send inquiry
                                    </Button>
                                    <p className="text-xs text-neutral-500 text-center mt-4">
                                        We treat your information confidentially.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
