# C2 Vocabulary — Software supply-chain provenance

This lesson follows a software release from source identity and package signing through provenance verification, quarantine, promotion, and rollback.

Flow: **build provenance → package signing → trusted publisher → release metadata → builder identity → source digest → typosquatting package → malicious maintainer → artifact promotion → release channel → rollback release → supply-chain scorecard → dependency graph hash → build recipe digest → provenance verifier → artifact retention → quarantine registry → mirror trust → release freeze → package allowlist**.

## 1. build provenance /bɪld ˈprɒvənəns/
**Part of speech:** noun
**Core meaning (English):** evidence describing how, where, and from which inputs a software artifact was built.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng artifact được build ở đâu, bằng gì và từ input nào.
**Grammar & collocations:** `build-provenance record` — record; `trace an artifact to source` — truy vết.
**Examples:** `Build provenance showed that the release came from the protected main branch.` → Provenance cho thấy release từ branch bảo vệ.
**Liên kết tiếng Hàn:** `빌드 출처`.

## 2. package signing /ˈpækɪdʒ ˈsaɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** attaching a cryptographic signature to a package so consumers can verify its publisher and bytes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gắn chữ ký để consumer xác minh publisher và byte package.
**Grammar & collocations:** `package-signing key` — key; `sign a release archive` — ký.
**Examples:** `Package signing let the installer reject an archive modified after publication.` → Signing giúp installer từ chối archive đổi.
**Liên kết tiếng Hàn:** `패키지 서명`.

## 3. trusted publisher /ˈtrʌstɪd ˈpʌblɪʃər/
**Part of speech:** noun
**Core meaning (English):** an authenticated organization or workflow authorized to publish software under a recognized identity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tổ chức/workflow xác thực được quyền publish dưới identity tin cậy.
**Grammar & collocations:** `trusted-publisher policy` — policy; `authorize a release workflow` — ủy quyền.
**Examples:** `The trusted publisher could release packages only from a reviewed pipeline.` → Publisher chỉ release từ pipeline review.
**Liên kết tiếng Hàn:** `신뢰할 수 있는 게시자`.

## 4. release metadata /rɪˈliːs ˈmetədeɪtə/
**Part of speech:** noun
**Core meaning (English):** descriptive information about a release, including version, source, dependencies, and build conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thông tin version, source, dependency và điều kiện build.
**Grammar & collocations:** `release-metadata schema` — schema; `record a dependency version` — ghi.
**Examples:** `Release metadata linked the binary to its compiler version and source revision.` → Metadata nối binary với compiler/source.
**Liên kết tiếng Hàn:** `릴리스 메타데이터`.

## 5. builder identity /ˈbɪldər aɪˈdentəti/
**Part of speech:** noun
**Core meaning (English):** the authenticated identity of the system or workflow that produced an artifact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identity xác thực của hệ thống/workflow tạo artifact.
**Grammar & collocations:** `builder-identity claim` — claim; `verify a build service` — xác minh.
**Examples:** `The policy accepted artifacts only when the builder identity matched the approved runner.` → Policy chỉ nhận runner đúng.
**Liên kết tiếng Hàn:** `빌더 신원`.

## 6. source digest /sɔːrs ˈdaɪdʒest/
**Part of speech:** noun
**Core meaning (English):** a cryptographic digest identifying the exact source content used for a build.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** digest xác định chính xác source dùng để build.
**Grammar & collocations:** `source-digest comparison` — comparison; `pin an input revision` — ghim.
**Examples:** `The source digest proved that the binary was built from the reviewed commit.` → Digest chứng minh build từ commit review.
**Liên kết tiếng Hàn:** `소스 다이제스트`.

## 7. typosquatting package /ˈtaɪpoʊˌskwɒtɪŋ ˈpækɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a malicious or misleading package whose name resembles a popular package through a small spelling change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** package độc có tên gần giống package phổ biến do đổi chữ nhỏ.
**Grammar & collocations:** `typosquatting-package alert` — alert; `block a deceptive name` — chặn.
**Examples:** `The scanner flagged a typosquatting package that differed by one character.` → Scanner lộ package đổi một ký tự.
**Liên kết tiếng Hàn:** `타이포스쿼팅 패키지`.

