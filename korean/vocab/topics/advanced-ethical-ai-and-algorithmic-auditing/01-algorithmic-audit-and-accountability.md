<!-- source_policy: original explanations, examples, and passage; governance terminology cross-checked against contemporary Korean policy discourse -->

# 알고리즘을 점검하고 책임을 설계하다

인공지능을 도입할 때 데이터의 출처와 한계를 기록하고, 배포 전후의 오류와 권리 침해를 점검하는 흐름을 익힌다.

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: AI governance and data documentation; source_lane: news_formal; context: advanced-ethical-ai-and-algorithmic-auditing/news_formal -->
### 데이터시트

**품사:** 명사

**핵심 의미:** 데이터셋의 수집 목적, 구성, 한계, 금지된 사용과 평가 결과를 체계적으로 기록한 문서다.

**베트남어 뜻:** datasheet của bộ dữ liệu; tài liệu ghi mục đích, thành phần, giới hạn và cách đánh giá của một tập dữ liệu.

**뉘앙스와 사용법:** `데이터시트`는 단순한 변수 목록이 아니라 데이터가 어떤 사람과 상황을 대표하거나 배제하는지까지 드러내는 문서다. 모델 설명서인 `모델 카드`와는 기록 대상이 다르다.

**재사용 가능한 콜로케이션·청크:** `데이터시트를 작성하다`, `데이터시트에 한계를 명시하다`, `데이터시트를 공개하다` — viết, ghi rõ giới hạn và công khai tài liệu dữ liệu.

**자주 쓰는 문형과 성분:** `데이터셋의 데이터시트에 A를 기록하다`에서 A는 수집 방식·제외 기준·사용 제한이다. `데이터시트를 바탕으로 B를 검토하다`도 자연스럽다.

**사회적 관계·주제별 register:** 연구실, 제품팀, 규제기관이 데이터 책임을 논할 때 쓰는 기술·정책 register다. 일반 사용자에게는 `데이터가 어떻게 만들어졌는지 설명하는 문서`라고 풀어 말한다.

**예문:** 조달 심사위원회는 학습 데이터시트에 누락된 지역과 수집 동의를 다시 확인했다.

**Dịch:** Hội đồng thẩm định mua sắm đã kiểm tra lại các khu vực bị thiếu và sự đồng ý thu thập còn bỏ sót trong datasheet của dữ liệu huấn luyện.

**어휘 연결:** `데이터시트`는 데이터 자체의 출처와 한계를 기록하고, `모델 카드`는 그 데이터로 만든 모델의 성능·위험을 기록한다. 둘을 함께 봐야 감사의 범위가 이어진다.

**영어 참고:** *dataset datasheet* — tài liệu minh bạch hóa nguồn gốc và giới hạn của bộ dữ liệu, không phải bảng thông số kỹ thuật đơn thuần.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: AI evaluation and social-impact reporting; source_lane: native_spoken; context: advanced-ethical-ai-and-algorithmic-auditing/native_spoken -->
### 데이터대표성

**품사:** 명사

**핵심 의미:** 데이터가 실제로 영향을 받을 사람들과 사용 환경의 다양성을 얼마나 제대로 반영하는지 나타내는 성질이다.

**베트남어 뜻:** tính đại diện của dữ liệu; mức độ dữ liệu phản ánh đúng người dùng và môi trường thực tế.

**뉘앙스와 사용법:** 표본 수가 많다고 `데이터대표성`이 자동으로 높아지는 것은 아니다. 지역·연령·장애·언어 같은 차이가 결과에 중요한지 함께 살펴야 한다.

**재사용 가능한 콜로케이션·청크:** `데이터대표성을 확보하다`, `데이터대표성이 낮다`, `대표성 격차를 점검하다` — bảo đảm tính đại diện, nhận diện tính đại diện thấp và kiểm tra khoảng cách đại diện.

**자주 쓰는 문형과 성분:** `A의 데이터대표성이 B를 반영하다`에서 A는 학습 데이터, B는 실제 이용자 집단이다. `데이터대표성을 높이기 위해 C를 추가하다`에서 C는 지역·언어별 자료다.

**사회적 관계·주제별 register:** 팀 회의에서는 전문어로 쓰지만, 이용자와 대화할 때는 `우리 데이터가 누구를 빠뜨렸는지`라는 말로 바꿔 설명하면 자연스럽다.

**예문:** 개발팀은 정확도보다 먼저 데이터대표성이 지역별 이용자를 고르게 반영하는지 논의했다.

