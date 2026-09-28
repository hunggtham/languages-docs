# C1 Vocabulary 01 — Model evaluation and safety

Nhóm từ này mô tả cách đánh giá mô hình AI, nhận diện lệch dữ liệu và xây lớp kiểm soát trước khi triển khai.

## 1. explainable AI /ɪkˈspleɪnəbəl ˌeɪˈaɪ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — các phương pháp giúp con người hiểu vì sao hệ thống AI đưa ra một dự đoán hoặc quyết định.

**Core meaning — English:** Methods that help people understand why an AI system produced a prediction or decision.

**Core meaning & mental image — Tiếng Việt:** Không chỉ thấy điểm số từ hộp đen mà còn thấy những tín hiệu khiến mô hình đi đến kết luận.

**Grammar & collocations:** `explainable-AI method`, `explainable-AI tool`, `design for explainability`.

**Register & nuance:** Explainability có thể là giải thích cho từng dự đoán hoặc mô tả hành vi tổng thể; hai mức không giống nhau.

**Example:** `Explainable AI helped doctors question an unexpected prediction.` → AI có khả năng giải thích giúp bác sĩ chất vấn một dự đoán bất ngờ.

**Liên kết tiếng Hàn:** `설명 가능한 인공지능` — AI có thể giải thích.

## 2. adversarial example /ˌædvərˈseriəl ɪɡˈzæmpəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` — dữ liệu được chỉnh rất nhỏ nhưng khiến mô hình đưa ra dự đoán sai.

**Core meaning — English:** An input modified in a subtle way to cause a model to make an incorrect prediction.

**Core meaning & mental image — Tiếng Việt:** Một thay đổi gần như mắt người không thấy nhưng đủ đẩy mô hình sang nhãn khác.

**Grammar & collocations:** `generate an adversarial example`, `adversarial-example attack`, `defend against examples`.

**Register & nuance:** Adversarial example cho thấy độ chính xác bình thường không tự bảo đảm khả năng chống tấn công.

**Example:** `The image classifier failed on an adversarial example.` → Bộ phân loại ảnh thất bại trước một ví dụ đối nghịch.

**Liên kết tiếng Hàn:** `적대적 예제` — ví dụ đối nghịch.

## 3. distribution shift /ˌdɪstrəˈbjuːʃən ʃɪft/

**Loại từ & vị trí trong câu:** `countable noun phrase` — thay đổi giữa phân phối dữ liệu huấn luyện và dữ liệu mô hình gặp khi vận hành.

**Core meaning — English:** A change between the distribution of training data and the data encountered in operation.

**Core meaning & mental image — Tiếng Việt:** Mô hình học trên mùa hè nhưng phải làm việc trong mùa đông, nơi mẫu dữ liệu đã khác.

**Grammar & collocations:** `detect distribution shift`, `distribution-shift problem`, `handle shifting data`.

**Register & nuance:** Shift có thể do thời gian, địa lý, hành vi người dùng hoặc thay đổi quy trình đo.

**Example:** `Distribution shift reduced the model’s accuracy after deployment.` → Dịch chuyển phân phối làm độ chính xác giảm sau triển khai.

**Liên kết tiếng Hàn:** `분포 변화` — thay đổi phân phối.

## 4. human-in-the-loop /ˌhjuːmən ɪn ðə ˈluːp/

**Loại từ & vị trí trong câu:** `adjective or noun phrase` — thiết kế trong đó con người vẫn xem xét, phê duyệt hoặc can thiệp vào một phần quyết định của hệ thống.

**Core meaning — English:** A design in which people review, approve, or intervene in part of an automated system’s decisions.

**Core meaning & mental image — Tiếng Việt:** AI chạy nhanh nhưng một người vẫn có tay trên cần phanh ở điểm rủi ro cao.

**Grammar & collocations:** `human-in-the-loop review`, `human-in-the-loop system`, `keep a human in the loop`.

**Register & nuance:** Có người trong quy trình không đủ; họ phải có thời gian, thông tin và quyền thực sự để can thiệp.

