# C2 Vocabulary — Web performance and rendering

This lesson follows a browser request from resource priority and cache behavior through rendering, interaction metrics, and responsive delivery.

Flow: **critical rendering path → layout thrashing → compositor layer → paint invalidation → rendering waterfall → largest contentful paint → cumulative layout shift → first input delay → resource priority → preload hint → prefetch hint → cache revalidation → cache freshness window → service worker cache → edge cache key → request coalescing → connection warmup → font subsetting → image responsive source → long task attribution**.

## 1. critical rendering path /ˈkrɪtɪkəl ˈrendərɪŋ pɑːθ/
**Part of speech:** noun
**Core meaning (English):** the sequence of parsing, styling, layout, and painting required before a page can display meaningful content.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi parse, style, layout, paint trước khi trang hiển thị nội dung.
**Grammar & collocations:** `critical-rendering-path audit` — audit; `shorten first paint` — rút ngắn.
**Examples:** `The critical rendering path was blocked by a render-blocking stylesheet.` → Path bị stylesheet chặn.
**Liên kết tiếng Hàn:** `중요 렌더링 경로`.

## 2. layout thrashing /ˈleɪaʊt ˈθræʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** repeated alternating reads and writes that force the browser to recalculate layout many times.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đọc/ghi xen kẽ buộc browser tính layout lặp nhiều lần.
**Grammar & collocations:** `layout-thrashing pattern` — pattern; `batch DOM reads` — gom.
**Examples:** `Layout thrashing made the drag interaction stutter on lower-powered phones.` → Thrashing làm kéo giật.
**Liên kết tiếng Hàn:** `레이아웃 스래싱`.

## 3. compositor layer /kəmˈpɒzɪtər ˈleɪər/
**Part of speech:** noun
**Core meaning (English):** a separately managed visual layer that the browser can move or animate without repainting the whole page.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** layer riêng có thể animate mà không paint lại cả trang.
**Grammar & collocations:** `compositor-layer promotion` — promotion; `move a layer on the GPU` — di chuyển.
**Examples:** `The compositor layer let the carousel slide without recalculating text layout.` → Layer giúp carousel trượt mượt.
**Liên kết tiếng Hàn:** `합성기 레이어`.

## 4. paint invalidation /peɪnt ɪnˌvælɪˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** marking pixels as needing to be painted again after a visual change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đánh dấu pixel cần paint lại sau thay đổi visual.
**Grammar & collocations:** `paint-invalidation region` — region; `invalidate a damaged rectangle` — đánh dấu.
**Examples:** `Paint invalidation covered the whole card when only its icon had changed.` → Invalidation lan cả card.
**Liên kết tiếng Hàn:** `페인트 무효화`.

## 5. rendering waterfall /ˈrendərɪŋ ˈwɔːtərfɔːl/
**Part of speech:** noun
**Core meaning (English):** a time-ordered view of network, parsing, scripting, layout, and paint work during page loading.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timeline network, parse, script, layout và paint lúc load.
**Grammar & collocations:** `rendering-waterfall trace` — trace; `locate a blocking phase` — định vị.
**Examples:** `The rendering waterfall showed that a late font delayed the first heading.` → Waterfall lộ font làm trễ heading.
**Liên kết tiếng Hàn:** `렌더링 워터폴`.

## 6. largest contentful paint /ˈlɑːrdʒɪst kənˈtentfəl peɪnt/
**Part of speech:** noun
**Core meaning (English):** the time at which the largest visible text or image element finishes rendering in the viewport.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời điểm phần text/ảnh lớn nhất trong viewport render xong.
**Grammar & collocations:** `largest-contentful-paint metric` — metric; `optimize hero imagery` — tối ưu.
**Examples:** `Largest contentful paint improved after the hero image was served in a smaller format.` → LCP cải thiện khi ảnh nhỏ hơn.
**Liên kết tiếng Hàn:** `최대 콘텐츠풀 페인트`.

