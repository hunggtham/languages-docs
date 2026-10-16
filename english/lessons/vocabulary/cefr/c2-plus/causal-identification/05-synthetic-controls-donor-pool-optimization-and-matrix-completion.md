# C2+ Vocabulary 05 — Synthetic control methods, convex donor pool weighting, and matrix completion counterfactual recovery

This lesson explores advanced quantitative methodologies in causal inference and econometric policy evaluation, focusing on synthetic control methods, convex optimization of donor pools, matrix completion techniques, and high-dimensional counterfactual estimation.

---

## 1. penalized synthetic control estimator
- **IPA:** /sɪnˈθɛtɪk kənˈtroʊl ˈmɛθəd ˈɛstɪmeɪtər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong phân tích định lượng (e.g., *the penalized synthetic control estimator yielded robust causal estimates*).
- **Core meaning — English:** A data-driven statistical technique used in comparative case studies to estimate the effect of an intervention by constructing a weighted combination of control units that resembles the treated unit in the pre-intervention period.
- **Core meaning & mental image — Tiếng Việt:** Ước lượng phương pháp kiểm soát tổng hợp — hình ảnh một chiếc "khung lắp ghép" từ nhiều mảnh ghép khác nhau để tạo ra một bản sao hoàn hảo đối chiếu với thực tế trước can thiệp.
- **Grammar & collocations:** 
  - apply the penalized synthetic control estimator (áp dụng ước lượng phương pháp kiểm soát tổng hợp)
  - penalized synthetic control estimator performance (hiệu suất của ước lượng phương pháp kiểm soát tổng hợp)
  - bias of the penalized synthetic control estimator (độ chệch của ước lượng phương pháp kiểm soát tổng hợp)
- **Register & nuance:** Academic / Econometric. Used exclusively in advanced quantitative research, policy evaluation, and applied econometrics.
- **Examples:** 
  - English: The researchers applied the penalized synthetic control estimator to evaluate the economic impact of the state-level tax reform.
  - Vietnamese: Các nhà nghiên cứu đã áp dụng ước lượng phương pháp kiểm soát tổng hợp để đánh giá tác động kinh tế của cải cách thuế cấp tiểu bang.
- **Liên kết tiếng Hàn:** 합성 통제법 추정량 (合成統制法推定量 — hapsong tongjebop chujongyang): Thuật ngữ chuyên ngành định lượng.

## 2. quadratic donor pool optimization
- **IPA:** /ˈkɑnvɛks ˈdoʊnər pul ˌɑptəmaɪˈzeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ hoặc bổ ngữ trong tối ưu hóa toán học (e.g., *solving the quadratic donor pool optimization problem*).
- **Core meaning — English:** The mathematical process of selecting and weighting untreated comparison units within a restricted convex set to minimize pre-intervention differences from the treated unit.
- **Core meaning & mental image — Tiếng Việt:** Tối ưu hóa tập hợp nguồn lồi — hình ảnh việc điều chỉnh trọng số nằm trong một khoảng an toàn (lồi) sao cho tổng các đơn vị chưa bị tác động khớp khít nhất với đối tượng thực nghiệm.
- **Grammar & collocations:** 
  - quadratic donor pool optimization routine (thủ tục tối ưu hóa tập hợp nguồn lồi)
  - solve quadratic donor pool optimization (giải quyết bài toán tối ưu hóa tập hợp nguồn lồi)
  - constraints in quadratic donor pool optimization (các ràng buộc trong tối ưu hóa tập hợp nguồn lồi)
- **Register & nuance:** Highly technical, mathematical, and computational economics.
- **Examples:** 
  - English: quadratic donor pool optimization ensures that weights sum to one and remain non-negative, preventing extrapolation artifacts.
  - Vietnamese: Tối ưu hóa tập hợp nguồn lồi đảm bảo rằng các trọng số có tổng bằng một và không âm, ngăn ngừa các hiện tượng ngoại suy bất hợp lý.
- **Liên kết tiếng Hàn:** 볼록 기증자 풀 최적화 (bollok gijeungja pul choejeokhwa): Tối ưu hóa tập hợp nguồn lồi.

## 3. matrix completion counterfactual recovery
- **IPA:** /ˈmeɪtrɪks kəmˈpliʃən ˈkɔzəl ˈɪnfərəns/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm chủ ngữ hoặc tên phương pháp (e.g., *matrix completion counterfactual recovery handles missing counterfactuals*).
- **Core meaning — English:** A modern causal inference framework that treats potential outcomes estimation as a low-rank matrix completion problem, predicting missing counterfactual values for treated units over time.
- **Core meaning & mental image — Tiếng Việt:** Suy luận nhân quả hoàn thiện ma trận — hình ảnh việc điền các ô trống còn thiếu trong một bảng dữ liệu lớn dựa trên cấu trúc ngầm định của toàn bộ hệ thống.
- **Grammar & collocations:** 
  - matrix completion counterfactual recovery framework (khung suy luận nhân quả hoàn thiện ma trận)
  - approach via matrix completion counterfactual recovery (tiếp cận thông qua suy luận nhân quả hoàn thiện ma trận)
  - robust matrix completion counterfactual recovery (suy luận nhân quả hoàn thiện ma trận bền vững)
- **Register & nuance:** Cutting-edge statistical learning and econometric research.
- **Examples:** 
  - English: Recent advances in matrix completion counterfactual recovery allow researchers to evaluate policies across multiple treated units and time periods simultaneously.
  - Vietnamese: Những tiến bộ gần đây trong suy luận nhân quả hoàn thiện ma trận cho phép các nhà nghiên cứu đánh giá đồng thời các chính sách trên nhiều đơn vị và khoảng thời gian được tác động.
- **Liên kết tiếng Hàn:** 행렬 완성 인과 추론 (行列完成因果推論 — haengryeol wanseong ingwa churon): Suy luận nhân quả hoàn thiện ma trận.

