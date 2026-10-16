# C2 Vocabulary — Robotic trajectory optimization and dynamic feasibility

This lesson follows a planned motion from numerical optimization to a physically executable command. The network is **differential dynamic programming → iterative linear-quadratic regulator → direct collocation → multiple-shooting method → trajectory rollout → costate → control Lyapunov function → control barrier function → feasibility restoration → trust-region step → line-search merit → dynamic feasibility → underactuated system → contact-implicit optimization → time-optimal trajectory → minimum-jerk trajectory → bang-bang control → successive convexification → sequential quadratic programming → trajectory regularization**.

## 1. differential dynamic programming /ˌdɪfəˈrenʃəl daɪˈnæmɪk ˈprɑːɡræmɪŋ/
**Part of speech:** noun
**Core meaning (English):** a trajectory-optimization method that repeatedly approximates nonlinear dynamics and cost around a nominal motion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp tối ưu quỹ đạo liên tục xấp xỉ dynamics và cost phi tuyến quanh motion hiện tại.
**Grammar & collocations:** `differential-dynamic-programming update` — bước update; `refine a nominal trajectory` — tinh chỉnh trajectory nominal.
**Examples:** `Differential dynamic programming refined the arm motion after the payload changed.` → Differential dynamic programming tinh chỉnh motion của arm sau khi payload thay đổi.
**Liên kết tiếng Hàn:** `미분 동적 계획법`.

## 2. iterative linear-quadratic regulator /ˈɪtəreɪtɪv ˈlɪniər ˈkwɑːdrətɪk ˈreɡjəleɪtər/
**Part of speech:** noun
**Core meaning (English):** a method that applies linear-quadratic control to successive local approximations of a nonlinear system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp áp dụng control tuyến tính-quadratic lên các xấp xỉ cục bộ liên tiếp của system phi tuyến.
**Grammar & collocations:** `iterative-linear-quadratic-regulator gain` — gain; `backward-pass solution` — nghiệm lượt truyền ngược.
**Examples:** `The iterative linear-quadratic regulator produced a smooth correction from the failed initial guess.` → Iterative linear-quadratic regulator tạo correction mượt từ initial guess thất bại.
**Liên kết tiếng Hàn:** `반복 선형 이차 조절기`.

## 3. direct collocation /dəˈrekt ˌkɑːləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a transcription method that enforces system dynamics at selected points while optimizing states and controls together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp chuyển bài toán đặt dynamics tại các điểm chọn trước rồi tối ưu state và control cùng lúc.
**Grammar & collocations:** `direct-collocation defect` — defect của collocation; `enforce dynamics at nodes` — ép dynamics tại node.
**Examples:** `Direct collocation found a feasible lift without simulating every intermediate control sample.` → Direct collocation tìm được lift khả thi mà không cần simulate mọi control sample trung gian.
**Liên kết tiếng Hàn:** `직접 콜로케이션`.

## 4. multiple-shooting method /ˈmʌltəpəl ˈʃuːtɪŋ ˈmeθəd/
**Part of speech:** noun
**Core meaning (English):** an optimization method that starts several short simulations and constrains their endpoints to join.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp bắt đầu nhiều simulation ngắn rồi ép endpoint của chúng nối liên tục.
**Grammar & collocations:** `multiple-shooting defect` — defect giữa đoạn; `match segment endpoints` — khớp endpoint của segment.
**Examples:** `The multiple-shooting method isolated the unstable turn in one short segment.` → Multiple-shooting method cô lập khúc cua không ổn định trong một segment ngắn.
**Liên kết tiếng Hàn:** `다중 슈팅 방법`.

## 5. trajectory rollout /trəˈdʒektəri ˈroʊlaʊt/
**Part of speech:** noun
**Core meaning (English):** a forward simulation of a candidate control sequence to reveal its resulting state path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** simulation chạy tới trước của control sequence để xem state path thực sự sinh ra.
**Grammar & collocations:** `trajectory-rollout cost` — cost của rollout; `roll out a control sequence` — chạy thử control sequence.
**Examples:** `The trajectory rollout exposed a late collision that the coarse preview had missed.` → Rollout trajectory phát hiện collision muộn mà preview thô bỏ sót.
**Liên kết tiếng Hàn:** `궤적 전개`.

