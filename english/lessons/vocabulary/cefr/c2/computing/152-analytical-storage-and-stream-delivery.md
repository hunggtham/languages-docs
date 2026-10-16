# C2 Vocabulary — Analytical storage and stream delivery

This lesson follows analytical data from physical layout and approximate statistics through late events, replay, and distributed stream execution.

Flow: **row store → compression codec → run length encoding → bitmap index → count-min sketch → HyperLogLog → approximate query → incremental view maintenance → change log → storage tier → cold partition → late-arriving data → watermark policy → backfill job → reprocessing window → failed-message queue → transactional sink → redelivery contract → operator state → shuffle partition**.

## 1. row store /roʊ stɔːr/
**Part of speech:** noun
**Core meaning (English):** a database layout that keeps the fields of each record together for row-oriented reads and writes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** layout database giữ các field của từng record cạnh nhau để đọc/ghi theo row.
**Grammar & collocations:** `row-store table` — table; `fetch a complete record` — lấy.
**Examples:** `The row store served point lookups faster than the scan-oriented warehouse.` → Row store phục vụ point lookup nhanh hơn warehouse scan.
**Liên kết tiếng Hàn:** `행 저장소`.

## 2. compression codec /kəmˈpreʃən ˈkoʊdek/
**Part of speech:** noun
**Core meaning (English):** an algorithm and format used to encode data in fewer bytes and decode it later.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** algorithm/format mã hóa data ít byte hơn rồi giải mã sau.
**Grammar & collocations:** `compression-codec choice` — lựa chọn; `decode a data block` — giải mã.
**Examples:** `The pipeline selected a compression codec that balanced scan speed and storage cost.` → Pipeline chọn codec cân bằng tốc độ scan và chi phí.
**Liên kết tiếng Hàn:** `압축 코덱`.

## 3. run length encoding /rʌn leŋθ enˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** compression that represents repeated adjacent values as one value and a count.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nén các value lặp liền nhau thành một value và count.
**Grammar & collocations:** `run-length-encoding block` — block; `compress repeated values` — nén.
**Examples:** `Run length encoding reduced the status column because long runs shared one value.` → Encoding giảm column status vì nhiều đoạn lặp.
**Liên kết tiếng Hàn:** `런 길이 부호화`.

## 4. bitmap index /ˈbɪtmæp ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** an index using bit vectors to represent which rows match a value or predicate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** index dùng vector bit biểu diễn row nào khớp value/predicate.
**Grammar & collocations:** `bitmap-index scan` — scan; `combine bitmaps with AND` — kết hợp.
**Examples:** `The bitmap index answered the low-cardinality status filter with a few bit operations.` → Index bitmap trả filter status bằng ít phép bit.
**Liên kết tiếng Hàn:** `비트맵 인덱스`.

## 5. count-min sketch /kaʊnt mɪn sketʃ/
**Part of speech:** noun
**Core meaning (English):** a compact probabilistic structure that estimates item frequencies using several hashed counters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc xác suất gọn ước lượng tần suất bằng nhiều counter hash.
**Grammar & collocations:** `count-min-sketch estimate` — estimate; `track heavy hitters` — theo dõi.
**Examples:** `The count-min sketch estimated popular search terms without storing every key.` → Sketch ước lượng term phổ biến không lưu mọi key.
**Liên kết tiếng Hàn:** `카운트-민 스케치`.

## 6. HyperLogLog /ˈhaɪpər lɒɡ lɒɡ/
**Part of speech:** noun
**Core meaning (English):** a probabilistic algorithm that estimates the number of distinct values with very little memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** algorithm xác suất ước lượng số value khác nhau với memory rất ít.
**Grammar & collocations:** `HyperLogLog register` — register; `estimate distinct users` — ước lượng.
**Examples:** `HyperLogLog estimated unique visitors for the dashboard at a fraction of the exact-set memory.` → HyperLogLog ước lượng visitor unique ít memory hơn exact set.
**Liên kết tiếng Hàn:** `하이퍼로그로그`.

## 7. approximate query /əˈprɒksɪmət ˈkwɪəri/
**Part of speech:** noun
**Core meaning (English):** a query that returns a bounded estimate instead of calculating an exact result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** query trả estimate có sai số giới hạn thay vì tính exact.
**Grammar & collocations:** `approximate-query error bound` — bound; `trade precision for speed` — đánh đổi.
**Examples:** `The approximate query returned a useful percentile before the full scan finished.` → Query xấp xỉ trả percentile hữu ích trước scan đầy đủ.
**Liên kết tiếng Hàn:** `근사 쿼리`.

