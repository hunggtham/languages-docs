# C2 Vocabulary — Neuroimaging connectivity and network mapping

This lesson follows a multimodal neuroimaging study from acquisition and artifact control through connectivity estimates, network organization, and reproducible interpretation.

Flow: **diffusion tractography → resting-state connectivity → functional parcellation → connectome fingerprint → motion scrubbing → susceptibility distortion → BOLD contrast → multiband acquisition → hemodynamic response → representational similarity → effective connectivity → graph modularity → small-world coefficient → hub disruption → lesion network mapping → tractography false positive → registration pipeline → atlas-based quantification → network controllability → subject-level reliability**.

## 1. diffusion tractography /dɪˈfjuːʒən trækˈtɑɡrəfi/
**Part of speech:** noun
**Core meaning (English):** reconstructing probable white-matter pathways from the direction of water diffusion measured by MRI.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dựng đường đi chất trắng từ hướng khuếch tán của nước.
**Grammar & collocations:** `diffusion-tractography reconstruction` — reconstruction; `trace a fiber pathway` — dựng đường sợi.
**Examples:** `Diffusion tractography suggested a pathway linking the language and attention networks.` → Tractography gợi ý đường nối mạng ngôn ngữ và chú ý.
**Liên kết tiếng Hàn:** `확산 트랙토그래피`.

## 2. resting-state connectivity /ˈrɛstɪŋ steɪt kəˌnɛkˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** statistical dependence between brain signals recorded while a participant is not performing a directed task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên hệ thống kê giữa tín hiệu não khi nghỉ.
**Grammar & collocations:** `resting-state-connectivity map` — map; `estimate spontaneous coupling` — ước lượng.
**Examples:** `Resting-state connectivity weakened between the salience network and the default-mode network.` → Connectivity khi nghỉ yếu đi giữa hai mạng.
**Liên kết tiếng Hàn:** `휴지기 연결성`.

## 3. functional parcellation /ˈfʌŋkʃənəl pɑrˌsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** dividing the brain into regions according to observed functional signals rather than anatomy alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia vùng não theo hoạt động chức năng.
**Grammar & collocations:** `functional-parcellation scheme` — scheme; `derive subject-specific parcels` — suy ra.
**Examples:** `Functional parcellation separated two adjacent areas that looked identical on a structural scan.` → Phân vùng chức năng tách hai vùng kề nhau.
**Liên kết tiếng Hàn:** `기능적 뇌 구획화`.

## 4. connectome fingerprint /kəˈnɛktoʊm ˈfɪŋɡərˌprɪnt/
**Part of speech:** noun
**Core meaning (English):** an individual-specific pattern of brain connections used to identify or characterize a person.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “dấu vân tay” riêng của mạng kết nối não.
**Grammar & collocations:** `connectome-fingerprint similarity` — similarity; `match an individual profile` — khớp.
**Examples:** `The connectome fingerprint remained recognizable across two scanning sessions.` → Dấu vân tay connectome vẫn nhận ra ở hai buổi scan.
**Liên kết tiếng Hàn:** `커넥톰 지문`.

## 5. motion scrubbing /ˈmoʊʃən ˈskrʌbɪŋ/
**Part of speech:** noun
**Core meaning (English):** removing or censoring time points contaminated by excessive head movement during scanning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loại các thời điểm bị nhiễu do đầu cử động.
**Grammar & collocations:** `motion-scrubbing threshold` — threshold; `censor a contaminated volume` — loại.
**Examples:** `Motion scrubbing removed several volumes before connectivity was estimated.` → Scrubbing bỏ vài volume trước khi tính connectivity.
**Liên kết tiếng Hàn:** `움직임 스크러빙`.

## 6. susceptibility distortion /səˌsɛptəˈbɪləti dɪˈstɔrʃən/
**Part of speech:** noun
**Core meaning (English):** geometric warping in an MRI image caused by local magnetic-field differences near air–tissue boundaries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** méo hình do chênh lệch từ trường cục bộ.
**Grammar & collocations:** `susceptibility-distortion correction` — correction; `unwarp an echo-planar image` — chỉnh.
**Examples:** `Susceptibility distortion obscured the orbitofrontal cortex until field-map correction was applied.` → Méo từ trường che vùng orbitofrontal.
**Liên kết tiếng Hàn:** `자화율 왜곡`.

## 7. BOLD contrast /boʊld ˈkɑntræst/
**Part of speech:** noun
**Core meaning (English):** MRI signal contrast that indirectly reflects neural activity through blood-oxygenation changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tương phản MRI gián tiếp phản ánh hoạt động qua oxygen máu.
**Grammar & collocations:** `BOLD-contrast fluctuation` — fluctuation; `model oxygenation-sensitive signal` — mô hình.
**Examples:** `BOLD contrast increased in visual cortex when the participant viewed moving patterns.` → BOLD tăng ở cortex thị giác.
**Liên kết tiếng Hàn:** `BOLD 대조`.

