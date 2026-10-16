# C2 Vocabulary — Disaggregated memory fabrics and composable infrastructure

This lesson follows a pooled resource from fabric discovery through coherent access, tiering, isolation, and tenant release.

Flow: **compute disaggregation → memory pooling → cache coherence fabric → coherent attach → fabric manager → device enumeration → host-managed device memory → memory tiering → composable infrastructure → accelerator pooling → switch-based interconnect → latency class → bandwidth oversubscription → hot-plug semantics → link retraining → protocol fallback → address-space translation → memory expander → fabric isolation → resource tenancy**.

## 1. compute disaggregation /kəmˈpjuːt dɪsˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** separating processors, memory, and accelerators into independently allocated resources connected by a high-speed fabric.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách compute thành các tài nguyên rời nhưng nối bằng fabric nhanh.
**Grammar & collocations:** `compute-disaggregation architecture` — architecture; `disaggregate a server node` — tách.
**Examples:** `Compute disaggregation let the scheduler assign memory-heavy jobs more capacity without adding idle CPUs.` → Disaggregation cho job cần nhiều memory thêm capacity mà không thêm CPU nhàn.
**Liên kết tiếng Hàn:** `컴퓨트 분리`.

## 2. memory pooling /ˈmɛməri ˈpuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** making memory capacity available from a shared pool instead of tying it permanently to one host.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom memory thành pool để host dùng theo nhu cầu.
**Grammar & collocations:** `memory-pooling service` — service; `allocate pooled capacity` — cấp phát.
**Examples:** `Memory pooling absorbed a temporary analytics spike without reserving permanent DRAM in every server.` → Pool memory hấp thụ spike analytics mà không phải dành DRAM cố định.
**Liên kết tiếng Hàn:** `메모리 풀링`.

## 3. cache coherence fabric /kæʃ koʊˈhɪrəns ˈfæbrɪk/
**Part of speech:** noun
**Core meaning (English):** an interconnect that maintains consistent cache-line ownership across processors and attached memory devices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fabric giữ các bản cache nhất quán giữa CPU và memory.
**Grammar & collocations:** `cache-coherence-fabric protocol` — protocol; `snoop a cache line` — theo dõi.
**Examples:** `The cache coherence fabric invalidated a stale line before the accelerator consumed the buffer.` → Fabric vô hiệu dòng cũ trước khi accelerator đọc buffer.
**Liên kết tiếng Hàn:** `캐시 일관성 패브릭`.

## 4. coherent attach /koʊˈhɪrənt əˈtætʃ/
**Part of speech:** noun
**Core meaning (English):** connecting a device so that its memory accesses participate in the host's cache-coherence protocol.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gắn device vào hệ coherence của host.
**Grammar & collocations:** `coherent-attach endpoint` — endpoint; `attach a device coherently` — kết nối.
**Examples:** `Coherent attach removed an explicit copy from the CPU buffer to the accelerator.` → Kết nối coherent bỏ được bước copy buffer.
**Liên kết tiếng Hàn:** `코히어런트 연결`.

## 5. fabric manager /ˈfæbrɪk ˈmænɪdʒər/
**Part of speech:** noun
**Core meaning (English):** control software that discovers, configures, monitors, and reallocates resources on an interconnect fabric.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần mềm điều phối việc phát hiện và cấp phát resource trong fabric.
**Grammar & collocations:** `fabric-manager daemon` — daemon; `reconfigure a fabric route` — cấu hình lại.
**Examples:** `The fabric manager drained a failing link before moving the tenant's memory region.` → Fabric manager rút link lỗi trước khi chuyển vùng memory.
**Liên kết tiếng Hàn:** `패브릭 관리자`.

## 6. device enumeration /dɪˈvaɪs ɪˌnuːməˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of discovering attached devices and assigning them identifiers and addressable resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quét device gắn vào và cấp ID cùng vùng địa chỉ.
**Grammar & collocations:** `device-enumeration sequence` — sequence; `enumerate fabric endpoints` — liệt kê.
**Examples:** `Device enumeration found the memory expander before the host boot policy requested it.` → Enumeration thấy memory expander trước khi boot policy yêu cầu.
**Liên kết tiếng Hàn:** `장치 열거`.

## 7. host-managed device memory /hoʊst ˈmænɪdʒd dɪˈvaɪs ˈmɛməri/
**Part of speech:** noun
**Core meaning (English):** memory on an attached device whose allocation and access policy are controlled by the host operating system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory nằm trên device nhưng host OS quyết định cấp phát và truy cập.
**Grammar & collocations:** `host-managed-device-memory policy` — policy; `map device capacity into a process` — ánh xạ.
**Examples:** `Host-managed device memory let the database expose a larger buffer pool without moving data to disk.` → Memory do host quản lý mở rộng buffer pool mà không cần đẩy ra disk.
**Liên kết tiếng Hàn:** `호스트 관리 장치 메모리`.

