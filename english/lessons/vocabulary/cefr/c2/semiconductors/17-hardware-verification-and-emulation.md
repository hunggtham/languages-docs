# C2 Vocabulary — Hardware verification and emulation

This lesson follows a digital design from register-transfer intent through simulation, formal proof, emulation, and signoff review.

Flow: **register-transfer level → hardware description language → logic synthesis → netlist equivalence → assertion-based verification → property specification language → bounded model checking → proof convergence → counterexample trace → coverage closure → constrained-random stimulus → transaction-level model → universal verification methodology → verification IP → scoreboard → reference model → hardware emulation → FPGA prototyping → gate-level simulation → signoff waiver**.

## 1. register-transfer level /ˈrɛdʒɪstər ˈtrænsfɝ ˈlɛvəl/
**Part of speech:** noun
**Core meaning (English):** a design abstraction that describes how data moves between registers under clocked control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức mô tả logic giữa các register, nơi designer nói data đi đâu sau mỗi clock.
**Grammar & collocations:** `register-transfer-level design` — thiết kế RTL; `RTL block` — block RTL.
**Examples:** `The team reviewed the register-transfer level before synthesizing the accelerator.` → Nhóm review mức RTL trước khi tổng hợp accelerator.
**Liên kết tiếng Hàn:** `레지스터 전송 수준`.

## 2. hardware description language /ˈhɑrdˌwɛr dɪˈskrɪpʃən ˈlæŋɡwɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a language used to describe the structure and behavior of digital hardware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngôn ngữ mô tả mạch, timing và hành vi phần cứng thay vì chỉ mô tả phần mềm.
**Grammar & collocations:** `hardware-description-language source` — mã nguồn; `HDL construct` — cấu trúc HDL.
**Examples:** `The hardware description language captured both combinational logic and clocked state.` → HDL mô tả cả logic tổ hợp và state theo clock.
**Liên kết tiếng Hàn:** `하드웨어 기술 언어`.

## 3. logic synthesis /ˈlɑdʒɪk ˈsɪnθəsɪs/
**Part of speech:** noun
**Core meaning (English):** converting a hardware design description into a gate-level implementation optimized for a target technology.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi mô tả RTL thành mạng gate phù hợp library và mục tiêu timing/power.
**Grammar & collocations:** `logic-synthesis constraint` — constraint; `run logic synthesis` — chạy synthesis.
**Examples:** `Logic synthesis reduced the adder depth after the timing constraint was tightened.` → Synthesis giảm độ sâu adder khi timing constraint chặt hơn.
**Liên kết tiếng Hàn:** `논리 합성`.

## 4. netlist equivalence /ˈnɛtˌlɪst ɪˈkwɪvələns/
**Part of speech:** noun
**Core meaning (English):** verification that two gate-level netlists implement the same intended logic despite structural differences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra netlist trước và sau tối ưu vẫn cùng chức năng logic.
**Grammar & collocations:** `netlist-equivalence check` — kiểm tra; `prove equivalence` — chứng minh tương đương.
**Examples:** `Netlist equivalence passed after the synthesis tool duplicated a critical path.` → Equivalence đạt sau khi tool nhân bản critical path.
**Liên kết tiếng Hàn:** `넷리스트 동등성`.

## 5. assertion-based verification /əˈsɝʃən beɪst ˌvɛrəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking a design with executable statements that describe conditions which must always hold or eventually occur.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** viết assertion như lời cam kết máy có thể tự kiểm tra trong simulation hoặc proof.
**Grammar & collocations:** `assertion-based verification plan` — kế hoạch; `fire an assertion` — assertion báo lỗi.
**Examples:** `Assertion-based verification caught a response before the request had been accepted.` → Assertion bắt lỗi response xuất hiện trước khi request được nhận.
**Liên kết tiếng Hàn:** `어설션 기반 검증`.

## 6. property specification language /ˈprɑpərti ˌspɛsəfəˈkeɪʃən ˈlæŋɡwɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a formal language for expressing temporal or behavioral properties that a design should satisfy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngôn ngữ viết tính chất theo thời gian, như “nếu request thì cuối cùng phải có grant”.
**Grammar & collocations:** `property-specification-language statement` — câu lệnh; `encode a temporal property` — mã hóa.
**Examples:** `The property specification language stated that every accepted transaction eventually completed.` → Ngôn ngữ đặc tả nêu mỗi transaction được nhận cuối cùng phải hoàn tất.
**Liên kết tiếng Hàn:** `속성 명세 언어`.

## 7. bounded model checking /ˈbaʊndɪd ˈmɑdəl ˌtʃɛkɪŋ/
**Part of speech:** noun
**Core meaning (English):** a formal search for counterexamples within a fixed number of transitions or clock steps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model checking trong phạm vi số bước hữu hạn để tìm trace lỗi ngắn.
**Grammar & collocations:** `bounded-model-checking depth` — độ sâu; `increase the bound` — tăng bound.
**Examples:** `Bounded model checking found a deadlock at depth forty-two.` → Bounded model checking tìm deadlock ở độ sâu 42.
**Liên kết tiếng Hàn:** `유계 모델 검사`.