**Dịch:** Nhóm phát triển đã thảo luận trước hết xem tính đại diện của dữ liệu có phản ánh cân bằng người dùng ở các khu vực hay không, thay vì chỉ nhìn độ chính xác.

**어휘 연결:** `데이터대표성`은 데이터가 누구를 반영하는지의 문제이고, `데이터 품질`은 정확성·일관성 등 더 넓은 품질 축이다. 대표성이 높아도 라벨이 틀리면 품질이 좋다고 할 수 없다.

**영어 참고:** *data representativeness* — mức độ dữ liệu phản ánh các nhóm và điều kiện sử dụng thực tế; rộng hơn việc dữ liệu chỉ “đủ lớn”.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: statistics and algorithmic risk analysis; source_lane: news_formal; context: advanced-ethical-ai-and-algorithmic-auditing/news_formal -->
### 표본편향

**품사:** 명사

**핵심 의미:** 관찰되거나 선택된 표본이 전체 모집단의 중요한 특성을 체계적으로 벗어나는 현상이다.

**베트남어 뜻:** thiên lệch mẫu; hiện tượng mẫu được chọn lệch có hệ thống so với tổng thể quan trọng.

**뉘앙스와 사용법:** 무작위 오차처럼 표본을 늘리면 사라지는 문제가 아니라, 수집 경로 자체가 특정 집단을 과대표집하거나 배제해서 생기는 편향이다.

**재사용 가능한 콜로케이션·청크:** `표본편향을 줄이다`, `표본편향을 진단하다`, `표본편향이 누적되다` — giảm, chẩn đoán và tích lũy thiên lệch mẫu.

**자주 쓰는 문형과 성분:** `수집 경로가 표본편향을 만들다`, `표본편향 때문에 A가 과소평가되다`처럼 원인과 결과를 함께 말한다.

**사회적 관계·주제별 register:** 통계 보고서와 알고리즘 감사의 전문어다. 회의에서는 `애초에 누구에게서 자료를 모았는가`를 확인하는 표현으로 풀어 쓸 수 있다.

**예문:** 무료 서비스 이용자만 조사하면 유료 이용자의 행동이 빠져 표본편향이 생길 수 있다.

**Dịch:** Nếu chỉ khảo sát người dùng dịch vụ miễn phí, hành vi của người trả phí bị bỏ ra ngoài và có thể tạo ra thiên lệch mẫu.

**어휘 연결:** `표본편향`은 표본을 뽑는 단계의 문제이고, `학습 데이터 편향`은 라벨·측정·역사적 기록까지 포함할 수 있는 더 넓은 말이다.

**영어 참고:** *sampling bias* — thiên lệch phát sinh từ cách chọn mẫu; khác với sai số ngẫu nhiên (*sampling error*).

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: fairness research and public-interest technology; source_lane: news_formal; context: advanced-ethical-ai-and-algorithmic-auditing/news_formal -->
### 인과공정성

**품사:** 명사

**핵심 의미:** 결과의 차이를 단순히 통계적으로 맞추는 데서 그치지 않고, 인과적으로 부당한 경로가 작동하지 않는지를 따지는 공정성 관점이다.

**베트남어 뜻:** công bằng nhân quả; quan điểm xem các con đường nhân quả tạo ra chênh lệch có bất công hay không.

**뉘앙스와 사용법:** 집단별 결과를 같게 만드는 것만으로는 충분하지 않다는 문제의식을 담는다. 어떤 변수는 차별의 원인일 수 있지만, 어떤 변수는 정당한 위험 차이를 설명할 수도 있어 맥락 판단이 필요하다.

**재사용 가능한 콜로케이션·청크:** `인과공정성을 검토하다`, `인과 경로를 분해하다`, `인과공정성 조건` — xem xét công bằng nhân quả, tách đường nhân quả và điều kiện công bằng.

**자주 쓰는 문형과 성분:** `A가 B에 미치는 인과 경로를 분석하다`에서 A는 민감한 속성, B는 예측 결과다. `인과공정성 관점에서 C를 재검토하다`도 자주 쓴다.

**사회적 관계·주제별 register:** 학술 연구와 고위험 의사결정 정책에서 쓰는 고급 전문어다. 시민 설명에서는 `결과만 맞추지 말고 불공정한 원인 경로를 찾는다`고 풀이한다.

**예문:** 대출 심사 모델은 성별별 승인율보다 인과공정성에 어긋나는 변수 경로가 있는지 먼저 검사했다.

