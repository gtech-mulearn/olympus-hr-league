"use client"
import React from 'react';
import { motion } from 'framer-motion';

export const ElevatedEmblem = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Dynamic Glow Layer */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute w-4/5 h-4/5 bg-primary/20 blur-[80px] rounded-full"
            />

            <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
                <defs>
                    <linearGradient id="emblemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="50%" stopColor="#F8C538" />
                        <stop offset="100%" stopColor="#CC8800" />
                    </linearGradient>

                    <linearGradient id="innerShadow" x1="0%" y1="0%" x2="50%" y2="50%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    <filter id="glass" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
                        <feOffset in="blur" dx="2" dy="5" result="offsetBlur" />
                        <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75" specularExponent="20" lightingColor="white" result="specOut">
                            <fePointLight x="-50" y="-100" z="200" />
                        </feSpecularLighting>
                        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                    </filter>
                </defs>

                {/* The 3-pointed shape logic */}
                <motion.path
                    d="M100 20 
             C120 20 130 70 170 80
             C185 85 185 115 170 120
             C130 130 120 180 100 180
             C80 180 70 130 30 120
             C15 115 15 85 30 80
             C70 70 80 20 100 20Z"
                    fill="url(#emblemGradient)"
                    filter="url(#glass)"
                    animate={{
                        rotate: [0, 5, 0, -5, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Highlight Layer */}
                <path
                    d="M100 35 
             C115 35 125 75 160 85
             C155 88 120 85 100 85
             C80 85 45 88 40 85
             C75 75 85 35 100 35Z"
                    fill="url(#innerShadow)"
                    className="opacity-40"
                />
            </svg>

            {/* Rotating orbit elements for extra 'elevation' */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-primary/40 rounded-full blur-[2px]" />
                <div className="absolute bottom-0 left-1/2 -ml-1 w-3 h-3 bg-primary/20 rounded-full blur-[3px]" />
            </motion.div>
        </div>
    );
};
