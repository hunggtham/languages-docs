# C2 Vocabulary 185 — Neuromorphic spiking neural architectures, event-driven circuits, and synaptic plasticity

Ở trình độ C2 trong khoa học máy tính tiên tiến và kiến trúc phần cứng thế hệ mới, sự hội tụ giữa khoa học thần kinh tính toán và kỹ thuật vi điện tử đã khai sinh ra kỷ nguyên điện toán phỏng não (neuromorphic computing). Vượt qua giới hạn thắt cổ chai von Neumann truyền thống, các hệ thống mạch bất đồng bộ định hướng sự kiện và mạng nơ-ron phát xung (SNNs) cho phép xử lý thông tin với mức tiêu tán năng lượng siêu thấp và độ trễ cực tiểu. Bài học này đi sâu vào cơ chế vật lý của điện toán tương tự trong bộ nhớ, động lực học nơ-ron tích phân rò rỉ và kích hoạt, các mảng thanh chéo memristor, giao thức biểu diễn địa chỉ sự kiện (AER) và các quy tắc mềm dẻo khớp thần kinh cục bộ như STDP giúp hiện thực hóa trí tuệ nhân tạo biên tự học trên chip.

Flow của bài học: **spike-timing-dependent synaptic plasticity** → **asynchronous event-driven routing** → **leaky integrate-and-fire dynamics** → **memristive crossbar arrays** → **ultra-low energy dissipation** → **analog in-memory compute** → **address-event representation protocol** → **neuromorphic spiking core** → **refractory period conductance** → **post-synaptic current decay** → **spike frequency adaptation** → **event-driven temporal sparsity** → **bio-inspired synapse conductance** → **non-volatile resistive switching** → **dendritic computation modeling** → **homeostatic synaptic scaling** → **spike-based backpropagation surrogate** → **crossbar line parasitics** → **analog subthreshold circuit operation** → **asynchronous arbitration logic** → **temporal spike pattern encoding** → **phase-change memristor cell** → **dynamic vision sensor interface** → **energy-delay-product optimization** → **neuromorphic substrate scalings**.

---

## 1. spike-timing-dependent synaptic plasticity /ˌspaɪk ˈtaɪmɪŋ dɪˌpɛndənt sɪˈnæptɪk plæˈstɪsəti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt: STDP). Thường làm chủ ngữ hoặc quy tắc học không giám sát cục bộ trong kiến trúc neuromorphic (ví dụ: `implement spike-timing-dependent synaptic plasticity`).

**Core meaning — English:** A biologically plausible local learning rule where the precise temporal order and millisecond-scale difference between pre-synaptic and post-synaptic action potentials adjust synaptic weight, causing long-term potentiation or depression.

**Core meaning & mental image — Tiếng Việt:** Tính mềm dẻo khớp thần kinh phụ thuộc thời gian phát xung; hãy hình dung mối liên kết giữa hai người gõ chuông: nếu người A luôn gõ chuông ngay trước khi người B gõ, sợi dây liên kết giữa họ sẽ được bện dày hơn (tăng trọng số / potentiation); nhưng nếu người B gõ chuông trước rồi người A mới gõ đuổi theo sau, mối liên kết bị coi là vô nghĩa và sợi dây bị cắt mỏng dần đi (giảm trọng số / depression).

**Grammar & collocations:** `govern via spike-timing-dependent synaptic plasticity` — chi phối thông qua tính mềm dẻo khớp thần kinh phụ thuộc thời gian phát xung; `unsupervised spike-timing-dependent synaptic plasticity` — tính mềm dẻo khớp thần kinh phụ thuộc thời gian phát xung không giám sát; `emulate spike-timing-dependent synaptic plasticity` — mô phỏng tính mềm dẻo khớp thần kinh phụ thuộc thời gian phát xung.

**Register & nuance:** `computational neuroscience & neuromorphic engineering` — quy tắc học cục bộ (local learning rule) không cần truyền ngược gradient toàn cục (backpropagation), cho phép chip tự học tại chỗ (on-chip online learning).

**Examples:** `By emulating spike-timing-dependent synaptic plasticity directly across nanoscale oxide memristors, the neuromorphic processor adapted to unfamiliar sensory patterns without cloud intervention.` → Bằng cách mô phỏng tính mềm dẻo khớp thần kinh phụ thuộc thời gian phát xung trực tiếp trên các memristor oxit kích thước nano, bộ xử lý phỏng não đã thích nghi với các mẫu cảm giác xa lạ mà không cần can thiệp từ đám mây.

**Liên kết tiếng Hàn:** `스파이크 타이밍 의존적 시냅스 가소성` (spike timing 依存的 synapse 可塑性 / STDP) — tính mềm dẻo của khớp thần kinh phụ thuộc vào thời điểm phát xung.

---

## 2. asynchronous event-driven routing /eɪˈsɪŋkrənəs ɪˈvɛnt ˈdrɪvən ˈruːtɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là kiến trúc truyền thông gói tin giữa các lõi nơ-ron không cần xung nhịp đồng hồ (ví dụ: `rely on asynchronous event-driven routing`).

**Core meaning — English:** A clockless interconnect scheme where digital spike packets are routed between neuromorphic cores only when a physical neuron fires, eliminating static global clock power consumption.

**Core meaning & mental image — Tiếng Việt:** Định tuyến theo sự kiện bất đồng bộ; hãy hình dung một hệ thống bưu điện không hề có lịch xe chạy cố định hàng giờ (không có clock toàn cục): xe chỉ nổ máy và xuất phát khi có một phong bì thư khẩn cấp được thả vào hòm thư; nếu cả thành phố không ai gửi thư, toàn bộ mạng lưới giao thông đứng yên tuyệt đối và không tiêu tốn một giọt xăng nào.

**Grammar & collocations:** `implement asynchronous event-driven routing` — triển khai định tuyến theo sự kiện bất đồng bộ; `scalability of asynchronous event-driven routing` — khả năng mở rộng của định tuyến theo sự kiện bất đồng bộ; `low-latency asynchronous event-driven routing` — định tuyến theo sự kiện bất đồng bộ độ trễ thấp.

**Register & nuance:** `asynchronous circuit design & NoC (Network-on-Chip)` — nguyên lý nền tảng của các siêu chip như IBM TrueNorth hay Intel Loihi; năng lượng tiêu thụ tỷ lệ thuận với số lượng xung (activity-proportional power).

**Examples:** `The processor employs asynchronous event-driven routing via a 2D mesh network-on-chip, transmitting packets exclusively when a neuron membrane potential crosses its threshold.` → Bộ xử lý sử dụng định tuyến theo sự kiện bất đồng bộ thông qua một mạng lưới trên chip dạng lưới 2D, chỉ truyền các gói tin khi điện thế màng nơ-ron vượt qua ngưỡng kích hoạt.

**Liên kết tiếng Hàn:** `비동기 이벤트 기반 라우팅` (非同期 event 基盤 routing) — định tuyến dựa trên sự kiện bất đồng bộ.

---

## 3. leaky integrate-and-fire dynamics /ˈliːki ˈɪntəˌɡreɪt ənd ˈfaɪər daɪˈnæmɪks/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ (viết tắt: LIF dynamics). Thường làm mô hình toán học hoặc trạng thái điện tích của nơ-ron nhân tạo (ví dụ: `govern by leaky integrate-and-fire dynamics`).

**Core meaning — English:** The mathematical and physical behavior of a simplified biological neuron model that continuously integrates incoming synaptic inputs over time while constantly leaking charge toward resting potential until a spike threshold is reached.

**Core meaning & mental image — Tiếng Việt:** Động lực học nơ-ron tích phân rò rỉ và kích hoạt; hãy hình dung một chiếc xô nước bị thủng một lỗ nhỏ ở đáy: mỗi giọt nước rơi vào làm mực nước dâng lên (tích phân điện tích); nếu nước chảy vào quá chậm, nước sẽ rò rỉ hết qua lỗ thủng (rò rỉ điện tích); nhưng nếu các giọt nước rơi vào dồn dập khiến nước tràn qua miệng xô (vượt ngưỡng), một chiếc đòn bẩy sẽ lật chiếc xô đổ ụp xuống phát ra một tiếng chuông vang (phát xung), rồi chiếc xô rỗng trở về vị trí ban đầu.

**Grammar & collocations:** `model leaky integrate-and-fire dynamics` — mô hình hóa động lực học nơ-ron tích phân rò rỉ và kích hoạt; `analog emulation of leaky integrate-and-fire dynamics` — mô phỏng tương tự của động lực học tích phân rò rỉ và kích hoạt; `parameters in leaky integrate-and-fire dynamics` — các tham số trong động lực học tích phân rò rỉ và kích hoạt.

