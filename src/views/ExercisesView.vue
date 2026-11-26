<script setup lang="ts">
import { computed, ref } from 'vue';
import { AlertTriangle, BookOpen, CheckCircle2, Lightbulb, Search } from 'lucide-vue-next';
import { lectureExercises } from '@/data';
import type { ExerciseCategory, ExerciseDifficulty } from '@/types/economics';
import MathFormula from '@/components/MathFormula.vue';
import ComparisonTable from '@/components/ComparisonTable.vue';
import GraphRenderer from '@/components/GraphRenderer.vue';

const selectedCategory = ref<ExerciseCategory | 'all'>('all');
const selectedDifficulty = ref<ExerciseDifficulty | 'all'>('all');
const searchQuery = ref('');
const allExpanded = ref(false);

const categories: Array<{ id: ExerciseCategory | 'all'; label: string }> = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'popyt-i-podaz', label: 'Popyt i podaż' },
  { id: 'elastycznosc', label: 'Elastyczność' },
  { id: 'konsument', label: 'Konsument' },
  { id: 'monopol-i-koszty', label: 'Monopol i koszty' },
  { id: 'makro-pkb', label: 'Makro / PKB' },
];

const filteredExercises = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  return lectureExercises.filter((ex) => {
    if (selectedCategory.value !== 'all' && ex.category !== selectedCategory.value) return false;
    if (selectedDifficulty.value !== 'all' && ex.difficulty !== selectedDifficulty.value) return false;
    if (!q) return true;
    const hay = `${ex.numberLabel} ${ex.title} ${ex.sourceBadge} ${ex.originalStatement} ${ex.intuition} ${ex.finalAnswer}`.toLowerCase();
    return hay.includes(q);
  });
});

function difficultyBadgeClass(diff: ExerciseDifficulty): string {
  if (diff === 'kolokwium') return 'badge-rose';
  if (diff === 'średnie') return 'badge-trap';
  return 'badge-macro';
}
</script>

<template>
  <div class="exercises-page">
    <header class="page-header">
      <span class="badge badge-micro">Praktyka z wykładów i ćwiczeń</span>
      <h1>Ćwiczenia z wykładu — krok po kroku</h1>
      <p class="page-lead">
        Każde zadanie zawiera oryginalną treść, intuicyjne wyjaśnienie („o co tu właściwie chodzi?”),
        interaktywny wykres oraz rozwijane rozwiązanie krok po kroku z ostrzeżeniami o pułapkach.
      </p>
    </header>

    <!-- Filter bar -->
    <section class="filters card" aria-label="Filtrowanie ćwiczeń">
      <div class="filter-row">
        <div class="pill-group" role="group" aria-label="Kategoria zadań">
          <button
            v-for="cat in categories"
            :key="cat.id"
            type="button"
            class="pill-btn"
            :aria-pressed="selectedCategory === cat.id"
            @click="selectedCategory = cat.id"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <div class="filter-subrow">
        <label class="inline-search">
          <Search :size="15" aria-hidden="true" />
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Filtruj po treści zadania (np. czekolady, Riwiera, monopol, DVD)…"
            aria-label="Filtruj ćwiczenia po słowie kluczowym"
          />
        </label>

        <div class="filter-right">
          <div class="pill-group" role="group" aria-label="Poziom trudności">
            <button
              type="button"
              class="pill-btn"
              :aria-pressed="selectedDifficulty === 'all'"
              @click="selectedDifficulty = 'all'"
            >
              Każdy poziom
            </button>
            <button
              type="button"
              class="pill-btn"
              :aria-pressed="selectedDifficulty === 'podstawowe'"
              @click="selectedDifficulty = 'podstawowe'"
            >
              Podstawowe
            </button>
            <button
              type="button"
              class="pill-btn"
              :aria-pressed="selectedDifficulty === 'średnie'"
              @click="selectedDifficulty = 'średnie'"
            >
              Średnie
            </button>
            <button
              type="button"
              class="pill-btn"
              :aria-pressed="selectedDifficulty === 'kolokwium'"
              @click="selectedDifficulty = 'kolokwium'"
            >
              Typowo kolokwialne
            </button>
          </div>

          <button
            type="button"
            class="btn"
            :aria-expanded="allExpanded"
            @click="allExpanded = !allExpanded"
          >
            {{ allExpanded ? 'Zwiń rozwiązania' : 'Rozwiń wszystkie' }}
          </button>
        </div>
      </div>
    </section>

    <p v-if="filteredExercises.length === 0" class="empty-msg card">
      Brak ćwiczeń spełniających wybrane kryteria. Wyczyść filtr lub wyszukiwarkę.
    </p>

    <!-- Exercise Cards -->
    <div class="exercise-list">
      <article
        v-for="ex in filteredExercises"
        :id="ex.id"
        :key="ex.id"
        class="exercise-card card"
      >
        <header class="ex-header">
          <div class="ex-badges">
            <span class="badge badge-micro">{{ ex.numberLabel }}</span>
            <span class="badge badge-neutral">{{ ex.sourceBadge }}</span>
            <span class="badge" :class="difficultyBadgeClass(ex.difficulty)">
              Poziom: {{ ex.difficulty }}
            </span>
          </div>
          <h2>{{ ex.title }}</h2>
          <RouterLink :to="`/temat/${ex.topicSlug}`" class="topic-ref">
            <BookOpen :size="14" aria-hidden="true" />
            <span>Zobacz powiązaną teorię w kompendium →</span>
          </RouterLink>
        </header>

        <!-- Original Statement -->
        <div class="statement-box">
          <p class="box-kicker">Treść zadania</p>
          <p class="statement-text">{{ ex.originalStatement }}</p>
        </div>

        <ComparisonTable v-if="ex.dataTable" :table="ex.dataTable" />

        <!-- Intuition -->
        <div class="intuition-box">
          <div class="intuition-head">
            <Lightbulb :size="17" aria-hidden="true" />
            <span>Intuicja — jak o tym myśleć?</span>
          </div>
          <p>{{ ex.intuition }}</p>
        </div>

        <!-- Embedded interactive Graph -->
        <GraphRenderer v-if="ex.graph" :graph="ex.graph" />

        <!-- Optional key formulas -->
        <MathFormula
          v-for="(formula, fIdx) in ex.formulas ?? []"
          :key="'exf-' + fIdx"
          :title="formula.title"
          :latex="formula.latex"
          :plain-reading="formula.plainReading"
          :symbols="formula.symbols"
          :note="formula.note"
        />

        <!-- Native <details> Step-by-Step Solution (modern-web-guidance: accordion) -->
        <details class="study-details" :open="allExpanded">
          <summary>Rozwiązanie krok po kroku i odpowiedź końcowa</summary>
          <div class="study-details-body">
            <ol class="steps-list">
              <li v-for="step in ex.steps" :key="step.stepNumber" class="step-item">
                <div class="step-title">
                  <span class="step-num mono">Krok {{ step.stepNumber }}</span>
                  <strong>{{ step.title }}</strong>
                </div>
                <p class="step-desc">{{ step.explanation }}</p>
                <MathFormula
                  v-if="step.latex"
                  :latex="step.latex"
                  :show-copy="false"
                />
                <p v-if="step.result" class="step-result">
                  Wynik pośredni: <strong class="mono">{{ step.result }}</strong>
                </p>
              </li>
            </ol>

            <div class="final-answer">
              <CheckCircle2 :size="18" class="final-icon" aria-hidden="true" />
              <div>
                <strong>Odpowiedź końcowa:</strong>
                <p>{{ ex.finalAnswer }}</p>
              </div>
            </div>
          </div>
        </details>

        <!-- Exam Traps -->
        <aside v-if="ex.examTraps && ex.examTraps.length > 0" class="traps-box" aria-label="Pułapki na kolokwium">
          <div class="traps-head">
            <AlertTriangle :size="16" aria-hidden="true" />
            <span>Na co uważać na kolokwium?</span>
          </div>
          <ul>
            <li v-for="(trap, tIdx) in ex.examTraps" :key="tIdx">{{ trap }}</li>
          </ul>
        </aside>
      </article>
    </div>
  </div>
