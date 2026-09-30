# C2 Vocabulary — Time-series storage and query engines

This lesson follows a metric sample from ingestion through indexing, compression, retention, compaction, and query execution.

Flow: **cardinality explosion → downsampling policy → compaction window → out-of-order sample → late-arriving point → retention tier → query fan-out → tag dictionary → inverted label index → delta-of-delta encoding → Gorilla compression → chunk head → series tombstone → exemplar linkage → downsample aggregate → rate normalization → staleness marker → query lookback → scrape interval → remote write backlog**.

## 1. cardinality explosion /ˌkɑrdəˈnæləti ɪkˈsploʊʒən/
**Part of speech:** noun
**Core meaning (English):** rapid growth in the number of distinct time series caused by combinations of labels or dimensions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số series tăng vọt do quá nhiều label kết hợp.
**Grammar & collocations:** `cardinality-explosion alert` — alert; `bound label combinations` — giới hạn.
**Examples:** `Cardinality explosion exhausted the index after every request received a unique identifier label.` → Cardinality explosion làm cạn index.
**Liên kết tiếng Hàn:** `카디널리티 폭발`.

## 2. downsampling policy /ˈdaʊnˌsæmplɪŋ ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules for replacing high-frequency samples with lower-resolution summaries after a chosen age.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule giảm độ phân giải theo tuổi dữ liệu.
**Grammar & collocations:** `downsampling-policy tier` — tier; `preserve extrema and quantiles` — giữ.
**Examples:** `The downsampling policy retained hourly percentiles after raw samples exceeded thirty days.` → Policy giữ percentile theo giờ sau 30 ngày.
**Liên kết tiếng Hàn:** `다운샘플링 정책`.

## 3. compaction window /kəmˈpækʃən ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a time range or scheduling interval in which adjacent storage blocks are merged and rewritten.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian gộp các block liền nhau.
**Grammar & collocations:** `compaction-window scheduler` — scheduler; `merge overlapping chunks` — gộp.
**Examples:** `A short compaction window reduced read amplification but increased background write traffic.` → Window ngắn giảm read amplification nhưng tăng write nền.
**Liên kết tiếng Hàn:** `압축 창`.

## 4. out-of-order sample /aʊt əv ˈɔrdər ˈsæmpəl/
**Part of speech:** noun
**Core meaning (English):** a measurement whose timestamp is earlier than the newest sample already stored for the same series.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sample đến với timestamp cũ hơn sample đã lưu.
**Grammar & collocations:** `out-of-order-sample buffer` — buffer; `reconcile late timestamps` — xử lý.
**Examples:** `The out-of-order sample stayed in a short buffer until the watermark advanced.` → Sample out-of-order giữ trong buffer tới watermark.
**Liên kết tiếng Hàn:** `순서가 뒤바뀐 샘플`.

## 5. late-arriving point /leɪt əˈraɪvɪŋ pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a data point that arrives after the system has already compacted or queried the interval containing its timestamp.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm dữ liệu đến muộn sau khi interval đã xử lý.
**Grammar & collocations:** `late-arriving-point path` — path; `patch a historical bucket` — vá.
**Examples:** `A late-arriving point forced the engine to reopen a sealed hourly bucket.` → Point đến muộn buộc mở bucket đã seal.
**Liên kết tiếng Hàn:** `지연 도착 포인트`.

## 6. retention tier /rɪˈtɛnʃən tɪər/
**Part of speech:** noun
**Core meaning (English):** a storage class with a defined data age, resolution, cost, and access policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tầng lưu trữ theo tuổi, độ phân giải và cost.
**Grammar & collocations:** `retention-tier migration` — migration; `move cold metrics` — chuyển.
**Examples:** `The retention tier moved raw traces to cheap storage while keeping aggregates hot.` → Tier chuyển raw traces sang storage rẻ.
**Liên kết tiếng Hàn:** `보존 계층`.

## 7. query fan-out /ˈkwɪri fæn aʊt/
**Part of speech:** noun
**Core meaning (English):** distribution of one logical query to many shards, partitions, or storage nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một query tỏa ra nhiều shard/node.
**Grammar & collocations:** `query-fan-out limit` — limit; `merge shard responses` — gộp.
**Examples:** `Query fan-out grew with label diversity and made tail latency unpredictable.` → Fan-out tăng làm tail latency khó đoán.
**Liên kết tiếng Hàn:** `쿼리 팬아웃`.

