<script setup lang="ts">
import { computed, ref, watch } from 'vue';

type CompareMode = 'riviera-vs-cars' | 'tax-incidence' | 'demand-elasticity';

const props = withDefaults(
  defineProps<{
    preset?: string;
    title?: string;
    caption?: string;
    interactive?: boolean;
  }>(),
  {
    preset: 'riviera-vs-cars',
    interactive: true,
  },
);

const mode = ref<CompareMode>(
  props.preset === 'tax-incidence' || props.preset === 'demand-elasticity'
    ? props.preset
    : 'riviera-vs-cars',
);

watch(
  () => props.preset,
  (next) => {
    if (next === 'riviera-vs-cars' || next === 'tax-incidence' || next === 'demand-elasticity') {
      mode.value = next;
    }
  },
);

/** Demand shift intensity for Riviera vs Cars (1.0 = base, 2.0 = doubled demand) */
const demandMultiplier = ref(1.85);
/** Excise tax size for tax-incidence mode */
const taxSize = ref(3.2);

// Geometry helper for each side-by-side panel (0..10 in Q and P)
const W = 285;
const H = 250;
const P = { l: 42, r: 18, t: 22, b: 36 };
const pw = W - P.l - P.r;
const ph = H - P.t - P.b;
const sx = (q: number) => P.l + (q / 10) * pw;
const sy = (p: number) => P.t + ph - (p / 10) * ph;

// Mode 1: Riviera (steep S: P = -16 + 4Q => slope 4) vs Cars (flat S: P = 2.8 + 0.25Q)
const rivieraData = computed(() => {
  const shift = (demandMultiplier.value - 1) * 3.8;
  // Demand: P = 9 - 0.8Q  (shifted: 9 + shift - 0.8Q)
  // Inelastic supply: P = -14 + 3.8Q -> base E1: 9 - 0.8Q = -14 + 3.8Q => 4.6Q = 23 => Q1 = 5, P1 = 5
  const q1 = 5;
  const p1 = 5;
  const q2 = (23 + shift) / 4.6;
  const p2 = 9 + shift - 0.8 * q2;
  return {
    q1,
    p1,
    q2,
    p2,
    deltaP: ((p2 - p1) / p1) * 100,
    deltaQ: ((q2 - q1) / q1) * 100,
    shift,
  };
});

const carsData = computed(() => {
  const shift = (demandMultiplier.value - 1) * 3.8;
  // Elastic supply: P = 3.75 + 0.25Q -> base E1: 9 - 0.8Q = 3.75 + 0.25Q => 1.05Q = 5.25 => Q1 = 5, P1 = 5
  const q1 = 5;
  const p1 = 5;
  const q2 = (5.25 + shift) / 1.05;
  const p2 = 3.75 + 0.25 * q2;
  return {
    q1,
    p1,
    q2,
    p2,
    deltaP: ((p2 - p1) / p1) * 100,
    deltaQ: ((q2 - q1) / q1) * 100,
    shift,
  };
});

// Mode 2: Tax incidence (inelastic demand like gasoline vs elastic demand)
const taxInelastic = computed(() => {
  // Steep D: P = 17.5 - 2.5Q, S: P = 2.5 + 0.5Q -> E1: Q=5, P=5
  const t = taxSize.value;
  // With tax t: 17.5 - 2.5Q = 2.5 + t + 0.5Q => 3Q = 15 - t => Q_t = 5 - t/3
  const qt = 5 - t / 3;
  const pk = 17.5 - 2.5 * qt;
  const pp = pk - t;
  const buyerShare = Math.round(((pk - 5) / t) * 100);
  const sellerShare = 100 - buyerShare;
  return { qt, pk, pp, buyerShare, sellerShare };
});

