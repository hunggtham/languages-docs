# C2 Vocabulary 199 — High-k metal gate reliability, negative bias temperature instability, and hot carrier degradation

Trong kỷ nguyên công nghệ bán dẫn nano tiên tiến (từ FinFET đến Gate-All-Around Nanosheet), lớp điện môi cổng silicon dioxide truyền thống đã hoàn toàn được thay thế bằng cấu trúc xếp chồng cổng kim loại điện môi k cao (High-k Metal Gate - HKMG). Bước nhảy vọt về vật liệu này triệt tiêu dòng rò lượng tử nhưng đồng thời đặt ra những thách thức chưa từng có về độ tin cậy vật lý dưới tác động kết hợp của điện trường cực cao và ứng suất nhiệt độ. Bài học C2 chuyên sâu này trang bị hệ thống 25 thuật ngữ học thuật và kỹ thuật chuẩn xác nhất về vật lý khuyết tật, bao gồm cơ chế lão hóa do bất ổn định nhiệt phân cực (NBTI/PBTI), suy thoái do hạt mang điện nóng (Hot-Carrier Degradation - HCD), hiện tượng xuyên hầm Fowler-Nordheim, và sự đánh thủng điện môi theo thời gian (TDDB).

Flow của bài học: **high-k metal gate stack** → **negative bias temperature instability** → **positive bias temperature instability** → **trap state generation** → **threshold voltage drift** → **interfacial oxide trap charging** → **non-radiative multiphonon relaxation** → **reaction-diffusion model** → **border trap charging** → **recoverable degradation component** → **permanent defect generation** → **defect passivation annealing** → **channel hot-electron injection** → **hot-carrier degradation** → **drain avalanche hot-carrier generation** → **Fowler-Nordheim tunneling** → **time-dependent dielectric breakdown** → **progressive dielectric breakdown** → **percolation path formation** → **subthreshold slope degradation** → **random telegraph noise** → **transconductance degradation** → **work function shift** → **oxygen vacancy generation** → **voltage acceleration factor**.

---

## 1. high-k metal gate stack /ˌhaɪ ˈkeɪ ˈmɛtəl ɡeɪt stæk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `HKMG stack`). Thường làm chủ ngữ chỉ cấu trúc cổng tích hợp hoặc tân ngữ sau các động từ như `engineer`, `deposit`, `scale`.

**Core meaning — English:** A multi-layered gate structure in advanced MOSFETs comprising an ultra-thin interfacial silicon oxide layer, a high-dielectric-constant metal oxide (typically hafnium oxide), and metal gate electrodes with tailored work functions to eliminate gate leakage and poly-depletion effects.

**Core meaning & mental image — Tiếng Việt:** Cấu trúc xếp chồng cổng kim loại điện môi k cao (HKMG); hãy hình dung một chiếc bánh sandwich công nghệ cao với lớp bơ mỏng cách điện (interfacial layer), lớp phô mai dày dẫn điện dung cao (high-k HfO2), và lát thịt nguội kim loại dẫn điện hoàn hảo ở trên cùng; cấu trúc này vừa chặn đứng dòng rò rỉ electron vừa tạo ra trường điện từ cực mạnh để kiểm soát kênh dẫn bên dưới.

**Grammar & collocations:** `engineer an advanced high-k metal gate stack` — thiết kế cấu trúc xếp chồng cổng kim loại điện môi k cao tiên tiến; `high-k metal gate stack reliability` — độ tin cậy của cấu trúc xếp chồng cổng kim loại điện môi k cao; `scaling limits of the high-k metal gate stack` — các giới hạn thu nhỏ của cấu trúc cổng kim loại điện môi k cao.

**Register & nuance:** `advanced semiconductor physics and device reliability` — công nghệ mang tính bản lề từ nút 45nm thay thế cổng poly-Si/SiO2 truyền thống; mang lại điện dung cổng lớn mà không bị rò rỉ lượng tử quá mức, nhưng lại làm phát sinh các cơ chế lão hóa phức tạp do bẫy điện tích trong lớp điện môi đa tầng.

**Examples:** `Fabricators engineered a dual-layer high-k metal gate stack to suppress quantum mechanical tunneling while preserving superior channel carrier mobility.` → Các nhà chế tạo đã thiết kế một cấu trúc xếp chồng cổng kim loại điện môi k cao hai lớp để triệt tiêu hiện tượng xuyên hầm cơ học lượng tử trong khi vẫn bảo tồn độ linh động hạt mang điện vượt trội trong kênh dẫn.

**Liên kết tiếng Hàn:** `하이-k 메탈 게이트 적층 구조` (high-k metal gate 積層 構造) — cấu trúc xếp chồng cổng kim loại điện môi k cao (HKMG stack).

---

## 2. negative bias temperature instability /ˈnɛɡətɪv ˈbaɪəs ˈtɛmprətʃər ɪnstəˈbɪləti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `NBTI`). Thường làm chủ ngữ chỉ hiện tượng suy thoái hoặc tân ngữ sau các động từ như `mitigate`, `characterize`, `model`.

**Core meaning — English:** A major aging mechanism predominantly affecting p-channel MOSFETs under negative gate bias and elevated temperatures, caused by the depassivation of Si-H bonds at the interface and hole trapping in the gate dielectric.

**Core meaning & mental image — Tiếng Việt:** Độ bất ổn định nhiệt phân cực âm (NBTI); hãy hình dung chiếc van dẫn nước (PMOS) liên tục bị ép chặt dưới áp lực cao trong môi trường lò hơi nóng bỏng; các then cài giữ van (liên kết Si-H) dần bị bẻ gãy và rỉ sét, khiến van ngày càng khó mở và đòi hỏi lực vặn (điện áp ngưỡng) ngày càng lớn hơn.

**Grammar & collocations:** `susceptibility to negative bias temperature instability` — độ nhạy cảm với hiện tượng bất ổn định nhiệt phân cực âm; `mitigate negative bias temperature instability` — giảm thiểu độ bất ổn định nhiệt phân cực âm; `negative bias temperature instability degradation` — sự suy thoái do bất ổn định nhiệt phân cực âm.

**Register & nuance:** `device reliability engineering` — là cơ chế suy hao tuổi thọ nghiêm trọng nhất đối với transistor pMOS; khác với các suy thoái cơ học, NBTI mang đặc tính hồi phục một phần ngay khi điện áp phân cực âm được ngắt bỏ.

**Examples:** `Prolonged operation under negative bias temperature instability causes the pMOS threshold voltage to drift upward, directly degrading circuit clock frequencies.` → Hoạt động kéo dài dưới tác động của hiện tượng bất ổn định nhiệt phân cực âm làm điện áp ngưỡng của pMOS trôi dạt tăng lên, trực tiếp làm suy giảm tần số xung nhịp mạch điện.

**Liên kết tiếng Hàn:** `부바이어스 온도 불안정성` (負bias 溫度 不安定性) — độ bất ổn định nhiệt phân cực âm (NBTI).

---

## 3. positive bias temperature instability /ˈpɑzətɪv ˈbaɪəs ˈtɛmprətʃər ɪnstəˈbɪləti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `PBTI`). Thường làm chủ ngữ chỉ hiện tượng lão hóa ở nMOS hoặc tân ngữ trong kiểm thử độ tin cậy bán dẫn.

**Core meaning — English:** A critical aging phenomenon primarily observed in n-channel MOSFETs featuring high-k dielectrics under positive gate bias and thermal stress, driven by electron trapping in pre-existing oxygen vacancy defects within the high-k bulk layer.

**Core meaning & mental image — Tiếng Việt:** Độ bất ổn định nhiệt phân cực dương (PBTI); hãy hình dung một con đập chắn nước (nMOS) mà lớp bê tông chứa đầy các lỗ rỗng vi mô; khi nước được bơm vào liên tục dưới trời nóng, các electron lọt vào và bị kẹt cứng trong các lỗ rỗng đó, tạo thành một trường điện tích âm đẩy ngược dòng nước khiến con đập cần nhiều năng lượng hơn mới xả được nước.

**Grammar & collocations:** `exacerbate positive bias temperature instability` — làm trầm trọng thêm độ bất ổn định nhiệt phân cực dương; `PBTI-induced threshold voltage shift` — độ dịch chuyển điện áp ngưỡng do PBTI; `assess positive bias temperature instability` — đánh giá độ bất ổn định nhiệt phân cực dương.

**Register & nuance:** `HKMG reliability physics` — trong các cổng oxit silicon (SiO2) truyền thống, PBTI hầu như không đáng kể; tuy nhiên khi áp dụng oxit hafnium (HfO2), PBTI trở thành mối đe dọa ngang hàng hoặc thậm chí vượt qua NBTI do mật độ bẫy electron nội tại trong khối vật liệu k cao.

