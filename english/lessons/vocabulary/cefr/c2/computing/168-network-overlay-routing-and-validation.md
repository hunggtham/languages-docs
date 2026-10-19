# C2 Vocabulary — Network overlays, routing, and validation

This lesson follows a packet from an overlay interface through encapsulation, inter-domain routing policy, and source validation.

Flow: **network overlay → underlay network → tunnel endpoint → encapsulation header → decapsulation → virtual network interface → bridge domain → route reflector → border gateway → prefix announcement → route withdrawal → AS path → local preference → MED attribute → community attribute → route leak → bogon prefix → ingress filtering → egress filtering → source validation**.

## 1. network overlay /ˈnetwɜːrk ˈoʊvərleɪ/
**Part of speech:** noun
**Core meaning (English):** a logical network built over another network so endpoints can communicate with an independent address and policy space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** network logic dựng trên network khác, có address và policy riêng.
**Grammar & collocations:** `network-overlay segment` — segment; `extend a tenant network` — mở rộng.
**Examples:** `The network overlay connected workloads across regions without exposing the underlay addresses.` → Overlay nối workload qua region mà không lộ address underlay.
**Liên kết tiếng Hàn:** `네트워크 오버레이`.

## 2. underlay network /ˈʌndərleɪ ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** the physical or routed network that carries packets for one or more logical overlays.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** network vật lý/routed mang packet cho overlay logic.
**Grammar & collocations:** `underlay-network path` — path; `measure physical reachability` — đo.
**Examples:** `The overlay remained healthy while an underlay network link was rerouted.` → Overlay vẫn khỏe khi link underlay route lại.
**Liên kết tiếng Hàn:** `언더레이 네트워크`.

## 3. tunnel endpoint /ˈtʌnəl ˈendpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a device or interface that adds or removes encapsulation at the edge of a network tunnel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device/interface thêm hoặc bỏ encapsulation ở đầu tunnel.
**Grammar & collocations:** `tunnel-endpoint address` — address; `terminate an encrypted tunnel` — kết thúc.
**Examples:** `The tunnel endpoint decapsulated the packet before sending it to the local service.` → Endpoint bỏ encapsulation trước gửi service local.
**Liên kết tiếng Hàn:** `터널 엔드포인트`.

## 4. encapsulation header /ɪnˌkæpsjəˈleɪʃən ˈhedər/
**Part of speech:** noun
**Core meaning (English):** an outer header added to carry an inner packet across a tunnel or overlay.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** header ngoài thêm để mang packet trong qua tunnel/overlay.
**Grammar & collocations:** `encapsulation-header field` — field; `wrap an inner packet` — bọc.
**Examples:** `The encapsulation header carried the overlay identifier through the shared fabric.` → Header mang overlay ID qua fabric chung.
**Liên kết tiếng Hàn:** `캡슐화 헤더`.

## 5. decapsulation /diːˌkæpsjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** removing an outer transport or tunnel header to recover the packet inside.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ header transport/tunnel ngoài để lấy packet bên trong.
**Grammar & collocations:** `decapsulation step` — step; `recover the inner payload` — khôi phục.
**Examples:** `Decapsulation restored the original destination before firewall inspection.` → Decapsulation khôi phục destination trước firewall.
**Liên kết tiếng Hàn:** `디캡슐화`.

## 6. virtual network interface /ˈvɜːrtʃuəl ˈnetwɜːrk ˈɪntərfeɪs/
**Part of speech:** noun
**Core meaning (English):** a software-created network interface that behaves like a device for a host or workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interface network tạo bằng software, hoạt động như device cho host/workload.
**Grammar & collocations:** `virtual-network-interface address` — address; `attach an interface to a namespace` — gắn.
**Examples:** `The runtime attached a virtual network interface to the isolated workload.` → Runtime gắn interface ảo vào workload cô lập.
**Liên kết tiếng Hàn:** `가상 네트워크 인터페이스`.

## 7. bridge domain /brɪdʒ dəˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** a layer-two forwarding scope in which interfaces share a broadcast or switching domain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phạm vi forwarding layer 2 nơi interface share broadcast/switching.
**Grammar & collocations:** `bridge-domain membership` — membership; `isolate a broadcast domain` — cô lập.
**Examples:** `The bridge domain separated test traffic from the production broadcast segment.` → Domain tách traffic test khỏi broadcast production.
**Liên kết tiếng Hàn:** `브리지 도메인`.

