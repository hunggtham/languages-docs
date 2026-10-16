<!-- source_policy: original explanations, examples, and passage; power grid cyber resilience and OT security terminology cross-checked conceptually, not copied -->

# 국가 핵심 전력망과 제어시스템 사이버 방어

에너지 안보의 핵심 축인 전력망이 정보통신기술과 결합하여 고도화되면서, 전력 제어시스템을 겨냥한 사이버 공격은 단순한 데이터 유출을 넘어 국가적 대정전과 물리적 설비 파괴를 야기할 수 있는 실질적 위협이 되었다. 발전소와 송·배전망 현장에 설치된 스카다시스템, 원격단말장치 등 운영기술(OT) 자산은 일반 IT 환경과 달리 24시간 무중단 가용성과 물리적 안전을 최우선으로 요구하기 때문에 독자적인 보안 및 복원력 체계 구축이 필수적이다. 망분리아키텍처와 제로트러스트 원칙을 바탕으로 한 심층 방어부터 변전소자동화보안, 침입탐지시스템, 그리고 통신 단절 시 가동되는 비상운영절차에 이르기까지 다층적인 대응 역량이 계통의 생존성을 좌우한다. 본 학습 자료에서는 사이버물리시스템으로 진화한 현대 전력망을 사이버 침해로부터 방어하고 계통복원력을 확보하는 데 필요한 핵심 전문 어휘 15개를 체계적으로 학습한다.

<!-- lexical_basis: advanced_native; register: critical infrastructure security policy and cyber defense; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 운영기술보안

**품사:** 명사

**핵심 의미:** 공장, 발전소, 전력망 등 물리적 생산 공정이나 인프라 설비를 직접 모니터링하고 제어하는 하드웨어와 소프트웨어(운영기술, OT) 환경을 외부 침해 및 오작동 위협으로부터 보호하기 위한 보안 체계다.

**베트남어 뜻:** an ninh công nghệ vận hành (OT Security - Operational Technology Security); hệ thống và giải pháp bảo vệ toàn diện phần cứng, phần mềm cùng các giao thức chuyên dụng dùng để giám sát, điều khiển trực tiếp các quy trình cơ điện vật lý trong các cơ sở hạ tầng trọng yếu và công nghiệp.

**뉘앙스와 사용법:** `운영기술보안` (an ninh OT) khác biệt căn bản so với an ninh công nghệ thông tin truyền thống (`정보기술보안` — IT security). Nếu IT security đặt ưu tiên theo thứ tự bảo mật dữ liệu (`기밀성` — confidentiality), tính toàn vẹn (`무결성` — integrity), rồi mới đến tính khả dụng (`가용성` — availability), thì `운영기술보안` đảo ngược hoàn toàn quy tắc này (mô hình AIC/Safety-First). Đối với lưới điện, tính khả dụng và tính an toàn vật lý (`안전성` — safety) là tối thượng; việc dừng hệ thống chỉ trong vài giây để quét mã độc có thể gây mất điện diện rộng, làm nổ lò hơi hoặc gây nguy hiểm tới tính mạng con người. Ngoài ra, thiết bị OT thường có vòng đời 20–30 năm (hệ thống kế thừa — `레거시 시스템`), tài nguyên tính toán nghèo nàn, không thể cài đặt các phần mềm chống virus phổ thông hay khởi động lại tùy tiện, đòi hỏi các giải pháp bảo vệ chuyên biệt không can thiệp trực tiếp vào tiến trình điều khiển.

**재사용 가능한 콜로케이션·청크:** `운영기술보안 체계 구축` — xây dựng hệ thống an ninh công nghệ vận hành, `운영기술보안 가이드라인` — hướng dẫn an ninh công nghệ vận hành, `운영기술보안 역량 강화` — củng cố năng lực an ninh công nghệ vận hành, `운영기술보안 위협 대응` — ứng phó mối đe dọa an ninh công nghệ vận hành.

**자주 쓰는 문형과 성분:** `전력 설비의 디지털 전환에 발맞추어 운영기술보안을 강화하다` (củng cố an ninh công nghệ vận hành bắt nhịp với quá trình chuyển đổi số của cơ sở hạ tầng điện lực), `운영기술보안 솔루션을 도입하여 폐쇄망 내 제어 설비의 가용성을 보호하다` (áp dụng giải pháp an ninh công nghệ vận hành để bảo vệ tính khả dụng của thiết bị điều khiển trong mạng đóng).

**사회적 관계·주제별 register:** Báo cáo an ninh cơ sở hạ tầng trọng yếu quốc gia, diễn đàn an toàn thông tin công nghiệp, các cuộc họp chiến lược giữa Giám đốc an ninh thông tin (CISO) và Giám đốc kỹ thuật nhà máy điện (Plant Manager).

**예문:** 전력망의 디지털화로 폐쇄망이었던 현장 설비가 인터넷망과 연결됨에 따라 대규모 정전 사태를 방지하기 위한 운영기술보안의 중요성이 급격히 부각되고 있다.

**Dịch:** Do quá trình số hóa lưới điện khiến các thiết bị tại hiện trường vốn thuộc mạng đóng bị kết nối với mạng Internet, tầm quan trọng của an ninh công nghệ vận hành nhằm ngăn chặn các sự cố mất điện trên diện rộng đang gia tăng nhanh chóng.

**어휘 연결:** `운영기술보안` (OT 보안) tập trung vào máy móc, cảm biến, van áp lực và dòng điện trong thế giới vật lý, tạo thành cặp song hành với `정보기술보안` (IT 보안) vốn xử lý luồng dữ liệu, máy chủ web và tệp tin văn phòng. Xu hướng hiện đại kết nối hai mạng này được gọi là `IT-OT 융합 보안` (bảo mật hội tụ IT-OT).

**영어 참고:** *Operational Technology (OT) Security* — an ninh công nghệ vận hành; việc bảo vệ các hệ thống điều khiển công nghiệp và mạng lưới thiết bị cơ điện kiểm soát hạ tầng vật lý trước các nguy cơ xâm nhập số.

---

<!-- lexical_basis: advanced_native; register: geopolitical cybersecurity and hybrid warfare strategy; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 전력망사이버공격

**품사:** 명사

**핵심 의미:** 국가 또는 지역의 송·배전망 및 변전소 제어 네트워크를 마비시키거나 교란하여 대규모 정전, 전력 설비의 물리적 파괴, 사회적 혼란을 야기할 목적으로 감행되는 악의적인 사이버 침해 행위다.

**베트남어 뜻:** tấn công mạng vào lưới điện (power grid cyberattack); hành vi xâm nhập ác ý có chủ đích vào mạng điều khiển truyền tải, phân phối điện và trạm biến áp nhằm làm tê liệt hoặc phá hủy thiết bị điện, gây mất điện diện rộng và gây bất ổn trật tự an ninh quốc gia.

**뉘앙스와 사용법:** `전력망사이버공격` không đơn thuần là hành vi tống tiền (`랜섬웨어` — ransomware) hay đánh cắp dữ liệu kinh doanh của tin tặc thông thường, mà là một vũ khí nguy hiểm trong chiến tranh phi đối xứng hoặc chiến tranh lai (`하이브리드 전쟁` — hybrid warfare) do các nhóm tin tặc cấp cao được nhà nước bảo trợ (`국가 배후 해킹 조직` — state-sponsored APT groups) thực hiện. Mục tiêu của kẻ tấn công là mở hàng loạt máy cắt điện (`차단기 개방`), làm quá tải đường dây dẫn đến nổ máy biến áp công suất lớn mà phải mất hàng năm mới có thể thay thế. Hậu quả tức thì là tê liệt bệnh viện, hệ thống cấp thoát nước, giao thông và thông tin liên lạc của toàn bộ một quốc gia.

**재사용 가능한 콜로케이션·청크:** `국가 배후의 전력망사이버공격` — cuộc tấn công mạng vào lưới điện do thế lực cấp quốc gia đứng sau, `전력망사이버공격 징후를 포착하다` — phát hiện dấu hiệu tấn công mạng vào lưới điện, `전력망사이버공격을 방어하다` — phòng thủ trước tấn công mạng vào lưới điện, `전력망사이버공격 시나리오 기반 훈련` — diễn tập dựa trên kịch bản tấn công mạng vào lưới điện.

**자주 쓰는 문형과 성분:** `전력망사이버공격에 노출되어 국가 기간망이 마비될 위기에 처하다` (bị phơi nhiễm trước tấn công mạng vào lưới điện, đứng trước nguy cơ tê liệt mạng lưới huyết mạch quốc gia), `치밀하게 기획된 전력망사이버공격을 사전에 차단하다` (chặn đứng từ sớm cuộc tấn công mạng vào lưới điện được lên kế hoạch tinh vi).

**사회적 관계·주제별 register:** Văn kiện an ninh quốc phòng, thời sự chính trị quốc tế, chiến lược bảo vệ an ninh năng lượng quốc gia và các chỉ thị khẩn cấp từ cơ quan tình báo.

