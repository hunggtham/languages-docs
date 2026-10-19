# C2+ Vocabulary — Advanced causal identification and proximal inference

This lesson follows the assumptions and graphical tools used to identify causal effects, then moves to transport and proximal methods for settings with hidden or feedback-driven confounding. The network is **causal sufficiency → causal minimality → faithfulness assumption → do-operator → do-intervention → graphical criterion → ancestor adjustment → descendant adjustment → hedge criterion → recanting witness → cross-world counterfactual → treatment-confounder feedback → confounding bridge function → proximal causal learning → proximal g-formula → proximal outcome confounding → proximal treatment confounding → causal transport formula → data fusion → trial generalizability**.

## 1. causal sufficiency /ˈkɔzəl səˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** an assumption that a causal graph includes every common cause of the variables being analyzed, so no relevant confounder is omitted from the graph.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả định graph đã “đủ nguyên nhân chung”; nếu còn common cause bị giấu ngoài graph, suy luận từ graph có thể sai.
**Grammar & collocations:** `causal sufficiency assumption` — assumption; `assume causal sufficiency` — assume; `violate sufficiency` — violate.
**Examples:** `The adjustment set was justified only under causal sufficiency.` → Tập adjustment chỉ được biện minh khi có causal sufficiency.
**Liên kết tiếng Hàn:** `인과적 충분성` — tính đầy đủ về nguyên nhân.

## 2. causal minimality /ˈkɔzəl ˌmɪnəˈmæləti/
**Part of speech:** noun
**Core meaning (English):** an assumption that every arrow in a causal graph represents a necessary direct relation rather than a redundant edge.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph không chứa mũi tên thừa; bỏ một arrow thật sự sẽ làm thay đổi các independence pattern mà graph thể hiện.
**Grammar & collocations:** `causal-minimality assumption` — assumption; `require minimality` — require; `minimal causal graph` — graph tối giản.
**Examples:** `Causal minimality prevented the analyst from adding decorative arrows with no explanatory role.` → Causal minimality ngăn analyst thêm các arrow trang trí không có vai trò giải thích.
**Liên kết tiếng Hàn:** `인과적 최소성` — tính tối thiểu nhân quả.

## 3. faithfulness assumption /ˈfeɪθfəlnəs əˈsʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** an assumption that the conditional independences observed in data are exactly those implied by the graph, without accidental cancellation of causal paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dữ liệu “trung thành” với graph; independence quan sát được đến từ structure chứ không phải hai tác động ngẫu nhiên triệt tiêu nhau.
**Grammar & collocations:** `graph faithfulness assumption` — assumption; `faithfulness violation` — violation; `assume faithfulness` — assume.
**Examples:** `The discovery algorithm can fail when the faithfulness assumption is broken by parameter cancellation.` → Discovery algorithm có thể thất bại khi faithfulness assumption bị phá bởi parameter cancellation.
**Liên kết tiếng Hàn:** `충실성 가정` — giả định faithfulness.

## 4. do-operator /duː ˈɑpəreɪtər/
**Part of speech:** noun
**Core meaning (English):** Pearl's notation for replacing the natural mechanism that determines a variable with an external intervention setting that variable to a chosen value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ký hiệu `do(X=x)` cắt cơ chế tự nhiên của X rồi đặt X bằng x, như chuyển từ quan sát sang can thiệp.
**Grammar & collocations:** `apply the do-operator` — apply; `do-operator notation` — notation; `do-calculus` — phép tính do.
**Examples:** `The do-operator separates the effect of treatment from the association created by shared causes.` → Do-operator tách effect của treatment khỏi association do common cause tạo ra.
**Liên kết tiếng Hàn:** `do 연산자` — toán tử can thiệp.

## 5. do-intervention /ˌduː ˌɪntərˈvɛnʃən/
**Part of speech:** noun
**Core meaning (English):** an external action that sets a variable or treatment independently of the process that would normally generate it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hành động ép một biến nhận giá trị cụ thể, thay vì chỉ quan sát giá trị tự nhiên của nó.
**Grammar & collocations:** `hypothetical do-intervention` — intervention giả định; `represent a do-intervention` — represent; `under do-intervention` — dưới can thiệp.
**Examples:** `A do-intervention on the exposure asks what would happen if the exposure were set by design.` → Do-intervention lên exposure hỏi điều gì xảy ra nếu exposure được đặt bởi thiết kế.
**Liên kết tiếng Hàn:** `do 개입` — can thiệp do.

