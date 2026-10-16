# C2 Vocabulary 112 — Electronic market structure and execution

This lesson follows a modern trade from the order book to execution, showing how liquidity, speed, incentives, and manipulation shape the prices investors actually receive.

Flow: **order book → market impact → slippage → liquidity provision → dark pool → latency arbitrage → co-location → quote stuffing → spoofing → wash trading → circuit breaker → volatility clustering → realized volatility → order flow → execution algorithm → smart order routing → maker-taker model → limit order → market order → fill probability**.

## 1. order book /ˈɔrdɚ bʊk/
**Part of speech:** noun
**Core meaning (English):** a live record of buy and sell orders arranged by price and quantity in a market.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sổ lệnh; hình dung một bảng điện tử liên tục xếp các mức giá người mua và người bán đang chờ.
**Grammar & collocations:** `electronic order book` — sổ lệnh điện tử; `order-book depth` — độ sâu sổ lệnh; `read the order book` — đọc sổ lệnh.
**Examples:** `The order book thinned rapidly when the central-bank announcement was released.` → Sổ lệnh mỏng đi nhanh chóng khi thông báo của ngân hàng trung ương được công bố.
**Liên kết tiếng Hàn:** `호가창` (hogachang) — sổ lệnh.

## 2. market impact /ˈmɑrkət ˈɪmpækt/
**Part of speech:** noun
**Core meaning (English):** the movement in a market price caused by executing a trade, especially a large one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tác động thị trường; hình dung chính giao dịch của mình đẩy giá đi vì đã ăn hết thanh khoản đang chờ.
**Grammar & collocations:** `market-impact model` — mô hình tác động thị trường; `minimize market impact` — giảm tác động thị trường; `temporary market impact` — tác động thị trường tạm thời.
**Examples:** `The fund split the order into smaller pieces to reduce market impact.` → Quỹ chia lệnh thành các phần nhỏ để giảm tác động thị trường.
**Liên kết tiếng Hàn:** `시장 충격` (sijang chung-gyeok) — tác động thị trường.

## 3. slippage /ˈslɪpɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the difference between the price expected when an order is placed and the price at which it is actually executed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trượt giá; hình dung giá “trượt” khỏi mức bạn nhìn thấy trước khi lệnh được khớp.
**Grammar & collocations:** `execution slippage` — trượt giá khi khớp lệnh; `positive slippage` — trượt giá có lợi; `account for slippage` — tính đến trượt giá.
**Examples:** `The fast-moving market created substantial slippage on the stop order.` → Thị trường biến động nhanh tạo ra trượt giá đáng kể cho lệnh dừng.
**Liên kết tiếng Hàn:** `슬리피지` (seullipiji) — trượt giá.

## 4. liquidity provision /lɪˈkwɪdəti prəˈvɪʒən/
**Part of speech:** noun
**Core meaning (English):** the activity of continuously posting buy and sell prices so other participants can trade more easily.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cung cấp thanh khoản; hình dung một nhà giao dịch luôn đứng sẵn ở cả hai phía để người khác có thể mua hoặc bán.
**Grammar & collocations:** `liquidity-provision strategy` — chiến lược cung cấp thanh khoản; `automated liquidity provision` — cung cấp thanh khoản tự động; `reward liquidity provision` — khuyến khích cung cấp thanh khoản.
**Examples:** `The exchange rewards liquidity provision because it keeps spreads narrow.` → Sàn giao dịch khuyến khích cung cấp thanh khoản vì hoạt động này giữ chênh lệch giá hẹp.
**Liên kết tiếng Hàn:** `유동성 공급` (yudongseong gonggeup) — cung cấp thanh khoản.

