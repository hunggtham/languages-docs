# English library structure

Thư mục này được tổ chức theo mục đích sử dụng, không theo nguồn tải về. `lessons/` là vùng nội dung học đã được tuyển chọn để dùng trực tiếp; `study/` chứa bài học, bài tập và ghi chú đang trong quá trình review; `references/`, `planning/` và `archives/` giữ tài liệu nguồn hoặc dữ liệu hỗ trợ, không được xem là canonical learning content.

```text
english/
├── lessons/
│   ├── grammar/
│   ├── vocabulary/
│   ├── writing/personal-topics/
│   ├── corrections/
│   └── exams/
├── study/
├── references/
├── planning/
└── archives/
```

Grammar hiện có một curriculum canonical theo luồng khái niệm thay vì chia theo band. Bắt đầu tại [English Grammar — A Natural American English Learning Path](lessons/grammar/README.md). Từ trang đó có thể đọc liên tục từ sentence architecture, reference, tense/aspect và modality đến conditionals, information structure, register, compression và American–British usage differences.

`study/my_note_lessons/` là gói chuẩn hoá riêng từ Notion/class export. Nội dung trong đó nên được review trước khi chọn đưa sang `lessons/`; việc nằm trong `study/` không tự động biến tài liệu thành một phần của learning path chính.

Tên thư mục và file dùng lowercase-kebab-case; số unit dùng hai chữ số như `unit-01` khi cấu trúc tài liệu thực sự dựa trên unit. PDF, DOCX, audio, archive và `.webloc` không được xem là public lesson mặc định; cần chuyển thành nội dung đọc phù hợp trước khi đưa vào `lessons/`.

README cũ từng nhắc `scripts/build-content-index.py`, nhưng repository hiện tại không có script đó. Vì vậy không nên dựa vào command cũ để publish hoặc rebuild catalog. Khi web/catalog integration được bổ sung lại, command canonical cần được ghi tại đây cùng với script thực tế có trong repository.