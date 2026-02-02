import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
    { name: "Prapanch J", phone: "+91 94464 47965" },
    { name: "Nandana Vipin", phone: "+91 75599 10963" },
    { name: "Diya Benny", phone: "+91 83010 73978" },
];

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Header */}
            <section className="py-20 bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium mb-6">
                        Get Started
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-foreground mb-6">
                        Contact & Registration
                    </h1>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        Secure your spot in the founding cohort of Olympus: The HR Icon.
                        Reach out for any queries or partnership opportunities.
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Registration CTA */}
                        <div className="bg-primary text-primary-foreground p-10 md:p-16 rounded-3xl shadow-2xl flex flex-col justify-center text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                Register Now
                            </h2>
                            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
                                Applications for Olympus 2026 are now open. Join 200+ high-potential
                                talents and industry leaders for this flagship experience.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild variant="white" size="xl" className="rounded-full px-10">
                                    <Link href="https://mulearn.org/olympus-register" target="_blank">
                                        Open Registration Form
                                        <ExternalLink className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                            <p className="mt-8 text-xs text-primary-foreground/50 italic">
                                *Founding cohort recognition for all 2026 participants.
                            </p>
                        </div>

                        {/* Event Essentials & Contact */}
                        <div className="space-y-12">
                            {/* Event Essentials */}
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                                    Event Essentials
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-6 bg-muted rounded-2xl border border-border">
                                        <p className="text-xs text-foreground/50 uppercase tracking-widest mb-1">Scale</p>
                                        <p className="font-bold text-foreground">200 Attendees</p>
                                        <p className="text-xs text-foreground/40">120 Students + 80 Pros</p>
                                    </div>
                                    <div className="p-6 bg-muted rounded-2xl border border-border">
                                        <p className="text-xs text-foreground/50 uppercase tracking-widest mb-1">Format</p>
                                        <p className="font-bold text-foreground">Single-Day</p>
                                        <p className="text-xs text-foreground/40">Immersive, Offline-First</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-6">
                                    Direct Support
                                </h3>
                                <div className="space-y-4">
                                    {contacts.map((contact, idx) => (
                                        <a
                                            key={idx}
                                            href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                            className="flex items-center justify-between p-6 bg-card rounded-2xl border border-border hover:border-primary transition-colors group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                    <Phone className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-foreground">{contact.name}</p>
                                                    <p className="text-sm text-foreground/60">{contact.phone}</p>
                                                </div>
                                            </div>
                                            <MessageCircle className="h-5 w-5 text-foreground/20 group-hover:text-primary transition-colors" />
                                        </a>
                                    ))}

                                    <a
                                        href="mailto:hr@mulearn.org"
                                        className="flex items-center gap-4 p-6 bg-muted rounded-2xl border border-border hover:bg-background transition-colors"
                                    >
                                        <div className="p-3 rounded-full bg-foreground/10 text-foreground">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground">Email Us</p>
                                            <p className="text-sm text-foreground/60">hr@mulearn.org</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Statement */}
            <section className="py-20 bg-muted/20 border-t border-border mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-2xl italic font-heading text-foreground/70">
                        "Olympus – Where Leaders Learn to Lead People"
                    </p>
                    <p className="mt-4 text-sm text-foreground/40">
                        Organized by µLearn HR Interest Group
                    </p>
                </div>
            </section>
        </div>
    );
}
