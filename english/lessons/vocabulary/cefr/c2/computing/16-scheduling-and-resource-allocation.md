# C2 Vocabulary — Scheduling and resource allocation

This lesson follows how operating systems and distributed runtimes assign work, control contention, and balance responsiveness against fairness and capacity.

Flow: **work stealing → scheduler tick → run queue → load balancing → processor affinity → preemption → context switch → starvation → priority inversion → deadline scheduling → admission control → queueing delay → jitter → gang scheduling → fair-share scheduling → capacity planning → utilization ceiling → scheduling quantum → critical path → deadline miss ratio**.

## 1. work stealing /wɝk ˈstiːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a scheduling strategy in which an idle worker takes tasks from another worker's queue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế lấy trộm việc; hình dung worker rảnh tự lấy task từ queue của worker đang bận để tránh tài nguyên bị bỏ không.
**Grammar & collocations:** `work-stealing scheduler` — bộ lập lịch lấy việc; `work-stealing deque` — deque cho work stealing; `enable work stealing` — bật cơ chế lấy việc.
**Examples:** `Work stealing kept the thread pool busy when one request partition received fewer tasks than the others.` → Work stealing giữ thread pool bận khi một partition request nhận ít task hơn các partition khác.
**Liên kết tiếng Hàn:** `작업 훔치기` (jageop humchigi) — cơ chế lấy việc.

## 2. scheduler tick /ˈskɛdʒuːlər tɪk/
**Part of speech:** noun
**Core meaning (English):** a periodic timer event at which a scheduler reevaluates runnable work or updates accounting.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhịp timer của bộ lập lịch; hình dung tiếng “tích” định kỳ khiến kernel xem lại task nào nên chạy tiếp.
**Grammar & collocations:** `timer tick` — nhịp timer; `tick frequency` — tần số tick; `on each scheduler tick` — ở mỗi nhịp lập lịch.
**Examples:** `The kernel updated CPU shares on every scheduler tick rather than after each system call.` → Kernel cập nhật phần CPU ở mỗi nhịp lập lịch thay vì sau từng system call.
**Liên kết tiếng Hàn:** `스케줄러 틱` (seukejulleo tik) — nhịp scheduler.

## 3. run queue /rʌn kjuː/
**Part of speech:** noun
**Core meaning (English):** a queue of runnable tasks waiting for a processor or execution slot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàng đợi task sẵn sàng chạy; task đã đủ điều kiện nhưng vẫn chờ CPU được phân.
**Grammar & collocations:** `per-core run queue` — run queue theo từng lõi; `run-queue length` — độ dài run queue; `drain the run queue` — xử lý hết run queue.
**Examples:** `A sudden burst of requests doubled the run queue length on the API workers.` → Một đợt request đột biến làm độ dài run queue trên các API worker tăng gấp đôi.
**Liên kết tiếng Hàn:** `실행 큐` (silhaeng kyu) — run queue.

## 4. load balancing /ˈloʊd ˌbælənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** the distribution of work across processors, servers, or queues so that no resource becomes an avoidable bottleneck.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cân bằng tải; hình dung san task giữa các worker để một máy không quá tải trong khi máy khác rảnh.
**Grammar & collocations:** `dynamic load balancing` — cân bằng tải động; `load-balancing policy` — policy cân bằng tải; `rebalance the load` — cân lại tải.
**Examples:** `Dynamic load balancing moved new jobs away from the host whose queue was growing fastest.` → Cân bằng tải động chuyển job mới khỏi host có queue tăng nhanh nhất.
**Liên kết tiếng Hàn:** `부하 분산` (buha bunsan) — cân bằng tải.

## 5. processor affinity /ˈprɑsɛsər əˈfɪnəti/
**Part of speech:** noun
**Core meaning (English):** a rule or preference that keeps a task on particular processors or cores.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ gắn CPU; hình dung task được ưu tiên ở cùng core để tận dụng cache hoặc đáp ứng ràng buộc phần cứng.
**Grammar & collocations:** `CPU affinity mask` — mặt nạ affinity CPU; `set processor affinity` — đặt affinity; `soft affinity` — affinity mềm.
**Examples:** `The database worker used processor affinity to preserve cache locality during a hot scan.` → Worker cơ sở dữ liệu dùng processor affinity để giữ locality của cache trong lúc quét nóng.
**Liên kết tiếng Hàn:** `프로세서 선호도` (peuroseseo seonhodo) — độ gắn CPU.