**Register & nuance:** `computational neuroscience & spike-based modeling` — mô hình nơ-ron spiking cân bằng hoàn hảo giữa tính chính xác sinh học và độ phức tạp tính toán mạch phần cứng; đơn giản hơn mô hình Hodgkin-Huxley nhiều bậc phương trình vi phân.

**Examples:** `Silicon neurons governed by leaky integrate-and-fire dynamics reset their membrane potentials to a baseline voltage immediately after emitting an action potential.` → Các nơ-ron silic hoạt động theo động lực học nơ-ron tích phân rò rỉ và kích hoạt lập tức tái thiết lập điện thế màng của chúng về điện áp cơ sở ngay sau khi phát ra một điện thế hoạt động.

**Liên kết tiếng Hàn:** `누설 적분 발화 역학` (漏泄 積分 發火 力學 / LIF 역학) — động lực học tích phân rò rỉ và phát xung.

---

## 4. memristive crossbar arrays /mɛmˈrɪstɪv ˈkrɔsˌbɑr əˈreɪz/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Đóng vai trò là cấu trúc phần cứng cốt lõi thực hiện nhân ma trận tương tự trong bộ nhớ (ví dụ: `fabricate memristive crossbar arrays`).

**Core meaning — English:** Dense, grid-like hardware architectures composed of orthogonal metal wire grids where two-terminal resistive memory devices (memristors) sit at each intersection, performing parallel matrix-vector multiplication via Ohm's and Kirchhoff's laws.

**Core meaning & mental image — Tiếng Việt:** Các mảng thanh chéo memristor; hãy hình dung một tấm lưới ô vuông bằng dây đồng với các thanh ngang và thanh dọc không chạm nhau trực tiếp: tại mỗi điểm giao cắt, người ta hàn một linh kiện biến trở nhớ (memristor) đóng vai trò như một khớp thần kinh; khi đưa điện áp vào các thanh ngang, dòng điện tự động tính toán phép nhân ma trận và cộng tổng dòng điện chạy ra ở các thanh dọc theo định luật vật lý tức thì trong 1 nano giây.

**Grammar & collocations:** `compute within memristive crossbar arrays` — tính toán bên trong các mảng thanh chéo memristor; `conductance states in memristive crossbar arrays` — các trạng thái độ dẫn điện trong mảng thanh chéo memristor; `scalability of memristive crossbar arrays` — khả năng mở rộng của các mảng thanh chéo memristor.

**Register & nuance:** `novel semiconductor architectures & in-memory computing` — phá vỡ nút thắt von Neumann; cho phép tính toán song song $O(1)$ thời gian mà không cần luân chuyển dữ liệu giữa bộ nhớ và bộ xử lý.

**Examples:** `Memristive crossbar arrays execute fully parallel matrix-vector multiplications in the analog domain, achieving throughput density orders of magnitude higher than conventional digital accelerators.` → Các mảng thanh chéo memristor thực thi các phép nhân ma trận - vector hoàn toàn song song trong miền tương tự, đạt được mật độ thông lượng cao hơn nhiều bậc độ lớn so với các bộ tăng tốc kỹ thuật số thông thường.

**Liên kết tiếng Hàn:** `멤리스티브 크로스바 어레이 / 멤리스터 크로스바 배열` (memristive crossbar 配列) — mảng thanh chéo linh kiện nhớ memristor.

---

## 5. ultra-low energy dissipation /ˈʌltrə loʊ ˈɛnərdʒi ˌdɪsəˈpeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm ưu thế hàng đầu của công nghệ neuromorphic so với kiến trúc von Neumann (ví dụ: `achieve ultra-low energy dissipation`).

**Core meaning — English:** The minimal consumption and waste of electrical energy as heat per synaptic event or computational operation, typically measured in femtojoules (fJ) or picojoules (pJ).

**Core meaning & mental image — Tiếng Việt:** Sự tiêu tán năng lượng siêu thấp; hãy hình dung một chiếc đồng hồ điện tử có thể chạy hàng trăm năm chỉ bằng một cú chạm ngón tay: thay vì những lò nhiệt GPU ngốn hàng nghìn watt điện và tỏa hơi nóng hầm hập, con chip phỏng não chỉ tiêu tốn từng giọt năng lượng cực nhỏ cỡ femtojoule cho mỗi phép tính, mát rượi và gần như không tỏa nhiệt.

**Grammar & collocations:** `operate with ultra-low energy dissipation` — hoạt động với sự tiêu tán năng lượng siêu thấp; `benefit from ultra-low energy dissipation` — hưởng lợi từ sự tiêu tán năng lượng siêu thấp; `target ultra-low energy dissipation` — hướng tới mục tiêu tiêu tán năng lượng siêu thấp.

**Register & nuance:** `green computing & edge hardware engineering` — mục tiêu cốt lõi của các thiết bị pin độc lập, thiết bị y tế cấy ghép vào cơ thể và robot thám hiểm không gian sâu.

**Examples:** `Operating in the subthreshold regime allows bio-mimetic neuromorphic processors to achieve ultra-low energy dissipation of less than twenty femtojoules per synaptic spike.` → Hoạt động ở chế độ dưới ngưỡng cho phép các bộ xử lý phỏng não bắt chước sinh học đạt được mức tiêu tán năng lượng siêu thấp dưới 20 femtojoule cho mỗi xung khớp thần kinh.

**Liên kết tiếng Hàn:** `초저에너지 소산` (超低energy 消散) — sự tiêu hao / phân tán năng lượng cực thấp.

---

## 6. analog in-memory compute /ˈænəlɔɡ ɪn ˈmɛməri kəmˈpjuːt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (thường gọi: AIMC). Đóng vai trò là hệ hình tính toán triệt tiêu việc di chuyển dữ liệu (ví dụ: `execute analog in-memory compute`).

**Core meaning — English:** A computing paradigm where calculations (such as dot products) are physically performed directly within memory arrays using physical laws (Ohm's law for multiplication, Kirchhoff's law for addition), eliminating data movement.

**Core meaning & mental image — Tiếng Việt:** Điện toán tương tự trong bộ nhớ; hãy hình dung thay vì phải bê hàng vạn cuốn sách từ thư viện (bộ nhớ RAM) về bàn học (CPU) để làm phép tính cộng rồi lại bê sách trả về, bạn tiến hành tính toán ngay trên chính các giá sách bằng cách đo cường độ dòng điện chạy qua các gáy sách kim loại; thời gian vận chuyển sách giảm về số 0.

**Grammar & collocations:** `paradigm of analog in-memory compute` — hệ hình điện toán tương tự trong bộ nhớ; `harness analog in-memory compute` — khai thác điện toán tương tự trong bộ nhớ; `analog in-memory compute core` — lõi điện toán tương tự trong bộ nhớ.

**Register & nuance:** `next-generation computer engineering` — giải pháp triệt để cho vấn đề "memory wall" (bức tường bộ nhớ) vốn làm hao tổn hơn 80% năng lượng trong các mô hình AI hiện đại.

**Examples:** `By performing dot products directly at the memory cells, analog in-memory compute eliminates the energy-hungry bus transfers characteristic of conventional von Neumann computing.` → Bằng cách thực hiện các tích vô hướng trực tiếp tại các ô nhớ, điện toán tương tự trong bộ nhớ loại bỏ các đường truyền bus ngốn năng lượng vốn là đặc trưng của điện toán von Neumann truyền thống.

**Liên kết tiếng Hàn:** `아날로그 인메모리 연산` (analog in-memory 演算) — tính toán tương tự trực tiếp trong bộ nhớ.

---

## 7. address-event representation protocol /ˈæˌdrɛs ɪˈvɛnt ˌrɛprəzɛnˈteɪʃən ˈproʊtəˌkɔl/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt: AER protocol). Đóng vai trò là chuẩn giao thức truyền thông điểm - điểm cho các tín hiệu xung thần kinh (ví dụ: `transmit via the address-event representation protocol`).

**Core meaning — English:** A digital communications protocol for neuromorphic systems where time represents itself, and only the binary address of the specific firing neuron (source or destination) is broadcast across a shared bus.

**Core meaning & mental image — Tiếng Việt:** Giao thức biểu diễn sự kiện theo địa chỉ; hãy hình dung một chiếc tổng đài điện thoại không bao giờ ghi lại nội dung cuộc trò chuyện hay lưu trữ âm thanh: mỗi khi có một người nói, tổng đài chỉ phát đi đúng mã số nhà của người vừa cất lời vào đúng thời điểm đó; bên nhận lập tức biết chính xác ai vừa lên tiếng mà không cần truyền tải luồng video nặng nề.

**Grammar & collocations:** `encode via address-event representation protocol` — mã hóa thông qua giao thức biểu diễn sự kiện theo địa chỉ; `asynchronous address-event representation protocol` — giao thức biểu diễn sự kiện theo địa chỉ bất đồng bộ; `address-event representation protocol bus` — bus giao thức biểu diễn sự kiện theo địa chỉ.

