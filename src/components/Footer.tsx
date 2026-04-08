import { Phone } from "lucide-react";

const contacts = [
  { name: "Prapanch J", phone: "+91 94464 47965" },
  { name: "Nandana Vipin", phone: "+91 75599 10963" },
  { name: "Diya Benny", phone: "+91 83010 73978" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Careers/About */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-background text-foreground text-xs font-medium mb-4">
              Organised By
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-heading mb-2">
              HR Interest Group
            </h3>
            <p className="text-background/70 text-sm mb-4">
              by µLearn Foundation
            </p>
          </div>

          {/* Office/Location */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-background/10 text-background text-xs font-medium mb-4">
              Event Venue
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-heading mb-2">
              CareStack, Technopark Phase III
            </h3>
            <p className="text-background/70 text-sm">
              Trivandrum, Kerala 695583
            </p>
            <a
              href="https://maps.app.goo.gl/KQmCNqoM62XBN6Mn7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
            >
              Get Location Directions
            </a>
          </div>

          {/* Contact */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-background text-foreground text-xs font-medium mb-4">
              Contact
            </span>
            <div className="space-y-2 mb-4">
              {contacts.map((contact) => {
                const phoneWithoutSpaces = contact.phone.replace(/\s+/g, "");
                const whatsappUrl = `https://wa.me/${phoneWithoutSpaces}?text=Hi%20${contact.name.replace(/\s+/g, "%20")}%2C%20I%27m%20interested%20in%20Olympus`;
                return (
                  <div key={contact.name} className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors underline underline-offset-2 text-decoration-none"
                    >
                      {contact.name}: {contact.phone}
                    </a>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-background/50 mb-4">
              *Reach out for any queries or support
            </p>

            {/* Social Icons */}
            {/* <div className="flex items-center gap-3">
              <Link href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
            </div> */}
          </div>

          {/* Ticketing partner section intentionally removed post-event */}
        </div>
      </div>

      {/* Large OLYMPUS Cursive Text */}
      <div className="relative w-full pb-6">
        {/* Using inline style for cursive font - Pacifico from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <h2
          className="text-[18vw] md:text-[15vw] lg:text-[12vw] text-primary leading-none text-center select-none whitespace-nowrap"
          style={{
            fontFamily: "'Pacifico', cursive",
            letterSpacing: "0.02em",
          }}
        >
          olympus
        </h2>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-background/10 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Olympus: The HR Icon</p>
          <p>
            Organized by{" "}
            <a
              href="https://mulearn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold"
            >
              µLearn HR Interest Group
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