**예문:** 분쟁 지역에서 적대 세력이 변전소 제어 시스템에 전력망사이버공격을 감행하면서 수십만 가구의 전력 공급이 일시에 중단되는 초유의 사태가 발생했다.

**Dịch:** Tại khu vực xung đột, khi lực lượng đối địch tiến hành tấn công mạng vào lưới điện nhắm vào hệ thống điều khiển trạm biến áp, một sự cố chưa từng có tiền lệ đã xảy ra khiến nguồn cung điện cho hàng trăm nghìn hộ gia đình bị cắt đứt cùng lúc.

**어휘 연결:** `전력망사이버공격` là loại hình tấn công mạng cụ thể hóa vào hạ tầng điện lực quốc gia, phân biệt với `일반 사이버 공격` (tấn công mạng nói chung) hay `금융 전산망 해킹` (tấn công mạng ngân hàng/tài chính). Kết cục vật lý của nó là thảm họa mất điện toàn diện (`블랙아웃` / `대규모 정전`).

**영어 참고:** *power grid cyberattack* — cuộc tấn công mạng vào lưới điện nhằm phá vỡ độ ổn định của hệ thống cung cấp năng lượng hoặc gây hư hại vật lý cho các thiết bị trạm biến áp và đường dây truyền tải.

---

<!-- lexical_basis: advanced_native; register: supervisory control and power grid telemetry; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 스카다시스템

**품사:** 명사

**핵심 의미:** 지리적으로 넓게 분산된 전력망, 송유관, 수처리 시설 등의 산업 설비로부터 센서 데이터를 원격 수집하고, 중앙 관제 센터에서 전체 공정을 실시간 감시하며 제어 명령을 내리는 종합 원격 감시 제어 체계다.

**베트남어 뜻:** hệ thống SCADA (Supervisory Control and Data Acquisition); hệ thống giám sát và thu thập dữ liệu từ xa giúp các kỹ sư điều độ tại trung tâm kiểm soát theo dõi trạng thái vận hành và truyền lệnh điều khiển tức thời tới các thiết bị phân tán trên phạm vi địa lý rộng lớn.

**뉘앙스와 사용법:** `스카다시스템` (SCADA) là "bộ não điều hành" và "trung tâm thần kinh" của mạng lưới điện lực quốc gia. Nhân viên điều độ điện lực (`계통운영자`) ngồi trước màn hình giao diện đồ họa người - máy (`HMI` — Human-Machine Interface) của SCADA để theo dõi liên tục điện áp, tần số, công suất truyền tải từ hàng trăm trạm biến áp cách xa hàng trăm km, đồng thời phát lệnh đóng/mở máy cắt từ xa. Do nhiều giao thức truyền thông SCADA trước đây (như Modbus, DNP3) được thiết kế cho mạng kín không có tính năng mã hóa hay xác thực danh tính, ngày nay SCADA trở thành đích ngắm tối thượng của các cuộc tấn công mạng; nếu máy chủ SCADA bị chiếm quyền, kẻ tấn công có thể cắt điện cả một vùng lãnh thổ chỉ bằng một cú nhấp chuột.

**재사용 가능한 콜로케이션·청크:** `스카다시스템 관제 화면` — màn hình điều hành giám sát của hệ thống SCADA, `스카다시스템 프로토콜 보안` — bảo mật giao thức hệ thống SCADA, `스카다시스템에 침투하다` — xâm nhập vào hệ thống SCADA, `중앙 스카다시스템` — hệ thống SCADA trung tâm.

**자주 쓰는 문형과 성분:** `스카다시스템을 통해 원격지의 차단기를 실시간으로 제어하다` (thông qua hệ thống SCADA để điều khiển máy cắt từ xa theo thời gian thực), `스카다시스템의 통신 구간을 암호화하여 위·변조 명령을 원천 차단하다` (mã hóa đường truyền của hệ thống SCADA để chặn đứng triệt để các lệnh giả mạo/chỉnh sửa).

**사회적 관계·주제별 register:** Kỹ thuật điều độ điện lực, vận hành phòng điều khiển trung tâm năng lượng, báo cáo kỹ thuật tự động hóa công nghiệp và các tiêu chuẩn bảo mật hệ thống SCADA.

**예문:** 전력 제어 센터는 스카다시스템을 이용해 전국 변전소의 전압과 전류 상태를 실시간으로 수집하고 이상 발생 시 원격으로 회로를 분리한다.

**Dịch:** Trung tâm điều khiển điện lực sử dụng hệ thống SCADA để thu thập thời gian thực trạng thái điện áp và dòng điện của các trạm biến áp trên toàn quốc và cách ly mạch từ xa khi có sự cố phát sinh.

**어휘 연결:** `스카다시스템` (SCADA) là hệ thống giám sát cấp cao trên diện rộng thuộc tập hợp `산업제어시스템` (ICS). Nó giao tiếp với các thiết bị hiện trường như `원격단말장치` (RTU) hoặc bộ điều khiển khả trình (`PLC`) để nhận dữ liệu đo lường và phát lệnh điều khiển.

**영어 참고:** *SCADA (Supervisory Control and Data Acquisition) system* — hệ thống giám sát điều khiển và thu thập dữ liệu; kiến trúc điều khiển diện rộng hỗ trợ giám sát và vận hành các quy trình công nghiệp phân tán từ phòng điều độ trung tâm.

---

<!-- lexical_basis: advanced_native; register: industrial automation and control architecture; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 산업제어시스템

**품사:** 명사

**핵심 의미:** 공장 자동화, 발전, 송배전, 수자원 등 산업 공정을 자동으로 측정, 감시 및 제어하기 위해 사용되는 제어기, 네트워크, 소프트웨어 및 인터페이스 장치 일체를 포괄하는 총칭이다.

**베트남어 뜻:** hệ thống điều khiển công nghiệp (ICS - Industrial Control System); thuật ngữ bao quát toàn bộ các bộ điều khiển chuyên dụng, thiết bị mạng, phần mềm và giao diện tự động hóa dùng để vận hành các quy trình sản xuất và hạ tầng vật lý.

**뉘앙스와 사용법:** `산업제어시스템` (ICS) là khái niệm "chiếc ô" (khái niệm bao trùm) trong kỹ thuật điều khiển, bao gồm cả SCADA, DCS (Distributed Control System — hệ thống điều khiển phân tán), PLC (Programmable Logic Controller), RTU và IED. Điểm đặc thù của `산업제어시스템` là tính định thời gian thực khắt khe (`실시간성` — deterministic real-time response) và tính ổn định tuyệt đối; một phần nghìn giây trễ nhịp có thể gây chập cháy động cơ hoặc hỏng chuỗi thiết bị. Khi bàn về an ninh mạng, các hệ thống ICS thường bị đánh giá là có bề mặt tấn công mở rộng do sử dụng nhiều thiết bị phần cứng lâu năm, firmware cũ kỹ và thiếu cơ chế cập nhật tự động.

**재사용 가능한 콜로케이션·청크:** `산업제어시스템 보안 표준` — tiêu chuẩn an ninh hệ thống điều khiển công nghiệp, `산업제어시스템 운영 환경` — môi trường vận hành hệ thống điều khiển công nghiệp, `산업제어시스템 취약점 점검` — kiểm tra lỗ hổng hệ thống điều khiển công nghiệp, `국가 핵심 산업제어시스템` — hệ thống điều khiển công nghiệp trọng yếu quốc gia.

**자주 쓰는 문형과 성분:** `산업제어시스템에 대한 보안성 평가를 정기적으로 수행하다` (thực hiện định kỳ việc đánh giá tính an toàn bảo mật cho hệ thống điều khiển công nghiệp), `산업제어시스템 전용 방화벽을 배치하여 비인가 패킷의 유입을 막다` (bố trí tường lửa chuyên dụng cho hệ thống điều khiển công nghiệp để ngăn chặn luồng gói tin trái phép).

**사회적 관계·주제별 register:** Tiêu chuẩn công nghiệp quốc tế (như ISA/IEC 62443, NIST SP 800-82), quy định kiểm toán an ninh mạng chính phủ và tài liệu chuyên môn của kỹ sư tự động hóa nhà máy.

**예문:** 국가 기간망을 구성하는 산업제어시스템은 일반 사무용 네트워크와 달리 작은 통신 지연이나 일시적 재부팅만으로도 치명적인 물리적 사고를 초래할 수 있다.

**Dịch:** Hệ thống điều khiển công nghiệp cấu thành nên mạng lưới huyết mạch quốc gia khác với mạng văn phòng thông thường ở chỗ chỉ một độ trễ truyền thông nhỏ hay việc khởi động lại tạm thời cũng có thể dẫn đến tai nạn vật lý thảm khốc.

