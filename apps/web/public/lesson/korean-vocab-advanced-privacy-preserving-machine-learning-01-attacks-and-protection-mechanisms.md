<!-- source_policy: original explanations, examples, and passage; no source wording is reproduced -->

# 학습 모델의 정보 노출을 진단하고 보호 강도를 조정하는 말

프라이버시 보존형 머신러닝에서는 데이터를 서버로 보내지 않는다는 설명만으로 안전성을 판단할 수 없다. 모델의 출력, 파라미터 업데이트, 참여자 간 집계 과정에 남는 단서를 공격자가 어떻게 이용하는지 확인한 뒤 보호 강도와 모델 성능을 함께 조정해야 한다.

<!-- lexical_basis: advanced_native; register: AI security and privacy evaluation; source_lane: news_formal; context: advanced-privacy-preserving-machine-learning/news_formal -->
### 멤버십 추론 공격

**품사:** 명사

**핵심 의미:** 특정 기록이나 사람이 모델의 학습 데이터에 포함됐는지를 모델 출력과 보조 정보를 이용해 추정하는 공격이다.

**베트남어 뜻:** tấn công suy luận thành viên, đoán một bản ghi có nằm trong dữ liệu huấn luyện hay không.

**뉘앙스와 사용법:** `멤버십 추론 공격`은 이름이나 원자료를 직접 복원하는 것보다 먼저, 참여 여부라는 이진 단서를 노린다. 과적합이 심하거나 출력 확률을 지나치게 자세히 공개하는 모델에서 위험이 커질 수 있다.

**재사용 가능한 콜로케이션·청크:** `멤버십 추론 공격을 수행하다`, `학습 포함 여부를 추론하다`, `추론 공격에 대한 방어 성능` — thực hiện tấn công, suy luận việc có nằm trong dữ liệu học và đánh giá khả năng phòng vệ.

**자주 쓰는 문형과 성분:** `공격자가 A의 학습 포함 여부를 멤버십 추론 공격으로 판단하다`가 자연스럽다. A에는 환자 기록·사진·사용자 계정이 온다.

**사회적 관계·주제별 register:** 모델 감사와 개인정보 영향평가의 전문어다. 일반 이용자에게는 `이 모델이 내 기록을 학습했는지 맞혀 보는 공격`이라고 풀어 말한다.

**예문:** 연구팀은 모델의 확률 출력을 줄여 멤버십 추론 공격의 성공률을 낮췄다.

**Dịch:** Nhóm nghiên cứu giảm đầu ra xác suất của mô hình để hạ tỷ lệ thành công của tấn công suy luận thành viên.

**어휘 연결:** `멤버십 추론 공격`은 포함 여부를 묻고, `재식별 공격`은 가려진 데이터에서 신원을 되찾으려 한다. 둘 다 추론을 쓰지만 목표가 다르다.

**영어 참고:** *membership inference attack* — tấn công suy đoán một mẫu cụ thể có được dùng để huấn luyện mô hình hay không.

---

<!-- lexical_basis: advanced_native; register: model security and privacy research; source_lane: news_formal; context: advanced-privacy-preserving-machine-learning/news_formal -->
### 모델 반전 공격

**품사:** 명사

**핵심 의미:** 모델의 출력이나 내부 동작을 거꾸로 분석해 학습 데이터의 특징이나 대표적인 입력을 복원하려는 공격이다.

**베트남어 뜻:** tấn công đảo ngược mô hình, suy ngược đặc trưng hoặc đầu vào từ hoạt động của mô hình.

**뉘앙스와 사용법:** `모델 반전 공격`은 원본 파일을 그대로 꺼낸다는 뜻이 아니라, 모델이 학습한 민감한 특징을 공격자가 재구성한다는 의미다. 얼굴·의료 정보처럼 특징 자체가 민감한 영역에서 특히 문제가 된다.

**재사용 가능한 콜로케이션·청크:** `모델 반전 공격을 시뮬레이션하다`, `민감한 특징을 복원하다`, `반전 공격의 재구성 품질` — mô phỏng, khôi phục đặc trưng nhạy cảm và đánh giá chất lượng tái dựng.

**자주 쓰는 문형과 성분:** `공격자가 A에서 B를 모델 반전 공격으로 복원하다`가 자연스럽다. A에는 분류 API·생성 모델, B에는 얼굴 특징·진료 패턴이 온다.

**사회적 관계·주제별 register:** AI 보안 논문과 서비스 출시 심사에서 쓰는 고급 기술어다. 제품팀에는 `모델의 응답만 보고 민감한 입력의 특징을 되살리는 공격`이라고 설명한다.

**예문:** 얼굴 인식 API는 모델 반전 공격으로 개인의 생체 특징이 드러나지 않는지 별도 시험을 받아야 한다.

**Dịch:** API nhận diện khuôn mặt cần được kiểm tra riêng để bảo đảm các đặc trưng sinh trắc của cá nhân không bị lộ qua tấn công đảo ngược mô hình.

