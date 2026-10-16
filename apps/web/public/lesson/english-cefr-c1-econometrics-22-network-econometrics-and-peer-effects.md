# C1 Vocabulary 22 — Network econometrics and peer effects

This lesson follows how relationships among people, firms, or places can transmit outcomes and complicate causal inference.

Flow: **network effect → adjacency matrix → network exposure → peer effect → reflection problem → endogenous network formation → correlated effect → peer group → centrality measure → eigenvector centrality → network spillover → treatment interference → stable unit treatment value → exposure mapping → partial interference → cluster randomized design → network dependence → graphon → link prediction → network effect heterogeneity**.

## 1. network effect /ˈnɛtˌwɝk ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a change in one unit's outcome or value caused by the behavior, connections, or size of a surrounding network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome/value của một unit đổi do hành vi, connection hoặc quy mô network xung quanh.
**Grammar & collocations:** `network-effect estimate` — estimate; `benefit from connected users` — hưởng lợi.
**Examples:** `The platform's network effect grew as more local stores accepted its payment system.` → Network effect của platform tăng khi nhiều cửa hàng địa phương nhận hệ thống thanh toán.
**Liên kết tiếng Hàn:** `네트워크 효과`.

## 2. adjacency matrix /əˈdʒeɪsənsi ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix whose entries record whether, or how strongly, each pair of units is connected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận ghi unit nào nối với unit nào và connection mạnh bao nhiêu.
**Grammar & collocations:** `adjacency-matrix row` — row; `encode network links` — mã hóa.
**Examples:** `The adjacency matrix recorded collaboration ties among research labs.` → Adjacency matrix ghi connection hợp tác giữa các phòng lab.
**Liên kết tiếng Hàn:** `인접 행렬`.

## 3. network exposure /ˈnɛtˌwɝk ɪkˈspoʊʒər/
**Part of speech:** noun
**Core meaning (English):** the amount or type of influence a unit receives through its connected neighbors or network position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức/loại ảnh hưởng unit nhận qua neighbor hoặc vị trí trong network.
**Grammar & collocations:** `network-exposure measure` — measure; `calculate neighbors' treatment` — tính.
**Examples:** `Network exposure rose when a farmer's nearest neighbors adopted the new seed.` → Network exposure tăng khi hàng xóm gần nhất dùng giống mới.
**Liên kết tiếng Hàn:** `네트워크 노출`.

## 4. peer effect /pɪr ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** an effect on a unit's behavior or outcome associated with the behavior or characteristics of similar connected units.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome/hành vi của unit bị ảnh hưởng bởi behavior/characteristic của peer được kết nối.
**Grammar & collocations:** `peer-effect estimate` — estimate; `learn from classmates` — học theo.
**Examples:** `The study found a peer effect on attendance when students shared the same study group.` → Study thấy peer effect lên attendance khi học sinh cùng nhóm học.
**Liên kết tiếng Hàn:** `동료 효과`.

## 5. reflection problem /rɪˈflɛkʃən ˈprɑbləm/
**Part of speech:** noun
**Core meaning (English):** the difficulty of separating a unit's influence on peers from the peers' simultaneous influence on that unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khó tách ảnh hưởng unit lên peer khỏi ảnh hưởng peer lên chính unit cùng lúc.
**Grammar & collocations:** `reflection-problem identification` — identification; `separate peer influence from shared response` — tách.
**Examples:** `The reflection problem made it unclear whether the class improved together or one student led the others.` → Reflection problem khiến khó biết cả lớp cùng tiến bộ hay một học sinh dẫn dắt.
**Liên kết tiếng Hàn:** `반사 문제`.

## 6. endogenous network formation /ˌɛndəˈdʒinəs ˈnɛtˌwɝk fɔrˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a setting in which units choose their connections partly because of traits or outcomes that also affect the research variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** unit tự chọn connection dựa một phần vào trait/outcome cũng ảnh hưởng biến nghiên cứu.
**Grammar & collocations:** `endogenous-network-formation model` — model; `form links selectively` — tạo liên kết.
**Examples:** `Endogenous network formation made high-performing firms more likely to partner with one another.` → Network formation endogenous khiến công ty performance cao dễ hợp tác với nhau hơn.
**Liên kết tiếng Hàn:** `내생적 네트워크 형성`.

## 7. correlated effect /ˈkɔrəˌleɪtəd ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** an association caused by shared background or environment rather than direct influence between connected units.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** association do background/môi trường chung, không phải ảnh hưởng trực tiếp giữa unit kết nối.
**Grammar & collocations:** `correlated-effect control` — control; `account for a shared neighborhood` — tính đến.
**Examples:** `A correlated effect arose because students in the same school faced the same principal.` → Correlated effect xuất hiện vì học sinh cùng trường chịu cùng hiệu trưởng.
**Liên kết tiếng Hàn:** `상관 효과`.

