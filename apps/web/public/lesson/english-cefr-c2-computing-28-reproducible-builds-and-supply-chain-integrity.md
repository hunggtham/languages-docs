# C2 Vocabulary — Reproducible builds and supply-chain integrity

This lesson follows source code through hermetic building, dependency control, artifact provenance, and release verification.

Flow: **hermetic build → reproducible build → software bill of materials → dependency pinning → artifact attestation → provenance statement → binary transparency → build cache poisoning → dependency confusion → typosquatting → lockfile integrity → package mirror → vendored dependency → minimal base image → source date epoch → deterministic archive → rollback artifact → signature verification → trust root → release provenance**.

## 1. hermetic build /hɝˈmɛtɪk bɪld/
**Part of speech:** noun
**Core meaning (English):** a build performed in a controlled environment whose undeclared inputs cannot affect the result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** build kín, chỉ dùng input đã khai báo, không bị máy local hay network ngầm ảnh hưởng.
**Grammar & collocations:** `hermetic-build rule` — rule; `enforce a hermetic environment` — enforce.
**Examples:** `The hermetic build fetched no undeclared package during compilation.` → Build hermetic không fetch package ngoài khai báo.
**Liên kết tiếng Hàn:** `밀폐형 빌드`.

## 2. reproducible build /ˌriːprəˈduːsəbəl bɪld/
**Part of speech:** noun
**Core meaning (English):** a build process that produces the same artifact from the same source and declared inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cùng source/input thì build lại ra artifact giống nhau.
**Grammar & collocations:** `reproducible-build check` — check; `reproduce an artifact` — tái tạo.
**Examples:** `A reproducible build let the auditor compare the published binary with a fresh rebuild.` → Build reproducible cho auditor so binary publish với bản build lại.
**Liên kết tiếng Hàn:** `재현 가능한 빌드`.

## 3. software bill of materials /ˈsɔftˌwɛr bɪl əv məˈtɪriəlz/
**Part of speech:** noun
**Core meaning (English):** an inventory of components, libraries, and versions contained in a software artifact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách vật liệu của software: package, version và quan hệ dependency.
**Grammar & collocations:** `software-bill-of-materials record` — record; `generate an SBOM` — tạo.
**Examples:** `The software bill of materials exposed an outdated parser hidden inside a transitive dependency.` → SBOM lộ parser cũ nằm trong dependency gián tiếp.
**Liên kết tiếng Hàn:** `소프트웨어 자재 명세서`.

## 4. dependency pinning /dɪˈpɛndənsi ˈpɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** fixing dependencies to explicit versions or digests instead of accepting moving ranges.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghim version/hash để build không tự trôi sang dependency mới.
**Grammar & collocations:** `dependency-pinning policy` — policy; `pin a package version` — ghim.
**Examples:** `Dependency pinning stopped a minor release from changing the production image unexpectedly.` → Pinning ngăn minor release đổi image production ngoài ý muốn.
**Liên kết tiếng Hàn:** `종속성 고정`.

## 5. artifact attestation /ˈɑrtəfækt ˌætəˈsteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a signed statement about how, where, and from which inputs an artifact was produced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giấy chứng thực có chữ ký cho biết artifact được build thế nào và từ đâu.
**Grammar & collocations:** `artifact-attestation verifier` — verifier; `issue an attestation` — phát hành.
**Examples:** `Artifact attestation showed that the release came from the protected builder pool.` → Attestation chứng minh release đến từ builder được bảo vệ.
**Liên kết tiếng Hàn:** `아티팩트 증명`.

## 6. provenance statement /ˈprɑvənəns ˈsteɪtmənt/
**Part of speech:** noun
**Core meaning (English):** a structured description of an artifact's source, transformations, builder, and dependencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statement kể lại lineage của artifact từ source tới output.
**Grammar & collocations:** `provenance-statement schema` — schema; `validate provenance` — validate.
**Examples:** `The provenance statement linked the binary to a reviewed commit and an immutable toolchain.` → Statement nối binary với commit đã review và toolchain bất biến.
**Liên kết tiếng Hàn:** `출처 진술`.

## 7. binary transparency /ˈbaɪnəri trænsˈpɛrənsi/
**Part of speech:** noun
**Core meaning (English):** a practice of publishing or logging binaries so users can compare releases and detect unauthorized substitutions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công khai dấu vết binary để phát hiện bản phát hành bị thay tráo.
**Grammar & collocations:** `binary-transparency log` — log; `audit published binaries` — audit.
**Examples:** `Binary transparency let clients compare the package they downloaded with the logged release.` → Transparency cho client so package tải với release đã log.
**Liên kết tiếng Hàn:** `바이너리 투명성`.

