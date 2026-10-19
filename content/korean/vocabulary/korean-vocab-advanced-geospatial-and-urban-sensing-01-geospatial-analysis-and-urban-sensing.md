<!-- source_policy: original explanations, examples, and passage; geospatial concepts cross-checked conceptually, not copied -->

# 지리공간 분석과 도시 감지의 핵심어

도시 데이터는 숫자 목록이 아니라 위치와 축척을 가진 관측이다. 이 lesson은 주소를 좌표로 바꾸고, 여러 센서 자료를 정렬하고, 공간 패턴을 모델링한 뒤 정책 해석의 한계를 설명하는 흐름을 다룬다.

<!-- lexical_basis: advanced_native; register: geospatial data policy and public reporting; source_lane: news_formal; context: advanced-geospatial-and-urban-sensing/news_formal -->
### 지오코딩

**품사:** 명사

**핵심 의미:** 주소나 장소 설명을 위도·경도 같은 공간 좌표로 변환하는 과정이다.

**베트남어 뜻:** địa mã hóa; quá trình chuyển địa chỉ hoặc mô tả địa điểm thành tọa độ không gian.

**뉘앙스와 사용법:** `지오코딩`은 주소를 지도에 찍는 단순 작업처럼 보이지만, 도로명 표기·건물 출입구·개인정보 비식별화에 따라 결과가 달라진다. 좌표가 생겼다고 실제 위치가 완벽히 확정된 것은 아니다.

**재사용 가능한 콜로케이션·청크:** `주소를 지오코딩하다`, `지오코딩 정확도`, `지오코딩 오류를 보정하다` — chuyển địa chỉ thành tọa độ, độ chính xác và hiệu chỉnh lỗi địa mã hóa.

**자주 쓰는 문형과 성분:** `A를 지오코딩해 B로 변환하다`에서 A는 주소 목록, B는 좌표 데이터다. `지오코딩 결과가 도로 구간에 걸리다`처럼 위치 오차의 원인을 말한다.

**사회적 관계·주제별 register:** 공공데이터 보고서와 GIS 실무의 전문어다. 현장 회의에서는 `주소를 좌표로 바꾸는 작업`이라고 풀어 말하면 비전문가도 이해하기 쉽다.

**예문:** 담당자는 민원 주소를 지오코딩하기 전에 개인정보가 외부 지도 서비스로 전송되는지 확인했다.

**Dịch:** Người phụ trách kiểm tra xem thông tin cá nhân có được gửi tới dịch vụ bản đồ bên ngoài hay không trước khi địa mã hóa địa chỉ khiếu nại.

**어휘 연결:** `지오코딩`은 텍스트를 좌표로 바꾸는 과정이고 `위치정보`는 그 결과나 위치 자체를 가리킨다. 주소가 모호하면 지오코딩 정확도가 낮아지므로 좌표를 곧 사실 확정으로 읽지 않는다.

**영어 참고:** *geocoding* — chuyển địa chỉ thành tọa độ; khác với *geolocation* là xác định vị trí rộng hơn.

---

<!-- lexical_basis: advanced_native; register: spatial statistics and policy analysis; source_lane: news_formal; context: advanced-geospatial-and-urban-sensing/news_formal -->
### 공간자기상관

**품사:** 명사

**핵심 의미:** 서로 가까운 위치의 값이 서로 비슷하거나 다른 방향으로 함께 나타나는 공간적 의존성이다.

**베트남어 뜻:** tự tương quan không gian; sự phụ thuộc trong đó các giá trị ở vị trí gần nhau có xu hướng giống hoặc khác nhau theo một mẫu.

**뉘앙스와 사용법:** `공간자기상관`은 데이터가 독립적으로 흩어져 있다는 가정을 점검하는 말이다. 비슷한 값이 모인다고 원인이 증명되는 것은 아니며, 거리 기준과 공간 단위에 따라 지표가 달라진다.

**재사용 가능한 콜로케이션·청크:** `공간자기상관을 검정하다`, `양의 공간자기상관`, `공간자기상관을 통제하다` — kiểm định, tương quan không gian dương và kiểm soát sự phụ thuộc không gian.

**자주 쓰는 문형과 성분:** `A에서 공간자기상관이 나타나다`에서 A는 주거비·민원 같은 변수다. `공간자기상관을 고려해 모형을 수정하다`처럼 통계적 전제와 함께 쓴다.

**사회적 관계·주제별 register:** 공간통계와 정책평가의 공식어다. 일반 회의에서는 `가까운 지역끼리 비슷한 값이 몰리는 현상`이라고 설명하면 자연스럽다.

**예문:** 연구진은 범죄 신고가 특정 지역에 몰린 결과를 해석하기 전에 공간자기상관을 먼저 검정했다.

