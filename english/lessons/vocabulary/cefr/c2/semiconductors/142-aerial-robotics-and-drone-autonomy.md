# C2 Vocabulary — Aerial robotics and drone autonomy

This lesson follows a drone from launch and stabilization through navigation, contingency handling, and mapping. The network is **aerial robot → unmanned aerial vehicle → drone autonomy → flight envelope → attitude control → position hold → hover stabilization → visual landing → precision landing → takeoff planning → landing approach → geofenced flight → airspace deconfliction → trajectory replanning → wind estimation → gust rejection → propeller failure → motor-out control → battery-aware flight → aerial mapping**.

## 1. aerial robot /ˈeriəl ˈroʊbɑːt/
**Part of speech:** noun
**Core meaning (English):** a robot that flies to observe, transport, inspect, or interact with the environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** robot bay để quan sát, transport, inspection hoặc tương tác environment.
**Grammar & collocations:** `aerial-robot platform` — platform; `survey a rooftop` — khảo sát mái nhà.
**Examples:** `The aerial robot inspected the bridge deck before the maintenance crew arrived.` → Aerial robot kiểm tra mặt cầu trước khi maintenance crew tới.
**Liên kết tiếng Hàn:** `공중 로봇`.

## 2. unmanned aerial vehicle /ʌnˈmænd ˈeriəl ˈviːɪkəl/
**Part of speech:** noun
**Core meaning (English):** an aircraft that operates without a person physically onboard.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** aircraft hoạt động mà không có người ngồi trên đó.
**Grammar & collocations:** `unmanned-aerial-vehicle mission` — mission; `launch a survey flight` — phóng chuyến survey.
**Examples:** `The unmanned aerial vehicle carried a thermal camera over the forest edge.` → Unmanned aerial vehicle mang thermal camera qua rìa rừng.
**Liên kết tiếng Hàn:** `무인 항공기`.

## 3. drone autonomy /droʊn ɔːˈtɑːnəmi/
**Part of speech:** noun
**Core meaning (English):** the ability of a drone to perceive, plan, and act with limited direct piloting.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng drone perceive, plan và act với ít piloting trực tiếp.
**Grammar & collocations:** `drone-autonomy stack` — stack; `execute a waypoint mission` — thực hiện waypoint mission.
**Examples:** `Drone autonomy allowed the aircraft to reroute around the closed valley.` → Drone autonomy cho aircraft đổi route quanh thung lũng đóng.
**Liên kết tiếng Hàn:** `드론 자율성`.

## 4. flight envelope /flaɪt ˈenvəloʊp/
**Part of speech:** noun
**Core meaning (English):** the range of speeds, altitudes, attitudes, loads, and conditions in which an aircraft can operate safely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** range speed, altitude, attitude, load và condition aircraft bay an toàn.
**Grammar & collocations:** `flight-envelope boundary` — boundary; `remain within certified limits` — ở trong limit được certify.
**Examples:** `The controller limited the climb rate near the edge of the flight envelope.` → Controller giới hạn climb rate gần mép flight envelope.
**Liên kết tiếng Hàn:** `비행 영역`.

## 5. attitude control /ˈætətuːd kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** controlling an aircraft’s orientation in roll, pitch, and yaw.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều khiển orientation aircraft theo roll, pitch và yaw.
**Grammar & collocations:** `attitude-control loop` — loop; `reject a roll disturbance` — loại roll disturbance.
**Examples:** `Attitude control kept the camera level while the drone crossed the ridge.` → Attitude control giữ camera cân bằng khi drone qua ridge.
**Liên kết tiếng Hàn:** `자세 제어`.

## 6. position hold /pəˈzɪʃən hoʊld/
**Part of speech:** noun
**Core meaning (English):** maintaining a commanded location despite wind, sensor noise, and small disturbances.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ location command dù wind, sensor noise và disturbance nhỏ.
**Grammar & collocations:** `position-hold mode` — mode; `hover over a marker` — hover trên marker.
**Examples:** `Position hold kept the drone above the inspection point while the operator zoomed the camera.` → Position hold giữ drone trên điểm inspection khi operator zoom camera.
**Liên kết tiếng Hàn:** `위치 유지`.

## 7. hover stabilization /ˈhʌvər ˌsteɪbələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** stabilizing a vehicle’s height and orientation while it remains nearly stationary in air.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ổn định height và orientation khi vehicle gần như đứng yên trên không.
**Grammar & collocations:** `hover-stabilization controller` — controller; `damp vertical oscillation` — giảm vertical oscillation.
**Examples:** `Hover stabilization improved the image while the drone waited for a safe landing signal.` → Hover stabilization cải thiện image khi drone đợi landing signal an toàn.
**Liên kết tiếng Hàn:** `호버 안정화`.

