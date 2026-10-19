# C2 Vocabulary — SerDes link training and jitter tolerance

This lesson follows a high-speed serial lane through gearbox mapping, clock recovery, equalization, training, and multilane alignment.

Flow: **SerDes lane → serializer gearbox → clock-data recovery → jitter tolerance → deterministic jitter → random jitter → eye-mask margin → equalizer adaptation → decision-feedback tap → continuous-time linear equalizer → feed-forward equalizer → clock multiplier → reference-clock spread → multilane alignment → link training sequence → comma detection → bit-slip correction → lane polarity inversion → receiver termination → transmit de-emphasis**.

## 1. SerDes lane /ˈsɜːrdɛz leɪn/
**Part of speech:** noun
**Core meaning (English):** one high-speed serial data path within a serializer-deserializer link.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một data path serial tốc độ cao trong link serializer-deserializer.
**Grammar & collocations:** `SerDes-lane margin` — margin; `route a differential lane` — route lane vi sai.
**Examples:** `The SerDes lane failed only when the connector and cable were combined.` → Lane SerDes fail chỉ khi gộp connector và cable.
**Liên kết tiếng Hàn:** `SerDes 레인`.

## 2. serializer gearbox /ˈsɜːriəlaɪzər ˈɡiːrbɑːks/
**Part of speech:** noun
**Core meaning (English):** logic that converts a parallel word width or rate into the serial interface format.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** logic chuyển parallel word width hoặc rate sang format interface serial.
**Grammar & collocations:** `serializer-gearbox mapping` — mapping; `repack symbols across widths` — đóng gói lại symbol qua width.
**Examples:** `The serializer gearbox inserted alignment markers between payload blocks.` → Gearbox serializer chèn alignment marker giữa payload block.
**Liên kết tiếng Hàn:** `직렬화 기어박스`.

## 3. clock-data recovery /klɑːk ˈdeɪtə rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** recovering sampling timing from transitions in an incoming serial data stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khôi phục timing sampling từ transition của serial data stream nhận.
**Grammar & collocations:** `clock-data-recovery loop` — loop; `track a transition phase` — bám phase transition.
**Examples:** `Clock-data recovery lost lock when long identical symbols removed transitions.` → Recovery clock-data mất lock khi symbol giống nhau dài làm mất transition.
**Liên kết tiếng Hàn:** `클록 데이터 복구`.

## 4. jitter tolerance /ˈdʒɪtər ˈtɑːlərəns/
**Part of speech:** noun
**Core meaning (English):** the amount and type of timing variation a receiver can accept while meeting its error target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức và loại timing variation receiver chịu được trong error target.
**Grammar & collocations:** `jitter-tolerance mask` — mask; `pass a stressed clock test` — pass clock test stress.
**Examples:** `Jitter tolerance was smallest near the receiver's equalizer limit.` → Tolerance jitter nhỏ nhất gần equalizer limit receiver.
**Liên kết tiếng Hàn:** `지터 허용도`.

## 5. deterministic jitter /dɪˌtɜːrməˈnɪstɪk ˈdʒɪtər/
**Part of speech:** noun
**Core meaning (English):** bounded timing variation with a repeatable or identifiable cause.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timing variation bounded có cause lặp hoặc xác định được.
**Grammar & collocations:** `deterministic-jitter decomposition` — decomposition; `separate periodic components` — tách component tuần hoàn.
**Examples:** `Deterministic jitter traced to a switching spur near the reference clock.` → Jitter deterministic truy về switching spur gần reference clock.
**Liên kết tiếng Hàn:** `결정론적 지터`.

## 6. random jitter /ˈrændəm ˈdʒɪtər/
**Part of speech:** noun
**Core meaning (English):** unbounded statistical timing variation usually modeled by a probability distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timing variation thống kê không bounded thường model bằng probability distribution.
**Grammar & collocations:** `random-jitter sigma` — sigma; `estimate a Gaussian timing spread` — ước tính spread timing Gaussian.
**Examples:** `Random jitter widened the eye as temperature increased.` → Jitter random làm rộng eye khi temperature tăng.
**Liên kết tiếng Hàn:** `랜덤 지터`.

## 7. eye-mask margin /aɪ mæsk ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** clearance between a measured eye diagram and the forbidden mask boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng hở giữa eye diagram đo và boundary mask bị cấm.
**Grammar & collocations:** `eye-mask-margin trend` — trend; `clear a compliance mask` — clear mask compliance.
**Examples:** `Eye-mask margin fell after the package transition was reworked.` → Margin mask-eye giảm sau khi package transition rework.
**Liên kết tiếng Hàn:** `아이 마스크 여유`.

