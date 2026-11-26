<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  HelpCircle,
  ListChecks,
} from 'lucide-vue-next';
import { getAdjacentTopics, getTopicBySlug } from '@/data';
import { useStudyState } from '@/composables/useStudyState';
import CalloutBox from '@/components/CalloutBox.vue';
import MathFormula from '@/components/MathFormula.vue';
import ComparisonTable from '@/components/ComparisonTable.vue';
import GraphRenderer from '@/components/GraphRenderer.vue';

const route = useRoute();
const { isTopicCompleted, toggleTopicCompleted } = useStudyState();

const slug = computed(() => String(route.params.slug ?? ''));
const topic = computed(() => getTopicBySlug(slug.value));
const adjacent = computed(() => getAdjacentTopics(slug.value));
const completed = computed(() => (topic.value ? isTopicCompleted(topic.value.slug) : false));

// Track user answers to quick-check mini-questions on the current topic
const selectedAnswers = ref<Record<string, number>>({});

watch(slug, () => {
  selectedAnswers.value = {};
  if (topic.value && typeof document !== 'undefined') {
    document.title = `${topic.value.shortTitle} — Ekonomia`;
  }
}, { immediate: true });

function selectQuickCheck(questionId: string, optionIdx: number): void {
  selectedAnswers.value = {
    ...selectedAnswers.value,
    [questionId]: optionIdx,
  };
}
</script>