## 8. peer group /pɪr ɡruːp/
**Part of speech:** noun
**Core meaning (English):** a defined set of connected or comparable units whose characteristics are used to represent a unit's social or economic environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập unit kết nối hoặc tương đồng, đại diện môi trường xã hội/kinh tế của một unit.
**Grammar & collocations:** `peer-group average` — average; `define a comparison group` — xác định.
**Examples:** `The peer group was defined as workers in the same occupation and commuting zone.` → Peer group gồm worker cùng nghề và vùng đi lại.
**Liên kết tiếng Hàn:** `동료 집단`.

## 9. centrality measure /sɛnˈtræləti ˈmɛʒər/
**Part of speech:** noun
**Core meaning (English):** a numerical measure of how structurally prominent or well connected a unit is within a network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số đo mức unit nổi bật hoặc kết nối tốt về mặt cấu trúc trong network.
**Grammar & collocations:** `centrality-measure ranking` — ranking; `identify influential nodes` — xác định.
**Examples:** `The centrality measure identified clinics that connected otherwise separate referral networks.` → Centrality measure xác định clinic nối các network referral tách biệt.
**Liên kết tiếng Hàn:** `중심성 척도`.

## 10. eigenvector centrality /ˌaɪɡənˈvɛktər sɛnˈtræləti/
**Part of speech:** noun
**Core meaning (English):** a centrality measure that gives a unit high importance when it connects to other important units.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** unit quan trọng nếu kết nối với các unit cũng quan trọng.
**Grammar & collocations:** `eigenvector-centrality score` — score; `weight influential neighbors` — cân trọng số.
**Examples:** `The supplier had high eigenvector centrality because it served several well-connected manufacturers.` → Supplier có eigenvector centrality cao vì phục vụ nhiều manufacturer kết nối tốt.
**Liên kết tiếng Hàn:** `고유벡터 중심성`.

## 11. network spillover /ˈnɛtˌwɝk ˈspɪlˌoʊvər/
**Part of speech:** noun
**Core meaning (English):** an effect that travels from treated or changed units to their connected neighbors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect lan từ unit treated/changed sang neighbor được kết nối.
**Grammar & collocations:** `network-spillover pathway` — pathway; `transmit a program effect` — truyền.
**Examples:** `The vaccination campaign generated a network spillover among unvaccinated household members.` → Chiến dịch vaccine tạo spillover trong thành viên hộ chưa tiêm.
**Liên kết tiếng Hàn:** `네트워크 파급 효과`.

## 12. treatment interference /ˈtriːtmənt ˌɪntərˈfɪrəns/
**Part of speech:** noun
**Core meaning (English):** a violation of the assumption that one unit's outcome is unaffected by the treatment assigned to another unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vi phạm giả định outcome của unit không bị treatment của unit khác tác động.
**Grammar & collocations:** `treatment-interference assumption` — assumption; `allow neighbor treatment to matter` — cho phép.
**Examples:** `Treatment interference was expected because mosquito control in one block affected nearby blocks.` → Interference được dự đoán vì kiểm soát muỗi một block ảnh hưởng block bên cạnh.
**Liên kết tiếng Hàn:** `처치 간섭`.

## 13. stable unit treatment value /ˈsteɪbəl ˈjuːnɪt ˈtriːtmənt ˈvælju/
**Part of speech:** noun
**Core meaning (English):** the assumption that each unit has a well-defined outcome under each treatment and that other units' assignments do not alter it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi unit có outcome xác định cho mỗi treatment và assignment của unit khác không đổi outcome đó.
**Grammar & collocations:** `stable-unit-treatment-value assumption` — assumption; `rule out interference` — loại trừ.
**Examples:** `The stable unit treatment value assumption was implausible for a contagious health intervention.` → Giả định SUTVA không hợp lý với intervention sức khỏe lây lan.
**Liên kết tiếng Hàn:** `안정적 단위 처치 가치`.

## 14. exposure mapping /ɪkˈspoʊʒər ˈmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** a rule that compresses a unit's own treatment and neighbors' treatments into a defined exposure condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule nén treatment của unit và neighbor thành một exposure condition xác định.
**Grammar & collocations:** `exposure-mapping function` — function; `classify neighborhood treatment` — phân loại.
**Examples:** `Exposure mapping classified a household by its own vaccination and the vaccination rate next door.` → Exposure mapping phân loại hộ theo tiêm chủng của mình và rate nhà bên.
**Liên kết tiếng Hàn:** `노출 매핑`.

