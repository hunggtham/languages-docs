# C2 Vocabulary — Vector search and approximate nearest neighbors

This lesson follows semantic retrieval from embedding geometry through index construction, filtering, reranking, and distributed search cost.

Flow: **vector index → embedding space → nearest-neighbor search → exact nearest neighbor → approximate nearest-neighbor → HNSW graph → navigable small world → product quantization → inverted file index → residual vector → codebook → recall–latency trade-off → distance metric → cosine similarity → top-k retrieval → reranking → filter pushdown → hybrid retrieval → index build time → shard fan-out**.

## 1. vector index /ˈvɛktər ˈɪndɛks/
**Part of speech:** noun
**Core meaning (English):** a data structure optimized for retrieving records by the numerical vectors that represent their content.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** index lưu vector để tìm các record có ý nghĩa gần nhau.
**Grammar & collocations:** `vector-index build` — build; `query a vector index` — truy vấn.
**Examples:** `The vector index returned related documents without matching their exact wording.` → Vector index tìm tài liệu liên quan dù không cùng từ.
**Liên kết tiếng Hàn:** `벡터 인덱스`.

## 2. embedding space /ɛmˈbɛdɪŋ speɪs/
**Part of speech:** noun
**Core meaning (English):** the geometric space in which learned vectors encode semantic or structural relationships.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không gian hình học nơi vector biểu diễn quan hệ ngữ nghĩa.
**Grammar & collocations:** `embedding-space geometry` — geometry; `project an item into the space` — chiếu.
**Examples:** `In the embedding space, questions about invoices clustered near billing policies.` → Câu hỏi hóa đơn nằm gần policy billing.
**Liên kết tiếng Hàn:** `임베딩 공간`.

## 3. nearest-neighbor search /ˈnɪrəst ˈneɪbər sɝtʃ/
**Part of speech:** noun
**Core meaning (English):** finding stored vectors that are closest to a query vector under a selected distance measure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm vector gần query nhất theo metric.
**Grammar & collocations:** `nearest-neighbor-search query` — query; `retrieve similar vectors` — lấy.
**Examples:** `Nearest-neighbor search located prior incidents with similar failure descriptions.` → Search tìm incident có mô tả lỗi tương tự.
**Liên kết tiếng Hàn:** `최근접 이웃 검색`.

## 4. exact nearest neighbor /ɪɡˈzækt ˈnɪrəst ˈneɪbər/
**Part of speech:** noun
**Core meaning (English):** the true closest vector found by comparing the query with every eligible stored vector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả gần nhất thật sự sau khi quét toàn bộ candidate.
**Grammar & collocations:** `exact-nearest-neighbor baseline` — baseline; `exhaustively compare candidates` — so sánh.
**Examples:** `The exact nearest neighbor was used to measure the approximation error of the production index.` → Exact NN làm baseline đo lỗi.
**Liên kết tiếng Hàn:** `정확한 최근접 이웃`.

## 5. approximate nearest-neighbor /əˈprɑksəmət ˈnɪrəst ˈneɪbər/
**Part of speech:** noun
**Core meaning (English):** a search method that returns very close vectors without guaranteeing the mathematically closest one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm gần đúng để đổi một ít độ chính xác lấy tốc độ.
**Grammar & collocations:** `approximate-nearest-neighbor index` — index; `tune search effort` — tinh chỉnh.
**Examples:** `Approximate nearest-neighbor search met the latency target at a small recall cost.` → ANN đạt latency với cost recall nhỏ.
**Liên kết tiếng Hàn:** `근사 최근접 이웃`.

## 6. HNSW graph /ˌeɪtʃ ɛn ɛs ˈdʌbəljuː ɡræf/
**Part of speech:** noun
**Core meaning (English):** a hierarchical proximity graph used to navigate quickly toward vectors near a query.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph nhiều tầng giúp đi nhanh tới vùng vector gần query.
**Grammar & collocations:** `HNSW-graph layer` — layer; `traverse neighbor links` — duyệt.
**Examples:** `The HNSW graph increased recall when its search beam was widened.` → Graph HNSW tăng recall khi mở rộng beam.
**Liên kết tiếng Hàn:** `HNSW 그래프`.

## 7. navigable small world /ˈnævɪɡəbəl smɔl wɝld/
**Part of speech:** noun
**Core meaning (English):** a graph structure with mostly local links plus shortcuts that make greedy navigation efficient.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph có hàng xóm gần và shortcut xa để đi nhanh.
**Grammar & collocations:** `navigable-small-world property` — property; `follow a long-range shortcut` — đi theo.
**Examples:** `The navigable small world reduced the number of distance calculations per query.` → Cấu trúc giảm số lần tính distance.
**Liên kết tiếng Hàn:** `탐색 가능한 소세계`.