<template>
  <div v-if="topic" class="topic-layout">
    <article class="topic-article prose">
      <!-- Topic Header -->
      <header class="topic-header">
        <div class="topic-meta-row">
          <span class="badge" :class="topic.track === 'macro' ? 'badge-macro' : 'badge-micro'">
            {{ topic.track === 'macro' ? 'Makroekonomia' : 'Mikroekonomia' }} • Temat {{ topic.order }}
          </span>
          <span class="badge badge-neutral">
            <Clock :size="13" aria-hidden="true" />
            ~{{ topic.estimatedMinutes }} min czytania
          </span>
          <span class="badge badge-trap">Waga na kolokwium: {{ topic.examWeight }}</span>
        </div>

        <h1>{{ topic.title }}</h1>
        <p class="topic-subtitle">{{ topic.subtitle }}</p>
        <p class="source-note">
          <BookOpen :size="15" aria-hidden="true" />
          Źródło: {{ topic.sourceLecture }}
        </p>

        <div class="topic-top-actions">
          <button
            type="button"
            class="complete-toggle"
            :class="{ 'is-completed': completed }"
            :aria-pressed="completed"
            @click="toggleTopicCompleted(topic.slug)"
          >
            <CheckCircle2 v-if="completed" :size="18" aria-hidden="true" />
            <Circle v-else :size="18" aria-hidden="true" />
            <span>{{ completed ? 'Temat opanowany (kliknij, aby cofnąć)' : 'Oznacz temat jako opanowany' }}</span>
          </button>
        </div>

        <!-- Learning Objectives -->
        <section v-if="topic.learningObjectives.length > 0" class="objectives-box" aria-label="Cele nauki tego działu">
          <h2>Po tym temacie będziesz potrafić:</h2>
          <ul>
            <li v-for="(obj, idx) in topic.learningObjectives" :key="idx">{{ obj }}</li>
          </ul>
        </section>
      </header>

      <!-- Sections -->
      <section
        v-for="section in topic.sections"
        :id="section.id"
        :key="section.id"
        class="topic-section"
      >
        <h2>{{ section.title }}</h2>
        <p v-if="section.summary" class="section-summary">{{ section.summary }}</p>

        <p v-for="(para, pIdx) in section.paragraphs ?? []" :key="'p-' + pIdx">
          {{ para }}
        </p>

        <ul v-if="section.bullets && section.bullets.length > 0" class="content-bullets">
          <li v-for="(bullet, bIdx) in section.bullets" :key="'b-' + bIdx">{{ bullet }}</li>
        </ul>

        <CalloutBox
          v-for="(callout, cIdx) in section.callouts ?? []"
          :key="'c-' + cIdx"
          :variant="callout.variant"
          :title="callout.title"
          :content="callout.content"
          :points="callout.points"
        />

        <MathFormula
          v-for="(formula, fIdx) in section.formulas ?? []"
          :key="'f-' + fIdx"
          :title="formula.title"
          :latex="formula.latex"
          :plain-reading="formula.plainReading"
          :symbols="formula.symbols"
          :note="formula.note"
        />

        <ComparisonTable v-if="section.table" :table="section.table" />

        <GraphRenderer v-if="section.graph" :graph="section.graph" />

        <!-- Subsections -->
        <div
          v-for="sub in section.subsections ?? []"
          :id="sub.id"
          :key="sub.id"
          class="topic-subsection"
        >
          <h3>{{ sub.title }}</h3>
          <p v-for="(para, spIdx) in sub.paragraphs ?? []" :key="'sp-' + spIdx">
            {{ para }}
          </p>
          <ul v-if="sub.bullets && sub.bullets.length > 0" class="content-bullets">
            <li v-for="(bullet, sbIdx) in sub.bullets" :key="'sb-' + sbIdx">{{ bullet }}</li>
          </ul>
          <CalloutBox
            v-for="(callout, scIdx) in sub.callouts ?? []"
            :key="'sc-' + scIdx"
            :variant="callout.variant"
            :title="callout.title"
            :content="callout.content"
            :points="callout.points"
          />
          <MathFormula
            v-for="(formula, sfIdx) in sub.formulas ?? []"
            :key="'sf-' + sfIdx"
            :title="formula.title"
            :latex="formula.latex"
            :plain-reading="formula.plainReading"
            :symbols="formula.symbols"
            :note="formula.note"
          />
          <ComparisonTable v-if="sub.table" :table="sub.table" />
          <GraphRenderer v-if="sub.graph" :graph="sub.graph" />
        </div>

        <!-- Quick-Check Mini-Question -->
        <div v-if="section.quickCheck" class="quick-check card">
          <div class="qc-head">
            <HelpCircle :size="17" aria-hidden="true" />
            <span>Szybkie sprawdzenie wiedzy</span>
          </div>
          <p class="qc-question">{{ section.quickCheck.question }}</p>
          <div class="qc-options" role="group" :aria-label="section.quickCheck.question">
            <button
              v-for="(opt, oIdx) in section.quickCheck.options"
              :key="oIdx"
              type="button"
              class="qc-option"
              :class="{
                'is-correct':
                  selectedAnswers[section.quickCheck.id] !== undefined &&
                  oIdx === section.quickCheck.correctIndex,
                'is-wrong':
                  selectedAnswers[section.quickCheck.id] === oIdx &&
                  oIdx !== section.quickCheck.correctIndex,
              }"
              @click="selectQuickCheck(section.quickCheck.id, oIdx)"
            >
              <span class="qc-letter mono">{{ String.fromCharCode(65 + oIdx) }}</span>
              <span>{{ opt }}</span>
            </button>
          </div>
          <p
            v-if="selectedAnswers[section.quickCheck.id] !== undefined"
            class="qc-feedback"
            :class="
              selectedAnswers[section.quickCheck.id] === section.quickCheck.correctIndex
                ? 'is-ok'
                : 'is-err'
            "
          >
            <strong>
              {{
                selectedAnswers[section.quickCheck.id] === section.quickCheck.correctIndex
                  ? 'Dobrze!'
                  : 'Nie tym razem — sprawdź wyjaśnienie:'
              }}
            </strong>
            {{ section.quickCheck.explanation }}
          </p>
        </div>
      </section>

      <!-- Key Takeaways & Completion -->
      <section v-if="topic.keyTakeaways.length > 0" class="takeaways card" aria-label="Podsumowanie tematu">
        <div class="takeaways-head">
          <ListChecks :size="19" aria-hidden="true" />
          <h2>Najważniejsze do zapamiętania przed kolokwium</h2>
        </div>
        <ul>
          <li v-for="(item, idx) in topic.keyTakeaways" :key="idx">{{ item }}</li>
        </ul>

        <div class="takeaways-foot">
          <button
            type="button"
            class="complete-toggle"
            :class="{ 'is-completed': completed }"
            :aria-pressed="completed"
            @click="toggleTopicCompleted(topic.slug)"
          >
            <CheckCircle2 v-if="completed" :size="18" aria-hidden="true" />
            <Circle v-else :size="18" aria-hidden="true" />
            <span>{{ completed ? 'Opanowany ✓' : 'Oznacz temat jako opanowany' }}</span>
          </button>
        </div>
      </section>

      <!-- Prev / Next Topic Navigation -->
      <nav class="topic-pager" aria-label="Nawigacja między tematami">
        <RouterLink v-if="adjacent.prev" :to="`/temat/${adjacent.prev.slug}`" class="pager-card card">
          <span class="pager-dir">
            <ArrowLeft :size="15" aria-hidden="true" />
            Poprzedni temat
          </span>
          <strong>{{ adjacent.prev.order }}. {{ adjacent.prev.shortTitle }}</strong>
        </RouterLink>
        <div v-else />

        <RouterLink v-if="adjacent.next" :to="`/temat/${adjacent.next.slug}`" class="pager-card card is-next">
          <span class="pager-dir">
            Następny temat
            <ArrowRight :size="15" aria-hidden="true" />
          </span>
          <strong>{{ adjacent.next.order }}. {{ adjacent.next.shortTitle }}</strong>
        </RouterLink>
        <RouterLink v-else to="/kolokwium" class="pager-card card is-next">
          <span class="pager-dir">
            Gotowy na test?
            <ArrowRight :size="15" aria-hidden="true" />
          </span>
          <strong>Przejdź do Strefy Kolokwium</strong>
        </RouterLink>
      </nav>
    </article>

    <!-- Right-hand Sticky Table of Contents -->
    <aside class="toc-rail" aria-label="Spis treści tego tematu">
      <div class="toc-box">
        <p class="toc-title">Na tej stronie</p>
        <ul class="toc-list">
          <li v-for="section in topic.sections" :key="section.id">
            <a :href="`#${section.id}`" class="toc-link">{{ section.title }}</a>
            <ul v-if="section.subsections && section.subsections.length > 0" class="toc-sublist">
              <li v-for="sub in section.subsections" :key="sub.id">
                <a :href="`#${sub.id}`" class="toc-sublink">{{ sub.title }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  </div>

  <section v-else class="not-found card">
    <h1>Nie znaleziono tematu</h1>
    <p>Wybrany temat nie istnieje w spisie wykładów.</p>
    <RouterLink to="/" class="btn btn-primary">Wróć do Planu nauki</RouterLink>
  </section>
</template>

<style scoped>
.topic-layout {
  display: grid;
  grid-template-columns: minmax(0, var(--reading-measure)) minmax(13rem, 16rem);
  justify-content: center;
  gap: 2.5rem;
  align-items: start;
}

.topic-article {
  min-inline-size: 0;
}

.topic-header {
  padding-block-end: 1.5rem;
  margin-block-end: 2rem;
  border-block-end: 1px solid var(--border-subtle);
}

.topic-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-block-end: 0.9rem;
}

