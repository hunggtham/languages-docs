<!-- source_policy: original explanations, examples, and passage; quantum cryptography and post-quantum key exchange terminology cross-checked conceptually, not copied -->

# 양자 채널 보안과 후양자 암호 전환

양자 역학의 기본 원리를 통신 보안에 응용한 양자키분배(QKD)와 차세대 수학적 난제를 기반으로 한 후양자암호(PQC)는 도래하는 양자 컴퓨팅 시대의 핵심 보안 방패로 주목받고 있다. 물리 계층에서는 양자채널보안, 단일광자검출기, 양자난수생성기, 양자얽힘광원 등 정밀한 광학 하드웨어를 통해 도청 시도를 원천 탐지하고 무결한 비밀키를 분배하는 기술이 비약적으로 발전하고 있다. 동시에 기존의 공개키 암호 인프라를 신속히 양자내성 체계로 이행하기 위한 격자기반암호와 안전한 키교환프로토콜 기반의 후양자암호전환 작업이 전 세계적으로 긴박하게 추진되는 추세다. 본 학습 자료에서는 하드웨어 기반의 물리적 양자 보안과 소프트웨어 기반의 수학적 알고리즘 혁신을 아우르는 핵심 전문 어휘 15개를 체계적으로 학습한다.

<!-- lexical_basis: advanced_native; register: quantum physical layer security and transmission standards; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 양자채널보안

**품사:** 명사

**핵심 의미:** 양자역학의 측정 불확정성 원리와 복제 불가능성 정리를 활용하여, 광자(photon) 등 양자 상태를 전송하는 물리적 채널에서 정보 도청이나 간섭이 발생할 경우 이를 즉각 감지하고 기밀성을 보장하는 통신 보안 기술 체계다.

**베트남어 뜻:** an toàn kênh lượng tử (quantum channel security); hệ thống và giải pháp bảo vệ đường truyền vật lý nơi các photon mang trạng thái lượng tử được gửi đi, dựa trên nguyên lý bất định và định lý không thể sao chép để đảm bảo mọi nỗ lực can thiệp hay nghe lén đều bị phát hiện ngay lập tức.

**뉘앙스와 사용법:** `양자채널보안` là khái niệm bảo mật ở tầng vật lý (`물리 계층 보안` — physical layer security) mang tính cách mạng, hoàn toàn khác biệt với các giao thức bảo mật dữ liệu truyền thống như TLS hay IPsec vốn dựa vào độ phức tạp của bài toán tính toán học (`수학적 복잡도` — mathematical complexity). Trong kênh truyền thống, kẻ tấn công có thể trích xuất một phần tín hiệu ánh sáng bằng thiết bị kẹp sợi quang mà người gửi và người nhận không hề hay biết. Ngược lại, trong `양자채널보안`, do thông tin được mang bởi từng photon đơn lẻ, theo định lý không sao chép lượng tử (`양자 복제 불가능성 정리` — no-cloning theorem), kẻ nghe lén không thể tạo bản sao trạng thái photon; mọi hành vi đo đạc đều làm thay đổi trạng thái lượng tử của hạt và gây nhiễu kênh truyền. Nhờ đó, tính an toàn của kênh lượng tử đạt mức an toàn thông tin lý thuyết vô điều kiện (`무조건적 정보이론적 안전성` — unconditional information-theoretic security).

**재사용 가능한 콜로케이션·청크:** `양자채널보안 확보` — đảm bảo an toàn kênh lượng tử, `물리 계층 양자채널보안` — an toàn kênh lượng tử tầng vật lý, `양자채널보안 모니터링` — giám sát an toàn kênh lượng tử, `양자채널보안 프로토콜` — giao thức an toàn kênh lượng tử.

**자주 쓰는 문형과 성분:** `광섬유 기간망에 양자채널보안을 선제적으로 적용하여 감청 위협을 차단하다` (áp dụng đón đầu an toàn kênh lượng tử vào mạng trục cáp quang để ngăn chặn nguy cơ nghe lén), `양자채널보안의 무결성을 실시간으로 검증하다` (kiểm chứng tính toàn vẹn của an toàn kênh lượng tử theo thời gian thực).

**사회적 관계·주제별 register:** Báo cáo an ninh mạng viễn thông quốc gia, tiêu chuẩn kỹ thuật truyền thông mật mã lượng tử (ITU-T SG17), các cuộc họp chiến lược giữa nhà mạng hạ tầng và chuyên gia bảo mật chính phủ.

**예문:** 국가 금융망의 백본 회선에 양자채널보안을 선제적으로 구축함으로써 미래의 초고성능 양자컴퓨터를 활용한 도청 위협을 원천 차단했다.

**Dịch:** Nhờ chủ động thiết lập an toàn kênh lượng tử trên các tuyến đường trục của mạng tài chính quốc gia, mối đe dọa nghe lén sử dụng siêu máy tính lượng tử trong tương lai đã bị ngăn chặn triệt để từ gốc.

**어휘 연결:** `양자채널보안` (an toàn kênh lượng tử) tập trung vào bảo vệ trạng thái vật lý của photon trên đường truyền, phân biệt với `알고리즘 보안` (bảo mật thuật toán) vốn phụ thuộc vào sức mạnh tính toán để bảo vệ dữ liệu nhị phân đã số hóa.

**영어 참고:** *quantum channel security* — an toàn kênh lượng tử; cơ chế bảo vệ kênh truyền dẫn lượng tử dựa trên các định luật vật lý cơ bản để ngăn chặn việc trích xuất thông tin trái phép.

---

<!-- lexical_basis: advanced_native; register: hardware cryptography and physical entropy engineering; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 양자난수생성기

**품사:** 명사

**핵심 의미:** 방사성 붕괴, 광자의 위상 흔들림, 진공 요동 등 순수한 양자역학적 물리 현상의 본질적 불확정성을 측정하여, 알고리즘으로 결코 예측하거나 재현할 수 없는 진정한 난수(true random numbers)를 생성하는 하드웨어 장치다.

**베트남어 뜻:** máy tạo số ngẫu nhiên lượng tử (QRNG - Quantum Random Number Generator); thiết bị phần cứng tạo ra các chuỗi số ngẫu nhiên thực sự không thể đoán trước bằng cách đo đạc các hiện tượng vật lý lượng tử có tính bất định ngẫu nhiên nội tại, loại bỏ hoàn toàn nguy cơ giải mã do quy luật lặp lại.

**뉘앙스와 사용법:** Hầu hết các hệ thống bảo mật máy tính hiện nay sử dụng bộ tạo số ngẫu nhiên giả (`의사난수생성기` — PRNG - Pseudo Random Number Generator), dựa trên các thuật toán phần mềm và một giá trị mồi (`시드값` — seed). Tuy nhiên, nếu tin tặc tìm ra seed hoặc giải mã được thuật toán, toàn bộ chuỗi số ngẫu nhiên tiếp theo sẽ bị đoán trước dễ dàng. Ngược lại, `양자난수생성기` khai thác bản chất ngẫu nhiên tuyệt đối của cơ học lượng tử — ví dụ như sự tán xạ của hạt ánh sáng qua bộ chia chùm (`빔 스플리터` — beam splitter) hoặc dao động pha của laser. Vì kết quả đo lượng tử là ngẫu nhiên thuần túy, chuỗi khóa sinh ra có độ hỗn loạn (entropy) hoàn hảo. Ngày nay, các chipset `양자난수생성기` siêu nhỏ đã được tích hợp vào điện thoại di động thông minh, thiết bị IoT và mô-đun bảo mật phần cứng (HSM) trong ngân hàng.

**재사용 가능한 콜로케이션·청크:** `초소형 양자난수생성기 칩셋` — chipset máy tạo số ngẫu nhiên lượng tử siêu nhỏ, `양자난수생성기 기반 암호키` — khóa mã hóa dựa trên máy tạo số ngẫu nhiên lượng tử, `고속 양자난수생성기 개발` — phát triển máy tạo số ngẫu nhiên lượng tử tốc độ cao, `물리적 양자난수생성기` — máy tạo số ngẫu nhiên lượng tử vật lý.

**자주 쓰는 문형과 성분:** `하드웨어 기반 양자난수생성기를 장착하여 예측 불가능한 일회용 비밀키를 생성하다` (trang bị máy tạo số ngẫu nhiên lượng tử dựa trên phần cứng để tạo khóa bí mật dùng một lần bất khả dự đoán), `양자난수생성기의 엔트로피 소스를 지속적으로 검증하다` (kiểm chứng liên tục nguồn entropy của máy tạo số ngẫu nhiên lượng tử).

**사회적 관계·주제별 register:** Báo cáo công nghệ bán dẫn mật mã, tài liệu thẩm định tiêu chuẩn an toàn thông tin (NIST SP 800-90B, FIPS), diễn đàn thiết kế chip bảo mật phần cứng.

