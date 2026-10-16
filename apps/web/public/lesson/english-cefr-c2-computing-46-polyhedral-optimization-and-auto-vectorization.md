# C2 Vocabulary — Polyhedral optimization and auto-vectorization

This lesson follows a compiler transformation from dependence analysis through loop restructuring, vectorization, legality, and cost modeling.

Flow: **polyhedral model → iteration domain → affine transformation → dependence graph → schedule tree → loop interchange → loop tiling → strip mining → loop fusion → loop fission → software pipelining → auto-vectorization → vectorization width → alignment assumption → predication → reduction recognition → alias analysis → cost model → legality check → epilogue loop**.

## 1. polyhedral model /ˌpɑliˈhiːdrəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a mathematical representation of loop nests using integer points in affine domains and relations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình hóa loop bằng miền affine và điểm nguyên.
**Grammar & collocations:** `polyhedral-model transformation` — transformation; `represent a loop nest` — biểu diễn.
**Examples:** `The polyhedral model exposed legal parallelism in the nested stencil loop.` → Mô hình lộ song song hợp lệ trong loop stencil.
**Liên kết tiếng Hàn:** `다면체 모델`.

## 2. iteration domain /ˌɪtəˈreɪʃən dəˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** the set of integer iteration points at which a loop body executes, constrained by affine bounds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập điểm nguyên mà loop thật sự chạy.
**Grammar & collocations:** `iteration-domain constraint` — constraint; `bound an iteration set` — giới hạn.
**Examples:** `The iteration domain excluded boundary points where the stencil had no valid neighbors.` → Domain loại điểm biên không đủ hàng xóm.
**Liên kết tiếng Hàn:** `반복 영역`.

## 3. affine transformation /əˈfaɪn ˌtrænsfərˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a linear transformation plus an offset used to change loop coordinates while preserving analyzable structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi tọa độ loop bằng phép tuyến tính và offset.
**Grammar & collocations:** `affine-transformation matrix` — matrix; `transform an iteration coordinate` — biến đổi.
**Examples:** `An affine transformation skewed the loop to expose wavefront parallelism.` → Biến đổi affine skew loop để lộ song song wavefront.
**Liên kết tiếng Hàn:** `아핀 변환`.

## 4. dependence graph /dɪˈpɛndəns ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph recording ordering constraints between operations that must preserve data or control dependencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph ghi quan hệ trước–sau mà compiler không được phá.
**Grammar & collocations:** `dependence-graph edge` — edge; `analyze loop-carried dependence` — phân tích.
**Examples:** `The dependence graph showed that only the innermost update blocked vectorization.` → Graph cho thấy chỉ update trong cùng block vectorization.
**Liên kết tiếng Hàn:** `의존성 그래프`.

## 5. schedule tree /ˈskɛdʒuːl triː/
**Part of speech:** noun
**Core meaning (English):** a hierarchical representation of loop execution order and transformations in a polyhedral compiler.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cây mô tả thứ tự chạy và transformation của loop.
**Grammar & collocations:** `schedule-tree node` — node; `rewrite an execution schedule` — viết lại.
**Examples:** `The schedule tree placed tile loops outside the parallel band.` → Schedule tree đặt loop tile ngoài vùng parallel.
**Liên kết tiếng Hàn:** `스케줄 트리`.

## 6. loop interchange /luːp ˈɪntərˌtʃeɪndʒ/
**Part of speech:** noun
**Core meaning (English):** swapping the nesting order of loops to improve locality, parallelism, or vector access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi thứ tự loop trong/ngoài để truy cập tốt hơn.
**Grammar & collocations:** `loop-interchange legality` — legality; `swap loop levels` — đổi.
**Examples:** `Loop interchange made the innermost access contiguous in memory.` → Interchange làm access trong cùng liên tục.
**Liên kết tiếng Hàn:** `루프 교환`.

## 7. loop tiling /luːp ˈtaɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** partitioning loop iterations into blocks that improve reuse in a target cache or memory level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia iteration thành tile vừa cache.
**Grammar & collocations:** `loop-tiling factor` — factor; `fit a tile in cache` — vừa.
**Examples:** `Loop tiling reduced capacity misses in the blocked matrix update.` → Tiling giảm miss capacity.
**Liên kết tiếng Hàn:** `루프 타일링`.

