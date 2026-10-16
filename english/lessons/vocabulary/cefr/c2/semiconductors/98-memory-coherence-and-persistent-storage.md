# C2 Vocabulary — Memory coherence and persistent storage

This lesson connects coherent caching, ordering, persistent writes, and flash-management behavior across a modern storage stack.

Flow: **cache-coherence probe → snoop filter → directory sharer → writeback eviction → dirty-line merge → prefetch stream → ordering barrier → atomicity window → persistent-memory flush → epoch barrier → log-structured write → wear-leveling map → overprovisioning reserve → trim command → read reclaim → metadata checkpoint → flush dependency → recovery epoch → eviction storm → durability budget**.

## 1. cache-coherence probe /kæʃ koʊˈhɪrəns proʊb/
**Part of speech:** noun
**Core meaning (English):** a request that checks or obtains the current coherent state of a cache line.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request kiểm tra hoặc lấy state coherent hiện tại của cache line.
**Grammar & collocations:** `cache-coherence-probe latency` — latency; `query a remote cache` — query cache remote.
**Examples:** `The cache-coherence probe found a modified line in another core's cache.` → Probe coherence-cache tìm line modified trong cache core khác.
**Liên kết tiếng Hàn:** `캐시 일관성 프로브`.

## 2. snoop filter /snuːp ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a structure that records which caches may contain a line so unnecessary coherence probes can be avoided.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** structure ghi cache nào có thể chứa line để tránh probe coherence thừa.
**Grammar & collocations:** `snoop-filter hit` — hit; `prune a broadcast probe` — giảm probe broadcast.
**Examples:** `The snoop filter avoided probing idle cores during the streaming read.` → Filter snoop tránh probe core idle trong read streaming.
**Liên kết tiếng Hàn:** `스눕 필터`.

## 3. directory sharer /dəˈrektəri ˈʃerər/
**Part of speech:** noun
**Core meaning (English):** a directory record identifying caches that currently share a coherent copy of a line.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record directory xác định cache đang share bản coherent của line.
**Grammar & collocations:** `directory-sharer vector` — vector; `track a shared line` — theo dõi line shared.
**Examples:** `The directory sharer vector shrank after two cores invalidated their copies.` → Vector sharer-directory thu hẹp sau khi hai core invalidate copy.
**Liên kết tiếng Hàn:** `디렉터리 공유자`.

## 4. writeback eviction /ˈraɪtbæk ɪˈvɪkʃən/
**Part of speech:** noun
**Core meaning (English):** removal of a modified cache line while first writing its newest value to lower storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loại cache line modified nhưng trước đó ghi value mới xuống storage thấp hơn.
**Grammar & collocations:** `writeback-eviction queue` — queue; `drain a dirty line` — xả dirty line.
**Examples:** `Writeback eviction stalled when the lower-level queue was full.` → Eviction writeback bị stall khi queue level thấp đầy.
**Liên kết tiếng Hàn:** `라이트백 축출`.

## 5. dirty-line merge /ˈdɜːrti laɪn mɜːrdʒ/
**Part of speech:** noun
**Core meaning (English):** combining updates from a modified cache line before sending one consolidated write downstream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp update của cache line modified trước khi gửi một write consolidated xuống dưới.
**Grammar & collocations:** `dirty-line-merge buffer` — buffer; `coalesce partial writes` — gộp partial write.
**Examples:** `Dirty-line merge reduced bus traffic from many narrow stores.` → Merge line-dirty giảm bus traffic từ nhiều store hẹp.
**Liên kết tiếng Hàn:** `더티 라인 병합`.

## 6. prefetch stream /ˈpriːfetʃ striːm/
**Part of speech:** noun
**Core meaning (English):** a predicted sequence of future memory accesses brought closer before demand arrives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequence access memory tương lai được dự đoán và đưa gần trước demand.
**Grammar & collocations:** `prefetch-stream detector` — detector; `hide memory latency` — che latency memory.
**Examples:** `The prefetch stream polluted the cache when the branch changed direction.` → Stream prefetch làm ô nhiễm cache khi branch đổi hướng.
**Liên kết tiếng Hàn:** `프리페치 스트림`.

## 7. ordering barrier /ˈɔːrdərɪŋ ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** an operation that prevents selected memory actions from being observed out of order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation ngăn memory action được observe sai thứ tự.
**Grammar & collocations:** `ordering-barrier cost` — cost; `enforce visibility order` — áp thứ tự visibility.
**Examples:** `The ordering barrier made the flag visible only after the data write completed.` → Barrier ordering làm flag visible chỉ sau data write hoàn tất.
**Liên kết tiếng Hàn:** `순서 장벽`.

