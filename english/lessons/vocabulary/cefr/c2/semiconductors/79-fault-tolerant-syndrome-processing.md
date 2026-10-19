# C2 Vocabulary — Fault-tolerant syndrome processing

This lesson follows quantum error correction from syndrome data and graph construction to correlated noise, leakage, and real-time recovery.

Flow: **decoder throughput → syndrome compression → syndrome graph → error chain → correction chain → logical failure → code-capacity threshold → phenomenological noise → circuit-level noise → measurement circuit → flag qubit → cat state → hook error → idle error → leakage repumping → syndrome window → syndrome rate → ancilla reset → biased noise → erasure error**.

## 1. decoder throughput /dɪˈkoʊdər ˈθruːpʊt/
**Part of speech:** noun
**Core meaning (English):** the amount of syndrome data a decoder can process per unit time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng syndrome data decoder xử lý được trong một đơn vị thời gian.
**Grammar & collocations:** `decoder-throughput benchmark` — benchmark; `keep pace with syndrome data` — theo kịp data syndrome.
**Examples:** `Decoder throughput had to exceed the syndrome rate to avoid a growing backlog.` → Throughput decoder phải vượt syndrome rate để tránh backlog tăng.
**Liên kết tiếng Hàn:** `디코더 처리량`.

## 2. syndrome compression /ˈsɪndroʊm kəmˈpreʃən/
**Part of speech:** noun
**Core meaning (English):** reducing syndrome data to a smaller representation while preserving information needed for correction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rút syndrome data thành biểu diễn nhỏ hơn mà vẫn giữ thông tin cần sửa lỗi.
**Grammar & collocations:** `syndrome-compression scheme` — scheme; `encode sparse changes` — mã hóa thay đổi thưa.
**Examples:** `Syndrome compression lowered communication bandwidth between the hardware and decoder.` → Nén syndrome giảm bandwidth giữa hardware và decoder.
**Liên kết tiếng Hàn:** `신드롬 압축`.

## 3. syndrome graph /ˈsɪndroʊm ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph whose vertices or events represent changes in stabilizer outcomes across space and time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph có vertex hoặc event biểu diễn thay đổi stabilizer outcome theo không gian và thời gian.
**Grammar & collocations:** `syndrome-graph edge` — edge; `connect detection events` — nối event detect.
**Examples:** `The syndrome graph connected two detection events that likely came from one error chain.` → Graph syndrome nối hai detection event có thể từ một error chain.
**Liên kết tiếng Hàn:** `신드롬 그래프`.

## 4. error chain /ˈerər tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** a connected sequence of physical errors whose combined effect produces a syndrome pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi error vật lý liên kết tạo ra một pattern syndrome.
**Grammar & collocations:** `error-chain endpoint` — endpoint; `trace a correlated path` — trace path tương quan.
**Examples:** `The decoder traced an error chain between the two unmatched defects.` → Decoder trace error chain giữa hai defect chưa ghép.
**Liên kết tiếng Hàn:** `오류 사슬`.

## 5. correction chain /kəˈrekʃən tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** the sequence of physical corrections selected to neutralize an inferred error chain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi correction vật lý được chọn để triệt error chain suy ra.
**Grammar & collocations:** `correction-chain weight` — weight; `apply a minimum path` — áp path nhỏ nhất.
**Examples:** `The correction chain was recorded in the Pauli frame instead of applied immediately.` → Correction chain được ghi trong frame Pauli thay vì áp ngay.
**Liên kết tiếng Hàn:** `보정 사슬`.

## 6. logical failure /ˈlɑːdʒɪkəl ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** an uncorrected physical-error pattern that changes the encoded logical state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern error vật lý không sửa được làm đổi logical state mã hóa.
**Grammar & collocations:** `logical-failure rate` — rate; `cross a logical boundary` — vượt biên logic.
**Examples:** `The larger code reduced logical failure at the same physical error rate.` → Code lớn hơn giảm failure logic ở cùng physical error rate.
**Liên kết tiếng Hàn:** `논리적 실패`.

## 7. code-capacity threshold /koʊd kəˈpæsəti ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the idealized physical-error threshold assuming perfect syndrome measurement and decoding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** threshold error vật lý lý tưởng giả định syndrome measurement và decoding hoàn hảo.
**Grammar & collocations:** `code-capacity-threshold estimate` — ước tính; `separate ideal and circuit noise` — tách noise lý tưởng và circuit.
**Examples:** `The experiment remained below the code-capacity threshold but above its hardware threshold.` → Thí nghiệm dưới threshold capacity code nhưng trên threshold hardware.
**Liên kết tiếng Hàn:** `코드 용량 임계값`.

