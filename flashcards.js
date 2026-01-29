/**
 * Albinyok Flashcards v2.0
 * Features: Spaced Repetition (SM-2), Multiple Decks, Statistics, Dark Theme, Keyboard Shortcuts
 */

// ==================== CONFIGURATION ====================
const CONFIG = {
  storageKey: 'albinyok-flashcards-v2',
  maxDecks: 20,
  sm2: {
    defaultEaseFactor: 2.5,
    minEaseFactor: 1.3,
    maxEaseFactor: 3.0,
    graduatingInterval: 1,
    easyInterval: 4
  }
};

// ==================== TRANSLATIONS ====================
const translations = {
  ru: {
    siteTitle: "Albinyok Flashcards",
    siteSubtitle: "Умные карточки с интервальным повторением",
    uploadTitle: "Загрузка карточек",
    dragText: "Перетащите",
    orText: "CSV файл сюда или",
    browseText: "Выбрать файл",
    demoText: "Демо набор",
    templateText: "Шаблон CSV",
    loadUrlText: "Загрузить",
    decksTitle: "Ваши колоды",
    newDeckText: "Новая колода",
    deleteDeckText: "Удалить",
    progressLabel: "Прогресс",
    streakLabel: "подряд",
    revealText: "Показать ответ",
    knowText: "Знаю",
    dontKnowText: "Не знаю",
    hintReveal: "перевернуть",
    hintKnow: "знаю",
    hintDontKnow: "не знаю",
    hintNav: "навигация",
    settingsTitle: "Настройки",
    testModeLabel: "Режим теста",
    testModeDesc: "Нужно ответить перед результатом",
    spacedRepLabel: "Интервальное повторение",
    spacedRepDesc: "Алгоритм SM-2 для эффективного обучения",
    hardOnlyLabel: "Только сложные",
    hardOnlyDesc: "Фокус на трудных карточках",
    shuffleLabel: "Перемешать",
    shuffleDesc: "Случайный порядок карточек",
    resetText: "Сбросить прогресс",
    exportText: "Экспорт данных",
    editorText: "Редактор карточек",
    statsTitle: "Статистика",
    totalCardsLabel: "Всего карточек",
    masteredLabel: "Изучено",
    learningLabel: "В процессе",
    reviewsTodayLabel: "Повторений сегодня",
    weekActivityLabel: "Эта неделя",
    editorTitle: "Редактор карточек",
    questionHeader: "Вопрос",
    answerHeader: "Ответ",
    categoryHeader: "Категория",
    addCardText: "Добавить",
    saveCardsText: "Сохранить",
    closeEditorText: "Закрыть",
    footerText: "Сделано с ❤️",
    toastSaved: "Сохранено!",
    toastReset: "Прогресс сброшен",
    toastError: "Ошибка",
    toastLoaded: "Загружено карточек: ",
    toastNoHard: "Нет сложных карточек!",
    allCategories: "Все",
    confirmDelete: "Удалить эту колоду?",
    confirmReset: "Сбросить весь прогресс?",
    deckDefault: "Основная колода"
  },
  en: {
    siteTitle: "Albinyok Flashcards",
    siteSubtitle: "Smart spaced repetition for efficient learning",
    uploadTitle: "Load Your Flashcards",
    dragText: "Drag & drop",
    orText: "your CSV file here, or",
    browseText: "Browse Files",
    demoText: "Load Demo",
    templateText: "Download Template",
    loadUrlText: "Load URL",
    decksTitle: "Your Decks",
    newDeckText: "New Deck",
    deleteDeckText: "Delete Deck",
    progressLabel: "Progress",
    streakLabel: "streak",
    revealText: "Show Answer",
    knowText: "Know",
    dontKnowText: "Don't Know",
    hintReveal: "flip card",
    hintKnow: "know",
    hintDontKnow: "don't know",
    hintNav: "navigate",
    settingsTitle: "Settings",
    testModeLabel: "Test Mode",
    testModeDesc: "Must answer before seeing result",
    spacedRepLabel: "Spaced Repetition",
    spacedRepDesc: "SM-2 algorithm for optimal learning",
    hardOnlyLabel: "Hard Cards Only",
    hardOnlyDesc: "Focus on difficult cards",
    shuffleLabel: "Shuffle",
    shuffleDesc: "Randomize card order",
    resetText: "Reset Progress",
    exportText: "Export Data",
    editorText: "Card Editor",
    statsTitle: "Statistics",
    totalCardsLabel: "Total Cards",
    masteredLabel: "Mastered",
    learningLabel: "Learning",
    reviewsTodayLabel: "Today's Reviews",
    weekActivityLabel: "This Week",
    editorTitle: "Card Editor",
    questionHeader: "Question",
    answerHeader: "Answer",
    categoryHeader: "Category",
    addCardText: "Add Card",
    saveCardsText: "Save Changes",
    closeEditorText: "Close",
    footerText: "Built with ❤️",
    toastSaved: "Saved!",
    toastReset: "Progress reset",
    toastError: "Error",
    toastLoaded: "Cards loaded: ",
    toastNoHard: "No hard cards!",
    allCategories: "All",
    confirmDelete: "Delete this deck?",
    confirmReset: "Reset all progress?",
    deckDefault: "Main Deck"
  },
  fr: {
    siteTitle: "Albinyok Flashcards",
    siteSubtitle: "Répétition espacée intelligente",
    uploadTitle: "Charger vos cartes",
    dragText: "Glissez-déposez",
    orText: "votre fichier CSV ici, ou",
    browseText: "Parcourir",
    demoText: "Démo",
    templateText: "Modèle CSV",
    loadUrlText: "Charger",
    decksTitle: "Vos paquets",
    newDeckText: "Nouveau paquet",
    deleteDeckText: "Supprimer",
    progressLabel: "Progression",
    streakLabel: "série",
    revealText: "Voir la réponse",
    knowText: "Je sais",
    dontKnowText: "Je ne sais pas",
    hintReveal: "retourner",
    hintKnow: "je sais",
    hintDontKnow: "je ne sais pas",
    hintNav: "naviguer",
    settingsTitle: "Paramètres",
    testModeLabel: "Mode test",
    testModeDesc: "Répondre avant de voir le résultat",
    spacedRepLabel: "Répétition espacée",
    spacedRepDesc: "Algorithme SM-2 pour un apprentissage optimal",
    hardOnlyLabel: "Cartes difficiles",
    hardOnlyDesc: "Concentrez-vous sur les difficiles",
    shuffleLabel: "Mélanger",
    shuffleDesc: "Ordre aléatoire",
    resetText: "Réinitialiser",
    exportText: "Exporter",
    editorText: "Éditeur",
    statsTitle: "Statistiques",
    totalCardsLabel: "Total cartes",
    masteredLabel: "Maîtrisées",
    learningLabel: "En cours",
    reviewsTodayLabel: "Révisions aujourd'hui",
    weekActivityLabel: "Cette semaine",
    editorTitle: "Éditeur de cartes",
    questionHeader: "Question",
    answerHeader: "Réponse",
    categoryHeader: "Catégorie",
    addCardText: "Ajouter",
    saveCardsText: "Enregistrer",
    closeEditorText: "Fermer",
    footerText: "Fait avec ❤️",
    toastSaved: "Enregistré!",
    toastReset: "Progression réinitialisée",
    toastError: "Erreur",
    toastLoaded: "Cartes chargées: ",
    toastNoHard: "Pas de cartes difficiles!",
    allCategories: "Toutes",
    confirmDelete: "Supprimer ce paquet?",
    confirmReset: "Réinitialiser toute la progression?",
    deckDefault: "Paquet principal"
  }
};

