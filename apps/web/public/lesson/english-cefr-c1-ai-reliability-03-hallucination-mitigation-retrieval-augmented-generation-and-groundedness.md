# C1 Vocabulary 03 — Retrieval-augmented generation, epistemic confidence calibration, and hallucination reduction

Chuyên đề từ vựng C1 này tập trung vào các kỹ thuật truy xuất tăng cường sinh (Retrieval-Augmented Generation - RAG), đối chiếu ngữ nghĩa véc-tơ, hiệu chuẩn độ tin cậy nhận thức luận, phát hiện và triệt tiêu ảo giác thông tin, cùng các đường ống kiểm chứng nguồn trích dẫn và lọc rào chắn an toàn trong các hệ thống trí tuệ nhân tạo hiện đại.

---

## 1. retrieval-augmented generation /rɪˈtriːvəl ɔːɡˈmɛntɪd ˌdʒɛnəˈreɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường viết tắt là `RAG`). Thường làm chủ ngữ chỉ kiến trúc hệ thống hoặc tân ngữ sau các động từ như `architect`, `implement`, `optimize`.

**Core meaning — English:** An architectural AI framework that enhances large language model outputs by dynamically querying an external non-parametric knowledge base for relevant factual documents and conditioning the generation process on retrieved evidence.

**Core meaning & mental image — Tiếng Việt:** Sinh tăng cường truy xuất (RAG). Hãy hình dung một thí sinh bước vào phòng thi không chỉ dựa vào trí nhớ trong đầu (trọng số mô hình), mà được phép mở một chiếc cặp sách khổng lồ chứa hàng triệu tài liệu chính xác (kho dữ liệu ngoài) để tìm đúng trang sách liên quan trước khi viết câu trả lời.

**Grammar & collocations:** `deploy retrieval-augmented generation` — triển khai phương pháp sinh tăng cường truy xuất; `retrieval-augmented generation architecture` — kiến trúc RAG; `low-latency retrieval-augmented generation` — hệ thống RAG độ trễ thấp.

**Register & nuance:** Khái niệm công nghệ cốt lõi trong ngành AI tạo sinh doanh nghiệp. Phân biệt với việc chỉ dựa vào *parametric memory* (trí nhớ đóng băng trong trọng số), RAG cho phép cập nhật thông tin thời sự tức thì mà không cần tốn hàng triệu đô-la để huấn luyện lại mô hình.

**Examples:** `Enterprise search engines increasingly rely on retrieval-augmented generation to provide verified answers grounded in live corporate databases.` → Các công cụ tìm kiếm doanh nghiệp ngày càng dựa vào phương pháp sinh tăng cường truy xuất để cung cấp các câu trả lời đã được kiểm chứng dựa trên cơ sở dữ liệu doanh nghiệp thời gian thực.

**Liên kết tiếng Hàn:** `검색 증강 생성` (檢索 增强 生成) — sinh văn bản tăng cường truy xuất thông tin (RAG).

---

## 2. vector semantic retrieval /ˈvɛktər sɪˈmæntɪk rɪˈtriːvəl/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ mô tả cơ chế tìm kiếm hoặc tân ngữ sau `execute`, `leverage`, `benchmark`.

**Core meaning — English:** An information retrieval paradigm that matches queries to documents based on their underlying conceptual meaning rather than exact lexical keywords, utilizing dense numerical vector representations in high-dimensional embedding space.

**Core meaning & mental image — Tiếng Việt:** Truy xuất ngữ nghĩa bằng véc-tơ. Hãy hình dung một chiếc la bàn không gian đa chiều: thay vì tìm xem câu hỏi và cuốn sách có cùng chứa chữ "thú cưng" hay không, la bàn tính toán khoảng cách tọa độ để hiểu rằng "chú mèo con" và "động vật nuôi trong nhà" nằm sát sạt bên cạnh nhau trong không gian ý nghĩa.

**Grammar & collocations:** `execute vector semantic retrieval` — thực thi truy xuất ngữ nghĩa bằng véc-tơ; `hybrid search combining vector semantic retrieval` — tìm kiếm lai kết hợp truy xuất ngữ nghĩa véc-tơ; `precision in vector semantic retrieval` — độ chính xác trong truy xuất ngữ nghĩa véc-tơ.

**Register & nuance:** Thuật ngữ kỹ thuật cao trong khoa học dữ liệu và xử lý ngôn ngữ tự nhiên. Vượt trội hơn tìm kiếm từ khóa truyền thống (*lexical search* như BM25) khi xử lý các từ đồng nghĩa hoặc câu hỏi diễn đạt gián tiếp.

**Examples:** `By replacing keyword matching with vector semantic retrieval, the medical portal accurately answered patient queries phrased in everyday slang.` → Bằng cách thay thế khớp từ khóa bằng truy xuất ngữ nghĩa bằng véc-tơ, cổng thông tin y tế đã trả lời chính xác các câu hỏi của bệnh nhân được diễn đạt bằng tiếng lóng đời thường.

**Liên kết tiếng Hàn:** `벡터 의미론적 검색` (vector 意味論的 檢索) — truy xuất ngữ nghĩa dựa trên véc-tơ.

---

## 3. dense passage retrieval /dɛns ˈpæsɪdʒ rɪˈtriːvəl/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường viết tắt là `DPR`). Thường làm chủ ngữ hoặc tân ngữ sau các động từ như `train`, `fine-tune`, `integrate`.

**Core meaning — English:** An advanced dual-encoder neural retrieval method that encodes questions and text passages into dense continuous representations to retrieve the most contextually relevant passages from massive document corpora.

**Core meaning & mental image — Tiếng Việt:** Truy xuất đoạn văn dày đặc (DPR). Hãy hình dung hai chiếc máy quét quang học cùng hoạt động: một máy nén câu hỏi ngắn thành một mã số nhận dạng, máy kia quét hàng triệu trang sách thành hàng triệu mã số tương ứng, rồi ghép đôi chúng lại trong chớp mắt dựa trên sự hòa hợp tuyệt đối về mặt tư tưởng.

**Grammar & collocations:** `dual-encoder dense passage retrieval` — truy xuất đoạn văn dày đặc sử dụng bộ mã hóa kép; `train dense passage retrieval models` — huấn luyện các mô hình DPR; `latency in dense passage retrieval` — độ trễ trong truy xuất đoạn văn dày đặc.

**Register & nuance:** Thuật ngữ học máy chuyên sâu do Meta AI khởi xướng. DPR là nền tảng cốt lõi của các hệ thống hỏi đáp mở (*open-domain question answering*), thay thế hoàn toàn các phương pháp túi từ (*bag-of-words*).

**Examples:** `The research team demonstrated that dense passage retrieval outperformed traditional inverted indexes on open-domain trivia benchmarks.` → Nhóm nghiên cứu đã chứng minh rằng phương pháp truy xuất đoạn văn dày đặc vượt trội hơn các chỉ mục đảo truyền thống trên các bài đánh giá câu hỏi kiến thức mở.

**Liên kết tiếng Hàn:** `밀집 구절 검색` (密集 句節 檢索) — truy xuất đoạn văn bản dạng dày đặc (DPR).

---

## 4. semantic chunking overlap /sɪˈmæntɪk ˈtʃʌŋkɪŋ ˈoʊvərˌlæp/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm tân ngữ sau `configure`, `tune`, `specify` trong khâu tiền xử lý tài liệu.

**Core meaning — English:** The deliberate configuration of sliding window boundaries in document splitting, where adjacent text segments share a defined percentage of overlapping tokens to preserve contextual continuity across chunk boundaries.

**Core meaning & mental image — Tiếng Việt:** Sự gối đầu phân mảnh ngữ nghĩa; phần chồng lấn khi cắt đoạn ngữ nghĩa. Hãy hình dung việc cắt một cuốn tiểu thuyết thành từng thẻ ghi chú nhỏ: mỗi thẻ mới luôn sao chép lại hai câu cuối cùng của thẻ trước đó, bảo đảm rằng một đại từ như "ông ấy" hay một mệnh đề nguyên nhân-kết quả không bao giờ bị chặt đứt lìa khỏi ngữ cảnh.

