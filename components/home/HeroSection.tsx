
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Zap, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative isolate min-h-[780px] overflow-hidden bg-white w-[100%]">

      <div className="absolute inset-x-0 top-0 h-[85%] bg-gradient-to-r from-[#f7faf4] via-[#d7e9ce] to-[#8cba70]" />


      <div className="absolute left-[35%] top-20 h-72 w-72 rounded-full bg-[#b4df91]/20 blur-[100px]" />

      <div className="relative mx-auto min-h-[780px] max-w-[1600px] px-5 sm:px-8 lg:px-14">

        <div className="grid min-h-[780px] grid-cols-1 items-center gap-10 pb-16 pt-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:pb-0 lg:pt-0">


          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
            className="relative z-20 max-w-[700px]"
          >


            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#b9d5a9]/50 bg-[#d2e7c6] px-4 py-2 text-sm font-medium text-[#142d21] shadow-sm sm:text-base"
            >
              <Zap
                size={21}
                fill="currentColor"
                className="text-black"
              />
              <span>India’s Growing EV Charging Network</span>
            </motion.div>


            <motion.h1
              variants={fadeUp}
              className="text-[clamp(42px,5.4vw,82px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#06251e]"
            >
              Charge Your EV,
              <br />

              Drive a{" "}
              <span className="italic text-[#40b70b]">
                Cleaner
              </span>

              <br />

              <span className="italic text-[#40b70b]">
                Tomorrow
              </span>
            </motion.h1>
          </motion.div>

          
          <div className="relative z-10 mx-auto mt-2 h-[480px] w-full max-w-[720px] sm:h-[550px] lg:mt-0 lg:h-[650px]">

            
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, x: 70, scale: 0.94 }
              }
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="absolute bottom-0 right-0 h-[78%] w-[96%] overflow-hidden rounded-[24px] border-[5px] border-white shadow-2xl sm:h-[82%] lg:right-0 lg:h-[88%] lg:w-[98%]"
            >
              <Image
                src="/images/home/ev-hero-main.png"
                alt="Electric vehicle charging at a modern EV station"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover transition-transform duration-[1200ms] hover:scale-105"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </motion.div>


            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: -40, scale: 0.85 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="absolute right-0 top-0 z-20 h-[205px] w-[205px] overflow-hidden rounded-[25px] border-[5px] border-white bg-white shadow-2xl sm:right-0 sm:h-[245px] sm:w-[245px] lg:-right-4 lg:top-0 lg:h-[260px] lg:w-[275px]"
            >
              <Image
                src="/images/home/ev-charger-detail.png"
                alt="Modern EV charging station"
                fill
                sizes="(max-width: 768px) 205px, 275px"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>


            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.12, 1],
                      opacity: [0.15, 0.3, 0.15],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 -z-10 h-48 w-48 rounded-full bg-[#51bd16] blur-[90px]"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
