let LANG='ko';
const RAIMI_IMG="assets/raimi.png";
const done=new Set();
function t(ko,en){return LANG==='ko'?ko:en;}

const ATTO = `
<g stroke="#3a2f2a" stroke-width="3" stroke-linejoin="round">
  <line x1="50" y1="12" x2="50" y2="22"/><circle cx="50" cy="9" r="5" fill="#ffc23c"/>
  <rect x="22" y="22" width="56" height="46" rx="16" fill="#ff8a5c"/>
  <rect x="30" y="32" width="40" height="22" rx="11" fill="#fff"/>
  <circle cx="42" cy="43" r="5.5" fill="#3a2f2a"/><circle cx="58" cy="43" r="5.5" fill="#3a2f2a"/>
  <circle cx="44" cy="41" r="1.8" fill="#fff"/><circle cx="60" cy="41" r="1.8" fill="#fff"/>
  <path d="M44 60 q6 5 12 0" fill="none" stroke-linecap="round"/>
  <rect x="34" y="70" width="32" height="20" rx="9" fill="#56c596"/>
</g>`;

/* ---------- 섹션 일러스트 (96x96, 두꺼운 외곽선 카툰 스타일) ---------- */
const ART1 = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g stroke="#3a2f2a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
  <rect x="9" y="54" width="22" height="27" rx="6" fill="#ffd9c7"/>
  <rect x="37" y="54" width="22" height="27" rx="6" fill="#ffb796"/>
  <rect x="65" y="54" width="22" height="27" rx="6" fill="#ff8a5c"/>
  <circle cx="27" cy="20" r="6.5" fill="#fff"/><circle cx="27" cy="38" r="6.5" fill="#fff"/>
  <path d="M32 22 L71 41" fill="none"/><path d="M32 36 L71 17" fill="none"/>
  <circle cx="51" cy="29" r="2.4" fill="#3a2f2a" stroke="none"/></g></svg>`;

const ART2 = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g stroke="#3a2f2a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
  <path d="M12 28 L36 22 L60 28 L84 22 L84 70 L60 76 L36 70 L12 76 Z" fill="#eafff3"/>
  <path d="M36 22 L36 70" fill="none" stroke-width="2.4" stroke-dasharray="3 4"/>
  <path d="M60 28 L60 76" fill="none" stroke-width="2.4" stroke-dasharray="3 4"/>
  <path d="M26 34 a8 8 0 0 1 8 8 c0 6 -8 14 -8 14 c0 0 -8 -8 -8 -14 a8 8 0 0 1 8 -8 z" fill="#56c596"/>
  <circle cx="26" cy="42" r="3" fill="#fff"/>
  <path d="M64 40 a7 7 0 0 1 7 7 c0 5 -7 12 -7 12 c0 0 -7 -7 -7 -12 a7 7 0 0 1 7 -7 z" fill="#ff8a5c"/>
  <circle cx="64" cy="47" r="2.6" fill="#fff"/></g></svg>`;

const ART3 = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g stroke="#3a2f2a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
  <path d="M24 30 q24 -15 47 0" fill="none"/><path d="M71 30 l-8 -2 M71 30 l-3 -8" fill="none"/>
  <rect x="11" y="44" width="22" height="31" rx="6" fill="#c2dcff"/>
  <rect x="37" y="44" width="22" height="31" rx="6" fill="#8dbcff"/>
  <rect x="63" y="44" width="22" height="31" rx="6" fill="#6aa8ff"/>
  <text x="22" y="66" font-family="Jua, sans-serif" font-size="19" fill="#3a2f2a" stroke="none" text-anchor="middle">1</text>
  <text x="48" y="66" font-family="Jua, sans-serif" font-size="19" fill="#3a2f2a" stroke="none" text-anchor="middle">2</text>
  <text x="74" y="66" font-family="Jua, sans-serif" font-size="19" fill="#3a2f2a" stroke="none" text-anchor="middle">3</text></g></svg>`;

const ART4 = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g stroke="#3a2f2a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
  <path d="M58 36 L88 23 L88 65 L58 52 Z" fill="#ffe7a0"/>
  <rect x="18" y="38" width="32" height="14" rx="5" fill="#ffc23c"/>
  <rect x="48" y="33" width="14" height="24" rx="4" fill="#ffd66b"/>
  <path d="M75 39 l1.6 4.4 4.4 1.6 -4.4 1.6 -1.6 4.4 -1.6 -4.4 -4.4 -1.6 4.4 -1.6 z" fill="#fff" stroke-width="2"/></g></svg>`;

const ART5 = `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g stroke="#3a2f2a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
  <path d="M28 79 L68 79 L60 66 L36 66 Z" fill="#c78bff"/>
  <circle cx="48" cy="42" r="23" fill="#efe2ff"/>
  <path d="M38 34 a12 12 0 0 1 9 -7" fill="none" stroke="#fff" stroke-width="4"/>
  <path d="M48 35 l2.4 6 6 2.4 -6 2.4 -2.4 6 -2.4 -6 -6 -2.4 6 -2.4 z" fill="#c78bff" stroke-width="2"/></g></svg>`;

const LESSONS = [
  {c:1,emoji:"✂️",art:ART1,
   name:{ko:"단어 쪼개기",en:"Split the Words"}, tag:{ko:"토큰화",en:"Tokenization"},
   hook:{ko:"AI는 긴 문장을 한 번에 못 읽어요. 글자 사이를 손가락으로 그어서 단어로 나눠 볼까요?",
         en:"AI can't read a long sentence all at once. Slide your finger between the letters to split it into words!"}},
  {c:2,emoji:"🗺️",art:ART2,
   name:{ko:"단어 지도",en:"Word Map"}, tag:{ko:"임베딩",en:"Embedding"},
   hook:{ko:"비슷한 단어끼리는 가까운 마을에 살아요. 단어를 알맞은 마을로 보내 줄까요?",
         en:"Similar words live in nearby towns. Can you drag each word to the right town?"}},
  {c:3,emoji:"🔀",art:ART3,
   name:{ko:"순서의 중요성",en:"Order Matters"}, tag:{ko:"위치",en:"Position"},
   hook:{ko:"순서를 모르면 AI는 단어를 뒤죽박죽으로 봐요! 순서대로 클릭해 문장을 완성시켜볼까요?",
         en:"Without order, AI sees words all jumbled up! Tap them in order to complete the sentence!"}},
  {c:4,emoji:"🔦",art:ART4,
   name:{ko:"스포트라이트 탐정",en:"Spotlight Detective"}, tag:{ko:"어텐션",en:"Attention"},
   hook:{ko:"이게 제일 중요한 비밀이에요! 헷갈릴 땐 어떤 단어를 봐야 할까요? 정답 단어를 눌러 주세요.",
         en:"This is the most important secret! When things are confusing, which word should we look at? Tap the right word."}},
  {c:5,emoji:"🔮",art:ART5,
   name:{ko:"다음 단어 맞히기",en:"Guess the Next Word"}, tag:{ko:"예측",en:"Prediction"},
   hook:{ko:"AI는 다음에 올 단어를 맞혀서 말을 만들어요. 빈칸에 어떤 말이 올까요?",
         en:"AI makes sentences by guessing the next word. What goes in the blank?"}},
];

function el(tag,attrs,txt){const n=document.createElement(tag);
  if(attrs)for(const k in attrs){if(k==='class')n.className=attrs[k];else n.setAttribute(k,attrs[k]);}
  if(txt!=null)n.textContent=txt;return n;}
function shuffle(a){return a.slice().sort(()=>Math.random()-0.5);}
function setText(id,s){const e=document.getElementById(id);if(e)e.textContent=s;}
function setHTML(id,s){const e=document.getElementById(id);if(e)e.innerHTML=s;}

/* ---------- 화면 ---------- */
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');}
function goHome(){
  if(done.size>=5){showComplete();return;} renderHome();show('home');}
function resetAll(){done.clear();applyLang();show('start');}
function showComplete(){renderStamps('doneStamps');show('complete');fire();}

