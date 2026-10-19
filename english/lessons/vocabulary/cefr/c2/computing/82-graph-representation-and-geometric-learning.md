# C2 Vocabulary — Graph representation and geometric learning

This lesson follows graph representation learning from message passing and neighborhood sampling through symmetry, topology, and graph-level prediction.

Flow: **message-passing network → graph attention → node embedding → edge embedding → heterophily → over-smoothing → graph coarsening → equivariant network → invariant representation → geometric deep learning → neighbor sampling → subgraph sampler → graph rewiring → spectral filter → topological feature → graph positional encoding → graph isomorphism test → readout function → heterogeneous graph → temporal graph network**.

## 1. message-passing network /ˈmesɪdʒ ˌpæsɪŋ ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** a graph model that updates each node by combining its current state with information received from neighboring nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model graph cập nhật node bằng thông tin từ node lân cận.
**Grammar & collocations:** `message-passing-network layer` — layer; `aggregate neighbor states` — gộp.
**Examples:** `The message-passing network propagated a chemical signal across several bonds.` → Network lan truyền tín hiệu qua các liên kết.
**Liên kết tiếng Hàn:** `메시지 전달 네트워크`.

## 2. graph attention /ɡrɑːf əˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** a mechanism that assigns learned weights to neighboring nodes before aggregating their messages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế gán trọng số học được cho hàng xóm trước khi gộp message.
**Grammar & collocations:** `graph-attention head` — head; `weight a neighbor` — gán trọng số.
**Examples:** `Graph attention emphasized the most informative interactions in the molecular neighborhood.` → Attention nhấn tương tác quan trọng.
**Liên kết tiếng Hàn:** `그래프 어텐션`.

## 3. node embedding /noʊd emˈbedɪŋ/
**Part of speech:** noun
**Core meaning (English):** a vector representation encoding a node's attributes and structural context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vector ghi thuộc tính và context cấu trúc của node.
**Grammar & collocations:** `node-embedding space` — space; `encode a neighborhood` — mã hóa.
**Examples:** `The node embedding placed users with similar interaction patterns near each other.` → Embedding đặt user giống nhau gần nhau.
**Liên kết tiếng Hàn:** `노드 임베딩`.

## 4. edge embedding /edʒ emˈbedɪŋ/
**Part of speech:** noun
**Core meaning (English):** a vector representation describing a relationship, connection, or interaction between two nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vector mô tả quan hệ hoặc tương tác giữa hai node.
**Grammar & collocations:** `edge-embedding decoder` — decoder; `represent a relation` — biểu diễn.
**Examples:** `The edge embedding distinguished a purchase from a casual page view.` → Embedding phân biệt mua hàng và xem trang.
**Liên kết tiếng Hàn:** `엣지 임베딩`.

## 5. heterophily /həˈterəfɪli/
**Part of speech:** noun
**Core meaning (English):** a graph pattern in which connected nodes often have different labels or attributes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** node nối với nhau thường khác label hoặc thuộc tính.
**Grammar & collocations:** `heterophily-aware layer` — layer; `model unlike neighbors` — mô hình hóa.
**Examples:** `Heterophily made simple neighbor averaging harmful for the citation graph.` → Heterophily khiến average hàng xóm gây hại.
**Liên kết tiếng Hàn:** `이질성`.

## 6. over-smoothing /ˌoʊvər ˈsmuːðɪŋ/
**Part of speech:** noun
**Core meaning (English):** the loss of node distinctions when repeated message passing makes representations too similar.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** node mất khác biệt vì message passing lặp làm vector quá giống.
**Grammar & collocations:** `over-smoothing diagnosis` — diagnosis; `separate deep graph layers` — tách.
**Examples:** `Over-smoothing caused distant nodes to converge to nearly identical embeddings.` → Over-smoothing làm node xa giống nhau.
**Liên kết tiếng Hàn:** `과도한 평활화`.

## 7. graph coarsening /ɡrɑːf ˈkɔːrsənɪŋ/
**Part of speech:** noun
**Core meaning (English):** reducing a graph by grouping nodes or edges into a smaller structure while preserving useful organization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu nhỏ graph bằng gom node/edge mà giữ cấu trúc hữu ích.
**Grammar & collocations:** `graph-coarsening hierarchy` — hierarchy; `collapse a node cluster` — gộp.
**Examples:** `Graph coarsening produced a smaller hierarchy for long-range reasoning.` → Coarsening tạo hierarchy nhỏ hơn.
**Liên kết tiếng Hàn:** `그래프 조대화`.

