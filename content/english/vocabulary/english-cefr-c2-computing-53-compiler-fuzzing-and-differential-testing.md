# C2 Vocabulary — Compiler fuzzing and differential testing

This lesson follows a compiler test from generation through reduction, oracle comparison, failure triage, and reproducible reporting.

Flow: **grammar-based fuzzing → mutation operator → seed corpus → coverage-guided fuzzing → crash deduplication → test-case reducer → minimizing test case → differential oracle → metamorphic relation → sanitizer finding → undefined-behavior trigger → compiler miscompilation → optimization miscompile → cross-compiler comparison → test-case provenance → fuzzing campaign → corpus distillation → flaky failure → reproducibility envelope → bug-bisect harness**.

## 1. grammar-based fuzzing /ˈɡræmər beɪst ˈfʌzɪŋ/
**Part of speech:** noun
**Core meaning (English):** generating test inputs from a formal grammar that describes valid or intentionally malformed program structures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo input theo grammar của ngôn ngữ lập trình.
**Grammar & collocations:** `grammar-based-fuzzing engine` — engine; `generate structured programs` — tạo.
**Examples:** `Grammar-based fuzzing reached parser states that random bytes almost never exercised.` → Fuzzing theo grammar chạm state parser mà byte ngẫu nhiên khó tới.
**Liên kết tiếng Hàn:** `문법 기반 퍼징`.

## 2. mutation operator /mjuːˈteɪʃən ˈɑpəˌreɪtər/
**Part of speech:** noun
**Core meaning (English):** a transformation applied to an existing test input to create a related variant.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép biến đổi tạo input mới từ input cũ.
**Grammar & collocations:** `mutation-operator library` — library; `inject a type conversion` — chèn.
**Examples:** `A mutation operator replaced a signed comparison with an equivalent-looking unsigned one.` → Operator đổi so sánh signed thành unsigned trông tương đương.
**Liên kết tiếng Hàn:** `변이 연산자`.

## 3. seed corpus /siːd ˈkɔrpəs/
**Part of speech:** noun
**Core meaning (English):** an initial collection of inputs from which a fuzzing campaign begins generating variants.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập input ban đầu để fuzzing phát triển.
**Grammar & collocations:** `seed-corpus curation` — curation; `bootstrap a campaign` — khởi tạo.
**Examples:** `The seed corpus included small valid programs and historical regression tests.` → Corpus seed gồm chương trình nhỏ hợp lệ và regression test cũ.
**Liên kết tiếng Hàn:** `시드 코퍼스`.

## 4. coverage-guided fuzzing /ˈkʌvərɪdʒ ɡaɪdɪd ˈfʌzɪŋ/
**Part of speech:** noun
**Core meaning (English):** fuzzing that prioritizes inputs producing new code paths, edges, states, or other coverage signals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ưu tiên input mở rộng coverage.
**Grammar & collocations:** `coverage-guided-fuzzing loop` — loop; `retain an input with new edges` — giữ.
**Examples:** `Coverage-guided fuzzing retained the rare program that entered the vectorizer fallback.` → Fuzzing giữ chương trình hiếm chạm fallback vectorizer.
**Liên kết tiếng Hàn:** `커버리지 유도 퍼징`.

## 5. crash deduplication /kræʃ diːˌduːpləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** grouping failures that share a meaningful signature so one bug is not counted as many unrelated incidents.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom crash cùng nguyên nhân thành một nhóm.
**Grammar & collocations:** `crash-deduplication key` — key; `cluster stack traces` — gom.
**Examples:** `Crash deduplication merged hundreds of inputs into one optimizer assertion failure.` → Dedup gom hàng trăm input vào một lỗi assertion optimizer.
**Liên kết tiếng Hàn:** `크래시 중복 제거`.

## 6. test-case reducer /tɛst keɪs rɪˈduːsər/
**Part of speech:** noun
**Core meaning (English):** a tool that removes irrelevant parts of a failing input while preserving its failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công cụ rút gọn input nhưng giữ lỗi.
**Grammar & collocations:** `test-case-reducer pass` — pass; `remove irrelevant syntax` — loại.
**Examples:** `The test-case reducer removed ninety percent of the program while keeping the compiler crash.` → Reducer bỏ 90% chương trình mà vẫn giữ crash.
**Liên kết tiếng Hàn:** `테스트 케이스 축소기`.

## 7. minimizing test case /ˈmɪnəˌmaɪzɪŋ tɛst keɪs/
**Part of speech:** noun
**Core meaning (English):** a reduced input that preserves a failure with as little syntax and data as practical.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** input tối giản dùng để tái hiện lỗi.
**Grammar & collocations:** `minimizing-test-case quality` — quality; `preserve a triggering sequence` — giữ.
**Examples:** `The minimizing test case made the register-allocation bug understandable to the maintainer.` → Test case tối giản làm lỗi dễ hiểu.
**Liên kết tiếng Hàn:** `최소화 테스트 케이스`.