## 4. pre-intervention balance covariate
- **IPA:** /priːˌɪntərˈvɛnʃən ˈbæləns ˈkoʊvəriɪt/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm danh từ bổ nghĩa hoặc tân ngữ (e.g., *achieving strong pre-intervention balance covariate matching*).
- **Core meaning — English:** A pre-treatment characteristic or economic indicator used to align control units with the treated unit prior to policy implementation.
- **Core meaning & mental image — Tiếng Việt:** Biến hiệp biến cân bằng trước can thiệp — hình ảnh chiếc cân đĩa cân bằng các chỉ số quá khứ giữa hai bên trước khi bắt đầu thí nghiệm.
- **Grammar & collocations:** 
  - match pre-intervention balance covariates (khớp các biến hiệp biến cân bằng trước can thiệp)
  - pre-intervention balance covariate set (tập hợp biến hiệp biến cân bằng trước can thiệp)
  - test pre-intervention balance covariates (kiểm tra các biến hiệp biến cân bằng trước can thiệp)
- **Register & nuance:** Standard econometric terminology for research design validity.
- **Examples:** 
  - English: The study carefully selected pre-intervention balance covariates to eliminate baseline economic disparities.
  - Vietnamese: Nghiên cứu đã lựa chọn cẩn thận các biến hiệp biến cân bằng trước can thiệp để loại bỏ sự chênh lệch kinh tế ban đầu.
- **Liên결 tiếng Hàn:** 개입 전 균형 공변량 (개입前均衡共變量 — gaip jeon gyunhyeong gongbyeonyang): Biến hiệp biến cân bằng trước can thiệp.

## 5. counterfactual trajectory extrapolation
- **IPA:** /ˌkaʊntərˈfæktʃuəl trəˈdʒɛktəri ɪkˌstræpəˈleɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ (e.g., *estimating the counterfactual trajectory extrapolation error*).
- **Core meaning — English:** The projected path that a treated unit would have taken in the absence of the intervention, estimated by extending its pre-treatment alignment into the post-period.
- **Core meaning & mental image — Tiếng Việt:** Ngoại suy quỹ đạo phản thực tế — hình ảnh việc kéo dài đường đi dự kiến vào tương lai nếu không có sự kiện can thiệp xảy ra.
- **Grammar & collocations:** 
  - compute counterfactual trajectory extrapolation (tính toán ngoại suy quỹ đạo phản thực tế)
  - counterfactual trajectory extrapolation error (lỗi ngoại suy quỹ đạo phản thực tế)
  - reliable counterfactual trajectory extrapolation (ngoại suy quỹ đạo phản thực tế đáng tin cậy)
- **Register & nuance:** Advanced econometric modeling and impact evaluation.
- **Examples:** 
  - English: The credibility of the study relies on the accuracy of its counterfactual trajectory extrapolation.
  - Vietnamese: Độ tin cậy của nghiên cứu phụ thuộc vào độ chính xác của việc ngoại suy quỹ đạo phản thực tế.
- **Liên kết tiếng Hàn:** 반사실적 궤적 외삽 (反事實的軌跡外揷 — bansasiljeok gaejok oesap): Ngoại suy quỹ đạo phản thực tế.

## 6. placebos in space and time
- **IPA:** /pləˈsiboʊz ɪn speɪs ænd taɪm/
- **Loại từ & vị trí trong câu:** Noun phrase (Cụm danh từ); thường làm chủ ngữ hoặc tân ngữ trong kiểm định giả thuyết (e.g., *conducting placebos in space and time to verify robustness*).
- **Core meaning & mental image — Tiếng Việt:** Kiểm định giả dược trong không gian và thời gian — hình ảnh việc thử nghiệm phương pháp lên các vùng không bị tác động hoặc các năm khác để chứng minh hiệu quả không phải do ngẫu nhiên.
- **Grammar & collocations:** 
  - run placebos in space and time (chạy kiểm định giả dược trong không gian và thời gian)
  - robustness from placebos in space and time (tính bền vững từ kiểm định giả dược không gian và thời gian)
  - framework of placebos in space and time (khung kiểm định giả dược không gian và thời gian)
- **Register & nuance:** Methodological rigor in empirical causal studies.
- **Examples:** 
  - English: To rule out spurious findings, the authors performed extensive placebos in space and time.
  - Vietnamese: Để loại trừ các kết quả ngẫu nhiên giả mạo, các tác giả đã thực hiện kiểm định giả dược kỹ lưỡng trong không gian và thời gian.
- **Liên kết tiếng Hàn:** 시공간 위약 검정 (時空間僞藥檢定 — sigonggan wiyak geomjeong): Kiểm định giả dược không gian - thời gian.

## 7. root mean squared prediction error (RMSPE)
- **IPA:** /rut min skwɛrd prɪˈdɪkʃən ˈɛrər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ hoặc chỉ số đánh giá (e.g., *minimizing the root mean squared prediction error*).
- **Core meaning — English:** A statistical measure used to evaluate the goodness of fit of a synthetic control model during the pre-intervention period by taking the square root of the average squared discrepancies.
- **Core meaning & mental image — Tiếng Việt:** Sai số dự báo bình phương trung bình gốc — hình ảnh thước đo khoảng cách trung bình giữa đường dự đoán và thực tế.
- **Grammar & collocations:** 
  - minimize root mean squared prediction error (giảm thiểu sai số dự báo bình phương trung bình gốc)
  - pre-intervention root mean squared prediction error (sai số dự báo bình phương trung bình gốc trước can thiệp)
  - low root mean squared prediction error (sai số dự báo bình phương trung bình gốc thấp)
