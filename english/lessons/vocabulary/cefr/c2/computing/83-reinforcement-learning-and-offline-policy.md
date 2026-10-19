# C2 Vocabulary — Reinforcement learning and offline policy

This lesson follows a reinforcement-learning system from data collection and value estimation through exploration, policy improvement, and offline deployment.

Flow: **offline reinforcement learning → behavior policy → target policy → value overestimation → conservative Q-learning → distributional value → policy regularization → reward shaping → credit assignment → exploration bonus → world model → model-based rollout → policy gradient variance → actor critic → eligibility trace → temporal-difference target → Bellman residual → offline dataset shift → decision transformer → advantage estimator**.

## 1. offline reinforcement learning /ˈɒflaɪn ˌriːɪnˈfɔːrsmənt ˈlɜːrnɪŋ/
**Part of speech:** noun
**Core meaning (English):** learning a policy from a fixed dataset without collecting new experience during training.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học policy từ dataset cố định mà không thu experience mới.
**Grammar & collocations:** `offline-reinforcement-learning benchmark` — benchmark; `learn from logged trajectories` — học.
**Examples:** `Offline reinforcement learning avoided risky exploration on the deployed robot.` → Offline RL tránh exploration nguy hiểm.
**Liên kết tiếng Hàn:** `오프라인 강화학습`.

## 2. behavior policy /bɪˈheɪvjər ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** the policy that actually generated the actions recorded in a dataset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy thật đã tạo action trong dataset.
**Grammar & collocations:** `behavior-policy estimate` — estimate; `log an action probability` — ghi.
**Examples:** `The behavior policy was unknown, so the evaluator used conservative importance weights.` → Policy behavior không biết nên dùng weight bảo thủ.
**Liên kết tiếng Hàn:** `행동 정책`.

## 3. target policy /ˈtɑːrɡɪt ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** the policy whose performance or decisions the learner ultimately wants to optimize.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy đích mà learner muốn tối ưu.
**Grammar & collocations:** `target-policy evaluation` — evaluation; `deploy a learned policy` — triển khai.
**Examples:** `The target policy selected actions that were rare in the historical logs.` → Target policy chọn action hiếm trong log.
**Liên kết tiếng Hàn:** `목표 정책`.

## 4. value overestimation /ˈvæljuː ˌoʊvərˌestɪˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** systematic inflation of predicted returns caused by noisy or maximized value estimates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán return bị thổi phồng do noise và phép max.
**Grammar & collocations:** `value-overestimation bias` — bias; `overestimate an action value` — đánh giá cao.
**Examples:** `Value overestimation made the agent prefer an action with poor real-world outcomes.` → Overestimation khiến agent chọn action tệ.
**Liên kết tiếng Hàn:** `가치 과대 추정`.

## 5. conservative Q-learning /kənˈsɜːrvətɪv kjuː ˈlɜːrnɪŋ/
**Part of speech:** noun
**Core meaning (English):** an offline method that penalizes value estimates for actions unsupported by the dataset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp phạt value của action không có support trong data.
**Grammar & collocations:** `conservative-Q-learning penalty` — penalty; `lower an out-of-distribution value` — hạ.
**Examples:** `Conservative Q-learning avoided assigning high value to unseen combinations of actions and states.` → CQL tránh value cao cho tổ hợp chưa thấy.
**Liên kết tiếng Hàn:** `보수적 Q 학습`.

## 6. distributional value /ˌdɪstrɪˈbjuːʃənəl ˈvæljuː/
**Part of speech:** noun
**Core meaning (English):** a representation of the full return distribution rather than only its expected value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn cả phân phối return thay vì chỉ mean.
**Grammar & collocations:** `distributional-value head` — head; `estimate a return quantile` — ước tính.
**Examples:** `Distributional value exposed the chance of a rare but severe loss.` → Value phân phối lộ rủi ro hiếm nhưng nặng.
**Liên kết tiếng Hàn:** `분포 가치`.

## 7. policy regularization /ˈpɒləsi ˌreɡjələrəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** constraining a learned policy to remain close to a reference policy or a safer action distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ép policy mới gần policy tham chiếu hoặc distribution an toàn.
**Grammar & collocations:** `policy-regularization coefficient` — coefficient; `penalize policy divergence` — phạt.
**Examples:** `Policy regularization limited how far the update moved from the trusted baseline.` → Regularization giới hạn update khỏi baseline.
**Liên kết tiếng Hàn:** `정책 정규화`.

