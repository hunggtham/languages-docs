# C2 Vocabulary 103 — Quantum computing and error correction

This lesson follows a quantum computation from a physical qubit through algorithms, noise, and the engineering needed to make a useful result trustworthy.

Flow: **qubit → quantum gate → quantum circuit → measurement back-action → error-correcting code → fault tolerance → logical qubit → error syndrome → surface code → quantum advantage → amplitude amplification → phase estimation → variational algorithm → cryogenic control → crosstalk → readout fidelity → quantum annealing → depolarizing noise → leakage error → magic state**.

## 1. qubit /ˈkjuːbɪt/
**Part of speech:** noun
**Core meaning (English):** the basic unit of quantum information, represented by a physical system that can encode two basis states and their quantum combinations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bit lượng tử; hình dung một “công tắc” có thể mang trạng thái cơ sở hoặc một tổ hợp lượng tử của chúng cho đến khi được đo.
**Grammar & collocations:** `superconducting qubit` — qubit siêu dẫn; `initialize a qubit` — khởi tạo qubit; `qubit state` — trạng thái qubit.
**Examples:** `The processor initialized each qubit before running the circuit.` → Bộ xử lý khởi tạo từng qubit trước khi chạy mạch.
**Liên kết tiếng Hàn:** `큐비트` (kyubiteu) — qubit.

## 2. quantum gate /ˈkwɑntəm ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a reversible operation that changes the state of one or more qubits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cổng lượng tử; hình dung một thao tác có kiểm soát xoay hoặc kết hợp các trạng thái qubit mà vẫn giữ tính đảo ngược.
**Grammar & collocations:** `single-qubit gate` — cổng một qubit; `apply a quantum gate` — áp dụng cổng lượng tử; `gate fidelity` — độ trung thực của cổng.
**Examples:** `A controlled quantum gate linked the two registers.` → Một cổng lượng tử có điều khiển liên kết hai thanh ghi.
**Liên kết tiếng Hàn:** `양자 게이트` (yangja geiteu) — cổng lượng tử.

## 3. quantum circuit /ˈkwɑntəm ˈsɝkɪt/
**Part of speech:** noun
**Core meaning (English):** an ordered arrangement of quantum gates and measurements that implements a computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch lượng tử; hình dung sơ đồ thời gian trong đó các cổng tác động lên các qubit theo một thứ tự chính xác.
**Grammar & collocations:** `shallow quantum circuit` — mạch lượng tử nông; `compile a quantum circuit` — biên dịch mạch lượng tử; `circuit depth` — độ sâu mạch.
**Examples:** `The compiler shortened the quantum circuit to limit exposure to noise.` → Trình biên dịch rút ngắn mạch lượng tử để hạn chế phơi nhiễm với nhiễu.
**Liên kết tiếng Hàn:** `양자 회로` (yangja hoero) — mạch lượng tử.

## 4. measurement back-action /ˈmɛʒərmənt bæk ˈækʃən/
**Part of speech:** noun
**Core meaning (English):** the change that a quantum measurement itself produces in the state being measured.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tác động ngược của phép đo; hình dung việc nhìn vào hệ không chỉ đọc kết quả mà còn làm thay đổi trạng thái của nó.
**Grammar & collocations:** `measurement back-action noise` — nhiễu do tác động ngược của phép đo; `account for measurement back-action` — tính đến tác động ngược của phép đo.
**Examples:** `The experiment separated environmental noise from measurement back-action.` → Thí nghiệm tách nhiễu môi trường khỏi tác động ngược của phép đo.
**Liên kết tiếng Hàn:** `측정 역작용` (cheukjeong yeokjagyong) — tác động ngược của phép đo.

