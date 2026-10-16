# C1 Vocabulary 02 — Superconducting qubit coherence times, Bloch sphere state vectors, and randomized benchmarking gate fidelity

## 1. longitudinal relaxation T1 time /ˌlɔːndʒɪˈtuːdɪnl ˌriːlækˈseɪʃn tiː wʌn taɪm/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ trong vật lý lượng tử mô tả thời gian sống của trạng thái kích thích qubit.

**Core meaning — English:** The characteristic time decay constant (T1) governing the relaxation of a qubit's excited state $|1\rangle$ back to its ground state $|0\rangle$ via energy dissipation.

**Core meaning & mental image — Tiếng Việt:** Thời gian thư giãn dọc T1; hình dung như chiếc đồng hồ cát đếm ngược thời gian mà hạt qubit lưu trữ ở trạng thái năng lượng cao bị rò rỉ năng lượng về trạng thái cơ bản thấp hơn.

**Grammar & collocations:** `measure the longitudinal relaxation T1 time` — đo thời gian thư giãn dọc T1; `long T1 time` — thời gian T1 dài; `T1 relaxation decay` — sự suy giảm thư giãn T1.

**Register & nuance:** Thuật ngữ vật lý chất rắn lượng tử và siêu dẫn chuyên sâu (quantum hardware physics).

**Examples:** Improving superconducting circuit materials successfully pushed the longitudinal relaxation T1 time beyond 100 microseconds, significantly reducing energy decay errors. → Việc cải thiện vật liệu mạch siêu dẫn đã đẩy thành công thời gian thư giãn dọc T1 vượt quá 100 micro giây, làm giảm đáng kể lỗi suy giảm năng lượng.

**Liên kết tiếng Hàn:** `종방향 이완 시간 T1` (縱方向弛緩時間) — Thời gian thư giãn dọc T1.

---

## 2. transverse dephasing T2 time /trænzˈvɜːrs diːˈfeɪzɪŋ tiː tuː taɪm/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ thời gian mất pha ngang của qubit.

**Core meaning — English:** The characteristic decoherence time constant (T2) during which a qubit loses phase coherence in the superposition state due to environmental magnetic and electric noise.

**Core meaning & mental image — Tiếng Việt:** Thời gian mất pha ngang T2; hình dung như tiếng chuông ngân vang nhưng dần bị nhiễu loạn tiếng ồn xung quanh làm mất đi độ đồng điệu của pha sóng.

**Grammar & collocations:** `extend the transverse dephasing T2 time` — kéo dài thời gian mất pha ngang T2; `T2 decoherence rate` — tốc độ mất pha T2; `limited by T2 time` — bị giới hạn bởi thời gian T2.

**Register & nuance:** Thuật ngữ lượng tử phần cứng cốt lõi (quantum computing hardware).

**Examples:** Environmental magnetic fluctuations inside the cryostat severely limited the transverse dephasing T2 time, causing rapid quantum state degradation. → Các dao động từ trường môi trường bên trong bình lạnh đã giới hạn nghiêm trọng thời gian mất pha ngang T2, gây ra sự suy giảm trạng thái lượng tử nhanh chóng.

**Liên kết tiếng Hàn:** `횡방향 위상 완화 시간 T2` (橫方向位相弛緩時間) — Thời gian mất pha ngang T2.

---

## 3. Bloch sphere state vector /blɑːk sfɪr steɪt ˈvɛktər/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ véc-tơ trạng thái trên mặt cầu Bloch.

**Core meaning — English:** A geometrical three-dimensional unit sphere representation used to visualize the pure quantum state vector of a single two-level qubit system.

**Core meaning & mental image — Tiếng Việt:** Véc-tơ trạng thái trên mặt cầu Bloch; hình dung như chiếc kim đồng hồ ba chiều quay trên mặt một quả cầu hoàn hảo, biểu diễn mọi trạng thái chồng chập của một qubit.

**Grammar & collocations:** `visualize on the Bloch sphere` — trực quan hóa trên mặt cầu Bloch; `Bloch sphere representation` — biểu diễn mặt cầu Bloch; `state vector coordinates` — tọa độ véc-tơ trạng thái.

**Register & nuance:** Công cụ toán học tiêu chuẩn trong cơ học lượng tử và tính toán lượng tử (quantum mechanics).

**Examples:** Applying a microwave pulse rotates the Bloch sphere state vector from the north pole down to the equator, creating an equal superposition. → Việc áp dụng một xung vi sóng làm quay véc-tơ trạng thái mặt cầu Bloch từ cực bắc xuống Xích đạo, tạo ra sự chồng chập bằng nhau.

**Liên kết tiếng Hàn:** `블로흐 구면 상태 벡터` (Bloch球面狀態 Vector) — Véc-tơ trạng thái mặt cầu Bloch.

---

## 4. cross-entropy benchmarking /krɔːs ˈɛntrəpi ˈbɛntʃmɑːrkɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ phương pháp đo điểm chuẩn entropy chéo.

**Core meaning — English:** A scalable validation protocol used to measure quantum gate fidelity and verify the performance of random quantum circuits by comparing output probabilities against classical simulations.

**Core meaning & mental image — Tiếng Việt:** Đo điểm chuẩn entropy chéo; hình dung như chiếc máy đọ kết quả xác suất xuất ra từ mạch lượng tử với máy tính cổ điển để kiểm tra xem hệ thống lượng tử có tính toán chuẩn xác không.

