# C2+ Vocabulary — Clinical AI governance and monitoring

This lesson follows how clinical AI is evaluated, constrained, monitored, and held accountable after deployment. The network is **clinical artificial intelligence → model factsheet → dataset shift → algorithmic triage → human review loop → explanation quality → counterfactual explanation → fairness guardrail → group odds parity → group rate parity → selective output → abstention rule → probability calibration → silent failure → automation overreliance → notification burden → shadow mode → prospective monitoring → governance framework → change control → release governance → artifact pinning → recovery procedure → algorithm register → post-deployment audit**.

## 1. clinical artificial intelligence /ˈklɪnɪkəl ˌɑrtəˈfɪʃəl ɪnˈtɛlədʒəns/
**Part of speech:** noun
**Core meaning (English):** computational systems that use data to support diagnosis, prognosis, treatment, workflow, or other clinical decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clinical artificial intelligence đưa model vào decision care, nên cần safety và accountability như một clinical tool.
**Grammar & collocations:** `clinical-artificial-intelligence system` — system; `deploy clinical AI` — deploy; `clinical decision` — decision.
**Examples:** `Clinical artificial intelligence flagged patients at risk of deterioration, but clinicians remained responsible for action.` → AI flag, clinician chịu trách nhiệm.
**Liên kết tiếng Hàn:** `임상 인공지능` — clinical artificial intelligence.

## 2. model factsheet /ˈmɑdəl ˈfæk tʃiːt/
**Part of speech:** noun
**Core meaning (English):** a concise document describing a model's purpose, data, limitations, performance, users, and known risks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model factsheet là “tờ hướng dẫn” để biết model dùng được ở đâu và không nên dùng thế nào.
**Grammar & collocations:** `model-factsheet template` — template; `document model limitations` — document; `intended use` — use.
**Examples:** `The model factsheet warned that performance had not been tested in pediatric patients.` → Factsheet nói rõ chưa test ở trẻ em.
**Liên kết tiếng Hàn:** `모델 설명서` — model factsheet.

## 3. dataset shift /ˈdeɪtəˌsɛt ʃɪft/
**Part of speech:** noun
**Core meaning (English):** a change between the data used to develop a model and the data encountered after deployment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dataset shift là world/data mới không còn giống training data.
**Grammar & collocations:** `dataset-shift monitor` — monitor; `detect distribution change` — detect; `deployment population` — population.
**Examples:** `Dataset shift appeared when the hospital adopted a faster scanner that produced different image patterns.` → Scanner mới làm data đổi.
**Liên kết tiếng Hàn:** `데이터셋 변화` — dataset shift.

## 4. algorithmic triage /ˌælɡəˈrɪðmɪk ˈtriːɑʒ/
**Part of speech:** noun
**Core meaning (English):** automated or semi-automated ranking of patients by urgency, risk, or priority for clinical attention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** algorithmic triage dùng model để xếp thứ tự cần care.
**Grammar & collocations:** `algorithmic-triage rule` — rule; `rank patient urgency` — rank; `priority queue` — queue.
**Examples:** `Algorithmic triage moved patients with subtle warning signs higher in the queue for nurse review.` → Model đẩy case warning nhẹ lên review.
**Liên kết tiếng Hàn:** `알고리즘 환자 분류` — algorithmic triage.

## 5. human review loop /ˈhjuːmən rɪˈvju luːp/
**Part of speech:** noun
**Core meaning (English):** a workflow in which qualified people examine, confirm, reject, or correct automated outputs before consequential action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** human review loop giữ người có chuyên môn trong vòng decision.
**Grammar & collocations:** `human-review-loop design` — design; `review an automated output` — review; `escalation path` — path.
**Examples:** `The human review loop caught a mislabeled scan before the recommendation reached the patient chart.` → Human bắt lỗi trước khi chart nhận output.
**Liên kết tiếng Hàn:** `인간 검토 루프` — human review loop.

## 6. explanation quality /ˌɛkspləˈneɪʃən ˈkwɑləti/
**Part of speech:** noun
**Core meaning (English):** the usefulness, accuracy, clarity, and appropriate level of an explanation accompanying a model output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** explanation quality không chỉ “có explanation”, mà explanation có đúng và giúp decision không.
**Grammar & collocations:** `explanation-quality assessment` — assessment; `explain a prediction` — explain; `clinician comprehension` — comprehension.
**Examples:** `Explanation quality was poor because the dashboard listed technical features without showing what the clinician could do.` → Nói feature nhưng không giúp action.
**Liên kết tiếng Hàn:** `설명 품질` — explanation quality.

