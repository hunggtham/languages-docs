# C2+ Vocabulary — Research software and computational reproducibility

This lesson follows how research software is specified, tested, packaged, and reviewed so that computational claims can be rerun. The network is **dependency manifest lock → environment capture → container image → repeatable build → seeded randomness → numerical reproducibility → floating-point nondeterminism → parallel aggregation → hardware heterogeneity → continuous integration → change-detection test → baseline artifact → unit test → integration test → end-to-end test → code coverage → source analysis → style gate → reproducibility package → executable paper → workflow provenance → artifact review → replication package → computational appendix → software citation**.

## 1. dependency manifest lock /dɪˈpɛndənsi ˈmænəˌfɛst lɑk/
**Part of speech:** noun
**Core meaning (English):** a fixed record of software dependencies and versions used to make an environment reproducible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dependency manifest lock cố định library/version để environment không tự drift.
**Grammar & collocations:** `dependency-manifest lockfile` — lockfile; `freeze a dependency` — freeze; `version-pinned environment` — environment.
**Examples:** `The dependency manifest lock prevented a library update from changing the simulation output.` → Lock ngăn library update đổi output.
**Liên kết tiếng Hàn:** `종속성 매니페스트 잠금` — dependency manifest lock.

## 2. environment capture /ɪnˈvaɪrənmənt ˈkæptʃər/
**Part of speech:** noun
**Core meaning (English):** recording the operating system, libraries, tools, settings, and hardware assumptions needed to rerun software.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** environment capture lưu OS, library, tool, setting và hardware assumption.
**Grammar & collocations:** `environment-capture record` — record; `capture a runtime` — capture; `recreate an environment` — recreate.
**Examples:** `Environment capture documented the compiler and numerical library used for the analysis.` → Capture ghi compiler và library.
**Liên kết tiếng Hàn:** `환경 캡처` — environment capture.

## 3. container image /kənˈteɪnər ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a packaged filesystem and runtime specification that can reproduce an application environment across compatible systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** container image đóng gói filesystem/runtime để chạy lại environment.
**Grammar & collocations:** `container-image registry` — registry; `build an image` — build; `isolated runtime` — runtime.
**Examples:** `The container image let the reviewer run the analysis without installing each package manually.` → Image giúp reviewer chạy analysis.
**Liên kết tiếng Hàn:** `컨테이너 이미지` — container image.

## 4. repeatable build /rɪˈpiːtəbəl bɪld/
**Part of speech:** noun
**Core meaning (English):** a build process that produces equivalent software artifacts from the same source and specified inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** repeatable build tạo artifact tương đương khi source/input giống nhau.
**Grammar & collocations:** `repeatable-build pipeline` — pipeline; `rebuild an artifact` — rebuild; `same source inputs` — inputs.
**Examples:** `A repeatable build produced the same executable from the archived commit.` → Build tạo executable giống nhau.
**Liên kết tiếng Hàn:** `반복 가능한 빌드` — repeatable build.

## 5. seeded randomness /siːdɪd ˈrændəmnəs/
**Part of speech:** noun
**Core meaning (English):** controlled pseudorandom behavior initialized with a recorded seed so that a computational run can be repeated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** seeded randomness ghi seed để random sequence có thể reproduce.
**Grammar & collocations:** `seeded-randomness setting` — setting; `set a random seed` — set; `repeat a stochastic run` — repeat.
**Examples:** `Seeded randomness made the bootstrap sample identical across the two validation runs.` → Seed làm bootstrap sample giống nhau.
**Liên kết tiếng Hàn:** `시드 난수성` — seeded randomness.

## 6. numerical reproducibility /ˈnuːmərɪkəl rɪˌproʊdjuːsəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** ability to obtain sufficiently comparable numerical results when computations are rerun under specified conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** numerical reproducibility cho phép rerun ra numeric result tương đương trong tolerance hợp lý.
**Grammar & collocations:** `numerical-reproducibility test` — test; `reproduce a result` — reproduce; `tolerance bound` — bound.
**Examples:** `Numerical reproducibility held to four significant digits across the two operating systems.` → Kết quả giữ bốn significant digit.
**Liên kết tiếng Hàn:** `수치 재현성` — numerical reproducibility.

