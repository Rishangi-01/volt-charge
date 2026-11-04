
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface PageBannerProps {
  title?: string;
  backgroundImage?: string;
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
}

export default function HowToApplyBanner({
  title = "How to Apply",
  backgroundImage = "/images/banner.png",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "How to Apply" },
  ],
}: PageBannerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#101116] sm:min-h-[350px] lg:min-h-[410px] w-[100%]">

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : { scale: 1.08 }
        }
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={backgroundImage}
          alt={`${title} page background`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-[#36b519]/10 blur-[100px]" />


      <div className="relative mx-auto w-full max-w-[1450px] px-5 py-16 sm:px-8 lg:px-12">

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, x: -45 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[650px]"
        >


          <motion.h1
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 30 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px] lg:leading-[1.1]"
          >
            {title}
          </motion.h1>


          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 125 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="mt-9 h-[2px] bg-white/90"
          />


          <motion.nav
            aria-label="Breadcrumb"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-6 flex flex-wrap items-center gap-3 text-sm sm:text-base"
          >
            {breadcrumbs.map((item, index) => {
              const isLast =
                index === breadcrumbs.length - 1;

              return (
                <div
                  key={`${item.label}-${index}`}
                  className="flex items-center gap-3"
                >
                  {isLast ? (
                    <span
                      aria-current="page"
                      className="font-medium text-white"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href || "/"}
                      className="font-medium text-white transition-colors duration-300 hover:text-[#65db32]"
                    >
                      {item.label}
                    </Link>
                  )}

                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="text-[#65db32]"
                    >
                      /
                    </span>
                  )}
                </div>
              );
            })}
          </motion.nav>

        </motion.div>
      </div>


      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#49c51c]/60 to-transparent" />

    </section>
  );
}
