# C2 Vocabulary — Robotic task planning and multi-robot coordination

This lesson moves from a symbolic mission description to coordinated execution by several robots. The network is **task and motion planning → symbolic-geometric planning → hierarchical task network → task decomposition → subtask ordering → resource-constrained planning → temporal logic specification → linear temporal logic → signal temporal logic → automaton product → specification monitoring → online replanning → multi-robot coordination → formation keeping → collision-free assignment → auction-based allocation → market-based planning → inter-robot communication → decentralized planning → centralized planning**.

## 1. task and motion planning /tæsk ænd ˈmoʊʃən ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning that chooses both high-level actions and the continuous robot motions needed to carry them out.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning chọn cả action cấp cao và motion liên tục để thực hiện action đó.
**Grammar & collocations:** `task-and-motion-planning solver` — solver; `link a symbolic action to a trajectory` — nối action symbolic với trajectory.
**Examples:** `Task and motion planning chose a grasp before generating the arm path to the shelf.` → Task and motion planning chọn grasp trước khi tạo path của arm tới kệ.
**Liên kết tiếng Hàn:** `작업 및 동작 계획`.

## 2. symbolic-geometric planning /sɪmˈbɑːlɪk dʒiəˈmetrɪk ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning that combines discrete symbolic decisions with geometric feasibility checks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning gộp quyết định symbolic rời rạc với kiểm tra geometric feasibility.
**Grammar & collocations:** `symbolic-geometric-planning interface` — interface; `ground an abstract action` — gắn action trừu tượng vào geometry.
**Examples:** `Symbolic-geometric planning discarded the route whose pouring pose was unreachable.` → Symbolic-geometric planning bỏ route có pouring pose không thể với tới.
**Liên kết tiếng Hàn:** `기호-기하 계획`.

## 3. hierarchical task network /ˌhaɪəˈrɑːrkɪkəl tæsk ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** a planning representation that expands abstract tasks into ordered lower-level subtasks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation mở rộng task trừu tượng thành các subtask cấp thấp có thứ tự.
**Grammar & collocations:** `hierarchical-task-network method` — phương pháp; `refine a compound task` — tinh luyện task phức hợp.
**Examples:** `The hierarchical task network expanded “serve dinner” into navigation, grasping, and placement.` → Hierarchical task network mở rộng “serve dinner” thành navigation, grasp và placement.
**Liên kết tiếng Hàn:** `계층적 작업 네트워크`.

## 4. task decomposition /tæsk ˌdiːkɑːmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** dividing a mission goal into smaller actions that can be planned and executed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia mission goal thành action nhỏ để plan và execute.
**Grammar & collocations:** `task-decomposition rule` — rule; `split a mission into subtasks` — chia mission thành subtask.
**Examples:** `Task decomposition separated opening the cabinet from retrieving the container.` → Task decomposition tách việc mở tủ khỏi việc lấy container.
**Liên kết tiếng Hàn:** `작업 분해`.

## 5. subtask ordering /ˈsʌbtæsk ˈɔːrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** deciding the sequence in which dependent subtasks must occur.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định thứ tự các subtask phụ thuộc phải diễn ra.
**Grammar & collocations:** `subtask-ordering constraint` — constraint; `respect a dependency` — tôn trọng dependency.
**Examples:** `Subtask ordering required the robot to unlock the drawer before pulling it open.` → Subtask ordering yêu cầu robot mở khóa ngăn kéo trước khi kéo ra.
**Liên kết tiếng Hàn:** `하위 작업 순서 지정`.

## 6. resource-constrained planning /rɪˈsɔːrs kənˈstreɪnd ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning that accounts for limited time, energy, tools, workspace, or other shared resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning tính tới resource hữu hạn như time, energy, tool và workspace.
**Grammar & collocations:** `resource-constrained-planning problem` — bài toán; `schedule around a battery limit` — schedule quanh giới hạn pin.
**Examples:** `Resource-constrained planning postponed the inspection until the battery had enough reserve.` → Resource-constrained planning hoãn inspection tới khi pin đủ dự trữ.
**Liên kết tiếng Hàn:** `자원 제약 계획`.

## 7. temporal logic specification /ˈtempərəl ˈlɑːdʒɪk ˌspesəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a formal statement describing what must eventually, always, or conditionally happen over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mệnh đề formal mô tả điều phải xảy ra eventually, always hoặc conditionally theo time.
**Grammar & collocations:** `temporal-logic-specification parser` — parser; `state an ordering over events` — nêu thứ tự event.
**Examples:** `The temporal logic specification required the robot to inspect the seal before releasing pressure.` → Temporal logic specification yêu cầu robot kiểm tra seal trước khi xả áp.
**Liên kết tiếng Hàn:** `시간 논리 사양`.

