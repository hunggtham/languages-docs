# C2 Vocabulary — High-speed link integrity and EMC

This lesson diagnoses high-speed interconnects through eye openings, loss budgets, crosstalk, mode conversion, and board-level material effects.

Flow: **eye diagram closure → intersymbol interference → equalization tap → pre-emphasis → de-emphasis → return-loss ripple → insertion-loss budget → near-end crosstalk → far-end crosstalk → back-drilling → differential skew → common-mode conversion → mode conversion → reference-plane transition → connector discontinuity → impedance coupon → dielectric loss tangent → surface roughness loss → package escape routing → link-margin closure**.

## 1. eye diagram closure /aɪ ˈdaɪəɡræm ˈkloʊʒər/
**Part of speech:** noun
**Core meaning (English):** loss of the open timing and voltage region in an eye diagram as channel distortion accumulates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng timing và voltage mở trong eye diagram bị khép do distortion channel tích lũy.
**Grammar & collocations:** `eye-diagram-closure margin` — margin; `quantify a shrinking eye` — định lượng eye thu hẹp.
**Examples:** `Eye diagram closure appeared only at the longest cable temperature corner.` → Closure eye diagram chỉ xuất hiện ở corner nhiệt độ của cable dài nhất.
**Liên kết tiếng Hàn:** `아이 다이어그램 폐쇄`.

## 2. intersymbol interference /ˌɪntərˈsɪmbəl ˌɪntərˈfɪrəns/
**Part of speech:** noun
**Core meaning (English):** distortion in which energy from neighboring symbols overlaps the current symbol decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distortion khi năng lượng symbol lân cận chồng lên quyết định symbol hiện tại.
**Grammar & collocations:** `intersymbol-interference penalty` — penalty; `resolve adjacent bits` — phân biệt bit kề nhau.
**Examples:** `Intersymbol interference increased after the dielectric loss rose with frequency.` → Interference intersymbol tăng sau khi dielectric loss tăng theo frequency.
**Liên kết tiếng Hàn:** `심볼 간 간섭`.

## 3. equalization tap /ˌiːkwəlaɪˈzeɪʃən tæp/
**Part of speech:** noun
**Core meaning (English):** one weighted delay element in an equalizer that shapes the received waveform.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần tử delay có trọng số trong equalizer tạo hình waveform nhận.
**Grammar & collocations:** `equalization-tap coefficient` — coefficient; `adapt a delayed branch` — điều chỉnh branch delay.
**Examples:** `The equalization tap reduced the channel's post-cursor tail.` → Tap equalization giảm đuôi post-cursor của channel.
**Liên kết tiếng Hàn:** `등화 탭`.

## 4. pre-emphasis /ˌpriː ˈemfəsɪs/
**Part of speech:** noun
**Core meaning (English):** boosting selected transmitter transitions before channel loss attenuates them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tăng một số transition ở transmitter trước khi channel loss làm chúng suy giảm.
**Grammar & collocations:** `pre-emphasis setting` — setting; `boost high-frequency transitions` — tăng transition tần số cao.
**Examples:** `Pre-emphasis restored the first bit after a long run of identical symbols.` → Emphasis trước khôi phục bit đầu sau chuỗi symbol giống nhau dài.
**Liên kết tiếng Hàn:** `프리엠퍼시스`.

## 5. de-emphasis /ˌdiː ˈemfəsɪs/
**Part of speech:** noun
**Core meaning (English):** reducing selected transmitted components to compensate for a known channel or receiver response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm component truyền chọn trước để bù response channel hoặc receiver đã biết.
**Grammar & collocations:** `de-emphasis coefficient` — coefficient; `flatten a channel response` — làm phẳng response channel.
**Examples:** `De-emphasis prevented the short transition from saturating the receiver front end.` → Emphasis giảm ngăn transition ngắn làm bão hòa front end receiver.
**Liên kết tiếng Hàn:** `디엠퍼시스`.

## 6. return-loss ripple /rɪˈtɜːrn lɔːs ˈrɪpəl/
**Part of speech:** noun
**Core meaning (English):** frequency-dependent oscillation in return loss caused by reflections between discontinuities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dao động return loss theo frequency do phản xạ giữa discontinuity.
**Grammar & collocations:** `return-loss-ripple peak` — peak; `locate a reflection cavity` — định vị cavity phản xạ.
**Examples:** `Return-loss ripple pointed to a connector transition rather than uniform cable loss.` → Ripple return-loss chỉ connector transition chứ không phải cable loss đều.
**Liên kết tiếng Hàn:** `반사 손실 리플`.

## 7. insertion-loss budget /ɪnˈsɜːrʃən lɔːs ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** an allocation of allowable attenuation among all components in a signal path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bổ attenuation cho phép giữa mọi component trong signal path.
**Grammar & collocations:** `insertion-loss-budget table` — table; `reserve margin for aging` — dành margin cho aging.
**Examples:** `The insertion-loss budget left too little margin for the board connector pair.` → Budget insertion-loss để quá ít margin cho cặp connector board.
**Liên kết tiếng Hàn:** `삽입 손실 예산`.