**Register & nuance:** `neuromorphic communications & event sensors` — tiêu chuẩn công nghiệp kết nối camera thị giác động (DVS sensor) với chip xử lý xung (neuromorphic chip).

**Examples:** `The dynamic vision sensor communicates pixel illumination changes to the neuromorphic accelerator using the asynchronous address-event representation protocol.` → Cảm biến thị giác động truyền đạt những thay đổi độ sáng của điểm ảnh tới bộ tăng tốc phỏng não bằng cách sử dụng giao thức biểu diễn sự kiện theo địa chỉ bất đồng bộ.

**Liên kết tiếng Hàn:** `AER 프로토콜 / 주소 이벤트 표현 프로토콜` (住所 event 表現 protocol) — giao thức biểu diễn sự kiện theo địa chỉ.

---

## 8. neuromorphic spiking core /ˈnʊroʊˌmɔrfɪk ˈspaɪkɪŋ kɔr/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm đơn vị kiến trúc xử lý cơ bản trên các vi xử lý phỏng não đa lõi (ví dụ: `integrate thousands of neuromorphic spiking cores`).

**Core meaning — English:** A modular hardware processing unit that emulates a cluster of biological neurons and their interconnecting synapses, integrating incoming event packets and generating output spikes autonomously.

**Core meaning & mental image — Tiếng Việt:** Lõi nơ-ron phát xung phỏng não; hãy hình dung một ngôi làng tự trị thu nhỏ: bên trong làng có 1.000 cư dân (nơ-ron số/tương tự) và hàng triệu con đường liên lạc (khớp thần kinh); ngôi làng tự thu nhận tin nhắn từ các làng khác, tự xử lý nội bộ và phát tín hiệu ra ngoài mà không cần một vị vua trung ương điều hành.

**Grammar & collocations:** `tile multiple neuromorphic spiking cores` — xếp lớp nhiều lõi nơ-ron phát xung phỏng não; `architecture of the neuromorphic spiking core` — kiến trúc của lõi nơ-ron phát xung phỏng não; `scalable neuromorphic spiking core` — lõi nơ-ron phát xung phỏng não có thể mở rộng.

**Register & nuance:** `hardware architecture & VLSI design` — đơn vị cấu thành của chip Loihi 2 (128 cores/chip) hoặc BrainScaleS; mỗi lõi quản lý hàng nghìn nơ-ron với bộ nhớ cục bộ riêng (SRAM hoặc memristor crossbar).

**Examples:** `Each neuromorphic spiking core manages a pool of one thousand leaky integrate-and-fire neurons interconnected by a local synaptic crossbar.` → Mỗi lõi nơ-ron phát xung phỏng não quản lý một nhóm gồm 1.000 nơ-ron tích phân rò rỉ và kích hoạt được liên kết với nhau bằng một mảng thanh chéo khớp thần kinh cục bộ.

**Liên kết tiếng Hàn:** `뉴로모픽 스파이킹 코어` (neuromorphic spiking core) — lõi xử lý nơ-ron phát xung phỏng não.

---

## 9. refractory period conductance /rɪˈfræktəri ˈpɪriəd kənˈdʌktəns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cơ chế kiểm soát tần số kích hoạt tối đa của nơ-ron nhân tạo (ví dụ: `modulate refractory period conductance`).

**Core meaning — English:** The temporary elevation of membrane channel conductance following an action potential that clamps the neuron membrane potential near its resting value, rendering it insensitive to incoming excitations.

**Core meaning & mental image — Tiếng Việt:** Độ dẫn điện trong thời kỳ trơ; hãy hình dung một khẩu súng thần công sau khi vừa bắn một phát đạn rực lửa: nòng súng quá nóng khiến người lính phải dội nước làm nguội và khóa chốt an toàn trong 5 giây; trong thời gian làm nguội đó (thời kỳ trơ), dù bạn có kéo cò liên tục thì súng cũng không thể khai hỏa, ngăn chặn tình trạng nòng súng bị nổ tung do bắn quá tải.

**Grammar & collocations:** `set refractory period conductance` — thiết lập độ dẫn điện thời kỳ trơ; `absolute refractory period conductance` — độ dẫn điện thời kỳ trơ tuyệt đối; `hardware control of refractory period conductance` — kiểm soát độ dẫn điện thời kỳ trơ bằng phần cứng.

**Register & nuance:** `cellular biophysics & silicon neuron circuits` — ngăn ngừa hiện tượng nơ-ron bị kích thích liên tục không hồi kết (runaway excitation) và giới hạn tần số bắn xung tối đa trong phạm vi an toàn nhiệt.

**Examples:** `By adjusting the refractory period conductance in analog silicon neurons, designers prevented high-frequency bursting that could saturate on-chip communication channels.` → Bằng cách điều chỉnh độ dẫn điện thời kỳ trơ trong các nơ-ron silic tương tự, các nhà thiết kế đã ngăn chặn hiện tượng bùng nổ xung tần số cao vốn có thể làm bão hòa các kênh truyền thông trên chip.

**Liên kết tiếng Hàn:** `불응기 전도도` (不應期 傳導度) — độ dẫn điện trong thời kỳ trơ của nơ-ron.

---

## 10. post-synaptic current decay /poʊst sɪˈnæptɪk ˈkɜrənt dɪˈkeɪ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt: PSC decay). Thường làm hàm thời gian chi phối sự suy giảm điện thế màng nơ-ron (ví dụ: `exhibit exponential post-synaptic current decay`).

**Core meaning — English:** The gradual exponential decay of the electrical current flowing into a post-synaptic neuron after neurotransmitter release, mimicking the biological clearing of synaptic receptors.

**Core meaning & mental image — Tiếng Việt:** Sự suy giảm dòng điện sau khớp thần kinh; hãy hình dung một tiếng đàn guitar vừa được gảy lên: âm thanh ngân vang lớn nhất ngay tại khoảnh khắc ngón tay bật vào dây đàn, sau đó tiếng chuông ngân nhỏ dần theo đường cong hàm mũ êm đềm cho đến khi tan biến hẳn vào không gian tĩnh lặng.

**Grammar & collocations:** `exponential post-synaptic current decay` — sự suy giảm dòng điện sau khớp thần kinh theo hàm mũ; `time constant of post-synaptic current decay` — hằng số thời gian của sự suy giảm dòng điện sau khớp thần kinh; `model post-synaptic current decay` — mô hình hóa sự suy giảm dòng điện sau khớp thần kinh.

**Register & nuance:** `synaptic transmission kinetics & neuromorphic filtering` — quy định cửa sổ thời gian (temporal integration window) để nơ-ron có thể cộng dồn các xung tín hiệu liên tiếp đến từ nhiều nơ-ron trước khớp.

**Examples:** `The time constant governing post-synaptic current decay determines the temporal integration window over which coincident inputs can trigger a spike.` → Hằng số thời gian chi phối sự suy giảm dòng điện sau khớp thần kinh quyết định cửa sổ tích phân thời gian mà trong đó các đầu vào trùng phùng có thể kích hoạt một xung.

**Liên kết tiếng Hàn:** `시냅스 후 전류 감쇠` (synapse 後 電流 減衰 / PSC 감쇠) — sự suy giảm / tiêu hao dòng điện sau khớp thần kinh.

---

## 11. spike frequency adaptation /ˈspaɪk ˈfriːkwənsi ˌædæpˈteɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cơ chế tự điều hòa độ nhạy cảm ứng của nơ-ron (ví dụ: `implement spike frequency adaptation`).

**Core meaning — English:** A biological phenomenon where a neuron progressively reduces its firing rate in response to a constant, sustained excitatory input current, highlighting temporal changes rather than static levels.

**Core meaning & mental image — Tiếng Việt:** Sự thích nghi tần số phát xung; hãy hình dung bạn bước vào một căn phòng có mùi nước hoa lạ: ban đầu mũi bạn ngửi thấy mùi rất rõ và liên tục phát tín hiệu báo động lên não; nhưng chỉ sau vài phút ngồi yên, khứu giác tự động giảm dần tần số báo tin giúp bạn quen với mùi hương đó để sẵn sàng nhận biết bất kỳ mùi hương mới nào khác xuất hiện.

**Grammar & collocations:** `exhibit spike frequency adaptation` — thể hiện sự thích nghi tần số phát xung; `mechanisms of spike frequency adaptation` — các cơ chế thích nghi tần số phát xung; `rate of spike frequency adaptation` — tốc độ thích nghi tần số phát xung.

**Register & nuance:** `computational neurobiology & sensory coding` — giúp nơ-ron đóng vai trò như một bộ lọc thông cao thời gian (temporal high-pass filter), tập trung vào các sự kiện chuyển động mới (novelty detection) và tiết kiệm năng lượng.

