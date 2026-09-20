export interface Certification {
  id: string;
  organization: string;
  title: string;
  tag: string;
  year?: string;
  verified: boolean;
  certificateUrl?: string; // Only if real URL exists
}

export const certifications: Certification[] = [
  {
    id: "cisco-data-analytics",
    organization: "Cisco",
    title: "Data Analytics Essentials",
    tag: "Data Analytics",
    verified: true,
  },
  {
    id: "nptel-python-ds",
    organization: "NPTEL",
    title: "Python for Data Science",
    tag: "Data Science & Python",
    verified: true,
  },
  {
    id: "infosys-genai",
    organization: "Infosys Springboard",
    title: "Generative AI for All",
    tag: "Generative AI",
    verified: true,
  },
  {
    id: "salesforce-agentblazer",
    organization: "Trailhead by Salesforce",
    title: "Agentblazer Champion",
    tag: "AI Agents & Automation",
    verified: true,
  },
  {
    id: "google-arcade",
    organization: "Google Cloud",
    title: "The Google Arcade Facilitator Program",
    tag: "Cloud & Hands-on Labs",
    verified: true,
  },
];
