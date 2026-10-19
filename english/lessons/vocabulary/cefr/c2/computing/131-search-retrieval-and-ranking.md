# C2 Vocabulary — Search retrieval and ranking

This lesson follows a search request from text analysis and indexing through candidate retrieval, ranking, correction, and recall.

Flow: **inverted index → term frequency → document frequency → posting list → skip pointer → token analyzer → stemming rule → stopword list → relevance score → query expansion → synonym map → spelling correction → fuzzy match → phrase query → proximity window → reranking stage → lexical retrieval → semantic retrieval → reciprocal rank fusion → field boost**.

## 1. inverted index /ɪnˈvɜːrtɪd ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** an index mapping terms to the documents or positions in which they occur.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** index map term tới document hoặc vị trí chứa term.
**Grammar & collocations:** `inverted-index segment` — segment; `look up matching documents` — tra.
**Examples:** `The inverted index found candidate documents without scanning the entire corpus.` → Index tìm document ứng viên mà không scan toàn corpus.
**Liên kết tiếng Hàn:** `역색인`.

## 2. term frequency /tɜːrm ˈfriːkwənsi/
**Part of speech:** noun
**Core meaning (English):** the number or normalized count of times a term occurs in a document or field.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lần hoặc count chuẩn hóa term xuất hiện trong document/field.
**Grammar & collocations:** `term-frequency weight` — trọng số; `count repeated mentions` — đếm.
**Examples:** `Term frequency increased the score of a document that discussed the requested topic repeatedly.` → Frequency tăng score document nhắc topic nhiều.
**Liên kết tiếng Hàn:** `항 빈도`.

## 3. document frequency /ˈdɒkjəmənt ˈfriːkwənsi/
**Part of speech:** noun
**Core meaning (English):** the number of documents containing a term, used to estimate how informative it is.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số document chứa term để ước tính term có thông tin đến đâu.
**Grammar & collocations:** `document-frequency statistic` — statistic; `downweight a common term` — giảm trọng số.
**Examples:** `Document frequency made a rare technical term more informative than a common connector word.` → Frequency khiến term kỹ thuật hiếm informative hơn.
**Liên kết tiếng Hàn:** `문서 빈도`.

## 4. posting list /ˈpoʊstɪŋ lɪst/
**Part of speech:** noun
**Core meaning (English):** the ordered list of documents, positions, or payloads associated with one indexed term.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách có thứ tự document, position hoặc payload của term.
**Grammar & collocations:** `posting-list intersection` — giao; `iterate matching IDs` — duyệt.
**Examples:** `The engine intersected two posting lists to find documents containing both terms.` → Engine giao hai list để tìm document chứa cả hai term.
**Liên kết tiếng Hàn:** `포스팅 리스트`.

## 5. skip pointer /skɪp ˈpɔɪntər/
**Part of speech:** noun
**Core meaning (English):** an auxiliary reference that lets an index jump over postings that cannot match a query.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reference phụ giúp index nhảy qua posting không match.
**Grammar & collocations:** `skip-pointer hop` — bước nhảy; `advance past nonmatching IDs` — vượt.
**Examples:** `Skip pointers accelerated the intersection of a short list with a very long list.` → Pointer tăng tốc giao list ngắn và dài.
**Liên kết tiếng Hàn:** `스킵 포인터`.

## 6. token analyzer /ˈtoʊkən ˈænəlaɪzər/
**Part of speech:** noun
**Core meaning (English):** the component that turns text into normalized searchable tokens.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component biến text thành token chuẩn để search.
**Grammar & collocations:** `token-analyzer pipeline` — pipeline; `normalize punctuation` — chuẩn hóa.
**Examples:** `The token analyzer split the product name and normalized its accented characters.` → Analyzer tách tên và chuẩn hóa ký tự.
**Liên kết tiếng Hàn:** `토큰 분석기`.

## 7. stemming rule /ˈstemɪŋ ruːl/
**Part of speech:** noun
**Core meaning (English):** a rule reducing related word forms to a shared approximate stem for matching.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule rút các dạng từ liên quan về stem chung để match.
**Grammar & collocations:** `stemming-rule exception` — ngoại lệ; `match plural and singular forms` — match.
**Examples:** `The stemming rule matched “connect,” “connected,” and “connecting” in one search.` → Rule match ba dạng connect.
**Liên kết tiếng Hàn:** `어간 추출 규칙`.

