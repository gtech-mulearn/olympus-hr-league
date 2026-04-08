"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StatItem } from "./StatItem";

const gains = [
  {
    label: "100%",
    sublabel: "Real-World Mastery",
    detail:
      "Direct exposure to authentic HR scenarios and workplace challenges.",
  },
  {
    label: "Elite",
    sublabel: "Industry Access",
    detail: "Face-to-face mentorship with seasoned global HR leaders.",
  },
  {
    label: "Olympus",
    sublabel: "Alumni Network",
    detail: "Continued community access with peers, mentors, and collaborators.",
  },
  {
    label: "Strategic",
    sublabel: "Career Growth",
    detail: "Accelerated pathway to leadership through authority and flow.",
  },
];

export function ParticipantHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* High-Fidelity Grid: Continuous Flow & Absolute Separation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 items-start relative max-w-6xl mx-auto">
          {/* 1. Header Column (Left) */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="pr-4"
            >
              <h1 className="text-5xl md:text-7xl lg:text-[50px] font-black font-heading leading-[0.85] tracking-tighter uppercase text-[#1A1C1E]">
                UPHOLDING THE <br />
                FOUNDATIONS OF <br />
                <span className="text-primary italic">AUTHORITY & FLOW</span>
              </h1>
            </motion.div>
          </div>

          {/* 2. Subtext Column (Right) */}
          <div className="lg:col-span-12 xl:col-span-5 lg:text-right flex flex-col justify-end xl:pb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-md ml-auto"
            >
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-semibold">
                We merge immersive pedagogy with professional execution to
                create impactful HR leaders. Olympus is a meticulously designed
                ecosystem that redefines the boundaries of modern people
                management.
              </p>
            </motion.div>
          </div>

          {/* 3. The Visionary Liquid Track (Center-Right focused) */}
          <div className="lg:col-span-10 relative mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative w-full h-[350px] md:h-[500px] z-10"
            >
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: "url(#fluidSnakeMask)",
                }}
              >
                <Image
                  src="/participants-hero.png"
                  alt="Olympus Visionary Growth"
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-black/10" />
              </div>
            </motion.div>
          </div>

          {/* 4. Strategic Context Stat (Right Pocket) */}
          <div className="lg:col-span-2 pt-20 flex justify-center lg:justify-end">
            <StatItem {...gains[3]} />
          </div>

          {/* 5. Core Value Statistics (Bottom Row - Absolute Separation) */}
          <div className="lg:col-span-12 lg:mt-12 col-span-1">
            <div className="flex flex-col md:flex-row justify-around items-center gap-12 lg:pr-[20%]">
              <StatItem {...gains[0]} />
              <StatItem {...gains[1]} />
              <StatItem {...gains[2]} />
            </div>
          </div>

          {/* Liquid Track SVG ClipPath Definition */}
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <clipPath id="fluidSnakeMask" clipPathUnits="objectBoundingBox">
                {/* A continuous organic meander path: 3 tiers with large smooth radii */}
                <path
                  d="
                                    M 0,0.1 
                                    H 0.82 
                                    C 0.95,0.1 0.95,0.4 0.82,0.4 
                                    H 0.18 
                                    C 0.05,0.4 0.05,0.7 0.18,0.7 
                                    H 1 
                                    V 0.9 
                                    H 0.18 
                                    C 0,0.9 0,0.5 0.18,0.5 
                                    H 0.82 
                                    C 1,0.5 1,0.1 0.82,0.1 
                                    L 0,0.1 
                                    Z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
