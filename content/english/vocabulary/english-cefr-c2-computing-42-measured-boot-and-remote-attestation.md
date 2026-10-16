# C2 Vocabulary — Measured boot and remote attestation

This lesson follows a platform from firmware measurement through evidence generation, verifier policy, and confidential workload admission.

Flow: **measured boot → trust anchor → platform configuration register → remote attestation → attestation evidence → verifier policy → nonce freshness → endorsement key → attestation identity key → quote → trusted computing base → firmware measurement → secure boot chain → key sealing → anti-rollback counter → reference value → event log → appraisal policy → attestation broker → confidential virtual machine**.

## 1. measured boot /ˈmɛʒərd buːt/
**Part of speech:** noun
**Core meaning (English):** recording cryptographic measurements of boot components as the platform starts without necessarily blocking an unapproved component.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi hash từng thành phần lúc boot để chứng minh trạng thái.
**Grammar & collocations:** `measured-boot chain` — chain; `record a component measurement` — ghi.
**Examples:** `Measured boot recorded the firmware and hypervisor hashes before the guest launched.` → Measured boot ghi hash firmware và hypervisor trước khi guest chạy.
**Liên kết tiếng Hàn:** `측정 부팅`.

## 2. trust anchor /trʌst ˈæŋkər/
**Part of speech:** noun
**Core meaning (English):** a root key, certificate, or hardware identity that a verifier accepts as the starting point for a chain of trust.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gốc tin cậy để verifier bắt đầu kiểm tra.
**Grammar & collocations:** `trust-anchor certificate` — certificate; `provision a root of trust` — provision.
**Examples:** `The verifier rejected the quote because its signing chain did not reach the configured trust anchor.` → Verifier từ chối vì chain không tới trust anchor.
**Liên kết tiếng Hàn:** `신뢰 앵커`.

## 3. platform configuration register /ˈplætfɔrm kənˌfɪɡjəˈreɪʃən ˈrɛdʒɪstər/
**Part of speech:** noun
**Core meaning (English):** a register whose value is extended with boot measurements to represent platform state without storing each measurement directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** register được extend bằng hash để đại diện lịch sử boot.
**Grammar & collocations:** `platform-configuration-register value` — value; `extend a register with a digest` — extend.
**Examples:** `The platform configuration register changed when an unsigned option ROM was loaded.` → PCR đổi khi option ROM không ký được nạp.
**Liên kết tiếng Hàn:** `플랫폼 구성 레지스터`.

## 4. remote attestation /rɪˈmoʊt ˌætəˈsteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a protocol in which a platform proves its measured state to an external verifier.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** máy từ xa chứng minh mình đang chạy trạng thái nào.
**Grammar & collocations:** `remote-attestation protocol` — protocol; `attest a workload state` — chứng minh.
**Examples:** `Remote attestation was required before the service released the decryption key.` → Cần attestation trước khi nhả key giải mã.
**Liên kết tiếng Hàn:** `원격 증명`.

## 5. attestation evidence /ˌætəˈsteɪʃən ˈɛvɪdəns/
**Part of speech:** noun
**Core meaning (English):** signed measurements, claims, and metadata presented to a verifier as proof of a platform or workload state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gói bằng chứng có chữ ký và claim về trạng thái.
**Grammar & collocations:** `attestation-evidence format` — format; `validate signed evidence` — xác thực.
**Examples:** `The broker forwarded attestation evidence together with the workload identity and policy context.` → Broker chuyển evidence cùng identity và context.
**Liên kết tiếng Hàn:** `증명 증거`.

## 6. verifier policy /ˈvɛrəˌfaɪər ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules that determine whether attestation claims satisfy the conditions for granting access or releasing secrets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy quyết định evidence có đủ điều kiện để cho access không.
**Grammar & collocations:** `verifier-policy expression` — expression; `evaluate an attestation claim` — đánh giá.
**Examples:** `The verifier policy required a patched kernel and a workload signed by the approved publisher.` → Policy yêu cầu kernel đã vá và workload đúng publisher.
**Liên kết tiếng Hàn:** `검증기 정책`.

## 7. nonce freshness /nɑns ˈfrɛʃnəs/
**Part of speech:** noun
**Core meaning (English):** the property that an attestation response is bound to a newly generated challenge rather than replayed from an earlier session.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nonce mới bảo đảm evidence không phải bản replay.
**Grammar & collocations:** `nonce-freshness check` — check; `bind evidence to a challenge` — bind.
**Examples:** `Nonce freshness prevented an attacker from replaying yesterday's healthy quote.` → Freshness ngăn replay quote cũ.
**Liên kết tiếng Hàn:** `논스 신선도`.

