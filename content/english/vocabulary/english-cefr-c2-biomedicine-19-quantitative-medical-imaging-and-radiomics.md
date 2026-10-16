# C2 Vocabulary — Quantitative medical imaging and radiomics

This lesson follows quantitative imaging from acquisition physics through reconstruction, registration, biomarker extraction, and clinical interpretation.

Flow: **radiomics → diffusion-weighted imaging → apparent diffusion coefficient → susceptibility artifact → k-space → parallel imaging → compressed sensing reconstruction → iterative reconstruction → attenuation correction → partial-volume effect → standardized uptake value → lesion segmentation → deformable registration → radiogenomics → dose-length product → Hounsfield unit → contrast bolus → image harmonization → scanner drift → quantitative imaging biomarker**.

## 1. radiomics /ˌreɪdiˈoʊmɪks/
**Part of speech:** noun
**Core meaning (English):** extracting large numbers of quantitative features from medical images to characterize tissue or disease.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến hình ảnh y khoa thành nhiều feature đo được để phân tích bệnh.
**Grammar & collocations:** `radiomics feature` — feature radiomics; `radiomics pipeline` — pipeline.
**Examples:** `Radiomics detected texture differences that were subtle to a visual reader.` → Radiomics phát hiện khác biệt texture khó thấy bằng mắt.
**Liên kết tiếng Hàn:** `라디오믹스`.

## 2. diffusion-weighted imaging /dɪˈfjuːʒən ˈweɪtɪd ˈɪmɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** imaging that emphasizes the movement of water molecules to reveal tissue structure and cellular changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** MRI nhạy với chuyển động nước, thường hữu ích để thấy thay đổi tế bào.
**Grammar & collocations:** `diffusion-weighted sequence` — sequence; `DWI signal` — tín hiệu DWI.
**Examples:** `Diffusion-weighted imaging showed restricted water movement in the acute lesion.` → DWI cho thấy chuyển động nước bị hạn chế ở tổn thương cấp.
**Liên kết tiếng Hàn:** `확산강조 영상`.

## 3. apparent diffusion coefficient /əˈpærənt dɪˈfjuːʒən ˌkoʊəˈfɪʃənt/
**Part of speech:** noun
**Core meaning (English):** a calculated measure describing apparent water diffusivity from diffusion-weighted MRI data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ số ADC tóm tắt mức nước khuếch tán trong mô.
**Grammar & collocations:** `apparent-diffusion-coefficient map` — map; `low ADC` — ADC thấp.
**Examples:** `A low apparent diffusion coefficient supported the suspicion of densely packed cells.` → ADC thấp ủng hộ nghi ngờ mô có tế bào dày đặc.
**Liên kết tiếng Hàn:** `겉보기 확산 계수`.

## 4. susceptibility artifact /səˌsɛptəˈbɪləti ˈɑrtəfækt/
**Part of speech:** noun
**Core meaning (English):** image distortion or signal loss caused by local magnetic-field differences between materials.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** méo hoặc mất tín hiệu do khác biệt từ tính, thường quanh kim loại hoặc khí.
**Grammar & collocations:** `susceptibility-artifact reduction` — giảm artifact; `metal-induced artifact` — artifact do kim loại.
**Examples:** `The implant produced a susceptibility artifact that obscured the nearby tissue.` → Implant tạo artifact che khuất mô lân cận.
**Liên kết tiếng Hàn:** `자화율 인공물`.

## 5. k-space /keɪ speɪs/
**Part of speech:** noun
**Core meaning (English):** the frequency-domain data space sampled during MRI acquisition before image reconstruction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không gian dữ liệu tần số của MRI, chưa phải ảnh cuối cùng.
**Grammar & collocations:** `sample k-space` — lấy mẫu; `k-space trajectory` — quỹ đạo.
**Examples:** `The sequence sampled the center of k-space more densely to preserve image contrast.` → Sequence lấy mẫu trung tâm k-space dày hơn để giữ contrast.
**Liên kết tiếng Hàn:** `k-공간`.

