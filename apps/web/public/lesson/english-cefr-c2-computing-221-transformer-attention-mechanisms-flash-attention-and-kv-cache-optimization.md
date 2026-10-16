# C2 Vocabulary 221 — Transformer attention mechanisms, FlashAttention IO-awareness, and KV cache memory optimization

## 1. scaled dot-product attention
- **IPA**: /skeɪld dɑt-ˈprɑdəkt əˈtɛnʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong các mô hình học máy và kiến trúc Transformer.
- **Core meaning — English**: The fundamental building block of transformer neural networks that calculates alignment scores between query and key tensors, scaled by the square root of the key dimension to stabilize gradients.
- **Core meaning & mental image — Tiếng Việt**: Cơ chế chú ý tích vô hướng có tỉ lệ — Hình ảnh một chiếc đèn pha thông minh chiếu rọi vào các từ khóa liên quan nhất trong câu dựa trên độ tương đồng toán học, với cường độ sáng được điều chỉnh cân bằng để không làm lóa mắt mô hình.
- **Grammar & collocations**: 
  - compute scaled dot-product attention (tính toán cơ chế chú ý tích vô hướng có tỉ lệ)
  - scaled dot-product attention mechanism (cơ chế chú ý tích vô hướng có tỉ lệ)
  - optimized scaled dot-product attention kernel (nhân tính toán chú ý tích vô hướng được tối ưu hóa)
- **Register & nuance**: Thuật ngữ chuyên sâu học máy và xử lý ngôn ngữ tự nhiên (Advanced Machine Learning & NLP Architecture).
- **Examples**:
  - Modern transformer architectures rely heavily on parallelized scaled dot-product attention to capture long-range semantic dependencies in text. (Các kiến trúc Transformer hiện đại phụ thuộc nhiều vào cơ chế chú ý tích vô hướng có tỉ lệ được song song hóa để nắm bắt các phụ thuộc ngữ nghĩa tầm xa trong văn bản.)
- **Liên kết tiếng Hàn**: 스케일드 닷 프로덕트 어텐션 (seukeildeu dat peurodeukteu eotensyeon) — Cơ chế chú ý tích vô hướng có tỉ lệ trong mạng Transformer.

## 2. FlashAttention IO-aware tiling
- **IPA**: /ˈflæʃəˌtɛnʃən aɪ-oʊ-əˈwɛr ˈtaɪlɪŋ/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong tối ưu hóa phần cứng và GPU kernel.
- **Core meaning — English**: An exact attention algorithm that reduces memory access overhead by tiling query, key, and value tensors into fast on-chip SRAM to avoid costly reads and writes to high-bandwidth global memory.
- **Core meaning & mental image — Tiếng Việt**: Kỹ thuật phân ô nhận biết xuất nhập FlashAttention — Hình ảnh một người thợ gạch khéo léo chia sân thành từng ô nhỏ vừa vặn để làm việc ngay trong tầm tay mà không phải liên tục chạy ra kho lớn lấy vật liệu mỗi khi đặt một viên gạch.
- **Grammar & collocations**: 
  - implement FlashAttention IO-aware tiling (triển khai phân ô nhận biết xuất nhập FlashAttention)
  - FlashAttention IO-aware tiling algorithm (thuật toán phân ô nhận biết xuất nhập FlashAttention)
  - accelerate models via FlashAttention IO-aware tiling (tăng tốc mô hình thông qua phân ô FlashAttention)
- **Register & nuance**: Thuật ngữ kỹ thuật tối ưu hóa GPU và hiệu năng cao (GPU Kernel Optimization & HPC).
- **Examples**:
  - By leveraging FlashAttention IO-aware tiling, the training pipeline avoids massive memory bottlenecks and speeds up transformer execution significantly. (Bằng cách tận dụng kỹ thuật phân ô nhận biết xuất nhập FlashAttention, quy trình huấn luyện tránh được các điểm nghẽn bộ nhớ lớn và tăng tốc đáng kể việc thực thi Transformer.)
- **Liên kết tiếng Hàn**: 플래시 어텐션 입출력 인식 타일링 (peullaesi eotensyeon ibchullyeok insik tailing) — Kỹ thuật chia khối dữ liệu của FlashAttention để tối ưu hóa bộ nhớ đệm SRAM trên GPU.

## 3. key-value (KV) cache compression
- **IPA**: /ki-ˈvælju (keɪ-vi) kæʃ kəmˈprɛʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong tối ưu hóa suy luận mô hình ngôn ngữ lớn.
- **Core meaning — English**: The technique of reducing the memory footprint of stored keys and activations during autoregressive generation through quantization, pruning, or eviction strategies.
- **Core meaning & mental image — Tiếng Việt**: Nén bộ nhớ đệm khóa-giá trị (KV) — Hình ảnh việc cô đọng và sắp xếp gọn gàng các ghi chép lịch sử hội thoại vào những cuốn sổ tay nhỏ gọn để tiết kiệm không gian bàn làm việc trong suốt buổi trò chuyện dài.
- **Grammar & collocations**: 
  - apply key-value cache compression (áp dụng nén bộ nhớ đệm KV)
  - key-value cache compression technique (kỹ thuật nén bộ nhớ đệm KV)
  - effective key-value cache compression ratio (tỷ lệ nén bộ nhớ đệm KV hiệu quả)
- **Register & nuance**: Thuật ngữ chuyên ngành suy luận mô hình ngôn ngữ lớn (LLM Inference Optimization).
- **Examples**:
  - Deploying key-value cache compression allows servers to handle much longer context windows without running out of GPU memory. (Việc triển khai nén bộ nhớ đệm KV cho phép các máy chủ xử lý các cửa sổ ngữ cảnh dài hơn nhiều mà không bị cạn kiệt bộ nhớ GPU.)
- **Liên kết tiếng Hàn**: 키-값 캐시 압축 (ki-gap kae-si apchuk) — Kỹ thuật nén bộ nhớ đệm khóa-giá trị trong mô hình ngôn ngữ lớn.

