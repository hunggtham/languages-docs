# C2 Vocabulary — Network transport and congestion control

This lesson follows transport-layer communication from round-trip behavior and windowing through retransmission, congestion signaling, queue management, and modern transport algorithms.

Flow: **transport protocol → round-trip time → bandwidth-delay product → congestion window → receive window → slow start → congestion avoidance → additive increase multiplicative decrease → retransmission timeout → fast retransmit → duplicate acknowledgment → selective acknowledgment → packet reordering → explicit congestion notification → active queue management → bufferbloat → flow control → CUBIC → BBR → QUIC**.

## 1. transport protocol /ˈtrænspɔrt ˈproʊtəkɔl/
**Part of speech:** noun
**Core meaning (English):** a communication protocol that manages end-to-end data delivery between applications, including reliability, ordering, flow, or congestion behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giao thức tầng transport; hình dung IP đưa packet từ máy này sang máy khác, còn transport protocol quản lý cách application trao đổi dữ liệu đầu-cuối.
**Grammar & collocations:** `reliable transport protocol` — giao thức transport tin cậy; `transport-layer protocol` — giao thức tầng transport; `end-to-end transport` — truyền dữ liệu đầu-cuối.
**Examples:** `The application chose a transport protocol based on its requirements for reliability, latency, and connection setup.` → Application chọn transport protocol dựa trên yêu cầu về reliability, latency và quá trình thiết lập kết nối.
**Liên kết tiếng Hàn:** `전송 계층 프로토콜`.

## 2. round-trip time /raʊnd trɪp taɪm/
**Part of speech:** noun
**Core meaning (English):** the elapsed time for a signal or packet to travel from sender to receiver and for a corresponding response or acknowledgment to return.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian khứ hồi; hình dung gửi một packet đi và chờ tín hiệu quay lại — tổng thời gian đó là RTT.
**Grammar & collocations:** `RTT estimate` — ước lượng RTT; `minimum RTT` — RTT tối thiểu; `round-trip delay` — độ trễ khứ hồi.
**Examples:** `A long round-trip time slows feedback-based protocols because the sender learns about network conditions later.` → RTT dài làm các protocol dựa vào feedback phản ứng chậm hơn vì sender biết tình trạng network muộn hơn.
**Liên kết tiếng Hàn:** `왕복 시간`, `RTT`.

## 3. bandwidth-delay product /ˈbændwɪdθ dɪˈleɪ ˈprɑdəkt/
**Part of speech:** noun
**Core meaning (English):** the amount of data that can be in flight on a path, calculated approximately as available bandwidth multiplied by round-trip delay.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tích bandwidth × delay; hình dung một “ống mạng” dài và rộng có thể chứa bao nhiêu data đang bay trên đường trước khi acknowledgment quay lại.
**Grammar & collocations:** `path bandwidth-delay product` — BDP của đường truyền; `fill the pipe` — tận dụng đầy đường truyền; `in-flight data` — data đang truyền nhưng chưa được ACK.
**Examples:** `On a high-bandwidth satellite link, the bandwidth-delay product can be large even when packet loss is low.` → Trên link vệ tinh bandwidth cao, BDP có thể rất lớn dù packet loss thấp.
**Liên kết tiếng Hàn:** `대역폭-지연 곱`, `BDP`.

## 4. congestion window /kənˈdʒɛstʃən ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a sender-side limit on how much unacknowledged data may be in flight, adjusted according to perceived network congestion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cửa sổ congestion; hình dung sender tự đặt giới hạn số data được phép “thả vào mạng” trước khi nhận ACK, rồi tăng/giảm theo tín hiệu congestion.
**Grammar & collocations:** `congestion-window growth` — tăng congestion window; `reduce cwnd` — giảm cwnd; `window-limited sender` — sender bị giới hạn bởi window.
**Examples:** `Packet loss caused the sender to reduce its congestion window and transmit more cautiously.` → Packet loss khiến sender giảm congestion window và truyền thận trọng hơn.
**Liên kết tiếng Hàn:** `혼잡 윈도우`, `cwnd`.

