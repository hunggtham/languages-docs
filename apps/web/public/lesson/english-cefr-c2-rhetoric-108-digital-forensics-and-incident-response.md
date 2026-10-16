# C2 Vocabulary 108 — Digital forensics and incident response

This lesson follows an incident from evidence preservation and malware triage to behavioral analysis, attribution, and defensible reporting.

Flow: **forensic image → volatile memory → hashing → timeline analysis → sandboxing → rootkit → persistence → exfiltration → indicator of compromise → threat hunting → memory dump → disk image → file carving → steganography → malware triage → event correlation → log enrichment → YARA rule → process hollowing → living-off-the-land**.

## 1. forensic image /fəˈrɛnsɪk ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** an exact bit-for-bit copy of a storage device created for investigation without altering the original evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh pháp chứng; hình dung bản sao từng bit của ổ đĩa được giữ nguyên để nhà điều tra làm việc trên đó.
**Grammar & collocations:** `forensic disk image` — ảnh pháp chứng của ổ đĩa; `acquire a forensic image` — thu nhận ảnh pháp chứng; `verify an image` — xác minh ảnh.
**Examples:** `The examiner mounted a forensic image in read-only mode.` → Điều tra viên gắn ảnh pháp chứng ở chế độ chỉ đọc.
**Liên kết tiếng Hàn:** `포렌식 이미지` (porensik imiji) — ảnh pháp chứng.

## 2. volatile memory /ˈvɑlətəl ˈmɛməri/
**Part of speech:** noun
**Core meaning (English):** computer memory whose contents disappear when power is removed, such as RAM.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ nhớ biến động; hình dung dữ liệu tạm thời biến mất ngay khi máy bị tắt.
**Grammar & collocations:** `volatile-memory capture` — thu giữ bộ nhớ biến động; `volatile-memory artifact` — dấu vết trong bộ nhớ biến động; `preserve volatile memory` — bảo toàn bộ nhớ biến động.
**Examples:** `Volatile memory contained the decryption key that never reached the disk.` → Bộ nhớ biến động chứa khóa giải mã chưa từng được ghi xuống ổ đĩa.
**Liên kết tiếng Hàn:** `휘발성 메모리` (hwibal seong memori) — bộ nhớ biến động.

## 3. hashing /ˈhæʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** transforming data into a fixed-length digest so that its integrity or identity can be compared efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** băm dữ liệu; hình dung biến một tệp thành “dấu vân tay” ngắn để phát hiện thay đổi.
**Grammar & collocations:** `cryptographic hashing` — băm mật mã; `hashing algorithm` — thuật toán băm; `compare hashes` — so sánh các mã băm.
**Examples:** `Hashing confirmed that the working copy matched the evidence image.` → Băm dữ liệu xác nhận bản sao làm việc khớp với ảnh chứng cứ.
**Liên kết tiếng Hàn:** `해싱` (haesing) — băm dữ liệu.

## 4. timeline analysis /ˈtaɪmˌlaɪn əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** reconstructing the order and timing of digital events from files, logs, messages, and system records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích dòng thời gian; hình dung ghép các dấu thời gian rời rạc thành câu chuyện diễn biến của sự cố.
**Grammar & collocations:** `filesystem timeline analysis` — phân tích dòng thời gian hệ thống tệp; `build a timeline` — dựng dòng thời gian; `timeline analysis tool` — công cụ phân tích dòng thời gian.
**Examples:** `Timeline analysis placed the first unauthorized login before the malware download.` → Phân tích dòng thời gian cho thấy lần đăng nhập trái phép đầu tiên xảy ra trước khi phần mềm độc hại được tải xuống.
**Liên kết tiếng Hàn:** `타임라인 분석` (taimlain bunseok) — phân tích dòng thời gian.

