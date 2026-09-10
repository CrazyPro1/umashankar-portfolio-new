export interface ExperienceItem {
  id: string;
  role: string;
  targetRole?: string;
  company: string;
  location: string;
  period: string;
  type: string;
  leadershipHighlights: string[];
  responsibilities: string[];
  technologies: string[];
  impactMetrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & GenAI Testing' | 'Automation Frameworks' | 'Performance & Reliability';
  description: string;
  longDescription: string;
  keyContributions: string[];
  aiTestingFocus?: string[];
  architecture: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveDemoAvailable?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    isAiKeyword?: boolean;
    tags?: string[];
  }[];
}

export interface ATSKeyword {
  keyword: string;
  category: 'GenAI & LLM Testing' | 'Leadership & Ownership' | 'Automation & Frameworks' | 'CI/CD & Infrastructure';
  countInResume: number;
  importance: 'Critical' | 'High' | 'Standard';
  relevanceExplanation: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  proficiencyNote: string;
}

export interface TestExecutionStep {
  name: string;
  type: 'RAG_EVAL' | 'API_ASSERT' | 'CONTAINER_SETUP' | 'GROUNDEDNESS' | 'E2E_UI';
  target: string;
  status: 'pending' | 'running' | 'passed' | 'failed';
  durationMs: number;
  assertion: string;
  details: string;
}
