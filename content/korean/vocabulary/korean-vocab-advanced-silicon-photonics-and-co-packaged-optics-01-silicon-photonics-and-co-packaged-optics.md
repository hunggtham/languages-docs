<!-- source_policy: original explanations, examples, and passage; silicon photonics and co-packaged optics terminology cross-checked conceptually, not copied -->

# 실리콘 포토닉스 기반 광전 집적과 공동 패키징 광학 시스템

인공지능 모델 훈련과 초거대 클라우드 데이터센터의 폭발적인 트래픽 증가는 구리 배선 기반 전기 인터커넥트의 저항, 발열, 그리고 대역폭 한계를 여실히 드러내고 있다. 전자의 물리적 병목을 극복하기 위해 반도체 산업은 실리콘 기판 위에 광학 소자를 미세 집적하는 실리콘 포토닉스와, 스위치 반도체와 광 엔진을 동일 패키지 기판 위에 초근접 배치하는 공동 패키징 광학(CPO)으로 패러다임 전환을 추진 중이다. 이 시스템은 실리콘온인슐레이터기판과 광도파로손실최소화 기술을 바탕으로 빛을 가두고 유도하며, 초소형 마이크로링변조기와 열광학위상천이기를 통해 신호를 변조하고 왜곡을 보정한다. 나아가 파장분할다중화소자와 초고속 광검출기응답속도, 반도체레이저단일집적, 그리고 단일칩광전집적과 광스위칭네트워크에 이르는 종합 기술 체계는 대역폭밀도극대화와 초저전력광인터커넥트를 현실화하여 차세대 초고성능 컴퓨팅의 핵심 기반을 제공한다.

<!-- lexical_basis: advanced_native; register: semiconductor photonics and optical interconnect engineering; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 실리콘포토닉스

**품사:** 명사

**핵심 의미:** 반도체 제조의 핵심인 표준 실리콘(CMOS) 공정 인프라를 그대로 활용하여 실리콘 웨이퍼 위에 광도파로, 광변조기, 광검출기 등 다양한 광학 소자를 초미세 집적하고, 구리 전선 대신 빛(광자)을 전송 매개체로 삼아 대용량 데이터를 초고속·저전력으로 전송하는 광전 융합 반도체 기술이다.

**베트남어 뜻:** công nghệ quang tử silicon (Silicon Photonics - SiPh); công nghệ bán dẫn tích hợp quang điện cho phép chế tạo các linh kiện quang học siêu vi (như ống dẫn sóng, bộ điều chế, bộ tách sóng) trực tiếp trên đế bán dẫn silicon bằng quy trình CMOS tiêu chuẩn, sử dụng photon ánh sáng thay thế cho electron trên dây dẫn đồng để đạt tốc độ truyền dẫn siêu cao và giảm thiểu tiêu tán điện năng.

**뉘앙스와 사용법:** Trong kỷ nguyên AI tạo sinh và siêu máy tính, tín hiệu điện trên đường truyền đồng (`구리 배선`) gặp phải giới hạn vật lý nghiêm trọng: điện trở tăng vọt theo tần số, suy hao tín hiệu cao (`신호 감쇄`), tỏa nhiệt lớn và hiện tượng méo tín hiệu. `실리콘포토닉스` xuất hiện như một "cuộc cách mạng giải phóng băng thông", thay thế dòng electron bằng chùm photon ánh sáng di chuyển với vận tốc vô song và gần như không sinh nhiệt ma sát điện trở. Điểm mấu chốt mang tính đột phá của `실리콘포토닉스` không chỉ là "dùng ánh sáng", mà là "tận dụng được hạ tầng sản xuất bán dẫn silicon trị giá hàng trăm tỷ USD hiện có". Thay vì phải xây dựng các nhà máy đặc thù đắt đỏ cho vật liệu quang học hợp chất III-V, các kỹ sư có thể tận dụng các dây chuyền quang khắc và khắc ăn mòn CMOS thương mại (`상용 CMOS 공정 라인`) để sản xuất hàng loạt chip quang học với chi phí cạnh tranh và độ chính xác đến từng nanomet.

**재사용 가능한 콜로케이션·청크:**
`실리콘포토닉스 기반 광트랜시버` — bộ thu phát quang dựa trên quang tử silicon,
`차세대 실리콘포토닉스 플랫폼 개발` — phát triển nền tảng quang tử silicon thế hệ mới,
`실리콘포토닉스 상용화 공정 라인` — dây chuyền quy trình thương mại hóa quang tử silicon,
`실리콘포토닉스 집적회로 설계` — thiết kế mạch tích hợp quang tử silicon.

**자주 쓰는 문형과 성분:**
`초거대 AI 모델의 급격한 데이터 폭증을 수용하기 위해 기존 전기 배선을 실리콘포토닉스 기반 인터커넥트로 전면 전환하다` (chuyển đổi toàn diện hệ thống dây dẫn điện truyền thống sang kết nối quang liên mạch dựa trên quang tử silicon nhằm đáp ứng sự bùng nổ dữ liệu đột biến của các mô hình AI siêu lớn),
`글로벌 파운드리 기업들이 첨단 실리콘포토닉스 공정 킷(PDK)을 공개하며 시장 주도권 경쟁에 나서다` (các tập đoàn gia công bán dẫn toàn cầu công bố bộ công cụ quy trình quang tử silicon tiên tiến nhằm bước vào cuộc đua giành quyền kiểm soát thị trường).

**사회적 관계·주제별 register:** Tài liệu lộ trình công nghệ bán dẫn quốc tế (IRDS), báo cáo phân tích chiến lược của viện nghiên cứu vi điện tử (imec, CEA-Leti), hội thảo quang học truyền thông (OFC, ECOC), và các bài thuyết trình gọi vốn IR của các công ty thiết kế chip bán dẫn.

**예문:** 인공지능 서버 간의 대규모 데이터 병목을 해소하기 위해 구리 케이블 대신 실리콘포토닉스 칩을 탑재한 초고속 광인터커넥트 모듈이 데이터센터에 대거 도입되고 있다.

**Dịch:** Nhằm giải tỏa nút thắt cổ chai dữ liệu quy mô lớn giữa các máy chủ trí tuệ nhân tạo, các mô-đun kết nối quang siêu tốc tích hợp chip quang tử silicon đang được đưa vào triển khai hàng loạt tại các trung tâm dữ liệu thay thế cho cáp đồng.

**어휘 연결:** `실리콘포토닉스` (Silicon Photonics) khai thác nền tảng silicon chi phí thấp để tích hợp quang học, phân biệt với `화합물반도체광학` (III-V Compound Semiconductor Photonics - quang học bán dẫn hợp chất dựa trên InP hay GaAs với ưu thế phát xạ ánh sáng trực tiếp nhưng chi phí đế wafer rất cao và khó tích hợp quy mô cực lớn), và `전자집적회로` (Electronic IC - mạch tích hợp thuần điện tử truyền thống).

**영어 참고:** *silicon photonics (SiPh)* — quang tử học silicon; công nghệ tích hợp các linh kiện quang học lên nền tảng bán dẫn silicon tận dụng công nghệ chế tạo vi mạch CMOS tiêu chuẩn.

---

<!-- lexical_basis: advanced_native; register: advanced packaging and high-density optoelectronics; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 공동패키징광학

**품사:** 명사

**핵심 의미:** 네트워크 스위치나 고성능 가속기 연산 칩(ASIC)과 광학 엔진(Optical Engine)을 시스템 보드 상에 멀리 분리해 두지 않고, 동일한 인터포저(Interposer) 또는 기판(Substrate) 위에 마이크로미터 단위로 초근접 배치하여 패키징함으로써 고주파 전기 배선 길이를 밀리미터 수준으로 단축해 전력 소모와 신호 지연을 획기적으로 낮추는 첨단 이종 집적 패키징 기술이다.

**베트남어 뜻:** quang học đồng đóng gói (Co-Packaged Optics - CPO); công nghệ đóng gói dị thể tiên tiến tích hợp sát sườn công cụ quang học (Optical Engine) và chip xử lý/chuyển mạch trung tâm (Switch ASIC) trên cùng một đế nền (substrate) hoặc lớp chuyển tiếp (interposer), giúp rút ngắn chiều dài đường dẫn điện từ hàng chục centimet xuống còn vài milimet để giảm thiểu điện năng tiêu thụ và độ trễ tín hiệu.

**뉘앙스와 사용법:** Trước đây trong các trung tâm dữ liệu, thiết bị quang học thường nằm ở các mô-đun cắm rút rời (`플러그형 트랜시버` — pluggable transceivers) gắn ở mặt trước bảng điều khiển thiết bị (front panel). Tín hiệu điện tốc độ cao (như 100Gbps hay 200Gbps mỗi làn SerDes) phải chạy quãng đường dài 20–30 cm trên mạch in (PCB) từ chip chuyển mạch đến mô-đun quang, gây tổn hao tín hiệu kinh hoàng và đòi hỏi các chip phục hồi xung nhịp (Retimer/DSP) cực kỳ ngốn điện. `공동패키징광학` (CPO) phá vỡ kiến trúc truyền thống đó bằng cách đưa thẳng các module quang vào "ở chung một nhà" với chip ASIC trên cùng tấm đế đóng gói (`패키지 기판`). Khoảng cách truyền tín hiệu điện co lại chỉ còn vài milimet, cho phép loại bỏ hoàn toàn chip DSP trung gian ngốn điện, tiết kiệm tới 30–40% tổng năng lượng tiêu thụ của hệ thống chuyển mạch và xóa bỏ rào cản tắc nghẽn giao tiếp ngoại vi (`비치프런트 병목` — beachfront bottleneck).

**재사용 가능한 콜로케이션·청크:**
`공동패키징광학 표준 규격 수립` — thiết lập tiêu chuẩn quy cách quang học đồng đóng gói,
`공동패키징광학 기반 초고속 스위치 ASIC` — chip ASIC chuyển mạch siêu tốc dựa trên quang học đồng đóng gói,
`공동패키징광학 모듈 수율 개선` — cải thiện năng suất mô-đun quang học đồng đóng gói,
`공동패키징광학의 열 관리 기술` — công nghệ quản lý nhiệt của quang học đồng đóng gói.

**자주 쓰는 문형과 성분:**
`51.2Tbps를 초과하는 차세대 스위치 시스템에서 전력 소모와 발열을 잡기 위해 공동패키징광학의 도입이 필연적으로 요구되다` (trong hệ thống chuyển mạch thế hệ mới vượt quá 51.2Tbps, việc áp dụng quang học đồng đóng gói được yêu cầu tất yếu để khống chế mức tiêu thụ điện và phát nhiệt),
`광학 엔진과 ASIC을 원 패키지로 융합하는 공동패키징광학 공정의 조립 신뢰성을 검증하다` (kiểm chứng độ tin cậy lắp ráp của quy trình quang học đồng đóng gói dung hợp công cụ quang và ASIC vào một gói duy nhất).

