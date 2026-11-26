<script setup lang="ts">
import { computed, ref } from 'vue';
import { RotateCcw } from 'lucide-vue-next';

const props = withDefaults(
  defineProps<{
    preset?: string;
    title?: string;
    caption?: string;
    interactive?: boolean;
  }>(),
  {
    preset: 'interactive',
    interactive: true,
  },
);

const income = ref(props.preset === 'income-shift' ? 130 : 100);
const px = ref(props.preset === 'price-rotation' ? 6.5 : 10);
const py = ref(10);

function reset(): void {
  income.value = 100;
  px.value = 10;
  py.value = 10;
}

const W = 580;
const H = 360;
const PAD = { l: 60, r: 28, t: 24, b: 48 };
const plotW = W - PAD.l - PAD.r;
const plotH = H - PAD.t - PAD.b;

const maxAxis = 22;
const xOf = (x: number) => PAD.l + (x / maxAxis) * plotW;
const yOf = (y: number) => PAD.t + plotH - (y / maxAxis) * plotH;

// Reference baseline: I=100, Px=10, Py=10 => intercepts (10, 10), optimum (5, 5)
const base = { maxX: 10, maxY: 10, optX: 5, optY: 5 };

const opt = computed(() => {
  const maxX = income.value / px.value;
  const maxY = income.value / py.value;
  // Cobb-Douglas U = X^0.5 * Y^0.5 => exact optimum X* = I/(2Px), Y* = I/(2Py)
  const xStar = income.value / (2 * px.value);
  const yStar = income.value / (2 * py.value);
  const utility = Math.sqrt(xStar * yStar);
  const mrs = px.value / py.value;
  return { maxX, maxY, xStar, yStar, utility, mrs };
});

function buildIndifferencePath(uVal: number): string {
  // X * Y = uVal^2 => Y = uVal^2 / X
  const k = uVal * uVal;
  const pts: string[] = [];
  for (let i = 0; i <= 80; i++) {
    const x = 0.6 + (i / 80) * (maxAxis - 0.8);
    const y = k / x;
    if (y > 0.3 && y <= maxAxis - 0.3) {
      pts.push(`${pts.length === 0 ? 'M' : 'L'} ${xOf(x).toFixed(1)} ${yOf(y).toFixed(1)}`);
    }
  }
  return pts.join(' ');
}

const curveLow = computed(() => buildIndifferencePath(opt.value.utility * 0.72));
const curveOpt = computed(() => buildIndifferencePath(opt.value.utility));
const curveHigh = computed(() => buildIndifferencePath(opt.value.utility * 1.28));

const ticks = [0, 5, 10, 15, 20];
</script>

