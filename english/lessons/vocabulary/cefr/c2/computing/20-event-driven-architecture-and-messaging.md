# C2 Vocabulary — Event-driven architecture and messaging

This lesson follows a message from publication through partitioning, processing, replay, failure handling, and the consistency choices that shape event-driven systems.

Flow: **event-driven architecture → message broker → publish-subscribe → consumer group → exactly-once processing → idempotency key → schema registry → event sourcing → command-query responsibility segregation → replay → offset commit → partition key → outbox pattern → saga orchestration → distributed transaction → poison message → delivery semantics → redelivery → stream processor → causal ordering**.

## 1. event-driven architecture /ɪˈvɛnt ˈdrɪvən ˈɑrkəˌtɛktʃɚ/
**Part of speech:** noun
**Core meaning (English):** a system design in which components communicate by producing and reacting to events rather than invoking each other directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiến trúc hướng sự kiện; service phát tín hiệu thay đổi và service khác phản ứng mà không cần gọi trực tiếp nhau.
**Grammar & collocations:** `event-driven system` — hệ thống hướng sự kiện; `event-driven workflow` — workflow hướng sự kiện; `adopt event-driven architecture` — áp dụng kiến trúc hướng sự kiện.
**Examples:** `The company adopted event-driven architecture so billing and fulfillment could evolve independently.` → Công ty áp dụng kiến trúc hướng sự kiện để billing và fulfillment có thể phát triển độc lập.
**Liên kết tiếng Hàn:** `이벤트 기반 아키텍처` (ibenteu giban akitekcheo) — kiến trúc hướng sự kiện.

## 2. message broker /ˈmɛsɪdʒ ˈbroʊkər/
**Part of speech:** noun
**Core meaning (English):** infrastructure that accepts, stores, routes, and delivers messages between producers and consumers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** môi giới thông điệp; một lớp trung gian nhận message, giữ chúng và chuyển đến consumer phù hợp.
**Grammar & collocations:** `distributed message broker` — broker thông điệp phân tán; `broker topic` — topic của broker; `operate a message broker` — vận hành broker.
**Examples:** `The message broker buffered orders while the downstream warehouse service was temporarily unavailable.` → Message broker đệm các đơn hàng khi service kho phía sau tạm thời không khả dụng.
**Liên kết tiếng Hàn:** `메시지 브로커` (mesiji beurokeo) — môi giới thông điệp.

## 3. publish-subscribe /ˈpʌblɪʃ səbˈskraɪb/
**Part of speech:** noun
**Core meaning (English):** a messaging pattern in which producers publish events to a topic and independent subscribers receive the events they select.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình xuất bản–đăng ký; publisher không cần biết subscriber nào sẽ đọc event.
**Grammar & collocations:** `publish-subscribe topic` — topic publish-subscribe; `publish-subscribe channel` — kênh publish-subscribe; `use publish-subscribe` — dùng publish-subscribe.
**Examples:** `Publish-subscribe let fraud detection and analytics consume the same payment event without coupling their deployments.` → Publish-subscribe cho phép phát hiện gian lận và analytics cùng đọc payment event mà không ghép chặt việc triển khai.
**Liên kết tiếng Hàn:** `발행-구독` (balhaeng-gudok) — xuất bản–đăng ký.

## 4. consumer group /kənˈsuːmər ɡruːp/
**Part of speech:** noun
**Core meaning (English):** a set of consumers that share responsibility for processing the partitions of a topic, with each message assigned to one member in the group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm consumer; nhiều worker cùng chia partition nhưng mỗi message trong group chỉ được một worker xử lý.
**Grammar & collocations:** `consumer-group membership` — thành viên nhóm consumer; `rebalance a consumer group` — rebalance nhóm; `consumer-group offset` — offset của nhóm.
**Examples:** `The consumer group added two workers and rebalanced the partitions during the traffic surge.` → Consumer group thêm hai worker và phân lại partition trong lúc traffic tăng.
**Liên kết tiếng Hàn:** `컨슈머 그룹` (keonsyumeo geurup) — nhóm consumer.

## 5. exactly-once processing /ɪɡˈzæktli wʌns ˈprɑsɛsɪŋ/
**Part of speech:** noun
**Core meaning (English):** processing semantics intended to make each logical event affect the outcome once despite retries or duplicate delivery.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xử lý đúng một lần; mục tiêu là retry không làm kết quả nghiệp vụ bị cộng hai lần, dù hạ tầng vẫn có thể giao lại message.
**Grammar & collocations:** `exactly-once guarantee` — bảo đảm đúng một lần; `exactly-once semantics` — ngữ nghĩa đúng một lần; `achieve exactly-once processing` — đạt xử lý đúng một lần.
**Examples:** `Exactly-once processing required the sink to commit its output and acknowledgment atomically.` → Xử lý đúng một lần yêu cầu sink commit output và acknowledgment một cách nguyên tử.
**Liên kết tiếng Hàn:** `정확히 한 번 처리` (jeonghwakhi han beon cheori) — xử lý đúng một lần.

