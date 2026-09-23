export interface Project {
  id: string;
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  overview: string;
  problem: string;
  approach: string;
  technologies: string[];
  keyFeatures: string[];
  architecture: {
    steps: { title: string; desc: string }[];
    summary: string;
  };
  visualBg: string;
  accentColor: string;
  status: string;
  githubUrl?: string;
  demoUrl?: string;
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "fin-tech",
    number: "01",
    slug: "fin-tech",
    title: "FIN TECH",
    subtitle: "NLP Document Parsing",
    category: "Natural Language Processing",
    shortDescription:
      "Developed an NLP system to extract structured information from financial documents.",
    overview:
      "FIN TECH is an intelligent document processing engine engineered to parse unstructured financial paperwork, statements, and reports into validated, structured schemas for downstream analytical pipelines.",
    problem:
      "Financial institutions and analysts face immense overhead manually extracting key tabular data, entities, and line-item disclosures from heterogeneous, semi-structured PDFs and scan documents with varying layouts.",
    approach:
      "Engineered an automated pipeline utilizing OCR preprocessing, context-aware tokenization, Named Entity Recognition (NER) for financial terminologies, and heuristic layout parsers to reconstruct clean key-value structures.",
    technologies: ["Python", "NLP", "Machine Learning", "Document AI", "Regex & Heuristics", "SQL"],
    keyFeatures: [
      "Automated extraction of financial entities, balances, transaction tables, and timestamps.",
      "Support for varying PDF document layouts and semi-structured tabular formats.",
      "Data normalization engine standardizing dates, currencies, and accounting conventions.",
      "Validation layer verifying mathematical consistency and balance reconciliation.",
    ],
    architecture: {
      summary:
        "Multi-stage ingestion: Raw Document Ingestion → Layout-Aware Text & Table Extraction → Financial NER Classification → Schema Normalization → Structured Database Export.",
      steps: [
        {
          title: "1. Document Ingestion & Optical Parsing",
          desc: "Processes incoming multi-page PDFs, raster images, and scans with bounding-box extraction.",
        },
        {
          title: "2. Contextual Tokenization & NER",
          desc: "Identifies financial entities, fiscal identifiers, and line-item semantics.",
        },
        {
          title: "3. Layout Reconstruction",
          desc: "Aligns columns, rows, and headers to prevent data distortion across pages.",
        },
        {
          title: "4. Output Standardization",
          desc: "Exports validated JSON/SQL datasets ready for immediate enterprise consumption.",
        },
      ],
    },
    visualBg: "from-indigo-950/40 via-purple-950/20 to-neutral-950",
    accentColor: "#6366F1",
    status: "Results will be added as the project evolves.",
    githubUrl: "https://github.com/Jaganjazz",
    demoUrl: "https://github.com",
  },
  {
    id: "vision-spec",
    number: "02",
    slug: "vision-spec",
    title: "VISION SPEC",
    subtitle: "Visual Quality Control",
    category: "Computer Vision",
    shortDescription:
      "Built a computer vision model for automated defect detection in manufacturing.",
    overview:
      "VISION SPEC applies state-of-the-art computer vision models to perform automated, real-time quality control on assembly lines, identifying minute surface anomalies and structural imperfections at high throughput.",
    problem:
      "Manual quality control inspection is prone to fatigue, subjective bias, and operational bottlenecks. Traditional rule-based inspection fails under micro-lighting shifts and slight product position variance.",
    approach:
      "Designed a convolutional deep learning architecture fine-tuned on industrial defect benchmarks, paired with image augmentation techniques and optimized edge-inference routines to reliably detect subtle fractures and defects.",
    technologies: ["Python", "Computer Vision", "Machine Learning", "Deep Learning", "Data Analytics"],
    keyFeatures: [
      "High-accuracy localized defect classification and bounding-box anomaly isolation.",
      "Preprocessing pipeline compensating for specular reflection and lighting variances.",
      "Real-time inference capability designed for high-speed manufacturing pipelines.",
      "Visual feedback interface highlighting anomalous regions for human validation.",
    ],
    architecture: {
      summary:
        "Industrial Camera Stream → Preprocessing & Histogram Equalization → Deep Feature Extraction & Anomaly Segmentation → Defect Thresholding → Alert & Metric Pipeline.",
      steps: [
        {
          title: "1. Frame Capture & Normalization",
          desc: "Receives raw camera sensor feeds and normalizes contrast and perspective.",
        },
        {
          title: "2. Convolutional Feature Extraction",
          desc: "Extracts multi-scale spatial features sensitive to microscopic surface defects.",
        },
        {
          title: "3. Heatmap & Bounding Generation",
          desc: "Pinpoints exact coordinates of fractures, bubbles, or misalignment.",
        },
        {
          title: "4. Quality Gate Decision",
          desc: "Applies statistical confidence thresholds to pass or reject items instantly.",
        },
      ],
    },
    visualBg: "from-blue-950/40 via-cyan-950/20 to-neutral-950",
    accentColor: "#38BDF8",
    status: "Results will be added as the project evolves.",
    githubUrl: "https://github.com/Jaganjazz",
    demoUrl: "https://github.com",
  },
  {
    id: "triviva",
    number: "03",
    slug: "triviva",
    title: "TRIVIVA",
    subtitle: "AI Travel Planner",
    category: "Generative AI & Backend Architecture",
    shortDescription: "From Dream to Itinerary in Seconds",
    overview:
      "An AI-powered travel planner that turns destination, budget, travel style, duration, interests, and traveler preferences into personalized day-by-day journeys. TRIVIVA combines Google Gemini with a Python/FastAPI service layer and a smart budget engine to generate structured itineraries, recommendations, estimated costs, and travel tips.",
    problem:
      "Planning a trip often requires combining destinations, duration, transportation, number of travelers and budget into a practical itinerary. TRIVIVA aims to simplify this process by combining user preferences with AI-generated planning.",
    approach:
      "Architected a modular AI system: a Python/FastAPI backend executing trip validation and budget estimation engines, integrated with Google Gemini via secure server-side calls to produce validated, structured JSON day-by-day itineraries.",
    technologies: [
      "Python",
      "FastAPI",
      "Google Gemini",
      "Gradio",
      "Pydantic",
      "Vercel",
    ],
    keyFeatures: [
      "AI-generated personalized travel itineraries with day-by-day morning, afternoon, and evening planning.",
      "Smart budget estimation across transport, accommodation, food, and activities.",
      "Personalized recommendations for places, local culinary spots, and curated activities.",
      "Structured JSON-based AI responses validated through Pydantic schemas.",
      "Secure server-side Google Gemini API integration with zero client-side key exposure.",
      "FastAPI backend architecture with Vercel serverless deployment readiness.",
    ],
    architecture: {
      summary:
        "User → TRIVIVA UI → Gradio / FastAPI → Python Services (Trip Validation, Budget Engine, Itinerary Engine) → Google Gemini → Structured Itinerary + Budget Breakdown.",
      steps: [
        {
          title: "1. User Travel Parameters",
          desc: "Captures destination, duration, travelers, budget, travel style, transport, and interests.",
        },
        {
          title: "2. Gradio / FastAPI Interface",
          desc: "Provides reactive web UI and manages asynchronous client-server communication.",
        },
        {
          title: "3. Python Services Engine",
          desc: "Executes Trip Validation, Budget Engine, and Itinerary Engine with Pydantic validation.",
        },
        {
          title: "4. Google Gemini & Structured JSON",
          desc: "Generates structured day-wise itinerary, budget breakdowns, and contextual travel tips.",
        },
      ],
    },
    visualBg: "from-violet-950/40 via-purple-950/20 to-neutral-950",
    accentColor: "#8B5CF6",
    status: "DEPLOYED",
    githubUrl: "https://github.com/Jaganjazz/Trip-planner",
    demoUrl: "https://triviva-jet.vercel.app/",
  },
  {
    id: "aibnids",
    number: "04",
    slug: "aibnids",
    title: "AI-BASED NIDS",
    subtitle: "Network Intrusion Detection System",
    category: "Machine Learning & Cybersecurity",
    shortDescription:
      "Developed a machine learning model to detect malicious network traffic and cyber threats.",
    overview:
      "AI-BASED NIDS is an automated network security defense system that analyzes packet flow characteristics in real time to classify benign activity versus malicious cyber threats, port scans, and denial-of-service vectors.",
    problem:
      "Traditional signature-based intrusion detection fails against zero-day exploits and polymorphic network attacks. Security teams need anomaly detection that generalizes across novel attack topologies.",
    approach:
      "Applied statistical feature engineering and supervised classification algorithms trained on network benchmark datasets to classify traffic anomalies with minimal false-positive rates.",
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analytics",
      "SQL",
      "Feature Engineering",
    ],
    keyFeatures: [
      "Statistical packet flow profiling (packet lengths, inter-arrival times, protocol ratios).",
      "High-precision binary and multi-class classification of threat vectors.",
      "Robust feature selection isolating high-signal telemetry attributes.",
      "Early warning telemetry logging for SOC review and triage.",
    ],
    architecture: {
      summary:
        "Network Packet Stream → Flow Aggregation & Feature Extraction → Supervised ML Classification → Threat Scoring & Anomaly Flagging → Security Alert Output.",
      steps: [
        {
          title: "1. Telemetry Capture",
          desc: "Captures raw packet headers and session flow metadata from network interfaces.",
        },
        {
          title: "2. Feature Extraction & Scaling",
          desc: "Computes flow duration, byte volume, flags, and packet rate metrics.",
        },
        {
          title: "3. Threat Classification Engine",
          desc: "Evaluates multi-class models to classify attack signatures (DoS, Probe, R2L, U2R).",
        },
        {
          title: "4. Automated Alert Dispatch",
          desc: "Generates forensic logs and flags anomalous IP sessions for immediate mitigation.",
        },
      ],
    },
    visualBg: "from-rose-950/40 via-purple-950/20 to-neutral-950",
    accentColor: "#F43F5E",
    status: "Results will be added as the project evolves.",
    githubUrl: "https://github.com/Jaganjazz",
    demoUrl: "https://github.com",
  },
];
