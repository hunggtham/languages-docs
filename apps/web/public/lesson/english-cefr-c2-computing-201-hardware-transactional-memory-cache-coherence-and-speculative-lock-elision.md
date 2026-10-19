# C2 Vocabulary 201 — Hardware transactional memory (HTM), cache coherence transaction tracking, and speculative lock elision

## 1. transactional /trænˈzækʃənəl/
**Loại từ & vị trí trong câu:** `adjective`. Attributive or predicative adjective modifying system architectures or execution protocols in multi-core processors.
**Core meaning — English:** Pertaining to or operating through discrete, atomic units of execution that either commit fully or abort completely without leaving partial side effects.
**Core meaning & mental image — Tiếng Việt:** Thuộc tính giao dịch (nguyên tử) — hình ảnh một tấm séc ngân hàng hoặc được thanh toán toàn bộ hoặc bị hủy bỏ hoàn toàn, không có trạng thái trung gian dở dang.
**Grammar & collocations:** `transactional execution` — quá trình thực thi giao dịch; `transactional memory` — bộ nhớ giao dịch; `transactional state` — trạng thái giao dịch.
**Register & nuance:** Formal, highly technical computer architecture terminology. Distinguished from database transactions by its reliance on processor cache lines and hardware exception handlers.
**Examples:** The new microarchitecture incorporates hardware transactional memory to streamline critical sections without heavy lock acquisition overhead. → Vi kiến trúc mới tích hợp bộ nhớ giao dịch phần cứng để tối ưu hóa các đoạn mã trọng yếu mà không chịu chi phí lớn khi thiết lập khóa.
**Liên kết tiếng Hàn:** 거래 (去來) — giao dịch

## 2. speculative /ˈspekjələtɪv/
**Loại từ & vị trí trong câu:** `adjective`. Used attributively to describe execution modes or optimization techniques that guess future outcomes to maximize performance.
**Core meaning — English:** Based on probabilistic prediction or prescient assumption rather than established certainty, subject to rollback if the prediction proves invalid.
**Core meaning & mental image — Tiếng Việt:** Mang tính phỏng đoán, suy diễn — hình ảnh một người đi tắt đón đầu trước ngã rẽ, sẵn sàng quay đầu lại nếu gặp đường cụt.
**Grammar & collocations:** `speculative execution` — thực thi phỏng đoán; `speculative store bypass` — bỏ qua lưu trữ phỏng đoán; `speculative path` — luồng phỏng đoán.
**Register & nuance:** Advanced technical register. Essential in discussions of modern pipelined processors, out-of-order execution, and hardware security mitigations.
**Examples:** Speculative lock elision allows multiple threads to execute critical sections concurrently by temporarily omitting lock writes, assuming no actual data conflict will occur. → Kỹ thuật bỏ qua khóa phỏng đoán cho phép nhiều luồng thực thi các đoạn mã trọng yếu đồng thời bằng cách tạm thời bỏ qua thao tác ghi khóa, với giả định sẽ không xảy ra xung đột dữ liệu thực tế.
**Liên kết tiếng Hàn:** 추측 (推測) — phỏng đoán

## 3. elision /ɪˈlɪʒən/
**Loại từ & vị trí trong câu:** `noun`. Direct object or prepositional object representing the deliberate omission or bypassing of a procedural step.
**Core meaning — English:** The intentional skipping or bypassing of an intermediate phase, barrier, or synchronization overhead under verified or assumed safety conditions.
**Core meaning & mental image — Tiếng Việt:** Sự lược bỏ, bỏ qua — hình ảnh việc cắt bỏ một trạm kiểm soát trên đường cao tốc khi đường thông thoáng để xe chạy thẳng.
**Grammar & collocations:** `lock elision` — sự lược bỏ khóa; `speculative elision` — lược bỏ phỏng đoán; `barrier elision` — lược bỏ rào cản bộ nhớ.
**Register & nuance:** Specialized systems architecture term borrowed from linguistics. Denotes efficiency optimization via conditional omission.
**Examples:** Speculative lock elision dynamically strips away mutex acquisition when lock contention is low, thereby accelerating read-mostly multi-threaded workloads. → Việc lược bỏ khóa phỏng đoán tự động loại bỏ thao tác lấy khóa mutex khi mức độ tranh chấp khóa thấp, từ đó gia tăng tốc độ cho các khối lượng công việc đa luồng chủ yếu đọc.
**Liên kết tiếng Hàn:** 생략 (省略) — sự lược bỏ

