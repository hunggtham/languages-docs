<!-- source_policy: original explanations, examples, and passage; quantum cascade detectors and thermal sensing terminology cross-checked conceptually, not copied -->
# 양자폭포 광검출기 및 중적외선 초고속 센싱

이 단원은 양자폭포 광검출기(QCD)와 중적외선 초고속 센싱 분야의 핵심 물리 원리 및 소자 공학 어휘 15개를 다룹니다. 서브밴드 간 광흡수 전이, 계단형 양자 우물 설계, 무바이어스 초저잡음 검출 메커니즘, 그리고 포토닉 크리스탈 집적과 테라헤르츠 확장에 이르는 첨단 나노 광전자공학 전문 용어를 체계적으로 학습할 수 있습니다.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 양자폭포광검출기소자
**품사:** 명사
**핵심 의미:** 다중 비대칭 양자 우물 구조에서 서브밴드 간 광흡수와 공명 터널링 현상을 이용하여 외부 바이어스 전압 없이도 중적외선 및 테라헤르츠 신호를 초고속으로 검출하는 반도체 광수광 소자.
**베트남어 뜻:** Linh kiện quang phát hiện thác lượng tử (Quantum Cascade Detector device — QCD device) — linh kiện quang bán dẫn phát hiện tín hiệu vùng hồng ngoại giữa và terahertz với tốc độ siêu cao mà không cần điện áp phân cực ngoài, hoạt động dựa trên sự hấp thụ quang giữa các tiểu dải và hiện tượng xuyên hầm cộng hưởng trong cấu trúc đa giếng lượng tử bất đối xứng.
**뉘앙스와 사용법:** 광전자공학, 반도체 물리학 및 중적외선 센싱 시스템 연구 논문이나 첨단 기술 보고서에서 주로 쓰입니다. 기존의 양자 우물 적외선 검출기(QWIP — Quantum Well Infrared Photodetector)와 달리 외부 전압(bias — 바이어스)을 걸지 않아도 내부 계단형 전위 구조에 의해 광전류가 한 방향으로 자연스럽게 흐릅니다. 이로 인해 암전류(dark current — 암전류)와 발열이 거의 없어 실온에서도 높은 신호대잡음비(SNR — 신호대잡음비)로 수십 기가헤르츠의 초고속 광신호를 왜곡 없이 포착할 수 있는 최첨단 수광 소자를 가리킵니다.
**재사용 가능한 콜로케이션·청크:** 고속 양자폭포광검출기소자 (linh kiện quang phát hiện thác lượng tử tốc độ cao); 양자폭포광검출기소자 제작 (chế tạo linh kiện quang phát hiện thác lượng tử); 양자폭포광검출기소자 어레이 (mảng linh kiện quang phát hiện thác lượng tử); 양자폭포광검출기소자의 응답 특성 (đặc tính đáp ứng của linh kiện quang phát hiện thác lượng tử).
**자주 쓰는 문형과 성분:** [연구팀/기관]은/는 양자폭포광검출기소자를 개발하다/구현하다; [광통신/센싱 시스템]은/는 양자폭포광검출기소자를 기반으로 신호를 복원하다.
**사회적 관계·주제별 register:** 학술·연구, 첨단 반도체 및 방위산업 (격식체 학술·기술 전문어).
**예문:** 연구팀은 상온에서도 피코초 단위의 초고속 응답을 구현하는 중적외선 양자폭포광검출기소자를 개발하는 데 성공했다.
**Dịch:** Nhóm nghiên cứu đã thành công trong việc phát triển linh kiện quang phát hiện thác lượng tử hồng ngoại giữa hiện thực hóa khả năng đáp ứng siêu cao tốc ở cấp độ pico giây ngay cả tại nhiệt độ phòng.
**어휘 연결:** 양자폭포레이저(Quantum Cascade Laser — QCL)가 발광(광원) 소자인 반면, 양자폭포광검출기소자(QCD)는 그에 대응하는 초고속 수광(검출) 소자입니다. 또한 외부 전압이 필요한 양자우물적외선검출기(QWIP)와 달리 무바이어스 광기전력(photovoltaic) 모드로 작동하여 암잡음이 극도로 적다는 뚜렷한 기술적 차이가 있습니다.
**영어 참고:** *Quantum Cascade Detector Device* — Linh kiện thu nhận quang thác lượng tử hoạt động dựa trên sự chuyển dời điện tử trong các giếng lượng tử theo cơ chế quang điện tự phát.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 서브밴드간광흡수광전자전이
**품사:** 명사
**핵심 의미:** 반도체 양자 우물의 전도대 내부에서 광자를 흡수하여 전자가 바닥 상태 서브밴드에서 들뜬 상태 서브밴드로 순간적으로 도약하는 광전이 과정.
**베트남어 뜻:** Sự chuyển dời quang điện tử hấp thụ quang giữa các tiểu dải (intersubband optical absorption photo-carrier transition) — quá trình quang điện tử trong đó electron hấp thụ photon bên trong vùng dẫn của giếng lượng tử bán dẫn và kích thích nhảy vọt tức thời từ tiểu dải cơ bản lên tiểu dải kích thích.
**뉘앙스와 사용법:** 양자 역학적 에너지 준위 설계와 나노 반도체 광반응의 미시적 원리를 설명할 때 사용되는 이론 물리학 및 광전자공학 전문 용어입니다. 일반적인 반도체 광검출기에서 일어나는 대역 간 전이(interband transition — 원자가띠에서 전도대로의 전이)와 달리, 같은 전도대 내에 양자화된 얇은 서브밴드 사이의 전이를 다루므로 양자 우물의 두께를 나노미터 단위로 조절하여 흡수 파장을 중적외선부터 테라헤르츠까지 정밀하게 맞춤 설계할 수 있습니다.
**재사용 가능한 콜로케이션·청크:** 서브밴드간광흡수광전자전이 메커니즘 (cơ chế chuyển dời quang điện tử hấp thụ quang giữa các tiểu dải); 서브밴드간광흡수광전자전이 확률 (xác suất chuyển dời quang điện tử hấp thụ quang giữa các tiểu dải); 서브밴드간광흡수광전자전이 효율 극대화 (tối đa hóa hiệu suất chuyển dời quang điện tử hấp thụ quang giữa các tiểu dải).
**자주 쓰는 문형과 성분:** [입사 광자]에 의해 서브밴드간광흡수광전자전이가 발생하다; [나노 구조]를 통해 서브밴드간광흡수광전자전이를 유도하다.
**사회적 관계·주제별 register:** 반도체 물리학, 양자 나노 광학 (최고급 학술 논문 및 연구 발표).
**예문:** 계단형 비대칭 양자 우물 구조는 서브밴드간광흡수광전자전이를 일으킨 전자가 빠르게 추출되도록 돕는다.
**Dịch:** Cấu trúc giếng lượng tử bất đối xứng dạng bậc thang giúp các electron đã trải qua sự chuyển dời quang điện tử hấp thụ quang giữa các tiểu dải nhanh chóng được rút trích ra ngoài.
**어휘 연결:** 띠간 광흡수(interband optical absorption — 원자가띠와 전도대 사이의 광흡수로 가시광선이나 근적외선 영역에서 주로 발생)와 대비되며, 띠내(intraband) 양자 효과를 활용하여 중적외선 대역의 파장 선택성을 부여하는 핵심 메커니즘입니다.
**영어 참고:** *Intersubband Optical Absorption Photo-Carrier Transition* — Quá trình biến đổi quang điện tử do hấp thụ ánh sáng giữa các tiểu mức năng lượng lượng tử hóa trong vùng dẫn.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 무바이어스초저잡음광검출
**품사:** 명사
**핵심 의미:** 외부 직류 전압(바이어스)을 전혀 걸지 않고 소자 자체의 비대칭 에너지 준위 차이로 유도되는 광기전력만을 이용하여 암잡음을 원천 차단하고 광신호를 고감도로 검출하는 방식.
**베트남어 뜻:** Sự quang phát hiện độ nhiễu siêu thấp không cần điện áp phân cực (zero-bias ultra-low-noise photodetection) — phương thức phát hiện quang học đạt độ nhiễu cực thấp nhờ chặn đứng từ gốc dòng tối, hoàn toàn không cần áp đặt điện áp một chiều (bias) bên ngoài mà chỉ dựa vào suất quang điện sinh ra từ sự chênh lệch mức năng lượng bất đối xứng nội tại của linh kiện.
**뉘앙스와 사용법:** 정밀 계측 시스템, 저전력 센서 노드 및 비냉각 광전자 시스템 기술 문서에서 핵심 장점으로 강조되는 표현입니다. 외부 전압을 가할 때 필연적으로 수반되는 암전류(dark current), 샷 잡음(shot noise), 1/f 플리커 잡음(flicker noise) 및 열적 발열을 원천 배제할 수 있으므로, 냉각 장치 없이도 극미약한 중적외선 광자를 정확하게 식별할 수 있는 기술적 강점을 나타냅니다.
**재사용 가능한 콜로케이션·청크:** 무바이어스초저잡음광검출 특성 (đặc tính quang phát hiện độ nhiễu siêu thấp không phân cực); 무바이어스초저잡음광검출 구현 (hiện thực hóa quang phát hiện độ nhiễu siêu thấp không phân cực); 무바이어스초저잡음광검출 모드 동작 (hoạt động ở chế độ quang phát hiện độ nhiễu siêu thấp không phân cực).
**자주 쓰는 문형과 성분:** [양자폭포 소자]은/는 무바이어스초저잡음광검출을 가능하게 하다; 무바이어스초저잡음광검출을 통해 [신호대잡음비]를 개선하다.
**사회적 관계·주제별 register:** 센서 계측 공학, 반도체 디바이스 물리학 (기술 전문 및 학술 논문).
**예문:** 이 검출기는 무바이어스초저잡음광검출 방식으로 동작하여 상온에서도 열잡음의 간섭을 최소화한다.
**Dịch:** Đầu dò này hoạt động theo phương thức quang phát hiện độ nhiễu siêu thấp không cần điện áp phân cực, giúp giảm thiểu tối đa sự can thiệp của nhiễu nhiệt ngay cả ở nhiệt độ phòng.
**어휘 연결:** 고전압 바이어스를 걸어 전류를 급격히 증폭하는 애벌랜치 광검출(Avalanche photodetection — APD)이나 광도전 모드(photoconductive mode)와 대비되며, 신호의 절대적 증폭보다는 잡음의 원천 억제에 초점을 맞춘 방식입니다.
**영어 참고:** *Zero-Bias Ultra-Low-Noise Photodetection* — Kỹ thuật phát hiện quang học không cần điện áp phân cực ngoài, đạt độ ồn cực thấp nhờ loại bỏ hoàn toàn dòng tối.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 중적외선대역고속광스위칭
**품사:** 명사
**핵심 의미:** 분자의 고유 흡수선이 집중된 3~12 마이크로미터 중적외선 파장대에서 광신호의 전송 경로, 온/오프 상태, 또는 위상을 기가헤르츠 이상의 초고속으로 변환하는 광제어 기술.
**베트남어 뜻:** Chuyển mạch quang tốc độ cao dải hồng ngoại giữa (mid-infrared high-speed optical switching) — kỹ thuật điều khiển quang học chuyển đổi đường truyền, trạng thái bật/tắt hoặc pha của tín hiệu quang trong dải bước sóng hồng ngoại giữa (3~12 µm) với tốc độ siêu cao từ mức gigahertz trở lên.
**뉘앙스와 사용법:** 자유 공간 광통신(Free-space optical communication — FSO), 국방 전자광학 교란 기술, 초고속 시간 분해 분광 시스템 개발 보고서에서 핵심 기술로 다루어집니다. 중적외선 대역은 대기 투과창(atmospheric window — 3~5 µm, 8~12 µm)을 포함하고 있어 안개나 연기를 잘 뚫고 나가는데, 서브밴드 간 전자 완화 시간이 피코초(picosecond — ps) 단위로 극히 짧다는 물리적 특성을 이용하여 테라비트급 고속 스위칭과 통신 변조를 달성할 수 있습니다.
**재사용 가능한 콜로케이션·청크:** 중적외선대역고속광스위칭 소자 (linh kiện chuyển mạch quang tốc độ cao dải hồng ngoại giữa); 중적외선대역고속광스위칭 속도 측정 (đo tốc độ chuyển mạch quang tốc độ cao dải hồng ngoại giữa); 중적외선대역고속광스위칭 기반 통신 (thông tin liên lạc dựa trên chuyển mạch quang tốc độ cao dải hồng ngoại giữa).
**자주 쓰는 문형과 성분:** [광소자]을/를 이용하여 중적외선대역고속광스위칭을 실현하다; 중적외선대역고속광스위칭 성능을 검증하다.
**사회적 관계·주제별 register:** 광통신망, 레이저 광학, 국방 항공우주 (공학 및 산업 정책).
**예문:** 연구팀은 양자 구조 최적화를 통해 20 GHz 이상의 대역폭을 갖는 중적외선대역고속광스위칭 시스템을 실증했다.
**Dịch:** Nhóm nghiên cứu đã chứng minh thực nghiệm hệ thống chuyển mạch quang tốc độ cao dải hồng ngoại giữa có băng thông trên 20 GHz thông qua việc tối ưu hóa cấu trúc lượng tử.
**어휘 연결:** 통신용 근적외선(NIR — Near-Infrared, 1.3~1.55 µm) 스위칭과 구별되며, 분자 지문 식별 및 악천후 자유공간 전송에 특화된 기술입니다.
**영어 참고:** *Mid-Infrared High-Speed Optical Switching* — Kỹ thuật chuyển mạch quang học siêu tốc độ cao trong dải sóng hồng ngoại trung.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 계단형양자우물엔지니어링
**품사:** 명사
**핵심 의미:** 반도체 장벽과 우물의 두께를 점진적으로 변화시켜 에너지 준위를 마치 계단처럼 비대칭으로 정밀 배치함으로써 광생성 전자의 일방향 종속 이송을 유도하는 나노 구조 설계 기법.
**베트남어 뜻:** Kỹ nghệ giếng lượng tử dạng bậc thang (staircase quantum well engineering / stepped quantum well engineering) — kỹ thuật thiết kế cấu trúc nano bố trí chuẩn xác các mức năng lượng bất đối xứng tựa như bậc thang bằng cách thay đổi dần dần độ dày của rào chắn và giếng lượng tử bán dẫn, nhằm dẫn hướng sự dịch chuyển nối tiếp một chiều của các electron quang sinh.
**뉘앙스와 사용법:** 양자폭포 검출기(QCD)의 광기전력(photovoltaic) 메커니즘을 완성하는 핵심 설계 공학 용어입니다. 외부 바이어스 전압이 없어도 광흡수로 들뜬 전자가 광학 포논(LO-phonon — 종파 광학 포논)을 방출하며 한 계단씩 아래 준위로 연속 이동(cascade relaxation)하게 만듦으로써, 역방향 역류 없이 순방향 광전류를 스스로 발생시키는 정류(rectification) 기능을 나노 스케일에서 부여합니다.
**재사용 가능한 콜로케이션·청크:** 정밀 계단형양자우물엔지니어링 (kỹ nghệ giếng lượng tử dạng bậc thang chính xác); 계단형양자우물엔지니어링 기법 적용 (ứng dụng kỹ thuật kỹ nghệ giếng lượng tử dạng bậc thang); 계단형양자우물엔지니어링을 통한 전송 효율 개선 (cải thiện hiệu suất truyền dẫn thông qua kỹ nghệ giếng lượng tử dạng bậc thang).
**자주 쓰는 문형과 성분:** [연구팀]은/는 계단형양자우물엔지니어링을 구사하다; 계단형양자우물엔지니어링에 기반하여 [에너지 준위]를 배열하다.
**사회적 관계·주제별 register:** 나노 반도체 공학, 양자 디바이스 설계 (고급 학술 전문어).
**예문:** 비대칭 계단형양자우물엔지니어링은 전자가 역방향으로 터널링되는 확률을 원천적으로 차단한다.
**Dịch:** Kỹ nghệ giếng lượng tử dạng bậc thang bất đối xứng ngăn chặn triệt để xác suất electron bị xuyên hầm ngược chiều.
**어휘 연결:** 대칭형 직사각형 양자 우물(symmetric square quantum well)과 대조되며, 전하 흐름의 방향성을 물리적 구조 자체로 결정짓는 차별점을 가집니다.
**영어 참고:** *Staircase Quantum Well Engineering* — Kỹ nghệ thiết kế giếng lượng tử dạng bậc thang phân tầng hỗ trợ hồi phục phonon một chiều.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 고온작동비냉각적외선감지
**품사:** 명사
**핵심 의미:** 액체 질소나 극저온 스털링 냉각기 같은 부피가 크고 무거운 냉각 장치를 사용하지 않고도 실온 또는 고온 환경에서 적외선 신호를 높은 감도로 검출하는 기술.
**베트남어 뜻:** Cảm biến hồng ngoại không làm lạnh vận hành ở nhiệt độ cao (high-temperature operation uncooled infrared sensing) — kỹ thuật phát hiện tín hiệu hồng ngoại với độ nhạy cao trong môi trường nhiệt độ phòng hoặc nhiệt độ cao mà không cần sử dụng các thiết bị làm lạnh cồng kềnh và nặng nề như nitơ lỏng hay máy làm lạnh sâu Stirling.
**뉘앙스와 사용법:** 스마트 센서, 드론 탑재 감시 장비, 휴대용 환경 계측기, 자율주행 야간 센서 등 상용화 및 소형화가 필수적인 기술 문서에서 핵심 성과 지표로 다루어집니다. 과거 중적외선 감지기는 상온에서의 열적 잡음(thermal generation-recombination noise) 때문에 극저온(77 K 등) 냉각이 필수였으나, 무바이어스 양자폭포 구조 등을 통해 상온 이상에서도 높은 성능지수(detectivity — 검출도)를 달성하는 기술 혁신을 의미합니다.
**재사용 가능한 콜로케이션·청크:** 고온작동비냉각적외선감지 모듈 (mô-đun cảm biến hồng ngoại không làm lạnh vận hành nhiệt độ cao); 고온작동비냉각적외선감지 기술 구현 (hiện thực hóa công nghệ cảm biến hồng ngoại không làm lạnh vận hành nhiệt độ cao); 차세대 고온작동비냉각적외선감지 (cảm biến hồng ngoại không làm lạnh vận hành nhiệt độ cao thế hệ mới).
**자주 쓰는 문형과 성분:** [소자/시스템]은/는 고온작동비냉각적외선감지를 달성하다; 고온작동비냉각적외선감지 방식을 채택하여 [크기/무게]를 줄이다.
**사회적 관계·주제별 register:** 센서 산업, 방위 및 항공우주 산업 (기술 경제 및 상용화 보고서).
**예문:** 고온작동비냉각적외선감지 기술의 확보로 휴대용 적외선 분광 장비의 무게와 전력 소모를 절반 이하로 줄였다.
**Dịch:** Nhờ nắm giữ công nghệ cảm biến hồng ngoại không làm lạnh vận hành ở nhiệt độ cao, trọng lượng và mức tiêu thụ điện năng của thiết bị quang phổ hồng ngoại cầm tay đã giảm xuống dưới một nửa.
**어휘 연결:** 극저온 냉각 적외선 검출기(Cryogenically cooled infrared detector — 고가이고 유지보수가 복잡함)와 대비되며, 마이크로볼로미터(Microbolometer — 속도가 느림)보다 수천 배 빠른 양자 광자 검출 특성을 유지합니다.
**영어 참고:** *High-Temperature Operation Uncooled Infrared Sensing* — Công nghệ cảm biến hồng ngoại không cần làm lạnh hoạt động ổn định ở nhiệt độ phòng hoặc nhiệt độ cao.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 초고속헤테로다인분광검출
**품사:** 명사
**핵심 의미:** 미약한 수신 적외선 광신호를 국부 발진기 레이저 광과 광검출기 표면에서 혼합하여 그 주파수 차이에 해당하는 비트 신호(중간 주파수)를 발생시킨 뒤 기가헤르츠 이상의 초고속으로 복조 및 분석하는 고감도 분광 검출 기법.
**베트남어 뜻:** Phân tích quang phổ tách sóng dị sai tốc độ siêu cao (ultra-high-speed heterodyne spectroscopic detection) — kỹ thuật phân tích quang phổ độ nhạy cao trong đó tín hiệu quang hồng ngoại thu nhận cực yếu được trộn với ánh sáng laser dao động nội trên bề mặt đầu dò quang để tạo ra tín hiệu phách (tần số trung gian) tương ứng với độ chênh lệch tần số, sau đó giải điều chế và phân tích với tốc độ siêu cao từ mức gigahertz trở lên.
**뉘앙스와 사용법:** 정밀 레이저 계측, 우주 전파 분광 관측, 고속 가스 동역학 모니터링 논문에서 주로 쓰입니다. 빛의 세기만을 직접 측정하는 직접 검출(direct detection)과 달리, 신호의 진폭뿐만 아니라 위상과 주파수 정보를 보존하며 국부 발진기 빛의 세기만큼 신호가 증폭되므로, 극미약 신호에서도 양자 제한 잡음(quantum noise limit)에 도달하는 극한의 계측 성능을 설명할 때 쓰입니다.
**재사용 가능한 콜로케이션·청크:** 초고속헤테로다인분광검출 시스템 구축 (xây dựng hệ thống phân tích quang phổ tách sóng dị sai tốc độ siêu cao); 초고속헤테로다인분광검출을 통한 신호 복원 (phục hồi tín hiệu thông qua phân tích quang phổ tách sóng dị sai tốc độ siêu cao); 정밀 초고속헤테로다인분광검출 (phân tích quang phổ tách sóng dị sai tốc độ siêu cao chính xác).
**자주 쓰는 문형과 성분:** [측정계]는 초고속헤테로다인분광검출 기법을 사용하다; 초고속헤테로다인분광검출을 수행하여 [미세 주파수 변위]를 감지하다.
**사회적 관계·주제별 register:** 레이저 계측학, 천체물리학 및 통신 공학 (학술·전문).
**예문:** 초고속헤테로다인분광검출을 도입하면 화학 반응 과정에서 발생하는 순간적인 라디칼 분자의 흡수선 변화를 나노초 단위로 추적할 수 있다.
**Dịch:** Nếu áp dụng phân tích quang phổ tách sóng dị sai tốc độ siêu cao, sự biến đổi đường hấp thụ của các phân tử gốc tự do tức thời sinh ra trong quá trình phản ứng hóa học có thể được theo dõi ở cấp độ nano giây.
**어휘 연결:** 직접 검출(Direct detection — 단순 광세기 측정)과 대비되며, 호모다인 검출(Homodyne detection — 동일 주파수 혼합)보다 주파수 편이 측정과 고속 데이터 전송에 훨씬 유리합니다.
**영어 참고:** *Ultra-High-Speed Heterodyne Spectroscopic Detection* — Kỹ thuật đo phổ quang học dị sai siêu cao tốc kết hợp laser dao động nội để khuếch đại tín hiệu yếu.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 포토닉크리스탈공진기집적소자
**품사:** 명사
**핵심 의미:** 굴절률이 주기적으로 배열된 나노 격자(포토닉 크리스탈) 구조로 특정 파장의 빛을 매우 좁은 공간에 강하게 가두는 광 공진기를 반도체 광검출기 칩에 단일 집적한 소자.
**베트남어 뜻:** Linh kiện tích hợp bộ cộng hưởng tinh thể quang tử (photonic crystal cavity integrated device) — linh kiện tích hợp nguyên khối trên chip đầu dò quang bán dẫn một bộ cộng hưởng quang học có cấu trúc mạng nano chiết suất tuần hoàn (tinh thể quang tử) nhằm giam giữ cực mạnh ánh sáng ở bước sóng nhất định trong một không gian siêu hẹp.
**뉘앙스와 사용법:** 나노포토닉스(nanophotonics) 및 온칩 광자 집적회로(photonic integrated circuit — PIC) 논문에서 핵심 부품으로 제시됩니다. 양자폭포 검출기와 같은 서브밴드 소자는 양자 역학적 선택 규칙(selection rule) 때문에 표면에 수직 입사하는 빛을 직접 흡수하지 못하는 한계가 있는데, 이 공진기 구조가 빛을 수평 편광에서 수직 편광 성분으로 강력하게 회절·결합시켜 초소형 면적에서도 흡수율을 극대화해 줍니다.
**재사용 가능한 콜로케이션·청크:** 포토닉크리스탈공진기집적소자 설계 (thiết kế linh kiện tích hợp bộ cộng hưởng tinh thể quang tử); 포토닉크리스탈공진기집적소자 기반 센서 (cảm biến dựa trên linh kiện tích hợp bộ cộng hưởng tinh thể quang tử); 고품질 포토닉크리스탈공진기집적소자 (linh kiện tích hợp bộ cộng hưởng tinh thể quang tử chất lượng cao).
**자주 쓰는 문형과 성분:** [광검출기 표면]에 포토닉크리스탈공진기집적소자를 구현하다; 포토닉크리스탈공진기집적소자를 통해 [광흡수 효율]을 증대시키다.
**사회적 관계·주제별 register:** 나노광학, 마이크로 전자공학 (전문 기술 학술어).
**예문:** 포토닉크리스탈공진기집적소자의 결합을 통해 소자의 유효 수광 면적을 줄이면서도 광응답성을 다섯 배 이상 끌어올렸다.
**Dịch:** Thông qua việc tích hợp linh kiện tích hợp bộ cộng hưởng tinh thể quang tử, diện tích thu quang hiệu dụng của linh kiện đã giảm nhưng độ đáp ứng quang vẫn tăng hơn năm lần.
**어휘 연결:** 고전적인 금속 반사 거울이나 회절 격자 커플러(diffraction grating coupler)에 비해 광 구속력(Q-factor)이 월등히 높아 초소형 고밀도 칩 구현에 필수적입니다.
**영어 참고:** *Photonic Crystal Cavity Integrated Device* — Linh kiện tích hợp khoang cộng hưởng tinh thể quang tử giam giữ ánh sáng trên chip.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 광음향분광초정밀센서모듈
**품사:** 명사
**핵심 의미:** 변조된 적외선 레이저 빔이 특정 가스 분자에 흡수될 때 발생하는 국소적 열팽창과 그에 따른 압력파(음파) 신호를 초고감도 음향 센서로 수신하여 농도를 분석하는 고정밀 모듈 장치.
**베트남어 뜻:** Mô-đun cảm biến siêu chính xác quang phổ quang âm (photoacoustic spectroscopy ultra-precision sensor module) — thiết bị mô-đun chính xác cao phân tích nồng độ bằng cách sử dụng cảm biến âm thanh siêu nhạy để thu nhận sóng áp suất (sóng âm) và sự giãn nở nhiệt cục bộ sinh ra khi chùm laser hồng ngoại điều chế bị các phân tử khí cụ thể hấp thụ.
**뉘앙스와 사용법:** 가스 분석, 환경 독성 물질 모니터링, 화학 플랜트 누출 탐지 장비의 제품 사양서나 연구 보고서에서 자주 사용되는 하드웨어 시스템 용어입니다. 긴 광학 흡수 셀(cell)이 필요한 전통적 흡수 분광계와 달리, 매우 작은 부피의 음향 공진 챔버만으로도 ppb(십억분의 일) 또는 ppt(일조분의 일) 단위의 극미량 가스를 제로 배경 잡음(zero-background noise) 상태에서 정확하게 계측할 수 있습니다.
**재사용 가능한 콜로케이션·청크:** 소형 광음향분광초정밀센서모듈 (mô-đun cảm biến siêu chính xác quang phổ quang âm cỡ nhỏ); 광음향분광초정밀센서모듈 개발 (phát triển mô-đun cảm biến siêu chính xác quang phổ quang âm); 광음향분광초정밀센서모듈을 통한 가스 검지 (phát hiện khí thông qua mô-đun cảm biến siêu chính xác quang phổ quang âm).
**자주 쓰는 문형과 성분:** [측정 시스템]에 광음향분광초정밀센서모듈을 장착하다; 광음향분광초정밀센서모듈을 이용하여 [미량 유해가스]를 측정하다.
**사회적 관계·주제별 register:** 정밀 계측기기 산업, 환경공학 (산업 및 실무 기술어).
**예문:** 새로 제작된 광음향분광초정밀센서모듈은 반도체 클린룸 내부의 극미량 불화수소 누출을 실시간으로 감지한다.
**Dịch:** Mô-đun cảm biến siêu chính xác quang phổ quang âm mới chế tạo phát hiện theo thời gian thực sự rò rỉ hydro florua cực vi lượng bên trong phòng sạch bán dẫn.
**어휘 연결:** 광검출기로 투과된 빛의 감쇠를 재는 직접 흡수 분광기(Direct absorption spectrometer)와 달리, 빛 에너지가 음파로 변환되는 열역학적 과정을 측정하므로 광학적 배경 산란에 영향을 받지 않는 장점이 있습니다.
**영어 참고:** *Photoacoustic Spectroscopy Ultra-Precision Sensor Module* — Khối mô-đun cảm biến siêu chính xác dựa trên hiệu ứng quang âm học.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 다파장선택적적외선센싱
**품사:** 명사
**핵심 의미:** 복잡한 광학 필터 휠 없이도 단일 칩이나 집적 구조 내에서 여러 특정 적외선 파장 대역을 개별적으로 선택하여 동시에 계측하는 고성능 센싱 기술.
**베트남어 뜻:** Cảm biến hồng ngoại chọn lọc đa bước sóng (multi-wavelength selective infrared sensing) — kỹ thuật cảm biến hiệu năng cao đo lường đồng thời bằng cách chọn lọc riêng biệt nhiều dải bước sóng hồng ngoại cụ thể ngay bên trong một cấu trúc tích hợp hoặc chip đơn mà không cần bánh xe lọc quang học phức tạp.
**뉘앙스와 사용법:** 다종 복합 가스 분석, 다중 온도 분포 계측, 멀티스펙트럼 적외선 영상 시스템 관련 논문과 기술 기획서에서 널리 쓰입니다. 온실가스(이산화탄소, 메탄 등)나 유해 화학 물질이 서로 겹치는 중적외선 흡수 대역을 가질 때, 각 파장별 흡수 신호를 동시에 정밀 분리하여 교차 민감도(cross-sensitivity)와 오경보를 완벽히 해결하는 센서 플랫폼 기술을 뜻합니다.
**재사용 가능한 콜로케이션·청크:** 다파장선택적적외선센싱 플랫폼 (nền tảng cảm biến hồng ngoại chọn lọc đa bước sóng); 다파장선택적적외선센싱 기술 구현 (hiện thực hóa công nghệ cảm biến hồng ngoại chọn lọc đa bước sóng); 다파장선택적적외선센싱 칩 (chip cảm biến hồng ngoại chọn lọc đa bước sóng).
**자주 쓰는 문형과 성분:** 다파장선택적적외선센싱을 지원하다; 다파장선택적적외선센싱을 기반으로 [혼합 가스]를 실시간 분석하다.
**사회적 관계·주제별 register:** 스마트 환경 계측, 센서 융합 공학 (행정·산업 기술 표준).
**예문:** 다파장선택적적외선센싱 방식을 적용하면 대기 중 메탄과 수증기의 스펙트럼 간섭을 배제하고 메탄 농도만을 정확히 추출할 수 있다.
**Dịch:** Nếu áp dụng phương thức cảm biến hồng ngoại chọn lọc đa bước sóng, ta có thể loại bỏ sự giao thoa quang phổ giữa mêtan và hơi nước trong khí quyển để trích xuất chính xác duy nhất nồng độ mêtan.
**어휘 연결:** 단일 파장만을 통과시키는 협대역 필터 센싱(single-band sensing)이나 전 대역의 에너지를 뭉뚱그려 측정하는 광대역 열감지(broadband thermal detection)의 한계를 뛰어넘는 다채널 지능형 분광 센싱 방식입니다.
**영어 참고:** *Multi-Wavelength Selective Infrared Sensing* — Kỹ thuật cảm biến hồng ngoại chọn lọc đồng thời nhiều bước sóng riêng biệt.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 암잡음전류원천적배제기술
**품사:** 명사
**핵심 의미:** 소자에 외부 바이어스 전압을 인가하지 않는 광기전 모드와 양자 대칭성 설계를 결합하여 빛이 없을 때 흐르는 암전류와 그에 수반되는 샷 잡음 및 저주파 열잡음을 소자 레벨에서 원천적으로 제거하는 기술.
**베트남어 뜻:** Công nghệ loại trừ tận gốc nhiễu dòng tối (fundamental dark-current noise elimination technology) — công nghệ kết hợp chế độ quang điện không đặt điện áp phân cực ngoài cùng thiết kế tính đối xứng lượng tử để loại bỏ triệt để từ cấp độ linh kiện dòng tối sinh ra khi không có ánh sáng, kèm theo nhiễu hạt (shot noise) và nhiễu nhiệt tần số thấp.
**뉘앙스와 사용법:** 차세대 광검출기 소자의 물리적 한계를 극복하고 상온 검출 성능을 극대화하기 위한 연구 논문에서 핵심 기술적 성취로 강조됩니다. 기존 소자들이 회로 단이나 신호 처리 알고리즘으로 잡음을 사후 필터링하던 방식과 달리, 소자의 물리적 작동 원리 자체에서 암전류의 생성 경로를 원천 봉쇄하여 극한의 검출도(detectivity)를 이끌어냅니다.
**재사용 가능한 콜로케이션·청크:** 암잡음전류원천적배제기술 구현 (hiện thực hóa công nghệ loại trừ tận gốc nhiễu dòng tối); 암잡음전류원천적배제기술을 적용한 소자 (linh kiện ứng dụng công nghệ loại trừ tận gốc nhiễu dòng tối); 암잡음전류원천적배제기술의 메커니즘 (cơ chế của công nghệ loại trừ tận gốc nhiễu dòng tối).
**자주 쓰는 문형과 성분:** [구조 설계]에 암잡음전류원천적배제기술을 적용하다; 암잡음전류원천적배제기술로 [배경 잡음]을 억제하다.
**사회적 관계·주제별 register:** 반도체 물리, 소자 설계 공학 (전문 학술어).
**예문:** 양자폭포 검출기의 무바이어스 동작 특성은 암잡음전류원천적배제기술의 가장 대표적인 물리적 구현 사례이다.
**Dịch:** Đặc tính vận hành không cần điện áp phân cực của đầu dò thác lượng tử là ví dụ hiện thực hóa vật lý tiêu biểu nhất của công nghệ loại trừ tận gốc nhiễu dòng tối.
**어휘 연결:** 신호 수신 후 소프트웨어적으로 잡음을 걸러내는 디지털 필터링(digital filtering)이나 능동 잡음 제거(active noise cancellation)와 구분되며, 하드웨어 소자 물리 차원에서 전류 요동 자체를 발생시키지 않는 근본적 접근입니다.
**영어 참고:** *Fundamental Dark-Current Noise Elimination Technology* — Công nghệ loại bỏ tận gốc rễ tạp âm dòng tối dựa trên cấu trúc vật lý của linh kiện.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 초고감도가스분석적외선소자
**품사:** 명사
**핵심 의미:** 특정 가스 분자의 지문 영역에 해당하는 중적외선 흡수선을 겨냥하여 극미량 농도의 유해가스나 배출가스를 높은 정밀도로 식별하는 고감도 적외선 반도체 칩 소자.
**베트남어 뜻:** Linh kiện hồng ngoại phân tích khí độ nhạy cực cao (ultra-high-sensitivity gas analysis infrared device) — linh kiện chip bán dẫn hồng ngoại độ nhạy cực cao nhắm vào các đường hấp thụ hồng ngoại giữa thuộc vùng dấu vân tay (fingerprint region) của phân tử khí cụ thể để nhận diện với độ chính xác cao khí độc hại hoặc khí thải nồng độ cực vi lượng.
**뉘앙스와 사용법:** 반도체 화학 공정 안전 진단, 온실가스 감시 체계, 호흡 분석 기반 조기 질병 진단 기기 개발 등 산업·의료 복합 응용 문서에서 주로 사용됩니다. 크기가 작고 반응 속도가 빠르며 환경 내구성이 뛰어나 휴대용 계측기 및 드론 탐지 장비의 핵심 부품으로 자리매김하고 있습니다.
**재사용 가능한 콜로케이션·청크:** 초고감도가스분석적외선소자 양산 (sản xuất hàng loạt linh kiện hồng ngoại phân tích khí độ nhạy cực cao); 초고감도가스분석적외선소자 패키징 (đóng gói linh kiện hồng ngoại phân tích khí độ nhạy cực cao); 산업용 초고감도가스분석적외선소자 (linh kiện hồng ngoại phân tích khí độ nhạy cực cao dùng trong công nghiệp).
**자주 쓰는 문형과 성분:** [가스 검지기]에 초고감도가스분석적외선소자를 탑재하다; 초고감도가스분석적외선소자를 기반으로 독성 물질을 모니터링하다.
**사회적 관계·주제별 register:** 산업 공정 안전, 환경 센서 공학 (실무 기술 및 산업 뉴스).
**예문:** 최신 초고감도가스분석적외선소자를 탑재한 현장 진단기는 일산화탄소와 메탄의 미세 누출을 수십 밀리초 내에 경보한다.
**Dịch:** Máy chẩn đoán hiện trường được trang bị linh kiện hồng ngoại phân tích khí độ nhạy cực cao mới nhất cảnh báo rò rỉ cực nhỏ của carbon monoxide và mêtan trong vòng vài chục mili giây.
**어휘 연결:** 일반적인 비분산 적외선(NDIR) 센서보다 반응 속도가 수천 배 빠르고 간섭 물질에 대한 파장 선택성이 압도적으로 우수합니다.
**영어 참고:** *Ultra-High-Sensitivity Gas Analysis Infrared Device* — Linh kiện hồng ngoại độ nhạy siêu cao chuyên dụng cho phân tích khí.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 반도체초격자밴드갭엔지니어링
**품사:** 명사
**핵심 의미:** 서로 다른 나노미터 두께의 얇은 화합물 반도체 층을 원자 단위로 번갈아 적층하여 인공적인 양자 포텐셜 우물과 미니밴드를 형성함으로써 원하는 광학적 에너지 띠틈을 자유자재로 재단하는 나노 박막 기술.
**베트남어 뜻:** Kỹ nghệ vùng cấm siêu mạng bán dẫn (semiconductor superlattice bandgap engineering) — kỹ thuật màng mỏng nano xếp chồng xen kẽ ở cấp độ nguyên tử các lớp bán dẫn hợp chất siêu mỏng có độ dày cỡ nanomet để tạo ra các giếng thế lượng tử và dải hẹp nhân tạo (miniband), qua đó tùy biến tự do khoảng cách vùng cấm quang học mong muốn.
**뉘앙스와 사용법:** 에피택셜 성장(MBE, MOCVD) 기반의 최첨단 화합물 반도체 소자 연구 논문에서 양자 디바이스 설계의 이론적·실험적 토대로 거론됩니다. 자연계 물질 고유의 밴드갭 한계를 넘어 나노미터 단위의 층 두께와 조성비 조절만으로 흡수 파장과 전자 전송 속도를 임의로 맞춤 제작할 수 있는 마법 같은 반도체 물리학 기술을 뜻합니다.
**재사용 가능한 콜로케이션·청크:** 정밀 반도체초격자밴드갭엔지니어링 (kỹ nghệ vùng cấm siêu mạng bán dẫn chính xác); 반도체초격자밴드갭엔지니어링 공정 (quy trình kỹ nghệ vùng cấm siêu mạng bán dẫn); 반도체초격자밴드갭엔지니어링 기반 소자 (linh kiện dựa trên kỹ nghệ vùng cấm siêu mạng bán dẫn).
**자주 쓰는 문형과 성분:** 반도체초격자밴드갭엔지니어링을 적용하다; 반도체초격자밴드갭엔지니어링을 통해 [작동 대역폭]을 확장하다.
**사회적 관계·주제별 register:** 화합물 반도체 공학, 양자 나노 재료학 (전문 학술어).
**예문:** 연구진은 반도체초격자밴드갭엔지니어링을 통하여 4 마이크로미터에서 12 마이크로미터에 이르는 중적외선 전 대역을 포괄하는 검출 구조를 구현했다.
**Dịch:** Nhóm nghiên cứu đã hiện thực hóa cấu trúc đầu dò bao trọn toàn bộ dải hồng ngoại giữa từ 4 đến 12 micromet thông qua kỹ nghệ vùng cấm siêu mạng bán dẫn.
**어휘 연결:** 화학 조성만을 바꾸는 기존의 벌크 합금 반도체 밴드갭 제어(bulk alloy bandgap engineering)와 대비되며, 원자 층 단위의 두께라는 기하학적 치수를 제어 변수로 활용하는 차원 높은 기술입니다.
**영어 참고:** *Semiconductor Superlattice Bandgap Engineering* — Kỹ nghệ cấu trúc vùng cấm và dải năng lượng siêu mạng bán dẫn nhân tạo.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 테라헤르츠양자폭포검출기
**품사:** 명사
**핵심 의미:** 마이크로파와 적외선 사이의 미개척 전자기파 영역인 테라헤르츠(0.1~10 THz) 대역의 신호를 서브밴드 간 전자 전이 및 공명 터널링을 통해 초고속으로 검출하는 양자 수광 소자.
**베트남어 뜻:** Đầu dò thác lượng tử terahertz (terahertz quantum cascade detector — THz QCD) — linh kiện thu nhận lượng tử phát hiện với tốc độ siêu cao các tín hiệu trong dải tần số terahertz (0.1~10 THz), vùng sóng điện từ chưa khai phá nằm giữa vi ba và hồng ngoại, thông qua sự chuyển dời điện tử giữa các tiểu dải và hiện tượng xuyên hầm cộng hưởng.
**뉘앙스와 사용법:** 차세대 6G 초광대역 무선 통신, 비파괴 안전 검사(우편물 마약·폭발물 탐지), 생체 조직 투과 영상, 천체물리학 전파 관측 등 미개척 전자기파 주파수를 활용하는 미래 기술 문서에서 빈번하게 등장합니다. 전통적인 열 검출기(볼로미터 등)에 비해 응답 속도가 피코초 수준으로 극도로 빠르므로 초고속 무선 데이터 수신기로서 결정적인 가치를 지닙니다.
**재사용 가능한 콜로케이션·청크:** 테라헤르츠양자폭포검출기 개발 (phát triển đầu dò thác lượng tử terahertz); 테라헤르츠양자폭포검출기 수신 모듈 (mô-đun thu nhận đầu dò thác lượng tử terahertz); 고속 테라헤르츠양자폭포검출기 (đầu dò thác lượng tử terahertz tốc độ cao).
**자주 쓰는 문형과 성분:** [무선 통신 시스템]은/는 테라헤르츠양자폭포검출기를 수신기로 채택하다; 테라헤르츠양자폭포검출기로 [테라헤르츠파]를 감지하다.
**사회적 관계·주제별 register:** 초고주파 통신 공학, 테라헤르츠 광학 (최첨단 학술 및 미래 통신 기술).
**예문:** 새로 개발된 테라헤르츠양자폭포검출기는 6G 무선 통신 시험망에서 초당 수백 기가비트의 데이터 전송 신호를 지연 없이 복원했다.
**Dịch:** Đầu dò thác lượng tử terahertz mới được phát triển đã phục hồi tín hiệu truyền dữ liệu hàng trăm gigabit mỗi giây trong mạng thử nghiệm vô tuyến 6G mà không bị trễ.
**어휘 연결:** 응답 속도가 밀리초(ms) 단위로 매우 느린 볼로미터(Bolometer)나 골레이 셀(Golay cell)과 대조되며, 고속 데이터 통신과 실시간 이미징에 압도적인 우위를 점합니다.
**영어 참고:** *Terahertz Quantum Cascade Detector* (THz QCD) — Đầu dò thu nhận lượng tử siêu tốc độ cao trong dải sóng terahertz.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_quantum_cascade_detectors; context: advanced-quantum-cascade-detectors-and-thermal-sensing/quantum_cascade_detectors -->
### 미래중적외선광자검출공학
**품사:** 명사
**핵심 의미:** 중적외선 파장 대역에서 단일 광자 검출, 초고속 양자 센싱, 비냉각 열센서 고도화 및 온칩 집적화를 포괄적으로 연구하고 실용화하는 차세대 광전자 공학 학문·기술 분야.
**베트남어 뜻:** Kỹ thuật phát hiện photon hồng ngoại giữa tương lai (future mid-infrared photon detection engineering) — lĩnh vực kỹ thuật và học thuật quang điện tử thế hệ mới nghiên cứu toàn diện và ứng dụng thực tiễn việc phát hiện photon đơn lẻ, cảm biến lượng tử siêu cao tốc, nâng cấp cảm biến nhiệt không làm lạnh và tích hợp trên chip trong dải bước sóng hồng ngoại giữa.
**뉘앙스와 사용법:** 국가 전략 기술 보고서, 첨단 R&D 기획서 및 미래 광전자 학회 기조연설 등에서 포괄적인 학문 패러다임을 제시할 때 사용되는 중량감 있는 학술·정책 용어입니다. 분자 분광학, 양자 암호 통신, 국방 정찰, 우주 심우주 탐사 등 인류의 미래 산업과 안보를 견인할 핵심 원천 기술 생태계를 의미합니다.
**재사용 가능한 콜로케이션·청크:** 미래중적외선광자검출공학의 발전 방향 (phương hướng phát triển của kỹ thuật phát hiện photon hồng ngoại giữa tương lai); 미래중적외선광자검출공학 연구 과제 (đề tài nghiên cứu kỹ thuật phát hiện photon hồng ngoại giữa tương lai); 미래중적외선광자검출공학 선도 (dẫn đầu kỹ thuật phát hiện photon hồng ngoại giữa tương lai).
**자주 쓰는 문형과 성분:** 미래중적외선광자검출공학을 발전시키다; 미래중적외선광자검출공학 분야의 원천 기술을 확보하다.
**사회적 관계·주제별 register:** 국가 과학기술 전략, 미래 R&D 로드맵, 광학 공학 학술 담론 (공공·학술 최고위 격식체).
**예문:** 정부는 미래중적외선광자검출공학 분야를 국가 전략 기술로 지정하고 차세대 양자 센서 원천 기술 개발에 대규모 예산을 투입하고 있다.
**Dịch:** Chính phủ đã chỉ định lĩnh vực kỹ thuật phát hiện photon hồng ngoại giữa tương lai là công nghệ chiến lược quốc gia và đang rót ngân sách quy mô lớn vào việc phát triển công nghệ gốc cảm biến lượng tử thế hệ mới.
**어휘 연결:** 고전적인 광검출 소자 공학을 넘어 양자 얽힘, 서브밴드 물리학, 나노포토닉스가 집대성된 융합 미래 공학 체계를 나타냅니다.
**영어 참고:** *Future Mid-Infrared Photon Detection Engineering* — Ngành kỹ thuật phát hiện photon hồng ngoại trung thế hệ tiếp theo bao hàm cả cảm biến lượng tử và tích hợp quang tử.