## 6. idempotency key /ˌɪdəmpoʊˈtɛnsi kiː/
**Part of speech:** noun
**Core meaning (English):** a client-supplied identifier that lets a service recognize repeated requests and apply the intended effect only once.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khóa idempotency; request retry mang cùng key để server biết đó là cùng một yêu cầu chứ không phải giao dịch mới.
**Grammar & collocations:** `idempotency-key store` — kho khóa idempotency; `reuse an idempotency key` — dùng lại khóa; `validate the key` — kiểm tra khóa.
**Examples:** `The payment API required an idempotency key before accepting a retryable charge request.` → Payment API yêu cầu idempotency key trước khi nhận charge request có thể retry.
**Liên kết tiếng Hàn:** `멱등성 키` (myeokdeungseong ki) — khóa idempotency.

## 7. schema registry /ˈskiːmə ˈrɛdʒəstri/
**Part of speech:** noun
**Core meaning (English):** a service that stores, versions, and validates the schemas used to encode messages and events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** registry schema; nơi lưu version và kiểm tra producer/consumer có tương thích khi format event thay đổi.
**Grammar & collocations:** `schema-registry compatibility` — tính tương thích registry; `register a schema` — đăng ký schema; `schema evolution` — tiến hóa schema.
**Examples:** `The schema registry rejected a field removal that would have broken older consumers.` → Schema registry từ chối việc xóa field có thể làm hỏng consumer cũ.
**Liên kết tiếng Hàn:** `스키마 레지스트리` (seukima rejeuseuteuri) — registry schema.

## 8. event sourcing /ɪˈvɛnt ˈsɔrsɪŋ/
**Part of speech:** noun
**Core meaning (English):** a persistence pattern that stores an entity's state as an append-only sequence of domain events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lưu nguồn sự kiện; thay vì chỉ lưu trạng thái cuối, hệ thống giữ toàn bộ chuỗi event làm bằng chứng và có thể dựng lại state.
**Grammar & collocations:** `event-sourced aggregate` — aggregate lưu bằng event; `event-sourcing store` — kho event sourcing; `adopt event sourcing` — áp dụng event sourcing.
**Examples:** `Event sourcing preserved the account history needed to explain every balance change.` → Event sourcing giữ lịch sử tài khoản cần để giải thích mọi thay đổi số dư.
**Liên kết tiếng Hàn:** `이벤트 소싱` (ibenteu sosing) — lưu nguồn sự kiện.

## 9. command-query responsibility segregation /kəˈmænd ˈkwɪəri rɪˌspɑnsəˈbɪləti ˌsɛɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an architectural separation in which models or paths that change state are distinct from those that read state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách trách nhiệm lệnh–truy vấn; write model xử lý command, read model tối ưu cho query thay vì ép một model làm cả hai.
**Grammar & collocations:** `command-query responsibility segregation model` — model CQRS; `CQRS projection` — projection CQRS; `apply CQRS` — áp dụng CQRS.
**Examples:** `Command-query responsibility segregation allowed the read projection to scale independently from order commands.` → CQRS cho phép read projection scale độc lập với order command.
**Liên kết tiếng Hàn:** `명령-조회 책임 분리` (myeongnyeong-johoe chaegim bunri) — tách trách nhiệm lệnh–truy vấn.

## 10. replay /ˈriːpleɪ/
**Part of speech:** noun
**Core meaning (English):** the act of feeding previously stored events through a processor again to rebuild state, test logic, or recover outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát lại event; chạy lại lịch sử đã lưu để dựng projection mới hoặc sửa kết quả sau khi code thay đổi.
**Grammar & collocations:** `event replay` — replay event; `replay a topic` — phát lại topic; `replay window` — khoảng thời gian replay.
**Examples:** `A replay rebuilt the customer projection after the team corrected a parsing bug.` → Replay dựng lại customer projection sau khi nhóm sửa lỗi phân tích.
**Liên kết tiếng Hàn:** `재생` (jaesaeng) — phát lại.

