<!-- source_policy: original explanations, examples, and passage; neuromorphic auditory frontends and cochlea chips terminology cross-checked conceptually, not copied -->
# 뉴로모픽 청각 프런트엔드와 달팽이관 칩 기술

인간의 청각 신경계는 외부 소리의 물리적 파동을 기저막의 주파수별 공진과 유모세포의 기계-전기 변환 메커니즘을 통해 초저전력 스파이크 신경 신호로 변환하는 정교한 생체 신호 처리 시스템입니다. 최근 인공지능과 뉴로모픽 집적회로의 비약적인 발전에 힘입어, 생체 귓속 달팽이관의 주파수 분할과 신경 발화 원리를 실리콘 칩으로 직접 모사하여 수십 마이크로와트 수준에서 음향을 실시간 분석하는 차세대 청각 프런트엔드 하드웨어가 급부상하고 있습니다. 본 단원에서는 뉴로모픽 전자 달팽이관 칩과 아날로그 필터 뱅크 어레이, 생체모사 이청 신호 처리 회로, 초저전력 음성 패턴 추출 소자 및 신경 보철 인터페이스에 이르는 최첨단 생체모사 청각 공학의 핵심 전문 어휘 15개를 심층적으로 학습합니다.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/neuromorphic_electronic_cochlea_chip -->
### 뉴로모픽전자달팽이관칩
**품사:** 명사
**핵심 의미:** 인간 내이 달팽이관의 해부학적 구조와 기계-전기 음향 변환 원리를 반도체 집적회로로 모사하여, 음향 신호를 주파수별로 분해하고 저전력 스파이크 신경 신호로 실시간 출력하는 초저전력 생체모사 칩.
**베트남어 뜻:** Chip ốc tai điện tử neuromorphic (Neuromorphic electronic cochlea chip) — Vi mạch tích hợp bán dẫn mô phỏng sinh học cấu trúc giải phẫu và nguyên lý chuyển đổi cơ - điện của ốc tai người, có khả năng phân giải tín hiệu âm thanh theo từng dải tần và chuyển thành chuỗi xung thần kinh thính giác (spike trains) theo thời gian thực với mức tiêu thụ điện năng cực thấp.
**뉘앙스와 사용법:** 기존의 디지털 오디오 신호 처리 방식(Nyquist-Shannon sampling, FFT)이 주기적인 고속 연산 클록으로 인해 수 밀리와트(mW) 이상의 전력을 소모하는 반면, 뉴로모픽전자달팽이관칩(chip ốc tai điện tử neuromorphic)은 아날로그 서브스레숄드(subthreshold) 회로를 활용하여 수십 마이크로와트(μW) 수준의 극저전력으로 구동됩니다. 소리의 주파수 분석과 시간 정보 인코딩이 하드웨어 물리 레벨에서 동시에 일어나므로, 올웨이즈온(always-on) 음성 인식 기기나 차세대 체내 이식형 인공와우(cochlear implant) 프로세서의 핵심 소자로 논의됩니다. 학술 논문 및 고성능 반도체 로드맵에서 생체 청각 신경계를 하드웨어로 구현한 최첨단 프로세서를 지칭할 때 표준적으로 사용됩니다. — (chip ốc tai điện tử neuromorphic)
**재사용 가능한 콜로케이션·청크:** 뉴로모픽전자달팽이관칩을 개발하다 (phát triển chip ốc tai điện tử neuromorphic), 초저전력 뉴로모픽전자달팽이관칩 (chip ốc tai điện tử neuromorphic siêu tiết kiệm điện), 뉴로모픽전자달팽이관칩 기반 음성 프런트엔드 (bộ phận đầu cuối âm thanh dựa trên chip ốc tai điện tử neuromorphic), 뉴로모픽전자달팽이관칩의 다채널 주파수 응답 (đáp ứng tần số đa kênh của chip ốc tai điện tử neuromorphic).
**자주 쓰는 문형과 성분:** [연구진/개발팀]이 뉴로모픽전자달팽이관칩을 [서술어: 설계하다/집적하다]; 뉴로모픽전자달팽이관칩(은/는) [외부 음향 신호]를 [서술어: 스파이크 열로 변환하여 출력하다].
**사회적 관계·주제별 register:** 뉴로모픽 공학 학술대회(IEEE ISSCC, ISCAS), 생체모사 집적회로 저널, 차세대 지능형 반도체 연구 포럼의 공식 전문 학술체.
**예문:** 연구진은 아날로그 회로 기법을 적용하여 전력 소모를 수십 마이크로와트 수준으로 낮춘 뉴로모픽전자달팽이관칩을 성공적으로 제작하였다.
**Dịch:** Nhóm nghiên cứu đã chế tạo thành công chip ốc tai điện tử neuromorphic hạ mức tiêu thụ điện năng xuống cấp độ vài chục microwatt bằng cách áp dụng kỹ thuật mạch tương tự.
**어휘 연결:** 일반적인 디지털 신호 처리기(DSP: Digital Signal Processor)가 고정 클록 주기에 맞춰 디지털 샘플을 순차 처리하는 것과 달리, 생체 청각 구조를 물리 회로로 직접 모방하여 비동기 이벤트 기반으로 작동하는 '생체모사형 신경 모철 회로(biomimetic neuromorphic circuit)' 범주에 속합니다.
**영어 참고:** *Neuromorphic electronic cochlea chip* — Chip ốc tai điện tử neuromorphic, vi mạch phần cứng mô phỏng toàn diện cơ chế lọc tần số cơ học và phát xung thần kinh của ốc tai sinh học.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/analogue_auditory_filter_bank_array -->
### 아날로그청각필터뱅크어레이
**품사:** 명사
**핵심 의미:** 달팽이관 기저막의 연속적인 주파수 필터링 특성을 모사하여, 가청 주파수 대역을 수십에서 수백 개의 대역통과 필터로 병렬 분할하는 아날로그 집적회로 배열 구조.
**베트남어 뜻:** Mảng bộ lọc thính giác tương tự (Analogue auditory filter bank array) — Cấu trúc mảng vi mạch tương tự bố trí song song hàng chục đến hàng trăm bộ lọc thông dải (bandpass filters), mô phỏng cơ chế lọc tần số âm thanh liên tục của màng đáy ốc tai từ tần số cao đến tần số thấp.
**뉘앙스와 사용법:** 인간 달팽이관의 유체역학적 파동 및 기저막의 강성(stiffness) 변화를 전기적 모델로 치환한 회로망입니다. 주로 전계효과 트랜지스터(MOSFET)의 서브스레숄드 영역(subthreshold region)이나 로그 도메인(log-domain), gm-C 필터 기법을 사용하여 극소 전류로 넓은 동적 범위(dynamic range)와 비선형 압축 특성을 구현합니다. 푸리에 변환(FFT) 없이도 하드웨어 자체에서 음향 파형의 주파수 분해가 즉각적으로 이루어지므로, 초저지연·초저전력 음향 프런트엔드 회로의 핵심 뼈대로 사용됩니다. — (mảng bộ lọc thính giác tương tự)
**재사용 가능한 콜로케이션·청크:** 아날로그청각필터뱅크어레이를 집적하다 (tích hợp mảng bộ lọc thính giác tương tự), 다채널 아날로그청각필터뱅크어레이 (mảng bộ lọc thính giác tương tự đa kênh), 아날로그청각필터뱅크어레이의 주파수 선택도 (độ chọn lọc tần số của mảng bộ lọc thính giác tương tự), 서브스레숄드 기반 아날로그청각필터뱅크어레이 (mảng bộ lọc thính giác tương tự dựa trên miền dưới ngưỡng).
**자주 쓰는 문형과 성분:** 아날로그청각필터뱅크어레이(이/가) [음향 신호]를 [서술어: 주파수 대역별로 병렬 분할하다]; [회로 설계 기술]을 적용한 아날로그청각필터뱅크어레이.
**사회적 관계·주제별 register:** 아날로그 VLSI 회로 설계 학회, 바이오메디컬 집적시스템 논문, 센서 인터페이스 기술 보고서.
**예문:** 새롭게 제안된 아날로그청각필터뱅크어레이 구조는 64개 채널을 통해 가청 주파수를 정밀하게 나누면서도 총 소비 전력을 5마이크로와트 이하로 억제하였다.
**Dịch:** Cấu trúc mảng bộ lọc thính giác tương tự mới được đề xuất phân chia chính xác các dải tần số nghe được thông qua 64 kênh trong khi vẫn khống chế tổng mức tiêu thụ điện dưới 5 microwatt.
**어휘 연결:** 디지털 연산으로 주파수를 쪼개는 '디지털 필터 뱅크(digital filter bank)'와 대비되며, 개별 필터 회로가 병렬 집적되어 달팽이관 칩의 공간적 주파수 맵을 형성하는 '기저막주파수공간분할모방'의 물리적 구현체입니다.
**영어 참고:** *Analogue auditory filter bank array* — Mảng bộ lọc thính giác tương tự, hệ thống các bộ lọc tương tự song song mô phỏng phản ứng cộng hưởng cơ học của từng vị trí trên màng đáy ốc tai.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/biomimetic_binaural_signal_processing_circuit -->
### 생체모사이청신호처리회로
**품사:** 명사
**핵심 의미:** 양쪽 귀로 들어오는 소리 간의 미세한 시간차(ITD)와 강도차(ILD)를 신경 회로망 수준에서 비교·처리하여 3차원 공간 음원의 위치를 추적하고 소음을 분리하는 생체모사 집적회로.
**베트남어 뜻:** Mạch xử lý tín hiệu hai tai mô phỏng sinh học (Biomimetic binaural signal processing circuit) — Mạch tích hợp mô phỏng cách hệ thống thần kinh thính giác của sinh vật so sánh và xử lý chênh lệch thời gian giữa hai tai (ITD) và chênh lệch mức âm giữa hai tai (ILD) để định vị nguồn âm 3 chiều trong không gian và triệt tiêu tiếng ồn.
**뉘앙스와 사용법:** 인간이나 올빼미 등 조류의 뇌간(brainstem)에 위치한 상올리브핵(Superior Olivary Complex)의 제프리스 모델(Jeffress delay-line model)을 반도체로 재현한 회로입니다. 양이(binaural) 청각 메커니즘을 칩 상에서 직접 모방하여, 좌우 채널에서 들어오는 비동기 스파이크 신호 간의 일치 감지(coincidence detection)를 피코초~마이크로초 단위의 정밀도로 수행합니다. 이를 통해 복잡한 반사음과 배경 소음이 존재하는 환경에서도 원하는 화자의 음성을 분리(cocktail party effect 해결)하는 핵심 신경망 모듈로 평가받습니다. — (mạch xử lý tín hiệu hai tai mô phỏng sinh học)
**재사용 가능한 콜로케이션·청크:** 생체모사이청신호처리회로를 구현하다 (hiện thực hóa mạch xử lý tín hiệu hai tai mô phỏng sinh học), 생체모사이청신호처리회로의 일치 감지 기능 (chức năng phát hiện trùng hợp của mạch xử lý tín hiệu hai tai mô phỏng sinh học), 온칩 생체모사이청신호처리회로 (mạch xử lý tín hiệu hai tai mô phỏng sinh học tích hợp trực tiếp trên chip).
**자주 쓰는 문형과 성분:** 생체모사이청신호처리회로(은/는) [좌우 마이크로폰 신호]의 시간차를 분석하여 [서술어: 음원의 방향각을 산출하다]; [뇌간 신경망]을 모사한 생체모사이청신호처리회로.
**사회적 관계·주제별 register:** 뉴로모픽 로보틱스, 청각 신경공학 심포지엄, 자율주행 오디오 센싱 기술 특허 명세서.
**예문:** 생체모사이청신호처리회로는 양이 간 미세한 시간차를 하드웨어 일치 감지기로 즉각 계산하여 음원의 방위각을 1도 이내의 오차로 찾아낸다.
**Dịch:** Mạch xử lý tín hiệu hai tai mô phỏng sinh học tính toán tức thì sự chênh lệch thời gian cực nhỏ giữa hai tai bằng bộ phát hiện trùng hợp phần cứng, xác định góc phương vị của nguồn âm với sai số dưới 1 độ.
**어휘 연결:** 단일 마이크 입력만을 분석하는 '모노럴(monaural) 신호 처리 회로'와 대비되며, '실시간음원위치추적알고리즘'을 하드웨어적으로 초고속 구동하는 물리적 연산 플랫폼입니다.
**영어 참고:** *Biomimetic binaural signal processing circuit* — Mạch xử lý tín hiệu hai tai mô phỏng sinh học, vi mạch phỏng sinh học phân tích tương quan thời gian và biên độ giữa hai kênh tai để định vị không gian âm thanh.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/spiking_auditory_neuron_emulation -->
### 스파이킹청각신경세포모사
**품사:** 명사
**핵심 의미:** 실제 청각 신경 섬유(ANF)가 음향 자극에 반응하여 활동전위(스파이크)를 생성하는 생물학적 메커니즘인 위상 동기화, 불응기, 발화율 적응 현상을 전자 소자나 회로로 정밀하게 흉내 내는 기술.
**베트남어 뜻:** Mô phỏng tế bào thần kinh thính giác dạng xung (Spiking auditory neuron emulation) — Kỹ thuật vi điện tử mô phỏng chính xác cơ chế sinh học mà các sợi thần kinh thính giác (ANF) tạo ra điện thế hoạt động (xung thần kinh) khi đáp ứng với kích thích âm thanh, bao gồm hiện tượng khóa pha (phase-locking), chu kỳ trơ (refractory period) và thích ứng tốc độ phát xung.
**뉘앙스와 사용법:** 단순한 이진 펄스 발생기를 넘어, 실제 생체 뉴런의 이온 통로 개폐 동역학(Hodgkin-Huxley 모델 또는 Integrate-and-Fire 모델)을 물리적으로 재현하는 기술입니다. 특히 저주파 음향 파형의 위상에 맞춰 스파이크를 방출하는 위상 잠금(phase-locking)과, 지속적인 강한 자극에 발화 빈도를 조절하는 발화율 적응(spike-frequency adaptation) 특성을 정확히 모방해야만 뇌가 인지하는 자연스러운 청각 정보가 복원됩니다. 차세대 신경 보철 및 스파이킹 신경망(SNN) 오디오 모델링에서 핵심 공학 기법으로 쓰입니다. — (mô phỏng tế bào thần kinh thính giác dạng xung)
**재사용 가능한 콜로케이션·청크:** 스파이킹청각신경세포모사를 실현하다 (hiện thực hóa việc mô phỏng tế bào thần kinh thính giác dạng xung), 정밀한 스파이킹청각신경세포모사 (mô phỏng tế bào thần kinh thính giác dạng xung một cách chuẩn xác), 스파이킹청각신경세포모사 회로의 발화 특성 (đặc tính phát xung của mạch mô phỏng tế bào thần kinh thính giác dạng xung).
**자주 쓰는 문형과 성분:** [하드웨어 소자]를 통해 스파이킹청각신경세포모사(을/를) [서술어: 충실히 수행하다]; 스파이킹청각신경세포모사(이/가) [음향 특징 전달]에 [서술어: 핵심적 역할을 하다].
**사회적 관계·주제별 register:** 계산 신경과학(Computational Neuroscience), 뉴로모픽 인공신경망 학회, 인공 청각 보철 임상 연구회.
**예문:** 연구팀은 누적 방전 회로를 고도화하여 실제 청각 신경의 위상 잠금 및 불응기 동역학을 완벽히 재현한 스파이킹청각신경세포모사를 달성하였다.
**Dịch:** Nhóm nghiên cứu đã nâng cấp mạch tích lũy và phóng điện (integrate-and-fire) để đạt được sự mô phỏng tế bào thần kinh thính giác dạng xung tái hiện hoàn hảo động lực học khóa pha và chu kỳ trơ của dây thần kinh thính giác thực tế.
**어휘 연결:** 추상적인 수학적 인공신경망(ANN)의 가중치 연산과 대비되는 개념으로, 시간축 상의 개별 스파이크 발생 순간(spike timing)에 정보를 담는 '생체모사 스파이킹 신경망(biomimetic SNN)'의 단위 세포 구현 기술입니다.
**영어 참고:** *Spiking auditory neuron emulation* — Kỹ thuật mô phỏng tế bào thần kinh thính giác dạng xung, việc tái tạo đặc tính điện sinh lý phát xung rời rạc của các sợi thần kinh thính giác sinh học trên vi mạch.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/ultra_low_power_voice_pattern_extraction_device -->
### 초저전력음성패턴추출소자
**품사:** 명사
**핵심 의미:** 주변 소음 속에서 사람의 발화 구간 및 고유한 음성 특징 패턴만을 나노와트(nW)에서 마이크로와트(μW) 수준의 극소 전력으로 실시간 검출·추출하는 초소형 반도체 소자.
**베트남어 뜻:** Linh kiện trích xuất mẫu giọng nói siêu tiết kiệm điện (Ultra-low-power voice pattern extraction device) — Linh kiện bán dẫn siêu nhỏ gọn có khả năng phát hiện vùng tiếng nói của con người và trích xuất các mẫu đặc trưng giọng nói đặc thù theo thời gian thực giữa môi trường nhiều tiếng ồn với mức tiêu thụ điện năng cực nhỏ ở cấp độ nanowatt đến microwatt.
**뉘앙스와 사용법:** 스마트폰, 웨어러블 기기, AI 이어폰의 배터리 수명을 획기적으로 늘리기 위한 항시 대기(Always-On) 음성 활성화(VAD: Voice Activity Detection) 및 키워드 검출(KWS) 회로에 탑재되는 핵심 하드웨어입니다. 주 프로세서가 수면(sleep) 모드에 있을 때 극미량의 누설 전류 수준으로 소리를 상시 감시하다가, 인간 음성의 고유한 포먼트(formant) 및 포락선(envelope) 패턴이 감지될 때만 깨어남(wake-up) 신호를 발생시킵니다. 엣지 AI 디바이스의 전력 효율을 극한으로 끌어올리는 소자로 널리 응용됩니다. — (linh kiện trích xuất mẫu giọng nói siêu tiết kiệm điện)
**재사용 가능한 콜로케이션·청크:** 초저전력음성패턴추출소자를 탑재하다 (trang bị linh kiện trích xuất mẫu giọng nói siêu tiết kiệm điện), 나노와트급 초저전력음성패턴추출소자 (linh kiện trích xuất mẫu giọng nói siêu tiết kiệm điện cấp độ nanowatt), 초저전력음성패턴추출소자의 검출 감도 (độ nhạy phát hiện của linh kiện trích xuất mẫu giọng nói siêu tiết kiệm điện).
**자주 쓰는 문형과 성분:** 초저전력음성패턴추출소자(이/가) [음성 신호]를 감지하여 [서술어: 메인 프로세서를 깨우다]; [소자기술]에 기반한 초저전력음성패턴추출소자.
**사회적 관계·주제별 register:** 저전력 엣지 AI 하드웨어 심포지엄, 모바일 임베디드 시스템 엔지니어링, 스마트 센서 반도체 전시회.
**예문:** 웨어러블 스마트 기기에 내장된 초저전력음성패턴추출소자는 50나노와트 미만의 대기 전력만으로 사용자의 음성 명령 시작점을 오차 없이 포착한다.
**Dịch:** Linh kiện trích xuất mẫu giọng nói siêu tiết kiệm điện tích hợp trong thiết bị thông minh đeo trên người có thể bắt trọn điểm bắt đầu câu lệnh giọng nói của người dùng mà không có sai số chỉ với công suất chờ dưới 50 nanowatt.
**어휘 연결:** 복잡한 음성 인식을 전담하는 '고성능 신경망 가속기(NPU)'의 전단에서 게이트키퍼(gatekeeper) 역할을 수행하여 불필요한 시스템 전력 낭비를 차단하는 역할을 합니다.
**영어 참고:** *Ultra-low-power voice pattern extraction device* — Linh kiện trích xuất mẫu giọng nói siêu tiết kiệm điện, linh kiện biên nano công suất cực thấp chuyên nhận diện bao hình tiếng nói phục vụ kích hoạt hệ thống tự động.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/basilar_membrane_tonotopic_mapping_mimicry -->
### 기저막주파수공간분할모방
**품사:** 명사
**핵심 의미:** 달팽이관 기저막의 입구(난원창 부근)는 고주파에, 끝부분(달팽이관 정점)은 저주파에 최대 공진 반응을 나타내는 생물학적 주파수-공간 배치(토노토피, Tonotopy) 특성을 인공 칩 상의 물리적 좌표로 충실히 모방하는 기술.
**베트남어 뜻:** Phỏng sinh học phân chia tần số theo không gian của màng đáy (Basilar membrane frequency-to-space division mimicry / tonotopic mapping mimicry) — Kỹ thuật mô phỏng trên tọa độ vật lý của vi mạch nguyên lý bản đồ phân bố vị trí - tần số (tonotopy) sinh học của màng đáy ốc tai, nơi đáy ốc tai (gần cửa sổ bầu dục) đáp ứng cộng hưởng cực đại với tần số cao còn đỉnh ốc tai đáp ứng với tần số thấp.
**뉘앙스와 사용법:** 인간 청각 시스템이 복잡한 음향 파동을 어떻게 즉각적으로 스펙트럼 분해하는지 설명하는 가장 핵심적인 생체물리학적 원리를 공학적으로 이식하는 개념입니다. 칩의 실리콘 다이(die) 상에 필터들을 일렬로 배치할 때 물리적 기하 구조와 전달 특성을 기저막의 지수함수적 강성 구배(exponential stiffness gradient)에 맞추어 설계함으로써, 순수한 아날로그 파동 전파 메커니즘만으로 주파수를 공간적으로 분리해 냅니다. 기계적·전기적 달팽이관 모사 연구의 학술적 근간을 이루는 전문 용어입니다. — (phỏng sinh học phân chia tần số theo không gian của màng đáy)
**재사용 가능한 콜로케이션·청크:** 기저막주파수공간분할모방 원리를 적용하다 (áp dụng nguyên lý phỏng sinh học phân chia tần số theo không gian của màng đáy), 기저막주파수공간분할모방 기반 칩 설계 (thiết kế chip dựa trên phỏng sinh học phân chia tần số theo không gian của màng đáy), 정교한 기저막주파수공간분할모방 구조 (cấu trúc phỏng sinh học phân chia tần số theo không gian của màng đáy tinh vi).
**자주 쓰는 문형과 성분:** [반도체 회로/소자]가 기저막주파수공간분할모방(을/를) [서술어: 충실히 재현하다]; 기저막주파수공간분할모방에 의해 [복합 음향 신호]가 [서술어: 위치별 채널로 정렬되다].
**사회적 관계·주제별 register:** 생체모사 바이오닉스 논문, 음향학 및 청각학 학술지, 뉴로모픽 마이크로시스템 엔지니어링.
**예문:** 이번 칩은 기저막주파수공간분할모방 설계를 통해 입력된 복합 음향 파동을 별도의 수치 계산 없이 기하학적 채널 좌표에 맞춰 즉각 분리해 낸다.
**Dịch:** Con chip lần này thông qua thiết kế phỏng sinh học phân chia tần số theo không gian của màng đáy đã tách tức thì sóng âm thanh phức hợp được đưa vào theo đúng tọa độ kênh hình học mà không cần bất kỳ phép tính toán số học nào.
**어휘 연결:** 소프트웨어적인 주파수 변환 알고리즘(예: FFT)과 대비되며, 하드웨어 공간 좌표 상에 주파수 응답을 물리적으로 매핑하는 '토노토픽 아키텍처(tonotopic architecture)'의 핵심입니다.
**영어 참고:** *Basilar membrane frequency-to-space division mimicry* — Phỏng sinh học phân chia tần số theo không gian của màng đáy, kỹ thuật mô phỏng bản đồ phân bố vị trí - tần số (tonotopy) của màng đáy ốc tai trên cấu trúc vi mạch bán dẫn.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/on_chip_real_time_voice_feature_encoding -->
### 온칩실시간음성특징인코딩
**품사:** 명사
**핵심 의미:** 입력된 음성 신호로부터 스펙트럼 에너지, 피치, 포먼트, 스파이크 타이밍 등의 음향 특징을 외부 메모리나 중앙 처리 장치의 개입 없이 단일 칩 내부에서 지연 시간 제로에 가깝게 디지털 또는 스파이크 코드로 변환하는 동작.
**베트남어 뜻:** Mã hóa đặc trưng giọng nói theo thời gian thực trực tiếp trên chip (On-chip real-time voice feature encoding) — Thao tác trích xuất và biến đổi các đặc trưng âm học như năng lượng phổ, cao độ, formant, định thời xung từ tín hiệu giọng nói đầu vào thành mã số hoặc mã xung trực tiếp bên trong một vi mạch duy nhất với độ trễ gần như bằng không mà không cần can thiệp của bộ nhớ ngoài hay CPU trung tâm.
**뉘앙스와 사용법:** 클라우드 서버나 고성능 GPU로 음성 데이터를 전송하여 처리하는 기존 AI 음성 시스템의 데이터 병목 및 개인정보 노출 위험을 해소하기 위한 엣지 컴퓨팅의 필수 요건입니다. 센서단에서 즉각 특징 추출과 인코딩이 완료되므로 전송해야 할 데이터 용량이 99% 이상 급감하며, 로봇의 즉각적인 음성 명령 반응이나 긴급 위험 소리 대응에 결정적인 초저지연성을 보장합니다. — (mã hóa đặc trưng giọng nói theo thời gian thực trực tiếp trên chip)
**재사용 가능한 콜로케이션·청크:** 온칩실시간음성특징인코딩 기술을 도입하다 (áp dụng công nghệ mã hóa đặc trưng giọng nói theo thời gian thực trực tiếp trên chip), 온칩실시간음성특징인코딩의 효율성 (hiệu quả của mã hóa đặc trưng giọng nói theo thời gian thực trực tiếp trên chip), 초고속 온칩실시간음성특징인코딩 모듈 (mô-đun mã hóa đặc trưng giọng nói theo thời gian thực trực tiếp trên chip siêu tốc).
**자주 쓰는 문형과 성분:** [뉴로모픽 프로세서]가 온칩실시간음성특징인코딩(을/를) [서술어: 지연 없이 수행하다]; 온칩실시간음성특징인코딩을 거쳐 [음성 데이터]가 [서술어: 압축 스파이크 열로 변환되다].
**사회적 관계·주제별 register:** 인공지능 엣지 프로세서 로드맵, 지능형 센서 시스템 학술지, 온디바이스 AI 특허 문서.
**예문:** 온칩실시간음성특징인코딩 기술을 적용한 오디오 센서는 데이터 전송 대역폭을 획기적으로 줄여 배터리 교체 주기를 5배 이상 연장시켰다.
**Dịch:** Cảm biến âm thanh ứng dụng công nghệ mã hóa đặc trưng giọng nói theo thời gian thực trực tiếp trên chip đã giảm thiểu đột phá băng thông truyền tải dữ liệu, kéo dài chu kỳ thay pin lên hơn 5 lần.
**어휘 연결:** 소프트웨어 라이브러리(Librosa 등) 기반의 후처리 '오프라인 음향 특징 추출(offline acoustic feature extraction)'과 대비되며, 센서 하드웨어 내부에서 실시간으로 완결되는 프로세스입니다.
**영어 참고:** *On-chip real-time voice feature encoding* — Mã hóa đặc trưng giọng nói theo thời gian thực trực tiếp trên chip, quá trình nén và biến đổi thông tin âm học thành mã nơ-ron ngay trên phần cứng cảm biến.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/auditory_hair_cell_electrophysiology_circuit -->
### 청각유모세포전기생리회로
**품사:** 명사
**핵심 의미:** 달팽이관 내부의 내유모세포(IHC)와 외유모세포(OHC)에서 일어나는 기계-전기 변환(MET), 비선형 능동 증폭, 순방향 반파 정류 및 수용체 전위 발생 과정을 모사한 미세 아날로그 전자 회로.
**베트남어 뜻:** Mạch điện sinh lý tế bào lông thính giác (Auditory hair cell electrophysiology circuit) — Mạch điện tử tương tự vi mô mô phỏng quá trình dẫn truyền cơ - điện (MET), khuếch đại chủ động phi tuyến, chỉnh lưu nửa chu kỳ và tạo điện thế thụ cảm diễn ra tại các tế bào lông trong (IHC) và tế bào lông ngoài (OHC) bên trong ốc tai.
**뉘앙스와 사용법:** 인간 귀가 120dB에 달하는 광범위한 음압 동적 범위를 수용하면서도 극미한 소리까지 감지할 수 있는 비결은 유모세포의 능동 피드백 증폭(outer hair cell motility)과 반파 정류(half-wave rectification) 메커니즘 덕분입니다. 청각유모세포전기생리회로는 트랜지스터의 비선형 포화 및 능동 피드백 회로를 통해 생체 유모세포의 전기적 거동을 완벽히 하드웨어화합니다. 이를 통해 매우 작은 속삭임은 수천 배 증폭하고 폭발음 같은 거대 음향은 자연스럽게 압축하여 후단 신경 회로를 보호하는 탁월한 음향 신호 처리 성능을 제공합니다. — (mạch điện sinh lý tế bào lông thính giác)
**재사용 가능한 콜로케이션·청크:** 청각유모세포전기생리회로를 설계하다 (thiết kế mạch điện sinh lý tế bào lông thính giác), 청각유모세포전기생리회로의 반파 정류 특성 (đặc tính chỉnh lưu nửa sóng của mạch điện sinh lý tế bào lông thính giác), 능동 증폭형 청각유모세포전기생리회로 (mạch điện sinh lý tế bào lông thính giác khuếch đại chủ động).
**자주 쓰는 문형과 성분:** 청각유모세포전기생리회로(은/는) [기계적 음파 진동]을 [서술어: 신경 수용체 전위로 정류 및 증폭하다]; [생체 이온 채널 거동]을 모방한 청각유모세포전기생리회로.
**사회적 관계·주제별 register:** 바이오닉 일렉트로닉스 학술 저널, 감각 기관 재생 의공학 학회, 생체모사 아날로그 회로 연구소.
**예문:** 집적된 청각유모세포전기생리회로는 외유모세포의 전기역학적 증폭 특성을 흉내 내어 미약한 미세 음향의 수신 감도를 40데시벨 이상 비약적으로 향상시켰다.
**Dịch:** Mạch điện sinh lý tế bào lông thính giác tích hợp mô phỏng đặc tính khuếch đại cơ - điện của tế bào lông ngoài, nâng cao vượt bậc độ nhạy thu nhận âm thanh vi mô yếu lên hơn 40 decibel.
**어휘 연결:** 필터 뱅크가 담당하는 거시적 주파수 분리 단계 다음에서 신호의 크기를 동적으로 제어하고 신경 발화용 전위로 정류하는 '생체 변환기(biological transducer)' 회로 모델입니다.
**영어 참고:** *Auditory hair cell electrophysiology circuit* — Mạch điện sinh lý tế bào lông thính giác, vi mạch tương tự tái tạo cơ chế khuếch đại phi tuyến và chỉnh lưu điện thế màng của tế bào lông trong ốc tai.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/noise_robust_voice_recognition_system -->
### 잡음환경강인음성인지시스템
**품사:** 명사
**핵심 의미:** 공장 소음, 도로 소음, 다중 화자 음성 등 복잡하고 극심한 배경 소음과 반사음이 뒤섞인 가혹한 청각 환경에서도 화자의 음성을 높은 정확도로 명료하게 인식하고 해석하는 인공 청각 시스템.
**베트남어 뜻:** Hệ thống nhận dạng giọng nói kháng nhiễu môi trường (Noise-robust voice recognition system in noisy environments) — Hệ thống thính giác nhân tạo có khả năng nhận biết và giải mã giọng nói của người nói với độ chính xác cao ngay giữa môi trường âm thanh khắc nghiệt bị xáo trộn bởi tiếng ồn nền phức tạp như tiếng ồn nhà máy, giao thông hoặc nhiều người cùng nói.
**뉘앙스와 사용법:** 통상적인 딥러닝 음성 인식기는 조용한 환경에서 높은 성능을 보이지만 음수 신호대잡음비(SNR < 0dB)나 급격한 충격성 소음 환경에서는 인식률이 급락합니다. 잡음환경강인음성인지시스템(hệ thống nhận dạng giọng nói kháng nhiễu môi trường)은 생체 뇌의 청각 피질이 작동하는 스파이크 타이밍 기반 잡음 억제, 이청 신호 시간차 분리, 적응형 이득 제어를 유기적으로 결합하여 인간처럼 소음 속에서도 특정 목소리를 또렷하게 걸러내는 칵테일 파티 효과(cocktail party effect)를 산업적 수준으로 구현할 때 필수적인 용어입니다. — (hệ thống nhận dạng giọng nói kháng nhiễu môi trường)
**재사용 가능한 콜로케이션·청크:** 잡음환경강인음성인지시스템을 구축하다 (xây dựng hệ thống nhận dạng giọng nói kháng nhiễu môi trường), 고신뢰성 잡음환경강인음성인지시스템 (hệ thống nhận dạng giọng nói kháng nhiễu môi trường có độ tin cậy cao), 잡음환경강인음성인지시스템의 단어 인식률 (tỷ lệ nhận dạng từ của hệ thống nhận dạng giọng nói kháng nhiễu môi trường).
**자주 쓰는 문형과 성분:** [스파이킹 신경망 기반 알고리즘]을 통해 잡음환경강인음성인지시스템(을/를) [서술어: 실현하다/검증하다]; 잡음환경강인음성인지시스템(이/가) [산업 현장]에서 [서술어: 탁월한 인식 성능을 보이다].
**사회적 관계·주제별 register:** 산업용 스마트 팩토리 제어 솔루션, 음성 인터페이스 AI 표준화 기구, 방위 산업 군용 통신 음향 체계 보고서.
**예문:** 뉴로모픽 청각 필터를 결합한 잡음환경강인음성인지시스템은 공장 소음이 90데시벨에 육박하는 환경에서도 98% 이상의 음성 명령 인식 성공률을 달성하였다.
**Dịch:** Hệ thống nhận dạng giọng nói kháng nhiễu môi trường kết hợp bộ lọc thính giác neuromorphic đã đạt tỷ lệ nhận dạng khẩu lệnh thành công trên 98% ngay cả trong môi trường tiếng ồn nhà máy xấp xỉ 90 decibel.
**어휘 연결:** 이상적인 무소음 연구실 환경에서만 동작하는 '일반 음성 인식기(standard ASR system)'와 대비되며, 가혹한 실환경 배치를 목표로 하는 고신뢰성 AI 음향 플랫폼입니다.
**영어 참고:** *Noise-robust voice recognition system* — Hệ thống nhận dạng giọng nói kháng nhiễu môi trường, hệ thống xử lý tiếng nói tiên tiến duy trì độ chính xác cao trong môi trường âm học cực đoan và nhiều tạp âm.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/asynchronous_event_based_auditory_sensor -->
### 비동기사건기반청각센서
**품사:** 명사
**핵심 의미:** 고정된 주기의 주기적 샘플링(클록) 없이, 각 주파수 채널의 음향 에너지가 특정 임계값을 초과하여 변화할 때만 비동기적으로 스파이크 이벤트 패킷을 생성·전송하는 생체모사 오디오 센서.
**베트남어 뜻:** Cảm biến thính giác dựa trên sự kiện bất đồng bộ / Cảm biến AEMS (Asynchronous event-based auditory sensor) — Cảm biến âm thanh phỏng sinh học neuromorphic hoạt động không phụ thuộc vào xung nhịp đồng hồ lấy mẫu định kỳ, chỉ phát ra các gói sự kiện xung (spike event packets) một cách bất đồng bộ khi năng lượng âm thanh ở từng kênh tần số vượt qua ngưỡng biến thiên xác định.
**뉘앙스와 사용법:** 뉴로모픽 비전의 DVS(Dynamic Vision Sensor)에 대응하는 청각 분야의 혁신적인 센서 하드웨어입니다. 소리가 없는 묵음 구간에서는 전력을 전혀 소모하지 않고 데이터도 방출하지 않으며, 소리의 변화가 감지되는 순간에만 마이크로초 단위의 정밀한 시간 타임스탬프와 주파수 채널 주소를 담은 주소 이벤트(AER: Address Event Representation) 패킷을 내보냅니다. 이를 통해 불필요한 데이터 낭비를 제거하고 극단적인 정보 압축과 초저지연성을 동시에 달성합니다. — (cảm biến thính giác dựa trên sự kiện bất đồng bộ)
**재사용 가능한 콜로케이션·청크:** 비동기사건기반청각센서를 제작하다 (chế tạo cảm biến thính giác dựa trên sự kiện bất đồng bộ), 비동기사건기반청각센서의 시간 해상도 (độ phân giải thời gian của cảm biến thính giác dựa trên sự kiện bất đồng bộ), 고속 비동기사건기반청각센서 모듈 (mô-đun cảm biến thính giác dựa trên sự kiện bất đồng bộ tốc độ cao).
**자주 쓰는 문형과 성분:** 비동기사건기반청각센서(은/는) [음향 변화 사건]에만 반응하여 [서술어: 이벤트 스트림을 방출하다]; [저전력 감시 장치]에 비동기사건기반청각센서(을/를) [서술어: 장착하다].
**사회적 관계·주제별 register:** 차세대 센서 공학 학술 대회, 이벤트 기반 로보틱스 포럼, 초저전력 IoT 하드웨어 컨소시엄.
**예문:** 비동기사건기반청각센서는 대기 상태에서 전력 소모가 거의 없어 배터리 구동 사물인터넷 노드의 지능형 음향 감시 장치로 최적의 특성을 갖추고 있다.
**Dịch:** Cảm biến thính giác dựa trên sự kiện bất đồng bộ hầu như không tiêu thụ điện năng ở trạng thái chờ, sở hữu đặc tính tối ưu để làm thiết bị giám sát âm thanh thông minh cho các nút IoT chạy pin.
**어휘 연결:** 고정 샘플링 레이트(44.1kHz, 48kHz 등)로 프레임 데이터를 지속 생성하는 '동기식 나이퀴스트 마이크로폰(synchronous Nyquist microphone)'과 근본적으로 차별화되는 뉴로모픽 센싱 패러다임입니다.
**영어 참고:** *Asynchronous event-based auditory sensor* — Cảm biến thính giác dựa trên sự kiện bất đồng bộ, cảm biến âm thanh neuromorphic chỉ phát sinh dữ liệu xung khi có sự thay đổi năng lượng âm thanh vượt ngưỡng.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/ai_acoustic_event_recognition -->
### 인공지능음향이벤트인식
**품사:** 명사
**핵심 의미:** 환경 내에서 발생하는 총성, 유리창 파손음, 아기 울음소리, 충돌음 등 비언어적이고 돌발적인 음향 사건을 인공지능 모델을 통해 실시간으로 감지·분류·식별하는 지능형 기술.
**베트남어 뜻:** Nhận dạng sự kiện âm thanh bằng trí tuệ nhân tạo (Artificial intelligence acoustic event recognition) — Công nghệ thông minh ứng dụng các mô hình AI để phát hiện, phân loại và nhận diện theo thời gian thực các biến cố âm thanh phi ngôn ngữ và đột ngột trong môi trường xung quanh như tiếng súng, tiếng vỡ kính, tiếng trẻ khóc, tiếng va chạm.
**뉘앙스와 사용법:** 음성 언어만을 텍스트로 바꾸는 STT(Speech-to-Text)와 구별되는 광범위한 환경 음향 감지(SED: Sound Event Detection) 분야의 핵심 기술입니다. 스마트 시티의 안전 감시, 산업 시설의 고장 이상 소음 진단, 자율주행 차량의 긴급 차량 사이렌 감지 등 물리적 보안과 재난 방지에 널리 사용됩니다. 최근에는 뉴로모픽 스파이킹 신경망(SNN)과 결합되어 밀리초 미만의 초고속 반응 속도로 위험 음향 이벤트를 판별하는 데 집중되고 있습니다. — (nhận dạng sự kiện âm thanh bằng trí tuệ nhân tạo)
**재사용 가능한 콜로케이션·청크:** 인공지능음향이벤트인식 모델을 학습시키다 (huấn luyện mô hình nhận dạng sự kiện âm thanh bằng trí tuệ nhân tạo), 실시간 인공지능음향이벤트인식 시스템 (hệ thống nhận dạng sự kiện âm thanh bằng trí tuệ nhân tạo theo thời gian thực), 인공지능음향이벤트인식 정확도 평가 (đánh giá độ chính xác của nhận dạng sự kiện âm thanh bằng trí tuệ nhân tạo).
**자주 쓰는 문형과 성분:** [스마트 감시 장치]가 인공지능음향이벤트인식(을/를) 통해 [서술어: 위험 상황을 즉각 감지하다]; [다양한 환경음 데이터셋]을 기반으로 한 인공지능음향이벤트인식.
**사회적 관계·주제별 register:** 지능형 영상·음향 관제 시스템 전시회, 공공 안전 AI 솔루션 정책 보고서, 음향 신호 처리 학술 대회(DCASE, ICASSP).
**예문:** 도심 방범 시스템에 탑재된 인공지능음향이벤트인식 알고리즘은 비명 소리와 차량 충돌음을 즉시 감지하여 관제 센터에 긴급 경보를 발령하였다.
**Dịch:** Thuật toán nhận dạng sự kiện âm thanh bằng trí tuệ nhân tạo tích hợp trong hệ thống phòng chống tội phạm đô thị đã ngay lập tức phát hiện tiếng la hét và tiếng va chạm xe, phát cảnh báo khẩn cấp tới trung tâm điều hành.
**어휘 연결:** 화자의 말을 글자로 전사하는 '음성 인식(Speech Recognition)'보다 환경 속 비정형 이상 소음의 범주를 분류하는 '음향 사건 탐지(Sound Event Detection)' 범주에 해당합니다.
**영어 참고:** *Artificial intelligence acoustic event recognition* — Nhận dạng sự kiện âm thanh bằng trí tuệ nhân tạo, công nghệ AI tự động phân tích và xác định danh tính các âm thanh môi trường bất thường theo thời gian thực.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/bioacoustic_signal_to_spike_conversion -->
### 생체음향신호스파이크변환
**품사:** 명사
**핵심 의미:** 연속적인 아날로그 음향 파형의 진폭 및 주파수 정보를 인간 청각 신경망이 이해할 수 있는 이산적인 활동전위(스파이크) 펄스의 시간 간격과 빈도로 부호화하여 바꾸는 변환 과정.
**베트남어 뜻:** Chuyển đổi tín hiệu âm thanh sinh học sang chuỗi xung (Bioacoustic signal to spike conversion) — Quá trình biến đổi và mã hóa thông tin biên độ và tần số của sóng âm tương tự liên tục thành các khoảng thời gian và tần số xuất hiện của các xung điện thế hoạt động (spike) rời rạc mà mạng thần kinh sinh học có thể hiểu được.
**뉘앙스와 사용법:** 생체 신경계와 인공 전자 회로 사이의 언어를 통역하는 핵심 브리지(bridge) 기술입니다. 단순한 아날로그-디지털 변환(ADC)이 전압 레벨을 2진수 비트로 양자화하는 것과 달리, 생체음향신호스파이크변환(chuyển đổi tín hiệu âm thanh sinh học sang chuỗi xung)은 시간 부호화(temporal coding)와 발화율 부호화(rate coding) 기법을 사용하여 음향의 미세 구조(fine structure)와 포락선(envelope)을 뉴런의 스파이크 열(spike train) 형태로 온전히 담아냅니다. 신경 보철 장치에서 환자의 잔존 청신경을 직접 자극하기 위한 필수 선결 단계입니다. — (chuyển đổi tín hiệu âm thanh sinh học sang chuỗi xung)
**재사용 가능한 콜로케이션·청크:** 생체음향신호스파이크변환 알고리즘 (thuật toán chuyển đổi tín hiệu âm thanh sinh học sang chuỗi xung), 고효율 생체음향신호스파이크변환 회로 (mạch chuyển đổi tín hiệu âm thanh sinh học sang chuỗi xung hiệu suất cao), 생체음향신호스파이크변환 과정의 시간 정밀도 (độ chính xác thời gian của quá trình chuyển đổi tín hiệu âm thanh sinh học sang chuỗi xung).
**자주 쓰는 문형과 성분:** [변환 회로]를 통해 생체음향신호스파이크변환(이/가) [서술어: 정밀하게 이루어지다]; [음향 신호]를 생체음향신호스파이크변환하여 [서술어: 신경망에 직접 주입하다].
**사회적 관계·주제별 register:** 생체 전자공학 학술지, 신경 인터페이스 심포지엄, 청각 임플란트 신호 처리 워크숍.
**예문:** 생체음향신호스파이크변환 회로는 소리의 세기와 주파수 변화를 신경 발화 빈도와 타이밍으로 치환하여 청각 피질에 왜곡 없이 전달한다.
**Dịch:** Mạch chuyển đổi tín hiệu âm thanh sinh học sang chuỗi xung thay thế sự biến thiên cường độ và tần số của âm thanh bằng tần suất và định thời phát xung thần kinh, truyền đến vỏ não thính giác mà không bị méo mó.
**어휘 연결:** 전압을 숫자로 바꾸는 고전적 '아날로그-디지털 변환(analog-to-digital conversion)'과 구별되며, 신경계의 기본 정보 전달 단위인 스파이크로 직접 인코딩하는 '뉴로모픽 인코딩(neuromorphic encoding)' 기법입니다.
**영어 참고:** *Bioacoustic signal to spike conversion* — Chuyển đổi tín hiệu âm thanh sinh học sang chuỗi xung, phương pháp mã hóa sóng âm thành các chuỗi xung thần kinh thính giác rời rạc theo thời gian.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/ultra_compact_auditory_neural_prosthetic_interface -->
### 초소형청각신경보철인터페이스
**품사:** 명사
**핵심 의미:** 전자 달팽이관 칩에서 생성된 정밀 자극 신호를 체내 청각 신경(나선신경절세포)에 안전하고 정밀하게 전달하기 위한 미세 전극 어레이 및 초소형 체내 매립형 신경 인터페이스 장치.
**베트남어 뜻:** Giao diện cấy ghép thần kinh thính giác siêu nhỏ gọn (Ultra-compact auditory neural prosthetic interface) — Thiết bị giao diện thần kinh cấy ghép trong cơ thể siêu nhỏ gọn bao gồm mảng vi điện cực, truyền dẫn an toàn và chính xác các tín hiệu kích thích điện tạo ra từ chip ốc tai điện tử tới các sợi thần kinh thính giác (tế bào hạch xoắn).
**뉘앙스와 사용법:** 고심도 감각신경성 난청 환자의 청력을 재건하기 위한 최첨단 의공학 장치입니다. 기존 인공와우의 16~22개에 불과하던 굵은 전극 채널 수를 수백 개 이상의 초고밀도 유연 마이크로 전극 어레이(flexible microelectrode array)로 확장하여, 채널 간 간섭(cross-talk)을 획기적으로 줄이고 음악이나 다화자 대화와 같은 고난도 소리 분해능을 되살립니다. 생체적합성 폴리머와 무선 전력/데이터 수신 기술이 집약된 차세대 이식형 바이오닉스 장치로 집중 연구되고 있습니다. — (giao diện cấy ghép thần kinh thính giác siêu nhỏ gọn)
**재사용 가능한 콜로케이션·청크:** 초소형청각신경보철인터페이스를 삽입하다 (cấy ghép giao diện thần kinh thính giác siêu nhỏ gọn), 고밀도 다채널 초소형청각신경보철인터페이스 (giao diện thần kinh thính giác siêu nhỏ gọn đa kênh mật độ cao), 초소형청각신경보철인터페이스의 생체적합성 (tính tương thích sinh học của giao diện thần kinh thính giác siêu nhỏ gọn).
**자주 쓰는 문형과 성분:** 초소형청각신경보철인터페이스(은/는) [손상된 유모세포]를 대신하여 [서술어: 청각 신경을 직접 자극하다]; [유연 박막 전극 기술]을 적용한 초소형청각신경보철인터페이스.
**사회적 관계·주제별 register:** 임상 이비인후과학 학회, 신경 보철 의료기기 인허가 규제 기관, 바이오메디컬 신경 인터페이스 연구 보고서.
**예문:** 유연 소재 기반의 초소형청각신경보철인터페이스는 달팽이관 내부의 나선형 곡면을 따라 손상 없이 밀착되어 128개 채널의 정밀 전기 자극을 제공한다.
**Dịch:** Giao diện cấy ghép thần kinh thính giác siêu nhỏ gọn làm từ vật liệu dẻo bám sát hoàn hảo theo đường cong xoắn ốc bên trong ốc tai mà không gây tổn thương, cung cấp kích thích điện chính xác trên 128 kênh.
**어휘 연결:** 체외에 노출되는 '음향 처리 프로세서'와 대조되는 개념으로, 체내 깊숙이 직접 삽입되어 신경 세포막과 물리·전기적으로 접촉하는 '생체 이식형 신경 자극 인터페이스(implantable neural stimulation interface)'입니다.
**영어 참고:** *Ultra-compact auditory neural prosthetic interface* — Giao diện cấy ghép thần kinh thính giác siêu nhỏ gọn, hệ thống mảng vi điện cực sinh học cấy trực tiếp vào ốc tai để kích thích điện các sợi thần kinh thính giác còn sót lại.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/real_time_sound_source_localization_algorithm -->
### 실시간음원위치추적알고리즘
**품사:** 명사
**핵심 의미:** 복수의 오디오 센서 또는 생체모사 이청 센서로 입력되는 소리의 도달 시간차(TDOA), 위상차, 스파이크 상관관계를 분석하여 공간상에서 소리가 발생한 위치와 각도를 지연 없이 즉각 추정하는 연산 알고리즘.
**베트남어 뜻:** Thuật toán định vị nguồn âm theo thời gian thực (Real-time sound source localization algorithm) — Thuật toán tính toán phân tích độ chênh lệch thời gian đến (TDOA), chênh lệch pha và tương quan chuỗi xung của âm thanh truyền vào nhiều cảm biến hoặc cảm biến hai tai phỏng sinh học để ước tính tức thì tọa độ và góc phát ra âm thanh trong không gian mà không có độ trễ.
**뉘앙스와 사용법:** 인간이 눈으로 보지 않고도 소리가 난 방향으로 즉각 고개를 돌릴 수 있는 능력을 기계 시스템에 구현하는 핵심 소프트웨어/하드웨어 알고리즘입니다. 전통적인 복잡한 역행렬 연산이나 빔포밍 대신, 뇌간의 신경망 구조를 모방한 상호상관(cross-correlation) 및 스파이크 기반 지연선(delay-line) 모델을 채택함으로써 연산 복잡도를 수백 분의 일로 줄였습니다. 자율주행 차량의 경적 위치 감지, 재난 수색 로봇의 생존자 비명 추적, 스마트 스피커의 사용자 발화 방향 빔포밍에 중추적으로 활용됩니다. — (thuật toán định vị nguồn âm theo thời gian thực)
**재사용 가능한 콜로케이션·청크:** 실시간음원위치추적알고리즘을 최적화하다 (tối ưu hóa thuật toán định vị nguồn âm theo thời gian thực), 3차원 실시간음원위치추적알고리즘 (thuật toán định vị nguồn âm theo thời gian thực 3 chiều), 실시간음원위치추적알고리즘의 공간 분해능 (độ phân giải không gian của thuật toán định vị nguồn âm theo thời gian thực).
**자주 쓰는 문형과 성분:** [자율 로봇]이 실시간음원위치추적알고리즘(을/를) 탑재하여 [서술어: 소리 발생 지점을 정확히 포착하다]; [마이크로폰 어레이 신호]를 실시간음원위치추적알고리즘으로 [서술어: 고속 해석하다].
**사회적 관계·주제별 register:** 지능형 로보틱스 학회, 음향 공학 및 신호 처리 저널, 자율주행 센서 시스템 개발 부서.
**예문:** 재난 구조 로봇은 실시간음원위치추적알고리즘을 통해 무너진 건물 잔해 속에서 미세하게 들려오는 조난자의 구조 요청 방향을 1초 이내에 정확히 특정하였다.
**Dịch:** Robot cứu nạn thiên tai thông qua thuật toán định vị nguồn âm theo thời gian thực đã xác định chính xác trong vòng chưa đầy 1 giây hướng phát ra tiếng kêu cứu yếu ớt của nạn nhân trong đống đổ nát của tòa nhà sập.
**어휘 연결:** 시각 정보에 의존하는 '비전 기반 객체 추적(vision-based tracking)'을 보완하며, 어둠이나 장애물 뒤편에서도 소리 파동의 시간 지연만으로 위치를 찾아내는 '음향 위치 추정(acoustic localization)' 기술입니다.
**영어 참고:** *Real-time sound source localization algorithm* — Thuật toán định vị nguồn âm theo thời gian thực, thuật toán phân tích độ trễ âm học giữa các micro để ước lượng tức thì hướng phát và vị trí của nguồn âm.