## 7. cumulative layout shift /ˈkjuːmjələtɪv ˈleɪaʊt ʃɪft/
**Part of speech:** noun
**Core meaning (English):** the accumulated amount of unexpected movement of visible page elements during loading.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tổng mức element trên trang di chuyển bất ngờ lúc load.
**Grammar & collocations:** `cumulative-layout-shift score` — score; `reserve image dimensions` — chừa.
**Examples:** `Cumulative layout shift fell when the ad slot received a fixed height.` → CLS giảm khi chừa chiều cao.
**Liên kết tiếng Hàn:** `누적 레이아웃 이동`.

## 8. first input delay /fɜːrst ˈɪnpʊt dɪˈleɪ/
**Part of speech:** noun
**Core meaning (English):** the delay between a user's first interaction and the browser's ability to respond.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian từ tương tác đầu tới khi browser phản hồi.
**Grammar & collocations:** `first-input-delay measurement` — measurement; `respond to a tap` — phản hồi.
**Examples:** `First input delay increased while a large script occupied the main thread.` → Delay tăng khi script chiếm main thread.
**Liên kết tiếng Hàn:** `첫 입력 지연`.

## 9. resource priority /rɪˈsɔːrs praɪˈɒrəti/
**Part of speech:** noun
**Core meaning (English):** the relative urgency assigned to downloading or processing a browser resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức khẩn cấp tương đối của resource khi tải/xử lý.
**Grammar & collocations:** `resource-priority hint` — hint; `prioritize a critical stylesheet` — ưu tiên.
**Examples:** `Resource priority moved the product image ahead of below-the-fold analytics.` → Priority đưa ảnh lên trước analytics.
**Liên kết tiếng Hàn:** `리소스 우선순위`.

## 10. preload hint /ˈpriːloʊd hɪnt/
**Part of speech:** noun
**Core meaning (English):** a declaration telling the browser to fetch a resource early because the page will soon need it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khai báo để browser tải resource sớm vì sắp cần.
**Grammar & collocations:** `preload-hint header` — header; `preload a font` — tải trước.
**Examples:** `The preload hint started the custom font before the stylesheet referenced it.` → Hint tải font trước stylesheet.
**Liên kết tiếng Hàn:** `프리로드 힌트`.

## 11. prefetch hint /ˈpriːfetʃ hɪnt/
**Part of speech:** noun
**Core meaning (English):** a low-priority signal that a resource may be needed by a future navigation or interaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu ưu tiên thấp cho resource có thể cần sau.
**Grammar & collocations:** `prefetch-hint policy` — policy; `warm a likely route` — làm ấm.
**Examples:** `The prefetch hint loaded the next article while the reader was idle.` → Hint tải bài tiếp khi rảnh.
**Liên kết tiếng Hàn:** `프리페치 힌트`.

## 12. cache revalidation /kæʃ ˌriːvælɪˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking with the origin whether a cached response is still current before reusing it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hỏi origin xem response cache còn mới trước khi dùng.
**Grammar & collocations:** `cache-revalidation request` — request; `validate an entity tag` — xác nhận.
**Examples:** `Cache revalidation returned a lightweight not-modified response.` → Revalidation trả response nhẹ.
**Liên kết tiếng Hàn:** `캐시 재검증`.

## 13. cache freshness window /kæʃ ˈfreʃnəs ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the interval during which a cached response can be served without contacting the origin.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian cache dùng được mà không hỏi origin.
**Grammar & collocations:** `cache-freshness-window policy` — policy; `extend a max-age` — kéo dài.
**Examples:** `The cache freshness window was shortened for rapidly changing inventory data.` → Window ngắn hơn với inventory đổi nhanh.
**Liên kết tiếng Hàn:** `캐시 신선도 창`.

## 14. service worker cache /ˈsɜːrvɪs ˈwɜːrkər kæʃ/
**Part of speech:** noun
**Core meaning (English):** a browser-managed cache controlled by a service worker for offline or customized request handling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache do service worker quản lý cho offline và request tùy chỉnh.
**Grammar & collocations:** `service-worker-cache strategy` — strategy; `serve a cached shell` — phục vụ.
**Examples:** `The service worker cache served the application shell before the network returned.` → Cache phục vụ shell trước mạng.
**Liên kết tiếng Hàn:** `서비스 워커 캐시`.

