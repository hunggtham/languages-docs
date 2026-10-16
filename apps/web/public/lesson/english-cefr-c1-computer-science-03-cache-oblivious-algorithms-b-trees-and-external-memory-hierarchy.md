# C1 Vocabulary 03 — Cache-oblivious algorithms, external memory B-trees, and memory hierarchy optimization

This lesson explores advanced concepts in **computer architecture**, **memory hierarchy optimization**, and **cache-oblivious algorithms**. Mastering these terms allows systems engineers and computer scientists to design ultra-high-performance software that minimizes disk I/O bottlenecks, maximizes spatial and temporal locality, and runs efficiently across multi-level memory hierarchies.

---

## 1. cache-oblivious algorithmic paradigm
- **Pronunciation:** /kæʃ oʊˈblɪviəs ˌɛlɡəˈrɪðmɪk ˈpɛrəˌdaɪm/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, object, or prepositional complement).
- **Core meaning — English:** An algorithm designed to take optimal advantage of the memory hierarchy without knowing specific parameters like cache line size or cache capacity.
- **Core meaning & mental image — Tiếng Việt:** Mô hình thuật toán vô tri bộ nhớ đệm (thuật toán được thiết kế để tối ưu hóa bộ nhớ đệm tự động ở mọi cấp độ mà không cần biết trước kích thước cụ thể của cache).
- **Grammar & collocations:**
  - implement a cache-oblivious algorithmic paradigm (triển khai mô hình thuật toán vô tri bộ nhớ đệm)
  - study the cache-oblivious algorithmic paradigm (nghiên cứu mô hình thuật toán vô tri bộ nhớ đệm)
  - benefit from the cache-oblivious algorithmic paradigm (hưởng lợi từ mô hình thuật toán vô tri bộ nhớ đệm)
- **Register & nuance:** Advanced computer science, algorithm design, and systems architecture.
- **Examples:**
  - *By relying on a cache-oblivious algorithmic paradigm, the sorting subroutine performs efficiently across machines with vastly different cache sizes.*
  - (Bằng cách dựa vào mô hình thuật toán vô tri bộ nhớ đệm, chương trình con sắp xếp hoạt động hiệu quả trên các máy tính có kích thước cache khác nhau hoàn toàn.)
- **Liên결 tiếng Hàn:** 캐시 무관 알고리즘 패러다임 (cache-oblivious algorithmic paradigm) — 캐시 (cache) + 무관 (oblivious/unrelated) + 알고리즘 패러다임 (algorithmic paradigm).

## 2. external memory hierarchy model
- **Pronunciation:** /ɛkˈstɜrnəl ˈmɛməri ˈhaɪərɑrki ˈmɑdəl/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** A theoretical model of computation that accounts for the cost of transferring data between fast internal memory (RAM) and slow external storage (disk).
- **Core meaning & mental image — Tiếng Việt:** Mô hình phân cấp bộ nhớ ngoài (mô hình tính toán tính đến chi phí truyền dữ liệu tốn kém giữa RAM nhanh và ổ đĩa chậm).
- **Grammar & collocations:**
  - analyze the external memory hierarchy model (phân tích mô hình phân cấp bộ nhớ ngoài)
  - simulate the external memory hierarchy model (mô phỏng mô hình phân cấp bộ nhớ ngoài)
  - extend the external memory hierarchy model (mở rộng mô hình phân cấp bộ nhớ ngoài)
- **Register & nuance:** Formal, computational complexity theory and data structures.
- **Examples:**
  - *The external memory hierarchy model proves that I/O operations dominate the execution time of large-scale database joins.*
  - (Mô hình phân cấp bộ nhớ ngoài chứng minh rằng các thao tác nhập/xuất thống trị thời gian thực thi của các phép nối cơ sở dữ liệu quy mô lớn.)
- **Liên결 tiếng Hàn:** 외부 메모리 계층 구조 모델 (external memory hierarchy model) — 외부 메모리 (external memory) + 계층 구조 (hierarchy) + 모델 (model).

## 3. disk block transfer bottleneck
- **Pronunciation:** /dɪsk blɑk trænsfər ˈbɑtəlˌnɛk/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** The performance slowdown caused by the slow rate of moving fixed-size blocks of data between secondary storage and main memory.
- **Core meaning & mental image — Tiếng Việt:** Nút cổ chai truyền khối đĩa (tình trạng hệ thống bị chậm lại do tốc độ đọc ghi các khối dữ liệu từ ổ cứng lên RAM quá thấp).
- **Grammar & collocations:**
  - alleviate a disk block transfer bottleneck (giảm bớt nút cổ chai truyền khối đĩa)
  - suffer from a disk block transfer bottleneck (chịu đựng nút cổ chai truyền khối đĩa)
  - eliminate a disk block transfer bottleneck (loại bỏ nút cổ chai truyền khối đĩa)
- **Register & nuance:** Systems engineering, database performance tuning.
- **Examples:**
  - *Optimizing the indexing strategy significantly reduced the disk block transfer bottleneck during sequential scans.*
  - (Việc tối ưu hóa chiến lược lập chỉ mục đã giảm đáng kể nút cổ chai truyền khối đĩa trong quá trình quét tuần tự.)
- **Liên결 tiếng Hàn:** 디스크 블록 전송 병목 현상 (disk block transfer bottleneck) — 디스크 블록 (disk block) + 전송 (transfer) + 병목 현상 (bottleneck).

