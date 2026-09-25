# C2 Vocabulary — Virtualization and hypervisor systems

This lesson follows machine virtualization from the hypervisor boundary through CPU, memory, device, and migration mechanisms used by modern virtualized infrastructure.

Flow: **hypervisor → virtual machine → hardware-assisted virtualization → guest operating system → host operating system → VM exit → trap-and-emulate → paravirtualization → virtual CPU → memory ballooning → memory overcommit → huge page → device passthrough → IOMMU → SR-IOV → live migration → dirty-page tracking → checkpoint/restore → nested virtualization → CPU pinning**.

## 1. hypervisor /ˈhaɪpərˌvaɪzər/
**Part of speech:** noun
**Core meaning (English):** software or firmware that creates, runs, and isolates virtual machines while mediating their access to physical hardware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp quản lý máy ảo; hình dung nhiều “máy tính logic” cùng chia một máy vật lý nhưng hypervisor đứng giữa để phân chia CPU, memory và device an toàn.
**Grammar & collocations:** `type-1 hypervisor` — hypervisor chạy trực tiếp trên hardware; `hypervisor layer` — tầng hypervisor; `hypervisor overhead` — overhead do ảo hóa.
**Examples:** `The hypervisor isolated the failed guest from neighboring virtual machines on the same server.` → Hypervisor cô lập guest bị lỗi khỏi các máy ảo khác trên cùng server.
**Liên kết tiếng Hàn:** `하이퍼바이저`.

## 2. virtual machine /ˈvɝtʃuəl məˈʃiːn/
**Part of speech:** noun
**Core meaning (English):** a software-defined computer environment that presents virtualized processors, memory, storage, and devices to an operating system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** máy ảo; hình dung một computer hoàn chỉnh được dựng bằng software, có CPU, RAM và disk logic riêng dù dùng chung hardware vật lý.
**Grammar & collocations:** `provision a virtual machine` — cấp một VM; `VM image` — image máy ảo; `virtual-machine isolation` — cô lập VM.
**Examples:** `Each virtual machine ran its own kernel even though all of them shared the same physical host.` → Mỗi VM chạy kernel riêng dù cùng dùng một host vật lý.
**Liên kết tiếng Hàn:** `가상 머신`, `VM`.

## 3. hardware-assisted virtualization /ˈhɑrdˌwɛr əˈsɪstɪd ˌvɝtʃuələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** virtualization supported directly by processor features that let guest operating systems execute privileged operations under controlled hardware mediation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảo hóa có CPU hỗ trợ; thay vì software phải giả lập mọi thao tác đặc quyền, processor có chế độ riêng giúp guest chạy gần native hơn.
**Grammar & collocations:** `hardware virtualization extensions` — extension ảo hóa của CPU; `enable virtualization support` — bật hỗ trợ ảo hóa.
**Examples:** `Hardware-assisted virtualization reduced the amount of instruction rewriting required by the hypervisor.` → Hỗ trợ ảo hóa từ hardware giảm lượng instruction mà hypervisor phải rewrite.
**Liên kết tiếng Hàn:** `하드웨어 지원 가상화`.

## 4. guest operating system /ɡɛst ˈɑpəˌreɪtɪŋ ˈsɪstəm/
**Part of speech:** noun
**Core meaning (English):** an operating system running inside a virtual machine rather than directly controlling the physical machine.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ điều hành bên trong VM; nó “nghĩ” mình có hardware riêng nhưng thực tế các tài nguyên được hypervisor cung cấp.
**Grammar & collocations:** `guest OS` — guest operating system; `guest kernel` — kernel bên trong VM.
**Examples:** `The guest operating system detected a virtual network adapter rather than the host's physical NIC.` → Guest OS thấy network adapter ảo thay vì NIC vật lý của host.
**Liên kết tiếng Hàn:** `게스트 운영체제`.

## 5. host operating system /hoʊst ˈɑpəˌreɪtɪŋ ˈsɪstəm/
**Part of speech:** noun
**Core meaning (English):** the operating system on the physical machine that provides the environment in which hosted virtualization software runs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ điều hành của máy chủ vật lý trong mô hình hosted virtualization; guest nằm “bên trong”, host OS nằm sát hardware hơn.
**Grammar & collocations:** `host OS resources` — tài nguyên host OS; `host kernel` — kernel của host.
**Examples:** `A type-2 hypervisor relies on the host operating system for many device-management functions.` → Hypervisor type 2 dựa vào host OS cho nhiều chức năng quản lý device.
**Liên kết tiếng Hàn:** `호스트 운영체제`.

