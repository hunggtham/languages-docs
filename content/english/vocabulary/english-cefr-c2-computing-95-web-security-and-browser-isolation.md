# C2 Vocabulary — Web security and browser isolation

This lesson follows a browser security boundary from response policies and origins through integrity, isolation, transport, and cache attacks.

Flow: **content security policy → cross-origin isolation → same-site cookie → trusted types → subresource integrity → origin isolation → fetch metadata → token binding → certificate transparency → OCSP stapling → HTTP strict transport security → secure context → permission policy → cross-origin opener policy → cross-origin resource policy → privacy sandbox → URL canonicalization → request smuggling → cache poisoning → browser isolation**.

## 1. content security policy /ˈkɒntent sɪˈkjʊərəti ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a response policy that restricts which scripts, styles, connections, and resources a browser may load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy giới hạn script, style, connection và resource được tải.
**Grammar & collocations:** `content-security-policy directive` — directive; `block an inline script` — chặn.
**Examples:** `The content security policy blocked an injected script from an unapproved origin.` → CSP chặn script chèn.
**Liên kết tiếng Hàn:** `콘텐츠 보안 정책`.

## 2. cross-origin isolation /ˌkrɒs ˈɒrɪdʒɪn ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a browser state that isolates a document from cross-origin resources strongly enough to unlock protected capabilities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái browser cô lập document khỏi resource khác origin.
**Grammar & collocations:** `cross-origin-isolation header` — header; `enable shared-memory access` — bật.
**Examples:** `Cross-origin isolation allowed the application to use a high-resolution timer safely.` → Isolation cho phép timer độ phân giải cao.
**Liên kết tiếng Hàn:** `교차 출처 격리`.

## 3. same-site cookie /seɪm saɪt ˈkʊki/
**Part of speech:** noun
**Core meaning (English):** a cookie whose delivery is limited according to whether the request comes from the same site context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cookie chỉ gửi tùy context cùng site hay khác site.
**Grammar & collocations:** `same-site-cookie attribute` — attribute; `restrict cross-site sending` — hạn chế.
**Examples:** `The same-site cookie was withheld when a third-party page submitted the form.` → Cookie không gửi từ trang bên thứ ba.
**Liên kết tiếng Hàn:** `동일 사이트 쿠키`.

## 4. trusted types /ˈtrʌstɪd taɪps/
**Part of speech:** noun
**Core meaning (English):** a browser-enforced type discipline that limits unsafe string assignment to sensitive DOM sinks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** type discipline ngăn gán string không an toàn vào DOM sink.
**Grammar & collocations:** `trusted-types policy` — policy; `sanitize an HTML value` — làm sạch.
**Examples:** `Trusted types forced the template library to produce a vetted HTML object.` → Trusted types buộc library tạo object sạch.
**Liên kết tiếng Hàn:** `신뢰할 수 있는 타입`.

## 5. subresource integrity /ˈsʌbriːsɔːrs ɪnˈteɡrəti/
**Part of speech:** noun
**Core meaning (English):** checking a cryptographic digest to ensure a fetched external resource matches the expected bytes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm digest để resource ngoài đúng byte kỳ vọng.
**Grammar & collocations:** `subresource-integrity hash` — hash; `reject a modified script` — từ chối.
**Examples:** `Subresource integrity stopped a changed CDN script from executing.` → Integrity ngăn script CDN đổi.
**Liên kết tiếng Hàn:** `하위 리소스 무결성`.

## 6. origin isolation /ˈɒrɪdʒɪn ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** separating documents or applications by origin so that memory and privileges are not shared unnecessarily.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách document/app theo origin để không chia memory và privilege.
**Grammar & collocations:** `origin-isolation boundary` — boundary; `separate an untrusted app` — tách.
**Examples:** `Origin isolation prevented a user-generated document from sharing privileged renderer state.` → Isolation ngăn chia renderer state.
**Liên kết tiếng Hàn:** `출처 격리`.

## 7. fetch metadata /fetʃ ˈmetədeɪtə/
**Part of speech:** noun
**Core meaning (English):** request headers describing the relationship between a browser request's site, mode, destination, and user context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** header mô tả site, mode, destination và context request.
**Grammar & collocations:** `fetch-metadata check` — check; `reject a cross-site navigation` — từ chối.
**Examples:** `Fetch metadata let the server reject an unexpected cross-site form request.` → Metadata giúp server chặn request lạ.
**Liên kết tiếng Hàn:** `가져오기 메타데이터`.