**Examples:** `With the introduction of hafnium oxide dielectrics, positive bias temperature instability emerged as a primary limiting factor for nMOS transistor longevity.` → Với sự ra đời của điện môi oxit hafnium, độ bất ổn định nhiệt phân cực dương đã nổi lên như một yếu tố giới hạn chính cho tuổi thọ của transistor nMOS.

**Liên kết tiếng Hàn:** `정바이어스 온도 불안정성` (正bias 溫度 不安定性) — độ bất ổn định nhiệt phân cực dương (PBTI).

---

## 4. trap state generation /træp steɪt ˌdʒɛnəˈreɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ cơ chế vi mô của sự suy thoái hoặc tân ngữ sau các động từ như `induce`, `monitor`, `accelerate`.

**Core meaning — English:** The dynamic creation of localized electronic energy levels within the dielectric bandgap or at the semiconductor-insulator interface during electrical or thermal stress.

**Core meaning & mental image — Tiếng Việt:** Sự tạo trạng thái bẫy năng lượng / sự sinh mức bẫy; hãy hình dung bề mặt nhẵn bóng của một đường băng tuyết bỗng nhiên xuất hiện những hố lún sụt gồ ghề do va chạm liên tục; mỗi hố lún này trở thành một cái bẫy sẵn sàng nuốt chửng các hạt tuyết (electron) bay qua, cản trở toàn bộ giao thông trên bề mặt.

**Grammar & collocations:** `accelerate trap state generation` — đẩy nhanh sự sinh trạng thái bẫy; `interface trap state generation` — sự sinh trạng thái bẫy tại mặt phân giới; `suppress trap state generation` — ức chế sự tạo trạng thái bẫy.

**Register & nuance:** `defect physics, solid-state electronics` — là nguồn gốc vi mô của hầu hết các hiện tượng suy hao thông số điện; khác với việc nạp điện vào bẫy có sẵn (trap charging), đây là quá trình vật lý phá vỡ liên kết nguyên tử để sinh ra các bẫy mới không thể đảo ngược.

**Examples:** `High electric fields across the gate dielectric trigger rapid trap state generation, creating atomic vacancies that distort the local band structure.` → Cường độ điện trường cao xuyên qua lớp điện môi cổng kích hoạt sự sinh trạng thái bẫy nhanh chóng, tạo ra các khoảng trống nguyên tử làm méo mó cấu trúc dải năng lượng cục bộ.

**Liên kết tiếng Hàn:** `트랩 준위 생성` (trap 準位 生成) — sự tạo trạng thái bẫy năng lượng.

---

## 5. threshold voltage drift /ˈθrɛʃhoʊld ˈvoʊltɪdʒ drɪft/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ sự sai lệch tham số điện học hoặc tân ngữ sau các động từ như `exhibit`, `track`, `compensate for`.

**Core meaning — English:** The continuous, gradual deviation of the minimum gate voltage required to form a conductive channel from its nominal design value, caused by accumulated charge trapped in the gate dielectric stack.

**Core meaning & mental image — Tiếng Việt:** Sự trôi dạt điện áp ngưỡng; hãy hình dung lò xo của một chiếc cân bàn bị dão dần theo năm tháng; ban đầu chỉ cần 1kg là kim cân dịch chuyển một vạch, nhưng sau một thời gian bị nén liên tục, phải đặt tới 1.3kg thì kim mới chịu nhúc nhích; điểm bắt đầu kích hoạt van dẫn điện bị trôi xa dần khỏi chuẩn thiết kế ban đầu.

**Grammar & collocations:** `exhibit noticeable threshold voltage drift` — xuất hiện sự trôi dạt điện áp ngưỡng đáng chú ý; `compensate for threshold voltage drift` — bù đắp cho sự trôi dạt điện áp ngưỡng; `accumulated threshold voltage drift` — sự trôi dạt điện áp ngưỡng tích lũy.

**Register & nuance:** `circuit timing and device parametric qualification` — là hệ quả vĩ mô trực tiếp nhất mà các kỹ sư thiết kế mạch logic số phải đối mặt; trôi điện áp ngưỡng làm sai lệch thời gian truyền tín hiệu (timing delay) và có thể dẫn đến lỗi định thời (timing violations).

**Examples:** `Dynamic voltage scaling algorithms must incorporate safety margins to account for threshold voltage drift over a ten-year operating lifespan.` → Các thuật toán co giãn điện áp động phải kết hợp các biên độ an toàn để tính đến sự trôi dạt điện áp ngưỡng trong suốt vòng đời vận hành 10 năm.

**Liên kết tiếng Hàn:** `문턱 전압 드리프트` (門檻 電壓 drift) — sự trôi dạt điện áp ngưỡng.

---

## 6. interfacial oxide trap charging /ˌɪntərˈfeɪʃəl ˈɑksaɪd træp ˈtʃɑrdʒɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ hiện tượng tích điện ở lớp đệm hoặc tân ngữ sau các động từ như `characterize`, `quantify`, `decouple`.

**Core meaning — English:** The capture of inversion layer charge carriers (electrons or holes) by localized energy states situated within the sub-nanometer transition silicon dioxide layer directly adjacent to the silicon substrate.

**Core meaning & mental image — Tiếng Việt:** Sự nạp điện tích bẫy oxit mặt phân giới; hãy hình dung một lớp thảm dính mỏng dính nằm ngay cửa ra vào; khi đám đông (hạt mang điện) ùa qua hành lang, lớp thảm dính này bắt giữ một số người lại ngay tại thềm cửa; sự hiện diện của những người bị giữ lại tạo ra lực đẩy cản trở những người tiếp theo bước vào phòng.

**Grammar & collocations:** `kinetics of interfacial oxide trap charging` — động học của sự nạp điện tích bẫy oxit mặt phân giới; `minimize interfacial oxide trap charging` — giảm thiểu sự nạp điện tích bẫy oxit mặt phân giới; `fast interfacial oxide trap charging` — sự nạp điện tích bẫy oxit mặt phân giới tốc độ nhanh.

**Register & nuance:** `ultrathin dielectric characterization` — lớp oxit mặt phân giới (thường là SiO2 hoặc SiON dày ~0.7-1.0 nm) đóng vai trò then chốt bảo vệ độ linh động kênh; bẫy điện tích tại đây có tốc độ nạp/xả cực nhanh (microsecond) so với các bẫy nằm sâu trong lớp high-k.

**Examples:** `Fast pulse measurements revealed that interfacial oxide trap charging occurs within nanoseconds of applying gate stress, skewing conventional DC evaluations.` → Các phép đo xung nhanh tiết lộ rằng sự nạp điện tích bẫy oxit mặt phân giới xảy ra chỉ trong vài nano giây sau khi áp đặt ứng suất cổng, làm sai lệch các đánh giá dòng điện một chiều (DC) truyền thống.

**Liên kết tiếng Hàn:** `계면 산화막 트랩 충전` (界面 酸化膜 trap 充電) — sự nạp điện tích bẫy oxit mặt phân giới.

---

## 7. non-radiative multiphonon relaxation /nɑn ˌreɪdiˈeɪtɪv ˌmʌltiˈfoʊnɑn ˌriːlækˈseɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `NMP relaxation`). Thường làm chủ ngữ giải thích cơ chế chuyển đổi năng lượng vi mô hoặc tân ngữ sau các động từ như `invoke`, `simulate`, `model`.

**Core meaning — English:** A quantum mechanical transition mechanism wherein a captured carrier transitions between the semiconductor conduction/valence band and a localized defect state by exchanging energy with multiple crystal lattice vibrations (phonons) without emitting photons.

**Core meaning & mental image — Tiếng Việt:** Sự hồi phục đa phonon không phát xạ (NMP); hãy hình dung một quả bóng kim loại rơi từ tầng cao xuống một tấm bạt lò xo mạng lưới; thay vì phát ra ánh sáng chói lóa khi tiếp đất, năng lượng rơi tự do của nó được triệt tiêu bằng cách truyền rung chấn dữ dội vào hàng ngàn sợi dây đàn hồi (dao động mạng tinh thể - phonon) xung quanh, làm nóng toàn bộ cấu trúc mạng lưới.

**Grammar & collocations:** `governed by non-radiative multiphonon relaxation` — bị chi phối bởi sự hồi phục đa phonon không phát xạ; `non-radiative multiphonon relaxation barrier` — rào cản năng lượng hồi phục đa phonon không phát xạ; `theory of non-radiative multiphonon relaxation` — lý thuyết về sự hồi phục đa phonon không phát xạ.

**Register & nuance:** `deep defect physics, theoretical device aging` — là lý thuyết vật lý hiện đại chính xác nhất giải thích cơ chế bẫy hạt mang điện trong hiện tượng BTI và RTN, thay thế cho mô hình tunneling thuần túy cổ điển bằng cách tính đến sự tái cấu trúc cấu hình nguyên tử khi hạt mang điện bị bắt.

