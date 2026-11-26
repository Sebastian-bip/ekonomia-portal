<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { BookOpen, Calculator, FileText, Hash, Search, Sigma, X } from 'lucide-vue-next';
import { buildSearchIndex } from '@/data';
import { registerSearchOpener } from '@/composables/useStudyState';
import type { SearchResultItem } from '@/types/economics';

const router = useRouter();
const dialogEl = ref<HTMLDialogElement | null>(null);
const inputEl = ref<HTMLInputElement | null>(null);
const query = ref('');
const activeIndex = ref(0);

const allItems = computed(() => buildSearchIndex());

const results = computed<SearchResultItem[]>(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) {
    return allItems.value.slice(0, 10);
  }
  const tokens = q.split(/\s+/).filter(Boolean);
  return allItems.value
    .filter((item) => {
      const haystack = `${item.title} ${item.subtitle} ${item.keywords}`.toLowerCase();
      return tokens.every((token) => haystack.includes(token));
    })
    .slice(0, 20);
});

function kindLabel(kind: SearchResultItem['kind']): string {
  switch (kind) {
    case 'topic':
      return 'Temat';
    case 'section':
      return 'Sekcja';
    case 'glossary':
      return 'Definicja';
    case 'formula':
      return 'Wzór';
    case 'exercise':
      return 'Ćwiczenie';
  }
}

function kindIcon(kind: SearchResultItem['kind']) {
  switch (kind) {
    case 'topic':
      return BookOpen;
    case 'section':
      return Hash;
    case 'glossary':
      return FileText;
    case 'formula':
      return Sigma;
    case 'exercise':
      return Calculator;
  }
}

function openDialog(): void {
  const el = dialogEl.value;
  if (!el || el.open) return;
  query.value = '';
  activeIndex.value = 0;
  el.showModal();
  nextTick(() => {
    inputEl.value?.focus();
  });
}

function closeDialog(): void {
  dialogEl.value?.close('dismiss');
}

function onDialogClose(): void {
  if (dialogEl.value) {
    // Reset stale returnValue per modern-web-guidance `dialog`
    dialogEl.value.returnValue = '';
  }
}

function selectItem(item: SearchResultItem): void {
  closeDialog();
  router.push(item.to);
}

function onInputKeydown(event: KeyboardEvent): void {
  if (results.value.length === 0) return;
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    activeIndex.value = (activeIndex.value + 1) % results.value.length;
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    activeIndex.value = (activeIndex.value - 1 + results.value.length) % results.value.length;
  } else if (event.key === 'Enter') {
    event.preventDefault();
    const chosen = results.value[activeIndex.value];
    if (chosen) selectItem(chosen);
  }
}

// Fallback for light-dismiss (`closedby="any"`) when unsupported (Safari), testing pointer coordinates
let pressedOutside = false;
function isOutsideDialog(e: PointerEvent, dialog: HTMLDialogElement): boolean {
  const r = dialog.getBoundingClientRect();
  return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
}

function onPointerDown(e: PointerEvent): void {
  if (!dialogEl.value || 'closedBy' in HTMLDialogElement.prototype) return;
  pressedOutside = isOutsideDialog(e, dialogEl.value);
}

function onPointerUp(e: PointerEvent): void {
  if (!dialogEl.value || 'closedBy' in HTMLDialogElement.prototype) return;
  if (pressedOutside && isOutsideDialog(e, dialogEl.value)) {
    dialogEl.value.close('backdrop');
  }
  pressedOutside = false;
}

onMounted(() => {
  registerSearchOpener(openDialog);
});

onBeforeUnmount(() => {
  registerSearchOpener(null);
});
</script>