## 4. multi-head attention projection
- **IPA**: /ˈmʌlti-hɛd əˈtɛnʃən prəˈdɛkʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong cấu trúc mạng thần kinh.
- **Core meaning — English**: The linear transformation mechanism that splits hidden representations into multiple subspaces, allowing the model to jointly attend to information from different representation subspaces.
- **Core meaning & mental image — Tiếng Việt**: Phép chiếu chú ý đa đầu — Hình ảnh một ban hội thẩm gồm nhiều chuyên gia cùng lúc quan sát một vụ việc từ nhiều góc độ khác nhau để đưa ra cái nhìn toàn diện nhất.
- **Grammar & collocations**: 
  - compute multi-head attention projection (tính toán phép chiếu chú ý đa đầu)
  - multi-head attention projection weights (trọng số phép chiếu chú ý đa đầu)
  - parallel multi-head attention projection (phép chiếu chú ý đa đầu song song)
- **Register & nuance**: Thuật ngữ tiêu chuẩn trong kiến trúc Transformer (Transformer Network Architecture).
- **Examples**:
  - The multi-head attention projection layer projects input tokens into query, key, and value matrices across multiple independent representation subspaces. (Lớp chiếu chú ý đa đầu chiếu các token đầu vào thành các ma trận truy vấn, khóa và giá trị trên nhiều không gian con biểu diễn độc lập.)
- **Liên kết tiếng Hàn**: 멀티 헤드 어텐션 프로젝션 (meolti hedeu eotensyeon peurojekseon) — Phép chiếu chú ý đa đầu trong mạng Transformer.

## 5. grouped-query attention (GQA)
- **IPA**: /ɡrupt-ˈkwɪri əˈtɛnʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong tối ưu hóa mô hình ngôn ngữ.
- **Core meaning — English**: An attention variant that interpolates between multi-head attention and multi-query attention by sharing key-value heads across multiple query heads to reduce memory bandwidth requirements.
- **Core meaning & mental image — Tiếng Việt**: Cơ chế chú ý truy vấn nhóm — Hình ảnh một nhóm nhân viên tư vấn cùng chia sẻ một kho tài liệu tham khảo chung thay vì mỗi người tự giữ một bộ tài liệu riêng biệt, giúp tiết kiệm không gian và thời gian.
- **Grammar & collocations**: 
  - adopt grouped-query attention (áp dụng cơ chế chú ý truy vấn nhóm)
  - grouped-query attention architecture (kiến trúc chú ý truy vấn nhóm)
  - evaluate grouped-query attention performance (đánh giá hiệu năng chú ý truy vấn nhóm)
- **Register & nuance**: Thuật ngữ thiết kế kiến trúc LLM hiện đại (Modern LLM Design Architecture).
- **Examples**:
  - By adopting grouped-query attention, the model achieves inference speeds close to multi-query attention while retaining nearly the quality of standard multi-head attention. (Bằng cách áp dụng cơ chế chú ý truy vấn nhóm, mô hình đạt được tốc độ suy luận gần bằng chú ý đa truy vấn trong khi vẫn giữ nguyên gần như chất lượng của chú ý đa đầu chuẩn.)
- **Liên kết tiếng Hàn**: 그룹화된 쿼리 어텐션 (geurup-hwadoen kwori eotensyeon) — Cơ chế chú ý truy vấn nhóm tối ưu hóa băng thông bộ nhớ.

## 6. sliding window local attention
- **IPA**: /ˈslaɪdɪŋ ˈwɪndoʊ ˈloʊkəl əˈtɛnʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong các mô hình xử lý chuỗi dài.
- **Core meaning — English**: An attention mechanism where each token only attends to neighboring tokens within a fixed local window, reducing computational complexity from quadratic to linear with respect to sequence length.
- **Core meaning & mental image — Tiếng Việt**: Cơ chế chú ý cục bộ cửa sổ trượt — Hình ảnh việc nhìn qua một khung cửa sổ nhỏ chỉ quan sát các vật thể ở ngay gần xung quanh và trượt dần theo bước đi của người quan sát thay vì nhìn toàn bộ bức tranh lớn cùng một lúc.
- **Grammar & collocations**: 
  - implement sliding window local attention (triển khai cơ chế chú ý cục bộ cửa sổ trượt)
  - sliding window local attention mask (mặt nạ chú ý cục bộ cửa sổ trượt)
  - efficient sliding window local attention (chú ý cục bộ cửa sổ trượt hiệu quả)
- **Register & nuance**: Thuật ngữ chuyên ngành xử lý ngữ cảnh dài (Long-Context Transformer Modeling).
- **Examples**:
  - Sliding window local attention allows efficient processing of extremely long documents without incurring explosive memory consumption. (Chú ý cục bộ cửa sổ trượt cho phép xử lý hiệu quả các tài liệu cực dài mà không gây ra mức tiêu thụ bộ nhớ bùng nổ.)
- **Liên kết tiếng Hàn**: 슬라이딩 윈도우 로컬 어텐션 (seullaiding windou rokeol eotensyeon) — Cơ chế chú ý cục bộ giới hạn phạm vi trong một cửa sổ trượt.

## 7. High Bandwidth Memory (HBM) bandwidth bottleneck
- **IPA**: /haɪ ˈbændwɪdθ ˈmɛməri ˈbændwɪdθ ˈbɑtəlˌnɛk/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong phân tích hiệu năng phần cứng.
- **Core meaning — English**: The performance constraint where the rate at which data can be transferred from high-speed stacked DRAM to processor execution units limits overall AI model training and inference speed.
- **Core meaning & mental image — Tiếng Việt**: Điểm nghẽn băng thông bộ nhớ băng thông cao (HBM) — Hình ảnh một đường ống nước siêu lớn nhưng miệng vòi dẫn vào nhà máy vẫn bị hẹp, khiến dòng nước không thể chảy vào nhanh bằng tốc độ máy móc tiêu thụ.
- **Grammar & collocations**: 
  - overcome High Bandwidth Memory bandwidth bottleneck (vượt qua điểm nghẽn băng thông HBM)
  - mitigate High Bandwidth Memory bandwidth bottleneck (giảm thiểu điểm nghẽn băng thông HBM)
  - severe High Bandwidth Memory bandwidth bottleneck (điểm nghẽn băng thông HBM nghiêm trọng)
- **Register & nuance**: Thuật ngữ kỹ thuật phần cứng và kiến trúc bộ tăng tốc AI (AI Accelerator Hardware Architecture).
- **Examples**:
  - Autoregressive generation is fundamentally constrained by the High Bandwidth Memory bandwidth bottleneck during KV cache retrieval. (Quá trình sinh tự hồi tiếp bị hạn chế cơ bản bởi điểm nghẽn băng thông HBM trong quá trình truy xuất bộ nhớ đệm KV.)