**Examples:** `Modern BTI models rely on non-radiative multiphonon relaxation to accurately predict the temperature dependence of defect trapping and emission rates.` → Các mô hình BTI hiện đại dựa vào sự hồi phục đa phonon không phát xạ để dự đoán chính xác sự phụ thuộc nhiệt độ của tốc độ bẫy và giải phóng khuyết tật.

**Liên kết tiếng Hàn:** `비방사 다중 포논 완화` (非放射 多重 phonon 緩和) — sự hồi phục đa phonon không phát xạ (NMP relaxation).

---

## 8. reaction-diffusion model /riˈækʃən dɪˈfjuːʒən ˈmɑdəl/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (thường gọi tắt là `R-D model`). Thường làm chủ ngữ trong lý thuyết mô hình hóa độ tin cậy hoặc tân ngữ sau các động từ như `formulate`, `employ`, `refine`.

**Core meaning — English:** A classical physical framework positing that negative bias temperature instability is governed by a forward electrochemical dissociation of silicon-hydrogen bonds at the interface followed by the outward diffusion of released hydrogen species into the gate dielectric.

**Core meaning & mental image — Tiếng Việt:** Mô hình phản ứng - khuếch tán; hãy hình dung một phản ứng hóa học bẻ khóa các hạt bong bóng khí (hydro) gắn trên thành tường; một khi đã thoát ra, các bong bóng này dần khuếch tán trôi dạt ra xa xuyên qua lớp chất lỏng nhớt; nếu ta đảo ngược lực ép, một số bong bóng sẽ trôi ngược lại để gắn lại vào thành tường (hồi phục), nhưng những hạt đã bay đi quá xa sẽ mất vĩnh viễn.

**Grammar & collocations:** `classical reaction-diffusion model` — mô hình phản ứng - khuếch tán kinh điển; `predict via the reaction-diffusion model` — dự đoán thông qua mô hình phản ứng - khuếch tán; `limitations of the reaction-diffusion model` — các hạn chế của mô hình phản ứng - khuếch tán.

**Register & nuance:** `reliability modeling history and kinetics` — dù mô hình R-D nguyên bản của Jeppson và Svensson (1977) giải thích rất đẹp quy luật lũy thừa thời gian $t^{0.25}$ hoặc $t^{0.16}$, trong các tiến trình HKMG hiện đại nó đã được bổ sung hoặc thay thế bằng mô hình bẫy khuyết tật đa mức do không giải thích trọn vẹn hiện tượng hồi phục siêu nhanh.

**Examples:** `While the reaction-diffusion model captures the long-term power-law slope of NBTI aging, it fails to explain ultrafast transient recovery observed at microsecond scales.` → Trong khi mô hình phản ứng - khuếch tán nắm bắt được độ dốc hàm mũ theo thời gian dài hạn của quá trình lão hóa NBTI, nó lại không thể giải thích được sự hồi phục chuyển tiếp siêu nhanh quan sát thấy ở thang đo micro giây.

**Liên kết tiếng Hàn:** `반응-확산 모델` (反應-擴散 model) — mô hình phản ứng - khuếch tán (R-D model).

---

## 9. border trap charging /ˈbɔrdər træp ˈtʃɑrdʒɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ hiện tượng bẫy chậm hoặc tân ngữ trong phân tích điện dung - điện áp ($C-V$) và $1/f$ noise.

**Core meaning — English:** The dynamic exchange and capture of charge carriers by defect centers located in the dielectric near the semiconductor interface, communicating with the channel through quantum tunneling over measurable time delays.

**Core meaning & mental image — Tiếng Việt:** Sự nạp điện vào bẫy ranh giới / bẫy biên; hãy hình dung những hang hốc nằm sâu sau hàng rào biên giới vài bước chân; những người vượt biên không bị giữ lại ngay tại vạch kẻ biên giới mà chui vào ẩn nấp trong các hang hốc này; họ mất nhiều thời gian hơn để ra vào, tạo ra sự trễ nhịp và bất ổn định kéo dài cho khu vực biên phòng.

**Grammar & collocations:** `border trap charging phenomenon` — hiện tượng nạp điện vào bẫy ranh giới; `distinguish border trap charging from interface states` — phân biệt sự nạp điện bẫy ranh giới với các trạng thái mặt phân giới; `density of border trap charging` — mật độ nạp điện bẫy ranh giới.

**Register & nuance:** `advanced MOS interface physics` — border traps (còn gọi là "switching oxide traps" hay "near-interface oxide traps") nằm cách mặt phân giới khoảng 0.5 đến 2 nm trong khối oxit; khác với interface traps nạp xả tức thì, border traps có thời gian trao đổi hạt từ microsecond đến hàng giây.

**Examples:** `Frequency-dependent capacitance analysis allowed the team to isolate border trap charging from instantaneous surface state transitions.` → Phân tích điện dung phụ thuộc tần số đã cho phép nhóm nghiên cứu tách biệt sự nạp điện vào bẫy ranh giới khỏi các biến chuyển trạng thái bề mặt tức thời.

**Liên kết tiếng Hàn:** `경계 트랩 충전` (境界 trap 充電) — sự nạp điện vào bẫy ranh giới (border trap charging).

---

## 10. recoverable degradation component /rɪˈkʌvərəbəl ˌdɛɡrəˈdeɪʃən kəmˈpoʊnənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc tân ngữ trong phân tích tách phổ lão hóa BTI (ví dụ: `quantify the recoverable degradation component`).

**Core meaning — English:** The portion of threshold voltage shift and transconductance loss that spontaneously relaxes and disappears once the electrical stress is removed, driven by the discharging of trapped carriers.

**Core meaning & mental image — Tiếng Việt:** Thành phần suy thoái có thể hồi phục; hãy hình dung vết lõm trên một chiếc gối cao su non sau khi bị tạ nặng đè lên; khi nhấc tạ ra, chiếc gối từ từ phồng trở lại hình dáng ban đầu; sự biến dạng này không làm rách gối mà chỉ là sự ép lún tạm thời của các phần tử đàn hồi.

**Grammar & collocations:** `measure the recoverable degradation component` — đo lường thành phần suy thoái có thể hồi phục; `decouple the recoverable degradation component` — tách biệt thành phần suy thoái có thể hồi phục; `time dependence of the recoverable degradation component` — sự phụ thuộc thời gian của thành phần suy thoái có thể hồi phục.

**Register & nuance:** `reliability characterization and guard-banding` — là một nửa của bài toán BTI (bên cạnh permanent component); nếu thử nghiệm độ tin cậy mất quá nhiều thời gian giữa lúc ngắt xung và lúc đo, thành phần hồi phục này sẽ biến mất khiến kỹ sư đánh giá non (underestimate) mức độ lão hóa thực tế.

**Examples:** `Unless stress-measure-stress sequences are executed within microseconds, a significant fraction of the recoverable degradation component vanishes unrecorded.` → Trừ khi các chuỗi ứng suất-đo-ứng suất được thực thi trong vòng vài micro giây, một phần đáng kể của thành phần suy thoái có thể hồi phục sẽ biến mất mà không được ghi nhận.

**Liên kết tiếng Hàn:** `회복 가능한 열화 성분` (回復 可能한 劣化 成分) — thành phần suy thoái có thể hồi phục.

---

## 11. permanent defect generation /ˈpɜrmənənt ˈdiːfɛkt ˌdʒɛnəˈreɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ sự phá hủy cấu trúc không thể vãn hồi hoặc tân ngữ sau các động từ như `induce`, `accumulate`, `bound`.

**Core meaning — English:** The irreversible creation of atomic defects, such as dangling silicon bonds ($P_b$ centers) or broken network bonds in the dielectric, that persist indefinitely even after electrical stress and thermal excitation cease.

**Core meaning & mental image — Tiếng Việt:** Sự tạo thành khuyết tật vĩnh viễn; hãy hình dung những vết rạn nứt gãy lìa trong một thanh kim loại sau nhiều năm bị kéo giãn quá tải; khác với hiện tượng uốn cong đàn hồi có thể tự nắn thẳng, những liên kết kim loại này đã bị đứt gãy hoàn toàn và không bao giờ tự hàn gắn lại được nữa.

**Grammar & collocations:** `irreversible permanent defect generation` — sự tạo thành khuyết tật vĩnh viễn không thể đảo ngược; `rate of permanent defect generation` — tốc độ tạo thành khuyết tật vĩnh viễn; `distinguish permanent defect generation from charge trapping` — phân biệt sự tạo thành khuyết tật vĩnh viễn với việc bẫy điện tích.

**Register & nuance:** `end-of-life qualification` — đại diện cho giới hạn suy thoái thực tế của transistor; trong khi các bẫy điện tích có thể xả bớt khi chip nghỉ ngơi (relax/idle), các khuyết tật vĩnh viễn sẽ tích tụ lũy tiến theo thời gian hoạt động và trực tiếp quyết định tuổi thọ 10 năm của vi xử lý.