## 8. build cache poisoning /bɪld kæʃ ˈpɔɪzənɪŋ/
**Part of speech:** noun
**Core meaning (English):** inserting a malicious or incorrect result into a build cache so later builds reuse it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache build bị đầu độc, khiến job sau dùng artifact không đáng tin.
**Grammar & collocations:** `build-cache-poisoning attack` — attack; `validate cache provenance` — validate.
**Examples:** `Build cache poisoning replaced a compiled helper before the signing step.` → Poisoning thay helper compile trước bước ký.
**Liên kết tiếng Hàn:** `빌드 캐시 오염`.

## 9. dependency confusion /dɪˈpɛndənsi kənˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** an attack in which a package manager retrieves a malicious public package instead of an intended private package with the same name.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** package manager nhầm package public độc với package nội bộ cùng tên.
**Grammar & collocations:** `dependency-confusion defense` — defense; `reserve a package name` — giữ tên.
**Examples:** `The registry policy blocked dependency confusion by preferring the private namespace.` → Policy registry chặn confusion bằng cách ưu tiên namespace private.
**Liên kết tiếng Hàn:** `종속성 혼동`.

## 10. typosquatting /ˈtaɪpoʊˌskwɑtɪŋ/
**Part of speech:** noun
**Core meaning (English):** registering a look-alike package or domain whose name exploits a common typing mistake.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kẻ xấu đặt tên gần giống package thật để người dùng gõ nhầm.
**Grammar & collocations:** `typosquatting package` — package; `detect a misspelled dependency` — phát hiện.
**Examples:** `Typosquatting fooled a developer into installing a package with one extra character.` → Typosquatting lừa developer cài package thừa một ký tự.
**Liên kết tiếng Hàn:** `타이포스쿼팅`.

## 11. lockfile integrity /ˈlɑkˌfaɪl ɪnˈtɛɡrəti/
**Part of speech:** noun
**Core meaning (English):** assurance that a dependency lockfile has not been changed outside the approved review and update process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lockfile đúng nội dung đã review, không bị sửa ngầm.
**Grammar & collocations:** `lockfile-integrity check` — check; `verify lockfile hashes` — verify.
**Examples:** `Lockfile integrity failed when a package digest changed without a corresponding review.` → Integrity fail khi digest đổi mà không có review.
**Liên kết tiếng Hàn:** `락파일 무결성`.

## 12. package mirror /ˈpækɪdʒ ˈmɪrər/
**Part of speech:** noun
**Core meaning (English):** a controlled repository that caches or serves packages for a build environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** registry mirror nội bộ để kiểm soát package và giảm phụ thuộc nguồn ngoài.
**Grammar & collocations:** `package-mirror allowlist` — allowlist; `sync a mirror` — đồng bộ.
**Examples:** `The package mirror served approved versions even when the public registry was unavailable.` → Mirror phục vụ version được duyệt dù registry public lỗi.
**Liên kết tiếng Hàn:** `패키지 미러`.

## 13. vendored dependency /ˈvɛndərd dɪˈpɛndənsi/
**Part of speech:** noun
**Core meaning (English):** a dependency copied into a project so it is built from a locally controlled source tree.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dependency được chép vào repo để build không phải tải động.
**Grammar & collocations:** `vendored-dependency patch` — patch; `vendor a library` — vendor.
**Examples:** `The vendored dependency received a local security patch before upstream accepted it.` → Dependency vendored nhận patch security local trước upstream.
**Liên kết tiếng Hàn:** `벤더링된 종속성`.

## 14. minimal base image /ˈmɪnəməl beɪs ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a container base image containing only the runtime components required by an application.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** image nền tối giản để giảm package, attack surface và size.
**Grammar & collocations:** `minimal-base-image policy` — policy; `trim the base image` — rút gọn.
**Examples:** `A minimal base image removed compilers and shells from the production container.` → Image tối giản bỏ compiler và shell khỏi container production.
**Liên kết tiếng Hàn:** `최소 기본 이미지`.

