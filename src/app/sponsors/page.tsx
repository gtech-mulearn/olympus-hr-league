import Link from "next/link";
import { Handshake, Target, TrendingUp, Users, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const visibilityImpact = [
    {
        title: "200+ High-Potential Talents",
        description: "Direct access to emerging professionals and top-tier student leaders.",
        icon: <Users className="h-6 w-6" />,
    },
    {
        title: "100% Targeted Reach",
        description: "HR-focused audience alignment ensuring your brand reaches the right people.",
        icon: <Target className="h-6 w-6" />,
    },
    {
        title: "Long-Term Association",
        description: "Recurring event series partnership providing multi-year visibility and impact.",
        icon: <TrendingUp className="h-6 w-6" />,
    },
];

const whyPartner = [
    {
        title: "Employer Branding",
        description: "Position your organization as a leader in people management and a preferred employer for top talent.",
        icon: <Award className="h-5 w-5" />,
    },
    {
        title: "Direct Access",
        description: "Connect directly with high-potential students and early-career professionals in a focused environment.",
        icon: <Handshake className="h-5 w-5" />,
    },
    {
        title: "Thought Leadership",
        description: "Showcase your organization's expertise and commitment to the future of Human Resources.",
        icon: <ShieldCheck className="h-5 w-5" />,
    },
];

export default function SponsorsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Header */}
            <section className="py-20 bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium mb-6">
                        Partnerships
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-foreground mb-6">
                        Sponsors & Industry Partners
                    </h1>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        Partner with Olympus to connect with the next generation of HR leaders
                        and position your brand at the heart of the HR ecosystem.
                    </p>
                </div>
            </section>

            {/* Visibility & Impact */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">
                        Sponsor Visibility & Impact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {visibilityImpact.map((item, idx) => (
                            <div key={idx} className="bg-card p-10 rounded-2xl border border-border shadow-sm text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-card-foreground/70 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Partner */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-card p-8 md:p-16 rounded-3xl shadow-xl border border-border">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
                            Why Partner with Olympus
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {whyPartner.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center">
                                    <div className="p-3 rounded-full bg-primary/20 text-primary mb-4">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-lg text-foreground mb-2">{item.title}</h4>
                                    <p className="text-sm text-card-foreground/60">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsorship CTA */}
            <section className="py-20 bg-foreground text-background">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                        Limited Opportunities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">
                        Partner with Olympus 2026
                    </h2>
                    <p className="text-lg text-background/60 max-w-2xl mx-auto mb-12">
                        Explore sponsorship packages that offer high visibility and
                        direct access to emerging talent.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild variant="default" size="xl" className="rounded-full px-10">
                            <Link href="/contact">
                                Become a Partner
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="xl" className="rounded-full px-10 border-background/20 hover:bg-background/10">
                            <Link href="mailto:hr@mulearn.org">
                                Request Prospectus
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
