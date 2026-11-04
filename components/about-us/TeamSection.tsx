
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Zap } from "lucide-react";
import { site } from "@/data/index";

const teamMembers = site.team.members.map((member, index) => ({
  id: index + 1,
  name: member.name,
  role: member.role,
  image: member.image,
}));

export default function TeamSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-12 w-[100%]">

      
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-green-100/30 blur-[100px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">

        
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mb-10 text-center sm:mb-12 lg:mb-14"
        >


          <div className="mb-3 flex items-center justify-center gap-3 sm:gap-4">

            <span className="h-[2px] w-9 bg-[#70b92a] sm:w-12" />

            <div className="flex items-center gap-2">
              <Zap
                size={21}
                fill="#62b51e"
                className="text-[#62b51e]"
              />

              <span className="text-sm font-bold uppercase tracking-[0.13em] text-[#101828] sm:text-base">
                {site.team.eyebrow}
              </span>
            </div>

            <span className="h-[2px] w-9 bg-[#70b92a] sm:w-12" />

          </div>


          <h2 className="text-3xl font-extrabold tracking-tight text-[#101828] sm:text-4xl md:text-5xl lg:text-[46px]">

            {site.team.heroTitle}

          </h2>


          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[#525b6b] sm:text-base md:text-lg">
            {site.team.title}
          </p>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-5"
        >

          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -8,
                      transition: {
                        duration: 0.3,
                      },
                    }
              }
              className="group relative overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.035)] transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(50,130,20,0.12)]"
            >

              
              <div className="relative h-[300px] overflow-hidden bg-[#e9e9e9] sm:h-[260px] lg:h-[250px] xl:h-[265px]">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

              
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              </div>

              
              <div className="relative flex min-h-[92px] flex-col items-center justify-center bg-gradient-to-b from-white to-[#fafafa] px-3 py-3 text-center sm:min-h-[92px]">


                <h3 className="text-[17px] font-bold tracking-tight text-[#101828] transition-colors duration-300 group-hover:text-[#369b16] sm:text-[17px] lg:text-base xl:text-lg">
                  {member.name}
                </h3>


                <p className="mt-1 text-sm font-medium text-[#525b6b] sm:text-[13px] lg:text-[12px] xl:text-sm">
                  {member.role}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: shouldReduceMotion ? 0 : 0.4 + index * 0.12,
                  }}
                  className="mt-3 h-[3px] rounded-full bg-gradient-to-r from-[#85d52c] to-[#399b12]"
                />

              </div>

            </motion.article>
          ))}

        </motion.div>

      </div>
    </section>
  );
}
