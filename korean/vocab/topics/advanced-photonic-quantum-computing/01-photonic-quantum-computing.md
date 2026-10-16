<!-- source_policy: original explanations, examples, and passage; photonic quantum computing terminology cross-checked conceptually, not copied -->

# 집적 광학 회로와 상온 광양자 연산 아키텍처

빛의 양자적 성질을 연산 자원으로 활용하는 광양자 컴퓨팅은 극저온 환경에 얽매이지 않고 상온에서 대규모 큐비트 시스템을 구현할 수 있는 유력한 차세대 패러다임으로 주목받고 있다. 반도체 제조 공정과 결합된 집적 광학 기술은 빛의 입자를 나노미터급 도파로 소자 위에서 정밀하게 유도하고 간섭시켜 복잡한 양자 알고리즘을 소형 칩 위에 구현하는 것을 가능케 했다. 특히 단일 광자 상태를 바탕으로 한 선형 광학 게이트와 측정 기반 클러스터 상태 직조 기술은 기존 고전 컴퓨터의 한계를 넘어서는 양자우위 실증의 핵심 토대로 자리 잡고 있다. 본 학습 자료에서는 광양자 컴퓨팅 하드웨어의 미시적 광학 소자 제어부터 거시적 아키텍처 및 연산 이론을 아우르는 15개의 핵심 전문 어휘를 깊이 있게 탐구한다.

<!-- lexical_basis: advanced_native; register: quantum hardware architecture and computing paradigm; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 광양자컴퓨팅

**품사:** 명사

**핵심 의미:** 빛의 기본 양자 입자인 광자(photon)를 정보의 기본 단위인 큐비트로 삼아, 광학적 간섭, 위상 변조, 얽힘 및 측정을 통해 계산을 수행하는 차세대 양자 컴퓨팅 방식이다.

**베트남어 뜻:** tính toán lượng tử quang học / điện toán lượng tử photon (photonic quantum computing); kiến trúc điện toán lượng tử sử dụng các hạt photon (lượng tử ánh sáng) làm qubit, thực hiện các cổng logic lượng tử và xử lý thông tin thông qua giao thoa, dịch pha, vướng víu và đo đạc quang học.

**뉘앙스와 사용법:** So với tính toán lượng tử siêu dẫn (`초전도 양자컴퓨팅` — superconducting quantum computing) hay bẫy ion (`이온트랩 양자컴퓨팅` — ion-trap quantum computing) vốn đòi hỏi hệ thống làm lạnh cực sâu pha loãng (`극저온 희석 냉동기` — dilution refrigerator) xuống vài millikelvin, `광양자컴퓨팅` nổi bật với tiềm năng vận hành ở nhiệt độ phòng (`상온 작동 가능성` — room-temperature operability) đối với mạch xử lý ánh sáng. Photon di chuyển với vận tốc ánh sáng và hầu như không tương tác với môi trường nhiệt xung quanh, giúp bảo tồn trạng thái kết hợp rất tốt. Tuy nhiên, thách thức lớn nhất là photon không tự tương tác trực tiếp với nhau, do đó cần các phương pháp như tính toán lượng tử quang tuyến tính (`선형광학양자연산`) hoặc tính toán lượng tử dựa trên đo đạc (`측정기반양자컴퓨팅`) để tạo ra các cổng logic hai qubit.

**재사용 가능한 콜로케이션·청크:** `광양자컴퓨팅 아키텍처` — kiến trúc tính toán lượng tử quang học, `광양자컴퓨팅 상용화` — thương mại hóa tính toán lượng tử quang học, `상온 광양자컴퓨팅 기술` — công nghệ tính toán lượng tử quang học ở nhiệt độ phòng, `광양자컴퓨팅 칩셋` — chipset tính toán lượng tử quang học.

**자주 쓰는 문형과 성분:** `광양자컴퓨팅 기술을 통해 극저온 냉각 설비 없이 상온에서 대규모 연산을 수행하다` (thực hiện các phép toán quy mô lớn ở nhiệt độ phòng mà không cần thiết bị làm lạnh cực sâu thông qua công nghệ tính toán lượng tử quang học), `광양자컴퓨팅의 확장성을 입증하기 위해 광집적회로 기술을 결합하다` (kết hợp công nghệ mạch tích hợp quang học để chứng minh khả năng mở rộng của tính toán lượng tử quang học).

**사회적 관계·주제별 register:** Báo cáo công nghệ lượng tử quốc gia của chính phủ, hội thảo kiến trúc phần cứng máy tính lượng tử tương lai, các bài xã luận và phân tích cạnh tranh công nghệ bán dẫn - lượng tử.

**예문:** 광양자컴퓨팅은 빛의 입자를 정보 처리 단위로 사용하여 극저온 냉동 설비의 제약에서 벗어나 상온에서도 대규모 큐비트 확장이 가능하다는 독보적 장점을 지닌다.

**Dịch:** Tính toán lượng tử quang học sở hữu ưu thế vượt trội là sử dụng các hạt ánh sáng làm đơn vị xử lý thông tin, thoát khỏi sự ràng buộc của hệ thống làm lạnh cực sâu và có thể mở rộng số lượng qubit lớn ngay ở nhiệt độ phòng.

**어휘 연결:** `광양자컴퓨팅` (tính toán lượng tử quang học) dùng hạt photon làm qubit quang học, phân biệt với `초전도 양자컴퓨팅` (tính toán lượng tử siêu dẫn) dùng mạch Josephson siêu dẫn ở độ lạnh millikelvin, và `고전 광학 컴퓨팅` (tính toán quang học cổ điển) xử lý chùm sáng laser cường độ lớn truyền thống.

**영어 참고:** *photonic quantum computing* — điện toán lượng tử photon / quang học; phương pháp tính toán lượng tử khai thác các trạng thái lượng tử của ánh sáng (photon) để mã hóa và xử lý dữ liệu.

---

<!-- lexical_basis: advanced_native; register: quantum state encoding and photonic representation; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 광자큐비트

**품사:** 명사

**핵심 의미:** 단일 광자의 편광(polarization), 전파 경로(path), 시간 간격(time-bin), 궤도 각운동량(orbital angular momentum) 등의 물리적 자유도를 중첩 상태로 부호화하여 0과 1의 양자 정보를 저장하는 기본 단위다.

**베트남어 뜻:** qubit photon / qubit quang học (photonic qubit); đơn vị thông tin lượng tử cơ bản được mã hóa trên các bậc tự do vật lý của một hạt photon đơn lẻ, chẳng hạn như hướng phân cực, đường đi quang học hoặc khoảng thời gian di chuyển.

**뉘앙스와 사용법:** `광자큐비트` có tốc độ lan truyền (`전파 속도` — propagation speed) bằng vận tốc ánh sáng và thời gian sống (`수명` — lifetime) trong môi trường truyền dẫn rất bền vững do photon không có điện tích hay khối lượng nghỉ, hầu như trơ với nhiễu điện từ (`전자기적 잡음` — electromagnetic noise). Phương thức mã hóa phổ biến nhất là mã hóa phân cực (`편광 부호화` — polarization encoding: phân cực ngang $|H\rangle$ là $|0\rangle$, phân cực dọc $|V\rangle$ là $|1\rangle$), hoặc mã hóa đường dẫn (`경로 부호화` — path encoding) bằng cách đưa photon vào hai nhánh của ống dẫn sóng. Khác với qubit vật chất tĩnh trong chất rắn, `광자큐비트` là một "flying qubit" (qubit chuyển động/bay), lý tưởng cho cả việc kết nối mạng lượng tử phân tán lẫn tính toán tốc độ cao.

**재사용 가능한 콜로케이션·청크:** `광자큐비트 생성` — tạo qubit photon, `광자큐비트 얽힘 제어` — điều khiển vướng víu qubit photon, `다중 광자큐비트 시스템` — hệ thống đa qubit photon, `광자큐비트 충실도` — độ trung thực của qubit photon.

**자주 쓰는 문형과 성분:** `광자큐비트의 편광 상태를 정밀 제어하여 양자 중첩을 구현하다` (điều khiển chính xác trạng thái phân cực của qubit photon để hiện thực hóa chồng chập lượng tử), `광자큐비트 간의 간섭 현상을 유도하여 논리 게이트를 동작시키다` (kích hoạt hiện tượng giao thoa giữa các qubit photon để vận hành cổng logic).

**사회적 관계·주제별 register:** Báo cáo kỹ thuật vật lý lượng tử, tài liệu phân tích kiến trúc phần cứng lượng tử quang học, các bài giảng sau đại học về quang tử học lượng tử.

**예문:** 연구팀은 단일 광자의 편광과 경로 자유도를 결합하여 외부 환경 잡음에 영향을 받지 않는 고충실도 광자큐비트를 안정적으로 구현했다.

**Dịch:** Nhóm nghiên cứu đã kết hợp bậc tự do phân cực và đường đi của một photon đơn lẻ để hiện thực hóa ổn định qubit photon độ trung thực cao, không bị ảnh hưởng bởi tạp nhiễu môi trường bên ngoài.