**Dịch:** Nhóm nghiên cứu kiểm định tự tương quan không gian trước khi diễn giải kết quả khiếu nại tội phạm tập trung ở một khu vực.

**어휘 연결:** `공간자기상관`은 위치 간 의존성이고 `상관관계`는 위치를 특정하지 않은 통계적 함께 움직임이다. 양의 자기상관은 군집을 시사하지만 인과관계나 정책 효과를 보장하지 않는다.

**영어 참고:** *spatial autocorrelation* — sự phụ thuộc/tương quan giữa các vị trí trong không gian; không tự nó chứng minh quan hệ nhân quả.

---

<!-- lexical_basis: advanced_native; register: spatial modeling and research discussion; source_lane: native_spoken; context: advanced-geospatial-and-urban-sensing/native_spoken -->
### 공간이질성

**품사:** 명사

**핵심 의미:** 같은 현상이나 변수의 관계가 지역에 따라 서로 다르게 나타나는 성질이다.

**베트남어 뜻:** tính không đồng nhất về không gian; tính chất trong đó hiện tượng hoặc quan hệ biến số thay đổi tùy khu vực.

**뉘앙스와 사용법:** `공간이질성`은 도시 전체의 평균이 각 동네를 대표하지 못할 수 있음을 드러낸다. 지역별 제도·환경·인구 구성이 다르므로 하나의 계수를 모든 곳에 적용할 때 주의해야 한다.

**재사용 가능한 콜로케이션·청크:** `공간이질성을 반영하다`, `지역별 공간이질성`, `공간이질성이 크다` — phản ánh tính không đồng nhất, tính khác biệt theo vùng và mức độ không đồng nhất lớn.

**자주 쓰는 문형과 성분:** `A의 효과가 공간이질성을 보이다`에서 A는 정책이나 기후 요인이다. `공간이질성을 고려해 권역을 나누다`처럼 분석 설계와 함께 쓴다.

**사회적 관계·주제별 register:** 연구 보고서와 도시계획 회의의 분석어다. 현장 담당자에게는 `지역마다 작동 방식이 다르다`고 풀어야 과도한 전문어가 되지 않는다.

**예문:** 같은 폭염 대책도 고층 주거지와 저층 주거지에서 효과가 달라 공간이질성을 반영한 설계가 필요했다.

**Dịch:** Cùng một biện pháp chống nóng cực đoan nhưng hiệu quả khác nhau giữa khu nhà cao tầng và khu nhà thấp tầng, nên cần thiết kế có xét tính không đồng nhất không gian.

**어휘 연결:** `공간이질성`은 지역별 관계의 차이, `공간자기상관`은 가까운 값끼리의 의존성이다. 전자는 효과가 다름을, 후자는 값이 모임을 설명하므로 같은 뜻으로 바꾸지 않는다.

**영어 참고:** *spatial heterogeneity* — sự khác biệt của quan hệ hoặc hiện tượng giữa các khu vực.

---

<!-- lexical_basis: advanced_native; register: urban economics and public policy reporting; source_lane: news_formal; context: advanced-geospatial-and-urban-sensing/news_formal -->
### 공간적 외부효과

**품사:** 명사

**핵심 의미:** 한 장소의 활동이나 정책이 그 장소 밖의 사람·자산·환경에 미치는 비용 또는 편익이다.

**베트남어 뜻:** ngoại tác không gian; chi phí hoặc lợi ích của hoạt động/chính sách tại một nơi lan sang người, tài sản hoặc môi trường ở nơi khác.

**뉘앙스와 사용법:** `공간적 외부효과`는 영향이 경계를 넘어 퍼지는 양상을 강조한다. 새 도로의 접근성 향상과 소음 증가처럼 편익과 비용이 동시에 생길 수 있어, 한 지역의 성과만으로 평가하지 않는다.

**재사용 가능한 콜로케이션·청크:** `공간적 외부효과를 낳다`, `외부효과를 주변 지역에 전가하다`, `외부효과를 조정하다` — tạo ngoại tác, chuyển chi phí sang vùng lân cận và điều phối ngoại tác.

**자주 쓰는 문형과 성분:** `A가 B에 공간적 외부효과를 미치다`에서 A는 개발·교통 정책, B는 주변 지역이다. `긍정적·부정적 외부효과`를 구분해 쓴다.

**사회적 관계·주제별 register:** 도시경제·환경정책의 공식어다. 주민 설명회에서는 `한 동네의 결정이 주변 동네에도 영향을 주는 현상`으로 바꾸어 말한다.

**예문:** 물류단지의 일자리 효과만 집계하면 교통 혼잡이라는 공간적 외부효과를 놓칠 수 있다.

**Dịch:** Nếu chỉ tính hiệu quả việc làm của khu logistics, có thể bỏ qua ngoại tác không gian là tắc nghẽn giao thông.

