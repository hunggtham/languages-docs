# shared-context-mcp: setup và review

Tài liệu này ghi lại cấu hình MCP hiện đang dùng cho repository `00.languages_docs` trên macOS.

## Trạng thái hiện tại

- MCP server: `shared-context-mcp` v1.0.0.
- Source cài local: `~/.local/share/shared-context-mcp`.
- Upstream: `https://github.com/fernandosegoviadev/shared-context-mcp.git`.
- Context clone: `~/.shared-context/languages-docs`.
- Context repo hiện tại: `https://github.com/hunggtham/languages-docs.git`, branch `main`.
- Codex project config: `.codex/config.toml`.
- `simple-git`: `4.0.2`; lần kiểm tra gần nhất: `0 vulnerabilities`.

`CONTEXT_REPO_URL` hiện trỏ tới remote public của chính repository này vì lúc setup chưa có một context repo riêng. Nếu dùng repo context khác, thay URL và tên project trong `.codex/config.toml`; không ghi `GITHUB_TOKEN` vào file đã commit.

## Cấu hình Codex

File `.codex/config.toml` phải giữ cấu hình tương đương:

```toml
[mcp_servers.shared_context]
command = "/Users/mac/.nvm/versions/node/v24.8.0/bin/node"
args = ["/Users/mac/.local/share/shared-context-mcp/src/index.js"]
cwd = "/Users/mac/.local/share/shared-context-mcp"
startup_timeout_sec = 10

[mcp_servers.shared_context.env]
CONTEXT_REPO_URL = "https://github.com/hunggtham/languages-docs.git"
CONTEXT_PROJECT_NAME = "languages-docs"
CONTEXT_REPO_PATH = "/Users/mac/.shared-context/languages-docs"
CONTEXT_BRANCH = "main"
```

Codex chỉ đọc lớp cấu hình project khi repository được trust. Sau khi đổi file, mở lại Codex/session hoặc kiểm tra bằng:

```bash
cd /Users/mac/00.languages_docs
codex mcp list
```

Server cần hiện là `shared_context` và ở trạng thái `enabled`.

## Cài đặt lại từ đầu

```bash
set -e

INSTALL_DIR="$HOME/.local/share/shared-context-mcp"
mkdir -p "$(dirname "$INSTALL_DIR")"
git clone https://github.com/fernandosegoviadev/shared-context-mcp.git "$INSTALL_DIR"
cd "$INSTALL_DIR"

npm install
npm install simple-git@4.0.2 --save-exact

# shared-context-mcp v1.0.0 dùng default import; simple-git v4 dùng named export.
sed -i '' 's/import simpleGit from "simple-git";/import { simpleGit } from "simple-git";/' src/index.js
```

Nếu thư mục cài đặt đã tồn tại, không clone đè lên đó; kiểm tra trước:

```bash
git -C "$HOME/.local/share/shared-context-mcp" status --short --branch
git -C "$HOME/.local/share/shared-context-mcp" remote -v
```

## Kiểm tra chức năng

Smoke test bằng MCP client phải thấy bốn tool:

- `update_shared_context`
- `list_context_files`
- `read_context_file`
- `get_context_status`

Kiểm tra dependency và context clone:

```bash
npm audit --prefix "$HOME/.local/share/shared-context-mcp" --omit=dev --audit-level=critical
git -C "$HOME/.shared-context/languages-docs" status --short --branch
git -C "$HOME/.shared-context/languages-docs" log -1 --oneline
```

`get_context_status` phải báo context up to date. Nếu clone chưa tồn tại, gọi `update_shared_context` trước; server sẽ clone repo theo các biến môi trường trong config.

## Repo private và token

Với context repo private, giữ `CONTEXT_REPO_URL` không chứa credential. Cấp `GITHUB_TOKEN` qua môi trường người dùng hoặc cơ chế secret ngoài file đã commit. Token cần quyền đọc nội dung repo; không đưa token vào `.codex/config.toml`, README hoặc log.

## Bản ghi thay đổi

- Project config: commit `e3dc0c2d` (`chore: configure shared context MCP`).
- Local install patch: commit `96b8b03` trong clone `~/.local/share/shared-context-mcp` (`chore: update simple-git compatibility`).