## 8. token binding /ˈtoʊkən ˈbaɪndɪŋ/
**Part of speech:** noun
**Core meaning (English):** associating an authentication token with a particular cryptographic connection or client key.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gắn token xác thực với connection hoặc key cụ thể.
**Grammar & collocations:** `token-binding proof` — proof; `prevent token replay` — ngăn.
**Examples:** `Token binding made a copied session credential useless on another connection.` → Binding làm token copy vô dụng.
**Liên kết tiếng Hàn:** `토큰 바인딩`.

## 9. certificate transparency /sərˈtɪfɪkət trænsˈpærənsi/
**Part of speech:** noun
**Core meaning (English):** a public logging system that makes issued TLS certificates auditable for unauthorized issuance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** log công khai giúp audit certificate TLS bị cấp trái phép.
**Grammar & collocations:** `certificate-transparency log` — log; `monitor an unexpected certificate` — giám sát.
**Examples:** `Certificate transparency exposed a certificate issued for a look-alike domain.` → Transparency lộ certificate đáng ngờ.
**Liên kết tiếng Hàn:** `인증서 투명성`.

## 10. OCSP stapling /ˌoʊ siː es piː ˈstæplɪŋ/
**Part of speech:** noun
**Core meaning (English):** attaching a certificate-status response to a TLS handshake so clients need not query the authority directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đính status certificate vào handshake TLS thay vì client tự hỏi authority.
**Grammar & collocations:** `OCSP-stapling response` — response; `staple a revocation status` — đính.
**Examples:** `OCSP stapling reduced privacy leakage and handshake delay during certificate validation.` → Stapling giảm leak và delay.
**Liên kết tiếng Hàn:** `OCSP 스테이플링`.

## 11. HTTP strict transport security /ˌeɪtʃ tiː tiː piː strɪkt ˈtrænspɔːrt sɪˈkjʊərəti/
**Part of speech:** noun
**Core meaning (English):** a policy telling browsers to use HTTPS for a site and refuse insecure HTTP connections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy buộc HTTPS và từ chối HTTP không an toàn.
**Grammar & collocations:** `HTTP-strict-transport-security max-age` — max-age; `upgrade an insecure URL` — nâng cấp.
**Examples:** `HTTP strict transport security prevented a downgrade on the public Wi-Fi network.` → HSTS ngăn downgrade.
**Liên kết tiếng Hàn:** `HTTP 엄격 전송 보안`.

## 12. secure context /sɪˈkjʊər ˈkɒntekst/
**Part of speech:** noun
**Core meaning (English):** a browser execution context considered sufficiently protected to access security-sensitive APIs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** context browser đủ an toàn để dùng API nhạy cảm.
**Grammar & collocations:** `secure-context requirement` — requirement; `expose a protected API` — cung cấp.
**Examples:** `The camera API was available only inside a secure context.` → API camera chỉ có trong context an toàn.
**Liên kết tiếng Hàn:** `보안 컨텍스트`.

## 13. permission policy /pərˈmɪʃən ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a policy controlling which browser features a document and its embedded frames may use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy kiểm feature browser của document và frame nhúng.
**Grammar & collocations:** `permission-policy directive` — directive; `delegate microphone access` — ủy quyền.
**Examples:** `The permission policy denied geolocation to the embedded advertising frame.` → Policy từ chối location cho frame quảng cáo.
**Liên kết tiếng Hàn:** `권한 정책`.

## 14. cross-origin opener policy /ˌkrɒs ˈɒrɪdʒɪn ˈoʊpənər ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a response policy controlling whether a document shares a browsing context with a cross-origin opener.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy kiểm document có chia browsing context với opener khác origin không.
**Grammar & collocations:** `cross-origin-opener-policy header` — header; `isolate a browsing context` — cô lập.
**Examples:** `The cross-origin opener policy isolated the application from a newly opened untrusted tab.` → Policy cô lập app khỏi tab lạ.
**Liên kết tiếng Hàn:** `교차 출처 오프너 정책`.

