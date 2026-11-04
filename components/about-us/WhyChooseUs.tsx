
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  Zap,
  MapPin,
  ShieldCheck,
  Leaf,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Fast Charging",
    icon: Zap,
    side: "left",
    position: "top",
  },
  {
    id: 2,
    title: "Safe & Secure",
    icon: ShieldCheck,
    side: "left",
    position: "bottom",
  },
  {
    id: 3,
    title: "Expanding Network",
    icon: MapPin,
    side: "right",
    position: "top",
  },
  {
    id: 4,
    title: "Sustainable Choice",
    icon: Leaf,
    side: "right",
    position: "bottom",
  },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const featureVariants = {
    hidden: {
      opacity: 0,
      x: 25,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const leftFeatures = features.filter(
    (feature) => feature.side === "left"
  );

  const rightFeatures = features.filter(
    (feature) => feature.side === "right"
  );

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-12 w-[100%]">

      
      <div className="pointer-events-none absolute left-1/2 top-40 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-green-100/30 blur-[100px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

      
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="relative z-10 mb-12 text-center sm:mb-16"
        >
      
          <div className="mb-4 flex items-center justify-center gap-3">

            <Zap
              size={19}
              fill="#49c516"
              className="text-[#49c516]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#101828] sm:text-sm">
              Why Choose Us
            </span>
          </div>

      
          <h2 className="mx-auto max-w-[750px] text-3xl font-extrabold leading-[1.2] tracking-tight text-[#101828] sm:text-4xl md:text-5xl lg:text-[52px]">

            Powering a Better

            <span className="mt-1 block">
              <span className="bg-gradient-to-r from-[#65d91d] via-[#239c16] to-[#087b25] bg-clip-text text-transparent">
                EV Charging
              </span>{" "}
              Experience
            </span>

          </h2>
        </motion.div>

        <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-8 md:grid-cols-[1fr_0.9fr_1fr] md:gap-2 lg:gap-5">


          <div className="relative z-20 order-2 flex flex-col justify-center gap-8 md:order-1 md:gap-28 lg:gap-32">

            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: -45 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  className="group relative flex items-center gap-4 md:justify-end lg:gap-5"
                >


                  <motion.div
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            scale: 1.12,
                            rotate: -8,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#efffdc] to-[#d8f6bd] text-[#258c12] shadow-sm transition-all duration-300 group-hover:shadow-[0_8px_25px_rgba(63,180,27,0.2)] sm:h-14 sm:w-14 lg:h-[56px] lg:w-[56px]"
                  >
                    <Icon
                      size={30}
                      strokeWidth={2.1}
                      className="h-7 w-7 transition-transform duration-300"
                    />
                  </motion.div>


                  <h3 className="text-lg font-bold tracking-tight text-[#101828] transition-colors duration-300 group-hover:text-[#249b16] sm:text-xl lg:text-[21px] md:min-w-[180px]">
                    {feature.title}
                  </h3>


                  <div className="absolute left-[calc(100%+8px)] top-1/2 hidden h-px w-[90px] bg-gradient-to-r from-gray-300 to-gray-400 md:block lg:w-[125px]" />


                  <div className="absolute left-[calc(100%+94px)] top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rounded-full border-[4px] border-white bg-[#52ca16] shadow-[0_0_0_2px_rgba(82,202,22,0.12)] md:block lg:left-[calc(100%+120px)]" />

                </motion.div>
              );
            })}
          </div>


          <div className="relative order-1 flex min-h-[390px] items-center justify-center md:order-2 md:min-h-[490px] lg:min-h-[680px]">


            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scaleY: 0.7 }
              }
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                ease: "easeOut",
              }}
              className="absolute bottom-[10%] left-1/2 h-[90%] w-[72%] max-w-[310px] -translate-x-1/2 origin-bottom rounded-t-[180px] bg-gradient-to-b from-[#4fc900] via-[#a9e879] to-white"
            />

            <div className="absolute bottom-[10%] left-1/2 h-[78%] w-[65%] -translate-x-1/2 rounded-t-[160px] bg-gradient-to-b from-white/25 to-transparent" />

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 45, scale: 0.9 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                opacity: {
                  duration: 0.9,
                  delay: 0.2,
                },
                scale: {
                  duration: 0.9,
                  delay: 0.2,
                },
                y: reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
              }}
              className="absolute bottom-0 z-10 flex h-full w-full items-end justify-center"
            >
              <Image
                src="/images/home/ev-charger-center.png"
                alt="VoltCharge EV charging station"
                width={480}
                height={600}
                priority
                className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_18px_22px_rgba(0,0,0,0.12)]"
              />
            </motion.div>

          </div>

          
          <div className="relative z-20 order-3 flex flex-col justify-center gap-8 md:gap-28 lg:gap-32">

            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: 45 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  className="group relative flex items-center gap-4 lg:gap-5"
                >

          
                  <div className="absolute right-[calc(100%+8px)] top-1/2 hidden h-px w-[90px] bg-gradient-to-l from-gray-300 to-gray-400 md:block lg:w-[125px]" />

          
                  <div className="absolute right-[calc(100%+94px)] top-1/2 z-10 hidden h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-white bg-[#52ca16] shadow-[0_0_0_2px_rgba(82,202,22,0.12)] md:block lg:right-[calc(100%+120px)]" />

           
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            scale: 1.12,
                            rotate: 8,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#efffdc] to-[#d8f6bd] text-[#258c12] shadow-sm transition-all duration-300 group-hover:shadow-[0_8px_25px_rgba(63,180,27,0.2)] sm:h-14 sm:w-14 lg:h-[56px] lg:w-[56px]"
                  >
                    <Icon
                      size={30}
                      strokeWidth={2.1}
                      className="h-7 w-7"
                    />
                  </motion.div>

           
                  <h3 className="text-lg font-bold tracking-tight text-[#101828] transition-colors duration-300 group-hover:text-[#249b16] sm:text-xl lg:text-[21px]">
                    {feature.title}
                  </h3>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
