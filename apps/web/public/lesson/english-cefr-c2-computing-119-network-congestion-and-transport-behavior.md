# C2 Vocabulary — Network congestion and transport behavior

This lesson follows a flow from path conditions and acknowledgments through queue pressure, loss recovery, and fair sharing.

Flow: **pacing rate → path MTU → fragmentation black hole → keepalive probe → flow label → traffic class → ECN mark → tail drop → queue occupancy → loss recovery → path validation → handshake retransmission → route asymmetry → network namespace → socket buffer → congestion signal → link utilization → fair-share rate → reordering buffer → acknowledgment delay**.

## 1. pacing rate /ˈpeɪsɪŋ reɪt/
**Part of speech:** noun
**Core meaning (English):** the rate at which a sender intentionally releases packets to avoid sudden bursts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ sender chủ động nhả packet để tránh burst đột ngột.
**Grammar & collocations:** `pacing-rate controller` — bộ điều khiển; `spread packets over time` — dàn.
**Examples:** `The pacing rate slowed after the receiver reported rising queue pressure.` → Rate chậm lại khi receiver báo queue tăng.
**Liên kết tiếng Hàn:** `페이싱 속도`.

## 2. path MTU /pɑːθ ˌem tiː ˈjuː/
**Part of speech:** noun
**Core meaning (English):** the largest packet that can cross a path without fragmentation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** packet lớn nhất đi qua path mà không cần fragmentation.
**Grammar & collocations:** `path-MTU estimate` — ước tính; `fit a segment below the limit` — đặt.
**Examples:** `The sender lowered its packet size after discovering a smaller path MTU across the tunnel.` → Sender giảm packet khi path MTU nhỏ hơn.
**Liên kết tiếng Hàn:** `경로 MTU`.

## 3. fragmentation black hole /ˌfræɡmənˈteɪʃən blæk hoʊl/
**Part of speech:** noun
**Core meaning (English):** a path that silently drops oversized packets because fragmentation or error feedback is blocked.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** path âm thầm drop packet quá lớn vì fragmentation/error feedback bị chặn.
**Grammar & collocations:** `fragmentation-black-hole symptom` — triệu chứng; `diagnose a silent drop` — chẩn đoán.
**Examples:** `A fragmentation black hole made large uploads stall while small health checks succeeded.` → Black hole làm upload lớn đứng nhưng health check nhỏ vẫn được.
**Liên kết tiếng Hàn:** `단편화 블랙홀`.

## 4. keepalive probe /ˈkiːpəlaɪv proʊb/
**Part of speech:** noun
**Core meaning (English):** a small test packet used to determine whether an otherwise idle connection still works.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** packet test nhỏ kiểm tra connection idle còn hoạt động không.
**Grammar & collocations:** `keepalive-probe interval` — interval; `detect a dead peer` — phát hiện.
**Examples:** `The keepalive probe detected that the mobile client had disappeared from the network.` → Probe phát hiện mobile client biến mất.
**Liên kết tiếng Hàn:** `킵얼라이브 프로브`.

## 5. flow label /floʊ ˈleɪbəl/
**Part of speech:** noun
**Core meaning (English):** a packet field identifying a flow so network devices can apply consistent handling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** field packet nhận diện flow để thiết bị xử lý nhất quán.
**Grammar & collocations:** `flow-label value` — value; `classify packets consistently` — phân loại.
**Examples:** `The flow label helped routers keep packets on a stable treatment path.` → Label giúp router giữ path xử lý ổn định.
**Liên kết tiếng Hàn:** `플로 레이블`.

## 6. traffic class /ˈtræfɪk klæs/
**Part of speech:** noun
**Core meaning (English):** a category indicating how packets should be prioritized or treated by a network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** category cho biết packet được ưu tiên/xử lý thế nào.
**Grammar & collocations:** `traffic-class mapping` — ánh xạ; `mark latency-sensitive traffic` — đánh dấu.
**Examples:** `The traffic class placed voice packets ahead of bulk backup traffic.` → Class ưu tiên voice hơn backup.
**Liên kết tiếng Hàn:** `트래픽 클래스`.

## 7. ECN mark /ˌiː siː ˈen mɑːrk/
**Part of speech:** noun
**Core meaning (English):** a packet indication that congestion was observed without requiring the packet to be dropped.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dấu packet báo congestion mà không cần drop packet.
**Grammar & collocations:** `ECN-mark response` — phản hồi; `signal congestion early` — báo.
**Examples:** `The router added an ECN mark so the sender could slow down before loss occurred.` → Router đánh dấu để sender chậm trước khi mất.
**Liên kết tiếng Hàn:** `ECN 마크`.