**예문:** 차세대 보안 인증 서버는 소프트웨어 난수 알고리즘 대신 하드웨어 양자난수생성기를 장착해 공격자가 암호화 키 패턴을 역추적할 가능성을 근본적으로 제거했다.

**Dịch:** Máy chủ xác thực bảo mật thế hệ mới đã trang bị máy tạo số ngẫu nhiên lượng tử phần cứng thay vì thuật toán số ngẫu nhiên phần mềm, qua đó loại bỏ căn bản khả năng kẻ tấn công truy vết ngược quy luật của khóa mã hóa.

**어휘 연결:** `양자난수생성기` (QRNG) tạo ra `진성난수` (true random numbers) dựa trên hiện tượng lượng tử ngẫu nhiên tuyệt đối, đối lập hoàn toàn với `의사난수생성기` (PRNG) chỉ mô phỏng tính ngẫu nhiên thông qua công thức toán học có tính chu kỳ.

**영어 참고:** *Quantum Random Number Generator (QRNG)* — máy tạo số ngẫu nhiên lượng tử; phần cứng khai thác các hiện tượng lượng tử bất định để cung cấp nguồn entropy hoàn hảo cho việc sinh khóa mã hóa.

---

<!-- lexical_basis: advanced_native; register: quantum optics instrumentation and single-photon detection; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 단일광자검출기

**품사:** 명사

**핵심 의미:** 빛의 가장 작은 에너지 단위인 단 하나의 광자(single photon)가 도달했을 때 이를 감지하여 전기적 신호로 변환해 주는 초고감도 광학 측정 장치다.

**베트남어 뜻:** bộ phát hiện đơn photon (SPD - Single-Photon Detector); thiết bị quang điện tử siêu nhạy có khả năng nhận biết từng photon đơn lẻ — hạt lượng tử ánh sáng mang năng lượng tối thiểu — và biến đổi thành tín hiệu điện xung để đo đạc chính xác trong các giao thức lượng tử.

**뉘앙스와 사용법:** Trong các giao thức phân phối khóa lượng tử (QKD) như BB84, thông tin bảo mật được mã hóa trên từng photon riêng lẻ nhằm ngăn chặn việc kẻ tấn công trích xuất một phần chùm sáng (`광자수 분할 공격` — photon number splitting attack). Do đó, thiết bị tại đầu thu bắt buộc phải là `단일광자검출기`. Thiết bị này đòi hỏi các chỉ số kỹ thuật cực kỳ khắt khe: hiệu suất phát hiện photon (`검출 효율` — detection efficiency), tỷ lệ phát xung sai do nhiệt khi không có ánh sáng (`암계수` — dark count rate), và thời gian phục hồi sau mỗi lần kích hoạt (`불응 시간` — dead time). Các công nghệ hàng đầu hiện nay bao gồm đi-ốt tuyết quang tuyết lở chế độ Geiger (`SPAD` — Single-Photon Avalanche Diode) và bộ phát hiện sợi nano siêu dẫn (`SNSPD` — Superconducting Nanowire Single-Photon Detector) vận hành trong môi trường nhiệt độ siêu hàn gần độ không tuyệt đối.

**재사용 가능한 콜로케이션·청크:** `초전도 나노와이어 단일광자검출기` — bộ phát hiện đơn photon sợi nano siêu dẫn, `단일광자검출기의 암계수 억제` — kiềm chế tỷ lệ đếm tối của bộ phát hiện đơn photon, `단일광자검출기 검출 효율` — hiệu suất phát hiện của bộ phát hiện đơn photon, `고속 단일광자검출기 모듈` — mô-đun bộ phát hiện đơn photon tốc độ cao.

**자주 쓰는 문형과 성분:** `수신단에 초고감도 단일광자검출기를 탑재하여 장거리 전송 감쇄를 극복하다` (trang bị bộ phát hiện đơn photon siêu nhạy ở đầu thu để khắc phục suy hao truyền dẫn cự ly dài), `단일광자검출기의 신호 대 잡음비를 개선하여 통신 품질을 높이다` (cải thiện tỷ số tín hiệu trên nhiễu của bộ phát hiện đơn photon để nâng cao chất lượng truyền thông).

**사회적 관계·주제별 register:** Báo cáo kỹ thuật thiết bị quang học lượng tử, bài báo khoa học vật lý quang tử thực nghiệm, tài liệu hướng dẫn vận hành trạm thu phát thông tin lượng tử.

**예문:** 장거리 양자통신 시험망에서는 광섬유를 통과하며 극도로 감쇄된 신호를 잡아내기 위해 극저온 냉각 방식의 초전도 단일광자검출기를 도입했다.

**Dịch:** Trên mạng thử nghiệm thông tin lượng tử cự ly dài, bộ phát hiện đơn photon siêu dẫn dạng làm lạnh cực sâu đã được áp dụng nhằm thu nhận các tín hiệu đã bị suy hao cực độ khi đi qua sợi cáp quang.

**어휘 연결:** `단일광자검출기` (bộ dò đơn photon) đo lường hạt photon ở mức năng lượng lượng tử vi mô riêng lẻ, khác biệt với `일반 광검출기` (photodetector thông thường) vốn chỉ phản hồi trước chùm quang thông vĩ mô gồm hàng triệu photon cùng lúc.

**영어 참고:** *single-photon detector (SPD)* — bộ phát hiện đơn photon; linh kiện cảm biến quang điện tử siêu nhạy có khả năng phát hiện từng hạt photon đơn lẻ trong mạng truyền thông lượng tử.

---

<!-- lexical_basis: advanced_native; register: quantum eavesdropping surveillance and channel verification; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 도청시도탐지

**품사:** 명사

**핵심 의미:** 양자 통신 채널을 통과하는 광자의 양자 상태를 제3자가 측정하거나 가로채려 할 때 발생하는 양자 역학적 상태 붕괴와 비트 오류율 상승을 분석하여, 외부의 불법 감청 행위를 실시간으로 알아내는 기능이다.

**베트남어 뜻:** phát hiện nỗ lực nghe lén (eavesdropping attempt detection); cơ chế nhận diện và cảnh báo tức thì mọi hành vi can thiệp, đánh cắp hay đo lén trạng thái lượng tử của bên thứ ba trên kênh truyền nhờ vào sự xáo trộn trạng thái quang học và sự gia tăng bất thường của tỷ lệ lỗi bit.

**뉘앙스와 사용법:** Trong thế giới viễn thông cổ điển, kẻ tấn công có thể nghe lén thụ động (`수동적 도청` — passive eavesdropping) bằng cách đặt bộ phân nhánh quang mà dữ liệu không hề bị suy suyển, khiến hai bên liên lạc hoàn toàn không phát hiện được. Ngược lại, trong mạng lượng tử, `도청시도탐지` là hệ quả vật lý tất yếu bắt nguồn từ nguyên lý bất định Heisenberg (`불확정성 원리`). Kẻ nghe trộm (Eve) không thể đọc dữ liệu mà không thực hiện phép đo, và phép đo lượng tử sẽ làm sụp đổ hàm sóng của photon, gây ra các lỗi ngẫu nhiên trong chuỗi bit nhận được. Khi tỷ lệ lỗi vượt quá giới hạn an toàn cho phép, hệ thống sẽ tự động kích hoạt quy trình `도청시도탐지`, lập tức hủy bỏ toàn bộ phiên tạo khóa và cảnh báo sự hiện diện của kẻ thù.

**재사용 가능한 콜로케이션·청크:** `실시간 도청시도탐지` — phát hiện nỗ lực nghe lén theo thời gian thực, `도청시도탐지 메커니즘 구축` — thiết lập cơ chế phát hiện nỗ lực nghe lén, `도청시도탐지 임계치 설정` — thiết lập ngưỡng phát hiện nỗ lực nghe lén, `도청시도탐지 시 세션 종료` — chấm dứt phiên khi phát hiện nỗ lực nghe lén.

**자주 쓰는 문형과 성분:** `양자 채널 상에서 미세한 도청시도탐지를 수행하여 데이터 유출 위험을 사전에 차단하다` (thực hiện phát hiện nỗ lực nghe lén vi mô trên kênh lượng tử để ngăn chặn từ sớm nguy cơ rò rỉ dữ liệu), `도청시도탐지가 활성화되면 생성 중인 비밀키를 전량 폐기하다` (khi kích hoạt phát hiện nỗ lực nghe lén, hủy bỏ toàn bộ khóa bí mật đang sinh ra).

**사회적 관계·주제별 register:** Báo cáo vận hành an ninh mạng truyền dẫn cáp quang, giáo trình mật mã học hiện đại, các chỉ thị tác chiến không gian mạng của cơ quan phòng thủ quốc gia.

**예문:** 침입자가 광섬유에 물리적 접촉을 가해 광자를 빼내려 하자, 시스템의 도청시도탐지 기능이 작동하면서 해당 회선의 키 분배가 즉각 중단되었다.

