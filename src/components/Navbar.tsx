"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/agenda", label: "Agenda" },
  { href: "/gallery", label: "Gallery" },
  { href: "/participants", label: "Participants" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
      <div className="container max-w-7xl px-4 pointer-events-auto">
        <div className="bg-white/90 md:bg-white/70 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-6 py-2 md:py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-black font-heading text-[#1A1C1E] tracking-tighter uppercase group-hover:text-primary transition-colors">
              Olympus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-black uppercase tracking-widest transition-all hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-[#1A1C1E]/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/gallery"
              className="hidden lg:inline-flex items-center justify-center rounded-full bg-[#1A1C1E] px-6 py-2.5 text-xs font-black uppercase tracking-widest text-primary shadow-lg hover:bg-black transition-all hover:scale-105 active:scale-95"
            >
              Gallery
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-[#1A1C1E] hover:bg-[#1A1C1E]/5 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Pill */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 bg-white/90 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-black uppercase tracking-widest py-2 transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
