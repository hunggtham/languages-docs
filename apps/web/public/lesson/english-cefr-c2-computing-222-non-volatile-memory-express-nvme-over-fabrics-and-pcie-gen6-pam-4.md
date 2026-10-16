# C2 Vocabulary 222 — NVMe-over-Fabrics (NVMe-oF), RDMA RoCEv2 transport, and PCIe Gen6 PAM-4 signaling

## 1. NVMe-over-Fabrics (NVMe-oF) architecture
- **IPA**: /ˈɛn-vi-ɛm-i ˈoʊvər ˈfæbrɪks ˈɑrkəˌtɛkʧər/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong kiến trúc lưu trữ mạng trung tâm dữ liệu.
- **Core meaning — English**: A network protocol specification that extends the high-performance NVMe storage interface beyond local PCIe buses to shared network fabrics like Ethernet, InfiniBand, and Fibre Channel.
- **Core meaning & mental image — Tiếng Việt**: Kiến trúc giao thức NVMe qua mạng — Hình ảnh việc kéo một đường ống cáp quang tốc độ cao nối thẳng các ổ đĩa cứng cực nhanh trực tiếp đến các máy chủ qua hệ thống mạng toàn tòa nhà thay vì chỉ gắn bên trong từng máy lẻ.
- **Grammar & collocations**: 
  - architect an NVMe-over-Fabrics architecture (kiến trúc hệ thống NVMe-oF)
  - deploy NVMe-over-Fabrics architecture (triển khai kiến trúc NVMe-oF)
  - high-performance NVMe-over-Fabrics architecture (kiến trúc NVMe-oF hiệu năng cao)
- **Register & nuance**: Thuật ngữ chuyên ngành lưu trữ và mạng trung tâm dữ liệu hiện đại (Enterprise Storage & Datacenter Networking).
- **Examples**:
  - Hyperscale datacenters adopt the NVMe-over-Fabrics architecture to disaggregate storage pools and scale capacity independently from compute servers. (Các trung tâm dữ liệu quy mô lớn áp dụng kiến trúc NVMe-oF để phân rã các kho lưu trữ và mở rộng dung lượng độc lập với các máy chủ tính toán.)
- **Liên kết tiếng Hàn**: NVMe-over-Fabrics 아키텍처 (NVMe-over-Fabrics akitektyeo) — Kiến trúc giao thức NVMe truyền tải qua mạng lưới trung tâm dữ liệu.

## 2. RDMA over Converged Ethernet (RoCEv2)
- **IPA**: /ˈɑrd-mɑ ˈoʊvər kənˈvɜrʤd ˈɛθərˌnɛt (roʊ-si-vi-tu)/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong giao thức truyền thông mạng.
- **Core meaning — English**: A network protocol that implements Remote Direct Memory Access over standard Ethernet networks by encapsulating InfiniBand transport packets inside UDP and IP datagrams.
- **Core meaning & mental image — Tiếng Việt**: Giao thức RDMA trên nền Ethernet hội tụ — Hình ảnh việc bọc các kiện hàng siêu tốc vào những chiếc xe tải đặc chủng chạy trên đường cao tốc Ethernet thông thường mà không cần dừng lại kiểm tra ở trạm thu phí.
- **Grammar & collocations**: 
  - configure RDMA over Converged Ethernet transport (cấu hình truyền tải RoCEv2)
  - deploy RDMA over Converged Ethernet (triển khai RoCEv2)
  - low-latency RDMA over Converged Ethernet network (mạng RoCEv2 độ trễ thấp)
- **Register & nuance**: Thuật ngữ mạng hiệu năng cao và cụm máy chủ AI (High-Performance Networking & AI Clusters).
- **Examples**:
  - RoCEv2 provides ultra-low latency and bypasses the operating system kernel for direct memory transfers between distributed storage nodes. (RoCEv2 cung cấp độ trễ cực thấp và bỏ qua nhân hệ điều hành để truyền bộ nhớ trực tiếp giữa các nút lưu trữ phân tán.)
- **Liên kết tiếng Hàn**: 수렴형 이더넷 기반 RDMA (suryeom-hyeong ideo-net giban RDMA) — Giao thức truyền tải bộ nhớ trực tiếp qua mạng Ethernet hội tụ.

## 3. PCIe Gen6 PAM-4 signaling
- **IPA**: /ˈpi-si-i-ɛf ʤɛn-sɪks pæm-fɔr ˈsɪɡnəlɪŋ/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong thiết kế phần cứng vi mạch.
- **Core meaning — English**: The physical layer transmission technology used in PCI Express Generation 6 that utilizes 4-level pulse amplitude modulation to double data transfer rates per pin compared to traditional NRZ signaling.
- **Core meaning & mental image — Tiếng Việt**: Kỹ thuật phát tín hiệu PAM-4 thế hệ PCIe Gen6 — Hình ảnh việc sử dụng 4 mức điện áp khác nhau để truyền đi nhiều thông tin hơn trên cùng một đường dây thay vì chỉ dùng 2 mức bật/tắt đơn giản như trước.
- **Grammar & collocations**: 
  - implement PCIe Gen6 PAM-4 signaling (triển khai tín hiệu PAM-4 PCIe Gen6)
  - PCIe Gen6 PAM-4 signaling integrity (tính toàn vẹn tín hiệu PAM-4 PCIe Gen6)
  - high-speed PCIe Gen6 PAM-4 signaling (tín hiệu PAM-4 PCIe Gen6 tốc độ cao)
- **Register & nuance**: Thuật ngữ kỹ thuật phần cứng bo mạch chủ và giao tiếp bus tốc độ cao (Advanced Hardware Bus Engineering).
- **Examples**:
  - PCIe Gen6 PAM-4 signaling doubles bandwidth per lane to 64 GT/s, satisfying the massive input-output demands of modern AI accelerators. (Tín hiệu PAM-4 PCIe Gen6 nhân đôi băng thông trên mỗi làn lên 64 GT/s, đáp ứng nhu cầu nhập xuất khổng lồ của các bộ tăng tốc AI hiện đại.)
- **Liên kết tiếng Hàn**: PCIe Gen6 PAM-4 신호 전송 방식 (PCIe Gen6 PAM-4 sinho jeonsong bangsik) — Công nghệ truyền tín hiệu 4 mức PAM-4 trong chuẩn PCIe Gen6.

