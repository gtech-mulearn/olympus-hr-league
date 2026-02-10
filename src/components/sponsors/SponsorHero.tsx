"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SponsorHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Organic Curved Track */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] pointer-events-none opacity-40">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                    <path
                        d="M-100,250 Q250,50 500,250 T1100,250"
                        fill="none"
                        stroke="url(#rainbow-grad)"
                        strokeWidth="80"
                        strokeLinecap="round"
                        opacity="0.2"
                    />
                    <defs>
                        <linearGradient id="rainbow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FF6B6B" />
                            <stop offset="50%" stopColor="#FFD93D" />
                            <stop offset="100%" stopColor="#6BCB77" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-6 py-2 rounded-full bg-[#1A1C1E] text-white text-xs font-bold uppercase tracking-widest mb-8"
                >
                    Partnerships
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Custom Mascots/Asset Illustration Area */}
                    <div className="relative mb-8 flex justify-center">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="relative z-20"
                        >
                            <img
                                src="/sponsors-hero.png"
                                alt="Sponsors Synergy"
                                className="w-48 md:w-64 lg:w-80 h-auto rounded-3xl"
                            />
                            {/* Playful Floating Elements */}
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -top-4 -left-4 text-primary opacity-40">
                                <Star className="h-8 w-8 fill-current" />
                            </motion.div>
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -bottom-4 -right-4 text-[#FF6B6B] opacity-40">
                                <Heart className="h-8 w-8 fill-current" />
                            </motion.div>
                        </motion.div>
                    </div>

                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-heading leading-[0.9] tracking-tighter uppercase mb-6">
                        SYNERGIZING IMPACT THROUGH <br />
                        <span className="text-primary italic">ELITE PARTNERSHIPS.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
                        Partner with Olympus to connect with the next generation of HR leaders
                        and position your brand at the heart of the HR ecosystem.
                    </p>

                    <div className="mt-12 flex justify-center">
                            <a href="https://forms.gle/rAWMLJReMmoKVm4K8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        <Button asChild size="xl" className="rounded-2xl px-12 h-16 text-lg font-bold group">
                                Become a Partner
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                            </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
