"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import {
  Zap,
  Settings,
  Monitor,
  Network,
  Leaf,
  ChevronRight,
  Headset,
  Phone,
  BatteryCharging,
} from "lucide-react";
import { site } from "@/data/index";

const serviceIconMap = {
  zap: BatteryCharging,
  plug: Zap,
  "battery-charging": BatteryCharging,
  wrench: Settings,
  "building-2": Network,
  settings: Settings,
};

const services = site.plans.items.map((service, index) => ({
  id: index + 1,
  name: service.title,
  icon: serviceIconMap[service.homeIcon as keyof typeof serviceIconMap] ?? BatteryCharging,
  title: service.title,
  subtitle: service.text,
  image: service.homeImage || service.image,
  overviewTitle: service.title,
  overview: service.overview[0] ?? service.text,
  centerTitle: "Charging Solutions",
  center: service.overview[1] ?? service.text,
  features: [
    { title: service.title, description: service.text, image: service.homeImage || service.image },
    { title: "Service Details", description: service.text, image: service.homeImage || service.image },
  ],
}));

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ServiceDetailsSec() {
  const [activeService, setActiveService] = useState(1);
  const reduceMotion = useReducedMotion();

  const selectedService =
    services.find((service) => service.id === activeService) ?? services[0];

  return (
    <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32">

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[330px_minmax(0,1fr)] xl:gap-20">
          <aside className="flex w-full flex-col gap-8 lg:sticky lg:top-24 lg:z-10 lg:max-w-[330px] lg:self-start xl:max-w-[360px]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = activeService === service.id;

                return (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveService(service.id)}
                    whileHover={reduceMotion ? {} : { x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex min-h-[75px] items-center justify-between gap-3 rounded-2xl border px-4 py-5 text-left transition-all duration-300 sm:px-5 ${
                      isActive
                        ? "border-[#d8efcc] bg-gradient-to-r from-[#e5f6d9] to-[#f0faeb] shadow-[0_5px_16px_rgba(63,160,30,0.08)]"
                        : "border-transparent bg-[#f5f7f8] hover:border-green-100 hover:bg-green-50"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <Icon
                        size={21}
                        strokeWidth={2.2}
                        className={`shrink-0 transition-colors duration-300 ${
                          isActive
                            ? "text-[#218b19]"
                            : "text-[#245b2c] group-hover:text-[#39a51c]"
                        }`}
                      />

                      <span className="text-base font-semibold leading-tight text-[#182033] sm:text-lg">
                        {service.name}
                      </span>
                    </span>

                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#0b3919] text-white"
                          : "bg-white text-[#182033] group-hover:bg-green-100"
                      }`}
                    >
                      <ChevronRight size={15} />
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative isolate flex min-h-[380px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#70c91b] via-[#26930e] to-[#086313] px-7 py-10 text-center text-white shadow-[0_15px_35px_rgba(32,130,18,0.16)]"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 -z-10 h-44 w-44 rounded-full border-[25px] border-white/10" />

              <div className="pointer-events-none absolute -bottom-16 -left-12 -z-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-500 hover:rotate-12">
                <Headset size={34} className="text-[#26930e]" />
              </div>

              <h3 className="max-w-[260px] text-3xl font-extrabold leading-tight tracking-tight">
                Contact with us for any advice
              </h3>

              <p className="mt-5 text-lg font-medium text-white/85">
                Need help? Talk to an expert
              </p>

              <a
                href="tel:+1 000000000"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3 py-2 font-bold transition-all duration-300 hover:bg-white/20"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#188b18]">
                  <Phone size={19} />
                </span>

                <span className="text-base">+1 000000000</span>
              </a>
            </motion.div>
          </aside>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="group relative h-[350px] overflow-hidden rounded-3xl bg-gray-100 sm:h-[380px] lg:h-[420px] xl:h-[420px]">
                  <Image
                    key={selectedService.image}
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    priority={activeService === 1}
                    sizes="(max-width: 768px) 100vw, 75vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                    <Zap size={16} fill="#65d91d" className="text-[#65d91d]" />
                    VoltCharge Solutions
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="h-[3px] w-9 bg-[#48ad20]" />

                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#172033]">
                      Service Detail
                    </span>
                  </div>

                  <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-4xl xl:text-5xl">
                    {selectedService.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="bg-gradient-to-r from-[#399d17] to-[#147b13] bg-clip-text text-transparent">
                      {selectedService.title.split(" ").slice(-1)}
                    </span>
                  </h2>

                  <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#465064] sm:text-xl lg:text-xl">
                    {selectedService.subtitle}
                  </p>
                </div>

                <div className="mt-14 sm:mt-16">
                  <div className="mb-2 flex flex-wrap items-center gap-4">
                    <h3 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-4xl">
                      {selectedService.overviewTitle}
                    </h3>

                    <span className="h-[3px] w-9 bg-gradient-to-r from-[#259b19] to-[#9adf5b]" />
                  </div>

                  <p className="max-w-5xl text-lg leading-[1.9] text-[#414b5c] sm:text-xl lg:text-xl">
                    {selectedService.overview}
                  </p>
                </div>

                <div className="mt-14 sm:mt-16">
                  <div className="mb-2 flex flex-wrap items-center gap-4">
                    <h3 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-4xl">
                      {selectedService.centerTitle}
                    </h3>

                    <span className="h-[3px] w-9 bg-gradient-to-r from-[#259b19] to-[#9adf5b]" />
                  </div>

                  <p className="max-w-5xl text-lg leading-[1.9] text-[#414b5c] sm:text-xl lg:text-xl">
                    {selectedService.center}
                  </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-20 lg:gap-10">
                  {selectedService.features.map((feature, index) => (
                    <motion.div
                      key={`${selectedService.id}-${feature.title}`}
                      initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.12,
                      }}
                      className="group"
                    >
                      <div className="relative h-[280px] overflow-hidden rounded-2xl bg-gray-100 sm:h-[300px] lg:h-[330px] xl:h-[380px]">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                      </div>

                      <div className="mt-3 flex gap-3">
                        <span className="mt-0.5 h-5 w-[3px] shrink-0 rounded-full bg-[#48b91d]" />

                        <div>
                          <h4 className="text-2xl font-extrabold tracking-tight text-[#111827] transition-colors duration-300 group-hover:text-[#299518] sm:text-3xl">
                            {feature.title}
                          </h4>

                          <p className="mt-3 text-lg leading-relaxed text-[#4b5563] sm:text-xl">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