## 4. forward error correction (FEC) latency
- **IPA**: /ˈfɔrwərd ˈɛrər kəˈrɛkʃən ˈleɪtənsi/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong phân tích truyền thông dữ liệu.
- **Core meaning — English**: The processing delay introduced by encoding redundant error-correcting bits at the transmitter and decoding them at the receiver to maintain signal integrity over noisy high-speed channels.
- **Core meaning & mental image — Tiếng Việt**: Độ trễ sửa lỗi chuyển tiếp — Hình ảnh thời gian mà người kiểm hàng phải bỏ ra để đọc và sửa chữa các lỗi chính tả trên kiện hàng ngay tại cổng nhận trước khi cho phép hàng hóa đi tiếp vào kho.
- **Grammar & collocations**: 
  - minimize forward error correction latency (giảm thiểu độ trễ sửa lỗi chuyển tiếp)
  - forward error correction latency overhead (chi phí độ trễ sửa lỗi chuyển tiếp)
  - evaluate forward error correction latency (đánh giá độ trễ sửa lỗi chuyển tiếp)
- **Register & nuance**: Thuật ngữ kỹ thuật viễn thông và truyền dữ liệu tốc độ cao (High-Speed Communications Engineering).
- **Examples**:
  - High-speed storage interconnects must carefully balance error correction capability against forward error correction latency to prevent performance degradation. (Các kết nối lưu trữ tốc độ cao phải cân bằng cẩn thận giữa khả năng sửa lỗi và độ trễ sửa lỗi chuyển tiếp để tránh suy giảm hiệu năng.)
- **Liên kết tiếng Hàn**: 전방향 오류 정정 지연 시간 (jeonbang-hyang oryu jeong-jeong jiyeon sigan) — Độ trễ xử lý thuật toán sửa lỗi truyền dữ liệu thời gian thực.

## 5. flannel-less remote direct memory access
- **IPA**: /ˈflænəl-lɛs rɪˈmoʊt daɪˈrɛkt ˈmɛməri ˈæˌsɛs/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong kiến trúc truyền thông phần cứng.
- **Core meaning — English**: Direct memory transfer between remote servers operating completely without unnecessary network encapsulation layers or kernel protocol stack interventions.
- **Core meaning & mental image — Tiếng Việt**: Truy cập bộ nhớ trực tiếp từ xa không qua lớp trung gian rườm rà — Hình ảnh việc trao đổi thư tín trực tiếp qua cửa sổ nhà hàng xóm thay vì phải gói ghém vào nhiều lớp phong bì và thông qua bưu điện.
- **Grammar & collocations**: 
  - implement flannel-less remote direct memory access (triển khai truy cập bộ nhớ trực tiếp từ xa không qua lớp trung gian)
  - flannel-less remote direct memory access mechanism (cơ chế truy cập bộ nhớ trực tiếp từ xa không qua lớp trung gian)
  - performance of flannel-less remote direct memory access (hiệu năng truy cập bộ nhớ trực tiếp từ xa không qua lớp trung gian)
- **Register & nuance**: Thuật ngữ kỹ thuật mạng và lưu trữ phi cấu trúc hiệu năng cao (High-Performance Distributed Storage).
- **Examples**:
  - Flannel-less remote direct memory access enables microsecond-level data retrieval across disgraded storage fabrics. (Truy cập bộ nhớ trực tiếp từ xa không qua lớp trung gian cho phép truy xuất dữ liệu ở mức microsecond trên các cấu trúc lưu trữ phân rã.)
- **Liên kết tiếng Hàn**: 오버헤드가 없는 원격 직접 메모리 접근 (obeohedeuga eomneun won-gyeok jikjeop memori jeopgeun) — Truy cập bộ nhớ từ xa tối ưu hóa loại bỏ các tầng bọc gói mạng thừa thãi.

## 6. submission and completion queue pair
- **IPA**: /səbˈmɪʃən ænd kəmˈpliʃən kyu pɛr/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong giao tiếp điều khiển lưu trữ.
- **Core meaning — English**: The foundational asynchronous messaging mechanism in NVMe protocols consisting of a submission queue for dispatching commands to the controller and a completion queue for receiving execution results.
- **Core meaning & mental image — Tiếng Việt**: Cặp hàng đợi gửi lệnh và nhận kết quả — Hình ảnh một ô cửa tiếp nhận hồ sơ xin việc và một ô cửa khác trả kết quả phê duyệt, giúp công việc diễn ra song song không bị ùn tắc.
- **Grammar & collocations**: 
  - configure submission and completion queue pair (cấu hình cặp hàng đợi gửi lệnh và nhận kết quả)
  - manage submission and completion queue pair (quản lý cặp hàng đợi gửi lệnh và nhận kết quả)
  - hardware submission and completion queue pair allocation (cấp phát cặp hàng đợi phần cứng)
- **Register & nuance**: Thuật ngữ thiết kế trình điều khiển thiết bị lưu trữ (Storage Device Driver Architecture).
- **Examples**:
  - NVMe controllers support thousands of parallel submission and completion queue pairs to saturate modern multi-core processors. (Các bộ điều khiển NVMe hỗ trợ hàng ngàn cặp hàng đợi gửi lệnh và nhận kết quả song song để tận dụng tối đa các bộ xử lý đa nhân hiện đại.)
- **Liên kết tiếng Hàn**: 제출 및 완료 큐 쌍 (jechul mit wan-yo kyu ssang) — Cặp hàng đợi gửi yêu cầu và nhận kết quả trong kiến trúc NVMe.

## 7. sub-microsecond storage fabric latency
- **IPA**: /sʌb-ˈmaɪkroʊˌsɛkənd ˈstɔrɪʤ ˈfæbrɪk ˈleɪtənsi/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong đánh giá hiệu năng hệ thống lưu trữ.
- **Core meaning — English**: Storage network transmission and access delay that measures under one millionth of a second, bridging the performance gap between persistent storage media and system RAM.
- **Core meaning & mental image — Tiếng Việt**: Độ trễ mạng lưu trữ dưới một phần triệu giây — Hình ảnh một tia sáng truyền dữ liệu xuyên qua các thiết bị lưu trữ tức thì mà không gặp bất kỳ độ trễ cảm nhận được nào.
- **Grammar & collocations**: 
  - achieve sub-microsecond storage fabric latency (đạt độ trễ mạng lưu trữ dưới microsecond)
  - maintain sub-microsecond storage fabric latency (duy trì độ trễ mạng lưu trữ dưới microsecond)
  - sub-microsecond storage fabric latency benchmark (kiểm chuẩn độ trễ mạng lưu trữ dưới microsecond)
- **Register & nuance**: Thuật ngữ hệ thống lưu trữ flash và mạng trung tâm dữ liệu cực nhanh (Ultra-Low Latency Storage Systems).
- **Examples**:
  - NVMe-oF networks utilizing PCIe Gen6 switches achieve sub-microsecond storage fabric latency, rivaling local DRAM access speeds. (Các mạng NVMe-oF sử dụng switch PCIe Gen6 đạt được độ trễ mạng lưu trữ dưới microsecond, sánh ngang với tốc độ truy cập DRAM cục bộ.)
