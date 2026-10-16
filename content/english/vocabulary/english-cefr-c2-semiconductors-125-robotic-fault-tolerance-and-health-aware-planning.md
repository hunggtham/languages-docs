# C2 Vocabulary — Robotic fault tolerance and health-aware planning

This lesson follows a robot from detecting a component problem to adapting its controller, mission, and maintenance plan. The network is **fault-tolerant control → control reconfiguration → actuator fault isolation → sensor fault isolation → fault accommodation → fault diagnosis residual → analytical redundancy → physical redundancy → safe-state transition → fail-operational architecture → fail-safe architecture → mission-level replanning → contingency trajectory → health-aware planning → remaining useful life → prognostics horizon → maintenance-trigger threshold → condition-based maintenance → predictive maintenance → wear state estimator**.

## 1. fault-tolerant control /fɔːlt ˈtɑːlərənt kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** control that maintains acceptable behavior despite specified component faults.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều khiển vẫn giữ behavior chấp nhận được dù component gặp fault đã xét.
**Grammar & collocations:** `fault-tolerant-control law` — luật; `maintain closed-loop stability` — giữ ổn định closed loop.
**Examples:** `Fault-tolerant control kept the arm level after one torque sensor failed.` → Fault-tolerant control giữ arm cân bằng sau khi một torque sensor hỏng.
**Liên kết tiếng Hàn:** `고장 허용 제어`.

## 2. control reconfiguration /kənˈtroʊl ˌriːkənˌfɪɡjəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** changing the control structure or resource allocation after the system’s capabilities change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi structure hoặc phân bổ resource của control sau khi capability system thay đổi.
**Grammar & collocations:** `control-reconfiguration trigger` — trigger; `redistribute control authority` — phân bổ lại quyền điều khiển.
**Examples:** `Control reconfiguration shifted load to the remaining joints after a drive overheated.` → Control reconfiguration chuyển tải sang các joint còn lại sau khi một drive quá nhiệt.
**Liên kết tiếng Hàn:** `제어 재구성`.

## 3. actuator fault isolation /ˈæktʃueɪtər fɔːlt ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** determining which actuator is responsible for an observed control or motion anomaly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định actuator nào gây anomaly trong control hoặc motion.
**Grammar & collocations:** `actuator-fault-isolation test` — test; `localize a drive failure` — định vị drive failure.
**Examples:** `Actuator fault isolation distinguished a weak motor from a drifting position sensor.` → Actuator fault isolation phân biệt motor yếu với position sensor bị drift.
**Liên kết tiếng Hàn:** `구동기 고장 격리`.

## 4. sensor fault isolation /ˈsensər fɔːlt ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** identifying which sensor has become unreliable or inconsistent with the rest of the system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhận diện sensor không còn đáng tin hoặc lệch với phần còn lại của system.
**Grammar & collocations:** `sensor-fault-isolation residual` — residual; `cross-check redundant measurements` — kiểm tra chéo measurement dư.
**Examples:** `Sensor fault isolation flagged the depth camera when its range disagreed with stereo.` → Sensor fault isolation đánh dấu depth camera khi range lệch với stereo.
**Liên kết tiếng Hàn:** `센서 고장 격리`.

## 5. fault accommodation /fɔːlt əˌkɑːməˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** adapting control or planning so a detected fault is tolerated without immediately stopping the mission.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh control hoặc planning để chịu fault mà chưa phải dừng mission ngay.
**Grammar & collocations:** `fault-accommodation strategy` — chiến lược; `operate with reduced authority` — vận hành với authority giảm.
**Examples:** `Fault accommodation reduced the lifting speed instead of abandoning the delivery.` → Fault accommodation giảm tốc độ nâng thay vì bỏ delivery.
**Liên kết tiếng Hàn:** `고장 수용`.

## 6. fault diagnosis residual /fɔːlt ˌdaɪəɡˈnoʊsɪs rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** a mismatch signal used to reveal that measured behavior differs from a healthy model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu mismatch cho thấy behavior đo được lệch model healthy.
**Grammar & collocations:** `fault-diagnosis-residual threshold` — threshold; `monitor a residual trend` — theo dõi xu hướng residual.
**Examples:** `The fault diagnosis residual rose gradually as the bearing lost lubrication.` → Fault diagnosis residual tăng dần khi bearing mất bôi trơn.
**Liên kết tiếng Hàn:** `고장 진단 잔차`.

## 7. analytical redundancy /ˌænəˈlɪtɪkəl rɪˈdʌndənsi/
**Part of speech:** noun
**Core meaning (English):** fault-detection information created by comparing independent model predictions with measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thông tin detect fault tạo bằng so sánh model prediction độc lập với measurement.
**Grammar & collocations:** `analytical-redundancy relation` — relation; `generate a consistency check` — tạo consistency check.
**Examples:** `Analytical redundancy detected a bad encoder without installing another encoder.` → Analytical redundancy phát hiện encoder hỏng mà không cần lắp encoder khác.
**Liên kết tiếng Hàn:** `분석적 여분성`.

