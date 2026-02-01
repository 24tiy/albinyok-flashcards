/**
 * Albinyok Flashcards v3.0 - Premium Edition
 * Glassmorphism design with beautiful animations
 * Features: Swipe gestures, Hints, AI Generation, SM-2 Algorithm
 */

// ===== CONFIG =====
const CONFIG = {
  storageKey: 'albinyok-flashcards-v3',
  sm2: { defaultEF: 2.5, minEF: 1.3, maxEF: 3.0 }
};

// ===== TRANSLATIONS =====
const T = {
  ru: {
    tagline: 'Учись умнее',
    tapHint: 'Нажмите, чтобы увидеть ответ',
    flipShow: 'Показать ответ',
    flipHide: 'Скрыть ответ',
    know: 'Знаю',
    dontKnow: 'Не знаю',
    back: 'Назад',
    next: 'Далее',
    emptyTitle: 'Загрузите карточки',
    emptyDesc: 'Перетащите CSV файл или вставьте ссылку на Google Sheets',
    uploadTitle: 'Загрузить',
    decksTitle: 'Колоды',
    aiTitle: 'AI Генератор',
    settingsTitle: 'Настройки',
    editorTitle: 'Редактор карточек',
    testMode: 'Режим теста',
    testModeDesc: 'Ответить перед просмотром',
    sr: 'Интервальное повторение',
    srDesc: 'Алгоритм SM-2',
    hard: 'Только сложные',
    hardDesc: 'Фокус на трудных карточках',
    shuffle: 'Перемешать',
    shuffleDesc: 'Случайный порядок',
    allCats: 'Все',
    toastLoaded: 'Загружено: ',
    toastSaved: 'Сохранено!',
    toastError: 'Ошибка',
    toastReset: 'Прогресс сброшен',
    toastNoHard: 'Нет сложных карточек',
    toastNoText: 'Вставьте текст',
    toastGen: 'Сгенерировано: ',
    confirmReset: 'Сбросить весь прогресс?',
    confirmDelete: 'Удалить эту колоду?',
    browseFiles: 'Выбрать файл',
    loadDemo: 'Загрузить демо',
    loadUrl: 'Загрузить по ссылке',
    dragDrop: 'Перетащите',
    csvHere: 'CSV файл сюда',
    newDeck: 'Новая',
    deleteDeck: 'Удалить',
    generate: 'Сгенерировать',
    add: 'Добавить',
    save: 'Сохранить',
    cancel: 'Отмена',
    reset: 'Сброс',
    export: 'Экспорт',
    editor: 'Редактор'
  },
  en: {
    tagline: 'Learn smarter',
    tapHint: 'Tap to reveal answer',
    flipShow: 'Show answer',
    flipHide: 'Hide answer',
    know: 'Know',
    dontKnow: "Don't know",
    back: 'Back',
    next: 'Next',
    emptyTitle: 'Load your flashcards',
    emptyDesc: 'Drag & drop a CSV file or paste a Google Sheets link',
    uploadTitle: 'Upload',
    decksTitle: 'Decks',
    aiTitle: 'AI Generator',
    settingsTitle: 'Settings',
    editorTitle: 'Card Editor',
    testMode: 'Test mode',
    testModeDesc: 'Answer before reveal',
    sr: 'Spaced repetition',
    srDesc: 'SM-2 algorithm',
    hard: 'Hard cards only',
    hardDesc: 'Focus on difficult cards',
    shuffle: 'Shuffle',
    shuffleDesc: 'Random order',
    allCats: 'All',
    toastLoaded: 'Loaded: ',
    toastSaved: 'Saved!',
    toastError: 'Error',
    toastReset: 'Progress reset',
    toastNoHard: 'No hard cards',
    toastNoText: 'Paste text first',
    toastGen: 'Generated: ',
    confirmReset: 'Reset all progress?',
    confirmDelete: 'Delete this deck?',
    browseFiles: 'Browse files',
    loadDemo: 'Load demo',
    loadUrl: 'Load from URL',
    dragDrop: 'Drag & drop',
    csvHere: 'your CSV file here',
    newDeck: 'New',
    deleteDeck: 'Delete',
    generate: 'Generate',
    add: 'Add',
    save: 'Save',
    cancel: 'Cancel',
    reset: 'Reset',
    export: 'Export',
    editor: 'Editor'
  },
  fr: {
    tagline: 'Apprenez intelligemment',
    tapHint: 'Appuyez pour révéler',
    flipShow: 'Voir la réponse',
    flipHide: 'Cacher la réponse',
    know: 'Je sais',
    dontKnow: 'Je ne sais pas',
    back: 'Retour',
    next: 'Suivant',
    emptyTitle: 'Chargez vos cartes',
    emptyDesc: 'Glissez un fichier CSV ou collez un lien Google Sheets',
    uploadTitle: 'Charger',
    decksTitle: 'Paquets',
    aiTitle: 'Générateur IA',
    settingsTitle: 'Paramètres',
    editorTitle: 'Éditeur de cartes',
    testMode: 'Mode test',
    testModeDesc: 'Répondre avant de voir',
    sr: 'Répétition espacée',
    srDesc: 'Algorithme SM-2',
    hard: 'Cartes difficiles',
    hardDesc: 'Focus sur les difficiles',
    shuffle: 'Mélanger',
    shuffleDesc: 'Ordre aléatoire',
    allCats: 'Toutes',
    toastLoaded: 'Chargé: ',
    toastSaved: 'Enregistré!',
    toastError: 'Erreur',
    toastReset: 'Progression réinitialisée',
    toastNoHard: 'Pas de cartes difficiles',
    toastNoText: 'Collez du texte',
    toastGen: 'Généré: ',
    confirmReset: 'Réinitialiser tout?',
    confirmDelete: 'Supprimer ce paquet?',
    browseFiles: 'Parcourir',
    loadDemo: 'Charger démo',
    loadUrl: 'Charger depuis URL',
    dragDrop: 'Glissez-déposez',
    csvHere: 'votre fichier CSV ici',
    newDeck: 'Nouveau',
    deleteDeck: 'Supprimer',
    generate: 'Générer',
    add: 'Ajouter',
    save: 'Enregistrer',
    cancel: 'Annuler',
    reset: 'Réinit.',
    export: 'Exporter',
    editor: 'Éditeur'
  }
};