- **Liên kết tiếng Hàn**: 서브 마이크로초 스토리지 패브릭 지연 시간 (seobeu maikeurocho seutoriji paebeurik jiyeon sigan) — Độ trễ mạng lưu trữ cực thấp dưới 1 microsecond.

## 8. Priority Flow Control (PFC) lossless
- **IPA**: /praɪˈɔrəti floʊ kənˈtroʊl ˈlɔslɛs/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong cấu hình mạng Ethernet.
- **Core meaning — English**: An IEEE 802.1Qbb Ethernet standard mechanism that pauses traffic on specific priority classes to prevent packet drop caused by buffer overflows in lossless storage fabrics.
- **Core meaning & mental image — Tiếng Việt**: Cơ chế kiểm soát luồng ưu tiên không mất gói — Hình ảnh việc bật tín hiệu dừng tạm thời cho một làn xe cụ thể trên đường cao tốc khi trạm thu phí phía trước quá tải, ngăn chặn hoàn toàn việc xe bị đâm va hoặc ùn tắc rơi rớt.
- **Grammar & collocations**: 
  - configure Priority Flow Control lossless network (cấu hình mạng không mất gói PFC)
  - enable Priority Flow Control lossless operation (bật vận hành không mất gói PFC)
  - Priority Flow Control lossless pause frame (khung tạm dừng không mất gói PFC)
- **Register & nuance**: Thuật ngữ kỹ thuật mạng trung tâm dữ liệu và RoCEv2 (Datacenter Networking & RoCEv2 Infrastructure).
- **Examples**:
  - Deploying Priority Flow Control lossless configuration is mandatory for RoCEv2 fabrics to prevent TCP-like packet drops that severely degrade storage throughput. (Việc triển khai cấu hình kiểm soát luồng ưu tiên không mất gói là bắt buộc đối với các mạng RoCEv2 nhằm ngăn chặn việc mất gói tin làm giảm nghiêm trọng thông lượng lưu trữ.)
- **Liên kết tiếng Hàn**: 우선순위 흐름 제어 무손실 네트워크 (useon-sunwi 흐름 제어 musonsil net-wokeu) — Cơ chế kiểm soát luồng ưu tiên bảo đảm không mất gói tin trên mạng lưu trữ.

## 9. explicit congestion notification (ECN)
- **IPA**: /ɪkˈsplɪsɪt kənˈʤɛsʧən ˌnoʊtəfəˈkeɪʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong quản lý tắc nghẽn mạng.
- **Core meaning — English**: A network layer mechanism that allows routers to notify end-nodes of impending traffic congestion by marking IP packet headers rather than dropping packets outright.
- **Core meaning & mental image — Tiếng Việt**: Thông báo tắc nghẽn tường minh — Hình ảnh tấm biển báo điện tử trên đường cao tốc nhắc nhở các tài xế giảm tốc độ từ xa trước khi xảy ra sự cố ùn tắc ở đoạn đường phía trước.
- **Grammar & collocations**: 
  - enable explicit congestion notification (bật thông báo tắc nghẽn tường minh)
  - explicit congestion notification marking (đánh dấu thông báo tắc nghẽn tường minh)
  - explicit congestion notification threshold (ngưỡng thông báo tắc nghẽn tường minh)
- **Register & nuance**: Thuật ngữ quản lý tắc nghẽn mạng trung tâm dữ liệu (Datacenter Congestion Control).
- **Examples**:
  - Network switches use explicit congestion notification to signal source adapters to throttle data transmission before buffer congestion triggers packet drops. (Các switch mạng sử dụng thông báo tắc nghẽn tường minh để ra tín hiệu cho các bộ điều hợp nguồn giảm tốc độ truyền dữ liệu trước khi tình trạng nghẽn bộ đệm gây mất gói.)
- **Liên kết tiếng Hàn**: 명시적 혼잡 알림 (myeong-sijeok hon-jap allim) — Cơ chế thông báo tắc nghẽn mạng trực tiếp qua tiêu đề gói tin mà không cần hủy gói.

## 10. end-to-end NVMe command offload
- **IPA**: /ɛnd-tu-ɛnd ˈɛn-vi-ɛm-i kəˈmænd ˈɔfˌloʊd/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong kiến trúc xử lý phần cứng.
- **Core meaning — English**: The hardware offloading capability where storage controllers and smart network interface cards process NVMe commands directly without involving host CPU intervention.
- **Core meaning & mental image — Tiếng Việt**: Giảm tải lệnh NVMe đầu cuối — Hình ảnh việc giao toàn bộ việc bốc dỡ hàng hóa cho các robot thông minh ở cổng kho mà không cần người quản lý cấp cao phải bận tâm giám sát từng thao tác.
- **Grammar & collocations**: 
  - implement end-to-end NVMe command offload (triển khai giảm tải lệnh NVMe đầu cuối)
  - end-to-end NVMe command offload engine (động cơ giảm tải lệnh NVMe đầu cuối)
  - hardware end-to-end NVMe command offload (giảm tải lệnh NVMe đầu cuối bằng phần cứng)
- **Register & nuance**: Thuật ngữ kỹ thuật SmartNIC và bộ điều khiển lưu trữ thông minh (SmartNIC & Intelligent Storage Controllers).
- **Examples**:
  - End-to-end NVMe command offload frees up host CPU cores to focus exclusively on executing application workloads. (Giảm tải lệnh NVMe đầu cuối giải phóng các nhân CPU chủ để tập trung hoàn toàn vào việc chạy các tác vụ ứng dụng.)
- **Liên kết tiếng Hàn**: 엔드투엔드 NVMe 명령 오프로드 (endeutuendeu NVMe myeong-nyeong opeurodeu) — Kỹ thuật giảm tải xử lý lệnh NVMe trực tiếp trên phần cứng mạng và lưu trữ.

## 11. disaggregated NVMe storage cluster
- **IPA**: /dɪsˈæɡrəˌɡeɪtɪd ˈɛn-vi-ɛm-i ˈstɔrɪʤ ˈklʌstər/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong thiết kế trung tâm dữ liệu phân tán.
- **Core meaning — English**: A scalable storage pool architecture where massive arrays of NVMe drives are decoupled from compute nodes and pooled together, accessible over high-speed interconnect fabrics.
- **Core meaning & mental image — Tiếng Việt**: Cụm lưu trữ NVMe phân rã — Hình ảnh một kho chứa ổ cứng khổng lồ được đặt tập trung riêng biệt trong phòng máy, sẵn sàng chia sẻ dung lượng cho bất kỳ máy chủ tính toán nào trong tòa nhà khi cần thiết.
- **Grammar & collocations**: 
  - deploy disaggregated NVMe storage cluster (triển khai cụm lưu trữ NVMe phân rã)
  - architect a disaggregated NVMe storage cluster (thiết kế cụm lưu trữ NVMe phân rã)
  - scale disaggregated NVMe storage cluster (mở rộng cụm lưu trữ NVMe phân rã)