## 8. incremental view maintenance /ˌɪŋkrəˈmentəl vjuː ˈmeɪntənəns/
**Part of speech:** noun
**Core meaning (English):** updating a materialized result from changes instead of recomputing the entire view.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cập nhật view materialized từ phần thay đổi thay vì tính lại toàn bộ.
**Grammar & collocations:** `incremental-view-maintenance rule` — rule; `apply a delta to a view` — áp dụng.
**Examples:** `Incremental view maintenance updated the daily totals from only the new sales rows.` → Maintenance cập nhật total từ row bán mới.
**Liên kết tiếng Hàn:** `증분 뷰 유지 관리`.

## 9. change log /tʃeɪndʒ lɒɡ/
**Part of speech:** noun
**Core meaning (English):** an ordered record of inserts, updates, and deletes used to propagate changes elsewhere.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record có thứ tự của insert/update/delete để truyền thay đổi.
**Grammar & collocations:** `change-log offset` — offset; `consume a change event` — đọc.
**Examples:** `The indexer consumed the change log after the primary table accepted each update.` → Indexer đọc log sau mỗi update được nhận.
**Liên kết tiếng Hàn:** `변경 로그`.

## 10. storage tier /ˈstɔːrɪdʒ tɪər/
**Part of speech:** noun
**Core meaning (English):** one class of storage selected for a balance of access speed, durability, and cost.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp storage chọn theo speed, durability và cost.
**Grammar & collocations:** `storage-tier policy` — policy; `move data to cheaper storage` — chuyển.
**Examples:** `The storage tier moved inactive partitions to object storage after thirty days.` → Tier chuyển partition không hoạt động sang object storage.
**Liên kết tiếng Hàn:** `스토리지 계층`.

## 11. cold partition /koʊld pɑːrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** a data partition that is rarely accessed and can be stored or processed less aggressively.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** partition ít được truy cập, có thể lưu/xử lý với mức thấp hơn.
**Grammar & collocations:** `cold-partition archive` — archive; `prune an old partition` — cắt.
**Examples:** `The warehouse scanned cold partitions only when an audit requested historical detail.` → Warehouse chỉ scan partition lạnh khi audit cần.
**Liên kết tiếng Hàn:** `콜드 파티션`.

## 12. late-arriving data /leɪt əˈraɪvɪŋ ˈdeɪtə/
**Part of speech:** noun
**Core meaning (English):** an event received after the system's normal processing point for its event time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event tới sau mốc xử lý bình thường của event time.
**Grammar & collocations:** `late-arriving-data policy` — policy; `correct a closed window` — sửa.
**Examples:** `The stream accepted late-arriving data and revised yesterday's aggregate.` → Stream nhận data đến muộn và sửa aggregate hôm qua.
**Liên kết tiếng Hàn:** `지연 도착 데이터`.

## 13. watermark policy /ˈwɔːtərmɑːrk ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a rule estimating how far event time has advanced and when a window may be considered complete.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule ước lượng event time đã tiến tới đâu và khi nào window hoàn tất.
**Grammar & collocations:** `watermark-policy delay` — delay; `close a window conservatively` — đóng.
**Examples:** `The watermark policy waited two minutes to tolerate delayed mobile events.` → Policy đợi hai phút để chịu event mobile trễ.
**Liên kết tiếng Hàn:** `워터마크 정책`.

## 14. backfill job /ˈbækfɪl dʒɒb/
**Part of speech:** noun
**Core meaning (English):** a planned computation that fills missing or corrected historical data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** computation có kế hoạch điền data lịch sử thiếu hoặc đã sửa.
**Grammar & collocations:** `backfill-job range` — range; `recompute historical partitions` — tính lại.
**Examples:** `The backfill job rebuilt the affected dates after the parser bug was fixed.` → Job rebuild ngày bị ảnh hưởng sau khi sửa parser.
**Liên kết tiếng Hàn:** `백필 작업`.

## 15. reprocessing window /ˌriːˈprəʊsesɪŋ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a bounded period of data selected for processing again after a correction or failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian giới hạn được xử lý lại sau correction/failure.
**Grammar & collocations:** `reprocessing-window boundary` — boundary; `replay a selected interval` — replay.
**Examples:** `The operator narrowed the reprocessing window to avoid duplicating unaffected invoices.` → Operator thu hẹp window để không duplicate invoice không lỗi.
**Liên kết tiếng Hàn:** `재처리 창`.