## 5. receive window /rɪˈsiːv ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the receiver-advertised amount of additional data it can accept without overflowing its receive buffer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cửa sổ nhận; hình dung receiver báo cho sender còn bao nhiêu “chỗ trống” trong buffer để sender không gửi quá nhanh.
**Grammar & collocations:** `advertised receive window` — receive window được quảng bá; `receive-buffer capacity` — dung lượng buffer nhận; `window scaling` — mở rộng kích thước window.
**Examples:** `A small receive window limited throughput even though the network itself was not congested.` → Receive window nhỏ giới hạn throughput dù network không bị congestion.
**Liên kết tiếng Hàn:** `수신 윈도우`, `rwnd`.

## 6. slow start /sloʊ stɑrt/
**Part of speech:** noun
**Core meaning (English):** a congestion-control phase in which a sender begins cautiously and increases its sending window rapidly as acknowledgments arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giai đoạn khởi đầu chậm nhưng tăng nhanh; hình dung sender chưa biết capacity của network nên bắt đầu nhỏ rồi mở rộng window theo ACK.
**Grammar & collocations:** `slow-start threshold` — ngưỡng slow start; `exit slow start` — thoát slow start; `initial congestion window` — congestion window ban đầu.
**Examples:** `Short transfers may finish while the connection is still in slow start.` → Các transfer ngắn có thể kết thúc khi connection vẫn còn ở giai đoạn slow start.
**Liên kết tiếng Hàn:** `슬로 스타트`.

## 7. congestion avoidance /kənˈdʒɛstʃən əˈvɔɪdəns/
**Part of speech:** noun
**Core meaning (English):** a phase or strategy that increases sending rate more cautiously after a connection approaches the estimated network capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tránh congestion; hình dung sau khi đã gần tìm ra giới hạn network, sender không tăng mạnh nữa mà thăm dò capacity cẩn thận hơn.
**Grammar & collocations:** `congestion-avoidance algorithm` — thuật toán tránh congestion; `enter congestion avoidance` — vào giai đoạn tránh congestion; `rate probing` — thăm dò tốc độ.
**Examples:** `During congestion avoidance, the sender probes for extra capacity without growing as aggressively as in slow start.` → Trong congestion avoidance, sender thăm dò capacity bổ sung nhưng không tăng mạnh như slow start.
**Liên kết tiếng Hàn:** `혼잡 회피`.

## 8. additive increase multiplicative decrease /ˈædətɪv ɪnˈkriːs ˌmʌltəpləˈkeɪtɪv dɪˈkriːs/
**Part of speech:** noun
**Core meaning (English):** a control principle that increases sending capacity gradually when conditions are good and reduces it proportionally when congestion is detected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tăng cộng, giảm nhân; hình dung mỗi vòng tăng từng chút, nhưng khi congestion xuất hiện thì giảm mạnh theo tỷ lệ để nhanh chóng hạ tải.
**Grammar & collocations:** `AIMD behavior` — hành vi AIMD; `additive increase` — tăng tuyến tính; `multiplicative decrease` — giảm theo tỷ lệ.
**Examples:** `Additive increase multiplicative decrease balances cautious probing with a strong reaction to congestion.` → AIMD cân bằng việc thăm dò capacity từ từ với phản ứng giảm mạnh khi có congestion.
**Liên kết tiếng Hàn:** `가산 증가·승산 감소`, `AIMD`.

## 9. retransmission timeout /ˌriːtrænzˈmɪʃən ˈtaɪmaʊt/
**Part of speech:** noun
**Core meaning (English):** a timer expiration indicating that an acknowledgment has not arrived soon enough, causing data to be retransmitted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timeout để truyền lại; hình dung sender chờ ACK đến một giới hạn rồi kết luận packet có thể đã mất và gửi lại.
**Grammar & collocations:** `RTO estimate` — ước lượng timeout; `timeout backoff` — tăng timeout sau thất bại; `retransmission timer` — timer retransmission.
**Examples:** `An excessively short retransmission timeout can trigger unnecessary retransmissions during temporary delay spikes.` → RTO quá ngắn có thể gây retransmit không cần thiết khi delay chỉ tạm thời tăng.
**Liên kết tiếng Hàn:** `재전송 타임아웃`, `RTO`.

