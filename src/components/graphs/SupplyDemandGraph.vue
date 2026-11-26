<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { RotateCcw } from 'lucide-vue-next';

interface SdPresetConfig {
  id: string;
  label: string;
  shortLabel: string;
  xLabel: string;
  yLabel: string;
  qMin: number;
  qMax: number;
  pMin: number;
  pMax: number;
  /** Demand: P = dIntercept - dSlope * Q */
  dIntercept: number;
  dSlope: number;
  /** Supply: P = sIntercept + sSlope * Q */
  sIntercept: number;
  sSlope: number;
  defaultShiftD: number;
  defaultShiftS: number;
  defaultShowTestPrice: boolean;
  defaultTestPrice: number;
  priceUnit: string;
  qtyUnit: string;
  priceDecimals: number;
  qtyDecimals: number;
  note: string;
}

const PRESETS: Record<string, SdPresetConfig> = {
  sandbox: {
    id: 'sandbox',
    label: 'Rynek ogólny (Sandbox)',
    shortLabel: 'Sandbox',
    xLabel: 'Ilość (Q)',
    yLabel: 'Cena (P)',
    qMin: 0,
    qMax: 100,
    pMin: 0,
    pMax: 12,
    dIntercept: 10,
    dSlope: 0.1,
    sIntercept: 2,
    sSlope: 0.1,
    defaultShiftD: 0,
    defaultShiftS: 0,
    defaultShowTestPrice: false,
    defaultTestPrice: 8,
    priceUnit: ' zł',
    qtyUnit: ' szt.',
    priceDecimals: 1,
    qtyDecimals: 0,
    note: 'Przesuwaj krzywe popytu (D) i podaży (S) lub włącz linię ceny testowej, aby zbadać nadwyżkę i niedobór.',
  },
  'roz3a-q20': {
    id: 'roz3a-q20',
    label: 'Roz_3A • Q20 (Qs = 40P − 200, Qd = 1000 − 20P)',
    shortLabel: 'Roz_3A Q20',
    xLabel: 'Ilość (Q)',
    yLabel: 'Cena (P)',
    qMin: 0,
    qMax: 1000,
    pMin: 0,
    pMax: 45,
    // Qd = 1000 - 20P => P = 50 - 0.05Q
    dIntercept: 50,
    dSlope: 0.05,
    // Qs = 40P - 200 => P = 5 + 0.025Q
    sIntercept: 5,
    sSlope: 0.025,
    defaultShiftD: 0,
    defaultShiftS: 0,
    defaultShowTestPrice: true,
    defaultTestPrice: 25,
    priceUnit: '$',
    qtyUnit: '',
    priceDecimals: 0,
    qtyDecimals: 0,
    note: 'Roz_3A Q20: Równowaga E* = ($20, 600). Przy P = $25 powstaje nadwyżka 300 szt. (Qs=800, Qd=500); przy P = $15 niedobór 300 szt.; przy P = $10 niedobór 600 szt.',
  },
  'cigars-q3': {
    id: 'cigars-q3',
    label: 'Cygara Q3 (Substytut papierosów)',
    shortLabel: 'Cygara Q3',
    xLabel: 'Ilość cygar (Q)',
    yLabel: 'Cena cygar (P)',
    qMin: 0,
    qMax: 100,
    pMin: 0,
    pMax: 12,
    dIntercept: 9,
    dSlope: 0.09,
    sIntercept: 1.5,
    sSlope: 0.09,
    defaultShiftD: 2.2,
    defaultShiftS: 0,
    defaultShowTestPrice: false,
    defaultTestPrice: 6,
    priceUnit: '$',
    qtyUnit: '',
    priceDecimals: 1,
    qtyDecimals: 0,
    note: 'Podatek akcyzowy na papierosy podnosi ich cenę → konsumenci przerzucają się na substytut (cygara) → popyt na cygara rośnie (D₁ → D₂), rośnie P* i Q*.',
  },
  'oranges-q4': {
    id: 'oranges-q4',
    label: 'Pomarańcze Q4 (Jednoczesny wzrost D i S)',
    shortLabel: 'Pomarańcze Q4',
    xLabel: 'Ilość pomarańczy (Q)',
    yLabel: 'Cena (P)',
    qMin: 0,
    qMax: 100,
    pMin: 0,
    pMax: 14,
    dIntercept: 10,
    dSlope: 0.1,
    sIntercept: 2,
    sSlope: 0.1,
    defaultShiftD: 2,
    defaultShiftS: -2,
    defaultShowTestPrice: false,
    defaultTestPrice: 6,
    priceUnit: '€',
    qtyUnit: '',
    priceDecimals: 1,
    qtyDecimals: 0,
    note: 'Badania o cukrzycy zwiększają popyt (D w prawo), a nowy nawóz z Hiszpanii zwiększa podaż (S w prawo): ilość Q* rośnie jednoznacznie, natomiast zmiana ceny P* jest niejednoznaczna!',
  },
  'football-q5': {
    id: 'football-q5',
    label: 'Bilety na mecz Q5 (Podaż sztywna Qs = 30 000)',
    shortLabel: 'Bilety Q5',
    xLabel: 'Ilość biletów (tys.)',
    yLabel: 'Cena biletu (€)',
    qMin: 0,
    qMax: 60,
    pMin: 0,
    pMax: 60,
    // Qd (in thousands) = 60 - P => P = 60 - Q (at P=30 => Q=30k, at P=40 => Q=20k)
    dIntercept: 60,
    dSlope: 1,
    // Nearly vertical stadium capacity Qs ≈ 30k (slope 100 gives near-vertical line at Q=30)
    sIntercept: -2970,
    sSlope: 100,
    defaultShiftD: 0,
    defaultShiftS: 0,
    defaultShowTestPrice: true,
    defaultTestPrice: 40,
    priceUnit: ' €',
    qtyUnit: ' tys.',
    priceDecimals: 0,
    qtyDecimals: 1,
    note: 'Pojemność stadionu (30 tys.) tworzy pionową podaż S. Przy P = 40 € sprzedaje się tylko 20 tys. biletów (TR = 800 tys. €); obniżka ceny do 30 € wypełnia stadion i podnosi utarg do 900 tys. €!',
  },
  'chocolate-q6': {
    id: 'chocolate-q6',
    label: 'Czekolady Q6 (Qd = 1600 − 300P, Qs = 1400 + 700P)',
    shortLabel: 'Czekolady Q6',
    xLabel: 'Ilość batonów (Q)',
    yLabel: 'Cena (P)',
    qMin: 1200,
    qMax: 1900,
    pMin: 0,
    pMax: 0.8,
    // Qd = 1600 - 300P => P = (1600 - Q)/300 = 5.3333 - Q/300
    dIntercept: 1600 / 300,
    dSlope: 1 / 300,
    // Qs = 1400 + 700P => P = (Q - 1400)/700 = -2 + Q/700
    sIntercept: -1400 / 700,
    sSlope: 1 / 700,
    defaultShiftD: 0,
    defaultShiftS: 0,
    defaultShowTestPrice: true,
    defaultTestPrice: 0.4,
    priceUnit: '$',
    qtyUnit: ' szt.',
    priceDecimals: 2,
    qtyDecimals: 0,
    note: 'Dokładna równowaga z podręcznika Mankiwa: Qd = Qs dla P* = 0,20$ oraz Q* = 1540 szt. Przy P = 0,40$ powstaje nadwyżka 200 szt.',
  },
  'good-a-equilibrium': {
    id: 'good-a-equilibrium',
    label: 'Dobro A (Qd = 20 − 2P, Qs = 4 + 2P)',
    shortLabel: 'Dobro A',
    xLabel: 'Ilość dobra A (Q)',
    yLabel: 'Cena (P)',
    qMin: 0,
    qMax: 24,
    pMin: 0,
    pMax: 10,
    // Qd = 20 - 2P => P = 10 - 0.5Q
    dIntercept: 10,
    dSlope: 0.5,
    // Qs = 4 + 2P => P = -2 + 0.5Q
    sIntercept: -2,
    sSlope: 0.5,
    defaultShiftD: 0,
    defaultShiftS: 0,
    defaultShowTestPrice: true,
    defaultTestPrice: 6,
    priceUnit: ' zł',
    qtyUnit: '',
    priceDecimals: 1,
    qtyDecimals: 1,
    note: 'Równowaga: P* = 4, Q* = 12. Podniesienie ceny do P = 6 zmniejsza Qd do 8 i zwiększa Qs do 16 (nadwyżka = 8).',
  },
  'price-controls': {
    id: 'price-controls',
    label: 'Cena maksymalna / minimalna',
    shortLabel: 'Ceny urzędowe',
    xLabel: 'Ilość (Q)',
    yLabel: 'Cena (P)',
    qMin: 0,
    qMax: 100,
    pMin: 0,
    pMax: 12,
    dIntercept: 10,
    dSlope: 0.1,
    sIntercept: 2,
    sSlope: 0.1,
    defaultShiftD: 0,
    defaultShiftS: 0,
    defaultShowTestPrice: true,
    defaultTestPrice: 4,
    priceUnit: ' zł',
    qtyUnit: '',
    priceDecimals: 1,
    qtyDecimals: 0,
    note: 'Wiążąca cena maksymalna (P < P*, np. 4 zł) wywołuje trwały niedobór. Wiążąca cena minimalna (P > P*) wywołuje trwałą nadwyżkę.',
  },
};