**사회적 관계·주제별 register:** Diễn đàn liên kết mạng quang (OIF), hiệp hội kỹ thuật bao bì bán dẫn (IEEE EPS), báo cáo kiến trúc hệ thống trung tâm dữ liệu siêu quy mô (Meta, Microsoft, Google), tài liệu kỹ thuật đóng gói cấp hệ thống.

**예문:** 데이터센터의 전력 폭주 문제를 해결하기 위해 스위치 칩과 광트랜시버를 동일한 기판에 일체화하는 공동패키징광학 기술이 차세대 표준으로 급부상했다.

**Dịch:** Nhằm giải quyết vấn đề tiêu thụ điện năng bùng phát tại trung tâm dữ liệu, công nghệ quang học đồng đóng gói tích hợp chip chuyển mạch và bộ thu phát quang trên cùng một tấm nền đã nhanh chóng vươn lên thành tiêu chuẩn thế hệ mới.

**어휘 연결:** `공동패키징광학` (CPO) tích hợp quang học và chip logic trực tiếp trên chất nền gói, tạo bước nhảy vọt so với `플러그형광모듈` (Pluggable optical transceiver - mô-đun quang cắm ngoài mặt trước truyền thống) và `기판근접광학` (Near-Packaged Optics - NPO, bước chuyển tiếp đặt mô-đun quang cạnh chip trên bo mạch chủ PCB).

**영어 참고:** *co-packaged optics (CPO)* — quang học đồng đóng gói; kiến trúc đóng gói tiên tiến gắn các công cụ quang điện tử trực tiếp lên cùng chất nền hoặc bộ chuyển tiếp với chip xử lý logic chính.

---

<!-- lexical_basis: advanced_native; register: nanophotonics fabrication and optical loss engineering; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 광도파로손실최소화

**품사:** 명사

**핵심 의미:** 실리콘과 이산화규소(SiO2) 사이의 높은 굴절률 차이로 인해 빛을 가두는 광도파로 내부에서, 나노 에칭 공정 중 발생하는 측벽 거칠기에 의한 광 산란(Scattering)과 물질 자체의 흡수, 급격한 곡률 반경에 따른 벤딩 손실을 나노 공정 최적화 및 도파로 단면 형상 설계를 통해 극도로 억제하는 공학적 기술이다.

**베트남어 뜻:** tối thiểu hóa suy hao ống dẫn sóng quang (Optical Waveguide Loss Minimization); kỹ thuật công nghệ chế tạo nanophotonics nhằm triệt tiêu tối đa các thành phần suy giảm cường độ ánh sáng trong đường dẫn sóng (như tán xạ do độ nhám thành bên sau khắc axit nano, hấp thụ vật liệu và suy hao uốn cong góc hẹp) thông qua xử lý bề mặt siêu phẳng và tối ưu hóa hình học tiết diện ống dẫn.

**뉘앙스와 사용법:** Ống dẫn sóng silicon (`실리콘 광도파로`) có kích thước siêu nhỏ (tiêu chuẩn $450 \times 220\text{ nm}$), tương phản chiết suất rất lớn ($n_{\text{Si}} \approx 3.45$ so với $n_{\text{SiO}_2} \approx 1.45$). Chiết suất cao giúp bẻ cong ánh sáng ở bán kính siêu nhỏ chỉ vài micromet mà không bị rò rỉ ánh sáng, nhưng lại biến bất kỳ một vết mấp mô kích thước vài nanomet trên thành ống (`측벽 거칠기` — sidewall roughness) thành điểm tán xạ ánh sáng thê thảm. `광도파로손실최소화` là chiến trường then chốt của các kỹ sư chế tạo chip quang. Nếu suy hao 도파로손실 ở mức $2\text{ dB/cm}$, chùm sáng qua mạch quang dài chỉ vài centimet sẽ mất hơn một nửa năng lượng trước khi tới bộ tách sóng. Bằng các kỹ thuật làm mịn bề mặt như ủ nhiệt hydro (`수소 열처리`), oxy hóa nhiệt làm nhẵn thành ống (`열산화 평탄화`), và chuyển đổi sang ống dẫn sóng silicon nitride ($Si_3N_4$) ở các tầng dài, các nhà nghiên cứu đã hạ tổn thất xuống dưới $0.1\text{ dB/cm}$, mở đường cho các mạch quang quy mô lớn hoạt động ổn định.

**재사용 가능한 콜로케이션·청크:**
`광도파로손실최소화를 위한 공정 최적화` — tối ưu hóa quy trình nhằm tối thiểu hóa suy hao ống dẫn sóng quang,
`초저손실 광도파로 제작 기술` — công nghệ chế tạo ống dẫn sóng quang siêu tổn hao thấp,
`광도파로손실최소화 설계 가이드라인` — hướng dẫn thiết kế tối thiểu hóa suy hao ống dẫn sóng quang,
`식각 측벽 평탄화를 통한 광도파로손실최소화` — tối thiểu hóa suy hao ống dẫn sóng quang thông qua làm phẳng thành bên sau khắc.

**자주 쓰는 문형과 성분:**
`원자층 증착과 열산화 공정을 적용하여 실리콘 광도파로손실최소화를 성공적으로 달성하다` (áp dụng quy trình lắng đọng lớp nguyên tử và oxy hóa nhiệt để đạt được thành công việc tối thiểu hóa suy hao ống dẫn sóng quang silicon),
`광도파로손실최소화가 뒷받침되지 않으면 다채널 대규모 광학 칩의 광파워 버짓을 맞출 수 없다` (nếu không có sự hỗ trợ của việc tối thiểu hóa suy hao ống dẫn sóng quang thì không thể đáp ứng ngân sách năng lượng quang của chip quang học quy mô lớn đa kênh).

**사회적 관계·주제별 register:** Kỹ sư phòng sạch quang khắc nano bán dẫn, tạp chí photonics thực nghiệm (IEEE JSTQE, Nature Photonics), báo cáo kiểm chuẩn quy trình chế tạo ống dẫn sóng vi mô.

**예문:** 연구진은 플라스마 식각 공정 후 수소 열처리 기법을 도입하여 측벽 거칠기를 나노미터 이하로 제어함으로써 광도파로손실최소화를 구현했다.

**Dịch:** Nhóm nghiên cứu đã áp dụng kỹ thuật ủ nhiệt hydro sau quy trình khắc plasma nhằm kiểm soát độ nhám thành bên xuống dưới mức nanomet, qua đó hiện thực hóa việc tối thiểu hóa suy hao ống dẫn sóng quang.

**어휘 연결:** `광도파로손실최소화` (Waveguide loss minimization) kiểm soát suy hao lan truyền dọc đường ống quang, liên hệ chặt chẽ với `광결합효율향상` (Coupling efficiency enhancement - kiểm soát suy hao tại điểm giao tiếp đưa ánh sáng từ ngoài vào chip).

**영어 참고:** *optical waveguide loss minimization* — tối thiểu hóa suy hao ống dẫn sóng quang; các giải pháp vật lý và quy trình chế tạo nano nhằm giảm thiểu tán xạ bề mặt, suy hao hấp thụ và rò rỉ uốn cong trong ống dẫn sóng.

---

<!-- lexical_basis: advanced_native; register: optoelectronic modulator devices and resonant silicon photonics; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 마이크로링변조기

**품사:** 명사

**핵심 의미:** 버스 광도파로 옆에 수 마이크로미터 반경의 초소형 원형 링 도파로를 근접 배치하여 특정 파장에서 광 공진을 일으키고, 실리콘 도핑 영역에 전압을 인가하여 자유 캐리어 농도를 변조함으로써 굴절률과 공진 파장을 초고속으로 이동시켜 통과하는 연속파(CW) 레이저 빛의 세기를 고속 디지털 신호로 변환하는 초소형 공진형 광변조기이다.

**베트남어 뜻:** bộ điều chế cộng hưởng vi vòng (Micro-Ring Modulator - MRM); linh kiện biến điệu quang học siêu vi cấu tạo từ một ống dẫn sóng thẳng (bus waveguide) ghép sát một ống dẫn sóng hình khuyên tròn bán kính chỉ vài micromet, lợi dụng hiệu ứng tán sắc plasma hạt mang điện tự do để dịch chuyển bước sóng cộng hưởng khi cấp xung điện, qua đó biến chùm tia laser liên tục thành chuỗi tín hiệu xung quang tốc độ cực cao.

**뉘앙스와 사용법:** Để truyền dữ liệu quang, ta phải biến dòng điện 0 và 1 thành tín hiệu tắt và bật của chùm ánh sáng. Bộ biến điệu truyền thống là Mach-Zehnder (`마하젠더 변조기` — MZM) có kích thước dài tới vài milimet vì cần độ dài tương tác lớn, chiếm diện tích sàn chip khổng lồ và ngốn điện. Ngược lại, `마이크로링변조기` (MRM) là kiệt tác thu nhỏ: đường kính của nó chỉ khoảng 5 đến 20 $\mu\text{m}$ (nhỏ hơn hàng trăm lần so với MZM) và tiêu thụ điện năng cực thấp (dưới vài chục femtojoule/bit). Nhờ kích thước siêu nhỏ, hàng chục bộ MRM có thể xếp nối tiếp trên cùng một ống dẫn sóng để phục vụ ghép kênh phân chia theo bước sóng (`파장분할다중화소자`). Tuy nhiên, nhược điểm chí mạng của MRM là tính nhạy cảm cực cao với nhiệt độ: chỉ cần nhiệt độ chip dao động 1°C, bước sóng cộng hưởng sẽ bị lệch khiến tín hiệu biến điệu biến mất, đòi hỏi phải luôn tích hợp mạch vi sưởi (`열광학위상천이기`) và vòng khóa điều khiển nhiệt tự động.

**재사용 가능한 콜로케이션·청크:**
`초소형 마이크로링변조기 어레이` — mảng bộ điều chế cộng hưởng vi vòng siêu nhỏ gọn,
`마이크로링변조기 공진 파장 제어` — kiểm soát bước sóng cộng hưởng của bộ điều chế vi vòng,
`고속 마이크로링변조기 구동 회로` — mạch dẫn động bộ điều chế vi vòng tốc độ cao,
`마이크로링변조기의 소광비 개선` — cải thiện tỷ số tắt bật (extinction ratio) của bộ điều chế vi vòng.

**자주 쓰는 문형과 성분:**
`마이크로링변조기의 공진 주파수를 실시간으로 튜닝하여 공정 편차와 온도 변화에 따른 파장 드리프트를 상쇄하다` (tinh chỉnh tần số cộng hưởng của bộ điều chế vi vòng theo thời gian thực để bù đắp sự trôi dạt bước sóng do sai số chế tạo và biến thiên nhiệt độ),
`단일 도파로 상에 수십 개의 마이크로링변조기를 직렬 배치하여 파장분할다중화 집적도를 극대화하다` (bố trí nối tiếp hàng chục bộ điều chế vi vòng trên một ống dẫn sóng duy nhất để tối đa hóa mật độ tích hợp ghép kênh phân chia theo bước sóng).

