"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/index";

import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const socialIconMap = {
  instagram: FaInstagram,
  youtube: FaInstagram,
  facebook: FaFacebookF,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
};

const navigation =
  site.footer.columns.find((column) => column.source === "links")?.links.map((link) => ({
    name: link.label,
    href: link.href,
  })) ?? site.nav.links.map((link) => ({ name: link.label, href: link.href }));

const socialLinks = site.site.socials.map((social) => ({
  name: social.label,
  href: social.href,
  icon: socialIconMap[social.icon as keyof typeof socialIconMap] ?? FaInstagram,
}));

const contactInfo = [
  {
    title: "Our Address",
    description: (
      <>
        {site.site.addressLines[0]}
        <br className="hidden sm:block" /> {site.site.addressLines[1]}
      </>
    ),
    icon: MapPin,
    href: `https://maps.google.com/?q=${encodeURIComponent(site.site.addressLines.join(", "))}`,
  },
  {
    title: "Email Us",
    description: site.site.emails[0],
    icon: Mail,
    href: `mailto:${site.site.emails[0]}`,
  },
  {
    title: "Call us:",
    description: site.site.phones[0],
    icon: FaPhoneAlt,
    href: `tel:${site.site.phones[0]}`,
  },
];

export default function Footer() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
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
    <footer className="relative overflow-hidden bg-[#101116] text-white w-[100%]">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#3ebd16]/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 gap-12 py-12 sm:py-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20 lg:py-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-[380px]"
          >
            <Link
              href="/"
              aria-label="VoltCharge Home"
              className="relative z-10 flex h-12 w-[148px] shrink-0 items-center justify-center transition-transform duration-300 hover:scale-[1.03] lg:h-16 sm:w-[184px]"
            >
              <Image
                src="/images/white-logo.webp"
                alt={"VoltCharge Logo"}
                fill
                sizes="184px"
                className="object-contain"
                priority
              />
            </Link>

            <p className="mt-5 max-w-[350px] text-sm leading-[1.8] text-[#92939b] sm:text-[15px]">
              Building a smarter and greener charging network for electric
              vehicles. Fast, reliable, and accessible EV charging solutions for
              everyone.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-start gap-8 lg:items-end lg:pt-6"
          >
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-6"
            >
              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-[#54d326]" : "text-[#e0e0e4] hover:text-[#54d326]"
                    }`}
                  >
                    {item.name}

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#50c923] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#24252d] text-white transition-colors duration-300 hover:bg-[#36a916] hover:text-white"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:pb-16"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Our Address" ? "_blank" : undefined}
                rel={
                  item.title === "Our Address"
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={fadeUp}
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d2029] text-[#42b91b] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2b4a2c] group-hover:text-[#6be83b]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <h3 className="mb-1 text-[13px] font-semibold text-[#dedee1]">
                    {item.title}
                  </h3>

                  <div className="text-[15px] font-medium leading-6 text-[#f0f0f1] transition-colors duration-300 group-hover:text-[#66d83c] sm:text-base">
                    {item.description}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      <div className="border-t border-[#292b34]">
        <div className="mx-auto flex max-w-[1450px] flex-col items-center justify-between gap-3 px-5 py-5 sm:px-8 md:flex-row lg:px-12">
          <p className="text-center text-xs text-[#85868e] sm:text-sm">
            Copyright © 2026. All Rights Reserved. Powered By Lestow.
          </p>

          <Link
            href="/"
            className="group flex items-center gap-1 text-xs font-medium text-[#92939b] transition-colors duration-300 hover:text-[#55d12c]"
          >
            Back to Home
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