## 8. reward shaping /rɪˈwɔːrd ˈʃeɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** modifying or supplementing rewards to make useful intermediate behavior easier to learn.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh reward để behavior trung gian dễ học hơn.
**Grammar & collocations:** `reward-shaping term` — term; `provide an intermediate signal` — cung cấp.
**Examples:** `Reward shaping encouraged safe progress before the robot reached the final target.` → Shaping khuyến khích tiến bộ an toàn.
**Liên kết tiếng Hàn:** `보상 형성`.

## 9. credit assignment /ˈkredɪt əˈsaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** determining which earlier actions deserve responsibility for a later reward.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định action trước nào tạo reward sau.
**Grammar & collocations:** `credit-assignment problem` — problem; `attribute a delayed reward` — quy trách nhiệm.
**Examples:** `Long episodes made credit assignment difficult because the reward arrived only at the end.` → Episode dài làm assignment khó.
**Liên kết tiếng Hàn:** `공로 할당`.

## 10. exploration bonus /ˌekspləˈreɪʃən ˈboʊnəs/
**Part of speech:** noun
**Core meaning (English):** an extra reward for visiting uncertain, novel, or poorly understood states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reward thêm cho state mới hoặc chưa chắc chắn.
**Grammar & collocations:** `exploration-bonus schedule` — schedule; `reward novelty` — thưởng.
**Examples:** `The exploration bonus sent the agent toward a rarely visited corridor.` → Bonus đưa agent tới corridor hiếm.
**Liên kết tiếng Hàn:** `탐색 보너스`.

## 11. world model /wɜːrld ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** a learned model that predicts how an environment changes after an action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model học để dự đoán environment đổi sau action.
**Grammar & collocations:** `world-model rollout` — rollout; `predict a next state` — dự đoán.
**Examples:** `The world model simulated consequences before the policy acted in the physical environment.` → Model mô phỏng trước khi action thật.
**Liên kết tiếng Hàn:** `세계 모델`.

## 12. model-based rollout /ˈmɒdəl beɪst ˈroʊlaʊt/
**Part of speech:** noun
**Core meaning (English):** a simulated trajectory generated by repeatedly applying a learned environment model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trajectory giả lập bằng world model lặp nhiều bước.
**Grammar & collocations:** `model-based-rollout horizon` — horizon; `simulate a counterfactual trajectory` — mô phỏng.
**Examples:** `The model-based rollout predicted a collision that the logged trajectory never contained.` → Rollout dự đoán va chạm giả định.
**Liên kết tiếng Hàn:** `모델 기반 롤아웃`.

## 13. policy gradient variance /ˈpɒləsi ˈɡreɪdiənt ˈveriəns/
**Part of speech:** noun
**Core meaning (English):** instability in gradient estimates caused by the randomness of sampled trajectories and returns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gradient policy dao động vì trajectory và return ngẫu nhiên.
**Grammar & collocations:** `policy-gradient-variance reduction` — reduction; `center a return` — chuẩn hóa.
**Examples:** `Policy gradient variance slowed learning until the team added a learned baseline.` → Variance làm chậm đến khi thêm baseline.
**Liên kết tiếng Hàn:** `정책 그래디언트 분산`.

## 14. actor critic /ˈæktər ˈkrɪtɪk/
**Part of speech:** noun
**Core meaning (English):** an architecture with an actor that chooses actions and a critic that estimates their value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** actor chọn action, critic ước tính value.
**Grammar & collocations:** `actor-critic update` — update; `bootstrap a value estimate` — bootstrap.
**Examples:** `The actor critic used the critic's advantage estimate to improve action selection.` → Actor critic dùng advantage để cải thiện.
**Liên kết tiếng Hàn:** `액터-크리틱`.

## 15. eligibility trace /ˌelɪdʒəˈbɪləti treɪs/
**Part of speech:** noun
**Core meaning (English):** a decaying memory of recently visited states or actions used to distribute a learning signal backward.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory suy giảm của state/action gần đây để truyền signal ngược.
**Grammar & collocations:** `eligibility-trace decay` — decay; `assign a delayed update` — phân bổ.
**Examples:** `The eligibility trace spread the reward signal across the recent sequence.` → Trace lan reward qua chuỗi gần.
**Liên kết tiếng Hàn:** `자격 추적`.

