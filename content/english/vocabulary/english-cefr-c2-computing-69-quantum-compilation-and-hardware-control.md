# C2 Vocabulary — Quantum compilation and hardware control

This lesson follows a quantum program from logical operations through topology-aware compilation, calibrated pulses, and hardware-aware scheduling.

Flow: **qubit routing → SWAP insertion → coupling graph → gate decomposition → pulse schedule → compiler pass → commutation cancellation → circuit transpilation → topology-aware mapping → calibration drift → gate synthesis → resource estimation → dynamical decoupling → pulse shaping → cross-resonance gate → spectator error → scheduling slack → compilation barrier → control frame → virtual Z rotation**.

## 1. qubit routing /ˈkwɒntəm bɪt ˈruːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** arranging logical interactions on the physical paths allowed by a quantum processor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sắp xếp tương tác logic theo đường phần cứng cho phép.
**Grammar & collocations:** `qubit-routing heuristic` — heuristic; `move a logical state` — di chuyển.
**Examples:** `Qubit routing inserted extra movement because the required pair was not adjacent on the chip.` → Routing thêm di chuyển vì cặp không liền kề.
**Liên kết tiếng Hàn:** `큐비트 라우팅`.

## 2. SWAP insertion /swɒp ɪnˈsɜrʃən/
**Part of speech:** noun
**Core meaning (English):** adding exchange operations so logical qubits can reach hardware-connected positions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm cổng đổi chỗ để qubit logic đến vị trí có kết nối.
**Grammar & collocations:** `SWAP-insertion cost` — cost; `restore adjacency` — khôi phục kề nhau.
**Examples:** `SWAP insertion doubled the circuit depth for the long-range interaction.` → Chèn SWAP gấp đôi độ sâu mạch.
**Liên kết tiếng Hàn:** `스왑 삽입`.

## 3. coupling graph /ˈkʌplɪŋ ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph describing which physical qubits can directly interact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồ thị mô tả qubit vật lý nào tương tác trực tiếp.
**Grammar & collocations:** `coupling-graph constraint` — constraint; `embed an interaction` — ánh xạ.
**Examples:** `The compiler read the coupling graph before assigning the logical register.` → Compiler đọc đồ thị ghép trước khi gán register.
**Liên kết tiếng Hàn:** `결합 그래프`.

## 4. gate decomposition /ɡeɪt ˌdiːkɒmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** rewriting an abstract operation as a sequence of gates supported by the target hardware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi phép trừu tượng thành chuỗi cổng phần cứng hỗ trợ.
**Grammar & collocations:** `gate-decomposition template` — template; `expand a controlled operation` — triển khai.
**Examples:** `Gate decomposition expressed the requested rotation using the device's calibrated primitives.` → Phân rã cổng dùng primitive đã hiệu chuẩn.
**Liên kết tiếng Hàn:** `게이트 분해`.

## 5. pulse schedule /pʌls ˈskedʒuːl/
**Part of speech:** noun
**Core meaning (English):** a timed arrangement of control pulses that implements a quantum circuit on hardware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lịch thời gian của các xung điều khiển để chạy mạch.
**Grammar & collocations:** `pulse-schedule compiler` — compiler; `align drive envelopes` — căn.
**Examples:** `The pulse schedule reserved a measurement window after the entangling operation.` → Lịch xung dành cửa sổ đo sau phép rối.
**Liên kết tiếng Hàn:** `펄스 일정`.

## 6. compiler pass /kəmˈpaɪlər pæs/
**Part of speech:** noun
**Core meaning (English):** one transformation stage in a compiler that changes or analyzes an intermediate circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một bước biến đổi hoặc phân tích trong compiler.
**Grammar & collocations:** `compiler-pass pipeline` — pipeline; `rewrite an intermediate representation` — viết lại.
**Examples:** `A compiler pass removed redundant basis changes before hardware mapping.` → Pass loại đổi basis thừa trước ánh xạ.
**Liên kết tiếng Hàn:** `컴파일러 패스`.

## 7. commutation cancellation /ˌkɒmjʊˈteɪʃən ˌkænsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** eliminating operations after commuting them into positions where inverse effects cancel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi thứ tự phép toán để các hiệu ứng ngược triệt tiêu.
**Grammar & collocations:** `commutation-cancellation rewrite` — rewrite; `remove inverse gates` — loại.
**Examples:** `Commutation cancellation shortened the circuit without changing its logical unitary.` → Triệt tiêu giao hoán rút mạch mà giữ unitary logic.
**Liên kết tiếng Hàn:** `교환 법칙 상쇄`.

