import type { Bilingual } from './experience';

export interface Award {
  title: Bilingual;
  topic: Bilingual;
  place: Bilingual;
  date: Bilingual;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: Bilingual;
  note?: Bilingual;
  icon: string;
}

export const awards: Award[] = [
  {
    title: { en: 'Top 2 — TAS Design Competition', vi: 'Top 2 — Cuộc thi TAS Design' },
    topic: { en: 'Natural Language Processing', vi: 'Xử lý ngôn ngữ tự nhiên' },
    place: { en: 'Da Nang, Vietnam & Japan', vi: 'Đà Nẵng, Việt Nam & Nhật Bản' },
    date: { en: 'Dec 2023', vi: 'Th12 2023' },
    icon: 'lucide:trophy',
  },
  {
    title: { en: 'Top 3 — AI4LIFE', vi: 'Top 3 — AI4LIFE' },
    topic: { en: 'Computer Vision', vi: 'Thị giác máy tính' },
    place: { en: 'Da Nang, Vietnam', vi: 'Đà Nẵng, Việt Nam' },
    date: { en: 'Apr 2023', vi: 'Th4 2023' },
    icon: 'lucide:medal',
  },
];

export const certifications: Certification[] = [
  {
    title: 'TOEIC 720 / 990',
    issuer: 'ETS',
    date: { en: 'Issued Dec 2023', vi: 'Cấp Th12 2023' },
    note: { en: 'Valid until Dec 2025', vi: 'Hiệu lực đến Th12 2025' },
    icon: 'lucide:languages',
  },
  {
    title: 'Foundation of AI',
    issuer: 'AI Vietnam',
    date: { en: '2021', vi: '2021' },
    icon: 'lucide:graduation-cap',
  },
];