**Dịch:** Ngay khi kẻ xâm nhập tác động vật lý lên sợi cáp quang nhằm trích xuất photon, chức năng phát hiện nỗ lực nghe lén của hệ thống đã kích hoạt và ngay lập tức dừng quá trình phân phối khóa trên tuyến đó.

**어휘 연결:** `도청시도탐지` (phát hiện nghe lén trên kênh lượng tử) dựa trên nguyên lý vật lý không thể làm giả, đối lập với `침입탐지` (IDS truyền thống) vốn chỉ phân tích các quy luật gói tin hoặc lưu lượng logic ở tầng ứng dụng và mạng.

**영어 참고:** *eavesdropping attempt detection* — phát hiện nỗ lực nghe lén; khả năng phát hiện tức thì sự can thiệp của bên thứ ba vào kênh truyền dẫn quang học dựa trên sự biến đổi trạng thái lượng tử.

---

<!-- lexical_basis: advanced_native; register: quantum physics and entangled photon generation; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 양자얽힘광원

**품사:** 명사

**핵심 의미:** 비선형 광학 결정을 통해 하나의 고에너지 펌프 광자를 두 개의 광자로 분할함으로써, 공간적으로 멀리 떨어져 있어도 서로 완벽한 양자 상관관계를 유지하는 한 쌍의 얽힘 광자를 방출하는 특수 광원 장치다.

**베트남어 뜻:** nguồn photon vướng víu lượng tử (entangled photon source); thiết bị quang học phát ra các cặp photon có sự liên đới/vướng víu lượng tử chặt chẽ, sao cho trạng thái đo lường của hạt này sẽ lập tức quy định trạng thái của hạt kia dù hai hạt được đưa tới hai địa điểm cách xa nhau.

**뉘앙스와 사용법:** `양자얽힘광원` là thiết bị cốt lõi cho các giao thức phân phối khóa lượng tử dựa trên vướng víu (như giao thức Ekert91) cũng như mạng Internet lượng tử trong tương lai. Nguồn này thường ứng dụng hiện tượng tán xạ tham số tự phát giảm tần (`자발적 매개변수 하향변환` — SPDC - Spontaneous Parametric Down-Conversion) trong các tinh thể phi tuyến (như BBO, PPKTP). Hai photon sinh ra được gửi tới hai trạm khác nhau (Alice và Bob). Khi hai bên đo phân cực hay pha, kết quả sẽ luôn tương quan hoàn hảo mà không cần truyền thông tin mã hóa qua không gian. Điều này giúp loại trừ nguy cơ bị nghe lén trên đường truyền, vì thông tin mật mã chỉ hình thành tại thời điểm đo đạc đồng thời của hai bên.

**재사용 가능한 콜로케이션·청크:** `고휘도 양자얽힘광원` — nguồn photon vướng víu lượng tử độ chói cao, `양자얽힘광원 모듈 소형화` — thu nhỏ mô-đun nguồn photon vướng víu lượng tử, `양자얽힘광원의 가시도` — độ hiển thị của nguồn photon vướng víu lượng tử, `우주용 양자얽힘광원 탑재` — trang bị nguồn photon vướng víu lượng tử dùng cho vũ trụ.

**자주 쓰는 문형과 성분:** `고품질 양자얽힘광원을 이용해 분산 노드 간에 얽힘 쌍을 안정적으로 분배하다` (sử dụng nguồn photon vướng víu lượng tử chất lượng cao để phân phối ổn định các cặp vướng víu giữa các nút mạng phân tán), `양자얽힘광원의 상관관계 순도를 극대화하다` (tối đa hóa độ thuần khiết của mối tương quan từ nguồn photon vướng víu lượng tử).

**사회적 관계·주제별 register:** Báo cáo vật lý quang học thực nghiệm, nghiên cứu phát triển vệ tinh truyền thông lượng tử, tài liệu kỹ thuật của các phòng thí nghiệm quốc gia về công nghệ lượng tử.

**예문:** 연구진은 지상과 위성 간 수천 킬로미터 거리에서도 얽힘 상태가 유지되는 고휘도 양자얽힘광원을 개발하여 우주 양자통신 시험에 성공했다.

**Dịch:** Nhóm nghiên cứu đã phát triển nguồn photon vướng víu lượng tử độ chói cao duy trì được trạng thái vướng víu ở cự ly hàng nghìn kilômét giữa mặt đất và vệ tinh, thử nghiệm thành công thông tin lượng tử không gian vũ trụ.

**어휘 연결:** `양자얽힘광원` (nguồn photon vướng víu) phát ra các cặp photon có trạng thái liên kết chặt chẽ với nhau, khác biệt với `단일광자원` (single-photon source) vốn chỉ phát từng photon đơn lẻ độc lập không có hạt đối tác vướng víu.

**영어 참고:** *entangled photon source* — nguồn photon vướng víu lượng tử; nguồn quang học chuyên dụng tạo ra các cặp photon liên đới lượng tử phục vụ truyền khóa mật mã và kết nối các nút mạng lượng tử.

---

<!-- lexical_basis: advanced_native; register: quantum transmission quality metrics and channel benchmarking; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 양자비트오류율

**품사:** 명사

**핵심 의미:** 양자 채널을 통해 송수신된 광자 신호 중 잡음, 채널 손실, 광학계 불완전성 또는 도청자의 간섭으로 인해 원래 보낸 비트 값과 다르게 측정된 비트의 비율을 나타내는 핵심 정량 지표다.

**베트남어 뜻:** tỷ lệ lỗi bit lượng tử (QBER - Quantum Bit Error Rate); tham số định lượng thể hiện tỷ lệ phần trăm số bit lượng tử bị sai lệch so với giá trị ban đầu trong quá trình truyền qua kênh quang học, đóng vai trò then chốt để đánh giá độ nhiễu và phát hiện nghe lén.

**뉘앙스와 사용법:** `양자비트오류율` (viết tắt là QBER) là "huyết áp" và thước đo an toàn sống còn trong mọi hệ thống phân phối khóa lượng tử (QKD). QBER bao gồm lỗi quang học tự nhiên (nhiễu tối của detector, biến động pha trong sợi quang) cộng với lỗi do hành vi can thiệp của kẻ nghe lén gây ra. Theo định lý an toàn thông tin của giao thức BB84, nếu `양자비트오류율` duy trì dưới ngưỡng lý thuyết khoảng 11%, hai bên hoàn toàn có thể loại bỏ lỗi và loại trừ thông tin rò rỉ thông qua các thuật toán hậu xử lý để tạo ra khóa an toàn tuyệt đối. Tuy nhiên, nếu QBER vượt qua ngưỡng này, hệ thống buộc phải phán đoán rằng kênh truyền đang bị do thám nghiêm trọng và lập tức đình chỉ việc tạo khóa (`비밀키 생성 중단`).

**재사용 가능한 콜로케이션·청크:** `양자비트오류율 임계값` — ngưỡng tỷ lệ lỗi bit lượng tử, `실시간 양자비트오류율 측정` — đo lường tỷ lệ lỗi bit lượng tử theo thời gian thực, `양자비트오류율을 낮추다` — hạ thấp tỷ lệ lỗi bit lượng tử, `양자비트오류율 변동 추이` — diễn biến biến động của tỷ lệ lỗi bit lượng tử.

**자주 쓰는 문형과 성분:** `양자비트오류율을 실시간으로 추적하여 선로의 품질과 도청 여부를 판별하다` (theo dõi tỷ lệ lỗi bit lượng tử theo thời gian thực để phân định chất lượng đường truyền và sự hiện diện của nghe lén), `광학계 정렬을 통해 양자비트오류율을 1% 미만으로 억제하다` (căn chỉnh hệ quang học để kiềm chế tỷ lệ lỗi bit lượng tử xuống dưới 1%).

**사회적 관계·주제별 register:** Báo cáo vận hành kỹ thuật viễn thông lượng tử, biên bản thử nghiệm nghiệm thu thiết bị mật mã quang học, hội thảo quốc tế về đo lường lượng tử.

**예문:** 장거리 광케이블 구간에서 외기 온도 변화로 양자비트오류율이 일시적으로 상승했으나 자동 위상 제어 장치가 즉각 안정화시켰다.

**Dịch:** Trên đoạn cáp quang cự ly dài, tỷ lệ lỗi bit lượng tử đã tạm thời tăng lên do biến động nhiệt độ ngoài trời, nhưng thiết bị tự động điều khiển pha đã lập tức ổn định lại.

**어휘 연결:** `양자비트오류율` (QBER) đo tỷ lệ lỗi ở tầng photon lượng tử và phản ánh trực tiếp sự can thiệp của nghe lén, trong khi `비트오류율` (BER - Bit Error Rate) trong mạng cổ điển chỉ đơn thuần đo lường tỷ lệ lỗi bit nhị phân do suy hao và tạp âm tín hiệu điện/quang.