**Grammar & collocations:** `configure semantic chunking overlap` — cấu hình độ gối đầu phân mảnh ngữ nghĩa; `prevent context fragmentation via semantic chunking overlap` — ngăn ngừa đứt gãy ngữ cảnh qua sự gối đầu phân mảnh ngữ nghĩa; `optimal semantic chunking overlap ratio` — tỷ lệ chồng lấn phân mảnh ngữ nghĩa tối ưu.

**Register & nuance:** Thuật ngữ kỹ nghệ công nghệ RAG (*RAG engineering*). Nếu overlap quá nhỏ sẽ làm mất nghĩa liên kết; nếu quá lớn sẽ gây lãng phí dung lượng bộ nhớ cửa sổ ngữ cảnh (*context window*) và tăng chi phí token.

**Examples:** `Setting a twenty percent semantic chunking overlap prevented the retrieval engine from splitting dependent clauses across separate embeddings.` → Việc thiết lập mức gối đầu phân mảnh ngữ nghĩa 20% đã ngăn không cho công cụ truy xuất chia tách các mệnh đề phụ thuộc sang các véc-tơ nhúng riêng biệt.

**Liên kết tiếng Hàn:** `의미적 분할 중첩` (意味的 分割 重疊) — sự gối đầu/chồng lấn khi chia đoạn ngữ nghĩa văn bản.

---

## 5. embedding dimension /ɪmˈbɛdɪŋ daɪˈmɛnʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ kỹ thuật quy định không gian véc-tơ hoặc tân ngữ sau `expand`, `project`, `compress`.

**Core meaning — English:** The fixed number of numerical coordinates (features) in a vector space used to represent the syntactic and semantic characteristics of a token, sentence, or document passage.

**Core meaning & mental image — Tiếng Việt:** Số chiều nhúng véc-tơ; kích thước không gian nhúng. Hãy hình dung một địa chỉ nhà trên Trái Đất cần 3 tọa độ (kinh độ, vĩ độ, độ cao); một khái niệm phức tạp trong trí não AI cần tới 1.536 hoặc 3.072 trục tọa độ khác nhau để nắm bắt trọn vẹn mọi sắc thái cảm xúc, chuyên môn và văn phong.

**Grammar & collocations:** `high embedding dimension` — số chiều nhúng cao; `reduce the embedding dimension` — giảm số chiều nhúng; `embedding dimension tradeoff` — sự đánh đổi về số chiều nhúng giữa độ chính xác và dung lượng lưu trữ.

**Register & nuance:** Thông số cơ bản trong kiến trúc mô hình học sâu. Số chiều cao hơn giúp biểu diễn ngữ nghĩa tinh tế hơn nhưng đòi hỏi nhiều bộ nhớ RAM và năng lực tính toán hơn trong cơ sở dữ liệu véc-tơ (*vector database*).

**Examples:** `Upgrading to a 3072-coordinate embedding dimension enhanced nuanced concept discrimination but doubled vector database memory usage.` → Việc nâng cấp lên không gian số chiều nhúng 3.072 tọa độ đã cải thiện khả năng phân biệt khái niệm tinh tế nhưng làm tăng gấp đôi dung lượng bộ nhớ cơ sở dữ liệu véc-tơ.

**Liên kết tiếng Hàn:** `임베딩 차원` (embedding 次元) — số chiều không gian nhúng véc-tơ.

---

## 6. cosine similarity metric /ˈkoʊsaɪn ˌsɪməˈlerəti ˈmɛtrɪk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường đóng vai trò tân ngữ sau `apply`, `compute`, `evaluate` trong thuật toán so khớp.

**Core meaning — English:** A mathematical formula that evaluates semantic affinity between two vectors by measuring the cosine of the angle between them in multidimensional space, regardless of their magnitude.

**Core meaning & mental image — Tiếng Việt:** Thước đo độ tương đồng cosine. Hãy hình dung hai tia sáng phát ra từ cùng một gốc tọa độ: nếu hai tia chỉ thẳng về cùng một hướng (góc bằng 0 độ, cosine bằng 1), chúng mang ý nghĩa tương đồng tuyệt đối; nếu chúng tạo thành góc vuông (cosine bằng 0), chúng hoàn toàn không liên quan gì đến nhau.

**Grammar & collocations:** `compute the cosine similarity metric` — tính toán thước đo độ tương đồng cosine; `threshold for the cosine similarity metric` — ngưỡng giá trị cho thước đo tương đồng cosine; `rely on cosine similarity metric` — dựa vào thước đo tương đồng cosine.

**Register & nuance:** Thước đo khoảng cách chuẩn mực nhất trong truy xuất thông tin ngữ nghĩa. Ưu điểm lớn nhất so với khoảng cách Euclid (*Euclidean distance*) là cosine chỉ đo góc hướng đi, nên không bị ảnh hưởng bởi độ dài ngắn của đoạn văn bản.

**Examples:** `The search pipeline applied a cosine similarity metric to rank candidate articles against the user's technical query.` → Đường ống tìm kiếm đã áp dụng thước đo độ tương đồng cosine để xếp hạng các bài viết ứng viên so với truy vấn kỹ thuật của người dùng.

**Liên kết tiếng Hàn:** `코사인 유사도 지표` (cosine 類似度 指標) — chỉ số đo độ tương đồng cosine.

---

## 7. approximate nearest neighbor /əˈprɑksəmət ˈnɪrɪst ˈneɪbər/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường viết tắt là `ANN`). Thường làm bổ ngữ cho thuật toán (`ANN search`, `ANN indexing`) hoặc tân ngữ sau `query`.

**Core meaning — English:** An algorithmic search optimization technique that finds data points close to a given query point in high-dimensional vector space much faster than exhaustive search by trading a marginal amount of accuracy for dramatic speed gains.

**Core meaning & mental image — Tiếng Việt:** Điểm lân cận gần đúng nhất (ANN). Hãy hình dung việc tìm người quen trong một đám đông 10 triệu người: thay vì đến xem mặt từng người một (quá lâu), thuật toán ANN phân vùng đám đông thành các cụm nhỏ và chỉ quét trong cụm có xác suất cao nhất, tìm ra người giống nhất chỉ trong vài phần nghìn giây.

**Grammar & collocations:** `approximate nearest neighbor indexing` — lập chỉ mục điểm lân cận gần đúng; `execute approximate nearest neighbor queries` — thực thi truy vấn điểm lân cận gần đúng; `graph-based approximate nearest neighbor algorithms` — thuật toán điểm lân cận gần đúng dựa trên đồ thị.

**Register & nuance:** Thuật toán sống còn trong cơ sở dữ liệu véc-tơ quy mô hàng tỷ bản ghi (như HNSW, FAISS). Chấp nhận mất 1-2% độ chính xác tuyệt đối để đổi lại tốc độ phản hồi tính bằng mili-giây.

**Examples:** `Deploying graph-based approximate nearest neighbor algorithms slashed vector search latency from seconds down to five milliseconds.` → Việc triển khai các thuật toán điểm lân cận gần đúng dựa trên đồ thị đã kéo giảm độ trễ tìm kiếm véc-tơ từ hàng giây xuống còn năm phần nghìn giây.

**Liên kết tiếng Hàn:** `근사 최근접 이웃` (近似 最近接 隣隅) — tìm kiếm điểm lân cận gần đúng nhất (ANN).

---

## 8. citation provenance grounding /saɪˈteɪʃən ˈprɑvənəns ˈɡraʊndɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ bảo đảm tính minh bạch hoặc tân ngữ sau `enforce`, `verify`, `implement`.

**Core meaning — English:** The programmatic binding of each generated factual statement directly to its origin document, specific page, or verbatim passage, providing verifiable lineage and empirical backing for user validation.

