# C2+ Vocabulary 02 — Diffusion tensor magnetic resonance imaging (DTI), fractional anisotropy calculation, and deterministic tractography

This lesson explores the biophysical foundations, mathematical tensor formulation, scalar metric derivation, and tractographic streamline reconstruction methods in diffusion tensor magnetic resonance imaging (DTI). The curriculum advances through anisotropic Brownian water diffusion, Stejskal-Tanner pulsed gradient sequences, diffusion tensor matrix diagonalization, eigenvalue/eigenvector spatial orientation, fractional anisotropy scalar quantification, mean diffusivity, radial versus axial diffusivity, fiber crossing and kissing volume artifacts, and deterministic streamline fiber tractography.

---

## 1. anisotropic Brownian water diffusion /ˌænəˌsaɪtroʊˈpɪk ˈbraʊniən ˈwɔtər dɪˈfjuːʒən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ sinh lý vật lý cơ sở (*occur within*, *characterize*, *underpin*).

**Core meaning — English:** The directionally unequal, non-random thermal motion of water molecules whose self-diffusion is hindered and guided along the long longitudinal axis of aligned axonal bundles rather than across hydrophobic myelin membranes.

**Core meaning & mental image — Tiếng Việt:** Sự khuếch tán Brown dị hướng của nước. Hãy tưởng tượng những phân tử nước trong một ly nước lọc di chuyển hỗn loạn bình đẳng theo mọi hướng (đẳng hướng); nhưng khi lọt vào bó sợi thần kinh trong não, chúng bị các vách màng myelin bọc sáp chặn đứng ở hai bên, chỉ có thể bơi thoải mái dọc theo chiều dài của sợi trục như thuyền trôi trong dòng mương hẹp.

**Grammar & collocations:** `measure anisotropic Brownian water diffusion` — đo đạc sự khuếch tán Brown dị hướng của nước; `directionality of anisotropic Brownian water diffusion` — tính định hướng của sự khuếch tán Brown dị hướng; `model anisotropic Brownian water diffusion` — lập mô hình sự khuếch tán Brown dị hướng.

**Register & nuance:** Vật lý cộng hưởng từ thần kinh (biophysical basis of neuroimaging). Đây là tiền đề sinh lý học tối quan trọng của DTI: cộng hưởng từ không trực tiếp nhìn thấy sợi thần kinh siêu vi, mà đo đạc hướng chuyển động tự do của các phân tử nước để vẽ nên bản đồ đường đi của các sợi trục não bộ.

**Examples:** `In densely packed white matter tracts like the corpus callosum, anisotropic Brownian water diffusion occurs primarily parallel to axon fibers.` → Trong các dải chất trắng dày đặc như thể chai, sự khuếch tán Brown dị hướng của nước diễn ra chủ yếu song song với các sợi trục thần kinh.

**Liên kết tiếng Hàn:** `비등방성 브라운 수분 확산` (非等方性 Brownian 水分擴散) — sự khuếch tán Brown dị hướng của phân tử nước.

---

## 2. Stejskal-Tanner pulsed gradient sequence /ˈsteɪskɑl ˈtænər pʌlst ˈɡreɪdiənt ˈsiːkwəns/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm công cụ đo lường trong chuỗi xung MRI (*employ*, *apply*, *acquire via*).

**Core meaning — English:** A specialized magnetic resonance pulse sequence featuring a pair of identical, high-amplitude magnetic field gradient pulses placed symmetrically around a 180-degree refocusing RF pulse to sensitize MR signal to water translational motion.

**Core meaning & mental image — Tiếng Việt:** Chuỗi xung gradient xung Stejskal-Tanner. Hãy hình dung một chiếc đồng hồ bấm giờ gồm hai nhịp: xung gradient thứ nhất "đóng dấu" đánh dấu vị trí xuất phát của từng phân tử nước; xung gradient thứ hai đo đạc xem phân tử đó đã di chuyển được bao xa; nếu phân tử bơi đi xa dọc theo hướng từ trường, tín hiệu cộng hưởng từ sẽ bị suy giảm rõ rệt, để lộ vận tốc khuếch tán.

**Grammar & collocations:** `implement a Stejskal-Tanner pulsed gradient sequence` — triển khai chuỗi xung gradient xung Stejskal-Tanner; `timing parameters of the Stejskal-Tanner pulsed gradient sequence` — các tham số thời gian của chuỗi xung Stejskal-Tanner; `standard Stejskal-Tanner pulsed gradient sequence` — chuỗi xung Stejskal-Tanner tiêu chuẩn.

**Register & nuance:** Kỹ thuật chụp ảnh khuếch tán (DWI/DTI physics do Stejskal & Tanner phát minh năm 1965). Hai xung gradient có độ lớn $G$, độ rộng xung $\delta$, và khoảng cách thời gian giữa hai xung $\Delta$; đây là kiến trúc nền móng cho mọi máy quét MRI khuếch tán hiện đại.

**Examples:** `By adjusting gradient pulse duration and separation within the Stejskal-Tanner pulsed gradient sequence, physicists fine-tuned diffusion sensitivity.` → Bằng cách điều chỉnh thời lượng và khoảng cách xung từ trường trong chuỗi xung gradient xung Stejskal-Tanner, các nhà vật lý đã tinh chỉnh độ nhạy khuếch tán.

**Liên kết tiếng Hàn:** `스테이스칼-태너 펄스 경사 시퀀스` (Stejskal-Tanner pulse 傾斜 sequence) — chuỗi xung gradient khuếch tán Stejskal-Tanner.

---

## 3. b-value diffusion weighting /biː ˈvæljuː dɪˈfjuːʒən ˈweɪtɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` (thường gọi tắt là *b-value*). Làm tham số cài đặt độ nhạy trên máy quét MRI (*select*, *scale*, *set to*).

**Core meaning — English:** A quantitative factor (measured in $s/mm^2$) combining gradient amplitude, duration, and gyromagnetic ratio: $b = \gamma^2 G^2 \delta^2 (\Delta - \delta/3)$, defining the degree of diffusion weighting applied to the image.

**Core meaning & mental image — Tiếng Việt:** Hệ số trọng số khuếch tán b (giá trị b). Hãy hình dung chiếc núm vặn điều chỉnh độ nhạy của kính hiển vi: vặn giá trị $b=0$, máy chụp bức ảnh giải phẫu T2 thông thường; vặn núm lên $b=1000\ s/mm^2$, máy quét triệt tiêu mọi tín hiệu đứng yên và chỉ làm nổi bật sự khuếch tán vi mô của các phân tử nước trong chất trắng.

**Grammar & collocations:** `select the b-value diffusion weighting` — lựa chọn hệ số trọng số khuếch tán b; `high b-value diffusion weighting` — hệ số trọng số khuếch tán b cao; `attenuate signal under b-value diffusion weighting` — làm suy giảm tín hiệu dưới hệ số trọng số khuếch tán b.

**Register & nuance:** Giao thức chụp lâm sàng thần kinh. Trong chụp não thường quy, giá trị $b=1000\ s/mm^2$ là tiêu chuẩn vàng; các nghiên cứu nâng cao (như HARDI hoặc DKI) có thể đẩy giá trị $b$ lên $2000$ đến $3000\ s/mm^2$ để nắm bắt hiện tượng khuếch tán phi Gauss.

**Examples:** `Clinical neuroimaging protocols routinely employ a b-value diffusion weighting of one thousand seconds per square millimeter to balance signal-to-noise ratio against contrast.` → Các quy trình chẩn đoán hình ảnh thần kinh lâm sàng thường xuyên sử dụng hệ số trọng số khuếch tán b bằng một nghìn giây trên milimet vuông để cân bằng giữa tỷ số tín hiệu trên nhiễu và độ tương phản.

**Liên kết tiếng Hàn:** `b-값 확산 강조 계수` (b-値擴散强調係數) — hệ số trọng số khuếch tán giá trị b.

---

## 4. water self-diffusion tensor matrix /ˈwɔtər sɛlf dɪˈfjuːʒən ˈtɛnsər ˈmeɪtrɪks/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường ký hiệu: $\mathbf{D}$). Làm chủ ngữ toán học mô tả toàn diện chuyển động 3D (*characterize*, *populate*, *contain*).

**Core meaning — English:** A symmetric $3 	imes 3$ positive-definite matrix composed of six independent diffusion coefficients ($D_{xx}, D_{yy}, D_{zz}, D_{xy}, D_{xz}, D_{yz}$) fully describing three-dimensional molecular mobility within a single voxel.

**Core meaning & mental image — Tiếng Việt:** Ma trận tensor tự khuếch tán của nước. Hãy hình dung một chiếc hộp toán học 3 chiều gồm 9 con số (với 6 con số độc lập): thay vì chỉ đo một vận tốc khuếch tán đơn giản, chiếc hộp ma trận này nắm giữ toàn bộ tốc độ và góc nghiêng của các phân tử nước theo mọi trục $X, Y, Z$, giúp máy tính tái dựng chính xác một hình bầu dục khuếch tán trong không gian.

