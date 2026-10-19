# C2 Vocabulary — Network transport and congestion

This lesson follows a packet from transport control and loss recovery through queueing, routing, and host-network optimization.

Flow: **slow start threshold → packet pacing → tail loss probe → flow control window → connection migration → multipath transport → network calculus → queue discipline → fair queuing → ECMP hashing → route convergence → anycast steering → zero-copy networking → busy polling → receive-side scaling → path MTU discovery → jitter buffer → ingress shaping → egress policing → packet coalescing**.

## 1. slow start threshold /sloʊ stɑːrt ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** a congestion-control boundary at which exponential sending growth gives way to a more cautious increase.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng chuyển từ tăng gửi cấp số sang tăng thận trọng.
**Grammar & collocations:** `slow-start-threshold update` — update; `halve a growth boundary` — giảm.
**Examples:** `The sender lowered its slow start threshold after detecting repeated loss.` → Sender hạ threshold sau loss.
**Liên kết tiếng Hàn:** `느린 시작 임계값`.

## 2. packet pacing /ˈpækɪt ˈpeɪsɪŋ/
**Part of speech:** noun
**Core meaning (English):** spacing packet transmissions over time to avoid a sudden burst into a bottleneck.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giãn packet theo thời gian để tránh burst vào bottleneck.
**Grammar & collocations:** `packet-pacing timer` — timer; `spread a transmission burst` — giãn.
**Examples:** `Packet pacing kept the sender from filling the switch queue in one burst.` → Pacing tránh làm đầy queue.
**Liên kết tiếng Hàn:** `패킷 페이싱`.

## 3. tail loss probe /teɪl lɒs proʊb/
**Part of speech:** noun
**Core meaning (English):** a small retransmission probe sent when the final packets of a response may have been lost.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** retransmission nhỏ khi packet cuối response có thể mất.
**Grammar & collocations:** `tail-loss-probe timer` — timer; `retransmit a final segment` — gửi lại.
**Examples:** `The tail loss probe recovered the last segment before the longer timeout expired.` → Probe khôi phục segment cuối.
**Liên kết tiếng Hàn:** `꼬리 손실 프로브`.

## 4. flow control window /floʊ kənˈtroʊl ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the amount of unacknowledged data a receiver is currently willing to accept.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng data chưa acknowledge mà receiver chấp nhận.
**Grammar & collocations:** `flow-control-window update` — update; `advertise available space` — báo.
**Examples:** `The receiver reduced its flow control window when the application stopped reading.` → Receiver giảm window khi app dừng đọc.
**Liên kết tiếng Hàn:** `흐름 제어 창`.

## 5. connection migration /kəˈnekʃən maɪˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** moving an active transport connection to a new network address without restarting the session.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển connection đang chạy sang address mới mà không restart.
**Grammar & collocations:** `connection-migration token` — token; `validate a new path` — xác thực.
**Examples:** `Connection migration kept the video call alive when the phone changed networks.` → Migration giữ cuộc gọi khi đổi mạng.
**Liên kết tiếng Hàn:** `연결 마이그레이션`.

## 6. multipath transport /ˈmʌltɪpɑːθ ˈtrænspɔːrt/
**Part of speech:** noun
**Core meaning (English):** transport that uses multiple network paths simultaneously or as alternatives for one logical connection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transport dùng nhiều path cho một connection logic.
**Grammar & collocations:** `multipath-transport scheduler` — scheduler; `stripe data across paths` — rải.
**Examples:** `Multipath transport shifted traffic to the cellular link when Wi-Fi degraded.` → Transport chuyển sang cellular.
**Liên kết tiếng Hàn:** `다중 경로 전송`.

## 7. network calculus /ˈnetwɜːrk ˈkælkjələs/
**Part of speech:** noun
**Core meaning (English):** a mathematical framework for bounding delay and backlog in networks through arrival and service curves.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** framework toán bound delay/backlog bằng curve arrival và service.
**Grammar & collocations:** `network-calculus bound` — bound; `compose service curves` — ghép.
**Examples:** `Network calculus gave a worst-case delay bound for the industrial control path.` → Calculus cho bound delay xấu nhất.
**Liên kết tiếng Hàn:** `네트워크 미적분`.

