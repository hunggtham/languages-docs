# C2 Vocabulary — EUV lithography and stochastic process control

This lesson follows advanced lithography from photon statistics and mask modeling through resist variability, overlay, and process-window control.

Flow: **extreme ultraviolet lithography → stochastic defect → photon shot noise → resist blur → acid diffusion → outgassing → pellicle → mask three-dimensional effect → source-mask optimization → inverse lithography → optical proximity correction → flare correction → overlay budget → critical dimension uniformity → line-edge roughness → line-width roughness → stochastic bridging → contact-hole collapse → dose-to-size → focus-exposure matrix**.

## 1. extreme ultraviolet lithography /ɪkˈstriːm ˌʌltrəˈvaɪələt laɪˈθɑɡrəfi/
**Part of speech:** noun
**Core meaning (English):** patterning with very short-wavelength ultraviolet radiation to print extremely small semiconductor features.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng tia cực tím bước sóng rất ngắn để in feature siêu nhỏ.
**Grammar & collocations:** `extreme-ultraviolet-lithography scanner` — scanner; `pattern a critical layer` — pattern.
**Examples:** `Extreme ultraviolet lithography printed the critical metal layer with fewer multiple-patterning steps.` → EUV in lớp kim loại quan trọng với ít bước pattern hơn.
**Liên kết tiếng Hàn:** `극자외선 리소그래피`.

## 2. stochastic defect /stəˈkæstɪk dɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a random, locally occurring patterning failure whose location or occurrence cannot be predicted deterministically for every die.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi ngẫu nhiên xuất hiện rải rác, không thể đoán chính xác trên từng die.
**Grammar & collocations:** `stochastic-defect density` — density; `screen for random failures` — sàng lọc.
**Examples:** `Stochastic defects became the dominant yield concern at the smallest contact pitch.` → Lỗi ngẫu nhiên thành vấn đề yield chính ở pitch nhỏ nhất.
**Liên kết tiếng Hàn:** `확률적 결함`.

## 3. photon shot noise /ˈfoʊtɑn ʃɑt nɔɪz/
**Part of speech:** noun
**Core meaning (English):** statistical fluctuation in the number of photons arriving at a resist during an exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số photon tới resist dao động theo thống kê, tạo variation.
**Grammar & collocations:** `photon-shot-noise limit` — limit; `increase photon counts` — tăng.
**Examples:** `Photon shot noise widened the distribution of printed contact sizes at low dose.` → Shot noise làm rộng phân bố kích thước contact.
**Liên kết tiếng Hàn:** `광자 샷 노이즈`.

## 4. resist blur /rɪˈzɪst blɝ/
**Part of speech:** noun
**Core meaning (English):** loss of image sharpness caused by chemical and physical spreading within a photoresist during exposure and development.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resist làm mờ hình ảnh do phản ứng lan trong vật liệu.
**Grammar & collocations:** `resist-blur component` — component; `reduce chemical spreading` — giảm.
**Examples:** `Resist blur limited the benefit of a sharper aerial image.` → Blur của resist giới hạn lợi ích ảnh trên không sắc hơn.
**Liên kết tiếng Hàn:** `레지스트 블러`.

## 5. acid diffusion /ˈæsɪd dɪˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** movement of photo-generated acid through chemically amplified resist, influencing feature placement and contrast.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** acid sinh ra di chuyển trong resist, ảnh hưởng mép và contrast.
**Grammar & collocations:** `acid-diffusion length` — length; `control post-exposure diffusion` — kiểm soát.
**Examples:** `Acid diffusion shifted the printed edge beyond the intended aerial-image boundary.` → Acid diffusion đẩy mép in ra ngoài boundary.
**Liên kết tiếng Hàn:** `산 확산`.

## 6. outgassing /ˈaʊtˌɡæsɪŋ/
**Part of speech:** noun
**Core meaning (English):** release of volatile material from a resist or component under vacuum exposure conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vật liệu nhả khí trong môi trường chân không, làm bẩn scanner.
**Grammar & collocations:** `outgassing rate` — rate; `qualify a low-outgassing resist` — đánh giá.
**Examples:** `Outgassing contaminated the reflective optics and reduced exposure stability.` → Outgassing làm bẩn optics và giảm ổn định.
**Liên kết tiếng Hàn:** `가스 방출`.

