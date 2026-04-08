"use client";

import Link from "next/link";

interface RegisterButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function RegisterButton({ children, className }: RegisterButtonProps) {
  return (
    <Link
      href="/gallery"
      className={className ?? ""}
      aria-label="Open Olympus event gallery"
    >
      {children}
    </Link>
  );
}