// ==================== STATE ====================
const state = {
  lang: 'en',
  theme: 'light',
  soundEnabled: true,
  decks: {},
  currentDeckId: null,
  currentIndex: 0,
  isFlipped: false,
  settings: {
    testMode: false,
    spacedRepetition: true,
    hardOnly: false,
    shuffle: false
  },
  statistics: {
    reviewsToday: 0,
    lastReviewDate: null,
    streak: 0,
    weekActivity: [false, false, false, false, false, false, false]
  },
  filteredCards: [],
  selectedCategory: null
};

// ==================== DOM ELEMENTS ====================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ==================== UTILITIES ====================
function t(key) {
  return translations[state.lang]?.[key] || translations.en[key] || key;
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function getDaysDiff(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2 - d1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function isToday(date) {
  const today = new Date();
  const d = new Date(date);
  return d.toDateString() === today.toDateString();
}

// ==================== SOUND EFFECTS ====================
const sounds = {
  flip: null,
  correct: null,
  incorrect: null
};

function initSounds() {
  // Create audio context for generating sounds
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    
    sounds.flip = () => playTone(audioCtx, 800, 0.05, 'sine');
    sounds.correct = () => {
      playTone(audioCtx, 523.25, 0.1, 'sine');
      setTimeout(() => playTone(audioCtx, 659.25, 0.1, 'sine'), 100);
      setTimeout(() => playTone(audioCtx, 783.99, 0.15, 'sine'), 200);
    };
    sounds.incorrect = () => {
      playTone(audioCtx, 200, 0.15, 'sawtooth');
    };
  } catch (e) {
    console.log('Audio not supported');
  }
}

function playTone(ctx, freq, duration, type) {
  if (!state.soundEnabled) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.value = freq;
  osc.type = type;
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

function playSound(name) {
  if (state.soundEnabled && sounds[name]) {
    sounds[name]();
  }
}

// ==================== SM-2 ALGORITHM ====================
function sm2Calculate(card, quality) {
  // Quality: 0-2 = again, 3 = hard, 4 = good, 5 = easy
  let { easeFactor = CONFIG.sm2.defaultEaseFactor, interval = 0, repetitions = 0 } = card.sm2 || {};
  
  if (quality < 3) {
    // Failed - reset
    repetitions = 0;
    interval = 1;
  } else {
    // Success
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions++;
    
    // Update ease factor
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    easeFactor = Math.max(CONFIG.sm2.minEaseFactor, Math.min(CONFIG.sm2.maxEaseFactor, easeFactor));
  }
  
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);
  
  return {
    easeFactor,
    interval,
    repetitions,
    nextReview: nextReview.toISOString(),
    lastReview: new Date().toISOString()
  };
}

function isCardDueForReview(card) {
  if (!state.settings.spacedRepetition) return true;
  if (!card.sm2 || !card.sm2.nextReview) return true;
  return new Date(card.sm2.nextReview) <= new Date();
}

// ==================== STORAGE ====================
function saveState() {
  const data = {
    lang: state.lang,
    theme: state.theme,
    soundEnabled: state.soundEnabled,
    decks: state.decks,
    currentDeckId: state.currentDeckId,
    settings: state.settings,
    statistics: state.statistics
  };
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
}

function loadState() {
  try {
    const data = JSON.parse(localStorage.getItem(CONFIG.storageKey));
    if (data) {
      state.lang = data.lang || 'en';
      state.theme = data.theme || 'light';
      state.soundEnabled = data.soundEnabled !== false;
      state.decks = data.decks || {};
      state.currentDeckId = data.currentDeckId;
      state.settings = { ...state.settings, ...data.settings };
      state.statistics = { ...state.statistics, ...data.statistics };
      
      // Update daily stats
      if (state.statistics.lastReviewDate && !isToday(state.statistics.lastReviewDate)) {
        state.statistics.reviewsToday = 0;
      }
      
      return true;
    }
  } catch (e) {
    console.error('Failed to load state:', e);
  }
  return false;
}

// ==================== DECK MANAGEMENT ====================
function createDeck(name, cards = []) {
  const id = generateId();
  state.decks[id] = {
    id,
    name: name || t('deckDefault'),
    cards: cards.map(c => ({
      id: generateId(),
      question: c.question || c.q || c[0] || '',
      answer: c.answer || c.a || c[1] || '',
      category: c.category || c.cat || c[2] || '',
      sm2: null,
      created: new Date().toISOString()
    })),
    created: new Date().toISOString()
  };
  state.currentDeckId = id;
  saveState();
  return id;
}

function getCurrentDeck() {
  return state.decks[state.currentDeckId];
}

function getCurrentCards() {
  const deck = getCurrentDeck();
  if (!deck) return [];
  
  let cards = [...deck.cards];
  
  // Filter by category
  if (state.selectedCategory) {
    cards = cards.filter(c => c.category === state.selectedCategory);
  }
  
  // Filter hard only
  if (state.settings.hardOnly) {
    cards = cards.filter(c => c.sm2 && c.sm2.repetitions < 2);
  }
  
  // Filter due for review (if spaced repetition is enabled)
  if (state.settings.spacedRepetition) {
    cards = cards.filter(isCardDueForReview);
  }
  
  // Shuffle if enabled
  if (state.settings.shuffle) {
    cards = shuffleArray(cards);
  }
  
  return cards;
}

function getCategories() {
  const deck = getCurrentDeck();
  if (!deck) return [];
  const cats = new Set(deck.cards.map(c => c.category).filter(Boolean));
  return [...cats].sort();
}

function deleteDeck(id) {
  delete state.decks[id];
  if (state.currentDeckId === id) {
    const deckIds = Object.keys(state.decks);
    state.currentDeckId = deckIds.length > 0 ? deckIds[0] : null;
  }
  saveState();
}

// ==================== CARD OPERATIONS ====================
function markCard(quality) {
  const cards = getCurrentCards();
  const card = cards[state.currentIndex];
  if (!card) return;
  
  const deck = getCurrentDeck();
  const cardIndex = deck.cards.findIndex(c => c.id === card.id);
  
  if (cardIndex !== -1) {
    deck.cards[cardIndex].sm2 = sm2Calculate(card, quality);
    
    // Update statistics
    state.statistics.reviewsToday++;
    state.statistics.lastReviewDate = new Date().toISOString();
    
    saveState();
  }
  
  playSound(quality >= 3 ? 'correct' : 'incorrect');
  
  // Move to next card
  state.isFlipped = false;
  state.currentIndex++;
  if (state.currentIndex >= getCurrentCards().length) {
    state.currentIndex = 0;
  }
  
  updateUI();
}

// ==================== CSV PARSING ====================
function parseCSV(text, name) {
  const parsed = Papa.parse(text.trim(), { skipEmptyLines: true });
  if (parsed.errors.length > 0) {
    throw new Error('Invalid CSV format');
  }
  
  const rows = parsed.data;
  if (rows.length < 2) {
    throw new Error('Not enough data');
  }
  
  // Check for header
  const firstRow = rows[0];
  const hasHeader = ['question', 'q', 'вопрос', 'frage'].includes(firstRow[0]?.toLowerCase());
  
  const startIndex = hasHeader ? 1 : 0;
  const cards = [];
  
  for (let i = startIndex; i < rows.length; i++) {
    const row = rows[i];
    if (row.length >= 2 && (row[0] || row[1])) {
      cards.push({
        question: row[0]?.trim() || '',
        answer: row[1]?.trim() || '',
        category: row[2]?.trim() || ''
      });
    }
  }
  
  if (cards.length === 0) {
    throw new Error('No valid cards found');
  }
  
  return { name, cards };
}

// ==================== UI UPDATES ====================
function updateLanguage() {
  document.documentElement.lang = state.lang;
  $('#langSelect').value = state.lang;
  
  // Update all translatable elements
  $('#siteTitle').textContent = t('siteTitle');
  $('#siteSubtitle').textContent = t('siteSubtitle');
  $('#uploadTitle').textContent = t('uploadTitle');
  $('#dragText').textContent = t('dragText');
  $('#orText').textContent = t('orText');
  $('#browseText').textContent = t('browseText');
  $('#demoText').textContent = t('demoText');
  $('#templateText').textContent = t('templateText');
  $('#loadUrlText').textContent = t('loadUrlText');
  $('#decksTitle').textContent = t('decksTitle');
  $('#newDeckText').textContent = t('newDeckText');
  $('#deleteDeckText').textContent = t('deleteDeckText');
  $('#progressLabel').textContent = t('progressLabel');
  $('#streakLabel').textContent = t('streakLabel');
  $('#revealText').textContent = t('revealText');
  $('#knowText').textContent = t('knowText');
  $('#dontKnowText').textContent = t('dontKnowText');
  $('#hintReveal').textContent = t('hintReveal');
  $('#hintKnow').textContent = t('hintKnow');
  $('#hintDontKnow').textContent = t('hintDontKnow');
  $('#hintNav').textContent = t('hintNav');
  $('#settingsTitle').textContent = t('settingsTitle');
  $('#testModeLabel').textContent = t('testModeLabel');
  $('#testModeDesc').textContent = t('testModeDesc');
  $('#spacedRepLabel').textContent = t('spacedRepLabel');
  $('#spacedRepDesc').textContent = t('spacedRepDesc');
  $('#hardOnlyLabel').textContent = t('hardOnlyLabel');
  $('#hardOnlyDesc').textContent = t('hardOnlyDesc');
  $('#shuffleLabel').textContent = t('shuffleLabel');
  $('#shuffleDesc').textContent = t('shuffleDesc');
  $('#resetText').textContent = t('resetText');
  $('#exportText').textContent = t('exportText');
  $('#editorText').textContent = t('editorText');
  $('#statsTitle').textContent = t('statsTitle');
  $('#totalCardsLabel').textContent = t('totalCardsLabel');
  $('#masteredLabel').textContent = t('masteredLabel');
  $('#learningLabel').textContent = t('learningLabel');
  $('#reviewsTodayLabel').textContent = t('reviewsTodayLabel');
  $('#weekActivityLabel').textContent = t('weekActivityLabel');
  $('#editorTitle').textContent = t('editorTitle');
  $('#questionHeader').textContent = t('questionHeader');
  $('#answerHeader').textContent = t('answerHeader');
  $('#categoryHeader').textContent = t('categoryHeader');
  $('#addCardText').textContent = t('addCardText');
  $('#saveCardsText').textContent = t('saveCardsText');
  $('#closeEditorText').textContent = t('closeEditorText');
  $('#footerText').textContent = t('footerText');
}

function updateTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  $('#themeIcon').textContent = state.theme === 'dark' ? '☀️' : '🌙';
}

