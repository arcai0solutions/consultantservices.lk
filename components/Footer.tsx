import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0B1B32] text-white pt-16 pb-8 rounded-t-[3rem] mt-2 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
                    {/* Col 1 */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-2xl md:text-3xl font-bold leading-tight max-w-sm">
                            Claim your free call with an expert consultant
                        </h4>

                        <div className="flex flex-col gap-1">
                            <div className="text-neutral-400 text-sm">Email</div>
                            <a href="mailto:scs@consultantservices.lk" className="text-lg font-medium text-[#a3b18a] hover:text-white transition-colors">
                                scs@consultantservices.lk
                            </a>
                        </div>

                        <div className="flex flex-col gap-4 mt-2">
                            <div className="flex flex-col gap-1">
                                <div className="text-neutral-400 text-sm">WhatsApp</div>
                                <a href="https://wa.me/94773779916" className="text-lg font-bold hover:text-neutral-300 transition-colors w-fit">
                                    +94 773 77 99 16
                                </a>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-neutral-400 text-sm">Telephone</div>
                                <div className="flex flex-col text-base font-medium">
                                    <a href="tel:+94773779916" className="hover:text-neutral-300 transition-colors">+94 773 77 99 16</a>
                                    <a href="tel:+94772443778" className="hover:text-neutral-300 transition-colors">+94 772 44 37 78</a>
                                    <a href="tel:+94117871571" className="hover:text-neutral-300 transition-colors">+94 117 871 571</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h6 className="text-lg font-bold mb-4">Quick links</h6>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <Link href="/" className="text-neutral-300 hover:text-white transition-colors w-fit">Home</Link>
                                <Link href="/about" className="text-neutral-300 hover:text-white transition-colors w-fit">About Us</Link>
                                <Link href="/services" className="text-neutral-300 hover:text-white transition-colors w-fit">Our Services</Link>
                                <Link href="/faq" className="text-neutral-300 hover:text-white transition-colors w-fit">FAQ</Link>
                                <Link href="/reviews" className="text-neutral-300 hover:text-white transition-colors w-fit">Reviews</Link>
                                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors w-fit">Contact Us</Link>
                            </div>
                        </div>

                        <div>
                            <h6 className="text-lg font-bold mb-4">Socials</h6>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.facebook.com/people/Secretaries-Consultant-Services/100081628302029/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/secretaries-consultant-services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <div
                                    className="p-2 bg-white/10 rounded-full text-white/50 cursor-default"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={20} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Col 3 */}
                    <div className="flex flex-col gap-6 items-start">
                        <Link href="/" className="inline-block">
                            <img
                                src="/logo.jpg"
                                alt="Logo"
                                className="h-12 w-auto object-contain rounded-md"
                            />
                        </Link>

                        <div className="flex flex-col gap-2">
                            <h6 className="text-lg font-bold">Schedule your free discovery call with an expert</h6>
                            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                                From initial planning to final delivery, our approach to artistic direction is deeply informed.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B1B32] font-bold overflow-hidden rounded-md transition-transform hover:-translate-y-1"
                        >
                            <span className="relative z-10">Get expert advice</span>
                            <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Strip */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
                    <div className="flex items-center gap-1">
                        <span>Designed by</span>
                        <a href="https://www.arcai.agency" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="/arc logo.png" alt="ARC AI" className="h-12 w-auto align-middle -mt-1 -mb-2" />
                        </a>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Powered by</span>
                        <span className="text-white">Next.js</span>
                    </div>
                </div>
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-[30rem]  z-20 pointer-events-none opacity-100 mix-blend-normal">
                <img
                    src="/footer-img.png"
                    alt=""
                    className="w-32 md:w-64 lg:w-96 object-contain"
                />
            </div>
        </footer>
    );
};

export default Footer;
