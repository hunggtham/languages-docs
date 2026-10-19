# C2 Vocabulary — Robotic reachability and runtime safety

This lesson connects mathematical reachability analysis with safeguards that can supervise a robot during execution. The network is **backward reachable set → forward reachable set → viability kernel → capture basin → level-set method → Hamilton-Jacobi reachability → barrier certificate → sum-of-squares certificate → occupation measure → formal safety guarantee → runtime assurance → safety filter → shielded controller → fallback policy → emergency stop envelope → invariant funnel → region of attraction → Lyapunov sublevel set → reachability overapproximation → reachability underapproximation**.

## 1. backward reachable set /ˈbækwərd rɪˈtʃəbəl set/
**Part of speech:** noun
**Core meaning (English):** the states from which a target can be reached within a given time under allowed dynamics and controls.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập state có thể đi tới target trong khoảng time cho trước dưới dynamics và control cho phép.
**Grammar & collocations:** `backward-reachable-set computation` — phép tính; `trace states back from a target` — lần ngược state từ target.
**Examples:** `The backward reachable set showed which poses could still recover before the arm hit its limit.` → Backward reachable set cho thấy những pose nào còn có thể recovery trước khi arm chạm limit.
**Liên kết tiếng Hàn:** `역방향 도달 가능 집합`.

## 2. forward reachable set /ˈfɔːrwərd rɪˈtʃəbəl set/
**Part of speech:** noun
**Core meaning (English):** the states that may be reached from an initial set under the system’s possible controls and disturbances.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập state có thể sinh ra từ initial set dưới control và disturbance có thể xảy ra.
**Grammar & collocations:** `forward-reachable-set tube` — tube; `propagate possible states` — truyền các state khả dĩ.
**Examples:** `The forward reachable set stayed clear of the human workspace for the next two seconds.` → Forward reachable set vẫn tránh xa workspace của người trong hai giây tới.
**Liên kết tiếng Hàn:** `순방향 도달 가능 집합`.

## 3. viability kernel /ˌvaɪəˈbɪləti ˈkɜːrnəl/
**Part of speech:** noun
**Core meaning (English):** the set of states from which at least one admissible control can keep the system safe indefinitely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập state mà từ đó vẫn có ít nhất một control hợp lệ giữ system an toàn mãi.
**Grammar & collocations:** `viability-kernel approximation` — xấp xỉ; `remain inside the safe set` — ở trong safe set.
**Examples:** `The supervisor kept the robot inside the viability kernel while the operator changed tasks.` → Supervisor giữ robot trong viability kernel khi operator đổi task.
**Liên kết tiếng Hàn:** `생존 가능 핵`.

## 4. capture basin /ˈkæptʃər ˈbeɪsən/
**Part of speech:** noun
**Core meaning (English):** the set of states that can be driven into a desired target or safe region under admissible control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng state có thể được điều khiển vào target hoặc vùng an toàn mong muốn.
**Grammar & collocations:** `capture-basin boundary` — biên; `drive a state into the target` — đưa state vào target.
**Examples:** `The recovery maneuver worked only inside the capture basin around the upright pose.` → Maneuver recovery chỉ hoạt động trong capture basin quanh pose thẳng.
**Liên kết tiếng Hàn:** `포획 분지`.

## 5. level-set method /ˈlevəl set ˈmeθəd/
**Part of speech:** noun
**Core meaning (English):** a numerical method that represents a moving boundary as a contour of an implicit function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp số biểu diễn boundary chuyển động như contour của một hàm ẩn.
**Grammar & collocations:** `level-set-method grid` — lưới; `evolve an implicit boundary` — tiến hóa boundary ẩn.
**Examples:** `The level-set method propagated the safe boundary through the changing obstacle field.` → Level-set method truyền boundary an toàn qua obstacle field thay đổi.
**Liên kết tiếng Hàn:** `레벨 집합 방법`.

