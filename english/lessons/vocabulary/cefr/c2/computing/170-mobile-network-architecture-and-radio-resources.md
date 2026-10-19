# C2 Vocabulary — Mobile-network architecture and radio resources

This lesson follows a mobile device from radio access and identity through core-network functions, mobility, and radio resource allocation.

Flow: **radio access network → network slice → mobile edge computing → user plane function → control plane function → session management function → access mobility function → service-based interface → subscriber identity → temporary identity → tracking area → handover procedure → cell reselection → carrier aggregation → beam management → massive MIMO → orthogonal frequency division → numerology → subcarrier spacing → radio bearer**.

## 1. radio access network /ˈreɪdioʊ ˈækses ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** the mobile-network portion connecting user devices over radio to the operator's core.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần mobile network nối device qua radio tới core operator.
**Grammar & collocations:** `radio-access-network node` — node; `serve a mobile device` — phục vụ.
**Examples:** `The radio access network handed the device to a less crowded cell.` → RAN chuyển device sang cell ít tải.
**Liên kết tiếng Hàn:** `무선 접속 네트워크`.

## 2. network slice /ˈnetwɜːrk slaɪs/
**Part of speech:** noun
**Core meaning (English):** a logically isolated mobile-network instance with its own performance, security, or service policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instance mobile network cô lập logic với performance/security/policy riêng.
**Grammar & collocations:** `network-slice identifier` — identifier; `provision a low-latency slice` — cấp.
**Examples:** `The hospital devices used a network slice with stricter latency guarantees.` → Device bệnh viện dùng slice latency chặt.
**Liên kết tiếng Hàn:** `네트워크 슬라이스`.

## 3. mobile edge computing /ˈmoʊbəl edʒ kəmˈpjuːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** placing computation near mobile users or radio sites to reduce delay and backhaul traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đặt computation gần user/mobile site để giảm delay và traffic backhaul.
**Grammar & collocations:** `mobile-edge-computing workload` — workload; `offload processing near the cell` — offload.
**Examples:** `Mobile edge computing processed the video near the stadium instead of in a distant region.` → MEC xử lý video gần sân vận động.
**Liên kết tiếng Hàn:** `모바일 엣지 컴퓨팅`.

## 4. user plane function /ˈjuːzər pleɪn ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a core-network function that forwards user data packets toward external networks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** function core network forward packet data user tới network ngoài.
**Grammar & collocations:** `user-plane-function anchor` — anchor; `forward a data session` — chuyển.
**Examples:** `The user plane function routed the subscriber's video traffic to the edge site.` → UPF route video subscriber tới edge.
**Liên kết tiếng Hàn:** `사용자 평면 기능`.

## 5. control plane function /kənˈtroʊl pleɪn ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a core-network function that makes signaling, registration, policy, or session decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** function core xử lý signaling, registration, policy hoặc session decision.
**Grammar & collocations:** `control-plane-function message` — message; `authorize a session` — cấp quyền.
**Examples:** `The control plane function authorized the device before creating a data session.` → CPF authorize device trước tạo session.
**Liên kết tiếng Hàn:** `제어 평면 기능`.

## 6. session management function /ˈseʃən ˈmænɪdʒmənt ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function that establishes, modifies, and releases a mobile data session.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** function tạo, sửa và giải phóng mobile data session.
**Grammar & collocations:** `session-management-function request` — request; `assign a session address` — cấp.
**Examples:** `The session management function assigned a route to the new application session.` → SMF cấp route cho session app.
**Liên kết tiếng Hàn:** `세션 관리 기능`.

## 7. access mobility function /ˈækses moʊˈbɪləti ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a control function handling device registration, reachability, and mobility across access points.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** function control xử lý registration, reachability và mobility giữa access point.
**Grammar & collocations:** `access-mobility-function context` — context; `track a registered device` — theo dõi.
**Examples:** `The access mobility function updated the device's location after it entered another area.` → AMF update location khi device sang vùng khác.
**Liên kết tiếng Hàn:** `접근 및 이동성 기능`.