/* ---------- 언어 적용 ---------- */
function applyLang(){
  document.title=t('라이미의 AI 언어 연구소',"Raimi's AI Language Lab");
  setText('startTitle', t('라이미의 AI 언어 연구소',"Raimi's AI Language Lab"));
  setHTML('startSub', t('🤖 안녕하세요, 저는 라이미예요!<br>5개의 도장을 모으면서<br>AI가 우리 말을 어떻게 알아듣는지<br>함께 알아볼까요?',
    "🤖 Hi, I'm Raimi!<br>Collect all 5 stamps<br>and discover how AI<br>understands our words!"));
  setText('startBtn', t('▶ 시작하기','▶ Start'));
  setHTML('homeTitle', t('라이미의 <b>AI 언어 연구소</b>',"Raimi's <b>AI Language Lab</b>"));
  setText('homeSub', t('🤖 5가지 비밀을 배우고 도장을 모아 봐요!','🤖 Learn 5 secrets and collect all the stamps!'));
  setText('doneTitle', t('축하해요! 🎉','Congratulations! 🎉'));
  setHTML('doneSub', t('5개의 도장을 모두 모았어요!<br>이제 여러분도 AI 박사예요.<br>정말 잘했어요! 🏅',
    "You collected all 5 stamps!<br>You're an AI expert now.<br>Great job! 🏅"));
  setText('doneBtn', t('↺ 처음부터 다시','↺ Start over'));
  const ll=LANG==='ko'?'🌐 English':'🌐 한국어';
  setText('langBtn',ll); setText('langBtn2',ll);
  const rl=t('↺ 초기화','↺ Reset');
  setText('resetHome',rl); setText('resetGame',rl); setText('resetDone',rl);
  setText('backBtn', t('🏠 처음으로','🏠 Home'));
}
function toggleLang(){LANG=LANG==='ko'?'en':'ko';applyLang();
  if(document.getElementById('home').classList.contains('active'))renderHome();}

/* ---------- 메뉴 / 도장 ---------- */
function renderStamps(id){
  const wrap=document.getElementById(id||'stamps'); if(!wrap)return; wrap.innerHTML='';
  LESSONS.forEach(l=>{const on=done.has(l.c);
    wrap.appendChild(el('div',{class:'stamp'+(on?' on':'')}, on?l.emoji:''));});
  setText('stampCount', done.size+' / 5');
}
function renderHome(){
  applyLang(); renderStamps('stamps');
  const wrap=document.getElementById('cards'); wrap.innerHTML='';
  LESSONS.forEach(l=>{
    const card=el('div',{class:'card'+(done.has(l.c)?' done':'')}); card.setAttribute('data-c',l.c);
    card.innerHTML=`<div class="num">${l.c}</div>${done.has(l.c)?'<div class="done-badge">✓</div>':''}
      <div class="art">${l.art}</div><div class="name">${l.name[LANG]}</div><div class="tag">${l.tag[LANG]}</div>`;
    card.onclick=()=>openLesson(l.c);
    wrap.appendChild(card);
  });
}

/* ---------- 레슨 ---------- */
function openLesson(c){
  bumpStage(c,'o');   // 단계 열람 기록
  const l=LESSONS.find(x=>x.c===c);
  document.getElementById('attoG').src=RAIMI_IMG;
  setText('backBtn', t('🏠 처음으로','🏠 Home'));
  setHTML('hook', l.hook[LANG].replace(/([.!?。！？])\s+/g,'$1<br>'));
  hideReveal(); document.getElementById('stage').innerHTML='';
  show('game');
  ({1:gameTokenize,2:gameEmbed,3:gamePosition,4:gameAttention,5:gamePredict})[c](document.getElementById('stage'),c);
}
function hideReveal(){const r=document.getElementById('reveal');r.classList.remove('show');r.innerHTML='';}
function showNote(html,label,fn){
  const r=document.getElementById('reveal'); r.innerHTML=html+'<div class="btnrow"></div>';
  const b=el('button',{class:'btn go'},label); b.onclick=fn; r.querySelector('.btnrow').appendChild(b);
  r.classList.add('show');
}
function finish(c, html){
  bumpStage(c,'d');   // 단계 완료 기록
  const before=done.size;
  done.add(c);
  const all=done.size>=5;
  if(all && before<5) bumpComplete();   // 5번째 도장을 방금 채운 순간 1회만 기록
  const r=document.getElementById('reveal'); r.innerHTML=html+'<div class="btnrow"></div>';
  const b=el('button',{class:'btn '+(all?'go':'home')}, all? t('🎉 도장 5개 완성!','🎉 All 5 stamps!') : t('🏠 처음으로','🏠 Home'));
  b.onclick = all? showComplete : ()=>{renderHome();show('home');};
  r.querySelector('.btnrow').appendChild(b);
  r.classList.add('show');
}
function runRounds(stage, rounds, c, finalReveal){
  let i=0;
  function go(){
    stage.innerHTML=''; hideReveal();
    if(rounds.length>1) stage.appendChild(el('div',{style:'font-size:22px;opacity:.6'},(i+1)+' / '+rounds.length));
    const area=el('div',{style:'display:flex;flex-direction:column;align-items:center;gap:16px;'});
    stage.appendChild(area);
    rounds[i].fn(area, (ok)=>{
      const last = i>=rounds.length-1;
      if(ok===false){
        const wrongNote = t('🔮 AI는 생각이 조금 다른 것 같아요. 어떤 막대가 가장 높은지 볼까요?',
            '🔮 Hmm, AI was thinking of something different. Which bar is the tallest?');
        showNote(wrongNote, t('다음 ▶','Next ▶'), last ? ()=>finish(c, finalReveal) : ()=>{i++;go();});
      } else if(last){
        finish(c, finalReveal);
      } else {
        showNote(rounds[i].note, t('다음 ▶','Next ▶'), ()=>{i++;go();});
      }
    });
  }
  go();
}

/* ===== 1. 토큰화 ===== */
function tokenRound(words){
  return (box,onDone)=>{
    const chars=words.join('').split(''); const lens=words.map(w=>w.length);
    const target=new Set(); let acc=0; for(let i=0;i<lens.length-1;i++){acc+=lens[i];target.add(acc-1);}
    const cuts=new Set(); const wordSet=new Set(words);
    box.appendChild(el('div',{style:'font-size:20px;opacity:.78'},
      t('✏️ 글자 사이를 손가락으로 쓱~ 그어서 잘라 볼까요? 진짜 단어가 되면 초록색 ✓',
        '✏️ Slide your finger between the letters to cut! Real words turn green ✓')));
    const wrap=el('div',{style:'position:relative;padding:12px 0;'});
    const strip=el('div',{class:'cutstrip'}); const layer=el('div',{class:'cutlayer'});
    const guide=el('div',{class:'guide'}); layer.appendChild(guide); wrap.append(strip,layer);
    const status=el('div',{style:'font-size:22px;margin-top:8px;min-height:28px'},''); box.append(wrap,status);
    let tiles=[],solved=false;
    function render(){
      strip.innerHTML=''; tiles=[]; let group=el('div',{class:'cgroup'}),txt='';
      for(let i=0;i<chars.length;i++){
        const tl=el('div',{class:'ctile'},chars[i]); group.appendChild(tl); tiles.push(tl); txt+=chars[i];
        if(cuts.has(i)||i===chars.length-1){
          if(wordSet.has(txt)){group.classList.add('word'); group.appendChild(el('span',{class:'wtick'},'✓'));}
          strip.appendChild(group);
          if(i!==chars.length-1){strip.appendChild(el('div',{class:'cutmark'},'✂️')); group=el('div',{class:'cgroup'}); txt='';}
        }
      }
      const ok=cuts.size===target.size&&[...cuts].every(x=>target.has(x));
      if(ok&&!solved){solved=true; status.textContent=t('🎉 완벽하게 단어로 나눴어요!','🎉 Perfectly split into words!');
        layer.style.pointerEvents='none'; setTimeout(onDone,800);}
      else if(!ok){status.textContent=cuts.size?
        t('조각: '+(cuts.size+1)+'개 — 단어가 되면 초록색!','Pieces: '+(cuts.size+1)+' — real words turn green!'):'';}
    }
    render();
    const resetBtn=el('button',{class:'btn home',style:'font-size:19px;padding:9px 20px;margin-top:10px;'},
      t('✂️ 다시 잘라보기','✂️ Cut again'));
    resetBtn.onclick=()=>{if(solved)return;cuts.clear();solved=false;layer.style.pointerEvents='';
      status.textContent='';render();};
    box.append(resetBtn);
    function gapCenters(){const cs=[];for(let i=0;i<tiles.length-1;i++){
      const a=tiles[i].getBoundingClientRect(),b=tiles[i+1].getBoundingClientRect();cs.push({i,x:(a.right+b.left)/2});}return cs;}
    let down=false,x0,y0;
    layer.addEventListener('pointerdown',e=>{down=true;const r=layer.getBoundingClientRect();
      x0=e.clientX;y0=e.clientY;guide.style.display='block';guide.style.left=(e.clientX-r.left)+'px';try{layer.setPointerCapture(e.pointerId);}catch(_){}});
    layer.addEventListener('pointermove',e=>{if(!down)return;const r=layer.getBoundingClientRect();guide.style.left=(e.clientX-r.left)+'px';});
    layer.addEventListener('pointerup',e=>{if(!down)return;down=false;guide.style.display='none';
      if(Math.abs(e.clientY-y0)<14)return;
      const cx=(x0+e.clientX)/2,cs=gapCenters();if(!cs.length)return;
      let best=cs[0];for(const g of cs)if(Math.abs(g.x-cx)<Math.abs(best.x-cx))best=g;
      if(cuts.has(best.i))cuts.delete(best.i);else{cuts.add(best.i);}
      render();});
  };
}
function gameTokenize(stage,c){
  const W = LANG==='ko'
    ? [["오늘은","날씨가","참","좋아요"],["나는","친구랑","떡볶이를","먹었어요"],["우리","학교","앞","분식집은","맛있어요"]]
    : [["I","like","rainbows"],["We","eat","pizza","today"],["My","dog","runs","fast"]];
  const notes=[
    t("✂️ 글자를 잘라 단어 조각을 만들었어요! 이 조각 하나하나를 '토큰'이라고 불러요.",
      "✂️ You cut the letters into word pieces! Each piece is called a 'token'."),
    t("✂️ 긴 문장도 작은 조각으로 척척 나눌 수 있지요? 잘하고 있어요!",
      "✂️ Even long sentences split into pieces — you're doing great!")
  ];
  const rounds=W.map((w,i)=>({fn:tokenRound(w), note:notes[i]}));
  runRounds(stage, rounds, c,
    t(`✂️ 잘했어요! 긴 문장도 작은 <b>단어 조각(토큰)</b>으로 나뉘지요?<br>
        <span class="ai">AI도 문장을 통째로 안 읽고, 이렇게 조각조각 잘라서 하나씩 살펴봐요.</span>`,
      `✂️ Great job! Even a long sentence breaks into little <b>word pieces (tokens)</b>.<br>
        <span class="ai">AI doesn't read a whole sentence at once — it cuts it into pieces and looks at them one by one.</span>`));
}

