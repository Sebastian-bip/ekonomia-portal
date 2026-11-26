<script setup lang="ts">
import { computed, ref } from 'vue';

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

/**
 * Exact textbook cubic cost curves:
 * FC = 64
 * VC(Q) = 20Q - 3Q^2 + 0.25Q^3
 * AFC(Q) = 64 / Q
 * AVC(Q) = 20 - 3Q + 0.25Q^2  -> exact minimum at Q = 6 (AVC = 11)
 * ATC(Q) = AFC + AVC          -> exact minimum at Q = 8 (ATC = 20)
 * MC(Q)  = 20 - 6Q + 0.75Q^2  -> cuts AVC at (6, 11) and ATC at (8, 20)!
 */
const marketPrice = ref(props.preset === 'shutdown-point' ? 11 : 26);

const mcFn = (q: number) => 20 - 6 * q + 0.75 * q * q;
const avcFn = (q: number) => 20 - 3 * q + 0.25 * q * q;
const afcFn = (q: number) => 64 / q;
const atcFn = (q: number) => afcFn(q) + avcFn(q);

// Solve MC(Q) = P on rising branch (Q >= 4): 0.75Q^2 - 6Q + (20 - P) = 0
const firmDecision = computed(() => {
  const p = marketPrice.value;
  if (p < 11) {
    return {
      status: 'shutdown' as const,
      label: 'Punkt zamknięcia (P < min AVC) — firma wstrzymuje produkcję (Q* = 0)',
      q: 0,
      atc: 0,
      profit: -64,
    };
  }
  const disc = 36 - 3 * (20 - p);
  const q = (6 + Math.sqrt(Math.max(0, disc))) / 1.5;
  const atc = atcFn(q);
  const profit = (p - atc) * q;
  if (p > 20.05) {
    return {
      status: 'profit' as const,
      label: 'Zysk ekonomiczny dodatni (P > min ATC)',
      q,
      atc,
      profit,
    };
  }
  if (Math.abs(p - 20) <= 0.05) {
    return {
      status: 'breakeven' as const,
      label: 'Próg rentowności (Break-even: P = min ATC = 20, zysk = 0)',
      q,
      atc,
      profit: 0,
    };
  }
  return {
    status: 'loss-continue' as const,
    label: 'Strata, ale firma produkuje w krótkim okresie (min AVC ≤ P < ATC)',
    q,
    atc,
    profit,
  };
});

const W = 600;
const H = 370;
const PAD = { l: 58, r: 30, t: 24, b: 48 };
const plotW = W - PAD.l - PAD.r;
const plotH = H - PAD.t - PAD.b;

const qMax = 12;
const pMax = 45;
const xOf = (q: number) => PAD.l + (q / qMax) * plotW;
const yOf = (p: number) => PAD.t + plotH - (p / pMax) * plotH;

function samplePath(fn: (q: number) => number, qStart: number, qEnd: number): string {
  const pts: string[] = [];
  const steps = 90;
  for (let i = 0; i <= steps; i++) {
    const q = qStart + (i / steps) * (qEnd - qStart);
    const val = fn(q);
    if (val >= 0 && val <= pMax) {
      pts.push(`${pts.length === 0 ? 'M' : 'L'} ${xOf(q).toFixed(1)} ${yOf(val).toFixed(1)}`);
    }
  }
  return pts.join(' ');
}

const mcPath = samplePath(mcFn, 0.2, 11.1);
const atcPath = samplePath(atcFn, 2.0, 11.8);
const avcPath = samplePath(avcFn, 0.2, 11.8);
const afcPath = samplePath(afcFn, 1.5, 11.8);

const qTicks = [0, 2, 4, 6, 8, 10, 12];
const pTicks = [0, 10, 20, 30, 40];
</script>