**Dịch:** Mô hình thẩm định khoản vay kiểm tra trước xem có đường biến số nào trái với công bằng nhân quả hay không, thay vì chỉ nhìn tỷ lệ duyệt giữa các giới.

**어휘 연결:** `인과공정성`은 왜 차이가 생겼는지를 묻고, `공정성 지표`는 결과의 분포를 측정한다. 지표가 좋아도 인과 경로가 부당할 수 있다.

**영어 참고:** *causal fairness* — đánh giá công bằng dựa trên quan hệ nhân quả, không chỉ dựa trên sự cân bằng của kết quả quan sát.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: model evaluation and equality monitoring; source_lane: news_formal; context: advanced-ethical-ai-and-algorithmic-auditing/news_formal -->
### 집단별오류율

**품사:** 명사

**핵심 의미:** 인구집단이나 사용자 집단을 나누어 계산한 오류의 비율이다.

**베트남어 뜻:** tỷ lệ lỗi theo từng nhóm; tỷ lệ dự đoán sai được tính riêng cho các nhóm.

**뉘앙스와 사용법:** 전체 평균 오류율이 낮아도 특정 집단에 오류가 몰릴 수 있다는 점을 보여 준다. 어떤 오류를 분모로 삼았는지와 오류의 비용도 함께 밝혀야 한다.

**재사용 가능한 콜로케이션·청크:** `집단별오류율을 비교하다`, `집단별오류율 격차`, `오류율을 공개하다` — so sánh, đo khoảng cách và công khai tỷ lệ lỗi theo nhóm.

**자주 쓰는 문형과 성분:** `A 집단의 집단별오류율이 B보다 높다`, `집단별오류율을 기준으로 재학습하다`처럼 집단과 비교 기준을 명시한다.

**사회적 관계·주제별 register:** 모델 성능 보고서, 내부 위험위원회와 규제기관 문서의 formal register다. 비전문가에게는 `누구에게 더 자주 틀리는지`라고 설명할 수 있다.

**예문:** 감사팀은 전체 정확도 대신 연령대별 집단별오류율을 공개하라고 권고했다.

**Dịch:** Nhóm kiểm toán khuyến nghị công khai tỷ lệ lỗi theo từng nhóm tuổi thay vì chỉ công bố độ chính xác tổng thể.

**어휘 연결:** `집단별오류율`은 실제 틀린 비율을 보여 주고, `공정성 지표`는 오류율 외에도 기회 균등이나 예측값의 cân bằng을 포함할 수 있다.

**영어 참고:** *group-specific error rate* — tỷ lệ lỗi được tách theo nhóm; cần nói rõ loại lỗi và mẫu số.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: AI governance deliberation; source_lane: native_spoken; context: advanced-ethical-ai-and-algorithmic-auditing/native_spoken -->
### 공정성상충

**품사:** 명사

**핵심 의미:** 한 공정성 기준을 개선하면 다른 기준이나 성능, 운영 목표가 악화될 수 있는 긴장 관계다.

**베트남어 뜻:** sự đánh đổi giữa các tiêu chí công bằng; căng thẳng khi cải thiện một tiêu chí làm xấu tiêu chí khác.

**뉘앙스와 사용법:** `공정성상충`은 공정을 포기하자는 말이 아니라 어떤 기준을 우선할지 공개적으로 선택해야 한다는 뜻이다. 기술적 최적화만으로 해결되지 않는 가치 판단을 드러낸다.

**재사용 가능한 콜로케이션·청크:** `공정성상충을 설명하다`, `공정성 기준의 상충`, `상충 관계를 공개하다` — giải thích, công khai sự xung đột giữa các tiêu chí.

**자주 쓰는 문형과 성분:** `A를 높이면 B와 공정성상충이 생기다`, `공정성상충을 감수하다`처럼 두 기준과 선택의 비용을 함께 제시한다.

**사회적 관계·주제별 register:** 제품 회의와 시민 공청회에서 모두 쓸 수 있지만, 일상 대화에서는 `한쪽을 맞추면 다른 쪽이 불리해지는 문제`로 풀어 말한다.

**예문:** 팀원들은 공정성상충을 숨기지 말고 어떤 이용자 위험을 우선 줄일지 결정하자고 했다.

**Dịch:** Các thành viên nói rằng không nên che giấu sự đánh đổi giữa các tiêu chí công bằng mà phải quyết định ưu tiên giảm rủi ro cho nhóm người dùng nào.

