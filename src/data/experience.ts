import type { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Founder & AI Engineer',
    company: 'KhmerGPT',
    companyUrl: 'https://chat.domnossrai.com/',
    description:
      'Created and scaled an AI conversational platform tailored for Khmer language users, integrating state-of-the-art LLMs, PWA offline caching, and localized AI toolkits.',
    achievements: [
      'Engineered an edge-deployed, real-time streaming AI chatbot with low latency.',
      'Designed a multi-model fallback strategy ensuring high availability across OpenAI and Anthropic endpoints.',
      'Built custom prompt templates and localized workflows to assist Cambodian students, teachers, and professionals.',
    ],
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Cloudflare Pages', 'Tailwind CSS', 'PWA'],
  },
  {
    period: '2024 — Present',
    role: 'Creator & Architect',
    company: 'FotoFast',
    companyUrl: 'https://fotofast.theara.dev',
    description:
      'Architected a privacy-first AI face search platform for marathon and event organizers to deliver photos instantly to participants.',
    achievements: [
      'Implemented client-side face vector embedding generation to guarantee privacy before cloud indexing.',
      'Optimized vector distance matching on Cloudflare Workers and Vectorize for sub-150ms photo queries.',
      'Enabled automated photo tagging and gallery generation for high-volume photography events.',
    ],
    techStack: ['TypeScript', 'Vector Databases', 'Face Embeddings', 'Cloudflare Workers', 'Vite'],
  },
  {
    period: '2024 — Present',
    role: 'Founder & Product Engineer',
    company: 'Domlai',
    companyUrl: 'https://domlai.app',
    description:
      'Developed a modern retail product catalog and price management system supporting multi-currency exchange rates and automated inventory workflows.',
    achievements: [
      'Built a fast multi-currency (KHR/USD) dynamic price calculator with live exchange rate synchronization.',
      'Designed responsive inventory barcode search and batch updates for retail staff on mobile devices.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Serverless', 'PostgreSQL'],
  },
];