**Core meaning & mental image — Tiếng Việt:** Xác lập căn cứ nguồn gốc trích dẫn; bảo chứng xuất xứ thông tin. Hãy hình dung một bài luận văn mà mỗi câu khẳng định quan trọng đều được gắn một sợi dây liên kết vô hình nối thẳng đến đúng dòng chữ và con dấu đỏ trên tài liệu gốc, cho phép độc giả nhấp chuột kiểm tra nguồn gốc bất kỳ lúc nào.

**Grammar & collocations:** `enforce citation provenance grounding` — thực thi việc xác lập căn cứ nguồn gốc trích dẫn; `lack of citation provenance grounding` — sự thiếu hụt căn cứ nguồn gốc trích dẫn; `audit citation provenance grounding` — kiểm toán căn cứ xuất xứ trích dẫn.

**Register & nuance:** Trọng tâm của AI đáng tin cậy trong các lĩnh vực pháp lý, tài chính và y tế. Không chỉ yêu cầu mô hình đưa ra số liệu mà bắt buộc phải gắn kèm bằng chứng gốc (*provenance trail*) có thể truy nguyên.

**Examples:** `Regulatory compliance in financial advisory bots requires strict citation provenance grounding for every market prediction.` → Sự tuân thủ quy định trong các trợ lý tư vấn tài chính đòi hỏi việc xác lập căn cứ nguồn gốc trích dẫn nghiêm ngặt cho mọi dự báo thị trường.

**Liên kết tiếng Hàn:** `인용 출처 접지` (引用 出處 接地) / `인용 출처 근거화` — neo giữ căn cứ xuất xứ trích dẫn tài liệu.

---

## 9. contextual reranking /kənˈtɛkstʃuəl riˈræŋkɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Đóng vai trò chủ ngữ trong giai đoạn tinh lọc tài liệu hoặc tân ngữ sau `perform`, `integrate`.

**Core meaning — English:** A secondary scoring stage in a retrieval pipeline where a cross-encoder model deeply analyzes the full relational context between the user query and top candidate documents to reorder them for maximum relevance.

**Core meaning & mental image — Tiếng Việt:** Tái xếp hạng theo ngữ cảnh. Hãy hình dung một vị giáo sư uyên thâm đứng ở vòng chung khảo: sau khi vòng sơ tuyển (truy xuất nhanh) chọn ra 50 bài báo tiềm năng, vị giáo sư đọc kỹ từng câu chữ để cân nhắc xem bài nào thực sự trả lời đúng trọng tâm câu hỏi nhất và xếp nó lên vị trí số 1.

**Grammar & collocations:** `apply contextual reranking` — áp dụng tái xếp hạng theo ngữ cảnh; `cross-encoder contextual reranking` — tái xếp hạng ngữ cảnh bằng bộ mã hóa chéo; `improve retrieval precision via contextual reranking` — cải thiện độ chính xác truy xuất qua tái xếp hạng theo ngữ cảnh.

**Register & nuance:** Kỹ thuật chuẩn trong các hệ thống RAG tiên tiến hai giai đoạn (*two-stage retrieval*). Giúp giải quyết nhược điểm "nhìn nông" của các phép so sánh véc-tơ độc lập ban đầu.

**Examples:** `Passing candidate passages through contextual reranking eliminated irrelevant hits and placed the most decisive legal precedent at the top.` → Việc đưa các đoạn văn ứng viên qua khâu tái xếp hạng theo ngữ cảnh đã loại bỏ các kết quả không liên quan và đặt tiền lệ pháp lý mang tính quyết định nhất lên đầu bảng.

**Liên kết tiếng Hàn:** `문맥적 재순위화` (文脈的 再順位化) — tái xếp hạng kết quả theo ngữ cảnh.

---

## 10. lost-in-the-middle phenomenon /lɔst ɪn ðə ˈmɪdəl fəˈnɑməˌnɑn/

**Loại từ & vị trí trong câu:** `singular noun phrase` (thường đi với mạo từ `the`). Thường làm chủ ngữ giải thích hiện tượng suy giảm khả năng xử lý hoặc tân ngữ sau `suffer from`, `mitigate`.

**Core meaning — English:** The empirical observation that autoregressive language models exhibit significantly higher recall and attention for information placed at the very beginning or end of long input contexts, frequently missing or ignoring crucial facts situated in the middle.

**Core meaning & mental image — Tiếng Việt:** Hiện tượng "lạc lõng ở giữa" (lost-in-the-middle). Hãy hình dung một người đọc một bản báo cáo dài 100 trang: người đó nhớ vanh vách trang bìa mở đầu và trang kết luận cuối cùng, nhưng hoàn toàn bỏ quên một chi tiết đắt giá nằm trơ trọi ở trang 53 ngay giữa tập tài liệu dày cộp.

**Grammar & collocations:** `suffer from the lost-in-the-middle phenomenon` — chịu ảnh hưởng từ hiện tượng lạc lõng ở giữa; `mitigate the lost-in-the-middle phenomenon` — giảm thiểu hiện tượng lạc lõng ở giữa; `susceptibility to the lost-in-the-middle phenomenon` — mức độ dễ bị tác động bởi hiện tượng lạc lõng ở giữa.

**Register & nuance:** Thuật ngữ học thuật nổi tiếng bắt nguồn từ bài báo nghiên cứu của Liu et al. (Stanford). Cảnh báo các kỹ sư không nên nhồi nhét tài liệu bừa bãi vào cửa sổ ngữ cảnh dài mà cần sắp xếp các đoạn quan trọng nhất ở đầu hoặc cuối.

**Examples:** `Prompt engineers reordered retrieved snippets to counter the lost-in-the-middle phenomenon, placing high-relevance evidence at the outer boundaries.` → Các kỹ sư thiết kế prompt đã sắp xếp lại các đoạn trích truy xuất được để chống lại hiện tượng "lạc lõng ở giữa", đặt bằng chứng có độ liên quan cao nhất ở các ranh giới ngoài cùng.

**Liên kết tiếng Hàn:** `중간 유실 현상` (中間 遺失 現象) — hiện tượng thất lạc thông tin ở giữa văn bản dài.

---

## 11. parametric knowledge cutoff /ˌpærəˈmɛtrɪk ˈnɑlɪdʒ ˈkʌtɔf/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ chỉ mốc giới hạn thông tin hoặc bổ ngữ sau `reach`, `bypass`, `transcend`.

**Core meaning — English:** The specific calendar date beyond which a foundational neural model possesses zero internal training data, rendering it incapable of recalling subsequent real-world events from its weights alone.

**Core meaning & mental image — Tiếng Việt:** Mốc đóng băng tri thức tham số; điểm chặn tri thức nội tại. Hãy hình dung một cuốn từ điển bách khoa được in xong và đóng gáy vào ngày 31 tháng 12: dù bạn có lật tìm thế nào, cuốn sách cũng không thể biết chuyện gì đã xảy ra vào sáng ngày hôm sau trừ khi bạn kẹp thêm một tờ báo mới vào bên trong.

**Grammar & collocations:** `hit the parametric knowledge cutoff` — chạm mốc đóng băng tri thức tham số; `update beyond the parametric knowledge cutoff` — cập nhật vượt qua mốc đóng băng tri thức tham số; `compensate for the parametric knowledge cutoff` — bù đắp cho điểm chặn tri thức nội tại.

**Register & nuance:** Khái niệm then chốt khi giải thích lý do tại sao các mô hình nền tảng cần RAG. Cần phân biệt rõ giữa tri thức cố định trong trọng số (*parametric knowledge*) và tài liệu bên ngoài đưa vào thời gian thực (*non-parametric context*).

**Examples:** `Without external web browsing tools, the conversational agent could not answer queries that occurred after its parametric knowledge cutoff.` → Nếu không có các công cụ duyệt web bên ngoài, tác nhân hội thoại không thể trả lời các câu hỏi về những sự kiện diễn ra sau mốc đóng băng tri thức tham số của nó.

