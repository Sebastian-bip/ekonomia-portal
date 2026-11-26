<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  Calculator,
  CheckCircle2,
  ClipboardList,
  Eye,
  FileCheck2,
  Layers,
  PenLine,
  RotateCcw,
  Shuffle,
} from 'lucide-vue-next';
import { examData } from '@/data';
import type { Track } from '@/types/economics';
import CalloutBox from '@/components/CalloutBox.vue';
import MathFormula from '@/components/MathFormula.vue';

type ExamTabId = 'overview' | 'abcd' | 'sentences' | 'flashcards' | 'calculations';

const activeTab = ref<ExamTabId>('overview');
const trackFilter = ref<'all' | Track>('all');

const tabs: Array<{ id: ExamTabId; label: string; icon: unknown }> = [
  { id: 'overview', label: 'Struktura & Porady', icon: ClipboardList },
  { id: 'abcd', label: 'Test ABCD', icon: FileCheck2 },
  { id: 'sentences', label: 'Dokończ zdanie', icon: PenLine },
  { id: 'flashcards', label: 'Fiszki i Definicje', icon: Layers },
  { id: 'calculations', label: 'Zadania obliczeniowe', icon: Calculator },
];

const tabRefs = ref<Record<string, HTMLButtonElement | null>>({});

function setTabRef(id: string, el: unknown): void {
  tabRefs.value[id] = el instanceof HTMLButtonElement ? el : null;
}

