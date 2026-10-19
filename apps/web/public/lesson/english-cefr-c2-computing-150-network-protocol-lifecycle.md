# C2 Vocabulary — Network protocol lifecycle

This lesson follows a network request from transport setup through naming, secure negotiation, HTTP behavior, and modern multiplexed delivery.

Flow: **socket option → TCP handshake → sequence number → acknowledgment number → send window → round trip time → head of line blocking → stream identifier → DNS resolver → recursive query → authoritative server → negative caching → DNSSEC chain → OCSP response → SNI extension → ALPN negotiation → HTTP semantics → cache validator → WebSocket upgrade → QUIC connection**.

## 1. socket option /ˈsɒkɪt ˈɒpʃən/
**Part of speech:** noun
**Core meaning (English):** a configurable setting that changes how a network socket buffers, routes, times, or handles connections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** setting thay đổi buffer, route, timeout hoặc cách socket xử lý connection.
**Grammar & collocations:** `socket-option flag` — flag; `set a reuse option` — đặt.
**Examples:** `The server enabled a socket option that allowed rapid rebinding after a restart.` → Server bật option cho phép bind lại nhanh sau restart.
**Liên kết tiếng Hàn:** `소켓 옵션`.

## 2. TCP handshake /ˌtiː siː ˈpiː ˈhændʃeɪk/
**Part of speech:** noun
**Core meaning (English):** the exchange that establishes sequence state and confirms a reliable TCP connection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi trao đổi tạo state sequence và xác nhận TCP connection tin cậy.
**Grammar & collocations:** `TCP-handshake packet` — packet; `complete the handshake` — hoàn tất.
**Examples:** `The TCP handshake completed before the client sent the application request.` → Handshake xong trước khi client gửi request.
**Liên kết tiếng Hàn:** `TCP 핸드셰이크`.

## 3. sequence number /ˈsiːkwəns ˈnʌmbər/
**Part of speech:** noun
**Core meaning (English):** a number identifying the position of bytes or data units in an ordered transport stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số xác định vị trí byte/data unit trong stream có thứ tự.
**Grammar & collocations:** `sequence-number space` — không gian; `advance a sequence number` — tăng.
**Examples:** `The receiver used the sequence number to place the segment in the correct order.` → Receiver dùng số để xếp segment đúng thứ tự.
**Liên kết tiếng Hàn:** `시퀀스 번호`.

## 4. acknowledgment number /əkˈnɒlɪdʒmənt ˈnʌmbər/
**Part of speech:** noun
**Core meaning (English):** a transport-layer value indicating the next byte or unit a receiver expects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị transport báo byte/data unit kế tiếp receiver mong đợi.
**Grammar & collocations:** `acknowledgment-number field` — field; `acknowledge received bytes` — xác nhận.
**Examples:** `The acknowledgment number advanced after the missing segment arrived.` → Số ack tăng sau khi segment thiếu tới.
**Liên kết tiếng Hàn:** `확인 응답 번호`.

## 5. send window /send ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the amount of unacknowledged data a sender may transmit before waiting for feedback.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng data chưa ack mà sender được gửi trước khi chờ feedback.
**Grammar & collocations:** `send-window limit` — giới hạn; `fill the sender window` — lấp.
**Examples:** `The send window shrank when the receiver advertised less available capacity.` → Window giảm khi receiver báo capacity thấp.
**Liên kết tiếng Hàn:** `송신 창`.

## 6. round trip time /ˌraʊnd ˈtrɪp taɪm/
**Part of speech:** noun
**Core meaning (English):** the elapsed time for a message to reach a peer and for a response or acknowledgment to return.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian message tới peer rồi response/ack quay về.
**Grammar & collocations:** `round-trip-time estimate` — ước lượng; `measure network latency` — đo.
**Examples:** `The client increased its request timeout after the round trip time rose across the region.` → Client tăng timeout khi RTT tăng.
**Liên kết tiếng Hàn:** `왕복 시간`.

## 7. head of line blocking /hed əv laɪn ˈblɒkɪŋ/
**Part of speech:** noun
**Core meaning (English):** a delay in which one missing or slow item prevents later independent items from being delivered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một item thiếu/chậm chặn các item sau dù chúng độc lập.
**Grammar & collocations:** `head-of-line-blocking delay` — delay; `avoid serialized delivery` — tránh.
**Examples:** `Multiplexed streams reduced head of line blocking between the image and metadata requests.` → Stream multiplex giảm việc image chặn metadata.
**Liên kết tiếng Hàn:** `선두 차단`.

