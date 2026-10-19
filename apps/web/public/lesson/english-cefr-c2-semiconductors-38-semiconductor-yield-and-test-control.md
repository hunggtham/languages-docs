# C2 Vocabulary — Semiconductor yield and test control

This lesson follows a wafer lot from process excursions and test sorting to tool matching, monitor wafers, and final disposition.

Flow: **yield excursion → yield detractor → die yield → bin split → electrical sort → test time → false reject → false accept → parametric binning → functional binning → outlier wafer → lot split → recipe drift → tool matching → fleet matching → golden wafer → monitor wafer → control wafer → sentinel wafer → lot disposition**.

## 1. yield excursion /ˈjiːld ɪkˈskɜːrʒən/
**Part of speech:** noun
**Core meaning (English):** an unusual departure of production yield from its expected range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ lệch bất thường của yield sản xuất khỏi khoảng dự kiến.
**Grammar & collocations:** `yield-excursion alert` — cảnh báo; `investigate a sudden drop` — điều tra.
**Examples:** `The yield excursion began after a chamber qualification change.` → Excursion bắt đầu sau đổi qualification chamber.
**Liên kết tiếng Hàn:** `수율 이상`.

## 2. yield detractor /ˈjiːld dɪˈtræktər/
**Part of speech:** noun
**Core meaning (English):** a defect, parameter, or process condition that lowers the number of acceptable devices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** defect, parameter hoặc condition làm giảm số device đạt.
**Grammar & collocations:** `yield-detractor analysis` — phân tích; `rank the largest loss` — xếp hạng.
**Examples:** `Contact resistance was the largest yield detractor in the pilot lot.` → Resistance contact là detractor lớn nhất lot pilot.
**Liên kết tiếng Hàn:** `수율 저해 요인`.

## 3. die yield /ˈdaɪ jiːld/
**Part of speech:** noun
**Core meaning (English):** the fraction of dies on a wafer that pass the required tests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ die trên wafer vượt các test bắt buộc.
**Grammar & collocations:** `die-yield estimate` — ước tính; `improve good-die count` — tăng.
**Examples:** `A cleaner edge exclusion increased die yield without changing the circuit design.` → Edge exclusion sạch hơn tăng yield mà không đổi circuit.
**Liên kết tiếng Hàn:** `다이 수율`.

## 4. bin split /ˈbɪn splɪt/
**Part of speech:** noun
**Core meaning (English):** dividing tested devices into performance or quality categories.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia device đã test thành nhóm performance/quality.
**Grammar & collocations:** `bin-split threshold` — ngưỡng; `assign a speed grade` — gán.
**Examples:** `The bin split separated processors that met the high-frequency target from the rest.` → Split tách processor đạt frequency cao khỏi phần còn lại.
**Liên kết tiếng Hàn:** `빈 분할`.

## 5. electrical sort /ɪˈlektrɪkəl sɔːrt/
**Part of speech:** noun
**Core meaning (English):** wafer-level electrical testing used to classify dies before assembly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test điện ở mức wafer để phân loại die trước assembly.
**Grammar & collocations:** `electrical-sort map` — map; `probe every die` — đo.
**Examples:** `Electrical sort removed dies with excessive standby current before packaging.` → Sort loại die có dòng standby quá cao trước đóng gói.
**Liên kết tiếng Hàn:** `전기적 선별`.

## 6. test time /ˈtest taɪm/
**Part of speech:** noun
**Core meaning (English):** the time required for a tester to apply patterns, measure responses, and decide a device result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian tester áp pattern, đo response và quyết định kết quả device.
**Grammar & collocations:** `test-time reduction` — giảm; `shorten a diagnostic sequence` — rút.
**Examples:** `Test time fell after the team removed redundant measurements from the screen.` → Test time giảm sau bỏ measurement lặp.
**Liên kết tiếng Hàn:** `테스트 시간`.

## 7. false reject /ˈfɔːls rɪˈdʒekt/
**Part of speech:** noun
**Core meaning (English):** accepting a good device as failed because a test or limit decision was wrong.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device tốt bị loại nhầm vì test/limit quyết định sai.
**Grammar & collocations:** `false-reject rate` — rate; `review a marginal fail` — xem lại.
**Examples:** `A noisy contact caused a false reject during the first probe pass.` → Contact nhiễu gây reject nhầm ở lượt probe đầu.
**Liên kết tiếng Hàn:** `오거부`.