**어휘 연결:** `산업제어시스템` (ICS) là thuật ngữ bao hàm rộng nhất, chứa đựng các kiến trúc cụ thể như `스카다시스템` (SCADA - điều khiển diện rộng), `DCS` (điều khiển tập trung trong nhà máy), `원격단말장치` (RTU - thiết bị trường) và `PLC` (bộ điều khiển logic khả trình).

**영어 참고:** *Industrial Control System (ICS)* — thuật ngữ tổng quát chỉ mọi hệ thống phần cứng và phần mềm được triển khai để vận hành, giám sát và tự động hóa các quy trình vật lý công nghiệp.

---

<!-- lexical_basis: advanced_native; register: network defense and air-gap engineering; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 망분리아키텍처

**품사:** 명사

**핵심 의미:** 중요 제어 시스템이나 기밀 데이터를 취급하는 내부 네트워크를 인터넷 및 일반 업무망과 물리적 또는 논리적으로 완전히 격리하여 외부 사이버 침입 경로를 원천 차단하는 네트워크 설계 구조다.

**베트남어 뜻:** kiến trúc cách ly mạng / kiến trúc phân tách mạng (network separation architecture / air-gap architecture); mô hình thiết kế mạng cô lập triệt để mạng điều khiển nội bộ quan trọng với Internet và mạng văn phòng bên ngoài về mặt vật lý hoặc logic để triệt tiêu đường xâm nhập.

**뉘앙스와 사용법:** `망분리아키텍처` là chiến lược phòng thủ cổ điển nhưng giữ vai trò nền tảng nhất trong các cơ sở hạ tầng năng lượng (mô hình phân tầng Purdue Model). Hình thức cao nhất của kiến trúc này là phân tách vật lý hoàn toàn (`물리적 망분리` — air-gap), nghĩa là không tồn tại bất kỳ dây cáp vật lý nào nối giữa mạng điều khiển hiện trường và mạng văn phòng. Tuy nhiên, sự xuất hiện của các thiết bị bảo trì di động, USB của kỹ thuật viên, hoặc việc thiết lập các cổng truyền dữ liệu một chiều (`일방향 데이터 전송 장치` — data diode) để đưa dữ liệu vận hành lên đám mây có thể tạo ra các kẽ hở làm vô hiệu hóa `망분리아키텍처`. Các chuyên gia an ninh hiện đại cảnh báo không thể ỷ lại vào "ảo tưởng mạng đóng" (`폐쇄망의 환상`) mà phải áp dụng kiểm soát sâu nhiều lớp.

**재사용 가능한 콜로케이션·청크:** `물리적 망분리아키텍처` — kiến trúc phân tách mạng vật lý, `망분리아키텍처를 적용하다` — áp dụng kiến trúc cách ly mạng, `망분리아키텍처의 무력화` — sự vô hiệu hóa kiến trúc cách ly mạng, `엄격한 망분리아키텍처 유지` — duy trì kiến trúc cách ly mạng nghiêm ngặt.

**자주 쓰는 문형과 성분:** `핵심 제어망에 망분리아키텍처를 설계하여 외부 해킹 위협을 원천 차단하다` (thiết kế kiến trúc cách ly mạng cho mạng điều khiển cốt lõi để chặn đứng từ gốc nguy cơ tấn công từ bên ngoài), `망분리아키텍처가 구축되어 있더라도 유지보수용 단말기를 통한 침투 가능성을 경계해야 한다` (dù kiến trúc cách ly mạng đã được thiết lập vẫn phải cảnh giác trước nguy cơ xâm nhập qua các thiết bị đầu cuối bảo trì).

**사회적 관계·주제별 register:** Quy chuẩn thiết kế an ninh mạng viễn thông công nghiệp, quy định bảo vệ bí mật nhà nước, kiến trúc sư mạng hạ tầng (network security architect) và các quy định pháp lý an toàn thông tin.

**예문:** 전력 거래망과 변전소 현장 제어망 사이에는 엄격한 망분리아키텍처가 적용되어 있어 외부 상용 인터넷을 통한 직접적인 접속이 불가능하다.

**Dịch:** Giữa mạng thị trường giao dịch điện lực và mạng điều khiển hiện trường tại các trạm biến áp được áp dụng kiến trúc cách ly mạng nghiêm ngặt, khiến cho việc truy cập trực tiếp thông qua mạng Internet thương mại bên ngoài là bất khả thi.

**어휘 연결:** `망분리아키텍처` phân tách mạng thành hai nửa riêng biệt (`물리적 망분리` — tách biệt dây vật lý, hoặc `논리적 망분리` — tách biệt bằng VLAN/SDN), đối lập với cấu trúc mạng phẳng kết nối mở (`단일 평면 네트워크` / `개방형 네트워크`).

**영어 참고:** *network separation architecture* (hoặc *air-gap architecture*) — kiến trúc phân tách mạng lưới nhằm cô lập môi trường điều khiển công nghiệp khỏi Internet và mạng doanh nghiệp công cộng.

---

<!-- lexical_basis: advanced_native; register: network traffic inspection and threat detection; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 침입탐지시스템

**품사:** 명사

**핵심 의미:** 네트워크 트래픽이나 제어 설비의 시스템 로그를 실시간으로 모니터링하여 인가되지 않은 접근 시도, 비정상 패킷, 악성코드 활동 등 사이버 침해 행위를 식별하고 경보를 발령하는 보안 감시 시스템이다.

**베트남어 뜻:** hệ thống phát hiện xâm nhập (IDS - Intrusion Detection System); hệ thống an ninh giám sát liên tục lưu lượng mạng hoặc nhật ký thiết bị nhằm nhận diện và phát chuông cảnh báo khi phát hiện các hành vi thâm nhập trái phép hoặc bất thường.

**뉘앙스와 사용법:** Trong môi trường điều khiển lưới điện, `침입탐지시스템` (IDS) có những yêu cầu rất khắt khe khác với văn phòng thông thường. Người ta chủ yếu sử dụng cơ chế lắng nghe thụ động (`수동형 패킷 미러링` — passive sniffing qua cổng SPAN/TAP), tuyệt đối không để hệ thống tự ý chặn ngắt lưu lượng (như thiết bị IPS — Intrusion Prevention System) vì rủi ro chặn nhầm một tín hiệu ngắt máy cắt khẩn cấp có thể dẫn tới sự cố vật lý nghiêm trọng. IDS cấp công nghiệp phải tích hợp công nghệ phân tích gói tin chuyên sâu (`심층 패킷 분석` — Deep Packet Inspection, DPI) hỗ trợ các giao thức năng lượng đặc thù như Modbus, DNP3, IEC 60870-5-104 và IEC 61850 để phát hiện xem một bức điện điều khiển có bị làm sai lệch giá trị cài đặt hay không.

**재사용 가능한 콜로케이션·청크:** `산업용 침입탐지시스템` — hệ thống phát hiện xâm nhập cấp công nghiệp, `침입탐지시스템 경보` — cảnh báo từ hệ thống phát hiện xâm nhập, `침입탐지시스템을 연동하다` — liên kết hệ thống phát hiện xâm nhập, `실시간 침입탐지시스템` — hệ thống phát hiện xâm nhập thời gian thực.

**자주 쓰는 문형과 성분:** `제어망 스위치에 침입탐지시스템을 설치하여 이상 트래픽 유입 여부를 상시 감시하다` (cài đặt hệ thống phát hiện xâm nhập tại các switch mạng điều khiển để thường xuyên giám sát xem có lưu lượng bất thường tràn vào hay không), `침입탐지시스템이 비인가 장비의 스캔 행위를 포착하여 즉각 관제팀에 통보하다` (hệ thống phát hiện xâm nhập bắt trọn hành vi quét mạng của thiết bị trái phép và báo ngay cho đội giám sát).

**사회적 관계·주제별 register:** Trung tâm điều hành an ninh mạng (SOC), kỹ sư mạng điều khiển tự động hóa, báo cáo phân tích sự cố bảo mật thông tin và hướng dẫn vận hành thiết bị mạng phòng thủ.

**예문:** 변전소 내부망에 설치된 산업용 침입탐지시스템이 평소에 사용되지 않던 미등록 IP의 비정상적인 제어 명령 전송을 감지해 관리자에게 경보를 울렸다.

**Dịch:** Hệ thống phát hiện xâm nhập công nghiệp lắp đặt trong mạng nội bộ trạm biến áp đã phát hiện lệnh điều khiển bất thường truyền từ một địa chỉ IP chưa đăng ký vốn không bao giờ sử dụng và phát chuông cảnh báo tới người quản trị.

**어휘 연결:** `침입탐지시스템` (IDS) đóng vai trò người lính gác cảnh báo (`탐지 및 경보`), khác với `침입방지시스템` (IPS) tự động ngăn chặn và cắt đứt luồng kết nối; đồng thời IDS kết hợp chặt chẽ với giải pháp `이상징후탐지` để mở rộng khả năng phát hiện mối đe dọa chưa biết.