## 8. route reflector /ruːt rɪˈflektər/
**Part of speech:** noun
**Core meaning (English):** a routing device that redistributes learned routes so every peer need not connect directly to every other peer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device phân phối route học được để peer không cần nối full-mesh.
**Grammar & collocations:** `route-reflector cluster` — cluster; `reflect a learned prefix` — phản chiếu.
**Examples:** `The route reflector reduced the number of sessions required by the regional routers.` → Reflector giảm số session router vùng.
**Liên kết tiếng Hàn:** `라우트 리플렉터`.

## 9. border gateway /ˈbɔːrdər ˈɡeɪtweɪ/
**Part of speech:** noun
**Core meaning (English):** a gateway connecting one administrative network or routing domain to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gateway nối network/routing domain quản trị này với domain khác.
**Grammar & collocations:** `border-gateway session` — session; `exchange interdomain routes` — trao đổi.
**Examples:** `The border gateway advertised the service prefix to the partner network.` → Gateway quảng bá prefix service tới network đối tác.
**Liên kết tiếng Hàn:** `경계 게이트웨이`.

## 10. prefix announcement /ˈpriːfɪks əˈnaʊnsmənt/
**Part of speech:** noun
**Core meaning (English):** a routing message stating that a network prefix is reachable through a particular speaker or path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** message route báo prefix network reachable qua speaker/path cụ thể.
**Grammar & collocations:** `prefix-announcement filter` — filter; `advertise a reachable subnet` — quảng bá.
**Examples:** `The prefix announcement withdrew the old path before advertising the new region.` → Announcement rút path cũ trước quảng bá region mới.
**Liên kết tiếng Hàn:** `프리픽스 공지`.

## 11. route withdrawal /ruːt wɪðˈdrɔːəl/
**Part of speech:** noun
**Core meaning (English):** a routing message stating that a previously advertised path should no longer be used.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** message báo path từng quảng bá không nên dùng nữa.
**Grammar & collocations:** `route-withdrawal notice` — notice; `remove an unreachable prefix` — bỏ.
**Examples:** `The router sent a route withdrawal when the datacenter link failed.` → Router gửi withdrawal khi link datacenter fail.
**Liên kết tiếng Hàn:** `경로 철회`.

## 12. AS path /ˌeɪ ˈes pɑːθ/
**Part of speech:** noun
**Core meaning (English):** the ordered list of autonomous systems a route advertisement has traversed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách có thứ tự các autonomous system route đã đi qua.
**Grammar & collocations:** `AS-path length` — length; `prefer a shorter path` — ưu tiên.
**Examples:** `The router preferred the route with the shorter AS path to the service prefix.` → Router ưu tiên path AS ngắn hơn.
**Liên kết tiếng Hàn:** `AS 경로`.

## 13. local preference /ˈloʊkəl ˈprefərəns/
**Part of speech:** noun
**Core meaning (English):** a routing attribute used inside an administrative domain to rank preferred outbound paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** attribute nội bộ domain dùng xếp hạng path outbound ưu tiên.
**Grammar & collocations:** `local-preference value` — value; `prefer a private link` — ưu tiên.
**Examples:** `The operator raised local preference for the lower-cost private connection.` → Operator tăng preference cho link private rẻ.
**Liên kết tiếng Hàn:** `로컬 선호도`.

## 14. MED attribute /ˌem iː ˈdiː ˈætrɪbjuːt/
**Part of speech:** noun
**Core meaning (English):** a routing hint used to suggest which of several entry points into an external domain is preferred.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hint route gợi ý entry point nào vào domain ngoài được ưu tiên.
**Grammar & collocations:** `MED-attribute value` — value; `signal an ingress preference` — báo.
**Examples:** `The MED attribute suggested that traffic enter through the western link.` → Attribute gợi ý traffic vào qua link phía tây.
**Liên kết tiếng Hàn:** `MED 속성`.

