# C2 Vocabulary — Robot energy and thermal-aware planning

This lesson connects motion choices to battery state, motor efficiency, heat flow, and charging decisions. The network is **battery-aware planning → energy-aware planning → power-aware control → energy-optimal trajectory → energy budget → battery state of charge → state of health → battery aging model → battery thermal model → energy recovery → motor efficiency map → drive efficiency → thermal derating → thermal headroom → heat rejection path → winding temperature → cooling duty cycle → heat sink resistance → peak power shaving → charging schedule**.

## 1. battery-aware planning /ˈbætəri əˈwer ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning that accounts for current battery condition, expected consumption, and future charging needs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning tính tới condition pin, consumption dự kiến và nhu cầu sạc tương lai.
**Grammar & collocations:** `battery-aware-planning cost` — cost; `reserve energy for a return trip` — giữ energy cho chuyến về.
**Examples:** `Battery-aware planning shortened the detour so the robot could return before recharging.` → Battery-aware planning rút ngắn đường vòng để robot về trước khi sạc.
**Liên kết tiếng Hàn:** `배터리 인지 계획`.

## 2. energy-aware planning /ˈenərdʒi əˈwer ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning that chooses actions with explicit attention to their energy consumption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning chọn action có tính rõ tới energy tiêu thụ.
**Grammar & collocations:** `energy-aware-planning objective` — objective; `trade travel time for lower consumption` — đổi travel time lấy consumption thấp hơn.
**Examples:** `Energy-aware planning preferred a smooth corridor over repeated sharp turns.` → Energy-aware planning ưu tiên corridor mượt thay vì nhiều lần rẽ gắt.
**Liên kết tiếng Hàn:** `에너지 인지 계획`.

## 3. power-aware control /ˈpaʊər əˈwer kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** control that adapts commands to power limits, electrical demand, or thermal consequences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control adapt command theo power limit, demand electrical hoặc hậu quả thermal.
**Grammar & collocations:** `power-aware-control policy` — policy; `limit simultaneous acceleration` — giới hạn acceleration đồng thời.
**Examples:** `Power-aware control softened both joint accelerations when the bus voltage sagged.` → Power-aware control làm mềm cả hai joint acceleration khi bus voltage sụt.
**Liên kết tiếng Hàn:** `전력 인지 제어`.

## 4. energy-optimal trajectory /ˈenərdʒi ˈɑːptəməl trəˈdʒektəri/
**Part of speech:** noun
**Core meaning (English):** a feasible trajectory that minimizes modeled energy use under its task constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trajectory khả thi tối thiểu energy model dưới task constraint.
**Grammar & collocations:** `energy-optimal-trajectory solver` — solver; `minimize electrical work` — tối thiểu hóa electrical work.
**Examples:** `The energy-optimal trajectory lifted slowly before accelerating across the open floor.` → Energy-optimal trajectory nâng chậm trước khi tăng tốc qua sàn trống.
**Liên kết tiếng Hàn:** `에너지 최적 궤적`.

## 5. energy budget /ˈenərdʒi ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the maximum energy available for a task, mission segment, or operating period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng energy tối đa dành cho task, mission segment hoặc period vận hành.
**Grammar & collocations:** `energy-budget constraint` — constraint; `reserve a return margin` — chừa margin quay về.
**Examples:** `The inspection route exceeded the energy budget after the elevator became unavailable.` → Route inspection vượt energy budget sau khi thang máy không dùng được.
**Liên kết tiếng Hàn:** `에너지 예산`.

## 6. battery state of charge /ˈbætəri steɪt əv tʃɑːrdʒ/
**Part of speech:** noun
**Core meaning (English):** the estimated fraction of a battery’s usable charge that remains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần charge usable ước tính còn lại trong pin.
**Grammar & collocations:** `battery-state-of-charge estimate` — estimate; `report a low charge level` — báo charge thấp.
**Examples:** `The battery state of charge fell faster during the heavy lifting sequence.` → Battery state of charge giảm nhanh hơn trong sequence nâng nặng.
**Liên kết tiếng Hàn:** `배터리 충전 상태`.

## 7. state of health /steɪt əv helθ/
**Part of speech:** noun
**Core meaning (English):** an estimate of a battery’s current capability relative to its healthy condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate capability hiện tại của pin so với condition khỏe ban đầu.
**Grammar & collocations:** `state-of-health estimate` — estimate; `track capacity fade` — theo dõi capacity fade.
**Examples:** `A lower state of health reduced the mission planner’s usable reserve.` → State of health thấp hơn làm giảm reserve usable của mission planner.
**Liên kết tiếng Hàn:** `건강 상태`.