## 6. VM exit /ˌviːˈɛm ˈɛɡzɪt/
**Part of speech:** noun
**Core meaning (English):** a transition in which execution leaves guest context and returns control to the hypervisor because an event requires privileged handling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** guest đang chạy thì “thoát” về hypervisor; thường xảy ra khi guest chạm thao tác mà hardware yêu cầu hypervisor xử lý.
**Grammar & collocations:** `trigger a VM exit` — kích hoạt VM exit; `exit latency` — latency của VM exit.
**Examples:** `Frequent VM exits increased overhead because the processor repeatedly switched between guest and hypervisor contexts.` → VM exit quá thường xuyên làm overhead tăng vì CPU liên tục đổi giữa guest và hypervisor.
**Liên kết tiếng Hàn:** `VM 엑시트`.

## 7. trap-and-emulate /træp ænd ˈɛmjəˌleɪt/
**Part of speech:** noun; adjective
**Core meaning (English):** a virtualization technique in which sensitive guest operations trap to the hypervisor, which then emulates their intended effect safely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bắt thao tác đặc quyền rồi mô phỏng; guest thử làm việc nhạy cảm, hypervisor chặn lại và thực hiện phiên bản an toàn thay cho nó.
**Grammar & collocations:** `trap-and-emulate mechanism` — cơ chế trap-and-emulate; `privileged instruction trap` — trap instruction đặc quyền.
**Examples:** `The hypervisor used trap-and-emulate for device operations that could not execute directly in guest mode.` → Hypervisor dùng trap-and-emulate cho các thao tác device không thể chạy trực tiếp trong guest mode.
**Liên kết tiếng Hàn:** `트랩 앤 에뮬레이트`.

## 8. paravirtualization /ˌpærəˌvɝtʃuələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** virtualization in which a guest cooperates with the hypervisor through specialized interfaces instead of behaving as though all hardware were fully native.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** guest biết mình đang bị ảo hóa và chủ động dùng interface tối ưu với hypervisor thay vì giả vờ hardware hoàn toàn thật.
**Grammar & collocations:** `paravirtualized driver` — driver tối ưu cho môi trường ảo; `PV interface` — interface paravirtualized.
**Examples:** `A paravirtualized network driver reduced emulation overhead and improved packet throughput.` → Driver network paravirtualized giảm overhead mô phỏng và tăng throughput packet.
**Liên kết tiếng Hàn:** `반가상화`.

## 9. virtual CPU /ˈvɝtʃuəl ˌsiːpiːˈjuː/
**Part of speech:** noun
**Core meaning (English):** a logical processor presented to a virtual machine and scheduled onto one or more physical CPU cores by the hypervisor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** CPU logic của VM; vCPU không nhất thiết tương ứng 1:1 với core vật lý mà được hypervisor schedule lên hardware thật.
**Grammar & collocations:** `vCPU allocation` — cấp vCPU; `vCPU scheduling` — lập lịch vCPU.
**Examples:** `The virtual CPU was runnable, but it waited because the host's physical cores were oversubscribed.` → vCPU sẵn sàng chạy nhưng phải chờ vì physical core của host bị oversubscribe.
**Liên kết tiếng Hàn:** `가상 CPU`, `vCPU`.

## 10. memory ballooning /ˈmɛməri bəˈluːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** a technique that lets a hypervisor reclaim memory from a guest by making a special guest driver allocate and surrender pages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “thổi bóng” trong guest để ép guest nhường RAM; balloon phình lên thì memory usable của VM giảm và host lấy lại page.
**Grammar & collocations:** `balloon driver` — driver balloon; `inflate the balloon` — tăng mức reclaim; `ballooned memory` — memory đã reclaim.
**Examples:** `The host used memory ballooning to reclaim idle pages from lightly loaded guests.` → Host dùng memory ballooning để lấy lại các page nhàn rỗi từ guest ít tải.
**Liên kết tiếng Hàn:** `메모리 벌루닝`.

## 11. memory overcommit /ˈmɛməri ˌoʊvərkəˈmɪt/
**Part of speech:** noun
**Core meaning (English):** allocating virtual machines more nominal memory than the host physically owns, based on the expectation that not all guests use their maximum simultaneously.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấp “trên giấy” nhiều RAM hơn RAM thật; hiệu quả khi guest không dùng hết cùng lúc nhưng rủi ro khi tất cả tăng tải.
**Grammar & collocations:** `overcommit ratio` — tỷ lệ overcommit; `memory pressure` — áp lực memory.
**Examples:** `Aggressive memory overcommit caused swapping when several guests reached peak demand together.` → Memory overcommit quá mạnh gây swapping khi nhiều guest cùng đạt peak.
**Liên kết tiếng Hàn:** `메모리 오버커밋`.