**Examples:** `Spike frequency adaptation ensures that sensory neurons fire vigorously upon sudden stimulus onset but taper their firing during prolonged static illumination.` → Sự thích nghi tần số phát xung bảo đảm rằng các nơ-ron cảm giác phát xung mạnh mẽ khi có kích thích đột ngột xuất hiện nhưng giảm dần việc phát xung trong thời gian chiếu sáng tĩnh kéo dài.

**Liên kết tiếng Hàn:** `스파이크 빈도 적응` (spike 頻度 適應) — sự thích ứng tần số phát xung thần kinh.

---

## 12. event-driven temporal sparsity /ɪˈvɛnt ˈdrɪvən ˈtɛmpərəl ˈspɑrsəti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm nguyên lý hoạt động cốt lõi mang lại hiệu suất năng lượng vượt trội của neuromorphic computing (ví dụ: `exploit event-driven temporal sparsity`).

**Core meaning — English:** The architectural property wherein computations and data transmissions occur only at discrete, rare moments in time when significant physical events occur, leaving circuits idle most of the time.

**Core meaning & mental image — Tiếng Việt:** Tính thưa thớt thời gian định hướng theo sự kiện; hãy hình dung một người lính gác rừng ban đêm: suốt 99,9% thời gian khu rừng im ắng, người lính ngồi yên nhắm mắt tĩnh dưỡng; chỉ khi một nhánh cây gãy kêu răng rắc hoặc có ánh lửa bùng lên, người lính mới lập tức mở mắt hành động; sự tính toán chỉ diễn ra vào những khoảnh khắc hiếm hoi có biến động thật sự.

**Grammar & collocations:** `leverage event-driven temporal sparsity` — tận dụng tính thưa thớt thời gian định hướng sự kiện; `degree of event-driven temporal sparsity` — mức độ thưa thớt thời gian định hướng sự kiện; `maximize event-driven temporal sparsity` — tối đa hóa tính thưa thớt thời gian định hướng sự kiện.

**Register & nuance:** `low-power computing theory` — đối lập hoàn toàn với deep learning truyền thống (nơi ma trận dày đặc tính toán liên tục từng khung hình dù màn hình không đổi).

**Examples:** `Neuromorphic architectures exploit event-driven temporal sparsity to keep more than ninety percent of physical routing channels in deep sleep during quiet intervals.` → Các kiến trúc phỏng não khai thác tính thưa thớt thời gian định hướng theo sự kiện để giữ hơn 90% các kênh định tuyến vật lý ở trạng thái ngủ sâu trong các khoảng thời gian yên tĩnh.

**Liên kết tiếng Hàn:** `이벤트 기반 시간적 희소성` (event 基盤 時間的 稀少性) — tính thưa thớt / gián đoạn theo thời gian dựa trên sự kiện.

---

## 13. bio-inspired synapse conductance /ˌbaɪoʊ ɪnˈspaɪərd ˈsɪnæps kənˈdʌktəns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm đại lượng vật lý tương ứng với trọng số mạng nơ-ron (ví dụ: `tune bio-inspired synapse conductance`).

**Core meaning — English:** The electrically adjustable channel conductivity of a solid-state device that directly represents synaptic weight in neuromorphic hardware, modulating current flow proportional to connection strength.

**Core meaning & mental image — Tiếng Việt:** Độ dẫn điện của khớp thần kinh lấy cảm hứng sinh học; hãy hình dung một van nước vi mô có thể điều chỉnh độ mở cực kỳ tinh vi: khi khớp thần kinh muốn truyền tín hiệu mạnh, van nước mở rộng (độ dẫn tăng); khi muốn ức chế, van nước siết chặt lại (độ dẫn giảm), cho phép dòng điện chảy qua phản ánh chính xác độ khăng khít giữa hai tế bào thần kinh.

**Grammar & collocations:** `modulate bio-inspired synapse conductance` — điều biến độ dẫn điện của khớp thần kinh lấy cảm hứng sinh học; `multi-level bio-inspired synapse conductance` — độ dẫn điện đa mức của khớp thần kinh lấy cảm hứng sinh học; `stability of bio-inspired synapse conductance` — độ ổn định của độ dẫn điện khớp thần kinh sinh học.

**Register & nuance:** `memristor physics & synaptic electronics` — tương tự sinh học của "synaptic weight" trong mạng nơ-ron nhân tạo, nhưng được lưu trữ dưới dạng biến trở vật lý thực thụ trên chip.

**Examples:** `Applying brief programming voltage pulses progressively modified the bio-inspired synapse conductance, achieving continuously analog weight updates.` → Việc áp dụng các xung điện áp lập trình ngắn hạn đã dần dần thay đổi độ dẫn điện của khớp thần kinh lấy cảm hứng sinh học, đạt được các cập nhật trọng số tương tự liên tục.

**Liên kết tiếng Hàn:** `생체모사 시냅스 전도도` (生體模寫 synapse 傳導度) — độ dẫn điện khớp thần kinh phỏng sinh học.

---

## 14. non-volatile resistive switching /nɑn ˈvɑlətəl rɪˈzɪstɪv ˈswɪtʃɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong phần mô tả cơ chế vật lý chất rắn của memristor và RRAM (ví dụ: `rely on non-volatile resistive switching`).

**Core meaning — English:** The physical phenomenon in dielectric thin films where electrical stress reversibly alters electrical resistance between distinct persistent conductive states, retaining state without power.

**Core meaning & mental image — Tiếng Việt:** Hiện tượng chuyển mạch điện trở không bay hơi; hãy hình dung một cây cầu rút bằng kim loại nano bắc qua hào nước: khi có một xung điện dương chạy qua, các nguyên tử kim loại tụ lại thành một sợi dây dẫn nối liền cây cầu (trạng thái điện trở thấp); khi có xung điện âm, cây cầu bị cắt đứt; ngay cả khi ngắt toàn bộ nguồn điện, cấu trúc cây cầu vẫn giữ nguyên vị trí trong nhiều năm mà không bị biến mất.

**Grammar & collocations:** `mechanism of non-volatile resistive switching` — cơ chế chuyển mạch điện trở không bay hơi; `reproducible non-volatile resistive switching` — chuyển mạch điện trở không bay hơi có tính tái lặp; `filamentary non-volatile resistive switching` — chuyển mạch điện trở không bay hơi dạng sợi dẫn.

**Register & nuance:** `materials science & nanoelectronics` — nền tảng của bộ nhớ RRAM và memristor; phân biệt với RAM thông thường vốn mất toàn bộ dữ liệu ngay khi ngắt điện (volatile memory).

**Examples:** `Filamentary formation and rupture within titanium dioxide films govern non-volatile resistive switching, allowing synaptic weights to persist indefinitely without power.` → Sự hình thành và đứt gãy sợi dẫn bên trong các màng titan dioxide chi phối hiện tượng chuyển mạch điện trở không bay hơi, cho phép các trọng số khớp thần kinh tồn lưu vô hạn mà không cần cấp nguồn.

**Liên kết tiếng Hàn:** `비휘발성 저항 스위칭` (非揮發性 抵抗 switching) — hiện tượng chuyển mạch điện trở không bay hơi.

---

## 15. dendritic computation modeling /dɛnˈdrɪtɪk ˌkɑmpjəˈteɪʃən ˈmɑdəlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp toán học mở rộng năng lực tính toán phi tuyến tính của nơ-ron nhân tạo (ví dụ: `incorporate dendritic computation modeling`).

**Core meaning — English:** The mathematical emulation of non-linear spatial and temporal integration occurring along the branched arbor of biological dendrites, allowing individual neurons to solve complex tasks prior to soma integration.

**Core meaning & mental image — Tiếng Việt:** Mô hình hóa tính toán trên sợi nhánh; hãy hình dung một cây cổ thụ với hàng trăm cành nhánh: thay vì chỉ có thân cây chính mới biết suy nghĩ, mỗi cành nhánh nhỏ tự nó đã là một bộ vi xử lý thông minh có thể giải quyết các phép toán logic cục bộ trước khi gửi báo cáo tổng hợp về cho thân cây; điều này nhân gấp bội năng lực tính toán của một tế bào đơn lẻ.

**Grammar & collocations:** `implement dendritic computation modeling` — triển khai mô hình hóa tính toán trên sợi nhánh; `benefits of dendritic computation modeling` — lợi ích của việc mô hình hóa tính toán sợi nhánh; `non-linear dendritic computation modeling` — mô hình hóa tính toán sợi nhánh phi tuyến tính.

**Register & nuance:** `theoretical neurobiology & advanced neuromorphic architectures` — vượt lên trên mô hình nơ-ron điểm (point-neuron model) truyền thống vốn coi nơ-ron chỉ là một điểm nút cộng vô hướng đơn giản.