---
<!-- lexical_basis: advanced_native; register: news_formal; source_lane: advanced_neuromorphic_auditory; context: advanced-neuromorphic-auditory-frontends-and-cochlea-chips/future_biomimetic_auditory_bioelectronics -->
### 미래생체모사청각전자공학
**품사:** 명사
**핵심 의미:** 인간 내이 달팽이관 및 뇌 청각 피질의 구조와 메커니즘을 신소재 나노 소자, 초저전력 뉴로모픽 반도체, 첨단 신경 보철 기기로 융합 구현하여 인간을 뛰어넘는 지능형 청각 시스템을 창조하려는 학제간 첨단 공학.
**베트남어 뜻:** Kỹ thuật điện tử thính giác phỏng sinh học tương lai (Future biomimetic auditory bioelectronics / auditory electronics) — Lĩnh vực kỹ thuật tiên tiến liên ngành kết hợp giữa cấu trúc và cơ chế của ốc tai và vỏ não thính giác con người với linh kiện nano vật liệu mới, chất bán dẫn neuromorphic siêu tiết kiệm điện và thiết bị cấy ghép thần kinh hiện đại nhằm kiến tạo hệ thống thính giác thông minh vượt qua con người.
**뉘앙스와 사용법:** 단순한 음향 기기 제작이나 전자기기 설계를 넘어, 생물학, 의학, 나노재료학, 반도체 집적회로 설계, 인공지능이 융합된 거시적 미래 융합 학문 패러다임입니다. 난치성 청각 장애의 완전한 치료를 위한 배터리 없는 무전원 인공와우 개발부터, 인간 귀보다 훨씬 넓은 초음파·초저주파 대역을 감지하고 잡음 속에서도 소리를 초인적으로 분석하는 지능형 휴머노이드 로봇 청각 두뇌 개발에 이르기까지 폭넓은 비전과 로드맵을 제시할 때 최상위 학술 용어로 사용됩니다. — (kỹ thuật điện tử thính giác phỏng sinh học tương lai)
**재사용 가능한 콜로케이션·청크:** 미래생체모사청각전자공학의 지평을 넓히다 (mở rộng chân trời của kỹ thuật điện tử thính giác phỏng sinh học tương lai), 미래생체모사청각전자공학 핵심 기술 로드맵 (lộ trình công nghệ cốt lõi của kỹ thuật điện tử thính giác phỏng sinh học tương lai), 학제간 융합 미래생체모사청각전자공학 연구 (nghiên cứu kỹ thuật điện tử thính giác phỏng sinh học tương lai dung hợp liên ngành).
**자주 쓰는 문형과 성분:** 미래생체모사청각전자공학(은/는) [의공학과 인공지능]의 [서술어: 궁극적 융합을 이끌어내고 있다]; 미래생체모사청각전자공학 연구를 통해 [서술어: 차세대 바이오닉 감각 기술을 선점하다].
**사회적 관계·주제별 register:** 글로벌 융합 바이오닉스 콘퍼런스 기조연설, 정부 첨단 미래 기술 백서, 차세대 반도체-바이오 전략 포럼.
**예문:** 미래생체모사청각전자공학 연구의 결실은 청각 장애인에게 완전한 자연의 소리를 되찾아줄 뿐만 아니라 소음 속에서도 기계가 인간처럼 소통할 수 있는 인공 청각 혁명을 이끌고 있다.
**Dịch:** Thành quả của nghiên cứu kỹ thuật điện tử thính giác phỏng sinh học tương lai không chỉ trả lại âm thanh tự nhiên trọn vẹn cho người khiếm thính mà còn dẫn dắt cuộc cách mạng thính giác nhân tạo giúp máy móc có thể giao tiếp như con người ngay giữa môi trường tiếng ồn.
**어휘 연결:** 모든 하위의 개별 소자 기술(필터 뱅크, 유모세포 회로, 달팽이관 칩, 보철 인터페이스)을 하나로 아우르는 최상위 학문 체계이자 미래 지향적 연구 패러다임입니다.
**영어 참고:** *Future biomimetic auditory bioelectronics* — Kỹ thuật điện tử thính giác phỏng sinh học tương lai, ngành khoa học kỹ thuật liên ngành kiến tạo các hệ thống cảm nhận âm thanh thông minh dựa trên việc phỏng sinh học cấu trúc thính giác người.

