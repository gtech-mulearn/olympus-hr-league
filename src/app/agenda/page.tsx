"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CurvedTimeline } from "@/components/CurvedTimeline";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ImageModal } from "@/components/ImageModal";

export default function AgendaPage() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const speakers = [
    {
      name: "Vishnu Prasad M ",
      role: "Senior HR Manager, Srishti Innovative",
      session: "The Icebreaker (9:30 AM – 10:00 AM)",
      image: "/assets/speakers/vishnu_prasad.jpeg",
    },
    {
      name: "Smitha S P",
      role: "Senior Manager, Talent Acquisition CareStack",
      session: "How do product companies hire - and why does it matter? (10:00 AM – 11:00 AM)",
      image: "/assets/speakers/smitha_sp.jpeg",
    },
    {
      name: "Justin George",
      role: "Director & Head People Systems, UST",
      session: "HR in AI Era (11:20 AM – 12:20 PM)",
      image: "/assets/speakers/justin_george.jpeg",
    },
    {
      name: "Vishnu Prasad M V",
      role: "Senior HR Manager, Srishti Innovative",
      session: "Moderator - Strategic Forecasting (1:30 PM – 2:30 PM)",
      image: "/assets/speakers/vishnu_prasad.jpeg",
    },
    {
      name: "Jithin Chakkalakkal",
      role: "Head of People & Culture Reflections Info Systems",
      session: "Strategic Forecasting (1:30 PM – 2:30 PM)",
      image: "/assets/speakers/panel_jithin.png",
    },
    {
      name: "Priya Shaji",
      role: "Senior Manager HRBP Equifax Analytics Private Limited",
      session: "Strategic Forecasting (1:30 PM – 2:30 PM)",
      image: "/assets/speakers/panel_priya.png",
    },
    {
      name: "Remya Nair",
      role: "Sr. HR Manager AOT technologies",
      session: "Strategic Forecasting (1:30 PM – 2:30 PM)",
      image: "/assets/speakers/panel_remya.png",
    },
    {
      name: "Vijin V R",
      role: "Assistant Manager People & Culture ReBid",
      session: "Strategic Forecasting (1:30 PM – 2:30 PM)",
      image: "/assets/speakers/panel_vijin.png",
    },
    {
      name: "Nadia Baba",
      role: "Manager, HR Programs, CareStack",
      session: "Employer Branding (3:30 PM – 4:00 PM)",
      image: "/assets/speakers/nadia_baba.jpeg",
    },
    {
      name: "Deepa Nair",
      role: "Senior manager 6D technology",
      session: "Employee Lifecycle (2:30 PM – 3:30 PM)",
      image: "/assets/speakers/deepa.jpeg",
    },
  ];

  return (
    <div className="flex flex-col md:min-h-screen bg-[#0A0D10]">
      {/* Immersive Curved Timeline Section */}
      <CurvedTimeline />

      {/* Event details cards section */}
      <section className="py-20 bg-[#111418] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Event Schedule
          </h2>

          {/* Other speakers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center place-content-center mb-16">
            {speakers
              .filter(
                (sp) =>
                  ![
                    "Vishnu Prasad M V",
                    "Jithin Chakkalakkal",
                    "Priya Shaji",
                    "Remya Nair",
                    "Vijin V R",
                  ].includes(sp.name),
              )
              .map((sp) => (
                <Card
                  key={sp.name}
                  variant="interactive"
                  showDecorativeLines
                  className="text-center"
                >
                  <div
                    onClick={() => setSelectedImage(sp.image)}
                    className="relative w-full h-48 sm:h-56 md:h-64 mb-4 rounded-lg overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={sp.image}
                      alt={sp.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    {sp.session && (
                      <CardTitle className="uppercase text-base">
                        {sp.session}
                      </CardTitle>
                    )}
                    <CardDescription className="font-semibold">
                      {sp.name}
                    </CardDescription>
                    <CardDescription className="text-xs opacity-70">
                      {sp.role}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>

          {/* Panel Discussion highlight */}
          <div className="text-center mb-8 mt-8">
            <h3 className="text-4xl font-bold">Panel Discussion</h3>
            <p className="text-lg opacity-80 mt-2">
              Strategic Forecasting (1:30 PM – 2:30 PM)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {speakers
              .filter((sp) =>
                [
                  "Vishnu Prasad M V",
                  "Jithin Chakkalakkal",
                  "Priya Shaji",
                  "Remya Nair",
                  "Vijin V R",
                ].includes(sp.name),
              )
              .map((sp) => (
                <Card
                  key={sp.name}
                  variant="interactive"
                  showDecorativeLines
                  className="text-center"
                >
                  <div
                    onClick={() => setSelectedImage(sp.image)}
                    className="relative w-full h-48 sm:h-56 md:h-64 mb-4 rounded-lg overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={sp.image}
                      alt={sp.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    {sp.session && (
                      <CardTitle className="uppercase text-base">
                        {sp.session}
                      </CardTitle>
                    )}
                    <CardDescription className="font-semibold">
                      {sp.name}
                    </CardDescription>
                    <CardDescription className="text-xs opacity-70">
                      {sp.role}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Image modal for full view */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          src={selectedImage}
          alt="speaker photo"
          onClose={() => setSelectedImage(null)}
        />
      )}

      {/* Footer CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
            Want the highlights from each session?
          </h2>
          <Button
            asChild
            variant="white"
            size="xl"
            className="rounded-full px-10"
          >
            <Link href="/gallery">View Event Moments</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