**영어 참고:** *Intrusion Detection System (IDS)* — hệ thống giám sát lưu lượng mạng hoặc hoạt động hệ thống để phát hiện các hành vi vi phạm chính sách bảo mật hoặc các cuộc tấn công mạng độc hại.

---

<!-- lexical_basis: advanced_native; register: power system engineering and crisis survivability; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 계통복원력

**품사:** 명사

**핵심 의미:** 사이버 공격, 자연재해, 대형 설비 고장 등 치명적인 충격이 발생했을 때 전력망(계통)이 급격한 붕괴나 광역 정전을 회피하고, 최소한의 필수 기능을 유지하며 신속하게 정상 운전 상태로 회복하는 종합적인 내구력과 복구 역량이다.

**베트남어 뜻:** khả năng phục hồi của hệ thống điện / độ dẻo dai của lưới điện (power grid resilience / system resilience); năng lực tổng hợp của lưới điện giúp chống chịu va đập, ngăn chặn sụp đổ dây chuyền, duy trì chức năng cung cấp điện cốt lõi và nhanh chóng khôi phục trạng thái vận hành bình thường sau sự cố thảm khốc hoặc tấn công mạng.

**뉘앙스와 사용법:** Trong kỹ thuật điện lực, cần phân biệt rạch ròi giữa độ tin cậy thông thường (`신뢰도` — reliability) và `계통복원력` (resilience). Độ tin cậy đo lường khả năng vận hành liên tục trước các sự cố nhỏ thường gặp (như sét đánh ngắt một đường dây), trong khi `계통복원력` là khả năng sống sót trước các biến cố xác suất thấp nhưng hậu quả hủy diệt (`저확률 고영향 사고` — Low-Probability, High-Consequence events) như tấn công mạng phối hợp diện rộng hay bão từ địa từ. Khi nhiều nút biến áp bị chiếm quyền, một lưới điện có `계통복원력` cao sẽ biết tự phân rã thành các cụm lưới điện độc lập (`단독 운전 마이크로그리드` — islanded microgrids) để duy trì điện cho hạ tầng trọng yếu (bệnh viện, trung tâm cứu nạn), sau đó tiến hành khởi động đen (`블랙스타트` — black start) từng bước đưa toàn bộ hệ thống trở lại bình thường.

**재사용 가능한 콜로케이션·청크:** `계통복원력 확보` — đảm bảo khả năng phục hồi của hệ thống điện, `계통복원력을 강화하다` — củng cố khả năng phục hồi của hệ thống điện, `계통복원력 지표` — chỉ số độ phục hồi của hệ thống điện, `사이버 공격 대비 계통복원력` — khả năng phục hồi của hệ thống điện trước các đòn tấn công mạng.

**자주 쓰는 문형과 성분:** `예기치 못한 외부 충격에도 송배전망이 붕괴하지 않도록 계통복원력을 제고하다` (nâng cao độ phục hồi của hệ thống điện để mạng lưới truyền tải và phân phối không bị sụp đổ trước những cú sốc bất ngờ từ bên ngoài), `분산 전원과 에너지저장장치를 연계하여 국가 계통복원력을 극대화하다` (kết nối nguồn điện phân tán và hệ thống lưu trữ năng lượng để tối đa hóa khả năng phục hồi hệ thống điện quốc gia).

**사회적 관계·주제별 register:** Báo cáo chính sách năng lượng của chính phủ, cơ quan điều độ hệ thống điện quốc gia (như KPX), các bài báo khoa học về kỹ thuật điện công suất lớn và diễn đàn an ninh năng lượng quốc tế.

**예문:** 동시다발적인 악성코드 공격으로 여러 변전소가 차단되더라도 마이크로그리드가 독립적으로 가동되어 계통복원력을 유지할 수 있도록 분산 제어 체계를 마련했다.

**Dịch:** Một cơ chế điều khiển phân tán đã được thiết lập để ngay cả khi nhiều trạm biến áp bị ngắt điện do các đòn tấn công mã độc đồng loạt, các lưới điện siêu nhỏ (microgrid) vẫn có thể vận hành độc lập để duy trì độ phục hồi của hệ thống điện.

**어휘 연결:** `계통복원력` (tính phục hồi hệ thống) bao gồm chuỗi liên hoàn: chống đỡ (`견딤` / absorb) → thích ứng (`적응` / adapt) → hồi phục (`신속 복구` / recover); vượt trội hơn so với khái niệm phòng thủ thụ động `설비 신뢰도` (độ tin cậy thiết bị thông thường).

**영어 참고:** *grid resilience* (hoặc *power system resilience*) — khả năng của hệ thống điện trong việc dự báo, chịu đựng sự cố thảm khốc, hạn chế tối đa phạm vi ảnh hưởng và nhanh chóng tái thiết lập nguồn cung cấp điện.

---

<!-- lexical_basis: advanced_native; register: enterprise identity and microsegmentation security; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 제로트러스트보안

**품사:** 명사

**핵심 의미:** 네트워크 내부나 외부를 막론하고 그 어떤 사용자, 기기, 세션도 사전에 신뢰하지 않으며, 모든 자원에 대한 접근 요청마다 명시적으로 신원을 검증하고 최소 권한만을 부여하는 현대적인 보안 패러다임이다.

**베트남어 뜻:** an ninh Không tin cậy / bảo mật Zero Trust (Zero Trust security); mô hình an ninh với nguyên lý cốt lõi "không bao giờ tin tưởng, luôn luôn xác thực" (Never Trust, Always Verify), kiểm tra danh tính và cấp quyền tối thiểu cho mọi yêu cầu truy cập tài nguyên bất kể từ trong hay ngoài mạng.

**뉘앙스와 사용법:** `제로트러스트보안` làm thay đổi triệt để tư duy bảo mật biên giới truyền thống ("lâu đài và hào nước" — castle-and-moat), vốn cho rằng bất kỳ ai bước chân qua được tường lửa vào bên trong mạng nội bộ đều là đối tượng đáng tin cậy. Trong các hệ thống điều khiển điện lực, nếu kẻ tấn công lọt vào mạng kín thông qua máy tính của nhà thầu bảo trì hay cổng VPN, chúng có thể tự do thăm dò và điều khiển các thiết bị khác nếu không có Zero Trust. Khi áp dụng `제로트러스트보안`, hệ thống sẽ chia nhỏ mạng thành từng phân đoạn vi mô (`마이크로세그멘테이션` — microsegmentation), đòi hỏi kỹ sư phải xác thực đa yếu tố (MFA) liên tục và kiểm tra tính toàn vẹn của thiết bị trước khi cho phép truyền gửi bất kỳ lệnh điều khiển nào.

**재사용 가능한 콜로케이션·청크:** `제로트러스트보안 모델` — mô hình an ninh Zero Trust, `제로트러스트보안 원칙을 적용하다` — áp dụng nguyên tắc an ninh Zero Trust, `제로트러스트보안 아키텍처 전환` — chuyển đổi kiến trúc an ninh Zero Trust, `제어망 제로트러스트보안` — an ninh Zero Trust cho mạng điều khiển.

**자주 쓰는 문형과 성분:** `폐쇄망 내부라도 무조건 신뢰하지 않는 제로트러스트보안 체계를 도입하다` (áp dụng hệ thống an ninh Zero Trust không mặc định tin tưởng ngay cả bên trong mạng đóng), `모든 제어 단말에 최소 권한만 부여하는 제로트러스트보안 정책을 수립하다` (thiết lập chính sách an ninh Zero Trust chỉ trao quyền tối thiểu cho mọi thiết bị đầu cuối điều khiển).

**사회적 관계·주제별 register:** Tiêu chuẩn kiến trúc an ninh quốc gia (như NIST SP 800-207), chiến lược bảo mật thông tin cấp tập đoàn, bài phát biểu của các chuyên gia công nghệ thông tin và tài liệu quy hoạch hạ tầng số.

**예문:** 발전소 제어 시스템은 내부자 권한을 탈취한 침해 사고를 원천 차단하기 위해 모든 통신 패킷과 관리자 접속을 매번 엄격히 검증하는 제로트러스트보안 구조로 개편되었다.

**Dịch:** Hệ thống điều khiển nhà máy điện đã được cải tổ sang cấu trúc an ninh Zero Trust nhằm xác thực nghiêm ngặt mọi gói tin truyền thông và truy cập của quản trị viên trong từng lần kết nối để triệt tiêu các vụ xâm nhập chiếm đoạt quyền người nội bộ.

**어휘 연결:** `제로트러스트보안` (Zero Trust) đối lập hoàn toàn với `경계기반보안` (perimeter security — mô hình bảo vệ theo đường biên), chuyển trọng tâm từ việc bảo vệ cổng ranh giới sang xác thực liên tục từng yêu cầu truy cập bên trong mạng.

