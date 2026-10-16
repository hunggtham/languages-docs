# C2 Vocabulary — Virtual metrology and process-health control

This lesson connects sparse physical measurements to run-to-run control, chamber fingerprints, endpoint sensing, and statistical process health.

Flow: **virtual metrology → run-to-run controller → fault detection classification → tool health index → chamber fingerprint → process drift alarm → recipe fingerprint → endpoint model → plasma emission monitor → optical endpoint → residual gas signature → wafer-to-wafer variation → within-wafer range → between-wafer variance → sampling plan → metrology queue → outlier winsorization → control-chart subgroup → measurement takt time**.

## 1. virtual metrology /ˈvɜːrtʃuəl məˈtrɑːlədʒi/
**Part of speech:** noun
**Core meaning (English):** predicting a physical process measurement from equipment data and a smaller set of direct measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán physical process measurement từ equipment data và ít direct measurement hơn.
**Grammar & collocations:** `virtual-metrology model` — model; `infer an unmeasured wafer property` — suy property wafer chưa đo.
**Examples:** `Virtual metrology estimated film thickness while the metrology tool was occupied.` → Metrology virtual ước tính film thickness khi metrology tool bận.
**Liên kết tiếng Hàn:** `가상 계측`.

## 2. run-to-run controller /rʌn tə rʌn kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** controller that updates recipe settings between production runs using measured results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** controller update recipe setting giữa run production bằng measurement result.
**Grammar & collocations:** `run-to-run-controller gain` — gain; `correct a lot mean` — sửa lot mean.
**Examples:** `The run-to-run controller reduced thickness drift over successive lots.` → Controller run-to-run giảm thickness drift qua lot liên tiếp.
**Liên kết tiếng Hàn:** `런투런 제어기`.

## 3. fault detection classification /fɔːlt dɪˈtekʃən ˌklæsəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** deciding whether equipment data indicate a known fault class, a novel event, or normal variation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định equipment data chỉ fault class đã biết, event mới hoặc variation thường.
**Grammar & collocations:** `fault-detection-classification model` — model; `label an excursion` — gán nhãn excursion.
**Examples:** `Fault detection classification separated a pump failure from ordinary chamber drift.` → Classification detection-fault tách pump failure khỏi chamber drift thường.
**Liên kết tiếng Hàn:** `고장 검출 분류`.

## 4. tool health index /tuːl helθ ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** composite score summarizing whether equipment remains within its expected operating condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** score gộp tóm tắt equipment còn trong operating condition kỳ vọng không.
**Grammar & collocations:** `tool-health-index trend` — trend; `rank equipment degradation` — xếp hạng equipment degradation.
**Examples:** `The tool health index declined before the electrical monitor crossed its limit.` → Index health-tool giảm trước khi electrical monitor vượt limit.
**Liên kết tiếng Hàn:** `장비 상태 지수`.

## 5. chamber fingerprint /ˈtʃeɪmbər ˈfɪŋɡərprɪnt/
**Part of speech:** noun
**Core meaning (English):** characteristic multivariate pattern identifying a chamber's current condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern multivariate đặc trưng nhận diện chamber condition hiện tại.
**Grammar & collocations:** `chamber-fingerprint comparison` — comparison; `match a known maintenance state` — khớp maintenance state đã biết.
**Examples:** `The chamber fingerprint changed immediately after the shield was replaced.` → Fingerprint chamber đổi ngay sau khi thay shield.
**Liên kết tiếng Hàn:** `챔버 지문`.

## 6. process drift alarm /ˈprɑːses drɪft əˈlɑːrm/
**Part of speech:** noun
**Core meaning (English):** alert that a process variable is moving persistently away from its baseline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** alert process variable rời baseline một cách persistent.
**Grammar & collocations:** `process-drift-alarm threshold` — threshold; `trigger preventive maintenance` — trigger maintenance phòng ngừa.
**Examples:** `The process drift alarm opened a maintenance ticket before yield loss appeared.` → Alarm drift-process mở maintenance ticket trước khi yield loss lộ.
**Liên kết tiếng Hàn:** `공정 드리프트 경보`.

## 7. recipe fingerprint /ˈresəpi ˈfɪŋɡərprɪnt/
**Part of speech:** noun
**Core meaning (English):** characteristic time-series and result pattern produced by a particular process recipe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern time-series và result đặc trưng do recipe process cụ thể tạo.
**Grammar & collocations:** `recipe-fingerprint match` — match; `detect an unintended recipe edit` — detect recipe edit ngoài ý muốn.
**Examples:** `The recipe fingerprint did not match the released version after a controller patch.` → Fingerprint recipe không khớp version release sau controller patch.
**Liên kết tiếng Hàn:** `레시피 지문`.

