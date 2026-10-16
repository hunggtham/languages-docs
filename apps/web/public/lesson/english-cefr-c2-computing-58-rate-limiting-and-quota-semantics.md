# C2 Vocabulary — Rate limiting and quota semantics

This lesson follows a request from admission through burst handling, tenant fairness, distributed accounting, and recovery hints.

Flow: **quota semantics → rate-limit bucket → token bucket debt → leaky bucket shaper → burst allowance → fair-share scheduler → tenant quota → global rate limit → local rate limit → distributed quota → retry-after hint → load-shed policy → request budget → quota overrun → rate-limit shadow mode → quota reconciliation → capacity reservation → throttle hysteresis → quota borrowing → token refund policy**.

## 1. quota semantics /ˈkwoʊtə səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** the rules defining how usage limits are measured, enforced, reset, and reported.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy tắc đo, chặn, reset và báo quota.
**Grammar & collocations:** `quota-semantics specification` — specification; `define a counting window` — định nghĩa.
**Examples:** `Quota semantics stated whether rejected requests consumed the caller's daily allowance.` → Semantics nêu request bị từ chối có tính quota không.
**Liên kết tiếng Hàn:** `할당량 의미론`.

## 2. rate-limit bucket /reɪt ˈlɪmət ˈbʌkɪt/
**Part of speech:** noun
**Core meaning (English):** a logical counter or reservoir used to track requests or tokens available under a rate limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bucket theo dõi token/request còn lại.
**Grammar & collocations:** `rate-limit-bucket key` — key; `consume a token` — tiêu thụ.
**Examples:** `The rate-limit bucket was keyed by tenant and endpoint rather than by source IP.` → Bucket theo tenant và endpoint.
**Liên kết tiếng Hàn:** `속도 제한 버킷`.

## 3. token bucket debt /ˈtoʊkən ˈbʌkɪt dɛt/
**Part of speech:** noun
**Core meaning (English):** accumulated deficit representing tokens consumed ahead of their replenishment schedule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số token đã dùng trước khi được nạp lại.
**Grammar & collocations:** `token-bucket-debt limit` — limit; `repay a burst deficit` — bù.
**Examples:** `Token bucket debt delayed the next burst even after the average rate returned to normal.` → Debt làm burst tiếp theo bị trễ.
**Liên kết tiếng Hàn:** `토큰 버킷 부채`.

## 4. leaky bucket shaper /ˈliːki ˈbʌkɪt ˈʃeɪpər/
**Part of speech:** noun
**Core meaning (English):** a traffic regulator that emits queued work at a steady rate regardless of short input bursts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ làm mượt burst bằng tốc độ output đều.
**Grammar & collocations:** `leaky-bucket-shaper queue` — queue; `smooth an arrival burst` — làm mượt.
**Examples:** `The leaky bucket shaper protected the downstream database from synchronized retries.` → Shaper bảo vệ database khỏi retry đồng loạt.
**Liên kết tiếng Hàn:** `리키 버킷 셰이퍼`.

## 5. burst allowance /bɝst əˈlaʊəns/
**Part of speech:** noun
**Core meaning (English):** extra short-term capacity permitted above a sustained rate limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** capacity tạm thời vượt rate bền vững.
**Grammar & collocations:** `burst-allowance window` — window; `admit a short spike` — cho phép.
**Examples:** `The burst allowance absorbed login traffic after a regional reconnect.` → Allowance hấp thụ spike login.
**Liên kết tiếng Hàn:** `버스트 허용량`.

## 6. fair-share scheduler /fɛr ʃɛr ˈskɛdʒuːlər/
**Part of speech:** noun
**Core meaning (English):** a scheduler that distributes limited service capacity according to configured shares among competing users or tenants.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scheduler chia capacity theo phần công bằng.
**Grammar & collocations:** `fair-share-scheduler weight` — weight; `allocate service turns` — cấp lượt.
**Examples:** `The fair-share scheduler prevented one noisy tenant from consuming every worker.` → Scheduler ngăn tenant ồn chiếm worker.
**Liên kết tiếng Hàn:** `공정 분배 스케줄러`.