**Grammar & collocations:** `estimate the water self-diffusion tensor matrix` — ước lượng ma trận tensor tự khuếch tán của nước; `elements of the water self-diffusion tensor matrix` — các phần tử của ma trận tensor tự khuếch tán của nước; `fit the water self-diffusion tensor matrix` — khớp ma trận tensor tự khuếch tán của nước từ ít nhất 6 hướng gradient.

**Register & nuance:** Toán học hình ảnh thần kinh tensor (Basser et al., 1994). Để giải được 6 ẩn số trong ma trận tensor đối xứng này, máy MRI bắt buộc phải phát xung gradient đo đạc theo tối thiểu 6 hướng không gian độc lập cộng thêm một ảnh đối chứng $b=0$.

**Examples:** `Solving the system of linear equations across six non-collinear gradient directions yields the symmetric water self-diffusion tensor matrix for each brain voxel.` → Việc giải hệ phương trình tuyến tính qua sáu hướng gradient không cộng tuyến mang lại ma trận tensor tự khuếch tán của nước đối xứng cho từng voxel não.

**Liên kết tiếng Hàn:** `수분 자기 확산 텐서 행렬` (水分自己擴散 tensor 行列) — ma trận tensor tự khuếch tán của phân tử nước.

---

## 5. tensor matrix diagonalization /ˈtɛnsər ˈmeɪtrɪks daɪˌæɡənələˈzeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm thao tác đại số tuyến tính trọng tâm (*perform*, *undergo*, *yield*).

**Core meaning — English:** The linear algebraic transformation rotating the coordinate system of the diffusion tensor to align with its natural principal axes, reducing off-diagonal elements to zero and yielding eigenvalues.

**Core meaning & mental image — Tiếng Việt:** Sự chéo hóa ma trận tensor. Hãy tưởng tượng bạn có một quả trứng đang nằm nghiêng ngả lộn xộn trong phòng: phép chéo hóa ma trận giống như việc bạn xoay căn phòng sao cho ba trục tọa độ trùng khít hoàn hảo với chiều dài, chiều rộng và chiều cao tự nhiên của quả trứng, biến các phương trình phức tạp thành 3 con số đơn giản nằm trên đường chéo.

**Grammar & collocations:** `perform tensor matrix diagonalization` — thực hiện chéo hóa ma trận tensor; `result of tensor matrix diagonalization` — kết quả của sự chéo hóa ma trận tensor; `tensor matrix diagonalization algorithm` — thuật toán chéo hóa ma trận tensor.

**Register & nuance:** Đại số tuyến tính ứng dụng y sinh. Quá trình chéo hóa phân rã ma trận tensor $\mathbf{D}$ thành $\mathbf{V} \mathbf{\Lambda} \mathbf{V}^T$, trích xuất ra ba giá trị riêng (eigenvalues $\lambda_1 \ge \lambda_2 \ge \lambda_3$) và ba vectơ riêng tương ứng ($\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$).

**Examples:** `Following mathematical tensor matrix diagonalization, the coordinate system rotates to match the intrinsic anatomical orientation of the axon bundle.` → Sau khi chéo hóa ma trận tensor toán học, hệ tọa độ sẽ xoay để trùng khớp với định hướng giải phẫu nội tại của bó sợi trục.

**Liên kết tiếng Hàn:** `텐서 행렬 대각화` (tensor 行列對角化) — sự chéo hóa ma trận tensor khuếch tán.

---

## 6. principal eigenvalue magnitude /ˈprɪnsəpəl ˈaɪɡənˌvæljuː ˈmæɡnəˌtuːd/

**Loại từ & vị trí trong câu:** `noun phrase` (ký hiệu: $\lambda_1$ hoặc $L_1$). Làm chủ ngữ đo lường độ khuếch tán cực đại (*reflect*, *peak along*, *correlate with*).

**Core meaning — English:** The quantitative numerical value of the largest eigenvalue ($\lambda_1$) derived from tensor diagonalization, representing the maximum rate of water diffusion occurring along the dominant fiber tract direction.

**Core meaning & mental image — Tiếng Việt:** Độ lớn giá trị riêng chính ($\lambda_1$). Hãy hình dung trục dài nhất của một hạt dưa: con số đo chiều dài tối đa của hạt dưa này chính là $\lambda_1$; trong sợi thần kinh khỏe mạnh, con số này rất lớn vì các phân tử nước được tự do phóng vụt đi dọc theo trục sợi não mà không gặp chướng ngại vật.

**Grammar & collocations:** `measure the principal eigenvalue magnitude` — đo đạc độ lớn giá trị riêng chính; `decrease in principal eigenvalue magnitude` — sự suy giảm độ lớn giá trị riêng chính; `calculate the principal eigenvalue magnitude` — tính toán độ lớn giá trị riêng chính.

**Register & nuance:** Đo lường tổn thương sợi thần kinh. Giá trị riêng chính biểu diễn độ khuếch tán dọc sợi (*axial diffusivity*); sự suy giảm đột ngột của $\lambda_1$ thường là dấu hiệu chỉ điểm sớm của hiện tượng thoái hóa sợi trục (*axonal degeneration*) trong chấn thương sọ não hoặc thiếu máu cục bộ cấp tính.

**Examples:** `The principal eigenvalue magnitude reached its highest values within compact longitudinal pathways such as the corticospinal tract.` → Độ lớn giá trị riêng chính đạt các giá trị cao nhất bên trong các con đường dọc nén chặt như bó tháp vỏ gai.

**Liên kết tiếng Hàn:** `주 고유값 크기` (主固有値크기) — độ lớn của giá trị riêng chính ($\lambda_1$).

---

## 7. principal eigenvector orientation /ˈprɪnsəpəl ˈaɪɡənˌvɛktər ˌɔriənˈteɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` (ký hiệu: $\mathbf{e}_1$ hoặc $\mathbf{v}_1$). Làm vector định hướng đường truyền sợi thần kinh (*align with*, *point along*, *guide*).

**Core meaning — English:** The 3D spatial vector ($\mathbf{e}_1$) corresponding to the largest eigenvalue, indicating the primary anatomical direction of fiber tracts within that imaging voxel, traditionally color-coded (red = left-right, green = anterior-posterior, blue = superior-inferior).

**Core meaning & mental image — Tiếng Việt:** Định hướng vectơ riêng chính (la bàn chỉ hướng sợi não). Hãy tưởng tượng một chiếc kim la bàn 3 chiều siêu nhỏ cắm vào từng điểm ảnh não bộ: chiếc kim này tự động xoay và chỉ thẳng tắp dọc theo con đường mà các dây thần kinh đang chạy; màu sắc hiển thị trên màn hình máy tính biến chiếc kim này thành một bức tranh rực rỡ: đỏ là chạy ngang trái-phải, xanh lá là chạy trước-sau, xanh dương là chạy dọc từ trên xuống dưới.

**Grammar & collocations:** `track the principal eigenvector orientation` — lần theo định hướng vectơ riêng chính; `color-coded principal eigenvector orientation` — định hướng vectơ riêng chính mã hóa màu; `coherence of principal eigenvector orientation` — sự gắn kết định hướng của vectơ riêng chính.

**Register & nuance:** Trọng tâm đồ họa DTI. Vectơ riêng chính là chiếc chìa khóa định hướng cho các thuật toán dựng hình đường dẫn truyền thần kinh (*tractography*); sai lệch trong việc xác định $\mathbf{e}_1$ sẽ làm thuật toán đi lạc đường sang các cấu trúc giải phẫu kế bên.

**Examples:** `Color-coded fractional anisotropy maps map the principal eigenvector orientation, painting transverse pontine pathways in vivid red and descending motor fibers in blue.` → Các bản đồ dị hướng phân số mã hóa màu lập bản đồ định hướng vectơ riêng chính, vẽ các đường dẫn cầu não ngang bằng màu đỏ rực rỡ và các sợi vận động đi xuống bằng màu xanh dương.

**Liên kết tiếng Hàn:** `주 고유벡터 방향` (主固有vector 方向) — định hướng không gian của vectơ riêng chính ($\mathbf{e}_1$).

---

## 8. fractional anisotropy scalar metric /ˈfrækʃənəl ˌænəˈsɑtrəpi ˈskeɪlər ˈmɛtrɪk/

**Loại từ & vị trí trong câu:** `noun phrase` (ký hiệu: FA). Làm chỉ số định lượng tính toàn vẹn chất trắng (*calculate*, *quantify*, *drop in*).

