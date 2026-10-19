# C2 Vocabulary — Warehouse robotics and order fulfillment

This lesson follows warehouse work from inventory placement and robot routing to picking, loading, and exception handling. The network is **warehouse robot → goods-to-person → person-to-goods → automated storage and retrieval → storage slotting → putaway policy → picking policy → order batching → wave picking → zone picking → pick path optimization → congestion-aware routing → aisle reservation → dock scheduling → cross-docking → inventory localization → cycle counting → stockout prediction → order fulfillment → exception handling**.

## 1. warehouse robot /ˈwerhaʊs ˈroʊbɑːt/
**Part of speech:** noun
**Core meaning (English):** a robot that moves, stores, retrieves, counts, or presents goods in a warehouse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** robot di chuyển, lưu, lấy, đếm hoặc đưa hàng trong warehouse.
**Grammar & collocations:** `warehouse-robot fleet` — fleet; `move a load carrier` — di chuyển load carrier.
**Examples:** `The warehouse robot carried a tote from the reserve rack to the packing station.` → Warehouse robot mang tote từ rack dự trữ tới packing station.
**Liên kết tiếng Hàn:** `창고 로봇`.

## 2. goods-to-person /ɡʊdz tə ˈpɜːrsən/
**Part of speech:** noun
**Core meaning (English):** a fulfillment arrangement in which automation brings requested goods to a stationary worker.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình fulfillment nơi automation đưa hàng cần tới worker đứng yên.
**Grammar & collocations:** `goods-to-person system` — system; `present a tote at a station` — đưa tote tới station.
**Examples:** `Goods-to-person reduced walking because the robot delivered every requested bin.` → Goods-to-person giảm việc đi bộ vì robot đưa từng bin được yêu cầu.
**Liên kết tiếng Hàn:** `상품 대 사람`.

## 3. person-to-goods /ˈpɜːrsən tə ɡʊdz/
**Part of speech:** noun
**Core meaning (English):** a fulfillment arrangement in which a worker travels to storage locations to collect goods.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình fulfillment nơi worker đi tới location lưu trữ để lấy hàng.
**Grammar & collocations:** `person-to-goods workflow` — workflow; `walk a pick route` — đi theo pick route.
**Examples:** `The site used person-to-goods for irregular items that robots could not grasp reliably.` → Site dùng person-to-goods cho item bất thường robot không grasp đáng tin.
**Liên kết tiếng Hàn:** `사람 대 상품`.

## 4. automated storage and retrieval /ˈɔːtəmeɪtɪd ˈstɔːrɪdʒ ænd rɪˈtriːvəl/
**Part of speech:** noun
**Core meaning (English):** automated placement and retrieval of inventory within a structured storage system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đặt và lấy inventory tự động trong storage system có cấu trúc.
**Grammar & collocations:** `automated-storage-and-retrieval system` — system; `retrieve a pallet from a rack` — lấy pallet từ rack.
**Examples:** `Automated storage and retrieval kept high-value components in a controlled-access aisle.` → Automated storage and retrieval giữ component giá trị cao trong aisle kiểm soát access.
**Liên kết tiếng Hàn:** `자동 보관 및 검색`.

## 5. storage slotting /ˈstɔːrɪdʒ ˈslɑːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** deciding where inventory should be placed to improve travel, handling, and replenishment efficiency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định chỗ đặt inventory để cải thiện travel, handling và replenishment.
**Grammar & collocations:** `storage-slotting algorithm` — algorithm; `place fast movers near dispatch` — đặt hàng chạy nhanh gần dispatch.
**Examples:** `Storage slotting moved popular small parts closer to the ergonomic picking stations.` → Storage slotting đưa part nhỏ phổ biến gần picking station ergonomic.
**Liên kết tiếng Hàn:** `보관 슬롯 배치`.

## 6. putaway policy /ˈpʊtəweɪ ˈpɑːləsi/
**Part of speech:** noun
**Core meaning (English):** rules for assigning newly received goods to storage locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule gán hàng mới nhận vào storage location.
**Grammar & collocations:** `putaway-policy constraint` — constraint; `assign an inbound pallet` — gán pallet inbound.
**Examples:** `The putaway policy kept chemicals separate from food packaging.` → Putaway policy giữ chemical tách khỏi food packaging.
**Liên kết tiếng Hàn:** `입고 적치 정책`.

## 7. picking policy /ˈpɪkɪŋ ˈpɑːləsi/
**Part of speech:** noun
**Core meaning (English):** rules for selecting which inventory unit to collect for an order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chọn inventory unit nào để lấy cho order.
**Grammar & collocations:** `picking-policy rule` — rule; `pick the oldest eligible lot` — lấy lot đủ điều kiện cũ nhất.
**Examples:** `The picking policy selected the lot with the earliest expiry date.` → Picking policy chọn lot có expiry date sớm nhất.
**Liên kết tiếng Hàn:** `피킹 정책`.

