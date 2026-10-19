# 양자암호학 및 장치독립형 양자키분배와 벨 부등식의 언어

> 양자암호학, 장치독립형 양자키분배(DI-QKD), 벨 부등식 위반(CHSH), 양자 난수 생성(QRNG), 사이드채널 공격 방어, 얽힘 증류 프로토콜, MDI-QKD 위상 동기 및 양자내성 암호 하이브리드 보안을 다루는 양자정보보안 핵심 어휘

### 장치독립형양자키분배비국소성보안성증명

- **발음:** [장치동니평양자키분배비국소썽보안성증명]
- **품사:** 명사
- **핵심 의미:** 양자키분배(QKD) 프로토콜에서 사용자가 송수신 장치의 내부 물리적 구조나 제조 결함, 도청자의 사전 조작 여부를 전혀 신뢰하지 않더라도, 입출력 통계에서 나타나는 벨 비국소성(Bell nonlocality) 검증만으로 암호키의 무조건적 안전성을 수학적으로 완벽히 입증하는 양자 정보 이론적 증명 기법
- **베트남어 뜻:** chứng minh tính bảo mật phi cục bộ phân phối khóa lượng tử độc lập thiết bị DI-QKD (kỹ thuật chứng minh trong lý thuyết thông tin lượng tử chứng minh hoàn hảo về mặt toán học tính an toàn vô điều kiện của khóa mật mã chỉ dựa trên việc kiểm chứng tính phi cục bộ Bell thể hiện trong thống kê đầu vào - đầu ra, ngay cả khi người dùng hoàn toàn không tin tưởng vào cấu trúc vật lý nội tại của thiết bị thu phát, lỗi chế tạo hay sự thao túng cài cắm từ trước của kẻ nghe lén)
- **뉘앙스와 사용법:** 하드웨어 해킹이나 사이드채널 공격 가능성을 원천 배제할 수 있는 차세대 궁극의 양자 암호화 이론 패러다임이다.
- **재사용 가능한 콜로케이션·청크:**
  - 장치독립형양자키분배비국소성보안성증명을 완성하다 (hoàn thiện chứng minh tính bảo mật phi cục bộ phân phối khóa lượng tử độc lập thiết bị)
  - 벨비국소성과 무조건정보이론적보안 (tính phi cục bộ Bell và an toàn lý thuyết thông tin vô điều kiện)
  - 블랙박스양자장치와 통계적상관관계검증 (thiết bị lượng tử hộp đen và kiểm chứng tương quan thống kê)
- **자주 쓰는 문형과 성분:**
  - 장치독립형양자키분배비국소성보안성증명에 기초하여 설계되다 (được thiết kế dựa trên chứng minh tính bảo mật phi cục bộ phân phối khóa lượng tử độc lập thiết bị)
  - 장치독립형양자키분배비국소성보안성증명을 통과하다 (vượt qua kiểm chứng của chứng minh tính bảo mật phi cục bộ phân phối khóa lượng tử độc lập thiết bị)
- **사회적 관계·주제별 register:** 양자정보과학, 양자암호학 및 이론물리학 최고급 학술 전문어.
- **예문:** 연구팀은 장치독립형양자키분배비국소성보안성증명을 성공적으로 도출함으로써 도청자가 제조 단계에서 변조한 불완전한 하드웨어 환경에서도 완벽한 보안 키 분배가 가능함을 입증하였다.
- **Dịch:** Nhóm nghiên cứu đã rút ra thành công chứng minh tính bảo mật phi cục bộ phân phối khóa lượng tử độc lập thiết bị, qua đó minh chứng rằng việc phân phối khóa bảo mật hoàn hảo là hoàn toàn khả thi ngay cả trong môi trường phần cứng không hoàn hảo bị kẻ nghe lén biến đổi từ khâu chế tạo.
- **어휘 연결:**
  - 장치독립형양자키분배 (phân phối khóa lượng tử độc lập thiết bị / DI-QKD)
  - 벨비국소성 (tính phi cục bộ Bell / Bell nonlocality)
- **영어 참고:** device-independent quantum key distribution nonlocality security proof — chứng minh an ninh phi cục bộ phân phối khóa lượng tử độc lập thiết bị

---

### 벨부등식위반양자얽힘검증루프홀차단기법

- **발음:** [벨부등식위반양자엉힘검증루폴차단기뻡]
- **품사:** 명사
- **핵심 의미:** 국소 실재론(local realism)의 한계를 입증하고 두 양자 상태의 순수한 얽힘을 검증하기 위해 벨 부등식 실험을 수행할 때, 측정 장치 간의 인과적 신호 교환을 막는 국소성 루프홀(locality loophole)과 미검출 광자로 인한 통계적 왜곡을 배제하는 검출 효율 루프홀(detection loophole)을 물리적·통계적으로 완벽히 차단하는 실험적 통제 기법
- **베트남어 뜻:** kỹ thuật chặn lỗ hổng kiểm chứng vướng víu lượng tử vi phạm bất đẳng thức Bell (kỹ thuật kiểm soát thực nghiệm nhằm triệt tiêu hoàn hảo về mặt thống kê và vật lý cả lỗ hổng cục bộ - ngăn chặn sự trao đổi tín hiệu nhân quả giữa các thiết bị đo, và lỗ hổng hiệu suất dò - loại trừ sự méo mó thống kê do các photon không được phát hiện, khi tiến hành thí nghiệm bất đẳng thức Bell để chứng minh giới hạn của thuyết hiện thực cục bộ và kiểm chứng sự vướng víu thuần khiết giữa hai trạng thái lượng tử)
- **뉘앙스와 사용법:** 2022년 노벨 물리학상을 수상한 루프홀 없는 벨 시험(Loophole-free Bell test)의 정밀 물리학적 기초를 이룬다.
- **재사용 가능한 콜로케이션·청크:**
  - 벨부등식위반양자얽힘검증루프홀차단기법을 적용하다 (áp dụng kỹ thuật chặn lỗ hổng kiểm chứng vướng víu lượng tử vi phạm bất đẳng thức Bell)
  - 국소성루프홀차단과 고효율단일광자검출 (chặn lỗ hổng tính cục bộ và phát hiện photon đơn hiệu suất cao)
  - 국소실재론반박과 비국소양자상관확인 (bác bỏ thuyết hiện thực cục bộ và xác nhận tương quan lượng tử phi cục bộ)
- **자주 쓰는 문형과 성분:**
  - 벨부등식위반양자얽힘검증루프홀차단기법을 만족하다 (thỏa mãn kỹ thuật chặn lỗ hổng kiểm chứng vướng víu lượng tử vi phạm bất đẳng thức Bell)
  - 벨부등식위반양자얽힘검증루프홀차단기법에 의해 검증되다 (được kiểm chứng nhờ kỹ thuật chặn lỗ hổng kiểm chứng vướng víu lượng tử vi phạm bất đẳng thức Bell)
- **사회적 관계·주제별 register:** 양자광학, 실험양자역학, 고등물리학 전문 학술지.
- **예문:** 원거리로 격리된 두 실험실 사이에서 벨부등식위반양자얽힘검증루프홀차단기법을 충족한 결과, 양자역학의 비국소성이 99.999% 신뢰 수준으로 증명되었다.
- **Dịch:** Kết quả đáp ứng đầy đủ kỹ thuật chặn lỗ hổng kiểm chứng vướng víu lượng tử vi phạm bất đẳng thức Bell giữa hai phòng thí nghiệm cách ly cự ly xa đã chứng minh tính phi cục bộ của cơ học lượng tử với độ tin cậy 99,999%.
- **어휘 연결:**
  - 벨부등식 (bất đẳng thức Bell / Bell inequality)
  - 루프홀차단 (triệt tiêu lỗ hổng / Loophole closing)