**Core meaning — English:** A normalized dimensionless scalar value ranging from zero (pure isotropic diffusion, spherical) to one (linear anisotropic diffusion, cylindrical), quantifying the directional preference of water motion: $	ext{FA} = \sqrt{rac{3}{2}} rac{\sqrt{(\lambda_1-ar{\lambda})^2 + (\lambda_2-ar{\lambda})^2 + (\lambda_3-ar{\lambda})^2}}{\sqrt{\lambda_1^2 + \lambda_2^2 + \lambda_3^2}}$.

**Core meaning & mental image — Tiếng Việt:** Chỉ số vô hướng dị hướng phân số (chỉ số FA). Hãy hình dung một chiếc đồng hồ đo độ trật tự: ở dịch não tủy nước chảy tự do như quả bóng tròn thì kim chỉ về số 0; ở các bó sợi thần kinh khỏe mạnh dày đặc như bó dây cáp thép thì giọt nước bị bóp dẹp thành hình điếu xì gà thuôn dài và kim vọt lên sát số 1; bệnh tật phá hủy myelin làm rò rỉ nước sẽ kéo kim FA tụt xuống.

**Grammar & collocations:** `compute the fractional anisotropy scalar metric` — tính toán chỉ số vô hướng dị hướng phân số; `widespread reduction in fractional anisotropy scalar metric` — sự suy giảm diện rộng của chỉ số dị hướng phân số; `fractional anisotropy scalar metric map` — bản đồ chỉ số dị hướng phân số.

**Register & nuance:** Chỉ số sinh học chẩn đoán hình ảnh thần kinh phổ biến nhất thế giới. FA đo lường mức độ bất đối xứng của ellipsoid khuếch tán; sự sụt giảm FA là dấu hiệu nhạy cảm bậc nhất cho các bệnh lý như xơ cứng rải rác (MS), đột quỵ, chấn thương não và bệnh Alzheimer.

**Examples:** `A statistically significant plunge in the fractional anisotropy scalar metric inside the frontal white matter signaled microscopic demyelination before macroscopic lesions appeared on MRI.` → Sự sụt giảm có ý nghĩa thống kê của chỉ số vô hướng dị hướng phân số bên trong chất trắng thùy trán đã báo hiệu tình trạng mất myelin vi mô trước khi các tổn thương đại thể xuất hiện trên MRI.

**Liên kết tiếng Hàn:** `분율 이방성 스칼라 지표` (分率異方性 scalar 指標) — chỉ số vô hướng dị hướng phân số (FA).

---

## 9. mean diffusivity trace /miːn ˌdɪfjuːˈsɪvəti treɪs/

**Loại từ & vị trí trong câu:** `noun phrase` (ký hiệu: MD). Làm thước đo thể tích khuếch tán trung bình (*calculate as*, *elevate in*, *indicate*).

**Core meaning — English:** The rotationally invariant arithmetic average of the three tensor eigenvalues: $	ext{MD} = rac{\lambda_1 + \lambda_2 + \lambda_3}{3} = rac{	ext{Trace}(\mathbf{D})}{3}$, measuring the overall magnitude of molecular water displacement independent of direction.

**Core meaning & mental image — Tiếng Việt:** Vết độ khuếch tán trung bình (chỉ số MD). Hãy tưởng tượng bạn tính tổng thể tích nước có thể di chuyển trong một khoảng thời gian: dù nước bị chặn chạy ngang hay chạy dọc, con số MD cộng gộp cả ba trục lại để cho biết không gian mô đó nói chung đang "chật chội" cản trở nước (như trong phù tế bào do đột quỵ thiếu máu não, MD giảm mạnh) hay "thênh thang trống trải" (như trong mô bị hoại tử hoặc khoang dịch não tủy, MD tăng vọt).

**Grammar & collocations:** `elevated mean diffusivity trace` — vết độ khuếch tán trung bình tăng cao; `compute the mean diffusivity trace` — tính toán vết độ khuếch tán trung bình; `mean diffusivity trace of brain parenchyma` — vết độ khuếch tán trung bình của nhu mô não.

**Register & nuance:** Bất biến quay (rotationally invariant). MD phản ánh tổng lượng chướng ngại vật khuếch tán trong mô; khác với FA (nhạy với hướng), MD nhạy với mật độ tế bào và thể tích dịch gian bào nói chung.

**Examples:** `Cytotoxic edema caused cell swelling that restricted extracellular space, precipitating an acute collapse in the mean diffusivity trace within the ischemic core.` → Phù độc tế bào đã gây sưng phù tế bào làm thu hẹp khoang gian bào, dẫn đến sự sụp đổ cấp tính của vết độ khuếch tán trung bình bên trong lõi nhồi máu.

**Liên kết tiếng Hàn:** `평균 확산도 대각합 지표` (平均擴散度對角合指標) — chỉ số vết độ khuếch tán trung bình (MD).

---

## 10. axial diffusivity along axons /ˈæksiəl ˌdɪfjuːˈsɪvəti əˈlɔŋ ˈæksɑnz/

**Loại từ & vị trí trong câu:** `noun phrase` (ký hiệu: AD hoặc $\lambda_\parallel = \lambda_1$). Làm chỉ số sinh học đánh giá tính toàn vẹn sợi trục (*measure*, *decrease during*, *reflect*).

**Core meaning — English:** The magnitude of diffusion occurring strictly parallel to the primary axonal fiber tract axis ($\lambda_1$), serving as a selective neurobiological marker of axonal integrity and neurofilament alignment.

**Core meaning & mental image — Tiếng Việt:** Độ khuếch tán trục dọc theo sợi trục thần kinh. Hãy tưởng tượng một đường hầm cao tốc: độ khuếch tán trục đo tốc độ xe chạy thẳng tắp dọc theo chiều dài đường hầm; nếu đường hầm bị đất đá sạt lở hoặc các sợi khung xương tế bào thần kinh bị vỡ vụn bên trong, dòng chảy nước dọc theo sợi trục sẽ bị tắc nghẽn, làm chỉ số này sụt giảm nghiêm trọng.

**Grammar & collocations:** `measure axial diffusivity along axons` — đo độ khuếch tán trục dọc theo sợi trục; `reduction in axial diffusivity along axons` — sự suy giảm độ khuếch tán trục dọc theo sợi trục; `axial diffusivity along axons in spinal injury` — độ khuếch tán trục dọc theo sợi trục trong chấn thương tủy sống.

**Register & nuance:** Bệnh học thần kinh chuyên sâu. Trong phân tích chẩn đoán, sự thay đổi của FA có thể do nhiều nguyên nhân; việc tách riêng $\lambda_\parallel$ (axial diffusivity) giúp bác sĩ nhận biết chính xác tổn thương xuất phát từ chính sợi trục (*axonal damage*) thay vì màng myelin bên ngoài.

**Examples:** `A precipitous drop in axial diffusivity along axons was detected forty-eight hours post-trauma, confirming widespread neurofilament breakdown along the optic nerve.` → Sự sụt giảm đột ngột của độ khuếch tán trục dọc theo sợi trục đã được phát hiện bốn mươi tám giờ sau chấn thương, xác nhận tình trạng phân rã sợi tơ thần kinh diện rộng dọc theo dây thần kinh thị giác.

**Liên kết tiếng Hàn:** `축삭 방향 축방향 확산도` (軸索方向軸方向擴散度) — độ khuếch tán trục dọc theo sợi trục ($\lambda_\parallel$).

---

## 11. radial diffusivity perpendicular to fibers /ˈreɪdiəl ˌdɪfjuːˈsɪvəti ˌpɜrpənˈdɪkjələr tu ˈfaɪbərz/

**Loại từ & vị trí trong câu:** `noun phrase` (ký hiệu: RD hoặc $\lambda_\perp = rac{\lambda_2 + \lambda_3}{2}$). Làm chỉ số đặc trưng đánh giá tổn thương myelin (*increase with*, *reflect*, *monitor*).

**Core meaning — English:** The average of the two minor perpendicular eigenvalues, measuring the rate of water diffusion radiating outward across axonal membranes, serving as an exquisitely sensitive marker of demyelination.

**Core meaning & mental image — Tiếng Việt:** Độ khuếch tán bán kính vuông góc với sợi thần kinh. Hãy tưởng tượng đường ống nước được bọc nhiều lớp băng keo cách nhiệt (màng myelin): bình thường nước không thể rò rỉ ra hai bên thành ống nên độ khuếch tán vuông góc rất thấp; nhưng khi bệnh xơ cứng rải rác gặm nhấm làm bong tróc lớp băng keo myelin, các phân tử nước lập tức tràn ra hai bên thành ống, khiến độ khuếch tán bán kính vọt lên cao.

**Grammar & collocations:** `increase in radial diffusivity perpendicular to fibers` — sự gia tăng độ khuếch tán bán kính vuông góc với sợi; `measure radial diffusivity perpendicular to fibers` — đo độ khuếch tán bán kính vuông góc với sợi; `radial diffusivity perpendicular to fibers as a demyelination index` — độ khuếch tán bán kính như một chỉ số mất myelin.

