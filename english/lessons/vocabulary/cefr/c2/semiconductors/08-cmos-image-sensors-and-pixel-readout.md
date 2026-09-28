# C2 Vocabulary — CMOS image sensors and pixel readout

This lesson follows solid-state imaging from photon collection and pixel conversion through readout architecture, shutter behavior, optical stacking, and sensor noise limits.

Flow: **CMOS image sensor → pixel array → photodiode → pinned photodiode → full-well capacity → conversion gain → dark current → shot noise → read noise → correlated double sampling → source follower → rolling shutter → global shutter → column-parallel ADC → microlens → color filter array → quantum efficiency → dynamic range → blooming → backside illumination**.

## 1. CMOS image sensor /ˈsiːmɑs ˈɪmɪdʒ ˈsɛnsər/
**Part of speech:** noun
**Core meaning (English):** an image sensor fabricated with CMOS processes that converts incident light into electrical signals and integrates pixel readout circuitry on chip.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cảm biến ảnh CMOS; mỗi pixel biến photon thành charge rồi mạch readout trên chip chuyển charge đó thành signal có thể số hóa.
**Grammar & collocations:** `CMOS sensor array` — mảng sensor CMOS; `image-sensor readout` — readout sensor ảnh.
**Examples:** `The phone camera uses a CMOS image sensor with millions of independently addressed pixels.` → Camera điện thoại dùng CMOS image sensor với hàng triệu pixel có thể address riêng.
**Liên kết tiếng Hàn:** `CMOS 이미지 센서`.

## 2. pixel array /ˈpɪksəl əˈreɪ/
**Part of speech:** noun
**Core meaning (English):** the two-dimensional grid of light-sensitive pixels that forms the active imaging area of a sensor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lưới pixel cảm quang; toàn bộ bức ảnh được tạo từ signal của từng điểm trong array.
**Grammar & collocations:** `active pixel array` — array pixel active; `pixel-array pitch` — pitch của array.
**Examples:** `The pixel array occupied most of the sensor die while readout circuits surrounded its edges.` → Pixel array chiếm phần lớn die sensor còn mạch readout nằm quanh mép.
**Liên kết tiếng Hàn:** `픽셀 어레이`.

## 3. photodiode /ˌfoʊtoʊˈdaɪoʊd/
**Part of speech:** noun
**Core meaning (English):** a semiconductor junction that converts absorbed photons into electrical charge or current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diode nhạy sáng; photon tới tạo carrier điện, từ đó sensor đo lượng ánh sáng.
**Grammar & collocations:** `silicon photodiode` — photodiode silicon; `photodiode current` — current photodiode.
**Examples:** `Each pixel's photodiode accumulated charge in proportion to the light reaching it.` → Photodiode của mỗi pixel tích charge theo lượng ánh sáng nhận được.
**Liên kết tiếng Hàn:** `포토다이오드`, `광다이오드`.

## 4. pinned photodiode /pɪnd ˌfoʊtoʊˈdaɪoʊd/
**Part of speech:** noun
**Core meaning (English):** a photodiode structure used in modern CMOS pixels that improves charge transfer and reduces dark current and reset-related noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** photodiode có cấu trúc potential được kiểm soát để charge chuyển sạch sang sense node; giúp image noise thấp hơn.
**Grammar & collocations:** `pinned-photodiode pixel` — pixel PPD; `charge-transfer gate` — gate chuyển charge.
**Examples:** `The pinned photodiode enabled low-noise charge transfer before signal sampling.` → Pinned photodiode cho phép chuyển charge low-noise trước khi sample signal.
**Liên kết tiếng Hàn:** `핀드 포토다이오드`, `PPD`.

## 5. full-well capacity /fʊl wɛl kəˈpæsəti/
**Part of speech:** noun
**Core meaning (English):** the maximum amount of photo-generated charge a pixel can store before saturating.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “dung tích giếng” của pixel; charge đầy thì thêm photon cũng không còn tăng signal đúng cách.
**Grammar & collocations:** `pixel full-well capacity` — capacity full-well; `reach saturation` — chạm saturation.
**Examples:** `Larger pixels often provide greater full-well capacity and better highlight handling.` → Pixel lớn thường có full-well capacity cao hơn và giữ highlight tốt hơn.
**Liên kết tiếng Hàn:** `풀웰 용량`.

