# C2 Vocabulary — Memory-controller scheduling and data integrity

This lesson follows requests through arbitration, latency control, refresh protection, remapping, and end-to-end data checks.

Flow: **refresh arbitration → row-hammer mitigation → bank-group conflict → command queue depth → request reordering → write-to-read turnaround → read-to-write turnaround → latency tail → quality-of-service class → memory-channel striping → rank interleave → address swizzle → scrub bandwidth → patrol scrub → retirement threshold → bad-block table → power-loss protection → data-path parity → controller failover → service-credit budget**.

## 1. refresh arbitration /rɪˈfreʃ ˌɑːrbəˈtreɪʃən/
**Part of speech:** noun
**Core meaning (English):** deciding when refresh operations may interrupt ordinary memory requests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định lúc refresh được phép ngắt memory request thường.
**Grammar & collocations:** `refresh-arbitration policy` — policy; `schedule a deadline refresh` — lập lịch refresh deadline.
**Examples:** `Refresh arbitration protected retention without blocking the highest-priority read indefinitely.` → Arbitration refresh bảo vệ retention mà không block read ưu tiên cao mãi.
**Liên kết tiếng Hàn:** `리프레시 중재`.

## 2. row-hammer mitigation /roʊ ˈhæmər ˌmɪtəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** techniques that prevent repeated activation of one row from disturbing neighboring rows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kỹ thuật ngăn activation lặp của một row làm disturb row lân cận.
**Grammar & collocations:** `row-hammer-mitigation counter` — counter; `refresh an adjacent victim` — refresh victim lân cận.
**Examples:** `Row-hammer mitigation raised the refresh rate only for aggressively accessed regions.` → Mitigation row-hammer chỉ tăng refresh rate ở vùng truy cập mạnh.
**Liên kết tiếng Hàn:** `로우 해머 완화`.

## 3. bank-group conflict /bæŋk ɡruːp ˈkɑːnflɪkt/
**Part of speech:** noun
**Core meaning (English):** contention caused when requests target resources sharing a memory bank group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contention khi request nhắm resource cùng bank group memory.
**Grammar & collocations:** `bank-group-conflict penalty` — penalty; `spread accesses across banks` — phân tán access qua bank.
**Examples:** `Bank-group conflict inflated latency for the streaming workload.` → Conflict group-bank làm latency workload streaming tăng.
**Liên kết tiếng Hàn:** `뱅크 그룹 충돌`.

## 4. command queue depth /kəˈmænd kjuː depθ/
**Part of speech:** noun
**Core meaning (English):** the number of memory commands that can wait inside a controller queue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số memory command có thể chờ trong queue controller.
**Grammar & collocations:** `command-queue-depth limit` — limit; `absorb a burst of requests` — hấp thụ burst request.
**Examples:** `Command queue depth hid short service gaps but increased worst-case waiting time.` → Depth queue command che gap service ngắn nhưng tăng waiting time worst-case.
**Liên kết tiếng Hàn:** `명령 큐 깊이`.

## 5. request reordering /rɪˈkwest riːˈɔːrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing request execution order to improve locality, throughput, or fairness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi thứ tự execute request để cải thiện locality, throughput hoặc fairness.
**Grammar & collocations:** `request-reordering heuristic` — heuristic; `preserve dependency order` — giữ thứ tự dependency.
**Examples:** `Request reordering improved row locality without violating the transaction fence.` → Reordering request cải thiện locality row mà không vi phạm fence transaction.
**Liên kết tiếng Hàn:** `요청 재정렬`.

## 6. write-to-read turnaround /raɪt tə riːd ˈtɜːrnəraʊnd/
**Part of speech:** noun
**Core meaning (English):** the delay required to switch a memory interface from writing data to reading data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay cần để đổi interface memory từ write data sang read data.
**Grammar & collocations:** `write-to-read-turnaround penalty` — penalty; `switch bus direction` — đổi hướng bus.
**Examples:** `Write-to-read turnaround dominated the small-packet workload.` → Turnaround write-to-read chi phối workload packet nhỏ.
**Liên kết tiếng Hàn:** `쓰기-읽기 전환 시간`.

## 7. read-to-write turnaround /riːd tə raɪt ˈtɜːrnəraʊnd/
**Part of speech:** noun
**Core meaning (English):** the interface delay when a controller changes from reading data to driving a write.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay interface khi controller đổi từ read data sang drive write.
**Grammar & collocations:** `read-to-write-turnaround timing` — timing; `avoid bus contention` — tránh contention bus.
**Examples:** `Read-to-write turnaround increased when the controller inserted a safety gap.` → Turnaround read-to-write tăng khi controller chèn safety gap.
**Liên kết tiếng Hàn:** `읽기-쓰기 전환 시간`.