## 8. product quantization /ˈprɑdəkt ˌkwɑntəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** compressing vectors by quantizing separate subvectors and representing them with compact code combinations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia vector thành đoạn rồi mã hóa bằng code ngắn.
**Grammar & collocations:** `product-quantization codebook` — codebook; `compress a vector` — nén.
**Examples:** `Product quantization reduced memory use enough to keep the index on one machine.` → PQ giảm memory để index nằm trên một máy.
**Liên kết tiếng Hàn:** `곱 양자화`.

## 9. inverted file index /ɪnˈvɝtɪd faɪl ˈɪndɛks/
**Part of speech:** noun
**Core meaning (English):** an index that assigns vectors to coarse regions and searches only selected posting lists.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia vector vào vùng coarse rồi chỉ search posting list liên quan.
**Grammar & collocations:** `inverted-file-index probe` — probe; `search selected partitions` — tìm.
**Examples:** `The inverted file index limited distance calculations to the nearest coarse centroids.` → IVF giới hạn tính distance ở centroid gần.
**Liên kết tiếng Hàn:** `역파일 인덱스`.

## 10. residual vector /rɪˈzɪdʒuəl ˈvɛktər/
**Part of speech:** noun
**Core meaning (English):** the difference between an original vector and the coarse centroid or approximation used to represent it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần sai khác còn lại sau khi trừ centroid.
**Grammar & collocations:** `residual-vector encoding` — encoding; `quantize the residual` — lượng tử hóa.
**Examples:** `The residual vector preserved local detail after the coarse assignment was made.` → Residual giữ chi tiết cục bộ sau coarse assignment.
**Liên kết tiếng Hàn:** `잔차 벡터`.

## 11. codebook /ˈkoʊdˌbʊk/
**Part of speech:** noun
**Core meaning (English):** a learned collection of representative vectors used to encode or approximate many input vectors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập vector đại diện dùng để mã hóa vector khác.
**Grammar & collocations:** `codebook training` — training; `assign a vector to a centroid` — gán.
**Examples:** `The codebook was retrained after the new customer corpus shifted the vector distribution.` → Codebook được train lại khi corpus đổi phân bố.
**Liên kết tiếng Hàn:** `코드북`.

## 12. recall–latency trade-off /rɪˈkɔl ˈleɪtənsi treɪd ɔf/
**Part of speech:** noun
**Core meaning (English):** the balance between retrieving more true neighbors and returning results within a shorter time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** recall cao thường đổi bằng latency cao hơn.
**Grammar & collocations:** `recall–latency-trade-off curve` — curve; `tune search breadth` — chỉnh.
**Examples:** `The recall–latency trade-off favored a narrower search during peak traffic.` → Peak traffic ưu tiên search hẹp hơn.
**Liên kết tiếng Hàn:** `재현율-지연시간 절충`.

## 13. distance metric /ˈdɪstəns ˈmɛtrɪk/
**Part of speech:** noun
**Core meaning (English):** a mathematical rule for quantifying how far apart two vectors are.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công thức đo độ khác nhau giữa vector.
**Grammar & collocations:** `distance-metric choice` — choice; `compute a vector distance` — tính.
**Examples:** `The distance metric was changed from Euclidean distance to an angular measure.` → Metric đổi từ Euclidean sang góc.
**Liên kết tiếng Hàn:** `거리 척도`.

## 14. cosine similarity /ˈkoʊsaɪn ˌsɪməˈlærəti/
**Part of speech:** noun
**Core meaning (English):** a similarity measure based on the cosine of the angle between two vectors, often ignoring their magnitudes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo hướng vector, ít phụ thuộc độ lớn.
**Grammar & collocations:** `cosine-similarity score` — score; `normalize an embedding` — chuẩn hóa.
**Examples:** `Cosine similarity ranked the policy and question highly despite different text lengths.` → Cosine xếp policy và question cao dù độ dài khác.
**Liên kết tiếng Hàn:** `코사인 유사도`.