- **Liên kết tiếng Hàn**: 고대역폭 메모리 대역폭 병목 현상 (go-daeyeok-pok memori daeyeok-pok byeongmok hyeonsang) — Hiện tượng thắt cổ chai băng thông bộ nhớ HBM trong xử lý AI.

## 8. SRAM tile-level kernel fusion
- **IPA**: /ˈɛs-ɑr-eɪ-ɛm taɪl-ˈlɛvəl ˈkɜrnəl ˈfyuʒən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong tối ưu hóa phần mềm hệ thống AI.
- **Core meaning — English**: The compiler optimization strategy that combines multiple adjacent operations into a single GPU kernel operating entirely within fast on-chip SRAM cache tiles.
- **Core meaning & mental image — Tiếng Việt**: Hợp nhất nhân cấp ô SRAM — Hình ảnh việc gom nhiều công đoạn gia công nhỏ thành một dây chuyền khép kín ngay trên chiếc bàn làm việc gần tay thợ nhất, loại bỏ hoàn toàn việc phải đem sản phẩm ra kho lớn giữa các bước.
- **Grammar & collocations**: 
  - execute SRAM tile-level kernel fusion (thực hiện hợp nhất nhân cấp ô SRAM)
  - SRAM tile-level kernel fusion optimization (tối ưu hóa hợp nhất nhân cấp ô SRAM)
  - compiler-driven SRAM tile-level kernel fusion (hợp nhất nhân cấp ô SRAM do trình biên dịch điều khiển)
- **Register & nuance**: Thuật ngữ chuyên sâu tối ưu hóa trình biên dịch học máy (ML Compiler & Code Generation).
- **Examples**:
  - SRAM tile-level kernel fusion eliminates intermediate global memory roundtrips, boosting execution efficiency significantly. (Hợp nhất nhân cấp ô SRAM loại bỏ các lượt đọc ghi bộ nhớ toàn cục trung gian, giúp nâng cao đáng kể hiệu suất thực thi.)
- **Liên kết tiếng Hàn**: SRAM 타일 수준 커널 융합 (SRAM tail sujeun keoneol yung-hap) — Kỹ thuật hợp nhất các hàm tính toán trên chip sử dụng bộ nhớ đệm SRAM.

## 9. rotary position embedding (RoPE)
- **IPA**: /ˈroʊtəri pəˈzɪʃən ɛmˈbɛdɪŋ/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong mã hóa vị trí Transformer.
- **Core meaning — English**: A positional encoding technique that encodes token positions by applying a rotation matrix to the query and key vectors in complex vector spaces, naturally capturing relative distances.
- **Core meaning & mental image — Tiếng Việt**: Mã hóa vị trí xoay — Hình ảnh việc gắn các tọa độ góc xoay lên từng bánh răng của đồng hồ, sao cho khoảng cách góc giữa các kim đồng hồ phản ánh chính xác khoảng cách tương đối giữa các từ trong câu.
- **Grammar & collocations**: 
  - implement rotary position embedding (triển khai mã hóa vị trí xoay)
  - rotary position embedding formulation (công thức mã hóa vị trí xoay)
  - scale rotary position embedding context (mở rộng ngữ cảnh mã hóa vị trí xoay)
- **Register & nuance**: Thuật ngữ tiêu chuẩn trong các mô hình ngôn ngữ lớn hiện đại (Modern LLM Positional Encoding).
- **Examples**:
  - State-of-the-art language models adopt rotary position embedding to seamlessly extrapolate to context windows far exceeding their training lengths. (Các mô hình ngôn ngữ tiên tiến áp dụng mã hóa vị trí xoay để ngoại suy mượt mà sang các cửa sổ ngữ cảnh vượt xa độ dài huấn luyện của chúng.)
- **Liên kết tiếng Hàn**: 로터리 위치 임베딩 (roteori wichi imbeding) — Kỹ thuật mã hóa vị trí dạng xoay trong các mô hình Transformer hiện đại.

## 10. quadratic attention time complexity
- **IPA**: /kwəˈdrætɪk əˈtɛnʃən taɪm kəmˈplɛsəti/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong phân tích độ phức tạp thuật toán.
- **Core meaning — English**: The mathematical property of standard attention where computational and memory costs scale with the square of the input sequence length.
- **Core meaning & mental image — Tiếng Việt**: Độ phức tạp thời gian chú ý bậc hai — Hình ảnh việc số lượng đường dây điện thoại cần kết nối tăng vọt theo cấp số nhân bình phương khi số lượng hộ dân trong thị trấn ngày càng đông lên.
- **Grammar & collocations**: 
  - overcome quadratic attention time complexity (vượt qua độ phức tạp thời gian chú ý bậc hai)
  - quadratic attention time complexity barrier (rào cản độ phức tạp thời gian chú ý bậc hai)
  - analyze quadratic attention time complexity (phân tích độ phức tạp thời gian chú ý bậc hai)
- **Register & nuance**: Thuật ngữ lý thuyết độ phức tạp thuật toán học máy (Machine Learning Algorithm Complexity).
- **Examples**:
  - The quadratic attention time complexity makes processing long documents computationally prohibitive without architectural approximations. (Độ phức tạp thời gian chú ý bậc hai khiến việc xử lý các tài liệu dài trở nên bất khả thi về mặt tính toán nếu không có các xấp xỉ kiến trúc.)
- **Liên kết tiếng Hàn**: 이차 어텐션 시간 복잡도 (icha eotensyeon sigan bokjapdo) — Độ phức tạp tính toán tăng theo bình phương độ dài chuỗi trong cơ chế chú ý chuẩn.

## 11. causal language model masking
- **IPA**: /ˈkɔzəl ˈlæŋɡwɪj ˈmɑdəl ˈmæskɪŋ/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong thiết kế mô hình ngôn ngữ tự hồi tiếp.
- **Core meaning — English**: The triangular attention mask applied in decoder-only transformers to prevent tokens from attending to future tokens in the sequence during training and inference.
- **Core meaning & mental image — Tiếng Việt**: Mặt nạ mô hình ngôn ngữ nhân quả — Hình ảnh việc che khuất nửa trên của bảng điểm tương lai, buộc người đọc chỉ được phép nhìn về quá khứ và hiện tại chứ không được phép liếc xem đáp án ở phần sau.
- **Grammar & collocations**: 
  - apply causal language model masking (áp dụng mặt nạ mô hình ngôn ngữ nhân quả)
  - causal language model masking matrix (ma trận mặt nạ mô hình ngôn ngữ nhân quả)
  - enforce causal language model masking (thực thi mặt nạ mô hình ngôn ngữ nhân quả)
