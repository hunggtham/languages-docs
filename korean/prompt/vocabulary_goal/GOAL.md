# 한국어 어휘 확장 목표

Đây là goal dành riêng cho việc tạo các file học từ mới tiếng Hàn. Nó được dùng cùng `../COMMON_PROMPT.md`, `../VOCAB_PROMPT.md` và yêu cầu cụ thể của task hiện tại.

## Mục tiêu

Mở rộng thư viện Korean thành các bài học theo chủ đề, giúp người học nhận ra core meaning, sắc thái, register, collocation và cách dùng tự nhiên trong context hiện đại. Goal này không bị giới hạn bởi số lượng từ, thứ tự hay ranh giới của bất kỳ PDF hoặc file nguồn nào. Nguồn chỉ dùng để phát hiện và đối chiếu từ; wording, ví dụ và đoạn đọc phải được biên soạn mới.

Đừng tạo file chỉ vì các từ nằm cạnh nhau trong nguồn. Chọn một semantic field, tình huống, mental model hoặc mini-story đủ chặt trước, rồi mới chọn các từ bổ trợ để chủ đề có thể học được như một mạng lưới.

## Cấu trúc thư mục và file

Các lesson mới dùng cấu trúc:

```text
korean/vocab/topics/<topic-slug>/
├── README.md
├── 01-<subtopic-slug>.md
├── 02-<subtopic-slug>.md
└── ...
```

`<topic-slug>` và `<subtopic-slug>` dùng chữ thường, dấu gạch ngang và tên ổn định; title, heading và nhãn hiển thị bên trong file vẫn dùng tiếng Hàn theo `COMMON_PROMPT`. Mỗi folder là một chủ đề lớn và có thể chứa nhiều file Markdown cùng chủ đề. Mỗi file là một tiểu chủ đề liền mạch, không có quota cứng về tổng số entry. Số thứ tự bắt đầu từ `01` và tăng riêng trong từng folder.

Các file phẳng đang tồn tại trong `korean/vocab/topics/` được xem là legacy. Không tự ý di chuyển hoặc viết lại chúng chỉ để khớp cấu trúc mới; lesson mới dùng folder con, còn việc hợp nhất legacy chỉ thực hiện khi có task riêng và vẫn giữ link, provenance cùng nội dung đã được duyệt.

## Quy tắc nhóm 15 từ và đoạn đọc

Đơn vị context là một nhóm tối đa 15 headword mục tiêu. Cứ mỗi nhóm 15 từ thì viết một đoạn văn tiếng Hàn ngắn, liền mạch và có tình huống rõ ràng; nhóm cuối có thể ít hơn 15 từ nếu chủ đề đã kết thúc. Đây là quy tắc chia đoạn, không phải giới hạn số entry trong file.

- Nếu file có 15 từ, dùng một đoạn.
- Nếu file có 30 từ, dùng hai đoạn, mỗi đoạn bao phủ một `target_set` riêng.
- Nếu file có 32 từ, dùng ba đoạn theo nhóm `15 + 15 + 2`; không thêm từ lạc chủ đề chỉ để đủ 15.
- Đếm headword mục tiêu, không đếm số token. Biến thể chia thì, kính ngữ, trợ từ hoặc đuôi câu tự nhiên được tính là lần xuất hiện của headword tương ứng.

Mỗi đoạn nên có khoảng 3–7 câu tự nhiên, thường khoảng 80–140 어절, nhưng đây là hướng dẫn mềm. Đoạn phải giúp đoán nghĩa từ context chứ không chỉ nối các câu ví dụ rời rạc. Sau đoạn tiếng Hàn đặt bản dịch tiếng Việt và, khi cần, note ngắn về biến thể hoặc điểm dễ nhầm.

Mỗi đoạn phải có metadata ẩn để kiểm tra coverage, chẳng hạn:

```html
<!-- passage_word_count: 96 Korean eojeol; target_set: 단어1, 단어2, 단어3 -->
```

Tất cả headword trong `target_set` phải xuất hiện tự nhiên trong đoạn; không dùng danh sách từ hoặc nhồi dạng từ không phù hợp với ngữ cảnh.

## Quy tắc cho từng entry

Giữ format đang được dùng trong các lesson Korean hiện có: title là từ/cụm từ tiếng Hàn, `품사` ở ngay dưới title, sau đó giải thích core meaning, nghĩa tiếng Việt, mental image và nuance, collocation/chunk, mẫu câu và thành phần đi kèm, register theo quan hệ xã hội/chủ đề, ví dụ tự nhiên, `어휘 연결` và `영어 참고`. Có thể thêm pronunciation, biến âm, từ gần nghĩa hoặc context không dùng được khi chúng giúp phân biệt và sử dụng đúng.

Ưu tiên tiếng Hàn tự nhiên của đời sống, 잡담, công sở, báo chí và discourse hiện đại. Nếu một mục hiếm, cổ, chuyên ngành, slang hoặc đúng từ điển nhưng không tự nhiên trong context thông thường, phải ghi rõ giới hạn đó và đưa lựa chọn native phù hợp hơn.

## Quy trình tạo và kiểm tra

1. Đọc các prompt chung, prompt vocabulary, README của topic hiện tại và các file lân cận trước khi viết.
2. Kiểm tra trùng headword+sense với các lesson đã có; nếu dùng lại để ôn tập, ghi rõ vai trò review thay vì tạo coverage mới giả.
3. Chọn topic folder và subtopic file; tiếp tục số thứ tự cục bộ, không đánh lại số của folder khác.
4. Viết entry, chia các headword thành các `target_set` tối đa 15 và tạo đoạn đọc tương ứng.
5. Kiểm tra thủ công rằng title/heading hiển thị bằng tiếng Hàn, mọi target xuất hiện tự nhiên, bản dịch không bỏ ý, link README đúng và không sao chép nguyên văn nguồn.
6. Khi đã có batch lesson, cập nhật README của topic và `korean/vocab/CODEX_STATE.md` với folder/file tiếp theo, target set đã hoàn thành và ghi chú checkpoint. Chỉ tạo state file khi bắt đầu batch nội dung đầu tiên.
7. Chạy các kiểm tra repository phù hợp, xem diff, rồi commit riêng các file của batch và state liên quan.

Goal này là goal mở rộng liên tục. Một topic folder, một file hoặc một batch 15 từ chỉ là checkpoint; không được coi là hoàn thành toàn bộ goal sau một batch.