## 8. circuit transpilation /ˈsɜrkɪt trænzpaɪˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** converting a hardware-neutral circuit into the instruction language and topology of a target processor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi mạch trung tính thành ngôn ngữ và topology của chip.
**Grammar & collocations:** `circuit-transpilation target` — target; `lower to native operations` — hạ xuống.
**Examples:** `Circuit transpilation produced different depths for the same algorithm on two processors.` → Transpilation tạo độ sâu khác trên hai chip.
**Liên kết tiếng Hàn:** `회로 트랜스파일`.

## 9. topology-aware mapping /təˈpɒlədʒi əˈweər ˈmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** assigning logical qubits while explicitly accounting for the processor's physical connectivity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán qubit logic có tính đến kết nối vật lý.
**Grammar & collocations:** `topology-aware-mapping heuristic` — heuristic; `minimize routing overhead` — giảm.
**Examples:** `Topology-aware mapping preserved a dense logical subgraph on the most reliable hardware region.` → Mapping giữ subgraph dày ở vùng tin cậy.
**Liên kết tiếng Hàn:** `토폴로지 인식 매핑`.

## 10. calibration drift /ˌkælɪˈbreɪʃən drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual change in calibrated hardware behavior after the calibration was performed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hành vi phần cứng lệch dần sau hiệu chuẩn.
**Grammar & collocations:** `calibration-drift monitor` — monitor; `refresh a pulse parameter` — cập nhật.
**Examples:** `Calibration drift made yesterday's pulse schedule unreliable by the afternoon.` → Drift khiến lịch xung hôm qua không đáng tin.
**Liên kết tiếng Hàn:** `보정 드리프트`.

## 11. gate synthesis /ɡeɪt ˈsɪnθəsɪs/
**Part of speech:** noun
**Core meaning (English):** constructing a sequence of available elementary gates that approximates a desired operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dựng chuỗi cổng cơ bản xấp xỉ phép mong muốn.
**Grammar & collocations:** `gate-synthesis precision` — precision; `approximate a unitary` — xấp xỉ.
**Examples:** `Gate synthesis traded a shorter sequence for a small approximation error.` → Tổng hợp cổng đổi chuỗi ngắn lấy lỗi xấp xỉ nhỏ.
**Liên kết tiếng Hàn:** `게이트 합성`.

## 12. resource estimation /rɪˈsɔrs ˌestəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** predicting qubits, gates, time, and other resources required for an implementation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán qubit, cổng, thời gian và tài nguyên triển khai.
**Grammar & collocations:** `resource-estimation report` — report; `project a hardware requirement` — dự phóng.
**Examples:** `Resource estimation exposed that error correction, not arithmetic, dominated the workload.` → Ước tính cho thấy sửa lỗi chi phối tải.
**Liên kết tiếng Hàn:** `자원 추정`.

## 13. dynamical decoupling /daɪˈnæmɪkəl diːˈkʌplɪŋ/
**Part of speech:** noun
**Core meaning (English):** inserting control operations that average away certain environmental interactions during idle periods.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chèn xung để trung bình hóa tương tác môi trường khi chờ.
**Grammar & collocations:** `dynamical-decoupling sequence` — sequence; `suppress low-frequency noise` — giảm.
**Examples:** `Dynamical decoupling preserved the memory state while another qubit was measured.` → Decoupling giữ state khi đo qubit khác.
**Liên kết tiếng Hàn:** `동적 결합 해제`.

## 14. pulse shaping /pʌls ˈʃeɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** designing the time-dependent form of a control pulse to improve selectivity and reduce error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế hình dạng xung theo thời gian để giảm lỗi.
**Grammar & collocations:** `pulse-shaping envelope` — envelope; `suppress spectral spillover` — giảm.
**Examples:** `Pulse shaping reduced leakage into a neighboring transition.` → Tạo hình xung giảm rò sang chuyển tiếp bên cạnh.
**Liên kết tiếng Hàn:** `펄스 형상화`.

## 15. cross-resonance gate /krɒs ˈrezənəns ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a two-qubit gate driven by applying a microwave tone to one qubit near another qubit's frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cổng hai qubit dùng xung gần tần số qubit kia.
**Grammar & collocations:** `cross-resonance-gate calibration` — calibration; `drive the control qubit` — kích.
**Examples:** `The cross-resonance gate required echo pulses to cancel unwanted single-qubit terms.` → Cổng cần xung echo để triệt thành phần thừa.
**Liên kết tiếng Hàn:** `교차 공명 게이트`.

