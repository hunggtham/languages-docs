# C2 Vocabulary — Clock crossing and power-domain integrity

This lesson connects asynchronous digital boundaries to metastability, reset sequencing, power intent, and safe state retention.

Flow: **metastability window → synchronizer mean-time-between-failure → pulse stretcher → toggle synchronizer → asynchronous handshake → gray-code pointer → elastic clock bridge → frequency-ratio synchronizer → reset-domain crossing → power-domain crossing → level-shifter skew → state-save latency → wake-up sequencing → brownout detector → voltage-monitor hysteresis → supply ramp detector → reset deassertion skew → synchronizer latency → metastability upset → clock-gating glitch**.

## 1. metastability window /ˌmetəstəˈbɪləti ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** interval around a sampling edge during which an input can leave a flip-flop in an uncertain state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng quanh sampling edge nơi input làm flip-flop rơi vào state không chắc.
**Grammar & collocations:** `metastability-window width` — width; `avoid a sampling aperture` — tránh sampling aperture.
**Examples:** `The metastability window widened at the low-voltage corner.` → Window metastability rộng hơn ở voltage corner thấp.
**Liên kết tiếng Hàn:** `메타안정성 창`.

## 2. synchronizer mean-time-between-failure /ˈsɪŋkrənaɪzər miːn taɪm bɪˈtwiːn ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** estimated average interval between synchronizer failures caused by unresolved metastability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interval trung bình ước tính giữa synchronizer failure do metastability chưa resolve.
**Grammar & collocations:** `synchronizer-MTBF estimate` — estimate; `add a second synchronizer stage` — thêm stage synchronizer.
**Examples:** `Synchronizer mean-time-between-failure improved after the clock frequency was reduced.` → MTBF synchronizer cải thiện sau khi giảm clock frequency.
**Liên kết tiếng Hàn:** `동기화기 평균 고장 간격`.

## 3. pulse stretcher /pʌls ˈstretʃər/
**Part of speech:** noun
**Core meaning (English):** circuit that lengthens a short pulse so a slower or asynchronous domain can observe it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit kéo dài pulse ngắn để domain chậm hoặc asynchronous observe được.
**Grammar & collocations:** `pulse-stretcher width` — width; `hold an event long enough` — giữ event đủ lâu.
**Examples:** `The pulse stretcher prevented a narrow alarm from disappearing between clock edges.` → Stretcher pulse ngăn alarm hẹp biến mất giữa clock edge.
**Liên kết tiếng Hàn:** `펄스 스트레처`.

## 4. toggle synchronizer /ˈtɑːɡəl ˈsɪŋkrənaɪzər/
**Part of speech:** noun
**Core meaning (English):** event-transfer circuit that encodes each event as a state toggle before synchronization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit truyền event encode mỗi event thành state toggle trước synchronization.
**Grammar & collocations:** `toggle-synchronizer event` — event; `detect a state change` — detect state change.
**Examples:** `The toggle synchronizer transferred isolated interrupts across unrelated clocks.` → Synchronizer toggle truyền interrupt isolated qua clock không liên quan.
**Liên kết tiếng Hàn:** `토글 동기화기`.

## 5. asynchronous handshake /eɪˌsɪŋkrənəs ˈhændʃeɪk/
**Part of speech:** noun
**Core meaning (English):** request-and-acknowledge protocol that transfers data without a shared clock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** protocol request-acknowledge truyền data không cần shared clock.
**Grammar & collocations:** `asynchronous-handshake timeout` — timeout; `acknowledge a stable payload` — acknowledge payload stable.
**Examples:** `The asynchronous handshake held the payload until the receiving domain confirmed capture.` → Handshake asynchronous giữ payload đến khi domain nhận confirm capture.
**Liên kết tiếng Hàn:** `비동기 핸드셰이크`.

## 6. gray-code pointer /ɡreɪ koʊd ˈpɔɪntər/
**Part of speech:** noun
**Core meaning (English):** FIFO position pointer encoded so adjacent values differ by one bit during clock crossing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pointer vị trí FIFO encode để value kề chỉ khác một bit khi clock crossing.
**Grammar & collocations:** `gray-code-pointer synchronizer` — synchronizer; `compare safely across domains` — so an toàn qua domain.
**Examples:** `The gray-code pointer prevented a multi-bit transition from appearing as a false FIFO level.` → Pointer code-gray ngăn transition multi-bit thành FIFO level giả.
**Liên kết tiếng Hàn:** `그레이 코드 포인터`.

