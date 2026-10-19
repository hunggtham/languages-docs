# Language documents

Kho này dành cho việc học ngoại ngữ: tài liệu tiếng Anh, ghi chú lớp học, bài sửa, từ vựng, IPA và tài liệu IELTS nằm dưới `english/`.

`scripts/` chỉ chứa các công cụ cấu trúc/metadata cho catalog, media, path normalization và validation. Không có worker nào được phép tự viết prose học tập.

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

Script trong `scripts/` chỉ được làm việc cấu trúc hoặc metadata. Không dùng Python hay automation để tự chèn câu mở đầu, câu nối, giải thích, ví dụ, summary hoặc prose học tập khác; prose mới phải được viết và review thủ công theo topic thật.

Giữ repository private khi lưu ebook/tài liệu có bản quyền. Trước khi học theo nội dung do AI tạo, xem `quality-report.md` và đánh dấu các mục `[CẦN KIỂM TRA]`. Nội dung do AI đề xuất luôn là draft cho đến khi người review kiểm tra fact, nguồn, ngữ nghĩa, ví dụ và provenance; không coi build hoặc structural audit là acceptance.

## Parity với learning-docs

Khi cần kiểm tra và clone các tính năng mới từ Study Library, dùng [prompt/LEARNING_DOCS_PARITY_PROMPT.md](prompt/LEARNING_DOCS_PARITY_PROMPT.md) và skill repo-local [skills/learning-docs-parity/SKILL.md](skills/learning-docs-parity/SKILL.md). Skill này giữ riêng app/namespace/account state của hai web và yêu cầu phân biệt rõ thay đổi đã triển khai local với sync live đã xác minh.

## English Progress

Tiến độ học ngữ pháp và sổ lỗi nằm tại [English Study Tracker](english/study-tracker/README.md) (schema JSON và hướng dẫn ôn tập). Trên website, mở **English Progress** từ thanh điều hướng. Dữ liệu cá nhân được import/export qua JSON và giữ trong snapshot local/Supabase tùy cấu hình, không commit lịch sử học cá nhân lên repo public.
