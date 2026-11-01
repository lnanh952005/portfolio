import type { CandidateInfo, Project, SkillCategory, Experience, Certification } from '../types/portfolio'

export const candidateData: CandidateInfo = {
  name: 'Lê Nhật Anh',
  headline: 'Xây dựng sản phẩm Web hiện đại & ứng dụng Trí tuệ Nhân tạo vào thực tiễn.',
  targetRoles: ['Thực tập sinh Kỹ sư Phần mềm', 'Kỹ sư Web / Backend (Python, Node.js)', 'Ứng dụng AI (Computer Vision & NLP)'],
  status: {
    available: true,
    label: 'Sẵn sàng làm việc / Thực tập',
    details: 'Sẵn sàng cho vị trí Thực tập sinh / Junior Developer (Toàn thời gian hoặc Bán thời gian)',
  },
  bio: "Xin chào, mình là Lê Nhật Anh. Sinh viên ngành Khoa học Máy tính tại Đại học Cần Thơ. Đam mê xây dựng các hệ thống web tối ưu, API vững chắc và ứng dụng các giải pháp AI (Thị giác máy tính - Computer Vision, Xử lý ngôn ngữ tự nhiên - NLP) vào giải quyết bài toán thực tế.",
  longBio: [
    "Mình hiện là sinh viên ngành Khoa học Máy tính tại Đại học Cần Thơ (niên khóa 2023 — 2027). Suốt quá trình học tập tại trường, mình luôn chủ động xây dựng nền tảng vững chắc về cấu trúc dữ liệu, giải thuật, mạng máy tính và kiến trúc phần mềm.",
    "Về mảng kỹ thuật, mình có kinh nghiệm phát triển ứng dụng Web hoàn chỉnh (Frontend với React, TypeScript, Tailwind CSS; Backend với Python FastAPI/Flask, Node.js và hệ quản trị cơ sở dữ liệu PostgreSQL/MongoDB). Đồng thời, mình đặc biệt yêu thích và thực hành chuyên sâu mảng Trí tuệ Nhân tạo — bao gồm Thị giác máy tính (Computer Vision: xử lý ảnh, nhận diện đối tượng bằng OpenCV, PyTorch) và Xử lý ngôn ngữ tự nhiên (NLP: trích xuất thông tin, xử lý văn bản tiếng Việt).",
    "Với chứng chỉ TOEIC 550, khả năng tự học và đọc hiểu tài liệu kỹ thuật tốt, mình luôn chú trọng viết code sạch (Clean Code), tối ưu hiệu năng và mong muốn đóng góp năng lực trong các môi trường kỹ thuật chuyên nghiệp."
  ],
  location: {
    city: 'Cần Thơ',
    country: 'Việt Nam',
    timezone: 'GMT+7',
    remotePreference: 'Tại văn phòng / Hybrid / Remote',
  },
  education: {
    degree: 'Cử nhân Khoa học Máy tính',
    major: 'Khoa học Máy tính',
    institution: 'Đại học Cần Thơ',
    period: '2023 — 2027',
    gpa: 'Khá / Giỏi',
    status: 'Sinh viên năm 4',
    relevantCourses: [
      'Cấu trúc dữ liệu & Giải thuật',
      'Trí tuệ Nhân tạo & Học máy',
      'Thị giác Máy tính (Computer Vision)',
      'Xử lý Ngôn ngữ Tự nhiên (NLP)',
      'Lập trình Web & Cơ sở dữ liệu',
      'Hệ điều hành & Mạng máy tính'
    ],
    highlights: [
      'Chứng chỉ tiếng Anh quốc tế TOEIC 550',
      'Định hướng chuyên sâu: Phát triển Web & Ứng dụng AI thực tiễn',
      'Thực hiện các đồ án chuyên ngành về Thị giác máy tính và Xử lý ngôn ngữ tự nhiên'
    ]
  },
  careerGoal: 'Gia nhập đội ngũ kỹ thuật với vai trò Kỹ sư Phần mềm / Thực tập sinh, ứng dụng thế mạnh lập trình Web và các mô hình Trí tuệ Nhân tạo (Computer Vision, NLP) để cùng đội ngũ phát triển các sản phẩm công nghệ có giá trị thực tiễn cao.',
  currentlyLearning: {
    topic: 'Tối ưu hóa mô hình Computer Vision & Triển khai LLM trên Web',
    reason: 'Nâng cao khả năng tinh chỉnh mô hình và tích hợp inference AI vào dịch vụ web với độ trễ thấp.',
    progress: 'Xây dựng web service xử lý ảnh thời gian thực kết hợp trợ lý văn bản thông minh.'
  },
  contacts: {
    email: 'lnanh952005@gmail.com',
    github: 'https://github.com/lnanh952005',
    linkedin: 'https://www.linkedin.com/in/nhat-anh-le-a87532338',
    leetcode: 'https://leetcode.com',
    twitter: 'https://twitter.com'
  },
  stats: {
    projectsCompleted: 8,
    technologiesMastered: 16,
    githubContributions: 'Thường xuyên đóng góp code',
    gpa: 'Khá / Giỏi'
  }
}

