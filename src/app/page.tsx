import Link from "next/link";
import { ArrowRight, Users, Trophy, Target, Sparkles, BookOpen } from "lucide-react";
import LottiePlayer from "@/components/ui/Lottieplayer";
import { Button } from "@/components/ui/button";
import { WhyOlympusScroll } from "@/components/home/WhyOlympusScroll";
import { RegisterButton } from "@/components/RegisterButton";
import Image from "next/image";

const CARESTACK_LOGO = '/assets/carestack-logo.webp';
const HR_EVOLVE_LOGO = '/assets/hr-evolve-logo.webp';
const MULEARN_LOGO = '/assets/mulearn-foundation-logo-black.png';
const GTECH_INDIA_LOGO = '/assets/gtech-logo.svg';

// Fixed logos array structure
const logos = [
  {
    src: CARESTACK_LOGO,
    alt: "CareStack Logo",
    height: 36,// Adjust based on your logo's optimal display size
    link: "https://carestack.com/"
  },
  {
    src: HR_EVOLVE_LOGO,
    alt: "HR Evolve Logo",
    height: 40, // Slightly taller for this logo
    link: "https://hrevolve.org/"
  },
  {
    src: GTECH_INDIA_LOGO,
    alt: "Gtech India Logo",
    height: 36,
    link: "https://www.gtechindia.org/"
  },

  {
    src: MULEARN_LOGO,
    alt: "Mulearn Logo",
    height: 36,
    link: "https://mulearn.org/"
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-svh md:min-h-screen flex flex-col justify-center pt-28 pb-10 md:pt-48 md:pb-32 overflow-hidden">
        {/* Yellow Semi-Circle Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0 md:translate-y-1/4 w-[180vw] aspect-2/1 md:w-[150vw] md:h-[90vh] md:aspect-none lg:w-[100vw] rounded-t-full bg-primary z-0" />

        {/* Birds Lottie Animation */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-1">
          <LottiePlayer src="/animations/birdies.lottie" invert />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Fixed logo display section */}
            <div className="inline-flex items-center gap-4 md:gap-6 px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-primary/20 mb-6 shadow-sm">
              {logos.map((logo, index) => (
                <Link href={logo.link} target="_blank" key={logo.alt} className="flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={logo.height}
                    className="h-6 md:h-10 w-auto object-contain"
                    quality={100}
                    priority
                  />
                  {/* Separator between logos except for the last one */}
                  {index < logos.length - 1 && (
                    <div className="w-px h-8 bg-border/30 ml-4 md:ml-6" />
                  )}
                </Link>
              ))}
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold font-heading text-foreground mb-2 md:mb-4">
              Olympus: The HR Icon
            </h1>
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 md:py-2 mb-3 md:mb-4">
              <p className="text-sm md:text-2xl font-semibold">
                Where Leaders Learn to Lead People
              </p>
            </div>
            <h2 className="text-xl md:text-3xl font-bold font-heading text-foreground/80 mb-4 md:mb-6">
              Flagship HR Experience 2026
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6 md:mb-8 text-foreground/70">
              <div className="flex items-start gap-1 md:gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base">200 Attendees (120 Students + 80 Professionals)</span>
              </div>
            </div>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-6 md:mb-8 px-4 md:px-0">
              Olympus is a flagship HR experience designed to bridge academic learning and industry practice through real-world sessions, expert-led discussions, and meaningful professional connections.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="white" size="xl">
                <RegisterButton className="inline-flex items-center">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </RegisterButton>
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

          <div className="flex flex-col md:relative gap-8 md:gap-0 md:min-h-[800px] lg:min-h-[700px] max-w-6xl mx-auto">
            {/* Empowerment / Authority - Top Center */}
            <div className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 flex flex-col md:flex-row items-end gap-0 z-20 w-full md:w-auto px-4 md:px-0">
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-border max-w-sm relative group hover:border-primary transition-all duration-300 text-center md:text-left">
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
            <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 md:left-[5%] flex flex-col md:flex-row items-end gap-0 z-10 w-full md:w-auto px-4 md:px-0 md:mt-0">
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-border max-w-sm relative group hover:border-primary transition-all duration-300 text-center md:text-left">
                <div className="w-4 h-4 bg-primary absolute top-6 left-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4 mt-4">Flow & Connection</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mx-auto md:mx-0">
                  Experience structured networking and hands-on design challenges that bridge the gap between theory and industry practice.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border -ml-6 -mb-6 hidden md:flex items-center justify-center transition-transform group-hover:scale-110">
                <Users className="h-8 w-8 text-primary/40" />
              </div>
            </div>

            {/* Proven Expertise / Growth - Bottom Right */}
            <div className="md:absolute md:bottom-0 md:right-0 md:right-[5%] flex flex-col md:flex-row items-end gap-0 z-10 w-full md:w-auto px-4 md:px-0 md:mt-0">
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-border max-w-sm relative group hover:border-primary transition-all duration-300 text-center md:text-left">
                <div className="w-4 h-4 bg-primary absolute top-6 left-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4 mt-4">Strategic Growth</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mx-auto md:mx-0">
                  Accelerate your trajectory with peer-to-peer labs and deep-dive audits of modern people management strategies.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border -ml-6 -mb-6 hidden md:flex items-center justify-center transition-transform group-hover:scale-110">
                <Trophy className="h-8 w-8 text-primary/40" />
              </div>
            </div>

            {/* Center decorative element */}
            <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 opacity-5 hidden md:block">
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
      <section className="md:min-h-screen flex flex-col justify-center py-6 bg-background relative overflow-hidden">
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

          {/* Scattered Layout - Mobile: Stacked, Desktop: Scattered */}
          <div className="relative md:min-h-[700px] max-w-6xl mx-auto flex flex-col gap-12 md:block">

            {/* Engineering Students - Top Left */}
            <div className="md:absolute md:top-0 md:left-[5%] flex flex-col items-center md:items-start gap-4">
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
                <p className="text-xs text-foreground/40 max-w-[150px] mx-auto md:mx-0">Exploring management pathways and human-side tech leadership.</p>
              </div>
            </div>

            {/* BBA/MBA Students - Center/Bottom */}
            <div className="md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-4">
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
                <p className="text-xs text-foreground/40 max-w-[200px] mx-auto">Seeking practical exposure to complement theoretical learning.</p>
              </div>
            </div>

            {/* HR Enthusiasts - Top Right */}
            <div className="md:absolute md:top-8 md:right-[5%] flex flex-col items-center md:items-end gap-4">
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
                <p className="text-xs text-foreground/40 max-w-[150px] mx-auto md:mx-0">Enter the HR profession or advance in early career stages.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recognition */}
      {/* Recognition */}
      {/* Recognition */}
      <section className="md:min-h-screen flex flex-col justify-center py-6  bg-linear-to-b from-background to-muted/30 relative overflow-hidden">
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
                <a href="https://mulearn.org/r/olympus_thehrleague" target="_blank" rel="noopener noreferrer">
                  Be Part of Founding Cohort
                </a>
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
