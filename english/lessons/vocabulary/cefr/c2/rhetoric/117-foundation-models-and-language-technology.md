# C2 Vocabulary 117 — Foundation models and language technology

This lesson follows a language system from its internal representation to prompting, retrieval, evaluation, and the practical limits of generalization.

Flow: **embedding → attention mechanism → perplexity → fine-tuning → beam search → named-entity recognition → coreference resolution → semantic parsing → morphological analyzer → zero-shot learning → few-shot learning → data augmentation → hallucination → distribution shift → interpretability → retrieval-augmented generation → in-context learning → instruction tuning → knowledge distillation → context window**.

## 1. embedding /ɛmˈbɛdɪŋ/
**Part of speech:** noun
**Core meaning (English):** a numerical representation that places words, phrases, or other objects in a space where meaningful relationships can be measured.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vector biểu diễn; hình dung mỗi từ được đặt thành một điểm trong không gian, nơi các ý gần nhau nằm gần nhau.
**Grammar & collocations:** `word embedding` — vector biểu diễn từ; `embedding space` — không gian vector; `learn an embedding` — học vector biểu diễn.
**Examples:** `The model's embedding placed “violin” closer to “piano” than to “volcano.”` → Vector biểu diễn của mô hình đặt “violin” gần “piano” hơn “volcano”.
**Liên kết tiếng Hàn:** `임베딩` (imbeding) — vector biểu diễn.

## 2. attention mechanism /əˈtɛnʃən ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** a mechanism that lets a model assign different weights to parts of an input when producing each output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế attention; hình dung mô hình phân bổ “đèn rọi” lên những từ liên quan nhất thay vì coi mọi phần của câu quan trọng như nhau.
**Grammar & collocations:** `self-attention mechanism` — cơ chế self-attention; `attention weight` — trọng số attention; `multi-head attention` — attention đa đầu.
**Examples:** `The attention mechanism linked the pronoun to the earlier noun that it described.` → Cơ chế attention liên kết đại từ với danh từ đứng trước mà nó mô tả.
**Liên kết tiếng Hàn:** `어텐션 메커니즘` (eotensyeon mekeonijeum) — cơ chế attention.

## 3. perplexity /pɚˈplɛksəti/
**Part of speech:** noun
**Core meaning (English):** a measure of how well a language model predicts a sequence, with lower values generally indicating more confident predictions on that data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** perplexity; hình dung mức “bối rối” của mô hình trước chuỗi từ—càng thấp, mô hình càng ít phân vân khi dự đoán.
**Grammar & collocations:** `language-model perplexity` — perplexity của mô hình ngôn ngữ; `low perplexity` — perplexity thấp; `evaluate perplexity` — đánh giá perplexity.
**Examples:** `The new tokenizer reduced perplexity on the domain-specific test set.` → Bộ tách từ mới giảm perplexity trên tập kiểm thử chuyên ngành.
**Liên kết tiếng Hàn:** `퍼플렉시티` (peopeulleksiti) — perplexity.

## 4. fine-tuning /ˈfaɪnˌtuːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** the process of continuing to train a pretrained model on a narrower dataset or task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tinh chỉnh; hình dung lấy một mô hình đã học rộng rồi dạy thêm bằng dữ liệu chuyên biệt để thích ứng với nhiệm vụ cụ thể.
**Grammar & collocations:** `supervised fine-tuning` — tinh chỉnh có giám sát; `fine-tuning dataset` — tập dữ liệu tinh chỉnh; `fine-tune a model` — tinh chỉnh mô hình.
**Examples:** `Fine-tuning improved the model's ability to summarize legal contracts.` → Tinh chỉnh cải thiện khả năng tóm tắt hợp đồng pháp lý của mô hình.
**Liên kết tiếng Hàn:** `미세 조정` (mise jojeong) — tinh chỉnh.

