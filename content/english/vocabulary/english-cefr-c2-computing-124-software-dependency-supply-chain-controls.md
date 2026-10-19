# C2 Vocabulary — Software dependency supply-chain controls

This lesson follows a dependency from source selection and reproducible building through provenance, vulnerability response, and emergency change.

Flow: **build reproducibility → transitive dependency → version constraint → lockfile drift → package provenance → trust policy → artifact allowlist → mirror freshness → SBOM diff → vulnerability reachability → exploitability window → patch cadence → emergency override → artifact digest → source archive → build isolation → dependency pin → package yanking → license policy → update channel**.

## 1. build reproducibility /bɪld ˌriːprəˌdjuːsəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability to produce the same build output from the same declared source, tools, and inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng tạo cùng output từ source, tool và input đã khai báo.
**Grammar & collocations:** `build-reproducibility test` — kiểm thử; `recreate a release byte for byte` — tái tạo.
**Examples:** `Build reproducibility let the auditor compare the published binary with a fresh reconstruction.` → Reproducibility giúp so binary publish với bản dựng lại.
**Liên kết tiếng Hàn:** `빌드 재현성`.

## 2. transitive dependency /ˈtrænzətɪv dɪˈpendənsi/
**Part of speech:** noun
**Core meaning (English):** a package required indirectly through another dependency rather than declared by the application itself.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** package được yêu cầu gián tiếp qua dependency khác.
**Grammar & collocations:** `transitive-dependency chain` — chain; `audit an indirect package` — audit.
**Examples:** `A transitive dependency introduced a parser that the service team had never reviewed directly.` → Dependency gián tiếp thêm parser chưa được review.
**Liên kết tiếng Hàn:** `전이 종속성`.

## 3. version constraint /ˈvɜːrʒən kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a rule limiting which versions of a package may satisfy a dependency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule giới hạn version package được phép đáp ứng dependency.
**Grammar & collocations:** `version-constraint range` — range; `reject an incompatible upgrade` — từ chối.
**Examples:** `The version constraint allowed security patches but blocked a major API change.` → Constraint cho patch security nhưng chặn major change.
**Liên kết tiếng Hàn:** `버전 제약`.

## 4. lockfile drift /ˈlɒkfaɪl drɪft/
**Part of speech:** noun
**Core meaning (English):** divergence between a declared dependency manifest and the resolved versions recorded in the lockfile.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệch giữa manifest khai báo và version resolve trong lockfile.
**Grammar & collocations:** `lockfile-drift check` — kiểm tra; `regenerate a deterministic lock` — tạo lại.
**Examples:** `Lockfile drift caused CI to install a newer transitive package than developer machines used.` → Drift khiến CI cài package mới hơn.
**Liên kết tiếng Hàn:** `잠금 파일 드리프트`.

## 5. package provenance /ˈpækɪdʒ ˈprɒvənəns/
**Part of speech:** noun
**Core meaning (English):** evidence describing where a package came from, how it was built, and which source produced it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng về nguồn package, cách build và source tạo ra.
**Grammar & collocations:** `package-provenance record` — record; `verify an origin claim` — xác minh.
**Examples:** `Package provenance showed that the library came from the maintainer's signed release pipeline.` → Provenance cho thấy library từ pipeline có ký.
**Liên kết tiếng Hàn:** `패키지 출처`.

## 6. trust policy /trʌst ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** rules defining which publishers, registries, signatures, or build claims an environment accepts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule định nghĩa publisher, registry, signature hoặc build claim nào được chấp nhận.
**Grammar & collocations:** `trust-policy exception` — ngoại lệ; `accept only verified publishers` — chấp nhận.
**Examples:** `The trust policy rejected an unsigned package even though its version matched the request.` → Policy từ chối package không ký.
**Liên kết tiếng Hàn:** `신뢰 정책`.

## 7. artifact allowlist /ˈɑːrtɪfækt ˈælaʊlɪst/
**Part of speech:** noun
**Core meaning (English):** an explicit collection of artifacts approved for use in a build or deployment environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách artifact được duyệt rõ để dùng trong build/deploy.
**Grammar & collocations:** `artifact-allowlist entry` — entry; `block an unapproved digest` — chặn.
**Examples:** `The artifact allowlist permitted only the reviewed compiler image and its exact digest.` → Allowlist chỉ cho image compiler đã review.
**Liên kết tiếng Hàn:** `아티팩트 허용 목록`.