## 15. community attribute /kəˈmjuːnəti ˈætrɪbjuːt/
**Part of speech:** noun
**Core meaning (English):** a routing label used to classify advertisements and apply shared policy to them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** label route phân loại announcement để áp policy chung.
**Grammar & collocations:** `community-attribute tag` — tag; `mark a route for export` — đánh dấu.
**Examples:** `The community attribute marked the prefix as internal-only.` → Attribute đánh dấu prefix chỉ nội bộ.
**Liên kết tiếng Hàn:** `커뮤니티 속성`.

## 16. route leak /ruːt liːk/
**Part of speech:** noun
**Core meaning (English):** an unintended propagation of routes into a domain or direction where they should not appear.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** route vô tình lan vào domain/direction không nên có.
**Grammar & collocations:** `route-leak incident` — incident; `filter external prefixes` — lọc.
**Examples:** `A route leak exposed private prefixes to the public transit provider.` → Leak lộ prefix private cho provider public.
**Liên kết tiếng Hàn:** `경로 누출`.

## 17. bogon prefix /ˈboʊɡɒn ˈpriːfɪks/
**Part of speech:** noun
**Core meaning (English):** an address prefix that should not be publicly routable because it is reserved, invalid, or unallocated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prefix không nên route public vì reserved, invalid hoặc chưa allocate.
**Grammar & collocations:** `bogon-prefix list` — list; `reject an invalid advertisement` — từ chối.
**Examples:** `The edge router rejected a bogon prefix received from the untrusted peer.` → Router từ chối prefix bogon từ peer không tin.
**Liên kết tiếng Hàn:** `보곤 프리픽스`.

## 18. ingress filtering /ˈɪŋɡres ˈfɪltərɪŋ/
**Part of speech:** noun
**Core meaning (English):** checking traffic as it enters a network to reject sources or packets that should not arrive there.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra traffic lúc vào network để reject source/packet không hợp lệ.
**Grammar & collocations:** `ingress-filtering rule` — rule; `drop a spoofed source` — drop.
**Examples:** `Ingress filtering dropped packets claiming to come from an internal address.` → Filtering drop packet giả source internal.
**Liên kết tiếng Hàn:** `수신 필터링`.

## 19. egress filtering /ˈeɡres ˈfɪltərɪŋ/
**Part of speech:** noun
**Core meaning (English):** checking traffic leaving a network to restrict unauthorized destinations or source identities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra traffic đi ra để hạn chế destination/source trái phép.
**Grammar & collocations:** `egress-filtering policy` — policy; `block an unexpected destination` — chặn.
**Examples:** `Egress filtering prevented the compromised workload from contacting an unapproved host.` → Filtering chặn workload compromise gọi host lạ.
**Liên kết tiếng Hàn:** `송신 필터링`.

## 20. source validation /sɔːrs ˌvælɪˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** verifying that a packet's claimed source address is plausible for the interface or path where it arrived.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác minh source address packet có hợp lý với interface/path nhận không.
**Grammar & collocations:** `source-validation check` — check; `reject a spoofed origin` — từ chối.
**Examples:** `Source validation rejected a packet whose address could not return through the receiving interface.` → Validation từ chối packet không có đường return hợp lệ.
**Liên kết tiếng Hàn:** `소스 검증`.

## Review in context

A **network overlay** rides on an **underlay network**; a **tunnel endpoint** adds an **encapsulation header**, and **decapsulation** restores the inner packet through a **virtual network interface** and **bridge domain**. A **route reflector** and **border gateway** exchange a **prefix announcement** or **route withdrawal**. The **AS path**, **local preference**, **MED attribute**, and **community attribute** influence policy. A **route leak** can spread a **bogon prefix**; **ingress filtering**, **egress filtering**, and **source validation** reject unsafe traffic.

**Bản dịch tiếng Việt:** **Network overlay** chạy trên **underlay network**; **tunnel endpoint** thêm **encapsulation header**, còn **decapsulation** khôi phục packet qua **virtual network interface** và **bridge domain**. **Route reflector** và **border gateway** trao đổi **prefix announcement** hoặc **route withdrawal**. **AS path**, **local preference**, **MED attribute** và **community attribute** ảnh hưởng policy. **Route leak** có thể lan **bogon prefix**; **ingress filtering**, **egress filtering** và **source validation** từ chối traffic nguy hiểm.
