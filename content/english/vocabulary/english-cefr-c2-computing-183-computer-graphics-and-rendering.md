# C2 Vocabulary — Computer graphics and rendering

This lesson explores the highly technical concepts of 3D computer graphics, focusing on how spatial data, complex lighting algorithms, and mathematical models produce photorealistic virtual environments in real time.

Flow: **rasterization → tessellation → path tracing → global illumination → ambient occlusion → subsurface scattering → frustum → occlusion culling → deferred shading → photogrammetry → ray marching → bounding volume hierarchy → vertex shader → normal mapping → volumetric rendering → backface culling → mipmapping → quaternion → bidirectional reflectance distribution function → anisotropic filtering → radiosity → inverse kinematics → screen space reflection → physically based rendering → chromatic aberration**.

## 1. rasterization /ˌræstəraɪˈzeɪʃn/
**Part of speech:** noun
**Core meaning (English):** the computational process of converting vector graphics or 3D models into a 2D image made of pixels for display.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá trình raster hóa, chuyển đổi đồ họa vector/3D thành các điểm ảnh (pixel) trên màn hình.
**Grammar & collocations:** `hardware rasterization` — raster hóa bằng phần cứng.
**Examples:** `Modern GPUs are highly optimized for fast rasterization, allowing them to render millions of triangles per frame.` → Các GPU hiện đại được tối ưu hóa cao cho quá trình raster hóa nhanh, cho phép kết xuất hàng triệu tam giác mỗi khung hình.
**Liên kết tiếng Hàn:** `래스터화`.

## 2. tessellation /ˌtesəˈleɪʃn/
**Part of speech:** noun
**Core meaning (English):** the process of dynamically dividing a geometric surface into a denser set of smaller polygons to improve rendering detail.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân chia đa giác, quá trình chia một bề mặt thành nhiều đa giác nhỏ hơn để tăng mức độ chi tiết đồ họa.
**Grammar & collocations:** `hardware tessellation` — phân chia đa giác bằng phần cứng.
**Examples:** `Tessellation dynamically adds geometric detail to the terrain as the camera gets closer, ensuring sharp ridges without overloading memory.` → Phân chia đa giác tự động thêm chi tiết hình học vào địa hình khi camera tiến lại gần, đảm bảo các gờ sắc nét mà không làm quá tải bộ nhớ.
**Liên kết tiếng Hàn:** `테셀레이션`.

## 3. path tracing /ˈpæθ ˌtreɪsɪŋ/
**Part of speech:** noun
**Core meaning (English):** an advanced rendering algorithm that simulates how light naturally bounces around a scene to create highly realistic and physically accurate illumination.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dò tia đường dẫn, thuật toán đồ họa mô phỏng ánh sáng nảy bật tự nhiên để chiếu sáng chân thực.
**Grammar & collocations:** `real-time path tracing` — dò tia đường dẫn thời gian thực.
**Examples:** `The studio used path tracing for the cinematic cutscenes to achieve photorealistic shadows and soft indirect lighting.` → Studio đã sử dụng thuật toán dò tia đường dẫn cho các đoạn cắt cảnh điện ảnh để đạt được bóng đổ chân thực và ánh sáng gián tiếp mềm mại.
**Liên kết tiếng Hàn:** `패스 트레이싱`.

## 4. global illumination /ˌɡloʊbl ɪˌluːmɪˈneɪʃn/
**Part of speech:** noun
**Core meaning (English):** a group of algorithms in 3D computer graphics that add more realistic lighting by simulating light that bounces off surfaces rather than just light falling directly from a source.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chiếu sáng toàn cục, nhóm thuật toán mô phỏng ánh sáng phản xạ và tương tác trong không gian 3D.
**Grammar & collocations:** `dynamic global illumination` — chiếu sáng toàn cục động.
**Examples:** `Global illumination fundamentally changed how the interior spaces looked by softly lighting areas that were completely cut off from direct sunlight.` → Chiếu sáng toàn cục đã thay đổi căn bản diện mạo của các không gian nội thất bằng cách chiếu sáng nhẹ nhàng các khu vực bị che khuất hoàn toàn khỏi ánh sáng mặt trời trực tiếp.
**Liên kết tiếng Hàn:** `전역 조명`.