## 8. differential oracle /ˌdɪfəˈrɛnʃəl ˈɔrəkəl/
**Part of speech:** noun
**Core meaning (English):** a comparison mechanism that treats disagreement between independent implementations as evidence of a defect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** oracle so sánh nhiều implementation để tìm khác biệt.
**Grammar & collocations:** `differential-oracle result` — result; `compare generated outputs` — so sánh.
**Examples:** `A differential oracle flagged a wrong constant-folding result without knowing the intended answer.` → Oracle phát hiện fold sai mà không cần đáp án viết tay.
**Liên kết tiếng Hàn:** `차분 오라클`.

## 9. metamorphic relation /ˌmɛtəˈmɔrfɪk rɪˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a relation predicting how output should change when a valid transformation is applied to the input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ dự đoán output sau biến đổi hợp lệ.
**Grammar & collocations:** `metamorphic-relation check` — check; `permute independent statements` — hoán vị.
**Examples:** `The metamorphic relation expected equivalent results after renaming an unused variable.` → Quan hệ metamorphic kỳ vọng kết quả tương đương sau đổi tên biến không dùng.
**Liên kết tiếng Hàn:** `메타모픽 관계`.

## 10. sanitizer finding /ˈsænəˌtaɪzər ˈfaɪndɪŋ/
**Part of speech:** noun
**Core meaning (English):** a diagnostic report from an instrumented runtime that detects memory, arithmetic, or undefined-behavior violations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát hiện lỗi từ sanitizer runtime.
**Grammar & collocations:** `sanitizer-finding triage` — triage; `instrument a test binary` — instrument.
**Examples:** `The sanitizer finding exposed an out-of-bounds read before optimization hid its symptoms.` → Finding lộ đọc ngoài biên trước khi optimization che triệu chứng.
**Liên kết tiếng Hàn:** `새니타이저 발견`.

## 11. undefined-behavior trigger /ˌʌndɪˈfaɪnd bɪˈheɪvjər ˈtrɪɡər/
**Part of speech:** noun
**Core meaning (English):** an input pattern that causes a program to execute an operation for which the language gives no defined result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mẫu input kích hoạt hành vi không được định nghĩa.
**Grammar & collocations:** `undefined-behavior-trigger pattern` — pattern; `isolate a signed overflow` — cô lập.
**Examples:** `The undefined-behavior trigger relied on a shift count equal to the word width.` → Trigger dựa vào shift bằng độ rộng word.
**Liên kết tiếng Hàn:** `정의되지 않은 동작 트리거`.

## 12. compiler miscompilation /kəmˈpaɪlər ˌmɪskɑmpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** production of executable code whose behavior differs incorrectly from the source program's specified behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compiler tạo code chạy sai so với source.
**Grammar & collocations:** `compiler-miscompilation report` — report; `preserve source semantics` — giữ.
**Examples:** `The compiler miscompilation appeared only when link-time optimization was enabled.` → Miscompilation chỉ xuất hiện khi bật LTO.
**Liên kết tiếng Hàn:** `컴파일러 오컴파일`.

## 13. optimization miscompile /ˌɑptəməˈzeɪʃən ˌmɪskəmˈpaɪl/
**Part of speech:** noun
**Core meaning (English):** a wrong-code defect introduced by a compiler optimization pass.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** optimization pass biến đổi code thành kết quả sai.
**Grammar & collocations:** `optimization-miscompile signature` — signature; `disable a transformation pass` — tắt.
**Examples:** `The optimization miscompile vanished when loop unswitching was disabled.` → Lỗi biến mất khi tắt loop unswitching.
**Liên kết tiếng Hàn:** `최적화 오컴파일`.

## 14. cross-compiler comparison /krɔs kəmˈpaɪlər kəmˈpærəsən/
**Part of speech:** noun
**Core meaning (English):** comparing outputs from different compiler implementations or versions on the same source input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so output của nhiều compiler trên cùng source.
**Grammar & collocations:** `cross-compiler-comparison matrix` — matrix; `compare generated binaries` — so sánh.
**Examples:** `Cross-compiler comparison showed that only one backend emitted the incorrect branch.` → So sánh cho thấy chỉ một backend sinh branch sai.
**Liên kết tiếng Hàn:** `컴파일러 간 비교`.

