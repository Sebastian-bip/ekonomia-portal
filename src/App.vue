<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Analytics } from '@vercel/analytics/vue';
import {
  BookOpen,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Menu,
  Moon,
  Search,
  Sun,
  Type,
  X,
} from 'lucide-vue-next';
import { allTopics, macroTopics, microTopics } from '@/data';
import { useStudyState } from '@/composables/useStudyState';
import SearchDialog from '@/components/SearchDialog.vue';

const route = useRoute();
const {
  fontScale,
  completedTopics,
  toggleColorScheme,
  toggleFontScale,
  isTopicCompleted,
  openGlobalSearch,
} = useStudyState();

const mobileMenuOpen = ref(false);

const totalTopicsCount = computed(() => allTopics.length);
const completedCount = computed(() =>
  allTopics.filter((topic) => completedTopics.value.includes(topic.slug)).length,
);
const progressPercent = computed(() =>
  totalTopicsCount.value === 0
    ? 0
    : Math.round((completedCount.value / totalTopicsCount.value) * 100),
);

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false;
  },
);

function onGlobalKeydown(event: KeyboardEvent): void {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openGlobalSearch();
  } else if (event.key === 'Escape' && mobileMenuOpen.value) {
    mobileMenuOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener('keydown', onGlobalKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onGlobalKeydown);
});
</script>