## 8. linear temporal logic /ˈlɪniər ˈtempərəl ˈlɑːdʒɪk/
**Part of speech:** noun
**Core meaning (English):** a temporal logic that expresses properties along a single sequence of future states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** temporal logic biểu đạt property dọc theo một sequence state tương lai.
**Grammar & collocations:** `linear-temporal-logic formula` — formula; `require eventual completion` — yêu cầu hoàn thành eventually.
**Examples:** `Linear temporal logic expressed that every pickup request must eventually be acknowledged.` → Linear temporal logic diễn đạt rằng mọi pickup request cuối cùng phải được acknowledge.
**Liên kết tiếng Hàn:** `선형 시간 논리`.

## 9. signal temporal logic /ˈsɪɡnəl ˈtempərəl ˈlɑːdʒɪk/
**Part of speech:** noun
**Core meaning (English):** a temporal logic that evaluates quantitative predicates over continuous signals and time intervals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** temporal logic đánh giá predicate định lượng trên signal liên tục và interval time.
**Grammar & collocations:** `signal-temporal-logic robustness` — robustness; `bound temperature over an interval` — giới hạn temperature trong interval.
**Examples:** `Signal temporal logic required the motor temperature to remain below its limit for the full descent.` → Signal temporal logic yêu cầu motor temperature dưới limit trong toàn bộ lúc hạ xuống.
**Liên kết tiếng Hàn:** `신호 시간 논리`.

## 10. automaton product /ɔːˈtɑːmətən ˈprɑːdʌkt/
**Part of speech:** noun
**Core meaning (English):** a combined state machine formed by synchronizing a system model with an automaton representing a specification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** state machine kết hợp bằng cách đồng bộ system model với automaton của specification.
**Grammar & collocations:** `automaton-product state` — state; `synchronize system and specification` — đồng bộ system và specification.
**Examples:** `The automaton product exposed a state in which the robot could wait forever without serving the request.` → Automaton product làm lộ state nơi robot có thể chờ mãi mà không phục vụ request.
**Liên kết tiếng Hàn:** `오토마톤 곱`.

## 11. specification monitoring /ˌspesəfəˈkeɪʃən ˈmɑːnətərɪŋ/
**Part of speech:** noun
**Core meaning (English):** checking during execution whether observed behavior continues to satisfy a formal specification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra trong lúc chạy xem behavior quan sát còn thỏa specification formal không.
**Grammar & collocations:** `specification-monitoring event` — event; `detect a temporal violation` — phát hiện vi phạm temporal.
**Examples:** `Specification monitoring warned the operator when the delivery deadline became unreachable.` → Specification monitoring cảnh báo operator khi deadline delivery không còn đạt được.
**Liên kết tiếng Hàn:** `사양 모니터링`.

## 12. online replanning /ˈɑːnlaɪn riːˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** revising a plan during execution in response to new observations or changed conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa plan ngay trong lúc execute khi có observation mới hoặc condition đổi.
**Grammar & collocations:** `online-replanning trigger` — trigger; `repair a blocked route` — sửa route bị chặn.
**Examples:** `Online replanning sent the robot around the cart that had appeared in the hallway.` → Online replanning đưa robot vòng qua xe đẩy xuất hiện trong hành lang.
**Liên kết tiếng Hàn:** `온라인 재계획`.

## 13. multi-robot coordination /ˌmʌlti ˈroʊbɑːt koʊˌɔːrdəˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** organizing several robots so their actions share information, space, and timing without conflict.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tổ chức nhiều robot chia sẻ information, space và timing mà không conflict.
**Grammar & collocations:** `multi-robot-coordination policy` — policy; `synchronize shared workspace use` — đồng bộ việc dùng workspace chung.
**Examples:** `Multi-robot coordination kept one arm clear while the other loaded the conveyor.` → Multi-robot coordination giữ một arm tránh đường khi arm kia nạp conveyor.
**Liên kết tiếng Hàn:** `다중 로봇 협조`.

## 14. formation keeping /fɔːrˈmeɪʃən ˈkiːpɪŋ/
**Part of speech:** noun
**Core meaning (English):** maintaining desired relative positions and headings among moving robots.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ relative position và heading mong muốn giữa các robot đang di chuyển.
**Grammar & collocations:** `formation-keeping error` — error; `maintain a triangular pattern` — giữ pattern tam giác.
**Examples:** `Formation keeping slowed the lead robot so the rear units could close the gap.` → Formation keeping làm robot dẫn đầu chậm lại để các unit sau rút ngắn khoảng cách.
**Liên kết tiếng Hàn:** `대형 유지`.

