import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'khmergpt',
    title: 'KhmerGPT',
    tagline: 'Discover & Share with AI-powered Tools',
    description:
      'A localized AI assistant and productivity platform designed to bridge language and technology barriers, delivering cutting-edge LLMs to Khmer speakers.',
    fullDescription:
      'KhmerGPT is a platform dedicated to making state-of-the-art artificial intelligence accessible to Cambodian and global users. Built as a high-performance Progressive Web App (PWA), it features real-time chat, context-aware prompt templates, and localized translation workflows powered by modern large language models.',
    href: 'https://chat.domnossrai.com/',
    logo: '/assets/logo/khmergpt.png',
    category: 'AI & ML',
    featured: true,
    year: '2024',
    status: 'Live',
    tags: [
      { label: 'AI Assistant', variant: 'primary' },
      { label: 'PWA', variant: 'purple' },
      { label: 'Free to use', variant: 'success' },
    ],
    stats: [
      { label: 'Platform', value: 'Web & PWA' },
      { label: 'Engine', value: 'OpenAI / Claude' },
      { label: 'Focus', value: 'Khmer Language AI' },
    ],
  },
  {
    id: 'fotofast',
    title: 'FotoFast',
    tagline: 'Instant event photo retrieval using privacy-first AI face search',
    description:
      'Find your event photos in milliseconds. Simply snap or upload a selfie to instantly retrieve all matching high-resolution photos without manual browsing.',
    fullDescription:
      'FotoFast eliminates the tedious process of digging through thousands of event photos. Built with privacy-first client-side embeddings and high-speed vector similarity indexing on the edge, FotoFast allows marathon runners, conference attendees, and party guests to instantly find every photo they appear in with a single selfie.',
    href: 'https://fotofast.theara.dev',
    logo: '/assets/logo/fotofast.svg',
    category: 'AI & ML',
    featured: true,
    year: '2024',
    status: 'Live',
    tags: [
      { label: 'AI Face Search', variant: 'primary' },
      { label: 'Vector Similarity', variant: 'purple' },
      { label: 'Privacy First', variant: 'success' },
    ],
    stats: [
      { label: 'Search Time', value: '< 150ms' },
      { label: 'Privacy', value: 'Edge Encrypted' },
      { label: 'Architecture', value: 'Vector DB + Edge' },
    ],
  },
  {
    id: 'domlai',
    title: 'Domlai',
    tagline: 'Product catalog & price management platform for retail businesses',
    description:
      'A sleek, multi-tenant SaaS that streamlines inventory pricing, catalog updates, barcode scanning, and multi-currency retail operations.',
    fullDescription:
      'Domlai is built for modern merchants and retail managers who need real-time catalog accuracy and price agility. It supports bulk price adjustments, exchange rate updates (KHR / USD), barcode generation, and instant export/import capabilities wrapped in an intuitive, responsive interface.',
    href: 'https://domlai.app',
    logo: '/assets/logo/domlai.svg',
    category: 'SaaS',
    featured: true,
    year: '2024',
    status: 'Live',
    tags: [
      { label: 'SaaS', variant: 'primary' },
      { label: 'Retail Ops', variant: 'default' },
      { label: 'Real-time', variant: 'success' },
    ],
    stats: [
      { label: 'Use Case', value: 'Retail & POS' },
      { label: 'Currency', value: 'Multi-Currency' },
      { label: 'Stack', value: 'TypeScript + Cloud' },
    ],
  },
];
