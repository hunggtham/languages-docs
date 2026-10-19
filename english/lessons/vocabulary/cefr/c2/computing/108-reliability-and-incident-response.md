# C2 Vocabulary — Reliability and incident response

This lesson follows an operational failure from service objectives and capacity through detection, containment, restoration, and learning.

Flow: **burn rate → toil budget → reliability target → blast radius → brownout mode → chaos experiment → recovery time objective → availability objective → failure containment → incident commander → runbook step → mitigation window → service restoration → post-incident review → alert fatigue → paging policy → maintenance window → capacity headroom → health signal → rollback criterion**.

## 1. burn rate /bɜːrn reɪt/
**Part of speech:** noun
**Core meaning (English):** the rate at which a service consumes its tolerated reliability error budget.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ service tiêu hao error budget reliability được phép.
**Grammar & collocations:** `burn-rate alert` — cảnh báo; `consume a monthly budget` — tiêu hao.
**Examples:** `The burn rate rose sharply after the payment dependency began timing out.` → Burn rate tăng khi dependency payment timeout.
**Liên kết tiếng Hàn:** `소진율`.

## 2. toil budget /tɔɪl ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a planned limit on repetitive manual work that an operations team can sustain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn công việc thủ công lặp lại mà team vận hành có thể chịu.
**Grammar & collocations:** `toil-budget review` — review; `automate a repetitive task` — tự động hóa.
**Examples:** `The toil budget was exceeded because engineers reconciled failed jobs by hand each morning.` → Budget vượt vì engineer sửa job thủ công.
**Liên kết tiếng Hàn:** `수작업 예산`.

## 3. reliability target /rɪˌlaɪəˈbɪləti ˈtɑːrɡɪt/
**Part of speech:** noun
**Core meaning (English):** a quantified expectation for how consistently a service should work over a stated period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kỳ vọng định lượng về mức service hoạt động ổn định trong kỳ.
**Grammar & collocations:** `reliability-target breach` — vi phạm; `set a ninety-nine-point-nine target` — đặt.
**Examples:** `The reliability target required the search API to succeed for nearly every request.` → Target yêu cầu API search thành công gần như mọi request.
**Liên kết tiếng Hàn:** `신뢰성 목표`.

## 4. blast radius /blɑːst ˈreɪdiəs/
**Part of speech:** noun
**Core meaning (English):** the scope of systems, users, or data affected by a failure or change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phạm vi hệ thống, user hoặc data bị ảnh hưởng bởi lỗi/thay đổi.
**Grammar & collocations:** `blast-radius estimate` — ước tính; `limit a regional impact` — giới hạn.
**Examples:** `The feature flag limited the blast radius to one test cohort.` → Flag giới hạn ảnh hưởng trong một cohort.
**Liên kết tiếng Hàn:** `영향 범위`.

## 5. brownout mode /ˈbraʊnaʊt moʊd/
**Part of speech:** noun
**Core meaning (English):** a deliberate degraded mode that disables nonessential features to preserve core service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chế độ giảm tính năng không thiết yếu để giữ core service.
**Grammar & collocations:** `brownout-mode switch` — công tắc; `disable an optional recommendation` — tắt.
**Examples:** `Brownout mode removed image previews while checkout remained available.` → Brownout bỏ preview nhưng giữ checkout.
**Liên kết tiếng Hàn:** `브라운아웃 모드`.

## 6. chaos experiment /ˈkeɪɒs ɪkˈsperɪmənt/
**Part of speech:** noun
**Core meaning (English):** a controlled failure exercise used to test whether a system withstands a realistic disruption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bài thử gây lỗi có kiểm soát để kiểm tra khả năng chịu gián đoạn.
**Grammar & collocations:** `chaos-experiment hypothesis` — giả thuyết; `inject a bounded failure` — chèn.
**Examples:** `The chaos experiment isolated one zone to verify that traffic failed over safely.` → Experiment cô lập một zone để thử failover.
**Liên kết tiếng Hàn:** `카오스 실험`.

## 7. recovery time objective /rɪˈkʌvəri taɪm əbˈdʒektɪv/
**Part of speech:** noun
**Core meaning (English):** the maximum acceptable time between a service disruption and restored operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian tối đa chấp nhận từ lúc gián đoạn đến khi phục hồi.
**Grammar & collocations:** `recovery-time objective` — mục tiêu; `restore a critical workflow` — phục hồi.
**Examples:** `The recovery time objective gave the team thirty minutes to restore order processing.` → RTO cho team 30 phút phục hồi order.
**Liên kết tiếng Hàn:** `복구 시간 목표`.