**어휘 연결:** `광자큐비트` (qubit photon) là qubit dạng hạt ánh sáng chuyển động tự do ("flying qubit"), đối lập với `물질 큐비트` (matter qubit) như ion bẫy hay spin điện tử vốn được neo cố định trong bẫy hoặc mạng tinh thể rắn.

**영어 참고:** *photonic qubit* — qubit photon; hạt lượng tử ánh sáng mang thông tin lượng tử được mã hóa thông qua các trạng thái phân cực, không gian hoặc thời gian.

---

<!-- lexical_basis: advanced_native; register: semiconductor photonics fabrication and integrated optical platform; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 집적광학회로

**품사:** 명사

**핵심 의미:** 실리콘(Si), 질화규소(SiN), 인화인듐(InP) 등의 반도체 기판 위에 광도파로, 빔 분할기, 위상 변조기, 광검출기 등의 다양한 광학 소자를 초소형으로 평면 집적화하여 빛 신호를 제어하는 회로다.

**베트남어 뜻:** mạch quang tích hợp (PIC - Photonic Integrated Circuit / integrated photonic circuit); mạch vi quang học tích hợp hàng loạt linh kiện như ống dẫn sóng, bộ tách chùm, bộ điều chế pha và bộ dò quang trên cùng một chất nền bán dẫn siêu nhỏ để định tuyến và thao tác tín hiệu ánh sáng.

**뉘앙스와 사용법:** Trong các thí nghiệm quang học lượng tử ban đầu, các nhà khoa học phải bố trí hàng trăm tấm gương, lăng kính và bộ chia chùm trên các bàn quang học chống rung khổng lồ (`광학 테이블` — optical table). Việc này dễ bị lệch trục chỉ sau một rung chấn nhỏ. `집적광학회로` (PIC) là bước nhảy vọt đưa toàn bộ hệ thống quang học cồng kềnh đó vào một con chip bán dẫn có kích thước vài milimét. Bằng cách sử dụng quy trình sản xuất quang khắc CMOS (`반도체 공정` — semiconductor lithography process), `집적광학회로` cho phép chế tạo hàng nghìn linh kiện quang học với độ chuẩn xác nano, loại bỏ hoàn toàn sự mất ổn định cơ học và cho phép nhân rộng số lượng qubit quang học lên hàng nghìn, hàng triệu kênh.

**재사용 가능한 콜로케이션·청크:** `실리콘 집적광학회로` — mạch quang tích hợp silicon, `집적광학회로 기반 양자 칩` — chip lượng tử dựa trên mạch quang tích hợp, `집적광학회로 공정 수율` — hiệu suất quy trình mạch quang tích hợp, `초저손실 집적광학회로` — mạch quang tích hợp suy hao siêu thấp.

**자주 쓰는 문형과 성분:** `광학 테이블 위의 거대한 장비를 손톱만 한 집적광학회로 칩 하나로 소형화하다` (thu nhỏ thiết bị khổng lồ trên bàn quang học thành một chip mạch quang tích hợp duy nhất chỉ bằng móng tay), `집적광학회로 내부에 수백 개의 가변 간섭계를 정밀 배열하다` (sắp đặt chuẩn xác hàng trăm bộ giao thoa khả biến bên trong mạch quang tích hợp).

**사회적 관계·주제별 register:** Báo cáo công nghiệp bán dẫn quang học, quy trình thiết kế vi mạch quang tích hợp, hội nghị công nghệ nano bán dẫn lượng tử.

**예문:** 거대한 광학 테이블 위에 설치되던 복잡한 거울과 렌즈 배열을 단 하나의 집적광학회로 칩으로 집약하여 진동에 의한 광학적 정렬 오차를 원천적으로 제거했다.

**Dịch:** Bằng cách gom cụm mảng gương và thấu kính phức tạp vốn lắp đặt trên bàn quang học khổng lồ vào một chip mạch quang tích hợp duy nhất, sai số căn chỉnh quang học do rung chấn đã bị loại bỏ triệt để từ gốc.

**어휘 연결:** `집적광학회로` (mạch quang tích hợp) dẫn truyền và xử lý tín hiệu bằng photon qua các rãnh dẫn sóng quang học, khác với `집적전자회로` (IC - mạch tích hợp điện tử) xử lý dòng chuyển động của electron qua dây dẫn kim loại.

**영어 참고:** *photonic integrated circuit (PIC)* — mạch quang tích hợp; vi mạch bán dẫn tích hợp nhiều chức năng quang học nhằm truyền dẫn và xử lý chùm sáng hoặc photon trên quy mô hiển vi.

---

<!-- lexical_basis: advanced_native; register: quantum optics emission and deterministic single photon generation; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 단일광자광원

**품사:** 명사

**핵심 의미:** 일정한 시간 간격마다 통계적 요동이나 다중 광자 방출 없이 정확히 단 한 개의 광자만을 확정적(deterministic) 또는 고확률로 방출하는 양자 광학 발광 장치다.

**베트남어 뜻:** nguồn sáng đơn photon (single-photon light source / single-photon source); thiết bị phát xạ quang học lượng tử có khả năng phát ra chính xác duy nhất một photon tại một thời điểm xác định mà không bị lẫn hai hay nhiều photon đồng thời, đảm bảo độ tinh khiết lượng tử tuyệt đối.

**뉘앙스와 사용법:** Trong laser thông thường, số photon phát ra tuân theo phân bố Poisson (`포아송 분포` — Poisson distribution), nghĩa là luôn có xác suất phát ra hai hoặc nhiều photon cùng lúc (`다중 광자 방출` — multi-photon emission). Điều này gây thảm họa cho tính toán lượng tử và mật mã lượng tử vì làm sai lệch cổng logic hoặc mở ra kẽ hở nghe lén. `단일광자광원` lý tưởng là nguồn phát xạ theo yêu cầu (`온디맨드 단일광자광원` — on-demand single-photon source), ứng dụng các cấu trúc hạt lượng tử nano như chấm lượng tử (`양자점` — quantum dot), khuyết tật kim cương (NV center), hoặc phân tử đơn lẻ kết hợp với hốc cộng hưởng vi mô (`미소공진기` — microcavity). Một chỉ số then chốt để đo lường tính chất đơn photon là hàm tương quan bậc hai $g^{(2)}(0) \approx 0$, biểu thị hiện tượng "chống chụm quang tử" (`광자 반군집화` — photon antibunching).

**재사용 가능한 콜로케이션·청크:** `결정론적 단일광자광원` — nguồn sáng đơn photon tiền định, `고순도 단일광자광원` — nguồn sáng đơn photon độ thuần khiết cao, `양자점 기반 단일광자광원` — nguồn sáng đơn photon dựa trên chấm lượng tử, `단일광자광원의 불가분성` — tính không thể phân tách của nguồn sáng đơn photon.

**자주 쓰는 문형과 성분:** `반도체 양자점을 활용해 펄스 신호마다 정확히 단 하나의 광자를 방출하는 단일광자광원을 제작하다` (chế tạo nguồn sáng đơn photon phát ra chính xác một photon đơn lẻ trong mỗi tín hiệu xung bằng cách sử dụng chấm lượng tử bán dẫn), `단일광자광원의 광자 반군집화 특성을 한베리-브라운-트위스 간섭계로 검증하다` (kiểm chứng đặc tính chống chụm photon của nguồn sáng đơn photon bằng giao thoa kế Hanbury Brown-Twiss).

**사회적 관계·주제별 register:** Luận án tiến sĩ quang học lượng tử, bài báo Nature/Science về vật lý chất rắn lượng tử, tài liệu đặc tính kỹ thuật phát xạ photon.

**예문:** 완벽한 양자 논리 게이트 구현을 위해서는 다중 광자 방출 확률이 극도로 억제된 고순도 단일광자광원의 확보가 선행되어야 한다.

**Dịch:** Để hiện thực hóa các cổng logic lượng tử hoàn hảo, việc bảo đảm nguồn sáng đơn photon độ thuần khiết cao với xác suất phát đa photon bị kiềm chế cực độ phải được thực hiện trước tiên.

**어휘 연결:** `단일광자광원` (nguồn phát đơn photon) phát ra từng hạt photon riêng rẽ ($g^{(2)}(0) \to 0$), khác biệt với `결맞음 광원` (nguồn sáng kết hợp / laser thông thường) tuân theo thống kê photon Poisson với nhiều photon kết chùm ngẫu nhiên.

**영어 참고:** *single-photon light source* — nguồn sáng đơn photon; thiết bị quang học lượng tử phát xạ một hạt photon đơn lẻ theo yêu cầu với xác suất phát đa photon gần như bằng không.

---

<!-- lexical_basis: advanced_native; register: quantum computing model and KLM protocol methodology; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 선형광학양자연산

**품사:** 명사