## 8. proof convergence /pruːf kənˈvɝdʒəns/
**Part of speech:** noun
**Core meaning (English):** the point at which a formal verification engine has enough information to complete a proof rather than continue exploring indefinitely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** proof đã hội tụ, engine đủ invariant và abstraction để kết luận.
**Grammar & collocations:** `reach proof convergence` — đạt hội tụ; `proof-convergence time` — thời gian.
**Examples:** `Extra invariants improved proof convergence for the arbitration property.` → Invariant bổ sung giúp proof hội tụ nhanh hơn cho property arbitration.
**Liên kết tiếng Hàn:** `증명 수렴`.

## 9. counterexample trace /ˈkaʊntərɪɡˌzæmpəl treɪs/
**Part of speech:** noun
**Core meaning (English):** a sequence of states and inputs showing how a formal property can be violated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trace tái hiện từng bước dẫn tới assertion hoặc property bị phá vỡ.
**Grammar & collocations:** `counterexample-trace waveform` — waveform; `inspect a trace` — xem trace.
**Examples:** `The counterexample trace showed two requests entering the queue during reset.` → Trace phản ví dụ cho thấy hai request vào queue trong lúc reset.
**Liên kết tiếng Hàn:** `반례 추적`.

## 10. coverage closure /ˈkʌvərɪdʒ ˈkloʊʒər/
**Part of speech:** noun
**Core meaning (English):** the process of reaching justified coverage targets and explaining or eliminating remaining gaps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đóng coverage bằng test, proof hoặc lý do rõ ràng cho những phần không thể kích hoạt.
**Grammar & collocations:** `coverage-closure review` — review; `close a coverage gap` — đóng gap.
**Examples:** `Coverage closure required a directed test for the rarely used power-saving mode.` → Đóng coverage cần test có chủ đích cho mode tiết kiệm điện hiếm dùng.
**Liên kết tiếng Hàn:** `커버리지 종결`.

## 11. constrained-random stimulus /kənˈstreɪnd ˈrændəm ˈstɪmjələs/
**Part of speech:** noun
**Core meaning (English):** automatically generated test input that is random within rules designed to target meaningful legal scenarios.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stimulus ngẫu nhiên nhưng bị constraint để vẫn hợp lệ và có giá trị kiểm thử.
**Grammar & collocations:** `constrained-random stimulus generator` — generator; `seed a test` — đặt seed.
**Examples:** `Constrained-random stimulus exposed an unusual burst length that directed tests had missed.` → Stimulus constrained-random tìm burst length lạ mà test có sẵn bỏ sót.
**Liên kết tiếng Hàn:** `제약 랜덤 자극`.

## 12. transaction-level model /trænˈzækʃən ˈlɛvəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that represents operations as high-level transactions instead of individual signal toggles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình nói “gửi packet” hoặc “đọc register” thay vì mô phỏng từng dây đổi mức.
**Grammar & collocations:** `transaction-level model interface` — interface; `run a TLM` — chạy TLM.
**Examples:** `The transaction-level model accelerated software-driven tests before RTL was stable.` → TLM tăng tốc test do software điều khiển trước khi RTL ổn định.
**Liên kết tiếng Hàn:** `트랜잭션 수준 모델`.

## 13. universal verification methodology /ˌjuːnəˈvɝsəl ˌvɛrəfəˈkeɪʃən ˌmɛθəˈdɑlədʒi/
**Part of speech:** noun
**Core meaning (English):** a standardized object-oriented methodology for building reusable hardware verification environments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** framework UVM giúp testbench verification có cấu trúc và tái sử dụng.
**Grammar & collocations:** `universal-verification-methodology component` — component; `UVM sequence` — sequence UVM.
**Examples:** `The universal verification methodology organized drivers, monitors, and sequences around reusable components.` → UVM tổ chức driver, monitor và sequence thành component tái sử dụng.
**Liên kết tiếng Hàn:** `범용 검증 방법론`.

## 14. verification IP /ˌvɛrəfəˈkeɪʃən ˌaɪ ˈpiː/
**Part of speech:** noun
**Core meaning (English):** a reusable verification component that models and checks a standard interface or protocol.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** block verification đóng gói sẵn để kiểm tra protocol như PCIe hoặc AXI.
**Grammar & collocations:** `verification-IP agent` — agent; `license verification IP` — mua license.
**Examples:** `The team connected verification IP for the memory protocol before integrating the custom controller.` → Nhóm nối VIP cho memory protocol trước khi tích hợp controller riêng.
**Liên kết tiếng Hàn:** `검증 IP`.

