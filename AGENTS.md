# Hướng dẫn Phát triển & Tài liệu Dự án (AGENTS.md)

Tài liệu này cung cấp bức tranh toàn cảnh, kiến trúc hệ thống, quy chuẩn kỹ thuật và lịch sử phát triển của trang Portfolio cá nhân dành cho các AI Agent và lập trình viên tiếp quản dự án.

---

## 1. Tổng quan Dự án

- **Chủ sở hữu**: **Lê Nhật Anh**
- **Định hướng**: Kỹ sư Phần mềm / Web Full-Stack & Trí tuệ Nhân tạo Ứng dụng (Computer Vision & NLP).
- **Học vấn**: Sinh viên ngành Khoa học Máy tính, Đại học Cần Thơ (Niên khóa 2023 — 2027).
- **Mục tiêu**: Portfolio giới thiệu bản thân, kỹ năng kỹ thuật, dự án tiêu biểu, kinh nghiệm học thuật và chứng chỉ phục vụ ứng tuyển Thực tập sinh / Junior Software Engineer.
- **Thiết kế**: Phong cách Bento Grid hiện đại, tối giản, hỗ trợ Dark / Light Theme, responsive mượt mà trên mọi kích thước màn hình.

---

## 2. Công nghệ Cốt lõi (Tech Stack)

| Công nghệ | Phiên bản | Mục đích sử dụng |
| :--- | :--- | :--- |
| **React** | `^19.3.1` | Thư viện UI cốt lõi, sử dụng kiến trúc Functional Components + Hooks |
| **TypeScript** | `~6.0.3` | Type-safety, strict mode kiểm soát chặt chẽ kiểu dữ liệu |
| **Vite** | `^8.3.5` | Bundler và dev server tốc độ cao, hỗ trợ HMR |
| **Tailwind CSS** | `^4.3.3` | Tiện ích CSS hiện đại với plugin `@tailwindcss/vite` |
| **Framer Motion**| `^14.9.0` | Thư viện animation mượt mà cho Bento Cards, Modals và transitions |
| **Lucide React**  | `^1.66.0` | Bộ icon SVG vector chất lượng cao |
| **React Compiler**| `^1.0.0` | Tối ưu hóa render tự động qua Babel plugin |

---

## 3. Cấu trúc Thư mục

```text
portfolio/
├── index.html                   # Entry point HTML với inline script chặn FOUC
├── package.json                 # Cấu hình dự án & danh sách dependencies
├── tsconfig.json                # TypeScript root config
├── vite.config.ts               # Vite configuration (Tailwind, Babel React Compiler)
├── src/
│   ├── main.tsx                 # Khởi tạo React root & nạp ThemeProvider
│   ├── App.tsx                  # Component trang chính kết hợp các section
│   ├── index.css                # CSS toàn cục (Tailwind directives & dark mode rules)
│   ├── context/                 # Quản lý trạng thái giao diện
│   │   ├── theme-context.ts     # Khởi tạo ThemeContext & TypeScript types
│   │   └── ThemeContext.tsx     # ThemeProvider xử lý toggle theme và sync DOM
│   ├── hooks/
│   │   └── useTheme.ts          # Custom hook consume ThemeContext
│   ├── types/
│   │   └── portfolio.ts         # Khai báo kiểu: CandidateInfo, Project, Skill, ...
│   ├── data/
│   │   └── portfolioData.ts     # Dữ liệu tập trung cho toàn bộ nội dung website
│   └── components/
│       ├── ui/                  # Các UI component tái sử dụng
│       │   ├── BentoCard.tsx    # Khung Bento card với hiệu ứng kính mờ & viền sáng
│       │   ├── Button.tsx       # Nút bấm đa biến thể (primary, secondary, outline)
│       │   ├── Modal.tsx        # Hộp thoại chi tiết dự án (Framer Motion)
│       │   ├── CvModal.tsx      # Hộp thoại xem/tải CV trực tuyến
│       │   ├── SectionHeader.tsx# Tiêu đề đồng nhất cho từng section
│       │   ├── ThemeToggle.tsx  # Nút chuyển đổi Dark / Light theme trên Navbar
│       │   └── Icons.tsx        # Icon custom (GitHub, LinkedIn, ...)
│       └── sections/            # Các khối giao diện chính của trang
│           ├── Navbar.tsx       # Thanh điều hướng cố định trên cùng
│           ├── HeroSection.tsx  # Khối giới thiệu mở đầu, Bento Card, Typewriter effect
│           ├── AboutSection.tsx # Giới thiệu triết lý lập trình, nền tảng học thuật
│           ├── SkillsSection.tsx# Nhóm kỹ năng (Ngôn ngữ, AI, Frontend, Backend, Công cụ)
│           ├── ProjectsSection.tsx    # Danh sách dự án nổi bật dạng Bento Grid
│           ├── ExperienceSection.tsx  # Quá trình học tập & nghiên cứu tại ĐH Cần Thơ
│           ├── CertificationsSection.tsx # Bằng cấp & chứng chỉ học thuật
│           ├── ContactSection.tsx     # Form và thông tin kết nối trực tiếp
│           └── Footer.tsx       # Chân trang bản quyền
└── AGENTS.md                    # Tài liệu cho AI Agent và nhà phát triển (file này)
```

