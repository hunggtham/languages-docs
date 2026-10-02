# C2 Vocabulary — Event-driven data delivery

This lesson follows an event from publication through routing, delivery, replay, deduplication, and recovery at scale.

Flow: **event envelope → consumer lag → deduplication window → dead-letter topic → replay cursor → delivery guarantee → ordering key → fan-out topology → stream join → watermark frontier → temporal skew → late-arriving event → compaction topic → exactly-once boundary → outbox relay → inbox table → event router → subscription filter → delivery attempt → replay horizon**.

## 1. event envelope /ɪˈvent ˈenvəloʊ/
**Part of speech:** noun
**Core meaning (English):** a wrapper carrying an event payload together with identifiers, timestamps, type, and tracing metadata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** wrapper chứa payload event cùng identifier, timestamp, type và metadata trace.
**Grammar & collocations:** `event-envelope field` — field; `attach a causation identifier` — gắn.
**Examples:** `The event envelope carried the producer version beside the order payload.` → Envelope mang version producer cạnh payload order.
**Liên kết tiếng Hàn:** `이벤트 봉투`.

## 2. consumer lag /kənˈsuːmər læɡ/
**Part of speech:** noun
**Core meaning (English):** the distance between the newest available event and the position a consumer has processed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách giữa event mới nhất và vị trí consumer đã xử lý.
**Grammar & collocations:** `consumer-lag alert` — cảnh báo; `measure backlog growth` — đo.
**Examples:** `Consumer lag doubled when the enrichment service lost half its workers.` → Lag tăng gấp đôi khi service mất worker.
**Liên kết tiếng Hàn:** `소비자 지연`.

## 3. deduplication window /diːˌdjuːplɪˈkeɪʃən ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a bounded period during which repeated events with the same identity are treated as duplicates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian giới hạn để coi event cùng identity là trùng.
**Grammar & collocations:** `deduplication-window state` — trạng thái; `discard a repeated delivery` — loại.
**Examples:** `The deduplication window absorbed retries that arrived within ten minutes.` → Window hấp thụ retry trong mười phút.
**Liên kết tiếng Hàn:** `중복 제거 기간`.

## 4. dead-letter topic /ˈded ˈletər ˈtɒpɪk/
**Part of speech:** noun
**Core meaning (English):** a topic receiving messages that cannot be processed successfully after defined retries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** topic nhận message không xử lý được sau số retry quy định.
**Grammar & collocations:** `dead-letter-topic consumer` — consumer; `inspect a permanently rejected event` — kiểm tra.
**Examples:** `Invalid currency events moved to the dead-letter topic after three failed attempts.` → Event currency lỗi vào dead-letter sau ba lần.
**Liên kết tiếng Hàn:** `데드 레터 토픽`.

## 5. replay cursor /ˈriːpleɪ ˈkɜːrsər/
**Part of speech:** noun
**Core meaning (English):** a position indicating where a consumer should resume when reading historical events again.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí cho biết consumer đọc lại lịch sử từ đâu.
**Grammar & collocations:** `replay-cursor checkpoint` — checkpoint; `resume from an archived offset` — tiếp tục.
**Examples:** `The replay cursor returned to the hour before the corrupted transformation was deployed.` → Cursor quay về trước lúc deploy transform lỗi.
**Liên kết tiếng Hàn:** `재생 커서`.

## 6. delivery guarantee /dɪˈlɪvəri ˌɡærənˈtiː/
**Part of speech:** noun
**Core meaning (English):** a stated promise about whether and how often a published event will reach its consumers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cam kết event có đến consumer không và đến bao nhiêu lần.
**Grammar & collocations:** `delivery-guarantee contract` — contract; `document a retry promise` — ghi.
**Examples:** `The delivery guarantee allowed duplicates but prohibited silent loss of payment events.` → Guarantee cho duplicate nhưng cấm mất payment event.
**Liên kết tiếng Hàn:** `전달 보장`.

## 7. ordering key /ˈɔːrdərɪŋ kiː/
**Part of speech:** noun
**Core meaning (English):** a value used to keep related events in a required sequence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị dùng để giữ event liên quan đúng thứ tự.
**Grammar & collocations:** `ordering-key partition` — partition; `preserve account sequence` — giữ.
**Examples:** `The account ID served as the ordering key for balance updates.` → Account ID làm key thứ tự cho balance update.
**Liên kết tiếng Hàn:** `순서 지정 키`.