- **Register & nuance:** Statistical evaluation and econometric modeling standard metric.
- **Examples:** 
  - English: A low pre-intervention root mean squared prediction error indicates a well-constructed synthetic control unit.
  - Vietnamese: Sai số dự báo bình phương trung bình gốc trước can thiệp thấp cho thấy một đơn vị kiểm soát tổng hợp được xây dựng tốt.
- **Liên kết tiếng Hàn:** 평균제곱근 오차 (平均제곱根誤差 — pyeonggyun jegopgeun ocha): Sai số phương pháp bình phương trung bình gốc (RMSPE).

## 8. non-negative weight constraint
- **IPA:** /nɑn ˈnɛgətɪv weɪt kənˈstreɪnt/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ trong bài toán tối ưu (e.g., *imposing a non-negative weight constraint*).
- **Core meaning — English:** A mathematical restriction ensuring that all donor weights in a synthetic control model are greater than or equal to zero, preventing negative interpolation.
- **Core meaning & mental image — Tiếng Việt:** Ràng buộc trọng số không âm — hình ảnh việc ép các hệ số pha trộn không được mang dấu trừ để tránh việc trừ khử giả tạo.
- **Grammar & collocations:** 
  - enforce a non-negative weight constraint (thực thi ràng buộc trọng số không âm)
  - satisfy non-negative weight constraints (thỏa mãn các ràng buộc trọng số không âm)
  - relaxation of the non-negative weight constraint (sự nới lỏng ràng buộc trọng số không âm)
- **Register & nuance:** Optimization theory and quantitative research methods.
- **Examples:** 
  - English: Imposing a non-negative weight constraint prevents extreme extrapolation and interpolation instability.
  - Vietnamese: Việc áp dụng ràng buộc trọng số không âm ngăn ngừa ngoại suy cực đoan và bất ổn định nội suy.
- **Liên kết tiếng Hàn:** 비음수 가중치 제약 (非陰數加重値制約 — bieumsu gajungchi jeyak): Ràng buộc trọng số không âm.

## 9. latent time-varying factor
- **IPA:** /ˌʌnəbˈzɜrvd ˈtaɪm ˈvɛriɪŋ kənˈfaʊndər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong phân tích sai số (e.g., *controlling for latent time-varying factors*).
- **Core meaning — English:** A hidden factor that changes over time and affects both the treatment assignment and the outcome variable, posing a threat to causal identification.
- **Core meaning & mental image — Tiếng Việt:** Biến nhiễu thay đổi theo thời gian không quan sát được — hình ảnh một yếu tố ẩn giấu âm thầm dịch chuyển và làm nhiễu loạn kết quả thí nghiệm.
- **Grammar & collocations:** 
  - account for latent time-varying factors (tính đến các biến nhiễu thay đổi theo thời gian không quan sát được)
  - impact of latent time-varying factors (tác động của các biến nhiễu thay đổi theo thời gian không quan sát được)
  - robust against latent time-varying factors (bền vững trước các biến nhiễu thay đổi theo thời gian không quan sát được)
- **Register & nuance:** Econometrics and causal inference terminology.
- **Examples:** 
  - English: Unlike standard panel models, advanced synthetic methods can partially accommodate latent time-varying factors via factor structures.
  - Vietnamese: Khác với các mô hình dữ liệu mảng tiêu chuẩn, các phương pháp tổng hợp tiên tiến có thể dung hòa một phần các biến nhiễu thay đổi theo thời gian không quan sát được thông qua các cấu trúc nhân tố.
- **Liên kết tiếng Hàn:** 미관측 시변 교란 변수 (未觀測時變攪亂變數 — mikwancheok sibyeon gyoran byeonsu): Biến nhiễu biến đổi theo thời gian không quan sát được.

## 10. generalized synthetic control
- **IPA:** /ˈdʒɛnərəlaɪzd sɪnˈθɛtɪk kənˈtroʊl/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tên phương pháp hoặc chủ ngữ (e.g., *the generalized synthetic control method extends traditional approaches*).
- **Core meaning — English:** An interactive fixed-effects approach that combines factor models with synthetic control ideas to allow for multiple treated units and complex time-varying structures.
- **Core meaning & mental image — Tiếng Việt:** Kiểm soát tổng hợp tổng quát hóa — hình ảnh phiên bản nâng cấp linh hoạt của phương pháp tổng hợp, cho phép áp dụng trên nhiều đối tượng và cấu trúc phức tạp.
- **Grammar & collocations:** 
  - implement generalized synthetic control (triển khai kiểm soát tổng hợp tổng quát hóa)
  - generalized synthetic control estimator (ước lượng kiểm soát tổng hợp tổng quát hóa)
  - framework of generalized synthetic control (khung kiểm soát tổng hợp tổng quát hóa)
- **Register & nuance:** Advanced econometrics and data science methodology.
- **Examples:** 
  - English: The generalized synthetic control estimator accommodates multiple treated periods and heterogeneous treatment effects smoothly.
  - Vietnamese: Ước lượng kiểm soát tổng hợp tổng quát hóa thích ứng mượt mà với nhiều giai đoạn được can thiệp và các tác động can thiệp không đồng nhất.
- **Liên kết tiếng Hàn:** 일반화 합성 통제법 (一般化合成統制法 — ilbanhwa hapsong tongjebop): Phương pháp kiểm soát tổng hợp tổng quát hóa.

## 11. low-rank matrix factorization
- **IPA:** /loʊ ræŋk ˈmeɪtrɪks fækˈtərɪˈzeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ hoặc bổ ngữ trong học máy (e.g., *using low-rank matrix factorization for imputation*).
- **Core meaning — English:** A matrix approximation technique that decomposes a high-dimensional matrix into the product of two lower-dimensional matrices, capturing latent structural patterns.
- **Core meaning & mental image — Tiếng Việt:** Phân rã ma trận hạng thấp — hình ảnh việc cô đọng một bảng dữ liệu khổng lồ thành một vài cấu trúc cốt lõi gọn gàng hơn.
- **Grammar & collocations:** 
  - apply low-rank matrix factorization (áp dụng phân rã ma trận hạng thấp)
  - low-rank matrix factorization algorithm (thuật toán phân rã ma trận hạng thấp)
  - regularization in low-rank matrix factorization (điều chuẩn trong phân rã ma trận hạng thấp)