**어휘 연결:** `모델 반전 공격`은 학습한 입력의 특징을 복원하고, `모델 추출 공격`은 기능이 비슷한 대체 모델을 복제하려 한다.

**영어 참고:** *model inversion attack* — tấn công suy ngược hoạt động mô hình để tái dựng đặc trưng nhạy cảm của dữ liệu học.

---

<!-- lexical_basis: advanced_native; register: adversarial ML and privacy assessment; source_lane: news_formal; context: advanced-privacy-preserving-machine-learning/news_formal -->
### 속성 추론 공격

**품사:** 명사

**핵심 의미:** 모델이나 공개된 통계에 드러난 패턴을 이용해 데이터 집단의 숨겨진 속성을 추정하는 공격이다.

**베트남어 뜻:** tấn công suy luận thuộc tính, đoán thuộc tính ẩn của nhóm dữ liệu từ các mẫu lộ ra.

**뉘앙스와 사용법:** `속성 추론 공격`은 특정 사람의 기록을 복원하지 않아도, 그 사람이 속한 집단의 질환·정치 성향·민감한 특성을 추론할 수 있다. 개인 단위가 아니라 집단 단위의 피해도 프라이버시 문제로 다룬다는 점이 핵심이다.

**재사용 가능한 콜로케이션·청크:** `속성 추론 공격을 방어하다`, `숨겨진 속성을 추정하다`, `집단 속성의 노출 위험` — phòng vệ, ước đoán thuộc tính ẩn và đánh giá rủi ro lộ thuộc tính nhóm.

**자주 쓰는 문형과 성분:** `공격자가 A의 출력에서 B를 속성 추론 공격으로 알아내다`가 자연스럽다. A에는 추천 모델·검색 결과, B에는 민감한 집단 특성이 온다.

**사회적 관계·주제별 register:** 공정성·프라이버시 감사와 AI 영향평가의 분석어다. 비전문가에게는 `개인의 이름은 몰라도 그 사람이 속한 집단의 민감한 성격을 맞히는 공격`이라고 한다.

**예문:** 연구진은 추천 결과만으로 이용자의 건강 관심사가 드러나는지 속성 추론 공격을 실시했다.

**Dịch:** Nhóm nghiên cứu tiến hành tấn công suy luận thuộc tính để xem chỉ từ kết quả gợi ý có thể làm lộ mối quan tâm sức khỏe của người dùng hay không.

**어휘 연결:** `속성 추론 공격`은 숨은 성질을 묻고, `멤버십 추론 공격`은 학습 데이터 포함 여부를 묻는다. `재식별`처럼 이름을 되찾는 공격과도 구별된다.

**영어 참고:** *attribute inference attack* — tấn công suy ra thuộc tính nhạy cảm từ đầu ra hoặc mẫu thống kê của mô hình.

---

<!-- lexical_basis: advanced_native; register: generative AI security and data governance; source_lane: news_formal; context: advanced-privacy-preserving-machine-learning/news_formal -->
### 학습 데이터 추출

**품사:** 명사

**핵심 의미:** 모델에 반복적으로 질의하거나 내부 신호를 분석해 학습 자료의 문장·이미지·기록을 그대로 또는 가깝게 끌어내는 현상이나 공격이다.

**베트남어 뜻:** trích xuất dữ liệu huấn luyện, lấy lại nguyên văn hoặc gần nguyên văn dữ liệu đã dùng để học.

**뉘앙스와 사용법:** `학습 데이터 추출`은 통계적 유사성만으로는 부족하고, 특정 문구나 개인 정보가 모델 응답에 재현되는지를 문제 삼는다. 암기된 데이터와 새로 생성된 일반화 결과를 구분하는 검증이 필요하다.

**재사용 가능한 콜로케이션·청크:** `학습 데이터 추출을 시도하다`, `암기된 문구를 추출하다`, `추출 위험을 점검하다` — thử trích xuất, lấy lại câu đã ghi nhớ và kiểm tra rủi ro.

**자주 쓰는 문형과 성분:** `공격자가 A에서 B를 학습 데이터 추출로 끌어내다`가 자연스럽다. A에는 대화형 모델·이미지 생성 모델, B에는 비공개 문서·개인 식별자가 온다.

**사회적 관계·주제별 register:** 생성형 AI 안전성, 저작권, 개인정보 검토에서 쓰이는 전문어다. 사용자 안내에서는 `모델이 배운 비공개 자료를 답변으로 되풀이하는 위험`이라고 풀어 말한다.

**예문:** 서비스 운영자는 학습 데이터 추출을 막기 위해 비공개 문서가 포함된 프롬프트에 대한 출력 검사를 강화했다.

**Dịch:** Nhà vận hành dịch vụ tăng cường kiểm tra đầu ra với các prompt chứa tài liệu không công khai để ngăn việc trích xuất dữ liệu huấn luyện.

