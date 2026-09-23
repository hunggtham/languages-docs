# 한국어 어휘 프롬프트

Áp dụng cùng `COMMON_PROMPT.md` cho mọi nội dung vocabulary.

- Mọi target headword mới phải vượt qua lexical selection gate: (1) `advanced-native / C2-equivalent`, tức có nghĩa trừu tượng, chính xác, hàm ý, thành ngữ, văn viết/trang trọng hoặc sắc thái discourse ở mức native nâng cao; hoặc (2) `contemporary-native-hot`, tức đang được người Hàn dùng thực tế trong hội thoại, nhắn tin, công sở, cộng đồng online, truyền thông hoặc thời sự hiện đại. `B2+/C1` chỉ là mô tả tham khảo cũ và không còn đủ để chấp nhận một target mới.
- Không tạo target chỉ vì từ xuất hiện trong PDF, dễ dạy, phổ biến, dài, hiếm hoặc đúng nghĩa từ điển. Từ phổ thông A1–B2 chỉ được làm supporting language trong prose/collocation/example, không đứng thành target heading mới nếu không có yêu cầu vocabulary nền tảng.
- Mỗi target mới phải có metadata ẩn `lexical_basis: advanced_native | contemporary_native_hot`, cùng `register` và `context`; với từ contemporary-hot phải kiểm tra đó là cách dùng hiện tại, không phải slang đã lỗi thời.
- Với từ hiếm, cổ, chuyên ngành hoặc dễ bị hiểu sai, phải giải thích nhiều lớp: nghĩa hạt nhân, mental image, phạm vi nghĩa, sắc thái đánh giá, register, collocation, mẫu ngữ pháp, từ gần nghĩa và context không dùng được. Không dừng ở một dòng dịch.
- Mỗi mục phải có một phần collocation/chunk có thể tái sử dụng và một phần mẫu câu, trong đó ghi rõ các thành phần thường đi kèm (chủ thể, tân ngữ, trợ từ, bổ ngữ hoặc dạng kết hợp tự nhiên).
- Nguồn context ưu tiên: hội thoại native và 잡담 giữa người Hàn, đời sống/công sở/quan hệ xã hội, báo chí và thời sự hiện đại.
- Không học từ theo kiểu Korean → Vietnamese đơn lẻ; phải giúp hiểu core meaning, mental image, 실제 뉘앙스, register, collocation và cách dùng trong context thật.
- Title của mỗi mục chỉ nên chứa từ/cụm từ tiếng Hàn (có thể kèm cách đọc); part of speech/품사 phải đặt thành metadata ngay dưới title, không nhét vào title.
- Liên kết synonym, antonym, related words và các từ gần nghĩa khi giúp xây dựng vocabulary network; làm rõ vì sao người Hàn chọn từ này thay vì từ gần nghĩa khác.
- Với mỗi mục, ở cuối phần giải thích phải có `어휘 연결`: giữ keyword tiếng Hàn nhưng giải thích chủ yếu bằng tiếng Việt để người học nhìn rõ sự khác nhau giữa từ cơ bản, từ cao cấp/văn viết, từ gần nghĩa và từ trái nghĩa. Phải nói rõ khác biệt về meaning, register, collocation và context. Nếu không có trái nghĩa trực tiếp, phải nói rõ đó là một trục đối lập theo context chứ không phải antonym tuyệt đối.
- Phân biệt spoken Korean, written Korean, news language, formal language, slang, 신조어, 관용 표현 và các cách nói chỉ tự nhiên trong một số context nhất định.
- Register phải được giải thích theo cả quan hệ xã hội (thân mật, lịch sự, công việc, công chúng) và chủ đề (đời sống, công sở, báo chí, pháp lý, tôn giáo, cảm xúc…).
- Chủ yếu giải thích bằng tiếng Hàn tự nhiên; khi wording, nuance hoặc khái niệm khó thì giải thích ngay bằng tiếng Việt. Khi hữu ích, note Korean / English / Vietnamese.
- Ví dụ phải giống câu người Hàn có thể thực sự nói hoặc viết; ưu tiên hội thoại đời thường, công việc, báo chí và discourse hiện đại thay vì câu minh họa kiểu giáo trình.
- Nếu một từ đúng nghĩa từ điển nhưng nghe không tự nhiên trong context cụ thể, phải chỉ rõ lựa chọn native tự nhiên hơn.
- Mỗi file chủ đề phải có ít nhất một đoạn đọc tiếng Hàn liền mạch bao phủ toàn bộ từ mới trong file; không giới hạn file ở 15 hay 20 từ nếu các mục vẫn thuộc cùng một chủ đề.
- Với file có 1–15 từ, dùng một đoạn khoảng 100–150 어절. Với file có 16–25 từ, có thể tăng một đoạn lên khoảng 160–200 어절 để đưa đủ từ vào context. Với file có hơn 25 từ, chia thành hai hoặc nhiều đoạn, mỗi đoạn khoảng 100–150 어절, và phân bổ toàn bộ từ mới giữa các đoạn.
- Mỗi đoạn phải ghi rõ target set bằng metadata ẩn để kiểm tra coverage. Biến thể chia thì/đuôi câu của headword được chấp nhận, nhưng phải dùng tự nhiên và không được chỉ liệt kê từ.
- Đoạn đọc phải có title tiếng Hàn; bản dịch tiếng Việt và note từ vựng có thể đặt bên dưới nhưng không được đưa tiếng Việt/tiếng Anh vào title. Đoạn đọc phải kiểm tra khả năng nhận diện nghĩa trong context, không chỉ lặp lại câu ví dụ của từng mục.
- Ưu tiên một tình huống liền mạch thuộc đời sống, công việc, xã hội, báo chí hoặc discourse đương đại. Nếu chủ đề quá rộng, tách file thay vì nhồi các từ không liên quan.
- PDF và Naver Dictionary được dùng để đối chiếu, không phải nội dung để sao chép. Bản giải thích và đoạn đọc phải là nội dung biên soạn mới; provenance có thể lưu bằng tag/front matter/HTML comment ẩn.
- Ở cuối mỗi mục, thêm `영어 참고` với keyword tiếng Anh tương đương gần nhất, nhưng phần giải thích phạm vi nghĩa và khác biệt cách dùng phải chủ yếu bằng tiếng Việt. Đây là refer để nối mạng lưới ngôn ngữ, không thay thế giải thích tiếng Hàn.
- Dùng đường phân cách Markdown `---` giữa hai mục từ mới; không dùng đường này để chia nhỏ các phần bên trong cùng một mục.
- Khi file còn thiếu chiều sâu, ưu tiên bổ sung theo thứ tự: phát âm/biến âm, 문형 và 논항, register theo quan hệ xã hội, 연어/chunk, bản đồ từ gần nghĩa, bài tập đọc–hồi tưởng và metadata ôn tập ẩn. Chỉ thêm mục nào giúp phân biệt hoặc dùng được từ, tránh biến mỗi entry thành một danh sách metadata máy móc.
- Có thể bổ sung các từ ngoài nhóm hiện tại nếu chúng giúp tạo thành một chủ đề hoàn chỉnh. Không cần và không nên giữ thứ tự PDF; PDF chỉ là nguồn tham khảo để phát hiện và kiểm tra mục từ.

Mục tiêu không chỉ là biết nghĩa mà là có thể nhận ra sắc thái, dự đoán context và tự lựa chọn từ như native Korean speaker.

Task vocabulary = `COMMON_PROMPT` + `VOCAB_PROMPT` + yêu cầu cụ thể hiện tại.
