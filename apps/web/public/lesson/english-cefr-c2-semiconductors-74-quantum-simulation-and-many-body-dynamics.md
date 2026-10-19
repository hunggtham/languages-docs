# C2 Vocabulary — Quantum simulation and many-body dynamics

This lesson uses programmable atom arrays to express quantum gates, spin models, quenches, and many-body observables.

Flow: **composite pulse → adiabatic gate → geometric phase gate → holonomic gate → spin model → Ising interaction → XY interaction → Floquet engineering → many-body localization → thermalization → entanglement entropy → correlation function → quantum walk → quantum quench → quench dynamics → spin chain → lattice Hamiltonian → interaction graph → topological order → quantum phase transition**.

## 1. composite pulse /kəmˈpɑːzɪt pʌls/
**Part of speech:** noun
**Core meaning (English):** a sequence of control pulses designed to cancel systematic rotation or detuning errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi control pulse được thiết kế để triệt error rotation hoặc detuning có hệ thống.
**Grammar & collocations:** `composite-pulse sequence` — chuỗi; `cancel amplitude error` — triệt error biên độ.
**Examples:** `The composite pulse corrected the rotation without lengthening the gate dramatically.` → Pulse composite sửa phép xoay mà không làm gate dài đáng kể.
**Liên kết tiếng Hàn:** `복합 펄스`.

## 2. adiabatic gate /ˌeɪdiəˈbætɪk ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a gate implemented slowly enough for the system to remain in the desired instantaneous eigenstate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gate thực hiện đủ chậm để hệ giữ eigenstate tức thời mong muốn.
**Grammar & collocations:** `adiabatic-gate path` — path; `follow an eigenstate` — bám eigenstate.
**Examples:** `The adiabatic gate reduced leakage at the cost of a longer operation.` → Gate adiabatic giảm leakage nhưng phải đổi bằng thao tác dài hơn.
**Liên kết tiếng Hàn:** `단열 게이트`.

## 3. geometric phase gate /ˌdʒiːəˈmetrɪk feɪz ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a gate whose phase is determined by the path taken through control-parameter space rather than only by elapsed dynamical phase.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gate có pha do đường đi trong không gian tham số điều khiển quyết định, không chỉ do pha động lực theo thời gian.
**Grammar & collocations:** `geometric-phase-gate loop` — vòng; `enclose a control path` — bao một path điều khiển.
**Examples:** `The geometric phase gate returned the atom to its starting motion with a conditional phase.` → Gate pha hình học đưa atom về chuyển động ban đầu với pha điều kiện.
**Liên kết tiếng Hàn:** `기하학적 위상 게이트`.

## 4. holonomic gate /ˌhɑːləˈnɑːmɪk ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a geometric gate that encodes an operation in the evolution of a degenerate subspace.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gate hình học mã hóa thao tác trong sự tiến hóa của một subspace suy biến.
**Grammar & collocations:** `holonomic-gate trajectory` — quỹ đạo; `transport a degenerate subspace` — vận chuyển subspace suy biến.
**Examples:** `The holonomic gate stored the logical operation in a geometric transformation.` → Gate holonomic lưu thao tác logic trong biến đổi hình học.
**Liên kết tiếng Hàn:** `홀로노믹 게이트`.

## 5. spin model /spɪn ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a mathematical model in which localized spins interact according to specified couplings and fields.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình toán trong đó spin định xứ tương tác theo coupling và trường xác định.
**Grammar & collocations:** `spin-model Hamiltonian` — Hamiltonian; `encode a coupling graph` — mã hóa graph coupling.
**Examples:** `The atom array implemented a spin model with programmable nearest-neighbor strength.` → Mảng atom thực hiện mô hình spin với strength láng giềng chỉnh được.
**Liên kết tiếng Hàn:** `스핀 모형`.

## 6. Ising interaction /ˈaɪzɪŋ ˌɪntərˈækʃən/
**Part of speech:** noun
**Core meaning (English):** an interaction that couples one component of each spin, often producing aligned or anti-aligned configurations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tương tác ghép một component của mỗi spin, thường tạo cấu hình cùng hoặc ngược hướng.
**Grammar & collocations:** `Ising-interaction graph` — graph; `favor aligned spins` — ưu tiên spin cùng hướng.
**Examples:** `The Ising interaction drove the array toward an ordered spin pattern.` → Tương tác Ising đẩy mảng về pattern spin có trật tự.
**Liên kết tiếng Hàn:** `아이징 상호작용`.

## 7. XY interaction /ˈeks waɪ ˌɪntərˈækʃən/
**Part of speech:** noun
**Core meaning (English):** a spin interaction that couples transverse components and permits exchange of spin excitations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tương tác spin ghép các component ngang và cho phép trao đổi excitation spin.
**Grammar & collocations:** `XY-interaction Hamiltonian` — Hamiltonian; `exchange a spin excitation` — trao đổi excitation spin.
**Examples:** `The XY interaction moved a spin excitation coherently across the chain.` → Tương tác XY đưa excitation spin coherent qua chuỗi.
**Liên kết tiếng Hàn:** `XY 상호작용`.