## 4. cache-conscious data layout
- **Pronunciation:** /kæʃ ˈkɑnʃəs ˈdeɪtə ˈleɪˌaʊt/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** Structuring data in memory so that items accessed together are stored close to each other, minimizing cache misses.
- **Core meaning & mental image — Tiếng Việt:** Bố cục dữ liệu có ý thức về cache (cách sắp xếp dữ liệu trong bộ nhớ sao cho các phần tử hay dùng cùng nhau được đặt sát nhau, giúp tối ưu hóa cache).
- **Grammar & collocations:**
  - design a cache-conscious data layout (thiết kế bố cục dữ liệu có ý thức về cache)
  - implement a cache-conscious data layout (triển khai bố cục dữ liệu có ý thức về cache)
  - evaluate a cache-conscious data layout (đánh giá bố cục dữ liệu có ý thức về cache)
- **Register & nuance:** High-performance computing and systems programming.
- **Examples:**
  - *Game engines often utilize a cache-conscious data layout to ensure particle simulation vectors fit within CPU cache lines.*
  - (Các công cụ trò chơi thường sử dụng bố cục dữ liệu có ý thức về cache để đảm bảo các véc-tơ mô phỏng hạt vừa vặn trong các dòng cache của CPU.)
- **Liên결 tiếng Hàn:** 캐시 인식 데이터 레이아웃 (cache-conscious data layout) — 캐시 인식 (cache-conscious) + 데이터 레이아웃 (data layout).

## 5. multi-way B-tree node branching
- **Pronunciation:** /ˈmʌlti-weɪ ˈbiː-tri noʊd ˈbræntʃɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** The architectural property of B-trees where each node contains multiple keys and child pointers, matching the block size of storage hardware.
- **Core meaning & mental image — Tiếng Việt:** Sự phân nhánh nút cây B đa chiều (đặc điểm cấu trúc của cây B với nhiều khóa trong một nút, khớp hoàn hảo với kích thước khối của phần cứng lưu trữ).
- **Grammar & collocations:**
  - optimize multi-way B-tree node branching (tối ưu hóa sự phân nhánh nút cây B đa chiều)
  - increase multi-way B-tree node branching (tăng cường sự phân nhánh nút cây B đa chiều)
  - analyze multi-way B-tree node branching (phân tích sự phân nhánh nút cây B đa chiều)
- **Register & nuance:** Formal, advanced data structures and database indexing.
- **Examples:**
  - *High multi-way B-tree node branching ensures that database index search trees remain shallow, requiring very few disk reads.*
  - (Sự phân nhánh nút cây B đa chiều cao đảm bảo rằng cây tìm kiếm chỉ mục cơ sở dữ liệu luôn nông, đòi hỏi rất ít lần đọc đĩa.)
- **Liên결 tiếng Hàn:** 다로 갈라지는 B-트리 노드 분기 (multi-way B-tree node branching) — 다로 갈라지는 (multi-way) + B-트리 노드 (B-tree node) + 분기 (branching).

## 6. cache line false sharing
- **Pronunciation:** /kæʃ laɪn fɔls ˈʃɛrɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** A performance degradation in multi-threaded programs where separate threads modify independent variables that happen to reside on the same cache line.
- **Core meaning & mental image — Tiếng Việt:** Chia sẻ sai dòng cache (hiện tượng suy giảm hiệu năng đa luồng khi các luồng độc lập sửa đổi các biến nằm chung trên một dòng cache, gây ra việc vô hiệu hóa cache liên tục).
- **Grammar & collocations:**
  - prevent cache line false sharing (ngăn chặn việc chia sẻ sai dòng cache)
  - detect cache line false sharing (phát hiện việc chia sẻ sai dòng cache)
  - eliminate cache line false sharing (loại bỏ việc chia sẻ sai dòng cache)
- **Register & nuance:** Multithreaded systems programming and concurrency optimization.
- **Examples:**
  - *Padding array structures with dummy bytes successfully eliminated cache line false sharing across the worker threads.*
  - (Việc đệm các cấu trúc mảng bằng các byte giả đã loại bỏ thành công hiện tượng chia sẻ sai dòng cache giữa các luồng công nhân.)
- **Liên결 tiếng Hàn:** 캐시 라인 허위 공유 (cache line false sharing) — 캐시 라인 (cache line) + 허위 공유 (false sharing).

## 7. spatial memory locality optimization
- **Pronunciation:** /ˈspeɪʃəl ˈmɛməri loʊˈkælɪti ˌɑptəmaɪˈzeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** Designing software access patterns so that if a memory address is referenced, nearby memory addresses will soon be referenced as well.
- **Core meaning & mental image — Tiếng Việt:** Tối ưu hóa tính cục bộ bộ nhớ không gian (thiết kế truy cập bộ nhớ liên tiếp nhau theo không gian bộ nhớ để tận dụng cơ chế nạp trước của phần cứng).
- **Grammar & collocations:**
  - achieve spatial memory locality optimization (đạt được tối ưu hóa tính cục bộ bộ nhớ không gian)
  - improve spatial memory locality optimization (cải thiện tối ưu hóa tính cục bộ bộ nhớ không gian)
  - focus on spatial memory locality optimization (tập trung vào tối ưu hóa tính cục bộ bộ nhớ không gian)
