import ContactSection from "@/components/contact-us/ContactSection";
import ContactUsBanner from "@/components/contact-us/ContactUsBanner";

export default function ContactUs() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ContactUsBanner />
      <ContactSection />
    </div>
  );
}