- **Register & nuance:** Machine learning, linear algebra, and advanced statistics.
- **Examples:** 
  - English: Low-rank matrix factorization helps recover missing potential outcomes by exploiting correlation across units.
  - Vietnamese: Phân rã ma trận hạng thấp giúp phục hồi các kết quả tiềm năng bị thiếu bằng cách khai thác mối tương quan giữa các đơn vị.
- **Liên kết tiếng Hàn:** 저랭크 행렬 분해 (低rank行列分解 — jeoraeng-keu haengryeol bunhae): Phân rã ma trận hạng thấp.

## 12. nuclear norm penalization parameter
- **IPA:** /ˈnukliər nɔrm ˌpɛnəlɪˈzeɪʃən ˈpɛrəmətər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ trong tối ưu hóa phạt (e.g., *tuning the nuclear norm penalization parameter*).
- **Core meaning — English:** A regularization tuning parameter that penalizes the sum of singular values in matrix completion problems to enforce low-rank solutions.
- **Core meaning & mental image — Tiếng Việt:** Tham số phạt chuẩn hạt nhân — hình ảnh cái phanh toán học kiểm soát độ phức tạp của ma trận bằng cách ép các giá trị kỳ異 nhỏ về không.
- **Grammar & collocations:** 
  - tune the nuclear norm penalization parameter (tinh chỉnh tham số phạt chuẩn hạt nhân)
  - optimal nuclear norm penalization parameter (tham số phạt chuẩn hạt nhân tối ưu)
  - effect of the nuclear norm penalization parameter (tác động của tham số phạt chuẩn hạt nhân)
- **Register & nuance:** Advanced mathematical optimization and machine learning theory.
- **Examples:** 
  - English: Cross-validation was used to select the optimal nuclear norm penalization parameter for the matrix completion model.
  - Vietnamese: Phương pháp kiểmクロス chéo đã được sử dụng để lựa chọn tham số phạt chuẩn hạt nhân tối ưu cho mô hình hoàn thiện ma trận.
- **Liên kết tiếng Hàn:** 핵노름 벌목 매개변수 (핵노름 벌목 매개變数 — haengnoreum beolmok maegaebyeonsu): Tham số phạt chuẩn hạt nhân.

---

## Review in context: Part 1 (items 1–12 bolded **headword**)

In modern empirical research, evaluating the causal effect of macro-level policies requires sophisticated econometric tools. Researchers frequently deploy the **penalized synthetic control estimator** to construct reliable counterfactuals when traditional regression fails. By setting up a **quadratic donor pool optimization** problem, analysts select and weight control units while enforcing a strict **non-negative weight constraint** to avoid unrealistic extrapolation. To ensure robust baseline alignment, careful attention is paid to selecting every **pre-intervention balance covariate**. When missing potential outcomes pose challenges, cutting-edge **matrix completion counterfactual recovery** techniques come into play, driven by **low-rank matrix factorization** algorithms and tuned using a precise **nuclear norm penalization parameter**. To handle hidden threats, researchers account for any **latent time-varying factor** and test models via **counterfactual trajectory extrapolation**. Further validation is achieved through rigorous **placebos in space and time**, evaluating performance using the **root mean squared prediction error (RMSPE)**. Advanced variations like the **generalized synthetic control** framework allow analysts to extend these principles across complex settings.

**Bản dịch tiếng Việt (Phần 1):**
Trong nghiên cứu thực nghiệm hiện đại, việc đánh giá tác động nhân quả của các chính sách cấp vĩ mô đòi hỏi các công cụ kinh tế lượng tinh vi. Các nhà nghiên cứu thường triển khai **ước lượng phương pháp kiểm soát tổng hợp** để xây dựng các đối chứng phản thực tế đáng tin cậy khi hồi quy truyền thống thất bại. Bằng cách thiết lập bài toán **tối ưu hóa tập hợp nguồn lồi**, các nhà phân tích lựa chọn và gán trọng số cho các đơn vị đối chứng đồng thời thi hành **ràng buộc trọng số không âm** nghiêm ngặt nhằm tránh ngoại suy phi thực tế. Để đảm bảo sự cân bằng cơ sở vững chắc, sự chú ý cẩn thận được dành cho việc lựa chọn mọi **biến hiệp biến cân bằng trước can thiệp**. Khi các kết quả tiềm năng bị thiếu gây ra thách thức, các kỹ thuật **suy luận nhân quả hoàn thiện ma trận** tiên tiến phát huy tác dụng, được thúc đẩy bởi các thuật toán **phân rã ma trận hạng thấp** và được tinh chỉnh bằng cách sử dụng **tham số phạt chuẩn hạt nhân** chính xác. Để xử lý các mối đe dọa ẩn giấu, các nhà nghiên cứu tính đến bất kỳ **biến nhiễu thay đổi theo thời gian không quan sát được** nào và kiểm tra các mô hình thông qua **ngoại suy quỹ đạo phản thực tế**. Sự xác thực bổ sung đạt được thông qua **kiểm định giả dược trong không gian và thời gian** nghiêm ngặt, đánh giá hiệu suất bằng **sai số dự báo bình phương trung bình gốc (RMSPE)**. Các biến thể nâng cao như khung **kiểm soát tổng hợp tổng quát hóa** cho phép các nhà phân tích mở rộng các nguyên tắc này trên các bối cảnh phức tạp.

---

