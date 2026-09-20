export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  highlights?: string[];
}

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech",
    field: "Artificial Intelligence and Data Science",
    institution: "PSV College of Engineering Technology",
    period: "2023 – 2027",
    scoreLabel: "CGPA",
    scoreValue: "8.5*",
    highlights: [
      "Rigorous curriculum covering foundational Machine Learning, Deep Neural Networks, Probability, Algorithms, and Data Engineering.",
      "Active participant in technical symposiums, AI build sprints, and student coding communities.",
    ],
  },
  {
    degree: "HSC — Class XII",
    field: "Higher Secondary Certification",
    institution: "Government Boys Higher Secondary School",
    period: "2022 – 2023",
    scoreLabel: "Percentage",
    scoreValue: "84%",
    highlights: [
      "Core focus on Mathematics, Physics, and Computer Science.",
      "Strong analytical and logical problem-solving grounding.",
    ],
  },
];
