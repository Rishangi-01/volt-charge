import FaqsBanner from "@/components/faqs/FaqsBanner";
import FAQSection from "@/components/faqs/FAQSection";
import StatsSection from "@/components/home/StatsSection";

export default function Faqs() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <FaqsBanner />
      <FAQSection />
      <StatsSection />
    </div>
  );
}
