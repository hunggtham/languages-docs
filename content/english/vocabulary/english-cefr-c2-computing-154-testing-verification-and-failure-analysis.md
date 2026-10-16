# C2 Vocabulary — Testing, verification, and failure analysis

This lesson follows software assurance from generated test cases and formal constraints through fixtures, deployment checks, and regression control.

Flow: **metamorphic testing → mutation testing → fuzz harness → concolic execution → invariant check → runtime assertion → design by contract → formal specification → test oracle → golden file → snapshot test → integration fixture → test double → mock object → stub service → fake dependency → failure injection → canary test → smoke test → regression test**.

## 1. metamorphic testing /ˌmetəˈmɔːrfɪk ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing that checks whether related input changes produce the expected relationship between outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test xem thay đổi input có tạo quan hệ output đúng như dự đoán không.
**Grammar & collocations:** `metamorphic-testing relation` — quan hệ; `transform a test input` — biến đổi.
**Examples:** `Metamorphic testing checked that sorting a duplicated list did not change its unique members.` → Test kiểm tra sort list duplicate vẫn giữ member unique.
**Liên kết tiếng Hàn:** `메타모픽 테스트`.

## 2. mutation testing /mjuːˈteɪʃən ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing that introduces small code changes to see whether the test suite detects them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cố ý sửa nhỏ code để xem test suite có bắt được không.
**Grammar & collocations:** `mutation-testing score` — điểm; `kill a mutant` — phát hiện.
**Examples:** `Mutation testing revealed that no case failed when the authorization condition was removed.` → Test cho thấy không case nào fail khi bỏ condition authorization.
**Liên kết tiếng Hàn:** `변이 테스트`.

## 3. fuzz harness /fʌz ˈhɑːrnɪs/
**Part of speech:** noun
**Core meaning (English):** a controlled wrapper that feeds generated or malformed inputs to a target and records failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** wrapper có kiểm soát đưa input sinh/nghĩa lỗi vào target và ghi failure.
**Grammar & collocations:** `fuzz-harness entry point` — entry; `minimize a crashing input` — thu nhỏ.
**Examples:** `The fuzz harness found a parser crash in a malformed multipart boundary.` → Harness tìm crash parser ở boundary multipart hỏng.
**Liên kết tiếng Hàn:** `퍼즈 하니스`.

## 4. concolic execution /kənˈkɒlɪk ˌeksɪˈkjuːʃən/
**Part of speech:** noun
**Core meaning (English):** execution that combines concrete program runs with symbolic constraints to explore alternate paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết hợp run cụ thể và constraint symbolic để khám phá path khác.
**Grammar & collocations:** `concolic-execution engine` — engine; `solve a path constraint` — giải.
**Examples:** `Concolic execution generated a value that reached the otherwise hidden error branch.` → Execution sinh value tới nhánh lỗi bị ẩn.
**Liên kết tiếng Hàn:** `콘콜릭 실행`.

## 5. invariant check /ɪnˈveriənt tʃek/
**Part of speech:** noun
**Core meaning (English):** a check that verifies a condition expected to remain true throughout an operation or state transition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check điều kiện phải luôn đúng trong operation hoặc state transition.
**Grammar & collocations:** `invariant-check failure` — failure; `verify a balance invariant` — xác minh.
**Examples:** `The invariant check caught a negative balance immediately after the transfer.` → Check bắt balance âm ngay sau transfer.
**Liên kết tiếng Hàn:** `불변식 검사`.

## 6. runtime assertion /ˈrʌntaɪm əˈsɜːrʃən/
**Part of speech:** noun
**Core meaning (English):** an executable statement that stops or reports when an assumption is false during actual execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statement chạy thật để dừng/báo khi assumption sai.
**Grammar & collocations:** `runtime-assertion message` — message; `assert a nonempty identifier` — khẳng định.
**Examples:** `The runtime assertion reported that the cache entry lacked its required owner.` → Assertion báo entry thiếu owner.
**Liên kết tiếng Hàn:** `런타임 어설션`.

## 7. design by contract /dɪˈzaɪn baɪ ˈkɒntrækt/
**Part of speech:** noun
**Core meaning (English):** a development approach that specifies preconditions, postconditions, and invariants for components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách phát triển nêu precondition, postcondition và invariant cho component.
**Grammar & collocations:** `design-by-contract precondition` — precondition; `state a postcondition` — nêu.
**Examples:** `Design by contract required the caller to supply a sorted range before the merge routine ran.` → Contract yêu cầu caller đưa range đã sort.
**Liên kết tiếng Hàn:** `계약에 의한 설계`.