## 5. sandboxing /ˈsændˌbɑksɪŋ/
**Part of speech:** noun
**Core meaning (English):** running code in an isolated environment that limits its access to the host system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cô lập hộp cát; hình dung cho tệp đáng ngờ hoạt động trong một phòng thí nghiệm bị khóa.
**Grammar & collocations:** `malware sandboxing` — cô lập phần mềm độc hại; `sandboxing environment` — môi trường hộp cát; `sandboxing policy` — chính sách cô lập.
**Examples:** `Sandboxing revealed the sample's network calls without exposing the production server.` → Cô lập hộp cát cho thấy các cuộc gọi mạng của mẫu mà không phơi máy chủ sản xuất.
**Liên kết tiếng Hàn:** `샌드박싱` (saendeubaksing) — cô lập trong hộp cát.

## 6. rootkit /ˈruːtkɪt/
**Part of speech:** noun
**Core meaning (English):** malware or a collection of tools designed to hide unauthorized access and maintain privileged control of a system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rootkit; hình dung một bộ công cụ ẩn mình dưới lớp hệ điều hành để giữ quyền kiểm soát cao nhất.
**Grammar & collocations:** `kernel rootkit` — rootkit nhân hệ điều hành; `detect a rootkit` — phát hiện rootkit; `rootkit concealment` — sự che giấu của rootkit.
**Examples:** `The rootkit altered system calls so the malicious process disappeared from ordinary listings.` → Rootkit sửa các lệnh gọi hệ thống khiến tiến trình độc hại biến mất khỏi danh sách thông thường.
**Liên kết tiếng Hàn:** `루트킷` (ruteukit) — rootkit.

## 7. persistence /pərˈsɪstəns/
**Part of speech:** noun
**Core meaning (English):** an attacker's ability to keep access to a system across reboots, logouts, or defensive actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế duy trì hiện diện; hình dung kẻ xâm nhập để lại “móc” giúp quay lại sau mỗi lần khởi động.
**Grammar & collocations:** `persistence mechanism` — cơ chế duy trì hiện diện; `establish persistence` — thiết lập khả năng quay lại; `remove persistence` — loại bỏ cơ chế duy trì.
**Examples:** `Investigators found persistence through a scheduled task that relaunched the implant.` → Điều tra viên phát hiện cơ chế duy trì qua một tác vụ định kỳ khởi chạy lại mã cấy.
**Liên kết tiếng Hàn:** `지속성` (jisokseong) — khả năng duy trì hiện diện.

## 8. exfiltration /ˌɛksfɪlˈtreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the unauthorized transfer of data out of a system or network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tuồn dữ liệu; hình dung thông tin bị đưa lén qua biên mạng đến nơi kẻ tấn công kiểm soát.
**Grammar & collocations:** `data exfiltration` — tuồn dữ liệu; `exfiltration channel` — kênh tuồn dữ liệu; `detect exfiltration` — phát hiện tuồn dữ liệu.
**Examples:** `The sensor flagged exfiltration over an encrypted tunnel to an unfamiliar host.` → Cảm biến phát hiện dữ liệu bị tuồn qua đường hầm mã hóa đến máy chủ lạ.
**Liên kết tiếng Hàn:** `데이터 반출` (deiteo banchul) — tuồn dữ liệu.

## 9. indicator of compromise /ˈɪndəkeɪtər əv ˈkɑmprəmaɪz/
**Part of speech:** noun
**Core meaning (English):** an observable sign suggesting that a system or account has been breached.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ dấu xâm nhập; hình dung dấu vết nhỏ như tên miền, mã băm hoặc khóa đăng ký báo hiệu hệ thống đã bị phá.
**Grammar & collocations:** `IOC feed` — nguồn chỉ dấu xâm nhập; `match an indicator of compromise` — khớp chỉ dấu xâm nhập; `high-confidence indicator` — chỉ dấu có độ tin cậy cao.
**Examples:** `The unusual domain matched an indicator of compromise from the sector-wide alert.` → Tên miền bất thường khớp một chỉ dấu xâm nhập trong cảnh báo toàn ngành.
**Liên kết tiếng Hàn:** `침해 지표` (chimhae jipyo) — chỉ dấu xâm nhập.

