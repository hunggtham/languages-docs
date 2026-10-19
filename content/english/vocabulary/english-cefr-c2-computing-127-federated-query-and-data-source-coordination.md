# C2 Vocabulary — Federated query and data-source coordination

This lesson follows a query across independent data sources from planning and predicate delegation through movement, failure, and result assembly.

Flow: **federated query → predicate delegation → remote scan → result shipping → connector pushdown → source adapter → catalog bridge → cross-source join → semantic mismatch → exchange boundary → spill locality → source throttling → federated cost model → snapshot alignment → freshness skew → source capability → partial failure → query coordinator → remote predicate → source fragment**.

## 1. federated query /ˈfedəreɪtɪd ˈkwɪəri/
**Part of speech:** noun
**Core meaning (English):** a query whose execution combines data from separately managed sources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** query kết hợp data từ các source được quản lý riêng.
**Grammar & collocations:** `federated-query plan` — plan; `combine warehouse and operational data` — gộp.
**Examples:** `The federated query joined billing data with a live customer service view.` → Query liên kết billing với view service live.
**Liên kết tiếng Hàn:** `연합 쿼리`.

## 2. predicate delegation /ˈpredɪkət ˌdeləˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** sending a filter condition to a source so it can discard irrelevant rows before returning data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi filter xuống source để source bỏ row không liên quan trước khi trả.
**Grammar & collocations:** `predicate-delegation rule` — rule; `evaluate a filter remotely` — đánh giá.
**Examples:** `Predicate delegation reduced network traffic by filtering dates inside the source database.` → Delegation giảm traffic bằng filter trong database nguồn.
**Liên kết tiếng Hàn:** `술어 위임`.

## 3. remote scan /rɪˈmoʊt skæn/
**Part of speech:** noun
**Core meaning (English):** reading data from a source outside the engine coordinating the query.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đọc data từ source bên ngoài engine điều phối query.
**Grammar & collocations:** `remote-scan cost` — cost; `scan a source partition` — scan.
**Examples:** `The plan avoided a remote scan of the historical table by using its local summary.` → Plan tránh scan remote bằng summary local.
**Liên kết tiếng Hàn:** `원격 스캔`.

## 4. result shipping /rɪˈzʌlt ˈʃɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** transferring intermediate or final query results from one execution site to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển result trung gian/cuối từ execution site này sang site khác.
**Grammar & collocations:** `result-shipping volume` — volume; `ship a compressed relation` — chuyển.
**Examples:** `Result shipping moved only the aggregated totals instead of every source row.` → Shipping chỉ chuyển tổng aggregate.
**Liên kết tiếng Hàn:** `결과 전송`.

## 5. connector pushdown /kəˈnektər ˈpʊʃdaʊn/
**Part of speech:** noun
**Core meaning (English):** executing a supported part of a query inside the connector or source system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy phần query được hỗ trợ ngay trong connector/source.
**Grammar & collocations:** `connector-pushdown capability` — capability; `push aggregation into a source` — đẩy.
**Examples:** `Connector pushdown let the object-store reader perform projection before transfer.` → Pushdown cho reader projection trước transfer.
**Liên kết tiếng Hàn:** `커넥터 푸시다운`.

## 6. source adapter /sɔːrs əˈdæptər/
**Part of speech:** noun
**Core meaning (English):** a component translating a source's protocol, schema, and behavior into the federated engine's interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component dịch protocol, schema và behavior source sang interface engine.
**Grammar & collocations:** `source-adapter contract` — contract; `normalize a source response` — chuẩn hóa.
**Examples:** `The source adapter translated the partner's cursor protocol into the engine's scan interface.` → Adapter đổi cursor protocol sang scan interface.
**Liên kết tiếng Hàn:** `소스 어댑터`.

## 7. catalog bridge /ˈkætəlɒɡ brɪdʒ/
**Part of speech:** noun
**Core meaning (English):** an integration layer exposing metadata from one catalog to another query or governance system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** layer tích hợp đưa metadata catalog này sang hệ query/governance khác.
**Grammar & collocations:** `catalog-bridge mapping` — ánh xạ; `expose a foreign table` — đưa ra.
**Examples:** `The catalog bridge exposed ownership and freshness metadata from the operational registry.` → Bridge đưa metadata owner và freshness.
**Liên kết tiếng Hàn:** `카탈로그 브리지`.