## 16. temporal-difference target /ˌtempərəl ˈdɪfərəns ˈtɑːrɡɪt/
**Part of speech:** noun
**Core meaning (English):** a bootstrapped target combining an immediate reward with a discounted estimate of the next state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** target gồm reward hiện tại và value state kế tiếp.
**Grammar & collocations:** `temporal-difference-target error` — error; `bootstrap from the next state` — bootstrap.
**Examples:** `The temporal-difference target updated the value before the episode ended.` → Target cập nhật trước episode kết thúc.
**Liên kết tiếng Hàn:** `시간 차이 목표`.

## 17. Bellman residual /ˈbelmən rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** the discrepancy between a value estimate and the Bellman equation it should satisfy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sai khác giữa value estimate và phương trình Bellman.
**Grammar & collocations:** `Bellman-residual minimization` — minimization; `measure a fixed-point error` — đo.
**Examples:** `The Bellman residual fell as the critic approached a consistent value function.` → Residual giảm khi critic ổn định.
**Liên kết tiếng Hàn:** `벨만 잔차`.

## 18. offline dataset shift /ˈɒflaɪn ˈdeɪtə ʃɪft/
**Part of speech:** noun
**Core meaning (English):** a mismatch between the state-action distribution in a fixed training dataset and that encountered by the learned policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data train khác distribution policy sẽ gặp khi chạy.
**Grammar & collocations:** `offline-dataset-shift diagnosis` — diagnosis; `detect unsupported actions` — phát hiện.
**Examples:** `Offline dataset shift made the policy extrapolate beyond the logged behavior.` → Shift khiến policy extrapolate.
**Liên kết tiếng Hàn:** `오프라인 데이터 분포 이동`.

## 19. decision transformer /dɪˈsɪʒən trænsˈfɔːrmər/
**Part of speech:** noun
**Core meaning (English):** a sequence model that predicts actions by conditioning on desired returns and past trajectory tokens.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequence model dự đoán action theo return mong muốn và trajectory trước.
**Grammar & collocations:** `decision-transformer trajectory` — trajectory; `condition on a return-to-go` — điều kiện.
**Examples:** `The decision transformer generated actions from a desired return-to-go rather than a value table.` → Transformer dùng return mong muốn.
**Liên kết tiếng Hàn:** `의사결정 트랜스포머`.

## 20. advantage estimator /ədˈvæntɪdʒ ˈestɪmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator of how much better an action is than the policy's average choice at a state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính action tốt hơn mức trung bình của policy bao nhiêu.
**Grammar & collocations:** `advantage-estimator baseline` — baseline; `normalize an advantage` — chuẩn hóa.
**Examples:** `The advantage estimator gave the actor a lower-variance direction for improvement.` → Estimator cho hướng ít variance.
**Liên kết tiếng Hàn:** `어드밴티지 추정기`.

## Review in context

**Offline reinforcement learning** separates a **behavior policy** from a **target policy**, so **value overestimation** motivates **conservative Q-learning** and **distributional value**. **Policy regularization**, **reward shaping**, **credit assignment**, and an **exploration bonus** shape learning. A **world model** produces a **model-based rollout**, while **policy gradient variance** motivates an **actor critic**, an **eligibility trace**, and a **temporal-difference target**. The **Bellman residual**, **offline dataset shift**, **decision transformer**, and **advantage estimator** expose remaining deployment risks.

**Bản dịch tiếng Việt:** **Offline reinforcement learning** tách **behavior policy** khỏi **target policy**, nên **value overestimation** thúc đẩy **conservative Q-learning** và **distributional value**. **Policy regularization**, **reward shaping**, **credit assignment** và **exploration bonus** định hình việc học. **World model** tạo **model-based rollout**, còn **policy gradient variance** thúc đẩy **actor critic**, **eligibility trace** và **temporal-difference target**. **Bellman residual**, **offline dataset shift**, **decision transformer** và **advantage estimator** phơi bày rủi ro triển khai.