## 8. fan-out topology /ˈfæn aʊt təˈpɒlədʒi/
**Part of speech:** noun
**Core meaning (English):** a delivery arrangement in which one published event is distributed to multiple independent consumers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc phân phối một event đến nhiều consumer độc lập.
**Grammar & collocations:** `fan-out-topology branch` — nhánh; `broadcast a domain event` — phát.
**Examples:** `The fan-out topology sent one shipment event to billing, search, and notifications.` → Topology gửi shipment đến ba consumer.
**Liên kết tiếng Hàn:** `팬아웃 토폴로지`.

## 9. stream join /striːm dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** combining records from live streams according to matching keys and a time condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp record từ stream theo key và điều kiện thời gian.
**Grammar & collocations:** `stream-join state` — state; `match a click with an impression` — ghép.
**Examples:** `The stream join connected a delivery scan with the shipment event still in memory.` → Join nối scan với shipment event trong memory.
**Liên kết tiếng Hàn:** `스트림 조인`.

## 10. watermark frontier /ˈwɔːtərmɑːrk frʌnˈtɪər/
**Part of speech:** noun
**Core meaning (English):** the advancing boundary beyond which a streaming system assumes earlier event-time data is unlikely to arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới tiến lên sau đó hệ thống cho rằng event-time cũ khó đến nữa.
**Grammar & collocations:** `watermark-frontier advance` — tiến; `close a time window` — đóng.
**Examples:** `The watermark frontier moved only after all regional collectors reported progress.` → Frontier chỉ tiến khi collector vùng báo tiến độ.
**Liên kết tiếng Hàn:** `워터마크 경계`.

## 11. temporal skew /ˈtempərəl skjuː/
**Part of speech:** noun
**Core meaning (English):** a difference between the clocks or event-time interpretations used by sources and processors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch clock hoặc cách hiểu event-time giữa nguồn và processor.
**Grammar & collocations:** `temporal-skew correction` — hiệu chỉnh; `compare source timestamps` — so sánh.
**Examples:** `Temporal skew made one region's events appear several minutes in the future.` → Skew làm event một vùng trông như ở tương lai.
**Liên kết tiếng Hàn:** `시간적 왜곡`.

## 12. late-arriving event /leɪt əˈraɪvɪŋ ɪˈvent/
**Part of speech:** noun
**Core meaning (English):** an event that reaches a processor after the event-time window containing it has already advanced or closed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event đến sau khi window event-time chứa nó đã tiến hoặc đóng.
**Grammar & collocations:** `late-arriving-event policy` — policy; `reopen a historical window` — mở lại.
**Examples:** `The late-arriving event corrected yesterday's revenue after the report had been published.` → Event đến muộn sửa doanh thu hôm qua.
**Liên kết tiếng Hàn:** `지연 도착 이벤트`.

## 13. compaction topic /kəmˈpækʃən ˈtɒpɪk/
**Part of speech:** noun
**Core meaning (English):** a topic retaining the latest value for each key so a new consumer can reconstruct current state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** topic giữ value mới nhất mỗi key để consumer dựng state hiện tại.
**Grammar & collocations:** `compaction-topic retention` — lưu giữ; `rebuild a key-value view` — dựng lại.
**Examples:** `The compaction topic let a new inventory service recover the latest stock for every item.` → Topic giúp service mới phục hồi stock mới nhất.
**Liên kết tiếng Hàn:** `압축 토픽`.

## 14. exactly-once boundary /ɪɡˈzæktli wʌns ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** the explicit scope within which a processing design can guarantee one effective result for each input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phạm vi rõ ràng mà thiết kế bảo đảm mỗi input chỉ tạo một kết quả hiệu lực.
**Grammar & collocations:** `exactly-once-boundary claim` — tuyên bố; `limit a transactional effect` — giới hạn.
**Examples:** `The exactly-once boundary ended at the external email provider, where retries could duplicate messages.` → Boundary kết thúc ở provider email.
**Liên kết tiếng Hàn:** `정확히 한 번 경계`.