## 8. service-based interface /ˈsɜːrvɪs beɪst ˈɪntərfeɪs/
**Part of speech:** noun
**Core meaning (English):** an interface through which network functions expose and call services using defined APIs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interface function network expose/call service qua API định nghĩa.
**Grammar & collocations:** `service-based-interface endpoint` — endpoint; `discover a network function` — tìm.
**Examples:** `The service-based interface let the policy function query subscriber data through an API.` → Interface cho policy function query subscriber qua API.
**Liên kết tiếng Hàn:** `서비스 기반 인터페이스`.

## 9. subscriber identity /səbˈskraɪbər aɪˈdentəti/
**Part of speech:** noun
**Core meaning (English):** a persistent identifier representing a mobile subscription or account.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identifier lâu dài đại diện subscription/account mobile.
**Grammar & collocations:** `subscriber-identity protection` — bảo vệ; `authenticate a subscription` — xác thực.
**Examples:** `The network protected the subscriber identity while authenticating the device.` → Network bảo vệ identity khi auth device.
**Liên kết tiếng Hàn:** `가입자 식별자`.

## 10. temporary identity /ˈtempəreri aɪˈdentəti/
**Part of speech:** noun
**Core meaning (English):** a short-lived identifier used instead of a permanent subscriber identity over the air.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identifier ngắn hạn thay identity lâu dài trên radio.
**Grammar & collocations:** `temporary-identity refresh` — refresh; `conceal a permanent identifier` — che.
**Examples:** `The device received a temporary identity so routine messages did not expose its subscription number.` → Device nhận identity tạm để không lộ số thuê bao.
**Liên kết tiếng Hàn:** `임시 식별자`.

## 11. tracking area /ˈtrækɪŋ ˈeriə/
**Part of speech:** noun
**Core meaning (English):** a group of cells within which the network can page a device without knowing its exact cell.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm cell nơi network page device mà không biết cell exact.
**Grammar & collocations:** `tracking-area update` — update; `page a device in the area` — gọi.
**Examples:** `The handset sent a tracking area update after crossing the boundary.` → Handset gửi update khi qua boundary.
**Liên kết tiếng Hàn:** `추적 영역`.

## 12. handover procedure /ˈhændoʊvər prəˈsiːdʒər/
**Part of speech:** noun
**Core meaning (English):** the coordinated transfer of an active radio connection from one cell or access point to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển connection radio đang chạy từ cell/access point này sang khác.
**Grammar & collocations:** `handover-procedure message` — message; `maintain session continuity` — giữ.
**Examples:** `The handover procedure preserved the call while the train left the original cell.` → Procedure giữ call khi tàu rời cell.
**Liên kết tiếng Hàn:** `핸드오버 절차`.

## 13. cell reselection /sel ˌriːsəˈlekʃən/
**Part of speech:** noun
**Core meaning (English):** an idle device's choice of a more suitable neighboring cell for future access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device idle chọn cell hàng xóm phù hợp hơn cho access sau.
**Grammar & collocations:** `cell-reselection criterion` — criterion; `camp on a stronger cell` — bám.
**Examples:** `Cell reselection moved the idle phone to a stronger signal before it placed a call.` → Reselection chuyển phone idle sang signal mạnh.
**Liên kết tiếng Hàn:** `셀 재선택`.

## 14. carrier aggregation /ˈkæriər ˌæɡrɪˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** combining multiple component carriers so a device can use a wider effective radio bandwidth.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp nhiều carrier để device dùng bandwidth radio rộng hơn.
**Grammar & collocations:** `carrier-aggregation configuration` — configuration; `combine component carriers` — gộp.
**Examples:** `Carrier aggregation increased the download rate when two compatible bands were available.` → Aggregation tăng download khi có hai band.
**Liên kết tiếng Hàn:** `반송파 집성`.

## 15. beam management /biːm ˈmænɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** selecting, measuring, and switching directional radio beams to maintain a strong link.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn, đo và đổi beam radio hướng để giữ link mạnh.
**Grammar & collocations:** `beam-management measurement` — measurement; `track a preferred beam` — theo dõi.
**Examples:** `Beam management switched direction when the vehicle turned behind the building.` → Management đổi hướng khi xe rẽ sau tòa nhà.
**Liên kết tiếng Hàn:** `빔 관리`.

