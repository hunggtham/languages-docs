# C2 Vocabulary — Cryo-EM and structural biology

This lesson follows macromolecular structure determination from vitrified specimens and electron imaging through computational reconstruction, resolution assessment, and atomic-model interpretation.

Flow: **structural biology → cryo-electron microscopy → vitrification → plunge freezing → electron dose → beam-induced motion → particle picking → single-particle analysis → 2D classification → 3D reconstruction → orientation estimation → contrast transfer function → motion correction → map resolution → local resolution → Fourier shell correlation → Coulomb potential map → atomic model → model refinement → conformational heterogeneity**.

## 1. structural biology /ˈstrʌktʃərəl baɪˈɑlədʒi/
**Part of speech:** noun
**Core meaning (English):** the study of the three-dimensional structures of biological macromolecules and how those structures relate to function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sinh học cấu trúc; nhìn protein, nucleic acid hoặc complex ở dạng 3D để hiểu chúng hoạt động như thế nào.
**Grammar & collocations:** `structural-biology method` — phương pháp structural biology; `molecular structure` — cấu trúc phân tử.
**Examples:** `Structural biology revealed how the receptor changes shape after ligand binding.` → Structural biology cho thấy receptor đổi hình dạng thế nào sau khi ligand bind.
**Liên kết tiếng Hàn:** `구조생물학`.

## 2. cryo-electron microscopy /ˌkraɪoʊ ɪˈlɛktrɑn maɪˈkrɑskəpi/
**Part of speech:** noun
**Core meaning (English):** electron microscopy of rapidly frozen biological specimens maintained at cryogenic temperature, allowing structures to be studied in a near-native hydrated state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cryo-EM; sample được đông cực nhanh trong ice vô định hình rồi chụp bằng electron ở nhiệt độ rất thấp.
**Grammar & collocations:** `cryo-EM dataset` — dataset cryo-EM; `cryo-EM structure` — structure bằng cryo-EM.
**Examples:** `Cryo-electron microscopy resolved the membrane complex without requiring crystallization.` → Cryo-EM giải structure membrane complex mà không cần crystallization.
**Liên kết tiếng Hàn:** `극저온 전자현미경`, `크라이오-EM`.

## 3. vitrification /ˌvɪtrəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the conversion of liquid water into a glass-like solid without forming damaging crystalline ice.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đóng băng nhanh đến mức water thành “glass ice” thay vì crystal; giữ biomolecule gần trạng thái tự nhiên hơn.
**Grammar & collocations:** `sample vitrification` — vitrify sample; `vitreous ice` — ice vô định hình.
**Examples:** `Successful vitrification preserved particles inside a thin layer of vitreous ice.` → Vitrification thành công giữ particle trong lớp vitreous ice mỏng.
**Liên kết tiếng Hàn:** `유리화`.

## 4. plunge freezing /plʌndʒ ˈfriːzɪŋ/
**Part of speech:** noun
**Core meaning (English):** rapidly immersing a specimen grid into a cryogenic liquid so the thin aqueous film vitrifies almost instantly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhúng grid cực nhanh vào cryogen để water không kịp tạo crystal.
**Grammar & collocations:** `plunge-freeze a grid` — plunge-freeze grid; `freezing conditions` — điều kiện freezing.
**Examples:** `The operator optimized blotting time before plunge freezing the grid.` → Operator tối ưu blotting time trước khi plunge-freeze grid.
**Liên kết tiếng Hàn:** `급속 침지 동결`.

## 5. electron dose /ɪˈlɛktrɑn doʊs/
**Part of speech:** noun
**Core meaning (English):** the amount of electron exposure delivered to a specimen, commonly expressed per unit area.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “liều electron” sample nhận; dose quá cao tăng signal nhưng phá hủy biomolecule do radiation damage.
**Grammar & collocations:** `total electron dose` — dose tổng; `dose fractionation` — chia dose thành frame.
**Examples:** `The acquisition software limited electron dose to reduce radiation damage.` → Software acquisition giới hạn electron dose để giảm radiation damage.
**Liên kết tiếng Hàn:** `전자 선량`.