## 7. pellicle /ˈpɛlɪkəl/
**Part of speech:** noun
**Core meaning (English):** a thin protective membrane placed above a photomask to keep particles out of the patterned plane.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** màng mỏng bảo vệ mask khỏi particle.
**Grammar & collocations:** `pellicle transmission` — transmission; `mount a pellicle` — gắn.
**Examples:** `The pellicle protected the mask from particles but introduced a small transmission loss.` → Pellicle bảo vệ mask nhưng gây loss nhỏ.
**Liên kết tiếng Hàn:** `펠리클`.

## 8. mask three-dimensional effect /mæsk θriː dɪˈmɛnʃənəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** image distortion caused by the finite thickness and geometry of mask absorber structures rather than an ideal two-dimensional pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mask có độ dày thật nên ánh sáng bị méo khác pattern 2D lý tưởng.
**Grammar & collocations:** `mask-three-dimensional-effect correction` — correction; `model absorber sidewalls` — mô hình.
**Examples:** `The mask three-dimensional effect shifted the best focus for dense and isolated features differently.` → Hiệu ứng 3D làm best focus khác nhau.
**Liên kết tiếng Hàn:** `마스크 3차원 효과`.

## 9. source-mask optimization /sɔrs mæsk ˌɑptəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** jointly optimizing illumination source shape and mask pattern to improve imaging fidelity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu cả nguồn sáng và mask thay vì xử lý riêng.
**Grammar & collocations:** `source-mask-optimization loop` — loop; `optimize illumination and geometry` — tối ưu.
**Examples:** `Source-mask optimization improved the process window for the irregular cut pattern.` → SMO mở rộng process window.
**Liên kết tiếng Hàn:** `소스-마스크 최적화`.

## 10. inverse lithography /ˌɪnvɝs laɪˈθɑɡrəfi/
**Part of speech:** noun
**Core meaning (English):** computationally designing a mask by working backward from the desired wafer image through a lithography model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đi ngược từ hình ảnh wafer mong muốn để tạo mask.
**Grammar & collocations:** `inverse-lithography solution` — solution; `solve for a mask pattern` — giải.
**Examples:** `Inverse lithography generated a nonintuitive mask shape that printed a regular wafer feature.` → ILT tạo mask lạ nhưng in feature đều.
**Liên kết tiếng Hàn:** `역 리소그래피`.

## 11. optical proximity correction /ˈɑptɪkəl prɑkˈsɪməti kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** deliberate mask-shape modification that compensates for optical interactions between nearby features.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa shape mask để bù ảnh hưởng quang học giữa feature gần nhau.
**Grammar & collocations:** `optical-proximity-correction recipe` — recipe; `bias a mask edge` — bias.
**Examples:** `Optical proximity correction added small serifs to keep line ends from shortening.` → OPC thêm serif để line end không ngắn.
**Liên kết tiếng Hàn:** `광학 근접 보정`.

## 12. flare correction /flɛr kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** compensation for low-level stray light that raises the exposure background over a broad region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bù ánh sáng tán xạ làm nền exposure tăng.
**Grammar & collocations:** `flare-correction map` — map; `remove background exposure` — loại.
**Examples:** `Flare correction stabilized the critical dimension across dense and sparse pattern fields.` → Correction ổn định CD giữa vùng dày và thưa.
**Liên kết tiếng Hàn:** `플레어 보정`.

## 13. overlay budget /ˈoʊvərˌleɪ ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the allowed total alignment error shared across scanner, wafer, process, and measurement contributors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách sai lệch alignment chia cho nhiều nguồn.
**Grammar & collocations:** `overlay-budget allocation` — allocation; `close an alignment budget` — khép.
**Examples:** `The new process consumed most of the overlay budget at the wafer edge.` → Process mới tiêu gần hết budget ở mép wafer.
**Liên kết tiếng Hàn:** `오버레이 예산`.

## 14. critical dimension uniformity /ˈkrɪtɪkəl dɪˈmɛnʃən ˌjuːnəˈfɔrməti/
**Part of speech:** noun
**Core meaning (English):** the consistency of a printed feature's critical size across a wafer, field, or lot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** CD có đồng đều giữa wafer và các field hay không.
**Grammar & collocations:** `critical-dimension-uniformity map` — map; `improve across-wafer uniformity` — cải thiện.
**Examples:** `Critical dimension uniformity worsened near the wafer edge after a chamber clean.` → CDU xấu hơn ở mép sau clean chamber.
**Liên kết tiếng Hàn:** `임계 치수 균일도`.