## 6. graphical criterion /ˈɡræfɪkəl kraɪˈtɪriən/
**Part of speech:** noun
**Core meaning (English):** a rule that uses paths, arrows, and conditioning in a causal graph to determine whether a target effect is identifiable or whether a proposed adjustment is valid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tiêu chí đọc trực tiếp từ graph; thay vì đoán, analyst kiểm tra path nào cần block và path nào không được block.
**Grammar & collocations:** `graphical identification criterion` — criterion; `satisfy a graphical criterion` — satisfy; `criterion-based adjustment` — adjustment.
**Examples:** `The graphical criterion ruled out adjustment for the mediator because it would block part of the total effect.` → Graphical criterion loại adjustment cho mediator vì nó sẽ chặn một phần total effect.
**Liên kết tiếng Hàn:** `그래프 기준` — tiêu chí đồ thị.

## 7. ancestor adjustment /ˈænsɛstər əˈdʒʌstmənt/
**Part of speech:** noun
**Core meaning (English):** adjustment for variables that are ancestors of the treatment or outcome in a causal graph, used to block appropriate backdoor paths without conditioning on descendants.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adjust cho các node tổ tiên, tức nguyên nhân đi trước treatment/outcome; tránh điều chỉnh vào con cháu có thể gây bias.
**Grammar & collocations:** `ancestor-adjustment set` — set; `valid ancestor adjustment` — adjustment hợp lệ; `choose ancestors for adjustment` — chọn.
**Examples:** `Ancestor adjustment preserved the treatment effect while avoiding post-treatment variables.` → Ancestor adjustment giữ treatment effect và tránh các biến sau treatment.
**Liên kết tiếng Hàn:** `조상 변수 보정` — điều chỉnh các biến tổ tiên.

## 8. descendant adjustment /dɪˈsɛndənt əˈdʒʌstmənt/
**Part of speech:** noun
**Core meaning (English):** conditioning on a variable downstream of a treatment or cause, which may change the estimand or introduce bias by blocking part of the causal pathway.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adjust vào “hậu duệ” của treatment; hành động này có thể biến total effect thành direct effect hoặc mở collider path.
**Grammar & collocations:** `post-treatment descendant adjustment` — adjustment sau treatment; `avoid descendant adjustment` — avoid; `descendant variable` — variable hậu duệ.
**Examples:** `Descendant adjustment was inappropriate because hospital recovery occurred after treatment assignment.` → Descendant adjustment không phù hợp vì hồi phục ở bệnh viện xảy ra sau khi phân treatment.
**Liên kết tiếng Hàn:** `자손 변수 보정` — điều chỉnh biến hậu duệ.

## 9. hedge criterion /hɛdʒ kraɪˈtɪriən/
**Part of speech:** noun
**Core meaning (English):** a graphical condition showing that a causal effect cannot be identified from the observed data by ordinary graph-based adjustment because hidden-confounding structures remain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “hàng rào” trong graph báo rằng effect không thể xác định bằng thông tin quan sát hiện có, thường do latent confounding tạo ra.
**Grammar & collocations:** `hedge criterion for nonidentifiability` — criterion; `contain a hedge` — contain; `hedge-based obstruction` — obstruction.
**Examples:** `The hedge criterion showed that no adjustment set could recover the effect from the available variables.` → Hedge criterion cho thấy không adjustment set nào recover effect từ các variable sẵn có.
**Liên kết tiếng Hàn:** `헤지 기준` — tiêu chí hedge trong causal graph.

## 10. recanting witness /rɪˈkæntɪŋ ˈwɪtnəs/
**Part of speech:** noun
**Core meaning (English):** a graphical structure in mediation analysis that prevents identification of certain path-specific effects because one variable would need incompatible counterfactual roles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một “nhân chứng đổi lời” trong graph; cùng một variable phải vừa giữ treatment này vừa giữ treatment khác tùy path, điều không thể quan sát nhất quán.
**Grammar & collocations:** `recanting-witness criterion` — criterion; `recanting-witness structure` — structure; `rule out a path-specific effect` — rule out.
**Examples:** `A recanting witness made the proposed mediated pathway effect nonidentifiable without stronger assumptions.` → Recanting witness làm mediated pathway effect đề xuất không thể identify nếu thiếu assumption mạnh hơn.
**Liên kết tiếng Hàn:** `번복 증인` — cấu trúc “nhân chứng đổi lời”.

## 11. cross-world counterfactual /ˌkrɔs wɜrld ˌkaʊntərˈfɛktʃuəl/
**Part of speech:** noun
**Core meaning (English):** a counterfactual statement that combines potential outcomes from incompatible treatment or mediator worlds for the same unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** câu hỏi ghép hai “thế giới” không thể cùng xảy ra cho một người, chẳng hạn mediator dưới treatment A nhưng outcome dưới treatment B.
**Grammar & collocations:** `cross-world counterfactual assumption` — assumption; `cross-world independence` — independence; `interpret a cross-world quantity` — interpret.
**Examples:** `The natural indirect effect relies on a cross-world counterfactual that cannot be observed directly.` → Natural indirect effect dựa vào cross-world counterfactual không thể quan sát trực tiếp.
**Liên kết tiếng Hàn:** `교차 세계 반사실` — counterfactual giữa các thế giới.