## 8. equivariant network /ɪˈkwɪvəriənt ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** a network whose output transforms predictably when the input undergoes a specified symmetry transformation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** output biến đổi theo quy luật khi input đổi đối xứng.
**Grammar & collocations:** `equivariant-network layer` — layer; `rotate a molecular coordinate` — xoay.
**Examples:** `The equivariant network rotated its force predictions consistently with the molecule.` → Network xoay prediction theo molecule.
**Liên kết tiếng Hàn:** `등변 네트워크`.

## 9. invariant representation /ɪnˈveəriənt ˌreprɪzenˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a representation that remains unchanged under a chosen transformation of the input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation không đổi dưới phép biến đổi đã chọn.
**Grammar & collocations:** `invariant-representation objective` — objective; `ignore a rotation` — bỏ qua.
**Examples:** `The invariant representation gave the same molecular descriptor after a rigid rotation.` → Representation giữ nguyên sau xoay.
**Liên kết tiếng Hàn:** `불변 표현`.

## 10. geometric deep learning /ˌdʒiːəˈmetrɪk diːp ˈlɜːrnɪŋ/
**Part of speech:** noun
**Core meaning (English):** machine learning that incorporates geometry, topology, or symmetry into model design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** machine learning đưa geometry, topology và symmetry vào thiết kế.
**Grammar & collocations:** `geometric-deep-learning framework` — framework; `encode a symmetry` — mã hóa.
**Examples:** `Geometric deep learning matched the model to the structure of a 3-D object.` → Geometric learning khớp model với vật thể 3-D.
**Liên kết tiếng Hàn:** `기하학적 딥러닝`.

## 11. neighbor sampling /ˈneɪbər ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** selecting only some neighboring nodes to make graph computation tractable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ chọn một phần hàng xóm để tính graph khả thi.
**Grammar & collocations:** `neighbor-sampling fanout` — fanout; `sample a local frontier` — lấy mẫu.
**Examples:** `Neighbor sampling kept memory bounded on the billion-edge graph.` → Sampling giữ memory trong giới hạn.
**Liên kết tiếng Hàn:** `이웃 샘플링`.

## 12. subgraph sampler /ˈsʌbɡrɑːf ˈsæmplər/
**Part of speech:** noun
**Core meaning (English):** a procedure that extracts a smaller connected graph for training or analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thủ tục lấy graph con liên thông để train hoặc phân tích.
**Grammar & collocations:** `subgraph-sampler seed` — seed; `extract a training neighborhood` — trích.
**Examples:** `The subgraph sampler balanced dense urban regions against sparse rural regions.` → Sampler cân bằng vùng dày và thưa.
**Liên kết tiếng Hàn:** `부분 그래프 샘플러`.

## 13. graph rewiring /ɡrɑːf ˌriːˈwaɪərɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing graph connections to improve information flow or encode a desired structural prior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi connection graph để cải thiện luồng thông tin.
**Grammar & collocations:** `graph-rewiring heuristic` — heuristic; `add a shortcut edge` — thêm.
**Examples:** `Graph rewiring added shortcuts that reduced the effective path length.` → Rewiring thêm shortcut giảm path.
**Liên kết tiếng Hàn:** `그래프 재배선`.

## 14. spectral filter /ˈspektrəl ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a graph operation that modifies signals according to frequencies defined by a graph operator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation lọc signal theo frequency của graph operator.
**Grammar & collocations:** `spectral-filter response` — response; `attenuate a high-frequency mode` — giảm.
**Examples:** `The spectral filter suppressed noisy variation while preserving a community-level trend.` → Filter giảm noise và giữ trend.
**Liên kết tiếng Hàn:** `스펙트럼 필터`.

## 15. topological feature /ˌtɒpəˈlɒdʒɪkəl ˈfiːtʃər/
**Part of speech:** noun
**Core meaning (English):** a feature describing connectivity, holes, loops, or other shape-level properties of a data object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** feature mô tả connectivity, hole và loop của data.
**Grammar & collocations:** `topological-feature map` — map; `capture a persistent loop` — ghi nhận.
**Examples:** `The topological feature separated two shapes with similar local textures.` → Feature phân biệt hai hình có texture giống.
**Liên kết tiếng Hàn:** `위상적 특징`.

