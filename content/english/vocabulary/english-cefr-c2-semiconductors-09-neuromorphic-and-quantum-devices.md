# C2 Vocabulary — Neuromorphic and quantum devices

This lesson follows emerging devices from artificial synapses and analog computation to spintronic elements, quantum dots, and cryogenic interfaces.

Flow: **neuromorphic computing → spiking neural network → synaptic device → memristor → resistive switching → conductance state → spike-timing-dependent plasticity → integrate-and-fire neuron → crossbar array → in-memory computing → analog compute → nonvolatile synapse → phase-change element → spintronic device → magnetic tunnel junction → spin-transfer torque → spin-orbit torque → quantum dot → single-electron transistor → cryogenic interface**.

## 1. neuromorphic computing /ˌnʊroʊˈmɔrfɪk kəmˈpjuːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** computing that imitates aspects of biological neural systems through specialized hardware and event-driven processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế phần cứng lấy cảm hứng từ não; xử lý theo sự kiện thay vì chỉ chạy phép tính tuần tự trên CPU.
**Grammar & collocations:** `neuromorphic accelerator` — accelerator neuromorphic; `neuromorphic architecture` — kiến trúc neuromorphic.
**Examples:** `Neuromorphic computing processed sparse sensor events without waking a large general-purpose processor.` → Neuromorphic computing xử lý event sensor thưa mà không cần đánh thức processor đa dụng lớn.
**Liên kết tiếng Hàn:** `뉴로모픽 컴퓨팅`.

## 2. spiking neural network /ˈspaɪkɪŋ ˈnʊrəl ˈnɛtˌwɝk/
**Part of speech:** noun
**Core meaning (English):** a neural network whose units communicate through discrete spikes rather than continuous activation values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** neuron gửi “xung” rời rạc; thông tin nằm ở thời điểm và mẫu spike.
**Grammar & collocations:** `spiking-neural-network model` — model SNN; `train a spiking network` — huấn luyện mạng spike.
**Examples:** `The spiking neural network recognized a gesture from the timing of short voltage pulses.` → Spiking neural network nhận dạng cử chỉ từ thời điểm của các xung điện áp ngắn.
**Liên kết tiếng Hàn:** `스파이킹 신경망`.

## 3. synaptic device /sɪˈnæptɪk dɪˈvaɪs/
**Part of speech:** noun
**Core meaning (English):** a device whose adjustable electrical behavior represents the strength of a connection between artificial neurons.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** linh kiện đóng vai “synapse”, lưu trọng số kết nối thay đổi được.
**Grammar & collocations:** `artificial synaptic device` — linh kiện synapse nhân tạo; `synaptic weight` — trọng số synapse.
**Examples:** `The array tuned each synaptic device during a local learning update.` → Array điều chỉnh từng synaptic device trong một lần update học cục bộ.
**Liên kết tiếng Hàn:** `시냅스 소자`.

## 4. memristor /ˈmɛmˌrɪstər/
**Part of speech:** noun
**Core meaning (English):** a memory-resistive device whose resistance depends on its electrical history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện trở “nhớ” các xung trước; trạng thái điện trở có thể đại diện cho trọng số.
**Grammar & collocations:** `memristor crossbar` — crossbar memristor; `program a memristor` — lập trình memristor.
**Examples:** `A memristor stored an analog weight close to the location where multiplication occurred.` → Memristor lưu trọng số analog gần nơi phép nhân diễn ra.
**Liên kết tiếng Hàn:** `멤리스터`.

## 5. resistive switching /rɪˈzɪstɪv ˈswɪtʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** a reversible change between distinct resistance states caused by an applied electrical stimulus.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xung điện làm vật liệu chuyển giữa trạng thái trở khác nhau, có thể dùng để ghi thông tin.
**Grammar & collocations:** `resistive-switching material` — vật liệu switching; `repeatable switching` — switching lặp lại được.
**Examples:** `The memory cell relied on resistive switching rather than charge stored on a floating gate.` → Memory cell dựa trên resistive switching thay vì điện tích trên floating gate.
**Liên kết tiếng Hàn:** `저항 스위칭`.