## 7. floating-point nondeterminism /ˈfloʊtɪŋ pɔɪnt ˌnɑndɪˈtɜrmənɪzəm/
**Part of speech:** noun
**Core meaning (English):** variation in numerical results caused by operation order, parallel execution, hardware, or floating-point rounding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** floating-point nondeterminism làm output đổi nhẹ vì order/hardware/rounding.
**Grammar & collocations:** `floating-point-nondeterminism source` — source; `round a value` — round; `parallel arithmetic` — arithmetic.
**Examples:** `Floating-point nondeterminism changed the last decimal place but not the policy conclusion.` → Nondeterminism đổi decimal cuối, không đổi conclusion.
**Liên kết tiếng Hàn:** `부동소수점 비결정성` — floating-point nondeterminism.

## 8. parallel aggregation /ˈpærəˌlɛl ˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** combining partial results from parallel computation, sometimes with order-dependent numerical consequences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parallel aggregation gộp partial result từ nhiều worker; order có thể ảnh hưởng numeric rounding.
**Grammar & collocations:** `parallel-aggregation routine` — routine; `aggregate partial sums` — aggregate; `reduction order` — order.
**Examples:** `Parallel aggregation produced a tiny difference in the final sum across hardware platforms.` → Aggregation tạo difference nhỏ.
**Liên kết tiếng Hàn:** `병렬 집계` — parallel aggregation.

## 9. hardware heterogeneity /ˈhɑrdˌwɛr ˌhɛtərədʒəˈniəti/
**Part of speech:** noun
**Core meaning (English):** variation in processors, accelerators, memory, or system architecture that can affect computational behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hardware heterogeneity làm cùng code chạy khác trên CPU/GPU/system khác.
**Grammar & collocations:** `hardware-heterogeneity effect` — effect; `run across platforms` — run; `processor-specific behavior` — behavior.
**Examples:** `Hardware heterogeneity required a tolerance rather than exact bitwise equality.` → Heterogeneity cần tolerance.
**Liên kết tiếng Hàn:** `하드웨어 이질성` — hardware heterogeneity.

## 10. continuous integration /kənˈtɪnjuəs ˌɪntəˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** automated building and testing of software whenever changes are proposed or merged.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** continuous integration tự build/test mỗi khi code đổi để lỗi lộ sớm.
**Grammar & collocations:** `continuous-integration pipeline` — pipeline; `run automated tests` — run; `merge a change` — merge.
**Examples:** `Continuous integration caught a broken data path before the release was tagged.` → CI bắt data path broken trước release.
**Liên kết tiếng Hàn:** `지속적 통합` — continuous integration.

## 11. change-detection test /tʃeɪndʒ dɪˈtɛkʃən tɛst/
**Part of speech:** noun
**Core meaning (English):** a test that identifies unintended changes in outputs, behavior, or interfaces after a software modification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** change-detection test bắt output/behavior đổi ngoài ý muốn sau code change.
**Grammar & collocations:** `change-detection-test suite` — suite; `detect an unintended change` — detect; `output comparison` — comparison.
**Examples:** `The change-detection test flagged a new rounding difference in the risk table.` → Test flag rounding difference.
**Liên kết tiếng Hàn:** `변경 감지 테스트` — change-detection test.

## 12. baseline artifact /ˈbeɪsˌlaɪn ˈɑrtəˌfækt/
**Part of speech:** noun
**Core meaning (English):** a preserved output, file, or result used as a reference for detecting later changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** baseline artifact là output reference để compare khi code đổi.
**Grammar & collocations:** `baseline-artifact repository` — repository; `compare against a baseline` — compare; `preserved output` — output.
**Examples:** `The baseline artifact made it clear that the new plot had changed its axis range.` → Artifact lộ axis range đổi.
**Liên kết tiếng Hàn:** `기준선 산출물` — baseline artifact.

## 13. unit test /ˈjuːnɪt tɛst/
**Part of speech:** noun
**Core meaning (English):** a test of a small isolated function, component, or calculation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** unit test kiểm tra một function/component nhỏ độc lập.
**Grammar & collocations:** `unit-test fixture` — fixture; `test a function` — test; `isolated component` — component.
**Examples:** `A unit test verified that the dose-conversion function handled missing units safely.` → Unit test verify dose conversion.
**Liên kết tiếng Hàn:** `단위 테스트` — unit test.

