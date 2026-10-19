# C1 Vocabulary 03 — Quantum error correction, planar surface codes, and fault-tolerant threshold theorems

Welcome to Lesson 03 of our C1 Advanced Quantum Computing Vocabulary series. This lesson explores advanced architectural fault tolerance, planar surface codes, stabilizer measurements, lattice surgery, and error suppression protocols required to scale physical qubits into robust logical architectures.

---

## 1. quantum error correction code
- **IPA**: /ˈkwɑntəm ˈɛrər kəˈrɛkʃən koʊd/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); thường làm chủ ngữ, tân ngữ hoặc bổ ngữ trong các bài báo kỹ thuật về kiến trúc lượng tử.
- **Core meaning — English**: A set of algorithms and physical redundancy structures designed to protect quantum information from decoherence and operational noise by encoding logical information across multiple physical qubits.
- **Core meaning & mental image — Tiếng Việt**: Mã sửa lỗi lượng tử — Hình dung một hệ thống lưới an toàn đan xen nhiều sợi cáp mỏng để bảo vệ một sợi cáp chính khỏi bị đứt gãy.
- **Grammar & collocations**:
  - `implement a quantum error correction code` (triển khai mã sửa lỗi lượng tử)
  - `fault-tolerant quantum error correction code` (mã sửa lỗi lượng tử chịu lỗi)
  - `overhead of a quantum error correction code` (chi phí vận hành của mã sửa lỗi lượng tử)
- **Register & nuance**: Formal, academic, and highly technical. Used extensively in quantum hardware design discussions.
- **Examples**:
  - *American English*: Developing an efficient **quantum error correction code** is essential for scaling noisy intermediate-scale quantum processors into fault-tolerant machines.
  - *Vietnamese*: Phát triển một mã sửa lỗi lượng tử hiệu quả là điều cốt yếu để mở rộng quy mô các bộ xử lý lượng tử trung gian có tiếng ồn thành các cỗ máy chịu lỗi.
- **Liên kết tiếng Hàn**: 양자 오류 정정 부호 (量子誤謬訂正符號) — Hệ thống mã hóa bảo vệ dữ liệu lượng tử khỏi các tác nhân gây nhiễu môi trường.

## 2. planar surface code lattice
- **IPA**: /ˈplænər ˈsɜrfɪs koʊd ˈlætɪs/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); đứng ở vị trí chủ ngữ hoặc tân ngữ trong các mô tả về cấu trúc chip lượng tử.
- **Core meaning — English**: A two-dimensional grid architecture of physical qubits where data and measurement qubits alternate, allowing local stabilizer measurements to detect errors robustly.
- **Core meaning & mental image — Tiếng Việt**: Mạng lưới mã bề mặt phẳng — Hình dung một tấm lưới ô vuông trên mặt bàn, nơi mỗi giao điểm là một qubit dữ liệu hoặc qubit đo lường kiểm tra.
- **Grammar & collocations**:
  - `construct a planar surface code lattice` (xây dựng mạng lưới mã bề mặt phẳng)
  - `fault-tolerant planar surface code lattice` (mạng lưới mã bề mặt phẳng chịu lỗi)
  - `topological planar surface code lattice` (mạng lưới mã bề mặt phẳng topo)
- **Register & nuance**: Technical and architectural. Standard terminology in physical hardware layout design.
- **Examples**:
  - *American English*: The cryogenic processor layout relies on a heavy **planar surface code lattice** to monitor phase and bit flips.
  - *Vietnamese*: Sơ đồ bộ xử lý đông lạnh dựa vào mạng lưới mã bề mặt phẳng dày đặc để giám sát các lỗi lật pha và lật bit.
- **Liên kết tiếng Hàn**: 평면 표면 부호 격자 (平面表面符號格子) — Cấu trúc lưới hai chiều để kiểm soát lỗi lượng tử cục bộ.

## 3. fault-tolerant threshold theorem
- **IPA**: /ˈfɔlt ˈtɛrələnt ˈθrɛʃˌhoʊld ˈθɪrəm/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong các định lý toán học-lượng tử.
- **Core meaning — English**: A foundational theorem stating that arbitrarily long quantum computations can be performed reliably if the physical error rate per gate falls below a specific mathematical limit.
- **Core meaning & mental image — Tiếng Việt**: Định lý ngưỡng chịu lỗi — Hình dung một con đập chắn nước có vạch giới hạn an toàn; chỉ cần mực nước (tỷ lệ lỗi) dưới vạch đó thì đập không bao giờ vỡ.
- **Grammar & collocations**:
  - `prove the fault-tolerant threshold theorem` (chứng minh định lý ngưỡng chịu lỗi)
  - `under the fault-tolerant threshold theorem` (dưới định lý ngưỡng chịu lỗi)
  - `fault-tolerant threshold theorem bound` (giới hạn của định lý ngưỡng chịu lỗi)
- **Register & nuance**: Theoretical and rigorous. Used in quantum information theory proofs.
- **Examples**:
  - *American English*: According to the **fault-tolerant threshold theorem**, error rates below one percent allow scalable quantum computing.
  - *Vietnamese*: Theo định lý ngưỡng chịu lỗi, tỷ lệ lỗi dưới một phần trăm cho phép tính toán lượng tử có thể mở rộng.
- **Liên kết tiếng Hàn**: 내고장성 임계값 정리 (耐故障性臨界값定理) — Định lý toán học xác định giới hạn tỷ lệ lỗi tối đa để tính toán lượng tử chính xác.