## 8. availability objective /əˌveɪləˈbɪləti əbˈdʒektɪv/
**Part of speech:** noun
**Core meaning (English):** a target for the proportion of time a service remains usable during a measurement period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mục tiêu tỷ lệ thời gian service usable trong kỳ đo.
**Grammar & collocations:** `availability-objective calculation` — tính toán; `measure monthly uptime` — đo.
**Examples:** `The availability objective excluded planned maintenance but counted failed health checks.` → Objective loại maintenance nhưng tính health check lỗi.
**Liên kết tiếng Hàn:** `가용성 목표`.

## 9. failure containment /ˈfeɪljər kənˈteɪnmənt/
**Part of speech:** noun
**Core meaning (English):** isolating a fault so it cannot spread to otherwise healthy components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cô lập fault để không lan sang component khỏe.
**Grammar & collocations:** `failure-containment boundary` — ranh giới; `isolate a noisy tenant` — cô lập.
**Examples:** `Failure containment stopped one corrupted queue from exhausting every worker.` → Containment ngăn queue lỗi làm cạn worker.
**Liên kết tiếng Hàn:** `장애 격리`.

## 10. incident commander /ˈɪnsɪdənt kəˈmɑːndər/
**Part of speech:** noun
**Core meaning (English):** the person coordinating decisions, communication, and priorities during a live incident.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người điều phối quyết định, liên lạc và ưu tiên trong incident.
**Grammar & collocations:** `incident-commander role` — vai trò; `declare an operational incident` — tuyên bố.
**Examples:** `The incident commander assigned one engineer to mitigation and another to customer updates.` → Commander phân công mitigation và cập nhật khách hàng.
**Liên kết tiếng Hàn:** `사고 지휘관`.

## 11. runbook step /ˈrʌnbʊk step/
**Part of speech:** noun
**Core meaning (English):** one explicit, ordered action in a documented operational procedure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một hành động rõ ràng theo thứ tự trong quy trình vận hành.
**Grammar & collocations:** `runbook-step owner` — owner; `execute a rollback command` — thực thi.
**Examples:** `The runbook step told the operator to drain traffic before restarting the shard.` → Step yêu cầu rút traffic trước restart shard.
**Liên kết tiếng Hàn:** `런북 단계`.

## 12. mitigation window /ˌmɪtɪˈɡeɪʃən ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the bounded period in which responders apply measures that reduce impact before full repair.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian giới hạn để giảm ảnh hưởng trước khi sửa hoàn toàn.
**Grammar & collocations:** `mitigation-window deadline` — hạn; `reduce customer impact` — giảm.
**Examples:** `During the mitigation window, the team routed new uploads to a healthy region.` → Team chuyển upload mới sang vùng khỏe.
**Liên kết tiếng Hàn:** `완화 기간`.

## 13. service restoration /ˈsɜːrvɪs ˌrestəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the work of returning a disrupted service to an accepted operating state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công việc đưa service gián đoạn về trạng thái hoạt động chấp nhận được.
**Grammar & collocations:** `service-restoration update` — cập nhật; `confirm normal processing` — xác nhận.
**Examples:** `Service restoration finished after the repaired index passed consistency checks.` → Restoration xong khi index sửa qua check.
**Liên kết tiếng Hàn:** `서비스 복구`.

## 14. post-incident review /poʊst ˈɪnsɪdənt rɪˈvjuː/
**Part of speech:** noun
**Core meaning (English):** a structured examination after an incident of causes, decisions, impact, and prevention work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xem xét có cấu trúc sau incident về nguyên nhân, quyết định, ảnh hưởng và phòng ngừa.
**Grammar & collocations:** `post-incident-review action` — hành động; `identify a systemic weakness` — nhận diện.
**Examples:** `The post-incident review found that an undocumented dependency hid the first warning.` → Review phát hiện dependency không tài liệu hóa.
**Liên kết tiếng Hàn:** `사고 후 검토`.

## 15. alert fatigue /əˈlɜːrt fəˈtiːɡ/
**Part of speech:** noun
**Core meaning (English):** reduced attention caused by receiving too many noisy, repetitive, or low-value alerts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm chú ý vì quá nhiều alert nhiễu, lặp hoặc ít giá trị.
**Grammar & collocations:** `alert-fatigue risk` — rủi ro; `suppress a non-actionable page` — suppress.
**Examples:** `Alert fatigue caused responders to overlook the one page that predicted data loss.` → Fatigue khiến bỏ sót alert báo mất data.
**Liên kết tiếng Hàn:** `경보 피로`.