## 7. tenant quota /ˈtɛnənt ˈkwoʊtə/
**Part of speech:** noun
**Core meaning (English):** a usage limit assigned to a particular customer, account, or isolated workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quota riêng cho tenant.
**Grammar & collocations:** `tenant-quota policy` — policy; `raise a customer's limit` — nâng.
**Examples:** `The tenant quota covered both synchronous calls and asynchronous jobs.` → Quota bao gồm call sync và job async.
**Liên kết tiếng Hàn:** `테넌트 할당량`.

## 8. global rate limit /ˈɡloʊbəl reɪt ˈlɪmət/
**Part of speech:** noun
**Core meaning (English):** a limit applied across all instances, regions, or clients sharing one service resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rate limit chung toàn service.
**Grammar & collocations:** `global-rate-limit coordinator` — coordinator; `cap aggregate traffic` — cap.
**Examples:** `The global rate limit protected the payment provider during a multi-region retry storm.` → Limit global bảo vệ payment provider.
**Liên kết tiếng Hàn:** `전역 속도 제한`.

## 9. local rate limit /ˈloʊkəl reɪt ˈlɪmət/
**Part of speech:** noun
**Core meaning (English):** a limit enforced independently by one process, proxy, node, or region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** limit cục bộ tại process/node/region.
**Grammar & collocations:** `local-rate-limit counter` — counter; `reject at the edge` — từ chối.
**Examples:** `The local rate limit absorbed a brief spike while the global coordinator was unreachable.` → Limit local hấp thụ spike khi coordinator mất.
**Liên kết tiếng Hàn:** `로컬 속도 제한`.

## 10. distributed quota /dɪˈstrɪbjətɪd ˈkwoʊtə/
**Part of speech:** noun
**Core meaning (English):** a usage limit whose consumption is coordinated across multiple enforcement points.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quota được phối hợp giữa nhiều nơi chặn.
**Grammar & collocations:** `distributed-quota ledger` — ledger; `reserve capacity atomically` — giữ.
**Examples:** `Distributed quota prevented parallel regions from each granting the full daily allowance.` → Quota phân tán ngăn mỗi region cấp đủ quota riêng.
**Liên kết tiếng Hàn:** `분산 할당량`.

## 11. retry-after hint /ˈriːtraɪ ˈæftər hɪnt/
**Part of speech:** noun
**Core meaning (English):** a response signal telling a caller when retrying may be more likely to succeed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu gợi thời điểm retry.
**Grammar & collocations:** `retry-after-hint header` — header; `back off until recovery` — lùi.
**Examples:** `The retry-after hint stopped clients from retrying every second during quota recovery.` → Hint ngăn retry liên tục.
**Liên kết tiếng Hàn:** `재시도 후 힌트`.

## 12. load-shed policy /loʊd ʃɛd ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules for deliberately rejecting or degrading work when demand threatens system stability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule bỏ bớt hoặc giảm chất lượng khi quá tải.
**Grammar & collocations:** `load-shed-policy priority` — priority; `drop optional work` — bỏ.
**Examples:** `The load-shed policy preserved health checks while rejecting expensive reports.` → Policy giữ health check, bỏ report đắt.
**Liên kết tiếng Hàn:** `부하 차단 정책`.

## 13. request budget /rɪˈkwɛst ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a bounded amount of request capacity assigned to a task, caller, or time interval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách request bị giới hạn.
**Grammar & collocations:** `request-budget accounting` — accounting; `spend a call allowance` — tiêu.
**Examples:** `The request budget was shared across retries so failure loops could not multiply load.` → Budget dùng chung giữa retry.
**Liên kết tiếng Hàn:** `요청 예산`.

## 14. quota overrun /ˈkwoʊtə ˈoʊvərˌrʌn/
**Part of speech:** noun
**Core meaning (English):** usage beyond an assigned quota caused by concurrency, delayed accounting, or an enforcement defect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng vượt quota do đồng thời hoặc ghi nhận trễ.
**Grammar & collocations:** `quota-overrun incident` — incident; `reconcile excess consumption` — đối soát.
**Examples:** `Quota overrun occurred when two regions accepted reservations before replication converged.` → Overrun xảy ra khi hai region cùng nhận reservation.
**Liên kết tiếng Hàn:** `할당량 초과`.