## 13. leave-one-out cross validation
- **IPA:** /liv wʌn aʊt krɔs ˈvæləˈdeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ (e.g., *using leave-one-out cross validation to evaluate model fit*).
- **Core meaning — English:** A model validation method where each observation is successively omitted in turn to test the predictive ability of the model on unseen data.
- **Core meaning & mental image — Tiếng Việt:** Kiểm định chéo bỏ-một-ra — hình ảnh việc tháo lần lượt từng khối gạch ra khỏi tòa nhà để kiểm tra xem cấu trúc có đứng vững mà không cần khối đó hay không.
- **Grammar & collocations:** 
  - perform leave-one-out cross validation (thực hiện kiểm định chéo bỏ-một-ra)
  - leave-one-out cross validation score (điểm kiểm định chéo bỏ-một-ra)
  - approach based on leave-one-out cross validation (phương pháp dựa trên kiểm định chéo bỏ-một-ra)
- **Register & nuance:** Statistics, machine learning, and econometric model selection.
- **Examples:** 
  - English: Leave-one-out cross validation confirmed that the synthetic control weights were not overfitted to specific time periods.
  - Vietnamese: Kiểm định chéo bỏ-một-ra xác nhận rằng các trọng số kiểm soát tổng hợp không bị khớp quá mức với các khoảng thời gian cụ thể.
- **Liên kết tiếng Hàn:** 리브오 원아웃 교차 검증 (leave-one-out 交叉検証 — ribeu o aut gyocha geomjeung): Kiểm định chéo loại bỏ một phần tử (Leave-one-out).

## 14. staggered treatment adoption setting
- **IPA:** /ˈstægərd ˈtrɪtmənt əˈdɑpʃən ˈsɛtɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm trạng ngữ chỉ bối cảnh hoặc tân ngữ (e.g., *analyzing data in a staggered treatment adoption setting*).
- **Core meaning — English:** A research design context where different units adopt a policy intervention at different points in time rather than simultaneously.
- **Core meaning & mental image — Tiếng Việt:** Bối cảnh áp dụng can thiệp lệch pha — hình ảnh đoàn tàu khởi hành ở các thời điểm khác nhau từ các ga khác nhau trên cùng một tuyến đường.
- **Grammar & collocations:** 
  - study in a staggered treatment adoption setting (nghiên cứu trong bối cảnh áp dụng can thiệp lệch pha)
  - challenges of a staggered treatment adoption setting (thách thức của bối cảnh áp dụng can thiệp lệch pha)
  - estimator for staggered treatment adoption settings (ước lượng cho bối cảnh áp dụng can thiệp lệch pha)
- **Register & nuance:** Contemporary econometrics and panel data analysis.
- **Examples:** 
  - English: Evaluating minimum wage hikes across states often requires accounting for a staggered treatment adoption setting.
  - Vietnamese: Việc đánh giá việc tăng lương tối thiểu ở các bang thường đòi hỏi phải tính đến bối cảnh áp dụng can thiệp lệch pha.
- **Liên kết tiếng Hàn:** 시차적 개입 도입 환경 (時差적개입導入環境 — sicha-jeok gaip doip hwan-gyeong): Bối cảnh áp dụng can thiệp theo thời gian lệch pha.

## 15. intervention effect point estimate
- **IPA:** /ˌɪntərˈvɛnʃən ɪˈfɛkt pɔɪnt ˈɛstɪmeɪt/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ (e.g., *calculating the intervention effect point estimate*).
- **Core meaning — English:** A single numerical value representing the estimated magnitude of the causal impact caused by a policy intervention at a specific time point.
- **Core meaning & mental image — Tiếng Việt:** Ước lượng điểm hiệu ứng can thiệp — hình ảnh một con số chính xác đánh dấu mức độ chênh lệch tại một thời điểm cụ thể trên biểu đồ.
- **Grammar & collocations:** 
  - compute the intervention effect point estimate (tính toán ước lượng điểm hiệu ứng can thiệp)
  - confidence interval around the intervention effect point estimate (khoảng tin cậy xung quanh ước lượng điểm hiệu ứng can thiệp)
  - robust intervention effect point estimate (ước lượng điểm hiệu ứng can thiệp bền vững)
- **Register & nuance:** Applied statistics and policy evaluation reporting.
- **Examples:** 
  - English: The intervention effect point estimate showed a significant post-policy increase in regional employment.
  - Vietnamese: Ước lượng điểm hiệu ứng can thiệp cho thấy sự gia tăng đáng kể sau chính sách về việc làm ở khu vực này.
- **Liên kết tiếng Hàn:** 개입 효과 점추정값 (介入効果點推定値 — gaip hyogwa jeomchujeong-gap): Giá trị ước lượng điểm hiệu ứng can thiệp.

## 16. donor unit interpolation bias
- **IPA:** /ˈdoʊnər ˈjunit ɪnˌtɜrpəˈleɪʃən ˈbaɪəs/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ (e.g., *mitigating donor unit interpolation bias*).
- **Core meaning — English:** The systematic error that occurs when the convex combination of control units fails to adequately approximate the unobserved counterfactual of the treated unit.
- **Core meaning & mental image — Tiếng Việt:** Sai số nội suy đơn vị nguồn — hình ảnh sự sai lệch xuất hiện khi cố gắng chắp vá một bức tranh hoàn chỉnh từ những mảnh ghép không thực sự phù hợp.
- **Grammar & collocations:** 
  - reduce donor unit interpolation bias (giảm thiểu sai số nội suy đơn vị nguồn)
  - source of donor unit interpolation bias (nguồn gốc của sai số nội suy đơn vị nguồn)
  - bound donor unit interpolation bias (giới hạn sai số nội suy đơn vị nguồn)