- **Register & nuance**: Thuật ngữ chuyên sâu kiến trúc trung tâm dữ liệu đám mây (Cloud Datacenter Architecture).
- **Examples**:
  - A disaggregated NVMe storage cluster allows enterprises to scale compute and storage resources independently, optimizing hardware utilization and costs. (Cụm lưu trữ NVMe phân rã cho phép các doanh nghiệp mở rộng tài nguyên tính toán và lưu trữ độc lập, tối ưu hóa hiệu suất sử dụng phần cứng và chi phí.)
- **Liên kết tiếng Hàn**: 분할 NVMe 스토리지 클러스터 (bunhal NVMe seutoriji keol-leoseuteo) — Cụm lưu trữ NVMe tách rời khỏi các máy chủ tính toán chính.

## 12. eye diagram signal integrity
- **IPA**: /aɪ ˈdaɪəˌɡræm ˈsɪɡnəl ˈɪntəɡrəti/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong kiểm định phần cứng điện tử.
- **Core meaning — English**: An oscilloscope display used in high-speed digital transmission testing where digital data signals are overlaid to evaluate signal quality, jitter, and noise margins.
- **Core meaning & mental image — Tiếng Việt**: Biểu đồ mắt kiểm tra tính toàn vẹn tín hiệu — Hình ảnh vết hằn trên màn hình dao động ký có hình dạng con mắt mở rộng hay khép kín, cho biết đường truyền tín hiệu có bị nhiễu loạn hay rõ ràng sắc nét.
- **Grammar & collocations**: 
  - analyze eye diagram signal integrity (phân tích tính toàn vẹn tín hiệu biểu đồ mắt)
  - eye diagram signal integrity test (kiểm tra tính toàn vẹn tín hiệu biểu đồ mắt)
  - open eye diagram signal integrity (biểu đồ mắt mở rộng biểu thị tính toàn vẹn tín hiệu tốt)
- **Register & nuance**: Thuật ngữ kỹ thuật đo lường và kiểm định phần cứng tốc độ cao (High-Speed Hardware Testing).
- **Examples**:
  - Engineers examine the eye diagram signal integrity on PCIe Gen6 channels to ensure reliable multi-gigabit data transmission without bit errors. (Các kỹ sư kiểm tra biểu đồ mắt tính toàn vẹn tín hiệu trên các kênh PCIe Gen6 để đảm bảo truyền dữ liệu đa gigabit đáng tin cậy không bị lỗi bit.)
- **Liên kết tiếng Hàn**: 아이 다이어그램 신호 무결성 (ai daieogeuraem sinho mukyeol-seong) — Biểu đồ dạng mắt dùng để đánh giá chất lượng và độ nhiễu của tín hiệu truyền thông tốc độ cao.

## 13. low-latency fiber optic interconnect
- **IPA**: /loʊ-ˈleɪtənsi ˈfaɪbər ˈɑptɪk ˈɪntərkəˌnɛkt/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong kết nối mạng quang học.
- **Core meaning — English**: High-speed optical cabling and transceiver infrastructure designed to transmit data pulses over distances with minimal propagation delay.
- **Core meaning & mental image — Tiếng Việt**: Kết nối cáp quang độ trễ thấp — Hình ảnh chùm tia sáng laser truyền vút qua sợi cáp quang siêu tinh khiết nối liền các tòa nhà trung tâm dữ liệu trong chớp mắt.
- **Grammar & collocations**: 
  - deploy low-latency fiber optic interconnect (triển khai kết nối cáp quang độ trễ thấp)
  - low-latency fiber optic interconnect link (đường liên kết cáp quang độ trễ thấp)
  - upgrade low-latency fiber optic interconnect (nâng cấp kết nối cáp quang độ trễ thấp)
- **Register & nuance**: Thuật ngữ hạ tầng viễn thông và trung tâm dữ liệu hiệu năng cao (Datacenter Optical Networking).
- **Examples**:
  - Low-latency fiber optic interconnects link geographically distributed storage clusters to maintain real-time data replication. (Các kết nối cáp quang độ trễ thấp liên kết các cụm lưu trữ phân tán về mặt địa lý để duy trì việc sao chép dữ liệu thời gian thực.)
- **Liên kết tiếng Hàn**: 저지연 광섬유 인터커넥트 (jeo-jiyeon gwangseomyu inteokeonekteu) — Hệ thống cáp quang và thu phát quang độ trễ thấp.

## 14. direct peer-to-peer DMA transfer
- **IPA**: /daɪˈrɛkt pɪr-tu-pɪr di-ɛm-eɪ ˈtrænsfər/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong kiến trúc truyền dữ liệu phần cứng.
- **Core meaning — English**: A data transfer method where peripheral devices such as NVMe controllers and GPUs exchange memory contents directly over PCIe switches without routing through system main memory or CPU.
- **Core meaning & mental image — Tiếng Việt**: Truyền dữ liệu trực tiếp ngang hàng qua DMA — Hình ảnh hai thiết bị phần cứng tự động chuyển quà qua lại cho nhau qua bàn xoay trung chuyển mà không cần nhờ đến sự can thiệp của người quản lý trung tâm.
- **Grammar & collocations**: 
  - execute direct peer-to-peer DMA transfer (thực hiện truyền dữ liệu trực tiếp ngang hàng qua DMA)
  - direct peer-to-peer DMA transfer speed (tốc độ truyền dữ liệu trực tiếp ngang hàng qua DMA)
  - optimize direct peer-to-peer DMA transfer (tối ưu hóa truyền dữ liệu trực tiếp ngang hàng qua DMA)
- **Register & nuance**: Thuật ngữ kiến trúc hệ thống phần cứng cao cấp (Advanced Hardware System Architecture).
- **Examples**:
  - Direct peer-to-peer DMA transfer allows NVMe storage controllers to stream training datasets directly into GPU VRAM at line rate. (Truyền dữ liệu trực tiếp ngang hàng qua DMA cho phép bộ điều khiển lưu trữ NVMe stream các tập dữ liệu huấn luyện thẳng vào VRAM của GPU ở tốc độ đường truyền.)