- **Register & nuance:** High-performance systems engineering.
- **Examples:**
  - *Iterating through contiguous arrays rather than linked lists ensures superior spatial memory locality optimization.*
  - (Việc duyệt qua các mảng liền kề thay vì danh sách liên kết đảm bảo tối ưu hóa tính cục bộ bộ nhớ không gian vượt trội.)
- **Liên결 tiếng Hàn:** 공간적 메모리 지역성 최적화 (spatial memory locality optimization) — 공간적 (spatial) + 메모리 지역성 (memory locality) + 최적화 (optimization).

## 8. temporal locality reuse metric
- **Pronunciation:** /ˈtɛmpərəl loʊˈkælɪti riˈuːz ˈmɛtrɪk/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** A quantitative measure of how frequently a specific memory location accessed once is accessed again within a short time window.
- **Core meaning & mental image — Tiếng Việt:** Chỉ số tái sử dụng tính cục bộ thời gian (thước đo tần suất một ô nhớ được truy cập lặp lại trong một khoảng thời gian ngắn).
- **Grammar & collocations:**
  - calculate the temporal locality reuse metric (tính toán chỉ số tái sử dụng tính cục bộ thời gian)
  - maximize the temporal locality reuse metric (tối đa hóa chỉ số tái sử dụng tính cục bộ thời gian)
  - evaluate the temporal locality reuse metric (đánh giá chỉ số tái sử dụng tính cục bộ thời gian)
- **Register & nuance:** Computer architecture analysis and compiler optimization.
- **Examples:**
  - *Loop tiling transformations are applied to algorithms to boost their temporal locality reuse metric.*
  - (Các phép biến đổi lát vòng lặp được áp dụng cho các thuật toán để thúc đẩy chỉ số tái sử dụng tính cục bộ thời gian của chúng.)
- **Liên결 tiếng Hàn:** 시간적 지역성 재사용 지표 (temporal locality reuse metric) — 시간적 지역성 (temporal locality) + 재사용 (reuse) + 지표 (metric).

## 9. matrix transpose recursive decomposition
- **Pronunciation:** /ˈmeɪtrɪks trænˈspoʊz rɪˈkɜrsɪv ˌdiːkɑmpəˈzɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** Breaking down matrix transposition into smaller sub-problems using divide-and-conquer recursion to fit gracefully into cache hierarchies.
- **Core meaning & mental image — Tiếng Việt:** Phân rã đệ quy chuyển vị ma trận (chia nhỏ bài toán chuyển vị ma trận thành các phần nhỏ hơn theo đệ quy để vừa khít với các cấp độ cache).
- **Grammar & collocations:**
  - implement matrix transpose recursive decomposition (triển khai phân rã đệ quy chuyển vị ma trận)
  - test matrix transpose recursive decomposition (kiểm tra phân rã đệ quy chuyển vị ma trận)
  - benefit from matrix transpose recursive decomposition (hưởng lợi từ phân rã đệ quy chuyển vị ma trận)
- **Register & nuance:** Advanced algorithms and numerical linear algebra.
- **Examples:**
  - *Cache-oblivious algorithms use matrix transpose recursive decomposition to achieve optimal performance without tuning cache parameters.*
  - (Các thuật toán vô tri cache sử dụng phân rã đệ quy chuyển vị ma trận để đạt hiệu năng tối ưu mà không cần tinh chỉnh tham số cache.)
- **Liên결 tiếng Hàn:** 행렬 전치 재귀적 분해 (matrix transpose recursive decomposition) — 행렬 전치 (matrix transpose) + 재귀적 (recursive) + 분해 (decomposition).

## 10. memory access pattern stride
- **Pronunciation:** /ˈmɛməri ˈæksɛs ˈpætərn straɪd/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** The distance (in memory addresses) between consecutive memory locations accessed by a program loop.
- **Core meaning & mental image — Tiếng Việt:** Bước nhảy mẫu truy cập bộ nhớ (khoảng cách giữa các địa chỉ bộ nhớ liên tiếp được truy cập trong vòng lặp).
- **Grammar & collocations:**
  - minimize memory access pattern strides (giảm thiểu bước nhảy mẫu truy cập bộ nhớ)
  - analyze memory access pattern strides (phân tích bước nhảy mẫu truy cập bộ nhớ)
  - optimize memory access pattern strides (tối ưu hóa bước nhảy mẫu truy cập bộ nhớ)
- **Register & nuance:** Low-level programming, compiler design, and hardware profiling.
- **Examples:**
  - *A unit stride memory access pattern ensures that hardware prefetchers can load cache lines efficiently.*
  - (Mẫu truy cập bộ nhớ bước nhảy đơn vị đảm bảo rằng các bộ nạp trước phần cứng có thể tải các dòng cache một cách hiệu quả.)
- **Liên결 tiếng Hàn:** 메모리 접근 패턴 간격 (memory access pattern stride) — 메모리 접근 패턴 (memory access pattern) + 간격/스트라이드 (stride).

## 11. translation lookaside buffer miss
- **Pronunciation:** /trænzˈleɪʃən ˈlʊkəˌsaɪd ˈbʌfər mɪs/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** A processor cache miss that occurs when the CPU fails to find a virtual-to-physical memory address translation in the Translation Lookaside Buffer.
- **Core meaning & mental image — Tiếng Việt:** Lỗi đệm tra cứu dịch địa chỉ (hiện tượng CPU không tìm thấy ánh xạ địa chỉ ảo sang địa chỉ vật lý trong bộ đệm TLB, buộc phải tra cứu bảng trang chậm chạp trong bộ nhớ).
- **Grammar & collocations:**
  - reduce translation lookaside buffer misses (giảm thiểu lỗi đệm tra cứu dịch địa chỉ)
  - suffer from translation lookaside buffer misses (chịu đựng lỗi đệm tra cứu dịch địa chỉ)
  - cause translation lookaside buffer misses (gây ra lỗi đệm tra cứu dịch địa chỉ)