## 8. false accept /ˈfɔːls əkˈsept/
**Part of speech:** noun
**Core meaning (English):** shipping or accepting a defective device because a test failed to detect its problem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device lỗi vẫn được chấp nhận vì test không bắt lỗi.
**Grammar & collocations:** `false-accept risk` — nguy cơ; `tighten a screen limit` — siết.
**Examples:** `The escaped unit exposed a false accept in the intermittent-reset screen.` → Unit lọt lộ false accept ở screen reset chập chờn.
**Liên kết tiếng Hàn:** `오승인`.

## 9. parametric binning /ˌpærəˈmetrɪk ˈbɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** assigning devices to bins according to measured numerical parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán device vào bin theo parameter số đo được.
**Grammar & collocations:** `parametric-binning rule` — rule; `grade leakage current` — xếp hạng.
**Examples:** `Parametric binning grouped memories by access time and standby current.` → Binning nhóm memory theo access time và standby.
**Liên kết tiếng Hàn:** `파라미터 빈닝`.

## 10. functional binning /ˈfʌŋkʃənəl ˈbɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** assigning devices to categories according to which functions they can perform correctly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán device theo các function nó thực hiện đúng.
**Grammar & collocations:** `functional-binning matrix` — matrix; `disable a failed feature` — vô hiệu.
**Examples:** `Functional binning sold the chip with one disabled core as a lower tier.` → Binning bán chip tắt một core như tier thấp.
**Liên kết tiếng Hàn:** `기능적 빈닝`.

## 11. outlier wafer /ˈaʊtˌlaɪər ˈweɪfər/
**Part of speech:** noun
**Core meaning (English):** a wafer whose measurements differ unusually from the rest of its lot or history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** wafer có measurement lệch bất thường so với lot/lịch sử.
**Grammar & collocations:** `outlier-wafer review` — review; `quarantine a suspicious lot` — cách ly.
**Examples:** `The outlier wafer showed a radial thickness pattern not seen elsewhere.` → Wafer outlier có pattern thickness radial lạ.
**Liên kết tiếng Hàn:** `이상 웨이퍼`.

## 12. lot split /ˈlɑːt splɪt/
**Part of speech:** noun
**Core meaning (English):** dividing a production lot so different process conditions, tools, or experiments can be compared.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia lot để so điều kiện process, tool hoặc experiment khác nhau.
**Grammar & collocations:** `lot-split plan` — plan; `run a controlled comparison` — chạy.
**Examples:** `The lot split compared two clean recipes without mixing their conclusions.` → Split so sánh hai recipe clean mà không trộn kết luận.
**Liên kết tiếng Hàn:** `로트 분할`.

## 13. recipe drift /ˈresəpi drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual change in actual process behavior away from the qualified recipe target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi dần của process thực so với target recipe đã qualify.
**Grammar & collocations:** `recipe-drift monitor` — monitor; `requalify a process` — qualify lại.
**Examples:** `Recipe drift increased film thickness over several weeks of production.` → Drift recipe làm thickness tăng sau nhiều tuần.
**Liên kết tiếng Hàn:** `레시피 드리프트`.

## 14. tool matching /ˈtuːl ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** adjusting or verifying multiple tools so they produce comparable results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh/xác minh nhiều tool cho kết quả tương đương.
**Grammar & collocations:** `tool-matching study` — nghiên cứu; `correlate chamber outputs` — tương quan.
**Examples:** `Tool matching allowed the lot to move between two deposition chambers.` → Matching cho lot chạy qua hai chamber.
**Liên kết tiếng Hàn:** `장비 매칭`.

## 15. fleet matching /ˈfliːt ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** maintaining comparable performance across a large installed population of production tools.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ performance tương đương trên cả đội tool production.
**Grammar & collocations:** `fleet-matching dashboard` — dashboard; `align a global fleet` — căn.
**Examples:** `Fleet matching exposed one etcher whose endpoint response was consistently slow.` → Matching thấy một etcher endpoint luôn chậm.
**Liên kết tiếng Hàn:** `장비군 매칭`.

