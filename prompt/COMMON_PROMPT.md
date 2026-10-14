# Common Prompt — Language Docs

Mọi nội dung trong repository này mặc định phải tuân theo prompt này, sau đó mới áp dụng prompt chuyên biệt của từng loại tài liệu và yêu cầu của task hiện tại.

## Cấm tự động chèn prose

- Không dùng Python, JavaScript, regex, template, worker, generator hoặc automation để tự viết, chèn, nhân bản hay rewrite prose hướng người học: câu mở đầu, câu nối, giải thích, ví dụ, summary hoặc kết luận.
- Script chỉ được xử lý cấu trúc: đọc và giữ nguyên nguồn, sao chép media, chuẩn hóa đường dẫn, tạo index/manifest, ghi metadata máy và chạy audit.
- Nếu generator hiện tại tạo prose, phải gỡ logic đó trước khi regenerate. Prose mới phải được viết thủ công theo topic thật và review semantic.
- Kiểm tra cấu trúc, link hoặc metadata không chứng minh prose tự nhiên; luôn inspect diff sau khi chạy generator.

## Cấm bịa, vượt nguồn và tự xác nhận

- Không bịa fact, current claim, citation, URL, quotation, page number, số liệu, IPA, CEFR level, collocation, register, bản dịch hoặc ví dụ.
- Nếu chưa xác minh, ghi rõ `UNVERIFIED` hoặc `NEEDS_SOURCE`; không dùng suy đoán để lấp chỗ trống.
- Không dùng output/generated/public file, catalog, manifest hoặc bản nháp AI làm source mới; phải quay về canonical source và giữ provenance.
- Không upload private notes, ebook/tài liệu có bản quyền, export, secret, API key hoặc credential lên AI/API bên ngoài.
- Không xóa, overwrite, rename, reorder hoặc regenerate ngoài allowed paths và diff manifest của task. Không mở rộng từ một lesson/batch sang topic, level hoặc corpus khác nếu chưa được cho phép.
- Không sửa checker, count, metadata hoặc state để biến lỗi thành pass. Không tự tuyên bố `accepted`, `validated`, `published` hoặc `synced` nếu chưa có evidence tương ứng.
- Ví dụ có người, tổ chức, sự kiện, số liệu hoặc claim tự tạo phải được ghi rõ là hypothetical; không trình bày như bằng chứng thật.
- Không copy hoặc paraphrase nhẹ định nghĩa, bản dịch, ví dụ hay phần giải thích từ nguồn tham khảo/proprietary. Chỉ dùng nguồn để kiểm chứng rồi viết prose gốc.
- Không dịch, paraphrase, đổi register hoặc normalize hàng loạt bằng script/regex; mỗi thay đổi ngữ nghĩa phải được review theo topic.

- Viết như tài liệu học thực sự: mạch lạc, tự nhiên, self-contained và ưu tiên hiểu bản chất hơn học thuộc.
- Chủ yếu dùng tiếng Anh; dùng tiếng Việt ngay tại chỗ khi cần để người đọc hiểu mà không phải tự dịch thêm.
- Lấy contemporary General American English làm chuẩn; chỉ liên hệ British English, Korean hoặc ngôn ngữ khác khi hữu ích.
- Giải thích theo luồng kiến thức tự nhiên; tránh bullet, table và cấu trúc máy móc khi prose phù hợp hơn.
- Ưu tiên mental model, meaning, context, native usage và liên kết kiến thức.
- Ví dụ phải tự nhiên, đúng ngữ cảnh và chỉ xuất hiện khi thực sự giúp hiểu hoặc dùng đúng hơn.
- Trước khi tạo mới hoặc chỉnh sửa file, phải kiểm tra các file liên quan hiện có để giữ nhất quán về format, naming, cấu trúc, thứ tự lesson/file và convention của repository; không tự tạo một format hoặc thứ tự cạnh tranh nếu không có lý do rõ ràng.
- Có thể tái cấu trúc lesson/file nếu giúp việc học tốt hơn nhưng không làm mất kiến thức quan trọng hoặc tạo nội dung trùng lặp.
- Thuật ngữ hoặc wording tiếng Anh khó phải được giải thích ngay tại chỗ.

Thứ tự ưu tiên: `COMMON_PROMPT` → prompt chuyên biệt → yêu cầu cụ thể của task hiện tại. Yêu cầu mới hơn và cụ thể hơn được ưu tiên khi có xung đột.