**Register & nuance:** Bệnh lý thoái hóa myelin (demyelinating diseases). Ngược lại với axial diffusivity, sự gia tăng của radial diffusivity ($\lambda_\perp$) là chỉ điểm sinh học kinh điển nhất của hiện tượng rách vỡ hoặc mất lớp vỏ bọc myelin bảo vệ sợi thần kinh.

**Examples:** `In dysmyelinating animal models, elevated radial diffusivity perpendicular to fibers correlated directly with the histological severity of myelin sheath degradation.` → Trong các mô hình động vật rối loạn tạo myelin, độ khuếch tán bán kính vuông góc với sợi tăng cao tương quan trực tiếp với mức độ nghiêm trọng trên mô bệnh học của sự thoái hóa bao myelin.

**Liên kết tiếng Hàn:** `신경섬유 수직 반경방향 확산도` (神經纖維垂直半徑方向擴散度) — độ khuếch tán hướng kính vuông góc với sợi ($\lambda_\perp$).

---

## 12. diffusion ellipsoid visualization /dɪˈfjuːʒən ɪˈlɪpsɔɪd ˌvɪʒuələˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm công cụ hiển thị đồ họa 3D (*render*, *display*, *depict*).

**Core meaning — English:** A 3D graphical representation of the diffusion tensor within an imaging voxel, where the radii of the semi-axes are proportional to the square roots of the eigenvalues ($\sqrt{\lambda_1}, \sqrt{\lambda_2}, \sqrt{\lambda_3}$) oriented along the eigenvectors.

**Core meaning & mental image — Tiếng Việt:** Trực quan hóa hình bầu dục khuếch tán (hiển thị ellipsoid). Hãy nhìn lên màn hình đồ họa 3D: mỗi điểm ảnh não bộ được vẽ thành một hình cầu hoặc quả dưa hấu thuôn dài; nơi chất trắng đặc thì quả dưa dài ngoằng chỉ thẳng hướng sợi thần kinh; nơi dịch não tủy thì nó tròn xoe như quả bóng bi-a; toàn bộ não bộ hiện lên như hàng triệu quả dưa nhỏ tí hon xếp thành những hàng lối tuyệt đẹp.

**Grammar & collocations:** `render a diffusion ellipsoid visualization` — kết xuất trực quan hóa hình bầu dục khuếch tán; `geometry in diffusion ellipsoid visualization` — hình học trong trực quan hóa hình bầu dục khuếch tán; `diffusion ellipsoid visualization software` — phần mềm trực quan hóa hình bầu dục khuếch tán.

**Register & nuance:** Đồ họa y sinh và giao diện chẩn đoán hình ảnh. Giúp các bác sĩ phẫu thuật thần kinh nhanh chóng phân biệt trực quan giữa mô đẳng hướng (hình cầu), mô phẳng phẳng (planar pancake, nơi các sợi bắt chéo), và mô tuyến tính (prolate cigar, nơi các sợi chạy song song chặt chẽ).

**Examples:** `Software rendering transformed complex matrix arrays into a diffusion ellipsoid visualization, clearly displaying elongated cigar shapes along the internal capsule.` → Phần mềm kết xuất đã chuyển hóa các mảng ma trận phức tạp thành trực quan hóa hình bầu dục khuếch tán, hiển thị rõ ràng các hình điếu xì gà thuôn dài dọc theo bao trong.

**Liên kết tiếng Hàn:** `확산 타원체 시각화` (擴散楕圓體視覺化) — sự trực quan hóa hình bầu dục khuếch tán 3D.

---

## 13. deterministic streamline tractography /dɪˌtɜrmənˈɪstɪk ˈstriːmlaɪn trækˈtɑɡrəfi/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ thuật toán tái tạo đường truyền (*reconstruct*, *propagate*, *trace out*).

**Core meaning — English:** A computational reconstruction technique that traces continuous 3D mathematical trajectories (streamlines) through the brain volume by stepping iteratively along the principal eigenvector of each adjacent voxel from a predefined seed point.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật chụp đường dẫn truyền thần kinh dạng dòng chảy tất định. Hãy tưởng tượng bạn thả một chiếc thuyền con vào dòng suối và để nó tự động trôi theo hướng dòng nước chảy mạnh nhất: thuật toán máy tính bắt đầu từ một điểm gieo mầm rồi lần theo hướng kim la bàn $\mathbf{e}_1$ của từng điểm ảnh kế tiếp, vẽ nên những dải dây thần kinh uốn lượn tuyệt đẹp nối liền vỏ não với tủy sống.

**Grammar & collocations:** `reconstruct pathways via deterministic streamline tractography` — tái tạo các con đường dẫn truyền qua kỹ thuật dòng chảy tất định; `limitations of deterministic streamline tractography` — các giới hạn của kỹ thuật dòng chảy tất định; `deterministic streamline tractography algorithm` — thuật toán chụp đường dẫn truyền dạng dòng chảy tất định.

**Register & nuance:** Thuật toán dựng hình chất trắng kinh điển. Phương pháp tất định (deterministic) giả định trong mỗi voxel chỉ có một hướng sợi ưu thế duy nhất; nhanh và trực quan nhưng dễ mắc sai lầm nghiêm trọng tại những nơi có các bó sợi giao nhau phức tạp.

**Examples:** `Neurosurgeons utilized deterministic streamline tractography to map the exact margin of the arcuate fasciculus prior to resecting the temporal lobe tumor.` → Các phẫu thuật viên thần kinh đã sử dụng kỹ thuật chụp đường dẫn truyền thần kinh dạng dòng chảy tất định để lập bản đồ rìa chính xác của bó cung trước khi cắt bỏ khối u thùy thái dương.

**Liên kết tiếng Hàn:** `결정론적 유선 신경로 영상화 기법` (決定論的流線神經路映像化技法) — kỹ thuật dựng hình đường dẫn truyền thần kinh dạng dòng chảy tất định.

---

## 14. Fiber Assignment by Continuous Tracking /ˈfaɪbər əˈsaɪnmənt baɪ kənˈtɪnjuəs ˈtrækɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` (thường gọi tắt là thuật toán FACT). Làm chủ ngữ chỉ thuật toán kinh điển (*propagate*, *discretize*, *trace*).

**Core meaning — English:** The seminal line-propagation algorithm developed by Mori et al. that calculates continuous trajectory segments within a voxel, seamlessly stepping into adjacent voxels until a stopping boundary is reached.

**Core meaning & mental image — Tiếng Việt:** Thuật toán FACT (gán sợi bằng theo dõi liên tục). Hãy hình dung một chiếc bút chì tự động vẽ một đoạn thẳng xuyên qua một căn phòng hình hộp lập phương dọc theo hướng vector chính: ngay khi mũi bút chạm vào bức tường của căn phòng kế bên, nó lập tức đổi hướng theo vector của phòng mới và tiếp tục vẽ liền mạch mà không bị đứt đoạn.

**Grammar & collocations:** `execute Fiber Assignment by Continuous Tracking` — thực thi thuật toán FACT; `FACT algorithm for tractography` — thuật toán FACT cho chụp đường dẫn truyền thần kinh; `voxel boundary transitions in Fiber Assignment by Continuous Tracking` — sự chuyển tiếp ranh giới voxel trong FACT.

**Register & nuance:** Lịch sử thuật toán DTI (Mori et al., 1999). FACT là thuật toán theo dõi đường truyền đầu tiên được chấp nhận rộng rãi trên toàn cầu; nó chuyển đổi dữ liệu voxel rời rạc thành các đường cong giải phẫu liên tục trong không gian 3D.

**Examples:** `The Fiber Assignment by Continuous Tracking algorithm smoothly bridged voxel boundaries, delineating the full trajectory of the optic radiation from the lateral geniculate nucleus.` → Thuật toán FACT đã kết nối êm ái các ranh giới voxel, phác họa toàn bộ quỹ đạo của dải thị giác từ thể gối ngoài.

**Liên kết tiếng Hàn:** `연속 추적 섬유 할당 알고리즘` (連續追跡纖維割當 algorithm) — thuật toán gán sợi theo dõi liên tục (FACT).

---

## 15. fractional anisotropy termination threshold /ˈfrækʃənəl ˌænəˈsɑtrəpi ˌtɜrməˈneɪʃən ˈθrɛʃhoʊld/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm điều kiện dừng thuật toán (*set to*, *reach*, *stop tracking at*).

**Core meaning — English:** The empirical cutoff value of FA (typically set between 0.15 and 0.20) below which streamline propagation is abruptly terminated to prevent erroneous tracking into isotropic gray matter or cerebrospinal fluid.