## 8. endpoint model /ˈendpɔɪnt ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** model that predicts when a process step reaches its intended completion condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model dự đoán khi process step đạt completion condition dự kiến.
**Grammar & collocations:** `endpoint-model confidence` — confidence; `stop a process at the inferred endpoint` — dừng process tại endpoint suy.
**Examples:** `The endpoint model stopped the etch before the liner was excessively thinned.` → Model endpoint dừng etch trước khi liner quá mỏng.
**Liên kết tiếng Hàn:** `종점 모델`.

## 9. plasma emission monitor /ˈplæzmə ɪˈmɪʃən ˈmɑːnɪtər/
**Part of speech:** noun
**Core meaning (English):** optical sensor that tracks plasma light to infer process chemistry or endpoint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sensor quang theo dõi plasma light để suy chemistry hoặc endpoint.
**Grammar & collocations:** `plasma-emission-monitor trace` — trace; `track a spectral line` — theo dõi spectral line.
**Examples:** `The plasma emission monitor detected the chemistry transition before the timed stop.` → Monitor emission-plasma detect chemistry transition trước timed stop.
**Liên kết tiếng Hàn:** `플라즈마 방출 모니터`.

## 10. optical endpoint /ˈɑːptɪkəl ˈendpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** process completion inferred from a change in reflected or emitted optical signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process completion suy từ change trong optical signal reflect hoặc emit.
**Grammar & collocations:** `optical-endpoint detector` — detector; `identify a layer transition` — identify layer transition.
**Examples:** `The optical endpoint moved later as the film stack became thicker.` → Endpoint optical chuyển muộn hơn khi film stack dày hơn.
**Liên kết tiếng Hàn:** `광학 종점`.

## 11. residual gas signature /rɪˈzɪdʒuəl ɡæs ˈsɪɡnətʃər/
**Part of speech:** noun
**Core meaning (English):** characteristic mass-spectrometer pattern indicating species remaining or generated in a process chamber.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern mass-spectrometer đặc trưng chỉ species còn hoặc sinh trong chamber.
**Grammar & collocations:** `residual-gas-signature library` — library; `identify a leak species` — identify leak species.
**Examples:** `The residual gas signature indicated moisture ingress after the door seal was disturbed.` → Signature gas-residual chỉ moisture ingress sau khi door seal bị disturb.
**Liên kết tiếng Hàn:** `잔류 가스 시그니처`.

## 12. wafer-to-wafer variation /ˈweɪfər tə ˈweɪfər ˌveriˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** difference in measured results among wafers processed in the same lot or sequence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khác biệt result đo giữa wafer trong cùng lot hoặc sequence.
**Grammar & collocations:** `wafer-to-wafer-variation component` — component; `separate lot drift` — tách lot drift.
**Examples:** `Wafer-to-wafer variation exceeded the within-wafer range after a gas refill.` → Variation wafer-to-wafer vượt range within-wafer sau gas refill.
**Liên kết tiếng Hàn:** `웨이퍼 간 변동`.

## 13. within-wafer range /wɪˈðɪn ˈweɪfər reɪndʒ/
**Part of speech:** noun
**Core meaning (English):** difference between the highest and lowest measured values on one wafer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** difference giữa measurement cao nhất và thấp nhất trên một wafer.
**Grammar & collocations:** `within-wafer-range map` — map; `quantify radial nonuniformity` — định lượng nonuniformity hướng tâm.
**Examples:** `Within-wafer range widened near the exhaust-side edge.` → Range within-wafer rộng ở gần edge phía exhaust.
**Liên kết tiếng Hàn:** `웨이퍼 내 범위`.

## 14. between-wafer variance /bɪˈtwiːn ˈweɪfər ˈveriəns/
**Part of speech:** noun
**Core meaning (English):** variance among wafer-level means after within-wafer variation is separated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance giữa wafer-level mean sau khi tách variation trong wafer.
**Grammar & collocations:** `between-wafer-variance estimate` — estimate; `partition hierarchical variation` — partition variation hierarchical.
**Examples:** `Between-wafer variance fell after the run-to-run controller was enabled.` → Variance between-wafer giảm sau enable run-to-run controller.
**Liên kết tiếng Hàn:** `웨이퍼 간 분산`.