function updateSoundIcon() {
  $('#soundIcon').textContent = state.soundEnabled ? '🔊' : '🔇';
}

function updateDeckSelector() {
  const container = $('#deckSelector');
  const deckIds = Object.keys(state.decks);
  
  if (deckIds.length === 0) {
    $('#deckManager').classList.add('hidden');
    return;
  }
  
  $('#deckManager').classList.remove('hidden');
  container.innerHTML = '';
  
  deckIds.forEach(id => {
    const deck = state.decks[id];
    const chip = document.createElement('button');
    chip.className = `deck-chip ${id === state.currentDeckId ? 'active' : ''}`;
    chip.innerHTML = `
      ${deck.name}
      <span class="deck-count">${deck.cards.length}</span>
    `;
    chip.onclick = () => {
      state.currentDeckId = id;
      state.currentIndex = 0;
      state.selectedCategory = null;
      saveState();
      updateUI();
    };
    container.appendChild(chip);
  });
}

function updateCategoryFilter() {
  const container = $('#categoryFilter');
  const categories = getCategories();
  
  if (categories.length === 0) {
    container.classList.add('hidden');
    return;
  }
  
  container.classList.remove('hidden');
  container.innerHTML = '';
  
  // "All" button
  const allBtn = document.createElement('button');
  allBtn.className = `category-btn ${!state.selectedCategory ? 'active' : ''}`;
  allBtn.textContent = t('allCategories');
  allBtn.onclick = () => {
    state.selectedCategory = null;
    state.currentIndex = 0;
    updateUI();
  };
  container.appendChild(allBtn);
  
  // Category buttons
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `category-btn ${state.selectedCategory === cat ? 'active' : ''}`;
    btn.textContent = cat;
    btn.onclick = () => {
      state.selectedCategory = cat;
      state.currentIndex = 0;
      updateUI();
    };
    container.appendChild(btn);
  });
}