## 8. equalizer adaptation /ˈiːkwəlaɪzər ˌædæpˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting equalizer coefficients in response to the observed channel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh coefficient equalizer theo channel quan sát.
**Grammar & collocations:** `equalizer-adaptation loop` — loop; `converge on channel taps` — hội tụ tap channel.
**Examples:** `Equalizer adaptation converged slowly after the cable temperature changed.` → Adaptation equalizer hội tụ chậm sau khi cable temperature đổi.
**Liên kết tiếng Hàn:** `등화기 적응`.

## 9. decision-feedback tap /dɪˈsɪʒən ˈfiːdbæk tæp/
**Part of speech:** noun
**Core meaning (English):** a delayed weighted term that cancels post-cursor interference using previous decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** term delay weighted triệt post-cursor interference bằng decision trước.
**Grammar & collocations:** `decision-feedback-tap coefficient` — coefficient; `cancel a post-cursor` — triệt post-cursor.
**Examples:** `The decision-feedback tap removed the trailing echo from the long channel.` → Tap feedback-decision loại echo trailing của channel dài.
**Liên kết tiếng Hàn:** `결정 피드백 탭`.

## 10. continuous-time linear equalizer /kənˈtɪnjuəs taɪm ˈlɪniər ˈiːkwəlaɪzər/
**Part of speech:** noun
**Core meaning (English):** an analog equalizer that shapes frequency response continuously before sampling or decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** equalizer analog shape frequency response liên tục trước sampling hoặc decision.
**Grammar & collocations:** `continuous-time-linear-equalizer boost` — boost; `compensate high-frequency loss` — bù high-frequency loss.
**Examples:** `The continuous-time linear equalizer restored the channel's high-frequency edge.` → Equalizer tuyến tính continuous-time khôi phục high-frequency edge channel.
**Liên kết tiếng Hàn:** `연속 시간 선형 등화기`.

## 11. feed-forward equalizer /fiːd ˈfɔːrwərd ˈiːkwəlaɪzər/
**Part of speech:** noun
**Core meaning (English):** a finite set of weighted delayed samples applied before the symbol decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập sample delay weighted hữu hạn áp trước symbol decision.
**Grammar & collocations:** `feed-forward-equalizer tap` — tap; `shape pre-cursor energy` — shape pre-cursor energy.
**Examples:** `The feed-forward equalizer reduced pre-cursor interference but amplified noise.` → Equalizer feed-forward giảm interference pre-cursor nhưng khuếch đại noise.
**Liên kết tiếng Hàn:** `피드포워드 등화기`.

## 12. clock multiplier /klɑːk ˈmʌltəplaɪər/
**Part of speech:** noun
**Core meaning (English):** a circuit that generates a clock at a multiple of a reference frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit tạo clock ở multiple của reference frequency.
**Grammar & collocations:** `clock-multiplier phase noise` — phase noise; `synthesize a serial rate` — synthesize serial rate.
**Examples:** `Clock multiplier noise set the lower bound on recovered timing quality.` → Noise multiplier clock đặt lower bound quality timing recovery.
**Liên kết tiếng Hàn:** `클록 승산기`.

## 13. reference-clock spread /ˈrefrəns klɑːk spred/
**Part of speech:** noun
**Core meaning (English):** intentional modulation of a reference clock frequency to distribute emitted energy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** modulation có chủ ý của reference clock để trải energy phát xạ.
**Grammar & collocations:** `reference-clock-spread depth` — depth; `reduce a narrow EMI peak` — giảm EMI peak hẹp.
**Examples:** `Reference-clock spread lowered the peak emission without changing the average rate.` → Spread clock-reference hạ emission peak mà không đổi average rate.
**Liên kết tiếng Hàn:** `기준 클록 확산`.

## 14. multilane alignment /ˌmʌltɪleɪn əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** matching timing and symbol order across several parallel serial lanes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khớp timing và symbol order giữa nhiều serial lane song song.
**Grammar & collocations:** `multilane-alignment marker` — marker; `deskew a bonded link` — deskew link bonded.
**Examples:** `Multilane alignment absorbed different cable delays before packet reconstruction.` → Alignment multilane hấp thụ cable delay khác trước packet reconstruction.
**Liên kết tiếng Hàn:** `다중 레인 정렬`.