## 14. integration test /ˌɪntəˈɡreɪʃən tɛst/
**Part of speech:** noun
**Core meaning (English):** a test of whether multiple components work correctly together across their interfaces.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** integration test check component phối hợp qua interface.
**Grammar & collocations:** `integration-test scenario` — scenario; `test an interface` — test; `connected component` — component.
**Examples:** `The integration test checked that the parser passed units correctly to the solver.` → Test check parser → solver.
**Liên kết tiếng Hàn:** `통합 테스트` — integration test.

## 15. end-to-end test /ɛnd tə ɛnd tɛst/
**Part of speech:** noun
**Core meaning (English):** a test that exercises a complete workflow from input or user action through final output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** end-to-end test chạy toàn pipeline từ input đến final output.
**Grammar & collocations:** `end-to-end-test scenario` — scenario; `exercise a full pipeline` — exercise; `user-facing output` — output.
**Examples:** `The end-to-end test rebuilt the report from a new upload to the final PDF.` → Test chạy từ upload đến PDF.
**Liên kết tiếng Hàn:** `종단 간 테스트` — end-to-end test.

## 16. code coverage /koʊd ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the proportion of software statements, branches, or paths exercised by tests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code coverage cho biết test đã chạm bao nhiêu code, nhưng coverage cao chưa bảo đảm correctness.
**Grammar & collocations:** `code-coverage report` — report; `cover a branch` — cover; `untested path` — path.
**Examples:** `Code coverage rose after the team added tests for rare error-handling paths.` → Coverage tăng nhờ test error path.
**Liên kết tiếng Hàn:** `코드 커버리지` — code coverage.

## 17. source analysis /sɔrs əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** examination of source code for defects, unsafe patterns, inconsistencies, or maintainability problems without executing it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** source analysis inspect code tĩnh để tìm defect/unsafe pattern.
**Grammar & collocations:** `source-analysis tool` — tool; `inspect source code` — inspect; `static defect` — defect.
**Examples:** `Source analysis found a variable that could be used before initialization.` → Analysis tìm variable chưa initialize.
**Liên kết tiếng Hàn:** `소스 분석` — source analysis.

## 18. style gate /staɪl ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** an automated or procedural check that blocks changes violating agreed formatting, naming, or code-quality rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** style gate là cửa quality chặn code lệch rule trước merge.
**Grammar & collocations:** `style-gate check` — check; `enforce a coding rule` — enforce; `block a change` — block.
**Examples:** `The style gate rejected the commit until the analysis script used the required naming convention.` → Gate reject commit vì naming.
**Liên kết tiếng Hàn:** `스타일 게이트` — style gate.

## 19. reproducibility package /rɪˌproʊdjuːsəˈbɪləti ˈpækɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a bundled set of code, data or data access instructions, environment information, and documentation for rerunning a study.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reproducibility package gom code/data/environment/doc để rerun study.
**Grammar & collocations:** `reproducibility-package review` — review; `bundle research artifacts` — bundle; `rerun a study` — rerun.
**Examples:** `The reproducibility package included a small synthetic dataset for testing the full workflow.` → Package có synthetic data để test.
**Liên kết tiếng Hàn:** `재현성 패키지` — reproducibility package.

## 20. executable paper /ˈɛksɪkjətəbəl ˈpeɪpər/
**Part of speech:** noun
**Core meaning (English):** a research article whose embedded code, data, or computational elements can be run to regenerate its analyses or figures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** executable paper cho reader run analysis/figure thay vì chỉ đọc prose.
**Grammar & collocations:** `executable-paper format` — format; `run an embedded analysis` — run; `regenerate a figure` — regenerate.
**Examples:** `The executable paper regenerated every figure when the reader changed the filtering option.` → Paper regenerate figure khi filter đổi.
**Liên kết tiếng Hàn:** `실행 가능한 논문` — executable paper.

