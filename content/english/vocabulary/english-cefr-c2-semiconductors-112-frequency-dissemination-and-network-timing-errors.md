# C2 Vocabulary — Frequency dissemination and network timing errors

This lesson connects long-haul frequency transfer to bidirectional links, packet timing, servo limits, and ensemble prediction.

Flow: **frequency dissemination node → phase-noise transfer → fiber amplifier bidirectionality → round-trip phase → active noise cancellation → acoustic isolation → thermal enclosure drift → link repeater spacing → regenerator latency → network asymmetry → packet-delay variation → timestamp jitter → software timestamping → clock servo offset → frequency ramp limit → slew-rate constraint → holdover covariance → ensemble prediction error → timescale realization → dissemination closure**.

## 1. frequency dissemination node /ˈfriːkwənsi dɪˌseməˈneɪʃən noʊd/
**Part of speech:** noun
**Core meaning (English):** an endpoint or relay that receives and distributes a reference frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** endpoint hoặc relay nhận và phân phối reference frequency.
**Grammar & collocations:** `frequency-dissemination-node chain` — chain; `feed a remote laboratory` — cấp cho lab remote.
**Examples:** `Each frequency dissemination node logged phase before forwarding the reference.` → Mỗi node dissemination-frequency ghi phase trước khi forward reference.
**Liên kết tiếng Hàn:** `주파수 분배 노드`.

## 2. phase-noise transfer /feɪz nɔɪz ˈtrænsfɜːr/
**Part of speech:** noun
**Core meaning (English):** transport of oscillator phase fluctuations through a distribution link.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phase fluctuation oscillator được truyền qua distribution link.
**Grammar & collocations:** `phase-noise-transfer spectrum` — spectrum; `preserve low-noise performance` — giữ performance noise thấp.
**Examples:** `Phase-noise transfer remained below the local oscillator floor.` → Transfer noise-phase vẫn dưới floor oscillator local.
**Liên kết tiếng Hàn:** `위상 잡음 전송`.

## 3. fiber amplifier bidirectionality /ˈfaɪbər ˈæmpləfaɪər ˌbaɪdəˌrekʃəˈnæləti/
**Part of speech:** noun
**Core meaning (English):** degree to which an optical amplifier behaves equivalently in forward and reverse propagation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức amplifier quang behavior tương đương khi propagation xuôi và ngược.
**Grammar & collocations:** `fiber-amplifier-bidirectionality test` — test; `balance two propagation directions` — cân hai hướng propagation.
**Examples:** `Fiber amplifier bidirectionality was checked before the reciprocity correction was accepted.` → Bidirectionality amplifier-fiber được check trước khi accept reciprocity correction.
**Liên kết tiếng Hàn:** `광섬유 증폭기 양방향성`.

## 4. round-trip phase /raʊnd trɪp feɪz/
**Part of speech:** noun
**Core meaning (English):** phase accumulated by a signal traveling to a remote point and back.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phase tích lũy khi signal đi tới remote point rồi quay về.
**Grammar & collocations:** `round-trip-phase measurement` — measurement; `infer a one-way delay` — suy one-way delay.
**Examples:** `Round-trip phase revealed a slow fiber path change during the night.` → Phase trip-round lộ path fiber đổi chậm trong đêm.
**Liên kết tiếng Hàn:** `왕복 위상`.

## 5. active noise cancellation /ˈæktɪv nɔɪz ˌkænsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** feedback or feedforward control that generates an opposing signal to reduce measured noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control tạo signal đối nghịch để giảm noise đo được.
**Grammar & collocations:** `active-noise-cancellation loop` — loop; `inject an anti-noise correction` — inject anti-noise correction.
**Examples:** `Active noise cancellation reduced acoustic phase fluctuations on the exposed fiber.` → Cancellation noise-active giảm phase fluctuation acoustic trên fiber exposed.
**Liên kết tiếng Hàn:** `능동 잡음 제거`.

## 6. acoustic isolation /əˈkuːstɪk ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** suppression of mechanical sound and vibration coupling into a sensitive measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** triệt sound và vibration cơ coupling vào measurement nhạy.
**Grammar & collocations:** `acoustic-isolation enclosure` — enclosure; `decouple a fiber spool` — decouple fiber spool.
**Examples:** `Acoustic isolation lowered the short-term phase noise during construction nearby.` → Isolation acoustic hạ phase noise ngắn hạn khi gần đó có construction.
**Liên kết tiếng Hàn:** `음향 격리`.