## 8. physical redundancy /ˈfɪzɪkəl rɪˈdʌndənsi/
**Part of speech:** noun
**Core meaning (English):** duplicate hardware or sensing paths that provide an alternative when one component fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hardware hoặc sensing path dự phòng về vật lý để thay khi một component hỏng.
**Grammar & collocations:** `physical-redundancy channel` — channel; `switch to a spare sensor` — chuyển sang sensor dự phòng.
**Examples:** `Physical redundancy let the controller continue after the primary pressure transducer failed.` → Physical redundancy cho controller tiếp tục sau khi pressure transducer chính hỏng.
**Liên kết tiếng Hàn:** `물리적 여분성`.

## 9. safe-state transition /seɪf steɪt trænˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** a controlled change from normal operation into a state that limits hazards after a serious fault.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển có kiểm soát từ vận hành bình thường sang state hạn chế hazard sau fault nghiêm trọng.
**Grammar & collocations:** `safe-state-transition logic` — logic; `park the mechanism safely` — đưa mechanism về vị trí an toàn.
**Examples:** `The safe-state transition lowered the arm and released the payload before power isolation.` → Safe-state transition hạ arm và thả payload trước khi cô lập nguồn.
**Liên kết tiếng Hàn:** `안전 상태 전환`.

## 10. fail-operational architecture /feɪl ˌɑːpəˈreɪʃənəl ˈɑːrkətektʃər/
**Part of speech:** noun
**Core meaning (English):** a system architecture designed to keep delivering a defined service after one or more faults.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** architecture được thiết kế để vẫn cung cấp service đã định sau một hoặc vài fault.
**Grammar & collocations:** `fail-operational-architecture assumption` — assumption; `continue degraded service` — tiếp tục service suy giảm.
**Examples:** `The fail-operational architecture kept navigation available after one compute module reset.` → Fail-operational architecture giữ navigation hoạt động sau khi một compute module reset.
**Liên kết tiếng Hàn:** `고장 작동 아키텍처`.

## 11. fail-safe architecture /feɪl seɪf ˈɑːrkətektʃər/
**Part of speech:** noun
**Core meaning (English):** a system architecture that moves to a low-hazard state when continued operation cannot be trusted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** architecture chuyển về state ít hazard khi không thể tin cậy việc tiếp tục chạy.
**Grammar & collocations:** `fail-safe-architecture review` — review; `remove hazardous energy` — loại energy nguy hiểm.
**Examples:** `The fail-safe architecture stopped the cutter when both position estimates became invalid.` → Fail-safe architecture dừng cutter khi cả hai position estimate đều invalid.
**Liên kết tiếng Hàn:** `고장 안전 아키텍처`.

## 12. mission-level replanning /ˈmɪʃən ˈlevəl riːˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** revising the sequence of mission goals after a fault changes available capabilities or resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa sequence của mission goal sau khi fault đổi capability hoặc resource.
**Grammar & collocations:** `mission-level-replanning trigger` — trigger; `reprioritize delivery goals` — ưu tiên lại goal delivery.
**Examples:** `Mission-level replanning postponed the heavy pallet and completed the light deliveries first.` → Mission-level replanning hoãn pallet nặng và hoàn thành delivery nhẹ trước.
**Liên kết tiếng Hàn:** `임무 수준 재계획`.

## 13. contingency trajectory /kənˈtɪndʒənsi trəˈdʒektəri/
**Part of speech:** noun
**Core meaning (English):** a precomputed or quickly generated path for a plausible failure or emergency condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** path chuẩn bị sẵn hoặc tạo nhanh cho failure/emergency có thể xảy ra.
**Grammar & collocations:** `contingency-trajectory library` — thư viện; `switch to an abort path` — chuyển sang path hủy.
**Examples:** `The controller selected a contingency trajectory that returned the drone to the charging pad.` → Controller chọn contingency trajectory đưa drone về pad sạc.
**Liên kết tiếng Hàn:** `비상 궤적`.

## 14. health-aware planning /helθ əˈwer ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning that accounts for the estimated health, wear, or remaining capability of system components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning có tính tới health, wear hoặc capability còn lại của component.
**Grammar & collocations:** `health-aware-planning cost` — cost; `avoid stressing a worn joint` — tránh làm joint mòn chịu stress.
**Examples:** `Health-aware planning routed the arm through a slower posture to protect a warm gearbox.` → Health-aware planning đưa arm qua posture chậm hơn để bảo vệ gearbox nóng.
**Liên kết tiếng Hàn:** `상태 인지 계획`.

## 15. remaining useful life /rɪˈmeɪnɪŋ ˈjuːsfəl laɪf/
**Part of speech:** noun
**Core meaning (English):** the estimated operating time or usage left before a component reaches a defined failure or replacement condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian hoặc mức sử dụng ước tính còn lại trước failure hoặc replacement condition.
**Grammar & collocations:** `remaining-useful-life estimate` — ước lượng; `forecast service life` — dự báo service life.
**Examples:** `The bearing’s remaining useful life fell after repeated high-load cycles.` → Remaining useful life của bearing giảm sau nhiều cycle tải cao.
**Liên kết tiếng Hàn:** `잔여 유효 수명`.