## 4. contention /kənˈtɛnʃən/
**Loại từ & vị trí trong câu:** `noun`. Subject or object denoting competition among multiple threads or processors for shared resources.
**Core meaning — English:** The state of rivalry or contention wherein multiple execution agents simultaneously attempt to access or modify the same shared hardware or software resource.
**Core meaning & mental image — Tiếng Việt:** Sự tranh chấp, giành giật — hình ảnh nhiều người cùng cố gắng với tay lấy một chiếc chìa khóa duy nhất trên bàn.
**Grammar & collocations:** `lock contention` — tranh chấp khóa; `resource contention` — tranh chấp tài nguyên; `high contention` — mức độ tranh chấp cao.
**Register & nuance:** Standard systems engineering vocabulary. Crucial for performance modeling and bottleneck identification in parallel computing.
**Examples:** High lock contention severely degrades scalability, causing threads to stall repeatedly while waiting to acquire contended mutexes. → Mức độ tranh chấp khóa cao làm suy giảm nghiêm trọng khả năng mở rộng, khiến các luồng liên tục bị đình trệ trong khi chờ đợi để có được các mutex đang bị tranh chấp.
**Liên kết tiếng Hàn:** 경합 (競合) — sự tranh chấp

## 5. abort /əˈbɔrt/
**Loại từ & vị trí trong câu:** `verb` or `noun`. Predicate action or event designation indicating the premature termination of an active transaction.
**Core meaning — English:** To forcefully cancel an ongoing operation or transaction and roll back all provisional state modifications due to a conflict, exception, or capacity overflow.
**Core meaning & mental image — Tiếng Việt:** Hủy bỏ, ngắt giữa chừng — hình ảnh một tên lửa phải tự hủy ngay khi lệch quỹ đạo để ngăn chặn thảm họa.
**Grammar & collocations:** `transaction abort` — hủy giao dịch; `abort rate` — tỷ lệ hủy; `abort handler` — trình xử lý hủy.
**Register & nuance:** Fundamental computing concept. Contrasts with commit. Implies complete restoration of pre-transactional architectural register and memory states.
**Examples:** If a data conflict is detected during a transaction, the processor must abort the operation, discard tentative writes, and jump to the fallback code path. → Nếu phát hiện xung đột dữ liệu trong quá trình giao dịch, bộ xử lý phải hủy bỏ thao tác, loại bỏ các bản ghi tạm thời và chuyển đến nhánh mã dự phòng.
**Liên kết tiếng Hàn:** 중단 (中斷) — sự gián đoạn / hủy bỏ

## 6. commit /kəˈmɪt/
**Loại từ & vị trí trong câu:** `verb`. Main predicate describing the finalization and permanent integration of transactional modifications.
**Core meaning — English:** To successfully finalize and make permanent all provisional modifications produced during an atomic transaction or write operation.
**Core meaning & mental image — Tiếng Việt:** Cam kết, ghi nhận chính thức — hình ảnh việc đóng nấp một chiếc hộp thời gian và niêm phong vĩnh viễn trước sự chứng kiến của mọi người.
**Grammar & collocations:** `commit phase` — giai đoạn cam kết; `commit record` — bản ghi cam kết; `successful commit` — cam kết thành công.
**Register & nuance:** Core transactional terminology across databases, transaction processing monitors, and hardware transactional memory.
**Examples:** The transaction can only commit if no other core has modified the read-set cache lines during the speculative execution window. → Giao dịch chỉ có thể được cam kết nếu không có lõi nào khác sửa đổi các dòng cache trong tập đọc trong suốt cửa sổ thực thi phỏng đoán.
**Liên kết tiếng Hàn:** 커밋 — cam kết (lệnh lưu chính thức)

## 7. coherence /koʊˈhɪrəns/
**Loại từ & vị trí trong câu:** `noun`. Subject or object in discussions regarding multi-core cache consistency and memory hierarchies.
**Core meaning — English:** The integrity and consistency of shared data mirrored across multiple local processor caches, ensuring that all readers observe timely and uniform updates.
**Core meaning & mental image — Tiếng Việt:** Tính mạch lạc, đồng bộ bộ nhớ — hình ảnh một đàn chim cùng cất cánh đồng loạt, không có con nào bay lệch hướng hoặc chậm nhịp.
**Grammar & collocations:** `cache coherence` — tính đồng bộ cache; `coherence protocol` — giao thức đồng bộ; `coherence traffic` — lưu lượng đồng bộ.
**Register & nuance:** Essential hardware architecture terminology. Distinguished from consistency models by operating at the hardware cache line messaging level.
**Examples:** Maintaining cache coherence across dozens of interconnected compute tiles requires sophisticated directory-based messaging protocols. → Việc duy trì tính đồng bộ cache trên hàng chục ô tính toán liên kết đòi hỏi các giao thức nhắn tin dựa trên thư mục phức tạp.
**Liên kết tiếng Hàn:** 일관성 (一貫性) — tính nhất quán / đồng bộ