## 8. visual landing /ˈvɪʒuəl ˈlændɪŋ/
**Part of speech:** noun
**Core meaning (English):** landing guided by visual observations of a pad, surface, or surrounding features.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** landing được dẫn bằng observation visual của pad, surface hoặc feature xung quanh.
**Grammar & collocations:** `visual-landing cue` — cue; `align with a marked pad` — căn với pad có marker.
**Examples:** `Visual landing aligned the drone with the painted center of the charging pad.` → Visual landing căn drone với tâm sơn của charging pad.
**Liên kết tiếng Hàn:** `시각 착륙`.

## 9. precision landing /prɪˈsɪʒən ˈlændɪŋ/
**Part of speech:** noun
**Core meaning (English):** landing within a small specified position and orientation tolerance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** landing trong tolerance nhỏ được định rõ về position và orientation.
**Grammar & collocations:** `precision-landing target` — target; `touch down inside a marked zone` — chạm đất trong zone.
**Examples:** `Precision landing placed the payload beside the fragile sensor mast.` → Precision landing đặt payload cạnh sensor mast dễ hỏng.
**Liên kết tiếng Hàn:** `정밀 착륙`.

## 10. takeoff planning /ˈteɪkɔːf ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning a safe initial climb that accounts for obstacles, wind, load, and available space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** plan initial climb an toàn tính tới obstacle, wind, load và space.
**Grammar & collocations:** `takeoff-planning corridor` — corridor; `clear the launch cage` — rời launch cage.
**Examples:** `Takeoff planning selected a vertical corridor clear of the overhead cables.` → Takeoff planning chọn corridor thẳng đứng tránh cable phía trên.
**Liên kết tiếng Hàn:** `이륙 계획`.

## 11. landing approach /ˈlændɪŋ əˈproʊtʃ/
**Part of speech:** noun
**Core meaning (English):** the planned path and speed profile used to reach a landing surface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** path và speed profile plan để tới landing surface.
**Grammar & collocations:** `landing-approach profile` — profile; `reduce descent speed` — giảm descent speed.
**Examples:** `The landing approach slowed early because the pad was partly covered by dust.` → Landing approach giảm tốc sớm vì pad bị bụi che một phần.
**Liên kết tiếng Hàn:** `착륙 접근`.

## 12. geofenced flight /ˈdʒiːoʊfenst flaɪt/
**Part of speech:** noun
**Core meaning (English):** flight constrained to remain inside a digitally defined geographic boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** flight bị giới hạn trong boundary địa lý digital.
**Grammar & collocations:** `geofenced-flight rule` — rule; `stop before a restricted zone` — dừng trước zone hạn chế.
**Examples:** `Geofenced flight prevented the drone from crossing the airport buffer.` → Geofenced flight ngăn drone qua buffer sân bay.
**Liên kết tiếng Hàn:** `지오펜스 비행`.

## 13. airspace deconfliction /ˈerˌspeɪs diːkənˈflɪkʃən/
**Part of speech:** noun
**Core meaning (English):** coordinating flight paths and times so aircraft do not occupy conflicting airspace.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phối hợp path và time để aircraft không chiếm airspace conflict.
**Grammar & collocations:** `airspace-deconfliction service` — service; `separate crossing trajectories` — tách trajectory giao nhau.
**Examples:** `Airspace deconfliction assigned the inspection drone a higher return altitude.` → Airspace deconfliction gán return altitude cao hơn cho inspection drone.
**Liên kết tiếng Hàn:** `공역 충돌 조정`.

## 14. trajectory replanning /trəˈdʒektəri riːˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** generating a revised flight path when obstacles, goals, or vehicle conditions change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo flight path mới khi obstacle, goal hoặc vehicle condition đổi.
**Grammar & collocations:** `trajectory-replanning trigger` — trigger; `reroute around a crane` — đổi route quanh crane.
**Examples:** `Trajectory replanning sent the drone around a flock that entered the corridor.` → Trajectory replanning đưa drone vòng đàn chim vào corridor.
**Liên kết tiếng Hàn:** `궤적 재계획`.