.topic-subtitle {
  margin: 0.7rem 0 0.6rem;
  font-size: 1.06rem;
  line-height: 1.6;
  color: var(--ink-secondary);
}

.source-note {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  color: var(--ink-muted);
  margin: 0 0 1rem;
}

.topic-top-actions {
  margin-block-end: 1.15rem;
}

.complete-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.95rem;
  min-block-size: 2.5rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-strong);
  background: var(--bg-surface);
  color: var(--ink-primary);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
}

.complete-toggle:hover {
  background: var(--bg-elevated);
}

.complete-toggle.is-completed {
  background: var(--color-success-soft);
  border-color: var(--color-success);
  color: var(--color-success);
}

.objectives-box {
  padding: 1rem 1.2rem;
  border-radius: var(--radius-md);
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
}

.objectives-box h2 {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--ink-muted);
  margin-block-end: 0.55rem;
}

.objectives-box ul {
  margin: 0;
  padding-inline-start: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.93rem;
  color: var(--ink-secondary);
}

.topic-section {
  margin-block-end: 2.5rem;
  scroll-margin-block-start: 5rem;
}

.topic-section > h2 {
  margin-block-end: 0.7rem;
  padding-block-end: 0.4rem;
  border-block-end: 1px solid var(--border-subtle);
}