## 6. costate /ˈkɔːsteɪt/
**Part of speech:** noun
**Core meaning (English):** an adjoint variable representing how the objective changes with respect to a system state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến adjoint biểu diễn cost thay đổi thế nào khi state thay đổi.
**Grammar & collocations:** `costate equation` — phương trình costate; `propagate an adjoint backward` — truyền adjoint ngược.
**Examples:** `The costate assigned a large penalty to drifting away from the terminal pose.` → Costate gán penalty lớn cho việc lệch khỏi pose cuối.
**Liên kết tiếng Hàn:** `코상태 변수`.

## 7. control Lyapunov function /kənˈtroʊl laɪəˈpʊnɑːv ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function used to design controls that drive a system toward a desired stable state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm dùng để thiết kế control kéo system về state ổn định mong muốn.
**Grammar & collocations:** `control-Lyapunov-function constraint` — constraint; `certify convergence` — chứng nhận hội tụ.
**Examples:** `The control Lyapunov function encouraged the end-effector to close its position error.` → Control Lyapunov function khuyến khích end-effector thu nhỏ position error.
**Liên kết tiếng Hàn:** `제어 리야푸노프 함수`.

## 8. control barrier function /kənˈtroʊl ˈbæriər ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function that converts a safety requirement into a constraint keeping the system inside a safe set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm biến yêu cầu safety thành constraint giữ system bên trong safe set.
**Grammar & collocations:** `control-barrier-function constraint` — constraint; `render a safe set invariant` — giữ safe set bất biến.
**Examples:** `The control barrier function blocked the command that would have crossed the human-distance boundary.` → Control barrier function chặn command có thể vượt biên khoảng cách với người.
**Liên kết tiếng Hàn:** `제어 장벽 함수`.

## 9. feasibility restoration /ˌfiːzəˈbɪləti ˌrestəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** a repair phase that moves an infeasible optimization iterate back toward satisfying its constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giai đoạn sửa đưa iterate không khả thi trở lại gần miền thỏa constraint.
**Grammar & collocations:** `feasibility-restoration phase` — phase phục hồi; `repair a violated iterate` — sửa iterate vi phạm.
**Examples:** `Feasibility restoration removed the foot penetration before the optimizer resumed cost reduction.` → Feasibility restoration loại foot penetration trước khi optimizer tiếp tục giảm cost.
**Liên kết tiếng Hàn:** `실현 가능성 복원`.

## 10. trust-region step /ˈtrʌst ˌriːdʒən step/
**Part of speech:** noun
**Core meaning (English):** an optimization update restricted to a neighborhood where the local model is considered reliable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước update bị giới hạn trong vùng lân cận nơi local model còn đáng tin.
**Grammar & collocations:** `trust-region-step radius` — bán kính; `shrink the trust region` — thu nhỏ vùng tin cậy.
**Examples:** `The solver shortened the trust-region step after the model predicted too much improvement.` → Solver rút ngắn bước trust-region sau khi model dự đoán cải thiện quá mức.
**Liên kết tiếng Hàn:** `신뢰 영역 단계`.

## 11. line-search merit /ˈlaɪn sɜːrtʃ ˈmɜːrɪt/
**Part of speech:** noun
**Core meaning (English):** a scalar score used during step-size search to balance objective reduction against constraint violation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm số dùng khi tìm step size để cân bằng giảm objective với giảm vi phạm constraint.
**Grammar & collocations:** `line-search-merit function` — hàm merit; `accept a sufficient decrease` — chấp nhận mức giảm đủ.
**Examples:** `The line-search merit rejected the aggressive step because it increased collision violation.` → Merit line-search từ chối bước quá mạnh vì làm tăng vi phạm collision.
**Liên kết tiếng Hàn:** `선 탐색 평가 함수`.