## 4. logical qubit redundancy mapping
- **IPA**: /ˈlɑdʒɪkəl ˈkjubɪt rɪˈdʌndənsi ˈmæpɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); dùng làm tân ngữ hoặc bổ ngữ trong cấu trúc phần mềm điều khiển lượng tử.
- **Core meaning — English**: The structural assignment of a single fault-tolerant logical state across dozens or hundreds of noisy physical qubits.
- **Core meaning & mental image — Tiếng Việt**: Phân bổ dư thừa qubit logic — Hình dung việc phân tán một thông điệp quan trọng ra nhiều người đưa thư để nếu một người bị bắt, thông điệp vẫn nguyên vẹn.
- **Grammar & collocations**:
  - `design logical qubit redundancy mapping` (thiết kế phân bổ dư thừa qubit logic)
  - `complex logical qubit redundancy mapping` (phân bổ dư thừa qubit logic phức tạp)
  - `optimize logical qubit redundancy mapping` (tối ưu hóa phân bổ dư thừa qubit logic)
- **Register & nuance**: Specialized architectural terminology.
- **Examples**:
  - *American English*: Efficient **logical qubit redundancy mapping** minimizes physical hardware overhead while ensuring error protection.
  - *Vietnamese*: Việc phân bổ dư thừa qubit logic hiệu quả giúp giảm thiểu chi phí phần cứng vật lý trong khi vẫn đảm bảo bảo vệ lỗi.
- **Liên kết tiếng Hàn**: 논리 큐비트 중복 매핑 (論理큐비트重複매핑) — Quy trình ánh xạ trạng thái logic lên nhiều qubit vật lý để dự phòng.

## 5. physical qubit error rate
- **IPA**: /ˈfɪzɪkəl ˈkjubɪt ˈɛrər reɪt/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); thường làm chủ ngữ hoặc tân ngữ khi đo lường hiệu năng phần cứng.
- **Core meaning — English**: The statistical probability that a physical quantum bit will experience a bit-flip, phase-flip, or leakage error during a single gate operation.
- **Core meaning & mental image — Tiếng Việt**: Tỷ lệ lỗi qubit vật lý — Hình dung tỷ lệ rơi vỡ của các kiện hàng trên dây chuyền sản xuất trong mỗi phút hoạt động.
- **Grammar & collocations**:
  - `reduce the physical qubit error rate` (giảm tỷ lệ lỗi qubit vật lý)
  - `low physical qubit error rate` (tỷ lệ lỗi qubit vật lý thấp)
  - `threshold physical qubit error rate` (tỷ lệ lỗi qubit vật lý ngưỡng)
- **Register & nuance**: Engineering and experimental physics context.
- **Examples**:
  - *American English*: Superconducting architectures strive to drive the **physical qubit error rate** down below the fault-tolerance threshold.
  - *Vietnamese*: Các kiến trúc siêu dẫn nỗ lực hạ tỷ lệ lỗi qubit vật lý xuống dưới ngưỡng chịu lỗi.
- **Liên kết tiếng Hàn**: 물리 큐비트 오류율 (物理큐비트誤謬率) — Tỷ lệ xác suất xảy ra lỗi trên các phần tử qubit vật lý.

## 6. syndrome measurement stabilizer
- **IPA**: /ˈsɪndroʊm ˈmɛʒərmənt ˈsteɪbəˌlaɪzər/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong phân tích thuật toán sửa lỗi.
- **Core meaning — English**: A non-destructive auxiliary measurement that detects error syndromes in a quantum code without collapsing the superposition of the encoded logical data.
- **Core meaning & mental image — Tiếng Việt**: Bộ ổn định đo lường hội chứng — Hình dung chiếc máy quét X-quang kiểm tra hành lý mà không cần mở va-li ra xem xét bên trong.
- **Grammar & collocations**:
  - `perform a syndrome measurement stabilizer` (thực hiện phép đo ổn định hội chứng)
  - `stabilizer syndrome measurement cycle` (chu kỳ đo lường ổn định hội chứng)
  - `extract syndrome measurement stabilizer` (trích xuất bộ ổn định đo lường hội chứng)
- **Register & nuance**: Highly technical, quantum error correction jargon.
- **Examples**:
  - *American English*: Continuous **syndrome measurement stabilizer** routines run in the background to detect decoherence events instantly.
  - *Vietnamese*: Các quyroutine bộ ổn định đo lường hội chứng liên tục chạy ở chế độ nền để phát hiện ngay lập tức các sự kiện mất kết hợp.
- **Liên kết tiếng Hàn**: 신드롬 측정 안정화자 (신드롬測定安定化子) — Phép đo bổ trợ phát hiện lỗi mà không làm mất trạng thái lượng tử.

## 7. bit-flip and phase-flip error
- **IPA**: /ˈbɪt flɪp ænd ˈfeɪz flɪp ˈɛrər/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm tân ngữ hoặc chủ ngữ trong lý thuyết nhiễu lượng tử.
- **Core meaning — English**: The two primary archetypal quantum noise processes where a $|0\rangle$ and $|1\rangle$ state is inverted, or the relative phase between basis states is corrupted.
- **Core meaning & mental image — Tiếng Việt**: Lỗi lật bit và lật pha — Hình dung một chiếc công tắc điện bị đảo ngược chiều (lật bit) hoặc sóng âm bị lệch pha (lật pha).
- **Grammar & collocations**:
  - `correct bit-flip and phase-flip errors` (sửa các lỗi lật bit và lật pha)
  - `suppress bit-flip and phase-flip errors` (ức chế các lỗi lật bit và lật pha)
  - `combined bit-flip and phase-flip error` (lỗi lật bit và lật pha kết hợp)
- **Register & nuance**: Standard physics terminology in quantum information science.
- **Examples**:
  - *American English*: Surface codes are exceptionally powerful because they correct both **bit-flip and phase-flip errors** simultaneously.
  - *Vietnamese*: Mã bề mặt cực kỳ mạnh mẽ vì chúng sửa đồng thời cả lỗi lật bit và lỗi lật pha.