// ===== STATE =====
const state = {
  lang: 'ru',
  theme: 'dark',
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
        theme: d.theme || 'dark',
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
  state.category = null;
  save();
  return id;
}

function deleteDeck(id) {
  delete state.decks[id];
  const ids = Object.keys(state.decks);
  state.deckId = ids.length ? ids[0] : null;
  state.idx = 0;
  state.category = null;
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
  const el = $('#flashcard');
  el.classList.add(quality >= 3 ? 'correct' : 'incorrect');
  
  // Haptic feedback
  if (navigator.vibrate) {
    navigator.vibrate(quality >= 3 ? [10] : [20, 50, 20]);
  }
  
  setTimeout(() => {
    el.classList.remove('correct', 'incorrect');
    
    // Next card
    state.flipped = false;
    state.hintLvl = 0;
    
    const newCards = getCards();
    if (newCards.length === 0) {
      state.idx = 0;
    } else {
      state.idx = state.idx >= newCards.length ? 0 : state.idx;
      // Don't increment if we just removed a card from the filtered list
      if (newCards.length > 0 && state.idx < newCards.length - 1) {
        state.idx++;
      } else if (state.idx >= newCards.length) {
        state.idx = 0;
      }
    }
    
    render();
  }, 300);
}

// ===== HINT SYSTEM =====
function getHint(answer, lvl) {
  if (!answer || lvl === 0) return '';
  const len = answer.length;
  const words = answer.split(' ');
  
  if (lvl === 1) {
    return answer[0] + ' •••';
  }
  if (lvl === 2) {
    return answer.slice(0, Math.ceil(len * 0.25)) + '...';
  }
  if (lvl === 3) {
    if (words.length > 1) {
      return words[0] + ' ' + words[1][0] + '...';
    }
    return answer.slice(0, Math.ceil(len * 0.5)) + '...';
  }
  return answer.slice(0, Math.ceil(len * 0.75)) + '...';
}

