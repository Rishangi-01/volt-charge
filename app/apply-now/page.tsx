import ApplyNowBanner from "@/components/apply-now/ApplyNowBanner";
import ApplyNowForm from "@/components/apply-now/ApplyNowForm";

export default function ApplyNow() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ApplyNowBanner />
      <ApplyNowForm />
    </div>
  );
}
