# C2 Vocabulary — Memory models and concurrent systems

This lesson follows how modern processors and runtimes move data through memory, coordinate concurrent threads, and preserve correctness when operations can be reordered or executed in parallel.

Flow: **cache hierarchy → cache line → cache coherence → MESI protocol → false sharing → memory consistency model → sequential consistency → memory ordering → acquire semantics → release semantics → memory barrier → atomic operation → compare-and-swap → lock-free algorithm → wait-free algorithm → ABA problem → hazard pointer → read-copy-update → NUMA → memory locality**.

## 1. cache hierarchy /kæʃ ˈhaɪəˌrɑrki/
**Part of speech:** noun
**Core meaning (English):** the layered organization of fast, small caches and slower, larger memory used to reduce average data-access latency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ phân cấp cache; hình dung dữ liệu được đặt qua nhiều “tầng gần CPU” như L1, L2, L3 trước khi phải đi xa hơn tới main memory.
**Grammar & collocations:** `multi-level cache hierarchy` — hệ cache nhiều tầng; `cache-hierarchy design` — thiết kế phân cấp cache; `move through the cache hierarchy` — đi qua các tầng cache.
**Examples:** `A well-designed cache hierarchy keeps frequently used data close to the processor and reduces expensive memory accesses.` → Một hệ phân cấp cache tốt giữ dữ liệu dùng thường xuyên gần bộ xử lý và giảm những lần truy cập memory tốn kém.
**Liên kết tiếng Hàn:** `캐시 계층 구조` (kaesi gyecheung gujo) — hệ phân cấp cache.

## 2. cache line /kæʃ laɪn/
**Part of speech:** noun
**Core meaning (English):** the fixed-size block of memory transferred between main memory and a processor cache as one unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng cache; hình dung CPU không kéo từng byte riêng lẻ mà lấy cả một “khối nhỏ” dữ liệu vào cache cùng lúc.
**Grammar & collocations:** `cache-line size` — kích thước cache line; `cache-line boundary` — ranh giới cache line; `fit within one cache line` — nằm gọn trong một cache line.
**Examples:** `Two unrelated variables can still interfere with each other when they occupy the same cache line.` → Hai biến không liên quan vẫn có thể ảnh hưởng lẫn nhau khi chúng nằm trên cùng một cache line.
**Liên kết tiếng Hàn:** `캐시 라인` (kaesi rain) — dòng cache.

## 3. cache coherence /kæʃ koʊˈhɪrəns/
**Part of speech:** noun
**Core meaning (English):** the property that keeps copies of shared memory stored in multiple processor caches sufficiently consistent with one another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính nhất quán cache; hình dung nhiều core giữ bản sao của cùng dữ liệu, nên hệ thống phải đảm bảo khi một core sửa dữ liệu thì các core khác không tiếp tục dùng bản cũ sai lệch.
**Grammar & collocations:** `cache-coherence protocol` — giao thức nhất quán cache; `maintain cache coherence` — duy trì tính nhất quán cache; `coherence traffic` — lưu lượng trao đổi để giữ coherence.
**Examples:** `Cache coherence prevents one core from indefinitely reading a stale copy after another core updates the same location.` → Cache coherence ngăn một core tiếp tục đọc bản sao cũ vô thời hạn sau khi core khác đã cập nhật cùng vị trí nhớ.
**Liên kết tiếng Hàn:** `캐시 일관성` (kaesi ilgwanseong) — tính nhất quán cache.

## 4. MESI protocol /ˈmɛsi ˈproʊtəˌkɔl/
**Part of speech:** noun
**Core meaning (English):** a cache-coherence protocol that tracks each cache line using the states Modified, Exclusive, Shared, and Invalid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giao thức MESI; hình dung mỗi cache line mang một nhãn trạng thái để các core biết dữ liệu đang thuộc riêng ai, được chia sẻ, đã bị sửa hay không còn hợp lệ.
**Grammar & collocations:** `MESI state` — trạng thái MESI; `MESI transition` — chuyển trạng thái MESI; `MESI-based coherence` — coherence dựa trên MESI.
**Examples:** `A write to a shared line can trigger a MESI protocol transition that invalidates copies in other cores.` → Một lần ghi vào line đang được chia sẻ có thể kích hoạt chuyển trạng thái MESI và làm các bản sao ở core khác mất hiệu lực.
**Liên kết tiếng Hàn:** `MESI 프로토콜` — giao thức MESI.

