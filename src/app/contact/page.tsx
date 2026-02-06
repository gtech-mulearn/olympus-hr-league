import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Github className="h-5 w-5" />, href: "#" },
];

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB] text-[#1A1C1E]">
            {/* Playful Duck-Style Hero */}
            <ContactHero />

            {/* Split Pane Contact Section */}
            <section className="py-24 bg-white relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left: Contact Info */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading uppercase tracking-tighter leading-none mb-12">
                                    Contact <span className="text-primary italic">Us.</span>
                                </h2>

                                <div className="space-y-12 mt-12">
                                    <div className="group">
                                        <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Prapanch J</h3>
                                        <div className="flex flex-col gap-1">
                                            <a href="mailto:prjmannar@gmail.com" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">prjmannar@gmail.com</a>
                                            <a href="tel:+919446447965" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">+91 94464 47965</a>
                                            <a href="https://www.linkedin.com/in/prapanch-j-86bb46334" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-2 text-primary font-bold hover:underline">
                                                <Linkedin className="h-5 w-5" />
                                                LinkedIn Profile
                                            </a>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Diya Benny</h3>
                                        <div className="flex flex-col gap-1">
                                            <a href="mailto:diyabenny2k3@gmail.com" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">diyabenny2k3@gmail.com</a>
                                            <a href="tel:+918301073978" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">+91 83010 73978</a>
                                            <a href="https://www.linkedin.com/in/diyabenny" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-2 text-primary font-bold hover:underline">
                                                <Linkedin className="h-5 w-5" />
                                                LinkedIn Profile
                                            </a>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Nandana Vipin</h3>
                                        <div className="flex flex-col gap-1">
                                            <a href="mailto:nandanavipin2022@gmail.com" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">nandanavipin2022@gmail.com</a>
                                            <a href="tel:+917559910963" className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors">+91 75599 10963</a>
                                            <a href="https://www.linkedin.com/in/nandana-vipin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-2 text-primary font-bold hover:underline">
                                                <Linkedin className="h-5 w-5" />
                                                LinkedIn Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Social Links */}
                            <div className="pt-8 flex gap-4">
                                {socialLinks.map((social, i) => (
                                    <Link key={i} href={social.href} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-all">
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right: Modern Underline Form */}
                        <div className="lg:col-span-7">
                            <ContactFormSection />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
