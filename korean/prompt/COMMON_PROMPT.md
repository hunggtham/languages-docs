# 한국어 공통 프롬프트

Mọi nội dung Korean mặc định phải tuân theo prompt này, sau đó mới áp dụng prompt chuyên biệt của từng loại tài liệu và yêu cầu của task hiện tại.

- Viết như tài liệu học thực sự: mạch lạc, tự nhiên, self-contained và ưu tiên hiểu bản chất hơn học thuộc.
- Chủ yếu dùng tiếng Hàn; dùng tiếng Việt ngay tại chỗ khi cần để người đọc hiểu mà không phải tự dịch thêm. Khi hữu ích, note thuật ngữ theo Korean / English / Vietnamese.
- Mọi title, heading, tên lesson, tên section và nhãn điều hướng hiển thị cho người học phải thống nhất bằng tiếng Hàn; không trộn tiếng Anh/tiếng Việt vào title. Tiếng Việt chỉ dùng trong phần giải thích, bản dịch hoặc note hỗ trợ bên dưới.
- Không dùng các title quản trị kiểu “batch đầu tiên”, “15 từ đầu” hoặc title phản ánh thứ tự của nguồn nếu chúng không giúp việc học. Có thể thay bằng title chủ đề tiếng Hàn có ý nghĩa đối với người học.
- Hướng đến native-level Korean: mục tiêu là hiểu, suy nghĩ và lựa chọn cách diễn đạt tự nhiên như người Hàn trưởng thành, không viết theo kiểu giáo trình dành cho người nước ngoài.
- Với vocabulary target mới, áp dụng cổng lựa chọn bắt buộc: mục từ phải là `advanced-native / C2-equivalent` hoặc `contemporary-native-hot` trong hội thoại, nhắn tin, công sở, cộng đồng online, truyền thông hoặc thời sự hiện đại. Không xem một từ chỉ vì hiếm, dài hoặc có trong PDF là C2.
- Từ phổ thông A1–B2 chỉ được dùng làm supporting language trong phần giải thích, collocation, ví dụ và đoạn đọc; không tạo thành target heading mới trừ khi task hiện tại yêu cầu vocabulary nền tảng.
- Difficulty floor: target mới phải khó hơn từ giao tiếp cơ bản. Ưu tiên từ C2-equivalent, thuật ngữ và cụm diễn đạt có mật độ cao trong báo chí/chính luận, hoặc cách nói khẩu ngữ/slang có sắc thái mà người Hàn hiện nay thực sự dùng; không dùng danh từ đời thường chỉ vì chúng tiện để đủ số lượng.
- Lấy contemporary Korean thực tế làm chuẩn, đặc biệt từ hội thoại native, 잡담, đời sống, công sở, báo chí và thời sự.
- Giải thích theo luồng kiến thức tự nhiên; tránh bullet, table và cấu trúc máy móc khi prose phù hợp hơn.
- Ưu tiên mental model, core meaning, context, 뉘앙스, register, discourse và native usage.
- Chú ý những yếu tố quyết định độ tự nhiên của tiếng Hàn như 어미, 축약, 생략, 높임말/반말, khoảng cách xã hội và lựa chọn expression theo context.
- Ví dụ phải tự nhiên, đúng ngữ cảnh và phản ánh cách người Hàn thực sự nói hoặc viết; tránh ví dụ mang cảm giác sách giáo khoa.
- Trước khi tạo mới hoặc chỉnh sửa file, phải kiểm tra các file liên quan hiện có để giữ nhất quán về format, naming, cấu trúc, thứ tự lesson/file và convention của repository; không tự tạo một format hoặc thứ tự cạnh tranh nếu không có lý do rõ ràng.
- Có thể tái cấu trúc lesson/file nếu giúp việc học tốt hơn nhưng không làm mất kiến thức quan trọng hoặc tạo nội dung trùng lặp.
- Không bắt buộc giữ thứ tự xuất hiện trong nguồn. Khi phù hợp, hãy gom các mục thành chủ đề hoặc mental model để việc ghi nhớ, tạo ví dụ và đọc đoạn văn tự nhiên hơn.
- Với vocabulary library, ưu tiên cấu trúc thư mục và file theo chủ đề học tập. Mỗi file phải có một mục tiêu chủ đề rõ ràng, không tạo file chỉ vì các từ nằm cạnh nhau trong PDF.
- Nội dung phải được giải thích đủ từ nền tảng cần thiết đến mức nâng cao; không giải thích ngắn nửa chừng khiến người đọc phải tự tra cứu để hiểu bản chất.
- Các nguồn như PDF, từ điển, Naver Dictionary hoặc bản dịch máy chỉ là tài liệu tham khảo để kiểm tra nghĩa và cách dùng. Phải viết lại bằng wording nguyên bản, không chép nguyên văn nội dung nguồn hoặc biến bản dịch nguồn thành phần học chính. Nếu cần lưu provenance, dùng front matter hoặc HTML comment/tag ẩn, không hiển thị trên page.
- Khi có nhiều mục từ trong cùng một file, dùng đường phân cách Markdown `---` giữa các mục để người học nhận ra ranh giới; không đặt đường phân cách vào giữa các phần của một mục.

Thứ tự ưu tiên: `COMMON_PROMPT` → prompt chuyên biệt → yêu cầu cụ thể của task hiện tại. Yêu cầu mới hơn và cụ thể hơn được ưu tiên khi có xung đột.
