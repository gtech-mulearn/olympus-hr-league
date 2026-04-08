import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const sharedMetadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  openGraph: {
    title: "Olympus – The HR Icon",
    description:
      "Bridge academic learning with real-world corporate decision-making",
    type: "website",
    url: siteConfig.url,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

sharedMetadata.description =
  "Olympus - The HR Icon was a flagship HR and leadership experience. Explore the highlights, speakers, and gallery moments from Olympus 2026.";

if (sharedMetadata.openGraph) {
  sharedMetadata.openGraph.description =
    "Relive Olympus 2026 through sessions, speakers, and gallery highlights";
}

if (sharedMetadata.twitter) {
  sharedMetadata.twitter.description = "Highlights, speakers, and moments from Olympus 2026";
}