**핵심 의미:** 비선형 매질 없이 오직 빔 분할기(beam splitter), 위상 변조기(phase shifter), 거울 등 선형 광학 소자와 단일 광자 검출 및 측정을 결합하여 만능 양자 계산(universal quantum computation)을 구현하는 연산 기법이다.

**베트남어 뜻:** tính toán lượng tử quang tuyến tính (LOQC - Linear Optical Quantum Computing); phương pháp tính toán lượng tử vạn năng chỉ sử dụng các linh kiện quang học tuyến tính cổ điển (như bộ tách chùm, bộ dịch pha, gương) kết hợp với các phép đo đạc và phát hiện đơn photon, khắc phục sự vắng mặt của tương tác phi tuyến trực tiếp giữa các hạt photon.

**뉘앙스와 사용법:** Photon không mang điện tích nên trong chân không hay môi trường tuyến tính, hai chùm photon chỉ đi xuyên qua nhau mà không tương tác trực tiếp (`광자 간 상호작용 부재` — absence of direct photon-photon interaction). Năm 2001, các nhà vật lý Knill, Laflamme và Milburn đã chứng minh giao thức KLM mang tính đột phá: có thể tạo ra các cổng logic hai qubit (như cổng CNOT) bằng cách sử dụng giao thoa lượng tử trên các linh kiện quang tuyến tính kết hợp với phép đo chiếu (`투영 측정` — projective measurement) và phản hồi chuyển tiếp phía trước (`전방향 피드포워드` — feedforward). Kỹ thuật này được gọi là `선형광학양자연산`. Mặc dù các cổng KLM ban đầu mang tính xác suất (`확률적 게이트` — probabilistic gate), sự kết hợp với trạng thái cụm vướng víu đã mở đường cho tính toán lượng tử quang học có khả năng chịu lỗi (`오류 억제 양자연산`).

**재사용 가능한 콜로케이션·청크:** `선형광학양자연산 프로토콜` — giao thức tính toán lượng tử quang tuyến tính, `선형광학양자연산 회로 설계` — thiết kế mạch tính toán lượng tử quang tuyến tính, `확률적 선형광학양자연산` — tính toán lượng tử quang tuyến tính xác suất, `만능 선형광학양자연산` — tính toán lượng tử quang tuyến tính vạn năng.

**자주 쓰는 문형과 성분:** `선형광학양자연산 모델을 도입하여 복잡한 비선형 매질 없이도 2큐비트 양자 게이트를 구성하다` (áp dụng mô hình tính toán lượng tử quang tuyến tính để cấu thành cổng lượng tử 2-qubit mà không cần môi trường phi tuyến phức tạp), `선형광학양자연산의 확률적 성공률을 높이기 위해 피드포워드 제어를 적용하다` (áp dụng điều khiển chuyển tiếp feedforward để nâng cao tỷ lệ thành công xác suất của tính toán lượng tử quang tuyến tính).

**사회적 관계·주제별 register:** Giáo trình điện toán lượng tử nâng cao, các bài báo chuyên sâu về giao thức KLM và thuật toán lượng tử quang tử.

**예문:** 선형광학양자연산은 광자 간의 직접적인 상호작용이 없더라도 빔 분할기와 단일 광자 측정만으로 만능 양자 게이트를 구현할 수 있음을 입증했다.

**Dịch:** Tính toán lượng tử quang tuyến tính đã chứng minh rằng ngay cả khi không có tương tác trực tiếp giữa các photon, người ta vẫn có thể hiện thực hóa các cổng lượng tử vạn năng chỉ bằng các bộ tách chùm và phép đo đơn photon.

**어휘 연결:** `선형광학양자연산` (LOQC) chỉ dùng các linh kiện quang tuyến tính thụ động và phép đo để thực thi cổng logic lượng tử, phân biệt với `비선형 양자광학연산` vốn đòi hỏi tương tác quang học phi tuyến mạnh mẽ giữa các photon trong các môi trường vật chất đặc biệt.

**영어 참고:** *linear optical quantum computing (LOQC)* — tính toán lượng tử quang tuyến tính; mô hình tính toán lượng tử sử dụng các linh kiện quang học tuyến tính, nguồn photon đơn và phép dò đo lường để thực hiện các cổng logic lượng tử.

---

<!-- lexical_basis: advanced_native; register: quantum metrology and phase sensitivity detection; source_lane: native_spoken; context: advanced-photonic-quantum-computing/native_spoken -->
### 광간섭계측정

**품사:** 명사

**핵심 의미:** 둘 이상의 광 경로로 나뉘어 진행한 광자 파동이 다시 결합할 때 나타나는 보강 및 상쇄 간섭 패턴을 정밀 분석하여, 나노미터 이하의 위상 변화, 광학 지연 또는 양자 상태의 중첩성을 측정하는 기술이다.

**베트남어 뜻:** đo đạc giao thoa kế quang học (optical interferometer measurement); phương pháp đo lường chính xác cao dựa trên hiện tượng giao thoa tăng cường và triệt tiêu khi các sóng photon di chuyển qua nhiều đường dẫn quang học khác nhau rồi tái hợp, giúp xác định độ lệch pha vi mô, độ trễ thời gian hoặc sự chồng chập lượng tử.

**뉘앙스와 사용법:** `광간섭계측정` là "trái tim" của mọi phép toán và hiệu chuẩn trong máy tính lượng tử photon. Trong phòng lab, các kỹ sư thường sử dụng giao thoa kế Mach-Zehnder (`마하젠더 간섭계` — Mach-Zehnder interferometer - MZI) hoặc giao thoa kế Hong-Ou-Mandel (`홍-오우-만델 간섭계` — HOM interferometer). Khi hai photon giống hệt nhau (`동일 광자` — indistinguishable photons) cùng đi vào hai cổng của một bộ chia chùm 50:50, hiện tượng giao thoa lượng tử HOM sẽ khiến hai photon luôn đi ra cùng một cổng (`광자 번칭` — photon bunching), tạo ra "vết lõm HOM" (`HOM 딥` — HOM dip). Kỹ thuật viên dựa vào độ sâu của vết lõm trong `광간섭계측정` để kiểm tra độ thuần khiết và tính đồng nhất tuyệt đối giữa các photon.

**재사용 가능한 콜로케이션·청크:** `정밀 광간섭계측정` — đo đạc giao thoa kế quang học chính xác, `광간섭계측정 기반 위상 제어` — điều khiển pha dựa trên đo đạc giao thoa kế quang học, `다채널 광간섭계측정 장치` — thiết bị đo đạc giao thoa kế quang học đa kênh, `광간섭계측정 오차 보정` — hiệu chỉnh sai số đo đạc giao thoa kế quang học.

**자주 쓰는 문형과 성분:** `광간섭계측정을 통해 칩 내부 도파로의 미세한 굴절률 변화를 실시간으로 모니터링하다` (giám sát thời gian thực sự thay đổi chiết suất vi mô của ống dẫn sóng bên trong chip thông qua đo đạc giao thoa kế quang học), `초정밀 광간섭계측정으로 양자 얽힘 광자의 위상 가시도를 측정하다` (đo độ hiển thị pha của các photon vướng víu lượng tử bằng phép đo đạc giao thoa kế quang học siêu chính xác).

**사회적 관계·주제별 register:** Nhật ký thí nghiệm quang học lượng tử, trao đổi kỹ thuật thực địa giữa các kỹ sư căn chỉnh quang tử, thảo luận chuyên môn trong phòng lab sạch.

**예문:** 칩 내부 광도파로의 위상 변조 상태를 실시간 광간섭계측정으로 추적하여 나노미터 단위의 오차까지 정밀하게 보정할 수 있었다.

**Dịch:** Nhờ theo dõi trạng thái điều chế pha của ống dẫn sóng bên trong chip bằng phép đo đạc giao thoa kế quang học thời gian thực, các kỹ sư đã có thể hiệu chỉnh chính xác đến từng sai số kích thước nanomet.

**어휘 연결:** `광간섭계측정` (đo đạc giao thoa kế quang học) sử dụng sóng ánh sáng giao thoa để trích xuất thông tin pha với độ nhạy lượng tử cực cao, đối lập với `광도측정` (quang trắc học thông thường) chỉ đo cường độ hay năng lượng ánh sáng vĩ mô mà bỏ qua thông tin pha.

**영어 참고:** *optical interferometer measurement* — phép đo giao thoa kế quang học; kỹ thuật đo lường dựa trên giao thoa sóng ánh sáng để xác định chính xác các dịch chuyển pha, độ dài đường quang và độ kết hợp lượng tử.

---

<!-- lexical_basis: advanced_native; register: quantum benchmark milestone and computational superiority validation; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 양자우위실증

**품사:** 명사

**핵심 의미:** 특정 계산 문제에 대해 양자 컴퓨터가 현존하는 최고 성능의 고전 슈퍼컴퓨터보다 현실적인 시간 내에 월등히 빠르게 문제를 해결할 수 있음을 실험적으로 증명해 보이는 일이다.