const taxElastic = computed(() => {
  // Flat D: P = 6.5 - 0.3Q, S: P = 0.5 + 0.9Q -> E1: Q=5, P=5
  const t = taxSize.value;
  // With tax t: 6.5 - 0.3Q = 0.5 + t + 0.9Q => 1.2Q = 6 - t => Q_t = 5 - t/1.2
  const qt = Math.max(1.2, 5 - t / 1.2);
  const pk = 6.5 - 0.3 * qt;
  const pp = pk - t;
  const buyerShare = Math.round(((pk - 5) / t) * 100);
  const sellerShare = 100 - buyerShare;
  return { qt, pk, pp, buyerShare, sellerShare };
});

const defaultCaption = computed(() => {
  if (mode.value === 'riviera-vs-cars') {
    return 'Zadanie 7 (Riwiera Francuska vs Samochody): podaż ziemi na Riwierze jest niemal stała (nieelastyczna), więc podwojenie popytu wywołuje silny wzrost ceny i minimalny wzrost ilości. W branży samochodowej podaż jest elastyczna — rośnie głównie ilość.';
  }
  if (mode.value === 'tax-incidence') {
    return 'Rozkład ciężaru podatku akcyzowego (np. akcyza na benzynę): większą część podatku ponosi ta strona rynku, która jest MNIEJ elastyczna (ma mniej substytutów i trudniej jej zrezygnować z transakcji).';
  }
  return 'Gdy popyt jest nieelastyczny (|Ep| < 1), wzrost ceny zwiększa przychód całkowity (TR = P·Q). Gdy popyt jest elastyczny (|Ep| > 1), wzrost ceny zmniejsza TR.';
});
</script>