- **Liên kết tiếng Hàn**: 비트 플립 및 위상 플립 오류 (bit flip 및 位相 flip 誤謬) — Hai dạng lỗi cơ bản trong hệ thống thông tin lượng tử (lật trạng thái và lệch pha).

## 8. topological quantum defect
- **IPA**: /ˌtɑpəˈlɑdʒɪkəl ˈkwɑntəm ˈdifɛkt/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); đứng ở vị trí chủ ngữ hoặc bổ ngữ trong vật lý chất rắn.
- **Core meaning — English**: An intentional disruption or puncture in a topological lattice used to store quantum information or manipulate non-Abelian anyons.
- **Core meaning & mental image — Tiếng Việt**: Khiếm khuyết lượng tử topo — Hình dung một nút thắt hoặc lỗ thủng có chủ đích trên tấm vải, tạo ra tính chất vật lý đặc biệt tại vị trí đó.
- **Grammar & collocations**:
  - `create a topological quantum defect` (tạo ra khiếm khuyết lượng tử topo)
  - `manipulate topological quantum defects` (thao tác các khiếm khuyết lượng tử topo)
  - `braid topological quantum defects` (bện các khiếm khuyết lượng tử topo)
- **Register & nuance**: Advanced academic physics and topological quantum computing context.
- **Examples**:
  - *American English*: By moving **topological quantum defects** around each other, researchers can perform fault-tolerant quantum logic gates.
  - *Vietnamese*: Bằng cách di chuyển các khiếm khuyết lượng tử topo vòng quanh nhau, các nhà nghiên cứu có thể thực hiện các cổng logic lượng tử chịu lỗi.
- **Liên kết tiếng Hàn**: 위상학적 양자 결함 (位相學的量子缺陷) — Điểm khuyết tật hoặc lỗ hỗng có cấu trúc topo dùng trong tính toán lượng tử.

## 9. minimum weight perfect matching
- **IPA**: /ˈmɪnəməm weɪt ˈpɜrfɪkt ˈmætʃɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong các thuật toán giải mã lỗi.
- **Core meaning — English**: A graph-theoretic algorithmic technique used by quantum decoders to pair up error syndromes with the most probable physical error chains.
- **Core meaning & mental image — Tiếng Việt**: Khớp cặp hoàn hảo trọng số tối thiểu — Hình dung bài toán tìm cách nối các điểm sự cố với nhau bằng tổng độ dài đường dây ngắn nhất có thể.
- **Grammar & collocations**:
  - `execute minimum weight perfect matching` (thực hiện khớp cặp hoàn hảo trọng số tối thiểu)
  - `minimum weight perfect matching decoder` (bộ giải mã khớp cặp hoàn hảo trọng số tối thiểu)
  - `efficient minimum weight perfect matching` (khớp cặp hoàn hảo trọng số tối thiểu hiệu quả)
- **Register & nuance**: Computational mathematics and quantum decoder engineering.
- **Examples**:
  - *American English*: The decoder uses **minimum weight perfect matching** to determine the most likely error path across the surface lattice.
  - *Vietnamese*: Bộ giải mã sử dụng phương pháp khớp cặp hoàn hảo trọng số tối thiểu để xác định đường đi lỗi có khả năng xảy ra cao nhất trên lưới bề mặt.
- **Liên kết tiếng Hàn**: 최소 가중치 완전 매칭 (最小加重値完全매칭) — Thuật toán đồ thị tìm kiếm cách ghép nối tối ưu các hội chứng lỗi.

## 10. lattice surgery logical gate
- **IPA**: /ˈlætɪs ˈsɜrdʒəri ˈlɑdʒɪkəl geɪt/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); dùng làm chủ ngữ hoặc tân ngữ trong các bài báo kiến trúc máy tính lượng tử.
- **Core meaning — English**: A technique for performing entangling operations and logical gates between surface-code patches by merging and splitting their boundaries.
- **Core meaning & mental image — Tiếng Việt**: Cổng logic phẫu thuật lưới — Hình dung việc ghép nối và tách rời biên của hai mảnh vải y tế để kết nối các mạch máu mà không cần khâu vá phức tạp.
- **Grammar & collocations**:
  - `implement lattice surgery logical gates` (triển khai các cổng logic phẫu thuật lưới)
  - `lattice surgery logical gate protocol` (giao thức cổng logic phẫu thuật lưới)
  - `perform lattice surgery logical gates` (thực hiện các cổng logic phẫu thuật lưới)
- **Register & nuance**: Cutting-edge architectural quantum computing terminology.
- **Examples**:
  - *American English*: Instead of using traditional transversal gates, large-scale architectures rely on **lattice surgery logical gates** for inter-patch entanglement.
  - *Vietnamese*: Thay vì sử dụng các cổng xuyên tâm truyền thống, các kiến trúc quy mô lớn dựa vào các cổng logic phẫu thuật lưới để tạo vướng víu giữa các vùng.
- **Liên kết tiếng Hàn**: 격자 수술 논리 게이트 (格子手術論理게이트) — Kỹ thuật thực hiện phép toán lượng tử bằng cách sáp nhập và phân tách biên của các mảng lưới.

## 11. transversal quantum operation
- **IPA**: /trænzˈvɜrsəl ˈkwɑntəm ˌɑpəˈreɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong tài liệu kỹ thuật lượng tử.
- **Core meaning — English**: A gate applied independently to corresponding physical qubits across multiple code blocks, preventing error propagation between logical components.
- **Core meaning & mental image — Tiếng Việt**: Phép toán lượng tử xuyên tâm — Hình dung việc đồng thời ấn nhiều phím trên các hàng bàn phím song song một cách độc lập.
- **Grammar & collocations**:
  - `execute a transversal quantum operation` (thực hiện phép toán lượng tử xuyên tâm)
  - `fault-tolerant transversal quantum operation` (phép toán lượng tử xuyên tâm chịu lỗi)
  - `transversal quantum gate operation` (phép toán cổng lượng tử xuyên tâm)
