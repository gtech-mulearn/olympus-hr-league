import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://olympus.mulearn.org'),
  title: {
    default: "Olympus – The HR Icon | µLearn",
    template: "%s | Olympus – The HR Icon"
  },
  description: "Olympus – The HR Icon is a hybrid HR and leadership challenge bridging academic learning with real-world corporate decision-making. Organized by µLearn HR Interest Group.",
  keywords: [
    "HR Icon",
    "Olympus",
    "µLearn",
    "Leadership",
    "HR Challenge",
    "Management",
    "Students",
    "Kerala",
    "India",
  ],
  authors: [{ name: "µLearn HR Interest Group", url: "https://mulearn.org" }],
  creator: "µLearn",
  publisher: "µLearn Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Olympus – The HR Icon",
    description: "Bridge academic learning with real-world corporate decision-making",
    url: "/",
    siteName: "Olympus – The HR Icon",
    images: [
      {
        url: "/OG-Image.png",
        width: 1200,
        height: 630,
        alt: "Olympus – The HR Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olympus – The HR Icon",
    description: "Where Leaders Learn to Lead People",
    images: ["/OG-Image.png"],
    creator: "@mulearn", // Update if there is a specific handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
