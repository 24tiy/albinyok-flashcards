/**
 * Albinyok Flashcards v2.2
 * Beautiful air.inc inspired design
 * Features: Swipe, Hints, AI Generation, SM-2 Algorithm
 */

// ===== CONFIG =====
const CONFIG = {
  storageKey: 'albinyok-flashcards-v2',
  sm2: { defaultEF: 2.5, minEF: 1.3, maxEF: 3.0 }
};

// ===== TRANSLATIONS =====
const T = {
  ru: {
    tapHint: 'Нажмите для ответа',
    flipShow: 'Показать ответ',
    flipHide: 'Скрыть ответ',
    know: 'Знаю',
    dontKnow: 'Не знаю',
    emptyTitle: 'Загрузите карточки',
    emptyDesc: 'CSV файл или ссылка на Google Sheets',
    toastLoaded: 'Загружено карточек: ',
    toastSaved: 'Сохранено!',
    toastError: 'Ошибка',
    toastReset: 'Прогресс сброшен',
    toastNoHard: 'Нет сложных карточек',
    toastNoText: 'Вставьте текст',
    toastGen: 'Сгенерировано: ',
    confirmReset: 'Сбросить весь прогресс?',
    confirmDelete: 'Удалить эту колоду?',
    allCats: 'Все',
    tagline: 'Учись <em>умнее</em>',
    upload: 'Загрузить',
    decks: 'Колоды',
    settings: 'Настройки',
    aiGen: 'AI Генератор',
    editor: 'Редактор',
    testMode: 'Режим теста',
    testModeDesc: 'Ответить перед просмотром',
    sr: 'Интервальное повторение',
    srDesc: 'Алгоритм SM-2',
    hard: 'Только сложные',
    hardDesc: 'Фокус на трудных',
    shuffle: 'Перемешать',
    shuffleDesc: 'Случайный порядок',
    back: 'Назад',
    next: 'Далее'
  },
  en: {
    tapHint: 'Tap to flip',
    flipShow: 'Show answer',
    flipHide: 'Hide answer',
    know: 'Know',
    dontKnow: "Don't know",
    emptyTitle: 'Load your flashcards',
    emptyDesc: 'Upload a CSV file or paste a link',
    toastLoaded: 'Cards loaded: ',
    toastSaved: 'Saved!',
    toastError: 'Error',
    toastReset: 'Progress reset',
    toastNoHard: 'No hard cards',
    toastNoText: 'Paste text first',
    toastGen: 'Generated: ',
    confirmReset: 'Reset all progress?',
    confirmDelete: 'Delete this deck?',
    allCats: 'All',
    tagline: 'Learn <em>smarter</em>',
    upload: 'Upload',
    decks: 'Decks',
    settings: 'Settings',
    aiGen: 'AI Generator',
    editor: 'Card Editor',
    testMode: 'Test mode',
    testModeDesc: 'Answer before reveal',
    sr: 'Spaced repetition',
    srDesc: 'SM-2 algorithm',
    hard: 'Hard cards only',
    hardDesc: 'Focus on difficult',
    shuffle: 'Shuffle',
    shuffleDesc: 'Random order',
    back: 'Back',
    next: 'Next'
  },
  fr: {
    tapHint: 'Appuyez pour retourner',
    flipShow: 'Voir la réponse',
    flipHide: 'Cacher la réponse',
    know: 'Je sais',
    dontKnow: 'Je ne sais pas',
    emptyTitle: 'Chargez vos cartes',
    emptyDesc: 'Fichier CSV ou lien Google Sheets',
    toastLoaded: 'Cartes chargées: ',
    toastSaved: 'Enregistré!',
    toastError: 'Erreur',
    toastReset: 'Progression réinitialisée',
    toastNoHard: 'Pas de cartes difficiles',
    toastNoText: 'Collez du texte',
    toastGen: 'Générées: ',
    confirmReset: 'Réinitialiser?',
    confirmDelete: 'Supprimer ce paquet?',
    allCats: 'Toutes',
    tagline: 'Apprenez <em>intelligemment</em>',
    upload: 'Charger',
    decks: 'Paquets',
    settings: 'Paramètres',
    aiGen: 'Générateur IA',
    editor: 'Éditeur',
    testMode: 'Mode test',
    testModeDesc: 'Répondre avant de voir',
    sr: 'Répétition espacée',
    srDesc: 'Algorithme SM-2',
    hard: 'Cartes difficiles',
    hardDesc: 'Concentrer sur les difficiles',
    shuffle: 'Mélanger',
    shuffleDesc: 'Ordre aléatoire',
    back: 'Retour',
    next: 'Suivant'
  }
};