## 6. preemption /priˈɛmpʃən/
**Part of speech:** noun
**Core meaning (English):** the interruption of a running task so that another task can use the processor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sự giành quyền chạy; hình dung scheduler tạm dừng task hiện tại để nhường CPU cho task ưu tiên hơn.
**Grammar & collocations:** `preemptive scheduling` — lập lịch ưu tiên giành quyền; `preemption overhead` — overhead chuyển quyền; `disable preemption` — tắt preemption.
**Examples:** `Excessive preemption increased overhead and left less CPU time for useful computation.` → Preemption quá mức làm tăng overhead và để lại ít thời gian CPU hơn cho tính toán hữu ích.
**Liên kết tiếng Hàn:** `선점` (seonjeom) — sự giành quyền chạy.

## 7. context switch /ˈkɑntɛkst swɪtʃ/
**Part of speech:** noun
**Core meaning (English):** the act of saving one task's execution state and loading another task's state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển ngữ cảnh; hình dung CPU cất register của task A rồi nạp register của task B để tiếp tục chạy.
**Grammar & collocations:** `context-switch cost` — chi phí chuyển ngữ cảnh; `frequent context switches` — chuyển ngữ cảnh thường xuyên; `measure context switches` — đo số lần chuyển.
**Examples:** `Tiny time slices caused frequent context switches that outweighed the benefit of finer responsiveness.` → Time slice quá nhỏ gây nhiều context switch đến mức lấn át lợi ích phản hồi tinh hơn.
**Liên kết tiếng Hàn:** `문맥 전환` (munmaek jeonhwan) — chuyển ngữ cảnh.

## 8. starvation /stɑrˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** indefinite postponement of a task because other work repeatedly receives the resources it needs first.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đói tài nguyên; hình dung task cứ đứng chờ vì task khác liên tục được ưu tiên và chiếm CPU.
**Grammar & collocations:** `resource starvation` — đói tài nguyên; `starvation-free scheduler` — scheduler không gây starvation; `prevent starvation` — ngăn starvation.
**Examples:** `A strict priority policy caused starvation for background compaction during peak traffic.` → Policy ưu tiên cứng gây starvation cho compaction nền lúc traffic cao điểm.
**Liên kết tiếng Hàn:** `기아 상태` (gia sangtae) — starvation tài nguyên.

## 9. priority inversion /praɪˈɔrəti ɪnˈvɝʒən/
**Part of speech:** noun
**Core meaning (English):** a situation in which a high-priority task is indirectly blocked by a lower-priority task holding a needed resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đảo ngược ưu tiên; task ưu tiên cao lại phải đợi task thấp đang giữ lock, trong khi task trung gian có thể chen lên.
**Grammar & collocations:** `priority-inheritance protocol` — giao thức kế thừa ưu tiên; `priority-inversion bug` — lỗi đảo ngược ưu tiên; `avoid priority inversion` — tránh đảo ngược.
**Examples:** `Priority inversion delayed the real-time thread because a low-priority logger held the shared mutex.` → Priority inversion làm thread thời gian thực bị trễ vì logger ưu tiên thấp giữ mutex dùng chung.
**Liên kết tiếng Hàn:** `우선순위 역전` (useonsunwi yeokjeon) — đảo ngược ưu tiên.

## 10. deadline scheduling /ˈdɛdˌlaɪn ˈskɛdʒuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** scheduling that chooses work according to its required completion time or urgency relative to a deadline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lập lịch theo hạn; hình dung task có hạn gần nhất được kéo lên trước để giảm nguy cơ trễ cam kết.
**Grammar & collocations:** `earliest-deadline-first scheduling` — lập lịch hạn sớm nhất trước; `deadline-scheduling policy` — policy lập lịch theo hạn; `deadline-aware scheduler` — scheduler biết hạn.
**Examples:** `Deadline scheduling protected control packets whose delivery window was narrower than that of bulk transfers.` → Lập lịch theo hạn bảo vệ các packet điều khiển có cửa sổ giao hẹp hơn truyền dữ liệu lớn.
**Liên kết tiếng Hàn:** `마감 기한 스케줄링` (magam gihan seukejulling) — lập lịch theo hạn.

## 11. admission control /ədˈmɪʃən kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a gatekeeping mechanism that accepts new work only when the system has enough capacity to meet its guarantees.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm soát tiếp nhận; hệ thống từ chối hoặc trì hoãn job mới trước khi quá tải làm hỏng mọi deadline.
**Grammar & collocations:** `request admission control` — kiểm soát nhận request; `admission-control threshold` — ngưỡng tiếp nhận; `admit a workload` — nhận workload.
**Examples:** `Admission control rejected low-priority jobs when the reserved capacity for interactive traffic was exhausted.` → Admission control từ chối job ưu tiên thấp khi capacity dành riêng cho traffic tương tác đã hết.
**Liên kết tiếng Hàn:** `수락 제어` (surak jeeo) — kiểm soát tiếp nhận.