## 8. cross-source join /ˌkrɒs sɔːrs dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** joining rows that originate in different independently managed data systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** join row đến từ các hệ data quản lý độc lập.
**Grammar & collocations:** `cross-source-join key` — key; `match records across systems` — ghép.
**Examples:** `The cross-source join matched product IDs from the warehouse and the commerce platform.` → Join ghép product ID của hai system.
**Liên kết tiếng Hàn:** `소스 간 조인`.

## 9. semantic mismatch /sɪˈmæntɪk ˈmɪsmætʃ/
**Part of speech:** noun
**Core meaning (English):** a difference in what similarly named fields or values mean across sources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khác biệt ý nghĩa của field/value tên giống nhau giữa source.
**Grammar & collocations:** `semantic-mismatch warning` — cảnh báo; `reconcile a status definition` — đối soát.
**Examples:** `A semantic mismatch made “active” mean paid in one source and merely registered in another.` → Mismatch khiến active có hai nghĩa.
**Liên kết tiếng Hàn:** `의미 불일치`.

## 10. exchange boundary /ɪksˈtʃeɪndʒ ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** the point where data changes execution ownership, format, or transport between query stages or sources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm data đổi ownership, format hoặc transport giữa stage/source.
**Grammar & collocations:** `exchange-boundary buffer` — buffer; `serialize an intermediate result` — serialize.
**Examples:** `The exchange boundary converted the source cursor into a distributed batch.` → Boundary đổi cursor source thành batch phân tán.
**Liên kết tiếng Hàn:** `교환 경계`.

## 11. spill locality /spɪl loʊˈkæləti/
**Part of speech:** noun
**Core meaning (English):** the degree to which temporary query spill data remains near the operator that will read it again.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức spill tạm nằm gần operator sẽ đọc lại.
**Grammar & collocations:** `spill-locality preference` — ưu tiên; `keep temporary data on the source site` — giữ.
**Examples:** `Spill locality prevented a remote join from moving its temporary files across regions.` → Locality ngăn chuyển file tạm qua vùng.
**Liên kết tiếng Hàn:** `스필 지역성`.

## 12. source throttling /sɔːrs ˈθrɒtlɪŋ/
**Part of speech:** noun
**Core meaning (English):** deliberately limiting query pressure placed on a participating source.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chủ động giới hạn áp lực query lên source tham gia.
**Grammar & collocations:** `source-throttling limit` — giới hạn; `protect an operational database` — bảo vệ.
**Examples:** `Source throttling slowed the report so customer transactions remained responsive.` → Throttling làm report chậm để transaction vẫn nhanh.
**Liên kết tiếng Hàn:** `소스 스로틀링`.

## 13. federated cost model /ˈfedəreɪtɪd kɒst ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** an optimizer model estimating computation, transfer, latency, and policy costs across independent sources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model ước tính compute, transfer, latency và policy cost nhiều source.
**Grammar & collocations:** `federated-cost-model estimate` — estimate; `compare two source plans` — so sánh.
**Examples:** `The federated cost model preferred a local aggregation because cross-region transfer was expensive.` → Model chọn aggregate local vì transfer đắt.
**Liên kết tiếng Hàn:** `연합 비용 모델`.

## 14. snapshot alignment /ˈsnæpʃɒt əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** coordinating source versions so a federated query compares data from compatible points in time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phối hợp version source để query so sánh data cùng thời điểm tương thích.
**Grammar & collocations:** `snapshot-alignment barrier` — barrier; `read matching committed versions` — đọc.
**Examples:** `Snapshot alignment prevented the report from joining yesterday's orders with today's customer state.` → Alignment ngăn join khác ngày.
**Liên kết tiếng Hàn:** `스냅샷 정렬`.

## 15. freshness skew /ˈfreʃnəs skjuː/
**Part of speech:** noun
**Core meaning (English):** a difference in how current the participating sources are when their results are combined.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch độ mới của source khi gộp result.
**Grammar & collocations:** `freshness-skew warning` — cảnh báo; `surface an outdated source` — làm lộ.
**Examples:** `Freshness skew made the customer count newer than the inventory count in the same dashboard.` → Skew khiến hai count khác độ mới.
**Liên kết tiếng Hàn:** `최신성 왜곡`.

