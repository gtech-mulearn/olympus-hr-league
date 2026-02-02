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

import { CurvedTimeline } from "@/components/CurvedTimeline";

export default function AgendaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#0A0D10]">
            {/* Immersive Curved Timeline Section */}
            <CurvedTimeline />



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