**Liên kết tiếng Hàn:** `매개변수 지식 마감 시점` (媒介變數 知識 마감 時點) — thời điểm ngắt tri thức trong trọng số mô hình.

---

## 12. source attribution fidelity /sɔrs ˌætrəˈbjuːʃən faɪˈdɛləti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm thước đo chất lượng hệ thống hoặc tân ngữ sau `evaluate`, `guarantee`, `maximize`.

**Core meaning — English:** The degree of factual and semantic faithfulness with which an AI system quotes, paraphrases, and links generated claims back to the actual content and intent of cited source documents.

**Core meaning & mental image — Tiếng Việt:** Độ trung thực khi quy chiếu nguồn; độ chuẩn xác quy kết nguồn dẫn. Hãy hình dung một nhà báo nghiêm cẩn: khi trích dẫn lời nhân chứng, từng từ ngữ và tinh thần của câu nói đều được bảo toàn nguyên vẹn, không hề có chuyện cắt xén câu chữ hay nhét lời giả mạo vào miệng người khác.

**Grammar & collocations:** `maintain source attribution fidelity` — duy trì độ trung thực khi quy chiếu nguồn; `compromise source attribution fidelity` — làm tổn hại độ chuẩn xác quy kết nguồn dẫn; `metric for source attribution fidelity` — thước đo độ trung thực quy chiếu nguồn.

**Register & nuance:** Tiêu chuẩn đánh giá cao cấp hơn việc chỉ đơn thuần gắn số trích dẫn `[1]`. Nó đo lường xem đoạn trích dẫn đó có thực sự hỗ trợ cho tuyên bố vừa được đưa ra hay mô hình đang "bịa nguồn" để đánh lừa người dùng.

**Examples:** `The automated legal research assistant scored 98% on source attribution fidelity, proving that every cited case directly supported the synthesized argument.` → Trợ lý nghiên cứu pháp lý tự động đạt điểm 98% về độ trung thực khi quy chiếu nguồn, chứng minh rằng mọi án lệ được trích dẫn đều trực tiếp bổ trợ cho lập luận được tổng hợp.

**Liên kết tiếng Hàn:** `출처 귀속 충실도` (出處 歸屬 忠實度) — độ chuẩn xác trung thực trong quy chiếu nguồn gốc.

---

## 13. epistemic confidence calibration /ˌɛpɪˈstiːmɪk ˈkɑnfədəns ˌkæləˈbreɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ của các nghiên cứu an toàn AI hoặc tân ngữ sau `conduct`, `optimize`, `improve`.

**Core meaning — English:** The algorithmic alignment between a model's self-assessed probability of correctness and its actual empirical accuracy, ensuring the model expresses high confidence only when its factual assertions are genuinely correct.

**Core meaning & mental image — Tiếng Việt:** Hiệu chuẩn độ tin cậy nhận thức luận. Hãy hình dung một bác sĩ dày dạn kinh nghiệm: khi nói "tôi chắc chắn 99%", thì 100 lần chẩn đoán sẽ đúng 99 lần; còn khi gặp ca bệnh mù mờ, vị bác sĩ thẳng thắn thừa nhận "tôi chỉ dám chắc 30% và cần làm thêm xét nghiệm", chứ không bao giờ tự tin thái quá khi bản thân đang đoán mò.

**Grammar & collocations:** `achieve epistemic confidence calibration` — đạt được hiệu chuẩn độ tin cậy nhận thức luận; `flawed epistemic confidence calibration` — sự hiệu chuẩn độ tin cậy nhận thức luận bị khiếm khuyết; `metrics of epistemic confidence calibration` — các số đo hiệu chuẩn độ tự tin nhận thức.

**Register & nuance:** Khái niệm cốt tử trong độ tin cậy AI. Đa số các mô hình ngôn ngữ lớn hiện nay đều bị "tự tin thái quá" (*overconfident*) ngay cả khi đưa ra thông tin sai lệch; hiệu chuẩn nhận thức giúp gắn nhãn mức độ chắc chắn một cách khách quan.

**Examples:** `Through rigorous post-hoc temperature scaling, researchers improved epistemic confidence calibration so the system readily flagged doubtful legal answers.` → Thông qua kỹ thuật định cỡ nhiệt độ sau huấn luyện nghiêm ngặt, các nhà nghiên cứu đã cải thiện việc hiệu chuẩn độ tin cậy nhận thức luận để hệ thống dễ dàng gắn cờ cảnh báo các câu trả lời pháp lý còn nhiều nghi vấn.

**Liên kết tiếng Hàn:** `인식론적 확신도 보정` (認識論的 確信度 補正) — hiệu chuẩn độ tự tin nhận thức luận của mô hình.

---

## 14. factual consistency checking /ˈfæktʃuəl kənˈsɪstənsi ˈtʃɛkɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đứng làm chủ ngữ của khâu thẩm định hoặc tân ngữ sau `automate`, `perform`, `integrate`.

**Core meaning — English:** The programmatic verification process that evaluates whether the claims made in a generated output are logically entailed by and strictly consistent with a provided reference context or ground-truth knowledge base.

**Core meaning & mental image — Tiếng Việt:** Kiểm tra tính nhất quán thực tế. Hãy hình dung một biên tập viên đối chiếu từng dòng chữ: tay trái cầm bản thảo AI vừa viết ra, tay phải cầm tài liệu gốc, soi từng con số ngày tháng và tên tuổi xem hai bên có ăn khớp 100% hay có chi tiết nào mâu thuẫn đối chọi nhau.

**Grammar & collocations:** `automate factual consistency checking` — tự động hóa việc kiểm tra tính nhất quán thực tế; `fail factual consistency checking` — không vượt qua khâu kiểm tra tính nhất quán thực tế; `factual consistency checking algorithm` — thuật toán kiểm tra tính nhất quán thực tế.

**Register & nuance:** Phương pháp cốt lõi để loại bỏ ảo giác nội tại (*intrinsic hallucinations*). Thường sử dụng các mô hình suy luận logic tự nhiên (NLI - *Natural Language Inference*) để phân loại xem câu trả lời là kéo theo (*entailment*), mâu thuẫn (*contradiction*) hay trung tính (*neutral*).

**Examples:** `Integrating an automated factual consistency checking module allowed the medical summarizer to instantly detect and discard fabricated drug dosages.` → Việc tích hợp một mô-đun kiểm tra tính nhất quán thực tế tự động đã cho phép công cụ tóm tắt y khoa lập tức phát hiện và loại bỏ các liều lượng thuốc tự thêu dệt.

**Liên kết tiếng Hàn:** `사실적 일관성 검증` (事實的 一貫性 檢證) — kiểm tra tính nhất quán của dữ liệu thực tế.

---

## 15. hallucination reduction /həˌluːsəˈneɪʃən rɪˈdʌkʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm mục tiêu nghiên cứu hoặc tân ngữ sau `achieve`, `prioritize`, `benchmark`.

**Core meaning — English:** The systematic engineering and algorithmic minimization of fabricated, ungrounded, or counterfactual statements produced by generative AI systems.

**Core meaning & mental image — Tiếng Việt:** Triệt tiêu ảo giác thông tin; giảm thiểu hiện tượng bịa đặt dữ liệu. Hãy hình dung việc lắp đặt một bộ lọc nước tinh khiết nhiều tầng: dòng nước đục ngầu chứa đầy những tin đồn và lời nói dối vô thức được lọc sạch từng cặn bẩn, chỉ để lại dòng nước trong vắt của sự thật trần trụi.

**Grammar & collocations:** `prioritize hallucination reduction` — ưu tiên việc triệt tiêu ảo giác thông tin; `hallucination reduction strategies` — các chiến lược giảm thiểu ảo giác thông tin; `significant hallucination reduction` — sự sụt giảm đáng kể hiện tượng thêu dệt thông tin.

