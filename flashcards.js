let curLang = "ru";
let theme = "light";
let editMode = false;
let testLocked = false, awaitingTestAnswer = false;
let mainDeck = [];
let deck=[], idx=0, shown=false, deckName='—', localKey = 'albinyok-flashcards-v1';

const translations = {
  ru: {
    siteTitle:"Albinyok Flashcards",
    siteSub:'Приложение для повтора карточек из CSV — учи на телефоне и на ПК.',
    fileOrLink:"Откуда берём информацию?",
    fileBtn:"Файл CSV",
    template:"Шаблон CSV",
    demo:"Демо-набор",
    urlBtn:"По ссылке",
    reveal:"Показать ответ",
    hide:"Скрыть ответ",
    know:"✅ Знаю",
    dont:"❌ Не знаю",
    shuffle:"Перемешать",
    reset:"Сбросить прогресс",
    deck:"Источник вопросов",
    empty:"Загрузите CSV или выберите файл из репозитория",
    progress:"Экспорт прогресса",
    clear:"Очистить всё",
    hotkeys:"Только Знаю/Не знаю → Дальше",
    errorPref:"Ошибка: ",
    fetchFail:"Ошибка загрузки",
    fileTooBig:"Файл слишком большой!",
    csvNotPairs:"Не найдено пар 'вопрос/ответ'",
    help:"Помощь",
    editor_hint:"Редактируйте карточки ниже, затем сохраните! Каждая строка — одна карточка.",
    add_card:"Добавить карточку",
    save_cards:"Сохранить изменения",
    del:"Удалить",
    edit:"Редактор карточек",
    train_hard:"Тренировать сложные",
    save_success:"Карточки сохранены!",
    train_all_done:"Все сложные карточки выучены! МОЛОДЕЦ!",
    test: "Тест",
    test_on: "Тест включён",
    test_off: "Включить тест",
    next: "Дальше",
    test_enabled: "Режим теста включён",
    test_status: "Только 'Знаю', 'Не знаю' и 'Дальше' для перехода.",
    testmode_tip:"Режим теста: только кнопки 'Знаю' и 'Не знаю'. После ответа появится 'Дальше' для перехода к следующей. Выйти — выключи чекбокс.",
    hard_tip:"Показать только сложные карточки, которые ты отметил 'Не знаю'.",
    editor_tip:"В редакторе можно добавлять, изменять и удалять любые карточки, не забывайте сохранять."
  },
  en: {
    siteTitle:"Albinyok Flashcards",
    siteSub:'CSV flashcards app — remember better everywhere!',
    fileOrLink:"Data source?",
    fileBtn:"CSV File",
    template:"CSV Template",
    demo:"Demo Set",
    urlBtn:"By Link",
    reveal:"Show answer",
    hide:"Hide answer",
    know:"✅ Know",
    dont:"❌ Don't know",
    shuffle:"Shuffle",
    reset:"Reset progress",
    deck:"Source",
    empty:"Upload or select a CSV",
    progress:"Export progress",
    clear:"Clear all",
    hotkeys:"Only Know/Don't know → Next",
    errorPref:"Error: ",
    fetchFail:"Load error",
    fileTooBig:"File too big!",
    csvNotPairs:"No question/answer pairs found",
    help:"Help",
    editor_hint:"Edit cards below and save! 1 row = 1 card.",
    add_card:"Add card",
    save_cards:"Save changes",
    del:"Delete",
    edit:"Card editor",
    train_hard:"Train hard cards",
    save_success:"Saved!",
    train_all_done:"All hard cards done! NICE!",
    test: "Test",
    test_on: "Test enabled",
    test_off: "Enable test",
    next: "Next",
    test_enabled: "Test mode enabled",
    test_status: "Only 'Know', 'Don't know' and 'Next' for navigation.",
    testmode_tip:"Test mode: only 'Know' and 'Don't know'. After choice, click 'Next' to continue. Turn off by unchecking the box.",
    hard_tip:"Show only cards you've marked as 'Don't know'.",
    editor_tip:"You can add, edit and delete cards below, don’t forget to save!"
  },
  fr: {
    siteTitle:"Albinyok Flashcards",
    siteSub:"Appli pour réviser vos cartes CSV — mobile et PC.",
    fileOrLink:"Source des données ?",
    fileBtn:"Fichier CSV",
    template:"Modèle CSV",
    demo:"Jeu démo",
    urlBtn:"Par lien",
    reveal:"Afficher réponse",
    hide:"Cacher réponse",
    know:"✅ Je sais",
    dont:"❌ Je ne sais pas",
    shuffle:"Mélanger",
    reset:"Réinitialiser",
    deck:"Source",
    empty:"Chargez ou choisissez un CSV",
    progress:"Exporter progrès",
    clear:"Tout nettoyer",
    hotkeys:"Seulement Je sais/Je ne sais pas → Suivant",
    errorPref:"Erreur : ",
    fetchFail:"Erreur téléchargement",
    fileTooBig:"Fichier trop volumineux !",
    csvNotPairs:"Aucune question/réponse trouvée",
    help:"Aide",
    editor_hint:"Éditez, puis sauvegardez. 1 ligne = 1 carte.",
    add_card:"Ajouter carte",
    save_cards:"Enregistrer",
    del:"Supprimer",
    edit:"Éditeur de cartes",
    train_hard:"Difficile",
    save_success:"Cartes enregistrées!",
    train_all_done:"Toutes les difficiles apprises !",
    test: "Test",
    test_on: "Test activé",
    test_off: "Activer test",
    next: "Suivant",
    test_enabled: "Mode test activé",
    test_status: "Seulement 'Je sais', 'Je ne sais pas' et 'Suivant'.",
    testmode_tip:"Mode test : seulement 'Je sais'/'Je ne sais pas'. Cliquez 'Suivant' ensuite. Désactivez — décochez la case.",
    hard_tip:"Afficher seulement les difficiles marquées.",
    editor_tip:"Ajoutez/éditez/supprimez vos cartes ci-dessous, sauvegardez !"
  }
};