## 8. mirror freshness /ˈmɪrər ˈfreʃnəs/
**Part of speech:** noun
**Core meaning (English):** how recently a package mirror synchronized with its authoritative upstream source.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức mirror mới đến đâu so với upstream authoritative.
**Grammar & collocations:** `mirror-freshness check` — kiểm tra; `detect a stale repository` — phát hiện.
**Examples:** `Mirror freshness was too low, so the build could not see the newly revoked package.` → Mirror cũ nên chưa thấy package bị revoke.
**Liên kết tiếng Hàn:** `미러 최신성`.

## 9. SBOM diff /ˌes biː oʊ ˈem dɪf/
**Part of speech:** noun
**Core meaning (English):** a structured comparison of software component inventories between two builds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so sánh có cấu trúc inventory component giữa hai build.
**Grammar & collocations:** `SBOM-diff report` — report; `spot an unexpected library` — phát hiện.
**Examples:** `The SBOM diff revealed a new compression library that the change request did not mention.` → Diff lộ library mới không có trong request.
**Liên kết tiếng Hàn:** `SBOM 차이`.

## 10. vulnerability reachability /ˌvʌlnərəˈbɪləti ˌriːtʃəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** whether vulnerable code in a dependency can actually be invoked by a deployed application.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code lỗi trong dependency có thực sự được application gọi tới không.
**Grammar & collocations:** `vulnerability-reachability analysis` — phân tích; `trace a callable path` — truy.
**Examples:** `Vulnerability reachability showed that the vulnerable parser was unreachable in the production feature set.` → Analysis cho thấy parser lỗi không được gọi.
**Liên kết tiếng Hàn:** `취약점 도달 가능성`.

## 11. exploitability window /ˌeksplɔɪtəˈbɪləti ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the period during which a deployed weakness can be used before mitigation closes the opportunity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian weakness có thể bị khai thác trước khi mitigation đóng.
**Grammar & collocations:** `exploitability-window estimate` — ước tính; `shorten exposure through patching` — rút ngắn.
**Examples:** `The emergency patch shortened the exploitability window from days to hours.` → Patch khẩn rút window từ ngày xuống giờ.
**Liên kết tiếng Hàn:** `악용 가능 기간`.

## 12. patch cadence /pætʃ ˈkeɪdəns/
**Part of speech:** noun
**Core meaning (English):** the regular rhythm at which security and maintenance updates are reviewed and released.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhịp đều đặn review và release update security/maintenance.
**Grammar & collocations:** `patch-cadence review` — review; `accelerate a critical update` — tăng tốc.
**Examples:** `The patch cadence gave teams a predictable monthly window for dependency upgrades.` → Cadence tạo window upgrade hàng tháng.
**Liên kết tiếng Hàn:** `패치 주기`.

## 13. emergency override /ɪˈmɜːrdʒənsi ˈoʊvərraɪd/
**Part of speech:** noun
**Core meaning (English):** a narrowly authorized exception that bypasses the normal release or dependency process during urgent risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngoại lệ được duyệt hẹp để bỏ qua quy trình thường khi rủi ro khẩn.
**Grammar & collocations:** `emergency-override audit` — audit; `document an urgent bypass` — ghi.
**Examples:** `The emergency override pulled a patched library before the normal release train.` → Override kéo library patch trước release bình thường.
**Liên kết tiếng Hàn:** `긴급 재정의`.

## 14. artifact digest /ˈɑːrtɪfækt ˈdaɪdʒest/
**Part of speech:** noun
**Core meaning (English):** a content-derived identifier used to verify that an artifact is exactly the expected bytes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identifier suy ra từ content để xác minh artifact đúng từng byte.
**Grammar & collocations:** `artifact-digest pin` — pin; `compare a published hash` — so sánh.
**Examples:** `The deployment referenced an artifact digest instead of a mutable image tag.` → Deploy dùng digest thay tag mutable.
**Liên kết tiếng Hàn:** `아티팩트 다이제스트`.

## 15. source archive /sɔːrs ˈɑːrkaɪv/
**Part of speech:** noun
**Core meaning (English):** a preserved copy of the exact source files used to create a build or release.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản lưu source chính xác dùng tạo build/release.
**Grammar & collocations:** `source-archive checksum` — checksum; `preserve a release input` — lưu.
**Examples:** `The source archive allowed investigators to rebuild the binary after the repository changed.` → Archive giúp rebuild sau repo đổi.
**Liên kết tiếng Hàn:** `소스 아카이브`.