## 8. malicious maintainer /məˈlɪʃəs meɪnˈteɪnər/
**Part of speech:** noun
**Core meaning (English):** a package maintainer who intentionally introduces harmful code or misuses publishing authority.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** maintainer cố ý đưa code hại hoặc lạm dụng quyền publish.
**Grammar & collocations:** `malicious-maintainer scenario` — scenario; `revoke publishing access` — thu hồi.
**Examples:** `A malicious maintainer inserted a credential collector into a trusted dependency.` → Maintainer chèn code lấy credential.
**Liên kết tiếng Hàn:** `악성 유지 관리자`.

## 9. artifact promotion /ˈɑːrtɪfækt prəˈmoʊʃən/
**Part of speech:** noun
**Core meaning (English):** moving a verified artifact from one repository or environment to a more trusted release stage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển artifact đã verify sang stage release tin cậy hơn.
**Grammar & collocations:** `artifact-promotion gate` — gate; `promote a tested image` — đẩy.
**Examples:** `Artifact promotion required a passing security scan and an approved provenance record.` → Promotion cần scan và provenance.
**Liên kết tiếng Hàn:** `아티팩트 승격`.

## 10. release channel /rɪˈliːs ˈtʃænəl/
**Part of speech:** noun
**Core meaning (English):** a named stream such as stable, beta, or nightly through which versions are distributed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stream version như stable, beta, nightly.
**Grammar & collocations:** `release-channel policy` — policy; `subscribe to a stable stream` — đăng ký.
**Examples:** `The release channel kept experimental builds away from production clients.` → Channel tách build thử khỏi production.
**Liên kết tiếng Hàn:** `릴리스 채널`.

## 11. rollback release /ˈroʊlbæk rɪˈliːs/
**Part of speech:** noun
**Core meaning (English):** a previously approved version restored after a new release proves unsafe or defective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** version cũ được khôi phục khi release mới lỗi.
**Grammar & collocations:** `rollback-release procedure` — procedure; `restore a known-good version` — khôi phục.
**Examples:** `The rollback release removed the vulnerable dependency from the production fleet.` → Rollback bỏ dependency lỗi.
**Liên kết tiếng Hàn:** `롤백 릴리스`.

## 12. supply-chain scorecard /səˈplaɪ tʃeɪn ˈskɔːrkɑːrd/
**Part of speech:** noun
**Core meaning (English):** a structured assessment of a project's software supply-chain security practices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng đánh giá thực hành security của supply chain.
**Grammar & collocations:** `supply-chain-scorecard result` — result; `rate a repository practice` — đánh giá.
**Examples:** `The supply-chain scorecard exposed missing review requirements for release workflows.` → Scorecard lộ thiếu review.
**Liên kết tiếng Hàn:** `공급망 스코어카드`.

## 13. dependency graph hash /dɪˈpendənsi ɡrɑːf hæʃ/
**Part of speech:** noun
**Core meaning (English):** a digest representing the exact dependency graph resolved for a build.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** digest đại diện graph dependency chính xác đã resolve.
**Grammar & collocations:** `dependency-graph-hash comparison` — comparison; `detect a transitive change` — phát hiện.
**Examples:** `The dependency graph hash changed when a transitive package was upgraded.` → Hash đổi khi package gián tiếp nâng.
**Liên kết tiếng Hàn:** `종속성 그래프 해시`.

## 14. build recipe digest /bɪld ˈresəpi ˈdaɪdʒest/
**Part of speech:** noun
**Core meaning (English):** a digest identifying the commands, base image, tools, and configuration used in a build recipe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** digest nhận diện command, image, tool và config của build.
**Grammar & collocations:** `build-recipe-digest mismatch` — mismatch; `pin a toolchain recipe` — ghim.
**Examples:** `The build recipe digest detected that the compiler image had changed silently.` → Digest lộ image compiler đổi.
**Liên kết tiếng Hàn:** `빌드 레시피 다이제스트`.