**어휘 연결:** `학습 데이터 추출`은 원자료의 재현을 노리고, `모델 반전 공격`은 입력의 특징을 재구성한다. 전자는 문장·기록의 암기 여부가 더 직접적인 쟁점이다.

**영어 참고:** *training data extraction* — khôi phục dữ liệu cụ thể mà mô hình đã ghi nhớ trong quá trình huấn luyện.

---

<!-- lexical_basis: advanced_native; register: AI platform security and intellectual property; source_lane: native_spoken; context: advanced-privacy-preserving-machine-learning/native_spoken -->
### 모델 추출 공격

**품사:** 명사

**핵심 의미:** 공개된 모델 API에 질의한 결과를 모아 원래 모델과 비슷하게 작동하는 대체 모델을 만들어 내는 공격이다.

**베트남어 뜻:** tấn công trích xuất mô hình, sao chép chức năng của mô hình qua các truy vấn API.

**뉘앙스와 사용법:** `모델 추출 공격`은 개인정보만의 문제가 아니라 모델 가중치와 서비스 경쟁력의 도용 문제이기도 하다. 출력 확률을 자세히 공개하거나 질의 비용을 낮게 두면 복제가 쉬워질 수 있다.

**재사용 가능한 콜로케이션·청크:** `모델 추출 공격을 탐지하다`, `API 질의를 제한하다`, `대체 모델을 복제하다` — phát hiện, hạn chế truy vấn API và sao chép mô hình thay thế.

**자주 쓰는 문형과 성분:** `공격자가 A API의 응답을 모아 B를 모델 추출 공격으로 복제하다`가 자연스럽다. A에는 분류·추천 API, B에는 예측 기능과 결정 경계가 온다.

**사회적 관계·주제별 register:** AI 제품 보안과 지식재산권 회의에서 쓰이는 실무어다. 경영진에게는 `서비스에 계속 물어보며 비슷한 모델을 만드는 행위`라고 설명한다.

**예문:** 회사는 모델 추출 공격을 줄이려고 비정상적인 반복 질의를 감지하고 응답 세부도를 낮췄다.

**Dịch:** Công ty phát hiện các truy vấn lặp lại bất thường và giảm độ chi tiết của phản hồi để giảm tấn công trích xuất mô hình.

**어휘 연결:** `모델 추출 공격`은 모델의 기능과 지식재산을 복제하고, `학습 데이터 추출`은 모델이 기억한 특정 자료를 끌어낸다.

**영어 참고:** *model extraction attack* — tấn công thu thập đầu ra của API để tái tạo một mô hình có chức năng tương tự.

---

<!-- lexical_basis: advanced_native; register: federated learning and privacy leakage research; source_lane: news_formal; context: advanced-privacy-preserving-machine-learning/news_formal -->
### 그래디언트 누출

**품사:** 명사

**핵심 의미:** 학습 과정에서 공유된 그래디언트나 모델 업데이트를 분석해 참여자의 입력이나 민감한 특징이 드러나는 현상이다.

**베트남어 뜻:** rò rỉ gradient, lộ dữ liệu đầu vào hoặc đặc trưng nhạy cảm từ cập nhật học máy.

**뉘앙스와 사용법:** `그래디언트 누출`은 원자료를 직접 전송하지 않는 연합학습에서도 생길 수 있다. 배치 크기, 업데이트 반복, 모델 구조와 공격자의 보조 지식에 따라 복원 가능성이 달라진다.

**재사용 가능한 콜로케이션·청크:** `그래디언트 누출을 분석하다`, `업데이트에서 정보를 복원하다`, `누출 가능성을 낮추다` — phân tích, khôi phục thông tin từ cập nhật và giảm khả năng rò rỉ.

**자주 쓰는 문형과 성분:** `공격자가 A 업데이트에서 B를 그래디언트 누출로 복원하다`가 자연스럽다. A에는 클라이언트 업데이트, B에는 이미지·문장·민감한 특징이 온다.

**사회적 관계·주제별 register:** 연합학습 보안 검증과 연구 보고서의 전문어다. 실무 회의에서는 `원자료를 안 보내도 업데이트 숫자에서 정보가 새는 문제`라고 한다.

**예문:** 서버가 개별 클라이언트의 업데이트를 그대로 보관하면 그래디언트 누출 위험을 무시하기 어렵다.

**Dịch:** Nếu máy chủ lưu nguyên cập nhật của từng client thì khó có thể bỏ qua rủi ro rò rỉ gradient.

**어휘 연결:** `그래디언트 누출`은 학습 신호에서 정보가 새는 현상이고, `보안 집계`는 개별 신호가 서버에 보이지 않도록 합치는 방어다.

**영어 참고:** *gradient leakage* — rò rỉ thông tin riêng tư từ gradient hoặc cập nhật được chia sẻ khi huấn luyện.

---

<!-- lexical_basis: contemporary_native_hot; register: ML operations and adversarial data security; source_lane: native_spoken; context: advanced-privacy-preserving-machine-learning/native_spoken -->
### 데이터 포이즈닝