// ===== STATE =====
const state = {
  lang: 'ru',
  theme: 'light',
  decks: {},
  deckId: null,
  idx: 0,
  flipped: false,
  hintLvl: 0,
  settings: {
    testMode: false,
    spacedRepetition: true,
    hardOnly: false,
    shuffle: false
  },
  stats: { today: 0, streak: 0 },
  category: null,
  genCards: [],
  apiKey: null,
  apiProv: 'anthropic'
};

// ===== HELPERS =====
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const t = k => T[state.lang]?.[k] || T.en[k] || k;
const genId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 9);

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== STORAGE =====
function save() {
  localStorage.setItem(CONFIG.storageKey, JSON.stringify({
    lang: state.lang,
    theme: state.theme,
    decks: state.decks,
    deckId: state.deckId,
    settings: state.settings,
    stats: state.stats,
    apiKey: state.apiKey,
    apiProv: state.apiProv
  }));
}

function load() {
  try {
    const d = JSON.parse(localStorage.getItem(CONFIG.storageKey));
    if (d) {
      Object.assign(state, {
        lang: d.lang || 'ru',
        theme: d.theme || 'light',
        decks: d.decks || {},
        deckId: d.deckId,
        settings: { ...state.settings, ...d.settings },
        stats: { ...state.stats, ...d.stats },
        apiKey: d.apiKey,
        apiProv: d.apiProv || 'anthropic'
      });
      return true;
    }
  } catch (e) { console.error(e); }
  return false;
}

// ===== SM-2 ALGORITHM =====
function sm2(card, quality) {
  let { ef = CONFIG.sm2.defaultEF, interval = 0, reps = 0 } = card.sm2 || {};
  
  if (quality < 3) {
    reps = 0;
    interval = 1;
  } else {
    interval = reps === 0 ? 1 : reps === 1 ? 6 : Math.round(interval * ef);
    reps++;
    ef = Math.max(CONFIG.sm2.minEF, Math.min(CONFIG.sm2.maxEF,
      ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))));
  }
  
  const next = new Date();
  next.setDate(next.getDate() + interval);
  
  return { ef, interval, reps, next: next.toISOString(), last: new Date().toISOString() };
}

function isDue(card) {
  if (!state.settings.spacedRepetition) return true;
  if (!card.sm2?.next) return true;
  return new Date(card.sm2.next) <= new Date();
}

// ===== DECK MANAGEMENT =====
function getDeck() {
  return state.decks[state.deckId];
}

function getCards() {
  const deck = getDeck();
  if (!deck) return [];
  
  let cards = [...deck.cards];
  
  if (state.category) {
    cards = cards.filter(c => c.cat === state.category);
  }
  
  if (state.settings.hardOnly) {
    cards = cards.filter(c => !c.sm2 || c.sm2.reps < 2);
  }
  
  if (state.settings.spacedRepetition) {
    cards = cards.filter(isDue);
  }
  
  if (state.settings.shuffle) {
    cards = shuffleArray(cards);
  }
  
  return cards;
}

function getCategories() {
  const deck = getDeck();
  if (!deck) return [];
  return [...new Set(deck.cards.map(c => c.cat).filter(Boolean))].sort();
}

function createDeck(name, cards = []) {
  const id = genId();
  state.decks[id] = {
    id,
    name: name || 'Deck',
    cards: cards.map(c => ({
      id: genId(),
      q: c.q || c.question || c[0] || '',
      a: c.a || c.answer || c[1] || '',
      cat: c.cat || c.category || c[2] || '',
      sm2: null
    }))
  };
  state.deckId = id;
  state.idx = 0;
  save();
  return id;
}

function deleteDeck(id) {
  delete state.decks[id];
  const ids = Object.keys(state.decks);
  state.deckId = ids.length ? ids[0] : null;
  state.idx = 0;
  save();
}

