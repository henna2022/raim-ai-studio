/*
 * 라이미 이용 통계 · 엑셀(.xlsx) 생성 로직 회귀 테스트
 * 실행:  node test/stats.test.js
 *
 * script.js는 브라우저 전용(빌드/의존성 없음)이라, 여기서는 node의 vm 모듈에
 * document/localStorage 등 최소 stub을 주입해 그대로 로드한 뒤(=파일 무수정),
 * 순수 함수(집계·xlsx)만 꺼내 검증한다.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');

/* ---------- 최소 브라우저 stub ---------- */
function fakeEl() {
  const e = {
    src: '', onclick: null, title: '', textContent: '', innerHTML: '',
    setAttribute() {}, appendChild() {}, append() {},
    addEventListener() {}, querySelector() { return fakeEl(); },
    querySelectorAll() { return []; },
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    style: {},
  };
  return e;
}
const store = {};
const ctx = {
  console,
  document: {
    title: '',
    getElementById() { return fakeEl(); },
    querySelectorAll() { return []; },
    addEventListener() {},
    createElement() { return fakeEl(); },
    body: fakeEl(),
  },
  window: {},
  navigator: {},
  location: { search: '' },
  localStorage: {
    getItem(k) { return k in store ? store[k] : null; },
    setItem(k, v) { store[k] = String(v); },
    removeItem(k) { delete store[k]; },
    clear() { for (const k in store) delete store[k]; },
  },
  setTimeout() { return 0; },
  clearTimeout() {},
  requestAnimationFrame() { return 0; },
  URLSearchParams, TextEncoder, Uint8Array, Uint32Array,
  JSON, Math, Date, Set, Map, Array, Object, String, Number, isFinite, parseInt,
};
ctx.global = ctx;
vm.createContext(ctx);
vm.runInContext(src, ctx, { filename: 'script.js' });

/* ---------- 초소형 테스트 러너 ---------- */
let pass = 0, fail = 0;
function eq(actual, expected, msg) {
  const a = JSON.stringify(actual), e = JSON.stringify(expected);
  if (a === e) { pass++; }
  else { fail++; console.error('  ✗ ' + msg + '\n      기대: ' + e + '\n      실제: ' + a); }
}
function ok(cond, msg) {
  if (cond) { pass++; } else { fail++; console.error('  ✗ ' + msg); }
}

/* ---------- 1. 리프 순수 함수 ---------- */
eq(ctx.colLetter(0), 'A', 'colLetter(0)=A');
eq(ctx.colLetter(25), 'Z', 'colLetter(25)=Z');
eq(ctx.colLetter(26), 'AA', 'colLetter(26)=AA');
eq(ctx.colLetter(27), 'AB', 'colLetter(27)=AB');

eq(ctx.crc32(new TextEncoder().encode('123456789')), 0xCBF43926, 'crc32 표준 검사값(0xCBF43926)');

eq(ctx.round1(1.234), 1.2, 'round1 내림');
eq(ctx.round1(1.25), 1.3, 'round1 반올림');
eq(ctx.round1(2), 2, 'round1 정수');

eq(ctx.rateOf(3, 10), 30, 'rateOf(3,10)=30');
eq(ctx.rateOf(1, 3), 33.3, 'rateOf(1,3)=33.3');
eq(ctx.rateOf(5, 0), 0, 'rateOf(_,0)=0 (0 나눗셈 방어)');

eq(ctx.statFmt(ctx.statParse('2026-07-14')), '2026-07-14', 'statParse/statFmt 왕복');

/* ---------- 2. 집계 함수 ---------- */
const wk = ctx.aggWeekly({ '2026-07-13': 2, '2026-07-14': 3 }); // 월·화(같은 주)
ok(wk.reduce((a, w) => a + w.sum, 0) === 5, 'aggWeekly 총합=5');
ok(wk.reduce((a, w) => a + w.days, 0) === 2, 'aggWeekly 총 활동일=2');

const mo = ctx.aggMonthly({ '2026-06-30': 4, '2026-07-01': 6 });
eq(mo.length, 2, 'aggMonthly 월 2개');
eq(mo[1].change, '+50%', 'aggMonthly 전월 대비 +50%');

const wd = ctx.aggWeekday({ '2026-07-13': 2, '2026-07-14': 5 });
ok(wd.reduce((a, w) => a + w.sum, 0) === 7, 'aggWeekday 총합=7');

const hr = ctx.aggHourly({ '09': 5, '13': 3 });
eq(hr.total, 8, 'aggHourly 총합=8');
eq(hr.rows[9].share, 62.5, 'aggHourly 09시 비율 62.5%');

/* ---------- 3. xlsx 바이너리 시그니처 ---------- */
const wb = ctx.buildWorkbook([{ name: 'S', rows: [[{ v: 'a' }, { v: 1 }]] }]);
ok(wb instanceof Uint8Array, 'buildWorkbook Uint8Array 반환');
ok(wb[0] === 0x50 && wb[1] === 0x4b && wb[2] === 0x03 && wb[3] === 0x04, 'ZIP 로컬 헤더 시그니처 PK\\x03\\x04');
const raw = Buffer.from(wb).toString('latin1');
ok(raw.indexOf('PK\x01\x02') !== -1, 'ZIP 중앙 디렉터리 시그니처 존재');
ok(raw.indexOf('PK\x05\x06') !== -1, 'ZIP EOCD 시그니처 존재');

/* ---------- 4. 버그 ③ 회귀: 자정 넘김 완주도 날짜별 시트에 포함 ---------- */
// 시작은 7/13, 완주는 다음 날 7/14(시작 기록 없는 날) — 합집합 처리 확인
store['raimi_complete_stats'] = JSON.stringify({ '2026-07-14': 1 });
store['raimi_hour_stats'] = JSON.stringify({ '23': 1 });
store['raimi_stage_stats'] = JSON.stringify({});
store['raimi_lang_stats'] = JSON.stringify({ ko: 1 });
const xlsx = ctx.buildStatsXlsx({ '2026-07-13': 1 });
const xraw = Buffer.from(xlsx).toString('latin1');
ok(xraw.indexOf('2026-07-14') !== -1, '버그③: 완주-전용 날짜(2026-07-14)가 리포트에 포함됨');

/* ---------- 결과 ---------- */
console.log('\n' + (fail === 0 ? '✅' : '❌') + '  통과 ' + pass + ' / 실패 ' + fail);
process.exit(fail === 0 ? 0 : 1);
