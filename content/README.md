# Web-ready learning content

`content/` là lớp nội dung chuẩn hóa cho web. Các file PDF, audio, DOCX và archive vẫn nằm trong `english/` như kho nguồn; web chỉ đọc catalog và các Markdown đã được chọn.

Chạy:

```bash
python3 scripts/build-content-index.py
```

Kiểm tra toàn bộ vùng `english/` sau khi di chuyển/đổi tên:

```bash
python3 scripts/validate-english-library.py
```

Script sẽ tạo:

- `content/catalog.json`: metadata, nhóm kỹ năng, level và URL tài liệu.
- `content/english/{grammar,vocabulary,writing,corrections}/`: bản Markdown chuẩn hóa theo nhóm để các ứng dụng khác có thể dùng lại.
- `apps/web/public/lesson/*.md`: bản Markdown được public và web fetch theo nhu cầu.

Khi thêm tài liệu mới, cập nhật `DOCUMENTS` trong script rồi chạy lại lệnh trên. Không đưa API key hoặc ebook/audio thô vào `public/`.