- **Register & nuance:** Operating systems, virtual memory management.
- **Examples:**
  - *Using huge pages in Linux kernels drastically cuts down translation lookaside buffer misses for memory-intensive databases.*
  - (Việc sử dụng các trang bộ nhớ lớn trong nhân Linux cắt giảm đáng kể lỗi đệm tra cứu dịch địa chỉ cho các cơ sở dữ liệu ngốn nhiều bộ nhớ.)
- **Liên결 tiếng Hàn:** 변환 색인 버퍼 미스 (Translation Lookaside Buffer miss / TLB miss) — 변환 색인 버퍼 (TLB) + 미스 (miss).

## 12. van Emde Boas recursive layout
- **Pronunciation:** /væn ˈɛmdə ˈboʊəs rɪˈkɜrsɪv ˈleɪˌaʊt/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** A recursive tree layout strategy that stores sub-trees contiguously in memory to achieve cache-oblivious efficiency for search trees.
- **Core meaning & mental image — Tiếng Việt:** Bố cục đệ quy van Emde Boas (phương pháp bố trí cây đệ quy lưu trữ các cây con liền kề nhau trong bộ nhớ để đạt hiệu năng vô tri cache).
- **Grammar & collocations:**
  - implement van Emde Boas recursive layout (triển khai bố cục đệ quy van Emde Boas)
  - analyze van Emde Boas recursive layouts (phân tích các bố cục đệ quy van Emde Boas)
  - apply van Emde Boas recursive layouts (áp dụng các bố cục đệ quy van Emde Boas)
- **Register & nuance:** Advanced data structures and academic computer science.
- **Examples:**
  - *The van Emde Boas recursive layout allows binary search trees to achieve optimal cache performance without hardcoding page sizes.*
  - (Bố cục đệ quy van Emde Boas cho phép cây tìm kiếm nhị phân đạt hiệu năng cache tối ưu mà không cần mã hóa cứng kích thước trang.)
- **Liên결 tiếng Hàn:** 반엠데보아스 재귀적 레이아웃 (van Emde Boas recursive layout) — 반엠데보아스 (van Emde Boas) + 재귀적 레이아웃 (recursive layout).

## 13. CPU L1-L2-L3 cache hierarchy
- **Pronunciation:** /ˌsiːˌpiːˈjuː ɛl-wʌn ɛl-tuː ɛl-θriː kæʃ ˈhaɪərɑrki/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** The tiered system of small, ultra-fast static RAM memories integrated into or near the processor core, progressing from smallest/fastest (L1) to largest/slowest (L3).
- **Core meaning & mental image — Tiếng Việt:** Cấp bậc bộ nhớ cache CPU L1-L2-L3 (hệ thống các tầng nhớ tĩnh cực nhanh gắn liền với chip xử lý từ L1 nhỏ nhanh nhất đến L3 lớn chậm hơn).
- **Grammar & collocations:**
  - optimize for the CPU L1-L2-L3 cache hierarchy (tối ưu hóa cho cấp bậc bộ nhớ cache CPU L1-L2-L3)
  - bypass the CPU L1-L2-L3 cache hierarchy (bỏ qua cấp bậc bộ nhớ cache CPU L1-L2-L3)
  - fit within the CPU L1-L2-L3 cache hierarchy (vừa vặn trong cấp bậc bộ nhớ cache CPU L1-L2-L3)
- **Register & nuance:** Hardware architecture, low-level systems programming.
- **Examples:**
  - *Modern algorithm design requires fitting working datasets comfortably within the CPU L1-L2-L3 cache hierarchy.*
  - (Thiết kế thuật toán hiện đại đòi hỏi việc sắp xếp các tập dữ liệu làm việc vừa vặn thoải mái trong cấp bậc bộ nhớ cache CPU L1-L2-L3.)
- **Liên결 tiếng Hàn:** CPU L1-L2-L3 캐시 계층 구조 (CPU L1-L2-L3 cache hierarchy) — CPU L1-L2-L3 캐시 (cache) + 계층 구조 (hierarchy).

## 14. cache line eviction policy
- **Pronunciation:** /kæʃ laɪn ɪˈvɪʃən ˈpɑləsi/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** The algorithmic rule (such as LRU or FIFO) used by hardware to determine which existing cache line to overwrite when new data must be loaded.
- **Core meaning & mental image — Tiếng Việt:** Chính sách trục xuất dòng cache (quy luật phần cứng quyết định dòng cache nào sẽ bị ghi đè khi cần nạp dữ liệu mới vào bộ nhớ đệm đầy).
- **Grammar & collocations:**
  - configure the cache line eviction policy (cấu hình chính sách trục xuất dòng cache)
  - evaluate cache line eviction policies (đánh giá các chính sách trục xuất dòng cache)
  - implement a cache line eviction policy (triển khai chính sách trục xuất dòng cache)
