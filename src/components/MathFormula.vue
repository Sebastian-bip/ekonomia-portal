<script setup lang="ts">
import { computed, ref } from 'vue';
import katex from 'katex';
import { Check, Copy } from 'lucide-vue-next';
import type { FormulaSymbol } from '@/types/economics';

const props = withDefaults(
  defineProps<{
    latex: string;
    display?: boolean;
    title?: string;
    plainReading?: string;
    symbols?: FormulaSymbol[];
    note?: string;
    showCopy?: boolean;
  }>(),
  {
    display: true,
    showCopy: true,
  },
);

const copied = ref(false);

const renderedHtml = computed(() => {
  try {
    return katex.renderToString(props.latex, {
      displayMode: props.display,
      throwOnError: false,
      strict: 'ignore',
    });
  } catch {
    return props.latex;
  }
});

function renderInlineSymbol(sym: string): string {
  try {
    return katex.renderToString(sym, {
      displayMode: false,
      throwOnError: false,
      strict: 'ignore',
    });
  } catch {
    return sym;
  }
}

async function copyLatex(): Promise<void> {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return;
  try {
    await navigator.clipboard.writeText(props.latex);
    copied.value = true;
    window.setTimeout(() => {
      copied.value = false;
    }, 1800);
  } catch {
    // Ignore clipboard rejection
  }
}
</script>

<template>
  <span v-if="!display" class="math-inline" v-html="renderedHtml" />

  <div v-else class="formula-card">
    <div v-if="title || showCopy" class="formula-header">
      <span v-if="title" class="formula-title">{{ title }}</span>
      <span v-else class="formula-title formula-title-muted">Wzór</span>
      <button
        v-if="showCopy"
        type="button"
        class="copy-btn"
        :aria-label="copied ? 'Skopiowano wzór' : 'Kopiuj wzór LaTeX'"
        @click="copyLatex"
      >
        <Check v-if="copied" :size="14" aria-hidden="true" />
        <Copy v-else :size="14" aria-hidden="true" />
        <span>{{ copied ? 'Skopiowano' : 'Kopiuj wzór' }}</span>
      </button>
    </div>

    <div class="formula-math" tabindex="0" aria-label="Wzór matematyczny" v-html="renderedHtml" />

    <p v-if="plainReading" class="formula-reading">
      <strong>Jak to czytać:</strong> {{ plainReading }}
    </p>

    <dl v-if="symbols && symbols.length > 0" class="symbol-legend">
      <div v-for="(item, idx) in symbols" :key="idx" class="symbol-row">
        <dt class="symbol-term" v-html="renderInlineSymbol(item.symbol)" />
        <dd class="symbol-def">— {{ item.meaning }}</dd>
      </div>
    </dl>

    <p v-if="note" class="formula-note">{{ note }}</p>
  </div>
</template>

<style scoped>
.math-inline {
  display: inline-block;
  vertical-align: middle;
}

.formula-card {
  margin-block: 1.15rem;
  padding: 1rem 1.2rem;
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-inline-start: 3.5px solid var(--color-micro);
  box-shadow: var(--shadow-sm);
}

.formula-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-block-end: 0.65rem;
}

.formula-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink-primary);
}

.formula-title-muted {
  color: var(--ink-muted);
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.6rem;
  min-block-size: 1.9rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  color: var(--ink-secondary);
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
}

.copy-btn:hover {
  border-color: var(--border-strong);
  color: var(--ink-primary);
}

.formula-math {
  overflow-x: auto;
  padding: 0.5rem 0.25rem;
  color: var(--ink-primary);
}

.formula-math :deep(.katex-display) {
  margin: 0.25rem 0;
}

.formula-reading {
  margin: 0.6rem 0 0;
  padding-block-start: 0.6rem;
  border-block-start: 1px dashed var(--border-subtle);
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--ink-secondary);
}

.symbol-legend {
  margin: 0.65rem 0 0;
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 0.4rem 1.25rem;
}

.symbol-row {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  font-size: 0.84rem;
}

.symbol-term {
  font-weight: 600;
  color: var(--color-micro);
  white-space: nowrap;
}

.symbol-def {
  margin: 0;
  color: var(--ink-secondary);
  line-height: 1.45;
}

.formula-note {
  margin: 0.55rem 0 0;
  font-size: 0.84rem;
  color: var(--ink-muted);
}
</style>