- **Register & nuance:** Advanced econometric methods and methodological critiques.
- **Examples:** 
  - English: Researchers must check for donor unit interpolation bias when the pre-intervention fit is imperfect.
  - Vietnamese: Các nhà nghiên cứu phải kiểm tra sai số nội suy đơn vị nguồn khi mức độ khớp trước can thiệp không hoàn hảo.
- **Liên kết tiếng Hàn:** 기증자 단위 보간 편향 (寄贈者單位補間偏向 — gijeungja danwi bogan phyeonhyang): Sai số nội suy đơn vị nguồn.

## 17. convex hull boundary constraint
- **IPA:** /ˈkɑnvɛks hʌl ˈbaʊndəri kənˈstreɪnt/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ trong tối ưu hóa (e.g., *violating the convex hull boundary constraint*).
- **Core meaning — English:** The restriction that synthetic control weights cannot extrapolate outside the convex hull of the donor units, limiting out-of-sample prediction.
- **Core meaning & mental image — Tiếng Việt:** Ràng buộc ranh giới bao lồi — hình ảnh đường viền khép kín bao quanh các điểm dữ liệu nguồn, vượt qua đường viền đó là vùng ngoại suy bị cấm.
- **Grammar & collocations:** 
  - respect the convex hull boundary constraint (tuân thủ ràng buộc ranh giới bao lồi)
  - push against the convex hull boundary constraint (chạm tới ranh giới bao lồi)
  - relaxing the convex hull boundary constraint (nới lỏng ràng buộc ranh giới bao lồi)
- **Register & nuance:** Mathematical economics and optimization geometry.
- **Examples:** 
  - English: Operating within the convex hull boundary constraint ensures that estimates are interpolations rather than risky extrapolations.
  - Vietnamese: Hoạt động trong phạm vi ràng buộc ranh giới bao lồi đảm bảo rằng các ước lượng là nội suy thay vì ngoại suy rủi ro.
- **Liên kết tiếng Hàn:** 볼록 껍질 경계 제약 (bollok kkeopjil gyeonggye jeyak): Ràng buộc ranh giới bao lồi.

## 18. robust permutation inference test
- **IPA:** /roʊˈbʌst ˌpɜrmjuˈteɪʃən ˈɪnfərəns tɛst/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ (e.g., *performing a robust permutation inference test*).
- **Core meaning — English:** A non-parametric significance test that assesses whether an estimated treatment effect is unusually large by repeatedly reassigning the intervention across control units.
- **Core meaning & mental image — Tiếng Việt:** Kiểm định suy luận hoán vị bền vững — hình ảnh việc xáo trộn ngẫu nhiên các vai trò thí nghiệm hàng trăm lần để xem hiệu quả thực tế có thực sự đặc biệt hay không.
- **Grammar & collocations:** 
  - conduct a robust permutation inference test (thực hiện kiểm định suy luận hoán vị bền vững)
  - p-value from a robust permutation inference test (giá trị p từ kiểm định suy luận hoán vị bền vững)
  - permutation inference test distribution (phân phối kiểm định suy luận hoán vị)
- **Register & nuance:** Modern empirical econometrics and inference validation.
- **Examples:** 
  - English: A robust permutation inference test confirmed that the estimated policy effect was statistically significant at the 5% level.
  - Vietnamese: Kiểm định suy luận hoán vị bền vững đã xác nhận rằng hiệu quả chính sách ước lượng có ý nghĩa thống kê ở mức 5%.
- **Liên kết tiếng Hàn:** 강건한 순열 추론 검정 (剛健한順列推論檢정 — ganggeonhan sunyeol churon geomjeong): Kiểm định suy luận hoán vị bền vững.

## 19. treated unit post-period divergence
- **IPA:** /ˈtritɪd ˈjunit poʊst ˈpɪriəd dɪˈvɜrdʒəns/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ (e.g., *observing a marked treated unit post-period divergence*).
- **Core meaning — English:** The observable gap that emerges between a treated unit and its synthetic counterpart after the implementation of a policy intervention.
- **Core meaning & mental image — Tiếng Việt:** Sự phân kỳ giai đoạn sau của đơn vị được can thiệp — hình ảnh hai đường biểu đồ bắt đầu tách rời nhau rõ rệt sau mốc thời gian xảy ra chính sách.
- **Grammar & collocations:** 
  - analyze treated unit post-period divergence (phân tích sự phân kỳ giai đoạn sau của đơn vị được can thiệp)
  - magnitude of post-period divergence (mức độ phân kỳ sau giai đoạn can thiệp)
  - visual evidence of post-period divergence (bằng chứng trực quan về sự phân kỳ sau thời kỳ can thiệp)
- **Register & nuance:** Empirical policy analysis and visual inspection standards.
- **Examples:** 
  - English: The graph clearly displays a sharp treated unit post-period divergence immediately following the regulatory overhaul.
  - Vietnamese: Biểu đồ hiển thị rõ ràng sự phân kỳ sắc nét của đơn vị được can thiệp sau giai đoạn ngay lập tức sau cuộc đại tu quy định.
- **Liên kết tiếng Hàn:** 처치 단위 사후 기간 발산 (処置單位事後期間發散 — cheochi danwi sahu gigan balsan): Sự phân kỳ sau thời gian của đơn vị được xử lý.

## 20. high-dimensional macro-policy evaluation
- **IPA:** /haɪ dɪˈmɛnʃənəl ˈmækroʊ ˈpɑləsi ɪˌvæljuˈeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ (e.g., *conducting high-dimensional macro-policy evaluation*).
- **Core meaning — English:** The assessment of large-scale economic policies using datasets characterized by numerous variables, time periods, and potential confounding factors.
- **Core meaning & mental image — Tiếng Việt:** Đánh giá chính sách vĩ mô chiều cao — hình ảnh việc xử lý một không gian dữ liệu đa chiều phức tạp để đo lường tác động của một quyết định kinh tế lớn.
- **Grammar & collocations:** 
  - framework for high-dimensional macro-policy evaluation (khung đánh giá chính sách vĩ mô chiều cao)
  - tools for high-dimensional macro-policy evaluation (công cụ đánh giá chính sách vĩ mô chiều cao)
  - challenges in high-dimensional macro-policy evaluation (thách thức trong đánh giá chính sách vĩ mô chiều cao)