// ===== CARD OPERATIONS =====
function mark(quality) {
  const cards = getCards();
  const card = cards[state.idx];
  if (!card) return;
  
  const deck = getDeck();
  const i = deck.cards.findIndex(c => c.id === card.id);
  
  if (i !== -1) {
    deck.cards[i].sm2 = sm2(card, quality);
    state.stats.today++;
    save();
  }
  
  // Visual feedback
  const el = $('#card');
  el.classList.add(quality >= 3 ? 'correct' : 'incorrect');
  setTimeout(() => el.classList.remove('correct', 'incorrect'), 500);
  
  // Next card
  state.flipped = false;
  state.hintLvl = 0;
  state.idx = (state.idx + 1) % (getCards().length || 1);
  
  render();
}

// ===== HINT SYSTEM =====
function getHint(answer, lvl) {
  if (!answer || lvl === 0) return '';
  const len = answer.length;
  
  if (lvl === 1) return answer[0] + '•'.repeat(Math.min(len - 1, 8)) + '...';
  if (lvl === 2) return answer.slice(0, Math.ceil(len * 0.3)) + '...';
  if (lvl === 3) return answer.slice(0, Math.ceil(len * 0.5)) + '...';
  return answer.slice(0, Math.ceil(len * 0.75)) + '...';
}

function showHint() {
  const cards = getCards();
  const card = cards[state.idx];
  if (!card) return;
  
  state.hintLvl = Math.min(state.hintLvl + 1, 4);
  $('#hintText').textContent = getHint(card.a, state.hintLvl);
  $('#hintBox').classList.remove('hidden');
  
  if (state.hintLvl >= 4) $('#hintBtn').disabled = true;
}

function hideHint() {
  state.hintLvl = 0;
  $('#hintBox').classList.add('hidden');
  $('#hintBtn').disabled = false;
}

// ===== SWIPE GESTURES =====
function initSwipe() {
  const wrapper = $('#cardWrapper');
  const card = $('#card');
  const swL = $('#swipeL');
  const swR = $('#swipeR');
  
  let startX = 0, curX = 0, dragging = false;
  
  wrapper.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    startX = curX = e.touches[0].clientX;
    dragging = true;
    card.style.transition = 'none';
  }, { passive: true });
  
  wrapper.addEventListener('touchmove', e => {
    if (!dragging) return;
    curX = e.touches[0].clientX;
    const diff = curX - startX;
    
    card.style.transform = state.flipped
      ? `rotateY(180deg) translateX(${-diff}px) rotate(${-diff * 0.03}deg)`
      : `translateX(${diff}px) rotate(${diff * 0.03}deg)`;
    
    swL.classList.toggle('show', diff < -50);
    swR.classList.toggle('show', diff > 50);
  }, { passive: true });
  
  wrapper.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    
    const diff = curX - startX;
    card.style.transition = '';
    card.style.transform = '';
    swL.classList.remove('show');
    swR.classList.remove('show');
    
    if (diff < -100) mark(1);
    else if (diff > 100) mark(4);
  }, { passive: true });
  
  // Tap to flip
  wrapper.addEventListener('click', e => {
    if (Math.abs(curX - startX) < 10) {
      toggleFlip();
    }
  });
}

// ===== CSV PARSING =====
function parseCSV(text, name) {
  const parsed = Papa.parse(text.trim(), { skipEmptyLines: true });
  const rows = parsed.data;
  if (rows.length < 2) throw new Error('Not enough data');
  
  const hasHeader = ['q', 'question', 'вопрос'].includes(rows[0][0]?.toLowerCase());
  const start = hasHeader ? 1 : 0;
  
  const cards = [];
  for (let i = start; i < rows.length; i++) {
    const r = rows[i];
    if (r[0] || r[1]) {
      cards.push({ q: r[0]?.trim() || '', a: r[1]?.trim() || '', cat: r[2]?.trim() || '' });
    }
  }
  
  if (!cards.length) throw new Error('No cards');
  return { name, cards };
}

// ===== AI GENERATOR =====
async function generateAI() {
  const text = $('#aiText').value.trim();
  if (!text) { toast(t('toastNoText'), 'error'); return; }
  
  const count = +$('#aiCount').value;
  const lang = $('#aiLang').value;
  
  $('#aiLoading').classList.remove('hidden');
  $('#generateBtn').disabled = true;
  
  try {
    let cards;
    if (state.apiKey) {
      cards = await callAI(text, count, lang);
    } else {
      cards = basicParse(text, count);
    }
    
    if (!cards.length) throw new Error('No cards generated');
    
    state.genCards = cards;
    showPreview(cards);
    toast(t('toastGen') + cards.length, 'success');
  } catch (e) {
    toast(t('toastError') + ': ' + e.message, 'error');
  } finally {
    $('#aiLoading').classList.add('hidden');
    $('#generateBtn').disabled = false;
  }
}