## 5. beam search /biːm sɝtʃ/
**Part of speech:** noun
**Core meaning (English):** a decoding strategy that keeps several promising partial sequences at each step instead of following only the single best one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm kiếm chùm; hình dung bộ giải mã giữ lại vài con đường có triển vọng rồi mở rộng chúng song song.
**Grammar & collocations:** `beam-search decoder` — bộ giải mã tìm kiếm chùm; `beam width` — độ rộng chùm; `run beam search` — chạy tìm kiếm chùm.
**Examples:** `A wider beam search produced more fluent translations but increased decoding time.` → Tìm kiếm chùm rộng hơn tạo bản dịch trôi chảy hơn nhưng tăng thời gian giải mã.
**Liên kết tiếng Hàn:** `빔 서치` (bim seochi) — tìm kiếm chùm.

## 6. named-entity recognition /ˌneɪmd ˈɛntəti ˌrɛkəɡˈnɪʃən/
**Part of speech:** noun
**Core meaning (English):** the task of finding and classifying names of people, places, organizations, dates, and other defined entities in text.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhận dạng thực thể có tên; hình dung đánh dấu “Seoul”, “NASA” hay “March 4” rồi gán đúng loại cho chúng.
**Grammar & collocations:** `named-entity recognition system` — hệ thống nhận dạng thực thể có tên; `named-entity label` — nhãn thực thể; `perform named-entity recognition` — thực hiện nhận dạng thực thể.
**Examples:** `Named-entity recognition extracted the hospital names from thousands of reports.` → Nhận dạng thực thể có tên trích xuất tên bệnh viện từ hàng nghìn báo cáo.
**Liên kết tiếng Hàn:** `개체명 인식` (gaechemyeong insik) — nhận dạng thực thể có tên.

## 7. coreference resolution /ˌkoʊˈrɛfərəns ˌrɛzəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** the process of determining which mentions in a text refer to the same person, object, or event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân giải đồng tham chiếu; hình dung nối “the company”, “it” và tên riêng về đúng cùng một đối tượng.
**Grammar & collocations:** `coreference-resolution model` — mô hình phân giải đồng tham chiếu; `coreference chain` — chuỗi đồng tham chiếu; `resolve coreference` — phân giải đồng tham chiếu.
**Examples:** `Coreference resolution prevented the system from attributing the warning to the wrong engineer.` → Phân giải đồng tham chiếu ngăn hệ thống gán cảnh báo cho nhầm kỹ sư.
**Liên kết tiếng Hàn:** `상호참조 해결` (sangho chamjo haegyeol) — phân giải đồng tham chiếu.

## 8. semantic parsing /səˈmæntɪk ˈpɑrsɪŋ/
**Part of speech:** noun
**Core meaning (English):** the conversion of language into a structured representation of its meaning that a computer can reason over or execute.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích cú nghĩa; hình dung biến câu tự nhiên thành cấu trúc máy hiểu được, như hành động, đối tượng và điều kiện.
**Grammar & collocations:** `semantic parser` — bộ phân tích cú nghĩa; `semantic-parsing framework` — khung phân tích cú nghĩa; `perform semantic parsing` — thực hiện phân tích cú nghĩa.
**Examples:** `Semantic parsing turned the request into a database query with the correct date range.` → Phân tích cú nghĩa biến yêu cầu thành truy vấn cơ sở dữ liệu với khoảng ngày đúng.
**Liên kết tiếng Hàn:** `의미 분석` (uimi bunseok) — phân tích cú nghĩa.

## 9. morphological analyzer /ˌmɔrfəˈlɑdʒɪkəl ˈænəˌlaɪzɚ/
**Part of speech:** noun
**Core meaning (English):** a tool that breaks words into meaningful parts and identifies features such as roots, affixes, number, or tense.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ phân tích hình thái; hình dung tháo một từ thành gốc và phụ tố để hiểu cấu trúc ngữ pháp bên trong.
**Grammar & collocations:** `finite-state morphological analyzer` — bộ phân tích hình thái hữu hạn; `morphological-analysis pipeline` — quy trình phân tích hình thái; `run a morphological analyzer` — chạy bộ phân tích hình thái.
**Examples:** `The morphological analyzer recognized the verb's tense and agreement features.` → Bộ phân tích hình thái nhận ra thì và đặc điểm hòa hợp của động từ.
**Liên kết tiếng Hàn:** `형태소 분석기` (hyeongtaeso bunseokgi) — bộ phân tích hình thái.