**영어 참고:** *Zero Trust security* — mô hình bảo mật không mặc định tin cậy bất kỳ thực thể nào, yêu cầu xác thực liên tục, phân quyền tối thiểu và kiểm soát truy cập nghiêm ngặt ở mọi điểm chạm.

---

<!-- lexical_basis: advanced_native; register: inter-agency threat intelligence and collective defense; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 사이버위협정보공유

**품사:** 명사

**핵심 의미:** 사이버 공격의 지표(IoC), 공격 기법(TTP), 신규 악성코드 분석 데이터 및 침해 사례를 국가 기관, 전력 기업, 보안 전문 업체 간에 상호 신속하게 전달하고 연계하여 공동 대응하는 정보 협력 체계다.

**베트남어 뜻:** chia sẻ thông tin mối đe dọa không gian mạng (cyber threat intelligence sharing - CTI sharing); cơ chế trao đổi, phổ biến nhanh chóng các chỉ số xâm phạm (IoC), kỹ thuật tấn công (TTP) và dữ liệu mã độc giữa các cơ quan chính phủ, tập đoàn điện lực và chuyên gia an ninh để cùng phòng thủ tập thể.

**뉘앙스와 사용법:** Một doanh nghiệp điện lực đơn lẻ không thể tự mình nắm bắt kịp thời các loại mã độc chuyên dụng tấn công lưới điện (như Industroyer, BlackEnergy, Pipedream) do các tổ chức gián điệp mạng có trình độ tinh vi hàng đầu thế giới phát triển. `사이버위협정보공유` là hạt nhân của chiến lược "phòng thủ tập thể" (`집단 방어` — collective defense). Thông qua các trung tâm chia sẻ thông tin chuyên ngành (như ISAC — Information Sharing and Analysis Center) hoặc cổng thông tin bảo mật quốc gia, ngay khi một dấu hiệu xâm nhập bất thường xuất hiện ở một trạm biến áp, mẫu dữ liệu đe dọa sẽ được cảnh báo lập tức tới toàn bộ các nhà máy điện khác để cập nhật luật tường lửa và vá lỗi trước khi đòn tấn công lan rộng.

**재사용 가능한 콜로케이션·청크:** `사이버위협정보공유 체계 활성화` — kích hoạt hệ thống chia sẻ thông tin mối đe dọa không gian mạng, `실시간 사이버위협정보공유` — chia sẻ thông tin mối đe dọa không gian mạng theo thời gian thực, `민관 사이버위협정보공유 협력` — hợp tác công tư chia sẻ thông tin mối đe dọa không gian mạng, `사이버위협정보공유 플랫폼` — nền tảng chia sẻ thông tin mối đe dọa không gian mạng.

**자주 쓰는 문형과 성분:** `국가 정보기관 및 전력 그룹사와 사이버위협정보공유 네트워크를 구축하다` (xây dựng mạng lưới chia sẻ thông tin mối đe dọa không gian mạng với cơ quan tình báo quốc gia và các tổng công ty điện lực), `최신 침해 지표를 사이버위협정보공유를 통해 신속히 전파하여 피해 확산을 막다` (lan tỏa nhanh chóng các chỉ số xâm phạm mới nhất qua kênh chia sẻ thông tin mối đe dọa mạng để ngăn chặn thiệt hại lan rộng).

**사회적 관계·주제별 register:** Thỏa thuận hợp tác liên ngành công - tư (Public-Private Partnership), mạng lưới ứng cứu sự cố không gian mạng (CERT/CSIRT), báo cáo chiến lược phòng thủ an ninh mạng quốc gia.

**예문:** 특정 해외 해킹 조직이 전력망 특화 악성코드를 유포하고 있다는 첩보가 입수되자, 정부와 유관 기관은 긴급 사이버위협정보공유를 통해 방어 태세를 일제히 격상했다.

**Dịch:** Ngay khi nhận được tin tình báo rằng một tổ chức tin tặc nước ngoài cụ thể đang phát tán mã độc chuyên biệt nhắm vào lưới điện, chính phủ và các cơ quan hữu quan đã đồng loạt nâng mức sẵn sàng phòng thủ thông qua cơ chế chia sẻ thông tin mối đe dọa mạng khẩn cấp.

**어휘 연결:** `사이버위협정보공유` (CTI sharing) nâng tầm bảo vệ từ việc tự thân chống đỡ cục bộ (`개별 방어`) sang cơ chế hiệp đồng tác chiến và cảnh báo sớm toàn diện (`조기 경보 체계`), giúp cộng đồng an ninh chủ động đi trước kẻ tấn công một bước.

**영어 참고:** *cyber threat intelligence sharing* — việc chia sẻ thông tin tình báo về các mối đe dọa mạng (dấu hiệu xâm nhập, chiến thuật của tin tặc) giữa các tổ chức để nâng cao năng lực phòng thủ chung.

---

<!-- lexical_basis: advanced_native; register: substation field engineering and telemetry maintenance; source_lane: native_spoken; context: advanced-grid-cyber-resilience-and-ot-security/native_spoken -->
### 원격단말장치

**품사:** 명사

**핵심 의미:** 변전소나 송전탑 등 원격 현장에 설치되어 각종 계측 센서와 스위치 신호를 디지털 데이터로 변환해 중앙 스카다시스템으로 전송하고, 반대로 중앙의 제어 명령을 받아 차단기 등 현장 구동기를 작동시키는 마이크로프로세서 기반의 전용 현장 제어 장치다.

**베트남어 뜻:** thiết bị đầu cuối từ xa / bộ ghép nối từ xa (RTU - Remote Terminal Unit); thiết bị vi xử lý chuyên dụng lắp đặt tại các trạm biến áp hoặc tuyến cột truyền tải để thu thập dữ liệu đo lường, gửi về trung tâm SCADA và tiếp nhận lệnh điều khiển để kích hoạt máy cắt hoặc biến áp.

**뉘앙스와 사용법:** `원격단말장치` (RTU) được ví như "tai mắt và bàn tay" của trung tâm điều độ tại hiện trường công nghiệp. RTU được chế tạo chuyên dụng để hoạt động bền bỉ trong môi trường khắc nghiệt: chịu được bụi bẩn, biên độ nhiệt lớn và đặc biệt là hiện tượng nhiễu điện từ cực mạnh (`전자기 간섭` — EMI) trong các trạm biến áp siêu cao áp. Về mặt an ninh mạng, các dòng RTU cũ thường có bộ nhớ hạn chế và chip xử lý yếu, không hỗ trợ các giao thức mã hóa hiện đại (như TLS/SSL) hay cơ chế xác thực chứng chỉ số. Do đó, nếu kẻ tấn công thâm nhập được vào tuyến cáp truyền thông nối tới RTU, chúng có thể gửi các bản tin giả mạo điều khiển máy cắt bật nhả ngoài tầm kiểm soát của phòng điều hành.

**재사용 가능한 콜로케이션·청크:** `원격단말장치 펌웨어 업데이트` — cập nhật firmware cho thiết bị đầu cuối từ xa, `변전소 원격단말장치` — thiết bị đầu cuối từ xa tại trạm biến áp, `원격단말장치의 통신 장애` — sự cố truyền thông của thiết bị đầu cuối từ xa, `보안 기능이 내장된 원격단말장치` — thiết bị đầu cuối từ xa tích hợp sẵn tính năng bảo mật.

**자주 쓰는 문형과 성분:** `현장 변전소에 설치된 원격단말장치가 전력 데이터를 수집하여 관제 센터로 전송하다` (thiết bị đầu cuối từ xa lắp đặt tại trạm biến áp hiện trường thu thập dữ liệu điện lực và truyền về trung tâm điều độ), `원격단말장치에 인가되지 않은 제어 명령이 도달하지 못하도록 단말 보안을 강화하다` (củng cố an ninh đầu cuối để ngăn chặn các lệnh điều khiển trái phép tiếp cận thiết bị đầu cuối từ xa).

**사회적 관계·주제별 register:** Khẩu ngữ kỹ thuật và trao đổi hiện trường giữa các kỹ sư điện lực, biên bản bảo trì trạm biến áp, tài liệu kiểm thử thiết bị đo đếm và tự động hóa truyền tải điện.

**예문:** 해커가 통신 취약점을 악용해 원격단말장치의 펌웨어를 변조할 경우, 중앙 관제 센터의 지시 없이도 현장 차단기가 임의로 개방되어 광역 정전이 발생할 수 있다.

**Dịch:** Nếu tin tặc lợi dụng lỗ hổng truyền thông để làm sai lệch firmware của thiết bị đầu cuối từ xa, các máy cắt tại hiện trường có thể tự ý bị mở ra mà không cần chỉ thị từ trung tâm điều độ, gây ra sự cố mất điện trên diện rộng.

**어휘 연결:** `원격단말장치` (RTU) tối ưu cho việc truyền thông từ xa qua mạng viễn thông diện rộng (WAN), thường được phân biệt với `PLC` (Programmable Logic Controller) vốn chuyên xử lý các chu trình logic tốc độ cao trong phạm vi nhà máy hẹp, và `IED` (Intelligent Electronic Device) chuyên trách bảo vệ rơ-le trong trạm biến áp số.