async function callAI(text, count, lang) {
  const langInstr = lang === 'same' ? '' : `Generate in ${lang === 'ru' ? 'Russian' : lang === 'fr' ? 'French' : 'English'}.`;
  const prompt = `Create ${count} flashcards from this text. ${langInstr}\nReturn ONLY JSON array: [{"question":"...","answer":"..."}]\n\nText:\n${text.slice(0, 8000)}`;
  
  let content;
  if (state.apiProv === 'anthropic') {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': state.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 4096,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    content = data.content[0].text;
  } else {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 4096
      })
    });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    content = data.choices[0].message.content;
  }
  
  const match = content.match(/\[[\s\S]*\]/);
  if (!match) throw new Error('Parse error');
  const arr = JSON.parse(match[0]);
  return arr.filter(c => c.question && c.answer).map(c => ({
    q: c.question.trim(),
    a: c.answer.trim(),
    cat: 'AI'
  }));
}

function basicParse(text, count) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 20);
  const cards = [];
  
  for (const s of sentences) {
    if (cards.length >= count) break;
    const trimmed = s.trim();
    
    // Definition pattern
    const def = trimmed.match(/^(.{5,40})\s+(?:is|are|это|est|sont)\s+(.{10,})/i);
    if (def) {
      cards.push({ q: `What is ${def[1].trim()}?`, a: def[2].trim(), cat: 'Auto' });
      continue;
    }
    
    // Fill blank
    const words = trimmed.split(' ').filter(w => w.length > 5);
    if (words.length > 3) {
      const key = words[Math.floor(words.length / 2)];
      cards.push({ q: trimmed.replace(key, '_____'), a: key, cat: 'Auto' });
    }
  }
  
  return cards.slice(0, count);
}

function showPreview(cards) {
  const list = $('#aiPreviewList');
  list.innerHTML = cards.map((c, i) => `
    <div class="preview-item">
      <input value="${c.q.replace(/"/g, '&quot;')}" data-i="${i}" data-f="q">
      <input value="${c.a.replace(/"/g, '&quot;')}" data-i="${i}" data-f="a">
      <button onclick="removePreview(${i})">✕</button>
    </div>
  `).join('');
  $('#aiPreview').classList.remove('hidden');
}

window.removePreview = i => {
  state.genCards.splice(i, 1);
  showPreview(state.genCards);
};

function acceptCards() {
  $$('#aiPreviewList input').forEach(inp => {
    const i = +inp.dataset.i, f = inp.dataset.f;
    if (state.genCards[i]) state.genCards[i][f] = inp.value.trim();
  });
  
  const valid = state.genCards.filter(c => c.q && c.a);
  if (!valid.length) return;
  
  if (state.deckId && state.decks[state.deckId]) {
    valid.forEach(c => state.decks[state.deckId].cards.push({ id: genId(), ...c, sm2: null }));
  } else {
    createDeck('AI Cards', valid);
  }
  
  save();
  discardCards();
  render();
  toast(t('toastSaved'), 'success');
}

function discardCards() {
  state.genCards = [];
  $('#aiPreview').classList.add('hidden');
  $('#aiText').value = '';
}

// ===== EDITOR =====
function openEditor() {
  const deck = getDeck();
  if (!deck) return;
  
  $('#editorList').innerHTML = deck.cards.map((c, i) => `
    <div class="editor-item">
      <input value="${c.q.replace(/"/g, '&quot;')}" placeholder="Question" data-i="${i}" data-f="q">
      <input value="${c.a.replace(/"/g, '&quot;')}" placeholder="Answer" data-i="${i}" data-f="a">
      <input value="${(c.cat || '').replace(/"/g, '&quot;')}" placeholder="Category" data-i="${i}" data-f="cat">
      <div class="editor-item-del"><button onclick="delCard(${i})">Delete</button></div>
    </div>
  `).join('');
  
  $('#secEditor').classList.remove('hidden');
  $('#secEditor').classList.add('open');
}