**영어 참고:** *Quantum Bit Error Rate (QBER)* — tỷ lệ lỗi bit lượng tử; tỷ lệ lỗi bit trong truyền thông lượng tử, chỉ số quyết định để đánh giá chất lượng kênh và tính an toàn của khóa mật mã.

---

<!-- lexical_basis: advanced_native; register: cryptographic post-processing and information theory; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 비밀키증류

**품사:** 명사

**핵심 의미:** 양자 채널을 통해 원시 키(raw key)를 교환한 후, 고전 공개 채널을 이용하여 기지국 간 오류를 정정(error correction)하고 잠재적 도청자가 가진 부분 정보를 완전히 제거하는 비밀 증폭(privacy amplification) 후처리 연산 과정이다.

**베트남어 뜻:** chưng cất khóa bí mật / tinh lọc khóa bí mật (secret key distillation); quy trình tính toán hậu xử lý trên kênh công khai sau khi trao đổi khóa lượng tử thô, bao gồm việc sửa sai đồng bộ dữ liệu giữa hai bên và khuếch đại tính riêng tư để triệt tiêu toàn bộ thông tin rò rỉ, tạo ra chuỗi khóa bí mật an toàn tuyệt đối cuối cùng.

**뉘앙스와 사용법:** Việc phát và thu nhận photon qua kênh lượng tử mới chỉ tạo ra chuỗi bit thô (`원시 키` — raw key), vốn vẫn còn chứa các bit lỗi do suy hao quang học và có thể đã bị rò rỉ một phần thông tin cho kẻ nghe lén. Quá trình biến chuỗi thô này thành khóa dùng được gọi là `비밀키증류`. Quy trình này gồm hai giai đoạn toán học khắt khe: (1) `오류 정정` (sửa lỗi) bằng các mã như Cascade hay LDPC qua kênh cổ điển công khai để hai bên có chuỗi bit giống hệt nhau, và (2) `비밀 증폭` (privacy amplification) bằng cách sử dụng các hàm băm vạn năng (`유니버설 해시 함수` — universal hash function) để nén chuỗi bit lại, làm suy giảm lượng thông tin mà kẻ tấn công có thể nắm giữ về chuỗi khóa cuối cùng xuống mức thực tế bằng 0.

**재사용 가능한 콜로케이션·청크:** `비밀키증류 후처리 알고리즘` — thuật toán hậu xử lý chưng cất khóa bí mật, `비밀키증류 속도 향상` — nâng cao tốc độ chưng cất khóa bí mật, `비밀키증류 효율` — hiệu suất chưng cất khóa bí mật, `비밀키증류 단계 완료` — hoàn thành giai đoạn chưng cất khóa bí mật.

**자주 쓰는 문형과 성분:** `수신된 원시 비트 열에 비밀키증류 연산을 수행하여 최종 대칭키를 추출하다` (thực hiện phép toán chưng cất khóa bí mật trên chuỗi bit thô nhận được để trích xuất khóa đối xứng cuối cùng), `고성능 하드웨어 가속기로 비밀키증류 처리 시간을 대폭 단축하다` (rút ngắn đáng kể thời gian xử lý chưng cất khóa bí mật bằng bộ tăng tốc phần cứng hiệu năng cao).

**사회적 관계·주제별 register:** Báo cáo nghiên cứu lý thuyết thông tin lượng tử, tài liệu thiết kế phần mềm hệ thống QKD, tiêu chuẩn hóa các giải pháp an ninh mạng lượng tử.

**예문:** 양자 채널에서 교환된 비트 열의 오류율이 허용 범위 내에 있음을 확인한 뒤 곧바로 비밀키증류 과정을 진행하여 최종 암호키를 생성했다.

**Dịch:** Sau khi xác nhận tỷ lệ lỗi của chuỗi bit trao đổi trên kênh lượng tử nằm trong phạm vi cho phép, hệ thống đã lập tức tiến hành quy trình chưng cất khóa bí mật để tạo ra khóa mật mã cuối cùng.

**어휘 연결:** `비밀키증류` (tinh lọc khóa bí mật) là cầu nối biến `원시 키` (raw key, chuỗi bit thô nhiều tạp âm) thành `최종 비밀키` (final secret key, sạch lỗi và bảo mật tuyệt đối) nhờ kết hợp hai bước `오류 정정` (sửa lỗi) và `비밀 증폭` (khuếch đại riêng tư).

**영어 참고:** *secret key distillation* — chưng cất khóa bí mật; tiến trình hậu xử lý toán học bao gồm sửa lỗi và khuếch đại bí mật để chuyển đổi dữ liệu trao đổi lượng tử thô thành khóa mật mã an toàn tuyệt đối.

---

<!-- lexical_basis: advanced_native; register: quantum network infrastructure and long-distance transmission; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 양자중계기망

**품사:** 명사

**핵심 의미:** 광섬유 전송 과정에서 발생하는 광자의 지수함수적 신호 감쇄 한계를 극복하기 위해, 양자 메모리와 얽힘 스와핑(entanglement swapping) 기술을 결합하여 장거리 간 양자 얽힘을 연결하고 전송하는 중계 노드 네트워크다.

**베트남어 뜻:** mạng bộ lặp lượng tử (quantum repeater network); mạng lưới các trạm lặp trung gian tích hợp bộ nhớ lượng tử và kỹ thuật hoán đổi vướng víu để kết nối và chuyển giao trạng thái lượng tử đi xa mà không cần đo đạc hay giải mã ở giữa, khắc phục rào cản suy hao tín hiệu quang học trên các tuyến đường dài.

**뉘앙스와 사용법:** Trong mạng viễn thông thông thường, tín hiệu được khuếch đại bằng các bộ khuếch đại quang học (EDFA). Tuy nhiên, trong truyền thông lượng tử, định lý không sao chép (`양자 복제 불가능성 정리`) nghiêm cấm việc khuếch đại trực tiếp một trạng thái lượng tử chưa biết. Do đó, cự ly truyền photon qua cáp quang chỉ giới hạn trong khoảng 100-200 km. Để xây dựng mạng Internet lượng tử toàn cầu, giải pháp duy nhất là `양자중계기망`. Mạng này chia khoảng cách dài thành nhiều đoạn ngắn, tạo ra các cặp vướng víu trên từng đoạn, lưu trữ tạm thời trong `양자 메모리` (bộ nhớ lượng tử), sau đó thực hiện phép đo Bell để hoán đổi vướng víu (`얽힘 스와핑`), qua đó thiết lập liên kết lượng tử trực tiếp giữa hai đầu mút cách xa hàng ngàn km mà trạm trung gian hoàn toàn không cần biết khóa mật mã.

**재사용 가능한 콜로케이션·청크:** `차세대 양자중계기망 구축` — xây dựng mạng bộ lặp lượng tử thế hệ mới, `양자중계기망 노드 간 동기화` — đồng bộ hóa giữa các nút mạng bộ lặp lượng tử, `전국 규모 양자중계기망` — mạng bộ lặp lượng tử quy mô toàn quốc, `양자중계기망 기반 인터넷` — mạng Internet dựa trên mạng bộ lặp lượng tử.

**자주 쓰는 문형과 성분:** `양자 메모리 성능을 고도화하여 양자중계기망의 전송 거리를 비약적으로 늘리다` (nâng cao hiệu năng bộ nhớ lượng tử để mở rộng vượt bậc khoảng cách truyền dẫn của mạng bộ lặp lượng tử), `양자중계기망을 통해 대륙 간 암호키 분배의 물리적 한계를 극복하다` (khắc phục giới hạn vật lý của phân phối khóa mật mã liên lục địa thông qua mạng bộ lặp lượng tử).

**사회적 관계·주제별 register:** Đề án quy hoạch hạ tầng viễn thông tương lai của chính phủ, bài báo khoa học mạng lượng tử quy mô lớn, báo cáo nghiên cứu kỹ thuật chuyển giao công nghệ lượng tử.

**예문:** 광섬유 케이블의 감쇄 한계를 넘어서 전국 단위의 양자암호통신을 구현하기 위해 양자중계기망의 핵심 소자 개발에 박차를 가하고 있다.

**Dịch:** Nhằm vượt qua giới hạn suy hao của cáp quang và hiện thực hóa truyền thông mật mã lượng tử trên quy mô toàn quốc, việc phát triển các linh kiện cốt lõi cho mạng bộ lặp lượng tử đang được đẩy mạnh.

**어휘 연결:** `양자중계기망` (mạng lặp lượng tử đích thực) duy trì nguyên vẹn tính chất lượng tử và không giải mã dữ liệu ở trạm trung gian, ưu việt hơn hẳn mô hình `신뢰 노드망` (trusted node network - mạng nút tin cậy) vốn buộc phải giải mã khóa thành dữ liệu cổ điển tại mỗi trạm chuyển tiếp, tiềm ẩn nguy cơ mất an toàn nếu trạm bị chiếm quyền.