## 6. conversion gain /kənˈvɝʒən ɡeɪn/
**Part of speech:** noun
**Core meaning (English):** the change in output voltage produced per unit of collected charge in a pixel or sense node.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** charge nhỏ được biến thành voltage lớn đến mức nào; conversion gain cao giúp detect signal yếu tốt hơn.
**Grammar & collocations:** `high conversion gain` — conversion gain cao; `dual-conversion-gain mode` — mode gain kép.
**Examples:** `The sensor switched to high conversion gain for low-light scenes to improve readout sensitivity.` → Sensor chuyển sang high conversion gain trong cảnh thiếu sáng để tăng sensitivity readout.
**Liên kết tiếng Hàn:** `변환 이득`.

## 7. dark current /dɑrk ˈkɝənt/
**Part of speech:** noun
**Core meaning (English):** unwanted electrical current generated in a photosensor even when no light is present, usually increasing with temperature.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** signal “tự sinh” dù sensor ở tối hoàn toàn; exposure dài hoặc temperature cao làm nó rõ hơn.
**Grammar & collocations:** `dark-current noise` — noise từ dark current; `dark frame` — frame đo trong tối.
**Examples:** `Cooling the sensor reduced dark current during long astronomical exposures.` → Làm lạnh sensor giảm dark current trong exposure thiên văn dài.
**Liên kết tiếng Hàn:** `암전류`.

## 8. shot noise /ʃɑt nɔɪz/
**Part of speech:** noun
**Core meaning (English):** statistical noise caused by the discrete and random arrival of photons or charge carriers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** photon tới không đều hoàn hảo mà có fluctuation ngẫu nhiên; đây là noise mang tính nền tảng của photon counting.
**Grammar & collocations:** `photon shot noise` — shot noise photon; `shot-noise limited` — bị giới hạn bởi shot noise.
**Examples:** `In bright conditions, photon shot noise dominated the sensor's remaining electronic noise.` → Trong điều kiện sáng, photon shot noise lớn hơn phần electronic noise còn lại.
**Liên kết tiếng Hàn:** `샷 노이즈`, `산탄 잡음`.

## 9. read noise /riːd nɔɪz/
**Part of speech:** noun
**Core meaning (English):** electronic noise introduced while converting, amplifying, and digitizing a pixel's stored signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise phát sinh lúc “đọc” charge ra khỏi pixel; đặc biệt quan trọng khi signal rất yếu.
**Grammar & collocations:** `low read noise` — read noise thấp; `read-noise floor` — floor noise readout.
**Examples:** `Reducing read noise improved shadow detail in low-light images.` → Giảm read noise cải thiện detail vùng tối trong ảnh thiếu sáng.
**Liên kết tiếng Hàn:** `읽기 잡음`.

## 10. correlated double sampling /ˈkɔrəˌleɪtɪd ˈdʌbəl ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** a readout technique that samples a reference level and a signal level and subtracts them to suppress reset offset and low-frequency noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo hai lần rồi lấy difference; một sample capture baseline, sample kia capture signal để cancel common noise.
**Grammar & collocations:** `CDS circuit` — circuit CDS; `double-sampling stage` — stage double sampling.
**Examples:** `Correlated double sampling removed much of the reset noise before digitization.` → Correlated double sampling loại phần lớn reset noise trước digitization.
**Liên kết tiếng Hàn:** `상관 이중 샘플링`, `CDS`.

## 11. source follower /sɔrs ˈfɑloʊər/
**Part of speech:** noun
**Core meaning (English):** a transistor amplifier configuration commonly used inside active pixels to buffer a sensed voltage with approximately unity voltage gain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transistor buffer ngay trong pixel; nó giúp đưa signal ra column line mà không làm sense node bị load nặng.
**Grammar & collocations:** `pixel source follower` — source follower pixel; `source-follower noise` — noise source follower.
**Examples:** `The source follower buffered the floating-diffusion voltage before column readout.` → Source follower buffer voltage của floating diffusion trước column readout.
**Liên kết tiếng Hàn:** `소스 팔로어`.