const props = withDefaults(
  defineProps<{
    preset?: string;
    title?: string;
    caption?: string;
    interactive?: boolean;
  }>(),
  {
    preset: 'sandbox',
    interactive: true,
  },
);

const activePresetKey = ref(PRESETS[props.preset] ? props.preset : 'sandbox');
const cfg = computed(() => PRESETS[activePresetKey.value] ?? PRESETS.sandbox);

const shiftD = ref(cfg.value.defaultShiftD);
const shiftS = ref(cfg.value.defaultShiftS);
const showTestPrice = ref(cfg.value.defaultShowTestPrice);
const testPrice = ref(cfg.value.defaultTestPrice);

watch(
  () => props.preset,
  (next) => {
    if (next && PRESETS[next]) {
      activePresetKey.value = next;
    }
  },
);

watch(
  activePresetKey,
  () => {
    resetToPreset();
  },
);

function resetToPreset(): void {
  shiftD.value = cfg.value.defaultShiftD;
  shiftS.value = cfg.value.defaultShiftS;
  showTestPrice.value = cfg.value.defaultShowTestPrice;
  testPrice.value = cfg.value.defaultTestPrice;
}

// SVG layout geometry
const W = 600;
const H = 370;
const PAD = { left: 66, right: 32, top: 24, bottom: 52 };
const plotW = W - PAD.left - PAD.right;
const plotH = H - PAD.top - PAD.bottom;