## 7. elastic clock bridge /ɪˈlæstɪk klɑːk brɪdʒ/
**Part of speech:** noun
**Core meaning (English):** buffering structure that absorbs small frequency differences between two clock domains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** structure buffer hấp thụ frequency difference nhỏ giữa hai clock domain.
**Grammar & collocations:** `elastic-clock-bridge depth` — depth; `absorb rate mismatch` — hấp thụ rate mismatch.
**Examples:** `The elastic clock bridge prevented a slow frequency offset from overflowing the link buffer.` → Bridge clock-elastic ngăn frequency offset chậm làm overflow link buffer.
**Liên kết tiếng Hàn:** `탄성 클록 브리지`.

## 8. frequency-ratio synchronizer /ˈfriːkwənsi ˈreɪʃioʊ ˈsɪŋkrənaɪzər/
**Part of speech:** noun
**Core meaning (English):** synchronizer designed for domains whose clocks have a known but noninteger frequency ratio.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** synchronizer cho domain có clock frequency ratio biết nhưng không nguyên.
**Grammar & collocations:** `frequency-ratio-synchronizer phase` — phase; `schedule rational resampling` — lập lịch resampling hữu tỉ.
**Examples:** `The frequency-ratio synchronizer maintained bounded phase error between the sample rates.` → Synchronizer ratio-frequency giữ phase error bounded giữa sample rate.
**Liên kết tiếng Hàn:** `주파수비 동기화기`.

## 9. reset-domain crossing /rɪˈset doʊˈmeɪn ˈkrɔːsɪŋ/
**Part of speech:** noun
**Core meaning (English):** transfer of reset state or reset-sensitive signals between independently controlled reset domains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền reset state hoặc signal nhạy reset giữa reset domain độc lập.
**Grammar & collocations:** `reset-domain-crossing review` — review; `sequence reset release` — điều phối reset release.
**Examples:** `Reset-domain crossing left one consumer active while its producer was still held in reset.` → Crossing domain-reset để một consumer active khi producer còn reset.
**Liên kết tiếng Hàn:** `리셋 도메인 교차`.

## 10. power-domain crossing /ˈpaʊər doʊˈmeɪn ˈkrɔːsɪŋ/
**Part of speech:** noun
**Core meaning (English):** signal transfer between blocks that may be powered at different times or voltage levels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền signal giữa block có thể power khác time hoặc voltage level.
**Grammar & collocations:** `power-domain-crossing rule` — rule; `isolate an unpowered receiver` — cô lập receiver không power.
**Examples:** `Power-domain crossing required isolation before the peripheral supply was removed.` → Crossing domain-power cần isolation trước khi tắt peripheral supply.
**Liên kết tiếng Hàn:** `전원 도메인 교차`.

## 11. level-shifter skew /ˈlevəl ˈʃɪftər skjuː/
**Part of speech:** noun
**Core meaning (English):** timing difference introduced when a signal passes through voltage-level conversion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timing difference do signal qua voltage-level conversion.
**Grammar & collocations:** `level-shifter-skew budget` — budget; `match rising and falling delays` — khớp delay rise và fall.
**Examples:** `Level-shifter skew narrowed the setup margin at the interface.` → Skew shifter-level thu hẹp setup margin ở interface.
**Liên kết tiếng Hàn:** `레벨 시프터 스큐`.

## 12. state-save latency /steɪt seɪv ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** time required to preserve a block's state before power is removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** time cần lưu state block trước khi power bị remove.
**Grammar & collocations:** `state-save-latency bound` — bound; `capture retention registers` — capture retention register.
**Examples:** `State-save latency exceeded the shutdown window during the emergency path.` → Latency save-state vượt shutdown window trong emergency path.
**Liên kết tiếng Hàn:** `상태 저장 지연`.

## 13. wake-up sequencing /weɪk ʌp ˈsiːkwənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** ordered activation of supplies, clocks, resets, and state restoration during power-up.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** activation có thứ tự của supply, clock, reset và state restore lúc power-up.
**Grammar & collocations:** `wake-up-sequencing dependency` — dependency; `release a block in order` — release block theo thứ tự.
**Examples:** `Wake-up sequencing waited for the analog rail before enabling the converter clock.` → Sequencing wake-up chờ analog rail trước enable converter clock.
**Liên kết tiếng Hàn:** `기상 시퀀싱`.

## 14. brownout detector /ˈbraʊnaʊt dɪˈtektər/
**Part of speech:** noun
**Core meaning (English):** circuit that detects supply voltage falling below a safe operating threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit detect supply voltage rơi dưới operating threshold an toàn.
**Grammar & collocations:** `brownout-detector threshold` — threshold; `assert a protective reset` — assert reset bảo vệ.
**Examples:** `The brownout detector reset the controller before state corruption spread.` → Detector brownout reset controller trước khi corruption state lan.
**Liên kết tiếng Hàn:** `브라운아웃 검출기`.

