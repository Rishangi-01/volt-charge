"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, FilePenLine, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/services" },
  { name: "How to Apply", href: "/how-to-apply" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const animationDuration = shouldReduceMotion ? 0 : 0.3;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)]">
      <nav className="mx-auto flex h-[82px] max-w-[1920px] items-center justify-between px-5 sm:px-8 lg:h-[90px] lg:px-12 xl:px-14">
        <Link
          href="/"
          aria-label="VoltCharge Home"
          className="relative z-10 flex h-12 w-[148px] shrink-0 items-center justify-center transition-transform duration-300 hover:scale-[1.03] lg:h-16 lg:w-[214px]"
        >
            <Image
              src="/images/logo.jpg"
              alt={"VoltCharge Logo"}
              fill
              sizes="184px"
              className="object-contain"
              priority
            />
        </Link>

        <div className="hidden items-center gap-7 xl:flex 2xl:gap-10">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <motion.div
                key={link.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: animationDuration,
                  delay: shouldReduceMotion ? 0 : index * 0.07,
                }}
              >
                <Link
                  href={link.href}
                  className={`group relative block whitespace-nowrap py-3 text-[16px] font-semibold transition-colors duration-300 2xl:text-[18px] ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-900 hover:text-green-700"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-green-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="hidden xl:block"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: animationDuration, delay: 0.3 }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
        >
          <Link
            href="/apply-now"
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 px-8 py-[15px] text-[17px] font-bold text-white shadow-[0_5px_15px_rgba(22,163,74,0.18)] transition-all duration-300 hover:from-green-700 hover:to-green-800 hover:shadow-[0_8px_25px_rgba(22,163,74,0.3)] 2xl:px-10"
          >
            <FilePenLine
              size={25}
              className="transition-transform duration-300 group-hover:rotate-[-8deg]"
            />
            Apply Now
          </Link>
        </motion.div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-green-700 transition-colors hover:bg-green-100 xl:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "menu"}
              initial={shouldReduceMotion ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={shouldReduceMotion ? {} : { rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: animationDuration }}
            className="absolute left-0 top-full w-full overflow-hidden border-t border-gray-100 bg-white shadow-xl xl:hidden"
          >
            <div className="mx-auto flex max-h-[calc(100dvh-82px)] max-w-2xl flex-col overflow-y-auto px-5 py-5 sm:px-8">
              <div className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.name}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, x: -15 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: animationDuration,
                        delay: shouldReduceMotion ? 0 : index * 0.06,
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`group flex items-center justify-between border-b border-gray-100 py-4 text-[16px] font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-green-700"
                            : "text-gray-800 hover:text-green-700"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-green-600" />
                          )}
                          {link.name}
                        </span>

                        <ChevronRight
                          size={19}
                          className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-green-600"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <Link
                href="/apply-now"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:from-green-700 hover:to-green-800"
              >
                <FilePenLine size={22} />
                Apply Now
              </Link>

              <p className="mt-5 text-center text-xs font-medium tracking-wide text-gray-400">
                Powering a greener tomorrow
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