**품사:** 명사

**핵심 의미:** 학습 데이터에 의도적으로 잘못된 표지나 조작된 사례를 섞어 모델의 예측과 일반화를 망가뜨리는 공격이다.

**베트남어 뜻:** đầu độc dữ liệu, cài dữ liệu bị thao túng để làm sai quá trình học.

**뉘앙스와 사용법:** `데이터 포이즈닝`은 단순한 수집 오류와 달리 공격자가 학습 결과를 바꾸려는 의도를 가진다. 전체 정확도를 떨어뜨리는 공격과 특정 입력만 오인시키는 공격을 구별해야 한다.

**재사용 가능한 콜로케이션·청크:** `데이터 포이즈닝을 탐지하다`, `오염된 표지를 제거하다`, `학습 파이프라인을 검증하다` — phát hiện đầu độc, loại nhãn nhiễm bẩn và xác minh pipeline.

**자주 쓰는 문형과 성분:** `공격자가 A에 B를 섞어 데이터 포이즈닝을 시도하다`가 자연스럽다. A에는 공개 학습 데이터·라벨 저장소, B에는 조작 이미지·거짓 표지가 온다.

**사회적 관계·주제별 register:** 모델 운영·데이터 큐레이션·AI 보안의 현재적 실무어다. 비개발자에게는 `학습 재료에 일부러 독을 타는 공격`이라고 풀어 말한다.

**예문:** 담당자는 외부에서 들어온 라벨을 그대로 쓰지 않고 데이터 포이즈닝 여부를 표본 검사했다.

**Dịch:** Người phụ trách không dùng nguyên nhãn nhận từ bên ngoài mà kiểm tra mẫu xem có bị đầu độc dữ liệu hay không.

**어휘 연결:** `데이터 포이즈닝`은 학습 자료를 오염시키고, `백도어 공격`은 특정 조건에서만 원하는 오작동이 나도록 심어 두는 더 표적화된 공격이다.

**영어 참고:** *data poisoning* — đưa dữ liệu hoặc nhãn bị thao túng vào tập huấn luyện để làm lệch hành vi mô hình.

---

<!-- lexical_basis: advanced_native; register: AI safety and adversarial ML; source_lane: news_formal; context: advanced-privacy-preserving-machine-learning/news_formal -->
### 백도어 공격

**품사:** 명사

**핵심 의미:** 평상시에는 정상처럼 보이지만 특정 패턴이나 트리거가 들어오면 공격자가 정한 오작동을 내도록 모델에 은밀한 조건을 심는 공격이다.

**베트남어 뜻:** tấn công cửa hậu, cài điều kiện ẩn khiến mô hình sai theo ý kẻ tấn công.

**뉘앙스와 사용법:** `백도어 공격`은 모든 입력을 망가뜨리는 것이 아니라 정상 성능을 유지하면서 특정 상황만 조작한다는 점이 중요하다. 학습 데이터·사전학습 모델·배포 파이프라인 어느 단계에서도 삽입될 수 있다.

**재사용 가능한 콜로케이션·청크:** `백도어 공격을 심다`, `트리거 패턴을 탐지하다`, `모델의 은밀한 오작동` — cài cửa hậu, phát hiện mẫu kích hoạt và kiểm tra lỗi ẩn.

**자주 쓰는 문형과 성분:** `공격자가 A에 B를 트리거로 백도어 공격을 심다`가 자연스럽다. A에는 분류 모델·사전학습 가중치, B에는 특정 픽셀·문구·표식이 온다.

**사회적 관계·주제별 register:** 공급망 보안·모델 안전성 평가의 강한 전문어다. 운영팀에는 `평소에는 멀쩡하지만 특정 신호에서만 조작되는 숨은 기능`이라고 설명한다.

**예문:** 배포 전 검증팀은 작은 표식이 붙은 이미지에서만 오분류가 생기는지 확인해 백도어 공격을 찾았다.

**Dịch:** Trước khi triển khai, nhóm kiểm thử kiểm tra xem có phân loại sai chỉ ở ảnh gắn dấu nhỏ hay không để tìm tấn công cửa hậu.

**어휘 연결:** `백도어 공격`은 숨은 트리거와 표적 오작동이 핵심이고, `데이터 포이즈닝`은 더 넓게 학습 분포나 표지를 오염시키는 공격이다.

**영어 참고:** *backdoor attack* — tấn công cài một điều kiện kích hoạt ẩn để mô hình hành xử sai theo mục đích.

---

<!-- lexical_basis: contemporary_native_hot; register: federated learning operations and cryptographic privacy; source_lane: native_spoken; context: advanced-privacy-preserving-machine-learning/native_spoken -->
### 보안 집계

**품사:** 명사

**핵심 의미:** 여러 참여자의 업데이트를 서버가 개별 값으로 보지 못한 채 합계나 평균만 계산하도록 하는 보호 절차다.