## 10. threat hunting /ˈθrɛt ˌhʌntɪŋ/
**Part of speech:** noun
**Core meaning (English):** the proactive search through systems and networks for hidden malicious activity that automated alerts may miss.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** săn tìm mối đe dọa; hình dung chuyên gia chủ động lục tìm kẻ xâm nhập thay vì chỉ chờ chuông báo động.
**Grammar & collocations:** `threat-hunting hypothesis` — giả thuyết săn tìm; `conduct threat hunting` — tiến hành săn tìm; `threat-hunting query` — truy vấn săn tìm.
**Examples:** `Threat hunting uncovered the same rare process on three supposedly isolated hosts.` → Săn tìm mối đe dọa phát hiện cùng một tiến trình hiếm trên ba máy được cho là cô lập.
**Liên kết tiếng Hàn:** `위협 헌팅` (wiheop heonting) — săn tìm mối đe dọa.

## 11. memory dump /ˈmɛməri dʌmp/
**Part of speech:** noun
**Core meaning (English):** a saved copy of the contents of a computer's memory at a particular moment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh chụp bộ nhớ; hình dung đóng băng toàn bộ RAM tại thời điểm sự cố để phân tích sau.
**Grammar & collocations:** `capture a memory dump` — thu ảnh chụp bộ nhớ; `analyze a memory dump` — phân tích ảnh chụp bộ nhớ; `kernel memory dump` — ảnh chụp bộ nhớ nhân.
**Examples:** `The memory dump exposed an injected thread inside a trusted service.` → Ảnh chụp bộ nhớ phơi bày một luồng bị chèn bên trong dịch vụ đáng tin cậy.
**Liên kết tiếng Hàn:** `메모리 덤프` (memori deompeu) — ảnh chụp bộ nhớ.

## 12. disk image /ˈdɪsk ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a sector-level copy of a disk or partition that preserves its files, metadata, and unused space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh ổ đĩa; hình dung bản sao toàn bộ các vùng lưu trữ, kể cả phần tưởng như trống.
**Grammar & collocations:** `raw disk image` — ảnh ổ đĩa thô; `mount a disk image` — gắn ảnh ổ đĩa; `disk-image format` — định dạng ảnh ổ đĩa.
**Examples:** `The disk image preserved deleted records that the live system no longer displayed.` → Ảnh ổ đĩa giữ lại các bản ghi đã xóa mà hệ thống đang chạy không còn hiển thị.
**Liên kết tiếng Hàn:** `디스크 이미지` (diseukeu imiji) — ảnh ổ đĩa.

## 13. file carving /ˈfaɪl ˌkɑrvɪŋ/
**Part of speech:** noun
**Core meaning (English):** recovering files from raw data by recognizing their internal structures rather than relying on filesystem metadata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khôi phục tệp theo cấu trúc; hình dung “đục” lại tệp từ dữ liệu thô dù tên và thư mục đã mất.
**Grammar & collocations:** `file-carving tool` — công cụ khôi phục tệp; `carve deleted files` — khôi phục tệp đã xóa; `file-carving signature` — mẫu nhận dạng tệp.
**Examples:** `File carving recovered fragments of an image from unallocated space.` → Khôi phục tệp theo cấu trúc lấy lại các mảnh ảnh từ vùng chưa được cấp phát.
**Liên kết tiếng Hàn:** `파일 카빙` (pail kabing) — khôi phục tệp theo cấu trúc.

