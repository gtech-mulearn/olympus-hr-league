"use client"
import Link from "next/link";
import { ArrowRight, Users, Trophy, Target, Sparkles, Zap, Shield, Cpu, BookOpen, Coffee, Utensils, Award, Briefcase } from "lucide-react";
import LottiePlayer from "@/components/ui/Lottieplayer";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const whyOlympusCards = [
  {
    title: "Real-World Scenarios",
    description: "Equip with authentic HR insights that go beyond textbook knowledge. Navigate complex workplace dynamics through structured simulations.",
    bg: "bg-[#FDF6E3]", // Cream
    accent: "bg-[#2D5A27]", // Deep Green
    pattern: (
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2D5A27] rotate-45 translate-x-16 translate-y-16" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-[#2D5A27] rounded-full" />
      </div>
    )
  },
  {
    title: "Crisis-Ready Leaders",
    description: "Build leaders capable of acting when people matter the most. Develop the emotional intelligence and strategic grit required for high-stakes decisions.",
    bg: "bg-white",
    accent: "bg-[#D4A017]", // Gold
    pattern: (
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
        <div className="absolute bottom-0 right-0 w-40 h-12 bg-[#D4A017] -rotate-12 translate-x-10 translate-y-10" />
        <div className="absolute bottom-12 right-20 w-12 h-40 bg-[#D4A017] rotate-12 translate-x-10 translate-y-10" />
      </div>
    )
  },
  {
    title: "Meaningful Connections",
    description: "Create lasting mentorship opportunities and professional relationships. Bridge the gap between emerging talent and established industry icons.",
    bg: "#F5F3FF", // Soft Purple/Pink hint
    accent: "bg-[#8B5CF6]", // Purple
    pattern: (
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#8B5CF6] rounded-full scale-125" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#FDF6E3] rounded-full" />
      </div>
    )
  }
];

function WhyOlympusScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-xl">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="text-primary mb-4">
              <title>Decorative zigzag pattern</title>
              <path d="M0 0L5 6L10 0L15 6L20 0L25 6L30 0L35 6L40 0" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 6L5 12L10 6L15 12L20 6L25 12L30 6L35 12L40 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-foreground uppercase tracking-tight mb-4">
              Why Olympus <br />
              <span className="text-primary">Exists</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Bridging theory with the complexities of modern people management through real-world exposure and strategic connection.
            </p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-4 md:px-[10%]">
          {whyOlympusCards.map((card, idx) => (
            <div
              key={idx}
              className={`relative shrink-0 w-[85vw] md:w-[600px] h-[400px] md:h-[500px] rounded-[40px] p-8 md:p-12 overflow-hidden shadow-2xl border border-border flex flex-col justify-between ${card.bg.startsWith('bg-') ? card.bg : ''}`}
              style={{ backgroundColor: !card.bg.startsWith('bg-') ? card.bg : undefined }}
            >
              {card.pattern}

              <div className="relative z-10 flex flex-col h-full">
                <div className="mt-auto">
                  <div className={`w-12 h-1 gap-1 mb-6 ${card.accent}`} />
                  <h3 className="text-3xl md:text-5xl font-extrabold font-heading text-foreground mb-6 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="relative shrink-0 w-[85vw] md:w-[600px] h-[400px] md:h-[500px] rounded-[40px] p-8 md:p-12 bg-foreground flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold font-heading text-background mb-8 leading-tight">
              Ready to Lead?
            </h3>
            <Button asChild variant="white" size="xl" className="rounded-full px-10">
              <Link href="/about">
                About Olympus
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-20 md:py-32 overflow-hidden">
        {/* Yellow Semi-Circle Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-[70vw] h-[80vh] md:w-[80vw] md:h-[90vh] rounded-t-full bg-primary z-0" />

        {/* Birds Lottie Animation */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-1">
          <LottiePlayer src="/animations/birdies.lottie" invert />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-primary mb-6">
              <Sparkles className="h-4 w-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">
                Founding Cohort Registrations Open
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-foreground mb-4">
              Olympus: The HR Icon
            </h1>
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 mb-4">
              <p className="text-xl md:text-2xl font-semibold">
                Where Leaders Learn to Lead People
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground/80 mb-6">
              Flagship HR Experience 2026
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-foreground/70">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>200 Attendees (120 Students + 80 Professionals)</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <span>µLearn HR Interest Group</span>
              </div>
            </div>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Olympus is a flagship HR experience designed to bridge academic learning and industry practice through real-world sessions, expert-led discussions, and meaningful professional connections.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="white" size="xl">
                <Link href="/contact">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="xl">
                <Link href="/agenda">
                  View Full Agenda
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Olympus Exists - Horizontal Scroll Section */}
      <WhyOlympusScroll />

      {/* What to Expect at Olympus - Custom Scattered Layout */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium mb-6">
              Program Details
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-foreground leading-tight uppercase tracking-tight">
              What to Expect <br />
              <span className="text-primary">at Olympus</span>
            </h2>
          </div>

          <div className="relative min-h-[800px] md:min-h-[700px] max-w-6xl mx-auto">
            {/* Empowerment / Authority - Top Center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-end gap-0 z-20 w-full md:w-auto px-4 md:px-0">
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-border max-w-sm relative group hover:border-primary transition-all duration-300">
                <div className="w-4 h-4 bg-primary absolute top-6 left-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4 mt-4">Authority & Insights</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Gain direct access to industry leaders through panels, labs, and interactive sessions that reveal the "organizational soul".
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border -ml-6 -mb-6 hidden md:flex items-center justify-center transition-transform group-hover:scale-110">
                <BookOpen className="h-8 w-8 text-primary/40" />
              </div>
            </div>

            {/* Customized Strategies / Flow - Middle Left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-[5%] flex flex-col md:flex-row items-end gap-0 z-10 w-full md:w-auto px-4 md:px-0 mt-8 md:mt-0">
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-border max-w-sm relative group hover:border-primary transition-all duration-300">
                <div className="w-4 h-4 bg-primary absolute top-6 left-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4 mt-4">Flow & Connection</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Experience structured networking and hands-on design challenges that bridge the gap between theory and industry practice.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border -ml-6 -mb-6 hidden md:flex items-center justify-center transition-transform group-hover:scale-110">
                <Users className="h-8 w-8 text-primary/40" />
              </div>
            </div>

            {/* Proven Expertise / Growth - Bottom Right */}
            <div className="absolute bottom-0 right-0 md:right-[5%] flex flex-col md:flex-row items-end gap-0 z-10 w-full md:w-auto px-4 md:px-0 mt-8 md:mt-0">
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-border max-w-sm relative group hover:border-primary transition-all duration-300">
                <div className="w-4 h-4 bg-primary absolute top-6 left-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4 mt-4">Strategic Growth</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Accelerate your trajectory with peer-to-peer labs and deep-dive audits of modern people management strategies.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border -ml-6 -mb-6 hidden md:flex items-center justify-center transition-transform group-hover:scale-110">
                <Trophy className="h-8 w-8 text-primary/40" />
              </div>
            </div>

            {/* Center decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 hidden md:block">
              <Target className="w-96 h-96 text-foreground" />
            </div>
          </div>

          <div className="text-center mt-20 relative z-30">
            <Button asChild variant="secondary" size="xl" className="rounded-full px-10 shadow-lg">
              <Link href="/agenda">
                View Full Agenda
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who Should Participate */}
      <section className="min-h-screen flex flex-col justify-center py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-4">
              Who Should Participate
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Olympus is designed for ambitious individuals ready to bridge the gap between academic learning and professional excellence.
            </p>
          </div>

          {/* Scattered Layout */}
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

      {/* Recognition */}
      {/* Recognition */}
      <section className="min-h-screen flex flex-col justify-center py-20 md:py-32 bg-linear-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Floating Trophy Composition */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 scale-150 rounded-full border border-primary/10 animate-pulse" />
              <div className="absolute inset-0 scale-125 rounded-full border border-primary/20" />

              {/* Main trophy container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-2xl">
                <div className="absolute inset-2 rounded-full bg-linear-to-br from-primary to-primary/80 flex items-center justify-center shadow-inner">
                  <Trophy className="h-12 w-12 md:h-16 md:w-16 text-primary-foreground drop-shadow-lg" />
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 blur-sm" />
              <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-primary/20 blur-sm" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-foreground/10" />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-foreground/50 mb-4">
              ★ Recognition & Awards
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground leading-tight mb-6">
              A simple path to
              <br />
              <span className="text-primary">People Champion</span>
            </h2>

            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Top performers earn the prestigious People Champion title,
              recognizing exceptional leadership, ethical decision-making,
              and the ability to inspire others.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="default" size="xl" className="rounded-full px-8">
                <Link href="/contact">
                  Be Part of Founding Cohort
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full px-8">
                <Link href="/agenda">
                  View Agenda
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