**어휘 연결:** `공정성상충`은 여러 기준 사이의 긴장이고, `공정성 위반`은 특정 기준을 어긴 상태다. 상충이 있다고 해서 곧바로 위반인 것은 아니다.

**영어 참고:** *fairness trade-off* — sự đánh đổi giữa các chuẩn công bằng hoặc giữa công bằng và hiệu năng; không đồng nghĩa với “thiếu công bằng”.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: responsible AI testing; source_lane: news_formal; context: advanced-ethical-ai-and-algorithmic-auditing/news_formal -->
### 반사실검증

**품사:** 명사

**핵심 의미:** 한 사람이나 상황의 특정 조건만 가상으로 바꿨을 때 모델의 판단이 정당하게 달라지는지 확인하는 검증 방식이다.

**베트남어 뜻:** kiểm chứng phản thực; kiểm tra bằng cách giả định thay đổi một điều kiện để xem phán đoán của mô hình có thay đổi hợp lý không.

**뉘앙스와 사용법:** 실제 사람의 모든 조건을 그대로 복제한다는 뜻은 아니다. 비교 가능한 입력을 설계해 민감한 속성이나 그 대리변수가 결과를 부당하게 바꾸는지 살핀다.

**재사용 가능한 콜로케이션·청크:** `반사실검증을 수행하다`, `반사실 입력을 구성하다`, `반사실 비교` — thực hiện kiểm chứng phản thực, tạo đầu vào phản thực và so sánh phản thực.

**자주 쓰는 문형과 성분:** `A만 바꾼 반사실 입력에서 B를 비교하다`에서 A는 민감한 속성, B는 점수·추천·승인 결과다.

**사회적 관계·주제별 register:** 모델 연구와 공정성 감사에 특화된 전문어다. 사용자에게는 `조건 하나만 바꿔도 판단이 부당하게 달라지는지 시험한다`고 설명한다.

**예문:** 채용 추천기의 반사실검증은 이름과 성별 표지만 바꾼 입력에서 순위가 달라지는지 살폈다.

**Dịch:** Kiểm chứng phản thực của công cụ gợi ý tuyển dụng xem thứ hạng có thay đổi khi chỉ đổi tên và nhãn giới tính hay không.

**어휘 연결:** `반사실검증`은 가상으로 조건을 바꾸는 방법이고, `민감도 분석`은 입력 변화 전반에 대한 반응을 측정한다. 반사실 비교가 곧 인과관계를 완전히 증명하는 것은 아니다.

**영어 참고:** *counterfactual testing* — kiểm tra các đầu vào giả định để dò sự phụ thuộc bất công; không tự động chứng minh nhân quả đầy đủ.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: product safety and deployment governance; source_lane: news_formal; context: advanced-ethical-ai-and-algorithmic-auditing/news_formal -->
### 배포전검증

**품사:** 명사

**핵심 의미:** AI 시스템을 실제 사용자에게 공개하기 전에 성능, 위험, 보안과 권리 영향을 확인하는 절차다.

**베트남어 뜻:** xác minh trước triển khai; quy trình kiểm tra hiệu năng, rủi ro và tác động trước khi đưa hệ thống AI cho người dùng thật.

**뉘앙스와 사용법:** 데모가 잘 작동하는지 보는 테스트보다 범위가 넓다. 예상 밖 입력, 취약 집단, 운영 담당자의 대응과 중단 조건까지 확인한다.

**재사용 가능한 콜로케이션·청크:** `배포전검증을 통과하다`, `배포전검증 항목`, `배포전검증을 의무화하다` — vượt qua, xác định hạng mục và bắt buộc xác minh trước triển khai.

**자주 쓰는 문형과 성분:** `A를 배포전검증에서 점검하다`에서 A는 모델·데이터·사용 시나리오다. `검증 결과에 따라 B를 보류하다`도 자연스럽다.

**사회적 관계·주제별 register:** 기업 품질관리와 공공 조달의 formal register다. 팀 안에서는 `출시 전에 실제 위험을 확인하는 관문`이라고 말한다.

**예문:** 의료 상담 챗봇은 배포전검증에서 고위험 증상을 놓치는 비율이 기준을 넘었다.

**Dịch:** Chatbot tư vấn y tế có tỷ lệ bỏ sót triệu chứng nguy cơ cao vượt chuẩn trong khâu xác minh trước triển khai.

**어휘 연결:** `배포전검증`은 출시 전 관문이고, `배포후감시`는 실제 사용 중 변화와 사고를 추적한다. 전자를 통과해도 후자가 불필요해지는 것은 아니다.

