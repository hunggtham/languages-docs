# C1 Vocabulary 01 — Quantum computing and information

Nhóm từ này mô tả các khái niệm nền tảng của tính toán lượng tử, từ trạng thái vật lý đến cách xây dựng và bảo vệ mạch tính toán. Flow của bài là: **quantum computing → quantum computer → qubit → superposition → entanglement → quantum gate → quantum circuit → quantum algorithm → quantum error correction → decoherence → quantum advantage → quantum simulation → quantum state → probability amplitude → quantum tunneling**.

---

## 1. quantum computing /ˈkwɑntəm kəmˌpjuːtɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — lĩnh vực tính toán dùng các hiện tượng lượng tử để biểu diễn, biến đổi và đo thông tin.

**Core meaning — English:** The field of computing that uses quantum phenomena to represent, transform, and measure information.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một kiểu máy tính khai thác quy tắc của thế giới rất nhỏ thay vì chỉ dùng bit 0 hoặc 1 cổ điển.

**Grammar & collocations:** `quantum-computing platform` — nền tảng tính toán lượng tử; `quantum computing research` — nghiên cứu tính toán lượng tử; `quantum-computing application` — ứng dụng tính toán lượng tử.

**Register & nuance:** Quantum computing không chỉ là máy tính nhanh hơn trong mọi việc; lợi thế, nếu có, phụ thuộc thuật toán và vấn đề cụ thể.

**Examples:** `Quantum computing may improve some optimization problems.` → Tính toán lượng tử có thể cải thiện một số bài toán tối ưu. `The company invests in quantum-computing research.` → Công ty đầu tư vào nghiên cứu tính toán lượng tử.

**Liên kết tiếng Hàn:** `양자 컴퓨팅`, `양자 계산` — tính toán lượng tử.

## 2. quantum computer /ˈkwɑntəm kəmˌpjuːtɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase` — máy tính xử lý thông tin bằng các hệ lượng tử được điều khiển và đo lường.

**Core meaning — English:** A machine that processes information using controlled and measured quantum systems.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung thiết bị giữ các hệ lượng tử rất nhạy trong môi trường được làm lạnh và che chắn.

**Grammar & collocations:** `build a quantum computer` — xây máy tính lượng tử; `quantum-computer hardware` — phần cứng máy tính lượng tử; `run on a quantum computer` — chạy trên máy tính lượng tử.

**Register & nuance:** Quantum computer có thể dùng nhiều công nghệ vật lý khác nhau; một nguyên mẫu nhỏ chưa đồng nghĩa máy đã chịu lỗi hoặc hữu dụng quy mô lớn.

**Examples:** `The quantum computer required extreme cooling.` → Máy tính lượng tử cần làm lạnh cực sâu. `Researchers ran a toy problem on a quantum computer.` → Các nhà nghiên cứu chạy một bài toán minh họa trên máy tính lượng tử.

**Liên kết tiếng Hàn:** `양자 컴퓨터` — máy tính lượng tử.

## 3. qubit /ˈkjuːbɪt/

**Loại từ & vị trí trong câu:** `countable noun` — đơn vị thông tin lượng tử, có thể được chuẩn bị trong sự kết hợp của hai trạng thái cơ sở.

**Core meaning — English:** A unit of quantum information that can be prepared in a combination of two basis states.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung phiên bản lượng tử của bit, được mô tả bằng một trạng thái có biên độ cho cả 0 và 1 trước khi đo.

**Grammar & collocations:** `logical qubit` — qubit logic; `physical qubit` — qubit vật lý; `qubit coherence` — độ kết hợp của qubit.

**Register & nuance:** Qubit không phải “bit vừa là 0 vừa là 1” theo cách cổ điển; kết quả đo vẫn rời rạc và xác suất được quy định bởi trạng thái.

**Examples:** `The processor contained twenty physical qubits.` → Bộ xử lý chứa hai mươi qubit vật lý. `A logical qubit may require many physical qubits.` → Một qubit logic có thể cần nhiều qubit vật lý.

**Liên kết tiếng Hàn:** `큐비트`, `양자 비트` — qubit, bit lượng tử.