## 12. queueing delay /ˈkjuːɪŋ dɪˈleɪ/
**Part of speech:** noun
**Core meaning (English):** the time a request or task spends waiting in a queue before service begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ xếp hàng; request chưa được xử lý mà chỉ đứng chờ slot, nên latency tăng dù thời gian service không đổi.
**Grammar & collocations:** `queueing-delay estimate` — ước tính độ trễ xếp hàng; `bound queueing delay` — chặn độ trễ; `queueing-delay distribution` — phân phối độ trễ.
**Examples:** `The dashboard separated queueing delay from execution time to reveal a saturated worker pool.` → Dashboard tách queueing delay khỏi thời gian chạy để lộ worker pool đang bão hòa.
**Liên kết tiếng Hàn:** `대기열 지연` (daegiyeol jiyeon) — độ trễ xếp hàng.

## 13. jitter /ˈdʒɪtər/
**Part of speech:** noun
**Core meaning (English):** unwanted variation in the timing or interval of events that should occur regularly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dao động thời gian; packet hoặc task không đến đúng nhịp mà lúc sớm lúc muộn.
**Grammar & collocations:** `timing jitter` — jitter thời gian; `bound jitter` — giới hạn jitter; `jitter budget` — ngân sách jitter.
**Examples:** `Clock interference introduced jitter that made the audio stream sound unstable.` → Nhiễu đồng hồ tạo jitter khiến luồng âm thanh nghe không ổn định.
**Liên kết tiếng Hàn:** `지터` (jiteo) — dao động thời gian.

## 14. gang scheduling /ɡæŋ ˈskɛdʒuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** scheduling that runs all cooperating threads or processes of a parallel job at the same time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lập lịch theo nhóm đồng thời; các thread của một job song song được đưa lên CPU cùng lúc để không chờ nhau vô ích.
**Grammar & collocations:** `gang-scheduling window` — cửa sổ gang scheduling; `co-schedule a gang` — lập lịch đồng thời một nhóm; `parallel gang` — nhóm song song.
**Examples:** `Gang scheduling reduced synchronization stalls for the tightly coupled simulation.` → Gang scheduling giảm thời gian chờ đồng bộ cho mô phỏng liên kết chặt.
**Liên kết tiếng Hàn:** `갱 스케줄링` (gaeng seukejulling) — lập lịch theo nhóm.

## 15. fair-share scheduling /fɛr ʃɛr ˈskɛdʒuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** scheduling that allocates processing capacity among users, groups, or services according to defined shares rather than raw task count.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lập lịch chia sẻ công bằng; mỗi nhóm nhận phần CPU cam kết dù nhóm đông task hơn không được độc chiếm.
**Grammar & collocations:** `fair-share scheduler` — scheduler chia sẻ công bằng; `weighted fair share` — phần công bằng có trọng số; `fair-share quota` — hạn mức chia sẻ.
**Examples:** `Fair-share scheduling kept one research team from consuming the entire shared cluster.` → Fair-share scheduling ngăn một nhóm nghiên cứu chiếm toàn bộ cluster dùng chung.
**Liên kết tiếng Hàn:** `공정 할당 스케줄링` (gongjeong haldang seukejulling) — lập lịch chia sẻ công bằng.

## 16. capacity planning /kəˈpæsəti ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** the process of forecasting resource demand and securing enough compute, memory, storage, or network capacity for expected workloads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hoạch định capacity; dự báo tải tương lai và chuẩn bị đủ tài nguyên trước khi hàng đợi và deadline xấu đi.
**Grammar & collocations:** `capacity-planning model` — mô hình hoạch định; `long-term capacity planning` — hoạch định dài hạn; `plan for peak capacity` — lập kế hoạch cho đỉnh tải.
**Examples:** `Capacity planning reserved extra nodes for the seasonal workload instead of reacting after saturation.` → Capacity planning dành sẵn node cho tải theo mùa thay vì chờ bão hòa rồi mới phản ứng.
**Liên kết tiếng Hàn:** `용량 계획` (yongnyang gyehoek) — hoạch định capacity.

## 17. utilization ceiling /ˌjuːtələˈzeɪʃən ˈsiːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** an upper utilization limit kept below full capacity so that bursts, interference, or timing guarantees remain manageable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trần mức sử dụng; hệ thống cố ý không chạy 100% để còn khoảng đệm cho burst và deadline.
**Grammar & collocations:** `safe utilization ceiling` — trần sử dụng an toàn; `set a utilization ceiling` — đặt trần sử dụng; `remain below the ceiling` — giữ dưới trần.
**Examples:** `The real-time service enforced a utilization ceiling of seventy percent to absorb execution-time variation.` → Service thời gian thực áp dụng trần sử dụng 70% để hấp thụ dao động thời gian chạy.
**Liên kết tiếng Hàn:** `사용률 상한` (sayongnyul sanghan) — trần mức sử dụng.