export const projectsData: Project[] = [
  {
    id: 'vision-ai-system',
    title: 'VisionAI — Nền tảng Phân tích & Nhận diện Hình ảnh Trực tuyến',
    tagline: 'Ứng dụng web nhận diện đối tượng và xử lý ảnh số thời gian thực',
    description: 'Hệ thống full-stack cho phép người dùng tải lên hình ảnh/video, áp dụng các thuật toán Thị giác máy tính (Computer Vision) để phát hiện vật thể, trích xuất đặc trưng và trực quan hóa kết quả phân tích.',
    category: 'fullstack',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    tags: ['React 19', 'TypeScript', 'Python', 'FastAPI', 'OpenCV', 'PyTorch', 'Tailwind CSS'],
    githubUrl: 'https://github.com/lnanh952005',
    liveUrl: 'https://github.com/lnanh952005',
    highlights: [
      'Xây dựng pipeline tiền xử lý ảnh và suy luận mô hình phát hiện đối tượng với OpenCV và PyTorch',
      'Thiết kế REST API bất đồng bộ hiệu năng cao bằng FastAPI phục vụ tải ảnh và trả về kết quả suy luận',
      'Giao diện web trực quan bằng React 19 hiển thị bounding box và thông số nhận diện theo thời gian thực',
      'Tối ưu hóa thời gian xử lý ảnh đạt tốc độ khung hình ổn định'
    ],
    architectureDetails: 'Kiến trúc gồm frontend React 19 gửi yêu cầu qua REST/WebSocket tới backend FastAPI, nơi các tác vụ xử lý ảnh và suy luận mô hình Computer Vision được thực thi bất đồng bộ trên nền tảng Python.',
    stats: [
      { label: 'Độ chính xác mô hình', value: '92%+' },
      { label: 'Thời gian suy luận', value: '<80ms' },
      { label: 'Lớp đối tượng', value: '80 classes' }
    ]
  },
  {
    id: 'nlp-smart-assistant',
    title: 'SmartNLP — Trợ lý Tóm tắt & Phân tích Văn bản Tự động',
    tagline: 'Xử lý ngôn ngữ tự nhiên, phân loại sắc thái và tóm tắt văn bản thông minh',
    description: 'Ứng dụng xử lý ngôn ngữ tự nhiên hỗ trợ trích xuất thực thể (NER), tóm tắt văn bản dài và phân tích cảm xúc (Sentiment Analysis) văn bản tiếng Việt phục vụ xử lý tài liệu tự động.',
    category: 'backend',
    featured: false,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
    tags: ['Python', 'NLP', 'FastAPI', 'Transformers', 'HuggingFace', 'Docker'],
    githubUrl: 'https://github.com/lnanh952005',
    liveUrl: 'https://github.com/lnanh952005',
    highlights: [
      'Tích hợp các mô hình Transformer mã nguồn mở cho bài toán trích xuất thực thể và tóm tắt tóm lược văn bản',
      'Xây dựng pipeline chuẩn hóa và tiền xử lý dữ liệu văn bản tiếng Việt',
      'Đóng gói API và mô hình vào Docker container độc lập, dễ dàng mở rộng và triển khai'
    ],
    stats: [
      { label: 'Độ dài văn bản xử lý', value: '10k+ từ' },
      { label: 'Độ trễ API', value: '<120ms' }
    ]
  },
  {
    id: 'ctu-student-portal',
    title: 'CTU Document Hub — Nền tảng Chia sẻ Tài liệu Học tập Sinh viên',
    tagline: 'Cổng lưu trữ tài liệu, đề cương và trao đổi học thuật cho sinh viên Đại học Cần Thơ',
    description: 'Hệ thống web hỗ trợ sinh viên tìm kiếm giáo trình, chia sẻ tài liệu ôn thi và thảo luận môn học theo từng chuyên ngành với giao diện thân thiện và cơ chế phân quyền bảo mật.',
    category: 'fullstack',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    tags: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/lnanh952005',
    liveUrl: 'https://github.com/lnanh952005',
    highlights: [
      'Thiết kế cơ sở dữ liệu quan hệ PostgreSQL với các ràng buộc khóa ngoại và index tối ưu hóa tìm kiếm',
      'Cơ chế xác thực phân quyền JWT và bảo vệ phiên làm việc an toàn',
      'Giao diện web thích ứng cao trên cả thiết bị di động và máy tính để bàn'
    ],
    stats: [
      { label: 'Tài liệu quản lý', value: '300+' },
      { label: 'Thời gian phản hồi', value: '<50ms' }
    ]
  },
  {
    id: 'task-queue-worker',
    title: 'Distributed Task Processor — Bộ Xử lý Tác vụ Hàng đợi Nền',
    tagline: 'Hệ thống hàng đợi nền thông lượng cao hỗ trợ xử lý tác vụ bất đồng bộ',
    description: 'Bộ xử lý tác vụ nền cho các tác vụ tốn thời gian (xử lý hình ảnh, tổng hợp báo cáo), hỗ trợ tự động thử lại khi lỗi và bảng điều khiển theo dõi trạng thái tác vụ.',
    category: 'backend',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    tags: ['Python', 'Node.js', 'Redis', 'Docker', 'REST API'],
    githubUrl: 'https://github.com/lnanh952005',
    liveUrl: 'https://github.com/lnanh952005',
    highlights: [
      'Tận dụng Redis in-memory làm hàng đợi tin nhắn với khả năng điều tiết lưu lượng',
      'Cơ chế retry lũy thừa (exponential backoff) giúp hệ thống hoạt động ổn định',
      'Tách biệt logic xử lý giúp ứng dụng chính phản hồi tức thì cho người dùng'
    ],
    stats: [
      { label: 'Tác vụ / giây', value: '5k+ jobs/s' },
      { label: 'Độ tin cậy', value: '99.9%' }
    ]
  }
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Ngôn ngữ Lập trình',
    description: 'Các ngôn ngữ chính sử dụng cho phát triển hệ thống, kịch bản xử lý dữ liệu và ứng dụng web',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 'Core', description: 'FastAPI, xử lý dữ liệu, học máy, mô hình AI' },
      { name: 'TypeScript', level: 'Core', description: 'Kiểu dữ liệu nâng cao, generics, strict type checking' },
      { name: 'JavaScript (ESNext)', level: 'Core', description: 'Async/await, DOM, Event Loop, lập trình bất đồng bộ' },
      { name: 'C / C++', level: 'Proficient', description: 'Nền tảng môn học giải thuật & quản lý bộ nhớ' },
      { name: 'SQL', level: 'Core', description: 'Truy vấn quan hệ, tối ưu hóa chỉ mục và thiết kế lược đồ' }
    ]
  },
  {
    title: 'Trí tuệ Nhân tạo (CV & NLP)',
    description: 'Nghiên cứu và ứng dụng Thị giác Máy tính và Xử lý Ngôn ngữ Tự nhiên',
    icon: 'Sparkles',
    skills: [
      { name: 'Computer Vision (OpenCV)', level: 'Core', description: 'Xử lý ảnh số, biến đổi không gian, nhận diện vật thể' },
      { name: 'PyTorch', level: 'Core', description: 'Huấn luyện và suy luận mô hình Deep Learning' },
      { name: 'Xử lý Ngôn ngữ Tự nhiên (NLP)', level: 'Core', description: 'Tiền xử lý văn bản tiếng Việt, trích xuất thực thể (NER)' },
      { name: 'HuggingFace Transformers', level: 'Proficient', description: 'Fine-tuning và ứng dụng mô hình ngôn ngữ lớn' },
      { name: 'Scikit-learn', level: 'Proficient', description: 'Các thuật toán phân loại, hồi quy và phân cụm dữ liệu' }
    ]
  },
  {
    title: 'Phát triển Frontend',
    description: 'Xây dựng giao diện người dùng hiện đại, trực quan và tối ưu trải nghiệm',
    icon: 'Layout',
    skills: [
      { name: 'React 19', level: 'Core', description: 'Hooks, Component Architecture, Suspense, State Management' },
      { name: 'Tailwind CSS v4', level: 'Core', description: 'Design tokens, dark mode, responsive layout' },
      { name: 'HTML5 & Semantic Web', level: 'Core', description: 'Cấu trúc thẻ ngữ nghĩa chuẩn SEO và tiếp cận trợ năng' },
      { name: 'Framer Motion', level: 'Proficient', description: 'Hiệu ứng chuyển cảnh và tương tác mượt mà' },
      { name: 'State Management (Zustand/Context)', level: 'Proficient', description: 'Quản lý trạng thái ứng dụng đồng nhất' }
    ]
  },
  {
    title: 'Phát triển Backend & API',
    description: 'Thiết kế dịch vụ backend hiệu năng cao, RESTful APIs và tích hợp mô hình AI',
    icon: 'Server',
    skills: [
      { name: 'FastAPI / Python', level: 'Core', description: 'Async endpoints, Pydantic validation, tài liệu OpenAPI' },
      { name: 'Node.js & Express', level: 'Core', description: 'REST APIs, middleware, routing và xử lý bất đồng bộ' },
      { name: 'Thiết kế RESTful API', level: 'Core', description: 'Định dạng chuẩn, phân trang, xử lý lỗi an toàn' },
      { name: 'Xác thực JWT & Bảo mật', level: 'Proficient', description: 'Bảo vệ endpoint, mã hóa mật khẩu, phân quyền' },
      { name: 'AI Model Integration', level: 'Core', description: 'Tích hợp mô hình AI vào pipeline backend phục vụ người dùng' }
    ]
  },
  {
    title: 'Cơ sở dữ liệu & Công cụ',
    description: 'Quản trị cơ sở dữ liệu, container hóa và công cụ làm việc nhóm',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Core', description: 'Cơ sở dữ liệu quan hệ, thiết kế schema, indexing' },
      { name: 'MongoDB', level: 'Proficient', description: 'Document database, cấu trúc dữ liệu JSON linh hoạt' },
      { name: 'MySQL', level: 'Proficient', description: 'Quản trị cơ sở dữ liệu và truy vấn quan hệ' },
      { name: 'Git & GitHub', level: 'Core', description: 'Quản lý phiên bản, làm việc nhóm, pull requests' },
      { name: 'Docker', level: 'Proficient', description: 'Đóng gói ứng dụng và môi trường chạy độc lập' },
      { name: 'Linux / Bash', level: 'Proficient', description: 'Thao tác dòng lệnh, quản lý tiến trình máy chủ' }
    ]
  }
]

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Nghiên cứu & Phát triển Đồ án Chuyên ngành',
    organization: 'Khoa Công nghệ Thông tin & Truyền thông — Đại học Cần Thơ',
    location: 'Đại học Cần Thơ',
    period: '2023 — Hiện tại',
    type: 'University Lab',
    description: 'Thực hiện các đề tài nghiên cứu ứng dụng kết hợp giữa nền tảng phát triển Web và các mô hình Trí tuệ Nhân tạo thực nghiệm.',
    achievements: [
      'Nghiên cứu và xây dựng mô hình Thị giác máy tính nhận diện và xử lý hình ảnh với độ chính xác cao',
      'Ứng dụng kỹ thuật Xử lý ngôn ngữ tự nhiên (NLP) vào trích xuất và tóm tắt thông tin văn bản tiếng Việt',
      'Phát triển ứng dụng Web hoàn chỉnh phục vụ kiểm thử và trình diễn giải pháp mô hình'
    ],
    technologies: ['Python', 'FastAPI', 'PyTorch', 'OpenCV', 'React', 'TypeScript']
  },
  {
    id: 'exp-2',
    role: 'Thành viên Hoạt động Kỹ thuật & Học thuật Sinh viên',
    organization: 'Bộ môn Khoa học Máy tính — Đại học Cần Thơ',
    location: 'Đại học Cần Thơ',
    period: '2023 — Hiện tại',
    type: 'Academic Teaching',
    description: 'Tham gia các buổi trao đổi chuyên môn, hội thảo chia sẻ kinh nghiệm học tập và hỗ trợ các bạn sinh viên cùng khóa về giải thuật và lập trình.',
    achievements: [
      'Tham gia thảo luận và giải quyết các bài toán cấu trúc dữ liệu và giải thuật nâng cao',
      'Chia sẻ kiến thức về quy trình làm việc với Git/GitHub và xây dựng ứng dụng web hiện đại',
      'Đạt thành tích học tập tốt qua các học kỳ chuyên ngành'
    ],
    technologies: ['C++', 'Python', 'Web Development', 'Git', 'Data Structures']
  }
]

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Chứng chỉ Tiếng Anh Quốc tế TOEIC 550',
    issuer: 'ETS (Educational Testing Service)',
    date: 'Năm 2024',
    badgeText: 'Đã xác minh',
    credentialUrl: '#',
    icon: 'Award'
  },
  {
    id: 'cert-2',
    title: 'Chương trình Đào tạo Khoa học Máy tính',
    issuer: 'Khoa CNTT&TT — Đại học Cần Thơ',
    date: '2023 — 2027',
    badgeText: 'Đang theo học',
    credentialUrl: 'https://www.ctu.edu.vn',
    icon: 'Cloud'
  },
  {
    id: 'cert-3',
    title: 'Năng lực Lập trình & Giải thuật',
    issuer: 'Bộ môn Khoa học Máy tính — ĐH Cần Thơ',
    date: '2023 — 2024',
    badgeText: 'Hoàn thành',
    credentialUrl: '#',
    icon: 'Code'
  }
]
