# C2 Vocabulary — Edge computing and workload placement

This lesson follows a geo-distributed service from edge placement and request entry through routing, failover, caching, and disconnected operation.

Flow: **edge computing → edge node → fog computing → workload placement → locality-aware placement → geo-distributed → latency-sensitive → data gravity → ingress point → egress point → regional failover → active-active → active-passive → traffic steering → anycast → proximity routing → edge cache → cache freshness → disconnected operation → eventual reachability**.

## 1. edge computing /ɛdʒ kəmˈpjuːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** a computing model that places processing close to users, devices, or data sources instead of only in a distant central cloud.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa compute ra gần nơi phát sinh request hoặc data để giảm round trip và phụ thuộc đường truyền xa.
**Grammar & collocations:** `edge-computing platform` — nền tảng edge; `edge workload` — workload ở edge.
**Examples:** `Edge computing reduced control latency for the factory's mobile robots.` → Edge computing giảm độ trễ điều khiển cho robot di động trong nhà máy.
**Liên kết tiếng Hàn:** `엣지 컴퓨팅`.

## 2. edge node /ɛdʒ noʊd/
**Part of speech:** noun
**Core meaning (English):** a nearby machine or cluster that runs services at the network edge.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** node đặt gần người dùng hoặc thiết bị, thường nhỏ hơn cloud region nhưng phản hồi nhanh hơn.
**Grammar & collocations:** `edge-node fleet` — đội node edge; `deploy to an edge node` — triển khai lên node edge.
**Examples:** `Each edge node handled local video filtering before sending summaries upstream.` → Mỗi edge node lọc video tại chỗ trước khi gửi bản tóm tắt lên trên.
**Liên kết tiếng Hàn:** `엣지 노드`.

## 3. fog computing /fɑɡ kəmˈpjuːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** a distributed computing layer between end devices and centralized cloud services.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “lớp sương” trung gian giữa device và cloud, có thể gom và xử lý data qua nhiều gateway địa phương.
**Grammar & collocations:** `fog-computing layer` — lớp fog; `fog gateway` — gateway fog.
**Examples:** `Fog computing aggregated sensor traffic across several buildings before cloud upload.` → Fog computing gom traffic sensor của nhiều tòa nhà trước khi upload lên cloud.
**Liên kết tiếng Hàn:** `포그 컴퓨팅`.

## 4. workload placement /ˈwɝkˌloʊd ˈpleɪsmənt/
**Part of speech:** noun
**Core meaning (English):** the decision about where a workload should run among available machines, regions, or tiers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định đặt workload ở đâu dựa trên latency, cost, capacity, data và policy.
**Grammar & collocations:** `placement decision` — quyết định placement; `automated workload placement` — placement tự động.
**Examples:** `Workload placement moved image inference to the region closest to the cameras.` → Workload placement chuyển inference ảnh tới region gần camera nhất.
**Liên kết tiếng Hàn:** `워크로드 배치`.

## 5. locality-aware placement /loʊˈkæləti əˈwɛr ˈpleɪsmənt/
**Part of speech:** noun
**Core meaning (English):** placement that deliberately considers the physical or network proximity of data, users, and compute.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** placement “biết vị trí”; đặt compute gần data hoặc nhóm user cần nó để tránh di chuyển tốn kém.
**Grammar & collocations:** `locality-aware scheduler` — scheduler biết locality; `preserve locality` — giữ locality.
**Examples:** `Locality-aware placement kept the analytics task beside its largest input partition.` → Locality-aware placement giữ task analytics cạnh partition input lớn nhất.
**Liên kết tiếng Hàn:** `지역성 인식 배치`.

## 6. geo-distributed /ˌdʒiːoʊ dɪˈstrɪbjətɪd/
**Part of speech:** adjective
**Core meaning (English):** spread across multiple geographic locations rather than housed in one site.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tán theo địa lý; các replica hoặc service nằm ở nhiều thành phố, region hay quốc gia.
**Grammar & collocations:** `geo-distributed database` — database phân tán địa lý; `geo-distributed service` — service geo-distributed.
**Examples:** `A geo-distributed control plane continued operating after one region lost power.` → Control plane geo-distributed vẫn hoạt động sau khi một region mất điện.
**Liên kết tiếng Hàn:** `지리적으로 분산된`.

## 7. latency-sensitive /ˈleɪtənsi ˌsɛnsətɪv/
**Part of speech:** adjective
**Core meaning (English):** requiring consistently short response times for correct or useful operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rất nhạy với độ trễ; thêm vài chục mili-giây cũng có thể làm trải nghiệm hoặc điều khiển kém đi.
**Grammar & collocations:** `latency-sensitive application` — ứng dụng nhạy latency; `latency-sensitive path` — đường xử lý nhạy latency.
**Examples:** `The trading feed used a latency-sensitive path that bypassed a distant inspection service.` → Feed giao dịch dùng đường xử lý latency-sensitive bỏ qua service kiểm tra ở xa.
**Liên kết tiếng Hàn:** `지연 시간 민감형`.