function updateFlashcard() {
  const cards = getCurrentCards();
  const card = cards[state.currentIndex];
  const flashcard = $('#flashcard');
  
  if (!card) {
    $('#questionText').textContent = t('toastNoHard');
    $('#answerText').textContent = '';
    $('#cardNumber').textContent = '#0';
    $('#cardNumberBack').textContent = '#0';
    $('#cardCategory').textContent = '';
    flashcard.classList.remove('flipped');
    return;
  }
  
  $('#questionText').textContent = card.question;
  $('#answerText').textContent = card.answer;
  $('#cardNumber').textContent = `#${state.currentIndex + 1}`;
  $('#cardNumberBack').textContent = `#${state.currentIndex + 1}`;
  $('#cardCategory').textContent = card.category || '';
  
  if (state.isFlipped) {
    flashcard.classList.add('flipped');
  } else {
    flashcard.classList.remove('flipped');
  }
}

function updateStats() {
  const deck = getCurrentDeck();
  const cards = getCurrentCards();
  
  if (!deck) {
    $('#cardCounter').textContent = '0/0';
    $('#knownCount').textContent = '0';
    $('#unknownCount').textContent = '0';
    $('#streakCount').textContent = '0';
    return;
  }
  
  const total = cards.length;
  const mastered = deck.cards.filter(c => c.sm2 && c.sm2.repetitions >= 3).length;
  const learning = deck.cards.filter(c => c.sm2 && c.sm2.repetitions > 0 && c.sm2.repetitions < 3).length;
  
  $('#cardCounter').textContent = `${state.currentIndex + 1}/${total}`;
  $('#knownCount').textContent = mastered.toString();
  $('#unknownCount').textContent = learning.toString();
  $('#streakCount').textContent = state.statistics.streak.toString();
  
  // Progress bar
  const knownPercent = total > 0 ? (mastered / deck.cards.length) * 100 : 0;
  const learningPercent = total > 0 ? (learning / deck.cards.length) * 100 : 0;
  
  $('#progressKnown').style.width = `${knownPercent}%`;
  $('#progressUnknown').style.width = `${learningPercent}%`;
  $('#progressPercent').textContent = `${Math.round(knownPercent)}%`;
  
  // Statistics panel
  $('#totalCards').textContent = deck.cards.length.toString();
  $('#masteredCards').textContent = mastered.toString();
  $('#learningCards').textContent = learning.toString();
  $('#reviewsToday').textContent = state.statistics.reviewsToday.toString();
  
  // Week activity
  updateWeekStreak();
}