function xOf(q: number): number {
  const ratio = (q - cfg.value.qMin) / (cfg.value.qMax - cfg.value.qMin);
  return PAD.left + ratio * plotW;
}

function yOf(p: number): number {
  const ratio = (p - cfg.value.pMin) / (cfg.value.pMax - cfg.value.pMin);
  return PAD.top + plotH - ratio * plotH;
}

function clipLineToBox(
  pAtQ: (q: number) => number,
  qAtP: (p: number) => number,
): { x1: number; y1: number; x2: number; y2: number } | null {
  const { qMin, qMax, pMin, pMax } = cfg.value;
  const pts: Array<{ q: number; p: number }> = [];

  const addIfInside = (q: number, p: number) => {
    const eps = 1e-6;
    if (q >= qMin - eps && q <= qMax + eps && p >= pMin - eps && p <= pMax + eps) {
      if (!pts.some((pt) => Math.abs(pt.q - q) < 1e-4 && Math.abs(pt.p - p) < 1e-4)) {
        pts.push({ q: Math.max(qMin, Math.min(qMax, q)), p: Math.max(pMin, Math.min(pMax, p)) });
      }
    }
  };

  addIfInside(qMin, pAtQ(qMin));
  addIfInside(qMax, pAtQ(qMax));
  addIfInside(qAtP(pMin), pMin);
  addIfInside(qAtP(pMax), pMax);

  if (pts.length < 2) return null;
  pts.sort((a, b) => a.q - b.q);
  return {
    x1: xOf(pts[0].q),
    y1: yOf(pts[0].p),
    x2: xOf(pts[pts.length - 1].q),
    y2: yOf(pts[pts.length - 1].p),
  };
}