## 5. dark pool /dɑrk puːl/
**Part of speech:** noun
**Core meaning (English):** a private trading venue that allows orders to be matched without displaying their full details to the public market.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bể tối; hình dung một nơi khớp lệnh kín, giúp giao dịch lớn không lập tức để lộ ý định ra bảng giá công khai.
**Grammar & collocations:** `institutional dark pool` — bể tối dành cho tổ chức; `dark-pool execution` — khớp lệnh tại bể tối; `route an order to a dark pool` — định tuyến lệnh đến bể tối.
**Examples:** `The pension fund used a dark pool to reduce information leakage during the large sale.` → Quỹ hưu trí dùng bể tối để giảm rò rỉ thông tin trong đợt bán lớn.
**Liên kết tiếng Hàn:** `다크 풀` (dakeu pul) — bể tối.

## 6. latency arbitrage /ˈleɪtənsi ˈɑrbətrɑʒ/
**Part of speech:** noun
**Core meaning (English):** a strategy that exploits tiny differences in the time it takes market information or orders to reach different participants.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kinh doanh chênh lệch độ trễ; hình dung giành lợi thế chỉ trong vài microsecond vì thấy tín hiệu trước người khác.
**Grammar & collocations:** `latency-arbitrage strategy` — chiến lược kinh doanh chênh lệch độ trễ; `profit from latency arbitrage` — kiếm lời từ chênh lệch độ trễ; `latency-arbitrage risk` — rủi ro chênh lệch độ trễ.
**Examples:** `The venue changed its matching rules to limit latency arbitrage.` → Sàn thay đổi quy tắc khớp lệnh để hạn chế kinh doanh chênh lệch độ trễ.
**Liên kết tiếng Hàn:** `지연 차익거래` (jiyeon chaiggeorae) — kinh doanh chênh lệch độ trễ.

## 7. co-location /ˌkoʊloʊˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the practice of placing a trading computer in the same data center as an exchange's matching engine to reduce communication time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đặt máy đồng địa điểm; hình dung đặt máy chủ ngay cạnh hệ thống khớp lệnh để tín hiệu đi quãng đường ngắn nhất.
**Grammar & collocations:** `exchange co-location` — đặt máy đồng địa điểm tại sàn; `co-location service` — dịch vụ đồng địa điểm; `pay for co-location` — trả phí đồng địa điểm.
**Examples:** `The firm paid for co-location to shave microseconds off its round-trip time.` → Công ty trả phí đồng địa điểm để giảm vài microsecond trong thời gian khứ hồi.
**Liên kết tiếng Hàn:** `코로케이션` (korokeisyeon) — đặt máy đồng địa điểm.

## 8. quote stuffing /kwoʊt ˈstʌfɪŋ/
**Part of speech:** noun
**Core meaning (English):** the rapid submission and cancellation of large numbers of orders to overload or confuse other market participants.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhồi báo giá; hình dung bơm hàng loạt lệnh vào hệ thống rồi hủy ngay để làm đối thủ chậm hoặc khó đọc tín hiệu.
**Grammar & collocations:** `suspected quote stuffing` — hành vi nhồi báo giá bị nghi ngờ; `quote-stuffing pattern` — mô thức nhồi báo giá; `detect quote stuffing` — phát hiện nhồi báo giá.
**Examples:** `The regulator flagged quote stuffing after observing millions of canceled orders in seconds.` → Cơ quan quản lý đánh dấu hành vi nhồi báo giá sau khi thấy hàng triệu lệnh bị hủy trong vài giây.
**Liên kết tiếng Hàn:** `호가 쌓기` (hoga ssahgi) — nhồi báo giá.

## 9. spoofing /ˈspuːfɪŋ/
**Part of speech:** noun
**Core meaning (English):** the illegal practice of placing orders with no intention of executing them in order to mislead the market about supply or demand.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả lệnh; hình dung dựng một “bức tường” mua hoặc bán giả để người khác tưởng lực thị trường đang mạnh.
**Grammar & collocations:** `spoofing allegation` — cáo buộc giả lệnh; `spoofing scheme` — âm mưu giả lệnh; `charge someone with spoofing` — truy tố ai vì giả lệnh.
**Examples:** `The trader was fined for spoofing after placing and canceling deceptive sell orders.` → Nhà giao dịch bị phạt vì giả lệnh sau khi đặt rồi hủy các lệnh bán nhằm đánh lừa.
**Liên kết tiếng Hàn:** `스푸핑` (seupuping) — giả lệnh.

