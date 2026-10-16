# C2 Vocabulary — Criticality and nonequilibrium quantum dynamics

This lesson develops many-body simulation from phase transitions and scaling to entanglement growth, scars, and prethermal behavior.

Flow: **critical exponent → order parameter → finite-size scaling → Loschmidt echo → out-of-time-order correlator → entanglement spectrum → area law → volume law → light-cone spreading → prethermal state → quantum scar → scarred eigenstate → Hilbert-space fragmentation → ergodicity breaking → many-body gap → spectral gap → ground-state degeneracy → edge mode → bulk-boundary correspondence → critical point**.

## 1. critical exponent /ˈkrɪtɪkəl ˈeksəpoʊnənt/
**Part of speech:** noun
**Core meaning (English):** a number that describes how an observable changes as a system approaches a continuous phase transition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** con số mô tả observable đổi thế nào khi hệ tiến tới chuyển pha liên tục.
**Grammar & collocations:** `critical-exponent estimate` — ước tính; `fit a scaling law` — fit quy luật scale.
**Examples:** `The critical exponent agreed with the universality class of the simulated model.` → Critical exponent phù hợp với lớp universality của model mô phỏng.
**Liên kết tiếng Hàn:** `임계 지수`.

## 2. order parameter /ˈɔːrdər pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a quantity that distinguishes an ordered phase from a disordered phase.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đại lượng phân biệt pha có trật tự với pha mất trật tự.
**Grammar & collocations:** `order-parameter fluctuation` — dao động; `measure spontaneous order` — đo trật tự tự phát.
**Examples:** `The order parameter vanished when the interaction crossed the critical point.` → Order parameter biến mất khi tương tác vượt điểm tới hạn.
**Liên kết tiếng Hàn:** `질서 매개변수`.

## 3. finite-size scaling /ˈfaɪnaɪt saɪz ˈskeɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** analysis that uses systems of different sizes to infer behavior in the infinite-size limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích dùng hệ có size khác nhau để suy hành vi ở giới hạn vô hạn.
**Grammar & collocations:** `finite-size-scaling collapse` — collapse; `extrapolate a thermodynamic limit` — ngoại suy giới hạn nhiệt động.
**Examples:** `Finite-size scaling located the transition more reliably than a single array could.` → Scaling size hữu hạn định vị transition đáng tin hơn một mảng đơn.
**Liên kết tiếng Hàn:** `유한 크기 스케일링`.

## 4. Loschmidt echo /ˈlɑːʃmɪt ˈekoʊ/
**Part of speech:** noun
**Core meaning (English):** the overlap between an initial state and the state obtained after forward evolution followed by an imperfect reversal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** overlap giữa trạng thái đầu và trạng thái sau tiến hóa xuôi rồi đảo ngược không hoàn hảo.
**Grammar & collocations:** `Loschmidt-echo decay` — suy giảm; `reverse a Hamiltonian` — đảo Hamiltonian.
**Examples:** `The Loschmidt echo revealed how quickly control imperfections accumulated.` → Echo Loschmidt cho thấy imperfection control tích lũy nhanh thế nào.
**Liên kết tiếng Hàn:** `로슈미트 에코`.

## 5. out-of-time-order correlator /aʊt əv taɪm ˈɔːrdər ˈkɔːrəleɪtər/
**Part of speech:** noun
**Core meaning (English):** a correlator with operators ordered unusually in time to diagnose scrambling and information growth.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** correlator có operator sắp xếp khác thường theo time để chẩn đoán scrambling và lan thông tin.
**Grammar & collocations:** `out-of-time-order-correlator measurement` — phép đo; `probe operator spreading` — thăm dò lan operator.
**Examples:** `The out-of-time-order correlator tracked information scrambling across the atom array.` → Correlator out-of-time-order theo dõi scrambling thông tin qua mảng atom.
**Liên kết tiếng Hàn:** `시간 순서 외 상관기`.

## 6. entanglement spectrum /ɪnˈtæŋɡəlmənt ˈspektrəm/
**Part of speech:** noun
**Core meaning (English):** the spectrum of eigenvalues of a subsystem's reduced density operator, used to reveal hidden quantum structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phổ eigenvalue của reduced density operator của subsystem, dùng để lộ cấu trúc lượng tử ẩn.
**Grammar & collocations:** `entanglement-spectrum level` — level; `partition a wavefunction` — chia wavefunction.
**Examples:** `The entanglement spectrum exposed edge structure that ordinary correlations missed.` → Phổ vướng víu lộ cấu trúc edge mà tương quan thường bỏ sót.
**Liên kết tiếng Hàn:** `얽힘 스펙트럼`.

## 7. area law /ˈeriə lɔː/
**Part of speech:** noun
**Core meaning (English):** a scaling rule in which entanglement grows mainly with the boundary area between a subsystem and its environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy luật scale trong đó entanglement chủ yếu tăng theo diện tích biên giữa subsystem và môi trường.
**Grammar & collocations:** `area-law entanglement` — entanglement; `bound boundary information` — giới hạn thông tin biên.
**Examples:** `The ground state followed an area law, making a tensor-network description efficient.` → Ground state tuân area law nên mô tả tensor-network hiệu quả.
**Liên kết tiếng Hàn:** `면적 법칙`.