function updateWeekStreak() {
  const container = $('#weekStreak');
  container.innerHTML = '';
  
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const today = new Date().getDay();
  
  days.forEach((day, i) => {
    const div = document.createElement('div');
    div.className = `streak-day ${state.statistics.weekActivity[i] ? 'active' : ''} ${i === (today === 0 ? 6 : today - 1) ? 'today' : ''}`;
    div.textContent = day;
    container.appendChild(div);
  });
}

function updateControls() {
  const cards = getCurrentCards();
  const hasCards = cards.length > 0;
  
  $('#revealBtn').disabled = !hasCards;
  $('#knowBtn').disabled = !hasCards || (!state.isFlipped && state.settings.testMode);
  $('#dontKnowBtn').disabled = !hasCards || (!state.isFlipped && state.settings.testMode);
  
  // Update reveal button text based on flip state
  $('#revealText').textContent = state.isFlipped ? (state.lang === 'ru' ? 'Скрыть' : 'Hide') : t('revealText');
}

function updateSettings() {
  $('#testModeSetting').classList.toggle('active', state.settings.testMode);
  $('#spacedRepSetting').classList.toggle('active', state.settings.spacedRepetition);
  $('#hardOnlySetting').classList.toggle('active', state.settings.hardOnly);
  $('#shuffleSetting').classList.toggle('active', state.settings.shuffle);
}