- **Register & nuance:** Computer architecture, hardware design.
- **Examples:**
  - *Choosing an optimal cache line eviction policy minimizes thrashing in high-concurrency database workloads.*
  - (Việc lựa chọn chính sách trục xuất dòng cache tối ưu giúp giảm thiểu tình trạng giật cục trashing trong các khối lượng công việc cơ sở dữ liệu có độ đồng thời cao.)
- **Liên결 tiếng Hàn:** 캐시 라인 교체 정책 (cache line eviction policy / replacement policy) — 캐시 라인 (cache line) + 축출/교체 정책 (eviction policy).

## 15. out-of-core computational sorting
- **Pronunciation:** /aʊt əv kɔr ˌkɑmpjuˈteɪʃənəl ˈsɔrtɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** Algorithms designed to process datasets that are far too large to fit entirely into computer main memory (RAM), relying heavily on external storage.
- **Core meaning & mental image — Tiếng Việt:** Sắp xếp tính toán ngoài lõi RAM (thuật toán sắp xếp các tập dữ liệu khổng lồ không vừa RAM, phải phối hợp liên tục với ổ cứng ngoài).
- **Grammar & collocations:**
  - perform out-of-core computational sorting (thực hiện sắp xếp tính toán ngoài lõi)
  - optimize out-of-core computational sorting (tối ưu hóa sắp xếp tính toán ngoài lõi)
  - benchmark out-of-core computational sorting (đánh giá chuẩn sắp xếp tính toán ngoài lõi)
- **Register & nuance:** Big data processing, systems software.
- **Examples:**
  - *Before distributed MapReduce frameworks, out-of-core computational sorting on magnetic tape and disk was the backbone of data processing.*
  - (Trước các framework MapReduce phân tán, việc sắp xếp tính toán ngoài lõi trên băng từ và ổ đĩa là xương sống của xử lý dữ liệu.)
- **Liên결 tiếng Hàn:** 코어 외부에 기반한 연산 정렬 (out-of-core computational sorting) — 코어 외부 (out-of-core) + 연산 정렬 (computational sorting).

## 16. input-output (I/O) complexity bound
- **Pronunciation:** /ˈɪnpʊt ˈaʊtpʊt kəmˈplɛsɪti baʊnd/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** A mathematical limit on the number of block transfers required between internal memory and external storage to solve a computational problem.
- **Core meaning & mental image — Tiếng Việt:** Giới hạn độ phức tạp nhập/xuất (chặn toán học về số lượng thao tác đọc ghi khối đĩa tối thiểu cần thiết để giải quyết một bài toán).
- **Grammar & collocations:**
  - prove an I/O complexity bound (chứng minh giới hạn độ phức tạp I/O)
  - achieve the optimal I/O complexity bound (đạt được giới hạn độ phức tạp I/O tối ưu)
  - analyze I/O complexity bounds (phân tích các giới hạn độ phức tạp I/O)
- **Register & nuance:** Theoretical computer science, algorithmic complexity.
- **Examples:**
  - *The paper established a strict I/O complexity bound for external memory sorting algorithms.*
  - (Bài báo đã thiết lập giới hạn độ phức tạp I/O nghiêm ngặt cho các thuật toán sắp xếp bộ nhớ ngoài.)
- **Liên결 tiếng Hàn:** 입출력 복잡도 한계 (input-output complexity bound) — 입출력 (I/O) + 복잡도 (complexity) + 한계/바운드 (bound).

## 17. memory prefetching hardware engine
- **Pronunciation:** /ˈmɛməri priˈfɛtʃɪŋ ˈhɑrdwɛr ˈɛndʒən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** A dedicated CPU hardware subsystem that anticipates upcoming memory access requests and loads data into caches before it is explicitly requested.
- **Core meaning & mental image — Tiếng Việt:** Động cơ phần cứng nạp trước bộ nhớ (bộ phận chuyên trách trong CPU dự đoán trước các ô nhớ sắp dùng và tải ngầm vào cache trước khi lệnh được gọi).
- **Grammar & collocations:**
  - trigger the memory prefetching hardware engine (kích hoạt động cơ phần cứng nạp trước bộ nhớ)
  - benefit from the memory prefetching hardware engine (hưởng lợi từ động cơ phần cứng nạp trước bộ nhớ)
  - configure the memory prefetching hardware engine (cấu hình động cơ phần cứng nạp trước bộ nhớ)
- **Register & nuance:** Computer architecture, processor design.
- **Examples:**
  - *Writing predictable loops allows the memory prefetching hardware engine to load array elements seamlessly.*
  - (Viết các vòng lặp dễ đoán cho phép động cơ phần cứng nạp trước bộ nhớ tải các phần tử mảng một cách liền mạch.)
- **Liên결 tiếng Hàn:** 메모리 프리페칭 하드웨어 엔진 (memory prefetching hardware engine) — 메모리 프리페칭 (memory prefetching) + 하드웨어 엔진 (hardware engine).

## 18. memory alignment boundary pad
- **Pronunciation:** /ˈmɛməri əˈlaɪnmənt ˈbaʊndəri pæd/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** Extra padding bytes added to data structures so that variables align precisely with CPU word or cache line boundaries.
- **Core meaning & mental image — Tiếng Việt:** Đệm ranh giới căn chỉnh bộ nhớ (các byte đệm bổ sung giúp cấu trúc dữ liệu nằm đúng ranh giới của từ máy hoặc dòng cache để CPU truy xuất 1 nhịp).
- **Grammar & collocations:**
  - add a memory alignment boundary pad (thêm đệm ranh giới căn chỉnh bộ nhớ)
  - require a memory alignment boundary pad (yêu cầu đệm ranh giới căn chỉnh bộ nhớ)
  - inspect memory alignment boundary pads (kiểm tra các đệm ranh giới căn chỉnh bộ nhớ)
