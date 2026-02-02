import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { StackedCards } from "@/components/StackedCards";

export const metadata: Metadata = {
  title: "About Olympus: The HR Icon | µLearn",
  description:
    "Olympus is a flagship HR experience designed to bridge academic learning and industry practice through real-world sessions and expert-led discussions.",
};

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
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground leading-tight mb-6">
                Olympus
                <br />
                <span className="text-primary">The HR Icon</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed mb-8 max-w-xl">
                Olympus is an inaugural flagship HR initiative designed to bridge the critical gap between academic theory and industry practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" size="xl" className="rounded-full">
                  <Link href="/agenda">
                    View Agenda
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="rounded-full">
                  <Link href="/contact">
                    Contact & Register
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Vision Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-3 scale-105 opacity-20" />
              <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-card-foreground mb-4">
                  The Concept
                </h2>
                <p className="text-card-foreground/70 leading-relaxed">
                  Olympus brings together students and professionals in a dynamic environment where real-world challenges meet cutting-edge HR innovation. We focus on interaction, not lectures.
                </p>
              </div>
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

      {/* What Makes Olympus Different */}
      <section className="min-h-screen flex flex-col justify-center py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-foreground leading-tight mb-6">
                What Makes Olympus
                <br />
                <span className="text-primary">Different</span>
              </h2>

              <p className="text-xl md:text-2xl font-semibold text-foreground/80 mb-6">
                Real dilemmas. Real constraints.
                <br />
                Real leadership decisions.
              </p>

              <p className="text-foreground/60 mb-8 max-w-md leading-relaxed">
                Unlike traditional case studies, Olympus puts you in the driver's seat
                of complex HR scenarios where there are no perfect answers—only
                thoughtful, ethical choices that reveal your leadership character.
              </p>

              <Button asChild variant="default" size="xl" className="rounded-full">
                <Link href="/agenda">
                  Explore the Agenda
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Right: Photo Grid with Diamond Center */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Diamond in center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rotate-45 z-10" />

              <div className="grid grid-cols-2">
                {/* Top Left - with yellow circle accent */}
                <div className="relative -mr-4 -mb-4 z-1">
                  <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full bg-primary -z-10" />
                  <div className="w-full aspect-square rounded-full overflow-hidden bg-muted border-4 border-muted/30">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
                      alt="Professional woman"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>

                {/* Top Right */}
                <div className="w-full aspect-square rounded-full overflow-hidden bg-muted -ml-4 -mb-4 z-2 border-4 border-muted/30">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Professional man"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Bottom Left */}
                <div className="w-full aspect-square rounded-full overflow-hidden bg-muted -mr-4 -mt-4 z-3 border-4 border-muted/30">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
                    alt="Professional woman smiling"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Bottom Right */}
                <div className="w-full aspect-square rounded-full overflow-hidden bg-muted -ml-4 -mt-4 z-4 border-4 border-muted/30">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                    alt="Professional man smiling"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