**베트남어 뜻:** tổng hợp an toàn, cơ chế chỉ cho phép thấy kết quả gộp thay vì cập nhật riêng lẻ.

**뉘앙스와 사용법:** `보안 집계`는 참여자 각각의 데이터를 없애는 기술이 아니라, 서버가 개별 업데이트를 관찰하지 못하게 하는 집계 계층이다. 참여자가 중간에 이탈하거나 악의적으로 행동할 때도 복구 가능한지가 운영의 핵심이다.

**재사용 가능한 콜로케이션·청크:** `보안 집계를 적용하다`, `개별 업데이트를 숨기다`, `집계 결과만 서버에 전달하다` — áp dụng, che cập nhật riêng và chỉ chuyển kết quả gộp.

**자주 쓰는 문형과 성분:** `서버가 A를 보안 집계로 합산하다`, `참여자들이 B를 숨긴 채 업데이트하다`가 자연스럽다. A에는 그래디언트·모델 업데이트, B에는 개별 기여값이 온다.

**사회적 관계·주제별 register:** 연합학습 플랫폼과 제품 보안 회의에서 현재 쓰이는 기술어다. 기획자에게는 `서버가 각자의 숫자는 못 보고 합친 숫자만 받는 방식`이라고 한다.

**예문:** 모바일 키보드 팀은 보안 집계를 켠 뒤 개별 사용자의 업데이트를 서버 로그에서 제외했다.

**Dịch:** Nhóm bàn phím di động bật tổng hợp an toàn rồi loại cập nhật của từng người dùng khỏi nhật ký máy chủ.

**어휘 연결:** `보안 집계`는 개별 업데이트를 감추는 프로토콜이고, `강건 집계`는 악의적이거나 이상한 업데이트가 섞여도 결과를 안정화하는 통계적 방어다. 둘은 함께 쓸 수 있다.

**영어 참고:** *secure aggregation* — giao thức để máy chủ chỉ nhận tổng hoặc trung bình mà không thấy đóng góp riêng của từng bên.

---

<!-- lexical_basis: advanced_native; register: federated optimization and adversarial robustness; source_lane: news_formal; context: advanced-privacy-preserving-machine-learning/news_formal -->
### 강건 집계

**품사:** 명사

**핵심 의미:** 일부 참여자의 이상치나 악의적인 업데이트가 전체 모델을 크게 흔들지 않도록 중앙값·절사평균 등으로 결합하는 집계 방식이다.

**베트남어 뜻:** tổng hợp vững, cách gộp giảm ảnh hưởng của cập nhật bất thường hoặc độc hại.

**뉘앙스와 사용법:** `강건 집계`는 개인정보를 숨기는 것 자체보다 모델 학습의 무결성과 안정성을 지키는 데 초점을 둔다. 정상 참여자의 분포가 서로 크게 다르면 방어 규칙이 정당한 업데이트까지 잘라낼 수 있다.

**재사용 가능한 콜로케이션·청크:** `강건 집계 규칙`, `이상치 업데이트를 완화하다`, `악성 참여자를 견디다` — quy tắc, giảm cập nhật ngoại lai và chịu được bên tham gia độc hại.

**자주 쓰는 문형과 성분:** `서버가 A를 강건 집계로 결합하다`, `집계가 B의 영향을 줄이다`가 자연스럽다. A에는 클라이언트 그래디언트, B에는 이상치·공격성 업데이트가 온다.

**사회적 관계·주제별 register:** 분산 최적화·연합학습 보안 연구의 전문어다. 운영 회의에서는 `튀는 업데이트가 모델 전체를 망치지 않게 합치는 규칙`이라고 설명한다.

**예문:** 참여 기관의 규모가 다른 환경에서는 강건 집계가 정상적인 지역 차이와 공격성 업데이트를 함께 구분해야 한다.

**Dịch:** Trong môi trường các cơ quan tham gia có quy mô khác nhau, tổng hợp vững phải phân biệt cả khác biệt địa phương bình thường lẫn cập nhật mang tính tấn công.

**어휘 연결:** `강건 집계`는 이상치에 대한 통계적 내성을 높이고, `보안 집계`는 개별 값의 관찰을 막는다. 전자는 무결성, 후자는 개별 기여값의 비공개가 중심이다.

**영어 참고:** *robust aggregation* — tổng hợp cập nhật theo cách giảm ảnh hưởng của ngoại lai hoặc bên tham gia độc hại.

---

<!-- lexical_basis: contemporary_native_hot; register: differential privacy engineering and federated ML; source_lane: native_spoken; context: advanced-privacy-preserving-machine-learning/native_spoken -->
### 그래디언트 클리핑

**품사:** 명사

**핵심 의미:** 그래디언트의 크기가 정한 임계값을 넘지 않도록 줄여 업데이트의 영향력과 민감도를 제한하는 처리다.

**베트남어 뜻:** cắt ngưỡng gradient, giới hạn độ lớn của cập nhật trước khi tổng hợp hoặc thêm nhiễu.