## 5. false sharing /fɔls ˈʃɛrɪŋ/
**Part of speech:** noun
**Core meaning (English):** a performance problem in which threads modify different variables that happen to occupy the same cache line, causing unnecessary coherence traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia sẻ giả; hình dung hai thread không thật sự dùng chung biến nhưng biến của chúng nằm chung cache line, nên mỗi lần một bên ghi dữ liệu lại khiến cache của bên kia phải cập nhật hoặc invalidate.
**Grammar & collocations:** `false-sharing hotspot` — điểm nóng false sharing; `avoid false sharing` — tránh false sharing; `cache-line padding` — padding để tách dữ liệu sang line khác.
**Examples:** `Padding the counters onto separate cache lines removed the false sharing that had limited throughput.` → Đưa các counter sang những cache line riêng đã loại bỏ false sharing từng làm giảm throughput.
**Liên kết tiếng Hàn:** `거짓 공유` (geojit gongyu), thường dùng `false sharing` — chia sẻ giả.

## 6. memory consistency model /ˈmɛməri kənˈsɪstənsi ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a formal specification describing which orders of memory reads and writes may be observed by different threads or processors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình nhất quán bộ nhớ; hình dung đây là “luật quan sát” quy định các thread có thể nhìn thấy các thao tác đọc/ghi theo những thứ tự nào.
**Grammar & collocations:** `weak memory consistency model` — mô hình nhất quán yếu; `memory-model guarantee` — đảm bảo của memory model; `reason under the memory model` — suy luận theo memory model.
**Examples:** `The memory consistency model determines whether another thread may observe the flag update before the associated data write.` → Memory consistency model quyết định thread khác có thể thấy flag được cập nhật trước lần ghi dữ liệu liên quan hay không.
**Liên kết tiếng Hàn:** `메모리 일관성 모델` (memori ilgwanseong model) — mô hình nhất quán bộ nhớ.

## 7. sequential consistency /sɪˈkwɛnʃəl kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** a strong consistency model in which all operations appear to occur in one global order that preserves each thread's program order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhất quán tuần tự; hình dung mọi thao tác của các thread có thể được xếp thành một hàng duy nhất, và thứ tự nội bộ của từng thread vẫn được giữ nguyên.
**Grammar & collocations:** `sequentially consistent execution` — thực thi nhất quán tuần tự; `sequential-consistency guarantee` — đảm bảo SC; `weaken sequential consistency` — làm yếu yêu cầu SC.
**Examples:** `Sequential consistency gives programmers a simple mental model, although enforcing it everywhere can restrict optimization.` → Sequential consistency cho lập trình viên một mental model đơn giản, dù áp dụng nó ở mọi nơi có thể hạn chế tối ưu hóa.
**Liên kết tiếng Hàn:** `순차적 일관성` (sunchajeok ilgwanseong) — nhất quán tuần tự.

## 8. memory ordering /ˈmɛməri ˈɔrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** the rules governing the order in which memory operations become visible or are allowed to appear to execute relative to one another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự thao tác bộ nhớ; hình dung source code viết A rồi B nhưng hardware/compiler có thể sắp xếp khác nếu memory-ordering rule cho phép và không phá semantic được đảm bảo.
**Grammar & collocations:** `relaxed memory ordering` — memory ordering nới lỏng; `memory-order constraint` — ràng buộc thứ tự bộ nhớ; `enforce ordering` — ép thứ tự.
**Examples:** `The bug only appeared on hardware with weaker memory ordering because two stores became visible in an unexpected order.` → Bug chỉ xuất hiện trên hardware có memory ordering yếu hơn vì hai lần store trở nên visible theo thứ tự không mong đợi.
**Liên kết tiếng Hàn:** `메모리 순서` (memori sunseo), `메모리 오더링` — thứ tự thao tác bộ nhớ.

## 9. acquire semantics /əˈkwaɪər səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** ordering semantics that prevent later memory operations from being observed as occurring before a designated acquire operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** semantic acquire; hình dung một thao tác acquire như “cổng vào”: sau khi thread đi qua cổng này, các thao tác phía sau không được trôi ngược lên trước nó.
**Grammar & collocations:** `acquire load` — load với acquire semantics; `acquire operation` — thao tác acquire; `use acquire semantics` — dùng semantic acquire.
**Examples:** `The consumer used an acquire load so that data published before the matching release became visible after the flag was observed.` → Consumer dùng acquire load để dữ liệu được publish trước release tương ứng trở nên visible sau khi flag được quan sát.
**Liên kết tiếng Hàn:** `획득 시맨틱` (hoekdeuk simaentik), thường dùng `acquire semantics` — semantic acquire.