## 8. multiband acquisition /ˈmʌltibænd ˌækwəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** collecting several MRI slices simultaneously to shorten the repetition time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu nhiều lát cùng lúc để scan nhanh hơn.
**Grammar & collocations:** `multiband-acquisition factor` — factor; `accelerate slice sampling` — tăng tốc.
**Examples:** `Multiband acquisition captured faster fluctuations without extending the scan session.` → Thu đa băng bắt dao động nhanh hơn.
**Liên kết tiếng Hàn:** `멀티밴드 획득`.

## 9. hemodynamic response /ˌhiːməˈdaɪnæmɪk rɪˈspɑns/
**Part of speech:** noun
**Core meaning (English):** the time-varying blood-flow and oxygenation change that follows neural activity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đáp ứng lưu lượng và oxygen máu sau hoạt động neuron.
**Grammar & collocations:** `hemodynamic-response function` — function; `convolve a neural event` — tích chập.
**Examples:** `The model shifted the predicted neural event to match the delayed hemodynamic response.` → Model dịch event theo đáp ứng trễ.
**Liên kết tiếng Hàn:** `혈역학적 반응`.

## 10. representational similarity /ˌrɛprɪzɛnˈteɪʃənəl ˌsɪməˈlærəti/
**Part of speech:** noun
**Core meaning (English):** comparing patterns of activity to ask whether two conditions organize information in a similar representational space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so sánh cấu trúc biểu diễn của các pattern hoạt động.
**Grammar & collocations:** `representational-similarity matrix` — matrix; `compare neural geometries` — so sánh.
**Examples:** `Representational similarity linked the neural pattern to the geometry of the stimulus set.` → Similarity nối pattern não với hình học stimulus.
**Liên kết tiếng Hàn:** `표상 유사성`.

## 11. effective connectivity /ɪˈfɛktɪv kəˌnɛkˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** a model-based estimate of directed influence that one neural system exerts on another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước lượng ảnh hưởng có hướng giữa các hệ thần kinh.
**Grammar & collocations:** `effective-connectivity model` — model; `infer directed influence` — suy luận.
**Examples:** `Effective connectivity indicated that the frontal region modulated sensory processing.` → Connectivity hiệu quả cho thấy vùng trán điều biến xử lý cảm giác.
**Liên kết tiếng Hàn:** `유효 연결성`.

## 12. graph modularity /ɡræf ˌmɑdʒəˈlærəti/
**Part of speech:** noun
**Core meaning (English):** a measure of how strongly a network separates into internally dense communities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức mạng chia thành các cộng đồng kết nối dày.
**Grammar & collocations:** `graph-modularity score` — score; `detect network communities` — phát hiện.
**Examples:** `Graph modularity fell when the task required communication across normally separate networks.` → Modularity giảm khi task cần nối mạng.
**Liên kết tiếng Hàn:** `그래프 모듈성`.

## 13. small-world coefficient /ˌsmɔl ˈwɝld koʊəˈfɪʃənt/
**Part of speech:** noun
**Core meaning (English):** a network statistic balancing strong local clustering with short paths between distant regions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ số cân bằng cụm cục bộ và đường nối ngắn.
**Grammar & collocations:** `small-world-coefficient estimate` — estimate; `compare clustering and path length` — so sánh.
**Examples:** `The small-world coefficient declined after widespread network disruption.` → Hệ số small-world giảm sau gián đoạn mạng.
**Liên kết tiếng Hàn:** `소세계 계수`.

## 14. hub disruption /hʌb dɪsˈrʌpʃən/
**Part of speech:** noun
**Core meaning (English):** loss or weakening of a high-connectivity network hub and the communication it supports.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy giảm nút trung tâm nhiều kết nối.
**Grammar & collocations:** `hub-disruption profile` — profile; `quantify network vulnerability` — định lượng.
**Examples:** `Hub disruption explained why a small lesion produced widespread cognitive effects.` → Gián đoạn hub giải thích ảnh hưởng lan rộng.
**Liên kết tiếng Hàn:** `허브 단절`.

## 15. lesion network mapping /ˈliʒən ˈnɛtwɝk ˈmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** relating lesion locations to a reference connectivity map to identify networks associated with symptoms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối vị trí tổn thương với mạng tham chiếu để tìm mạng gây triệu chứng.
**Grammar & collocations:** `lesion-network-mapping analysis` — analysis; `link symptoms to a circuit` — liên hệ.
**Examples:** `Lesion network mapping placed apparently different injuries on one shared motor circuit.` → Mapping đặt các tổn thương vào cùng mạch vận động.
**Liên kết tiếng Hàn:** `병변 네트워크 매핑`.

