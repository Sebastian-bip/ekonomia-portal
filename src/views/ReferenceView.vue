<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { AlertTriangle, BookOpen, Search, Sigma, Sparkles } from 'lucide-vue-next';
import { formulaEntries, glossaryEntries } from '@/data';
import type { Track } from '@/types/economics';
import MathFormula from '@/components/MathFormula.vue';

type RefTab = 'wzory' | 'definicje';

const route = useRoute();
const activeTab = ref<RefTab>(route.query.tab === 'definicje' ? 'definicje' : 'wzory');
const trackFilter = ref<'all' | Track>('all');
const searchQuery = ref(typeof route.query.q === 'string' ? route.query.q : '');

watch(
  () => route.query,
  (q) => {
    if (q.tab === 'definicje' || q.tab === 'wzory') {
      activeTab.value = q.tab;
    }
    if (typeof q.q === 'string') {
      searchQuery.value = q.q;
    }
  },
);

const filteredFormulas = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  return formulaEntries.filter((f) => {
    if (trackFilter.value !== 'all' && f.track !== trackFilter.value) return false;
    if (!q) return true;
    const hay = `${f.name} ${f.category} ${f.plainReading} ${f.whenToUse} ${f.latex}`.toLowerCase();
    return hay.includes(q);
  });
});

const filteredGlossary = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  return glossaryEntries.filter((g) => {
    if (trackFilter.value !== 'all' && g.track !== trackFilter.value) return false;
    if (!q) return true;
    const hay = `${g.term} ${g.englishTerm ?? ''} ${g.category} ${g.definition} ${g.example ?? ''}`.toLowerCase();
    return hay.includes(q);
  });
});

function onTabKeydown(event: KeyboardEvent): void {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    activeTab.value = activeTab.value === 'wzory' ? 'definicje' : 'wzory';
  }
}
</script>

