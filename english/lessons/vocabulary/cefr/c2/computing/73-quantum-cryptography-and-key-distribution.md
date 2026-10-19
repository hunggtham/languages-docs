# C2 Vocabulary — Quantum cryptography and key distribution

This lesson follows a quantum-key-distribution protocol from photon preparation through finite-key security, attacks, authentication, and key distillation.

Flow: **BB84 protocol → decoy-state method → quantum key distribution → secrecy amplification → information reconciliation → finite-key analysis → composable security → device-independent security → measurement-device independence → photon-number splitting → intercept-resend attack → key-rate bound → secure-key fraction → trusted-device assumption → side-channel model → authentication tag → quantum random number generator → entropy accumulation → loss-tolerant protocol → key distillation**.

## 1. BB84 protocol /ˌbiː biː eɪtiˈfɔr ˈproʊtəkɒl/
**Part of speech:** noun
**Core meaning (English):** a quantum-key-distribution protocol using two alternative measurement bases to establish correlated secret bits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** protocol dùng hai basis đo để tạo bit bí mật tương quan.
**Grammar & collocations:** `BB84-protocol security proof` — proof; `choose a basis` — chọn.
**Examples:** `The BB84 protocol discarded rounds in which the sender and receiver used incompatible bases.` → BB84 bỏ lượt basis khác.
**Liên kết tiếng Hàn:** `BB84 프로토콜`.

## 2. decoy-state method /ˈdiːkɔɪ steɪt ˈmeθəd/
**Part of speech:** noun
**Core meaning (English):** varying the intensity of optical pulses to detect attacks that exploit multiphoton emissions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi cường độ xung để phát hiện khai thác photon nhiều.
**Grammar & collocations:** `decoy-state-method analysis` — analysis; `estimate a single-photon yield` — ước tính.
**Examples:** `The decoy-state method tightened the key-rate estimate for a weak laser source.` → Method siết ước tính key-rate.
**Liên kết tiếng Hàn:** `디코이 상태 방법`.

## 3. quantum key distribution /ˈkwɒntəm kiː ˌdɪstrɪˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** using quantum states and public discussion to establish a shared secret key with detectable disturbance from eavesdropping.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng state lượng tử và trao đổi công khai để tạo khóa bí mật.
**Grammar & collocations:** `quantum-key-distribution link` — link; `establish a shared key` — thiết lập.
**Examples:** `Quantum key distribution does not hide the public transcript; it limits what an eavesdropper can learn.` → QKD không giấu transcript công khai.
**Liên kết tiếng Hàn:** `양자 키 분배`.

## 4. secrecy amplification /ˈsiːkrəsi ˌæmplɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** compressing a partially secret string so that an adversary's remaining information becomes negligible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nén chuỗi còn rò rỉ để thông tin đối thủ gần bằng không.
**Grammar & collocations:** `secrecy-amplification hash` — hash; `compress a raw key` — nén.
**Examples:** `Secrecy amplification shortened the reconciled key according to the measured leakage.` → Amplification rút khóa theo rò đo được.
**Liên kết tiếng Hàn:** `비밀 증폭`.

## 5. information reconciliation /ˌɪnfərˈmeɪʃən ˌrekənˌsɪliˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** correcting disagreements between two correlated raw keys through an authenticated public exchange.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa khác biệt giữa hai raw key qua trao đổi công khai có xác thực.
**Grammar & collocations:** `information-reconciliation leakage` — leakage; `correct a bit mismatch` — sửa.
**Examples:** `Information reconciliation aligned the raw keys but revealed a bounded amount of parity information.` → Reconciliation căn key nhưng lộ parity giới hạn.
**Liên kết tiếng Hàn:** `정보 조정`.

## 6. finite-key analysis /ˈfaɪnaɪt kiː əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** accounting for statistical uncertainty when a secret key is generated from a limited data set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính bất định thống kê khi số mẫu key hữu hạn.
**Grammar & collocations:** `finite-key-analysis correction` — correction; `bound a statistical fluctuation` — chặn.
**Examples:** `Finite-key analysis reduced the final rate compared with the asymptotic formula.` → Phân tích key hữu hạn giảm rate.
**Liên kết tiếng Hàn:** `유한 키 분석`.

## 7. composable security /kəmˈpoʊzəbəl sɪˈkjʊrəti/
**Part of speech:** noun
**Core meaning (English):** security defined so that a key remains safe when used as a component of a larger cryptographic system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo mật vẫn giữ khi khóa ghép vào hệ thống lớn.
**Grammar & collocations:** `composable-security parameter` — parameter; `compose an ideal resource` — ghép.
**Examples:** `Composable security let the key be analyzed together with authentication and later encryption.` → Bảo mật composable phân tích cùng xác thực.
**Liên kết tiếng Hàn:** `조합 가능한 보안`.

