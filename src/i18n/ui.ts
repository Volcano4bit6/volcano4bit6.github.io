export const defaultLang = 'en' as const;

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.publications': 'Publications',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.awards': 'Awards',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    'hero.role': 'AI Engineer',
    'hero.cta.work': 'View work',
    'hero.cta.cv': 'Download CV',
    'hero.scroll': 'Scroll to explore',
    'hero.available': 'Open to opportunities',

    'about.kicker': 'About',
    'about.title': 'Turning research into shipped AI products',

    'exp.kicker': 'Career',
    'exp.title': 'Experience',
    'exp.present': 'Present',
    'exp.responsibilities': 'Highlights',

    'pub.kicker': 'Research',
    'pub.title': 'Publications',
    'pub.first': 'First author',
    'pub.read': 'View',

    'skills.kicker': 'Toolbox',
    'skills.title': 'Skills & Technologies',

    'edu.kicker': 'Background',
    'edu.title': 'Education',
    'edu.gpa': 'GPA',
    'edu.present': 'Present',

    'awards.kicker': 'Recognition',
    'awards.title': 'Awards & Certifications',
    'awards.awards': 'Honors & Awards',
    'awards.certs': 'Certifications',

    'blog.kicker': 'Writing',
    'blog.title': 'Latest posts',
    'blog.subtitle': 'Notes on AI engineering, computer vision and building products.',
    'blog.all': 'All posts',
    'blog.viewall': 'View all posts',
    'blog.empty': 'No posts yet — first one coming soon.',
    'blog.back': 'Back to blog',
    'blog.readtime': 'min read',
    'blog.updated': 'Updated',
    'blog.toc': 'On this page',
    'blog.tags': 'Tags',

    'contact.kicker': 'Contact',
    'contact.title': "Let's build something",
    'contact.subtitle': 'Open to AI engineering roles and collaborations. Reach out anytime.',
    'contact.email': 'Email me',

    'footer.built': 'Built with Astro & Tailwind. Deployed on GitHub Pages.',
    'footer.rights': 'All rights reserved.',

    'theme.toggle': 'Toggle theme',
    'lang.toggle': 'Tiếng Việt',
    'a11y.skip': 'Skip to content',
    'notfound.title': 'Page not found',
    'notfound.text': 'The page you are looking for does not exist.',
    'notfound.home': 'Back home',
  },
  vi: {
    'nav.about': 'Giới thiệu',
    'nav.experience': 'Kinh nghiệm',
    'nav.publications': 'Công bố',
    'nav.skills': 'Kỹ năng',
    'nav.education': 'Học vấn',
    'nav.awards': 'Giải thưởng',
    'nav.blog': 'Blog',
    'nav.contact': 'Liên hệ',

    'hero.role': 'Kỹ sư AI',
    'hero.cta.work': 'Xem công việc',
    'hero.cta.cv': 'Tải CV',
    'hero.scroll': 'Cuộn để khám phá',
    'hero.available': 'Sẵn sàng cho cơ hội mới',

    'about.kicker': 'Giới thiệu',
    'about.title': 'Biến nghiên cứu thành sản phẩm AI thực tế',

    'exp.kicker': 'Sự nghiệp',
    'exp.title': 'Kinh nghiệm',
    'exp.present': 'Hiện tại',
    'exp.responsibilities': 'Điểm nổi bật',

    'pub.kicker': 'Nghiên cứu',
    'pub.title': 'Công bố khoa học',
    'pub.first': 'Tác giả chính',
    'pub.read': 'Xem',

    'skills.kicker': 'Công cụ',
    'skills.title': 'Kỹ năng & Công nghệ',

    'edu.kicker': 'Nền tảng',
    'edu.title': 'Học vấn',
    'edu.gpa': 'Điểm TB',
    'edu.present': 'Hiện tại',

    'awards.kicker': 'Thành tích',
    'awards.title': 'Giải thưởng & Chứng chỉ',
    'awards.awards': 'Giải thưởng',
    'awards.certs': 'Chứng chỉ',

    'blog.kicker': 'Bài viết',
    'blog.title': 'Bài viết mới nhất',
    'blog.subtitle': 'Ghi chú về kỹ thuật AI, thị giác máy tính và xây dựng sản phẩm.',
    'blog.all': 'Tất cả bài viết',
    'blog.viewall': 'Xem tất cả bài viết',
    'blog.empty': 'Chưa có bài viết — bài đầu tiên sắp ra mắt.',
    'blog.back': 'Quay lại blog',
    'blog.readtime': 'phút đọc',
    'blog.updated': 'Cập nhật',
    'blog.toc': 'Trong bài này',
    'blog.tags': 'Thẻ',

    'contact.kicker': 'Liên hệ',
    'contact.title': 'Cùng tạo ra điều gì đó',
    'contact.subtitle': 'Sẵn sàng cho các vị trí kỹ sư AI và hợp tác. Liên hệ bất cứ lúc nào.',
    'contact.email': 'Gửi email',

    'footer.built': 'Xây bằng Astro & Tailwind. Triển khai trên GitHub Pages.',
    'footer.rights': 'Bảo lưu mọi quyền.',

    'theme.toggle': 'Đổi giao diện',
    'lang.toggle': 'English',
    'a11y.skip': 'Tới nội dung chính',
    'notfound.title': 'Không tìm thấy trang',
    'notfound.text': 'Trang bạn tìm không tồn tại.',
    'notfound.home': 'Về trang chủ',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