/* ===== 2. 임베딩 ===== */
function embedRound(villages, items){
  return (box,onDone)=>{
    box.appendChild(el('div',{style:'font-size:20px;opacity:.78'},
      t('👆 단어를 끌어다 알맞은 마을에 놓아 볼까요?','👆 Drag each word into the right town!')));
    let placed=0; const pen=el('div',{class:'row'}); const vwrap=el('div',{class:'villages'}); const vEls=[];
    villages.forEach(v=>{const node=el('div',{class:'village '+v.cls}); node.appendChild(el('h3',null,v.label));
      const p=el('div',{class:'pen'}); node.appendChild(p); node._type=v.type; node._pen=p; vEls.push(node); vwrap.appendChild(node);});
    function over(x,y){return vEls.find(v=>{const r=v.getBoundingClientRect();return x>r.left&&x<r.right&&y>r.top&&y<r.bottom;});}
    function makeChip(it){
      const chip=el('div',{class:'chip drag'},it.w); chip._type=it.type; let drag=false,ox,oy;
      chip.addEventListener('pointerdown',e=>{drag=true;try{chip.setPointerCapture(e.pointerId);}catch(_){}
        const r=chip.getBoundingClientRect();ox=e.clientX-r.left;oy=e.clientY-r.top;chip.style.width=r.width+'px';
        chip.classList.add('lift');chip.style.position='fixed';chip.style.left=r.left+'px';chip.style.top=r.top+'px';chip.style.zIndex=999;});
      chip.addEventListener('pointermove',e=>{if(!drag)return;chip.style.left=(e.clientX-ox)+'px';chip.style.top=(e.clientY-oy)+'px';
        const v=over(e.clientX,e.clientY);vEls.forEach(x=>x.classList.toggle('hot',x===v));});
      chip.addEventListener('pointerup',e=>{if(!drag)return;drag=false;vEls.forEach(x=>x.classList.remove('hot'));
        const v=over(e.clientX,e.clientY);
        chip.classList.remove('lift');chip.style.position='';chip.style.left='';chip.style.top='';chip.style.zIndex='';chip.style.width='';
        if(v&&v._type===chip._type){v._pen.appendChild(chip);chip.classList.add('pulse');chip.style.pointerEvents='none';chip.classList.remove('drag');
          placed++; if(placed===items.length)setTimeout(onDone,500);}
        else if(v){v.classList.add('shake');setTimeout(()=>v.classList.remove('shake'),400);}});
      return chip;
    }
    shuffle(items).forEach(it=>pen.appendChild(makeChip(it)));
    box.append(pen,vwrap);
  };
}
function gameEmbed(stage,c){
  const R = LANG==='ko' ? [
    {v:[{type:'a',cls:'animal',label:'🦁 동물 마을'},{type:'f',cls:'food',label:'🍎 음식 마을'}],
     i:[{w:'토끼',type:'a'},{w:'사자',type:'a'},{w:'곰',type:'a'},{w:'사과',type:'f'},{w:'빵',type:'f'},{w:'김밥',type:'f'}]},
    {v:[{type:'c',cls:'sky',label:'🚗 탈것 마을'},{type:'n',cls:'nature',label:'🌳 자연 마을'}],
     i:[{w:'자동차',type:'c'},{w:'기차',type:'c'},{w:'자전거',type:'c'},{w:'나무',type:'n'},{w:'꽃',type:'n'},{w:'바다',type:'n'}]}
  ] : [
    {v:[{type:'a',cls:'animal',label:'🦁 Animals'},{type:'f',cls:'food',label:'🍎 Foods'}],
     i:[{w:'rabbit',type:'a'},{w:'lion',type:'a'},{w:'bear',type:'a'},{w:'apple',type:'f'},{w:'bread',type:'f'},{w:'rice',type:'f'}]},
    {v:[{type:'c',cls:'sky',label:'🚗 Vehicles'},{type:'n',cls:'nature',label:'🌳 Nature'}],
     i:[{w:'car',type:'c'},{w:'train',type:'c'},{w:'bike',type:'c'},{w:'tree',type:'n'},{w:'flower',type:'n'},{w:'sea',type:'n'}]}
  ];
  const notes=[ t('🗺️ 동물은 동물끼리, 음식은 음식끼리 가까이 모였어요! 비슷한 단어는 가까운 곳에 살아요.',
    '🗺️ Animals with animals, foods with foods! Similar words live close together.') ];
  const rounds=R.map((r,i)=>({fn:embedRound(r.v,r.i), note:notes[i]}));
  runRounds(stage, rounds, c,
    t(`🗺️ 멋져요! 비슷한 단어끼리 <b>가까운 마을</b>에 모였지요?<br>
        <span class="ai">AI는 단어를 '위치'로 기억해서, 뜻이 비슷하면 가까이 둬요. 그래서 단어의 의미를 알아내요.</span>`,
      `🗺️ Awesome! Similar words gathered in <b>nearby towns</b>.<br>
        <span class="ai">AI remembers words as positions and keeps similar meanings close together — that's how it understands them.</span>`));
}

/* ===== 3. 위치(순서) ===== */
function orderRound(target, guide){
  return (box,onDone)=>{
    let jumble=shuffle(target);
    if(target.length>1){let tries=0;while(jumble.join(" ")===target.join(" ")&&tries++<20)jumble=shuffle(target);}
    box.appendChild(el('div',{style:'font-size:21px;opacity:.78'},
      t('🤖 순서를 모르면 AI는 이렇게 봐요: ','🤖 Without order, AI sees: ')+'"'+jumble.join(' ')+'"'));
    const slots=el('div',{class:'row'});
    const blanks=target.map(()=>{const b=el('div',{class:'chip blank'},'＿');b.style.minWidth='130px';slots.appendChild(b);return b;});
    box.append(slots, el('div',{style:'font-size:20px;opacity:.78'},guide));
    const pool=el('div',{class:'row'}); let step=0;
    jumble.forEach(w=>{
      const chip=el('div',{class:'chip'},w);
      chip.onclick=()=>{
        if(chip.classList.contains('used'))return;
        if(w===target[step]){chip.classList.add('used');chip.style.opacity='.25';chip.style.pointerEvents='none';
          blanks[step].textContent=w;blanks[step].classList.add('filled','pulse');step++;
          if(step===target.length){setTimeout(onDone,800);}}
        else{chip.classList.add('shake');setTimeout(()=>chip.classList.remove('shake'),400);}
      };
      pool.appendChild(chip);
    });
    box.append(pool);
  };
}
function gamePosition(stage,c){
  const gKo="👇 뒤죽박죽 단어를 바른 순서대로 터치해주세요.";
  const gEn="👇 Tap the jumbled words in the right order.";
  const R = LANG==='ko' ? [
    {tg:["로봇팔이","그림을","그려요"], g:gKo},
    {tg:["앨리스가","축구공을","차요"], g:gKo},
    {tg:["리쿠가","재미있는 책을","읽어요"], g:gKo},
    {tg:["로봇개가","노란 공을","물어요"], g:gKo},
    {tg:["스팟이","빨간 사과를","먹어요"], g:gKo}
  ] : [
    {tg:["The robot arm","draws","a picture"], g:gEn},
    {tg:["Alice","kicks","the soccer ball"], g:gEn},
    {tg:["Riku","reads","a fun book"], g:gEn},
    {tg:["The robot dog","bites","the yellow ball"], g:gEn},
    {tg:["Spot","eats","a red apple"], g:gEn}
  ];
  const notes=[
    t("🔀 순서를 맞추니 말이 되네요! 뒤죽박죽이면 무슨 뜻인지 알 수 없어요.",
      "🔀 In the right order it makes sense! All jumbled up, you can't tell what it means."),
    t("🔀 단어가 다 있어도 순서가 엉키면 이상하지요? 순서가 뜻을 만들어요.",
      "🔀 Even with all the words, the wrong order is confusing. Order makes the meaning."),
    t("🔀 주어 → 목적어 → 서술어 순서로 놓으니 딱 맞지요?",
      "🔀 Subject → verb → object — that's the order that fits!"),
    t("🔀 순서만 바꿔도 누가 무엇을 했는지가 달라져요!",
      "🔀 Just changing the order changes who did what!")
  ];
  const rounds=R.map((r,i)=>({fn:orderRound(r.tg,r.g), note:notes[i]}));
  runRounds(stage, rounds, c,
    t(`🔀 그래서 AI는 단어가 '몇 번째'에 있는지(<b>위치</b>)도 꼭 알아야 해요.<br>
        <span class="ai">순서를 모르면 단어가 뒤죽박죽 섞인 것처럼 보여서, 무슨 뜻인지 알 수 없거든요!</span>`,
      `🔀 That's why AI must know each word's place (its <b>position</b>).<br>
        <span class="ai">Without order, words look all jumbled up and AI can't tell what they mean!</span>`));
}