## 16. spectator error /spɛkˈteɪtər ˈerər/
**Part of speech:** noun
**Core meaning (English):** an unwanted change in a qubit that was not intended to participate in an operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi xảy ra ở qubit đứng ngoài thao tác.
**Grammar & collocations:** `spectator-error channel` — channel; `protect an idle qubit` — bảo vệ.
**Examples:** `The pulse leaked energy into a spectator error on the neighboring idle qubit.` → Xung gây lỗi ở qubit nhàn rỗi bên cạnh.
**Liên kết tiếng Hàn:** `관전자 오류`.

## 17. scheduling slack /ˈskedʒuːlɪŋ slæk/
**Part of speech:** noun
**Core meaning (English):** spare timing capacity that lets a schedule absorb variation without violating dependencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian đệm để lịch chịu biến động.
**Grammar & collocations:** `scheduling-slack allocation` — allocation; `absorb timing jitter` — hấp thụ.
**Examples:** `Scheduling slack allowed the controller to wait for a calibration update without shifting every gate.` → Slack cho phép chờ cập nhật mà không dời mọi cổng.
**Liên kết tiếng Hàn:** `스케줄링 여유`.

## 18. compilation barrier /ˌkɒmpɪˈleɪʃən ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** a marker that prevents a compiler from reordering or optimizing operations across a boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker ngăn compiler đổi thứ tự qua ranh giới.
**Grammar & collocations:** `compilation-barrier directive` — directive; `preserve program order` — giữ.
**Examples:** `The compilation barrier preserved the measurement order required by the classical controller.` → Barrier giữ thứ tự đo cho controller.
**Liên kết tiếng Hàn:** `컴파일 장벽`.

## 19. control frame /kənˈtroʊl freɪm/
**Part of speech:** noun
**Core meaning (English):** a software or hardware context that changes how later control pulses are interpreted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngữ cảnh làm thay đổi cách đọc các xung sau.
**Grammar & collocations:** `control-frame update` — update; `retarget a phase reference` — đổi.
**Examples:** `A control frame applied the phase correction without adding another physical pulse.` → Frame áp hiệu chỉnh phase mà không thêm xung.
**Liên kết tiếng Hàn:** `제어 프레임`.

## 20. virtual Z rotation /ˈvɜrtʃuəl ziː roʊˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a phase update implemented by changing the reference frame instead of applying a driven pulse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi phase bằng reference frame thay vì phát xung.
**Grammar & collocations:** `virtual-Z-rotation update` — update; `apply a frame change` — áp dụng.
**Examples:** `The compiler used a virtual Z rotation to correct phase at effectively zero pulse duration.` → Compiler dùng rotation ảo để sửa phase gần như không tốn thời lượng.
**Liên kết tiếng Hàn:** `가상 Z 회전`.

## Review in context

Hardware-aware compilation begins with **qubit routing**, **SWAP insertion**, and a **coupling graph**. **Gate decomposition** and a **compiler pass** lower abstract operations, while **commutation cancellation** can shorten **circuit transpilation**. **Topology-aware mapping** must account for **calibration drift** before choosing **gate synthesis** and a realistic **resource estimation**. The resulting **pulse schedule** gives those operations precise timing. During idle periods, **dynamical decoupling** and **pulse shaping** limit noise; a **cross-resonance gate** must avoid **spectator error**. **Scheduling slack** absorbs timing variation, a **compilation barrier** preserves required order, and a **control frame** can implement a **virtual Z rotation** without another physical pulse.

**Bản dịch tiếng Việt:** Biên dịch có tính đến phần cứng bắt đầu bằng **định tuyến qubit**, **chèn SWAP** và **đồ thị ghép**. **Phân rã cổng** và **pass compiler** hạ phép trừu tượng, còn **triệt tiêu giao hoán** có thể rút ngắn **transpilation mạch**. **Ánh xạ nhận biết topology** phải tính **drift hiệu chuẩn** trước khi chọn **tổng hợp cổng** và **ước tính tài nguyên** thực tế. **Lịch xung** đặt thời điểm chính xác cho các thao tác. Khi chờ, **tách động** và **tạo hình xung** hạn chế nhiễu; **cổng cross-resonance** phải tránh **lỗi spectator**. **Slack lịch** hấp thụ biến động thời gian, **rào cản biên dịch** giữ thứ tự cần thiết, còn **frame điều khiển** có thể thực hiện **xoay Z ảo** mà không thêm xung vật lý.
