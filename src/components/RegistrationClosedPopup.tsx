"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface RegistrationClosedPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationClosedPopup({
  isOpen,
  onClose,
}: RegistrationClosedPopupProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Only render on client side
  if (typeof window === "undefined") return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Modal Container - Ensures perfect centering */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative pointer-events-auto w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-8 text-center relative">
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                  <Calendar className="h-12 w-12 text-white mx-auto mb-3" />
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Olympus 2026 Completed
                  </h2>
                </div>

                {/* Content */}
                <div className="px-6 py-8">
                  <p className="text-foreground/70 text-center mb-6">
                    Thanks for the incredible response. This edition has
                    concluded successfully.
                  </p>

                  <div className="bg-secondary/10 border-2 border-primary rounded-lg py-6 px-4 text-center mb-6">
                    <p className="text-sm font-medium text-foreground/60 mb-2">
                      Event Date
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      07 Mar 2026
                    </p>
                  </div>

                  <p className="text-foreground/60 text-center text-sm mb-6">
                    Explore the gallery and session highlights to relive key
                    moments from Olympus.
                  </p>

                  {/* Closing Button */}
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold py-3 rounded-lg transition-colors"
                  >
                    Got It, Thanks!
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  // Render modal at document body level using portal
  return createPortal(modalContent, document.body);
}