## 4. superposition /ˌsuːpɚpəˈzɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — trạng thái lượng tử là sự kết hợp có thể của nhiều trạng thái cơ sở trước khi đo.

**Core meaning — English:** A quantum state formed as a combination of possible basis states before measurement.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một mũi tên trạng thái chứa nhiều khả năng cho đến khi phép đo chiếu nó vào một kết quả cụ thể.

**Grammar & collocations:** `quantum superposition` — chồng chập lượng tử; `prepare a superposition` — chuẩn bị trạng thái chồng chập; `superposition state` — trạng thái chồng chập.

**Register & nuance:** Superposition là mô tả toán học của trạng thái, không phải tuyên bố rằng một vật vĩ mô quan sát được ở hai nơi theo nghĩa thông thường.

**Examples:** `The pulse placed the qubit in superposition.` → Xung đặt qubit vào trạng thái chồng chập. `Noise quickly disturbed the superposition state.` → Nhiễu nhanh chóng làm xáo trộn trạng thái chồng chập.

**Liên kết tiếng Hàn:** `중첩`, `양자 중첩` — chồng chập, chồng chập lượng tử.

## 5. entanglement /ɪnˈtæŋɡəlmənt/

**Loại từ & vị trí trong câu:** `uncountable noun` — mối tương quan lượng tử giữa các hệ khiến trạng thái chung không thể tách thành trạng thái độc lập của từng phần.

**Core meaning — English:** A quantum correlation in which the joint state of systems cannot be described as independent states of each part.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung hai hệ được mô tả bằng một trạng thái chung; đo một bên giúp dự đoán tương quan ở bên kia nhưng không truyền tin nhanh hơn ánh sáng.

**Grammar & collocations:** `quantum entanglement` — vướng víu lượng tử; `create entanglement` — tạo vướng víu; `entanglement fidelity` — độ trung thành vướng víu.

**Register & nuance:** Entanglement không phải kênh gửi thông điệp tức thời; nó là tài nguyên cho một số giao thức và thuật toán lượng tử.

**Examples:** `The experiment created entanglement between two photons.` → Thí nghiệm tạo vướng víu giữa hai photon. `Entanglement was lost when the environment introduced noise.` → Vướng víu mất khi môi trường đưa nhiễu vào.

**Liên kết tiếng Hàn:** `얽힘`, `양자 얽힘` — vướng víu, vướng víu lượng tử.

## 6. quantum gate /ˈkwɑntəm ɡeɪt/

**Loại từ & vị trí trong câu:** `countable noun phrase` — phép biến đổi có thể đảo ngược tác động lên một hoặc nhiều qubit trong mạch lượng tử.

**Core meaning — English:** A reversible operation applied to one or more qubits in a quantum circuit.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung các “cổng” quay hoặc ghép trạng thái qubit theo phép biến đổi toán học chính xác.

**Grammar & collocations:** `single-qubit gate` — cổng một qubit; `two-qubit gate` — cổng hai qubit; `apply a quantum gate` — áp dụng cổng lượng tử.

**Register & nuance:** Quantum gate tương tự cổng logic nhưng phải bảo toàn tính chất toán học của tiến hóa lượng tử trước phép đo.

**Examples:** `The circuit applied a Hadamard quantum gate.` → Mạch áp dụng cổng lượng tử Hadamard. `Two-qubit gates created entanglement in the register.` → Cổng hai qubit tạo vướng víu trong thanh ghi.

**Liên kết tiếng Hàn:** `양자 게이트` — cổng lượng tử.

## 7. quantum circuit /ˈkwɑntəm ˈsɝkət/

**Loại từ & vị trí trong câu:** `countable noun phrase` — sơ đồ hoặc chuỗi cổng lượng tử, phép đo và dây qubit thực hiện một phép tính.

**Core meaning — English:** A diagram or sequence of quantum gates, measurements, and qubit wires implementing a computation.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung bản nhạc của thuật toán: mỗi đường là qubit, mỗi ký hiệu là một phép biến đổi theo thời gian.