**Examples:** `Incorporating dendritic computation modeling into silicon neurons enabled single cells to perform non-linear XOR classifications that previously required multi-layer networks.` → Việc kết hợp mô hình hóa tính toán trên sợi nhánh vào các nơ-ron silic đã cho phép các tế bào đơn lẻ thực hiện các phân loại XOR phi tuyến tính mà trước đây đòi hỏi các mạng đa tầng.

**Liên kết tiếng Hàn:** `수상돌기 연산 모델링` (樹狀突起 演算 modeling) — mô hình hóa tính toán trên sợi nhánh nơ-ron (dendrite).

---

## 16. homeostatic synaptic scaling /ˌhoʊmioʊˈstætɪk sɪˈnæptɪk ˈskeɪlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là cơ chế cân bằng nội môi ngăn chặn hiện tượng bão hòa trọng số mạng thần kinh (ví dụ: `trigger homeostatic synaptic scaling`).

**Core meaning — English:** A slow, negative-feedback regulatory process that proportionally adjusts the strength of all synapses on a neuron up or down to keep total firing activity within a stable dynamic range.

**Core meaning & mental image — Tiếng Việt:** Cân bằng nội môi quy mô khớp thần kinh; hãy hình dung một dàn loa hòa nhạc: nếu tất cả các nhạc cụ đều đồng loạt vặn âm lượng lên mức cực đại làm âm thanh bị rè chói tai (mạng nơ-ron bão hòa), người kỹ sư âm thanh sẽ tự động vặn nhỏ nút tổng âm lượng của toàn bộ dàn loa xuống một tỷ lệ nhất định, giữ cho bản hòa tấu luôn êm tai và nằm trong dải nghe tối ưu.

**Grammar & collocations:** `regulate via homeostatic synaptic scaling` — điều hòa thông qua cân bằng nội môi quy mô khớp thần kinh; `homeostatic synaptic scaling mechanism` — cơ chế cân bằng nội môi quy mô khớp thần kinh; `preserve network stability through homeostatic synaptic scaling` — bảo toàn sự ổn định của mạng thông qua cân bằng nội môi quy mô khớp thần kinh.

**Register & nuance:** `neural plasticity & systems stability` — bổ sung thiết yếu cho STDP; vì STDP thuần túy là phản hồi dương (positive feedback) dễ khiến trọng số tăng vô hạn hoặc giảm về 0, cân bằng nội môi đóng vai trò mỏ neo giữ ổn định toàn mạng.

**Examples:** `Without homeostatic synaptic scaling, continuous unsupervised plasticity quickly drives memristor weights toward saturation, causing uncontrollable network epileptiform firing.` → Nếu không có cân bằng nội môi quy mô khớp thần kinh, tính mềm dẻo không giám sát liên tục sẽ nhanh chóng đẩy các trọng số memristor tới mức bão hòa, gây ra hiện tượng phát xung dạng động kinh không thể kiểm soát của mạng.

**Liên kết tiếng Hàn:** `항상성 시냅스 스케일링 / 조절` (恒常性 synapse scaling) — sự điều chỉnh quy mô khớp thần kinh cân bằng nội môi.

---

## 17. spike-based backpropagation surrogate /ˈspaɪk beɪst ˌbækˌprɑpəˈɡeɪʃən ˈsɜrəɡət/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong các thuật toán huấn luyện mạng nơ-ron phát xung có giám sát (ví dụ: `train using a spike-based backpropagation surrogate`).

**Core meaning — English:** A computational method that replaces the non-differentiable step function of a thresholding neuron with a smooth, continuous surrogate gradient during the backward pass, enabling gradient descent in SNNs.

**Core meaning & mental image — Tiếng Việt:** Đạo hàm thay thế truyền ngược dựa trên xung; hãy hình dung một bậc thang đứng thẳng tắp 90 độ: một chiếc xe leo dốc không thể tính toán độ dốc (đạo hàm bằng vô cùng hoặc bằng 0 tại mọi điểm, làm tê liệt thuật toán gradient descent); các kỹ sư đặt một tấm ván trượt mượt mà có độ dốc thoai thoải đè lên bậc thang đó trong lúc tính toán ngược, giúp xe trượt êm xuôi và tối ưu hóa trọng số dễ dàng.

**Grammar & collocations:** `implement a spike-based backpropagation surrogate` — triển khai một đạo hàm thay thế truyền ngược dựa trên xung; `surrogate gradient formulation` — công thức gradient thay thế; `train deep SNNs via spike-based backpropagation surrogate` — huấn luyện SNN sâu thông qua đạo hàm thay thế truyền ngược dựa trên xung.

**Register & nuance:** `deep neuromorphic learning algorithms` — kỹ thuật đột phá cho phép áp dụng sức mạnh tối ưu hóa của PyTorch / TensorFlow để huấn luyện các mạng spiking nơ-ron đạt độ chính xác tương đương mạng ANN sâu.

**Examples:** `Employing a spike-based backpropagation surrogate allowed the deep spiking network to be trained end-to-end on complex acoustic speech benchmarks with high accuracy.` → Việc sử dụng đạo hàm thay thế truyền ngược dựa trên xung đã cho phép mạng phát xung sâu được huấn luyện đầu-cuối trên các bộ thử chuẩn âm thanh tiếng nói phức tạp với độ chính xác cao.

**Liên kết tiếng Hàn:** `스파이크 기반 역전파 대리 기울기` (spike 基盤 逆傳播 代理 傾斜 / surrogate gradient) — gradient thay thế truyền ngược dựa trên xung.

---

## 18. crossbar line parasitics /ˈkrɔsˌbɑr laɪn ˌpærəˈsɪtɪks/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Đóng vai trò là các hiệu ứng vật lý ký sinh làm suy giảm độ chính xác tính toán trong mảng memristor (ví dụ: `mitigate crossbar line parasitics`).

**Core meaning — English:** Unintended electrical resistance and capacitance inherent in the metallic interconnect lines of a crossbar array, which cause voltage drops (IR drops) and degrade analog computational accuracy.

**Core meaning & mental image — Tiếng Việt:** Điện trở và điện dung ký sinh trên đường dây mảng thanh chéo; hãy hình dung một hệ thống ống dẫn nước dài ngoằng: ma sát của thành ống bằng kim loại làm tụt áp lực nước (sụt áp IR drop) khi dòng nước chảy từ đầu nguồn đến cuối nguồn; các ô nhớ nằm ở góc xa nhất của mảng nhận được điện áp yếu hơn các ô ở gần, gây sai lệch kết quả tính toán số học.

**Grammar & collocations:** `compensate for crossbar line parasitics` — bù trừ các đại lượng ký sinh trên đường dây mảng thanh chéo; `impact of crossbar line parasitics` — tác động của các đại lượng ký sinh đường dây mảng thanh chéo; `model crossbar line parasitics` — mô hình hóa các đại lượng ký sinh trên đường dây thanh chéo.

**Register & nuance:** `circuit simulation & physical design signoff` — thách thức vật lý số một giới hạn kích thước tối đa của mảng memristor (thường không thể làm mảng lớn hơn 128x128 mà không có mạch khuếch đại bù sụt áp).

**Examples:** `Circuit simulators must rigorously account for crossbar line parasitics to prevent wire resistance from distorting the computed vector-matrix products in large arrays.` → Các bộ mô phỏng mạch phải tính toán nghiêm ngặt các đại lượng ký sinh trên đường dây mảng thanh chéo nhằm ngăn điện trở dây dẫn làm méo mó các tích vector - ma trận được tính toán trong các mảng kích thước lớn.

**Liên kết tiếng Hàn:** `크로스바 라인 기생 성분` (crossbar line 寄生成分) — các thành phần ký sinh (điện trở, điện dung) trên đường dây mảng thanh chéo.

---

## 19. analog subthreshold circuit operation /ˈænəlɔɡ sʌbˈθrɛʃˌhoʊld ˈsɜrkət ˌɑpəˈreɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong phần thiết kế mạch VLSI tiêu thụ công suất cực thấp (ví dụ: `rely on analog subthreshold circuit operation`).

**Core meaning — English:** The operation of MOSFET transistors with gate-to-source voltages below their threshold voltage, utilizing exponential diffusion currents (weak inversion) to mimic ion channel kinetics with extreme power efficiency.

**Core meaning & mental image — Tiếng Việt:** Vận hành mạch tương tự ở chế độ dưới ngưỡng; hãy hình dung một chiếc van nước chưa hề được vặn mở chính thức (điện áp dưới ngưỡng kích hoạt), nhưng do áp lực nước, từng phân tử nước thẩm thấu li ti rò rỉ qua gioăng cao su; dòng rò rỉ siêu nhỏ này chảy theo hàm mũ giống hệt dòng ion qua kênh màng nơ-ron sinh học, vừa tạo ra tính toán mềm mại vừa tiêu tốn dòng điện chỉ tính bằng nanoampe.

