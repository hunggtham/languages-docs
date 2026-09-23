# English library structure

Thư mục này được tổ chức theo mục đích sử dụng, không theo nguồn tải về:

```text
english/
├── lessons/       # nội dung học có thể chuẩn hóa/đưa lên web
│   ├── grammar/
│   ├── vocabulary/
│   ├── writing/personal-topics/
│   ├── corrections/
│   └── exams/
├── study/         # bài tập lớp và báo cáo ôn tập cá nhân
├── references/    # sách/PDF/audio tham khảo, không public mặc định
├── planning/      # workbook, spreadsheet và link quản lý tài liệu
└── archives/      # bản nén, bộ audio cũ và tài liệu chưa tuyển chọn
```

`study/my_note_lessons/` là gói chuẩn hoá riêng từ Notion/class export: hiện có
24 lesson, 24 bộ bài tập, 24 đáp án và 89 ảnh nguồn. Gói này được chuẩn bị để
review trước khi chọn đưa vào `lessons/` và catalog web.

Quy ước:

- Tên thư mục/file dùng lowercase-kebab-case; số unit có hai chữ số (`unit-01`), ngoại lệ là tên thương hiệu/tựa sách hiển thị trong metadata.
- `lessons/` là vùng duy nhất được xem xét để hiển thị web.
- PDF, DOCX, audio, archive và `.webloc` không được đưa lên web tự động; chúng cần được tuyển chọn và tạo metadata riêng.
- Khi thêm tài liệu, đặt nó vào đúng vùng rồi chạy `python3 scripts/build-content-index.py` nếu muốn đưa vào catalog.