## 6. Hamilton-Jacobi reachability /ˈhæməltən dʒəˈkoʊbi rɪˌtʃəbɪləti/
**Part of speech:** noun
**Core meaning (English):** reachability analysis based on a Hamilton-Jacobi equation describing optimal evolution of a value function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích reachability dùng phương trình Hamilton-Jacobi mô tả evolution tối ưu của value function.
**Grammar & collocations:** `Hamilton-Jacobi-reachability solution` — nghiệm; `solve a value-function PDE` — giải PDE value function.
**Examples:** `Hamilton-Jacobi reachability identified a last-safe intervention time for the controller.` → Hamilton-Jacobi reachability xác định thời điểm can thiệp cuối cùng còn an toàn.
**Liên kết tiếng Hàn:** `해밀턴-야코비 도달 가능성`.

## 7. barrier certificate /ˈbæriər sərˈtɪfɪkət/
**Part of speech:** noun
**Core meaning (English):** a function-based proof that a system cannot cross from a safe region into an unsafe one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng dựa trên hàm cho thấy system không thể vượt từ vùng safe sang vùng unsafe.
**Grammar & collocations:** `barrier-certificate condition` — điều kiện; `certify forward invariance` — chứng nhận bất biến tiến.
**Examples:** `The barrier certificate proved that the commanded speed could not enter the restricted zone.` → Barrier certificate chứng minh speed command không thể đi vào vùng hạn chế.
**Liên kết tiếng Hàn:** `장벽 인증서`.

## 8. sum-of-squares certificate /ˌsʌm əv ˈskwerz sərˈtɪfɪkət/
**Part of speech:** noun
**Core meaning (English):** a polynomial safety or stability proof expressed as a sum of squared polynomials and verified by convex optimization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chứng minh polynomial về safety/stability viết thành tổng bình phương và kiểm tra bằng convex optimization.
**Grammar & collocations:** `sum-of-squares-certificate program` — chương trình; `certify polynomial nonnegativity` — chứng nhận polynomial không âm.
**Examples:** `A sum-of-squares certificate established positivity of the storage function near the dock.` → Sum-of-squares certificate xác lập tính dương của storage function gần dock.
**Liên kết tiếng Hàn:** `제곱합 인증서`.

## 9. occupation measure /ˌɑːkjəˈpeɪʃən ˈmeʒər/
**Part of speech:** noun
**Core meaning (English):** a measure describing how much time a trajectory spends in different regions of state and control space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measure mô tả trajectory dành bao nhiêu time ở từng vùng state và control space.
**Grammar & collocations:** `occupation-measure relaxation` — relaxation; `encode trajectory statistics` — mã hóa thống kê trajectory.
**Examples:** `The occupation measure revealed that most energy was spent near the acceleration boundary.` → Occupation measure cho thấy phần lớn energy tiêu ở gần boundary acceleration.
**Liên kết tiếng Hàn:** `점유 측도`.

## 10. formal safety guarantee /ˈfɔːrməl ˈseɪfti ˌɡærənˈtiː/
**Part of speech:** noun
**Core meaning (English):** a mathematically justified statement that a specified safety property holds under stated assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tuyên bố có chứng minh toán học rằng safety property đúng dưới các assumption đã nêu.
**Grammar & collocations:** `formal-safety-guarantee scope` — phạm vi; `state the assumptions explicitly` — nêu rõ assumption.
**Examples:** `The formal safety guarantee covered sensor delay but not an unmodeled collision.` → Formal safety guarantee bao gồm sensor delay nhưng không bao gồm collision chưa model.
**Liên kết tiếng Hàn:** `형식적 안전 보장`.

