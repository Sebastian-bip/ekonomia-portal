<script setup lang="ts">
import type { GraphEmbed } from '@/types/economics';
import SupplyDemandGraph from '@/components/graphs/SupplyDemandGraph.vue';
import ElasticityCompareGraph from '@/components/graphs/ElasticityCompareGraph.vue';
import MonopolyGraph from '@/components/graphs/MonopolyGraph.vue';
import ConsumerGraph from '@/components/graphs/ConsumerGraph.vue';
import CostCurvesGraph from '@/components/graphs/CostCurvesGraph.vue';
import GdpChart from '@/components/graphs/GdpChart.vue';

defineProps<{
  graph: GraphEmbed;
}>();
</script>

<template>
  <SupplyDemandGraph
    v-if="graph.type === 'supply-demand'"
    :preset="graph.preset"
    :title="graph.title"
    :caption="graph.caption"
    :interactive="graph.interactive ?? true"
  />
  <ElasticityCompareGraph
    v-else-if="graph.type === 'elasticity-compare'"
    :preset="graph.preset"
    :title="graph.title"
    :caption="graph.caption"
    :interactive="graph.interactive ?? true"
  />
  <MonopolyGraph
    v-else-if="graph.type === 'monopoly'"
    :preset="graph.preset"
    :title="graph.title"
    :caption="graph.caption"
    :interactive="graph.interactive ?? true"
  />
  <ConsumerGraph
    v-else-if="graph.type === 'consumer'"
    :preset="graph.preset"
    :title="graph.title"
    :caption="graph.caption"
    :interactive="graph.interactive ?? true"
  />
  <CostCurvesGraph
    v-else-if="graph.type === 'cost-curves'"
    :preset="graph.preset"
    :title="graph.title"
    :caption="graph.caption"
    :interactive="graph.interactive ?? true"
  />
  <GdpChart
    v-else-if="graph.type === 'gdp-chart'"
    :preset="graph.preset"
    :title="graph.title"
    :caption="graph.caption"
    :interactive="graph.interactive ?? true"
  />
</template>
