# C2 Vocabulary — Database recovery and logging

This lesson follows a database crash from log durability through analysis, redo, undo, and checkpoint-aware restart.

Flow: **write-ahead logging → ARIES recovery → physiological logging → log sequence number → pageLSN → dirty page table → transaction table → fuzzy checkpoint → analysis pass → redo pass → undo pass → compensation log record → repeating history → steal/no-force policy → force/no-steal policy → group commit → log flush → crash recovery → shadow paging → recovery point objective**.

## 1. write-ahead logging /raɪt əˈhɛd ˈlɔɡɪŋ/
**Part of speech:** noun
**Core meaning (English):** a durability technique requiring a log record to reach stable storage before the changed data page is written.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi log trước khi ghi page để crash vẫn biết phải phục hồi gì.
**Grammar & collocations:** `write-ahead-logging rule` — rule; `append a log record first` — ghi trước.
**Examples:** `Write-ahead logging let the engine recover a page whose data write was interrupted.` → WAL giúp recover page bị gián đoạn khi ghi.
**Liên kết tiếng Hàn:** `선행 기록 로깅`.

## 2. ARIES recovery /ˈɛriz rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** a recovery algorithm that uses analysis, repeating history during redo, and logged compensation during undo.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán recovery ba pha dựa trên history trong log.
**Grammar & collocations:** `ARIES-recovery protocol` — protocol; `replay logged history` — replay.
**Examples:** `ARIES recovery restored committed changes before rolling back incomplete transactions.` → ARIES khôi phục commit trước khi rollback transaction dở.
**Liên kết tiếng Hàn:** `ARIES 복구`.

## 3. physiological logging /ˌfɪziəˈlɑdʒɪkəl ˈlɔɡɪŋ/
**Part of speech:** noun
**Core meaning (English):** logging a change at the level of a page and record operation rather than recording an entire page image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** log thay đổi theo page/record, cân bằng chi phí và khả năng redo.
**Grammar & collocations:** `physiological-logging format` — format; `describe a page-level update` — mô tả.
**Examples:** `Physiological logging recorded the slot update without copying the whole data page.` → Logging ghi slot mà không copy nguyên page.
**Liên kết tiếng Hàn:** `생리학적 로깅`.

## 4. log sequence number /lɔɡ ˈsiːkwəns ˈnʌmbər/
**Part of speech:** noun
**Core meaning (English):** a monotonically increasing identifier that orders log records and supports recovery comparisons.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số tăng dần để biết record log nào trước/sau.
**Grammar & collocations:** `log-sequence-number ordering` — ordering; `compare LSN values` — so sánh.
**Examples:** `The recovery scan used the log sequence number to find the first record after the checkpoint.` → Scan dùng LSN tìm record sau checkpoint.
**Liên kết tiếng Hàn:** `로그 시퀀스 번호`.

## 5. pageLSN /peɪdʒ ɛl ɛs ɛn/
**Part of speech:** noun
**Core meaning (English):** the log sequence number stored on a page to identify the newest update already reflected on that page.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** page giữ LSN mới nhất đã được áp dụng.
**Grammar & collocations:** `pageLSN comparison` — comparison; `test whether a redo is needed` — kiểm tra.
**Examples:** `The redo pass skipped an update because the pageLSN was already newer than its log record.` → Redo bỏ qua vì pageLSN đã mới hơn.
**Liên kết tiếng Hàn:** `페이지 LSN`.

## 6. dirty page table /ˈdɝti peɪd ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** recovery metadata listing pages changed in memory but not known to be safely persisted at crash time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng page bẩn cần xem xét khi restart.
**Grammar & collocations:** `dirty-page-table entry` — entry; `record a recovery LSN` — ghi.
**Examples:** `The dirty page table narrowed redo to pages that might contain unflushed updates.` → Bảng thu hẹp redo vào page có update chưa flush.
**Liên kết tiếng Hàn:** `더티 페이지 테이블`.

## 7. transaction table /trænˈzækʃən ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** recovery metadata describing active transactions, their latest log positions, and whether they were complete at failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng transaction đang chạy và vị trí log cuối.
**Grammar & collocations:** `transaction-table entry` — entry; `identify an incomplete transaction` — nhận diện.
**Examples:** `The transaction table marked two sessions as losers because they lacked commit records.` → Bảng đánh dấu hai session chưa commit.
**Liên kết tiếng Hàn:** `트랜잭션 테이블`.