## 8. formal specification /ˈfɔːrməl ˌspesɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a precise mathematical or logical description of permitted behavior and constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô tả toán học/logic chính xác về behavior được phép và constraint.
**Grammar & collocations:** `formal-specification language` — ngôn ngữ; `refine a specification` — tinh chỉnh.
**Examples:** `The formal specification stated that two clients could never own the lease simultaneously.` → Specification quy định hai client không cùng sở hữu lease.
**Liên kết tiếng Hàn:** `형식 명세`.

## 9. test oracle /test ˈɒrəkəl/
**Part of speech:** noun
**Core meaning (English):** a trusted method for deciding whether a test result is correct.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp đáng tin để quyết định test result đúng hay sai.
**Grammar & collocations:** `test-oracle ambiguity` — mơ hồ; `compare against an oracle` — so.
**Examples:** `The test oracle compared the optimized result with a slower reference implementation.` → Oracle so kết quả tối ưu với implementation tham chiếu chậm.
**Liên kết tiếng Hàn:** `테스트 오라클`.

## 10. golden file /ˈɡoʊldən faɪl/
**Part of speech:** noun
**Core meaning (English):** a reviewed reference file whose content is compared with newly generated output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** file reference đã review để so với output mới sinh.
**Grammar & collocations:** `golden-file diff` — diff; `approve an intentional change` — duyệt.
**Examples:** `The compiler test updated the golden file only after the output change was reviewed.` → Test chỉ update file vàng sau khi review.
**Liên kết tiếng Hàn:** `골든 파일`.

## 11. snapshot test /ˈsnæpʃɒt test/
**Part of speech:** noun
**Core meaning (English):** a test that compares current structured or rendered output with a stored snapshot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test so output hiện tại với snapshot đã lưu.
**Grammar & collocations:** `snapshot-test update` — update; `review a rendered diff` — review.
**Examples:** `The snapshot test exposed an unintended change in the accessibility tree.` → Snapshot test lộ thay đổi accessibility ngoài ý muốn.
**Liên kết tiếng Hàn:** `스냅샷 테스트`.

## 12. integration fixture /ˌɪntəˈɡreɪʃən ˈfɪkstʃər/
**Part of speech:** noun
**Core meaning (English):** prepared data, configuration, or environment used to make an integration test repeatable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data/config/environment chuẩn bị để integration test lặp lại được.
**Grammar & collocations:** `integration-fixture dataset` — dataset; `load a realistic fixture` — nạp.
**Examples:** `The integration fixture created a tenant with the permissions needed for the export scenario.` → Fixture tạo tenant có quyền cho scenario export.
**Liên kết tiếng Hàn:** `통합 테스트 픽스처`.

## 13. test double /test ˈdʌbəl/
**Part of speech:** noun
**Core meaning (English):** a replacement component used in a test instead of a real dependency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component thay thế dùng trong test thay dependency thật.
**Grammar & collocations:** `test-double boundary` — boundary; `replace an external service` — thay.
**Examples:** `The test double returned a controlled timeout without contacting the payment provider.` → Double trả timeout kiểm soát mà không gọi provider.
**Liên kết tiếng Hàn:** `테스트 더블`.

## 14. mock object /mɒk ˈɒbdʒɪkt/
**Part of speech:** noun
**Core meaning (English):** a programmable test replacement that records calls and can assert how a collaborator was used.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** object thay thế có thể ghi call và assert cách collaborator được dùng.
**Grammar & collocations:** `mock-object expectation` — expectation; `verify a method call` — xác minh.
**Examples:** `The mock object verified that the audit writer received the redacted identifier.` → Mock xác minh writer nhận identifier đã che.
**Liên kết tiếng Hàn:** `목 객체`.

## 15. stub service /stʌb ˈsɜːrvɪs/
**Part of speech:** noun
**Core meaning (English):** a minimal service that returns predetermined responses so a dependent system can be tested.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** service tối thiểu trả response định sẵn để test system phụ thuộc.
**Grammar & collocations:** `stub-service endpoint` — endpoint; `return a fixed response` — trả.
**Examples:** `The stub service returned a slow response to exercise the client's timeout path.` → Stub trả response chậm để test timeout.
**Liên kết tiếng Hàn:** `스텁 서비스`.