## 8. volume law /ˈvɑːljuːm lɔː/
**Part of speech:** noun
**Core meaning (English):** a scaling rule in which entanglement grows proportionally to a subsystem's volume or number of degrees of freedom.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy luật scale trong đó entanglement tăng theo thể tích hoặc số bậc tự do của subsystem.
**Grammar & collocations:** `volume-law entanglement` — entanglement; `represent a highly mixed state` — biểu diễn trạng thái trộn cao.
**Examples:** `Quench dynamics produced volume-law entanglement instead of the ground state's area law.` → Dynamics quench tạo entanglement theo volume law thay vì area law của ground state.
**Liên kết tiếng Hàn:** `체적 법칙`.

## 9. light-cone spreading /laɪt koʊn ˈspredɪŋ/
**Part of speech:** noun
**Core meaning (English):** propagation of correlations within a region bounded by an effective maximum speed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lan tương quan trong vùng bị giới hạn bởi tốc độ cực đại hiệu dụng.
**Grammar & collocations:** `light-cone-spreading velocity` — velocity; `bound causal propagation` — giới hạn truyền nhân quả.
**Examples:** `Light-cone spreading showed when the distant sites could first respond to the quench.` → Lan light-cone cho thấy khi nào site xa có thể đáp ứng quench.
**Liên kết tiếng Hàn:** `광원뿔 확산`.

## 10. prethermal state /ˌpriːˈθɜːrməl steɪt/
**Part of speech:** noun
**Core meaning (English):** a long-lived nonequilibrium state that appears settled before eventual thermalization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái ngoài cân bằng sống lâu, có vẻ ổn định trước thermalization cuối.
**Grammar & collocations:** `prethermal-state plateau` — plateau; `observe slow heating` — quan sát heating chậm.
**Examples:** `The Floquet drive created a prethermal state with stable correlations.` → Drive Floquet tạo trạng thái prethermal với tương quan ổn định.
**Liên kết tiếng Hàn:** `사전 열평형 상태`.

## 11. quantum scar /ˈkwɑːntəm skɑːr/
**Part of speech:** noun
**Core meaning (English):** an atypical nonthermal eigenstate that supports unusually persistent oscillations from selected initial states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** eigenstate phi nhiệt bất thường hỗ trợ dao động bền lâu từ các initial state chọn.
**Grammar & collocations:** `quantum-scar oscillation` — dao động; `revive a special initial state` — khôi phục trạng thái đầu đặc biệt.
**Examples:** `A quantum scar kept the array oscillating even though most states thermalized.` → Quantum scar giữ mảng dao động dù phần lớn trạng thái thermalize.
**Liên kết tiếng Hàn:** `양자 스카`.

## 12. scarred eigenstate /skɑːrd ˈaɪɡənsteɪt/
**Part of speech:** noun
**Core meaning (English):** an eigenstate containing enhanced weight along a classically unstable orbit or special dynamical trajectory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** eigenstate có trọng số tăng dọc quỹ đạo không ổn định cổ điển hoặc trajectory đặc biệt.
**Grammar & collocations:** `scarred-eigenstate overlap` — overlap; `identify a nonthermal eigenstate` — xác định eigenstate phi nhiệt.
**Examples:** `The initial product state overlapped strongly with a scarred eigenstate.` → Product state ban đầu overlap mạnh với eigenstate scarred.
**Liên kết tiếng Hàn:** `스카 고유상태`.

## 13. Hilbert-space fragmentation /ˈhɪlbərt speɪs ˌfræɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** separation of a Hilbert space into dynamically disconnected sectors that cannot freely mix.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** Hilbert space tách thành các sector động lực không liên thông, không thể trộn tự do.
**Grammar & collocations:** `Hilbert-space-fragmentation sector` — sector; `constrain accessible states` — giới hạn state truy cập.
**Examples:** `Hilbert-space fragmentation prevented ordinary thermalization in the constrained model.` → Fragmentation Hilbert space ngăn thermalization thường trong model có ràng buộc.
**Liên kết tiếng Hàn:** `힐베르트 공간 파편화`.

## 14. ergodicity breaking /ˌɜːrɡəˈdɪsəti ˈbreɪkɪŋ/
**Part of speech:** noun
**Core meaning (English):** failure of a system to explore its allowed phase space in the way assumed by equilibrium statistical mechanics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ không khám phá phase space được phép theo cách cơ học thống kê cân bằng giả định.
**Grammar & collocations:** `ergodicity-breaking mechanism` — cơ chế; `retain memory of initial conditions` — giữ memory điều kiện đầu.
**Examples:** `Ergodicity breaking preserved local information for unexpectedly long times.` → Phá ergodicity giữ thông tin cục bộ lâu bất ngờ.
**Liên kết tiếng Hàn:** `에르고딕성 깨짐`.

