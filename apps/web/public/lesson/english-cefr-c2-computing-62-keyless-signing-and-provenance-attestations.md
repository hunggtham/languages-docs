# C2 Vocabulary — Keyless signing and provenance attestations

This lesson follows an artifact from build identity through ephemeral signing, transparency, verification, and release policy.

Flow: **keyless signing → sigstore bundle → transparency log inclusion → certificate identity → ephemeral signing key → provenance attestation → artifact subject digest → rekor entry → trust-on-first-use → signature threshold → key rotation ceremony → revocation transparency → build identity claim → provenance predicate → attestation verifier → supply-chain policy → release signing quorum → offline root key → signature freshness → artifact trust score**.

## 1. keyless signing /ˈkiːləs ˈsaɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** signing in which short-lived identity-bound credentials replace long-lived private signing keys.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ký bằng credential ngắn hạn gắn identity thay key dài hạn.
**Grammar & collocations:** `keyless-signing workflow` — workflow; `bind a signature to an identity` — gắn.
**Examples:** `Keyless signing linked the release to the verified build identity without storing a permanent key in CI.` → Ký keyless nối release với build identity.
**Liên kết tiếng Hàn:** `키리스 서명`.

## 2. sigstore bundle /ˈsɪɡˌstɔr ˈbʌndəl/
**Part of speech:** noun
**Core meaning (English):** a package containing a signature, certificate, transparency evidence, and related verification material.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gói signature, certificate và bằng chứng transparency.
**Grammar & collocations:** `sigstore-bundle verification` — verification; `archive signing evidence` — lưu.
**Examples:** `The sigstore bundle traveled with the container so an offline verifier could check it later.` → Bundle đi cùng container để verify offline.
**Liên kết tiếng Hàn:** `시그스토어 번들`.

## 3. transparency log inclusion /trænsˈpɛrənsi lɔɡ ɪnˈkluːʒən/
**Part of speech:** noun
**Core meaning (English):** proof that a signature or certificate record was submitted to and accepted by a publicly auditable append-only log.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng record được ghi vào log công khai.
**Grammar & collocations:** `transparency-log-inclusion proof` — proof; `verify an inclusion path` — xác minh.
**Examples:** `Transparency log inclusion made an unexpectedly reissued certificate visible to auditors.` → Inclusion làm certificate cấp lại lộ cho auditor.
**Liên kết tiếng Hàn:** `투명성 로그 포함`.

## 4. certificate identity /sərˈtɪfɪkət aɪˈdɛntəti/
**Part of speech:** noun
**Core meaning (English):** the authenticated subject information carried by a signing certificate and used to identify its owner or workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identity xác thực nằm trong certificate.
**Grammar & collocations:** `certificate-identity claim` — claim; `match an issuer subject` — đối chiếu.
**Examples:** `The certificate identity matched the protected repository and the expected release workflow.` → Identity khớp repository và workflow.
**Liên kết tiếng Hàn:** `인증서 ID`.

## 5. ephemeral signing key /ɪˈfɛmərəl ˈsaɪnɪŋ kiː/
**Part of speech:** noun
**Core meaning (English):** a signing key created for a short operation and discarded after its authorized use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key chỉ tồn tại trong một operation ngắn.
**Grammar & collocations:** `ephemeral-signing-key lifetime` — lifetime; `destroy a temporary key` — hủy.
**Examples:** `The ephemeral signing key disappeared when the isolated build job ended.` → Key biến mất khi job build kết thúc.
**Liên kết tiếng Hàn:** `임시 서명 키`.

## 6. provenance attestation /ˈprɑvənəns ˌætəˈsteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a signed statement describing how, where, and under which controls an artifact was produced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tuyên bố có chữ ký về nguồn gốc artifact.
**Grammar & collocations:** `provenance-attestation statement` — statement; `attest build steps` — chứng thực.
**Examples:** `The provenance attestation recorded the compiler image and source revision used for the release.` → Attestation ghi compiler image và source revision.
**Liên kết tiếng Hàn:** `출처 증명`.

## 7. artifact subject digest /ˈɑrtəˌfækt ˈsʌbdʒɪkt ˈdaɪˌdʒɛst/
**Part of speech:** noun
**Core meaning (English):** a cryptographic digest identifying the exact artifact to which an attestation or signature applies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** digest chỉ đúng artifact được ký/chứng thực.
**Grammar & collocations:** `artifact-subject-digest field` — field; `bind evidence to bytes` — gắn.
**Examples:** `The artifact subject digest prevented a valid attestation from being replayed against a modified image.` → Digest ngăn replay lên image đổi.
**Liên kết tiếng Hàn:** `아티팩트 주제 다이제스트`.