- **Register & nuance:** Advanced macroeconomics and data-driven governance.
- **Examples:** 
  - English: High-dimensional macro-policy evaluation requires machine learning techniques to avoid the curse of dimensionality.
  - Vietnamese: Đánh giá chính sách vĩ mô đa chiều đòi hỏi các kỹ thuật học máy để tránh lời nguyền số chiều.
- **Liên kết tiếng Hàn:** 고차원 거시 정책 평가 (高次元巨視政策評價 — gocharwon geosi jeongchaek pyeongga): Đánh giá chính sách vĩ mô số chiều cao.

## 21. regularized synthetic difference-in-differences
- **IPA:** /sɪnˈθɛtɪk ˈdɪfərəns ɪn ˈdɪfərənsɪz/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tên phương pháp hoặc chủ ngữ (e.g., *regularized synthetic difference-in-differences combines the strengths of both approaches*).
- **Core meaning — English:** An advanced econometric estimator that merges synthetic control weighting methods with traditional difference-in-differences designs for robust causal inference.
- **Core meaning & mental image — Tiếng Việt:** Sai khác trong các sai khác tổng hợp — hình ảnh sự kết hợp hoàn hảo giữa phương pháp so sánh trọng số và phương pháp sai khác truyền thống.
- **Grammar & collocations:** 
  - apply regularized synthetic difference-in-differences (áp dụng phương pháp sai khác trong các sai khác tổng hợp)
  - regularized synthetic difference-in-differences estimator (ước lượng sai khác trong các sai khác tổng hợp)
  - advantages of regularized synthetic difference-in-differences (ưu điểm của sai khác trong các sai khác tổng hợp)
- **Register & nuance:** Cutting-edge econometric methodology.
- **Examples:** 
  - English: regularized synthetic difference-in-differences provides more stable estimates when parallel trends assumption is slightly violated.
  - Vietnamese: Phương pháp sai khác trong các sai khác tổng hợp cung cấp các ước lượng ổn định hơn khi giả định xu hướng song song bị vi phạm nhẹ.
- **Liên kết tiếng Hàn:** 합성 이중 차분법 (合成二重差分法 — hapsong ijung chabeunbeop): Phương pháp sai khác trong các sai khác tổng hợp.

## 22. econometric identification assumption
- **IPA:** /ˌɛkəˈnɑmɛtrɪk aɪˌdɛntəfɪˈkeɪʃən əˈsʌmpʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ (e.g., *testing the core econometric identification assumption*).
- **Core meaning — English:** A foundational premise or condition assumed to be true in an economic model to ensure that estimated parameters reflect true causal relationships rather than artifacts.
- **Core meaning & mental image — Tiếng Việt:** Giả định nhận dạng kinh tế lượng — hình ảnh nền móng kiến trúc của một mô hình; nếu nền móng này sụp đổ, toàn bộ kết luận nhân quả sẽ vô giá trị.
- **Grammar & collocations:** 
  - validate an econometric identification assumption (xác thực giả định nhận dạng kinh tế lượng)
  - test econometric identification assumptions (kiểm tra các giả định nhận dạng kinh tế lượng)
  - violation of an econometric identification assumption (sự vi phạm giả định nhận dạng kinh tế lượng)
- **Register & nuance:** Core academic econometrics and theoretical research.
- **Examples:** 
  - English: Defending the econometric identification assumption is crucial for publishing empirical research in top-tier journals.
  - Vietnamese: Bảo vệ giả định nhận dạng kinh tế lượng là tối quan trọng để xuất bản nghiên cứu thực nghiệm trên các tạp chí hàng đầu.
- **Liên kết tiếng Hàn:** 계량경제학적 식별 가정 (計量經濟學적識別假定 — gyeryang gyeongjehakjeok sikbyeol gajeong): Giả định nhận dạng kinh tế lượng.

## 23. empirical causal inference framework
- **IPA:** /ɛmˈpɪrɪkl ˈkɔzəl ˈɪnfərəns ˈfreɪmwɜrk/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ (e.g., *building a robust empirical causal inference framework*).
- **Core meaning — English:** A structured methodology combining data, statistical assumptions, and estimation algorithms to establish cause-and-effect relationships from observational data.
- **Core meaning & mental image — Tiếng Việt:** Khung suy luận nhân quả thực nghiệm — hình ảnh toàn bộ hệ thống giàn giáo và công cụ được thiết kế vững chắc để khai thác dữ liệu thực tế thành bằng chứng nguyên nhân - kết quả.
- **Grammar & collocations:** 
  - establish an empirical causal inference framework (thiết lập khung suy luận nhân quả thực nghiệm)
  - modern empirical causal inference framework (khung suy luận nhân quả thực nghiệm hiện đại)
  - application of the empirical causal inference framework (ứng dụng của khung suy luận nhân quả thực nghiệm)
- **Register & nuance:** Professional quantitative research and academic writing.
- **Examples:** 
  - English: The new empirical causal inference framework integrates machine learning algorithms with traditional econometric design.
  - Vietnamese: Khung suy luận nhân quả thực nghiệm mới tích hợp các thuật toán học máy với thiết kế kinh tế lượng truyền thống.
- **Liên kết tiếng Hàn:** 실증적 인과 추론 프레임워크 (實證的因과推論프레임워크 — siljeongjeok ingwa churon pureim-weokeu): Khung suy luận nhân quả thực nghiệm.