## 8. fuzzy checkpoint /ˈfʌzi ˈtʃɛkˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a checkpoint that records recovery metadata while transactions and page writes continue instead of stopping the database.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** checkpoint “mờ” chụp metadata khi database vẫn chạy.
**Grammar & collocations:** `fuzzy-checkpoint record` — record; `checkpoint without quiescing` — chụp.
**Examples:** `A fuzzy checkpoint shortened restart time without pausing customer traffic.` → Checkpoint không dừng traffic nhưng rút restart.
**Liên kết tiếng Hàn:** `퍼지 체크포인트`.

## 9. analysis pass /əˈnæləsɪs pæs/
**Part of speech:** noun
**Core meaning (English):** the recovery phase that reconstructs transaction and dirty-page metadata from the log.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pha đầu dựng lại ai đang chạy và page nào bẩn.
**Grammar & collocations:** `analysis-pass result` — result; `reconstruct recovery tables` — dựng lại.
**Examples:** `The analysis pass found a transaction that began before the last fuzzy checkpoint.` → Analysis tìm transaction bắt đầu trước checkpoint.
**Liên kết tiếng Hàn:** `분석 패스`.

## 10. redo pass /ˈriːduː pæs/
**Part of speech:** noun
**Core meaning (English):** the recovery phase that reapplies logged history to bring data pages forward to their crash-time state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pha làm lại update để page về trạng thái lúc crash.
**Grammar & collocations:** `redo-pass scan` — scan; `reapply a logged update` — áp lại.
**Examples:** `The redo pass restored an update that had reached the log but not the data file.` → Redo khôi phục update đã vào log nhưng chưa vào data.
**Liên kết tiếng Hàn:** `재실행 패스`.

## 11. undo pass /ˈʌnduː pæs/
**Part of speech:** noun
**Core meaning (English):** the recovery phase that reverses changes belonging to transactions that were incomplete at failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pha hoàn tác transaction chưa hoàn thành.
**Grammar & collocations:** `undo-pass traversal` — traversal; `roll back loser transactions` — rollback.
**Examples:** `The undo pass removed the uncommitted price change while retaining the committed order.` → Undo bỏ price change chưa commit nhưng giữ order.
**Liên kết tiếng Hàn:** `실행 취소 패스`.

## 12. compensation log record /ˌkɑmpənˈseɪʃən lɔɡ ˈrɛkərd/
**Part of speech:** noun
**Core meaning (English):** a log record describing an undo action so that recovery itself remains repeatable after another crash.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** log của hành động undo, giúp undo không bị lặp sai sau crash mới.
**Grammar & collocations:** `compensation-log-record chain` — chain; `log an undo operation` — ghi.
**Examples:** `The compensation log record showed which index entry had already been removed during undo.` → CLR cho biết index entry đã bị xóa.
**Liên kết tiếng Hàn:** `보상 로그 레코드`.

## 13. repeating history /rɪˈpiːtɪŋ ˈhɪstəri/
**Part of speech:** noun
**Core meaning (English):** reapplying all logged actions during redo, including actions later undone, to reconstruct the exact prior state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** redo lặp cả history rồi mới undo phần chưa commit.
**Grammar & collocations:** `repeating-history principle` — principle; `replay the recorded sequence` — replay.
**Examples:** `Repeating history simplified recovery because redo did not need to guess which actions had reached disk.` → Lặp history giúp redo không phải đoán.
**Liên kết tiếng Hàn:** `이력 반복`.

## 14. steal/no-force policy /stiːl noʊ fɔrs ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** a buffer policy allowing dirty pages to flush before commit while not requiring committed pages to flush immediately.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** page bẩn có thể flush sớm, page commit không bắt buộc flush ngay.
**Grammar & collocations:** `steal/no-force-buffer policy` — policy; `allow flexible page flushing` — cho phép.
**Examples:** `The steal/no-force policy improved throughput but made log-based recovery essential.` → Policy tăng throughput nhưng cần recovery bằng log.
**Liên kết tiếng Hàn:** `스틸/노포스 정책`.

