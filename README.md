# Language documents

Kho này dành cho việc học ngoại ngữ: tài liệu tiếng Anh, ghi chú lớp học, bài sửa, từ vựng, IPA và tài liệu IELTS nằm dưới `english/`.

`automation/` chứa worker tạo lại tài liệu học từ các Markdown nguồn. Worker mặc định dùng `content/english/grammar/english-structures-beginner-revised.md`, giải thích bằng tiếng Việt, chạy QA và ghi kết quả vào `output/language-learning/`. Xem [automation/README.md](automation/README.md) để chạy local, cấu hình model hoặc import workflow n8n.

Web nằm trong `apps/web/`. Tạo catalog và chạy dev server:

```bash
pnpm content:build
pnpm dev:web
```

Trang web đọc metadata từ `content/catalog.json` và fetch bài học từ `apps/web/public/lesson/`. Xem [apps/web/README.md](apps/web/README.md) để biết cách build.

Sau khi thêm tài liệu, kiểm tra cấu trúc bằng:

```bash
pnpm library:validate
```

Giữ repository private khi lưu ebook/tài liệu có bản quyền. Trước khi học theo nội dung do AI tạo, xem `quality-report.md` và đánh dấu các mục `[CẦN KIỂM TRA]`.