<template>
  <figure class="graph-figure">
    <div class="graph-header">
      <figcaption class="graph-title">
        {{ title || 'Krzywe kosztów przedsiębiorstwa: MC, ATC, AVC i AFC' }}
      </figcaption>
      <span
        class="badge"
        :class="
          firmDecision.status === 'profit'
            ? 'badge-macro'
            : firmDecision.status === 'shutdown'
              ? 'badge-rose'
              : 'badge-trap'
        "
      >
        {{ firmDecision.status === 'profit' ? 'Zysk > 0' : firmDecision.status === 'breakeven' ? 'Zysk = 0' : firmDecision.status === 'loss-continue' ? 'Strata (produkuj)' : 'Zamknięcie (Q=0)' }}
      </span>
    </div>

    <div class="graph-svg-wrap">
      <svg
        :viewBox="`0 0 ${W} ${H}`"
        class="econ-svg"
        role="img"
        aria-label="Krzywe kosztów MC, ATC, AVC i AFC z zaznaczonym punktem zamknięcia Q=6, min AVC=11 oraz progiem rentowności Q=8, min ATC=20"
      >
        <!-- Grid -->
        <line v-for="qt in qTicks" :key="'kq-' + qt" :x1="xOf(qt)" :y1="PAD.t" :x2="xOf(qt)" :y2="PAD.t + plotH" stroke="var(--border-subtle)" stroke-dasharray="3 4" />
        <line v-for="pt in pTicks" :key="'kp-' + pt" :x1="PAD.l" :y1="yOf(pt)" :x2="PAD.l + plotW" :y2="yOf(pt)" stroke="var(--border-subtle)" stroke-dasharray="3 4" />

        <!-- Profit or Loss rectangle -->
        <rect
          v-if="firmDecision.q > 0 && Math.abs(marketPrice - firmDecision.atc) > 0.1"
          :x="xOf(0)"
          :y="yOf(Math.max(marketPrice, firmDecision.atc))"
          :width="xOf(firmDecision.q) - xOf(0)"
          :height="Math.abs(yOf(marketPrice) - yOf(firmDecision.atc))"
          :fill="firmDecision.profit >= 0 ? 'var(--color-macro)' : 'var(--color-trap)'"
          fill-opacity="0.18"
        />

        <!-- Axes -->
        <line :x1="PAD.l" :y1="PAD.t" :x2="PAD.l" :y2="PAD.t + plotH" stroke="var(--ink-secondary)" stroke-width="2" />
        <line :x1="PAD.l" :y1="PAD.t + plotH" :x2="PAD.l + plotW" :y2="PAD.t + plotH" stroke="var(--ink-secondary)" stroke-width="2" />

        <text v-for="qt in qTicks" :key="'ktq-' + qt" :x="xOf(qt)" :y="PAD.t + plotH + 18" text-anchor="middle" font-size="11" fill="var(--ink-muted)">{{ qt }}</text>
        <text v-for="pt in pTicks" :key="'ktp-' + pt" :x="PAD.l - 10" :y="yOf(pt) + 4" text-anchor="end" font-size="11" fill="var(--ink-muted)">{{ pt }}</text>
        <text :x="PAD.l + plotW / 2" :y="H - 10" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--ink-primary)">Wielkość produkcji (Q)</text>
        <text :x="18" :y="PAD.t + plotH / 2" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--ink-primary)" :transform="`rotate(-90 18 ${PAD.t + plotH / 2})`">Koszt / Cena (zł)</text>

        <!-- Curves -->
        <path :d="afcPath" fill="none" stroke="var(--ink-muted)" stroke-width="1.8" stroke-dasharray="5 4" />
        <path :d="avcPath" fill="none" stroke="var(--color-tip)" stroke-width="2.6" />
        <path :d="atcPath" fill="none" stroke="var(--color-micro)" stroke-width="3" />
        <path :d="mcPath" fill="none" stroke="var(--color-rose)" stroke-width="3" />

        <!-- Curve Labels -->
        <text :x="xOf(11.3)" :y="yOf(afcFn(11.3)) - 5" font-size="11" font-weight="600" fill="var(--ink-muted)">AFC</text>
        <text :x="xOf(11.2)" :y="yOf(avcFn(11.2)) + 14" font-size="11.5" font-weight="700" fill="var(--color-tip)">AVC</text>
        <text :x="xOf(11.2)" :y="yOf(atcFn(11.2)) - 6" font-size="12" font-weight="700" fill="var(--color-micro)">ATC</text>
        <text :x="xOf(10.6)" :y="yOf(mcFn(10.6)) - 6" font-size="12.5" font-weight="700" fill="var(--color-rose)">MC</text>

        <!-- Market price horizontal line P = MR -->
        <line
          :x1="PAD.l"
          :y1="yOf(marketPrice)"
          :x2="PAD.l + plotW"
          :y2="yOf(marketPrice)"
          stroke="var(--color-macro)"
          stroke-width="2"
          stroke-dasharray="6 4"
        />
        <text :x="PAD.l + 8" :y="yOf(marketPrice) - 6" font-size="11.5" font-weight="700" fill="var(--color-macro)">
          P = MR = {{ marketPrice }} zł
        </text>

        <!-- Critical points: Shutdown (6, 11) and Break-even (8, 20) -->
        <circle :cx="xOf(6)" :cy="yOf(11)" r="5" fill="var(--color-tip)" stroke="var(--bg-surface)" stroke-width="1.6" />
        <text :x="xOf(6) + 7" :y="yOf(11) + 15" font-size="10.5" font-weight="700" fill="var(--color-tip)">Punkt zamknięcia (6, 11)</text>

        <circle :cx="xOf(8)" :cy="yOf(20)" r="5.5" fill="var(--color-micro)" stroke="var(--bg-surface)" stroke-width="1.6" />
        <text :x="xOf(8) + 8" :y="yOf(20) + 4" font-size="10.5" font-weight="700" fill="var(--color-micro)">Próg rentowności (8, 20)</text>

        <!-- Active optimal Q marker -->
        <g v-if="firmDecision.q > 0">
          <line :x1="xOf(firmDecision.q)" :y1="yOf(marketPrice)" :x2="xOf(firmDecision.q)" :y2="PAD.t + plotH" stroke="var(--ink-primary)" stroke-dasharray="3 3" />
          <circle :cx="xOf(firmDecision.q)" :cy="yOf(marketPrice)" r="6" fill="var(--ink-primary)" stroke="var(--bg-surface)" stroke-width="2" />
        </g>
      </svg>
    </div>

    <div class="graph-readout">
      <span class="readout-item">Decyzja firmy: <strong>{{ firmDecision.label }}</strong></span>
      <span class="readout-item">Q*: <strong>{{ firmDecision.q.toFixed(2) }}</strong></span>
      <span class="readout-item">Zysk (π): <strong>{{ firmDecision.profit >= 0 ? '+' : '' }}{{ firmDecision.profit.toFixed(1) }} zł</strong></span>
    </div>

    <div v-if="interactive" class="graph-controls">
      <label class="control-field">
        <span class="control-label-row">
          <span>Cena rynkowa P (konkurencja doskonała)</span>
          <span class="control-value">{{ marketPrice }} zł</span>
        </span>
        <input v-model.number="marketPrice" type="range" min="6" max="36" step="1" />
      </label>
    </div>

    <p class="graph-caption">
      {{ caption || 'Krzywa MC zawsze przecina krzywe AVC i ATC dokładnie w ich punktach minimum (odpowiednio w Q=6 i Q=8). W krótkim okresie firma produkuje dopóki P ≥ min AVC.' }}
    </p>
  </figure>
</template>