**Example:** `A human-in-the-loop review was required for benefit denials.` → Cần con người xem xét các trường hợp từ chối trợ cấp.

**Liên kết tiếng Hàn:** `인간 개입형` — có con người tham gia trong vòng quyết định.

## 5. model card /ˈmɑdəl kɑrd/

**Loại từ & vị trí trong câu:** `countable noun phrase` — tài liệu mô tả mục đích, dữ liệu, hiệu suất, giới hạn và rủi ro của một mô hình.

**Core meaning — English:** A document describing a model’s purpose, data, performance, limitations, and risks.

**Core meaning & mental image — Tiếng Việt:** Nhãn hướng dẫn trên mô hình cho biết nó dùng được ở đâu và không nên dùng ở đâu.

**Grammar & collocations:** `publish a model card`, `model-card documentation`, `read the model card`.

**Register & nuance:** Model card tăng minh bạch nhưng chất lượng phụ thuộc việc công bố giới hạn và đánh giá đủ cụ thể.

**Example:** `The model card warned against using the system for clinical diagnosis.` → Tài liệu mô hình cảnh báo không dùng hệ thống để chẩn đoán lâm sàng.

**Liên kết tiếng Hàn:** `모델 카드` — thẻ mô hình.

## 6. data drift /ˈdeɪtə drɪft/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — thay đổi theo thời gian trong các đặc điểm đầu vào mà mô hình nhận được.

**Core meaning — English:** Changes over time in the characteristics or distribution of a model’s input data.

**Core meaning & mental image — Tiếng Việt:** Dòng dữ liệu từ từ trôi khỏi hình dạng mà mô hình từng quen.

**Grammar & collocations:** `monitor data drift`, `data-drift alert`, `measure drift`.

**Register & nuance:** Data drift nói về đầu vào; nó có thể xảy ra trước khi ta biết quan hệ giữa đầu vào và nhãn đã đổi.

**Example:** `Data drift appeared when customer behavior changed after the redesign.` → Trôi dữ liệu xuất hiện khi hành vi khách hàng đổi sau thiết kế lại.

**Liên kết tiếng Hàn:** `데이터 드리프트` — trôi dữ liệu.

## 7. concept drift /ˈkɑnsept drɪft/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — thay đổi theo thời gian trong mối quan hệ giữa đầu vào và kết quả cần dự đoán.

**Core meaning — English:** A change over time in the relationship between inputs and the target outcome.

**Core meaning & mental image — Tiếng Việt:** Cùng một tín hiệu trước đây báo điều A, nhưng thế giới đổi khiến nó giờ báo điều B.

**Grammar & collocations:** `detect concept drift`, `concept-drift adaptation`, `concept-drift monitoring`.

**Register & nuance:** Concept drift có thể làm mô hình sai dù phân phối đầu vào dường như vẫn ổn định.

**Example:** `Concept drift made the old fraud model unreliable.` → Trôi khái niệm khiến mô hình gian lận cũ không còn đáng tin.

**Liên kết tiếng Hàn:** `개념 드리프트` — trôi khái niệm.

## 8. robustness /roʊˈbʌstnəs/

**Loại từ & vị trí trong câu:** `uncountable noun` — khả năng hệ thống duy trì hiệu suất khi dữ liệu nhiễu, điều kiện thay đổi hoặc có tấn công.

**Core meaning — English:** The ability of a system to maintain performance under noise, changing conditions, or attack.

**Core meaning & mental image — Tiếng Việt:** Mô hình vẫn đứng vững khi dữ liệu rung, thiếu hoặc bị đẩy nhẹ khỏi trường hợp quen thuộc.

**Grammar & collocations:** `model robustness`, `test robustness`, `robustness evaluation`.

**Register & nuance:** Robustness phụ thuộc loại nhiễu và môi trường; một mô hình bền trong phòng thí nghiệm có thể yếu ngoài thực tế.

**Example:** `Robustness testing exposed failures in low-light images.` → Kiểm thử độ bền phơi bày lỗi trong ảnh thiếu sáng.

**Liên kết tiếng Hàn:** `강건성` — độ bền, tính vững.