**Register & nuance:** Khái niệm bao trùm mục tiêu an toàn thông tin của các công ty công nghệ. Khác với việc cải thiện khả năng hành văn mượt mà, từ này tập trung hoàn toàn vào độ chân thực của sự kiện (*veracity*).

**Examples:** `The deployment of grounded citation pipelines led to an eighty percent hallucination reduction across customer-facing technical support summaries.` → Việc triển khai các đường ống trích dẫn có căn cứ đã dẫn đến sự triệt tiêu ảo giác thông tin 80% xuyên suốt các bản tóm tắt hỗ trợ kỹ thuật hướng tới khách hàng.

**Liên kết tiếng Hàn:** `환각 완화` (幻覺 緩和) / `환각 감소` — giảm thiểu ảo giác thông tin AI.

---

## 16. extrinsic hallucination /ɛkˈstrɪnzɪk həˌluːsəˈneɪʃən/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ chỉ lỗi sai logic hoặc tân ngữ sau `detect`, `penalize`, `flag`.

**Core meaning — English:** A specific category of generative error where the model introduces fabricated claims or outside entities that cannot be verified from or corroborated by the provided source context.

**Core meaning & mental image — Tiếng Việt:** Ảo giác ngoại tại; sự thêu dệt ngoài ngữ cảnh. Hãy hình dung người phiên dịch tự ý bịa thêm một nhân vật hoàn toàn không có thật vào câu chuyện của nhân chứng, dù tài liệu lời khai ban đầu không hề đả động một chữ nào đến người đó.

**Grammar & collocations:** `flag an extrinsic hallucination` — gắn cờ một ảo giác ngoại tại; `distinguish intrinsic from extrinsic hallucination` — phân biệt ảo giác nội tại với ảo giác ngoại tại; `susceptibility to extrinsic hallucination` — khả năng dễ mắc lỗi ảo giác ngoại tại.

**Register & nuance:** Phân loại học thuật chính xác trong xử lý ngôn ngữ tự nhiên. Khác với *intrinsic hallucination* (mâu thuẫn trực tiếp với nguồn), *extrinsic hallucination* bổ sung những thông tin không thể kiểm chứng từ nguồn cung cấp, dù thông tin đó nghe rất xuôi tai.

**Examples:** `The audit revealed an extrinsic hallucination where the financial model invented a fictitious board member never mentioned in the annual filing.` → Đợt kiểm toán đã phát hiện một ảo giác ngoại tại khi mô hình tài chính bịa ra một thành viên hội đồng quản trị hư cấu chưa từng được đề cập trong báo cáo thường niên.

**Liên kết tiếng Hàn:** `외재적 환각` (外在的 幻覺) — ảo giác ngoại tại (thêu dệt thông tin ngoài ngữ cảnh).

---

## 17. intrinsic hallucination /ɪnˈtrɪnzɪk həˌluːsəˈneɪʃən/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Đóng vai trò chủ ngữ mô tả lỗi mâu thuẫn thông tin hoặc tân ngữ sau `eliminate`, `uncover`.

**Core meaning — English:** A type of hallucination where the generated output directly contradicts or logically clashes with the factual assertions contained within the provided reference material.

**Core meaning & mental image — Tiếng Việt:** Ảo giác nội tại; sự mâu thuẫn thông tin ngay trong ngữ cảnh. Hãy hình dung một học sinh đọc một trang sách ghi rõ "doanh thu năm nay giảm 10%", nhưng trong bài tóm tắt nộp thầy lại viết thành "doanh thu năm nay tăng vọt 10%" — một sự xuyên tạc ngược đời ngay trước mắt tài liệu gốc.

**Grammar & collocations:** `detect an intrinsic hallucination` — phát hiện một ảo giác nội tại; `zero intrinsic hallucination tolerance` — mức độ không dung thứ cho ảo giác nội tại; `contradiction indicative of intrinsic hallucination` — sự mâu thuẫn biểu hiện của ảo giác nội tại.

**Register & nuance:** Lỗi nghiêm trọng nhất trong các tác vụ tóm tắt văn bản (*abstractive summarization*). Nó thể hiện sự thất bại trong khả năng hiểu logic của mô hình đối với chính ngữ cảnh đang được cấp.

**Examples:** `Claiming the defendant was acquitted when the uploaded court verdict clearly stated a conviction was flagged as an intolerable intrinsic hallucination.` → Việc tuyên bố bị cáo được tha bổng trong khi bản án tòa án tải lên ghi rõ kết án có tội đã bị gắn cờ là một ảo giác nội tại không thể chấp nhận được.

**Liên kết tiếng Hàn:** `내재적 환각` (內在的 幻覺) — ảo giác nội tại (mâu thuẫn trực tiếp với tài liệu nguồn).

---

## 18. token log-probability score /ˈtoʊkən lɔɡ ˌprɑbəˈbɪləti skɔr/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường đứng làm tân ngữ sau `inspect`, `threshold`, `aggregate` để đo lường độ bất định.

**Core meaning — English:** The natural logarithm of the conditional probability assigned by a language model to a specific token during next-token prediction, serving as a primary signal for internal confidence and surprise.

**Core meaning & mental image — Tiếng Việt:** Điểm log-xác suất của token. Hãy hình dung một máy đo nhịp tim điện tử gắn trên từng từ mà mô hình thốt ra: từ nào mô hình biết chắc chắn thì đường đồ thị chạy êm ru gần mức 0 (xác suất gần 100%), còn từ nào mô hình ấp úng đoán mò thì điểm số lao dốc xuống các con số âm thăm thẳm.

**Grammar & collocations:** `analyze token log-probability score` — phân tích điểm log-xác suất của token; `threshold based on token log-probability score` — ngưỡng dựa trên điểm log-xác suất token; `sharp drop in token log-probability score` — sự sụt giảm mạnh của điểm log-xác suất token.

**Register & nuance:** Khái niệm toán học nền tảng trong suy luận mô hình ngôn ngữ. Giá trị log-probability thường âm; giá trị càng gần 0 thì mô hình càng tin chắc vào từ vựng được sinh ra tiếp theo.

**Examples:** `A precipitous drop in the token log-probability score indicated that the language model was guessing the patient's medication rather than recalling it.` → Sự sụt giảm đột ngột trong điểm log-xác suất của token cho thấy mô hình ngôn ngữ đang đoán mò loại thuốc của bệnh nhân thay vì thực sự nhớ ra nó.

**Liên kết tiếng Hàn:** `토큰 로그 확률 점수` (token log 確率 點數) — điểm số log-xác suất của token.

---

## 19. epistemic uncertainty /ˌɛpɪˈstiːmɪk ʌnˈsɜrtənti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ giải thích nguyên nhân thiếu dữ liệu hoặc tân ngữ sau `quantify`, `reduce`, `distinguish`.

**Core meaning — English:** The reducible uncertainty in a model's predictions arising from a lack of knowledge, sparse training data, or missing context, which can theoretically be eliminated by acquiring more empirical evidence.

**Core meaning & mental image — Tiếng Việt:** Độ bất định nhận thức luận; sự không chắc chắn do thiếu tri thức. Hãy hình dung cảm giác băn khoăn của bạn khi bước vào một thành phố xa lạ: bạn không biết đường đi vì chưa từng học bản đồ nơi này, nhưng chỉ cần ai đó đưa cho bạn cuốn cẩm nang du lịch (bổ sung dữ liệu), nỗi bất an đó sẽ tan biến ngay lập tức.

**Grammar & collocations:** `quantify epistemic uncertainty` — định lượng độ bất định nhận thức luận; `reduce epistemic uncertainty through retrieval` — giảm bớt độ bất định nhận thức nhờ truy xuất; `epistemic uncertainty versus aleatoric uncertainty` — sự bất định do thiếu tri thức so với bất định ngẫu nhiên cố hữu.