## 8. stopword list /ˈstɒpwɜːrd lɪst/
**Part of speech:** noun
**Core meaning (English):** a configured set of very common words omitted or downweighted during indexing and search.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập từ rất phổ biến bị bỏ hoặc giảm trọng số khi index/search.
**Grammar & collocations:** `stopword-list version` — version; `retain a meaningful function word` — giữ.
**Examples:** `The stopword list omitted common articles but retained a domain-specific short term.` → List bỏ mạo từ nhưng giữ term ngành.
**Liên kết tiếng Hàn:** `불용어 목록`.

## 9. relevance score /ˈreləvəns skɔːr/
**Part of speech:** noun
**Core meaning (English):** a value estimating how well a document satisfies a query's terms, structure, and intent.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value ước tính document đáp ứng term, structure và intent query.
**Grammar & collocations:** `relevance-score feature` — feature; `rank a matching document` — xếp hạng.
**Examples:** `The relevance score placed the troubleshooting guide above a page that merely mentioned the product.` → Score xếp guide cao hơn page chỉ nhắc product.
**Liên kết tiếng Hàn:** `관련성 점수`.

## 10. query expansion /ˈkwɪəri ɪkˈspænʃən/
**Part of speech:** noun
**Core meaning (English):** adding related terms, spellings, or concepts to improve the set of retrieved results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm term, spelling hoặc concept liên quan để tăng result tìm được.
**Grammar & collocations:** `query-expansion rule` — rule; `add a recognized synonym` — thêm.
**Examples:** `Query expansion added the product's former name to the user's short request.` → Expansion thêm tên cũ của product.
**Liên kết tiếng Hàn:** `쿼리 확장`.

## 11. synonym map /ˈsɪnənɪm mæp/
**Part of speech:** noun
**Core meaning (English):** a maintained mapping between equivalent or closely related terms used during analysis or query rewriting.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** map duy trì quan hệ giữa term tương đương/gần nghĩa để rewrite query.
**Grammar & collocations:** `synonym-map entry` — entry; `rewrite a user phrase` — viết lại.
**Examples:** `The synonym map treated “laptop” and “notebook computer” as related search terms.` → Map coi hai phrase liên quan.
**Liên kết tiếng Hàn:** `동의어 맵`.

## 12. spelling correction /ˈspelɪŋ kəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** suggesting or applying a likely correction to a misspelled search term.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gợi ý hoặc áp dụng sửa spelling có khả năng đúng.
**Grammar & collocations:** `spelling-correction candidate` — ứng viên; `suggest the intended term` — gợi ý.
**Examples:** `Spelling correction changed “reciept” to “receipt” before retrieval began.` → Correction đổi spelling trước khi tìm.
**Liên kết tiếng Hàn:** `철자 교정`.

## 13. fuzzy match /ˈfʌzi mætʃ/
**Part of speech:** noun
**Core meaning (English):** a match that tolerates limited differences in spelling, characters, or token order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** match chịu khác biệt nhỏ về spelling, ký tự hoặc thứ tự token.
**Grammar & collocations:** `fuzzy-match threshold` — ngưỡng; `find a near spelling` — tìm.
**Examples:** `The fuzzy match found the supplier despite one transposed character in its name.` → Fuzzy tìm supplier dù hai ký tự đảo.
**Liên kết tiếng Hàn:** `퍼지 매치`.

## 14. phrase query /freɪz ˈkwɪəri/
**Part of speech:** noun
**Core meaning (English):** a query requiring terms to occur together in a specified order or close sequence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** query yêu cầu term đi cùng đúng thứ tự hoặc gần nhau.
**Grammar & collocations:** `phrase-query parser` — parser; `match an exact expression` — match.
**Examples:** `The phrase query matched “data retention policy” but not pages with the words scattered apart.` → Phrase query chỉ match cụm liền.
**Liên kết tiếng Hàn:** `구문 쿼리`.