## 15. voltage-monitor hysteresis /ˈvoʊltɪdʒ ˈmɑːnɪtər ˌhɪstəˈriːsɪs/
**Part of speech:** noun
**Core meaning (English):** separation between rising and falling thresholds in a voltage monitor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách giữa rising và falling threshold của voltage monitor.
**Grammar & collocations:** `voltage-monitor-hysteresis band` — band; `prevent reset chatter` — ngăn reset chatter.
**Examples:** `Voltage-monitor hysteresis prevented repeated resets during a noisy supply ramp.` → Hysteresis monitor-voltage ngăn reset lặp trong supply ramp nhiễu.
**Liên kết tiếng Hàn:** `전압 모니터 히스테리시스`.

## 16. supply ramp detector /səˈplaɪ ræmp dɪˈtektər/
**Part of speech:** noun
**Core meaning (English):** circuit that determines whether a supply is rising within an acceptable startup profile.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit xác định supply rise trong startup profile chấp nhận được.
**Grammar & collocations:** `supply-ramp-detector timeout` — timeout; `validate a monotonic startup` — validate startup monotonic.
**Examples:** `The supply ramp detector held reset when the rail rose too slowly.` → Detector ramp-supply giữ reset khi rail rise quá chậm.
**Liên kết tiếng Hàn:** `전원 램프 검출기`.

## 17. reset deassertion skew /rɪˈset ˌdiːəˈsɜːrʃən skjuː/
**Part of speech:** noun
**Core meaning (English):** timing difference in releasing reset across related registers or domains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timing difference khi release reset giữa register hoặc domain liên quan.
**Grammar & collocations:** `reset-deassertion-skew limit` — limit; `synchronize reset release` — synchronize reset release.
**Examples:** `Reset deassertion skew caused one pipeline stage to see stale state.` → Skew deassertion-reset khiến một pipeline stage thấy state cũ.
**Liên kết tiếng Hàn:** `리셋 해제 스큐`.

## 18. synchronizer latency /ˈsɪŋkrənaɪzər ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** delay added while an asynchronous signal passes through safe synchronization stages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay thêm khi asynchronous signal qua synchronization stage an toàn.
**Grammar & collocations:** `synchronizer-latency variation` — variation; `trade safety for response time` — cân safety với response time.
**Examples:** `Synchronizer latency delayed the interrupt but prevented metastability propagation.` → Latency synchronizer trì hoãn interrupt nhưng ngăn metastability lan.
**Liên kết tiếng Hàn:** `동기화기 지연`.

## 19. metastability upset /ˌmetəstəˈbɪləti ʌpˈset/
**Part of speech:** noun
**Core meaning (English):** a functional error caused when unresolved metastability changes downstream logic behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** functional error khi metastability chưa resolve làm đổi behavior logic sau.
**Grammar & collocations:** `metastability-upset rate` — rate; `contain an uncertain sample` — contain sample không chắc.
**Examples:** `A metastability upset toggled the status bit during the asynchronous handshake.` → Upset metastability đổi status bit trong handshake asynchronous.
**Liên kết tiếng Hàn:** `메타안정성 이상`.

## 20. clock-gating glitch /klɑːk ˈɡeɪtɪŋ ɡlɪtʃ/
**Part of speech:** noun
**Core meaning (English):** an unintended short clock pulse created when gating control changes at the wrong phase.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock pulse ngắn ngoài ý muốn do gating control đổi sai phase.
**Grammar & collocations:** `clock-gating-glitch detector` — detector; `latch an enable safely` — latch enable an toàn.
**Examples:** `Clock-gating glitch advanced one counter unexpectedly during wake-up.` → Glitch gating-clock làm counter tiến bất ngờ trong wake-up.
**Liên kết tiếng Hàn:** `클록 게이팅 글리치`.

## Review in context

A **metastability window** determines **synchronizer mean-time-between-failure**, **pulse stretcher**, **toggle synchronizer**, **asynchronous handshake**, **gray-code pointer**, and **elastic clock bridge** behavior. A **frequency-ratio synchronizer**, **reset-domain crossing**, **power-domain crossing**, and **level-shifter skew** must respect **state-save latency** and **wake-up sequencing**. A **brownout detector**, **voltage-monitor hysteresis**, **supply ramp detector**, **reset deassertion skew**, **synchronizer latency**, **metastability upset**, and **clock-gating glitch** complete the integrity audit.

**Bản dịch tiếng Việt:** **Metastability window** quyết định behavior của **synchronizer mean-time-between-failure**, **pulse stretcher**, **toggle synchronizer**, **asynchronous handshake**, **gray-code pointer** và **elastic clock bridge**. **Frequency-ratio synchronizer**, **reset-domain crossing**, **power-domain crossing** và **level-shifter skew** phải tôn trọng **state-save latency** và **wake-up sequencing**. **Brownout detector**, **voltage-monitor hysteresis**, **supply ramp detector**, **reset deassertion skew**, **synchronizer latency**, **metastability upset** và **clock-gating glitch** hoàn tất audit integrity.