## 6. conductance state /kənˈdʌktəns steɪt/
**Part of speech:** noun
**Core meaning (English):** a programmed level of electrical conductance used to represent a value in an analog device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức dẫn điện được lập trình; nhiều conductance state cho phép lưu trọng số nhiều mức.
**Grammar & collocations:** `multilevel conductance state` — state dẫn điện đa mức; `program a conductance state` — lập trình state.
**Examples:** `Device variation made neighboring conductance states difficult to distinguish.` → Sai khác linh kiện khiến các conductance state gần nhau khó phân biệt.
**Liên kết tiếng Hàn:** `컨덕턴스 상태`.

## 7. spike-timing-dependent plasticity /ˈspaɪk ˈtaɪmɪŋ dɪˈpɛndənt plæˈstɪsəti/
**Part of speech:** noun
**Core meaning (English):** a learning rule that changes a synaptic weight according to the relative timing of pre- and post-synaptic spikes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timing của hai spike quyết định synapse mạnh lên hay yếu đi.
**Grammar & collocations:** `STDP rule` — rule STDP; `STDP update` — update theo STDP.
**Examples:** `Spike-timing-dependent plasticity strengthened a connection when the input spike consistently arrived first.` → STDP làm connection mạnh hơn khi input spike luôn đến trước.
**Liên kết tiếng Hàn:** `스파이크 시간 의존 가소성`.

## 8. integrate-and-fire neuron /ˈɪntəˌɡreɪt ænd faɪər ˈnʊrɑn/
**Part of speech:** noun
**Core meaning (English):** a simplified neuron model that accumulates input until a threshold is reached, emits a spike, and resets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** neuron cộng dồn input, chạm ngưỡng thì bắn spike rồi reset.
**Grammar & collocations:** `leaky integrate-and-fire neuron` — neuron LIF; `integrate-and-fire model` — model integrate-and-fire.
**Examples:** `The simulator represented each sensor channel with an integrate-and-fire neuron.` → Simulator biểu diễn mỗi kênh sensor bằng một integrate-and-fire neuron.
**Liên kết tiếng Hàn:** `적분-발화 뉴런`.

## 9. crossbar array /ˈkrɔsˌbɑr əˈreɪ/
**Part of speech:** noun
**Core meaning (English):** a grid of intersecting word lines and bit lines in which devices at the intersections perform or store computations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận dây ngang-dọc; linh kiện tại giao điểm vừa lưu weight vừa tham gia tính toán.
**Grammar & collocations:** `resistive crossbar array` — array crossbar điện trở; `crossbar dimension` — kích thước crossbar.
**Examples:** `The crossbar array multiplied a vector by stored conductances in one analog operation.` → Crossbar array nhân vector với conductance đã lưu trong một phép analog.
**Liên kết tiếng Hàn:** `크로스바 어레이`.

## 10. in-memory computing /ɪn ˈmɛməri kəmˈpjuːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** computation performed where data is stored so that repeated transfers between memory and a processor are reduced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính toán ngay trong memory, tránh kéo data qua lại giữa memory và CPU.
**Grammar & collocations:** `in-memory-computing accelerator` — accelerator tính trong memory; `in-memory multiply` — phép nhân trong memory.
**Examples:** `In-memory computing reduced data movement for the matrix multiply.` → In-memory computing giảm việc di chuyển data cho phép nhân ma trận.
**Liên kết tiếng Hàn:** `메모리 내 컴퓨팅`.

## 11. analog compute /ˈænəˌlɔɡ kəmˈpjuːt/
**Part of speech:** noun
**Core meaning (English):** computation represented and carried out through continuous physical quantities such as voltage or current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép tính dùng đại lượng liên tục như điện áp/dòng điện thay vì chỉ số nhị phân rời rạc.
**Grammar & collocations:** `analog-compute path` — đường tính analog; `analog compute error` — lỗi tính analog.
**Examples:** `Analog compute was efficient, but calibration was needed to control drift and noise.` → Analog compute hiệu quả nhưng cần calibration để kiểm soát drift và noise.
**Liên kết tiếng Hàn:** `아날로그 연산`.

