# C2 Vocabulary — Robot digital twins and simulation validation

This lesson follows a simulation model from physical calibration to scenario coverage before a robot is deployed. The network is **robot digital twin → digital twin synchronization → simulation fidelity → model fidelity → simulator calibration → simulator validation → simulator verification → physics engine → contact model → collision model → deformable-body simulation → rigid-body simulation → domain gap → reality gap → simulated sensor → sensor noise model → actuator latency model → simulated disturbance → scenario generation → scenario coverage**.

## 1. robot digital twin /ˈroʊbɑːt ˈdɪdʒətəl twɪn/
**Part of speech:** noun
**Core meaning (English):** a continuously updated digital representation of a physical robot, its environment, and relevant operating state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation digital được cập nhật liên tục của robot thật, environment và operating state liên quan.
**Grammar & collocations:** `robot-digital-twin state` — state; `mirror a deployed mechanism` — mirror mechanism đã deploy.
**Examples:** `The robot digital twin displayed the arm pose and battery condition before the next mission.` → Robot digital twin hiển thị arm pose và battery condition trước mission tiếp theo.
**Liên kết tiếng Hàn:** `로봇 디지털 트윈`.

## 2. digital twin synchronization /ˈdɪdʒətəl twɪn ˌsɪŋkrənəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** keeping a digital twin’s state aligned with measurements and events from the physical system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ state digital twin khớp measurement và event từ system thật.
**Grammar & collocations:** `digital-twin-synchronization delay` — delay; `align virtual and physical timestamps` — căn timestamp ảo và thật.
**Examples:** `Digital twin synchronization lagged during the network outage, so the planner paused.` → Digital twin synchronization trễ trong network outage nên planner tạm dừng.
**Liên kết tiếng Hàn:** `디지털 트윈 동기화`.

## 3. simulation fidelity /ˌsɪmjəˈleɪʃən fɪˈdeləti/
**Part of speech:** noun
**Core meaning (English):** how closely a simulation reproduces the behaviors and measurements relevant to a real system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức simulation tái tạo gần behavior và measurement quan trọng của system thật.
**Grammar & collocations:** `simulation-fidelity metric` — metric; `increase contact realism` — tăng realism contact.
**Examples:** `Higher simulation fidelity exposed the vibration that the simplified model had hidden.` → Simulation fidelity cao hơn làm lộ vibration mà model đơn giản che đi.
**Liên kết tiếng Hàn:** `시뮬레이션 충실도`.

## 4. model fidelity /ˈmɑːdəl fɪˈdeləti/
**Part of speech:** noun
**Core meaning (English):** the degree to which a model captures the physical relationships and limitations that matter for a task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức model capture đúng relationship và limitation vật lý quan trọng cho task.
**Grammar & collocations:** `model-fidelity assumption` — assumption; `represent gearbox backlash` — biểu diễn backlash gearbox.
**Examples:** `Model fidelity mattered more than visual detail for predicting the heavy arm’s stopping distance.` → Model fidelity quan trọng hơn visual detail để dự đoán stopping distance của arm nặng.
**Liên kết tiếng Hàn:** `모델 충실도`.

## 5. simulator calibration /ˈsɪmjəleɪtər ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting simulator parameters so its outputs match measurements from a reference system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh parameter simulator để output khớp measurement của system reference.
**Grammar & collocations:** `simulator-calibration run` — run; `fit friction parameters` — fit friction parameter.
**Examples:** `Simulator calibration used measured joint oscillations to tune the damping values.` → Simulator calibration dùng joint oscillation đo được để chỉnh damping value.
**Liên kết tiếng Hàn:** `시뮬레이터 보정`.

## 6. simulator validation /ˈsɪmjəleɪtər ˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking whether a simulator is accurate enough for a stated use by comparing it with real evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra simulator đủ accurate cho use case bằng cách so với evidence thật.
**Grammar & collocations:** `simulator-validation report` — report; `compare simulated and measured trajectories` — so trajectory mô phỏng và đo.
**Examples:** `Simulator validation found that the virtual gripper closed too quickly.` → Simulator validation phát hiện gripper ảo đóng quá nhanh.
**Liên kết tiếng Hàn:** `시뮬레이터 검증`.

## 7. simulator verification /ˈsɪmjəleɪtər ˌverəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking that a simulator implements its intended equations, interfaces, and numerical rules correctly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra simulator implement đúng equation, interface và numerical rule đã định.
**Grammar & collocations:** `simulator-verification test` — test; `check a conservation law` — kiểm tra conservation law.
**Examples:** `Simulator verification caught a sign error in the virtual torque calculation.` → Simulator verification bắt sign error trong torque calculation ảo.
**Liên kết tiếng Hàn:** `시뮬레이터 검증`.

