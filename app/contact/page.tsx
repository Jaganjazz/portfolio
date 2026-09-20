import { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Inquiries — Jagan S",
  description: "Get in touch with Jagan S for AI engineering roles, projects, or collaborations.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