## 10. zero-shot learning /ˈzɪroʊ ʃɑt ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** the ability to perform a task or classify an example without task-specific labeled examples for that category.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học zero-shot; hình dung mô hình xử lý một loại yêu cầu mới dù chưa được cho ví dụ gắn nhãn trực tiếp.
**Grammar & collocations:** `zero-shot classification` — phân loại zero-shot; `zero-shot learning setting` — bối cảnh học zero-shot; `evaluate zero-shot learning` — đánh giá học zero-shot.
**Examples:** `Zero-shot learning let the classifier recognize a new topic from its textual description alone.` → Học zero-shot cho phép bộ phân loại nhận ra chủ đề mới chỉ từ mô tả bằng văn bản.
**Liên kết tiếng Hàn:** `제로샷 학습` (jerosyat haksseup) — học zero-shot.

## 11. few-shot learning /fjuː ʃɑt ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** the ability to adapt to a task from only a small number of labeled examples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học few-shot; hình dung mô hình bắt được quy luật từ chỉ vài ví dụ thay vì cần cả bộ dữ liệu lớn.
**Grammar & collocations:** `few-shot prompt` — prompt few-shot; `few-shot adaptation` — thích ứng few-shot; `few-shot learning benchmark` — benchmark học few-shot.
**Examples:** `Few-shot learning enabled the model to follow the company's unusual ticket labels after three examples.` → Học few-shot giúp mô hình theo được nhãn ticket đặc biệt của công ty sau ba ví dụ.
**Liên kết tiếng Hàn:** `퓨샷 학습` (pyusyat haksseup) — học few-shot.

## 12. data augmentation /ˈdeɪtə ˌɔɡmɛnˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** the creation of additional training examples by transforming existing data while preserving the task-relevant label or meaning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tăng cường dữ liệu; hình dung tạo thêm biến thể hợp lệ của dữ liệu gốc để mô hình gặp nhiều cách biểu hiện hơn.
**Grammar & collocations:** `text data augmentation` — tăng cường dữ liệu văn bản; `data-augmentation pipeline` — quy trình tăng cường dữ liệu; `apply data augmentation` — áp dụng tăng cường dữ liệu.
**Examples:** `Data augmentation with paraphrases improved robustness to varied wording.` → Tăng cường dữ liệu bằng các câu diễn đạt lại cải thiện độ bền trước cách dùng từ khác nhau.
**Liên kết tiếng Hàn:** `데이터 증강` (deiteo jeunggang) — tăng cường dữ liệu.

## 13. hallucination /həˌluːsəˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** a fluent but unsupported or false output generated by a model that presents invented information as if it were reliable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiện tượng bịa thông tin; hình dung mô hình nói rất tự tin nhưng tự dựng nguồn, con số hoặc sự kiện không có căn cứ.
**Grammar & collocations:** `model hallucination` — hiện tượng mô hình bịa thông tin; `hallucination rate` — tỷ lệ bịa thông tin; `mitigate hallucinations` — giảm hiện tượng bịa thông tin.
**Examples:** `The assistant hallucinated a case citation because it lacked access to the legal database.` → Trợ lý bịa một trích dẫn vụ án vì không truy cập được cơ sở dữ liệu pháp lý.
**Liên kết tiếng Hàn:** `환각` (hwangak) — hiện tượng bịa thông tin của mô hình.

