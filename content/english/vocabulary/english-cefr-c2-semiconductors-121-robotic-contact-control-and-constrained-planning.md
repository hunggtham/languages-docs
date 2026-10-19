# C2 Vocabulary — Robotic contact control and constrained planning

This lesson follows a robot from recognizing contact modes to planning collision-free, dynamically feasible motion. The vocabulary forms one network: **contact-mode classifier → force-closure margin → grasp stability index → compliance matrix → operational-space inertia → null-space projector → singularity margin → task-space impedance → admittance controller → friction-cone constraint → contact complementarity → hybrid force-motion control → reaction-null space → torque-rate limit → joint-limit barrier → configuration-space obstacle → roadmap graph → trajectory homotopy → whole-body controller → contact wrench**.

## 1. contact-mode classifier /ˈkɑːntækt moʊd ˈklæsəfaɪər/
**Part of speech:** noun
**Core meaning (English):** a model that identifies whether a robot is separated, touching, sliding, or sticking at a contact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ phân loại nhận ra robot đang rời, chạm, trượt hay bám tại contact; hãy hình dung nó đổi “nhãn trạng thái” khi tiếp xúc thay đổi.
**Grammar & collocations:** `contact-mode-classifier output` — output của classifier; `infer a contact transition` — suy ra chuyển trạng thái tiếp xúc.
**Examples:** `The contact-mode classifier switched to sliding when the measured tangential speed increased.` → Contact-mode classifier chuyển sang trạng thái trượt khi tốc độ tiếp tuyến đo được tăng.
**Liên kết tiếng Hàn:** `접촉 모드 분류기`.

## 2. force-closure margin /fɔːrs ˈkloʊʒər ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** a measure of how far a grasp is from losing the ability to resist disturbances in every direction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng an toàn cho biết grasp còn cách mất khả năng chống nhiễu theo mọi hướng bao xa.
**Grammar & collocations:** `force-closure-margin estimate` — ước lượng margin force-closure; `maintain a positive margin` — giữ margin dương.
**Examples:** `The planner rejected the pose because its force-closure margin was nearly zero.` → Planner loại pose vì margin force-closure gần bằng không.
**Liên kết tiếng Hàn:** `힘 폐쇄 여유`.

## 3. grasp stability index /ɡræsp stəˈbɪləti ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** a score summarizing how robustly a grasp resists expected motion, load, and sensing uncertainty.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm tổng hợp độ vững của grasp trước motion, tải và uncertainty dự kiến.
**Grammar & collocations:** `grasp-stability-index threshold` — ngưỡng index; `rank candidate grasps` — xếp hạng grasp ứng viên.
**Examples:** `A higher grasp stability index favored the wider grip even though it took longer to reach.` → Index stability của grasp cao hơn ưu tiên grip rộng dù mất nhiều thời gian tiếp cận hơn.
**Liên kết tiếng Hàn:** `파지 안정성 지수`.

## 4. compliance matrix /kəmˈplaɪəns ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix that maps applied force or torque to the resulting displacement or rotation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận biến force hoặc torque thành displacement hay rotation; nó mô tả hệ “nhún” theo từng hướng.
**Grammar & collocations:** `compliance-matrix estimate` — ước lượng matrix compliance; `identify anisotropic compliance` — nhận diện compliance không đẳng hướng.
**Examples:** `The compliance matrix showed that the fixture was soft sideways but stiff vertically.` → Matrix compliance cho thấy fixture mềm theo ngang nhưng cứng theo dọc.
**Liên kết tiếng Hàn:** `순응도 행렬`.

## 5. operational-space inertia /ˌɑːpəˈreɪʃənəl speɪs ɪˈnɜːrʃə/
**Part of speech:** noun
**Core meaning (English):** the effective inertia felt by a robot task expressed at the end-effector or another task-space point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quán tính hiệu dụng mà task cảm nhận tại end-effector hoặc điểm trong task space.
**Grammar & collocations:** `operational-space-inertia matrix` — matrix inertia trong operational space; `compensate for direction-dependent inertia` — bù quán tính phụ thuộc hướng.
**Examples:** `Operational-space inertia changed sharply when the arm folded near the elbow.` → Inertia trong operational space đổi mạnh khi arm gập gần khuỷu.
**Liên kết tiếng Hàn:** `작업 공간 관성`.

