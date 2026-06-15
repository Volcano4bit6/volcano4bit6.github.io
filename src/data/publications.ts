import type { Bilingual } from './experience';

export interface Publication {
  title: string;
  authors: string;
  venue: Bilingual;
  year: string;
  url?: string;
  firstAuthor?: boolean;
  topic: string;
}

export const publications: Publication[] = [
  {
    title:
      'A Deep Learning Approach for Real-Time Detection and Evaluation of Oranges on Mobile Devices',
    authors:
      'Than Van Hong Son, Tran Dinh Minh Khoa, Luong Thien, Le Duc Tho, Le Viet Hung',
    venue: {
      en: 'Proc. 1st Int. Conference on SETSM 2024 — Springer',
      vi: 'Kỷ yếu Hội nghị Quốc tế SETSM 2024 lần thứ 1 — Springer',
    },
    year: '2024',
    firstAuthor: true,
    topic: 'Computer Vision · Edge AI',
  },
  {
    title:
      'A Deep Learning Framework for Gym-gesture Recognition Using the Combination of Transformer and 3D Pose Estimation',
    authors:
      'Le Viet Hung, Han Le Hoang Ngoc, Tran Dinh Minh Khoa, Than Van Hong Son',
    venue: {
      en: 'Cybernetics and Physics Journal, 2024',
      vi: 'Tạp chí Cybernetics and Physics, 2024',
    },
    year: '2024',
    topic: 'Transformer · 3D Pose Estimation',
  },
];
