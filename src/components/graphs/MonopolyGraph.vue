<script setup lang="ts">
import { computed, ref } from 'vue';
import { AlertCircle } from 'lucide-vue-next';

withDefaults(
  defineProps<{
    preset?: string;
    title?: string;
    caption?: string;
    interactive?: boolean;
  }>(),
  {
    preset: 'q180-dwl',
    interactive: true,
  },
);

const showCS = ref(true);
const showPS = ref(true);
const showDWL = ref(true);
const showProfitWarning = ref(true);

/**
 * Exact Python-verified 8.11 monopol.docx equations (Q177–Q180):
 * Demand D:  P = 30 - 0.1Q  (intercepts: P=30, Q=300)
 * MR:        P = 30 - 0.2Q  (intercepts: P=30, Q=150)
 * MC:        MC = mcShift + 0.1Q (default mcShift = 0 => MC = 0.1Q)
 *
 * At default mcShift = 0:
 * - Q177 (Socially efficient P = MC): 30 - 0.1Q = 0.1Q => Q_eff = 150, P_eff = $15
 * - Q178 (Monopoly MR = MC -> D):     30 - 0.2Q = 0.1Q => Q_mon = 100, MC(100) = $10, P_mon = $20
 * - Q179 (Profit?):                   Cannot be determined without ATC / FC!
 * - Q180 (Deadweight Loss):           DWL = 1/2 * (150 - 100) * (20 - 10) = $250!
 */
const mcShift = ref(0);

const model = computed(() => {
  const a = 30;
  const b = 0.1;
  const c0 = mcShift.value;
  const c1 = 0.1;

  // MR = MC: a - 2bQ = c0 + c1Q => Q_mon = (a - c0) / (2b + c1)
  const qMon = Math.max(10, (a - c0) / (2 * b + c1));
  const mcAtQMon = c0 + c1 * qMon;
  const pMon = a - b * qMon;

  // P = MC: a - bQ = c0 + c1Q => Q_eff = (a - c0) / (b + c1)
  const qEff = Math.max(qMon, (a - c0) / (b + c1));
  const pEff = a - b * qEff;

  const cs = 0.5 * qMon * (a - pMon);
  // Trapezoid between P_mon and MC(Q) from Q=0 to Q=qMon
  const ps = 0.5 * ((pMon - c0) + (pMon - mcAtQMon)) * qMon;
  const dwl = 0.5 * (qEff - qMon) * (pMon - mcAtQMon);
  const tr = pMon * qMon;

  return { a, b, c0, c1, qMon, mcAtQMon, pMon, qEff, pEff, cs, ps, dwl, tr };
});

const W = 620;
const H = 385;
const PAD = { l: 64, r: 30, t: 24, b: 50 };
const plotW = W - PAD.l - PAD.r;
const plotH = H - PAD.t - PAD.b;

const qMax = 300;
const pMax = 34;

const xOf = (q: number) => PAD.l + (q / qMax) * plotW;
const yOf = (p: number) => PAD.t + plotH - (p / pMax) * plotH;

const qTicks = [0, 50, 100, 150, 200, 250, 300];
const pTicks = [0, 5, 10, 15, 20, 25, 30];

const mcLineEnd = computed(() => {
  const qEnd = Math.min(qMax, (pMax - model.value.c0) / model.value.c1);
  const pEnd = model.value.c0 + model.value.c1 * qEnd;
  return { qEnd, pEnd };
});
</script>

