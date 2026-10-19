# C2 Vocabulary — Programmable networking and function offload

This lesson follows a packet through programmable pipelines, service chaining, telemetry, and hardware-assisted network processing.

Flow: **network function virtualization → virtual network function → service function chain → programmable switch → packet parser → match-action table → P4 program → ingress pipeline → egress pipeline → line-rate processing → telemetry postcard → flow rule → control-plane API → data-plane programmability → hardware offload → smart NIC → DPU → packet recirculation → queue-aware scheduling → buffer occupancy**.

## 1. network function virtualization /ˈnɛtˌwɝk ˈfʌŋkʃən ˌvɝtʃuələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a method of running network functions as software on general-purpose or virtualized infrastructure instead of dedicated appliances.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến firewall, router hoặc load balancer thành software có thể triển khai linh hoạt.
**Grammar & collocations:** `NFV platform` — nền tảng NFV; `NFV orchestration` — orchestration NFV.
**Examples:** `Network function virtualization let the operator scale firewalls with demand.` → NFV cho phép operator scale firewall theo nhu cầu.
**Liên kết tiếng Hàn:** `네트워크 기능 가상화`.

## 2. virtual network function /ˈvɝtʃuəl ˈnɛtˌwɝk ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a software implementation of a network function that runs in a virtual machine or container.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phiên bản software của network appliance, chạy như workload bình thường.
**Grammar & collocations:** `VNF instance` — instance VNF; `deploy a virtual network function` — triển khai.
**Examples:** `The virtual network function inspected traffic before forwarding it to the service mesh.` → VNF kiểm tra traffic trước khi chuyển tới service mesh.
**Liên kết tiếng Hàn:** `가상 네트워크 기능`.

## 3. service function chain /ˈsɝvɪs ˈfʌŋkʃən tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** an ordered sequence of network functions through which traffic must pass.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi firewall–NAT–IDS–proxy mà packet đi qua theo thứ tự.
**Grammar & collocations:** `service-function-chain policy` — policy chain; `instantiate a chain` — tạo chain.
**Examples:** `The service function chain sent untrusted traffic through inspection and rate limiting.` → Chain đưa traffic không tin cậy qua inspection và rate limiting.
**Liên kết tiếng Hàn:** `서비스 기능 체인`.

## 4. programmable switch /ˈproʊɡræməbəl swɪtʃ/
**Part of speech:** noun
**Core meaning (English):** a switch whose packet-processing behavior can be changed through software-defined pipeline logic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** switch không chỉ dùng logic cố định mà có thể lập trình cách đọc và sửa packet.
**Grammar & collocations:** `programmable-switch pipeline` — pipeline switch; `program a switch` — lập trình.
**Examples:** `The programmable switch counted application flows without sending every packet to the CPU.` → Switch programmable đếm flow ứng dụng mà không gửi mọi packet tới CPU.
**Liên kết tiếng Hàn:** `프로그래밍 가능한 스위치`.

## 5. packet parser /ˈpækɪt ˈpɑrsər/
**Part of speech:** noun
**Core meaning (English):** a pipeline component that reads packet headers and extracts fields for later processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ phận bóc header/field của packet để match và action phía sau dùng.
**Grammar & collocations:** `parser state` — state parser; `parse a packet header` — parse header.
**Examples:** `The packet parser extracted the tenant identifier from a custom header.` → Packet parser lấy tenant ID từ custom header.
**Liên kết tiếng Hàn:** `패킷 파서`.

## 6. match-action table /mætʃ ˈækʃən ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a table that matches packet fields against keys and applies an associated processing action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nếu field match key thì chạy action tương ứng, như forward, drop hoặc rewrite.
**Grammar & collocations:** `match-action entry` — entry; `populate a match-action table` — nạp table.
**Examples:** `The match-action table redirected packets with a blocked destination.` → Table chuyển hướng packet có destination bị chặn.
**Liên kết tiếng Hàn:** `매치-액션 테이블`.

## 7. P4 program /piː fɔr ˈproʊɡræm/
**Part of speech:** noun
**Core meaning (English):** a program written in the P4 language to describe how a programmable device parses and processes packets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code P4 mô tả parser, table và action của data plane.
**Grammar & collocations:** `compile a P4 program` — compile; `P4 pipeline` — pipeline P4.
**Examples:** `The P4 program added a header field used for in-network load balancing.` → P4 program thêm header field cho load balancing trong mạng.
**Liên kết tiếng Hàn:** `P4 프로그램`.