**Grammar & collocations:** `exploit analog subthreshold circuit operation` — khai thác vận hành mạch tương tự ở chế độ dưới ngưỡng; `challenges of analog subthreshold circuit operation` — những thách thức của việc vận hành mạch tương tự ở chế độ dưới ngưỡng; `efficiency of analog subthreshold circuit operation` — hiệu suất của vận hành mạch tương tự chế độ dưới ngưỡng.

**Register & nuance:** `neuromorphic VLSI design` — tiên phong bởi Carver Mead (cha đẻ của neuromorphic engineering); nhược điểm lớn nhất là rất nhạy cảm với sự biến thiên quy trình sản xuất (process variation) và nhiệt độ môi trường.

**Examples:** `By exploiting analog subthreshold circuit operation, Carver Mead demonstrated that silicon transistors naturally emulate the exponential Boltzmann statistics of biological ion channels.` → Bằng cách khai thác sự vận hành mạch tương tự ở chế độ dưới ngưỡng, Carver Mead đã chứng minh rằng các transistor silic bắt chước một cách tự nhiên thống kê Boltzmann hàm mũ của các kênh ion sinh học.

**Liên kết tiếng Hàn:** `아날로그 문턱하 회로 동작` (analog 門檻下 回路 動作 / subthreshold 동작) — hoạt động của mạch tương tự ở chế độ dưới điện áp ngưỡng.

---

## 20. asynchronous arbitration logic /eɪˈsɪŋkrənəs ˌɑrbəˈtreɪʃən ˈlɑdʒɪk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cơ chế giải quyết xung đột truy cập bus khi nhiều nơ-ron cùng phát xung một lúc (ví dụ: `resolve collisions using asynchronous arbitration logic`).

**Core meaning — English:** Hardware logic circuits (such as mutual exclusion elements and arbiter trees) that resolve conflicts between concurrent, independent spike events without a global clock, ordering packets fairly.

**Core meaning & mental image — Tiếng Việt:** Logic trọng tài bất đồng bộ; hãy hình dung một ngã tư đường không có đèn xanh đèn đỏ bật theo nhịp (không có đồng hồ clock): một vị cảnh sát giao thông nhạy bén đứng giữa tâm đường, lập tức quyết định cho chiếc xe nào đến trước một phần triệu giây được đi qua trước, giữ cho dòng xe lưu thông nhịp nhàng và tuyệt đối không bao giờ để xảy ra tai nạn đâm va hay tắc đường.

**Grammar & collocations:** `implement asynchronous arbitration logic` — triển khai logic trọng tài bất đồng bộ; `tree-structured asynchronous arbitration logic` — logic trọng tài bất đồng bộ cấu trúc cây; `fairness in asynchronous arbitration logic` — tính công bằng trong logic trọng tài bất đồng bộ.

**Register & nuance:** `asynchronous systems & AER design` — thành phần cốt lõi của giao thức AER; ngăn chặn trạng thái bất định (metastability) khi hai nơ-ron phát xung đồng thời đến từng picosecond.

**Examples:** `Fast asynchronous arbitration logic resolves collisions when multiple silicon neurons attempt to broadcast spike events over the shared AER communication bus at the same instant.` → Logic trọng tài bất đồng bộ tốc độ cao giải quyết các va chạm khi nhiều nơ-ron silic cố gắng phát sóng các sự kiện xung qua bus truyền thông AER dùng chung vào cùng một khoảnh khắc.

**Liên kết tiếng Hàn:** `비동기 중재 로직` (非同期 仲裁 logic) — mạch logic trọng tài / phân xử bất đồng bộ.

---

## 21. temporal spike pattern encoding /ˈtɛmpərəl spaɪk ˈpætərn ɛnˈkoʊdɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là phương thức biểu diễn thông tin dựa trên khoảng cách thời gian giữa các xung (ví dụ: `utilize temporal spike pattern encoding`).

**Core meaning — English:** The representation of sensory or cognitive information in the precise timing, latency, or inter-spike intervals of action potentials, rather than merely in average firing rates.

**Core meaning & mental image — Tiếng Việt:** Mã hóa mẫu xung theo thời gian; hãy hình dung bảng mã Morse: bức điện tín truyền đi ý nghĩa sâu sắc không phải bằng việc phát ra thật nhiều tiếng tít tít vô nghĩa, mà bằng nhịp điệu ngắt nghỉ tinh tế giữa các tiếng "tít" ngắn và tiếng "te" dài; khoảng thời gian mili giây giữa các xung chứa đựng toàn bộ cấu trúc dữ liệu của thông tin thị giác hay âm thanh.

**Grammar & collocations:** `information via temporal spike pattern encoding` — thông tin thông qua mã hóa mẫu xung theo thời gian; `advantages of temporal spike pattern encoding` — các lợi thế của mã hóa mẫu xung theo thời gian; `decode temporal spike pattern encoding` — giải mã sự mã hóa mẫu xung theo thời gian.

**Register & nuance:** `neural coding theory` — vượt trội hơn mã hóa theo tần số trung bình (rate coding) về tốc độ truyền tải thông tin và hiệu suất năng lượng; chỉ cần một hoặc hai xung là truyền tải xong một quyết định phân loại.

**Examples:** `Unlike rate-based coding that requires hundreds of pulses, temporal spike pattern encoding conveys complex auditory classifications using the precise arrival times of fewer than five spikes.` → Khác với mã hóa theo tần số đòi hỏi hàng trăm xung, mã hóa mẫu xung theo thời gian truyền tải các phân loại thính giác phức tạp chỉ bằng thời điểm xuất hiện chính xác của chưa đầy năm xung.

**Liên kết tiếng Hàn:** `시간적 스파이크 패턴 부호화` (時間的 spike pattern 符號化) — mã hóa mẫu xung nơ-ron theo trục thời gian.

---

## 22. phase-change memristor cell /feɪz tʃeɪndʒ mɛmˈrɪstər sɛl/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt: PCM cell). Thường làm linh kiện lưu trữ trọng số tương tự trong các chip tăng tốc AI (ví dụ: `program the phase-change memristor cell`).

**Core meaning — English:** A nanoscale electronic memory element that utilizes thermally driven reversible phase transitions between amorphous (high resistance) and crystalline (low resistance) states of chalcogenide glass to store multi-level synaptic weights.

**Core meaning & mental image — Tiếng Việt:** Ô nhớ memristor chuyển pha; hãy hình dung một khối chất liệu thủy tinh đặc biệt: khi gia nhiệt nhanh rồi làm nguội đột ngột, nó đông cứng thành một khối vô định hình hỗn độn làm nghẽn dòng điện (điện trở cao); nhưng khi ủ nhiệt từ tốn, các nguyên tử tự sắp xếp thành mạng tinh thể ngăn nắp cho dòng điện lướt qua dễ dàng (điện trở thấp); việc điều chỉnh tỷ lệ pha tinh thể cho phép lưu trữ hàng chục mức trọng số bền bỉ.

**Grammar & collocations:** `conductance drift in a phase-change memristor cell` — hiện tượng trôi độ dẫn trong ô nhớ memristor chuyển pha; `cycle endurance of phase-change memristor cells` — độ bền chu kỳ của các ô nhớ memristor chuyển pha; `multi-level phase-change memristor cell array` — mảng ô nhớ memristor chuyển pha đa mức.

**Register & nuance:** `emerging memory technologies & PCM devices` — vật liệu phổ biến là Ge2Sb2Te5 (GST); hiện tượng trôi độ dẫn theo thời gian (conductance drift) do sự hồi phục cấu trúc vô định hình là thách thức cần được bù trừ bằng thuật toán.

**Examples:** `Progressively crystallizing the chalcogenide layer inside a phase-change memristor cell yields analog conductance states ideal for synaptic weight emulation in deep spiking networks.` → Việc kết tinh dần dần lớp chalcogenide bên trong một ô nhớ memristor chuyển pha mang lại các trạng thái độ dẫn tương tự lý tưởng cho việc mô phỏng trọng số khớp thần kinh trong các mạng phát xung sâu.

**Liên kết tiếng Hàn:** `상변화 멤리스터 셀` (相變化 memristor cell / PCM cell) — ô nhớ memristor chuyển pha.

---

## 23. dynamic vision sensor interface /daɪˈnæmɪk ˈvɪʒən ˈsɛnsər ˈɪntərˌfeɪs/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt: DVS interface). Đóng vai trò là cổng giao tiếp phần cứng giữa camera phỏng mắt sinh học và bộ xử lý neuromorphic (ví dụ: `stream events through a dynamic vision sensor interface`).

**Core meaning — English:** The physical and logical link connecting an event-based neuromorphic camera—which outputs asynchronous pixel-level brightness change events rather than synchronous frame sequences—to a processing pipeline.

