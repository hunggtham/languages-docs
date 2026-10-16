# C2 Vocabulary — Secure firmware, device identity, and update trust

This lesson follows trust from a device's first secret through provisioning, runtime defenses, and a revocable firmware update.

Flow: **root of trust → secure element → device identity → key ladder → firmware rollback → signed manifest → code signing → attestation token → debug lock → tamper response → secure erase → key revocation → entropy source → true random number generator → monotonic counter → memory protection unit → stack canary → control-flow integrity → secure update channel → secure provisioning**.

## 1. root of trust /ˌruːt əv ˈtrʌst/
**Part of speech:** noun
**Core meaning (English):** the foundational key, component, or authority from which a system verifies all later trust decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key/component/authority nền tảng để hệ thống verify mọi quyết định trust sau đó.
**Grammar & collocations:** `root-of-trust key` — khóa; `establish a trust anchor` — thiết lập.
**Examples:** `The chip's immutable key served as the root of trust for the boot chain.` → Key bất biến của chip làm gốc trust cho chuỗi boot.
**Liên kết tiếng Hàn:** `신뢰의 루트`.

## 2. secure element /sɪˈkjʊr ˈeləmənt/
**Part of speech:** noun
**Core meaning (English):** a tamper-resistant chip that stores secrets and performs sensitive cryptographic operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chip chống can thiệp lưu secret và thực hiện crypto nhạy cảm.
**Grammar & collocations:** `secure-element firmware` — firmware; `isolate a private key` — cô lập.
**Examples:** `The secure element signed the device certificate without exposing its private key.` → Secure element ký certificate mà không lộ private key.
**Liên kết tiếng Hàn:** `보안 요소`.

## 3. device identity /dɪˈvaɪs aɪˈdentəti/
**Part of speech:** noun
**Core meaning (English):** a cryptographically verifiable identifier that distinguishes one physical device from another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identifier có thể verify bằng crypto để phân biệt từng thiết bị vật lý.
**Grammar & collocations:** `device-identity record` — bản ghi; `enroll a unit` — đăng ký.
**Examples:** `The service checked device identity before accepting telemetry from the new gateway.` → Service kiểm tra identity trước nhận telemetry.
**Liên kết tiếng Hàn:** `장치 식별자`.

## 4. key ladder /ˈkiː ˌlædər/
**Part of speech:** noun
**Core meaning (English):** a hierarchy that derives related cryptographic keys from a protected root without exposing the root itself.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ bậc derive các key liên quan từ root được bảo vệ mà không lộ root.
**Grammar & collocations:** `key-ladder derivation` — phép dẫn xuất; `derive a session key` — tạo.
**Examples:** `A key ladder produced a storage key unique to each device and product line.` → Key ladder tạo storage key riêng cho từng thiết bị và dòng sản phẩm.
**Liên kết tiếng Hàn:** `키 래더`.

## 5. firmware rollback /ˈfɜːrmwer ˈroʊlbæk/
**Part of speech:** noun
**Core meaning (English):** returning a device to an earlier firmware version after a failed or harmful update.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa thiết bị về firmware cũ sau update lỗi hoặc gây hại.
**Grammar & collocations:** `firmware-rollback policy` — chính sách; `restore a known-good build` — phục hồi.
**Examples:** `The recovery partition allowed firmware rollback when the new image failed its health check.` → Partition phục hồi cho rollback khi image mới fail health check.
**Liên kết tiếng Hàn:** `펌웨어 롤백`.

## 6. signed manifest /saɪnd ˈmænəˌfest/
**Part of speech:** noun
**Core meaning (English):** a signed metadata document describing an artifact's version, contents, and installation constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tài liệu metadata được ký, mô tả version, nội dung và điều kiện cài.
**Grammar & collocations:** `signed-manifest parser` — bộ phân tích; `check a version constraint` — kiểm tra.
**Examples:** `The bootloader rejected a signed manifest whose hardware requirement was too high.` → Bootloader từ chối manifest có yêu cầu hardware quá cao.
**Liên kết tiếng Hàn:** `서명된 매니페스트`.

## 7. code signing /ˈkoʊd ˌsaɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** applying a digital signature so software origin and integrity can be verified before execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gắn chữ ký số để verify nguồn và integrity software trước khi chạy.
**Grammar & collocations:** `code-signing key` — khóa; `enforce signature verification` — thực thi.
**Examples:** `Code signing stopped an unsigned diagnostic module from loading in production.` → Code signing chặn module không ký load ở production.
**Liên kết tiếng Hàn:** `코드 서명`.