**영어 참고:** *quantum repeater network* — mạng bộ lặp lượng tử; kiến trúc mạng kết nối các trạm lặp lượng tử sử dụng bộ nhớ và phép hoán đổi liên kết vướng víu để mở rộng cự ly truyền dẫn thông tin lượng tử đường dài.

---

<!-- lexical_basis: advanced_native; register: cybersecurity transition policy and cryptographic migration; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 후양자암호전환

**품사:** 명사

**핵심 의미:** 쇼어(Shor) 알고리즘을 탑재한 미래의 대규모 양자컴퓨터가 현재의 공개키 암호(RSA, ECC 등)를 무력화하는 사태에 대비하여, 기존 정보통신 인프라와 암호 체계를 양자 내성 알고리즘으로 체계적으로 교체하고 이행하는 전 과정이다.

**베트남어 뜻:** chuyển đổi mật mã hậu lượng tử (post-quantum cryptography transition / PQC migration); toàn bộ lộ trình và tiến trình kỹ thuật nhằm nâng cấp, thay thế có hệ thống hạ tầng an ninh mạng, phần mềm và giao thức hiện hành từ các hệ mật mã khóa công khai truyền thống sang các thuật toán có khả năng kháng lượng tử.

**뉘앙스와 사용법:** Mối đe dọa lớn nhất hiện nay là chiến lược "Thu thập bây giờ, giải mã sau" (`선수집 후해독` — Harvest Now, Decrypt Later), trong đó các tổ chức thù địch lưu trữ dữ liệu mã hóa tuyệt mật ngày nay để chờ giải mã bằng máy tính lượng tử trong tương lai. Do đó, `후양자암호전환` không thể trì hoãn. Quá trình chuyển đổi này bao gồm: kiểm kê toàn diện các tài sản mật mã trong hệ thống (`암호 자산 식별` — cryptographic inventory), đánh giá khả năng tương thích của phần cứng và phần mềm, thử nghiệm độ trễ mạng do kích thước khóa PQC lớn hơn, và áp dụng mô hình lai (`하이브리드 암호화` — hybrid encryption, kết hợp cả thuật toán truyền thống và PQC) trong giai đoạn quá độ nhằm đảm bảo tuân thủ tiêu chuẩn mà không làm gián đoạn dịch vụ.

**재사용 가능한 콜로케이션·청크:** `국가 차원의 후양자암호전환 로드맵` — lộ trình chuyển đổi mật mã hậu lượng tử cấp quốc gia, `후양자암호전환 지침 수립` — thiết lập hướng dẫn chuyển đổi mật mã hậu lượng tử, `금융 시스템 후양자암호전환` — chuyển đổi mật mã hậu lượng tử hệ thống tài chính, `후양자암호전환 이행 점검` — kiểm tra thực thi chuyển đổi mật mã hậu lượng tử.

**자주 쓰는 문형과 성분:** `양자 컴퓨터의 상용화 이전에 공공 인프라의 후양자암호전환을 완료하다` (hoàn thành chuyển đổi mật mã hậu lượng tử cho hạ tầng công cộng trước khi máy tính lượng tử được thương mại hóa), `후양자암호전환에 따른 시스템 부하와 호환성을 종합적으로 검증하다` (kiểm chứng toàn diện tải hệ thống và tính tương thích đi kèm quá trình chuyển đổi mật mã hậu lượng tử).

**사회적 관계·주제별 register:** Chiến lược an ninh không gian mạng quốc gia, chỉ thị chuyển đổi số của các cơ quan quản lý tài chính - ngân hàng, kế hoạch hành động hiện đại hóa hệ thống thông tin doanh nghiệp.

**예문:** 정부는 국가 안보와 금융 거래의 기밀성을 항구적으로 수호하기 위해 10개년 후양자암호전환 이행 계획을 확정하고 전 부처에 하달했다.

**Dịch:** Chính phủ đã phê duyệt kế hoạch 10 năm thực thi chuyển đổi mật mã hậu lượng tử và ban hành tới toàn bộ các bộ ngành nhằm bảo vệ vĩnh viễn tính bảo mật của an ninh quốc gia và các giao dịch tài chính.

**어휘 연결:** `후양자암호전환` (chuyển đổi mật mã hậu lượng tử) tập trung vào hiện đại hóa thuật toán toán học trên nền tảng phần mềm máy tính hiện tại, song hành cùng `양자키분배망 구축` (xây dựng mạng QKD phần cứng) để tạo thành thế trận phòng thủ chiều sâu vững chắc.

**영어 참고:** *post-quantum cryptography (PQC) transition / migration* — chuyển đổi mật mã hậu lượng tử; lộ trình quy mô lớn nhằm nâng cấp hệ thống phần mềm và hạ tầng bảo mật hiện hữu sang các thuật toán mật mã có năng lực kháng lại đòn tấn công của máy tính lượng tử.

---

<!-- lexical_basis: advanced_native; register: mathematical cryptography and lattice-based algorithms; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 격자기반암호

**품사:** 명사

**핵심 의미:** 고차원 벡터 공간 내의 격자(lattice) 구조에서 특정 격자점에 가장 가까운 벡터를 찾아내는 최단 벡터 문제(SVP)나 오류 학습 문제(LWE) 등 양자컴퓨터로도 다항 시간 내에 풀기 어려운 수학적 난제를 기반으로 설계된 암호 체계다.

**베트남어 뜻:** mật mã dựa trên lưới (lattice-based cryptography); họ thuật toán mật mã học hậu lượng tử được xây dựng dựa trên độ phức tạp tính toán của các bài toán hình học trên không gian mạng lưới đa chiều (như bài toán tìm vectơ ngắn nhất SVP hay bài toán học có sai số LWE), bài toán mà ngay cả máy tính lượng tử cũng bất lực trong thời gian thực tế.

**뉘앙스와 사용법:** Trong cuộc đua chuẩn hóa mật mã hậu lượng tử (PQC) toàn cầu của NIST, `격자기반암호` đã áp đảo hoàn toàn và trở thành công nghệ trụ cột chính. Các thuật toán tiêu chuẩn hàng đầu như ML-KEM (Kyber) dùng cho trao đổi khóa và ML-DSA (Dilithium) dùng cho chữ ký số đều thuộc nhánh này. Điểm mạnh vượt trội của `격자기반암호` là sự cân bằng hoàn hảo giữa độ an toàn lý thuyết toán học vững chắc, kích thước khóa và bản mã tương đối nhỏ gọn (chỉ vài kilobyte), cùng tốc độ tính toán mã hóa và giải mã cực nhanh trên các bộ vi xử lý máy tính phổ thông ngày nay mà không cần phần cứng lượng tử đặc thù.

**재사용 가능한 콜로케이션·청크:** `격자기반암호 표준화` — tiêu chuẩn hóa mật mã dựa trên lưới, `격자기반암호 알고리즘 구현` — hiện thực hóa thuật toán mật mã dựa trên lưới, `격자기반암호의 안전성 증명` — chứng minh độ an toàn của mật mã dựa trên lưới, `격자기반암호 가속 칩` — chip tăng tốc mật mã dựa trên lưới.

**자주 쓰는 문형과 성분:** `수학적 난제에 기반한 격자기반암호를 채택하여 양자 알고리즘 공격에 대비하다` (áp dụng mật mã dựa trên lưới dựa trên bài toán toán học nan giải để chuẩn bị đối phó đòn tấn công của thuật toán lượng tử), `격자기반암호의 파라미터를 최적화하여 연산 효율과 보안성을 동시에 달성하다` (tối ưu hóa các tham số của mật mã dựa trên lưới để đạt được đồng thời hiệu năng tính toán và độ an toàn).

**사회적 관계·주제별 register:** Mật mã học toán học cao cấp, tài liệu tiêu chuẩn hóa an toàn thông tin quốc tế (NIST FIPS 203/204), phân tích chuyên sâu của các viện nghiên cứu khoa học mật mã.

**예문:** 미국 표준기술연구소가 선정한 주요 후양자 암호 표준의 대다수가 연산 효율과 안전성이 뛰어난 격자기반암호에 집중되어 있다.

**Dịch:** Đa số các tiêu chuẩn mật mã hậu lượng tử chính do Viện Tiêu chuẩn và Kỹ thuật Quốc gia Hoa Kỳ lựa chọn đều tập trung vào mật mã dựa trên lưới nhờ hiệu năng tính toán và độ an toàn vượt trội.

**어휘 연결:** `격자기반암호` (mật mã lưới) là nhánh PQC nổi bật nhất với hiệu năng cân đối, phân biệt với `코드기반암호` (mật mã dựa trên mã sửa sai - khóa rất lớn nhưng bản mã nhỏ) và `해시기반암호` (mật mã dựa trên hàm băm - chủ yếu dùng cho chữ ký số cố định).

**영어 참고:** *lattice-based cryptography* — mật mã dựa trên lưới; phân ngành mật mã học khai thác các bài toán hình học lưới đa chiều làm nền tảng toán học chống lại các đòn tấn công của máy tính lượng tử.

---