- **Liên kết tiếng Hàn**: 다이렉트 P2P DMA 전송 (dairekteu P2P DMA jeonsong) — Kỹ thuật truyền dữ liệu trực tiếp giữa các thiết bị ngoại vi qua DMA mà không qua CPU.

## 15. FLIT-based protocol packets
- **IPA**: /flɪt-beɪst ˈproʊtəˌkɑl ˈpækɪts/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong giao thức truyền dữ liệu vi mạch.
- **Core meaning — English**: Flow control unit packets used in advanced interconnect architectures like PCIe Gen6 to break down data streams into uniform, manageable chunks for precise flow control and error checking.
- **Core meaning & mental image — Tiếng Việt**: Các gói giao thức dựa trên đơn vị luồng FLIT — Hình ảnh việc cắt một dòng chảy dữ liệu liên tục thành từng khúc tiêu chuẩn đều đặn như những khối gạch Lego để dễ dàng kiểm soát dòng chảy và phát hiện lỗi.
- **Grammar & collocations**: 
  - transmit FLIT-based protocol packets (truyền các gói giao thức dựa trên FLIT)
  - FLIT-based protocol packets framing (định khung gói giao thức dựa trên FLIT)
  - analyze FLIT-based protocol packets (phân tích các gói giao thức dựa trên FLIT)
- **Register & nuance**: Thuật ngữ thiết kế vi mạch và giao thức bus cao cấp (Microarchitecture & Bus Protocol Design).
- **Examples**:
  - PCIe Gen6 adopts FLIT-based protocol packets to improve error correction efficiency and support higher signal modulation rates. (PCIe Gen6 áp dụng các gói giao thức dựa trên FLIT để nâng cao hiệu quả sửa lỗi và hỗ trợ tốc độ điều chế tín hiệu cao hơn.)
- **Liên kết tiếng Hàn**: FLIT 기반 프로토콜 패킷 (FLIT giban peurotokol paeket) — Các gói dữ liệu chuẩn FLIT dùng trong kiểm soát luồng giao tiếp phần cứng.

## 16. gigatransfers per second lane
- **IPA**: /ˈɡɪɡəˌtrænsfərz pɜr ˈsɛkənd leɪn/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong đánh giá thông lượng phần cứng.
- **Core meaning — English**: The unit of measurement for high-speed serial bus data transfer rate representing billions of transfer cycles per second across a single physical lane.
- **Core meaning & mental image — Tiếng Việt**: Đơn vị tỷ lần truyền trên giây mỗi làn — Hình ảnh tốc độ đếm số lượng các hạt dữ liệu lao vút qua một làn đường cao tốc điện tử trong mỗi giây.
- **Grammar & collocations**: 
  - measure in gigatransfers per second lane (đo lường bằng gigatransfers trên giây mỗi làn)
  - gigatransfers per second lane bandwidth (băng thông tính bằng gigatransfers trên giây mỗi làn)
  - achieve high gigatransfers per second lane rates (đạt tốc độ gigatransfers trên giây mỗi làn cao)
- **Register & nuance**: Thuật ngữ kỹ thuật thông số kỹ thuật phần cứng bus (Hardware Specification Metrics).
- **Examples**:
  - PCIe Gen5 operates at 32 gigatransfers per second lane, whereas PCIe Gen6 doubles this performance to 64 GT/s lane. (PCIe Gen5 hoạt động ở mức 32 gigatransfers trên giây mỗi làn, trong khi PCIe Gen6 nhân đôi hiệu năng này lên 64 GT/s mỗi làn.)
- **Liên kết tiếng Hàn**: 초당 giga transfer 레인 (chodang giga transfer rein) — Đơn vị đo lường tốc độ truyền tải dữ liệu trên mỗi đường truyền phần cứng.

## 17. multipath NVMe controller failover
- **IPA**: /ˈmʌltiˌpæθ ˈɛn-vi-ɛm-i kənˈtroʊlər ˈfeɪlˌoʊvər/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong quản lý độ tin cậy lưu trữ.
- **Core meaning — English**: The high-availability mechanism that automatically reroutes storage I/O requests through redundant controller paths when a hardware path or controller failure occurs.
- **Core meaning & mental image — Tiếng Việt**: Cơ chế chuyển đổi dự phòng bộ điều khiển NVMe đa đường đi — Hình ảnh hệ thống tự động bẻ lái đoàn xe sang con đường song song bên cạnh ngay lập tức khi con đường chính gặp sự cố sạt lở.
- **Grammar & collocations**: 
  - configure multipath NVMe controller failover (cấu hình chuyển đổi dự phòng bộ điều khiển NVMe đa đường đi)
  - test multipath NVMe controller failover (kiểm tra chuyển đổi dự phòng bộ điều khiển NVMe đa đường đi)
  - seamless multipath NVMe controller failover (chuyển đổi dự phòng bộ điều khiển NVMe đa đường đi mượt mà)
- **Register & nuance**: Thuật ngữ quản lý độ sẵn sàng cao và dung lỗi lưu trữ (Enterprise Storage High Availability).
- **Examples**:
  - Enterprise storage arrays implement multipath NVMe controller failover to guarantee uninterrupted access during hardware maintenance or controller crashes. (Các mảng lưu trữ doanh nghiệp triển khai cơ chế chuyển đổi dự phòng bộ điều khiển NVMe đa đường đi để đảm bảo quyền truy cập không bị gián đoạn trong khi bảo trì phần cứng hoặc sự cố bộ điều khiển.)
- **Liên kết tiếng Hàn**: 다중 경로 NVMe 컨트롤러 페일오버 (dajung gyeongno NVMe keontrolleo peil-obeo) — Cơ chế chuyển đổi đường truyền dự phòng tự động cho bộ điều khiển NVMe khi xảy ra sự cố.

## 18. high-throughput NVMe namespace
- **IPA**: /haɪ-ˈθruˌpʊt ˈɛn-vi-ɛm-i ˈneɪmˌspeɪs/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong phân vùng lưu trữ.
- **Core meaning — English**: A logically partitioned storage volume formatted on an NVMe controller optimized for handling massive parallel read and write workloads simultaneously.
- **Core meaning & mental image — Tiếng Việt**: Không gian tên NVMe thông lượng cao — Hình ảnh một kho chứa hàng được chia thành các khu vực độc lập được thiết kế tối ưu để xe tải ra vào liên tục với số lượng lớn mà không bị kẹt xe.
- **Grammar & collocations**: 
  - provision high-throughput NVMe namespace (cấp phát không gian tên NVMe thông lượng cao)
  - optimize high-throughput NVMe namespace (tối ưu hóa không gian tên NVMe thông lượng cao)
  - high-throughput NVMe namespace performance (hiệu năng không gian tên NVMe thông lượng cao)