## 10. release semantics /rɪˈlis səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** ordering semantics that prevent earlier memory operations from being observed as occurring after a designated release operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** semantic release; hình dung một thao tác release như “cổng ra”: mọi ghi dữ liệu cần publish phải hoàn tất về mặt ordering trước khi tín hiệu release được phát ra.
**Grammar & collocations:** `release store` — store với release semantics; `release operation` — thao tác release; `acquire-release pair` — cặp acquire-release.
**Examples:** `The producer used a release store when publishing the ready flag after initializing the shared object.` → Producer dùng release store khi publish ready flag sau khi khởi tạo shared object.
**Liên kết tiếng Hàn:** `해제 시맨틱` (haeje simaentik), thường dùng `release semantics` — semantic release.

## 11. memory barrier /ˈmɛməri ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** an instruction or synchronization mechanism that constrains reordering of memory operations across a specified point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàng rào bộ nhớ; hình dung một vạch chặn buộc một số thao tác memory phía trước và phía sau không được tự do vượt qua nhau.
**Grammar & collocations:** `full memory barrier` — memory barrier đầy đủ; `insert a memory barrier` — chèn memory barrier; `barrier instruction` — lệnh barrier.
**Examples:** `The memory barrier ensured that initialization writes were globally ordered before the publication step.` → Memory barrier đảm bảo các lần ghi khởi tạo được sắp thứ tự trước bước publish trên toàn hệ thống.
**Liên kết tiếng Hàn:** `메모리 배리어` (memori baerieo), `메모리 장벽` — hàng rào bộ nhớ.

## 12. atomic operation /əˈtɑmɪk ˌɑpəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** an operation that appears indivisible with respect to competing threads, so no other thread can observe a partially completed state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thao tác nguyên tử; hình dung thao tác xảy ra như một “khối không thể chẻ đôi”, thread khác chỉ thấy trạng thái trước hoặc sau chứ không thấy trạng thái nửa chừng.
**Grammar & collocations:** `atomic read-modify-write` — thao tác đọc-sửa-ghi nguyên tử; `atomic variable` — biến atomic; `perform atomically` — thực hiện một cách nguyên tử.
**Examples:** `An atomic operation allowed multiple threads to increment the counter without exposing an intermediate update.` → Atomic operation cho phép nhiều thread tăng counter mà không làm lộ trạng thái cập nhật dở dang.
**Liên kết tiếng Hàn:** `원자적 연산` (wonjajeok yeonsan) — thao tác nguyên tử.

## 13. compare-and-swap /kəmˈpɛr ən swɑp/
**Part of speech:** noun
**Core meaning (English):** an atomic instruction that updates a memory location only if its current value matches an expected value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so sánh rồi hoán đổi; hình dung thread hỏi “giá trị vẫn đúng như tôi nghĩ chứ?” và chỉ ghi giá trị mới nếu câu trả lời là có, tất cả diễn ra atomically.
**Grammar & collocations:** `compare-and-swap loop` — vòng lặp CAS; `CAS operation` — thao tác CAS; `failed compare-and-swap` — CAS thất bại vì giá trị đã đổi.
**Examples:** `The lock-free stack used compare-and-swap to replace the head pointer only when no competing thread had changed it first.` → Stack lock-free dùng compare-and-swap để thay head pointer chỉ khi chưa có thread cạnh tranh nào thay đổi nó trước.
**Liên kết tiếng Hàn:** `비교 후 교환` (bigyo hu gyohwan), thường gọi `CAS` — compare-and-swap.

## 14. lock-free algorithm /lɑk fri ˈælɡəˌrɪðəm/
**Part of speech:** noun
**Core meaning (English):** a concurrent algorithm that guarantees system-wide progress without requiring mutual-exclusion locks, even if individual threads may repeatedly retry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán lock-free; hình dung không thread nào giữ “chìa khóa độc quyền” chặn cả hệ thống: dù một thread có thể bị retry, ít nhất một thread vẫn luôn tiến lên.
**Grammar & collocations:** `lock-free data structure` — cấu trúc dữ liệu lock-free; `lock-free progress guarantee` — đảm bảo tiến triển lock-free; `implement lock-free` — triển khai theo kiểu lock-free.
**Examples:** `The queue is lock-free because contention can delay one thread but cannot stop all threads from making progress.` → Queue là lock-free vì contention có thể làm một thread chậm lại nhưng không thể khiến mọi thread cùng ngừng tiến triển.
**Liên kết tiếng Hàn:** `락프리 알고리즘` (rakpeuri algorijeum) — thuật toán lock-free.