## 8. stream identifier /striːm aɪˈdentəfaɪər/
**Part of speech:** noun
**Core meaning (English):** a value that distinguishes one independent logical stream within a multiplexed connection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị phân biệt stream logic độc lập trong connection multiplex.
**Grammar & collocations:** `stream-identifier field` — field; `route a frame to a stream` — định tuyến.
**Examples:** `The stream identifier let the peer deliver the response to the correct request.` → Identifier giúp peer đưa response đúng request.
**Liên kết tiếng Hàn:** `스트림 식별자`.

## 9. DNS resolver /ˌdiː en ˈes rɪˈzɒlvər/
**Part of speech:** noun
**Core meaning (English):** software that obtains DNS answers for a client by consulting caches or other name servers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần mềm lấy DNS answer cho client qua cache hoặc name server khác.
**Grammar & collocations:** `DNS-resolver cache` — cache; `resolve a service name` — phân giải.
**Examples:** `The DNS resolver returned the service address from its local cache.` → Resolver trả địa chỉ service từ cache local.
**Liên kết tiếng Hàn:** `DNS 확인자`.

## 10. recursive query /rɪˈkɜːrsɪv ˈkwɪəri/
**Part of speech:** noun
**Core meaning (English):** a DNS request asking one server to obtain the final answer on the client's behalf.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request DNS nhờ một server tự tìm answer cuối cùng thay client.
**Grammar & collocations:** `recursive-query flag` — flag; `forward a recursive query` — chuyển.
**Examples:** `The stub resolver sent a recursive query to the network's caching resolver.` → Stub gửi query recursive tới resolver cache.
**Liên kết tiếng Hàn:** `재귀 질의`.

## 11. authoritative server /əˈθɔːrəteɪtɪv ˈsɜːrvər/
**Part of speech:** noun
**Core meaning (English):** a DNS server that publishes the official records for a domain or zone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** DNS server công bố record chính thức cho domain/zone.
**Grammar & collocations:** `authoritative-server response` — response; `delegate a zone` — ủy quyền.
**Examples:** `The resolver contacted the authoritative server after its cached record expired.` → Resolver hỏi server authoritative sau khi cache hết hạn.
**Liên kết tiếng Hàn:** `권한 있는 서버`.

## 12. negative caching /ˈneɡətɪv ˈkæʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** temporarily storing a DNS response that says a name or record does not exist.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạm lưu DNS answer báo name/record không tồn tại.
**Grammar & collocations:** `negative-caching TTL` — TTL; `cache an NXDOMAIN response` — lưu.
**Examples:** `Negative caching delayed recognition of the newly created hostname.` → Cache âm làm hostname mới nhận chậm.
**Liên kết tiếng Hàn:** `부정적 캐싱`.

## 13. DNSSEC chain /ˌdiː en es ˈsek tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** a linked set of DNS signatures and keys that lets a resolver validate the authenticity of DNS data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi signature/key DNS giúp resolver xác thực data DNS.
**Grammar & collocations:** `DNSSEC-chain validation` — validation; `verify a signed record` — xác minh.
**Examples:** `The resolver rejected the answer because the DNSSEC chain could not be validated.` → Resolver từ chối vì chain không validate được.
**Liên kết tiếng Hàn:** `DNSSEC 체인`.

## 14. OCSP response /ˌoʊ siː es ˈpiː rɪˈspɒns/
**Part of speech:** noun
**Core meaning (English):** a certificate-status answer indicating whether a specific certificate is valid, revoked, or unknown.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** answer trạng thái certificate: hợp lệ, revoked hoặc unknown.
**Grammar & collocations:** `OCSP-response stapling` — stapling; `check certificate status` — kiểm tra.
**Examples:** `The client accepted the certificate after receiving a fresh OCSP response.` → Client chấp nhận certificate sau response mới.
**Liên kết tiếng Hàn:** `OCSP 응답`.

## 15. SNI extension /ˌes en ˈaɪ ɪkˈstenʃən/
**Part of speech:** noun
**Core meaning (English):** a TLS handshake field naming the hostname for which a client wants a certificate and secure connection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** field TLS handshake nêu hostname client muốn certificate/connection.
**Grammar & collocations:** `SNI-extension value` — value; `select a virtual host` — chọn.
**Examples:** `The SNI extension allowed one address to serve certificates for several hostnames.` → SNI cho một address phục vụ nhiều hostname.
**Liên kết tiếng Hàn:** `SNI 확장`.

