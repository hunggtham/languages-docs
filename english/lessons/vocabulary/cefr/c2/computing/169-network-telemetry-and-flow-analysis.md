# C2 Vocabulary — Network telemetry and flow analysis

This lesson follows traffic from capture and inspection through flow export, filtering, and quantitative network health signals.

Flow: **network tap → packet broker → flow log → connection log → firewall rule → stateful inspection → stateless filter → deep packet inspection → protocol fingerprint → traffic classification → packet capture → sampling filter → flow exporter → NetFlow record → IPFIX record → network telemetry → packet loss metric → jitter metric → latency histogram → throughput metric**.

## 1. network tap /ˈnetwɜːrk tæp/
**Part of speech:** noun
**Core meaning (English):** a device or interface that copies network traffic for monitoring without becoming part of the forwarding path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device/interface copy traffic để monitor mà không nằm trong forwarding path.
**Grammar & collocations:** `network-tap feed` — feed; `mirror a link` — mirror.
**Examples:** `The network tap copied traffic to the analysis cluster without adding a routing hop.` → Tap copy traffic mà không thêm hop.
**Liên kết tiếng Hàn:** `네트워크 탭`.

## 2. packet broker /ˈpækɪt ˈbroʊkər/
**Part of speech:** noun
**Core meaning (English):** a system that filters, duplicates, and distributes captured packets to monitoring tools.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** system lọc, nhân bản và phân packet capture tới tool monitor.
**Grammar & collocations:** `packet-broker port` — port; `forward a selected stream` — chuyển.
**Examples:** `The packet broker sent only encrypted traffic to the expensive inspection appliance.` → Broker chỉ gửi traffic mã hóa tới appliance đắt.
**Liên kết tiếng Hàn:** `패킷 브로커`.

## 3. flow log /floʊ lɒɡ/
**Part of speech:** noun
**Core meaning (English):** a summarized record of network-flow metadata such as endpoints, ports, bytes, and timing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record tóm tắt metadata flow như endpoint, port, byte và timing.
**Grammar & collocations:** `flow-log entry` — entry; `aggregate connection metadata` — gộp.
**Examples:** `The flow log showed repeated outbound connections to the same unfamiliar address.` → Log flow cho thấy connection outbound lặp tới address lạ.
**Liên kết tiếng Hàn:** `플로 로그`.

## 4. connection log /kəˈnekʃən lɒɡ/
**Part of speech:** noun
**Core meaning (English):** a record of individual connection attempts, outcomes, identities, and timing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record từng connection attempt, outcome, identity và timing.
**Grammar & collocations:** `connection-log correlation` — correlation; `trace a failed handshake` — truy.
**Examples:** `The connection log linked the failed handshake to a certificate mismatch.` → Log nối handshake fail với certificate mismatch.
**Liên kết tiếng Hàn:** `연결 로그`.

## 5. firewall rule /ˈfaɪərwɔːl ruːl/
**Part of speech:** noun
**Core meaning (English):** a condition that permits, rejects, or logs traffic based on addresses, ports, identities, or state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** condition cho, chặn hoặc ghi traffic theo address, port, identity hoặc state.
**Grammar & collocations:** `firewall-rule priority` — priority; `allow a service port` — cho phép.
**Examples:** `The firewall rule allowed the health probe but rejected all other public access.` → Rule cho health probe nhưng chặn public khác.
**Liên kết tiếng Hàn:** `방화벽 규칙`.

## 6. stateful inspection /ˈsteɪtfəl ɪnˈspekʃən/
**Part of speech:** noun
**Core meaning (English):** filtering that considers the recorded state of a connection when evaluating later packets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter xem state connection đã ghi khi đánh giá packet sau.
**Grammar & collocations:** `stateful-inspection table` — table; `allow an established flow` — cho phép.
**Examples:** `Stateful inspection allowed the response because the internal request had created a valid session.` → Inspection cho response vì request nội tạo session hợp lệ.
**Liên kết tiếng Hàn:** `상태 기반 검사`.

## 7. stateless filter /ˈsteɪtləs ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a filter that evaluates each packet independently without remembering connection history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter đánh giá từng packet riêng, không nhớ lịch sử connection.
**Grammar & collocations:** `stateless-filter rule` — rule; `match a packet header` — khớp.
**Examples:** `The stateless filter blocked the source prefix before any session state existed.` → Filter stateless chặn prefix trước khi có session.
**Liên kết tiếng Hàn:** `무상태 필터`.