## 8. queue discipline /kjuː ˈdɪsəplɪn/
**Part of speech:** noun
**Core meaning (English):** the rule determining how packets are ordered, delayed, or dropped in a queue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định thứ tự, delay và drop packet trong queue.
**Grammar & collocations:** `queue-discipline choice` — choice; `prioritize latency-sensitive traffic` — ưu tiên.
**Examples:** `The queue discipline protected voice packets from a large background transfer.` → Discipline bảo vệ voice.
**Liên kết tiếng Hàn:** `큐 규율`.

## 9. fair queuing /fer ˈkjuːɪŋ/
**Part of speech:** noun
**Core meaning (English):** scheduling that approximates equal or weighted service among competing traffic flows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scheduling chia service công bằng hoặc theo trọng số giữa flow.
**Grammar & collocations:** `fair-queuing weight` — weight; `share a bottleneck` — chia sẻ.
**Examples:** `Fair queuing stopped one bulk flow from monopolizing the uplink.` → Queuing ngăn flow lớn độc chiếm.
**Liên kết tiếng Hàn:** `공정 큐잉`.

## 10. ECMP hashing /ˌiː siː empiː ˈhæʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** hashing flow identifiers to distribute traffic across equal-cost paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hash ID flow để rải traffic trên path cùng cost.
**Grammar & collocations:** `ECMP-hashing seed` — seed; `select an equal-cost route` — chọn.
**Examples:** `ECMP hashing kept packets from one flow on the same path and avoided reordering.` → Hashing giữ flow cùng path.
**Liên kết tiếng Hàn:** `ECMP 해싱`.

## 11. route convergence /ruːt kənˈvɜːrdʒəns/
**Part of speech:** noun
**Core meaning (English):** the process by which routers reach a consistent view after a topology change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** router thống nhất view sau khi topology đổi.
**Grammar & collocations:** `route-convergence delay` — delay; `propagate a new prefix` — lan truyền.
**Examples:** `Route convergence took longer than the application's retry budget.` → Convergence lâu hơn retry budget.
**Liên kết tiếng Hàn:** `라우팅 수렴`.

## 12. anycast steering /ˈeniˌkæst ˈstɪərɪŋ/
**Part of speech:** noun
**Core meaning (English):** directing clients to one of several locations advertising the same network address.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hướng client tới một location trong nhiều nơi cùng quảng bá address.
**Grammar & collocations:** `anycast-steering policy` — policy; `route a client regionally` — định tuyến.
**Examples:** `Anycast steering sent the request to the nearest healthy edge location.` → Steering đưa request tới edge gần nhất.
**Liên kết tiếng Hàn:** `애니캐스트 조정`.

## 13. zero-copy networking /ˈzɪəroʊ ˈkɒpi ˈnetwɜːrkɪŋ/
**Part of speech:** noun
**Core meaning (English):** moving network data between device and application with minimal intermediate memory copying.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền data network với rất ít lần copy memory trung gian.
**Grammar & collocations:** `zero-copy-networking buffer` — buffer; `map a receive region` — ánh xạ.
**Examples:** `Zero-copy networking reduced CPU work for the high-throughput packet reader.` → Networking giảm CPU.
**Liên kết tiếng Hàn:** `제로 카피 네트워킹`.

## 14. busy polling /ˈbɪzi ˈpoʊlɪŋ/
**Part of speech:** noun
**Core meaning (English):** repeatedly checking for packets instead of sleeping until an interrupt arrives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên tục kiểm packet thay vì ngủ chờ interrupt.
**Grammar & collocations:** `busy-polling budget` — budget; `trade CPU for latency` — đánh đổi.
**Examples:** `Busy polling lowered tail latency but consumed a dedicated core.` → Polling giảm tail latency nhưng tốn core.
**Liên kết tiếng Hàn:** `바쁜 폴링`.