## 6. null-space projector /nʌl speɪs prəˈdʒektər/
**Part of speech:** noun
**Core meaning (English):** an operator that removes motion affecting a primary task so secondary objectives can use the remaining joint freedom.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** toán tử loại phần motion ảnh hưởng task chính để joint freedom còn lại phục vụ mục tiêu phụ.
**Grammar & collocations:** `null-space-projector term` — thành phần projector; `avoid an obstacle without changing the pose` — tránh obstacle mà không đổi pose.
**Examples:** `The null-space projector moved the elbow away from the shelf while preserving the tool path.` → Projector null-space đưa khuỷu ra khỏi kệ mà vẫn giữ đường đi của tool.
**Liên kết tiếng Hàn:** `영공간 사영기`.

## 7. singularity margin /ˌsɪŋɡjəˈlærəti ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** a measure of how far a robot configuration is from a kinematic singularity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách an toàn từ configuration hiện tại tới singularity kinematic, nơi một số hướng motion bị mất.
**Grammar & collocations:** `singularity-margin monitor` — bộ theo dõi margin; `keep a safe margin` — giữ margin an toàn.
**Examples:** `The controller slowed the wrist as the singularity margin fell below the warning level.` → Controller làm chậm cổ tay khi margin singularity xuống dưới mức cảnh báo.
**Liên kết tiếng Hàn:** `특이점 여유`.

## 8. task-space impedance /tæsk speɪs ɪmˈpiːdəns/
**Part of speech:** noun
**Core meaning (English):** a desired relationship between task-space displacement and the force or torque produced in response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ mong muốn giữa displacement trong task space và force/torque phản hồi.
**Grammar & collocations:** `task-space-impedance gain` — gain impedance; `shape contact behavior` — định hình cách contact phản ứng.
**Examples:** `The task-space impedance made the polishing motion yield gently to a warped panel.` → Impedance task-space khiến motion đánh bóng nhún nhẹ theo panel cong.
**Liên kết tiếng Hàn:** `작업 공간 임피던스`.

## 9. admittance controller /ədˈmɪtəns kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** a controller that converts measured external force into commanded motion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** controller nhận force bên ngoài đo được rồi biến nó thành motion command; force “đẩy” robot đi.
**Grammar & collocations:** `admittance-controller gain` — gain của controller; `respond to a human push` — phản ứng với lực đẩy của người.
**Examples:** `The admittance controller let the operator guide the arm around the heavy fixture.` → Controller admittance cho phép operator dẫn arm vòng quanh fixture nặng.
**Liên kết tiếng Hàn:** `어드미턴스 제어기`.

## 10. friction-cone constraint /ˈfrɪkʃən koʊn kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a constraint requiring a contact force to remain within the cone allowed by surface friction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** constraint buộc contact force nằm trong “hình nón” mà ma sát bề mặt có thể giữ.
**Grammar & collocations:** `friction-cone-constraint violation` — vi phạm constraint; `bound tangential force` — giới hạn force tiếp tuyến.
**Examples:** `The optimizer reduced the sideways push to satisfy the friction-cone constraint.` → Optimizer giảm lực đẩy ngang để thỏa constraint friction-cone.
**Liên kết tiếng Hàn:** `마찰 원뿔 제약`.

## 11. contact complementarity /ˈkɑːntækt ˌkɑːmpləmenˈtærəti/
**Part of speech:** noun
**Core meaning (English):** the condition that a separating gap and its normal contact force cannot both be positive at the same time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện gap tách rời và normal force không thể cùng dương; hoặc có khoảng hở, hoặc có lực ép.
**Grammar & collocations:** `contact-complementarity condition` — điều kiện complementarity; `solve a nonsmooth contact problem` — giải bài toán contact không trơn.
**Examples:** `Contact complementarity prevented the simulation from applying force across an open gap.` → Complementarity contact ngăn simulation áp force qua gap đang mở.
**Liên kết tiếng Hàn:** `접촉 상보성`.