**어휘 연결:** `공간적 외부효과`는 영향이 다른 장소로 번지는 경제·사회적 개념이고 `파급효과`는 더 넓은 결과 확산을 가리킨다. 외부효과에는 당사자가 비용을 직접 지불하지 않는다는 뉘앙스가 있다.

**영어 참고:** *spatial externality* — ngoại tác lan qua ranh giới địa điểm; thường dùng trong kinh tế đô thị và chính sách.

---

<!-- lexical_basis: advanced_native; register: remote-sensing and data engineering; source_lane: native_spoken; context: advanced-geospatial-and-urban-sensing/native_spoken -->
### 래스터

**품사:** 명사

**핵심 의미:** 공간을 규칙적인 격자 셀로 나누고 각 셀에 고도·온도·분류값 등을 저장하는 자료 형식이다.

**베트남어 뜻:** raster; định dạng dữ liệu chia không gian thành các ô lưới đều và lưu một giá trị cho mỗi ô.

**뉘앙스와 사용법:** `래스터`는 사진과 같은 이미지에만 한정되지 않는다. 셀 크기와 해상도가 결과의 세밀함과 계산량을 좌우하며, 경계가 흐려지는 재표본화가 해석에 영향을 줄 수 있다.

**재사용 가능한 콜로케이션·청크:** `래스터 자료를 겹쳐 보다`, `래스터 해상도`, `래스터를 벡터로 변환하다` — chồng lớp dữ liệu raster, độ phân giải và chuyển raster sang vector.

**자주 쓰는 문형과 성분:** `A를 래스터로 변환해 B를 계산하다`에서 A는 고도·온도 자료, B는 면적·평균값이다. `셀 크기를 통일하다`가 자주 결합한다.

**사회적 관계·주제별 register:** GIS 실무와 연구자 회의의 기술어다. 일반 설명에서는 `바둑판처럼 나뉜 공간 데이터`라고 말하면 된다.

**예문:** 분석가는 서로 다른 위성 자료를 같은 래스터 해상도로 맞춘 뒤 도시 열 분포를 비교했다.

**Dịch:** Nhà phân tích điều chỉnh các dữ liệu vệ tinh khác nhau về cùng độ phân giải raster rồi so sánh phân bố nhiệt đô thị.

**어휘 연결:** `래스터`는 셀 기반, `벡터데이터`는 점·선·면의 좌표 기반이다. 연속적인 온도에는 래스터가 편하지만, 행정경계 표현에는 벡터가 더 적합할 수 있다.

**영어 참고:** *raster* — dữ liệu dạng lưới ô; đối lập về cấu trúc với *vector data*.

---

<!-- lexical_basis: advanced_native; register: GIS data standards and planning; source_lane: news_formal; context: advanced-geospatial-and-urban-sensing/news_formal -->
### 벡터데이터

**품사:** 명사

**핵심 의미:** 점·선·면의 좌표와 속성값으로 건물, 도로, 경계 같은 개별 공간 객체를 표현하는 자료다.

**베트남어 뜻:** dữ liệu vector; dữ liệu biểu diễn đối tượng không gian bằng tọa độ điểm, đường, vùng và thuộc tính.

**뉘앙스와 사용법:** `벡터데이터`는 객체의 경계와 속성을 명시적으로 다루기 좋다. 하지만 서로 다른 자료의 좌표계나 경계 기준이 다르면 겹침과 면적 계산이 틀어질 수 있다.

**재사용 가능한 콜로케이션·청크:** `벡터데이터를 구축하다`, `벡터데이터의 속성 테이블`, `경계를 벡터화하다` — xây dựng dữ liệu vector, bảng thuộc tính và vector hóa ranh giới.

**자주 쓰는 문형과 성분:** `A를 벡터데이터로 관리하다`에서 A는 도로망·필지·시설물이다. `공간 객체와 속성을 연결하다`처럼 geometry와 설명 정보를 함께 말한다.

**사회적 관계·주제별 register:** 국토·도시정보 실무의 공식어다. 주민에게는 `건물과 도로를 점·선·면으로 저장한 지도 자료`라고 설명한다.

**예문:** 담당 부서는 도로 벡터데이터의 좌표계를 통일한 뒤 사고 지점과 겹쳐 보았다.

**Dịch:** Cơ quan phụ trách thống nhất hệ tọa độ của dữ liệu vector đường sá rồi chồng lên các điểm tai nạn để xem xét.

**어휘 연결:** `벡터데이터`는 객체 경계에 강하고 `래스터`는 연속적인 값의 표면 표현에 강하다. `공간정보`는 두 형식을 포함하는 상위 개념이라 벡터와 동의어가 아니다.