**영어 참고:** *Remote Terminal Unit (RTU)* — thiết bị vi xử lý độc lập tại hiện trường thu thập dữ liệu từ cảm biến và thực thi lệnh điều khiển từ hệ thống SCADA.

---

<!-- lexical_basis: advanced_native; register: digital-physical integration and systems engineering; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 사이버물리시스템

**품사:** 명사

**핵심 의미:** 연산, 통신, 제어가 이루어지는 가상 공간의 사이버 시스템과 현실 세계의 물리적 기계·전력 계통 프로세스가 센서와 액추에이터를 통해 실시간으로 긴밀하게 융합되고 상호작용하는 통합 시스템이다.

**베트남어 뜻:** hệ thống không gian mạng - vật lý (CPS - Cyber-Physical System); hệ thống tích hợp sâu sắc giữa năng lực tính toán, truyền thông và thuật toán điều khiển trên không gian mạng với các tiến trình cơ điện trong thế giới vật lý thực tế thông qua mạng lưới cảm biến và cơ cấu chấp hành.

**뉘앙스와 사용법:** Khái niệm `사이버물리시스템` (CPS) làm thay đổi bản chất của ngành kỹ thuật và an toàn thông tin thế kỷ 21. Trong các hệ thống máy tính truyền thống, lỗi mạng hay virus chỉ làm hỏng tập tin, rò rỉ dữ liệu hoặc đứng màn hình (hậu quả ảo). Nhưng trong một CPS như lưới điện thông minh (`스마트그리드`), một dòng mã độc gửi sai thời điểm có thể làm lệch pha máy phát, nổ máy biến áp hàng chục tấn hoặc gây cháy nổ trạm điện (hậu quả vật lý thực tế). Do đó, việc thiết kế bảo mật cho CPS không chỉ áp dụng các thuật toán mã hóa máy tính thuần túy mà còn phải tính toán đến các quy luật vật lý, động lực học dòng điện, quán tính quay và giới hạn nhiệt của dây dẫn điện.

**재사용 가능한 콜로케이션·청크:** `스마트그리드 사이버물리시스템` — hệ thống không gian mạng - vật lý lưới điện thông minh, `사이버물리시스템 보안 모델` — mô hình an ninh hệ thống không gian mạng - vật lý, `사이버물리시스템 연계성` — tính liên kết trong hệ thống không gian mạng - vật lý, `사이버물리시스템 시뮬레이션` — mô phỏng hệ thống không gian mạng - vật lý.

**자주 쓰는 문형과 성분:** `전력망을 사이버물리시스템 관점에서 분석하여 물리적 파급 효과를 예측하다` (phân tích lưới điện dưới góc nhìn hệ thống không gian mạng - vật lý để dự báo các tác động lan truyền vật lý), `사이버 공간의 침입이 사이버물리시스템의 기계적 오작동으로 전이되는 것을 방지하다` (ngăn chặn sự thâm nhập từ không gian mạng chuyển hóa thành các trục trặc cơ học của hệ thống không gian mạng - vật lý).

**사회적 관계·주제별 register:** Nghiên cứu khoa học kỹ thuật đa ngành, hội thảo cấp cao về cách mạng công nghiệp 4.0, báo cáo của các viện nghiên cứu năng lượng và tài liệu thiết kế hệ thống kỹ thuật phức hợp.

**예문:** 전력망은 사이버 공간의 알고리즘과 현실 세계의 송배전 설비가 결합된 대표적인 사이버물리시스템이므로, 소프트웨어 결함이 곧바로 물리적 폭발이나 화재로 이어질 수 있다.

**Dịch:** Do lưới điện là một hệ thống không gian mạng - vật lý điển hình kết hợp giữa các thuật toán trong không gian mạng và các thiết bị truyền tải điện trong thế giới thực, một lỗi phần mềm có thể dẫn ngay tới các vụ nổ cơ học hoặc hỏa hoạn thực tế.

**어휘 연결:** `사이버물리시스템` (CPS) kết nối hai nửa: tầng không gian ảo (`사이버 계층` — cyber layer) và tầng vật lý hữu hình (`물리 계층` — physical layer). Nó khác biệt với các hệ thống CNTT thuần túy (`순수 정보시스템` — pure IT) vốn không tương tác với các định luật cơ học hay điện từ trong đời thực.

**영어 참고:** *Cyber-Physical System (CPS)* — hệ thống mạng - vật lý; sự cộng sinh và tương tác mật thiết giữa thuật toán máy tính số và các thực thể máy móc vật lý vận hành trong thế giới thực.

---

<!-- lexical_basis: advanced_native; register: digital substation engineering and protocol security; source_lane: news_formal; context: advanced-grid-cyber-resilience-and-ot-security/news_formal -->
### 변전소자동화보안

**품사:** 명사

**핵심 의미:** 전압을 변환하고 전력 조류를 제어하는 변전소 내부의 지능형 전자 장치(IED), 통신 버스, 디지털 계측 제어망(IEC 61850 표준 등)을 사이버 위협과 무단 조작으로부터 보호하는 특화된 보안 체계다.

**베트남어 뜻:** an ninh tự động hóa trạm biến áp (substation automation security); hệ thống và biện pháp bảo vệ chuyên dụng bảo đảm an toàn cho các thiết bị điện tử thông minh (IED), đường truyền bus mạng và hệ thống giám sát điều khiển kỹ thuật số (như chuẩn IEC 61850) bên trong trạm biến áp.

**뉘앙스와 사용법:** Các trạm biến áp hiện đại đang chuyển dịch từ trạm cơ điện truyền thống (sử dụng hàng nghìn sợi dây cáp đồng tín hiệu tương tự) sang trạm biến áp kỹ thuật số hoàn toàn theo tiêu chuẩn quốc tế IEC 61850. Trong đó, toàn bộ dữ liệu đo lường và tín hiệu bảo vệ khẩn cấp được đóng gói thành các bản tin kỹ thuật số như GOOSE và SV (Sampled Values) truyền qua cáp quang với tốc độ đòi hỏi dưới 4 mili-giây. `변전소자동화보안` đòi hỏi phải áp dụng các tiêu chuẩn an ninh nghiêm ngặt (như IEC 62351) để xác thực chữ ký điện tử và mã hóa mà không được gây ra hiện tượng trễ gói tin; bởi vì nếu thông điệp ngắt mạch bị trễ dù chỉ vài mili-giây, máy biến áp có thể bị nổ tung trước khi rơ-le kịp tác động.

**재사용 가능한 콜로케이션·청크:** `디지털 변전소자동화보안` — an ninh tự động hóa trạm biến áp kỹ thuật số, `변전소자동화보안 규격` — quy cách an ninh tự động hóa trạm biến áp, `변전소자동화보안 체계 구축` — xây dựng hệ thống an ninh tự động hóa trạm biến áp, `변전소자동화보안 통신 프로토콜` — giao thức truyền thông an ninh tự động hóa trạm biến áp.

**자주 쓰는 문형과 성분:** `IEC 61850 기반의 최신 디지털 설비에 변전소자동화보안을 적용하다` (áp dụng an ninh tự động hóa trạm biến áp cho các thiết bị kỹ thuật số đời mới trên nền tảng IEC 61850), `변전소자동화보안 기술을 통해 지능형 전자 장치(IED)의 위조 제어 패킷을 차단하다` (chặn đứng các gói tin điều khiển giả mạo nhắm vào rơ-le thông minh IED thông qua công nghệ an ninh tự động hóa trạm biến áp).

**사회적 관계·주제별 register:** Tiêu chuẩn kỹ thuật điện lực quốc tế (IEC 62351, IEEE C37.240), quy trình thiết kế rơ-le bảo vệ của tập đoàn truyền tải điện và hội đồng thẩm định an toàn thiết bị trạm biến áp.

**예문:** 디지털 변전소로의 전환이 가속화되면서 IED 간에 송수신되는 초고속 보호 통신 패킷을 보호하기 위한 변전소자동화보안 기술이 필수 요건으로 자리 잡았다.

**Dịch:** Cùng với việc tăng tốc chuyển đổi sang trạm biến áp kỹ thuật số, công nghệ an ninh tự động hóa trạm biến áp nhằm bảo vệ các gói tin truyền thông bảo vệ siêu tốc trao đổi giữa các thiết bị IED đã trở thành một yêu cầu thiết yếu.

**어휘 연결:** `변전소자동화보안` là một nhánh bảo mật chuyên sâu của `운영기술보안` (OT 보안), tập trung bảo vệ môi trường truyền thông kỹ thuật số tốc độ cao giữa các `IED` (thiết bị điện tử thông minh) và `스카다시스템` (SCADA) trong ranh giới trạm biến áp.