## 15. test-case provenance /tɛst keɪs ˈprɑvənəns/
**Part of speech:** noun
**Core meaning (English):** the record of how a test input was generated, transformed, minimized, and assigned to a campaign.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nguồn gốc và lịch sử biến đổi của test.
**Grammar & collocations:** `test-case-provenance record` — record; `reconstruct mutation history` — dựng lại.
**Examples:** `Test-case provenance explained which mutation introduced the failing cast.` → Provenance cho biết mutation nào thêm cast lỗi.
**Liên kết tiếng Hàn:** `테스트 케이스 출처`.

## 16. fuzzing campaign /ˈfʌzɪŋ kæmˈpeɪn/
**Part of speech:** noun
**Core meaning (English):** a planned, instrumented period of automated input generation against a target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đợt fuzzing có mục tiêu, thời gian và instrumentation.
**Grammar & collocations:** `fuzzing-campaign budget` — budget; `run a week-long campaign` — chạy.
**Examples:** `The fuzzing campaign rotated compiler flags to expose configuration-specific defects.` → Campaign xoay flag compiler để lộ lỗi theo config.
**Liên kết tiếng Hàn:** `퍼징 캠페인`.

## 17. corpus distillation /ˈkɔrpəs ˌdɪstəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** reducing a large input collection to a smaller set that preserves useful coverage and failure diversity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tinh lọc corpus nhưng giữ coverage và diversity.
**Grammar & collocations:** `corpus-distillation pass` — pass; `retain representative inputs` — giữ.
**Examples:** `Corpus distillation cut storage while preserving every unique optimizer path.` → Distillation giảm storage mà giữ path optimizer độc nhất.
**Liên kết tiếng Hàn:** `코퍼스 정제`.

## 18. flaky failure /ˈfleɪki ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** a failure that appears inconsistently under apparently identical test conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi lúc có lúc không dù điều kiện giống nhau.
**Grammar & collocations:** `flaky-failure classifier` — classifier; `stabilize scheduling noise` — ổn định.
**Examples:** `The flaky failure disappeared when the reducer fixed the thread schedule.` → Lỗi chập chờn biến mất khi cố định schedule.
**Liên kết tiếng Hàn:** `불안정한 실패`.

## 19. reproducibility envelope /rɪˌproʊdjuːsəˈbɪləti ˈɛnvəˌloʊp/
**Part of speech:** noun
**Core meaning (English):** the documented range of toolchains, hardware, flags, seeds, and environment conditions under which a failure can be reproduced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phạm vi điều kiện cần để tái hiện lỗi.
**Grammar & collocations:** `reproducibility-envelope note` — note; `pin a toolchain version` — ghim.
**Examples:** `The reproducibility envelope required one older assembler and a specific CPU feature set.` → Envelope cần assembler cũ và tập feature CPU cụ thể.
**Liên kết tiếng Hàn:** `재현성 범위`.

## 20. bug-bisect harness /bʌɡ baɪˈsɛkt ˈhɑrnɪs/
**Part of speech:** noun
**Core meaning (English):** an automated setup that tests revisions to locate the change that introduced a failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ harness tự tìm revision gây lỗi.
**Grammar & collocations:** `bug-bisect-harness script` — script; `narrow the introducing commit` — thu hẹp.
**Examples:** `The bug-bisect harness isolated the regression to a three-line vectorizer rewrite.` → Harness cô lập regression vào rewrite ba dòng.
**Liên kết tiếng Hàn:** `버그 이분 탐색 하네스`.

## Review in context

**Grammar-based fuzzing** applies a **mutation operator** to a **seed corpus**, while **coverage-guided fuzzing** retains useful paths. **Crash deduplication**, a **test-case reducer**, and a **minimizing test case** make failures tractable. A **differential oracle** or **metamorphic relation** can expose a **sanitizer finding**, an **undefined-behavior trigger**, a **compiler miscompilation**, or an **optimization miscompile**. **Cross-compiler comparison** and **test-case provenance** strengthen a **fuzzing campaign**. **Corpus distillation** limits cost, **flaky failure** needs stabilization, a **reproducibility envelope** records conditions, and a **bug-bisect harness** locates the regression.

**Bản dịch tiếng Việt:** **Grammar-based fuzzing** áp dụng **mutation operator** lên **seed corpus**, còn **coverage-guided fuzzing** giữ các path hữu ích. **Crash deduplication**, **test-case reducer** và **minimizing test case** làm lỗi dễ xử lý. **Differential oracle** hoặc **metamorphic relation** có thể lộ **sanitizer finding**, **undefined-behavior trigger**, **compiler miscompilation** hoặc **optimization miscompile**. **Cross-compiler comparison** và **test-case provenance** làm **fuzzing campaign** đáng tin hơn. **Corpus distillation** giảm chi phí, **flaky failure** cần ổn định, **reproducibility envelope** ghi điều kiện, còn **bug-bisect harness** tìm regression.