## 15. wait-free algorithm /weɪt fri ˈælɡəˌrɪðəm/
**Part of speech:** noun
**Core meaning (English):** a concurrent algorithm that guarantees every participating thread completes its operation within a bounded number of its own steps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán wait-free; mạnh hơn lock-free ở chỗ không chỉ hệ thống nói chung tiến lên mà từng thread đều có giới hạn số bước để hoàn thành thao tác của mình.
**Grammar & collocations:** `wait-free guarantee` — đảm bảo wait-free; `wait-free implementation` — triển khai wait-free; `bounded progress` — tiến triển có giới hạn.
**Examples:** `A wait-free algorithm must guarantee progress for each thread rather than merely guaranteeing progress somewhere in the system.` → Thuật toán wait-free phải đảm bảo từng thread đều tiến triển, không chỉ đảm bảo đâu đó trong hệ thống có thread đang tiến lên.
**Liên kết tiếng Hàn:** `웨이트프리 알고리즘` (weiteupeuri algorijeum) — thuật toán wait-free.

## 16. ABA problem /ˌeɪ bi ˈeɪ ˈprɑbləm/
**Part of speech:** noun
**Core meaning (English):** a concurrency hazard in which a value changes from A to B and back to A, causing a thread to incorrectly assume that nothing changed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vấn đề ABA; hình dung thread rời mắt khỏi giá trị A, trong lúc đó nó thành B rồi quay lại A, khiến phép so sánh đơn giản tưởng rằng trạng thái chưa từng thay đổi.
**Grammar & collocations:** `ABA hazard` — nguy cơ ABA; `avoid the ABA problem` — tránh ABA; `version-tagged pointer` — pointer gắn version để phát hiện thay đổi.
**Examples:** `The compare-and-swap succeeded despite an intervening removal and reinsertion, exposing the classic ABA problem.` → Compare-and-swap vẫn thành công dù đã có thao tác xóa rồi chèn lại ở giữa, tạo ra ABA problem điển hình.
**Liên kết tiếng Hàn:** `ABA 문제` — vấn đề ABA.

## 17. hazard pointer /ˈhæzərd ˈpɔɪntər/
**Part of speech:** noun
**Core meaning (English):** a safe-memory-reclamation technique in which threads publish pointers to objects they may still access so those objects are not freed prematurely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hazard pointer; hình dung thread gắn một “biển đang sử dụng” lên object để thread khác biết chưa được giải phóng vùng nhớ đó.
**Grammar & collocations:** `publish a hazard pointer` — publish hazard pointer; `hazard-pointer scheme` — cơ chế hazard pointer; `safe reclamation` — thu hồi bộ nhớ an toàn.
**Examples:** `The reclamation code delayed freeing the node while any thread still published a hazard pointer to it.` → Code thu hồi trì hoãn việc free node khi vẫn còn thread publish hazard pointer trỏ tới node đó.
**Liên kết tiếng Hàn:** `해저드 포인터` (haejeodeu pointeo) — hazard pointer.

## 18. read-copy-update /rid ˈkɑpi ʌpˈdeɪt/
**Part of speech:** noun
**Core meaning (English):** a synchronization technique that lets readers access data with very low overhead while writers create a new version and defer reclamation of the old one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế read-copy-update, thường gọi RCU; hình dung reader tiếp tục đọc bản cũ ổn định trong khi writer tạo bản mới, sau đó bản cũ chỉ bị thu hồi khi chắc chắn reader cũ đã rời đi.
**Grammar & collocations:** `RCU read-side critical section` — critical section phía reader của RCU; `RCU grace period` — khoảng chờ trước khi thu hồi bản cũ; `RCU-protected data` — dữ liệu được bảo vệ bằng RCU.
**Examples:** `Read-copy-update allowed frequent readers to proceed without taking a conventional lock on the shared structure.` → Read-copy-update cho phép các reader hoạt động thường xuyên mà không cần lấy lock truyền thống trên cấu trúc dùng chung.
**Liên kết tiếng Hàn:** `RCU`, `읽기-복사-갱신` (ilkgi-boksa-gaengsin) — read-copy-update.

