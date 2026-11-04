import AboutBanner from "@/components/about-us/AboutBanner";
import TeamSection from "@/components/about-us/TeamSection";
import WhyChooseUs from "@/components/about-us/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <AboutBanner />
      <AboutSection />
      <WhyChooseUs />
      <TeamSection />
      <StatsSection />
    </div>
  );
}