## 8. Floquet engineering /ˈfloʊkeɪt ˌendʒəˈnɪrɪŋ/
**Part of speech:** noun
**Core meaning (English):** designing a periodically driven system so its effective dynamics realize a desired Hamiltonian.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế hệ drive tuần hoàn để dynamics hiệu dụng thực hiện Hamiltonian mong muốn.
**Grammar & collocations:** `Floquet-engineering protocol` — protocol; `dress an effective coupling` — phủ coupling hiệu dụng.
**Examples:** `Floquet engineering changed the sign of the effective spin interaction.` → Engineering Floquet đổi dấu tương tác spin hiệu dụng.
**Liên kết tiếng Hàn:** `플로케 공학`.

## 9. many-body localization /ˈmeni ˈbɑːdi ˌloʊkələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** failure of an interacting isolated system to thermalize because disorder and interactions keep information localized.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ cô lập có tương tác không thermalize vì disorder và tương tác giữ thông tin định xứ.
**Grammar & collocations:** `many-body-localization transition` — chuyển pha; `retain local memory` — giữ memory cục bộ.
**Examples:** `Many-body localization preserved a local spin pattern long after the quench.` → Localization nhiều hạt giữ pattern spin cục bộ lâu sau quench.
**Liên kết tiếng Hàn:** `다체 국소화`.

## 10. thermalization /ˌθɜːrmələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** evolution toward a state whose local observables are described by thermal equilibrium statistics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tiến hóa tới trạng thái mà observable cục bộ được mô tả bằng thống kê cân bằng nhiệt.
**Grammar & collocations:** `thermalization timescale` — thang thời gian; `approach a thermal ensemble` — tiến tới ensemble nhiệt.
**Examples:** `The experiment measured thermalization across the chain after the interaction was quenched.` → Thí nghiệm đo thermalization qua chuỗi sau khi interaction bị quench.
**Liên kết tiếng Hàn:** `열화`.

## 11. entanglement entropy /ɪnˈtæŋɡəlmənt ˈentrəpi/
**Part of speech:** noun
**Core meaning (English):** a measure of how strongly a subsystem is entangled with the rest of a quantum state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thước đo mức subsystem vướng víu với phần còn lại của trạng thái lượng tử.
**Grammar & collocations:** `entanglement-entropy growth` — tăng trưởng; `partition a many-body state` — chia trạng thái nhiều hạt.
**Examples:** `Entanglement entropy grew rapidly before the dynamics became locally thermal.` → Entropy vướng víu tăng nhanh trước khi dynamics thermal cục bộ.
**Liên kết tiếng Hàn:** `얽힘 엔트로피`.

## 12. correlation function /ˌkɔːrəˈleɪʃən ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function that quantifies how measurement outcomes at different positions, times, or operators are related.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm định lượng mức outcome đo ở vị trí, thời điểm hoặc operator khác liên hệ với nhau.
**Grammar & collocations:** `correlation-function decay` — suy giảm; `extract a two-point correlation` — trích tương quan hai điểm.
**Examples:** `The correlation function revealed a light-cone boundary in the spin chain.` → Hàm tương quan cho thấy biên light-cone trong chuỗi spin.
**Liên kết tiếng Hàn:** `상관 함수`.

## 13. quantum walk /ˈkwɑːntəm wɔːk/
**Part of speech:** noun
**Core meaning (English):** coherent evolution in which a quantum state spreads through connected positions or graph nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tiến hóa coherent trong đó trạng thái lượng tử lan qua vị trí hoặc node graph liên kết.
**Grammar & collocations:** `quantum-walk dynamics` — dynamics; `spread over a graph` — lan trên graph.
**Examples:** `The quantum walk moved probability across the programmable atom lattice.` → Quantum walk đưa xác suất qua lattice atom lập trình được.
**Liên kết tiếng Hàn:** `양자 보행`.

## 14. quantum quench /ˈkwɑːntəm kwentʃ/
**Part of speech:** noun
**Core meaning (English):** a rapid change in a Hamiltonian or control parameter that drives a system out of equilibrium.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi nhanh Hamiltonian hoặc tham số điều khiển đẩy hệ ra khỏi cân bằng.
**Grammar & collocations:** `quantum-quench protocol` — protocol; `suddenly change an interaction` — đổi tương tác đột ngột.
**Examples:** `The quantum quench started the nonequilibrium evolution from a simple product state.` → Quench lượng tử bắt đầu tiến hóa ngoài cân bằng từ product state đơn giản.
**Liên kết tiếng Hàn:** `양자 급랭`.

