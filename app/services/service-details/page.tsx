import ServiceDetailsBanner from "@/components/service-details/ServiceDetailsBanner";
import ServiceDetailsSec from "@/components/service-details/ServiceDetailsSec";
import Image from "next/image";

export default function ServiceDetails() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ServiceDetailsBanner />
      <ServiceDetailsSec />
    </div>
  );
}