**Examples:** `Thermal annealing cannot undo permanent defect generation once the silicon-dielectric interface suffers extensive chemical bond cleavage.` → Ủ nhiệt không thể đảo ngược sự tạo thành khuyết tật vĩnh viễn một khi mặt phân giới silicon-điện môi đã phải chịu sự phân cắt liên kết hóa học trên diện rộng.

**Liên kết tiếng Hàn:** `영구 결함 생성` (永久 缺陷 生成) — sự tạo thành khuyết tật vĩnh viễn.

---

## 12. defect passivation annealing /ˈdiːfɛkt ˌpæsəˈveɪʃən əˈniːlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ bước xử lý nhiệt chữa lành khuyết tật hoặc tân ngữ sau các động từ như `undergo`, `optimize`, `perform`.

**Core meaning — English:** A high-temperature post-metallization thermal treatment, typically conducted in a forming gas ambient (hydrogen or deuterium mixed with nitrogen), engineered to chemically terminate dangling bonds and electrically deactivate interface traps.

**Core meaning & mental image — Tiếng Việt:** Ủ nhiệt thụ động hóa khuyết tật; hãy hình dung việc quét một lớp sáp bảo vệ nóng chảy lên bề mặt gỗ bị nứt dăm gai; các phân tử sáp (nguyên tử hydro hoặc deuteri) len lỏi vào từng vết nứt siêu nhỏ, hàn gắn và bịt kín các đầu liên kết lởm chởm, biến bề mặt gồ ghề trở nên trơn tru và hoàn toàn miễn nhiễm với bụi bẩn bám dính.

**Grammar & collocations:** `high-pressure defect passivation annealing` — ủ nhiệt thụ động hóa khuyết tật áp suất cao; `deuterium-based defect passivation annealing` — ủ nhiệt thụ động hóa khuyết tật bằng deuteri; `optimize defect passivation annealing conditions` — tối ưu hóa các điều kiện ủ nhiệt thụ động hóa khuyết tật.

**Register & nuance:** `semiconductor fabrication process integration` — việc thay thế hydro bằng deuteri trong quá trình ủ (forming gas anneal) tạo ra hiệu ứng đồng vị khổng lồ (giant isotope effect); liên kết Si-D bền vững hơn nhiều trước các electron nóng, giúp tăng vọt khả năng chống suy thoái HCD.

**Examples:** `Executing defect passivation annealing in high-pressure deuterium gas replaced weak silicon-hydrogen bonds with sturdier bonds resistant to hot-carrier bombardment.` → Việc thực hiện ủ nhiệt thụ động hóa khuyết tật trong khí deuteri áp suất cao đã thay thế các liên kết silicon-hydro yếu ớt bằng các liên kết vững chắc hơn có khả năng chống lại sự bắn phá của hạt mang điện nóng.

**Liên kết tiếng Hàn:** `결함 수동태화 어닐링` (缺陷 受動態化 annealing) — ủ nhiệt thụ động hóa khuyết tật.

---

## 13. channel hot-electron injection /ˈtʃænəl hɑt ɪˈlɛktrɑn ɪnˈdʒɛkʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `CHEI` hoặc `CHE injection`). Thường làm chủ ngữ chỉ cơ chế bắn phá hạt hoặc tân ngữ sau các động từ như `trigger`, `suppress`, `characterize`.

**Core meaning — English:** The physical process in nMOS transistors where conduction electrons gaining high kinetic energy from the intense lateral channel electric field overcome the silicon-insulator conduction band barrier and inject directly into the gate dielectric.

**Core meaning & mental image — Tiếng Việt:** Sự tiêm electron nóng từ kênh dẫn; hãy hình dung những chiếc xe đua công thức một (electron) tăng tốc hết cỡ trên đoạn đường thẳng hướng về khúc cua tử thần (cực máng); do tốc độ quá khủng khiếp, một số xe bị văng bổng lên khỏi mặt đường, bay thẳng qua rào chắn hộ lan (rào cản thế năng) và đâm xuyên vào khán đài bên trên (lớp oxit cổng).

**Grammar & collocations:** `susceptibility to channel hot-electron injection` — độ nhạy cảm đối với sự tiêm electron nóng từ kênh dẫn; `channel hot-electron injection mechanism` — cơ chế tiêm electron nóng từ kênh dẫn; `mitigate channel hot-electron injection` — giảm thiểu sự tiêm electron nóng từ kênh dẫn.

**Register & nuance:** `hot carrier physics, non-volatile memory programming` — từng được khai thác có chủ đích để ghi dữ liệu vào bộ nhớ Flash EPROM; nhưng trong các bóng bán dẫn logic thu nhỏ, hiện tượng này là nguyên nhân hàng đầu gây hư hỏng cục bộ lớp điện môi gần cực máng.

**Examples:** `Near the drain pinch-off region, channel hot-electron injection drives energetic carriers over the potential barrier, generating permanent damage in the oxide.` → Gần vùng thắt kênh ở cực máng, sự tiêm electron nóng từ kênh dẫn đẩy các hạt mang điện giàu năng lượng vượt qua rào cản thế năng, gây ra hư hỏng vĩnh viễn trong lớp oxit.

**Liên kết tiếng Hàn:** `채널 핫 일렉트론 주입` (channel hot electron 注入) — sự tiêm electron nóng từ kênh dẫn (CHEI).

---

## 14. hot-carrier degradation /hɑt ˈkæriər ˌdɛɡrəˈdeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `HCD`). Thường làm chủ ngữ chỉ quá trình lão hóa transistor hoặc tân ngữ sau các động từ như `accelerate`, `model`, `suppress`.

**Core meaning — English:** The comprehensive deterioration of transistor switching metrics (such as drive current reduction and threshold voltage drift) caused by energetic electrons or holes damaging the dielectric interface near the drain junction.

**Core meaning & mental image — Tiếng Việt:** Sự suy thoái do hạt mang điện nóng (HCD); hãy hình dung dòng thác nước chảy xiết va đập vào bờ kè đá ngày này qua tháng khác; động năng khổng lồ của các giọt nước bắn phá làm xói mòn chân kè, tạo ra các lỗ rỗng và làm suy yếu toàn bộ kết cấu của bờ đập.

**Grammar & collocations:** `severe hot-carrier degradation` — sự suy thoái do hạt mang điện nóng nghiêm trọng; `hot-carrier degradation modeling` — mô hình hóa sự suy thoái do hạt mang điện nóng; `counteract hot-carrier degradation` — chống lại sự suy thoái do hạt mang điện nóng.

**Register & nuance:** `advanced node reliability` — ở các điện áp thấp hiện nay ($V_{DD} < 1.0V$), năng lượng hạt mang điện đơn lẻ không đủ để vượt rào cản; HCD chuyển sang cơ chế kích thích đa electron (multiple-electron excitation) thông qua tán xạ electron-electron.

**Examples:** `In scaled FinFET nodes, hot-carrier degradation shifts from single-carrier barrier hopping to multiple-electron scattering processes that progressively degrade drive current.` → Ở các nút tiến trình FinFET thu nhỏ, sự suy thoái do hạt mang điện nóng chuyển từ việc nhảy rào đơn hạt sang các quá trình tán xạ đa electron làm suy giảm dần dòng dẫn.

**Liên kết tiếng Hàn:** `핫 캐리어 열화` (hot carrier 劣化) — sự suy thoái do hạt mang điện nóng (HCD).

---

## 15. drain avalanche hot-carrier generation /dreɪn ˈævəlæntʃ hɑt ˈkæriər ˌdʒɛnəˈreɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `DAHC`). Thường làm chủ ngữ chỉ cơ chế va đập ion hóa hoặc tân ngữ trong phân tích dòng điện nền (substrate current).

**Core meaning — English:** A severe degradation regime occurring at high drain voltages where energetic channel carriers induce impact ionization, generating electron-hole pairs that undergo avalanche multiplication and inject carriers of both polarities into the oxide.

**Core meaning & mental image — Tiếng Việt:** Sự sinh hạt mang điện nóng do tuyết lở ở cực máng (DAHC); hãy hình dung một hòn đá nhỏ lăn xuống từ đỉnh dốc cao đập vào các tảng đá khác, kéo theo cả một trận sạt lở đất đá quy mô lớn (avalanche multiplication); cơn bão đất đá này bắn tung tóe các mảnh vỡ lên trần và vách hầm, phá hủy nghiêm trọng bề mặt xung quanh.

**Grammar & collocations:** `trigger drain avalanche hot-carrier generation` — kích hoạt sự sinh hạt mang điện nóng do tuyết lở ở cực máng; `regime of drain avalanche hot-carrier generation` — chế độ sinh hạt mang điện nóng do tuyết lở ở cực máng; `monitor drain avalanche hot-carrier generation via substrate current` — theo dõi sự sinh hạt mang điện nóng do tuyết lở qua dòng đế.