## 10. wash trading /wɑʃ ˈtreɪdɪŋ/
**Part of speech:** noun
**Core meaning (English):** the practice of buying and selling an asset in a coordinated way so that activity appears higher without a genuine change in ownership or risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giao dịch tự mua bán; hình dung tài sản chạy qua lại giữa các tài khoản liên quan để tạo ảo giác thanh khoản.
**Grammar & collocations:** `wash-trading scheme` — kế hoạch giao dịch tự mua bán; `prohibit wash trading` — cấm giao dịch tự mua bán; `wash-trading volume` — khối lượng giao dịch tự mua bán.
**Examples:** `The platform removed accounts suspected of wash trading to inflate token volume.` → Nền tảng xóa các tài khoản bị nghi giao dịch tự mua bán để thổi phồng khối lượng token.
**Liên kết tiếng Hàn:** `자전거래` (jajeongeorae) — giao dịch tự mua bán.

## 11. circuit breaker /ˈsɝkət ˌbreɪkɚ/
**Part of speech:** noun
**Core meaning (English):** a rule that temporarily halts trading when a price moves beyond a specified limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngắt mạch giao dịch; hình dung thị trường tự “ngắt điện” trong chốc lát để ngăn hoảng loạn lan quá nhanh.
**Grammar & collocations:** `market-wide circuit breaker` — ngắt mạch toàn thị trường; `trigger a circuit breaker` — kích hoạt ngắt mạch; `circuit-breaker threshold` — ngưỡng ngắt mạch.
**Examples:** `The circuit breaker paused trading after the index fell seven percent.` → Cơ chế ngắt mạch tạm dừng giao dịch sau khi chỉ số giảm bảy phần trăm.
**Liên kết tiếng Hàn:** `서킷 브레이커` (seokit beureikeo) — ngắt mạch giao dịch.

## 12. volatility clustering /ˌvɑləˈtɪləti ˈklʌstərɪŋ/
**Part of speech:** noun
**Core meaning (English):** the tendency for periods of large price changes to be followed by more large changes, and quiet periods by more quiet changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cụm biến động; hình dung biến động lớn xuất hiện thành “cụm” thay vì rải đều ngẫu nhiên theo thời gian.
**Grammar & collocations:** `volatility-clustering effect` — hiệu ứng cụm biến động; `model volatility clustering` — mô hình hóa cụm biến động; `persistent volatility clustering` — cụm biến động dai dẳng.
**Examples:** `Volatility clustering made a constant-risk model underestimate the chance of another large move.` → Cụm biến động khiến mô hình rủi ro không đổi đánh giá thấp khả năng lại có một biến động lớn.
**Liên kết tiếng Hàn:** `변동성 군집` (byeondongseong gunjip) — cụm biến động.

## 13. realized volatility /ˈriəlaɪzd ˌvɑləˈtɪləti/
**Part of speech:** noun
**Core meaning (English):** a measure of how much an asset's price actually fluctuated over a past period, calculated from observed returns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến động thực hiện; hình dung độ rung lắc đã xảy ra thật, đối lập với biến động ngụ ý do thị trường dự báo.
**Grammar & collocations:** `realized-volatility estimate` — ước lượng biến động thực hiện; `daily realized volatility` — biến động thực hiện hằng ngày; `compare implied and realized volatility` — so sánh biến động ngụ ý và thực hiện.
**Examples:** `Realized volatility rose sharply after the earnings surprise.` → Biến động thực hiện tăng mạnh sau bất ngờ về lợi nhuận.
**Liên kết tiếng Hàn:** `실현 변동성` (silhyeon byeondongseong) — biến động thực hiện.