/* ===== 4. 어텐션 ===== */
function attnRound(q, tokens){
  return (box,onDone)=>{
    box.appendChild(el('div',{style:'font-size:24px'},q));
    const sent=el('div',{class:'sentence'});
    const hint=el('div',{class:'hint'},'');
    tokens.forEach(tk=>{
      const sp=el('span',{class:'word'},tk.t+' ');
      if(tk.role!=='x'){sp.onclick=()=>{
        if(tk.role==='ans'){sent.classList.add('dim');sp.classList.add('lit');sp.classList.remove('dim');
          hint.textContent=''; setTimeout(onDone,1100);}
        else{hint.textContent=t('🤔 다시 한 번 생각해보세요!','🤔 Think again!');
          sp.classList.add('shake'); setTimeout(()=>sp.classList.remove('shake'),400);}
      };}
      sent.appendChild(sp);
    });
    box.append(sent,hint);
  };
}
function multiHeadRound(sentence, colorWord, speedWord){
  return (box,onDone)=>{
    box.appendChild(el('div',{style:'font-size:22px'},
      t('🕵️ 탐정 두 명이 같은 문장에서 서로 다른 걸 찾아요!','🕵️ Two detectives find different things in the same sentence!')));
    const q=el('div',{style:'font-size:24px'}, t('🖌️ 색깔 탐정: 무슨 색일까요? 단어를 눌러 주세요!','🖌️ Color detective: What color is it? Tap the word!'));
    box.appendChild(q);
    const sent=el('div',{class:'sentence'}); const hint=el('div',{class:'hint'},''); let phase=0;
    sentence.split(' ').forEach(w=>{
      const sp=el('span',{class:'word'},w+' ');
      const bare = w.replace(/[.,!?、。！？]+$/,'');   // 끝 구두점 제거 후 비교(영어 'fast.' 대응)
      const role = bare===colorWord?'color' : (bare===speedWord?'speed':'x');
      sp.onclick=()=>{const want=phase===0?'color':'speed';
        if(role===want){sp.classList.add('lit');hint.textContent='';
          if(phase===0){phase=1;q.textContent=t('💨 속도가 어떤가요? 단어를 눌러 주세요!','💨 What is its speed like? Tap the word!');}
          else setTimeout(onDone,1100);}
        else if(role!=='x'){hint.textContent=t('그건 다른 탐정이 찾을 거예요~',"That's for the other detective~");
          sp.classList.add('shake');setTimeout(()=>sp.classList.remove('shake'),400);}
        else{hint.textContent=t('🤔 다시 한 번 생각해보세요!','🤔 Think again!');sp.classList.add('shake');setTimeout(()=>sp.classList.remove('shake'),400);}
      };
      sent.appendChild(sp);
    });
    box.append(sent,hint);
  };
}
function gameAttention(stage,c){
  let rounds;
  if(LANG==='ko'){
    rounds=[
      {fn:attnRound('🔦 "배고픈" 건 누구일까요? 단어를 눌러 주세요.',
        [{t:'사자가',role:'ans'},{t:'토끼를',role:'no'},{t:'쫓아갔어요.',role:'x'},{t:'너무',role:'x'},{t:'배고팠거든요.',role:'x'}]),
       note:'🔦 쫓아가던 \'사자\'가 배고픈 거였어요! AI도 헷갈리는 말을 만나면, 어떤 단어를 봐야 할지 손전등을 비춰서 정해요. 이게 바로 어텐션이에요.'},
      {fn:attnRound('🔦 "달콤한" 건 무엇일까요? 단어를 눌러 주세요.',
        [{t:'민지가',role:'no'},{t:'사과를',role:'ans'},{t:'먹었어요.',role:'x'},{t:'정말',role:'x'},{t:'달콤했어요.',role:'x'}]),
       note:'🔦 달콤한 건 \'사과\'였지요? AI는 \'달콤한\'이 어떤 단어와 어울리는지 집중해서 찾아요 — 이게 어텐션이에요.'},
      {fn:attnRound('🔦 "그 안"은 무엇의 안일까요? 단어를 눌러 주세요.',
        [{t:'지호는',role:'no'},{t:'가방을',role:'ans'},{t:'열었어요.',role:'x'},{t:'그',role:'x'},{t:'안에',role:'x'},{t:'책이',role:'no'},{t:'있었어요.',role:'x'}]),
       note:'🔦 책은 \'가방\' 안에 있었어요. \'그 안\'이 무엇을 가리키는지, AI는 앞 단어들을 살펴서 알아내요 — 어텐션 덕분이에요.'},
      {fn:multiHeadRound('빨간 자동차가 빠르게 달려요.','빨간','빠르게'), note:''}
    ];
  } else {
    rounds=[
      {fn:attnRound('🔦 Who was hungry? Tap the word.',
        [{t:'The',role:'x'},{t:'lion',role:'ans'},{t:'chased',role:'x'},{t:'the',role:'x'},{t:'rabbit',role:'no'},{t:'because',role:'x'},{t:'it',role:'x'},{t:'was',role:'x'},{t:'hungry.',role:'x'}]),
       note:"🔦 The 'lion' that was chasing was hungry! When AI meets a confusing word, it shines a flashlight to decide which word to look at. That's attention."},
      {fn:attnRound('🔦 What was sweet? Tap the word.',
        [{t:'Minji',role:'no'},{t:'ate',role:'x'},{t:'an',role:'x'},{t:'apple.',role:'ans'},{t:'It',role:'x'},{t:'was',role:'x'},{t:'very',role:'x'},{t:'sweet.',role:'x'}]),
       note:"🔦 The sweet thing was the 'apple'! AI focuses to find which word 'sweet' belongs with — that's attention."},
      {fn:attnRound('🔦 What was the book inside? Tap the word.',
        [{t:'Jiho',role:'no'},{t:'opened',role:'x'},{t:'the',role:'x'},{t:'bag.',role:'ans'},{t:'A',role:'x'},{t:'book',role:'no'},{t:'was',role:'x'},{t:'inside',role:'x'},{t:'it.',role:'x'}]),
       note:"🔦 The book was inside the 'bag'. AI looks back at earlier words to find what 'it' points to — thanks to attention."},
      {fn:multiHeadRound('The red car runs fast.','red','fast'), note:''}
    ];
  }
  runRounds(stage, rounds, c,
    t(`🔦 대단해요! 색깔 탐정과 속도 탐정처럼, AI는 여러 가지를 <b>동시에</b> 살펴봐요.<br>
        <span class="ai">이렇게 어떤 단어를 봐야 할지 골라내는 것이 바로 어텐션이에요!</span>`,
      `🔦 Amazing! Like the color and speed detectives, AI looks at many things <b>at the same time</b>.<br>
        <span class="ai">Choosing which word to look at — that's attention!</span>`));
}