**영어 참고:** *substation automation security* — an ninh tự động hóa trạm biến áp; bảo vệ tính toàn vẹn và bí mật của dữ liệu đo lường và tín hiệu bảo vệ chuyển tiếp trong trạm biến áp số trước các cuộc tấn công mạng.

---

<!-- lexical_basis: advanced_native; register: security operations and patch deployment management; source_lane: native_spoken; context: advanced-grid-cyber-resilience-and-ot-security/native_spoken -->
### 취약점패치관리

**품사:** 명사

**핵심 의미:** 운영체제, 제어 소프트웨어, 단말 펌웨어 등에서 새롭게 발견된 보안 결함(취약점)을 체계적으로 식별, 평가, 테스트한 후 시스템 안정성에 영향을 주지 않고 안전하게 수정 패치를 배포·적용하는 관리 절차다.

**베트남어 뜻:** quản lý bản vá lỗ hổng bảo mật (vulnerability patch management); quy trình kiểm soát, đánh giá mức độ rủi ro, thử nghiệm và cập nhật an toàn các bản vá lỗi phần mềm/firmware nhằm khắc phục các điểm yếu bảo mật mà không gây gián đoạn hệ thống.

**뉘앙스와 사용법:** Trong môi trường CNTT văn phòng, việc vá lỗi có thể diễn ra tự động hàng tuần (như việc cài bản vá Windows rồi khởi động lại). Nhưng trong mạng điều khiển điện lực, `취약점패치관리` là một trong những nhiệm vụ đau đầu và phức tạp nhất của kỹ sư bảo mật. Không ai được phép tùy tiện khởi động lại một máy chủ SCADA đang kiểm soát tải điện quốc gia để cập nhật bản vá. Bất kỳ bản vá nào từ nhà cung cấp thiết bị cũng phải được chuyển vào bệ thử nghiệm mô phỏng (`테스트베드` — testbed) để chạy thử hàng tuần nhằm đảm bảo không xung đột với các phần mềm đo lường thời gian thực. Sau đó, kỹ sư phải lên lịch chờ đúng đợt bảo dưỡng cắt điện định kỳ (`정기 보수 기간` — scheduled maintenance outage) mới được đưa bản vá vào hệ thống thực tế.

**재사용 가능한 콜로케이션·청크:** `체계적인 취약점패치관리` — quản lý bản vá lỗ hổng có hệ thống, `취약점패치관리 절차 준수` — tuân thủ quy trình quản lý bản vá lỗ hổng, `제어 시스템 취약점패치관리` — quản lý bản vá lỗ hổng cho hệ thống điều khiển, `취약점패치관리 주기 단축` — rút ngắn chu kỳ quản lý bản vá lỗ hổng.

**자주 쓰는 문형과 성분:** `테스트베드 검증을 거쳐 산업 설비의 취약점패치관리를 신중히 수행하다` (thực hiện cẩn trọng việc quản lý bản vá lỗ hổng của thiết bị công nghiệp sau khi đã kiểm chứng tại bệ thử nghiệm testbed), `긴급 보안 결함이 발견되었을 때 취약점패치관리를 통해 서비스 중단 없이 패치를 적용하다` (áp dụng bản vá mà không làm gián đoạn dịch vụ thông qua quy trình quản lý bản vá lỗ hổng khi phát hiện lỗ hổng bảo mật khẩn cấp).

**사회적 관계·주제별 register:** Khẩu ngữ công sở và điều hành kỹ thuật giữa các chuyên viên bảo mật SecOps, quản trị viên hệ thống lưới điện, báo cáo kiểm toán tuân thủ an toàn thông tin định kỳ.

**예문:** 전력 제어 설비는 무중단 가동이 필수적이므로 일반 서버와 달리 모의 검증을 거친 후 정기 정지 기간에 맞춰 신중하게 취약점패치관리를 진행해야 한다.

**Dịch:** Do thiết bị điều khiển điện lực bắt buộc phải hoạt động liên tục không ngừng nghỉ, khác với máy chủ thông thường, công tác quản lý bản vá lỗ hổng phải được tiến hành cẩn trọng sau khi kiểm chứng mô phỏng và trùng khớp với kỳ bảo dưỡng ngừng máy định kỳ.

**어휘 연결:** `취약점패치관리` nhằm bọc kín các điểm yếu kỹ thuật (`보안 취약점` — vulnerability) để giảm thiểu diện tích tấn công (`공격 표면` — attack surface); bổ trợ cho phương pháp `이상징후탐지` nhằm phát hiện các đòn tấn công nhắm vào các lỗ hổng chưa được vá (zero-day).

**영어 참고:** *vulnerability patch management* — quy trình rà soát, đánh giá rủi ro, thử nghiệm tính tương thích và cài đặt các bản sửa lỗi bảo mật cho phần mềm và firmware thiết bị một cách có kiểm soát.

---

<!-- lexical_basis: advanced_native; register: control room monitoring and AI-driven telemetry analysis; source_lane: native_spoken; context: advanced-grid-cyber-resilience-and-ot-security/native_spoken -->
### 이상징후탐지

**품사:** 명사

**핵심 의미:** 평상시의 정상적인 제어 명령 패턴, 통신 트래픽 양, 센서 측정값의 물리적 상관관계(베이스라인)를 학습한 뒤, 이를 벗어나는 비정상적인 데이터 흐름이나 잠재적 침해 징후를 조기에 포착하는 분석 기법이다.

**베트남어 뜻:** phát hiện dấu hiệu bất thường / phát hiện dị thường (anomaly detection); kỹ thuật phân tích theo dõi hành vi và dữ liệu, đối chiếu với mô hình chuẩn thông thường (baseline) để sớm nhận diện các sai lệch, biến động lạ hoặc dấu hiệu tấn công tiềm ẩn.

**뉘앙스와 사용법:** Kẻ tấn công tinh vi nhắm vào hạ tầng năng lượng thường sử dụng tài khoản bị đánh cắp hoặc mã độc chưa từng biết đến (`제로데이` — zero-day) để gửi các lệnh điều khiển trông hoàn toàn hợp lệ về mặt cú pháp kỹ thuật. Khi đó, các công cụ quét mẫu chữ ký đã biết (signature-based) trở nên vô tác dụng. Thay vào đó, kỹ thuật `이상징후탐지` dựa trên trí tuệ nhân tạo hoặc mô hình vật lý (`물리 법칙 기반 이상징후탐지` — physics-based anomaly detection) sẽ phân tích dữ liệu điện lực để phát hiện sự phi lý: ví dụ lệnh mở máy cắt đột ngột xuất hiện lúc nửa đêm khi phụ tải không đổi, hoặc mối tương quan giữa dòng điện và điện áp không tuân theo định luật Ohm. Việc phát hiện sớm các dấu hiệu bất thường này giúp chặn đứng đòn tấn công từ giai đoạn do thám hoặc thử nghiệm ban đầu.

**재사용 가능한 콜로케이션·청크:** `인공지능 기반 이상징후탐지` — phát hiện dấu hiệu bất thường dựa trên trí tuệ nhân tạo, `이상징후탐지 알고리즘` — thuật toán phát hiện dấu hiệu bất thường, `물리 법칙 기반 이상징후탐지` — phát hiện dị thường dựa trên quy luật vật lý, `초기 이상징후탐지` — phát hiện dấu hiệu bất thường từ giai đoạn đầu.

**자주 쓰는 문형과 성분:** `평상시의 트래픽 기준선과 비교하여 미세한 이상징후탐지를 수행하다` (thực hiện phát hiện dấu hiệu bất thường tinh vi bằng cách so sánh với đường chuẩn lưu lượng hàng ngày), `머신러닝 기술을 접목해 제어 프로토콜의 이상징후탐지 정확도를 대폭 끌어올리다` (kết hợp công nghệ máy học để nâng cao đáng kể độ chính xác của việc phát hiện dấu hiệu bất thường trong giao thức điều khiển).

**사회적 관계·주제별 register:** Trao đổi hàng ngày trong phòng trực giám sát an ninh (SOC/NOC), họp giao ban giữa kỹ sư dữ liệu lớn (AI/ML) và kỹ sư vận hành điện lực, báo cáo đánh giá sự cố kỹ thuật.

**예문:** AI 기반의 제어망 모니터링 시스템은 기계학습 모델을 활용해 전력 조류 데이터의 미세한 왜곡을 실시간으로 포착함으로써 초기 이상징후탐지에 성공했다.

**Dịch:** Hệ thống giám sát mạng điều khiển dựa trên AI đã thành công trong việc phát hiện dấu hiệu bất thường ở giai đoạn đầu nhờ ứng dụng mô hình máy học để bắt trọn những sai lệch vi mô của dữ liệu dòng công suất điện theo thời gian thực.

