<script setup lang="ts">
import { useId } from 'vue';
import type { ComparisonTable } from '@/types/economics';

defineProps<{
  table: ComparisonTable;
}>();

const captionId = useId();

function cssString(value: string): string {
  return JSON.stringify(value ?? '');
}
</script>

<template>
  <div
    class="table-wrapper"
    tabindex="0"
    role="region"
    :aria-labelledby="table.caption ? captionId : undefined"
    :aria-label="!table.caption ? 'Tabela porównawcza' : undefined"
  >
    <table class="comparison-table">
      <caption v-if="table.caption" :id="captionId" class="table-caption">
        {{ table.caption }}
      </caption>
      <thead>
        <tr>
          <th v-for="(header, idx) in table.headers" :key="idx" scope="col">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIdx) in table.rows" :key="rowIdx">
          <template v-for="(cell, colIdx) in row" :key="colIdx">
            <th
              v-if="colIdx === 0 && table.highlightFirstColumn !== false"
              scope="row"
              class="row-header"
            >
              {{ cell }}
            </th>
            <td
              v-else
              :style="{ '--col-label': cssString(table.headers[colIdx] ?? '') }"
            >
              {{ cell }}
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Responsive sticky + container-query stacked table (modern-web-guidance: responsive-table) */
.table-wrapper {
  margin-block: 1.25rem;
  overflow: auto;
  max-inline-size: 100%;
  max-block-size: min(560px, 80vh);
  container-type: inline-size;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface);
  box-shadow: var(--shadow-sm);
}

.comparison-table {
  inline-size: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: start;
}

.table-caption {
  padding: 0.75rem 1rem;
  text-align: start;
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--ink-primary);
  background: var(--bg-elevated);
  border-block-end: 1px solid var(--border-subtle);
}

thead {
  position: sticky;
  inset-block-start: 0;
  z-index: 2;
}

thead th {
  padding: 0.7rem 0.95rem;
  background: var(--bg-elevated);
  color: var(--ink-primary);
  font-weight: 600;
  text-wrap: balance;
  border-block-end: 1px solid var(--border-strong);
  border-inline-end: 1px solid var(--border-subtle);
}

thead th:last-child {
  border-inline-end: 0;
}

tbody th,
tbody td {
  padding: 0.7rem 0.95rem;
  vertical-align: top;
  border-block-end: 1px solid var(--border-subtle);
  border-inline-end: 1px solid var(--border-subtle);
  color: var(--ink-secondary);
}

tbody tr:last-child th,
tbody tr:last-child td {
  border-block-end: 0;
}

tbody td:last-child {
  border-inline-end: 0;
}

tbody th.row-header {
  position: sticky;
  inset-inline-start: 0;
  z-index: 1;
  background: var(--bg-surface);
  color: var(--ink-primary);
  font-weight: 600;
  text-wrap: balance;
}

tbody tr:nth-child(even) td {
  background: color-mix(in srgb, var(--bg-elevated) 45%, var(--bg-surface));
}

tbody tr:nth-child(even) th.row-header {
  background: color-mix(in srgb, var(--bg-elevated) 45%, var(--bg-surface));
}

@container (width < 560px) {
  .comparison-table,
  thead,
  tbody,
  tr,
  th,
  td {
    display: block;
  }

  thead {
    display: none;
  }

  tbody {
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  tr {
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-sm);
    overflow: hidden;
    background: var(--bg-surface);
  }

  tbody th.row-header {
    position: sticky;
    inset-block-start: 0;
    z-index: 2;
    background: var(--bg-elevated);
    border-inline-end: 0;
    border-block-end: 1px solid var(--border-subtle);
  }

  tbody td {
    border-inline-end: 0;
    background: var(--bg-surface) !important;
  }

  tbody td::before {
    content: var(--col-label) ": ";
    display: block;
    font-size: 0.76rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--ink-muted);
    margin-block-end: 0.15rem;
  }
}
</style>