window.delCard = i => {
  getDeck()?.cards.splice(i, 1);
  save();
  openEditor();
};

function addCard() {
  const deck = getDeck();
  if (!deck) return;
  deck.cards.push({ id: genId(), q: '', a: '', cat: '', sm2: null });
  openEditor();
}

function saveCards() {
  const deck = getDeck();
  if (!deck) return;
  
  $$('#editorList input').forEach(inp => {
    const i = +inp.dataset.i, f = inp.dataset.f;
    if (deck.cards[i]) deck.cards[i][f] = inp.value.trim();
  });
  
  deck.cards = deck.cards.filter(c => c.q || c.a);
  save();
  
  $('#secEditor').classList.add('hidden');
  render();
  toast(t('toastSaved'), 'success');
}

// ===== TOAST =====
function toast(msg, type = 'info') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'} ${msg}`;
  $('#toastContainer').appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

// ===== UI RENDERING =====
function render() {
  const hasDecks = Object.keys(state.decks).length > 0;
  const cards = getCards();
  const hasCards = cards.length > 0;
  
  // Theme
  document.documentElement.setAttribute('data-theme', state.theme);
  $('#themeBtn').textContent = state.theme === 'dark' ? '☀️' : '🌙';
  $('#langSelect').value = state.lang;
  
  // Views
  $('#emptyView').classList.toggle('hidden', hasDecks);
  $('#studyView').classList.toggle('hidden', !hasCards);
  $('#bottomBar').classList.toggle('hidden', !hasCards);
  $('#secDecks').classList.toggle('hidden', !hasDecks);
  
  // Deck list
  if (hasDecks) {
    $('#deckList').innerHTML = Object.values(state.decks).map(d => `
      <div class="deck-chip ${d.id === state.deckId ? 'active' : ''}" data-id="${d.id}">
        ${d.name} (${d.cards.length})
      </div>
    `).join('');
  }
  
  // Categories
  const cats = getCategories();
  if (cats.length) {
    $('#catContainer').classList.remove('hidden');
    $('#catContainer').innerHTML = `
      <button class="cat-btn ${!state.category ? 'active' : ''}" data-cat="">${t('allCats')}</button>
      ${cats.map(c => `<button class="cat-btn ${state.category === c ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('')}
    `;
  } else {
    $('#catContainer').classList.add('hidden');
  }
  
  // Card
  if (hasCards) {
    const card = cards[state.idx] || cards[0];
    const total = cards.length;
    const deck = getDeck();
    const known = deck?.cards.filter(c => c.sm2?.reps >= 3).length || 0;
    const learning = deck?.cards.filter(c => c.sm2 && c.sm2.reps < 3).length || 0;
    
    $('#questionText').textContent = card.q;
    $('#answerText').textContent = card.a;
    $('#cardNum').textContent = `#${state.idx + 1}`;
    $('#cardNum2').textContent = `#${state.idx + 1}`;
    $('#cardCat').textContent = card.cat || '';
    
    $('#progressBar').style.width = `${(known / (deck?.cards.length || 1)) * 100}%`;
    $('#progressLabel').textContent = `${state.idx + 1}/${total}`;
    $('#knownCount').textContent = known;
    $('#unknownCount').textContent = learning;
    
    $('#tapHint').textContent = t('tapHint');
    
    // Flip state
    const cardEl = $('#card');
    cardEl.classList.toggle('flipped', state.flipped);
    $('#flipText').textContent = state.flipped ? t('flipHide') : t('flipShow');
    
    // Buttons
    const testBlock = state.settings.testMode && !state.flipped;
    $('#yesBtn').disabled = testBlock;
    $('#noBtn').disabled = testBlock;
    
    // Hint
    if (!state.flipped) hideHint();
  }
  
  // Settings toggles
  $('#toggleTest').classList.toggle('on', state.settings.testMode);
  $('#toggleSR').classList.toggle('on', state.settings.spacedRepetition);
  $('#toggleHard').classList.toggle('on', state.settings.hardOnly);
  $('#toggleShuffle').classList.toggle('on', state.settings.shuffle);
  
  // API key
  if (state.apiKey) $('#aiKey').value = state.apiKey;
  $('#aiProvider').value = state.apiProv;
  
  // Translations
  updateTranslations();
}