## 15. top-k retrieval /tɑp keɪ rɪˈtriːvəl/
**Part of speech:** noun
**Core meaning (English):** returning the k highest-scoring or closest items for a query.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lấy đúng k kết quả gần/tốt nhất.
**Grammar & collocations:** `top-k-retrieval budget` — budget; `return the top ten candidates` — trả.
**Examples:** `Top-k retrieval returned twenty passages for the reranker to inspect.` → Top-k trả 20 passage cho reranker.
**Liên kết tiếng Hàn:** `상위 k 검색`.

## 16. reranking /ˌriːˈræŋkɪŋ/
**Part of speech:** noun
**Core meaning (English):** a second-stage ordering of retrieved candidates with a more expensive or context-aware scoring model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xếp hạng lại candidate bằng model sâu hơn.
**Grammar & collocations:** `reranking model` — model; `rerank retrieved passages` — xếp lại.
**Examples:** `Reranking removed superficially similar passages that lacked the requested legal exception.` → Reranking loại passage giống bề mặt nhưng thiếu ngoại lệ.
**Liên kết tiếng Hàn:** `재순위화`.

## 17. filter pushdown /ˈfɪltər ˈpʊʃdaʊn/
**Part of speech:** noun
**Core meaning (English):** applying metadata or attribute filters as early as possible to reduce the candidate set before expensive vector scoring.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lọc metadata trước khi tính vector đắt tiền.
**Grammar & collocations:** `filter-pushdown optimization` — optimization; `prune candidates early` — cắt.
**Examples:** `Filter pushdown restricted retrieval to documents from the correct jurisdiction.` → Pushdown giới hạn tài liệu đúng jurisdiction.
**Liên kết tiếng Hàn:** `필터 푸시다운`.

## 18. hybrid retrieval /ˈhaɪbrɪd rɪˈtriːvəl/
**Part of speech:** noun
**Core meaning (English):** combining lexical matching with vector similarity to retrieve candidates using both exact terms and semantic relatedness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết hợp keyword và vector để vừa đúng từ vừa đúng nghĩa.
**Grammar & collocations:** `hybrid-retrieval score` — score; `blend lexical and semantic ranks` — trộn.
**Examples:** `Hybrid retrieval found the exact regulation number and related explanatory guidance.` → Hybrid tìm đúng số regulation và guidance liên quan.
**Liên kết tiếng Hàn:** `하이브리드 검색`.

## 19. index build time /ˈɪndɛks bɪld taɪm/
**Part of speech:** noun
**Core meaning (English):** the elapsed time required to construct or refresh a vector index from source embeddings.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian tạo hoặc refresh index.
**Grammar & collocations:** `index-build-time estimate` — estimate; `rebuild an index incrementally` — rebuild.
**Examples:** `Index build time doubled after the embedding dimension was increased.` → Build time tăng gấp đôi khi dimension tăng.
**Liên kết tiếng Hàn:** `인덱스 구축 시간`.

## 20. shard fan-out /ʃɑrd fæn aʊt/
**Part of speech:** noun
**Core meaning (English):** the number of distributed index shards contacted for one query before their results are merged.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một query phải hỏi bao nhiêu shard rồi merge.
**Grammar & collocations:** `shard-fan-out limit` — limit; `merge shard candidates` — gộp.
**Examples:** `Shard fan-out increased tail latency when the collection was spread across many regions.` → Fan-out tăng tail latency khi collection trải nhiều region.
**Liên kết tiếng Hàn:** `샤드 팬아웃`.

## Review in context

A **vector index** stores items in an **embedding space** for **nearest-neighbor search**. An **exact nearest neighbor** is expensive, so an **approximate nearest-neighbor** index may use an **HNSW graph**, a **navigable small world**, **product quantization**, or an **inverted file index** with a **residual vector** and **codebook**. Tuning follows a **recall–latency trade-off** and depends on a **distance metric** such as **cosine similarity**. **Top-k retrieval** can feed **reranking** after **filter pushdown**; **hybrid retrieval** combines lexical and vector signals. Operations must track **index build time** and distributed **shard fan-out**.

**Bản dịch tiếng Việt:** **Vector index** lưu item trong **embedding space** để **nearest-neighbor search**. **Exact nearest neighbor** tốn kém, nên index **approximate nearest-neighbor** có thể dùng **HNSW graph**, **navigable small world**, **product quantization** hoặc **inverted file index** với **residual vector** và **codebook**. Tuning theo **recall–latency trade-off** và phụ thuộc **distance metric** như **cosine similarity**. **Top-k retrieval** có thể đưa qua **reranking** sau **filter pushdown**; **hybrid retrieval** trộn tín hiệu lexical và vector. Vận hành phải theo dõi **index build time** và **shard fan-out**.