## 15. provenance verifier /ˈprɒvənəns ˈverɪfaɪər/
**Part of speech:** noun
**Core meaning (English):** a tool or policy engine that checks whether artifact provenance satisfies release requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tool/policy kiểm provenance có đạt yêu cầu release.
**Grammar & collocations:** `provenance-verifier rule` — rule; `reject an untrusted builder` — từ chối.
**Examples:** `The provenance verifier rejected a package built outside the approved environment.` → Verifier từ chối build ngoài môi trường.
**Liên kết tiếng Hàn:** `출처 검증기`.

## 16. artifact retention /ˈɑːrtɪfækt rɪˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** keeping build outputs, logs, and evidence long enough to support auditing or rollback.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ artifact, log và evidence đủ lâu để audit/rollback.
**Grammar & collocations:** `artifact-retention period` — period; `preserve a release record` — giữ.
**Examples:** `Artifact retention preserved the exact binary needed for the incident investigation.` → Retention giữ binary điều tra.
**Liên kết tiếng Hàn:** `아티팩트 보존`.

## 17. quarantine registry /ˈkwɔːrəntiːn ˈredʒɪstri/
**Part of speech:** noun
**Core meaning (English):** an isolated package repository where suspicious artifacts are held from normal consumption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** registry cô lập giữ artifact đáng ngờ khỏi consumer.
**Grammar & collocations:** `quarantine-registry workflow` — workflow; `isolate a flagged package` — cô lập.
**Examples:** `The quarantine registry held the package until its maintainer identity was reviewed.` → Registry giữ package chờ review.
**Liên kết tiếng Hàn:** `격리 레지스트리`.

## 18. mirror trust /ˈmɪrər trʌst/
**Part of speech:** noun
**Core meaning (English):** confidence that a package mirror serves authentic content and preserves verification metadata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức tin mirror phục vụ content thật và giữ metadata.
**Grammar & collocations:** `mirror-trust policy` — policy; `verify a mirrored digest` — xác minh.
**Examples:** `Mirror trust depended on comparing the downloaded digest with the origin record.` → Trust cần so digest origin.
**Liên kết tiếng Hàn:** `미러 신뢰`.

## 19. release freeze /rɪˈliːs friːz/
**Part of speech:** noun
**Core meaning (English):** a temporary ban on new production releases while a security or reliability issue is investigated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạm cấm release production để điều tra issue.
**Grammar & collocations:** `release-freeze notice` — notice; `pause promotion` — tạm dừng.
**Examples:** `The release freeze prevented an unreviewed dependency update from reaching customers.` → Freeze ngăn dependency chưa review.
**Liên kết tiếng Hàn:** `릴리스 동결`.

## 20. package allowlist /ˈpækɪdʒ ˈæloʊlɪst/
**Part of speech:** noun
**Core meaning (English):** an explicit list of packages and versions permitted in a build or runtime environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách package/version được phép dùng.
**Grammar & collocations:** `package-allowlist entry` — entry; `deny an unapproved dependency` — từ chối.
**Examples:** `The package allowlist blocked a new transitive dependency until review was complete.` → Allowlist chặn dependency mới.
**Liên kết tiếng Hàn:** `패키지 허용 목록`.

## Review in context

**Build provenance**, **package signing**, a **trusted publisher**, **release metadata**, **builder identity**, and a **source digest** describe an artifact. A **typosquatting package** or **malicious maintainer** can be stopped before **artifact promotion** into a **release channel**; a **rollback release** remains available. A **supply-chain scorecard**, **dependency graph hash**, **build recipe digest**, and **provenance verifier** support audit. **Artifact retention**, a **quarantine registry**, **mirror trust**, a **release freeze**, and a **package allowlist** complete governance.

**Bản dịch tiếng Việt:** **Build provenance**, **package signing**, **trusted publisher**, **release metadata**, **builder identity** và **source digest** mô tả artifact. **Typosquatting package** hoặc **malicious maintainer** có thể bị chặn trước **artifact promotion** vào **release channel**; **rollback release** vẫn sẵn sàng. **Supply-chain scorecard**, **dependency graph hash**, **build recipe digest** và **provenance verifier** hỗ trợ audit. **Artifact retention**, **quarantine registry**, **mirror trust**, **release freeze** và **package allowlist** hoàn thiện governance.