**뉘앙스와 사용법:** `그래디언트 클리핑`은 폭주하는 학습을 안정시키는 동시에 차등프라이버시에서 한 샘플의 영향 범위를 제한하는 데 쓰인다. 임계값이 너무 낮으면 정확도와 학습 속도가 나빠질 수 있다.

**재사용 가능한 콜로케이션·청크:** `그래디언트 클리핑을 적용하다`, `클리핑 임계값을 조정하다`, `업데이트 norm을 제한하다` — áp dụng, điều chỉnh ngưỡng và giới hạn chuẩn của cập nhật.

**자주 쓰는 문형과 성분:** `팀이 A에 그래디언트 클리핑을 적용하다`, `임계값이 B의 영향 범위를 제한하다`가 자연스럽다. A에는 로컬 업데이트·샘플별 그래디언트, B에는 개별 기록이 온다.

**사회적 관계·주제별 register:** ML 인프라와 프라이버시 학습 실무에서 자주 쓰는 기술어다. 비개발자에게는 `한 번의 업데이트가 너무 큰 목소리를 내지 못하게 줄이는 것`이라고 풀어 말한다.

**예문:** 프라이버시 예산을 지키려면 그래디언트 클리핑 임계값과 노이즈 크기를 함께 검증해야 한다.

**Dịch:** Để giữ ngân sách riêng tư, cần xác minh đồng thời ngưỡng cắt gradient và độ lớn nhiễu.

**어휘 연결:** `그래디언트 클리핑`은 신호의 크기를 제한하고, `프라이버시 증폭`은 샘플링이나 집계 구조를 이용해 같은 노이즈에서도 보호 효과를 키우는 접근이다.

**영어 참고:** *gradient clipping* — giới hạn độ lớn gradient để ổn định huấn luyện và kiểm soát độ nhạy của cập nhật.

---

<!-- lexical_basis: advanced_native; register: differential privacy theory and statistical learning; source_lane: news_formal; context: advanced-privacy-preserving-machine-learning/news_formal -->
### 프라이버시 증폭

**품사:** 명사

**핵심 의미:** 무작위 샘플링이나 여러 참여자의 집계처럼 데이터가 관측되는 방식을 활용해 동일한 처리에서도 차등프라이버시 보호 효과가 커지는 현상이나 기법이다.

**베트남어 뜻:** khuếch đại quyền riêng tư, tăng hiệu quả bảo vệ nhờ lấy mẫu hoặc cấu trúc tổng hợp.

**뉘앙스와 사용법:** `프라이버시 증폭`은 노이즈를 무조건 더 넣는다는 뜻이 아니다. 실제로 어떤 표본 추출과 참여 가정이 성립하는지 계산해야 하며, 보호 효과가 자동으로 모든 공격을 막아 주는 것은 아니다.

**재사용 가능한 콜로케이션·청크:** `샘플링으로 프라이버시 증폭을 얻다`, `증폭 효과를 계산하다`, `보호 보장을 강화하다` — đạt khuếch đại nhờ lấy mẫu, tính hiệu ứng và tăng bảo đảm.

**자주 쓰는 문형과 성분:** `A가 B에서 프라이버시 증폭을 제공하다`, `샘플링이 C의 보호 수준을 높이다`가 자연스럽다. A에는 무작위 참여 절차, B에는 연합학습 라운드, C에는 개별 사용자 정보가 온다.

**사회적 관계·주제별 register:** 차등프라이버시 이론과 대규모 ML 시스템 설계의 고급어다. 설계 문서에서는 `일부만 무작위로 뽑아 관찰하면 개인별 노출이 줄어드는 효과`라고 설명한다.

**예문:** 참여자를 무작위로 일부만 선택하는 방식은 연합학습에서 프라이버시 증폭을 만들어 낼 수 있다.

**Dịch:** Việc chỉ chọn ngẫu nhiên một phần người tham gia có thể tạo ra hiệu ứng khuếch đại quyền riêng tư trong học liên kết.

**어휘 연결:** `프라이버시 증폭`은 보호 보장을 강화하는 분석 효과이고, `프라이버시 예산`은 허용된 누적 손실의 한도다. 증폭이 있어도 예산 계산은 필요하다.

**영어 참고:** *privacy amplification* — hiệu ứng làm mạnh bảo vệ riêng tư nhờ lấy mẫu hoặc gộp dữ liệu trong cơ chế ngẫu nhiên.

---

<!-- lexical_basis: advanced_native; register: privacy accounting and AI assurance; source_lane: news_formal; context: advanced-privacy-preserving-machine-learning/news_formal -->
### 프라이버시 회계

**품사:** 명사

**핵심 의미:** 여러 학습 라운드와 질의에 사용된 차등프라이버시 손실을 누적해 전체 보호 보장을 계산하고 관리하는 절차다.

**베트남어 뜻:** hạch toán quyền riêng tư, cộng dồn tổn thất riêng tư qua nhiều lần xử lý.

