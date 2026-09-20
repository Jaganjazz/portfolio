import { Metadata } from "next";
import CertificationsSection from "@/components/certifications/CertificationsSection";

export const metadata: Metadata = {
  title: "Accredited Certifications — Jagan S",
  description: "Verified certifications earned by Jagan S from Cisco, NPTEL, Infosys Springboard, Salesforce Trailhead, and Google Cloud.",
};

export default function CertificationsPage() {
  return (
    <div className="pt-16">
      <CertificationsSection />
    </div>
  );
}