## 12. dynamic feasibility /daɪˈnæmɪk ˌfiːzəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the property that a trajectory satisfies the system’s dynamics, actuator limits, and timing requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính chất trajectory đồng thời thỏa dynamics, actuator limit và timing của system.
**Grammar & collocations:** `dynamic-feasibility check` — kiểm tra; `restore dynamic feasibility` — khôi phục khả thi động lực học.
**Examples:** `The geometric path was short, but its timing failed the dynamic feasibility check.` → Geometric path ngắn nhưng timing không qua kiểm tra dynamic feasibility.
**Liên kết tiếng Hàn:** `동역학적 실현 가능성`.

## 13. underactuated system /ˌʌndərˈæktʃueɪtɪd ˈsɪstəm/
**Part of speech:** noun
**Core meaning (English):** a system with fewer independent actuators than degrees of freedom it must control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** system có ít actuator độc lập hơn số bậc tự do cần điều khiển.
**Grammar & collocations:** `underactuated-system dynamics` — dynamics; `exploit passive motion` — tận dụng motion thụ động.
**Examples:** `The underactuated system let the payload swing, so the planner timed the base motion carefully.` → System underactuated cho payload đung đưa, nên planner phải căn timing base cẩn thận.
**Liên kết tiếng Hàn:** `부족 구동 시스템`.

## 14. contact-implicit optimization /ˈkɑːntækt ɪmˈplɪsɪt ˌɑːptəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** trajectory optimization that chooses contact events and forces without fixing the contact sequence beforehand.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu trajectory tự chọn event contact và force thay vì ấn định sequence từ đầu.
**Grammar & collocations:** `contact-implicit-optimization formulation` — formulation; `discover a contact sequence` — tìm contact sequence.
**Examples:** `Contact-implicit optimization discovered that a brief fingertip touch stabilized the climb.` → Contact-implicit optimization phát hiện một lần chạm đầu ngón ngắn giúp ổn định lúc leo.
**Liên kết tiếng Hàn:** `접촉 암시적 최적화`.

## 15. time-optimal trajectory /taɪm ˈɑːptəməl trəˈdʒektəri/
**Part of speech:** noun
**Core meaning (English):** a feasible path whose duration is minimized under the system’s constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** path khả thi có thời lượng ngắn nhất dưới các constraint của system.
**Grammar & collocations:** `time-optimal-trajectory profile` — profile; `minimize traversal time` — tối thiểu hóa thời gian đi qua.
**Examples:** `The time-optimal trajectory was rejected because it left no margin for sensing delay.` → Trajectory time-optimal bị loại vì không còn margin cho sensing delay.
**Liên kết tiếng Hàn:** `최소 시간 궤적`.

## 16. minimum-jerk trajectory /ˈmɪnəməm dʒɜːrk trəˈdʒektəri/
**Part of speech:** noun
**Core meaning (English):** a trajectory designed to minimize the rate of change of acceleration and therefore reduce abrupt motion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trajectory tối thiểu hóa jerk để motion bớt giật đột ngột.
**Grammar & collocations:** `minimum-jerk-trajectory generator` — bộ sinh; `smooth human-like motion` — tạo motion mượt như người.
**Examples:** `A minimum-jerk trajectory made the handoff comfortable for the operator.` → Trajectory minimum-jerk khiến thao tác trao vật dễ chịu cho operator.
**Liên kết tiếng Hàn:** `최소 저크 궤적`.

## 17. bang-bang control /ˈbæŋ bæŋ kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** control that switches between extreme allowable values, often to minimize time in an idealized system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control bật qua lại giữa các giá trị cực đại cho phép, thường để giảm time trong model lý tưởng.
**Grammar & collocations:** `bang-bang-control profile` — profile; `switch at a reachable boundary` — chuyển tại boundary có thể đạt.
**Examples:** `The bang-bang control profile was softened before deployment to protect the gearbox.` → Profile bang-bang control được làm mềm trước khi chạy thật để bảo vệ hộp số.
**Liên kết tiếng Hàn:** `뱅뱅 제어`.