## 8. attestation token /ˌæteˈsteɪʃən ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a signed statement that reports a device's identity and relevant runtime or boot state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statement được ký báo identity và state boot/runtime liên quan của device.
**Grammar & collocations:** `attestation-token verifier` — bộ verify; `present measured state` — trình bày.
**Examples:** `The broker issued credentials only after validating the gateway's attestation token.` → Broker chỉ cấp credential sau khi verify token.
**Liên kết tiếng Hàn:** `증명 토큰`.

## 9. debug lock /ˈdiːbʌɡ lɑːk/
**Part of speech:** noun
**Core meaning (English):** a hardware or firmware control that disables or restricts debugging access on a deployed device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control hardware/firmware tắt hoặc hạn chế debug trên thiết bị đã triển khai.
**Grammar & collocations:** `debug-lock fuse` — cầu chì; `close a development port` — đóng.
**Examples:** `Manufacturing enabled the debug lock after the final security review.` → Nhà máy bật debug lock sau review security cuối.
**Liên kết tiếng Hàn:** `디버그 잠금`.

## 10. tamper response /ˈtæmpər rɪˈspɑːns/
**Part of speech:** noun
**Core meaning (English):** an automated action taken when a device detects physical or logical interference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hành động tự động khi device phát hiện can thiệp vật lý hoặc logic.
**Grammar & collocations:** `tamper-response policy` — chính sách; `zeroize a secret` — xóa sạch.
**Examples:** `The tamper response cleared session keys after the enclosure switch opened.` → Response xóa session key khi công tắc vỏ mở.
**Liên kết tiếng Hàn:** `변조 대응`.

## 11. secure erase /sɪˈkjʊr ɪˈreɪs/
**Part of speech:** noun
**Core meaning (English):** a procedure that removes stored data so it cannot be recovered through ordinary readout.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy trình xóa data để không thể khôi phục bằng đọc thông thường.
**Grammar & collocations:** `secure-erase command` — lệnh; `sanitize persistent storage` — làm sạch.
**Examples:** `The service performed a secure erase before returning the sensor to inventory.` → Service secure erase trước khi đưa sensor về kho.
**Liên kết tiếng Hàn:** `보안 삭제`.

## 12. key revocation /ˈkiː ˌrevəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** officially invalidating a cryptographic key so systems stop trusting it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vô hiệu hóa chính thức một key để hệ thống ngừng trust.
**Grammar & collocations:** `key-revocation list` — danh sách; `revoke a compromised credential` — thu hồi.
**Examples:** `Key revocation blocked a stolen certificate from enrolling more devices.` → Revocation chặn certificate bị trộm đăng ký thêm device.
**Liên kết tiếng Hàn:** `키 폐기`.

## 13. entropy source /ˈentrəpi sɔːrs/
**Part of speech:** noun
**Core meaning (English):** a physical or environmental process that supplies unpredictable data for cryptographic randomness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process vật lý/môi trường cung cấp data khó đoán cho randomness crypto.
**Grammar & collocations:** `entropy-source health test` — kiểm tra; `harvest noise` — thu thập.
**Examples:** `The bootloader tested its entropy source before generating a device key.` → Bootloader test nguồn entropy trước tạo key.
**Liên kết tiếng Hàn:** `엔트로피 소스`.

## 14. true random number generator /truː ˈrændəm ˈnʌmbər ˈdʒenəˌreɪtər/
**Part of speech:** noun
**Core meaning (English):** hardware that produces random values from physical noise rather than a deterministic algorithm alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hardware tạo giá trị ngẫu nhiên từ nhiễu vật lý, không chỉ thuật toán deterministic.
**Grammar & collocations:** `true-random-number generator output` — output; `seed a cryptographic pool` — khởi tạo.
**Examples:** `The true random number generator supplied fresh material for each handshake.` → TRNG cung cấp dữ liệu mới cho mỗi handshake.
**Liên kết tiếng Hàn:** `진난수 생성기`.

## 15. monotonic counter /ˌmɑːnəˈtɑːnɪk ˈkaʊntər/
**Part of speech:** noun
**Core meaning (English):** a counter that moves only forward and is used to detect reuse or rollback.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counter chỉ tăng, dùng để phát hiện reuse hoặc rollback.
**Grammar & collocations:** `monotonic-counter value` — giá trị; `reject an older sequence` — từ chối.
**Examples:** `The monotonic counter made a replayed firmware package appear obsolete.` → Counter khiến package firmware phát lại bị coi là cũ.
**Liên kết tiếng Hàn:** `단조 증가 카운터`.