## 8. latency tail /ˈleɪtənsi teɪl/
**Part of speech:** noun
**Core meaning (English):** the rare, high-latency portion of a request-time distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần hiếm có latency cao của distribution request-time.
**Grammar & collocations:** `latency-tail percentile` — percentile; `bound worst-case service` — giới hạn service worst-case.
**Examples:** `The latency tail grew when refresh and error recovery collided.` → Tail latency tăng khi refresh và error recovery va nhau.
**Liên kết tiếng Hàn:** `지연 시간 꼬리`.

## 9. quality-of-service class /ˈkwɑːləti əv ˈsɜːrvɪs klæs/
**Part of speech:** noun
**Core meaning (English):** a category that assigns a workload a defined priority, bandwidth, or latency treatment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** category gán priority, bandwidth hoặc latency treatment cho workload.
**Grammar & collocations:** `quality-of-service-class policy` — policy; `reserve bandwidth for control traffic` — dành bandwidth cho control traffic.
**Examples:** `The quality-of-service class protected control reads from bulk-copy traffic.` → Class quality-of-service bảo vệ control read khỏi traffic copy lớn.
**Liên kết tiếng Hàn:** `서비스 품질 등급`.

## 10. memory-channel striping /ˈmeməri ˈtʃænəl ˈstraɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** distributing consecutive data across channels to increase parallel memory bandwidth.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối data liên tiếp qua channel để tăng bandwidth memory song song.
**Grammar & collocations:** `memory-channel-striping scheme` — scheme; `spread sequential cache lines` — trải cache line tuần tự.
**Examples:** `Memory-channel striping doubled bandwidth for the sequential tensor scan.` → Striping channel-memory gấp đôi bandwidth cho scan tensor tuần tự.
**Liên kết tiếng Hàn:** `메모리 채널 스트라이핑`.

## 11. rank interleave /ræŋk ˈɪntərliːv/
**Part of speech:** noun
**Core meaning (English):** alternating requests among memory ranks so one rank can recover while another transfers data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xen request giữa rank để một rank recover khi rank khác transfer data.
**Grammar & collocations:** `rank-interleave factor` — factor; `hide a bank activation delay` — che activation delay bank.
**Examples:** `Rank interleave reduced idle cycles during the mixed read-write stream.` → Interleave rank giảm idle cycle trong stream read-write trộn.
**Liên kết tiếng Hàn:** `랭크 인터리브`.

## 12. address swizzle /əˈdres ˈswɪzəl/
**Part of speech:** noun
**Core meaning (English):** deliberate remapping of address bits to distribute accesses across physical banks or rows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** remap có chủ ý address bit để phân access qua bank hoặc row vật lý.
**Grammar & collocations:** `address-swizzle function` — function; `spread hot addresses` — phân tán address nóng.
**Examples:** `Address swizzle reduced bank conflicts in the tiled matrix kernel.` → Swizzle address giảm conflict bank trong kernel matrix tiled.
**Liên kết tiếng Hàn:** `주소 스위즐`.

## 13. scrub bandwidth /skrʌb ˈbændwɪdθ/
**Part of speech:** noun
**Core meaning (English):** memory bandwidth reserved for reading, correcting, and rewriting data in the background.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bandwidth memory dành cho đọc, sửa và ghi lại data background.
**Grammar & collocations:** `scrub-bandwidth budget` — budget; `clean latent errors` — làm sạch error ẩn.
**Examples:** `Scrub bandwidth was throttled during the latency-sensitive control window.` → Bandwidth scrub bị throttle trong control window nhạy latency.
**Liên kết tiếng Hàn:** `스크럽 대역폭`.

## 14. patrol scrub /pəˈtroʊl skrʌb/
**Part of speech:** noun
**Core meaning (English):** scheduled background scanning that detects and corrects memory errors before normal access exposes them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scan background theo lịch phát hiện và sửa memory error trước access thường.
**Grammar & collocations:** `patrol-scrub interval` — interval; `scan idle pages` — scan page idle.
**Examples:** `Patrol scrub corrected a single-bit error while the page was idle.` → Scrub patrol sửa single-bit error khi page idle.
**Liên kết tiếng Hàn:** `순찰 스크럽`.