**Register & nuance:** Phân biệt kinh điển trong lý thuyết xác suất và học máy Bayesian. *Epistemic uncertainty* có thể triệt tiêu được bằng cách cung cấp thêm tài liệu (như qua RAG), khác với sự ngẫu nhiên vốn có của tự nhiên.

**Examples:** `Supplying verified company policies via RAG effectively mitigated the chatbot's epistemic uncertainty regarding parental leave benefits.` → Việc cung cấp các chính sách công ty đã được xác thực thông qua RAG đã làm giảm hiệu quả độ bất định nhận thức luận của chatbot liên quan đến chế độ nghỉ thai sản.

**Liên kết tiếng Hàn:** `인식론적 불확실성` (認識論的 不確實性) — độ bất định mang tính nhận thức do thiếu thông tin.

---

## 20. aleatoric uncertainty /ˌeɪliəˈtɔrɪk ʌnˈsɜrtənti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Đóng vai trò chủ ngữ mô tả tính ngẫu nhiên không thể xóa bỏ hoặc tân ngữ sau `model`, `account for`.

**Core meaning — English:** The inherent, irreducible randomness and stochastic noise present in the data generation process itself, which cannot be eradicated even if infinite training data or context is gathered.

**Core meaning & mental image — Tiếng Việt:** Độ bất định ngẫu nhiên cố hữu; tính ngẫu nhiên bất khả quy. Hãy hình dung việc tung một con xúc xắc cân đối: dù bạn có đọc hàng vạn cuốn sách vật lý hay thu thập vô số dữ liệu trong quá khứ, bạn vẫn không thể khẳng định chắc nịch mặt nào sẽ ngửa lên ở lần tung tiếp theo vì sự ngẫu nhiên nằm sẵn trong bản chất của trò chơi.

**Grammar & collocations:** `account for aleatoric uncertainty` — tính đến độ bất định ngẫu nhiên cố hữu; `irreducible aleatoric uncertainty` — tính bất định ngẫu nhiên không thể triệt tiêu; `measure aleatoric uncertainty in sensor data` — đo lường độ bất định ngẫu nhiên trong dữ liệu cảm biến.

**Register & nuance:** Thuật ngữ thống kê triết học (từ gốc Latin *alea* = trò chơi xúc xắc). Trong khi việc bổ sung tài liệu giúp giải quyết *epistemic uncertainty*, nó hoàn toàn bất lực trước *aleatoric uncertainty* của những sự việc mang tính may rủi tự nhiên.

**Examples:** `While more documents solved missing facts, the system recognized that predicting tomorrow's exact stock fluctuation involved pure aleatoric uncertainty.` → Dù việc bổ sung tài liệu đã giải quyết được các sự kiện bị thiếu, hệ thống nhận thức rằng việc dự đoán biến động cổ phiếu ngày mai chứa đựng độ bất định ngẫu nhiên cố hữu thuần túy.

**Liên kết tiếng Hàn:** `우연적 불확실성` (偶然的 不確實性) — độ bất định ngẫu nhiên cố hữu bất khả quy.

---

## 21. semantic entropy probe /sɪˈmæntɪk ˈɛntrəpi proʊb/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ phát hiện ảo giác hoặc tân ngữ sau `run`, `deploy`, `evaluate`.

**Core meaning — English:** An advanced diagnostic technique that samples multiple alternative completions from an LLM and measures the diversity of meaning among them to detect when the model is fabricating facts.

**Core meaning & mental image — Tiếng Việt:** Phép thăm dò entropy ngữ nghĩa. Hãy hình dung việc hỏi một kẻ tình nghi cùng một câu hỏi 5 lần: nếu 5 lần kẻ đó kể 5 câu chuyện với ý nghĩa hoàn toàn trái ngược nhau (độ hỗn loạn ngữ nghĩa cực cao), điều tra viên biết ngay hắn đang thêu dệt chuyện hoang đường; ngược lại nếu câu trả lời luôn đồng nhất, đó là sự thật.

**Grammar & collocations:** `deploy a semantic entropy probe` — triển khai phép thăm dò entropy ngữ nghĩa; `high score on semantic entropy probe` — điểm số cao trên phép thăm dò entropy ngữ nghĩa; `hallucination detection via semantic entropy probe` — phát hiện ảo giác thông qua phép thăm dò entropy ngữ nghĩa.

**Register & nuance:** Phương pháp tiên phong gần đây từ Đại học Oxford (Kuhn et al., Nature 2024). Phương pháp này bỏ qua các khác biệt vụn vặt về cách dùng từ mà chỉ đo sự phân tán về mặt ý nghĩa logic cốt lõi.

**Examples:** `Running a semantic entropy probe across ten sampled completions revealed profound conceptual discordance, indicating an imminent hallucination.` → Việc chạy một phép thăm dò entropy ngữ nghĩa xuyên suốt mười câu trả lời mẫu đã hé lộ sự bất hòa sâu sắc về mặt khái niệm, cảnh báo một ảo giác sắp xảy ra.

**Liên kết tiếng Hàn:** `의미론적 엔트로피 탐침` (意味論的 entropy 探針) — phép thăm dò độ hỗn loạn ngữ nghĩa.

---

## 22. groundedness evaluator /ˈɡraʊndɪdnəs ɪˈvæljuˌeɪtər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ kiểm duyệt độ tin cậy hoặc tân ngữ sau `configure`, `invoke`, `benchmark`.

**Core meaning — English:** An automated specialized model or algorithmic scoring component designed to inspect generated text alongside source references and output a quantitative metric denoting how rigorously the claims are tethered to provided facts.

**Core meaning & mental image — Tiếng Việt:** Bộ đánh giá độ có căn cứ; công cụ chấm điểm bám sát thực tế. Hãy hình dung một chiếc mỏ neo sắt nối con thuyền câu chữ với đáy biển dữ liệu: bộ đánh giá này kéo thử sợi xích xem con thuyền có thực sự bám chắc vào đá ngầm sự thật hay đang trôi dạt vô định theo những cơn sóng bịa đặt.

**Grammar & collocations:** `integrate a groundedness evaluator` — tích hợp bộ đánh giá độ có căn cứ; `strict threshold on groundedness evaluator` — ngưỡng khắt khe trên bộ đánh giá độ có căn cứ; `verdict of the groundedness evaluator` — phán quyết của công cụ đánh giá độ bám thực tế.

**Register & nuance:** Thành phần tiêu chuẩn trong các khung đánh giá RAG hiện đại (như Ragas, TruLens, Azure AI Evaluation). Cho ra điểm số định lượng từ 0.0 đến 1.0 biểu thị mức độ bám sát dữ liệu gốc.

**Examples:** `The production deployment rejected any AI response that failed to achieve a 0.95 score from the automated groundedness evaluator.` → Môi trường vận hành thực tế đã từ chối bất kỳ phản hồi AI nào không đạt được điểm số 0.95 từ bộ đánh giá độ có căn cứ tự động.

**Liên kết tiếng Hàn:** `근거성 평가기` (根據性 評價器) — bộ đánh giá độ có căn cứ của câu trả lời.

---

## 23. guardrail filtering /ˈɡɑrdreɪl ˈfɪltərɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ ngăn chặn nội dung độc hại hoặc tân ngữ sau `apply`, `enforce`, `bypass`.

**Core meaning — English:** The deterministic or probabilistic screening of input prompts and generated responses through a cascade of policy-enforcing rules to block toxic language, hallucinations, or intellectual property infringements.

**Core meaning & mental image — Tiếng Việt:** Lọc rào chắn an toàn; cơ chế sàng lọc lan can bảo vệ. Hãy hình dung một trạm gác ba tầng barrier tại lối ra vào: mọi gói bưu kiện gửi vào hay chuyển ra đều phải chạy qua máy soi chiếu để chặn đứng hàng cấm, vũ khí độc hại và những tài liệu xuyên tạc trước khi được giao đến tay người nhận.