## 15. sampling plan /ˈsæmplɪŋ plæn/
**Part of speech:** noun
**Core meaning (English):** predefined rule for which units, locations, times, or measurements are selected for inspection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule định trước chọn unit, location, time hoặc measurement để inspection.
**Grammar & collocations:** `sampling-plan revision` — revision; `balance cost and coverage` — cân cost với coverage.
**Examples:** `The sampling plan added edge sites after radial defects escaped detection.` → Plan sampling thêm edge site sau khi radial defect escape detection.
**Liên kết tiếng Hàn:** `샘플링 계획`.

## 16. metrology queue /məˈtrɑːlədʒi kjuː/
**Part of speech:** noun
**Core meaning (English):** ordered backlog of measurements waiting for a metrology resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** backlog measurement có thứ tự chờ metrology resource.
**Grammar & collocations:** `metrology-queue delay` — delay; `prioritize a risk sample` — ưu tiên risk sample.
**Examples:** `The metrology queue delayed feedback to the run-to-run controller.` → Queue metrology trì hoãn feedback cho run-to-run controller.
**Liên kết tiếng Hàn:** `계측 큐`.

## 17. outlier winsorization /ˈaʊtlaɪər ˌwɪnzəraɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** replacing extreme observations with less extreme boundary values before robust statistical analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay observation cực trị bằng boundary value ít cực trị trước robust analysis.
**Grammar & collocations:** `outlier-winsorization rule` — rule; `limit an extreme influence` — giới hạn influence cực trị.
**Examples:** `Outlier winsorization prevented one damaged coupon from shifting the chamber mean.` → Winsorization outlier ngăn coupon hỏng làm dịch chamber mean.
**Liên kết tiếng Hàn:** `이상치 윈저화`.

## 18. control-chart subgroup /kənˈtroʊl tʃɑːrt ˈsʌbɡruːp/
**Part of speech:** noun
**Core meaning (English):** set of closely related observations treated as one unit in a control-chart analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập observation liên quan chặt được coi một unit trong control-chart analysis.
**Grammar & collocations:** `control-chart-subgroup mean` — mean; `estimate short-term spread` — ước tính spread ngắn hạn.
**Examples:** `The control-chart subgroup separated within-run noise from lot-to-lot movement.` → Subgroup chart-control tách noise trong run khỏi movement lot-to-lot.
**Liên kết tiếng Hàn:** `관리도 부분군`.

## 19. measurement takt time /ˈmeʒərmənt tækt taɪm/
**Part of speech:** noun
**Core meaning (English):** required average interval between completed measurements to support production flow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interval average cần giữa measurement hoàn tất để hỗ trợ production flow.
**Grammar & collocations:** `measurement-takt-time target` — target; `match inspection throughput` — match inspection throughput.
**Examples:** `Measurement takt time was shorter than the queue could sustain during peak loading.` → Time takt measurement ngắn hơn queue có thể sustain khi load peak.
**Liên kết tiếng Hàn:** `측정 택트 타임`.

## 20. metrology coverage /məˈtrɑːlədʒi ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** proportion of relevant process space represented by direct physical measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ process space liên quan được đại diện bằng physical measurement trực tiếp.
**Grammar & collocations:** `metrology-coverage gap` — gap; `expand measurement representativeness` — mở rộng tính đại diện measurement.
**Examples:** `Metrology coverage was too narrow to validate the virtual model at the edge condition.` → Coverage metrology quá hẹp để validate virtual model ở edge condition.
**Liên kết tiếng Hàn:** `계측 커버리지`.

## Review in context

**Virtual metrology** and a **run-to-run controller** use **fault detection classification**, a **tool health index**, **chamber fingerprint**, **process drift alarm**, and **recipe fingerprint**. An **endpoint model**, **plasma emission monitor**, **optical endpoint**, and **residual gas signature** explain process completion, while **wafer-to-wafer variation**, **within-wafer range**, and **between-wafer variance** shape a **sampling plan** and **metrology queue**. **Outlier winsorization**, a **control-chart subgroup**, **measurement takt time**, and **metrology coverage** determine feedback quality.

**Bản dịch tiếng Việt:** **Virtual metrology** và **run-to-run controller** dùng **fault detection classification**, **tool health index**, **chamber fingerprint**, **process drift alarm** và **recipe fingerprint**. **Endpoint model**, **plasma emission monitor**, **optical endpoint** và **residual gas signature** giải thích process completion, còn **wafer-to-wafer variation**, **within-wafer range** và **between-wafer variance** định hình **sampling plan** và **metrology queue**. **Outlier winsorization**, **control-chart subgroup**, **measurement takt time** và **metrology coverage** quyết định feedback quality.