- **Register & nuance**: Technical, formal quantum circuit design context.
- **Examples**:
  - *American English*: Clifford group gates can be implemented naturally as a **transversal quantum operation** within CSS codes.
  - *Vietnamese*: Các cổng nhóm Clifford có thể được thực hiện một cách tự nhiên như một phép toán lượng tử xuyên tâm trong mã CSS.
- **Liên kết tiếng Hàn**: 횡단 양자 연산 (橫斷量子演算) — Thao tác lượng tử áp dụng độc lập lên từng cặp qubit tương ứng giữa các khối mã.

## 12. magic state distillation circuit
- **IPA**: /ˈmædʒɪk steɪt ˈdɪstəˌleɪʃən ˈsɜrkɪt/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong thiết kế phần cứng lượng tử.
- **Core meaning — English**: A noisy quantum circuit that takes multiple low-fidelity non-Clifford states and purifies them into a single high-fidelity magic state required for universal quantum computing.
- **Core meaning & mental image — Tiếng Việt**: Mạch chưng cất trạng thái ma thuật — Hình dung một hệ thống lọc nước nhiều tầng biến nước đục thành nước tinh khiết cao cấp.
- **Grammar & collocations**:
  - `build a magic state distillation circuit` (xây dựng mạch chưng cất trạng thái ma thuật)
  - `overhead of magic state distillation circuits` (chi phí của các mạch chưng cất trạng thái ma thuật)
  - `optimize magic state distillation circuits` (tối ưu hóa mạch chưng cất trạng thái ma thuật)
- **Register & nuance**: Specialized subfield of fault-tolerant quantum computation.
- **Examples**:
  - *American English*: Because universal gates cannot be done transversally alone, a **magic state distillation circuit** is required to supply non-Clifford resources.
  - *Vietnamese*: Vì các cổng phổ thông không thể thực hiện chỉ bằng xuyên tâm, mạch chưng cất trạng thái ma thuật là cần thiết để cung cấp tài nguyên phi-Clifford.
- **Liên kết tiếng Hàn**: 매직 상태 증류 회로 (magic 狀態蒸留回路) — Mạch tinh chế các trạng thái lượng tử có độ ồn thành trạng thái chất lượng cao.

## 13. Clifford group quantum gate
- **IPA**: /ˈklɪfərd grup ˈkwɑntəm geɪt/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); đứng ở vị trí tân ngữ hoặc chủ ngữ trong lý thuyết mạch lượng tử.
- **Core meaning — English**: A set of standard quantum gates (such as CNOT, Hadamard, and Phase gates) that map Pauli operators to Pauli operators and can be simulated efficiently on classical computers.
- **Core meaning & mental image — Tiếng Việt**: Cổng lượng tử nhóm Clifford — Hình dung một tập hợp các phép biến đổi hình học cơ bản có thể dễ dàng mô phỏng bằng máy tính cổ điển.
- **Grammar & collocations**:
  - `implement Clifford group quantum gates` (triển khai các cổng lượng tử nhóm Clifford)
  - `Clifford group quantum gate set` (tập hợp cổng lượng tử nhóm Clifford)
  - `efficient Clifford group quantum gate` (cổng lượng tử nhóm Clifford hiệu quả)
- **Register & nuance**: Standard quantum computing terminology.
- **Examples**:
  - *American English*: While **Clifford group quantum gates** are easy to protect fault-tolerantly, they are insufficient by themselves for universal quantum computing.
  - *Vietnamese*: Mặc dù các cổng lượng tử nhóm Clifford rất dễ bảo vệ theo kiểu chịu lỗi, bản thân chúng vẫn chưa đủ để tính toán lượng tử vạn năng.
- **Liên kết tiếng Hàn**: 클리퍼드 그룹 양자 게이트 (Clifford group 量子gate) — Tập hợp các cổng lượng tử chuẩn dễ mô phỏng và dễ bảo vệ lỗi.

## 14. non-Clifford T-gate resource
- **IPA**: /nɑn ˈklɪfərd ti-geɪt ˈrisɔrs/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); dùng làm tân ngữ trong quản lý tài nguyên phần cứng lượng tử.
- **Core meaning — English**: A specialized quantum gate (the $\pi/8$ rotation) that completes universal quantum logic but is exceptionally expensive to execute fault-tolerantly.
- **Core meaning & mental image — Tiếng Việt**: Tài nguyên cổng T phi-Clifford — Hình dung một nguyên liệu hiếm hoi và đắt đỏ cần thiết để hoàn thiện một sản phẩm cao cấp.
- **Grammar & collocations**:
  - `consume non-Clifford T-gate resources` (tiêu thụ tài nguyên cổng T phi-Clifford)
  - `expensive non-Clifford T-gate resource` (tài nguyên cổng T phi-Clifford tốn kém)
  - `manage non-Clifford T-gate resources` (quản lý tài nguyên cổng T phi-Clifford)
- **Register & nuance**: Advanced quantum algorithmic and hardware architecture context.
- **Examples**:
  - *American English*: Minimizing the consumption of **non-Clifford T-gate resources** is a primary objective in quantum algorithm optimization.
  - *Vietnamese*: Giảm thiểu việc tiêu thụ tài nguyên cổng T phi-Clifford là mục tiêu chính trong việc tối ưu hóa thuật toán lượng tử.
- **Liên kết tiếng Hàn**: 비클리퍼드 T 게이트 자원 (non-Clifford T gate 資源) — Cổng quay pha T đắt đỏ cần thiết để đạt tính vạn năng lượng tử.

