# C2 Vocabulary — Document ingestion and content processing

This lesson follows a document from upload and parsing through extraction, normalization, enrichment, deduplication, and durable content identity.

Flow: **document chunking → text extraction → layout parser → OCR confidence → page segmentation → table extraction → citation span → content hash → deduplication fingerprint → language detection → encoding sniffing → malformed document → parser fallback → extraction pipeline → enrichment stage → metadata sidecar → content-addressed blob → canonical text → document tombstone → document variant**.

## 1. document chunking /ˈdɒkjəmənt ˈtʃʌŋkɪŋ/
**Part of speech:** noun
**Core meaning (English):** dividing a document into meaningful pieces for parsing, indexing, retrieval, or parallel processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia document thành phần có nghĩa để parse, index, tìm hoặc xử lý song song.
**Grammar & collocations:** `document-chunking boundary` — boundary; `split a long report` — chia.
**Examples:** `Document chunking kept each policy section small enough for independent retrieval.` → Chunking giữ section policy đủ nhỏ.
**Liên kết tiếng Hàn:** `문서 청킹`.

## 2. text extraction /tekst ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** recovering readable characters and words from a document's underlying representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lấy lại ký tự và từ đọc được từ representation document.
**Grammar & collocations:** `text-extraction result` — result; `recover text from a PDF` — lấy.
**Examples:** `Text extraction recovered the paragraph even though the source page contained a scanned image.` → Extraction lấy paragraph từ trang scan.
**Liên kết tiếng Hàn:** `텍스트 추출`.

## 3. layout parser /ˈleɪaʊt ˈpɑːrsər/
**Part of speech:** noun
**Core meaning (English):** a parser that identifies pages, columns, headings, figures, tables, and their spatial relationships.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parser nhận diện page, column, heading, figure, table và quan hệ vị trí.
**Grammar & collocations:** `layout-parser output` — output; `preserve a two-column order` — giữ.
**Examples:** `The layout parser kept the sidebar text from being inserted into the main paragraph.` → Parser giữ text sidebar tách khỏi paragraph.
**Liên kết tiếng Hàn:** `레이아웃 파서`.

## 4. OCR confidence /ˌoʊ siː ˈɑːr ˈkɒnfɪdəns/
**Part of speech:** noun
**Core meaning (English):** a score estimating how likely an optical character recognition result is correct.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** score ước tính kết quả OCR đúng đến đâu.
**Grammar & collocations:** `OCR-confidence threshold` — ngưỡng; `route uncertain text to review` — chuyển.
**Examples:** `Low OCR confidence sent the handwritten address to a human verifier.` → Confidence thấp chuyển address viết tay cho người kiểm.
**Liên kết tiếng Hàn:** `OCR 신뢰도`.

## 5. page segmentation /peɪdʒ ˌseɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** dividing a page into regions that can be analyzed as separate text, image, table, or layout units.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia page thành vùng text, image, table hoặc layout riêng.
**Grammar & collocations:** `page-segmentation model` — model; `separate a caption from a figure` — tách.
**Examples:** `Page segmentation isolated the footnote before the main text was indexed.` → Segmentation tách footnote trước index.
**Liên kết tiếng Hàn:** `페이지 분할`.

## 6. table extraction /ˈteɪbəl ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** reconstructing rows, columns, cells, and values from a visually formatted table.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dựng lại row, column, cell và value từ table trực quan.
**Grammar & collocations:** `table-extraction schema` — schema; `preserve a merged cell` — giữ.
**Examples:** `Table extraction converted the quarterly figures into structured records for analysis.` → Extraction đổi figure quý thành record.
**Liên kết tiếng Hàn:** `표 추출`.

## 7. citation span /saɪˈteɪʃən spæn/
**Part of speech:** noun
**Core meaning (English):** the exact range of source text retained so a statement or result can be traced back to evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng text nguồn chính xác giữ để truy statement/result về evidence.
**Grammar & collocations:** `citation-span offset` — offset; `anchor a claim to a page` — neo.
**Examples:** `The citation span linked the summary sentence to three lines on page twelve.` → Span nối summary với ba dòng trang 12.
**Liên kết tiếng Hàn:** `인용 범위`.