// Base equilibrium E1
const baseEq = computed(() => {
  const q = (cfg.value.dIntercept - cfg.value.sIntercept) / (cfg.value.dSlope + cfg.value.sSlope);
  const p = cfg.value.dIntercept - cfg.value.dSlope * q;
  return { q, p };
});

// Shifted equilibrium E2 (note: positive shiftD moves D up/right; positive shiftS moves S up/left = supply decrease)
const shiftedEq = computed(() => {
  const dInt = cfg.value.dIntercept + shiftD.value;
  const sInt = cfg.value.sIntercept + shiftS.value;
  const q = (dInt - sInt) / (cfg.value.dSlope + cfg.value.sSlope);
  const p = dInt - cfg.value.dSlope * q;
  return { q, p };
});

const hasShift = computed(() => Math.abs(shiftD.value) > 0.001 || Math.abs(shiftS.value) > 0.001);

const baseDemandLine = computed(() =>
  clipLineToBox(
    (q) => cfg.value.dIntercept - cfg.value.dSlope * q,
    (p) => (cfg.value.dIntercept - p) / cfg.value.dSlope,
  ),
);

const shiftedDemandLine = computed(() =>
  clipLineToBox(
    (q) => cfg.value.dIntercept + shiftD.value - cfg.value.dSlope * q,
    (p) => (cfg.value.dIntercept + shiftD.value - p) / cfg.value.dSlope,
  ),
);

const baseSupplyLine = computed(() =>
  clipLineToBox(
    (q) => cfg.value.sIntercept + cfg.value.sSlope * q,
    (p) => (p - cfg.value.sIntercept) / cfg.value.sSlope,
  ),
);

const shiftedSupplyLine = computed(() =>
  clipLineToBox(
    (q) => cfg.value.sIntercept + shiftS.value + cfg.value.sSlope * q,
    (p) => (p - (cfg.value.sIntercept + shiftS.value)) / cfg.value.sSlope,
  ),
);

// Test price Qd and Qs
const testAnalysis = computed(() => {
  const p = testPrice.value;
  const qd = (cfg.value.dIntercept + shiftD.value - p) / cfg.value.dSlope;
  const qs = (p - (cfg.value.sIntercept + shiftS.value)) / cfg.value.sSlope;
  const diff = qs - qd;
  const clampedQd = Math.max(cfg.value.qMin, Math.min(cfg.value.qMax, qd));
  const clampedQs = Math.max(cfg.value.qMin, Math.min(cfg.value.qMax, qs));
  let state: 'equilibrium' | 'surplus' | 'shortage' = 'equilibrium';
  if (diff > 0.01) state = 'surplus';
  else if (diff < -0.01) state = 'shortage';
  return { p, qd, qs, diff: Math.abs(diff), clampedQd, clampedQs, state };
});

const xTicks = computed(() => {
  const count = 5;
  const step = (cfg.value.qMax - cfg.value.qMin) / count;
  return Array.from({ length: count + 1 }, (_, i) => cfg.value.qMin + i * step);
});