**Register & nuance:** `high-voltage I/O and power transistor reliability` — xảy ra mạnh nhất khi điện áp cổng ở mức trung bình ($V_G \approx V_D / 2$), nơi dòng đế đạt cực đại; cơ chế này tạo ra đồng thời cả bẫy electron và bẫy lỗ trống tại giao diện gần cực máng.

**Examples:** `Operating the transistor at intermediate gate biases maximizes substrate current, confirming that drain avalanche hot-carrier generation dominates the damage profile.` → Vận hành transistor ở các mức phân cực cổng trung gian sẽ cực đại hóa dòng đế, khẳng định rằng sự sinh hạt mang điện nóng do tuyết lở ở cực máng chi phối toàn bộ đặc tính hư hỏng.

**Liên kết tiếng Hàn:** `드레인 눈사태 핫 캐리어 생성` (drain avalanche hot carrier 生成) — sự sinh hạt mang điện nóng do tuyết lở ở cực máng (DAHC).

---

## 16. Fowler-Nordheim tunneling /ˈfaʊlər ˈnɔrdhaɪm ˈtʌnəlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `FN tunneling`). Thường làm chủ ngữ chỉ cơ chế dẫn điện qua điện môi mỏng hoặc tân ngữ sau các động từ như `undergo`, `dominate`, `measure`.

**Core meaning — English:** A quantum mechanical process in which electrons tunnel through a triangular potential energy barrier into the conduction band of an insulator under the influence of an intense electric field.

**Core meaning & mental image — Tiếng Việt:** Hiện tượng xuyên hầm Fowler-Nordheim; hãy hình dung một ngọn núi chắn đường có dạng hình tam giác dựng đứng; khi có một cơn bão điện trường cực mạnh thổi qua, sườn núi bị bẻ nghiêng và vát nhọn đến mức chân núi trở nên mỏng dính; các electron như những bóng ma đi xuyên thẳng qua lớp đá mỏng này để xuất hiện ở sườn bên kia mà không cần phải trèo lên đỉnh núi.

**Grammar & collocations:** `field-driven Fowler-Nordheim tunneling` — xuyên hầm Fowler-Nordheim do điện trường điều khiển; `Fowler-Nordheim tunneling regime` — chế độ xuyên hầm Fowler-Nordheim; `onset of Fowler-Nordheim tunneling` — sự khởi phát của hiện tượng xuyên hầm Fowler-Nordheim.

**Register & nuance:** `quantum transport and dielectric wear-out` — phân biệt với direct tunneling (xảy ra khi điện môi cực mỏng dưới điện trường thấp); FN tunneling đòi hỏi điện trường cao (>6–8 MV/cm) làm uốn cong dải dẫn của oxit thành hình tam giác; dòng FN là nguyên nhân chính bơm năng lượng tạo khuyết tật dẫn đến hiện tượng TDDB.

**Examples:** `At high stress voltages, conduction transitions into Fowler-Nordheim tunneling, bombarding the dielectric with high-energy electrons that generate secondary defects.` → Ở các điện áp ứng suất cao, sự dẫn điện chuyển sang hiện tượng xuyên hầm Fowler-Nordheim, bắn phá chất điện môi bằng các electron năng lượng cao tạo ra các khuyết tật thứ cấp.

**Liên kết tiếng Hàn:** `파울러-노드하임 터널링` (Fowler-Nordheim tunneling) — hiện tượng xuyên hầm Fowler-Nordheim.

---

## 17. time-dependent dielectric breakdown /taɪm dɪˈpɛndənt daɪəˈlɛktrɪk ˈbreɪkdaʊn/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `TDDB`). Thường làm chủ ngữ chỉ hư hỏng chí mạng của transistor hoặc tân ngữ sau các động từ như `accelerate`, `extrapolate`, `withstand`.

**Core meaning — English:** The catastrophic physical degradation mechanism whereby an insulating gate dielectric experiences gradual structural defect accumulation over time under electric stress until a conductive failure path abruptly shorts the gate to the channel.

**Core meaning & mental image — Tiếng Việt:** Sự đánh thủng điện môi phụ thuộc thời gian (TDDB); hãy hình dung một con đê kiên cố bị thấm nước ngầm; từng hạt cát bên trong thân đê bị cuốn trôi qua năm tháng (tích tụ khuyết tật); cho đến một ngày, một mạch nước ngầm thông suốt từ sông vào đồng nối liền lại với nhau, khiến con đê vỡ tan tành và dòng lũ điện ùa qua làm cháy rụi con chip.

**Grammar & collocations:** `susceptibility to time-dependent dielectric breakdown` — độ nhạy cảm đối với sự đánh thủng điện môi phụ thuộc thời gian; `TDDB lifetime extrapolation` — phép ngoại suy tuổi thọ TDDB; `accelerate time-dependent dielectric breakdown` — đẩy nhanh sự đánh thủng điện môi phụ thuộc thời gian.

**Register & nuance:** `ultimate dielectric reliability metric` — là bài toán sống còn quyết định độ tin cậy vật lý của công nghệ bán dẫn; trong cấu trúc HKMG, TDDB mang tính ngẫu nhiên thống kê cao do độ mỏng cực hạn của lớp oxit bề mặt kết hợp với lớp HfO2.

**Examples:** `Reliability engineers conducted constant voltage stress tests to ensure the gate dielectric resists time-dependent dielectric breakdown for over ten years under operational voltages.` → Các kỹ sư độ tin cậy đã tiến hành thử nghiệm ứng suất điện áp không đổi để đảm bảo lớp điện môi cổng chống chịu được sự đánh thủng điện môi phụ thuộc thời gian trong hơn 10 năm dưới điện áp vận hành.

**Liên kết tiếng Hàn:** `경시 절연 파괴` (經時 絶緣 破壞) — sự đánh thủng điện môi phụ thuộc thời gian (TDDB).

---

## 18. progressive dielectric breakdown /prəˈɡrɛsɪv daɪəˈlɛktrɪk ˈbreɪkdaʊn/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `PBD`). Thường làm chủ ngữ chỉ giai đoạn hỏng hóc phi đột ngột hoặc tân ngữ sau các động từ như `monitor`, `detect`, `characterize`.

**Core meaning — English:** The continuous, gradual growth of localized leakage current following initial soft breakdown in ultra-thin gate oxides, characterized by steady physical dilation of the percolation path rather than an instantaneous destructive thermal short.

**Core meaning & mental image — Tiếng Việt:** Sự đánh thủng điện môi diễn tiến / tiệm tiến; hãy hình dung một lỗ thủng nhỏ li ti trên màng lọc nước; thay vì nổ tung ngay lập tức, dòng nước xói mòn dần dần làm miệng lỗ rộng ra từng chút một qua từng ngày; người sử dụng vẫn có thể vận hành hệ thống thêm một thời gian ngắn trước khi thiết bị ngừng hoạt động hoàn toàn.

**Grammar & collocations:** `transition into progressive dielectric breakdown` — chuyển tiếp sang sự đánh thủng điện môi diễn tiến; `duration of progressive dielectric breakdown` — khoảng thời gian diễn tiến đánh thủng điện môi; `progressive dielectric breakdown kinetics` — động học của sự đánh thủng điện môi diễn tiến.

**Register & nuance:** `nanoscale gate oxide physics` — ở các lớp oxit siêu mỏng (dưới 2nm), năng lượng tích trữ trong điện dung cổng không đủ lớn để làm bốc hơi vật liệu tạo thành hard breakdown tức thì; thay vào đó, dòng rò tăng dần theo hàm mũ qua giai đoạn PBD, cung cấp thêm biên độ thời gian hoạt động thực tế (reliability margin) cho mạch tích hợp.

**Examples:** `In sub-3nm nodes, transistors often endure an extended phase of progressive dielectric breakdown before logic errors disrupt functional operation.` → Ở các nút tiến trình dưới 3nm, các transistor thường trải qua một giai đoạn đánh thủng điện môi diễn tiến kéo dài trước khi các lỗi logic làm gián đoạn hoạt động chức năng.

**Liên kết tiếng Hàn:** `점진적 절연 파괴` (漸進的 絶緣 破壞) — sự đánh thủng điện môi diễn tiến (progressive dielectric breakdown).

---

## 19. percolation path formation /ˌpɜrkəˈleɪʃən pæθ fɔrˈmeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ mô tả khoảnh khắc đánh thủng hoặc tân ngữ sau các động từ như `simulate`, `trigger`, `prevent`.

**Core meaning — English:** The statistical geometric alignment of randomly generated atomic defects across the thickness of a gate dielectric, culminating in a continuous conductive bridge that conducts high leakage current.

**Core meaning & mental image — Tiếng Việt:** Sự hình thành đường dẫn rò rỉ xuyên suốt / đường dẫn thẩm thấu; hãy hình dung việc ném ngẫu nhiên những viên đá bước chân xuống một đầm lầy sâu; ban đầu các viên đá nằm rải rác cách xa nhau; nhưng khi số lượng đá đủ nhiều, tình cờ một chuỗi các viên đá nằm thẳng hàng tạo thành một cây cầu bắc ngang đầm lầy, cho phép dòng người (electron) ùa qua dễ dàng.

