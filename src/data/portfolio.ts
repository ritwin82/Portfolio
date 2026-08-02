// TODO: Update any of this content as your journey grows. Keeping it here means no JSX edits are needed.
export const profile = {
  name: "Ritwin A.S",
  title: "AI Engineer & Information Technology Undergraduate",
  about: "I'm an Information Technology undergraduate passionate about Artificial Intelligence, Machine Learning, and AI Engineering. I build intelligent systems for real-world problems, with a focus on LLMs, Retrieval-Augmented Generation, multi-agent systems, computer vision, and MLOps. My goal is to design production-ready AI that is accurate, efficient, and meaningful.",
  phone: "+91 93442 46115", email: "ritwin.as2007@gmail.com",
  linkedin: "https://www.linkedin.com/in/ritwin-a-s-358830319", github: "https://github.com/ritwin82",
};

export const education = [
  { institution: "Vellore Institute of Technology", degree: "B.Tech, Information Technology", duration: "2024 – Present", score: "CGPA 9.40", highlight: "Building a strong foundation in AI, software engineering, and data systems." },
  { institution: "Senthil Public School", degree: "Higher Secondary Education", duration: "2022 – 2024", score: "94.2%", highlight: "Graduated with distinction in the science stream." },
  { institution: "Senthil Public School", degree: "Secondary School Education", duration: "2021 – 2022", score: "98.6%", highlight: "Achieved outstanding academic performance." },
];

education[1] = {
  ...education[1],
  duration: "2023–2024",
  highlight: "Strengthened analytical thinking through a focused science curriculum.",
};

export const experience = [
  { company: "Samsung PRISM Research Program", role: "AI Research Intern", duration: "Jul 2026 – Present", bullets: ["Building an enterprise-grade multimodal retrieval system across text, images, audio, and video.", "Combining AI-generated metadata, dense embeddings, and hybrid retrieval for low-latency search."] },
  { company: "Mozilla Firefox Club, VIT", role: "Core Committee Member · Tech Domain", duration: "Aug 2025 – Present", bullets: ["Led technical operations and judging for CodeXscape, serving 150+ participants.", "Coordinated Playnamics end-to-end, from evaluation to workshop execution.", "Built Pulse, a local lakehouse analytics and A/B experimentation platform."] },
];

export const certifications = [
  { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "Oct 2025", type: "Certification" },
  { name: "1st Place, Neural Hack (Yantra 2026)", issuer: "ACM VIT", date: "2026", type: "Achievement" },
  { name: "Finalist, Code2Create (Gravitas 2025)", issuer: "ACM VIT", date: "2025", type: "Achievement" },
  { name: "Round 2 Qualifier, Central Hack (Yantra 2026)", issuer: "VIT", date: "2026", type: "Achievement" },
];

export const techMatrix = [
  { category: "Programming Languages", skills: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { category: "AI / Machine Learning", skills: ["PyTorch", "TensorFlow/Keras", "Scikit-learn", "Transformers", "CNNs", "FinBERT", "spaCy"] },
  { category: "Generative AI", skills: ["LLMs", "Retrieval-Augmented Generation (RAG)", "Hybrid RAG", "Multi-Agent AI", "Prompt Engineering", "Ollama"] },
  { category: "AI Frameworks & Tools", skills: ["LangChain", "ChromaDB", "Sentence Transformers", "Faster-Whisper", "MediaPipe", "OpenCV"] },
  { category: "Backend & APIs", skills: ["FastAPI", "Express.js", "REST APIs", "Uvicorn"] },
  { category: "Frontend", skills: ["React", "Next.js", "Vite", "Streamlit", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Data & Analytics", skills: ["DuckDB", "Apache Parquet", "NumPy", "Pandas", "BM25", "Cross-Encoder Re-ranking"] },
  { category: "Developer Tools", skills: ["Git", "GitHub", "Weights & Biases (W&B)", "Monaco Editor"] },
];

export const projects = [
  { title: "FinAudio Intel", description: "A six-layer forensic platform for financial call recordings. It pairs transcription, diarization, and tamper detection with NLP compliance, RAG chat, and audit reporting.", stack: ["FastAPI", "Next.js", "FinBERT", "PyTorch"], github: "https://github.com/TarunRam-git/devsoc", live: "" },
  { title: "GPT-MoE", description: "A GPT-style sparse Mixture-of-Experts transformer built from scratch, with routing loss and an interpretability pipeline for expert specialization.", stack: ["Python", "PyTorch", "Transformers", "W&B"], github: "https://github.com/ritwin82/Mixture-Of-Experts", live: "" },
  { title: "EasyLLM", description: "A fully local, privacy-first AI assistant supporting multimodal chat, PDF Q&A, and image generation without cloud dependency.", stack: ["Ollama", "LangChain", "ChromaDB", "Streamlit"], github: "https://github.com/Nachi2006/C2C-LeDragons-EasyLLM", live: "" },
  { title: "Speech-to-ISL Avatar", description: "An offline pipeline that turns speech or text into Indian Sign Language avatar animations with low-latency, privacy-preserving inference.", stack: ["Faster-Whisper", "OpenCV", "MediaPipe", "Three.js"], github: "https://github.com/TarunRam-git/womentechies", live: "" },
  { title: "Analytica", description: "A self-contained event analytics and A/B experimentation platform with a Parquet lakehouse and fast DuckDB-powered queries.", stack: ["FastAPI", "DuckDB", "React", "TypeScript"], github: "https://github.com/ritwin82/Pulse", live: "" },
  { title: "DebugMind", description: "A multi-persona AI debugging workspace where specialized agents reach high-confidence fixes using a consensus engine and RAG.", stack: ["FastAPI", "React", "Groq", "RAG"], github: "https://github.com/ritwin82/Multi_Persona_AI_Debugger", live: "" },
  { title: "AutoML Web Application", description: "A full-stack ML platform that automates dataset preparation, training, tuning, model selection, and predictions.", stack: ["FastAPI", "scikit-learn", "Pandas", "JavaScript"], github: "https://github.com/ritwin82/Auto_ml_pipeline", live: "" },
  { title: "RepoSage", description: "Repository intelligence that answers codebase questions through hybrid RAG, RRF, and cross-encoder re-ranking with citations.", stack: ["Python", "ChromaDB", "BM25", "Ollama"], github: "https://github.com/ritwin82/Reposage", live: "" },
];