**Grammar & collocations:** `perform cross-entropy benchmarking` — thực hiện đo entropy chéo; `linear cross-entropy benchmarking (XEB)` — đo entropy chéo tuyến tính; `benchmarking protocol` — quy trình đo điểm chuẩn.

**Register & nuance:** Thuật ngữ xác thực phần cứng lượng tử tiên tiến (quantum supremacy / verification).

**Examples:** Researchers employed cross-entropy benchmarking to validate the quantum fidelity of their 54-qubit superconducting processor. → Các nhà nghiên cứu đã sử dụng phương pháp đo entropy chéo để xác thực độ trung thực lượng tử của bộ xử lý siêu dẫn 54 qubit của họ.

**Liên kết tiếng Hàn:** `교차 엔트로피 벤치마킹` — Đo điểm chuẩn entropy chéo (XEB).

---

## 5. quantum error correction surface code /ˈkwɑːntəm ˈɛrər kəˈrɛkʃn ˈsɜːrfɪs koʊd/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ mã bề mặt sửa lỗi lượng tử.

**Core meaning — English:** A topological quantum error-correcting code implemented on a two-dimensional lattice of physical qubits to protect fragile logical quantum information from decoherence errors.

**Core meaning & mental image — Tiếng Việt:** Mã bề mặt sửa lỗi lượng tử; hình dung như tấm lưới đan khít hai chiều bảo vệ những hạt qubit logic mỏng manh khỏi các hạt nhiễu vũ trụ tàn phá.

**Grammar & collocations:** `implement a surface code` — triển khai mã bề mặt; `surface code error correction` — sửa lỗi mã bề mặt; `topological surface code` — mã bề mặt tô-pô.

**Register & nuance:** Thuật ngữ lý thuyết thông tin lượng tử đỉnh cao (fault-tolerant quantum computing).

**Examples:** Scalable fault-tolerant quantum computing relies heavily on weaving physical qubits into a robust quantum error correction surface code. → Điện toán lượng tử chịu lỗi có khả năng mở rộng phụ thuộc rất nhiều vào việc kết dệt các qubit vật lý thành một mã bề mặt sửa lỗi lượng tử vững chắc.

**Liên kết tiếng Hàn:** `양자 오류 정정 표면 부호` (量子誤謬訂正表面符號) — Mã bề mặt sửa lỗi lượng tử.

---

## 6. two-qubit entangling gate fidelity /tuː kwɪbɪt ɪnˈtæŋɡlɪŋ ɡeɪt fəˈdɛləti/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ độ trung thực của cổng vướng víu hai qubit.

**Core meaning — English:** A quantitative metric assessing how precisely a two-qubit logical operation (such as CNOT or CZ) creates quantum entanglement without introducing operational errors.

**Core meaning & mental image — Tiếng Việt:** Độ trung thực cổng vướng víu hai qubit; hình dung như thước đo độ hoàn hảo của cái bắt tay lượng tử giữa hai qubit, xem chúng có vướng víu hoàn toàn với nhau hay bị rò rỉ tạp chất.

**Grammar & collocations:** `achieve high two-qubit gate fidelity` — đạt độ trung thực cổng hai qubit cao; `entangling gate fidelity measurement` — đo độ trung thực cổng vướng víu; `fidelity threshold` — ngưỡng độ trung thực.

**Register & nuance:** Thước đo quan trọng nhất cho chất lượng phần cứng bộ xử lý lượng tử (quantum processor metrics).

**Examples:** Pushing the two-qubit entangling gate fidelity above 99.9% is a mandatory milestone for executing fault-tolerant quantum algorithms. → Đẩy độ trung thực của cổng vướng víu hai qubit vượt mức 99,9% là cột mốc bắt buộc để thực thi các thuật toán lượng tử chịu lỗi.

**Liên kết tiếng Hàn:** `이 큐비트 얽힘 게이트 충실도` (2 Qubit 얽힘 Gate 忠實度) — Độ trung thực cổng vướng víu hai qubit.

---

## 7. randomized benchmarking protocol /ˈrændəmaɪzd ˈbɛntʃmɑːrkɪŋ ˈproʊtəkɑːl/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ quy trình đo điểm chuẩn ngẫu nhiên.

**Core meaning — English:** An experimental procedure that applies random sequences of quantum gates to isolate and measure the average error rate of quantum operations free from state preparation and measurement errors.

**Core meaning & mental image — Tiếng Việt:** Quy trình đo điểm chuẩn ngẫu nhiên; hình dung như bài sát hạch ngẫu nhiên vô số câu hỏi trắc nghiệm lên qubit để lọc ra tỷ lệ lỗi thuần túy mà không bị nhiễu bởi thiết bị đo.

**Grammar & collocations:** `execute a randomized benchmarking protocol` — thực hiện quy trình đo điểm chuẩn ngẫu nhiên; `standard randomized benchmarking` — đo điểm chuẩn ngẫu nhiên tiêu chuẩn; `average gate error rate` — tỷ lệ lỗi cổng trung bình.

**Register & nuance:** Phương pháp chuẩn hóa quốc tế trong đo lường phần cứng lượng tử (quantum metrology).

**Examples:** Experimental physicists routinely rely on the randomized benchmarking protocol to quantify gate error rates across different quantum processor architectures. → Các nhà vật lý thực nghiệm thường xuyên dựa vào quy trình đo điểm chuẩn ngẫu nhiên để định lượng tỷ lệ lỗi cổng trên các kiến trúc bộ xử lý lượng tử khác nhau.