## 5. error-correcting code /ˈɛrər kəˈrɛktɪŋ koʊd/
**Part of speech:** noun
**Core meaning (English):** a scheme that encodes information redundantly so errors can be detected and corrected without directly reading the encoded information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã sửa lỗi; hình dung thông tin được trải ra nhiều qubit để một vài lỗi không phá hỏng toàn bộ thông điệp.
**Grammar & collocations:** `quantum error-correcting code` — mã sửa lỗi lượng tử; `encode data in a code` — mã hóa dữ liệu bằng một mã; `code distance` — khoảng cách mã.
**Examples:** `The error-correcting code protected the computation against occasional flips.` → Mã sửa lỗi bảo vệ phép tính trước những lần lật trạng thái thỉnh thoảng.
**Liên kết tiếng Hàn:** `오류 정정 부호` (oryu jeongjeong buho) — mã sửa lỗi.

## 6. fault tolerance /ˈfɔlt ˈtɑlərəns/
**Part of speech:** noun
**Core meaning (English):** the ability of a system to keep computing reliably even when some of its components fail or introduce errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng chịu lỗi; hình dung cỗ máy vẫn cho kết quả đáng tin dù một số linh kiện hoạt động không hoàn hảo.
**Grammar & collocations:** `fault-tolerant architecture` — kiến trúc chịu lỗi; `achieve fault tolerance` — đạt khả năng chịu lỗi; `fault-tolerance threshold` — ngưỡng chịu lỗi.
**Examples:** `The architecture must reach fault tolerance before large algorithms become practical.` → Kiến trúc phải đạt khả năng chịu lỗi trước khi các thuật toán lớn trở nên khả thi.
**Liên kết tiếng Hàn:** `내결함성` (naegyeolhamseong) — khả năng chịu lỗi.

## 7. logical qubit /ˈlɑdʒɪkəl ˈkjuːbɪt/
**Part of speech:** noun
**Core meaning (English):** an error-protected qubit encoded across multiple physical qubits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** qubit logic; hình dung một đơn vị thông tin được xây từ cả nhóm qubit vật lý để chống lỗi tốt hơn.
**Grammar & collocations:** `logical-qubit lifetime` — thời gian tồn tại của qubit logic; `encode a logical qubit` — mã hóa qubit logic; `logical error rate` — tỷ lệ lỗi logic.
**Examples:** `The demonstration extended the logical qubit's lifetime beyond that of its components.` → Trình diễn kéo dài thời gian tồn tại của qubit logic lâu hơn các thành phần của nó.
**Liên kết tiếng Hàn:** `논리 큐비트` (nolli kyubiteu) — qubit logic.

## 8. error syndrome /ˈɛrər ˈsɪndroʊm/
**Part of speech:** noun
**Core meaning (English):** a pattern of ancillary measurement results that identifies which type of error may have occurred.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hội chứng lỗi; hình dung một dấu vết gián tiếp báo cho bộ giải mã biết lỗi nằm ở dạng nào mà không đọc thẳng dữ liệu.
**Grammar & collocations:** `measure an error syndrome` — đo hội chứng lỗi; `syndrome extraction` — trích xuất hội chứng; `syndrome decoder` — bộ giải mã hội chứng.
**Examples:** `The decoder used the error syndrome to infer the most likely correction.` → Bộ giải mã dùng hội chứng lỗi để suy ra phép sửa có khả năng đúng nhất.
**Liên kết tiếng Hàn:** `오류 신드롬` (oryu sindeurom) — hội chứng lỗi.

## 9. surface code /ˈsɝfəs koʊd/
**Part of speech:** noun
**Core meaning (English):** a two-dimensional quantum error-correction code that arranges qubits on a surface and detects local errors through neighboring checks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã bề mặt; hình dung mạng qubit phẳng với các phép kiểm tra lân cận để phát hiện lỗi cục bộ.
**Grammar & collocations:** `surface-code lattice` — mạng tinh thể mã bề mặt; `surface-code threshold` — ngưỡng mã bề mặt; `implement a surface code` — triển khai mã bề mặt.
**Examples:** `The team improved the surface code by reducing errors at the lattice edges.` → Nhóm nghiên cứu cải thiện mã bề mặt bằng cách giảm lỗi ở các cạnh mạng.
**Liên kết tiếng Hàn:** `표면 부호` (pyomyeon buho) — mã bề mặt.