## 6. beam-induced motion /biːm ɪnˈduːst ˈmoʊʃən/
**Part of speech:** noun
**Core meaning (English):** specimen movement caused by electron irradiation and mechanical relaxation during image acquisition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** electron beam làm sample/grid dịch nhẹ trong lúc chụp; motion nhỏ cũng làm high-resolution detail bị blur.
**Grammar & collocations:** `beam-induced drift` — drift do beam; `motion trajectory` — trajectory motion.
**Examples:** `Beam-induced motion blurred high-frequency detail until frame alignment corrected it.` → Beam-induced motion làm mờ detail high-frequency cho tới khi frame alignment sửa lại.
**Liên kết tiếng Hàn:** `전자빔 유도 움직임`.

## 7. particle picking /ˈpɑrtɪkəl ˈpɪkɪŋ/
**Part of speech:** noun
**Core meaning (English):** identifying and extracting individual molecular particle images from electron micrographs for later analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm từng “hạt protein” trong ảnh micrograph lớn rồi crop chúng ra thành dataset particle.
**Grammar & collocations:** `automated particle picking` — picking tự động; `particle coordinates` — tọa độ particle.
**Examples:** `Automated particle picking identified several million candidate particles from the micrographs.` → Particle picking tự động tìm vài triệu candidate particle từ micrograph.
**Liên kết tiếng Hàn:** `입자 선택`, `파티클 피킹`.

## 8. single-particle analysis /ˈsɪŋɡəl ˈpɑrtɪkəl əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** a cryo-EM approach that combines many noisy images of separate copies of the same macromolecular particle to reconstruct its three-dimensional structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chụp rất nhiều copy riêng lẻ của cùng molecule ở orientation khác nhau rồi combine để dựng 3D.
**Grammar & collocations:** `single-particle reconstruction` — reconstruction single-particle; `particle stack` — stack particle.
**Examples:** `Single-particle analysis produced a high-resolution structure from hundreds of thousands of aligned views.` → Single-particle analysis tạo structure độ phân giải cao từ hàng trăm nghìn view đã align.
**Liên kết tiếng Hàn:** `단입자 분석`.

## 9. 2D classification /tuː diː ˌklæsəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** grouping particle images into two-dimensional classes with similar views so noisy, damaged, or contaminating particles can be separated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom particle có projection giống nhau thành class; class average đẹp giúp loại junk và đánh giá data quality.
**Grammar & collocations:** `2D class average` — average class 2D; `classification round` — vòng classification.
**Examples:** `Two-dimensional classification removed ice contamination and poorly defined particles.` → 2D classification loại ice contamination và particle không rõ.
**Liên kết tiếng Hàn:** `2차원 분류`.

## 10. 3D reconstruction /θriː diː ˌriːkənˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** computational recovery of a three-dimensional molecular volume from many two-dimensional particle projections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng nhiều ảnh 2D ở góc khác nhau để dựng lại volume 3D của molecule.
**Grammar & collocations:** `initial 3D reconstruction` — reconstruction ban đầu; `reconstruction algorithm` — thuật toán reconstruction.
**Examples:** `The final 3D reconstruction revealed a channel running through the center of the complex.` → 3D reconstruction cuối cho thấy một channel chạy qua giữa complex.
**Liên kết tiếng Hàn:** `3차원 재구성`.

## 11. orientation estimation /ˌɔriənˈteɪʃən ˌɛstəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** determining the viewing direction and in-plane rotation that best explain how each particle image corresponds to a three-dimensional structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đoán mỗi particle đang được nhìn từ góc nào để đặt projection đúng vị trí trong reconstruction 3D.
**Grammar & collocations:** `particle orientation` — orientation particle; `angular assignment` — gán góc.
**Examples:** `Accurate orientation estimation was essential for recovering fine structural features.` → Orientation estimation chính xác là điều thiết yếu để recover feature cấu trúc nhỏ.
**Liên kết tiếng Hàn:** `방향 추정`.

