# C2 Vocabulary — Retrieval, grounding, and context engineering

This lesson follows a question from corpus preparation and embedding through retrieval ranking, context assembly, and answer faithfulness.

Flow: **retrieval corpus → document chunk → chunk overlap → embedding model → embedding dimension → nearest neighbor graph → query encoder → passage encoder → dense retrieval → sparse retrieval → hybrid ranker → cross encoder → retrieval recall → retrieval precision → context packing → context budget → retrieval poisoning → source grounding → answer attribution → faithfulness check**.

## 1. retrieval corpus /rɪˈtriːvəl ˈkɔːrpəs/
**Part of speech:** noun
**Core meaning (English):** the collection of documents made searchable for answering queries or supporting model generation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập document được search để trả lời query hoặc hỗ trợ model generate.
**Grammar & collocations:** `retrieval-corpus version` — version; `refresh a searchable collection` — làm mới.
**Examples:** `The retrieval corpus included policy pages but excluded expired announcements.` → Corpus gồm policy page nhưng bỏ announcement hết hạn.
**Liên kết tiếng Hàn:** `검색 코퍼스`.

## 2. document chunk /ˈdɒkjʊmənt tʃʌŋk/
**Part of speech:** noun
**Core meaning (English):** a smaller passage created by splitting a larger document for indexing and retrieval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đoạn nhỏ tạo bằng cách chia document lớn để index/retrieve.
**Grammar & collocations:** `document-chunk boundary` — boundary; `index a passage` — index.
**Examples:** `The importer preserved section titles in each document chunk.` → Importer giữ title section trong mỗi chunk.
**Liên kết tiếng Hàn:** `문서 청크`.

## 3. chunk overlap /tʃʌŋk ˈoʊvərlæp/
**Part of speech:** noun
**Core meaning (English):** repeated content shared by neighboring chunks to preserve context across a split.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** content lặp giữa chunk cạnh nhau để giữ context qua điểm chia.
**Grammar & collocations:** `chunk-overlap size` — size; `preserve a sentence boundary` — giữ.
**Examples:** `Chunk overlap kept the definition connected to the exception in the next passage.` → Overlap nối definition với exception.
**Liên kết tiếng Hàn:** `청크 중복`.

## 4. embedding model /ɪmˈbedɪŋ ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** a model that maps text or other objects to vectors whose geometry reflects useful similarity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model map text/object thành vector có geometry phản ánh similarity.
**Grammar & collocations:** `embedding-model version` — version; `encode a query` — encode.
**Examples:** `The embedding model placed paraphrased questions near the same policy chunk.` → Model đặt câu hỏi paraphrase gần chunk policy.
**Liên kết tiếng Hàn:** `임베딩 모델`.

## 5. embedding dimension /ɪmˈbedɪŋ dɪˈmenʃən/
**Part of speech:** noun
**Core meaning (English):** the number of coordinates in each vector produced by an embedding model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số coordinate trong mỗi vector embedding.
**Grammar & collocations:** `embedding-dimension mismatch` — mismatch; `allocate a vector index` — cấp.
**Examples:** `The index rejected the new model because its embedding dimension had changed.` → Index từ chối model mới vì dimension đổi.
**Liên kết tiếng Hàn:** `임베딩 차원`.

## 6. nearest neighbor graph /ˈnɪrəst ˈneɪbər ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph connecting each vector to nearby vectors to accelerate similarity search.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph nối vector với vector gần để tăng tốc search similarity.
**Grammar & collocations:** `nearest-neighbor-graph edge` — edge; `traverse candidate neighbors` — duyệt.
**Examples:** `The nearest neighbor graph reduced the number of vectors examined for each query.` → Graph giảm số vector phải xem.
**Liên kết tiếng Hàn:** `최근접 이웃 그래프`.

## 7. query encoder /ˈkwɪəri enˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** a model component that converts a user's query into the representation used for retrieval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component đổi query user thành representation dùng để retrieval.
**Grammar & collocations:** `query-encoder output` — output; `encode a natural-language question` — encode.
**Examples:** `The query encoder ignored polite wording and preserved the request's technical intent.` → Encoder bỏ wording lịch sự, giữ intent kỹ thuật.
**Liên kết tiếng Hàn:** `질의 인코더`.