## 8. snooping /ˈsnuːpɪŋ/
**Loại từ & vị trí trong câu:** `noun` or `participle adjective`. Denoting a hardware mechanism where cache controllers monitor bus traffic.
**Core meaning — English:** A cache coherence strategy where individual cache controllers continuously monitor shared interconnect bus transactions to detect modifications to cached data lines.
**Core meaning & mental image — Tiếng Việt:** Cơ chế nghe lén, giám sát bus — hình ảnh một lính gác ẩn nấp bên lề đường để quan sát mọi phương tiện đi qua.
**Grammar & collocations:** `snooping protocol` — giao thức giám sát bus; `bus snooping` — giám sát bus hệ thống; `snooping cache` — cache có tính năng giám sát.
**Register & nuance:** Classic hardware architecture term. Highly effective for small-scale symmetric multiprocessing (SMP) bus architectures.
**Examples:** Traditional symmetric multiprocessors rely on snooping protocols to invalidate local cache copies whenever another core broadcasts a write request. → Các bộ đa xử lý đối xứng truyền thống dựa vào các giao thức giám sát để vô hiệu hóa các bản sao cache cục bộ bất cứ khi nào lõi khác phát sóng yêu cầu ghi.
**Liên kết tiếng Hàn:** 스누핑 — giám sát bus / nghe lén

## 9. invalidation /ɪnˌvæləˈdeɪʃən/
**Loại từ & vị trí trong câu:** `noun`. Direct object or nominal modifier describing the formal rendering of cached data as obsolete.
**Core meaning — English:** The administrative or hardware-driven process of marking a cached data block as stale or invalid, forcing subsequent reads to fetch fresh data from lower memory tiers.
**Core meaning & mental image — Tiếng Việt:** Sự vô hiệu hóa — hình ảnh đóng dấu "Hết hạn" đỏ rực lên một tài liệu cũ để không ai được phép sử dụng nữa.
**Grammar & collocations:** `invalidation message` — thông điệp vô hiệu hóa; `cache invalidation` — vô hiệu hóa cache; `invalidation storm` — bão vô hiệu hóa.
**Register & nuance:** High-performance systems and caching terminology. Implies performance overhead when occurring excessively due to false sharing.
**Examples:** Frequent data updates across threads can trigger a cascade of invalidation messages, severely degrading overall bus bandwidth. → Việc cập nhật dữ liệu thường xuyên giữa các luồng có thể kích hoạt một loạt thông điệp vô hiệu hóa, làm suy giảm nghiêm trọng băng thông bus tổng thể.
**Liên kết tiếng Hàn:** 무효화 (無效化) — sự vô hiệu hóa

## 10. fallback /ˈfɔːlbæk/
**Loại từ & vị trí trong câu:** `noun` or attributive adjective. Designating alternative safe execution paths when primary optimizations fail.
**Core meaning — English:** A secondary, guaranteed-safe mechanism or code path invoked when an advanced speculative optimization, such as transactional memory or lock elision, aborts.
**Core meaning & mental image — Tiếng Việt:** Phương án dự phòng — hình ảnh chiếc dù cứu sinh được bật ra khi động cơ chính của máy bay phản lực gặp sự cố.
**Grammar & collocations:** `fallback path` — đường dẫn dự phòng; `fallback lock` — khóa dự phòng; `fallback mechanism` — cơ chế dự phòng.
**Register & nuance:** Standard software and systems engineering term. Emphasizes robustness and graceful degradation under stress.
**Examples:** When hardware transactional memory repeatedly aborts due to capacity limits, the execution switches to a traditional mutex fallback path. → Khi bộ nhớ giao dịch phần cứng liên tục bị hủy do giới hạn dung lượng, tiến trình sẽ chuyển sang đường dẫn dự phòng mutex truyền thống.
**Liên kết tiếng Hàn:** 대체 (代替) — phương án thay thế / dự phòng

## 11. serialization /ˌsɪriəlaɪˈzeɪʃən/
**Loại từ & vị trí trong câu:** `noun`. Nominal object representing the sequential enforcement of concurrent execution threads.
**Core meaning — English:** The enforced execution of operations in strict sequential order, eliminating parallelism to guarantee correctness at the expense of throughput.
**Core meaning & mental image — Tiếng Việt:** Sự tuần tự hóa — hình ảnh nhiều dòng người xếp hàng dài đơn độc qua một ô cửa bán vé duy nhất.
**Grammar & collocations:** `lock serialization` — sự tuần tự hóa bằng khóa; `serial execution` — thực thi tuần tự; `serialization overhead` — chi phí tuần tự hóa.
**Register & nuance:** Fundamental concurrency term. Often viewed as a performance bottleneck when parallel threads are artificially constrained.
**Examples:** Acquiring a global writer lock forces total serialization of all concurrent updates, neutralizing multi-core scaling benefits. → Việc lấy khóa ghi toàn cục buộc phải tuần tự hóa hoàn toàn mọi cập nhật đồng thời, vô hiệu hóa các lợi ích mở rộng đa lõi.
**Liên kết tiếng Hàn:** 직렬화 (直列化) — sự tuần tự hóa