## 8. tail drop /teɪl drɒp/
**Part of speech:** noun
**Core meaning (English):** discarding newly arriving packets when a queue has reached its capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ packet mới đến khi queue đầy capacity.
**Grammar & collocations:** `tail-drop event` — sự kiện; `overflow a full queue` — tràn.
**Examples:** `Tail drop caused synchronized retransmissions when the buffer filled during the burst.` → Tail drop gây retransmission đồng loạt khi buffer đầy.
**Liên kết tiếng Hàn:** `테일 드롭`.

## 9. queue occupancy /kjuː ˈɒkjəpənsi/
**Part of speech:** noun
**Core meaning (English):** the amount of buffered data currently waiting for transmission or processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng data đang nằm trong buffer chờ truyền hoặc xử lý.
**Grammar & collocations:** `queue-occupancy gauge` — gauge; `watch a buffer fill` — theo dõi.
**Examples:** `Queue occupancy stayed high even after the application reduced its send rate.` → Occupancy vẫn cao dù app giảm send rate.
**Liên kết tiếng Hàn:** `큐 점유율`.

## 10. loss recovery /lɒs rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** the mechanisms that detect missing packets and restore a complete ordered stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế phát hiện packet mất và khôi phục stream đủ, đúng thứ tự.
**Grammar & collocations:** `loss-recovery timer` — timer; `retransmit a missing segment` — gửi lại.
**Examples:** `Loss recovery retransmitted only the missing segment instead of restarting the whole transfer.` → Recovery chỉ gửi lại segment mất.
**Liên kết tiếng Hàn:** `손실 복구`.

## 11. path validation /pɑːθ ˌvælɪˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** testing whether a new network path can carry traffic before it becomes the active route.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra path mới có truyền traffic được trước khi dùng chính thức.
**Grammar & collocations:** `path-validation challenge` — challenge; `confirm a reachable address` — xác nhận.
**Examples:** `Path validation confirmed the new interface before the connection migrated to Wi-Fi.` → Validation xác nhận interface trước migrate Wi-Fi.
**Liên kết tiếng Hàn:** `경로 검증`.

## 12. handshake retransmission /ˈhændʃeɪk ˌriːtrænzˈmɪʃən/
**Part of speech:** noun
**Core meaning (English):** repeating a connection-establishment message after its expected acknowledgment does not arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi lại message thiết lập connection khi thiếu ack.
**Grammar & collocations:** `handshake-retransmission limit` — giới hạn; `retry an unacknowledged SYN` — retry.
**Examples:** `Handshake retransmission hid a brief wireless loss from the application.` → Retransmission che mất mất mạng Wi-Fi ngắn.
**Liên kết tiếng Hàn:** `핸드셰이크 재전송`.

## 13. route asymmetry /ruːt eɪˈsɪmətri/
**Part of speech:** noun
**Core meaning (English):** a condition in which traffic travels along different paths in opposite directions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** traffic đi trên path khác nhau theo hai chiều.
**Grammar & collocations:** `route-asymmetry diagnosis` — chẩn đoán; `trace the return path` — truy.
**Examples:** `Route asymmetry made the forward link look healthy while replies crossed a congested provider.` → Asymmetry khiến chiều đi khỏe nhưng reply qua provider nghẽn.
**Liên kết tiếng Hàn:** `경로 비대칭`.

## 14. network namespace /ˈnetwɜːrk ˈneɪmspeɪs/
**Part of speech:** noun
**Core meaning (English):** an isolated view of network interfaces, routes, and ports assigned to a process group or container.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** view cô lập về interface, route và port của process/container.
**Grammar & collocations:** `network-namespace boundary` — ranh giới; `isolate container routes` — cô lập.
**Examples:** `The network namespace kept the test container from reaching the production subnet.` → Namespace chặn container test vào subnet production.
**Liên kết tiếng Hàn:** `네트워크 네임스페이스`.

## 15. socket buffer /ˈsɒkɪt ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** memory reserved by a socket for outgoing or incoming data awaiting transport.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory socket dành cho data gửi/nhận đang chờ transport.
**Grammar & collocations:** `socket-buffer pressure` — áp lực; `tune a receive buffer` — tinh chỉnh.
**Examples:** `The small socket buffer limited throughput on the high-latency satellite path.` → Buffer nhỏ giới hạn throughput trên path vệ tinh.
**Liên kết tiếng Hàn:** `소켓 버퍼`.