**사회적 관계·주제별 register:** Thiết kế mạch tích hợp quang tử (PIC design), hội nghị quang tử bán dẫn quốc tế (IEEE Photonics Conference), thông số kỹ thuật bộ thu phát quang mật độ cao cho máy chủ AI.

**예문:** 칩 내부 공간과 전력 한계를 극복하기 위해 기존 마하젠더 변조기 대신 면적이 백분의 일에 불과한 마이크로링변조기가 대규모 광 송신 어레이의 핵심 소자로 채택되었다.

**Dịch:** Nhằm vượt qua giới hạn không gian và công suất bên trong chip, bộ điều chế cộng hưởng vi vòng với diện tích chỉ bằng một phần trăm so với bộ điều chế Mach-Zehnder truyền thống đã được lựa chọn làm linh kiện cốt lõi cho mảng phát quang quy mô lớn.

**어휘 연결:** `마이크로링변조기` (MRM) có kích thước siêu nhỏ và tiêu thụ điện siêu thấp nhưng phụ thuộc nhiệt độ, đối lập với `마하젠더변조기` (Mach-Zehnder Modulator - MZM, hoạt động dải thông rộng và ổn định nhiệt tuyệt vời nhưng cồng kềnh dài hàng milimet và tốn diện tích silicon).

**영어 참고:** *micro-ring modulator (MRM)* — bộ điều chế vi vòng; linh kiện quang học cộng hưởng siêu nhỏ điều chế ánh sáng dựa trên hiện tượng dịch chuyển bước sóng cộng hưởng quang học qua điện thế.

---

<!-- lexical_basis: advanced_native; register: optoelectronic packaging and fiber-chip assembly; source_lane: native_spoken; context: advanced-silicon-photonics-and-co-packaged-optics/native_spoken -->
### 광섬유배열접속

**품사:** 명사

**핵심 의미:** 복수의 단일 모드 광섬유가 마이크로미터 단위의 정밀한 피치(간격)를 지닌 V-홈(V-groove) 기판 등에 고정된 광섬유 배열 조립체(Fiber Array Unit, FAU)를, 실리콘 포토닉스 칩 모서리의 결합 소자(에지 커플러 또는 격자 커플러)와 서브마이크론 오차 이내로 광학 정렬하여 자외선(UV) 경화 수지 등으로 물리적·광학적으로 결합하는 고정밀 패키징 접속 공정이다.

**베트남어 뜻:** ghép nối mảng sợi quang (Optical Fiber Array Attachment / FAU Bonding); quy trình đóng gói quang điện tử độ chính xác cao căn chỉnh và gắn kết cụm mảng sợi quang (Fiber Array Unit - gồm nhiều sợi quang xếp song song trên đế rãnh chữ V có bước rãnh cực chuẩn) vào các bộ ghép quang ở mép chip silicon với dung sai cơ học dưới mức micromet, được cố định vĩnh viễn bằng keo quang học epoxy đóng rắn bằng tia cực tím.

**뉘앙스와 사용법:** Trong các xưởng đóng gói chip quang và phòng thí nghiệm, `광섬유배열접속` là công đoạn đòi hỏi sự kiên nhẫn và độ chuẩn xác cơ khí tột cùng, thường được các kỹ sư gọi thân mật là "FAU 어태치(FAU attach)". Khác với việc hàn bi thiếc (`솔더볼`) trong chip điện tử vốn có thể tự căn chỉnh nhờ sức căng bề mặt khi thiếc nóng chảy, việc kết nối ánh sáng không cho phép sai sót: chỉ cần lệch 0.5 micromet là toàn bộ công suất quang bị rơi rụng (`광 결합 손실 급증`). Kỹ sư phải vận hành hệ thống căn chỉnh chủ động 6 trục tự động (`6축 능동 정렬 시스템` — 6-axis active alignment) để vừa phát laser vừa đo tín hiệu quang phản hồi, dò tìm điểm cực đại rồi mới chiếu đèn UV để hóa cứng keo quang học. Công đoạn này quyết định năng suất và chi phí của toàn bộ mô-đun CPO, là điểm thắt cổ chai lớn nhất giữa sản xuất mẫu trong lab và dây chuyền lắp ráp hàng loạt.

**재사용 가능한 콜로케이션·청크:**
`초정밀 광섬유배열접속 공정` — quy trình ghép nối mảng sợi quang siêu chính xác,
`광섬유배열접속 정렬 오차 개선` — cải thiện sai số căn chỉnh ghép nối mảng sợi quang,
`자동화 광섬유배열접속 장비 운용` — vận hành thiết bị ghép nối mảng sợi quang tự động hóa,
`광섬유배열접속 신뢰성 평가` — đánh giá độ tin cậy của mối ghép mảng sợi quang.

**자주 쓰는 문형과 성분:**
`서브마이크론 급 정밀도를 갖춘 자동 정렬기를 사용하여 광섬유배열접속 시의 결합 손실을 최소화하다` (sử dụng máy căn chỉnh tự động đạt độ chuẩn xác dưới micromet để giảm thiểu tổn thất ghép nối khi ghép mảng sợi quang),
`온도 순환 시험 중에도 광섬유배열접속 부위의 접착 무결성이 유지되는지 엄격하게 검증하다` (kiểm chứng nghiêm ngặt xem tính toàn vẹn liên kết tại mối ghép mảng sợi quang có được duy trì trong suốt bài thử nghiệm sốc nhiệt chu kỳ hay không).

**사회적 관계·주제별 register:** Kỹ sư phòng đóng gói bao bì quang điện tử, xưởng lắp ráp thiết bị quang tự động, tài liệu tiêu chuẩn liên kết cáp quang mật độ cao Telcordia GR-1221, trao đổi kỹ thuật thực địa giữa kỹ sư thiết kế và kỹ sư quy trình đóng gói.

**예문:** 6축 능동 정렬 로봇을 통해 광섬유배열접속을 0.2마이크로미터 정밀도로 고정함으로써 다채널 간 신호 편차를 0.5dB 이하로 안정화했다.

**Dịch:** Bằng cách cố định mối ghép mảng sợi quang với độ chuẩn xác 0.2 micromet thông qua robot căn chỉnh chủ động 6 trục, sai lệch tín hiệu giữa các kênh đã được ổn định dưới mức 0.5dB.

**어휘 연결:** `광섬유배열접속` (Fiber array unit attach) là quá trình gắn kết nối mảng nhiều sợi quang cùng lúc, nâng cấp từ `단일광섬유접속` (Single fiber pigtailing - hàn nối một sợi đơn lẻ), và gắn liền với việc lựa chọn `에지커플러` (Edge coupler) hoặc `격자커플러` (Grating coupler).

**영어 참고:** *optical fiber array attachment (FAU attach)* — ghép nối cụm mảng sợi quang; kỹ thuật liên kết cơ quang cố định cụm sợi quang song song vào chip quang học với độ lệch căn chỉnh cực tiểu.

---

<!-- lexical_basis: advanced_native; register: monolithic integration and semiconductor system architecture; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 단일칩광전집적

**품사:** 명사

**핵심 의미:** 트랜지스터 기반의 초미세 전자 회로(CMOS 로직 연산, 아날로그 신호 처리 증폭기, 제어기)와 빛을 다루는 실리콘 광학 소자(도파로, 변조기, 광검출기)를 별도의 이종 칩으로 분리하여 본딩하지 않고, 동일한 실리콘 웨이퍼 기판 위에서 단일 제조 공정 흐름(Monolithic integration)을 통해 일체형으로 동시에 구현하는 궁극의 반도체 집적 기술이다.

**베트남어 뜻:** tích hợp quang điện nguyên khối trên đơn chip (Monolithic Optoelectronic Integration / Single-Chip Electro-Photonic Integration); công nghệ chế tạo bán dẫn tối thượng tích hợp đồng thời các mạch điện tử CMOS (bộ xử lý logic, bộ khuếch đại tín hiệu analog) và các linh kiện quang học (ống dẫn sóng, bộ điều chế, máy dò quang) trên cùng một đế wafer silicon duy nhất trong một chu trình sản xuất khép kín, thay vì phải gắn kết các chip riêng lẻ.

**뉘앙스와 사용법:** Hiện nay, hầu hết các hệ thống quang điện tử thương mại vẫn sử dụng phương pháp tích hợp 2.5D hoặc 3D dị thể (`이종 집적` — heterogeneous/hybrid integration), tức là làm chip điện tử riêng, làm chip quang riêng rồi hàn chúng lại bằng bi microbump. Dù hiệu quả, nhưng các mối nối này vẫn tạo ra điện dung ký sinh (`기생 커패시턴스`) và điện cảm làm suy giảm tốc độ. `단일칩광전집적` (Monolithic Integration) là "chén thánh" mà ngành bán dẫn theo đuổi: mạch điện tử và mạch quang sinh ra từ cùng một phôi wafer. Khi đó, khoảng cách giữa cực cổng bóng bán dẫn (`트랜지스터 게이트`) và bộ điều chế quang chỉ là vài chục nanomet, loại bỏ hoàn toàn các tụ ký sinh của mối hàn, đẩy tốc độ truyền dữ liệu lên đỉnh điểm và giảm điện năng tiêu thụ xuống ngưỡng sub-picojoule. Thách thức lớn nhất là sự xung đột công nghệ: quy trình nhiệt cao của CMOS có thể phá hủy cấu trúc quang mỏng manh, đòi hỏi các bí quyết tối ưu hóa nhiệt độ và vật liệu cực kỳ khắt khe của các nhà sản xuất bán dẫn hàng đầu.

**재사용 가능한 콜로케이션·청크:**
`단일칩광전집적 공정 아키텍처` — kiến trúc quy trình tích hợp quang điện nguyên khối trên đơn chip,
`단일칩광전집적 기반 초고속 가속기` — bộ tăng tốc siêu tốc dựa trên tích hợp quang điện nguyên khối trên đơn chip,
`단일칩광전집적을 통한 기생 커패시턴스 제거` — loại bỏ điện dung ký sinh thông qua tích hợp quang điện nguyên khối trên đơn chip,
`단일칩광전집적 상용화 로드맵` — lộ trình thương mại hóa tích hợp quang điện nguyên khối trên đơn chip.

**자주 쓰는 문형과 성분:**
`전자 소자와 광학 소자를 동일 기판에 일체화하는 단일칩광전집적을 통해 신호 전달 경로의 기생 인덕턴스를 원천 차단하다` (triệt tiêu tận gốc điện cảm ký sinh trên đường truyền tín hiệu thông qua tích hợp quang điện nguyên khối trên đơn chip đồng nhất linh kiện điện tử và quang học trên cùng một đế nền),
`단일칩광전집적 공정의 열 예산(thermal budget) 제약을 극복하기 위해 저온 실리사이드 형성 기술을 도입하다` (áp dụng công nghệ tạo màng silicide nhiệt độ thấp nhằm vượt qua giới hạn ngân sách nhiệt của quy trình tích hợp quang điện nguyên khối).

**사회적 관계·주제별 register:** Hội nghị bán dẫn quốc tế hàng đầu (IEDM, ISSCC), nhóm nghiên cứu kiến trúc bộ vi xử lý quang điện tương lai, báo cáo nghiên cứu R&D của DARPA và các viện công nghệ tiên tiến.