**베트남어 뜻:** chứng minh ưu thế lượng tử / thực chứng ưu thế vượt trội lượng tử (quantum advantage demonstration); cột mốc thực nghiệm chứng minh rằng hệ thống máy tính lượng tử có khả năng giải quyết một bài toán cụ thể nhanh hơn vượt bậc so với các siêu máy tính cổ điển mạnh nhất hiện nay trong khung thời gian thực tế khả thi.

**뉘앙스와 사용법:** Thuật ngữ `양자우위실증` đánh dấu bước ngoặt chuyển dịch từ lý thuyết thuần túy sang hiện thực vật lý. Năm 2020, hệ thống máy tính quang lượng tử Cửu Chương (Jiuzhang) đã thực hiện `양자우위실증` thông qua bài toán lấy mẫu boson Gauss (`가우시안 보손샘플링`), xử lý trong vài phút một tác vụ mà siêu máy tính mạnh nhất thế giới thời điểm đó phải mất hàng trăm triệu năm. Trong các diễn ngôn chính sách khoa học và truyền thông Hàn Quốc, `양자우위실증` là tiêu chí quan trọng để đánh giá mức độ trưởng thành công nghệ (`기술 성숙도` — TRL) của các nền tảng phần cứng lượng tử và thu hút đầu tư quốc gia.

**재사용 가능한 콜로케이션·청크:** `광양자 기반 양자우위실증` — chứng minh ưu thế lượng tử dựa trên photon, `양자우위실증 성공` — chứng minh ưu thế lượng tử thành công, `양자우위실증 벤치마크` — chuẩn đánh giá chứng minh ưu thế lượng tử, `실용적 양자우위실증 단계` — giai đoạn chứng minh ưu thế lượng tử mang tính thực dụng.

**자주 쓰는 문형과 성분:** `수학적 난제 해결 속도에서 슈퍼컴퓨터를 압도함으로써 양자우위실증을 완벽하게 달성하다` (đạt được trọn vẹn việc chứng minh ưu thế lượng tử bằng cách áp đảo siêu máy tính về tốc độ giải quyết bài toán toán học nan giải), `양자우위실증을 바탕으로 양자 알고리즘의 상용화 가능성을 검증하다` (kiểm chứng khả năng thương mại hóa thuật toán lượng tử dựa trên thực chứng ưu thế lượng tử).

**사회적 관계·주제별 register:** Thông cáo báo chí khoa học và công nghệ, tài liệu chiến lược lượng tử quốc gia của Bộ Khoa học & ICT, các bài phân tích cạnh tranh công nghệ toàn cầu.

**예문:** 국내 연구진이 독자 개발한 집적광학 칩을 바탕으로 기존 슈퍼컴퓨터의 한계를 뛰어넘는 양자우위실증을 공식 보고하며 세계적인 주목을 받았다.

**Dịch:** Đội ngũ nghiên cứu trong nước đã thu hút sự chú ý của toàn cầu khi chính thức công bố việc chứng minh ưu thế lượng tử vượt qua giới hạn của các siêu máy tính hiện nay dựa trên chip quang tích hợp tự phát triển.

**어휘 연결:** `양자우위실증` (thực chứng ưu thế lượng tử - quantum advantage) nhấn mạnh tính khả thi thực nghiệm vượt trội hơn máy tính cổ điển trong một tác vụ tính toán cụ thể, gắn liền với `양자패권` (quantum supremacy - bá quyền lượng tử, cách gọi trước đây nhưng dần được thay thế bằng quantum advantage vì sắc thái trung tính hơn).

**영어 참고:** *quantum advantage demonstration* — thực chứng ưu thế lượng tử; bằng chứng thực nghiệm cho thấy máy tính lượng tử vượt trội hoàn toàn siêu máy tính cổ điển khi giải quyết một bài toán tính toán xác định.

---

<!-- lexical_basis: advanced_native; register: quantum computational complexity and non-classical statistical physics; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 보손샘플링

**품사:** 명사

**핵심 의미:** 여러 개의 동일한 보손(광자)을 다채널 선형 광학 간섭계 회로에 동시에 통과시킨 후, 출력단에서 나타나는 광자 분포 확률을 측정하여 고전 컴퓨터로는 계산하기 불가능한 행렬식(permanent) 계산 문제를 푸는 특화된 양자 연산 작업이다.

**베트남어 뜻:** lấy mẫu Boson (boson sampling); bài toán tính toán lượng tử chuyên biệt trong đó nhiều photon đồng nhất (hạt boson) được truyền đồng thời qua mạng giao thoa quang học tuyến tính đa kênh, rồi đo lường phân bố xác suất đầu ra để giải quyết bài toán tính định thức thường (permanent) vốn bất khả thi đối với máy tính cổ điển.

**뉘앙스와 사용법:** Được đề xuất bởi Scott Aaronson và Alex Arkhipov vào năm 2011, `보손샘플링` là mô hình tính toán lượng tử không vạn năng (`비만능 양자컴퓨팅` — non-universal quantum computing) nhưng được thiết kế chuyên biệt để chứng minh `양자우위실증` trên nền tảng quang học một cách nhanh nhất. Độ phức tạp tính toán của việc dự đoán xác suất photon rơi vào các kênh ra gắn liền với việc tính "permanent" của ma trận kích thước lớn — một bài toán thuộc lớp độ phức tạp `#P-hard`, vượt quá khả năng của bất kỳ siêu máy tính cổ điển nào khi số lượng photon và số kênh dẫn sóng vượt quá vài chục. Phiên bản nâng cao như lấy mẫu boson Gauss (`가우시안 보손샘플링` — Gaussian Boson Sampling) sử dụng nguồn ánh sáng nén (`압축광` — squeezed light) giúp tăng tốc độ tạo trạng thái lượng tử lên nhiều bậc độ lớn.

**재사용 가능한 콜로케이션·청크:** `가우시안 보손샘플링` — lấy mẫu Boson Gauss, `대규모 보손샘플링 실험` — thí nghiệm lấy mẫu Boson quy mô lớn, `보손샘플링 계산 복잡도` — độ phức tạp tính toán của lấy mẫu Boson, `보손샘플링 검증 알고리즘` — thuật toán kiểm chứng lấy mẫu Boson.

**자주 쓰는 문형과 성분:** `수십 개의 단일 광자를 100채널 간섭계에 통과시키는 대규모 보손샘플링을 성공시키다` (thực hiện thành công việc lấy mẫu Boson quy mô lớn đưa hàng chục photon đơn qua giao thoa kế 100 kênh), `보손샘플링의 결과 분포를 통계적으로 분석하여 양자 간섭의 진위 여부를 판별하다` (phân tích thống kê phân bố kết quả lấy mẫu Boson để thẩm định tính chân thực của giao thoa lượng tử).

**사회적 관계·주제별 register:** Hội thảo lý thuyết khoa học máy tính, nghiên cứu vật lý toán học lượng tử, bài đánh giá giải pháp thuật toán lượng tử quang học.

**예문:** 보손샘플링은 만능 양자컴퓨터가 도달하기 전 단계에서 광양자 시스템의 압도적인 연산 능력을 가장 명확하게 입증할 수 있는 핵심 알고리즘이다.

**Dịch:** Lấy mẫu Boson là thuật toán then chốt có thể chứng minh rõ ràng nhất năng lực tính toán áp đảo của hệ thống lượng tử quang học ở giai đoạn trước khi máy tính lượng tử vạn năng hoàn thiện.

**어휘 연결:** `보손샘플링` (lấy mẫu Boson) khai thác tính chất thống kê lượng tử của hạt boson (photon) tuân theo thống kê Bose-Einstein, đối lập với hành vi bài trừ Pauli của hạt fermion (như electron) trong các mô hình mô phỏng vật chất.

**영어 참고:** *boson sampling* — lấy mẫu Boson; bài toán lấy mẫu phân bố xác suất lượng tử của các hạt boson truyền qua mạng quang học tuyến tính nhằm chứng minh ưu thế tính toán lượng tử.

---

<!-- lexical_basis: advanced_native; register: micro-nano optics engineering and integrated photonic routing; source_lane: native_spoken; context: advanced-photonic-quantum-computing/native_spoken -->
### 광도파로소자

**품사:** 명사

**핵심 의미:** 기판과 코어 매질 간의 굴절률 차이에 의한 전반사(total internal reflection) 원리를 이용해, 빛 신호를 칩 표면의 나노미터 또는 마이크로미터 단위 미세 통로를 따라 손실 없이 유도하고 제어하는 기본 광학 소자다.

**베트남어 뜻:** linh kiện ống dẫn sóng quang / thiết bị dẫn sóng quang học (optical waveguide device); linh kiện quang học cấu trúc vi mô dẫn truyền và điều hướng các chùm photon dọc theo các rãnh dẫn trên bề mặt chip thông qua hiện tượng phản xạ toàn phần do sự chênh lệch chiết suất giữa lõi và lớp vỏ, đóng vai trò như "dây dẫn dây nối" của ánh sáng.