## 24. observational policy evaluation
- **IPA:** /ˌɑbzərˈveɪʃənəl ˈpɑləsi ɪˌvæljuˈeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ hoặc danh từ ghép (e.g., *challenges in observational policy evaluation*).
- **Core meaning — English:** The process of assessing the impact of government or corporate policies using non-experimental observational data rather than randomized controlled trials.
- **Core meaning & mental image — Tiếng Việt:** Đánh giá chính sách quan sát — hình ảnh việc quan sát hiện trường thực tế đang diễn ra mà không có sự can thiệp trực tiếp vào việc sắp xếp thí nghiệm.
- **Grammar & collocations:** 
  - methods for observational policy evaluation (các phương pháp đánh giá chính sách quan sát)
  - advance observational policy evaluation (thúc đẩy đánh giá chính sách quan sát)
  - limitations of observational policy evaluation (hạn chế của đánh giá chính sách quan sát)
- **Register & nuance:** Public policy, economics, and program evaluation.
- **Examples:** 
  - English: Observational policy evaluation is indispensable when randomized experiments are ethically or logistically impossible.
  - Vietnamese: Đánh giá chính sách quan sát là không thể thiếu khi các thí nghiệm ngẫu nhiên là bất khả thi về mặt đạo đức hoặc hậu cần.
- **Liên kết tiếng Hàn:** 관찰적 정책 평가 (觀察적政策評價 — gwanchaljeok jeongchaek pyeongga): Đánh giá chính sách quan sát.

## 25. frontier microeconometric methodology
- **IPA:** /frʌnˈtɪr ˌmaɪkroʊˌɛkəˈnɑmɛtrɪk ˌmɛθəˈdɑlədʒi/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh từ ghép); thường làm tân ngữ hoặc danh từ bổ nghĩa (e.g., *adopting frontier microeconometric methodology*).
- **Core meaning — English:** The most advanced, cutting-edge techniques and analytical models used at the boundary of microeconomic research and causal inference.
- **Core meaning & mental image — Tiếng Việt:** Phương pháp kinh tế vi mô biên giới — hình ảnh những người thám hiểm đang mở rộng biên cương tri thức khoa học với các công cụ tối tân nhất.
- **Grammar & collocations:** 
  - pioneer frontier microeconometric methodology (tiên phong phương pháp kinh tế vi mô biên giới)
  - training in frontier microeconometric methodology (đào tạo về phương pháp kinh tế vi mô biên giới)
  - advancement of frontier microeconometric methodology (sự tiến bộ của phương pháp kinh tế vi mô biên giới)
- **Register & nuance:** Academic excellence and cutting-edge econometric research.
- **Examples:** 
  - English: Graduate students are expected to master frontier microeconometric methodology to address complex labor market questions.
  - Vietnamese: Các nghiên cứu sinh được kỳ vọng phải nắm vững phương pháp kinh tế vi mô biên giới để giải quyết các câu hỏi phức tạp về thị trường lao động.
- **Liên kết tiếng Hàn:** 최첨단 미시계량경제학 방법론 (最先端微視計量經濟學方法論 — choicheomdan misi gyeryang gyeongjehak bangbeobnon): Phương pháp kinh tế vi mô tiên tiến nhất (biên giới).

---

## Review in context: Part 2 (items 13–25 bolded **headword**)

When tackling complex policy questions, researchers often work in a **staggered treatment adoption setting**, requiring specialized estimators to compute each **intervention effect point estimate**. To ensure validity, models must be evaluated using **leave-one-out cross validation** while mitigating any potential **donor unit interpolation bias**. Analysts must also respect the strict **convex hull boundary constraint** to avoid risky extrapolation outside the data support. To test statistical significance, researchers conduct a **robust permutation inference test**, observing any clear **treated unit post-period divergence** on summary graphs. These tools form part of a broader **high-dimensional macro-policy evaluation** agenda, often incorporating hybrid methods like **regularized synthetic difference-in-differences**. Every model rests upon a critical **econometric identification assumption**, which forms the backbone of any sound **empirical causal inference framework**. Ultimately, these techniques revolutionize **observational policy evaluation**, representing the pinnacle of **frontier microeconometric methodology**.

**Bản dịch tiếng Việt (Phần 2):**
Khi giải quyết các câu hỏi chính sách phức tạp, các nhà nghiên cứu thường làm việc trong **bối cảnh áp dụng can thiệp lệch pha**, đòi hỏi các ước lượng chuyên biệt để tính toán từng **ước lượng điểm hiệu ứng can thiệp**. Để đảm bảo tính hợp lệ, các mô hình phải được đánh giá bằng cách sử dụng **kiểm định chéo bỏ-một-ra** đồng thời giảm thiểu bất kỳ **sai số nội suy đơn vị nguồn** tiềm ẩn nào. Các nhà phân tích cũng phải tôn trọng **ràng buộc ranh giới bao lồi** nghiêm ngặt để tránh ngoại suy rủi ro bên ngoài hỗ trợ dữ liệu. Để kiểm tra ý nghĩa thống kê, các nhà nghiên cứu tiến hành **kiểm định suy luận hoán vị bền vững**, quan sát bất kỳ **sự phân kỳ giai đoạn sau của đơn vị được can thiệp** rõ ràng nào trên các biểu đồ tổng hợp. Các công cụ này tạo thành một phần của chương trình **đánh giá chính sách vĩ mô chiều cao** rộng lớn hơn, thường kết hợp các phương pháp lai như **sai khác trong các sai khác tổng hợp**. Mọi mô hình đều dựa trên một **giả định nhận dạng kinh tế lượng** quan trọng, tạo thành xương sống của bất kỳ **khung suy luận nhân quả thực nghiệm** vững chắc nào. Cuối cùng, các kỹ thuật này cách mạng hóa **đánh giá chính sách quan sát**, đại diện cho đỉnh cao của **phương pháp kinh tế vi mô biên giới**.