## 15. line-edge roughness /laɪn ɛdʒ ˈrʌfnəs/
**Part of speech:** noun
**Core meaning (English):** random variation of a printed line's boundary along its length.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mép line gồ ghề ngẫu nhiên dọc theo chiều dài.
**Grammar & collocations:** `line-edge-roughness metric` — metric; `reduce edge fluctuation` — giảm.
**Examples:** `Line-edge roughness increased transistor variability even when the mean line width was correct.` → LER tăng variation transistor dù width trung bình đúng.
**Liên kết tiếng Hàn:** `라인 에지 거칠기`.

## 16. line-width roughness /laɪn wɪdθ ˈrʌfnəs/
**Part of speech:** noun
**Core meaning (English):** local fluctuation in the width of a printed line along its length or across repeated features.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** width line thay đổi cục bộ, ảnh hưởng electrical behavior.
**Grammar & collocations:** `line-width-roughness distribution` — distribution; `correlate width variation` — tương quan.
**Examples:** `Line-width roughness broadened the resistance distribution of the narrow interconnect.` → LWR làm rộng phân bố resistance.
**Liên kết tiếng Hàn:** `라인 폭 거칠기`.

## 17. stochastic bridging /stəˈkæstɪk ˈbrɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** a random resist or patterning failure that unintentionally connects neighboring features.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi ngẫu nhiên tạo cầu nối giữa feature vốn phải tách.
**Grammar & collocations:** `stochastic-bridging rate` — rate; `screen for bridging defects` — sàng lọc.
**Examples:** `Stochastic bridging shorted two contacts that passed the average-dose inspection.` → Bridging làm chập hai contact dù dose trung bình đạt.
**Liên kết tiếng Hàn:** `확률적 브리징`.

## 18. contact-hole collapse /ˈkɑntækt hoʊl kəˈlæps/
**Part of speech:** noun
**Core meaning (English):** deformation or closure of a high-aspect-ratio resist opening during development or drying.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗ contact nhỏ bị đổ hoặc khép trong develop/dry.
**Grammar & collocations:** `contact-hole-collapse defect` — defect; `stabilize a high-aspect-ratio opening` — ổn định.
**Examples:** `Contact-hole collapse increased after the rinse chemistry was changed.` → Collapse tăng sau đổi hóa chất rinse.
**Liên kết tiếng Hàn:** `콘택트 홀 붕괴`.

## 19. dose-to-size /doʊs tə saɪz/
**Part of speech:** noun
**Core meaning (English):** the exposure dose required to print a feature at its target critical dimension.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dose cần để feature in đúng kích thước mục tiêu.
**Grammar & collocations:** `dose-to-size calibration` — calibration; `tune exposure dose` — chỉnh.
**Examples:** `The dose-to-size value shifted after the resist formulation was replaced.` → Dose-to-size đổi sau thay resist.
**Liên kết tiếng Hàn:** `사이즈 맞춤 선량`.

## 20. focus-exposure matrix /ˈfoʊkəs ɪkˈspoʊʒər ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a designed set of wafers or fields printed across focus and dose values to map the usable process window.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận focus–dose để tìm vùng process chạy tốt.
**Grammar & collocations:** `focus-exposure-matrix wafer` — wafer; `map a process window` — lập bản đồ.
**Examples:** `The focus-exposure matrix showed that the new mask had a wider usable window.` → FEM cho thấy mask mới có window rộng hơn.
**Liên kết tiếng Hàn:** `초점-노광 매트릭스`.

## Review in context

**Extreme ultraviolet lithography** faces **stochastic defect** risk from **photon shot noise**, **resist blur**, **acid diffusion**, and **outgassing**; a **pellicle** protects the mask. The **mask three-dimensional effect** is modeled through **source-mask optimization** and **inverse lithography**, alongside **optical proximity correction** and **flare correction**. Manufacturing must protect the **overlay budget** and **critical dimension uniformity** while controlling **line-edge roughness**, **line-width roughness**, **stochastic bridging**, and **contact-hole collapse**. **Dose-to-size** and a **focus-exposure matrix** help define the usable process window.

**Bản dịch tiếng Việt:** **Extreme ultraviolet lithography** đối mặt rủi ro **stochastic defect** do **photon shot noise**, **resist blur**, **acid diffusion** và **outgassing**; **pellicle** bảo vệ mask. **Mask three-dimensional effect** được mô hình hóa qua **source-mask optimization** và **inverse lithography**, cùng **optical proximity correction** và **flare correction**. Sản xuất phải giữ **overlay budget** và **critical dimension uniformity**, đồng thời kiểm soát **line-edge roughness**, **line-width roughness**, **stochastic bridging** và **contact-hole collapse**. **Dose-to-size** và **focus-exposure matrix** giúp xác định process window dùng được.