## 15. edge cache key /edʒ kæʃ kiː/
**Part of speech:** noun
**Core meaning (English):** the normalized set of request attributes used by an edge cache to identify an object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập thuộc tính request chuẩn hóa để edge nhận diện object.
**Grammar & collocations:** `edge-cache-key normalization` — normalization; `vary on a language header` — thay đổi.
**Examples:** `The edge cache key included the locale but excluded an irrelevant tracking parameter.` → Key gồm locale, bỏ tracking.
**Liên kết tiếng Hàn:** `엣지 캐시 키`.

## 16. request coalescing /rɪˈkwest koʊəˈlesɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining simultaneous requests for the same missing object into one upstream fetch.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp request đồng thời cùng object thành một fetch upstream.
**Grammar & collocations:** `request-coalescing lock` — lock; `collapse a cache miss` — gộp.
**Examples:** `Request coalescing stopped a traffic spike from creating hundreds of identical origin fetches.` → Coalescing ngăn fetch trùng.
**Liên kết tiếng Hàn:** `요청 병합`.

## 17. connection warmup /kəˈnekʃən ˈwɔːrmʌp/
**Part of speech:** noun
**Core meaning (English):** preparing a network connection through DNS, transport, or security handshakes before a critical request needs it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn bị DNS, transport và handshake trước request quan trọng.
**Grammar & collocations:** `connection-warmup budget` — budget; `establish a secure session early` — thiết lập.
**Examples:** `Connection warmup removed the handshake delay from the checkout click.` → Warmup bỏ delay handshake.
**Liên kết tiếng Hàn:** `연결 워밍업`.

## 18. font subsetting /fɒnt ˈsʌbˌsetɪŋ/
**Part of speech:** noun
**Core meaning (English):** shipping only the glyphs or character ranges required by a page instead of the entire font.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ gửi glyph cần thay vì cả font.
**Grammar & collocations:** `font-subsetting pipeline` — pipeline; `remove unused glyphs` — bỏ.
**Examples:** `Font subsetting cut the download size for the Latin-only landing page.` → Subsetting giảm size font.
**Liên kết tiếng Hàn:** `폰트 서브세팅`.

## 19. image responsive source /ˈɪmɪdʒ rɪˈspɒnsɪv sɔːrs/
**Part of speech:** noun
**Core meaning (English):** an image candidate selected for a device's viewport, pixel density, and network conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** candidate ảnh chọn theo viewport, density và network.
**Grammar & collocations:** `image-responsive-source selection` — selection; `serve a density-appropriate image` — phục vụ.
**Examples:** `The image responsive source avoided downloading a desktop photograph on a narrow phone.` → Source tránh tải ảnh desktop.
**Liên kết tiếng Hàn:** `반응형 이미지 소스`.

## 20. long task attribution /lɒŋ tɑːsk ˌætrɪˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** identifying the script, component, or operation responsible for blocking the main thread for an extended interval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định script/component làm block main thread lâu.
**Grammar & collocations:** `long-task-attribution report` — report; `attribute main-thread blocking` — quy.
**Examples:** `Long task attribution pointed to a third-party widget that delayed interaction.` → Attribution chỉ widget bên thứ ba.
**Liên kết tiếng Hàn:** `긴 작업 귀속`.

## Review in context

The **critical rendering path** can suffer from **layout thrashing**, unnecessary **compositor layer** work, **paint invalidation**, and a long **rendering waterfall**. **Largest contentful paint**, **cumulative layout shift**, and **first input delay** reveal user impact; **resource priority**, a **preload hint**, and a **prefetch hint** change loading. **Cache revalidation**, a **cache freshness window**, a **service worker cache**, an **edge cache key**, and **request coalescing** control delivery. **Connection warmup**, **font subsetting**, an **image responsive source**, and **long task attribution** complete optimization.

**Bản dịch tiếng Việt:** **Critical rendering path** có thể bị **layout thrashing**, công việc **compositor layer** thừa, **paint invalidation** và **rendering waterfall** dài. **Largest contentful paint**, **cumulative layout shift** và **first input delay** cho thấy tác động người dùng; **resource priority**, **preload hint** và **prefetch hint** đổi cách tải. **Cache revalidation**, **cache freshness window**, **service worker cache**, **edge cache key** và **request coalescing** kiểm soát delivery. **Connection warmup**, **font subsetting**, **image responsive source** và **long task attribution** hoàn thiện tối ưu.
