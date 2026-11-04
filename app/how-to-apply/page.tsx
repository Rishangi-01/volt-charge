import StatsSection from "@/components/home/StatsSection";
import HowToApplyBanner from "@/components/how-to-apply/HowToApplyBanner";
import HowToApplySec from "@/components/how-to-apply/HowToApplySec";

export default function HowToApply() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HowToApplyBanner />
      <HowToApplySec />
      <StatsSection />
    </div>
  );
}
