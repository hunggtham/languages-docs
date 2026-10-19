# C2+ Vocabulary — Advanced MRI, CT, and perfusion imaging

This lesson follows how medical imaging measures tissue microstructure, connectivity, perfusion, composition, and reconstruction quality. The network is **diffusion tensor imaging → fractional anisotropy → functional connectivity → resting-state network → hemodynamic response function → arterial spin labeling → dynamic susceptibility contrast → dynamic contrast enhancement → perfusion-weighted imaging → susceptibility-weighted imaging → magnetic resonance spectroscopy → chemical shift imaging → partial volume effect → modulation transfer function → computed tomography dose index → beam-hardening artifact → ring artifact → sinogram → filtered back projection → dual-energy decomposition**.

## 1. diffusion tensor imaging /dɪˈfjuːʒən ˈtɛnsər ˈɪmɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** MRI that models the direction-dependent diffusion of water to characterize tissue microstructure, especially aligned fibers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** theo dõi water diffuses theo hướng nào; trong white matter, hướng đó gợi cấu trúc fiber bundle.
**Grammar & collocations:** `diffusion-tensor-imaging scan` — scan; `DTI tract map` — map; `acquire diffusion tensors` — acquire.
**Examples:** `Diffusion tensor imaging revealed altered fiber organization near the lesion.` → Diffusion tensor imaging cho thấy tổ chức fiber thay đổi gần lesion.
**Liên kết tiếng Hàn:** `확산 텐서 영상` — diffusion tensor imaging.

## 2. fractional anisotropy /ˈfrækʃənəl ˌænəˈsɑtrəpi/
**Part of speech:** noun
**Core meaning (English):** a normalized measure of how strongly water diffusion favors one direction over others within a voxel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức water “thích” một hướng; FA cao thường thấy ở tissue có alignment rõ như white-matter tract.
**Grammar & collocations:** `fractional-anisotropy map` — map; `reduced fractional anisotropy` — FA giảm; `estimate FA` — estimate.
**Examples:** `Fractional anisotropy decreased in the tract after the traumatic injury.` → Fractional anisotropy giảm trong tract sau chấn thương.
**Liên kết tiếng Hàn:** `부분 이방성` — fractional anisotropy.

## 3. functional connectivity /ˈfʌŋkʃənəl ˌkɑnɛkˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** a statistical dependence between activity time series from different brain regions or signals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai vùng có activity lên xuống cùng nhau đến mức nào; đây là relation thống kê, không tự động chứng minh direct wiring.
**Grammar & collocations:** `resting-state functional connectivity` — connectivity; `functional-connectivity matrix` — matrix; `estimate connectivity` — estimate.
**Examples:** `Functional connectivity between the hippocampus and cortex changed during memory retrieval.` → Functional connectivity giữa hippocampus và cortex thay đổi khi retrieval memory.
**Liên kết tiếng Hàn:** `기능적 연결성` — functional connectivity.

## 4. resting-state network /ˈrɛstɪŋ steɪt ˈnɛtwɜrk/
**Part of speech:** noun
**Core meaning (English):** a set of brain regions whose spontaneous activity is correlated while a person is not performing a prescribed task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** network vẫn “nói chuyện” khi subject nghỉ; correlation nền tạo bản đồ tổ chức chức năng.
**Grammar & collocations:** `canonical resting-state network` — network; `resting-state network connectivity` — connectivity; `identify a network` — identify.
**Examples:** `The default resting-state network was less synchronized during the anesthetic exposure.` → Resting-state network mặc định đồng bộ kém hơn trong exposure anesthetic.
**Liên kết tiếng Hàn:** `휴지기 네트워크` — resting-state network.

## 5. hemodynamic response function /ˌhiːmoʊdaɪˈnæmɪk rɪˈspɑns ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a model of how a brief change in neural activity is transformed into a delayed change in local blood oxygenation or flow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “kernel” nối neural event với BOLD signal chậm và trễ hơn.
**Grammar & collocations:** `canonical hemodynamic response function` — function; `HRF convolution` — convolution; `estimate the HRF` — estimate.
**Examples:** `The analysis convolved the stimulus timing with a hemodynamic response function.` → Analysis convolution stimulus timing với hemodynamic response function.
**Liên kết tiếng Hàn:** `혈역학적 반응 함수` — HRF.