<template>
  <div class="reference-page">
    <header class="page-header">
      <span class="badge badge-macro">Szybka powtórka przed wejściem na salę</span>
      <h1>Ściąga: Wzory i Definicje</h1>
      <p class="page-lead">
        Wszystkie najważniejsze wzory z legendą symboli oraz słownik pojęć mikro- i makroekonomicznych
        z błyskawicznym filtrowaniem.
      </p>
    </header>

    <!-- Search & Track Controls -->
    <section class="ref-controls card" aria-label="Wyszukiwarka wzorów i definicji">
      <label class="search-box">
        <Search :size="16" aria-hidden="true" />
        <input
          v-model="searchQuery"
          type="search"
          placeholder="Szukaj wzoru lub pojęcia (np. deflator, punkt środkowy, DWL, MRS, PKB)…"
          aria-label="Szukaj w ściągawce"
        />
      </label>

      <div class="pill-group" role="group" aria-label="Filtruj dział">
        <button
          type="button"
          class="pill-btn"
          :aria-pressed="trackFilter === 'all'"
          @click="trackFilter = 'all'"
        >
          Wszystkie
        </button>
        <button
          type="button"
          class="pill-btn"
          :aria-pressed="trackFilter === 'micro'"
          @click="trackFilter = 'micro'"
        >
          Mikroekonomia
        </button>
        <button
          type="button"
          class="pill-btn is-macro"
          :aria-pressed="trackFilter === 'macro'"
          @click="trackFilter = 'macro'"
        >
          Makroekonomia
        </button>
      </div>
    </section>

    <!-- Accessible Tabs -->
    <div>
      <div
        class="tabs-bar"
        role="tablist"
        focusgroup="tablist nomemory"
        aria-label="Sekcje ściągi"
      >
        <button
          id="ref-tab-wzory"
          type="button"
          role="tab"
          class="tab-btn"
          :aria-selected="activeTab === 'wzory'"
          :tabindex="activeTab === 'wzory' ? 0 : -1"
          @click="activeTab = 'wzory'"
          @keydown="onTabKeydown"
        >
          <Sigma :size="16" aria-hidden="true" />
          <span>Wzory matematyczne ({{ filteredFormulas.length }})</span>
        </button>
        <button
          id="ref-tab-definicje"
          type="button"
          role="tab"
          class="tab-btn"
          :aria-selected="activeTab === 'definicje'"
          :tabindex="activeTab === 'definicje' ? 0 : -1"
          @click="activeTab = 'definicje'"
          @keydown="onTabKeydown"
        >
          <BookOpen :size="16" aria-hidden="true" />
          <span>Słownik definicji ({{ filteredGlossary.length }})</span>
        </button>
      </div>

      <!-- FORMULAS PANEL -->
      <div
        role="tabpanel"
        aria-labelledby="ref-tab-wzory"
        :hidden="activeTab === 'wzory' ? undefined : 'until-found'"
        @beforematch="activeTab = 'wzory'"
      >
        <div class="ref-panel-inner">
          <p v-if="filteredFormulas.length === 0" class="empty-msg card">
            Brak wzorów pasujących do „{{ searchQuery }}”.
          </p>

          <article v-for="item in filteredFormulas" :key="item.id" class="ref-card card">
            <div class="ref-card-top">
              <div class="ref-badges">
                <span class="badge" :class="item.track === 'macro' ? 'badge-macro' : 'badge-micro'">
                  {{ item.track === 'macro' ? 'Makro' : 'Mikro' }}
                </span>
                <span class="badge badge-neutral">{{ item.category }}</span>
              </div>
              <RouterLink :to="`/temat/${item.topicSlug}`" class="topic-link">
                Temat wykładu →
              </RouterLink>
            </div>

            <h2>{{ item.name }}</h2>

            <MathFormula
              :latex="item.latex"
              :plain-reading="item.plainReading"
              :symbols="item.symbols"
            />

            <p class="when-to-use">
              <strong>Kiedy używać:</strong> {{ item.whenToUse }}
            </p>

            <p v-if="item.examTrap" class="exam-trap-note">
              <AlertTriangle :size="15" aria-hidden="true" />
              <span><strong>Pułapka:</strong> {{ item.examTrap }}</span>
            </p>
          </article>
        </div>
      </div>

      <!-- GLOSSARY PANEL -->
      <div
        role="tabpanel"
        aria-labelledby="ref-tab-definicje"
        :hidden="activeTab === 'definicje' ? undefined : 'until-found'"
        @beforematch="activeTab = 'definicje'"
      >
        <div class="ref-panel-inner">
          <p v-if="filteredGlossary.length === 0" class="empty-msg card">
            Brak definicji pasujących do „{{ searchQuery }}”.
          </p>

          <div class="glossary-grid">
            <article v-for="entry in filteredGlossary" :key="entry.id" class="glossary-card card">
              <div class="ref-card-top">
                <div class="ref-badges">
                  <span class="badge" :class="entry.track === 'macro' ? 'badge-macro' : 'badge-micro'">
                    {{ entry.category }}
                  </span>
                  <span v-if="entry.isExamKey" class="badge badge-trap">
                    <Sparkles :size="12" aria-hidden="true" />
                    Kluczowe
                  </span>
                </div>
                <RouterLink :to="`/temat/${entry.topicSlug}`" class="topic-link">Temat →</RouterLink>
              </div>

              <h2>{{ entry.term }}</h2>
              <p v-if="entry.englishTerm" class="en-term">{{ entry.englishTerm }}</p>
              <p class="def-text">{{ entry.definition }}</p>

              <MathFormula
                v-if="entry.formulaLatex"
                :latex="entry.formulaLatex"
                :show-copy="false"
              />

              <p v-if="entry.example" class="def-example">
                <strong>Przykład:</strong> {{ entry.example }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reference-page {
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
  gap: 0.6rem;
}

.page-lead {
  margin: 0;
  max-inline-size: 66ch;
}

.ref-controls {
  padding: 1rem 1.15rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex: 1 1 18rem;
  padding: 0.5rem 0.8rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-strong);
  background: var(--bg-canvas);
  color: var(--ink-muted);
}

.search-box input {
  flex: 1;
  border: 0;
  background: transparent;
  color: var(--ink-primary);
  font-size: 0.92rem;
  outline: none;
}

.ref-panel-inner {
  padding-block-start: 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.ref-card {
  padding: 1.2rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.ref-card h2 {
  font-size: 1.22rem;
}

.ref-card-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.ref-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.topic-link {
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
}

.topic-link:hover {
  text-decoration: underline;
}

.when-to-use {
  margin: 0;
  font-size: 0.92rem;
}

.exam-trap-note {
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  margin: 0.25rem 0 0;
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-sm);
  background: var(--color-trap-soft);
  border: 1px solid var(--color-trap-border);
  color: var(--color-trap);
  font-size: 0.88rem;
}

.glossary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  gap: 1rem;
}

.glossary-card {
  padding: 1.15rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.glossary-card h2 {
  font-size: 1.15rem;
}

.en-term {
  margin: -0.2rem 0 0;
  font-size: 0.82rem;
  font-style: italic;
  color: var(--ink-muted);
}

.def-text {
  margin: 0.2rem 0 0;
  font-size: 0.92rem;
  color: var(--ink-primary);
}

.def-example {
  margin: 0.25rem 0 0;
  padding-block-start: 0.45rem;
  border-block-start: 1px dashed var(--border-subtle);
  font-size: 0.86rem;
  color: var(--ink-muted);
}

.empty-msg {
  padding: 2rem;
  text-align: center;
  color: var(--ink-muted);
}
</style>
