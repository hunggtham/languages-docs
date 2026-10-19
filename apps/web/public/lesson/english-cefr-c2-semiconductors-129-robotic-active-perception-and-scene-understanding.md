# C2 Vocabulary — Robotic active perception and scene understanding

This lesson treats perception as a decision process: the robot chooses what to observe, resolves ambiguity, and builds representations useful for action. The network is **active perception → perception-aware planning → viewpoint selection → next-best-view → viewpoint utility → information gain → occlusion reasoning → object-centric representation → affordance detection → affordance map → open-set recognition → unknown-object detection → semantic segmentation → instance segmentation → panoptic segmentation → object pose refinement → pose hypothesis → multi-view fusion → cross-modal registration → visual grounding**.

## 1. active perception /ˈæktɪv pərˈsepʃən/
**Part of speech:** noun
**Core meaning (English):** perception in which the robot chooses actions or sensor views to improve its knowledge.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** perception nơi robot chủ động chọn action hoặc sensor view để tăng knowledge.
**Grammar & collocations:** `active-perception policy` — policy; `move the camera to reduce uncertainty` — di chuyển camera để giảm uncertainty.
**Examples:** `Active perception tilted the camera before grasping the partly hidden handle.` → Active perception nghiêng camera trước khi grasp tay cầm bị che một phần.
**Liên kết tiếng Hàn:** `능동 지각`.

## 2. perception-aware planning /pərˈsepʃən əˈwer ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning that accounts for how actions affect future sensing quality and uncertainty.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning tính tới action sẽ ảnh hưởng chất lượng sensing và uncertainty tương lai thế nào.
**Grammar & collocations:** `perception-aware-planning objective` — objective; `trade travel cost against visibility` — cân travel cost với visibility.
**Examples:** `Perception-aware planning inserted a brief look around the occluder before the robot committed to the lift.` → Perception-aware planning chèn một lần nhìn quanh vật che trước khi robot quyết định lift.
**Liên kết tiếng Hàn:** `지각 인지 계획`.

## 3. viewpoint selection /ˈvjuːpɔɪnt səˈlekʃən/
**Part of speech:** noun
**Core meaning (English):** choosing a sensor position and orientation that best serves a perception objective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn position và orientation sensor phục vụ tốt nhất cho perception objective.
**Grammar & collocations:** `viewpoint-selection criterion` — criterion; `choose a collision-free camera pose` — chọn camera pose không va chạm.
**Examples:** `Viewpoint selection moved the depth camera above the bin to expose the stacked parts.` → Viewpoint selection đưa depth camera lên trên bin để lộ các part xếp chồng.
**Liên kết tiếng Hàn:** `시점 선택`.

## 4. next-best-view /nekst best vjuː/
**Part of speech:** noun
**Core meaning (English):** the sensor view predicted to provide the most useful additional information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** view sensor được dự đoán sẽ cung cấp information bổ ích nhất tiếp theo.
**Grammar & collocations:** `next-best-view planner` — planner; `select the next informative pose` — chọn pose giàu thông tin tiếp theo.
**Examples:** `The next-best-view looked behind the crate where the object hypothesis remained ambiguous.` → Next-best-view nhìn phía sau thùng nơi object hypothesis còn mơ hồ.
**Liên kết tiếng Hàn:** `차선 최적 시점`.

## 5. viewpoint utility /ˈvjuːpɔɪnt juːˈtɪləti/
**Part of speech:** noun
**Core meaning (English):** a score measuring the expected benefit of taking a particular sensor view.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm đo lợi ích kỳ vọng của một sensor view cụ thể.
**Grammar & collocations:** `viewpoint-utility score` — score; `rank candidate camera poses` — xếp hạng camera pose ứng viên.
**Examples:** `The high viewpoint utility outweighed the extra arm motion needed to reach the corner.` → Viewpoint utility cao bù cho motion thêm của arm để tới góc.
**Liên kết tiếng Hàn:** `시점 효용`.

## 6. information gain /ˌɪnfərˈmeɪʃən ɡeɪn/
**Part of speech:** noun
**Core meaning (English):** the expected reduction in uncertainty produced by a measurement or observation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức giảm uncertainty kỳ vọng do measurement hoặc observation tạo ra.
**Grammar & collocations:** `information-gain estimate` — estimate; `reduce posterior entropy` — giảm entropy posterior.
**Examples:** `The robot preferred the view with greater information gain about the hidden connector.` → Robot ưu tiên view có information gain lớn hơn về connector bị che.
**Liên kết tiếng Hàn:** `정보 이득`.

