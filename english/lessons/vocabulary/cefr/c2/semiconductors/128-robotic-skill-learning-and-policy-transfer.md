# C2 Vocabulary — Robotic skill learning and policy transfer

This lesson follows a manipulation skill from a reusable motion representation through learning, transfer, and safety constraints. The network is **manipulation skill → motor primitive → dynamic movement primitive → probabilistic movement primitive → movement primitive modulation → skill parameterization → skill library → skill embedding → policy distillation → policy adaptation → policy transfer → sim-to-real transfer → domain randomization → system randomization → residual policy → behavior cloning → inverse reinforcement learning → reinforcement learning from demonstration → safe reinforcement learning → constrained reinforcement learning**.

## 1. manipulation skill /məˌnɪpjəˈleɪʃən skɪl/
**Part of speech:** noun
**Core meaning (English):** a reusable ability to move, contact, and control an object to achieve a manipulation goal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng tái sử dụng để move, contact và control object nhằm đạt manipulation goal.
**Grammar & collocations:** `manipulation-skill model` — model; `execute a learned insertion` — thực hiện insertion đã học.
**Examples:** `The manipulation skill aligned the peg before applying insertion force.` → Manipulation skill căn peg trước khi áp insertion force.
**Liên kết tiếng Hàn:** `조작 기술`.

## 2. motor primitive /ˈmoʊtər ˈprɪmətɪv/
**Part of speech:** noun
**Core meaning (English):** a compact, reusable movement unit that can be combined or scaled to produce behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đơn vị motion nhỏ, tái sử dụng, có thể ghép hoặc scale để tạo behavior.
**Grammar & collocations:** `motor-primitive basis` — basis; `blend primitives in sequence` — gộp primitive theo sequence.
**Examples:** `A reaching motor primitive was reused for shelves at different heights.` → Motor primitive với tay được dùng lại cho kệ ở các độ cao khác nhau.
**Liên kết tiếng Hàn:** `운동 원시기`.

## 3. dynamic movement primitive /daɪˈnæmɪk ˈmuːvmənt ˈprɪmətɪv/
**Part of speech:** noun
**Core meaning (English):** a movement representation with stable dynamics that can be shaped toward a goal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation motion có dynamics ổn định và có thể định hình về goal.
**Grammar & collocations:** `dynamic-movement-primitive attractor` — attractor; `scale a demonstrated motion` — scale motion được demonstrate.
**Examples:** `The dynamic movement primitive stretched the demonstrated wipe across the larger panel.` → Dynamic movement primitive kéo dài wipe đã demonstrate trên panel lớn hơn.
**Liên kết tiếng Hàn:** `동적 운동 원시기`.

## 4. probabilistic movement primitive /ˌprɑːbəbɪˈlɪstɪk ˈmuːvmənt ˈprɪmətɪv/
**Part of speech:** noun
**Core meaning (English):** a movement representation that models both a typical trajectory and variation across demonstrations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation model cả trajectory điển hình và variation giữa các demonstration.
**Grammar & collocations:** `probabilistic-movement-primitive distribution` — distribution; `capture demonstration variance` — ghi lại variance demonstration.
**Examples:** `The probabilistic movement primitive preserved variation in how experts approached the handle.` → Probabilistic movement primitive giữ variation trong cách expert tiếp cận tay cầm.
**Liên kết tiếng Hàn:** `확률적 운동 원시기`.

## 5. movement primitive modulation /ˈmuːvmənt ˈprɪmətɪv ˌmɑːdʒəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** changing a reusable movement’s timing, shape, or goal while preserving its learned structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi timing, shape hoặc goal của movement tái sử dụng nhưng giữ structure đã học.
**Grammar & collocations:** `movement-primitive-modulation gain` — gain; `adapt a path to a new target` — adapt path tới target mới.
**Examples:** `Movement primitive modulation shortened the approach when the object was already near the gripper.` → Movement primitive modulation rút ngắn approach khi object đã gần gripper.
**Liên kết tiếng Hàn:** `운동 원시기 변조`.

## 6. skill parameterization /skɪl pəˌræmə təˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** expressing a skill through adjustable parameters such as target, speed, force, or contact location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn skill bằng parameter chỉnh được như target, speed, force hoặc contact location.
**Grammar & collocations:** `skill-parameterization scheme` — scheme; `tune a force parameter` — chỉnh force parameter.
**Examples:** `Skill parameterization let the same pour routine use a different cup height.` → Skill parameterization cho cùng routine rót dùng độ cao cốc khác.
**Liên kết tiếng Hàn:** `기술 매개변수화`.

## 7. skill library /skɪl ˈlaɪbreri/
**Part of speech:** noun
**Core meaning (English):** an organized collection of learned skills that a planner can retrieve and compose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ sưu tập skill đã học để planner truy xuất và ghép lại.
**Grammar & collocations:** `skill-library retrieval` — retrieval; `compose a sequence of skills` — ghép sequence skill.
**Examples:** `The skill library supplied grasp, lift, and place routines for the new workcell.` → Skill library cung cấp routine grasp, lift và place cho workcell mới.
**Liên kết tiếng Hàn:** `기술 라이브러리`.

