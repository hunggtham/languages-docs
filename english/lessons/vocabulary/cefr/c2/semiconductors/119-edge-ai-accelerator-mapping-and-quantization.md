# C2 Vocabulary — Edge-AI accelerator mapping and quantization

This lesson connects neural-network numerical choices to accelerator utilization, memory movement, compiler mapping, and edge-inference latency.

Flow: **edge inference latency → quantized neural network → mixed-precision accumulator → systolic-array utilization → memory bandwidth roofline → tensor sparsity pattern → calibration dataset → noise-aware training → hardware-aware search → compiler tiling → on-chip scratchpad → streaming dataflow → weight stationary → output stationary → partial-sum spill → activation outlier rate → integer overflow margin → tile reuse factor → DRAM traffic estimate → sparse-matrix format**.

## 1. edge inference latency /edʒ ˌɪnfərəns ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** time required for a deployed edge device to produce one model prediction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** time device edge deployed cần để tạo một model prediction.
**Grammar & collocations:** `edge-inference-latency target` — target; `bound end-to-end response` — giới hạn response end-to-end.
**Examples:** `Edge inference latency rose when the accelerator spilled features to external memory.` → Latency inference-edge tăng khi accelerator spill feature ra memory ngoài.
**Liên kết tiếng Hàn:** `엣지 추론 지연`.

## 2. quantized neural network /ˈkwɑːntaɪzd ˈnʊrəl ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** neural network whose weights or activations use reduced-precision numeric representations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** neural network dùng numeric representation reduced-precision cho weight hoặc activation.
**Grammar & collocations:** `quantized-neural-network accuracy` — accuracy; `map eight-bit weights` — map weight tám bit.
**Examples:** `The quantized neural network met the latency target with a small accuracy loss.` → Network neural quantized đạt latency target với accuracy loss nhỏ.
**Liên kết tiếng Hàn:** `양자화 신경망`.

## 3. mixed-precision accumulator /mɪkst prɪˈsɪʒən əˈkjuːmjəleɪtər/
**Part of speech:** noun
**Core meaning (English):** accumulator that combines operands or partial sums represented at different numeric precisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** accumulator gộp operand hoặc partial sum có precision numeric khác nhau.
**Grammar & collocations:** `mixed-precision-accumulator width` — width; `preserve sum headroom` — giữ headroom sum.
**Examples:** `The mixed-precision accumulator prevented small products from disappearing into quantization noise.` → Accumulator precision-mixed ngăn product nhỏ biến mất trong quantization noise.
**Liên kết tiếng Hàn:** `혼합 정밀도 누산기`.

## 4. systolic-array utilization /sɪˈstɑːlɪk əˈreɪ ˌjuːtələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** fraction of accelerator array compute elements doing useful work during a workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fraction compute element của accelerator array đang làm useful work.
**Grammar & collocations:** `systolic-array-utilization profile` — profile; `fill idle processing elements` — lấp processing element idle.
**Examples:** `Systolic-array utilization fell on the narrow convolution layer.` → Utilization array-systolic giảm ở convolution layer hẹp.
**Liên kết tiếng Hàn:** `시스톨릭 배열 활용도`.

## 5. memory bandwidth roofline /ˈmeməri ˈbændwɪdθ ˈruːflaɪn/
**Part of speech:** noun
**Core meaning (English):** performance boundary showing when memory movement, rather than arithmetic, limits an accelerator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** boundary performance cho thấy memory movement chứ không arithmetic giới hạn accelerator.
**Grammar & collocations:** `memory-bandwidth-roofline model` — model; `classify a bandwidth-bound kernel` — phân loại kernel bandwidth-bound.
**Examples:** `The memory bandwidth roofline showed that larger vector units would not improve this layer.` → Roofline bandwidth-memory cho thấy vector unit lớn hơn không cải thiện layer này.
**Liên kết tiếng Hàn:** `메모리 대역폭 지붕선`.

## 6. tensor sparsity pattern /ˈtensər ˈspɑːrsəti ˈpætərn/
**Part of speech:** noun
**Core meaning (English):** arrangement of zero or negligible entries in a tensor that can be skipped by hardware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** arrangement entry zero hoặc nhỏ trong tensor để hardware skip.
**Grammar & collocations:** `tensor-sparsity-pattern constraint` — constraint; `skip structured zeros` — skip zero có cấu trúc.
**Examples:** `The tensor sparsity pattern matched the accelerator's two-by-four skip rule.` → Pattern sparsity-tensor khớp rule skip hai-by-bốn của accelerator.
**Liên kết tiếng Hàn:** `텐서 희소성 패턴`.

