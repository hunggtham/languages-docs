# C2 Vocabulary — Chiplet interconnect and die-to-die links

This lesson follows a chiplet link from physical lane bring-up through packet flow, coherency, buffering, and repair.

Flow: **die-to-die link → chiplet fabric → die-to-die protocol → flit mode → credit return → link training → lane deskew → retimer → packetized interconnect → coherent attach → cache coherency bridge → protocol converter → clock-domain crossing → elastic buffer → link margining → eye monitor → link error monitor → lane repair → spare lane**.

## 1. die-to-die link /daɪ tə daɪ lɪŋk/
**Part of speech:** noun
**Core meaning (English):** a physical or logical connection that carries signals directly between separate silicon dies in one package or system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** link nối trực tiếp hai die, thường trong package chiplet.
**Grammar & collocations:** `die-to-die-link budget` — budget; `bring up a die-to-die link` — bring up.
**Examples:** `The die-to-die link connected the compute die to a separate I/O die.` → Link die-to-die nối compute die với I/O die riêng.
**Liên kết tiếng Hàn:** `다이 간 링크`.

## 2. chiplet fabric /ˈtʃɪplət ˈfæbrɪk/
**Part of speech:** noun
**Core meaning (English):** the switching or routing network that connects multiple chiplets and directs traffic among them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fabric nội bộ nối nhiều chiplet và route traffic.
**Grammar & collocations:** `chiplet-fabric topology` — topology; `route through the fabric` — route.
**Examples:** `The chiplet fabric routed memory traffic around a temporarily disabled accelerator.` → Fabric route memory quanh accelerator bị disable tạm.
**Liên kết tiếng Hàn:** `칩렛 패브릭`.

## 3. die-to-die protocol /daɪ tə daɪ ˈproʊtəˌkɔl/
**Part of speech:** noun
**Core meaning (English):** the agreed rules for framing, flow control, ordering, and error handling between dies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ luật hai die dùng để hiểu frame, credit, thứ tự và lỗi.
**Grammar & collocations:** `die-to-die-protocol layer` — layer; `negotiate protocol capabilities` — negotiate.
**Examples:** `The die-to-die protocol supported replay after a corrupted transfer.` → Protocol hỗ trợ replay sau transfer hỏng.
**Liên kết tiếng Hàn:** `다이 간 프로토콜`.

## 4. flit mode /flɪt moʊd/
**Part of speech:** noun
**Core meaning (English):** a packet-transfer mode that sends fixed-size flow-control units through an interconnect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mode truyền các đơn vị kích thước cố định để flow control dễ hơn.
**Grammar & collocations:** `flit-mode header` — header; `segment a packet into flits` — chia.
**Examples:** `Flit mode allowed the receiver to return credits at a predictable granularity.` → Flit mode cho receiver trả credit theo granularity ổn định.
**Liên kết tiếng Hàn:** `플릿 모드`.

## 5. credit return /ˈkrɛdɪt rɪˈtɝn/
**Part of speech:** noun
**Core meaning (English):** a flow-control signal indicating that buffer space has become available for more transfers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** receiver báo buffer đã trống để sender được gửi thêm.
**Grammar & collocations:** `credit-return latency` — latency; `return a credit` — trả credit.
**Examples:** `Delayed credit return throttled the link even though the physical lanes were healthy.` → Credit return trễ làm link chậm dù lane vật lý tốt.
**Liên kết tiếng Hàn:** `크레딧 반환`.

## 6. link training /lɪŋk ˈtreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** an initialization procedure that discovers capabilities and tunes two endpoints so a link can operate reliably.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước bring-up để hai đầu link thương lượng và tune.
**Grammar & collocations:** `link-training sequence` — sequence; `complete link training` — hoàn tất.
**Examples:** `Link training selected a lower rate after the package showed excess loss.` → Training chọn rate thấp hơn sau khi package có loss cao.
**Liên kết tiếng Hàn:** `링크 트레이닝`.

## 7. lane deskew /leɪn diːˈskjuː/
**Part of speech:** noun
**Core meaning (English):** correcting arrival-time differences among parallel lanes so their symbols can be reassembled in order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn lại thời gian lane song song để ghép data đúng thứ tự.
**Grammar & collocations:** `lane-deskew buffer` — buffer; `deskew parallel lanes` — deskew.
**Examples:** `Lane deskew absorbed small package-length differences between adjacent traces.` → Deskew hấp thụ chênh lệch nhỏ giữa trace.
**Liên kết tiếng Hàn:** `레인 디스큐`.