**뉘앙스와 사용법:** Nếu trong vi mạch điện tử, dây đồng kết nối các bóng bán dẫn (transistor) thì trong máy tính lượng tử quang học, `광도파로소자` chính là huyết mạch kết nối toàn bộ hệ thống. Các kỹ sư quang tử thường làm việc với các vật liệu tiên tiến như màng mỏng Lithium Niobate trên chất cách điện (`TFLN` — thin-film lithium niobate) hoặc Silicon Nitride ($Si_3N_4$) để tạo ra các `광도파로소자` có độ thô ráp bề mặt cực thấp (`표면 거칠기 최소화` — surface roughness minimization). Khi ánh sáng đi qua ống dẫn sóng, sự tán xạ do gồ ghề bề mặt có thể làm mất photon — điều cấm kỵ trong tính toán lượng tử. Trong các cuộc thảo luận kỹ thuật ở xưởng chế tạo (fab), việc tối ưu hóa cấu trúc mặt cắt (`단면 프로파일 최적화`) và bán kính uốn cong (`곡률 반경` — bending radius) của `광도파로소자` là đề tài được các kỹ sư trao đổi liên tục để giảm thiểu tổn thất truyền dẫn.

**재사용 가능한 콜로케이션·청크:** `저손실 광도파로소자` — linh kiện ống dẫn sóng quang suy hao thấp, `광도파로소자 집적 공정` — quy trình tích hợp linh kiện ống dẫn sóng quang, `광도파로소자의 결합 효율` — hiệu suất ghép nối của linh kiện ống dẫn sóng quang, `초소형 광도파로소자 어레이` — mảng linh kiện ống dẫn sóng quang siêu nhỏ.

**자주 쓰는 문형과 성분:** `광도파로소자의 계면 산란을 억제하여 전송 손실을 획기적으로 낮추다` (kìm hãm tán xạ mặt phân giới của linh kiện ống dẫn sóng quang để hạ thấp đột phá suy hao truyền dẫn), `나노미터 두께의 광도파로소자를 통해 단일 광자를 원하는 위치로 정확히 유도하다` (điều hướng chính xác photon đơn lẻ đến vị trí mong muốn thông qua linh kiện ống dẫn sóng quang có độ dày nanomet).

**사회적 관계·주제별 register:** Nhật ký chế tạo bán dẫn phòng sạch, thảo luận phân tích lỗi quang tử vi mô, báo cáo đo kiểm tổn hao đường truyền quang học.

**예문:** 칩 내에서 빛의 손실을 최소화하기 위해 표면 거칠기를 나노 수준으로 다듬은 초저손실 광도파로소자를 공정에 성공적으로 적용했다.

**Dịch:** Để giảm thiểu tối đa suy hao ánh sáng bên trong chip, các linh kiện ống dẫn sóng quang suy hao siêu thấp với bề mặt được mài nhẵn ở cấp độ nanomet đã được áp dụng thành công vào quy trình chế tạo.

**어휘 연결:** `광도파로소자` (linh kiện dẫn sóng quang) giam giữ và dẫn truyền ánh sáng dọc theo rãnh vi mô nhờ phản xạ toàn phần, khác với `자유공간 광학계` (hệ quang học không gian tự do) truyền chùm sáng qua không khí thông qua các thấu kính và gương rời rạc.

**영어 참고:** *optical waveguide device* — linh kiện ống dẫn sóng quang học; cấu trúc vi quang dẫn hướng chùm tia photon trên bề mặt chip phẳng với độ suy hao tối thiểu.

---

<!-- lexical_basis: advanced_native; register: optical channel multiplexing and photonic parallel processing; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 공간분할다중화

**품사:** 명사

**핵심 의미:** 하나의 광학 칩이나 광섬유 내에서 독립적인 여러 개의 공간적 경로(multi-core 또는 multi-mode)를 동시에 활용하여, 다수의 광자 큐비트를 상호 간섭 없이 병렬로 전송하고 처리하는 다중화 기술이다.

**베트남어 뜻:** ghép kênh phân chia theo không gian (SDM - Spatial Division Multiplexing); kỹ thuật truyền dẫn và xử lý đồng thời nhiều kênh tín hiệu quang học độc lập thông qua việc tận dụng nhiều lõi hoặc đường dẫn không gian riêng biệt trong cùng một con chip hoặc sợi quang học, tăng vọt mật độ xử lý song song.

**뉘앙스와 사용법:** Để máy tính lượng tử quang học mở rộng lên hàng chục nghìn qubit mà không làm kích thước con chip phình to quá mức, việc sắp xếp các kênh dẫn sóng theo phương pháp truyền thống sẽ nhanh chóng chạm tới trần diện tích. `공간분할다중화` giải quyết bài toán nút cổ chai này bằng cách sử dụng các ống dẫn sóng đa lõi (`다중 코어 도파로` — multi-core waveguide) hoặc xếp chồng 3D (`3차원 광학 적층` — 3D photonic stacking). Kỹ thuật này cho phép hàng loạt photon mang thông tin lượng tử di chuyển song song trên cùng một diện tích mặt phẳng mà không bị xuyên nhiễu chéo (`누설 혼신 억제` — crosstalk suppression). Nhờ `공간분할다중화`, dung lượng tính toán và khả năng phân phối trạng thái vướng víu tăng lên gấp bội trên cùng một kích thước đế chip silicon.

**재사용 가능한 콜로케이션·청크:** `공간분할다중화 기반 광집적회로` — mạch quang tích hợp dựa trên ghép kênh phân chia theo không gian, `공간분할다중화 전송 효율` — hiệu suất truyền dẫn ghép kênh phân chia theo không gian, `공간분할다중화 광섬유 결합` — ghép nối sợi quang ghép kênh phân chia theo không gian, `공간분할다중화 칩 아키텍처` — kiến trúc chip ghép kênh phân chia theo không gian.

**자주 쓰는 문형과 성분:** `공간분할다중화 기법을 도입하여 단일 칩 내 큐비트 처리 밀도를 10배 이상 향상시키다` (áp dụng kỹ thuật ghép kênh phân chia theo không gian để nâng cao mật độ xử lý qubit trong một chip đơn lẻ lên hơn 10 lần), `공간분할다중화 채널 간의 크로스토크를 정밀 차단하다` (ngăn chặn chuẩn xác hiện tượng xuyên nhiễu chéo giữa các kênh ghép kênh phân chia theo không gian).

**사회적 관계·주제별 register:** Báo cáo kiến trúc siêu máy tính lượng tử, tạp chí viễn thông quang học băng thông cao, hội thảo thiết kế hệ thống tính toán song song lượng tử.

**예문:** 공간분할다중화 기술을 집적광학 아키텍처에 접목함으로써 한정된 칩 면적 안에서도 수천 개의 광자 경로를 병렬로 배치할 수 있게 되었다.

**Dịch:** Bằng cách ghép nối công nghệ ghép kênh phân chia theo không gian vào kiến trúc quang tích hợp, người ta đã có thể bố trí song song hàng nghìn đường dẫn photon ngay trong một diện tích chip hạn chế.

**어휘 연결:** `공간분할다중화` (ghép kênh phân chia theo không gian) tận dụng các đường dẫn không gian riêng biệt, phân biệt với `파장분할다중화` (WDM - ghép kênh theo bước sóng) dùng nhiều màu sắc ánh sáng khác nhau trên cùng một đường truyền, và `시분할다중화` (TDM - ghép kênh theo thời gian) chia các khe thời gian nối tiếp nhau.

**영어 참고:** *spatial division multiplexing (SDM)* — ghép kênh phân chia theo không gian; phương pháp tăng dung lượng và quy mô tính toán bằng cách sử dụng nhiều kênh không gian độc lập để dẫn truyền các trạng thái photon song song.

---

<!-- lexical_basis: advanced_native; register: quantum communication circuit and state transfer protocol; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 양자순간이동회로

**품사:** 명사

**핵심 의미:** 양자 얽힘(quantum entanglement) 쌍과 벨 상태 측정(Bell state measurement), 그리고 고전적 피드포워드 신호를 결합하여, 광자의 미지의 양자 상태를 물리적 입자의 이동 없이 다른 원격 광자로 전송하는 양자 회로다.

**베트남어 뜻:** mạch dịch chuyển tức thời lượng tử (quantum teleportation circuit); cấu trúc mạch quang tử tích hợp cho phép chuyển giao nguyên vẹn trạng thái lượng tử chưa biết từ một photon sang một photon khác ở xa mà không cần dịch chuyển bản thân hạt vật lý đó, dựa trên cặp vướng víu lượng tử và phép đo trạng thái Bell.