**Core meaning & mental image — Tiếng Việt:** Ngưỡng dừng dị hướng phân số (phanh hãm thuật toán). Hãy tưởng tượng chiếc xe vẽ đường thần kinh đang chạy nhanh trên đường cao tốc chất trắng (FA > 0,5): khi chạy tới rìa vỏ não hoặc mép bể dịch não tủy, độ dị hướng tụt dốc xuống dưới 0,2; chạm ngưỡng dừng này, phanh xe lập tức kích hoạt để chiếc xe dừng lại ngay, ngăn không cho thuật toán vẽ bậy lung tung vào các vùng nước đẳng hướng.

**Grammar & collocations:** `apply a fractional anisotropy termination threshold` — áp dụng ngưỡng dừng dị hướng phân số; `conservative fractional anisotropy termination threshold` — ngưỡng dừng dị hướng phân số thận trọng; `stop tracking at the fractional anisotropy termination threshold` — ngừng lần vết tại ngưỡng dừng dị hướng phân số.

**Register & nuance:** Tiêu chuẩn tinh chỉnh tham số tractography. Nếu đặt ngưỡng này quá cao (ví dụ 0.3), thuật toán sẽ dừng non sớm và bỏ sót các sợi thần kinh ở vùng chất xám; nếu đặt quá thấp (ví dụ 0.1), thuật toán sẽ tạo ra các đường ảo phóng xuyên qua các rãnh não.

**Examples:** `Setting the fractional anisotropy termination threshold to 0.18 prevented the deterministic algorithm from generating spurious streamlines within subcortical gray nuclei.` → Việc cài đặt ngưỡng dừng dị hướng phân số ở mức 0,18 đã ngăn chặn thuật toán tất định tạo ra các đường chạy ảo bên trong các nhân xám dưới vỏ.

**Liên kết tiếng Hàn:** `분율 이방성 종료 임계값` (分率異方性終了臨界値) — ngưỡng giá trị FA dừng theo dõi đường truyền.

---

## 16. tractographic curvature angle limit /ˌtræktoʊˈɡræfɪk ˈkɜrvətʃər ˈæŋɡəl ˈlɪmət/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm thông số hạn chế góc quay giải phẫu (*exceed*, *constrain*, *set at*).

**Core meaning — English:** The maximum permissible turning angle allowed between consecutive tracking steps (typically 40 to 60 degrees), halting the streamline if a sharper trajectory is detected to prevent unbiological U-turns.

**Core meaning & mental image — Tiếng Việt:** Giới hạn góc uốn cong đường dẫn truyền (góc bẻ cua tối đa). Hãy hình dung các sợi dây thần kinh trong não không bao giờ bị gấp khúc 90 độ hay quay ngoắt 180 độ như chữ U; do đó máy tính được cài đặt một giới hạn: nếu hai bước liên tiếp bắt nó rẽ một góc quá 45 độ, máy tính sẽ lập tức cắt đứt đường vẽ đó vì biết chắc chắn đây là lỗi do nhiễu tín hiệu chứ không phải giải phẫu thật.

**Grammar & collocations:** `impose a tractographic curvature angle limit` — áp đặt một giới hạn góc uốn cong đường dẫn truyền; `exceed the tractographic curvature angle limit` — vượt quá giới hạn góc uốn cong đường dẫn truyền; `strict tractographic curvature angle limit` — giới hạn góc uốn cong đường dẫn truyền nghiêm ngặt.

**Register & nuance:** Ràng buộc giải phẫu hợp lý (anatomical plausibility constraint). Cùng với ngưỡng FA, giới hạn góc uốn cong là chốt chặn quan trọng thứ hai giúp loại bỏ các đường đi sai lệch do ảnh hưởng của nhiễu ảnh và biến dạng từ trường.

**Examples:** `Streamlines exceeding the forty-five-degree tractographic curvature angle limit were immediately pruned, ensuring the model obeyed biological axonal bending constraints.` → Các đường chạy vượt quá giới hạn góc uốn cong đường dẫn truyền bốn mươi lăm độ đã bị cắt tỉa ngay lập tức, đảm bảo mô hình tuân thủ các ràng buộc uốn cong sinh học của sợi trục.

**Liên kết tiếng Hàn:** `신경로 곡률각 제한 한도` (神經路曲率角制限限度) — giới hạn góc uốn cong tối đa của đường dẫn truyền.

---

## 17. fiber crossing kissing artifact /ˈfaɪbər ˈkrɔsɪŋ ˈkɪsɪŋ ˈɑrtəfækt/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng số nhiều *artifacts*). Thường làm chủ ngữ gây sai lệch chẩn đoán (*plague*, *mislead*, *arise from*).

**Core meaning — English:** The fundamental mathematical limitation of the single-tensor model where intersecting, diverging, or kissing axonal bundles within a single imaging voxel average together into a planar or spherical tensor, obscuring true anatomy.

**Core meaning & mental image — Tiếng Việt:** Nhiễu ảnh sợi bắt chéo và sợi tiếp xúc (hôn nhau). Hãy tưởng tượng một ngã tư đường: một luồng xe chạy thẳng từ Bắc xuống Nam, một luồng xe chạy ngang từ Đông sang Tây; vì máy DTI chỉ đo được một giá trị trung bình trong một ô vuông, nó lầm tưởng nước đang khuếch tán tỏa đều như hình đĩa bẹt, khiến kim chỉ số FA tụt thảm hại và thuật toán vẽ sợi bị bối rối, hoặc rẽ nhầm 90 độ sang đường ngang, hoặc cụt ngọn không thể đi tiếp.

**Grammar & collocations:** `suffer from fiber crossing kissing artifacts` — chịu ảnh hưởng của các nhiễu ảnh sợi bắt chéo và tiếp xúc; `resolve the fiber crossing kissing artifact` — giải quyết nhiễu ảnh sợi bắt chéo và tiếp xúc; `prevalence of fiber crossing kissing artifacts` — sự phổ biến của nhiễu ảnh sợi bắt chéo và tiếp xúc.

**Register & nuance:** Lỗ hổng chí mạng của mô hình DTI đơn tensor cổ điển (single-tensor DTI failure). Nghiên cứu giải phẫu cho thấy có tới hơn 60–90% các voxel chất trắng trong não người chứa các bó sợi bắt chéo nhau; do đó DTI cổ điển thường ước lượng sai lệch đáng kể tại các vùng này (như vùng giao thoa giữa bó vỏ gai và thể chai).

**Examples:** `The conventional single-tensor model collapsed at the intersection of the superior longitudinal fasciculus and the corona radiata due to severe fiber crossing kissing artifacts.` → Mô hình đơn tensor thông thường đã sụp đổ tại giao điểm của bó dọc trên và vành tia do các nhiễu ảnh sợi bắt chéo và tiếp xúc nghiêm trọng.

**Liên kết tiếng Hàn:** `교차 및 접촉 섬유 인공물` (交叉 및 接觸纖維人工物) — nhiễu ảnh giả do sợi thần kinh bắt chéo hoặc tiếp xúc.

---

## 18. constrained spherical deconvolution /kənˈstreɪnd ˈsfɪrɪkəl ˌdiːkɑnvəˈluːʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường gọi tắt là CSD). Làm chủ ngữ giải pháp toán học tiên tiến (*resolve*, *extract*, *model*).

**Core meaning — English:** An advanced high-angular mathematical technique that deconvolves the observed diffusion-weighted MR signal profile with a single-fiber response function on a sphere, extracting multiple fiber orientations per voxel.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật giải tích chập cầu có ràng buộc (thuật toán CSD). Hãy hình dung bạn nghe một bản hòa âm phức tạp gồm tiếng đàn vĩ cầm và sáo trúc chơi cùng lúc: thuật toán CSD giống như một phần mềm lọc âm siêu việt biết trước âm sắc của từng loại đàn, phân tách hoàn hảo bản hòa âm thành hai giai điệu độc lập, giúp máy tính nhìn rõ cả 2 hoặc 3 bó sợi thần kinh đang đan chéo qua nhau trong một ô điểm ảnh tí hon.

**Grammar & collocations:** `apply constrained spherical deconvolution` — áp dụng kỹ thuật giải tích chập cầu có ràng buộc; `power of constrained spherical deconvolution` — sức mạnh của giải tích chập cầu có ràng buộc; `constrained spherical deconvolution profile` — mặt cắt giải tích chập cầu có ràng buộc.

**Register & nuance:** Phương pháp tái tạo vượt trội so với DTI (Tournier et al., 2007). CSD áp dụng điều kiện ràng buộc không âm (*non-negativity constraint*) trên mặt cầu, loại bỏ các đỉnh giả do nhiễu và cho phép dựng hình chính xác các đường dẫn truyền phức tạp ngay cả khi sử dụng các máy quét lâm sàng thông thường.