## 8. retimer /ˌriːˈtaɪmər/
**Part of speech:** noun
**Core meaning (English):** a circuit that receives, resynchronizes, and retransmits high-speed signals to restore timing margin.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch nhận rồi phát lại signal để phục hồi timing trên đường dài.
**Grammar & collocations:** `retimer placement` — placement; `insert a retimer` — chèn.
**Examples:** `A retimer extended the reach between the switch die and the memory bridge.` → Retimer mở rộng khoảng cách giữa switch die và memory bridge.
**Liên kết tiếng Hàn:** `리타이머`.

## 9. packetized interconnect /ˈpækəˌtaɪzd ˌɪntərkəˈnɛkt/
**Part of speech:** noun
**Core meaning (English):** an interconnect that carries transfers as addressed packets instead of fixed direct wires.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết nối đóng gói data thành packet có địa chỉ.
**Grammar & collocations:** `packetized-interconnect header` — header; `route a packetized transfer` — route.
**Examples:** `Packetized interconnect let several chiplets share one physical fabric.` → Interconnect packetized cho nhiều chiplet dùng chung fabric.
**Liên kết tiếng Hàn:** `패킷화 인터커넥트`.

## 10. coherent attach /koʊˈhɪrənt əˈtætʃ/
**Part of speech:** noun
**Core meaning (English):** connecting a device to a system so its memory accesses participate in the system's cache-coherency rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** attach device vào hệ thống mà vẫn tuân thủ luật cache coherence.
**Grammar & collocations:** `coherent-attach interface` — interface; `attach a coherent agent` — attach.
**Examples:** `Coherent attach allowed the accelerator to read shared buffers without explicit cache flushes.` → Attach coherent cho accelerator đọc buffer chung mà không flush thủ công.
**Liên kết tiếng Hàn:** `일관성 연결`.

## 11. cache coherency bridge /kæʃ koʊˈhɪrənsi brɪdʒ/
**Part of speech:** noun
**Core meaning (English):** logic that translates or extends cache-coherency messages between otherwise different domains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cầu nối protocol coherence giữa hai domain khác nhau.
**Grammar & collocations:** `cache-coherency-bridge logic` — logic; `bridge snoop traffic` — bridge.
**Examples:** `The cache coherency bridge translated snoop messages for the legacy memory controller.` → Bridge dịch snoop message cho controller cũ.
**Liên kết tiếng Hàn:** `캐시 일관성 브리지`.

## 12. protocol converter /ˈproʊtəˌkɔl kənˈvɝtər/
**Part of speech:** noun
**Core meaning (English):** logic that translates transactions between two interconnect protocols or framing formats.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ chuyển đổi transaction giữa protocol khác nhau.
**Grammar & collocations:** `protocol-converter latency` — latency; `convert transaction formats` — chuyển đổi.
**Examples:** `The protocol converter mapped narrow control messages into the fabric's packet format.` → Converter map control message hẹp vào packet format của fabric.
**Liên kết tiếng Hàn:** `프로토콜 변환기`.

## 13. clock-domain crossing /klɑk doʊˈmeɪn ˈkrɔsɪŋ/
**Part of speech:** noun
**Core meaning (English):** transferring a signal or data between logic regions driven by different clocks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data đi qua hai clock khác nhau, cần đồng bộ để tránh metastability.
**Grammar & collocations:** `clock-domain-crossing check` — check; `synchronize a crossing` — đồng bộ.
**Examples:** `The clock-domain crossing used a handshake so the slow management clock could control the fast link.` → Crossing dùng handshake để clock quản lý chậm điều khiển link nhanh.
**Liên kết tiếng Hàn:** `클록 도메인 교차`.

## 14. elastic buffer /ɪˈlæstɪk ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** a buffer that absorbs small timing or rate differences between a producer and a consumer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** buffer co giãn để hấp thụ lệch clock/rate nhỏ.
**Grammar & collocations:** `elastic-buffer depth` — depth; `absorb rate mismatch` — hấp thụ.
**Examples:** `The elastic buffer absorbed clock drift without dropping a complete packet.` → Buffer hấp thụ drift clock mà không drop packet.
**Liên kết tiếng Hàn:** `탄력 버퍼`.

## 15. link margining /lɪŋk ˈmɑrdʒənɪŋ/
**Part of speech:** noun
**Core meaning (English):** deliberately varying timing or voltage conditions to measure how much operating margin a link has.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thử link ở điều kiện xấu hơn để đo khoảng an toàn.
**Grammar & collocations:** `link-margining test` — test; `sweep voltage margin` — sweep.
**Examples:** `Link margining found that one lane failed only at the cold-voltage corner.` → Margining phát hiện lane chỉ fail ở corner lạnh-voltage thấp.
**Liên kết tiếng Hàn:** `링크 마진 측정`.