## 8. order batching /ˈɔːrdər ˈbætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** grouping several customer orders so they can be processed together efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp nhiều customer order để process cùng nhau hiệu quả.
**Grammar & collocations:** `order-batching heuristic` — heuristic; `group orders by destination` — gộp order theo destination.
**Examples:** `Order batching combined four nearby deliveries into one robot route.` → Order batching gộp bốn delivery gần nhau vào một robot route.
**Liên kết tiếng Hàn:** `주문 배칭`.

## 9. wave picking /weɪv ˈpɪkɪŋ/
**Part of speech:** noun
**Core meaning (English):** releasing a planned group of picking work at a scheduled time or operational wave.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát hành một group picking work theo time hoặc wave vận hành định trước.
**Grammar & collocations:** `wave-picking schedule` — schedule; `release a morning wave` — phát hành wave buổi sáng.
**Examples:** `Wave picking released urgent medical orders before the afternoon dispatch window.` → Wave picking phát hành medical order khẩn trước dispatch window buổi chiều.
**Liên kết tiếng Hàn:** `웨이브 피킹`.

## 10. zone picking /zoʊn ˈpɪkɪŋ/
**Part of speech:** noun
**Core meaning (English):** assigning workers or robots to defined warehouse zones for collecting items.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán worker hoặc robot vào zone warehouse cụ thể để lấy item.
**Grammar & collocations:** `zone-picking boundary` — boundary; `pass a tote between zones` — chuyền tote giữa zone.
**Examples:** `Zone picking reduced cross-traffic by keeping each robot in a narrow product family.` → Zone picking giảm cross-traffic bằng cách giữ mỗi robot trong product family hẹp.
**Liên kết tiếng Hàn:** `구역 피킹`.

## 11. pick path optimization /pɪk pæθ ˌɑːptəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** optimizing the route used to collect the items in an order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu route dùng để lấy item trong order.
**Grammar & collocations:** `pick-path-optimization solver` — solver; `minimize travel distance` — tối thiểu hóa travel distance.
**Examples:** `Pick path optimization avoided a long return to the first aisle.` → Pick path optimization tránh quay lại aisle đầu quá xa.
**Liên kết tiếng Hàn:** `피킹 경로 최적화`.

## 12. congestion-aware routing /kənˈdʒestʃən əˈwer ˈruːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** routing that accounts for expected traffic and delay in shared paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** routing tính tới traffic và delay dự kiến trên path chung.
**Grammar & collocations:** `congestion-aware-routing cost` — cost; `avoid a crowded cross-aisle` — tránh cross-aisle đông.
**Examples:** `Congestion-aware routing sent the loaded robot through a longer but empty aisle.` → Congestion-aware routing đưa robot có tải qua aisle dài hơn nhưng trống.
**Liên kết tiếng Hàn:** `혼잡 인지 라우팅`.

## 13. aisle reservation /aɪl ˌrezərˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** temporarily claiming a passage so a robot or load can move through it without conflict.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạm giữ một passage để robot hoặc load đi qua không conflict.
**Grammar & collocations:** `aisle-reservation token` — token; `reserve a crossing window` — giữ window băng qua.
**Examples:** `Aisle reservation gave the tall pallet exclusive access to the narrow turn.` → Aisle reservation cho pallet cao quyền đi riêng ở khúc cua hẹp.
**Liên kết tiếng Hàn:** `통로 예약`.

## 14. dock scheduling /dɑːk ˈskedʒuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning when vehicles, robots, or workers use loading and unloading docks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** plan time vehicle, robot hoặc worker dùng loading/unloading dock.
**Grammar & collocations:** `dock-scheduling constraint` — constraint; `assign a delivery window` — gán delivery window.
**Examples:** `Dock scheduling staggered arrivals so two autonomous pallet movers would not queue together.` → Dock scheduling lệch arrival để hai pallet mover autonomous không xếp hàng cùng lúc.
**Liên kết tiếng Hàn:** `도크 일정 관리`.

## 15. cross-docking /ˈkrɔːs ˌdɑːkɪŋ/
**Part of speech:** noun
**Core meaning (English):** moving incoming goods directly toward outgoing shipment with little or no storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển hàng inbound thẳng tới shipment outbound với rất ít hoặc không storage.
**Grammar & collocations:** `cross-docking lane` — lane; `transfer an inbound pallet directly` — chuyển pallet inbound trực tiếp.
**Examples:** `Cross-docking sent the labeled cartons from receiving to the outbound trailer.` → Cross-docking đưa carton có nhãn từ receiving tới trailer outbound.
**Liên kết tiếng Hàn:** `크로스 도킹`.