## 15. receive-side scaling /rɪˈsiːv saɪd ˈskeɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** distributing packet-processing work across multiple CPU cores at the receiving host.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia việc xử lý packet cho nhiều core ở host nhận.
**Grammar & collocations:** `receive-side-scaling indirection table` — table; `spread interrupt load` — rải.
**Examples:** `Receive-side scaling prevented one CPU from becoming the network bottleneck.` → Scaling tránh một CPU nghẽn.
**Liên kết tiếng Hàn:** `수신 측 확장`.

## 16. path MTU discovery /pɑːθ em tiː ˈjuː dɪˈskʌvəri/
**Part of speech:** noun
**Core meaning (English):** determining the largest packet size that can cross a path without fragmentation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm kích thước packet lớn nhất đi qua path không fragment.
**Grammar & collocations:** `path-MTU-discovery probe` — probe; `avoid a fragmentation black hole` — tránh.
**Examples:** `Path MTU discovery selected a smaller payload after the tunnel was introduced.` → Discovery chọn payload nhỏ hơn.
**Liên kết tiếng Hàn:** `경로 MTU 발견`.

## 17. jitter buffer /ˈdʒɪtər ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** a buffer that absorbs variation in packet arrival times before media is played.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** buffer hấp thụ lệch thời gian packet trước khi phát media.
**Grammar & collocations:** `jitter-buffer depth` — depth; `smooth packet timing` — làm mượt.
**Examples:** `The jitter buffer concealed small timing variations in the voice stream.` → Buffer che lệch timing nhỏ.
**Liên kết tiếng Hàn:** `지터 버퍼`.

## 18. ingress shaping /ˈɪnɡres ˈʃeɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** regulating traffic entering a network or service so that it follows a defined rate or burst limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều tiết traffic đi vào theo rate hoặc burst limit.
**Grammar & collocations:** `ingress-shaping profile` — profile; `smooth an incoming burst` — làm phẳng.
**Examples:** `Ingress shaping protected the service from a sudden client fan-in.` → Shaping bảo vệ service khỏi burst.
**Liên kết tiếng Hàn:** `수신 트래픽 형성`.

## 19. egress policing /ˈeɡres pəˈliːsɪŋ/
**Part of speech:** noun
**Core meaning (English):** enforcing an outgoing traffic limit by marking, delaying, or dropping packets that exceed it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ép giới hạn traffic đi ra bằng mark, delay hoặc drop.
**Grammar & collocations:** `egress-policing rule` — rule; `drop an excess packet` — bỏ.
**Examples:** `Egress policing stopped a tenant from exceeding its contracted uplink rate.` → Policing ngăn tenant vượt rate.
**Liên kết tiếng Hàn:** `송신 트래픽 폴리싱`.

## 20. packet coalescing /ˈpækɪt koʊəˈlesɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining several packet notifications or small packets so the host processes them in one batch.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp notification hoặc packet nhỏ để host xử lý theo batch.
**Grammar & collocations:** `packet-coalescing threshold` — threshold; `batch receive notifications` — gom.
**Examples:** `Packet coalescing lowered interrupt overhead but added a small amount of latency.` → Coalescing giảm interrupt nhưng thêm latency.
**Liên kết tiếng Hàn:** `패킷 병합`.

## Review in context

The **slow start threshold**, **packet pacing**, **tail loss probe**, and **flow control window** regulate delivery. **Connection migration** and **multipath transport** preserve sessions, while **network calculus**, a **queue discipline**, and **fair queuing** bound contention. **ECMP hashing**, **route convergence**, and **anycast steering** shape paths; **zero-copy networking**, **busy polling**, and **receive-side scaling** optimize hosts. **Path MTU discovery**, a **jitter buffer**, **ingress shaping**, **egress policing**, and **packet coalescing** complete the data path.

**Bản dịch tiếng Việt:** **Slow start threshold**, **packet pacing**, **tail loss probe** và **flow control window** điều tiết truyền tải. **Connection migration** và **multipath transport** giữ session, còn **network calculus**, **queue discipline** và **fair queuing** giới hạn cạnh tranh. **ECMP hashing**, **route convergence** và **anycast steering** định hình path; **zero-copy networking**, **busy polling** và **receive-side scaling** tối ưu host. **Path MTU discovery**, **jitter buffer**, **ingress shaping**, **egress policing** và **packet coalescing** hoàn thiện data path.
