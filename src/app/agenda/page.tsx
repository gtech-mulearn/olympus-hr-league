"use client";

import React from "react";
import Image from "next/image";
import { CurvedTimeline } from "@/components/CurvedTimeline";
import { RegisterButton } from "@/components/RegisterButton";
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
      name: "Vishnu Prasad M V",
      role: "Senior HR Manager, Srishti Innovative",
      session: "The Icebreaker (9:30 AM – 10:00 AM)",
      image: "/assets/speakers/vishnu_prasad.jpeg",
    },
    {
      name: "Smitha S P",
      role: "Senior Manager, Talent Acquisition CareStack",
      session: "How to Hire (10:00 AM – 11:00 AM)",
      image: "/assets/speakers/smitha_sp.jpeg",
    },
    {
      name: "Justin George",
      role: "Director & Head People Systems, UST",
      session: "HR in AI Era (11:20 AM – 12:20 PM)",
      image: "/assets/speakers/justin_george.jpeg",
    },
    {
      name: "Strategic Forecasting Panel",
      role: "Panel discussion with industry experts",
      session: "Strategic Forecasting (1:30 PM – 2:30 PM)",
      image: "/assets/speakers/panel_discussion.jpeg",
    },
    {
      name: "Nadia Baba",
      role: "Manager, HR Programs, CareStack",
      session: "Employer Branding (3:30 PM – 4:00 PM)",
      image: "/assets/speakers/nadia_baba.jpeg",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {speakers.map((sp) => (
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
            Be part of the founding cohort of Olympus
          </h2>
          <Button
            asChild
            variant="white"
            size="xl"
            className="rounded-full px-10"
          >
            <RegisterButton>Register Now</RegisterButton>
          </Button>
        </div>
      </section>
    </div>
  );
}
