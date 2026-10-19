# C2 Vocabulary — Serverless function runtimes

This lesson follows an event-driven function from invocation and sandbox startup through concurrency, retries, fan-out, durable state, and scale-to-zero behavior.

Flow: **serverless computing → function-as-a-service → cold start → warm start → invocation → concurrency limit → execution sandbox → ephemeral instance → provisioned concurrency → event trigger → handler → idempotent invocation → retry policy → dead-letter queue → fan-out → fan-in → durable execution → state checkpoint → timeout budget → burst capacity → scale-to-zero**.

## 1. serverless computing /ˈsɝvərləs kəmˈpjuːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** a cloud model in which the provider runs and scales application code while the customer manages functions rather than servers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người dùng triển khai code mà không tự quản lý server; provider lo capacity và phần lớn vận hành hạ tầng.
**Grammar & collocations:** `serverless architecture` — kiến trúc serverless; `serverless workload` — workload serverless.
**Examples:** `The team chose serverless computing for an image pipeline whose traffic changed sharply by hour.` → Nhóm chọn serverless computing cho pipeline ảnh có traffic thay đổi mạnh theo giờ.
**Liên kết tiếng Hàn:** `서버리스 컴퓨팅`.

## 2. function-as-a-service /ˈfʌŋkʃən æz ə ˈsɝvɪs/
**Part of speech:** noun
**Core meaning (English):** a cloud service that executes small units of application code in response to events or requests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình “function như một dịch vụ”; platform gọi function khi có event thay vì giữ server chạy liên tục.
**Grammar & collocations:** `FaaS platform` — nền tảng FaaS; `FaaS invocation` — lần gọi function.
**Examples:** `Function-as-a-service reduced the amount of platform code needed for the notification workflow.` → Function-as-a-service giảm lượng code hạ tầng cần cho workflow thông báo.
**Liên kết tiếng Hàn:** `서비스형 함수`.

## 3. cold start /koʊld stɑrt/
**Part of speech:** noun
**Core meaning (English):** the latency of creating and initializing a function environment that is not already running.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lần gọi phải “khởi động lạnh”, nạp runtime và code nên chậm hơn.
**Grammar & collocations:** `cold-start latency` — độ trễ cold start; `reduce cold starts` — giảm cold start.
**Examples:** `The API kept a small warm pool because cold start latency was visible to users.` → API giữ một warm pool nhỏ vì độ trễ cold start dễ thấy với người dùng.
**Liên kết tiếng Hàn:** `콜드 스타트`.

## 4. warm start /wɔrm stɑrt/
**Part of speech:** noun
**Core meaning (English):** an invocation that reuses an already initialized function environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** môi trường đã nóng sẵn nên function bắt đầu nhanh mà không nạp lại toàn bộ runtime.
**Grammar & collocations:** `warm-start reuse` — tái sử dụng warm start; `warm-start path` — đường xử lý warm start.
**Examples:** `A warm start reused the loaded language model and cut request latency.` → Warm start tái sử dụng model ngôn ngữ đã nạp và giảm độ trễ request.
**Liên kết tiếng Hàn:** `웜 스타트`.

## 5. invocation /ˌɪnvəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** one execution request directed to a function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một lần platform gọi function; mỗi invocation có input, execution và kết quả riêng.
**Grammar & collocations:** `function invocation` — lần gọi function; `invocation ID` — mã lần gọi.
**Examples:** `Each invocation received a trace ID so the asynchronous steps could be correlated.` → Mỗi invocation nhận một trace ID để liên kết các bước bất đồng bộ.
**Liên kết tiếng Hàn:** `호출`.

## 6. concurrency limit /kənˈkɝənsi ˈlɪmət/
**Part of speech:** noun
**Core meaning (English):** the maximum number of function executions that may run at the same time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trần số execution đồng thời; vượt trần thì request phải chờ, bị throttle hoặc bị từ chối.
**Grammar & collocations:** `per-function concurrency limit` — giới hạn concurrency theo function; `raise the limit` — tăng giới hạn.
**Examples:** `The concurrency limit protected the database from a sudden burst of parallel writes.` → Concurrency limit bảo vệ database khỏi burst ghi song song đột ngột.
**Liên kết tiếng Hàn:** `동시성 한도`.

## 7. execution sandbox /ˌɛksɪˈkjuːʃən ˈsændˌbɑks/
**Part of speech:** noun
**Core meaning (English):** an isolated environment that restricts what a function can access while it runs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “hộp cát” giới hạn filesystem, network, privilege và process để code không ảnh hưởng tùy ý đến host.
**Grammar & collocations:** `sandbox boundary` — ranh giới sandbox; `sandbox escape` — thoát sandbox.
**Examples:** `The execution sandbox denied the function direct access to the host filesystem.` → Execution sandbox từ chối function quyền truy cập trực tiếp vào filesystem của host.
**Liên kết tiếng Hàn:** `실행 샌드박스`.