**Liên kết tiếng Hàn:** `무작위 벤치마킹 프로토콜` — Quy trình đo điểm chuẩn ngẫu nhiên.

---

## 8. superconducting transmon qubit /ˌsuːpərkənˈdʌktɪŋ ˈtrænzmɑːn kwɪbɪt/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ qubit siêu dẫn transmon.

**Core meaning — English:** A type of superconducting charge qubit designed with a large shunt capacitor to make it insensitive to charge noise while maintaining anharmonicity for controlled qubit transitions.

**Core meaning & mental image — Tiếng Việt:** Qubit siêu dẫn transmon; hình dung như mạch điện siêu dẫn gắn tụ điện lớn giúp nó bình tĩnh trước mọi tiếng ồn điện từ xung quanh, đóng vai trò là khối xây dựng cơ bản của siêu máy tính lượng tử.

**Grammar & collocations:** `fabricate a transmon qubit` — chế tạo qubit transmon; `superconducting transmon circuit` — mạch transmon siêu dẫn; `anharmonic transmon design` — thiết kế transmon phi điều hòa.

**Register & nuance:** Công nghệ qubit phổ biến nhất hiện nay (IBM, Google quantum processors).

**Examples:** Most commercial quantum computers today utilize arrays of superconducting transmon qubits cooled to near absolute zero inside dilution refrigerators. → Hầu hết các máy tính lượng tử thương mại ngày nay đều sử dụng các mảng qubit siêu dẫn transmon được làm lạnh đến gần độ không tuyệt đối bên trong tủ lạnh pha loãng.

**Liên kết tiếng Hàn:** `초전도 트랜스몬 큐비트` (超傳導 Transmon Qubit) — Qubit transmon siêu dẫn.

---

## 9. quantum state tomography /ˈkwɑːntəm steɪt təˈmɑːɡrəfi/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ phương pháp chụp cắt lớp trạng thái lượng tử.

**Core meaning — English:** A comprehensive experimental process of reconstructing the complete density matrix of a quantum system by taking measurements along multiple orthogonal bases.

**Core meaning & mental image — Tiếng Việt:** Chụp cắt lớp trạng thái lượng tử; hình dung như việc chụp X-quang đa góc độ để tái tạo lại hình ảnh ba chiều toàn diện của trạng thái qubit ẩn giấu.

**Grammar & collocations:** `perform quantum state tomography` — thực hiện chụp cắt lớp trạng thái lượng tử; `density matrix reconstruction` — tái tạo ma trận mật độ; `tomographic measurement` — phép đo cắt lớp.

**Register & nuance:** Phương pháp phân tích trạng thái lượng tử chính xác cao nhưng tốn kém thời gian (quantum estimation).

**Examples:** Due to exponential scaling with the number of qubits, full quantum state tomography becomes computationally intractable for systems exceeding ten qubits. → Do sự mở rộng theo hàm mũ với số lượng qubit, việc chụp cắt lớp trạng thái lượng tử toàn diện trở nên bất khả thi về mặt tính toán đối với các hệ thống vượt quá mười qubit.

**Liên kết tiếng Hàn:** `양자 상태 토모그래피` (量子狀態 Tomography) — Chụp cắt lớp trạng thái lượng tử.

---

## 10. unitary gate rotation /ˈjuːnɪtɛri ɡeɪt roʊˈteɪʃn/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ phép quay cổng nhất nguyên.

**Core meaning — English:** A reversible quantum operation represented by a unitary matrix that rotates the quantum state vector on the Bloch sphere without changing its probability amplitude norm.

**Core meaning & mental image — Tiếng Việt:** Phép quay cổng nhất nguyên; hình dung như thao tác xoay quả cầu Bloch nhẹ nhàng theo các trục tọa độ mà không làm rách hay co giãn lớp vỏ quả cầu.

**Grammar & collocations:** `apply a unitary gate rotation` — áp dụng phép quay cổng nhất nguyên; `unitary matrix transformation` — phép biến đổi ma trận nhất nguyên; `precise gate rotation angle` — góc quay cổng chính xác.

**Register & nuance:** Khái niệm toán học cơ bản trong lập trình mạch lượng tử (quantum circuit operations).

**Examples:** Quantum algorithms manipulate information by executing sequences of precise unitary gate rotations governed by microwave pulse durations. → Các thuật toán lượng tử thao túng thông tin bằng cách thực thi các chuỗi phép quay cổng nhất nguyên chính xác được chi phối bởi thời lượng xung vi sóng.

**Liên kết tiếng Hàn:** `유니터리 게이트 회전` (Unitary Gate 回轉) — Phép quay cổng unitary.

---

## 11. quantum decoherence rate /ˈkwɑːntəm diːkoʊˈhɪrəns reɪt/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ tốc độ mất kết hợp lượng tử.

**Core meaning — English:** The rate at which a quantum system loses its superposition properties and phase relationships due to unavoidable interactions with its external thermal and electromagnetic environment.

**Core meaning & mental image — Tiếng Việt:** Tốc độ mất kết hợp lượng tử; hình dung như tốc độ tan chảy của khối nước đá lượng tử khi bị đặt vào môi trường nhiệt độ phòng ấm áp.

**Grammar & collocations:** `minimize the quantum decoherence rate` — giảm thiểu tốc độ mất kết hợp lượng tử; `accelerated decoherence rate` — tốc độ mất kết hợp tăng nhanh; `suppress decoherence` — kìm hãm sự mất kết hợp.