**뉘앙스와 사용법:** `프라이버시 회계`는 단일 실행의 수치가 아니라 반복된 메커니즘의 조합을 추적한다. 같은 예산을 이미 사용한 뒤에도 계속 공개할 수 있는지 판단하게 해 주므로 운영 중 모니터링이 중요하다.

**재사용 가능한 콜로케이션·청크:** `프라이버시 회계를 수행하다`, `누적 손실을 계산하다`, `회계 결과를 공개하다` — thực hiện, tính tổn thất tích lũy và công bố kết quả.

**자주 쓰는 문형과 성분:** `감사팀이 A의 프라이버시 회계를 관리하다`, `회계가 B의 누적 보장을 산출하다`가 자연스럽다. A에는 학습 파이프라인·공개 통계, B에는 사용자 단위 보호 수치가 온다.

**사회적 관계·주제별 register:** AI 감사·차등프라이버시 구현·규제 보고서의 전문어다. 운영팀에는 `여러 번 학습하고 공개한 뒤 보호 한도가 얼마나 남았는지 장부처럼 추적하는 일`이라고 한다.

**예문:** 모델 버전이 바뀔 때마다 프라이버시 회계 기록을 갱신하지 않으면 전체 보장을 과대평가할 수 있다.

**Dịch:** Nếu không cập nhật sổ theo dõi quyền riêng tư mỗi khi đổi phiên bản mô hình, có thể đánh giá quá cao mức bảo đảm tổng thể.

**어휘 연결:** `프라이버시 회계`는 손실을 누적해 계산하는 절차이고, `프라이버시 증폭`은 그 계산에서 보호 효과를 더 크게 인정할 수 있는 구조적 현상이다.

**영어 참고:** *privacy accounting* — quy trình tính và theo dõi tổng bảo đảm riêng tư qua nhiều cơ chế hoặc vòng huấn luyện.

---

<!-- lexical_basis: advanced_native; register: federated learning and local privacy; source_lane: news_formal; context: advanced-privacy-preserving-machine-learning/news_formal -->
### 로컬 차등프라이버시

**품사:** 명사

**핵심 의미:** 중앙 서버에 보내기 전에 각 기기나 참여자가 자신의 데이터 또는 업데이트에 무작위성을 더해 개별 정보까지 보호하는 차등프라이버시 방식이다.

**베트남어 뜻:** quyền riêng tư vi sai cục bộ, thêm nhiễu ngay tại thiết bị trước khi gửi dữ liệu.

**뉘앙스와 사용법:** `로컬 차등프라이버시`는 서버를 완전히 신뢰하지 않아도 된다는 장점이 있지만, 각 참여자가 먼저 노이즈를 넣으므로 정확도와 통신 효율이 낮아질 수 있다. 중앙에서 한 번에 보호하는 방식과 위협 모델이 다르다.

**재사용 가능한 콜로케이션·청크:** `로컬 차등프라이버시를 적용하다`, `기기에서 노이즈를 추가하다`, `사용자 단위 보장을 제공하다` — áp dụng, thêm nhiễu trên thiết bị và cung cấp bảo đảm ở cấp người dùng.

**자주 쓰는 문형과 성분:** `기기가 A에 로컬 차등프라이버시를 적용해 B로 전송하다`가 자연스럽다. A에는 키 입력·사용 통계, B에는 노이즈가 포함된 업데이트가 온다.

**사회적 관계·주제별 register:** 모바일 분석·연합학습·개인정보 연구의 전문어다. 이용자에게는 `서버로 보내기 전에 내 기기에서 먼저 보호 처리를 하는 방식`이라고 설명한다.

**예문:** 로컬 차등프라이버시는 중앙 서버 운영자를 신뢰하기 어려운 서비스에서 유용하지만 정확도 손실을 측정해야 한다.

**Dịch:** Quyền riêng tư vi sai cục bộ hữu ích khi khó tin máy chủ trung tâm, nhưng phải đo mức suy giảm độ chính xác.

**어휘 연결:** `로컬 차등프라이버시`는 각 참여자 쪽에서 먼저 보호하고, 기존의 중앙 차등프라이버시는 신뢰된 수집 지점에서 집계 후 보호할 수 있다. 같은 이름의 보장이라도 적용 위치가 다르다.

**영어 참고:** *local differential privacy* — bảo vệ dữ liệu bằng cách ngẫu nhiên hóa ngay tại phía người dùng hoặc thiết bị trước khi gửi.

---

<!-- lexical_basis: advanced_native; register: federated optimization and privacy-utility analysis; source_lane: native_spoken; context: advanced-privacy-preserving-machine-learning/native_spoken -->
### 클라이언트 이질성

**품사:** 명사

**핵심 의미:** 연합학습에 참여하는 기기나 기관마다 데이터 분포, 계산 자원, 통신 상태와 업데이트 방향이 서로 다른 성질이다.

**베트남어 뜻:** tính không đồng nhất giữa các client, sự khác nhau về dữ liệu và điều kiện của các bên tham gia.