**영어 참고:** *vector data* — dữ liệu điểm/đường/vùng có tọa độ và thuộc tính; không chỉ là hình ảnh bản đồ.

---

<!-- lexical_basis: advanced_native; register: satellite imagery and disaster mapping; source_lane: news_formal; context: advanced-geospatial-and-urban-sensing/news_formal -->
### 정사영상

**품사:** 명사

**핵심 의미:** 지형의 높이와 카메라 기하에 따른 왜곡을 보정해 지도처럼 일정한 축척으로 만든 항공·위성 영상이다.

**베트남어 뜻:** ảnh trực giao; ảnh hàng không/vệ tinh được hiệu chỉnh biến dạng địa hình và hình học để có tỷ lệ đồng nhất như bản đồ.

**뉘앙스와 사용법:** `정사영상`은 보기 좋은 항공 사진이라는 뜻만이 아니다. 지형고도모델과 센서 정보를 이용해 거리·면적 측정이 가능하도록 보정한 자료이며, 보정 품질에 따라 위치 오차가 남는다.

**재사용 가능한 콜로케이션·청크:** `정사영상을 제작하다`, `정사영상의 위치 정확도`, `정사영상으로 변화를 판독하다` — tạo ảnh trực giao, độ chính xác vị trí và đọc biến đổi từ ảnh.

**자주 쓰는 문형과 성분:** `A를 정사영상으로 보정하다`에서 A는 항공 촬영 원영상이다. `정사영상과 지적도를 겹쳐 보다`처럼 공식 경계와 비교한다.

**사회적 관계·주제별 register:** 측량·재난지도와 행정 데이터의 전문어다. 현장에서는 `왜곡을 바로잡은 지도용 항공 영상`이라고 풀어 말한다.

**예문:** 산사태 전후 정사영상을 겹쳐 보니 사면의 토사 유출 범위가 선명하게 드러났다.

**Dịch:** Khi chồng ảnh trực giao trước và sau vụ sạt lở, phạm vi đất đá tràn xuống sườn dốc hiện rõ.

**어휘 연결:** `정사영상`은 기하 보정된 영상이고 `위성영상`은 촬영 플랫폼을 강조하는 넓은 말이다. 모든 위성영상이 정사영상인 것은 아니며, 지도 측정에는 보정 상태가 중요하다.

**영어 참고:** *orthophoto/orthorectified imagery* — ảnh được hiệu chỉnh hình học để đo và chồng lớp như bản đồ.

---

<!-- lexical_basis: advanced_native; register: earth observation and disaster monitoring; source_lane: news_formal; context: advanced-geospatial-and-urban-sensing/news_formal -->
### 합성개구레이더

**품사:** 명사

**핵심 의미:** 전파를 발사하고 반사 신호를 분석해 구름이나 야간에도 지표 상태를 관측하는 레이더 영상 기술이다.

**베트남어 뜻:** radar khẩu độ tổng hợp; công nghệ ảnh radar phân tích tín hiệu phản xạ để quan sát bề mặt cả khi có mây hoặc ban đêm.

**뉘앙스와 사용법:** `합성개구레이더`는 햇빛에 의존하는 광학 영상과 관측 조건이 다르다. 표면 거칠기·수분·구조물 방향에 민감하므로 사진처럼 색을 읽기보다 신호의 물리적 의미를 함께 해석해야 한다.

**재사용 가능한 콜로케이션·청크:** `합성개구레이더 영상`, `레이더 신호를 분석하다`, `레이더로 침하를 감지하다` — ảnh SAR, phân tích tín hiệu và phát hiện lún bằng radar.

**자주 쓰는 문형과 성분:** `A를 합성개구레이더로 관측하다`에서 A는 지표 변위·홍수 범위다. `구름을 뚫고 관측하다`는 장점을 설명할 때 자연스럽다.

**사회적 관계·주제별 register:** 재난 대응·국토 관측 보고서의 고급 전문어다. 비전문가에게는 `빛 대신 전파 반사를 이용하는 위성 관측`으로 설명한다.

**예문:** 태풍 뒤에는 구름이 계속 남아 있어 합성개구레이더 영상으로 침수 지역을 우선 확인했다.

**Dịch:** Sau bão, mây vẫn còn dày nên trước hết người ta dùng ảnh radar khẩu độ tổng hợp để xác định khu vực ngập.

**어휘 연결:** `합성개구레이더`는 전파 기반 센서, `정사영상`은 주로 광학 영상을 기하 보정한 결과다. 레이더 영상의 밝기는 단순한 색상이나 온도와 같은 뜻이 아니다.

**영어 참고:** *synthetic aperture radar (SAR)* — radar khẩu độ tổng hợp, hoạt động cả ban đêm và khi nhiều mây.

---