**영어 참고:** *pre-deployment validation* — xác minh trước khi triển khai thực tế; rộng hơn kiểm thử chức năng trong phòng thí nghiệm.

---

<!-- lexical_basis: contemporary_native_hot; target_type: contemporary_native_hot; register: product operations and AI safety talk; source_lane: native_spoken; context: advanced-ethical-ai-and-algorithmic-auditing/native_spoken -->
### 배포후감시

**품사:** 명사

**핵심 의미:** 시스템을 출시한 뒤 실제 사용 환경에서 성능 저하, 오류, 피해와 새로운 위험을 계속 관찰하는 활동이다.

**베트남어 뜻:** giám sát sau triển khai; theo dõi liên tục lỗi, thiệt hại và rủi ro mới sau khi hệ thống được đưa vào sử dụng.

**뉘앙스와 사용법:** 출시 시점의 성능표만으로 안전을 보장할 수 없다는 현실적인 표현이다. 사용자 신고, 데이터 변화와 현장 담당자의 판단을 함께 반영한다.

**재사용 가능한 콜로케이션·청크:** `배포후감시를 강화하다`, `배포후감시 체계`, `배포후감시 결과` — tăng cường, xây dựng hệ thống và báo cáo kết quả giám sát sau triển khai.

**자주 쓰는 문형과 성분:** `A를 배포후감시로 추적하다`에서 A는 오류율·민원·분포 변화다. `감시 결과에 따라 모델을 재평가하다`가 자연스럽다.

**사회적 관계·주제별 register:** 제품팀과 안전 담당자가 자주 쓰는 contemporary 업무어다. 일반 대화에서는 `출시 후에도 계속 지켜보는 절차`라고 풀어도 된다.

**예문:** 업데이트 뒤 배포후감시에서 특정 지역의 오탐이 늘어 재학습을 중단했다.

**Dịch:** Sau bản cập nhật, giám sát sau triển khai cho thấy báo nhầm tăng ở một khu vực cụ thể nên việc huấn luyện lại bị dừng.

**어휘 연결:** `배포후감시`는 운영 중 관찰하는 과정이고, `모델 드리프트`는 데이터나 관계가 변해 성능이 떨어지는 한 현상이다. 감시는 드리프트 외의 피해도 포착한다.

**영어 참고:** *post-deployment monitoring* — giám sát liên tục trong vận hành, không chỉ là kiểm tra lại mô hình một lần.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: enterprise risk governance; source_lane: news_formal; context: advanced-ethical-ai-and-algorithmic-auditing/news_formal -->
### 위험등록부

**품사:** 명사

**핵심 의미:** 시스템마다 식별된 위험, 책임자, 완화 조치, 잔여 위험과 검토 시점을 기록한 관리 문서다.

**베트남어 뜻:** sổ đăng ký rủi ro; tài liệu ghi rủi ro, người phụ trách, biện pháp giảm thiểu và thời điểm rà soát.

**뉘앙스와 사용법:** 막연한 위험 목록이 아니라 누가 언제 무엇을 조치할지 추적하는 운영 장치다. 위험을 없앴다고 선언하기보다 남은 위험을 가시화한다.

**재사용 가능한 콜로케이션·청크:** `위험등록부를 갱신하다`, `위험등록부에 등재하다`, `잔여 위험을 기록하다` — cập nhật, ghi vào sổ và ghi nhận rủi ro còn lại.

**자주 쓰는 문형과 성분:** `A를 위험등록부에 올리다`에서 A는 차별·보안·안전 위험이다. `위험등록부의 담당 부서를 지정하다`도 자주 쓴다.

**사회적 관계·주제별 register:** 감사위원회, 개발 거버넌스와 규제 대응에 쓰이는 공식 관리어다. 조직 안에서는 `위험과 담당자를 한 장에서 추적하는 표`라고 설명할 수 있다.

**예문:** 위원회는 자동 거절의 차별 위험을 위험등록부에 올리고 매달 완화 조치를 점검했다.

**Dịch:** Ủy ban ghi rủi ro phân biệt đối xử của việc từ chối tự động vào sổ đăng ký rủi ro và kiểm tra biện pháp giảm thiểu hằng tháng.

**어휘 연결:** `위험등록부`는 위험과 조치의 관리 기록이고, `위험평가`는 위험의 가능성과 영향을 분석하는 절차다. 평가 결과가 등록부의 항목이 될 수 있다.

