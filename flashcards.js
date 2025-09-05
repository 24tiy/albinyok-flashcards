let curLang = "ru";
let theme = "light";
let ratingMode = false;
let editMode = false;
let hardCards = [];
let mainDeck = [];
let deck=[], idx=0, shown=false, deckName='—';
let localKey = 'albinyok-flashcards-v1';
const translations = {
  ru: {
    siteTitle:"Albinyok Flashcards",
    siteSub:'Приложение для повтора карточек из CSV — учи на телефоне и на ПК. Ваш прогресс сохраняется локально.',
    fileOrLink:"Откуда берём информацию?",
    fileBtn:"Файл CSV",
    template:"Шаблон CSV",
    demo:"Демо-набор",
    urlBtn:"По ссылке",
    repoBtn:"Загрузить c GitHub",
    ghBarBtn:"Сменить репозиторий",
    owner:"Пользователь",
    repo:"Репозиторий",
    branch:"Ветка",
    noCSVs:"CSV в репозитории не найдены",
    ghApiErr:"Ошибка доступа к GitHub: ",
    selectPlaceholder:"…ищем CSV в репозитории…",
    urlPlaceholder:"https://raw.githubusercontent.com/24tiy/albinyok-flashcards/main/Questions_et_r_ponses.csv",
    reveal:"Показать ответ",
    hide:"Скрыть ответ",
    prev:"← Назад",
    next:"Вперёд →",
    know:"✓ Знаю",
    dont:"✗ Не знаю",
    shuffle:"Перемешать",
    reset:"Сбросить прогресс",
    deck:"Источник вопросов",
    empty:"Загрузите CSV или выберите файл из репозитория",
    progress:"Экспорт прогресса",
    clear:"Очистить всё",
    hotkeys:"Space/Enter — ответ · ←/→ — навигация · J/K — не знаю/знаю (или Сложно/Легко) · S — перемешать",
    errorPref:"Ошибка: ",
    ghInvalid:"Нет файлов .csv или ошибка доступа к GitHub.",
    ghChanged:"Репозиторий обновлён. Попробуйте снова.",
    fetchFail:"Ошибка загрузки",
    fileTooBig:"Файл слишком большой!",
    csvNotPairs:"Не найдено пар 'вопрос/ответ'",
    help:"Помощь",
    rate_easy:"Легко",
    rate_hard:"Сложно",
    rate_again:"Повторить",
    editor_hint:"Редактируйте карточки ниже, затем сохраните! Каждая строка — одна карточка.",
    add_card:"Добавить карточку",
    save_cards:"Сохранить изменения",
    del:"Удалить",
    edit:"Править",
    train_hard:"Тренировать сложные",
    theme_light:"Светлая тема",
    theme_dark:"Тёмная тема",
    edit_mode:"Режим редактирования",
    save_success:"Карточки сохранены!",
    train_all_done:"Все сложные карточки выучены! МОЛОДЕЦ!"
  },
  en: {
    siteTitle:"Albinyok Flashcards",
    siteSub:'App for using and repeating CSV flashcards — use anywhere, progress is saved locally.',
    fileOrLink:"Where does info come from?",
    fileBtn:"CSV File",
    template:"Template CSV",
    demo:"Demo Set",
    urlBtn:"From Link",
    repoBtn:"Load from GitHub",
    ghBarBtn:"Change Repo",
    owner:"User",
    repo:"Repo",
    branch:"Branch",
    noCSVs:"No CSV files found in repo",
    ghApiErr:"GitHub API error: ",
    selectPlaceholder:"…searching for CSVs…",
    urlPlaceholder:"https://raw.githubusercontent.com/24tiy/albinyok-flashcards/main/Questions_et_r_ponses.csv",
    reveal:"Show answer",
    hide:"Hide answer",
    prev:"← Back",
    next:"Next →",
    know:"✓ Know",
    dont:"✗ Don’t know",
    shuffle:"Shuffle",
    reset:"Reset progress",
    deck:"Source",
    empty:"Upload or select a CSV",
    progress:"Export progress",
    clear:"Clear all",
    hotkeys:"Space/Enter — answer · ←/→ — navigation · J/K — hard/easy · S — shuffle",
    errorPref:"Error: ",
    ghInvalid:"No CSV files or GitHub access error.",
    ghChanged:"Repo updated. Try again.",
    fetchFail:"Download error",
    fileTooBig:"File too large!",
    csvNotPairs:"No question/answer pairs found",
    help:"Help",
    rate_easy:"Easy",
    rate_hard:"Hard",
    rate_again:"Again",
    editor_hint:"Edit your cards below, then save! Each line = 1 card.",
    add_card:"Add Card",
    save_cards:"Save Cards",
    del:"Delete",
    edit:"Edit",
    train_hard:"Train hard cards",
    theme_light:"Light theme",
    theme_dark:"Dark theme",
    edit_mode:"Edit mode",
    save_success:"Cards saved!",
    train_all_done:"All hard cards learned! NICE!"
  },
  fr: {
    siteTitle:"Albinyok Flashcards",
    siteSub:'Appli pour réviser vos cartes CSV — partout, progrès sauvegardé localement.',
    fileOrLink:"D’où viennent les données ?",
    fileBtn:"Fichier CSV",
    template:"Modèle CSV",
    demo:"Jeu démo",
    urlBtn:"Par lien",
    repoBtn:"Charger GitHub",
    ghBarBtn:"Changer dépôt",
    owner:"Utilisateur",
    repo:"Dépôt",
    branch:"Branche",
    noCSVs:"Aucun CSV trouvé",
    ghApiErr:"Erreur API GitHub : ",
    selectPlaceholder:"…recherche des CSV…",
    urlPlaceholder:"https://raw.githubusercontent.com/24tiy/albinyok-flashcards/main/Questions_et_r_ponses.csv",
    reveal:"Afficher réponse",
    hide:"Cacher réponse",
    prev:"← Précédent",
    next:"Suivant →",
    know:"✓ Je sais",
    dont:"✗ Je ne sais pas",
    shuffle:"Mélanger",
    reset:"Réinitialiser",
    deck:"Source",
    empty:"Chargez ou choisissez un CSV",
    progress:"Exporter progrès",
    clear:"Tout nettoyer",
    hotkeys:"Space/Enter — réponse · ←/→ — navigation · J/K — difficile/facile · S — mélanger",
    errorPref:"Erreur : ",
    ghInvalid:"Pas de CSV ou erreur GitHub.",
    ghChanged:"Dépôt mis à jour. Essayez encore.",
    fetchFail:"Erreur téléchargement",
    fileTooBig:"Fichier trop volumineux !",
    csvNotPairs:"Aucune question/réponse trouvée",
    help:"Aide",
    rate_easy:"Facile",
    rate_hard:"Difficile",
    rate_again:"Encore",
    editor_hint:"Éditez vos cartes ci-dessous puis sauvegardez. 1 ligne = 1 carte.",
    add_card:"Ajouter une carte",
    save_cards:"Enregistrer",
    del:"Supprimer",
    edit:"Éditer",
    train_hard:"S’entraîner sur les difficiles",
    theme_light:"Thème clair",
    theme_dark:"Thème sombre",
    edit_mode:"Mode édition",
    save_success:"Cartes enregistrées !",
    train_all_done:"Toutes les cartes difficiles sont apprises ! SUPER !"
  }
};
function $(sel){ return document.querySelector(sel);}
function t(k){return translations[curLang][k]||k;}
function updateLang() {
  document.documentElement.lang = curLang;
  $("#siteTitle").textContent = t("siteTitle");
  $("#siteSub").textContent = t("siteSub");
  $("#fileOrLink").textContent = t("fileOrLink");
  $("#fileBtnTxt").textContent = t("fileBtn");
  $("#templateBtn").textContent = t("template");
  $("#demoBtn").textContent = t("demo");
  $("#loadUrlBtn").textContent = t("urlBtn");
  $("#loadPickedBtn").textContent = t("repoBtn");
  $("#changeGHBtn").textContent = t("ghBarBtn");
  $("#ghOwner").setAttribute("aria-label", t("owner"));
  $("#ghRepo").setAttribute("aria-label", t("repo"));
  $("#ghBranch").setAttribute("aria-label", t("branch"));
  $("#urlInput").placeholder = t("urlPlaceholder");
  let pick=$("#csvPicker");
  if(pick && pick.options.length && pick.options[0].value===""){
    pick.options[0].textContent = t("selectPlaceholder");
  }
  $("#deckName").textContent = `${t('deck')}: —`;
  $("#helpLink").textContent = t("help");
  updateControlsBar();
}
$("#langSelect").addEventListener("change",function(e){curLang=this.value;updateLang();updateControlsBar();});
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
    out.push({q:filtered[i][0], a:filtered[i][1], ok:false, bad:false,rating:0});
  return out;
}
function updateControlsBar() {
  let isRating = ratingMode;
  let el=$("#controlsBar");
  if (!el) return;
  el.innerHTML = "";
  if(isRating){
    el.appendChild(createCtrl("ctrl ok","K",t("rate_easy"),()=>rateCard(2)));
    el.appendChild(createCtrl("ctrl hard","J",t("rate_hard"),()=>rateCard(1)));
    el.appendChild(createCtrl("ctrl again","A",t("rate_again"),()=>rateCard(0)));
  } else {
    el.appendChild(createCtrl("ctrl","←",t("prev"),()=>prevCard()));
    el.appendChild(createCtrl("ctrl","Space",t("reveal"),()=>revealCard()));
    el.appendChild(createCtrl("ctrl","→",t("next"),()=>nextCard()));
    el.appendChild(createCtrl("ctrl ok","K",t("know"),()=>markOk()));
    el.appendChild(createCtrl("ctrl bad","J",t("dont"),()=>markBad()));
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
    q.textContent = t("empty"); a.textContent = ""; a.style.display = "none";
    if (c) c.textContent = "0 / 0";
    if (s) s.textContent = "✓ 0 • ✗ 0";
    if (n) n.textContent = `${t('deck')}: —`;
    if (bar) bar.style.width = "0%";
    return;
  }
  let card=deck[idx];
  q.textContent = card.q || `(${t('deck')})`;
  a.textContent = card.a || `(—)`;
  a.style.display = "block";
  if (!shown) a.style.visibility = "hidden"; else a.style.visibility = "visible";
  if (c) c.textContent = `${idx+1} / ${deck.length}`;
  let ok=deck.filter(x=>x.ok).length, bad=deck.filter(x=>x.bad).length;
  if (s) s.textContent = `✓ ${ok} • ✗ ${bad}`;
  if (n) n.textContent = `${t('deck')}: ${deckName}`;
  updateControlsBar();
}
function revealCard(){shown=!shown;updateUI();persist();}
function prevCard(){if(deck.length){idx=(idx-1+deck.length)%deck.length;shown=false;updateUI();persist();}}
function nextCard(){if(deck.length){idx=(idx+1)%deck.length;shown=false;updateUI();persist();}}
function markOk(){if(deck.length){deck[idx].ok=true;deck[idx].bad=false;nextCard();persist();}}
function markBad(){if(deck.length){deck[idx].bad=true;deck[idx].ok=false;nextCard();persist();}}
function rateCard(val){
  if(!deck.length) return;
  deck[idx].rating = val;
  if(val===2){deck[idx].ok=true;deck[idx].bad=false;}
  if(val===1){deck[idx].ok=false;deck[idx].bad=true;}
  if(val===0){deck[idx].ok=false;deck[idx].bad=true;}
  nextCard(); persist();
}
function persist(){
  localStorage.setItem(localKey,JSON.stringify({deck,idx,shown,deckName,lang:curLang,theme:theme,ratingMode,editMode}));
}
function restore(){
  try{
    let raw=localStorage.getItem(localKey);
    if(!raw) return false;
    let p=JSON.parse(raw);
    if(p && p.deck && p.deck.length){
      deck=p.deck; idx=Math.min(Math.max(0,p.idx|0),deck.length-1); shown=!!p.shown; deckName=p.deckName||'—'; 
      if(p.lang) { curLang=p.lang; $("#langSelect").value=curLang; }
      if(p.theme){ theme=p.theme; document.body.dataset.theme=theme; $("#themeToggle").textContent=(theme==="dark"?"🌞":"🌙");}
      if(p.ratingMode!==undefined) ratingMode=!!p.ratingMode;
      if(p.editMode!==undefined) editMode=!!p.editMode;
      updateLang(); showWorkspace(); updateUI(); return true;
    }
  }catch(e){}
  return false;
}
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
    if(parsed.errors && parsed.errors.length) throw new Error(parsed.errors[0].message);
    let d=toDeck(parsed.data);
    if(!d.length) throw new Error(t("csvNotPairs"));
    mainDeck = JSON.parse(JSON.stringify(d));
    deck = d; idx=0; shown=false; deckName=name||'';
    persist(); showWorkspace(); updateUI();
    $("#editorBar").style.display = "none";
  }catch(e){
    let err=$("#error");
    if(err){ err.textContent=t("errorPref") + (e.message||e); err.classList.remove("hidden"); }
    showUploader();
  }
}
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
  let inp=$("#urlInput"),url=(inp&&inp.value)?inp.value.trim():"";
  if(!url) return alert("Вставь ссылку на CSV");
  fetch(url,{cache:"no-store"}).then(res=>{
    if(!res.ok) throw new Error(`${t("fetchFail")} (${res.status})`);
    if(+res.headers.get("content-length")>500000) throw new Error(t("fileTooBig"));
    return res.text();
  }).then(txt=>{
    let name=decodeURIComponent(url.split("/").pop()||"Remote CSV");
    loadCSVText(txt,name);
  }).catch(e=>alert(e.message||e));
};
$("#loadPickedBtn").onclick=function(){
  let pick=$("#csvPicker");
  if(!pick||!pick.value) return;
  let owner=pick.getAttribute("data-owner"),repo=pick.getAttribute("data-repo"),branch=pick.getAttribute("data-branch")||"main";
  let url=`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${pick.value}`;
  fetch(url,{cache:"no-store"}).then(res=>{
    if(!res.ok) throw new Error(`${t("fetchFail")} (${res.status})`);
    if(+res.headers.get("content-length")>500000) throw new Error(t("fileTooBig"));
    return res.text();
  }).then(txt=>{
    let name=decodeURIComponent(url.split("/").pop()||"Remote CSV");
    loadCSVText(txt,name);
  }).catch(e=>alert(e.message||e));
};
$("#changeGHBtn").onclick=function(){
  let owner=$("#ghOwner")?$("#ghOwner").value.trim():"",repo=$("#ghRepo")?$("#ghRepo").value.trim():"",branch=$("#ghBranch")?$("#ghBranch").value.trim():"";
  populatePicker(owner,repo,branch);
  let pick=$("#csvPicker"); if(pick){pick.innerHTML = `<option>${t("selectPlaceholder")}</option>`;}
  $("#error").classList.add("hidden");
  setTimeout(()=>alert(t("ghChanged")),200);
};
function populatePicker(owner,repo,branch){
  owner=owner||($("#ghOwner")?$("#ghOwner").value.trim():""); repo=repo||($("#ghRepo")?$("#ghRepo").value.trim():"");branch=branch||($("#ghBranch")?$("#ghBranch").value.trim():"");
  let pick=$("#csvPicker"), btn=$("#loadPickedBtn");
  if(!pick) return;
  pick.innerHTML = `<option>${t("selectPlaceholder")}</option>`; btn.disabled = true;
  if(!(owner&&repo&&branch)) return;
  let url=`https://api.github.com/repos/${owner}/${repo}/git/trees/${encodeURIComponent(branch)}?recursive=1`;
  fetch(url,{headers:{"Accept":"application/vnd.github+json"}})
    .then(res=>{
      if(!res.ok) throw new Error(`${t("ghApiErr")}${res.status}`);
      return res.json();
    })
    .then(data=>{
      let tree=(data&&data.tree)?data.tree:[], files=[];
      for(let it of tree){ if(it.type==="blob" && /\.csv$/i.test(it.path)) files.push({path:it.path, name:it.path.split("/").pop()}); }
      if(!files.length){pick.innerHTML = `<option>${t("noCSVs")}</option>`; btn.disabled = true;return;}
      files.sort((a,b)=>a.path.localeCompare(b.path));
      let html=""; for(let item of files){ html+=`<option value="${item.path}">${item.path}</option>`;}
      pick.innerHTML=html;
      pick.setAttribute("data-owner",owner);
      pick.setAttribute("data-repo",repo);
      pick.setAttribute("data-branch",branch);
      btn.disabled=false;
    })["catch"](e=>{
      pick.innerHTML = `<option>${t("ghInvalid")} (${e.message||e})</option>`;
      btn.disabled=true;
    });
}
$("#toggleEdit").onchange = function() {
  editMode = this.checked;
  persist();
  if(editMode) launchEditor();
  else { $("#editorBar").style.display="none"; }
}
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
    setTimeout(()=>bar.style.display="none",1400);
  }
  bar.appendChild(addBtn); bar.appendChild(saveBtn);
  bar.style.display="block";
}
$("#trainHardBtn").onclick = ()=>{
  let hard = deck.filter(x=>x.bad);
  if(!hard.length) { alert(t("train_all_done")); return; }
  deck = hard.map(x=>({...x}));
  idx=0; shown=false;
  deckName=t("train_hard");
  persist(); showWorkspace(); updateUI();
};
$("#toggleRating").onchange = function(){ ratingMode = this.checked; persist(); updateControlsBar(); updateUI(); };
window.addEventListener("keydown",function(e){
  let tag=(document.activeElement&&document.activeElement.tagName)||"";
  if(["INPUT","TEXTAREA","SELECT"].includes(tag)) return;
  if(e.key===" "||e.key==="Enter"){ e.preventDefault(); revealCard();}
  else if(e.key==="ArrowRight"){ nextCard();}
  else if(e.key==="ArrowLeft"){ prevCard();}
  else if((e.key||"").toLowerCase()==="s"){ deck=shuffle(deck); idx=0; shown=false; updateUI(); persist(); }
  else if((e.key||"").toLowerCase()==="k"){ if(ratingMode) rateCard(2); else markOk();}
  else if((e.key||"").toLowerCase()==="j"){ if(ratingMode) rateCard(1); else markBad();}
  else if((e.key||"").toLowerCase()==="a" && ratingMode){ rateCard(0);}
});
function shuffle(a){ 
  for(let i=a.length-1;i>0;i--){ 
    let j=Math.floor(Math.random()*(i+1)); 
    [a[i],a[j]]=[a[j],a[i]];
  } 
  return a;
}
$("#card").onclick = () => {revealCard();};
$("#prevBtn") && ($("#prevBtn").onclick = prevCard);
$("#nextBtn") && ($("#nextBtn").onclick = nextCard);
$("#revealBtn") && ($("#revealBtn").onclick = revealCard);
$("#shuffleBtn") && ($("#shuffleBtn").onclick = () => {deck=shuffle(deck);idx=0;shown=false;updateUI();persist();});
$("#resetBtn") && ($("#resetBtn").onclick = () => {
  for(let i=0;i<deck.length;i++){deck[i].ok=false;deck[i].bad=false;}
  idx=0;shown=false;updateUI();persist();
});
$("#markOkBtn") && ($("#markOkBtn").onclick = markOk);
$("#markBadBtn") && ($("#markBadBtn").onclick = markBad);
$("#exportBtn").onclick = ()=>{
  let out=deck.map((x,i)=>({i,q:x.q,a:x.a,ok:x.ok,bad:x.bad,rating:x.rating}));
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
function showHotkeys(){ $("#hotkeysTip").textContent = t("hotkeys"); }
function bootstrap(){
  updateLang();
  if(restore()) return;
  var params=new URLSearchParams(window.location.search);
  let owner=params.get("owner")||($("#ghOwner")?$("#ghOwner").value:""),
      repo=params.get("repo")||($("#ghRepo")?$("#ghRepo").value:""),
      branch=params.get("branch")||($("#ghBranch")?$("#ghBranch").value:"");
  populatePicker(owner,repo,branch);
  showHotkeys();
}
document.addEventListener("DOMContentLoaded",bootstrap);