## 16. source capability /sɔːrs ˌkeɪpəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** an operation, type, or performance feature that a participating source can support.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation, type hoặc feature performance source hỗ trợ được.
**Grammar & collocations:** `source-capability advertisement` — quảng bá; `negotiate supported predicates` — thương lượng.
**Examples:** `The planner checked source capability before delegating the window function.` → Planner check capability trước delegate window function.
**Liên kết tiếng Hàn:** `소스 기능`.

## 17. partial failure /ˈpɑːrʃəl ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** a condition in which some sources or stages fail while others continue responding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một số source/stage lỗi trong khi phần khác vẫn trả lời.
**Grammar & collocations:** `partial-failure policy` — policy; `return a bounded incomplete result` — trả.
**Examples:** `The partial failure policy allowed the dashboard to show cached totals with a warning.` → Policy cho dashboard hiện cache kèm cảnh báo.
**Liên kết tiếng Hàn:** `부분 장애`.

## 18. query coordinator /ˈkwɪəri koʊˈɔːrdəneɪtər/
**Part of speech:** noun
**Core meaning (English):** the component that plans, schedules, monitors, and assembles a query spanning multiple sources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component lập plan, schedule, monitor và gộp query nhiều source.
**Grammar & collocations:** `query-coordinator state` — state; `cancel a slow branch` — hủy.
**Examples:** `The query coordinator canceled the remote branch after the deadline budget was exhausted.` → Coordinator hủy branch khi hết budget.
**Liên kết tiếng Hàn:** `쿼리 코디네이터`.

## 19. remote predicate /rɪˈmoʊt ˈpredɪkət/
**Part of speech:** noun
**Core meaning (English):** a filter evaluated at a remote source rather than after rows arrive at the coordinating engine.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter được đánh giá tại source remote thay vì sau khi row đến engine.
**Grammar & collocations:** `remote-predicate pushdown` — pushdown; `reduce transferred rows` — giảm.
**Examples:** `The remote predicate removed inactive accounts before the federation exchange.` → Predicate remote bỏ account inactive trước exchange.
**Liên kết tiếng Hàn:** `원격 술어`.

## 20. source fragment /sɔːrs ˈfræɡmənt/
**Part of speech:** noun
**Core meaning (English):** the portion of a federated plan executed against one source or source partition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần plan federated chạy trên một source hoặc partition.
**Grammar & collocations:** `source-fragment status` — status; `retry one failed branch` — retry.
**Examples:** `The coordinator retried only the source fragment that lost its connection.` → Coordinator chỉ retry branch mất connection.
**Liên kết tiếng Hàn:** `소스 조각`.

## Review in context

A **federated query** uses **predicate delegation** and a **remote scan** to limit **result shipping**; **connector pushdown** and a **source adapter** translate work, while a **catalog bridge** exposes metadata. A **cross-source join** can suffer **semantic mismatch** at an **exchange boundary**; **spill locality** and **source throttling** control cost. A **federated cost model** weighs movement, **snapshot alignment** prevents incompatible versions, and **freshness skew** reveals uneven data. **Source capability** determines delegation, **partial failure** defines fallback, a **query coordinator** manages execution, a **remote predicate** filters early, and each **source fragment** reports status.

**Bản dịch tiếng Việt:** **Federated query** dùng **predicate delegation** và **remote scan** để giảm **result shipping**; **connector pushdown** và **source adapter** chuyển đổi công việc, còn **catalog bridge** đưa metadata ra. **Cross-source join** có thể gặp **semantic mismatch** ở **exchange boundary**; **spill locality** và **source throttling** kiểm soát cost. **Federated cost model** cân nhắc movement, **snapshot alignment** ngăn version lệch, còn **freshness skew** lộ độ mới không đều. **Source capability** quyết định delegation, **partial failure** định fallback, **query coordinator** quản lý chạy, **remote predicate** lọc sớm, và mỗi **source fragment** báo status.