- **Register & nuance:** Systems programming, C/C++ development.
- **Examples:**
  - *SIMD vector registers require strict memory alignment boundary pads to execute high-speed mathematical instructions.*
  - (Các thanh ghi véc-tơ SIMD yêu cầu đệm ranh giới căn chỉnh bộ nhớ nghiêm ngặt để thực thi các lệnh toán học tốc độ cao.)
- **Liên결 tiếng Hàn:** 메모리 정렬 경계 패딩 (memory alignment boundary pad) — 메모리 정렬 (memory alignment) + 경계 (boundary) + 패딩 (padding).

## 19. non-uniform memory access (NUMA)
- **Pronunciation:** /nɑn-ˈjunəfɔrm ˈmɛməri ˈæksɛs (ˈnuːmə)/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or noun).
- **Core meaning — English:** A computer memory design where memory access time depends on the memory location relative to the processor core (local vs. remote socket).
- **Core meaning & mental image — Tiếng Việt:** Truy cập bộ nhớ phi đồng nhất (kiến trúc đa CPU trong đó thời gian truy cập RAM phụ thuộc vào việc ô nhớ đó gắn trực tiếp với socket CPU nào).
- **Grammar & collocations:**
  - optimize for non-uniform memory access (tối ưu hóa cho truy cập bộ nhớ phi đồng nhất)
  - navigate non-uniform memory access nodes (điều hướng các nút truy cập bộ nhớ phi đồng nhất)
  - benchmark non-uniform memory access systems (đánh giá chuẩn hệ thống truy cập bộ nhớ phi đồng nhất)
- **Register & nuance:** Enterprise server architecture, high-performance computing.
- **Examples:**
  - *Enterprise database servers must be NUMA-aware to prevent threads from constantly reading from remote socket memory.*
  - (Các máy chủ cơ sở dữ liệu doanh nghiệp phải nhận thức được NUMA để ngăn các luồng liên tục đọc từ bộ nhớ socket từ xa.)
- **Liên결 tiếng Hàn:** 비균등 메모리 접근 (Non-Uniform Memory Access / NUMA) — 비균등 (non-uniform) + 메모리 접근 (memory access).

## 20. zero-copy direct memory transfer
- **Pronunciation:** /ˈzɪroʊ-ˈkɑpi dəˈrɛkt ˈmɛməri ˈtrænsfər/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** A technique where the CPU is bypassed so that data can be transferred directly between I/O devices and application memory without unnecessary buffering.
- **Core meaning & mental image — Tiếng Việt:** Truyền dữ liệu trực tiếp không cần sao chép (kỹ thuật chuyển dữ liệu thẳng từ thiết bị ngoại vi vào RAM mà không cần CPU tốn công sao chép qua lại giữa các vùng đệm).
- **Grammar & collocations:**
  - implement zero-copy direct memory transfer (triển khai truyền dữ liệu trực tiếp không sao chép)
  - leverage zero-copy direct memory transfer (tận dụng truyền dữ liệu trực tiếp không sao chép)
  - support zero-copy direct memory transfer (hỗ trợ truyền dữ liệu trực tiếp không sao chép)
- **Register & nuance:** High-performance networking and storage systems.
- **Examples:**
  - *High-throughput packet routers leverage zero-copy direct memory transfer via DMA engines to achieve line rate speeds.*
  - (Các bộ định tuyến gói tin thông lượng cao tận dụng truyền dữ liệu trực tiếp không sao chép qua các động cơ DMA để đạt tốc độ đường truyền tối đa.)
- **Liên결 tiếng Hàn:** 제로 카피 직접 메모리 전송 (zero-copy direct memory transfer) — 제로 카피 (zero-copy) + 직접 메모리 전송 (direct memory transfer / DMA).

## 21. sequential scan cache pollution
- **Pronunciation:** /sɪˈkwɛnʃəl skæn kæʃ pəˈluːʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** The unwanted eviction of hot, frequently used cache lines caused by a massive sequential read operation streaming through large datasets.
- **Core meaning & mental image — Tiếng Việt:** Ô nhiễm cache do quét tuần tự (hiện tượng các dữ liệu nóng đang dùng bị quét sạch khỏi cache do một lệnh đọc tuần tự khổng lồ tràn qua, chiếm hết chỗ).
- **Grammar & collocations:**
  - avoid sequential scan cache pollution (tránh ô nhiễm cache do quét tuần tự)
  - suffer from sequential scan cache pollution (chịu đựng ô nhiễm cache do quét tuần tự)
  - mitigate sequential scan cache pollution (giảm thiểu ô nhiễm cache do quét tuần tự)
- **Register & nuance:** Database optimization, systems performance tuning.
- **Examples:**
  - *Database engines use ring buffers or direct I/O for table scans to prevent severe sequential scan cache pollution.*
  - (Các công cụ cơ sở dữ liệu sử dụng bộ đệm vòng hoặc I/O trực tiếp cho việc quét bảng để ngăn chặn ô nhiễm cache do quét tuần tự nghiêm trọng.)
- **Liên결 tiếng Hàn:** 순차 스캔 캐시 오염 (sequential scan cache pollution) — 순차 스캔 (sequential scan) + 캐시 오염 (cache pollution).