## 8. atomicity window /ˌætəˈmɪsəti ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the interval during which a multi-step update must appear indivisible to observers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interval update nhiều bước phải xuất hiện không thể chia nhỏ với observer.
**Grammar & collocations:** `atomicity-window violation` — violation; `protect a compound update` — bảo vệ update compound.
**Examples:** `A crash inside the atomicity window left the index and value inconsistent.` → Crash trong window atomicity làm index và value không nhất quán.
**Liên kết tiếng Hàn:** `원자성 구간`.

## 9. persistent-memory flush /pərˈsɪstənt ˈmeməri flʌʃ/
**Part of speech:** noun
**Core meaning (English):** an operation that pushes modified persistent-memory data through volatile buffers to durable media.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation đẩy persistent-memory data modified qua buffer volatile tới media bền.
**Grammar & collocations:** `persistent-memory-flush fence` — fence; `drain a persistence domain` — xả persistence domain.
**Examples:** `The persistent-memory flush completed before the transaction acknowledged success.` → Flush memory-persistent hoàn tất trước transaction báo thành công.
**Liên kết tiếng Hàn:** `영속 메모리 플러시`.

## 10. epoch barrier /ˈiːpɑːk ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** a synchronization point separating updates that belong to different recovery or consistency epochs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** synchronization point tách update thuộc các epoch recovery hoặc consistency khác.
**Grammar & collocations:** `epoch-barrier protocol` — protocol; `close a recovery generation` — đóng generation recovery.
**Examples:** `The epoch barrier prevented a replay from mixing old and new metadata.` → Barrier epoch ngăn replay trộn metadata cũ và mới.
**Liên kết tiếng Hàn:** `에포크 장벽`.

## 11. log-structured write /lɔːɡ ˈstrʌktʃərd raɪt/
**Part of speech:** noun
**Core meaning (English):** a write that appends new versions sequentially rather than updating old locations in place.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** write append version mới tuần tự thay vì update tại chỗ cũ.
**Grammar & collocations:** `log-structured-write segment` — segment; `append a new record` — append record mới.
**Examples:** `The log-structured write simplified crash recovery but created cleaning work.` → Write structured-log đơn giản recovery crash nhưng tạo cleaning work.
**Liên kết tiếng Hàn:** `로그 구조화 쓰기`.

## 12. wear-leveling map /wer ˈlevəlɪŋ mæp/
**Part of speech:** noun
**Core meaning (English):** a mapping that spreads writes across physical storage locations to balance their endurance consumption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mapping trải write qua location vật lý để cân bằng endurance consumption.
**Grammar & collocations:** `wear-leveling-map update` — update; `rotate a hot logical block` — xoay block logical nóng.
**Examples:** `The wear-leveling map moved a hot log away from an aging flash block.` → Map leveling-wear chuyển log nóng khỏi block flash aging.
**Liên kết tiếng Hàn:** `웨어 레벨링 맵`.

## 13. overprovisioning reserve /ˌoʊvərprəˈvɪʒənɪŋ rɪˈzɜːrv/
**Part of speech:** noun
**Core meaning (English):** hidden storage capacity reserved for replacement, garbage collection, and endurance management.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** capacity storage ẩn dành cho replacement, garbage collection và endurance.
**Grammar & collocations:** `overprovisioning-reserve ratio` — ratio; `absorb retired blocks` — hấp thụ block retired.
**Examples:** `The overprovisioning reserve preserved write performance after many blocks were retired.` → Reserve overprovisioning giữ write performance sau khi nhiều block retired.
**Liên kết tiếng Hàn:** `오버프로비저닝 예비 공간`.

## 14. trim command /trɪm kəˈmænd/
**Part of speech:** noun
**Core meaning (English):** a command telling storage which logical ranges no longer contain useful data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** command báo storage range logical nào không còn data hữu ích.
**Grammar & collocations:** `trim-command queue` — queue; `mark stale pages` — đánh dấu page cũ.
**Examples:** `The trim command let garbage collection skip invalid pages.` → Command trim cho garbage collection bỏ qua page invalid.
**Liên kết tiếng Hàn:** `트림 명령`.