**Examples:** `By employing constrained spherical deconvolution, the researchers accurately resolved both descending corticospinal tracts and crossing pontine fibers within the same brain region.` → Bằng cách sử dụng kỹ thuật giải tích chập cầu có ràng buộc, các nhà nghiên cứu đã phân giải chính xác cả các bó vỏ gai đi xuống và các sợi cầu não bắt chéo bên trong cùng một vùng não.

**Liên kết tiếng Hàn:** `제약 구면 디컨볼루션` (制約球面 deconvolution) — kỹ thuật giải tích chập cầu có ràng buộc (CSD).

---

## 19. fiber orientation distribution function /ˈfaɪbər ˌɔriənˈteɪʃən ˌdɪstrəˈbjuːʃən ˈfʌŋkʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường ký hiệu: fODF). Làm đối tượng đầu ra toán học của CSD (*estimate*, *display multiple peaks*, *sample*).

**Core meaning — English:** A continuous spherical probability density function describing the fraction and spatial orientation of axonal fibers pointing in any arbitrary direction $(	heta, \phi)$ within an imaging voxel.

**Core meaning & mental image — Tiếng Việt:** Hàm phân bố định hướng sợi (hàm fODF). Thay vì một hình quả dưa hấu đơn độc của DTI, hàm fODF vẽ nên một bông hoa toán học kỳ diệu: nếu trong điểm ảnh có 3 bó sợi bắt chéo nhau, bông hoa sẽ mọc ra đúng 3 cánh hoa nhọn chĩa theo 3 hướng không gian thực tế, mỗi cánh hoa đại diện cho mật độ và góc chạy của một bó sợi thần kinh.

**Grammar & collocations:** `estimate the fiber orientation distribution function` — ước lượng hàm phân bố định hướng sợi; `peaks of the fiber orientation distribution function` — các đỉnh của hàm phân bố định hướng sợi; `reconstruct the fiber orientation distribution function` — tái tạo hàm phân bố định hướng sợi.

**Register & nuance:** Đầu ra cốt lõi của HARDI/CSD. Các đỉnh cực đại cục bộ (*local maxima/peaks*) của hàm fODF cung cấp các vector định hướng cho thuật toán dựng hình sợi nhiều hướng, xóa bỏ hoàn toàn giới hạn chỉ có một hướng duy nhất của DTI cổ điển.

**Examples:** `Inspecting the fiber orientation distribution function revealed two distinct orthogonal lobes within the centrum semiovale, representing crossing motor and association fibers.` → Việc kiểm tra hàm phân bố định hướng sợi đã làm lộ ra hai thùy trực giao riêng biệt bên trong trung tâm bán bầu dục, đại diện cho các sợi vận động và các sợi liên hợp bắt chéo nhau.

**Liên kết tiếng Hàn:** `섬유 방향 분포 함수` (纖維方向分布函數) — hàm phân bố định hướng sợi thần kinh (fODF).

---

## 20. high angular resolution diffusion imaging /haɪ ˈæŋɡjələr ˌrɛzəˈluːʃən dɪˈfjuːʒən ˈɪmɪdʒɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường gọi tắt là HARDI). Làm giao thức chụp quét MRI chuyên sâu (*acquire via*, *implement*, *utilize*).

**Core meaning — English:** An advanced diffusion MRI acquisition protocol that samples diffusion attenuation along dozens or hundreds of uniformly distributed gradient directions on a sphere with high b-values, overcoming DTI limitations.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật chụp khuếch tán độ phân giải góc cao (giao thức HARDI). Hãy hình dung thay vì chỉ chụp ảnh từ 6 góc nhìn nghèo nàn, chiếc máy MRI bắn tia đo đạc từ hơn 64 hoặc 128 hướng không gian khác nhau phủ kín một mặt cầu 360 độ: dữ liệu góc nhìn dày đặc này cung cấp bức tranh chi tiết tuyệt đối về mọi ngóc ngách khuếch tán phức tạp của các mạng lưới não bộ.

**Grammar & collocations:** `acquire high angular resolution diffusion imaging data` — thu thập dữ liệu chụp khuếch tán độ phân giải góc cao; `advantages of high angular resolution diffusion imaging` — những ưu điểm của HARDI; `high angular resolution diffusion imaging protocol` — quy trình chụp HARDI.

**Register & nuance:** Kỹ thuật hình ảnh thần kinh thế hệ mới (Tuch et al., 2002). Đòi hỏi thời gian chụp lâu hơn và máy quét có từ trường mạnh (thường từ 3 Tesla trở lên) cùng hệ thống cuộn gradient công suất cao để thu nhận tín hiệu ở các giá trị $b$ cao ($b \ge 2000\ s/mm^2$).

**Examples:** `Acquiring sixty-four-direction high angular resolution diffusion imaging datasets permitted sub-millimeter mapping of intricate language networks.` → Việc thu nhận các bộ dữ liệu chụp khuếch tán độ phân giải góc cao sáu mươi tư hướng đã cho phép lập bản đồ dưới milimet của các mạng lưới ngôn ngữ phức tạp.

**Liên kết tiếng Hàn:** `고각도 분해능 확산 자기공명영상` (高角度分解能擴散磁氣共鳴映像) — chụp khuếch tán độ phân giải góc cao (HARDI).

---

## 21. probabilistic tractography dispersion /ˌprɑbəbəˈlɪstɪk trækˈtɑɡrəfi dɪˈspɜrʒən/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm phương pháp hoặc đặc tính mô hình hóa độ bất định (*quantify*, *map*, *account for*).

**Core meaning — English:** A stochastic fiber tracking methodology that samples probability distributions of fiber orientations, generating thousands of random streamlines to map the confidence interval and spatial spreading of anatomical connectivity.

**Core meaning & mental image — Tiếng Việt:** Độ phân tán chụp đường dẫn truyền xác suất. Hãy hình dung thay vì chỉ cử một người thám thính duy nhất đi theo con đường mòn (dòng chảy tất định), bạn thả ra 5.000 giọt mực ảo: các giọt mực này lan tỏa theo mọi ngả đường có thể có theo xác suất; nơi nào có 95% giọt mực đi qua sẽ hiện lên sáng rực biểu thị độ tin cậy tuyệt đối, trong khi các nhánh phụ mờ ảo phản ánh sự phân tán bất định tự nhiên của các nhánh thần kinh.

**Grammar & collocations:** `map probabilistic tractography dispersion` — lập bản đồ độ phân tán chụp đường dẫn truyền xác suất; `algorithms for probabilistic tractography dispersion` — các thuật toán cho độ phân tán tractography xác suất; `quantify probabilistic tractography dispersion` — định lượng độ phân tán tractography xác suất.

**Register & nuance:** Phương pháp FSL bedpostx / probtrackx do Behrens et al. phát triển. Khác với tất định chỉ cho ra một đường kẻ đơn độc, phương pháp xác suất phản ánh được độ bất định (uncertainty) do nhiễu và cho phép lần vết các con đường thần kinh đi vào sâu tận các lớp vỏ não chất xám nơi FA rất thấp.

**Examples:** `Probabilistic tractography dispersion calculations mapped a broad fan of confidence values, demonstrating substantial connectivity between the thalamus and prefrontal cortex.` → Các phép tính độ phân tán chụp đường dẫn truyền xác suất đã lập bản đồ một dải nan quạt rộng của các giá trị tin cậy, chứng minh tính kết nối đáng kể giữa đồi thị và vỏ não trước trán.

**Liên kết tiếng Hàn:** `확률론적 신경로 확산도 분산` (確率論的神經路擴散度分散) — độ phân tán trong kỹ thuật dựng hình đường dẫn truyền thần kinh xác suất.

---

## 22. myelin sheath microstructural barrier /ˈmaɪəlɪn ʃiːθ ˌmaɪkroʊˈstrʌktʃərəl ˈbɛriər/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm chủ ngữ vật lý sinh học cản trở khuếch tán (*restrict*, *impede*, *modulate*).

**Core meaning — English:** The tightly wrapped, multi-layered hydrophobic lipid bilayer surrounding nerve axons that acts as a physical obstacle, severely restricting the transverse Brownian displacement of water molecules.

**Core meaning & mental image — Tiếng Việt:** Rào cản vi cấu trúc bao myelin. Hãy tưởng tượng bao myelin như lớp vỏ bọc cao su dày nhiều lớp quanh sợi dây cáp điện thoại: lớp mỡ kỵ nước này hoàn toàn không thấm nước; khi các phân tử nước cố bơi xuyên qua thành sợi trục liền đụng phải rào cản bức tường cao su này và buộc phải quay đầu bơi dọc theo chiều dài sợi.

