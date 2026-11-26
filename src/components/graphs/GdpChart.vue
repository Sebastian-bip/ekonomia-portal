<script setup lang="ts">
import { computed, ref, watch } from 'vue';

type GdpViewMode = 'nominal-vs-real' | 'gdp-components';

const props = withDefaults(
  defineProps<{
    preset?: string;
    title?: string;
    caption?: string;
    interactive?: boolean;
  }>(),
  {
    preset: 'both',
    interactive: true,
  },
);

const activeMode = ref<GdpViewMode>(
  props.preset === 'gdp-components' ? 'gdp-components' : 'nominal-vs-real',
);

watch(
  () => props.preset,
  (next) => {
    if (next === 'gdp-components' || next === 'nominal-vs-real') {
      activeMode.value = next;
    }
  },
);

// Mode 1: Nominal vs Real GDP with adjustable cumulative inflation
const annualInflation = ref(6);
const selectedYearIdx = ref(3);

const gdpSeries = computed(() => {
  const realValues = [1000, 1035, 1070, 1110, 1145];
  const years = ['Rok 1 (baza)', 'Rok 2', 'Rok 3', 'Rok 4', 'Rok 5'];
  const inf = annualInflation.value / 100;
  return years.map((year, idx) => {
    const deflator = Math.pow(1 + inf, idx) * 100;
    const real = realValues[idx];
    const nominal = (real * deflator) / 100;
    return { year, real, nominal, deflator };
  });
});

const selectedYear = computed(() => gdpSeries.value[selectedYearIdx.value] ?? gdpSeries.value[0]);

// Mode 2: GDP Components C + I + G + NX
const compScenario = ref<'balanced' | 'investment-boom' | 'trade-deficit'>('balanced');

const componentsData = computed(() => {
  if (compScenario.value === 'investment-boom') {
    return {
      label: 'Boom inwestycyjny',
      items: [
        { key: 'C', name: 'Konsumpcja (C)', value: 560, color: 'var(--color-micro)' },
        { key: 'I', name: 'Inwestycje (I)', value: 280, color: 'var(--color-macro)' },
        { key: 'G', name: 'Wydatki rządowe (G)', value: 190, color: 'var(--color-tip)' },
        { key: 'NX', name: 'Eksport netto (X − M)', value: 40, color: 'var(--color-trap)' },
      ],
    };
  }
  if (compScenario.value === 'trade-deficit') {
    return {
      label: 'Deficyt handlowy (M > X)',
      items: [
        { key: 'C', name: 'Konsumpcja (C)', value: 640, color: 'var(--color-micro)' },
        { key: 'I', name: 'Inwestycje (I)', value: 210, color: 'var(--color-macro)' },
        { key: 'G', name: 'Wydatki rządowe (G)', value: 210, color: 'var(--color-tip)' },
        { key: 'NX', name: 'Eksport netto (X − M)', value: -60, color: 'var(--color-rose)' },
      ],
    };
  }
  return {
    label: 'Gospodarka zrównoważona (typowy udział w UE/PL)',
    items: [
      { key: 'C', name: 'Konsumpcja (C)', value: 580, color: 'var(--color-micro)' },
      { key: 'I', name: 'Inwestycje (I)', value: 200, color: 'var(--color-macro)' },
      { key: 'G', name: 'Wydatki rządowe (G)', value: 190, color: 'var(--color-tip)' },
      { key: 'NX', name: 'Eksport netto (X − M)', value: 30, color: 'var(--color-trap)' },
    ],
  };
});

const totalGdp = computed(() =>
  componentsData.value.items.reduce((sum, item) => sum + item.value, 0),
);

// SVG geometry for bar chart
const W = 600;
const H = 330;
const PAD = { l: 58, r: 28, t: 28, b: 48 };
const plotW = W - PAD.l - PAD.r;
const plotH = H - PAD.t - PAD.b;

const maxVal = computed(() =>
  Math.max(1600, ...gdpSeries.value.map((d) => Math.ceil(d.nominal / 200) * 200)),
);

const yBar = (v: number) => PAD.t + plotH - (v / maxVal.value) * plotH;
</script>