<template>
  <div class="app-shell">
    <a href="#main-content" class="skip-link">Przejdź do treści głównej</a>

    <!-- Mobile overlay backdrop -->
    <div
      v-if="mobileMenuOpen"
      class="drawer-backdrop"
      aria-hidden="true"
      @click="mobileMenuOpen = false"
    />

    <!-- Sticky Left Sidebar / Mobile Navigation Drawer -->
    <aside
      id="primary-sidebar"
      class="sidebar"
      :class="{ 'is-open': mobileMenuOpen }"
      aria-label="Nawigacja główna kompendium"
    >
      <div class="sidebar-brand">
        <RouterLink to="/" class="brand-link">
          <span class="brand-mark" aria-hidden="true">
            <GraduationCap :size="20" />
          </span>
          <span class="brand-text">
            <strong>Ekonomia</strong>
            <small>Kompendium &amp; Kolokwium</small>
          </span>
        </RouterLink>
        <button
          type="button"
          class="icon-btn mobile-close-btn"
          aria-label="Zamknij menu nawigacji"
          @click="mobileMenuOpen = false"
        >
          <X :size="18" />
        </button>
      </div>

      <!-- Progress summary -->
      <div class="sidebar-progress">
        <div class="progress-row">
          <span>Postęp nauki</span>
          <strong class="mono">{{ completedCount }}/{{ totalTopicsCount }}</strong>
        </div>
        <div
          class="progress-track"
          role="progressbar"
          :aria-valuenow="progressPercent"
          aria-valuemin="0"
          aria-valuemax="100"
          :aria-label="`Opanowano ${completedCount} z ${totalTopicsCount} tematów`"
        >
          <div class="progress-fill" :style="{ inlineSize: `${progressPercent}%` }" />
        </div>
      </div>

      <nav class="sidebar-nav" aria-label="Dział i tematy">
        <div class="nav-group">
          <RouterLink to="/" class="nav-item" active-class="is-active" exact-active-class="is-active">
            <Compass :size="17" aria-hidden="true" />
            <span>Start / Plan nauki</span>
          </RouterLink>
        </div>

        <div class="nav-group">
          <p class="nav-heading is-micro">Mikroekonomia</p>
          <ul class="nav-list">
            <li v-for="topic in microTopics" :key="topic.slug">
              <RouterLink
                :to="`/temat/${topic.slug}`"
                class="nav-item"
                active-class="is-active"
              >
                <span class="nav-dot is-micro" aria-hidden="true" />
                <span class="nav-label">{{ topic.order }}. {{ topic.shortTitle }}</span>
                <CheckCircle2
                  v-if="isTopicCompleted(topic.slug)"
                  :size="15"
                  class="done-icon"
                  aria-label="Temat opanowany"
                />
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="nav-group">
          <p class="nav-heading is-macro">Makroekonomia</p>
          <ul class="nav-list">
            <li v-for="topic in macroTopics" :key="topic.slug">
              <RouterLink
                :to="`/temat/${topic.slug}`"
                class="nav-item"
                active-class="is-active"
              >
                <span class="nav-dot is-macro" aria-hidden="true" />
                <span class="nav-label">{{ topic.order }}. {{ topic.shortTitle }}</span>
                <CheckCircle2
                  v-if="isTopicCompleted(topic.slug)"
                  :size="15"
                  class="done-icon"
                  aria-label="Temat opanowany"
                />
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="nav-group">
          <p class="nav-heading">Praktyka i powtórka</p>
          <ul class="nav-list">
            <li>
              <RouterLink to="/cwiczenia" class="nav-item" active-class="is-active">
                <Calculator :size="17" aria-hidden="true" />
                <span>Ćwiczenia z wykładu</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/kolokwium" class="nav-item" active-class="is-active">
                <ClipboardCheck :size="17" aria-hidden="true" />
                <span>Strefa Kolokwium</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/wzory" class="nav-item" active-class="is-active">
                <BookOpen :size="17" aria-hidden="true" />
                <span>Ściąga: Wzory i Definicje</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </aside>

    <!-- Main column -->
    <div class="main-column">
      <header class="topbar">
        <div class="topbar-left">
          <button
            type="button"
            class="icon-btn mobile-menu-btn"
            aria-label="Otwórz menu nawigacji"
            :aria-expanded="mobileMenuOpen"
            aria-controls="primary-sidebar"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Menu :size="20" />
          </button>

          <button
            type="button"
            class="search-trigger"
            aria-label="Szukaj pojęć, wzorów, tematów i zadań (Ctrl+K)"
            @click="openGlobalSearch()"
          >
            <Search :size="16" aria-hidden="true" />
            <span class="search-placeholder">Szukaj pojęć, wzorów, zadań…</span>
            <kbd class="search-kbd">Ctrl K</kbd>
          </button>
        </div>

        <div class="topbar-actions">
          <button
            type="button"
            class="tool-btn"
            :aria-pressed="fontScale === 'large'"
            :title="fontScale === 'large' ? 'Wróć do standardowej czcionki' : 'Włącz większą czcionkę do wygodnego czytania'"
            @click="toggleFontScale()"
          >
            <Type :size="16" aria-hidden="true" />
            <span class="tool-label">{{ fontScale === 'large' ? 'Większa A+' : 'Czcionka A' }}</span>
          </button>

          <button
            type="button"
            class="tool-btn"
            title="Przełącz motyw jasny / ciemny"
            @click="toggleColorScheme()"
          >
            <span class="theme-icon-to-dark">
              <Moon :size="16" aria-hidden="true" />
              <span class="sr-only">Przełącz na tryb ciemny</span>
            </span>
            <span class="theme-icon-to-light">
              <Sun :size="16" aria-hidden="true" />
              <span class="sr-only">Przełącz na tryb jasny</span>
            </span>
            <span class="tool-label" aria-hidden="true">Motyw</span>
          </button>
        </div>
      </header>

      <main id="main-content" class="main-content" tabindex="-1">
        <RouterView />
      </main>
    </div>

    <!-- Global Accessible Native <dialog> Search -->
    <SearchDialog />

    <!-- Vercel Analytics -->
    <Analytics />
  </div>
</template>

<style scoped>
.app-shell {
  display: grid;
  grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
  min-block-size: 100dvh;
  background: var(--bg-canvas);
}

.skip-link {
  position: fixed;
  inset-block-start: -4rem;
  inset-inline-start: 1rem;
  z-index: 200;
  padding: 0.6rem 1rem;
  background: var(--color-micro);
  color: var(--btn-on-accent);
  border-radius: var(--radius-sm);
  text-decoration: none;
  font-weight: 600;
}

.skip-link:focus {
  inset-block-start: 0.75rem;
}

.sidebar {
  position: sticky;
  inset-block-start: 0;
  block-size: 100dvh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0.9rem 1.5rem;
  background: var(--bg-surface);
  border-inline-end: 1px solid var(--border-subtle);
}

.sidebar-brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-inline: 0.35rem;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: var(--ink-primary);
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 2.25rem;
  block-size: 2.25rem;
  border-radius: 0.6rem;
  background: var(--color-micro-soft);
  color: var(--color-micro);
  border: 1px solid var(--color-micro-border);
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-text strong {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 700;
}

.brand-text small {
  font-size: 0.75rem;
  color: var(--ink-muted);
}

