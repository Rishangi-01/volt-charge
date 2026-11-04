
"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { site } from "@/data/index";

const faqs = site.faq.items.map((item, index) => ({
  id: index + 1,
  question: item.question,
  answer: item.answer,
}));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const toggleFAQ = (id: number) => {
    setActiveFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#fbfcfa] py-8 sm:py-16 lg:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="pointer-events-none absolute -left-40 top-40 h-[350px] w-[350px] rounded-full bg-green-100/40 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-green-100/40 blur-[130px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center sm:mb-12 lg:mb-12"
        >
        
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[3px] w-10 rounded-full bg-[#278d19] sm:w-12" />

            <span className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#172033] sm:text-base">
              {site.faq.title}
            </span>

            <span className="h-[3px] w-10 rounded-full bg-[#278d19] sm:w-12" />
          </div>

        
          <h2
            id="faq-heading"
            className="mx-auto max-w-5xl text-3xl font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px]"
          >
            {site.faq.title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base text-[#475166] sm:text-lg">
            {site.faq.intro}
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 85 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-7 h-1 rounded-full bg-[#40a927]"
          />
        </motion.div>

        
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 items-start gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-4 xl:gap-x-6 xl:gap-y-4"
        >
          {faqs.map((faq) => {
            const isOpen = activeFAQ === faq.id;

            return (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                layout
                className={`group relative overflow-hidden rounded-xl border bg-white transition-all duration-300 sm:rounded-2xl ${
                  isOpen
                    ? "border-green-200 shadow-[0_12px_35px_rgba(34,139,34,0.10)]"
                    : "border-gray-100 shadow-[0_5px_25px_rgba(0,0,0,0.045)] hover:-translate-y-1 hover:border-green-100 hover:shadow-[0_12px_35px_rgba(34,139,34,0.09)]"
                }`}
              >
        
                <div
                  className={`absolute left-0 top-0 h-full w-[4px] rounded-r-full bg-[#29951c] transition-transform duration-300 ${
                    isOpen
                      ? "scale-y-100"
                      : "scale-y-0 group-hover:scale-y-50"
                  }`}
                />

        
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="flex min-h-[88px] w-full items-center justify-between gap-4 px-5 py-6 text-left sm:min-h-[100px] sm:px-7 sm:py-7 lg:px-8"
                >
                  <span
                    className={`text-base font-bold leading-snug tracking-tight transition-colors duration-300 sm:text-lg md:text-xl lg:text-[21px] xl:text-[23px] ${
                      isOpen
                        ? "text-[#218b19]"
                        : "text-[#151923] group-hover:text-[#218b19]"
                    }`}
                  >
                    {faq.question}
                  </span>

        
                  <motion.span
                    animate={
                      reduceMotion
                        ? {}
                        : {
                            rotate: isOpen ? 90 : 0,
                            scale: isOpen ? 1.05 : 1,
                          }
                    }
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:h-11 sm:w-11 ${
                      isOpen
                        ? "bg-[#238b19] text-white"
                        : "bg-green-50 text-[#278e19] group-hover:bg-[#278e19] group-hover:text-white"
                    }`}
                  >
                    <ArrowRight
                      size={22}
                      strokeWidth={2.7}
                    />
                  </motion.span>
                </button>

        
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      key="answer"
                      initial={
                        reduceMotion
                          ? false
                          : { height: 0, opacity: 0 }
                      }
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mx-5 h-px bg-gradient-to-r from-green-200 via-gray-100 to-transparent sm:mx-7 lg:mx-8" />

                      <div className="px-5 pb-7 pt-5 sm:px-7 sm:pb-8 lg:px-8">
                        <p className="text-sm leading-[1.9] text-[#596273] sm:text-base lg:text-[17px]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