## 6. arterial spin labeling /ɑrˈtɪriəl spɪn ˈleɪbəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** an MRI method that magnetically labels inflowing arterial blood to measure tissue perfusion without an injected tracer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “đánh dấu” spin của blood đang đi vào bằng radiofrequency, rồi đo lượng label tới tissue.
**Grammar & collocations:** `arterial-spin-labeling perfusion` — perfusion; `ASL sequence` — sequence; `quantify cerebral blood flow` — quantify.
**Examples:** `Arterial spin labeling measured reduced cerebral blood flow without contrast injection.` → Arterial spin labeling đo cerebral blood flow giảm mà không cần contrast injection.
**Liên kết tiếng Hàn:** `동맥 스핀 라벨링` — arterial spin labeling.

## 7. dynamic susceptibility contrast /daɪˈnæmɪk səˌsɛptəˈbɪləti ˈkɑntræst/
**Part of speech:** noun
**Core meaning (English):** a perfusion MRI technique that tracks the transient susceptibility change caused by a bolus of contrast agent passing through tissue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** theo dõi signal drop khi contrast bolus đi qua blood, từ đó suy ra perfusion và blood volume.
**Grammar & collocations:** `dynamic-susceptibility-contrast perfusion` — perfusion; `DSC bolus` — bolus; `estimate cerebral blood volume` — estimate.
**Examples:** `Dynamic susceptibility contrast showed increased blood volume around the tumor.` → Dynamic susceptibility contrast cho thấy blood volume tăng quanh tumor.
**Liên kết tiếng Hàn:** `동적 자화율 조영` — DSC.

## 8. dynamic contrast enhancement /daɪˈnæmɪk ˈkɑntræst ɪnˈhæntsmənt/
**Part of speech:** noun
**Core meaning (English):** time-resolved imaging of how contrast agent enters, distributes through, and leaves tissue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quay “movie” contrast vào–ra tissue; curve enhancement giúp suy ra permeability và vascular behavior.
**Grammar & collocations:** `dynamic-contrast-enhancement curve` — curve; `DCE-MRI` — MRI; `model contrast kinetics` — model.
**Examples:** `Dynamic contrast enhancement distinguished rapidly perfused tissue from delayed fibrotic tissue.` → Dynamic contrast enhancement phân biệt tissue perfused nhanh với tissue fibrotic delayed.
**Liên kết tiếng Hàn:** `동적 조영 증강` — DCE.

## 9. perfusion-weighted imaging /pərˈfjuːʒən weɪtɪd ˈɪmɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** imaging designed to emphasize differences in blood flow or blood volume across tissue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** image “weighted” theo perfusion, làm vùng thiếu hoặc thừa flow nổi bật hơn anatomy thường.
**Grammar & collocations:** `perfusion-weighted imaging map` — map; `PWI sequence` — sequence; `perfusion deficit` — deficit.
**Examples:** `Perfusion-weighted imaging showed a mismatch between the core lesion and the surrounding at-risk tissue.` → Perfusion-weighted imaging cho thấy mismatch giữa lesion core và tissue nguy cơ xung quanh.
**Liên kết tiếng Hàn:** `관류 강조 영상` — perfusion-weighted imaging.

## 10. susceptibility-weighted imaging /səˌsɛptəˈbɪləti weɪtɪd ˈɪmɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** MRI that combines magnitude and phase information to emphasize local magnetic susceptibility differences from blood products, iron, or minerals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tận dụng phase/magnitude để làm nổi bật tiny vessel, microbleed, iron hoặc mineral.
**Grammar & collocations:** `susceptibility-weighted imaging sequence` — sequence; `SWI venography` — venography; `detect microbleeds` — detect.
**Examples:** `Susceptibility-weighted imaging revealed multiple small hemorrhagic deposits.` → Susceptibility-weighted imaging cho thấy nhiều deposit hemorrhagic nhỏ.
**Liên kết tiếng Hàn:** `자화율 강조 영상` — SWI.

## 11. magnetic resonance spectroscopy /mæɡˈnɛtɪk ˈrɛzənəns spɛkˈtrɑskəpi/
**Part of speech:** noun
**Core meaning (English):** an MRI-based method that measures chemical-shifted signals from metabolites rather than producing only an anatomical image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** MRI “nghe” peak hóa học của metabolite như choline, creatine hoặc lactate trong voxel.
**Grammar & collocations:** `proton magnetic-resonance spectroscopy` — spectroscopy; `MRS metabolite peak` — peak; `acquire a spectrum` — acquire.
**Examples:** `Magnetic resonance spectroscopy showed an elevated lactate peak in the injured tissue.` → Magnetic resonance spectroscopy cho thấy lactate peak tăng trong tissue bị thương.
**Liên kết tiếng Hàn:** `자기공명 분광법` — MRS.