**예문:** 차세대 인공지능 프로세서는 구리 본딩 와이어나 마이크로 범프의 기생 성분을 원천 배제하기 위해 단일칩광전집적 기술을 적용하여 연산 코어와 광학 인터페이스를 단일 실리콘 다이에 통합했다.

**Dịch:** Bộ vi xử lý trí tuệ nhân tạo thế hệ mới đã ứng dụng công nghệ tích hợp quang điện nguyên khối trên đơn chip để hợp nhất lõi tính toán và giao diện quang học lên một khuôn silicon duy nhất, nhằm bài trừ tận gốc các thành phần ký sinh của dây hàn đồng hoặc các hạt micro-bump.

**어휘 연결:** `단일칩광전집적` (Monolithic integration) chế tạo mọi linh kiện trên một đế nguyên khối, phân biệt với `이종집적` (Heterogeneous integration - chế tạo chip điện và chip quang riêng biệt rồi xếp chồng 2.5D/3D qua chất nền chuyển tiếp) và `하이브리드집적` (Hybrid integration - dán keo/hàn linh kiện quang rời lên bo mạch).

**영어 참고:** *monolithic optoelectronic integration (monolithic electro-photonic integration)* — tích hợp quang điện nguyên khối; phương pháp sản xuất vi mạch chế tạo các mạch điều khiển điện tử CMOS và các linh kiện quang học trên cùng một chất nền silicon duy nhất.

---

<!-- lexical_basis: advanced_native; register: green computing and optical interconnect architecture; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 초저전력광인터커넥트

**품사:** 명사

**핵심 의미:** 대규모 데이터센터나 인공지능 클러스터에서 칩과 칩(Die-to-Die), 보드와 보드 간의 데이터 전송 시 소비되는 에너지를 비트당 피코줄(pJ/bit) 또는 수백 펨토줄(fJ/bit) 이하로 극소화하면서도 수십 테라비트급의 광대역 신호를 무손실·저지연으로 전송하는 초고효율 광 연결 아키텍처이다.

**베트남어 뜻:** kết nối quang liên mạch siêu tiết kiệm điện (Ultra-Low Power Optical Interconnect); kiến trúc truyền dẫn quang học hiệu suất cực cao giúp hạ thấp năng lượng tiêu tốn cho việc truyền tải mỗi bit dữ liệu xuống dưới mức picojoule (pJ/bit) thậm chí vài trăm femtojoule (fJ/bit) giữa các die chip hoặc các bo mạch, đồng thời duy trì băng thông khổng lồ hàng chục terabit với độ trễ cực thấp.

**뉘앙스와 사용법:** Điện năng tiêu thụ của các trung tâm dữ liệu AI đang trở thành thảm họa môi trường và kinh tế. Trước đây, khi truyền dữ liệu qua cáp đồng ở khoảng cách vài mét, việc khuyếch đại và tái tạo tín hiệu điện ngốn tới 15–20 pJ/bit. Nếu hệ thống truyền 100 Terabit mỗi giây, chỉ riêng việc "chuyển dữ liệu qua lại" đã đốt cháy hàng kilowatt điện vô ích. `초저전력광인터커넥트` xuất hiện để kéo mức tiêu thụ này xuống dưới 1 pJ/bit, tức giảm hơn 90% hao phí năng lượng. Bằng cách sử dụng các bộ biến điệu vi vòng siêu nhỏ (`마이크로링변조기`), loại bỏ các bộ bù cân bằng điện tử phức tạp (DSP-free direct drive) và kết nối quang sát sườn qua CPO, toàn bộ năng lượng được tập trung cho luồng photon thuần khiết. Đây là chìa khóa duy nhất giúp các cụm siêu máy tính hàng trăm nghìn chip GPU có thể mở rộng quy mô (`스케일아웃`) mà không làm sập lưới điện nhà trạm.

**재사용 가능한 콜로케이션·청크:**
`피코줄 이하 초저전력광인터커넥트 구현` — hiện thực hóa kết nối quang liên mạch siêu tiết kiệm điện dưới mức picojoule,
`초저전력광인터커넥트 기반 칩렛 아키텍처` — kiến trúc chiplet dựa trên kết nối quang liên mạch siêu tiết kiệm điện,
`초저전력광인터커넥트의 에너지 효율성 평가` — đánh giá hiệu quả năng lượng của kết nối quang liên mạch siêu tiết kiệm điện,
`차세대 초저전력광인터커넥트 프로토콜` — giao thức kết nối quang liên mạch siêu tiết kiệm điện thế hệ mới.

**자주 쓰는 문형과 성분:**
`초저전력광인터커넥트를 도입하여 데이터센터의 인터커넥트 전력 소비를 기존 대비 80% 이상 절감하다` (áp dụng kết nối quang liên mạch siêu tiết kiệm điện để giảm hơn 80% mức tiêu thụ điện năng kết nối liên mạch của trung tâm dữ liệu so với trước đây),
`칩 간 통신 거리가 멀어져도 신호 왜곡 없이 초저전력광인터커넥트의 전송 품질을 보장하다` (đảm bảo chất lượng truyền dẫn của kết nối quang liên mạch siêu tiết kiệm điện mà không bị méo tín hiệu ngay cả khi khoảng cách truyền thông giữa các chip tăng lên).

**사회적 관계·주제별 register:** Chiến lược trung tâm dữ liệu xanh (Green Data Center), hội nghị thiết kế chip máy tính tiết kiệm năng lượng (Cool Chips), tiêu chuẩn bền vững môi trường của ngành công nghiệp bán dẫn.

**예문:** 거대 언어 모델 훈련 시 발생하는 천문학적인 전력 소모를 억제하기 위해 수만 개의 가속기 칩을 초저전력광인터커넥트 패브릭으로 연결하는 방안이 추진되고 있다.

**Dịch:** Nhằm kiềm chế mức tiêu thụ điện năng khổng lồ phát sinh khi huấn luyện các mô hình ngôn ngữ lớn, phương án kết nối hàng vạn chip tăng tốc bằng cấu trúc kết nối quang liên mạch siêu tiết kiệm điện đang được xúc tiến mạnh mẽ.

**어휘 연결:** `초저전력광인터커넥트` (Ultra-low power optical interconnect) hướng tới mức tiêu thụ dưới pJ/bit bằng photon, phân biệt với `동선기반전기인터커넥트` (Copper electrical interconnect - kết nối bằng cáp đồng truyền thống bị tổn hao nhiệt và ngốn điện gấp hàng chục lần ở tần số siêu cao).

**영어 참고:** *ultra-low power optical interconnect* — kết nối quang liên mạch siêu tiết kiệm điện; giải pháp truyền dẫn quang học tầm ngắn đạt mức tiêu thụ năng lượng cực thấp (sub-pJ/bit) phục vụ kết nối giữa các chip và cụm máy chủ.

---

<!-- lexical_basis: advanced_native; register: semiconductor wafer technology and substrate physics; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 실리콘온인슐레이터기판

**품사:** 명사

**핵심 의미:** 단결정 실리콘 지지 기판 위에 굴절률이 약 1.45로 낮은 이산화규소(SiO2) 매몰 절연층(Buried Oxide, BOX)을 형성하고, 그 위에 굴절률이 약 3.45로 높은 얇은 단결정 실리콘 층(Top Si)을 적층하여, 극심한 굴절률 차이를 통해 빛을 나노미터 두께의 얇은 상부 실리콘 층 내에 전반사로 완벽히 가두어 서브마이크론 미세 광도파로를 형성할 수 있게 해주는 실리콘 포토닉스의 핵심 웨이퍼 기판이다.

**베트남어 뜻:** đế bán dẫn silicon trên lớp cách điện (Silicon-on-Insulator Substrate - SOI Substrate); tấm đế wafer chuyên dụng có cấu trúc ba tầng gồm lớp đế silicon cơ sở, lớp oxit chôn cách điện (Buried Oxide - BOX, SiO2, chiết suất ~1.45) và lớp silicon đơn tinh thể mỏng trên cùng (Top Si, chiết suất ~3.45), tạo ra sự chênh lệch chiết suất quang học cực lớn để giam giữ ánh sáng bằng hiện tượng phản xạ toàn phần bên trong các ống dẫn sóng nano.

**뉘앙스와 사용법:** Bán dẫn silicon vốn là chất bán dẫn đục đối với ánh sáng nhìn thấy, nhưng lại hoàn toàn trong suốt đối với ánh sáng hồng ngoại viễn thông (bước sóng 1.310 nm và 1.550 nm). Tuy nhiên, nếu dùng tấm wafer silicon thông thường, ánh sáng sẽ bị rò rỉ hết xuống toàn bộ thân đế. `실리콘온인슐레이터기판` (SOI) ra đời giải quyết bài toán cốt tử này: lớp thủy tinh mỏng cách điện (`매몰 산화물층` — BOX, dày khoảng 1–3 $\mu\text{m}$) đóng vai trò như một "tấm gương đáy", ngăn chặn tuyệt đối không cho ánh sáng từ lớp silicon bề mặt mỏng (dày chỉ khoảng 220 nm) rò rỉ xuống lớp đế silicon bên dưới. Nhờ độ tương phản chiết suất khổng lồ giữa Silicon ($n=3.45$) và oxit ($n=1.45$), ống dẫn sóng tạo trên đế SOI có thể giam giữ ánh sáng chặt chẽ đến mức uốn cong được ở góc cực hẹp với bán kính chỉ vài micromet, cho phép nhồi nhét hàng triệu linh kiện quang lên một con chip kích thước hạt đậu.

**재사용 가능한 콜로케이션·청크:**
`실리콘온인슐레이터기판 상부 실리콘층 박막화` — làm mỏng lớp silicon bề mặt trên đế silicon trên lớp cách điện,
`포토닉스 전용 실리콘온인슐레이터기판 사양` — quy cách đế silicon trên lớp cách điện chuyên dụng cho quang tử học,
`실리콘온인슐레이터기판의 매몰 산화물 두께 균일도` — độ đồng đều độ dày lớp oxit chôn của đế silicon trên lớp cách điện,
`실리콘온인슐레이터기판 웨이퍼 본딩 공정` — quy trình liên kết wafer đế silicon trên lớp cách điện.

**자주 쓰는 문형과 성분:**
`실리콘온인슐레이터기판의 높은 굴절률 대조비를 활용하여 서브마이크론 급의 초소형 광도파로를 제작하다` (tận dụng tỷ số tương phản chiết suất cao của đế silicon trên lớp cách điện để chế tạo ống dẫn sóng quang siêu nhỏ cấp độ dưới micromet),
`실리콘온인슐레이터기판 상의 잔류 응력을 제어하여 도파로 내 편광 의존 손실을 억제하다` (kiểm soát ứng suất dư trên đế silicon trên lớp cách điện để triệt tiêu suy hao phụ thuộc phân cực bên trong ống dẫn sóng).

