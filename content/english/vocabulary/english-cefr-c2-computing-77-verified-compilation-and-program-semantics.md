# C2 Vocabulary — Verified compilation and program semantics

This lesson follows a verified compiler from typed intermediate representations through lowering, optimization, machine-code semantics, and independently checked certificates.

Flow: **typed intermediate representation → compiler correctness → translation validation → semantic preservation → register allocation invariant → instruction selection → peephole equivalence → SSA representation → alias partition → abstract domain → strongest postcondition → loop invariant → symbolic evaluator → superoptimization → certificate checker → verified compilation → compiler trust base → deterministic build → proof-carrying artifact → lowering relation**.

## 1. typed intermediate representation /taɪpt ˌɪntərˈmiːdiət ˌreprɪzenˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** an internal program form whose syntax carries static type information for later compiler passes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dạng chương trình nội bộ mang thông tin type cho các pass sau.
**Grammar & collocations:** `typed-intermediate-representation invariant` — invariant; `lower a typed expression` — hạ.
**Examples:** `The typed intermediate representation rejected an impossible pointer conversion before optimization.` → IR có type từ chối cast pointer sai.
**Liên kết tiếng Hàn:** `형식화된 중간 표현`.

## 2. compiler correctness /kəmˈpaɪlər kəˈrektnəs/
**Part of speech:** noun
**Core meaning (English):** the property that compiled programs preserve the behavior specified by their source programs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compiler giữ hành vi được source quy định.
**Grammar & collocations:** `compiler-correctness theorem` — theorem; `relate source and target behavior` — liên hệ.
**Examples:** `Compiler correctness prevented an optimization from changing the program's observable result.` → Correctness ngăn optimization đổi kết quả.
**Liên kết tiếng Hàn:** `컴파일러 정확성`.

## 3. translation validation /trænzˈleɪʃən vælɪˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking each generated translation against its input instead of proving one compiler implementation correct for all inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra từng bản dịch thay vì chứng minh toàn compiler.
**Grammar & collocations:** `translation-validation pass` — pass; `validate a transformed module` — xác nhận.
**Examples:** `Translation validation caught a bug in one rare vectorization case.` → Validation bắt bug trong ca vector hiếm.
**Liên kết tiếng Hàn:** `변환 검증`.

## 4. semantic preservation /sɪˈmæntɪk ˌprezərˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** maintaining the meaning of a program while changing its representation or execution strategy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ nghĩa chương trình khi đổi biểu diễn hoặc cách chạy.
**Grammar & collocations:** `semantic-preservation lemma` — lemma; `preserve observable behavior` — bảo toàn.
**Examples:** `Semantic preservation allowed the optimizer to reorder independent instructions safely.` → Preservation cho reorder instruction độc lập.
**Liên kết tiếng Hàn:** `의미 보존`.

## 5. register allocation invariant /ˈredʒɪstər ˌæləˈkeɪʃən ɪnˈveəriənt/
**Part of speech:** noun
**Core meaning (English):** a condition ensuring that every live value has a valid, nonconflicting register or spill location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện mỗi value sống có register hoặc spill không xung đột.
**Grammar & collocations:** `register-allocation-invariant proof` — proof; `spill a live range` — spill.
**Examples:** `The register allocation invariant ruled out two live variables sharing one hardware register.` → Invariant ngăn hai variable dùng cùng register.
**Liên kết tiếng Hàn:** `레지스터 할당 불변식`.

## 6. instruction selection /ɪnˈstrʌkʃən səˈlekʃən/
**Part of speech:** noun
**Core meaning (English):** choosing target-machine instructions that implement an intermediate operation with acceptable cost and behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn instruction máy đích để thực hiện operation trung gian.
**Grammar & collocations:** `instruction-selection rule` — rule; `match an instruction pattern` — khớp.
**Examples:** `Instruction selection chose a fused multiply-add when the target processor supported it.` → Selection chọn FMA khi CPU hỗ trợ.
**Liên kết tiếng Hàn:** `명령어 선택`.

## 7. peephole equivalence /ˈpiːphoʊl ɪˈkwɪvələns/
**Part of speech:** noun
**Core meaning (English):** equivalence between a short instruction sequence and a locally optimized replacement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tương đương giữa chuỗi instruction ngắn và bản thay thế tối ưu.
**Grammar & collocations:** `peephole-equivalence rule` — rule; `rewrite a local sequence` — viết lại.
**Examples:** `Peephole equivalence replaced two moves with one addressing instruction.` → Equivalence thay hai move bằng một instruction.
**Liên kết tiếng Hàn:** `피프홀 동치`.