## 7. calibration dataset /ˌkælɪˈbreɪʃən ˈdeɪtəset/
**Part of speech:** noun
**Core meaning (English):** representative data used to choose quantization scales or calibrate a deployed model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data đại diện dùng chọn quantization scale hoặc calibrate model deployed.
**Grammar & collocations:** `calibration-dataset coverage` — coverage; `sample representative activations` — sample activation đại diện.
**Examples:** `The calibration dataset omitted a rare lighting condition and caused clipped activations.` → Dataset calibration bỏ lighting condition hiếm và gây activation clip.
**Liên kết tiếng Hàn:** `보정 데이터셋`.

## 8. noise-aware training /nɔɪz əˈwer ˈtreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** training that models hardware noise or numeric error so the network learns robust representations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** training model hardware noise hoặc numeric error để network học representation robust.
**Grammar & collocations:** `noise-aware-training augmentation` — augmentation; `inject quantization noise` — inject quantization noise.
**Examples:** `Noise-aware training preserved classification accuracy after the sensor path was quantized.` → Training aware-noise giữ accuracy classification sau quantize sensor path.
**Liên kết tiếng Hàn:** `잡음 인식 학습`.

## 9. hardware-aware search /ˈhɑːrdwer əˈwer sɜːrtʃ/
**Part of speech:** noun
**Core meaning (English):** model or architecture search that includes device latency, memory, energy, or operator constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** search model hoặc architecture gồm latency, memory, energy hoặc operator constraint device.
**Grammar & collocations:** `hardware-aware-search objective` — objective; `optimize accuracy and energy jointly` — tối ưu accuracy và energy cùng.
**Examples:** `Hardware-aware search selected a smaller model that fit the on-chip buffer.` → Search aware-hardware chọn model nhỏ hơn fit on-chip buffer.
**Liên kết tiếng Hàn:** `하드웨어 인식 탐색`.

## 10. compiler tiling /kəmˈpaɪlər ˈtaɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** dividing a large tensor operation into blocks that fit a target memory hierarchy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia tensor operation lớn thành block fit memory hierarchy target.
**Grammar & collocations:** `compiler-tiling heuristic` — heuristic; `fit a tile in scratchpad` — fit tile vào scratchpad.
**Examples:** `Compiler tiling reduced external-memory traffic for the attention matrix.` → Tiling compiler giảm external-memory traffic cho attention matrix.
**Liên kết tiếng Hàn:** `컴파일러 타일링`.

## 11. on-chip scratchpad /ɑːn tʃɪp ˈskrætʃpæd/
**Part of speech:** noun
**Core meaning (English):** explicitly managed fast memory located on the accelerator die.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory nhanh được manage explicit nằm trên accelerator die.
**Grammar & collocations:** `on-chip-scratchpad capacity` — capacity; `stage weights locally` — stage weight local.
**Examples:** `The on-chip scratchpad held two activation tiles and avoided a DRAM round trip.` → Scratchpad on-chip giữ hai activation tile và tránh DRAM round trip.
**Liên kết tiếng Hàn:** `온칩 스크래치패드`.

## 12. streaming dataflow /ˈstriːmɪŋ ˈdeɪtəfloʊ/
**Part of speech:** noun
**Core meaning (English):** execution style that forwards intermediate data directly between operators as it is produced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** execution style forward intermediate data trực tiếp giữa operator khi tạo.
**Grammar & collocations:** `streaming-dataflow schedule` — schedule; `avoid materializing a tensor` — tránh materialize tensor.
**Examples:** `Streaming dataflow reduced peak memory for the fused vision pipeline.` → Dataflow streaming giảm peak memory cho vision pipeline fused.
**Liên kết tiếng Hàn:** `스트리밍 데이터플로`.

## 13. weight stationary /weɪt ˈsteɪʃəneri/
**Part of speech:** noun
**Core meaning (English):** accelerator dataflow that keeps weights local while activations and partial sums move.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dataflow giữ weight local trong khi activation và partial sum di chuyển.
**Grammar & collocations:** `weight-stationary dataflow` — dataflow; `reuse a filter weight` — reuse filter weight.
**Examples:** `Weight stationary minimized repeated weight reads from the shared buffer.` → Weight stationary giảm repeated weight read từ shared buffer.
**Liên kết tiếng Hàn:** `가중치 정지형`.

## 14. output stationary /ˈaʊtpʊt ˈsteɪʃəneri/
**Part of speech:** noun
**Core meaning (English):** dataflow that keeps a partial output local until its accumulation is complete.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dataflow giữ partial output local đến khi accumulation complete.
**Grammar & collocations:** `output-stationary mapping` — mapping; `accumulate a result in place` — accumulate result tại chỗ.
**Examples:** `Output stationary reduced partial-sum traffic for the large output tile.` → Output stationary giảm partial-sum traffic cho output tile lớn.
**Liên kết tiếng Hàn:** `출력 정지형`.