<template>
  <figure class="graph-figure">
    <div class="graph-header">
      <figcaption class="graph-title">
        {{
          title ||
          (mode === 'riviera-vs-cars'
            ? 'Podaż nieelastyczna vs elastyczna (Riwiera Francuska i Samochody)'
            : mode === 'tax-incidence'
              ? 'Kto płaci akcyzę? Ciężar podatku a elastyczność popytu'
              : 'Wpływ elastyczności popytu na przychód całkowity (TR)')
        }}
      </figcaption>
    </div>

    <div v-if="interactive" class="mode-pills" role="group" aria-label="Tryb porównania elastyczności">
      <button
        type="button"
        class="pill-btn"
        :aria-pressed="mode === 'riviera-vs-cars'"
        @click="mode = 'riviera-vs-cars'"
      >
        Riwiera vs Samochody (Ćw. 7)
      </button>
      <button
        type="button"
        class="pill-btn"
        :aria-pressed="mode === 'tax-incidence'"
        @click="mode = 'tax-incidence'"
      >
        Akcyza na benzynę (Ciężar podatku)
      </button>
      <button
        type="button"
        class="pill-btn"
        :aria-pressed="mode === 'demand-elasticity'"
        @click="mode = 'demand-elasticity'"
      >
        Popyt a utarg (TR)
      </button>
    </div>

    <!-- MODE 1: RIVIERA VS CARS -->
    <div v-if="mode === 'riviera-vs-cars'" class="compare-grid">
      <!-- Left: Inelastic supply -->
      <div class="panel-card">
        <div class="panel-heading">
          <strong>A. Nieruchomości na Riwierze</strong>
          <span class="badge badge-rose">Podaż nieelastyczna</span>
        </div>
        <svg :viewBox="`0 0 ${W} ${H}`" class="econ-svg" role="img" aria-label="Rynek nieruchomości na Riwierze: stroma krzywa podaży powoduje duży wzrost ceny i mały wzrost ilości">
          <line :x1="P.l" :y1="P.t" :x2="P.l" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <line :x1="P.l" :y1="P.t + ph" :x2="P.l + pw" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <text :x="P.l - 10" :y="P.t + 10" font-size="11" font-weight="600" fill="var(--ink-muted)">P</text>
          <text :x="P.l + pw - 6" :y="P.t + ph + 24" font-size="11" font-weight="600" fill="var(--ink-muted)">Q</text>

          <!-- Steep Supply S -->
          <line :x1="sx(3.9)" :y1="sy(0.8)" :x2="sx(6.2)" :y2="sy(9.5)" stroke="var(--color-macro)" stroke-width="3" />
          <text :x="sx(6.35)" :y="sy(9.1)" font-size="12" font-weight="700" fill="var(--color-macro)">S</text>

          <!-- D1 (base) -->
          <line :x1="sx(1)" :y1="sy(8.2)" :x2="sx(9)" :y2="sy(1.8)" stroke="var(--color-micro)" stroke-opacity="0.45" stroke-width="2" stroke-dasharray="5 4" />
          <text :x="sx(8.7)" :y="sy(1.2)" font-size="11" font-weight="700" fill="var(--color-micro)" fill-opacity="0.6">D₁</text>

          <!-- D2 (shifted) -->
          <line
            :x1="sx(Math.max(0.5, (rivieraData.shift - 0.5) / 0.8))"
            :y1="sy(Math.min(9.5, 9 + rivieraData.shift - 0.8 * Math.max(0.5, (rivieraData.shift - 0.5) / 0.8)))"
            :x2="sx(9.5)"
            :y2="sy(Math.max(0.8, 9 + rivieraData.shift - 0.8 * 9.5))"
            stroke="var(--color-micro)"
            stroke-width="3"
          />
          <text :x="sx(8.6)" :y="sy(Math.max(1.8, 9 + rivieraData.shift - 0.8 * 8.6)) - 6" font-size="12" font-weight="700" fill="var(--color-micro)">D₂</text>

          <!-- Delta P & Delta Q highlight bars -->
          <line :x1="P.l" :y1="sy(rivieraData.p1)" :x2="sx(rivieraData.q1)" :y2="sy(rivieraData.p1)" stroke="var(--ink-muted)" stroke-dasharray="3 3" />
          <line :x1="P.l" :y1="sy(rivieraData.p2)" :x2="sx(rivieraData.q2)" :y2="sy(rivieraData.p2)" stroke="var(--color-rose)" stroke-dasharray="3 3" />
          <line :x1="P.l + 6" :y1="sy(rivieraData.p1)" :x2="P.l + 6" :y2="sy(rivieraData.p2)" stroke="var(--color-rose)" stroke-width="4" />
          <text :x="P.l + 13" :y="(sy(rivieraData.p1) + sy(rivieraData.p2)) / 2 + 4" font-size="10.5" font-weight="700" fill="var(--color-rose)">ΔP↑↑</text>

          <line :x1="sx(rivieraData.q1)" :y1="P.t + ph - 5" :x2="sx(rivieraData.q2)" :y2="P.t + ph - 5" stroke="var(--color-macro)" stroke-width="4" />
          <text :x="(sx(rivieraData.q1) + sx(rivieraData.q2)) / 2" :y="P.t + ph + 16" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--color-macro)">małe ΔQ</text>

          <circle :cx="sx(rivieraData.q1)" :cy="sy(rivieraData.p1)" r="4.5" fill="var(--ink-muted)" />
          <circle :cx="sx(rivieraData.q2)" :cy="sy(rivieraData.p2)" r="5.5" fill="var(--color-rose)" />
        </svg>
        <p class="panel-metric">
          Cena: <strong class="metric-rose">+{{ rivieraData.deltaP.toFixed(0) }}%</strong> • Ilość: <strong>+{{ rivieraData.deltaQ.toFixed(0) }}%</strong>
        </p>
      </div>

      <!-- Right: Elastic supply -->
      <div class="panel-card">
        <div class="panel-heading">
          <strong>B. Rynek samochodów</strong>
          <span class="badge badge-macro">Podaż elastyczna</span>
        </div>
        <svg :viewBox="`0 0 ${W} ${H}`" class="econ-svg" role="img" aria-label="Rynek samochodów: płaska krzywa podaży powoduje mały wzrost ceny i duży wzrost ilości">
          <line :x1="P.l" :y1="P.t" :x2="P.l" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <line :x1="P.l" :y1="P.t + ph" :x2="P.l + pw" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <text :x="P.l - 10" :y="P.t + 10" font-size="11" font-weight="600" fill="var(--ink-muted)">P</text>
          <text :x="P.l + pw - 6" :y="P.t + ph + 24" font-size="11" font-weight="600" fill="var(--ink-muted)">Q</text>

          <!-- Flat Supply S -->
          <line :x1="sx(0.5)" :y1="sy(3.88)" :x2="sx(9.5)" :y2="sy(6.13)" stroke="var(--color-macro)" stroke-width="3" />
          <text :x="sx(9.1)" :y="sy(6.45)" font-size="12" font-weight="700" fill="var(--color-macro)">S</text>

          <!-- D1 -->
          <line :x1="sx(1)" :y1="sy(8.2)" :x2="sx(9)" :y2="sy(1.8)" stroke="var(--color-micro)" stroke-opacity="0.45" stroke-width="2" stroke-dasharray="5 4" />
          <text :x="sx(8.6)" :y="sy(1.2)" font-size="11" font-weight="700" fill="var(--color-micro)" fill-opacity="0.6">D₁</text>

          <!-- D2 -->
          <line
            :x1="sx(Math.max(0.5, (carsData.shift - 0.5) / 0.8))"
            :y1="sy(Math.min(9.5, 9 + carsData.shift - 0.8 * Math.max(0.5, (carsData.shift - 0.5) / 0.8)))"
            :x2="sx(9.5)"
            :y2="sy(Math.max(0.8, 9 + carsData.shift - 0.8 * 9.5))"
            stroke="var(--color-micro)"
            stroke-width="3"
          />
          <text :x="sx(8.4)" :y="sy(Math.max(1.8, 9 + carsData.shift - 0.8 * 8.4)) - 6" font-size="12" font-weight="700" fill="var(--color-micro)">D₂</text>

          <!-- Delta P & Delta Q highlight bars -->
          <line :x1="P.l" :y1="sy(carsData.p1)" :x2="sx(carsData.q1)" :y2="sy(carsData.p1)" stroke="var(--ink-muted)" stroke-dasharray="3 3" />
          <line :x1="P.l" :y1="sy(carsData.p2)" :x2="sx(carsData.q2)" :y2="sy(carsData.p2)" stroke="var(--color-trap)" stroke-dasharray="3 3" />
          <line :x1="P.l + 6" :y1="sy(carsData.p1)" :x2="P.l + 6" :y2="sy(carsData.p2)" stroke="var(--color-trap)" stroke-width="4" />
          <text :x="P.l + 13" :y="sy(carsData.p2) - 4" font-size="10.5" font-weight="700" fill="var(--color-trap)">małe ΔP</text>

          <line :x1="sx(carsData.q1)" :y1="sy(carsData.p1)" :x2="sx(carsData.q1)" :y2="P.t + ph" stroke="var(--ink-muted)" stroke-dasharray="3 3" />
          <line :x1="sx(carsData.q2)" :y1="sy(carsData.p2)" :x2="sx(carsData.q2)" :y2="P.t + ph" stroke="var(--color-macro)" stroke-dasharray="3 3" />
          <line :x1="sx(carsData.q1)" :y1="P.t + ph - 5" :x2="sx(carsData.q2)" :y2="P.t + ph - 5" stroke="var(--color-macro)" stroke-width="4" />
          <text :x="(sx(carsData.q1) + sx(carsData.q2)) / 2" :y="P.t + ph + 16" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--color-macro)">ΔQ↑↑</text>

          <circle :cx="sx(carsData.q1)" :cy="sy(carsData.p1)" r="4.5" fill="var(--ink-muted)" />
          <circle :cx="sx(carsData.q2)" :cy="sy(carsData.p2)" r="5.5" fill="var(--color-macro)" />
        </svg>
        <p class="panel-metric">
          Cena: <strong>+{{ carsData.deltaP.toFixed(0) }}%</strong> • Ilość: <strong class="metric-macro">+{{ carsData.deltaQ.toFixed(0) }}%</strong>
        </p>
      </div>
    </div>

    <!-- MODE 2: TAX INCIDENCE -->
    <div v-else-if="mode === 'tax-incidence'" class="compare-grid">
      <div class="panel-card">
        <div class="panel-heading">
          <strong>A. Popyt nieelastyczny (np. benzyna)</strong>
          <span class="badge badge-rose">Płaci głównie konsument</span>
        </div>
        <svg :viewBox="`0 0 ${W} ${H}`" class="econ-svg" role="img" aria-label="Podatek akcyzowy przy nieelastycznym popycie: większość ciężaru spada na konsumenta">
          <line :x1="P.l" :y1="P.t" :x2="P.l" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <line :x1="P.l" :y1="P.t + ph" :x2="P.l + pw" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <!-- Consumer tax burden box -->
          <rect :x="P.l" :y="sy(taxInelastic.pk)" :width="sx(taxInelastic.qt) - P.l" :height="sy(5) - sy(taxInelastic.pk)" fill="var(--color-rose)" fill-opacity="0.22" />
          <!-- Producer tax burden box -->
          <rect :x="P.l" :y="sy(5)" :width="sx(taxInelastic.qt) - P.l" :height="sy(taxInelastic.pp) - sy(5)" fill="var(--color-macro)" fill-opacity="0.22" />
          <!-- Curves -->
          <line :x1="sx(3.2)" :y1="sy(9.5)" :x2="sx(6.6)" :y2="sy(1)" stroke="var(--color-micro)" stroke-width="3" />
          <line :x1="sx(0.5)" :y1="sy(2.75)" :x2="sx(9.5)" :y2="sy(7.25)" stroke="var(--color-macro)" stroke-width="3" />
          <line :x1="P.l" :y1="sy(5)" :x2="sx(5)" :y2="sy(5)" stroke="var(--ink-muted)" stroke-dasharray="4 3" />
          <!-- Tax wedge -->
          <line :x1="sx(taxInelastic.qt)" :y1="sy(taxInelastic.pk)" :x2="sx(taxInelastic.qt)" :y2="sy(taxInelastic.pp)" stroke="var(--color-trap)" stroke-width="3.5" />
          <text :x="P.l + 8" :y="(sy(taxInelastic.pk) + sy(5)) / 2 + 4" font-size="10.5" font-weight="700" fill="var(--color-rose)">Konsument ({{ taxInelastic.buyerShare }}%)</text>
          <text :x="P.l + 8" :y="sy(taxInelastic.pp) + 12" font-size="10" font-weight="600" fill="var(--color-macro)">Producent ({{ taxInelastic.sellerShare }}%)</text>
          <text :x="sx(3.45)" :y="sy(9.1)" font-size="12" font-weight="700" fill="var(--color-micro)">D</text>
          <text :x="sx(9.1)" :y="sy(7.5)" font-size="12" font-weight="700" fill="var(--color-macro)">S</text>
        </svg>
        <p class="panel-metric">
          Ciężar konsumenta: <strong class="metric-rose">{{ taxInelastic.buyerShare }}%</strong> • Producenta: <strong>{{ taxInelastic.sellerShare }}%</strong>
        </p>
      </div>

      <div class="panel-card">
        <div class="panel-heading">
          <strong>B. Popyt elastyczny (dużo substytutów)</strong>
          <span class="badge badge-macro">Płaci głównie producent</span>
        </div>
        <svg :viewBox="`0 0 ${W} ${H}`" class="econ-svg" role="img" aria-label="Podatek akcyzowy przy elastycznym popycie: większość ciężaru spada na producenta">
          <line :x1="P.l" :y1="P.t" :x2="P.l" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <line :x1="P.l" :y1="P.t + ph" :x2="P.l + pw" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <rect :x="P.l" :y="sy(taxElastic.pk)" :width="sx(taxElastic.qt) - P.l" :height="sy(5) - sy(taxElastic.pk)" fill="var(--color-rose)" fill-opacity="0.22" />
          <rect :x="P.l" :y="sy(5)" :width="sx(taxElastic.qt) - P.l" :height="sy(taxElastic.pp) - sy(5)" fill="var(--color-macro)" fill-opacity="0.22" />
          <line :x1="sx(0.5)" :y1="sy(6.35)" :x2="sx(9.5)" :y2="sy(3.65)" stroke="var(--color-micro)" stroke-width="3" />
          <line :x1="sx(0.8)" :y1="sy(1.22)" :x2="sx(9.2)" :y2="sy(8.78)" stroke="var(--color-macro)" stroke-width="3" />
          <line :x1="P.l" :y1="sy(5)" :x2="sx(5)" :y2="sy(5)" stroke="var(--ink-muted)" stroke-dasharray="4 3" />
          <line :x1="sx(taxElastic.qt)" :y1="sy(taxElastic.pk)" :x2="sx(taxElastic.qt)" :y2="sy(taxElastic.pp)" stroke="var(--color-trap)" stroke-width="3.5" />
          <text :x="P.l + 8" :y="sy(taxElastic.pk) - 6" font-size="10" font-weight="600" fill="var(--color-rose)">Konsument ({{ taxElastic.buyerShare }}%)</text>
          <text :x="P.l + 8" :y="(sy(5) + sy(taxElastic.pp)) / 2 + 4" font-size="10.5" font-weight="700" fill="var(--color-macro)">Producent ({{ taxElastic.sellerShare }}%)</text>
          <text :x="sx(9.1)" :y="sy(4.1)" font-size="12" font-weight="700" fill="var(--color-micro)">D</text>
          <text :x="sx(8.7)" :y="sy(8.8)" font-size="12" font-weight="700" fill="var(--color-macro)">S</text>
        </svg>
        <p class="panel-metric">
          Ciężar konsumenta: <strong>{{ taxElastic.buyerShare }}%</strong> • Producenta: <strong class="metric-macro">{{ taxElastic.sellerShare }}%</strong>
        </p>
      </div>
    </div>

    <!-- MODE 3: DEMAND ELASTICITY & TOTAL REVENUE -->
    <div v-else class="compare-grid">
      <div class="panel-card">
        <div class="panel-heading">
          <strong>A. Popyt nieelastyczny (|Eₚ| &lt; 1)</strong>
          <span class="badge badge-micro">P↑ ⇒ TR↑</span>
        </div>
        <svg :viewBox="`0 0 ${W} ${H}`" class="econ-svg" role="img" aria-label="Popyt nieelastyczny: wzrost ceny zwiększa przychód całkowity">
          <line :x1="P.l" :y1="P.t" :x2="P.l" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <line :x1="P.l" :y1="P.t + ph" :x2="P.l + pw" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <!-- Gain area -->
          <rect :x="P.l" :y="sy(7.5)" :width="sx(4.2) - P.l" :height="sy(4.5) - sy(7.5)" fill="var(--color-macro)" fill-opacity="0.22" />
          <!-- Loss area -->
          <rect :x="sx(4.2)" :y="sy(4.5)" :width="sx(5.4) - sx(4.2)" :height="sy(0) - sy(4.5)" fill="var(--color-rose)" fill-opacity="0.22" />
          <line :x1="sx(3.2)" :y1="sy(9.8)" :x2="sx(6.6)" :y2="sy(1.5)" stroke="var(--color-micro)" stroke-width="3" />
          <text :x="P.l + 10" :y="sy(6)" font-size="10.5" font-weight="700" fill="var(--color-macro)">+ Zysk z wyższej P</text>
          <text :x="sx(4.3)" :y="sy(2.2)" font-size="10" font-weight="700" fill="var(--color-rose)">−Q</text>
        </svg>
        <p class="panel-metric">Efekt ceny &gt; efekt ilości ⇒ <strong class="metric-macro">Utarg TR rośnie</strong></p>
      </div>

      <div class="panel-card">
        <div class="panel-heading">
          <strong>B. Popyt elastyczny (|Eₚ| &gt; 1)</strong>
          <span class="badge badge-rose">P↑ ⇒ TR↓</span>
        </div>
        <svg :viewBox="`0 0 ${W} ${H}`" class="econ-svg" role="img" aria-label="Popyt elastyczny: wzrost ceny zmniejsza przychód całkowity">
          <line :x1="P.l" :y1="P.t" :x2="P.l" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <line :x1="P.l" :y1="P.t + ph" :x2="P.l + pw" :y2="P.t + ph" stroke="var(--ink-secondary)" stroke-width="1.8" />
          <rect :x="P.l" :y="sy(6.2)" :width="sx(3.2) - P.l" :height="sy(4.8) - sy(6.2)" fill="var(--color-macro)" fill-opacity="0.22" />
          <rect :x="sx(3.2)" :y="sy(4.8)" :width="sx(7.4) - sx(3.2)" :height="sy(0) - sy(4.8)" fill="var(--color-rose)" fill-opacity="0.22" />
          <line :x1="sx(0.8)" :y1="sy(7.0)" :x2="sx(9.4)" :y2="sy(4.1)" stroke="var(--color-micro)" stroke-width="3" />
          <text :x="P.l + 8" :y="sy(5.4)" font-size="10" font-weight="700" fill="var(--color-macro)">+P</text>
          <text :x="sx(3.8)" :y="sy(2.4)" font-size="10.5" font-weight="700" fill="var(--color-rose)">− Duża strata ilości Q</text>
        </svg>
        <p class="panel-metric">Efekt ilości &gt; efekt ceny ⇒ <strong class="metric-rose">Utarg TR spada</strong></p>
      </div>
    </div>

    <div v-if="interactive && mode === 'riviera-vs-cars'" class="graph-controls">
      <label class="control-field">
        <span class="control-label-row">
          <span>Skala wzrostu popytu (D₁ → D₂)</span>
          <span class="control-value">{{ demandMultiplier.toFixed(2) }}×</span>
        </span>
        <input v-model.number="demandMultiplier" type="range" min="1.1" max="2.1" step="0.05" />
      </label>
    </div>

    <div v-else-if="interactive && mode === 'tax-incidence'" class="graph-controls">
      <label class="control-field">
        <span class="control-label-row">
          <span>Wysokość podatku akcyzowego (t)</span>
          <span class="control-value">{{ taxSize.toFixed(1) }} zł/jedn.</span>
        </span>
        <input v-model.number="taxSize" type="range" min="1.0" max="4.2" step="0.2" />
      </label>
    </div>

    <p class="graph-caption">{{ caption || defaultCaption }}</p>
  </figure>
</template>

<style scoped>
.mode-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-block-end: 0.9rem;
}

.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
  gap: 1rem;
}

.panel-card {
  padding: 0.85rem;
  border-radius: var(--radius-md);
  background: var(--bg-canvas);
  border: 1px solid var(--border-subtle);
}

.panel-card :deep(svg.econ-svg text) {
  stroke: var(--bg-canvas);
}

.panel-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  margin-block-end: 0.5rem;
  font-size: 0.88rem;
}

.panel-metric {
  margin: 0.5rem 0 0;
  font-size: 0.84rem;
  text-align: center;
  color: var(--ink-secondary);
}

.metric-rose {
  color: var(--color-rose);
}

.metric-macro {
  color: var(--color-macro);
}
</style>
