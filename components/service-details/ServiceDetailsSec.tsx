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

const services = [
  {
    id: 1,
    name: "EV Charging Setup",
    icon: BatteryCharging,
    title: "EV Charging Setup",
    subtitle: "Complete EV charging setup solutions for homes and businesses.",
    image: "/images/home/charging-setup.png",

    overviewTitle: "Charging Setup Overview",
    overview:
      "We provide complete EV charging setup solutions designed around your requirements. From initial consultation to installation, our team ensures a smooth, efficient and reliable charging experience.",

    centerTitle: "Complete Setup Solutions",
    center:
      "Our experts help you select the right charging equipment, plan installation locations and configure your charging infrastructure for reliable everyday performance.",

    features: [
      {
        title: "Professional Installation",
        description:
          "Reliable installation with carefully planned charging points.",
        image: "/images/home/station-layout.png",
      },
      {
        title: "Smart Charging Setup",
        description:
          "Modern charging solutions designed for everyday convenience.",
        image: "/images/home/scalable-solutions.png",
      },
    ],
  },

  {
    id: 2,
    name: "Charging Station Design",
    icon: BatteryCharging,
    title: "Charging Station Design",
    subtitle:
      "End-to-end design solutions for efficient, scalable and future-ready EV charging stations.",
    image: "/images/home/installation.png",

    overviewTitle: "Service Overview",
    overview:
      "Our Charging Station Design service focuses on creating smart, efficient and user-friendly charging infrastructure. We design customized solutions based on your location, user demand and scalability requirements, ensuring optimal performance, safety and a seamless charging experience.",

    centerTitle: "Service Center",
    center:
      "We provide complete design and planning support for individual, commercial and large-scale charging networks. From layout planning to equipment selection and technical design, our experts ensure a reliable, future-ready and cost-effective charging setup.",

    features: [
      {
        title: "Custom Station Layouts",
        description:
          "Optimized designs for maximum efficiency and user convenience.",
        image: "/images/home/ac-charging.png",
      },
      {
        title: "Smart & Scalable Solutions",
        description: "Flexible designs that grow with your charging needs.",
        image: "/images/home/dc-charging.png",
      },
    ],
  },

  {
    id: 3,
    name: "EV Website Development",
    icon: Monitor,
    title: "EV Website Development",
    subtitle:
      "Powerful digital experiences for EV charging businesses and networks.",
    image: "/images/home/fast-charging.png",

    overviewTitle: "Website Development Overview",
    overview:
      "We create modern, responsive and user-friendly websites for EV businesses. Our digital solutions help customers discover charging stations, explore services and connect with your charging network.",

    centerTitle: "Digital Solutions",
    center:
      "From business websites to charging station dashboards, we build scalable digital platforms with modern interfaces, intuitive navigation and reliable performance.",

    features: [
      {
        title: "Modern Web Experiences",
        description:
          "Beautiful, responsive websites for your EV charging business.",
        image: "/images/home/home-installation.png",
      },
      {
        title: "Smart Digital Platforms",
        description: "Scalable digital solutions for growing EV networks.",
        image: "/images/home/maintenance.png",
      },
    ],
  },

  {
    id: 4,
    name: "EC Solutions",
    icon: Settings,
    title: "EC Solutions",
    subtitle:
      "Intelligent electric charging solutions built for modern mobility.",
    image: "/images/home/commercial-charging.png",

    overviewTitle: "EC Solutions Overview",
    overview:
      "Our EC solutions focus on delivering efficient, dependable and user-friendly electric charging experiences. We combine modern technology with practical infrastructure planning.",

    centerTitle: "Advanced Charging Support",
    center:
      "Our team helps businesses identify suitable charging technologies, plan their requirements and implement efficient electric charging solutions.",

    features: [
      {
        title: "Advanced Technology",
        description: "Modern charging technology for dependable performance.",
        image: "/images/home/site-assessment.png",
      },
      {
        title: "Efficient Operations",
        description: "Thoughtfully designed solutions for smoother operations.",
        image: "/images/home/scalable-solutions.png",
      },
    ],
  },

  {
    id: 5,
    name: "EV Infrastructure",
    icon: Network,
    title: "EV Infrastructure",
    subtitle: "Building dependable EV infrastructure for a connected future.",
    image: "/images/home/charging-setup.png",

    overviewTitle: "Infrastructure Overview",
    overview:
      "We help develop reliable EV charging infrastructure for residential, commercial and public environments. Our solutions focus on accessibility, performance and long-term scalability.",

    centerTitle: "Infrastructure Planning",
    center:
      "From site assessment and equipment planning to network expansion, we help create charging infrastructure that supports evolving mobility requirements.",

    features: [
      {
        title: "Connected Networks",
        description:
          "Create accessible charging networks across multiple locations.",
        image: "/images/home/station-layout.png",
      },
      {
        title: "Future-Ready Infrastructure",
        description:
          "Build flexible infrastructure for future EV requirements.",
        image: "/images/home/scalable-solutions.png",
      },
    ],
  },

  {
    id: 6,
    name: "G2G Solutions",
    icon: Leaf,
    title: "G2G Solutions",
    subtitle:
      "Sustainable and innovative solutions supporting greener mobility.",
    image: "/images/home/commercial-charging.png",

    overviewTitle: "G2G Solutions Overview",
    overview:
      "We support sustainable mobility through thoughtfully planned green energy and EV charging solutions. Our approach focuses on improving efficiency and supporting a cleaner transportation ecosystem.",

    centerTitle: "Green Energy Solutions",
    center:
      "We explore efficient energy integration and sustainable infrastructure strategies to help businesses move towards cleaner and smarter mobility.",

    features: [
      {
        title: "Sustainable Charging",
        description:
          "Environment-conscious charging solutions for modern mobility.",
        image: "/images/home/dc-charging.png",
      },
      {
        title: "Green Energy Integration",
        description:
          "Explore smarter energy solutions for future-ready networks.",
        image: "/images/home/ev-charger-detail.png",
      },
    ],
  },
];

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
      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-green-100/30 blur-[120px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
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