## 16. ALPN negotiation /ˌeɪ el piː ˈen nɪˌɡoʊʃiˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the TLS exchange in which peers select the application protocol they will speak.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trao đổi TLS để peer chọn application protocol chung.
**Grammar & collocations:** `ALPN-negotiation result` — kết quả; `select HTTP/2` — chọn.
**Examples:** `ALPN negotiation selected HTTP/2 before the encrypted request began.` → Negotiation chọn HTTP/2 trước request mã hóa.
**Liên kết tiếng Hàn:** `ALPN 협상`.

## 17. HTTP semantics /ˌeɪtʃ tiː tiː piː sɪˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** the rules defining what HTTP methods, status codes, representations, and headers mean.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule về nghĩa của method, status, representation và header HTTP.
**Grammar & collocations:** `HTTP-semantics rule` — rule; `interpret a response status` — diễn giải.
**Examples:** `The client followed HTTP semantics by not retrying a non-idempotent request automatically.` → Client theo semantics và không tự retry request không idempotent.
**Liên kết tiếng Hàn:** `HTTP 의미론`.

## 18. cache validator /kæʃ ˈvælədeɪtər/
**Part of speech:** noun
**Core meaning (English):** metadata that lets a client ask whether its stored representation is still current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata cho client hỏi representation đã lưu còn mới không.
**Grammar & collocations:** `cache-validator header` — header; `revalidate a stored response` — xác nhận lại.
**Examples:** `The cache validator let the server return not modified instead of the full document.` → Validator giúp server trả not modified thay toàn document.
**Liên kết tiếng Hàn:** `캐시 검증자`.

## 19. WebSocket upgrade /ˈwebsɒkɪt ʌpˈɡreɪd/
**Part of speech:** noun
**Core meaning (English):** an HTTP exchange that changes a request connection into a persistent bidirectional WebSocket channel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** exchange HTTP đổi connection thành channel WebSocket hai chiều lâu dài.
**Grammar & collocations:** `WebSocket-upgrade request` — request; `accept a protocol switch` — chấp nhận.
**Examples:** `The server completed the WebSocket upgrade before sending live price updates.` → Server upgrade xong trước khi gửi giá live.
**Liên kết tiếng Hàn:** `WebSocket 업그레이드`.

## 20. QUIC connection /kwɪk kəˈnekʃən/
**Part of speech:** noun
**Core meaning (English):** an encrypted transport connection that combines streams, loss recovery, and connection migration over UDP.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** connection transport mã hóa gộp stream, recovery và migration trên UDP.
**Grammar & collocations:** `QUIC-connection ID` — ID; `migrate a connection` — chuyển.
**Examples:** `The QUIC connection survived a network change because its identity was not tied to one address.` → Connection QUIC sống qua đổi mạng vì identity không buộc một address.
**Liên kết tiếng Hàn:** `QUIC 연결`.

## Review in context

A **socket option** shapes transport behavior, and a **TCP handshake** establishes state with a **sequence number** and **acknowledgment number**. The **send window** and **round trip time** govern throughput, while **head of line blocking** can delay multiplexed work identified by a **stream identifier**. A **DNS resolver** sends a **recursive query** to an **authoritative server**; **negative caching** stores absence, and a **DNSSEC chain** validates answers. An **OCSP response** reports certificate status; an **SNI extension** names the host, and **ALPN negotiation** chooses the protocol. **HTTP semantics** govern behavior, a **cache validator** rechecks stored data, a **WebSocket upgrade** creates a persistent channel, and a **QUIC connection** carries encrypted streams across network changes.

**Bản dịch tiếng Việt:** **Socket option** định hình transport, còn **TCP handshake** tạo state với **sequence number** và **acknowledgment number**. **Send window** và **round trip time** điều khiển throughput, còn **head of line blocking** có thể làm chậm việc multiplex được nhận diện bằng **stream identifier**. **DNS resolver** gửi **recursive query** tới **authoritative server**; **negative caching** lưu việc không tồn tại, còn **DNSSEC chain** xác thực answer. **OCSP response** báo trạng thái certificate; **SNI extension** nêu host, còn **ALPN negotiation** chọn protocol. **HTTP semantics** điều khiển behavior, **cache validator** kiểm tra lại data đã lưu, **WebSocket upgrade** tạo channel lâu dài, còn **QUIC connection** mang stream mã hóa qua thay đổi mạng.