## 16. fake dependency /feɪk dɪˈpendənsi/
**Part of speech:** noun
**Core meaning (English):** a lightweight working implementation used in tests instead of a production dependency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** implementation nhẹ nhưng chạy được, dùng thay dependency production.
**Grammar & collocations:** `fake-dependency store` — store; `exercise a realistic workflow` — mô phỏng.
**Examples:** `The fake dependency persisted records in memory so the workflow test remained fast.` → Dependency giả lưu record trong memory để test nhanh.
**Liên kết tiếng Hàn:** `가짜 종속성`.

## 17. failure injection /ˈfeɪljər ɪnˈdʒekʃən/
**Part of speech:** noun
**Core meaning (English):** deliberately introducing faults or delays to observe how a system behaves under failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cố ý đưa fault/delay vào để xem system phản ứng khi lỗi.
**Grammar & collocations:** `failure-injection experiment` — experiment; `inject a network delay` — chèn.
**Examples:** `Failure injection showed that the service leaked connections when the database timed out.` → Injection cho thấy service leak connection khi database timeout.
**Liên kết tiếng Hàn:** `장애 주입`.

## 18. canary test /ˈkænəri test/
**Part of speech:** noun
**Core meaning (English):** a small, early test or deployment check used to detect serious problems before broad exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test/deployment nhỏ chạy sớm để bắt lỗi nghiêm trọng trước khi mở rộng.
**Grammar & collocations:** `canary-test cohort` — nhóm; `observe a limited rollout` — theo dõi.
**Examples:** `The canary test detected elevated latency before the release reached every region.` → Canary bắt latency tăng trước khi release toàn vùng.
**Liên kết tiếng Hàn:** `카나리아 테스트`.

## 19. smoke test /smoʊk test/
**Part of speech:** noun
**Core meaning (English):** a quick test of essential paths that checks whether a build is broadly usable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test nhanh path cốt lõi xem build có dùng được rộng rãi không.
**Grammar & collocations:** `smoke-test suite` — suite; `exercise the login path` — chạy.
**Examples:** `The smoke test failed because the service could not start with the new configuration.` → Smoke test fail vì service không start với config mới.
**Liên kết tiếng Hàn:** `스모크 테스트`.

## 20. regression test /rɪˈɡreʃən test/
**Part of speech:** noun
**Core meaning (English):** a test that protects behavior which previously worked from breaking after a change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test bảo vệ behavior từng đúng khỏi bị hỏng sau thay đổi.
**Grammar & collocations:** `regression-test case` — case; `lock in a bug fix` — cố định.
**Examples:** `The regression test preserved the parsing behavior fixed in the previous release.` → Test giữ behavior parse đã sửa ở release trước.
**Liên kết tiếng Hàn:** `회귀 테스트`.

## Review in context

**Metamorphic testing** checks relationships between outputs, while **mutation testing** asks whether the suite detects small code changes. A **fuzz harness** can pair with **concolic execution** to explore paths; an **invariant check** and **runtime assertion** catch broken assumptions. **Design by contract** states conditions, and a **formal specification** makes them precise. A **test oracle** judges results; a **golden file** and **snapshot test** preserve reviewed output. An **integration fixture** supplies repeatable data. A **test double** may be a **mock object**, **stub service**, or **fake dependency**. **Failure injection** exercises faults, a **canary test** limits rollout risk, a **smoke test** checks basic health, and a **regression test** protects repaired behavior.

**Bản dịch tiếng Việt:** **Metamorphic testing** kiểm tra quan hệ giữa output, còn **mutation testing** xem suite có bắt thay đổi code nhỏ không. **Fuzz harness** có thể kết hợp **concolic execution** để khám phá path; **invariant check** và **runtime assertion** bắt assumption hỏng. **Design by contract** nêu condition, còn **formal specification** làm chúng chính xác. **Test oracle** đánh giá result; **golden file** và **snapshot test** giữ output đã review. **Integration fixture** cung cấp data lặp lại được. **Test double** có thể là **mock object**, **stub service** hoặc **fake dependency**. **Failure injection** thử fault, **canary test** giới hạn rủi ro rollout, **smoke test** kiểm tra health cơ bản, còn **regression test** bảo vệ behavior đã sửa.