## 8. strip mining /strɪp ˈmaɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** splitting a loop into an outer loop over chunks and an inner loop over a fixed-size strip.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách loop thành chunk ngoài và strip cố định bên trong.
**Grammar & collocations:** `strip-mining factor` — factor; `strip a long iteration range` — chia.
**Examples:** `Strip mining exposed a fixed-width inner loop for the vectorizer.` → Strip mining tạo inner loop width cố định.
**Liên kết tiếng Hàn:** `스트립 마이닝`.

## 9. loop fusion /luːp ˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** combining adjacent loops with compatible bounds to reduce traversal overhead and improve data reuse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp loop liền nhau để giảm traversal và tăng reuse.
**Grammar & collocations:** `loop-fusion opportunity` — opportunity; `fuse compatible loops` — gộp.
**Examples:** `Loop fusion kept the intermediate value in a register between two elementwise operations.` → Fusion giữ value trung gian trong register.
**Liên kết tiếng Hàn:** `루프 융합`.

## 10. loop fission /luːp ˈfɪʃən/
**Part of speech:** noun
**Core meaning (English):** splitting one loop into multiple loops to separate dependences, improve locality, or enable different schedules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách loop để mỗi phần có schedule và memory behavior tốt hơn.
**Grammar & collocations:** `loop-fission transformation` — transformation; `separate independent statements` — tách.
**Examples:** `Loop fission separated a cache-friendly update from an unpredictable branch.` → Fission tách update thân thiện cache khỏi branch khó đoán.
**Liên kết tiếng Hàn:** `루프 분할`.

## 11. software pipelining /ˈsɔftˌwɛr ˈpaɪpˌlaɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** scheduling operations from different loop iterations to overlap latency and keep functional units busy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trộn operation của nhiều iteration để che latency.
**Grammar & collocations:** `software-pipelining schedule` — schedule; `overlap loop iterations` — chồng.
**Examples:** `Software pipelining overlapped memory loads with arithmetic from the previous iteration.` → Pipelining chồng load với arithmetic.
**Liên kết tiếng Hàn:** `소프트웨어 파이프라이닝`.

## 12. auto-vectorization /ˌɔtoʊ ˌvɛktərəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** compiler conversion of scalar loop operations into vector instructions without explicit programmer intrinsics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compiler tự biến scalar loop thành instruction vector.
**Grammar & collocations:** `auto-vectorization report` — report; `vectorize a loop automatically` — tự động.
**Examples:** `Auto-vectorization failed because the compiler could not prove pointer independence.` → Auto-vectorization fail vì không chứng minh pointer độc lập.
**Liên kết tiếng Hàn:** `자동 벡터화`.

## 13. vectorization width /ˌvɛktərəˈzeɪʃən wɪdθ/
**Part of speech:** noun
**Core meaning (English):** the number of scalar elements processed by one vector instruction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một instruction vector xử lý bao nhiêu phần tử scalar.
**Grammar & collocations:** `vectorization-width choice` — choice; `select a SIMD width` — chọn.
**Examples:** `The vectorization width was reduced when register pressure exceeded the target.` → Width giảm khi thiếu register.
**Liên kết tiếng Hàn:** `벡터화 폭`.

## 14. alignment assumption /əˈlaɪnmənt əˈsʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** a compiler assumption that data addresses satisfy a boundary needed for efficient or safe vector loads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả định địa chỉ data thẳng hàng để load vector.
**Grammar & collocations:** `alignment-assumption metadata` — metadata; `prove pointer alignment` — chứng minh.
**Examples:** `The alignment assumption enabled aligned loads but required a guarded fallback for unknown callers.` → Assumption cho aligned load nhưng cần fallback.
**Liên kết tiếng Hàn:** `정렬 가정`.