## 12. chemical shift imaging /ˈkɛmɪkəl ʃɪft ˈɪmɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** imaging that separates signals from chemically different environments, such as water and fat, through their resonance-frequency offset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** water và fat “hát” lệch frequency, nên có thể tách chúng thành image riêng hoặc đo fraction.
**Grammar & collocations:** `chemical-shift imaging sequence` — sequence; `water–fat separation` — separation; `in-phase image` — image.
**Examples:** `Chemical shift imaging quantified the fat fraction in the liver.` → Chemical shift imaging định lượng fat fraction trong liver.
**Liên kết tiếng Hàn:** `화학적 이동 영상` — chemical shift imaging.

## 13. partial volume effect /ˈpɑrʃəl ˈvɑljuː ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a measurement error caused when one voxel contains multiple tissues whose signals are averaged together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** voxel quá to ôm nhiều tissue, nên signal là “món trộn” và boundary bị mờ.
**Grammar & collocations:** `partial-volume artifact` — artifact; `reduce partial volume effects` — reduce; `mixed voxel` — voxel.
**Examples:** `Partial volume effect made the thin cortical layer appear less dense than it was.` → Partial volume effect khiến cortical layer mỏng trông ít dense hơn thực tế.
**Liên kết tiếng Hàn:** `부분 용적 효과` — partial volume effect.

## 14. modulation transfer function /ˌmɑdʒəˈleɪʃən ˈtrænsfər ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a frequency-domain measure of how faithfully an imaging system preserves contrast at different spatial detail scales.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** MTF cho biết system giữ contrast của detail nhỏ tốt đến đâu khi spatial frequency tăng.
**Grammar & collocations:** `modulation-transfer-function curve` — curve; `MTF resolution metric` — metric; `measure system sharpness` — measure.
**Examples:** `The modulation transfer function showed that the new detector preserved finer detail.` → Modulation transfer function cho thấy detector mới giữ detail nhỏ tốt hơn.
**Liên kết tiếng Hàn:** `변조 전달 함수` — MTF.

## 15. computed tomography dose index /kəmˈpjuːtɪd təˈmɑɡrəfi doʊs ˈɪndɛks/
**Part of speech:** noun
**Core meaning (English):** a standardized CT dose metric derived from radiation exposure measured in a defined phantom and scan protocol.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ số dose chuẩn hóa để so protocol CT, không phải dose cá nhân hoàn hảo của từng patient.
**Grammar & collocations:** `volume CT dose index` — CTDIvol; `CTDI measurement` — measurement; `report the dose index` — report.
**Examples:** `The protocol reduced the computed tomography dose index while preserving diagnostic contrast.` → Protocol giảm computed tomography dose index mà vẫn giữ diagnostic contrast.
**Liên kết tiếng Hàn:** `컴퓨터 단층촬영 선량 지수` — CTDI.

## 16. beam-hardening artifact /ˈbiːm ˌhɑrdənɪŋ ˈɑrtəfækt/
**Part of speech:** noun
**Core meaning (English):** a CT artifact caused when lower-energy photons are preferentially absorbed, changing the effective spectrum and creating streaks, cupping, or shading.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** beam đi qua vật dày bị “cứng” hơn vì photon mềm mất trước, làm image có streak/cupping giả.
**Grammar & collocations:** `beam-hardening correction` — correction; `beam-hardening artifact` — artifact; `reduce streaks` — reduce.
**Examples:** `The metal implant produced a beam-hardening artifact across the adjacent tissue.` → Metal implant tạo beam-hardening artifact qua tissue kế bên.
**Liên kết tiếng Hàn:** `빔 경화 인공물` — artifact beam hardening.

## 17. ring artifact /rɪŋ ˈɑrtəfækt/
**Part of speech:** noun
**Core meaning (English):** a circular or concentric CT artifact caused by a miscalibrated or defective detector element during rotation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một detector lỗi vẽ “vòng tròn” quanh center khi gantry quay.
**Grammar & collocations:** `concentric ring artifact` — artifact; `detector calibration` — calibration; `remove ring artifacts` — remove.
**Examples:** `Detector recalibration removed the ring artifact from the reconstructed abdomen.` → Recalibration detector xóa ring artifact khỏi abdomen reconstructed.
**Liên kết tiếng Hàn:** `링 인공물` — ring artifact.

