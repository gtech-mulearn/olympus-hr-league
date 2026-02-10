import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SponsorHero } from "@/components/sponsors/SponsorHero";
import { VisibilityCards } from "@/components/sponsors/VisibilityCards";
import { SocialProofSection } from "@/components/sponsors/SocialProofSection";

export default function SponsorsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-[#1A1C1E]">
            {/* Playful & Modern Hero Section */}
            <SponsorHero />

            {/* Visibility & Impact Grid */}
            <VisibilityCards />

            {/* Visual Social Proof / Character Layout inspired by 'Kin' Reference */}
            <SocialProofSection />

            {/* Final Partnerships CTA */}
            <section className="py-24 bg-[#1A1C1E] text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black font-heading mb-10 uppercase tracking-tighter">
                        READY TO SCALE YOUR <br />
                        <span className="text-primary italic">BRAND IMPACT?</span>
                    </h2>
                    <div className="flex justify-center">
                        <Button asChild size="xl" className="rounded-2xl px-12 h-16 text-lg font-bold group">
                            <a href="https://forms.gle/rAWMLJReMmoKVm4K8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                Become a Partner
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 translate-y-[-20%]" />
            </section>
        </div>
    );
}