function showHint() {
  const cards = getCards();
  const card = cards[state.idx];
  if (!card) return;
  
  state.hintLvl = Math.min(state.hintLvl + 1, 4);
  $('#hintText').textContent = getHint(card.a, state.hintLvl);
  $('#hintBox').classList.remove('hidden');
  
  if (state.hintLvl >= 4) {
    $('#hintBtn').disabled = true;
  }
}

function hideHint() {
  state.hintLvl = 0;
  $('#hintBox').classList.add('hidden');
  $('#hintBtn').disabled = false;
}

// ===== SWIPE GESTURES =====
function initSwipe() {
  const container = $('#cardContainer');
  const card = $('#flashcard');
  const swL = $('#swipeL');
  const swR = $('#swipeR');
  
  let startX = 0, startY = 0, curX = 0, curY = 0;
  let isDragging = false;
  let startTime = 0;
  
  const onStart = (x, y) => {
    startX = curX = x;
    startY = curY = y;
    startTime = Date.now();
    isDragging = true;
    card.classList.add('swiping');
  };
  
  const onMove = (x, y) => {
    if (!isDragging) return;
    
    curX = x;
    curY = y;
    const diffX = curX - startX;
    const diffY = curY - startY;
    
    // Only horizontal swipes
    if (Math.abs(diffY) > Math.abs(diffX) * 1.5) return;
    
    const rotation = diffX * 0.08;
    const baseTransform = state.flipped ? 'rotateY(180deg) ' : '';
    const moveX = state.flipped ? -diffX : diffX;
    
    card.style.transform = `${baseTransform}translateX(${moveX}px) rotate(${rotation}deg)`;
    
    // Show indicators
    if (diffX < -60) {
      swL.classList.add('show');
      swR.classList.remove('show');
    } else if (diffX > 60) {
      swR.classList.add('show');
      swL.classList.remove('show');
    } else {
      swL.classList.remove('show');
      swR.classList.remove('show');
    }
  };
  
  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    
    const diffX = curX - startX;
    const velocity = Math.abs(diffX) / (Date.now() - startTime);
    const threshold = velocity > 0.5 ? 50 : 100;
    
    card.classList.remove('swiping');
    card.style.transform = '';
    swL.classList.remove('show');
    swR.classList.remove('show');
    
    if (diffX < -threshold) {
      // Swipe left - Don't know
      card.classList.add('swipe-left');
      setTimeout(() => {
        card.classList.remove('swipe-left');
        mark(1);
      }, 300);
    } else if (diffX > threshold) {
      // Swipe right - Know
      card.classList.add('swipe-right');
      setTimeout(() => {
        card.classList.remove('swipe-right');
        mark(4);
      }, 300);
    }
  };
  
  // Touch events
  container.addEventListener('touchstart', e => {
    if (e.touches.length === 1) {
      onStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
  
  container.addEventListener('touchmove', e => {
    if (e.touches.length === 1) {
      onMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
  
  container.addEventListener('touchend', onEnd, { passive: true });
  container.addEventListener('touchcancel', onEnd, { passive: true });
  
  // Mouse events for desktop
  container.addEventListener('mousedown', e => {
    onStart(e.clientX, e.clientY);
  });
  
  document.addEventListener('mousemove', e => {
    onMove(e.clientX, e.clientY);
  });
  
  document.addEventListener('mouseup', onEnd);
  
  // Click to flip
  container.addEventListener('click', e => {
    const moved = Math.abs(curX - startX) > 10;
    if (!moved) {
      toggleFlip();
    }
  });
}

// ===== CSV PARSING =====
function parseCSV(text, name) {
  const parsed = Papa.parse(text.trim(), { skipEmptyLines: true });
  const rows = parsed.data;
  if (rows.length < 2) throw new Error('Not enough data');
  
  const first = rows[0][0]?.toLowerCase() || '';
  const hasHeader = ['q', 'question', 'вопрос', 'front'].includes(first);
  const start = hasHeader ? 1 : 0;
  
  const cards = [];
  for (let i = start; i < rows.length; i++) {
    const r = rows[i];
    if (r[0] || r[1]) {
      cards.push({
        q: r[0]?.trim() || '',
        a: r[1]?.trim() || '',
        cat: r[2]?.trim() || ''
      });
    }
  }
  
  if (!cards.length) throw new Error('No cards');
  return { name, cards };
}

// ===== AI GENERATOR =====
async function generateAI() {
  const text = $('#aiText').value.trim();
  if (!text) {
    toast(t('toastNoText'), 'error');
    return;
  }
  
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
  const prompt = `Create exactly ${count} flashcards from this text. ${langInstr}
Return ONLY a JSON array with objects containing "question" and "answer" fields.
No markdown, no explanation, just the JSON array.
Example format: [{"question":"What is X?","answer":"X is Y"}]

Text to analyze:
${text.slice(0, 8000)}`;
  
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
  
  // Extract JSON
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
    const def = trimmed.match(/^(.{5,40})\s+(?:is|are|это|est|sont|—|–|-)\s+(.{10,})/i);
    if (def) {
      cards.push({
        q: `What is ${def[1].trim()}?`,
        a: def[2].trim(),
        cat: 'Auto'
      });
      continue;
    }
    
    // Fill blank
    const words = trimmed.split(' ').filter(w => w.length > 5 && /^[a-zA-Zа-яА-ЯёЁ]/.test(w));
    if (words.length > 3) {
      const key = words[Math.floor(words.length / 2)];
      cards.push({
        q: trimmed.replace(new RegExp(key, 'i'), '_____'),
        a: key,
        cat: 'Auto'
      });
    }
  }
  
  return cards.slice(0, count);
}

function showPreview(cards) {
  const list = $('#aiPreviewList');
  list.innerHTML = cards.map((c, i) => `
    <div class="preview-item">
      <input value="${c.q.replace(/"/g, '&quot;')}" data-i="${i}" data-f="q" placeholder="Question">
      <input value="${c.a.replace(/"/g, '&quot;')}" data-i="${i}" data-f="a" placeholder="Answer">
      <button onclick="removePreview(${i})">✕</button>
    </div>
  `).join('');
  $('#aiPreview').classList.remove('hidden');
}

window.removePreview = i => {
  state.genCards.splice(i, 1);
  if (state.genCards.length === 0) {
    discardCards();
  } else {
    showPreview(state.genCards);
  }
};

function acceptCards() {
  $$('#aiPreviewList input').forEach(inp => {
    const i = +inp.dataset.i, f = inp.dataset.f;
    if (state.genCards[i]) state.genCards[i][f] = inp.value.trim();
  });
  
  const valid = state.genCards.filter(c => c.q && c.a);
  if (!valid.length) return;
  
  if (state.deckId && state.decks[state.deckId]) {
    valid.forEach(c => {
      state.decks[state.deckId].cards.push({
        id: genId(),
        q: c.q,
        a: c.a,
        cat: c.cat || 'AI',
        sm2: null
      });
    });
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
      <div class="editor-item-actions">
        <button onclick="delCard(${i})">Delete</button>
      </div>
    </div>
  `).join('');
  
  $('#secEditor').classList.remove('hidden');
  $('#secEditor').classList.add('open');
  
  // Scroll to editor
  setTimeout(() => {
    $('#secEditor').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

window.delCard = i => {
  getDeck()?.cards.splice(i, 1);
  save();
  openEditor();
};

function addCard() {
  const deck = getDeck();
  if (!deck) {
    createDeck('New Deck', []);
  }
  getDeck().cards.push({ id: genId(), q: '', a: '', cat: '', sm2: null });
  save();
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
  $('#secEditor').classList.remove('open');
  render();
  toast(t('toastSaved'), 'success');
}

// ===== TOAST =====
function toast(msg, type = 'info') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'} ${msg}`;
  $('#toastContainer').appendChild(el);
  
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(-20px) scale(0.9)';
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

// ===== UI RENDERING =====
function render() {
  const hasDecks = Object.keys(state.decks).length > 0;
  const cards = getCards();
  const hasCards = cards.length > 0;
  
  // Language
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
        ${d.name} <span style="opacity:0.6">(${d.cards.length})</span>
      </div>
    `).join('');
  }
  
  // Categories
  const cats = getCategories();
  if (cats.length > 0) {
    $('#catContainer').classList.remove('hidden');
    $('#catContainer').innerHTML = `
      <button class="cat-pill ${!state.category ? 'active' : ''}" data-cat="">${t('allCats')}</button>
      ${cats.map(c => `
        <button class="cat-pill ${state.category === c ? 'active' : ''}" data-cat="${c}">${c}</button>
      `).join('')}
    `;
  } else {
    $('#catContainer').classList.add('hidden');
  }
  
  // Card
  if (hasCards) {
    const card = cards[state.idx] || cards[0];
    if (!card) return;
    
    const total = cards.length;
    const deck = getDeck();
    const known = deck?.cards.filter(c => c.sm2?.reps >= 3).length || 0;
    const learning = deck?.cards.filter(c => c.sm2 && c.sm2.reps < 3).length || 0;
    
    $('#questionText').textContent = card.q;
    $('#answerText').textContent = card.a;
    $('#cardNum').textContent = `#${state.idx + 1}`;
    $('#cardNum2').textContent = `#${state.idx + 1}`;
    
    const catEl = $('#cardCat');
    if (card.cat) {
      catEl.textContent = card.cat;
      catEl.style.display = '';
    } else {
      catEl.style.display = 'none';
    }
    
    const progress = deck?.cards.length ? (known / deck.cards.length) * 100 : 0;
    $('#progressFill').style.width = `${progress}%`;
    $('#progressLabel').textContent = `${state.idx + 1}/${total}`;
    $('#knownCount').textContent = known;
    $('#unknownCount').textContent = learning;
    
    // Flip state
    const cardEl = $('#flashcard');
    cardEl.classList.toggle('flipped', state.flipped);
    $('#flipText').textContent = state.flipped ? t('flipHide') : t('flipShow');
    
    // Buttons state
    const testBlock = state.settings.testMode && !state.flipped;
    $('#yesBtn').disabled = testBlock;
    $('#noBtn').disabled = testBlock;
    
    // Hint
    if (!state.flipped) {
      hideHint();
    }
  }
  
  // Settings toggles
  $('#toggleTest').classList.toggle('on', state.settings.testMode);
  $('#toggleSR').classList.toggle('on', state.settings.spacedRepetition);
  $('#toggleHard').classList.toggle('on', state.settings.hardOnly);
  $('#toggleShuffle').classList.toggle('on', state.settings.shuffle);
  
  // API key
  if (state.apiKey) $('#aiKey').value = state.apiKey;
  $('#aiProvider').value = state.apiProv;
  
  // Update translations
  updateTranslations();
}

function updateTranslations() {
  $('#brandTagline').textContent = t('tagline');
  $('#tapHintText').textContent = t('tapHint');
  $('#emptyTitle').textContent = t('emptyTitle');
  $('#emptyDesc').textContent = t('emptyDesc');
  $('#uploadTitle').textContent = t('uploadTitle');
  $('#decksTitle').textContent = t('decksTitle');
  $('#aiTitle').textContent = t('aiTitle');
  $('#settingsTitle').textContent = t('settingsTitle');
  $('#editorTitle').textContent = t('editorTitle');
  
  $('#yesText').textContent = t('know');
  $('#noText').textContent = t('dontKnow');
  $('#prevText').textContent = t('back');
  $('#nextText').textContent = t('next');
  
  $('#testModeLabel').textContent = t('testMode');
  $('#testModeDesc').textContent = t('testModeDesc');
  $('#srLabel').textContent = t('sr');
  $('#srDesc').textContent = t('srDesc');
  $('#hardLabel').textContent = t('hard');
  $('#hardDesc').textContent = t('hardDesc');
  $('#shuffleLabel').textContent = t('shuffle');
  $('#shuffleDesc').textContent = t('shuffleDesc');
  
  $('#browseBtn').innerHTML = t('browseFiles');
  $('#demoBtn').innerHTML = t('loadDemo');
  $('#urlBtn').innerHTML = t('loadUrl');
  $('#newDeckBtn').innerHTML = `➕ ${t('newDeck')}`;
  $('#delDeckBtn').innerHTML = `🗑 ${t('deleteDeck')}`;
  $('#generateBtn').innerHTML = `✨ ${t('generate')}`;
  $('#acceptBtn').innerHTML = `✓ ${t('add')}`;
  $('#discardBtn').innerHTML = t('cancel');
  $('#resetBtn').innerHTML = `🔄 ${t('reset')}`;
  $('#exportBtn').innerHTML = `📤 ${t('export')}`;
  $('#editorBtn').innerHTML = `✏️ ${t('editor')}`;
  $('#addCardBtn').innerHTML = `➕ ${t('add')}`;
  $('#saveCardsBtn').innerHTML = `💾 ${t('save')}`;
  
  // Upload zone
  const uploadText = $('.upload-text');
  if (uploadText) {
    uploadText.innerHTML = `<strong>${t('dragDrop')}</strong> ${t('csvHere')}`;
  }
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
      const name = file.name.replace(/\.[^.]+$/, '');
      const res = parseCSV(e.target.result, name);
      createDeck(res.name, res.cards);
      render();
      toast(t('toastLoaded') + res.cards.length, 'success');
    } catch (err) {
      toast(t('toastError'), 'error');
      console.error(err);
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
      const name = decodeURIComponent(url.split('/').pop()?.split('?')[0] || 'Remote');
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
    { q: "Год окончания Второй мировой войны?", a: "1945", cat: "История" },
    { q: "Самая большая планета Солнечной системы?", a: "Юпитер", cat: "Астрономия" },
    { q: "Кто нарисовал Мону Лизу?", a: "Леонардо да Винчи", cat: "Искусство" },
    { q: "Сколько континентов на Земле?", a: "7", cat: "География" },
    { q: "Химический символ золота?", a: "Au", cat: "Химия" },
    { q: "Автор 'Преступления и наказания'?", a: "Фёдор Достоевский", cat: "Литература" },
  ];
  createDeck('Демо', demo);
  render();
  toast(t('toastLoaded') + demo.length, 'success');
}

function exportData() {
  const data = {
    version: '3.0',
    exported: new Date().toISOString(),
    decks: state.decks,
    stats: state.stats
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
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
  
  // Language
  $('#langSelect').onchange = e => {
    state.lang = e.target.value;
    save();
    render();
  };
  
  // Theme (always dark for this design)
  $('#themeBtn').onclick = () => {
    // This design is optimized for dark mode
    toast('This design is optimized for dark mode ✨', 'info');
  };
  
  // Section headers
  $$('.section-header').forEach(h => {
    h.onclick = () => toggleSection(h.dataset.section);
  });
  
  // File upload
  $('#browseBtn').onclick = () => $('#fileInput').click();
  $('#fileInput').onchange = e => {
    if (e.target.files[0]) handleFile(e.target.files[0]);
  };
  
  // Drag & drop
  const dropZone = $('#dropZone');
  
  dropZone.ondragover = e => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  };
  
  dropZone.ondragleave = e => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
  };
  
  dropZone.ondrop = e => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  };
  
  // URL load
  $('#urlBtn').onclick = () => handleURL($('#urlInput').value.trim());
  $('#urlInput').onkeydown = e => {
    if (e.key === 'Enter') handleURL($('#urlInput').value.trim());
  };
  
  // Demo
  $('#demoBtn').onclick = loadDemo;
  
  // Deck selection
  $('#deckList').onclick = e => {
    const chip = e.target.closest('.deck-chip');
    if (chip?.dataset.id) {
      state.deckId = chip.dataset.id;
      state.idx = 0;
      state.category = null;
      state.flipped = false;
      save();
      render();
    }
  };
  
  // New/delete deck
  $('#newDeckBtn').onclick = () => {
    const name = prompt('Deck name / Название колоды:');
    if (name) {
      createDeck(name);
      render();
    }
  };
  
  $('#delDeckBtn').onclick = () => {
    if (state.deckId && confirm(t('confirmDelete'))) {
      deleteDeck(state.deckId);
      render();
    }
  };
  
  // Category filter
  $('#catContainer').onclick = e => {
    const pill = e.target.closest('.cat-pill');
    if (pill) {
      const cat = pill.dataset.cat;
      state.category = cat || null;
      state.idx = 0;
      state.flipped = false;
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
    if (state.idx > 0) {
      state.idx--;
      state.flipped = false;
      hideHint();
      render();
    }
  };
  
  $('#nextBtn').onclick = () => {
    const cards = getCards();
    if (state.idx < cards.length - 1) {
      state.idx++;
      state.flipped = false;
      hideHint();
      render();
    }
  };
  
  $('#shuffleNavBtn').onclick = () => {
    state.settings.shuffle = !state.settings.shuffle;
    state.idx = 0;
    state.flipped = false;
    save();
    render();
    toast(state.settings.shuffle ? '🔀 Shuffled!' : '📋 In order', 'success');
  };
  
  // Settings toggles
  $$('.toggle').forEach(toggle => {
    toggle.onclick = () => toggleSetting(toggle.dataset.key);
  });
  
  // Reset
  $('#resetBtn').onclick = () => {
    if (confirm(t('confirmReset'))) {
      const deck = getDeck();
      if (deck) {
        deck.cards.forEach(c => c.sm2 = null);
      }
      state.stats = { today: 0, streak: 0 };
      state.idx = 0;
      save();
      render();
      toast(t('toastReset'), 'success');
    }
  };
  
  // Export
  $('#exportBtn').onclick = exportData;
  
  // Editor
  $('#editorBtn').onclick = openEditor;
  $('#addCardBtn').onclick = addCard;
  $('#saveCardsBtn').onclick = saveCards;
  
  // AI Generator
  $('#generateBtn').onclick = generateAI;
  $('#acceptBtn').onclick = acceptCards;
  $('#discardBtn').onclick = discardCards;
  
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
    // Ignore if typing in input
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
          mark(4); // Know
        }
        break;
      case 'Digit2':
      case 'Numpad2':
        if (!state.settings.testMode || state.flipped) {
          e.preventDefault();
          mark(1); // Don't know
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (state.idx > 0) {
          state.idx--;
          state.flipped = false;
          hideHint();
          render();
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (state.idx < cards.length - 1) {
          state.idx++;
          state.flipped = false;
          hideHint();
          render();
        }
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

// Start the app
document.addEventListener('DOMContentLoaded', init);
