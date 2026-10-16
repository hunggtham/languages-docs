# C2 Vocabulary 198 — Persistent homology filtrations, topological data analysis, and persistence barcode invariants

This lesson explores advanced concepts in **persistent homology**, **topological data analysis (TDA)**, and **persistence barcode invariants**. The 25 headwords cover Vietoris-Rips simplicial complex filtration, persistent Betti numbers, birth-death persistence diagram coordinates, topological feature longevity, bottleneck distance stability metrics, and high-dimensional manifold reconstruction.

## 1. homology /həˈmɑːlədʒi/

**Loại từ & vị trí trong câu:** `noun [U/C]`. Typically functions as a subject or object representing algebraic invariants that detect holes in topological spaces across dimensions.

**Core meaning — English:** A mathematical framework from algebraic topology that assigns sequence of algebraic structures (such as abelian groups or vector spaces) to topological spaces to measure qualitative holes.

**Core meaning & mental image — Tiếng Việt:** Đồng điều; hình ảnh việc đếm số lượng lỗ hổng ở các chiều khác nhau (như lỗ trên vòng phao bơi hay đường hầm xuyên núi) bằng đại số.

**Grammar & collocations:** `persistent homology` — đồng điều bền vững; `homology group` — nhóm đồng điều; `homological invariant` — bất biến đồng điều.

**Register & nuance:** Highly specialized, used in topological data analysis, algebraic topology, and advanced computational geometry.

**Examples:** `<Persistent homology computes the birth and death of topological features across multiple spatial scales in high-dimensional point clouds.> → Đồng điều bền vững tính toán sự sinh ra và mất đi của các đặc trưng tô-pô qua nhiều thang đo không gian trong các đám mây điểm số chiều cao.`

**Liên결 tiếng Hàn:** `호몰로지 / 호몰로지 군` (Homology) — Đồng điều.

---

## 2. filtration /fɪlˈtreɪʃən/

**Loại/vị trí:** `noun [C/U]`. Serves as a noun describing a nested sequence of growing topological spaces.

**Core meaning:** An increasing nested sequence of simplicial complexes or topological spaces indexed by a real parameter, modelling the gradual appearance of data connectivity.

**Core meaning & mental image:** Phép lọc / chuỗi lọc không gian; hình ảnh nước dâng từ từ ngập dần một địa hình gồ ghề, nối các đỉnh đồi lại với nhau theo thời gian.

**Grammar & collocations:** `simplicial filtration` — phép lọc phức đơn hình; `sublevel set filtration` — phép lọc tập mức dưới; `filtration parameter` — tham số lọc.

**Register & nuance:** Foundational concept in persistent homology and computational topology.

**Examples:** `<The Vietoris-Rips filtration incrementally connects data points as the distance threshold expands, constructing nested simplicial complexes.> → Phép lọc Vietoris-Rips kết nối dần các điểm dữ liệu khi ngưỡng khoảng cách mở rộng, xây dựng các phức đơn hình lồng nhau.`

**Liên결 tiếng Hàn:** `필트레이션 / 여과` (濾過) — Phép lọc / Lọc.

---

## 3. simplicial /sɪmˈplɪʃəl/

**Loại/vị trí:** `adjective`. Functions as an adjective describing geometric structures built from generalized triangles.

**Core meaning:** Pertaining to simplices (vertices, edges, triangles, tetrahedra, and their higher-dimensional analogues) and complexes formed by gluing them together.

**Core meaning & mental image:** Thuộc đơn hình; hình ảnh việc lắp ráp các hình khối cơ bản (điểm, đoạn thẳng, tam giác, tứ diện) để xấp xỉ một bề mặt phức tạp.

**Grammar & collocations:** `simplicial complex` — phức đơn hình; `simplicial map` — ánh xạ đơn hình; `simplicial homology` — đồng điều đơn hình.

**Register & nuance:** Standard terminology in algebraic topology and computational geometry.

**Examples:** `<Constructing a simplicial complex from metric data allows algorithms to compute topological invariants efficiently.> → Việc xây dựng một phức đơn hình từ dữ liệu khoảng cách cho phép các thuật toán tính toán các bất biến tô-pô một cách hiệu quả.`

**Liên결 tiếng Hàn:** `심플렉스 / 단체` (單體) — Đơn hình / Phức đơn hình.

---

## 4. Betti /ˈbɛti/

