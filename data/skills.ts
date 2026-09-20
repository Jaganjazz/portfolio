export interface SkillCategory {
  number: string;
  category: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    number: "01",
    category: "PROGRAMMING",
    description: "Core languages for building resilient computational systems and pipelines.",
    skills: ["Python", "SQL"],
  },
  {
    number: "02",
    category: "AI / ML",
    description: "Statistical modeling, deep representations, and automated intelligence.",
    skills: ["Machine Learning", "Artificial Intelligence"],
  },
  {
    number: "03",
    category: "DATA",
    description: "Transformation, exploratory data analysis, and enterprise visualization.",
    skills: ["Data Analytics", "Power BI", "Excel"],
  },
  {
    number: "04",
    category: "AI DEVELOPMENT",
    description: "Directing foundational models through structured prompts and agentic workflows.",
    skills: ["Prompt Engineering"],
  },
];

export const whatIBuild = [
  {
    id: "ai-systems",
    title: "AI SYSTEMS",
    tagline: "End-to-end intelligent pipelines designed to automate complex domain tasks.",
    skills: ["Architecture", "System Design", "Inference Pipelines"],
  },
  {
    id: "machine-learning",
    title: "MACHINE LEARNING",
    tagline: "Predictive, classification, and anomaly detection models trained on real-world datasets.",
    skills: ["Feature Engineering", "Model Evaluation", "Supervised Learning"],
  },
  {
    id: "generative-ai",
    title: "GENERATIVE AI",
    tagline: "Harnessing large foundation models with structured reasoning and prompt architectures.",
    skills: ["Prompt Engineering", "Contextual Workflows", "LLM Integration"],
  },
  {
    id: "computer-vision",
    title: "COMPUTER VISION",
    tagline: "Visual perception and inspection models for quality control and spatial reasoning.",
    skills: ["Object Detection", "Defect Segmentation", "Image Preprocessing"],
  },
  {
    id: "data-products",
    title: "DATA PRODUCTS",
    tagline: "Transforming raw telemetries into decision-ready business intelligence and clean tables.",
    skills: ["SQL Analytics", "Power BI Dashboards", "EDA Pipelines"],
  },
  {
    id: "intelligent-apps",
    title: "INTELLIGENT APPLICATIONS",
    tagline: "Software experiences with embedded intelligence, autonomous reasoning, and clean UI.",
    skills: ["API Integration", "Automation Scripts", "Interactive Prototypes"],
  },
];

export const currentlyExploring = [
  "AI Engineering",
  "Generative AI",
  "Machine Learning",
  "Computer Vision",
  "Intelligent Applications",
];