## 15. source date epoch /sɔrs deɪt ˈiːpək/
**Part of speech:** noun
**Core meaning (English):** a fixed timestamp used by build tools so generated files do not vary with the current clock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đặt timestamp chuẩn để thời gian build không làm artifact đổi.
**Grammar & collocations:** `source-date-epoch variable` — biến; `normalize timestamps` — chuẩn hóa.
**Examples:** `The source date epoch removed archive differences caused only by build time.` → Epoch loại khác biệt archive chỉ do thời gian build.
**Liên kết tiếng Hàn:** `소스 날짜 에포크`.

## 16. deterministic archive /dɪˌtɝməˈnɪstɪk ˈɑrkaɪv/
**Part of speech:** noun
**Core meaning (English):** an archive whose byte sequence is stable when created from the same files and metadata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** archive cùng input thì byte-for-byte giống nhau.
**Grammar & collocations:** `deterministic-archive tool` — tool; `normalize archive order` — chuẩn hóa.
**Examples:** `The deterministic archive produced the same checksum on two builders.` → Archive deterministic tạo cùng checksum trên hai builder.
**Liên kết tiếng Hàn:** `결정론적 아카이브`.

## 17. rollback artifact /ˈroʊlˌbæk ˈɑrtəfækt/
**Part of speech:** noun
**Core meaning (English):** a preserved, verified artifact that can restore a service to an earlier known-good version.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** artifact dự phòng để quay lại version tốt khi release lỗi.
**Grammar & collocations:** `rollback-artifact retention` — retention; `promote a rollback artifact` — promote.
**Examples:** `The operator selected a rollback artifact after the new release exhausted memory.` → Operator chọn artifact rollback sau khi release mới hết memory.
**Liên kết tiếng Hàn:** `롤백 아티팩트`.

## 18. signature verification /ˈsɪɡnətʃər ˌvɛrəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking that an artifact's cryptographic signature matches a trusted signer and content digest.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra chữ ký và hash trước khi tin artifact.
**Grammar & collocations:** `signature-verification step` — bước; `verify a release signature` — verify.
**Examples:** `Signature verification rejected the package after its contents changed in transit.` → Verification từ chối package sau khi nội dung đổi giữa đường.
**Liên kết tiếng Hàn:** `서명 검증`.

## 19. trust root /trʌst ruːt/
**Part of speech:** noun
**Core meaning (English):** an initially trusted key or authority from which a chain of artifact or certificate trust is established.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm gốc được tin, từ đó xác minh signer và chain phía sau.
**Grammar & collocations:** `trust-root rotation` — rotation; `install a trust root` — cài.
**Examples:** `Trust-root rotation required clients to accept the new release-signing authority.` → Rotation yêu cầu client chấp nhận authority ký release mới.
**Liên kết tiếng Hàn:** `신뢰 루트`.

## 20. release provenance /rɪˈliːs prɑvənəns/
**Part of speech:** noun
**Core meaning (English):** the recorded chain connecting a released artifact to its source, build steps, approvals, and distribution event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** provenance đầy đủ của release từ source tới lúc phân phối.
**Grammar & collocations:** `release-provenance record` — record; `trace a release` — trace.
**Examples:** `Release provenance allowed investigators to trace the image to one approved change and builder.` → Provenance cho phép trace image về change và builder được duyệt.
**Liên kết tiếng Hàn:** `릴리스 출처`.

## Review in context

A **hermetic build** and a **reproducible build** constrain undeclared inputs and make artifacts comparable. A **software bill of materials** lists components, while **dependency pinning** fixes versions. **Artifact attestation** and a **provenance statement** describe the builder; **binary transparency** lets users compare logged outputs. Teams defend against **build cache poisoning**, **dependency confusion**, and **typosquatting**, then check **lockfile integrity** and control a **package mirror**. A **vendored dependency** and **minimal base image** reduce moving parts. **Source date epoch** and a **deterministic archive** stabilize bytes. A verified **rollback artifact**, **signature verification**, and a protected **trust root** complete the **release provenance** chain.

**Bản dịch tiếng Việt:** **Hermetic build** và **reproducible build** giới hạn input ngoài khai báo và giúp so sánh artifact. **Software bill of materials** liệt kê component, còn **dependency pinning** ghim version. **Artifact attestation** và **provenance statement** mô tả builder; **binary transparency** cho phép so output đã log. Team phòng **build cache poisoning**, **dependency confusion** và **typosquatting**, rồi kiểm tra **lockfile integrity** và kiểm soát **package mirror**. **Vendored dependency** và **minimal base image** giảm thành phần thay đổi. **Source date epoch** và **deterministic archive** ổn định byte. **Rollback artifact** được verify, **signature verification** và **trust root** bảo vệ chuỗi **release provenance**.