**Register & nuance:** Thách thức kỹ thuật lớn nhất trong chế tạo phần cứng máy tính lượng tử (quantum noise engineering).

**Examples:** Shielding the processor inside mu-metal cryostats drastically lowered the quantum decoherence rate, extending overall circuit longevity. → Việc che chắn bộ xử lý bên trong các bình lạnh hợp kim mu-metal đã làm giảm mạnh tốc độ mất kết hợp lượng tử, kéo dài tuổi thọ tổng thể của mạch.

**Liên kết tiếng Hàn:** `양자 결어거지 속도` / `양자 결맞음 상실률` — Tốc độ mất kết hợp lượng tử.

---

## 12. microwave pulse shaping /ˈmaɪkrowɛv pʌls ˈʃeɪpɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ kỹ thuật định hình xung vi sóng điều khiển qubit.

**Core meaning — English:** The precise electronic modulation of microwave control signals (such as DRAG pulses) to eliminate spectral leakage and reduce leakage errors during qubit gate operations.

**Core meaning & mental image — Tiếng Việt:** Định hình xung vi sóng; hình dung như việc gọt giũa biên dạng sóng vi sóng điều khiển sao cho mượt mà, không gây ra các xung động đột ngột làm tổn thương qubit.

**Grammar & collocations:** `optimize microwave pulse shaping` — tối ưu hóa định hình xung vi sóng; `pulse shaping algorithm` — thuật toán định hình xung; `shaped microwave control` — điều khiển vi sóng được định hình.

**Register & nuance:** Kỹ thuật điều khiển phần cứng lượng tử tinh vi (quantum microwave engineering).

**Examples:** Advanced microwave pulse shaping eliminated off-resonant transitions, boosting single-qubit gate fidelities past the fault-tolerance threshold. → Kỹ thuật định hình xung vi sóng tiên tiến đã loại bỏ các chuyển đổi lệch cộng hưởng, nâng độ trung thực cổng đơn qubit vượt qua ngưỡng chịu lỗi.

**Liên kết tiếng Hàn:** `마이크로파 펄스 성형` — Định hình xung vi sóng.

---

## 13. parametric coupler circuit /ˌpɛrəˈmɛtrɪk ˈkʌplər ˈsɜːrkɪt/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ mạch ghép nối tham số.

**Core meaning — English:** An adjustable superconducting circuit component used to dynamically tune the interaction strength between adjacent qubits, enabling high-fidelity two-qubit gates while suppressing residual cross-talk.

**Core meaning & mental image — Tiếng Việt:** Mạch ghép nối tham số; hình dung như chiếc van điều tiết dòng chảy tương tác giữa hai phòng qubit kế cận, mở lớn khi cần kết nối và đóng chặt khi muốn cách ly.

**Grammar & collocations:** `design a parametric coupler circuit` — thiết kế mạch ghép nối tham số; `tunable coupler architecture` — kiến trúc bộ ghép nối điều chỉnh được; `suppress cross-talk via couplers` — triệt tiêu nhiễu chéo qua bộ ghép nối.

**Register & nuance:** Kiến trúc phần cứng tiên tiến trong bộ xử lý siêu dẫn đa qubit (scalable quantum architectures).

**Examples:** Integrating a tunable parametric coupler circuit eliminated parasitic ZZ cross-talk between neighboring transmon qubits. → Việc tích hợp mạch ghép nối tham số có thể điều chỉnh đã loại bỏ hiện tượng nhiễu chéo ZZ ký sinh giữa các qubit transmon láng giềng.

**Liên kết tiếng Hàn:** `파라메트릭 결합기 회로` — Mạch ghép nối tham số.

---

## 14. quantum process tomography /ˈkwɑːntəm ˈprɑːsɛs təˈmɑːɡrəfi/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ phương pháp chụp cắt lớp quy trình lượng tử.

**Core meaning — English:** An experimental characterization protocol used to determine the complete mathematical transformation matrix of a quantum gate or noisy quantum channel.

**Core meaning & mental image — Tiếng Việt:** Chụp cắt lớp quy trình lượng tử; hình dung như việc chụp X-quang toàn bộ cách thức hoạt động của một cổng lượng tử để vạch trần mọi tật lỗi biến dạng của nó.

**Grammar & collocations:** `conduct quantum process tomography` — tiến hành chụp cắt lớp quy trình lượng tử; `process matrix reconstruction` — tái tạo ma trận quy trình; `channel characterization` — đặc trưng hóa kênh lượng tử.

**Register & nuance:** Phương pháp kiểm định phần cứng lượng tử mức cao (quantum benchmarking).

**Examples:** Quantum process tomography revealed that phase damping errors accounted for over eighty percent of the gate infidelity. → Chụp cắt lớp quy trình lượng tử đã tiết lộ rằng các lỗi suy giảm pha chiếm hơn 80% độ kém trung thực của cổng.

**Liên kết tiếng Hàn:** `양자 공정 토모그래피` (量子工程 Tomography) — Chụp cắt lớp quy trình lượng tử.

---

## 15. quantum error syndrome measurement /ˈkwɑːntəm ˈɛrər ˈsɪndroʊm ˈmɛʒərmənt/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ phép đo hội chứng lỗi lượng tử.

**Core meaning — English:** A non-destructive auxiliary qubit measurement designed to detect whether errors have occurred within a quantum error-correcting code without collapsing the superposition state of the data qubits.