## 12. nonvolatile synapse /ˌnɑnˈvɑlətəl ˈsɪnæps/
**Part of speech:** noun
**Core meaning (English):** an artificial synapse that retains its programmed weight without continuous power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** synapse giữ trọng số khi tắt điện, giúp accelerator khởi động lại mà không học lại từ đầu.
**Grammar & collocations:** `nonvolatile synaptic array` — array synapse nonvolatile; `retain a synaptic weight` — giữ trọng số.
**Examples:** `A nonvolatile synapse preserved the trained weight during a power interruption.` → Nonvolatile synapse giữ trọng số đã học trong lúc mất điện.
**Liên kết tiếng Hàn:** `비휘발성 시냅스`.

## 13. phase-change element /feɪz tʃeɪndʒ ˈɛləmənt/
**Part of speech:** noun
**Core meaning (English):** a device that stores information by switching a material between structural phases with different electrical properties.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần tử đổi pha vật liệu để tạo trạng thái điện khác nhau, dùng làm memory hoặc synapse.
**Grammar & collocations:** `phase-change element` — phần tử đổi pha; `program a phase` — lập trình pha.
**Examples:** `The phase-change element encoded several weight levels rather than a single binary bit.` → Phase-change element mã hóa nhiều mức trọng số thay vì một bit nhị phân.
**Liên kết tiếng Hàn:** `상변화 소자`.

## 14. spintronic device /spɪnˈtrɑnɪk dɪˈvaɪs/
**Part of speech:** noun
**Core meaning (English):** a device that uses electron spin as well as charge to store, transport, or process information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khai thác spin của electron bên cạnh điện tích để tạo chức năng điện tử.
**Grammar & collocations:** `spintronic memory` — memory spintronic; `spintronic logic` — logic spintronic.
**Examples:** `The spintronic device retained information without the refresh cycles required by volatile memory.` → Spintronic device giữ thông tin mà không cần refresh cycle như memory volatile.
**Liên kết tiếng Hàn:** `스핀트로닉 소자`.

## 15. magnetic tunnel junction /mæɡˈnɛtɪk ˈtʌnəl ˈdʒʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a structure with two magnetic layers separated by a thin insulating barrier whose resistance depends on their magnetic alignment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai lớp từ tính ngăn bởi lớp cách điện mỏng; hướng spin tương đối tạo mức trở khác nhau.
**Grammar & collocations:** `MTJ stack` — stack MTJ; `tunnel magnetoresistance` — từ trở đường hầm.
**Examples:** `The magnetic tunnel junction represented a bit through parallel or antiparallel layer alignment.` → Magnetic tunnel junction biểu diễn bit bằng hướng song song hoặc đối song song của các lớp.
**Liên kết tiếng Hàn:** `자기 터널 접합`.

## 16. spin-transfer torque /spɪn ˈtrænsfər tɔrk/
**Part of speech:** noun
**Core meaning (English):** a torque that changes a magnetic layer's orientation when spin-polarized current passes through it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng điện mang spin tác động lực xoắn lên lớp từ tính để đổi hướng.
**Grammar & collocations:** `spin-transfer-torque switching` — switching bằng torque truyền spin; `STT-MRAM` — MRAM dùng STT.
**Examples:** `Spin-transfer torque switched the free layer without moving physical charge across a mechanical part.` → Spin-transfer torque đổi lớp tự do mà không có bộ phận cơ khí di chuyển.
**Liên kết tiếng Hàn:** `스핀 전달 토크`.

