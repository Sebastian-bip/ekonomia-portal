<script setup lang="ts">
import { computed } from 'vue';
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Sparkles,
} from 'lucide-vue-next';
import {
  allTopics,
  examData,
  formulaEntries,
  glossaryEntries,
  lectureExercises,
  macroTopics,
  microTopics,
} from '@/data';
import { useStudyState } from '@/composables/useStudyState';

const { completedTopics, isTopicCompleted } = useStudyState();

const completedCount = computed(() =>
  allTopics.filter((t) => completedTopics.value.includes(t.slug)).length,
);
const progressPercent = computed(() =>
  allTopics.length ? Math.round((completedCount.value / allTopics.length) * 100) : 0,
);
const nextRecommendedTopic = computed(
  () => allTopics.find((t) => !completedTopics.value.includes(t.slug)) ?? allTopics[0],
);

const totalExamItems = computed(
  () =>
    examData.abcdQuestions.length +
    examData.sentenceCompletions.length +
    examData.flashcards.length +
    examData.calculationProblems.length,
);
</script>

<template>
  <div class="home-page">
    <!-- Academic Hero -->
    <section class="hero card" aria-labelledby="home-heading">
      <div class="hero-copy">
        <span class="badge badge-micro">
          <Sparkles :size="13" aria-hidden="true" />
          Kompendium akademickie • Mikro &amp; Makro
        </span>
        <h1 id="home-heading">Ekonomia wygodnie, przejrzyście i prosto pod kolokwium</h1>
        <p class="hero-lead">
          Wszystkie zagadnienia z wykładów, interaktywne wykresy popytu, podaży, monopolu i PKB,
          rozwiązane krok po kroku ćwiczenia oraz interaktywna strefa powtórki w jednym miejscu.
        </p>
        <div class="hero-actions">
          <RouterLink
            v-if="nextRecommendedTopic"
            :to="`/temat/${nextRecommendedTopic.slug}`"
            class="btn btn-primary"
          >
            <span>
              {{ completedCount > 0 ? `Kontynuuj: ${nextRecommendedTopic.shortTitle}` : `Zacznij od: ${nextRecommendedTopic.shortTitle}` }}
            </span>
            <ArrowRight :size="16" aria-hidden="true" />
          </RouterLink>
          <RouterLink to="/kolokwium" class="btn">
            <ClipboardCheck :size="16" aria-hidden="true" />
            <span>Strefa Kolokwium</span>
          </RouterLink>
          <RouterLink to="/wzory" class="btn btn-ghost">
            <BookOpen :size="16" aria-hidden="true" />
            <span>Ściąga: Wzory</span>
          </RouterLink>
        </div>
      </div>

      <div class="hero-progress">
        <p class="hero-progress-label">Twój postęp nauki</p>
        <div class="hero-progress-value mono">{{ progressPercent }}%</div>
        <p class="hero-progress-sub">
          Opanowano <strong>{{ completedCount }}</strong> z <strong>{{ allTopics.length }}</strong> działów wykładowych
        </p>
        <div
          class="progress-bar-track"
          role="progressbar"
          :aria-valuenow="progressPercent"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar-fill" :style="{ inlineSize: `${progressPercent}%` }" />
        </div>
      </div>
    </section>

    <!-- Quick practice shortcuts -->
    <section class="quick-grid" aria-label="Narzędzia do ćwiczeń i powtórki">
      <RouterLink to="/cwiczenia" class="quick-card card">
        <div class="quick-icon is-micro" aria-hidden="true">
          <Calculator :size="20" />
        </div>
        <div>
          <h2>Ćwiczenia z wykładu</h2>
          <p>
            {{ lectureExercises.length }} opracowanych zadań krok po kroku z intuicją, wykresami i
            pułapkami egzaminacyjnymi.
          </p>
        </div>
      </RouterLink>

      <RouterLink to="/kolokwium" class="quick-card card">
        <div class="quick-icon is-trap" aria-hidden="true">
          <ClipboardCheck :size="20" />
        </div>
        <div>
          <h2>Strefa Kolokwium</h2>
          <p>
            {{ totalExamItems }} pozycji treningowych: test ABCD, dokańczanie zdań, fiszki i zadania
            obliczeniowe.
          </p>
        </div>
      </RouterLink>

      <RouterLink to="/wzory" class="quick-card card">
        <div class="quick-icon is-macro" aria-hidden="true">
          <BookOpen :size="20" />
        </div>
        <div>
          <h2>Ściąga: Wzory i Definicje</h2>
          <p>
            {{ formulaEntries.length }} kluczowych wzorów z legendą symboli oraz
            {{ glossaryEntries.length }} definicji z szybką wyszukiwarką.
          </p>
        </div>
      </RouterLink>
    </section>

    <!-- Microeconomics Track -->
    <section class="track-section" aria-labelledby="micro-track-heading">
      <div class="track-header">
        <div>
          <span class="badge badge-micro">Część I • Mikroekonomia</span>
          <h2 id="micro-track-heading">Decyzje konsumentów, rynki, firmy i monopol</h2>
        </div>
      </div>

      <div class="topics-grid">
        <RouterLink
          v-for="topic in microTopics"
          :key="topic.slug"
          :to="`/temat/${topic.slug}`"
          class="topic-card card is-micro"
          :class="{ 'is-done': isTopicCompleted(topic.slug) }"
        >
          <div class="topic-card-top">
            <span class="topic-num mono">Temat {{ topic.order }}</span>
            <span v-if="isTopicCompleted(topic.slug)" class="done-pill">
              <CheckCircle2 :size="14" aria-hidden="true" />
              Opanowany
            </span>
            <span v-else class="badge badge-neutral">Waga: {{ topic.examWeight }}</span>
          </div>
          <h3>{{ topic.title }}</h3>
          <p>{{ topic.subtitle }}</p>
          <div class="topic-card-foot">
            <span class="meta-time">
              <Clock :size="14" aria-hidden="true" />
              ~{{ topic.estimatedMinutes }} min
            </span>
            <span class="open-link">Czytaj temat →</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Macroeconomics Track -->
    <section class="track-section" aria-labelledby="macro-track-heading">
      <div class="track-header">
        <div>
          <span class="badge badge-macro">Część II • Makroekonomia</span>
          <h2 id="macro-track-heading">PKB, dochód narodowy, inflacja i miary dobrobytu</h2>
        </div>
      </div>

      <div class="topics-grid">
        <RouterLink
          v-for="topic in macroTopics"
          :key="topic.slug"
          :to="`/temat/${topic.slug}`"
          class="topic-card card is-macro"
          :class="{ 'is-done': isTopicCompleted(topic.slug) }"
        >
          <div class="topic-card-top">
            <span class="topic-num mono">Temat {{ topic.order }}</span>
            <span v-if="isTopicCompleted(topic.slug)" class="done-pill">
              <CheckCircle2 :size="14" aria-hidden="true" />
              Opanowany
            </span>
            <span v-else class="badge badge-macro">Waga: {{ topic.examWeight }}</span>
          </div>
          <h3>{{ topic.title }}</h3>
          <p>{{ topic.subtitle }}</p>
          <div class="topic-card-foot">
            <span class="meta-time">
              <Clock :size="14" aria-hidden="true" />
              ~{{ topic.estimatedMinutes }} min
            </span>
            <span class="open-link">Czytaj temat →</span>
          </div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  max-inline-size: 68rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(15rem, 0.85fr);
  gap: 1.75rem;
  padding: clamp(1.35rem, 3vw, 2.2rem);
  background: linear-gradient(
    135deg,
    var(--bg-surface) 0%,
    color-mix(in srgb, var(--color-micro-soft) 55%, var(--bg-surface)) 100%
  );
}