## 7. occlusion reasoning /əˈkluːʒən ˈriːzənɪŋ/
**Part of speech:** noun
**Core meaning (English):** reasoning about which objects or surfaces are hidden and what may lie behind them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy luận object hoặc surface nào bị che và thứ gì có thể nằm phía sau.
**Grammar & collocations:** `occlusion-reasoning module` — module; `infer a hidden contour` — suy contour bị che.
**Examples:** `Occlusion reasoning kept the planner from treating the visible handle as the whole object.` → Occlusion reasoning ngăn planner coi tay cầm nhìn thấy là toàn bộ object.
**Liên kết tiếng Hàn:** `폐색 추론`.

## 8. object-centric representation /ˈɑːbdʒekt ˈsentrɪk ˌreprɪzenˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a scene representation organized around separate objects and their properties rather than raw pixels alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation scene tổ chức quanh object riêng và property của chúng thay vì chỉ pixel thô.
**Grammar & collocations:** `object-centric-representation slot` — slot; `track an object identity` — theo dõi identity object.
**Examples:** `The object-centric representation preserved the cup identity when the hand crossed in front of it.` → Object-centric representation giữ identity của cốc khi tay đi qua phía trước.
**Liên kết tiếng Hàn:** `객체 중심 표현`.

## 9. affordance detection /əˈfɔːrdəns dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** detecting action possibilities that an object or surface offers to the robot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát hiện action possibility mà object hoặc surface cung cấp cho robot.
**Grammar & collocations:** `affordance-detection network` — network; `detect a graspable rim` — detect mép có thể grasp.
**Examples:** `Affordance detection marked the drawer handle as pullable and the panel as pushable.` → Affordance detection đánh dấu tay cầm là có thể kéo và panel là có thể đẩy.
**Liên kết tiếng Hàn:** `행동 가능성 검출`.

## 10. affordance map /əˈfɔːrdəns mæp/
**Part of speech:** noun
**Core meaning (English):** a spatial map labeling where and how actions can be performed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** map không gian gắn nhãn nơi và cách action có thể thực hiện.
**Grammar & collocations:** `affordance-map layer` — layer; `query a push region` — query vùng push.
**Examples:** `The affordance map highlighted a stable foothold beside the machine.` → Affordance map làm nổi bật foothold ổn định cạnh máy.
**Liên kết tiếng Hàn:** `행동 가능성 지도`.

## 11. open-set recognition /ˈoʊpən set ˌrekəɡˈnɪʃən/
**Part of speech:** noun
**Core meaning (English):** recognition that can identify known classes while flagging inputs from unknown classes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** recognition vừa nhận class đã biết vừa đánh dấu input thuộc class chưa biết.
**Grammar & collocations:** `open-set-recognition threshold` — threshold; `reject an unknown category` — reject category chưa biết.
**Examples:** `Open-set recognition refused to force the unfamiliar tool into a known object label.` → Open-set recognition từ chối ép tool lạ vào nhãn object đã biết.
**Liên kết tiếng Hàn:** `개방 집합 인식`.

## 12. unknown-object detection /ʌnˈnoʊn ˈɑːbdʒekt dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** detecting an object whose category or appearance was not represented in the training knowledge.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** detect object có category hoặc appearance chưa có trong knowledge train.
**Grammar & collocations:** `unknown-object-detection alert` — alert; `flag an out-of-distribution item` — đánh dấu item ngoài distribution.
**Examples:** `Unknown-object detection stopped the picker when a damaged package entered the bin.` → Unknown-object detection dừng picker khi package hỏng vào bin.
**Liên kết tiếng Hàn:** `미지 객체 검출`.

## 13. semantic segmentation /sɪˈmæntɪk ˌseɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** assigning a class label to each image or point-cloud element without separating individual instances.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán class label cho từng pixel hoặc point mà không tách instance riêng.
**Grammar & collocations:** `semantic-segmentation mask` — mask; `label all floor pixels` — gắn nhãn pixel sàn.
**Examples:** `Semantic segmentation separated floor, wall, and obstacle regions for navigation.` → Semantic segmentation tách vùng sàn, tường và obstacle cho navigation.
**Liên kết tiếng Hàn:** `의미론적 분할`.

## 14. instance segmentation /ˈɪnstəns ˌseɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** assigning class labels while also separating different individual objects of the same class.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vừa gán class label vừa tách từng object riêng cùng class.
**Grammar & collocations:** `instance-segmentation mask` — mask; `separate overlapping cups` — tách các cốc chồng nhau.
**Examples:** `Instance segmentation gave each bottle a separate mask for grasp planning.` → Instance segmentation cho mỗi chai một mask riêng để plan grasp.
**Liên kết tiếng Hàn:** `인스턴스 분할`.