## 16. eye monitor /aɪ ˈmɑnətər/
**Part of speech:** noun
**Core meaning (English):** a circuit or instrument that observes the statistical opening of a high-speed signal eye.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** monitor nhìn eye diagram để biết signal còn khoảng timing/voltage sạch không.
**Grammar & collocations:** `eye-monitor sample` — sample; `measure eye opening` — đo.
**Examples:** `The eye monitor showed a narrower opening after the package temperature rose.` → Monitor cho thấy eye hẹp hơn khi nhiệt package tăng.
**Liên kết tiếng Hàn:** `아이 모니터`.

## 17. link error monitor /lɪŋk ˈɛrər ˈmɑnətər/
**Part of speech:** noun
**Core meaning (English):** logic that counts, classifies, or reports transmission errors on an interconnect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** monitor đếm và phân loại lỗi truyền trên link.
**Grammar & collocations:** `link-error-monitor counter` — counter; `sample error events` — lấy mẫu.
**Examples:** `The link error monitor separated correctable retries from uncorrectable failures.` → Monitor tách retry sửa được khỏi failure không sửa được.
**Liên kết tiếng Hàn:** `링크 오류 모니터`.

## 18. lane repair /leɪn rɪˈpɛr/
**Part of speech:** noun
**Core meaning (English):** remapping traffic around a failed or degraded physical lane using available redundancy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi mapping để bỏ qua lane hỏng và dùng lane dự phòng.
**Grammar & collocations:** `lane-repair sequence` — sequence; `repair a degraded lane` — sửa.
**Examples:** `Lane repair restored the link after one package trace developed excessive noise.` → Repair khôi phục link sau khi một trace bị noise cao.
**Liên kết tiếng Hàn:** `레인 복구`.

## 19. spare lane /spɛr leɪn/
**Part of speech:** noun
**Core meaning (English):** an unused physical lane reserved to replace a failed lane in a redundant interconnect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lane dự phòng chờ thay lane lỗi.
**Grammar & collocations:** `spare-lane mapping` — mapping; `activate a spare lane` — kích hoạt.
**Examples:** `The controller activated a spare lane during manufacturing test.` → Controller kích hoạt lane dự phòng khi test sản xuất.
**Liên kết tiếng Hàn:** `예비 레인`.

## 20. link signoff /lɪŋk ˈsaɪnɔf/
**Part of speech:** noun
**Core meaning (English):** final approval that an interconnect meets protocol, timing, signal-integrity, error-rate, and repair requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** signoff cuối cho link: protocol, timing, signal và repair đều đạt.
**Grammar & collocations:** `link-signoff checklist` — checklist; `close link signoff` — hoàn tất.
**Examples:** `Link signoff waited for margining data from every package corner.` → Signoff đợi data margining ở mọi package corner.
**Liên kết tiếng Hàn:** `링크 사인오프`.

## Review in context

A **die-to-die link** connects chiplets through a **chiplet fabric** governed by a **die-to-die protocol**. In **flit mode**, a **credit return** controls buffer use, while **link training** brings endpoints up and **lane deskew** realigns parallel lanes. A **retimer** can restore timing, and a **packetized interconnect** carries addressed traffic. A **coherent attach** may cross a **cache coherency bridge** or a **protocol converter**. Designers check **clock-domain crossing** and use an **elastic buffer** for rate differences. **Link margining** stresses conditions; an **eye monitor** and **link error monitor** report health. If a lane degrades, **lane repair** activates a **spare lane** before final **link signoff**.

**Bản dịch tiếng Việt:** **Die-to-die link** nối chiplet qua **chiplet fabric** theo **die-to-die protocol**. Ở **flit mode**, **credit return** điều khiển buffer, còn **link training** bring-up endpoint và **lane deskew** căn lại lane song song. **Retimer** phục hồi timing, còn **packetized interconnect** mang traffic có địa chỉ. **Coherent attach** có thể đi qua **cache coherency bridge** hoặc **protocol converter**. Designer kiểm tra **clock-domain crossing** và dùng **elastic buffer** cho lệch rate. **Link margining** stress điều kiện; **eye monitor** và **link error monitor** báo sức khỏe. Nếu lane suy giảm, **lane repair** kích hoạt **spare lane** trước **link signoff** cuối.
