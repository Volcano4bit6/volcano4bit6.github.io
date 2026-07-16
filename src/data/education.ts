import type { Bilingual } from './experience';

export interface Education {
  school: Bilingual;
  degree: Bilingual;
  field: Bilingual;
  start: string;
  end: Bilingual;
  gpa?: string;
  gpaNote?: Bilingual;
  current?: boolean;
}

export const education: Education[] = [
  {
    school: {
      en: 'Da Nang University of Science and Technology',
      vi: 'Đại học Bách khoa Đà Nẵng',
    },
    degree: { en: "Master's student", vi: 'Học viên Cao học' },
    field: { en: 'Computer Science', vi: 'Khoa học Máy tính' },
    start: 'Oct 2025',
    end: { en: 'Present', vi: 'Hiện tại' },
    current: true,
  },
  {
    school: {
      en: 'Da Nang University of Science and Technology',
      vi: 'Đại học Bách khoa Đà Nẵng',
    },
    degree: { en: "Bachelor's degree", vi: 'Cử nhân' },
    field: { en: 'Data Science & AI', vi: 'Khoa học Dữ liệu & AI' },
    start: 'Oct 2020',
    end: { en: 'Aug 2024', vi: 'Th8 2024' },
    gpa: '3.47 / 4.0',
    gpaNote: { en: 'Very good', vi: 'Loại Giỏi' },
  },
];