## 8. memory tiering /ˈmɛməri ˈtɪərɪŋ/
**Part of speech:** noun
**Core meaning (English):** placing data across memory classes with different latency, bandwidth, capacity, or cost.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xếp dữ liệu vào các tầng memory khác nhau.
**Grammar & collocations:** `memory-tiering policy` — policy; `promote hot pages` — đưa lên tầng nhanh.
**Examples:** `Memory tiering promoted hot indexes to local DRAM and left cold scans in the pooled tier.` → Tiering đưa index nóng lên DRAM cục bộ.
**Liên kết tiếng Hàn:** `메모리 계층화`.

## 9. composable infrastructure /kəmˈpoʊzəbəl ˈɪnfrəˌstrʌktʃər/
**Part of speech:** noun
**Core meaning (English):** infrastructure whose compute, memory, storage, and accelerators can be assembled into logical systems on demand.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hạ tầng ghép linh hoạt từ các module rời.
**Grammar & collocations:** `composable-infrastructure pool` — pool; `compose a logical server` — ghép.
**Examples:** `Composable infrastructure built a short-lived training server from idle accelerators and pooled memory.` → Hạ tầng composable ghép server training tạm từ accelerator nhàn.
**Liên kết tiếng Hàn:** `컴포저블 인프라`.

## 10. accelerator pooling /əkˈsɛləˌreɪtər ˈpuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** sharing specialized processors through a managed pool rather than dedicating one accelerator to each host.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom accelerator để nhiều host dùng chung.
**Grammar & collocations:** `accelerator-pooling scheduler` — scheduler; `lease a graphics partition` — thuê.
**Examples:** `Accelerator pooling raised utilization when inference requests arrived in uneven bursts.` → Pool accelerator tăng utilization khi request đến không đều.
**Liên kết tiếng Hàn:** `가속기 풀링`.

## 11. switch-based interconnect /swɪtʃ beɪst ˌɪntərkəˈnɛkt/
**Part of speech:** noun
**Core meaning (English):** a fabric in which switches forward traffic among hosts and devices instead of relying on a direct point-to-point link.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interconnect dùng switch để nối nhiều host và device.
**Grammar & collocations:** `switch-based-interconnect topology` — topology; `forward a coherent request` — chuyển tiếp.
**Examples:** `The switch-based interconnect allowed two hosts to reach the same expansion shelf.` → Interconnect bằng switch cho phép hai host cùng tới shelf.
**Liên kết tiếng Hàn:** `스위치 기반 인터커넥트`.

## 12. latency class /ˈleɪtənsi klæs/
**Part of speech:** noun
**Core meaning (English):** a category grouping resources by their expected access delay and service-time characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm resource theo mức latency dự kiến.
**Grammar & collocations:** `latency-class label` — label; `place a page in the low-latency class` — đặt.
**Examples:** `The runtime selected a latency class before binding the worker to remote memory.` → Runtime chọn class latency trước khi bind worker.
**Liên kết tiếng Hàn:** `지연 시간 등급`.

## 13. bandwidth oversubscription /ˈbændwɪθ ˌoʊvərsəbˈskrɪpʃən/
**Part of speech:** noun
**Core meaning (English):** assigning more potential traffic than a shared link can carry if all clients become active simultaneously.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đăng ký nhu cầu bandwidth vượt capacity link trong trường hợp mọi client cùng chạy.
**Grammar & collocations:** `bandwidth-oversubscription ratio` — ratio; `cap aggregate traffic` — giới hạn.
**Examples:** `Bandwidth oversubscription was safe for the average mix but failed during the synchronized checkpoint.` → Oversubscription ổn ở workload trung bình nhưng fail khi checkpoint đồng thời.
**Liên kết tiếng Hàn:** `대역폭 오버서브스크립션`.

## 14. hot-plug semantics /hɑt plʌɡ səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** the defined behavior for adding or removing a device while a system remains powered and active.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy tắc thêm/bỏ device khi hệ thống đang chạy.
**Grammar & collocations:** `hot-plug-semantics specification` — specification; `quiesce an endpoint` — làm yên.
**Examples:** `Hot-plug semantics required the manager to quiesce queues before removing the memory shelf.` → Quy tắc hot-plug yêu cầu làm yên queue trước khi tháo shelf.
**Liên kết tiếng Hàn:** `핫 플러그 의미론`.