---

## 4. Các Tính năng & Cải tiến Nổi bật Đã Triển khai

1. **Hiệu ứng Typewriter vô hạn chu kỳ 5s (`HeroSection.tsx`)**:
   - Dòng chữ: `"Xin chào, mình là Nhật Anh."`.
   - Cơ chế chu kỳ ~5 giây: Gõ chữ (~1.4s) -> Dừng đọc (~2.8s) -> Xóa lùi (~0.5s) -> Nghỉ ngắn (0.3s) và lặp lại liên tục.
   - Tích hợp con trỏ xanh dương nhấp nháy (`animate-pulse`).
   - Sử dụng placeholder vô hình (`invisible select-none`) để cố định kích thước khung chữ, **loại bỏ 100% tình trạng giật layout (Zero CLS)** khi chữ biến đổi.

2. **Chế độ Sáng / Tối (Dark / Light Theme) chuẩn trải nghiệm**:
   - Lưu trữ trạng thái trong `localStorage` (`portfolio-theme`).
   - Tích hợp inline script đồng bộ ngay tại thẻ `<head>` của `index.html` để **triệt tiêu hoàn toàn hiện tượng chớp trắng (FOUC)** khi người dùng F5 / reload trang.
   - Tách biệt rõ ràng Context (`theme-context.ts`), Provider (`ThemeContext.tsx`) và Hook (`useTheme.ts`) để tuân thủ Fast Refresh của React và quy chuẩn ESLint.

3. **Chống lỗi vỡ viền Avatar khi Hover (`HeroSection.tsx`)**:
   - Tách riêng container bo góc cố định (`[isolation:isolate] transform-gpu overflow-hidden`) và ảnh bên trong (`group-hover/avatar:scale-105`), giải quyết triệt để lỗi răng cưa/vỡ subpixel của Chromium trên Windows.

4. **Tối ưu hóa & Đơn giản hóa Section**:
   - **Mục Kỹ năng (Skills)**: Bỏ các tag phân loại phụ và mô tả nhỏ, tập trung hiển thị tên công nghệ gọn gàng, trực quan.
   - **Mục Dự án (Projects)**: Bỏ thanh filter danh mục giúp toàn bộ các dự án xuất sắc hiển thị đầy đủ, liền mạch trong lưới Bento.
   - **Mục Liên hệ & Mạng xã hội**: Bỏ ô LeetCode theo yêu cầu; khi nhấp vào ô Email sẽ tự động cuộn mượt xuống biểu mẫu `#contact`.

---

## 5. Lệnh Phát triển & Kiểm thử (Commands)

```bash
# Khởi chạy server phát triển (Hot Module Replacement)
npm run dev

# Kiểm tra cú pháp và quy chuẩn mã nguồn (ESLint)
npm run lint

# Biên dịch kiểm tra TypeScript và đóng gói bản phát hành
npm run build

# Xem thử bản đóng gói production tại local
npm run preview
```

---

## 6. Nguyên tắc Cho AI Agent Tiếp Quản

Khi thực hiện các yêu cầu mới từ người dùng:

1. **Bảo toàn thiết kế giao diện**: Không tự ý thay đổi cấu trúc layout Bento Grid hoặc chỉnh sửa style hệ thống trừ khi người dùng chỉ định rõ ràng.
2. **Quản lý dữ liệu tập trung**: Tất cả thông tin cá nhân, tiểu sử, danh sách kỹ năng, dự án, chứng chỉ đều nằm tại `src/data/portfolioData.ts`. Ưu tiên cập nhật tại file này thay vì hard-code vào component.
3. **Kiểm tra nghiêm ngặt**:
   - Luôn chạy `npm run lint` để đảm bảo không còn lỗi biến chưa dùng (unused vars), lỗi hook hay format.
   - Luôn chạy `npm run build` (`tsc -b && vite build`) để đảm bảo hệ thống build thành công 100% trước khi thông báo kết quả.
4. **Quy chuẩn Git**: Khi được yêu cầu commit (`"commit đi"`), sử dụng chuẩn **Conventional Commits** (ví dụ: `feat(...)`, `fix(...)`, `refactor(...)`, `style(...)`) kèm mô tả chi tiết các tệp thay đổi.