**Grammar & collocations:** `critical percolation path formation` — sự hình thành đường dẫn thẩm thấu tới hạn; `statistical model of percolation path formation` — mô hình thống kê về sự hình thành đường dẫn thẩm thấu; `trigger percolation path formation` — kích hoạt sự hình thành đường dẫn thẩm thấu.

**Register & nuance:** `statistical breakdown theory (Weibull percolation theory)` — mô hình percolation của Degraeve và Suñé là nền tảng toán học giải thích TDDB; độ dày điện môi càng mỏng thì số lượng khuyết tật cần thiết để tạo thành một đường nối thông suốt càng ít, khiến độ dốc phân phối Weibull giảm mạnh.

**Examples:** `Breakdown occurs the precise instant defect generation achieves percolation path formation, shorting the gate electrode to the active silicon channel.` → Sự đánh thủng xảy ra vào chính khoảnh khắc quá trình tạo khuyết tật đạt tới sự hình thành đường dẫn thẩm thấu, nối tắt điện cực cổng với kênh dẫn silicon tích cực.

**Liên kết tiếng Hàn:** `퍼콜레이션 경로 형성` (percolation 經路 形成) — sự hình thành đường dẫn thẩm thấu (percolation path formation).

---

## 20. subthreshold slope degradation /ˌsʌbˈθrɛʃhoʊld sloʊp ˌdɛɡrəˈdeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (thường tương đương với `subthreshold swing degradation`). Thường làm chủ ngữ chỉ sự mất khả năng kiểm soát kênh hoặc tân ngữ sau các động từ như `induce`, `exhibit`, `calculate`.

**Core meaning — English:** The flattening of the subthreshold current-voltage curve of a field-effect transistor, signifying that a larger change in gate voltage is required to modulate drain current by one decade, caused by the buildup of interface trap states.

**Core meaning & mental image — Tiếng Việt:** Sự suy giảm độ dốc dưới ngưỡng / sự dão sườn dốc đóng ngắt; hãy hình dung chiếc phanh của xe hơi bị mòn và rơ rão; trước đây chỉ cần nhấp nhẹ chân phanh là xe dừng khựng lại (độ dốc cực dốc), nay phải đạp lút cán chân phanh mà xe vẫn từ từ trôi (độ dốc bị thoái hóa phẳng lì); transistor mất đi độ nhạy đóng ngắt sắc bén và làm rò rỉ năng lượng ở trạng thái tắt.

**Grammar & collocations:** `severe subthreshold slope degradation` — sự suy giảm độ dốc dưới ngưỡng nghiêm trọng; `correlate with subthreshold slope degradation` — tương quan với sự suy giảm độ dốc dưới ngưỡng; `mitigate subthreshold slope degradation` — giảm thiểu sự suy thoái độ dốc dưới ngưỡng.

**Register & nuance:** `MOSFET electrostatics and off-state leakage` — độ dốc dưới ngưỡng lý tưởng ở nhiệt độ phòng là ~60 mV/decade; sự tích tụ bẫy mặt phân giới ($D_{it}$) làm tăng điện dung bẫy ($C_{it}$), làm suy giảm độ dốc (tăng subthreshold swing lên 80-100 mV/dec), khiến dòng điện rò ở trạng thái tắt ($I_{off}$) tăng vọt theo hàm mũ.

**Examples:** `Interface state accumulation during stress manifests as subthreshold slope degradation, impairing the transistor's ability to switch sharply into an off state.` → Sự tích tụ trạng thái mặt phân giới trong thời gian chịu ứng suất biểu hiện thành sự suy giảm độ dốc dưới ngưỡng, làm suy giảm khả năng chuyển mạch sắc gọn về trạng thái tắt của transistor.

**Liên kết tiếng Hàn:** `서브스레숄드 기울기 열화` (subthreshold 傾斜 劣化) — sự suy giảm độ dốc dưới ngưỡng.

---

## 21. random telegraph noise /ˈrændəm ˈtɛləˌɡræf nɔɪz/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `RTN` hoặc `RTS`). Thường làm chủ ngữ chỉ nguồn nhiễu dao động hoặc tân ngữ sau các động từ như `induce`, `measure`, `filter`.

**Core meaning — English:** Discrete, bi-stable or multi-stable temporal fluctuations in drain current caused by the stochastic capture and emission of individual electrons by single defect traps located in the gate dielectric near the conductive channel.

**Core meaning & mental image — Tiếng Việt:** Nhiễu điện báo ngẫu nhiên (RTN); hãy hình dung một chiếc đèn tín hiệu điện báo đang phát mã Morse bập bùng một cách ngẫu nhiên; mỗi khi một hạt electron nhảy vào một cái bẫy vi mô, nó phát ra một cú giật điện chặn bớt dòng chảy; khi hạt nhảy ra, dòng chảy lại vọt lên; dòng điện biến thiên giật cục giữa hai mức cố định như tiếng gõ lạch cạch của máy điện báo.

**Grammar & collocations:** `bi-stable random telegraph noise` — nhiễu điện báo ngẫu nhiên hai trạng thái; `amplitude of random telegraph noise` — biên độ của nhiễu điện báo ngẫu nhiên; `random telegraph noise fluctuations` — các dao động nhiễu điện báo ngẫu nhiên.

**Register & nuance:** `nanometer device variability, SRAM stability` — trong các bóng bán dẫn kích thước micromet, sự đóng góp của một hạt electron bị trung bình hóa; nhưng trong các bóng bán dẫn nano hiện đại (kênh dẫn rộng vài chục nanomet), việc bẫy một electron duy nhất có thể làm dịch chuyển điện áp ngưỡng tới hàng chục millivolt, đe dọa trực tiếp biên độ đọc ghi của ô nhớ SRAM.

**Examples:** `In scaled FinFETs and nanosheets, random telegraph noise caused by a single oxide trap can destabilize SRAM cell read margins.` → Trong các cấu trúc FinFET và nanosheet thu nhỏ, nhiễu điện báo ngẫu nhiên gây ra bởi một bẫy oxit duy nhất có thể làm mất ổn định biên độ đọc của ô nhớ SRAM.

**Liên kết tiếng Hàn:** `랜덤 텔레그래프 노이즈` (random telegraph noise) — nhiễu điện báo ngẫu nhiên (RTN).

---

## 22. transconductance degradation /ˌtrænzkənˈdʌktəns ˌdɛɡrəˈdeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (thường ký hiệu là $\Delta g_m$). Thường làm chủ ngữ chỉ sự suy giảm năng lực khuếch đại hoặc tân ngữ sau các động từ như `exhibit`, `monitor`, `counteract`.

**Core meaning — English:** The loss in a transistor's ability to convert a small variation in gate-to-source voltage into an output drain current change, primarily driven by Coulomb scattering from generated interface traps that degrades channel carrier mobility.

**Core meaning & mental image — Tiếng Việt:** Sự suy giảm hỗ dẫn (transconductance degradation); hãy hình dung bàn đạp ga của một chiếc xe đua; ban đầu chỉ cần đạp nhẹ chân ga là xe vọt lên với gia tốc cực lớn; sau một thời gian máy bị bẩn và bugi bị muội than (bẫy điện tích), dù đạp ga hết cỡ thì xe cũng chỉ tăng tốc ì ạch; transistor mất đi khả năng khuếch đại và đáp ứng tín hiệu nhạy bén.

**Grammar & collocations:** `peak transconductance degradation` — sự suy giảm hỗ dẫn đỉnh; `correlate transconductance degradation with trap density` — tương quan sự suy giảm hỗ dẫn với mật độ bẫy; `measure transconductance degradation` — đo lường sự suy giảm hỗ dẫn.

**Register & nuance:** `analog/RF performance and digital drive strength` — hỗ dẫn ($g_m = \partial I_D / \partial V_G$) là chỉ số sống còn cho tốc độ chuyển mạch số và độ lợi khuếch đại tương tự; suy giảm hỗ dẫn là dấu hiệu trực tiếp cho thấy độ linh động hạt mang điện trong kênh ($\mu_{eff}$) bị hủy hoại bởi lực đẩy tĩnh điện Coulomb từ các bẫy mặt phân giới.

**Examples:** `Coupled with threshold shift, transconductance degradation suppresses the transistor's on-state current, throttling the processing throughput of high-frequency arithmetic units.` → Cùng với sự dịch chuyển điện áp ngưỡng, sự suy giảm hỗ dẫn bóp nghẹt dòng điện ở trạng thái bật của transistor, bóp nghẹt thông lượng xử lý của các đơn vị số học tần số cao.

**Liên kết tiếng Hàn:** `상호 컨덕턴스 열화` (相互 conductance 劣化) — sự suy giảm hỗ dẫn (transconductance degradation).