## 16. prognostics horizon /ˌprɑːɡˈnɑːstɪks həˈraɪzən/
**Part of speech:** noun
**Core meaning (English):** the future time span over which a health or failure prediction is considered useful.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian tương lai mà prediction về health/failure còn hữu ích.
**Grammar & collocations:** `prognostics-horizon uncertainty` — uncertainty; `extend the prediction window` — kéo dài cửa sổ dự báo.
**Examples:** `The prognostics horizon was long enough to schedule a bearing replacement between missions.` → Prognostics horizon đủ dài để xếp lịch thay bearing giữa các mission.
**Liên kết tiếng Hàn:** `예지 지평선`.

## 17. maintenance-trigger threshold /ˈmeɪntənəns ˈtrɪɡər ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** a measured or predicted condition that initiates inspection, service, or replacement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện đo hoặc dự đoán kích hoạt inspection, service hay replacement.
**Grammar & collocations:** `maintenance-trigger-threshold crossing` — việc vượt ngưỡng; `schedule an inspection` — xếp lịch kiểm tra.
**Examples:** `A rising vibration index crossed the maintenance-trigger threshold during the night shift.` → Vibration index tăng vượt maintenance-trigger threshold trong ca đêm.
**Liên kết tiếng Hàn:** `정비 작동 임계값`.

## 18. condition-based maintenance /kənˈdɪʃən beɪst ˈmeɪntənəns/
**Part of speech:** noun
**Core meaning (English):** maintenance scheduled from observed equipment condition rather than from a fixed calendar interval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** maintenance dựa trên condition quan sát được thay vì lịch cố định.
**Grammar & collocations:** `condition-based-maintenance policy` — policy; `service equipment when indicators worsen` — service khi indicator xấu đi.
**Examples:** `Condition-based maintenance delayed the seal replacement until its leakage trend became significant.` → Condition-based maintenance hoãn thay seal tới khi xu hướng rò rỉ đáng kể.
**Liên kết tiếng Hàn:** `상태 기반 정비`.

## 19. predictive maintenance /prɪˈdɪktɪv ˈmeɪntənəns/
**Part of speech:** noun
**Core meaning (English):** maintenance planned from forecasts of future degradation or failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** maintenance được lên kế hoạch từ dự báo degradation hoặc failure tương lai.
**Grammar & collocations:** `predictive-maintenance alert` — cảnh báo; `forecast a failure window` — dự báo cửa sổ failure.
**Examples:** `Predictive maintenance used motor-current trends to order a replacement before the peak season.` → Predictive maintenance dùng xu hướng motor-current để đặt part thay trước mùa cao điểm.
**Liên kết tiếng Hàn:** `예측 정비`.

## 20. wear state estimator /wer steɪt ˈestəmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator that tracks hidden wear or degradation as a state evolving over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator theo dõi wear/degradation ẩn như một state tiến triển theo time.
**Grammar & collocations:** `wear-state-estimator update` — update; `track friction growth` — theo dõi friction tăng.
**Examples:** `The wear state estimator detected gradual backlash before it affected positioning accuracy.` → Wear state estimator phát hiện backlash tăng dần trước khi ảnh hưởng accuracy định vị.
**Liên kết tiếng Hàn:** `마모 상태 추정기`.

## Review in context

**Fault-tolerant control** may trigger **control reconfiguration** after **actuator fault isolation** or **sensor fault isolation**. **Fault accommodation**, a **fault diagnosis residual**, **analytical redundancy**, and **physical redundancy** help decide between a **safe-state transition**, a **fail-operational architecture**, and a **fail-safe architecture**. If capability changes, **mission-level replanning** selects a **contingency trajectory** through **health-aware planning**. The planner can use **remaining useful life**, a **prognostics horizon**, and a **maintenance-trigger threshold** to schedule **condition-based maintenance** or **predictive maintenance**, while a **wear state estimator** tracks degradation between service visits.

**Bản dịch tiếng Việt:** **Fault-tolerant control** có thể kích hoạt **control reconfiguration** sau **actuator fault isolation** hoặc **sensor fault isolation**. **Fault accommodation**, **fault diagnosis residual**, **analytical redundancy** và **physical redundancy** giúp quyết định giữa **safe-state transition**, **fail-operational architecture** và **fail-safe architecture**. Khi capability thay đổi, **mission-level replanning** chọn **contingency trajectory** qua **health-aware planning**. Planner có thể dùng **remaining useful life**, **prognostics horizon** và **maintenance-trigger threshold** để xếp lịch **condition-based maintenance** hoặc **predictive maintenance**, còn **wear state estimator** theo dõi degradation giữa các lần service.