**영어 참고:** *risk register* — sổ theo dõi rủi ro, chủ sở hữu và biện pháp xử lý trong suốt vòng đời dự án.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: evaluation science and responsible AI; source_lane: news_formal; context: advanced-ethical-ai-and-algorithmic-auditing/news_formal -->
### 평가프로토콜

**품사:** 명사

**핵심 의미:** 무엇을 어떤 데이터와 절차로 측정하고, 결과를 어떻게 해석할지 미리 정한 평가 규칙과 실행 절차다.

**베트남어 뜻:** giao thức đánh giá; bộ quy tắc định trước cách đo, dữ liệu sử dụng và cách diễn giải kết quả.

**뉘앙스와 사용법:** 점수 하나를 발표하는 것보다 평가 조건의 재현성과 비교 가능성을 강조한다. 측정하지 않은 위험을 성능이 좋다고 포장하지 못하게 한다.

**재사용 가능한 콜로케이션·청크:** `평가프로토콜을 수립하다`, `평가프로토콜을 사전 등록하다`, `프로토콜을 준수하다` — xây dựng, đăng ký trước và tuân thủ giao thức đánh giá.

**자주 쓰는 문형과 성분:** `A를 평가프로토콜에 따라 측정하다`에서 A는 정확도·편향·강건성이다. `프로토콜의 예외 조건을 공개하다`도 자연스럽다.

**사회적 관계·주제별 register:** 연구 보고서와 제품 안전 검토에서 쓰는 formal·전문 register다. 회의에서는 `평가 전에 측정 방법을 고정해 두는 약속`으로 설명한다.

**예문:** 외부 연구진은 평가프로토콜을 먼저 공개한 뒤 모델의 공정성 결과를 비교했다.

**Dịch:** Nhóm nghiên cứu bên ngoài công khai giao thức đánh giá trước rồi mới so sánh kết quả công bằng của các mô hình.

**어휘 연결:** `평가프로토콜`은 측정 절차 전체이고, `평가셋`은 그 절차에서 사용하는 데이터 묶음이다. 같은 평가셋도 프로토콜이 다르면 결론이 달라질 수 있다.

**영어 참고:** *evaluation protocol* — giao thức định nghĩa điều kiện, chỉ số và cách diễn giải một cuộc đánh giá.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: audit and compliance documentation; source_lane: news_formal; context: advanced-ethical-ai-and-algorithmic-auditing/news_formal -->
### 감사증적

**품사:** 명사

**핵심 의미:** 누가 언제 어떤 자료와 근거로 판단하고 조치했는지 나중에 재구성할 수 있게 남긴 기록이다.

**베트남어 뜻:** dấu vết kiểm toán; hồ sơ cho phép tái dựng ai đã quyết định gì, khi nào và dựa trên căn cứ nào.

**뉘앙스와 사용법:** 로그를 많이 저장한다는 뜻만이 아니다. 기록이 변경되지 않았고 판단 근거와 연결되어 있어야 `감사증적`이 된다.

**재사용 가능한 콜로케이션·청크:** `감사증적을 남기다`, `감사증적을 보존하다`, `감사증적을 추적하다` — để lại, bảo toàn và truy vết dấu tích kiểm toán.

**자주 쓰는 문형과 성분:** `A의 감사증적을 통해 B를 재구성하다`에서 A는 모델 업데이트·승인 과정, B는 의사결정 경로다.

**사회적 관계·주제별 register:** 내부통제, 규제 대응과 사고 조사에서 쓰는 공식어다. 비전문가에게는 `나중에 판단 과정을 다시 확인할 수 있는 기록`이라고 한다.

**예문:** 사고 조사관은 모델 버전과 승인자의 서명이 연결된 감사증적을 요구했다.

**Dịch:** Điều tra viên sự cố yêu cầu dấu vết kiểm toán liên kết phiên bản mô hình với chữ ký của người phê duyệt.

**어휘 연결:** `감사증적`은 판단과 조치의 근거 기록이고, `감사 추적`은 그 기록을 따라가는 활동이나 기능이다. 기록이 없으면 추적도 성립하지 않는다.

**영어 참고:** *audit trail evidence* — bằng chứng dạng hồ sơ để tái dựng hoạt động và quyết định; không chỉ là nhật ký kỹ thuật.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: digital rights and administrative procedure; source_lane: native_spoken; context: advanced-ethical-ai-and-algorithmic-auditing/native_spoken -->
### 설명요구권

**품사:** 명사

