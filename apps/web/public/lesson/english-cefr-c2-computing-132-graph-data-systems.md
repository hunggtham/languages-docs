# C2 Vocabulary — Graph data systems

This lesson follows a graph query from representation and traversal through path constraints, projections, and temporal relationships.

Flow: **adjacency list → edge list → graph traversal → breadth-first search → depth-first search → shortest-path query → centrality score → connected component → graph projection → property graph → RDF triple → named graph → ontology mapping → path constraint → variable-length path → temporal edge → edge weight → traversal frontier → graph pattern → subgraph match**.

## 1. adjacency list /əˈdʒeɪsənsi lɪst/
**Part of speech:** noun
**Core meaning (English):** a representation storing each vertex together with the vertices or edges directly connected to it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn lưu mỗi vertex cùng vertex/edge nối trực tiếp.
**Grammar & collocations:** `adjacency-list representation` — biểu diễn; `enumerate neighboring vertices` — liệt kê.
**Examples:** `The adjacency list made it cheap to inspect the immediate neighbors of a customer node.` → List giúp xem neighbor trực tiếp rẻ.
**Liên kết tiếng Hàn:** `인접 리스트`.

## 2. edge list /edʒ lɪst/
**Part of speech:** noun
**Core meaning (English):** a collection of records describing graph edges and their endpoint vertices or properties.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập record mô tả edge, endpoint và property.
**Grammar & collocations:** `edge-list import` — import; `stream relationship records` — stream.
**Examples:** `The edge list imported account transfers before the graph index was built.` → List import transfer trước khi build index.
**Liên kết tiếng Hàn:** `에지 목록`.

## 3. graph traversal /ɡrɑːf trəˈvɜːrsəl/
**Part of speech:** noun
**Core meaning (English):** systematically visiting vertices or edges according to a graph query or search rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** duyệt vertex/edge có hệ thống theo rule query/search.
**Grammar & collocations:** `graph-traversal state` — state; `visit reachable neighbors` — duyệt.
**Examples:** `Graph traversal followed ownership edges until it reached the controlling organization.` → Traversal theo edge ownership đến organization.
**Liên kết tiếng Hàn:** `그래프 순회`.

## 4. breadth-first search /bredθ fɜːrst sɜːrtʃ/
**Part of speech:** noun
**Core meaning (English):** a traversal that visits all vertices at one distance before moving to the next distance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** duyệt hết vertex cùng khoảng cách trước khi đi xa hơn.
**Grammar & collocations:** `breadth-first-search frontier` — frontier; `find the minimum hop count` — tìm.
**Examples:** `Breadth-first search found the closest service center in four hops.` → BFS tìm center gần nhất bốn hop.
**Liên kết tiếng Hàn:** `너비 우선 탐색`.

## 5. depth-first search /depθ fɜːrst sɜːrtʃ/
**Part of speech:** noun
**Core meaning (English):** a traversal that follows one path as far as possible before backtracking to another branch.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đi sâu một path rồi quay lui sang nhánh khác.
**Grammar & collocations:** `depth-first-search stack` — stack; `explore a dependency branch` — khám phá.
**Examples:** `Depth-first search traced one dependency chain until it found a cycle.` → DFS theo chain đến khi gặp cycle.
**Liên kết tiếng Hàn:** `깊이 우선 탐색`.

## 6. shortest-path query /ˈʃɔːrtɪst pɑːθ ˈkwɪəri/
**Part of speech:** noun
**Core meaning (English):** a query seeking the least-cost or fewest-edge route between two graph vertices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** query tìm route ít cost hoặc ít edge nhất giữa hai vertex.
**Grammar & collocations:** `shortest-path-query weight` — weight; `route around a failed edge` — định tuyến.
**Examples:** `The shortest-path query found a backup route around the unavailable link.` → Query tìm route backup quanh link lỗi.
**Liên kết tiếng Hàn:** `최단 경로 쿼리`.

## 7. centrality score /senˈtræləti skɔːr/
**Part of speech:** noun
**Core meaning (English):** a measure estimating how structurally important or influential a vertex is in a graph.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measure mức vertex quan trọng hoặc ảnh hưởng trong graph.
**Grammar & collocations:** `centrality-score ranking` — ranking; `identify a highly connected hub` — nhận diện.
**Examples:** `The centrality score identified the account that connected several otherwise separate clusters.` → Score tìm account nối nhiều cluster.
**Liên kết tiếng Hàn:** `중심성 점수`.