<!-- lexical_basis: advanced_native; register: remote-sensing methodology; source_lane: native_spoken; context: advanced-geospatial-and-urban-sensing/native_spoken -->
### 분광해상도

**품사:** 명사

**핵심 의미:** 센서가 전자기파 스펙트럼을 얼마나 세밀한 파장 구간으로 구분해 기록하는지를 나타내는 능력이다.

**베트남어 뜻:** độ phân giải quang phổ; khả năng cảm biến phân biệt và ghi các dải bước sóng điện từ một cách chi tiết.

**뉘앙스와 사용법:** `분광해상도`는 화면의 선명도나 픽셀 크기와 다르다. 파장 구분이 정밀할수록 물질의 스펙트럼 특징을 식별할 수 있지만 자료량과 분석 복잡성도 커진다.

**재사용 가능한 콜로케이션·청크:** `분광해상도가 높다`, `분광해상도를 비교하다`, `분광 특성을 식별하다` — độ phân giải quang phổ cao, so sánh và nhận diện đặc tính quang phổ.

**자주 쓰는 문형과 성분:** `A의 분광해상도가 B를 구분하는 데 유리하다`에서 A는 센서, B는 식생·광물 같은 물질이다. `공간해상도와 분광해상도를 절충하다`가 자주 쓰인다.

**사회적 관계·주제별 register:** 원격탐사 연구와 센서 선정 회의의 기술어다. 대중 설명에서는 `색깔의 미세한 차이를 파장별로 구분하는 능력`이라고 풀어 준다.

**예문:** 연구원은 작은 밭을 구분하려고 공간해상도를 높였지만, 식생 종류 판별에는 분광해상도도 필요하다고 덧붙였다.

**Dịch:** Nhà nghiên cứu tăng độ phân giải không gian để phân biệt các thửa ruộng nhỏ, nhưng bổ sung rằng cũng cần độ phân giải quang phổ để nhận diện loại thực vật.

**어휘 연결:** `분광해상도`는 파장 구분 능력, `공간해상도`는 지상에서 구분하는 크기, `시간해상도`는 관측 빈도다. 세 해상도는 서로 다른 자원 제약 속에서 절충된다.

**영어 참고:** *spectral resolution* — khả năng phân biệt dải bước sóng; khác với *spatial resolution*.

---

<!-- lexical_basis: contemporary_native_hot; register: urban sensing and field-technology discussion; source_lane: native_spoken; context: advanced-geospatial-and-urban-sensing/native_spoken -->
### 라이다

**품사:** 명사

**핵심 의미:** 레이저 펄스를 쏘고 반사 시간을 측정해 지표와 구조물의 삼차원 거리 정보를 얻는 감지 기술이다.

**베트남어 뜻:** LiDAR; công nghệ phát xung laser và đo thời gian phản xạ để thu nhận khoảng cách ba chiều của địa hình và công trình.

**뉘앙스와 사용법:** `라이다`는 카메라 사진보다 높이와 구조를 정밀하게 다루는 데 강하다. 장비가 탑재된 차량·드론·위성에 따라 점군의 밀도와 가림 현상이 달라서 센서 이름만으로 품질을 판단하지 않는다.

**재사용 가능한 콜로케이션·청크:** `라이다 점군`, `라이다로 수관 높이를 재다`, `라이다 자료를 정합하다` — đám mây điểm LiDAR, đo chiều cao tán cây và căn chỉnh dữ liệu.

**자주 쓰는 문형과 성분:** `A를 라이다로 측정하다`에서 A는 건물 높이·수목 구조다. `점군을 정합하다`는 서로 다른 시기의 자료를 맞출 때 자연스럽다.

**사회적 관계·주제별 register:** 스마트시티·산림·자율주행 분야에서 실제로 널리 쓰이는 차용어다. 일반 대화에서는 `레이저로 높이를 재는 센서`라고 설명할 수 있다.

**예문:** 현장팀은 라이다 점군으로 가로수 수관이 전선에 닿는 구간을 먼저 표시했다.

**Dịch:** Đội hiện trường dùng đám mây điểm LiDAR để đánh dấu trước những đoạn tán cây ven đường chạm vào dây điện.

**어휘 연결:** `라이다`는 레이저 거리 측정, `합성개구레이더`는 전파 반사 분석이다. 둘 다 원격 감지지만 파장과 얻는 물리 정보가 달라 서로 대체어가 아니다.

**영어 참고:** *LiDAR* — cảm biến khoảng cách bằng xung laser, thường tạo ra *point cloud*.

---

<!-- lexical_basis: advanced_native; register: climate and urban-environment reporting; source_lane: news_formal; context: advanced-geospatial-and-urban-sensing/news_formal -->
### 불투수면

**품사:** 명사

**핵심 의미:** 빗물이 땅속으로 스며들기보다 표면을 따라 흐르게 만드는 아스팔트·콘크리트 같은 덮개나 그 면적이다.