## 8. physics engine /ˈfɪzɪks ˈendʒɪn/
**Part of speech:** noun
**Core meaning (English):** software that numerically computes motion, forces, collisions, and constraints in a physical simulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** software tính số motion, force, collision và constraint trong simulation vật lý.
**Grammar & collocations:** `physics-engine solver` — solver; `integrate rigid-body dynamics` — integrate rigid-body dynamics.
**Examples:** `The physics engine resolved the pallet contact before the planner evaluated the next action.` → Physics engine giải contact với pallet trước khi planner đánh giá action tiếp.
**Liên kết tiếng Hàn:** `물리 엔진`.

## 9. contact model /ˈkɑːntækt ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a model of how bodies exchange force, friction, deformation, or energy when they touch.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model cách body trao force, friction, deformation hoặc energy khi chạm.
**Grammar & collocations:** `contact-model parameter` — parameter; `represent compliant contact` — biểu diễn contact compliant.
**Examples:** `The contact model predicted a softer response for the rubber pad than for steel.` → Contact model dự đoán response mềm hơn cho pad cao su so với thép.
**Liên kết tiếng Hàn:** `접촉 모델`.

## 10. collision model /kəˈlɪʒən ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a model that detects geometric intersection and computes the resulting collision response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model detect giao nhau geometry và tính collision response.
**Grammar & collocations:** `collision-model approximation` — approximation; `resolve interpenetration` — giải interpenetration.
**Examples:** `The collision model used a conservative margin around the uncertain gripper shape.` → Collision model dùng margin bảo thủ quanh shape gripper không chắc chắn.
**Liên kết tiếng Hàn:** `충돌 모델`.

## 11. deformable-body simulation /dɪˈfɔːrməbəl ˈbɑːdi ˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** simulation that represents how an object changes shape under forces and constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** simulation biểu diễn object đổi shape dưới force và constraint.
**Grammar & collocations:** `deformable-body-simulation mesh` — mesh; `model cloth compression` — model cloth compression.
**Examples:** `Deformable-body simulation predicted how the pouch folded around the gripper.` → Deformable-body simulation dự đoán pouch gập quanh gripper thế nào.
**Liên kết tiếng Hàn:** `변형체 시뮬레이션`.

## 12. rigid-body simulation /ˈrɪdʒɪd ˈbɑːdi ˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** simulation that treats bodies as keeping their shape while translating and rotating under forces.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** simulation coi body giữ shape trong khi translate và rotate dưới force.
**Grammar & collocations:** `rigid-body-simulation timestep` — timestep; `integrate pose and angular velocity` — integrate pose và angular velocity.
**Examples:** `Rigid-body simulation was sufficient for the metal crate and ran faster than the flexible model.` → Rigid-body simulation đủ cho crate kim loại và chạy nhanh hơn model flexible.
**Liên kết tiếng Hàn:** `강체 시뮬레이션`.

## 13. domain gap /doʊˈmeɪn ɡæp/
**Part of speech:** noun
**Core meaning (English):** a difference between the data or conditions used for training and those encountered during deployment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khác biệt giữa data/condition lúc train và lúc deploy.
**Grammar & collocations:** `domain-gap analysis` — analysis; `measure transfer degradation` — đo degradation transfer.
**Examples:** `The domain gap appeared when warehouse lighting changed from simulation to night shift.` → Domain gap xuất hiện khi lighting warehouse đổi từ simulation sang ca đêm.
**Liên kết tiếng Hàn:** `도메인 격차`.

## 14. reality gap /riˈæləti ɡæp/
**Part of speech:** noun
**Core meaning (English):** the mismatch between simulated behavior and the behavior of a physical system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mismatch giữa behavior mô phỏng và behavior system vật lý.
**Grammar & collocations:** `reality-gap mitigation` — mitigation; `close the simulation-to-hardware difference` — thu hẹp khác biệt simulation-hardware.
**Examples:** `Reality gap caused the simulated grasp to succeed even though the real object slipped.` → Reality gap khiến grasp mô phỏng thành công dù object thật trượt.
**Liên kết tiếng Hàn:** `현실 격차`.

