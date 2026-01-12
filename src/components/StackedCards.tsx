"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Users, Target, Heart, Shield, type LucideIcon } from "lucide-react";

// Icon mapping for serializable icon names
const iconMap: Record<string, LucideIcon> = {
  Users,
  Target,
  Heart,
  Shield,
};

interface StackedCard {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

interface StackedCardsProps {
  cards: StackedCard[];
  className?: string;
}

export function StackedCards({ cards, className }: StackedCardsProps) {
  return (
    <div className={cn("relative", className)}>
      {cards.map((card, index) => (
        <StackedCardItem
          key={card.title}
          card={card}
          index={index}
          totalCards={cards.length}
        />
      ))}
    </div>
  );
}

interface StackedCardItemProps {
  card: StackedCard;
  index: number;
  totalCards: number;
}

function StackedCardItem({ card, index, totalCards }: StackedCardItemProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Card reveals as you scroll - starts with translateY offset, moves to 0
  const y = useTransform(scrollYProgress, [0, 0.3, 0.6], [100, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.98]);

  // Calculate z-index - later cards should be ON TOP (higher z-index)
  const zIndex = index + 1;

  // Get the icon component from the mapping
  const IconComponent = iconMap[card.iconName] || Users;

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        y, 
        opacity, 
        scale,
        zIndex,
      }}
      className="sticky top-0"
    >
      <div className="bg-foreground text-background rounded-2xl p-8 md:p-16 lg:p-24 shadow-2xl overflow-hidden min-h-screen flex items-center w-screen -ml-[50vw] left-1/2 relative">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Large Number */}
          <div className="shrink-0">
            <span 
              className="text-[120px] md:text-[180px] font-extrabold leading-none text-transparent"
              style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.3)",
              }}
            >
              {card.number}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 pt-4 md:pt-8">
            {/* Badge/Tag in top right */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <IconComponent className="h-5 w-5 text-primary" />
              </div>
             
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-4">
              {card.title}
            </h3>
            <p className="text-background/60 text-lg leading-relaxed max-w-xl">
              {card.description}
            </p>
          </div>
        </div>

        {/* Decorative line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </motion.div>
  );
}