<!-- lexical_basis: advanced_native; register: algorithmic cryptography and quantum resilience standards; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 양자내성알고리즘

**품사:** 명사

**핵심 의미:** 쇼어(Shor)나 그로버(Grover) 등 양자 알고리즘을 구동하는 미래의 범용 양자컴퓨터의 공격에도 충분한 연산 복잡도를 유지하여 현실적인 시간 내에 해독되지 않도록 설계된 암호학적 수학 알고리즘이다.

**베트남어 뜻:** thuật toán kháng lượng tử (quantum-resistant algorithm); các thuật toán mật mã toán học được thiết kế để bảo toàn độ phức tạp tính toán cực cao, không bị bẻ gãy trước năng lực giải mã tăng tốc theo hàm số mũ của các thuật toán lượng tử như Shor hay Grover trên máy tính lượng tử.

**뉘앙스와 사용법:** Khái niệm `양자내성알고리즘` là hạt nhân kỹ thuật của phong trào PQC. Trong khi các hệ thống mã hóa khóa công khai hiện hành (RSA, Diffie-Hellman, ECC) đều sụp đổ vì thuật toán Shor có thể giải quyết bài toán phân tích thừa số nguyên tố và logarit rời rạc trong nháy mắt, `양자내성알고리즘` chuyển sang khai thác các bài toán không có cấu trúc chu kỳ để thuật toán lượng tử không thể tận dụng hiện tượng giao thoa tăng tốc tính toán. Ưu điểm thực tiễn to lớn của các thuật toán này là chúng hoàn toàn thuần túy về mặt phần mềm, có thể chạy trực tiếp trên các máy chủ đám mây, máy tính cá nhân và điện thoại thông minh hiện nay thông qua các bản cập nhật phần mềm thông thường.

**재사용 가능한 콜로케이션·청크:** `차세대 양자내성알고리즘 탑재` — trang bị thuật toán kháng lượng tử thế hệ mới, `양자내성알고리즘 표준 규격` — quy chuẩn thuật toán kháng lượng tử tiêu chuẩn, `양자내성알고리즘 검증 체계` — hệ thống kiểm chứng thuật toán kháng lượng tử, `고성능 양자내성알고리즘 라이브러리` — thư viện thuật toán kháng lượng tử hiệu năng cao.

**자주 쓰는 문형과 성분:** `기존 암호화 모듈을 공인된 양자내성알고리즘으로 대체하여 보안 수명을 연장하다` (thay thế mô-đun mã hóa cũ bằng thuật toán kháng lượng tử được công nhận để kéo dài tuổi thọ bảo mật), `양자내성알고리즘의 연산 속도를 개선하여 모바일 기기 적용성을 높이다` (cải thiện tốc độ tính toán của thuật toán kháng lượng tử để tăng tính ứng dụng trên thiết bị di động).

**사회적 관계·주제별 register:** Báo cáo công nghệ bảo mật thông tin, tài liệu kiến trúc hệ thống đám mây, quy định bảo vệ dữ liệu ngành thương mại điện tử và viễn thông.

**예문:** 국방 통신망의 보안 강화를 위해 기존 암호 체계를 소프트웨어 패치만으로 즉시 교체 가능한 양자내성알고리즘으로 전면 개편했다.

**Dịch:** Nhằm củng cố an ninh của mạng truyền thông quốc phòng, hệ thống mật mã cũ đã được cải tổ toàn diện sang các thuật toán kháng lượng tử có thể thay thế ngay tức thì chỉ bằng bản vá phần mềm.

**어휘 연결:** `양자내성알고리즘` (thuật toán kháng lượng tử) là phương pháp bảo mật dựa trên phần mềm toán học chạy trên máy tính thông thường, tạo thành giải pháp bổ trợ hoàn hảo cho `양자키분배` (QKD) vốn là giải pháp bảo mật dựa trên phần cứng quang lượng tử.

**영어 참고:** *quantum-resistant algorithm* — thuật toán kháng lượng tử; thuật toán mật mã toán học duy trì tính an toàn bền vững trước các đòn tấn công giải mã của máy tính lượng tử tương lai.

---

<!-- lexical_basis: advanced_native; register: network security protocols and key exchange architecture; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 키교환프로토콜

**품사:** 명사

**핵심 의미:** 통신하고자 하는 두 개체(송신자와 수신자)가 도청 가능성이 존재하는 네트워크 환경에서 데이터를 암호화하는 데 사용할 대칭 비밀키를 안전하게 공유하기 위해 준수하는 규약 및 절차다.

**베트남어 뜻:** giao thức trao đổi khóa (key exchange protocol / key agreement protocol); bộ quy chuẩn và trình tự thủ tục cho phép hai bên truyền thông thiết lập và thống nhất một khóa bí mật chung một cách an toàn qua mạng công cộng trước khi tiến hành mã hóa dữ liệu.

**뉘앙스와 사용법:** `키교환프로토콜` là nền tảng của mọi kết nối bảo mật trên Internet, ví dụ như cơ chế bắt tay (`핸드셰이크` — handshake) trong giao thức TLS/HTTPS. Trong kỷ nguyên lượng tử, các giao thức trao đổi khóa kinh điển như Diffie-Hellman (DH) hay ECDH đều đứng trước nguy cơ bị bẻ gãy hoàn toàn. Vì vậy, các tổ chức tiêu chuẩn viễn thông toàn cầu đang khẩn trương tái cấu trúc `키교환프로토콜`. Xu hướng chủ đạo hiện nay là triển khai các cơ chế đóng gói khóa lượng tử (`키 캡슐화 메커니즘` — KEM - Key Encapsulation Mechanism) kháng lượng tử hoặc áp dụng mô hình lai (`하이브리드 키교환프로토콜` — hybrid key exchange), trong đó kết hợp đồng thời một thuật toán cổ điển và một thuật toán hậu lượng tử để đảm bảo an toàn tuyệt đối ngay cả khi một trong hai thuật toán phát sinh lỗ hổng bất ngờ.

**재사용 가능한 콜로케이션·청크:** `하이브리드 키교환프로토콜 적용` — áp dụng giao thức trao đổi khóa dạng lai, `양자 안전 키교환프로토콜` — giao thức trao đổi khóa an toàn lượng tử, `키교환프로토콜 설계 및 검증` — thiết kế và kiểm chứng giao thức trao đổi khóa, `키교환프로토콜의 지연 시간 단축` — rút ngắn độ trễ của giao thức trao đổi khóa.

**자주 쓰는 문형과 성분:** `차세대 웹 보안 표준에 양자 내성 키교환프로토콜을 도입하여 세션 안전성을 확보하다` (áp dụng giao thức trao đổi khóa kháng lượng tử vào tiêu chuẩn bảo mật web thế hệ mới để bảo đảm an toàn phiên), `키교환프로토콜 실행 과정에서 발생할 수 있는 중간자 공격을 차단하다` (chặn đứng nguy cơ tấn công kẻ đứng giữa có thể phát sinh trong quá trình thực thi giao thức trao đổi khóa).

**사회적 관계·주제별 register:** Tiêu chuẩn giao thức mạng Internet (IETF RFC), tài liệu kiến trúc an toàn truyền tải dữ liệu, trao đổi kỹ thuật giữa các kỹ sư an ninh mạng và phát triển hạ tầng web.

**예문:** 최신 인터넷 보안 규격에서는 기존 타원곡선 방식과 격자 기반 방식을 결합한 하이브리드 키교환프로토콜을 기본 사양으로 채택했다.

**Dịch:** Trong quy chuẩn an ninh Internet mới nhất, giao thức trao đổi khóa dạng lai kết hợp giữa phương thức đường cong elliptic truyền thống và phương thức dựa trên lưới đã được lựa chọn làm thông số kỹ thuật mặc định.

**어휘 연결:** `키교환프로토콜` (giao thức trao đổi khóa) là quy trình thống nhất sinh và phân phối khóa bí mật chung, phân biệt với `대칭키암호화` (mã hóa khóa đối xứng - như AES-256) vốn sử dụng khóa bí mật đã được trao đổi thành công đó để mã hóa luồng dữ liệu thực tế.

**영어 참고:** *key exchange protocol* — giao thức trao đổi khóa; quy chuẩn bảo mật cho phép các bên thiết lập một khóa bí mật chung qua kênh truyền thông không an toàn một cách bảo mật.

---

<!-- lexical_basis: advanced_native; register: end-to-end network encryption and confidential communication; source_lane: news_formal; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/news_formal -->
### 단대단양자암호

**품사:** 명사

**핵심 의미:** 데이터가 출발하는 송신 단말기부터 최종 수신 단말기까지의 전 구간에 걸쳐 양자키분배나 후양자 암호화 기술을 적용하여, 중간 통신망 사업자나 라우터 등 중계 지점에서도 평문 데이터가 결코 노출되지 않도록 보호하는 전송 보안 구조다.