**뉘앙스와 사용법:** `양자순간이동회로` không phải là dịch chuyển tức thời vật chất trong phim viễn tưởng, mà là dịch chuyển tức thời trạng thái lượng tử thông tin (`양자 상태 전송` — quantum state transfer). Trong máy tính lượng tử quang học, đây là mạch chức năng quan trọng bậc nhất. Do photon bay liên tục và không thể dừng lại lưu trữ trong thanh ghi như electron, việc chuyển giao trạng thái giữa các khối xử lý khác nhau hoặc giữa các chip quang học phải nhờ đến `양자순간이동회로`. Mạch này gồm bộ tạo cặp photon vướng víu, bộ giao thoa đo Bell trên chip, và một bộ điều chế pha cực nhanh được kích hoạt bởi tín hiệu điện tử cổ điển (`피드포워드 지연 보상` — feedforward delay compensation) để khôi phục trạng thái chuẩn xác ở đầu nhận.

**재사용 가능한 콜로케이션·청크:** `온칩 양자순간이동회로` — mạch dịch chuyển tức thời lượng tử trên chip (on-chip), `양자순간이동회로 충실도` — độ trung thực của mạch dịch chuyển tức thời lượng tử, `광자 양자순간이동회로 구현` — hiện thực hóa mạch dịch chuyển tức thời lượng tử photon, `결정론적 양자순간이동회로` — mạch dịch chuyển tức thời lượng tử tiền định.

**자주 쓰는 문형과 성분:** `양자순간이동회로를 통해 광자 큐비트의 상태를 다른 도파로 모듈로 무손실 전달하다` (chuyển giao không suy hao trạng thái của qubit photon sang mô-đun ống dẫn sóng khác thông qua mạch dịch chuyển tức thời lượng tử), `양자순간이동회로의 벨 상태 측정 성공률을 극대화하다` (tối đa hóa tỷ lệ thành công của phép đo trạng thái Bell trong mạch dịch chuyển tức thời lượng tử).

**사회적 관계·주제별 register:** Giáo trình giao thức mạng lượng tử, bài báo Nature Photonics về dịch chuyển trạng thái trên chip bán dẫn, hội nghị thượng đỉnh công nghệ điện toán lượng tử.

**예문:** 칩과 칩 사이의 물리적 광섬유 연결부에서 발생하는 신호 손실을 극복하기 위해 온칩 양자순간이동회로를 활용한 양자 상태 원격 전송을 성공시켰다.

**Dịch:** Nhằm khắc phục tình trạng suy hao tín hiệu xảy ra tại mối nối cáp quang vật lý giữa các chip, các nhà khoa học đã thực hiện thành công việc truyền từ xa trạng thái lượng tử bằng cách sử dụng mạch dịch chuyển tức thời lượng tử trên chip.

**어휘 연결:** `양자순간이동회로` (mạch dịch chuyển tức thời lượng tử) truyền chuyển trạng thái sóng lượng tử thuần túy thông qua cặp vướng víu và kênh cổ điển hỗ trợ, khác với `직접 전송` (direct transmission) gửi trực tiếp hạt photon vật lý qua ống dẫn cáp quang dài.

**영어 참고:** *quantum teleportation circuit* — mạch dịch chuyển tức thời lượng tử; mạch lượng tử thực hiện truyền tải trạng thái lượng tử của hạt photon tới một vị trí khác mà không làm dịch chuyển hạt photon ban đầu.

---

<!-- lexical_basis: advanced_native; register: one-way quantum computing paradigm and cluster state measurement; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 측정기반양자컴퓨팅

**품사:** 명사

**핵심 의미:** 미리 거대한 다체 양자 얽힘 상태인 클러스터 상태(cluster state)를 대규모로 직조해 둔 뒤, 개별 큐비트에 대해 순차적인 단일 큐비트 측정만을 수행하여 계산을 완성하는 일방향(one-way) 양자 연산 패러다임이다.

**베트남어 뜻:** tính toán lượng tử dựa trên đo đạc (MBQC - Measurement-Based Quantum Computing / one-way quantum computing); mô hình tính toán lượng tử một chiều trong đó người ta dệt sẵn một mạng lưới trạng thái vướng víu khổng lồ gọi là trạng thái cụm (cluster state), sau đó hoàn tất mọi phép tính logic chỉ bằng các phép đo lường đơn qubit tuần tự theo thứ tự thích ứng.

**뉘앙스와 사용법:** Trong mô hình mạch truyền thống (`회로 모델` — circuit model), các cổng logic được áp dụng tuần tự lên các qubit theo thời gian. Tuy nhiên với photon, việc giữ qubit đứng yên chờ cổng tương tác là vô cùng khó khăn. `측정기반양자컴퓨팅` (MBQC) ra đời như giải pháp hoàn hảo nhất cho quang học lượng tử. Thay vì áp dụng cổng logic lên photon chuyển động, người ta liên tục tạo ra một tấm thảm vướng víu không gian-thời gian khổng lồ (`시간-공간 클러스터 상태` — time-space cluster state). Sau đó, lập trình viên máy tính chỉ cần chọn góc đo (`측정 기저` — measurement basis) trên từng photon khi chúng bay qua đầu dò. Mỗi phép đo vừa xử lý dữ liệu vừa xóa bỏ vướng víu cũ (nên gọi là "one-way" / một chiều). Dòng thông tin lượng tử được truyền và biến đổi mượt mà xuyên qua tấm thảm vướng víu nhờ các kết quả đo và phản hồi thích ứng (`적응형 피드포워드` — adaptive feedforward).

**재사용 가능한 콜로케이션·청크:** `측정기반양자컴퓨팅 아키텍처` — kiến trúc tính toán lượng tử dựa trên đo đạc, `측정기반양자컴퓨팅용 클러스터 상태` — trạng thái cụm dùng cho tính toán lượng tử dựa trên đo đạc, `결함 허용 측정기반양자컴퓨팅` — tính toán lượng tử dựa trên đo đạc có khả năng chịu lỗi, `측정기반양자컴퓨팅의 일방향성` — tính một chiều của tính toán lượng tử dựa trên đo đạc.

**자주 쓰는 문형과 성분:** `대규모 클러스터 상태를 연속적으로 생성하여 측정기반양자컴퓨팅의 연산 깊이를 무한히 확장하다` (tạo liên tục các trạng thái cụm quy mô lớn để mở rộng vô hạn độ sâu tính toán của tính toán lượng tử dựa trên đo đạc), `측정기반양자컴퓨팅 방식을 통해 복잡한 2큐비트 물리 게이트 제어의 부담을 덜다` (giảm bớt gánh nặng điều khiển cổng vật lý 2-qubit phức tạp thông qua phương thức tính toán lượng tử dựa trên đo đạc).

**사회적 관계·주제별 register:** Báo cáo nghiên cứu cơ sở lý thuyết điện toán lượng tử một chiều, tài liệu thiết kế chip lượng tử hàng đầu thế giới, giáo trình vật lý thông tin lượng tử.

**예문:** 측정기반양자컴퓨팅은 사전에 준비된 광자 얽힘망 위에서 단순 측정만으로 복잡한 알고리즘을 수행하므로 비선형 게이트의 물리적 제약을 극복할 최적의 대안으로 꼽힌다.

**Dịch:** Tính toán lượng tử dựa trên đo đạc thực hiện các thuật toán phức tạp chỉ bằng các phép đo đơn giản trên mạng lưới photon vướng víu đã chuẩn bị sẵn, do đó được xem là giải pháp thay thế tối ưu để vượt qua những giới hạn vật lý của các cổng phi tuyến.

**어휘 연결:** `측정기반양자컴퓨팅` (MBQC - tính toán lượng tử một chiều dựa trên đo đạc) dựa trên việc phá hủy vướng víu có chủ đích thông qua phép đo trên trạng thái cụm, khác với `게이트기반 양자컴퓨팅` (gate-based quantum computing) duy trì trạng thái lượng tử liên tục qua chuỗi cổng đơn nhất khả nghịch.

**영어 참고:** *measurement-based quantum computing (MBQC)* — tính toán lượng tử dựa trên đo đạc; mô hình tính toán lượng tử thực thi thuật toán bằng cách đo đạc lần lượt các qubit trên một trạng thái vướng víu cụm (cluster state) được dệt sẵn.

---

<!-- lexical_basis: advanced_native; register: cryogenic quantum sensing instrumentation and single-photon detection; source_lane: news_formal; context: advanced-photonic-quantum-computing/news_formal -->
### 초전도나노선검출기

**품사:** 명사

**핵심 의미:** 극저온에서 초전도 상태를 유지하는 수십 나노미터 폭의 미세 전도선에 광자가 흡수될 때 일시적으로 초전도성이 깨지며 발생하는 전압 펄스를 포착하여 단일 광자를 99%에 육박하는 초고효율로 검출하는 소자다.

**베트남어 뜻:** bộ phát hiện sợi nano siêu dẫn (SNSPD - Superconducting Nanowire Single-Photon Detector / superconducting nanowire detector); thiết bị cảm biến đơn photon siêu nhạy hoạt động ở nhiệt độ cực thấp, ghi nhận xung điện thế khi một photon đập vào sợi dây nano siêu dẫn làm phá vỡ cục bộ trạng thái siêu dẫn, đạt hiệu suất phát hiện gần như tuyệt đối (trên 98%).