**Grammar & collocations:** `quantum-circuit depth` — độ sâu mạch lượng tử; `compile a quantum circuit` — biên dịch mạch lượng tử; `quantum-circuit simulator` — trình mô phỏng mạch lượng tử.

**Register & nuance:** Quantum circuit là mô hình chương trình ở mức cổng; phần cứng thực tế có thể cần ánh xạ và hiệu chỉnh thêm.

**Examples:** `The compiler shortened the quantum circuit.` → Trình biên dịch rút ngắn mạch lượng tử. `Circuit depth was limited by the device's coherence time.` → Độ sâu mạch bị giới hạn bởi thời gian kết hợp của thiết bị.

**Liên kết tiếng Hàn:** `양자 회로` — mạch lượng tử.

## 8. quantum algorithm /ˈkwɑntəm ˈælɡəˌrɪðəm/

**Loại từ & vị trí trong câu:** `countable noun phrase` — thuật toán dùng các trạng thái và phép biến đổi lượng tử để giải quyết một bài toán hoặc tăng tốc một phần tính toán.

**Core meaning — English:** An algorithm that uses quantum states and operations to solve a problem or speed up part of a computation.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một công thức được thiết kế để khuếch đại khả năng đúng và làm triệt tiêu khả năng sai khi đo.

**Grammar & collocations:** `design a quantum algorithm` — thiết kế thuật toán lượng tử; `quantum-algorithm speedup` — tăng tốc của thuật toán lượng tử; `run a quantum algorithm` — chạy thuật toán lượng tử.

**Register & nuance:** Quantum algorithm chỉ có lợi thế khi cấu trúc bài toán và chi phí nhập/xuất dữ liệu phù hợp; không phải thuật toán cổ điển nào cũng được tăng tốc.

**Examples:** `The quantum algorithm searched an unstructured space more efficiently in theory.` → Về lý thuyết, thuật toán lượng tử tìm không gian không có cấu trúc hiệu quả hơn. `Researchers analyzed the quantum algorithm's error sensitivity.` → Các nhà nghiên cứu phân tích độ nhạy lỗi của thuật toán lượng tử.

**Liên kết tiếng Hàn:** `양자 알고리즘` — thuật toán lượng tử.

## 9. quantum error correction /ˈkwɑntəm ˈerɚ kəˈrekʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — kỹ thuật mã hóa thông tin logic vào nhiều qubit vật lý để phát hiện và sửa một số lỗi lượng tử.

**Core meaning — English:** Techniques that encode logical information across multiple physical qubits to detect and correct certain quantum errors.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung chia một thông điệp mong manh thành mã dư thừa để có thể nhận ra lỗi mà không đo trực tiếp trạng thái bí mật.

**Grammar & collocations:** `quantum-error-correction code` — mã sửa lỗi lượng tử; `fault-tolerant quantum error correction` — sửa lỗi lượng tử chịu lỗi; `implement quantum error correction` — triển khai sửa lỗi lượng tử.

**Register & nuance:** Quantum error correction không sao chép một qubit tùy ý; nó mã hóa thông tin và khai thác mẫu lỗi có thể đo được.

**Examples:** `Quantum error correction requires additional physical qubits.` → Sửa lỗi lượng tử cần thêm qubit vật lý. `The experiment demonstrated a small quantum-error-correction code.` → Thí nghiệm chứng minh một mã sửa lỗi lượng tử nhỏ.

**Liên kết tiếng Hàn:** `양자 오류 정정` — sửa lỗi lượng tử.

## 10. decoherence /ˌdiːkoʊˈhɪrəns/

**Loại từ & vị trí trong câu:** `uncountable noun` — sự mất dần các tương quan pha lượng tử do tương tác với môi trường.

**Core meaning — English:** The gradual loss of quantum phase relationships caused by interaction with the environment.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung trạng thái lượng tử tinh tế bị môi trường “làm ồn” đến mức hành xử giống hệ cổ điển.

**Grammar & collocations:** `reduce decoherence` — giảm mất kết hợp; `decoherence time` — thời gian mất kết hợp; `environment-induced decoherence` — mất kết hợp do môi trường.

