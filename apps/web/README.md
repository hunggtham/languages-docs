# LanguageLab web

React + Vite frontend cho kho học ngoại ngữ. Web đọc `public/content/catalog.json`, sau đó fetch từng Markdown từ `public/lesson/` khi người học mở bài; vì vậy trang tổng quan không phải tải toàn bộ ebook/tài liệu một lần.

## Chạy

Từ thư mục gốc:

```bash
pnpm install --dir apps/web
pnpm content:build
pnpm dev:web
```

Mở `http://localhost:4173`. Khi thêm hoặc đổi tài liệu, cập nhật danh sách trong `scripts/build-content-index.py`, chạy `pnpm content:build`, rồi build web.

Có thể build, serve và mở preview bằng một lệnh:

```bash
npm run open:local
```

## Cấu trúc

```text
apps/web/
    ├── public/content/       # catalog metadata
    ├── public/lesson/        # Markdown được public cho web
└── src/
    ├── features/catalog/ # thư viện, card, reader
    ├── shared/            # Markdown renderer
    └── lib/               # content fetch + local progress
```

Tiến độ mặc định lưu local trong trình duyệt. Cloud progress sync là lớp optional: copy `apps/web/.env.example` thành `.env`, đặt anon key của cùng Supabase project với Study Planner, apply `supabase/migrations/20260924111500_create_learning_progress.sql`, rồi build lại. Không dùng service-role key ở frontend; khi chưa có config, Sync vẫn chạy bằng snapshot local v2.

Reader hiện có mục lục tự động từ heading Markdown, đánh dấu section đã đọc bằng `IntersectionObserver`, tự lưu lesson/section cuối vào `localStorage`, khôi phục vị trí khi mở lại bài, bookmark từng section và danh sách `Đọc sau`. Reader có nút lưu nội dung vào Cache API để đọc lại offline và đọc thành tiếng bằng Web Speech API khi trình duyệt hỗ trợ. Learning OS ở thanh trên cùng gom `Continue Reading`, bookmark toàn thư viện, review queue và snapshot export/import để chuyển tiến độ giữa các thiết bị; theme sáng/tối và layout mục lục dạng drawer hoạt động trên mobile. Thư viện hiện đọc curriculum grammar concept-map từ remote `main` (foundation → core → advanced), kèm vocabulary, writing và corrections; người học có thể lọc theo skill, trạng thái, tài liệu đã lưu và thứ tự lộ trình.

Các lớp mới được build từ cùng catalog gồm full-text search lazy-load, knowledge graph từ các liên kết Markdown, snapshot sync v2, PWA/service worker để cache app shell và index, nút cài app, copy source path, cùng speech reader theo viewport với tốc độ và voice English/Korean/Vietnamese. Cloud auth/progress sync chưa bật trong project này vì chưa có anon key/schema riêng; snapshot local vẫn hoạt động.