## 8. ingress pipeline /ˈɪnɡrɛs ˈpaɪpˌlaɪn/
**Part of speech:** noun
**Core meaning (English):** the packet-processing stages applied as traffic enters a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pipeline xử lý lúc packet đi vào, thường parse, match và quyết định hướng.
**Grammar & collocations:** `ingress stage` — stage ingress; `ingress pipeline capacity` — capacity.
**Examples:** `The ingress pipeline marked packets before they entered the shared fabric.` → Ingress pipeline đánh dấu packet trước khi vào fabric chung.
**Liên kết tiếng Hàn:** `수신 파이프라인`.

## 9. egress pipeline /ˈɛɡrɛs ˈpaɪpˌlaɪn/
**Part of speech:** noun
**Core meaning (English):** the packet-processing stages applied before traffic leaves a device or port.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pipeline xử lý cuối trước khi packet ra port, có thể queue, rewrite hoặc shape.
**Grammar & collocations:** `egress action` — action egress; `egress pipeline queue` — queue.
**Examples:** `The egress pipeline rewrote the source label for the external link.` → Egress pipeline rewrite source label cho link ngoài.
**Liên kết tiếng Hàn:** `송신 파이프라인`.

## 10. line-rate processing /laɪn reɪt ˈprɑsɛsɪŋ/
**Part of speech:** noun
**Core meaning (English):** processing packets fast enough to sustain the physical link's full configured rate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xử lý đủ nhanh để không giảm tốc độ đường truyền.
**Grammar & collocations:** `line-rate packet processing` — xử lý line-rate; `sustain line rate` — giữ tốc độ.
**Examples:** `The filter maintained line-rate processing even with complex header matches.` → Filter giữ line-rate dù match header phức tạp.
**Liên kết tiếng Hàn:** `회선 속도 처리`.

## 11. telemetry postcard /təˈlɛmɪtri ˈpoʊstˌkɑrd/
**Part of speech:** noun
**Core meaning (English):** a small report inserted into or generated from packet processing to record path or queue information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “bưu thiếp” telemetry nhỏ đi cùng flow để ghi switch, latency hoặc queue.
**Grammar & collocations:** `postcard telemetry` — telemetry postcard; `insert a telemetry postcard` — chèn postcard.
**Examples:** `A telemetry postcard recorded the queue depth at each programmable switch.` → Telemetry postcard ghi queue depth ở từng switch.
**Liên kết tiếng Hàn:** `텔레메트리 포스트카드`.

## 12. flow rule /floʊ ruːl/
**Part of speech:** noun
**Core meaning (English):** a rule that classifies a traffic flow and specifies how matching packets should be handled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule áp dụng cho flow, như forward tới port, drop hoặc đưa vào queue riêng.
**Grammar & collocations:** `install a flow rule` — cài rule; `flow-rule priority` — độ ưu tiên.
**Examples:** `The controller installed a flow rule for the new tenant network.` → Controller cài flow rule cho network tenant mới.
**Liên kết tiếng Hàn:** `플로 규칙`.

## 13. control-plane API /kənˈtroʊl pleɪn ˌeɪ piː ˈaɪ/
**Part of speech:** noun
**Core meaning (English):** an interface used by a controller to configure forwarding behavior or state in the data plane.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** API để control plane lập trình switch, rule và table trong data plane.
**Grammar & collocations:** `control-plane API call` — call; `expose a control-plane API` — cung cấp API.
**Examples:** `The orchestrator used the control-plane API to update the match table.` → Orchestrator dùng API để cập nhật match table.
**Liên kết tiếng Hàn:** `제어 평면 API`.

## 14. data-plane programmability /ˈdeɪtə pleɪn ˌproʊɡræməˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability to change how packets are processed directly in the forwarding plane.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data plane tự có logic lập trình được, không phải mọi quyết định đều quay về controller.
**Grammar & collocations:** `data-plane programmable target` — target; `enable data-plane programmability` — bật.
**Examples:** `Data-plane programmability allowed the device to recognize a new encapsulation.` → Programmability cho device nhận encapsulation mới.
**Liên kết tiếng Hàn:** `데이터 평면 프로그래밍 가능성`.

## 15. hardware offload /ˈhɑrdˌwɛr ˈɔfˌloʊd/
**Part of speech:** noun
**Core meaning (English):** moving a computation from a general-purpose processor to specialized hardware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đẩy checksum, encryption hoặc packet work sang hardware để CPU rảnh hơn.
**Grammar & collocations:** `hardware-offload engine` — engine offload; `enable hardware offload` — bật.
**Examples:** `Hardware offload reduced CPU use during encrypted tunnel processing.` → Hardware offload giảm CPU khi xử lý tunnel mã hóa.
**Liên kết tiếng Hàn:** `하드웨어 오프로딩`.