## 8. ephemeral instance /ɪˈfɛmərəl ˈɪnstəns/
**Part of speech:** noun
**Core meaning (English):** a short-lived compute environment that may disappear after an execution or a period of inactivity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instance tạm thời; không được coi local disk hay memory của nó là nơi lưu state lâu dài.
**Grammar & collocations:** `ephemeral runtime` — runtime tạm; `ephemeral storage` — storage tạm.
**Examples:** `The worker wrote results to durable storage because its instance was ephemeral.` → Worker ghi kết quả vào storage bền vững vì instance của nó chỉ tồn tại tạm thời.
**Liên kết tiếng Hàn:** `임시 인스턴스`.

## 9. provisioned concurrency /prəˈvɪʒənd kənˈkɝənsi/
**Part of speech:** noun
**Core meaning (English):** a reserved pool of initialized function environments kept ready to reduce startup latency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** platform chuẩn bị sẵn số execution environment; đổi lại người dùng trả capacity ngay cả khi traffic thấp.
**Grammar & collocations:** `provisioned-concurrency pool` — pool concurrency chuẩn bị sẵn; `configure provisioned concurrency` — cấu hình.
**Examples:** `Provisioned concurrency kept the checkout function responsive during the sales launch.` → Provisioned concurrency giữ function checkout phản hồi nhanh trong lúc mở bán.
**Liên kết tiếng Hàn:** `프로비저닝된 동시성`.

## 10. event trigger /ɪˈvɛnt ˈtrɪɡər/
**Part of speech:** noun
**Core meaning (English):** an event or rule that causes a function invocation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu châm ngòi cho function, như message mới, file upload hoặc lịch định kỳ.
**Grammar & collocations:** `event-trigger rule` — rule trigger; `configure an event trigger` — cấu hình trigger.
**Examples:** `A queue message served as the event trigger for the thumbnail function.` → Message trong queue đóng vai event trigger cho function tạo thumbnail.
**Liên kết tiếng Hàn:** `이벤트 트리거`.

## 11. handler /ˈhændlər/
**Part of speech:** noun
**Core meaning (English):** the function entry point that receives an event and coordinates the code that processes it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “cửa vào” của function; handler nhận event rồi gọi logic phù hợp.
**Grammar & collocations:** `request handler` — handler request; `handler signature` — chữ ký handler.
**Examples:** `The handler validated the event schema before it touched the billing service.` → Handler kiểm tra schema event trước khi gọi billing service.
**Liên kết tiếng Hàn:** `핸들러`.

## 12. idempotent invocation /ˌaɪdəmˈpoʊtənt ˌɪnvəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a function execution designed so that repeating the same request does not create an additional unintended effect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** retry cùng request không nhân đôi kết quả; thường cần request ID hoặc điều kiện ghi duy nhất.
**Grammar & collocations:** `idempotent handler` — handler idempotent; `make an invocation idempotent` — làm invocation idempotent.
**Examples:** `An idempotent invocation could be retried safely after a network timeout.` → Idempotent invocation có thể retry an toàn sau network timeout.
**Liên kết tiếng Hàn:** `멱등 호출`.

## 13. retry policy /ˈriːˌtraɪ ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules that determine when a failed invocation is attempted again and when it is abandoned.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** luật retry quyết định số lần thử, khoảng chờ, backoff và loại lỗi nào được thử lại.
**Grammar & collocations:** `exponential-backoff retry policy` — policy retry backoff lũy thừa; `retry-policy limit` — giới hạn retry.
**Examples:** `The retry policy used exponential backoff for temporary database failures.` → Retry policy dùng exponential backoff cho lỗi database tạm thời.
**Liên kết tiếng Hàn:** `재시도 정책`.

## 14. dead-letter queue /ˌdɛd ˈlɛtər kjuː/
**Part of speech:** noun
**Core meaning (English):** a queue that stores messages or events that could not be processed successfully after the allowed attempts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “bến cuối” cho message thất bại; giữ lại để điều tra thay vì retry vô hạn.
**Grammar & collocations:** `dead-letter queue message` — message trong DLQ; `route to a dead-letter queue` — chuyển vào DLQ.
**Examples:** `Malformed events were routed to a dead-letter queue for manual inspection.` → Event sai format được chuyển vào dead-letter queue để kiểm tra thủ công.
**Liên kết tiếng Hàn:** `배달 못한 메시지 큐`.

## 15. fan-out /fæn aʊt/
**Part of speech:** noun
**Core meaning (English):** the distribution of one event or task to multiple independent consumers or function invocations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một input tỏa ra nhiều nhánh xử lý song song.
**Grammar & collocations:** `event fan-out` — fan-out event; `fan out a message` — phân nhánh message.
**Examples:** `The upload event used fan-out to start scanning, indexing, and notification functions in parallel.` → Upload event dùng fan-out để chạy song song các function scan, index và thông báo.
**Liên kết tiếng Hàn:** `팬아웃`.

## 16. fan-in /fæn ɪn/
**Part of speech:** noun
**Core meaning (English):** the collection of results from multiple parallel tasks into one downstream step.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều nhánh hội tụ về một bước tổng hợp hoặc quyết định cuối.
**Grammar & collocations:** `fan-in stage` — giai đoạn hội tụ; `fan in partial results` — gom kết quả từng phần.
**Examples:** `A fan-in function combined the validation results before publishing the report.` → Function fan-in gộp kết quả validation trước khi publish report.
**Liên kết tiếng Hàn:** `팬인`.