## 16. tractography false positive /trækˈtɑɡrəfi fɔls ˈpɑzətɪv/
**Part of speech:** noun
**Core meaning (English):** an inferred fiber pathway that appears in reconstruction even though anatomical evidence does not support it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường sợi giả do thuật toán dựng nhầm.
**Grammar & collocations:** `tractography-false-positive rate` — rate; `reject an implausible streamline` — loại.
**Examples:** `Anatomical priors reduced the tractography false positive near crossing fibers.` → Prior giải phẫu giảm đường giả.
**Liên kết tiếng Hàn:** `트랙토그래피 위양성`.

## 17. registration pipeline /ˌrɛdʒəˈstreɪʃən ˈpaɪpˌlaɪn/
**Part of speech:** noun
**Core meaning (English):** an ordered set of transformations that aligns images from different times, modalities, or participants.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi biến đổi để căn chỉnh các ảnh khác nhau.
**Grammar & collocations:** `registration-pipeline checkpoint` — checkpoint; `align multimodal volumes` — căn chỉnh.
**Examples:** `The registration pipeline aligned diffusion maps with the participant's anatomical scan.` → Pipeline căn diffusion map với ảnh giải phẫu.
**Liên kết tiếng Hàn:** `영상 정합 파이프라인`.

## 18. atlas-based quantification /ˈætləs beɪst ˌkwɑntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** measuring regional signals by transferring a standardized brain atlas onto an individual scan.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định lượng vùng dựa trên atlas chuẩn.
**Grammar & collocations:** `atlas-based-quantification mask` — mask; `extract a regional mean` — trích.
**Examples:** `Atlas-based quantification summarized cortical thickness across 180 parcels.` → Quantification tóm tắt độ dày 180 vùng.
**Liên kết tiếng Hàn:** `아틀라스 기반 정량화`.

## 19. network controllability /ˈnɛtwɝk kənˌtroʊləˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the theoretical capacity of a network's nodes and connections to drive the system into desired states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng mạng điều khiển hệ sang trạng thái mong muốn.
**Grammar & collocations:** `network-controllability profile` — profile; `steer a brain state` — điều hướng.
**Examples:** `Network controllability highlighted a frontal node that could support flexible state transitions.` → Controllability nêu nút trán hỗ trợ chuyển trạng thái.
**Liên kết tiếng Hàn:** `네트워크 제어 가능성`.

## 20. subject-level reliability /ˈsʌbdʒɪkt ˈlɛvəl rɪˌlaɪəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the stability of an imaging measure when it is repeated for the same person.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ ổn định của chỉ số khi scan lại cùng người.
**Grammar & collocations:** `subject-level-reliability estimate` — estimate; `assess test–retest stability` — đánh giá.
**Examples:** `Subject-level reliability determined whether the connectivity marker was suitable for a clinical study.` → Reliability quyết định marker dùng được trong nghiên cứu.
**Liên kết tiếng Hàn:** `개인 수준 신뢰도`.

## Review in context

In a multimodal study, **diffusion tractography** estimates white-matter pathways while **resting-state connectivity** summarizes spontaneous coupling. A **functional parcellation** can define subject-specific regions, and a **connectome fingerprint** tests whether each person's pattern is stable. Quality control may use **motion scrubbing** and **susceptibility distortion** correction before interpreting **BOLD contrast** from a **multiband acquisition**. The model includes a delayed **hemodynamic response**, while **representational similarity** compares neural geometries. Directed models estimate **effective connectivity**; graph measures such as **graph modularity** and the **small-world coefficient** describe organization. A lesion may cause **hub disruption**, and **lesion network mapping** can connect symptoms to a circuit. Investigators must examine a **tractography false positive** and document the **registration pipeline**. **Atlas-based quantification** summarizes regional signals, **network controllability** models state transitions, and **subject-level reliability** determines whether the result can support a clinical claim.

**Bản dịch tiếng Việt:** Trong nghiên cứu đa phương thức, **diffusion tractography** ước tính đường chất trắng còn **resting-state connectivity** tóm tắt liên kết tự phát. **Functional parcellation** có thể định nghĩa vùng riêng từng người, còn **connectome fingerprint** kiểm tra độ ổn định của mẫu kết nối. Kiểm soát chất lượng có thể dùng **motion scrubbing** và chỉnh **susceptibility distortion** trước khi diễn giải **BOLD contrast** từ **multiband acquisition**. Mô hình tính đến **hemodynamic response** trễ, còn **representational similarity** so sánh hình học thần kinh. Mô hình có hướng ước tính **effective connectivity**; các chỉ số **graph modularity** và **small-world coefficient** mô tả tổ chức mạng. Tổn thương có thể gây **hub disruption**, và **lesion network mapping** nối triệu chứng với một mạch. Nhà nghiên cứu phải kiểm tra **tractography false positive** và ghi lại **registration pipeline**. **Atlas-based quantification** tóm tắt tín hiệu vùng, **network controllability** mô hình hóa chuyển trạng thái, còn **subject-level reliability** quyết định kết quả có đủ ổn định cho kết luận lâm sàng hay không.