function $(sel){ return document.querySelector(sel);}
function t(k){return (translations[curLang]&&translations[curLang][k])||k;}

// Обновление языков, кнопок, надписей
function updateLang() {
  document.documentElement.lang = curLang;
  $("#siteTitle").textContent = t("siteTitle");
  $(".sub").firstChild.textContent = t("siteSub");
  $("#fileOrLink").textContent = t("fileOrLink");
  $("#fileBtnTxt").textContent = t("fileBtn");
  $("#templateBtn").textContent = t("template");
  $("#demoBtn").textContent = t("demo");
  $("#loadUrlBtn").textContent = t("urlBtn");
  $("#editLabel").textContent = t("edit");
  $("#hardLabel").textContent = t("train_hard");
  updateTestBtnText();
  $("#urlInput").placeholder = t("urlPlaceholder") || '';
  $("#deckName").textContent = `${t('deck')}: ${deckName}`;
  $("#testStatus").innerHTML = testLocked ? `<b>${t("test_enabled")}</b> — ${t("test_status")}` : "";
  $("#testStatus").style.display = testLocked ? "" : "none";
  $("#testModeCheck").checked = !!testLocked;
  $("#hotkeysTip").textContent = '';
  updateControlsBar();
}
function updateTestBtnText() {
  $("#testBtnText").textContent = testLocked ? t("test_on") : t("test_off");
}

$("#langSelect").addEventListener("change",function(e){
  curLang=this.value; updateLang(); updateUI();
});
$("#themeToggle").onclick = () => {
  theme = (theme==="light")?"dark":"light";
  document.body.dataset.theme = theme; 
  localStorage.setItem("albinyok-flashcards-theme",theme);
  $("#themeToggle").textContent = theme==="dark" ? "🌞" : "🌙";
};
function initTheme(){
  theme=localStorage.getItem("albinyok-flashcards-theme")||"light";
  document.body.dataset.theme = theme;
  $("#themeToggle").textContent = theme==="dark" ? "🌞" : "🌙";
}
initTheme();

