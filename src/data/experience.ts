export interface Bilingual {
  en: string;
  vi: string;
}
export interface BilingualList {
  en: string[];
  vi: string[];
}

export interface Experience {
  company: string;
  url?: string;
  role: Bilingual;
  project?: Bilingual;
  location: Bilingual;
  start: string; // display label, e.g. "Jul 2025"
  end: Bilingual | null; // null => "Present"
  current?: boolean;
  summary: Bilingual;
  bullets: BilingualList;
  tags: string[];
}

export const experience: Experience[] = [
  {
    company: 'BK High Tech',
    role: { en: 'AI Engineer', vi: 'Kỹ sư AI' },
    project: { en: 'Comic AI Translation', vi: 'Dịch truyện tranh bằng AI' },
    location: { en: 'Remote · Da Nang, Vietnam', vi: 'Từ xa · Đà Nẵng, Việt Nam' },
    start: 'Jul 2025',
    end: null,
    current: true,
    summary: {
      en: 'Leading an AI team building an automated comic-translation pipeline that runs fully on local GPUs.',
      vi: 'Dẫn dắt nhóm AI xây dựng pipeline dịch truyện tranh tự động chạy hoàn toàn trên GPU cục bộ.',
    },
    bullets: {
      en: [
        'Architected an end-to-end comic-translation pipeline (OCR → machine translation → inpainting), slashing manual localization time.',
        'Built a LangChain multi-agent orchestration system to boost translation quality and consistency for local LLMs.',
        'Ran all models on constrained local GPUs via quantization and efficient VRAM management.',
        'Used time-series monitoring of model metrics to forecast system resource requirements.',
        'Led a cross-functional AI team — task allocation, resource management and stakeholder collaboration.',
      ],
      vi: [
        'Thiết kế pipeline dịch truyện tranh đầu-cuối (OCR → dịch máy → inpainting), giảm mạnh thời gian bản địa hóa thủ công.',
        'Xây dựng hệ thống điều phối multi-agent bằng LangChain để nâng chất lượng và tính nhất quán cho LLM cục bộ.',
        'Chạy toàn bộ mô hình trên GPU cục bộ giới hạn nhờ lượng tử hóa và quản lý VRAM hiệu quả.',
        'Giám sát chỉ số mô hình bằng phân tích chuỗi thời gian để dự báo nhu cầu tài nguyên hệ thống.',
        'Quản lý nhóm AI đa chức năng — phân bổ công việc, quản lý nguồn lực và phối hợp với các bên liên quan.',
      ],
    },
    tags: ['LangChain', 'LLM', 'OCR', 'Inpainting', 'Quantization', 'Multi-Agent'],
  },
  {
    company: 'Permate',
    url: 'https://permate.com',
    role: { en: 'AI / Product R&D Specialist', vi: 'Chuyên viên R&D AI / Sản phẩm' },
    project: { en: 'Affiliate Marketing Platform', vi: 'Nền tảng Affiliate Marketing' },
    location: { en: 'Da Nang, Vietnam', vi: 'Đà Nẵng, Việt Nam' },
    start: 'Apr 2024',
    end: { en: 'Jan 2026', vi: 'Th1 2026' },
    summary: {
      en: 'Drove AI/product R&D for a performance-partnership platform — from MLOps infrastructure to fraud and customer-journey analytics.',
      vi: 'Phụ trách R&D AI/sản phẩm cho nền tảng performance-partnership — từ hạ tầng MLOps đến phân tích gian lận và hành trình khách hàng.',
    },
    bullets: {
      en: [
        'Designed an MLOps platform on Airflow, Jupyter, Feast, MLflow, Grafana and Docker.',
        'Researched and deployed a Lead Management System for a FinTech R&D project targeting the US market.',
        'Built a time-series solution to detect and prevent customer fraud.',
        'Implemented customer-journey analysis and cross-visit device fingerprinting.',
        'DevRel: bridged Sales, Marketing and Dev teams, supported client integrations and owned project documentation.',
      ],
      vi: [
        'Thiết kế nền tảng MLOps trên Airflow, Jupyter, Feast, MLflow, Grafana và Docker.',
        'Nghiên cứu và triển khai hệ thống Quản lý Lead cho dự án R&D FinTech hướng tới thị trường Mỹ.',
        'Xây dựng giải pháp chuỗi thời gian để phát hiện và ngăn chặn gian lận khách hàng.',
        'Triển khai phân tích hành trình khách hàng và nhận diện thiết bị qua nhiều lượt truy cập.',
        'DevRel: kết nối Sales, Marketing và Dev, hỗ trợ tích hợp khách hàng và quản lý tài liệu dự án.',
      ],
    },
    tags: ['MLOps', 'Airflow', 'MLflow', 'Feast', 'Time-Series', 'FinTech'],
  },
  {
    company: 'BK High Tech',
    role: { en: 'AI Engineer — Generative AI', vi: 'Kỹ sư AI — Generative AI' },
    project: { en: 'Pixor AI', vi: 'Pixor AI' },
    url: 'https://pixor.ai',
    location: { en: 'Da Nang, Vietnam', vi: 'Đà Nẵng, Việt Nam' },
    start: 'Sep 2023',
    end: { en: 'Mar 2024', vi: 'Th3 2024' },
    summary: {
      en: 'Built generative-AI features for a consumer text-to-image product powered by Stable Diffusion.',
      vi: 'Xây dựng tính năng AI tạo sinh cho sản phẩm sinh ảnh từ văn bản dựa trên Stable Diffusion.',
    },
    bullets: {
      en: [
        'Researched Stable Diffusion papers and applied text-to-image generation in production.',
        'Built a hashtag classification model with MobileNetV2.',
        'Trained face recognition (ResNet50) and face swapping (SimSwap) models.',
      ],
      vi: [
        'Nghiên cứu các bài báo Stable Diffusion và ứng dụng sinh ảnh từ văn bản vào sản phẩm.',
        'Xây dựng mô hình phân loại hashtag bằng MobileNetV2.',
        'Huấn luyện mô hình nhận diện khuôn mặt (ResNet50) và hoán đổi khuôn mặt (SimSwap).',
      ],
    },
    tags: ['Stable Diffusion', 'MobileNetV2', 'ResNet50', 'SimSwap', 'PyTorch'],
  },
  {
    company: 'Smartinside AI',
    role: { en: 'AI Engineer Intern — Computer Vision', vi: 'Thực tập Kỹ sư AI — Thị giác máy tính' },
    project: { en: 'Construction-site Monitoring', vi: 'Giám sát công trường xây dựng' },
    location: { en: 'Remote · Korea', vi: 'Từ xa · Hàn Quốc' },
    start: 'Mar 2023',
    end: { en: 'Aug 2023', vi: 'Th8 2023' },
    summary: {
      en: 'Applied AI to monitor real construction sites — multi-camera tracking, safety detection and 3D scene understanding.',
      vi: 'Ứng dụng AI giám sát công trường thực tế — theo dõi đa camera, phát hiện an toàn và hiểu cảnh 3D.',
    },
    bullets: {
      en: [
        'Enhanced tracking and re-ID efficiency for multi-camera multi-object tracking (MOT).',
        'Deployed real-time MOT pipelines with NVIDIA DeepStream.',
        'Estimated crack length and calibrated cameras for on-site deployment.',
        'Predicted worker movement trajectories and detected fall incidents.',
        'Built a point-cloud map of the site from depth-map estimation.',
      ],
      vi: [
        'Nâng cao hiệu quả theo dõi và re-ID cho bài toán MOT đa camera đa đối tượng.',
        'Triển khai pipeline MOT thời gian thực với NVIDIA DeepStream.',
        'Ước lượng chiều dài vết nứt và hiệu chỉnh camera để triển khai tại công trường.',
        'Dự đoán quỹ đạo di chuyển của công nhân và phát hiện sự cố té ngã.',
        'Dựng bản đồ point-cloud của công trường từ ước lượng depth-map.',
      ],
    },
    tags: ['DeepStream', 'MOT', 'Re-ID', 'Depth Estimation', 'Camera Calibration'],
  },
  {
    company: 'BKCIT',
    url: 'https://bkcit.dut.udn.vn',
    role: { en: '.NET Developer Intern', vi: 'Thực tập Lập trình viên .NET' },
    project: { en: 'IT Center Management System', vi: 'Hệ thống quản lý trung tâm CNTT' },
    location: { en: 'Da Nang, Vietnam', vi: 'Đà Nẵng, Việt Nam' },
    start: 'Oct 2022',
    end: { en: 'Mar 2023', vi: 'Th3 2023' },
    summary: {
      en: 'Developed management features for DUT-UD’s IT-center system.',
      vi: 'Phát triển các tính năng quản lý cho hệ thống trung tâm CNTT của DUT-UD.',
    },
    bullets: {
      en: [
        'Automated the arrangement of candidates into exam sessions and rooms.',
        'Implemented the user interface and CRUD modules for employees, posts and courses.',
      ],
      vi: [
        'Tự động sắp xếp thí sinh vào các ca và phòng thi phù hợp.',
        'Xây dựng giao diện người dùng và các chức năng CRUD cho nhân viên, bài viết, khóa học.',
      ],
    },
    tags: ['.NET', 'C#', 'SQL', 'CRUD'],
  },
];