.sidebar-progress {
  padding: 0.75rem 0.85rem;
  border-radius: var(--radius-md);
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
}

.progress-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--ink-secondary);
  margin-block-end: 0.45rem;
}

.progress-track {
  inline-size: 100%;
  block-size: 0.45rem;
  border-radius: 999px;
  background: var(--bg-subtle);
  overflow: hidden;
}

.progress-fill {
  block-size: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--color-micro), var(--color-macro));
  transition: inline-size 0.3s ease;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.nav-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-heading {
  margin: 0;
  padding: 0.2rem 0.65rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.nav-heading.is-micro {
  color: var(--color-micro);
}

.nav-heading.is-macro {
  color: var(--color-macro);
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.65rem;
  min-block-size: 2.35rem;
  border-radius: var(--radius-sm);
  color: var(--ink-secondary);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.35;
}

.nav-item:hover {
  background: var(--bg-elevated);
  color: var(--ink-primary);
}

.nav-item.is-active {
  background: var(--color-micro-soft);
  color: var(--color-micro);
  font-weight: 600;
}

.nav-label {
  flex: 1;
}

.nav-dot {
  inline-size: 0.45rem;
  block-size: 0.45rem;
  border-radius: 999px;
  flex-shrink: 0;
}

.nav-dot.is-micro {
  background: var(--color-micro);
}

.nav-dot.is-macro {
  background: var(--color-macro);
}

.done-icon {
  color: var(--color-success);
  flex-shrink: 0;
}

.main-column {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
}

.topbar {
  position: sticky;
  inset-block-start: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-block-size: var(--topbar-height);
  padding: 0.55rem 1.5rem;
  background: color-mix(in srgb, var(--bg-canvas) 88%, transparent);
  backdrop-filter: blur(10px);
  border-block-end: 1px solid var(--border-subtle);
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex: 1;
  min-inline-size: 0;
}

.search-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  flex: 1 1 0;
  min-inline-size: 0;
  max-inline-size: 24rem;
  padding: 0.45rem 0.75rem;
  min-block-size: 2.35rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface);
  color: var(--ink-muted);
  cursor: pointer;
  font-size: 0.88rem;
  text-align: start;
}

.search-trigger svg {
  flex-shrink: 0;
}

.search-trigger:hover {
  border-color: var(--border-strong);
  color: var(--ink-primary);
}

.search-placeholder {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search-kbd {
  font-size: 0.72rem;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-shrink: 0;
}

.tool-btn,
.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.4rem 0.7rem;
  min-inline-size: 2.35rem;
  min-block-size: 2.35rem;
  flex-shrink: 0;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface);
  color: var(--ink-secondary);
  font-size: 0.84rem;
  font-weight: 500;
  cursor: pointer;
}

.icon-btn {
  padding: 0.4rem;
}

.icon-btn svg,
.tool-btn svg {
  flex-shrink: 0;
}

.tool-btn:hover,
.icon-btn:hover {
  background: var(--bg-elevated);
  color: var(--ink-primary);
  border-color: var(--border-strong);
}

.tool-btn[aria-pressed="true"] {
  background: var(--color-micro-soft);
  color: var(--color-micro);
  border-color: var(--color-micro-border);
}

.mobile-menu-btn,
.mobile-close-btn {
  display: none;
}

.drawer-backdrop {
  display: none;
}

.main-content {
  flex: 1;
  padding: 1.75rem clamp(1rem, 3vw, 2.5rem) 4rem;
  outline: none;
}

@media (max-width: 1024px) {
  .app-shell {
    grid-template-columns: minmax(0, 1fr);
  }

  .mobile-menu-btn,
  .mobile-close-btn {
    display: inline-flex;
  }

  .drawer-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 45;
    background: rgb(15 20 25 / 0.5);
  }

  .sidebar {
    position: fixed;
    inset-block: 0;
    inset-inline-start: 0;
    z-index: 50;
    inline-size: min(85vw, 19rem);
    transform: translateX(-105%);
    transition: transform 0.22s ease;
    box-shadow: var(--shadow-md);
  }

  .sidebar.is-open {
    transform: translateX(0);
  }

  .topbar {
    padding-inline: 1rem;
  }
}

@media (max-width: 600px) {
  .tool-label,
  .search-kbd {
    display: none;
  }
}
</style>