.section-summary {
  font-size: 0.96rem;
  font-style: italic;
  color: var(--ink-muted);
}

.content-bullets {
  margin: 0.5rem 0 1.15rem;
  padding-inline-start: 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: var(--ink-secondary);
}

.topic-subsection {
  margin-block: 1.65rem;
  scroll-margin-block-start: 5rem;
}

.topic-subsection > h3 {
  margin-block-end: 0.55rem;
}

/* Quick check */
.quick-check {
  margin-block: 1.5rem;
  padding: 1.15rem 1.25rem;
}

.qc-head {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-micro);
  margin-block-end: 0.45rem;
}

.qc-question {
  font-weight: 600;
  color: var(--ink-primary);
  margin-block-end: 0.85rem;
}

.qc-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.qc-option {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  background: var(--bg-canvas);
  color: var(--ink-primary);
  text-align: start;
  cursor: pointer;
  font-size: 0.92rem;
}

.qc-option:hover {
  border-color: var(--border-strong);
  background: var(--bg-elevated);
}

.qc-option.is-correct {
  background: var(--color-success-soft);
  border-color: var(--color-success);
}

.qc-option.is-wrong {
  background: var(--color-rose-soft);
  border-color: var(--color-rose);
}

.qc-letter {
  font-weight: 700;
  color: var(--color-micro);
}

.qc-feedback {
  margin: 0.85rem 0 0;
  padding: 0.75rem 0.95rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
}

.qc-feedback.is-ok {
  background: var(--color-success-soft);
  color: var(--ink-primary);
}

.qc-feedback.is-err {
  background: var(--color-trap-soft);
  color: var(--ink-primary);
}

/* Takeaways */
.takeaways {
  padding: 1.25rem 1.4rem;
  margin-block: 2rem;
  background: color-mix(in srgb, var(--color-macro-soft) 50%, var(--bg-surface));
  border-color: var(--color-macro-border);
}

.takeaways-head {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--color-macro);
  margin-block-end: 0.75rem;
}

.takeaways-head h2 {
  font-size: 1.15rem;
  color: var(--ink-primary);
}

.takeaways ul {
  margin: 0 0 1.1rem;
  padding-inline-start: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: var(--ink-secondary);
}

.takeaways-foot {
  display: flex;
  justify-content: flex-start;
}

/* Pager */
.topic-pager {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-block-start: 1.5rem;
}

.pager-card {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem 1.15rem;
  text-decoration: none;
  color: var(--ink-primary);
}

.pager-card:hover {
  border-color: var(--color-micro);
}

.pager-card.is-next {
  text-align: end;
  align-items: flex-end;
}

.pager-dir {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--ink-muted);
}

/* Right TOC Rail */
.toc-rail {
  position: sticky;
  inset-block-start: calc(var(--topbar-height) + 1.5rem);
}

.toc-box {
  padding: 0.95rem 1rem;
  border-inline-start: 2px solid var(--border-subtle);
}

.toc-title {
  margin: 0 0 0.6rem;
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ink-muted);
}

.toc-list,
.toc-sublist {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.toc-sublist {
  margin-block-start: 0.3rem;
  padding-inline-start: 0.75rem;
}

.toc-link,
.toc-sublink {
  display: block;
  font-size: 0.83rem;
  line-height: 1.4;
  color: var(--ink-muted);
  text-decoration: none;
}

.toc-link:hover,
.toc-sublink:hover {
  color: var(--color-micro);
}

.not-found {
  max-inline-size: 36rem;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
}

@media (max-width: 1200px) {
  .topic-layout {
    grid-template-columns: minmax(0, var(--reading-measure));
  }

  .toc-rail {
    display: none;
  }
}

@media (max-width: 640px) {
  .topic-pager {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