**사회적 관계·주제별 register:** Chuyên gia công nghệ vật liệu bán dẫn (Soitec, Shin-Etsu), tài liệu đặc tả kỹ thuật phôi wafer quang tử, phòng thí nghiệm vật lý trạng thái rắn.

**예문:** 실리콘 포토닉스 소자는 상부 실리콘과 매몰 산화층 사이의 극심한 굴절률 차이를 이용해 빛을 가두기 때문에 고품질 실리콘온인슐레이터기판의 채택이 필수적이다.

**Dịch:** Các linh kiện quang tử silicon bắt buộc phải sử dụng tấm đế silicon trên lớp cách điện chất lượng cao vì chúng giam giữ ánh sáng dựa trên sự chênh lệch chiết suất cực lớn giữa lớp silicon bề mặt và lớp oxit chôn bên dưới.

**어휘 연결:** `실리콘온인슐레이터기판` (SOI Substrate) có lớp oxit chôn cách ly quang học, phân biệt với `벌크실리콘기판` (Bulk silicon substrate - đế silicon khối thông thường dùng cho chip logic thuần điện tử không thể giam giữ ánh sáng) và `질화규소온인슐레이터기판` (SiN-on-insulator - đế SiN trên oxit dùng cho các ứng dụng công suất quang lớn).

**영어 참고:** *silicon-on-insulator substrate (SOI substrate)* — đế bán dẫn silicon trên lớp cách điện; loại wafer đặc thù gồm lớp silicon đơn tinh thể mỏng đặt trên lớp oxit chôn (BOX) giúp tạo ranh giới phản xạ toàn phần để dẫn truyền ánh sáng vi mô.

---

<!-- lexical_basis: advanced_native; register: optical multiplexing and WDM photonic integrated circuits; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 파장분할다중화소자

**품사:** 명사

**핵심 의미:** 하나의 광섬유나 단일 광도파로 내에서 서로 다른 파장을 갖는 복수의 광 신호를 하나로 묶어 송신하거나(합파), 수신단에서 각 파장별 신호로 정밀하게 분리해 내는(분파) 역할을 수행하기 위해 실리콘 칩 위에 배열 도파로 격자(AWG)나 에셀 회절 격자(Echelle grating), 또는 마이크로링 공진기 어레이 형태로 구현된 광 다중화 집적 소자이다.

**베트남어 뜻:** linh kiện ghép kênh phân chia theo bước sóng (Wavelength Division Multiplexing Device - WDM Device); linh kiện quang học tích hợp trên chip (như cách tử ống dẫn sóng mảng - AWG, cách tử nhiễu xạ Echelle hoặc mảng vi vòng cộng hưởng) thực hiện chức năng gộp nhiều bước sóng mang tín hiệu khác nhau vào một đường truyền duy nhất (ghép kênh) hoặc tách chúng ra tại đầu thu (phân kênh) để nhân bội dung lượng đường truyền.

**뉘앙스와 사용법:** Để tăng dung lượng truyền dữ liệu, thay vì rải thêm hàng chục sợi quang đắt đỏ và cồng kềnh, các kỹ sư dùng kỹ thuật "đa sắc màu": mỗi chùm laser mang một bước sóng (`파장` — $\lambda$) riêng biệt đóng vai trò như một làn đường độc lập trên cùng một xa lộ quang học. `파장분할다중화소자` chính là "trạm phân luồng" trên chip. Ở đầu phát, bộ hợp kênh gom 4, 8, 16 hoặc 32 bước sóng khác nhau vào một ống dẫn sóng duy nhất. Ở đầu thu, bộ phân kênh phải bóc tách từng bước sóng này ra một cách sắc bén mà không để chúng lấn sang nhau (`인접 채널 간섭` — crosstalk). Việc tích hợp thành công các bộ AWG thu nhỏ hay cách tử Echelle ngay trên bề mặt silicon cho phép một kênh quang đơn lẻ đạt tốc độ hàng terabit mỗi giây, tạo nên xương sống cho các mạng kết nối siêu tốc của trí tuệ nhân tạo.

**재사용 가능한 콜로케이션·청크:**
`온칩 파장분할다중화소자 집적` — tích hợp linh kiện ghép kênh phân chia theo bước sóng trên chip,
`파장분할다중화소자의 채널 간 간섭 억제` — triệt tiêu nhiễu xuyên kênh của linh kiện ghép kênh phân chia theo bước sóng,
`초소형 파장분할다중화소자 설계` — thiết kế linh kiện ghép kênh phân chia theo bước sóng siêu nhỏ gọn,
`파장분할다중화소자의 삽입 손실 측정` — đo kiểm suy hao chèn của linh kiện ghép kênh phân chia theo bước sóng.

**자주 쓰는 문형과 성분:**
`파장분할다중화소자를 활용하여 단일 광섬유 경로를 통해 16개 채널의 테라비트 신호를 동시에 전송하다` (tận dụng linh kiện ghép kênh phân chia theo bước sóng để truyền đồng thời tín hiệu terabit của 16 kênh qua một đường sợi quang duy nhất),
`제조 공정 오차로 인한 파장분할다중화소자의 중심 파장 편차를 열광학 튜너로 정밀 보정하다` (sử dụng bộ điều hưởng nhiệt quang để bù đắp chuẩn xác độ lệch bước sóng trung tâm của linh kiện ghép kênh phân chia theo bước sóng do sai số quy trình chế tạo gây ra).

**사회적 관계·주제별 register:** Kỹ sư thiết kế hệ thống DWDM/CWDM, báo cáo hội nghị quang học viễn thông, tài liệu tiêu chuẩn ghép kênh của ITU-T và IEEE 802.3.

**예문:** 이번에 개발된 실리콘 칩은 고밀도 배열 도파로 격자 기반의 파장분할다중화소자를 내장하여 광섬유 한 가닥으로 초당 3.2테라비트의 데이터를 전송할 수 있다.

**Dịch:** Con chip silicon được phát triển lần này tích hợp linh kiện ghép kênh phân chia theo bước sóng dựa trên cách tử ống dẫn sóng mảng mật độ cao, cho phép truyền 3.2 terabit dữ liệu mỗi giây chỉ qua một sợi quang duy nhất.

**어휘 연결:** `파장분할다중화소자` (WDM device) nhân bội dung lượng bằng nhiều bước sóng ánh sáng khác nhau, phân biệt với `시분할다중화` (Time-division multiplexing - TDM, chia sẻ khe thời gian) và `공간분할다중화` (Space-division multiplexing - SDM, sử dụng nhiều lõi hoặc nhiều sợi song song).

**영어 참고:** *wavelength division multiplexing device (WDM device)* — linh kiện ghép kênh phân chia theo bước sóng; cấu trúc quang tử học tích hợp trên chip dùng để gộp hoặc chia tách các luồng tín hiệu quang mang các bước sóng khác nhau.

---

<!-- lexical_basis: advanced_native; register: high-speed photodetector physics and optoelectronic receivers; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 광검출기응답속도

**품사:** 명사

**핵심 의미:** 광섬유나 도파로를 통해 입사된 고주파 광 펄스를 흡수하여 전자-정공 쌍(EHP)을 생성하고 이를 전극으로 수집하여 전기 전류 신호로 변환할 때 소요되는 시간적 지연 특성 및 변환 대역폭(3dB cutoff bandwidth)을 의미하며, 주로 저마늄(Ge) 박막의 캐리어 이동 시간과 접합부의 기생 RC 시상수에 의해 결정되는 고속 광 수신 성능 지표이다.

**베트남어 뜻:** tốc độ đáp ứng của máy dò quang (Photodetector Response Speed / Responsivity Bandwidth); chỉ số hiệu năng phản ánh độ nhanh nhạy và băng thông tần số cắt (3dB cutoff bandwidth) của linh kiện tách sóng quang (thường là diode quang Ge trên Si) khi chuyển đổi các xung ánh sáng tới thành xung dòng điện thông qua sự sinh và thu gom cặp điện tử-lỗ trống, bị giới hạn bởi thời gian dịch chuyển hạt mang điện và hằng số thời gian RC ký sinh.

**뉘앙스와 사용법:** Ở đầu thu của mạch quang, nếu `광검출기응답속도` quá chậm, các xung ánh sáng 1 và 0 đi liền nhau ở tốc độ 100 Gbaud sẽ bị nhòe vào nhau tạo thành hiện tượng giao thoa giữa các ký hiệu (`심볼 간 간섭` — ISI) và làm đóng mắt biểu đồ tín hiệu (`아이 다이어그램 붕괴`). Bản thân silicon không hấp thụ tốt ánh sáng hồng ngoại viễn thông (1.310 nm / 1.550 nm) do độ rộng vùng cấm ($1.12\text{ eV}$) quá lớn, vì vậy các kỹ sư phải nuôi cấy biểu mô dị thể một lớp 저마늄 (`에피택셜 저마늄` — epitaxial Ge) lên trên silicon. Tốc độ đáp ứng là một bài toán đánh đổi khắt khe: nếu lớp Ge quá mỏng thì ánh sáng đi xuyên qua mà không bị hấp thụ (giảm hiệu suất đáp ứng `광응답도`), nhưng nếu lớp Ge quá dày thì các hạt điện tử và lỗ trống mất quá nhiều thời gian để chạy về hai điện cực (`캐리어 이동 시간 증가`), làm tụt giảm thảm hại tốc độ đáp ứng. Bằng cách thiết kế cấu trúc Ge photodiode dạng ống dẫn sóng bề mặt (waveguide-coupled Ge PD), các kỹ sư có thể vừa đạt tốc độ đáp ứng trên 70–100 GHz, vừa giữ được hiệu suất chuyển đổi quang-điện cao nhất.

**재사용 가능한 콜로케이션·청크:**
`광검출기응답속도 한계 극복` — vượt qua giới hạn tốc độ đáp ứng của máy dò quang,
`초고주파 광검출기응답속도 측정` — đo kiểm tốc độ đáp ứng của máy dò quang tần số siêu cao,
`광검출기응답속도와 양자효율 간의 상충 관계` — quan hệ đánh đổi giữa tốc độ đáp ứng của máy dò quang và hiệu suất lượng tử,
`광검출기응답속도 향상을 위한 소자 구조 최적화` — tối ưu hóa cấu trúc linh kiện nhằm nâng cao tốc độ đáp ứng của máy dò quang.

**자주 쓰는 문형과 성분:**
`접합 면적을 줄이고 기생 정전용량을 억제하여 광검출기응답속도를 70GHz 이상으로 끌어올리다` (thu nhỏ diện tích tiếp giáp và triệt tiêu điện dung tĩnh ký sinh để đẩy tốc độ đáp ứng của máy dò quang lên trên 70GHz),
`광검출기응답속도가 향상됨에 따라 단일 레인당 100Gbps 이상의 무오류 고속 신호 수신이 가능해지다` (nhờ tốc độ đáp ứng của máy dò quang được nâng cao, việc thu nhận tín hiệu tốc độ cao không lỗi vượt quá 100Gbps trên mỗi làn đơn lẻ đã trở nên khả thi).