**Core meaning & mental image — Tiếng Việt:** Đo hội chứng lỗi lượng tử; hình dung như chiếc máy quét an ninh kiểm tra xem hành lý có bị rách vỡ hay không mà không cần mở va-li ra làm hỏng đồ vật bên trong.

**Grammar & collocations:** `perform error syndrome measurement` — thực hiện đo hội chứng lỗi; `syndrome extraction circuit` — mạch chiết xuất hội chứng; `non-destructive measurement` — phép đo không phá hủy.

**Register & nuance:** Thành phần cốt lõi trong máy tính lượng tử chịu lỗi (fault-tolerant quantum error correction).

**Examples:** Rapid quantum error syndrome measurement cycles are critical to catch bit-flip and phase-flip errors before they cascade through the surface code lattice. → Các chu kỳ đo hội chứng lỗi lượng tử nhanh chóng đóng vai trò tối quan trọng để bắt giữ các lỗi lật bit và lật pha trước khi chúng lan truyền qua lưới mã bề mặt.

**Liên kết tiếng Hàn:** `양자 오류 증후군 측정` — Đo hội chứng lỗi lượng tử.

---

## 16. quantum volume metric /ˈkwɑːntəm ˈvɑːljəm ˈmɛtrɪk/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ chỉ số thể tích lượng tử đánh giá sức mạnh phần cứng.

**Core meaning — English:** A single hardware-agnostic benchmark metric established by IBM to measure the capability and error rates of quantum computers, considering qubit count, connectivity, and gate fidelity.

**Core meaning & mental image — Tiếng Việt:** Chỉ số thể tích lượng tử; hình dung như chiếc cúp tổng hợp đo lường cả số lượng binh sĩ qubit lẫn sự khéo léo phối hợp chiến đấu của toàn bộ đội quân lượng tử.

**Grammar & collocations:** `increase the quantum volume metric` — gia tăng chỉ số thể tích lượng tử; `quantum volume benchmark` — điểm chuẩn thể tích lượng tử; `scaling quantum volume` — mở rộng thể tích lượng tử.

**Register & nuance:** Tiêu chuẩn công nghiệp phổ biến để so sánh hiệu năng máy tính lượng tử (IBM quantum metrics).

**Examples:** The research laboratory announced that their upgraded chip successfully doubled its quantum volume metric by reducing two-qubit error rates. → Phòng thí nghiệm nghiên cứu thông báo rằng con chip nâng cấp của họ đã nhân đôi thành công chỉ số thể tích lượng tử bằng cách giảm tỷ lệ lỗi hai qubit.

**Liên kết tiếng Hàn:** `양자 볼륨 지표` (量子 Volume 指標) — Chỉ số thể tích lượng tử.

---

## 17. thermal noise photon shot /ˈθɜːrməl nɔɪz ˈfoʊtɑːn ʃɑːt/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ hiện tượng nhiễu hạt photon nhiệt.

**Core meaning — English:** Spurious electromagnetic radiation leakage inside a dilution refrigerator that excites superconducting qubits out of their ground states, causing unexpected bit-flip errors.

**Core meaning & mental image — Tiếng Việt:** Nhiễu hạt photon nhiệt; hình dung như những hạt bụi nhiệt lượng vô hình bay lơ lửng trong bình lạnh, va đập làm cho các qubit đang ngủ yên bỗng giật mình lật trạng thái.

**Grammar & collocations:** `suppress thermal noise photon shots` — kìm hãm nhiễu hạt photon nhiệt; `thermal photon leakage` — rò rỉ photon nhiệt; `cryogenic thermal noise` — nhiệt độ nhiễu đông lạnh.

**Register & nuance:** Vấn đề phần cứng vi ba lượng tử (cryogenic engineering).

**Examples:** Installing infrared absorbing filters inside the coaxial wiring successfully eliminated thermal noise photon shots that previously degraded qubit relaxation times. → Việc lắp đặt các bộ lọc hấp thụ hồng ngoại bên trong hệ thống dây đồng trục đã loại bỏ thành công các hạt photon nhiệt từng làm suy giảm thời gian thư giãn của qubit.

**Liên kết tiếng Hàn:** `열잡음 광자 산란` — Tán xạ photon nhiệt.

---

## 18. adiabatic quantum annealing /ˌædiəˈbætɪk ˈkwɑːntəm əˈniːlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ phương pháp ủ lượng tử đoạn nhiệt.

**Core meaning — English:** A quantum optimization technique that initializes a system in the ground state of a simple Hamiltonian and slowly evolves it into a complex Hamiltonian to solve combinatorial optimization problems.

**Core meaning & mental image — Tiếng Việt:** Ủ lượng tử đoạn nhiệt; hình dung như việc trượt một viên bi từ từ dọc theo lòng máng năng lượng biến đổi chậm từ hình dáng đơn giản sang phức tạp để tìm đáy sâu nhất đại diện cho lời bài toán.

**Grammar & collocations:** `perform adiabatic quantum annealing` — thực hiện ủ lượng tử đoạn nhiệt; `quantum annealer processor` — bộ xử lý ủ lượng tử; `adiabatic evolution` — sự tiến hóa đoạn nhiệt.

**Register & nuance:** Phương pháp tính toán lượng tử chuyên dụng cho bài toán tối ưu hóa (D-Wave systems).

