# C2 Vocabulary — Quantum error codes and decoders

This lesson turns topological protection into concrete code structure: checks, syndromes, logical operators, code families, and decoders.

Flow: **logical operator weight → check operator → X stabilizer → Z stabilizer → plaquette operator → star operator → syndrome bit → data qubit → ancilla qubit → repetition code → bit-flip code → phase-flip code → color code → toric code → concatenated code → fault-tolerant threshold → error decoder → minimum-weight perfect matching → belief propagation decoder → neural decoder**.

## 1. logical operator weight /ˈlɑːdʒɪkəl ˈɑːpəreɪtər weɪt/
**Part of speech:** noun
**Core meaning (English):** the number of physical qubits on which an encoded logical operator acts nontrivially.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số qubit vật lý mà logical operator mã hóa tác động khác identity.
**Grammar & collocations:** `logical-operator-weight scaling` — scaling; `increase a code distance` — tăng khoảng cách code.
**Examples:** `Higher logical operator weight made a large correlated error harder to complete.` → Weight logical operator cao làm error tương quan lớn khó hoàn tất.
**Liên kết tiếng Hàn:** `논리 연산자 가중치`.

## 2. check operator /tʃek ˈɑːpəreɪtər/
**Part of speech:** noun
**Core meaning (English):** an operator whose measured eigenvalue tests whether a code constraint is satisfied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operator có eigenvalue đo để kiểm tra ràng buộc code có thỏa hay không.
**Grammar & collocations:** `check-operator measurement` — phép đo; `test a stabilizer constraint` — kiểm tra ràng buộc stabilizer.
**Examples:** `The check operator returned a nontrivial value after one data qubit suffered an error.` → Check operator trả giá trị nontrivial sau khi một data qubit lỗi.
**Liên kết tiếng Hàn:** `검사 연산자`.

## 3. X stabilizer /eks ˈsteɪbəlaɪzər/
**Part of speech:** noun
**Core meaning (English):** a stabilizer containing Pauli-X actions that participates in detecting compatible error syndromes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stabilizer chứa tác động Pauli-X, tham gia phát hiện syndrome error phù hợp.
**Grammar & collocations:** `X-stabilizer check` — check; `measure an X-type constraint` — đo ràng buộc loại X.
**Examples:** `The X stabilizer changed sign when the corresponding phase error occurred.` → X stabilizer đổi dấu khi error pha tương ứng xảy ra.
**Liên kết tiếng Hàn:** `X 안정자`.

## 4. Z stabilizer /ziː ˈsteɪbəlaɪzər/
**Part of speech:** noun
**Core meaning (English):** a stabilizer containing Pauli-Z actions that detects a complementary class of errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stabilizer chứa tác động Pauli-Z, phát hiện lớp error bổ sung.
**Grammar & collocations:** `Z-stabilizer measurement` — phép đo; `detect a bit-flip syndrome` — phát hiện syndrome bit-flip.
**Examples:** `The Z stabilizer identified a bit-flip event without reading the logical state.` → Z stabilizer xác định sự kiện bit-flip mà không đọc logical state.
**Liên kết tiếng Hàn:** `Z 안정자`.

## 5. plaquette operator /pləˈket ˈɑːpəreɪtər/
**Part of speech:** noun
**Core meaning (English):** a local stabilizer associated with the edges or faces surrounding a plaquette in a lattice code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stabilizer cục bộ gắn với edge hoặc mặt bao quanh plaquette trong lattice code.
**Grammar & collocations:** `plaquette-operator syndrome` — syndrome; `measure a face constraint` — đo ràng buộc mặt.
**Examples:** `A flipped plaquette operator marked the endpoint of an error string.` → Plaquette operator bị flip đánh dấu endpoint của error string.
**Liên kết tiếng Hàn:** `플라켓 연산자`.

## 6. star operator /stɑːr ˈɑːpəreɪtər/
**Part of speech:** noun
**Core meaning (English):** a lattice-code stabilizer acting on the edges or qubits meeting at a vertex.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stabilizer lattice tác động edge hoặc qubit gặp nhau tại một vertex.
**Grammar & collocations:** `star-operator check` — check; `test a vertex constraint` — kiểm tra ràng buộc vertex.
**Examples:** `The star operator supplied the syndrome associated with a vertex defect.` → Star operator cung cấp syndrome gắn với defect vertex.
**Liên kết tiếng Hàn:** `별 연산자`.