## 8. SSA representation /ˌes es ˈeɪ reprɪzenˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** an intermediate form in which each variable assignment creates a distinct name.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** IR mỗi lần gán biến tạo tên riêng.
**Grammar & collocations:** `SSA-representation phi node` — node; `rename a definition` — đổi tên.
**Examples:** `The SSA representation made data dependencies explicit for the optimizer.` → SSA làm dependency rõ cho optimizer.
**Liên kết tiếng Hàn:** `SSA 표현`.

## 9. alias partition /ˈeɪliəs pɑːrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** a division of memory references into groups that may or may not designate the same location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia reference memory theo khả năng trỏ cùng vị trí.
**Grammar & collocations:** `alias-partition analysis` — analysis; `separate disjoint locations` — tách.
**Examples:** `The alias partition let the optimizer reorder loads proven independent.` → Partition cho reorder load độc lập.
**Liên kết tiếng Hàn:** `별칭 분할`.

## 10. abstract domain /ˈæbstrækt doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** a mathematical space of approximate program facts used by static analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không gian toán của fact xấp xỉ cho static analysis.
**Grammar & collocations:** `abstract-domain transformer` — transformer; `compute an over-approximation` — tính.
**Examples:** `The abstract domain tracked possible integer ranges without executing the program.` → Domain theo dõi range mà không chạy.
**Liên kết tiếng Hàn:** `추상 영역`.

## 11. strongest postcondition /ˈstrɔŋɡɪst poʊstkənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** the most precise condition guaranteed after a command executes from states satisfying a precondition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện chính xác nhất sau command từ precondition.
**Grammar & collocations:** `strongest-postcondition calculation` — calculation; `propagate a state fact` — lan truyền.
**Examples:** `The strongest postcondition captured the exact range after the checked increment.` → Postcondition ghi range sau increment.
**Liên kết tiếng Hàn:** `최강 사후 조건`.

## 12. loop invariant /luːp ɪnˈveəriənt/
**Part of speech:** noun
**Core meaning (English):** a property that holds before and after every iteration of a loop.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuộc tính đúng trước và sau mọi vòng lặp.
**Grammar & collocations:** `loop-invariant annotation` — annotation; `induct over iterations` — quy nạp.
**Examples:** `The loop invariant established that the accumulator equaled the sum of processed elements.` → Invariant chứng minh accumulator bằng tổng phần tử.
**Liên kết tiếng Hàn:** `루프 불변식`.

## 13. symbolic evaluator /sɪmˈbɒlɪk ɪˈvæljueɪtər/
**Part of speech:** noun
**Core meaning (English):** an interpreter that executes expressions over symbolic values and accumulates path constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interpreter chạy trên value symbolic và gom constraint path.
**Grammar & collocations:** `symbolic-evaluator state` — state; `fork a path condition` — tách.
**Examples:** `The symbolic evaluator forked when a secret-dependent branch was encountered.` → Evaluator tách path ở branch phụ thuộc secret.
**Liên kết tiếng Hàn:** `기호 평가기`.

## 14. superoptimization /ˌsuːpərˌɒptɪmaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** exhaustive or solver-guided search for the shortest or fastest instruction sequence implementing a specification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm exhaustive chuỗi instruction ngắn hoặc nhanh nhất.
**Grammar & collocations:** `superoptimization search` — search; `enumerate instruction sequences` — liệt kê.
**Examples:** `Superoptimization found a three-instruction sequence that beat the compiler heuristic.` → Search tìm chuỗi ba instruction tốt hơn heuristic.
**Liên kết tiếng Hàn:** `슈퍼최적화`.

## 15. certificate checker /sərˈtɪfɪkət ˈtʃekər/
**Part of speech:** noun
**Core meaning (English):** a small trusted program that verifies a proof or optimization certificate produced elsewhere.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chương trình nhỏ kiểm tra certificate do công cụ khác tạo.
**Grammar & collocations:** `certificate-checker kernel` — kernel; `validate a proof certificate` — xác minh.
**Examples:** `The certificate checker accepted the optimized block without trusting the search engine.` → Checker chấp nhận block mà không tin search engine.
**Liên kết tiếng Hàn:** `인증서 검사기`.