## 10. quantum advantage /ˈkwɑntəm ədˈvæntɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a demonstrated situation in which a quantum computer performs a useful task better than the best practical classical alternative.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ưu thế lượng tử; hình dung bằng chứng cụ thể rằng máy lượng tử giải quyết một nhiệm vụ có ích nhanh hơn hoặc chính xác hơn cách cổ điển tốt nhất.
**Grammar & collocations:** `claim quantum advantage` — tuyên bố ưu thế lượng tử; `demonstrate a quantum advantage` — chứng minh ưu thế lượng tử; `practical quantum advantage` — ưu thế lượng tử thực tiễn.
**Examples:** `A speedup on a toy benchmark is not by itself a practical quantum advantage.` → Tăng tốc trên một bài kiểm thử đồ chơi tự nó chưa phải là ưu thế lượng tử thực tiễn.
**Liên kết tiếng Hàn:** `양자 우위` (yangja uwi) — ưu thế lượng tử.

## 11. amplitude amplification /ˈæmplətuːd ˌæmpləfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a quantum technique that increases the probability amplitude of desired states through repeated interference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khuếch đại biên độ; hình dung giao thoa được lặp lại để làm nổi bật các trạng thái đúng trong một không gian tìm kiếm.
**Grammar & collocations:** `amplitude-amplification procedure` — quy trình khuếch đại biên độ; `use amplitude amplification` — dùng khuếch đại biên độ; `amplify marked states` — khuếch đại trạng thái được đánh dấu.
**Examples:** `The search routine used amplitude amplification to raise the chance of observing a marked item.` → Quy trình tìm kiếm dùng khuếch đại biên độ để tăng khả năng quan sát mục được đánh dấu.
**Liên kết tiếng Hàn:** `진폭 증폭` (jinpok jeungpok) — khuếch đại biên độ.

## 12. phase estimation /feɪz ˌɛstəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a quantum algorithmic procedure for estimating the phase associated with an eigenvalue of a unitary operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước lượng pha; hình dung suy ra “góc quay” ẩn của một phép biến đổi lượng tử từ các phép đo có tổ chức.
**Grammar & collocations:** `quantum phase estimation` — ước lượng pha lượng tử; `phase-estimation circuit` — mạch ước lượng pha; `run phase estimation` — chạy thuật toán ước lượng pha.
**Examples:** `Phase estimation can reveal an energy value encoded in a quantum evolution.` → Ước lượng pha có thể hé lộ một giá trị năng lượng được mã hóa trong quá trình tiến hóa lượng tử.
**Liên kết tiếng Hàn:** `위상 추정` (wisang chujeong) — ước lượng pha.

## 13. variational algorithm /ˌvɛriˈeɪʃənəl ˈælɡəˌrɪðəm/
**Part of speech:** noun
**Core meaning (English):** a hybrid quantum-classical algorithm that tunes parameters in a quantum circuit using a classical optimization loop.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán biến phân; hình dung máy cổ điển liên tục điều chỉnh tham số của mạch lượng tử để tìm cấu hình tốt hơn.
**Grammar & collocations:** `variational quantum algorithm` — thuật toán lượng tử biến phân; `variational ansatz` — dạng thử biến phân; `optimize circuit parameters` — tối ưu tham số mạch.
**Examples:** `The variational algorithm adjusted the circuit parameters after every batch of measurements.` → Thuật toán biến phân điều chỉnh tham số mạch sau mỗi lô phép đo.
**Liên kết tiếng Hàn:** `변분 알고리즘` (byeonbun algorijeum) — thuật toán biến phân.