## 7. syndrome bit /ˈsɪndroʊm bɪt/
**Part of speech:** noun
**Core meaning (English):** a classical bit recording the outcome of one stabilizer or parity check.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bit cổ điển ghi outcome của một stabilizer hoặc parity check.
**Grammar & collocations:** `syndrome-bit stream` — stream; `record a check outcome` — ghi outcome check.
**Examples:** `The syndrome bit changed even though the encoded qubit remained protected.` → Syndrome bit đổi dù encoded qubit vẫn được bảo vệ.
**Liên kết tiếng Hàn:** `신드롬 비트`.

## 8. data qubit /ˈdeɪtə ˈkwɪbɪt/
**Part of speech:** noun
**Core meaning (English):** a physical qubit that stores part of the encoded quantum information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** qubit vật lý lưu một phần thông tin lượng tử đã mã hóa.
**Grammar & collocations:** `data-qubit array` — mảng; `protect a stored state` — bảo vệ trạng thái lưu.
**Examples:** `The decoder inferred which data qubit was most likely affected.` → Decoder suy data qubit nào nhiều khả năng bị ảnh hưởng.
**Liên kết tiếng Hàn:** `데이터 큐비트`.

## 9. ancilla qubit /ænˈsɪlə ˈkwɪbɪt/
**Part of speech:** noun
**Core meaning (English):** an auxiliary qubit used to measure checks, extract syndromes, or mediate an operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** qubit phụ dùng đo check, trích syndrome hoặc trung gian thao tác.
**Grammar & collocations:** `ancilla-qubit reset` — reset; `couple an ancilla to data` — ghép ancilla với data.
**Examples:** `The ancilla qubit interacted with four data qubits before being measured.` → Ancilla qubit tương tác với bốn data qubit trước khi đo.
**Liên kết tiếng Hàn:** `보조 큐비트`.

## 10. repetition code /ˌrepəˈtɪʃən koʊd/
**Part of speech:** noun
**Core meaning (English):** a simple code that stores one logical bit or qubit in repeated physical copies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code đơn giản lưu một bit hoặc qubit logic bằng các bản sao vật lý lặp.
**Grammar & collocations:** `repetition-code syndrome` — syndrome; `vote across repeated bits` — bỏ phiếu qua các bit lặp.
**Examples:** `The repetition code corrected one isolated bit flip in the row.` → Code lặp sửa một bit-flip cô lập trong hàng.
**Liên kết tiếng Hàn:** `반복 코드`.

## 11. bit-flip code /bɪt flɪp koʊd/
**Part of speech:** noun
**Core meaning (English):** a code designed to detect or correct errors that interchange computational-basis states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code thiết kế phát hiện hoặc sửa error hoán đổi các trạng thái computational basis.
**Grammar & collocations:** `bit-flip-code check` — check; `correct a computational error` — sửa error tính toán.
**Examples:** `The bit-flip code corrected a single X error from the simulated channel.` → Code bit-flip sửa một error X từ channel mô phỏng.
**Liên kết tiếng Hàn:** `비트 플립 코드`.

## 12. phase-flip code /feɪz flɪp koʊd/
**Part of speech:** noun
**Core meaning (English):** a code designed to detect or correct errors that reverse the relative phase of computational states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code thiết kế phát hiện hoặc sửa error đảo pha tương đối của trạng thái tính toán.
**Grammar & collocations:** `phase-flip-code syndrome` — syndrome; `correct a Z error` — sửa error Z.
**Examples:** `The phase-flip code transformed a phase error into a measurable parity change.` → Code phase-flip biến phase error thành thay đổi parity đo được.
**Liên kết tiếng Hàn:** `위상 플립 코드`.

## 13. color code /ˈkʌlər koʊd/
**Part of speech:** noun
**Core meaning (English):** a topological code built on a colored lattice that supports multiple logical gate constructions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code topology xây trên lattice tô màu, hỗ trợ nhiều construction gate logic.
**Grammar & collocations:** `color-code lattice` — lattice; `implement a transversal operation` — thực hiện thao tác transversal.
**Examples:** `The color code used three face colors to organize its stabilizer checks.` → Code color dùng ba màu mặt để tổ chức stabilizer check.
**Liên kết tiếng Hàn:** `컬러 코드`.

## 14. toric code /ˈtɔːrɪk koʊd/
**Part of speech:** noun
**Core meaning (English):** a periodic topological code defined on a lattice with wraparound boundary conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code topology tuần hoàn trên lattice có điều kiện biên quấn vòng.
**Grammar & collocations:** `toric-code excitation` — excitation; `wrap a lattice boundary` — quấn biên lattice.
**Examples:** `The toric code turned string endpoints into detectable syndrome defects.` → Code toric biến endpoint string thành defect syndrome detect được.
**Liên kết tiếng Hàn:** `토릭 코드`.

