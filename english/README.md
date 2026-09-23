# English library structure

Thư mục `english/` hiện được tổ chức thành hai vùng chính: `lessons/` chứa nội dung đã được tuyển chọn để đọc trực tiếp, còn `study/` chứa bài học, bài tập và ghi chú đang trong quá trình review. README này mô tả cấu trúc thực tế đang có trong repository để tránh nhầm với các thư mục hoặc pipeline cũ đã không còn tồn tại.

```text
english/
├── lessons/
│   ├── grammar/
│   ├── vocabulary/
│   ├── writing/
│   ├── corrections/
│   └── exams/
└── study/
```

Grammar hiện có một curriculum canonical theo luồng khái niệm thay vì chia theo band. Bắt đầu tại [English Grammar — A Natural American English Learning Path](lessons/grammar/README.md). Từ trang đó có thể đọc liên tục từ sentence architecture, reference, tense/aspect và modality đến conditionals, information structure, register, compression và American–British usage differences.

`study/my_note_lessons/` là gói chuẩn hoá riêng từ class/Notion material. Nội dung trong đó nên được review trước khi chọn đưa sang `lessons/`; việc nằm trong `study/` không tự động biến tài liệu thành một phần của learning path chính.

Tên thư mục và file dùng lowercase-kebab-case; số unit dùng hai chữ số như `unit-01` khi cấu trúc tài liệu thực sự dựa trên unit. Nội dung trong `lessons/` nên ưu tiên Markdown đọc trực tiếp được trên web và mobile, có internal links thật khi tham chiếu sang lesson khác, và không phụ thuộc vào một command build không tồn tại trong repository.

README cũ từng nhắc `references/`, `planning/`, `archives/` và `scripts/build-content-index.py`, nhưng các resource đó hiện không có trong tree của `english/` hoặc `scripts/`. Nếu chúng được đưa trở lại sau này, README này cần được cập nhật cùng commit với resource thực tế thay vì mô tả một cấu trúc dự kiến.