## 15. quantum decoder algorithmic latency
- **IPA**: /ˈkwɑntəm dɪˈkoʊdər ˌælgəˈrɪðmɪk ˈleɪtənsi/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong phân tích hiệu suất thời gian thực.
- **Core meaning — English**: The processing delay incurred by classical decoding algorithms when calculating error corrections from raw stabilizer measurement data.
- **Core meaning & mental image — Tiếng Việt**: Độ trễ thuật toán bộ giải mã lượng tử — Hình dung khoảng thời gian máy tính cổ điển phải suy nghĩ để tìm cách sửa lỗi trước khi bước xử lý tiếp theo diễn ra.
- **Grammar & collocations**:
  - `reduce quantum decoder algorithmic latency` (giảm độ trễ thuật toán bộ giải mã lượng tử)
  - `high quantum decoder algorithmic latency` (độ trễ thuật toán bộ giải mã lượng tử cao)
  - `real-time quantum decoder algorithmic latency` (độ trễ thuật toán bộ giải mã lượng tử thời gian thực)
- **Register & nuance**: High-performance computing and quantum control systems context.
- **Examples**:
  - *American English*: High **quantum decoder algorithmic latency** can stall the execution pipeline of a real-time fault-tolerant quantum processor.
  - *Vietnamese*: Độ trễ thuật toán bộ giải mã lượng tử cao có thể làm đình trệ luồng thực thi của bộ xử lý lượng tử chịu lỗi thời gian thực.
- **Liên kết tiếng Hàn**: 양자 디코더 알고리즘 지연 (量子decoder algorithm 遲延) — Thời gian xử lý của thuật toán giải mã lỗi cổ điển trong hệ thống lượng tử.

## 16. continuous stabilizer readout
- **IPA**: /kənˈtɪnyuəs ˈsteɪbəˌlaɪzər ˈriˌaʊt/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong các bài báo đo lường phần cứng.
- **Core meaning — English**: The uninterrupted measurement of parity checks on physical qubit arrays to monitor noise evolution without interrupting computation.
- **Core meaning & mental image — Tiếng Việt**: Đọc bộ ổn định liên tục — Hình dung việc gắn cảm biến theo dõi nhịp tim liên tục 24/7 không gián đoạn.
- **Grammar & collocations**:
  - `perform continuous stabilizer readout` (thực hiện đọc bộ ổn định liên tục)
  - `system for continuous stabilizer readout` (hệ thống đọc bộ ổn định liên tục)
  - `enable continuous stabilizer readout` (cho phép đọc bộ ổn định liên tục)
- **Register & nuance**: Advanced experimental quantum physics terminology.
- **Examples**:
  - *American English*: Implementing **continuous stabilizer readout** allows hardware controllers to catch sudden decoherence spikes immediately.
  - *Vietnamese*: Việc thực hiện đọc bộ ổn định liên tục cho phép bộ điều khiển phần cứng bắt được các đỉnh suy giảm kết hợp đột ngột ngay lập tức.
- **Liên kết tiếng Hàn**: 연속 안정화자 판독 (連續安定化子判讀) — Quá trình đọc trạng thái ổn định liên tục để giám sát nhiễu phần cứng.

## 17. ancilla qubit measurement cycle
- **IPA**: /ænˈsɪlə ˈkjubɪt ˈmɛʒərmənt ˈsaɪkəl/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong mô tả chu kỳ đồng hồ lượng tử.
- **Core meaning — English**: The periodic temporal window dedicated to resetting, entangling, and reading out auxiliary qubits used in error syndrome extraction.
- **Core meaning & mental image — Tiếng Việt**: Chu kỳ đo lường qubit phụ trợ — Hình dung khoảng thời gian định kỳ mà nhân viên kiểm tra đi vòng quanh nhà máy để ghi chép các chỉ số an toàn.
- **Grammar & collocations**:
  - `complete an ancilla qubit measurement cycle` (hoàn thành chu kỳ đo lường qubit phụ trợ)
  - `fast ancilla qubit measurement cycle` (chu kỳ đo lường qubit phụ trợ nhanh)
  - `ancilla qubit measurement cycle duration` (thời lượng chu kỳ đo lường qubit phụ trợ)
- **Register & nuance**: Experimental quantum hardware timing context.
- **Examples**:
  - *American English*: Each **ancilla qubit measurement cycle** must be completed within microseconds to outpace thermal decoherence rates.
  - *Vietnamese*: Mỗi chu kỳ đo lường qubit phụ trợ phải được hoàn thành trong vòng micro giây để vượt qua tốc độ suy giảm kết hợp nhiệt.
- **Liên kết tiếng Hàn**: 보조 큐비트 측정 주기 (補助큐비트測定週期) — Chu kỳ thời gian dùng để đo đạc các qubit phụ trợ trích xuất hội chứng lỗi.

## 18. decoherence error propagation
- **IPA**: /ˌdikɑˈhɪrəns ˈɛrər ˌprɑpəˈgeɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong phân tích độ tin cậy mạch.
- **Core meaning — English**: The cascading spread of physical errors through multi-qubit entangling gates, transforming a single isolated fault into a catastrophic cluster of errors.
- **Core meaning & mental image — Tiếng Việt**: Sự lan truyền lỗi mất kết hợp — Hình dung hiệu ứng domino khi một quân bài đổ sụp làm kéo theo hàng loạt quân bài khác bên cạnh.
- **Grammar & collocations**:
  - `prevent decoherence error propagation` (ngăn chặn sự lan truyền lỗi mất kết hợp)
  - `mitigate decoherence error propagation` (giảm nhẹ sự lan truyền lỗi mất kết hợp)
  - `rapid decoherence error propagation` (sự lan truyền lỗi mất kết hợp nhanh chóng)