## 16. paging policy /ˈpeɪdʒɪŋ ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** rules defining which conditions wake an on-call responder and how escalation proceeds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quy định điều kiện gọi on-call và cách escalation.
**Grammar & collocations:** `paging-policy threshold` — ngưỡng; `escalate an unacknowledged page` — chuyển cấp.
**Examples:** `The paging policy called the database owner only after the error rate crossed the sustained threshold.` → Policy gọi owner khi error rate vượt ngưỡng kéo dài.
**Liên kết tiếng Hàn:** `페이징 정책`.

## 17. maintenance window /ˈmeɪntənəns ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** an announced period reserved for planned changes that may temporarily reduce service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian thông báo trước cho thay đổi có thể giảm service.
**Grammar & collocations:** `maintenance-window notice` — thông báo; `schedule a controlled upgrade` — lên lịch.
**Examples:** `The maintenance window allowed the team to rotate certificates without surprising users.` → Window cho phép đổi certificate có kiểm soát.
**Liên kết tiếng Hàn:** `유지보수 창`.

## 18. capacity headroom /kəˈpæsəti ˈhedruːm/
**Part of speech:** noun
**Core meaning (English):** unused processing, storage, or network capacity kept available for spikes and failure recovery.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** capacity CPU/storage/network để trống cho spike và recovery.
**Grammar & collocations:** `capacity-headroom estimate` — ước tính; `reserve failover capacity` — dự phòng.
**Examples:** `Capacity headroom let the surviving region absorb traffic after a zone failed.` → Headroom giúp vùng còn lại nhận traffic.
**Liên kết tiếng Hàn:** `용량 여유`.

## 19. health signal /helθ ˈsɪɡnəl/
**Part of speech:** noun
**Core meaning (English):** an observation indicating whether a component is functioning within an acceptable range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan sát cho biết component có hoạt động trong range chấp nhận được không.
**Grammar & collocations:** `health-signal quality` — chất lượng; `combine latency and error indicators` — kết hợp.
**Examples:** `The health signal combined queue age with failed-request rate instead of checking process liveness alone.` → Signal kết hợp tuổi queue và error rate.
**Liên kết tiếng Hàn:** `상태 신호`.

## 20. rollback criterion /ˈroʊlbæk kraɪˈtɪəriən/
**Part of speech:** noun
**Core meaning (English):** a predefined condition that requires a change to be reversed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện định trước buộc phải đảo ngược thay đổi.
**Grammar & collocations:** `rollback-criterion breach` — vi phạm; `reverse a risky deployment` — đảo.
**Examples:** `The rollback criterion was triggered when checkout failures stayed above the limit for five minutes.` → Criterion kích hoạt rollback khi checkout lỗi quá ngưỡng.
**Liên kết tiếng Hàn:** `롤백 기준`.

## Review in context

A **burn rate** shows how quickly a service consumes tolerance, while a **toil budget** and **reliability target** make operational cost and reliability explicit. Teams estimate **blast radius**, enter **brownout mode**, or run a **chaos experiment** to test resilience. A **recovery time objective** and **availability objective** define outcomes; **failure containment** limits spread, an **incident commander** coordinates response, and each **runbook step** fits inside a **mitigation window**. **Service restoration** returns the system, then a **post-incident review** learns from it. **Alert fatigue** shapes a **paging policy**; a **maintenance window** protects planned work, **capacity headroom** absorbs shocks, a **health signal** detects trouble, and a **rollback criterion** reverses unsafe change.

**Bản dịch tiếng Việt:** **Burn rate** cho biết tốc độ tiêu hao mức chịu lỗi, còn **toil budget** và **reliability target** làm rõ chi phí vận hành và độ tin cậy. Team ước tính **blast radius**, bật **brownout mode** hoặc chạy **chaos experiment** để thử resilience. **Recovery time objective** và **availability objective** định nghĩa kết quả; **failure containment** giới hạn lan rộng, **incident commander** điều phối, và mỗi **runbook step** nằm trong **mitigation window**. **Service restoration** đưa hệ thống trở lại, sau đó **post-incident review** rút kinh nghiệm. **Alert fatigue** định hình **paging policy**; **maintenance window** bảo vệ thay đổi có kế hoạch, **capacity headroom** hấp thụ sốc, **health signal** phát hiện vấn đề, còn **rollback criterion** đảo thay đổi nguy hiểm.