**핵심 의미:** 자동화된 판단이나 데이터 처리의 이유와 기준을 당사자가 설명해 달라고 요구할 수 있는 권리다.

**베트남어 뜻:** quyền yêu cầu giải thích; quyền yêu cầu nêu lý do và tiêu chí của một quyết định tự động hoặc xử lý dữ liệu.

**뉘앙스와 사용법:** 내부 소스코드를 전부 공개하라는 뜻과는 다르다. 당사자가 결과를 이해하고 이의를 제기하거나 정정할 수 있을 만큼 의미 있는 설명을 요구하는 권리다.

**재사용 가능한 콜로케이션·청크:** `설명요구권을 보장하다`, `설명요구권을 행사하다`, `설명 의무` — bảo đảm, thực hiện quyền yêu cầu giải thích và nghĩa vụ giải thích.

**자주 쓰는 문형과 성분:** `당사자가 A에 대해 설명요구권을 행사하다`에서 A는 거절·등급·추천 결과다. `설명요구권에 응답하다`도 자연스럽다.

**사회적 관계·주제별 register:** 플랫폼 이용자 지원에서는 권리 언어로, 행정·금융에서는 절차 언어로 쓰인다. 일상에서는 `왜 이런 결과가 나왔는지 물어볼 권리`라고 풀 수 있다.

**예문:** 이용자는 보험료가 오른 이유를 확인하려고 설명요구권을 행사했다.

**Dịch:** Người dùng thực hiện quyền yêu cầu giải thích để biết lý do phí bảo hiểm tăng.

**어휘 연결:** `설명요구권`은 이유를 묻는 권리이고, `이의제기권`은 결과에 다투거나 재검토를 요청하는 권리다. 설명이 있어야 이의 제기도 실질적으로 가능해진다.

**영어 참고:** *right to explanation* — quyền nhận được lời giải thích có ý nghĩa; không nhất thiết là quyền xem toàn bộ mã nguồn.

---

<!-- lexical_basis: contemporary_native_hot; target_type: contemporary_native_hot; register: human oversight and workplace AI adoption; source_lane: native_spoken; context: advanced-ethical-ai-and-algorithmic-auditing/native_spoken -->
### 인간우선원칙

**품사:** 명사

**핵심 의미:** 자동화의 속도나 효율보다 사람의 안전, 판단, 존엄과 통제 가능성을 우선해야 한다는 운영 원칙이다.

**베트남어 뜻:** nguyên tắc ưu tiên con người; nguyên tắc đặt an toàn, phán đoán, phẩm giá và quyền kiểm soát của con người lên trước hiệu quả tự động hóa.

**뉘앙스와 사용법:** AI를 쓰지 말자는 구호가 아니라, 사람이 검토하고 중단할 수 있는 역할을 설계하자는 뜻이다. 사람을 형식적으로만 끼워 넣는 `human washing`과 구별된다.

**재사용 가능한 콜로케이션·청크:** `인간우선원칙을 세우다`, `인간우선원칙에 따라 검토하다`, `인간 통제를 보장하다` — đặt nguyên tắc ưu tiên con người, rà soát theo nguyên tắc và bảo đảm kiểm soát của con người.

**자주 쓰는 문형과 성분:** `고위험 결정에 인간우선원칙을 적용하다`, `인간우선원칙에 따라 최종 승인을 사람이 맡다`가 자연스럽다.

**사회적 관계·주제별 register:** 기업 문화와 공공서비스 설명에서 쓰이는 contemporary 담화어다. 구체적인 승인권·중단권을 함께 말해야 공허한 표어가 되지 않는다.

**예문:** 채용팀은 인간우선원칙에 따라 추천 결과를 사람이 검토한 뒤에만 연락을 보내기로 했다.

**Dịch:** Theo nguyên tắc ưu tiên con người, nhóm tuyển dụng chỉ liên hệ sau khi một người đã xem xét kết quả gợi ý.

**어휘 연결:** `인간우선원칙`은 설계와 운영의 가치 원칙이고, `인간 개입`은 특정 단계에 사람이 실제로 판단하는 절차다. 원칙이 있어도 개입 권한이 없으면 실효성이 약하다.

**영어 참고:** *human-first principle* — nguyên tắc thiết kế lấy an toàn và quyền kiểm soát của con người làm ưu tiên; cần cụ thể hóa bằng quyền hạn.

---

<!-- lexical_basis: advanced_native; target_type: advanced_native; register: model lifecycle and safety governance; source_lane: news_formal; context: advanced-ethical-ai-and-algorithmic-auditing/news_formal -->
### 퇴출기준