## 8. phenomenological noise /fəˌnɑːməˈnɑːlədʒɪkəl nɔɪz/
**Part of speech:** noun
**Core meaning (English):** a simplified noise model that assigns effective error probabilities without modeling every physical mechanism.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model noise đơn giản gán xác suất error hiệu dụng mà không model từng cơ chế vật lý.
**Grammar & collocations:** `phenomenological-noise model` — model; `fit an effective error rate` — fit error rate hiệu dụng.
**Examples:** `Phenomenological noise provided a fast baseline for comparing code distances.` → Noise hiện tượng học tạo baseline nhanh để so sánh code distance.
**Liên kết tiếng Hàn:** `현상론적 잡음`.

## 9. circuit-level noise /ˈsɜːrkɪt ˈlevəl nɔɪz/
**Part of speech:** noun
**Core meaning (English):** noise modeled at the level of gates, measurements, resets, and idle periods in an actual circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise model ở mức gate, measurement, reset và idle trong circuit thực.
**Grammar & collocations:** `circuit-level-noise simulation` — mô phỏng; `include gate and measurement faults` — gồm lỗi gate và đo.
**Examples:** `Circuit-level noise lowered the threshold compared with the idealized model.` → Noise cấp circuit hạ threshold so với model lý tưởng.
**Liên kết tiếng Hàn:** `회로 수준 잡음`.

## 10. measurement circuit /ˈmeʒərmənt ˈsɜːrkɪt/
**Part of speech:** noun
**Core meaning (English):** the gates, ancillas, and readout steps used to measure a stabilizer or syndrome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gate, ancilla và bước readout dùng đo stabilizer hoặc syndrome.
**Grammar & collocations:** `measurement-circuit depth` — depth; `entangle an ancilla with data` — entangle ancilla với data.
**Examples:** `The measurement circuit was reordered to reduce hook errors.` → Circuit measurement được sắp lại để giảm hook error.
**Liên kết tiếng Hàn:** `측정 회로`.

## 11. flag qubit /flæɡ ˈkwɪbɪt/
**Part of speech:** noun
**Core meaning (English):** an auxiliary qubit that signals when a measurement circuit may have propagated a dangerous correlated error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** qubit phụ báo khi circuit measurement có thể lan error tương quan nguy hiểm.
**Grammar & collocations:** `flag-qubit circuit` — circuit; `flag a hook error` — báo hook error.
**Examples:** `The flag qubit identified a correlated fault without adding a large code block.` → Flag qubit xác định lỗi tương quan mà không thêm code block lớn.
**Liên kết tiếng Hàn:** `플래그 큐비트`.

## 12. cat state /kæt steɪt/
**Part of speech:** noun
**Core meaning (English):** a coherent superposition of macroscopically distinct basis states, often used as a measurement resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** superposition coherent của các basis state khác biệt vĩ mô, thường dùng làm resource đo.
**Grammar & collocations:** `cat-state preparation` — chuẩn bị; `entangle two branches` — entangle hai nhánh.
**Examples:** `The cat state amplified a small phase difference into a measurable parity signal.` → Cat state khuếch đại chênh pha nhỏ thành parity signal đo được.
**Liên kết tiếng Hàn:** `고양이 상태`.

## 13. hook error /hʊk ˈerər/
**Part of speech:** noun
**Core meaning (English):** a correlated data-qubit error caused by an ancilla fault propagating through a syndrome-measurement circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error tương quan trên data qubit do lỗi ancilla lan qua circuit đo syndrome.
**Grammar & collocations:** `hook-error orientation` — orientation; `redirect correlated propagation` — đổi hướng lan tương quan.
**Examples:** `The schedule oriented the hook error along a correctable direction.` → Lịch circuit hướng hook error theo hướng sửa được.
**Liên kết tiếng Hàn:** `훅 오류`.

## 14. idle error /ˈaɪdəl ˈerər/
**Part of speech:** noun
**Core meaning (English):** an error accumulated by a qubit while it waits between active operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error qubit tích lũy khi chờ giữa các thao tác active.
**Grammar & collocations:** `idle-error rate` — rate; `protect a waiting qubit` — bảo vệ qubit chờ.
**Examples:** `Idle error dominated because the decoder had to wait for a slow measurement.` → Idle error chi phối vì decoder phải chờ measurement chậm.
**Liên kết tiếng Hàn:** `유휴 오류`.