## 11. runtime assurance /ˈrʌntaɪm əˈʃʊrəns/
**Part of speech:** noun
**Core meaning (English):** online supervision that checks whether a running system remains within approved safety and performance limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giám sát online kiểm tra system đang chạy có còn trong giới hạn safety và performance được duyệt không.
**Grammar & collocations:** `runtime-assurance monitor` — monitor; `supervise an uncertified policy` — giám sát policy chưa chứng nhận.
**Examples:** `Runtime assurance replaced the learned policy when its predicted contact became unsafe.` → Runtime assurance thay learned policy khi contact dự đoán trở nên không an toàn.
**Liên kết tiếng Hàn:** `실행 시간 보증`.

## 12. safety filter /ˈseɪfti ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a mechanism that minimally modifies a proposed command so it satisfies safety constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế sửa command đề xuất ít nhất có thể để nó thỏa safety constraint.
**Grammar & collocations:** `safety-filter projection` — phép chiếu; `project a command into the safe set` — chiếu command vào safe set.
**Examples:** `The safety filter lowered the wrist velocity without changing the operator’s intended direction.` → Safety filter giảm wrist velocity nhưng không đổi hướng operator định làm.
**Liên kết tiếng Hàn:** `안전 필터`.

## 13. shielded controller /ˈʃiːldɪd kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** a controller whose commands are wrapped by an independent mechanism that blocks unsafe actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** controller được một cơ chế độc lập “che chắn”, chặn action không an toàn.
**Grammar & collocations:** `shielded-controller architecture` — architecture; `block an unsafe action` — chặn action unsafe.
**Examples:** `The shielded controller allowed the policy to explore only where the distance margin stayed positive.` → Shielded controller chỉ cho policy explore nơi distance margin còn dương.
**Liên kết tiếng Hàn:** `보호된 제어기`.

## 14. fallback policy /ˈfɔːlbæk ˈpɑːləsi/
**Part of speech:** noun
**Core meaning (English):** a backup policy used when the preferred controller becomes unavailable or unsafe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy dự phòng dùng khi controller chính không dùng được hoặc không an toàn.
**Grammar & collocations:** `fallback-policy switch` — chuyển đổi; `hand control back to a stabilizer` — chuyển lại cho stabilizer.
**Examples:** `The fallback policy guided the arm to a neutral pose after localization confidence collapsed.` → Fallback policy đưa arm về pose neutral sau khi localization confidence sụp giảm.
**Liên kết tiếng Hàn:** `대체 정책`.

## 15. emergency stop envelope /ɪˈmɜːrdʒənsi stɑːp ˈenvəloʊp/
**Part of speech:** noun
**Core meaning (English):** the set of positions, speeds, and delays within which an emergency stop can still prevent a specified hazard.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập position, speed và delay mà trong đó emergency stop vẫn ngăn được hazard đã định.
**Grammar & collocations:** `emergency-stop-envelope boundary` — boundary; `account for braking delay` — tính tới delay phanh.
**Examples:** `The planner kept the forklift inside the emergency stop envelope near the pedestrian lane.` → Planner giữ forklift trong emergency stop envelope gần làn người đi bộ.
**Liên kết tiếng Hàn:** `비상 정지 포락선`.

## 16. invariant funnel /ɪnˈveriənt ˈfʌnəl/
**Part of speech:** noun
**Core meaning (English):** a time-varying tube of states that feedback keeps inside while it contracts toward a target trajectory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tube state thay đổi theo time, được feedback giữ bên trong và thu hẹp dần về trajectory đích.
**Grammar & collocations:** `invariant-funnel verification` — verification; `contract toward a reference` — co về reference.
**Examples:** `The invariant funnel gave the drone a bounded corridor through the final approach.` → Invariant funnel tạo corridor giới hạn cho drone trong chặng tiếp cận cuối.
**Liên kết tiếng Hàn:** `불변 깔때기`.

## 17. region of attraction /ˈriːdʒən əv əˈtrækʃən/
**Part of speech:** noun
**Core meaning (English):** the set of initial states from which a controller converges to a desired equilibrium.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập initial state từ đó controller hội tụ về equilibrium mong muốn.
**Grammar & collocations:** `region-of-attraction estimate` — ước lượng; `certify local convergence` — chứng nhận hội tụ cục bộ.
**Examples:** `The recovery pose was chosen inside the region of attraction of the balancing controller.` → Recovery pose được chọn trong region of attraction của balancing controller.
**Liên kết tiếng Hàn:** `흡인 영역`.