function updateUI() {
  updateLanguage();
  updateTheme();
  updateSoundIcon();
  updateDeckSelector();
  updateCategoryFilter();
  updateFlashcard();
  updateStats();
  updateControls();
  updateSettings();
  
  // Show/hide workspace
  const hasDecks = Object.keys(state.decks).length > 0;
  $('#workspace').classList.toggle('hidden', !hasDecks);
  $('#statisticsPanel').classList.toggle('hidden', !hasDecks);
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'info') {
  const container = $('#toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==================== EDITOR ====================
function openEditor() {
  const deck = getCurrentDeck();
  if (!deck) return;
  
  const tbody = $('#editorBody');
  tbody.innerHTML = '';
  
  deck.cards.forEach((card, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input class="editor-input" type="text" value="${card.question.replace(/"/g, '&quot;')}" data-field="question" data-index="${index}"></td>
      <td><input class="editor-input" type="text" value="${card.answer.replace(/"/g, '&quot;')}" data-field="answer" data-index="${index}"></td>
      <td><input class="editor-input" type="text" value="${(card.category || '').replace(/"/g, '&quot;')}" data-field="category" data-index="${index}"></td>
      <td><button class="btn btn-ghost" onclick="deleteCard(${index})">🗑️</button></td>
    `;
    tbody.appendChild(tr);
  });
  
  $('#editorPanel').classList.remove('hidden');
}

function closeEditor() {
  $('#editorPanel').classList.add('hidden');
}

function addCard() {
  const deck = getCurrentDeck();
  if (!deck) return;
  
  deck.cards.push({
    id: generateId(),
    question: '',
    answer: '',
    category: '',
    sm2: null,
    created: new Date().toISOString()
  });
  
  openEditor();
}

function deleteCard(index) {
  const deck = getCurrentDeck();
  if (!deck) return;
  
  deck.cards.splice(index, 1);
  saveState();
  openEditor();
}

function saveCards() {
  const deck = getCurrentDeck();
  if (!deck) return;
  
  const inputs = $$('#editorBody input');
  inputs.forEach(input => {
    const index = parseInt(input.dataset.index);
    const field = input.dataset.field;
    if (deck.cards[index]) {
      deck.cards[index][field] = input.value.trim();
    }
  });
  
  // Remove empty cards
  deck.cards = deck.cards.filter(c => c.question || c.answer);
  
  saveState();
  closeEditor();
  updateUI();
  showToast(t('toastSaved'), 'success');
}

window.deleteCard = deleteCard;

// ==================== FILE HANDLING ====================
function handleFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const result = parseCSV(e.target.result, file.name.replace(/\.[^.]+$/, ''));
      createDeck(result.name, result.cards);
      updateUI();
      showToast(t('toastLoaded') + result.cards.length, 'success');
    } catch (err) {
      showToast(t('toastError') + ': ' + err.message, 'error');
    }
  };
  reader.onerror = () => showToast(t('toastError'), 'error');
  reader.readAsText(file);
}

function handleURL(url) {
  if (!url) return;
  
  // Transform URLs
  if (/github\.com\/.+\/.+\/blob\//i.test(url)) {
    url = url.replace('github.com/', 'raw.githubusercontent.com/').replace('/blob/', '/');
  }
  if (url.includes('docs.google.com/spreadsheets/') && !/export\?format=csv/.test(url)) {
    url = url.replace(/\/edit.*$/, '') + '/export?format=csv';
  }
  
  fetch(url, { cache: 'no-store' })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(text => {
      const name = decodeURIComponent(url.split('/').pop() || 'Remote');
      const result = parseCSV(text, name);
      createDeck(result.name, result.cards);
      updateUI();
      showToast(t('toastLoaded') + result.cards.length, 'success');
    })
    .catch(err => {
      showToast(t('toastError') + ': ' + err.message, 'error');
    });
}

function loadDemo() {
  const demoCards = [
    { question: "What is the capital of France?", answer: "Paris", category: "Geography" },
    { question: "What is 2 + 2?", answer: "4", category: "Math" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare", category: "Literature" },
    { question: "What is the chemical symbol for water?", answer: "H₂O", category: "Science" },
    { question: "In which year did World War II end?", answer: "1945", category: "History" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter", category: "Science" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci", category: "Art" },
    { question: "What is the speed of light?", answer: "~300,000 km/s", category: "Science" },
  ];
  
  createDeck('Demo Deck', demoCards);
  updateUI();
  showToast(t('toastLoaded') + demoCards.length, 'success');
}

function downloadTemplate() {
  const csv = 'question,answer,category\n"What is 1+1?","2","Math"\n"Capital of France?","Paris","Geography"';
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'flashcards_template.csv';
  a.click();
  URL.revokeObjectURL(url);
}

function exportData() {
  const data = {
    decks: state.decks,
    statistics: state.statistics,
    exportDate: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `flashcards_export_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ==================== EVENT HANDLERS ====================