## 11. offset commit /ˈɔfˌsɛt kəˈmɪt/
**Part of speech:** noun
**Core meaning (English):** the recorded confirmation of the position up to which a consumer has successfully processed a partition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** commit offset; consumer ghi mốc đã xử lý để lần sau biết bắt đầu đọc từ đâu.
**Grammar & collocations:** `synchronous offset commit` — commit offset đồng bộ; `commit an offset` — commit offset; `offset-commit failure` — lỗi commit offset.
**Examples:** `The worker delayed its offset commit until the database transaction was durable.` → Worker trì hoãn commit offset đến khi transaction cơ sở dữ liệu bền vững.
**Liên kết tiếng Hàn:** `오프셋 커밋` (opeuset keomit) — commit offset.

## 12. partition key /pɑrˈtɪʃən kiː/
**Part of speech:** noun
**Core meaning (English):** a field whose value determines the partition to which an event is routed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khóa partition; cùng một key thường đưa event vào cùng partition để giữ thứ tự tương đối của một entity.
**Grammar & collocations:** `stable partition key` — partition key ổn định; `choose a partition key` — chọn khóa; `key-based partitioning` — phân partition theo key.
**Examples:** `The account identifier was the partition key because transactions for one account had to remain ordered.` → Mã tài khoản là partition key vì giao dịch của một tài khoản phải giữ thứ tự.
**Liên kết tiếng Hàn:** `파티션 키` (patisyeon ki) — khóa partition.

## 13. outbox pattern /ˈaʊtˌbɑks ˈpætɚn/
**Part of speech:** noun
**Core meaning (English):** a pattern that writes a business change and its outgoing event to the same local transaction before a separate relay publishes the event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mẫu outbox; lưu event chờ phát ngay trong database transaction để tránh state đã đổi nhưng event bị mất.
**Grammar & collocations:** `transactional outbox` — outbox nguyên tử; `outbox relay` — relay outbox; `implement the outbox pattern` — triển khai mẫu outbox.
**Examples:** `The outbox pattern prevented an order update from committing without a corresponding integration event.` → Outbox pattern ngăn order update commit mà không có integration event tương ứng.
**Liên kết tiếng Hàn:** `아웃박스 패턴` (autbak seuteu paeteon) — mẫu outbox.

## 14. saga orchestration /ˈsɑːɡə ˌɔrkəˈstreɪʃən/
**Part of speech:** noun
**Core meaning (English):** coordination of a long-running business transaction as a sequence of local actions and compensating actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều phối saga; workflow chia transaction lớn thành bước cục bộ, nếu bước sau thất bại thì chạy hành động bù.
**Grammar & collocations:** `saga orchestrator` — bộ điều phối saga; `compensating action` — hành động bù; `saga state machine` — máy trạng thái saga.
**Examples:** `Saga orchestration issued a refund when inventory reservation failed after payment had succeeded.` → Saga orchestration phát lệnh hoàn tiền khi giữ hàng thất bại sau khi thanh toán thành công.
**Liên kết tiếng Hàn:** `사가 오케스트레이션` (saga okeuseuteureisyeon) — điều phối saga.

## 15. distributed transaction /dɪˈstrɪbjətɪd trænˈzækʃən/
**Part of speech:** noun
**Core meaning (English):** a transaction whose atomic outcome spans multiple independent services, databases, or resource managers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transaction phân tán; một commit logic trải qua nhiều hệ thống nên phải giải quyết phối hợp và lỗi mạng.
**Grammar & collocations:** `distributed-transaction coordinator` — coordinator transaction phân tán; `distributed-transaction protocol` — giao thức; `commit a distributed transaction` — commit transaction.
**Examples:** `The team avoided a distributed transaction by using an outbox and compensating workflow.` → Nhóm tránh distributed transaction bằng outbox và workflow bù.
**Liên kết tiếng Hàn:** `분산 트랜잭션` (bunsan teuraenjaeksyeon) — transaction phân tán.

## 16. poison message /ˈpɔɪzən ˈmɛsɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a message that repeatedly fails processing because its contents or assumptions trigger a persistent error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** message độc; cứ retry mãi cũng thất bại và có thể làm nghẽn cả consumer nếu không được cách ly.
**Grammar & collocations:** `poison-message quarantine` — cách ly message độc; `identify a poison message` — nhận diện; `discard a poison message` — loại bỏ.
**Examples:** `The consumer quarantined the poison message instead of retrying it indefinitely.` → Consumer cách ly poison message thay vì retry vô hạn.
**Liên kết tiếng Hàn:** `독성 메시지` (dokseong mesiji) — message độc.