## 12. treatment-confounder feedback /ˈtriːtmənt kənˈfaʊndər ˈfiːdbæk/
**Part of speech:** noun
**Core meaning (English):** a longitudinal pattern in which earlier treatment changes a later confounder that then affects subsequent treatment and outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** treatment hôm trước làm đổi confounder hôm sau, confounder lại ảnh hưởng treatment tiếp theo; đây là vòng feedback khiến adjustment đơn giản nguy hiểm.
**Grammar & collocations:** `time-varying treatment-confounder feedback` — feedback theo thời gian; `model feedback` — model; `feedback-induced bias` — bias.
**Examples:** `Treatment-confounder feedback made standard regression adjustment misleading in the longitudinal study.` → Treatment-confounder feedback làm hồi quy adjustment thông thường gây hiểu lầm trong nghiên cứu dọc.
**Liên kết tiếng Hàn:** `치료-교란요인 피드백` — feedback giữa treatment và confounder.

## 13. confounding bridge function /kənˈfaʊndɪŋ brɪdʒ ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function that links observed proxy measurements to a latent confounder and allows a causal effect to be recovered under proximal identification assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “cây cầu” toán học nối proxy quan sát được với confounder ẩn, giúp đi qua phần thiếu của dữ liệu.
**Grammar & collocations:** `outcome confounding bridge function` — bridge cho outcome; `solve for a bridge function` — solve; `bridge-function restriction` — restriction.
**Examples:** `The analyst estimated a confounding bridge function from repeated proxy measurements.` → Analyst ước lượng confounding bridge function từ các phép đo proxy lặp lại.
**Liên kết tiếng Hàn:** `교란 연결 함수` — hàm cầu confounding.

## 14. proximal causal learning /ˈprɑksəməl ˈkɔzəl ˈlɜrnɪŋ/
**Part of speech:** noun
**Core meaning (English):** a causal-inference framework that uses treatment-inducing and outcome-inducing proxy variables to address unmeasured confounding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học nhân quả “proximal” dùng hai loại proxy để bù cho confounder không đo được, thay vì giả vờ rằng confounding đã biến mất.
**Grammar & collocations:** `proximal causal-learning framework` — framework; `apply proximal causal learning` — apply; `proximal identification` — identification.
**Examples:** `Proximal causal learning used treatment and outcome proxies to estimate the effect despite hidden confounding.` → Proximal causal learning dùng proxy treatment và outcome để ước lượng effect dù có hidden confounding.
**Liên kết tiếng Hàn:** `근접 인과 학습` — proximal causal learning.

## 15. proximal g-formula /ˈprɑksəməl dʒiː ˈfɔrmjələ/
**Part of speech:** noun
**Core meaning (English):** a proximal-inference expression that identifies a causal effect by integrating an estimated bridge function over observed covariate and proxy distributions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phiên bản proximal của g-formula; bridge function kết hợp với phân phối quan sát để tái tạo effect dù confounder ẩn.
**Grammar & collocations:** `proximal g-formula estimator` — estimator; `evaluate the proximal g-formula` — evaluate; `proximal g-computation` — computation.
**Examples:** `The proximal g-formula combined the bridge estimate with the observed outcome-proxy distribution.` → Proximal g-formula kết hợp bridge estimate với phân phối outcome-proxy quan sát được.
**Liên kết tiếng Hàn:** `근접 g-공식` — proximal g-formula.

## 16. proximal outcome confounding /ˈprɑksəməl ˈaʊtkʌm kənˈfaʊndɪŋ/
**Part of speech:** noun
**Core meaning (English):** unmeasured confounding that is represented through a proxy associated with the outcome process in proximal causal analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần confounding ẩn “để lại dấu” trong proxy liên quan đến outcome, giúp bridge function học được ảnh hưởng chưa đo.
**Grammar & collocations:** `proximal outcome-confounding proxy` — proxy; `account for outcome confounding` — account; `outcome-inducing proxy` — proxy gây outcome.
**Examples:** `The survey score served as a proxy for proximal outcome confounding.` → Điểm khảo sát đóng vai proxy cho proximal outcome confounding.
**Liên kết tiếng Hàn:** `근접 결과 교란` — confounding phía outcome trong proximal inference.