## 10. fast retransmit /fæst ˌriːtrænzˈmɪt/
**Part of speech:** noun
**Core meaning (English):** retransmission triggered by acknowledgment patterns indicating likely loss before the normal retransmission timer expires.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** retransmit sớm; hình dung không cần chờ timeout, sender nhìn các ACK lặp để đoán packet bị mất và gửi lại ngay.
**Grammar & collocations:** `trigger fast retransmit` — kích hoạt fast retransmit; `loss recovery` — phục hồi sau mất packet; `duplicate-ACK threshold` — ngưỡng ACK lặp.
**Examples:** `Fast retransmit recovered the missing segment before the retransmission timeout expired.` → Fast retransmit phục hồi segment bị mất trước khi RTO hết hạn.
**Liên kết tiếng Hàn:** `빠른 재전송`, `패스트 리트랜스밋`.

## 11. duplicate acknowledgment /ˈduːpləkət ækˈnɑlɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** an acknowledgment that repeats the same acknowledgment number, often indicating that later data arrived while an earlier segment is missing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ACK trùng lặp; hình dung receiver cứ xác nhận cùng một vị trí vì đang thiếu một segment ở giữa dù segment phía sau đã tới.
**Grammar & collocations:** `duplicate ACK` — ACK lặp; `three duplicate acknowledgments` — ba ACK lặp; `ACK sequence` — chuỗi ACK.
**Examples:** `Several duplicate acknowledgments suggested that one segment had been lost while later segments continued to arrive.` → Nhiều duplicate ACK cho thấy một segment bị mất trong khi các segment sau vẫn tới.
**Liên kết tiếng Hàn:** `중복 확인 응답`, `중복 ACK`.

## 12. selective acknowledgment /səˈlɛktɪv ækˈnɑlɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** an acknowledgment mechanism that tells the sender exactly which noncontiguous blocks of data have already been received.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ACK chọn lọc; hình dung receiver không chỉ nói “tôi đang thiếu từ đây” mà còn nói rõ những block phía sau nào đã nhận được.
**Grammar & collocations:** `SACK block` — block SACK; `SACK option` — option selective acknowledgment; `loss recovery with SACK` — recovery dùng SACK.
**Examples:** `Selective acknowledgment prevented the sender from retransmitting segments that had already arrived successfully.` → SACK giúp sender không retransmit những segment đã tới thành công.
**Liên kết tiếng Hàn:** `선택적 확인 응답`, `SACK`.

## 13. packet reordering /ˈpækɪt riːˈɔrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** arrival of packets in a different order from the order in which they were transmitted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** packet đến sai thứ tự; hình dung packet A được gửi trước B nhưng do route hoặc queue khác nhau, B lại đến trước A.
**Grammar & collocations:** `reordering tolerance` — khả năng chịu reordering; `out-of-order packet` — packet đến không đúng thứ tự; `reordering event` — sự kiện reordering.
**Examples:** `Heavy packet reordering can resemble loss and accidentally trigger congestion-control reactions.` → Packet reordering mạnh có thể trông giống packet loss và vô tình kích hoạt phản ứng congestion control.
**Liên kết tiếng Hàn:** `패킷 재정렬`, `패킷 순서 뒤바뀜`.