## 8. deep packet inspection /diː ˈpækɪt ɪnˈspekʃən/
**Part of speech:** noun
**Core meaning (English):** examining packet payloads or protocol details beyond basic addresses and ports.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xem payload/protocol detail ngoài address và port cơ bản.
**Grammar & collocations:** `deep-packet-inspection engine` — engine; `inspect an application header` — kiểm tra.
**Examples:** `Deep packet inspection identified the application protocol inside the permitted port.` → Inspection nhận ra protocol app trong port được phép.
**Liên kết tiếng Hàn:** `심층 패킷 검사`.

## 9. protocol fingerprint /ˈproʊtəkɒl ˈfɪŋɡərprɪnt/
**Part of speech:** noun
**Core meaning (English):** a recognizable pattern of protocol behavior used to infer the software or service generating traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern behavior protocol giúp suy ra software/service tạo traffic.
**Grammar & collocations:** `protocol-fingerprint database` — database; `identify a client implementation` — nhận diện.
**Examples:** `The protocol fingerprint suggested that the traffic came from an outdated client library.` → Fingerprint gợi traffic từ library cũ.
**Liên kết tiếng Hàn:** `프로토콜 지문`.

## 10. traffic classification /ˈtræfɪk ˌklæsɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** assigning network traffic to categories used for policy, quality, billing, or investigation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gắn traffic vào category phục vụ policy, quality, billing hoặc điều tra.
**Grammar & collocations:** `traffic-classification label` — label; `classify latency-sensitive traffic` — phân loại.
**Examples:** `Traffic classification marked voice packets for a low-latency queue.` → Classification đánh dấu packet voice vào queue latency thấp.
**Liên kết tiếng Hàn:** `트래픽 분류`.

## 11. packet capture /ˈpækɪt ˈkæptʃər/
**Part of speech:** noun
**Core meaning (English):** a recorded sequence of packets used to diagnose, audit, or reconstruct network behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi packet ghi lại để diagnose, audit hoặc dựng behavior mạng.
**Grammar & collocations:** `packet-capture file` — file; `replay a protocol exchange` — replay.
**Examples:** `The packet capture revealed a retransmission immediately after the route change.` → Capture lộ retransmission sau route change.
**Liên kết tiếng Hàn:** `패킷 캡처`.

## 12. sampling filter /ˈsæmplɪŋ ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a rule selecting which packets, flows, or records are retained for analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chọn packet/flow/record giữ lại để phân tích.
**Grammar & collocations:** `sampling-filter expression` — expression; `retain every error flow` — giữ.
**Examples:** `The sampling filter retained all denied connections and one percent of allowed traffic.` → Filter giữ mọi connection bị deny và 1% traffic allowed.
**Liên kết tiếng Hàn:** `샘플링 필터`.

## 13. flow exporter /floʊ ɪkˈspɔːrtər/
**Part of speech:** noun
**Core meaning (English):** a component that converts observed traffic into flow records and sends them to a collector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component đổi traffic quan sát thành flow record rồi gửi collector.
**Grammar & collocations:** `flow-exporter template` — template; `export interface statistics` — export.
**Examples:** `The flow exporter sent records to two collectors so monitoring survived one outage.` → Exporter gửi record tới hai collector.
**Liên kết tiếng Hàn:** `플로 익스포터`.

## 14. NetFlow record /ˈnetfloʊ ˈrekərd/
**Part of speech:** noun
**Core meaning (English):** a standardized summary of a network flow containing endpoints, transport details, and counters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** summary chuẩn hóa của flow gồm endpoint, transport và counter.
**Grammar & collocations:** `NetFlow-record collector` — collector; `aggregate byte counts` — gộp.
**Examples:** `The NetFlow record showed that one host generated most outbound bytes.` → Record cho thấy một host tạo đa số byte outbound.
**Liên kết tiếng Hàn:** `넷플로우 레코드`.

