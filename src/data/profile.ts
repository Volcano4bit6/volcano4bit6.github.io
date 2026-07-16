export interface Social {
  label: string;
  href: string;
  icon: string; // lucide icon name
}

export const profile = {
  name: 'Than Van Hong Son',
  initials: 'S',
  role: { en: 'AI Engineer', vi: 'Kỹ sư AI' },
  location: { en: 'Da Nang, Vietnam', vi: 'Đà Nẵng, Việt Nam' },
  email: 'sontvh2002@gmail.com',
  phone: '+84 974 830 945',
  cv: '/resume/Than-Van-Hong-Son-CV.pdf',

  // Short hero tagline
  tagline: {
    en: 'I turn research-grade models into products that run fast and cheap in production — multi-agent LLM pipelines on local GPUs, real-time computer vision and end-to-end MLOps.',
    vi: 'Tôi biến các mô hình nghiên cứu thành sản phẩm chạy nhanh và tiết kiệm trong thực tế — pipeline LLM multi-agent trên GPU cục bộ, thị giác máy tính thời gian thực và MLOps đầu-cuối.',
  },

  // Rotating words after "AI" in the hero
  roles: {
    en: ['Computer Vision', 'Generative AI', 'LLM & Multi-Agent', 'MLOps'],
    vi: ['Thị giác máy tính', 'AI tạo sinh', 'LLM & Multi-Agent', 'MLOps'],
  },

  // Longer About narrative
  bio: {
    en: [
      'I am an AI Engineer based in Da Nang with 3+ years shipping production AI — multi-agent LLM pipelines running fully on local GPUs, real-time computer vision, and end-to-end MLOps. I have a background in Data Science & AI and a Master’s in Computer Science in progress, plus a first-author Springer publication.',
      'Today I build the AI core of a real-time multilingual meeting assistant at FPT Software, while leading a part-time AI team at BK High Tech on an end-to-end comic-localization pipeline. I am strongest at turning research-grade models into products that run fast and cheap in production.',
    ],
    vi: [
      'Tôi là Kỹ sư AI tại Đà Nẵng với hơn 3 năm triển khai AI thực tế — pipeline LLM multi-agent chạy hoàn toàn trên GPU cục bộ, thị giác máy tính thời gian thực và MLOps đầu-cuối. Tôi có nền tảng Khoa học Dữ liệu & AI, đang học Thạc sĩ Khoa học Máy tính, cùng một công bố Springer với vai trò tác giả chính.',
      'Hiện tôi xây dựng lõi AI cho trợ lý cuộc họp đa ngôn ngữ thời gian thực tại FPT Software, đồng thời dẫn dắt (bán thời gian) một nhóm AI tại BK High Tech với pipeline bản địa hóa truyện tranh đầu-cuối. Thế mạnh của tôi là biến các mô hình nghiên cứu thành sản phẩm chạy nhanh và tiết kiệm trong thực tế.',
    ],
  },

  // Headline stats shown in the hero / about
  stats: [
    { value: '3+', label: { en: 'Years in AI', vi: 'Năm làm AI' } },
    { value: '2', label: { en: 'Publications', vi: 'Công bố' } },
    { value: '2', label: { en: 'Awards', vi: 'Giải thưởng' } },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/volcano4bit6', icon: 'lucide:github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/than-hong-son', icon: 'lucide:linkedin' },
    { label: 'Email', href: 'mailto:sontvh2002@gmail.com', icon: 'lucide:mail' },
  ] satisfies Social[],
} as const;