## 16. congestion signal /kənˈdʒestʃən ˈsɪɡnəl/
**Part of speech:** noun
**Core meaning (English):** an observation, mark, or loss pattern indicating that traffic exceeds a path's comfortable capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observation/mark/loss cho thấy traffic vượt capacity path.
**Grammar & collocations:** `congestion-signal estimator` — bộ ước tính; `infer pressure from delay` — suy ra.
**Examples:** `Rising delay became the first congestion signal before packets began to drop.` → Delay tăng là signal trước khi packet drop.
**Liên kết tiếng Hàn:** `혼잡 신호`.

## 17. link utilization /lɪŋk ˌjuːtəlɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the proportion of a link's available transmission capacity currently in use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ capacity truyền của link đang được dùng.
**Grammar & collocations:** `link-utilization trend` — xu hướng; `measure sustained load` — đo.
**Examples:** `Link utilization reached ninety percent during the regional backup window.` → Utilization đạt 90% lúc backup vùng.
**Liên kết tiếng Hàn:** `링크 사용률`.

## 18. fair-share rate /ˌfer ˈʃer reɪt/
**Part of speech:** noun
**Core meaning (English):** the throughput rate a flow or tenant is entitled to receive under a sharing policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** throughput mà flow/tenant được nhận theo policy chia sẻ.
**Grammar & collocations:** `fair-share-rate estimate` — ước tính; `allocate capacity proportionally` — phân bổ.
**Examples:** `The scheduler reduced the bulk transfer to its fair-share rate when interactive traffic arrived.` → Scheduler giảm transfer về rate công bằng.
**Liên kết tiếng Hàn:** `공정 공유율`.

## 19. reordering buffer /riːˈɔːrdərɪŋ ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** temporary storage that holds out-of-order packets until missing earlier packets arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** buffer giữ packet lệch thứ tự đến khi packet trước đến.
**Grammar & collocations:** `reordering-buffer depth` — độ sâu; `release an ordered segment` — phát.
**Examples:** `The reordering buffer delayed delivery briefly while a packet took a longer route.` → Buffer trì hoãn delivery khi một packet đi đường vòng.
**Liên kết tiếng Hàn:** `재정렬 버퍼`.

## 20. acknowledgment delay /əkˈnɒlɪdʒmənt dɪˈleɪ/
**Part of speech:** noun
**Core meaning (English):** the intentional or observed time between receiving data and sending its acknowledgment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian từ lúc nhận data đến khi gửi acknowledgment.
**Grammar & collocations:** `acknowledgment-delay timer` — timer; `coalesce acknowledgments` — gộp.
**Examples:** `Acknowledgment delay increased the sender's estimate of the path's round-trip time.` → Delay làm sender ước tính RTT cao hơn.
**Liên kết tiếng Hàn:** `승인 지연`.

## Review in context

A sender chooses a **pacing rate** under a **path MTU**; a **fragmentation black hole** can silently drop large packets, while a **keepalive probe** tests an idle path. A **flow label**, **traffic class**, and **ECN mark** guide treatment; **tail drop** and **queue occupancy** reveal pressure. **Loss recovery** restores missing data, **path validation** tests alternate routes, and **handshake retransmission** survives startup loss. **Route asymmetry** complicates diagnosis, a **network namespace** isolates paths, and a **socket buffer** holds data. A **congestion signal** and **link utilization** inform a **fair-share rate**; a **reordering buffer** restores order, while **acknowledgment delay** shapes timing.

**Bản dịch tiếng Việt:** Sender chọn **pacing rate** theo **path MTU**; **fragmentation black hole** có thể âm thầm bỏ packet lớn, còn **keepalive probe** thử path idle. **Flow label**, **traffic class** và **ECN mark** hướng dẫn xử lý; **tail drop** và **queue occupancy** cho thấy áp lực. **Loss recovery** phục hồi data mất, **path validation** thử route khác, và **handshake retransmission** chịu mất lúc khởi tạo. **Route asymmetry** làm chẩn đoán khó, **network namespace** cô lập path, còn **socket buffer** giữ data. **Congestion signal** và **link utilization** định hình **fair-share rate**; **reordering buffer** khôi phục thứ tự, còn **acknowledgment delay** ảnh hưởng timing.