<template>
  <!-- Native modal <dialog>: no role="dialog", no aria-modal, no manual Esc trap (modern-web-guidance: dialog) -->
  <dialog
    ref="dialogEl"
    class="search-dialog"
    closedby="any"
    aria-labelledby="search-dialog-title"
    @close="onDialogClose"
    @pointerdown="onPointerDown"
    @pointerup="onPointerUp"
  >
    <div class="search-header">
      <div class="search-title-row">
        <h1 id="search-dialog-title" class="dialog-heading">Szybkie wyszukiwanie</h1>
        <form method="dialog">
          <button type="submit" value="close" class="close-btn" aria-label="Zamknij wyszukiwarkę">
            <X :size="18" aria-hidden="true" />
          </button>
        </form>
      </div>

      <label class="search-field">
        <Search :size="18" class="search-field-icon" aria-hidden="true" />
        <input
          ref="inputEl"
          v-model="query"
          type="search"
          autofocus
          class="search-input"
          placeholder="Wpisz pojęcie, np. elastyczność, DWL, monopol, PKB, deflator…"
          aria-label="Szukaj w tematach, definicjach, wzorach i ćwiczeniach"
          @input="activeIndex = 0"
          @keydown="onInputKeydown"
        />
      </label>
    </div>

    <div class="search-results" role="listbox" aria-label="Wyniki wyszukiwania">
      <p v-if="results.length === 0" class="empty-state">
        Brak wyników dla „{{ query }}”. Spróbuj krótszego hasła, np. <em>popyt</em>, <em>monopol</em> lub <em>PKB</em>.
      </p>

      <button
        v-for="(item, idx) in results"
        :key="item.id"
        type="button"
        class="result-item"
        :class="{ 'is-selected': idx === activeIndex }"
        role="option"
        :aria-selected="idx === activeIndex"
        @mouseenter="activeIndex = idx"
        @click="selectItem(item)"
      >
        <span class="result-icon" aria-hidden="true">
          <component :is="kindIcon(item.kind)" :size="16" />
        </span>
        <span class="result-body">
          <span class="result-top">
            <strong class="result-title">{{ item.title }}</strong>
            <span
              class="badge"
              :class="item.track === 'macro' ? 'badge-macro' : item.track === 'micro' ? 'badge-micro' : 'badge-neutral'"
            >
              {{ kindLabel(item.kind) }}
            </span>
          </span>
          <span class="result-subtitle">{{ item.subtitle }}</span>
        </span>
      </button>
    </div>

    <footer class="search-footer">
      <span><kbd>↑</kbd> <kbd>↓</kbd> nawigacja</span>
      <span><kbd>Enter</kbd> otwórz</span>
      <span><kbd>Esc</kbd> zamknij</span>
    </footer>
  </dialog>
</template>

<style scoped>
/* Never set display unconditionally on <dialog>; scope strictly to dialog[open] (modern-web-guidance: dialog) */
.search-dialog {
  inline-size: min(40rem, calc(100vw - 2rem));
  max-block-size: min(36rem, calc(100dvh - 3rem));
  margin: auto;
  padding: 0;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  color: var(--ink-primary);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.search-dialog[open] {
  display: flex;
  flex-direction: column;
}

.search-header {
  padding: 1rem 1.15rem 0.9rem;
  border-block-end: 1px solid var(--border-subtle);
  background: var(--bg-surface);
}

.search-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-block-end: 0.7rem;
}

.dialog-heading {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
}

.close-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-inline-size: 2.1rem;
  min-block-size: 2.1rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  color: var(--ink-secondary);
  cursor: pointer;
}

.close-btn:hover {
  color: var(--ink-primary);
  border-color: var(--border-strong);
}

.search-field {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.8rem;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--border-strong);
  background: var(--bg-canvas);
}

.search-field:focus-within {
  border-color: var(--color-micro);
}

.search-field-icon {
  color: var(--ink-muted);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: 0;
  background: transparent;
  color: var(--ink-primary);
  font-size: 0.96rem;
  outline: none;
}

.search-results {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.empty-state {
  margin: 2rem 1rem;
  text-align: center;
  color: var(--ink-muted);
  font-size: 0.92rem;
}

.result-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  inline-size: 100%;
  padding: 0.7rem 0.8rem;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  background: transparent;
  text-align: start;
  cursor: pointer;
}

.result-item.is-selected,
.result-item:hover {
  background: var(--bg-elevated);
  border-color: var(--border-subtle);
}

.result-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 2rem;
  block-size: 2rem;
  border-radius: var(--radius-sm);
  background: var(--bg-canvas);
  border: 1px solid var(--border-subtle);
  color: var(--ink-secondary);
  flex-shrink: 0;
  margin-block-start: 0.1rem;
}

.result-body {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-inline-size: 0;
  flex: 1;
}

.result-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.result-title {
  font-size: 0.92rem;
  color: var(--ink-primary);
}

.result-subtitle {
  font-size: 0.82rem;
  color: var(--ink-muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.search-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  padding: 0.6rem 1.15rem;
  border-block-start: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  font-size: 0.78rem;
  color: var(--ink-muted);
}
</style>
