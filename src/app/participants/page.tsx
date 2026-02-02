import Link from "next/link";
import { CheckCircle2, Users, GraduationCap, Briefcase, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

const targetAudience = [
    {
        title: "Engineering Students",
        description: "Those exploring management pathways and seeking to understand the human side of technology leadership.",
        icon: <Rocket className="h-6 w-6" />,
    },
    {
        title: "BBA/MBA/HR Students",
        description: "Students pursuing business and HR degrees who need practical exposure to complement theoretical learning.",
        icon: <GraduationCap className="h-6 w-6" />,
    },
    {
        title: "HR Career Aspirants",
        description: "A career-focused graduate aiming to enter the HR profession with a solid foundation.",
        icon: <Users className="h-6 w-6" />,
    },
    {
        title: "Early-Career Professionals",
        description: "HR professionals in their early career stages and lateral entrants seeking HR specialization.",
        icon: <Briefcase className="h-6 w-6" />,
    },
];

const benefits = [
    {
        title: "Hands-On Real-World Exposure",
        description: "Engage directly with authentic HR scenarios that mirror actual workplace challenges. From mock interviews to designing employee lifecycle strategies.",
    },
    {
        title: "Direct Access to Industry Leaders",
        description: "Interact face-to-face with seasoned HR professionals through speed mentoring sessions, power lunches, and domain specific discussions.",
    },
    {
        title: "Founding Cohort Recognition",
        description: "Join an exclusive network of founding participants who pioneered this experience. Receive special recognition and priority access to future events.",
    },
];

export default function ParticipantsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Header */}
            <section className="py-20 bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium mb-6">
                        Audience
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-foreground mb-6">
                        Who Should Attend & Why
                    </h1>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        Olympus is designed for ambitious individuals ready to bridge the gap
                        between academic learning and professional excellence.
                    </p>
                </div>
            </section>

            {/* Target Audience Scattered Layout */}
            <section className="py-16 md:py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">
                        Target Audience
                    </h2>

                    <div className="relative min-h-[600px] md:min-h-[700px] max-w-6xl mx-auto">
                        {/* Engineering Students - Top Left */}
                        <div className="absolute top-0 left-0 md:left-[5%] flex flex-col items-center md:items-start gap-4 w-[45%] md:w-auto">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary rounded-full scale-90 -z-10 translate-x-4 translate-y-4" />
                                <img
                                    src="/engineering-students.webp"
                                    alt="Engineering Students"
                                    className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">Students</p>
                                <h3 className="text-lg md:text-xl font-bold text-foreground">Engineering<br />Students</h3>
                                <p className="text-xs text-foreground/40 max-w-[150px]">Exploring management pathways and human-side tech leadership.</p>
                            </div>
                        </div>

                        {/* BBA/MBA Students - Center/Bottom */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary rounded-full scale-90 -z-10 translate-x-2 translate-y-2" />
                                <img
                                    src="/mba-graduates.webp"
                                    alt="BBA/MBA Students"
                                    className="w-44 h-44 md:w-64 md:h-64 object-contain relative z-10"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">Degrees</p>
                                <h3 className="text-lg md:text-xl font-bold text-foreground">BBA / MBA / HR<br />Students</h3>
                                <p className="text-xs text-foreground/40 max-w-[200px]">Seeking practical exposure to complement theoretical learning.</p>
                            </div>
                        </div>

                        {/* HR Enthusiasts - Top Right */}
                        <div className="absolute top-8 right-0 md:right-[5%] flex flex-col items-center md:items-end gap-4 w-[45%] md:w-auto">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary rounded-full scale-90 -z-10 -translate-x-4 translate-y-4" />
                                <img
                                    src="/hr.webp"
                                    alt="HR Aspirants"
                                    className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10"
                                />
                            </div>
                            <div className="text-center md:text-right">
                                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">Professionals</p>
                                <h3 className="text-lg md:text-xl font-bold text-foreground">HR Aspirants &<br />Early-Career</h3>
                                <p className="text-xs text-foreground/40 max-w-[150px]">Enter the HR profession or advance in early career stages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Participant Benefits */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">
                        What Participants Gain
                    </h2>
                    <div className="space-y-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-6 items-start bg-card p-8 rounded-2xl border border-border shadow-sm">
                                <div className="mt-1">
                                    <CheckCircle2 className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-card-foreground/70 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Difference Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
                        What Makes This Different?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-4">
                            <h4 className="font-bold text-primary mb-2">No passive listening</h4>
                            <p className="text-sm text-foreground/60">Every session is designed for active participation and contribution.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-primary mb-2">High interaction</h4>
                            <p className="text-sm text-foreground/60">Structured networking ensures every participant connects with peers and leaders.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-primary mb-2">Real conversations</h4>
                            <p className="text-sm text-foreground/60">Forget generic talks. Get honest insights into mistakes, growth, and careers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration CTA */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
                        Ready to Accelerate Your HR Career?
                    </h2>
                    <Button asChild variant="white" size="xl" className="rounded-full px-10">
                        <Link href="/contact">
                            Register Now
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