## 5. ambient occlusion /ˈæmbiənt əˈkluːʒn/
**Part of speech:** noun
**Core meaning (English):** a shading and rendering technique used to calculate how exposed each point in a scene is to ambient lighting, creating soft shadows in crevices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** che khuất môi trường, kỹ thuật tô bóng tính toán mức độ một điểm bị che khuất khỏi ánh sáng môi trường, tạo bóng đổ trong các kẽ hở.
**Grammar & collocations:** `compute ambient occlusion` — tính toán che khuất môi trường.
**Examples:** `Without ambient occlusion, the corners of the room looked unnaturally flat and lacked depth.` → Nếu không có kỹ thuật che khuất môi trường, các góc của căn phòng trông phẳng một cách thiếu tự nhiên và thiếu chiều sâu.
**Liên kết tiếng Hàn:** `앰비언트 오클루전`.

## 6. subsurface scattering /ˌsʌbˈsɜːrfɪs ˈskætərɪŋ/
**Part of speech:** noun
**Core meaning (English):** a mechanism of light transport in which light penetrates the surface of a translucent object, scatters internally, and exits at a different point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tán xạ dưới bề mặt, hiện tượng ánh sáng xuyên qua vật liệu trong mờ (như da, ngọc thạch), tán xạ rồi thoát ra ở điểm khác.
**Grammar & collocations:** `simulate subsurface scattering` — mô phỏng tán xạ dưới bề mặt.
**Examples:** `Subsurface scattering is essential for rendering realistic human skin, making it look fleshy and semi-translucent rather than like solid plastic.` → Tán xạ dưới bề mặt rất cần thiết để render làn da người chân thực, làm cho nó trông có da thịt và nửa trong mờ thay vì giống như nhựa đặc.
**Liên kết tiếng Hàn:** `표면하 산란`.

## 7. frustum /ˈfrʌstəm/
**Part of speech:** noun
**Core meaning (English):** the specific region of virtual 3D space that appears on the screen, geometrically shaped like a pyramid with its top cut off by the near clipping plane.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chóp cụt tầm nhìn, vùng không gian hình chóp cụt đại diện cho những gì camera có thể thấy và sẽ được hiển thị trên màn hình.
**Grammar & collocations:** `view frustum` — chóp cụt tầm nhìn.
**Examples:** `Any object completely outside the view frustum is immediately discarded by the engine to save processing power.` → Bất kỳ vật thể nào hoàn toàn nằm ngoài chóp cụt tầm nhìn sẽ bị engine loại bỏ ngay lập tức để tiết kiệm năng lượng xử lý.
**Liên kết tiếng Hàn:** `프러스텀`.

## 8. occlusion culling /əˈkluːʒn ˈkʌlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a performance optimization process that prevents the rendering of objects that are completely hidden by other objects closer to the camera.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loại bỏ vật thể bị che khuất, quá trình không render các vật thể bị che khuất hoàn toàn bởi vật thể khác để tối ưu hóa hiệu suất.
**Grammar & collocations:** `perform occlusion culling` — thực hiện loại bỏ vật thể bị che khuất.
**Examples:** `By performing aggressive occlusion culling, the game maintains a high frame rate even in dense city environments because it only draws visible buildings.` → Bằng cách thực hiện việc loại bỏ vật thể bị che khuất một cách triệt để, trò chơi duy trì tốc độ khung hình cao ngay cả trong môi trường thành phố đông đúc vì nó chỉ vẽ các tòa nhà có thể nhìn thấy.
**Liên kết tiếng Hàn:** `오클루전 컬링`.

## 9. deferred shading /dɪˈfɜːrd ˈʃeɪdɪŋ/
**Part of speech:** noun
**Core meaning (English):** a screen-space rendering technique that delays the computationally expensive calculation of lighting until all geometry has been rendered into a buffer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tô bóng trì hoãn, kỹ thuật hoãn tính toán ánh sáng cho đến khi mọi hình học đã được kết xuất vào bộ đệm, giúp xử lý nhiều nguồn sáng hiệu quả.
**Grammar & collocations:** `deferred shading pipeline` — luồng tô bóng trì hoãn.
**Examples:** `The transition to a deferred shading pipeline allowed the level designers to place hundreds of dynamic lights in the scene without crippling performance.` → Việc chuyển đổi sang luồng tô bóng trì hoãn cho phép các nhà thiết kế cấp độ đặt hàng trăm nguồn sáng động trong cảnh mà không làm giảm hiệu suất nghiêm trọng.
**Liên kết tiếng Hàn:** `지연 셰이딩`.