**Examples:** Optimization experts utilized adiabatic quantum annealing to solve complex logistics routing problems much faster than classical brute-force algorithms. → Các chuyên gia tối ưu hóa đã sử dụng phương pháp ủ lượng tử đoạn nhiệt để giải quyết các bài toán định tuyến logistics phức tạp nhanh hơn nhiều so với các thuật toán vét cạn cổ điển.

**Liên kết tiếng Hàn:** `단열 양자 어닐링` (斷熱量子 Annealing) — Ủ lượng tử đoạn nhiệt.

---

## 19. fault-tolerant quantum threshold /ˈfɔːlt ˈtɔːrələnt ˈkwɑːntəm ˈθrɛʃhoʊld/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ ngưỡng lượng tử chịu lỗi.

**Core meaning — English:** The maximum physical gate error rate below which quantum error correction can successfully suppress logical errors and scale up arbitrarily long quantum computations.

**Core meaning & mental image — Tiếng Việt:** Ngưỡng lượng tử chịu lỗi; hình dung như vạch sơn giới hạn an toàn dưới đó hệ thống sửa lỗi hoạt động hiệu quả, nếu vượt qua thì lỗi sẽ bùng nổ phá hủy toàn bộ mạch.

**Grammar & collocations:** `exceed the fault-tolerant threshold` — vượt ngưỡng chịu lỗi; `fault-tolerant error threshold` — ngưỡng lỗi chịu lỗi; `strict threshold requirement` — yêu cầu ngưỡng nghiêm ngặt.

**Register & nuance:** Khái niệm then chốt trong lý thuyết tính toán lượng tử (fault-tolerant quantum computing).

**Examples:** Reaching the fault-tolerant quantum threshold requires engineering physical qubit fidelities that exceed 99.99%. → Đạt được ngưỡng lượng tử chịu lỗi đòi hỏi phải thiết kế độ trung thực của qubit vật lý vượt quá 99,99%.

**Liên kết tiếng Hàn:** `결함 허용 양자 임계값` (缺陷許容量子閾値) — Ngưỡng lượng tử chịu lỗi.

---

## 20. quantum circuit transpilation /ˈkwɑːntəm ˈsɜːrkɪt ˌtrænspɪˈleɪʃn/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ biên dịch mạch lượng tử.

**Core meaning — English:** The compilation process of translating a high-level quantum algorithm circuit into native physical gates compatible with the specific hardware connectivity and topology of a quantum processor.

**Core meaning & mental image — Tiếng Việt:** Biên dịch mạch lượng tử; hình dung như chiếc máy phiên dịch ngôn ngữ cấp cao của thuật toán thành các động tác tay chân bản địa phù hợp với cấu trúc hình học của con chip lượng tử cụ thể.

**Grammar & collocations:** `perform quantum circuit transpilation` — thực hiện biên dịch mạch lượng tử; `transpilation optimization` — tối ưu hóa biên dịch; `native gate set mapping` — ánh xạ tập cổng bản địa.

**Register & nuance:** Phần mềm và công cụ phát triển lượng tử (quantum software development kits - Qiskit).

**Examples:** Efficient quantum circuit transpilation minimized the total number of swap gates required, preventing unnecessary decoherence errors during execution. → Việc biên dịch mạch lượng tử hiệu quả đã giảm thiểu tổng số cổng đổi chỗ cần thiết, ngăn ngừa các lỗi mất kết hợp không cần thiết trong quá trình thực thi.

**Liên kết tiếng Hàn:** `양자 회로 트랜스파일레이션` — Biên dịch mạch lượng tử.

---

## 21. quantum supremacy milestone /ˈkwɑːntəm suːˈprɛməsi ˈmaɪlstoʊn/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ cột mốc ưu thế lượng tử.

**Core meaning — English:** The historic demonstration that a programmable quantum device can solve a specialized mathematical problem in a reasonable timeframe that is practically impossible for the world's most powerful supercomputers.

**Core meaning & mental image — Tiếng Việt:** Cột mốc ưu thế lượng tử; hình dung như đỉnh núi cao mà nhà leo núi lượng tử lần đầu tiên chinh phục được, nơi siêu máy tính cổ điển phải đầu hàng sau hàng nghìn năm leo núi.

**Grammar & collocations:** `achieve the quantum supremacy milestone` — đạt được cột mốc ưu thế lượng tử; `quantum computational supremacy` — ưu thế tính toán lượng tử; `historic milestone` — cột mốc lịch sử.

**Register & nuance:** Thuật ngữ đột phá công nghệ và truyền thông khoa học (quantum physics history).

**Examples:** Google's achievement of the quantum supremacy milestone marked a paradigm shift in computational capability for sampling random quantum circuits. → Thành tựu đạt được cột mốc ưu thế lượng tử của Google đã đánh dấu một sự chuyển đổi mô hình trong năng lực tính toán để lấy mẫu các mạch lượng tử ngẫu nhiên.

**Liên kết tiếng Hàn:** `양자 우월성 이마을표` (量子優越性 Milestone) — Cột mốc ưu thế lượng tử.

---

## 22. fluxonium superconducting qubit /flʌkˈsoʊniəm ˌsuːpərkənˈdʌktɪŋ kwɪbɪt/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ qubit siêu dẫn fluxonium.

**Core meaning — English:** An advanced type of superconducting circuit qubit featuring a superinductor array that offers exceptionally long relaxation times and strong protection against charge noise compared to standard transmon qubits.