## 14. distribution shift /ˌdɪstrəˈbjuːʃən ʃɪft/
**Part of speech:** noun
**Core meaning (English):** a change between the data distribution used for training and the distribution encountered during deployment or testing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dịch chuyển phân phối; hình dung thế giới lúc triển khai khác với dữ liệu mô hình từng học, khiến hiệu năng có thể giảm.
**Grammar & collocations:** `covariate distribution shift` — dịch chuyển phân phối biến đầu vào; `distribution-shift detection` — phát hiện dịch chuyển phân phối; `robust to distribution shift` — bền trước dịch chuyển phân phối.
**Examples:** `A distribution shift appeared when the speech model met accents absent from its training data.` → Dịch chuyển phân phối xuất hiện khi mô hình giọng nói gặp các giọng địa phương không có trong dữ liệu huấn luyện.
**Liên kết tiếng Hàn:** `분포 변화` (bunpo byeonhwa) — dịch chuyển phân phối.

## 15. interpretability /ɪnˌtɝprətəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the degree to which humans can understand why a model produced a particular output or how its internal representations work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng diễn giải; hình dung mở “hộp đen” đủ để biết mô hình dựa vào tín hiệu nào và vì sao đưa ra kết quả.
**Grammar & collocations:** `model interpretability` — khả năng diễn giải mô hình; `interpretability method` — phương pháp diễn giải; `improve interpretability` — cải thiện khả năng diễn giải.
**Examples:** `The audit prioritized interpretability because the model influenced medical triage decisions.` → Cuộc kiểm toán ưu tiên khả năng diễn giải vì mô hình ảnh hưởng đến quyết định phân loại y tế.
**Liên kết tiếng Hàn:** `해석 가능성` (haeseok ganeungseong) — khả năng diễn giải.

## 16. retrieval-augmented generation /rɪˈtriːvəl ɔɡˈmɛntɪd ˌdʒɛnəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** a system design that retrieves relevant external documents and supplies them to a generative model before it answers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sinh tăng cường bằng truy hồi; hình dung mô hình tra kho tài liệu liên quan trước rồi mới viết câu trả lời.
**Grammar & collocations:** `retrieval-augmented-generation pipeline` — quy trình sinh tăng cường bằng truy hồi; `retrieval-augmented generation system` — hệ thống sinh tăng cường bằng truy hồi; `ground generation with retrieval` — neo việc sinh vào dữ liệu truy hồi.
**Examples:** `Retrieval-augmented generation grounded the answer in the company's current policy documents.` → Sinh tăng cường bằng truy hồi neo câu trả lời vào tài liệu chính sách hiện hành của công ty.
**Liên kết tiếng Hàn:** `검색 증강 생성` (geomsaek jeunggang saengseong) — sinh tăng cường bằng truy hồi.

## 17. in-context learning /ɪn ˈkɑntɛkst ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** the ability of a model to infer a task or pattern from examples and instructions placed in the current input context without changing its parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học trong ngữ cảnh; hình dung mô hình “học tạm thời” từ phần prompt đang nhìn thấy mà không cần cập nhật trọng số.
**Grammar & collocations:** `in-context learning ability` — khả năng học trong ngữ cảnh; `in-context example` — ví dụ trong ngữ cảnh; `support in-context learning` — hỗ trợ học trong ngữ cảnh.
**Examples:** `In-context learning allowed the model to copy the requested tone from two sample paragraphs.` → Học trong ngữ cảnh cho phép mô hình bắt chước giọng điệu yêu cầu từ hai đoạn mẫu.
**Liên kết tiếng Hàn:** `문맥 내 학습` (munmaek nae haksseup) — học trong ngữ cảnh.

## 18. instruction tuning /ɪnˈstrʌkʃən ˈtuːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** fine-tuning a model on examples that pair natural-language instructions with desired responses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tinh chỉnh theo chỉ dẫn; hình dung dạy mô hình hiểu yêu cầu của con người và trả lời theo dạng mong muốn.
**Grammar & collocations:** `instruction-tuned model` — mô hình được tinh chỉnh theo chỉ dẫn; `instruction-tuning dataset` — tập dữ liệu tinh chỉnh theo chỉ dẫn; `perform instruction tuning` — thực hiện tinh chỉnh theo chỉ dẫn.
**Examples:** `Instruction tuning made the model more willing to follow multi-step formatting requests.` → Tinh chỉnh theo chỉ dẫn khiến mô hình sẵn sàng làm theo yêu cầu định dạng nhiều bước hơn.
**Liên kết tiếng Hàn:** `지시 튜닝` (jisi tyuning) — tinh chỉnh theo chỉ dẫn.