## 15. retirement threshold /rɪˈtaɪərmənt ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** an error count or condition beyond which a page, row, or device is removed from service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error count hoặc condition vượt đó page, row hoặc device bị loại khỏi service.
**Grammar & collocations:** `retirement-threshold policy` — policy; `offline a weak page` — đưa page yếu offline.
**Examples:** `The retirement threshold prevented repeated corrected errors from becoming an outage.` → Threshold retirement ngăn corrected error lặp thành outage.
**Liên kết tiếng Hàn:** `퇴역 임계값`.

## 16. bad-block table /bæd blɑːk ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a persistent record of storage blocks excluded because they are unreliable or unusable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record persistent của block storage bị loại vì unreliable hoặc unusable.
**Grammar & collocations:** `bad-block-table update` — update; `remap a retired block` — remap block retired.
**Examples:** `The bad-block table grew after the endurance test crossed its final cycle.` → Table block-bad tăng sau khi endurance test vượt cycle cuối.
**Liên kết tiếng Hàn:** `불량 블록 테이블`.

## 17. power-loss protection /ˈpaʊər lɔːs prəˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** circuitry or firmware that preserves in-flight data when supply power fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit hoặc firmware bảo vệ data đang in-flight khi power supply fail.
**Grammar & collocations:** `power-loss-protection capacitor` — capacitor; `flush metadata safely` — flush metadata an toàn.
**Examples:** `Power-loss protection completed the journal commit before the rail collapsed.` → Protection loss-power hoàn tất journal commit trước khi rail sụp.
**Liên kết tiếng Hàn:** `전원 손실 보호`.

## 18. data-path parity /ˈdeɪtə pæθ ˈpærəti/
**Part of speech:** noun
**Core meaning (English):** parity carried alongside data to detect corruption between memory and its consumer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parity đi cùng data để detect corruption giữa memory và consumer.
**Grammar & collocations:** `data-path-parity fault` — fault; `detect an in-flight corruption` — phát hiện corruption in-flight.
**Examples:** `Data-path parity caught a transfer error that the memory array ECC could not see.` → Parity path-data bắt transfer error mà ECC array không thấy.
**Liên kết tiếng Hàn:** `데이터 경로 패리티`.

## 19. controller failover /kənˈtroʊlər ˈfeɪloʊvər/
**Part of speech:** noun
**Core meaning (English):** transfer of memory-control responsibility to a redundant controller after a fault.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển trách nhiệm control memory sang controller dự phòng sau fault.
**Grammar & collocations:** `controller-failover latency` — latency; `synchronize redundant state` — đồng bộ state dự phòng.
**Examples:** `Controller failover preserved access after one channel manager stopped responding.` → Failover controller giữ access sau khi một manager channel ngừng phản hồi.
**Liên kết tiếng Hàn:** `컨트롤러 페일오버`.

## 20. service-credit budget /ˈsɜːrvɪs ˈkredɪt ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the allowed amount of performance or availability degradation before a service commitment is violated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức degradation performance hoặc availability cho phép trước khi vi phạm cam kết service.
**Grammar & collocations:** `service-credit-budget threshold` — threshold; `trade recovery work against latency` — cân recovery với latency.
**Examples:** `The controller spent its service-credit budget during the long scrub operation.` → Controller tiêu budget credit-service trong scrub operation dài.
**Liên kết tiếng Hàn:** `서비스 크레딧 예산`.

## Review in context

**Refresh arbitration** and **row-hammer mitigation** manage a **bank-group conflict**, **command queue depth**, and **request reordering**, including **write-to-read turnaround** and **read-to-write turnaround**. The **latency tail** is controlled by a **quality-of-service class**, **memory-channel striping**, **rank interleave**, and **address swizzle**. **Scrub bandwidth** and **patrol scrub** protect data until a **retirement threshold** updates the **bad-block table**; **power-loss protection**, **data-path parity**, **controller failover**, and a **service-credit budget** complete the integrity plan.

**Bản dịch tiếng Việt:** **Refresh arbitration** và **row-hammer mitigation** quản lý **bank-group conflict**, **command queue depth**, **request reordering**, gồm **write-to-read turnaround** và **read-to-write turnaround**. **Latency tail** được kiểm soát bằng **quality-of-service class**, **memory-channel striping**, **rank interleave** và **address swizzle**. **Scrub bandwidth** và **patrol scrub** bảo vệ data đến khi **retirement threshold** cập nhật **bad-block table**; **power-loss protection**, **data-path parity**, **controller failover** và **service-credit budget** hoàn tất kế hoạch integrity.