## 12. hybrid force-motion control /ˈhaɪbrɪd fɔːrs ˈmoʊʃən kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** control that regulates force along selected directions and motion along complementary directions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều khiển force ở một số hướng và motion ở các hướng còn lại, thay vì cố kiểm soát cả hai cùng lúc.
**Grammar & collocations:** `hybrid-force-motion-control law` — luật control; `separate force and position axes` — tách trục force và position.
**Examples:** `Hybrid force-motion control held pressure against the wall while the tool advanced along its edge.` → Control force-motion hybrid giữ áp lực vào tường trong khi tool tiến dọc mép.
**Liên kết tiếng Hàn:** `하이브리드 힘-동작 제어`.

## 13. reaction-null space /riˈækʃən nʌl speɪs/
**Part of speech:** noun
**Core meaning (English):** joint-motion directions that produce little or no reaction at a constrained base or contact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các hướng joint motion gần như không truyền reaction tới base hoặc contact đang bị giữ.
**Grammar & collocations:** `reaction-null-space motion` — motion trong reaction-null space; `preserve base quietness` — giữ base ổn định.
**Examples:** `The controller used the reaction-null space to reposition the camera without rocking the platform.` → Controller dùng reaction-null space để đổi vị trí camera mà không làm platform lắc.
**Liên kết tiếng Hàn:** `반작용 영공간`.

## 14. torque-rate limit /ˈtɔːrk reɪt ˈlɪmət/
**Part of speech:** noun
**Core meaning (English):** the maximum allowed rate at which commanded joint torque may change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ tối đa cho phép của thay đổi joint torque; nó ngăn lệnh giật đột ngột.
**Grammar & collocations:** `torque-rate-limit violation` — vi phạm limit; `ramp the command smoothly` — tăng lệnh theo dốc mượt.
**Examples:** `The trajectory was retimed after the motor model reported a torque-rate limit violation.` → Trajectory được đổi timing sau khi model motor báo vi phạm limit torque-rate.
**Liên kết tiếng Hàn:** `토크 변화율 한계`.

## 15. joint-limit barrier /dʒɔɪnt ˈlɪmət ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** a mathematical penalty that grows sharply as a joint approaches its allowed range boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** penalty toán học tăng vọt khi joint tiến sát biên range cho phép, như một hàng rào mềm.
**Grammar & collocations:** `joint-limit-barrier function` — hàm barrier; `repel a configuration from the bound` — đẩy configuration khỏi biên.
**Examples:** `The joint-limit barrier kept the shoulder from settling at its mechanical stop.` → Barrier joint-limit giữ vai không dừng ở mechanical stop.
**Liên kết tiếng Hàn:** `관절 한계 장벽`.

## 16. configuration-space obstacle /kənˌfɪɡjəˈreɪʃən speɪs ˈɑːbstəkəl/
**Part of speech:** noun
**Core meaning (English):** a region of robot configurations that would cause a collision in physical space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng configuration của robot tương ứng với collision trong không gian thật.
**Grammar & collocations:** `configuration-space-obstacle boundary` — biên obstacle; `inflate an obstacle for safety` — nới obstacle để thêm an toàn.
**Examples:** `The planner expanded the configuration-space obstacle by the radius of the uncertain gripper.` → Planner mở rộng obstacle configuration-space bằng bán kính gripper không chắc chắn.
**Liên kết tiếng Hàn:** `구성 공간 장애물`.

