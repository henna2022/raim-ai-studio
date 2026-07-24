/* 라이미의 AI 언어 연구소 — 서비스 워커 (오프라인 캐시) */
/* 배포마다 버전을 올릴 것(v7→v8…). 관리자 화면이 이 이름에서 버전을 읽어 표시함. */
const CACHE = 'raim-ai-v9';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.webmanifest',
  './assets/seoulraim_logo.png',
  './assets/raimi.png',
  './assets/fonts/Paperlogy-4Regular.woff2',
  './assets/fonts/Paperlogy-5Medium.woff2',
  './assets/fonts/Paperlogy-7Bold.woff2',
  './assets/fonts/Paperlogy-8ExtraBold.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // 네트워크 우선: 온라인이면 항상 최신, 실패 시 캐시(오프라인) 대체
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
  );
});