## 12. huge page /hjuːdʒ peɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a memory page substantially larger than the default page size, used to reduce translation overhead for large memory regions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** page kích thước lớn; ít page hơn nghĩa là TLB phải quản lý ít mapping hơn, hữu ích cho workload memory lớn.
**Grammar & collocations:** `huge-page backing` — memory backend bằng huge page; `transparent huge pages` — huge page tự động.
**Examples:** `Huge pages reduced translation overhead for the memory-intensive virtual appliance.` → Huge page giảm overhead address translation cho virtual appliance dùng nhiều memory.
**Liên kết tiếng Hàn:** `대용량 페이지`, `휴지 페이지`.

## 13. device passthrough /dɪˈvaɪs ˈpæsˌθruː/
**Part of speech:** noun
**Core meaning (English):** assigning a physical hardware device directly to a virtual machine so the guest can access it with minimal hypervisor mediation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa device vật lý thẳng cho VM; đổi lại performance tốt nhưng giảm tính linh hoạt khi migrate hoặc chia sẻ device.
**Grammar & collocations:** `PCI passthrough` — passthrough PCI; `passthrough device` — device được gán trực tiếp.
**Examples:** `Device passthrough gave the guest near-native accelerator performance.` → Device passthrough cho guest performance accelerator gần native.
**Liên kết tiếng Hàn:** `디바이스 패스스루`.

## 14. IOMMU /ˌaɪˌoʊˌɛmˌɛmˈjuː/
**Part of speech:** noun
**Core meaning (English):** hardware that translates and restricts device DMA addresses, providing memory isolation for devices and virtual machines.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “MMU cho I/O”; device DMA không được chạm RAM tùy ý mà phải đi qua mapping và permission của IOMMU.
**Grammar & collocations:** `IOMMU mapping` — mapping IOMMU; `DMA isolation` — cô lập DMA.
**Examples:** `The IOMMU prevented the passed-through NIC from accessing memory owned by another guest.` → IOMMU ngăn NIC passthrough truy cập memory thuộc guest khác.
**Liên kết tiếng Hàn:** `입출력 메모리 관리 장치`, `IOMMU`.

## 15. SR-IOV /ˌɛsˌɑr ˌaɪˌoʊˈviː/
**Part of speech:** noun
**Core meaning (English):** a PCIe capability that lets one physical device expose multiple lightweight virtual functions that can be assigned independently to guests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một device vật lý chia thành nhiều function ảo gần-hardware; nhiều VM có thể nhận virtual function riêng mà không cần full emulation.
**Grammar & collocations:** `SR-IOV virtual function` — virtual function SR-IOV; `physical function` — physical function quản lý device.
**Examples:** `SR-IOV allowed several virtual machines to share the NIC while preserving high packet rates.` → SR-IOV cho nhiều VM chia sẻ NIC nhưng vẫn giữ packet rate cao.
**Liên kết tiếng Hàn:** `SR-IOV`, `단일 루트 I/O 가상화`.

## 16. live migration /laɪv maɪˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** moving a running virtual machine from one physical host to another with little or no visible service interruption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển VM đang chạy sang host khác mà service gần như không dừng; memory state được copy trong lúc guest vẫn hoạt động.
**Grammar & collocations:** `perform live migration` — thực hiện live migration; `migration downtime` — thời gian pause khi chuyển.
**Examples:** `The cluster used live migration to evacuate workloads before hardware maintenance.` → Cluster dùng live migration để chuyển workload khỏi host trước bảo trì hardware.
**Liên kết tiếng Hàn:** `라이브 마이그레이션`, `실시간 이전`.

## 17. dirty-page tracking /ˈdɝti peɪdʒ ˈtrækɪŋ/
**Part of speech:** noun
**Core meaning (English):** recording which memory pages have changed since a reference point so only modified pages need to be recopied or saved.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** theo dõi page đã bị sửa; đặc biệt hữu ích khi migrate vì page không đổi không cần copy lại.
**Grammar & collocations:** `track dirty pages` — theo dõi page bẩn; `dirty-page bitmap` — bitmap page đã sửa.
**Examples:** `Dirty-page tracking let the migration process recopy only memory modified during the previous transfer round.` → Dirty-page tracking giúp migration chỉ copy lại memory đã thay đổi trong vòng trước.
**Liên kết tiếng Hàn:** `더티 페이지 추적`.