## 8. data gravity /ˈdeɪtə ˈɡrævəti/
**Part of speech:** noun
**Core meaning (English):** the tendency for large or heavily connected datasets to attract nearby applications, users, and additional services.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data lớn tạo “lực hút”, khiến service khác muốn chạy gần nó để tránh phí và latency truyền dữ liệu.
**Grammar & collocations:** `data-gravity effect` — hiệu ứng lực hút data; `follow data gravity` — đặt compute theo data.
**Examples:** `Data gravity made it cheaper to move the report generator than to copy the archive.` → Data gravity khiến di chuyển report generator rẻ hơn copy archive.
**Liên kết tiếng Hàn:** `데이터 중력`.

## 9. ingress point /ˈɪnɡrɛs pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** the network location where a request or data flow enters a service or region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm vào của traffic; chọn ingress point phù hợp ảnh hưởng route và latency tiếp theo.
**Grammar & collocations:** `regional ingress point` — điểm vào theo region; `select an ingress point` — chọn điểm vào.
**Examples:** `The router selected an ingress point near the user's mobile carrier.` → Router chọn ingress point gần nhà mạng di động của user.
**Liên kết tiếng Hàn:** `수신 진입점`.

## 10. egress point /ˈɛɡrɛs pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** the network location where traffic leaves a service, region, or private network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm ra của traffic; egress location ảnh hưởng phí truyền và đường tới downstream service.
**Grammar & collocations:** `controlled egress point` — điểm ra có kiểm soát; `egress-path policy` — policy đường ra.
**Examples:** `The compliance rule forced sensitive exports through one audited egress point.` → Rule compliance buộc export nhạy cảm đi qua một egress point được audit.
**Liên kết tiếng Hàn:** `송신 출구점`.

## 11. regional failover /ˈriːdʒənəl ˈfeɪlˌoʊvər/
**Part of speech:** noun
**Core meaning (English):** the transfer of service responsibility from one geographic region to another after a regional failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển service sang region dự phòng khi region chính gặp sự cố.
**Grammar & collocations:** `automatic regional failover` — failover region tự động; `failover target` — đích failover.
**Examples:** `Regional failover redirected reads after the primary data center became unreachable.` → Regional failover chuyển read sang nơi khác sau khi data center chính không thể truy cập.
**Liên kết tiếng Hàn:** `지역 장애 조치`.

## 12. active-active /ˌæktɪv ˈæktɪv/
**Part of speech:** adjective
**Core meaning (English):** describing a design in which multiple sites or instances serve traffic at the same time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều bên đều active và cùng nhận traffic, không có một standby hoàn toàn rảnh.
**Grammar & collocations:** `active-active deployment` — triển khai active-active; `active-active replication` — replication active-active.
**Examples:** `The active-active design kept both regions useful during ordinary traffic.` → Thiết kế active-active giữ cả hai region hữu ích trong traffic bình thường.
**Liên kết tiếng Hàn:** `액티브-액티브`.

## 13. active-passive /ˌæktɪv ˈpæsɪv/
**Part of speech:** adjective
**Core meaning (English):** describing a design in which one site serves traffic while another waits to take over.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một bên active, bên kia passive standby; đơn giản hơn nhưng capacity dự phòng có thể bị lãng phí.
**Grammar & collocations:** `active-passive failover` — failover active-passive; `passive standby` — standby thụ động.
**Examples:** `The small service used active-passive replication because its recovery process was simple and predictable.` → Service nhỏ dùng replication active-passive vì quy trình recovery đơn giản và dễ đoán.
**Liên kết tiếng Hàn:** `액티브-패시브`.

## 14. traffic steering /ˈtræfɪk ˈstɪrɪŋ/
**Part of speech:** noun
**Core meaning (English):** the deliberate routing of requests toward selected regions, instances, or network paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều hướng traffic theo health, latency, cost, weight hoặc policy.
**Grammar & collocations:** `policy-based traffic steering` — steering theo policy; `steer traffic away` — điều traffic tránh khỏi.
**Examples:** `Traffic steering shifted new sessions away from the region under maintenance.` → Traffic steering chuyển session mới khỏi region đang bảo trì.
**Liên kết tiếng Hàn:** `트래픽 조정`.

## 15. anycast /ˈɛniˌkæst/
**Part of speech:** noun
**Core meaning (English):** a routing method in which the same network address is announced from multiple locations and traffic reaches one nearby path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều điểm quảng bá cùng một địa chỉ; network chọn điểm “gần” theo routing.
**Grammar & collocations:** `anycast address` — địa chỉ anycast; `anycast announcement` — quảng bá anycast.
**Examples:** `Anycast directed users to a nearby healthy edge site without exposing every site address.` → Anycast đưa user tới edge site khỏe gần đó mà không lộ địa chỉ từng site.
**Liên kết tiếng Hàn:** `애니캐스트`.

