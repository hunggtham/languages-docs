# C2 Vocabulary — Flow cytometry and cell sorting

This lesson follows single-cell measurement from fluid focusing and light scatter through fluorescence detection, compensation, gating, sorting, and high-dimensional spectral analysis.

Flow: **flow cytometry → hydrodynamic focusing → forward scatter → side scatter → fluorophore → spectral overlap → fluorescence compensation → compensation matrix → gating strategy → singlet gate → viability dye → fluorescence-minus-one control → isotype control → photomultiplier tube → detector gain → event rate → fluorescence-activated cell sorting → sorting purity → spectral flow cytometry → index sorting**.

## 1. flow cytometry /floʊ saɪˈtɑmətri/
**Part of speech:** noun
**Core meaning (English):** a technique that measures physical and fluorescent properties of individual cells or particles as they pass through a laser beam in a fluid stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cell đi từng cái qua laser như xe qua trạm kiểm soát; instrument đo kích thước, độ hạt và fluorescence của từng event.
**Grammar & collocations:** `flow-cytometry panel` — panel marker; `flow-cytometry analysis` — phân tích flow.
**Examples:** `Flow cytometry quantified several immune-cell populations in the same blood sample.` → Flow cytometry định lượng nhiều population immune cell trong cùng blood sample.
**Liên kết tiếng Hàn:** `유세포 분석`, `플로 사이토메트리`.

## 2. hydrodynamic focusing /ˌhaɪdroʊdaɪˈnæmɪk ˈfoʊkəsɪŋ/
**Part of speech:** noun
**Core meaning (English):** using sheath fluid to narrow a sample stream so cells pass the detection point one at a time in a controlled position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sheath fluid ép sample thành dòng rất mảnh để cell đi gần như từng hàng một qua laser.
**Grammar & collocations:** `focused sample stream` — sample stream đã focus; `sheath fluid` — fluid bao quanh sample.
**Examples:** `Hydrodynamic focusing reduced the chance that multiple cells crossed the laser simultaneously.` → Hydrodynamic focusing giảm khả năng nhiều cell qua laser cùng lúc.
**Liên kết tiếng Hàn:** `유체역학적 집속`.

## 3. forward scatter /ˈfɔrwərd ˈskætər/
**Part of speech:** noun
**Core meaning (English):** light scattered at small angles from a particle, commonly used as an approximate indicator of cell size.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ánh sáng đi gần hướng thẳng về phía trước sau khi gặp cell; thường liên hệ tương đối với size.
**Grammar & collocations:** `FSC signal` — signal forward scatter; `forward-scatter gate` — gate FSC.
**Examples:** `Forward scatter separated small lymphocytes from much larger cells in the sample.` → Forward scatter giúp tách lymphocyte nhỏ khỏi cell lớn hơn.
**Liên kết tiếng Hàn:** `전방 산란`, `FSC`.

## 4. side scatter /saɪd ˈskætər/
**Part of speech:** noun
**Core meaning (English):** light scattered roughly perpendicular to the laser path, often reflecting internal granularity and structural complexity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** light bật sang bên; cell có nhiều granule/internal structure thường tạo side scatter mạnh hơn.
**Grammar & collocations:** `SSC signal` — signal SSC; `scatter profile` — profile scatter.
**Examples:** `Granulocytes showed stronger side scatter than lymphocytes because of their internal granules.` → Granulocyte có side scatter mạnh hơn lymphocyte do nhiều granule nội bào.
**Liên kết tiếng Hàn:** `측방 산란`, `SSC`.

## 5. fluorophore /ˈflʊrəˌfɔr/
**Part of speech:** noun
**Core meaning (English):** a fluorescent molecule that absorbs light at one wavelength range and emits light at a longer wavelength range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “nhãn phát sáng” gắn với antibody hoặc probe; laser kích thích rồi fluorophore phát light để detector đọc marker.
**Grammar & collocations:** `fluorophore-conjugated antibody` — antibody gắn fluorophore; `fluorophore brightness` — độ sáng fluorophore.
**Examples:** `Each antibody carried a different fluorophore so several markers could be measured simultaneously.` → Mỗi antibody mang fluorophore khác để đo nhiều marker cùng lúc.
**Liên kết tiếng Hàn:** `형광체`, `플루오로포어`.

