
"use client";

import { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FaUsers, FaAward } from "react-icons/fa";
import { GiSprout } from "react-icons/gi";
import { BiSolidBatteryCharging } from "react-icons/bi";

const stats = [
  {
    id: 1,
    value: 10,
    suffix: "+",
    label: "Charging Ports",
    icon: BiSolidBatteryCharging,
  },
  {
    id: 2,
    value: 50,
    suffix: "+",
    label: "Early Users",
    icon: FaUsers,
  },
  {
    id: 3,
    value: 5,
    suffix: "+",
    label: "Locations Planned",
    icon: GiSprout,
  },
  {
    id: 4,
    value: 99,
    suffix: "%",
    label: "Uptime Reliability",
    icon: FaAward,
  },
];

function AnimatedCounter({
  value,
  suffix,
  active,
  reducedMotion,
}: {
  value: number;
  suffix: string;
  active: boolean;
  reducedMotion: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (reducedMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    const duration = 1600;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [active, value, reducedMotion]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
  });

  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-9 sm:py-12 lg:py-14 w-[100%]"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 rounded-full" />

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4 lg:gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                        transition: { duration: 0.25 },
                      }
                }
                className="group flex items-center justify-center gap-3 sm:gap-4 lg:gap-5"
              >

     
                <div className="flex shrink-0 items-center justify-center">

                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.15,
                            rotate: -8,
                            transition: {
                              type: "spring",
                              stiffness: 250,
                              damping: 12,
                            },
                          }
                    }
                    className="text-[#138b19] transition-colors duration-300 group-hover:text-[#49b90c]"
                  >
                    <Icon
                      size={48}
                      strokeWidth={1.7}
                      className="h-9 w-9 sm:h-11 sm:w-11 lg:h-[50px] lg:w-[50px]"
                    />
                  </motion.div>

                </div>

     
                <div className="min-w-0">

                  <h3 className="text-[32px] font-extrabold leading-none tracking-tight text-[#168b16] sm:text-[40px] lg:text-[46px]">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      active={isInView}
                      reducedMotion={shouldReduceMotion}
                    />
                  </h3>

                  <p className="mt-2 whitespace-nowrap text-xs font-semibold text-[#303030] sm:text-sm lg:text-base">
                    {stat.label}
                  </p>


                  <div className="mt-2 h-[2px] w-0 rounded-full bg-[#48b91a] transition-all duration-500 group-hover:w-full" />

                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