- **Register & nuance**: Thuật ngữ chuyên ngành kiến trúc mô hình ngôn ngữ tự hồi tiếp (Autoregressive LLM Design).
- **Examples**:
  - Causal language model masking is essential during pre-training to ensure that models learn generation rather than simple memorization. (Mặt nạ mô hình ngôn ngữ nhân quả rất cần thiết trong quá trình tiền huấn luyện để đảm bảo các mô hình học cách sinh văn bản thay vì chỉ ghi nhớ đơn thuần.)
- **Liên kết tiếng Hàn**: 인과적 언어 모델 마스킹 (ingwajeok eon-eo모델 masking) — Mặt nạ nhân quả ngăn chặn mô hình nhìn thấy các token tương lai trong mạng tự hồi tiếp.

## 12. attention matrix materialization avoidance
- **IPA**: /əˈtɛnʃən ˈmeɪtrɪks məˌtɪriəlɪˈzeɪʃən əˈvɔɪdəns/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong tối ưu hóa bộ nhớ GPU.
- **Core meaning — English**: The algorithmic optimization strategy of computing attention outputs on-the-fly without ever fully storing the massive $N \times N$ attention score matrix in global memory.
- **Core meaning & mental image — Tiếng Việt**: Tránh hiện thực hóa ma trận chú ý — Hình ảnh việc tính toán nhẩm kết quả phép nhân trực tiếp trong đầu thay vì phải viết ra một bảng nháp khổng lồ chiếm hết chỗ trên mặt bàn.
- **Grammar & collocations**: 
  - achieve attention matrix materialization avoidance (đạt được việc tránh hiện thực hóa ma trận chú ý)
  - attention matrix materialization avoidance strategy (chiến lược tránh hiện thực hóa ma trận chú ý)
  - memory savings via attention matrix materialization avoidance (tiết kiệm bộ nhớ thông qua tránh hiện thực hóa ma trận chú ý)
- **Register & nuance**: Thuật ngữ kỹ thuật tối ưu hóa phần cứng và phần mềm AI cao cấp (Advanced AI Software Optimization).
- **Examples**:
  - Attention matrix materialization avoidance is the primary reason FlashAttention can handle long sequences without running out of VRAM. (Việc tránh hiện thực hóa ma trận chú ý là lý do chính giúp FlashAttention có thể xử lý các chuỗi dài mà không bị cạn kiệt VRAM.)
- **Liên kết tiếng Hàn**: 어텐션 행렬 실체화 회피 (eotensyeon haengryeol silche-hwa hoepi) — Kỹ thuật tránh lưu trữ toàn bộ ma trận chú ý lớn trong bộ nhớ để tiết kiệm tài nguyên.

## 13. continuous batching token scheduling
- **IPA**: /kənˈtɪnyuwəs ˈbæʧɪŋ ˈtoʊkən ˈskɛdʊlɪŋ/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong hệ thống phục vụ mô hình ngôn ngữ.
- **Core meaning — English**: An inference scheduling technique that inserts new request sequences into running GPU batches at the granularity of individual tokens rather than waiting for entire request prompts to complete.
- **Core meaning & mental image — Tiếng Việt**: Lập lịch token theo lô liên tục — Hình ảnh một nhân viên thu ngân linh hoạt nhận thêm khách hàng mới bước vào hàng đợi ngay khi một vị khách trước vừa thanh toán xong một món hàng, thay vì đợi cả đoàn khách mua xong hết mới đón đoàn mới.
- **Grammar & collocations**: 
  - implement continuous batching token scheduling (triển khai lập lịch token theo lô liên tục)
  - continuous batching token scheduling framework (khung lập lịch token theo lô liên tục)
  - high-throughput continuous batching token scheduling (lập lịch token theo lô liên tục thông lượng cao)
- **Register & nuance**: Thuật ngữ hệ thống phục vụ mô hình ngôn ngữ lớn (LLM Serving Systems & MLOps).
- **Examples**:
  - Continuous batching token scheduling drastically improves GPU utilization and reduces serving latency for chatbot applications. (Lập lịch token theo lô liên tục cải thiện đáng kể hiệu suất sử dụng GPU và giảm độ trễ phục vụ cho các ứng dụng chatbot.)
- **Liên kết tiếng Hàn**: 연속 배칭 토큰 스케줄링 (yeon-sok baech-ing tokeun seukejulling) — Kỹ thuật lập lịch token liên tục để tối ưu hóa hiệu suất phục vụ mô hình.

## 14. speculative decoding inference speedup
- **IPA**: /ˈspɛkyələtɪv dɪˈkoʊdɪŋ ˈɪnfərəns ˈspidʌp/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong tăng tốc suy luận mô hình.
- **Core meaning — English**: A performance enhancement method where a fast, lightweight draft model proposes several candidate tokens that are then verified in parallel by a larger target model in a single forward pass.
- **Core meaning & mental image — Tiếng Việt**: Tăng tốc suy luận giải mã dự đoán — Hình ảnh một học việc nhanh nhảu phác thảo trước một đoạn văn, rồi chuyên gia chính chỉ cần liếc qua và gật đầu phê duyệt hàng loạt thay vì tự viết từng chữ từ đầu.
- **Grammar & collocations**: 
  - achieve speculative decoding inference speedup (đạt được tốc độ tăng tốc suy luận giải mã dự đoán)
  - speculative decoding inference speedup factor (hệ số tăng tốc suy luận giải mã dự đoán)
  - leverage speculative decoding inference speedup (tận dụng tốc độ tăng tốc suy luận giải mã dự đoán)
- **Register & nuance**: Thuật ngữ chuyên sâu tối ưu hóa suy luận LLM (Advanced LLM Inference Optimization).
- **Examples**:
  - Speculative decoding inference speedup allows production clusters to serve large language models with significantly reduced hardware costs. (Tăng tốc suy luận giải mã dự đoán cho phép các cụm sản xuất phục vụ các mô hình ngôn ngữ lớn với chi phí phần cứng giảm đáng kể.)
- **Liên kết tiếng Hàn**: 스펙머티브 디코딩 추론 가속 (sepek-keulative dikoding churon gaseok) — Phương pháp tăng tốc suy luận bằng cách dùng mô hình nhỏ dự đoán và mô hình lớn kiểm tra.

