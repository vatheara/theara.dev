export interface Tag {
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'purple';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  href: string;
  github?: string;
  logo: string;
  category: 'AI & ML' | 'SaaS' | 'Web Apps';
  tags: Tag[];
  stats?: { label: string; value: string }[];
  featured?: boolean;
  year: string;
  status: 'Live' | 'Active Beta' | 'In Development';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  achievements?: string[];
  techStack?: string[];
}