## 19. NUMA /ˈnuːmə/
**Part of speech:** noun
**Core meaning (English):** non-uniform memory access, an architecture in which memory-access latency depends on which processor or node owns the physical memory being accessed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiến trúc truy cập bộ nhớ không đồng đều; hình dung mỗi CPU socket có vùng memory “gần nhà” nhanh hơn và vùng memory của node khác “xa nhà” chậm hơn.
**Grammar & collocations:** `NUMA node` — node NUMA; `NUMA-aware allocation` — cấp phát có nhận thức NUMA; `remote NUMA access` — truy cập memory ở node xa.
**Examples:** `The service improved latency after its threads and memory allocations were kept on the same NUMA node.` → Service cải thiện latency sau khi thread và vùng memory của chúng được giữ trên cùng NUMA node.
**Liên kết tiếng Hàn:** `비균일 메모리 접근` (bigyunil memori jeopgeun), `NUMA` — truy cập bộ nhớ không đồng đều.

## 20. memory locality /ˈmɛməri loʊˈkæləti/
**Part of speech:** noun
**Core meaning (English):** the tendency or design principle of accessing data that is close together in address space or repeatedly reused within a short period, improving cache efficiency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính cục bộ bộ nhớ; hình dung chương trình chạy hiệu quả hơn khi nó liên tục dùng dữ liệu vừa dùng gần đây hoặc dữ liệu nằm sát nhau thay vì nhảy lung tung khắp memory.
**Grammar & collocations:** `spatial locality` — locality theo không gian; `temporal locality` — locality theo thời gian; `improve memory locality` — cải thiện tính cục bộ bộ nhớ.
**Examples:** `Reorganizing the data structure improved memory locality and sharply reduced cache misses during traversal.` → Tổ chức lại cấu trúc dữ liệu đã cải thiện memory locality và giảm mạnh cache miss khi duyệt dữ liệu.
**Liên kết tiếng Hàn:** `메모리 지역성` (memori jiyeokseong), `참조 지역성` — tính cục bộ bộ nhớ.

## Review in context

On a modern multicore machine, performance depends on far more than raw clock speed. A **cache hierarchy** keeps frequently accessed data close to each core, but data moves in units called a **cache line**, and multiple private caches require **cache coherence**. A protocol such as the **MESI protocol** tracks ownership and validity, yet even correct programs can suffer from **false sharing** when independent variables occupy the same line. Correctness is governed by a **memory consistency model**: while **sequential consistency** offers a simple global-order mental model, real machines often permit weaker **memory ordering**. Concurrent code therefore uses **acquire semantics** and **release semantics**, sometimes reinforced by a **memory barrier**, to establish the visibility relationships it needs. An **atomic operation** such as **compare-and-swap** can update shared state without a conventional mutex and is a building block for a **lock-free algorithm** or, under a stronger progress guarantee, a **wait-free algorithm**. These techniques introduce subtle hazards such as the **ABA problem**, so safe reclamation may rely on a **hazard pointer** or a scheme such as **read-copy-update**. At larger hardware scales, **NUMA** means that not all memory is equally close to every processor, making **memory locality** a central performance concern.

**Bản dịch:** Trên một máy multicore hiện đại, hiệu năng phụ thuộc vào nhiều yếu tố hơn rất nhiều so với tốc độ clock thuần túy. **Cache hierarchy** giữ dữ liệu được truy cập thường xuyên gần từng core, nhưng dữ liệu di chuyển theo đơn vị **cache line**, và nhiều cache riêng cần **cache coherence**. Một giao thức như **MESI protocol** theo dõi quyền sở hữu và tính hợp lệ, nhưng ngay cả chương trình đúng vẫn có thể gặp **false sharing** khi các biến độc lập nằm trên cùng một line. Tính đúng đắn được chi phối bởi **memory consistency model**: trong khi **sequential consistency** cung cấp mental model đơn giản về một thứ tự toàn cục, máy thực thường cho phép **memory ordering** yếu hơn. Vì vậy code concurrent dùng **acquire semantics** và **release semantics**, đôi khi được tăng cường bằng **memory barrier**, để thiết lập quan hệ visibility cần thiết. Một **atomic operation** như **compare-and-swap** có thể cập nhật shared state mà không cần mutex truyền thống và là thành phần nền của **lock-free algorithm** hoặc, với đảm bảo tiến triển mạnh hơn, **wait-free algorithm**. Các kỹ thuật này tạo ra những hazard tinh vi như **ABA problem**, nên việc thu hồi memory an toàn có thể dựa vào **hazard pointer** hoặc cơ chế như **read-copy-update**. Ở quy mô hardware lớn hơn, **NUMA** khiến memory không nằm gần mọi processor như nhau, biến **memory locality** thành một vấn đề hiệu năng cốt lõi.