## 8. device-independent security /dɪˈvaɪs ˌɪndɪˈpendənt sɪˈkjʊrəti/
**Part of speech:** noun
**Core meaning (English):** security that relies on observed statistical correlations rather than trusting detailed device behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo mật dựa trên tương quan đo, không tin chi tiết thiết bị.
**Grammar & collocations:** `device-independent-security proof` — proof; `close an implementation loophole` — đóng.
**Examples:** `Device-independent security required high-quality correlations and strict independence assumptions.` → Bảo mật độc lập thiết bị cần tương quan chất lượng.
**Liên kết tiếng Hàn:** `장치 독립 보안`.

## 9. measurement-device independence /ˈmeʒərmənt dɪˈvaɪs ˌɪndɪˈpendəns/
**Part of speech:** noun
**Core meaning (English):** a protocol design that removes the need to trust the measurement devices while retaining practical source assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không cần tin detector đo nhưng vẫn giữ giả định nguồn.
**Grammar & collocations:** `measurement-device-independent protocol` — protocol; `close a detector attack` — đóng.
**Examples:** `Measurement-device independence protected the link against a broad class of detector exploits.` → MDI bảo vệ trước khai thác detector.
**Liên kết tiếng Hàn:** `측정 장치 독립성`.

## 10. photon-number splitting /ˈfoʊtɒn ˈnʌmbər ˈsplɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** an attack that separates a multiphoton pulse and keeps one copy while forwarding another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách xung nhiều photon, giữ một và chuyển một.
**Grammar & collocations:** `photon-number-splitting attack` — attack; `exploit a multiphoton pulse` — khai thác.
**Examples:** `The decoy analysis bounded the information available from photon-number splitting.` → Phân tích decoy chặn thông tin từ splitting.
**Liên kết tiếng Hàn:** `광자 수 분할`.

## 11. intercept-resend attack /ˌɪntərˈsept riːˈsend əˈtæk/
**Part of speech:** noun
**Core meaning (English):** an attack in which an adversary measures transmitted states and sends replacement states to the receiver.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đối thủ đo state rồi gửi state thay thế.
**Grammar & collocations:** `intercept-resend-attack error` — error; `disturb incompatible bases` — gây nhiễu.
**Examples:** `An intercept-resend attack raised the observed error rate above the abort threshold.` → Attack tăng lỗi vượt ngưỡng dừng.
**Liên kết tiếng Hàn:** `가로채기 재전송 공격`.

## 12. key-rate bound /kiː reɪt baʊnd/
**Part of speech:** noun
**Core meaning (English):** a proven upper or lower limit on the rate at which secure key bits can be generated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn đã chứng minh của tốc độ sinh bit an toàn.
**Grammar & collocations:** `key-rate-bound derivation` — derivation; `lower-bound a secret rate` — chặn dưới.
**Examples:** `The key-rate bound fell when loss and reconciliation leakage were included.` → Bound giảm khi tính loss và leakage.
**Liên kết tiếng Hàn:** `키율 경계`.

## 13. secure-key fraction /sɪˈkjʊər kiː ˈfrækʃən/
**Part of speech:** noun
**Core meaning (English):** the proportion of sifted or raw bits that can safely become final secret key bits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ bit raw có thể thành key bí mật cuối.
**Grammar & collocations:** `secure-key-fraction estimate` — estimate; `discard insecure rounds` — bỏ.
**Examples:** `A high error rate reduced the secure-key fraction even when the photon source was bright.` → Lỗi cao giảm fraction.
**Liên kết tiếng Hàn:** `안전 키 비율`.

## 14. trusted-device assumption /ˈtrʌstɪd dɪˈvaɪs əˈsʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** an assumption that specified components behave according to their characterized models.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả định thiết bị tuân mô hình đã đặc tính hóa.
**Grammar & collocations:** `trusted-device-assumption audit` — audit; `characterize a detector` — đặc tính.
**Examples:** `The trusted-device assumption required a separate audit of detector calibration.` → Giả định cần audit calibration detector.
**Liên kết tiếng Hàn:** `신뢰 장치 가정`.

## 15. side-channel model /saɪd ˈtʃænəl ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** an explicit description of unintended information that implementation details may reveal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô tả rò rỉ qua chi tiết triển khai.
**Grammar & collocations:** `side-channel-model assumption` — assumption; `bound timing leakage` — chặn.
**Examples:** `The side-channel model included detector timing and source-brightness variation.` → Model gồm timing detector và độ sáng nguồn.
**Liên kết tiếng Hàn:** `부채널 모델`.