## 8. endorsement key /ɛnˈdɔrsmənt kiː/
**Part of speech:** noun
**Core meaning (English):** a manufacturer-provisioned asymmetric key used to establish the identity or authenticity of a trusted hardware module.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key do nhà sản xuất provision để xác thực module phần cứng.
**Grammar & collocations:** `endorsement-key certificate` — certificate; `validate a hardware identity` — xác thực.
**Examples:** `The enrollment service verified the endorsement key before accepting the new device.` → Service kiểm tra endorsement key trước khi nhận device.
**Liên kết tiếng Hàn:** `보증 키`.

## 9. attestation identity key /ˌætəˈsteɪʃən aɪˈdɛntəti kiː/
**Part of speech:** noun
**Core meaning (English):** a key used to sign attestation statements while limiting exposure of a device's foundational manufacturer identity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key ký statement attestation, tách khỏi identity gốc để giảm tracking.
**Grammar & collocations:** `attestation-identity-key certificate` — certificate; `rotate an identity key` — xoay.
**Examples:** `The device used a fresh attestation identity key for each deployment domain.` → Device dùng key identity khác theo domain.
**Liên kết tiếng Hàn:** `증명 신원 키`.

## 10. quote /kwoʊt/
**Part of speech:** noun
**Core meaning (English):** a signed statement containing selected platform measurements and claims for an attestation verifier.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statement đã ký, chứa measurement gửi cho verifier.
**Grammar & collocations:** `quote verification` — verification; `request a fresh quote` — yêu cầu.
**Examples:** `The verifier checked the quote signature and compared its measurements with approved values.` → Verifier kiểm signature và so measurements.
**Liên kết tiếng Hàn:** `인증 인용문`.

## 11. trusted computing base /ˈtrʌstɪd kəmˈpjuːtɪŋ beɪs/
**Part of speech:** noun
**Core meaning (English):** the hardware, firmware, and software components that must behave correctly for a security property to hold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập thành phần phải tin để security claim đúng.
**Grammar & collocations:** `trusted-computing-base reduction` — reduction; `minimize the trusted base` — thu nhỏ.
**Examples:** `The design minimized the trusted computing base by moving parsing outside the secure monitor.` → Thiết kế giảm TCB bằng cách đưa parsing ra ngoài.
**Liên kết tiếng Hàn:** `신뢰 컴퓨팅 기반`.

## 12. firmware measurement /ˈfɝmˌwɛr ˈmɛʒərmənt/
**Part of speech:** noun
**Core meaning (English):** a cryptographic digest of firmware recorded for later comparison during boot verification or attestation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hash firmware để kiểm tra và attest.
**Grammar & collocations:** `firmware-measurement event` — event; `extend the firmware digest` — extend.
**Examples:** `The firmware measurement changed after a vendor security update was installed.` → Measurement đổi sau update bảo mật.
**Liên kết tiếng Hàn:** `펌웨어 측정`.

## 13. secure boot chain /sɪˈkjʊr buːt tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** a sequence in which each boot component verifies the signature of the next component before transferring control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi stage boot kiểm chữ ký stage kế tiếp.
**Grammar & collocations:** `secure-boot-chain root` — root; `verify the next loader` — kiểm.
**Examples:** `The secure boot chain stopped an unsigned recovery image before it executed.` → Chain chặn recovery image chưa ký.
**Liên kết tiếng Hàn:** `보안 부팅 체인`.

## 14. key sealing /kiː ˈsiːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** encrypting or wrapping a secret so it can be released only when specified platform measurements are present.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khóa secret theo trạng thái platform.
**Grammar & collocations:** `key-sealing policy` — policy; `unseal a secret under measured state` — mở.
**Examples:** `Key sealing prevented the disk key from being released after the boot measurement changed.` → Sealing ngăn nhả disk key khi measurement đổi.
**Liên kết tiếng Hàn:** `키 봉인`.