## 8. tag dictionary /tæɡ ˈdɪkʃəˌnɛri/
**Part of speech:** noun
**Core meaning (English):** a shared mapping from label names or values to compact internal identifiers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng map label/value thành ID nhỏ.
**Grammar & collocations:** `tag-dictionary cache` — cache; `intern a label value` — intern.
**Examples:** `The tag dictionary compressed repeated service and region labels.` → Dictionary nén label service/region lặp.
**Liên kết tiếng Hàn:** `태그 사전`.

## 9. inverted label index /ɪnˈvɝtɪd ˈleɪbəl ˈɪndɛks/
**Part of speech:** noun
**Core meaning (English):** an index mapping a label value to the series identifiers that contain it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** từ label/value tìm ngược ra các series.
**Grammar & collocations:** `inverted-label-index scan` — scan; `intersect postings lists` — giao.
**Examples:** `The inverted label index narrowed the candidate series before reading time chunks.` → Index ngược thu hẹp series trước khi đọc chunk.
**Liên kết tiếng Hàn:** `역 라벨 인덱스`.

## 10. delta-of-delta encoding /ˈdɛltə əv ˈdɛltə ɛnˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** compression that stores changes between successive timestamp differences rather than full timestamps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nén chênh lệch của chênh lệch timestamp.
**Grammar & collocations:** `delta-of-delta-encoding scheme` — scheme; `compress regular intervals` — nén.
**Examples:** `Delta-of-delta encoding made evenly sampled metrics extremely compact.` → Encoding nén metric lấy mẫu đều rất tốt.
**Liên kết tiếng Hàn:** `델타-델타 인코딩`.

## 11. Gorilla compression /ɡəˈrɪlə kəmˈprɛʃən/
**Part of speech:** noun
**Core meaning (English):** a time-series compression technique that exploits repeated floating-point bit patterns and small timestamp gaps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nén bit pattern float lặp và gap timestamp nhỏ.
**Grammar & collocations:** `Gorilla-compression block` — block; `encode a floating-point stream` — mã hóa.
**Examples:** `Gorilla compression reduced memory use for gauges with slowly changing values.` → Gorilla giảm memory cho gauge đổi chậm.
**Liên kết tiếng Hàn:** `고릴라 압축`.

## 12. chunk head /tʃʌŋk hɛd/
**Part of speech:** noun
**Core meaning (English):** the active or newest portion of a time-series chunk that still accepts incoming samples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần đầu chunk còn ghi sample mới.
**Grammar & collocations:** `chunk-head buffer` — buffer; `seal a full chunk` — đóng.
**Examples:** `The chunk head accepted late points until the ordering watermark passed its boundary.` → Chunk head nhận point muộn tới watermark.
**Liên kết tiếng Hàn:** `청크 헤드`.

## 13. series tombstone /ˈsɪriz ˈtuːmstoʊn/
**Part of speech:** noun
**Core meaning (English):** a deletion marker indicating that a time series or label set should no longer be returned.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker xóa một series/label set.
**Grammar & collocations:** `series-tombstone compaction` — compaction; `hide deleted series` — ẩn.
**Examples:** `The series tombstone prevented an old shard from returning retired host metrics.` → Tombstone ngăn shard cũ trả metric host đã nghỉ.
**Liên kết tiếng Hàn:** `시계열 툼스톤`.

## 14. exemplar linkage /ɪɡˈzæmpələr ˈlɪŋkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a reference connecting a metric sample to a trace, profile, or high-cardinality diagnostic example.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** link metric sample tới trace/profile cụ thể.
**Grammar & collocations:** `exemplar-linkage field` — field; `jump from a metric to a trace` — nhảy.
**Examples:** `Exemplar linkage took the operator from a latency spike to the slow trace that caused it.` → Link exemplar đưa operator tới trace chậm.
**Liên kết tiếng Hàn:** `엑셈플러 연결`.