## 8. rekor entry /ˈreɪkɔr ˈɛntri/
**Part of speech:** noun
**Core meaning (English):** a transparency-record entry containing evidence about a signed artifact or certificate event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** entry trong transparency record về artifact/certificate.
**Grammar & collocations:** `rekor-entry inclusion proof` — proof; `retrieve a log record` — lấy.
**Examples:** `The rekor entry preserved evidence after the short-lived certificate had expired.` → Entry giữ evidence sau certificate hết hạn.
**Liên kết tiếng Hàn:** `레코어 항목`.

## 9. trust-on-first-use /trʌst ɑn fɝst juːs/
**Part of speech:** noun
**Core meaning (English):** a policy that accepts an identity or key initially and treats later changes as suspicious.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tin lần đầu, lần sau đổi thì cảnh báo.
**Grammar & collocations:** `trust-on-first-use exception` — exception; `pin an initial identity` — ghim.
**Examples:** `Trust-on-first-use was rejected for release signing because the first observation could be compromised.` → TOFU bị từ chối cho signing.
**Liên kết tiếng Hàn:** `최초 사용 신뢰`.

## 10. signature threshold /ˈsɪɡnətʃər ˈθrɛʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the minimum number or quality of independent signatures required before an artifact is accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số/chất lượng chữ ký tối thiểu để chấp nhận.
**Grammar & collocations:** `signature-threshold policy` — policy; `require two independent approvals` — yêu cầu.
**Examples:** `The signature threshold blocked a release when one of the two build environments was unavailable.` → Threshold chặn release khi thiếu một môi trường.
**Liên kết tiếng Hàn:** `서명 임계값`.

## 11. key rotation ceremony /kiː roʊˈteɪʃən ˈsɛrəˌmoʊni/
**Part of speech:** noun
**Core meaning (English):** a controlled, audited procedure for replacing signing keys and transferring trust to new ones.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nghi thức có audit để đổi key và chuyển trust.
**Grammar & collocations:** `key-rotation-ceremony record` — record; `activate a successor key` — kích hoạt.
**Examples:** `The key rotation ceremony required witnesses from operations and security before activation.` → Ceremony cần người chứng kiến.
**Liên kết tiếng Hàn:** `키 순환 의식`.

## 12. revocation transparency /ˌrɛvəˈkeɪʃən trænsˈpɛrənsi/
**Part of speech:** noun
**Core meaning (English):** public and auditable evidence that a credential or signing authority has been revoked.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng công khai key/credential đã revoke.
**Grammar & collocations:** `revocation-transparency record` — record; `publish a status change` — công bố.
**Examples:** `Revocation transparency let downstream verifiers reject artifacts signed after the key compromise.` → Transparency giúp reject artifact ký sau compromise.
**Liên kết tiếng Hàn:** `폐기 투명성`.

## 13. build identity claim /bɪld aɪˈdɛntəti kleɪm/
**Part of speech:** noun
**Core meaning (English):** a signed assertion identifying the workflow, repository, actor, or environment that produced an artifact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** claim xác định build đến từ workflow/repository nào.
**Grammar & collocations:** `build-identity-claim matcher` — matcher; `verify workflow provenance` — xác minh.
**Examples:** `The build identity claim restricted production deployment to the protected main branch.` → Claim giới hạn deploy từ main branch.
**Liên kết tiếng Hàn:** `빌드 ID 주장`.

## 14. provenance predicate /ˈprɑvənəns ˈprɛdɪkət/
**Part of speech:** noun
**Core meaning (English):** a machine-checkable condition about how an artifact was built or handled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện máy kiểm tra được về nguồn gốc artifact.
**Grammar & collocations:** `provenance-predicate expression` — expression; `require a hardened builder` — yêu cầu.
**Examples:** `The provenance predicate required a reviewed source commit and a disposable build runner.` → Predicate yêu cầu commit review và runner tạm.
**Liên kết tiếng Hàn:** `출처 술어`.