## 8. near-end crosstalk /ˌnɪr end ˈkrɔːstɔːk/
**Part of speech:** noun
**Core meaning (English):** interference observed near the source end of an adjacent coupled transmission line.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interference quan sát gần đầu source của transmission line lân cận bị coupling.
**Grammar & collocations:** `near-end-crosstalk peak` — peak; `space parallel traces` — giãn trace song song.
**Examples:** `Near-end crosstalk exceeded the mask where the two traces ran side by side.` → Crosstalk near-end vượt mask nơi hai trace chạy cạnh nhau.
**Liên kết tiếng Hàn:** `근단 누화`.

## 9. far-end crosstalk /ˌfɑːr end ˈkrɔːstɔːk/
**Part of speech:** noun
**Core meaning (English):** coupled interference measured at the far end of an adjacent transmission line.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interference coupling đo ở đầu xa của transmission line lân cận.
**Grammar & collocations:** `far-end-crosstalk cancellation` — cancellation; `shorten a parallel run` — rút ngắn đoạn song song.
**Examples:** `Far-end crosstalk grew after the reference plane was interrupted by a slot.` → Crosstalk far-end tăng sau khi reference plane bị slot cắt.
**Liên kết tiếng Hàn:** `원단 누화`.

## 10. back-drilling /ˈbæk ˌdrɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** removing unused via barrel material to reduce a high-speed stub and its reflection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loại phần barrel via không dùng để giảm stub high-speed và reflection.
**Grammar & collocations:** `back-drilling depth` — depth; `remove a via stub` — loại via stub.
**Examples:** `Back-drilling reduced the reflection notch at the serializer output.` → Drilling ngược giảm notch reflection ở output serializer.
**Liên kết tiếng Hàn:** `백드릴링`.

## 11. differential skew /ˌdɪfəˈrenʃəl skjuː/
**Part of speech:** noun
**Core meaning (English):** timing mismatch between the two conductors of a differential pair.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mismatch timing giữa hai conductor của differential pair.
**Grammar & collocations:** `differential-skew limit` — limit; `match pair lengths` — khớp độ dài pair.
**Examples:** `Differential skew converted part of the intended differential signal into common mode.` → Skew vi sai chuyển một phần signal vi sai thành common mode.
**Liên kết tiếng Hàn:** `차동 스큐`.

## 12. common-mode conversion /ˈkɑːmən moʊd kənˈvɜːrʒən/
**Part of speech:** noun
**Core meaning (English):** unwanted transformation of differential energy into common-mode energy at an asymmetry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến đổi không mong muốn từ năng lượng differential sang common-mode tại bất đối xứng.
**Grammar & collocations:** `common-mode-conversion coefficient` — coefficient; `balance a differential path` — cân bằng path vi sai.
**Examples:** `Common-mode conversion increased when one connector pin had a longer return path.` → Conversion common-mode tăng khi một pin connector có return path dài hơn.
**Liên kết tiếng Hàn:** `공통 모드 변환`.

## 13. mode conversion /moʊd kənˈvɜːrʒən/
**Part of speech:** noun
**Core meaning (English):** transfer of signal energy between propagation modes because geometry or materials are not symmetric.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** năng lượng signal chuyển giữa propagation mode do geometry hoặc material không đối xứng.
**Grammar & collocations:** `mode-conversion loss` — loss; `suppress an asymmetric transition` — giảm transition bất đối xứng.
**Examples:** `Mode conversion made the cable radiate when the shield termination was uneven.` → Conversion mode làm cable bức xạ khi termination shield không đều.
**Liên kết tiếng Hàn:** `모드 변환`.

## 14. reference-plane transition /ˈrefrəns pleɪn trænˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** a signal transition between sections whose reference conductor or plane changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** signal transition giữa các section đổi conductor hoặc plane reference.
**Grammar & collocations:** `reference-plane-transition via` — via; `stitch adjacent grounds` — nối ground lân cận.
**Examples:** `The reference-plane transition lacked nearby stitching vias and increased radiation.` → Transition plane reference thiếu stitching via gần và tăng radiation.
**Liên kết tiếng Hàn:** `기준면 전이`.

## 15. connector discontinuity /kəˈnektər ˌdɪskɑːntəˈnuːəti/
**Part of speech:** noun
**Core meaning (English):** a localized impedance or geometry change inside a connector that disturbs signal transmission.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi impedance hoặc geometry cục bộ trong connector làm nhiễu transmission.
**Grammar & collocations:** `connector-discontinuity model` — model; `tune a launch geometry` — chỉnh geometry launch.
**Examples:** `The connector discontinuity created a reflection that repeated at every cable swap.` → Discontinuity connector tạo reflection lặp ở mọi lần đổi cable.
**Liên kết tiếng Hàn:** `커넥터 불연속`.