<template>
  <figure class="graph-figure">
    <div class="graph-header">
      <figcaption class="graph-title">
        {{ title || 'Monopol: MR = MC, cena z krzywej D oraz społeczny koszt monopolu (DWL)' }}
      </figcaption>
      <span v-if="preset === 'q180-dwl'" class="badge badge-rose">
        Zadania Q177–Q180 • DWL = ${{ model.dwl.toFixed(0) }}
      </span>
    </div>

    <div class="toggle-bar" role="group" aria-label="Warstwy wykresu monopolu">
      <button type="button" class="pill-btn" :aria-pressed="showCS" @click="showCS = !showCS">
        Nadwyżka konsumenta (CS)
      </button>
      <button type="button" class="pill-btn is-macro" :aria-pressed="showPS" @click="showPS = !showPS">
        Nadwyżka producenta (PS)
      </button>
      <button type="button" class="pill-btn" :aria-pressed="showDWL" @click="showDWL = !showDWL">
        Strata dobrobytu (DWL)
      </button>
      <button type="button" class="pill-btn" :aria-pressed="showProfitWarning" @click="showProfitWarning = !showProfitWarning">
        Dlaczego brak zysku bez ATC? (Q179)
      </button>
    </div>

    <div class="graph-svg-wrap">
      <svg
        :viewBox="`0 0 ${W} ${H}`"
        class="econ-svg"
        role="img"
        :aria-label="`Wykres monopolu: Q_mon = ${model.qMon.toFixed(0)}, P_mon = $${model.pMon.toFixed(1)}, Q_eff = ${model.qEff.toFixed(0)}, P_eff = $${model.pEff.toFixed(1)}, DWL = $${model.dwl.toFixed(0)}`"
      >
        <!-- Grid -->
        <line
          v-for="qt in qTicks"
          :key="'mq-' + qt"
          :x1="xOf(qt)"
          :y1="PAD.t"
          :x2="xOf(qt)"
          :y2="PAD.t + plotH"
          stroke="var(--border-subtle)"
          stroke-dasharray="3 4"
        />
        <line
          v-for="pt in pTicks"
          :key="'mp-' + pt"
          :x1="PAD.l"
          :y1="yOf(pt)"
          :x2="PAD.l + plotW"
          :y2="yOf(pt)"
          stroke="var(--border-subtle)"
          stroke-dasharray="3 4"
        />

        <!-- Consumer Surplus triangle -->
        <polygon
          v-if="showCS"
          :points="`${xOf(0)},${yOf(model.a)} ${xOf(model.qMon)},${yOf(model.pMon)} ${xOf(0)},${yOf(model.pMon)}`"
          fill="var(--color-micro)"
          fill-opacity="0.18"
        />
        <text
          v-if="showCS"
          :x="xOf(model.qMon * 0.08)"
          :y="yOf(model.pMon + (model.a - model.pMon) * 0.28)"
          font-size="11.5"
          font-weight="700"
          fill="var(--color-micro)"
        >
          CS (${{ model.cs.toFixed(0) }})
        </text>

        <!-- Producer Surplus trapezoid (above MC up to P_mon) -->
        <polygon
          v-if="showPS"
          :points="`${xOf(0)},${yOf(model.pMon)} ${xOf(model.qMon)},${yOf(model.pMon)} ${xOf(model.qMon)},${yOf(model.mcAtQMon)} ${xOf(0)},${yOf(model.c0)}`"
          fill="var(--color-macro)"
          fill-opacity="0.18"
        />
        <text
          v-if="showPS"
          :x="xOf(model.qMon * 0.16)"
          :y="yOf((model.pMon + model.mcAtQMon) / 2) + 4"
          font-size="11.5"
          font-weight="700"
          fill="var(--color-macro)"
        >
          PS (${{ model.ps.toFixed(0) }})
        </text>

        <!-- Deadweight Loss triangle (between D and MC from Q_mon to Q_eff) -->
        <polygon
          v-if="showDWL"
          :points="`${xOf(model.qMon)},${yOf(model.pMon)} ${xOf(model.qEff)},${yOf(model.pEff)} ${xOf(model.qMon)},${yOf(model.mcAtQMon)}`"
          fill="var(--color-rose)"
          fill-opacity="0.3"
          stroke="var(--color-rose)"
          stroke-width="1.6"
        />
        <text
          v-if="showDWL"
          :x="xOf(model.qMon + (model.qEff - model.qMon) * 0.22)"
          :y="yOf(model.pEff) + 4"
          font-size="11.5"
          font-weight="700"
          fill="var(--color-rose)"
        >
          DWL
        </text>

        <!-- Axes -->
        <line :x1="PAD.l" :y1="PAD.t" :x2="PAD.l" :y2="PAD.t + plotH" stroke="var(--ink-secondary)" stroke-width="2" />
        <line :x1="PAD.l" :y1="PAD.t + plotH" :x2="PAD.l + plotW" :y2="PAD.t + plotH" stroke="var(--ink-secondary)" stroke-width="2" />

        <!-- Ticks -->
        <text
          v-for="qt in qTicks"
          :key="'t-mq-' + qt"
          :x="xOf(qt)"
          :y="PAD.t + plotH + 18"
          text-anchor="middle"
          font-size="11"
          fill="var(--ink-muted)"
        >
          {{ qt }}
        </text>
        <text
          v-for="pt in pTicks"
          :key="'t-mp-' + pt"
          :x="PAD.l - 10"
          :y="yOf(pt) + 4"
          text-anchor="end"
          font-size="11"
          fill="var(--ink-muted)"
        >
          ${{ pt }}
        </text>
        <text :x="PAD.l + plotW / 2" :y="H - 10" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--ink-primary)">
          Ilość produkcji (Q)
        </text>
        <text
          :x="18"
          :y="PAD.t + plotH / 2"
          text-anchor="middle"
          font-size="12.5"
          font-weight="600"
          fill="var(--ink-primary)"
          :transform="`rotate(-90 18 ${PAD.t + plotH / 2})`"
        >
          Cena, Koszt, Utarg ($)
        </text>

        <!-- Demand Curve D: P = 30 - 0.1Q -->
        <line :x1="xOf(0)" :y1="yOf(30)" :x2="xOf(300)" :y2="yOf(0)" stroke="var(--color-micro)" stroke-width="3" />
        <text :x="xOf(262)" :y="yOf(5.8)" font-size="13" font-weight="700" fill="var(--color-micro)">D (Popyt)</text>

        <!-- MR Curve: P = 30 - 0.2Q -->
        <line :x1="xOf(0)" :y1="yOf(30)" :x2="xOf(150)" :y2="yOf(0)" stroke="var(--color-tip)" stroke-width="2.5" stroke-dasharray="7 4" />
        <text :x="xOf(134)" :y="yOf(4.2)" font-size="12.5" font-weight="700" fill="var(--color-tip)">MR</text>

        <!-- Upward-sloping MC Curve: MC = mcShift + 0.1Q -->
        <line
          :x1="xOf(0)"
          :y1="yOf(model.c0)"
          :x2="xOf(mcLineEnd.qEnd)"
          :y2="yOf(mcLineEnd.pEnd)"
          stroke="var(--color-macro)"
          stroke-width="3"
        />
        <text :x="xOf(Math.min(285, mcLineEnd.qEnd - 10))" :y="yOf(Math.min(31.5, mcLineEnd.pEnd - 1.5))" text-anchor="end" font-size="12.5" font-weight="700" fill="var(--color-macro)">MC</text>

        <!-- Guide lines for Q_mon, P_mon, Q_eff, P_eff -->
        <line :x1="xOf(model.qMon)" :y1="yOf(model.pMon)" :x2="xOf(model.qMon)" :y2="PAD.t + plotH" stroke="var(--ink-primary)" stroke-width="1.4" stroke-dasharray="4 3" />
        <line :x1="PAD.l" :y1="yOf(model.pMon)" :x2="xOf(model.qMon)" :y2="yOf(model.pMon)" stroke="var(--ink-primary)" stroke-width="1.4" stroke-dasharray="4 3" />
        <line :x1="PAD.l" :y1="yOf(model.mcAtQMon)" :x2="xOf(model.qMon)" :y2="yOf(model.mcAtQMon)" stroke="var(--color-tip)" stroke-width="1.2" stroke-dasharray="3 3" />
        <line :x1="xOf(model.qEff)" :y1="yOf(model.pEff)" :x2="xOf(model.qEff)" :y2="PAD.t + plotH" stroke="var(--color-macro)" stroke-width="1.3" stroke-dasharray="4 3" />
        <line :x1="PAD.l" :y1="yOf(model.pEff)" :x2="xOf(model.qEff)" :y2="yOf(model.pEff)" stroke="var(--color-macro)" stroke-width="1.2" stroke-dasharray="3 3" />

        <!-- Key points -->
        <circle :cx="xOf(model.qMon)" :cy="yOf(model.mcAtQMon)" r="5" fill="var(--color-tip)" stroke="var(--bg-surface)" stroke-width="1.5" />
        <text :x="xOf(model.qMon) + 7" :y="yOf(model.mcAtQMon) + 15" font-size="11" font-weight="700" fill="var(--color-tip)">
          MR=MC (${{ model.mcAtQMon.toFixed(0) }})
        </text>

        <circle :cx="xOf(model.qMon)" :cy="yOf(model.pMon)" r="6" fill="var(--color-micro)" stroke="var(--bg-surface)" stroke-width="2" />
        <text :x="xOf(model.qMon) + 8" :y="yOf(model.pMon) - 8" font-size="12" font-weight="700" fill="var(--ink-primary)">
          Monopol (Q178): Q={{ model.qMon.toFixed(0) }}, P=${{ model.pMon.toFixed(0) }}
        </text>

        <circle :cx="xOf(model.qEff)" :cy="yOf(model.pEff)" r="5.5" fill="var(--color-macro)" stroke="var(--bg-surface)" stroke-width="1.8" />
        <text :x="xOf(model.qEff) + 8" :y="yOf(model.pEff) + 4" font-size="11.5" font-weight="700" fill="var(--color-macro)">
          Efektywne (Q177): Q={{ model.qEff.toFixed(0) }}, P=${{ model.pEff.toFixed(0) }}
        </text>
      </svg>
    </div>

    <div class="graph-readout">
      <span class="readout-item">Monopol (Q178): <strong>Q<sub>mon</sub> = {{ model.qMon.toFixed(0) }}, P<sub>mon</sub> = ${{ model.pMon.toFixed(1) }}</strong></span>
      <span class="readout-item">Efektywność (Q177): <strong>Q<sub>eff</sub> = {{ model.qEff.toFixed(0) }}, P<sub>eff</sub> = ${{ model.pEff.toFixed(1) }}</strong></span>
      <span class="readout-item">
        Społeczny koszt DWL (Q180):
        <strong class="dwl-val">
          ½ · ({{ model.qEff.toFixed(0) }}−{{ model.qMon.toFixed(0) }}) · (${{ model.pMon.toFixed(0) }}−${{ model.mcAtQMon.toFixed(0) }}) = ${{ model.dwl.toFixed(0) }}
        </strong>
      </span>
    </div>

    <div v-if="showProfitWarning" class="atc-warning" role="note">
      <AlertCircle :size="18" class="atc-icon" aria-hidden="true" />
      <div>
        <strong>Pułapka z zadania Q179 — dlaczego nie da się policzyć zysku bez krzywej ATC?</strong>
        <p>
          Z wykresu znamy utarg całkowity <span class="mono">TR = P<sub>mon</sub> · Q<sub>mon</sub> = ${{ model.tr.toFixed(0) }}</span>, ale zysk wynosi
          <span class="mono">π = (P<sub>mon</sub> − ATC) · Q<sub>mon</sub></span>. Bez krzywej kosztu przeciętnego całkowitego (<strong>ATC</strong>) nie znamy kosztów stałych (FC) ani całkowitego kosztu TC — więc <strong>zysku ekonomicznego nie można określić!</strong>
        </p>
      </div>
    </div>

    <div v-if="interactive" class="graph-controls">
      <label class="control-field">
        <span class="control-label-row">
          <span>Przesunięcie krzywej kosztu krańcowego (MC = c₀ + 0,1Q)</span>
          <span class="control-value">c₀ = ${{ mcShift }}</span>
        </span>
        <input v-model.number="mcShift" type="range" min="0" max="9" step="1.5" />
      </label>
    </div>

    <p v-if="caption" class="graph-caption">{{ caption }}</p>
  </figure>
</template>

<style scoped>
.toggle-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-block-end: 0.85rem;
}

.dwl-val {
  color: var(--color-rose);
}

.atc-warning {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  margin-block-start: 0.9rem;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md);
  background: var(--color-trap-soft);
  border: 1px solid var(--color-trap-border);
  border-inline-start: 4px solid var(--color-trap);
  font-size: 0.88rem;
}

.atc-icon {
  color: var(--color-trap);
  flex-shrink: 0;
  margin-block-start: 0.15rem;
}

.atc-warning p {
  margin: 0.25rem 0 0;
  font-size: 0.86rem;
  line-height: 1.55;
}
</style>
