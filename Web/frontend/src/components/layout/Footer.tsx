"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const pathname = usePathname();

    if (pathname.startsWith('/portal')) return null;

    return (
        <footer className="bg-slate-900 pt-20 pb-10 text-white border-t-2 border-[#a1dc84]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div className="col-span-1">
                        <div className="flex h-12 w-auto shrink-0 items-center justify-start mb-6">
                            <img
                                src="/images/mubraiz-logo-white.svg"
                                alt="Mubraiz Resources Limited"
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6 font-medium">
                            Redefining global logistics with integrity, speed, and advanced technology. Seamless supply chain ecosystems.
                        </p>
                        <div className="flex gap-4">
                            <a
                                className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-800 text-slate-400 hover:text-[#a1dc84] hover:border-[#a1dc84]/50 transition-all"
                                href="https://www.facebook.com/share/1HAb9BVrBm/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-800 text-slate-400 hover:text-[#a1dc84] hover:border-[#a1dc84]/50 transition-all"
                                href="https://x.com/Mubraizresource"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-800 text-slate-400 hover:text-[#a1dc84] hover:border-[#a1dc84]/50 transition-all"
                                href="https://www.linkedin.com/company/mubraizresourceslimited/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-6 font-black text-white uppercase tracking-[0.15em] text-[11px] font-display">Services</h3>
                        <ul className="space-y-3 text-sm text-slate-400 font-medium">
                            <li><Link className="hover:text-[#a1dc84] transition-colors flex items-center gap-2" href="/services/fleet"><span className="h-1 w-1 rounded-full bg-slate-700"></span>Fleet Transport</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors flex items-center gap-2" href="/services/haulage"><span className="h-1 w-1 rounded-full bg-slate-700"></span>Container Haulage</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors flex items-center gap-2" href="/services/warehousing"><span className="h-1 w-1 rounded-full bg-slate-700"></span>Warehousing</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors flex items-center gap-2" href="/services/customs"><span className="h-1 w-1 rounded-full bg-slate-700"></span>Customs Clearance</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors flex items-center gap-2" href="/services/procurement"><span className="h-1 w-1 rounded-full bg-slate-700"></span>Procurement & Supply Chain</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 font-black text-white uppercase tracking-[0.15em] text-[11px] font-display">Resources</h3>
                        <ul className="space-y-3 text-sm text-slate-400 font-medium">
                            <li><Link className="hover:text-[#a1dc84] transition-colors" href="/resources/wiki">Knowledge Wiki</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors" href="/resources/glossary">Logistics Glossary</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors" href="/resources/downloads">Downloads Archive</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors" href="/resources/case-studies">Success Gallery</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors" href="/resources/help">Global FAQ Hub</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 font-black text-white uppercase tracking-[0.15em] text-[11px] font-display">Company</h3>
                        <ul className="space-y-3 text-sm text-slate-400 font-medium">
                            <li><Link className="hover:text-[#a1dc84] transition-colors" href="/about">About Us</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors" href="/careers">Careers</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors" href="/network">Global Network</Link></li>
                            <li><Link className="hover:text-[#a1dc84] transition-colors" href="/contact">Partnerships</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 font-black text-white uppercase tracking-[0.15em] text-[11px] font-display">Contact</h3>
                        <ul className="space-y-4 text-sm text-slate-400 font-medium">
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-[#a1dc84] !text-xl">mail</span>
                                <a href="mailto:info@mubraizresourcesltd.com" className="hover:text-white transition-colors cursor-pointer">info@mubraizresourcesltd.com</a>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-[#a1dc84] !text-xl">call</span>
                                <a href="tel:+2348134822126" className="hover:text-white transition-colors cursor-pointer">+(234) 0813 482 2126</a>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-[#a1dc84] !text-xl">location_on</span>
                                <Link href="/contact" className="hover:text-white transition-colors">View All Offices</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-slate-500 font-bold uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Mubraiz Resources Limited | RC 9008567 | All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link className="hover:text-white transition-colors" href="/legal/privacy">Privacy Policy</Link>
                        <Link className="hover:text-white transition-colors" href="/legal/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

