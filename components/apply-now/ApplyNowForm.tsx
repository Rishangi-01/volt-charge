
"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  UserRound,
  Building2,
  Mail,
  Phone,
  Plug,
  MapPin,
  CalendarDays,
  Pencil,
  Zap,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

type FieldProps = {
  label: string;
  required?: boolean;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
};

const Field = ({
  label,
  required = false,
  icon,
  children,
  className = "",
}: FieldProps) => {
  return (
    <div className={`group w-full ${className}`}>
      <label className="mb-2 block text-sm font-bold text-[#151d2c] sm:text-base">
        {label}
        {required && <span className="ml-1 text-[#299b1b]">*</span>}
      </label>

      <div className="relative flex min-h-[39px] items-center gap-4 border-b border-[#89909b] pb-2 transition-all duration-300 focus-within:border-[#36a51c] focus-within:border-b-2">
        <span className="shrink-0 text-[#172033] transition-colors duration-300 group-focus-within:text-[#269a18]">
          {icon}
        </span>

        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
};

const inputClass =
  "w-full bg-transparent text-sm font-medium text-[#172033] outline-none placeholder:text-[#737b88] sm:text-[15px]";

const selectClass =
  "w-full cursor-pointer appearance-none bg-transparent pr-8 text-sm font-medium text-[#737b88] outline-none sm:text-[15px]";

const fieldVariants = {
  hidden: {
    opacity: 0,
    y: 22,
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

export default function ApplyNowForm() {
  const shouldReduceMotion = useReducedMotion();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    installationType: "",
    chargerType: "",
    location: "",
    siteType: "",
    timeline: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setIsSubmitted(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Connect your API endpoint here.
      // Example: await fetch("/api/apply", { method: "POST", ... })

      console.log("Application Data:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);

      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        installationType: "",
        chargerType: "",
        location: "",
        siteType: "",
        timeline: "",
        details: "",
      });
    } catch (error) {
      console.error("Application submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="apply-now"
      className="relative overflow-hidden bg-white py-8 sm:py-16 lg:py-16 w-[100%]"
    >

      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-green-100/40 blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-lime-100/30 blur-[110px]" />

      <div className="relative mx-auto max-w-[1150px] px-5 sm:px-8 lg:px-14">

     

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-14"
        >
     

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-[3px] w-8 rounded-full bg-[#299b19] sm:w-10" />

            <span className="text-base font-bold tracking-tight text-[#151d2c] sm:text-lg">
              Apply Now
            </span>

            <span className="h-[3px] w-8 rounded-full bg-[#299b19] sm:w-10" />
          </div>

     

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-[46px] lg:text-[50px]">
            Apply for an{" "}
            <span className="bg-gradient-to-r from-[#69c51b] via-[#36a51a] to-[#17891a] bg-clip-text text-transparent">
              EV Charging Station
            </span>
          </h2>

     

          <p className="mx-auto mt-3 max-w-[680px] text-sm leading-relaxed text-[#4b5563] sm:text-base md:text-[17px]">
            Get started with your EV charging station setup. Fill out the
            form below and our team will get in touch with you shortly.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-5 h-[3px] rounded-full bg-[#299b19]"
          />
        </motion.div>

     

        <motion.form
          onSubmit={handleSubmit}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
          className="relative"
        >
          <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-12 lg:gap-y-8">

     

            <motion.div variants={fieldVariants}>
              <Field
                label="Full Name"
                required
                icon={<UserRound size={21} strokeWidth={1.9} />}
              >
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClass}
                  autoComplete="name"
                  required
                />
              </Field>
            </motion.div>

     

            <motion.div variants={fieldVariants}>
              <Field
                label="Company / Organization"
                icon={<Building2 size={21} strokeWidth={1.9} />}
              >
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name (if any)"
                  className={inputClass}
                  autoComplete="organization"
                />
              </Field>
            </motion.div>

     

            <motion.div variants={fieldVariants}>
              <Field
                label="Email Address"
                required
                icon={<Mail size={21} strokeWidth={1.9} />}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={inputClass}
                  autoComplete="email"
                  required
                />
              </Field>
            </motion.div>

     

            <motion.div variants={fieldVariants}>
              <Field
                label="Phone Number"
                required
                icon={<Phone size={21} strokeWidth={1.9} />}
              >
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={inputClass}
                  autoComplete="tel"
                  pattern="[0-9+\s()-]{7,20}"
                  required
                />
              </Field>
            </motion.div>

     

            <motion.div variants={fieldVariants}>
              <Field
                label="Installation Type"
                required
                icon={<Plug size={21} strokeWidth={1.9} />}
              >
                <div className="relative">
                  <select
                    name="installationType"
                    value={formData.installationType}
                    onChange={handleChange}
                    className={`${selectClass} ${
                      formData.installationType
                        ? "text-[#172033]"
                        : ""
                    }`}
                    required
                  >
                    <option value="" disabled>
                      Select installation type
                    </option>
                    <option value="New Installation">
                      New Installation
                    </option>
                    <option value="Existing Setup Upgrade">
                      Existing Setup Upgrade
                    </option>
                    <option value="Replacement">
                      Replacement
                    </option>
                    <option value="Expansion">
                      Expansion
                    </option>
                  </select>

                  <ChevronDown
                    size={19}
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#172033]"
                  />
                </div>
              </Field>
            </motion.div>

     

            <motion.div variants={fieldVariants}>
              <Field
                label="Preferred Charger Type"
                icon={<Zap size={21} strokeWidth={1.9} />}
              >
                <div className="relative">
                  <select
                    name="chargerType"
                    value={formData.chargerType}
                    onChange={handleChange}
                    className={`${selectClass} ${
                      formData.chargerType
                        ? "text-[#172033]"
                        : ""
                    }`}
                  >
                    <option value="" disabled>
                      Select charger type
                    </option>
                    <option value="AC Charger">AC Charger</option>
                    <option value="DC Fast Charger">
                      DC Fast Charger
                    </option>
                    <option value="Both AC & DC">
                      Both AC & DC
                    </option>
                    <option value="Not Sure">Not Sure</option>
                  </select>

                  <ChevronDown
                    size={19}
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#172033]"
                  />
                </div>
              </Field>
            </motion.div>

     

            <motion.div
              variants={fieldVariants}
              className="sm:col-span-2"
            >
              <Field
                label="Installation Location (Address)"
                required
                icon={<MapPin size={21} strokeWidth={1.9} />}
              >
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter complete address"
                  className={inputClass}
                  autoComplete="street-address"
                  required
                />
              </Field>
            </motion.div>

     

            <motion.div variants={fieldVariants}>
              <Field
                label="Site Type"
                required
                icon={<Building2 size={21} strokeWidth={1.9} />}
              >
                <div className="relative">
                  <select
                    name="siteType"
                    value={formData.siteType}
                    onChange={handleChange}
                    className={`${selectClass} ${
                      formData.siteType ? "text-[#172033]" : ""
                    }`}
                    required
                  >
                    <option value="" disabled>
                      Select site type
                    </option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Public Parking">Public Parking</option>
                    <option value="Highway">Highway</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Other">Other</option>
                  </select>

                  <ChevronDown
                    size={19}
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#172033]"
                  />
                </div>
              </Field>
            </motion.div>

     

            <motion.div variants={fieldVariants}>
              <Field
                label="Expected Timeline"
                icon={<CalendarDays size={21} strokeWidth={1.9} />}
              >
                <div className="relative">
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={`${selectClass} ${
                      formData.timeline ? "text-[#172033]" : ""
                    }`}
                  >
                    <option value="" disabled>
                      Select timeline
                    </option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 2 Weeks">
                      Within 2 Weeks
                    </option>
                    <option value="Within 1 Month">
                      Within 1 Month
                    </option>
                    <option value="Within 3 Months">
                      Within 3 Months
                    </option>
                    <option value="Just Exploring">
                      Just Exploring
                    </option>
                  </select>

                  <ChevronDown
                    size={19}
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#172033]"
                  />
                </div>
              </Field>
            </motion.div>

     

            <motion.div
              variants={fieldVariants}
              className="sm:col-span-2"
            >
              <Field
                label="Additional Details / Requirements"
                icon={<Pencil size={21} strokeWidth={1.9} />}
              >
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Let us know any specific requirements (optional)"
                  rows={1}
                  className={`${inputClass} min-h-[28px] resize-y`}
                />
              </Field>
            </motion.div>

          </div>

     

          <motion.div
            variants={fieldVariants}
            className="mt-10 flex flex-col items-center justify-center"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -3 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              className="group relative inline-flex min-h-[50px] min-w-[220px] items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#61b91b] via-[#299e12] to-[#218b0e] px-8 py-3.5 text-base font-bold text-white shadow-[0_7px_20px_rgba(43,151,17,0.2)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(43,151,17,0.35)] disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[250px] sm:text-lg"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Application"}
              </span>

              {isSubmitting ? (
                <LoaderCircle
                  size={20}
                  className="relative animate-spin"
                />
              ) : (
                <ArrowRight
                  size={21}
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </motion.button>

     

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center gap-2 rounded-lg bg-green-50 px-5 py-3 text-sm font-semibold text-green-700"
                role="status"
              >
                <CheckCircle2 size={19} />
                Your application has been submitted successfully!
              </motion.div>
            )}
          </motion.div>
        </motion.form>

      </div>
    </section>
  );
}