## 15. panoptic segmentation /pəˈnɑːptɪk ˌseɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** segmentation that represents both countable object instances and uncountable background regions in one output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** segmentation biểu diễn cả object instance đếm được và background region không đếm được trong một output.
**Grammar & collocations:** `panoptic-segmentation output` — output; `unify thing and stuff labels` — hợp nhất label object và nền.
**Examples:** `Panoptic segmentation represented each worker separately while merging the corridor floor.` → Panoptic segmentation biểu diễn từng worker riêng nhưng gộp nền hành lang.
**Liên kết tiếng Hàn:** `파놉틱 분할`.

## 16. object pose refinement /ˈɑːbdʒekt poʊz rɪˈfaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** improving an estimated object position and orientation using additional image, depth, or geometric evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cải thiện position và orientation object estimate bằng image, depth hoặc geometry evidence thêm.
**Grammar & collocations:** `object-pose-refinement step` — bước; `align a model to observed edges` — căn model với edge quan sát.
**Examples:** `Object pose refinement aligned the gripper with the bolt head after the first estimate drifted.` → Object pose refinement căn gripper với đầu bolt sau khi estimate đầu drift.
**Liên kết tiếng Hàn:** `객체 자세 정제`.

## 17. pose hypothesis /poʊz haɪˈpɑːθəs/
**Part of speech:** noun
**Core meaning (English):** a candidate position and orientation proposed for an object or robot part.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pose position/orientation ứng viên được đề xuất cho object hoặc robot part.
**Grammar & collocations:** `pose-hypothesis score` — score; `rank competing alignments` — xếp hạng alignment cạnh tranh.
**Examples:** `The estimator retained three pose hypotheses until the side view disambiguated the part.` → Estimator giữ ba pose hypothesis tới khi side view phân biệt được part.
**Liên kết tiếng Hàn:** `자세 가설`.

## 18. multi-view fusion /ˌmʌlti vjuː ˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** combining observations from several viewpoints into a more complete or consistent estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp observation từ nhiều viewpoint thành estimate đầy đủ hoặc nhất quán hơn.
**Grammar & collocations:** `multi-view-fusion pipeline` — pipeline; `integrate depth from several cameras` — gộp depth từ nhiều camera.
**Examples:** `Multi-view fusion filled the back surface that no single camera could see.` → Multi-view fusion lấp surface phía sau mà không camera đơn nào thấy được.
**Liên kết tiếng Hàn:** `다중 시점 융합`.

## 19. cross-modal registration /krɔːs ˈmoʊdəl ˌredʒəˈstreɪʃən/
**Part of speech:** noun
**Core meaning (English):** aligning data from different sensing modalities, such as vision, depth, touch, or language.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn chỉnh data từ modality khác nhau như vision, depth, touch hoặc language.
**Grammar & collocations:** `cross-modal-registration error` — error; `align tactile and visual features` — căn feature tactile và visual.
**Examples:** `Cross-modal registration linked the tactile edge to the visual model of the seam.` → Cross-modal registration nối tactile edge với model visual của đường nối.
**Liên kết tiếng Hàn:** `교차 모달 정합`.

## 20. visual grounding /ˈvɪʒuəl ˈɡraʊndɪŋ/
**Part of speech:** noun
**Core meaning (English):** linking a word, instruction, or concept to the relevant object or region in a visual scene.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối word, instruction hoặc concept với object/vùng tương ứng trong scene visual.
**Grammar & collocations:** `visual-grounding module` — module; `ground “the red cup” in the image` — xác định “cốc đỏ” trong image.
**Examples:** `Visual grounding linked “the small tray” to the object beside the scanner.` → Visual grounding nối “khay nhỏ” với object cạnh scanner.
**Liên kết tiếng Hàn:** `시각적 접지`.

## Review in context

**Active perception** and **perception-aware planning** choose a **viewpoint selection** through a **next-best-view** scored by **viewpoint utility** and **information gain**. **Occlusion reasoning** supports an **object-centric representation**, while **affordance detection** and an **affordance map** connect surfaces to action. **Open-set recognition** and **unknown-object detection** prevent forced labels; **semantic segmentation**, **instance segmentation**, and **panoptic segmentation** organize the scene. **Object pose refinement** ranks each **pose hypothesis**, **multi-view fusion** combines cameras, **cross-modal registration** aligns sensors, and **visual grounding** connects language to the right object.

**Bản dịch tiếng Việt:** **Active perception** và **perception-aware planning** chọn **viewpoint selection** qua **next-best-view** được chấm bằng **viewpoint utility** và **information gain**. **Occlusion reasoning** hỗ trợ **object-centric representation**, còn **affordance detection** và **affordance map** nối surface với action. **Open-set recognition** và **unknown-object detection** ngăn việc gán nhãn ép buộc; **semantic segmentation**, **instance segmentation** và **panoptic segmentation** tổ chức scene. **Object pose refinement** xếp hạng từng **pose hypothesis**, **multi-view fusion** gộp camera, **cross-modal registration** căn chỉnh sensor, còn **visual grounding** nối language với đúng object.