## 14. cryogenic control /ˌkraɪoʊˈdʒɛnɪk kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** the generation, routing, and monitoring of control signals at extremely low temperatures near a quantum processor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều khiển lạnh sâu; hình dung hệ thống điện tử phải làm việc trong môi trường gần độ không tuyệt đối để điều khiển qubit.
**Grammar & collocations:** `cryogenic-control electronics` — điện tử điều khiển lạnh sâu; `integrate cryogenic control` — tích hợp điều khiển lạnh sâu; `cryogenic wiring` — dây dẫn lạnh sâu.
**Examples:** `Cryogenic control could reduce the number of cables entering the dilution refrigerator.` → Điều khiển lạnh sâu có thể giảm số dây cáp đi vào tủ lạnh pha loãng.
**Liên kết tiếng Hàn:** `극저온 제어` (geukjeoon jeeo) — điều khiển lạnh sâu.

## 15. crosstalk /ˈkrɔsˌtɔk/
**Part of speech:** noun
**Core meaning (English):** unwanted interaction in which a control signal or operation affects a neighboring channel or qubit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiễu xuyên kênh; hình dung tín hiệu dành cho một qubit vô tình “nói chen” vào qubit bên cạnh.
**Grammar & collocations:** `qubit crosstalk` — nhiễu xuyên kênh giữa các qubit; `mitigate crosstalk` — giảm nhiễu xuyên kênh; `crosstalk error` — lỗi do nhiễu xuyên kênh.
**Examples:** `Calibration reduced crosstalk between adjacent microwave channels.` → Hiệu chuẩn giảm nhiễu xuyên kênh giữa các kênh vi sóng liền kề.
**Liên kết tiếng Hàn:** `누화` (nu-hwa) — nhiễu xuyên kênh.

## 16. readout fidelity /ˈriːdaʊt fəˈdɛləti/
**Part of speech:** noun
**Core meaning (English):** the probability that a measurement reports a qubit's state correctly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trung thực đọc ra; hình dung mức đáng tin của câu trả lời khi thiết bị chuyển trạng thái qubit thành số đo.
**Grammar & collocations:** `high readout fidelity` — độ trung thực đọc ra cao; `readout-fidelity benchmark` — kiểm chuẩn độ trung thực đọc ra; `improve readout fidelity` — cải thiện độ trung thực đọc ra.
**Examples:** `The new resonator improved readout fidelity without lengthening the experiment.` → Bộ cộng hưởng mới cải thiện độ trung thực đọc ra mà không kéo dài thí nghiệm.
**Liên kết tiếng Hàn:** `판독 충실도` (pandok chungshildo) — độ trung thực đọc ra.

## 17. quantum annealing /ˈkwɑntəm əˈniːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a quantum optimization approach that evolves a system toward a low-energy solution of a problem encoded as an energy landscape.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tôi luyện lượng tử; hình dung hệ lượng tử dần tìm xuống một “thung lũng năng lượng” tương ứng với nghiệm tốt.
**Grammar & collocations:** `quantum-annealing processor` — bộ xử lý tôi luyện lượng tử; `use quantum annealing` — dùng tôi luyện lượng tử; `annealing schedule` — lịch tôi luyện.
**Examples:** `The logistics team tested quantum annealing on a constrained routing problem.` → Nhóm logistics thử tôi luyện lượng tử trên bài toán định tuyến có ràng buộc.
**Liên kết tiếng Hàn:** `양자 어닐링` (yangja eonilling) — tôi luyện lượng tử.

## 18. depolarizing noise /diːˈpoʊlərəˌzaɪŋ nɔɪz/
**Part of speech:** noun
**Core meaning (English):** a noise model that randomly replaces a quantum state with a more mixed state, erasing information without favoring one direction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiễu khử phân cực; hình dung trạng thái lượng tử bị làm “mờ đều” theo mọi hướng thay vì lệch về một lỗi cụ thể.
**Grammar & collocations:** `depolarizing-noise channel` — kênh nhiễu khử phân cực; `model depolarizing noise` — mô hình hóa nhiễu khử phân cực; `depolarizing error rate` — tỷ lệ lỗi khử phân cực.
**Examples:** `The simulation added depolarizing noise after each gate to test the decoder.` → Mô phỏng thêm nhiễu khử phân cực sau mỗi cổng để kiểm thử bộ giải mã.
**Liên kết tiếng Hàn:** `탈분극 잡음` (talbunggeuk jabeum) — nhiễu khử phân cực.