**사회적 관계·주제별 register:** Phòng thí nghiệm phân tích mạch thu tín hiệu quang (TIA/Receiver), hội nghị linh kiện điện tử IEEE TED, tài liệu kiểm chuẩn băng thông bộ thu phát quang tốc độ cao.

**예문:** 차세대 데이터 통신을 위해 저마늄 활성층의 두께를 나노미터 수준으로 최적화하여 100기가헤르츠 대역폭을 지원하는 광검출기응답속도를 확보했다.

**Dịch:** Nhằm phục vụ truyền thông dữ liệu thế hệ mới, độ dày lớp hoạt tính gecmani đã được tối ưu hóa xuống mức nanomet để đảm bảo tốc độ đáp ứng của máy dò quang hỗ trợ băng thông lên tới 100 GHz.

**어휘 연결:** `광검출기응답속도` (Photodetector response speed) quyết định băng thông tần số của đầu thu quang, liên hệ mật thiết với `광응답도` (Responsivity - tỷ lệ dòng điện sinh ra trên mỗi Watt công suất quang vào) và `암전류` (Dark current - dòng rò khi không có ánh sáng chiếu vào).

**영어 참고:** *photodetector response speed (photodetector bandwidth)* — tốc độ đáp ứng của máy dò quang; tốc độ biến đổi xung ánh sáng thành tín hiệu dòng điện trong bộ tách sóng quang, quyết định tần số xung nhịp tối đa của máy thu.

---

<!-- lexical_basis: advanced_native; register: thermo-optic tuning and photonic circuit calibration; source_lane: native_spoken; context: advanced-silicon-photonics-and-co-packaged-optics/native_spoken -->
### 열광학위상천이기

**품사:** 명사

**핵심 의미:** 실리콘의 높은 열광학 계수(온도 변화에 따라 굴절률이 변하는 특성)를 응용하여, 광도파로 바로 위나 주변에 미세 금속 박막 히터나 불순물이 도핑된 저항 발열체를 배치하고 미세 전류를 인가함으로써 국소적인 온도를 제어해 도파로를 통과하는 빛의 위상을 0에서 $2\pi$까지 정밀하게 지연시키거나 변위시키는 제어 소자이다.

**베트남어 뜻:** bộ dịch pha nhiệt quang (Thermo-Optic Phase Shifter - TOPS); linh kiện quang học sử dụng điện trở vi nhiệt (micro-heater bằng kim loại hoặc silicon pha tạp) bố trí sát ống dẫn sóng để làm thay đổi nhiệt độ cục bộ, từ đó lợi dụng hệ số nhiệt quang cao của silicon ($dn/dT$) để thay đổi chiết suất và điều khiển độ lệch pha của chùm ánh sáng một cách cực kỳ chuẩn xác.

**뉘앙스와 사용법:** Trong các phòng lab quang tử và cuộc họp kỹ thuật, `열광학위상천이기` thường được các kỹ sư gọi tắt là "TO 시프터(TO shifter)" hoặc "마이크로 히터(micro-heater)". Silicon có hệ số nhiệt quang ($dn/dT \approx 1.8 \times 10^{-4} / \text{K}$) lớn gấp hàng chục lần so với thủy tinh silica, nghĩa là chỉ cần làm nóng nhẹ 도파로 vài độ C là pha của sóng ánh sáng đã xoay đi một góc lớn. Thiết bị này đóng vai trò như chiếc "mỏ lết căn chỉnh" vạn năng trên chip: nó dùng để tinh chỉnh điểm cân bằng của giao thoa kế Mach-Zehnder (`마하젠더 간섭계`), bù đắp sai số chế tạo nano (`공정 편차 보정`), và khóa bước sóng cộng hưởng của bộ điều chế vi vòng (`마이크로링변조기 공진 제어`). Dù tốc độ của hiệu ứng nhiệt quang tương đối chậm (cỡ micro-giây, không dùng để phát dữ liệu tốc độ cao được), nhưng độ dịch pha rất sâu, suy hao quang cực thấp và hoạt động vô cùng ổn định, khiến nó trở thành linh kiện không thể thiếu trong mọi mạch quang lập trình được (`프로그래머블 광집적회로`).

**재사용 가능한 콜로케이션·청크:**
`열광학위상천이기를 이용한 위상 보정` — hiệu chỉnh pha sử dụng bộ dịch pha nhiệt quang,
`저전력 열광학위상천이기 설계` — thiết kế bộ dịch pha nhiệt quang tiêu thụ điện thấp,
`열광학위상천이기의 열 누설 차단 트렌치` — rãnh cách ly ngăn chặn rò rỉ nhiệt của bộ dịch pha nhiệt quang,
`열광학위상천이기 응답 시간 단축` — rút ngắn thời gian đáp ứng của bộ dịch pha nhiệt quang.

**자주 쓰는 문형과 성분:**
`도파로 주변에 깊은 공기 트렌치를 형성하여 열광학위상천이기의 열 효율을 높이고 인접 채널로의 열 간섭을 방지하다` (tạo rãnh không khí sâu xung quanh ống dẫn sóng để nâng cao hiệu suất nhiệt của bộ dịch pha nhiệt quang và ngăn ngừa hiện tượng giao thoa nhiệt sang các kênh lân cận),
`열광학위상천이기에 인가되는 전압을 폐루프 제어로 미세 조정하여 공진 파장을 0.01나노미터 단위로 고정하다` (vi điều chỉnh điện áp cấp vào bộ dịch pha nhiệt quang bằng điều khiển vòng kín để cố định bước sóng cộng hưởng với độ chính xác 0.01 nanomet).

**사회적 관계·주제별 register:** Thảo luận thực địa của kỹ sư kiểm thử mạch quang tích hợp, hướng dẫn thiết kế bố cục vi nhiệt (thermal layout), hội thảo quang học điện toán và mạng nơ-ron quang học.

**예문:** 웨이퍼 공정 편차로 인해 어긋난 링 공진기의 위상을 맞추기 위해 각 채널마다 열광학위상천이기를 배치하여 국소 발열을 통한 실시간 위상 튜닝을 수행했다.

**Dịch:** Nhằm điều chỉnh pha của các bộ cộng hưởng vi vòng bị lệch do sai số quy trình chế tạo trên wafer, người ta đã bố trí bộ dịch pha nhiệt quang trên từng kênh để thực hiện tinh chỉnh pha theo thời gian thực thông qua phát nhiệt cục bộ.

**어휘 연결:** `열광학위상천이기` (Thermo-optic phase shifter) điều khiển pha bằng biến thiên nhiệt độ (chậm cỡ micro-giây nhưng dải dịch pha lớn và không làm tăng suy hao), phân biệt với `전기광학위상천이기` (Electro-optic phase shifter - điều khiển bằng hạt mang điện tự do đạt tốc độ picô-giây nhưng dễ gây suy hao quang hấp thụ).

**영어 참고:** *thermo-optic phase shifter (TO phase shifter)* — bộ dịch pha nhiệt quang; linh kiện điều chỉnh độ trễ pha của sóng ánh sáng dựa trên sự thay đổi chiết suất vật liệu do nhiệt độ từ vi điện trở gây ra.

---

<!-- lexical_basis: advanced_native; register: semiconductor laser integration and hybrid epitaxy; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 반도체레이저단일집적

**품사:** 명사

**핵심 의미:** 실리콘의 간접 천이형 에너지 밴드갭 특성으로 인해 칩 내부에서 자체 발광이 불가능한 근본적 한계를 극복하기 위해, 우수한 발광 효율을 지닌 III-V족 화합물 반도체 레이저 다이오드(인듐인, 갈륨비소 등)나 양자점(Quantum Dot) 레이저를 실리콘 웨이퍼 기판 상에 이종 접합 본딩(Heterogeneous bonding) 또는 직접 에피택셜 성장(Monolithic epitaxy) 방식으로 일체화하여 온칩 광원을 구축하는 최첨단 집적 기술이다.

**베트남어 뜻:** tích hợp nguyên khối laser bán dẫn (Monolithic/Heterogeneous Semiconductor Laser Integration); công nghệ tích hợp tối tân đưa nguồn phát laser bán dẫn hợp chất nhóm III-V (như InP, GaAs) hoặc laser chấm lượng tử (Quantum Dot Laser) trực tiếp lên tấm wafer silicon thông qua liên kết wafer dị thể hoặc nuôi cấy biểu mô trực tiếp, khắc phục triệt để nhược điểm không thể tự phát sáng của silicon do có dải năng lượng vùng cấm gián tiếp.

**뉘앙스와 사용법:** Silicon là "vua" của các mạch điện tử, nhưng trong quang học nó mắc phải một "khuyết tật bẩm sinh": cấu trúc vùng cấm gián tiếp (`간접 천이형 밴드갭` — indirect bandgap) khiến các electron và lỗ trống khi tái hợp chỉ sinh ra nhiệt rung động mạng tinh thể (phonon) chứ không thể phát ra photon ánh sáng hiệu quả. Vì vậy, các hệ thống quang tử trước đây buộc phải dùng nguồn laser rời bên ngoài (`외장 레이저 광원` — external laser source) rồi chiếu ánh sáng vào chip qua sợi quang, gây cồng kềnh, tổn hao và tốn kém chi phí đóng gói. `반도체레이저단일집적` phá vỡ nút thắt này. Bằng cách dùng kỹ thuật dán màng mỏng bán dẫn InP lên đế silicon ở cấp độ phân tử (`분자간 본딩`) hoặc nuôi cấy trực tiếp các chấm lượng tử (`양자점 성장`), nguồn phát tia laser nằm gọn gàng ngay trên con chip silicon. Nhờ đó, chip tự tạo ra ánh sáng nội tại (`온칩 레이저`), mở ra kỷ nguyên các siêu vi mạch tự phát quang và tự tính toán độc lập.

**재사용 가능한 콜로케이션·청크:**
`실리콘 기판 상의 반도체레이저단일집적 기술` — công nghệ tích hợp nguyên khối laser bán dẫn trên đế silicon,
`반도체레이저단일집적을 통한 온칩 광원 구현` — hiện thực hóa nguồn sáng trên chip thông qua tích hợp nguyên khối laser bán dẫn,
`반도체레이저단일집적의 열 방출 신뢰성 확보` — đảm bảo độ tin cậy tản nhiệt của tích hợp nguyên khối laser bán dẫn,
`양자점 기반 반도체레이저단일집적 공정` — quy trình tích hợp nguyên khối laser bán dẫn dựa trên chấm lượng tử.

**자주 쓰는 문형과 성분:**
`화합물 반도체 박막을 실리콘 도파로 위에 결합하는 반도체레이저단일집적을 성공시켜 외장 광원 연결의 번거로움을 없애다` (loại bỏ sự phiền phức của việc kết nối nguồn sáng bên ngoài bằng việc tạo ra thành công mối tích hợp nguyên khối laser bán dẫn liên kết màng mỏng bán dẫn hợp chất lên ống dẫn sóng silicon),
`반도체레이저단일집적 소자의 고온 동작 수명을 연장하기 위해 기판 간 격자 부정합을 완화하는 버퍼층을 삽입하다` (chèn lớp đệm giảm thiểu sự bất tương hợp mạng tinh thể giữa các đế nền nhằm kéo dài tuổi thọ hoạt động ở nhiệt độ cao của linh kiện tích hợp nguyên khối laser bán dẫn).