---

## 23. work function shift /wɜrk ˈfʌŋkʃən ʃɪft/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ sự biến đổi điện thế bề mặt kim loại hoặc tân ngữ sau các động từ như `induce`, `stabilize`, `characterize`.

**Core meaning — English:** The alteration of the effective minimum thermodynamic energy required to extract an electron from the metal gate electrode into vacuum, caused by interdiffusion of metal species or oxygen dipole rearrangement at high-k interfaces.

**Core meaning & mental image — Tiếng Việt:** Sự dịch chuyển công thoát electron; hãy hình dung một chiếc chìa khóa vạn năng bằng hợp kim đặc biệt được thiết kế vừa khít với ổ khóa; khi bị nung nóng lâu ngày, các nguyên tử trong hợp kim bị hoán đổi vị trí và bề mặt bị oxy hóa, làm thay đổi cấu trúc chìa khóa; chiếc chìa không còn khớp hoàn hảo với ổ khóa nữa khiến lực mở khóa bị lệch lạc hoàn toàn.

**Grammar & collocations:** `effective work function shift` — sự dịch chuyển công thoát hiệu dụng; `induce a work function shift` — gây ra sự dịch chuyển công thoát; `thermal-budget-induced work function shift` — sự dịch chuyển công thoát do ngân sách nhiệt.

**Register & nuance:** `HKMG gate stack engineering` — trong công nghệ cổng kim loại, công thoát hiệu dụng ($EWF$) quy định trực tiếp điện áp ngưỡng của nMOS và pMOS; sự dịch chuyển công thoát do khuếch tán nhiệt của nguyên tử kim loại (như Ti, Al, La) hoặc biến đổi lưỡng cực điện ở mặt phân giới là một trong những nguyên nhân gây trôi điện áp ngưỡng khó kiểm soát nhất.

**Examples:** `Annealing processes must be tightly restricted to prevent atomic interdiffusion from inducing an unacceptable work function shift in the pMOS gate metal.` → Các quy trình ủ nhiệt phải được kiểm soát nghiêm ngặt để ngăn chặn sự khuếch tán tương hỗ giữa các nguyên tử gây ra sự dịch chuyển công thoát không thể chấp nhận được trong kim loại cổng pMOS.

**Liên kết tiếng Hàn:** `일함수 변화` (逸函數 變化) — sự dịch chuyển công thoát electron (work function shift).

---

## 24. oxygen vacancy generation /ˈɑksədʒən ˈveɪkənsi ˌdʒɛnəˈreɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ cơ chế sinh khuyết tật nội tại trong màng oxit hoặc tân ngữ sau các động từ như `trigger`, `inhibit`, `simulate`.

**Core meaning — English:** The creation of missing oxygen atom sites within the hafnium oxide crystalline lattice under intense electrical fields, acting as intrinsic charge traps and electrical percolation precursors.

**Core meaning & mental image — Tiếng Việt:** Sự tạo sinh khoảng trống oxy / khuyết tật thiếu oxy; hãy hình dung một bức tường gạch men xếp khít; dưới sức ép của búa máy rung lắc dữ dội, một số viên gạch oxy bị bật tung ra khỏi bức tường, để lại những lỗ hổng trống hoác; những lỗ hổng này không chỉ giữ bụi bẩn (electron) kẹt lại mà còn làm suy yếu cấu trúc chịu lực của toàn bộ bức tường.

**Grammar & collocations:** `field-driven oxygen vacancy generation` — sự tạo sinh khoảng trống oxy do điện trường điều khiển; `inhibit oxygen vacancy generation` — ức chế sự tạo sinh khoảng trống oxy; `activation energy for oxygen vacancy generation` — năng lượng kích hoạt cho sự tạo sinh khoảng trống oxy.

**Register & nuance:** `high-k material physics and defect thermodynamics` — khoảng trống oxy ($V_O$) trong HfO2 là khuyết tật điểm nội tại phổ biến nhất; chúng có thể tồn tại ở các trạng thái điện tích $V_O^0, V_O^+, V_O^{2+}$, đóng vai trò như các bẫy electron sâu gây ra hiện tượng PBTI và tạo tiền đề cho đường dẫn đánh thủng TDDB.

**Examples:** `Under strong positive gate bias, oxygen vacancy generation in the hafnium oxide layer creates deep electron traps that accelerate threshold drift.` → Dưới phân cực cổng dương mạnh, sự tạo sinh khoảng trống oxy trong lớp oxit hafnium tạo ra các bẫy electron sâu làm tăng tốc sự trôi dạt điện áp ngưỡng.

**Liên kết tiếng Hàn:** `산소 공공 생성` (酸素 空孔 生成) — sự sinh khoảng trống oxy (oxygen vacancy generation).

---

## 25. voltage acceleration factor /ˈvoʊltɪdʒ ækˌsɛləˈreɪʃən ˈfæktər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (thường ký hiệu là $\gamma$ hoặc $\beta_V$). Thường làm chủ ngữ chỉ tham số tỷ lệ độ tin cậy hoặc tân ngữ trong các phương trình ngoại suy tuổi thọ linh kiện.

**Core meaning — English:** An empirical or physically derived scaling parameter quantifying how dramatically a dielectric failure or device aging mechanism accelerates per unit increase in applied operating voltage.

**Core meaning & mental image — Tiếng Việt:** Hệ số gia tốc điện áp; hãy hình dung một chiếc kính viễn vọng phóng đại tốc độ thời gian; nếu ta tăng điện áp lên thêm một chút, chiếc kính này lập tức tua nhanh thời gian lão hóa của linh kiện từ 10 năm xuống còn 10 giờ; hệ số gia tốc điện áp chính là con số cho biết thời gian bị tua nhanh gấp bao nhiêu lần khi ta vặn núm điện áp lên một nấc.

**Grammar & collocations:** `determine the voltage acceleration factor` — xác định hệ số gia tốc điện áp; `exponential voltage acceleration factor` — hệ số gia tốc điện áp hàm mũ; `incorporate the voltage acceleration factor into lifetime models` — đưa hệ số gia tốc điện áp vào các mô hình tuổi thọ.

**Register & nuance:** `accelerated life testing (ALT) and qualification` — vì không thể đợi 10 năm để kiểm tra xem một con chip có hỏng hay không, kỹ sư đặt điện áp thử nghiệm cao hơn nhiều so với điện áp thực tế; việc xác định chính xác mô hình gia tốc điện áp (E-model, 1/E model hay power-law model) là yếu tố quyết định để ngoại suy không bị sai lệch hàng bậc độ lớn.

**Examples:** `Selecting an inaccurate voltage acceleration factor can lead engineers to grossly overestimate the operating lifespan of modern FinFET logic cells.` → Việc lựa chọn một hệ số gia tốc điện áp thiếu chính xác có thể khiến các kỹ sư đánh giá vượt quá mức phóng đại tuổi thọ vận hành của các ô logic FinFET hiện đại.

**Liên kết tiếng Hàn:** `전압 가속 계수` (電壓 加速 係數) — hệ số gia tốc điện áp (voltage acceleration factor).

---

## Review in context (Part 1: Bias Temperature Instability and Trap Generation)

The transition to advanced sub-10nm logic nodes relies heavily on the engineering of the **high-k metal gate stack**, where an ultra-thin interfacial silicon oxide layer is paired with a hafnium-based dielectric to suppress tunneling current while maintaining electrostatic control. However, operating these ultra-scaled devices under sustained thermal and electrical stress exposes them to severe parametric degradation. In p-channel transistors, **negative bias temperature instability** acts as the predominant aging mechanism, dissociating interfacial silicon-hydrogen bonds and injecting holes into the gate insulator. Conversely, n-channel transistors suffer from **positive bias temperature instability**, where positive gate bias drives electrons into pre-existing bulk traps. Both stress conditions stimulate continuous **trap state generation**, which manifests as progressive **threshold voltage drift** that jeopardizes circuit timing margins over operating lifespans. Fast pulsed measurements demonstrate that **interfacial oxide trap charging** takes place almost instantaneously upon stress application, shifting electrical characteristics within nanoseconds. At the atomic scale, captured charge carriers transition between energy bands and localized defects through **non-radiative multiphonon relaxation**, dissipating energy into the surrounding lattice vibrations. While historical reliability predictions relied on the classical **reaction-diffusion model** to explain hydrogen transport away from the interface, modern analyses reveal that **border trap charging** within the near-interface oxide introduces complex frequency-dependent hysteresis. Crucially, device aging comprises a **recoverable degradation component** that spontaneously relaxes when the gate voltage is removed, coexisting with irreversible **permanent defect generation** that accumulates monotonically. To suppress both degradation pathways, fabricators perform post-metallization **defect passivation annealing** in high-pressure forming gas, terminating dangling bonds and stabilizing device performance.

**Bản dịch tiếng Việt:**