## 15. anti-rollback counter /ˌænti ˈroʊlˌbæk ˈkaʊntər/
**Part of speech:** noun
**Core meaning (English):** a monotonic value that prevents firmware or security policy from reverting to an older vulnerable version.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counter tăng dần, chặn quay về firmware cũ.
**Grammar & collocations:** `anti-rollback-counter check` — check; `reject an older version` — từ chối.
**Examples:** `The anti-rollback counter rejected a signed image with a lower security version.` → Counter từ chối image ký nhưng version thấp hơn.
**Liên kết tiếng Hàn:** `롤백 방지 카운터`.

## 16. reference value /ˈrɛfərəns ˈvæljuː/
**Part of speech:** noun
**Core meaning (English):** an approved measurement, range, or claim against which attestation evidence is evaluated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị chuẩn để so evidence.
**Grammar & collocations:** `reference-value set` — set; `compare a measurement with the reference` — so.
**Examples:** `The reference value was updated only after the new kernel passed regression testing.` → Reference chỉ update sau regression test.
**Liên kết tiếng Hàn:** `참조 값`.

## 17. event log /ɪˈvɛnt lɔɡ/
**Part of speech:** noun
**Core meaning (English):** an ordered record explaining which components were measured and how platform state was extended during boot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** log giải thích chuỗi measurement đã ghi.
**Grammar & collocations:** `event-log replay` — replay; `parse measurement events` — parse.
**Examples:** `The verifier used the event log to explain why one platform register differed from its reference.` → Verifier dùng log để giải thích PCR lệch.
**Liên kết tiếng Hàn:** `이벤트 로그`.

## 18. appraisal policy /əˈpreɪzəl ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules for deciding whether measured claims are acceptable for a particular resource or workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy thẩm định claim theo resource cần bảo vệ.
**Grammar & collocations:** `appraisal-policy decision` — decision; `accept a platform claim` — chấp nhận.
**Examples:** `The appraisal policy allowed debug firmware only on an isolated development network.` → Policy chỉ cho firmware debug ở mạng cô lập.
**Liên kết tiếng Hàn:** `평가 정책`.

## 19. attestation broker /ˌætəˈsteɪʃən ˈbroʊkər/
**Part of speech:** noun
**Core meaning (English):** a service that collects, validates, transforms, and distributes attestation results to relying applications.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** service trung gian nhận evidence, verify rồi cấp kết quả cho app.
**Grammar & collocations:** `attestation-broker service` — service; `issue a signed verdict` — phát hành.
**Examples:** `The attestation broker issued a short-lived admission token after checking the quote.` → Broker cấp token ngắn hạn sau khi kiểm quote.
**Liên kết tiếng Hàn:** `증명 브로커`.

## 20. confidential virtual machine /ˌkɑnfəˈdɛnʃəl ˈvɝtʃuəl məˈʃiːn/
**Part of speech:** noun
**Core meaning (English):** a virtual machine whose memory and execution state are protected from a hostile or untrusted host through hardware isolation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** VM được bảo vệ khỏi host không đáng tin.
**Grammar & collocations:** `confidential-virtual-machine launch` — launch; `attest a guest environment` — attest.
**Examples:** `The confidential virtual machine received secrets only after remote attestation succeeded.` → CVM chỉ nhận secret sau attestation thành công.
**Liên kết tiếng Hàn:** `기밀 가상 머신`.

## Review in context

**Measured boot** begins at a **trust anchor** and extends values into a **platform configuration register**. **Remote attestation** packages signed **attestation evidence** for a **verifier policy**, with **nonce freshness** preventing replay. Hardware identity can involve an **endorsement key**, an **attestation identity key**, and a signed **quote**. The **trusted computing base** includes firmware whose **firmware measurement** is linked through a **secure boot chain**. **Key sealing**, an **anti-rollback counter**, a **reference value**, and an **event log** support an **appraisal policy**. An **attestation broker** can admit a **confidential virtual machine** after validation.

**Bản dịch tiếng Việt:** **Measured boot** bắt đầu từ **trust anchor** và extend giá trị vào **platform configuration register**. **Remote attestation** đóng gói **attestation evidence** có chữ ký cho **verifier policy**, còn **nonce freshness** ngăn replay. Identity phần cứng có thể gồm **endorsement key**, **attestation identity key** và **quote** có chữ ký. **Trusted computing base** gồm firmware có **firmware measurement** nối trong **secure boot chain**. **Key sealing**, **anti-rollback counter**, **reference value** và **event log** hỗ trợ **appraisal policy**. **Attestation broker** có thể cho **confidential virtual machine** gia nhập sau khi xác thực.