## 15. link retraining /lɪŋk riːˈtreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** renegotiating link parameters after errors, signal drift, or a change in operating conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thương lượng lại tham số link sau lỗi hoặc drift.
**Grammar & collocations:** `link-retraining interval` — interval; `renegotiate lane settings` — đàm phán lại.
**Examples:** `Link retraining restored a degraded lane without rebooting the host.` → Retraining khôi phục lane lỗi mà không reboot host.
**Liên kết tiếng Hàn:** `링크 재훈련`.

## 16. protocol fallback /ˈproʊtəˌkɔl ˈfɔlˌbæk/
**Part of speech:** noun
**Core meaning (English):** switching to a less capable but interoperable protocol when the preferred protocol cannot be negotiated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rơi về protocol kém hơn nhưng vẫn tương thích.
**Grammar & collocations:** `protocol-fallback path` — path; `fall back to a legacy mode` — chuyển về.
**Examples:** `Protocol fallback preserved access to capacity but removed hardware-coherent caching.` → Fallback giữ quyền truy cập capacity nhưng bỏ cache coherent phần cứng.
**Liên kết tiếng Hàn:** `프로토콜 폴백`.

## 17. address-space translation /əˈdrɛs speɪs trænzˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** converting an address from one device or process address space into another fabric-visible address.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi địa chỉ giữa process, device và fabric.
**Grammar & collocations:** `address-space-translation table` — table; `translate a device pointer` — chuyển đổi.
**Examples:** `Address-space translation isolated the accelerator's virtual pointers from physical shelf placement.` → Translation tách pointer ảo khỏi vị trí shelf vật lý.
**Liên kết tiếng Hàn:** `주소 공간 변환`.

## 18. memory expander /ˈmɛməri ɪkˈspændər/
**Part of speech:** noun
**Core meaning (English):** an attached device that adds addressable memory capacity beyond the host's directly installed memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device mở rộng memory addressable cho host.
**Grammar & collocations:** `memory-expander inventory` — inventory; `attach additional capacity` — gắn thêm.
**Examples:** `The memory expander supplied capacity for the graph index while local slots stayed unchanged.` → Expander cung cấp capacity cho graph index mà không đổi slot cục bộ.
**Liên kết tiếng Hàn:** `메모리 확장기`.

## 19. fabric isolation /ˈfæbrɪk ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** restricting which hosts, devices, or tenants can observe or access one another across a shared fabric.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cô lập các host/device/tenant trong fabric dùng chung.
**Grammar & collocations:** `fabric-isolation domain` — domain; `deny cross-tenant traversal` — chặn.
**Examples:** `Fabric isolation prevented a test host from enumerating another tenant's pooled accelerators.` → Isolation ngăn host test liệt kê accelerator của tenant khác.
**Liên kết tiếng Hàn:** `패브릭 격리`.

## 20. resource tenancy /rɪˈsɔrs ˈtɛnənsi/
**Part of speech:** noun
**Core meaning (English):** the allocation relationship by which a user or workload holds a defined right to use shared infrastructure resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ thuê/quyền dùng resource dùng chung của tenant.
**Grammar & collocations:** `resource-tenancy record` — record; `revoke a tenant lease` — thu hồi.
**Examples:** `Resource tenancy ended when the controller revoked the accelerator lease and scrubbed its buffers.` → Tenancy kết thúc khi controller thu hồi lease và xóa buffer.
**Liên kết tiếng Hàn:** `리소스 테넌시`.

## Review in context

**Compute disaggregation** enables **memory pooling** through a **cache coherence fabric** and **coherent attach**. A **fabric manager** performs **device enumeration** and assigns **host-managed device memory** according to **memory tiering** rules. **Composable infrastructure** and **accelerator pooling** use a **switch-based interconnect**, but each **latency class** must account for **bandwidth oversubscription**. Safe **hot-plug semantics**, **link retraining**, and **protocol fallback** keep the fabric available. **Address-space translation** maps pointers to a **memory expander** while **fabric isolation** protects **resource tenancy** boundaries.

**Bản dịch tiếng Việt:** **Compute disaggregation** cho phép **memory pooling** qua **cache coherence fabric** và **coherent attach**. **Fabric manager** thực hiện **device enumeration** và cấp **host-managed device memory** theo quy tắc **memory tiering**. **Composable infrastructure** và **accelerator pooling** dùng **switch-based interconnect**, nhưng mỗi **latency class** phải tính đến **bandwidth oversubscription**. **Hot-plug semantics**, **link retraining** và **protocol fallback** an toàn giúp fabric luôn hoạt động. **Address-space translation** ánh xạ pointer tới **memory expander**, còn **fabric isolation** bảo vệ ranh giới **resource tenancy**.