- **Register & nuance**: Formal physics and reliability engineering vocabulary.
- **Examples**:
  - *American English*: Fault-tolerant designs incorporate check mechanisms specifically to halt **decoherence error propagation** across adjacent data blocks.
  - *Vietnamese*: Các thiết kế chịu lỗi tích hợp các cơ chế kiểm tra đặc biệt nhằm chặn đứng sự lan truyền lỗi mất kết hợp qua các khối dữ liệu lân cận.
- **Liên kết tiếng Hàn**: 결어긋남 오류 전파 (결어긋남誤謬傳播) — Hiện tượng lỗi lan truyền dây chuyền từ qubit này sang qubit khác qua các cổng vướng víu.

## 19. fault-tolerant quantum architecture
- **IPA**: /ˈfɔlt ˈtɛrələnt ˈkwɑntəm ˈɑrkəˌtɛkʧər/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong các báo cáo chiến lược công nghệ.
- **Core meaning — English**: A comprehensive hardware and software design framework capable of executing arbitrarily complex algorithms despite imperfect physical components.
- **Core meaning & mental image — Tiếng Việt**: Kiến trúc lượng tử chịu lỗi — Hình dung một tòa nhà chọc trời được thiết kế hệ thống chống động đất kiên cố dù vật liệu xây dựng có vài vết nứt nhỏ.
- **Grammar & collocations**:
  - `build a fault-tolerant quantum architecture` (xây dựng kiến trúc lượng tử chịu lỗi)
  - `scalable fault-tolerant quantum architecture` (kiến trúc lượng tử chịu lỗi có thể mở rộng)
  - `design of fault-tolerant quantum architectures` (thiết kế các kiến trúc lượng tử chịu lỗi)
- **Register & nuance**: High-level engineering, industrial, and academic context.
- **Examples**:
  - *American English*: Commercializing utility-scale quantum computers requires moving from noisy prototypes to a fully realized **fault-tolerant quantum architecture**.
  - *Vietnamese*: Thương mại hóa máy tính lượng tử quy mô thương mại đòi hỏi việc chuyển đổi từ các nguyên mẫu nhiều tiếng ồn sang kiến trúc lượng tử chịu lỗi hoàn thiện.
- **Liên kết tiếng Hàn**: 내고장성 양자 아키텍처 (耐故障性量子architecture) — Khung thiết kế phần cứng và phần mềm toàn diện có khả năng chống chịu lỗi vật lý.

## 20. braided anyon code space
- **IPA**: /ˈbreɪdɪd ˈæniˌɑn koʊd speɪs/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); đứng ở vị trí tân ngữ trong vật lý lý thuyết lượng tử.
- **Core meaning — English**: A protected subspace of topological quantum states where quantum information is encoded in the braiding trajectories of quasiparticles.
- **Core meaning & mental image — Tiếng Việt**: Không gian mãany on bện — Hình dung việc bện các sợi dây thừng với nhau sao cho hình dạng nút thắt lưu giữ thông tin an toàn trước va đập bên ngoài.
- **Grammar & collocations**:
  - `encode information in a braided anyon code space` (mã hóa thông tin trong không gian mã anyon bện)
  - `topological braided anyon code space` (không gian mã anyon bện topo)
  - `manipulate a braided anyon code space` (thao tác không gian mã anyon bện)
- **Register & nuance**: Highly specialized topological quantum computing terminology.
- **Examples**:
  - *American English*: Topological quantum memory stores fragile states inside a **braided anyon code space** where local noise cannot corrupt them.
  - *Vietnamese*: Bộ nhớ lượng tử topo lưu trữ các trạng thái mong manh bên trong không gian mã anyon bện, nơi tiếng ồn cục bộ không thể làm hỏng chúng.
- **Liên kết tiếng Hàn**: 믜어내어진 애니온 부호 공간 (braided anyon 符號空間) — Không gian mã hóa dựa trên quỹ đạo bện của các hạt giả anyon.

## 21. threshold error probability bound
- **IPA**: /ˈθrɛʃˌhoʊld ˈɛrər ˌprɑbəˈbɪlɪti baʊnd/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong phân tích toán học.
- **Core meaning — English**: The rigorous upper limit on physical gate error rates proven to guarantee successful error suppression under concatenated or surface codes.
- **Core meaning & mental image — Tiếng Việt**: Giới hạn xác suất lỗi ngưỡng — Hình dung cột mốc tốc độ tối đa trên đường cao tốc; vượt qua mức đó là mất kiểm soát an toàn.
- **Grammar & collocations**:
  - `calculate the threshold error probability bound` (tính toán giới hạn xác suất lỗi ngưỡng)
  - `strict threshold error probability bound` (giới hạn xác suất lỗi ngưỡng ngặt nghèo)
  - `exceed the threshold error probability bound` (vượt quá giới hạn xác suất lỗi ngưỡng)
- **Register & nuance**: Mathematical physics and formal theory context.
- **Examples**:
  - *American English*: Mathematical physicists constantly work to raise the **threshold error probability bound** to ease hardware manufacturing tolerances.
  - *Vietnamese*: Các nhà vật lý toán học liên tục nỗ lực nâng cao giới hạn xác suất lỗi ngưỡng để nới lỏng dung sai chế tạo phần cứng.
- **Liên kết tiếng Hàn**: 임계값 오류 확률 한계 (臨界값誤謬確率限界) — Giới hạn trên toán học của xác suất lỗi đảm bảo sửa lỗi thành công.

