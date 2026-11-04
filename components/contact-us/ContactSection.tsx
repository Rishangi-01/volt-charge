
"use client";

import { useState, type FormEvent } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Pencil,
  MapPin,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { site } from "@/data/index";

const contactInfo = [
  {
    id: 1,
    title: "Have any questions?",
    value: site.site.phones[0],
    href: `tel:${site.site.phones[0]}`,
    icon: Phone,
  },
  {
    id: 2,
    title: "Write email",
    value: site.site.emails[0],
    href: `mailto:${site.site.emails[0]}`,
    icon: Mail,
  },
  {
    id: 3,
    title: "Visit anytime",
    value: site.site.addressLines.join(", "),
    href: `https://maps.google.com/?q=${encodeURIComponent(site.site.addressLines.join(", "))}`,
    icon: MapPin,
  },
];

const inputFields = [
  {
    name: "name",
    placeholder: "Full Name *",
    type: "text",
    icon: User,
    required: true,
    autoComplete: "name",
  },
  {
    name: "email",
    placeholder: "Email Address *",
    type: "email",
    icon: Mail,
    required: true,
    autoComplete: "email",
  },
  {
    name: "subject",
    placeholder: "Subject",
    type: "text",
    icon: MessageSquare,
    required: false,
    autoComplete: "off",
  },
  {
    name: "phone",
    placeholder: "Phone Number *",
    type: "tel",
    icon: Phone,
    required: true,
    autoComplete: "tel",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-16 lg:py-16"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-green-100/40 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-green-100/40 blur-[140px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">


        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mx-auto mb-16 max-w-6xl text-center sm:mb-20 lg:mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="mb-2 flex items-center justify-center gap-4"
          >
            <span className="h-[4px] w-10 rounded-full bg-[#278d19] sm:w-14" />

            <span className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#172033] sm:text-lg">
              {site.contact.eyebrow}
            </span>

            <span className="h-[4px] w-10 rounded-full bg-[#278d19] sm:w-14" />
          </motion.div>

          <motion.h2
            id="contact-heading"
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl"
          >
            {site.contact.title[0]}{" "}
            <span className="bg-gradient-to-r from-[#269b13] to-[#16800b] bg-clip-text text-transparent">
              {site.contact.title[1] || site.contact.highlight}
            </span>
          </motion.h2>


          <motion.p
            variants={fadeUp}
            className="mx-auto mt-2 max-w-3xl text-base leading-relaxed text-[#475166] sm:text-lg lg:text-lg"
          >
            {site.contact.text}
          </motion.p>


          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-4 h-1 rounded-full bg-[#269b13]"
          />
        </motion.div>


        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(350px,0.9fr)] lg:gap-12 xl:gap-16">


          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="min-w-0"
          >

            <motion.div
              variants={fadeUp}
              className="mb-4 flex items-center gap-4"
            >
              <span className="h-[4px] w-11 rounded-full bg-[#29951c]" />

              <span className="text-base font-extrabold text-[#111827] sm:text-xl">
                Contact Us
              </span>
            </motion.div>


            <motion.h3
              variants={fadeUp}
              className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-5xl xl:text-5xl"
            >
              Feel Free to Write
            </motion.h3>


            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              onReset={handleReset}
              className="w-full"
            >

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

                {inputFields.map((field) => {
                  const Icon = field.icon;

                  return (
                    <motion.div
                      key={field.name}
                      whileHover={reduceMotion ? {} : { y: -2 }}
                      className="group relative"
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        className="absolute left-5 top-1/2 z-10 -translate-y-1/2 text-[#344054] transition-colors duration-300 group-focus-within:text-[#269b13]"
                      />

                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        autoComplete={field.autoComplete}
                        aria-label={field.placeholder}
                        className="h-[55px] w-full rounded-xl border-2 border-[#e0e4ec] bg-white pl-14 pr-5 text-base font-medium text-[#172033] outline-none transition-all duration-300 placeholder:text-[#344054] hover:border-green-200 focus:border-[#29951c] focus:bg-green-50/20 focus:shadow-[0_0_0_4px_rgba(41,149,28,0.07)] sm:h-[60px] sm:text-lg"
                      />
                    </motion.div>
                  );
                })}

              </div>


              <motion.div
                variants={fadeUp}
                whileHover={reduceMotion ? {} : { y: -2 }}
                className="group relative mt-5 sm:mt-6"
              >
                <Pencil
                  size={25}
                  strokeWidth={1.8}
                  className="absolute left-5 top-6 text-[#344054] transition-colors duration-300 group-focus-within:text-[#269b13]"
                />

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message *"
                  aria-label="Your Message"
                  className="min-h-[150px] w-full resize-y rounded-xl border-2 border-[#e0e4ec] bg-white py-5 pl-14 pr-5 text-base font-medium leading-relaxed text-[#172033] outline-none transition-all duration-300 placeholder:text-[#344054] hover:border-green-200 focus:border-[#29951c] focus:bg-green-50/20 focus:shadow-[0_0_0_4px_rgba(41,149,28,0.07)] sm:min-h-[150px] sm:text-lg"
                />
              </motion.div>


              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap items-center gap-5 sm:mt-8"
              >

                <motion.button
                  type="submit"
                  whileHover={reduceMotion ? {} : { scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-[#299e12] to-[#17810b] px-7 py-4 text-base font-extrabold text-white shadow-[0_8px_22px_rgba(41,149,28,0.18)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(41,149,28,0.30)] sm:min-h-[60px] sm:px-10 sm:text-xl"
                >
                  Send Message

                  <ArrowRight
                    size={25}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </motion.button>


                <motion.button
                  type="reset"
                  whileHover={reduceMotion ? {} : { scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-[#29951c] bg-white px-7 py-4 text-base font-bold text-[#258b18] transition-all duration-300 hover:bg-[#29951c] hover:text-white sm:min-h-[60px] sm:px-10 sm:text-xl"
                >
                  <RotateCcw
                    size={19}
                    className="transition-transform duration-500 group-hover:-rotate-180"
                  />
                  Reset
                </motion.button>
              </motion.div>


              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800"
                >
                  Your form is ready! Connect your backend API to
                  deliver this message to your email.
                </motion.p>
              )}

            </motion.form>
          </motion.div>

          <motion.aside
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="relative flex flex-col border-t border-[#e0e4ec] pt-12 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12"
          >

            <div className="absolute left-[-1px] top-0 hidden h-24 w-[2px] bg-gradient-to-b from-[#29951c] to-transparent lg:block" />


            <motion.div
              variants={fadeUp}
              className="mb-10 flex items-center gap-4 sm:mb-12"
            >
              <span className="h-[4px] w-11 rounded-full bg-[#29951c]" />

              <h3 className="text-xl font-extrabold text-[#111827] sm:text-2xl">
                Get in Touch
              </h3>
            </motion.div>


            <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">

              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target={item.id === 3 ? "_blank" : undefined}
                    rel={item.id === 3 ? "noopener noreferrer" : undefined}
                    variants={fadeUp}
                    whileHover={
                      reduceMotion
                        ? {}
                        : { x: 7 }
                    }
                    className="group flex items-center gap-5 sm:gap-7"
                  >

                    <div className="flex h-[46px] w-[56px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eff9e8] to-[#e5f4d9] transition-all duration-500 group-hover:rotate-[-5deg] group-hover:scale-110 group-hover:shadow-[0_10px_25px_rgba(41,149,28,0.13)] sm:h-[65px] sm:w-[70px] lg:h-[65px] lg:w-[70px]">
                      <Icon
                        size={35}
                        strokeWidth={1.9}
                        className="text-[#278d19] transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>


                    <div className="min-w-0 flex-1">
                      <h4 className="text-xl font-extrabold tracking-tight text-[#111827] transition-colors duration-300 group-hover:text-[#278d19] sm:text-2xl lg:text-xl">
                        {item.title}
                      </h4>

                      <p className="mt-2 break-words text-base leading-relaxed text-[#344054] transition-colors duration-300 group-hover:text-[#278d19] sm:text-lg lg:text-lg">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

            </div>


            <motion.div
              variants={fadeUp}
              className="mt-12 rounded-2xl border border-green-100 bg-gradient-to-r from-green-50 to-white p-6 sm:mt-16 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#29951c]" />

                <span className="text-base font-bold text-[#218b19]">
                  We're here to help!
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[#596273] sm:text-base">
                Have a project in mind? Let's discuss your EV
                charging requirements and build something great
                together.
              </p>
            </motion.div>

          </motion.aside>

        </div>
      </div>
    </section>
  );
}