## 10. photogrammetry /ˌfoʊtoʊˈɡræmətri/
**Part of speech:** noun
**Core meaning (English):** the science of making highly accurate 3D models and measurements from multiple overlapping photographs of a real-world object or environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quang trắc học, kỹ thuật tạo mô hình 3D từ việc phân tích nhiều bức ảnh chụp thực tế chồng lên nhau.
**Grammar & collocations:** `photogrammetry pipeline` — quy trình quang trắc học.
**Examples:** `Using photogrammetry, they scanned actual rocks and tree bark to create hyper-realistic environmental assets for the virtual world.` → Sử dụng quang trắc học, họ đã quét các tảng đá và vỏ cây thực tế để tạo ra các tài nguyên môi trường siêu chân thực cho thế giới ảo.
**Liên kết tiếng Hàn:** `사진측량`.

## 11. ray marching /ˈreɪ ˌmɑːrtʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** a rendering technique that samples points along a mathematical ray iteratively in distinct steps to render volumetric data or procedural surfaces.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước tia, kỹ thuật render bằng cách bước từng bước dọc theo tia để vẽ các bề mặt hoặc thể tích phức tạp.
**Grammar & collocations:** `ray marching algorithm` — thuật toán bước tia.
**Examples:** `The swirling, procedural clouds were generated entirely via a ray marching algorithm rather than using traditional polygon meshes.` → Các đám mây cuộn xoáy, được tạo theo thủ tục, hoàn toàn được tạo ra thông qua thuật toán bước tia thay vì sử dụng các lưới đa giác truyền thống.
**Liên kết tiếng Hàn:** `레이 마칭`.

## 12. bounding volume hierarchy /ˈbaʊndɪŋ ˈvɑːljuːm ˈhaɪərɑːrki/
**Part of speech:** noun
**Core meaning (English):** a tree data structure on a set of geometric objects that encapsulates them in progressively larger bounding volumes to radically speed up ray tracing and collision detection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân cấp thể tích bao (BVH), cấu trúc cây chứa các vật thể để tối ưu hóa việc dò tia và phát hiện va chạm.
**Grammar & collocations:** `traverse the bounding volume hierarchy` — duyệt qua phân cấp thể tích bao.
**Examples:** `Whenever a ray is cast, the engine must traverse the bounding volume hierarchy to quickly determine which triangles it might intersect.` → Bất cứ khi nào một tia được phát ra, engine phải duyệt qua cấu trúc phân cấp thể tích bao để nhanh chóng xác định các tam giác nào nó có thể giao cắt.
**Liên kết tiếng Hàn:** `바운딩 볼륨 계층`.

## 13. vertex shader /ˈvɜːrteks ˈʃeɪdər/
**Part of speech:** noun
**Core meaning (English):** a programmable graphics processing function executed on the GPU that mathematically manipulates the 3D position, color, and texture coordinates of individual vertices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** shader đỉnh, chương trình xử lý đồ họa tính toán lại vị trí và thuộc tính của các đỉnh trong không gian 3D.
**Grammar & collocations:** `custom vertex shader` — shader đỉnh tùy chỉnh.
**Examples:** `They wrote a custom vertex shader to simulate wind blowing through the grass by displacing the vertices dynamically over time.` → Họ đã viết một shader đỉnh tùy chỉnh để mô phỏng gió thổi qua cỏ bằng cách dịch chuyển các đỉnh một cách tự động theo thời gian.
**Liên kết tiếng Hàn:** `버텍스 셰이더`.

## 14. normal mapping /ˈnɔːrml ˈmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** a texture application technique used to fake the lighting of bumps and dents on a surface without adding more complex polygon geometry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ánh xạ pháp tuyến, kỹ thuật dùng bản đồ texture để giả lập độ lồi lõm của bề mặt khi có ánh sáng chiếu vào mà không cần tăng số lượng đa giác.
**Grammar & collocations:** `apply normal mapping` — áp dụng ánh xạ pháp tuyến.
**Examples:** `By applying normal mapping, a completely flat wall can appear to have rough bricks catching the light from various angles.` → Bằng cách áp dụng ánh xạ pháp tuyến, một bức tường hoàn toàn phẳng có thể trông giống như có những viên gạch thô ráp bắt ánh sáng từ nhiều góc độ khác nhau.
**Liên kết tiếng Hàn:** `노멀 매핑`.