## 6. parallel imaging /ˈpærəˌlɛl ˈɪmɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** an MRI acceleration technique that uses multiple receiver coils to reconstruct an image from undersampled data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều coil thu cùng lúc để giảm thời gian scan.
**Grammar & collocations:** `parallel-imaging factor` — hệ số; `coil sensitivity map` — map nhạy coil.
**Examples:** `Parallel imaging shortened the scan while preserving enough spatial detail for planning.` → Parallel imaging rút ngắn scan mà vẫn giữ đủ chi tiết không gian.
**Liên kết tiếng Hàn:** `병렬 영상화`.

## 7. compressed sensing reconstruction /kəmˈprɛst ˈsɛnsɪŋ ˌriːkənˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** reconstructing an image from sparse measurements by exploiting signal sparsity and regularization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng dữ liệu thưa và giả định sparsity để dựng ảnh chất lượng tốt.
**Grammar & collocations:** `compressed-sensing reconstruction time` — thời gian; `sparsity prior` — prior sparsity.
**Examples:** `Compressed sensing reconstruction allowed a shorter respiratory scan.` → Reconstruction compressed sensing cho phép scan hô hấp ngắn hơn.
**Liên kết tiếng Hàn:** `압축 센싱 재구성`.

## 8. iterative reconstruction /ˈɪtərətɪv ˌriːkənˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** image reconstruction that repeatedly updates an estimate to reduce noise or enforce a measurement model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dựng ảnh qua nhiều vòng lặp, mỗi vòng so với dữ liệu đo rồi chỉnh lại.
**Grammar & collocations:** `iterative-reconstruction algorithm` — thuật toán; `iteration count` — số vòng.
**Examples:** `Iterative reconstruction reduced noise without blurring the small vessel as much as simple smoothing.` → Reconstruction lặp giảm noise mà ít làm mờ mạch nhỏ hơn smoothing đơn giản.
**Liên kết tiếng Hàn:** `반복 재구성`.

## 9. attenuation correction /əˈtɛnjəˌweɪʃən kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting measured signal to account for energy loss as radiation passes through tissue or other material.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa tín hiệu bị suy hao khi đi qua mô để định lượng chính xác hơn.
**Grammar & collocations:** `attenuation-correction map` — map; `apply attenuation correction` — áp dụng.
**Examples:** `Attenuation correction prevented the diaphragm from appearing falsely more active on the scan.` → Correction tránh cơ hoành trông hoạt động cao giả tạo.
**Liên kết tiếng Hàn:** `감쇠 보정`.

## 10. partial-volume effect /ˈpɑrʃəl ˈvɑljum ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** measurement error that occurs when one image voxel contains more than one tissue type.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một voxel trộn nhiều mô nên giá trị đo không đại diện hoàn toàn cho mô nào.
**Grammar & collocations:** `partial-volume correction` — correction; `reduce partial-volume error` — giảm lỗi.
**Examples:** `The partial-volume effect made the thin cortical layer appear less dense than it was.` → Hiệu ứng partial-volume làm lớp vỏ mỏng trông kém đậm đặc hơn thực tế.
**Liên kết tiếng Hàn:** `부분 용적 효과`.

## 11. standardized uptake value /ˈstændərˌdaɪzd ˈʌpˌteɪk ˈvæljuː/
**Part of speech:** noun
**Core meaning (English):** a normalized PET measure estimating tracer concentration relative to injected activity and patient factors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** SUV chuẩn hóa mức tracer uptake để so vùng hoặc theo dõi theo thời gian.
**Grammar & collocations:** `standardized-uptake-value threshold` — ngưỡng; `SUVmax` — SUV tối đa.
**Examples:** `The report compared the standardized uptake value before and after therapy.` → Report so sánh SUV trước và sau điều trị.
**Liên kết tiếng Hàn:** `표준 섭취 계수`.