<template>
  <figure class="graph-figure">
    <div class="graph-header">
      <figcaption class="graph-title">
        {{ title || 'Linia budżetowa, krzywe obojętności i optimum konsumenta (MRS = Pₓ / Pᵧ)' }}
      </figcaption>
      <button v-if="interactive" type="button" class="btn-mini" @click="reset">
        <RotateCcw :size="13" aria-hidden="true" />
        Resetuj
      </button>
    </div>

    <div class="graph-svg-wrap">
      <svg
        :viewBox="`0 0 ${W} ${H}`"
        class="econ-svg"
        role="img"
        :aria-label="`Optimum konsumenta: X* = ${opt.xStar.toFixed(1)}, Y* = ${opt.yStar.toFixed(1)} przy dochodzie ${income} zł i cenach Px=${px}, Py=${py}`"
      >
        <!-- Grid -->
        <line
          v-for="t in ticks"
          :key="'cgx-' + t"
          :x1="xOf(t)"
          :y1="PAD.t"
          :x2="xOf(t)"
          :y2="PAD.t + plotH"
          stroke="var(--border-subtle)"
          stroke-dasharray="3 4"
        />
        <line
          v-for="t in ticks"
          :key="'cgy-' + t"
          :x1="PAD.l"
          :y1="yOf(t)"
          :x2="PAD.l + plotW"
          :y2="yOf(t)"
          stroke="var(--border-subtle)"
          stroke-dasharray="3 4"
        />

        <!-- Budget feasible triangle -->
        <polygon
          :points="`${xOf(0)},${yOf(0)} ${xOf(Math.min(maxAxis, opt.maxX))},${yOf(0)} ${xOf(0)},${yOf(Math.min(maxAxis, opt.maxY))}`"
          fill="var(--color-micro)"
          fill-opacity="0.06"
        />

        <!-- Axes -->
        <line :x1="PAD.l" :y1="PAD.t" :x2="PAD.l" :y2="PAD.t + plotH" stroke="var(--ink-secondary)" stroke-width="2" />
        <line :x1="PAD.l" :y1="PAD.t + plotH" :x2="PAD.l + plotW" :y2="PAD.t + plotH" stroke="var(--ink-secondary)" stroke-width="2" />

        <text v-for="t in ticks" :key="'ctx-' + t" :x="xOf(t)" :y="PAD.t + plotH + 18" text-anchor="middle" font-size="11" fill="var(--ink-muted)">{{ t }}</text>
        <text v-for="t in ticks" :key="'cty-' + t" :x="PAD.l - 10" :y="yOf(t) + 4" text-anchor="end" font-size="11" fill="var(--ink-muted)">{{ t }}</text>
        <text :x="PAD.l + plotW / 2" :y="H - 10" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--ink-primary)">Ilość dobra X</text>
        <text :x="18" :y="PAD.t + plotH / 2" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--ink-primary)" :transform="`rotate(-90 18 ${PAD.t + plotH / 2})`">Ilość dobra Y</text>

        <!-- Reference budget line (dashed) -->
        <line
          :x1="xOf(0)"
          :y1="yOf(base.maxY)"
          :x2="xOf(base.maxX)"
          :y2="yOf(0)"
          stroke="var(--ink-muted)"
          stroke-opacity="0.45"
          stroke-width="1.8"
          stroke-dasharray="5 4"
        />

        <!-- Indifference curves -->
        <path :d="curveLow" fill="none" stroke="var(--color-macro)" stroke-opacity="0.45" stroke-width="1.8" />
        <path :d="curveOpt" fill="none" stroke="var(--color-macro)" stroke-width="3" />
        <path :d="curveHigh" fill="none" stroke="var(--color-macro)" stroke-opacity="0.35" stroke-width="1.8" stroke-dasharray="4 4" />

        <!-- Active budget line (clipped to box) -->
        <line
          :x1="xOf(0)"
          :y1="yOf(Math.min(maxAxis, opt.maxY))"
          :x2="xOf(Math.min(maxAxis, opt.maxX))"
          :y2="yOf(0)"
          stroke="var(--color-micro)"
          stroke-width="3"
        />

        <!-- Optimum guides & point -->
        <line :x1="PAD.l" :y1="yOf(opt.yStar)" :x2="xOf(opt.xStar)" :y2="yOf(opt.yStar)" stroke="var(--ink-muted)" stroke-dasharray="4 3" />
        <line :x1="xOf(opt.xStar)" :y1="yOf(opt.yStar)" :x2="xOf(opt.xStar)" :y2="PAD.t + plotH" stroke="var(--ink-muted)" stroke-dasharray="4 3" />

        <circle :cx="xOf(opt.xStar)" :cy="yOf(opt.yStar)" r="6.5" fill="var(--color-micro)" stroke="var(--bg-surface)" stroke-width="2" />
        <text :x="xOf(opt.xStar) + 10" :y="yOf(opt.yStar) - 10" font-size="12" font-weight="700" fill="var(--ink-primary)">
          Optimum E* ({{ opt.xStar.toFixed(1) }}, {{ opt.yStar.toFixed(1) }})
        </text>
        <text :x="xOf(Math.min(maxAxis - 3, opt.xStar * 2.1))" :y="yOf(Math.max(1.2, (opt.utility * opt.utility) / Math.min(maxAxis - 3, opt.xStar * 2.1))) - 6" font-size="11.5" font-weight="700" fill="var(--color-macro)">
          U* (styczna)
        </text>
      </svg>
    </div>

    <div class="graph-readout">
      <span class="readout-item">Maks. X (I/Pₓ): <strong>{{ opt.maxX.toFixed(1) }}</strong></span>
      <span class="readout-item">Maks. Y (I/Pᵧ): <strong>{{ opt.maxY.toFixed(1) }}</strong></span>
      <span class="readout-item">Koszyk optymalny: <strong>X* = {{ opt.xStar.toFixed(1) }}, Y* = {{ opt.yStar.toFixed(1) }}</strong></span>
      <span class="readout-item">Nachylenie (MRS = Pₓ/Pᵧ): <strong>{{ opt.mrs.toFixed(2) }}</strong></span>
    </div>

    <div v-if="interactive" class="graph-controls">
      <label class="control-field">
        <span class="control-label-row">
          <span>Dochód konsumenta (I)</span>
          <span class="control-value">{{ income }} zł</span>
        </span>
        <input v-model.number="income" type="range" min="50" max="170" step="10" />
      </label>
      <label class="control-field">
        <span class="control-label-row">
          <span>Cena dobra X (Pₓ)</span>
          <span class="control-value">{{ px.toFixed(1) }} zł</span>
        </span>
        <input v-model.number="px" type="range" min="5" max="20" step="0.5" />
      </label>
      <label class="control-field">
        <span class="control-label-row">
          <span>Cena dobra Y (Pᵧ)</span>
          <span class="control-value">{{ py.toFixed(1) }} zł</span>
        </span>
        <input v-model.number="py" type="range" min="5" max="20" step="0.5" />
      </label>
    </div>

    <p class="graph-caption">
      {{ caption || 'Zmiana dochodu (I) przesuwa linię budżetową równolegle. Zmiana ceny jednego dobra (Pₓ lub Pᵧ) obraca linię wokół punktu przecięcia z osią drugiego dobra.' }}
    </p>
  </figure>
</template>

<style scoped>
.btn-mini {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  color: var(--ink-secondary);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
}
</style>