## 8. content hash /ˈkɒntent hæʃ/
**Part of speech:** noun
**Core meaning (English):** a digest derived from document bytes or normalized content for identity and integrity checks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** digest suy ra từ byte/content chuẩn để nhận diện và kiểm integrity.
**Grammar & collocations:** `content-hash comparison` — so sánh; `detect an unchanged upload` — phát hiện.
**Examples:** `The content hash showed that the new upload was byte-for-byte identical to an existing file.` → Hash cho thấy file giống từng byte.
**Liên kết tiếng Hàn:** `콘텐츠 해시`.

## 9. deduplication fingerprint /diːˌdjuːplɪˈkeɪʃən ˈfɪŋɡərprɪnt/
**Part of speech:** noun
**Core meaning (English):** a compact identity used to recognize documents or passages that are substantially repeated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identity gọn nhận diện document/passage lặp đáng kể.
**Grammar & collocations:** `deduplication-fingerprint match` — match; `collapse repeated versions` — gộp.
**Examples:** `The deduplication fingerprint grouped translated copies of the same policy.` → Fingerprint gom bản dịch cùng policy.
**Liên kết tiếng Hàn:** `중복 제거 지문`.

## 10. language detection /ˈlæŋɡwɪdʒ dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** identifying the language or mixture of languages used in a document or segment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhận diện ngôn ngữ hoặc hỗn hợp ngôn ngữ trong document/segment.
**Grammar & collocations:** `language-detection confidence` — confidence; `route Korean text to a separate analyzer` — chuyển.
**Examples:** `Language detection selected a Vietnamese tokenizer for the translated appendix.` → Detection chọn tokenizer tiếng Việt.
**Liên kết tiếng Hàn:** `언어 감지`.

## 11. encoding sniffing /enˈkoʊdɪŋ ˈsnɪfɪŋ/
**Part of speech:** noun
**Core meaning (English):** inferring a text file's character encoding from its bytes or markers before decoding it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy ra encoding từ byte/marker trước khi decode text.
**Grammar & collocations:** `encoding-sniffing heuristic` — heuristic; `avoid mojibake` — tránh.
**Examples:** `Encoding sniffing detected UTF-16 before the importer interpreted the document.` → Sniffing phát hiện UTF-16 trước import.
**Liên kết tiếng Hàn:** `인코딩 감지`.

## 12. malformed document /mælˈfɔːrmd ˈdɒkjəmənt/
**Part of speech:** noun
**Core meaning (English):** a document whose structure, encoding, or internal references violate the expected format.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** document có structure, encoding hoặc reference nội bộ sai format.
**Grammar & collocations:** `malformed-document quarantine` — quarantine; `reject an invalid object` — từ chối.
**Examples:** `The importer quarantined the malformed document instead of crashing the extraction worker.` → Importer cách ly document lỗi.
**Liên kết tiếng Hàn:** `잘못된 문서`.

## 13. parser fallback /ˈpɑːrsər ˈfɔːlbæk/
**Part of speech:** noun
**Core meaning (English):** an alternate parsing method used when the preferred parser cannot interpret a document.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp parse thay thế khi parser chính không hiểu document.
**Grammar & collocations:** `parser-fallback chain` — chain; `switch to a simpler reader` — chuyển.
**Examples:** `Parser fallback recovered plain text after the layout engine rejected the damaged file.` → Fallback lấy plain text sau khi layout fail.
**Liên kết tiếng Hàn:** `파서 폴백`.

## 14. extraction pipeline /ɪkˈstrækʃən ˈpaɪplaɪn/
**Part of speech:** noun
**Core meaning (English):** the ordered stages that ingest, parse, normalize, enrich, validate, and publish document content.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi stage ingest, parse, normalize, enrich, validate và publish content.
**Grammar & collocations:** `extraction-pipeline stage` — stage; `retry a failed transform` — retry.
**Examples:** `The extraction pipeline retained the original file while publishing searchable text.` → Pipeline giữ file gốc và publish text.
**Liên kết tiếng Hàn:** `추출 파이프라인`.

## 15. enrichment stage /ɪnˈrɪtʃmənt steɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a processing stage that adds labels, entities, summaries, classifications, or other derived metadata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stage thêm label, entity, summary, classification hoặc metadata dẫn xuất.
**Grammar & collocations:** `enrichment-stage output` — output; `attach a topic label` — gắn.
**Examples:** `The enrichment stage added organization names and a sensitivity label to each section.` → Stage thêm organization và sensitivity.
**Liên kết tiếng Hàn:** `강화 단계`.