**베트남어 뜻:** bề mặt không thấm nước; lớp phủ như nhựa đường/bê tông khiến nước mưa chảy trên bề mặt thay vì thấm xuống đất.

**뉘앙스와 사용법:** `불투수면`은 단순히 도시화 면적을 세는 말이 아니다. 강우 유출, 열 축적, 지하수 함양과 연결되므로 비율·연결성·토양 조건을 함께 봐야 한다.

**재사용 가능한 콜로케이션·청크:** `불투수면 비율`, `불투수면을 줄이다`, `불투수면이 확대되다` — tỷ lệ bề mặt không thấm, giảm và mở rộng diện tích không thấm.

**자주 쓰는 문형과 성분:** `A의 불투수면이 B를 증가시키다`에서 A는 도시·유역, B는 유출량·열이다. `불투수면을 투수성 포장으로 바꾸다`가 정책 문형이다.

**사회적 관계·주제별 register:** 기후적응·홍수관리·도시계획의 공식어다. 주민에게는 `물이 땅에 스며들지 못하는 포장면`이라고 풀어 말한다.

**예문:** 보고서는 불투수면 비율이 높은 주거지일수록 짧은 폭우에도 배수 부담이 커진다고 설명했다.

**Dịch:** Báo cáo giải thích rằng khu dân cư có tỷ lệ bề mặt không thấm cao sẽ chịu áp lực thoát nước lớn hơn ngay cả khi mưa lớn trong thời gian ngắn.

**어휘 연결:** `불투수면`은 물의 침투 여부를 기준으로 하고 `녹지율`은 식생 면적을 기준으로 한다. 녹지가 있어도 토양이 다져져 있으면 불투수 효과가 남을 수 있다.

**영어 참고:** *impervious surface* — bề mặt ngăn nước thấm, thường dùng trong quản lý nước mưa và đô thị.

---

<!-- lexical_basis: advanced_native; register: climate science and urban risk reporting; source_lane: news_formal; context: advanced-geospatial-and-urban-sensing/news_formal -->
### 지표면온도

**품사:** 명사

**핵심 의미:** 지표의 표면이 방출하는 복사 정보를 바탕으로 추정한 땅·건물·식생 표면의 온도다.

**베트남어 뜻:** nhiệt độ bề mặt đất; nhiệt độ của đất, công trình hoặc thảm thực vật được ước tính từ bức xạ phát ra.

**뉘앙스와 사용법:** `지표면온도`는 사람이 그늘에서 느끼는 기온이나 공식 기상관측의 공기 온도와 다르다. 재질·시간·수분·관측각의 영향을 받으므로 열환경을 해석할 때 측정 조건을 밝혀야 한다.

**재사용 가능한 콜로케이션·청크:** `지표면온도 분포`, `지표면온도가 상승하다`, `지표면온도를 추정하다` — phân bố, tăng và ước tính nhiệt độ bề mặt đất.

**자주 쓰는 문형과 성분:** `A에서 지표면온도가 높게 나타나다`에서 A는 아스팔트·옥상·공원이다. `기온과 지표면온도를 구분하다`는 오해를 막는 핵심 문형이다.

**사회적 관계·주제별 register:** 원격탐사·폭염 정책 보고서의 전문어다. 일반 설명에서는 `땅과 건물 표면의 뜨거운 정도`라고 풀어 주되 공기 온도와 혼동하지 않는다.

**예문:** 위성 분석에서 같은 기온 아래 아스팔트 주차장의 지표면온도가 잔디밭보다 훨씬 높게 나타났다.

**Dịch:** Phân tích vệ tinh cho thấy trong cùng điều kiện nhiệt độ không khí, nhiệt độ bề mặt bãi đỗ nhựa đường cao hơn nhiều so với bãi cỏ.

**어휘 연결:** `지표면온도`는 표면의 복사 온도, `기온`은 공기의 온도다. `도시열섬`은 도시와 주변의 열 차이를 설명하는 현상으로 지표면온도 자료를 이용할 수 있지만 둘은 같은 말이 아니다.

**영어 참고:** *land surface temperature (LST)* — nhiệt độ bề mặt đất, khác với *air temperature*.

---

<!-- lexical_basis: advanced_native; register: environmental modeling and spatial statistics; source_lane: native_spoken; context: advanced-geospatial-and-urban-sensing/native_spoken -->
### 공간보간

**품사:** 명사

**핵심 의미:** 측정되지 않은 위치의 값을 주변 관측값을 이용해 추정하는 공간 분석 방법이다.

**베트남어 뜻:** nội suy không gian; phương pháp ước tính giá trị tại vị trí chưa đo bằng các quan sát xung quanh.

