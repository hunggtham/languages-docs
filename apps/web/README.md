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

Tiến độ hiện lưu local trong trình duyệt. Auth, SRS server và database có thể bổ sung sau mà không phải đổi cấu trúc nội dung.

Reader hiện có mục lục tự động từ heading Markdown, đánh dấu section đã đọc bằng `IntersectionObserver`, tự lưu lesson/section cuối vào `localStorage`, và khôi phục vị trí khi mở lại bài. Thư viện hiện đọc curriculum grammar concept-map từ remote `main` (foundation → core → advanced), kèm vocabulary, writing và corrections; người học có thể lọc theo skill, trạng thái (chưa học/đang học/đã xong) và thứ tự lộ trình.