## 6. spectral overlap /ˈspɛktrəl ˌoʊvərˈlæp/
**Part of speech:** noun
**Core meaning (English):** overlap between emission spectra from different fluorophores, causing one fluorophore's signal to appear in multiple detectors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** màu fluorescence không nằm gọn trong một detector; “đuôi” spectrum có thể tràn sang channel khác.
**Grammar & collocations:** `emission-spectrum overlap` — overlap emission; `overlap between channels` — overlap giữa channel.
**Examples:** `Spectral overlap caused the green fluorophore to contribute signal to the neighboring detector.` → Spectral overlap làm green fluorophore đóng góp signal vào detector kế bên.
**Liên kết tiếng Hàn:** `스펙트럼 중첩`.

## 7. fluorescence compensation /ˌflʊˈrɛsəns ˌkɑmpənˈseɪʃən/
**Part of speech:** noun
**Core meaning (English):** mathematical correction that removes predictable spillover of fluorophore signals into unintended detectors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trừ phần fluorescence “rò” sang channel khác để signal mỗi marker phản ánh đúng hơn.
**Grammar & collocations:** `compensate spillover` — bù spillover; `compensation control` — control để tính compensation.
**Examples:** `Fluorescence compensation corrected spillover from the bright marker into the adjacent channel.` → Fluorescence compensation sửa spillover từ marker sáng sang channel bên cạnh.
**Liên kết tiếng Hàn:** `형광 보정`.

## 8. compensation matrix /ˌkɑmpənˈseɪʃən ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix of coefficients describing how much signal from each fluorophore spills into each detector and must be corrected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng số cho biết channel A tràn bao nhiêu sang B, C... để software biết phải trừ phần nào.
**Grammar & collocations:** `calculate a compensation matrix` — tính matrix; `apply compensation` — áp compensation.
**Examples:** `Single-stained controls were used to calculate the compensation matrix.` → Single-stained control được dùng để tính compensation matrix.
**Liên kết tiếng Hàn:** `보정 행렬`.

## 9. gating strategy /ˈɡeɪtɪŋ ˈstrætədʒi/
**Part of speech:** noun
**Core meaning (English):** a planned sequence of selection boundaries used to identify biologically meaningful cell populations in cytometry data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi filter logic: bỏ debris → chọn singlet → chọn live cell → chọn marker population cụ thể.
**Grammar & collocations:** `hierarchical gating strategy` — gating nhiều tầng; `define a gate` — đặt gate.
**Examples:** `The gating strategy first excluded debris and dead cells before identifying T-cell subsets.` → Gating strategy loại debris và dead cell trước khi tìm T-cell subset.
**Liên kết tiếng Hàn:** `게이팅 전략`.

## 10. singlet gate /ˈsɪŋɡlət ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a cytometry gate designed to retain single cells while excluding doublets and larger cell aggregates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ giữ event là một cell thật; hai cell dính nhau có thể giả thành một cell marker cao nếu không loại.
**Grammar & collocations:** `singlet discrimination` — phân biệt singlet; `exclude doublets` — loại doublet.
**Examples:** `A singlet gate prevented cell doublets from distorting DNA-content measurements.` → Singlet gate ngăn doublet làm sai DNA-content measurement.
**Liên kết tiếng Hàn:** `싱글렛 게이트`.

## 11. viability dye /ˌvaɪəˈbɪləti daɪ/
**Part of speech:** noun
**Core meaning (English):** a staining reagent used to distinguish living cells from cells with damaged membranes or other viability defects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dye giúp nhận dead cell; dead cell thường bind stain bất thường và có thể gây false-positive marker.
**Grammar & collocations:** `fixable viability dye` — dye viability có thể fix; `live/dead discrimination` — phân biệt sống/chết.
**Examples:** `The viability dye excluded dead cells that bound antibodies nonspecifically.` → Viability dye loại dead cell bind antibody không đặc hiệu.
**Liên kết tiếng Hàn:** `생존성 염료`.