**어휘 연결:** `이상징후탐지` (anomaly detection) đối chiếu hành vi thực tế với mô hình hành vi chuẩn (`정상 베이스라인`), vượt trội hơn phương pháp `시그니처 기반 탐지` (signature-based detection — phát hiện dựa trên chữ ký mẫu) vốn chỉ nhận diện được những mã độc đã lưu trong cơ sở dữ liệu.

**영어 참고:** *anomaly detection* — kỹ thuật phát hiện dị thường; việc nhận biết các mẫu dữ liệu hoặc hành vi khác biệt đáng kể so với trạng thái vận hành bình thường đã được mô hình hóa trước đó.

---

<!-- lexical_basis: advanced_native; register: disaster recovery and emergency manual operations; source_lane: native_spoken; context: advanced-grid-cyber-resilience-and-ot-security/native_spoken -->
### 비상운영절차

**품사:** 명사

**핵심 의미:** 사이버 공격에 의해 제어 시스템이 마비되거나 원격 통신망이 전면 두절되는 등 극한의 위기 상황이 발생했을 때, 계통 붕괴를 막고 핵심 전력 공급을 유지하기 위해 현장 요원들이 즉각 실행하도록 사전 규정된 수동 전환 및 긴급 대응 수칙이다.

**베트남어 뜻:** quy trình vận hành khẩn cấp (emergency operating procedure / emergency response procedure); bộ quy tắc và phương án thao tác định trước để nhân viên kỹ thuật lập tức chuyển sang vận hành thủ công tại chỗ và kích hoạt biện pháp cứu vãn khi hệ thống điều khiển tự động bị tê liệt hoặc tấn công mạng.

**뉘앙스와 사용법:** Khi các hàng rào an ninh mạng kỹ thuật số bị xuyên thủng và màn hình SCADA bị hacker khống chế hoặc xóa sổ dữ liệu, bức tường thành bảo vệ cuối cùng để ngăn chặn thảm họa mất điện toàn quốc chính là con người và `비상운영절차`. Quy trình này quy định rõ: cắt đứt hoàn toàn liên lạc mạng ra bên ngoài (`물리적 망 절단`), điều động khẩn cấp các kỹ sư trực tiếp đến từng trạm biến áp hiện trường để gạt cần thao tác cơ học bằng tay (`수동 조작` — manual override), sử dụng mạng bộ đàm vô tuyến riêng biệt để phối hợp điều độ, và khởi động các máy phát diesel dự phòng. Việc thường xuyên huấn luyện thuần thục `비상운영절차` đảm bảo hệ thống có thể tồn tại kể cả trong kịch bản toàn bộ hạ tầng kỹ thuật số bị sụp đổ.

**재사용 가능한 콜로케이션·청크:** `비상운영절차 가동` — kích hoạt quy trình vận hành khẩn cấp, `비상운영절차를 수립하다` — thiết lập quy trình vận hành khẩn cấp, `비상운영절차 숙달 훈련` — huấn luyện thuần thục quy trình vận hành khẩn cấp, `수동 조작 기반 비상운영절차` — quy trình vận hành khẩn cấp dựa trên thao tác thủ công.

**자주 쓰는 문형과 성분:** `원격 제어가 불가능해지자 현장 요원들이 비상운영절차에 따라 즉각 수동 운전으로 전환하다` (khi việc điều khiển từ xa trở nên bất khả thi, nhân viên hiện trường lập tức chuyển sang vận hành thủ công theo quy trình vận hành khẩn cấp), `최악의 블랙아웃 시나리오를 가정한 비상운영절차를 주기적으로 점검하다` (kiểm tra định kỳ quy trình vận hành khẩn cấp giả định kịch bản mất điện toàn diện tồi tệ nhất).

**사회적 관계·주제별 register:** Sổ tay quy trình thao tác chuẩn (SOP) của kỹ sư điện lực tại hiện trường, kịch bản diễn tập ứng phó khủng hoảng quốc gia và chỉ đạo khẩn cấp từ trung tâm chỉ huy thảm họa.

**예문:** 중앙 전산망이 사이버 공격으로 완전 먹통이 되었을 때 현장 기술진은 사전에 훈련된 비상운영절차를 발동해 차단기를 수동으로 제어함으로써 광역 정전을 막아냈다.

**Dịch:** Khi mạng máy tính trung tâm bị tê liệt hoàn toàn do đòn tấn công mạng, đội ngũ kỹ thuật tại hiện trường đã kích hoạt quy trình vận hành khẩn cấp được huấn luyện từ trước để điều khiển thủ công các máy cắt, qua đó chặn đứng được sự cố mất điện diện rộng.

**어휘 연결:** `비상운영절차` (quy trình vận hành khẩn cấp) là tuyến phòng thủ dự phòng cuối cùng khi `정상운영절차` (quy trình vận hành thông thường) bị vô hiệu hóa; điểm mấu chốt của nó là chuyển đổi từ điều khiển tự động từ xa sang thao tác thủ công tại chỗ (`수동 운전 모드`).

**영어 참고:** *emergency operating procedure (EOP)* — quy trình vận hành khẩn cấp; tập hợp các hướng dẫn hành động chuẩn mực được kích hoạt trong các tình huống khủng hoảng để bảo vệ thiết bị và duy trì chức năng trọng yếu.

---

## 읽기: 전력망을 멈추려는 사이버 위협과 무중단 방어

<!-- passage_word_count: 101 Korean eojeol; target_set: 운영기술보안, 전력망사이버공격, 스카다시스템, 산업제어시스템, 망분리아키텍처, 침입탐지시스템, 계통복원력, 제로트러스트보안, 사이버위협정보공유, 원격단말장치, 사이버물리시스템, 변전소자동화보안, 취약점패치관리, 이상징후탐지, 비상운영절차 -->

국가 기간망을 마비시키려는 전력망사이버공격 위협이 고조되면서 전력 당국은 물리 계층과 디지털 계층이 융합된 사이버물리시스템 전반의 방어 태세를 강화하고 있다. 중앙 관제 센터의 스카다시스템과 현장 산업제어시스템 사이에는 강력한 망분리아키텍처를 구축하고, 내부망이라도 무조건 신뢰하지 않는 제로트러스트보안 원칙을 적용했다. 또한 주요 변전소의 원격단말장치와 통신 선로에는 특화된 변전소자동화보안 기술과 침입탐지시스템을 배치해 악의적인 패킷 침투를 상시 감시하고 있다. 보안관제팀은 유관 기관과의 실시간 사이버위협정보공유를 통해 최신 위협 지표를 확보하고, 정기적인 취약점패치관리와 머신러닝 기반의 이상징후탐지를 병행함으로써 선제적인 운영기술보안을 구현했다. 만에 하나 원격 통신이 두절되더라도 현장 기술진이 즉각 비상운영절차를 가동해 수동 제어로 전환할 수 있는 대비책을 확립함으로써, 어떠한 극한 침해 상황에서도 전력 공급을 지속할 수 있는 탁월한 계통복원력을 확보했다.

**베트남어 번역:**

Trước nguy cơ leo thang của các cuộc tấn công mạng vào lưới điện nhằm làm tê liệt mạng lưới huyết mạch quốc gia, các cơ quan điện lực đang tăng cường tư thế phòng thủ cho toàn bộ hệ thống không gian mạng - vật lý, nơi tầng vật lý và tầng kỹ thuật số dung hợp chặt chẽ với nhau. Giữa hệ thống SCADA tại trung tâm điều độ và hệ thống điều khiển công nghiệp ở hiện trường được thiết lập kiến trúc cách ly mạng kiên cố, đồng thời áp dụng nguyên tắc an ninh Zero Trust không mặc định tin cậy ngay cả đối với mạng nội bộ. Bên cạnh đó, tại các thiết bị đầu cuối từ xa và đường truyền viễn thông của các trạm biến áp trọng yếu, các kỹ sư đã bố trí công nghệ an ninh tự động hóa trạm biến áp chuyên dụng cùng hệ thống phát hiện xâm nhập để thường xuyên giám sát sự thâm nhập của các gói tin ác ý. Đội ngũ giám sát an ninh mạng đã hiện thực hóa an ninh công nghệ vận hành mang tính chủ động đón đầu thông qua việc kết hợp chia sẻ thông tin mối đe dọa mạng theo thời gian thực với các cơ quan hữu quan để nắm giữ các chỉ số nguy cơ mới nhất, song hành với quy trình quản lý bản vá lỗ hổng định kỳ và phát hiện dấu hiệu bất thường dựa trên máy học. Mặt khác, bằng việc xác lập sẵn các phương án dự phòng cho phép đội ngũ kỹ thuật hiện trường lập tức kích hoạt quy trình vận hành khẩn cấp để chuyển sang chế độ điều khiển thủ công ngay cả khi liên lạc từ xa bị cắt đứt, hệ thống đã bảo đảm khả năng phục hồi của hệ thống điện vượt trội, giúp duy trì cung cấp điện liên tục dưới bất kỳ tình huống xâm phạm cực đoan nào.