## 16. golden wafer /ˈɡoʊldən ˈweɪfər/
**Part of speech:** noun
**Core meaning (English):** a characterized wafer used as a stable reference for checking process or tool performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** wafer đã characterize, dùng reference ổn định để check tool/process.
**Grammar & collocations:** `golden-wafer measurement` — measurement; `verify chamber health` — xác minh.
**Examples:** `The technician ran a golden wafer after replacing the gas manifold.` → Kỹ thuật viên chạy wafer chuẩn sau thay manifold.
**Liên kết tiếng Hàn:** `골든 웨이퍼`.

## 17. monitor wafer /ˈmɑːnətər ˈweɪfər/
**Part of speech:** noun
**Core meaning (English):** a wafer processed or measured regularly to track a process indicator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** wafer được process/measure định kỳ để theo dõi indicator.
**Grammar & collocations:** `monitor-wafer schedule` — lịch; `track thickness drift` — theo dõi.
**Examples:** `A monitor wafer detected chamber drift before product lots were affected.` → Wafer monitor bắt drift trước lot product.
**Liên kết tiếng Hàn:** `모니터 웨이퍼`.

## 18. control wafer /kənˈtroʊl ˈweɪfər/
**Part of speech:** noun
**Core meaning (English):** a reference wafer with a known response used to distinguish tool change from measurement noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** wafer reference có response biết trước để phân biệt đổi tool với noise đo.
**Grammar & collocations:** `control-wafer result` — kết quả; `detect a measurement shift` — bắt.
**Examples:** `The control wafer confirmed that the new probe card had changed the reading.` → Wafer control xác nhận probe card mới đổi reading.
**Liên kết tiếng Hàn:** `관리 웨이퍼`.

## 19. sentinel wafer /ˈsentənəl ˈweɪfər/
**Part of speech:** noun
**Core meaning (English):** a strategically placed wafer used as an early warning for contamination or process instability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** wafer đặt chiến lược làm cảnh báo sớm contamination/process bất ổn.
**Grammar & collocations:** `sentinel-wafer alarm` — alarm; `catch a transient excursion` — bắt.
**Examples:** `The sentinel wafer caught particles before the next product lot entered the tool.` → Wafer sentinel bắt particle trước lot tiếp vào tool.
**Liên kết tiếng Hàn:** `감시 웨이퍼`.

## 20. lot disposition /ˈlɑːt ˌdɪspəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** the documented decision to release, rework, hold, or scrap a production lot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định có ghi nhận: release, rework, hold hoặc scrap lot.
**Grammar & collocations:** `lot-disposition board` — hội đồng; `release a qualified lot` — release.
**Examples:** `The review board placed the lot on hold pending a second electrical sort.` → Board giữ lot chờ sort điện lần hai.
**Liên kết tiếng Hàn:** `로트 처분 결정`.

## Review in context

A **yield excursion** starts with a suspected **yield detractor**, changes **die yield**, and may alter a **bin split** after **electrical sort**. Engineers balance **test time** against **false reject** and **false accept** risk through **parametric binning** and **functional binning**. An **outlier wafer** may trigger a **lot split**; **recipe drift** then prompts **tool matching** or **fleet matching**. A **golden wafer**, **monitor wafer**, **control wafer**, and **sentinel wafer** provide reference signals. The final **lot disposition** releases, reworks, holds, or scraps the material.

**Bản dịch tiếng Việt:** **Yield excursion** bắt đầu từ **yield detractor** nghi ngờ, làm đổi **die yield** và có thể đổi **bin split** sau **electrical sort**. Kỹ sư cân bằng **test time** với nguy cơ **false reject** và **false accept** qua **parametric binning** và **functional binning**. **Outlier wafer** có thể dẫn tới **lot split**; **recipe drift** sau đó yêu cầu **tool matching** hoặc **fleet matching**. **Golden wafer**, **monitor wafer**, **control wafer** và **sentinel wafer** cung cấp tín hiệu chuẩn. Cuối cùng **lot disposition** release, rework, hold hoặc scrap vật liệu.