## 18. Lyapunov sublevel set /laɪəˈpʊnɑːv ˈsʌblevəl set/
**Part of speech:** noun
**Core meaning (English):** the set of states whose Lyapunov function value is below a chosen threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập state có giá trị Lyapunov thấp hơn threshold chọn trước.
**Grammar & collocations:** `Lyapunov-sublevel-set bound` — bound; `enclose a safe basin` — bao một basin an toàn.
**Examples:** `The controller kept the estimation error inside a Lyapunov sublevel set.` → Controller giữ estimation error bên trong Lyapunov sublevel set.
**Liên kết tiếng Hàn:** `리아푸노프 부분 수준 집합`.

## 19. reachability overapproximation /rɪˌtʃəbɪləti ˌoʊvərˌæprəksəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a conservative reachable set that may include states the real system cannot reach but does not omit reachable ones.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reachable set bảo thủ có thể rộng hơn thực tế nhưng không bỏ sót state thực sự đạt được.
**Grammar & collocations:** `reachability-overapproximation error` — error; `trade precision for safety` — đổi precision lấy safety.
**Examples:** `The reachability overapproximation was wide, but it preserved a conservative safety decision.` → Reachability overapproximation rộng nhưng giữ quyết định safety bảo thủ.
**Liên kết tiếng Hàn:** `도달 가능성 상한 근사`.

## 20. reachability underapproximation /rɪˌtʃəbɪləti ˌʌndərˌæprəksəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a reachable subset guaranteed to be attainable, even though other attainable states may be omitted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập con reachable chắc chắn đạt được, dù có thể bỏ sót state attainable khác.
**Grammar & collocations:** `reachability-underapproximation certificate` — certificate; `prove a feasible target` — chứng minh target khả thi.
**Examples:** `The reachability underapproximation proved that at least one safe landing maneuver existed.` → Reachability underapproximation chứng minh tồn tại ít nhất một maneuver hạ cánh an toàn.
**Liên kết tiếng Hàn:** `도달 가능성 하한 근사`.

## Review in context

A **backward reachable set** traces recoverable states from a target, while a **forward reachable set**, **viability kernel**, and **capture basin** describe what can remain safe or be driven into safety. A **level-set method** can solve **Hamilton-Jacobi reachability**; a **barrier certificate**, **sum-of-squares certificate**, and **occupation measure** turn that analysis into a **formal safety guarantee**. During operation, **runtime assurance**, a **safety filter**, and a **shielded controller** can switch to a **fallback policy** before the **emergency stop envelope** is exceeded. An **invariant funnel**, **region of attraction**, and **Lyapunov sublevel set** describe recoverable convergence, while **reachability overapproximation** and **reachability underapproximation** provide conservative outer and inner views of what the robot can do.

**Bản dịch tiếng Việt:** **Backward reachable set** lần ngược các state có thể recovery từ target, còn **forward reachable set**, **viability kernel** và **capture basin** mô tả những gì có thể vẫn an toàn hoặc được đưa về vùng an toàn. **Level-set method** có thể giải **Hamilton-Jacobi reachability**; **barrier certificate**, **sum-of-squares certificate** và **occupation measure** biến phân tích đó thành **formal safety guarantee**. Khi vận hành, **runtime assurance**, **safety filter** và **shielded controller** có thể chuyển sang **fallback policy** trước khi vượt **emergency stop envelope**. **Invariant funnel**, **region of attraction** và **Lyapunov sublevel set** mô tả hội tụ có thể recovery, còn **reachability overapproximation** và **reachability underapproximation** cung cấp hai góc nhìn bảo thủ về khả năng của robot.