## 9. fairness metric /ˈfer nəs ˈmetrɪk/

**Loại từ & vị trí trong câu:** `countable noun phrase` — chỉ số dùng để đánh giá một mô hình đối xử với các nhóm khác nhau có công bằng theo tiêu chí đã chọn không.

**Core meaning — English:** A measure used to evaluate whether a model treats groups fairly according to a chosen criterion.

**Core meaning & mental image — Tiếng Việt:** Một thước đo cho biết sai số hoặc cơ hội được phân bố giữa các nhóm ra sao.

**Grammar & collocations:** `choose a fairness metric`, `fairness-metric trade-off`, `compare metrics`.

**Register & nuance:** Không có một fairness metric phù hợp cho mọi tình huống; các tiêu chí có thể xung đột.

**Example:** `The team selected a fairness metric before tuning the classifier.` → Nhóm chọn chỉ số công bằng trước khi tinh chỉnh bộ phân loại.

**Liên kết tiếng Hàn:** `공정성 지표` — chỉ số công bằng.

## 10. synthetic data /sɪnˈθetɪk ˈdeɪtə/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — dữ liệu được tạo nhân tạo để mô phỏng đặc điểm của dữ liệu thật.

**Core meaning — English:** Artificially generated data designed to reproduce useful characteristics of real data.

**Core meaning & mental image — Tiếng Việt:** Một phòng thí nghiệm tạo mẫu dữ liệu giống đời thật mà không cần sao chép từng cá nhân thật.

**Grammar & collocations:** `generate synthetic data`, `synthetic-data pipeline`, `synthetic-data quality`.

**Register & nuance:** Synthetic data có thể bảo vệ riêng tư và mở rộng tập huấn luyện nhưng vẫn mang sai lệch từ cách tạo.

**Example:** `Synthetic data filled rare cases in the training set.` → Dữ liệu tổng hợp bổ sung các trường hợp hiếm trong tập huấn luyện.

**Liên kết tiếng Hàn:** `합성 데이터` — dữ liệu tổng hợp.

## 11. foundation model /faʊnˈdeɪʃən ˈmɑdəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` — mô hình lớn được huấn luyện trên dữ liệu rộng để có thể thích nghi cho nhiều nhiệm vụ.

**Core meaning — English:** A large model trained on broad data that can be adapted to many downstream tasks.

**Core meaning & mental image — Tiếng Việt:** Một nền móng chung được xây lớn rồi các ứng dụng chuyên biệt dựng thêm phòng theo nhu cầu.

**Grammar & collocations:** `foundation-model provider`, `foundation-model capability`, `adapt a foundation model`.

**Register & nuance:** Foundation model mô tả vai trò trong hệ sinh thái, không tự nói lên chất lượng hoặc độ an toàn.

**Example:** `The startup adapted a foundation model for legal search.` → Công ty khởi nghiệp điều chỉnh mô hình nền cho tìm kiếm pháp lý.

**Liên kết tiếng Hàn:** `파운데이션 모델`, `기초 모델` — mô hình nền tảng.

## 12. fine-tuning /ˈfaɪnˌtuːnɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — việc tiếp tục huấn luyện mô hình đã có bằng dữ liệu chuyên biệt để phù hợp nhiệm vụ hoặc phong cách.

**Core meaning — English:** Further training an existing model on specialized data for a particular task or style.

**Core meaning & mental image — Tiếng Việt:** Nền móng chung được chỉnh các nút tinh để hoạt động tốt trong một căn phòng chuyên dụng.

**Grammar & collocations:** `fine-tuning dataset`, `fine-tune a model`, `fine-tuning procedure`.

**Register & nuance:** Fine-tuning có thể cải thiện nhiệm vụ nhưng cũng làm mô hình quên hoặc khuếch đại sai lệch của dữ liệu mới.

**Example:** `Fine-tuning improved performance on the company’s terminology.` → Tinh chỉnh cải thiện hiệu suất với thuật ngữ của công ty.

**Liên kết tiếng Hàn:** `미세 조정` — tinh chỉnh.