## 15. token generation memory footprint
- **IPA**: /ˈtoʊkən ˌdʒɛnəˈreɪʃən ˈmɛməri ˈfʊtprɪnt/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong quản lý tài nguyên hệ thống.
- **Core meaning — English**: The amount of volatile memory consumed by model weights, activations, and KV caches during the autoregressive text generation phase.
- **Core meaning & mental image — Tiếng Việt**: Dấu chân bộ nhớ sinh token — Hình ảnh lượng không gian trên bàn làm việc ngày càng phình to ra khi các chồng tài liệu mới liên tục được sinh ra và tích lũy trong suốt buổi làm việc.
- **Grammar & collocations**: 
  - minimize token generation memory footprint (giảm thiểu dấu chân bộ nhớ sinh token)
  - evaluate token generation memory footprint (đánh giá dấu chân bộ nhớ sinh token)
  - massive token generation memory footprint (dấu chân bộ nhớ sinh token lớn)
- **Register & nuance**: Thuật ngữ quản lý tài nguyên phần cứng AI (AI Hardware Resource Management).
- **Examples**:
  - Optimizing the token generation memory footprint is critical for deploying high-concurrency LLM services on limited GPU clusters. (Tối ưu hóa dấu chân bộ nhớ sinh token là tối quan trọng để triển khai các dịch vụ LLM đồng thời cao trên các cụm GPU hạn chế.)
- **Liên kết tiếng Hàn**: 토큰 생성 메모리 풋프린트 (tokeun saengseong memori put-peurinteu) — Dung lượng bộ nhớ tiêu thụ trong quá trình sinh token của mô hình ngôn ngữ.

## 16. tensor parallelism shard dimension
- **IPA**: /ˈtɛnsər ˈpɛrəˌlɛlɪzəm ʃɑrd dɪˈmɛnʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong tính toán phân tán.
- **Core meaning — English**: The specific matrix axis along which weights and activations are divided and distributed across multiple GPUs in tensor-parallel model training setups.
- **Core meaning & mental image — Tiếng Việt**: Chiều phân mảnh song song tensor — Hình ảnh việc cắt một tấm bản đồ lớn thành các mảnh nhỏ theo chiều dọc hoặc chiều ngang để giao cho nhiều người thợ cùng lúc vẽ chi tiết.
- **Grammar & collocations**: 
  - configure tensor parallelism shard dimension (cấu hình chiều phân mảnh song song tensor)
  - tensor parallelism shard dimension strategy (chiến lược chiều phân mảnh song song tensor)
  - optimize tensor parallelism shard dimension (tối ưu hóa chiều phân mảnh song song tensor)
- **Register & nuance**: Thuật ngữ chuyên ngành huấn luyện mô hình phân tán quy mô lớn (Distributed Deep Learning Training).
- **Examples**:
  - Choosing the correct tensor parallelism shard dimension minimizes inter-GPU communication overhead during megasale model execution. (Việc chọn đúng chiều phân mảnh song song tensor giúp giảm thiểu chi phí giao tiếp liên GPU trong quá trình thực thi mô hình lớn.)
- **Liên kết tiếng Hàn**: 텐서 병렬화 샤드 차원 (tenseo byeongryeol-hwa syadeu chawon) — Trục phân chia ma trận trọng số trong mô hình tính toán song song tensor.

## 17. pipeline parallel stage bubble
- **IPA**: /ˈpaɪplaɪn ˈpɛrəˌlɛl steɪʤ ˈbʌbəl/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong phân tích hiệu năng hệ thống phân tán.
- **Core meaning — English**: The idle time experienced by GPU accelerators in a pipelined model execution setup while waiting for activations or gradients from preceding or succeeding pipeline stages.
- **Core meaning & mental image — Tiếng Việt**: Khoảng trống bong bóng giai đoạn song song đường ống — Hình ảnh những khoảng thời gian trống trên băng chuyền nhà máy khi một công nhân phải đứng chờ nguyên liệu từ công đoạn trước chuyển đến mà chưa thể làm việc tiếp.
- **Grammar & collocations**: 
  - reduce pipeline parallel stage bubble (giảm thiểu khoảng trống bong bóng giai đoạn song song đường ống)
  - pipeline parallel stage bubble overhead (chi phí khoảng trống bong bóng giai đoạn song song đường ống)
  - minimize pipeline parallel stage bubble delay (giểu thiểu độ trễ khoảng trống bong bóng giai đoạn song song đường ống)
- **Register & nuance**: Thuật ngữ kỹ thuật hệ thống huấn luyện phân tán (Distributed Training Infrastructure).
- **Examples**:
  - Advanced scheduling algorithms like interleaved 1F1B help minimize the pipeline parallel stage bubble in massive LLM training runs. (Các thuật toán lập lịch tiên tiến như 1F1B đan xen giúp giảm thiểu khoảng trống bong bóng giai đoạn song song đường ống trong các đợt huấn luyện LLM quy mô lớn.)
- **Liên kết tiếng Hàn**: 파이프라인 병렬 단계 버블 (paipeurain byeongryeol dang-ye-beobeul) — Thời gian nhàn rỗi của GPU trong mô hình huấn luyện phân tán theo đường ống.

## 18. flash decoding split-KV reduction
- **IPA**: /ˈflæʃ dɪˈkoʊdɪŋ splɪt-keɪ-vi rɪˈdʌkʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong tối ưu hóa giải mã GPU.
- **Core meaning — English**: An inference optimization technique that partitions the long KV cache sequence across multiple thread blocks, computes partial attention sums in parallel, and merges them via a reduction kernel.
- **Core meaning & mental image — Tiếng Việt**: Giảm thiểu chia tách KV giải mã Flash — Hình ảnh việc chia một chồng hồ sơ lớn thành nhiều phần nhỏ cho nhiều nhân viên cùng tra cứu song song, sau đó gom kết quả lại bằng một bước tổng hợp nhanh chóng.
- **Grammar & collocations**: 
  - implement flash decoding split-KV reduction (triển khai giảm thiểu chia tách KV giải mã Flash)
  - flash decoding split-KV reduction kernel (nhân giảm thiểu chia tách KV giải mã Flash)
  - accelerate generation via flash decoding split-KV reduction (tăng tốc sinh văn bản qua giảm thiểu chia tách KV giải mã Flash)