## 17. spin-orbit torque /spɪn ˈɔrbɪt tɔrk/
**Part of speech:** noun
**Core meaning (English):** a torque generated by spin–orbit interactions that can reorient magnetization in a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tương tác spin–quỹ đạo tạo torque để điều khiển hướng từ hóa, thường tách đường ghi và đọc.
**Grammar & collocations:** `spin-orbit-torque switching` — switching SOT; `SOT device` — thiết bị SOT.
**Examples:** `Spin-orbit torque enabled a separate write path for the magnetic element.` → Spin-orbit torque cho phép đường ghi riêng cho phần tử từ.
**Liên kết tiếng Hàn:** `스핀-궤도 토크`.

## 18. quantum dot /ˈkwɑntəm dɑt/
**Part of speech:** noun
**Core meaning (English):** a nanoscale region that confines charge carriers so its energy levels behave like those of an artificial atom.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “nguyên tử nhân tạo” ở kích thước nano; electron bị nhốt tạo mức năng lượng rời rạc.
**Grammar & collocations:** `quantum-dot array` — array quantum dot; `confined quantum dot` — quantum dot bị giam giữ.
**Examples:** `The quantum dot emitted light at a wavelength set by its size.` → Quantum dot phát sáng ở bước sóng do kích thước của nó quyết định.
**Liên kết tiếng Hàn:** `양자점`.

## 19. single-electron transistor /ˈsɪŋɡəl ɪˈlɛktrɑn trænˈzɪstər/
**Part of speech:** noun
**Core meaning (English):** a transistor whose operation is controlled by the movement of individual electrons through a tiny island.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transistor điều khiển từng electron; rất nhạy với điện tích nhỏ và thường cần nhiệt độ thấp.
**Grammar & collocations:** `single-electron transistor array` — array SET; `Coulomb blockade` — blockade Coulomb.
**Examples:** `The single-electron transistor detected charge changes too small for a conventional MOSFET.` → Single-electron transistor phát hiện thay đổi điện tích quá nhỏ với MOSFET thông thường.
**Liên kết tiếng Hàn:** `단전자 트랜지스터`.

## 20. cryogenic interface /kraɪəˈdʒɛnɪk ˈɪntərˌfeɪs/
**Part of speech:** noun
**Core meaning (English):** the electrical and control connection between room-temperature electronics and hardware operated at very low temperature.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “cầu nối” giữa mạch ở nhiệt độ thường và device siêu lạnh, phải hạn chế nhiệt, noise và số dây.
**Grammar & collocations:** `cryogenic-interface circuit` — mạch interface cryogenic; `operate at cryogenic temperature` — chạy ở nhiệt độ cryogenic.
**Examples:** `The cryogenic interface reduced wiring between the room-temperature controller and the quantum chip.` → Cryogenic interface giảm số dây giữa controller ở nhiệt độ thường và quantum chip.
**Liên kết tiếng Hàn:** `극저온 인터페이스`.

## Review in context

**Neuromorphic computing** often uses a **spiking neural network** built from a **synaptic device** such as a **memristor**. **Resistive switching** changes a device's **conductance state**, and **spike-timing-dependent plasticity** updates that state when an **integrate-and-fire neuron** emits a pulse. A **crossbar array** enables **in-memory computing** and **analog compute**; a **nonvolatile synapse** or **phase-change element** can retain learned values. In another device family, a **spintronic device** may use a **magnetic tunnel junction**, **spin-transfer torque**, or **spin-orbit torque**. At the quantum scale, a **quantum dot** and a **single-electron transistor** require a carefully designed **cryogenic interface**.

**Bản dịch tiếng Việt:** **Neuromorphic computing** thường dùng **spiking neural network** xây từ **synaptic device** như **memristor**. **Resistive switching** thay đổi **conductance state**, còn **spike-timing-dependent plasticity** cập nhật state khi **integrate-and-fire neuron** phát xung. **Crossbar array** hỗ trợ **in-memory computing** và **analog compute**; **nonvolatile synapse** hoặc **phase-change element** có thể giữ giá trị đã học. Ở họ linh kiện khác, **spintronic device** có thể dùng **magnetic tunnel junction**, **spin-transfer torque** hoặc **spin-orbit torque**. Ở quy mô lượng tử, **quantum dot** và **single-electron transistor** cần một **cryogenic interface** được thiết kế cẩn thận.