## 22. quantum parity measurement
- **IPA**: /ˈkwɑntəm ˈpærəti ˈmɛʒərmənt/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong quy trình kiểm tra lượng tử.
- **Core meaning — English**: An operation that evaluates whether an even or odd number of specific basis states are present across a subset of qubits without revealing individual states.
- **Core meaning & mental image — Tiếng Việt**: Phép đo tính chẵn lẻ lượng tử — Hình dung việc kiểm tra xem tổng số đèn sáng trong phòng là chẵn hay lẻ mà không cần biết chính xác bóng nào đang bật.
- **Grammar & collocations**:
  - `perform a quantum parity measurement` (thực hiện phép đo tính chẵn lẻ lượng tử)
  - `non-destructive quantum parity measurement` (phép đo tính chẵn lẻ lượng tử không phá hủy)
  - `fast quantum parity measurement` (phép đo tính chẵn lẻ lượng tử nhanh)
- **Register & nuance**: Standard quantum measurement physics term.
- **Examples**:
  - *American English*: Surface code syndrome extraction relies entirely on rapid **quantum parity measurements** across adjacent data qubits.
  - *Vietnamese*: Việc trích xuất hội chứng mã bề mặt hoàn toàn dựa vào các phép đo tính chẵn lẻ lượng tử nhanh chóng trên các qubit dữ liệu lân cận.
- **Liên kết tiếng Hàn**: 양자 패리티 측정 (量子parity 測定) — Phép đo kiểm tra tính chẵn lẻ của nhóm qubit mà không làm sụp đổ trạng thái riêng lẻ.

## 23. physical-to-logical qubit ratio
- **IPA**: /ˈfɪzɪkəl tu ˈlɑdʒɪkəl ˈkjubɪt ˈreɪʃioʊ/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); đứng ở vị trí chủ ngữ hoặc tân ngữ trong kinh tế học phần cứng lượng tử.
- **Core meaning — English**: The numerical proportion indicating how many physical qubits are required to back up and protect a single fault-tolerant logical qubit.
- **Core meaning & mental image — Tiếng Việt**: Tỷ lệ qubit vật lý trên qubit logic — Hình dung tỷ lệ số lượng nhân viên bảo vệ cần thiết để hộ tống một nhân vật quan trọng.
- **Grammar & collocations**:
  - `improve the physical-to-logical qubit ratio` (cải thiện tỷ lệ qubit vật lý trên qubit logic)
  - `high physical-to-logical qubit ratio` (tỷ lệ qubit vật lý trên qubit logic cao)
  - `optimize the physical-to-logical qubit ratio` (tối ưu hóa tỷ lệ qubit vật lý trên qubit logic)
- **Register & nuance**: Hardware scaling and systems engineering context.
- **Examples**:
  - *American English*: Reducing the **physical-to-logical qubit ratio** is currently the grand challenge for building practical quantum supercomputers.
  - *Vietnamese*: Giảm tỷ lệ qubit vật lý trên qubit logic hiện là thách thức lớn nhất trong việc xây dựng các siêu máy tính lượng tử thực tế.
- **Liên kết tiếng Hàn**: 물리 대 논리 큐비트 비율 (物理對論理큐비트比率) — Tỷ số số lượng qubit vật lý cần để tạo thành một qubit logic an toàn.

## 24. error syndrome graph extraction
- **IPA**: /ˈɛrər ˈsɪndroʊm græf ɪkˈstrækʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm tân ngữ trong thuật toán phần mềm giải mã.
- **Core meaning — English**: The computational procedure of converting raw multi-qubit measurement discrepancies into a graph-based topological representation for decoders.
- **Core meaning & mental image — Tiếng Việt**: Trích xuất đồ thị hội chứng lỗi — Hình dung việc biến các điểm báo động rời rạc trên bản đồ thành một mạng lưới giao thông để máy tính tìm đường đi ngắn nhất.
- **Grammar & collocations**:
  - `streamline error syndrome graph extraction` (tinh giản việc trích xuất đồ thị hội chứng lỗi)
  - `fast error syndrome graph extraction` (trích xuất đồ thị hội chứng lỗi nhanh)
  - `algorithm for error syndrome graph extraction` (thuật toán trích xuất đồ thị hội chứng lỗi)
- **Register & nuance**: Computational quantum information science context.
- **Examples**:
  - *American English*: Hardware accelerators are being designed specifically to speed up **error syndrome graph extraction** in real time.
  - *Vietnamese*: Các bộ tăng tốc phần cứng đang được thiết kế riêng để tăng tốc quá trình trích xuất đồ thị hội chứng lỗi trong thời gian thực.
- **Liên kết tiếng Hàn**: 오류 신드롬 그래프 추출 (誤謬syndrome graph 抽出) — Quy trình tính toán chuyển đổi dữ liệu hội chứng thành dạng đồ thị để giải mã.

## 25. scalable quantum error suppression
- **IPA**: /ˈskeɪləbəl ˈkwɑntəm ˈɛrər səˈprɛʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ); làm chủ ngữ hoặc tân ngữ trong các tài liệu định hướng công nghệ tương lai.
- **Core meaning — English**: Techniques and structural designs that systematically dampen environmental and operational noise as quantum processor sizes scale upward.
- **Core meaning & mental image — Tiếng Việt**: Ức chế lỗi lượng tử có thể mở rộng — Hình dung một hệ thống giảm xóc tự động điều chỉnh phù hợp khi trọng tải xe tải tăng lên.
- **Grammar & collocations**:
  - `achieve scalable quantum error suppression` (đạt được sự ức chế lỗi lượng tử có thể mở rộng)
  - `framework for scalable quantum error suppression` (khung cho sự ức chế lỗi lượng tử có thể mở rộng)
  - `advance scalable quantum error suppression` (thúc đẩy sự ức chế lỗi lượng tử có thể mở rộng)
