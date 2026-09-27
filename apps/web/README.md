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

Reader hiện có mục lục tự động từ heading Markdown, đánh dấu section đã đọc bằng `IntersectionObserver`, tự lưu lesson/section cuối vào `localStorage`, khôi phục vị trí khi mở lại bài, bookmark từng section và danh sách `Đọc sau`. Reader có nút lưu nội dung vào Cache API để đọc lại offline và đọc thành tiếng bằng Web Speech API khi trình duyệt hỗ trợ. Learning OS ở thanh trên cùng gom `Continue Reading`, bookmark toàn thư viện, review queue và snapshot export/import để chuyển tiến độ giữa các thiết bị; theme sáng/tối và layout mục lục dạng drawer hoạt động trên mobile. Thư viện hiện đọc curriculum grammar concept-map từ remote `main` (foundation → core → advanced), kèm vocabulary, writing và corrections; người học có thể lọc theo skill, trạng thái, tài liệu đã lưu và thứ tự lộ trình.
