
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { site } from "@/data/index";

const steps = site.process.steps.map((step, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: step.title,
  description: step.text,
  image: "/images/home/installation.webp",
  imageAlt: step.title,
}));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HowToApplySec() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-to-apply"
      className="relative overflow-hidden bg-white py-8 sm:py-16 lg:py-16 w-[100%]"
    >

      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-green-100/40 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-lime-100/40 blur-[110px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">


        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-[#43a51b] sm:w-10" />

            <div className="flex items-center gap-2">
              <Zap
                size={19}
                fill="#4cae1c"
                className="text-[#4cae1c]"
              />

              <span className="text-sm font-bold text-[#111827] sm:text-base">
                {site.process.eyebrow}
              </span>
            </div>

            <span className="h-[3px] w-8 rounded-full bg-[#43a51b] sm:w-10" />
          </div>


          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-[46px] lg:text-[50px]">
            {site.process.title}{" "}
            <span className="bg-gradient-to-r from-[#6bc51c] via-[#3caa16] to-[#16851c] bg-clip-text text-transparent">
              {site.process.highlight}
            </span>
          </h2>


          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[#525b6b] sm:text-base md:text-lg">
            {site.process.text}
          </p>


          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 55 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-5 h-[3px] rounded-full bg-[#49aa1b]"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="space-y-4 sm:space-y-5"
        >
          {steps.map((step, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className={`group relative grid grid-cols-1 items-center gap-5 rounded-[22px] p-4 transition-colors duration-500 sm:gap-7 sm:p-6 lg:grid-cols-2 lg:gap-12 lg:rounded-[26px] lg:px-6 lg:py-4 ${
                  isReverse
                    ? "bg-gradient-to-r from-[#f2faee] via-[#f7fbf4] to-[#f2faee]"
                    : "bg-white"
                }`}
              >



                <div
                  className={`relative flex flex-col justify-center px-1 py-3 sm:px-3 lg:px-4 lg:py-7 ${
                    isReverse
                      ? "lg:order-2 lg:pl-12"
                      : "lg:order-1"
                  }`}
                >

                  <div className="mb-3">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#69bd17] to-[#238b0d] px-5 py-1.5 text-xs font-bold tracking-wide text-white shadow-[0_4px_12px_rgba(48,150,20,0.18)] sm:text-sm">
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight text-[#111827] transition-colors duration-300 group-hover:text-[#258f17] sm:text-3xl lg:text-[30px]">
                    {step.title}
                  </h3>


                  <p className="mt-2 max-w-[470px] text-sm leading-[1.8] text-[#4b5563] sm:text-base">
                    {step.description}
                  </p>


                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 42 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="mt-4 h-[3px] rounded-full bg-gradient-to-r from-[#79cb25] to-[#299717]"
                  />
                </div>



                <div
                  className={`relative ${
                    isReverse
                      ? "lg:order-1"
                      : "lg:order-2"
                  }`}
                >
                  <div className="group/image relative h-[210px] overflow-hidden rounded-[18px] border border-[#7dbd65] bg-[#f1f5ef] shadow-[0_6px_20px_rgba(0,0,0,0.035)] sm:h-[270px] lg:h-[180px] xl:h-[205px] 2xl:h-[220px]">

                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
                    />


                    <div className="absolute inset-0 bg-gradient-to-t from-[#063d13]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/image:opacity-100" />


                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/80 text-sm font-extrabold text-[#269119] opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 group-hover/image:opacity-100">
                      {step.number}
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
