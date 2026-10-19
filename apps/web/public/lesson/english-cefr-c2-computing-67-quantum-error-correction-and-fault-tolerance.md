# C2 Vocabulary — Quantum error correction and fault tolerance

This lesson follows encoded quantum information from a topological code through syndrome processing, logical gates, and fault-tolerant overhead.

Flow: **topological code → encoded qubit → code distance → syndrome extraction → stabilizer measurement → transversal gate → non-Clifford resource → threshold theorem → lattice surgery → decoder latency → correlated error → leakage reduction → fault-tolerant gate → logical error rate → physical qubit overhead → logical error budget → syndrome history → erasure flag → code deformation → fault-tolerance threshold**.

## 1. topological code /ˌtɒpəˈlɒdʒɪkəl koʊd/
**Part of speech:** noun
**Core meaning (English):** a quantum error-correcting code that stores information in global properties of a connected arrangement of physical qubits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã lưu thông tin trong cấu trúc toàn cục của mạng qubit.
**Grammar & collocations:** `topological-code patch` — patch; `encode a state geometrically` — mã hóa.
**Examples:** `The topological code represented one protected state across a two-dimensional patch.` → Mã topo biểu diễn một trạng thái bảo vệ trên patch hai chiều.
**Liên kết tiếng Hàn:** `위상 코드`.

## 2. encoded qubit /ɪnˈkoʊdɪd ˈkwɒntəm bɪt/
**Part of speech:** noun
**Core meaning (English):** a logical quantum bit represented redundantly by many physical qubits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** qubit logic được biểu diễn dư thừa bằng nhiều qubit vật lý.
**Grammar & collocations:** `encoded-qubit lifetime` — lifetime; `protect a logical state` — bảo vệ.
**Examples:** `The encoded qubit survived several single-site faults that would have destroyed an unprotected state.` → Qubit mã hóa sống qua lỗi đơn lẻ.
**Liên kết tiếng Hàn:** `부호화 큐비트`.

## 3. code distance /koʊd ˈdɪstəns/
**Part of speech:** noun
**Core meaning (English):** the minimum number of physical errors needed to turn one valid encoded state into another indistinguishable state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lỗi tối thiểu để biến trạng thái mã hóa này thành trạng thái khác.
**Grammar & collocations:** `code-distance scaling` — scaling; `increase the distance` — tăng.
**Examples:** `Increasing code distance improved protection but required a larger patch of qubits.` → Tăng khoảng cách mã tăng bảo vệ nhưng cần patch lớn hơn.
**Liên kết tiếng Hàn:** `코드 거리`.

## 4. syndrome extraction /ˈsɪndroʊm ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** measuring error-related checks without directly measuring the encoded quantum information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo dấu hiệu lỗi mà không đo trực tiếp thông tin mã hóa.
**Grammar & collocations:** `syndrome-extraction circuit` — circuit; `collect parity checks` — thu.
**Examples:** `Syndrome extraction identified a likely bit flip while preserving the encoded superposition.` → Trích xuất syndrome nhận ra bit flip mà giữ chồng chập.
**Liên kết tiếng Hàn:** `신드롬 추출`.

## 5. stabilizer measurement /ˈsteɪbəlaɪzər ˈmeʒərmənt/
**Part of speech:** noun
**Core meaning (English):** a measurement of an operator whose expected value identifies whether an encoded constraint has been violated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo toán tử để biết ràng buộc mã có bị phá không.
**Grammar & collocations:** `stabilizer-measurement schedule` — schedule; `read a parity eigenvalue` — đọc.
**Examples:** `A stabilizer measurement produced a syndrome bit for the decoder rather than a data bit.` → Đo stabilizer tạo syndrome cho decoder.
**Liên kết tiếng Hàn:** `안정자 측정`.

## 6. transversal gate /trænzˈvɜrsəl ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a logical operation applied separately across corresponding physical qubits in an encoded block.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cổng logic áp dụng song song lên các qubit tương ứng.
**Grammar & collocations:** `transversal-gate set` — set; `apply a logical operation fault-tolerantly` — áp dụng.
**Examples:** `The transversal gate limited error spread because each physical qubit interacted only once.` → Cổng xuyên hạn chế lan lỗi.
**Liên kết tiếng Hàn:** `횡단 게이트`.

## 7. non-Clifford resource /nɒn ˈklɪfərd rɪˈsɔrs/
**Part of speech:** noun
**Core meaning (English):** a state or operation needed to achieve universal quantum computation beyond the efficiently simulable Clifford set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tài nguyên mở rộng tính toán vượt tập Clifford dễ mô phỏng.
**Grammar & collocations:** `non-Clifford-resource injection` — injection; `supply a magic state` — cung cấp.
**Examples:** `The compiler scheduled a non-Clifford resource only after the protected Clifford circuit was complete.` → Compiler lên lịch tài nguyên ngoài Clifford sau mạch bảo vệ.
**Liên kết tiếng Hàn:** `비클리퍼드 자원`.