const yTicks = computed(() => {
  const count = 5;
  const step = (cfg.value.pMax - cfg.value.pMin) / count;
  return Array.from({ length: count + 1 }, (_, i) => cfg.value.pMin + i * step);
});

const shiftRange = computed(() => {
  const span = cfg.value.pMax - cfg.value.pMin;
  return { min: -Number((span * 0.28).toFixed(2)), max: Number((span * 0.28).toFixed(2)), step: Number((span * 0.02).toFixed(2)) || 0.1 };
});

function fmtP(val: number): string {
  const s = val.toFixed(cfg.value.priceDecimals);
  return cfg.value.priceUnit === '$' ? `$${s}` : `${s}${cfg.value.priceUnit}`;
}

function fmtQ(val: number): string {
  return `${val.toFixed(cfg.value.qtyDecimals)}${cfg.value.qtyUnit}`;
}
</script>

<template>
  <figure class="graph-figure">
    <div class="graph-header">
      <figcaption class="graph-title">
        {{ title || cfg.label }}
      </figcaption>
      <div v-if="interactive" class="graph-header-actions">
        <button type="button" class="btn-mini" @click="resetToPreset">
          <RotateCcw :size="13" aria-hidden="true" />
          Resetuj
        </button>
      </div>
    </div>

    <div v-if="interactive && preset === 'sandbox'" class="preset-row" role="group" aria-label="Wybierz scenariusz wykresu">
      <button
        v-for="(item, key) in PRESETS"
        :key="key"
        type="button"
        class="pill-btn preset-chip"
        :title="item.label"
        :aria-pressed="activePresetKey === key"
        @click="activePresetKey = key"
      >
        {{ item.shortLabel }}
      </button>
    </div>

    <div class="graph-svg-wrap">
      <svg
        :viewBox="`0 0 ${W} ${H}`"
        class="econ-svg"
        role="img"
        :aria-label="`Wykres popytu i podaży: ${title || cfg.label}. Punkt równowagi P* = ${fmtP(shiftedEq.p)}, Q* = ${fmtQ(shiftedEq.q)}.`"
      >
        <!-- Grid lines -->
        <g class="grid-lines">
          <line
            v-for="qt in xTicks"
            :key="'gx-' + qt"
            :x1="xOf(qt)"
            :y1="PAD.top"
            :x2="xOf(qt)"
            :y2="PAD.top + plotH"
            stroke="var(--border-subtle)"
            stroke-width="1"
            stroke-dasharray="3 4"
          />
          <line
            v-for="pt in yTicks"
            :key="'gy-' + pt"
            :x1="PAD.left"
            :y1="yOf(pt)"
            :x2="PAD.left + plotW"
            :y2="yOf(pt)"
            stroke="var(--border-subtle)"
            stroke-width="1"
            stroke-dasharray="3 4"
          />
        </g>

        <!-- Axes -->
        <line
          :x1="PAD.left"
          :y1="PAD.top"
          :x2="PAD.left"
          :y2="PAD.top + plotH"
          stroke="var(--ink-secondary)"
          stroke-width="2"
        />
        <line
          :x1="PAD.left"
          :y1="PAD.top + plotH"
          :x2="PAD.left + plotW"
          :y2="PAD.top + plotH"
          stroke="var(--ink-secondary)"
          stroke-width="2"
        />

        <!-- Axis labels & tick values -->
        <text
          v-for="qt in xTicks"
          :key="'tx-' + qt"
          :x="xOf(qt)"
          :y="PAD.top + plotH + 18"
          text-anchor="middle"
          font-size="11"
          fill="var(--ink-muted)"
        >
          {{ qt.toFixed(cfg.qtyDecimals) }}
        </text>
        <text
          v-for="pt in yTicks"
          :key="'ty-' + pt"
          :x="PAD.left - 10"
          :y="yOf(pt) + 4"
          text-anchor="end"
          font-size="11"
          fill="var(--ink-muted)"
        >
          {{ pt.toFixed(cfg.priceDecimals) }}
        </text>
        <text
          :x="PAD.left + plotW / 2"
          :y="H - 10"
          text-anchor="middle"
          font-size="12.5"
          font-weight="600"
          fill="var(--ink-primary)"
        >
          {{ cfg.xLabel }}
        </text>
        <text
          :x="18"
          :y="PAD.top + plotH / 2"
          text-anchor="middle"
          font-size="12.5"
          font-weight="600"
          fill="var(--ink-primary)"
          :transform="`rotate(-90 18 ${PAD.top + plotH / 2})`"
        >
          {{ cfg.yLabel }}
        </text>

        <!-- Base curves (dashed when shifted) -->
        <line
          v-if="hasShift && Math.abs(shiftD) > 0.001 && baseDemandLine"
          :x1="baseDemandLine.x1"
          :y1="baseDemandLine.y1"
          :x2="baseDemandLine.x2"
          :y2="baseDemandLine.y2"
          stroke="var(--color-micro)"
          stroke-opacity="0.4"
          stroke-width="2"
          stroke-dasharray="6 5"
        />
        <text
          v-if="hasShift && Math.abs(shiftD) > 0.001 && baseDemandLine"
          :x="baseDemandLine.x2 - 14"
          :y="baseDemandLine.y2 - 8"
          font-size="12"
          font-weight="700"
          fill="var(--color-micro)"
          fill-opacity="0.55"
        >
          D₁
        </text>

        <line
          v-if="hasShift && Math.abs(shiftS) > 0.001 && baseSupplyLine"
          :x1="baseSupplyLine.x1"
          :y1="baseSupplyLine.y1"
          :x2="baseSupplyLine.x2"
          :y2="baseSupplyLine.y2"
          stroke="var(--color-macro)"
          stroke-opacity="0.4"
          stroke-width="2"
          stroke-dasharray="6 5"
        />
        <text
          v-if="hasShift && Math.abs(shiftS) > 0.001 && baseSupplyLine"
          :x="baseSupplyLine.x2 - 16"
          :y="baseSupplyLine.y2 + 16"
          font-size="12"
          font-weight="700"
          fill="var(--color-macro)"
          fill-opacity="0.55"
        >
          S₁
        </text>

        <!-- Active Demand curve -->
        <line
          v-if="shiftedDemandLine"
          :x1="shiftedDemandLine.x1"
          :y1="shiftedDemandLine.y1"
          :x2="shiftedDemandLine.x2"
          :y2="shiftedDemandLine.y2"
          stroke="var(--color-micro)"
          stroke-width="3"
          stroke-linecap="round"
        />
        <text
          v-if="shiftedDemandLine"
          :x="Math.min(W - 24, shiftedDemandLine.x2 - 8)"
          :y="Math.max(PAD.top + 14, shiftedDemandLine.y2 - 10)"
          font-size="13"
          font-weight="700"
          fill="var(--color-micro)"
        >
          {{ Math.abs(shiftD) > 0.001 ? 'D₂' : 'D' }}
        </text>

        <!-- Active Supply curve -->
        <line
          v-if="shiftedSupplyLine"
          :x1="shiftedSupplyLine.x1"
          :y1="shiftedSupplyLine.y1"
          :x2="shiftedSupplyLine.x2"
          :y2="shiftedSupplyLine.y2"
          stroke="var(--color-macro)"
          stroke-width="3"
          stroke-linecap="round"
        />
        <text
          v-if="shiftedSupplyLine"
          :x="Math.min(W - 24, shiftedSupplyLine.x2 - 10)"
          :y="Math.max(PAD.top + 16, shiftedSupplyLine.y2 + 16)"
          font-size="13"
          font-weight="700"
          fill="var(--color-macro)"
        >
          {{ Math.abs(shiftS) > 0.001 ? 'S₂' : 'S' }}
        </text>

        <!-- Test price line & Surplus / Shortage highlight -->
        <g v-if="showTestPrice">
          <line
            :x1="PAD.left"
            :y1="yOf(testAnalysis.p)"
            :x2="PAD.left + plotW"
            :y2="yOf(testAnalysis.p)"
            :stroke="testAnalysis.state === 'surplus' ? 'var(--color-trap)' : testAnalysis.state === 'shortage' ? 'var(--color-rose)' : 'var(--ink-muted)'"
            stroke-width="2"
            stroke-dasharray="5 4"
          />
          <rect
            v-if="testAnalysis.state !== 'equilibrium'"
            :x="Math.min(xOf(testAnalysis.clampedQd), xOf(testAnalysis.clampedQs))"
            :y="yOf(testAnalysis.p) - 9"
            :width="Math.abs(xOf(testAnalysis.clampedQs) - xOf(testAnalysis.clampedQd))"
            height="18"
            rx="4"
            :fill="testAnalysis.state === 'surplus' ? 'var(--color-trap-soft)' : 'var(--color-rose-soft)'"
            :stroke="testAnalysis.state === 'surplus' ? 'var(--color-trap)' : 'var(--color-rose)'"
            stroke-width="1.5"
          />
          <text
            v-if="testAnalysis.state !== 'equilibrium'"
            :x="(xOf(testAnalysis.clampedQd) + xOf(testAnalysis.clampedQs)) / 2"
            :y="yOf(testAnalysis.p) + 4"
            text-anchor="middle"
            font-size="11"
            font-weight="700"
            :fill="testAnalysis.state === 'surplus' ? 'var(--color-trap)' : 'var(--color-rose)'"
          >
            {{ testAnalysis.state === 'surplus' ? 'NADWYŻKA' : 'NIEDOBÓR' }}
          </text>
          <circle :cx="xOf(testAnalysis.clampedQd)" :cy="yOf(testAnalysis.p)" r="4.5" fill="var(--color-micro)" />
          <circle :cx="xOf(testAnalysis.clampedQs)" :cy="yOf(testAnalysis.p)" r="4.5" fill="var(--color-macro)" />
        </g>

        <!-- Original E1 marker when shifted -->
        <g v-if="hasShift">
          <circle
            :cx="xOf(baseEq.q)"
            :cy="yOf(baseEq.p)"
            r="5"
            fill="var(--bg-surface)"
            stroke="var(--ink-muted)"
            stroke-width="2"
          />
          <text
            :x="xOf(baseEq.q) + 9"
            :y="yOf(baseEq.p) + 15"
            font-size="11.5"
            font-weight="600"
            fill="var(--ink-muted)"
          >
            E₁
          </text>
        </g>

        <!-- Active Equilibrium guides and point -->
        <line
          :x1="PAD.left"
          :y1="yOf(shiftedEq.p)"
          :x2="xOf(shiftedEq.q)"
          :y2="yOf(shiftedEq.p)"
          stroke="var(--ink-muted)"
          stroke-width="1.25"
          stroke-dasharray="4 3"
        />
        <line
          :x1="xOf(shiftedEq.q)"
          :y1="yOf(shiftedEq.p)"
          :x2="xOf(shiftedEq.q)"
          :y2="PAD.top + plotH"
          stroke="var(--ink-muted)"
          stroke-width="1.25"
          stroke-dasharray="4 3"
        />
        <circle
          :cx="xOf(shiftedEq.q)"
          :cy="yOf(shiftedEq.p)"
          r="6.5"
          fill="var(--ink-primary)"
          stroke="var(--bg-surface)"
          stroke-width="2"
        />
        <text
          :x="xOf(shiftedEq.q) + 10"
          :y="yOf(shiftedEq.p) - 9"
          font-size="12.5"
          font-weight="700"
          fill="var(--ink-primary)"
        >
          {{ hasShift ? 'E₂' : 'E*' }} ({{ fmtQ(shiftedEq.q) }}, {{ fmtP(shiftedEq.p) }})
        </text>
      </svg>
    </div>

    <div class="graph-readout">
      <span class="readout-item">
        Cena równowagi P*: <strong>{{ fmtP(shiftedEq.p) }}</strong>
      </span>
      <span class="readout-item">
        Ilość równowagi Q*: <strong>{{ fmtQ(shiftedEq.q) }}</strong>
      </span>
      <span v-if="showTestPrice" class="readout-item">
        Przy P = <strong>{{ fmtP(testAnalysis.p) }}</strong>:
        <span
          class="badge"
          :class="
            testAnalysis.state === 'surplus'
              ? 'badge-trap'
              : testAnalysis.state === 'shortage'
                ? 'badge-rose'
                : 'badge-macro'
          "
        >
          <template v-if="testAnalysis.state === 'surplus'">
            Nadwyżka = {{ fmtQ(testAnalysis.diff) }} (Qs {{ fmtQ(testAnalysis.qs) }} &gt; Qd {{ fmtQ(testAnalysis.qd) }})
          </template>
          <template v-else-if="testAnalysis.state === 'shortage'">
            Niedobór = {{ fmtQ(testAnalysis.diff) }} (Qd {{ fmtQ(testAnalysis.qd) }} &gt; Qs {{ fmtQ(testAnalysis.qs) }})
          </template>
          <template v-else>Równowaga rynkowa (Qd = Qs)</template>
        </span>
      </span>
    </div>

    <div v-if="interactive" class="graph-controls">
      <label class="control-field">
        <span class="control-label-row">
          <span>Przesunięcie popytu (D)</span>
          <span class="control-value">{{ shiftD > 0 ? `+${shiftD.toFixed(1)} (w prawo)` : shiftD < 0 ? `${shiftD.toFixed(1)} (w lewo)` : '0' }}</span>
        </span>
        <input
          v-model.number="shiftD"
          type="range"
          :min="shiftRange.min"
          :max="shiftRange.max"
          :step="shiftRange.step"
        />
      </label>

      <label class="control-field">
        <span class="control-label-row">
          <span>Przesunięcie podaży (S)</span>
          <span class="control-value">{{ shiftS > 0 ? `spadek S (w lewo)` : shiftS < 0 ? `wzrost S (w prawo)` : '0' }}</span>
        </span>
        <input
          v-model.number="shiftS"
          type="range"
          :min="shiftRange.min"
          :max="shiftRange.max"
          :step="shiftRange.step"
        />
      </label>

      <div class="control-field">
        <label class="checkbox-row">
          <input v-model="showTestPrice" type="checkbox" />
          <span>Pokaż linię ceny testowej ({{ fmtP(testPrice) }})</span>
        </label>
        <input
          v-if="showTestPrice"
          v-model.number="testPrice"
          type="range"
          :min="cfg.pMin + (cfg.pMax - cfg.pMin) * 0.1"
          :max="cfg.pMax - (cfg.pMax - cfg.pMin) * 0.1"
          :step="(cfg.pMax - cfg.pMin) / 40"
          aria-label="Poziom ceny testowej"
        />
      </div>
    </div>

    <p class="graph-caption">{{ caption || cfg.note }}</p>
  </figure>
</template>

<style scoped>
.graph-header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

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

.btn-mini:hover {
  color: var(--ink-primary);
  border-color: var(--border-strong);
}

.preset-row {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 0.35rem;
  padding-block-end: 0.25rem;
  margin-block-end: 0.7rem;
  scrollbar-width: thin;
}

.preset-chip {
  flex: none;
  padding: 0.3rem 0.7rem;
  min-block-size: 2rem;
  font-size: 0.8rem;
  white-space: nowrap;
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: var(--ink-primary);
  cursor: pointer;
}
</style>