## 16. verified compilation /ˈverɪfaɪd kəmˈpaɪleɪʃən/
**Part of speech:** noun
**Core meaning (English):** compilation whose correctness is established by a formal proof or a checked certificate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biên dịch có proof formal hoặc certificate được kiểm.
**Grammar & collocations:** `verified-compilation pipeline` — pipeline; `compile with a proof obligation` — biên dịch.
**Examples:** `Verified compilation increased confidence in safety-critical firmware updates.` → Compilation verified tăng tin cậy firmware quan trọng.
**Liên kết tiếng Hàn:** `검증된 컴파일`.

## 17. compiler trust base /kəmˈpaɪlər trʌst beɪs/
**Part of speech:** noun
**Core meaning (English):** the small set of compiler components that must be trusted for a verification argument to hold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập component compiler nhỏ phải tin để argument đúng.
**Grammar & collocations:** `compiler-trust-base audit` — audit; `minimize trusted code` — giảm.
**Examples:** `The audit reduced the compiler trust base to a parser and a certificate checker.` → Audit giảm trust base còn parser và checker.
**Liên kết tiếng Hàn:** `컴파일러 신뢰 기반`.

## 18. deterministic build /dɪˌtɜːrmɪˈnɪstɪk bɪld/
**Part of speech:** noun
**Core meaning (English):** a build process that produces identical artifacts from identical declared inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** build cùng input tạo artifact giống hệt.
**Grammar & collocations:** `deterministic-build check` — check; `reproduce a binary` — tái tạo.
**Examples:** `A deterministic build let reviewers compare the certified binary byte for byte.` → Build deterministic cho so sánh binary từng byte.
**Liên kết tiếng Hàn:** `결정적 빌드`.

## 19. proof-carrying artifact /pruːf ˈkæriɪŋ ˈɑːrtɪfækt/
**Part of speech:** noun
**Core meaning (English):** a software artifact distributed together with a machine-checkable proof of a required property.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** artifact đi cùng proof máy kiểm được của property cần.
**Grammar & collocations:** `proof-carrying-artifact format` — format; `ship code with evidence` — phân phối.
**Examples:** `The proof-carrying artifact included a certificate that its memory accesses were bounded.` → Artifact gồm certificate về memory access.
**Liên kết tiếng Hàn:** `증명을 포함한 산출물`.

## 20. lowering relation /ˈloʊərɪŋ rɪˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a formal relation connecting an operation in one intermediate language to its implementation in a lower-level language.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ formal nối operation ở IR với implementation tầng thấp.
**Grammar & collocations:** `lowering-relation lemma` — lemma; `map an operation to machine code` — ánh xạ.
**Examples:** `The lowering relation justified replacing a bounds check with a target instruction sequence.` → Relation biện minh thay check bằng instruction.
**Liên kết tiếng Hàn:** `낮춤 관계`.

## Review in context

A **typed intermediate representation** supports **compiler correctness**, while **translation validation** checks each transformation for **semantic preservation**. A **register allocation invariant**, **instruction selection**, **peephole equivalence**, and **SSA representation** control low-level changes; an **alias partition** and **abstract domain** summarize memory facts. A **strongest postcondition** and **loop invariant** support a **symbolic evaluator**, while **superoptimization** searches faster sequences. A **certificate checker** enables **verified compilation** with a small **compiler trust base**. A **deterministic build** emits a **proof-carrying artifact**, and a **lowering relation** connects every intermediate operation to machine code.

**Bản dịch tiếng Việt:** **IR có type** hỗ trợ **tính đúng compiler**, còn **translation validation** kiểm tra từng biến đổi để giữ **bảo toàn ngữ nghĩa**. **Invariant cấp register**, **chọn instruction**, **tương đương peephole** và **biểu diễn SSA** kiểm soát thay đổi thấp tầng; **partition alias** và **domain trừu tượng** tóm tắt fact memory. **Strongest postcondition** và **loop invariant** hỗ trợ **evaluator symbolic**, còn **superoptimization** tìm chuỗi nhanh hơn. **Certificate checker** giúp **biên dịch verified** với **trust base compiler** nhỏ. **Build deterministic** tạo **artifact mang proof**, và **lowering relation** nối mọi operation trung gian với machine code.