**Core meaning & mental image — Tiếng Việt:** Qubit siêu dẫn fluxonium; hình dung như phiên bản tiến hóa siêu việt của qubit transmon, sử dụng chuỗi siêu cuộn cảm để kháng cự mãnh liệt trước mọi tiếng ồn điện tích.

**Grammar & collocations:** `fabricate a fluxonium qubit` — chế tạo qubit fluxonium; `fluxonium circuit architecture` — kiến trúc mạch fluxonium; `enhanced anharmonicity of fluxonium` — tính phi điều hòa nâng cao của fluxonium.

**Register & nuance:** Công nghệ phần cứng lượng tử thế hệ tiếp theo (next-generation superconducting hardware).

**Examples:** Researchers are increasingly turning to the fluxonium superconducting qubit to bypass the dephasing limitations inherent in traditional transmon designs. → Các nhà nghiên cứu đang ngày càng chuyển sang qubit siêu dẫn fluxonium để vượt qua các giới hạn mất pha vốn có trong các thiết kế transmon truyền thống.

**Liên kết tiếng Hàn:** `플럭소늄 초전도 큐비트` (Fluxonium 超傳導 Qubit) — Qubit siêu dẫn fluxonium.

---

## 23. quantum state preparation fidelity /ˈkwɑːntəm steɪt ˌprɛpəˈreɪʃn fəˈdɛləti/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ độ trung thực chuẩn bị trạng thái lượng tử.

**Core meaning — English:** The precision with which a quantum system can be accurately initialized into a desired pure target state prior to executing quantum computation algorithms.

**Core meaning & mental image — Tiếng Việt:** Độ trung thực chuẩn bị trạng thái lượng tử; hình dung như độ chính xác khi vận động viên tư thế xuất phát trước tiếng súng lệnh, đảm bảo không có bước chân nào bị lệch hướng.

**Grammar & collocations:** `optimize state preparation fidelity` — tối ưu hóa độ trung thực chuẩn bị trạng thái; `high-fidelity initialization` — khởi tạo độ trung thực cao; `state preparation error` — lỗi chuẩn bị trạng thái.

**Register & nuance:** Thuật ngữ đo lường phần cứng lượng tử (quantum initialization metrics).

**Examples:** Imperfect ground state initialization lowers quantum state preparation fidelity, compounding errors before the first gate is even executed. → Việc khởi tạo trạng thái cơ bản không hoàn hảo làm giảm độ trung thực chuẩn bị trạng thái lượng tử, làm trầm trọng thêm các lỗi ngay cả trước khi cổng đầu tiên được thực thi.

**Liên kết tiếng Hàn:** `양자 상태 준비 충실도` (量子狀態準備忠實度) — Độ trung thực chuẩn bị trạng thái lượng tử.

---

## 24. quantum non-demolition measurement /ˈkwɑːntəm nɑːn ˌdɛməˈlɪʃn ˈmɛʒərmənt/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ phép đo lượng tử không phá hủy.

**Core meaning — English:** A measurement technique that extracts specific information about a quantum observable without destroying the superposition state of the measured quantum system.

**Core meaning & mental image — Tiếng Việt:** Phép đo lượng tử không phá hủy (QND); hình dung như chiếc máy quét nhìn thấu bên trong quả trứng màu mà không làm vỡ hay làm tổn hại đến hình dạng của nó.

**Grammar & collocations:** `perform a quantum non-demolition measurement` — thực hiện phép đo không phá hủy lượng tử; `QND readout scheme` — sơ đồ đọc QND; `non-demolition detection` — phát hiện không phá hủy.

**Register & nuance:** Kỹ thuật đo lường tiên tiến trong vật lý nguyên tử và mạch siêu dẫn (quantum optics/superconducting circuits).

**Examples:** Implementing a high-fidelity quantum non-demolition measurement scheme enabled continuous monitoring of qubit states without inducing wave-function collapse. → Việc triển khai sơ đồ đo lường lượng tử không phá hủy độ trung thực cao đã cho phép giám sát liên tục các trạng thái qubit mà không gây ra sự sụp đổ hàm sóng.

**Liên kết tiếng Hàn:** `양자 비파괴 측정` (量子非破壞測定) — Phép đo lượng tử không phá hủy (QND).

---

## 25. randomized benchmarking error rate /ˈrændəmaɪzd ˈbɛntʃmɑːrkɪŋ ˈerər reɪt/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ hoặc tân ngữ chỉ tỷ lệ lỗi đo điểm chuẩn ngẫu nhiên.

**Core meaning — English:** The average probability of operational failure per randomized Clifford gate sequence, serving as the benchmark gold standard for quantifying quantum processor quality.

**Core meaning & mental image — Tiếng Việt:** Tỷ lệ lỗi đo điểm chuẩn ngẫu nhiên; hình dung như điểm trung bình số lần vấp ngã trên một đường chạy vượt rào ngẫu nhiên, phản ánh đúng thực chất kỹ năng của vận động viên lượng tử.

**Grammar & collocations:** `measure the randomized benchmarking error rate` — đo tỷ lệ lỗi benchmark ngẫu nhiên; `low error rate per Clifford` — tỷ lệ lỗi thấp trên mỗi cổng Clifford; `benchmark error decay` — sự suy giảm lỗi benchmark.

**Register & nuance:** Chỉ số đánh giá phần cứng lượng tử tiêu chuẩn toàn cầu (quantum benchmarking standard).