## 15. many-body gap /ˈmeni ˈbɑːdi ɡæp/
**Part of speech:** noun
**Core meaning (English):** the energy difference between a many-body ground state and its lowest relevant excitation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh năng lượng giữa ground state nhiều hạt và excitation thấp nhất liên quan.
**Grammar & collocations:** `many-body-gap closing` — đóng gap; `resolve a collective excitation` — phân giải excitation tập thể.
**Examples:** `The many-body gap shrank as the control parameter approached the transition.` → Gap nhiều hạt thu nhỏ khi tham số tiến tới transition.
**Liên kết tiếng Hàn:** `다체 갭`.

## 16. spectral gap /ˈspektrəl ɡæp/
**Part of speech:** noun
**Core meaning (English):** a frequency or energy interval containing no allowed eigenvalues or spectral weight.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng frequency hoặc energy không có eigenvalue hoặc spectral weight được phép.
**Grammar & collocations:** `spectral-gap protection` — bảo vệ; `open a gap at the edge` — mở gap ở edge.
**Examples:** `The spectral gap protected the low-energy state from weak perturbations.` → Gap phổ bảo vệ trạng thái năng lượng thấp khỏi perturbation yếu.
**Liên kết tiếng Hàn:** `스펙트럼 갭`.

## 17. ground-state degeneracy /ɡraʊnd steɪt dɪˌdʒenəˈræsəti/
**Part of speech:** noun
**Core meaning (English):** the number of distinct ground states sharing the same lowest energy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số ground state khác nhau có cùng năng lượng thấp nhất.
**Grammar & collocations:** `ground-state-degeneracy count` — số lượng; `lift a degeneracy` — phá suy biến.
**Examples:** `Ground-state degeneracy increased when the system acquired topological order.` → Suy biến ground state tăng khi hệ có topological order.
**Liên kết tiếng Hàn:** `바닥상태 축퇴`.

## 18. edge mode /edʒ moʊd/
**Part of speech:** noun
**Core meaning (English):** an excitation localized near the boundary of a finite system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** excitation định xứ gần biên của hệ hữu hạn.
**Grammar & collocations:** `edge-mode spectrum` — phổ; `localize a boundary excitation` — định xứ excitation biên.
**Examples:** `The edge mode remained visible even while the bulk correlations changed.` → Mode edge vẫn thấy dù tương quan bulk đổi.
**Liên kết tiếng Hàn:** `가장자리 모드`.

## 19. bulk-boundary correspondence /bʌlk ˈbaʊndəri ˌkɔːrəˈspɑːndəns/
**Part of speech:** noun
**Core meaning (English):** a relation connecting a bulk system's topological properties to modes or responses at its boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ nối tính topology của bulk với mode hoặc đáp ứng ở biên.
**Grammar & collocations:** `bulk-boundary-correspondence test` — test; `predict a protected edge mode` — dự đoán mode edge được bảo vệ.
**Examples:** `Bulk-boundary correspondence predicted the edge mode before it was imaged.` → Tương ứng bulk-boundary dự đoán mode edge trước khi imaging.
**Liên kết tiếng Hàn:** `벌크-경계 대응`.

## 20. critical point /ˈkrɪtɪkəl pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** the parameter value at which a system changes phase or its fluctuations become scale-invariant.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị tham số nơi hệ đổi pha hoặc dao động trở nên bất biến theo scale.
**Grammar & collocations:** `critical-point estimate` — ước tính; `cross the phase boundary` — vượt biên pha.
**Examples:** `The array approached a critical point as the interaction reached the transition value.` → Mảng tiến tới critical point khi tương tác đạt giá trị chuyển pha.
**Liên kết tiếng Hàn:** `임계점`.

## Review in context

The **critical exponent**, **order parameter**, and **finite-size scaling** locate a transition; a **Loschmidt echo** and an **out-of-time-order correlator** probe reversibility and scrambling. The **entanglement spectrum** can obey an **area law** or a **volume law**, while **light-cone spreading** and a **prethermal state** reveal nonequilibrium structure. A **quantum scar** or **scarred eigenstate** may coexist with **Hilbert-space fragmentation** and **ergodicity breaking**. The **many-body gap**, **spectral gap**, **ground-state degeneracy**, **edge mode**, and **bulk-boundary correspondence** organize the approach to a **critical point**.

**Bản dịch tiếng Việt:** **Critical exponent**, **order parameter** và **finite-size scaling** định vị transition; **Loschmidt echo** và **out-of-time-order correlator** thăm dò khả năng đảo và scrambling. **Entanglement spectrum** có thể tuân **area law** hoặc **volume law**, còn **light-cone spreading** và **prethermal state** cho thấy cấu trúc ngoài cân bằng. **Quantum scar** hoặc **scarred eigenstate** có thể cùng tồn tại với **Hilbert-space fragmentation** và **ergodicity breaking**. **Many-body gap**, **spectral gap**, **ground-state degeneracy**, **edge mode** và **bulk-boundary correspondence** tổ chức tiến trình tới **critical point**.