## 18. successive convexification /səkˈsesɪv kənˌveksəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an approach that solves a sequence of convex approximations to a difficult nonlinear optimization problem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách giải một chuỗi xấp xỉ convex cho bài toán nonlinear khó.
**Grammar & collocations:** `successive-convexification iteration` — iteration; `convexify a nonlinear constraint` — chuyển constraint phi tuyến thành xấp xỉ convex.
**Examples:** `Successive convexification handled the obstacle geometry with a sequence of safer local models.` → Successive convexification xử lý geometry obstacle bằng chuỗi local model an toàn hơn.
**Liên kết tiếng Hàn:** `연속 볼록화`.

## 19. sequential quadratic programming /sɪˈkwenʃəl ˈkwɑːdrətɪk ˈprɑːɡræmɪŋ/
**Part of speech:** noun
**Core meaning (English):** an optimization method that solves a series of quadratic subproblems approximating a constrained nonlinear problem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp giải chuỗi bài toán con quadratic để xấp xỉ bài toán nonlinear có constraint.
**Grammar & collocations:** `sequential-quadratic-programming subproblem` — bài toán con; `update Lagrange multipliers` — update multiplier Lagrange.
**Examples:** `Sequential quadratic programming adjusted the contact timing while respecting the force limits.` → Sequential quadratic programming chỉnh timing contact mà vẫn tôn trọng force limit.
**Liên kết tiếng Hàn:** `순차 이차 계획법`.

## 20. trajectory regularization /trəˈdʒektəri ˌreɡjələrəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** adding a preference for smooth, simple, or otherwise well-behaved trajectories to the optimization objective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm preference cho trajectory mượt, đơn giản hoặc ổn định vào objective tối ưu.
**Grammar & collocations:** `trajectory-regularization term` — term regularization; `discourage abrupt corrections` — hạn chế correction đột ngột.
**Examples:** `Trajectory regularization kept the optimizer from making many tiny reversals near the goal.` → Regularization trajectory ngăn optimizer tạo nhiều lần đảo hướng nhỏ gần goal.
**Liên kết tiếng Hàn:** `궤적 정규화`.

## Review in context

**Differential dynamic programming** and an **iterative linear-quadratic regulator** refine a nominal motion, while **direct collocation**, a **multiple-shooting method**, and a **trajectory rollout** test whether the **costate** supports the update. A **control Lyapunov function** attracts the robot to its goal and a **control barrier function** protects the safe set; **feasibility restoration**, a **trust-region step**, and **line-search merit** repair difficult iterates. **Dynamic feasibility** matters especially for an **underactuated system**, where **contact-implicit optimization** may discover useful contacts. The solver can compare a **time-optimal trajectory**, a **minimum-jerk trajectory**, and **bang-bang control**, then use **successive convexification**, **sequential quadratic programming**, and **trajectory regularization** to produce a command that is fast, smooth, and executable.

**Bản dịch tiếng Việt:** **Differential dynamic programming** và **iterative linear-quadratic regulator** tinh chỉnh motion nominal, còn **direct collocation**, **multiple-shooting method** và **trajectory rollout** kiểm tra liệu **costate** có hỗ trợ bước update hay không. **Control Lyapunov function** kéo robot về goal, còn **control barrier function** bảo vệ safe set; **feasibility restoration**, **trust-region step** và **line-search merit** sửa các iterate khó. **Dynamic feasibility** đặc biệt quan trọng với **underactuated system**, nơi **contact-implicit optimization** có thể tìm ra contact hữu ích. Solver so sánh **time-optimal trajectory**, **minimum-jerk trajectory** và **bang-bang control**, rồi dùng **successive convexification**, **sequential quadratic programming** và **trajectory regularization** để tạo command nhanh, mượt và chạy được.
