"use client"
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { StackedCards } from "@/components/StackedCards";
import { ElevatedEmblem } from "@/components/ElevatedEmblem";


const objectives = [
  {
    iconName: "Target",
    title: "Real-World Scenarios",
    description:
      "Equip participants with authentic, industry-relevant HR insights that go beyond textbook knowledge.",
  },
  {
    iconName: "Shield",
    title: "Crisis-Ready Leaders",
    description:
      "Build leaders capable of acting when 'people matter the most', making critical decisions with empathy.",
  },
  {
    iconName: "Users",
    title: "Meaningful Connections",
    description:
      "Create lasting mentorship opportunities and real-world exposure that extend beyond the event.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Reference Inspired Split Layout */}
      <section className="relative min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden bg-background">
        {/* Inverted Pyramid Grid Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
          <div className="grid grid-cols-7 md:grid-cols-11 gap-px opacity-20">
            {Array.from({ length: 121 }).map((_, i) => {
              const row = Math.floor(i / 11);
              const col = i % 11;
              const center = 5;
              const dist = Math.abs(col - center);

              // Create the stepped/pyramid logic
              const isVisible = row <= 5 - dist;

              if (!isVisible) return <div key={i} className="aspect-square" />;

              return (
                <div
                  key={i}
                  className="aspect-square bg-linear-to-b from-primary/60 to-primary/5 border border-primary/20 backdrop-blur-[2px]"
                  style={{
                    opacity: 1 - (row * 0.15),
                    transform: `translateY(${row * 4}px)`
                  }}
                />
              );
            })}
          </div>
          {/* Subtle glow behind the pyramid */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-primary/10 blur-[120px] rounded-full -z-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          {/* Top Label */}
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-bold mb-4">
              Flagship Initiative
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-primary/30" />
              <span className="text-sm font-medium text-foreground tracking-widest">OLYMPUS 2026</span>
              <div className="h-px w-12 bg-primary/30" />
            </div>
          </div>

          {/* Central Asset Container */}
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center mb-16">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-20 w-full h-full"
            >
              <ElevatedEmblem />
            </motion.div>

            {/* Background halo */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px] scale-150 -z-10" />
          </div>

          {/* Central CTA */}
          <div className="mb-24 scale-110">
            <Button asChild variant="default" size="xl" className="rounded-full px-12 py-8 text-lg font-bold shadow-[0_15px_30px_rgba(248,197,56,0.2)] group overflow-hidden relative">
              <Link href="/contact" className="relative z-10 flex items-center gap-2">
                Start the Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Bottom Content Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full max-w-6xl mt-auto">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-foreground mb-4 uppercase tracking-tighter">
                Olympus: <br />
                <span className="text-primary">The HR Icon</span>
              </h2>
              <p className="text-foreground/60 leading-relaxed max-w-sm">
                An inaugural flagship HR initiative designed to bridge the critical gap between academic theory and industry practice.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-foreground mb-4 uppercase tracking-tighter">
                The <br />
                <span className="text-primary">Concept</span>
              </h2>
              <p className="text-foreground/60 leading-relaxed max-w-sm">
                Olympus brings together students and professionals in a dynamic environment where real-world challenges meet cutting-edge innovation.
              </p>
              <Link href="/agenda" className="inline-flex items-center gap-2 text-sm font-bold mt-4 hover:text-primary transition-colors text-foreground/80">
                View detailed agenda <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives - Stacked Cards */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium mb-6">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground leading-tight mb-6">
              The Vision Pillars
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Our mission is driven by three core pillars that define the Olympus experience.
            </p>
          </div>

          <StackedCards
            cards={objectives.map((obj, index) => ({
              number: String(index + 1).padStart(2, '0'),
              title: obj.title,
              description: obj.description,
              iconName: obj.iconName,
            }))}
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* What we're really good at - Reference Inspired Layout */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading text-foreground leading-tight tracking-tighter mb-4">
              What Makes Olympus <br />
              <span className="relative inline-block px-4">
                Different
                <svg className="absolute inset-0 -m-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] text-primary opacity-40 -z-10" viewBox="0 0 400 150" fill="none" preserveAspectRatio="none">
                  <path d="M30,75 C30,30 200,30 370,75 C370,120 200,120 30,75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <path d="M50,85 C50,45 180,45 350,85 C350,125 180,125 50,85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="10 5" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-8 items-start relative max-w-7xl mx-auto md:min-h-[500px]">
            {/* Card 1 - Pinned/Highest */}
            <div className="w-full sm:w-[280px] bg-secondary p-8 rounded-sm shadow-2xl transform md:-translate-y-12 hover:scale-105 transition-all duration-300">
              <div className="h-48 md:h-56 mb-8 flex items-center justify-center">
                {/* Abstract Artistic SVG - Tornado/Spiral */}
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-primary">
                  <path d="M50 85 L50 20 M30 30 L70 30 M35 45 L65 45 M40 60 L60 60 M45 75 L55 75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <path d="M10 20 C10 10 90 10 90 20 C90 30 10 30 10 40 C10 50 90 50 90 60 C90 70 10 70 10 80" stroke="currentColor" strokeWidth="2" fill="none" strokeOpacity="0.3" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-4 uppercase leading-tight">Strategic <br /> Depth</h3>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                Analyzing the "organizational soul" and ethical gray areas.
              </p>
            </div>

            {/* Card 2 - Middle Offset */}
            <div className="w-full sm:w-[280px] bg-secondary p-8 rounded-sm shadow-2xl hover:scale-105 transition-all duration-300 z-10">
              <h3 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-8 uppercase leading-tight">Crisis <br /> Leadership</h3>
              <div className="h-48 md:h-56 mb-8 flex items-center justify-center">
                {/* Abstract Artistic SVG - Magnet/U-shape */}
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-primary">
                  <path d="M30 30 V60 C30 75 70 75 70 60 V30" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <rect x="25" y="20" width="10" height="15" fill="currentColor" rx="1" />
                  <rect x="65" y="20" width="10" height="15" fill="currentColor" rx="1" />
                  <path d="M40 70 H60" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-20" />
                </svg>
              </div>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                Building leaders capable of acting when people matter the most.
              </p>
            </div>

            {/* Card 3 - Lowest Offset */}
            <div className="w-full sm:w-[280px] bg-secondary p-8 rounded-sm shadow-2xl transform md:translate-y-12 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-8 uppercase leading-tight">Meaningful <br /> Flow</h3>
              <div className="h-48 md:h-56 mb-8 flex items-center justify-center">
                {/* Abstract Artistic SVG - Rainbow/Bridge */}
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-primary">
                  <path d="M20 70 C20 30 80 30 80 70" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <path d="M35 70 C35 45 65 45 65 70" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <circle cx="20" cy="70" r="6" fill="currentColor" />
                  <circle cx="80" cy="70" r="6" fill="currentColor" />
                </svg>
              </div>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                Creating lasting professional mentorships through structured growth.
              </p>
            </div>
          </div>

          <div className="mt-20 md:mt-32 text-center">
            <Button asChild variant="secondary" size="xl" className="rounded-full shadow-xl">
              <Link href="/agenda" className="flex items-center gap-2">
                Explore the Full Agenda <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