- **Register & nuance**: Thuật ngữ quản lý hệ thống lưu trữ khối hiện đại (Modern Block Storage Management).
- **Examples**:
  - Virtualization platforms provision a dedicated high-throughput NVMe namespace for each high-performance database instance. (Các nền tảng ảo hóa cấp phát một không gian tên NVMe thông lượng cao chuyên dụng cho từng thể loại cơ sở dữ liệu hiệu năng cao.)
- **Liên kết tiếng Hàn**: 고성능 NVMe 네임스페이스 (goseongneung NVMe neim-seupaseu) — Không gian tên phân vùng lưu trữ NVMe tối ưu hóa thông lượng cao.

## 19. hardware queue depth saturation
- **IPA**: /ˈhɑrdwɛr kyu dɛpθ ˌsætʃəˈreɪʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong phân tích hiệu năng hệ thống.
- **Core meaning — English**: The operational state where all available hardware command queues in a storage controller or accelerator are fully occupied, limiting further concurrency until tasks complete.
- **Core meaning & mental image — Tiếng Việt**: Trạng thái bão hòa độ sâu hàng đợi phần cứng — Hình ảnh tất cả các ghế ngồi trong phòng chờ đã chật kín bóng người, khiến những khách hàng đến sau phải đứng chờ bên ngoài cho đến khi có chỗ trống.
- **Grammar & collocations**: 
  - reach hardware queue depth saturation (đạt trạng thái bão hòa độ sâu hàng đợi phần cứng)
  - avoid hardware queue depth saturation (tránh bão hòa độ sâu hàng đợi phần cứng)
  - handle hardware queue depth saturation (xử lý bão hòa độ sâu hàng đợi phần cứng)
- **Register & nuance**: Thuật ngữ phân tích hiệu năng hệ thống và điểm nghẽn phần cứng (Hardware Performance Analysis).
- **Examples**:
  - Excessive concurrent I/O requests can cause hardware queue depth saturation, leading to increased latency and throughput degradation. (Quá nhiều yêu cầu I/O đồng thời có thể gây ra trạng thái bão hòa độ sâu hàng đợi phần cứng, dẫn đến tăng độ trễ và suy giảm thông lượng.)
- **Liên kết tiếng Hàn**: 하드웨어 큐 깊이 포화 상태 (hadeu-weo kyu gipi pohwa sangtae) — Trạng thái đầy kín các hàng đợi lệnh phần cứng làm giảm hiệu năng xử lý.

## 20. storage networking fabric topology
- **IPA**: /ˈstɔrɪʤ ˈnɛtˌwɜrkɪŋ ˈfæbrɪk təˈpɑləʤi/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong thiết kế mạng trung tâm dữ liệu.
- **Core meaning — English**: The structural arrangement and interconnection layout of switches, routers, and host adapters forming a high-performance storage network.
- **Core meaning & mental image — Tiếng Việt**: Cấu trúc topology mạng lưu trữ — Hình ảnh bản đồ sơ đồ mạng lưới giao thông phức tạp kết nối các trạm trung chuyển, đường cao tốc và kho bãi trong toàn bộ hệ thống trung tâm dữ liệu.
- **Grammar & collocations**: 
  - design storage networking fabric topology (thiết kế cấu trúc mạng lưu trữ)
  - optimize storage networking fabric topology (tối ưu hóa cấu trúc mạng lưu trữ)
  - robust storage networking fabric topology (cấu trúc mạng lưu trữ bền vững)
- **Register & nuance**: Thuật ngữ thiết kế kiến trúc mạng trung tâm dữ liệu (Datacenter Network Architecture).
- **Examples**:
  - A spine-leaf storage networking fabric topology ensures predictable, low-latency paths between any server and storage node in the datacenter. (Cấu trúc mạng lưu trữ dạng spine-leaf đảm bảo các đường dẫn có thể dự đoán được, độ trễ thấp giữa bất kỳ máy chủ và nút lưu trữ nào trong trung tâm dữ liệu.)
- **Liên kết tiếng Hàn**: 스토리지 네트워킹 패브릭 토폴로지 (seutoriji net-wokeing paebeurik topolloji) — Cấu trúc thiết kế mạng lưới kết nối các thiết bị lưu trữ trung tâm dữ liệu.

## 21. ultra-dense flash array chassis
- **IPA**: /ˈʌltrə-dɛns flæʃ əˈreɪ ˈʧæsɪs/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong thiết kế phần cứng tủ máy chủ.
- **Core meaning — English**: A compact enterprise storage enclosure engineered to house hundreds of high-capacity NVMe SSDs while providing advanced thermal management and power delivery.
- **Core meaning & mental image — Tiếng Việt**: Khung tủ mảng flash mật độ siêu cao — Hình ảnh chiếc tủ thiết bị nhỏ gọn nhưng chứa hàng trăm ổ đĩa thể rắn được xếp khít nhau như tổ ong kèm theo hệ thống quạt làm mát cực mạnh.
- **Grammar & collocations**: 
  - deploy ultra-dense flash array chassis (triển khai khung tủ mảng flash mật độ siêu cao)
  - cool ultra-dense flash array chassis (làm mát khung tủ mảng flash mật độ siêu cao)
  - design ultra-dense flash array chassis (thiết kế khung tủ mảng flash mật độ siêu cao)
- **Register & nuance**: Thuật ngữ kỹ thuật cơ khí phần cứng trung tâm dữ liệu (Datacenter Hardware Mechanical Engineering).
- **Examples**:
  - The ultra-dense flash array chassis delivers petabytes of lightning-fast storage capacity within a single rack unit footprint. (Khung tủ mảng flash mật độ siêu cao mang lại dung lượng lưu trữ nhanh như chớp lên tới hàng petabyte chỉ trong không gian một tủ rack duy nhất.)
- **Liên kết tiếng Hàn**: 초고밀도 플래시 어레이 섀시 (cho-gomildo peullaesi eorei syaesi) — Khung vỏ thiết bị chứa hàng loạt ổ đĩa flash dung lượng và mật độ cao.