**뉘앙스와 사용법:** Trong hệ thống máy tính quang lượng tử, `초전도나노선검출기` (SNSPD) là thành phần không thể thay thế ở tầng đo đạc đầu ra. Mặc dù bộ xử lý ánh sáng có thể chạy ở nhiệt độ phòng, các bộ dò photon lại cần độ nhạy tối thượng. So với đi-ốt quang tuyết lở bán dẫn thông thường (`반도체 눈사태 광다이오드` — SPAD) vốn có hiệu suất phát hiện thấp và tỷ lệ phát xung giả do nhiệt (`암계수` — dark count rate) cao, `초전도나노선검출기` sở hữu các thông số áp đảo: hiệu suất lượng tử hệ thống trên 98%, độ trễ thời gian dao động cực nhỏ (`타이밍 지터` — timing jitter dưới vài picô-giây), và thời gian hồi phục siêu nhanh. Điểm duy nhất là thiết bị này yêu cầu một buồng lạnh heli khép kín nhỏ khoảng 1-2 Kelvin, nhưng đây là sự đánh đổi hoàn toàn xứng đáng để đảm bảo không một photon tính toán nào bị bỏ sót.

**재사용 가능한 콜로케이션·청크:** `고효율 초전도나노선검출기` — bộ phát hiện sợi nano siêu dẫn hiệu suất cao, `초전도나노선검출기 어레이` — mảng bộ phát hiện sợi nano siêu dẫn, `초전도나노선검출기의 타이밍 지터` — jitter thời gian của bộ phát hiện sợi nano siêu dẫn, `극저온 초전도나노선검출기 시스템` — hệ thống bộ phát hiện sợi nano siêu dẫn cực hàn.

**자주 쓰는 문형과 성분:** `초전도나노선검출기를 도입하여 단일 광자 검출 효율을 98% 이상으로 끌어올리다` (áp dụng bộ phát hiện sợi nano siêu dẫn để nâng hiệu suất phát hiện đơn photon lên trên 98%), `수십 채널의 초전도나노선검출기를 집적하여 다광자 동시 계측을 수행하다` (tích hợp hàng chục kênh bộ phát hiện sợi nano siêu dẫn để thực hiện đếm đồng thời đa photon).

**사회적 관계·주제별 register:** Báo cáo kỹ thuật thiết bị đo lường lượng tử cực sâu, tài liệu kiểm thử hiệu năng trạm thu phát photon, cẩm nang phòng thí nghiệm cảm biến nano siêu dẫn.

**예문:** 광자 손실에 극도로 취약한 양자 연산의 정확도를 담보하기 위해 시스템 최종단에 98% 이상의 검출 효율을 자랑하는 초전도나노선검출기를 배치했다.

**Dịch:** Nhằm bảo đảm độ chính xác của các phép toán lượng tử vốn cực kỳ nhạy cảm với sự suy hao photon, các kỹ sư đã bố trí bộ phát hiện sợi nano siêu dẫn sở hữu hiệu suất phát hiện trên 98% ở tầng cuối cùng của hệ thống.

**어휘 연결:** `초전도나노선검출기` (SNSPD) hoạt động dựa trên sự chuyển pha siêu dẫn - thường khi photon hấp thụ nhiệt, mang lại hiệu suất đỉnh cao và nhiễu cực thấp, vượt trội hơn `눈사태 광다이오드` (SPAD - avalanche photodiode) hoạt động dựa trên cơ chế đánh thủng thác tuyết bán dẫn ở nhiệt độ thường.

**영어 참고:** *superconducting nanowire single-photon detector (SNSPD)* — bộ phát hiện đơn photon sợi nano siêu dẫn; cảm biến quang tử lượng tử siêu dẫn cung cấp hiệu suất phát hiện photon cao nhất và độ trôi thời gian thấp nhất hiện nay.

---

<!-- lexical_basis: advanced_native; register: quantum error mitigation and photon loss recovery; source_lane: native_spoken; context: advanced-photonic-quantum-computing/native_spoken -->
### 광학손실보상

**품사:** 명사

**핵심 의미:** 도파로 전파, 광학 부품 간 결합, 불완전한 소자 효율 등으로 인해 광자가 소멸하거나 흡수되어 정보가 유실되는 현상을 양자 오류 정정 부호, 얽힘 증류, 광학 증폭 또는 상태 다중화 기법을 통해 복원하고 억제하는 기술이다.

**베트남어 뜻:** bù đắp suy hao quang học (optical loss compensation); tập hợp các kỹ thuật và cơ chế bù trừ, khôi phục hoặc chống chịu việc photon bị thất thoát hay hấp thụ trên đường dẫn, các khớp nối và linh kiện quang học, nhằm ngăn chặn việc mất mát dữ liệu lượng tử.

**뉘앙스와 사용법:** Trong tính toán lượng tử quang học, "kẻ thù số một" không phải là sự mất kết hợp do nhiễu môi trường, mà chính là sự mất photon (`광자 손실` — photon loss). Mỗi khi một photon bị thành ống dẫn sóng hấp thụ hoặc bị tán xạ ở cổng ghép nối (`결합 손실` — coupling loss), qubit đó sẽ biến mất hoàn toàn — một dạng lỗi rò rỉ (`누설 오류` — leakage error) rất khó xử lý. Kỹ thuật `광학손실보상` tiếp cận vấn đề theo nhiều tầng: ở tầng vật lý là thiết kế các cấu trúc ghép nối dạng nón (`테이퍼 커플러` — tapered spot-size converter) để giảm suy hao ghép nối xuống dưới 0,5 dB; ở tầng thuật toán là áp dụng các mã sửa lỗi lượng tử chịu mất photon (`광자 손실 내성 양자 부호` — photon loss-tolerant quantum code) và kỹ thuật chưng cất vướng víu (`얽힘 증류`). Trong các cuộc thảo luận hàng ngày của kỹ sư hệ thống, `광학손실보상` là từ khóa luôn đi kèm với việc phân bổ ngân sách tổn hao photon (`광학 손실 마진 예산`).

**재사용 가능한 콜로케이션·청크:** `능동형 광학손실보상` — bù đắp suy hao quang học dạng chủ động, `광학손실보상 알고리즘` — thuật toán bù đắp suy hao quang học, `광학손실보상 회로 설계` — thiết kế mạch bù đắp suy hao quang học, `광학손실보상 허용 한계` — giới hạn chịu đựng bù đắp suy hao quang học.

**자주 쓰는 문형과 성분:** `광학손실보상 기술을 통해 소자 결합부에서 발생하는 광자 유실 문제를 성공적으로 극복하다` (khắc phục thành công sự cố thất thoát photon phát sinh tại các mối ghép nối linh kiện thông qua công nghệ bù đắp suy hao quang học), `광자 손실 내성 양자 부호와 광학손실보상 메커니즘을 결합하다` (kết hợp mã lượng tử kháng mất photon với cơ chế bù đắp suy hao quang học).

**사회적 관계·주제별 register:** Trao đổi kỹ thuật vận hành giữa các kỹ sư tích hợp hệ thống quang tử, phân tích hiệu năng mạch quang lượng tử, biên bản họp giải quyết sự cố suy hao đường truyền.

**예문:** 칩 간 광섬유 결합 부위에서 발생하는 신호 감쇄를 극복하기 위해 다중 경로 중첩과 얽힘 재순환을 결합한 혁신적인 광학손실보상 기법을 도입했다.

**Dịch:** Để khắc phục tình trạng suy giảm tín hiệu xảy ra tại vị trí ghép nối sợi quang giữa các chip, nhóm nghiên cứu đã áp dụng kỹ thuật bù đắp suy hao quang học mang tính đổi mới kết hợp giữa chồng chập đa đường dẫn và tái tuần hoàn vướng víu.

**어휘 연결:** `광학손실보상` (bù đắp suy hao quang học) giải quyết lỗi mất mát hẳn hạt photon khỏi hệ thống (erasure/leakage error), trong khi `양자 위상 오류 정정` (sửa lỗi pha lượng tử) xử lý việc photon vẫn tồn tại nhưng góc pha bị quay lệch (dephasing error).

**영어 참고:** *optical loss compensation* — bù đắp suy hao quang học; các phương pháp phần cứng và phần mềm nhằm giảm thiểu hoặc khắc phục hậu quả của việc suy hao và mất mát photon trong mạch tính toán lượng tử.

---

<!-- lexical_basis: advanced_native; register: quantum state lifetime engineering and decoherence suppression; source_lane: native_spoken; context: advanced-photonic-quantum-computing/native_spoken -->
### 결맞음시간연장

**품사:** 명사