## 18. checkpoint/restore /ˈtʃɛkˌpɔɪnt rɪˈstɔr/
**Part of speech:** noun
**Core meaning (English):** saving enough execution state to pause a workload and later reconstruct it so execution can continue from approximately the saved point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đóng băng trạng thái chạy rồi khôi phục; lưu memory, process state và metadata cần thiết để tiếp tục sau này.
**Grammar & collocations:** `checkpoint state` — trạng thái checkpoint; `restore execution` — khôi phục execution.
**Examples:** `Checkpoint/restore allowed the long-running workload to move without restarting from the beginning.` → Checkpoint/restore cho phép workload chạy lâu được chuyển đi mà không phải bắt đầu lại.
**Liên kết tiếng Hàn:** `체크포인트/복원`.

## 19. nested virtualization /ˈnɛstɪd ˌvɝtʃuələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** running a hypervisor inside a virtual machine so that the guest itself can create and manage additional virtual machines.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảo hóa lồng nhau; VM bên ngoài lại đóng vai host cho VM tầng trong.
**Grammar & collocations:** `nested hypervisor` — hypervisor tầng trong; `enable nested virtualization` — bật nested virtualization.
**Examples:** `Nested virtualization let developers test hypervisor behavior inside cloud instances.` → Nested virtualization cho developer test hypervisor bên trong cloud instance.
**Liên kết tiếng Hàn:** `중첩 가상화`.

## 20. CPU pinning /ˌsiːpiːˈjuː ˈpɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** constraining a virtual CPU or process to run on selected physical CPU cores instead of allowing unrestricted scheduler placement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “ghim” workload vào core cụ thể; giúp ổn định locality và latency nhưng giảm flexibility của scheduler.
**Grammar & collocations:** `pin a vCPU` — ghim vCPU; `CPU affinity` — affinity CPU; `dedicated core` — core dành riêng.
**Examples:** `CPU pinning reduced latency variation for the real-time virtual appliance.` → CPU pinning giảm dao động latency cho virtual appliance real-time.
**Liên kết tiếng Hàn:** `CPU 피닝`, `CPU 고정`.

## Review in context

A **hypervisor** creates each **virtual machine**, using **hardware-assisted virtualization** so the **guest operating system** can run efficiently while remaining separated from the **host operating system**. Sensitive operations may trigger a **VM exit**, where **trap-and-emulate** handles privileged behavior, while **paravirtualization** can reduce overhead through cooperative drivers. Each **virtual CPU** is scheduled on physical cores, and hosts may use **memory ballooning** and **memory overcommit** to reclaim or share RAM more aggressively. **Huge pages** reduce translation overhead for large guests. For high-performance I/O, **device passthrough** depends on an **IOMMU**, while **SR-IOV** lets one adapter expose multiple assignable functions. During **live migration**, **dirty-page tracking** identifies memory that must be recopied. **Checkpoint/restore** can preserve execution state, **nested virtualization** enables hypervisors inside guests, and **CPU pinning** can stabilize latency-sensitive workloads.

**Bản dịch tiếng Việt:** **Hypervisor** tạo từng **virtual machine** và dùng **hardware-assisted virtualization** để **guest operating system** chạy hiệu quả nhưng vẫn tách biệt khỏi **host operating system**. Các thao tác nhạy cảm có thể gây **VM exit**, lúc đó **trap-and-emulate** xử lý hành vi đặc quyền, còn **paravirtualization** có thể giảm overhead bằng driver hợp tác với hypervisor. Mỗi **virtual CPU** được schedule lên core vật lý, và host có thể dùng **memory ballooning** cùng **memory overcommit** để reclaim hoặc chia RAM mạnh hơn. **Huge page** giảm overhead translation cho guest lớn. Với I/O hiệu năng cao, **device passthrough** dựa vào **IOMMU**, còn **SR-IOV** cho một adapter cung cấp nhiều function có thể gán riêng. Trong **live migration**, **dirty-page tracking** xác định memory cần copy lại. **Checkpoint/restore** giữ execution state, **nested virtualization** cho phép hypervisor chạy bên trong guest, và **CPU pinning** giúp workload nhạy latency ổn định hơn.