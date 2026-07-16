import type { Bilingual } from './experience';

export interface SkillGroup {
  label: Bilingual;
  icon: string; // lucide icon name
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: { en: 'GenAI / LLM', vi: 'GenAI / LLM' },
    icon: 'lucide:brain-circuit',
    items: [
      'LangChain',
      'Multi-Agent Systems',
      'Local LLM Deployment',
      'Quantization',
      'Prompt Engineering',
      'Stable Diffusion',
    ],
  },
  {
    label: { en: 'Computer Vision', vi: 'Thị giác máy tính' },
    icon: 'lucide:eye',
    items: [
      'PyTorch',
      'TensorFlow / Keras',
      'MOT & Re-ID',
      'DeepStream',
      'OCR',
      'Pose Estimation',
      'Face Recognition',
    ],
  },
  {
    label: { en: 'MLOps & Data', vi: 'MLOps & Dữ liệu' },
    icon: 'lucide:server-cog',
    items: ['Airflow', 'MLflow', 'Feast', 'Docker', 'Grafana', 'SQL / NoSQL', 'Time-Series'],
  },
  {
    label: { en: 'Languages', vi: 'Ngôn ngữ lập trình' },
    icon: 'lucide:code-xml',
    items: ['Python', 'C / C++', 'C#', 'JavaScript', 'R'],
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