## 15. volumetric rendering /ˌvɑːljuˈmetrɪk ˈrendərɪŋ/
**Part of speech:** noun
**Core meaning (English):** a set of techniques used to display a 2D projection of a 3D discretely sampled data set, often used to visualize clouds, fog, or medical CT scans.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết xuất thể tích, kỹ thuật hiển thị các cấu trúc không có bề mặt rõ ràng như khói, sương mù, hoặc dữ liệu y tế không gian 3D.
**Grammar & collocations:** `real-time volumetric rendering` — kết xuất thể tích thời gian thực.
**Examples:** `The atmospheric density and scattering were achieved through computationally intensive volumetric rendering techniques.` → Mật độ khí quyển và sự tán xạ đã đạt được thông qua các kỹ thuật kết xuất thể tích đòi hỏi nhiều tính toán.
**Liên kết tiếng Hàn:** `볼륨 렌더링`.

## 16. backface culling /ˈbækfeɪs ˈkʌlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a rendering optimization process that determines whether a polygon is facing away from the camera and automatically discards it to save processing time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loại bỏ mặt khuất, quá trình loại bỏ các mặt của đa giác đang quay lưng lại với camera để tiết kiệm tài nguyên.
**Grammar & collocations:** `enable backface culling` — bật loại bỏ mặt khuất.
**Examples:** `You should enable backface culling on closed models like spheres so the engine doesn't waste time drawing the inside of the object.` → Bạn nên bật tính năng loại bỏ mặt khuất trên các mô hình khép kín như hình cầu để engine không lãng phí thời gian vẽ mặt bên trong của vật thể.
**Liên kết tiếng Hàn:** `백페이스 컬링`.

## 17. mipmapping /ˈmɪpmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** a technique of using pre-calculated, progressively lower-resolution sequences of textures to increase rendering speed and reduce aliasing artifacts when objects are viewed from a distance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kỹ thuật mipmapping, việc sử dụng các chuỗi ảnh kết cấu thu nhỏ dần để giảm hiện tượng răng cưa và tăng tốc độ render khi bề mặt ở xa camera.
**Grammar & collocations:** `hardware mipmapping` — mipmapping bằng phần cứng.
**Examples:** `Without mipmapping, the fine textures on the distant road appeared to shimmer and distort as the camera moved.` → Nếu không có mipmapping, các kết cấu chi tiết trên con đường đằng xa dường như lung linh và biến dạng khi camera di chuyển.
**Liên kết tiếng Hàn:** `밉매핑`.

## 18. quaternion /kwəˈtɜːrniən/
**Part of speech:** noun
**Core meaning (English):** a mathematical number system that extends complex numbers, extensively used in 3D graphics to calculate smooth spatial rotations and avoid gimbal lock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quaternion, hệ số phức toán học dùng trong đồ họa 3D để tính toán xoay mượt mà, tránh tình trạng khóa trục quay.
**Grammar & collocations:** `quaternion rotation` — phép xoay bằng quaternion.
**Examples:** `The physics engine uses a quaternion to represent the orientation of the spacecraft, entirely avoiding the mathematical singularities common with Euler angles.` → Engine vật lý sử dụng quaternion để biểu diễn định hướng của tàu vũ trụ, hoàn toàn tránh được các điểm kỳ dị toán học thường gặp với góc Euler.
**Liên kết tiếng Hàn:** `사원수`.

## 19. bidirectional reflectance distribution function /ˌbaɪdɪˈrekʃənl rɪˈflektəns ˌdɪstrɪˈbjuːʃn ˈfʌŋkʃn/
**Part of speech:** noun
**Core meaning (English):** a complex mathematical function that formally defines how light is reflected at an opaque surface, fundamental to physically accurate rendering.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm phân bố phản xạ hai chiều (BRDF), hàm toán học định nghĩa cách ánh sáng phản xạ trên bề mặt mờ, quyết định độ nhám và bóng.
**Grammar & collocations:** `evaluate the bidirectional reflectance distribution function` — đánh giá hàm phân bố phản xạ hai chiều.
**Examples:** `To create a realistic brushed metal material, the shader must evaluate a specialized bidirectional reflectance distribution function at every pixel.` → Để tạo ra vật liệu kim loại xước chân thực, shader phải đánh giá một hàm phân bố phản xạ hai chiều chuyên biệt tại mỗi điểm ảnh.
**Liên kết tiếng Hàn:** `양방향 반사 분포 함수`.