## 15. read reclaim /riːd rɪˈkleɪm/
**Part of speech:** noun
**Core meaning (English):** refreshing data by reading a weak location and rewriting it to a stronger physical location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** refresh data bằng đọc location yếu và ghi lại vào location vật lý mạnh hơn.
**Grammar & collocations:** `read-reclaim threshold` — threshold; `refresh a marginal page` — refresh page marginal.
**Examples:** `Read reclaim moved a drifting page before it exhausted ECC margin.` → Reclaim read chuyển page drift trước khi hết margin ECC.
**Liên kết tiếng Hàn:** `읽기 재확보`.

## 16. metadata checkpoint /ˈmetədeɪtə ˈtʃekpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a durable snapshot of mapping and control metadata used to shorten recovery.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** snapshot durable của metadata mapping và control giúp rút ngắn recovery.
**Grammar & collocations:** `metadata-checkpoint interval` — interval; `persist a mapping snapshot` — persist snapshot mapping.
**Examples:** `The metadata checkpoint limited how far the journal had to be replayed.` → Checkpoint metadata giới hạn khoảng journal cần replay.
**Liên kết tiếng Hàn:** `메타데이터 체크포인트`.

## 17. flush dependency /flʌʃ dɪˈpendənsi/
**Part of speech:** noun
**Core meaning (English):** an ordering relationship requiring one write to become durable before another is acknowledged.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ order yêu cầu một write durable trước khi write khác acknowledge.
**Grammar & collocations:** `flush-dependency graph` — graph; `preserve commit ordering` — giữ thứ tự commit.
**Examples:** `The flush dependency kept the pointer durable before the new payload became visible.` → Dependency flush giữ pointer durable trước khi payload mới visible.
**Liên kết tiếng Hàn:** `플러시 의존성`.

## 18. recovery epoch /rɪˈkʌvəri ˈiːpɑːk/
**Part of speech:** noun
**Core meaning (English):** a bounded generation of writes and metadata that can be recovered as one consistency unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** generation giới hạn của write và metadata recover như một consistency unit.
**Grammar & collocations:** `recovery-epoch identifier` — identifier; `discard an incomplete generation` — bỏ generation chưa đủ.
**Examples:** `The recovery epoch excluded writes that began after the power-loss marker.` → Epoch recovery loại write bắt đầu sau marker power-loss.
**Liên kết tiếng Hàn:** `복구 에포크`.

## 19. eviction storm /ɪˈvɪkʃən stɔːrm/
**Part of speech:** noun
**Core meaning (English):** a burst of cache evictions that overwhelms lower storage or memory bandwidth.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** burst cache eviction làm quá tải storage thấp hoặc bandwidth memory.
**Grammar & collocations:** `eviction-storm backpressure` — backpressure; `throttle a cache flush` — throttle flush cache.
**Examples:** `An eviction storm followed the phase change and saturated the writeback queue.` → Storm eviction xảy ra sau phase change và làm queue writeback bão hòa.
**Liên kết tiếng Hàn:** `축출 폭풍`.

## 20. durability budget /ˌdjʊrəˈbɪləti ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the allowed amount of write, recovery, or endurance cost available before a durability target is threatened.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức cost write, recovery hoặc endurance cho phép trước khi target durability bị đe dọa.
**Grammar & collocations:** `durability-budget threshold` — threshold; `trade recovery work against endurance` — cân recovery với endurance.
**Examples:** `The long reclaim pass consumed the durability budget reserved for the next power-loss event.` → Pass reclaim dài tiêu budget durability dành cho power-loss event kế.
**Liên kết tiếng Hàn:** `내구성 예산`.

## Review in context

A **cache-coherence probe**, **snoop filter**, and **directory sharer** coordinate **writeback eviction**, **dirty-line merge**, and a **prefetch stream** under an **ordering barrier** and **atomicity window**. A **persistent-memory flush**, **epoch barrier**, and **log-structured write** protect durability; a **wear-leveling map**, **overprovisioning reserve**, **trim command**, and **read reclaim** manage flash life. A **metadata checkpoint**, **flush dependency**, **recovery epoch**, and **eviction storm** must fit the **durability budget**.

**Bản dịch tiếng Việt:** **Cache-coherence probe**, **snoop filter** và **directory sharer** phối hợp **writeback eviction**, **dirty-line merge** và **prefetch stream** dưới **ordering barrier** và **atomicity window**. **Persistent-memory flush**, **epoch barrier** và **log-structured write** bảo vệ durability; **wear-leveling map**, **overprovisioning reserve**, **trim command** và **read reclaim** quản lý tuổi thọ flash. **Metadata checkpoint**, **flush dependency**, **recovery epoch** và **eviction storm** phải nằm trong **durability budget**.