## 16. metadata sidecar /ˈmetədeɪtə ˈsaɪdkɑːr/
**Part of speech:** noun
**Core meaning (English):** a separate object storing metadata associated with a primary document without modifying its bytes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** object riêng lưu metadata của document mà không đổi byte gốc.
**Grammar & collocations:** `metadata-sidecar schema` — schema; `store extraction diagnostics separately` — lưu.
**Examples:** `The metadata sidecar stored OCR confidence and parser warnings beside the original scan.` → Sidecar lưu confidence và warning cạnh scan gốc.
**Liên kết tiếng Hàn:** `메타데이터 사이드카`.

## 17. content-addressed blob /ˈkɒntent əˈdrest blɒb/
**Part of speech:** noun
**Core meaning (English):** an object retrieved by a name derived from its content rather than by a mutable path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** object được lấy bằng tên suy ra từ content, không phải path mutable.
**Grammar & collocations:** `content-addressed-blob store` — store; `deduplicate identical bytes` — loại trùng.
**Examples:** `The content-addressed blob allowed several document records to share one immutable file.` → Blob cho nhiều record share file bất biến.
**Liên kết tiếng Hàn:** `콘텐츠 주소 지정 블롭`.

## 18. canonical text /kəˈnɒnɪkəl tekst/
**Part of speech:** noun
**Core meaning (English):** a normalized textual representation chosen as the authoritative input for indexing or comparison.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn text chuẩn được chọn làm input authoritative cho index/so sánh.
**Grammar & collocations:** `canonical-text version` — version; `normalize whitespace and punctuation` — chuẩn hóa.
**Examples:** `Canonical text removed layout artifacts before the search index was built.` → Text chuẩn bỏ artifact layout trước index.
**Liên kết tiếng Hàn:** `표준 텍스트`.

## 19. document tombstone /ˈdɒkjəmənt ˈtuːmstoʊn/
**Part of speech:** noun
**Core meaning (English):** a durable marker stating that a document was deleted, withdrawn, or superseded.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker bền cho biết document bị xóa, rút hoặc thay thế.
**Grammar & collocations:** `document-tombstone event` — event; `hide a withdrawn version` — ẩn.
**Examples:** `The document tombstone kept search replicas from resurrecting a withdrawn policy.` → Tombstone ngăn search tái xuất policy rút.
**Liên kết tiếng Hàn:** `문서 툼스톤`.

## 20. document variant /ˈdɒkjəmənt ˈveriənt/
**Part of speech:** noun
**Core meaning (English):** a related representation of one source document, such as a translation, derivative, or revised version.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation liên quan của document như bản dịch, derivative hoặc version sửa.
**Grammar & collocations:** `document-variant lineage` — lineage; `link a translation to its source` — nối.
**Examples:** `The document variant linked the accessible HTML version to the signed PDF source.` → Variant nối HTML với PDF gốc.
**Liên kết tiếng Hàn:** `문서 변형`.

## Review in context

**Document chunking** divides content for **text extraction**; a **layout parser**, **OCR confidence**, and **page segmentation** preserve structure, while **table extraction** and a **citation span** retain evidence. A **content hash** identifies bytes, a **deduplication fingerprint** groups repeats, **language detection** chooses analysis, and **encoding sniffing** prevents decoding errors. A **malformed document** uses **parser fallback** inside an **extraction pipeline**; an **enrichment stage** adds meaning, a **metadata sidecar** stores diagnostics, a **content-addressed blob** preserves identity, **canonical text** supports indexing, a **document tombstone** records withdrawal, and a **document variant** links related forms.

**Bản dịch tiếng Việt:** **Document chunking** chia content cho **text extraction**; **layout parser**, **OCR confidence** và **page segmentation** giữ structure, còn **table extraction** và **citation span** giữ evidence. **Content hash** nhận diện byte, **deduplication fingerprint** gom bản lặp, **language detection** chọn phân tích, và **encoding sniffing** tránh lỗi decode. **Malformed document** dùng **parser fallback** trong **extraction pipeline**; **enrichment stage** thêm ý nghĩa, **metadata sidecar** lưu diagnostics, **content-addressed blob** giữ identity, **canonical text** hỗ trợ index, **document tombstone** ghi withdrawal, còn **document variant** nối các dạng liên quan.