## 8. passage encoder /ˈpæsɪdʒ enˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** a model component that converts indexed passages into vectors comparable with encoded queries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component đổi passage index thành vector so được với query.
**Grammar & collocations:** `passage-encoder batch` — batch; `encode an indexed chunk` — encode.
**Examples:** `The passage encoder processed new policy chunks before the index refresh.` → Encoder xử lý chunk policy trước refresh index.
**Liên kết tiếng Hàn:** `패시지 인코더`.

## 9. dense retrieval /dens rɪˈtriːvəl/
**Part of speech:** noun
**Core meaning (English):** retrieving passages by comparing continuous vector representations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** retrieve passage bằng cách so vector liên tục.
**Grammar & collocations:** `dense-retrieval score` — score; `search semantic neighbors` — tìm.
**Examples:** `Dense retrieval found a conceptually similar passage despite different vocabulary.` → Dense tìm passage giống nghĩa dù từ khác.
**Liên kết tiếng Hàn:** `밀집 검색`.

## 10. sparse retrieval /spɑːrs rɪˈtriːvəl/
**Part of speech:** noun
**Core meaning (English):** retrieving passages through sparse term or feature matches such as exact words.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** retrieve bằng match thưa của term/feature như từ exact.
**Grammar & collocations:** `sparse-retrieval index` — index; `match a rare identifier` — khớp.
**Examples:** `Sparse retrieval found the exact error code that dense similarity had ranked lower.` → Sparse tìm error code exact mà dense xếp thấp.
**Liên kết tiếng Hàn:** `희소 검색`.

## 11. hybrid ranker /ˈhaɪbrɪd ˈræŋkər/
**Part of speech:** noun
**Core meaning (English):** a ranking component that combines signals from multiple retrieval methods.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component xếp hạng gộp signal từ nhiều phương pháp retrieval.
**Grammar & collocations:** `hybrid-ranker weight` — trọng số; `combine lexical and semantic scores` — gộp.
**Examples:** `The hybrid ranker combined the exact product code with semantic relevance.` → Ranker gộp product code exact và relevance nghĩa.
**Liên kết tiếng Hàn:** `하이브리드 랭커`.

## 12. cross encoder /krɒs enˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** a model that reads a query and passage together to calculate a more precise relevance score.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model đọc query và passage cùng lúc để tính relevance chính xác hơn.
**Grammar & collocations:** `cross-encoder score` — score; `rerank a short candidate list` — xếp lại.
**Examples:** `The cross encoder reranked the ten candidates using the full question and passage.` → Encoder xếp lại 10 candidate bằng full query/passage.
**Liên kết tiếng Hàn:** `교차 인코더`.

## 13. retrieval recall /rɪˈtriːvəl riˈkɔːl/
**Part of speech:** noun
**Core meaning (English):** the proportion of relevant passages that a retrieval stage successfully returns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ passage liên quan mà retrieval trả về được.
**Grammar & collocations:** `retrieval-recall metric` — metric; `recover a missed passage` — lấy lại.
**Examples:** `The larger candidate pool improved retrieval recall for rare policy questions.` → Pool lớn hơn cải thiện recall cho question policy hiếm.
**Liên kết tiếng Hàn:** `검색 재현율`.

## 14. retrieval precision /rɪˈtriːvəl prɪˈsɪʒən/
**Part of speech:** noun
**Core meaning (English):** the proportion of returned passages that are relevant to the query.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ passage trả về thật sự liên quan query.
**Grammar & collocations:** `retrieval-precision metric` — metric; `remove irrelevant candidates` — bỏ.
**Examples:** `A metadata filter improved retrieval precision by excluding archived documents.` → Filter metadata tăng precision bằng cách bỏ document archive.
**Liên kết tiếng Hàn:** `검색 정밀도`.

## 15. context packing /ˈkɒntekst ˈpækɪŋ/
**Part of speech:** noun
**Core meaning (English):** arranging selected passages and instructions efficiently inside a model's input context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sắp passage và instruction được chọn hiệu quả trong context input.
**Grammar & collocations:** `context-packing strategy` — strategy; `order evidence by relevance` — sắp.
**Examples:** `Context packing placed the strongest evidence before lower-ranked background material.` → Packing đặt evidence mạnh trước background thấp hơn.
**Liên kết tiếng Hàn:** `컨텍스트 패킹`.