## 14. steganography /ˌstɛɡəˈnɑɡrəfi/
**Part of speech:** noun
**Core meaning (English):** concealing a message or payload inside an apparently ordinary file or medium.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kỹ thuật giấu tin; hình dung dữ liệu độc hại ẩn trong điểm ảnh, âm thanh hoặc tài liệu bình thường.
**Grammar & collocations:** `image steganography` — giấu tin trong ảnh; `steganographic payload` — tải trọng giấu tin; `detect steganography` — phát hiện giấu tin.
**Examples:** `Steganography hid the command inside the least significant bits of a photograph.` → Kỹ thuật giấu tin ẩn lệnh trong các bit ít ý nghĩa nhất của một bức ảnh.
**Liên kết tiếng Hàn:** `스테가노그래피` (seuteganogeuraepi) — kỹ thuật giấu tin.

## 15. malware triage /ˈmælwɛr triːˈɑːʒ/
**Part of speech:** noun
**Core meaning (English):** the rapid classification and prioritization of suspicious software before deeper analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân loại nhanh mã độc; hình dung sàng lọc mẫu theo mức nguy hiểm và giá trị điều tra trước khi mổ xẻ sâu.
**Grammar & collocations:** `malware-triage queue` — hàng đợi phân loại mã độc; `perform malware triage` — tiến hành phân loại mã độc; `triage verdict` — kết luận sàng lọc.
**Examples:** `Malware triage marked the attachment as a downloader and escalated it for reverse engineering.` → Phân loại mã độc đánh dấu tệp đính kèm là trình tải và chuyển nó sang phân tích ngược.
**Liên kết tiếng Hàn:** `악성코드 분류` (akseongkodeu bunryu) — phân loại mã độc.

## 16. event correlation /ɪˈvɛnt ˌkɔrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** linking separate log events by time, identity, location, or behavior to reveal a single incident.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tương quan sự kiện; hình dung nối các mảnh log rời rạc thành một chuỗi tấn công thống nhất.
**Grammar & collocations:** `event-correlation rule` — quy tắc tương quan sự kiện; `cross-source event correlation` — tương quan sự kiện liên nguồn; `automate correlation` — tự động hóa tương quan.
**Examples:** `Event correlation linked a badge swipe, a VPN login, and a database query.` → Tương quan sự kiện nối một lần quẹt thẻ, lần đăng nhập VPN và truy vấn cơ sở dữ liệu.
**Liên kết tiếng Hàn:** `이벤트 상관 분석` (ibenteu sanggwan bunseok) — tương quan sự kiện.

## 17. log enrichment /lɔɡ ɛnˈrɪtʃmənt/
**Part of speech:** noun
**Core meaning (English):** adding context such as asset identity, threat intelligence, or geolocation to raw log records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm giàu log; hình dung bổ sung nhãn và bối cảnh để một dòng log khô khan trở nên có ý nghĩa điều tra.
**Grammar & collocations:** `automated log enrichment` — làm giàu log tự động; `enrichment source` — nguồn bổ sung bối cảnh; `enrich a log record` — làm giàu bản ghi log.
**Examples:** `Log enrichment attached the suspicious address to a known command server.` → Làm giàu log liên kết địa chỉ đáng ngờ với một máy chủ điều khiển đã biết.
**Liên kết tiếng Hàn:** `로그 보강` (rogeu bogang) — làm giàu log.

## 18. YARA rule /ˈjɑːrə ruːl/
**Part of speech:** noun
**Core meaning (English):** a pattern-based rule used to identify files or memory regions that share characteristics of a malware family.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy tắc YARA; hình dung một bộ lọc mẫu tìm chuỗi, byte hoặc điều kiện đặc trưng của họ mã độc.
**Grammar & collocations:** `write a YARA rule` — viết quy tắc YARA; `YARA-rule match` — kết quả khớp quy tắc YARA; `tune a rule` — tinh chỉnh quy tắc.
**Examples:** `The new YARA rule detected variants that had changed their filenames.` → Quy tắc YARA mới phát hiện các biến thể đã đổi tên tệp.
**Liên kết tiếng Hàn:** `YARA 규칙` (YARA gyuchik) — quy tắc YARA.