**뉘앙스와 사용법:** `클라이언트 이질성`은 단순한 장비 성능 차이만 가리키지 않는다. 지역·사용자 집단마다 데이터가 달라 한 모델을 함께 학습할 때 정확도, 공정성, 프라이버시 회계가 모두 영향을 받는다는 뜻이다.

**재사용 가능한 콜로케이션·청크:** `클라이언트 이질성을 고려하다`, `이질적인 데이터 분포`, `참여자별 편차를 완화하다` — cân nhắc, phân phối dữ liệu không đồng nhất và giảm chênh lệch.

**자주 쓰는 문형과 성분:** `A가 클라이언트 이질성 때문에 B를 보이다`가 자연스럽다. A에는 연합 모델·집계 성능, B에는 수렴 지연·지역별 정확도 격차가 온다.

**사회적 관계·주제별 register:** 연합학습 운영과 모델 성능 검토에서 쓰는 실무 전문어다. 비개발자에게는 `참여하는 기기와 기관마다 가진 데이터와 조건이 달라서 생기는 차이`라고 풀어 말한다.

**예문:** 클라이언트 이질성이 큰 환경에서는 한 번의 평균 업데이트만으로 모든 지역의 성능을 대표하기 어렵다.

**Dịch:** Trong môi trường có tính không đồng nhất giữa client lớn, khó dùng một cập nhật trung bình duy nhất để đại diện cho hiệu năng ở mọi khu vực.

**어휘 연결:** `클라이언트 이질성`은 참여자 조건의 차이를 설명하고, `강건 집계`는 그 차이와 악성 업데이트가 섞인 상황에서 결합 규칙을 안정화한다. 이질성이 곧 공격을 뜻하는 것은 아니다.

**영어 참고:** *client heterogeneity* — sự khác nhau giữa các bên tham gia về dữ liệu, tài nguyên, kết nối và hướng cập nhật.

## 읽기: 연합 모델 출시 전의 공격과 방어 점검

<!-- passage_word_count: 111 Korean eojeol; target_set: 멤버십 추론 공격, 모델 반전 공격, 속성 추론 공격, 학습 데이터 추출, 모델 추출 공격, 그래디언트 누출, 데이터 포이즈닝, 백도어 공격, 보안 집계, 강건 집계, 그래디언트 클리핑, 프라이버시 증폭, 프라이버시 회계, 로컬 차등프라이버시, 클라이언트 이질성; target_set_coverage: 15/15 -->

연합 모델 출시를 앞두고 보안팀은 멤버십 추론 공격, 모델 반전 공격, 속성 추론 공격을 차례로 시험했다. 생성형 모듈에서는 학습 데이터 추출과 모델 추출 공격이 가능한지 확인하고, 클라이언트 업데이트를 가로채 그래디언트 누출이 생기는지도 살폈다. 데이터 저장소에는 데이터 포이즈닝과 백도어 공격 흔적이 없는지 표본 검사를 했다. 서버는 보안 집계로 개별 업데이트를 숨기고, 강건 집계로 이상치와 악성 신호의 영향을 줄였다. 각 기기의 그래디언트 클리핑 임계값을 조정한 뒤 무작위 참여에 따른 프라이버시 증폭을 프라이버시 회계에 반영했다. 검토 회의에서는 어떤 공격 가정과 보호 실패가 남아 있는지 기록하고, 이용자에게 기술 이름보다 실제 노출 범위를 설명하기로 했다. 로컬 차등프라이버시를 적용하면 보호는 강해지지만 클라이언트 이질성 때문에 지역별 정확도 차이가 커질 수 있어, 팀은 성능과 보호 수준을 함께 공개하기로 했다.

**Dịch:** Trước khi ra mắt mô hình liên kết, nhóm an ninh lần lượt thử tấn công suy luận thành viên, tấn công đảo ngược mô hình và tấn công suy luận thuộc tính. Với mô-đun tạo sinh, họ kiểm tra khả năng trích xuất dữ liệu huấn luyện và tấn công trích xuất mô hình, đồng thời xem việc chặn cập nhật client có gây rò rỉ gradient hay không. Họ kiểm tra mẫu kho dữ liệu để tìm dấu vết đầu độc dữ liệu và tấn công cửa hậu. Máy chủ ẩn cập nhật riêng bằng tổng hợp an toàn, rồi dùng tổng hợp vững để giảm ảnh hưởng của ngoại lai và tín hiệu độc hại. Sau khi điều chỉnh ngưỡng cắt gradient của từng thiết bị, nhóm phản ánh hiệu ứng khuếch đại quyền riêng tư do chọn ngẫu nhiên vào sổ hạch toán quyền riêng tư. Quyền riêng tư vi sai cục bộ làm bảo vệ mạnh hơn, nhưng tính không đồng nhất giữa client có thể làm chênh lệch độ chính xác theo vùng tăng lên, nên nhóm quyết định công khai cả hiệu năng lẫn mức bảo vệ.