function setupEventListeners() {
  // Language
  $('#langSelect').addEventListener('change', (e) => {
    state.lang = e.target.value;
    saveState();
    updateUI();
  });
  
  // Theme
  $('#themeToggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    saveState();
    updateTheme();
  });
  
  // Sound
  $('#soundToggle').addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    saveState();
    updateSoundIcon();
  });
  
  // File upload
  $('#browseBtn').addEventListener('click', () => $('#fileInput').click());
  $('#fileInput').addEventListener('change', (e) => {
    if (e.target.files[0]) handleFile(e.target.files[0]);
  });
  
  // Drag and drop
  const uploadZone = $('#uploadZone');
  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });
  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
  });
  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });
  
  // URL loading
  $('#loadUrlBtn').addEventListener('click', () => {
    handleURL($('#urlInput').value.trim());
  });
  
  // Demo & Template
  $('#demoBtn').addEventListener('click', loadDemo);
  $('#templateBtn').addEventListener('click', downloadTemplate);
  
  // Deck management
  $('#newDeckBtn').addEventListener('click', () => {
    const name = prompt(t('newDeckText') + ':');
    if (name) {
      createDeck(name);
      updateUI();
    }
  });
  
  $('#deleteDeckBtn').addEventListener('click', () => {
    if (state.currentDeckId && confirm(t('confirmDelete'))) {
      deleteDeck(state.currentDeckId);
      updateUI();
    }
  });
  
  // Card controls
  $('#revealBtn').addEventListener('click', () => {
    state.isFlipped = !state.isFlipped;
    playSound('flip');
    updateFlashcard();
    updateControls();
  });
  
  $('#knowBtn').addEventListener('click', () => markCard(4));
  $('#dontKnowBtn').addEventListener('click', () => markCard(1));
  
  // Settings
  $('#testModeSetting').addEventListener('click', () => {
    state.settings.testMode = !state.settings.testMode;
    saveState();
    updateSettings();
    updateControls();
  });
  
  $('#spacedRepSetting').addEventListener('click', () => {
    state.settings.spacedRepetition = !state.settings.spacedRepetition;
    state.currentIndex = 0;
    saveState();
    updateUI();
  });
  
  $('#hardOnlySetting').addEventListener('click', () => {
    state.settings.hardOnly = !state.settings.hardOnly;
    state.currentIndex = 0;
    saveState();
    updateUI();
    if (state.settings.hardOnly && getCurrentCards().length === 0) {
      showToast(t('toastNoHard'), 'info');
    }
  });
  
  $('#shuffleSetting').addEventListener('click', () => {
    state.settings.shuffle = !state.settings.shuffle;
    state.currentIndex = 0;
    saveState();
    updateUI();
  });
  
  // Other actions
  $('#resetProgressBtn').addEventListener('click', () => {
    if (confirm(t('confirmReset'))) {
      const deck = getCurrentDeck();
      if (deck) {
        deck.cards.forEach(c => c.sm2 = null);
        state.statistics.reviewsToday = 0;
        state.statistics.streak = 0;
        saveState();
        updateUI();
        showToast(t('toastReset'), 'success');
      }
    }
  });
  
  $('#exportBtn').addEventListener('click', exportData);
  
  // Editor
  $('#editorBtn').addEventListener('click', openEditor);
  $('#closeEditorBtn').addEventListener('click', closeEditor);
  $('#addCardBtn').addEventListener('click', addCard);
  $('#saveCardsBtn').addEventListener('click', saveCards);
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    const cards = getCurrentCards();
    if (cards.length === 0) return;
    
    switch (e.code) {
      case 'Space':
        e.preventDefault();
        state.isFlipped = !state.isFlipped;
        playSound('flip');
        updateFlashcard();
        updateControls();
        break;
      case 'Digit1':
      case 'Numpad1':
        if (!state.settings.testMode || state.isFlipped) {
          e.preventDefault();
          markCard(4);
        }
        break;
      case 'Digit2':
      case 'Numpad2':
        if (!state.settings.testMode || state.isFlipped) {
          e.preventDefault();
          markCard(1);
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        state.currentIndex = Math.max(0, state.currentIndex - 1);
        state.isFlipped = false;
        updateFlashcard();
        updateStats();
        updateControls();
        break;
      case 'ArrowRight':
        e.preventDefault();
        state.currentIndex = Math.min(cards.length - 1, state.currentIndex + 1);
        state.isFlipped = false;
        updateFlashcard();
        updateStats();
        updateControls();
        break;
    }
  });
}

// ==================== INITIALIZATION ====================
function init() {
  loadState();
  setupEventListeners();
  initSounds();
  updateUI();
  
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  
  // Update week activity
  const today = new Date();
  const dayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;
  if (state.statistics.reviewsToday > 0) {
    state.statistics.weekActivity[dayIndex] = true;
    saveState();
  }
}

document.addEventListener('DOMContentLoaded', init);
