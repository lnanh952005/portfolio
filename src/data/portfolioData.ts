import type { CandidateInfo, Project, SkillCategory, Experience, Certification } from '../types/portfolio'

export const candidateData: CandidateInfo = {
  name: 'Alex Nguyễn',
  headline: 'Kiến tạo trải nghiệm số qua từng dòng mã.',
  targetRoles: ['Thực tập sinh Kỹ sư Phần mềm', 'Thực tập sinh Backend Developer', 'Thực tập sinh Frontend Developer'],
  status: {
    available: true,
    label: 'Sẵn sàng thực tập',
    details: 'Sẵn sàng cho kỳ thực tập Hè & Thu 2025 / 2026 (Toàn thời gian hoặc Bán thời gian)',
  },
  bio: "Xin chào, mình là Alex. Sinh viên năm 3 ngành Khoa học Máy tính với đam mê xây dựng các dịch vụ backend mở rộng linh hoạt, API an toàn kiểu dữ liệu (type-safe) và các ứng dụng frontend mượt mà, tiếp cận tối ưu. Đang tìm kiếm cơ hội thực tập để đóng góp và học hỏi trong các đội ngũ kỹ thuật tốc độ cao.",
  longBio: [
    "Mình là một lập trình viên phần mềm tương lai, hiện đang theo học chương trình Cử nhân Khoa học Máy tính. Hành trình của mình bắt đầu với lập trình thi đấu, nơi đã trui rèn tư duy giải thuật sâu sắc và sự thấu hiểu về hiệu năng hệ thống.",
    "Hiện tại, mình phát triển cân bằng cả hai mảng: thiết kế các vi dịch vụ (microservices) bền vững với Node.js/Go và PostgreSQL, đồng thời chăm chút những giao diện người dùng tinh tế, tốc độ cao bằng React 19, TypeScript và các kiến trúc CSS hiện đại.",
    "Bên ngoài giảng đường, mình chủ trì các buổi workshop kỹ thuật tại Google Developer Student Club của trường, hướng dẫn sinh viên khóa dưới môn Cấu trúc dữ liệu & Giải thuật, và tích cực đóng góp cho các công cụ mã nguồn mở."
  ],
  location: {
    city: 'Hà Nội',
    country: 'Việt Nam',
    timezone: 'GMT+7',
    remotePreference: 'Hybrid / Tại văn phòng / Remote',
  },
  education: {
    degree: 'Cử nhân Khoa học Máy tính',
    major: 'Kỹ thuật Phần mềm & Hệ thống Phân tán',
    institution: 'Đại học Bách Khoa',
    period: '2022 — 2026 (Dự kiến)',
    gpa: '3.78 / 4.00 (Top 5%)',
    status: 'Sinh viên năm 3',
    relevantCourses: [
      'Cấu trúc dữ liệu & Giải thuật',
      'Hệ điều hành',
      'Hệ quản trị cơ sở dữ liệu',
      'Mạng máy tính',
      'Kiến trúc phần mềm',
      'Hệ thống phân tán'
    ],
    highlights: [
      "Học bổng Danh dự Khuyến khích Học tập (4 kỳ liên tiếp)",
      'Học bổng Nghiên cứu Khoa học dành cho sinh viên',
      'Chung kết Hackathon Sinh viên Toàn quốc 2024'
    ]
  },
  careerGoal: 'Gia nhập đội ngũ kỹ thuật với vai trò Thực tập sinh Kỹ sư Phần mềm, nơi mình có thể đóng góp vào các hệ thống phân tán thực tế (production), xây dựng giao diện vững chắc và đồng hành học hỏi cùng các chuyên gia dày dạn kinh nghiệm.',
  currentlyLearning: {
    topic: 'Hệ thống Phân tán & Mô hình đồng thời trong Go',
    reason: 'Đào sâu hiểu biết về thuật toán đồng thuận (Raft), message queues và kiến trúc vi dịch vụ thông lượng cao.',
    progress: 'Đang phát triển một In-memory Key-Value Store tích hợp WAL và đồng thuận Raft.'
  },
  contacts: {
    email: 'alex.nguyen.dev@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    leetcode: 'https://leetcode.com',
    twitter: 'https://twitter.com'
  },
  stats: {
    projectsCompleted: 12,
    technologiesMastered: 18,
    githubContributions: '650+ commits trong năm',
    gpa: '3.78/4.0'
  }
}