- **Register & nuance**: Thuật ngữ kỹ thuật tối ưu hóa nhân GPU cho LLM (GPU Kernel Engineering for LLMs).
- **Examples**:
  - Flash decoding split-KV reduction dramatically accelerates the prefill and early generation stages for very long context prompts. (Kỹ thuật giảm thiểu chia tách KV giải mã Flash tăng tốc đáng kể các giai đoạn điền trước và sinh sớm cho các lời nhắc có ngữ cảnh rất dài.)
- **Liên kết tiếng Hàn**: 플래시 디코딩 분할-KV 리덕션 (peullaesi dikoding bunhal-KV rideok-syeon) — Kỹ thuật chia nhỏ bộ nhớ đệm KV để tính toán song song trong FlashDecoding.

## 19. context length sequence scaling
- **IPA**: /ˈkɑntɛkst lɛŋθ ˈsikwəns ˈskeɪlɪŋ/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong nghiên cứu độ dài ngữ cảnh mô hình.
- **Core meaning — English**: The capability and methodology of extending transformer models to process input text lengths scaling from thousands to millions of tokens while maintaining coherence.
- **Core meaning & mental image — Tiếng Việt**: Mở rộng quy mô độ dài chuỗi ngữ cảnh — Hình ảnh việc nới rộng dung lượng của chiếc tủ đựng hồ sơ từ mức vài cuốn sách lên tới quy mô cả thư viện quốc gia mà các nhân viên vẫn tìm kiếm thông tin mạch lạc.
- **Grammar & collocations**: 
  - achieve context length sequence scaling (đạt được việc mở rộng quy mô độ dài chuỗi ngữ cảnh)
  - context length sequence scaling technique (kỹ thuật mở rộng quy mô độ dài chuỗi ngữ cảnh)
  - test context length sequence scaling limits (kiểm tra giới hạn mở rộng quy mô độ dài chuỗi ngữ cảnh)
- **Register & nuance**: Thuật ngữ chuyên ngành nghiên cứu phát triển mô hình ngôn ngữ tiên tiến (Advanced LLM Research).
- **Examples**:
  - Innovations in positional embeddings and memory management have enabled unprecedented context length sequence scaling in recent foundational models. (Các đổi mới trong mã hóa vị trí và quản lý bộ nhớ đã cho phép mở rộng quy mô độ dài chuỗi ngữ cảnh chưa từng có ở các mô hình nền tảng gần đây.)
- **Liên kết tiếng Hàn**: 컨텍스트 길이 시퀀스 스케일링 (kontekseu giri sikeunseu sekeiling) — Kỹ thuật mở rộng độ dài chuỗi ngữ cảnh của mô hình ngôn ngữ.

## 20. quantization-aware KV cache
- **IPA**: /ˈkwɑntɪzeɪʃən-əˈwɛr keɪ-vi kæʃ/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong nén mô hình ngôn ngữ lớn.
- **Core meaning — English**: A stored key-value cache representation compressed from 16-bit floating-point down to lower precision formats like 8-bit or 4-bit integers with minimal perplexity degradation.
- **Core meaning & mental image — Tiếng Việt**: Bộ nhớ đệm KV nhận biết lượng tử hóa — Hình ảnh việc thu gọn các con số chi tiết thành dạng viết tắt có chọn lọc kỹ lưỡng sao cho vẫn giữ nguyên nghĩa cốt lõi mà không chiếm nhiều chỗ lưu trữ.
- **Grammar & collocations**: 
  - deploy quantization-aware KV cache (triển khai bộ nhớ đệm KV nhận biết lượng tử hóa)
  - quantization-aware KV cache compression (nén bộ nhớ đệm KV nhận biết lượng tử hóa)
  - evaluate quantization-aware KV cache accuracy (đánh giá độ chính xác bộ nhớ đệm KV nhận biết lượng tử hóa)
- **Register & nuance**: Thuật ngữ chuyên sâu tối ưu hóa bộ nhớ suy luận LLM (LLM Inference Memory Optimization).
- **Examples**:
  - A quantization-aware KV cache reduces memory consumption by half, enabling double the batch size during concurrent user serving. (Bộ nhớ đệm KV nhận biết lượng tử hóa làm giảm một nửa lượng tiêu thụ bộ nhớ, cho phép gấp đôi kích thước lô trong quá trình phục vụ người dùng đồng thời.)
- **Liên kết tiếng Hàn**: 양자화 인식 KV 캐시 (yangjawa insik KV kae-si) — Bộ nhớ đệm khóa-giá trị được nén qua lượng tử hóa để tiết kiệm bộ nhớ.

## 21. cross-attention encoder-decoder interface
- **IPA**: /krɔs-əˈtɛnʃən ɛnˈkoʊdər-dɪˈkoʊdər ˈɪntərˌfeɪs/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong kiến trúc mạng thần kinh dịch máy.
- **Core meaning — English**: The bridging mechanism in sequence-to-sequence transformer architectures where decoder queries interact with encoder key-value representations to translate or summarize source text.
- **Core meaning & mental image — Tiếng Việt**: Giao diện chú ý chéo mã hóa-giải mã — Hình ảnh chiếc cầu nối giữa hai phòng ban dịch thuật, nơi phòng giải mã liên tục tra cứu tài liệu đã được mã hóa sẵn từ phòng bên kia để chuyển ngữ chính xác.
- **Grammar & collocations**: 
  - implement cross-attention encoder-decoder interface (triển khai giao diện chú ý chéo mã hóa-giải mã)
  - cross-attention encoder-decoder interface weights (trọng số giao diện chú ý chéo mã hóa-giải mã)
  - optimize cross-attention encoder-decoder interface (tối ưu hóa giao diện chú ý chéo mã hóa-giải mã)
- **Register & nuance**: Thuật ngữ kiến trúc Transformer cổ điển và song ngữ (Classical & Sequence-to-Sequence Transformer Architecture).
- **Examples**:
  - The cross-attention encoder-decoder interface allows the translation model to focus on relevant source sentence segments while generating target tokens. (Giao diện chú ý chéo mã hóa-giải mã cho phép mô hình dịch tập trung vào các phân đoạn câu nguồn có liên quan trong khi sinh các token đích.)
- **Liên kết tiếng Hàn**: 크로스 어텐션 인코더-디코더 인터페이스 (kuroseu eotensyeon inkode-didodeo inteopeiseu) — Giao diện chú ý chéo giữa bộ mã hóa và bộ giải mã trong kiến trúc Transformer.