## 17. proximal treatment confounding /ˈprɑksəməl ˈtriːtmənt kənˈfaʊndɪŋ/
**Part of speech:** noun
**Core meaning (English):** unmeasured confounding represented through a proxy associated with treatment assignment in proximal causal analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần confounding ẩn “để lại dấu” trong proxy dự báo treatment, giúp mô hình học cách treatment được chọn.
**Grammar & collocations:** `proximal treatment-confounding proxy` — proxy; `treatment-inducing proxy` — proxy gây treatment; `model treatment confounding` — model.
**Examples:** `A prior authorization record acted as a proxy for proximal treatment confounding.` → Hồ sơ authorization trước đó đóng vai proxy cho proximal treatment confounding.
**Liên kết tiếng Hàn:** `근접 치료 교란` — confounding phía treatment trong proximal inference.

## 18. causal transport formula /ˈkɔzəl ˈtrænspɔrt ˈfɔrmjələ/
**Part of speech:** noun
**Core meaning (English):** an expression that combines a causal effect estimated in one population with information about how effect modifiers differ in a target population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công thức “vận chuyển” effect từ source population sang target population bằng cách tái trọng số hoặc tích phân theo effect modifiers.
**Grammar & collocations:** `causal transport formula` — formula; `transport an effect` — transport; `target-population distribution` — distribution.
**Examples:** `The causal transport formula reweighted the trial effect to match the target population's age distribution.` → Causal transport formula reweight trial effect để khớp phân bố tuổi của target population.
**Liên kết tiếng Hàn:** `인과 효과 수송 공식` — công thức vận chuyển effect nhân quả.

## 19. data fusion /ˈdeɪtə ˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** the principled combination of information from multiple datasets whose variables, populations, or designs complement one another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép các mảnh dữ liệu bổ sung; một dataset có treatment–outcome, dataset khác có population hoặc proxy cần thiết.
**Grammar & collocations:** `causal data fusion` — fusion nhân quả; `fuse complementary datasets` — fuse; `data-fusion assumption` — assumption.
**Examples:** `Data fusion linked the randomized treatment estimate with a national survey of effect modifiers.` → Data fusion nối treatment estimate từ randomized study với survey quốc gia về effect modifiers.
**Liên kết tiếng Hàn:** `데이터 융합` — hợp nhất dữ liệu.

## 20. trial generalizability /ˈtraɪəl ˌdʒɛnərəˌlɪzəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the extent to which a causal effect estimated in a trial applies to the broader population from which trial participants could have been drawn.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức độ effect của trial dùng được cho population rộng hơn; generalizability thường cần biết ai được tuyển và ai bị bỏ sót.
**Grammar & collocations:** `trial generalizability analysis` — analysis; `improve generalizability` — improve; `generalizability weighting` — weighting.
**Examples:** `Trial generalizability fell when the enrolled patients were much healthier than the community population.` → Trial generalizability giảm khi bệnh nhân enrolled khỏe hơn nhiều so với population cộng đồng.
**Liên kết tiếng Hàn:** `임상시험 일반화 가능성` — khả năng khái quát từ trial.

## Review in context

A causal analysis begins by asking whether **causal sufficiency**, **causal minimality**, and the **faithfulness assumption** make the graph a credible representation. The **do-operator** formalizes a **do-intervention**, while a **graphical criterion** determines whether an effect is identifiable. **Ancestor adjustment** may be valid, but **descendant adjustment** can change the estimand or open bias. A **hedge criterion** signals nonidentifiability, and a **recanting witness** can block a path-specific effect that depends on a **cross-world counterfactual**. Longitudinal data add **treatment-confounder feedback**. When confounding is unmeasured, a **confounding bridge function**, **proximal causal learning**, and a **proximal g-formula** can use **proximal outcome confounding** and **proximal treatment confounding** proxies. Finally, a **causal transport formula**, **data fusion**, and careful **trial generalizability** can move evidence from one study population to a target population.

**Bản dịch tiếng Việt:**

Phân tích nhân quả bắt đầu bằng câu hỏi liệu **causal sufficiency**, **causal minimality** và **faithfulness assumption** có khiến graph trở thành biểu diễn đáng tin hay không. **Do-operator** formalize một **do-intervention**, còn **graphical criterion** quyết định effect có thể identify hay không. **Ancestor adjustment** có thể hợp lệ, nhưng **descendant adjustment** có thể đổi estimand hoặc mở bias. **Hedge criterion** báo nonidentifiability, còn **recanting witness** có thể chặn path-specific effect dựa trên **cross-world counterfactual**. Dữ liệu dọc còn thêm **treatment-confounder feedback**. Khi confounding không đo được, **confounding bridge function**, **proximal causal learning** và **proximal g-formula** có thể dùng proxy của **proximal outcome confounding** và **proximal treatment confounding**. Cuối cùng, **causal transport formula**, **data fusion** và **trial generalizability** cẩn thận có thể chuyển evidence từ population nghiên cứu sang target population.