**사회적 관계·주제별 register:** Nghiên cứu vật lý lượng tử bán dẫn, hiệp hội kỹ thuật laser và quang điện tử (IEEE Photonics Society), tài liệu chiến lược tự chủ chuỗi cung ứng quang bán dẫn.

**예문:** 실리콘의 발광 한계를 뛰어넘기 위해 인듐인 박막을 실리콘 웨이퍼에 직접 접합하는 반도체레이저단일집적 공정이 차세대 고성능 광전 칩의 핵심 축으로 연구되고 있다.

**Dịch:** Nhằm vượt qua giới hạn phát quang của silicon, quy trình tích hợp nguyên khối laser bán dẫn liên kết trực tiếp màng mỏng indium photphua lên wafer silicon đang được nghiên cứu như một trụ cột cốt lõi của chip quang điện tử hiệu năng cao thế hệ mới.

**어휘 연결:** `반도체레이저단일집적` (Semiconductor laser integration) đưa nguồn phát quang vào bên trong đế silicon, phân biệt với `외장레이저모듈` (External laser source - ELS, nguồn laser độc lập cắm ngoài truyền ánh sáng vào chip qua sợi cáp quang).

**영어 참고:** *monolithic/heterogeneous semiconductor laser integration* — tích hợp nguyên khối/dị thể laser bán dẫn; kỹ thuật tích hợp vật liệu bán dẫn phát quang hợp chất III-V trực tiếp lên nền tảng silicon để tạo nguồn sáng laser nội tại cho vi mạch.

---

<!-- lexical_basis: advanced_native; register: high-performance computing system architecture and packaging metrics; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 대역폭밀도극대화

**품사:** 명사

**핵심 의미:** 반도체 칩 다이의 단위 둘레 길이당(Beachfront bandwidth density, Tbps/mm) 또는 패키지 및 보드의 단위 면적당(Areal bandwidth density, Tbps/mm²) 전송 가능한 총 데이터 전송 속도를 극단적으로 끌어올려, 물리적으로 제한된 패키지 공간 내에서 입출력(I/O) 병목을 완전히 해소하는 고성능 컴퓨팅 최적화 지표이자 시스템 설계 전략이다.

**베트남어 뜻:** cực đại hóa mật độ băng thông (Bandwidth Density Maximization); chiến lược thiết kế hệ thống và chỉ số hiệu năng tối ưu hóa nhằm đẩy tốc độ truyền dữ liệu tổng thể trên mỗi đơn vị chiều dài mép chip (Tbps/mm) hoặc trên mỗi đơn vị diện tích đóng gói (Tbps/mm²) lên mức cao nhất, giải tỏa triệt để nút thắt cổ chai vào/ra (I/O) trong không gian vật lý giới hạn.

**뉘앙스와 사용법:** Các chip xử lý AI và bộ chuyển mạch hiện đại ngày càng to ra, nhưng chu vi mép chip (`칩 모서리 둘레` — die perimeter hay "beachfront") thì bị giới hạn vật lý nghiêm ngặt. Nếu dùng chân kim loại truyền thống, khoảng cách giữa các chân tiếp xúc (pitch) không thể thu nhỏ vô hạn mà không bị đoản mạch và can nhiễu, dẫn đến tình trạng "nghẽn bờ biển" (`비치프런트 병목`): bên trong chip tính toán với tốc độ hàng trăm terabit nhưng dữ liệu không thể chui ra ngoài mép chip kịp. `대역폭밀도극대화` là sứ mệnh tối cao của 실리콘포토닉스와 공동패키징광학. Bằng cách sử dụng sợi quang có đường kính siêu mảnh, ghép bước sóng WDM đa kênh và ống dẫn sóng nano, mật độ băng thông mép chip có thể tăng gấp 10 đến 50 lần so với đầu nối điện, đạt tới hàng chục Tbps trên mỗi milimet mép chip, cho phép các cụm vi xử lý giao tiếp dữ liệu tự do mà không hề gặp chướng ngại vật về diện tích hình học.

**재사용 가능한 콜로케이션·청크:**
`대역폭밀도극대화를 위한 패키징 혁신` — đổi mới đóng gói nhằm cực đại hóa mật độ băng thông,
`대역폭밀도극대화 설계 가이드` — hướng dẫn thiết kế cực đại hóa mật độ băng thông,
`칩 모서리의 대역폭밀도극대화 달성` — đạt được sự cực đại hóa mật độ băng thông tại mép vi mạch,
`차세대 스위치의 대역폭밀도극대화 전략` — chiến lược cực đại hóa mật độ băng thông của bộ chuyển mạch thế hệ mới.

**자주 쓰는 문형과 성분:**
`광도파로 기반의 초밀도 배선 구조를 채택함으로써 칩 가장자리의 대역폭밀도극대화를 효과적으로 이끌어내다` (dẫn dắt hiệu quả sự cực đại hóa mật độ băng thông tại mép vi mạch nhờ áp dụng cấu trúc dây dẫn siêu mật độ dựa trên ống dẫn sóng quang),
`대역폭밀도극대화는 대규모 AI 모델의 병렬 학습 연산 효율을 결정짓는 핵심 척도로 평가받다` (cực đại hóa mật độ băng thông được đánh giá là thước đo cốt lõi quyết định hiệu suất tính toán học song song của các mô hình AI quy mô lớn).

**사회적 관계·주제별 register:** Báo cáo kỹ thuật của các kiến trúc sư hệ thống siêu máy tính (NVIDIA, AMD, Intel), kỷ yếu hội nghị kiến trúc máy tính quốc tế (ISCA, Hot Chips), định hướng đầu tư phần cứng trí tuệ nhân tạo.

**예문:** 한정된 칩 패키지 면적에서 수백 테라비트의 입출력 데이터를 처리하기 위해 초미세 광학 칩렛을 활용한 대역폭밀도극대화 설계가 필수적으로 요구된다.

**Dịch:** Nhằm xử lý hàng trăm terabit dữ liệu vào/ra trong một diện tích đóng gói chip giới hạn, thiết kế cực đại hóa mật độ băng thông tận dụng các chiplet quang học siêu vi được yêu cầu một cách tất yếu.

**어휘 연결:** `대역폭밀도극대화` (Bandwidth density maximization) tập trung vào năng lực truyền dẫn trên mỗi đơn vị chiều dài hoặc diện tích (Tbps/mm hoặc Tbps/mm²), phân biệt với `단순대역폭증가` (Simple bandwidth expansion - tăng tổng băng thông bằng cách mở rộng kích thước thiết bị một cách cơ học).

**영어 참고:** *bandwidth density maximization* — cực đại hóa mật độ băng thông; việc tối đa hóa lưu lượng dữ liệu truyền qua trên một đơn vị độ dài chu vi vi mạch hoặc đơn vị diện tích chất nền đóng gói.

---

<!-- lexical_basis: advanced_native; register: optical coupling physics and micro-optics interface; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 광결합효율향상

**품사:** 명사

**핵심 의미:** 직경이 약 9~10 마이크로미터에 달하는 단일 모드 광섬유(SMF)의 광 모드(Mode)와 수백 나노미터에 불과한 실리콘 광도파로 모드 간의 극심한 모드 크기 불일치(Mode Size Mismatch)로 인해 발생하는 광 전력 손실을 역 테이퍼(Inverse taper) 구조의 에지 커플러나 회절 격자 커플러(Grating coupler) 최적화를 통해 획기적으로 줄여 결합 효율을 높이는 기술이다.

**베트남어 뜻:** nâng cao hiệu suất ghép quang (Optical Coupling Efficiency Enhancement); giải pháp kỹ thuật vi quang học nhằm triệt tiêu sự suy hao năng lượng ánh sáng do sự bất tương thích cực lớn về kích thước trường mode giữa lõi sợi quang đơn mode (~9–10 $\mu\text{m}$) và ống dẫn sóng silicon nano (~450 nm), thông qua thiết kế tối ưu các bộ ghép mép dạng côn đảo (inverse taper edge coupler) hoặc bộ ghép cách tử nhiễu xạ (grating coupler).

**뉘앙스와 사용법:** Đây là vấn đề "con voi chui qua lỗ kim" kinh điển trong ngành photonics. Lõi sợi quang có kích thước khoảng $10 \mu\text{m}$, trong khi ống dẫn sóng silicon chỉ rộng khoảng $0.45 \mu\text{m}$ ($450\text{ nm}$). Nếu chiếu thẳng sợi quang vào ống dẫn sóng, hơn 99% ánh sáng sẽ bị văng ra ngoài (`모드 불일치 손실` — mode mismatch loss). Để đạt được `광결합효율향상`, các kỹ sư sử dụng hai giải pháp chủ lực: Một là bộ ghép cách tử (`격자 커플러` — grating coupler) với các rãnh nhiễu xạ nano giúp hắt ánh sáng thẳng đứng từ sợi quang vào mặt chip, tiện lợi cho việc kiểm thử tự động trên toàn tấm wafer. Hai là bộ ghép mép côn đảo (`에지 커플러` — inverse taper edge coupler), trong đó ống dẫn sóng silicon được chuốt nhọn dần tới vài chục nanomet để mở rộng trường mode ánh sáng ôm trọn lấy lõi sợi quang, mang lại suy hao ghép nối siêu thấp (dưới $0.5\text{ dB/facet}$) và băng thông quang học siêu rộng trải khắp các dải bước sóng C-band và O-band.

**재사용 가능한 콜로케이션·청크:**
`역 테이퍼 설계를 통한 광결합효율향상` — nâng cao hiệu suất ghép quang thông qua thiết kế côn đảo,
`에지 커플러의 광결합효율향상 방안` — giải pháp nâng cao hiệu suất ghép quang của bộ ghép mép,
`광결합효율향상과 광학 정렬 공차 분석` — phân tích việc nâng cao hiệu suất ghép quang và dung sai căn chỉnh quang học,
`광결합효율향상을 위한 반사 방지 코팅` — phủ lớp chống phản xạ nhằm nâng cao hiệu suất ghép quang.

**자주 쓰는 문형과 성분:**
`스폿 크기 변환기를 정밀하게 집적하여 실리콘 도파로와 외부 광섬유 간의 광결합효율향상을 달성하다` (tích hợp chuẩn xác bộ biến đổi kích thước điểm sáng để đạt được sự nâng cao hiệu suất ghép quang giữa ống dẫn sóng silicon và sợi quang bên ngoài),
`광결합효율향상은 전체 광 트랜시버 모듈의 링크 파워 버짓을 만족시키기 위한 선결 조건이다` (nâng cao hiệu suất ghép quang là điều kiện tiên quyết để thỏa mãn ngân sách năng lượng tuyến truyền dẫn của toàn bộ mô-đun thu phát quang).