## 16. context budget /ˈkɒntekst ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the maximum amount of input space available for instructions, retrieved evidence, and conversation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng input tối đa cho instruction, evidence và conversation.
**Grammar & collocations:** `context-budget allocation` — phân bổ; `reserve room for an answer` — chừa.
**Examples:** `The context budget reserved space for the answer instead of filling the prompt with documents.` → Budget chừa chỗ answer thay nhồi document.
**Liên kết tiếng Hàn:** `컨텍스트 예산`.

## 17. retrieval poisoning /rɪˈtriːvəl ˈpɔɪzənɪŋ/
**Part of speech:** noun
**Core meaning (English):** inserting misleading or malicious content into a searchable corpus to influence retrieved evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chèn content sai/độc vào corpus để ảnh hưởng evidence retrieve.
**Grammar & collocations:** `retrieval-poisoning defense` — defense; `quarantine an untrusted document` — cô lập.
**Examples:** `Retrieval poisoning caused the assistant to cite a forged policy page.` → Poisoning khiến assistant cite policy giả.
**Liên kết tiếng Hàn:** `검색 중독`.

## 18. source grounding /sɔːrs ˈɡraʊndɪŋ/
**Part of speech:** noun
**Core meaning (English):** anchoring a generated answer in identifiable external evidence rather than unsupported model memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** neo answer vào evidence external nhận diện được thay memory không kiểm chứng.
**Grammar & collocations:** `source-grounding requirement` — requirement; `ground a claim in a passage` — neo.
**Examples:** `Source grounding required every financial claim to point to an approved report.` → Grounding yêu cầu claim tài chính trỏ report duyệt.
**Liên kết tiếng Hàn:** `소스 그라운딩`.

## 19. answer attribution /ˈɑːnsər ˌætrɪˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** linking a generated statement to the source passage or evidence that supports it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối statement sinh ra với passage/evidence hỗ trợ.
**Grammar & collocations:** `answer-attribution marker` — marker; `attribute a claim to a source` — quy.
**Examples:** `Answer attribution let the reviewer inspect the paragraph behind each recommendation.` → Attribution giúp reviewer xem paragraph sau mỗi recommendation.
**Liên kết tiếng Hàn:** `답변 귀속`.

## 20. faithfulness check /ˈfeɪθfəl.nəs tʃek/
**Part of speech:** noun
**Core meaning (English):** a check that tests whether an answer is supported by, and does not contradict, its supplied evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check answer có được evidence hỗ trợ và không mâu thuẫn không.
**Grammar & collocations:** `faithfulness-check result` — result; `flag an unsupported claim` — báo.
**Examples:** `The faithfulness check flagged a conclusion that the retrieved contract never stated.` → Check báo conclusion contract không hề nêu.
**Liên kết tiếng Hàn:** `충실성 검사`.

## Review in context

A **retrieval corpus** is split into a **document chunk** with **chunk overlap**; an **embedding model** maps it into an **embedding dimension**, and a **nearest neighbor graph** accelerates search. A **query encoder** and **passage encoder** support **dense retrieval**, while **sparse retrieval** catches exact terms. A **hybrid ranker** may use a **cross encoder**; **retrieval recall** measures what was found, and **retrieval precision** measures what was useful. **Context packing** fills a **context budget**. **Retrieval poisoning** threatens evidence, so **source grounding**, **answer attribution**, and a **faithfulness check** keep generated claims tied to trustworthy passages.

**Bản dịch tiếng Việt:** **Retrieval corpus** được chia thành **document chunk** có **chunk overlap**; **embedding model** map chúng vào **embedding dimension**, còn **nearest neighbor graph** tăng tốc search. **Query encoder** và **passage encoder** hỗ trợ **dense retrieval**, trong khi **sparse retrieval** bắt term exact. **Hybrid ranker** có thể dùng **cross encoder**; **retrieval recall** đo phần tìm được, còn **retrieval precision** đo phần hữu ích. **Context packing** lấp **context budget**. **Retrieval poisoning** đe dọa evidence, nên **source grounding**, **answer attribution** và **faithfulness check** giữ claim gắn với passage đáng tin.
