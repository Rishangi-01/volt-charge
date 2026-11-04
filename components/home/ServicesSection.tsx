
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Zap,
  Plug,
  BatteryCharging,
  Wrench,
  Building2,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Fast EV Charging",
    image: "/images/home/fast-charging.png",
    icon: Zap,
    position: "lg:mt-0",
  },
  {
    id: 2,
    title: "AC Charging",
    image: "/images/home/ac-charging.png",
    icon: Plug,
    position: "lg:mt-[90px]",
  },
  {
    id: 3,
    title: "DC Charging",
    image: "/images/home/dc-charging.png",
    icon: BatteryCharging,
    position: "lg:mt-[180px]",
  },
  {
    id: 4,
    title: "Home Charger Installation",
    image: "/images/home/home-installation.png",
    icon: Wrench,
    position: "lg:-mt-[0px]",
  },
  {
    id: 5,
    title: "Commercial Charging Solutions",
    image: "/images/home/commercial-charging.png",
    icon: Building2,
    position: "lg:mt-[90px]",
  },
  {
    id: 6,
    title: "Charging Station Maintenance",
    image: "/images/home/maintenance.png",
    icon: Settings,
    position: "lg:mt-[180px]",
  },
];

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 55,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-12 w-[100%]"
    >
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-green-100/50 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-lime-100/40 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#078c35]" />

            <Zap
              size={23}
              fill="#078c35"
              className="text-[#078c35]"
            />

            <span className="text-base font-bold text-[#078c35] sm:text-lg">
              Our Services
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#078c35]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-5xl">
            EV Charging{" "}
            <span className="text-[#168c18]">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#656b73] sm:text-base md:text-lg">
            End-to-end EV charging solutions for homes,
            businesses and public spaces.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 55 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-3 h-[3px] rounded-full bg-[#159b28]"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -9,
                        transition: { duration: 0.3 },
                      }
                }
                className={`group relative h-[210px] w-full overflow-hidden rounded-[20px] border border-green-100/60 bg-white shadow-[0_8px_25px_rgba(22,101,52,0.09)] transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(22,101,52,0.20)] sm:h-[225px] lg:h-[260px] ${service.position}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#005b20]/95 via-[#00672b]/35 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 h-[6px] bg-gradient-to-r from-[#22b900] via-[#70ed17] to-[#159b25]" />

                <a href="/services/service-details" className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 px-5 pb-7 pt-5 sm:px-6">

                  <div className="flex shrink-0 items-center justify-center text-white">
                    <Icon
                      size={31}
                      strokeWidth={1.8}
                      className="transition-all duration-300 group-hover:scale-110 group-hover:text-[#9bff62]"
                    />
                  </div>

                  <span className="h-9 w-[2px] shrink-0 bg-white/70" />

                  <h3 className="text-base font-bold leading-[1.35] text-white sm:text-lg">
                    {service.title}
                  </h3>

                  <div className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowUpRight
                      size={19}
                      className="text-white"
                    />
                  </div>
                </a>

                <div className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