## 12. rolling shutter /ˈroʊlɪŋ ˈʃʌtər/
**Part of speech:** noun
**Core meaning (English):** an image-sensor exposure method in which different rows begin or end exposure at slightly different times.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sensor đọc/expose theo từng row thay vì cả frame cùng lúc; object moving nhanh có thể bị nghiêng hoặc méo.
**Grammar & collocations:** `rolling-shutter distortion` — méo rolling shutter; `row readout` — readout theo row.
**Examples:** `Fast camera motion produced rolling-shutter distortion in vertical lines.` → Camera move nhanh làm vertical line bị méo do rolling shutter.
**Liên kết tiếng Hàn:** `롤링 셔터`.

## 13. global shutter /ˈɡloʊbəl ˈʃʌtər/
**Part of speech:** noun
**Core meaning (English):** an exposure method in which all pixels capture the scene during the same time interval before readout.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mọi pixel “chụp cùng một lúc”; giảm motion distortion nhưng pixel architecture thường phức tạp hơn.
**Grammar & collocations:** `global-shutter pixel` — pixel global shutter; `simultaneous exposure` — exposure đồng thời.
**Examples:** `The machine-vision camera used a global shutter to freeze rapidly moving parts without geometric skew.` → Camera machine vision dùng global shutter để freeze part moving nhanh mà không skew hình học.
**Liên kết tiếng Hàn:** `글로벌 셔터`.

## 14. column-parallel ADC /ˈkɑləm ˈpærəˌlɛl ˌeɪdiːˈsiː/
**Part of speech:** noun
**Core meaning (English):** an image-sensor architecture with analog-to-digital conversion replicated across columns so many pixel signals can be digitized in parallel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi column hoặc nhóm column có ADC riêng; nhiều signal được convert đồng thời để tăng frame rate.
**Grammar & collocations:** `column ADC` — ADC theo column; `parallel readout` — readout song song.
**Examples:** `Column-parallel ADCs increased throughput without requiring one extremely fast global converter.` → Column-parallel ADC tăng throughput mà không cần một global ADC cực nhanh.
**Liên kết tiếng Hàn:** `컬럼 병렬 ADC`.

## 15. microlens /ˈmaɪkroʊˌlɛnz/
**Part of speech:** noun
**Core meaning (English):** a tiny lens placed above an image-sensor pixel to concentrate incoming light onto its photosensitive area.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lens siêu nhỏ nằm trên từng pixel để gom photon vào photodiode thay vì để ánh sáng rơi vào wiring hoặc vùng chết.
**Grammar & collocations:** `microlens array` — array microlens; `microlens alignment` — alignment lens.
**Examples:** `The microlens improved sensitivity by directing more incident light into the photodiode.` → Microlens tăng sensitivity bằng cách hướng nhiều ánh sáng hơn vào photodiode.
**Liên kết tiếng Hàn:** `마이크로렌즈`.

## 16. color filter array /ˈkʌlər ˈfɪltər əˈreɪ/
**Part of speech:** noun
**Core meaning (English):** a patterned set of color filters placed over sensor pixels so different pixels measure selected wavelength bands.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp filter màu trên pixel; mỗi pixel chỉ đo một vùng color rồi image processor reconstruct full-color image.
**Grammar & collocations:** `Bayer color filter array` — CFA kiểu Bayer; `CFA pattern` — pattern filter.
**Examples:** `The color filter array assigned red, green, or blue sensitivity to neighboring pixels.` → Color filter array gán sensitivity đỏ, xanh lá hoặc xanh dương cho pixel lân cận.
**Liên kết tiếng Hàn:** `컬러 필터 어레이`, `CFA`.

## 17. quantum efficiency /ˈkwɑntəm ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** the fraction of incident photons that successfully generate collected charge carriers in a detector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bao nhiêu photon tới thực sự trở thành electron có ích; QE cao nghĩa là sensor tận dụng light tốt hơn.
**Grammar & collocations:** `external quantum efficiency` — QE ngoài; `wavelength-dependent QE` — QE theo wavelength.
**Examples:** `Backside processing improved quantum efficiency at shorter wavelengths.` → Backside processing cải thiện quantum efficiency ở wavelength ngắn.
**Liên kết tiếng Hàn:** `양자 효율`, `QE`.