## 16. build isolation /bɪld ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** separating a build from undeclared host tools, files, credentials, or network state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách build khỏi tool, file, credential hoặc network host không khai báo.
**Grammar & collocations:** `build-isolation boundary` — ranh giới; `block undeclared network access` — chặn.
**Examples:** `Build isolation prevented a developer's local compiler from changing the release output.` → Isolation ngăn compiler local làm đổi output.
**Liên kết tiếng Hàn:** `빌드 격리`.

## 17. dependency pin /dɪˈpendənsi pɪn/
**Part of speech:** noun
**Core meaning (English):** fixing a dependency to a specific version or digest until an intentional update is reviewed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cố định dependency ở version/digest đến khi update được review.
**Grammar & collocations:** `dependency-pin review` — review; `unpin after validation` — bỏ pin.
**Examples:** `The dependency pin kept the production image on the audited cryptography library.` → Pin giữ image ở library crypto đã audit.
**Liên kết tiếng Hàn:** `종속성 고정`.

## 18. package yanking /ˈpækɪdʒ ˈjæŋkɪŋ/
**Part of speech:** noun
**Core meaning (English):** removing a package version from normal installation because it is broken, compromised, or incorrectly published.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gỡ version package khỏi cài đặt thường vì lỗi, compromise hoặc publish sai.
**Grammar & collocations:** `package-yanking notice` — thông báo; `prevent a revoked version` — ngăn.
**Examples:** `Package yanking stopped new builds from resolving the compromised release.` → Yanking chặn build mới resolve release bị compromise.
**Liên kết tiếng Hàn:** `패키지 철회`.

## 19. license policy /ˈlaɪsəns ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** rules defining which software licenses an organization may distribute or combine.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule định nghĩa license nào tổ chức được phân phối hoặc kết hợp.
**Grammar & collocations:** `license-policy exception` — ngoại lệ; `review a copyleft obligation` — review.
**Examples:** `The license policy blocked a dependency whose terms conflicted with the product distribution model.` → Policy chặn dependency có điều khoản xung đột.
**Liên kết tiếng Hàn:** `라이선스 정책`.

## 20. update channel /ˈʌpdeɪt ˈtʃænəl/
**Part of speech:** noun
**Core meaning (English):** a designated stream through which a component receives updates with a defined stability and trust level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kênh riêng để component nhận update với mức ổn định và trust rõ.
**Grammar & collocations:** `update-channel policy` — policy; `move from beta to stable` — chuyển.
**Examples:** `The server stayed on the stable update channel while a separate test fleet tried the preview build.` → Server ở channel stable, fleet test thử preview.
**Liên kết tiếng Hàn:** `업데이트 채널`.

## Review in context

**Build reproducibility** depends on a declared **transitive dependency**, a **version constraint**, and a stable **lockfile drift** check. **Package provenance**, a **trust policy**, and an **artifact allowlist** establish what may enter; **mirror freshness** and an **SBOM diff** reveal unexpected change. **Vulnerability reachability** estimates real exposure, an **exploitability window** sets urgency, and **patch cadence** schedules routine repair. An **emergency override** handles exceptional risk, while an **artifact digest** and **source archive** preserve identity. **Build isolation** removes hidden inputs, a **dependency pin** holds a reviewed version, **package yanking** removes danger, **license policy** governs distribution, and an **update channel** controls future flow.

**Bản dịch tiếng Việt:** **Build reproducibility** phụ thuộc **transitive dependency**, **version constraint** và kiểm tra **lockfile drift** ổn định. **Package provenance**, **trust policy** và **artifact allowlist** quyết định thứ gì được đưa vào; **mirror freshness** và **SBOM diff** lộ thay đổi bất ngờ. **Vulnerability reachability** ước tính exposure thật, **exploitability window** định mức khẩn, còn **patch cadence** xếp lịch sửa. **Emergency override** xử lý rủi ro đặc biệt, **artifact digest** và **source archive** giữ identity. **Build isolation** bỏ input ẩn, **dependency pin** giữ version đã review, **package yanking** gỡ nguy hiểm, **license policy** quản lý phân phối, còn **update channel** kiểm soát luồng update.