## 15. partial interference /ˈpɑrʃəl ˌɪntərˈfɪrəns/
**Part of speech:** noun
**Core meaning (English):** a setting in which treatment can spill over within predefined groups but not across those groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** treatment spillover xảy ra trong group định trước nhưng không đi qua group khác.
**Grammar & collocations:** `partial-interference assumption` — assumption; `define interference clusters` — xác định.
**Examples:** `Partial interference allowed treatment effects among roommates but assumed no effect across dormitories.` → Partial interference cho effect giữa roommate nhưng không giữa dormitory.
**Liên kết tiếng Hàn:** `부분 간섭`.

## 16. cluster randomized design /ˈklʌstər ˈrændəˌmaɪzd dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** an experiment that assigns groups, sites, or networks to treatment rather than assigning individual units separately.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** experiment randomize group/site/network thay vì từng unit riêng.
**Grammar & collocations:** `cluster-randomized-design power` — power; `assign schools to arms` — phân bổ.
**Examples:** `The cluster randomized design assigned entire villages to the training program.` → Thiết kế random theo cluster phân bổ cả làng vào chương trình training.
**Liên kết tiếng Hàn:** `군집 무작위 설계`.

## 17. network dependence /ˈnɛtˌwɝk dɪˈpɛndəns/
**Part of speech:** noun
**Core meaning (English):** statistical dependence among observations created by links, shared neighbors, or common network structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observation phụ thuộc thống kê do link, neighbor chung hoặc cấu trúc network chung.
**Grammar & collocations:** `network-dependence correction` — correction; `cluster standard errors by component` — cluster.
**Examples:** `Network dependence made ordinary independent-observation standard errors too optimistic.` → Dependence làm standard error giả định độc lập quá lạc quan.
**Liên kết tiếng Hàn:** `네트워크 의존성`.

## 18. graphon /ˈɡræfɑn/
**Part of speech:** noun
**Core meaning (English):** a measurable function used as a population-level representation of connection probabilities in a large network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm đo được đại diện xác suất connection ở mức population trong network lớn.
**Grammar & collocations:** `graphon model` — model; `approximate a dense network` — xấp xỉ.
**Examples:** `The graphon model represented how connection probability changed with two latent positions.` → Graphon model biểu diễn xác suất connection đổi theo hai latent position.
**Liên kết tiếng Hàn:** `그래폰`.

## 19. link prediction /lɪŋk prɪˈdɪkʃən/
**Part of speech:** noun
**Core meaning (English):** prediction of a connection that has not yet been observed or recording of a likely future link.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán connection chưa quan sát hoặc có khả năng hình thành trong tương lai.
**Grammar & collocations:** `link-prediction score` — score; `forecast a future partnership` — dự báo.
**Examples:** `Link prediction identified firms likely to form a research partnership next year.` → Link prediction xác định công ty có khả năng hợp tác nghiên cứu năm tới.
**Liên kết tiếng Hàn:** `링크 예측`.

## 20. network effect heterogeneity /ˈnɛtˌwɝk ɪˈfɛkt ˌhɛtərədʒəˈniəti/
**Part of speech:** noun
**Core meaning (English):** variation in the size or direction of a network effect across units, positions, or types of connection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** network effect khác nhau về độ lớn/hướng giữa unit, vị trí hoặc loại connection.
**Grammar & collocations:** `network-effect-heterogeneity analysis` — analysis; `compare central and peripheral units` — so sánh.
**Examples:** `Network effect heterogeneity was strongest between central hospitals and isolated clinics.` → Heterogeneity của network effect mạnh nhất giữa bệnh viện trung tâm và clinic cô lập.
**Liên kết tiếng Hàn:** `네트워크 효과 이질성`.

## Review in context

A **network effect** can be represented by an **adjacency matrix** and summarized as a unit's **network exposure**. A **peer effect** is difficult to identify because of the **reflection problem**, **endogenous network formation**, and **correlated effects** within a **peer group**. A **centrality measure**, such as **eigenvector centrality**, can reveal who transmits a **network spillover**. **Treatment interference** violates the **stable unit treatment value** assumption, so analysts may use **exposure mapping** and allow **partial interference** within a **cluster randomized design**. Standard errors must address **network dependence**; large networks may be modeled with a **graphon**, while **link prediction** and **network effect heterogeneity** describe future and uneven connections.

**Bản dịch tiếng Việt:** **Network effect** có thể biểu diễn bằng **adjacency matrix** và tóm tắt thành **network exposure** của unit. **Peer effect** khó nhận diện vì **reflection problem**, **endogenous network formation** và **correlated effect** trong **peer group**. **Centrality measure**, như **eigenvector centrality**, cho thấy ai truyền **network spillover**. **Treatment interference** vi phạm giả định **stable unit treatment value**, nên analyst có thể dùng **exposure mapping** và cho phép **partial interference** trong **cluster randomized design**. Standard error phải xử lý **network dependence**; network lớn có thể model bằng **graphon**, còn **link prediction** và **network effect heterogeneity** mô tả connection tương lai và không đồng đều.