- **영어 참고:** Bell inequality violation quantum entanglement verification loophole-closing technique — kỹ thuật đóng lỗ hổng kiểm chứng vướng víu lượng tử vi phạm bất đẳng thức Bell

---

### 양자난수생성기원천적비예측성물리적구현

- **발음:** [양자난수생성기원천적비예측썽물리적구현]
- **품사:** 명사
- **핵심 의미:** 알고리즘 기반의 의사 난수(pseudo-random number)와 달리, 광자의 양자 진공 요동(vacuum fluctuation), 방사성 붕괴, 또는 빔 스플리터 투과·반사의 본질적인 비결정론적 확률성에 기초하여 그 어떤 연산 능력으로도 미래 값을 사전에 예측하거나 재현할 수 없는 진정한 난수를 하드웨어 소자로 물리적으로 구현하는 기술
- **베트남어 뜻:** hiện thực hóa vật lý tính không thể dự đoán căn bản của máy tạo số ngẫu nhiên lượng tử QRNG (công nghệ hiện thực hóa vật lý trên linh kiện phần cứng để tạo ra các chuỗi số ngẫu nhiên thực sự mà không một năng lực tính toán nào có thể tái hiện hay dự đoán trước các giá trị tương lai, khác biệt hoàn toàn với các số giả ngẫu nhiên dựa trên thuật toán, nhờ vào tính xác suất bất định nội tại của sự xuyên qua - phản xạ của photon qua bộ tách chùm, sự phân rã phóng xạ hoặc dao động chân không lượng tử của photon)
- **뉘앙스와 사용법:** 국방 보안 암호키 생성, 양자 키 분배 및 금융 보안망의 절대적 무작위성을 담보하는 핵심 하드웨어이다.
- **재사용 가능한 콜로케이션·청크:**
  - 양자난수생성기원천적비예측성물리적구현을 완료하다 (hoàn thành hiện thực hóa vật lý tính không thể dự đoán căn bản của máy tạo số ngẫu nhiên lượng tử QRNG)
  - 양자진공요동과 진성난수추출 (dao động chân không lượng tử và trích xuất số ngẫu nhiên thực)
  - 의사난수극복과 엔트로피원천보장 (vượt qua số giả ngẫu nhiên và bảo đảm nguồn entropy)
- **자주 쓰는 문형과 성분:**
  - 양자난수생성기원천적비예측성물리적구현에 성공하다 (thành công trong hiện thực hóa vật lý tính không thể dự đoán căn bản của máy tạo số ngẫu nhiên lượng tử QRNG)
  - 양자난수생성기원천적비예측성물리적구현 소자를 장착하다 (lắp đặt linh kiện hiện thực hóa vật lý tính không thể dự đoán căn bản của máy tạo số ngẫu nhiên lượng tử QRNG)
- **사회적 관계·주제별 register:** 양자소자물리학, 암호학 및 국가보안통신 표준 규격.
- **예문:** 차세대 통신위성에 탑재된 양자난수생성기원천적비예측성물리적구현 모듈은 초당 수 기가비트 속도로 무작위 비트열을 생성해 암호화 키로 공급한다.
- **Dịch:** Mô-đun hiện thực hóa vật lý tính không thể dự đoán căn bản của máy tạo số ngẫu nhiên lượng tử QRNG gắn trên vệ tinh viễn thông thế hệ mới tạo ra các chuỗi bit ngẫu nhiên ở tốc độ hàng gigabit mỗi giây để cung cấp làm khóa mã hóa.
- **어휘 연결:**
  - 양자난수생성기 (máy tạo số ngẫu nhiên lượng tử / QRNG)
  - 진성난수 (số ngẫu nhiên thực / True random number)
- **영어 참고:** quantum random number generator intrinsic unpredictability physical implementation — hiện thực hóa vật lý tính bất khả dự đoán căn bản của bộ sinh số ngẫu nhiên lượng tử

---

### 사이드채널공격방어단일광자검출기무결성

- **발음:** [사이드채널공격방어단일광자검출기무결썽]
- **품사:** 명사
- **핵심 의미:** 양자 암호 시스템의 단일 광자 검출기(Single-Photon Avalanche Diode, SPAD 또는 SNSPD)에 도청자가 강력한 외부 연속파 레이저를 주입하여 검출기를 포화시키거나 블라인딩(detector blinding attack)하여 원하는 신호만을 강제로 기록하게 만드는 부채널 공격을 방어하고 검출 소자의 양자역학적 신뢰성을 유지하는 하드웨어 및 알고리즘 보안 대책
- **베트남어 뜻:** tính toàn vẹn của đầu dò photon đơn phòng chống tấn công kênh phụ (biện pháp an ninh thuật toán và phần cứng nhằm duy trì độ tin cậy cơ học lượng tử của phần tử dò tìm và phòng vệ trước các cuộc tấn công kênh phụ, trong đó kẻ nghe lén chiếu tia laser sóng liên tục cường độ mạnh từ bên ngoài vào đi-ốt tuyết lở đếm photon đơn SPAD hoặc SNSPD của hệ thống mật mã lượng tử nhằm làm bão hòa hoặc gây mù đầu dò, ép buộc thiết bị chỉ ghi nhận những tín hiệu mong muốn)
- **뉘앙스와 사용법:** 이론적 양자 암호의 완벽함과 실제 상용 하드웨어의 취약점 사이의 간극을 메우는 핵심 양자 해킹 방어 기술이다.
- **재사용 가능한 콜로케이션·청크:**
  - 사이드채널공격방어단일광자검출기무결성을 확보하다 (xác lập tính toàn vẹn của đầu dò photon đơn phòng chống tấn công kênh phụ)
  - 검출기블라인딩공격차단과 바이어스전압감시 (chặn tấn công làm mù đầu dò và giám sát điện áp phân cực)
  - 부채널취약점분석과 하드웨어보안패치 (phân tích lỗ hổng kênh phụ và bản vá an ninh phần cứng)
- **자주 쓰는 문형과 성분:**
  - 사이드채널공격방어단일광자검출기무결성을 입증받다 (được chứng nhận tính toàn vẹn của đầu dò photon đơn phòng chống tấn công kênh phụ)
  - 사이드채널공격방어단일광자검출기무결성 프로토콜을 탑재하다 (tích hợp giao thức tính toàn vẹn của đầu dò photon đơn phòng chống tấn công kênh phụ)
- **사회적 관계·주제별 register:** 양자보안학, 양자해킹방어공학, 사이버보안 전문 보고서.
- **예문:** 새로 개발된 양자암호 단말기는 사이드채널공격방어단일광자검출기무결성 감시 회로를 내장하여 외부의 비정상 레이저 광선 유입을 10나노초 내에 감지하고 통신을 차단한다.
- **Dịch:** Thiết bị đầu cuối mật mã lượng tử mới phát triển có tích hợp mạch giám sát tính toàn vẹn của đầu dò photon đơn phòng chống tấn công kênh phụ, có thể phát hiện luồng tia laser bất thường xâm nhập từ bên ngoài trong vòng 10 nano giây và ngắt kết nối liên lạc.
- **어휘 연결:**
  - 사이드채널공격 (tấn công kênh phụ / Side-channel attack)
  - 단일광자검출기 (đầu dò photon đơn / Single-photon detector)
- **영어 참고:** side-channel attack defense single-photon detector integrity — tính toàn vẹn của bộ dò photon đơn phòng thủ tấn công kênh phụ

---

### 얽힘증류프로토콜양자통신채널노이즈정제