**뉘앙스와 사용법:** `공간보간`은 빈칸을 실제 측정값으로 채우는 일이 아니다. 거리·방향·지형과 선택한 알고리즘에 따라 추정 불확실성이 달라지므로, 관측망이 성긴 지역의 지도는 특히 조심해서 읽는다.

**재사용 가능한 콜로케이션·청크:** `공간보간을 적용하다`, `관측값을 공간보간하다`, `보간 오차를 평가하다` — áp dụng nội suy, nội suy các quan sát và đánh giá sai số.

**자주 쓰는 문형과 성분:** `A를 공간보간해 B를 추정하다`에서 A는 관측소 온도·강수량, B는 미관측 지역 값이다. `보간 범위를 제한하다`처럼 물리적 근거를 함께 둔다.

**사회적 관계·주제별 register:** 환경 모니터링과 연구 설계의 분석어다. 현장 회의에서는 `측정하지 않은 곳의 값을 주변 자료로 추정하는 방법`으로 설명한다.

**예문:** 관측소가 적은 산간 지역의 미세먼지 지도는 공간보간 결과라는 점을 보고서에 명시했다.

**Dịch:** Báo cáo nêu rõ rằng bản đồ bụi mịn của vùng núi ít trạm quan trắc là kết quả nội suy không gian.

**어휘 연결:** `공간보간`은 관측 사이의 값을 추정하고 `예측`은 시간·공간 밖의 미래나 미관측 결과까지 넓게 말할 수 있다. 보간은 관측 범위를 크게 벗어나면 외삽이 되어 불확실성이 커진다.

**영어 참고:** *spatial interpolation* — ước tính giá trị giữa các điểm quan sát; không đồng nghĩa hoàn toàn với prediction.

---

<!-- lexical_basis: advanced_native; register: urban economics and spatial statistics; source_lane: news_formal; context: advanced-geospatial-and-urban-sensing/news_formal -->
### 공간회귀

**품사:** 명사

**핵심 의미:** 위치 간 의존성이나 지역별 차이를 모형에 반영해 공간 자료의 관계를 추정하는 회귀 분석이다.

**베트남어 뜻:** hồi quy không gian; phân tích hồi quy phản ánh sự phụ thuộc giữa các vị trí hoặc khác biệt theo vùng trong dữ liệu không gian.

**뉘앙스와 사용법:** `공간회귀`는 지도 위에 회귀선을 그리는 단순한 기법이 아니다. 공간자기상관과 공간이질성을 무시할 때 생기는 편향을 다루기 위한 모형 선택이며, 계수의 인과 해석에는 별도 설계가 필요하다.

**재사용 가능한 콜로케이션·청크:** `공간회귀모형`, `공간회귀를 실시하다`, `지역 효과를 모형에 넣다` — mô hình hồi quy không gian, tiến hành hồi quy và đưa hiệu ứng vùng vào mô hình.

**자주 쓰는 문형과 성분:** `A와 B의 관계를 공간회귀로 추정하다`에서 A·B는 주거비·교통 접근성 같은 변수다. `공간의존성을 통제하다`가 자주 결합한다.

**사회적 관계·주제별 register:** 정책평가·도시경제 연구의 공식어다. 비전문가에게는 `지역 간 연결과 차이를 반영한 통계 모형`이라고 설명한다.

**예문:** 연구팀은 대중교통 접근성이 임대료에 미치는 영향을 공간회귀로 추정하면서 생활권 경계를 함께 검토했다.

**Dịch:** Nhóm nghiên cứu ước tính bằng hồi quy không gian ảnh hưởng của khả năng tiếp cận giao thông công cộng lên tiền thuê nhà, đồng thời xem xét ranh giới các vùng sinh hoạt.

**어휘 연결:** `공간회귀`는 위치 의존성을 반영한 추정 모형이고 `공간보간`은 미관측 값을 채우는 절차다. 같은 공간 자료를 쓰더라도 목적과 해석이 다르다.

**영어 참고:** *spatial regression* — hồi quy có xét cấu trúc không gian; cần phân biệt với nội suy.

---

<!-- lexical_basis: advanced_native; register: urban planning and multi-scale data analysis; source_lane: native_spoken; context: advanced-geospatial-and-urban-sensing/native_spoken -->
### 다중스케일

**품사:** 명사·관형사적 용법

**핵심 의미:** 하나의 현상을 여러 공간적 또는 시간적 범위와 해상도에서 함께 분석하는 접근이다.

**베트남어 뜻:** đa quy mô; cách tiếp cận phân tích một hiện tượng ở nhiều phạm vi hoặc độ phân giải không gian/thời gian.

**뉘앙스와 사용법:** `다중스케일`은 자료를 많이 겹친다는 뜻이 아니라, 동네·도시·권역처럼 관찰 규모가 바뀔 때 패턴과 정책 의미가 어떻게 달라지는지 비교하는 말이다. 한 축척의 결과를 전체에 일반화하지 않는다.