**Register & nuance:** Decoherence không nhất thiết là cùng một điều với mọi loại lỗi cổng; nó mô tả mất thông tin pha do tương tác môi trường.

**Examples:** `Cooling the device reduced decoherence.` → Làm lạnh thiết bị làm giảm mất kết hợp. `Long circuits suffered from decoherence before measurement.` → Mạch dài bị mất kết hợp trước khi đo.

**Liên kết tiếng Hàn:** `결맞음 상실`, `디코히어런스` — mất kết hợp.

## 11. quantum advantage /ˈkwɑntəm ədˈvæntɪdʒ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — lợi thế đo được của phương pháp lượng tử so với phương pháp cổ điển cho một nhiệm vụ xác định.

**Core meaning — English:** A measurable benefit of a quantum method over classical methods for a defined task.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung thời điểm máy lượng tử thực sự làm một việc nhanh hơn, chính xác hơn hoặc tiết kiệm hơn cách cổ điển phù hợp.

**Grammar & collocations:** `demonstrate quantum advantage` — chứng minh lợi thế lượng tử; `claim quantum advantage` — tuyên bố lợi thế lượng tử; `practical quantum advantage` — lợi thế lượng tử thực tế.

**Register & nuance:** Quantum advantage phải gắn với bài toán, thước đo và đối thủ cổ điển cụ thể; một trình diễn phòng thí nghiệm chưa chắc hữu dụng thương mại.

**Examples:** `The paper questioned whether the experiment showed practical quantum advantage.` → Bài viết đặt câu hỏi liệu thí nghiệm có cho thấy lợi thế lượng tử thực tế hay không. `Quantum advantage depends on the classical baseline.` → Lợi thế lượng tử phụ thuộc đường cơ sở cổ điển.

**Liên kết tiếng Hàn:** `양자 우위` — lợi thế lượng tử.

## 12. quantum simulation /ˈkwɑntəm ˌsɪmjəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — việc dùng hệ lượng tử có thể điều khiển để mô phỏng hành vi của một hệ lượng tử khác.

**Core meaning — English:** The use of a controllable quantum system to model the behavior of another quantum system.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một “phòng thí nghiệm tương tự” nơi các qubit bắt chước vật liệu, phân tử hoặc hiện tượng khó tính bằng máy cổ điển.

**Grammar & collocations:** `analog quantum simulation` — mô phỏng lượng tử tương tự; `quantum-simulation platform` — nền tảng mô phỏng lượng tử; `run a quantum simulation` — chạy mô phỏng lượng tử.

**Register & nuance:** Quantum simulation có thể là tương tự hoặc số; mục tiêu là bắt chước động lực học, không nhất thiết giải mọi bài toán tổng quát.

**Examples:** `Quantum simulation modeled a magnetic material.` → Mô phỏng lượng tử mô hình hóa một vật liệu từ tính. `The team compared the quantum simulation with laboratory data.` → Nhóm so sánh mô phỏng lượng tử với dữ liệu phòng thí nghiệm.

**Liên kết tiếng Hàn:** `양자 시뮬레이션` — mô phỏng lượng tử.

## 13. quantum state /ˈkwɑntəm steɪt/

**Loại từ & vị trí trong câu:** `countable noun phrase` — mô tả toán học đầy đủ về một hệ lượng tử, bao gồm các biên độ và tương quan có thể quan sát.

**Core meaning — English:** The mathematical description of a quantum system, including its amplitudes and observable correlations.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung “ảnh chụp” trừu tượng của hệ, cho biết xác suất và quan hệ trước khi thực hiện phép đo.

**Grammar & collocations:** `prepare a quantum state` — chuẩn bị trạng thái lượng tử; `measure a quantum state` — đo trạng thái lượng tử; `quantum-state tomography` — chụp cắt lớp trạng thái lượng tử.

**Register & nuance:** Quantum state không phải một danh sách kết quả đã biết; phép đo chỉ cung cấp mẫu kết quả theo phân bố của trạng thái.

**Examples:** `The pulse prepared a quantum state with a known phase.` → Xung chuẩn bị trạng thái lượng tử có pha đã biết. `The researchers reconstructed the quantum state from repeated measurements.` → Các nhà nghiên cứu tái dựng trạng thái lượng tử từ các phép đo lặp lại.