function sniffHeader(a){
  if(!a || a.length<2) return false;
  let ha=(a[0]||'').toLowerCase(), hb=(a[1]||'').toLowerCase();
  return ['q','question','вопрос','frage'].includes(ha) && ['a','answer','ответ','réponse','antwort'].includes(hb);
}
function toDeck(rows){
  if(!rows||!rows.length) return [];
  let filtered=[];
  for(let r of rows){
    let q=(r[0]||'').trim(), a=(r[1]||'').trim();
    if(q+a==='') continue;
    filtered.push([q,a]);
  }
  if(!filtered.length) return [];
  let skip=sniffHeader(filtered[0]) ? 1:0, out=[];
  for(let i=skip;i<filtered.length;i++)
    out.push({q:filtered[i][0], a:filtered[i][1], ok:false, bad:false});
  return out;
}
function updateControlsBar() {
  let el=$("#controlsBar");
  if (!el) return;
  el.innerHTML = "";
  if (!testLocked) {
    el.appendChild(createCtrl("ctrl showhide","", shown ? t("hide") : t("reveal"),()=>toggleShowHide()));
  }
  let okBtn = createCtrl("ctrl ok","", t("know"),()=>onKnowClick());
  let badBtn = createCtrl("ctrl bad","", t("dont"),()=>onDontKnowClick());
  if(testLocked && awaitingTestAnswer) { okBtn.disabled=true; badBtn.disabled=true; }
  el.appendChild(okBtn);
  el.appendChild(badBtn);
  if (testLocked) {
    let next = document.createElement("button");
    next.className = "next-btn-main";
    next.textContent = t("next") || "Дальше";
    next.onclick = () => { nextTestStep(); };
    next.disabled=!awaitingTestAnswer;
    el.appendChild(next);
  }
}
function createCtrl(className, title, text, handler) {
  let btn=document.createElement("button");
  btn.className=className; btn.type="button"; btn.textContent=text; btn.title=title;
  btn.onclick = handler;
  return btn;
}
function updateUI(){
  let q=$("#q"), a=$("#a"), c=$("#counter"), s=$("#score"), n=$("#deckName"), bar=$("#progressBar");
  if(!deck.length){
    q.textContent = t("empty");
    a.textContent = ""; a.style.display = "none";
    if (c) c.textContent = "0 / 0";
    if (s) s.textContent = "✅ 0 • ❌ 0";
    if (n) n.textContent = `${t('deck')}: —`;
    if (bar) bar.style.width = "0%";
    $("#hotkeysTip").textContent = '';
    return;
  }
  let card=deck[idx];
  q.textContent = card.q || `(${t('deck')})`;
  a.textContent = card.a || `(—)`;
  if (!shown) { a.style.display = "none"; }
  else { a.style.display = "block"; }
  if (c) c.textContent = `${idx+1} / ${deck.length}`;
  let ok=deck.filter(x=>x.ok).length, bad=deck.filter(x=>x.bad).length;
  if (s) s.textContent = `✅ ${ok} • ❌ ${bad}`;
  if (n) n.textContent = `${t('deck')}: ${deckName}`;
  updateControlsBar();
  $("#hotkeysTip").textContent = t("hotkeys");
}
function toggleShowHide() {
  shown = !shown;
  updateUI();
  persist();
}
function onKnowClick(){
  if(testLocked && !awaitingTestAnswer){
     deck[idx].ok=true; deck[idx].bad=false; awaitingTestAnswer=true; persist();
     updateControlsBar();
  } else if(!testLocked){
     deck[idx].ok=true; deck[idx].bad=false; idx=(idx+1)%deck.length; shown=false; persist(); updateUI();
  }
}
function onDontKnowClick(){
  if(testLocked && !awaitingTestAnswer){
    deck[idx].bad=true; deck[idx].ok=false; awaitingTestAnswer=true; persist();
    updateControlsBar();
  } else if(!testLocked){
     deck[idx].bad=true; deck[idx].ok=false; idx=(idx+1)%deck.length; shown=false; persist(); updateUI();
  }
}
function nextTestStep(){
  shown = false; awaitingTestAnswer=false;
  idx = (idx+1)%deck.length;
  updateUI();
  persist();
}
// Клик по кликабельным иконкам "?"
function bindModalTip(btnId, textKey){
  let btn=$(btnId);
  if(!btn)return;
  function show(ev){
    let mt = $("#modalTip");
    mt.textContent = t(textKey);
    mt.style.display = "block";
    const rect = btn.getBoundingClientRect();
    mt.style.left = (rect.left + window.scrollX + 16) + "px";
    mt.style.top = (rect.top + window.scrollY + 30) + "px";
  }
  function hide(){ $("#modalTip").style.display="none"; }
  btn.onmouseenter = show;
  btn.onclick = show;
  btn.onmouseleave = hide;
}
bindModalTip("#testHelp","testmode_tip");
bindModalTip("#hardHelp","hard_tip");
bindModalTip("#editHelp","editor_tip");

// Обработка клика по кнопке "Тест" — сразу чекбокс+переключение+название меняется!
$("#testBtnWrap").onclick = function(e){
  if(e.target.classList.contains('qhelp-btn')) return; // не переключаем, если клик на ?
  testLocked = !testLocked;
  awaitingTestAnswer = false;
  updateTestBtnText();
  updateLang(); updateUI();
  $("#testModeCheck").checked = testLocked;
};
// чекбокс внутри тоже работает для совместимости
$("#testModeCheck").onclick = function(e){
  testLocked = this.checked;
  awaitingTestAnswer = false;
  updateTestBtnText();
  updateLang(); updateUI();
};