## 13. prompt injection /prɑmpt ɪnˈdʒekʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — kỹ thuật đưa chỉ dẫn độc hại vào đầu vào để làm hệ thống AI bỏ qua quy tắc hoặc tiết lộ thông tin.

**Core meaning — English:** An attack that inserts malicious instructions into input to make an AI system ignore rules or reveal information.

**Core meaning & mental image — Tiếng Việt:** Một câu lệnh lén chen vào giữa dữ liệu và giả làm tiếng nói ưu tiên hơn hướng dẫn an toàn.

**Grammar & collocations:** `prompt-injection attack`, `defend against prompt injection`, `indirect prompt injection`.

**Register & nuance:** Injection có thể trực tiếp từ người dùng hoặc gián tiếp qua tài liệu, trang web và dữ liệu mà hệ thống đọc.

**Example:** `The agent blocked a prompt injection hidden in a webpage.` → Tác nhân chặn một lệnh tiêm ẩn trong trang web.

**Liên kết tiếng Hàn:** `프롬프트 인젝션` — tấn công tiêm lệnh.

## 14. red teaming /red ˈtiːmɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — hoạt động mô phỏng hành vi tấn công hoặc lạm dụng để tìm điểm yếu trước khi triển khai.

**Core meaning — English:** The practice of simulating attacks or misuse to find weaknesses before deployment.

**Core meaning & mental image — Tiếng Việt:** Một đội đóng vai kẻ phá khóa để thử mọi cửa trước khi hệ thống mở cho công chúng.

**Grammar & collocations:** `AI red teaming`, `red-team exercise`, `conduct red teaming`.

**Register & nuance:** Red teaming cần phạm vi, luật an toàn và báo cáo khắc phục; tìm lỗi không đồng nghĩa gây hại thật.

**Example:** `Red teaming uncovered unsafe responses to medical prompts.` → Đội đỏ phát hiện phản hồi không an toàn trước các lệnh y tế.

**Liên kết tiếng Hàn:** `레드 팀 테스트` — kiểm thử đội đỏ.

## 15. out-of-distribution /ˌaʊt əv ˌdɪstrəˈbjuːʃən/

**Loại từ & vị trí trong câu:** `adjective` — mô tả dữ liệu nằm ngoài phân phối mà mô hình đã thấy trong huấn luyện hoặc đánh giá.

**Core meaning — English:** Describing data that falls outside the distribution seen during training or evaluation.

**Core meaning & mental image — Tiếng Việt:** Mô hình được dạy trên đường phố nhưng gặp cảnh dưới biển, nơi bản đồ cũ không đủ.

**Grammar & collocations:** `out-of-distribution input`, `OOD detection`, `out-of-distribution generalization`.

**Register & nuance:** OOD không tự động nghĩa là dữ liệu vô dụng; vấn đề là mô hình phải nhận biết giới hạn và phản ứng an toàn.

**Example:** `The detector flagged the image as out-of-distribution.` → Bộ phát hiện đánh dấu ảnh nằm ngoài phân phối.

**Liên kết tiếng Hàn:** `분포 외` — ngoài phân phối.

## Review in context

**Explainable AI** helps inspect an **adversarial example** and understand failures under **distribution shift**. A **human-in-the-loop** process can review a **model card**, monitor **data drift** and **concept drift**, and test **robustness** with a **fairness metric**. **Synthetic data**, a **foundation model**, and **fine-tuning** expand capability, but **prompt injection** requires **red teaming** and detection of **out-of-distribution** inputs.

**AI có khả năng giải thích** giúp kiểm tra **ví dụ đối nghịch** và hiểu lỗi khi **dịch chuyển phân phối**. Quy trình **có con người tham gia** có thể xem **thẻ mô hình**, theo dõi **trôi dữ liệu** và **trôi khái niệm**, đồng thời kiểm tra **độ bền** bằng **chỉ số công bằng**. **Dữ liệu tổng hợp**, **mô hình nền tảng** và **tinh chỉnh** mở rộng năng lực, nhưng **tiêm lệnh** cần **kiểm thử đội đỏ** và phát hiện đầu vào **ngoài phân phối**.