## 15. outbox relay /ˈaʊtbɒks ˈriːleɪ/
**Part of speech:** noun
**Core meaning (English):** a process that publishes events recorded in a local transaction's outbox.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process publish event đã ghi trong outbox của transaction cục bộ.
**Grammar & collocations:** `outbox-relay retry` — retry; `forward a committed event` — chuyển.
**Examples:** `The outbox relay published the order event after the database transaction committed.` → Relay publish sau khi transaction commit.
**Liên kết tiếng Hàn:** `아웃박스 릴레이`.

## 16. inbox table /ˈɪnbɒks ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a durable table recording received event identities so a consumer can process retries safely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** table bền ghi identity event nhận để consumer xử lý retry an toàn.
**Grammar & collocations:** `inbox-table record` — record; `deduplicate a received command` — loại trùng.
**Examples:** `The inbox table prevented a repeated shipment command from reserving stock twice.` → Table chặn command lặp giữ stock hai lần.
**Liên kết tiếng Hàn:** `인박스 테이블`.

## 17. event router /ɪˈvent ˈraʊtər/
**Part of speech:** noun
**Core meaning (English):** a component that directs events to destinations according to type, attributes, or subscription rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component định tuyến event theo type, attribute hoặc rule subscription.
**Grammar & collocations:** `event-router rule` — rule; `route a payment event` — định tuyến.
**Examples:** `The event router sent fraud signals to the risk stream and ordinary payments to settlement.` → Router tách fraud và payment thường.
**Liên kết tiếng Hàn:** `이벤트 라우터`.

## 18. subscription filter /səbˈskrɪpʃən ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a predicate that determines which published events a subscriber receives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** predicate quyết định subscriber nhận event nào.
**Grammar & collocations:** `subscription-filter expression` — biểu thức; `exclude test events` — loại.
**Examples:** `The subscription filter accepted only completed shipments from the European region.` → Filter chỉ nhận shipment hoàn tất ở châu Âu.
**Liên kết tiếng Hàn:** `구독 필터`.

## 19. delivery attempt /dɪˈlɪvəri əˈtempt/
**Part of speech:** noun
**Core meaning (English):** one recorded effort to send an event to its destination.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một lần thử được ghi nhận để gửi event đến đích.
**Grammar & collocations:** `delivery-attempt counter` — bộ đếm; `back off after a failed attempt` — lùi.
**Examples:** `The delivery attempt counter reached five before the message entered quarantine.` → Counter đạt năm trước khi message vào quarantine.
**Liên kết tiếng Hàn:** `전달 시도`.

## 20. replay horizon /ˈriːpleɪ həˈraɪzən/
**Part of speech:** noun
**Core meaning (English):** the oldest point in history from which a stream still permits events to be replayed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc cũ nhất mà stream còn cho phép replay event.
**Grammar & collocations:** `replay-horizon policy` — policy; `retain a longer history` — lưu.
**Examples:** `The replay horizon covered ninety days, which was enough to rebuild the seasonal report.` → Horizon 90 ngày đủ dựng report mùa vụ.
**Liên kết tiếng Hàn:** `재생 범위`.

## Review in context

An **event envelope** enters a system where **consumer lag** reveals processing distance. A **deduplication window**, **dead-letter topic**, and **replay cursor** make failure handling explicit, while a **delivery guarantee** and **ordering key** define behavior. A **fan-out topology** serves many consumers; a **stream join**, **watermark frontier**, **temporal skew**, and **late-arriving event** shape time semantics. A **compaction topic** rebuilds state, but an **exactly-once boundary** states where that promise ends. An **outbox relay** publishes committed work, an **inbox table** records receipt, an **event router** and **subscription filter** choose destinations, each **delivery attempt** is tracked, and a **replay horizon** limits history.

**Bản dịch tiếng Việt:** **Event envelope** đi vào hệ thống nơi **consumer lag** cho biết khoảng cách xử lý. **Deduplication window**, **dead-letter topic** và **replay cursor** làm rõ xử lý lỗi, còn **delivery guarantee** và **ordering key** định nghĩa hành vi. **Fan-out topology** phục vụ nhiều consumer; **stream join**, **watermark frontier**, **temporal skew** và **late-arriving event** định hình ngữ nghĩa thời gian. **Compaction topic** dựng lại state, nhưng **exactly-once boundary** nói rõ lời hứa kết thúc ở đâu. **Outbox relay** publish công việc đã commit, **inbox table** ghi nhận receipt, **event router** và **subscription filter** chọn đích, từng **delivery attempt** được theo dõi, còn **replay horizon** giới hạn lịch sử.