## 15. partial-sum spill /ˈpɑːrʃəl sʌm spɪl/
**Part of speech:** noun
**Core meaning (English):** writing an unfinished accumulation to a slower memory because local storage is insufficient.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi accumulation chưa xong ra memory chậm vì local storage không đủ.
**Grammar & collocations:** `partial-sum-spill penalty` — penalty; `revisit an intermediate result` — truy lại intermediate result.
**Examples:** `Partial-sum spill erased the latency benefit of the wider systolic array.` → Spill sum-partial xóa latency benefit của systolic array rộng hơn.
**Liên kết tiếng Hàn:** `부분합 스필`.

## 16. activation outlier rate /ˌæktəˈveɪʃən ˈaʊtlaɪər reɪt/
**Part of speech:** noun
**Core meaning (English):** frequency at which activations exceed the normal range assumed by a quantizer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tần suất activation vượt range bình thường quantizer giả định.
**Grammar & collocations:** `activation-outlier-rate monitor` — monitor; `reserve a wider scale` — dành scale rộng hơn.
**Examples:** `Activation outlier rate rose on the rare high-contrast images.` → Rate outlier-activation tăng trên image high-contrast hiếm.
**Liên kết tiếng Hàn:** `활성화 이상치율`.

## 17. integer overflow margin /ˈɪntədʒər ˈoʊvərfloʊ ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** numeric headroom between the largest valid accumulation and an integer representation limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** headroom numeric giữa accumulation hợp lệ lớn nhất và integer representation limit.
**Grammar & collocations:** `integer-overflow-margin calculation` — calculation; `widen an accumulator` — mở rộng accumulator.
**Examples:** `Integer overflow margin disappeared when the batch size doubled.` → Margin overflow-integer biến mất khi batch size gấp đôi.
**Liên kết tiếng Hàn:** `정수 오버플로 여유`.

## 18. tile reuse factor /taɪl riːˈjuːs ˈfæktər/
**Part of speech:** noun
**Core meaning (English):** number of computations that reuse data loaded into one accelerator tile.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số computation reuse data load vào một accelerator tile.
**Grammar & collocations:** `tile-reuse-factor estimate` — estimate; `increase local data reuse` — tăng data reuse local.
**Examples:** `Tile reuse factor improved after the compiler changed the loop order.` → Factor reuse-tile cải thiện sau khi compiler đổi loop order.
**Liên kết tiếng Hàn:** `타일 재사용 계수`.

## 19. DRAM traffic estimate /diː ræm ˈtræfɪk ˈestəmeɪt/
**Part of speech:** noun
**Core meaning (English):** predicted volume of data transferred between an accelerator and external dynamic memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** volume data dự đoán truyền giữa accelerator và dynamic memory ngoài.
**Grammar & collocations:** `DRAM-traffic-estimate model` — model; `budget external bandwidth` — budget external bandwidth.
**Examples:** `The DRAM traffic estimate exceeded the package interface limit.` → Estimate traffic-DRAM vượt limit interface package.
**Liên kết tiếng Hàn:** `DRAM 트래픽 추정치`.

## 20. sparse-matrix format /spɑːrs ˈmeɪtrɪks ˈfɔːrmæt/
**Part of speech:** noun
**Core meaning (English):** storage layout describing where nonzero matrix values and their indices are kept.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** layout storage mô tả vị trí nonzero matrix value và index.
**Grammar & collocations:** `sparse-matrix-format conversion` — conversion; `choose compressed rows` — chọn compressed row.
**Examples:** `The sparse-matrix format matched the accelerator's zero-skipping datapath.` → Format matrix-sparse khớp zero-skipping datapath accelerator.
**Liên kết tiếng Hàn:** `희소 행렬 형식`.

## Review in context

**Edge inference latency**, a **quantized neural network**, **mixed-precision accumulator**, **systolic-array utilization**, and a **memory bandwidth roofline** define accelerator performance. **Tensor sparsity pattern**, **calibration dataset**, **noise-aware training**, and **hardware-aware search** feed **compiler tiling**, **on-chip scratchpad**, **streaming dataflow**, **weight stationary**, and **output stationary**. **Partial-sum spill**, **activation outlier rate**, **integer overflow margin**, **tile reuse factor**, **DRAM traffic estimate**, and **sparse-matrix format** determine deployment feasibility.

**Bản dịch tiếng Việt:** **Edge inference latency**, **quantized neural network**, **mixed-precision accumulator**, **systolic-array utilization** và **memory bandwidth roofline** định nghĩa accelerator performance. **Tensor sparsity pattern**, **calibration dataset**, **noise-aware training** và **hardware-aware search** cung cấp đầu vào cho **compiler tiling**, **on-chip scratchpad**, **streaming dataflow**, **weight stationary** và **output stationary**. **Partial-sum spill**, **activation outlier rate**, **integer overflow margin**, **tile reuse factor**, **DRAM traffic estimate** và **sparse-matrix format** quyết định tính khả thi deployment.