## 15. quench dynamics /kwentʃ daɪˈnæmɪks/
**Part of speech:** noun
**Core meaning (English):** the time evolution that follows a sudden change to a quantum system's governing parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tiến hóa theo thời gian sau thay đổi đột ngột của tham số chi phối hệ lượng tử.
**Grammar & collocations:** `quench-dynamics trace` — trace; `follow nonequilibrium evolution` — theo dõi tiến hóa ngoài cân bằng.
**Examples:** `Quench dynamics exposed how correlations propagated through the array.` → Dynamics quench cho thấy tương quan truyền qua mảng thế nào.
**Liên kết tiếng Hàn:** `급랭 동역학`.

## 16. spin chain /spɪn tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** an ordered one-dimensional sequence of interacting effective spins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi một chiều có thứ tự gồm các spin hiệu dụng tương tác.
**Grammar & collocations:** `spin-chain excitation` — excitation; `propagate along a chain` — truyền dọc chuỗi.
**Examples:** `The spin chain carried a localized excitation from one end to the other.` → Chuỗi spin mang excitation định xứ từ đầu này sang đầu kia.
**Liên kết tiếng Hàn:** `스핀 사슬`.

## 17. lattice Hamiltonian /ˈlætɪs hæmɪlˈtoʊniən/
**Part of speech:** noun
**Core meaning (English):** the operator specifying the energy terms and couplings of particles occupying a lattice.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operator quy định các term năng lượng và coupling của particle trong lattice.
**Grammar & collocations:** `lattice-Hamiltonian term` — term; `program a hopping amplitude` — lập trình amplitude hopping.
**Examples:** `The lattice Hamiltonian included a tunable nearest-neighbor interaction.` → Hamiltonian lattice gồm tương tác láng giềng chỉnh được.
**Liên kết tiếng Hàn:** `격자 해밀토니안`.

## 18. interaction graph /ˌɪntərˈækʃən ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph whose nodes represent particles and whose edges represent allowed or measured interactions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph có node là particle và edge là tương tác được phép hoặc đo được.
**Grammar & collocations:** `interaction-graph topology` — topology; `rewire a coupling edge` — nối lại edge coupling.
**Examples:** `The interaction graph was reconfigured by moving one atom to a new site.` → Graph tương tác được cấu hình lại bằng cách chuyển một atom sang site mới.
**Liên kết tiếng Hàn:** `상호작용 그래프`.

## 19. topological order /ˌtɑːpəˈlɑːdʒɪkəl ˈɔːrdər/
**Part of speech:** noun
**Core meaning (English):** a quantum phase characterized by global patterns of entanglement that are not described by ordinary local order parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pha lượng tử có pattern vướng víu toàn cục không mô tả bằng order parameter cục bộ thường.
**Grammar & collocations:** `topological-order parameter` — tham số; `encode a nonlocal excitation` — mã hóa excitation phi cục bộ.
**Examples:** `Topological order supported excitations that were insensitive to local disorder.` → Trật tự topology hỗ trợ excitation không nhạy với disorder cục bộ.
**Liên kết tiếng Hàn:** `위상학적 질서`.

## 20. quantum phase transition /ˈkwɑːntəm feɪz trænsˈɪʃən/
**Part of speech:** noun
**Core meaning (English):** a zero-temperature change between quantum phases driven by a control parameter.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi ở zero-temperature giữa các pha lượng tử do tham số điều khiển dẫn dắt.
**Grammar & collocations:** `quantum-phase-transition point` — điểm; `tune across a critical regime` — chỉnh qua miền tới hạn.
**Examples:** `The quantum phase transition appeared when the interaction exceeded the tunneling scale.` → Chuyển pha lượng tử xuất hiện khi tương tác vượt thang tunneling.
**Liên kết tiếng Hàn:** `양자 상전이`.

## Review in context

A **composite pulse**, **adiabatic gate**, **geometric phase gate**, or **holonomic gate** can implement a programmable **spin model** with an **Ising interaction**, an **XY interaction**, or **Floquet engineering**. The same array can study **many-body localization**, **thermalization**, **entanglement entropy**, and a **correlation function** after a **quantum walk**, **quantum quench**, or measured **quench dynamics**. A **spin chain** realizes a **lattice Hamiltonian** and **interaction graph**, allowing experiments on **topological order** and a **quantum phase transition**.

**Bản dịch tiếng Việt:** **Composite pulse**, **adiabatic gate**, **geometric phase gate** hoặc **holonomic gate** có thể thực hiện **spin model** lập trình được với **Ising interaction**, **XY interaction** hoặc **Floquet engineering**. Cùng mảng đó có thể nghiên cứu **many-body localization**, **thermalization**, **entanglement entropy** và **correlation function** sau **quantum walk**, **quantum quench** hoặc **quench dynamics** đo được. **Spin chain** hiện thực **lattice Hamiltonian** và **interaction graph**, cho phép thí nghiệm về **topological order** và **quantum phase transition**.