Sự chuyển dịch sang các nút logic tiên tiến dưới 10nm phụ thuộc lớn vào kỹ thuật thiết kế **cấu trúc xếp chồng cổng kim loại điện môi k cao**, nơi một lớp oxit silicon mặt phân giới siêu mỏng được kết hợp với chất điện môi gốc hafnium để triệt tiêu dòng xuyên hầm trong khi vẫn duy trì khả năng kiểm soát tĩnh điện. Tuy nhiên, việc vận hành các linh kiện siêu thu nhỏ này dưới ứng suất nhiệt và điện trường liên tục khiến chúng phải đối mặt với sự suy thoái tham số nghiêm trọng. Ở các transistor kênh p, **độ bất ổn định nhiệt phân cực âm** đóng vai trò là cơ chế lão hóa chủ đạo, làm phân cắt các liên kết silicon-hydro ở mặt phân giới và tiêm các lỗ trống vào chất cách điện cổng. Ngược lại, các transistor kênh n phải chịu đựng **độ bất ổn định nhiệt phân cực dương**, nơi phân cực cổng dương đẩy các electron vào các bẫy khối có sẵn. Cả hai điều kiện ứng suất đều kích thích **sự tạo trạng thái bẫy năng lượng** liên tục, biểu hiện thành **sự trôi dạt điện áp ngưỡng** lũy tiến đe dọa các biên độ định thời của mạch trong suốt vòng đời vận hành. Các phép đo xung nhanh chứng minh rằng **sự nạp điện tích bẫy oxit mặt phân giới** diễn ra gần như tức thời ngay khi áp đặt ứng suất, làm dịch chuyển các đặc tính điện chỉ trong vài nano giây. Ở quy mô nguyên tử, các hạt mang điện bị bắt giữ chuyển tiếp giữa các dải năng lượng và các khuyết tật cục bộ thông qua **sự hồi phục đa phonon không phát xạ**, tiêu tán năng lượng vào các dao động mạng tinh thể xung quanh. Mặc dù các dự đoán độ tin cậy trong lịch sử dựa vào **mô hình phản ứng - khuếch tán** kinh điển để giải thích sự vận chuyển của hydro ra xa mặt phân giới, các phân tích hiện đại tiết lộ rằng **sự nạp điện vào bẫy ranh giới** bên trong lớp oxit gần mặt phân giới tạo ra hiện tượng trễ phụ thuộc tần số phức tạp. Điều cốt lõi là quá trình lão hóa linh kiện bao gồm một **thành phần suy thoái có thể hồi phục** tự động lắng dịu khi điện áp cổng được ngắt bỏ, cùng tồn tại với **sự tạo thành khuyết tật vĩnh viễn** không thể đảo ngược tích tụ đơn điệu. Để ức chế cả hai con đường suy thoái này, các nhà chế tạo thực hiện **ủ nhiệt thụ động hóa khuyết tật** sau kim loại hóa trong môi trường khí tạo màng áp suất cao, hàn gắn các liên kết treo và ổn định hiệu năng linh kiện.

---

## Review in context (Part 2: Hot-Carrier Injection and Dielectric Breakdown)

While bias temperature instability threatens static device longevity, dynamic switching operations exacerbate high-field transport wear-out. In active logic gates, electrons accelerating across the channel gain enormous kinetic energy near the drain pinch-off region, precipitating **channel hot-electron injection** into the gate dielectric. This energetic carrier bombardment triggers severe **hot-carrier degradation**, damaging the gate oxide interface and curtailing drive currents during switching transients. When operating at elevated drain voltages, impact ionization can induce **drain avalanche hot-carrier generation**, producing electron-hole pairs that multiply and inject carriers of both polarities into the dielectric stack. Under extreme vertical electric fields, quantum mechanical conduction shifts into **Fowler-Nordheim tunneling**, injecting energetic electrons through triangular potential barriers. Over extended operational periods, this continuous charge injection drives **time-dependent dielectric breakdown**, posing a catastrophic threat to transistor integrity. In ultra-thin high-k stacks, this failure frequently unfolds as **progressive dielectric breakdown**, where leakage current increases steadily rather than shorting abruptly. This progressive wear-out reflects localized **percolation path formation**, wherein randomly distributed atomic defects align into a continuous conductive filament. As localized defects accumulate, the transistor exhibits pronounced **subthreshold slope degradation**, which impairs sharp off-state turn-off and multiplies standby power dissipation. Furthermore, individual defect traps near the conduction channel capture and emit single electrons stochastically, producing bi-stable **random telegraph noise** that destabilizes memory cell margins. Concurrently, Coulomb scattering from interface charges causes **transconductance degradation**, diminishing device gain and output drive capability. At high operating temperatures, material interdiffusion across the gate layers triggers an unwanted **work function shift**, altering the baseline electrostatic threshold. Inside the bulk hafnium layer, intense electric fields stimulate **oxygen vacancy generation**, multiplying trap sites that accelerate dielectric rupture. To establish safe operational guard bands, reliability engineers accurately extract the **voltage acceleration factor**, extrapolating accelerated life tests into a reliable decade-long lifespan for advanced integrated circuits.

**Bản dịch tiếng Việt:**

Trong khi độ bất ổn định nhiệt phân cực đe dọa tuổi thọ tĩnh của linh kiện, các hoạt động chuyển mạch động làm trầm trọng thêm sự hao mòn do vận chuyển trong điện trường cao. Trong các cổng logic tích cực, các electron tăng tốc qua kênh dẫn đạt được động năng khổng lồ gần vùng thắt kênh ở cực máng, dẫn đến **sự tiêm electron nóng từ kênh dẫn** vào lớp điện môi cổng. Sự bắn phá của các hạt mang điện giàu năng lượng này kích hoạt **sự suy thoái do hạt mang điện nóng** nghiêm trọng, gây hư hại mặt phân giới oxit cổng và làm sụt giảm dòng dẫn trong các chuyển tiếp chuyển mạch. Khi vận hành ở điện áp cực máng cao, hiện tượng ion hóa do va đập có thể kích hoạt **sự sinh hạt mang điện nóng do tuyết lở ở cực máng**, tạo ra các cặp electron-lỗ trống nhân lên theo cấp số nhân và tiêm các hạt mang điện thuộc cả hai cực tính vào khối điện môi. Dưới các điện trường thẳng đứng cực mạnh, sự dẫn điện theo cơ học lượng tử chuyển sang **hiện tượng xuyên hầm Fowler-Nordheim**, tiêm các electron năng lượng cao xuyên qua các rào cản thế năng hình tam giác. Qua các chu kỳ vận hành kéo dài, sự tiêm điện tích liên tục này dẫn tới **sự đánh thủng điện môi phụ thuộc thời gian**, tạo ra mối đe dọa chí mạng đối với tính toàn vẹn của transistor. Trong các cấu trúc xếp chồng k cao siêu mỏng, sự hỏng hóc này thường diễn ra dưới dạng **sự đánh thủng điện môi diễn tiến**, nơi dòng điện rò rỉ tăng đều đặn thay vì ngắn mạch đột ngột. Sự hao mòn diễn tiến này phản ánh **sự hình thành đường dẫn rò rỉ xuyên suốt** cục bộ, trong đó các khuyết tật nguyên tử phân bố ngẫu nhiên liên kết thành một sợi dẫn điện thông suốt. Khi các khuyết tật cục bộ tích tụ, transistor xuất hiện **sự suy giảm độ dốc dưới ngưỡng** rõ rệt, làm suy yếu khả năng ngắt sắc gọn ở trạng thái tắt và nhân lên lượng tiêu tán công suất tĩnh. Hơn nữa, các bẫy khuyết tật đơn lẻ gần kênh dẫn bắt giữ và phát xạ các electron đơn lẻ một cách ngẫu nhiên, sinh ra **nhiễu điện báo ngẫu nhiên** hai trạng thái làm mất ổn định biên độ đọc của các ô nhớ. Đồng thời, tán xạ Coulomb từ các điện tích mặt phân giới gây ra **sự suy giảm hỗ dẫn**, làm suy giảm độ lợi linh kiện và khả năng kéo tải đầu ra. Ở nhiệt độ vận hành cao, sự khuếch tán tương hỗ vật liệu giữa các lớp cổng kích hoạt **sự dịch chuyển công thoát** không mong muốn, làm biến đổi ngưỡng tĩnh điện cơ sở. Bên trong lớp hafnium khối, điện trường mạnh kích thích **sự tạo sinh khoảng trống oxy**, nhân rộng các vị trí bẫy làm đẩy nhanh sự phá vỡ điện môi. Để thiết lập các biên bảo vệ vận hành an toàn, các kỹ sư độ tin cậy trích xuất chính xác **hệ số gia tốc điện áp**, ngoại suy các thử nghiệm tuổi thọ gia tốc thành một vòng đời một thập kỷ đáng tin cậy cho các mạch tích hợp tiên tiến.