## 15. downsample aggregate /ˈdaʊnˌsæmpəl ˈæɡrəɡət/
**Part of speech:** noun
**Core meaning (English):** a summarized value such as a mean, maximum, quantile, or count representing a lower-resolution interval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị tổng hợp đại diện interval thưa hơn.
**Grammar & collocations:** `downsample-aggregate schema` — schema; `compute a percentile rollup` — tính.
**Examples:** `The downsample aggregate preserved the ninety-ninth percentile needed for capacity review.` → Aggregate giữ percentile 99 cần cho capacity.
**Liên kết tiếng Hàn:** `다운샘플 집계`.

## 16. rate normalization /reɪt ˌnɔrmələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** converting counter changes into a comparable rate despite different scrape intervals or gaps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn hóa counter thành rate dù interval khác.
**Grammar & collocations:** `rate-normalization function` — function; `adjust for elapsed time` — điều chỉnh.
**Examples:** `Rate normalization avoided a false traffic drop when one collector missed a scrape.` → Normalization tránh giảm traffic giả.
**Liên kết tiếng Hàn:** `비율 정규화`.

## 17. staleness marker /ˈsteɪlnəs ˈmɑrkər/
**Part of speech:** noun
**Core meaning (English):** a special value indicating that a previously observed series is no longer producing current samples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị báo series cũ không còn sample mới.
**Grammar & collocations:** `staleness-marker injection` — injection; `expire a vanished series` — hết hạn.
**Examples:** `The staleness marker stopped a dashboard from displaying a dead service as healthy.` → Marker ngăn dashboard hiện service chết là healthy.
**Liên kết tiếng Hàn:** `신선도 마커`.

## 18. query lookback /ˈkwɪri ˈlʊkˌbæk/
**Part of speech:** noun
**Core meaning (English):** the historical interval a query examines to find samples, rates, or changes relevant to its evaluation time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng lịch sử query nhìn ngược.
**Grammar & collocations:** `query-lookback duration` — duration; `scan prior samples` — quét.
**Examples:** `A longer query lookback made rate calculations robust to occasional scrape gaps.` → Lookback dài giúp rate chịu gap.
**Liên kết tiếng Hàn:** `쿼리 룩백`.

## 19. scrape interval /skreɪp ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** the planned time between successive measurements collected from a monitored target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách giữa hai lần scrape target.
**Grammar & collocations:** `scrape-interval jitter` — jitter; `collect at fifteen-second intervals` — thu thập.
**Examples:** `The scrape interval doubled during overload, changing the expected rate resolution.` → Interval scrape tăng gấp đôi khi quá tải.
**Liên kết tiếng Hàn:** `스크레이프 간격`.

## 20. remote write backlog /rɪˈmoʊt raɪt ˈbækˌlɔɡ/
**Part of speech:** noun
**Core meaning (English):** accumulated samples waiting to be transmitted to a remote time-series store.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sample tồn đọng chờ gửi sang storage từ xa.
**Grammar & collocations:** `remote-write-backlog alert` — alert; `drain queued samples` — xả.
**Examples:** `The remote write backlog grew when the regional endpoint enforced a bandwidth limit.` → Backlog remote write tăng khi endpoint giới hạn bandwidth.
**Liên kết tiếng Hàn:** `원격 쓰기 백로그`.

## Review in context

**Cardinality explosion** drives a **downsampling policy** and **compaction window**. An **out-of-order sample** or **late-arriving point** may remain in a **retention tier**, increasing **query fan-out**. A **tag dictionary** and **inverted label index** accelerate selection, while **delta-of-delta encoding** and **Gorilla compression** shrink the **chunk head**. A **series tombstone** removes retired data; **exemplar linkage** connects metrics to traces. A **downsample aggregate**, **rate normalization**, **staleness marker**, **query lookback**, and **scrape interval** shape interpretation, while a **remote write backlog** reveals ingestion pressure.

**Bản dịch tiếng Việt:** **Cardinality explosion** thúc đẩy **downsampling policy** và **compaction window**. **Out-of-order sample** hoặc **late-arriving point** có thể nằm trong **retention tier**, làm tăng **query fan-out**. **Tag dictionary** và **inverted label index** tăng tốc chọn series, còn **delta-of-delta encoding** và **Gorilla compression** thu nhỏ **chunk head**. **Series tombstone** xóa data nghỉ; **exemplar linkage** nối metric với trace. **Downsample aggregate**, **rate normalization**, **staleness marker**, **query lookback** và **scrape interval** định hình diễn giải, còn **remote write backlog** cho thấy áp lực ingestion.