- **발음:** [엉힘증류프로토콜양자통신채널노이즈정제]
- **품사:** 명사
- **핵심 의미:** 광섬유나 자유공간 전송로의 광자 흡수, 산란, 위상 변이 등 환경 노이즈로 인하여 얽힘 순도(entanglement fidelity)가 저하된 다수의 불완전한 양자 얽힘 쌍들을 모아, 국소 양자 연산과 고전적 통신(LOCC)을 반복 수행함으로써 높은 충실도를 가진 소수의 순수한 최대 얽힘 상태(Bell state)로 정제 추출해내는 양자 정보 처리 프로토콜
- **베트남어 뜻:** tinh chế lọc nhiễu kênh truyền thông lượng tử bằng giao thức chưng cất vướng víu (giao thức xử lý thông tin lượng tử lặp lại các phép toán lượng tử cục bộ và liên lạc cổ điển LOCC để thu gom nhiều cặp hạt vướng víu lượng tử không hoàn hảo bị suy giảm độ trung thực do nhiễu môi trường như tán xạ, hấp thụ photon hoặc dịch pha trên đường truyền cáp quang hay không gian tự do, qua đó tinh chế và trích xuất thành một số lượng nhỏ các trạng thái vướng víu cực đại Bell thuần khiết có độ trung thực cao)
- **뉘앙스와 사용법:** 거리 증가에 따른 지수함수적 신호 감쇠를 극복하고 양자 중계기(Quantum Repeater) 간 장거리 통신을 가능케 하는 필수 알고리즘이다.
- **재사용 가능한 콜로케이션·청크:**
  - 얽힘증류프로토콜양자통신채널노이즈정제를 실행하다 (thực thi tinh chế lọc nhiễu kênh truyền thông lượng tử bằng giao thức chưng cất vướng víu)
  - 얽힘순도향상과 국소양자연산 (nâng cao độ thuần khiết vướng víu và phép toán lượng tử cục bộ)
  - 벨상태충실도회복과 잡음제어 (phục hồi độ trung thực trạng thái Bell và kiểm soát tạp âm)
- **자주 쓰는 문형과 성분:**
  - 얽힘증류프로토콜양자통신채널노이즈정제를 거치다 (trải qua quá trình tinh chế lọc nhiễu kênh truyền thông lượng tử bằng giao thức chưng cất vướng víu)
  - 얽힘증류프로토콜양자통신채널노이즈정제로 고순도 얽힘을 얻다 (thu được vướng víu độ tinh khiết cao bằng giao thức chưng cất vướng víu tinh chế lọc nhiễu kênh truyền thông lượng tử)
- **사회적 관계·주제별 register:** 양자정보학, 양자네트워크공학, 이론물리학술지.
- **예문:** 양자 네트워크 중간 노드에서 얽힘증류프로토콜양자통신채널노이즈정제를 수행한 결과 감쇠된 얽힘 충실도가 0.65에서 0.98로 획기적으로 상승하였다.
- **Dịch:** Kết quả thực thi tinh chế lọc nhiễu kênh truyền thông lượng tử bằng giao thức chưng cất vướng víu tại nút trung gian mạng lượng tử đã giúp độ trung thực vướng víu bị suy hao tăng vọt ngoạn mục từ 0,65 lên 0,98.
- **어휘 연결:**
  - 얽힘증류 (chưng cất vướng víu / Entanglement distillation)
  - 양자충실도 (độ trung thực lượng tử / Quantum fidelity)
- **영어 참고:** entanglement distillation protocol quantum communication channel noise purification — tinh chế khử nhiễu kênh truyền thông lượng tử bằng giao thức chưng cất vướng víu

---

### 측정장치독립양자키분배광학간섭계위상동기

- **발음:** [측쩡장치동니평양자키분배광학간섭계위상동기]
- **품사:** 명사
- **핵심 의미:** 측정 장치 독립형 양자키분배(MDI-QKD) 시스템에서 송신자(Alice)와 수신자(Bob)가 비신뢰 중간 노드(Charlie)로 전송한 두 독립 단일 광자가 홍-오-만델(Hong-Ou-Mandel) 간섭 효과를 완벽히 일으킬 수 있도록, 서로 떨어진 레이저 광원과 광학 간섭계 간의 주파수 편차 및 광섬유 위상 흔들림을 펨토초 수준으로 정밀 보정하여 위상을 일치시키는 광학 제어 기술
- **베트남어 뜻:** đồng bộ pha giao thoa kế quang học phân phối khóa lượng tử độc lập thiết bị đo MDI-QKD (kỹ thuật điều khiển quang học bù trừ chính xác ở mức femto giây độ rung pha sợi quang và độ lệch tần số giữa các nguồn laser đặt cách xa nhau, nhằm đồng bộ hóa pha để hai photon đơn độc lập do bên gửi Alice và bên nhận Bob truyền tới nút trung gian không tin cậy Charlie có thể tạo ra hiệu ứng giao thoa Hong-Ou-Mandel hoàn hảo trong hệ thống phân phối khóa lượng tử độc lập thiết bị đo)
- **뉘앙스와 사용법:** 모든 검출기 측면 공격을 차단하면서도 수백 킬로미터 장거리 광통신망에서 MDI-QKD를 상용화하기 위한 최대의 공학적 기술 난제이다.
- **재사용 가능한 콜로케이션·청크:**
  - 측정장치독립양자키분배광학간섭계위상동기를 달성하다 (đạt được đồng bộ pha giao thoa kế quang học phân phối khóa lượng tử độc lập thiết bị đo)
  - 홍오만델간섭효과와 광자식별성유지 (hiệu ứng giao thoa Hong-Ou-Mandel và duy trì tính bất khả phân biệt của photon)
  - 광섬유위상변동실시간피드백보정 (hiệu chỉnh phản hồi thời gian thực độ trôi pha sợi quang)
- **자주 쓰는 문형과 성분:**
  - 측정장치독립양자키분배광학간섭계위상동기 기술을 통해 구현되다 (được hiện thực hóa thông qua công nghệ đồng bộ pha giao thoa kế quang học phân phối khóa lượng tử độc lập thiết bị đo)
  - 측정장치독립양자키분배광학간섭계위상동기 상태를 안정적으로 유지하다 (duy trì ổn định trạng thái đồng bộ pha giao thoa kế quang học phân phối khóa lượng tử độc lập thiết bị đo)
- **사회적 관계·주제별 register:** 양자통신공학, 정밀광학 및 포토닉스 전문 학술 논문.
- **예문:** 연구소는 고안정성 기준 레이저를 활용하여 측정장치독립양자키분배광학간섭계위상동기를 200킬로미터 실제 상용 광케이블망에서 24시간 연속 유지하는 데 성공하였다.
- **Dịch:** Viện nghiên cứu sử dụng laser chuẩn độ ổn định cao đã thành công trong việc duy trì ổn định đồng bộ pha giao thoa kế quang học phân phối khóa lượng tử độc lập thiết bị đo liên tục 24 giờ trên mạng cáp quang thương mại thực tế dài 200 km.
- **어휘 연결:**
  - 측정장치독립 (độc lập thiết bị đo / MDI-QKD)
  - 위상동기화 (đồng bộ hóa pha / Phase synchronization)
- **영어 참고:** measurement-device-independent quantum key distribution optical interferometer phase synchronization — đồng bộ pha giao thoa kế quang học trong phân phối khóa lượng tử độc lập thiết bị đo

---

### 양자중계기메모리노드장거리양자통신망구축