## 18. sinogram /ˈsaɪnəɡræm/
**Part of speech:** noun
**Core meaning (English):** a representation of projection measurements arranged by detector position and view angle before CT reconstruction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** projection data được trải thành pattern sinusoidal; một object point đi qua sinogram như đường cong.
**Grammar & collocations:** `CT sinogram` — sinogram; `sinogram preprocessing` — preprocessing; `inspect projection data` — inspect.
**Examples:** `The engineer inspected the sinogram to identify a corrupted angular range.` → Engineer kiểm tra sinogram để tìm angular range bị hỏng.
**Liên kết tiếng Hàn:** `시노그램` — sinogram.

## 19. filtered back projection /ˈfɪltərd bæk prəˈdʒɛkʃən/
**Part of speech:** noun
**Core meaning (English):** a CT reconstruction method that filters projection data before back-projecting it across the image grid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lọc projection trước rồi “rải ngược” qua image; filter sửa blur vốn có của back projection đơn giản.
**Grammar & collocations:** `filtered-back-projection reconstruction` — reconstruction; `FBP kernel` — kernel; `reconstruct projections` — reconstruct.
**Examples:** `Filtered back projection produced a sharp image but amplified streaking noise at low dose.` → Filtered back projection tạo image sharp nhưng khuếch đại streaking noise ở low dose.
**Liên kết tiếng Hàn:** `필터 보정 역투영` — FBP.

## 20. dual-energy decomposition /ˈduːəl ˈɛnərdʒi ˌdiːkɑmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** separation of material composition using CT measurements acquired at two different x-ray energy spectra.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai energy giúp tách material như iodine, calcium, water hoặc uric acid mà một spectrum khó phân biệt.
**Grammar & collocations:** `dual-energy decomposition map` — map; `material decomposition` — decomposition; `spectral CT` — CT.
**Examples:** `Dual-energy decomposition isolated iodine enhancement from calcified plaque.` → Dual-energy decomposition tách iodine enhancement khỏi plaque calcified.
**Liên kết tiếng Hàn:** `이중 에너지 분해` — dual-energy decomposition.

## Review in context

**Diffusion tensor imaging** measures directional water motion, with **fractional anisotropy** summarizing how strongly diffusion favors one axis. **Functional connectivity** and a **resting-state network** describe correlated brain activity, while the **hemodynamic response function** links neural timing to a delayed blood signal. **Arterial spin labeling**, **dynamic susceptibility contrast**, **dynamic contrast enhancement**, and **perfusion-weighted imaging** quantify different aspects of tissue perfusion; **susceptibility-weighted imaging** highlights blood products and iron. **Magnetic resonance spectroscopy** and **chemical shift imaging** separate metabolites or chemical environments. Resolution is limited by the **partial volume effect** and assessed with a **modulation transfer function**. In CT, the **computed tomography dose index** describes protocol exposure, while a **beam-hardening artifact**, **ring artifact**, or corrupted **sinogram** can damage reconstruction. **Filtered back projection** rebuilds the image, and **dual-energy decomposition** estimates material composition.

**Bản dịch tiếng Việt:**

**Diffusion tensor imaging** đo chuyển động directional của water, còn **fractional anisotropy** tóm tắt mức diffusion ưu tiên một hướng. **Functional connectivity** và **resting-state network** mô tả activity não tương quan, trong khi **hemodynamic response function** nối timing neural với blood signal trễ. **Arterial spin labeling**, **dynamic susceptibility contrast**, **dynamic contrast enhancement** và **perfusion-weighted imaging** đo các mặt khác nhau của perfusion; **susceptibility-weighted imaging** làm nổi bật blood product và iron. **Magnetic resonance spectroscopy** và **chemical shift imaging** tách metabolite hoặc chemical environment. Resolution bị giới hạn bởi **partial volume effect** và được đánh giá bằng **modulation transfer function**. Trong CT, **computed tomography dose index** mô tả exposure của protocol, còn **beam-hardening artifact**, **ring artifact** hoặc **sinogram** hỏng có thể làm hỏng reconstruction. **Filtered back projection** dựng lại image, còn **dual-energy decomposition** ước lượng thành phần material.