**사회적 관계·주제별 register:** Báo cáo mô phỏng điện từ trường FDTD (Lumerical), hội thảo thiết kế giao diện quang học, quy trình nghiệm thu suy hao quang trong dây chuyền đóng gói linh kiện.

**예문:** 칩 가장자리에 서브마이크론 역 테이퍼 기반의 스폿 사이즈 변환기를 적용하여 외부 광섬유와의 광결합효율향상을 이루어냈다.

**Dịch:** Bằng cách áp dụng bộ chuyển đổi kích thước điểm sáng dựa trên cấu trúc côn đảo dưới micromet tại mép chip, người ta đã nâng cao hiệu suất ghép quang với sợi quang bên ngoài một cách vượt bậc.

**어휘 연결:** `광결합효율향상` (Coupling efficiency enhancement) tối ưu hóa giao diện đưa ánh sáng vào/ra chip, bổ trợ cho `광도파로손실최소화` (Waveguide loss minimization - tối ưu hóa sự lan truyền ánh sáng bên trong chip).

**영어 참고:** *optical coupling efficiency enhancement* — nâng cao hiệu suất ghép quang; giải pháp kỹ thuật vi mô nhằm giảm thiểu suy hao chuyển tiếp ánh sáng giữa sợi quang kích thước lớn và ống dẫn sóng silicon kích thước nano.

---

<!-- lexical_basis: advanced_native; register: all-optical networking and datacenter switching fabric; source_lane: news_formal; context: advanced-silicon-photonics-and-co-packaged-optics/news_formal -->
### 광스위칭네트워크

**품사:** 명사

**핵심 의미:** 데이터센터 내부의 초고속 트래픽을 중계·교환할 때 신호를 전기적 신호로 변환하는 광-전-광(O-E-O) 변환 과정을 거치지 않고, 광 간섭계(MZI) 스위치 매트릭스나 마이크로링 공진기 기반 광 스위치 패브릭을 이용하여 광자 상태 그대로(All-Optical, O-O-O) 목적지 경로로 직접 라우팅하고 분배하는 초저지연·초고대역 광 교환망 아키텍처이다.

**베트남어 뜻:** mạng chuyển mạch quang thuần túy (All-Optical Switching Network / Photonic Switching Fabric); cấu trúc mạng truyền thông và phân phối dữ liệu chuyển mạch trực tiếp luồng tín hiệu ở miền quang (quang-quang-quang / O-O-O) mà không cần phải chuyển đổi quang-điện-quang (O-E-O), sử dụng ma trận công tắc giao thoa kế MZI hoặc mảng cộng hưởng vi vòng để triệt tiêu độ trễ chuyển đổi và tiết kiệm điện năng xử lý.

**뉘앙스와 사용법:** Trong mạng máy tính truyền thống, một gói tin quang khi đi qua mỗi bộ chuyển mạch (Switch/Router) đều phải trải qua quy trình O-E-O phiền toái: biến photon thành electron, đưa vào chip nhớ đệm và mạch logic để đọc địa chỉ IP, rồi lại dùng laser biến ngược thành photon để truyền tiếp. Quy trình này tạo ra độ trễ hàng micro-giây (`지연 시간 증대`) và tiêu tốn lượng điện năng khổng lồ cho việc chuyển đổi tín hiệu liên tục. `광스위칭네트워크` (All-Optical Network) loại bỏ hoàn toàn mắt xích trung gian này. Dữ liệu di chuyển như một luồng ánh sáng thuần khiết xuyên suốt toàn bộ trung tâm dữ liệu. Các nút chuyển mạch sử dụng các linh kiện quang học như mạng giao thoa kế Mach-Zehnder (`MZI 스위치`) hoặc tinh thể lỏng trên silicon (LCOS) để bẻ cong đường đi của chùm sáng trong vài nano-giây. Kết quả là độ trễ mạng tụt xuống mức tiệm cận tốc độ ánh sáng, không có hiện tượng nghẽn hàng đợi (queueing delay), và băng thông chuyển mạch trở nên vô tận mà không phụ thuộc vào tốc độ xung nhịp của vi xử lý điện tử.

**재사용 가능한 콜로케이션·청크:**
`전광 광스위칭네트워크 구축` — thiết lập mạng chuyển mạch quang thuần túy,
`광스위칭네트워크의 초저지연 특성` — đặc tính siêu trễ thấp của mạng chuyển mạch quang,
`대규모 광스위칭네트워크 패브릭 제어` — điều khiển cấu trúc mạng chuyển mạch quang quy mô lớn,
`광스위칭네트워크 기반 AI 클러스터` — cụm AI dựa trên mạng chuyển mạch quang.

**자주 쓰는 문형과 성분:**
`광-전-광 변환 지연을 원천 제거한 광스위칭네트워크를 도입하여 클러스터 내부의 패킷 전달 시간을 나노초 단위로 단축하다` (áp dụng mạng chuyển mạch quang thuần túy triệt tiêu tận gốc độ trễ chuyển đổi quang-điện-quang để rút ngắn thời gian chuyển tiếp gói tin bên trong cụm máy chủ xuống mức nano giây),
`광스위칭네트워크의 포트 수가 증가함에 따라 누적되는 삽입 손실을 보상하기 위해 온칩 반도체 광증폭기를 연계하다` (kết hợp bộ khuếch đại quang bán dẫn trên chip nhằm bù đắp tổn thất chèn tích lũy khi số lượng cổng của mạng chuyển mạch quang tăng lên).

**사회적 관계·주제별 register:** Kỹ sư kiến trúc mạng trung tâm dữ liệu thế hệ mới, liên minh mạng toàn quang (IOWN Global Forum), tạp chí công nghệ mạng quang IEEE/OSA Journal of Optical Communications and Networking.

**예문:** 데이터센터의 급격한 패킷 지연을 해결하기 위해 전기적 스위칭 대신 빛의 경로를 물리적으로 직접 제어하는 전광 광스위칭네트워크 기술이 차세대 백본망에 전격 도입되었다.

**Dịch:** Nhằm giải quyết sự chậm trễ truyền gói tin đột biến của trung tâm dữ liệu, công nghệ mạng chuyển mạch quang thuần túy trực tiếp điều khiển vật lý đường đi của ánh sáng thay cho chuyển mạch điện tử đã được đưa vào áp dụng mạnh mẽ tại mạng trục thế hệ mới.

**어휘 연결:** `광스위칭네트워크` (Optical switching network - O-O-O) duy trì tín hiệu hoàn toàn ở miền quang, phân biệt với `전자식패킷스위칭네트워크` (Electronic packet switching network - O-E-O, chuyển đổi quang điện quang liên tục gây trễ và tốn điện) và `광서킷스위칭` (Optical circuit switching - OCS, thiết lập kênh truyền quang tĩnh theo phiên).

**영어 참고:** *optical switching network (photonic switching fabric)* — mạng chuyển mạch quang; kiến trúc mạng định tuyến và chuyển tiếp các luồng dữ liệu trực tiếp trong miền quang mà không trải qua quá trình biến đổi quang-điện-quang trung gian.

---

## 읽기: 전자의 한계를 넘어 빛으로 데이터를 잇는 실리콘 포토닉스

<!-- passage_word_count: 101 Korean eojeol; target_set: 실리콘포토닉스, 공동패키징광학, 광도파로손실최소화, 마이크로링변조기, 광섬유배열접속, 단일칩광전집적, 초저전력광인터커넥트, 실리콘온인슐레이터기판, 파장분할다중화소자, 광검출기응답속도, 열광학위상천이기, 반도체레이저단일집적, 대역폭밀도극대화, 광결합효율향상, 광스위칭네트워크 -->

인공지능 데이터센터의 폭발적인 연산 수요를 감당하기 위해 반도체 산업은 전자의 한계를 넘어 빛으로 신호를 전송하는 실리콘포토닉스 기술로 대전환을 이루고 있다. 고성능 컴퓨팅 환경에서는 실리콘온인슐레이터기판 위에 반도체레이저단일집적 기술로 온칩 광원을 구현하고, 나노 가공 공정을 통해 광도파로손실최소화를 달성함으로써 빛의 감쇄를 철저히 억제한다. 칩 내부에서는 초소형 마이크로링변조기와 열광학위상천이기를 통해 신호 왜곡을 보정하며, 다채널 파장분할다중화소자와 초고속 광검출기응답속도를 결합하여 테라비트급 신호를 왜곡 없이 복원한다. 이러한 광전 소자들을 스위치 ASIC과 한 패키지에 묶는 공동패키징광학 체계는 정밀한 광섬유배열접속과 에지 커플러의 광결합효율향상을 바탕으로 칩 주변의 대역폭밀도극대화를 이끌어낸다. 나아가 전자-광 소자를 완전히 일체화하는 단일칩광전집적과 변환 지연을 없앤 광스위칭네트워크는 전력 낭비 없는 초저전력광인터커넥트를 구축하여 미래 하이퍼스케일 컴퓨팅의 물리적 병목을 완벽히 해소한다.

**베트남어 번역:**

Để đáp ứng nhu cầu tính toán bùng nổ của các trung tâm dữ liệu trí tuệ nhân tạo, ngành công nghiệp bán dẫn đang tạo ra một bước chuyển mình vĩ đại hướng tới công nghệ quang tử silicon truyền tín hiệu bằng ánh sáng vượt qua mọi giới hạn vật lý của electron. Trong môi trường tính toán hiệu năng cao, người ta hiện thực hóa nguồn sáng trên chip thông qua công nghệ tích hợp nguyên khối laser bán dẫn trên đế bán dẫn silicon trên lớp cách điện, đồng thời triệt tiêu tối đa sự suy giảm ánh sáng bằng việc tối thiểu hóa suy hao ống dẫn sóng quang qua các quy trình gia công nano chuẩn xác. Bên trong vi mạch, hệ thống tự động bù trừ méo dạng tín hiệu thông qua bộ điều chế vi vòng siêu nhỏ cùng bộ dịch pha nhiệt quang, đồng thời kết hợp linh kiện ghép kênh phân chia theo bước sóng đa kênh với tốc độ đáp ứng của máy dò quang siêu tốc để khôi phục hoàn hảo các luồng tín hiệu cấp terabit. Hệ thống quang học đồng đóng gói gom các linh kiện quang điện này cùng chip ASIC chuyển mạch vào chung một khối đóng gói duy nhất, dựa trên nền tảng ghép nối mảng sợi quang tinh chuẩn và sự nâng cao hiệu suất ghép quang của bộ ghép mép để tạo ra sự cực đại hóa mật độ băng thông xung quanh mép chip. Xa hơn nữa, giải pháp tích hợp quang điện nguyên khối trên đơn chip đồng nhất hoàn toàn linh kiện điện-quang cùng mạng chuyển mạch quang thuần túy loại bỏ độ trễ chuyển đổi sẽ thiết lập nên một kết nối quang liên mạch siêu tiết kiệm điện không hao phí năng lượng, giải tỏa triệt để mọi nút thắt cổ chai vật lý của điện toán siêu quy mô tương lai.