**Grammar & collocations:** `integrity of the myelin sheath microstructural barrier` — tính toàn vẹn của rào cản vi cấu trúc bao myelin; `disrupt the myelin sheath microstructural barrier` — phá vỡ rào cản vi cấu trúc bao myelin; `myelin sheath microstructural barrier density` — mật độ rào cản vi cấu trúc bao myelin.

**Register & nuance:** Sinh học màng tế bào thần kinh. Cùng với mật độ đóng gói của các sợi trục (axonal packing density), bao myelin là yếu tố sinh lý học quyết định trực tiếp tạo nên tính dị hướng cao trong não bộ; sự suy thoái bao này ngay lập tức làm biến đổi các thông số tensor khuếch tán.

**Examples:** `Autoimmune destruction of the myelin sheath microstructural barrier increased radial diffusivity, unmasking underlying axon pathology.` → Sự phá hủy tự miễn của rào cản vi cấu trúc bao myelin đã làm gia tăng độ khuếch tán bán kính, phơi bày bệnh lý sợi trục tiềm ẩn bên dưới.

**Liên kết tiếng Hàn:** `수초 미세구조 장벽` (髓鞘微細構造障壁) — rào cản vi cấu trúc bao myelin cản trở khuếch tán.

---

## 23. tract-based spatial statistics /trækt beɪst ˈspeɪʃəl stəˈtɪstɪks/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường gọi tắt là TBSS). Làm phương pháp phân tích thống kê nhóm (*perform*, *apply*, *rely on*).

**Core meaning — English:** An automated, voxel-based neuroimaging analysis pipeline that projects multi-subject FA data onto a common, group-averaged mean white matter skeleton to eliminate alignment errors and partial volume effects.

**Core meaning & mental image — Tiếng Việt:** Thống kê không gian dựa trên dải chất trắng (phương pháp TBSS). Hãy hình dung bạn muốn so sánh độ dày đường dây thần kinh của 100 bộ não khác nhau: vì não mỗi người to nhỏ méo tròn khác nhau, phương pháp TBSS xây dựng một "bộ khung xương" trung tâm của các dải chất trắng lớn nhất, sau đó hút dữ liệu từ não của từng người chiếu thẳng lên bộ khung xương chuẩn này để so sánh thống kê hoàn hảo mà không lo bị lệch tọa độ.

**Grammar & collocations:** `execute tract-based spatial statistics` — thực thi phương pháp thống kê không gian dựa trên dải chất trắng; `tract-based spatial statistics skeleton` — bộ khung xương thống kê không gian dựa trên dải chất trắng; `voxel-wise tract-based spatial statistics` — thống kê không gian dựa trên dải chất trắng theo từng voxel.

**Register & nuance:** Tiêu chuẩn vàng phân tích nhóm thần kinh (Smith et al., 2006 / FSL). Khắc phục được nhược điểm của phương pháp VBM thông thường (vốn nhạy cảm với lỗi làm mịn ảnh và biến dạng hình học khi nắn chỉnh ảnh vào không gian chuẩn MNI).

**Examples:** `By projecting individual patient metrics onto a shared mean skeleton, tract-based spatial statistics revealed significant microstructural deficits along the superior corona radiata.` → Bằng cách chiếu các chỉ số của từng bệnh nhân lên một bộ khung xương trung bình chung, phương pháp thống kê không gian dựa trên dải chất trắng đã làm lộ rõ các thiếu hụt vi cấu trúc đáng kể dọc theo vành tia trên.

**Liên kết tiếng Hàn:** `신경로 기반 공간 통계` (神經路基盤空間統計) — phương pháp thống kê không gian dựa trên đường dẫn truyền thần kinh (TBSS).

---

## 24. white matter connectome skeleton /ˈwaɪt ˌmætər kəˈnɛktoʊm ˈskɛlətən/

**Loại từ & vị trí trong câu:** `noun phrase`. Làm đối tượng tọa độ tham chiếu giải phẫu (*construct*, *project onto*, *trace*).

**Core meaning — English:** The thinned, continuous mathematical representation of the core centers of all major cerebral fiber bundles across a subject cohort, capturing high-fractional-anisotropy pathways free of boundary erosion.

**Core meaning & mental image — Tiếng Việt:** Bộ khung xương mạng kết nối chất trắng. Hãy hình dung hệ thống giao thông đường cao tốc quốc gia: bộ khung xương này chỉ giữ lại những đường tim đường chính giữa của các dải cao tốc huyết mạch; bỏ qua các mép lề đường cỏ cây lộn xộn, bộ khung xương thanh mảnh này lưu giữ những tinh hoa kết nối lõi của toàn bộ mạng lưới tư duy trong não bộ.

**Grammar & collocations:** `generate a white matter connectome skeleton` — tạo ra bộ khung xương mạng kết nối chất trắng; `project FA values onto the white matter connectome skeleton` — chiếu các giá trị FA lên bộ khung xương mạng kết nối chất trắng; `voxels comprising the white matter connectome skeleton` — các voxel cấu thành bộ khung xương mạng kết nối chất trắng.

**Register & nuance:** Cấu trúc hình thái học trong phân tích TBSS. Khung xương được tạo ra bằng thuật toán làm mỏng hình thái học phi cực đại (*non-maximum suppression thinning*), đảm bảo mỗi điểm trên khung xương chỉ đại diện cho tâm điểm của bó sợi nơi chỉ số FA đạt giá trị cực đại cục bộ.

**Examples:** `Individual FA maxima were searched along perpendicular normals and mapped directly onto the mean white matter connectome skeleton for inter-subject permutation testing.` → Các giá trị FA cực đại của từng cá nhân đã được tìm kiếm dọc theo các pháp tuyến vuông góc và lập bản đồ trực tiếp lên bộ khung xương mạng kết nối chất trắng trung bình để kiểm định hoán vị giữa các đối tượng.

**Liên kết tiếng Hàn:** `백질 연결체 골격` (白質連結體骨格) — bộ khung xương mạng kết nối chất trắng (connectome skeleton).

---

## 25. eddy current distortion correction /ˈɛdi ˈkɜrənt dɪˈstɔrʃən kəˈrɛkʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm quy trình tiền xử lý hình ảnh bắt buộc (*perform*, *apply*, *incorporate*).

**Core meaning — English:** The computational image registration and geometric unwarping algorithm that rectifies shearing, scaling, and translation artifacts induced in diffusion MRI by remnant electrical eddy currents within gradient coils.

**Core meaning & mental image — Tiếng Việt:** Sự hiệu chỉnh biến dạng do dòng điện xoáy eddy. Hãy tưởng tượng khi máy MRI bật tắt các cuộn từ trường cực mạnh chớp nhoáng, các dòng điện xoáy rò rỉ chạy lòng vòng trong khung kim loại của máy quét, làm từ trường bị méo mó khiến hình ảnh chụp não bị méo xệch, co giãn và dịch chuyển lệch trục; thuật toán hiệu chỉnh eddy giống như một chiếc bàn là phẳng toán học nắn chỉnh từng lát cắt não trở về đúng vị trí giải phẫu hoàn hảo ban đầu.

**Grammar & collocations:** `apply eddy current distortion correction` — áp dụng sự hiệu chỉnh biến dạng do dòng điện xoáy; `pipeline for eddy current distortion correction` — quy trình hiệu chỉnh biến dạng do dòng điện xoáy; `geometric eddy current distortion correction` — sự hiệu chỉnh biến dạng hình học do dòng điện xoáy eddy.

**Register & nuance:** Tiền xử lý dữ liệu dMRI (FSL `eddy` tool). Nếu bỏ qua bước hiệu chỉnh dòng xoáy này, các hình ảnh đo từ các hướng gradient khác nhau sẽ không thể xếp chồng khớp lên nhau, dẫn đến sai số nghiêm trọng khi tính toán các phần tử trong ma trận tensor khuếch tán.

**Examples:** `Before diagonalizing the diffusion tensors, technicians ran affine registration routines for eddy current distortion correction to eliminate inter-gradient shear artifacts.` → Trước khi chéo hóa các tensor khuếch tán, các kỹ thuật viên đã chạy các quy trình đăng ký affine để hiệu chỉnh biến dạng do dòng điện xoáy eddy nhằm loại bỏ các nhiễu ảnh trượt giữa các hướng gradient.

**Liên kết tiếng Hàn:** `와전류 왜곡 보정` (渦電流歪曲補正) — sự hiệu chỉnh biến dạng do dòng điện xoáy (eddy current).

---

## Review in context (Part 1: Tensor physics, matrix diagonalization, and scalar diffusion metrics)