## 17. durable execution /ˈdʊrəbəl ˌɛksɪˈkjuːʃən/
**Part of speech:** noun
**Core meaning (English):** a workflow model that records progress so execution can resume after process, machine, or network failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** workflow không mất tiến độ khi worker chết; engine lưu lịch sử để tiếp tục từ bước an toàn.
**Grammar & collocations:** `durable-execution engine` — engine thực thi bền vững; `durable workflow` — workflow bền vững.
**Examples:** `Durable execution resumed the shipment workflow after the payment provider timed out.` → Durable execution tiếp tục workflow giao hàng sau khi payment provider timeout.
**Liên kết tiếng Hàn:** `내구성 실행`.

## 18. state checkpoint /steɪt ˈtʃɛkˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a saved representation of workflow progress from which execution can safely resume.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc lưu state; khi có lỗi, engine quay lại mốc đó thay vì chạy lại mù quáng từ đầu.
**Grammar & collocations:** `persist a state checkpoint` — lưu checkpoint state; `checkpoint interval` — khoảng cách checkpoint.
**Examples:** `The orchestrator wrote a state checkpoint after each irreversible payment step.` → Orchestrator ghi state checkpoint sau mỗi bước thanh toán không thể đảo ngược.
**Liên kết tiếng Hàn:** `상태 체크포인트`.

## 19. timeout budget /ˈtaɪmˌaʊt ˈbʌdʒət/
**Part of speech:** noun
**Core meaning (English):** the maximum time allocated to an operation before the caller must stop waiting or take another action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “ngân sách thời gian” cho một bước; các service con phải chia nhau budget còn lại.
**Grammar & collocations:** `end-to-end timeout budget` — budget timeout end-to-end; `consume the budget` — tiêu budget.
**Examples:** `The handler passed the remaining timeout budget to the downstream function.` → Handler truyền timeout budget còn lại cho function downstream.
**Liên kết tiếng Hàn:** `타임아웃 예산`.

## 20. burst capacity /bɝst kəˈpæsəti/
**Part of speech:** noun
**Core meaning (English):** temporary processing capacity available above a system's normal sustained level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sức chứa tăng đột biến trong thời gian ngắn; giúp hấp thụ spike nhưng không thay thế capacity dài hạn.
**Grammar & collocations:** `absorb a burst` — hấp thụ burst; `burst-capacity limit` — giới hạn burst capacity.
**Examples:** `The platform used burst capacity to absorb the campaign's first-minute traffic spike.` → Platform dùng burst capacity để hấp thụ spike traffic ở phút đầu chiến dịch.
**Liên kết tiếng Hàn:** `버스트 용량`.

## 21. scale-to-zero /skeɪl tə ˈzɪroʊ/
**Part of speech:** noun
**Core meaning (English):** an operating mode in which a service removes all idle instances when demand disappears and starts them again when work arrives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không có traffic thì chạy về zero instance để tiết kiệm chi phí; request mới phải chịu startup.
**Grammar & collocations:** `scale-to-zero policy` — policy scale-to-zero; `support scale to zero` — hỗ trợ scale về zero.
**Examples:** `Scale-to-zero lowered the overnight bill but made the first morning request slower.` → Scale-to-zero giảm chi phí ban đêm nhưng khiến request đầu buổi sáng chậm hơn.
**Liên kết tiếng Hàn:** `제로 스케일`.

## Review in context

In **serverless computing**, a **function-as-a-service** platform receives an **event trigger** and creates an **invocation**. A **cold start** initializes a new **execution sandbox**, while a **warm start** reuses an **ephemeral instance**; **provisioned concurrency** keeps some environments ready. The platform enforces a **concurrency limit**, then calls the function's **handler**.

**Bản dịch tiếng Việt:** Trong **serverless computing**, platform **function-as-a-service** nhận **event trigger** rồi tạo **invocation**. **Cold start** khởi tạo **execution sandbox** mới, còn **warm start** tái sử dụng **ephemeral instance**; **provisioned concurrency** giữ sẵn một số môi trường. Platform áp dụng **concurrency limit**, rồi gọi **handler** của function.

An **idempotent invocation** can survive a **retry policy**, and unrecoverable messages move to a **dead-letter queue**. One event may **fan-out** to several functions before a **fan-in** step combines their results. **Durable execution** records a **state checkpoint**, passes a **timeout budget**, and uses temporary **burst capacity** during spikes. When demand disappears, **scale-to-zero** removes idle instances and accepts a new startup delay.

**Bản dịch tiếng Việt:** **Idempotent invocation** có thể chịu được **retry policy**, còn message không thể xử lý sẽ chuyển vào **dead-letter queue**. Một event có thể **fan-out** tới nhiều function trước khi bước **fan-in** gộp kết quả. **Durable execution** ghi **state checkpoint**, truyền **timeout budget** và dùng **burst capacity** khi có spike. Khi nhu cầu biến mất, **scale-to-zero** xóa instance rảnh và chấp nhận độ trễ khởi động mới.