**핵심 의미:** 외부 환경 잡음, 열 요동, 광학적 분산 및 위상 흔들림을 능동적으로 억제하여, 광자 큐비트나 양자 중첩 상태가 본래의 양자역학적 상관관계와 가시도를 온전히 유지하는 유효 시간(coherence time)을 늘리는 기술 및 공정이다.

**베트남어 뜻:** kéo dài thời gian kết hợp (coherence time extension); công nghệ và kỹ thuật kéo dài khoảng thời gian duy trì sự chồng chập và tương quan lượng tử (thời gian kết hợp/coherence) của các trạng thái photon bằng cách triệt tiêu tạp âm môi trường, dao động nhiệt và tán sắc quang học.

**뉘앙스와 사용법:** Mặc dù photon trơ với nhiệt độ tốt hơn rất nhiều so với qubit siêu dẫn, nhưng trong các hệ thống lai ghép (`하이브리드 광양자 시스템` — hybrid photonic quantum system) nơi photon phải tương tác với bộ nhớ lượng tử nguyên tử (`양자 메모리` — quantum memory) hoặc hốc vi cộng hưởng để tạo cổng phi tuyến, sự mất kết hợp pha (`위상 결맞음 상실` — dephasing) vẫn là trở ngại lớn. `결맞음시간연장` đòi hỏi sự phối hợp đồng bộ giữa việc ổn định nhiệt độ ở cấp độ micro-Kelvin, che chắn từ trường, và sử dụng các chuỗi xung điều khiển động học (`동적 결맞음 제어 펄스` — dynamical decoupling pulses). Trong các buổi họp báo cáo tiến độ thí nghiệm, các nhà nghiên cứu thường thảo luận sôi nổi về việc làm sao thực hiện `결맞음시간연장` để hệ thống có đủ thời gian hoàn thành hàng trăm bước tính toán logic trước khi trạng thái lượng tử bị suy biến thành trạng thái cổ điển hỗn loạn.

**재사용 가능한 콜로케이션·청크:** `양자 상태 결맞음시간연장` — kéo dài thời gian kết hợp của trạng thái lượng tử, `결맞음시간연장 기술 확보` — làm chủ công nghệ kéo dài thời gian kết hợp, `광학 펄스를 통한 결맞음시간연장` — kéo dài thời gian kết hợp thông qua xung quang học, `결맞음시간연장 한계 돌파` — đột phá giới hạn kéo dài thời gian kết hợp.

**자주 쓰는 문형과 성분:** `광학 공진기 내부의 위상 요동을 억제하여 광자-원자 상호작용의 결맞음시간연장을 성공적으로 이끌어내다` (kìm hãm dao động pha bên trong hốc cộng hưởng quang học để kéo dài thành công thời gian kết hợp của tương tác photon-nguyên tử), `결맞음시간연장을 통해 복잡한 양자 알고리즘을 수행할 수 있는 연산 창을 확보하다` (bảo đảm khoảng cửa sổ tính toán đủ dài để thực thi các thuật toán lượng tử phức tạp thông qua việc kéo dài thời gian kết hợp).

**사회적 관계·주제별 register:** Thảo luận thực nghiệm trong nhóm nghiên cứu vật lý nguyên tử - quang học lượng tử, bài trình bày hội thảo khoa học vật lý chất ngưng tụ, đánh giá năng lực phần cứng lượng tử.

**예문:** 연구진은 도파로 소재의 유전체 손실을 줄이고 초정밀 온도 제어기를 장착함으로써 얽힘 광자의 결맞음시간연장을 기존 대비 5배 이상 달성했다.

**Dịch:** Bằng cách giảm thiểu tổn hao điện môi của vật liệu ống dẫn sóng và lắp đặt bộ điều khiển nhiệt độ siêu chính xác, nhóm nghiên cứu đã kéo dài thời gian kết hợp của các photon vướng víu lên gấp hơn 5 lần so với trước đây.

**어휘 연결:** `결맞음시간연장` (kéo dài thời gian kết hợp) tập trung vào việc kéo dài thời gian sống của pha lượng tử ($T_2$), phân biệt với `광자 수명 연장` (kéo dài tuổi thọ photon / giảm tổn hao hấp thụ $T_1$) tập trung vào việc ngăn chặn hạt photon bị tiêu biến vào vật chất.

**영어 참고:** *coherence time extension* — kéo dài thời gian kết hợp lượng tử; các biện pháp nhằm duy trì trạng thái chồng chập và tương quan pha của photon trong khoảng thời gian lâu hơn trước khi bị suy giảm bởi nhiễu môi trường.

---

## 읽기: 빛의 입자로 직조해낸 상온 양자 컴퓨팅의 지평

<!-- passage_word_count: 127 Korean eojeol; target_set: 광양자컴퓨팅, 광자큐비트, 집적광학회로, 단일광자광원, 선형광학양자연산, 광간섭계측정, 양자우위실증, 보손샘플링, 광도파로소자, 공간분할다중화, 양자순간이동회로, 측정기반양자컴퓨팅, 초전도나노선검출기, 광학손실보상, 결맞음시간연장 -->

기존 초전도 방식의 극저온 한계를 넘어 상온 연산의 가능성을 제시한 광양자컴퓨팅 연구가 집적광학회로 기술과 만나 거대한 전기를 맞이했다. 연구진은 고순도 단일광자광원을 통해 결맞음 특성이 뛰어난 광자큐비트를 생성하고, 나노스케일의 저손실 광도파로소자 내부에서 정밀한 광간섭계측정을 수행하여 위상 오차를 제어했다. 칩 내부의 집적 밀도를 높이기 위해 공간분할다중화 기법을 적용했으며, 도파로 계면에서 발생하는 신호 감쇄는 다중 얽힘을 활용한 광학손실보상 기술로 극복하여 큐비트의 유효 결맞음시간연장을 이끌어냈다. 특히 복잡한 비선형 매질 없이도 빔 분할기 기반의 선형광학양자연산을 정밀 구현하고, 수십 채널 간섭계를 활용한 보손샘플링 실험을 성공시킴으로써 슈퍼컴퓨터를 압도하는 역사적인 양자우위실증을 달성했다. 나아가 모듈 간 양자 정보를 손실 없이 전달하는 온칩 양자순간이동회로를 구축하고, 대규모 광자 얽힘망 위에서 순차적 측정만으로 연산을 수행하는 측정기반양자컴퓨팅 패러다임을 확립했다. 최종 출력단에 98% 이상의 검출 효율을 지닌 극저온 초전도나노선검출기를 결합함으로써, 빛의 입자로 직조해낸 차세대 상온 양자 컴퓨터의 무한한 확장성을 확고히 입증했다.

**베트남어 번역:**

Nghiên cứu về tính toán lượng tử quang học — hướng đi mở ra khả năng tính toán ở nhiệt độ phòng vượt qua giới hạn cực hàn của các phương pháp siêu dẫn truyền thống — đã bước vào bước ngoặt lịch sử to lớn khi kết hợp với công nghệ mạch quang tích hợp. Nhóm nghiên cứu đã sử dụng nguồn sáng đơn photon độ thuần khiết cao để tạo ra các qubit photon sở hữu đặc tính kết hợp vượt trội, đồng thời thực hiện đo đạc giao thoa kế quang học chính xác bên trong linh kiện ống dẫn sóng quang suy hao thấp quy mô nanomet nhằm kiểm soát sai số pha. Nhằm nâng cao mật độ tích hợp bên trong chip, kỹ thuật ghép kênh phân chia theo không gian đã được ứng dụng, trong khi sự suy giảm tín hiệu tại mặt phân giới ống dẫn sóng được khắc phục bằng công nghệ bù đắp suy hao quang học khai thác đa vướng víu, dẫn đến việc kéo dài thời gian kết hợp hữu hiệu của các qubit. Đặc biệt, nhóm đã hiện thực hóa chuẩn xác mô hình tính toán lượng tử quang tuyến tính dựa trên bộ tách chùm mà không cần môi trường phi tuyến phức tạp, đồng thời thực hiện thành công thí nghiệm lấy mẫu Boson trên giao thoa kế hàng chục kênh để đạt được cột mốc chứng minh ưu thế lượng tử mang tính lịch sử áp đảo các siêu máy tính. Hơn thế nữa, các nhà khoa học đã thiết lập mạch dịch chuyển tức thời lượng tử trên chip để truyền chuyển không suy hao thông tin lượng tử giữa các mô-đun, và xác lập vững chắc mô hình tính toán lượng tử dựa trên đo đạc vốn thực thi thuật toán chỉ bằng các phép đo tuần tự trên mạng lưới photon vướng víu quy mô lớn. Bằng cách tích hợp bộ phát hiện sợi nano siêu dẫn hoạt động ở nhiệt độ cực hàn với hiệu suất phát hiện trên 98% tại tầng đầu ra cuối cùng, khả năng mở rộng vô hạn của máy tính lượng tử nhiệt độ phòng thế hệ mới dệt nên từ những hạt ánh sáng đã được minh chứng một cách vững chắc.