## 15. predication /ˌprɛdəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** executing an instruction conditionally under a mask instead of branching to separate control-flow paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng mask điều kiện thay vì branch riêng.
**Grammar & collocations:** `predication mask` — mask; `predicate a vector instruction` — áp mask.
**Examples:** `Predication handled the boundary elements without creating a scalar cleanup branch.` → Predication xử lý phần tử biên không cần branch.
**Liên kết tiếng Hàn:** `조건부 실행`.

## 16. reduction recognition /rɪˈdʌkʃən ˌrɛkəɡˈnɪʃən/
**Part of speech:** noun
**Core meaning (English):** compiler identification of a loop pattern that combines many values into one through an associative operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhận ra loop cộng/gộp nhiều value thành một.
**Grammar & collocations:** `reduction-recognition pass` — pass; `identify an associative reduction` — nhận diện.
**Examples:** `Reduction recognition allowed the compiler to vectorize the sum with a tree of partial results.` → Recognition cho phép vectorize sum.
**Liên kết tiếng Hàn:** `축약 인식`.

## 17. alias analysis /ˈeɪliəs əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** determining whether two references may designate overlapping memory locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra hai pointer có thể trỏ cùng vùng nhớ không.
**Grammar & collocations:** `alias-analysis result` — result; `prove references disjoint` — chứng minh.
**Examples:** `Alias analysis proved that the input and output slices did not overlap.` → Phân tích chứng minh slice không overlap.
**Liên kết tiếng Hàn:** `앨리어스 분석`.

## 18. cost model /kɔst ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** an estimate used by a compiler to compare the expected benefit and expense of alternative transformations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình ước tính transformation nào đáng làm.
**Grammar & collocations:** `cost-model heuristic` — heuristic; `estimate transformation profitability` — ước tính.
**Examples:** `The cost model rejected fusion because the larger live range would increase spills.` → Cost model bỏ fusion vì live range lớn gây spill.
**Liên kết tiếng Hàn:** `비용 모델`.

## 19. legality check /lɪˈɡæləti tʃɛk/
**Part of speech:** noun
**Core meaning (English):** verification that a proposed compiler transformation preserves dependences, semantics, and required memory behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra transformation có giữ đúng semantics và dependency không.
**Grammar & collocations:** `legality-check failure` — failure; `validate a loop transformation` — xác nhận.
**Examples:** `The legality check rejected interchange because it reversed a loop-carried dependence.` → Check từ chối interchange vì đảo dependency.
**Liên kết tiếng Hàn:** `적법성 검사`.

## 20. epilogue loop /ˈɛpəˌlɔɡ luːp/
**Part of speech:** noun
**Core meaning (English):** a cleanup loop that handles remaining iterations when the main vectorized loop cannot cover the full trip count.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loop dọn phần tử còn dư sau vector loop chính.
**Grammar & collocations:** `epilogue-loop generation` — generation; `handle a remainder count` — xử lý.
**Examples:** `The epilogue loop processed three elements left after the eight-wide vector loop.` → Epilogue xử lý ba phần tử dư.
**Liên kết tiếng Hàn:** `에필로그 루프`.

## Review in context

The **polyhedral model** represents an **iteration domain** and applies an **affine transformation** while respecting a **dependence graph** and **schedule tree**. Transformations include **loop interchange**, **loop tiling**, **strip mining**, **loop fusion**, **loop fission**, and **software pipelining**. **Auto-vectorization** chooses a **vectorization width** using an **alignment assumption** and **predication**; **reduction recognition** and **alias analysis** establish opportunities. A **cost model** and **legality check** decide whether the change is profitable and safe, with an **epilogue loop** handling leftovers.

**Bản dịch tiếng Việt:** **Polyhedral model** biểu diễn **iteration domain** và áp dụng **affine transformation** trong khi giữ **dependence graph** và **schedule tree**. Các transformation gồm **loop interchange**, **loop tiling**, **strip mining**, **loop fusion**, **loop fission** và **software pipelining**. **Auto-vectorization** chọn **vectorization width** dựa trên **alignment assumption** và **predication**; **reduction recognition** và **alias analysis** xác định cơ hội. **Cost model** và **legality check** quyết định thay đổi có đáng và an toàn không, còn **epilogue loop** xử lý phần dư.