**Loại/vị trí:** `adjective` or `noun`. Used as a descriptor for topological invariants counting multi-dimensional holes.

**Core meaning:** Pertaining to Betti numbers, which rank the topological features of a space (e.g., connected components, tunnels, cavities) in successive dimensions.

**Core meaning & mental image:** Số Betti; hình ảnh bảng kiểm kê đếm số lượng các loại lỗ hổng khác nhau xuất hiện trên một vật thể (ví dụ: số đảo, số hồ, số hang kín).

**Grammar & collocations:** `Betti number` — số Betti; `persistent Betti number` — số Betti bền vững; `Betti curve` — đường cong Betti.

**Register & nuance:** Named after Enrico Betti; fundamental in topological data analysis.

**Examples:** `<The zeroth Betti number tracks the number of connected components, while the first Betti number counts circular loops in the dataset.> → Số Betti thứ không theo dõi số lượng các thành phần liên kết, trong khi số Betti thứ nhất đếm các vòng tròn trong tập dữ liệu.`

**Liên결 tiếng Hàn:** `베티 수` (Betti 數) — Số Betti.

---

## 5. persistence /pərˈsɪstəns/

**Loại/vị trí:** `noun [U]`. Functions as a noun representing the lifespan and robustness of topological features across scales.

**Core meaning:** The duration (measured in filtration parameter value) for which a topological feature exists before being merged or destroyed.

**Core meaning & mental image:** Tính bền vững / độ bền của cấu trúc; hình ảnh khoảng thời gian mà một gợn sóng hoặc bong bóng tồn tại trước khi vỡ tan.

**Grammar & collocations:** `persistence diagram` — biểu đồ bền vững; `persistence barcode` — mã vạch bền vững; `persistence landscape` — cảnh quan bền vững.

**Register & nuance:** Central concept in topological data analysis distinguishing true topological signals from noise.

**Examples:** `<Features with high persistence represent genuine underlying manifold structure, whereas short-lived features typically correspond to random noise.> → Các đặc trưng có độ bền vững cao đại diện cho cấu trúc đa tạp cơ sở thực sự, trong khi các đặc trưng ngắn ngủi thường tương ứng với nhiễu ngẫu nhiên.`

**Liên결 tiếng Hàn:** `지속성 / 영속성` (持續性) — Tính bền vững.

---

## 6. barcode /ˈbɑːrˌkoʊd/

**Loại/vị trí:** `noun [C]`. Serves as a noun representing the visual summary of topological persistence intervals.

**Core meaning:** A graphical representation of persistent homology where each topological feature is depicted as a horizontal bar spanning its birth-death filtration interval.

**Core meaning & mental image:** Mã vạch bền vững; hình ảnh các vạch ngang song song trên sản phẩm siêu thị, với mỗi vạch dài đại diện cho một đặc trưng tô-pô sinh sống lâu dài.

**Grammar & collocations:** `persistence barcode` — mã vạch bền vững; `barcode invariant` — bất biến mã vạch; `barcode stability` — tính ổn định mã vạch.

**Register & nuance:** Introduced by Robert Ghrist as an intuitive alternative to persistence diagrams.

**Examples:** `<The persistence barcode clearly distinguishes prominent topological signals as long horizontal bars standing out against a background of short noise segments.> → Mã vạch bền vững phân biệt rõ ràng các tín hiệu tô-pô nổi bật dưới dạng các thanh ngang dài nổi bật trên nền các đoạn nhiễu ngắn.`

**Liên결 tiếng Hàn:** `바코드` — Mã vạch bền vững.

---

## 7. manifold /ˈmænəˌfoʊld/

**Loại/vị trí:** `noun [C]`. Functions as a noun describing a topological space that locally resembles Euclidean space.

**Core meaning:** A topological space that locally looks like Euclidean space at small neighborhoods around every point, commonly used to model high-dimensional data distributions.

**Core meaning & mental image:** Đa tạp; hình ảnh bề mặt trái đất nhìn cục bộ phẳng ở mỗi thành phố nhưng thực chất là hình cầu cong ở quy mô toàn cầu.

**Grammar & collocations:** `Riemannian manifold` — đa tạp Riemann; `manifold hypothesis` — giả thuyết đa tạp; `low-dimensional manifold` — đa tạp số chiều thấp.

**Register & nuance:** Standard in differential geometry, machine learning, and topological data analysis.