## 12. lesion segmentation /ˈliːʒən ˌsɛɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** delineating an abnormal region from surrounding tissue in an image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vẽ ranh giới tổn thương để đo volume, shape hoặc texture.
**Grammar & collocations:** `lesion-segmentation mask` — mask; `manual lesion segmentation` — segmentation thủ công.
**Examples:** `Lesion segmentation produced a mask for measuring volume and radiomic texture.` → Segmentation tạo mask để đo volume và texture radiomics.
**Liên kết tiếng Hàn:** `병변 분할`.

## 13. deformable registration /dɪˈfɔrməbəl ˌrɛdʒəˈstreɪʃən/
**Part of speech:** noun
**Core meaning (English):** aligning images by allowing local shape changes rather than applying only a rigid translation or rotation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đăng ký ảnh cho phép mô biến dạng cục bộ, hữu ích khi anatomy thay đổi.
**Grammar & collocations:** `deformable-registration field` — field; `register longitudinal scans` — đăng ký scan theo thời gian.
**Examples:** `Deformable registration aligned the shrinking tumor across treatment sessions.` → Registration biến dạng căn khối u đang nhỏ lại qua các buổi điều trị.
**Liên kết tiếng Hàn:** `변형 가능 영상 정합`.

## 14. radiogenomics /ˌreɪdioʊdʒəˈnoʊmɪks/
**Part of speech:** noun
**Core meaning (English):** studying associations between quantitative imaging features and genomic or molecular characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối phenotype trên ảnh với genotype hoặc signature phân tử.
**Grammar & collocations:** `radiogenomics association` — mối liên hệ; `radiogenomic signature` — signature.
**Examples:** `Radiogenomics linked an imaging phenotype with a mutation pattern in the tumor cohort.` → Radiogenomics nối phenotype hình ảnh với mẫu mutation trong cohort u.
**Liên kết tiếng Hàn:** `라디오게노믹스`.

## 15. dose-length product /doʊs lɛŋθ ˈprɑdəkt/
**Part of speech:** noun
**Core meaning (English):** a CT radiation metric that combines the dose index with the scanned length.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** DLP phản ánh tổng mức phơi nhiễm theo cả dose và chiều dài vùng scan.
**Grammar & collocations:** `dose-length-product report` — report; `estimate patient dose` — ước tính dose.
**Examples:** `The protocol reduced the dose-length product by shortening the coverage range.` → Protocol giảm DLP bằng cách rút ngắn vùng bao phủ.
**Liên kết tiếng Hàn:** `선량 길이 곱`.

## 16. Hounsfield unit /ˈhaʊnzˌfiːld ˈjuːnɪt/
**Part of speech:** noun
**Core meaning (English):** a CT attenuation scale value that expresses tissue density relative to water and air.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** HU là thang density đặc trưng của CT, lấy water và air làm mốc.
**Grammar & collocations:** `Hounsfield-unit range` — khoảng; `measure in Hounsfield units` — đo bằng HU.
**Examples:** `The radiologist used the Hounsfield unit range to distinguish fluid from calcification.` → Bác sĩ dùng khoảng HU để phân biệt dịch với vôi hóa.
**Liên kết tiếng Hàn:** `하운스필드 단위`.

## 17. contrast bolus /ˈkɑntræst ˈboʊləs/
**Part of speech:** noun
**Core meaning (English):** a concentrated, timed injection of contrast material used to enhance vascular or tissue visibility.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mũi contrast đậm đặc tiêm đúng thời điểm để làm nổi mạch hoặc mô.
**Grammar & collocations:** `contrast-bolus timing` — timing; `track the bolus` — theo dõi bolus.
**Examples:** `Contrast bolus timing determined whether the arterial phase captured the lesion clearly.` → Timing bolus quyết định arterial phase có bắt rõ tổn thương không.
**Liên kết tiếng Hàn:** `조영제 볼루스`.

