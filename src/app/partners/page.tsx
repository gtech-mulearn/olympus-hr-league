import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

import { partners } from "@/lib/partners";

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#1A1C1E]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#1A1C1E] text-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6">
            Collaborators
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-6 uppercase tracking-tighter">
            Our <span className="text-primary italic">Partners</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
            The visionary pillars supporting Olympus – The HR Icon. Together,
            redefining the future of HR.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Partners Grid Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {partners.map((partner) => {
              const CardWrapper = partner.link ? "a" : "div";
              return (
                <CardWrapper
                  key={partner.name}
                  {...(partner.link
                    ? {
                        href: partner.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="group relative bg-[#1A1C1E] text-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/5 overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <p className="text-sm font-bold text-primary tracking-widest uppercase mb-6 relative z-10">
                    {partner.role}
                  </p>

                  <div className="relative w-full h-32 mb-6 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={partner.logoDark || partner.logo}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="text-xl font-black font-heading tracking-tight relative z-10">
                    {partner.name}
                  </h3>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-[#1A1C1E] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-10 uppercase tracking-tighter">
            WANT TO PARTNER <br />
            <span className="text-primary italic">WITH US?</span>
          </h2>
          <div className="flex flex-col items-center">
            <Button
              asChild
              size="xl"
              className="rounded-2xl px-12 h-16 text-lg font-bold group"
            >
              <a
                href={siteConfig.links.partnerRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                Become a Partner
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="mt-6 text-sm text-white/60">
              Questions? Email us at{" "}
              <a
                href="mailto:partners@mulearn.org"
                className="text-primary hover:underline transition-all"
              >
                partners@mulearn.org
              </a>
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[150px] rounded-full translate-x-1/2 translate-y-[-20%]" />
      </section>
    </div>
  );
}
