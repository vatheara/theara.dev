import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Practical AI development, LLM fine-tuning, retrieval systems & computer vision.',
    skills: [
      { name: 'LLM Orchestration & Prompting' },
      { name: 'Vector Search & Embeddings' },
      { name: 'OpenAI / Claude / Gemini APIs' },
      { name: 'Computer Vision & Face Recognition' },
      { name: 'RAG Systems' },
      { name: 'LangChain & LlamaIndex' },
    ],
  },
  {
    title: 'Frontend Engineering',
    description: 'Building ultra-fast, accessible, and responsive user interfaces.',
    skills: [
      { name: 'TypeScript / JavaScript' },
      { name: 'React & Next.js' },
      { name: 'Astro' },
      { name: 'Tailwind CSS' },
      { name: 'Progressive Web Apps (PWA)' },
      { name: 'Canvas 2D & Micro-animations' },
    ],
  },
  {
    title: 'Backend & Cloud Edge',
    description: 'Serverless backends, edge workers, and distributed APIs.',
    skills: [
      { name: 'Node.js & Bun' },
      { name: 'Python' },
      { name: 'Cloudflare Workers & Pages' },
      { name: 'PostgreSQL & SQLite' },
      { name: 'Redis & Upstash' },
      { name: 'REST & GraphQL APIs' },
    ],
  },
  {
    title: 'DevOps & Tooling',
    description: 'Automated CI/CD pipelines, containerization, and developer velocity.',
    skills: [
      { name: 'Git & GitHub Actions' },
      { name: 'Cloudflare Ecosystem' },
      { name: 'Docker' },
      { name: 'Vite & Webpack' },
      { name: 'Wrangler CLI' },
      { name: 'Performance Profiling' },
    ],
  },
];