## 22. kernel-bypass user-space driver
- **IPA**: /ˈkɜrnəl-ˈbaɪpæs ˈjuzər-speɪs ˈdraɪvər/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong phát triển trình điều khiển hệ thống.
- **Core meaning — English**: A software driver architecture that allows application programs to communicate directly with hardware controllers in user space without incurring the overhead of OS kernel context switches.
- **Core meaning & mental image — Tiếng Việt**: Trình điều khiển không gian người dùng bỏ qua nhân hệ điều hành — Hình ảnh chiếc thẻ thông hành cho phép tài xế đi tắt thẳng vào kho hàng mà không phải dừng lại làm thủ tục hành chính ở phòng bảo vệ trung tâm.
- **Grammar & collocations**: 
  - implement kernel-bypass user-space driver (triển khai trình điều khiển không gian người dùng bỏ qua nhân)
  - kernel-bypass user-space driver framework (khung trình điều khiển không gian người dùng bỏ qua nhân)
  - performance of kernel-bypass user-space driver (hiệu năng trình điều khiển không gian người dùng bỏ qua nhân)
- **Register & nuance**: Thuật ngữ lập trình hệ thống hiệu năng cao (High-Performance Systems Programming).
- **Examples**:
  - High-performance NVMe-oF and RoCEv2 implementations rely on kernel-bypass user-space drivers to achieve sub-microsecond I/O latency. (Các triển khai NVMe-oF và RoCEv2 hiệu năng cao phụ thuộc vào các trình điều khiển không gian người dùng bỏ qua nhân để đạt được độ trễ I/O dưới microsecond.)
- **Liên kết tiếng Hàn**: 커널 바이패스 사용자 공간 드라이버 (keoneol baipaseu sayongja gonggan deuraibeo) — Trình điều khiển phần cứng chạy trực tiếp ở không gian người dùng để loại bỏ chi phí chuyển đổi ngữ cảnh nhân.

## 23. datapath checksum data integrity
- **IPA**: /ˈdætəˌpæθ ˈʧɛkˌsʌm ˈdeɪtə ˈɪntəɡrəti/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong bảo mật và toàn vẹn dữ liệu.
- **Core meaning — English**: The hardware validation process that continuously computes and verifies cryptographic or cyclic redundancy check codes across every stage of the storage and network datapath.
- **Core meaning & mental image — Tiếng Việt**: Kiểm tra tính toàn vẹn dữ liệu qua mã tổng kiểm tra đường truyền — Hình ảnh việc đóng dấu niêm phong và cân đo lại trọng lượng của kiện hàng tại mỗi trạm dừng chân để đảm bảo không bị thất thoát hay hỏng hóc dọc đường.
- **Grammar & collocations**: 
  - ensure datapath checksum data integrity (đảm bảo tính toàn vẹn dữ liệu qua mã tổng kiểm tra đường truyền)
  - datapath checksum data integrity verification (xác minh tính toàn vẹn dữ liệu qua mã tổng kiểm tra đường truyền)
  - hardware datapath checksum data integrity (tính toàn vẹn dữ liệu đường truyền bằng phần cứng)
- **Register & nuance**: Thuật ngữ kỹ thuật an toàn dữ liệu doanh nghiệp (Enterprise Data Integrity & Reliability).
- **Examples**:
  - End-to-end datapath checksum data integrity checks protect against silent data corruption during high-speed transfers across NVMe fabrics. (Các kiểm tra tính toàn vẹn dữ liệu đường truyền đầu cuối bảo vệ chống lại hiện tượng hỏng dữ liệu âm thầm trong quá trình truyền tải tốc độ cao qua các mạng NVMe.)
- **Liên kết tiếng Hàn**: 데이터패스 체크섬 데이터 무결성 (deiteopaseu chekseom deiteo mukyeol-seong) — Kiểm tra tính toàn vẹn dữ liệu liên tục qua mã checksum trên toàn bộ đường truyền dữ liệu.

## 24. hyperscale NVMe storage fabric
- **IPA**: /ˈhaɪpərˌskeɪl ˈɛn-vi-ɛm-i ˈstɔrɪʤ ˈfæbrɪk/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong kiến trúc hạ tầng đám mây lớn.
- **Core meaning — English**: A massive, highly scalable distributed storage network interconnecting millions of NVMe storage devices across giant cloud datacenters with predictable performance.
- **Core meaning & mental image — Tiếng Việt**: Mạng lưu trữ NVMe quy mô siêu lớn — Hình ảnh một hệ thống giao thông ngầm khổng lồ kết nối hàng triệu kho bãi dữ liệu trải dài khắp các lục địa với hiệu suất vận hành chính xác từng giây.
- **Grammar & collocations**: 
  - deploy hyperscale NVMe storage fabric (triển khai mạng lưu trữ NVMe quy mô siêu lớn)
  - manage hyperscale NVMe storage fabric (quản lý mạng lưu trữ NVMe quy mô siêu lớn)
  - architecture of hyperscale NVMe storage fabric (kiến trúc mạng lưu trữ NVMe quy mô siêu lớn)
- **Register & nuance**: Thuật ngữ kiến trúc hạ tầng đám mây quy mô lớn (Hyperscale Cloud Infrastructure).
- **Examples**:
  - Cloud providers deploy hyperscale NVMe storage fabrics to deliver reliable, high-speed block storage services to millions of virtual machine instances. (Các nhà cung cấp đám mây triển khai các mạng lưu trữ NVMe quy mô siêu lớn để cung cấp các dịch vụ lưu trữ khối tốc độ cao, đáng tin cậy cho hàng triệu máy ảo.)
- **Liên kết tiếng Hàn**: 하이퍼스케일 NVMe 스토리지 패브릭 (haipeoseukeil NVMe seutoriji paebeurik) — Mạng lưới lưu trữ NVMe quy mô siêu lớn phục vụ hạ tầng đám mây.

## 25. cutting-edge enterprise storage interconnect
- **IPA**: /ˈkʌtɪŋ-ɛʤ ˈɛntərpraɪz ˈstɔrɪʤ ˈɪntərkəˌnɛkt/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong công nghệ lưu trữ tiên tiến.
- **Core meaning — English**: The most advanced state-of-the-art physical and protocol connection technology utilized in mission-critical enterprise datacenters to achieve maximum throughput and minimal latency.
- **Core meaning & mental image — Tiếng Việt**: Kết nối lưu trữ doanh nghiệp tối tân nhất — Hình ảnh hệ thống truyền dẫn cáp quang và vi mạch hiện đại bậc nhất được trang bị cho các trung tâm dữ liệu tài chính và AI quan trọng nhất thế giới.
- **Grammar & collocations**: 
  - adopt cutting-edge enterprise storage interconnect (áp dụng kết nối lưu trữ doanh nghiệp tối tân nhất)
  - evaluate cutting-edge enterprise storage interconnect (đánh giá kết nối lưu trữ doanh nghiệp tối tân nhất)
  - invest in cutting-edge enterprise storage interconnect (đầu tư vào kết nối lưu trữ doanh nghiệp tối tân nhất)