## 16. massive MIMO /ˈmæsɪv ˈmiːmoʊ/
**Part of speech:** noun
**Core meaning (English):** using many antenna elements to direct energy, separate users, and improve radio capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng nhiều antenna để hướng năng lượng, tách user và tăng capacity.
**Grammar & collocations:** `massive-MIMO array` — array; `form a spatial beam` — tạo.
**Examples:** `Massive MIMO served several users with separate spatial beams at once.` → MIMO lớn phục vụ nhiều user bằng beam riêng.
**Liên kết tiếng Hàn:** `대규모 MIMO`.

## 17. orthogonal frequency division /ˌɔːrθəˈɡɒnəl ˈfriːkwənsi dɪˈvɪʒən/
**Part of speech:** noun
**Core meaning (English):** dividing a channel into mutually orthogonal subcarriers so data can be transmitted in parallel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia channel thành subcarrier trực giao để truyền song song.
**Grammar & collocations:** `orthogonal-frequency-division waveform` — waveform; `allocate subcarriers` — cấp.
**Examples:** `Orthogonal frequency division made the wideband signal tolerant of multipath delay.` → Chia tần số giúp signal chịu delay multipath.
**Liên kết tiếng Hàn:** `직교 주파수 분할`.

## 18. numerology /ˌnuːməˈrɒlədʒi/
**Part of speech:** noun
**Core meaning (English):** a radio parameter set defining subcarrier spacing and related time-frequency structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ parameter radio định nghĩa subcarrier spacing và cấu trúc time-frequency.
**Grammar & collocations:** `numerology selection` — selection; `choose a wider subcarrier spacing` — chọn.
**Examples:** `The scheduler selected a numerology suited to the short-latency service.` → Scheduler chọn numerology cho service latency thấp.
**Liên kết tiếng Hàn:** `뉴머롤로지`.

## 19. subcarrier spacing /ˈsʌbˌkæriər ˈspeɪsɪŋ/
**Part of speech:** noun
**Core meaning (English):** the frequency distance between adjacent subcarriers in a multicarrier radio waveform.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách tần số giữa subcarrier liền kề.
**Grammar & collocations:** `subcarrier-spacing option` — option; `trade symbol duration for robustness` — đánh đổi.
**Examples:** `A wider subcarrier spacing shortened symbols but required a stronger timing reference.` → Spacing rộng rút symbol nhưng cần timing mạnh.
**Liên kết tiếng Hàn:** `부반송파 간격`.

## 20. radio bearer /ˈreɪdioʊ ˈberər/
**Part of speech:** noun
**Core meaning (English):** a configured logical channel carrying user or signaling traffic with defined radio treatment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** channel logic mang traffic user/signaling với treatment radio định nghĩa.
**Grammar & collocations:** `radio-bearer configuration` — configuration; `map traffic to a bearer` — map.
**Examples:** `The scheduler assigned the video stream a radio bearer with a quality guarantee.` → Scheduler gán video vào bearer có bảo đảm quality.
**Liên kết tiếng Hàn:** `무선 베어러`.

## Review in context

A **radio access network** can provide a **network slice** and place workloads through **mobile edge computing**. The **user plane function** carries packets, while a **control plane function**, **session management function**, and **access mobility function** coordinate them through a **service-based interface**. A **subscriber identity** may be hidden by a **temporary identity**; a **tracking area**, **handover procedure**, and **cell reselection** manage movement. **Carrier aggregation**, **beam management**, and **massive MIMO** improve capacity. **Orthogonal frequency division**, **numerology**, and **subcarrier spacing** shape the waveform, while a **radio bearer** carries traffic with defined treatment.

**Bản dịch tiếng Việt:** **Radio access network** có thể cung cấp **network slice** và đặt workload bằng **mobile edge computing**. **User plane function** mang packet, còn **control plane function**, **session management function** và **access mobility function** phối hợp qua **service-based interface**. **Subscriber identity** có thể được che bằng **temporary identity**; **tracking area**, **handover procedure** và **cell reselection** quản lý di chuyển. **Carrier aggregation**, **beam management** và **massive MIMO** tăng capacity. **Orthogonal frequency division**, **numerology** và **subcarrier spacing** định hình waveform, còn **radio bearer** mang traffic với treatment xác định.