## 15. leakage repumping /ˈliːkɪdʒ riːˈpʌmpɪŋ/
**Part of speech:** noun
**Core meaning (English):** applying a control pulse that returns leaked population to the computational manifold or a detectable state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** áp pulse control đưa population leakage về manifold tính toán hoặc state detect được.
**Grammar & collocations:** `leakage-repumping pulse` — pulse; `return population to the code space` — đưa population về code space.
**Examples:** `Leakage repumping restored the atom before the next syndrome round.` → Repumping leakage khôi phục atom trước syndrome round kế.
**Liên kết tiếng Hàn:** `누출 재펌핑`.

## 16. syndrome window /ˈsɪndroʊm ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the time interval over which syndrome outcomes are grouped for decoding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng time gom syndrome outcome để decode.
**Grammar & collocations:** `syndrome-window length` — độ dài; `group detection events` — gom detection event.
**Examples:** `A longer syndrome window improved confidence but increased decoder latency.` → Window syndrome dài tăng confidence nhưng tăng latency decoder.
**Liên kết tiếng Hàn:** `신드롬 창`.

## 17. syndrome rate /ˈsɪndroʊm reɪt/
**Part of speech:** noun
**Core meaning (English):** the rate at which stabilizer or parity outcomes are produced by a code cycle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rate tạo stabilizer hoặc parity outcome trong mỗi code cycle.
**Grammar & collocations:** `syndrome-rate budget` — ngân sách; `match detector throughput` — khớp throughput detector.
**Examples:** `The syndrome rate exceeded the network link's ability to stream raw results.` → Rate syndrome vượt khả năng stream raw result của network link.
**Liên kết tiếng Hàn:** `신드롬 속도`.

## 18. ancilla reset /ænˈsɪlə riːˈset/
**Part of speech:** noun
**Core meaning (English):** returning an ancilla qubit to a known initial state before another syndrome measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa ancilla qubit về state đầu xác định trước measurement syndrome tiếp.
**Grammar & collocations:** `ancilla-reset fidelity` — fidelity; `reinitialize a measurement qubit` — khởi tạo lại.
**Examples:** `Ancilla reset was inserted between rounds to prevent old syndrome information from mixing.` → Reset ancilla được chèn giữa round để ngăn syndrome cũ trộn.
**Liên kết tiếng Hàn:** `보조 큐비트 리셋`.

## 19. biased noise /ˈbaɪəst nɔɪz/
**Part of speech:** noun
**Core meaning (English):** noise in which one error type occurs much more often than another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise trong đó một loại error xảy ra thường hơn nhiều loại khác.
**Grammar & collocations:** `biased-noise code` — code; `tailor protection to dephasing` — điều chỉnh bảo vệ theo mất pha.
**Examples:** `The biased noise favored phase errors, so the code allocated extra protection to them.` → Noise lệch ưu tiên phase error nên code cấp bảo vệ thêm.
**Liên kết tiếng Hàn:** `편향 잡음`.

## 20. erasure error /ɪˈreɪʒər ˈerər/
**Part of speech:** noun
**Core meaning (English):** an error in which the location of a lost or unreliable symbol is known even though its value is unknown.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error biết vị trí symbol mất hoặc không đáng tin nhưng không biết giá trị đúng.
**Grammar & collocations:** `erasure-error flag` — flag; `convert loss into an erasure` — đổi loss thành erasure.
**Examples:** `The detector converted atom loss into an erasure error that the decoder could locate.` → Detector đổi mất atom thành erasure error mà decoder định vị được.
**Liên kết tiếng Hàn:** `소거 오류`.

## Review in context

**Decoder throughput**, **syndrome compression**, and a **syndrome graph** turn an **error chain** into a **correction chain**; an unresolved chain becomes **logical failure**. The **code-capacity threshold**, **phenomenological noise**, and **circuit-level noise** distinguish ideal and hardware limits. A **measurement circuit**, **flag qubit**, and **cat state** control propagation, while **hook error**, **idle error**, and **leakage repumping** shape each round. The **syndrome window**, **syndrome rate**, **ancilla reset**, **biased noise**, and **erasure error** determine whether real-time correction can keep up.

**Bản dịch tiếng Việt:** **Decoder throughput**, **syndrome compression** và **syndrome graph** biến **error chain** thành **correction chain**; chain không xử lý sẽ thành **logical failure**. **Code-capacity threshold**, **phenomenological noise** và **circuit-level noise** phân biệt giới hạn lý tưởng với hardware. **Measurement circuit**, **flag qubit** và **cat state** kiểm soát lan error, còn **hook error**, **idle error** và **leakage repumping** định hình từng round. **Syndrome window**, **syndrome rate**, **ancilla reset**, **biased noise** và **erasure error** quyết định correction thời gian thực có theo kịp hay không.