## 14. order flow /ˈɔrdɚ floʊ/
**Part of speech:** noun
**Core meaning (English):** the stream and directional pattern of buy and sell orders entering a market.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng lệnh; hình dung dòng nước mua–bán liên tục chảy vào thị trường và tạo áp lực lên giá.
**Grammar & collocations:** `order-flow imbalance` — mất cân bằng dòng lệnh; `analyze order flow` — phân tích dòng lệnh; `order-flow toxicity` — tính độc của dòng lệnh.
**Examples:** `The model detected persistent buy order flow before the price breakout.` → Mô hình phát hiện dòng lệnh mua dai dẳng trước khi giá bứt phá.
**Liên kết tiếng Hàn:** `주문 흐름` (jumun heureum) — dòng lệnh.

## 15. execution algorithm /ˌɛksəˈkjuːʃən ˈælɡəˌrɪðəm/
**Part of speech:** noun
**Core meaning (English):** an automated procedure that breaks up and places a trade to balance speed, cost, and market impact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán khớp lệnh; hình dung chương trình tự quyết định lúc nào, ở đâu và bao nhiêu phần lệnh nên được gửi.
**Grammar & collocations:** `execution-algorithm parameter` — tham số thuật toán khớp lệnh; `volume-weighted execution algorithm` — thuật toán khớp lệnh theo khối lượng; `tune an execution algorithm` — tinh chỉnh thuật toán khớp lệnh.
**Examples:** `The execution algorithm slowed down when liquidity disappeared from the order book.` → Thuật toán khớp lệnh chậm lại khi thanh khoản biến mất khỏi sổ lệnh.
**Liên kết tiếng Hàn:** `주문 실행 알고리즘` (jumun silhaeng algorijeum) — thuật toán khớp lệnh.

## 16. smart order routing /smɑrt ˈɔrdɚ ˈraʊtɪŋ/
**Part of speech:** noun
**Core meaning (English):** the automated selection of trading venues and order instructions to seek the best available execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định tuyến lệnh thông minh; hình dung hệ thống liên tục chọn sàn và mức giá tốt nhất thay vì gửi lệnh mù quáng đến một nơi.
**Grammar & collocations:** `smart-order-routing system` — hệ thống định tuyến lệnh thông minh; `smart order routing logic` — logic định tuyến lệnh thông minh; `optimize smart order routing` — tối ưu định tuyến lệnh thông minh.
**Examples:** `Smart order routing sent portions of the order to three venues at once.` → Định tuyến lệnh thông minh gửi các phần lệnh đến ba sàn cùng lúc.
**Liên kết tiếng Hàn:** `스마트 주문 라우팅` (seumateu jumun rauting) — định tuyến lệnh thông minh.

## 17. maker-taker model /ˈmeɪkɚ ˈteɪkɚ ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a fee structure that rewards orders adding liquidity and charges orders removing liquidity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình maker–taker; hình dung người đặt thanh khoản được giảm phí hoặc nhận rebate, còn người lấy thanh khoản trả phí.
**Grammar & collocations:** `maker-taker fee model` — mô hình phí maker–taker; `maker rebate` — khoản hoàn phí cho bên tạo thanh khoản; `taker fee` — phí bên lấy thanh khoản.
**Examples:** `The maker-taker model influenced where the fund posted its resting orders.` → Mô hình maker–taker ảnh hưởng đến nơi quỹ đặt các lệnh chờ.
**Liên kết tiếng Hàn:** `메이커-테이커 모델` (meikeo-teikeo model) — mô hình maker–taker.