function updateTranslations() {
  $('#emptyTitle').textContent = t('emptyTitle');
  $('#emptyDesc').textContent = t('emptyDesc');
  $('#yesText').textContent = t('know');
  $('#noText').textContent = t('dontKnow');
  $('#uploadTitle').textContent = t('upload');
  $('#decksTitle').textContent = t('decks');
  $('#settingsTitle').textContent = t('settings');
  $('#aiTitle').textContent = t('aiGen');
  $('#editorTitle').textContent = t('editor');
  $('#testModeLabel').textContent = t('testMode');
  $('#testModeDesc').textContent = t('testModeDesc');
  $('#srLabel').textContent = t('sr');
  $('#srDesc').textContent = t('srDesc');
  $('#hardLabel').textContent = t('hard');
  $('#hardDesc').textContent = t('hardDesc');
  $('#shuffleLabel').textContent = t('shuffle');
  $('#shuffleDesc').textContent = t('shuffleDesc');
  $('#prevBtn').innerHTML = `← ${t('back')}`;
  $('#nextBtn').innerHTML = `${t('next')} →`;
  
  // Tagline
  document.querySelector('.brand-tagline').innerHTML = t('tagline');
}

function toggleFlip() {
  state.flipped = !state.flipped;
  render();
}

function toggleSection(id) {
  const sec = $(`#${id}`);
  sec.classList.toggle('open');
}

function toggleSetting(key) {
  state.settings[key] = !state.settings[key];
  state.idx = 0;
  save();
  render();
  
  if (key === 'hardOnly' && state.settings.hardOnly && !getCards().length) {
    toast(t('toastNoHard'), 'error');
  }
}

// ===== FILE HANDLING =====
function handleFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const res = parseCSV(e.target.result, file.name.replace(/\.[^.]+$/, ''));
      createDeck(res.name, res.cards);
      render();
      toast(t('toastLoaded') + res.cards.length, 'success');
    } catch (err) {
      toast(t('toastError'), 'error');
    }
  };
  reader.readAsText(file);
}

function handleURL(url) {
  if (!url) return;
  
  // Convert GitHub URLs
  if (/github\.com\/.+\/blob\//.test(url)) {
    url = url.replace('github.com/', 'raw.githubusercontent.com/').replace('/blob/', '/');
  }
  // Convert Google Sheets URLs
  if (url.includes('docs.google.com/spreadsheets/') && !/export\?format=csv/.test(url)) {
    url = url.replace(/\/edit.*$/, '/export?format=csv');
  }
  
  fetch(url, { cache: 'no-store' })
    .then(r => r.ok ? r.text() : Promise.reject())
    .then(text => {
      const name = decodeURIComponent(url.split('/').pop() || 'Remote');
      const res = parseCSV(text, name);
      createDeck(res.name, res.cards);
      render();
      toast(t('toastLoaded') + res.cards.length, 'success');
    })
    .catch(() => toast(t('toastError'), 'error'));
}

function loadDemo() {
  const demo = [
    { q: "Столица Франции?", a: "Париж", cat: "География" },
    { q: "2 + 2 = ?", a: "4", cat: "Математика" },
    { q: "Кто написал 'Война и мир'?", a: "Лев Толстой", cat: "Литература" },
    { q: "Формула воды?", a: "H₂O", cat: "Химия" },
    { q: "Год окончания ВОВ?", a: "1945", cat: "История" },
    { q: "Самая большая планета?", a: "Юпитер", cat: "Астрономия" },
    { q: "Кто нарисовал Мону Лизу?", a: "Леонардо да Винчи", cat: "Искусство" },
    { q: "Сколько континентов на Земле?", a: "7", cat: "География" },
  ];
  createDeck('Демо', demo);
  render();
  toast(t('toastLoaded') + demo.length, 'success');
}