## 16. failed-message queue /feɪld ˈmesɪdʒ kjuː/
**Part of speech:** noun
**Core meaning (English):** a holding queue for messages that failed normal processing and need inspection or repair.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** queue giữ message lỗi cần kiểm tra hoặc sửa.
**Grammar & collocations:** `failed-message-queue payload` — payload; `inspect rejected events` — kiểm tra.
**Examples:** `The consumer moved malformed events to the failed-message queue for manual repair.` → Consumer chuyển event hỏng vào queue để sửa tay.
**Liên kết tiếng Hàn:** `데드 레터 큐`.

## 17. transactional sink /trænˈzækʃənəl sɪŋk/
**Part of speech:** noun
**Core meaning (English):** an output destination that commits a result atomically with the processing state that produced it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đích output commit result cùng state xử lý đã sinh ra nó một cách atomic.
**Grammar & collocations:** `transactional-sink commit` — commit; `publish an output atomically` — phát.
**Examples:** `The transactional sink kept the billing record aligned with the worker checkpoint.` → Sink transactional giữ record billing khớp checkpoint worker.
**Liên kết tiếng Hàn:** `정확히 한 번 처리`.

## 18. redelivery contract /ˌriːdɪˈlɪvəri ˈkɒntrækt/
**Part of speech:** noun
**Core meaning (English):** an explicit agreement describing when a message may be sent again and how consumers handle duplicates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thỏa thuận nêu khi nào message gửi lại và consumer xử lý duplicate thế nào.
**Grammar & collocations:** `redelivery-contract guarantee` — guarantee; `make a handler duplicate-safe` — làm an toàn.
**Examples:** `The redelivery contract required the consumer to make its update idempotent.` → Contract gửi lại yêu cầu consumer làm update idempotent.
**Liên kết tiếng Hàn:** `최소 한 번 전달`.

## 19. operator state /ˈɒpəreɪtər steɪt/
**Part of speech:** noun
**Core meaning (English):** data retained by a stream-processing operator so it can continue across records and recover after failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data operator stream giữ để tiếp tục qua record và recover sau failure.
**Grammar & collocations:** `operator-state snapshot` — snapshot; `restore keyed state` — khôi phục.
**Examples:** `The checkpoint restored operator state before the stream resumed after a worker loss.` → Checkpoint restore state trước khi stream chạy lại.
**Liên kết tiếng Hàn:** `연산자 상태`.

## 20. shuffle partition /ˈʃʌfəl pɑːrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** a partition receiving redistributed records so a distributed operator can group or join matching keys.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** partition nhận record phân phối lại để operator group/join key giống nhau.
**Grammar & collocations:** `shuffle-partition skew` — lệch; `route a key to a partition` — định tuyến.
**Examples:** `The join sent each customer key to one shuffle partition before aggregation.` → Join gửi mỗi customer key tới một partition trước aggregate.
**Liên kết tiếng Hàn:** `셔플 파티션`.

## Review in context

 A **row store** groups complete records, while a **compression codec** can apply **run length encoding** and a **bitmap index** can filter rows. A **count-min sketch**, **HyperLogLog**, and an **approximate query** trade exactness for compact analytics. **Incremental view maintenance** consumes a **change log**; a **storage tier** moves old data into a **cold partition**. **Late-arriving data** is governed by a **watermark policy**, and a **backfill job** may replay a **reprocessing window**. Failed messages enter a **failed-message queue**. A **transactional sink** commits output with state, while a **redelivery contract** requires idempotence. **Operator state** survives recovery, and a **shuffle partition** groups records by key.

**Bản dịch tiếng Việt:** **Row store** nhóm record hoàn chỉnh, còn **compression codec** có thể dùng **run length encoding** và **bitmap index** lọc row. **Count-min sketch**, **HyperLogLog** và **approximate query** đánh đổi độ chính xác để analytics gọn hơn. **Incremental view maintenance** đọc **change log**; **storage tier** chuyển data cũ vào **cold partition**. **Late-arriving data** được điều khiển bởi **watermark policy**, còn **backfill job** có thể replay **reprocessing window**. Message lỗi vào **failed-message queue**. **Transactional sink** commit output với state, còn **redelivery contract** cần idempotence. **Operator state** sống qua recovery, còn **shuffle partition** nhóm record theo key.