$("#file").addEventListener("change",function(e){
  let f=(e.target&&e.target.files&&e.target.files[0])?e.target.files[0]:null; if(!f) return;
  let r=new FileReader();
  r.onload=()=>{ loadCSVText(String(r.result), f.name.replace(/\.[^.]+$/,"")); };
  r.onerror=()=>{ alert(t("errorPref")+" Read file error"); };
  r.readAsText(f);
});
$("#reupload").addEventListener("change",function(e){
  let f=(e.target&&e.target.files&&e.target.files[0])?e.target.files[0]:null; if(!f) return;
  let r=new FileReader();
  r.onload=()=>{ loadCSVText(String(r.result), f.name.replace(/\.[^.]+$/,"")); };
  r.onerror=()=>{ alert(t("errorPref")+" Read file error"); };
  r.readAsText(f);
});
$("#loadUrlBtn").onclick=function(){
  let err = $("#error"), man = $("#downloadManual");
  err.classList.remove("show"); man.classList.remove("show"); err.textContent = man.textContent = "";
  let inp=$("#urlInput"), url=(inp&&inp.value)?inp.value.trim():"";
  if (!url) { err.textContent="Вставьте ссылку!"; err.classList.add("show"); return; }
  // GitHub: автоматически превращаем в raw
  if (/github\.com\/.+\/.+\/blob\//i.test(url))
    url = url.replace('github.com/', 'raw.githubusercontent.com/').replace('/blob/', '/');
  // Google Sheets - auto to CSV
  if(url.includes("docs.google.com/spreadsheets/") && !/export\?format=csv/.test(url))
    url = url.replace(/\/edit.*$/, '') + '/export?format=csv';
  fetch(url,{cache:"no-store"})
    .then(res=>{
      if(!res.ok) throw new Error(`Не удалось скачать: ${res.status} ${res.statusText}`);
      if(+res.headers.get("content-length")>9000000) throw new Error("Слишком большой файл");
      return res.text();
    })
    .then(txt=>{
      if(txt.trim().length<50 || /<(html|body)[ >]/i.test(txt)) throw new Error("Не похоже на таблицу/CSV: возможно, файл защищён или отсутствует публично.");
      let name = decodeURIComponent(url.split("/").pop()||"Remote Table");
      loadCSVText(txt, name);
    })
    .catch(e=>{
      man.textContent = "Не удалось скачать таблицу. Проверь, что она публична и это CSV/таблица. Или скачай файл к себе, а затем загрузи через 'Файл'. Ошибка: " + (e.message||e);
      man.classList.add("show");
    });
};

function persist(){ localStorage.setItem(localKey,JSON.stringify({deck,idx,shown,deckName,lang:curLang,theme:theme,editMode})); }
function restore(){ try{ let raw=localStorage.getItem(localKey); if(!raw) return false; let p=JSON.parse(raw);
if(p && p.deck && p.deck.length){ deck=p.deck; idx=Math.min(Math.max(0,p.idx|0),deck.length-1); shown=!!p.shown; deckName=p.deckName||'—';
if(p.lang) { curLang=p.lang; $("#langSelect").value=curLang; }
if(p.theme){ theme=p.theme; document.body.dataset.theme=theme; $("#themeToggle").textContent=(theme==="dark"?"🌞":"🌙");}
if(p.editMode!==undefined) editMode=!!p.editMode; updateLang(); showWorkspace(); updateUI(); return true;}}catch(e){} return false;}
function showWorkspace(){ $("#uploader").classList.add("hidden"); $("#workspace").style.display="block"; }
function showUploader(){ $("#uploader").classList.remove("hidden"); $("#workspace").style.display="none"; }
$("#templateBtn").onclick = () => {
  let csv='question,answer\n"Столица Франции?","Париж"\n"2+2?","4"\n"Главный цвет неба днём","Синий"\n';
  let blob=new Blob([csv],{type:"text/csv;charset=utf-8;"}),url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url; a.download="flashcards_template.csv"; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
};
$("#demoBtn").onclick = () => {
  let demo='question,answer\n"Столица Франции?","Париж"\n"What is the capital of France?","Paris"\n"Quelle est la capitale de la France?","Paris"\n"2+2?","4"\n"Язык Python — это...","Язык программирования"\n"Python is a...","Programming language"\n"Python est un...","Langage de programmation"';
  loadCSVText(demo,"Demo");
};
function loadCSVText(text,name){
  try{
    let parsed = Papa.parse(text.trim(), {skipEmptyLines:true});
    if(parsed.errors && parsed.errors.length) throw new Error(t("csvNotPairs"));
    let d=toDeck(parsed.data);
    if(!d.length) throw new Error(t("csvNotPairs"));
    mainDeck = JSON.parse(JSON.stringify(d));
    deck = d; idx=0; shown=false; deckName=name||'';
    persist(); showWorkspace(); testLocked=false; awaitingTestAnswer=false; updateUI();
    $("#editorBar").style.display = "none";
  }catch(e){
    let err=$("#error");
    if(err){ err.textContent=t("errorPref") + (e.message||e); err.classList.add("show"); }
    showUploader();
  }
}
$("#shuffleBtn").onclick = () => {deck=shuffle(deck);idx=0;shown=false;updateUI();persist();};
$("#resetBtn").onclick = () => {
  for(let i=0;i<deck.length;i++){deck[i].ok=false;deck[i].bad=false;}
  idx=0;shown=false;updateUI();persist();
};
$("#exportBtn").onclick = ()=>{
  let out=deck.map((x,i)=>({i,q:x.q,a:x.a,ok:x.ok,bad:x.bad}));
  let blob=new Blob([JSON.stringify(out,null,2)],{type:"application/json"});
  let url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url; a.download="deck-progress.json";
  a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
};
$("#clearBtn").onclick = () => {
  if(confirm("Удалить весь прогресс?")){ 
    localStorage.removeItem(localKey);
    location.reload();
  }
};
$("#toggleEditBtn").onclick = function() {
  editMode = !editMode;
  persist();
  if(editMode) launchEditor();
  else { $("#editorBar").style.display="none"; }
};
function launchEditor() {
  let bar = $("#editorBar");
  bar.innerHTML = `<div style="font-size:13px;margin-bottom:10px">${t("editor_hint")}</div>`;
  let tbl = document.createElement("table");
  tbl.style.width="100%"; tbl.style.marginBottom="8px";
  let body = document.createElement("tbody");
  tbl.appendChild(body);
  deck.forEach((c,i)=>{
    let row = document.createElement("tr");
    let q = document.createElement("td");
    let a = document.createElement("td");
    let edit = document.createElement("td");
    q.innerHTML = `<input type="text" value="${c.q.replace(/"/g,'&quot;')}" style="width:96%"/>`;
    a.innerHTML = `<input type="text" value="${c.a.replace(/"/g,'&quot;')}" style="width:96%"/>`;
    let delB = document.createElement("button");
    delB.className="btn-glass-violet small edit-btn"; delB.textContent=t("del");
    delB.onclick=()=>{ deck.splice(i,1); launchEditor(); };
    edit.appendChild(delB);
    row.appendChild(q); row.appendChild(a); row.appendChild(edit);
    body.appendChild(row);
  });
  bar.appendChild(tbl);
  let addBtn = document.createElement("button");
  addBtn.className="btn-glass-violet small edit-btn"; addBtn.textContent=t("add_card");
  addBtn.onclick=()=>{
    deck.push({q:"",a:"",ok:false,bad:false});
    launchEditor();
  };
  let saveBtn=document.createElement("button");
  saveBtn.className="btn-glass-violet small edit-btn"; saveBtn.textContent=t("save_cards");
  saveBtn.onclick=()=>{
    let rows=tbl.querySelectorAll("tr");
    let newDeck=[];
    rows.forEach(row=>{
      let q=row.children[0].firstChild.value.trim(),a=row.children[1].firstChild.value.trim();
      if(q+a!=="") newDeck.push({q:q,a:a,ok:false,bad:false});
    });
    deck = newDeck; idx=0; shown=false;
    persist(); showWorkspace(); updateUI();
    bar.innerHTML=`<div style="color:var(--ok);margin:8px 0;">${t("save_success")}</div>`;
    setTimeout(()=>bar.style.display="none",1200);
  }
  bar.appendChild(addBtn); bar.appendChild(saveBtn);
  bar.style.display="block";
}
$("#trainHardBtn").onclick = ()=>{
  let hard = deck.filter(x=>x.bad);
  if(!hard.length) { alert(t("train_all_done")); return; }
  deck = hard.map(x=>({...x}));
  idx=0; shown=false; testLocked=false; awaitingTestAnswer=false;
  deckName=t("train_hard");
  persist(); showWorkspace(); updateUI();
};
function bootstrap(){
  updateLang();
  if(restore()) return;
  $("#testModeCheck").checked = testLocked;
}
document.addEventListener("DOMContentLoaded",bootstrap);
function shuffle(a){ for(let i=a.length-1;i>0;i--){ let j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