**Liên kết tiếng Hàn:** `양자 상태` — trạng thái lượng tử.

## 14. probability amplitude /ˌprɑbəˈbɪləti ˈæmpləˌtuːd/

**Loại từ & vị trí trong câu:** `countable noun phrase` — đại lượng thường là số phức có bình phương độ lớn cho xác suất của một kết quả đo.

**Core meaning — English:** A quantity, often complex-valued, whose squared magnitude gives the probability of a measurement outcome.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung mũi tên có độ dài và hướng; khi các mũi tên cộng hoặc triệt tiêu, xác suất kết quả thay đổi.

**Grammar & collocations:** `probability-amplitude phase` — pha biên độ xác suất; `probability amplitude` — biên độ xác suất; `calculate probability amplitudes` — tính biên độ xác suất.

**Register & nuance:** Probability amplitude khác xác suất thông thường vì có pha và có thể giao thoa trước khi lấy bình phương độ lớn.

**Examples:** `The gate changed the probability amplitude of each basis state.` → Cổng thay đổi biên độ xác suất của mỗi trạng thái cơ sở. `Interference depends on the relative phase of the probability amplitudes.` → Giao thoa phụ thuộc pha tương đối của các biên độ xác suất.

**Liên kết tiếng Hàn:** `확률 진폭` — biên độ xác suất.

## 15. quantum tunneling /ˈkwɑntəm ˈtʌnəlɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — hiện tượng một hạt có xác suất đi qua rào thế mà theo cơ học cổ điển nó không đủ năng lượng để vượt.

**Core meaning — English:** A phenomenon in which a particle has a probability of passing through a potential barrier that classical mechanics would block.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một hạt xuất hiện ở phía bên kia “bức tường” nhờ bản chất sóng của trạng thái lượng tử.

**Grammar & collocations:** `quantum-tunneling effect` — hiệu ứng xuyên hầm lượng tử; `quantum tunneling rate` — tốc độ xuyên hầm; `observe quantum tunneling` — quan sát xuyên hầm lượng tử.

**Register & nuance:** Quantum tunneling là hiện tượng vật lý, không phải cách truyền thông tin tùy ý qua vật cản hay nhanh hơn ánh sáng.

**Examples:** `Quantum tunneling influences the behavior of nanoscale devices.` → Xuyên hầm lượng tử ảnh hưởng hoạt động của thiết bị nano. `The experiment measured a change in quantum tunneling rate.` → Thí nghiệm đo thay đổi trong tốc độ xuyên hầm lượng tử.

**Liên kết tiếng Hàn:** `양자 터널링`, `양자 터널 효과` — xuyên hầm lượng tử, hiệu ứng đường hầm lượng tử.

## Review in context

In the **quantum computing** lab, a **quantum computer** prepared a **qubit** in **superposition** and created **entanglement** with a second qubit. A sequence of **quantum gates** formed a **quantum circuit**, which implemented a small **quantum algorithm**. Because noise caused **decoherence**, the team tested **quantum error correction** before claiming any **quantum advantage**. They also used **quantum simulation** to study a material. By reconstructing the **quantum state**, they estimated each **probability amplitude** and observed how **quantum tunneling** changed when the barrier was adjusted.

Trong phòng thí nghiệm **tính toán lượng tử**, một **máy tính lượng tử** chuẩn bị một **qubit** ở trạng thái **chồng chập** và tạo **vướng víu** với qubit thứ hai. Một chuỗi **cổng lượng tử** tạo thành **mạch lượng tử**, triển khai một **thuật toán lượng tử** nhỏ. Vì nhiễu gây **mất kết hợp**, nhóm thử **sửa lỗi lượng tử** trước khi tuyên bố có **lợi thế lượng tử**. Họ cũng dùng **mô phỏng lượng tử** để nghiên cứu một vật liệu. Bằng cách tái dựng **trạng thái lượng tử**, họ ước tính từng **biên độ xác suất** và quan sát **xuyên hầm lượng tử** thay đổi khi rào thế được điều chỉnh.