## 22. dynamic memory buffer allocation
- **IPA**: /daɪˈnæmɪk ˈmɛməri ˈbʌfər ˌæləˈkeɪʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong quản lý bộ nhớ hệ thống.
- **Core meaning — English**: The runtime strategy of allocating variable-sized memory blocks on demand to accommodate unpredictable sequence lengths during autoregressive generation.
- **Core meaning & mental image — Tiếng Việt**: Cấp phát vùng đệm bộ nhớ động — Hình ảnh nhân viên kho linh hoạt cắt những chiếc hộp đựng vừa vặn với kích thước từng món hàng khác nhau thay vì dùng các thùng cố định lãng phí không gian.
- **Grammar & collocations**: 
  - manage dynamic memory buffer allocation (quản lý việc cấp phát vùng đệm bộ nhớ động)
  - dynamic memory buffer allocation overhead (chi phí cấp phát vùng đệm bộ nhớ động)
  - efficient dynamic memory buffer allocation (cấp phát vùng đệm bộ nhớ động hiệu quả)
- **Register & nuance**: Thuật ngữ lập trình hệ thống và quản lý tài nguyên GPU (System Programming & GPU Memory Management).
- **Examples**:
  - PagedAttention relies on dynamic memory buffer allocation to eliminate internal memory fragmentation during LLM inference. (PagingAttention dựa vào việc cấp phát vùng đệm bộ nhớ động để loại bỏ tình trạng phân mảnh bộ nhớ trong khi suy luận LLM.)
- **Liên kết tiếng Hàn**: 동적 메모리 버퍼 할당 (dongjeok memori beopeo haldang) — Kỹ thuật cấp phát vùng đệm bộ nhớ linh hoạt theo nhu cầu thời gian chạy.

## 23. GPU warp-level synchronization
- **IPA**: /ˈʤi-pi-yu wɔrp-ˈlɛvəl ˌsɪŋkrənaɪˈzeɪʃən/
- **Luại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong lập trình phần cứng đồ họa.
- **Core meaning — English**: The hardware-level coordination mechanism that ensures execution alignment across threads within a warp (typically 32 threads) on NVIDIA GPUs without issuing explicit barrier instructions.
- **Core meaning & mental image — Tiếng Việt**: Đồng bộ cấp warp GPU — Hình ảnh một đội gồm 32 vận động viên bơi lội cùng đồng loạt quạt tay theo nhịp đếm chính xác từng mili-giây mà không cần còi hiệu trung gian.
- **Grammar & collocations**: 
  - execute GPU warp-level synchronization (thực hiện đồng bộ cấp warp GPU)
  - GPU warp-level synchronization primitive (thực thể đồng bộ cấp warp GPU)
  - optimize GPU warp-level synchronization (tối ưu hóa đồng bộ cấp warp GPU)
- **Register & nuance**: Thuật ngữ lập trình CUDA và phần cứng GPU cấp thấp (Low-Level CUDA & GPU Programming).
- **Examples**:
  - Custom attention kernels utilize GPU warp-level synchronization to safely share intermediate reduction results across threads in shared memory. (Các nhân chú ý tùy chỉnh sử dụng đồng bộ cấp warp GPU để chia sẻ an toàn các kết quả giảm trung gian giữa các luồng trong bộ nhớ chia sẻ.)
- **Liên kết tiếng Hàn**: GPU 워프 수준 동기화 (GPU eopeu sujeun dong-gi-hwa) — Cơ chế đồng bộ hóa phần cứng giữa các luồng trong một warp trên GPU.

## 24. low-latency generative inference
- **IPA**: /loʊ-ˈleɪtənsi ˈʤɛnərətɪv ˈɪnfərəns/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong triển khai ứng dụng AI thời gian thực.
- **Core meaning — English**: Model serving performance characterized by minimal time-to-first-token and fast inter-token generation rates suitable for real-time interactive user experiences.
- **Core meaning & mental image — Tiếng Việt**: Suy luận sinh văn bản độ trễ thấp — Hình ảnh một trợ lý ảo thông minh trả lời ngay lập tức bằng giọng điệu trôi chảy mà không hề có khoảng lặng ngập ngừng nào khi người dùng vừa đặt câu hỏi.
- **Grammar & collocations**: 
  - achieve low-latency generative inference (đạt được suy luận sinh văn bản độ trễ thấp)
  - low-latency generative inference pipeline (đường ống suy luận sinh văn bản độ trễ thấp)
  - optimize for low-latency generative inference (tối ưu hóa cho suy luận sinh văn bản độ trễ thấp)
- **Register & nuance**: Thuật ngữ kỹ thuật triển khai ứng dụng AI thời gian thực (Real-Time AI Deployment Engineering).
- **Examples**:
  - Delivering low-latency generative inference requires combining tensor parallelism, KV cache quantization, and continuous batching. (Việc cung cấp suy luận sinh văn bản độ trễ thấp đòi hỏi phải kết hợp song song tensor, lượng tử hóa bộ nhớ đệm KV và lập lịch liên tục.)
- **Liên kết tiếng Hàn**: 저지연 생성형 추론 (jeo-jiyeon saengseong-hyeong churon) — Quá trình suy luận sinh văn bản với độ trễ tối thiểu phục vụ ứng dụng thời gian thực.

## 25. state-of-the-art transformer accelerator
- **IPA**: /steɪt-əv-ði-ɑrt trænˈsfɔrmər əkˈsɛləˌreɪtər/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong phần cứng trí tuệ nhân tạo.
- **Core meaning — English**: A cutting-edge specialized processor designed specifically with high-bandwidth memory and dedicated matrix math units to accelerate transformer training and inference workloads.
- **Core meaning & mental image — Tiếng Việt**: Bộ tăng tốc transformer tiên tiến nhất — Hình ảnh chiếc siêu máy tính chuyên dụng mạnh mẽ nhất được trang bị đầy đủ động cơ phản lực và kho đạn dược tối tân để gánh vác các mô hình AI khổng lồ.
- **Grammar & collocations**: 
  - design state-of-the-art transformer accelerator (thiết kế bộ tăng tốc transformer tiên tiến nhất)
  - deploy state-of-the-art transformer accelerator (triển khai bộ tăng tốc transformer tiên tiến nhất)
  - benchmark state-of-the-art transformer accelerator (kiểm chuẩn bộ tăng tốc transformer tiên tiến nhất)