**Examples:** By upgrading the control electronics and reducing thermal noise, engineers successfully dropped the randomized benchmarking error rate below 0.05% per Clifford gate. → Bằng cách nâng cấp thiết bị điện tử điều khiển và giảm nhiễu nhiệt, các kỹ sư đã hạ thành công tỷ lệ lỗi đo điểm chuẩn ngẫu nhiên xuống dưới 0,05% cho mỗi cổng Clifford.

**Liên kết tiếng Hàn:** `무작위 벤치마킹 오류율` — Tỷ lệ lỗi đo điểm chuẩn ngẫu nhiên.

---

## Review in context (Part 1: Coherence, Bloch Sphere, and Gate Fidelity)
Building reliable superconducting quantum processors requires pushing physical hardware metrics to unprecedented limits. Engineers must constantly extend the **longitudinal relaxation T1 time** and the **transverse dephasing T2 time** to minimize the **quantum decoherence rate** caused by environmental electromagnetic noise. By utilizing precise **microwave pulse shaping** and **unitary gate rotation** sequences, researchers manipulate the **Bloch sphere state vector** with extreme accuracy. Furthermore, maintaining exceptional **two-qubit entangling gate fidelity** and high **quantum state preparation fidelity** is mandatory for executing complex quantum algorithms. Rigorous validation protocols such as **randomized benchmarking protocol** and **cross-entropy benchmarking** allow physicists to quantify the **randomized benchmarking error rate** and ensure that superconducting **transmon qubit** arrays operate well above the fault-tolerant threshold.

**Bản dịch tiếng Việt:**
Xây dựng các bộ xử lý lượng tử siêu dẫn đáng tin cậy đòi hỏi phải đẩy các chỉ số phần cứng vật lý lên những giới hạn chưa từng có. Các kỹ sư phải liên tục kéo dài **thời gian thư giãn dọc T1** và **thời gian mất pha ngang T2** để giảm thiểu **tốc độ mất kết hợp lượng tử** do nhiễu điện từ môi trường gây ra. Bằng cách sử dụng các chuỗi **định hình xung vi sóng** và **phép quay cổng nhất nguyên** chính xác, các nhà nghiên cứu thao tác với **véc-tơ trạng thái mặt cầu Bloch** với độ chính xác cực cao. Hơn nữa, việc duy trì **độ trung thực cổng vướng víu hai qubit** xuất sắc và **độ trung thực chuẩn bị trạng thái lượng tử** cao là bắt buộc để thực thi các thuật toán lượng tử phức tạp. Các giao thức xác thực nghiêm ngặt như **quy trình đo điểm chuẩn ngẫu nhiên** và **đo điểm chuẩn entropy chéo** cho phép các nhà vật lý định lượng **tỷ lệ lỗi đo điểm chuẩn ngẫu nhiên** và đảm bảo các mảng **quubit transmon** siêu dẫn hoạt động vượt xa ngưỡng chịu lỗi.

---

## Review in context (Part 2: Error Correction, Tomography, and Advanced Architectures)
As quantum systems scale to hundreds of physical qubits, advanced fault-tolerant techniques become indispensable. Implementing a **quantum error correction surface code** combined with rapid **quantum error syndrome measurement** cycles allows systems to protect fragile quantum data against environmental noise like **thermal noise photon shots**. To diagnose and fix underlying hardware imperfections, physicists rely on **quantum state tomography**, **quantum process tomography**, and **parametric coupler circuit** adjustments that eliminate parasitic cross-talk. Advanced hardware designs such as the **fluxonium superconducting qubit** offer enhanced anharmonicity and noise protection, while automated **quantum circuit transpilation** maps high-level algorithms to native gates. Ultimately, surpassing the **fault-tolerant quantum threshold** and achieving milestones in **quantum volume metric**, **adiabatic quantum annealing**, and historical **quantum supremacy milestone** demonstrations pave the path toward universal, scalable quantum computers supported by **quantum non-demolition measurement** techniques.

**Bản dịch tiếng Việt:**
Khi các hệ thống lượng tử mở rộng quy mô lên hàng trăm qubit vật lý, các kỹ thuật chịu lỗi tiên tiến trở nên không thể thiếu. Việc thực thi **mã bề mặt sửa lỗi lượng tử** kết hợp với các chu kỳ **đo hội chứng lỗi lượng tử** nhanh chóng cho phép các hệ thống bảo vệ dữ liệu lượng tử mỏng manh trước nhiễu môi trường như **tán xạ photon nhiệt**. Để chẩn đoán và khắc phục các khiếm khuyết phần cứng tiềm ẩn, các nhà vật lý dựa vào **chụp cắt lớp trạng thái lượng tử**, **chụp cắt lớp quy trình lượng tử**, và các điều chỉnh **mạch ghép nối tham số** giúp loại bỏ nhiễu chéo ký sinh. Các thiết kế phần cứng tiên tiến như **quubit siêu dẫn fluxonium** mang lại tính phi điều hòa nâng cao và bảo vệ chống nhiễu, trong khi **biên dịch mạch lượng tử** tự động ánh xạ các thuật toán cấp cao sang các cổng bản địa. Cuối cùng, việc vượt qua **ngưỡng lượng tử chịu lỗi** và đạt được các cột mốc về **chỉ số thể tích lượng tử**, **ủ lượng tử đoạn nhiệt**, và các minh chứng lịch sử về **cột mốc ưu thế lượng tử** mở đường hướng tới máy tính lượng tử vạn năng, có khả năng mở rộng được hỗ trợ bởi các kỹ thuật **phép đo lượng tử không phá hủy**.
