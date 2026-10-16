import { execFileSync, spawn } from "node:child_process";

const port = process.env.PORT || "4173";
const root = new URL("..", import.meta.url).pathname.replace(/\/$/, "");

execFileSync("python3", ["scripts/build-content-index.py"], { cwd: root, stdio: "inherit" });
execFileSync("npm", ["--prefix", "apps/web", "run", "build"], { cwd: root, stdio: "inherit" });

const preview = spawn("npm", ["--prefix", "apps/web", "run", "preview", "--", "--host", "127.0.0.1", "--port", port], { cwd: root, stdio: "inherit" });
const url = `http://127.0.0.1:${port}/`;
setTimeout(() => { spawn("open", [url], { stdio: "ignore", detached: true }).unref(); }, 900);
process.on("SIGINT", () => preview.kill("SIGINT"));
process.on("SIGTERM", () => preview.kill("SIGTERM"));
preview.on("exit", (code) => process.exit(code ?? 0));