**Grammar & collocations:** `enforce strict guardrail filtering` — thực thi việc lọc rào chắn an toàn nghiêm ngặt; `latency overhead of guardrail filtering` — chi phí độ trễ của việc lọc rào chắn an toàn; `bypass automated guardrail filtering` — lách qua cơ chế lọc rào chắn an toàn tự động.

**Register & nuance:** Thuật ngữ kiến trúc hệ thống phổ biến (như NeMo Guardrails, Guardrails AI). Khác với việc huấn luyện lại mô hình, đây là lớp phòng thủ bên ngoài (*middleware layer*) kiểm soát cả đầu vào (*input rails*) lẫn đầu ra (*output rails*).

**Examples:** `Engineers established rigorous guardrail filtering to ensure no proprietary customer financial records could ever be echoed in conversational outputs.` → Các kỹ sư đã thiết lập cơ chế lọc rào chắn an toàn nghiêm ngặt để bảo đảm không có bất kỳ hồ sơ tài chính bảo mật nào của khách hàng bị lặp lại trong các phản hồi hội thoại.

**Liên kết tiếng Hàn:** `가드레일 필터링` (guardrail filtering) — sàng lọc qua hệ thống rào chắn an toàn.

---

## 24. self-correction loop /sɛlf kəˈrɛkʃən luːp/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ thực hiện tinh chỉnh nội bộ hoặc tân ngữ sau `trigger`, `iterate through`, `engineer`.

**Core meaning — English:** An iterative generation mechanism whereby a model critiques its own intermediate response against factual ground rules or logical constraints, identifies discrepancies, and rewrites the output prior to final user presentation.

**Core meaning & mental image — Tiếng Việt:** Vòng lặp tự hiệu chỉnh; chu trình tự sửa sai. Hãy hình dung một dịch giả tự đọc lại bản dịch nháp của mình, tự gạch đỏ những câu dịch chưa chuẩn xác, rồi viết lại một bản hoàn hảo thứ hai trước khi bấm nút gửi thư cho khách hàng.

**Grammar & collocations:** `trigger an internal self-correction loop` — kích hoạt một vòng lặp tự hiệu chỉnh nội bộ; `multi-step self-correction loop` — vòng lặp tự sửa sai nhiều bước; `convergence in self-correction loop` — sự hội tụ trong chu trình tự hiệu chỉnh.

**Register & nuance:** Kỹ thuật tác nhân AI hiện đại (*agentic workflow* như Reflexion, Self-RAG). Thay vì đưa ra câu trả lời thô trong một lượt duy nhất, mô hình sử dụng chu trình phản hồi tự thân để nâng cao độ chính xác.

**Examples:** `When the consistency checker found an unverified date, the agent entered an automated self-correction loop to rewrite the claim using primary records.` → Khi bộ kiểm tra tính nhất quán phát hiện một ngày tháng chưa được kiểm chứng, tác nhân AI đã bước vào một vòng lặp tự hiệu chỉnh tự động để viết lại tuyên bố dựa trên các hồ sơ gốc.

**Liên kết tiếng Hàn:** `자기 교정 루프` (自己 矯正 loop) — vòng lặp tự sửa chữa sai sót.

---

## 25. claim verification pipeline /kleɪm ˌvɛrɪfɪˈkeɪʃən ˈpaɪplaɪn/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Đóng vai trò chủ ngữ thẩm định thông tin hoặc tân ngữ sau `construct`, `deploy`, `orchestrate`.

**Core meaning — English:** An end-to-end multi-step system that atomizes a generated response into individual factual assertions, retrieves corroborating evidence for each assertion, and verifies their truthfulness before release.

**Core meaning & mental image — Tiếng Việt:** Đường ống thẩm định khẳng định; quy trình xác thực luận điểm. Hãy hình dung một dây chuyền kiểm nghiệm công nghiệp: một cỗ máy bóc tách câu trả lời dài thành 10 khẳng định đơn lẻ, sau đó từng cánh tay robot sẽ mang từng khẳng định đi đối chiếu với kho tàng thư viện quốc gia, đóng dấu đạt chuẩn cho từng chi tiết nhỏ.

**Grammar & collocations:** `deploy an automated claim verification pipeline` — triển khai đường ống thẩm định khẳng định tự động; `modular claim verification pipeline` — đường ống xác thực luận điểm dạng mô-đun; `accuracy of the claim verification pipeline` — độ chính xác của quy trình thẩm định khẳng định.

**Register & nuance:** Đại diện cho giải pháp kỹ thuật toàn diện nhất để đối phó với tin giả và ảo giác trong AI. Quy trình này thường kết hợp trích xuất khẳng định (*claim extraction*), tìm kiếm bằng chứng (*evidence retrieval*) và suy luận thẩm định (*entailment scoring*).

**Examples:** `The news aggregation service routed all synthetic articles through an independent claim verification pipeline to prevent the spread of AI-generated misinformation.` → Dịch vụ tổng hợp tin tức đã định tuyến toàn bộ các bài viết tổng hợp qua một đường ống thẩm định khẳng định độc lập nhằm ngăn chặn sự lan truyền thông tin sai lệch do AI tạo ra.

**Liên kết tiếng Hàn:** `주장 검증 파이프라인` (主張 檢證 pipeline) — đường ống quy trình thẩm định luận điểm.

---

## Review in context (Part 1: RAG Architecture, Retrieval Mechanics, and Attribution)

To overcome the inherent limits of isolated foundational models, enterprise engineers built an advanced **retrieval-augmented generation** platform that grounds every response in verified technical documentation. The core indexing engine leverages **vector semantic retrieval** to surface documents based on underlying conceptual relevance rather than brittle keyword matching. Under the hood, a dual-encoder network conducts **dense passage retrieval**, mapping questions and extensive reference chapters into a shared embedding space. During data ingestion, technicians configured a twenty percent **semantic chunking overlap** across text boundaries, ensuring that contextual dependencies and transitional logic were never truncated. The embeddings were generated within a 1536-dimensional **embedding dimension**, capturing fine-grained domain semantics without exceeding memory constraints. To evaluate match candidates, the vector database calculated a **cosine similarity metric** across the indexed corpus. By deploying an optimized **approximate nearest neighbor** search index, the architecture resolved multi-vector queries in mere milliseconds across millions of customer manuals. To guarantee uncompromised transparency, the system enforced strict **citation provenance grounding**, tying every synthetic answer directly to a specific source paragraph. The engine also passed initial candidate pools through **contextual reranking**, moving the most empirically decisive documents to the very top of the input prompt. This arrangement intentionally mitigated the notorious **lost-in-the-middle phenomenon**, preventing the language model from overlooking crucial insights placed in lengthy context centers. Because company operational standards continually evolve, external document retrieval effectively bypassed the model's frozen **parametric knowledge cutoff**. Consequently, the synthesized advice demonstrated remarkable **source attribution fidelity**, providing audit committees with completely trustworthy audit trails.