**Examples:** `<High-dimensional image datasets often concentrate near a lower-dimensional nonlinear manifold embedded within ambient space.> → Các tập dữ liệu hình ảnh số chiều cao thường tập trung gần một đa tạp phi tuyến tính số chiều thấp được nhúng trong không gian bao quanh.`

**Liên결 tiếng Hàn:** `매니폴드 / 다양체` (多樣體) — Đa tạp.

---

## 8. bottleneck /ˈbɑːtəlˌnɛk/

**Loại/vị trí:** `noun [C]`. Used as a noun in stability theorems representing optimal matching distances between persistence diagrams.

**Core meaning:** A minimax distance metric measuring the maximal displacement required to match points between two persistence diagrams under optimal bijection.

**Core meaning & mental image:** Khoảng cách cổ chai; hình ảnh đoạn hẹp nhất khi so sánh hai biểu đồ, đo lường mức độ biến dạng tối thiểu để chồng khít biểu đồ này lên biểu đồ khác.

**Grammar & collocations:** `bottleneck distance` — khoảng cách cổ chai; `bottleneck stability theorem` — định lý ổn định cổ chai; `stability metric` — số đo ổn định.

**Register & nuance:** Crucial stability concept proving that small perturbations in input data result in small changes in persistence diagrams.

**Examples:** `<The bottleneck distance provides a robust stability guarantee, ensuring that minor measurement noise only marginally alters persistence diagrams.> → Khoảng cách cổ chai cung cấp đảm bảo tính ổn định vững chắc, đảm bảo rằng nhiễu đo lường nhỏ chỉ làm thay đổi không đáng kể các biểu đồ bền vững.`

**Liên결 tiếng Hàn:** `병목 거리` (Bottleneck 距離) — Khoảng cách cổ chai.

---

## 9. Wasserstein /ˈvɑːsərˌstaɪn/

**Loại/vị trí:** `adjective` or `noun`. Used to describe optimal transport distances adapted for persistence diagrams.

**Core meaning:** Pertaining to Wasserstein distance metrics, which evaluate the cost of optimally shifting persistence points, accommodating both position changes and point birth-death lifespans.