## 8. connected component /kəˈnektɪd kəmˈpoʊnənt/
**Part of speech:** noun
**Core meaning (English):** a maximal group of vertices connected to one another by paths within a graph.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm vertex lớn nhất nối với nhau qua path.
**Grammar & collocations:** `connected-component count` — count; `separate isolated clusters` — tách.
**Examples:** `The connected component represented one network of devices that could communicate.` → Component là network device liên lạc được.
**Liên kết tiếng Hàn:** `연결 요소`.

## 9. graph projection /ɡrɑːf prəˈdʒekʃən/
**Part of speech:** noun
**Core meaning (English):** a temporary graph view containing selected vertices, edges, or properties for a particular analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** view graph tạm chỉ giữ vertex, edge hoặc property cần phân tích.
**Grammar & collocations:** `graph-projection scope` — scope; `project only active relationships` — chiếu.
**Examples:** `The graph projection removed expired contracts before the risk algorithm ran.` → Projection bỏ contract hết hạn.
**Liên kết tiếng Hàn:** `그래프 프로젝션`.

## 10. property graph /ˈprɒpərti ɡrɑːf/
**Part of speech:** noun
**Core meaning (English):** a graph model in which vertices and edges carry key-value properties.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph model trong đó vertex/edge có property key-value.
**Grammar & collocations:** `property-graph schema` — schema; `attach a timestamp to an edge` — gắn.
**Examples:** `The property graph stored approval dates directly on the relationship edge.` → Property graph lưu ngày duyệt trên edge.
**Liên kết tiếng Hàn:** `프로퍼티 그래프`.

## 11. RDF triple /ˌɑːr diː ˈef ˈtrɪpəl/
**Part of speech:** noun
**Core meaning (English):** a subject–predicate–object statement used to represent a fact in a semantic graph.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát biểu subject–predicate–object biểu diễn fact trong semantic graph.
**Grammar & collocations:** `RDF-triple store` — store; `assert a relationship` — khẳng định.
**Examples:** `The RDF triple stated that the laboratory was operated by the university.` → Triple ghi laboratory do university vận hành.
**Liên kết tiếng Hàn:** `RDF 트리플`.

## 12. named graph /neɪmd ɡrɑːf/
**Part of speech:** noun
**Core meaning (English):** a separately identified graph used to group statements under a source, context, or authority.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph có ID riêng để gom statement theo source/context/authority.
**Grammar & collocations:** `named-graph identifier` — identifier; `query one provenance context` — truy.
**Examples:** `The named graph separated facts supplied by the regulator from facts supplied by vendors.` → Named graph tách facts theo nguồn.
**Liên kết tiếng Hàn:** `명명된 그래프`.

## 13. ontology mapping /ɒnˈtɒlədʒi ˈmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** aligning concepts and relationships from one vocabulary or knowledge model with another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn chỉnh concept và relation giữa hai vocabulary/knowledge model.
**Grammar & collocations:** `ontology-mapping rule` — rule; `align equivalent concepts` — căn chỉnh.
**Examples:** `Ontology mapping aligned the partner's “clinic” concept with the platform's “facility” class.` → Mapping căn clinic với facility.
**Liên kết tiếng Hàn:** `온톨로지 매핑`.

## 14. path constraint /pɑːθ kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a rule limiting which edge sequences or relationship types a graph traversal may follow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule giới hạn chuỗi edge/type relation traversal được đi.
**Grammar & collocations:** `path-constraint expression` — expression; `exclude ownership cycles` — loại.
**Examples:** `The path constraint allowed reporting lines but excluded informal social links.` → Constraint cho reporting line, bỏ social link.
**Liên kết tiếng Hàn:** `경로 제약`.

## 15. variable-length path /ˈveriəbəl leŋθ pɑːθ/
**Part of speech:** noun
**Core meaning (English):** a path pattern that may contain an allowed range of edge counts rather than one fixed length.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** path pattern cho phép range số edge thay vì một length cố định.
**Grammar & collocations:** `variable-length-path bound` — giới hạn; `traverse one to five hops` — duyệt.
**Examples:** `The variable-length path found suppliers reachable through one to three ownership links.` → Path tìm supplier qua 1–3 link.
**Liên kết tiếng Hàn:** `가변 길이 경로`.