## 21. workflow provenance /ˈwɜrkˌfloʊ ˈprɑvənəns/
**Part of speech:** noun
**Core meaning (English):** record of the inputs, transformations, software steps, and outputs that make up a computational workflow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** workflow provenance ghi toàn chain input → transform → software → output.
**Grammar & collocations:** `workflow-provenance graph` — graph; `record a transformation` — record; `input-output lineage` — lineage.
**Examples:** `Workflow provenance linked the published table to a specific preprocessing command.` → Provenance link table với command.
**Liên kết tiếng Hàn:** `작업 흐름 출처` — workflow provenance.

## 22. artifact review /ˈɑrtəˌfækt rɪˈvjuː/
**Part of speech:** noun
**Core meaning (English):** evaluation of the code, data, documentation, and computational materials accompanying a research claim.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** artifact review inspect material đi kèm claim, không chỉ prose paper.
**Grammar & collocations:** `artifact-review badge` — badge; `inspect a package` — inspect; `computational material` — material.
**Examples:** `Artifact review found that the supplied script could not recreate the headline figure.` → Review phát hiện script không recreate figure.
**Liên kết tiếng Hàn:** `산출물 검토` — artifact review.

## 23. replication package /ˌrɛplɪˈkeɪʃən ˈpækɪdʒ/
**Part of speech:** noun
**Core meaning (English):** materials prepared specifically to let another team repeat a study's analysis, procedure, or computational result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** replication package chuẩn bị cho team khác repeat study/analysis.
**Grammar & collocations:** `replication-package archive` — archive; `repeat an analysis` — repeat; `replication instruction` — instruction.
**Examples:** `The replication package explained how to obtain the restricted clinical data.` → Package explain cách access data restricted.
**Liên kết tiếng Hàn:** `반복 연구 패키지` — replication package.

## 24. computational appendix /ˌkɑmpjəˈteɪʃənəl əˈpɛndɪks/
**Part of speech:** noun
**Core meaning (English):** a supplementary section containing computational details, code explanations, parameter settings, or reproducibility instructions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** computational appendix chứa detail code/parameter/setting mà main prose không đủ chỗ.
**Grammar & collocations:** `computational-appendix note` — note; `document parameter settings` — document; `supplementary code` — code.
**Examples:** `The computational appendix listed the optimizer settings and hardware used for training.` → Appendix list optimizer và hardware.
**Liên kết tiếng Hàn:** `계산 부록` — computational appendix.

## 25. software citation /ˈsɔftˌwɛr saɪˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** formal acknowledgment of software, its developers, version, and persistent identifier when it contributes to research.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** software citation ghi nhận code/version/developer như một research contribution.
**Grammar & collocations:** `software-citation practice` — practice; `cite a version` — cite; `persistent software identifier` — identifier.
**Examples:** `The paper used software citation to identify the exact solver release behind its results.` → Citation ghi solver release exact.
**Liên kết tiếng Hàn:** `소프트웨어 인용` — software citation.

## Review in context

A **dependency manifest lock**, **environment capture**, and **container image** support a **repeatable build**; **seeded randomness**, **numerical reproducibility**, **floating-point nondeterminism**, **parallel aggregation**, and **hardware heterogeneity** define realistic limits. **Continuous integration** runs a **change-detection test** against a **baseline artifact**. **Unit test**, **integration test**, and **end-to-end test** cover different layers, while **code coverage**, **source analysis**, and a **style gate** improve quality. A **reproducibility package** or **executable paper** can expose **workflow provenance**. **Artifact review** checks a **replication package**, a **computational appendix**, and the **software citation** needed to identify the exact tools.

**Bản dịch tiếng Việt:**

**Dependency manifest lock**, **environment capture** và **container image** hỗ trợ **repeatable build**; **seeded randomness**, **numerical reproducibility**, **floating-point nondeterminism**, **parallel aggregation** và **hardware heterogeneity** định rõ giới hạn thực tế. **Continuous integration** chạy **change-detection test** so với **baseline artifact**. **Unit test**, **integration test** và **end-to-end test** cover layer khác nhau, còn **code coverage**, **source analysis** và **style gate** tăng quality. **Reproducibility package** hoặc **executable paper** expose **workflow provenance**. **Artifact review** kiểm tra **replication package**, **computational appendix** và **software citation** cần để identify tool chính xác.