## 15. IPFIX record /ˈaɪ piː ɛf aɪ ɛks ˈrekərd/
**Part of speech:** noun
**Core meaning (English):** an extensible flow record whose fields are described by templates sent to a collector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** flow record mở rộng, field mô tả bằng template gửi collector.
**Grammar & collocations:** `IPFIX-record template` — template; `decode an enterprise field` — giải mã.
**Examples:** `The IPFIX record carried an application field that the older flow format lacked.` → Record IPFIX mang field app format cũ thiếu.
**Liên kết tiếng Hàn:** `IPFIX 레코드`.

## 16. network telemetry /ˈnetwɜːrk təˈlemətri/
**Part of speech:** noun
**Core meaning (English):** measurements and events collected from network devices and paths to describe their behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement/event thu từ device và path để mô tả behavior mạng.
**Grammar & collocations:** `network-telemetry pipeline` — pipeline; `correlate link signals` — liên kết.
**Examples:** `Network telemetry connected packet loss with the overloaded interface.` → Telemetry nối packet loss với interface quá tải.
**Liên kết tiếng Hàn:** `네트워크 원격 측정`.

## 17. packet loss metric /ˈpækɪt lɒs ˈmetrɪk/
**Part of speech:** noun
**Core meaning (English):** a measurement of packets that fail to arrive or are discarded along a path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement packet không tới hoặc bị drop trên path.
**Grammar & collocations:** `packet-loss-metric spike` — spike; `measure loss by interface` — đo.
**Examples:** `The packet loss metric rose only on the path to the remote region.` → Metric tăng chỉ trên path tới region xa.
**Liên kết tiếng Hàn:** `패킷 손실 지표`.

## 18. jitter metric /ˈdʒɪtər ˈmetrɪk/
**Part of speech:** noun
**Core meaning (English):** a measurement of variation in packet delay over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement độ thay đổi packet delay theo thời gian.
**Grammar & collocations:** `jitter-metric percentile` — percentile; `detect unstable timing` — phát hiện.
**Examples:** `The jitter metric explained why calls sounded broken despite acceptable average latency.` → Jitter giải thích call vỡ dù latency trung bình ổn.
**Liên kết tiếng Hàn:** `지터 지표`.

## 19. latency histogram /ˈleɪtənsi ˈhɪstəɡræm/
**Part of speech:** noun
**Core meaning (English):** a distribution showing how many network operations fall within each delay bucket.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution cho biết operation mạng rơi vào bucket delay nào.
**Grammar & collocations:** `latency-histogram bucket` — bucket; `compare tail delay` — so.
**Examples:** `The latency histogram revealed a second peak caused by a slow route.` → Histogram lộ peak thứ hai do route chậm.
**Liên kết tiếng Hàn:** `지연 시간 히스토그램`.

## 20. throughput metric /ˈθruːpʊt ˈmetrɪk/
**Part of speech:** noun
**Core meaning (English):** a measurement of how much data or work a network carries per unit of time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement lượng data/work mạng mang trong một đơn vị thời gian.
**Grammar & collocations:** `throughput-metric ceiling` — ceiling; `measure delivered bytes per second` — đo.
**Examples:** `The throughput metric fell when the inspection appliance reached its processing limit.` → Throughput giảm khi appliance chạm giới hạn.
**Liên kết tiếng Hàn:** `처리량 지표`.

## Review in context

A **network tap** copies traffic to a **packet broker**, which feeds a **flow log** or **connection log**. A **firewall rule** may use **stateful inspection** or a **stateless filter**; **deep packet inspection**, a **protocol fingerprint**, and **traffic classification** add context. A **packet capture** is reduced by a **sampling filter**, then a **flow exporter** produces a **NetFlow record** or **IPFIX record**. **Network telemetry** measures a **packet loss metric**, **jitter metric**, **latency histogram**, and **throughput metric**.

**Bản dịch tiếng Việt:** **Network tap** copy traffic tới **packet broker**, rồi cấp cho **flow log** hoặc **connection log**. **Firewall rule** có thể dùng **stateful inspection** hoặc **stateless filter**; **deep packet inspection**, **protocol fingerprint** và **traffic classification** thêm context. **Packet capture** được giảm bằng **sampling filter**, sau đó **flow exporter** tạo **NetFlow record** hoặc **IPFIX record**. **Network telemetry** đo **packet loss metric**, **jitter metric**, **latency histogram** và **throughput metric**.