## 18. image harmonization /ˈɪmɪdʒ ˌhɑrmənəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting images from different scanners or protocols so quantitative features are more comparable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm dữ liệu ảnh từ máy/protocol khác nhau bớt lệch để so sánh được.
**Grammar & collocations:** `image-harmonization method` — phương pháp; `harmonize scanner features` — harmonize.
**Examples:** `Image harmonization reduced scanner-related variation in the multicenter dataset.` → Harmonization giảm variation do scanner trong dataset đa trung tâm.
**Liên kết tiếng Hàn:** `영상 조화화`.

## 19. scanner drift /ˈskænər drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual change in scanner output or calibration over time that can alter measured image values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scanner lệch dần theo thời gian, làm cùng phantom cho giá trị khác trước.
**Grammar & collocations:** `scanner-drift monitoring` — monitoring; `calibrate for drift` — hiệu chuẩn.
**Examples:** `Scanner drift changed the measured intensity enough to threaten the longitudinal study.` → Drift làm intensity đo được đổi đủ lớn để đe dọa nghiên cứu dọc.
**Liên kết tiếng Hàn:** `스캐너 드리프트`.

## 20. quantitative imaging biomarker /ˈkwɑntəˌteɪtɪv ˈɪmɪdʒɪŋ ˈbaɪoʊˌmɑrkər/
**Part of speech:** noun
**Core meaning (English):** a reproducible numerical imaging measurement associated with a biological or clinical state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** con số từ ảnh có quy trình đo lặp lại và liên quan tới trạng thái bệnh.
**Grammar & collocations:** `quantitative-imaging-biomarker validation` — validation; `qualify a biomarker` — thẩm định.
**Examples:** `The study required quantitative imaging biomarker validation before clinical deployment.` → Nghiên cứu cần validation biomarker định lượng trước khi triển khai lâm sàng.
**Liên kết tiếng Hàn:** `정량 영상 바이오마커`.

## Review in context

**Radiomics** can extract features from **diffusion-weighted imaging**, including an **apparent diffusion coefficient**, but analysts must inspect a **susceptibility artifact** and understand how **k-space** was sampled. **Parallel imaging**, **compressed sensing reconstruction**, and **iterative reconstruction** shorten scans in different ways. PET and CT workflows apply **attenuation correction**, account for the **partial-volume effect**, and report a **standardized uptake value**, while **lesion segmentation** defines the region of interest. **Deformable registration** aligns changing anatomy, and **radiogenomics** relates image patterns to molecular data. CT reports may include a **dose-length product** and a **Hounsfield unit** range; a timed **contrast bolus** affects enhancement. Across sites, **image harmonization** helps control **scanner drift** so a **quantitative imaging biomarker** remains comparable.

**Bản dịch tiếng Việt:** **Radiomics** có thể trích xuất feature từ **diffusion-weighted imaging**, bao gồm **apparent diffusion coefficient**, nhưng analyst phải xem **susceptibility artifact** và hiểu cách lấy mẫu **k-space**. **Parallel imaging**, **compressed sensing reconstruction** và **iterative reconstruction** rút ngắn scan theo các cách khác nhau. Quy trình PET và CT áp dụng **attenuation correction**, tính đến **partial-volume effect** và báo cáo **standardized uptake value**, còn **lesion segmentation** xác định vùng quan tâm. **Deformable registration** căn chỉnh anatomy thay đổi, còn **radiogenomics** nối pattern hình ảnh với dữ liệu phân tử. Report CT có thể gồm **dose-length product** và khoảng **Hounsfield unit**; **contrast bolus** đúng timing ảnh hưởng enhancement. Giữa nhiều cơ sở, **image harmonization** giúp kiểm soát **scanner drift** để **quantitative imaging biomarker** vẫn so sánh được.