## 8. skill embedding /skɪl emˈbedɪŋ/
**Part of speech:** noun
**Core meaning (English):** a compact representation that places related skills near one another in a learned feature space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation gọn đặt các skill liên quan gần nhau trong feature space đã học.
**Grammar & collocations:** `skill-embedding space` — không gian; `retrieve a neighboring skill` — truy xuất skill lân cận.
**Examples:** `The skill embedding placed two variants of wiping near each other despite different speeds.` → Skill embedding đặt hai biến thể wiping gần nhau dù speed khác.
**Liên kết tiếng Hàn:** `기술 임베딩`.

## 9. policy distillation /ˈpɑːləsi dɪstəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** compressing behavior from a large or ensemble policy into a smaller policy that is easier to deploy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nén behavior từ policy lớn hoặc ensemble vào policy nhỏ dễ deploy hơn.
**Grammar & collocations:** `policy-distillation loss` — loss; `compress an ensemble controller` — nén ensemble controller.
**Examples:** `Policy distillation produced a compact controller that fit the wrist computer.` → Policy distillation tạo controller gọn vừa máy tính ở cổ tay.
**Liên kết tiếng Hàn:** `정책 증류`.

## 10. policy adaptation /ˈpɑːləsi ˌædæpˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** modifying a learned policy so it works under a new object, robot, environment, or task condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa policy đã học để chạy trong object, robot, environment hoặc condition mới.
**Grammar & collocations:** `policy-adaptation step` — bước; `adapt to a shifted payload` — adapt với payload đổi.
**Examples:** `Policy adaptation corrected the grasp after the new object proved more slippery.` → Policy adaptation sửa grasp sau khi object mới trơn hơn.
**Liên kết tiếng Hàn:** `정책 적응`.

## 11. policy transfer /ˈpɑːləsi ˈtrænsfər/
**Part of speech:** noun
**Core meaning (English):** applying behavior learned in one setting to another setting with related dynamics or goals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** áp dụng behavior học ở setting này sang setting khác có dynamics hoặc goal liên quan.
**Grammar & collocations:** `policy-transfer criterion` — criterion; `reuse a controller across platforms` — dùng lại controller giữa platform.
**Examples:** `Policy transfer moved the packing behavior from the small arm to the larger arm.` → Policy transfer chuyển behavior đóng gói từ arm nhỏ sang arm lớn.
**Liên kết tiếng Hàn:** `정책 전이`.

## 12. sim-to-real transfer /sɪm tə riːəl ˈtrænsfər/
**Part of speech:** noun
**Core meaning (English):** deploying behavior learned or tested in simulation on a physical robot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa behavior học hoặc test trong simulation lên robot thật.
**Grammar & collocations:** `sim-to-real-transfer gap` — khoảng cách; `validate on hardware` — validate trên hardware.
**Examples:** `Sim-to-real transfer failed until the simulator included cable drag and camera noise.` → Sim-to-real transfer thất bại cho tới khi simulator thêm cable drag và camera noise.
**Liên kết tiếng Hàn:** `시뮬레이션-현실 전이`.

## 13. domain randomization /doʊˈmeɪn ˌrændəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** varying simulation conditions during training so a policy learns behavior robust to domain differences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi condition simulation khi train để policy robust với khác biệt domain.
**Grammar & collocations:** `domain-randomization range` — range; `vary lighting and friction` — thay đổi lighting và friction.
**Examples:** `Domain randomization exposed the policy to many table colors and contact coefficients.` → Domain randomization cho policy gặp nhiều màu bàn và hệ số contact.
**Liên kết tiếng Hàn:** `도메인 무작위화`.

## 14. system randomization /ˈsɪstəm ˌrændəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** varying physical system parameters during training to improve robustness to model uncertainty.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi parameter physical của system khi train để robust với model uncertainty.
**Grammar & collocations:** `system-randomization distribution` — distribution; `vary mass and actuator delay` — thay đổi mass và actuator delay.
**Examples:** `System randomization varied joint damping before the policy was tested on the real arm.` → System randomization thay đổi damping joint trước khi test policy trên arm thật.
**Liên kết tiếng Hàn:** `시스템 무작위화`.

## 15. residual policy /rɪˈzɪdʒuəl ˈpɑːləsi/
**Part of speech:** noun
**Core meaning (English):** a learned policy that supplies corrections on top of a trusted baseline controller.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy học thêm correction trên baseline controller đáng tin.
**Grammar & collocations:** `residual-policy output` — output; `correct a model-based command` — sửa command model-based.
**Examples:** `The residual policy compensated for soft foam contact while the baseline kept the arm stable.` → Residual policy bù contact foam mềm trong khi baseline giữ arm ổn định.
**Liên kết tiếng Hàn:** `잔차 정책`.

