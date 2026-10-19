const SHELL_CACHE = "language-lab-shell-v1";
const CONTENT_CACHE = "language-lab-content-v1";
const USER_CACHE = "language-lab-user-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./content/catalog.json", "./content/search-index.json", "./content/graph.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keep = new Set([SHELL_CACHE, CONTENT_CACHE, USER_CACHE]);
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith("language-lab-") && !keep.has(key)).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

const offlineResponse = () => new Response("Offline resource unavailable", { status: 503, statusText: "Offline" });

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).catch(() => caches.match("./index.html").then((response) => response || offlineResponse())));
    return;
  }
  if (url.pathname.includes("/content/") || url.pathname.includes("/lesson/")) {
    event.respondWith((async () => {
      const cache = await caches.open(CONTENT_CACHE);
      const cached = await cache.match(event.request);
      try {
        const response = await fetch(event.request);
        if (response.ok) cache.put(event.request, response.clone());
        return response;
      } catch { return cached || caches.match(event.request) || offlineResponse(); }
    })());
    return;
  }
  event.respondWith((async () => {
    const cache = await caches.open(SHELL_CACHE);
    const cached = await cache.match(event.request);
    try {
      const response = await fetch(event.request);
      if (response.ok) cache.put(event.request, response.clone());
      return response;
    } catch { return cached || offlineResponse(); }
  })());
});

self.addEventListener("message", (event) => {
  if (event.data?.type !== "CACHE_URL" || !event.data.url) return;
  event.waitUntil(caches.open(USER_CACHE).then((cache) => cache.add(event.data.url)));
});
