# Learning Docs Parity Prompt

Khi task có liên quan đến tính năng web, reader, progress, account sync, search/filter, selection translation hoặc speech, hãy kiểm tra xem `learning-docs` (`/Users/mac/00.my-learning/learning-library`) đã thay đổi hành vi tương ứng hay chưa.

Quy tắc làm việc:

1. Kiểm tra source checkout và target checkout: status, branch/commit, diff gần nhất và README/test liên quan.
2. Chỉ coi một thay đổi là parity candidate khi nó thay đổi hành vi hoặc data contract người học nhìn thấy; bỏ qua content-only/generated-only thay đổi nếu không ảnh hưởng web.
3. Đối chiếu implementation hiện tại của source với `apps/web/`; clone behavior và interaction semantics vào kiến trúc React/Vite của target, không copy nguyên file source.
4. Giữ biên dữ liệu tuyệt đối: target dùng `app_id = "languages-docs-web"`, `content_namespace = "languages-docs"`, local scope `languages-docs-progress-v1:<scope>`. Không dùng lại `study-library`, `study-shelf-*` hoặc state account của web kia.
5. Với sync/auth, kiểm tra RLS `user_id = auth.uid()`, public key, migration, GitHub Pages secrets và account isolation. Không tuyên bố “sync thành công” nếu mới chỉ build hoặc kiểm tra anonymous.
6. Sửa theo batch nhỏ, audit diff để tránh kéo theo catalog/content ngoài phạm vi, chạy type-check/build và `git diff --check`, rồi commit checkpoint. Không push/merge source hoặc target nếu user chưa yêu cầu.

Kết quả phải nêu rõ source revision đã kiểm tra, thay đổi phát hiện được, phần đã clone, phần cố ý không clone, validation evidence và blocker external nếu có.
