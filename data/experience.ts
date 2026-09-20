export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  affiliation?: string;
  period?: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "edunet-ibm",
    role: "AI & ML Intern",
    organization: "Edunet Foundation",
    affiliation: "IBM SkillBuild",
    description:
      "Developed and evaluated machine learning models using real-world datasets.",
    bullets: [
      "Developed and evaluated machine learning models using real-world datasets.",
      "Applied statistical performance metrics to analyze precision, recall, and model generalizability.",
      "Participated in structured workshops on cognitive computing and applied machine learning pipelines.",
    ],
    skills: ["Machine Learning", "Python", "Data Evaluation", "Model Assessment"],
  },
  {
    id: "aicte-vois",
    role: "Cybersecurity & Generative AI Intern",
    organization: "AICTE–VOIS Program",
    affiliation: "AICTE & Vodafone Idea Foundation",
    description:
      "Gaining hands-on experience in AI-driven cybersecurity concepts and applications.",
    bullets: [
      "Gaining hands-on experience in AI-driven cybersecurity concepts and applications.",
      "Investigated defensive applications of Generative AI for automated vulnerability pattern detection.",
      "Analyzed modern threat mitigation techniques and network traffic telemetry.",
    ],
    skills: ["Generative AI", "Cybersecurity", "Threat Analysis", "Python"],
  },
  {
    id: "infotech-solutions",
    role: "Data Science & Machine Learning Intern",
    organization: "Infotech Solutions",
    description:
      "Performed data preprocessing, EDA, feature engineering, and predictive modeling using Python.",
    bullets: [
      "Performed data preprocessing, exploratory data analysis (EDA), and cleaning on diverse tabular datasets.",
      "Executed feature engineering workflows to isolate predictive signals.",
      "Trained and tuned supervised machine learning algorithms to model key performance indicators.",
    ],
    skills: ["Python", "Data Preprocessing", "EDA", "Feature Engineering", "Predictive Modeling"],
  },
  {
    id: "nsic-tech",
    role: "Python Programming Intern",
    organization: "NSIC Technical Services Centre",
    description:
      "Built Python automation scripts and strengthened programming and problem-solving skills.",
    bullets: [
      "Built Python automation scripts to streamline workflow tasks and data manipulation.",
      "Strengthened object-oriented programming principles and algorithmic problem-solving.",
      "Constructed modular utility libraries for automated data ingestion and file transformation.",
    ],
    skills: ["Python", "Scripting", "Automation", "Problem Solving", "Data Manipulation"],
  },
];