**Core meaning & mental image — Tiếng Việt:** Giao diện cảm biến thị giác động; hãy hình dung một chiếc máy quay phim không hề chụp 60 khung hình chữ nhật tĩnh mỗi giây (không chụp frame): mỗi điểm ảnh trên cảm biến hoạt động như một tế bào hình nón độc lập trên võng mạc mắt người, chỉ bắn ra một dòng tín hiệu khi nhìn thấy độ sáng tại đúng điểm đó vừa thay đổi; giao diện này thu nhận dòng chảy sự kiện đó với độ trễ micro giây.

**Grammar & collocations:** `connect via dynamic vision sensor interface` — kết nối thông qua giao diện cảm biến thị giác động; `low-latency dynamic vision sensor interface` — giao diện cảm biến thị giác động độ trễ thấp; `dynamic vision sensor interface throughput` — thông lượng giao diện cảm biến thị giác động.

**Register & nuance:** `neuromorphic vision & edge robotics` — không bị nhòe chuyển động (motion blur), dải động quang học cực rộng (>120 dB) giúp robot tự hành nhìn rõ trong điều kiện ngược sáng gắt hoặc bóng tối đột ngột.

**Examples:** `Streaming high-speed robotic feedback via a dynamic vision sensor interface allowed the autonomous drone to dodge obstacles with sub-millisecond response latency.` → Việc truyền phát tín hiệu phản hồi robot tốc độ cao thông qua giao diện cảm biến thị giác động đã cho phép máy bay không người lái tự hành né tránh chướng ngại vật với độ trễ đáp ứng dưới một phần nghìn giây.

**Liên kết tiếng Hàn:** `동적 비전 센서 인터페이스` (動的 vision sensor interface / DVS 인터페이스) — giao diện cảm biến thị giác động phỏng sinh học.

---

## 24. energy-delay-product optimization /ˈɛnərdʒi dɪˈleɪ ˈprɑdəkt ˌɑptəməˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt: EDP optimization). Thường làm tiêu chuẩn đánh giá tối thượng hiệu năng phần cứng máy tính (ví dụ: `achieve energy-delay-product optimization`).

**Core meaning — English:** The engineering methodology of simultaneously minimizing both the energy consumed per computational operation and the time delay required to complete it, balancing speed against power efficiency.

**Core meaning & mental image — Tiếng Việt:** Tối ưu hóa tích số năng lượng - độ trễ; hãy hình dung một bài toán kép: một chiếc xe đua vừa phải chạy nhanh nhất có thể (độ trễ nhỏ) lại vừa phải tiêu tốn ít xăng nhất có thể (năng lượng thấp); việc tối ưu hóa tích số này tìm ra điểm ngọt hoàn hảo nơi hệ thống đạt hiệu năng tính toán đỉnh cao mà không phải đánh đổi bằng việc tiêu hao năng lượng cấp số nhân.

**Grammar & collocations:** `pursue energy-delay-product optimization` — theo đuổi sự tối ưu hóa tích số năng lượng - độ trễ; `metrics for energy-delay-product optimization` — các thang đo cho sự tối ưu hóa tích số năng lượng - độ trễ; `attain energy-delay-product optimization` — đạt được sự tối ưu hóa tích số năng lượng - độ trễ.

**Register & nuance:** `VLSI benchmarking & computing economics` — đại lượng EDP (Energy $\times$ Delay) là thước đo chuẩn xác hơn chỉ đo riêng lẻ năng lượng hoặc riêng lẻ tốc độ; neuromorphic circuits thường cải thiện EDP từ 100 đến 1.000 lần so với CPU/GPU thông thường.

**Examples:** `Through rigorous energy-delay-product optimization, the neuromorphic co-processor outperformed standard graphics processing units by two orders of magnitude on edge inference tasks.` → Thông qua sự tối ưu hóa tích số năng lượng - độ trễ nghiêm ngặt, bộ đồng xử lý phỏng não đã vượt trội hơn các bộ xử lý đồ họa tiêu chuẩn hai bậc độ lớn trong các tác vụ suy luận tại biên.

**Liên kết tiếng Hàn:** `에너지-지연 곱 최적화` (energy-遲延 積 最適化 / EDP 최적화) — tối ưu hóa tích số năng lượng và độ trễ.

---

## 25. neuromorphic substrate scalings /ˈnʊroʊˌmɔrfɪk ˈsʌbstreɪt ˈskeɪlɪŋz/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Thường xuất hiện trong các lộ trình công nghệ bán dẫn tương lai (ví dụ: `advance neuromorphic substrate scalings`).

**Core meaning — English:** The physical and architectural scaling laws governing how neuromorphic computing hardware expands in neuron count, synaptic density, 3D monolithic integration, and interconnect bandwidth.

**Core meaning & mental image — Tiếng Việt:** Các quy mô mở rộng đế phần cứng phỏng não; hãy hình dung việc mở rộng từ một bộ não chim sẻ lên bộ não con người: không chỉ đơn giản là trải rộng tấm silic ra hàng nghìn centimet, mà là xếp chồng các lớp nơ-ron và khớp thần kinh thành các tòa tháp 3D thẳng đứng, gắn kết hàng triệu đường liên lạc xuyên qua lớp silic để hàng tỷ tế bào thần kinh trò chuyện liền mạch.

**Grammar & collocations:** `roadmap for neuromorphic substrate scalings` — lộ trình mở rộng quy mô đế phần cứng phỏng não; `challenges in neuromorphic substrate scalings` — những thách thức trong việc mở rộng quy mô đế phần cứng phỏng não; `physical limits of neuromorphic substrate scalings` — các giới hạn vật lý của sự mở rộng quy mô đế phần cứng phỏng não.

**Register & nuance:** `semiconductor roadmaps & 3D neuromorphic electronics` — thay thế định luật Moore bằng các chỉ số tích hợp thể tích (synapses/mm3) và hiệu quả băng thông liên lõi.

**Examples:** `Next-generation 3D monolithic integration promises to shatter previous interconnect limits, opening aggressive pathways for neuromorphic substrate scalings toward mammalian brain densities.` → Công nghệ tích hợp nguyên khối 3D thế hệ tiếp theo hứa hẹn sẽ phá vỡ các giới hạn kết nối trước đây, mở ra những con đường táo bạo cho các quy mô mở rộng đế phần cứng phỏng não hướng tới mật độ của bộ não động vật có vú.

**Liên kết tiếng Hàn:** `뉴로모픽 기판 스케일링 / 확장성` (neuromorphic 基板 scaling) — quy mô mở rộng và tích hợp đế phần cứng phỏng não.

---

## Review in context (Part 1: Spike Dynamics, Plasticity Rules, and Circuit Fundamentals)

Pioneering a decisive departure from synchronous von Neumann architectures, neuromorphic computing harnesses physical biology to engineer brain-inspired silicon systems. At the synaptic boundary, local learning is physically executed through **spike-timing-dependent synaptic plasticity**, where the precise millisecond delta between pre- and post-synaptic events modulates physical device conductance. Data communication abandons global oscillators in favor of **asynchronous event-driven routing**, dispatching discrete digital packets across network-on-chip fabrics strictly when activations occur. Within individual processing nodes, membrane potentials follow continuous **leaky integrate-and-fire dynamics**, summating transient ionic currents while leaking charge toward resting potentials. High-density parallel dot products are calculated directly inside **memristive crossbar arrays**, executing Ohm's and Kirchhoff's laws at wire intersections with unprecedented spatial density. This event-based computational sparsity delivers **ultra-low energy dissipation**, reducing active dissipation down to femtojoules per synaptic operation. By embedding physical memory within the compute fabric, systems deploy **analog in-memory compute** to eliminate energy-draining data bus transfers entirely. Peripheral event communication relies upon the standardized **address-event representation protocol**, streaming the binary identity of active channels along shared asynchronous pathways. A modern neuromorphic processor typically groups thousands of these elements into an autonomous **neuromorphic spiking core**, tileable across large wafer-scale networks. To prevent pathological hyper-excitation, circuits introduce dynamic **refractory period conductance**, temporarily clamping membrane voltages after spike emission. Incoming currents subsequently undergo smooth **post-synaptic current decay**, defining the temporal window over which subsequent inputs can successfully integrate. Sensory neurons combat continuous saturation through **spike frequency adaptation**, tapering active firing rates during prolonged exposure to static stimuli. Ultimately, these bio-inspired dynamics maximize **event-driven temporal sparsity**, ensuring that circuits remain quiescent until informative environmental shifts occur.

**Bản dịch tiếng Việt:**