**베트남어 뜻:** mật mã lượng tử đầu cuối đến đầu cuối (end-to-end quantum cryptography); kiến trúc bảo mật toàn diện áp dụng mật mã lượng tử xuyên suốt từ thiết bị phát của người gửi đến thiết bị nhận đích thực của người nhận, đảm bảo dữ liệu không bao giờ bị giải mã thành dạng thô tại bất kỳ trạm chuyển tiếp, nhà mạng hay nút định tuyến trung gian nào.

**뉘앙스와 사용법:** Trong các mô hình mạng truyền thống, nhiều hệ thống bảo mật chỉ thực hiện mã hóa từng chặng (`구간 암호화` — link encryption). Điều này đồng nghĩa với việc tại mỗi nút trung chuyển mạng viễn thông hoặc trạm lặp tin cậy (`신뢰 노드` — trusted node), dữ liệu có thể bị giải mã sang dạng văn bản gốc (`평문` — plaintext) rồi mới mã hóa lại để truyền tiếp, tạo ra kẽ hở nghiêm trọng nếu trạm trung gian bị xâm nhập. Ngược lại, `단대단양자암호` đảm bảo nguyên tắc bảo mật tối cao: chỉ có hai thiết bị đầu cuối thực sự mới nắm giữ khóa giải mã. Dữ liệu di chuyển qua toàn bộ mạng lưới công cộng hay hạ tầng viễn thông bên thứ ba đều hoàn toàn ở trạng thái mã hóa lượng tử bất khả xâm phạm, đáp ứng các tiêu chuẩn bảo vệ bí mật tuyệt mật của quốc phòng và ngoại giao.

**재사용 가능한 콜로케이션·청크:** `단대단양자암호 체계 구축` — xây dựng hệ thống mật mã lượng tử đầu cuối đến đầu cuối, `단대단양자암호 통신 세션` — phiên truyền thông mật mã lượng tử đầu cuối đến đầu cuối, `단대단양자암호 솔루션` — giải pháp mật mã lượng tử đầu cuối đến đầu cuối, `단대단양자암호의 무결성 보장` — bảo đảm tính toàn vẹn của mật mã lượng tử đầu cuối đến đầu cuối.

**자주 쓰는 문형과 성분:** `정부 행정망 전반에 단대단양자암호를 적용하여 중간자 도청 위험을 원천 배제하다` (áp dụng mật mã lượng tử đầu cuối đến đầu cuối trên toàn mạng hành chính chính phủ để loại trừ triệt để nguy cơ nghe lén kẻ đứng giữa), `단말기 레벨에서 단대단양자암호 키를 직접 교환하다` (trao đổi trực tiếp khóa mật mã lượng tử đầu cuối đến đầu cuối tại cấp độ thiết bị người dùng).

**사회적 관계·주제별 register:** Báo cáo an ninh mạng bảo vệ bí mật quốc gia, chỉ thị của cơ quan tình báo viễn thông, thiết kế hạ tầng truyền thông tối mật của quân đội và các tập đoàn công nghệ lớn.

**예문:** 정상 간 화상 통화 시스템에 단대단양자암호가 적용됨으로써 제3국 통신망이나 중계 서버를 경유하더라도 대화 내용이 도청될 소지를 완전히 없앴다.

**Dịch:** Nhờ việc áp dụng mật mã lượng tử đầu cuối đến đầu cuối cho hệ thống điện đàm truyền hình giữa các nguyên thủ quốc gia, khả năng nội dung đàm thoại bị nghe lén đã bị triệt tiêu hoàn toàn ngay cả khi truyền qua mạng viễn thông hay máy chủ trung gian của nước thứ ba.

**어휘 연결:** `단대단양자암호` (mật mã lượng tử đầu cuối đến đầu cuối) bảo vệ luồng thông tin không gián đoạn từ thiết bị nguồn tới thiết bị đích, vượt trội và an toàn hơn hẳn so với `구간 암호화` (link encryption) vốn giải mã và mã hóa lại tại mỗi nút mạng trung gian.

**영어 참고:** *end-to-end quantum cryptography* — mật mã lượng tử đầu cuối đến đầu cuối; kiến trúc bảo vệ dữ liệu xuyên suốt từ điểm gửi đến điểm nhận bằng công nghệ lượng tử mà không làm lộ dữ liệu thô tại bất kỳ nút mạng chuyển tiếp nào.

---

<!-- lexical_basis: advanced_native; register: quantum hardware vulnerability mitigation and physical defense; source_lane: native_spoken; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/native_spoken -->
### 양자해킹방어

**품사:** 명사

**핵심 의미:** 양자역학 원리 자체의 결함이 아니라 단일광자검출기, 광학 변조기, 빔 스플리터 등 실제 구현 하드웨어의 불완전성이나 물리적 부채널(side-channel) 취약점을 노리는 트로이 목마 공격, 검출기 블라인딩 공격 등을 차단하고 방어하는 기술이다.

**베트남어 뜻:** phòng thủ tấn công hack lượng tử (quantum hacking defense); tập hợp các giải pháp công nghệ nhằm ngăn chặn các cuộc tấn công khai thác lỗ hổng vật lý trên phần cứng thiết bị quang lượng tử thực tế (như làm mù bộ dò bằng laser công suất lớn, tấn công Trojan quang học hay tấn công kênh phụ), bảo đảm độ an toàn của hệ thống trong môi trường thực tiễn.

**뉘앙스와 사용법:** Lý thuyết phân phối khóa lượng tử (QKD) chứng minh tính an toàn vô điều kiện trên giấy, nhưng các thiết bị phần cứng thực tế không bao giờ đạt mức lý tưởng toán học. Tin tặc không tấn công vào hạt photon trên đường bay mà tấn công vào chính thiết bị: ví dụ đòn làm mù detector (`검출기 블라인딩 공격` — detector blinding attack) bằng cách bắn xung laser mạnh khiến detector bị bão hòa và biến thành bộ cảm biến cổ điển nghe theo sự điều khiển của hacker mà không kích hoạt báo động, hoặc đòn tấn công Trojan-horse chiếu ánh sáng vào máy phát để đọc trạng thái bộ điều chế pha. `양자해킹방어` triển khai các bộ lọc quang dải hẹp, cảm biến đo công suất quang bất thường và các giao thức đo độc lập thiết bị (`측정장치 무관 양자키분배` — MDI-QKD - Measurement-Device-Independent QKD) để bịt kín mọi lỗ hổng phần cứng này.

**재사용 가능한 콜로케이션·청크:** `양자해킹방어 대책 수립` — thiết lập đối sách phòng thủ tấn công hack lượng tử, `실시간 양자해킹방어 기술` — công nghệ phòng thủ tấn công hack lượng tử theo thời gian thực, `물리 계층 양자해킹방어 검증` — kiểm chứng phòng thủ tấn công hack lượng tử ở tầng vật lý, `양자해킹방어 모듈 내장` — tích hợp mô-đun phòng thủ tấn công hack lượng tử.

**자주 쓰는 문형과 성분:** `하드웨어 취약점을 보완하는 양자해킹방어 알고리즘을 송수신기에 내장하다` (tích hợp thuật toán phòng thủ tấn công hack lượng tử khắc phục lỗ hổng phần cứng vào máy thu phát), `검출기 눈부심 공격에 대응하여 능동적 양자해킹방어를 수행하다` (thực hiện phòng thủ tấn công hack lượng tử chủ động để đối phó với đòn làm lóa bộ phát hiện).

**사회적 관계·주제별 register:** Báo cáo an ninh phần cứng lượng tử, trao đổi kỹ thuật thực địa giữa các kỹ sư chế tạo thiết bị QKD và đội kiểm thử xâm nhập (red team), hội thảo bảo mật vật lý viễn thông.

**예문:** 상용 양자키분배 시스템의 신뢰성을 확보하기 위해 강력한 레이저 공격을 감지하고 무력화하는 양자해킹방어 회로를 추가로 탑재했다.

**Dịch:** Để đảm bảo độ tin cậy của hệ thống phân phối khóa lượng tử thương mại, mạch phòng thủ tấn công hack lượng tử có khả năng phát hiện và vô hiệu hóa các cuộc tấn công laser công suất lớn đã được tích hợp thêm.

**어휘 연결:** `양자해킹방어` (phòng thủ hack lượng tử) giải quyết các sai lệch và lỗ hổng trên linh kiện vật lý thực tế (`하드웨어 구현 취약점`), phân biệt với `양자암호 안전성 증명` (chứng minh an toàn mật mã lượng tử) vốn chỉ dựa trên mô hình toán lý thuyết hoàn hảo.

**영어 참고:** *quantum hacking defense* — phòng thủ tấn công hack lượng tử; tập hợp các biện pháp bảo vệ chống lại các cuộc tấn công vật lý khai thác sai lệch phần cứng và kênh phụ trên các thiết bị truyền thông lượng tử.

---