**품사:** 명사

**핵심 의미:** 모델이나 자동화 기능을 더 이상 사용하지 않고 중단·교체·폐기할지 판단하는 사전에 정한 조건이다.

**베트남어 뜻:** tiêu chí loại bỏ/ngừng sử dụng; điều kiện định trước để dừng, thay thế hoặc khai tử một mô hình hay tính năng tự động.

**뉘앙스와 사용법:** 새 모델을 출시하는 기준만큼이나 실패한 시스템을 멈추는 기준이 중요하다는 뜻을 담는다. 손실이 커진 뒤 임의로 판단하지 않도록 수치와 책임자를 미리 정한다.

**재사용 가능한 콜로케이션·청크:** `퇴출기준을 마련하다`, `퇴출기준을 충족하다`, `모델을 퇴출하다` — lập tiêu chí, đáp ứng tiêu chí và loại bỏ mô hình.

**자주 쓰는 문형과 성분:** `A가 퇴출기준을 넘다`에서 A는 오류율·민원·보안 사고다. `기준 충족 시 B를 중단하다`에서 B는 추천·자동 승인 기능이다.

**사회적 관계·주제별 register:** 안전위원회와 제품 수명주기 관리의 공식어다. 팀 대화에서는 `문제가 커지면 언제 서비스를 끌지 정한 선`이라고 설명한다.

**예문:** 배포후감시에서 집단별오류율이 퇴출기준을 넘으면 서비스는 자동으로 읽기 전용 모드로 전환된다.

**Dịch:** Nếu tỷ lệ lỗi theo nhóm vượt tiêu chí loại bỏ trong giám sát sau triển khai, dịch vụ sẽ tự chuyển sang chế độ chỉ đọc.

**어휘 연결:** `퇴출기준`은 중단을 결정하는 문턱이고, `배포전검증`은 출시 전에 위험을 확인하는 절차다. 기준이 있어야 검증 결과가 실제 hành động으로 이어진다.

**영어 참고:** *decommissioning threshold* — ngưỡng để dừng hoặc loại bỏ một hệ thống; nhấn mạnh quyết định cuối vòng đời.

## 읽기: 출시 전후의 책임 지도

제품팀은 새 심사 모델을 출시하기 전에 데이터시트와 데이터대표성을 다시 검토했다. 표본편향이 의심되는 지역은 별도로 분석하고, 인과공정성과 집단별오류율을 함께 측정해 공정성상충을 기록했다. 평가프로토콜에 반사실검증을 넣어 조건 하나만 바꿨을 때 결과가 부당하게 달라지는지도 확인했다. 배포전검증이 끝난 뒤에도 위험등록부와 감사증적을 갱신하고, 이용자가 설명요구권을 행사할 통로를 열어 두었다. 팀은 인간우선원칙에 따라 중요한 결정에는 담당자의 승인을 남겼으며, 배포후감시에서 피해가 반복되면 퇴출기준에 따라 모델을 중단하기로 했다.

<!-- passage_word_count: 60 Korean eojeol; target_set: 데이터시트, 데이터대표성, 표본편향, 인과공정성, 집단별오류율, 공정성상충, 반사실검증, 배포전검증, 배포후감시, 위험등록부, 평가프로토콜, 감사증적, 설명요구권, 인간우선원칙, 퇴출기준; target_set_coverage: 15/15 -->

**Dịch:** Trước khi phát hành mô hình thẩm định mới, nhóm sản phẩm xem lại datasheet và tính đại diện của dữ liệu. Họ phân tích riêng những khu vực nghi có thiên lệch mẫu, đồng thời đo công bằng nhân quả và tỷ lệ lỗi theo nhóm để ghi nhận sự đánh đổi giữa các tiêu chí công bằng. Họ đưa kiểm chứng phản thực vào giao thức đánh giá để kiểm tra xem kết quả có thay đổi bất công khi chỉ đổi một điều kiện hay không. Sau khi xác minh trước triển khai, nhóm vẫn cập nhật sổ đăng ký rủi ro và dấu vết kiểm toán, đồng thời mở kênh để người dùng thực hiện quyền yêu cầu giải thích. Theo nguyên tắc ưu tiên con người, các quyết định quan trọng phải có phê duyệt của người phụ trách; nếu thiệt hại lặp lại trong giám sát sau triển khai, mô hình sẽ bị dừng theo tiêu chí loại bỏ.