- **발음:** [양자중계기메모리노드장거리양자통신망구축]
- **품사:** 명사
- **핵심 의미:** 광섬유 전송 거리 증가에 따라 발생하는 지수적 광자 감쇠 한계를 극복하고 대륙 간 양자 인터넷을 실현하기 위해, 수십 킬로미터 간격마다 양자 상태를 장시간 안정적으로 저장할 수 있는 양자 메모리(원자 증기셀, 희토류 이온 결정, NV 센터 등)와 얽힘 교환(entanglement swapping) 연산 노드를 결합하여 연결하는 차세대 통신망 인프라 구축 프로젝트
- **베트남어 뜻:** xây dựng mạng lưới truyền thông lượng tử cự ly dài nút bộ nhớ trạm lặp lượng tử (dự án xây dựng cơ sở hạ tầng mạng truyền thông thế hệ mới nhằm vượt qua giới hạn suy hao photon theo cấp số nhân khi tăng khoảng cách truyền dẫn sợi quang và hiện thực hóa internet lượng tử liên lục địa, bằng cách liên kết và tích hợp các nút tính toán hoán đổi vướng víu với các bộ nhớ lượng tử như tinh thể ion đất hiếm, buồng hơi nguyên tử, tâm kim cương NV có khả năng lưu trữ ổn định trạng thái lượng tử trong thời gian dài bố trí cách nhau vài chục kilômét)
- **뉘앙스와 사용법:** 고전 통신처럼 단순 신호 증폭기를 쓸 수 없는 양자 복제 불가능 정리(No-cloning theorem)를 우회하여 전 지구적 양자 연결을 달성하는 유일한 물리적 해법이다.
- **재사용 가능한 콜로케이션·청크:**
  - 양자중계기메모리노드장거리양자통신망구축을 추진하다 (thúc đẩy xây dựng mạng lưới truyền thông lượng tử cự ly dài nút bộ nhớ trạm lặp lượng tử)
  - 얽힘교환노드와 결맞음저장시간 (nút hoán đổi vướng víu và thời gian lưu trữ kết hợp)
  - 양자인터넷백본망과 대륙간전송 (mạng trục chính internet lượng tử và truyền dẫn liên lục địa)
- **자주 쓰는 문형과 성분:**
  - 양자중계기메모리노드장거리양자통신망구축의 일환으로 시험되다 (được thử nghiệm như một phần của xây dựng mạng lưới truyền thông lượng tử cự ly dài nút bộ nhớ trạm lặp lượng tử)
  - 양자중계기메모리노드장거리양자통신망구축을 선도하다 (dẫn đầu công cuộc xây dựng mạng lưới truyền thông lượng tử cự ly dài nút bộ nhớ trạm lặp lượng tử)
- **사회적 관계·주제별 register:** 국가 양자 전략 정책 보고서, 양자통신망 인프라 공학.
- **예문:** 국가 주도로 추진되는 양자중계기메모리노드장거리양자통신망구축 사업은 향후 전국 행정·국방 보안망을 양자 암호 체계로 완전 전환하는 것을 목표로 한다.
- **Dịch:** Dự án xây dựng mạng lưới truyền thông lượng tử cự ly dài nút bộ nhớ trạm lặp lượng tử do chính phủ dẫn dắt đặt mục tiêu chuyển đổi hoàn toàn mạng lưới an ninh hành chính và quốc phòng toàn quốc sang hệ thống mật mã lượng tử trong tương lai.
- **어휘 연결:**
  - 양자중계기 (trạm lặp lượng tử / Quantum repeater)
  - 양자메모리 (bộ nhớ lượng tử / Quantum memory)
- **영어 참고:** quantum repeater memory node long-distance quantum communication network construction — xây dựng mạng truyền thông lượng tử cự ly xa nút bộ nhớ trạm lặp lượng tử

---

### 클라우저호른시모니홀트부등식위반계수산출