## 16. proximity routing /prɑkˈsɪməti ˈraʊtɪŋ/
**Part of speech:** noun
**Core meaning (English):** routing that prefers a service location close to the requester according to geography or measured network distance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** route theo độ gần thực tế thay vì chỉ theo round-robin.
**Grammar & collocations:** `geographic proximity routing` — routing theo địa lý; `proximity-routing rule` — rule proximity.
**Examples:** `Proximity routing kept European clients on a European processing path.` → Proximity routing giữ client châu Âu trên đường xử lý ở châu Âu.
**Liên kết tiếng Hàn:** `근접 라우팅`.

## 17. edge cache /ɛdʒ kæʃ/
**Part of speech:** noun
**Core meaning (English):** a cache located near users or devices that stores reusable responses at the network edge.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache gần người dùng; request có thể nhận nội dung ngay tại edge thay vì về origin.
**Grammar & collocations:** `edge-cache hit` — cache hit ở edge; `populate an edge cache` — nạp edge cache.
**Examples:** `The edge cache served the product images without contacting the origin for every request.` → Edge cache trả ảnh sản phẩm mà không gọi origin cho từng request.
**Liên kết tiếng Hàn:** `엣지 캐시`.

## 18. cache freshness /kæʃ ˈfrɛʃnəs/
**Part of speech:** noun
**Core meaning (English):** the degree to which cached content is still considered current under its validity rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức “mới” của nội dung trong cache; freshness quyết định có thể trả ngay hay phải hỏi origin.
**Grammar & collocations:** `freshness window` — cửa sổ freshness; `check cache freshness` — kiểm tra freshness.
**Examples:** `The pricing API used a short cache-freshness window because prices changed frequently.` → Pricing API dùng cửa sổ cache freshness ngắn vì giá thay đổi thường xuyên.
**Liên kết tiếng Hàn:** `캐시 신선도`.

## 19. disconnected operation /ˌdɪskəˈnɛktɪd ˌɑpəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** continued local operation while a device or edge site temporarily lacks a connection to its upstream service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị vẫn làm việc khi mất mạng; state và dữ liệu sẽ đồng bộ khi link trở lại.
**Grammar & collocations:** `support disconnected operation` — hỗ trợ hoạt động offline; `disconnected-mode queue` — queue khi mất kết nối.
**Examples:** `The inspection tablet supported disconnected operation inside the tunnel.` → Tablet kiểm tra hỗ trợ disconnected operation bên trong đường hầm.
**Liên kết tiếng Hàn:** `연결 끊김 작업`.

## 20. eventual reachability /ɪˈvɛntʃuəl ˌriːtʃəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the expectation that a temporarily unavailable service or node will become reachable again after a disruption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chưa liên lạc được ngay nhưng có kỳ vọng link sẽ trở lại, nên hệ thống giữ dữ liệu chờ đồng bộ.
**Grammar & collocations:** `assume eventual reachability` — giả định sẽ reachable về sau; `reachability window` — khoảng chờ reachability.
**Examples:** `The edge agent buffered telemetry because it assumed eventual reachability of the regional broker.` → Edge agent buffer telemetry vì giả định regional broker sẽ reachable trở lại.
**Liên kết tiếng Hàn:** `궁극적 도달 가능성`.

## Review in context

**Edge computing** places an **edge node** near devices, while **fog computing** adds an intermediate layer for aggregation. A scheduler makes a **workload placement** decision using **locality-aware placement** for a **geo-distributed**, **latency-sensitive** service whose data has strong **data gravity**. Requests enter through an **ingress point** and leave through an audited **egress point**. After a **regional failover**, an **active-active** design can keep serving traffic, whereas an **active-passive** design waits for takeover. **Traffic steering**, **anycast**, and **proximity routing** select a healthy nearby path. An **edge cache** serves responses while **cache freshness** remains valid. During **disconnected operation**, the node buffers work and relies on **eventual reachability** for later synchronization.

**Bản dịch tiếng Việt:** **Edge computing** đặt **edge node** gần thiết bị, còn **fog computing** thêm một lớp trung gian để gom dữ liệu. Scheduler quyết định **workload placement**, dùng **locality-aware placement** cho service **geo-distributed**, **latency-sensitive** có **data gravity** mạnh. Request đi vào qua **ingress point** và đi ra qua **egress point** được audit. Sau **regional failover**, thiết kế **active-active** vẫn có thể phục vụ traffic, còn **active-passive** chờ takeover. **Traffic steering**, **anycast** và **proximity routing** chọn đường gần và khỏe. **Edge cache** trả response khi **cache freshness** còn hợp lệ. Trong **disconnected operation**, node buffer công việc và dựa vào **eventual reachability** để đồng bộ sau.