## 8. battery aging model /ˈbætəri ˈeɪdʒɪŋ ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a model describing how battery capacity, resistance, or safety changes with use and time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model mô tả capacity, resistance hoặc safety pin đổi theo use và time.
**Grammar & collocations:** `battery-aging-model parameter` — parameter; `predict capacity loss` — dự báo capacity loss.
**Examples:** `The battery aging model predicted shorter missions after a year of fast charging.` → Battery aging model dự đoán mission ngắn hơn sau một năm sạc nhanh.
**Liên kết tiếng Hàn:** `배터리 노화 모델`.

## 9. battery thermal model /ˈbætəri ˈθɜːrməl ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a model of heat generation, storage, and dissipation inside a battery during operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model heat generation, storage và dissipation trong pin khi vận hành.
**Grammar & collocations:** `battery-thermal-model state` — state; `predict cell temperature` — dự đoán cell temperature.
**Examples:** `The battery thermal model warned that the fast charge would exceed the cooling capacity.` → Battery thermal model cảnh báo sạc nhanh sẽ vượt cooling capacity.
**Liên kết tiếng Hàn:** `배터리 열 모델`.

## 10. energy recovery /ˈenərdʒi rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** capturing energy that would otherwise be dissipated and returning it to a storage or power system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu energy lẽ ra bị dissipate rồi trả về storage hoặc power system.
**Grammar & collocations:** `energy-recovery path` — path; `feed braking energy back` — đưa braking energy trở lại.
**Examples:** `Energy recovery returned part of the descent energy to the battery.` → Energy recovery trả một phần energy lúc hạ về pin.
**Liên kết tiếng Hàn:** `에너지 회수`.

## 11. motor efficiency map /ˈmoʊtər ɪˈfɪʃənsi mæp/
**Part of speech:** noun
**Core meaning (English):** a map showing motor efficiency across combinations of speed and torque.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** map cho thấy motor efficiency theo các kết hợp speed và torque.
**Grammar & collocations:** `motor-efficiency-map region` — region; `operate near the efficiency ridge` — chạy gần ridge efficiency.
**Examples:** `The planner used the motor efficiency map to avoid an inefficient high-speed corner.` → Planner dùng motor efficiency map để tránh góc high-speed kém hiệu quả.
**Liên kết tiếng Hàn:** `모터 효율 맵`.

## 12. drive efficiency /draɪv ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** the fraction of input electrical power delivered usefully by a motor drive and transmission.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần electrical power input được drive và transmission biến thành output hữu ích.
**Grammar & collocations:** `drive-efficiency estimate` — estimate; `account for inverter loss` — tính inverter loss.
**Examples:** `Drive efficiency dropped when the gearbox operated far from its rated speed.` → Drive efficiency giảm khi gearbox chạy xa speed định mức.
**Liên kết tiếng Hàn:** `구동 효율`.

## 13. thermal derating /ˈθɜːrməl ˈdiːreɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** intentionally reducing allowable performance as temperature approaches a limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chủ động giảm performance cho phép khi temperature tiến gần limit.
**Grammar & collocations:** `thermal-derating curve` — curve; `reduce continuous torque` — giảm torque liên tục.
**Examples:** `Thermal derating lowered the lift speed before the motor reached its winding limit.` → Thermal derating giảm tốc độ lift trước khi motor chạm winding limit.
**Liên kết tiếng Hàn:** `열 디레이팅`.

## 14. thermal headroom /ˈθɜːrməl ˈhedruːm/
**Part of speech:** noun
**Core meaning (English):** the remaining temperature margin before a component reaches its permitted limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** margin temperature còn lại trước khi component chạm limit cho phép.
**Grammar & collocations:** `thermal-headroom estimate` — estimate; `preserve temperature margin` — giữ margin temperature.
**Examples:** `The controller preserved thermal headroom for the final acceleration.` → Controller giữ thermal headroom cho acceleration cuối.
**Liên kết tiếng Hàn:** `열 여유`.

## 15. heat rejection path /hiːt rɪˈdʒekʃən pæθ/
**Part of speech:** noun
**Core meaning (English):** the physical route through which generated heat moves from a component into the environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường vật lý heat đi từ component ra môi trường.
**Grammar & collocations:** `heat-rejection-path resistance` — resistance; `conduct heat to a chassis` — dẫn heat vào chassis.
**Examples:** `A blocked heat rejection path raised the processor temperature during mapping.` → Heat rejection path bị chặn làm processor temperature tăng khi mapping.
**Liên kết tiếng Hàn:** `열 방출 경로`.