- **발음:** [클라우저호른시모니홀트부등식위반계수산출]
- **품사:** 명사
- **핵심 의미:** 두 입자의 스핀 또는 편광 상태에 대한 상관관계를 측정하여 양자 비국소성을 판별하는 CHSH 부등식 실험에서, 고전역학적 국소 은닉 변수 이론이 가질 수 있는 상한값인 2를 초과하여 양자역학의 이론적 최대치인 실러슨 한계(Cirel'son's bound, 2√2 ≈ 2.828)에 얼마나 도달하는지 상관 계수 S의 값을 통계학적으로 정확히 도출하는 계산 공식 체계
- **베트남어 뜻:** tính toán hệ số vi phạm bất đẳng thức Clauser-Horne-Shimony-Holt CHSH (hệ thống công thức tính toán rút ra chính xác về mặt thống kê giá trị của hệ số tương quan S trong thí nghiệm bất đẳng thức CHSH để xác định tính phi cục bộ lượng tử bằng cách đo đạc tương quan trạng thái phân cực hoặc spin của hai hạt, xem xét mức độ vượt quá giới hạn trên bằng 2 của lý thuyết biến ẩn cục bộ cơ học cổ điển để tiệm cận giới hạn Cirel'son 2√2 ≈ 2,828 của cơ học lượng tử)
- **뉘앙스와 사용법:** 장치독립형 양자 보안 및 양자 컴퓨터의 얽힘 품질을 인증하는 가장 권위 있는 정량 지표이다.
- **재사용 가능한 콜로케이션·청크:**
  - 클라우저호른시모니홀트부등식위반계수산출을 진행하다 (tiến hành tính toán hệ số vi phạm bất đẳng thức Clauser-Horne-Shimony-Holt CHSH)
  - 실러슨한계치접근과 양자상관측정 (tiệm cận giới hạn Cirel'son và đo tương quan lượng tử)
  - 국소은닉변수기각과 비국소성검증 (bác bỏ biến ẩn cục bộ và kiểm chứng tính phi cục bộ)
- **자주 쓰는 문형과 성분:**
  - 클라우저호른시모니홀트부등식위반계수산출 결과로 입증하다 (chứng minh bằng kết quả tính toán hệ số vi phạm bất đẳng thức Clauser-Horne-Shimony-Holt CHSH)
  - 클라우저호른시모니홀트부등식위반계수산출에서 2.8을 상회하다 (vượt qua mức 2,8 trong tính toán hệ số vi phạm bất đẳng thức Clauser-Horne-Shimony-Holt CHSH)
- **사회적 관계·주제별 register:** 양자역학 기초이론, 양자정보학 및 수리물리학 논문.
- **예문:** 실험에서 획득한 광자 쌍의 상관 데이터를 분석하여 클라우저호른시모니홀트부등식위반계수산출을 수행한 결과, S값이 2.76으로 산출되어 국소 실재론이 통계적으로 명백히 기각되었다.
- **Dịch:** Phân tích dữ liệu tương quan của cặp photon thu được trong thí nghiệm để tiến hành tính toán hệ số vi phạm bất đẳng thức Clauser-Horne-Shimony-Holt CHSH cho thấy giá trị S đạt 2,76, qua đó thuyết hiện thực cục bộ đã bị bác bỏ rõ ràng về mặt thống kê.
- **어휘 연결:**
  - CHSH부등식 (bất đẳng thức CHSH)
  - 실러슨한계 (giới hạn Cirel'son / Tsirelson bound)
- **영어 참고:** Clauser-Horne-Shimony-Holt inequality violation coefficient calculation — tính toán hệ số vi phạm bất đẳng thức CHSH

---

### 광섬유양자키분배위상편이변조전송신뢰성

- **발음:** [광섬유양자키분배위상편이변조전송신뢰썽]
- **품사:** 명사
- **핵심 의미:** 장거리 광섬유 케이블을 통과하는 단일 광자 펄스의 광학적 위상을 차동 위상 편이(Differential Phase Shift, DPS) 또는 이중 위상 변조 기법으로 부호화할 때, 외부 온도 변화나 물리적 진동으로 인한 광섬유 복굴절 및 위상 드리프트 노이즈를 능동적으로 보정하여 키 분배 성공률과 전송 무결성을 안정적으로 확보하는 전송 공학적 신뢰도 특성
- **베트남어 뜻:** độ tin cậy truyền dẫn điều chế dịch pha phân phối khóa lượng tử sợi quang (đặc tính độ tin cậy kỹ thuật truyền dẫn đảm bảo tỷ lệ phân phối khóa thành công và tính toàn vẹn truyền dẫn một cách ổn định bằng cách chủ động bù trừ nhiễu trôi pha và lưỡng chiết sợi quang do rung động vật lý hay biến thiên nhiệt độ môi trường, khi mã hóa pha quang học của các xung photon đơn đi qua cáp sợi quang đường dài bằng kỹ thuật điều chế pha kép hoặc dịch pha vi phân DPS)
- **뉘앙스와 사용법:** 도시 내 실제 포설된 상용 통신망의 열악한 환경 속에서도 끊김 없는 양자 암호 통신을 유지하기 위한 핵심 성능 척도이다.
- **재사용 가능한 콜로케이션·청크:**
  - 광섬유양자키분배위상편이변조전송신뢰성을 평가하다 (đánh giá độ tin cậy truyền dẫn điều chế dịch pha phân phối khóa lượng tử sợi quang)
  - 차동위상편이부호화와 편광무관광학계 (mã hóa dịch pha vi phân và hệ quang không phụ thuộc phân cực)
  - 광통신망외란보정과 양자비트에러율 (bù trừ nhiễu loạn mạng quang và tỷ lệ lỗi bit lượng tử)
- **자주 쓰는 문형과 성분:**
  - 광섬유양자키분배위상편이변조전송신뢰성이 우수하다 (độ tin cậy truyền dẫn điều chế dịch pha phân phối khóa lượng tử sợi quang rất xuất sắc)
  - 광섬유양자키분배위상편이변조전송신뢰성을 획기적으로 개선하다 (cải thiện đột phá độ tin cậy truyền dẫn điều chế dịch pha phân phối khóa lượng tử sợi quang)
- **사회적 관계·주제별 register:** 광통신공학, 양자네트워크 표준화 및 전기전자공학 전문 논문.
- **예문:** 능동적 위상 보상 알고리즘을 도입함으로써 도심 지하 광섬유양자키분배위상편이변조전송신뢰성을 99.9% 이상으로 끌어올릴 수 있었다.
- **Dịch:** Bằng việc đưa vào thuật toán bù pha chủ động, người ta đã có thể nâng độ tin cậy truyền dẫn điều chế dịch pha phân phối khóa lượng tử sợi quang ngầm nội đô lên trên 99,9%.
- **어휘 연결:**
  - 위상편이변조 (điều chế dịch pha / PSK)
  - 전송신뢰성 (độ tin cậy truyền dẫn / Transmission reliability)
- **영어 참고:** fiber-optic quantum key distribution phase-shift keying transmission reliability — độ tin cậy truyền dẫn điều chế dịch pha phân phối khóa lượng tử sợi quang

---

### 연속변수양자키분배국소발진기동기화기술

- **발음:** [연속변수양자키분배국소발진기동기화기술]
- **품사:** 명사
- **핵심 의미:** 단일 광자 대신 결맞음 상태(coherent state)의 전자기장 진폭 및 위상 사분위(quadrature)를 측정하여 암호키를 생성하는 연속 변수(CV-QKD) 시스템에서, 고가의 기준 광원을 직접 전송하지 않고 수신단에 독립적으로 배치된 국소 발진기(Local Oscillator, LO)의 주파수와 위상을 디지털 신호 처리(DSP)를 통해 고정밀로 동기화시키는 첨단 제어 기술
- **베트남어 뜻:** công nghệ đồng bộ hóa bộ dao động nội phân phối khóa lượng tử biến liên tục CV-QKD (công nghệ điều khiển tiên tiến đồng bộ hóa với độ chính xác cao pha và tần số của bộ dao động nội LO bố trí độc lập tại đầu thu thông qua xử lý tín hiệu số DSP mà không cần phải truyền trực tiếp nguồn sáng chuẩn đắt tiền, trong hệ thống biến liên tục CV-QKD tạo khóa mật mã bằng cách đo các thành phần cầu phương pha và biên độ trường điện từ của trạng thái kết hợp coherent thay vì dùng photon đơn)
- **뉘앙스와 사용법:** 기존 통신 장비(호모다인 검출기)와 호환성이 뛰어나며, 도청자가 국소 발진기 광선을 조작하는 부채널 공격을 원천적으로 봉쇄한다.
- **재사용 가능한 콜로케이션·청크:**
  - 연속변수양자키분배국소발진기동기화기술을 구현하다 (hiện thực hóa công nghệ đồng bộ hóa bộ dao động nội phân phối khóa lượng tử biến liên tục)
  - 디지털신호처리기반위상복원 (phục hồi pha dựa trên xử lý tín hiệu số)
  - 호모다인검출과 국소발진기잡음억제 (phát hiện homodyne và triệt tiêu nhiễu bộ dao động nội)
- **자주 쓰는 문형과 성분:**
  - 연속변수양자키분배국소발진기동기화기술에 힘입어 (nhờ có công nghệ đồng bộ hóa bộ dao động nội phân phối khóa lượng tử biến liên tục)
  - 연속변수양자키분배국소발진기동기화기술을 채용하다 (ứng dụng công nghệ đồng bộ hóa bộ dao động nội phân phối khóa lượng tử biến liên tục)
- **사회적 관계·주제별 register:** 양자전자공학, 광자학, 광통신 집적회로 연구 전문 문서.
- **예문:** 새로운 연속변수양자키분배국소발진기동기화기술 덕분에 표준 통신용 DFB 레이저만으로도 수신단 위상을 완벽히 추적하여 키 생성률을 세 배 향상시켰다.
- **Dịch:** Nhờ công nghệ đồng bộ hóa bộ dao động nội phân phối khóa lượng tử biến liên tục mới, người ta đã có thể theo dấu hoàn hảo pha tại đầu thu chỉ bằng laser DFB chuẩn viễn thông, nâng tỷ lệ tạo khóa lên gấp ba lần.
- **어휘 연결:**
  - 연속변수양자통신 (truyền thông lượng tử biến liên tục / CV-QKD)
  - 국소발진기 (bộ dao động nội / Local oscillator)
- **영어 참고:** continuous-variable quantum key distribution local oscillator synchronization technology — công nghệ đồng bộ bộ dao động nội trong phân phối khóa lượng tử biến liên tục

---

### 양자비트오류율임계치초과도청탐지알고리즘

- **발음:** [양자비트오류율임계치초과도청탐지알고리즘]
- **품사:** 명사
- **핵심 의미:** 양자키분배 과정에서 합의된 샘플 비트들을 비교하여 계산된 양자비트 오류율(QBER)이 도청자의 개입 없이 자연 노이즈만으로 발생할 수 있는 이론적 임계 한계값(예: BB84 기준 11%)을 초과하는 즉시, 전송로에 도청자(Eve)가 침입하여 상태를 관측·복제하려 시도한 것으로 판단하고 프로토콜을 즉시 중단하며 생성 키를 전량 폐기하는 보안 감시 알고리즘
- **베트남어 뜻:** thuật toán phát hiện nghe lén vượt ngưỡng tỷ lệ lỗi bit lượng tử QBER (thuật toán giám sát an ninh so sánh các bit mẫu thống nhất trong quá trình phân phối khóa lượng tử, nếu tỷ lệ lỗi bit lượng tử QBER tính toán được vượt quá giá trị ngưỡng giới hạn lý thuyết có thể phát sinh do nhiễu tự nhiên thuần túy như 11% theo chuẩn BB84, sẽ lập tức xác định rằng kẻ nghe lén Eve đã xâm nhập tuyến truyền dẫn nhằm cố tình quan sát và sao chép trạng thái, qua đó đình chỉ ngay lập tức giao thức và hủy bỏ toàn bộ khóa vừa tạo)
- **뉘앙스와 사용법:** 양자역학의 측정에 의한 파동함수 붕괴 원리를 이용하여 침입자의 존재를 100% 감지해내는 양자 보안의 핵심 논리적 방패이다.
- **재사용 가능한 콜로케이션·청크:**
  - 양자비트오류율임계치초과도청탐지알고리즘을 가동하다 (kích hoạt thuật toán phát hiện nghe lén vượt ngưỡng tỷ lệ lỗi bit lượng tử QBER)
  - 오류율임계치초과와 즉각적세션차단 (vượt ngưỡng tỷ lệ lỗi và lập tức ngắt phiên làm việc)
  - 샘플비트비교와 정보누설량추정 (so sánh bit mẫu và ước tính lượng thông tin rò rỉ)
- **자주 쓰는 문형과 성분:**
  - 양자비트오류율임계치초과도청탐지알고리즘에 의해 포착되다 (bị phát hiện bởi thuật toán phát hiện nghe lén vượt ngưỡng tỷ lệ lỗi bit lượng tử QBER)
  - 양자비트오류율임계치초과도청탐지알고리즘이 작동하다 (thuật toán phát hiện nghe lén vượt ngưỡng tỷ lệ lỗi bit lượng tử QBER hoạt động)
- **사회적 관계·주제별 register:** 정보보안공학, 양자네트워크 보안 관제 센터 지침서.
- **예문:** 외부 광섬유 탭핑 시도가 발생하자 양자비트오류율임계치초과도청탐지알고리즘이 0.1초 만에 이상 징후를 감지하고 암호화 세션을 안전하게 폐기하였다.
- **Dịch:** Khi có hành vi trích trộm tín hiệu sợi quang bên ngoài diễn ra, thuật toán phát hiện nghe lén vượt ngưỡng tỷ lệ lỗi bit lượng tử QBER đã phát hiện điềm bất thường chỉ sau 0,1 giây và hủy bỏ phiên mã hóa một cách an toàn.
- **어휘 연결:**
  - 양자비트에러율 (tỷ lệ lỗi bit lượng tử / QBER)
  - 도청탐지 (phát hiện nghe lén / Eavesdropping detection)
- **영어 참고:** quantum bit error rate threshold exceedance eavesdropping detection algorithm — thuật toán phát hiện nghe lén khi vượt ngưỡng tỷ lệ lỗi bit lượng tử

---

### 자유공간양자암호통신대기난류보정적응광학

- **발음:** [자유공간양자암호통신대기난류보정저긍광학]
- **품사:** 명사
- **핵심 의미:** 지상 기지국과 인공위성 간, 또는 건물 간 자유 공간(free space)을 통과하는 양자 암호 광자 신호가 대기권의 온도 변화, 기압 요동 및 바람에 의한 난류로 인해 파면 왜곡(wavefront distortion)과 빔 퍼짐 현상을 겪을 때, 고속 파면 센서와 변형 거울(deformable mirror)을 사용하여 실시간으로 왜곡을 역보정함으로써 결맞음과 광자 수신율을 극대화하는 광학 제어 기술
- **베트남어 뜻:** quang học thích ứng bù nhiễu loạn khí quyển truyền thông mật mã lượng tử không gian tự do (công nghệ điều khiển quang học tối đa hóa tỷ lệ thu nhận photon và độ kết hợp bằng cách sử dụng gương biến dạng deformable mirror và cảm biến đầu sóng tốc độ cao để bù trừ ngược thời gian thực sự méo mó, khi tín hiệu photon mật mã lượng tử truyền qua không gian tự do giữa các tòa nhà hoặc giữa trạm mặt đất và vệ tinh nhân tạo bị biến dạng mặt sóng và loang chùm tia do nhiễu loạn khí quyển sinh ra bởi gió, dao động khí áp và chênh lệch nhiệt độ)
- **뉘앙스와 사용법:** 지상-위성 간 글로벌 양자 암호 위성망(예: 묵자호) 구축 시 대기권 통과 구간의 극심한 손실을 극복하는 핵심 기반 기술이다.
- **재사용 가능한 콜로케이션·청크:**
  - 자유공간양자암호통신대기난류보정적응광학을 결합하다 (kết hợp quang học thích ứng bù nhiễu loạn khí quyển truyền thông mật mã lượng tử không gian tự do)
  - 변형거울파면제어와 빔도달효율 (điều khiển mặt sóng gương biến dạng và hiệu suất chùm tia chạm tới)
  - 위성지상국양자링크와 대기신틸레이션억제 (liên kết lượng tử trạm mặt đất - vệ tinh và triệt tiêu nhấp nháy khí quyển)
- **자주 쓰는 문형과 성분:**
  - 자유공간양자암호통신대기난류보정적응광학에 기반하여 운용되다 (vận hành dựa trên quang học thích ứng bù nhiễu loạn khí quyển truyền thông mật mã lượng tử không gian tự do)
  - 자유공간양자암호통신대기난류보정적응광학을 통해 수신율을 높이다 (nâng cao tỷ lệ thu nhận thông qua quang học thích ứng bù nhiễu loạn khí quyển truyền thông mật mã lượng tử không gian tự do)
- **사회적 관계·주제별 register:** 위성통신공학, 적응광학 및 우주양자물리학 전문 학술지.
- **예문:** 천문대 연구팀은 자유공간양자암호통신대기난류보정적응광학 시스템을 가동하여 난류가 심한 야간에도 저궤도 양자 위성으로부터 단일 광자를 80% 이상의 효율로 수신하였다.
- **Dịch:** Nhóm nghiên cứu tại đài thiên văn đã vận hành hệ thống quang học thích ứng bù nhiễu loạn khí quyển truyền thông mật mã lượng tử không gian tự do để thu nhận photon đơn từ vệ tinh lượng tử quỹ đạo thấp với hiệu suất trên 80% ngay cả trong đêm nhiễu loạn mạnh.
- **어휘 연결:**
  - 적응광학 (quang học thích ứng / Adaptive optics)
  - 자유공간양자통신 (truyền thông lượng tử không gian tự do / Free-space QKD)
- **영어 참고:** free-space quantum cryptography atmospheric turbulence compensation adaptive optics — quang học thích ứng bù nhiễu loạn khí quyển trong mật mã lượng tử không gian tự do

---

### 단일광자원결맞음양자상태순도보장제어기법

- **발음:** [단일광자원결마듬양자상태순도보장제어기뻡]
- **품사:** 명사
- **핵심 의미:** 양자점(quantum dots)이나 다이아몬드 질소 공공(NV center), 파라메트릭 하향 변환(SPDC) 소자에서 방출되는 광자가 원치 않는 다중 광자 쌍을 포함하지 않고 오직 순수한 단일 광자 상태를 유지하도록, 2차 세기 상관 함수 g^(2)(0)을 0에 근접하게 억제하고 광자 간 식별 불가능성(indistinguishability)과 결맞음 시간을 극대화하는 정밀 양자 광원 제어 기법
- **베트남어 뜻:** kỹ thuật điều khiển bảo đảm độ tinh khiết trạng thái lượng tử kết hợp nguồn photon đơn (kỹ thuật điều khiển nguồn sáng lượng tử chính xác nhằm tối đa hóa thời gian kết hợp và tính bất khả phân biệt giữa các photon, triệt tiêu hàm tương quan cường độ bậc hai g^(2)(0) tiệm cận 0 để các photon phát ra từ các phần tử chuyển đổi hạ tần tham số SPDC, tâm khuyết tật nitơ kim cương NV center hay chấm lượng tử duy trì trạng thái photon đơn thuần khiết tuyệt đối mà không chứa các cặp đa photon ngoài ý muốn)
- **뉘앙스와 사용법:** 도청자가 펄스 분할 공격(photon-number splitting)을 감행하는 것을 원천 방지하고 양자 연산의 신뢰도를 보장하는 핵심 물리학적 기술이다.
- **재사용 가능한 콜로케이션·청크:**
  - 단일광자원결맞음양자상태순도보장제어기법을 적용하다 (áp dụng kỹ thuật điều khiển bảo đảm độ tinh khiết trạng thái lượng tử kết hợp nguồn photon đơn)
  - 이차상관함수측정과 다중광자방출억제 (đo hàm tương quan bậc hai và triệt tiêu phát xạ đa photon)
  - 양자점단일광자원과 광자식별불가능성 (nguồn photon đơn chấm lượng tử và tính bất khả phân biệt của photon)
- **자주 쓰는 문형과 성분:**
  - 단일광자원결맞음양자상태순도보장제어기법으로 최적화되다 (được tối ưu hóa bằng kỹ thuật điều khiển bảo đảm độ tinh khiết trạng thái lượng tử kết hợp nguồn photon đơn)
  - 단일광자원결맞음양자상태순도보장제어기법을 통해 달성되다 (được đạt tới thông qua kỹ thuật điều khiển bảo đảm độ tinh khiết trạng thái lượng tử kết hợp nguồn photon đơn)
- **사회적 관계·주제별 register:** 나노포토닉스, 반도체양자물리학, 양자소자공학.
- **예문:** 새로 제작된 마이크로공진기 소자는 단일광자원결맞음양자상태순도보장제어기법을 바탕으로 g^(2)(0) 값을 0.01 미만으로 낮추어 이상적인 단일 광자 방출 특성을 달성하였다.
- **Dịch:** Linh kiện vi cộng hưởng mới chế tạo dựa trên kỹ thuật điều khiển bảo đảm độ tinh khiết trạng thái lượng tử kết hợp nguồn photon đơn đã hạ giá trị g^(2)(0) xuống dưới 0,01, đạt đặc tính phát xạ photon đơn lý tưởng.
- **어휘 연결:**
  - 단일광자원 (nguồn photon đơn / Single-photon source)
  - 결맞음시간 (thời gian kết hợp / Coherence time)
- **영어 참고:** single-photon source coherence quantum state purity assurance control technique — kỹ thuật điều khiển bảo đảm độ tinh khiết trạng thái lượng tử kết hợp của nguồn photon đơn

---

### 후선택없는벨시험검출효율임계값충족조건

- **발음:** [후선택엄는벨시험검출효율임계값충족조건]
- **품사:** 명사
- **핵심 의미:** 벨 부등식 위반을 증명할 때 검출되지 않은 광자 데이터를 자의적으로 폐기하거나 사후 선별(post-selection)함으로써 생기는 통계적 편향 왜곡(fair-sampling loophole)을 배제하기 위해, 광자 측정 시스템 전체의 총 검출 효율(광원 방출, 광학계 투과율 및 검출기 양자 효율의 곱)이 이론적으로 요구되는 최소 임계 한계값(Eberhard 조건 기준 약 66.7% 내지 82.8%)을 반드시 초과해야 하는 물리적 필수 충족 조건
- **베트남어 뜻:** điều kiện thỏa mãn ngưỡng giá trị hiệu suất phát hiện phép thử Bell không hậu tuyển (điều kiện vật lý bắt buộc mà toàn bộ hiệu suất dò của hệ thống đo photon gồm tích của hiệu suất lượng tử đầu dò, độ truyền qua hệ quang và phát xạ nguồn phải vượt qua ngưỡng giá trị giới hạn tối thiểu đòi hỏi về mặt lý thuyết khoảng 66,7% đến 82,8% theo tiêu chuẩn Eberhard, nhằm loại trừ sự sai lệch thiên kiến thống kê do tùy tiện loại bỏ hay hậu tuyển các dữ liệu photon không được phát hiện khi chứng minh vi phạm bất đẳng thức Bell)
- **뉘앙스와 사용법:** 검출 실패를 은폐하지 않고 모든 입출력 이벤트를 정직하게 포함하여 양자 비국소성을 엄밀하게 증명하기 위한 최상위 물리 규격이다.
- **재사용 가능한 콜로케이션·청크:**
  - 후선택없는벨시험검출효율임계값충족조건을 달성하다 (đạt được điều kiện thỏa mãn ngưỡng giá trị hiệu suất phát hiện phép thử Bell không hậu tuyển)
  - 초전도나노와이어검출기와 양자효율극대화 (đầu dò hạt nano siêu dẫn và tối đa hóa hiệu suất lượng tử)
  - 공정표본추출가정배제와 엄밀한통계검증 (loại bỏ giả định lấy mẫu công bằng và kiểm chứng thống kê nghiêm ngặt)
- **자주 쓰는 문형과 성분:**
  - 후선택없는벨시험검출효율임계값충족조건을 통과해야 한다 (phải vượt qua điều kiện thỏa mãn ngưỡng giá trị hiệu suất phát hiện phép thử Bell không hậu tuyển)
  - 후선택없는벨시험검출효율임계값충족조건에 의해 입증되다 (được minh chứng bởi điều kiện thỏa mãn ngưỡng giá trị hiệu suất phát hiện phép thử Bell không hậu tuyển)
- **사회적 관계·주제별 register:** 양자역학 기초연구, 정밀측정물리학 및 양자정보표준.
- **예문:** 연구진은 극저온 초전도 나노와이어 단일광자검출기를 도입하여 후선택없는벨시험검출효율임계값충족조건을 84.5%로 가볍게 돌파하였다.
- **Dịch:** Nhóm nghiên cứu đã ứng dụng đầu dò photon đơn dây nano siêu dẫn nhiệt độ cực thấp để dễ dàng vượt qua điều kiện thỏa mãn ngưỡng giá trị hiệu suất phát hiện phép thử Bell không hậu tuyển ở mức 84,5%.
- **어휘 연결:**
  - 검출효율 (hiệu suất phát hiện / Detection efficiency)
  - 에버하드조건 (điều kiện Eberhard / Eberhard condition)
- **영어 참고:** loophole-free Bell test detection efficiency threshold satisfaction condition without post-selection — điều kiện thỏa mãn ngưỡng hiệu suất phát hiện thử nghiệm Bell không chọn lọc sau

---

### 양자내성암호하이브리드키교환네트워크보안

- **발음:** [양자내성암호하이브리드키교환네트워크보안]
- **품사:** 명사
- **핵심 의미:** 미래의 대규모 쇼어 알고리즘 기반 양자 컴퓨터가 등장하더라도 기존 공개키 암호체계가 일거에 붕괴되는 것을 막기 위해, 격자 기반 암호(Lattice-based cryptography) 등 수학적 난제에 기반한 양자내성 암호(PQC) 알고리즘과 물리적 하드웨어 안전성을 제공하는 양자키분배(QKD) 기술을 이중으로 결합하여 암호키를 교환하고 관리하는 차세대 복합 네트워크 보안 아키텍처
- **베트남어 뜻:** an ninh mạng trao đổi khóa lai mật mã kháng lượng tử (kiến trúc an ninh mạng phức hợp thế hệ mới kết hợp kép giữa công nghệ phân phối khóa lượng tử QKD cung cấp tính an toàn phần cứng vật lý và các thuật toán mật mã kháng lượng tử PQC dựa trên các bài toán toán học nan giải như mật mã dựa trên lưới, nhằm trao đổi và quản lý khóa mật mã để ngăn chặn hệ thống mật mã khóa công khai truyền thống bị sụp đổ hoàn toàn khi các máy tính lượng tử quy mô lớn chạy thuật toán Shor xuất hiện trong tương lai)
- **뉘앙스와 사용법:** 물리 계층(QKD)과 소프트웨어 응용 계층(PQC)의 강점을 유기적으로 통합하여 전환기 양자 위협에 완벽히 대비하는 표준 방어 전략이다.
- **재사용 가능한 콜로케이션·청크:**
  - 양자내성암호하이브리드키교환네트워크보안을 구축하다 (xây dựng an ninh mạng trao đổi khóa lai mật mã kháng lượng tử)
  - 격자기반암호와 양자키분배의융합 (sự kết hợp giữa phân phối khóa lượng tử và mật mã dựa trên lưới)
  - 미래양자위협대비와 이중암호화체계 (chuẩn bị trước mối đe dọa lượng tử tương lai và hệ thống mã hóa kép)
- **자주 쓰는 문형과 성분:**
  - 양자내성암호하이브리드키교환네트워크보안 체계로 이행하다 (chuyển dịch sang hệ thống an ninh mạng trao đổi khóa lai mật mã kháng lượng tử)
  - 양자내성암호하이브리드키교환네트워크보안 가이드라인을 준수하다 (tuân thủ hướng dẫn an ninh mạng trao đổi khóa lai mật mã kháng lượng tử)
- **사회적 관계·주제별 register:** 국가사이버안보, 정보보호학, 금융전산망 및 차세대 인터넷 보안 표준.
- **예문:** 주요 시중은행들은 금융 거래 데이터 유출을 방지하기 위해 양자내성암호하이브리드키교환네트워크보안 인프라를 전산망에 조기 도입하기로 결정하였다.
- **Dịch:** Các ngân hàng thương mại lớn đã quyết định sớm đưa cơ sở hạ tầng an ninh mạng trao đổi khóa lai mật mã kháng lượng tử vào mạng điện toán để phòng chống rò rỉ dữ liệu giao dịch tài chính.
- **어휘 연결:**
  - 양자내성암호 (mật mã kháng lượng tử / Post-Quantum Cryptography / PQC)
  - 하이브리드보안 (an ninh lai ghép / Hybrid security)
- **영어 참고:** post-quantum cryptography hybrid key exchange network security — an ninh mạng trao đổi khóa lai ghép mật mã kháng lượng tử

---

## 종합 읽기 지문

양자암호 및 양자정보 연구진은 절대 해킹이 불가능한 통신망을 구축하고자 장치독립형양자키분배비국소성보안성증명 체계를 체계적으로 수립했다. 연구팀은 엄밀한 벨부등식위반양자얽힘검증루프홀차단기법 기법을 적용하여 보안성을 확보하고, 진정한 양자난수생성기원천적비예측성물리적구현 장치를 개발했다. 또한 외부 물리적 해킹 차단을 위해 사이드채널공격방어단일광자검출기무결성 평가를 수행하고, 장거리 얽힘증류프로토콜양자통신채널노이즈정제 기술을 도입했다. 측정 장치의 신뢰성 확보를 위해 측정장치독립양자키분배광학간섭계위상동기 모듈을 구현했으며, 전국망 양자중계기메모리노드장거리양자통신망구축 프로젝트를 적극 추진했다. 비국소성 정량화를 위해 클라우저호른시모니홀트부등식위반계수산출 작업을 수행하고, 광섬유양자키분배위상편이변조전송신뢰성 성능을 입증했다. 대역폭 확장을 위해 연속변수양자키분배국소발진기동기화기술 방식을 적용했으며, 도청 방지를 위해 양자비트오류율임계치초과도청탐지알고리즘 기제를 가동했다. 우주 위성 통신을 위해 자유공간양자암호통신대기난류보정적응광학 시스템을 구축하고, 초고순도 단일광자원결맞음양자상태순도보장제어기법 기술을 확보했다. 완전한 양자성 검증을 위해 후선택없는벨시험검출효율임계값충족조건 기준을 달성하고, 양자내성암호하이브리드키교환네트워크보안 체계를 확립했다. 최종적으로 차세대 글로벌 양자 암호 네트워크를 완성하여 미래 보안 인프라의 기술적 기반을 다졌다.

**베트남어 번역:**

Nhóm nghiên cứu mật mã lượng tử và thông tin lượng tử đã xác lập có hệ thống hệ thống chứng minh tính bảo mật phi định xứ phân phối khóa lượng tử độc lập thiết bị nhằm xây dựng mạng lưới truyền thông tuyệt đối không thể bị tấn công. Nhóm nghiên cứu đã áp dụng kỹ thuật kỹ thuật ngăn chặn lỗ hổng kiểm chứng vướng víu lượng tử vi phạm bất đẳng thức Bell nghiêm ngặt để bảo đảm tính an toàn, đồng thời phát triển thiết bị hiện thực hóa vật lý tính bất khả dự đoán nguồn gốc bộ tạo số ngẫu nhiên lượng tử chân thực. Họ cũng tiến hành đánh giá tính toàn vẹn máy dò photon đơn phòng thủ tấn công kênh bên để ngăn chặn các vụ xâm nhập vật lý từ bên ngoài, và đưa vào công nghệ tinh lọc nhiễu kênh truyền thông lượng tử giao thức chưng cất vướng víu cự ly dài. Nhằm bảo đảm độ tin cậy của thiết bị đo, nhóm đã chế tạo mô-đun đồng bộ pha giao thoa kế quang học phân phối khóa lượng tử độc lập thiết bị đo, và tích cực thúc đẩy dự án xây dựng mạng lưới truyền thông lượng tử tầm xa nút bộ nhớ bộ lặp lượng tử quy mô quốc gia. Để định lượng tính phi định xứ, họ đã thực hiện công tác tính toán hệ số vi phạm bất đẳng thức Clauser-Horne-Shimony-Holt, và chứng minh hiệu năng độ tin cậy truyền dẫn điều chế dịch pha phân phối khóa lượng tử sợi quang. Để mở rộng băng thông, nhóm đã áp dụng phương thức công nghệ đồng bộ hóa bộ dao động cục bộ phân phối khóa lượng tử biến số liên tục, đồng thời kích hoạt cơ chế thuật toán phát hiện nghe lén vượt ngưỡng tỷ lệ lỗi bit lượng tử nhằm chống nghe lén. Phục vụ truyền thông vệ tinh vũ trụ, họ đã xây dựng hệ thống quang học thích ứng hiệu chỉnh nhiễu loạn khí quyển truyền thông mật mã lượng tử không gian tự do, và nắm vững kỹ thuật kỹ thuật kiểm soát bảo đảm độ tinh khiết trạng thái lượng tử kết hợp nguồn photon đơn siêu tinh khiết. Nhằm kiểm chứng hoàn toàn tính lượng tử, nhóm đã đạt được tiêu chuẩn điều kiện thỏa mãn giá trị ngưỡng hiệu suất phát hiện thử nghiệm Bell không chọn lọc sau, và xác lập hệ thống bảo mật mạng trao đổi khóa lai mật mã kháng lượng tử. Cuối cùng, việc hoàn thiện mạng lưới mật mã lượng tử toàn cầu thế hệ mới đã củng cố vững chắc nền tảng kỹ thuật cho hạ tầng bảo mật tương lai.