<template>
  <figure class="graph-figure">
    <div class="graph-header">
      <figcaption class="graph-title">
        {{
          title ||
          (activeMode === 'nominal-vs-real'
            ? 'PKB nominalny vs PKB realny oraz Deflator PKB'
            : 'Struktura wydatkowa PKB: C + I + G + NX')
        }}
      </figcaption>
      <div v-if="interactive" class="mode-switch" role="group" aria-label="Widok wykresu PKB">
        <button
          type="button"
          class="pill-btn is-macro"
          :aria-pressed="activeMode === 'nominal-vs-real'"
          @click="activeMode = 'nominal-vs-real'"
        >
          Nominalny vs Realny
        </button>
        <button
          type="button"
          class="pill-btn is-macro"
          :aria-pressed="activeMode === 'gdp-components'"
          @click="activeMode = 'gdp-components'"
        >
          Składniki C + I + G + NX
        </button>
      </div>
    </div>

    <!-- VIEW 1: NOMINAL VS REAL GDP -->
    <template v-if="activeMode === 'nominal-vs-real'">
      <div class="graph-svg-wrap">
        <svg
          :viewBox="`0 0 ${W} ${H}`"
          class="econ-svg"
          role="img"
          aria-label="Porównanie PKB nominalnego i PKB realnego w kolejnych latach wraz z deflatorem PKB"
        >
          <!-- Horizontal gridlines -->
          <g v-for="step in 4" :key="'g-' + step">
            <line
              :x1="PAD.l"
              :y1="yBar((maxVal / 4) * step)"
              :x2="PAD.l + plotW"
              :y2="yBar((maxVal / 4) * step)"
              stroke="var(--border-subtle)"
              stroke-dasharray="3 4"
            />
            <text
              :x="PAD.l - 8"
              :y="yBar((maxVal / 4) * step) + 4"
              text-anchor="end"
              font-size="11"
              fill="var(--ink-muted)"
            >
              {{ Math.round((maxVal / 4) * step) }}
            </text>
          </g>

          <!-- Baseline axes -->
          <line :x1="PAD.l" :y1="PAD.t" :x2="PAD.l" :y2="PAD.t + plotH" stroke="var(--ink-secondary)" stroke-width="2" />
          <line :x1="PAD.l" :y1="PAD.t + plotH" :x2="PAD.l + plotW" :y2="PAD.t + plotH" stroke="var(--ink-secondary)" stroke-width="2" />

          <!-- Bars per year -->
          <g
            v-for="(item, idx) in gdpSeries"
            :key="item.year"
            class="bar-group"
            tabindex="0"
            role="button"
            :aria-label="`${item.year}: PKB nominalny ${item.nominal.toFixed(0)} mld, PKB realny ${item.real} mld, Deflator ${item.deflator.toFixed(1)}`"
            @click="selectedYearIdx = idx"
            @keydown.enter="selectedYearIdx = idx"
          >
            <!-- Highlight active column -->
            <rect
              v-if="selectedYearIdx === idx"
              :x="PAD.l + idx * (plotW / 5) + 8"
              :y="PAD.t"
              :width="plotW / 5 - 16"
              :height="plotH"
              rx="6"
              fill="var(--color-macro-soft)"
            />

            <!-- Nominal bar -->
            <rect
              :x="PAD.l + idx * (plotW / 5) + 18"
              :y="yBar(item.nominal)"
              width="30"
              :height="PAD.t + plotH - yBar(item.nominal)"
              rx="4"
              fill="var(--color-micro)"
            />
            <text
              :x="PAD.l + idx * (plotW / 5) + 33"
              :y="yBar(item.nominal) - 6"
              text-anchor="middle"
              font-size="10.5"
              font-weight="700"
              fill="var(--color-micro)"
            >
              {{ item.nominal.toFixed(0) }}
            </text>

            <!-- Real bar -->
            <rect
              :x="PAD.l + idx * (plotW / 5) + 52"
              :y="yBar(item.real)"
              width="30"
              :height="PAD.t + plotH - yBar(item.real)"
              rx="4"
              fill="var(--color-macro)"
            />
            <text
              :x="PAD.l + idx * (plotW / 5) + 67"
              :y="yBar(item.real) - 6"
              text-anchor="middle"
              font-size="10.5"
              font-weight="700"
              fill="var(--color-macro)"
            >
              {{ item.real }}
            </text>

            <text
              :x="PAD.l + idx * (plotW / 5) + 50"
              :y="PAD.t + plotH + 20"
              text-anchor="middle"
              font-size="11.5"
              :font-weight="selectedYearIdx === idx ? '700' : '500'"
              fill="var(--ink-primary)"
            >
              {{ item.year }}
            </text>
          </g>

          <!-- Legend -->
          <rect :x="PAD.l + 10" :y="8" width="12" height="12" rx="2" fill="var(--color-micro)" />
          <text :x="PAD.l + 27" :y="18" font-size="11.5" font-weight="600" fill="var(--ink-primary)">PKB nominalny (ceny bieżące)</text>
          <rect :x="PAD.l + 225" :y="8" width="12" height="12" rx="2" fill="var(--color-macro)" />
          <text :x="PAD.l + 242" :y="18" font-size="11.5" font-weight="600" fill="var(--ink-primary)">PKB realny (ceny roku bazowego)</text>
        </svg>
      </div>

      <div class="graph-readout">
        <span class="readout-item">Wybrany okres: <strong>{{ selectedYear.year }}</strong></span>
        <span class="readout-item">PKB nominalny: <strong>{{ selectedYear.nominal.toFixed(0) }} mld</strong></span>
        <span class="readout-item">PKB realny: <strong>{{ selectedYear.real }} mld</strong></span>
        <span class="readout-item">
          Deflator PKB:
          <strong>({{ selectedYear.nominal.toFixed(0) }} / {{ selectedYear.real }}) × 100 = {{ selectedYear.deflator.toFixed(1) }}</strong>
        </span>
      </div>

      <div v-if="interactive" class="graph-controls">
        <label class="control-field">
          <span class="control-label-row">
            <span>Średnia roczna inflacja cen (wpływa na PKB nominalny)</span>
            <span class="control-value">{{ annualInflation }}% rocznie</span>
          </span>
          <input v-model.number="annualInflation" type="range" min="0" max="15" step="1" />
        </label>
      </div>
    </template>

    <!-- VIEW 2: GDP COMPONENTS C + I + G + NX -->
    <template v-else>
      <div v-if="interactive" class="scenario-pills" role="group" aria-label="Scenariusz struktury PKB">
        <button type="button" class="pill-btn is-macro" :aria-pressed="compScenario === 'balanced'" @click="compScenario = 'balanced'">
          Gospodarka zrównoważona
        </button>
        <button type="button" class="pill-btn is-macro" :aria-pressed="compScenario === 'investment-boom'" @click="compScenario = 'investment-boom'">
          Boom inwestycyjny (↑I)
        </button>
        <button type="button" class="pill-btn is-macro" :aria-pressed="compScenario === 'trade-deficit'" @click="compScenario = 'trade-deficit'">
          Deficyt handlowy (NX &lt; 0)
        </button>
      </div>

      <div class="components-list">
        <div v-for="item in componentsData.items" :key="item.key" class="comp-row">
          <div class="comp-meta">
            <span class="comp-name">{{ item.name }}</span>
            <strong class="mono">
              {{ item.value > 0 ? `+${item.value}` : item.value }} mld zł
              ({{ ((item.value / totalGdp) * 100).toFixed(1) }}%)
            </strong>
          </div>
          <div class="comp-bar-track">
            <div
              class="comp-bar-fill"
              :style="{
                inlineSize: `${Math.min(100, (Math.abs(item.value) / 700) * 100)}%`,
                background: item.color,
              }"
            />
          </div>
        </div>
      </div>

      <div class="graph-readout">
        <span class="readout-item">Scenariusz: <strong>{{ componentsData.label }}</strong></span>
        <span class="readout-item">Łączny PKB = C + I + G + NX: <strong>{{ totalGdp }} mld zł</strong></span>
      </div>
    </template>

    <p class="graph-caption">
      {{
        caption ||
        (activeMode === 'nominal-vs-real'
          ? 'Kliknij wybrany rok lub zmień stopę inflacji: w roku bazowym PKB nominalny = PKB realny (Deflator = 100). Przy wyższej inflacji PKB nominalny rośnie znacznie szybciej niż realna produkcja.'
          : 'Konsumpcja (C) stanowi zazwyczaj największą część PKB (ok. 55–65%). Gdy import przewyższa eksport (M > X), eksport netto NX jest ujemny i obniża PKB.')
      }}
    </p>
  </figure>
</template>

<style scoped>
.mode-switch,
.scenario-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.scenario-pills {
  margin-block-end: 0.9rem;
}

.bar-group {
  cursor: pointer;
}

.components-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 0.5rem 0.25rem;
}

.comp-row {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.comp-meta {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.9rem;
}

.comp-name {
  font-weight: 600;
  color: var(--ink-primary);
}

.comp-bar-track {
  inline-size: 100%;
  block-size: 0.85rem;
  border-radius: 999px;
  background: var(--bg-elevated);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
}

.comp-bar-fill {
  block-size: 100%;
  border-radius: 999px;
  transition: inline-size 0.25s ease;
}
</style>