## 12. fluorescence-minus-one control /ˌflʊˈrɛsəns ˈmaɪnəs wʌn kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a control sample containing every fluorophore in a panel except one, used to determine an appropriate gate for the omitted marker.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** panel đầy đủ nhưng bỏ đúng một marker để thấy background/spread tại channel đó thực sự nằm ở đâu.
**Grammar & collocations:** `FMO control` — fluorescence-minus-one control; `set a positive gate` — đặt gate positive.
**Examples:** `The fluorescence-minus-one control helped define the boundary for a dim activation marker.` → FMO control giúp đặt boundary cho activation marker yếu.
**Liên kết tiếng Hàn:** `FMO 대조군`.

## 13. isotype control /ˈaɪsəˌtaɪp kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a control antibody matched in isotype and label but lacking the target specificity of the experimental antibody.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** antibody “giống vỏ nhưng không nhận target” để đánh giá một số nguồn nonspecific binding; không thay thế FMO cho mọi gating decision.
**Grammar & collocations:** `isotype-matched control` — control cùng isotype; `nonspecific binding` — binding không đặc hiệu.
**Examples:** `The isotype control suggested that part of the apparent staining came from nonspecific antibody binding.` → Isotype control cho thấy một phần staining có thể do nonspecific binding.
**Liên kết tiếng Hàn:** `아이소타입 대조군`.

## 14. photomultiplier tube /ˌfoʊtoʊˈmʌltəˌplaɪər tuːb/
**Part of speech:** noun
**Core meaning (English):** a highly sensitive light detector that converts faint photons into an amplified electrical signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** detector khuếch đại light cực yếu thành electrical signal đủ lớn để instrument đo.
**Grammar & collocations:** `PMT detector` — detector PMT; `PMT voltage` — voltage PMT.
**Examples:** `The photomultiplier tube detected weak fluorescence from cells expressing low levels of the marker.` → PMT detect fluorescence yếu từ cell có marker expression thấp.
**Liên kết tiếng Hàn:** `광전자 증배관`, `PMT`.

## 15. detector gain /dɪˈtɛktər ɡeɪn/
**Part of speech:** noun
**Core meaning (English):** the amount of electronic amplification applied to a detector's measured signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức “phóng to” signal detector; gain quá thấp mất dim population, quá cao có thể saturate bright event.
**Grammar & collocations:** `adjust detector gain` — chỉnh gain; `gain setting` — setting gain.
**Examples:** `Detector gain was adjusted so negative and strongly positive populations both remained within range.` → Detector gain được chỉnh để cả negative và strongly positive population nằm trong range.
**Liên kết tiếng Hàn:** `검출기 이득`.

## 16. event rate /ɪˈvɛnt reɪt/
**Part of speech:** noun
**Core meaning (English):** the number of particles or cells recorded by a cytometer per unit time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instrument đang đọc bao nhiêu cell mỗi giây; rate quá cao tăng coincidence và giảm data quality.
**Grammar & collocations:** `high event rate` — event rate cao; `events per second` — event/giây.
**Examples:** `The sample was diluted because the event rate was high enough to increase coincident measurements.` → Sample được dilute vì event rate cao làm tăng coincidence.
**Liên kết tiếng Hàn:** `이벤트 속도`.

## 17. fluorescence-activated cell sorting /ˌflʊˈrɛsəns ˈæktəˌveɪtɪd sɛl ˈsɔrtɪŋ/
**Part of speech:** noun
**Core meaning (English):** physically separating cells into different collections according to fluorescence and scatter measurements made during flow cytometry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không chỉ đo cell mà còn “rẽ luồng” từng cell vào tube khác dựa trên marker.
**Grammar & collocations:** `FACS sorter` — máy sort; `sort a population` — sort population.
**Examples:** `Fluorescence-activated cell sorting isolated the rare antigen-specific population for sequencing.` → FACS isolate rare antigen-specific population để sequencing.
**Liên kết tiếng Hàn:** `형광 활성 세포 분류`, `FACS`.