**Core meaning & mental image:** Khoảng cách Wasserstein; hình ảnh chi phí vận chuyển tối ưu khi di dời đống đất này sang hình dạng đống đất khác (earth mover's distance).

**Grammar & collocations:** `Wasserstein distance` — khoảng cách Wasserstein; `Wasserstein stability` — tính ổn định Wasserstein; `p-th Wasserstein metric` — số đo Wasserstein bậc p.

**Register & nuance:** Widely used in optimal transport theory, machine learning, and topological data analysis.

**Examples:** `<Wasserstein distances penalize both the horizontal and vertical displacement of persistence diagram points, offering a refined metric compared to bottleneck distance.> → Khoảng cách Wasserstein phạt cả sự dịch chuyển theo chiều ngang và chiều dọc của các điểm biểu đồ bền vững, cung cấp một số đo tinh tế hơn so với khoảng cách cổ chai.`

**Liên결 tiếng Hàn:** `바세르슈타인 거리` (Wasserstein 距離) — Khoảng cách Wasserstein.

---

## 10. Vietoris-Rips /ˌviːoʊtərɪs rɪps/

**Loại/vị trí:** `adjective`. Serves as a compound adjective denoting a standard method for constructing simplicial complexes from metric spaces.

**Core meaning:** Pertaining to the Vietoris-Rips complex, formed by taking subsets of points whose pairwise distances are all less than a specified threshold.

**Core meaning & mental image:** Phức Vietoris-Rips; hình ảnh việc nối tất cả các cặp điểm cách nhau một khoảng cách cho trước bằng các đoạn thẳng và lấp đầy các tam giác, tứ diện tương ứng.

**Grammar & collocations:** `Vietoris-Rips complex` — phức Vietoris-Rips; `Rips filtration` — phép lọc Rips; `Vietoris-Rips construction` — cấu trúc Vietoris-Rips.

**Register & nuance:** Named after Leopold Vietoris and Eliakim Hastings Moore / Fritz Rips; computationally efficient in TDA.

**Examples:** `<The Vietoris-Rips complex is favored in applied topological data analysis because it is computationally simpler to construct than the Čech complex.> → Phức Vietoris-Rips được ưa chuộng trong phân tích dữ liệu tô-pô ứng dụng vì việc xây dựng nó đơn giản hơn về mặt tính toán so với phức Čech.`

**Liên결 tiếng Hàn:** `비토리스-립스 복합체` — Phức Vietoris-Rips.

---

## 11. Čech /tʃɛk/

**Loại/vị trí:** `adjective`. Used to describe topological complexes formed by intersections of metric balls.

**Core meaning:** Pertaining to the Čech complex, defined by intersecting balls centered at data points, capturing exact topological structure via the Nerve Theorem.

**Core meaning & mental image:** Phức Čech; hình ảnh các quả bóng tròn phồng lên tại mỗi điểm dữ liệu và kiểm tra xem phần giao nhau của chúng có tạo thành các không gian rỗng hay không.

**Grammar & collocations:** `Čech complex` — phức Čech; `Čech filtration` — phép lọc Čech; `Nerve theorem` — định lý Nerve.

**Register & nuance:** Named after Eduard Čech; mathematically rigorous but computationally expensive in high dimensions.

**Examples:** `<The Nerve theorem guarantees that the Čech complex is homotopy equivalent to the union of underlying metric balls.> → Định lý Nerve đảm bảo rằng phức Čech tương đương đồng luân với hợp của các quả bóng mét cơ sở.`

**Liên결 tiếng Hàn:** `체흐 복합체` (Čech 複合物) — Phức Čech.

---

## 12. topology /təˈpɑːlədʒi/

**Loại/vị trí:** `noun [U/C]`. Functions as a noun representing the mathematical study of spatial properties preserved under continuous deformations.

**Core meaning:** The branch of mathematics focused on properties of space that are preserved through continuous deformations, such as stretching, twisting, crumpling, but not tearing.

**Core meaning & mental image:** Tô-pô học; hình ảnh chiếc cốc cà phê và chiếc bánh Donut có cùng cấu trúc tô-pô vì cả hai đều có đúng một lỗ thủng xuyên qua.

**Grammar & collocations:** `algebraic topology` — tô-pô đại số; `computational topology` — tô-pô tính toán; `topological feature` — đặc trưng tô-pô.

**Register & nuance:** Foundational mathematical discipline underpinning topological data analysis.

**Examples:** `<Topology provides qualitative tools to characterize the global shape of data without relying on rigid distance metrics.> → Tô-pô cung cấp các công cụ định tính để mô tả hình dạng toàn cầu của dữ liệu mà không phụ thuộc vào các số đo khoảng cách cứng nhắc.`

**Liên결 tiếng Hàn:** `위상수학` (位相數學) — Tô-pô học.

---

## 13. invariant /ɪnˈvɛriənt/ (already used in 197) -> Let's use `sparsity` /ˈspɑːrsɪti/

**Loại/vị trí:** `noun [U]`. Functions as a noun describing data representations where many elements are zero.

**Core meaning:** The property of having a small number of non-zero entries or active components, often leveraged in computational topology to prune large distance matrices.

**Core meaning & mental image:** Tính thưa thớt; hình ảnh một tấm lưới lớn nhưng hầu như rỗng, chỉ có vài điểm nút là có dây nối.

**Grammar & collocations:** `matrix sparsity` — tính thưa thớt của ma trận; `sparsity pattern` — mẫu thưa thớt; `enforce sparsity` — thúc đẩy tính thưa thớt.

**Register & nuance:** Common in numerical linear algebra, machine learning, and efficient algorithm design.

**Examples:** `<Exploiting matrix sparsity in high-dimensional filtration algorithms significantly reduces memory consumption and computation time.> → Việc khai thác tính thưa thớt của ma trận trong các thuật toán lọc số chiều cao làm giảm đáng kể mức tiêu thụ bộ nhớ và thời gian tính toán.`

**Liên결 tiếng Hàn:** `희소성` (稀少性) — Tính thưa thớt.

---

## 14. triangulation /traɪˌæŋɡjuˈleɪʃən/

**Loại/vị trí:** `noun [C/U]`. Serves as a noun describing the decomposition of a geometric space into simplex elements.

**Core meaning:** The subdivision of a geometric domain, surface, or manifold into a simplicial complex composed of triangles or higher-dimensional simplexes.

**Core meaning & mental image:** Phép chia tam giác hóa; hình ảnh việc phủ kín một bề mặt gồ ghề bằng một tấm lưới gồm các hình tam giác nhỏ ghép sát nhau.

**Grammar & collocations:** `surface triangulation` — phép tam giác hóa bề mặt; `Delaunay triangulation` — phép tam giác hóa Delaunay; `triangulation mesh` — lưới tam giác hóa.

**Register & nuance:** Essential in computer graphics, finite element analysis, and computational geometry.

**Examples:** `<Quality triangulation of point cloud data is a critical preprocessing step before computing accurate homology groups.> → Phép tam giác hóa chất lượng của dữ liệu đám mây điểm là bước tiền xử lý quan trọng trước khi tính toán các nhóm đồng điều chính xác.`

**Liên결 tiếng Hàn:** `삼각분할` (三角分割) — Phép chia tam giác.

---

## 15. embedding /ɛmˈbɛdɪŋ/

**Loại/vị trí:** `noun [C/U]`. Functions as a noun describing structure-preserving maps from one space into another.

**Core meaning:** A continuous, injective map between topological spaces or vector spaces that preserves geometric and topological properties without self-intersection.

**Core meaning & mental image:** Phép nhúng; hình ảnh thả chìm một sợi dây uốn lượn vào không gian 3D sao cho không có đoạn nào tự cắt ngang chính nó.

**Grammar & collocations:** `manifold embedding` — phép nhúng đa tạp; `low-dimensional embedding` — phép nhúng số chiều thấp; `isometric embedding` — phép nhúng bảo toàn cự ly.

**Register & nuance:** Ubiquitous in machine learning, topology, and representation learning.

**Examples:** `<Nonlinear dimensionality reduction techniques construct low-dimensional embeddings that preserve the intrinsic topological features of ambient data.> → Các kỹ thuật giảm số chiều phi tuyến tính xây dựng các phép nhúng số chiều thấp bảo lưu các đặc trưng tô-pô nội tại của dữ liệu bao quanh.`

**Liên결 tiếng Hàn:** `임베딩 / 매몰` (埋沒) — Phép nhúng.

---

## 16. metric /ˈmɛtrɪk/

**Loại/vị trí:** `noun [C]`. Serves as a noun denoting a mathematical function defining distance between elements.

**Core meaning:** A function that satisfies axioms of positivity, symmetry, and triangle inequality, establishing a formal notion of distance between points in a space.

**Core meaning & mental image:** Khoảng cách / Hàm metric; hình ảnh chiếc thước dây đo khoảng cách ngắn nhất giữa hai điểm bất kỳ trên bản đồ.

**Grammar & collocations:** `metric space` — không gian mê-tríc; `Euclidean metric` — hàm metric Euclid; `distance metric` — số đo khoảng cách.

**Register & nuance:** Fundamental in mathematics, data science, and topological data analysis.

**Examples:** `<Choosing an appropriate metric is crucial for topological data analysis, as distance distortions can artificially create spurious holes.> → Việc lựa chọn một hàm metric phù hợp là tối quan trọng đối với phân tích dữ liệu tô-pô, vì sự bóp méo khoảng cách có thể tạo ra các lỗ hổng giả tạo.`

**Liên결 tiếng Hàn:** `거리 함수 / 메트릭` — Hàm metric / Khoảng cách.

---

## 17. reduction /rɪˈdʌkʃən/

**Loại/vị trí:** `noun [C/U]`. Functions as a noun describing algorithmic simplification of boundary matrices in persistent homology.

**Core meaning:** The algorithmic process of transforming a boundary matrix into standard column-reduced form using elementary column operations to extract persistence pairs.

**Core meaning & mental image:** Phép khử ma trận; hình ảnh quá trình biến đổi các hàng và cột của ma trận biên về dạng bậc thang để đọc ra thời điểm sinh và tử của các lỗ hổng.

**Grammar & collocations:** `matrix reduction` — phép khử ma trận; `dimensionality reduction` — giảm số chiều; `boundary reduction` — khử biên.

**Register & nuance:** Core algorithmic step in computing persistent homology.

**Examples:** `<Standard matrix reduction algorithms compute persistent homology by pairing pivot columns in the boundary matrix efficiently.> → Các thuật toán khử ma trận chuẩn tính toán đồng điều bền vững bằng cách ghép nối các cột trụ trong ma trận biên một cách hiệu quả.`

**Liên결 tiếng Hàn:** `축소 / 간소화` — Phép khử / Thu gọn.

---

## 18. noise /nɔɪz/

**Loại/vị trí:** `noun [U/C]`. Used as a noun representing random perturbations obscuring true data signals.

**Core meaning:** Random or spurious variations in data measurements that create short-lived topological features in persistence diagrams.

**Core meaning & mental image:** Nhiễu tín hiệu; hình ảnh những hạt nhiễu tĩnh trên màn hình TV cũ che khuất hình ảnh chính.

**Grammar & collocations:** `measurement noise` — nhiễu đo lường; `background noise` — nhiễu nền; `noise filtering` — lọc nhiễu.

**Register & nuance:** Universal concept in signal processing, statistics, and topological data analysis.

**Examples:** `<Topological data analysis excels at separating structured signal manifolds from random background noise using persistence thresholds.> → Phân tích dữ liệu tô-pô xuất sắc trong việc tách biệt các đa tạp tín hiệu có cấu trúc khỏi nhiễu nền ngẫu nhiên bằng cách sử dụng các ngưỡng bền vững.`

**Liên결 tiếng Hàn:** `노이즈 / 잡음` (雜音) — Nhiễu.

---

## 19. generator /ˈdʒɛnəˌreɪtər/

**Loại/vị trí:** `noun [C]`. Serves as a noun representing the underlying cycles or chains spanning homology classes.

**Core meaning:** A cycle or chain of simplices that represents a non-trivial hole in a homology group, corresponding to a persistent topological feature.

**Core meaning & mental image:** Phần tử sinh; hình ảnh một vòng dây khép kín tạo ra khung xương cho cái lỗ trên bề mặt vật thể.

**Grammar & collocations:** `homology generator` — phần tử sinh đồng điều; `cycle generator` — phần tử sinh chu trình; `optimal generator` — phần tử sinh tối ưu.

**Register & nuance:** Advanced concept in computational topology for locating the spatial location of topological features.

**Examples:** `<Extracting homology generators allows scientists to pinpoint the exact spatial regions responsible for topological cavities in molecular structures.> → Việc trích xuất các phần tử sinh đồng điều cho phép các nhà khoa học xác định chính xác các vùng không gian chịu trách nhiệm cho các hốc tô-pô trong cấu trúc phân tử.`

**Liên결 tiếng Hàn:** `생성원` (生成元) — Phần tử sinh.

---

## 20. manifold /ˈmænəˌfoʊld/ (already used) -> Let's use `cluster` /ˈklʌstər/

**Loại/vị trí:** `noun [C]` or `verb`. Functions as a noun representing grouped collections of data points.

**Core meaning:** A localized grouping of data points in metric space that exhibit high density relative to surrounding regions.

**Core meaning & mental image:** Cụm dữ liệu; hình ảnh các đàn chim bay sát quây quần lại với nhau trên bầu trời.

**Grammar & collocations:** `data cluster` — cụm dữ liệu; `cluster analysis` — phân tích cụm; `hierarchical clustering` — phân cụm phân cấp.

**Register & nuance:** Ubiquitous in statistics, machine learning, and data clustering algorithms.

**Examples:** `<Single-linkage hierarchical clustering is intimately connected to zeroth-order persistent homology through connected component lifetimes.> → Phân cụm phân cấp liên kết đơn có mối liên hệ mật thiết với đồng điều bền vững bậc không thông qua thời gian sống của các thành phần liên kết.`

**Liên결 tiếng Hàn:** `클러스터 / 군집` (群集) — Cụm / Nhóm.

---

## 21. stability /stəˈbɪlɪti/

**Loại/vị trí:** `noun [U]`. Serves as a noun denoting the resilience of persistence diagrams under perturbations of input data.

**Core meaning:** The mathematical guarantee that small perturbations in input metric spaces lead to small, bounded changes in persistence diagrams measured by bottleneck or Wasserstein distances.

**Core meaning & mental image:** Tính ổn định; hình ảnh một chiếc thuyền lật nhẹ rồi tự cân bằng lại thay vì lật úp hoàn toàn khi gặp sóng nhỏ.

**Grammar & collocations:** `diagram stability` — tính ổn định biểu đồ; `stability theorem` — định lý ổn định; `robust stability` — tính ổn định vững chắc.

**Register & nuance:** Cornerstone theorem in TDA established by Cohen-Steiner, Edelsbrunner, and Harer.

**Examples:** `<The stability theorem guarantees that topological signatures derived from point clouds are robust against bounded observational errors.> → Định lý ổn định đảm bảo rằng các chữ ký tô-pô dẫn xuất từ các đám mây điểm có khả năng chống chịu tốt trước các lỗi quan sát có giới hạn.`

**Liên결 tiếng Hàn:** `안정성` (安定性) — Tính ổn định.

---

## 22. dimension /dɪˈmɛnʃən/

**Loại/vị trí:** `noun [C]`. Functions as a noun representing the number of coordinates needed to specify points or the grading of homology groups.

**Core meaning:** The parameter specifying the degree of freedom in a topological space, or the homological dimension indexing different types of holes (0-dim components, 1-dim loops, 2-dim voids).

**Core meaning & mental image:** Số chiều; hình ảnh từ đường thẳng (1 chiều) lên mặt phẳng (2 chiều) rồi đến không gian (3 chiều).

**Grammar & collocations:** `intrinsic dimension` — số chiều nội tại; `homological dimension` — số chiều đồng điều; `high-dimensional space` — không gian số chiều cao.

**Register & nuance:** Fundamental concept across mathematics, physics, and data science.

**Examples:** `<Computing persistent homology across dimensions zero, one, and two reveals multi-scale structural properties of complex networks.> → Việc tính toán đồng điều bền vững qua các số chiều không, một và hai tiết lộ các thuộc tính cấu trúc đa tỷ lệ của các mạng phức tạp.`

**Liên결 tiếng Hàn:** `차원` (次元) — Số chiều.

---

## 23. threshold /ˈθrɛʃˌhoʊld/

**Loại/vị trí:** `noun [C]`. Serves as a noun representing cutoff values governing edge creation in filtrations.

**Core meaning:** A specific numerical limit governing when connections are formed in filtration complexes or when topological features are filtered as noise.

**Core meaning & mental image:** Ngưỡng giới hạn; hình ảnh vạch vôi trên sân thi đấu quy định ranh giới hợp lệ.

**Grammar & collocations:** `distance threshold` — ngưỡng khoảng cách; `filtration threshold` — ngưỡng lọc; `persistence threshold` — ngưỡng bền vững.

**Register & nuance:** Common in signal processing, statistics, and topological data analysis.

**Examples:** `<Varying the distance threshold continuously generates the sequence of simplicial complexes required for persistence barcode computation.> → Việc thay đổi liên tục ngưỡng khoảng cách tạo ra chuỗi phức đơn hình cần thiết cho việc tính toán mã vạch bền vững.`

**Liên결 tiếng Hàn:** `임계값 / 문턱값` — Ngưỡng giới hạn.

---

## 24. computation /ˌkɑːmpjuˈteɪʃən/

**Loại/vị trí:** `noun [U/C]`. Functions as a noun denoting algorithmic execution of mathematical operations.

**Core meaning:** The execution of systematic algorithmic procedures to calculate topological invariants, boundary matrices, and persistence diagrams from raw data.

**Core meaning & mental image:** Quá trình tính toán; hình ảnh máy tính xử lý hàng triệu phép tính ma trận để tìm ra kết quả cuối cùng.

**Grammar & collocations:** `efficient computation` — tính toán hiệu quả; `homology computation` — tính toán đồng điều; `computation time` — thời gian tính toán.

**Register & nuance:** Essential for practical applications of theoretical mathematics.

**Examples:** `<Accelerating the computation of persistent homology for massive datasets remains an active area of research in topological data analysis.> → Việc tăng tốc quá trình tính toán đồng điều bền vững cho các tập dữ liệu lớn vẫn là một lĩnh vực nghiên cứu tích cực trong phân tích dữ liệu tô-pô.`

**Liên결 tiếng Hàn:** `계산 / 연산` (計算) — Tính toán.

---

## 25. invariant /ɪnˈvɛriənt/ (already noted) -> Let's use `signature` /ˈsɪɡnətʃər/

**Loại/vị trí:** `noun [C]`. Serves as a noun denoting distinctive characterizing patterns or topological summaries.

**Core meaning:** A characteristic profile or summary representation derived from persistence diagrams that uniquely identifies the topological structure of a dataset.

**Core meaning & mental image:** Chữ ký đặc trưng; hình ảnh dấu vân tay hoặc nét chữ riêng biệt nhận diện một cá nhân.

**Grammar & collocations:** `topological signature` — chữ ký tô-pô; `persistence signature` — chữ ký bền vững; `discriminative signature` — chữ ký phân biệt.

**Register & nuance:** Popular in machine learning pipelines where topological summaries serve as vector features for classification.

**Examples:** `<Topological signatures extracted from persistence diagrams can be fed directly into machine learning classifiers to distinguish healthy and diseased tissue samples.> → Các chữ ký tô-pô được trích xuất từ các biểu đồ bền vững có thể được đưa trực tiếp vào các bộ phân loại học máy để phân biệt các mẫu mô khỏe mạnh và bị bệnh.`

**Liên결 tiếng Hàn:** `시그니처 / 고유 특징` — Chữ ký đặc trưng.

---

## Review in context (Part 1: Persistent Homology, Filtrations, and Simplicial Complexes)
Topological data analysis (TDA) provides powerful mathematical tools to study the shape of complex datasets. By leveraging **homology**, researchers can detect multi-dimensional holes in spatial data. The analysis typically begins with a **filtration**, such as the **Vietoris-Rips** complex or the **Čech** complex, which builds nested **simplicial** structures as a **metric** distance **threshold** expands. In this process, **Betti** numbers track qualitative features across dimensions. **Persistence** measures how long these topological structures survive before merging or disappearing. The resulting lifecycle can be visualized cleanly as a **barcode**, offering an intuitive summary of the underlying **topology**.

**Bản dịch tiếng Việt:**
Phân tích dữ liệu tô-pô (TDA) cung cấp các công cụ toán học mạnh mẽ để nghiên cứu hình dạng của các tập dữ liệu phức tạp. Bằng cách tận dụng **đồng điều**, các nhà nghiên cứu có thể phát hiện các lỗ hổng đa chiều trong dữ liệu không gian. Phân tích thường bắt đầu bằng một **phép lọc**, chẳng hạn như phức **Vietoris-Rips** hoặc phức **Čech**, xây dựng các cấu trúc **đơn hình** lồng nhau khi **ngưỡng** khoảng cách **metric** mở rộng. Trong quá trình này, các số **Betti** theo dõi các đặc trưng định tính qua các số chiều. **Tính bền vững** đo lường thời gian các cấu trúc tô-pô này tồn tại trước khi sáp nhập hoặc biến mất. Vòng đời kết quả có thể được trực quan hóa gọn gàng dưới dạng **mã vạch**, cung cấp một bản tóm tắt trực quan về **tô-pô** cơ sở.

---

## Review in context (Part 2: Stability Theorems, Metrics, and Topological Signatures)
When analyzing real-world observations contaminated by **noise**, ensuring robustness is vital. The **stability** theorem guarantees that small perturbations in input data lead to bounded changes in persistence diagrams, measured rigorously using **bottleneck** distance or **Wasserstein** metrics. To compute these diagrams efficiently, algorithms rely on **reduction** techniques applied to boundary matrices, often exploiting matrix **sparsity** and effective **triangulation** of low-dimensional **manifolds**. Furthermore, extracting **generators** helps pinpoint the exact spatial location of features. Ultimately, these topological summaries form a unique **signature** that captures the intrinsic **dimension** and **cluster** structure of high-dimensional data through advanced **computation**.

**Bản dịch tiếng Việt:**
Khi phân tích các quan sát thực tế bị ô nhiễm bởi **nhiễu**, việc đảm bảo tính mạnh mẽ là điều tối quan trọng. Định lý **ổn định** đảm bảo rằng các nhiễu động nhỏ trong dữ liệu đầu vào dẫn đến các thay đổi có giới hạn trong các biểu đồ bền vững, được đo lường nghiêm ngặt bằng cách sử dụng khoảng cách **cổ chai** hoặc các số đo **Wasserstein**. Để tính toán các biểu đồ này một cách hiệu quả, các thuật toán dựa vào các kỹ thuật **khử** được áp dụng cho các ma trận biên, thường khai thác tính **thưa thớt** của ma trận và **phép tam giác hóa** hiệu quả các **đa tạp** số chiều thấp. Hơn nữa, việc trích xuất các **phần tử sinh** giúp xác định chính xác vị trí không gian của các đặc trưng. Cuối cùng, các tóm tắt tô-pô này tạo thành một **chữ ký** duy nhất nắm bắt **số chiều** nội tại và cấu trúc **cụm** của dữ liệu số chiều cao thông qua quá trình **tính toán** nâng cao.