## 22. memory bandwidth saturation threshold
- **Pronunciation:** /ˈmɛməri ˈbændˌwɪdθ ˈsætʃəˌreɪʃən ˈθrɛʃˌhoʊld/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** The maximum data transfer rate limit of a memory subsystem, beyond which adding more processing cores yields no performance gains.
- **Core meaning & mental image — Tiếng Việt:** Ngưỡng bão hòa băng thông bộ nhớ (giới hạn tốc độ truyền tải tối đa của hệ thống RAM; vượt qua ngưỡng này, việc nhồi thêm lõi CPU cũng không làm máy chạy nhanh hơn).
- **Grammar & collocations:**
  - reach the memory bandwidth saturation threshold (đạt đến ngưỡng bão hòa băng thông bộ nhớ)
  - hit the memory bandwidth saturation threshold (chạm ngưỡng bão hòa băng thông bộ nhớ)
  - measure the memory bandwidth saturation threshold (đo lường ngưỡng bão hòa băng thông bộ nhớ)
- **Register & nuance:** High-performance computing, hardware benchmarking.
- **Examples:**
  - *Matrix multiplication kernels quickly hit the memory bandwidth saturation threshold on memory-bound multi-core processors.*
  - (Các hạt nhân nhân ma trận nhanh chóng chạm ngưỡng bão hòa băng thông bộ nhớ trên các bộ xử lý đa nhân bị giới hạn bởi băng thông RAM.)
- **Liên결 tiếng Hàn:** 메모리 대역폭 포화 임계값 (memory bandwidth saturation threshold) — 메모리 대역폭 (memory bandwidth) + 포화 (saturation) + 임계값 (threshold).

## 23. algorithmic cache efficiency ratio
- **Pronunciation:** /ˌɛlɡəˈrɪðmɪk kæʃ ɪˈfɪʃənsi ˈreɪʃioʊ/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** A metric comparing an algorithm's actual cache misses against the theoretical optimal cache complexity bound.
- **Core meaning & mental image — Tiếng Việt:** Tỷ lệ hiệu suất cache thuật toán (thước đo so sánh số lượng lỗi cache thực tế của thuật toán với giới hạn lý thuyết tối ưu).
- **Grammar & collocations:**
  - calculate the algorithmic cache efficiency ratio (tính toán tỷ lệ hiệu suất cache thuật toán)
  - improve the algorithmic cache efficiency ratio (cải thiện tỷ lệ hiệu suất cache thuật toán)
  - maximize the algorithmic cache efficiency ratio (tối đa hóa tỷ lệ hiệu suất cache thuật toán)
- **Register & nuance:** Advanced algorithm analysis, computer science research.
- **Examples:**
  - *Cache-oblivious sorting algorithms achieve an algorithmic cache efficiency ratio close to one across varying architectures.*
  - (Các thuật toán sắp xếp vô tri cache đạt tỷ lệ hiệu suất cache thuật toán gần bằng một trên các kiến trúc khác nhau.)
- **Liên결 tiếng Hàn:** 알고리즘적 캐시 효율성 비율 (algorithmic cache efficiency ratio) — 알고리즘적 (algorithmic) + 캐시 효율성 (cache efficiency) + 비율 (ratio).

## 24. contiguous memory buffer allocation
- **Pronunciation:** /kənˈtɪɡjuəs ˈmɛməri ˈbʌfər ˌæləˈkeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** Reserving an uninterrupted block of memory addresses for storing data items sequentially, maximizing hardware prefetching benefits.
- **Core meaning & mental image — Tiếng Việt:** Cấp phát bộ đệm bộ nhớ liên tục (việc đặt chỗ một khối ô nhớ không bị đứt đoạn để lưu trữ dữ liệu tuần tự, tối đa hóa lợi ích nạp trước của phần cứng).
- **Grammar & collocations:**
  - perform contiguous memory buffer allocation (thực hiện cấp phát bộ đệm bộ nhớ liên tục)
  - require contiguous memory buffer allocation (yêu cầu cấp phát bộ đệm bộ nhớ liên tục)
  - optimize contiguous memory buffer allocation (tối ưu hóa cấp phát bộ đệm bộ nhớ liên tục)
- **Register & nuance:** Systems programming, memory management.
- **Examples:**
  - *High-performance audio processing pipelines rely on contiguous memory buffer allocation to avoid dropouts.*
  - (Các đường ống xử lý âm thanh hiệu năng cao dựa vào việc cấp phát bộ đệm bộ nhớ liên tục để tránh hiện tượng ngắt quãng.)
- **Liên결 tiếng Hàn:** 연속 메모리 버퍼 할당 (contiguous memory buffer allocation) — 연속 메모리 (contiguous memory) + 버퍼 할당 (buffer allocation).

## 25. high-throughput external storage compute
- **Pronunciation:** /ˈhaɪ-ˈθruːˌpʊt ɛkˈstɜrnəl ˈstɔrɪʤ kəmˈpjuːt/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject or object).
- **Core meaning — English:** Computational tasks that process massive datasets stored on high-speed NVMe arrays or distributed storage clusters with maximal I/O throughput.
- **Core meaning & mental image — Tiếng Việt:** Tính toán lưu trữ ngoài thông lượng cao (các tác vụ tính toán xử lý tập dữ liệu khổng lồ trên ổ cứng tốc độ cao với băng thông I/O tối đa).
- **Grammar & collocations:**
  - achieve high-throughput external storage compute (đạt được tính toán lưu trữ ngoài thông lượng cao)
  - design for high-throughput external storage compute (thiết kế cho tính toán lưu trữ ngoài thông lượng cao)
  - enable high-throughput external storage compute (kích hoạt tính toán lưu trữ ngoài thông lượng cao)