## 8. threshold theorem /ˈθreʃhoʊld ˈθiːərəm/
**Part of speech:** noun
**Core meaning (English):** a result stating that scalable fault-tolerant computation is possible when physical noise stays below a code-dependent threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định lý cho phép mở rộng nếu nhiễu vật lý dưới ngưỡng.
**Grammar & collocations:** `threshold-theorem assumption` — assumption; `operate below threshold` — vận hành.
**Examples:** `The threshold theorem did not remove engineering overhead; it bounded how errors could be suppressed.` → Định lý không xóa overhead, chỉ giới hạn cách giảm lỗi.
**Liên kết tiếng Hàn:** `임계값 정리`.

## 9. lattice surgery /ˈlætɪs ˈsɜrdʒəri/
**Part of speech:** noun
**Core meaning (English):** performing logical operations by merging and separating neighboring patches of a topological code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thao tác logic bằng cách ghép và tách các patch lân cận.
**Grammar & collocations:** `lattice-surgery operation` — operation; `merge code patches` — ghép.
**Examples:** `Lattice surgery implemented the logical measurement without moving individual physical qubits.` → Phẫu thuật lattice đo logic mà không di chuyển qubit.
**Liên kết tiếng Hàn:** `격자 수술`.

## 10. decoder latency /dɪˈkoʊdər ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** the delay between receiving syndrome data and producing an error-correction decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ từ syndrome đến quyết định sửa lỗi.
**Grammar & collocations:** `decoder-latency budget` — budget; `decode online` — giải mã trực tuyến.
**Examples:** `Decoder latency exceeded the cycle time, so the controller had to buffer syndrome rounds.` → Độ trễ decoder vượt chu kỳ nên controller phải đệm syndrome.
**Liên kết tiếng Hàn:** `디코더 지연 시간`.

## 11. correlated error /ˈkɔrəleɪtɪd ˈerər/
**Part of speech:** noun
**Core meaning (English):** an error pattern in which faults at different locations or times are statistically related.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi ở nhiều vị trí/thời điểm có liên hệ thống kê.
**Grammar & collocations:** `correlated-error model` — model; `suppress common-mode faults` — triệt.
**Examples:** `A correlated error from the control pulse defeated assumptions based on independent noise.` → Lỗi tương quan từ xung điều khiển phá giả định nhiễu độc lập.
**Liên kết tiếng Hàn:** `상관 오류`.

## 12. leakage reduction /ˈliːkɪdʒ rɪˈdʌkʃən/
**Part of speech:** noun
**Core meaning (English):** techniques that return population outside the computational basis to a usable encoded subspace.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa trạng thái rò rỉ trở lại không gian tính toán.
**Grammar & collocations:** `leakage-reduction pulse` — pulse; `reset an outside-population state` — reset.
**Examples:** `Leakage reduction prevented a metastable level from contaminating later syndrome rounds.` → Giảm rò ngăn mức siêu bền làm nhiễm syndrome sau.
**Liên kết tiếng Hàn:** `누설 감소`.

## 13. fault-tolerant gate /fɔlt ˈtɒlərənt ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a logical operation designed so a limited number of physical faults do not spread into an uncorrectable failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cổng logic ngăn ít lỗi vật lý lan thành lỗi không sửa được.
**Grammar & collocations:** `fault-tolerant-gate synthesis` — synthesis; `contain a single fault` — chứa.
**Examples:** `The fault-tolerant gate contained one faulty ancilla instead of propagating it across the block.` → Cổng chịu lỗi giữ lỗi ancilla trong block.
**Liên kết tiếng Hàn:** `내결함 게이트`.

## 14. logical error rate /ˈlɒdʒɪkəl ˈerər reɪt/
**Part of speech:** noun
**Core meaning (English):** the probability that an encoded operation produces an undetected error in the logical state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất lỗi không phát hiện trong trạng thái logic.
**Grammar & collocations:** `logical-error-rate estimate` — estimate; `suppress logical failures` — giảm.
**Examples:** `The larger code reduced the logical error rate until correlated noise became dominant.` → Mã lớn giảm tỷ lệ lỗi logic đến khi nhiễu tương quan chi phối.
**Liên kết tiếng Hàn:** `논리 오류율`.

## 15. physical qubit overhead /ˈfɪzɪkəl ˈkwɒntəm bɪt ˈoʊvərhed/
**Part of speech:** noun
**Core meaning (English):** the extra number of physical qubits required to represent and operate on protected logical information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số qubit vật lý dư cần cho thông tin logic bảo vệ.
**Grammar & collocations:** `physical-qubit-overhead estimate` — estimate; `trade overhead for protection` — đánh đổi.
**Examples:** `Physical qubit overhead dominated the design even though the logical circuit was short.` → Overhead qubit vật lý chi phối thiết kế.
**Liên kết tiếng Hàn:** `물리 큐비트 오버헤드`.