## 16. graph positional encoding /ɡrɑːf pəˈzɪʃənəl enˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** an added signal that tells a graph model how a node is situated within the larger structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu cho model biết vị trí node trong cấu trúc lớn.
**Grammar & collocations:** `graph-positional-encoding vector` — vector; `encode a structural coordinate` — mã hóa.
**Examples:** `Graph positional encoding distinguished nodes with identical features but different centrality.` → Encoding phân biệt node cùng feature.
**Liên kết tiếng Hàn:** `그래프 위치 인코딩`.

## 17. graph isomorphism test /ɡrɑːf aɪˈsɒmɔːrfɪzəm test/
**Part of speech:** noun
**Core meaning (English):** a procedure for deciding whether two graphs have the same structure under a relabeling of nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra hai graph có cùng cấu trúc khi đổi nhãn node.
**Grammar & collocations:** `graph-isomorphism-test benchmark` — benchmark; `relabel a node set` — đổi nhãn.
**Examples:** `The graph isomorphism test exposed two molecular diagrams as structurally identical.` → Test cho thấy hai sơ đồ giống cấu trúc.
**Liên kết tiếng Hàn:** `그래프 동형성 검사`.

## 18. readout function /ˈriːdaʊt ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a permutation-invariant operation that converts node or edge representations into a graph-level output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation không phụ thuộc thứ tự, đổi representation node thành output graph.
**Grammar & collocations:** `readout-function pooling` — pooling; `summarize a graph` — tóm tắt.
**Examples:** `The readout function summarized all node states into one property estimate.` → Readout gộp node thành estimate.
**Liên kết tiếng Hàn:** `리드아웃 함수`.

## 19. heterogeneous graph /ˌhetərədʒiˈniːəs ɡrɑːf/
**Part of speech:** noun
**Core meaning (English):** a graph containing multiple node or edge types with different semantics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph có nhiều loại node hoặc edge với nghĩa khác nhau.
**Grammar & collocations:** `heterogeneous-graph schema` — schema; `type an interaction` — gán loại.
**Examples:** `The heterogeneous graph represented users, products, and reviews with distinct relation types.` → Graph biểu diễn nhiều loại thực thể.
**Liên kết tiếng Hàn:** `이종 그래프`.

## 20. temporal graph network /ˈtempərəl ɡrɑːf ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** a graph model that updates representations as nodes and edges appear, disappear, or change over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model graph cập nhật khi node/edge thay đổi theo thời gian.
**Grammar & collocations:** `temporal-graph-network memory` — memory; `process a time-stamped edge` — xử lý.
**Examples:** `The temporal graph network predicted the next interaction from a stream of time-stamped events.` → Network dự đoán tương tác kế tiếp.
**Liên kết tiếng Hàn:** `시간 그래프 네트워크`.

## Review in context

A **message-passing network** uses **graph attention**, **node embedding**, and **edge embedding**, but **heterophily** and **over-smoothing** can limit it. **Graph coarsening**, an **equivariant network**, an **invariant representation**, and **geometric deep learning** encode structure and symmetry. **Neighbor sampling**, a **subgraph sampler**, and **graph rewiring** control scale; a **spectral filter** and **topological feature** capture global shape. **Graph positional encoding**, a **graph isomorphism test**, and a **readout function** support a **heterogeneous graph** and a **temporal graph network**.

**Bản dịch tiếng Việt:** **Message-passing network** dùng **graph attention**, **node embedding** và **edge embedding**, nhưng **heterophily** và **over-smoothing** có thể giới hạn nó. **Graph coarsening**, **equivariant network**, **invariant representation** và **geometric deep learning** mã hóa cấu trúc và đối xứng. **Neighbor sampling**, **subgraph sampler** và **graph rewiring** kiểm soát quy mô; **spectral filter** và **topological feature** nắm hình dạng toàn cục. **Graph positional encoding**, **graph isomorphism test** và **readout function** hỗ trợ **heterogeneous graph** và **temporal graph network**.