## 18. dynamic range /daɪˈnæmɪk reɪndʒ/
**Part of speech:** noun
**Core meaning (English):** the span between the smallest detectable signal and the largest unsaturated signal a sensor can capture usefully.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng từ shadow nhỏ nhất vẫn thấy được đến highlight lớn nhất chưa clip.
**Grammar & collocations:** `sensor dynamic range` — dynamic range sensor; `high-dynamic-range capture` — capture HDR.
**Examples:** `Increasing full-well capacity while lowering read noise expanded the sensor's dynamic range.` → Tăng full-well capacity đồng thời giảm read noise mở rộng dynamic range của sensor.
**Liên kết tiếng Hàn:** `다이내믹 레인지`, `동적 범위`.

## 19. blooming /ˈbluːmɪŋ/
**Part of speech:** noun
**Core meaning (English):** an imaging artifact in which excess charge from a saturated pixel spills into neighboring pixels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pixel quá sáng “tràn charge” sang hàng xóm khiến bright spot lan rộng không đúng thực tế.
**Grammar & collocations:** `blooming artifact` — artifact blooming; `anti-blooming structure` — structure chống blooming.
**Examples:** `The sensor used anti-blooming drains to keep saturated highlights from spreading vertically.` → Sensor dùng anti-blooming drain để highlight saturated không lan theo chiều dọc.
**Liên kết tiếng Hàn:** `블루밍 현상`.

## 20. backside illumination /ˈbækˌsaɪd ɪˌluːməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** an image-sensor structure in which light enters from the wafer backside so front-side wiring blocks less of the optical path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ánh sáng đi vào từ mặt sau silicon; wiring không che photon nhiều nên sensitivity và fill factor tốt hơn.
**Grammar & collocations:** `backside-illuminated sensor` — sensor BSI; `BSI process` — process BSI.
**Examples:** `Backside illumination improved low-light efficiency in the small-pixel sensor.` → Backside illumination cải thiện efficiency thiếu sáng của sensor pixel nhỏ.
**Liên kết tiếng Hàn:** `후면 조사`, `BSI`.

## Review in context

A modern **CMOS image sensor** contains a dense **pixel array**, where each **photodiode**, often implemented as a **pinned photodiode**, converts light into stored charge. The **full-well capacity** determines how much charge a pixel can hold, while **conversion gain** determines how strongly that charge becomes voltage. In darkness, **dark current** remains, while **shot noise** and **read noise** limit precision under different signal conditions. **Correlated double sampling** suppresses part of the reset and low-frequency noise, and a pixel **source follower** buffers the sensed voltage. A **rolling shutter** reads rows at different times, whereas a **global shutter** captures them simultaneously. High-speed sensors often use a **column-parallel ADC**. Above the silicon, a **microlens** and **color filter array** control how light reaches each pixel. Overall sensitivity depends strongly on **quantum efficiency**, while **dynamic range** spans weak signals to saturation. **Blooming** occurs when excessive charge spills into neighbors, and **backside illumination** helps small pixels collect more light by moving obstructive wiring behind the optical path.

**Bản dịch tiếng Việt:** Một **CMOS image sensor** hiện đại có **pixel array** dày đặc, trong đó mỗi **photodiode**, thường là **pinned photodiode**, biến ánh sáng thành charge được lưu. **Full-well capacity** quyết định pixel giữ được bao nhiêu charge, còn **conversion gain** quyết định charge đó tạo ra voltage mạnh đến mức nào. Trong bóng tối vẫn có **dark current**, còn **shot noise** và **read noise** giới hạn precision ở các mức signal khác nhau. **Correlated double sampling** giảm một phần reset/low-frequency noise, và **source follower** trong pixel buffer sensed voltage. **Rolling shutter** đọc các row ở thời điểm khác nhau, còn **global shutter** capture chúng đồng thời. Sensor tốc độ cao thường dùng **column-parallel ADC**. Phía trên silicon, **microlens** và **color filter array** điều khiển ánh sáng đi tới từng pixel. Sensitivity tổng thể phụ thuộc mạnh vào **quantum efficiency**, còn **dynamic range** trải từ signal yếu đến saturation. **Blooming** xảy ra khi charge dư tràn sang pixel bên cạnh, và **backside illumination** giúp pixel nhỏ thu nhiều light hơn bằng cách đưa wiring cản sáng ra sau optical path.