## 16. logical error budget /ˈlɒdʒɪkəl ˈerər ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the maximum accumulated logical failure probability permitted by an application.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tổng xác suất lỗi logic tối đa ứng dụng cho phép.
**Grammar & collocations:** `logical-error-budget allocation` — allocation; `spend the budget` — tiêu.
**Examples:** `The compiler allocated the logical error budget across memory, gates, and measurement.` → Compiler phân bổ ngân sách lỗi logic.
**Liên kết tiếng Hàn:** `논리 오류 예산`.

## 17. syndrome history /ˈsɪndroʊm ˈhɪstəri/
**Part of speech:** noun
**Core meaning (English):** a time-ordered record of error-check outcomes used to infer faults and their movement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lịch sử syndrome theo thời gian để suy ra lỗi.
**Grammar & collocations:** `syndrome-history window` — window; `track a defect worldline` — theo dõi.
**Examples:** `The decoder used syndrome history to distinguish a moving defect from independent measurement noise.` → Decoder dùng lịch sử để phân biệt defect di động.
**Liên kết tiếng Hàn:** `신드롬 이력`.

## 18. erasure flag /ɪˈreɪʒər flæɡ/
**Part of speech:** noun
**Core meaning (English):** a signal that marks a location as lost or unusable without specifying an arbitrary Pauli error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cờ báo vị trí mất mà không chỉ rõ lỗi Pauli.
**Grammar & collocations:** `erasure-flag decoder` — decoder; `mark a known loss` — đánh dấu.
**Examples:** `The erasure flag gave the decoder more information than an unlocated bit error.` → Cờ xóa cho decoder nhiều thông tin hơn lỗi không định vị.
**Liên kết tiếng Hàn:** `소거 플래그`.

## 19. code deformation /koʊd ˌdiːfɔrˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** changing the shape or boundaries of an error-correcting code while preserving its logical information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi hình dạng/biên mã mà vẫn giữ thông tin logic.
**Grammar & collocations:** `code-deformation sequence` — sequence; `move a defect` — di chuyển.
**Examples:** `Code deformation moved the logical defect around an obstacle in the patch.` → Biến dạng mã di chuyển defect quanh chướng ngại.
**Liên kết tiếng Hàn:** `코드 변형`.

## 20. fault-tolerance threshold /fɔlt ˈtɒlərəns ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the physical-noise boundary below which encoding can reduce rather than amplify logical failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biên nhiễu vật lý dưới đó mã hóa giảm lỗi logic.
**Grammar & collocations:** `fault-tolerance-threshold estimate` — estimate; `operate below the threshold` — vận hành.
**Examples:** `The hardware remained above the fault-tolerance threshold after calibration drifted.` → Phần cứng vượt ngưỡng chịu lỗi sau lệch hiệu chuẩn.
**Liên kết tiếng Hàn:** `내결함성 임계값`.

## Review in context

A **topological code** stores an **encoded qubit** whose protection grows with **code distance**. Repeated **syndrome extraction** and **stabilizer measurement** reveal faults without directly reading the data, while a **transversal gate** and a **non-Clifford resource** provide computation. The **threshold theorem** motivates **lattice surgery**, but real systems must control **decoder latency**, **correlated error**, and **leakage reduction**. A **fault-tolerant gate** is judged by its **logical error rate** and its **physical qubit overhead**. Engineers allocate a **logical error budget**, inspect **syndrome history**, and use an **erasure flag** when a location is known to be lost. **Code deformation** and a measured **fault-tolerance threshold** determine whether the architecture can scale.

**Bản dịch tiếng Việt:** Một **mã topo** lưu **qubit mã hóa**, mức bảo vệ tăng theo **khoảng cách mã**. **Trích xuất syndrome** và **đo stabilizer** lặp lại để phát hiện lỗi mà không đọc trực tiếp dữ liệu, còn **cổng xuyên** và **tài nguyên ngoài Clifford** cung cấp khả năng tính toán. **Định lý ngưỡng** thúc đẩy **phẫu thuật lattice**, nhưng hệ thống thực phải kiểm soát **độ trễ decoder**, **lỗi tương quan** và **giảm rò rỉ**. **Cổng chịu lỗi** được đánh giá qua **tỷ lệ lỗi logic** và **overhead qubit vật lý**. Kỹ sư phân bổ **ngân sách lỗi logic**, kiểm tra **lịch sử syndrome** và dùng **cờ xóa** khi biết vị trí đã mất. **Biến dạng mã** và **ngưỡng chịu lỗi** đo được quyết định kiến trúc có thể mở rộng hay không.