## 19. knowledge distillation /ˈnɑlɪdʒ dɪstəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a method in which a smaller student model learns to imitate the outputs or internal behavior of a larger teacher model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chưng cất tri thức; hình dung nén năng lực của mô hình lớn vào một mô hình nhỏ, nhẹ và rẻ hơn.
**Grammar & collocations:** `teacher–student knowledge distillation` — chưng cất tri thức theo mô hình thầy–trò; `distillation loss` — hàm mất mát chưng cất; `distill knowledge into a student model` — chưng cất tri thức vào mô hình trò.
**Examples:** `Knowledge distillation produced a smaller classifier that retained most of the teacher's accuracy.` → Chưng cất tri thức tạo ra bộ phân loại nhỏ hơn nhưng giữ được phần lớn độ chính xác của mô hình thầy.
**Liên kết tiếng Hàn:** `지식 증류` (jisik jeungnyu) — chưng cất tri thức.

## 20. context window /ˈkɑntɛkst ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the maximum amount of input and prior output a model can consider at one time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cửa sổ ngữ cảnh; hình dung vùng nhớ hữu hạn mà mô hình có thể giữ trước mắt khi đọc tài liệu dài hoặc cuộc hội thoại.
**Grammar & collocations:** `long context window` — cửa sổ ngữ cảnh dài; `context-window limit` — giới hạn cửa sổ ngữ cảnh; `fit a document within the context window` — đưa tài liệu vừa vào cửa sổ ngữ cảnh.
**Examples:** `The analyst split the archive because it exceeded the model's context window.` → Nhà phân tích chia kho lưu trữ vì nó vượt quá cửa sổ ngữ cảnh của mô hình.
**Liên kết tiếng Hàn:** `컨텍스트 창` (keontekseuteu chang) — cửa sổ ngữ cảnh.

## Review in context

An **embedding** places language in a vector space, while an **attention mechanism** decides which parts matter for the next prediction. **Perplexity** measures predictive uncertainty; **fine-tuning** adapts a pretrained model, and **beam search** chooses among candidate outputs. Language tools include **named-entity recognition**, **coreference resolution**, **semantic parsing**, and a **morphological analyzer**. A model may show **zero-shot learning** or **few-shot learning**, and **data augmentation** can broaden its examples. Yet **hallucination** remains possible under **distribution shift**, so **interpretability** matters. **Retrieval-augmented generation** supplies documents, **in-context learning** uses examples in the prompt, and **instruction tuning** teaches response patterns. **Knowledge distillation** compresses a teacher's behavior, while the **context window** limits how much information the system can consider at once.

**Bản dịch tiếng Việt:**

Vector biểu diễn đặt ngôn ngữ vào không gian vector, còn cơ chế attention quyết định phần nào quan trọng cho dự đoán tiếp theo. Perplexity đo mức không chắc chắn khi dự đoán; tinh chỉnh thích ứng một mô hình đã huấn luyện, còn tìm kiếm chùm lựa chọn giữa các đầu ra ứng viên. Các công cụ ngôn ngữ gồm nhận dạng thực thể có tên, phân giải đồng tham chiếu, phân tích cú nghĩa và bộ phân tích hình thái. Mô hình có thể thể hiện khả năng học zero-shot hoặc few-shot, còn tăng cường dữ liệu có thể mở rộng các ví dụ. Tuy vậy, hiện tượng bịa thông tin vẫn có thể xảy ra khi phân phối thay đổi, nên khả năng diễn giải rất quan trọng. Sinh tăng cường bằng truy hồi cung cấp tài liệu, học trong ngữ cảnh dùng các ví dụ trong prompt, còn tinh chỉnh theo chỉ dẫn dạy các mẫu phản hồi. Chưng cất tri thức nén hành vi của mô hình thầy, trong khi cửa sổ ngữ cảnh giới hạn lượng thông tin hệ thống có thể xem xét cùng lúc.