- **Register & nuance**: Thuật ngữ công nghệ thông tin doanh nghiệp cao cấp (High-End Enterprise IT Infrastructure).
- **Examples**:
  - Financial institutions and AI research labs invest heavily in cutting-edge enterprise storage interconnects to eliminate processing bottlenecks. (Các tổ chức tài chính và phòng thí nghiệm nghiên cứu AI đầu tư mạnh mẽ vào các kết nối lưu trữ doanh nghiệp tối tân nhất để loại bỏ các điểm nghẽn xử lý.)
- **Liên kết tiếng Hàn**: 최첨단 엔터프라이즈 스토리지 인터커넥트 (choe-cheomdan enteupraiseu seutoriji inteokeonekteu) — Kết nối lưu trữ doanh nghiệp tiên tiến và hiện đại nhất.

## Review in context: Part 1 (items 1–12)
Modern enterprise data centers rely on the **NVMe-over-Fabrics (NVMe-oF) architecture** to scale storage pools independently across high-speed networks. By leveraging **RDMA over Converged Ethernet (RoCEv2)** transport alongside **PCIe Gen6 PAM-4 signaling**, systems achieve massive bandwidth capabilities. However, engineers must carefully manage **forward error correction (FEC) latency** when transmitting data over noisy channels. To eliminate software overhead, **flannel-less remote direct memory access** enables microsecond-level transfers driven by hardware **submission and completion queue pair** configurations. This results in **sub-microsecond storage fabric latency**, which is sustained by **Priority Flow Control (PFC) lossless** pausing and **explicit congestion notification (ECN)** mechanisms. Furthermore, **end-to-end NVMe command offload** engines empower **disaggregated NVMe storage cluster** deployments, while rigorous **eye diagram signal integrity** testing ensures error-free physical layer operation.

### Bản dịch tiếng Việt phần 1:
Các trung tâm dữ liệu doanh nghiệp hiện đại dựa vào **NVMe-over-Fabrics (NVMe-oF) architecture** (kiến trúc giao thức NVMe qua mạng) để mở rộng các kho lưu trữ một cách độc lập qua các mạng tốc độ cao. Bằng cách tận dụng việc truyền tải **RDMA over Converged Ethernet (RoCEv2)** (RDMA trên nền Ethernet hội tụ) cùng với **PCIe Gen6 PAM-4 signaling** (tín hiệu PAM-4 PCIe Gen6), các hệ thống đạt được năng lực băng thông khổng lồ. Tuy nhiên, các kỹ sư phải quản lý cẩn thận **forward error correction (FEC) latency** (độ trễ sửa lỗi chuyển tiếp) khi truyền dữ liệu qua các kênh có nhiều nhiễu. Để loại bỏ chi phí phần mềm, **flannel-less remote direct memory access** (truy cập bộ nhớ trực tiếp từ xa không qua lớp trung gian) cho phép truyền dữ liệu ở mức microsecond được thúc đẩy bởi cấu hình phần cứng **submission and completion queue pair** (cặp hàng đợi gửi lệnh và nhận kết quả). Điều này mang lại **sub-microsecond storage fabric latency** (độ trễ mạng lưu trữ dưới microsecond), được duy trì bởi cơ chế tạm dừng **Priority Flow Control (PFC) lossless** (kiểm soát luồng ưu tiên không mất gói) và **explicit congestion notification (ECN)** (thông báo tắc nghẽn tường minh). Hơn nữa, các động cơ **end-to-end NVMe command offload** (giảm tải lệnh NVMe đầu cuối) trao quyền cho việc triển khai **disaggregated NVMe storage cluster** (cụm lưu trữ NVMe phân rã), trong khi việc kiểm tra **eye diagram signal integrity** (tính toàn vẹn tín hiệu biểu đồ mắt) nghiêm ngặt đảm bảo hoạt động lớp vật lý không lỗi.

## Review in context: Part 2 (items 13–25)
To connect geographically dispersed clusters, systems deploy **low-latency fiber optic interconnect** cabling, enabling **direct peer-to-peer DMA transfer** of memory blocks across PCIe switches. These systems utilize **FLIT-based protocol packets** measured in **gigatransfers per second lane** rates to maintain high data integrity and flow control. In mission-critical environments, **multipath NVMe controller failover** ensures high availability, while each **high-throughput NVMe namespace** handles intense concurrent I/O without hitting **hardware queue depth saturation**. The overall **storage networking fabric topology** is organized into ultra-compact designs like the **ultra-dense flash array chassis**, powered by **kernel-bypass user-space driver** software. Finally, continuous **datapath checksum data integrity** validations protect massive deployments in a **hyperscale NVMe storage fabric**, representing the absolute peak of **cutting-edge enterprise storage interconnect** engineering.

### Bản dịch tiếng Việt phần 2:
Để kết nối các cụm phân tán về mặt địa lý, các hệ thống triển khai cáp **low-latency fiber optic interconnect** (kết nối cáp quang độ trễ thấp), cho phép **direct peer-to-peer DMA transfer** (truyền dữ liệu trực tiếp ngang hàng qua DMA) các khối bộ nhớ qua các switch PCIe. Các hệ thống này sử dụng các gói **FLIT-based protocol packets** (gói giao thức dựa trên FLIT) được đo bằng tốc độ **gigatransfers per second lane** (tỷ lần truyền trên giây mỗi làn) để duy trì tính toàn vẹn dữ liệu và kiểm soát luồng cao. Trong các môi trường trọng yếu, **multipath NVMe controller failover** (chuyển đổi dự phòng bộ điều khiển NVMe đa đường đi) đảm bảo tính sẵn sàng cao, trong khi mỗi **high-throughput NVMe namespace** (không gian tên NVMe thông lượng cao) xử lý I/O đồng thời mãnh liệt mà không chạm mốc **hardware queue depth saturation** (bão hòa độ sâu hàng đợi phần cứng). Cấu trúc **storage networking fabric topology** (cấu trúc mạng lưu trữ) tổng thể được sắp xếp thành các thiết kế siêu gọn như **ultra-dense flash array chassis** (khung tủ mảng flash mật độ siêu cao), được vận hành bởi phần mềm **kernel-bypass user-space driver** (trình điều khiển không gian người dùng bỏ qua nhân). Cuối cùng, các bước xác minh **datapath checksum data integrity** (tính toàn vẹn dữ liệu đường truyền) liên tục bảo vệ các triển khai khổng lồ trong **hyperscale NVMe storage fabric** (mạng lưu trữ NVMe quy mô siêu lớn), đại diện cho đỉnh cao tuyệt đối của kỹ thuật **cutting-edge enterprise storage interconnect** (kết nối lưu trữ doanh nghiệp tối tân nhất).
