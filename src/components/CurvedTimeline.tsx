"use client";
import {
  type MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

interface Phase {
  id: string;
  time: string;
  title: string;
  description: string;
}

const phases: Phase[] = [
  {
    id: "01",
    time: "09:00 AM – 09:30 AM",
    title: "Registration",
    description:
      "Arrival, check‑in and informal mingling ahead of the inauguration ceremony.",
  },
  {
    id: "02",
    time: "09:20 AM – 09:30 AM",
    title: "Introduction & Welcome",
    description:
      "Small inauguration ceremony and official opening remarks.",
  },
  {
    id: "03",
    time: "09:30 AM – 10:00 AM",
    title: "The Icebreaker",
    description:
      "Facilitated activity led by Vishnu Prasad M V (Senior HR Manager, Srishti Innovative) to get everyone talking.",
  },
  {
    id: "04",
    time: "10:00 AM – 11:00 AM",
    title: "How to Hire",
    description:
      "Smitha S P (Senior Manager, Talent Acquisition CareStack) covers hiring criteria, resume analysis and mock interviews.",
  },
  {
    id: "05",
    time: "11:00 AM – 11:20 AM",
    title: "High‑Intensity Networking Break",
    description:
      "Quick coffee break designed for cross‑pollination between students and professionals.",
  },
  {
    id: "06",
    time: "11:20 AM – 12:20 PM",
    title: "HR in AI Era",
    description:
      "Justin George (Director & Head People Systems, UST) explores the impact of AI on HR practices.",
  },
  {
    id: "07",
    time: "12:20 PM – 01:25 PM",
    title: "Working Power Lunch",
    description:
      "Lunch‑with‑experts format – a networking meal where students sit with professionals to discuss careers and industry topics.",
  },
  {
    id: "08",
    time: "01:30 PM – 02:30 PM",
    title: "Strategic Forecasting Panel",
    description:
      "Panel moderated by Vishnu Prasad M V with industry leaders debating workforce planning and succession through 2035.",
  },
  {
    id: "09",
    time: "02:30 PM – 03:30 PM",
    title: "Employee Lifecycle",
    description:
      "Deep dive session led by Deepa Nair (Senior Manager, 6D Technologies) on stages from hire to retire.",
  },
  {
    id: "10",
    time: "03:30 PM – 04:00 PM",
    title: "Employer Branding",
    description:
      "Nadia Baba (Manager, HR Programs CareStack) discusses how culture and online presence attract talent.",
  },
  {
    id: "11",
    time: "04:00 PM – 04:30 PM",
    title: "Closing Ceremony",
    description:
      "Experience sharing, thank‑you notes and a final call‑to‑action to connect on LinkedIn and complete the external branding loop.",
  },
];

// Extracted component to fix "hooks inside loop" lint error
const TimelineItem = ({
  phase,
  index,
  totalPhases,
  smoothProgress,
}: {
  phase: Phase;
  index: number;
  totalPhases: number;
  smoothProgress: MotionValue<number>;
}) => {
  const itemProgress = index / (totalPhases - 1);
  const opacity = useTransform(
    smoothProgress,
    [itemProgress - 0.04, itemProgress, itemProgress + 0.04],
    [0, 1, 0],
  );
  const y = useTransform(
    smoothProgress,
    [itemProgress - 0.04, itemProgress, itemProgress + 0.04],
    [20, 0, -20],
  );
  const scale = useTransform(
    smoothProgress,
    [itemProgress - 0.03, itemProgress, itemProgress + 0.03],
    [0.96, 1, 0.96],
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-x-0 top-0 flex flex-col items-center"
    >
      <p className="text-xs font-bold tracking-[0.5em] uppercase text-primary mb-5">
        {phase.time}
      </p>
      <h3 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-[0.9] text-white">
        {phase.title}
      </h3>
      <p className="text-gray-400 text-sm md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto opacity-80">
        {phase.description}
      </p>
    </motion.div>
  );
};

export const CurvedTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Shallow rotation range for 9 items
  const rotation = useTransform(smoothProgress, [0, 1], [60, -60]);

  // radius of the arc
  const radius = 900;

  return (
    <div
      ref={containerRef}
      className="relative h-[600vh] bg-[#0A0D10] text-white"
    >
      {/* Sticky Visualization Section */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden pt-32">
        {/* Header - High contrast, centered as per reference */}
        <div className="text-center z-30 mt-4 md:mt-6 mb-6 px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-widest uppercase mb-6 leading-tight max-w-5xl mx-auto stroke-text">
            THE OLYMPUS JOURNEY: <br />
            <span className="text-primary italic">CHRONOLOGICAL FLOW</span>
          </h2>
          <p className="text-gray-300 uppercase tracking-wide mb-4">
            07th March 2026 – CareStack, Embassy Taurus Techzone
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed opacity-50 px-4">
            A meticulously structured immersive experience designed to rotate
            through the core pillars of modern people management.
          </p>
        </div>

        {/* Arch Content Wrapper */}
        <div className="relative w-full flex-1 flex flex-col items-center justify-start pointer-events-none">
          {/* Focal Apex Highlight (Static) */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
            <div className="w-px h-16 bg-linear-to-b from-transparent to-primary/40 mb-3" />
            <div className="w-5 h-5 rounded-full bg-primary shadow-[0_0_30px_rgba(248,197,56,1)] border-2 border-[#0A0D10]" />
            <div className="w-px h-40 bg-linear-to-b from-primary/40 to-transparent mt-3" />
          </div>

          {/* The Background Arch SVG */}
          {/* Positioned so its apex is at 20% height */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: `calc(20% + ${radius}px)`,
              width: radius * 2,
              height: radius * 2,
              marginTop: -radius,
            }}
          >
            <svg
              viewBox={`0 0 ${radius * 2} ${radius * 2}`}
              className="w-full h-full opacity-10"
              aria-hidden="true"
            >
              <circle
                cx={radius}
                cy={radius}
                r={radius}
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="4 16"
              />
            </svg>
          </div>

          {/* Rotating Items Wrapper */}
          <motion.div
            style={{
              rotate: rotation,
              top: `calc(20% + ${radius}px)`,
            }}
            className="absolute left-1/2 w-0 h-0 flex items-center justify-center z-10"
          >
            {phases.map((phase, index) => {
              // distibuted across 120 deg (-60 to 60)
              const baseAngle = (index / (phases.length - 1)) * 120 - 60;

              return (
                <div
                  key={phase.id}
                  className="absolute"
                  style={{
                    transform: `rotate(${baseAngle}deg) translateY(-${radius}px)`,
                  }}
                >
                  <div className="flex flex-col items-center relative">
                    {/* Marker Circle */}
                    <div className="w-2.5 h-2.5 rounded-full bg-white/40 mb-4" />

                    {/* Marker Label - Intentionally NOT rotating back fully to follow tangent */}
                    {/* We only rotate back slightly so it stays "upright enough" to read but follows the curve */}
                    {/* In the reference, they are tangent. To be tangent, they should NOT rotate back relative to parent. */}
                    <div className="absolute bottom-8 flex flex-col items-center">
                      <span className="text-2xl md:text-5xl font-black tracking-tighter opacity-20 whitespace-nowrap">
                        {phase.id}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Active Description - Centered below apex */}
          <div className="absolute top-[38%] left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 text-center z-30 pt-10">
            {phases.map((phase, index) => (
              <TimelineItem
                key={`desc-${phase.id}`}
                phase={phase}
                index={index}
                totalPhases={phases.length}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
        </div>

        {/* Subtle Scroll Hint */}
        <div className="z-30 pb-12 flex flex-col items-center opacity-20">
          <p className="text-[10px] uppercase tracking-widest mb-4">
            Rotate Timeline
          </p>
          <div className="w-px h-16 bg-linear-to-b from-white to-transparent" />
        </div>
      </div>

      <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.1);
                }
            `}</style>
    </div>
  );
};
