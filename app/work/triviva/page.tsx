import TrivivaCaseStudy from "@/components/projects/TrivivaCaseStudy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRIVIVA: AI Travel Planner — Jagan S",
  description: "An AI-powered travel planner combining Google Gemini with a Python/FastAPI service layer and smart budget engine to generate structured itineraries.",
};

export default function TrivivaPage() {
  return <TrivivaCaseStudy />;
}