**재사용 가능한 콜로케이션·청크:** `다중스케일 분석`, `다중스케일 자료를 결합하다`, `스케일 효과를 점검하다` — phân tích đa quy mô, kết hợp dữ liệu và kiểm tra hiệu ứng quy mô.

**자주 쓰는 문형과 성분:** `A를 다중스케일로 분석하다`에서 A는 열환경·접근성 같은 현상이다. `동네 수준과 도시 수준을 비교하다`가 의미를 구체화한다.

**사회적 관계·주제별 register:** 도시계획·환경 모델링의 분석어다. 회의에서는 `동네와 도시 전체를 여러 확대 수준에서 따로 본다`고 풀면 자연스럽다.

**예문:** 연구자는 다중스케일 분석으로 가로수의 미세한 그늘 효과와 도시 전체의 열 분포를 따로 비교했다.

**Dịch:** Nhà nghiên cứu dùng phân tích đa quy mô để so sánh riêng hiệu ứng bóng râm nhỏ của cây ven đường với phân bố nhiệt trên toàn đô thị.

**어휘 연결:** `다중스케일`은 분석 범위를 여러 층위로 바꾸는 접근이고 `해상도`는 한 자료가 공간·시간을 얼마나 세밀하게 표현하는지다. 해상도가 높아도 다중스케일 분석이 자동으로 되는 것은 아니다.

**영어 참고:** *multiscale* — phân tích ở nhiều quy mô; khác với *resolution* là độ chi tiết của một dữ liệu.

---

## 읽기: 지도는 위치를 말하지만 원인을 대신 말해 주지 않는다

<!-- passage_word_count: 85 Korean eojeol; target_set: 지오코딩, 공간자기상관, 공간이질성, 공간적 외부효과, 래스터, 벡터데이터, 정사영상, 합성개구레이더, 분광해상도, 라이다, 불투수면, 지표면온도, 공간보간, 공간회귀, 다중스케일 -->

시청 분석팀은 오래된 민원 주소를 지오코딩한 뒤 도로와 건물의 벡터데이터에 겹쳐 놓았다. 위성 정사영상과 라이다 점군으로 공사 전후의 높이와 표면 변화를 확인하고, 구름이 낀 날에는 합성개구레이더 자료를 보조로 사용했다. 식생을 구분할 때는 분광해상도와 공간 해상도를 함께 살폈으며, 불투수면이 넓어진 구역에서 지표면온도가 어떻게 달라졌는지 래스터로 계산했다. 관측소 사이의 빈칸은 공간보간으로 채웠지만, 그 결과를 실제 측정값처럼 발표하지 않았다. 공간자기상관과 공간이질성을 점검한 뒤 공간회귀를 적용하자, 신축 물류시설의 효과가 주변 지역으로 번지는 공간적 외부효과도 보였다. 마지막 회의에서는 동네·생활권·도시권을 나눠 다중스케일로 비교하고, 어느 지도도 원인 자체를 대신 증명하지 않는다고 확인했다.

**Dịch:** Nhóm phân tích của tòa thị chính địa mã hóa các địa chỉ khiếu nại cũ rồi chồng chúng lên dữ liệu vector của đường sá và tòa nhà. Họ dùng ảnh trực giao vệ tinh và đám mây điểm LiDAR để kiểm tra thay đổi độ cao và bề mặt trước sau xây dựng, còn dữ liệu radar khẩu độ tổng hợp được dùng bổ trợ vào những ngày nhiều mây. Khi phân loại thảm thực vật, họ xem đồng thời độ phân giải quang phổ và độ phân giải không gian, rồi tính bằng raster sự thay đổi nhiệt độ bề mặt ở các khu vực có diện tích bề mặt không thấm mở rộng. Các khoảng trống giữa trạm quan trắc được nội suy không gian, nhưng kết quả không được công bố như số đo thực tế. Sau khi kiểm tra tự tương quan không gian và tính không đồng nhất không gian rồi áp dụng hồi quy không gian, họ cũng nhận ra ngoại tác không gian của cơ sở logistics mới lan sang vùng lân cận. Cuối cùng, cuộc họp so sánh các quy mô khu phố, vùng sinh hoạt và vùng đô thị bằng phân tích đa quy mô, đồng thời xác nhận rằng không bản đồ nào tự chứng minh nguyên nhân.

`공간 해상도`는 이 lesson의 target인 `분광해상도`와 짝을 이루는 supporting language다. `공간적 외부효과`가 보였다는 표현도 지도만으로 인과관계를 확정했다는 뜻이 아니라, 추가 검증이 필요한 정책 가설을 세웠다는 뜻으로 읽어야 한다.