## 7. thermal enclosure drift /ˈθɜːrməl ɪnˈkloʊʒər drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual reference or path change caused by temperature evolution inside a protective enclosure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reference hoặc path đổi dần do temperature evolution trong enclosure bảo vệ.
**Grammar & collocations:** `thermal-enclosure-drift monitor` — monitor; `stabilize an internal temperature` — ổn định temperature nội.
**Examples:** `Thermal enclosure drift changed the delay after the heater controller cycled.` → Drift enclosure-thermal đổi delay sau khi heater controller cycle.
**Liên kết tiếng Hàn:** `열 인클로저 드리프트`.

## 8. link repeater spacing /lɪŋk rɪˈpiːtər ˈspeɪsɪŋ/
**Part of speech:** noun
**Core meaning (English):** distance between active repeaters or amplifiers in a transfer link.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách giữa repeater hoặc amplifier active trong transfer link.
**Grammar & collocations:** `link-repeater-spacing optimization` — optimization; `balance loss and added noise` — cân loss với noise thêm.
**Examples:** `Link repeater spacing was shortened to preserve phase margin over the mountain route.` → Spacing repeater-link rút ngắn để giữ phase margin trên route núi.
**Liên kết tiếng Hàn:** `링크 중계기 간격`.

## 9. regenerator latency /riːˈdʒenəreɪtər ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** delay introduced when a relay recovers and retransmits a timing or data signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay do relay recover và retransmit timing hoặc data signal.
**Grammar & collocations:** `regenerator-latency budget` — budget; `account for relay delay` — tính relay delay.
**Examples:** `Regenerator latency became visible in the round-trip phase measurement.` → Latency regenerator lộ trong round-trip phase measurement.
**Liên kết tiếng Hàn:** `재생기 지연`.

## 10. network asymmetry /ˈnetwɜːrk eɪˈsɪmətri/
**Part of speech:** noun
**Core meaning (English):** unequal timing behavior in forward and reverse network paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timing behavior không đều giữa network path xuôi và ngược.
**Grammar & collocations:** `network-asymmetry estimate` — estimate; `calibrate directional delays` — calibrate delay theo hướng.
**Examples:** `Network asymmetry biased the packet-based time comparison.` → Asymmetry network bias packet-based time comparison.
**Liên kết tiếng Hàn:** `네트워크 비대칭`.

## 11. packet-delay variation /ˈpækɪt dɪˈleɪ ˌveriˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** change in packet arrival delay caused by queueing, routing, or transport conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** arrival delay packet đổi do queueing, routing hoặc transport condition.
**Grammar & collocations:** `packet-delay-variation percentile` — percentile; `filter network jitter` — lọc network jitter.
**Examples:** `Packet-delay variation widened the uncertainty of the software timestamp.` → Variation delay-packet làm rộng uncertainty software timestamp.
**Liên kết tiếng Hàn:** `패킷 지연 변동`.

## 12. timestamp jitter /ˈtaɪmstæmp ˈdʒɪtər/
**Part of speech:** noun
**Core meaning (English):** short-term variation in the recorded time attached to an event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variation ngắn hạn của time ghi cùng event.
**Grammar & collocations:** `timestamp-jitter histogram` — histogram; `bound event-time uncertainty` — giới hạn uncertainty event-time.
**Examples:** `Timestamp jitter came from scheduler preemption rather than the oscillator.` → Jitter timestamp đến từ scheduler preemption chứ không phải oscillator.
**Liên kết tiếng Hàn:** `타임스탬프 지터`.

## 13. software timestamping /ˈsɔːftwer ˈtaɪmstæmpɪŋ/
**Part of speech:** noun
**Core meaning (English):** recording event time in software after the event has passed through hardware and scheduling layers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi event time trong software sau hardware và scheduling layer.
**Grammar & collocations:** `software-timestamping error` — error; `correct scheduler latency` — sửa scheduler latency.
**Examples:** `Software timestamping added variable delay under heavy CPU load.` → Timestamping software thêm delay biến đổi dưới CPU load nặng.
**Liên kết tiếng Hàn:** `소프트웨어 타임스탬핑`.

## 14. clock servo offset /klɑːk ˈsɜːrvoʊ ˈɔːfset/
**Part of speech:** noun
**Core meaning (English):** steady difference between a clock's controlled value and its reference target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** difference steady giữa controlled value clock và reference target.
**Grammar & collocations:** `clock-servo-offset correction` — correction; `remove a residual bias` — loại bias residual.
**Examples:** `Clock servo offset persisted after the link calibration was updated.` → Offset servo-clock còn sau update link calibration.
**Liên kết tiếng Hàn:** `시계 서보 오프셋`.

