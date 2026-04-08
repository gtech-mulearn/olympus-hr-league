"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactFormSection() {
  const { form, onSubmit, isSubmitting, success, error } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-primary p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
    >
      {success ? (
        <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6">
          <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tight">
            Message Sent!
          </h3>
          <p className="text-lg font-medium text-black/70 max-w-sm">
            Thank you for reaching out. We'll get back to you shortly.
          </p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="mt-4 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors"
          >
            Send Another
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {error && (
            <div
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-r"
              role="alert"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <p className="font-bold">Error</p>
              </div>
              <p className="text-sm mt-1">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="text-xs font-black uppercase tracking-widest text-black/60"
              >
                First Name
              </label>
              <input
                id="firstName"
                {...register("firstName")}
                type="text"
                placeholder="John"
                className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
              />
              {errors.firstName && (
                <p className="text-red-600 text-xs font-bold">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-xs font-black uppercase tracking-widest text-black/60"
              >
                Last Name
              </label>
              <input
                id="lastName"
                {...register("lastName")}
                type="text"
                placeholder="Doe"
                className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
              />
              {errors.lastName && (
                <p className="text-red-600 text-xs font-bold">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-black uppercase tracking-widest text-black/60"
              >
                Email Address
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="you@email.com"
                className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
              />
              {errors.email && (
                <p className="text-red-600 text-xs font-bold">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-xs font-black uppercase tracking-widest text-black/60"
              >
                Phone Number
              </label>
              <input
                id="phone"
                {...register("phone")}
                type="tel"
                placeholder="+91 00000 00000"
                className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
              />
              {errors.phone && (
                <p className="text-red-600 text-xs font-bold">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="collegeOrOrg"
              className="text-xs font-black uppercase tracking-widest text-black/60"
            >
              College / Organization
            </label>
            <input
              id="collegeOrOrg"
              {...register("collegeOrOrg")}
              type="text"
              placeholder="Your Institution"
              className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
            />
            {errors.collegeOrOrg && (
              <p className="text-red-600 text-xs font-bold">
                {errors.collegeOrOrg.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="interest"
              className="text-xs font-black uppercase tracking-widest text-black/60"
            >
              Tell us about your interest
            </label>
            <textarea
              id="interest"
              {...register("interest")}
              rows={2}
              placeholder="How would you like to contribute or what are you looking to gain?"
              className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors resize-none"
            />
            {errors.interest && (
              <p className="text-red-600 text-xs font-bold">
                {errors.interest.message}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-widest text-black/60">
              How can we help?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Participation (Next Edition)",
                "Partnership / Sponsorship",
                "Speaking Slot",
                "Volunteer Opportunities",
                "µLearn HR Interest Group",
                "Other Inquiry",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-5 h-5 rounded border-2 border-black/20 group-hover:border-black flex items-center justify-center transition-colors relative">
                    <input
                      type="checkbox"
                      value={item}
                      {...register("helpTopics")}
                      className="appearance-none absolute inset-0 cursor-pointer"
                    />
                    <div className="w-2 h-2 bg-black rounded-sm opacity-0 group-has-[:checked]:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <span className="font-bold text-sm tracking-tight">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <Button
            disabled={isSubmitting}
            type="submit"
            size="xl"
            className="w-full rounded-2xl h-16 text-md md:text-lg font-black bg-black text-white hover:bg-black/90 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Let's get started!"}
            {!isSubmitting && (
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