## 16. inventory localization /ˈɪnvəntɔːri ˌloʊkələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** determining the current physical location of a stored item or load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định physical location hiện tại của item hoặc load lưu trữ.
**Grammar & collocations:** `inventory-localization confidence` — confidence; `locate a misplaced tote` — locate tote để sai chỗ.
**Examples:** `Inventory localization found the missing carton on a temporary overflow rack.` → Inventory localization tìm carton mất trên overflow rack tạm.
**Liên kết tiếng Hàn:** `재고 위치 추정`.

## 17. cycle counting /ˈsaɪkəl ˈkaʊntɪŋ/
**Part of speech:** noun
**Core meaning (English):** repeatedly counting selected inventory items to detect discrepancies without a full stocktake.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đếm lặp item được chọn để phát hiện discrepancy mà không full stocktake.
**Grammar & collocations:** `cycle-counting schedule` — schedule; `verify a high-value location` — verify location giá trị cao.
**Examples:** `Cycle counting sent a small robot to verify the fast-moving bin every evening.` → Cycle counting gửi robot nhỏ verify bin chạy nhanh mỗi tối.
**Liên kết tiếng Hàn:** `순환 재고 조사`.

## 18. stockout prediction /ˈstɑːkaʊt prɪˈdɪkʃən/
**Part of speech:** noun
**Core meaning (English):** forecasting when available inventory will fall below the amount needed to fulfill demand.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự báo lúc inventory available xuống dưới amount cần fulfill demand.
**Grammar & collocations:** `stockout-prediction alert` — alert; `forecast a replenishment date` — dự báo date replenishment.
**Examples:** `Stockout prediction triggered a replenishment mission before the weekend rush.` → Stockout prediction kích hoạt mission replenishment trước đợt cuối tuần.
**Liên kết tiếng Hàn:** `재고 부족 예측`.

## 19. order fulfillment /ˈɔːrdər fʊlˈfɪlmənt/
**Part of speech:** noun
**Core meaning (English):** the complete process of receiving, picking, packing, and delivering a customer order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** toàn bộ process nhận, pick, pack và deliver customer order.
**Grammar & collocations:** `order-fulfillment metric` — metric; `complete a same-day order` — hoàn thành order trong ngày.
**Examples:** `Order fulfillment slowed when the packing station lost its label printer.` → Order fulfillment chậm lại khi packing station mất label printer.
**Liên kết tiếng Hàn:** `주문 처리`.

## 20. exception handling /ɪkˈsepʃən ˈhændlɪŋ/
**Part of speech:** noun
**Core meaning (English):** detecting, classifying, and resolving cases that do not follow the normal fulfillment process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** detect, classify và resolve case lệch process fulfillment bình thường.
**Grammar & collocations:** `exception-handling workflow` — workflow; `escalate an unrecognized barcode` — escalate barcode không nhận.
**Examples:** `Exception handling routed the damaged carton to a manual inspection station.` → Exception handling đưa carton hỏng tới station inspection thủ công.
**Liên kết tiếng Hàn:** `예외 처리`.

## Review in context

A **warehouse robot** supports either **goods-to-person** or **person-to-goods** work within an **automated storage and retrieval** system. **Storage slotting**, a **putaway policy**, and a **picking policy** position inventory; **order batching**, **wave picking**, and **zone picking** organize demand. **Pick path optimization**, **congestion-aware routing**, and **aisle reservation** keep movement efficient, while **dock scheduling** and **cross-docking** coordinate shipments. **Inventory localization**, **cycle counting**, and **stockout prediction** protect accuracy. **Order fulfillment** completes the customer process, and **exception handling** routes anything that normal automation cannot resolve.

**Bản dịch tiếng Việt:** **Warehouse robot** hỗ trợ **goods-to-person** hoặc **person-to-goods** trong **automated storage and retrieval**. **Storage slotting**, **putaway policy** và **picking policy** sắp xếp inventory; **order batching**, **wave picking** và **zone picking** tổ chức nhu cầu. **Pick path optimization**, **congestion-aware routing** và **aisle reservation** giữ movement hiệu quả, còn **dock scheduling** và **cross-docking** phối hợp shipment. **Inventory localization**, **cycle counting** và **stockout prediction** bảo vệ accuracy. **Order fulfillment** hoàn tất process customer, còn **exception handling** chuyển mọi thứ automation bình thường không giải quyết được.