## 20. anisotropic filtering /ˌænˌaɪsəˈtrɑːpɪk ˈfɪltərɪŋ/
**Part of speech:** noun
**Core meaning (English):** a sophisticated method of enhancing the image quality of textures on surfaces that are at highly oblique viewing angles relative to the camera.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lọc dị hướng, phương pháp cải thiện chất lượng kết cấu bị mờ khi nhìn dưới góc độ rất xiên so với camera.
**Grammar & collocations:** `16x anisotropic filtering` — lọc dị hướng 16x.
**Examples:** `Turning on 16x anisotropic filtering made the text painted on the runway legible even from a low camera angle.` → Bật lọc dị hướng 16x làm cho văn bản được sơn trên đường băng có thể đọc được ngay cả từ góc camera thấp.
**Liên kết tiếng Hàn:** `비등방성 필터링`.

## 21. radiosity /ˌreɪdiˈɑːsəti/
**Part of speech:** noun
**Core meaning (English):** a global illumination algorithm used in 3D computer graphics to simulate the diffuse reflection of light transferring between surfaces, ensuring soft, ambient shadows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kỹ thuật radiosity, thuật toán chiếu sáng toàn cục tính toán sự phản xạ khuyếch tán của ánh sáng lan truyền giữa các bề mặt, giúp ánh sáng hắt màu tự nhiên.
**Grammar & collocations:** `radiosity solver` — bộ giải radiosity.
**Examples:** `The architectural visualization used radiosity to show how the red carpet would bounce warm light onto the adjacent white walls.` → Mô phỏng kiến trúc đã sử dụng radiosity để hiển thị cách tấm thảm đỏ hắt ánh sáng ấm áp lên các bức tường trắng liền kề.
**Liên kết tiếng Hàn:** `라디오시티`.

