import Image from "next/image";
import { partners } from "@/lib/partners";

export function PartnersSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground">
            Our <span className="text-primary italic">Partners</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            These organisations proudly support Olympus and help make the HR
            Icon possible.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={p.logo}
                alt={p.name}
                height={p.height}
                width={p.width}
                className="object-contain"
                quality={100}
                priority
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