## 12. deadlock /ˈdɛdˌlɑk/
**Loại từ & vị trí trong câu:** `noun`. Subject or object in concurrent systems describing unresolvable mutual blocking states.
**Core meaning — English:** A permanent stalemate condition in which two or more competing threads are each waiting for locks held by the others, freezing progress indefinitely.
**Core meaning & mental image — Tiếng Việt:** Tình trạng bế tắc (treo toàn tập) — hình ảnh hai chiếc xe ô tô đối đầu trên một cây cầu hẹp, không bên nào chịu lùi khiến cả hai kẹt cứng mãi mãi.
**Grammar & collocations:** `deadlock detection` — phát hiện bế tắc; `deadlock avoidance` — phòng ngừa bế tắc; `potential deadlock` — nguy cơ bế tắc.
**Register & nuance:** Classical operating systems and concurrency defect terminology. Contrasts with livelock and starvation.
**Examples:** Careful lock ordering protocols must be strictly enforced across the driver subsystem to prevent catastrophic system deadlocks. → Các quy tắc sắp xếp khóa cẩn thận phải được tuân thủ nghiêm ngặt trong hệ thống con trình điều khiển để ngăn chặn tình trạng bế tắc hệ thống thảm khốc.
**Liên결 tiếng Hàn:** 교착상태 (交錯狀態) — trạng thái bế tắc / deadlock

## 13. starvation /stɑrˈveɪʃən/
**Loại từ & vị trí trong câu:** `noun`. Direct object or nominal state describing the unfair deprivation of execution resources.
**Core meaning — English:** A condition where a runnable thread or process is perpetually denied necessary CPU time or resource access due to biased scheduling or lock contention.
**Core meaning & mental image — Tiếng Việt:** Tình trạng đói tài nguyên (bị bỏ đói) — hình ảnh chú chim non yếu ớt nhất ổ luôn bị những con lớn tranh hết thức ăn mẹ mang về.
**Grammar & collocations:** `thread starvation` — đói luồng; `resource starvation` — đói tài nguyên; `prevent starvation` — ngăn ngừa tình trạng đói tài nguyên.
**Register & nuance:** Standard operating systems and scheduling terminology. Implies unfairness, unlike deliberate blocking.
**Examples:** Fair queuing algorithms are implemented in modern schedulers to prevent low-priority worker threads from suffering permanent starvation. → Các thuật toán xếp hàng công bằng được tích hợp trong trình lập lịch hiện đại để ngăn các luồng công việc ưu tiên thấp khỏi tình trạng bị bỏ đói vĩnh viễn.
**Liên kết tiếng Hàn:** 기아상태 (飢餓狀態) — tình trạng đói tài nguyên / starvation

## 14. livelock /ˈlaɪvˌlɑk/
**Loại từ & vị trí trong câu:** `noun`. State description in concurrent programming where threads continuously change state without making actual progress.
**Core meaning — English:** A concurrent anomaly where two or more active processes continuously alter their internal states in response to each other without accomplishing any useful work.
**Core meaning & mental image — Tiếng Việt:** Tình trạng kẹt động (vòng lặp vô ích) — hình ảnh hai người lịch sự nhường bước cho nhau ở hành lang hẹp, cứ liên tục bước sang cùng một bên và không bao giờ đi qua được.
**Grammar & collocations:** `livelock condition` — điều kiện kẹt động; `avoid livelock` — tránh kẹt động; `livelock resolution` — giải quyết kẹt động.
**Register & nuance:** Advanced concurrency terminology. Differs from deadlock because processes remain active (non-blocked) yet non-productive.
**Examples:** Randomized backoff strategies are often introduced into transactional retry loops to break stubborn livelock conditions. → Các chiến lược lùi thời gian ngẫu nhiên thường được đưa ra trong các vòng lặp thử lại giao dịch để phá vỡ các điều kiện kẹt động ngoan cố.
**Liên kết tiếng Hàn:** 라이브락 — livelock / trạng thái hoạt động nhưng bế tắc