## 17. delivery semantics /dɪˈlɪvəri səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** the guarantees a messaging system makes about whether and how often a consumer receives each message.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngữ nghĩa giao message; mô tả hệ thống cho at-most-once, at-least-once hay một cam kết mạnh hơn.
**Grammar & collocations:** `message-delivery semantics` — ngữ nghĩa giao message; `choose delivery semantics` — chọn ngữ nghĩa; `delivery guarantee` — bảo đảm giao.
**Examples:** `The team documented delivery semantics before deciding where idempotency belonged.` → Nhóm ghi rõ delivery semantics trước khi quyết định đặt idempotency ở đâu.
**Liên kết tiếng Hàn:** `전달 의미론` (jeondal uimiron) — ngữ nghĩa giao message.

## 18. redelivery /ˌriːdɪˈlɪvəri/
**Part of speech:** noun
**Core meaning (English):** delivery of a message again after the first attempt was rejected, timed out, or not acknowledged.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giao lại; broker gửi lại message khi consumer chết hoặc chưa xác nhận xử lý thành công.
**Grammar & collocations:** `redelivery delay` — độ trễ giao lại; `redelivery attempt` — lần giao lại; `limit redelivery` — giới hạn giao lại.
**Examples:** `A short redelivery delay helped the recovered worker resume without creating a retry storm.` → Độ trễ redelivery ngắn giúp worker phục hồi tiếp tục mà không tạo bão retry.
**Liên kết tiếng Hàn:** `재전달` (je jeondal) — giao lại.

## 19. stream processor /striːm ˈprɑsɛsər/
**Part of speech:** noun
**Core meaning (English):** a component that continuously consumes, transforms, joins, or aggregates events as they arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ xử lý stream; dữ liệu chạy qua liên tục và kết quả được cập nhật gần thời gian thực thay vì chờ batch.
**Grammar & collocations:** `stateful stream processor` — processor stream có state; `stream-processing topology` — topology xử lý stream; `deploy a stream processor` — triển khai processor.
**Examples:** `The stream processor joined click events with catalog updates to calculate live recommendations.` → Stream processor nối click event với cập nhật catalog để tính recommendation trực tiếp.
**Liên kết tiếng Hàn:** `스트림 프로세서` (seuteurim peuroseoseo) — bộ xử lý stream.

## 20. causal ordering /ˈkɔzəl ˈɔrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** an ordering that preserves the before-and-after relationships implied by causally related events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự nhân quả; event “đã tạo đơn” phải được thấy trước event “đã giao đơn” khi hai event có quan hệ nguyên nhân.
**Grammar & collocations:** `causal-ordering guarantee` — bảo đảm thứ tự nhân quả; `preserve causal ordering` — giữ thứ tự; `causal-order violation` — vi phạm thứ tự.
**Examples:** `The partition key preserved causal ordering for updates belonging to the same account.` → Partition key giữ thứ tự nhân quả cho các update thuộc cùng tài khoản.
**Liên kết tiếng Hàn:** `인과 순서` (ingwa sunseo) — thứ tự nhân quả.

## Review in context

An **event-driven architecture** often places a **message broker** between services. With **publish-subscribe**, one event can reach several independent consumers, while a **consumer group** divides partitions among workers. The team must document **delivery semantics**: **redelivery** may occur, and a **poison message** needs quarantine. A **partition key** can preserve **causal ordering** for one entity, while a **stream processor** continuously updates derived state. **Exactly-once processing** may require an **idempotency key**, a careful **offset commit**, and a compatible **schema registry**. **Event sourcing** stores the history, and **replay** can rebuild a projection organized through **command-query responsibility segregation**. The **outbox pattern** connects a local database change to an event; a long workflow may use **saga orchestration** instead of a single **distributed transaction**. These choices define how reliably the system evolves and recovers.

**Bản dịch tiếng Việt:**

Một event-driven architecture thường đặt message broker giữa các service. Với publish-subscribe, một event có thể đến nhiều consumer độc lập, trong khi consumer group chia partition cho các worker. Nhóm phải ghi rõ delivery semantics: redelivery có thể xảy ra, và poison message cần được cách ly. Partition key có thể giữ causal ordering cho một entity, còn stream processor liên tục cập nhật state phái sinh. Exactly-once processing có thể cần idempotency key, offset commit cẩn thận và schema registry tương thích. Event sourcing lưu lịch sử, còn replay có thể dựng lại projection được tổ chức theo command-query responsibility segregation. Outbox pattern nối thay đổi cục bộ trong database với event; workflow dài có thể dùng saga orchestration thay cho một distributed transaction duy nhất. Những lựa chọn này quyết định hệ thống tiến hóa và phục hồi đáng tin cậy đến đâu.