## 15. scoreboard /ˈskɔrˌbɔrd/
**Part of speech:** noun
**Core meaning (English):** a verification component that compares observed transactions with expected results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “bảng điểm” đối chiếu output thật với output model mong đợi.
**Grammar & collocations:** `scoreboard mismatch` — mismatch; `feed transactions to a scoreboard` — đưa transaction vào.
**Examples:** `The scoreboard reported a reordered response that violated the interface contract.` → Scoreboard báo response bị reorder, vi phạm contract interface.
**Liên kết tiếng Hàn:** `스코어보드`.

## 16. reference model /ˈrɛfərəns ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a trusted behavioral model used to calculate expected results for comparison with an implementation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model chuẩn làm “đáp án” để so output RTL hoặc silicon.
**Grammar & collocations:** `reference-model output` — output; `align with the reference model` — khớp.
**Examples:** `The reference model used higher precision so the checker could expose rounding errors.` → Reference model dùng precision cao hơn để checker bắt lỗi làm tròn.
**Liên kết tiếng Hàn:** `참조 모델`.

## 17. hardware emulation /ˈhɑrdˌwɛr ˌɛmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** executing a hardware design on specialized acceleration equipment to run large workloads faster than simulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy design trên hệ thống emulation chuyên dụng để test workload lớn sớm hơn.
**Grammar & collocations:** `hardware-emulation platform` — platform; `map a design onto the emulator` — map.
**Examples:** `Hardware emulation let the software team boot the operating system months before tape-out.` → Emulation cho team software boot OS trước tape-out nhiều tháng.
**Liên kết tiếng Hàn:** `하드웨어 에뮬레이션`.

## 18. FPGA prototyping /ˈɛf piː dʒiː ˈproʊtəˌtaɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** implementing a design on field-programmable gate arrays to evaluate behavior and software integration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa design lên FPGA để có prototype chạy thật trước chip sản xuất.
**Grammar & collocations:** `FPGA-prototyping board` — board; `prototype firmware` — firmware prototype.
**Examples:** `FPGA prototyping revealed a boot-time race that simulation rarely exercised.` → Prototype FPGA lộ race lúc boot mà simulation hiếm khi kích hoạt.
**Liên kết tiếng Hàn:** `FPGA 프로토타이핑`.

## 19. gate-level simulation /ɡeɪt ˈlɛvəl ˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** simulation of a synthesized gate netlist, often with estimated or extracted timing information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô phỏng sau synthesis ở mức gate để kiểm tra timing và hành vi gần phần cứng.
**Grammar & collocations:** `gate-level-simulation dump` — dump; `run post-synthesis simulation` — chạy.
**Examples:** `Gate-level simulation exposed an initialization difference hidden by the ideal RTL model.` → Gate-level simulation lộ khác biệt khởi tạo mà RTL lý tưởng che mất.
**Liên kết tiếng Hàn:** `게이트 수준 시뮬레이션`.

## 20. signoff waiver /ˈsaɪnɔf ˈweɪvər/
**Part of speech:** noun
**Core meaning (English):** a documented approval to accept a known verification or implementation exception without treating it as an open release blocker.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giấy miễn trừ có lý do, owner và điều kiện rõ ràng cho issue đã biết.
**Grammar & collocations:** `approve a signoff waiver` — phê duyệt; `waiver rationale` — lý do waiver.
**Examples:** `The signoff waiver recorded why the unreachable state was safe to exclude from coverage.` → Waiver ghi rõ vì sao state không thể tới vẫn an toàn để loại khỏi coverage.
**Liên kết tiếng Hàn:** `사인오프 면제`.

## Review in context

At the **register-transfer level**, a **hardware description language** expresses the design before **logic synthesis** creates gates. Engineers run **netlist equivalence** and **assertion-based verification**, writing properties in a **property specification language**. **Bounded model checking** searches finite traces; **proof convergence** indicates that a proof can finish, while a **counterexample trace** explains a failure. Simulation teams pursue **coverage closure** with **constrained-random stimulus** and a **transaction-level model** inside a **universal verification methodology** environment. Reusable **verification IP** feeds a **scoreboard** that compares results with a **reference model**. Larger workloads move to **hardware emulation** or **FPGA prototyping**, and **gate-level simulation** checks post-synthesis behavior. Any accepted exception requires a documented **signoff waiver**.

**Bản dịch tiếng Việt:** Ở mức **register-transfer level**, **hardware description language** mô tả thiết kế trước khi **logic synthesis** tạo ra gate. Kỹ sư chạy **netlist equivalence** và **assertion-based verification**, viết property bằng **property specification language**. **Bounded model checking** tìm trong trace hữu hạn; **proof convergence** cho biết proof có thể hoàn tất, còn **counterexample trace** giải thích lỗi. Nhóm simulation theo đuổi **coverage closure** bằng **constrained-random stimulus** và **transaction-level model** trong môi trường **universal verification methodology**. **Verification IP** tái sử dụng đưa transaction vào **scoreboard**, rồi so với **reference model**. Workload lớn hơn chuyển sang **hardware emulation** hoặc **FPGA prototyping**, còn **gate-level simulation** kiểm tra hành vi sau synthesis. Mọi ngoại lệ được chấp nhận cần có **signoff waiver** được ghi nhận.