## 15. cross-origin resource policy /ˌkrɒs ˈɒrɪdʒɪn rɪˈsɔːrs ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a response policy stating which origins may include a resource in their documents.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy nêu origin nào được nhúng resource.
**Grammar & collocations:** `cross-origin-resource-policy value` — value; `deny an opaque embed` — từ chối.
**Examples:** `The cross-origin resource policy kept a private image from being embedded by another site.` → Policy ngăn nhúng ảnh private.
**Liên kết tiếng Hàn:** `교차 출처 리소스 정책`.

## 16. privacy sandbox /ˈpraɪvəsi ˈsændbɒks/
**Part of speech:** noun
**Core meaning (English):** a set of browser mechanisms intended to support useful web functions while reducing cross-site tracking.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế browser hỗ trợ web nhưng giảm tracking giữa site.
**Grammar & collocations:** `privacy-sandbox API` — API; `limit third-party tracking` — hạn chế.
**Examples:** `The privacy sandbox replaced a direct cross-site identifier with a constrained API.` → Sandbox thay ID trực tiếp bằng API giới hạn.
**Liên kết tiếng Hàn:** `프라이버시 샌드박스`.

## 17. URL canonicalization /ˌjuː ɑːr ˈel kənɒnɪkəlaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** normalizing different textual forms of a URL into one consistent representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn hóa nhiều dạng URL về một representation.
**Grammar & collocations:** `URL-canonicalization rule` — rule; `normalize a path encoding` — chuẩn hóa.
**Examples:** `URL canonicalization prevented two cache keys from representing the same resource differently.` → Canonicalization tránh key khác nhau.
**Liên kết tiếng Hàn:** `URL 정규화`.

## 18. request smuggling /rɪˈkwest ˈsmʌɡlɪŋ/
**Part of speech:** noun
**Core meaning (English):** exploiting disagreement between intermediaries about where one HTTP request ends and another begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khai thác proxy/server hiểu khác ranh giới request.
**Grammar & collocations:** `request-smuggling probe` — probe; `desynchronize a proxy` — làm lệch.
**Examples:** `Request smuggling bypassed the front proxy's access rule by confusing message framing.` → Smuggling làm proxy hiểu sai framing.
**Liên kết tiếng Hàn:** `요청 밀수`.

## 19. cache poisoning /kæʃ ˈpɔɪzənɪŋ/
**Part of speech:** noun
**Core meaning (English):** causing an intermediary cache to store a malicious response that will be served to later users.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khiến cache lưu response độc để phục vụ user sau.
**Grammar & collocations:** `cache-poisoning vector` — vector; `pollute a shared cache` — làm bẩn.
**Examples:** `Cache poisoning served a crafted redirect to users who requested the clean URL.` → Poisoning trả redirect độc.
**Liên kết tiếng Hàn:** `캐시 오염`.

## 20. browser isolation /ˈbraʊzər ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** separating browser sites, processes, or privileges so compromise in one context cannot directly expose another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách site, process và privilege để giảm lộ khi một context bị chiếm.
**Grammar & collocations:** `browser-isolation process` — process; `contain a renderer compromise` — khoanh vùng.
**Examples:** `Browser isolation contained a compromised renderer inside one site process.` → Isolation khoanh renderer bị chiếm.
**Liên kết tiếng Hàn:** `브라우저 격리`.

## Review in context

**Content security policy**, **cross-origin isolation**, a **same-site cookie**, **trusted types**, and **subresource integrity** constrain browser execution. **Origin isolation**, **fetch metadata**, **token binding**, **certificate transparency**, and **OCSP stapling** strengthen identity and boundaries; **HTTP strict transport security** requires HTTPS. A **secure context**, **permission policy**, **cross-origin opener policy**, and **cross-origin resource policy** govern APIs and embedding. **Privacy sandbox**, **URL canonicalization**, **request smuggling**, **cache poisoning**, and **browser isolation** address tracking and intermediary attacks.

**Bản dịch tiếng Việt:** **Content security policy**, **cross-origin isolation**, **same-site cookie**, **trusted types** và **subresource integrity** giới hạn browser. **Origin isolation**, **fetch metadata**, **token binding**, **certificate transparency** và **OCSP stapling** củng cố identity/boundary; **HTTP strict transport security** buộc HTTPS. **Secure context**, **permission policy**, **cross-origin opener policy** và **cross-origin resource policy** quản lý API/embedding. **Privacy sandbox**, **URL canonicalization**, **request smuggling**, **cache poisoning** và **browser isolation** xử lý tracking và attack trung gian.