## 15. force/no-steal policy /fɔrs noʊ stiːl ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** a buffer policy requiring committed pages to be written promptly while forbidding uncommitted dirty pages from being flushed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** page commit phải ghi, page chưa commit không được đẩy ra disk.
**Grammar & collocations:** `force/no-steal-buffer policy` — policy; `avoid undo logging` — tránh.
**Examples:** `A force/no-steal policy simplified restart but consumed more I/O and memory.` → Policy đơn giản recovery nhưng tốn I/O và memory.
**Liên kết tiếng Hàn:** `포스/노스틸 정책`.

## 16. group commit /ɡruːp kəˈmɪt/
**Part of speech:** noun
**Core meaning (English):** batching several transaction commits into one durable log flush.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom nhiều commit để flush log một lần.
**Grammar & collocations:** `group-commit window` — window; `batch commit acknowledgements` — gom.
**Examples:** `Group commit reduced flush overhead during a burst of short transactions.` → Group commit giảm overhead flush khi transaction ngắn dồn dập.
**Liên kết tiếng Hàn:** `그룹 커밋`.

## 17. log flush /lɔɡ flʌʃ/
**Part of speech:** noun
**Core meaning (English):** writing buffered log records to stable storage so their durability can be relied upon.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đẩy log buffer xuống storage bền vững.
**Grammar & collocations:** `log-flush latency` — latency; `wait for a durable flush` — chờ.
**Examples:** `Log flush latency dominated commit time on the replicated storage array.` → Latency flush chi phối commit.
**Liên kết tiếng Hàn:** `로그 플러시`.

## 18. crash recovery /kræʃ rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** restoring a database to a consistent state after an unexpected process, machine, or storage failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa database về trạng thái nhất quán sau sự cố bất ngờ.
**Grammar & collocations:** `crash-recovery routine` — routine; `resume service after failure` — khôi phục.
**Examples:** `Crash recovery completed before the service accepted new writes from the application tier.` → Recovery xong trước khi nhận write mới.
**Liên kết tiếng Hàn:** `충돌 복구`.

## 19. shadow paging /ˈʃædoʊ ˈpeɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** a recovery technique that writes changed pages to new locations and atomically switches a page map instead of logging in-place updates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi page mới rồi đổi map nguyên tử, giữ bản cũ làm shadow.
**Grammar & collocations:** `shadow-paging scheme` — scheme; `switch a page map` — đổi.
**Examples:** `Shadow paging avoided an undo pass but created fragmentation under frequent updates.` → Shadow paging tránh undo nhưng dễ phân mảnh.
**Liên kết tiếng Hàn:** `섀도 페이징`.

## 20. recovery point objective /rɪˈkʌvəri pɔɪnt əbˈdʒɛktɪv/
**Part of speech:** noun
**Core meaning (English):** the maximum acceptable amount of data loss measured in time after a failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mất tối đa bao nhiêu thời gian dữ liệu sau sự cố.
**Grammar & collocations:** `recovery-point-objective target` — target; `meet a five-minute RPO` — đạt.
**Examples:** `Frequent log shipping kept the recovery point objective below five minutes.` → Gửi log thường xuyên giữ RPO dưới năm phút.
**Liên kết tiếng Hàn:** `복구 시점 목표`.

## Review in context

**Write-ahead logging** supports **ARIES recovery**, which may use **physiological logging**, a **log sequence number**, and a **pageLSN**. The **dirty page table** and **transaction table** reconstructed during a **fuzzy checkpoint** guide the **analysis pass**, **redo pass**, and **undo pass**. An undo action creates a **compensation log record**, while **repeating history** reproduces the crash-time state. Buffer choices include a **steal/no-force policy** or a **force/no-steal policy**. **Group commit** and **log flush** affect throughput and durability. After **crash recovery**, systems may use **shadow paging** and log shipping to meet a **recovery point objective**.

**Bản dịch tiếng Việt:** **Write-ahead logging** hỗ trợ **ARIES recovery**, có thể dùng **physiological logging**, **log sequence number** và **pageLSN**. **Dirty page table** và **transaction table** dựng lại trong **fuzzy checkpoint** dẫn cho **analysis pass**, **redo pass** và **undo pass**. Hành động undo tạo **compensation log record**, còn **repeating history** tái hiện trạng thái lúc crash. Chính sách buffer gồm **steal/no-force policy** hoặc **force/no-steal policy**. **Group commit** và **log flush** ảnh hưởng throughput và durability. Sau **crash recovery**, hệ thống có thể dùng **shadow paging** và gửi log để đạt **recovery point objective**.