## 15. granularity /ˌɡrænjʊˈlærəti/
**Loại từ & vị trí trong câu:** `noun`. Object or subject referring to the scale or level of detail at which data or locks are managed.
**Core meaning — English:** The scale or degree of partitioning with which system resources, memory blocks, or locks are divided and managed.
**Core meaning & mental image — Tiếng Việt:** Độ chi tiết, cấp độ phân đoạn — hình ảnh việc cắt một khối đá thành những viên gạch lớn so với việc mài thành cát mịn.
**Grammar & collocations:** `fine granularity` — độ chi tiết cao / phân đoạn mịn; `coarse granularity` — độ phân giải thô; `lock granularity` — cấp độ khóa.
**Register & nuance:** Universal systems architecture and database design term. Finer granularity increases concurrency but raises management overhead.
**Examples:** Transitioning from table-level locks to row-level locks provides a much finer granularity, significantly reducing data access conflicts. → Việc chuyển đổi từ khóa cấp bảng sang khóa cấp dòng cung cấp độ chi tiết tinh tế hơn, làm giảm đáng kể các xung đột truy cập dữ liệu.
**Liên kết tiếng Hàn:** 세립도 (細粒度) — độ chi tiết mịn / granularity

## 16. atomicity /ˌætəˈmɪsəti/
**Loại từ & vị trí trong câu:** `noun`. Central foundational property in transaction processing and parallel systems.
**Core meaning — English:** The execution guarantee that a composite series of operations either completes in its entirety or leaves no observable trace whatsoever.
**Core meaning & mental image — Tiếng Việt:** Tính nguyên tử (không thể chia cắt) — hình ảnh một phản ứng hóa học hoặc bùng nổ hoàn toàn hoặc không xảy ra gì cả, không có nửa chừng.
**Grammar & collocations:** `guarantee atomicity` — đảm bảo tính nguyên tử; `atomic property` — thuộc tính nguyên tử; `transaction atomicity` — tính nguyên tử của giao dịch.
**Register & nuance:** Fundamental computer science principle underpinning both database ACID properties and hardware transactional memory.
**Examples:** Hardware transactional memory relies on cache invalidation trackers to enforce strict atomicity across arbitrary machine instruction sequences. → Bộ nhớ giao dịch phần cứng dựa vào các bộ theo dõi vô hiệu hóa cache để thực thi tính nguyên tử nghiêm ngặt trên các chuỗi lệnh máy tùy ý.
**Liên kết tiếng Hàn:** 원자성 (原子性) — tính nguyên tử

## 17. isolation /ˌaɪsəˈleɪʃən/
**Loại từ & vị trí trong câu:** `noun`. Property designation in concurrent transactions ensuring concurrent execution independence.
**Core meaning — English:** The architectural or database property ensuring that concurrent transactions execute without interfering with one another's intermediate states.
**Core meaning & mental image — Tiếng Việt:** Tính cô lập — hình ảnh những phòng thí nghiệm vô trùng độc lập, nơi các thí nghiệm bên trong không bị ảnh hưởng bởi không khí bên ngoài.
**Grammar & collocations:** `transaction isolation` — tính cô lập giao dịch; `isolation level` — mức độ cô lập; `snapshot isolation` — cô lập ảnh chụp.
**Register & nuance:** Core ACID property in database systems and extended to transactional memory memory-access visibility rules.
**Examples:** Strong isolation guarantees prevent speculative transactions from reading uncommitted modifications produced by concurrent sibling threads. → Các đảm bảo cô lập mạnh mẽ ngăn cản các giao dịch phỏng đoán đọc các sửa đổi chưa được cam kết do các luồng anh em đồng thời tạo ra.
**Liên kết tiếng Hàn:** 격리성 (隔離性) — tính cô lập

## 18. durability /ˌdʊrəˈbɪləti/
**Loại từ & vị trí trong câu:** `noun`. System reliability property guaranteeing persistence against power loss or crashes.
**Core meaning — English:** The guarantee that once a transaction has committed, its recorded modifications survive subsequent system crashes or power failures.
**Core meaning & mental image — Tiếng Việt:** Tính bền vững, lưu trữ vĩnh viễn — hình ảnh chữ khắc trên phiến đá hoa cương tồn tại qua năm tháng dù mưa gió hủy diệt.
**Grammar & collocations:** `data durability` — độ bền dữ liệu; `ensure durability` — đảm bảo tính bền vững; `durability guarantee` — cam kết độ bền.
**Register & nuance:** Essential database ACID property. In pure CPU hardware transactional memory, durability is usually delegated to non-volatile memory or persistent logging layers.
**Examples:** While hardware transactional memory ensures atomicity and isolation in volatile cache tiers, durability requires explicit flushing to non-volatile storage. → Trong khi bộ nhớ giao dịch phần cứng đảm bảo tính nguyên tử và cô lập trong các tầng cache dễ biến đổi, tính bền vững đòi hỏi phải xả dữ liệu tường minh vào bộ nhớ không biến đổi.
**Liên kết tiếng Hàn:** 지속성 (持續性) — tính bền vững / durability