## 15. rate-limit shadow mode /reɪt ˈlɪmət ˈʃædoʊ moʊd/
**Part of speech:** noun
**Core meaning (English):** observing what a new rate limit would reject without actually blocking traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy limit thử chỉ quan sát, chưa block.
**Grammar & collocations:** `rate-limit-shadow-mode metric` — metric; `simulate enforcement` — mô phỏng.
**Examples:** `Rate-limit shadow mode showed that the proposed policy would block legitimate batch traffic.` → Shadow mode lộ policy chặn batch hợp lệ.
**Liên kết tiếng Hàn:** `속도 제한 섀도 모드`.

## 16. quota reconciliation /ˈkwoʊtə ˌrɛkənˌsɪliˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** comparing and correcting usage records held by separate quota enforcers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đối chiếu usage giữa các nơi thực thi quota.
**Grammar & collocations:** `quota-reconciliation job` — job; `repair an accounting divergence` — sửa.
**Examples:** `Quota reconciliation corrected a double count introduced during a failover.` → Reconciliation sửa double count.
**Liên kết tiếng Hàn:** `할당량 조정`.

## 17. capacity reservation /kəˈpæsəti ˌrɛzərˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** setting aside service capacity for a caller, tenant, or future operation before work begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ trước capacity cho operation.
**Grammar & collocations:** `capacity-reservation lease` — lease; `reserve worker slots` — giữ.
**Examples:** `Capacity reservation guaranteed space for the nightly export without starving interactive queries.` → Reservation giữ chỗ cho export đêm.
**Liên kết tiếng Hàn:** `용량 예약`.

## 18. throttle hysteresis /ˈθrɑtəl hɪstəˈriːsɪs/
**Part of speech:** noun
**Core meaning (English):** a difference between the thresholds for entering and leaving a throttled state, preventing rapid oscillation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng bật/tắt throttle khác nhau để tránh chập chờn.
**Grammar & collocations:** `throttle-hysteresis band` — band; `avoid control oscillation` — tránh.
**Examples:** `Throttle hysteresis kept the service from toggling every second near the quota boundary.` → Hysteresis ngăn bật/tắt liên tục.
**Liên kết tiếng Hàn:** `스로틀 히스테리시스`.

## 19. quota borrowing /ˈkwoʊtə ˈbɑroʊɪŋ/
**Part of speech:** noun
**Core meaning (English):** temporarily using unused capacity from another pool or interval under a repayment or fairness rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mượn quota nhàn từ pool khác.
**Grammar & collocations:** `quota-borrowing policy` — policy; `repay borrowed capacity` — trả.
**Examples:** `Quota borrowing let an interactive tenant absorb a brief spike from an idle batch pool.` → Borrowing cho tenant tương tác mượn pool batch.
**Liên kết tiếng Hàn:** `할당량 차용`.

## 20. token refund policy /ˈtoʊkən ˈriːfʌnd ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules for returning consumed rate-limit tokens when work is rejected, cancelled, or never reaches a billable stage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule hoàn token khi request không hoàn tất.
**Grammar & collocations:** `token-refund-policy exception` — exception; `refund a cancelled request` — hoàn.
**Examples:** `The token refund policy returned capacity only when the request had not reached the downstream service.` → Policy chỉ hoàn khi request chưa tới downstream.
**Liên kết tiếng Hàn:** `토큰 환불 정책`.

## Review in context

**Quota semantics** define a **rate-limit bucket**, **token bucket debt**, **leaky bucket shaper**, and **burst allowance**. A **fair-share scheduler** assigns a **tenant quota**, while a **global rate limit**, **local rate limit**, and **distributed quota** coordinate enforcement. A **retry-after hint** supports a **load-shed policy** and **request budget**. **Quota overrun**, **rate-limit shadow mode**, and **quota reconciliation** expose accounting risk. **Capacity reservation**, **throttle hysteresis**, **quota borrowing**, and a **token refund policy** complete fairness and recovery.

**Bản dịch tiếng Việt:** **Quota semantics** định nghĩa **rate-limit bucket**, **token bucket debt**, **leaky bucket shaper** và **burst allowance**. **Fair-share scheduler** cấp **tenant quota**, còn **global rate limit**, **local rate limit** và **distributed quota** phối hợp enforcement. **Retry-after hint** hỗ trợ **load-shed policy** và **request budget**. **Quota overrun**, **rate-limit shadow mode** và **quota reconciliation** lộ rủi ro accounting. **Capacity reservation**, **throttle hysteresis**, **quota borrowing** và **token refund policy** hoàn tất fairness và recovery.