- **Register & nuance**: Formal, strategic, and high-tech engineering prose.
- **Examples**:
  - *American English*: Achieving **scalable quantum error suppression** remains the defining milestone for the next generation of quantum computing labs.
  - *Vietnamese*: Đạt được sự ức chế lỗi lượng tử có thể mở rộng vẫn là cột mốc quyết định cho thế hệ phòng thí nghiệm điện toán lượng tử tiếp theo.
- **Liên kết tiếng Hàn**: 확장 가능한 양자 오류 억제 (擴張가능한量子誤謬抑制) — Các kỹ thuật và thiết kế giúp giảm thiểu nhiễu hệ thống khi mở rộng quy mô bộ xử lý lượng tử.

---

## Review in context: Part 1 (items 1–12)

The pursuit of fault-tolerant quantum computation requires a robust **1. quantum error correction code** deployed across a physical **2. planar surface code lattice**. According to the foundational **3. fault-tolerant threshold theorem**, if the **5. physical qubit error rate** remains strictly below the **21. threshold error probability bound**, arbitrarily long computations become feasible through careful **4. logical qubit redundancy mapping**. In such architectures, non-destructive **6. syndrome measurement stabilizer** routines run continuously using an **17. ancilla qubit measurement cycle** to catch every incoming **7. bit-flip and phase-flip error** before **18. decoherence error propagation** can ruin the data. When researchers manipulate **8. topological quantum defect** locations or apply an inter-patch **10. lattice surgery logical gate**, decoders utilize graph-theoretic **9. minimum weight perfect matching** to pair up errors. Furthermore, while standard Clifford operations are executed cleanly as a **11. transversal quantum operation**, non-Clifford logic demands resource-heavy **12. magic state distillation circuit** support.

### Vietnamese translation — Part 1
Quá trình theo đuổi tính toán lượng tử chịu lỗi đòi hỏi một **1. mã sửa lỗi lượng tử** mạnh mẽ được triển khai trên một **2. mạng lưới mã bề mặt phẳng** vật lý. Theo **3. định lý ngưỡng chịu lỗi** nền tảng, nếu **5. tỷ lệ lỗi qubit vật lý** duy trì nghiêm ngặt dưới **21. giới hạn xác suất lỗi ngưỡng**, các phép tính dài tùy ý sẽ trở nên khả thi thông qua việc **4. phân bổ dư thừa qubit logic** cẩn thận. Trong các kiến trúc như vậy, các quy trình **6. bộ ổn định đo lường hội chứng** không phá hủy chạy liên tục bằng **7. chu kỳ đo lường qubit phụ trợ** để bắt mọi **17. lỗi lật bit và lật pha** trước khi **18. sự lan truyền lỗi mất kết hợp** có thể phá hỏng dữ liệu. Khi các nhà nghiên cứu thao tác các vị trí **8. khiếm khuyết lượng tử topo** hoặc áp dụng **10. cổng logic phẫu thuật lưới** giữa các vùng, các bộ giải mã sử dụng phương pháp **9. khớp cặp hoàn hảo trọng số tối thiểu** dựa trên lý thuyết đồ thị để ghép nối các lỗi. Hơn nữa, trong khi các phép toán Clifford tiêu chuẩn được thực hiện gọn gàng dưới dạng **11. phép toán lượng tử xuyên tâm**, logic phi-Clifford đòi hỏi sự hỗ trợ từ **12. mạch chưng cất trạng thái ma thuật** tiêu tốn nhiều tài nguyên.

---

## Review in context: Part 2 (items 13–25)

Universal quantum processors rely on a balanced mix of **13. Clifford group quantum gate** operations for easy fault-tolerant routing and costly **14. non-Clifford T-gate resource** management. To maintain real-time correction without bottlenecking execution, hardware engineers must minimize **15. quantum decoder algorithmic latency** by integrating specialized support for **16. continuous stabilizer readout** and fast **22. quantum parity measurement**. Additionally, real-time control units must accelerate **24. error syndrome graph extraction** to interpret raw stabilizer data instantly. As systems grow larger, the physical hardware demands an optimal **23. physical-to-logical qubit ratio** within a tightly coordinated **19. fault-tolerant quantum architecture**. Whether encoding data within a protected **20. braided anyon code space** or advancing towards fully **25. scalable quantum error suppression**, overcoming noise remains the ultimate engineering frontier.

### Vietnamese translation — Part 2
Các bộ xử lý lượng tử vạn năng phụ thuộc vào sự kết hợp cân bằng giữa các phép toán **13. cổng lượng tử nhóm Clifford** để định tuyến chịu lỗi dễ dàng và việc quản lý **14. tài nguyên cổng T phi-Clifford** tốn kém. Để duy trì việc sửa lỗi thời gian thực mà không làm nghẽn quá trình thực thi, các kỹ sư phần cứng phải giảm thiểu **15. độ trễ thuật toán bộ giải mã lượng tử** bằng cách tích hợp hỗ trợ chuyên biệt cho **16. đọc bộ ổn định liên tục** và **22. phép toán đo tính chẵn lẻ lượng tử** nhanh chóng. Thêm vào đó, các đơn vị điều khiển thời gian thực phải tăng tốc quá trình **24. trích xuất đồ thị hội chứng lỗi** để giải mã dữ liệu ổn định thô ngay lập tức. Khi hệ thống ngày càng lớn hơn, phần cứng vật lý đòi hỏi một **23. tỷ lệ qubit vật lý trên qubit logic** tối ưu bên trong một **19. kiến trúc lượng tử chịu lỗi** được phối hợp chặt chẽ. Dù là mã hóa dữ liệu trong một **20. không gian mã anyon bện** được bảo vệ hay tiến tới mục tiêu **25. ức chế lỗi lượng tử có thể mở rộng** hoàn toàn, việc vượt qua tiếng ồn vẫn là ranh giới kỹ thuật tối cao.