## 16. memory protection unit /ˈmeməri prəˈtekʃən ˈjuːnɪt/
**Part of speech:** noun
**Core meaning (English):** a processor component that assigns access permissions and regions to memory without requiring full virtual memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component processor gán quyền và vùng memory mà không cần virtual memory đầy đủ.
**Grammar & collocations:** `memory-protection-unit region` — vùng; `deny execute access` — từ chối.
**Examples:** `The memory protection unit kept a sensor buffer non-executable.` → MPU giữ buffer sensor không thể execute.
**Liên kết tiếng Hàn:** `메모리 보호 장치`.

## 17. stack canary /ˈstæk ˈkænəri/
**Part of speech:** noun
**Core meaning (English):** a secret marker placed near a stack frame so a function can detect an overwrite before returning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker bí mật cạnh stack frame để phát hiện overwrite trước khi return.
**Grammar & collocations:** `stack-canary check` — kiểm tra; `detect a smashed stack` — phát hiện.
**Examples:** `The stack canary caught the buffer overwrite before control returned to the caller.` → Canary bắt overwrite trước khi control về caller.
**Liên kết tiếng Hàn:** `스택 카나리`.

## 18. control-flow integrity /kənˈtroʊl floʊ ɪnˈteɡrəti/
**Part of speech:** noun
**Core meaning (English):** a defense that restricts execution to legitimate control-flow paths defined by the program.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế giới hạn execution vào các path hợp lệ của program.
**Grammar & collocations:** `control-flow-integrity policy` — chính sách; `validate an indirect branch` — kiểm tra.
**Examples:** `Control-flow integrity stopped the corrupted pointer from jumping into a gadget.` → CFI chặn pointer hỏng nhảy vào gadget.
**Liên kết tiếng Hàn:** `제어 흐름 무결성`.

## 19. secure update channel /sɪˈkjʊr ʌpˈdeɪt ˈtʃænəl/
**Part of speech:** noun
**Core meaning (English):** a protected delivery path that authenticates and preserves the integrity of software updates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường truyền bảo vệ, xác thực và giữ integrity của update software.
**Grammar & collocations:** `secure-update-channel endpoint` — endpoint; `transport an encrypted image` — truyền.
**Examples:** `The secure update channel authenticated the server before downloading the image.` → Kênh update xác thực server trước tải image.
**Liên kết tiếng Hàn:** `보안 업데이트 채널`.

## 20. secure provisioning /sɪˈkjʊr prəˈvɪʒənɪŋ/
**Part of speech:** noun
**Core meaning (English):** loading a device's identity and secrets in a controlled process that prevents unauthorized substitution or disclosure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nạp identity và secret trong quy trình kiểm soát, ngăn thay thế/lộ trái phép.
**Grammar & collocations:** `secure-provisioning station` — trạm; `inject a unique credential` — nạp.
**Examples:** `Secure provisioning injected a unique credential while the board was still inside the factory cage.` → Provisioning nạp credential riêng khi board còn trong khu vực nhà máy.
**Liên kết tiếng Hàn:** `보안 프로비저닝`.

## Review in context

During **secure provisioning**, each device receives a **device identity** and secrets protected by a **root of trust**, a **secure element**, and a **key ladder**. **code signing** authenticates an image, while a **signed manifest** states its version and constraints. A **monotonic counter** blocks **firmware rollback**, and an **attestation token** reports the resulting state. Production hardware enables a **debug lock** and defines a **tamper response** that can perform **secure erase**. Operators handle **key revocation** when credentials are exposed; an **entropy source** and **true random number generator** supply fresh cryptographic material. At runtime, a **memory protection unit**, **stack canary**, and **control-flow integrity** limit damage. A **secure update channel** delivers the next verified image without weakening that chain of trust.

**Bản dịch tiếng Việt:** Trong **secure provisioning**, mỗi thiết bị nhận **device identity** và secret được bảo vệ bởi **root of trust**, **secure element** và **key ladder**. **code signing** xác thực image, còn **signed manifest** nêu version và điều kiện. **Monotonic counter** chặn **firmware rollback**, và **attestation token** báo state kết quả. Phần cứng production bật **debug lock** và định nghĩa **tamper response** có thể thực hiện **secure erase**. Operator dùng **key revocation** khi credential bị lộ; **entropy source** và **true random number generator** cung cấp vật liệu crypto mới. Khi chạy, **memory protection unit**, **stack canary** và **control-flow integrity** giới hạn thiệt hại. **Secure update channel** chuyển image đã verify tiếp theo mà không làm yếu chuỗi trust.
