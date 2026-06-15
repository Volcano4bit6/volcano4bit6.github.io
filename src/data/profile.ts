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
    en: 'I build real-time computer-vision, generative-AI and LLM systems — from research papers to products that ship.',
    vi: 'Tôi xây dựng các hệ thống thị giác máy tính thời gian thực, AI tạo sinh và LLM — từ nghiên cứu đến sản phẩm thực tế.',
  },

  // Rotating words after "AI" in the hero
  roles: {
    en: ['Computer Vision', 'Generative AI', 'LLM & Multi-Agent', 'MLOps'],
    vi: ['Thị giác máy tính', 'AI tạo sinh', 'LLM & Multi-Agent', 'MLOps'],
  },

  // Longer About narrative
  bio: {
    en: [
      'I am a Middle AI Engineer based in Da Nang with a background in Data Science & AI and a Master’s in Computer Science in progress. Over the past few years I have shipped AI across the full stack — real-time computer vision on the edge, generative image models, and LLM-powered automation pipelines.',
      'Today I lead an AI team building an end-to-end comic-translation pipeline that runs entirely on local GPUs, combining OCR, machine translation, inpainting and LangChain multi-agent orchestration. I care about making models fast, reliable and genuinely useful in production.',
    ],
    vi: [
      'Tôi là Kỹ sư AI (Middle) tại Đà Nẵng, nền tảng Khoa học Dữ liệu & AI và đang học Thạc sĩ Khoa học Máy tính. Vài năm qua tôi đã triển khai AI trên nhiều mảng — thị giác máy tính thời gian thực trên thiết bị biên, mô hình sinh ảnh, và các pipeline tự động hóa dùng LLM.',
      'Hiện tôi dẫn dắt một nhóm AI xây dựng pipeline dịch truyện tranh đầu-cuối chạy hoàn toàn trên GPU cục bộ, kết hợp OCR, dịch máy, inpainting và điều phối multi-agent với LangChain. Tôi quan tâm đến việc làm cho mô hình nhanh, ổn định và thực sự hữu ích trong sản xuất.',
    ],
  },

  // Headline stats shown in the hero / about
  stats: [
    { value: '4+', label: { en: 'Years in AI', vi: 'Năm làm AI' } },
    { value: '2', label: { en: 'Publications', vi: 'Công bố' } },
    { value: '2', label: { en: 'Awards', vi: 'Giải thưởng' } },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/volcano4bit6', icon: 'lucide:github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/than-hong-son', icon: 'lucide:linkedin' },
    { label: 'Email', href: 'mailto:sontvh2002@gmail.com', icon: 'lucide:mail' },
  ] satisfies Social[],
} as const;