## 17. roadmap graph /ˈroʊdˌmæp ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph of collision-free configurations and connecting paths used for repeated motion queries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph gồm configuration không va chạm và path nối chúng, dùng lại cho nhiều truy vấn motion.
**Grammar & collocations:** `roadmap-graph node` — node của graph; `connect nearby samples` — nối sample gần nhau.
**Examples:** `The roadmap graph answered a new pick-and-place query without rebuilding the entire free space.` → Graph roadmap trả lời query pick-and-place mới mà không dựng lại toàn bộ free space.
**Liên kết tiếng Hàn:** `로드맵 그래프`.

## 18. trajectory homotopy /trəˈdʒektəri hoʊˈmɑːtəpi/
**Part of speech:** noun
**Core meaning (English):** a class of paths that can be continuously deformed into one another without crossing an obstacle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp các path có thể biến dạng liên tục thành nhau mà không xuyên qua obstacle; mỗi lớp là một “cách vòng” khác nhau.
**Grammar & collocations:** `trajectory-homotopy class` — lớp homotopy; `compare paths around an obstacle` — so sánh path vòng obstacle.
**Examples:** `The planner sampled a second trajectory homotopy that passed on the far side of the column.` → Planner lấy mẫu một homotopy trajectory thứ hai đi phía xa của cột.
**Liên kết tiếng Hàn:** `궤적 호모토피`.

## 19. whole-body controller /hoʊl ˈbɑːdi kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** a controller that coordinates all relevant joints and contacts to satisfy several robot tasks together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** controller phối hợp toàn bộ joint và contact để thỏa nhiều task cùng lúc.
**Grammar & collocations:** `whole-body-controller hierarchy` — hierarchy của controller; `prioritize balance over reach` — ưu tiên balance hơn reach.
**Examples:** `The whole-body controller preserved foot contact while the upper body reached for the valve.` → Controller whole-body giữ foot contact trong khi phần thân trên với tới van.
**Liên kết tiếng Hàn:** `전신 제어기`.

## 20. contact wrench /ˈkɑːntækt rentʃ/
**Part of speech:** noun
**Core meaning (English):** the combined force and torque transmitted through a contact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** force và torque gộp lại được truyền qua contact; hãy hình dung “tay đòn lực” đầy đủ tại điểm chạm.
**Grammar & collocations:** `contact-wrench estimate` — ước lượng wrench; `transform a wrench between frames` — đổi wrench giữa các frame.
**Examples:** `The estimator transformed the contact wrench into the object frame before checking the grasp.` → Estimator đổi contact wrench sang frame của object trước khi kiểm tra grasp.
**Liên kết tiếng Hàn:** `접촉 렌치`.

## Review in context

A **contact-mode classifier** tracks whether a grasp is touching or sliding, while a **force-closure margin** and **grasp stability index** rank candidate holds. The robot uses a **compliance matrix**, **operational-space inertia**, and **null-space projector** to keep a healthy **singularity margin** under **task-space impedance**. An **admittance controller**, **friction-cone constraint**, and **contact complementarity** describe physical interaction; **hybrid force-motion control** and a **reaction-null space** then shape the response. A **torque-rate limit**, **joint-limit barrier**, and **configuration-space obstacle** keep commands safe. A **roadmap graph** compares each **trajectory homotopy**, the **whole-body controller** coordinates all joints, and the resulting **contact wrench** confirms that the object is supported.

**Bản dịch tiếng Việt:** **Contact-mode classifier** theo dõi grasp đang chạm hay trượt, còn **force-closure margin** và **grasp stability index** xếp hạng các cách giữ ứng viên. Robot dùng **compliance matrix**, **operational-space inertia** và **null-space projector** để duy trì **singularity margin** an toàn dưới **task-space impedance**. **Admittance controller**, **friction-cone constraint** và **contact complementarity** mô tả tương tác vật lý; **hybrid force-motion control** và **reaction-null space** định hình phản ứng. **Torque-rate limit**, **joint-limit barrier** và **configuration-space obstacle** giữ lệnh an toàn. **Roadmap graph** so sánh từng **trajectory homotopy**, **whole-body controller** phối hợp mọi joint, còn **contact wrench** kết quả xác nhận object được nâng đỡ.