## 16. smart NIC /smɑrt nɪk/
**Part of speech:** noun
**Core meaning (English):** a network interface card with onboard processors or programmable logic for networking and infrastructure tasks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** NIC có compute riêng để xử lý network, security hoặc storage gần card.
**Grammar & collocations:** `smart-NIC firmware` — firmware; `deploy a smart NIC` — triển khai.
**Examples:** `The smart NIC isolated tenant encryption from the host CPU.` → Smart NIC tách encryption tenant khỏi CPU host.
**Liên kết tiếng Hàn:** `스마트 NIC`.

## 17. DPU /ˌdiː piː ˈjuː/
**Part of speech:** noun
**Core meaning (English):** a data processing unit that offloads infrastructure services such as networking, storage, and security from a host CPU.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** processor chuyên xử lý infrastructure quanh server, giải phóng CPU cho application.
**Grammar & collocations:** `DPU-based isolation` — isolation dựa trên DPU; `DPU offload` — offload DPU.
**Examples:** `The DPU handled virtual switching and storage encryption for the hypervisor.` → DPU xử lý virtual switch và encryption storage cho hypervisor.
**Liên kết tiếng Hàn:** `DPU`.

## 18. packet recirculation /ˈpækɪt ˌriːˌsɝkjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** sending a packet through a processing pipeline again to apply additional stages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** packet quay lại pipeline để xử lý thêm, nhưng tốn bandwidth và tài nguyên.
**Grammar & collocations:** `recirculation pass` — lượt recirculation; `limit packet recirculation` — giới hạn.
**Examples:** `Packet recirculation handled the second lookup but reduced available line rate.` → Recirculation xử lý lookup thứ hai nhưng giảm line rate.
**Liên kết tiếng Hàn:** `패킷 재순환`.

## 19. queue-aware scheduling /kjuː əˈwɛr ˈskɛdʒuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** scheduling that considers queue lengths or congestion when assigning traffic, work, or service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scheduler nhìn queue để tránh đẩy thêm work vào nơi đang nghẽn.
**Grammar & collocations:** `queue-aware scheduler` — scheduler; `queue-aware routing` — routing.
**Examples:** `Queue-aware scheduling diverted flows before one egress queue became saturated.` → Scheduling chuyển flow trước khi queue egress bão hòa.
**Liên kết tiếng Hàn:** `큐 인식 스케줄링`.

## 20. buffer occupancy /ˈbʌfər ˈɑkjəpənsi/
**Part of speech:** noun
**Core meaning (English):** the amount of buffer storage currently filled by queued packets or data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức buffer đang bị chiếm; occupancy tăng nhanh báo hiệu congestion sắp tới.
**Grammar & collocations:** `buffer-occupancy telemetry` — telemetry occupancy; `monitor buffer occupancy` — theo dõi.
**Examples:** `The switch exported buffer occupancy to help diagnose microbursts.` → Switch export buffer occupancy để chẩn đoán microburst.
**Liên kết tiếng Hàn:** `버퍼 점유율`.

## Review in context

**Network function virtualization** runs a **virtual network function** inside a **service function chain**. A **programmable switch** uses a **packet parser**, a **match-action table**, and a compiled **P4 program** in its **ingress pipeline** and **egress pipeline**. The target is **line-rate processing**, while a **telemetry postcard** records path data. A controller installs a **flow rule** through a **control-plane API**, but **data-plane programmability** keeps packet decisions local. **Hardware offload**, a **smart NIC**, and a **DPU** remove work from the host. **Packet recirculation** adds another pass; **queue-aware scheduling** watches **buffer occupancy** to avoid congestion.

**Bản dịch tiếng Việt:** **Network function virtualization** chạy **virtual network function** trong **service function chain**. **Programmable switch** dùng **packet parser**, **match-action table** và **P4 program** đã compile trong **ingress pipeline** và **egress pipeline**. Mục tiêu là **line-rate processing**, còn **telemetry postcard** ghi dữ liệu đường đi. Controller cài **flow rule** qua **control-plane API**, nhưng **data-plane programmability** giữ quyết định packet tại chỗ. **Hardware offload**, **smart NIC** và **DPU** chuyển việc khỏi host. **Packet recirculation** thêm một lượt xử lý; **queue-aware scheduling** theo dõi **buffer occupancy** để tránh congestion.