---

## 읽기: 생체 청각 신경계를 모방한 전자 달팽이관 칩과 초저전력 음향 신호 처리의 혁신

<!-- passage_word_count: 105 Korean eojeol; target_set: 뉴로모픽전자달팽이관칩, 아날로그청각필터뱅크어레이, 생체모사이청신호처리회로, 스파이킹청각신경세포모사, 초저전력음성패턴추출소자, 기저막주파수공간분할모방, 온칩실시간음성특징인코딩, 청각유모세포전기생리회로, 잡음환경강인음성인지시스템, 비동기사건기반청각센서, 인공지능음향이벤트인식, 생체음향신호스파이크변환, 초소형청각신경보철인터페이스, 실시간음원위치추적알고리즘, 미래생체모사청각전자공학 -->

인간 청각계의 극한 에너지 효율과 뛰어난 음향 분해능을 하드웨어로 온전히 구현하려는 미래생체모사청각전자공학 연구는 기존 디지털 신호 처리의 전력 한계를 근본적으로 극복하고 있다. 새롭게 설계된 차세대 뉴로모픽전자달팽이관칩 시스템은 달팽이관 내부의 기저막주파수공간분할모방 원리를 정밀 적용한 아날로그청각필터뱅크어레이 구조를 통해 가청 대역 음향을 손실 없이 분리한다. 이 과정에서 청각유모세포전기생리회로 설계는 생체음향신호스파이크변환 기술과 결합하여 소리 진동 에너지를 시간 정보 중심의 신경 펄스로 충실히 생성한다. 이러한 펄스는 스파이킹청각신경세포모사 단계를 거치며, 나노급 초저전력음성패턴추출소자 기능과 온칩실시간음성특징인코딩 회로를 통해 복잡한 음성 신호를 지연 없이 추출한다. 한편 비동기사건기반청각센서 기술을 바탕으로 한 생체모사이청신호처리회로 망은 실시간음원위치추적알고리즘 계산을 초고속으로 수행하여 잡음환경강인음성인지시스템 성능을 극대화한다. 나아가 고도화된 인공지능음향이벤트인식 기술과 초소형청각신경보철인터페이스 모듈이 결합되어 감각 신경 복원의 혁신적 새 지평을 열고 있다.