## 16. behavior cloning /bɪˈheɪvjər ˈkloʊnɪŋ/
**Part of speech:** noun
**Core meaning (English):** learning a policy by imitating state-action examples from an expert.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học policy bằng cách bắt chước state-action example từ expert.
**Grammar & collocations:** `behavior-cloning dataset` — dataset; `imitate an expert trajectory` — bắt chước expert trajectory.
**Examples:** `Behavior cloning learned the broad reach before reinforcement refined contact timing.` → Behavior cloning học reach tổng quát trước khi reinforcement tinh chỉnh timing contact.
**Liên kết tiếng Hàn:** `행동 복제`.

## 17. inverse reinforcement learning /ɪnˈvɜːrs ˌriːɪnˈfɔːrsmənt ˈlɜːrnɪŋ/
**Part of speech:** noun
**Core meaning (English):** inferring the reward or preferences that could have produced an expert’s behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy reward hoặc preference có thể tạo ra behavior của expert.
**Grammar & collocations:** `inverse-reinforcement-learning objective` — objective; `infer a hidden cost function` — suy cost function ẩn.
**Examples:** `Inverse reinforcement learning inferred that the operator valued clearance over speed.` → Inverse reinforcement learning suy rằng operator coi trọng clearance hơn speed.
**Liên kết tiếng Hàn:** `역강화 학습`.

## 18. reinforcement learning from demonstration /ˌriːɪnˈfɔːrsmənt ˈlɜːrnɪŋ frəm ˌdemənˈstreɪʃən/
**Part of speech:** noun
**Core meaning (English):** reinforcement learning initialized or guided by examples supplied by a human or another expert.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reinforcement learning được khởi tạo hoặc dẫn dắt bằng example từ người hay expert khác.
**Grammar & collocations:** `reinforcement-learning-from-demonstration pipeline` — pipeline; `bootstrap exploration from examples` — khởi động exploration từ example.
**Examples:** `Reinforcement learning from demonstration reduced unsafe exploration during the first trials.` → Reinforcement learning from demonstration giảm exploration không an toàn trong các trial đầu.
**Liên kết tiếng Hàn:** `시연으로부터의 강화 학습`.

## 19. safe reinforcement learning /seɪf ˌriːɪnˈfɔːrsmənt ˈlɜːrnɪŋ/
**Part of speech:** noun
**Core meaning (English):** reinforcement learning that enforces safety constraints during exploration and policy improvement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reinforcement learning ép safety constraint trong lúc exploration và cải thiện policy.
**Grammar & collocations:** `safe-reinforcement-learning shield` — shield; `bound exploratory actions` — giới hạn exploratory action.
**Examples:** `Safe reinforcement learning kept the gripper below the force limit while searching for a faster grasp.` → Safe reinforcement learning giữ gripper dưới force limit khi tìm grasp nhanh hơn.
**Liên kết tiếng Hàn:** `안전 강화 학습`.

## 20. constrained reinforcement learning /kənˈstreɪnd ˌriːɪnˈfɔːrsmənt ˈlɜːrnɪŋ/
**Part of speech:** noun
**Core meaning (English):** reinforcement learning that optimizes reward subject to explicit cost, resource, or safety constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reinforcement learning tối ưu reward dưới cost, resource hoặc safety constraint rõ ràng.
**Grammar & collocations:** `constrained-reinforcement-learning objective` — objective; `enforce a cumulative risk budget` — ép risk budget tích lũy.
**Examples:** `Constrained reinforcement learning improved throughput without exceeding the thermal budget.` → Constrained reinforcement learning tăng throughput mà không vượt thermal budget.
**Liên kết tiếng Hàn:** `제약 강화 학습`.

## Review in context

A **manipulation skill** can be represented by a **motor primitive**, **dynamic movement primitive**, or **probabilistic movement primitive**; **movement primitive modulation** and **skill parameterization** adapt it. A **skill library** and **skill embedding** support retrieval, while **policy distillation**, **policy adaptation**, and **policy transfer** make deployment smaller and broader. **Sim-to-real transfer** benefits from **domain randomization** and **system randomization**; a **residual policy** can correct a trusted baseline. **Behavior cloning**, **inverse reinforcement learning**, and **reinforcement learning from demonstration** learn from experts, while **safe reinforcement learning** and **constrained reinforcement learning** keep exploration within explicit limits.

**Bản dịch tiếng Việt:** **Manipulation skill** có thể biểu diễn bằng **motor primitive**, **dynamic movement primitive** hoặc **probabilistic movement primitive**; **movement primitive modulation** và **skill parameterization** giúp adapt nó. **Skill library** và **skill embedding** hỗ trợ retrieval, còn **policy distillation**, **policy adaptation** và **policy transfer** làm deployment gọn và rộng hơn. **Sim-to-real transfer** hưởng lợi từ **domain randomization** và **system randomization**; **residual policy** có thể sửa baseline đáng tin. **Behavior cloning**, **inverse reinforcement learning** và **reinforcement learning from demonstration** học từ expert, còn **safe reinforcement learning** và **constrained reinforcement learning** giữ exploration trong giới hạn rõ ràng.