function exportData() {
  const blob = new Blob([JSON.stringify({ decks: state.decks, stats: state.stats }, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `albinyok-flashcards_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
}

// ===== INIT =====
function init() {
  load();
  render();
  initSwipe();
  
  // Theme toggle
  $('#themeBtn').onclick = () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    save();
    render();
  };
  
  // Language
  $('#langSelect').onchange = e => {
    state.lang = e.target.value;
    save();
    render();
  };
  
  // Section headers
  $$('.section-header').forEach(h => {
    h.onclick = () => toggleSection(h.dataset.section);
  });
  
  // File upload
  $('#browseBtn').onclick = () => $('#fileInput').click();
  $('#fileInput').onchange = e => e.target.files[0] && handleFile(e.target.files[0]);
  
  // Drag & drop
  const drop = $('#dropZone');
  drop.ondragover = e => { e.preventDefault(); drop.classList.add('dragover'); };
  drop.ondragleave = () => drop.classList.remove('dragover');
  drop.ondrop = e => {
    e.preventDefault();
    drop.classList.remove('dragover');
    e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]);
  };
  
  // URL load
  $('#urlBtn').onclick = () => handleURL($('#urlInput').value.trim());
  
  // Demo
  $('#demoBtn').onclick = loadDemo;
  
  // Deck selection
  $('#deckList').onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
      state.deckId = id;
      state.idx = 0;
      state.category = null;
      save();
      render();
    }
  };
  
  // New/delete deck
  $('#newDeckBtn').onclick = () => {
    const name = prompt('Deck name:');
    if (name) { createDeck(name); render(); }
  };
  
  $('#delDeckBtn').onclick = () => {
    if (state.deckId && confirm(t('confirmDelete'))) {
      deleteDeck(state.deckId);
      render();
    }
  };
  
  // Category filter
  $('#catContainer').onclick = e => {
    const cat = e.target.dataset.cat;
    if (cat !== undefined) {
      state.category = cat || null;
      state.idx = 0;
      render();
    }
  };
  
  // Card controls
  $('#flipBtn').onclick = toggleFlip;
  $('#hintBtn').onclick = showHint;
  $('#yesBtn').onclick = () => mark(4);
  $('#noBtn').onclick = () => mark(1);
  
  // Navigation
  $('#prevBtn').onclick = () => {
    state.idx = Math.max(0, state.idx - 1);
    state.flipped = false;
    hideHint();
    render();
  };
  
  $('#nextBtn').onclick = () => {
    const cards = getCards();
    state.idx = Math.min(cards.length - 1, state.idx + 1);
    state.flipped = false;
    hideHint();
    render();
  };
  
  $('#shuffleBtn').onclick = () => {
    state.settings.shuffle = true;
    state.idx = 0;
    save();
    render();
  };
  
  // Settings toggles
  $$('.toggle').forEach(t => {
    t.onclick = () => toggleSetting(t.dataset.key);
  });
  
  // Reset/Export
  $('#resetBtn').onclick = () => {
    if (confirm(t('confirmReset'))) {
      const deck = getDeck();
      if (deck) deck.cards.forEach(c => c.sm2 = null);
      state.stats = { today: 0, streak: 0 };
      save();
      render();
      toast(t('toastReset'), 'success');
    }
  };
  
  $('#exportBtn').onclick = exportData;
  
  // Editor
  $('#editorBtn').onclick = openEditor;
  $('#addCardBtn').onclick = addCard;
  $('#saveCardsBtn').onclick = saveCards;
  
  // AI Generator
  $('#generateBtn').onclick = generateAI;
  $('#acceptBtn').onclick = acceptCards;
  $('#discardBtn').onclick = discardCards;
  
  // Save API key
  $('#aiKey').onchange = () => {
    state.apiKey = $('#aiKey').value.trim() || null;
    save();
  };
  $('#aiProvider').onchange = () => {
    state.apiProv = $('#aiProvider').value;
    save();
  };
  
  // Keyboard shortcuts
  document.onkeydown = e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    const cards = getCards();
    if (!cards.length) return;
    
    switch (e.code) {
      case 'Space':
        e.preventDefault();
        toggleFlip();
        break;
      case 'Digit1':
      case 'Numpad1':
        if (!state.settings.testMode || state.flipped) {
          e.preventDefault();
          mark(4);
        }
        break;
      case 'Digit2':
      case 'Numpad2':
        if (!state.settings.testMode || state.flipped) {
          e.preventDefault();
          mark(1);
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        state.idx = Math.max(0, state.idx - 1);
        state.flipped = false;
        hideHint();
        render();
        break;
      case 'ArrowRight':
        e.preventDefault();
        state.idx = Math.min(cards.length - 1, state.idx + 1);
        state.flipped = false;
        hideHint();
        render();
        break;
      case 'KeyH':
        e.preventDefault();
        if (!state.flipped) showHint();
        break;
    }
  };
  
  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