## 7. counterfactual explanation /ˌkaʊntərˈfæktʃuəl ˌɛkspləˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** an explanation showing what change in the input might have produced a different model output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counterfactual explanation hỏi “điều gì phải khác để prediction đổi?”
**Grammar & collocations:** `counterfactual-explanation method` — method; `change an input feature` — change; `alternative prediction` — prediction.
**Examples:** `The counterfactual explanation showed that a recent vital-sign trend would have changed the risk category.` → Trend khác thì category đổi.
**Liên kết tiếng Hàn:** `반사실적 설명` — counterfactual explanation.

## 8. fairness guardrail /ˈfɛrnəs ˈɡɑrdˌreɪl/
**Part of speech:** noun
**Core meaning (English):** a constraint, test, or operational rule intended to prevent an automated system from producing unacceptable unequal effects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fairness guardrail là lan can ngăn model chạy vào vùng bất công.
**Grammar & collocations:** `fairness-guardrail check` — check; `constrain unequal impact` — constrain; `protected group` — group.
**Examples:** `The fairness guardrail blocked deployment when false-negative rates diverged sharply between groups.` → Chênh false negative quá lớn nên block.
**Liên kết tiếng Hàn:** `공정성 안전장치` — fairness guardrail.

## 9. group odds parity /ɡruːp ɑdz ˈpærəti/
**Part of speech:** noun
**Core meaning (English):** a fairness condition requiring comparable error rates or decision odds across defined groups, conditional on the relevant outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** group odds parity so sánh error/odds giữa group trong cùng condition.
**Grammar & collocations:** `group-odds-parity metric` — metric; `compare error rates` — compare; `conditional outcome` — outcome.
**Examples:** `The audit tested group odds parity for patients who actually required intensive monitoring.` → So error giữa các group có cùng need.
**Liên kết tiếng Hàn:** `집단 오즈 동등성` — group odds parity.

## 10. group rate parity /ɡruːp reɪt ˈpærəti/
**Part of speech:** noun
**Core meaning (English):** a fairness condition requiring a comparable rate of a selected decision or positive classification across defined groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** group rate parity so tỷ lệ được chọn/positive giữa group.
**Grammar & collocations:** `group-rate-parity analysis` — analysis; `compare selection rates` — compare; `positive classification` — classification.
**Examples:** `Group rate parity was examined alongside clinical need rather than treated as proof of fairness by itself.` → Parity không tự động nghĩa là fair.
**Liên kết tiếng Hàn:** `집단 비율 동등성` — group rate parity.

## 11. selective output /sɪˈlɛktɪv ˈaʊtˌpʊt/
**Part of speech:** noun
**Core meaning (English):** a model behavior in which the system gives predictions only for cases meeting a confidence or eligibility condition and withholds others.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** selective output cho model quyền nói “không chắc” thay vì đoán mọi case.
**Grammar & collocations:** `selective-output policy` — policy; `withhold a prediction` — withhold; `confidence threshold` — threshold.
**Examples:** `Selective output reduced unsafe guesses by sending ambiguous images to specialist review.` → Case mơ hồ chuyển human.
**Liên kết tiếng Hàn:** `선택적 출력` — selective output.

## 12. abstention rule /əbˈstɛnʃən ruːl/
**Part of speech:** noun
**Core meaning (English):** a predefined rule specifying when an automated system must decline to decide and refer the case to a person or another process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** abstention rule là rule buộc model dừng khi không đủ chắc.
**Grammar & collocations:** `abstention-rule threshold` — threshold; `abstain from prediction` — abstain; `refer for review` — refer.
**Examples:** `The abstention rule sent images with unusual artifacts to a radiologist instead of forcing a label.` → Artifact lạ thì model abstain.
**Liên kết tiếng Hàn:** `판단 유보 규칙` — abstention rule.

## 13. probability calibration /ˌprɑbəˈbɪləti ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjustment and assessment of predicted probabilities so that they correspond to observed event frequencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** probability calibration làm “70% risk” gần với 70% event thật.
**Grammar & collocations:** `probability-calibration curve` — curve; `calibrate a risk estimate` — calibrate; `observed frequency` — frequency.
**Examples:** `Probability calibration improved after the model was retrained on the hospital's current patient mix.` → Retrain làm probability đáng tin hơn.
**Liên kết tiếng Hàn:** `확률 보정` — probability calibration.

## 14. silent failure /ˈsaɪlənt ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** a failure that produces plausible-looking outputs or no visible alarm, allowing the problem to continue unnoticed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** silent failure nguy hiểm vì system sai nhưng vẫn trông bình thường.
**Grammar & collocations:** `silent-failure detector` — detector; `fail without an alert` — fail; `plausible output` — output.
**Examples:** `A silent failure occurred when the data feed froze and the dashboard kept displaying yesterday's values.` → Dashboard hiển thị data cũ như data mới.
**Liên kết tiếng Hàn:** `무음 장애` — silent failure.