## 15. proximity window /prɒkˈsɪməti ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the maximum token distance allowed for terms to count as contextually near each other.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách token tối đa để term được coi là gần nhau.
**Grammar & collocations:** `proximity-window size` — kích thước; `require terms within five words` — yêu cầu.
**Examples:** `The proximity window favored documents where the two legal terms appeared in one sentence.` → Window ưu tiên term cùng câu.
**Liên kết tiếng Hàn:** `근접성 창`.

## 16. reranking stage /ˌriːˈræŋkɪŋ steɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a later ranking step that applies richer features to a smaller candidate set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước xếp hạng sau dùng feature phong phú trên tập ứng viên nhỏ.
**Grammar & collocations:** `reranking-stage latency` — độ trễ; `reorder the top candidates` — sắp lại.
**Examples:** `The reranking stage used freshness and authority after lexical retrieval produced one hundred candidates.` → Stage dùng freshness/authority sau retrieval.
**Liên kết tiếng Hàn:** `재순위 단계`.

## 17. lexical retrieval /ˈleksɪkəl rɪˈtriːvəl/
**Part of speech:** noun
**Core meaning (English):** finding documents through exact or normalized word and token overlap.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm document qua overlap word/token exact hoặc chuẩn hóa.
**Grammar & collocations:** `lexical-retrieval recall` — recall; `match a rare term` — match.
**Examples:** `Lexical retrieval found the exact policy title even though the query was short.` → Retrieval tìm đúng title policy.
**Liên kết tiếng Hàn:** `어휘 검색`.

## 18. semantic retrieval /sɪˈmæntɪk rɪˈtriːvəl/
**Part of speech:** noun
**Core meaning (English):** finding documents by similarity of meaning or representation even when words differ.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm document theo similarity ý nghĩa dù word khác nhau.
**Grammar & collocations:** `semantic-retrieval embedding` — embedding; `match a paraphrased request` — match.
**Examples:** `Semantic retrieval found a guide about refunds for a query that used “money back.”` → Retrieval tìm guide dù query dùng phrase khác.
**Liên kết tiếng Hàn:** `의미 검색`.

## 19. reciprocal rank fusion /rɪˈsɪprəkəl ræŋk ˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** combining rankings from different retrieval methods by rewarding documents that appear high in several lists.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp ranking bằng thưởng document đứng cao trong nhiều list.
**Grammar & collocations:** `reciprocal-rank-fusion score` — score; `blend lexical and semantic lists` — trộn.
**Examples:** `Reciprocal rank fusion combined exact-title matches with semantically similar guides.` → Fusion gộp match exact và guide semantic.
**Liên kết tiếng Hàn:** `상호 순위 융합`.

## 20. field boost /fiːld buːst/
**Part of speech:** noun
**Core meaning (English):** extra ranking weight given when a query term matches a more valuable field.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trọng số thêm khi term match field có giá trị hơn.
**Grammar & collocations:** `field-boost factor` — hệ số; `favor a title match` — ưu tiên.
**Examples:** `The field boost favored a match in the document title over the same word in a footer.` → Boost ưu tiên title hơn footer.
**Liên kết tiếng Hàn:** `필드 부스트`.

## Review in context

An **inverted index** stores **term frequency**, **document frequency**, and a **posting list**; a **skip pointer** speeds traversal. A **token analyzer**, **stemming rule**, and **stopword list** prepare text, while a **relevance score** ranks it. **Query expansion**, a **synonym map**, and **spelling correction** improve recall; **fuzzy match**, **phrase query**, and **proximity window** refine intent. A **reranking stage** follows **lexical retrieval** or **semantic retrieval**; **reciprocal rank fusion** combines lists, and a **field boost** favors important matches.

**Bản dịch tiếng Việt:** **Inverted index** lưu **term frequency**, **document frequency** và **posting list**; **skip pointer** tăng tốc duyệt. **Token analyzer**, **stemming rule** và **stopword list** chuẩn bị text, còn **relevance score** xếp hạng. **Query expansion**, **synonym map** và **spelling correction** tăng recall; **fuzzy match**, **phrase query** và **proximity window** tinh chỉnh intent. **Reranking stage** theo sau **lexical retrieval** hoặc **semantic retrieval**; **reciprocal rank fusion** gộp list, còn **field boost** ưu tiên match quan trọng.