- **Register & nuance**: Thuật ngữ thiết kế phần cứng AI và siêu máy tính (AI Hardware & Supercomputing).
- **Examples**:
  - The latest state-of-the-art transformer accelerator features terabytes per second of memory bandwidth and massive tensor core arrays. (Bộ tăng tốc transformer tiên tiến nhất mới nhất có băng thông bộ nhớ lên tới hàng terabyte mỗi giây và các mảng nhân tensor khổng lồ.)
- **Liên kết tiếng Hàn**: 최첨단 트랜스포머 가속기 (choe-cheomdan transeupomeo gaseok-gi) — Bộ xử lý phần cứng chuyên dụng tối tân nhất dành riêng cho mô hình Transformer.

## Review in context: Part 1 (items 1–12)
Modern deep learning infrastructure depends on efficient **scaled dot-product attention** mechanisms to process sequential data. To execute these models without hitting memory walls, engineers rely on **FlashAttention IO-aware tiling** and **key-value (KV) cache compression** techniques. Inside each transformer layer, **multi-head attention projection** and **grouped-query attention (GQA)** distribute query and key-value tensors across subspaces. When processing extremely long documents, **sliding window local attention** helps avoid the prohibitive **quadratic attention time complexity**. However, hardware performance remains strictly bound by the **High Bandwidth Memory (HBM) bandwidth bottleneck**. To bypass this, compilers employ **SRAM tile-level kernel fusion** alongside **rotary position embedding (RoPE)** for positional awareness. Furthermore, **causal language model masking** ensures correct autoregressive training behavior while **attention matrix materialization avoidance** keeps VRAM usage minimal.

### Bản dịch tiếng Việt phần 1:
Hạ tầng học máy hiện đại phụ thuộc vào các cơ chế **scaled dot-product attention** (chú ý tích vô hướng có tỉ lệ) hiệu quả để xử lý dữ liệu tuần tự. Để thực thi các mô hình này mà không chạm phải tường bộ nhớ, các kỹ sư dựa vào kỹ thuật **FlashAttention IO-aware tiling** (phân ô nhận biết xuất nhập FlashAttention) và **key-value (KV) cache compression** (nén bộ nhớ đệm KV). Bên trong mỗi lớp transformer, **multi-head attention projection** (phép chiếu chú ý đa đầu) và **grouped-query attention (GQA)** (chú ý truy vấn nhóm) phân phối các tensor truy vấn và khóa-giá trị qua các không gian con. Khi xử lý các tài liệu cực dài, **sliding window local attention** (chú ý cục bộ cửa sổ trượt) giúp tránh được độ phức tạp **quadratic attention time complexity** (độ phức tạp thời gian chú ý bậc hai) rất tốn kém. Tuy nhiên, hiệu năng phần cứng vẫn bị giới hạn nghiêm ngặt bởi **High Bandwidth Memory (HBM) bandwidth bottleneck** (điểm nghẽn băng thông bộ nhớ HBM). Để vượt qua điều này, các trình biên dịch áp dụng **SRAM tile-level kernel fusion** (hợp nhất nhân cấp ô SRAM) bên cạnh **rotary position embedding (RoPE)** (mã hóa vị trí xoay) để nhận biết vị trí. Hơn nữa, **causal language model masking** (mặt nạ mô hình ngôn ngữ nhân quả) đảm bảo hành vi huấn luyện tự hồi tiếp chính xác trong khi **attention matrix materialization avoidance** (tránh hiện thực hóa ma trận chú ý) giữ cho mức sử dụng VRAM ở mức tối thiểu.

## Review in context: Part 2 (items 13–25)
During production inference, **continuous batching token scheduling** maximizes request throughput, while **speculative decoding inference speedup** reduces response latency by verifying draft tokens in parallel. Because the **token generation memory footprint** can expand rapidly during long conversations, systems rely on **tensor parallelism shard dimension** splitting and **pipeline parallel stage bubble** reduction techniques. Advanced computational methods such as **flash decoding split-KV reduction** and **context length sequence scaling** enable massive context windows. Additionally, deploying a **quantization-aware KV cache** cuts memory overhead in half, while **cross-attention encoder-decoder interface** layers handle sequence transformation tasks. Under the hood, **dynamic memory buffer allocation** and **GPU warp-level synchronization** coordinate execution threads to achieve **low-latency generative inference**, all powered by the newest **state-of-the-art transformer accelerator** hardware.

### Bản dịch tiếng Việt phần 2:
Trong quá trình suy luận sản xuất, **continuous batching token scheduling** (lập lịch token theo lô liên tục) tối đa hóa thông lượng yêu cầu, trong khi **speculative decoding inference speedup** (tăng tốc suy luận giải mã dự đoán) giảm độ trễ phản hồi bằng cách xác minh song song các token nháp. Vì **token generation memory footprint** (dấu chân bộ nhớ sinh token) có thể phình to nhanh chóng trong các cuộc trò chuyện dài, các hệ thống dựa vào kỹ thuật chia tách **tensor parallelism shard dimension** (chiều phân mảnh song song tensor) và giảm thiểu **pipeline parallel stage bubble** (bong bóng giai đoạn song song đường ống). Các phương pháp tính toán tiên tiến như **flash decoding split-KV reduction** (giảm thiểu chia tách KV giải mã Flash) và **context length sequence scaling** (mở rộng quy mô độ dài chuỗi ngữ cảnh) cho phép xử lý các cửa sổ ngữ cảnh khổng lồ. Thêm vào đó, việc triển khai **quantization-aware KV cache** (bộ nhớ đệm KV nhận biết lượng tử hóa) cắt giảm một nửa chi phí bộ nhớ, trong khi các lớp **cross-attention encoder-decoder interface** (giao diện chú ý chéo mã hóa-giải mã) xử lý các tác vụ biến đổi chuỗi. Dưới lớp vỏ hệ thống, **dynamic memory buffer allocation** (cấp phát vùng đệm bộ nhớ động) và **GPU warp-level synchronization** (đồng bộ cấp warp GPU) phối hợp các luồng thực thi để đạt được **low-latency generative inference** (suy luận sinh văn bản độ trễ thấp), tất cả đều được vận hành bởi phần cứng **state-of-the-art transformer accelerator** (bộ tăng tốc transformer tiên tiến nhất) mới nhất.
