import ServicesSection from "@/components/home/ServicesSection";
import ServicesBanner from "@/components/services/ServicesBanner";

export default function Services() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ServicesBanner />
      <ServicesSection />
    </div>
  );
}