## 19. process hollowing /ˈprɑːsɛs ˈhɑloʊɪŋ/
**Part of speech:** noun
**Core meaning (English):** a technique that replaces the code of a legitimate suspended process with malicious code while retaining its trusted identity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoét rỗng tiến trình; hình dung giữ vỏ một chương trình hợp lệ nhưng thay ruột bằng mã độc.
**Grammar & collocations:** `detect process hollowing` — phát hiện khoét rỗng tiến trình; `process-hollowing injection` — chèn mã kiểu khoét rỗng; `hollow a trusted process` — khoét rỗng tiến trình đáng tin.
**Examples:** `The alert showed process hollowing inside a signed system utility.` → Cảnh báo cho thấy kỹ thuật khoét rỗng tiến trình bên trong một tiện ích hệ thống có chữ ký.
**Liên kết tiếng Hàn:** `프로세스 할로잉` (peuroseseu halloing) — khoét rỗng tiến trình.

## 20. living-off-the-land /ˈlɪvɪŋ ɑf ðə lænd/
**Part of speech:** adjective
**Core meaning (English):** describing an attack that abuses legitimate tools already present on a target system instead of dropping obvious malware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tấn công dựa vào công cụ sẵn có; hình dung kẻ xâm nhập “sống nhờ tài nguyên tại chỗ” để tránh mang theo công cụ lộ liễu.
**Grammar & collocations:** `living-off-the-land technique` — kỹ thuật tận dụng công cụ sẵn có; `living-off-the-land binary` — tệp thực thi hợp pháp bị lạm dụng; `detect living-off-the-land activity` — phát hiện hoạt động tận dụng công cụ sẵn có.
**Examples:** `The living-off-the-land activity used a signed scripting host to download the payload.` → Hoạt động tận dụng công cụ sẵn có dùng trình thông dịch có chữ ký để tải tải trọng.
**Liên kết tiếng Hàn:** `기존 도구 악용` (gijon dogu agonyong) — tận dụng công cụ sẵn có.

## Review in context

The team first acquired a **forensic image** and captured **volatile memory** before powering down the host. **Hashing** verified the copies, while **timeline analysis** reconstructed the intrusion. **Sandboxing** exposed the sample's behavior, and a **rootkit** explained why ordinary tools missed its **persistence**. Investigators traced **exfiltration** through an **indicator of compromise** and expanded the search with **threat hunting**. A **memory dump**, **disk image**, and **file carving** recovered deleted fragments, while **steganography** hid a second payload. During **malware triage**, **event correlation** connected authentication and network records; **log enrichment** added asset context. A **YARA rule** found related files, and **process hollowing** showed how a trusted program was abused through a **living-off-the-land** technique.

**Bản dịch tiếng Việt:**

Nhóm điều tra trước hết thu nhận ảnh pháp chứng và chụp bộ nhớ biến động trước khi tắt máy. Băm dữ liệu xác minh các bản sao, còn phân tích dòng thời gian tái dựng cuộc xâm nhập. Cô lập hộp cát phơi bày hành vi của mẫu, và rootkit giải thích vì sao công cụ thông thường không thấy cơ chế duy trì hiện diện. Điều tra viên lần theo việc tuồn dữ liệu qua một chỉ dấu xâm nhập rồi mở rộng tìm kiếm bằng săn tìm mối đe dọa. Ảnh chụp bộ nhớ, ảnh ổ đĩa và khôi phục tệp theo cấu trúc lấy lại các mảnh đã xóa, còn kỹ thuật giấu tin che giấu tải trọng thứ hai. Trong lúc phân loại mã độc, tương quan sự kiện nối các bản ghi xác thực và mạng; làm giàu log bổ sung bối cảnh tài sản. Quy tắc YARA tìm thấy các tệp liên quan, còn khoét rỗng tiến trình cho thấy một chương trình đáng tin đã bị lạm dụng bằng kỹ thuật tận dụng công cụ sẵn có.