Mở đường cho sự đoạn tuyệt dứt khoát khỏi các kiến trúc von Neumann đồng bộ, điện toán phỏng não khai thác sinh học vật lý để kỹ nghệ hóa các hệ thống silic lấy cảm hứng từ bộ não. Tại ranh giới khớp thần kinh, việc tự học cục bộ được thực thi vật lý thông qua **tính mềm dẻo khớp thần kinh phụ thuộc thời gian phát xung**, nơi khoảng chênh lệch mili giây chính xác giữa các sự kiện trước và sau khớp thần kinh điều biến độ dẫn của linh kiện vật lý. Truyền thông dữ liệu từ bỏ các bộ dao động toàn cục để ủng hộ **định tuyến theo sự kiện bất đồng bộ**, phân phối các gói tin kỹ thuật số rời rạc qua các cấu trúc mạng trên chip một cách nghiêm ngặt khi có kích hoạt xảy ra. Bên trong các nút xử lý riêng lẻ, điện thế màng tuân theo **động lực học nơ-ron tích phân rò rỉ và kích hoạt** liên tục, cộng dồn các dòng ion thoáng qua trong khi liên tục rò rỉ điện tích về điện thế nghỉ. Các tích vô hướng song song mật độ cao được tính toán trực tiếp bên trong **các mảng thanh chéo memristor**, thực thi định luật Ohm và định luật Kirchhoff tại các điểm giao cắt dây dẫn với mật độ không gian chưa từng có. Tính thưa thớt tính toán dựa trên sự kiện này mang lại **sự tiêu tán năng lượng siêu thấp**, giảm mức tiêu tán hoạt động xuống còn vài femtojoule cho mỗi thao tác khớp thần kinh. Bằng cách nhúng bộ nhớ vật lý bên trong cấu trúc tính toán, các hệ thống triển khai **điện toán tương tự trong bộ nhớ** nhằm loại bỏ hoàn toàn các đường truyền bus dữ liệu ngốn năng lượng. Truyền thông sự kiện ngoại vi dựa vào **giao thức biểu diễn sự kiện theo địa chỉ** chuẩn hóa, truyền phát định danh nhị phân của các kênh hoạt động dọc theo các con đường bất đồng bộ dùng chung. Một bộ xử lý phỏng não hiện đại thường nhóm hàng nghìn phần tử này thành một **lõi nơ-ron phát xung phỏng não** tự trị, có thể xếp lớp trên các mạng quy mô phiến bán dẫn lớn. Để ngăn ngừa hiện tượng kích thích quá mức bệnh lý, các mạch đưa vào **độ dẫn điện trong thời kỳ trơ** động, tạm thời kẹp giữ điện thế màng sau khi phát xung. Dòng điện đi vào sau đó trải qua **sự suy giảm dòng điện sau khớp thần kinh** êm ái, xác định cửa sổ thời gian mà qua đó các đầu vào tiếp theo có thể tích phân thành công. Các nơ-ron cảm giác chống lại tình trạng bão hòa liên tục thông qua **sự thích nghi tần số phát xung**, giảm dần tần số phát xung hoạt động trong thời gian tiếp xúc kéo dài với các kích thích tĩnh. Cuối cùng, các động lực học lấy cảm hứng sinh học này tối đa hóa **tính thưa thớt thời gian định hướng theo sự kiện**, bảo đảm rằng các mạch điện duy trì trạng thái nghỉ ngơi cho đến khi có những biến đổi môi trường giàu thông tin xuất hiện.

---

## Review in context (Part 2: Synaptic Modeling, Hardware Scaling, and Event Interfaces)

Scaling neuromorphic hardware requires bridging solid-state device physics with algorithmic learning frameworks. Modern designs tune **bio-inspired synapse conductance** across multi-terminal memory cells, mapping weights to physical conductivity states. In transition-metal oxide matrices, atomic filament rearrangement establishes reproducible **non-volatile resistive switching**, preserving stored synaptic values across power cycles. To overcome the computational simplicity of point neurons, advanced architectures integrate **dendritic computation modeling**, allowing non-linear input processing along virtual branching structures. To preserve global circuit stability during unguided online learning, networks implement **homeostatic synaptic scaling**, universally normalizing synaptic inputs to keep firing rates within safe operating margins. For supervised learning tasks, practitioners employ a **spike-based backpropagation surrogate**, substituting smooth approximations for discontinuous thresholds during backward passes. When assembling massive physical arrays, engineers must counteract disruptive **crossbar line parasitics**, which cause parasitic voltage drops that distort analog matrix sums. Extreme energy efficiency is further unlocked through **analog subthreshold circuit operation**, driving transistors in weak inversion to replicate biological ion channel kinetics. In shared AER routing networks, concurrent spike collisions are cleanly mediated by **asynchronous arbitration logic**, resolving access conflicts without global synchronization. Moving beyond raw rate codes, systems exploit **temporal spike pattern encoding**, embedding rich contextual features inside precise inter-spike latencies. At the physical layer, multi-level weight retention is realized via the **phase-change memristor cell**, where thermal pulses transition chalcogenide films between crystalline and amorphous states. When capturing high-speed visual data, an asynchronous **dynamic vision sensor interface** streams individual pixel brightness fluctuations with microsecond latency. Balancing operational latency against energy consumption drives meticulous **energy-delay-product optimization**, proving that bio-inspired circuits outperform traditional GPUs on edge workloads. Moving forward, monolithic 3D packaging continues to push **neuromorphic substrate scalings**, paving the way toward computing systems rivaling the structural density of the human neocortex.

**Bản dịch tiếng Việt:**

Mở rộng quy mô phần cứng phỏng não đòi hỏi phải bắc cầu nối giữa vật lý linh kiện chất rắn với các khuôn khổ học thuật toán. Các thiết kế hiện đại tinh chỉnh **độ dẫn điện của khớp thần kinh lấy cảm hứng sinh học** trên khắp các ô nhớ đa cực, ánh xạ các trọng số thành các trạng thái độ dẫn điện vật lý. Trong các khuôn nền oxit kim loại chuyển tiếp, sự sắp xếp lại sợi dẫn nguyên tử thiết lập **hiện tượng chuyển mạch điện trở không bay hơi** có tính tái lặp, bảo tồn các giá trị khớp thần kinh được lưu trữ qua các chu kỳ cấp nguồn. Để vượt qua sự đơn giản tính toán của các nơ-ron dạng điểm, các kiến trúc tiên tiến tích hợp **mô hình hóa tính toán trên sợi nhánh**, cho phép xử lý đầu vào phi tuyến tính dọc theo các cấu trúc phân nhánh ảo. Để bảo toàn tính ổn định của mạch toàn cục trong quá trình tự học trực tuyến không có hướng dẫn, các mạng triển khai **cân bằng nội môi quy mô khớp thần kinh**, chuẩn hóa phổ quát các đầu vào khớp thần kinh để giữ tần số phát xung bên trong các biên độ vận hành an toàn. Đối với các tác vụ học có giám sát, các học viên sử dụng một **đạo hàm thay thế truyền ngược dựa trên xung**, thay thế các phép xấp xỉ mượt mà cho các ngưỡng gián đoạn trong các lượt truyền ngược. Khi lắp ráp các mảng vật lý khổng lồ, các kỹ sư phải triệt tiêu **điện trở và điện dung ký sinh trên đường dây mảng thanh chéo** gây rối loạn, vốn tạo ra các đợt sụt áp ký sinh làm méo mó các tổng ma trận tương tự. Hiệu suất năng lượng cực độ còn được khai mở thông qua **vận hành mạch tương tự ở chế độ dưới ngưỡng**, thúc đẩy các transistor hoạt động ở chế độ đảo ngược yếu nhằm tái tạo động học kênh ion sinh học. Trong các mạng định tuyến AER dùng chung, các vụ va chạm xung đồng thời được dàn xếp sạch sẽ bởi **logic trọng tài bất đồng bộ**, giải quyết các xung đột truy cập mà không cần đồng bộ hóa toàn cục. Vượt ra ngoài các mã tần số thô, các hệ thống khai thác **mã hóa mẫu xung theo thời gian**, nhúng các đặc trưng ngữ cảnh phong phú bên trong các độ trễ chính xác giữa các xung. Tại tầng vật lý, sự lưu giữ trọng số đa mức được thực hiện thông qua **ô nhớ memristor chuyển pha**, nơi các xung nhiệt chuyển tiếp các màng chalcogenide giữa trạng thái tinh thể và vô định hình. Khi ghi lại dữ liệu thị giác tốc độ cao, một **giao diện cảm biến thị giác động** bất đồng bộ truyền phát các biến động độ sáng của từng điểm ảnh riêng lẻ với độ trễ micro giây. Việc cân bằng giữa độ trễ hoạt động với mức tiêu thụ năng lượng thúc đẩy **sự tối ưu hóa tích số năng lượng - độ trễ** tỉ mỉ, chứng minh rằng các mạch phỏng sinh học vượt trội hơn các GPU truyền thống trong các khối lượng công việc tại biên. Trong tương lai, công nghệ đóng gói 3D nguyên khối tiếp tục thúc đẩy **các quy mô mở rộng đế phần cứng phỏng não**, dọn đường cho các hệ thống điện toán sánh ngang với mật độ cấu trúc của vỏ não mới ở người.