- **Register & nuance:** Modern enterprise data centers, cloud storage systems.
- **Examples:**
  - *Modern graph analytics engines are architected specifically to support high-throughput external storage compute across petabyte-scale graphs.*
  - (Các công cụ phân tích đồ thị hiện đại được kiến trúc hóa đặc biệt để hỗ trợ tính toán lưu trữ ngoài thông lượng cao trên các đồ thị quy mô petabyte.)
- **Liên결 tiếng Hàn:** 고처리량 외부 스토리지 연산 (high-throughput external storage compute) — 고처리량 (high-throughput) + 외부 스토리지 (external storage) + 연산 (compute).

---

## Review in context: Part 1 (items 1–12)

Designing ultra-fast computational systems requires mastering the **cache-oblivious algorithmic paradigm** within an **external memory hierarchy model**. Engineers must mitigate the perennial **disk block transfer bottleneck** by organizing data into a **cache-conscious data layout** and utilizing **multi-way B-tree node branching**. In concurrent programming, avoiding **cache line false sharing** is vital, alongside maximizing **spatial memory locality optimization** and the **temporal locality reuse metric**. For advanced numerical workloads, techniques like **matrix transpose recursive decomposition** and controlling the **memory access pattern stride** ensure high execution speeds. Furthermore, systems must minimize **translation lookaside buffer misses** and leverage advanced data structures such as the **van Emde Boas recursive layout**.

### Vietnamese Translation — Phần 1
Thiết kế các hệ thống tính toán siêu nhanh đòi hỏi phải làm chủ mô hình thuật toán vô tri bộ nhớ đệm trong một mô hình phân cấp bộ nhớ ngoài. Các kỹ sư phải giảm thiểu nút cổ chai truyền khối đĩa kinh điển bằng cách tổ chức dữ liệu thành bố cục dữ liệu có ý thức về cache và tận dụng sự phân nhánh nút cây B đa chiều. Trong lập trình đồng thời, việc tránh chia sẻ sai dòng cache là vô cùng quan trọng, bên cạnh việc tối đa hóa tối ưu hóa tính cục bộ bộ nhớ không gian và chỉ số tái sử dụng tính cục bộ thời gian. Đối với các khối lượng công việc số học nâng cao, các kỹ thuật như phân rã đệ quy chuyển vị ma trận và kiểm soát bước nhảy mẫu truy cập bộ nhớ đảm bảo tốc độ thực thi cao. Hơn nữa, hệ thống phải giảm thiểu lỗi đệm tra cứu dịch địa chỉ và tận dụng các cấu trúc dữ liệu tiên tiến như bố cục đệ quy van Emde Boas.

---

## Review in context: Part 2 (items 13–25)

Beyond standard CPU caching inside the **CPU L1-L2-L3 cache hierarchy**, hardware relies heavily on a well-tuned **cache line eviction policy** to handle massive datasets. When data exceeds RAM limits, algorithms execute **out-of-core computational sorting** while respecting the mathematical **I/O complexity bound**. At the hardware level, the **memory prefetching hardware engine** and strict **memory alignment boundary pads** assist processor execution, while server architectures must account for **non-uniform memory access (NUMA)**. Networking and storage pipelines employ **zero-copy direct memory transfer** to bypass CPU overheads. Additionally, systems must guard against **sequential scan cache pollution** and respect the **memory bandwidth saturation threshold**. By optimizing the **algorithmic cache efficiency ratio**, utilizing **contiguous memory buffer allocation**, and enabling **high-throughput external storage compute**, modern infrastructure achieves unprecedented performance.

### Vietnamese Translation — Phần 2
Ngoài việc lưu trữ cache tiêu chuẩn bên trong cấp bậc bộ nhớ cache CPU L1-L2-L3, phần cứng còn phụ thuộc rất nhiều vào chính sách trục xuất dòng cache được tinh chỉnh tốt để xử lý các tập dữ liệu khổng lồ. Khi dữ liệu vượt quá giới hạn RAM, các thuật toán thực hiện sắp xếp tính toán ngoài lõi trong khi tôn trọng giới hạn độ phức tạp I/O toán học. Ở cấp độ phần cứng, động cơ phần cứng nạp trước bộ nhớ và đệm ranh giới căn chỉnh bộ nhớ nghiêm ngặt hỗ trợ quá trình thực thi của bộ xử lý, trong khi kiến trúc máy chủ phải tính toán đến truy cập bộ nhớ phi đồng nhất (NUMA). Các đường ống mạng và lưu trữ áp dụng truyền dữ liệu trực tiếp không cần sao chép để bỏ qua chi phí chung của CPU. Thêm vào đó, hệ thống phải phòng ngừa ô nhiễm cache do quét tuần tự và tôn trọng ngưỡng bão hòa băng thông bộ nhớ. Bằng cách tối ưu hóa tỷ lệ hiệu suất cache thuật toán, sử dụng cấp phát bộ đệm bộ nhớ liên tục và kích hoạt tính toán lưu trữ ngoài thông lượng cao, cơ sở hạ tầng hiện đại đạt được hiệu năng chưa từng có.