## 15. wind estimation /wɪnd ˌestəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating wind speed and direction from vehicle motion, airflow, or external measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate wind speed/direction từ motion vehicle, airflow hoặc measurement ngoài.
**Grammar & collocations:** `wind-estimation filter` — filter; `infer a crosswind` — suy crosswind.
**Examples:** `Wind estimation detected a crosswind that explained the lateral tracking error.` → Wind estimation phát hiện crosswind giải thích lateral tracking error.
**Liên kết tiếng Hàn:** `풍속 추정`.

## 16. gust rejection /ɡʌst rɪˈdʒekʃən/
**Part of speech:** noun
**Core meaning (English):** control that limits the effect of a short, sudden increase in wind.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control hạn chế effect của cơn gió tăng đột ngột ngắn.
**Grammar & collocations:** `gust-rejection controller` — controller; `recover attitude after a blast` — phục hồi attitude sau gust.
**Examples:** `Gust rejection kept the camera pointed at the tower during a sudden blast.` → Gust rejection giữ camera hướng tower trong gust bất ngờ.
**Liên kết tiếng Hàn:** `돌풍 거부`.

## 17. propeller failure /prəˈpelər ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** loss or degradation of a propeller’s ability to produce the required thrust.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** propeller mất hoặc giảm khả năng tạo thrust cần thiết.
**Grammar & collocations:** `propeller-failure detector` — detector; `identify a damaged rotor` — nhận diện rotor hỏng.
**Examples:** `Propeller failure triggered an immediate descent toward the designated safe area.` → Propeller failure kích hoạt descent ngay về safe area định trước.
**Liên kết tiếng Hàn:** `프로펠러 고장`.

## 18. motor-out control /ˈmoʊtər aʊt kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** control that maintains as much stable flight as possible after one motor stops producing thrust.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control giữ flight ổn định tối đa có thể sau khi một motor mất thrust.
**Grammar & collocations:** `motor-out-control mode` — mode; `redistribute thrust` — phân bổ lại thrust.
**Examples:** `Motor-out control rolled the aircraft toward an emergency landing corridor.` → Motor-out control làm aircraft roll về emergency landing corridor.
**Liên kết tiếng Hàn:** `모터 고장 제어`.

## 19. battery-aware flight /ˈbætəri əˈwer flaɪt/
**Part of speech:** noun
**Core meaning (English):** flight planning and control that account for remaining battery energy and reserve requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** plan/control flight tính tới battery còn lại và reserve requirement.
**Grammar & collocations:** `battery-aware-flight planner` — planner; `reserve energy for landing` — giữ energy cho landing.
**Examples:** `Battery-aware flight shortened the mapping grid when the return reserve fell below target.` → Battery-aware flight rút ngắn mapping grid khi return reserve dưới target.
**Liên kết tiếng Hàn:** `배터리 인지 비행`.

## 20. aerial mapping /ˈeriəl ˈmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** building a map of ground, structures, or terrain from observations collected in flight.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo map ground, structure hoặc terrain từ observation thu trong flight.
**Grammar & collocations:** `aerial-mapping mission` — mission; `survey a construction site` — khảo sát construction site.
**Examples:** `Aerial mapping produced an updated roof model after the storm.` → Aerial mapping tạo roof model cập nhật sau bão.
**Liên kết tiếng Hàn:** `항공 매핑`.

## Review in context

An **aerial robot** or **unmanned aerial vehicle** depends on **drone autonomy** and a safe **flight envelope**. **Attitude control**, **position hold**, and **hover stabilization** support **visual landing**, **precision landing**, **takeoff planning**, and a controlled **landing approach**. **Geofenced flight** and **airspace deconfliction** constrain routes; **trajectory replanning** adapts to new obstacles. **Wind estimation** and **gust rejection** handle weather, while **propeller failure** and **motor-out control** provide a contingency. **Battery-aware flight** protects reserve energy, and **aerial mapping** turns the mission into useful terrain data.

**Bản dịch tiếng Việt:** **Aerial robot** hoặc **unmanned aerial vehicle** phụ thuộc vào **drone autonomy** và **flight envelope** an toàn. **Attitude control**, **position hold** và **hover stabilization** hỗ trợ **visual landing**, **precision landing**, **takeoff planning** và **landing approach** có kiểm soát. **Geofenced flight** và **airspace deconfliction** giới hạn route; **trajectory replanning** adapt khi có obstacle mới. **Wind estimation** và **gust rejection** xử lý weather, còn **propeller failure** và **motor-out control** cung cấp contingency. **Battery-aware flight** bảo vệ reserve energy, còn **aerial mapping** biến mission thành terrain data hữu ích.