## 12. contrast transfer function /ˈkɑntræst ˈtrænsfɝ ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a mathematical description of how the electron microscope transfers spatial-frequency information from the specimen into the recorded image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** microscope không truyền mọi detail giống nhau; CTF mô tả frequency nào bị đảo phase, suy giảm hoặc mất.
**Grammar & collocations:** `CTF estimation` — ước lượng CTF; `CTF correction` — sửa CTF.
**Examples:** `The pipeline estimated the contrast transfer function separately for each micrograph.` → Pipeline estimate CTF riêng cho từng micrograph.
**Liên kết tiếng Hàn:** `대비 전달 함수`, `CTF`.

## 13. motion correction /ˈmoʊʃən kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** computational alignment of movie frames to compensate for specimen drift and beam-induced motion during exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** align frame nhỏ trong movie để undo movement của sample và lấy ảnh sắc nét hơn.
**Grammar & collocations:** `frame-based motion correction` — correction theo frame; `motion-corrected micrograph` — micrograph đã sửa.
**Examples:** `Motion correction recovered high-resolution detail that was invisible in the raw summed image.` → Motion correction recover detail high-resolution vốn không thấy trong raw summed image.
**Liên kết tiếng Hàn:** `움직임 보정`.

## 14. map resolution /mæp ˌrɛzəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** an estimate of the smallest spatial detail that can be reliably distinguished in a reconstructed cryo-EM map.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** map “thấy chi tiết nhỏ đến đâu”; resolution tốt hơn cho phép distinguish side chain hoặc backbone rõ hơn.
**Grammar & collocations:** `global map resolution` — resolution toàn map; `near-atomic resolution` — gần atomic.
**Examples:** `At the reported map resolution, most side-chain orientations were clearly interpretable.` → Ở map resolution được report, phần lớn orientation của side chain có thể interpret rõ.
**Liên kết tiếng Hàn:** `맵 해상도`.

## 15. local resolution /ˈloʊkəl ˌrɛzəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** spatially varying resolution measured within different regions of one reconstructed map.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cùng một map nhưng core cứng có thể rất nét còn loop flexible mờ hơn; local resolution mô tả difference đó.
**Grammar & collocations:** `local-resolution map` — map local resolution; `regional resolution` — resolution theo vùng.
**Examples:** `Local resolution was highest in the rigid core and lower around flexible peripheral domains.` → Local resolution cao nhất ở rigid core và thấp hơn ở domain flexible ngoài rìa.
**Liên kết tiếng Hàn:** `국소 해상도`.

## 16. Fourier shell correlation /ˈfʊriˌeɪ ʃɛl ˌkɔrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a frequency-domain correlation measure between independently reconstructed half-maps, widely used to estimate cryo-EM resolution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia data thành hai nửa, reconstruct riêng rồi hỏi hai map còn giống nhau tới spatial frequency nào.
**Grammar & collocations:** `FSC curve` — curve FSC; `FSC threshold` — threshold resolution.
**Examples:** `The Fourier shell correlation curve crossed the chosen threshold at 2.9 angstroms.` → FSC curve cắt threshold đã chọn tại 2.9 angstrom.
**Liên kết tiếng Hàn:** `푸리에 셸 상관`, `FSC`.

## 17. Coulomb potential map /ˈkuːlɑm pəˈtɛnʃəl mæp/
**Part of speech:** noun
**Core meaning (English):** a three-dimensional cryo-EM reconstruction representing the specimen's electrostatic potential rather than an X-ray-style electron-density distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** map cryo-EM biểu diễn electrostatic potential mà electron beam “cảm nhận”; không hoàn toàn giống electron-density map của X-ray crystallography.
**Grammar & collocations:** `cryo-EM potential map` — map potential cryo-EM; `map contour` — contour map.
**Examples:** `The Coulomb potential map showed clear density-like features for the ligand and surrounding residues.` → Coulomb potential map cho feature rõ của ligand và residue xung quanh.
**Liên kết tiếng Hàn:** `쿨롱 퍼텐셜 맵`.