## 16. impedance coupon /ɪmˈpiːdəns ˈkuːpɑːn/
**Part of speech:** noun
**Core meaning (English):** a fabricated test structure used to verify controlled impedance on a board or package process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc test được chế tạo để xác minh impedance kiểm soát trong process board hoặc package.
**Grammar & collocations:** `impedance-coupon measurement` — measurement; `correlate stackup to trace width` — đối chiếu stackup với trace width.
**Examples:** `The impedance coupon failed even though the production link passed a short pattern test.` → Coupon impedance fail dù link production qua pattern test ngắn.
**Liên kết tiếng Hàn:** `임피던스 쿠폰`.

## 17. dielectric loss tangent /daɪɪˈlektrɪk lɔːs ˈtændʒənt/
**Part of speech:** noun
**Core meaning (English):** a material parameter describing energy lost as heat in a dielectric under an alternating field.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter material mô tả năng lượng mất thành nhiệt trong dielectric dưới field xoay chiều.
**Grammar & collocations:** `dielectric-loss-tangent extraction` — extraction; `select a low-loss laminate` — chọn laminate loss thấp.
**Examples:** `Dielectric loss tangent limited the channel length at the highest data rate.` → Tangent loss dielectric giới hạn channel length ở data rate cao nhất.
**Liên kết tiếng Hàn:** `유전 손실 탄젠트`.

## 18. surface roughness loss /ˈsɜːrfɪs ˈrʌfnəs lɔːs/
**Part of speech:** noun
**Core meaning (English):** conductor loss caused by current interacting with microscopic roughness on a metal surface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss conductor do current tương tác với roughness vi mô trên bề mặt kim loại.
**Grammar & collocations:** `surface-roughness-loss model` — model; `specify smooth copper` — chỉ định copper mịn.
**Examples:** `Surface roughness loss became visible after the trace entered the skin-effect regime.` → Loss roughness surface lộ rõ khi trace vào regime skin-effect.
**Liên kết tiếng Hàn:** `표면 거칠기 손실`.

## 19. package escape routing /ˈpækɪdʒ ɪˈskeɪp ˈraʊtɪŋ/
**Part of speech:** noun
**Core meaning (English):** routing that carries dense package connections out to a board or substrate while preserving signal quality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** routing đưa connection package dày đặc ra board hoặc substrate mà giữ signal quality.
**Grammar & collocations:** `package-escape-routing constraint` — constraint; `fan out a fine-pitch array` — fan-out array pitch nhỏ.
**Examples:** `Package escape routing forced a longer differential pair around the thermal pad.` → Routing escape package buộc differential pair dài hơn vòng quanh thermal pad.
**Liên kết tiếng Hàn:** `패키지 이스케이프 라우팅`.

## 20. link-margin closure /lɪŋk ˈmɑːrdʒɪn ˈkloʊʒər/
**Part of speech:** noun
**Core meaning (English):** progressive loss of timing or voltage margin until a communication link approaches its failure boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timing hoặc voltage margin mất dần đến khi link gần boundary failure.
**Grammar & collocations:** `link-margin-closure forecast` — forecast; `reserve receiver tolerance` — giữ tolerance receiver.
**Examples:** `Link-margin closure appeared only after aging, contamination, and the worst temperature corner combined.` → Closure margin link chỉ xuất hiện khi aging, contamination và corner nhiệt xấu nhất kết hợp.
**Liên kết tiếng Hàn:** `링크 마진 폐쇄`.

## Review in context

**Eye diagram closure** and **intersymbol interference** motivate an **equalization tap**, **pre-emphasis**, and **de-emphasis**. A **return-loss ripple** consumes the **insertion-loss budget**, while **near-end crosstalk**, **far-end crosstalk**, and **back-drilling** expose interconnect coupling. **Differential skew**, **common-mode conversion**, and **mode conversion** worsen a **reference-plane transition** or **connector discontinuity**. An **impedance coupon**, **dielectric loss tangent**, **surface roughness loss**, and **package escape routing** determine the final **link-margin closure**.

**Bản dịch tiếng Việt:** **Eye diagram closure** và **intersymbol interference** thúc đẩy dùng **equalization tap**, **pre-emphasis** và **de-emphasis**. **Return-loss ripple** tiêu hao **insertion-loss budget**, còn **near-end crosstalk**, **far-end crosstalk** và **back-drilling** làm lộ coupling interconnect. **Differential skew**, **common-mode conversion** và **mode conversion** làm xấu **reference-plane transition** hoặc **connector discontinuity**. **Impedance coupon**, **dielectric loss tangent**, **surface roughness loss** và **package escape routing** quyết định **link-margin closure** cuối cùng.