function selectTab(id: ExamTabId, scroll = true): void {
  activeTab.value = id;
  if (scroll) {
    tabRefs.value[id]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
}

function onTabKeydown(event: KeyboardEvent, index: number): void {
  let nextIdx: number | null = null;
  if (event.key === 'ArrowRight') nextIdx = (index + 1) % tabs.length;
  else if (event.key === 'ArrowLeft') nextIdx = (index - 1 + tabs.length) % tabs.length;
  else if (event.key === 'Home') nextIdx = 0;
  else if (event.key === 'End') nextIdx = tabs.length - 1;

  if (nextIdx !== null) {
    event.preventDefault();
    const target = tabs[nextIdx];
    selectTab(target.id);
    tabRefs.value[target.id]?.focus();
  }
}

// Filtered sets by Micro / Macro
const filteredAbcd = computed(() =>
  examData.abcdQuestions.filter((q) => trackFilter.value === 'all' || q.track === trackFilter.value),
);
const filteredSentences = computed(() =>
  examData.sentenceCompletions.filter((s) => trackFilter.value === 'all' || s.track === trackFilter.value),
);
const filteredFlashcards = computed(() =>
  examData.flashcards.filter((f) => trackFilter.value === 'all' || f.track === trackFilter.value),
);
const filteredCalculations = computed(() =>
  examData.calculationProblems.filter((c) => trackFilter.value === 'all' || c.track === trackFilter.value),
);

// ABCD Quiz state
const abcdAnswers = ref<Record<string, number>>({});
const abcdAnsweredCount = computed(
  () => filteredAbcd.value.filter((q) => abcdAnswers.value[q.id] !== undefined).length,
);
const abcdCorrectCount = computed(
  () => filteredAbcd.value.filter((q) => abcdAnswers.value[q.id] === q.correctIndex).length,
);

function pickAbcd(qId: string, idx: number): void {
  abcdAnswers.value = { ...abcdAnswers.value, [qId]: idx };
}
function resetAbcd(): void {
  abcdAnswers.value = {};
}

// Sentence completions state
const userSentenceInputs = ref<Record<string, string>>({});
const revealedSentences = ref<Record<string, boolean>>({});
function toggleSentenceReveal(id: string): void {
  revealedSentences.value = {
    ...revealedSentences.value,
    [id]: !revealedSentences.value[id],
  };
}

// Flashcards state
const cardOrderSeed = ref(0);
const currentCardIndex = ref(0);
const cardFlipped = ref(false);
const showAllCardsGrid = ref(false);
const knownCardIds = ref<Record<string, boolean>>({});

const activeCards = computed(() => {
  const list = [...filteredFlashcards.value];
  if (cardOrderSeed.value === 0) return list;
  // Deterministic Fisher-Yates shuffle keyed off seed
  let s = cardOrderSeed.value;
  for (let i = list.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
});

const currentCard = computed(() => {
  const list = activeCards.value;
  if (list.length === 0) return null;
  return list[currentCardIndex.value % list.length];
});

const knownCount = computed(
  () => filteredFlashcards.value.filter((c) => knownCardIds.value[c.id]).length,
);

function nextCard(): void {
  if (activeCards.value.length === 0) return;
  cardFlipped.value = false;
  currentCardIndex.value = (currentCardIndex.value + 1) % activeCards.value.length;
}

function prevCard(): void {
  if (activeCards.value.length === 0) return;
  cardFlipped.value = false;
  currentCardIndex.value =
    (currentCardIndex.value - 1 + activeCards.value.length) % activeCards.value.length;
}

function shuffleCards(): void {
  cardOrderSeed.value += 1;
  currentCardIndex.value = 0;
  cardFlipped.value = false;
}

function toggleCardKnown(id: string): void {
  knownCardIds.value = { ...knownCardIds.value, [id]: !knownCardIds.value[id] };
}
</script>

<template>
  <div class="exam-page">
    <header class="page-header">
      <span class="badge badge-trap">Przygotowanie do kolokwium</span>
      <h1>{{ examData.overview.title }}</h1>
      <p class="page-lead">{{ examData.overview.subtitle }}</p>

      <!-- Micro / Macro Global Filter -->
      <div class="track-filter" role="group" aria-label="Filtruj pytania według działu">
        <button
          type="button"
          class="pill-btn"
          :aria-pressed="trackFilter === 'all'"
          @click="trackFilter = 'all'; currentCardIndex = 0"
        >
          Wszystkie (Mikro + Makro)
        </button>
        <button
          type="button"
          class="pill-btn"
          :aria-pressed="trackFilter === 'micro'"
          @click="trackFilter = 'micro'; currentCardIndex = 0"
        >
          Tylko Mikroekonomia
        </button>
        <button
          type="button"
          class="pill-btn is-macro"
          :aria-pressed="trackFilter === 'macro'"
          @click="trackFilter = 'macro'; currentCardIndex = 0"
        >
          Tylko Makroekonomia
        </button>
      </div>
    </header>

    <!-- Single-row Accessible Tablist (modern-web-guidance: tabs) -->
    <div class="tabs-shell">
      <div
        class="tabs-bar"
        role="tablist"
        focusgroup="tablist nomemory"
        aria-label="Tryby nauki do kolokwium"
      >
        <button
          v-for="(tab, idx) in tabs"
          :id="`exam-tab-${tab.id}`"
          :key="tab.id"
          :ref="(el) => setTabRef(tab.id, el)"
          type="button"
          role="tab"
          class="tab-btn"
          :aria-selected="activeTab === tab.id"
          :tabindex="activeTab === tab.id ? 0 : -1"
          :focusgroupstart="activeTab === tab.id ? '' : undefined"
          @click="selectTab(tab.id)"
          @keydown="onTabKeydown($event, idx)"
        >
          <component :is="tab.icon" :size="16" aria-hidden="true" />
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <!-- TAB 1: OVERVIEW -->
      <div
        role="tabpanel"
        aria-labelledby="exam-tab-overview"
        :hidden="activeTab === 'overview' ? undefined : 'until-found'"
        @beforematch="selectTab('overview', false)"
      >
        <div class="tab-panel-inner">
          <CalloutBox
            :variant="examData.overview.seniorTipCallout.variant"
            :title="examData.overview.seniorTipCallout.title"
            :content="examData.overview.seniorTipCallout.content"
            :points="examData.overview.seniorTipCallout.points"
          />

          <h2 class="section-heading">Struktura kolokwium — czego się spodziewać</h2>
          <div class="structure-grid">
            <div v-for="(item, idx) in examData.overview.structureCards" :key="idx" class="structure-card card">
              <span v-if="item.badge" class="badge badge-micro">{{ item.badge }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <ul v-if="item.points && item.points.length > 0">
                <li v-for="(pt, pIdx) in item.points" :key="pIdx">{{ pt }}</li>
              </ul>
            </div>
          </div>

          <section class="strategy-card card">
            <h2>Plan powtórki krok po kroku</h2>
            <ol class="strategy-list">
              <li v-for="(step, idx) in examData.overview.studyStrategySteps" :key="idx">
                {{ step }}
              </li>
            </ol>
          </section>
        </div>
      </div>

      <!-- TAB 2: ABCD QUIZ -->
      <div
        role="tabpanel"
        aria-labelledby="exam-tab-abcd"
        :hidden="activeTab === 'abcd' ? undefined : 'until-found'"
        @beforematch="selectTab('abcd', false)"
      >
        <div class="tab-panel-inner">
          <div class="panel-toolbar card">
            <div class="score-summary">
              <span>Wynik testu:</span>
              <strong class="mono">{{ abcdCorrectCount }} / {{ abcdAnsweredCount }} poprawnych</strong>
              <span class="score-total">(wszystkich pytań: {{ filteredAbcd.length }})</span>
            </div>
            <button type="button" class="btn" @click="resetAbcd">
              <RotateCcw :size="15" aria-hidden="true" />
              Resetuj odpowiedzi
            </button>
          </div>

          <div class="stack-list">
            <article v-for="(q, qIdx) in filteredAbcd" :key="q.id" class="quiz-card card">
              <div class="card-meta">
                <span class="mono question-num">Pytanie {{ qIdx + 1 }}</span>
                <span class="badge" :class="q.track === 'macro' ? 'badge-macro' : 'badge-micro'">
                  {{ q.track === 'macro' ? 'Makroekonomia' : 'Mikroekonomia' }}
                </span>
                <span v-if="q.sourceNote" class="badge badge-neutral">{{ q.sourceNote }}</span>
              </div>

              <p class="quiz-question">{{ q.question }}</p>

              <div class="options-grid" role="group" :aria-label="`Opcje do pytania ${qIdx + 1}`">
                <button
                  v-for="(opt, oIdx) in q.options"
                  :key="oIdx"
                  type="button"
                  class="option-btn"
                  :class="{
                    'is-correct': abcdAnswers[q.id] !== undefined && oIdx === q.correctIndex,
                    'is-wrong': abcdAnswers[q.id] === oIdx && oIdx !== q.correctIndex,
                  }"
                  @click="pickAbcd(q.id, oIdx)"
                >
                  <span class="opt-key mono">{{ String.fromCharCode(65 + oIdx) }}</span>
                  <span>{{ opt }}</span>
                </button>
              </div>

              <div
                v-if="abcdAnswers[q.id] !== undefined"
                class="explanation-box"
                :class="abcdAnswers[q.id] === q.correctIndex ? 'is-ok' : 'is-err'"
              >
                <p>
                  <strong>
                    {{ abcdAnswers[q.id] === q.correctIndex ? 'Poprawna odpowiedź!' : 'Błędna odpowiedź.' }}
                  </strong>
                  {{ q.explanation }}
                </p>
                <p v-if="q.trapNote" class="trap-inline">
                  <strong>Pułapka:</strong> {{ q.trapNote }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- TAB 3: SENTENCE COMPLETIONS -->
      <div
        role="tabpanel"
        aria-labelledby="exam-tab-sentences"
        :hidden="activeTab === 'sentences' ? undefined : 'until-found'"
        @beforematch="selectTab('sentences', false)"
      >
        <div class="tab-panel-inner">
          <div class="stack-list">
            <article v-for="(item, idx) in filteredSentences" :key="item.id" class="sentence-card card">
              <div class="card-meta">
                <span class="mono question-num">Zdanie {{ idx + 1 }}</span>
                <span class="badge" :class="item.track === 'macro' ? 'badge-macro' : 'badge-micro'">
                  {{ item.track === 'macro' ? 'Makroekonomia' : 'Mikroekonomia' }}
                </span>
              </div>

              <p class="sentence-prompt">
                {{ item.promptBefore }}
                <span class="blank-slot" :class="{ 'is-revealed': revealedSentences[item.id] }">
                  {{ revealedSentences[item.id] ? item.blankAnswer : '______________________' }}
                </span>
                {{ item.promptAfter ?? '' }}
              </p>

              <div class="sentence-controls">
                <input
                  v-model="userSentenceInputs[item.id]"
                  type="text"
                  class="sentence-input"
                  placeholder="Wpisz własną odpowiedź do sprawdzenia…"
                  :aria-label="`Twoja odpowiedź do zdania ${idx + 1}`"
                />
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="toggleSentenceReveal(item.id)"
                >
                  <Eye :size="15" aria-hidden="true" />
                  <span>{{ revealedSentences[item.id] ? 'Ukryj wzorzec' : 'Sprawdź odpowiedź' }}</span>
                </button>
              </div>

              <p v-if="item.hint && !revealedSentences[item.id]" class="hint-line">
                Podpowiedź: {{ item.hint }}
              </p>

              <div v-if="revealedSentences[item.id]" class="explanation-box is-ok">
                <p><strong>Wzorcowe uzupełnienie:</strong> {{ item.blankAnswer }}</p>
                <p>{{ item.fullExplanation }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- TAB 4: FLASHCARDS -->
      <div
        role="tabpanel"
        aria-labelledby="exam-tab-flashcards"
        :hidden="activeTab === 'flashcards' ? undefined : 'until-found'"
        @beforematch="selectTab('flashcards', false)"
      >
        <div class="tab-panel-inner">
          <div class="panel-toolbar card">
            <div class="score-summary">
              <span>Opanowane fiszki:</span>
              <strong class="mono">{{ knownCount }} / {{ filteredFlashcards.length }}</strong>
            </div>
            <div class="toolbar-btns">
              <button type="button" class="btn" @click="shuffleCards">
                <Shuffle :size="15" aria-hidden="true" />
                Tasuj
              </button>
              <button
                type="button"
                class="btn"
                :aria-pressed="showAllCardsGrid"
                @click="showAllCardsGrid = !showAllCardsGrid"
              >
                {{ showAllCardsGrid ? 'Tryb pojedynczej karty' : 'Pokaż wszystkie jako listę' }}
              </button>
            </div>
          </div>

          <div v-if="!showAllCardsGrid && currentCard" class="flashcard-stage">
            <button
              type="button"
              class="flashcard-box card"
              :aria-pressed="cardFlipped"
              @click="cardFlipped = !cardFlipped"
            >
              <div class="fc-top">
                <span class="badge" :class="currentCard.track === 'macro' ? 'badge-macro' : 'badge-micro'">
                  {{ currentCard.category }}
                </span>
                <span class="mono fc-counter">
                  {{ (currentCardIndex % activeCards.length) + 1 }} / {{ activeCards.length }}
                </span>
              </div>

              <div v-if="!cardFlipped" class="fc-face">
                <p class="fc-hint">Pojęcie (kliknij kartę, aby odwrócić)</p>
                <h2 class="fc-term">{{ currentCard.term }}</h2>
              </div>

              <div v-else class="fc-face">
                <p class="fc-hint">Definicja</p>
                <p class="fc-def">{{ currentCard.definition }}</p>
                <MathFormula
                  v-if="currentCard.formulaLatex"
                  :latex="currentCard.formulaLatex"
                  :show-copy="false"
                />
                <p v-if="currentCard.example" class="fc-example">
                  <strong>Przykład:</strong> {{ currentCard.example }}
                </p>
              </div>
            </button>

            <div class="fc-actions">
              <button type="button" class="btn" @click="prevCard">← Poprzednia</button>
              <button
                type="button"
                class="btn"
                :class="knownCardIds[currentCard.id] ? 'btn-macro' : ''"
                @click="toggleCardKnown(currentCard.id)"
              >
                <CheckCircle2 :size="16" aria-hidden="true" />
                <span>{{ knownCardIds[currentCard.id] ? 'Już umiem ✓' : 'Oznacz jako opanowaną' }}</span>
              </button>
              <button type="button" class="btn btn-primary" @click="nextCard">Następna →</button>
            </div>
          </div>

          <div v-else class="flashcards-grid">
            <article v-for="card in activeCards" :key="card.id" class="fc-list-card card">
              <div class="fc-top">
                <span class="badge" :class="card.track === 'macro' ? 'badge-macro' : 'badge-micro'">
                  {{ card.category }}
                </span>
              </div>
              <h3>{{ card.term }}</h3>
              <p>{{ card.definition }}</p>
              <MathFormula v-if="card.formulaLatex" :latex="card.formulaLatex" :show-copy="false" />
              <p v-if="card.example" class="fc-example"><strong>Przykład:</strong> {{ card.example }}</p>
            </article>
          </div>
        </div>
      </div>

      <!-- TAB 5: CALCULATION PROBLEMS -->
      <div
        role="tabpanel"
        aria-labelledby="exam-tab-calculations"
        :hidden="activeTab === 'calculations' ? undefined : 'until-found'"
        @beforematch="selectTab('calculations', false)"
      >
        <div class="tab-panel-inner">
          <div class="stack-list">
            <article v-for="(prob, idx) in filteredCalculations" :key="prob.id" class="calc-card card">
              <div class="card-meta">
                <span class="mono question-num">Zadanie {{ idx + 1 }}</span>
                <span class="badge" :class="prob.track === 'macro' ? 'badge-macro' : 'badge-micro'">
                  {{ prob.track === 'macro' ? 'Makroekonomia' : 'Mikroekonomia' }}
                </span>
                <span class="badge badge-neutral">Poziom: {{ prob.difficulty }}</span>
              </div>

              <h3>{{ prob.title }}</h3>
              <p class="calc-statement">{{ prob.statement }}</p>

              <ul v-if="prob.given && prob.given.length > 0" class="given-list">
                <li v-for="(g, gIdx) in prob.given" :key="gIdx" class="mono">{{ g }}</li>
              </ul>

              <details class="study-details">
                <summary>Podpowiedź</summary>
                <div class="study-details-body">
                  <p class="hint-body">{{ prob.hint }}</p>
                </div>
              </details>

              <details class="study-details">
                <summary>Pełne rozwiązanie krok po kroku</summary>
                <div class="study-details-body">
                  <ol class="calc-steps">
                    <li v-for="step in prob.steps" :key="step.stepNumber">
                      <strong>Krok {{ step.stepNumber }}: {{ step.title }}</strong>
                      <p>{{ step.explanation }}</p>
                      <MathFormula v-if="step.latex" :latex="step.latex" :show-copy="false" />
                      <p v-if="step.result" class="mono"><strong>{{ step.result }}</strong></p>
                    </li>
                  </ol>
                  <p class="calc-final"><strong>Odpowiedź:</strong> {{ prob.finalAnswer }}</p>
                </div>
              </details>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exam-page {
  max-inline-size: 62rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.page-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;
}

.page-lead {
  margin: 0;
  max-inline-size: 68ch;
}

.track-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-block-start: 0.35rem;
}

/* Note: padding/spacing placed strictly on .tab-panel-inner, never on hidden="until-found" panel (modern-web-guidance: tabs) */
.tab-panel-inner {
  padding-block-start: 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.section-heading {
  margin-block-start: 0.5rem;
}

.structure-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
  gap: 1rem;
}

.structure-card {
  padding: 1.15rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.structure-card p {
  margin: 0;
  font-size: 0.9rem;
}

.structure-card ul {
  margin: 0.2rem 0 0;
  padding-inline-start: 1.15rem;
  font-size: 0.86rem;
  color: var(--ink-muted);
}

.strategy-card {
  padding: 1.25rem 1.4rem;
}

.strategy-card h2 {
  font-size: 1.2rem;
  margin-block-end: 0.7rem;
}

.strategy-list {
  margin: 0;
  padding-inline-start: 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: var(--ink-secondary);
}

.panel-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1.1rem;
}

.score-summary {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
}

.score-total {
  color: var(--ink-muted);
  font-size: 0.85rem;
}

.toolbar-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.stack-list {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.quiz-card,
.sentence-card,
.calc-card {
  padding: 1.2rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.question-num {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--ink-muted);
}

.quiz-question,
.calc-statement {
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  color: var(--ink-primary);
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 0.55rem;
}

.option-btn {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.7rem 0.9rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  background: var(--bg-canvas);
  color: var(--ink-primary);
  text-align: start;
  cursor: pointer;
  font-size: 0.92rem;
}

.option-btn:hover {
  border-color: var(--border-strong);
  background: var(--bg-elevated);
}

.option-btn.is-correct {
  background: var(--color-success-soft);
  border-color: var(--color-success);
}

.option-btn.is-wrong {
  background: var(--color-rose-soft);
  border-color: var(--color-rose);
}

.opt-key {
  font-weight: 700;
  color: var(--color-micro);
}

.explanation-box {
  padding: 0.8rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
}

.explanation-box p {
  margin: 0;
  color: var(--ink-primary);
}

.explanation-box p + p {
  margin-block-start: 0.35rem;
}

.explanation-box.is-ok {
  background: var(--color-success-soft);
}

.explanation-box.is-err {
  background: var(--color-trap-soft);
}

.trap-inline {
  color: var(--color-trap) !important;
}

.sentence-prompt {
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--ink-primary);
}

.blank-slot {
  display: inline-block;
  padding: 0.05rem 0.45rem;
  border-radius: 0.35rem;
  background: var(--bg-elevated);
  border-block-end: 2px solid var(--color-micro);
  font-weight: 600;
  color: var(--color-micro);
}

.blank-slot.is-revealed {
  background: var(--color-success-soft);
  border-block-end-color: var(--color-success);
  color: var(--color-success);
}

.sentence-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.sentence-input {
  flex: 1 1 16rem;
  padding: 0.5rem 0.8rem;
  min-block-size: 2.5rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-strong);
  background: var(--bg-canvas);
  color: var(--ink-primary);
}

.hint-line {
  margin: 0;
  font-size: 0.86rem;
  color: var(--ink-muted);
}

/* Flashcards */
.flashcard-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.flashcard-box {
  inline-size: min(38rem, 100%);
  min-block-size: 17rem;
  padding: 1.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  text-align: start;
  cursor: pointer;
}

.flashcard-box:hover {
  border-color: var(--color-micro);
}

.fc-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  inline-size: 100%;
  margin-block-end: 1rem;
}

.fc-counter {
  font-size: 0.82rem;
  color: var(--ink-muted);
}

.fc-face {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.55rem;
}

.fc-hint {
  margin: 0;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--ink-muted);
}

.fc-term {
  font-size: clamp(1.4rem, 1.2rem + 0.9vw, 2rem);
}

.fc-def {
  margin: 0;
  font-size: 1rem;
  color: var(--ink-primary);
}

.fc-example {
  margin: 0;
  font-size: 0.88rem;
  color: var(--ink-muted);
}

.fc-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
}

.flashcards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1rem;
}

.fc-list-card {
  padding: 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.fc-list-card p {
  margin: 0;
  font-size: 0.9rem;
}

/* Calculations */
.given-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.given-list li {
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  font-size: 0.84rem;
}

.hint-body {
  margin: 0.5rem 0 0;
}

.calc-steps {
  margin: 0.6rem 0 0.85rem;
  padding-inline-start: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.calc-steps p {
  margin: 0.2rem 0;
}

.calc-final {
  margin: 0;
  padding: 0.7rem 0.9rem;
  border-radius: var(--radius-sm);
  background: var(--color-success-soft);
  color: var(--ink-primary);
}
</style>