## 15. link training sequence /lɪŋk ˈtreɪnɪŋ ˈsiːkwəns/
**Part of speech:** noun
**Core meaning (English):** an initialization exchange used to negotiate and tune link parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** exchange initialization để negotiate và tune link parameter.
**Grammar & collocations:** `link-training-sequence timeout` — timeout; `negotiate equalizer presets` — negotiate preset equalizer.
**Examples:** `The link training sequence selected a lower rate after repeated eye failures.` → Sequence training link chọn rate thấp hơn sau eye failure lặp.
**Liên kết tiếng Hàn:** `링크 트레이닝 시퀀스`.

## 16. comma detection /ˈkɑːmə dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** finding a special alignment character that marks symbol or word boundaries in a serial stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm alignment character đặc biệt đánh dấu boundary symbol hoặc word.
**Grammar & collocations:** `comma-detection window` — window; `align a recovered word` — align word recovered.
**Examples:** `Comma detection restored word boundaries after the lane polarity was corrected.` → Detection comma khôi phục word boundary sau khi sửa polarity lane.
**Liên kết tiếng Hàn:** `콤마 검출`.

## 17. bit-slip correction /bɪt slɪp kəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** correcting a one-bit timing or alignment displacement in a serial stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa displacement một bit về timing hoặc alignment trong serial stream.
**Grammar & collocations:** `bit-slip-correction event` — event; `restore word alignment` — khôi phục word alignment.
**Examples:** `Bit-slip correction recovered the packet after one sampling cycle was missed.` → Correction slip-bit khôi phục packet sau khi miss một sampling cycle.
**Liên kết tiếng Hàn:** `비트 슬립 보정`.

## 18. lane polarity inversion /leɪn pəˈlærəti ɪnˈvɜːrʒən/
**Part of speech:** noun
**Core meaning (English):** reversal of the positive and negative conductors in a differential lane.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đảo conductor positive và negative trong differential lane.
**Grammar & collocations:** `lane-polarity-inversion flag` — flag; `swap differential signs` — đổi dấu vi sai.
**Examples:** `Lane polarity inversion was detected during training and corrected without rewiring.` → Inversion polarity lane được detect trong training và sửa không cần rewire.
**Liên kết tiếng Hàn:** `레인 극성 반전`.

## 19. receiver termination /rɪˈsiːvər ˌtɜːrməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** impedance placed at a receiver input to absorb signal energy and limit reflections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** impedance đặt ở receiver input để hấp thụ signal energy và giảm reflection.
**Grammar & collocations:** `receiver-termination calibration` — calibration; `match a differential impedance` — match impedance vi sai.
**Examples:** `Receiver termination drift increased the reflection at the package boundary.` → Drift termination receiver tăng reflection ở package boundary.
**Liên kết tiếng Hàn:** `수신기 종단`.

## 20. transmit de-emphasis /trænzˈmɪt diː ˈemfəsɪs/
**Part of speech:** noun
**Core meaning (English):** transmitter shaping that reduces selected symbols to compensate for channel frequency loss.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** shaping transmitter giảm symbol chọn để bù channel frequency loss.
**Grammar & collocations:** `transmit-de-emphasis preset` — preset; `shape a post-cursor` — shape post-cursor.
**Examples:** `Transmit de-emphasis opened the eye at the far end of the backplane.` → De-emphasis transmit mở eye ở đầu xa backplane.
**Liên kết tiếng Hàn:** `송신 디엠퍼시스`.

## Review in context

A **SerDes lane** uses a **serializer gearbox** and **clock-data recovery** to meet **jitter tolerance** for **deterministic jitter**, **random jitter**, and **eye-mask margin**. **Equalizer adaptation**, a **decision-feedback tap**, a **continuous-time linear equalizer**, and a **feed-forward equalizer** share work with a **clock multiplier** and **reference-clock spread**. **Multilane alignment**, a **link training sequence**, **comma detection**, **bit-slip correction**, **lane polarity inversion**, **receiver termination**, and **transmit de-emphasis** complete the link.

**Bản dịch tiếng Việt:** **SerDes lane** dùng **serializer gearbox** và **clock-data recovery** để đạt **jitter tolerance** trước **deterministic jitter**, **random jitter** và **eye-mask margin**. **Equalizer adaptation**, **decision-feedback tap**, **continuous-time linear equalizer** và **feed-forward equalizer** phối hợp với **clock multiplier** và **reference-clock spread**. **Multilane alignment**, **link training sequence**, **comma detection**, **bit-slip correction**, **lane polarity inversion**, **receiver termination** và **transmit de-emphasis** hoàn tất link.