## 19. leakage error /ˈliːkɪdʒ ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** an error in which a qubit leaves its intended computational subspace and occupies an unwanted physical state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi rò trạng thái; hình dung qubit trượt ra ngoài “căn phòng” hai trạng thái mà mạch được thiết kế để điều khiển.
**Grammar & collocations:** `leakage-error detection` — phát hiện lỗi rò trạng thái; `remove leakage errors` — loại bỏ lỗi rò trạng thái; `leakage outside the computational subspace` — rò ra ngoài không gian tính toán.
**Examples:** `The reset pulse returned the leaked qubit to the computational subspace.` → Xung đặt lại đưa qubit bị rò trở về không gian tính toán.
**Liên kết tiếng Hàn:** `누설 오류` (nuseol oryu) — lỗi rò trạng thái.

## 20. magic state /ˈmædʒɪk steɪt/
**Part of speech:** noun
**Core meaning (English):** a specially prepared non-stabilizer quantum state used to extend a restricted gate set toward universal quantum computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái ma thuật; hình dung một tài nguyên đặc biệt giúp mạch vượt qua giới hạn của các cổng dễ thực hiện.
**Grammar & collocations:** `magic-state distillation` — chưng cất trạng thái ma thuật; `inject a magic state` — đưa trạng thái ma thuật vào mạch; `magic-state factory` — cụm tạo trạng thái ma thuật.
**Examples:** `The architecture reserved extra qubits for magic-state distillation.` → Kiến trúc dành thêm qubit cho việc chưng cất trạng thái ma thuật.
**Liên kết tiếng Hàn:** `매직 상태` (maejik sangtae) — trạng thái ma thuật.

## Review in context

A **qubit** is manipulated by a **quantum gate** inside a **quantum circuit**, but **measurement back-action** and physical noise can corrupt the result. An **error-correcting code** supports **fault tolerance** by encoding a **logical qubit** and extracting an **error syndrome**; a **surface code** is one prominent architecture. Researchers test whether a device offers **quantum advantage**, using tools such as **amplitude amplification**, **phase estimation**, and a **variational algorithm**. At the hardware level, **cryogenic control** must limit **crosstalk** and raise **readout fidelity**. Alternative approaches include **quantum annealing**, while simulations model **depolarizing noise** and **leakage error**. Universal designs may also rely on a carefully prepared **magic state**.

**Bản dịch tiếng Việt:**

Qubit được thao tác bằng cổng lượng tử trong một mạch lượng tử, nhưng tác động ngược của phép đo và nhiễu vật lý có thể làm hỏng kết quả. Mã sửa lỗi hỗ trợ khả năng chịu lỗi bằng cách mã hóa một qubit logic và trích xuất hội chứng lỗi; mã bề mặt là một kiến trúc nổi bật. Các nhà nghiên cứu kiểm tra xem thiết bị có tạo ra ưu thế lượng tử hay không, sử dụng những công cụ như khuếch đại biên độ, ước lượng pha và thuật toán biến phân. Ở cấp phần cứng, điều khiển lạnh sâu phải hạn chế nhiễu xuyên kênh và nâng độ trung thực đọc ra. Những cách tiếp cận khác gồm tôi luyện lượng tử, trong khi mô phỏng mô hình hóa nhiễu khử phân cực và lỗi rò trạng thái. Các thiết kế phổ dụng cũng có thể cần một trạng thái ma thuật được chuẩn bị cẩn thận.