## 18. atomic model /əˈtɑmɪk ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a coordinate-based representation specifying the positions and identities of atoms interpreted within an experimental structural map.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model gồm tọa độ atom được fit vào experimental map; map là measurement, model là interpretation dựa trên measurement đó.
**Grammar & collocations:** `build an atomic model` — build model; `model coordinates` — tọa độ model.
**Examples:** `Researchers built an atomic model into the reconstructed map and checked its geometry.` → Researchers build atomic model vào reconstructed map rồi kiểm tra geometry.
**Liên kết tiếng Hàn:** `원자 모델`.

## 19. model refinement /ˈmɑdəl rɪˈfaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** iterative adjustment of an atomic model to improve its agreement with experimental data while maintaining realistic molecular geometry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh model nhiều vòng để fit map tốt hơn nhưng không làm bond, angle hoặc stereochemistry trở nên phi thực tế.
**Grammar & collocations:** `real-space refinement` — refinement trong real space; `refinement restraint` — constraint geometry.
**Examples:** `Model refinement improved map agreement without introducing unrealistic bond geometry.` → Model refinement cải thiện agreement với map mà không tạo bond geometry phi thực tế.
**Liên kết tiếng Hàn:** `모델 정제`.

## 20. conformational heterogeneity /ˌkɑnfɔrˈmeɪʃənəl ˌhɛtərəˌdʒəˈniːəti/
**Part of speech:** noun
**Core meaning (English):** the presence of multiple molecular shapes or structural states within the same specimen population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sample không phải mọi molecule đều cùng một pose; có nhiều state động coexist và cần classification để tách.
**Grammar & collocations:** `conformational state` — state cấu dạng; `structural heterogeneity` — heterogeneity cấu trúc.
**Examples:** `Three-dimensional classification separated conformational heterogeneity into open and closed receptor states.` → 3D classification tách conformational heterogeneity thành receptor state open và closed.
**Liên kết tiếng Hàn:** `구조적 이질성`, `구조 상태 다양성`.

## Review in context

In **structural biology**, **cryo-electron microscopy** can reveal macromolecular architecture without crystallization. Sample preparation aims for **vitrification**, commonly through **plunge freezing**, while acquisition carefully limits **electron dose** because irradiation causes damage and **beam-induced motion**. Computational analysis begins with **particle picking**, followed by **single-particle analysis** and **2D classification**. A **3D reconstruction** requires accurate **orientation estimation**, correction of the microscope's **contrast transfer function**, and **motion correction** of dose-fractionated frames. Researchers report a global **map resolution** but also inspect **local resolution**, often validating resolution with **Fourier shell correlation**. The resulting **Coulomb potential map** supports construction of an **atomic model**, which undergoes **model refinement** against experimental signal and stereochemical restraints. When the sample occupies several structural states, **conformational heterogeneity** must be separated rather than averaged away.

**Bản dịch tiếng Việt:** Trong **structural biology**, **cryo-electron microscopy** có thể reveal kiến trúc macromolecule mà không cần crystallization. Sample preparation nhắm tới **vitrification**, thường bằng **plunge freezing**, còn acquisition phải giới hạn **electron dose** vì irradiation gây damage và **beam-induced motion**. Computational analysis bắt đầu bằng **particle picking**, sau đó là **single-particle analysis** và **2D classification**. Một **3D reconstruction** cần **orientation estimation** chính xác, correction **contrast transfer function** của microscope và **motion correction** cho các frame đã fractionate dose. Researchers report **map resolution** toàn cục nhưng cũng xem **local resolution**, thường validate bằng **Fourier shell correlation**. **Coulomb potential map** thu được hỗ trợ build **atomic model**, rồi model trải qua **model refinement** dựa trên experimental signal và stereochemical restraint. Khi sample có nhiều structural state, **conformational heterogeneity** phải được tách thay vì bị average mất.