## 14. explicit congestion notification /ɪkˈsplɪsɪt kənˈdʒɛstʃən ˌnoʊtəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a mechanism that allows routers to mark packets to signal congestion before queues overflow and packets must be dropped.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thông báo congestion rõ ràng; hình dung router có thể “đánh dấu đang nghẽn” lên packet thay vì đợi queue đầy rồi drop packet mới báo động.
**Grammar & collocations:** `ECN marking` — đánh dấu ECN; `ECN-capable transport` — transport hỗ trợ ECN; `congestion signal` — tín hiệu congestion.
**Examples:** `Explicit congestion notification let the sender reduce its rate without waiting for packet loss.` → ECN cho phép sender giảm rate mà không cần đợi packet loss xảy ra.
**Liên kết tiếng Hàn:** `명시적 혼잡 알림`, `ECN`.

## 15. active queue management /ˈæktɪv kjuː ˈmænɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** router or queue logic that intentionally marks or drops packets before a buffer becomes completely full in order to control congestion and delay.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quản lý queue chủ động; hình dung router không chờ buffer đầy mới hành động mà báo congestion sớm để tránh queue phình quá lớn.
**Grammar & collocations:** `AQM algorithm` — thuật toán AQM; `early marking` — đánh dấu sớm; `queue-control policy` — chính sách quản lý queue.
**Examples:** `Active queue management kept latency lower by signaling congestion before the buffer filled completely.` → AQM giữ latency thấp hơn bằng cách báo congestion trước khi buffer đầy hoàn toàn.
**Liên kết tiếng Hàn:** `능동 큐 관리`, `AQM`.

## 16. bufferbloat /ˈbʌfərˌbloʊt/
**Part of speech:** noun
**Core meaning (English):** excessive network latency caused by overly large buffers that hold too many packets during congestion instead of dropping or marking them promptly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “phình buffer”; hình dung packet không mất nhưng bị xếp hàng quá lâu trong buffer khổng lồ, khiến ping tăng mạnh khi link bận.
**Grammar & collocations:** `bufferbloat problem` — vấn đề bufferbloat; `bloated queue` — queue phình lớn; `latency under load` — latency khi có tải.
**Examples:** `The connection had plenty of bandwidth, but bufferbloat made interactive traffic feel sluggish during uploads.` → Connection có bandwidth cao nhưng bufferbloat khiến traffic tương tác cảm giác chậm khi upload.
**Liên kết tiếng Hàn:** `버퍼블로트`, `과도한 버퍼 지연`.

## 17. flow control /floʊ kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a mechanism that prevents a sender from transmitting data faster than the receiver can accept or process it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm soát tốc độ theo khả năng receiver; khác congestion control ở chỗ vấn đề nằm ở receiver chứ không phải capacity của network path.
**Grammar & collocations:** `receiver-side flow control` — flow control phía receiver; `flow-control window` — cửa sổ flow control; `back off the sender` — làm sender giảm tốc.
**Examples:** `Flow control prevented the fast sender from overflowing the receiver's application buffer.` → Flow control ngăn sender nhanh làm tràn application buffer của receiver.
**Liên kết tiếng Hàn:** `흐름 제어`.

## 18. CUBIC /ˈkjuːbɪk/
**Part of speech:** noun
**Core meaning (English):** a TCP congestion-control algorithm whose window growth follows a cubic function of time since the last congestion event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán congestion control CUBIC; hình dung window tăng theo một đường cong cubic để thăm dò bandwidth hiệu quả hơn trên network có bandwidth-delay product lớn.
**Grammar & collocations:** `CUBIC TCP` — TCP dùng CUBIC; `window-growth function` — hàm tăng window; `congestion epoch` — giai đoạn giữa các sự kiện congestion.
**Examples:** `CUBIC can scale more effectively than classic linear-growth algorithms on high-bandwidth paths.` → CUBIC có thể scale hiệu quả hơn thuật toán tăng tuyến tính cổ điển trên path bandwidth cao.
**Liên kết tiếng Hàn:** `큐빅 혼잡 제어`, `CUBIC`.