## 19. eviction /ɪˈvɪkʃən/
**Loại từ & vị trí trong câu:** `noun`. Operating system and hardware cache mechanism designating the removal of data blocks.
**Core meaning — English:** The forced removal of a cache line or data page from fast memory storage to make room for newly referenced memory addresses.
**Core meaning & mental image — Tiếng Việt:** Sự trục xuất, đẩy ra khỏi cache — hình ảnh chủ nhà trọ buộc phải dọn đồ của khách cũ ra ngoài để nhường chỗ cho khách thuê mới.
**Grammar & collocations:** `cache eviction` — trục xuất khỏi cache; `eviction policy` — chính sách trục xuất; `evict line` — trục xuất dòng cache.
**Register & nuance:** Core architecture and caching concept. In HTM, cache evictions of transactional read-set or write-set lines almost always trigger an immediate hardware abort.
**Examples:** Because hardware transactional memory tracks working sets entirely within processor caches, a capacity eviction inevitably forces a transaction abort. → Do bộ nhớ giao dịch phần cứng theo dõi toàn bộ tập làm việc bên trong cache của bộ xử lý, việc trục xuất do quá dung lượng chắc chắn buộc giao dịch phải bị hủy.
**Liên kết tiếng Hàn:** 축출 (逐出) / 퇴거 — sự trục xuất / loại bỏ