export const projectsData: Project[] = [
  {
    id: 'algorise',
    title: 'Algorise — Nền tảng Mô phỏng Giải thuật & Chấm mã nguồn',
    tagline: 'Công cụ trực quan hóa từng bước thuật toán đồ thị và môi trường sandbox thực thi code',
    description: 'Nền tảng học tập full-stack giúp sinh viên CNTT nắm vững các thuật toán đồ thị phức tạp (Dijkstra, A*, BFS/DFS) và quy hoạch động thông qua hoạt ảnh tùy biến cùng sandbox WebAssembly cô lập.',
    category: 'fullstack',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Docker', 'WebSockets', 'Canvas API'],
    githubUrl: 'https://github.com/alexnguyen/algorise-visualizer',
    liveUrl: 'https://algorise-demo.vercel.app',
    highlights: [
      'Xây dựng engine bố cục đồ thị 60fps tùy biến bằng HTML5 Canvas và mô phỏng spring-embedder',
      'Thiết kế container thực thi an toàn bằng Node.js & Docker với cơ chế giới hạn CPU/RAM chặt chẽ',
      'Phát triển luồng truyền phát WebSocket hai chiều cho phép tạm dừng, tiếp tục và điều chỉnh tốc độ',
      'Được áp dụng thực tế bởi hơn 300 sinh viên trong các buổi thực hành Cấu trúc dữ liệu'
    ],
    architectureDetails: 'Kiến trúc gồm frontend React 19 ứng dụng máy trạng thái (state machines) để tái hiện từng bước giải thuật chuẩn xác, kết hợp bộ điều phối Node.js ủy quyền chạy code tới các Docker sandbox bảo mật tức thời.',
    stats: [
      { label: 'Người dùng', value: '1.2k+' },
      { label: 'Lượt chạy sandbox', value: '18k+' },
      { label: 'Tốc độ khung hình', value: '60 FPS' }
    ]
  },
  {
    id: 'campuspulse',
    title: 'CampusPulse — Chợ sinh viên & Cộng đồng học tập',
    tagline: 'Sàn trao đổi đồ dùng ngang hàng và cổng tin tức sự kiện học đường đã xác thực',
    description: 'Ứng dụng web cho phép sinh viên trao đổi giáo trình, thiết bị điện tử và tài liệu học tập với cơ chế xác thực email sinh viên chính thức cùng tính năng nhắn tin tức thời.',
    category: 'fullstack',
    featured: false,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
    tags: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Pusher'],
    githubUrl: 'https://github.com/alexnguyen/campuspulse-platform',
    liveUrl: 'https://campuspulse-preview.vercel.app',
    highlights: [
      'Tích hợp xác thực tên miền email (.edu) với mã token dùng một lần và phân quyền người dùng',
      'Thiết kế cơ sở dữ liệu PostgreSQL tối ưu chỉ mục (indexing) đạt tốc độ truy vấn dưới 50ms',
      'Tích hợp chat thời gian thực giữa người mua và người bán với chỉ báo trạng thái online'
    ],
    stats: [
      { label: 'Tin đăng', value: '450+' },
      { label: 'Độ trễ truy vấn', value: '<45ms' }
    ]
  },
  {
    id: 'devsync',
    title: 'DevSync — Hàng đợi tác vụ phân tán nhẹ',
    tagline: 'Bộ xử lý tác vụ nền thông lượng cao tích hợp bảng điều khiển giám sát viễn trắc',
    description: 'Hệ thống background worker bền vững xây dựng theo mô hình BullMQ & Celery, hỗ trợ thử lại lùi lũy thừa (exponential backoff), hàng đợi dead-letter và dashboard web theo dõi trạng thái tác vụ.',
    category: 'backend',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    tags: ['Go / Node.js', 'Redis', 'TypeScript', 'REST API', 'Docker', 'Tailwind CSS'],
    githubUrl: 'https://github.com/alexnguyen/devsync-task-queue',
    liveUrl: 'https://devsync-telemetry.fly.dev',
    highlights: [
      'Xây dựng lập lịch tác vụ ưu tiên và bộ giới hạn tốc độ trượt bằng Redis Lua scripts nguyên tử',
      'Xử lý kịch bản crash worker với cơ chế theo dõi heartbeat và tự động thu hồi tác vụ thất lạc',
      'Đạt thông lượng thử nghiệm 8.500 tác vụ/giây với độ trễ thấp dưới tải đồng thời cao'
    ],
    stats: [
      { label: 'Thông lượng', value: '8.5k tác vụ/s' },
      { label: 'Độ tin cậy', value: '99.9%' }
    ]
  },
  {
    id: 'aurora-ui',
    title: 'Aurora UI — Thư viện thành phần Headless chuẩn trợ năng',
    tagline: 'Bộ thành phần giao diện gọn gàng, hỗ trợ phím điều hướng và chuẩn thiết kế đồng nhất',
    description: 'Tập hợp các UI component React 19 không định kiểu (unstyled) tuân thủ nghiêm ngặt tiêu chuẩn WAI-ARIA, kiểm thử trợ năng tự động và tương tác mượt mà.',
    category: 'frontend',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix Primitives', 'Storybook', 'Vitest'],
    githubUrl: 'https://github.com/alexnguyen/aurora-component-system',
    liveUrl: 'https://aurora-ui-docs.vercel.app',
    highlights: [
      'Xây dựng 18 thành phần trợ năng (combobox, modal, bảng dữ liệu, tooltip) đạt chuẩn WCAG 2.1 AA',
      'Thiết lập kiểm thử đơn vị và snapshot toàn diện với Vitest đạt 94% độ phủ kiểm thử',
      'Đóng gói và xuất bản thư viện mã nguồn mở npm kèm tệp định nghĩa TypeScript (.d.ts)'
    ],
    stats: [
      { label: 'Thành phần', value: '18+' },
      { label: 'Độ phủ kiểm thử', value: '94%' }
    ]
  }
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Ngôn ngữ Lập trình',
    description: 'Các ngôn ngữ nòng cốt dùng cho phát triển hệ thống, kịch bản và ứng dụng web',
    icon: 'Code2',
    skills: [
      { name: 'TypeScript', level: 'Core', description: 'Kiểu dữ liệu nâng cao, generics, kiểm tra kiểu nghiêm ngặt' },
      { name: 'JavaScript (ESNext)', level: 'Core', description: 'Async/await, event loop, closures, thao tác DOM' },
      { name: 'Python', level: 'Core', description: 'Viết kịch bản, FastAPI, giải thuật & cấu trúc dữ liệu' },
      { name: 'Java', level: 'Proficient', description: 'OOP, Spring Boot, môn học giải thuật trường đại học' },
      { name: 'Go', level: 'Proficient', description: 'Goroutines, channels, REST microservices' },
      { name: 'C / C++', level: 'Familiar', description: 'Quản lý bộ nhớ, con trỏ, lập trình thi đấu' }
    ]
  },
  {
    title: 'Phát triển Frontend',
    description: 'Xây dựng giao diện người dùng thích ứng, tiếp cận tốt và hiệu năng vượt trội',
    icon: 'Layout',
    skills: [
      { name: 'React 19', level: 'Core', description: 'Hooks, Server Components, React Compiler, Suspense' },
      { name: 'Next.js 15', level: 'Core', description: 'App router, server actions, SSR & SSG' },
      { name: 'Tailwind CSS v4', level: 'Core', description: 'Design tokens, utility classes tùy chỉnh, responsive' },
      { name: 'HTML5 & Semantic Web', level: 'Core', description: 'Tối ưu hóa SEO, cấu trúc thẻ ngữ nghĩa chuẩn W3C' },
      { name: 'Framer Motion', level: 'Proficient', description: 'Hoạt ảnh layout, phản hồi cử chỉ, hiệu ứng chuyển cảnh' },
      { name: 'Quản lý State', level: 'Proficient', description: 'Zustand, TanStack Query, Context API' }
    ]
  },
  {
    title: 'Phát triển Backend',
    description: 'Thiết kế API bền bỉ, luồng xử lý dữ liệu và kiến trúc vi dịch vụ',
    icon: 'Server',
    skills: [
      { name: 'Node.js & Express', level: 'Core', description: 'REST API, middleware, xác thực người dùng & JWT' },
      { name: 'FastAPI / Python', level: 'Proficient', description: 'Xác thực Pydantic, async endpoints, OpenAPI' },
      { name: 'Thiết kế RESTful API', level: 'Core', description: 'Versioning, idempotency, rate limiting, phân trang' },
      { name: 'WebSockets & SSE', level: 'Proficient', description: 'Giao tiếp hai chiều theo thời gian thực' },
      { name: 'Kiến trúc Microservices', level: 'Familiar', description: 'Tách biệt dịch vụ, message brokers, caching' }
    ]
  },
  {
    title: 'Cơ sở dữ liệu & Lưu trữ',
    description: 'Mô hình hóa dữ liệu, đánh chỉ mục quan hệ và caching độ trễ thấp',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Core', description: 'Mô hình hóa quan hệ, indexing, giao dịch ACID' },
      { name: 'Prisma ORM', level: 'Core', description: 'Schema migrations, truy vấn an toàn kiểu dữ liệu' },
      { name: 'Redis', level: 'Proficient', description: 'Bộ nhớ đệm in-memory, giới hạn tần suất, Pub/Sub' },
      { name: 'MongoDB', level: 'Proficient', description: 'Document stores, aggregations, schema linh hoạt' },
      { name: 'MySQL', level: 'Proficient', description: 'Môn học đại học & hệ thống cơ sở dữ liệu doanh nghiệp' }
    ]
  },
  {
    title: 'Công cụ & DevOps',
    description: 'Quy trình làm việc kỹ thuật, container hóa và triển khai tự động',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'Core', description: 'Quy trình nhánh, review PR, chiến lược merge code' },
      { name: 'Docker', level: 'Proficient', description: 'Đóng gói multi-stage container, Docker Compose' },
      { name: 'Linux / Bash', level: 'Proficient', description: 'Thao tác dòng lệnh, shell scripting, quản trị SSH' },
      { name: 'Postman & Insomnia', level: 'Core', description: 'Kiểm thử API, tự động hóa bộ sưu tập yêu cầu' },
      { name: 'Vite & Rolldown', level: 'Core', description: 'Build pipeline hiện đại, tối ưu hóa HMR' },
      { name: 'CI/CD (GitHub Actions)', level: 'Familiar', description: 'Tự động hóa linting, kiểm thử và deploy' }
    ]
  }
]

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Trưởng ban Kỹ thuật (Lead Tech Coordinator)',
    organization: 'Google Developer Student Club (GDSC)',
    location: 'Trường Đại học',
    period: 'Tháng 8/2024 — Hiện tại',
    type: 'Club & Community',
    description: 'Điều hành các workshop kỹ thuật, định hướng cho hơn 80 sinh viên về phát triển web hiện đại, và phụ trách hạ tầng kỹ thuật cho kỳ thi Hackathon thường niên của trường.',
    achievements: [
      'Tổ chức 6 buổi workshop thực hành về React, TypeScript và nền tảng REST API với 95% đánh giá tích cực',
      'Thiết kế và triển khai cổng thông tin đăng ký và chấm điểm trực tuyến cho hơn 450 thí sinh tham gia',
      'Cố vấn kỹ thuật cho 4 đội thi trong ngày hội dự án công nghệ sinh viên'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker']
  },
  {
    id: 'exp-2',
    role: 'Trợ lý Nghiên cứu Khoa học Sinh viên',
    organization: 'Phòng Thí nghiệm Tính toán Phân tán & AI',
    location: 'Khoa Công nghệ Thông tin',
    period: 'Tháng 1/2024 — Tháng 7/2024',
    type: 'University Lab',
    description: 'Nghiên cứu các giao thức đồng thuận độ trễ thấp và thu thập dữ liệu tính toán biên dưới sự hướng dẫn của PGS.TS. Phạm.',
    achievements: [
      'Đo lường hiện tượng chập chờn mạng (jitter) và độ trễ sao chép trên các cụm cluster mô phỏng',
      'Hỗ trợ biên soạn báo cáo phân tích hiệu năng được chấp thuận tại hội thảo kỹ thuật của trường',
      'Phát triển kịch bản Python tự động tổng hợp và trực quan hóa hơn 100.000 điểm dữ liệu viễn trắc'
    ],
    technologies: ['Python', 'Docker', 'Linux', 'Go', 'Data Visualization']
  },
  {
    id: 'exp-3',
    role: 'Trợ giảng — Cấu trúc dữ liệu & Giải thuật',
    organization: 'Bộ môn Khoa học Máy tính',
    location: 'Trường Đại học',
    period: 'Tháng 9/2023 — Tháng 12/2023',
    type: 'Academic Teaching',
    description: 'Hỗ trợ giảng viên hướng dẫn các buổi thực hành lab hàng tuần, chấm bài tập lập trình và giải đáp thắc mắc cho hơn 120 sinh viên.',
    achievements: [
      'Review và gỡ lỗi hơn 400 bài tập C++ / Java, phân tích độ phức tạp thời gian và không gian (Big-O)',
      'Biên soạn tài liệu trực quan bổ trợ cho các chủ đề đệ quy, cây nhị phân tìm kiếm và quy hoạch động'
    ],
    technologies: ['C++', 'Java', 'Giải thuật', 'Git']
  }
]

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Chứng chỉ Chuyên nghiệp Meta Front-End Developer',
    issuer: 'Meta / Coursera',
    date: 'Tháng 10/2024',
    badgeText: 'Đã xác minh',
    credentialUrl: 'https://coursera.org',
    icon: 'Award'
  },
  {
    id: 'cert-2',
    title: 'AWS Certified Cloud Practitioner (Foundational)',
    issuer: 'Amazon Web Services',
    date: 'Tháng 7/2024',
    badgeText: 'Đang hiệu lực',
    credentialUrl: 'https://aws.amazon.com',
    icon: 'Cloud'
  },
  {
    id: 'cert-3',
    title: 'Chứng chỉ Problem Solving (Advanced)',
    issuer: 'HackerRank',
    date: 'Tháng 5/2024',
    badgeText: 'Top 5%',
    credentialUrl: 'https://hackerrank.com',
    icon: 'Code'
  },
  {
    id: 'cert-4',
    title: 'Lập trình sinh viên Quốc tế ICPC — Vòng loại Khu vực',
    issuer: 'ICPC Asia Regional',
    date: 'Tháng 12/2023',
    badgeText: 'Chung kết',
    credentialUrl: '#',
    icon: 'Trophy'
  }
]