## 18. limit order /ˈlɪmət ˈɔrdɚ/
**Part of speech:** noun
**Core meaning (English):** an order to buy or sell only at a specified price or a more favorable one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệnh giới hạn; hình dung người giao dịch đặt sẵn mức giá tối đa hoặc tối thiểu và chấp nhận chờ khớp.
**Grammar & collocations:** `resting limit order` — lệnh giới hạn đang chờ; `limit-order queue` — hàng đợi lệnh giới hạn; `place a limit order` — đặt lệnh giới hạn.
**Examples:** `She used a limit order to avoid paying above her valuation of the stock.` → Cô dùng lệnh giới hạn để tránh trả cao hơn mức định giá cổ phiếu của mình.
**Liên kết tiếng Hàn:** `지정가 주문` (jijeongga jumun) — lệnh giới hạn.

## 19. market order /ˈmɑrkət ˈɔrdɚ/
**Part of speech:** noun
**Core meaning (English):** an order to buy or sell immediately at the best prices currently available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệnh thị trường; hình dung ưu tiên khớp ngay hơn là giữ một mức giá cố định.
**Grammar & collocations:** `market-order execution` — khớp lệnh thị trường; `submit a market order` — gửi lệnh thị trường; `market-order risk` — rủi ro lệnh thị trường.
**Examples:** `A market order guaranteed immediacy but exposed the trader to slippage.` → Lệnh thị trường bảo đảm khớp ngay nhưng khiến nhà giao dịch chịu rủi ro trượt giá.
**Liên kết tiếng Hàn:** `시장가 주문` (sijangga jumun) — lệnh thị trường.

## 20. fill probability /fɪl ˌprɑbəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the estimated chance that an order will execute, fully or partly, within a specified time and price range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất khớp lệnh; hình dung khả năng lệnh đang chờ thực sự được thị trường chạm tới.
**Grammar & collocations:** `high fill probability` — xác suất khớp lệnh cao; `estimate fill probability` — ước lượng xác suất khớp lệnh; `fill-probability model` — mô hình xác suất khớp lệnh.
**Examples:** `The trader accepted a worse price because the alternative had a low fill probability.` → Nhà giao dịch chấp nhận giá kém hơn vì phương án kia có xác suất khớp lệnh thấp.
**Liên kết tiếng Hàn:** `체결 확률` (chegyeol hwakryul) — xác suất khớp lệnh.

## Review in context

An **order book** shows the queue of prices, but a large trade creates **market impact** and may suffer **slippage**. Exchanges depend on **liquidity provision**, while institutions sometimes use a **dark pool**. Speed-sensitive firms pursue **latency arbitrage** through **co-location**; abusive participants may use **quote stuffing**, **spoofing**, or **wash trading**. A **circuit breaker** can pause a market during a shock. Researchers study **volatility clustering**, calculate **realized volatility**, and read **order flow** for pressure. An **execution algorithm** can divide an order, and **smart order routing** can send it across venues under a **maker-taker model**. A **limit order** protects a price but has an uncertain **fill probability**; a **market order** usually fills faster but accepts the prices available.

**Bản dịch tiếng Việt:**

Sổ lệnh cho thấy hàng đợi giá, nhưng một giao dịch lớn tạo ra tác động thị trường và có thể chịu trượt giá. Các sàn phụ thuộc vào hoạt động cung cấp thanh khoản, còn tổ chức đôi khi dùng bể tối. Các công ty nhạy với tốc độ theo đuổi kinh doanh chênh lệch độ trễ nhờ đặt máy đồng địa điểm; những người lạm dụng có thể dùng nhồi báo giá, giả lệnh hoặc giao dịch tự mua bán. Cơ chế ngắt mạch có thể tạm dừng thị trường trong cú sốc. Nhà nghiên cứu theo dõi cụm biến động, tính biến động thực hiện và đọc dòng lệnh để nhận diện áp lực. Thuật toán khớp lệnh có thể chia nhỏ lệnh, còn định tuyến lệnh thông minh có thể gửi lệnh qua nhiều sàn theo mô hình maker–taker. Lệnh giới hạn bảo vệ mức giá nhưng có xác suất khớp không chắc chắn; lệnh thị trường thường khớp nhanh hơn nhưng chấp nhận các mức giá đang có.