<!-- lexical_basis: advanced_native; register: optical engineering and active quantum phase stabilization; source_lane: native_spoken; context: advanced-quantum-cryptography-and-post-quantum-key-exchange/native_spoken -->
### 광학계위상보정

**품사:** 명사

**핵심 의미:** 온도 변화, 외부 진동, 광섬유 굽힘 등 환경적 요인으로 인해 장거리 광섬유 전송로에서 수시로 뒤틀리는 광자의 위상(phase)과 편광 상태를 실시간으로 측정하고 역보정하여 양자 간섭의 선명도를 일정하게 유지하는 정밀 제어 기술이다.

**베트남어 뜻:** hiệu chỉnh pha hệ quang học (optical system phase compensation); kỹ thuật điều khiển chính xác liên tục theo dõi và bù sai lệch pha cũng như trạng thái phân cực của các photon truyền qua sợi cáp quang do ảnh hưởng của nhiệt độ, rung lắc cơ học và biến dạng đường dây, nhằm duy trì độ kết hợp và ổn định của tín hiệu lượng tử.

**뉘앙스와 사용법:** Trong các hệ thống QKD mã hóa thông tin theo pha (phase-encoding), sự thay đổi nhiệt độ chỉ 0,1°C trên sợi cáp quang chôn ngầm dưới đường cũng đủ làm thay đổi chiết suất và chiều dài quang học của sợi thủy tinh, khiến góc pha của photon bị xoay lệch hoàn toàn. Hiện tượng này làm cho tỷ lệ lỗi `양자비트오류율` tăng vọt, khiến hệ thống ngỡ rằng đang có gián điệp nghe lén và tự động ngắt kết nối. Kỹ thuật `광학계위상보정` giải quyết triệt để vấn đề này bằng cách gửi định kỳ các xung quang tham chiếu (`파일럿 펄스` — pilot pulse) để đo độ trôi pha tức thời, sau đó điều khiển bộ dịch pha áp điện (`PZT 위상 변조기` — piezoelectric phase modulator) để bù góc pha ngược lại theo thời gian thực, giữ cho hệ thống luôn hoạt động mượt mà 24/7 trong mọi điều kiện thời tiết khắc nghiệt.

**재사용 가능한 콜로케이션·청크:** `실시간 광학계위상보정 장치` — thiết bị hiệu chỉnh pha hệ quang học theo thời gian thực, `능동형 광학계위상보정 제어` — điều khiển hiệu chỉnh pha hệ quang học dạng chủ động, `광학계위상보정 알고리즘` — thuật toán hiệu chỉnh pha hệ quang học, `정밀 광학계위상보정 기술` — công nghệ hiệu chỉnh pha hệ quang học chính xác.

**자주 쓰는 문형과 성분:** `야외 환경의 온도 요동을 극복하기 위해 능동형 광학계위상보정을 채용하다` (áp dụng hiệu chỉnh pha hệ quang học dạng chủ động để khắc phục sự dao động nhiệt độ của môi trường ngoài trời), `광학계위상보정을 거쳐 양자 간섭 가시도를 최적의 상태로 유지하다` (duy trì độ hiển thị giao thoa lượng tử ở trạng thái tối ưu thông qua hiệu chỉnh pha hệ quang học).

**사회적 관계·주제별 register:** Nhật ký kỹ thuật vận hành mạng cáp quang viễn thông thực địa, thiết kế hệ thống quang cơ điện tử chính xác, báo cáo bảo trì hạ tầng truyền dẫn lượng tử ngầm.

**예문:** 도심 지하에 매설된 광섬유는 차량 통행 진동과 계절별 지중 온도 차이에 취약하므로 초정밀 광학계위상보정 모듈의 상시 가동이 필수적이다.

**Dịch:** Do cáp quang chôn ngầm dưới lòng đô thị rất dễ bị tổn thương bởi rung chấn giao thông và sự chênh lệch nhiệt độ trong lòng đất theo mùa, việc vận hành thường trực mô-đun hiệu chỉnh pha hệ quang học siêu chính xác là yêu cầu tất yếu.

**어휘 연결:** `광학계위상보정` (hiệu chỉnh pha quang học) bù đắp các biến dạng quang học động lực học do môi trường tác động lên đường truyền vật lý, kết hợp chặt chẽ với `편광 보정` (hiệu chỉnh phân cực) để bảo toàn nguyên vẹn trạng thái lượng tử của photon từ nguồn phát đến đầu thu.

**영어 참고:** *optical system phase compensation* — hiệu chỉnh pha hệ quang học; kỹ thuật tự động bù sai lệch pha và phân cực của sóng ánh sáng truyền qua cáp quang nhằm bảo toàn độ chính xác của tín hiệu lượng tử.

---

## 읽기: 절대적 보안을 향한 양자와 수학의 방패

<!-- passage_word_count: 120 Korean eojeol; target_set: 양자채널보안, 양자난수생성기, 단일광자검출기, 도청시도탐지, 양자얽힘광원, 양자비트오류율, 비밀키증류, 양자중계기망, 후양자암호전환, 격자기반암호, 양자내성알고리즘, 키교환프로토콜, 단대단양자암호, 양자해킹방어, 광학계위상보정 -->

미래 양자컴퓨터의 도래로 국가 암호 체계가 위협받자, 정부와 연구진은 물리 법칙과 수학적 난제를 융합한 차세대 방어망 구축에 착수했다. 먼저 초고속 양자난수생성기로 예측 불가능한 엔트로피를 확보하고, 정밀한 양자얽힘광원과 장거리 양자채널보안 기술을 결합해 물리 계층의 도청 가능성을 원천 차단했다. 전송선로의 환경 변화로 인한 신호 왜곡은 능동형 광학계위상보정으로 상쇄하고, 수신단의 고감도 단일광자검출기를 통해 미세한 도청시도탐지와 실시간 양자비트오류율 측정을 수행했다. 측정된 원시 데이터는 엄격한 비밀키증류 과정을 거쳐 안전한 대칭키로 완성되며, 장거리 확장을 위해 메모리 기반의 양자중계기망 연구도 가속화되고 있다. 아울러 검출기 취약점을 노리는 물리적 침해를 막기 위해 철저한 양자해킹방어 솔루션을 도입하는 한편, 기존 통신망 전반의 소프트웨어 보안을 위해 후양자암호전환 정책을 본격 추진했다. 특히 안전성이 입증된 격자기반암호를 바탕으로 표준 양자내성알고리즘을 개발하고, 이를 차세대 키교환프로토콜에 탑재하여 전 구간에서 완전한 단대단양자암호 체계를 완성함으로써 완벽한 정보 주권을 확립했다.

**베트남어 번역:**

Trước nguy cơ hệ thống mật mã quốc gia bị đe dọa bởi sự xuất hiện của máy tính lượng tử trong tương lai, chính phủ và các nhà nghiên cứu đã bắt tay vào xây dựng mạng lưới phòng thủ thế hệ mới dung hợp giữa các quy luật vật lý và bài toán nan giải toán học. Trước tiên, hệ thống bảo đảm nguồn entropy bất khả dự đoán bằng máy tạo số ngẫu nhiên lượng tử siêu tốc độ, đồng thời kết hợp nguồn photon vướng víu lượng tử chuẩn xác với công nghệ an toàn kênh lượng tử cự ly dài để chặn đứng triệt để nguy cơ nghe lén ở tầng vật lý. Sự sai lệch tín hiệu do biến đổi môi trường trên đường truyền được triệt tiêu bằng hiệu chỉnh pha hệ quang học dạng chủ động, song hành với việc sử dụng bộ phát hiện đơn photon độ nhạy cao tại đầu thu để thực hiện phát hiện nỗ lực nghe lén vi mô và đo lường tỷ lệ lỗi bit lượng tử theo thời gian thực. Dữ liệu thô thu nhận được sẽ trải qua quy trình chưng cất khóa bí mật nghiêm ngặt để hoàn thiện thành khóa đối xứng an toàn, trong khi các nghiên cứu về mạng bộ lặp lượng tử dựa trên bộ nhớ cũng đang được tăng tốc nhằm mở rộng cự ly truyền thông đường dài. Bên cạnh đó, nhằm ngăn chặn các hành vi xâm nhập vật lý nhắm vào lỗ hổng bộ phát hiện, các kỹ sư đã áp dụng giải pháp phòng thủ tấn công hack lượng tử triệt để, đồng thời đẩy mạnh chính sách chuyển đổi mật mã hậu lượng tử để bảo đảm an ninh phần mềm trên toàn bộ mạng viễn thông hiện hành. Đặc biệt, việc phát triển thuật toán kháng lượng tử tiêu chuẩn dựa trên mật mã dựa trên lưới đã được chứng minh độ an toàn, rồi tích hợp thuật toán này vào giao thức trao đổi khóa thế hệ mới đã giúp hoàn thiện hệ thống mật mã lượng tử đầu cuối đến đầu cuối trên toàn bộ các phân đoạn, qua đó xác lập vững chắc chủ quyền thông tin toàn vẹn.
