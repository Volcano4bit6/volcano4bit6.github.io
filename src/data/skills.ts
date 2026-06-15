import type { Bilingual } from './experience';

export interface SkillGroup {
  label: Bilingual;
  icon: string; // lucide icon name
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: { en: 'Languages', vi: 'Ngôn ngữ lập trình' },
    icon: 'lucide:code-xml',
    items: ['Python', 'C++', 'C', 'C#', 'JavaScript', 'R', 'MATLAB', 'SQL'],
  },
  {
    label: { en: 'AI / ML Frameworks', vi: 'Framework AI / ML' },
    icon: 'lucide:brain-circuit',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'LangChain', 'Hugging Face', 'OpenCV'],
  },
  {
    label: { en: 'Computer Vision & GenAI', vi: 'Thị giác & GenAI' },
    icon: 'lucide:eye',
    items: ['Stable Diffusion', 'DeepStream', 'MOT / Re-ID', '3D Pose', 'Depth Estimation', 'OCR'],
  },
  {
    label: { en: 'MLOps & Infra', vi: 'MLOps & Hạ tầng' },
    icon: 'lucide:server-cog',
    items: ['Docker', 'Airflow', 'MLflow', 'Feast', 'Grafana', 'NoSQL'],
  },
];

// Marquee tech list for the hero
export const techMarquee: string[] = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'LangChain',
  'Stable Diffusion',
  'Docker',
  'MLflow',
  'OpenCV',
  'DeepStream',
  'Airflow',
  'Hugging Face',
  'C++',
];
