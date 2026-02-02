import Link from "next/link";
import { Clock, Users, Coffee, Utensils, Award, BookOpen, Cpu, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const fullAgenda = [
    {
        phase: "Phase 1: Morning Foundations",
        items: [
            {
                time: "09:00 – 10:00",
                title: "Registration & Icebreaker",
                icon: <Clock className="h-5 w-5" />,
                description: "Check-in, interactive icebreaker, and formation of functional units and working groups.",
            },
            {
                time: "10:00 – 11:05",
                title: "Session 1: How Do You Get Hired?",
                icon: <BookOpen className="h-5 w-5" />,
                description: "Hiring and promotion criteria, live resume analysis, and mock interviews with industry professionals.",
            },
            {
                time: "11:05 – 11:20",
                title: "High-Intensity Networking Break",
                icon: <Coffee className="h-5 w-5" />,
                description: "Coffee and structured cross-pollination between students and professionals.",
            },
        ],
    },
    {
        phase: "Phase 2: Strategy & Connection",
        items: [
            {
                time: "11:20 – 12:30",
                title: "Session 2: The “Lifecycle” Design Challenge",
                icon: <Users className="h-5 w-5" />,
                description: "Workshop on employee motivation, internal growth, and retention strategies. Team-based strategic thinking.",
            },
            {
                time: "12:30 – 01:25",
                title: "Working Power Lunch",
                icon: <Utensils className="h-5 w-5" />,
                description: "Industry experts sit with participants for open conversations on careers, mistakes, and growth paths.",
            },
        ],
    },
    {
        phase: "Phase 3: Technology & The Future",
        items: [
            {
                time: "01:30 – 02:30",
                title: "Session 3: The Tech & AI Lab",
                icon: <Cpu className="h-5 w-5" />,
                description: "HR software demos (ATS / HRMS) and “Human vs AI” workforce planning debate.",
            },
            {
                time: "02:30 – 03:30",
                title: "Session 4: Strategic Forecasting Panel",
                icon: <Briefcase className="h-5 w-5" />,
                description: "The 2035 workforce, AI–human collaboration, and hyper-personalized growth models.",
            },
            {
                time: "03:30 – 04:00",
                title: "Employer Branding",
                icon: <Users className="h-5 w-5" />,
                description: "Understanding organizational “soul” and how online presence attracts top talent.",
            },
        ],
    },
    {
        phase: "Phase 4: Recognition",
        items: [
            {
                time: "04:00 – 04:30",
                title: "Closing Ceremony",
                icon: <Award className="h-5 w-5" />,
                description: "Awards for best Lifecycle Design, group photos, and LinkedIn networking loop.",
            },
        ],
    },
];

export default function AgendaPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Header */}
            <section className="py-20 bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium mb-6">
                        The Flow
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-foreground mb-6">
                        Event Agenda & Flow
                    </h1>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        A single-day immersive experience designed to bridge academic learning
                        and industry practice through structured interaction.
                    </p>
                </div>
            </section>

            {/* Agenda Section */}
            <section className="py-16 md:py-24 grow">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-16">
                        {fullAgenda.map((phase, phaseIdx) => (
                            <div key={phaseIdx} className="relative">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                                        {phaseIdx + 1}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-foreground uppercase tracking-tight">
                                        {phase.phase}
                                    </h2>
                                </div>

                                <div className="space-y-8 pl-5 md:pl-10 border-l-2 border-primary/20 ml-5">
                                    {phase.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="relative group">
                                            {/* Timeline Dot */}
                                            <div className="absolute -left-[27px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />

                                            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                            {item.icon}
                                                        </div>
                                                        <h3 className="text-xl font-bold text-foreground">
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                                                        {item.time}
                                                    </div>
                                                </div>
                                                <p className="text-card-foreground/70 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-foreground text-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
                        Be part of the founding cohort of Olympus
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