## 19. BBR /ˌbiː biː ˈɑr/
**Part of speech:** noun
**Core meaning (English):** a congestion-control approach that estimates bottleneck bandwidth and round-trip propagation time to control sending rate and in-flight data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** BBR; hình dung sender cố đo hai thứ cốt lõi — bottleneck bandwidth và RTT nền — rồi gửi vừa đủ để tận dụng path mà không làm queue phình quá mức.
**Grammar & collocations:** `BBR congestion control` — congestion control BBR; `bottleneck-bandwidth estimate` — ước lượng bandwidth nút thắt; `propagation RTT` — RTT do truyền dẫn nền.
**Examples:** `BBR aims to operate near the path's delivery capacity without relying primarily on packet loss as the congestion signal.` → BBR hướng tới hoạt động gần capacity của path mà không dựa chủ yếu vào packet loss để phát hiện congestion.
**Liên kết tiếng Hàn:** `BBR 혼잡 제어`.

## 20. QUIC /kwɪk/
**Part of speech:** noun
**Core meaning (English):** a secure multiplexed transport protocol built over UDP that integrates connection establishment, encryption, stream management, and modern congestion-control behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** QUIC; hình dung transport hiện đại chạy trên UDP nhưng tự cung cấp reliability, encryption và nhiều stream độc lập để giảm một số hạn chế của TCP.
**Grammar & collocations:** `QUIC connection` — kết nối QUIC; `QUIC stream` — stream QUIC; `connection migration` — chuyển connection giữa network path.
**Examples:** `QUIC can keep independent streams from blocking one another when a packet carrying data for only one stream is lost.` → QUIC có thể giúp các stream độc lập không phải chờ nhau khi packet chứa dữ liệu của chỉ một stream bị mất.
**Liên kết tiếng Hàn:** `퀵 프로토콜`, `QUIC`.

## Review in context

A **transport protocol** must adapt to the network path it encounters. **Round-trip time** determines how quickly feedback returns, while the **bandwidth-delay product** approximates how much data may need to remain in flight to use the path efficiently. TCP-style senders are constrained by both a **congestion window** and a **receive window**. They often begin in **slow start**, then move into **congestion avoidance**, historically guided by principles such as **additive increase multiplicative decrease**. When packets appear lost, recovery may wait for a **retransmission timeout** or use **fast retransmit** after repeated **duplicate acknowledgments**; **selective acknowledgment** provides more precise information about which ranges arrived. **Packet reordering** complicates this inference. Networks can signal congestion before loss through **explicit congestion notification**, and routers can use **active queue management** to prevent **bufferbloat**. Meanwhile, **flow control** protects the receiver rather than the path itself. Modern congestion-control algorithms such as **CUBIC** and **BBR** explore network capacity in different ways, while **QUIC** combines modern transport behavior with encryption and multiplexed streams above UDP.

**Bản dịch tiếng Việt:** Một **transport protocol** phải thích nghi với network path thực tế. **Round-trip time** quyết định feedback quay về nhanh đến đâu, còn **bandwidth-delay product** xấp xỉ lượng data cần nằm trên đường để tận dụng path hiệu quả. Sender kiểu TCP bị giới hạn bởi cả **congestion window** và **receive window**. Nó thường bắt đầu bằng **slow start**, sau đó chuyển sang **congestion avoidance**, lịch sử thường dựa trên nguyên tắc như **additive increase multiplicative decrease**. Khi packet có vẻ bị mất, recovery có thể chờ **retransmission timeout** hoặc dùng **fast retransmit** sau nhiều **duplicate acknowledgment**; **selective acknowledgment** cung cấp thông tin chính xác hơn về những vùng data đã tới. **Packet reordering** làm việc suy luận này phức tạp hơn. Network có thể báo congestion trước packet loss bằng **explicit congestion notification**, còn router có thể dùng **active queue management** để tránh **bufferbloat**. Trong khi đó, **flow control** bảo vệ receiver chứ không trực tiếp bảo vệ network path. Các thuật toán congestion hiện đại như **CUBIC** và **BBR** thăm dò capacity theo những cách khác nhau, còn **QUIC** kết hợp hành vi transport hiện đại với encryption và multiplexed stream trên UDP.