/* ===== 5. 예측 ===== */
function predictRound(prefix, options, suffix){
  return (box,onDone)=>{
    const q=el('div',{class:'sentence'}); q.innerHTML=prefix+' <b style="color:var(--c5)">＿＿</b>'+(suffix?' '+suffix:'');
    const row=el('div',{class:'row'}); const bars=el('div',{class:'bars hidden'});
    options.forEach(o=>{
      const b=el('div',{class:'bar'});
      b.innerHTML=`<span style="min-width:120px">${o.w}</span><div class="track"><div class="fill" style="background:${o.ok?'var(--c2)':'#ddd'}"></div></div><span style="min-width:60px">${o.p}%</span>`;
      bars.appendChild(b);
      const btn=el('div',{class:'chip'},o.w);
      btn.onclick=()=>{row.querySelectorAll('.chip').forEach(x=>x.style.pointerEvents='none');bars.classList.remove('hidden');
        requestAnimationFrame(()=>{[...bars.querySelectorAll('.fill')].forEach((f,i)=>f.style.width=options[i].p+'%');});
        setTimeout(()=>onDone(!!o.ok),1500);
      };
      row.appendChild(btn);
    });
    box.append(q,row,bars);
  };
}
function gamePredict(stage,c){
  let rounds;
  if(LANG==='ko'){
    rounds=[
      {fn:predictRound('🐰 토끼가 당근을',[{w:'먹어요',p:85,ok:true},{w:'잠자요',p:10},{w:'날아요',p:5}]),
       note:'🔮 AI가 가장 어울리는 단어를 골랐어요! 앞 단어들을 보고 정한 거예요.'},
      {fn:predictRound('🌧️ 비가 와서 우산을',[{w:'펴요',p:80,ok:true},{w:'던져요',p:15},{w:'먹어요',p:5}]),
       note:'🔮 앞 단어들을 보고 다음에 올 말을 척척 맞히지요?'},
      {fn:predictRound('🏰 용감한 기사가 성을 향해 힘차게',
        [{w:'달려갔어요',p:74,ok:true},{w:'기어갔어요',p:9},{w:'날아갔어요',p:17}]),
       note:'🔮 문장이 길어도 앞 내용을 보고 가장 어울리는 말을 골랐어요!'},
      {fn:predictRound('🌊 아이들이 바닷가에서 모래로 멋진',
        [{w:'성을',p:70,ok:true},{w:'라면을',p:10},{w:'우산을',p:20}], '만들었어요.'),
       note:'🔮 어려운 문장에서도 AI는 빈칸에 올 말을 척척 맞혀요!'},
      {fn:predictRound('🚀 우주 비행사가 하늘에서 반짝이는',
        [{w:'별을',p:72,ok:true},{w:'양말을',p:8},{w:'바나나를',p:20}], '보았어요.'), note:''}
    ];
  } else {
    rounds=[
      {fn:predictRound('🐰 The bunny eats a',[{w:'carrot',p:85,ok:true},{w:'rock',p:10},{w:'cloud',p:5}]),
       note:'🔮 AI picked the word that fits best, using the earlier words!'},
      {fn:predictRound('🌧️ It is raining, so I open my',[{w:'umbrella',p:80,ok:true},{w:'window',p:15},{w:'sandwich',p:5}]),
       note:'🔮 It guesses the next word from what came before!'},
      {fn:predictRound('🏰 The brave knight rushed to save the',
        [{w:'princess',p:74,ok:true},{w:'potato',p:9},{w:'pillow',p:17}]),
       note:'🔮 Even in a long sentence, AI picks the word that fits best!'},
      {fn:predictRound('🌊 The kids built a nice',
        [{w:'sandcastle',p:70,ok:true},{w:'noodle',p:10},{w:'umbrella',p:20}], 'on the beach.'),
       note:'🔮 Even in a tricky sentence, AI fills in the blank!'},
      {fn:predictRound('🚀 The astronaut saw a bright',
        [{w:'star',p:72,ok:true},{w:'sock',p:8},{w:'banana',p:20}], 'in the sky.'), note:''}
    ];
  }
  runRounds(stage, rounds, c,
    t(`🔮 봤지요? AI는 이렇게 <b>한 단어씩</b> 다음에 올 말을 골라서 긴 문장을 만들어요.<br>
        <span class="ai">챗봇이 술술 이야기하는 비밀이 바로 이거예요!</span>`,
      `🔮 See? AI picks the next word <b>one at a time</b> to build long sentences.<br>
        <span class="ai">That's the secret behind how chatbots talk!</span>`));
}

/* ---------- 색종이 ---------- */
function fire(){const e=['🎉','⭐','🎊','🏅','✨'];
  for(let i=0;i<48;i++){const c=el('div',{class:'confetti'},e[i%e.length]);
    c.style.left=Math.random()*100+'vw';c.style.animationDuration=(2+Math.random()*2)+'s';c.style.animationDelay=Math.random()+'s';
    document.body.appendChild(c);setTimeout(()=>c.remove(),4600);}}

/* ---------- 초기화/연결 ---------- */
document.getElementById('attoStart').src=RAIMI_IMG;
document.getElementById('raimiBig').src=RAIMI_IMG;
document.getElementById('startBtn').onclick=()=>{bumpStart();renderHome();show('home');};
document.getElementById('langBtn').onclick=toggleLang;
document.getElementById('langBtn2').onclick=toggleLang;
['resetHome','resetGame','resetDone'].forEach(id=>document.getElementById(id).onclick=resetAll);
document.getElementById('doneBtn').onclick=resetAll;
applyLang();

/* ---------- 이용 통계 ---------- */
/* 시작: 하루에 '시작하기'를 누른 횟수(≈이용자 수) / 완주: 도장 5개를 모두 채운 횟수 / 시간대: 시작한 시각(0~23시) */
const STAT_KEY='raimi_start_stats';     // {날짜: 시작 횟수}
const DONE_KEY='raimi_complete_stats';  // {날짜: 완주 횟수}
const HOUR_KEY='raimi_hour_stats';      // {'00'~'23': 시작 횟수} (전체 누적)
const STAGE_KEY='raimi_stage_stats';    // {'1'~'5': {o:열람, d:완료}} (전체 누적)
const LANG_KEY='raimi_lang_stats';      // {ko:세션수, en:세션수} (시작 시점 언어)
function todayKey(){const d=new Date();const p=n=>String(n).padStart(2,'0');
  return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate());}
function statGet(k){try{return JSON.parse(localStorage.getItem(k))||{};}catch(e){return {};}}
function statSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function loadStats(){return statGet(STAT_KEY);}
function saveStats(s){statSet(STAT_KEY,s);}
function bumpStart(){
  const s=loadStats(),k=todayKey();s[k]=(s[k]||0)+1;saveStats(s);
  const h=statGet(HOUR_KEY),hk=String(new Date().getHours()).padStart(2,'0');
  h[hk]=(h[hk]||0)+1;statSet(HOUR_KEY,h);
  const lm=statGet(LANG_KEY);lm[LANG]=(lm[LANG]||0)+1;statSet(LANG_KEY,lm);
}
function bumpComplete(){const c=statGet(DONE_KEY),k=todayKey();c[k]=(c[k]||0)+1;statSet(DONE_KEY,c);}
function bumpStage(c,field){const m=statGet(STAGE_KEY),k=String(c);if(!m[k])m[k]={o:0,d:0};m[k][field]=(m[k][field]||0)+1;statSet(STAGE_KEY,m);}