## 16. winding temperature /ˈwaɪndɪŋ ˈtempərətʃər/
**Part of speech:** noun
**Core meaning (English):** the temperature of the conductive windings inside an electric motor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** temperature của winding dẫn điện bên trong motor.
**Grammar & collocations:** `winding-temperature sensor` — sensor; `limit copper heating` — giới hạn copper heating.
**Examples:** `The winding temperature rose faster during repeated reversals than during steady motion.` → Winding temperature tăng nhanh hơn khi đảo hướng lặp lại so với motion đều.
**Liên kết tiếng Hàn:** `권선 온도`.

## 17. cooling duty cycle /ˈkuːlɪŋ ˈduːti ˈsaɪkəl/
**Part of speech:** noun
**Core meaning (English):** the fraction of time a cooling device operates during a period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần thời gian cooling device hoạt động trong một period.
**Grammar & collocations:** `cooling-duty-cycle limit` — limit; `modulate a fan command` — điều chỉnh fan command.
**Examples:** `The cooling duty cycle increased after the robot entered the warm warehouse.` → Cooling duty cycle tăng sau khi robot vào warehouse nóng.
**Liên kết tiếng Hàn:** `냉각 듀티 사이클`.

## 18. heat sink resistance /hiːt sɪŋk rɪˈzɪstəns/
**Part of speech:** noun
**Core meaning (English):** a measure of how strongly a heat sink resists heat flow from a component to its surroundings.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức heat sink cản heat flow từ component ra môi trường.
**Grammar & collocations:** `heat-sink-resistance value` — value; `lower thermal resistance` — giảm thermal resistance.
**Examples:** `Dust increased heat sink resistance and reduced the controller’s continuous output.` → Bụi tăng heat sink resistance và giảm output liên tục của controller.
**Liên kết tiếng Hàn:** `방열판 열저항`.

## 19. peak power shaving /piːk ˈpaʊər ˈʃeɪvɪŋ/
**Part of speech:** noun
**Core meaning (English):** reducing short-lived power peaks by shifting, smoothing, or limiting demanding actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm power peak ngắn bằng cách shift, smooth hoặc giới hạn action nặng.
**Grammar & collocations:** `peak-power-shaving strategy` — strategy; `stagger simultaneous lifts` — lệch thời điểm các lift đồng thời.
**Examples:** `Peak power shaving staggered the two arms’ accelerations to protect the battery bus.` → Peak power shaving lệch acceleration của hai arm để bảo vệ battery bus.
**Liên kết tiếng Hàn:** `첨두 전력 절감`.

## 20. charging schedule /ˈtʃɑːrdʒɪŋ ˈskedʒuːl/
**Part of speech:** noun
**Core meaning (English):** a planned timetable for when and how a battery or robot should recharge.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timetable plan thời điểm và cách pin/robot recharge.
**Grammar & collocations:** `charging-schedule constraint` — constraint; `schedule a top-up between missions` — xếp lịch top-up giữa mission.
**Examples:** `The charging schedule used the quiet shift to refill the fleet before morning deliveries.` → Charging schedule dùng ca vắng để sạc đầy fleet trước delivery buổi sáng.
**Liên kết tiếng Hàn:** `충전 일정`.

## Review in context

**Battery-aware planning**, **energy-aware planning**, and **power-aware control** can choose an **energy-optimal trajectory** within an **energy budget**. They track **battery state of charge**, **state of health**, a **battery aging model**, and a **battery thermal model**; **energy recovery** can return some braking energy. A **motor efficiency map** and **drive efficiency** guide operating points, while **thermal derating** protects **thermal headroom**. The **heat rejection path**, **winding temperature**, **cooling duty cycle**, and **heat sink resistance** determine how much margin remains. **Peak power shaving** smooths demand, and a **charging schedule** restores capacity between missions.

**Bản dịch tiếng Việt:** **Battery-aware planning**, **energy-aware planning** và **power-aware control** có thể chọn **energy-optimal trajectory** trong **energy budget**. Chúng theo dõi **battery state of charge**, **state of health**, **battery aging model** và **battery thermal model**; **energy recovery** có thể trả lại một phần braking energy. **Motor efficiency map** và **drive efficiency** định hướng operating point, còn **thermal derating** bảo vệ **thermal headroom**. **Heat rejection path**, **winding temperature**, **cooling duty cycle** và **heat sink resistance** quyết định margin còn lại. **Peak power shaving** làm phẳng demand, còn **charging schedule** phục hồi capacity giữa các mission.