</template>

<style scoped>
.exercises-page {
  max-inline-size: 58rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.page-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
}

.page-lead {
  margin: 0;
  max-inline-size: 66ch;
}

.filters {
  padding: 1rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.filter-subrow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.filter-right {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
}

.inline-search {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 1 16rem;
  padding: 0.45rem 0.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-strong);
  background: var(--bg-canvas);
  color: var(--ink-muted);
}

.inline-search input {
  flex: 1;
  border: 0;
  background: transparent;
  color: var(--ink-primary);
  font-size: 0.9rem;
  outline: none;
}

.exercise-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.exercise-card {
  padding: clamp(1.15rem, 2.5vw, 1.65rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scroll-margin-block-start: 5rem;
}

.ex-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ex-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.topic-ref {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
}

.topic-ref:hover {
  text-decoration: underline;
}

.statement-box {
  padding: 0.95rem 1.1rem;
  border-radius: var(--radius-md);
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
}

.box-kicker {
  margin: 0 0 0.3rem;
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--ink-muted);
}

.statement-text {
  margin: 0;
  color: var(--ink-primary);
  font-weight: 500;
}

.intuition-box {
  padding: 0.9rem 1.1rem;
  border-radius: var(--radius-md);
  background: var(--color-tip-soft);
  border: 1px solid var(--color-tip-border);
  border-inline-start: 4px solid var(--color-tip);
}

.intuition-head {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-tip);
  margin-block-end: 0.3rem;
}

.intuition-box p {
  margin: 0;
  font-size: 0.93rem;
}

.steps-list {
  list-style: none;
  margin: 0.75rem 0 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step-item {
  padding-inline-start: 0.85rem;
  border-inline-start: 2.5px solid var(--color-micro-border);
}

.step-title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-block-end: 0.3rem;
}

.step-num {
  font-size: 0.76rem;
  font-weight: 700;
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
  background: var(--color-micro-soft);
  color: var(--color-micro);
}

.step-desc {
  margin: 0 0 0.35rem;
  font-size: 0.92rem;
}

.step-result {
  margin: 0.35rem 0 0;
  font-size: 0.88rem;
  color: var(--ink-primary);
}

.final-answer {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.9rem 1.05rem;
  border-radius: var(--radius-md);
  background: var(--color-success-soft);
  border: 1px solid var(--color-success);
}

.final-icon {
  color: var(--color-success);
  flex-shrink: 0;
  margin-block-start: 0.15rem;
}

.final-answer p {
  margin: 0.2rem 0 0;
  color: var(--ink-primary);
  font-weight: 500;
}

.traps-box {
  padding: 0.85rem 1.05rem;
  border-radius: var(--radius-md);
  background: var(--color-trap-soft);
  border: 1px solid var(--color-trap-border);
}

.traps-head {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-trap);
  margin-block-end: 0.35rem;
}

.traps-box ul {
  margin: 0;
  padding-inline-start: 1.2rem;
  font-size: 0.9rem;
  color: var(--ink-secondary);
}

.empty-msg {
  padding: 2rem;
  text-align: center;
  color: var(--ink-muted);
}
</style>