## 15. attestation verifier /ˌætəˈsteɪʃən ˈvɛrəˌfaɪər/
**Part of speech:** noun
**Core meaning (English):** a component that checks an attestation's signature, subject, claims, and policy conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thành phần kiểm tra toàn bộ attestation và policy.
**Grammar & collocations:** `attestation-verifier policy` — policy; `evaluate a claim set` — đánh giá.
**Examples:** `The attestation verifier rejected a build whose source repository did not match the release claim.` → Verifier reject repository không khớp.
**Liên kết tiếng Hàn:** `증명 검증기`.

## 16. supply-chain policy /səˈplaɪ tʃeɪn ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules specifying which provenance, signatures, builders, dependencies, and artifact states are acceptable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy định nghĩa artifact/dependency nào được tin.
**Grammar & collocations:** `supply-chain-policy rule` — rule; `deny an untrusted builder` — từ chối.
**Examples:** `The supply-chain policy required signed dependencies and a reproducible release environment.` → Policy yêu cầu dependency ký và môi trường reproducible.
**Liên kết tiếng Hàn:** `공급망 정책`.

## 17. release signing quorum /rɪˈliːs ˈsaɪnɪŋ ˈkwɔrəm/
**Part of speech:** noun
**Core meaning (English):** the minimum set of independent authorized signers needed to approve a release.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số signer độc lập tối thiểu cho release.
**Grammar & collocations:** `release-signing-quorum rule` — rule; `collect independent approvals` — thu.
**Examples:** `The release signing quorum required one platform signature and one security signature.` → Quorum cần hai loại chữ ký.
**Liên kết tiếng Hàn:** `릴리스 서명 정족수`.

## 18. offline root key /ˈɔfˌlaɪn ruːt kiː/
**Part of speech:** noun
**Core meaning (English):** a high-trust root key kept disconnected from routine systems and used only for exceptional trust operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** root key giữ offline, chỉ dùng operation đặc biệt.
**Grammar & collocations:** `offline-root-key ceremony` — ceremony; `sign a trust anchor` — ký.
**Examples:** `The offline root key signed the new intermediate after the emergency rotation review.` → Root offline ký intermediate mới.
**Liên kết tiếng Hàn:** `오프라인 루트 키`.

## 19. signature freshness /ˈsɪɡnətʃər ˈfrɛʃnəs/
**Part of speech:** noun
**Core meaning (English):** evidence that a signature or attestation was created within an acceptable time and has not become stale.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chữ ký còn mới, chưa quá hạn tin cậy.
**Grammar & collocations:** `signature-freshness window` — window; `reject a stale attestation` — loại.
**Examples:** `Signature freshness prevented an old but valid approval from authorizing a newly changed artifact.` → Freshness ngăn approval cũ.
**Liên kết tiếng Hàn:** `서명 신선도`.

## 20. artifact trust score /ˈɑrtəˌfækt trʌst skɔr/
**Part of speech:** noun
**Core meaning (English):** a policy-derived score summarizing how strongly an artifact's identity, provenance, signatures, and environment satisfy trust requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm tổng hợp mức tin cậy artifact.
**Grammar & collocations:** `artifact-trust-score threshold` — threshold; `rank release evidence` — xếp hạng.
**Examples:** `The artifact trust score fell when a dependency lacked a current provenance attestation.` → Trust score giảm khi dependency thiếu attestation.
**Liên kết tiếng Hàn:** `아티팩트 신뢰 점수`.

## Review in context

**Keyless signing** produces a **sigstore bundle** with **transparency log inclusion**, **certificate identity**, and an **ephemeral signing key**. A **provenance attestation** binds an **artifact subject digest** to a **rekor entry**; **trust-on-first-use** may be weaker than a **signature threshold** and a controlled **key rotation ceremony**. **Revocation transparency**, a **build identity claim**, and a **provenance predicate** guide an **attestation verifier**. A **supply-chain policy**, **release signing quorum**, **offline root key**, **signature freshness**, and **artifact trust score** complete release trust.

**Bản dịch tiếng Việt:** **Keyless signing** tạo **sigstore bundle** với **transparency log inclusion**, **certificate identity** và **ephemeral signing key**. **Provenance attestation** gắn **artifact subject digest** với **rekor entry**; **trust-on-first-use** yếu hơn **signature threshold** và **key rotation ceremony** có kiểm soát. **Revocation transparency**, **build identity claim** và **provenance predicate** hướng dẫn **attestation verifier**. **Supply-chain policy**, **release signing quorum**, **offline root key**, **signature freshness** và **artifact trust score** hoàn tất trust cho release.