**Bản dịch tiếng Việt:**
Để vượt qua những giới hạn cố hữu của các mô hình nền tảng cô lập, các kỹ sư doanh nghiệp đã xây dựng một nền tảng sinh tăng cường truy xuất (**retrieval-augmented generation**) tiên tiến giúp neo giữ mọi phản hồi vào tài liệu kỹ thuật đã được kiểm chứng. Công cụ lập chỉ mục cốt lõi tận dụng kỹ thuật truy xuất ngữ nghĩa bằng véc-tơ (**vector semantic retrieval**) để làm nổi bật các tài liệu dựa trên sự phù hợp khái niệm bên dưới thay vì sự so khớp từ khóa cứng nhắc. Phía sau hậu trường, một mạng nơ-ron bộ mã hóa kép thực hiện phương pháp truy xuất đoạn văn dày đặc (**dense passage retrieval**), ánh xạ các câu hỏi và các chương tham khảo đồ sộ vào một không gian nhúng chung. Trong quá trình nạp dữ liệu, các kỹ thuật viên đã cấu hình mức gối đầu phân mảnh ngữ nghĩa (**semantic chunking overlap**) hai mươi phần trăm xuyên suốt các ranh giới văn bản, bảo đảm rằng các mối phụ thuộc ngữ cảnh và logic chuyển tiếp không bao giờ bị cắt cụt. Các véc-tơ nhúng được tạo ra trong một số chiều nhúng véc-tơ (**embedding dimension**) 1.536 chiều, nắm bắt các sắc thái ngữ nghĩa chuyên ngành tinh tế mà không vượt quá giới hạn bộ nhớ. Để đánh giá các ứng viên so khớp, cơ sở dữ liệu véc-tơ đã tính toán một thước đo độ tương đồng cosine (**cosine similarity metric**) trên toàn bộ kho ngữ liệu đã lập chỉ mục. Bằng cách triển khai một chỉ mục tìm kiếm điểm lân cận gần đúng nhất (**approximate nearest neighbor**) được tối ưu hóa, kiến trúc đã giải quyết các truy vấn đa véc-tơ chỉ trong vài phần nghìn giây trên hàng triệu cuốn sổ tay hướng dẫn khách hàng. Nhằm bảo đảm tính minh bạch tuyệt đối, hệ thống đã thực thi cơ chế xác lập căn cứ nguồn gốc trích dẫn (**citation provenance grounding**) nghiêm ngặt, gắn kết mọi câu trả lời tổng hợp trực tiếp với một đoạn văn nguồn cụ thể. Cỗ máy cũng đưa các tập ứng viên ban đầu qua khâu tái xếp hạng theo ngữ cảnh (**contextual reranking**), đưa các tài liệu mang tính quyết định thực nghiệm nhất lên vị trí cao nhất của câu lệnh đầu vào. Sự sắp xếp này đã chủ động làm giảm nhẹ hiện tượng "lạc lõng ở giữa" (**lost-in-the-middle phenomenon**) tai tiếng, ngăn không cho mô hình ngôn ngữ bỏ sót những hiểu biết sâu sắc mang tính sống còn nằm ở trung tâm của các ngữ cảnh dài. Bởi vì các tiêu chuẩn vận hành công ty liên tục phát triển, việc truy xuất tài liệu bên ngoài đã vượt qua mốc đóng băng tri thức tham số (**parametric knowledge cutoff**) bị đóng băng của mô hình một cách hiệu quả. Kết quả là, những lời khuyên được tổng hợp đã thể hiện độ trung thực khi quy chiếu nguồn (**source attribution fidelity**) đáng nể, cung cấp cho các ủy ban kiểm toán những dấu vết kiểm toán hoàn toàn đáng tin cậy.

---

## Review in context (Part 2: Confidence Calibration, Factuality Auditing, and Guardrails)

Ensuring safety in clinical decision tools requires rigorous **epistemic confidence calibration**, teaching generative models to signal uncertainty instead of fabricating answers. In clinical trials, the diagnostic pipeline executes automated **factual consistency checking**, scanning every treatment plan to confirm it aligns with uploaded patient charts. These multi-tiered verification systems achieved substantial **hallucination reduction**, driving fabricated medical claims down to near-zero levels. Clinicians pay particular attention to catching any **extrinsic hallucination**, where an assistant might invent an uncorroborated drug allergy not recorded in the electronic health record. Simultaneously, the system intercepts any **intrinsic hallucination**, immediately flagging outputs that openly contradict primary laboratory findings. During token decoding, internal monitoring tracks the real-time **token log-probability score**, flagging sentences where conditional certainty suddenly plunges. This metric helps distinguish between reducible **epistemic uncertainty** that requires additional medical literature retrieval and inherent **aleatoric uncertainty** arising from random patient biological variations. For complex differential diagnoses, the platform runs an active **semantic entropy probe**, evaluating semantic divergence across diverse completions to unmask subtle hallucinations. Output validity is further verified by a certified **groundedness evaluator**, which scores factual tethering before responses are shown to physicians. The architecture also enforces multi-layer **guardrail filtering**, instantly quarantining responses that breach toxic communication guidelines or legal privacy regulations. If a factual contradiction is detected during the drafting process, the system triggers an internal **self-correction loop**, causing the model to critique and rewrite its assertions. Finally, every clinical summary must traverse a complete **claim verification pipeline**, confirming that each individual medical claim is rigorously backed by verified clinical evidence.

**Bản dịch tiếng Việt:**
Việc bảo đảm an toàn trong các công cụ hỗ trợ quyết định lâm sàng đòi hỏi phải có sự hiệu chuẩn độ tin cậy nhận thức luận (**epistemic confidence calibration**) nghiêm ngặt, dạy cho các mô hình tạo sinh biết cách phát tín hiệu bất định thay vì thêu dệt câu trả lời. Trong các thử nghiệm lâm sàng, đường ống chẩn đoán thực thi việc kiểm tra tính nhất quán thực tế (**factual consistency checking**) tự động, quét từng phác đồ điều trị để xác nhận rằng nó hoàn toàn ăn khớp với hồ sơ bệnh án được tải lên. Những hệ thống xác minh đa tầng này đã đạt được sự triệt tiêu ảo giác thông tin (**hallucination reduction**) đáng kể, kéo giảm các tuyên bố y khoa bịa đặt xuống mức gần như bằng không. Các bác sĩ lâm sàng đặc biệt chú ý đến việc phát hiện bất kỳ ảo giác ngoại tại (**extrinsic hallucination**) nào, nơi trợ lý AI có thể tự nghĩ ra một tiền sử dị ứng thuốc không có căn cứ vốn chưa từng được ghi nhận trong bệnh án điện tử. Đồng thời, hệ thống chặn đứng mọi ảo giác nội tại (**intrinsic hallucination**), lập tức gắn cờ những kết quả đầu ra mâu thuẫn trực tiếp với các kết quả xét nghiệm ban đầu. Trong quá trình giải mã token, khâu giám sát nội bộ liên tục theo dõi điểm log-xác suất của token (**token log-probability score**) theo thời gian thực, đánh dấu các câu văn nơi độ chắc chắn có điều kiện đột ngột lao dốc. Thước đo này giúp phân biệt giữa độ bất định nhận thức luận (**epistemic uncertainty**) có thể giảm thiểu bằng cách truy xuất thêm y văn và độ bất định ngẫu nhiên cố hữu (**aleatoric uncertainty**) phát sinh từ các biến thiên sinh học ngẫu nhiên của bệnh nhân. Đối với các chẩn đoán phân biệt phức tạp, nền tảng vận hành một phép thăm dò entropy ngữ nghĩa (**semantic entropy probe**) chủ động, đánh giá sự phân tán ngữ nghĩa xuyên suốt nhiều câu trả lời khác nhau để vạch trần những ảo giác tinh vi. Tính hợp lệ của đầu ra được xác minh thêm bởi một bộ đánh giá độ có căn cứ (**groundedness evaluator**) được chứng nhận, giúp chấm điểm mức độ bám sát dữ liệu thực tế trước khi phản hồi được hiển thị cho các bác sĩ. Kiến trúc này cũng thực thi cơ chế lọc rào chắn an toàn (**guardrail filtering**) đa tầng, lập tức cách ly các phản hồi vi phạm nguyên tắc giao tiếp độc hại hoặc các quy định bảo mật pháp lý. Nếu một mâu thuẫn thực tế bị phát hiện trong quá trình soạn thảo, hệ thống sẽ kích hoạt một vòng lặp tự hiệu chỉnh (**self-correction loop**) nội bộ, khiến mô hình tự phê bình và viết lại các khẳng định của mình. Cuối cùng, mọi bản tóm tắt lâm sàng đều phải đi qua một đường ống thẩm định khẳng định (**claim verification pipeline**) hoàn chỉnh, xác nhận rằng từng tuyên bố y khoa riêng lẻ đều được bảo chứng vững chắc bởi bằng chứng lâm sàng đã được kiểm chứng.
