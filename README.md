# Raimi's AI Language Lab

A touch-based, game-style web app that teaches kids how AI understands language — built for the Seoul Robot & AI Science Museum (Seoul RAIM).

## What it is

Visitors play through five short games with Raimi, a rabbit-shaped character, each one turning a real NLP idea into something you can tap, drag, and slide:

1. **Split the Words** (tokenization) — slide a finger between letters to cut a sentence into word pieces.
2. **Word Map** (embedding) — drag words into the matching category "town" (e.g. animals vs. food).
3. **Order Matters** (position) — tap jumbled words back into the correct sentence order.
4. **Spotlight Detective** (attention) — tap the word that answers a question about the sentence.
5. **Guess the Next Word** (prediction) — pick the most likely next word; the app reveals probability bars for each option.

Collecting all 5 "stamps" completes the run and shows a congratulations screen. It's built and framed as museum exhibition content — a playful way to introduce how AI processes language — not a foreign-language vocabulary course and not a product with an actual AI model behind it.

## How it works

- **Plain HTML/CSS/JS, no framework, no build step, no backend.** Everything — screens, game logic, content, animations — lives in `index.html`, `styles.css`, and `script.js`. There is nothing to compile or deploy other than the static files themselves.
- **Screen flow:** `start` → `home` (menu with the 5 lesson cards and stamp progress) → `game` (per-lesson interactive rounds) → `complete` (all 5 stamps collected, confetti).
- **Bilingual Korean/English.** A single `LANG` variable and a `t(ko, en)` helper switch all UI text and game content live; the page also sets `<meta name="google" content="notranslate">` so the browser's own auto-translate doesn't fight the app's built-in toggle.
- **Installable, offline-capable PWA.** `manifest.webmanifest` plus a service worker (`sw.js`) precache the app shell and use a network-first/cache-fallback strategy, so the app keeps working without a live connection — it runs unattended on 3 exhibition tablets on the museum floor.
- **All interaction is touch.** Every lesson is driven by tap, drag, and slide gestures on text and shapes — there is deliberately no audio and no live AI model, which keeps the app simple and robust for unattended kiosks.
- **Kiosk conveniences:** a 2-minute idle timer resets the app to the start screen; a hidden admin panel (5 taps on the logo, or `?admin` in the URL, gated by a client-side 4-digit PIN) shows daily usage stats and can export them as an `.xlsx` report built by a hand-written ZIP/OOXML writer — no spreadsheet library involved.

## Project structure

- `index.html` — the single-page markup for all four screens (start, home/menu, game, complete)
- `styles.css` — kiosk-style visuals: large touch targets, background blobs, stamp and card UI
- `script.js` — everything else: lesson content (KO/EN), the 5 mini-games, screen navigation, localStorage-based usage-stats tracking, the from-scratch `.xlsx` builder, and the service-worker registration
- `manifest.webmanifest` — PWA manifest (name, icons, theme color, standalone display)
- `sw.js` — service worker: caches the app shell, network-first with offline fallback, cache name versioned per release (`raim-ai-vN`)
- `assets/` — Raimi character art, the Seoul RAIM logo, and self-hosted Paperlogy webfonts (`.woff2`, no external font CDN)
- `icons/` — PWA icons (192px, 512px, maskable, Apple touch icon)
- `test/stats.test.js` — a Node regression test for the stats-aggregation and `.xlsx`-generation logic (run with `node test/stats.test.js`)

Since there's no build step, you can open `index.html` directly in a browser or serve the folder with any static file server to run the app locally.

## 한국어 소개

라이미의 AI 언어 연구소는 서울로봇인공지능과학관 전시용으로 만든, 터치 기반 게임형 학습 웹앱이다. 실제 AI 모델을 탑재한 것이 아니라, 토큰화·임베딩·순서·어텐션·다음 단어 예측이라는 다섯 가지 자연어처리 개념을 손가락으로 자르고 끌고 누르는 놀이로 풀어 소개하는 교육 콘텐츠다. 프레임워크나 빌드 과정 없이 순수 HTML/CSS/JS로 작성됐고, 서버 없이 브라우저에서만 동작한다. PWA로 오프라인 캐싱을 지원하며 한국어·영어 전환이 가능하다. 모든 상호작용은 탭·드래그·슬라이드 같은 터치 조작으로 이뤄지며, 무인 전시 환경에서 단순하고 안정적으로 돌아가도록 실제 AI 모델이나 음성 기능 없이 설계했다.

## More

Full write-up (context, screenshots, background): [juwonlee.dev/work/raimi-language-lab](https://juwonlee.dev/work/raimi-language-lab)