## 16. temporal edge /ˈtempərəl edʒ/
**Part of speech:** noun
**Core meaning (English):** a relationship carrying validity times or historical versions so its meaning can change over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** relation có thời gian hiệu lực/version lịch sử, meaning đổi theo thời gian.
**Grammar & collocations:** `temporal-edge interval` — interval; `query a relationship as of a date` — truy.
**Examples:** `The temporal edge showed that the company owned the site only during the lease period.` → Edge cho ownership trong thời hạn lease.
**Liên kết tiếng Hàn:** `시간적 에지`.

## 17. edge weight /edʒ weɪt/
**Part of speech:** noun
**Core meaning (English):** a numeric value on an edge representing cost, distance, confidence, strength, or another relationship measure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value số trên edge biểu diễn cost, distance, confidence hoặc strength.
**Grammar & collocations:** `edge-weight update` — cập nhật; `prefer a lower-cost connection` — ưu tiên.
**Examples:** `The route planner used travel time as the edge weight.` → Planner dùng travel time làm weight.
**Liên kết tiếng Hàn:** `에지 가중치`.

## 18. traversal frontier /trəˈvɜːrsəl frʌnˈtɪər/
**Part of speech:** noun
**Core meaning (English):** the set of discovered but not yet expanded vertices or paths in a graph traversal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập vertex/path đã thấy nhưng chưa mở rộng trong traversal.
**Grammar & collocations:** `traversal-frontier size` — kích thước; `expand the next candidates` — mở rộng.
**Examples:** `The traversal frontier grew rapidly when the query reached a highly connected hub.` → Frontier phình nhanh khi gặp hub nhiều link.
**Liên kết tiếng Hàn:** `순회 프런티어`.

## 19. graph pattern /ɡrɑːf ˈpætərn/
**Part of speech:** noun
**Core meaning (English):** a structural arrangement of vertices and edges that a graph query seeks to match.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc vertex/edge mà graph query cần tìm match.
**Grammar & collocations:** `graph-pattern expression` — expression; `match a triangle relationship` — match.
**Examples:** `The graph pattern searched for a customer, an order, and a shipment connected in sequence.` → Pattern tìm customer–order–shipment nối nhau.
**Liên kết tiếng Hàn:** `그래프 패턴`.

## 20. subgraph match /ˈsʌbɡrɑːf mætʃ/
**Part of speech:** noun
**Core meaning (English):** a portion of a graph that satisfies a requested pattern and its property conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần graph thỏa pattern và điều kiện property.
**Grammar & collocations:** `subgraph-match result` — result; `return a connected motif` — trả.
**Examples:** `The subgraph match identified a recurring approval pattern across several projects.` → Match tìm pattern approval lặp.
**Liên kết tiếng Hàn:** `서브그래프 일치`.

## Review in context

An **adjacency list** and **edge list** represent relationships; **graph traversal**, **breadth-first search**, and **depth-first search** explore them. A **shortest-path query** uses an **edge weight**, while a **centrality score** highlights important vertices and a **connected component** groups reachable nodes. A **graph projection** creates a focused **property graph**; an **RDF triple** and **named graph** add semantic context, while **ontology mapping** aligns vocabularies. A **path constraint** shapes a **variable-length path**, a **temporal edge** preserves history, and a **traversal frontier** tracks work. A **graph pattern** describes structure, and a **subgraph match** returns the satisfying motif.

**Bản dịch tiếng Việt:** **Adjacency list** và **edge list** biểu diễn relation; **graph traversal**, **breadth-first search** và **depth-first search** khám phá chúng. **Shortest-path query** dùng **edge weight**, **centrality score** làm nổi bật vertex quan trọng, còn **connected component** gom node liên thông. **Graph projection** tạo **property graph** tập trung; **RDF triple** và **named graph** thêm ngữ cảnh semantic, còn **ontology mapping** căn vocabulary. **Path constraint** định hình **variable-length path**, **temporal edge** giữ lịch sử, và **traversal frontier** theo dõi việc. **Graph pattern** mô tả cấu trúc, còn **subgraph match** trả motif thỏa điều kiện.