## 15. simulated sensor /ˈsɪmjəleɪtɪd ˈsensər/
**Part of speech:** noun
**Core meaning (English):** a virtual sensor that produces measurements from a simulated environment and model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sensor ảo tạo measurement từ environment và model mô phỏng.
**Grammar & collocations:** `simulated-sensor stream` — stream; `render a depth image` — render depth image.
**Examples:** `The simulated sensor produced the same missing-return pattern as the dusty lidar.` → Simulated sensor tạo pattern missing-return giống lidar bị bụi.
**Liên kết tiếng Hàn:** `시뮬레이션 센서`.

## 16. sensor noise model /ˈsensər nɔɪz ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a model of random, biased, correlated, or quantized error added to sensor measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model error random, bias, correlated hoặc quantized được thêm vào measurement sensor.
**Grammar & collocations:** `sensor-noise-model parameter` — parameter; `inject correlated noise` — chèn noise correlated.
**Examples:** `The sensor noise model included temperature-dependent bias in the inertial unit.` → Sensor noise model gồm bias phụ thuộc temperature trong inertial unit.
**Liên kết tiếng Hàn:** `센서 잡음 모델`.

## 17. actuator latency model /ˈæktʃueɪtər ˈleɪtənsi ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a model of the delay between a command and the actuator’s physical response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model delay giữa command và response vật lý của actuator.
**Grammar & collocations:** `actuator-latency-model estimate` — estimate; `simulate command delay` — simulate command delay.
**Examples:** `The actuator latency model prevented the policy from relying on instantaneous torque.` → Actuator latency model ngăn policy dựa vào torque tức thời.
**Liên kết tiếng Hàn:** `구동기 지연 모델`.

## 18. simulated disturbance /ˈsɪmjəleɪtɪd dɪˈstɜːrbəns/
**Part of speech:** noun
**Core meaning (English):** a modeled external force, delay, failure, or environmental change introduced during simulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** force, delay, failure hoặc environment change bên ngoài được đưa vào simulation.
**Grammar & collocations:** `simulated-disturbance schedule` — schedule; `inject a payload shift` — chèn payload shift.
**Examples:** `The simulated disturbance pushed the arm sideways just as it began the insertion.` → Simulated disturbance đẩy arm sang bên ngay khi bắt đầu insertion.
**Liên kết tiếng Hàn:** `시뮬레이션 외란`.

## 19. scenario generation /səˈnɛrioʊ ˌdʒenəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** creating varied situations, environments, and events for testing or training a system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo nhiều situation, environment và event để test hoặc train system.
**Grammar & collocations:** `scenario-generation engine` — engine; `sample a blocked-aisle case` — lấy mẫu case aisle bị chặn.
**Examples:** `Scenario generation produced thousands of combinations of lighting, traffic, and payload.` → Scenario generation tạo hàng nghìn combination lighting, traffic và payload.
**Liên kết tiếng Hàn:** `시나리오 생성`.

## 20. scenario coverage /səˈnɛrioʊ ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the extent to which important combinations of conditions and events have been tested.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức các combination condition và event quan trọng đã được test.
**Grammar & collocations:** `scenario-coverage metric` — metric; `cover rare interactions` — cover interaction hiếm.
**Examples:** `Scenario coverage remained low for wet floors and partially blocked emergency exits.` → Scenario coverage vẫn thấp với sàn ướt và exit khẩn cấp bị chặn một phần.
**Liên kết tiếng Hàn:** `시나리오 커버리지`.

## Review in context

A **robot digital twin** depends on **digital twin synchronization** and sufficient **simulation fidelity** and **model fidelity**. **Simulator calibration**, **simulator validation**, and **simulator verification** establish whether the **physics engine**, **contact model**, and **collision model** behave as intended. **Deformable-body simulation** captures flexible objects, while **rigid-body simulation** handles simpler loads. A **domain gap** and **reality gap** must be measured with a **simulated sensor**, a realistic **sensor noise model**, an **actuator latency model**, and a **simulated disturbance**. **Scenario generation** then expands tests, and **scenario coverage** shows which conditions remain unexamined.

**Bản dịch tiếng Việt:** **Robot digital twin** phụ thuộc vào **digital twin synchronization**, **simulation fidelity** và **model fidelity** đủ tốt. **Simulator calibration**, **simulator validation** và **simulator verification** xác lập **physics engine**, **contact model** và **collision model** hoạt động đúng ý định. **Deformable-body simulation** mô tả object mềm, còn **rigid-body simulation** xử lý tải đơn giản hơn. **Domain gap** và **reality gap** phải được đo bằng **simulated sensor**, **sensor noise model** thực tế, **actuator latency model** và **simulated disturbance**. **Scenario generation** mở rộng test, còn **scenario coverage** cho thấy condition nào vẫn chưa kiểm tra.