**베트남어 번역:**

Nghiên cứu về kỹ thuật điện tử thính giác phỏng sinh học tương lai nhằm hiện thực hóa trọn vẹn trên phần cứng hiệu suất năng lượng tột bậc cùng khả năng phân giải âm học xuất sắc của hệ thống thính giác con người đang khắc phục căn bản các giới hạn về điện năng của xử lý tín hiệu kỹ thuật số truyền thống. Hệ thống chip ốc tai điện tử neuromorphic thế hệ mới được thiết kế gần đây tách bạch dải tần âm thanh nghe được mà không gây tổn hao thông qua cấu trúc mảng bộ lọc thính giác tương tự áp dụng chuẩn xác nguyên lý phỏng sinh học phân chia tần số theo không gian của màng đáy bên trong ốc tai. Trong tiến trình này, thiết kế mạch điện sinh lý tế bào lông thính giác kết hợp cùng kỹ thuật chuyển đổi tín hiệu âm thanh sinh học sang chuỗi xung để tạo ra một cách trung thực năng lượng dao động âm thanh thành các xung thần kinh lấy thông tin thời gian làm trung tâm. Những xung này đi qua giai đoạn mô phỏng tế bào thần kinh thính giác dạng xung, rồi thông qua chức năng của linh kiện trích xuất mẫu giọng nói siêu tiết kiệm điện cấp độ nano và mạch mã hóa đặc trưng giọng nói theo thời gian thực trực tiếp trên chip để trích xuất các tín hiệu giọng nói phức tạp mà không có độ trễ. Mặt khác, mạng mạch xử lý tín hiệu hai tai mô phỏng sinh học dựa trên công nghệ cảm biến thính giác dựa trên sự kiện bất đồng bộ thực hiện các phép tính của thuật toán định vị nguồn âm theo thời gian thực với tốc độ siêu cao, giúp tối đa hóa hiệu năng của hệ thống nhận dạng giọng nói kháng nhiễu môi trường. Xa hơn nữa, sự kết hợp giữa kỹ thuật nhận dạng sự kiện âm thanh bằng trí tuệ nhân tạo tiên tiến và mô-đun giao diện cấy ghép thần kinh thính giác siêu nhỏ gọn đang mở ra một chân trời mới đầy tính đổi mới cho việc phục hồi chức năng thần kinh cảm giác.