## 16. authentication tag /ɔːˌθentɪˈkeɪʃən tæɡ/
**Part of speech:** noun
**Core meaning (English):** a short value used to detect alteration of a public message.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị ngắn phát hiện message công khai bị sửa.
**Grammar & collocations:** `authentication-tag verification` — verification; `reject a modified transcript` — từ chối.
**Examples:** `An authentication tag prevented an attacker from changing the reconciliation transcript unnoticed.` → Tag ngăn sửa transcript.
**Liên kết tiếng Hàn:** `인증 태그`.

## 17. quantum random number generator /ˈkwɒntəm ˈrændəm ˈnʌmbər ˈdʒenəreɪtər/
**Part of speech:** noun
**Core meaning (English):** a device that derives random numbers from fundamentally unpredictable quantum measurement outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị lấy số ngẫu nhiên từ đo lượng tử khó đoán.
**Grammar & collocations:** `quantum-random-number-generator certification` — certification; `extract min-entropy` — trích.
**Examples:** `The quantum random number generator supplied basis choices for the optical transmitter.` → QRNG cấp lựa chọn basis.
**Liên kết tiếng Hàn:** `양자 난수 생성기`.

## 18. entropy accumulation /ˈentrəpi əˌkjuːmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a method for adding per-round uncertainty bounds to analyze security over many correlated rounds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cộng dồn bound bất định từng lượt cho nhiều lượt tương quan.
**Grammar & collocations:** `entropy-accumulation theorem` — theorem; `bound smooth min-entropy` — chặn.
**Examples:** `Entropy accumulation converted observed test statistics into a finite-key secrecy bound.` → Accumulation đổi thống kê thành bound bí mật.
**Liên kết tiếng Hàn:** `엔트로피 누적`.

## 19. loss-tolerant protocol /lɒs ˈtɒlərənt ˈproʊtəkɒl/
**Part of speech:** noun
**Core meaning (English):** a protocol whose security analysis remains valid despite substantial transmission loss.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** protocol vẫn an toàn dù truyền mất nhiều photon.
**Grammar & collocations:** `loss-tolerant-protocol proof` — proof; `separate loss from basis flaws` — tách.
**Examples:** `The loss-tolerant protocol remained secure when the channel attenuation doubled.` → Protocol vẫn an toàn khi suy hao gấp đôi.
**Liên kết tiếng Hàn:** `손실 허용 프로토콜`.

## 20. key distillation /kiː ˌdɪstəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the final processing that turns reconciled, partially secret bits into a shorter secure key.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xử lý cuối biến bit đã căn thành khóa ngắn an toàn.
**Grammar & collocations:** `key-distillation pipeline` — pipeline; `compress residual information` — nén.
**Examples:** `Key distillation combined authentication, secrecy amplification, and a final privacy check.` → Distillation kết hợp xác thực và khuếch đại.
**Liên kết tiếng Hàn:** `키 정제`.

## Review in context

The **BB84 protocol** and a **decoy-state method** establish a practical form of **quantum key distribution**. **Secrecy amplification** follows **information reconciliation**, while **finite-key analysis** and **composable security** quantify what remains safe. **Device-independent security** and **measurement-device independence** reduce trust in hardware; **photon-number splitting** and an **intercept-resend attack** illustrate why. A **key-rate bound** determines the **secure-key fraction**, under a stated **trusted-device assumption** and **side-channel model**. An **authentication tag** protects the transcript, a **quantum random number generator** supplies choices, and **entropy accumulation** supports a **loss-tolerant protocol**. **Key distillation** produces the final secret.

**Bản dịch tiếng Việt:** **Protocol BB84** và **method decoy-state** tạo dạng thực tế của **phân phối khóa lượng tử**. **Khuếch đại bí mật** theo sau **đối chiếu thông tin**, còn **phân tích key hữu hạn** và **bảo mật composable** định lượng phần an toàn. **Bảo mật độc lập thiết bị** và **độc lập thiết bị đo** giảm mức tin phần cứng; **tách số photon** và **tấn công chặn-gửi lại** cho thấy lý do. **Bound tốc độ key** quyết định **tỷ lệ key an toàn**, theo **giả định thiết bị tin cậy** và **model kênh phụ**. **Tag xác thực** bảo vệ transcript, **QRNG** cung cấp lựa chọn, và **tích lũy entropy** hỗ trợ **protocol chịu mất**. **Tinh lọc key** tạo bí mật cuối.