---

## 읽기: 서브밴드 간 전자 전이와 무바이어스 구조로 중적외선 신호를 초고속 감지하는 양자폭포 검출기
<!-- passage_word_count: 105 Korean eojeol; target_set: 양자폭포광검출기소자, 서브밴드간광흡수광전자전이, 무바이어스초저잡음광검출, 중적외선대역고속광스위칭, 계단형양자우물엔지니어링, 고온작동비냉각적외선감지, 초고속헤테로다인분광검출, 포토닉크리스탈공진기집적소자, 광음향분광초정밀센서모듈, 다파장선택적적외선센싱, 암잡음전류원천적배제기술, 초고감도가스분석적외선소자, 반도체초격자밴드갭엔지니어링, 테라헤르츠양자폭포검출기, 미래중적외선광자검출공학 -->
현대 나노 광전자공학의 눈부신 발전 속에서 반도체초격자밴드갭엔지니어링 기반의 첨단 양자폭포광검출기소자가 차세대 광계측의 핵심으로 크게 부상하고 있다. 이 혁신적 소자는 서브밴드간광흡수광전자전이 현상을 정밀하게 활용하며 정교한 계단형양자우물엔지니어링 설계를 통해 외부 전압 인가 없이도 무바이어스초저잡음광검출을 완벽하게 구현한다. 특히 소자 내부의 암잡음전류원천적배제기술 덕분에 별도의 냉각기 없이도 고온작동비냉각적외선감지가 가능해졌으며, 나노 공정 기반의 포토닉크리스탈공진기집적소자 결합을 통해 미세 영역에서의 광반응 효율이 비약적으로 극대화되었다. 이러한 독보적 물리 특성은 중적외선대역고속광스위칭과 정밀 초고속헤테로다인분광검출을 거뜬히 실현하는 든든한 기술적 토대가 된다. 나아가 광음향분광초정밀센서모듈 및 복합 분석용 다파장선택적적외선센싱 체계와 긴밀히 융합되어 산업 안전용 초고감도가스분석적외선소자의 실용화를 크게 앞당기고 있다. 최근에는 동작 주파수를 대폭 확장하여 테라헤르츠양자폭포검출기 개발로 이어지며 차세대 무선 통신과 정밀 분광을 아우르는 미래중적외선광자검출공학의 새로운 지평을 힘차게 열어가고 있다.