/* ---------- 엑셀(.xlsx) 만들기: 외부 라이브러리 없이 store 방식 ZIP으로 생성 ---------- */
const CRC_TABLE=(function(){const t=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?(0xEDB88320^(c>>>1)):(c>>>1);t[n]=c>>>0;}return t;})();
function crc32(bytes){let crc=0xFFFFFFFF;for(let i=0;i<bytes.length;i++)crc=(crc>>>8)^CRC_TABLE[(crc^bytes[i])&0xFF];return (crc^0xFFFFFFFF)>>>0;}
function zipStore(files){
  const enc=new TextEncoder();
  const u16=n=>[n&255,(n>>>8)&255];
  const u32=n=>[n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255];
  const locals=[],central=[];let offset=0;
  files.forEach(f=>{
    const nameB=enc.encode(f.name);
    const data=f.data instanceof Uint8Array?f.data:enc.encode(f.data);
    const crc=crc32(data),len=data.length;
    const lh=[0x50,0x4b,0x03,0x04].concat(u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(len),u32(len),u16(nameB.length),u16(0));
    const lb=new Uint8Array(lh.length+nameB.length+len);
    lb.set(lh,0);lb.set(nameB,lh.length);lb.set(data,lh.length+nameB.length);
    locals.push(lb);
    const ch=[0x50,0x4b,0x01,0x02].concat(u16(20),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(len),u32(len),u16(nameB.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset));
    const cb=new Uint8Array(ch.length+nameB.length);
    cb.set(ch,0);cb.set(nameB,ch.length);
    central.push(cb);
    offset+=lb.length;
  });
  let cSize=0;central.forEach(c=>cSize+=c.length);
  const eocd=Uint8Array.from([0x50,0x4b,0x05,0x06].concat(u16(0),u16(0),u16(central.length),u16(central.length),u32(cSize),u32(offset),u16(0)));
  let total=eocd.length+cSize;locals.forEach(l=>total+=l.length);
  const out=new Uint8Array(total);let pos=0;
  locals.forEach(l=>{out.set(l,pos);pos+=l.length;});
  central.forEach(c=>{out.set(c,pos);pos+=c.length;});
  out.set(eocd,pos);
  return out;
}
/* ---------- 워크시트/워크북 조립 (여러 시트 지원) ---------- */
function xmlEsc(v){return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function colLetter(i){let s='';i++;while(i>0){const r=(i-1)%26;s=String.fromCharCode(65+r)+s;i=(i-r-1)/26;}return s;}
const STYLES_XML='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="3"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="14"/><name val="Calibri"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFEFEFF4"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="4"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>';
/* 스타일 id: 1=헤더(굵게+음영), 2=제목(굵게 크게), 3=굵게 */
function cellXml(c,ref){
  if(c==null)return '';
  if(typeof c!=='object')c={v:c};
  const st=c.s?' s="'+c.s+'"':'';
  if(c.v==null||c.v==='')return c.s?'<c r="'+ref+'"'+st+'/>':'';
  if(typeof c.v==='number'&&isFinite(c.v))return '<c r="'+ref+'"'+st+'><v>'+c.v+'</v></c>';
  return '<c r="'+ref+'" t="inlineStr"'+st+'><is><t>'+xmlEsc(c.v)+'</t></is></c>';
}
function buildSheetXml(sheet){
  const rowsXml=sheet.rows.map((row,ri)=>{
    const r=ri+1;
    const cells=(row||[]).map((c,ci)=>cellXml(c,colLetter(ci)+r)).join('');
    return '<row r="'+r+'">'+cells+'</row>';
  }).join('');
  const cols=sheet.colWidths?'<cols>'+sheet.colWidths.map((w,i)=>'<col min="'+(i+1)+'" max="'+(i+1)+'" width="'+w+'" customWidth="1"/>').join('')+'</cols>':'';
  return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'+cols+'<sheetData>'+rowsXml+'</sheetData></worksheet>';
}
function buildWorkbook(sheets){
  const N=sheets.length;
  const ctOv=sheets.map((sh,i)=>'<Override PartName="/xl/worksheets/sheet'+(i+1)+'.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>').join('');
  const contentTypes='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'+ctOv+'<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>';
  const sheetTags=sheets.map((sh,i)=>'<sheet name="'+xmlEsc(sh.name)+'" sheetId="'+(i+1)+'" r:id="rId'+(i+1)+'"/>').join('');
  const workbook='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'+sheetTags+'</sheets></workbook>';
  const wbRels='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+sheets.map((sh,i)=>'<Relationship Id="rId'+(i+1)+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet'+(i+1)+'.xml"/>').join('')+'<Relationship Id="rId'+(N+1)+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>';
  const files=[
    {name:'[Content_Types].xml',data:contentTypes},
    {name:'_rels/.rels',data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'},
    {name:'xl/workbook.xml',data:workbook},
    {name:'xl/_rels/workbook.xml.rels',data:wbRels}
  ];
  sheets.forEach((sh,i)=>files.push({name:'xl/worksheets/sheet'+(i+1)+'.xml',data:buildSheetXml(sh)}));
  files.push({name:'xl/styles.xml',data:STYLES_XML});
  return zipStore(files);
}

/* ---------- 통계 집계: 날짜별 데이터에서 주차/월/요일 등 분석 파생 ---------- */
const WEEKDAYS=['일','월','화','수','목','금','토'];
function statPad(n){return String(n).padStart(2,'0');}
function statFmt(dt){return dt.getFullYear()+'-'+statPad(dt.getMonth()+1)+'-'+statPad(dt.getDate());}
function statParse(k){const p=k.split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
function round1(x){return Math.round(x*10)/10;}
function aggWeekly(s){
  const map={};
  Object.keys(s).forEach(k=>{
    const dt=statParse(k),back=(dt.getDay()+6)%7,mon=new Date(dt);
    mon.setDate(dt.getDate()-back);
    const wk=statFmt(mon);
    if(!map[wk])map[wk]={sum:0,days:0,mon:mon};
    map[wk].sum+=s[k];map[wk].days++;
  });
  return Object.keys(map).sort().map(wk=>{
    const o=map[wk],end=new Date(o.mon);end.setDate(o.mon.getDate()+6);
    return {week:wk,range:statPad(o.mon.getMonth()+1)+'/'+statPad(o.mon.getDate())+'~'+statPad(end.getMonth()+1)+'/'+statPad(end.getDate()),sum:o.sum,days:o.days,avg:o.sum/o.days};
  });
}
function aggMonthly(s){
  const map={};
  Object.keys(s).forEach(k=>{const mk=k.slice(0,7);if(!map[mk])map[mk]={sum:0,days:0};map[mk].sum+=s[k];map[mk].days++;});
  const keys=Object.keys(map).sort();
  return keys.map((mk,i)=>{
    const o=map[mk],prev=i>0?map[keys[i-1]].sum:null;
    let chg='-';
    if(prev!=null)chg=prev===0?'신규':((o.sum-prev>=0?'+':'')+round1((o.sum-prev)/prev*100)+'%');
    return {month:mk,sum:o.sum,days:o.days,avg:o.sum/o.days,change:chg};
  });
}
function aggWeekday(s){
  const tot=[0,0,0,0,0,0,0],days=[0,0,0,0,0,0,0];
  Object.keys(s).forEach(k=>{const g=statParse(k).getDay();tot[g]+=s[k];days[g]++;});
  return [1,2,3,4,5,6,0].map(g=>({wd:WEEKDAYS[g],sum:tot[g],days:days[g],avg:days[g]?tot[g]/days[g]:0}));
}
function aggHourly(hours){
  const total=Object.keys(hours).reduce((a,k)=>a+hours[k],0);
  const rows=[];
  for(let h=0;h<24;h++){const hk=statPad(h),c=hours[hk]||0;rows.push({hour:hk+'시',sum:c,share:total?round1(c/total*100):0});}
  return {rows,total};
}
/* 시작 대비 완주 비율(%) */
function rateOf(done,start){return start?round1(done/start*100):0;}
function stageLabel(c){const l=LESSONS.find(x=>x.c===c);return l?(c+'. '+l.name.ko+'('+l.tag.ko+')'):('단계 '+c);}
function aggStage(){
  const m=statGet(STAGE_KEY);
  return [1,2,3,4,5].map(c=>{const o=(m[c]&&m[c].o)||0,d=(m[c]&&m[c].d)||0;
    return {c:c,label:stageLabel(c),open:o,done:d,rate:rateOf(d,o)};});
}
function aggLang(){
  const m=statGet(LANG_KEY),ko=m.ko||0,en=m.en||0,total=ko+en;
  return {ko:ko,en:en,total:total,rows:[
    {label:'한국어',n:ko,share:total?round1(ko/total*100):0},
    {label:'English',n:en,share:total?round1(en/total*100):0}]};
}
function buildReportRows(s,completes,hours,today){
  const dates=Object.keys(s).sort();
  const total=dates.reduce((a,k)=>a+s[k],0);
  const totalDone=Object.keys(completes).reduce((a,k)=>a+completes[k],0);
  const first=dates[0],last=dates[dates.length-1];
  const span=Math.round((statParse(last)-statParse(first))/86400000)+1;
  const active=dates.length;
  const peak=dates.reduce((a,k)=>s[k]>s[a]?k:a,dates[0]);
  const low=dates.reduce((a,k)=>s[k]<s[a]?k:a,dates[0]);
  const months=aggMonthly(s),weeks=aggWeekly(s);
  const cur=months[months.length-1],prev=months.length>1?months[months.length-2]:null;
  const curDone=Object.keys(completes).filter(k=>k.slice(0,7)===cur.month).reduce((a,k)=>a+completes[k],0);
  const wd=aggWeekday(s).slice().sort((a,b)=>b.sum-a.sum);
  const busiest=wd[0],quiet=wd[wd.length-1];
  const hr=aggHourly(hours);
  const hpeak=hr.rows.slice().sort((a,b)=>b.sum-a.sum)[0];
  const rows=[];
  const KV=(k,v)=>rows.push([k,{v:v}]);
  rows.push([{v:'📊 라이미 이용 통계 리포트',s:2}]);
  rows.push([{v:'생성일'},{v:today}]);
  rows.push([]);
  rows.push([{v:'전체 요약',s:1},{v:'',s:1}]);
  KV('집계 기간',first+' ~ '+last);
  KV('총 시작 횟수',total);
  KV('총 완주 횟수',totalDone);
  KV('완주율(완주/시작)',rateOf(totalDone,total)+'%');
  KV('기록된 날짜 수(활동일)',active);
  KV('전체 기간(일)',span);
  KV('활동일 평균(회/일)',round1(total/active));
  KV('전체 기간 평균(회/일)',round1(total/span));
  KV('주당 평균(회/주)',round1(total/weeks.length));
  rows.push([]);
  rows.push([{v:'이번 달 ('+cur.month+')',s:1},{v:'',s:1}]);
  KV('시작 횟수',cur.sum);
  KV('완주 횟수',curDone);
  KV('완주율',rateOf(curDone,cur.sum)+'%');
  KV('활동일수',cur.days);
  KV('일평균(회/일)',round1(cur.avg));
  KV('전월 대비',cur.change);
  if(prev)KV('지난 달('+prev.month+') 시작 횟수',prev.sum);
  rows.push([]);
  rows.push([{v:'최고 / 최저',s:1},{v:'',s:1}]);
  KV('최다 기록일',peak+' ('+s[peak]+'회)');
  KV('최소 기록일',low+' ('+s[low]+'회)');
  rows.push([]);
  rows.push([{v:'요일 · 시간대 분석',s:1},{v:'',s:1}]);
  KV('가장 활발한 요일',busiest.wd+'요일 (총 '+busiest.sum+'회)');
  KV('가장 한산한 요일',quiet.wd+'요일 (총 '+quiet.sum+'회)');
  KV('가장 붐비는 시간대',hr.total?hpeak.hour+' (총 '+hpeak.sum+'회)':'기록 없음');
  rows.push([]);
  rows.push([{v:'단계 · 언어 분석',s:1},{v:'',s:1}]);
  const st=aggStage(),stSorted=st.slice().sort((a,b)=>b.open-a.open);
  const topStage=stSorted[0],lowStage=st.slice().filter(x=>x.open>0).sort((a,b)=>a.rate-b.rate)[0];
  KV('가장 많이 한 단계',topStage.open?topStage.label+' (열람 '+topStage.open+'회)':'기록 없음');
  if(lowStage)KV('완료율 가장 낮은 단계',lowStage.label+' ('+lowStage.rate+'%)');
  const lang=aggLang();
  KV('언어 사용',lang.total?'한국어 '+lang.ko+'('+lang.rows[0].share+'%) · English '+lang.en+'('+lang.rows[1].share+'%)':'기록 없음');
  return rows;
}
/* 여러 시트로 구성된 분석 리포트 워크북 생성 */
function buildStatsXlsx(s){
  const today=todayKey();
  const completes=statGet(DONE_KEY),hours=statGet(HOUR_KEY);
  const dates=Array.from(new Set([...Object.keys(s),...Object.keys(completes)])).sort();  // 시작·완주 날짜 합집합(자정 넘김 완주도 포함)
  const total=dates.reduce((a,k)=>a+(s[k]||0),0);
  const totalDone=dates.reduce((a,k)=>a+(completes[k]||0),0);
  const H=t=>({v:t,s:1});
  /* 1) 요약 리포트 */
  const report={name:'요약 리포트',colWidths:[26,24],rows:buildReportRows(s,completes,hours,today)};
  /* 2) 날짜별 (시작·완주·완주율 + 누적) */
  const dailyRows=[[H('날짜'),H('시작 횟수'),H('완주'),H('완주율'),H('누적 시작')]];
  let cum=0;dates.forEach(k=>{const st=s[k]||0;cum+=st;const d=completes[k]||0;dailyRows.push([k,st,d,rateOf(d,st)+'%',cum]);});
  dailyRows.push([{v:'합계',s:3},{v:total,s:3},{v:totalDone,s:3},{v:rateOf(totalDone,total)+'%',s:3},{v:'',s:3}]);
  const daily={name:'날짜별',colWidths:[14,12,10,10,12],rows:dailyRows};
  /* 3) 주차별 (월요일 시작) */
  const wk=aggWeekly(s);
  const weeklyRows=[[H('주 시작(월)'),H('기간'),H('시작 횟수'),H('활동일수'),H('일평균')]];
  wk.forEach(w=>weeklyRows.push([w.week,w.range,w.sum,w.days,round1(w.avg)]));
  const weekly={name:'주차별',colWidths:[14,14,12,10,10],rows:weeklyRows};
  /* 4) 월별 (완주율·전월 대비 포함) */
  const mo=aggMonthly(s);
  const monthlyRows=[[H('월'),H('시작 횟수'),H('완주'),H('완주율'),H('활동일수'),H('일평균'),H('전월 대비')]];
  mo.forEach(m=>{const d=Object.keys(completes).filter(k=>k.slice(0,7)===m.month).reduce((a,k)=>a+completes[k],0);
    monthlyRows.push([m.month,m.sum,d,rateOf(d,m.sum)+'%',m.days,round1(m.avg),m.change]);});
  const monthly={name:'월별',colWidths:[12,12,10,10,10,10,12],rows:monthlyRows};
  /* 5) 요일별 */
  const wdA=aggWeekday(s);
  const wdRows=[[H('요일'),H('시작 횟수'),H('활동일수'),H('일평균')]];
  wdA.forEach(w=>wdRows.push([w.wd+'요일',w.sum,w.days,round1(w.avg)]));
  const weekday={name:'요일별',colWidths:[10,12,10,10],rows:wdRows};
  /* 6) 시간대별 (0~23시, 시작 시각 기준) */
  const hr=aggHourly(hours);
  const hourRows=[[H('시간대'),H('시작 횟수'),H('비율')]];
  hr.rows.forEach(h=>hourRows.push([h.hour,h.sum,h.share+'%']));
  hourRows.push([{v:'합계',s:3},{v:hr.total,s:3},{v:'',s:3}]);
  const hourly={name:'시간대별',colWidths:[10,12,10],rows:hourRows};
  /* 7) 단계별 (1~5단계 열람·완료·완료율) */
  const st=aggStage();
  const stageRows=[[H('단계'),H('시작(열람)'),H('완료'),H('완료율')]];
  st.forEach(x=>stageRows.push([x.label,x.open,x.done,rateOf(x.done,x.open)+'%']));
  const stage={name:'단계별',colWidths:[28,12,10,10],rows:stageRows};
  /* 8) 언어별 (시작 세션 언어) */
  const lg=aggLang();
  const langRows=[[H('언어'),H('시작 세션'),H('비율')]];
  lg.rows.forEach(x=>langRows.push([x.label,x.n,x.share+'%']));
  langRows.push([{v:'합계',s:3},{v:lg.total,s:3},{v:'',s:3}]);
  const language={name:'언어별',colWidths:[12,12,10],rows:langRows};
  return buildWorkbook([report,daily,weekly,monthly,weekday,hourly,stage,language]);
}
function downloadBytes(bytes,filename){
  const blob=new Blob([bytes],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  const url=URL.createObjectURL(blob);
  const a=el('a',{href:url,download:filename});
  document.body.append(a);a.click();
  setTimeout(()=>{a.remove();URL.revokeObjectURL(url);},1500);
}

/* 앱 버전: 서비스 워커 캐시 이름(sw.js의 'raim-ai-vN')에서 실제 배포 버전을 읽어 표시.
   배포 시 sw.js의 CACHE만 올리면 관리자 화면 버전도 자동으로 따라감.
   SW 미등록(개발/파일 직접 열기 등) 시엔 아래 기본값을 사용. */
const APP_VERSION_FALLBACK='v7';
function getAppVersion(){
  return new Promise(resolve=>{
    try{
      if(!('caches' in window)){resolve(APP_VERSION_FALLBACK);return;}
      caches.keys().then(keys=>{
        const vers=keys.map(k=>{const m=/raim-ai-v(\d+)/.exec(k);return m?parseInt(m[1],10):null;})
          .filter(n=>n!=null).sort((a,b)=>a-b);
        resolve(vers.length?('v'+vers[vers.length-1]):APP_VERSION_FALLBACK);
      }).catch(()=>resolve(APP_VERSION_FALLBACK));
    }catch(e){resolve(APP_VERSION_FALLBACK);}
  });
}

/* 관리자 통계 화면 (숨김): 좌측 상단 로고를 2.5초 안에 5번 탭하면 열림 */
let adminOpen=false;
const ADMIN_PIN='4300';   // 클라이언트 잠금(장난 방지용). 소스에 노출되므로 강력 보안은 아님.
/* 관리자 진입 전 숫자 키패드로 비밀번호 확인 */
function askPin(onOk,onCancel){
  let entry='';
  const ov=el('div',{id:'adminPinOverlay',style:'position:fixed;inset:0;z-index:99999;background:rgba(20,20,30,.92);display:flex;align-items:center;justify-content:center;padding:20px;font-family:system-ui,-apple-system,sans-serif;'});
  const card=el('div',{style:'background:#fff;color:#222;border-radius:18px;width:100%;max-width:320px;padding:24px;box-shadow:0 12px 40px rgba(0,0,0,.4);'});
  card.append(el('div',{style:'font-size:18px;font-weight:700;text-align:center;margin-bottom:4px;'},'🔒 관리자'));
  const sub=el('div',{style:'font-size:13px;color:#888;text-align:center;margin-bottom:14px;'},'비밀번호를 입력하세요');
  card.append(sub);
  const dots=el('div',{style:'display:flex;justify-content:center;gap:14px;margin-bottom:18px;'});
  const dotEls=[0,1,2,3].map(()=>el('div',{style:'width:16px;height:16px;border-radius:50%;border:2px solid #bbb;'}));
  dotEls.forEach(d=>dots.append(d)); card.append(dots);
  function render(){dotEls.forEach((d,i)=>{const on=i<entry.length;d.style.background=on?'#333':'transparent';d.style.borderColor=on?'#333':'#bbb';});}
  function fail(){sub.textContent='비밀번호가 틀렸어요';sub.style.color='#e11';
    card.style.transform='translateX(-8px)';setTimeout(()=>card.style.transform='translateX(8px)',60);setTimeout(()=>card.style.transform='',120);
    entry='';render();setTimeout(()=>{sub.textContent='비밀번호를 입력하세요';sub.style.color='#888';},1200);}
  function press(n){if(entry.length>=4)return;entry+=n;render();
    if(entry.length===4){if(entry===ADMIN_PIN){ov.remove();onOk();}else fail();}}
  const pad=el('div',{style:'display:grid;grid-template-columns:repeat(3,1fr);gap:10px;'});
  const mkKey=(label,fn,bg)=>{const b=el('button',{style:'padding:16px 0;font-size:22px;font-weight:700;border:0;border-radius:12px;background:'+(bg||'#f0f0f4')+';color:#222;cursor:pointer;'},label);b.onclick=fn;return b;};
  [1,2,3,4,5,6,7,8,9].forEach(n=>pad.append(mkKey(String(n),()=>press(String(n)))));
  pad.append(mkKey('지움',()=>{entry='';render();},'#ffe0e0'));
  pad.append(mkKey('0',()=>press('0')));
  pad.append(mkKey('⌫',()=>{entry=entry.slice(0,-1);render();},'#eee'));
  card.append(pad);
  const cancel=el('button',{style:'width:100%;margin-top:14px;padding:12px;border:0;border-radius:12px;background:#6b7280;color:#fff;font-size:15px;font-weight:600;cursor:pointer;'},'닫기');
  cancel.onclick=()=>{ov.remove();onCancel();}; card.append(cancel);
  ov.append(card); ov.onclick=(e)=>{if(e.target===ov){ov.remove();onCancel();}};
  document.body.append(ov); render();
}
function openAdmin(){
  if(adminOpen)return; adminOpen=true;
  askPin(showAdmin, ()=>{adminOpen=false;});   // 4300 입력 성공 시에만 통계 화면 열림
}
function showAdmin(){
  const s=loadStats();
  const completes=statGet(DONE_KEY);
  const dates=Array.from(new Set([...Object.keys(s),...Object.keys(completes)])).sort().reverse();
  const total=dates.reduce((a,k)=>a+(s[k]||0),0);
  const totalDone=dates.reduce((a,k)=>a+(completes[k]||0),0);
  const tk=todayKey();
  const today=s[tk]||0, todayDone=completes[tk]||0;

  const ov=el('div',{id:'adminOverlay',style:'position:fixed;inset:0;z-index:99999;background:rgba(20,20,30,.92);display:flex;align-items:center;justify-content:center;padding:20px;font-family:system-ui,-apple-system,sans-serif;'});
  const card=el('div',{style:'background:#fff;color:#222;border-radius:18px;max-width:520px;width:100%;max-height:86vh;display:flex;flex-direction:column;padding:22px;box-shadow:0 12px 40px rgba(0,0,0,.4);'});
  card.append(el('h2',{style:'margin:0 0 6px;font-size:22px;'},'📊 이용 통계 (관리자)'));
  const verLine=el('div',{style:'font-size:12px;color:#aaa;margin-bottom:8px;'},'버전 …');
  card.append(verLine);
  getAppVersion().then(v=>{verLine.textContent='버전 '+v;});
  card.append(el('div',{style:'font-size:15px;color:#555;margin-bottom:4px;'},
    '오늘 '+tk+' · 시작 '+today+'/완주 '+todayDone+'회   |   전체 시작 '+total+' · 완주 '+totalDone+'('+rateOf(totalDone,total)+'%) · '+dates.length+'일'));
  const topSt=aggStage().slice().sort((a,b)=>b.open-a.open)[0], lg=aggLang();
  card.append(el('div',{style:'font-size:13px;color:#888;margin-bottom:14px;'},
    '인기 단계: '+(topSt.open?topSt.label+' ('+topSt.open+'회)':'—')+'   ·   언어: 한 '+lg.ko+' / En '+lg.en));

  const list=el('div',{style:'overflow:auto;border:1px solid #eee;border-radius:12px;'});
  const table=el('table',{style:'width:100%;border-collapse:collapse;font-size:15px;'});
  const head=el('tr',{});
  const th=(txt,align)=>el('th',{style:'text-align:'+align+';padding:9px 12px;background:#f6f6f8;position:sticky;top:0;'},txt);
  head.append(th('날짜','left'));
  head.append(th('시작','right'));
  head.append(th('완주','right'));
  head.append(th('완주율','right'));
  table.append(head);
  if(dates.length===0){
    const tr=el('tr',{}); tr.append(el('td',{colspan:'4',style:'padding:18px;text-align:center;color:#999;'},'아직 기록이 없어요'));
    table.append(tr);
  } else dates.forEach(k=>{
    const d=completes[k]||0;
    const tr=el('tr',{});
    tr.append(el('td',{style:'padding:8px 12px;border-top:1px solid #f0f0f0;'},k));
    tr.append(el('td',{style:'padding:8px 12px;border-top:1px solid #f0f0f0;text-align:right;font-weight:600;'},String(s[k]||0)));
    tr.append(el('td',{style:'padding:8px 12px;border-top:1px solid #f0f0f0;text-align:right;'},String(d)));
    tr.append(el('td',{style:'padding:8px 12px;border-top:1px solid #f0f0f0;text-align:right;color:#666;'},rateOf(d,s[k]||0)+'%'));
    table.append(tr);
  });
  list.append(table); card.append(list);

  const btns=el('div',{style:'display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;'});
  const mkBtn=(label,bg,fn)=>{const b=el('button',{style:'flex:1;min-width:120px;padding:12px;border:0;border-radius:12px;font-size:16px;font-weight:600;color:#fff;cursor:pointer;background:'+bg+';'},label);b.onclick=fn;return b;};
  btns.append(mkBtn('CSV 복사','#3b82f6',()=>{
    const csv='date,starts,completes,completion_rate\n'+dates.map(k=>{const d=completes[k]||0;return k+','+(s[k]||0)+','+d+','+rateOf(d,s[k]||0)+'%';}).join('\n');
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(csv).then(()=>alert('복사되었어요! 스프레드시트에 붙여넣기 하세요.'),()=>prompt('아래를 복사하세요',csv));
    } else prompt('아래를 복사하세요',csv);
  }));
  btns.append(mkBtn('엑셀 리포트','#16a34a',()=>{
    try{
      if(dates.length===0){alert('내보낼 기록이 없어요.');return;}
      downloadBytes(buildStatsXlsx(s),'라이미_이용통계_리포트_'+todayKey()+'.xlsx');
    }catch(e){alert('엑셀 파일을 만들지 못했어요: '+(e&&e.message||e));}
  }));
  btns.append(mkBtn('기록 지우기','#ef4444',()=>{
    if(confirm('모든 통계 기록을 삭제할까요? 되돌릴 수 없어요.')){
      [STAT_KEY,DONE_KEY,HOUR_KEY,STAGE_KEY,LANG_KEY].forEach(k=>{try{localStorage.removeItem(k);}catch(e){}});
      closeAdmin();
    }
  }));
  btns.append(mkBtn('닫기','#6b7280',closeAdmin));
  card.append(btns);
  ov.append(card);
  ov.onclick=(e)=>{if(e.target===ov)closeAdmin();};
  document.body.append(ov);
}
function closeAdmin(){const ov=document.getElementById('adminOverlay');if(ov)ov.remove();adminOpen=false;}
(function(){
  let taps=0,timer=null;
  document.querySelectorAll('.brand-logo').forEach(logo=>{
    logo.addEventListener('click',()=>{
      taps++;
      if(timer)clearTimeout(timer);
      timer=setTimeout(()=>{taps=0;},2500);
      if(taps>=5){taps=0;clearTimeout(timer);openAdmin();}
    });
  });
})();
/* 주소 뒤에 ?admin 을 붙이면 바로 관리자 통계 화면을 연다 */
try{ if(new URLSearchParams(location.search).has('admin')) openAdmin(); }catch(e){}

/* ---------- 무동작 타임아웃: 2분간 터치가 없으면 처음 화면으로 ---------- */
const IDLE_MS=120000;
let idleTimer=null;
function resetIdle(){
  if(idleTimer)clearTimeout(idleTimer);
  idleTimer=setTimeout(()=>{
    if(adminOpen)return;
    if(!document.getElementById('start').classList.contains('active')) resetAll();
  },IDLE_MS);
}
['pointerdown','touchstart','keydown'].forEach(ev=>
  document.addEventListener(ev,resetIdle,{passive:true}));
resetIdle();