In functional white matter neuroanatomy, non-invasive tract mapping exploits the biophysical phenomenon of **anisotropic Brownian water diffusion**. In organized nerve fascicles, thermal displacements of water are hindered along cell boundaries. Measuring this motion relies upon the **Stejskal-Tanner pulsed gradient sequence**, which applies paired magnetic gradient lobes around a refocusing radiofrequency pulse. Increasing the experimental **b-value diffusion weighting** intensifies diffusion sensitivity by accentuating signal attenuation across selected trajectories. To mathematically model spatial mobility within each voxel, physicists compute the three-dimensional **water self-diffusion tensor matrix**. Applying linear algebraic **tensor matrix diagonalization** rotates coordinate axes toward natural diffusion directions, yielding three orthogonal eigenvalues. The largest extracted value designates the **principal eigenvalue magnitude**, reflecting the maximum diffusion rate parallel to axonal bundles. Concurrently, its associated vector determines the **principal eigenvector orientation**, providing directional guidance for spatial streamline algorithms. Combining all three directional metrics yields the normalized **fractional anisotropy scalar metric**, quantifying microstructural coherence along a continuous scale from zero to one. In clinical contexts, measuring the rotationally invariant **mean diffusivity trace** characterizes the aggregate cellular volume fraction independent of orientation. When assessing localized pathology, neuroscientists contrast **axial diffusivity along axons**, which serves as a sensitive marker of axonal integrity, against **radial diffusivity perpendicular to fibers**, whose elevation reliably indicates myelin sheath degradation. Finally, converting mathematical tensor arrays into a **diffusion ellipsoid visualization** renders spatial morphology into intuitive geometric cigar or pancake shapes across three-dimensional anatomical space.

**Bản dịch tiếng Việt:**

Trong giải phẫu thần kinh chức năng chất trắng, việc lập bản đồ đường dẫn truyền không xâm lấn khai thác hiện tượng sinh lý vật lý của **anisotropic Brownian water diffusion**. Trong các bó sợi thần kinh có tổ chức, các dịch chuyển nhiệt của nước bị cản trở dọc theo các ranh giới tế bào. Việc đo đạc chuyển động này dựa vào **Stejskal-Tanner pulsed gradient sequence**, vốn áp dụng các thùy gradient từ trường ghép đôi xung quanh một xung tần số vô tuyến tái hội tụ. Việc tăng **b-value diffusion weighting** thực nghiệm sẽ làm tăng cường độ nhạy khuếch tán bằng cách làm nổi bật sự suy giảm tín hiệu qua các quỹ đạo được chọn lọc. Để lập mô hình toán học về tính linh động không gian bên trong từng voxel, các nhà vật lý tính toán **water self-diffusion tensor matrix** ba chiều. Việc áp dụng **tensor matrix diagonalization** đại số tuyến tính sẽ xoay các trục tọa độ về các hướng khuếch tán tự nhiên, mang lại ba giá trị riêng trực giao. Giá trị trích xuất lớn nhất chỉ định **principal eigenvalue magnitude**, phản ánh tốc độ khuếch tán cực đại song song với các bó sợi trục. Đồng thời, vectơ liên kết của nó xác định **principal eigenvector orientation**, cung cấp sự chỉ dẫn định hướng cho các thuật toán đường dòng chảy không gian. Việc kết hợp cả ba chỉ số định hướng mang lại **fractional anisotropy scalar metric** được chuẩn hóa, định lượng tính gắn kết vi cấu trúc dọc theo một thang đo liên tục từ không đến một. Trong các bối cảnh lâm sàng, việc đo đạc **mean diffusivity trace** bất biến quay đặc trưng hóa phần thể tích tế bào tổng hợp độc lập với định hướng. Khi đánh giá bệnh lý cục bộ, các nhà khoa học thần kinh đối chiếu **axial diffusivity along axons**, vốn đóng vai trò như một chỉ điểm nhạy bén của tính toàn vẹn sợi trục, với **radial diffusivity perpendicular to fibers**, sự gia tăng của nó chỉ ra sự suy thoái bao myelin một cách đáng tin cậy. Cuối cùng, việc chuyển đổi các mảng tensor toán học thành một **diffusion ellipsoid visualization** kết xuất hình thái học không gian thành các hình điếu xì gà hoặc bánh kếp trực quan xuyên qua không gian giải phẫu ba chiều.

---

## Review in context (Part 2: Tractography, fiber crossing artifacts, and microstructural modeling)

To trace long-range axonal bundles across cortical regions, neuroimaging platforms deploy **deterministic streamline tractography** to assemble connected trajectories. A classic execution of this framework is **Fiber Assignment by Continuous Tracking**, which bridges discrete voxel spaces by propagating linear segments along local eigenvector coordinates. To avoid propagating streamlines into non-axonal tissues, algorithms enforce a strict **fractional anisotropy termination threshold**, arresting progression when encountering isotropic fluids. Furthermore, imposing an anatomical **tractographic curvature angle limit** prevents unbiological sharp reversals across successive voxels. However, classic single-tensor architectures frequently suffer from the fatal **fiber crossing kissing artifact**, which collapses anisotropy at intersections of diverging fiber pathways. To overcome this limitation, advanced neuroimaging employs **constrained spherical deconvolution**, extracting complex multi-fiber profiles from high-dimensional diffusion signals. This mathematical inversion yields a localized **fiber orientation distribution function**, displaying distinct directional peaks for every intersecting sub-bundle. Generating these high-order datasets requires acquiring multi-directional **high angular resolution diffusion imaging** protocols with expanded diffusion gradients. Rather than relying solely on deterministic vectors, investigators model spatial uncertainty using **probabilistic tractography dispersion**, which calculates the statistical spread of structural pathways across divergent anatomy. At the biological level, diffusion anisotropy remains fundamentally constrained by the **myelin sheath microstructural barrier**, whose hydrophobic lipid bilayers prevent perpendicular water leakage. For robust multi-subject population studies, researchers implement **tract-based spatial statistics**, mapping localized scalar values onto a shared **white matter connectome skeleton** to bypass registration misalignments. Finally, before calculating tensor metrics, raw gradient volumes must pass through robust **eddy current distortion correction** routines to eliminate spatial stretching and shear artifacts.

**Bản dịch tiếng Việt:**

Để lần theo các bó sợi trục tầm xa qua các vùng vỏ não, các nền tảng hình ảnh thần kinh triển khai **deterministic streamline tractography** để lắp ráp các quỹ đạo kết nối. Một sự thực thi kinh điển của khuôn khổ này là **Fiber Assignment by Continuous Tracking**, vốn kết nối các không gian voxel rời rạc bằng cách lan truyền các đoạn thẳng dọc theo các tọa độ vectơ riêng cục bộ. Để tránh lan truyền các đường dòng chảy vào các mô không phải sợi trục, các thuật toán thực thi một **fractional anisotropy termination threshold** nghiêm ngặt, bắt giữ sự tiến triển khi bắt gặp các chất dịch đẳng hướng. Hơn nữa, việc áp đặt một **tractographic curvature angle limit** mang tính giải phẫu ngăn chặn các sự đảo ngược gấp khúc phi sinh học qua các voxel liên tiếp. Tuy nhiên, các kiến trúc đơn tensor kinh điển thường xuyên phải chịu đựng **fiber crossing kissing artifact** chết người, vốn làm sụp đổ tính dị hướng tại các giao điểm của các con đường sợi phân kỳ. Để khắc phục hạn chế này, hình ảnh thần kinh tiên tiến sử dụng **constrained spherical deconvolution**, trích xuất các mặt cắt đa sợi phức tạp từ các tín hiệu khuếch tán đa chiều. Sự nghịch đảo toán học này mang lại một **fiber orientation distribution function** cục bộ, hiển thị các đỉnh định hướng riêng biệt cho mọi bó phụ giao nhau. Việc tạo ra các bộ dữ liệu bậc cao này đòi hỏi phải thu nhận các quy trình **high angular resolution diffusion imaging** đa hướng với các gradient khuếch tán mở rộng. Thay vì chỉ dựa vào các vectơ tất định, các điều tra viên lập mô hình sự bất định không gian bằng cách sử dụng **probabilistic tractography dispersion**, vốn tính toán sự lan tỏa thống kê của các con đường cấu trúc qua các giải phẫu phân kỳ. Ở cấp độ sinh học, tính dị hướng khuếch tán về cơ bản vẫn bị hạn chế bởi **myelin sheath microstructural barrier**, các lớp kép lipid kỵ nước của nó ngăn chặn sự rò rỉ nước vuông góc. Đối với các nghiên cứu quần thể đa đối tượng vững chắc, các nhà nghiên cứu triển khai **tract-based spatial statistics**, lập bản đồ các giá trị vô hướng cục bộ lên một **white matter connectome skeleton** dùng chung để bỏ qua các sự căn chỉnh sai vị trí khi đăng ký ảnh. Cuối cùng, trước khi tính toán các chỉ số tensor, các thể tích gradient thô phải đi qua các quy trình **eddy current distortion correction** mạnh mẽ để loại bỏ các biến dạng kéo dãn và trượt trong không gian.