## 15. collision-free assignment /kəˈlɪʒən friː əˈsaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** assigning tasks or destinations to robots while ensuring their resulting paths do not conflict.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán task hoặc destination cho robot đồng thời bảo đảm path không conflict.
**Grammar & collocations:** `collision-free-assignment solver` — solver; `allocate nonconflicting goals` — phân bổ goal không conflict.
**Examples:** `The collision-free assignment sent two robots to opposite loading bays.` → Collision-free assignment đưa hai robot tới hai loading bay đối diện.
**Liên kết tiếng Hàn:** `충돌 없는 할당`.

## 16. auction-based allocation /ˈɔːkʃən beɪst ˌæləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** task allocation in which robots bid according to their cost, capability, or availability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân task nơi robot “bid” dựa trên cost, capability hoặc availability.
**Grammar & collocations:** `auction-based-allocation round` — round; `submit a task bid` — gửi bid cho task.
**Examples:** `Auction-based allocation gave the cold-storage run to the robot with the best battery reserve.` → Auction-based allocation giao chuyến kho lạnh cho robot có pin dự trữ tốt nhất.
**Liên kết tiếng Hàn:** `경매 기반 할당`.

## 17. market-based planning /ˈmɑːrkɪt beɪst ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning in which agents exchange bids or prices to distribute tasks and resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning nơi agent trao đổi bid hoặc price để phân phối task và resource.
**Grammar & collocations:** `market-based-planning mechanism` — cơ chế; `clear a resource market` — cân bằng market resource.
**Examples:** `Market-based planning shifted inspection work toward the robot with the shorter travel time.` → Market-based planning chuyển việc inspection sang robot có travel time ngắn hơn.
**Liên kết tiếng Hàn:** `시장 기반 계획`.

## 18. inter-robot communication /ˌɪntər ˈroʊbɑːt kəˌmjuːnəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** exchange of state, intent, or task information among robots.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trao đổi state, intent hoặc task information giữa các robot.
**Grammar & collocations:** `inter-robot-communication delay` — delay; `broadcast a planned route` — broadcast route đã plan.
**Examples:** `Inter-robot communication warned the follower that the leader had stopped unexpectedly.` → Inter-robot communication báo follower rằng leader dừng bất ngờ.
**Liên kết tiếng Hàn:** `로봇 간 통신`.

## 19. decentralized planning /ˌdiːˈsentrəlaɪzd ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning in which each agent computes with local information and limited coordination.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning nơi mỗi agent tính bằng local information và coordination giới hạn.
**Grammar & collocations:** `decentralized-planning update` — update; `negotiate a local conflict` — thương lượng conflict cục bộ.
**Examples:** `Decentralized planning let the warehouse robots keep working when the central server was unreachable.` → Decentralized planning cho robot kho tiếp tục làm việc khi server trung tâm không thể truy cập.
**Liên kết tiếng Hàn:** `분산 계획`.

## 20. centralized planning /ˈsentrəlaɪzd ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning in which a shared coordinator computes decisions for the whole group using global information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning nơi coordinator chung tính decision cho cả group bằng global information.
**Grammar & collocations:** `centralized-planning bottleneck` — bottleneck; `optimize a joint schedule` — tối ưu schedule chung.
**Examples:** `Centralized planning found a shorter joint schedule but depended on a reliable network.` → Centralized planning tìm schedule chung ngắn hơn nhưng phụ thuộc network đáng tin.
**Liên kết tiếng Hàn:** `중앙 집중식 계획`.

## Review in context

**Task and motion planning** connects **symbolic-geometric planning** to executable trajectories. A **hierarchical task network** performs **task decomposition** and **subtask ordering**, while **resource-constrained planning** accounts for battery and workspace. A **temporal logic specification**, expressed in **linear temporal logic** or **signal temporal logic**, can be checked through an **automaton product** and **specification monitoring**. **Online replanning** repairs surprises; **multi-robot coordination** and **formation keeping** protect shared space. A **collision-free assignment** may use **auction-based allocation** or **market-based planning**, and **inter-robot communication** supports either **decentralized planning** or **centralized planning**.

**Bản dịch tiếng Việt:** **Task and motion planning** nối **symbolic-geometric planning** với trajectory chạy được. **Hierarchical task network** thực hiện **task decomposition** và **subtask ordering**, còn **resource-constrained planning** tính tới pin và workspace. **Temporal logic specification**, biểu đạt bằng **linear temporal logic** hoặc **signal temporal logic**, có thể được kiểm tra qua **automaton product** và **specification monitoring**. **Online replanning** sửa các tình huống bất ngờ; **multi-robot coordination** và **formation keeping** bảo vệ không gian chung. **Collision-free assignment** có thể dùng **auction-based allocation** hoặc **market-based planning**, còn **inter-robot communication** hỗ trợ **decentralized planning** hoặc **centralized planning**.