## 15. automation overreliance /ˌɔtəˈmeɪʃən ˌoʊvərɪˈlaɪəns/
**Part of speech:** noun
**Core meaning (English):** excessive dependence on an automated recommendation that reduces independent checking or professional judgment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** automation overreliance là tin machine quá mức và bỏ qua signal khác.
**Grammar & collocations:** `automation-overreliance risk` — risk; `over-rely on a recommendation` — over-rely; `independent check` — check.
**Examples:** `Automation overreliance delayed treatment because the clinician accepted a low-risk score without reviewing the symptoms.` → Score thấp che symptom.
**Liên kết tiếng Hàn:** `자동화 과의존` — automation overreliance.

## 16. notification burden /ˌnoʊtəfəˈkeɪʃən ˈbɜrdən/
**Part of speech:** noun
**Core meaning (English):** the cumulative attention, interruption, and decision cost created by receiving and processing system alerts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** notification burden là gánh nặng attention do quá nhiều alert.
**Grammar & collocations:** `notification-burden assessment` — assessment; `reduce alert burden` — reduce; `interrupt clinical work` — interrupt.
**Examples:** `Notification burden grew after every low-confidence prediction generated a separate page.` → Alert quá nhiều làm burden tăng.
**Liên kết tiếng Hàn:** `알림 부담` — notification burden.

## 17. shadow mode /ˈʃædoʊ moʊd/
**Part of speech:** noun
**Core meaning (English):** a deployment state in which a model generates outputs for evaluation but does not yet influence real decisions or patient care.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** shadow mode cho model chạy “bóng”, quan sát trước khi cho quyền tác động.
**Grammar & collocations:** `shadow-mode deployment` — deployment; `run a model silently` — run; `compare with clinician decisions` — compare.
**Examples:** `The triage model ran in shadow mode for six weeks before clinicians could see its rankings.` → Chạy thử trước khi expose output.
**Liên kết tiếng Hàn:** `섀도 모드` — shadow mode.

## 18. prospective monitoring /prəˈspɛktɪv ˈmɑnətərɪŋ/
**Part of speech:** noun
**Core meaning (English):** planned observation of model performance, safety, data, and effects after deployment as new cases arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prospective monitoring theo dõi model từ bây giờ trở đi, không đợi sự cố.
**Grammar & collocations:** `prospective-monitoring plan` — plan; `monitor post-launch performance` — monitor; `incoming case` — case.
**Examples:** `Prospective monitoring tracked calibration and subgroup errors after the new referral policy changed.` → Policy đổi thì monitor tiếp.
**Liên kết tiếng Hàn:** `전향적 모니터링` — prospective monitoring.

## 19. governance framework /ˈɡʌvərnəns ˈfreɪmˌwɜrk/
**Part of speech:** noun
**Core meaning (English):** the roles, rules, decision rights, review processes, and accountability arrangements that control an AI system across its life cycle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** governance framework bao phủ model từ design tới retirement.
**Grammar & collocations:** `governance-framework charter` — charter; `assign decision rights` — assign; `life-cycle oversight` — oversight.
**Examples:** `The governance framework required clinical, technical, legal, and community review before deployment.` → Nhiều perspective cùng review.
**Liên kết tiếng Hàn:** `거버넌스 체계` — governance framework.

## 20. change control /tʃeɪndʒ kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a documented process for proposing, evaluating, approving, testing, and recording changes to a system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** change control ngăn sửa model tùy tiện mà không biết effect.
**Grammar & collocations:** `change-control procedure` — procedure; `approve a model change` — approve; `change record` — record.
**Examples:** `Change control required a new validation report after the feature extraction code was modified.` → Đổi code phải validate lại.
**Liên kết tiếng Hàn:** `변경 관리` — change control.

## 21. release governance /rɪˈliːs ˈɡʌvərnəns/
**Part of speech:** noun
**Core meaning (English):** oversight of whether a model version is ready, authorized, documented, and safe enough to move into operational use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** release governance quyết định version nào được bước vào production.
**Grammar & collocations:** `release-governance gate` — gate; `authorize a release` — authorize; `production readiness` — readiness.
**Examples:** `Release governance delayed launch until the team resolved a subgroup calibration gap.` → Chưa release vì gap fairness/calibration.
**Liên kết tiếng Hàn:** `출시 거버넌스` — release governance.