.hero-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
}

.hero-lead {
  margin: 0;
  max-inline-size: 58ch;
  font-size: 1rem;
  color: var(--ink-secondary);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-block-start: 0.35rem;
}

.hero-progress {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
}

.hero-progress-label {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--ink-muted);
}

.hero-progress-value {
  font-size: clamp(2rem, 1.6rem + 1.4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--color-micro);
  margin-block: 0.25rem;
}

.hero-progress-sub {
  margin: 0 0 0.8rem;
  font-size: 0.88rem;
  color: var(--ink-secondary);
}

.progress-bar-track {
  inline-size: 100%;
  block-size: 0.55rem;
  border-radius: 999px;
  background: var(--bg-elevated);
  overflow: hidden;
}

.progress-bar-fill {
  block-size: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--color-micro), var(--color-macro));
  transition: inline-size 0.3s ease;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 1rem;
}

.quick-card {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1.15rem 1.2rem;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.quick-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.quick-card h2 {
  font-size: 1.08rem;
  margin-block-end: 0.3rem;
}

.quick-card p {
  margin: 0;
  font-size: 0.87rem;
  line-height: 1.5;
  color: var(--ink-muted);
}

.quick-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 2.5rem;
  block-size: 2.5rem;
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.quick-icon.is-micro {
  background: var(--color-micro-soft);
  color: var(--color-micro);
}

.quick-icon.is-macro {
  background: var(--color-macro-soft);
  color: var(--color-macro);
}

.quick-icon.is-trap {
  background: var(--color-trap-soft);
  color: var(--color-trap);
}

.track-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.track-header h2 {
  margin-block-start: 0.45rem;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.5rem, 1fr));
  gap: 1rem;
}

.topic-card {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 1.2rem 1.25rem;
  text-decoration: none;
  color: inherit;
  border-block-start: 3px solid transparent;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}

.topic-card.is-micro {
  border-block-start-color: var(--color-micro);
}

.topic-card.is-macro {
  border-block-start-color: var(--color-macro);
}

.topic-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.topic-card.is-done {
  background: color-mix(in srgb, var(--color-success-soft) 45%, var(--bg-surface));
}

.topic-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.topic-num {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--ink-muted);
}

.done-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--color-success);
}

.topic-card h3 {
  font-size: 1.12rem;
}

.topic-card p {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--ink-secondary);
  flex: 1;
}

.topic-card-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-block-start: 0.65rem;
  border-block-start: 1px solid var(--border-subtle);
  font-size: 0.82rem;
}

.meta-time {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--ink-muted);
}

.open-link {
  font-weight: 600;
  color: var(--color-micro);
}

.topic-card.is-macro .open-link {
  color: var(--color-macro);
}

@media (max-width: 820px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