## 18. sorting purity /ˈsɔrtɪŋ ˈpjʊrəti/
**Part of speech:** noun
**Core meaning (English):** the proportion of collected sorted cells that truly belong to the intended target population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tube sau sort “sạch” tới mức nào; purity 99% nghĩa gần như mọi cell thu được đúng target.
**Grammar & collocations:** `post-sort purity` — purity sau sort; `purity check` — kiểm tra purity.
**Examples:** `A post-sort analysis confirmed sorting purity above 98 percent.` → Analysis sau sort xác nhận purity trên 98%.
**Liên kết tiếng Hàn:** `분류 순도`.

## 19. spectral flow cytometry /ˈspɛktrəl floʊ saɪˈtɑmətri/
**Part of speech:** noun
**Core meaning (English):** flow cytometry that records broad emission spectra and computationally unmixes fluorophore signatures rather than assigning each dye mainly to one detector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay vì mỗi color “thuộc” một channel, instrument đọc spectrum rộng rồi software tách signature từng fluorophore.
**Grammar & collocations:** `spectral unmixing` — tách spectrum; `spectral panel` — panel spectral flow.
**Examples:** `Spectral flow cytometry allowed the panel to distinguish fluorophores with strongly overlapping emission profiles.` → Spectral flow phân biệt fluorophore có emission overlap mạnh.
**Liên kết tiếng Hàn:** `스펙트럴 유세포 분석`.

## 20. index sorting /ˈɪndɛks ˈsɔrtɪŋ/
**Part of speech:** noun
**Core meaning (English):** cell sorting that records the measured cytometry features of each individual cell together with the exact destination well or position where it was deposited.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi cell được sort đi đâu đều giữ “hồ sơ fluorescence” riêng, giúp nối phenotype flow với assay downstream của đúng cell đó.
**Grammar & collocations:** `index-sort data` — data index sorting; `single-cell index sorting` — index sorting single-cell.
**Examples:** `Index sorting linked each sequenced cell back to its original fluorescence phenotype.` → Index sorting nối từng cell được sequence với phenotype fluorescence ban đầu.
**Liên kết tiếng Hàn:** `인덱스 소팅`.

## Review in context

In **flow cytometry**, **hydrodynamic focusing** carries cells individually through the laser. **Forward scatter** and **side scatter** provide basic physical information, while each **fluorophore** reports a molecular marker. Because **spectral overlap** creates spillover, **fluorescence compensation** uses a **compensation matrix** to correct conventional detector signals. A careful **gating strategy** typically includes a **singlet gate** and a **viability dye**, while a **fluorescence-minus-one control** can help set difficult boundaries and an **isotype control** may assess selected sources of nonspecific binding. Light is measured by detectors such as a **photomultiplier tube**, whose **detector gain** must be set appropriately; excessive **event rate** can degrade measurement quality. **Fluorescence-activated cell sorting** physically isolates selected populations, and **sorting purity** verifies the result. **Spectral flow cytometry** extends multiplexing through spectral unmixing, while **index sorting** preserves the measured phenotype of each individually deposited cell.

**Bản dịch tiếng Việt:** Trong **flow cytometry**, **hydrodynamic focusing** đưa cell đi riêng lẻ qua laser. **Forward scatter** và **side scatter** cung cấp thông tin vật lý cơ bản, còn mỗi **fluorophore** báo một molecular marker. Vì **spectral overlap** tạo spillover, **fluorescence compensation** dùng **compensation matrix** để sửa signal detector truyền thống. **Gating strategy** cẩn thận thường có **singlet gate** và **viability dye**; **fluorescence-minus-one control** giúp đặt boundary khó, còn **isotype control** có thể đánh giá một số nguồn nonspecific binding. Light được đo bằng detector như **photomultiplier tube**, trong đó **detector gain** phải phù hợp; **event rate** quá cao có thể làm data quality xấu đi. **Fluorescence-activated cell sorting** isolate population vật lý và **sorting purity** kiểm tra kết quả. **Spectral flow cytometry** mở rộng multiplexing qua spectral unmixing, còn **index sorting** giữ phenotype đã đo của từng cell được deposit riêng.