## 22. artifact pinning /ˈɑrtəˌfækt ˈpɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** fixing the exact versions of code, data transformations, dependencies, and model files used to produce a deployment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** artifact pinning khóa version để cùng input cho cùng output.
**Grammar & collocations:** `artifact-pinning manifest` — manifest; `pin a dependency version` — pin; `reproducible build` — build.
**Examples:** `Artifact pinning made it possible to reproduce the model that generated the disputed recommendation.` → Khôi phục đúng model cũ.
**Liên kết tiếng Hàn:** `아티팩트 고정` — artifact pinning.

## 23. recovery procedure /rɪˈkʌvəri prəˈsiːdʒər/
**Part of speech:** noun
**Core meaning (English):** a documented process for returning a system to a safe operating state after failure, harm, corruption, or unacceptable performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** recovery procedure trả system về trạng thái safe sau sự cố.
**Grammar & collocations:** `recovery-procedure drill` — drill; `restore a safe state` — restore; `rollback action` — action.
**Examples:** `The recovery procedure switched clinicians to manual triage while the prediction service was isolated.` → Manual triage giữ care chạy.
**Liên kết tiếng Hàn:** `복구 절차` — recovery procedure.

## 24. algorithm register /ˈælɡəˌrɪðəm ˈrɛdʒɪstər/
**Part of speech:** noun
**Core meaning (English):** an inventory recording which algorithmic systems exist, where they are used, who owns them, and what risks or reviews apply.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** algorithm register là danh mục để organization không “quên” model đang chạy ở đâu.
**Grammar & collocations:** `algorithm-register entry` — entry; `inventory deployed models` — inventory; `system owner` — owner.
**Examples:** `The algorithm register showed that three departments were using different versions of the same risk model.` → Register lộ version phân tán.
**Liên kết tiếng Hàn:** `알고리즘 등록부` — algorithm register.

## 25. post-deployment audit /poʊst dɪˈplɔɪmənt ˈɔdɪt/
**Part of speech:** noun
**Core meaning (English):** a structured review of an AI system's real-world performance, harms, fairness, use, and governance after it has been deployed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** post-deployment audit kiểm tra model sau khi chạy thật, không chỉ dựa vào test trước launch.
**Grammar & collocations:** `post-deployment-audit report` — report; `audit real-world use` — audit; `remediate a finding` — remediate.
**Examples:** `The post-deployment audit found that clinicians were bypassing the alert because its notification burden was too high.` → Audit thấy workflow thực tế.
**Liên kết tiếng Hàn:** `배포 후 감사` — post-deployment audit.

## Review in context — Part 1

**Clinical artificial intelligence** needs a **model factsheet** because **dataset shift** can change performance after launch. In **algorithmic triage**, a **human review loop** should examine outputs whose **explanation quality** is inadequate. A **counterfactual explanation** may clarify what changed a prediction, while a **fairness guardrail** can test **group odds parity** and **group rate parity**. **Selective output** and an **abstention rule** allow the model to defer uncertain cases, and **probability calibration** makes risk estimates interpretable.

**Bản dịch tiếng Việt — Phần 1:**

**Clinical artificial intelligence** cần **model factsheet** vì **dataset shift** có thể làm performance đổi sau launch. Trong **algorithmic triage**, **human review loop** nên xem các output có **explanation quality** kém. **Counterfactual explanation** có thể làm rõ điều gì khiến prediction đổi, còn **fairness guardrail** có thể test **group odds parity** và **group rate parity**. **Selective output** và **abstention rule** cho phép model chuyển case không chắc sang người, còn **probability calibration** làm risk estimate dễ hiểu hơn.

## Review in context — Part 2

A **silent failure** may look normal, and **automation overreliance** may make people trust it too much. **Notification burden** can hide important warnings, so **shadow mode** and **prospective monitoring** should precede and follow operational use. A **governance framework** assigns responsibility; **change control** and **release governance** regulate updates. **Artifact pinning** preserves reproducibility, a **recovery procedure** restores safe care, an **algorithm register** records deployed systems, and a **post-deployment audit** checks what actually happened.

**Bản dịch tiếng Việt — Phần 2:**

**Silent failure** có thể trông bình thường, còn **automation overreliance** khiến người dùng tin model quá mức. **Notification burden** có thể che warning quan trọng, nên cần **shadow mode** và **prospective monitoring** trước/sau khi dùng thật. **Governance framework** chia responsibility; **change control** và **release governance** quản lý update. **Artifact pinning** giữ reproducibility, **recovery procedure** đưa care về trạng thái an toàn, **algorithm register** ghi lại system đang chạy, và **post-deployment audit** kiểm tra điều thật sự xảy ra.