## 22. inverse kinematics /ˌɪnvɜːrs ˌkɪnəˈmætɪks/
**Part of speech:** noun
**Core meaning (English):** the mathematical process of calculating the variable joint parameters needed to place the end of a kinematic chain (like a robotic arm or character's leg) in a given position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** động học ngược, quá trình toán học tính toán các góc khớp xương để đưa điểm cuối (như bàn chân, tay) đến vị trí mong muốn.
**Grammar & collocations:** `inverse kinematics solver` — bộ tính toán động học ngược.
**Examples:** `Thanks to the game's inverse kinematics system, the character's feet naturally aligned with the uneven steps of the staircase.` → Nhờ hệ thống động học ngược của trò chơi, bàn chân của nhân vật tự nhiên căn chỉnh vừa vặn với các bậc thang gập ghềnh.
**Liên kết tiếng Hàn:** `역기구학`.

## 23. screen space reflection /skriːn speɪs rɪˈflekʃn/
**Part of speech:** noun
**Core meaning (English):** a fast rendering technique that reuses data already rendered on the screen to calculate reflections on wet or glossy surfaces in real-time, often exhibiting artifacts at screen edges.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phản xạ không gian màn hình, kỹ thuật tái sử dụng dữ liệu đã vẽ trên màn hình để tính toán hình bóng phản chiếu thời gian thực (đôi khi bị lỗi viền).
**Grammar & collocations:** `screen space reflection artifact` — lỗi nghệ thuật của phản xạ không gian màn hình.
**Examples:** `While efficient, screen space reflection struggles when an object needs to reflect something that is currently off-camera.` → Mặc dù hiệu quả, phản xạ không gian màn hình gặp khó khăn khi một vật thể cần phản chiếu thứ gì đó hiện không nằm trong góc quay camera.
**Liên kết tiếng Hàn:** `화면 공간 반사`.

## 24. physically based rendering /ˈfɪzɪkli beɪst ˈrendərɪŋ/
**Part of speech:** noun
**Core meaning (English):** a modern computer graphics approach that seeks to render graphics in a way that models the flow of light in the real world accurately, ensuring materials respond to light predictably under any condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết xuất dựa trên vật lý (PBR), phương pháp render mô phỏng vật liệu chân thực theo nguyên lý vật lý của ánh sáng.
**Grammar & collocations:** `physically based rendering workflow` — quy trình làm việc kết xuất dựa trên vật lý.
**Examples:** `Adopting a physically based rendering workflow standardized the creation of materials, ensuring that a steel beam looks perfectly metallic in both bright sunshine and dark tunnels.` → Việc áp dụng quy trình làm việc kết xuất dựa trên vật lý đã tiêu chuẩn hóa việc tạo ra các vật liệu, đảm bảo rằng một thanh dầm thép trông hoàn toàn giống kim loại trong cả ánh nắng chói chang và đường hầm tối tăm.
**Liên kết tiếng Hàn:** `물리 기반 렌더링`.

## 25. chromatic aberration /kroʊˈmætɪk ˌæbəˈreɪʃn/
**Part of speech:** noun
**Core meaning (English):** a post-processing visual effect in rendering that simulates a real camera lens failing to focus all colors to the same convergence point, creating color fringes along high-contrast boundaries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quang sai màu, hiệu ứng hình ảnh mô phỏng hiện tượng ống kính camera không hội tụ được các màu sắc vào cùng một điểm, tạo ra viền màu rực.
**Grammar & collocations:** `simulated chromatic aberration` — quang sai màu mô phỏng.
**Examples:** `The developers added subtle chromatic aberration to the game's final render pass to make the graphics feel like they were shot on a physical anamorphic film lens.` → Các nhà phát triển đã thêm quang sai màu tinh tế vào bước kết xuất cuối cùng của trò chơi để làm cho đồ họa có cảm giác như được quay bằng một ống kính phim anamorphic vật lý.
**Liên kết tiếng Hàn:** `색수차`.

## Review in context

Modern 3D graphics engines must synthesize immense mathematical complexity into seamless virtual worlds at sixty frames per second. Historically, engines relied heavily on **rasterization** to rapidly draw polygons onto the screen. To optimize this process, objects outside the immediate **frustum** are discarded, while **backface culling** drops geometry facing away from the camera, and **occlusion culling** ignores items hidden behind larger structures. To enhance fine details dynamically without crushing memory, engines use **tessellation** to subdivide meshes closer to the camera. Inside the GPU pipeline, developers write a specialized **vertex shader** to mathematically transform geometry—such as using a **quaternion** to safely calculate complex rotations without gimbal lock—before applying **normal mapping** to fake the lighting of intricate bumps and dents.

Achieving realism goes far beyond mere geometry. The industry standard has shifted toward **physically based rendering**, ensuring that all materials adhere strictly to the **bidirectional reflectance distribution function** for accurate light interaction. When a scene contains multiple light sources, a **deferred shading** pipeline calculates lighting only after the geometry is laid out in screen space, vastly improving efficiency. Rather than relying solely on direct lighting, modern engines incorporate **global illumination** to calculate light bounces, with specific techniques like **radiosity** handling diffuse color bleeding and **ambient occlusion** providing soft shadowing in tight corners. For the most demanding photorealistic projects, full **path tracing** accurately simulates billions of light rays, eliminating many traditional rendering shortcuts. 

Translating the real world into the virtual also demands advanced texturing and atmospheric techniques. Developers increasingly rely on **photogrammetry** to scan real-world objects and generate highly detailed textures. When viewing these vast landscapes, **mipmapping** seamlessly swaps in lower-resolution textures to prevent shimmering at a distance, while **anisotropic filtering** ensures textures maintain clarity even at sharp viewing angles. Creating environmental depth often involves **volumetric rendering** to simulate fog or clouds, occasionally relying on a complex **ray marching** algorithm for procedural volumes. Closer to the camera, **subsurface scattering** breathes life into human skin by mimicking how light travels beneath the surface. Finally, post-processing touches like **screen space reflection** provide fast, dynamic reflections on wet surfaces, while character limbs are precisely positioned by **inverse kinematics**, and cinematic flair is finalized with lens effects like **chromatic aberration**.

### Bản dịch tham khảo

Các engine đồ họa 3D hiện đại phải tổng hợp sự phức tạp toán học to lớn thành các thế giới ảo liền mạch ở tốc độ sáu mươi khung hình mỗi giây. Về mặt lịch sử, các engine phụ thuộc rất nhiều vào **quá trình raster hóa (rasterization)** để nhanh chóng vẽ các đa giác lên màn hình. Để tối ưu hóa quy trình này, các vật thể nằm ngoài **chóp cụt tầm nhìn (frustum)** ngay trước mắt bị loại bỏ, trong khi tính năng **loại bỏ mặt khuất (backface culling)** bỏ đi phần hình học quay lưng lại với camera, và **loại bỏ vật thể bị che khuất (occlusion culling)** bỏ qua các vật phẩm nằm ẩn sau các cấu trúc lớn hơn. Để tăng cường các chi tiết nhỏ một cách linh hoạt mà không làm cạn kiệt bộ nhớ, các engine sử dụng tính năng **phân chia đa giác (tessellation)** để chia nhỏ các lưới đa giác ở gần camera hơn. Bên trong luồng xử lý GPU, các nhà phát triển viết một **shader đỉnh (vertex shader)** chuyên biệt để biến đổi toán học hình học—chẳng hạn như sử dụng một **quaternion (quaternion)** để tính toán an toàn các góc quay phức tạp mà không bị khóa trục—trước khi áp dụng **ánh xạ pháp tuyến (normal mapping)** để giả lập độ sáng của những vết lồi lõm phức tạp.

Đạt được sự chân thực vượt xa hơn cả hình học đơn thuần. Tiêu chuẩn của ngành đã chuyển dịch sang **kết xuất dựa trên vật lý (physically based rendering)**, đảm bảo rằng tất cả các vật liệu tuân thủ nghiêm ngặt **hàm phân bố phản xạ hai chiều (bidirectional reflectance distribution function)** để tương tác ánh sáng chính xác. Khi một cảnh chứa nhiều nguồn sáng, luồng **tô bóng trì hoãn (deferred shading)** chỉ tính toán ánh sáng sau khi hình học đã được bố trí trong không gian màn hình, cải thiện hiệu quả đáng kể. Thay vì chỉ dựa vào ánh sáng trực tiếp, các engine hiện đại kết hợp **chiếu sáng toàn cục (global illumination)** để tính toán ánh sáng nảy bật, với các kỹ thuật cụ thể như **kỹ thuật radiosity (radiosity)** xử lý hiện tượng hắt màu khuếch tán và **che khuất môi trường (ambient occlusion)** cung cấp đổ bóng mềm trong các góc hẹp. Đối với những dự án photorealism đòi hỏi khắt khe nhất, **dò tia đường dẫn (path tracing)** đầy đủ mô phỏng chính xác hàng tỷ tia sáng, loại bỏ nhiều lối tắt kết xuất truyền thống.

Việc chuyển đổi thế giới thực sang thế giới ảo cũng đòi hỏi các kỹ thuật kết cấu và khí quyển tiên tiến. Các nhà phát triển ngày càng tin dùng **quang trắc học (photogrammetry)** để quét các vật thể trong thế giới thực và tạo ra các kết cấu cực kỳ chi tiết. Khi quan sát những phong cảnh rộng lớn này, **kỹ thuật mipmapping (mipmapping)** hoán đổi liền mạch các kết cấu có độ phân giải thấp hơn để tránh sự lấp lánh ở khoảng cách xa, trong khi **lọc dị hướng (anisotropic filtering)** đảm bảo kết cấu duy trì độ rõ nét ngay cả ở các góc nhìn hẹp. Việc tạo chiều sâu môi trường thường liên quan đến **kết xuất thể tích (volumetric rendering)** để mô phỏng sương mù hoặc mây, đôi khi dựa vào một thuật toán **bước tia (ray marching)** phức tạp cho các khối thể tích sinh theo thủ tục. Gần với camera hơn, **tán xạ dưới bề mặt (subsurface scattering)** thổi hồn vào làn da người bằng cách bắt chước cách ánh sáng truyền dưới bề mặt. Cuối cùng, các khâu hậu kỳ như **phản xạ không gian màn hình (screen space reflection)** mang đến phản chiếu nhanh, sống động trên bề mặt ướt, trong khi các chi tiết tay chân nhân vật được định vị chính xác bởi **động học ngược (inverse kinematics)**, và phong cách điện ảnh được hoàn thiện với các hiệu ứng ống kính như **quang sai màu (chromatic aberration)**.