## 15. frequency ramp limit /ˈfriːkwənsi ræmp ˈlɪmət/
**Part of speech:** noun
**Core meaning (English):** maximum allowed rate at which a controlled oscillator frequency may change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rate tối đa cho phép frequency oscillator controlled đổi.
**Grammar & collocations:** `frequency-ramp-limit check` — check; `bound a steering transition` — giới hạn steering transition.
**Examples:** `The frequency ramp limit prevented a correction from exciting the mechanical resonance.` → Limit ramp-frequency ngăn correction kích thích mechanical resonance.
**Liên kết tiếng Hàn:** `주파수 램프 한계`.

## 16. slew-rate constraint /sluː reɪt kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** restriction on how quickly a control signal or actuator command may change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** restriction tốc độ control signal hoặc actuator command đổi.
**Grammar & collocations:** `slew-rate-constraint violation` — violation; `limit an actuator step` — giới hạn actuator step.
**Examples:** `The slew-rate constraint stretched recovery after the reference jump.` → Constraint rate-slew kéo dài recovery sau reference jump.
**Liên kết tiếng Hàn:** `슬루율 제약`.

## 17. holdover covariance /ˈhoʊldoʊvər koʊˈveriəns/
**Part of speech:** noun
**Core meaning (English):** covariance among predicted clock errors during a period without an external reference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** covariance giữa predicted clock error trong period không có reference ngoài.
**Grammar & collocations:** `holdover-covariance forecast` — forecast; `propagate ensemble uncertainty` — propagate ensemble uncertainty.
**Examples:** `Holdover covariance grew rapidly when two clocks shared the same environmental sensor.` → Covariance holdover tăng nhanh khi hai clock share sensor môi trường.
**Liên kết tiếng Hàn:** `홀드오버 공분산`.

## 18. ensemble prediction error /ɪnˈsɑːmbəl prɪˈdɪkʃən ˈerər/
**Part of speech:** noun
**Core meaning (English):** difference between a maintained ensemble's predicted timescale and its later observed behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** difference giữa timescale ensemble predicted và behavior observe sau.
**Grammar & collocations:** `ensemble-prediction-error bound` — bound; `validate a holdover model` — validate model holdover.
**Examples:** `Ensemble prediction error stayed within the outage interpolation allowance.` → Error prediction-ensemble nằm trong allowance interpolation outage.
**Liên kết tiếng Hàn:** `앙상블 예측 오류`.

## 19. timescale realization /ˈtaɪm skeɪl ˌriːəlaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** practical construction of a timescale from clocks, comparisons, weighting, and steering.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xây dựng timescale thực tế từ clock, comparison, weighting và steering.
**Grammar & collocations:** `timescale-realization algorithm` — algorithm; `weight a clock ensemble` — gán trọng số ensemble clock.
**Examples:** `Timescale realization changed when the unstable clock was removed from the ensemble.` → Realization timescale đổi khi loại clock unstable khỏi ensemble.
**Liên kết tiếng Hàn:** `시간척도 실현`.

## 20. dissemination closure /dɪˌseməˈneɪʃən ˈkloʊʒər/
**Part of speech:** noun
**Core meaning (English):** consistency achieved when independent dissemination paths return the same reference value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** consistency khi path dissemination độc lập quay về cùng reference value.
**Grammar & collocations:** `dissemination-closure residual` — residual; `check a redundant transfer route` — check route transfer redundant.
**Examples:** `Dissemination closure confirmed that the two repeater routes shared no hidden offset.` → Closure dissemination xác nhận hai repeater route không share offset ẩn.
**Liên kết tiếng Hàn:** `분배 폐쇄`.

## Review in context

A **frequency dissemination node** carries **phase-noise transfer** through **fiber amplifier bidirectionality**, **round-trip phase**, **active noise cancellation**, **acoustic isolation**, and **thermal enclosure drift**. **Link repeater spacing**, **regenerator latency**, **network asymmetry**, **packet-delay variation**, **timestamp jitter**, and **software timestamping** shape **clock servo offset**, **frequency ramp limit**, and **slew-rate constraint**. **Holdover covariance**, **ensemble prediction error**, **timescale realization**, and **dissemination closure** complete the network audit.

**Bản dịch tiếng Việt:** **Frequency dissemination node** truyền **phase-noise transfer** qua **fiber amplifier bidirectionality**, **round-trip phase**, **active noise cancellation**, **acoustic isolation** và **thermal enclosure drift**. **Link repeater spacing**, **regenerator latency**, **network asymmetry**, **packet-delay variation**, **timestamp jitter** và **software timestamping** định hình **clock servo offset**, **frequency ramp limit** và **slew-rate constraint**. **Holdover covariance**, **ensemble prediction error**, **timescale realization** và **dissemination closure** hoàn tất audit network.