**베트남어 번역:**
Trong sự phát triển vượt bậc của quang điện tử học nano hiện đại, linh kiện quang phát hiện thác lượng tử tiên tiến dựa trên nền tảng kỹ nghệ vùng cấm siêu mạng bán dẫn đang nổi lên mạnh mẽ như một cốt lõi của đo lường quang học thế hệ mới. Linh kiện mang tính đổi mới này tận dụng chuẩn xác hiện tượng chuyển dời quang điện tử hấp thụ quang giữa các tiểu dải, đồng thời hiện thực hóa hoàn hảo việc quang phát hiện độ nhiễu siêu thấp không cần điện áp phân cực mà không cần cấp điện áp ngoài nhờ thiết kế kỹ nghệ giếng lượng tử dạng bậc thang tinh xảo. Đặc biệt, nhờ công nghệ loại trừ tận gốc nhiễu dòng tối bên trong linh kiện, việc cảm biến hồng ngoại không làm lạnh vận hành ở nhiệt độ cao đã có thể thực hiện được mà không cần máy làm lạnh riêng biệt, và thông qua sự kết hợp linh kiện tích hợp bộ cộng hưởng tinh thể quang tử dựa trên quy trình nano, hiệu suất quang phản ứng trong vùng diện tích siêu vi đã được tối đa hóa nhảy vọt. Những đặc tính vật lý độc nhất vô nhị này trở thành nền tảng kỹ thuật vững chắc để hiện thực hóa dễ dàng chuyển mạch quang tốc độ cao dải hồng ngoại giữa và phân tích quang phổ tách sóng dị sai tốc độ siêu cao chính xác. Hơn nữa, việc dung hợp chặt chẽ với mô-đun cảm biến siêu chính xác quang phổ quang âm và hệ thống cảm biến hồng ngoại chọn lọc đa bước sóng dùng cho phân tích hỗn hợp phức tạp đang đẩy nhanh đáng kể sự thương mại hóa của linh kiện hồng ngoại phân tích khí độ nhạy cực cao dùng cho an toàn công nghiệp. Gần đây, việc mở rộng mạnh mẽ tần số hoạt động đang dẫn tới sự phát triển đầu dò thác lượng tử terahertz, mở ra mạnh mẽ chân trời mới của kỹ thuật phát hiện photon hồng ngoại giữa tương lai bao trùm cả thông tin không dây thế hệ mới và quang phổ chính xác.