## 15. concatenated code /kənˈkætəneɪtɪd koʊd/
**Part of speech:** noun
**Core meaning (English):** a code formed by encoding logical units with one code and then encoding those units again with another code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code tạo bằng cách encode đơn vị logic bằng một code rồi encode tiếp bằng code khác.
**Grammar & collocations:** `concatenated-code level` — level; `nest two correction schemes` — lồng hai scheme sửa lỗi.
**Examples:** `The concatenated code traded extra qubits for a lower logical error rate.` → Code nối đổi thêm qubit lấy logical error rate thấp hơn.
**Liên kết tiếng Hàn:** `연접 코드`.

## 16. fault-tolerant threshold /ˈfɔːlt ˈtɑːlərənt ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the physical error rate below which adding code distance can reduce the logical error rate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error rate vật lý thấp hơn mức mà tăng code distance sẽ giảm logical error rate.
**Grammar & collocations:** `fault-tolerant-threshold estimate` — ước tính; `operate below threshold` — vận hành dưới threshold.
**Examples:** `The device crossed the fault-tolerant threshold after calibration removed leakage.` → Thiết bị vượt threshold chịu lỗi sau khi calibration loại leakage.
**Liên kết tiếng Hàn:** `내결함성 임계값`.

## 17. error decoder /ˈerər dɪˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** an algorithm that infers the most likely physical error from a sequence of syndrome measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán suy error vật lý có khả năng nhất từ chuỗi syndrome measurement.
**Grammar & collocations:** `error-decoder latency` — latency; `infer a correction chain` — suy chuỗi correction.
**Examples:** `The error decoder converted the syndrome stream into a Pauli-frame update.` → Decoder error đổi syndrome stream thành update frame Pauli.
**Liên kết tiếng Hàn:** `오류 디코더`.

## 18. minimum-weight perfect matching /ˈmɪnəməm weɪt ˈpɜːrfɪkt ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** a decoding method that pairs syndrome defects with the lowest total correction weight.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp decode ghép các defect syndrome với tổng correction weight thấp nhất.
**Grammar & collocations:** `minimum-weight-perfect-matching decoder` — decoder; `pair syndrome endpoints` — ghép endpoint syndrome.
**Examples:** `Minimum-weight perfect matching connected the two defects with the shortest likely error chain.` → Matching hoàn hảo weight nhỏ nhất nối hai defect bằng error chain có khả năng ngắn nhất.
**Liên kết tiếng Hàn:** `최소 가중 완전 매칭`.

## 19. belief propagation decoder /bɪˈliːf ˌprɑːpəˈɡeɪʃən dɪˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** a decoder that passes probability messages along a factor graph to estimate likely errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decoder truyền message xác suất qua factor graph để ước tính error có khả năng.
**Grammar & collocations:** `belief-propagation-decoder iteration` — iteration; `update a message probability` — cập nhật xác suất message.
**Examples:** `The belief propagation decoder handled the sparse-check graph with low latency.` → Decoder belief propagation xử lý graph check thưa với latency thấp.
**Liên kết tiếng Hàn:** `신념 전파 디코더`.

## 20. neural decoder /ˈnʊrəl dɪˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** a learned decoder that maps syndrome patterns to correction decisions using a trained neural model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decoder học map pattern syndrome thành quyết định correction bằng model neural đã train.
**Grammar & collocations:** `neural-decoder training set` — tập train; `generalize across noise rates` — tổng quát qua các noise rate.
**Examples:** `The neural decoder improved on correlated noise after training with realistic syndrome data.` → Decoder neural cải thiện với noise tương quan sau khi train bằng syndrome data thực tế.
**Liên kết tiếng Hàn:** `신경 디코더`.

## Review in context

**Logical operator weight** and a **check operator** define how a code responds to errors; an **X stabilizer**, **Z stabilizer**, **plaquette operator**, and **star operator** produce each **syndrome bit**. **Data qubit** and **ancilla qubit** roles appear in a **repetition code**, **bit-flip code**, **phase-flip code**, **color code**, or **toric code**; a **concatenated code** can push performance beyond the **fault-tolerant threshold**. An **error decoder** may use **minimum-weight perfect matching**, a **belief propagation decoder**, or a **neural decoder**.

**Bản dịch tiếng Việt:** **Logical operator weight** và **check operator** quyết định code đáp ứng error thế nào; **X stabilizer**, **Z stabilizer**, **plaquette operator** và **star operator** tạo từng **syndrome bit**. Vai trò **data qubit** và **ancilla qubit** xuất hiện trong **repetition code**, **bit-flip code**, **phase-flip code**, **color code** hoặc **toric code**; **concatenated code** có thể đẩy hiệu năng qua **fault-tolerant threshold**. **Error decoder** có thể dùng **minimum-weight perfect matching**, **belief propagation decoder** hoặc **neural decoder**.