## 20. coherence /koʊˈhɪrəns/
*(Note: Headword 'coherence' was listed earlier in item 7. To ensure zero duplication per strict canon rules, let's substitute item 20 with 'snooping' if duplicate, but wait: let's check item 8 'snooping'. Let's use **directory-based** /daɪˈrɛktəri beɪst/ instead).*

## 20. directory-based /daɪˈrɛktəri beɪst/
**Loại từ & vị trí trong câu:** `adjective`. Attributive modifier describing cache coherence architectures that utilize centralized directories instead of broadcast buses.
**Core meaning — English:** Operating via a centralized or distributed directory structure that explicitly tracks the sharing status of memory blocks across multiple compute nodes.
**Core meaning & mental image — Tiếng Việt:** Dựa trên thư mục quản lý — hình ảnh thủ thư tra cứu sổ sách trung tâm để biết chính xác cuốn sách nào đang được ai mượn.
**Grammar & collocations:** `directory-based protocol` — giao thức dựa trên thư mục; `directory-based coherence` — đồng bộ dựa trên thư mục; `directory controller` — bộ điều khiển thư mục.
**Register & nuance:** Advanced multiprocessing architecture term. Essential for scalable many-core processors where broadcast bus snooping becomes infeasible.
**Examples:** Scalable many-core systems abandon snooping buses in favor of directory-based cache coherence frameworks to limit interconnect traffic overhead. → Các hệ thống đa lõi khả mở từ bỏ các bus giám sát để chuyển sang các khung công tác đồng bộ cache dựa trên thư mục nhằm hạn chế chi phí lưu lượng kết nối.
**Liên kết tiếng Hàn:** 디렉터리 기반 — dựa trên thư mục

## 21. speculative /ˈspekjələtɪv/
*(Note: Duplicate of item 2. Let's substitute with **non-transactional** /nɑn trænˈzækʃənəl/).*

## 21. non-transactional /nɑn trænˈzækʃənəl/
**Loại từ & vị trí trong câu:** `adjective`. Attributive modifier designating regular, non-isolated memory operations outside transactional blocks.
**Core meaning — English:** Pertaining to standard, unmonitored memory accesses or code routines that do not participate in transactional safety guarantees or conflict tracking.
**Core meaning & mental image — Tiếng Việt:** Không mang tính giao dịch — hình ảnh các giao dịch tiền mặt tự do ngoài chợ không cần qua hợp đồng pháp lý kiểm soát.
**Grammar & collocations:** `non-transactional access` — truy cập phi giao dịch; `non-transactional store` — lưu trữ phi giao dịch; `non-transactional code` — mã phi giao dịch.
**Register & nuance:** Advanced systems and memory architecture terminology. Essential when discussing interactions between transactional and legacy threads.
**Examples:** The runtime system permits non-transactional reads under strictly controlled conditions, provided that cache coherence monitors verify no active write conflicts. → Hệ thống thời gian chạy cho phép các thao tác đọc phi giao dịch trong các điều kiện được kiểm soát chặt chẽ, miễn là các trình giám sát đồng bộ cache xác minh không có xung đột ghi đang hoạt động.
**Liên kết tiếng Hàn:** 비거래형 (非去來型) — phi giao dịch

## 22. latency /ˈleɪtənsi/
**Loại từ & vị trí trong câu:** `noun`. Subject or object representing the time delay inherent in processing or memory retrieval operations.
**Core meaning — English:** The time interval or delay between the initiation of a request and the receipt of its corresponding response or completion.
**Core meaning & mental image — Tiếng Việt:** Độ trễ thời gian — hình ảnh khoảng thời gian chờ đợi tiếng vang dội lại sau khi bạn hét lớn trong một thung lũng sâu.
**Grammar & collocations:** `memory latency` — độ trễ bộ nhớ; `latency overhead` — chi phí độ trễ; `ultra-low latency` — độ trễ cực thấp.
**Register & nuance:** Ubiquitous in performance engineering and computer architecture. Contrasts with bandwidth.
**Examples:** Speculative lock elision successfully eliminates synchronization latency by allowing parallel threads to bypass traditional mutex acquisition barriers. → Việc bỏ qua khóa phỏng đoán đã loại bỏ thành công độ trễ đồng bộ hóa bằng cách cho phép các luồng song song vượt qua các rào cản lấy khóa mutex truyền thống.
**Liên kết tiếng Hàn:** 지연시간 (遲延時間) — độ trễ

## 23. throughput /ˈθruːpʊt/
**Loại từ & vị trí trong câu:** `noun`. Quantitative system metric representing work completed per unit time.
**Core meaning — English:** The total volume of tasks, transactions, or data successfully processed by a system within a given time frame.
**Core meaning & mental image — Tiếng Việt:** Thông lượng (lượng xử lý hoàn tất trong một đơn vị thời gian) — hình ảnh số lượng ô tô đi qua trạm thu phí mỗi phút.
**Grammar & collocations:** `transaction throughput` — thông lượng giao dịch; `system throughput` — thông lượng hệ thống; `maximize throughput` — tối đa hóa thông lượng.
**Register & nuance:** Core performance metric in computing. Frequently traded off against latency in multi-core scheduler and synchronization design.
**Examples:** Adopting hardware transactional memory significantly boosts transaction throughput in multi-threaded databases by minimizing thread blocking. → Việc áp dụng bộ nhớ giao dịch phần cứng làm tăng đáng kể thông lượng giao dịch trong các cơ sở dữ liệu đa luồng bằng cách giảm thiểu tình trạng chặn luồng.
**Liên kết tiếng Hàn:** 처리량 (處理量) — thông lượng

## 24. synchronization /ˌsɪŋkrənəˈzeɪʃən/
**Loại từ & vị trí trong câu:** `noun`. Core concept representing coordination mechanisms among concurrent execution threads.
**Core meaning — English:** The coordination of simultaneous threads or processes to ensure orderly access to shared resources and prevent data corruption.
**Core meaning & mental image — Tiếng Việt:** Sự đồng bộ hóa, phối hợp hành động — hình ảnh dàn nhạc hòa tấu theo nhịp đũa của nhạc trưởng để các nhạc cụ cất tiếng đúng thời điểm.
**Grammar & collocations:** `synchronization overhead` — chi phí đồng bộ hóa; `synchronization barrier` — rào cản đồng bộ hóa; `thread synchronization` — đồng bộ hóa luồng.
**Register & nuance:** Fundamental concept in concurrent programming, operating systems, and hardware design.
**Examples:** Advanced hardware synchronization techniques replace expensive software semaphores with lightweight transactional retry loops. → Các kỹ thuật đồng bộ hóa phần cứng tiên tiến thay thế các semaphore phần mềm đắt đỏ bằng các vòng lặp thử lại giao dịch trọng lượng nhẹ.
**Liên kết tiếng Hàn:** 동기화 (同期化) — sự đồng bộ hóa

## 25. contention /kənˈtɛnʃən/
*(Note: Duplicate of item 4. Let's substitute with **multiprocessing** /ˌmʌltiˈprɑsɛsɪŋ/).*

## 25. multiprocessing /ˌmʌltiˈprɑsɛsɪŋ/
**Loại từ & vị trí trong câu:** `noun` or attributive adjective. Architectural paradigm involving multiple processors executing instructions simultaneously.
**Core meaning — English:** The concurrent execution of multiple instruction streams across two or more processor cores sharing common memory or interconnect structures.
**Core meaning & mental image — Tiếng Việt:** Xử lý đa nhiệm / đa xử lý — hình ảnh nhiều đầu bếp cùng làm việc trong một gian bếp lớn để hoàn thành đơn hàng cùng lúc.
**Grammar & collocations:** `symmetric multiprocessing` — đa xử lý đối xứng; `multiprocessing architecture` — kiến trúc đa xử lý; `multiprocessing environment` — môi trường đa xử lý.
**Register & nuance:** Fundamental computer architecture domain. Provides the physical foundation for concurrent programming and hardware transactional memory research.
**Examples:** Modern symmetric multiprocessing systems require robust cache coherence protocols to maintain data integrity across all active cores. → Các hệ thống đa xử lý đối xứng hiện đại đòi hỏi các giao thức đồng bộ cache mạnh mẽ để duy trì tính toàn vẹn dữ liệu trên tất cả các lõi đang hoạt động.
**Liên kết tiếng Hàn:** 멀티프로세싱 — đa xử lý / multiprocessing

---

## Review in context (Part 1: Hardware Transactional Memory and Cache Coherence)
Modern **transactional** computing architectures utilize **speculative** execution paradigms to optimize multi-core performance. By applying **speculative lock elision**, systems can temporarily bypass mutex acquisition when **contention** is minimal. If a data conflict occurs during execution, the hardware forces an immediate **abort**, discarding provisional updates and restoring prior registers before invoking a safe **fallback** path. Conversely, when no interference is detected, the core reaches a successful **commit**. Throughout this process, hardware **coherence** protocols—often driven by bus **snooping** or advanced **directory-based** schemes—monitor cache line status. When remote modifications occur, local cache lines are subjected to immediate **invalidation**, preventing stale data reads. However, excessively frequent updates across threads can induce **serialization**, while poor lock tuning risks catastrophic **deadlock**, severe **starvation**, or unproductive **livelock**.

**Bản dịch tiếng Việt:**
Kiến trúc điện toán giao dịch hiện đại sử dụng các mô hình thực thi phỏng đoán để tối ưu hóa hiệu suất đa lõi. Bằng cách áp dụng kỹ thuật lược bỏ khóa phỏng đoán, các hệ thống có thể tạm thời bỏ qua việc lấy khóa mutex khi mức độ tranh chấp ở mức tối thiểu. Nếu xảy ra xung đột dữ liệu trong quá trình thực thi, phần cứng buộc phải hủy bỏ ngay lập tức, loại bỏ các cập nhật tạm thời và khôi phục các thanh ghi trước đó trước khi chuyển sang đường dẫn dự phòng an toàn. Ngược lại, khi không phát hiện thấy sự can thiệp nào, lõi sẽ đạt được cam kết thành công. Trong suốt quá trình này, các giao thức đồng bộ phần cứng — thường được thúc đẩy bởi việc giám sát bus hoặc các sơ đồ dựa trên thư mục tiên tiến — giám sát trạng thái dòng cache. Khi xảy ra các sửa đổi từ xa, các dòng cache cục bộ sẽ chịu sự vô hiệu hóa ngay lập tức, ngăn chặn việc đọc dữ liệu cũ. Tuy nhiên, các cập nhật thường xuyên quá mức giữa các luồng có thể dẫn đến sự tuần tự hóa, trong khi việc tinh chỉnh khóa kém có thể gây ra tình trạng bế tắc thảm khốc, tình trạng đói tài nguyên nghiêm trọng hoặc tình trạng kẹt động kém hiệu quả.

---

## Review in context (Part 2: Granularity, Atomicity, and Multiprocessing Performance)
Achieving optimal performance in **multiprocessing** environments requires careful selection of lock **granularity**. Fine-grained designs maximize concurrency and preserve strict **atomicity**, ensuring that composite operations execute indivisibly. Furthermore, strong **isolation** boundaries guarantee that concurrent tasks operate independently, while optional persistent logging layers can provide long-term **durability**. Yet, strict capacity limitations within processor caches often cause cache line **eviction**, prematurely triggering transactional aborts. Developers must carefully balance **non-transactional** memory accesses alongside protected regions to optimize both **latency** and overall system **throughput**. Ultimately, robust hardware **synchronization** mechanisms enable scalable multi-core systems to overcome traditional performance bottlenecks.

**Bản dịch tiếng Việt:**
Đạt được hiệu suất tối ưu trong môi trường đa xử lý đòi hỏi sự lựa chọn cẩn thận về độ chi tiết của khóa. Các thiết kế phân đoạn tinh vi tối đa hóa khả năng đồng thời và bảo tồn tính nguyên tử nghiêm ngặt, đảm bảo rằng các thao tác tổng hợp thực thi một cách không thể chia cắt. Hơn nữa, các ranh giới cô lập mạnh mẽ đảm bảo các tác vụ đồng thời hoạt động độc lập, trong khi các lớp ghi nhật ký bền vững tùy chọn có thể cung cấp tính bền vững lâu dài. Tuy nhiên, các giới hạn dung lượng nghiêm ngặt bên trong cache của bộ xử lý thường gây ra việc trục xuất dòng cache, kích hoạt sớm việc hủy giao dịch. Các nhà phát triển phải cân bằng cẩn thận các truy cập bộ nhớ phi giao dịch bên cạnh các vùng được bảo vệ để tối ưu hóa cả độ trễ lẫn thông lượng tổng thể của hệ thống. Cuối cùng, các cơ chế đồng bộ hóa phần cứng mạnh mẽ cho phép các hệ thống đa lõi khả mở vượt qua các nút thắt cổ chai về hiệu suất truyền thống.
