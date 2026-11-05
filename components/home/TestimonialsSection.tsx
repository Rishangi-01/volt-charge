
"use client";

import Image from "next/image";
import { useState } from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { site } from "@/data/index";

const testimonials = site.testimonials.items.map((item, index) => ({
  id: index + 1,
  name: item.name,
  designation: item.treatment,
  image: item.image,
  quote: item.quote,
}));

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const shouldReduceMotion = useReducedMotion();

  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-white pb-16 sm:pb-20 lg:pb-24 w-[100%]"
    >

      <div className="absolute inset-x-0 top-0 h-[370px] overflow-hidden sm:h-[390px] lg:h-[395px]">

        <Image
          src="/images/home/testimonial-bg.webp"
          alt="Electric vehicles at a charging station"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        
        <div className="absolute inset-0 bg-[#080e0c]/15" />

        
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/40" />

      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">

        <div className="grid grid-cols-1 items-start gap-10 pt-16 sm:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:pt-[85px]">

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: -45 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative z-10 pt-0 lg:pt-0"
          >

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[4px] w-9 rounded-full bg-[#65e900]" />

              <span className="text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                {site.testimonials.eyebrow}
              </span>

            </div>

            <h2 className="max-w-[450px] text-[36px] font-extrabold leading-[1.17] tracking-tight text-white sm:text-[42px] lg:text-[44px]">

              {site.testimonials.title}

              <span className="mt-1 block text-[#67e900]">
                {site.testimonials.highlight}
              </span>

            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 65 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 h-[3px] rounded-full bg-[#65e900]"
            />

          </motion.div>


          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 60, scale: 0.96 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative z-20 w-full lg:-mb-[90px]"
          >

            <div className="relative min-h-[355px] overflow-hidden rounded-[18px] bg-gradient-to-br from-[#f6fbf0] to-[#e9f9df] px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:min-h-[390px] sm:px-10 sm:py-10 lg:min-h-[390px] lg:px-12 lg:py-10">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8de65a]/10 blur-[70px]" />


              <Quote
                size={70}
                strokeWidth={0}
                fill="#bce9a8"
                className="relative mb-1 rotate-180 text-[#bce9a8]"
              />


              <AnimatePresence mode="wait">

                <motion.div
                  key={activeTestimonial.id}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: 25 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, x: -25 }
                  }
                  transition={{ duration: 0.35 }}
                  className="relative z-10"
                >


                  <p className="max-w-[650px] text-base italic leading-8 text-[#171b19] sm:text-lg sm:leading-[1.8] lg:text-[19px]">

                    &ldquo;{activeTestimonial.quote}&rdquo;

                  </p>


                  <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-8">


                    <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full border border-white shadow-sm">

                      <Image
                        src={activeTestimonial.image}
                        alt={activeTestimonial.name}
                        fill
                        sizes="52px"
                        className="object-cover"
                      />

                    </div>


                    <h3 className="text-base font-bold text-[#08752b] sm:text-lg">
                      {activeTestimonial.name}
                    </h3>


                    <span className="hidden h-6 w-[2px] bg-[#9ba69b] sm:block" />


                    <span className="text-sm text-[#646b65] sm:text-base">
                      {activeTestimonial.designation}
                    </span>

                  </div>

                </motion.div>

              </AnimatePresence>


              <div className="relative z-20 mt-7 flex items-center gap-3 sm:mt-8">


                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="group flex h-9 w-9 items-center justify-center rounded-full text-[#0a8b26] transition-all duration-300 hover:bg-[#168c32] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                >
                  <ArrowLeft
                    size={27}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </button>


                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="group flex h-9 w-9 items-center justify-center rounded-full text-[#0a8b26] transition-all duration-300 hover:bg-[#168c32] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                >
                  <ArrowRight
                    size={27}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>


                <span className="ml-2 text-xs font-semibold tracking-wider text-[#68816b]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