## 18. scheduling quantum /ˈskɛdʒuːlɪŋ ˈkwɑntəm/
**Part of speech:** noun
**Core meaning (English):** the maximum time slice a scheduler gives a runnable task before reconsidering which task should run.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng tử lập lịch; lát thời gian nhỏ mà task được giữ CPU trước khi scheduler cân nhắc lại.
**Grammar & collocations:** `short scheduling quantum` — quantum ngắn; `quantum expiration` — hết quantum; `tune the scheduling quantum` — tinh chỉnh quantum.
**Examples:** `A longer scheduling quantum improved batch throughput but made interactive requests wait longer.` → Scheduling quantum dài cải thiện throughput batch nhưng khiến request tương tác chờ lâu hơn.
**Liên kết tiếng Hàn:** `스케줄링 퀀텀` (seukejulling kwonteom) — lượng tử lập lịch.

## 19. critical path /ˈkrɪtɪkəl pæθ/
**Part of speech:** noun
**Core meaning (English):** the chain of dependent operations that determines the shortest possible completion time of a task or workflow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường găng; một mắt xích trên đường này trễ thì toàn bộ job trễ, dù các nhánh khác đã xong.
**Grammar & collocations:** `critical-path task` — task trên đường găng; `critical-path analysis` — phân tích đường găng; `shorten the critical path` — rút ngắn đường găng.
**Examples:** `The scheduler prioritized the critical path so parallel preprocessing would not leave the final merge idle.` → Scheduler ưu tiên đường găng để tiền xử lý song song không khiến bước merge cuối phải rảnh chờ.
**Liên kết tiếng Hàn:** `임계 경로` (imgye gyeongno) — đường găng.

## 20. deadline miss ratio /ˈdɛdˌlaɪn mɪs ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the proportion of jobs that finish after their required deadlines.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ trễ hạn; lấy số job không kịp deadline chia cho tổng số job để đo chất lượng đáp ứng thời gian.
**Grammar & collocations:** `low deadline miss ratio` — tỷ lệ trễ hạn thấp; `deadline-miss ratio target` — mục tiêu tỷ lệ trễ; `track the miss ratio` — theo dõi tỷ lệ trễ.
**Examples:** `The revised admission policy cut the deadline miss ratio during the evening traffic peak.` → Policy admission sửa lại đã giảm tỷ lệ trễ hạn trong đỉnh traffic buổi tối.
**Liên kết tiếng Hàn:** `기한 미준수율` (gihan mijunsuyul) — tỷ lệ trễ hạn.

## Review in context

A runtime may use **work stealing** to keep workers busy, while a **scheduler tick** prompts the kernel to inspect each **run queue**. **Load balancing** spreads new work, and **processor affinity** preserves locality when migration would be costly. **Preemption** and a **context switch** let urgent work run, but poor policy can cause **starvation** or **priority inversion**. For time-sensitive services, **deadline scheduling** chooses urgent jobs and **admission control** rejects work that would overwhelm guarantees. The resulting **queueing delay** must be separated from execution time, while **jitter** measures variation in event timing. Parallel jobs may need **gang scheduling**, whereas shared clusters often use **fair-share scheduling**. Long-term **capacity planning** leaves headroom below a **utilization ceiling**. A **scheduling quantum** balances responsiveness against switching overhead. Engineers protect the **critical path** and track the **deadline miss ratio** to see whether the policy meets its promises.

**Bản dịch tiếng Việt:**

Một runtime có thể dùng work stealing để giữ worker luôn bận, trong khi scheduler tick nhắc kernel kiểm tra từng run queue. Load balancing phân tán công việc mới, còn processor affinity giữ locality khi việc di chuyển task gây tốn kém. Preemption và context switch cho phép công việc khẩn cấp chạy, nhưng policy kém có thể gây starvation hoặc priority inversion. Với service nhạy thời gian, deadline scheduling chọn job khẩn và admission control từ chối công việc có thể làm quá tải các cam kết. Cần tách queueing delay khỏi thời gian thực thi, còn jitter đo dao động thời điểm sự kiện. Job song song có thể cần gang scheduling, trong khi cluster dùng chung thường dùng fair-share scheduling. Capacity planning dài hạn chừa khoảng đệm dưới utilization ceiling. Scheduling quantum cân bằng độ phản hồi với overhead chuyển đổi. Kỹ sư bảo vệ critical path và theo dõi deadline miss ratio để biết policy có đáp ứng cam kết hay không.
