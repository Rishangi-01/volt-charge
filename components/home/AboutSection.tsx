
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Target, Zap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { site } from "@/data/index";

const missionSlides = [
  {
    title: "Our Mission",
    description: site.about.pageParagraphs[0],
    icon: Target,
  },
  {
    title: "Accessible Charging",
    description: site.about.pageParagraphs[1],
    icon: Zap,
  },
  {
    title: "A Sustainable Future",
    description: site.about.pageParagraphs[2],
    icon: Target,
  },
];

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [activeMissionSlide, setActiveMissionSlide] = useState(0);
  const [missionSwiper, setMissionSwiper] = useState<SwiperInstance | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const fadeLeft = {
    hidden: { opacity: 0, x: -45 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-12 w-[100%]"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">



          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
            className="relative mx-auto w-full max-w-[680px] lg:mx-0"
          >

            <div className="absolute -left-5 top-[12%] z-20 hidden h-[190px] w-[105px] sm:block lg:-left-10">
              <div
                className="absolute inset-0 bg-[#08794b]"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 30%, 100% 100%, 0 70%)",
                }}
              />

              <div
                className="absolute -bottom-[100px] left-0 h-[150px] w-full bg-[#48b91a]"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 30%, 100% 100%, 0 70%)",
                }}
              />
            </div>


            <div className="relative h-[510px] w-full overflow-hidden rounded-[22px] sm:h-[620px] lg:h-[750px]">

              <Image
                src="/images/home/about-main.webp"
                alt="Modern VoltCharge EV charging station"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>


            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 55, scale: 0.9 }
              }
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={
                shouldReduceMotion ? {} : { y: -8 }
              }
              className="absolute -bottom-5 left-5 z-30 w-[calc(100%-40px)] max-w-[350px] overflow-hidden rounded-[28px] border-[4px] border-white bg-gradient-to-br from-[#168a50] via-[#087c35] to-[#07551f] px-6 py-8 text-white shadow-[0_20px_55px_rgba(0,70,30,0.28)] sm:-bottom-8 sm:left-12 sm:px-9 sm:py-10"
            >

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#8cff40]/20 blur-3xl" />

              <div className="relative z-10">
                {isMounted ? (
                  <>
                    <Swiper
                      modules={[A11y, Autoplay]}
                      autoplay={
                        shouldReduceMotion
                          ? false
                          : {
                              delay: 3500,
                              disableOnInteraction: false,
                              pauseOnMouseEnter: true,
                            }
                      }
                      loop
                      speed={650}
                      onSwiper={setMissionSwiper}
                      onSlideChange={(swiper) =>
                        setActiveMissionSlide(swiper.realIndex)
                      }
                      className="text-center"
                    >
                      {missionSlides.map(({ title, description, icon: Icon }) => (
                        <SwiperSlide key={title}>
                          <div className="flex min-h-[230px] flex-col items-center justify-center">
                            <motion.div
                              animate={
                                shouldReduceMotion
                                  ? {}
                                  : { rotate: [0, -5, 5, 0] }
                              }
                              transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10"
                            >
                              <Icon size={45} strokeWidth={1.8} />
                            </motion.div>

                            <h3 className="text-2xl font-bold tracking-tight sm:text-[30px]">
                              {title}
                            </h3>

                            <p className="mt-3 max-w-[280px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                              {description}
                            </p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div
                      role="group"
                      className="mt-7 flex justify-center gap-2"
                      aria-label="Mission messages"
                    >
                      {missionSlides.map((slide, index) => (
                        <button
                          key={slide.title}
                          type="button"
                          aria-label={`Show ${slide.title}`}
                          aria-current={activeMissionSlide === index ? "true" : undefined}
                          onClick={() => missionSwiper?.slideToLoop(index)}
                          className={`h-[4px] w-10 rounded-full transition-colors ${
                            activeMissionSlide === index
                              ? "bg-[#69ed45]"
                              : "bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex min-h-[230px] flex-col items-center justify-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10">
                      <Target size={45} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight sm:text-[30px]">
                      {missionSlides[0].title}
                    </h3>

                    <p className="mt-3 max-w-[280px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                      {missionSlides[0].description}
                    </p>
                  </div>
                )}
              </div>


              <div className="absolute -bottom-12 -left-10 h-32 w-52 rotate-[-15deg] rounded-full bg-white/5 blur-xl" />
            </motion.div>

          </motion.div>


          <div className="relative flex flex-col justify-center pt-5 lg:pt-0">


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-[3px] w-9 rounded-full bg-[#078b36]" />

              <span className="text-lg font-bold text-[#101827]">
                About Us
              </span>
            </motion.div>


            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-[clamp(36px,4.2vw,65px)] font-extrabold leading-[1.12] tracking-[-0.045em] text-[#111827]"
            >
              Crafting The Ultimate
              <br className="hidden xl:block" />
              Realm Of{" "}
              <span className="relative inline-block text-[#078d35]">
                EV
                <span className="absolute -bottom-1 left-0 h-[5px] w-full origin-left scale-x-0 rounded-full bg-[#65c936] transition-transform duration-500 hover:scale-x-100" />
              </span>
            </motion.h2>


            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-7 max-w-[650px] text-base leading-8 text-[#60646d] sm:text-lg sm:leading-[2rem]"
            >
              We are committed to transforming the future of
              transportation through innovative electric
              vehicle charging solutions. Our mission is to
              make EV charging more accessible, convenient,
              and sustainable for everyone.
            </motion.p>


            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-7 lg:mt-16">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={imageReveal}
                transition={{ delay: 0.15 }}
                className="group relative h-[230px] overflow-hidden rounded-[22px] sm:h-[300px] lg:h-[350px]"
              >
                <Image
                  src="/images/home/about-charger-1.webp"
                  alt="Outdoor EV charging stations"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={imageReveal}
                transition={{ delay: 0.3 }}
                className="group relative h-[230px] overflow-hidden rounded-[22px] sm:h-[300px] lg:h-[350px]"
              >
                <Image
                  src="/images/home/about-charger-2.webp"
                  alt="Electric car at a charging station"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      <div className="pointer-events-none absolute -right-40 top-20 -z-0 h-80 w-80 rounded-full bg-[#65c936]/5 blur-[100px]" />

    </section>
  );
};

export default AboutSection;
