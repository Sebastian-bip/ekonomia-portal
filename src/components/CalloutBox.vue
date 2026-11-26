<script setup lang="ts">
import { computed } from 'vue';
import { AlertTriangle, BookMarked, Lightbulb, Scale, Sparkles } from 'lucide-vue-next';
import type { CalloutVariant } from '@/types/economics';

const props = defineProps<{
  variant: CalloutVariant;
  title: string;
  content?: string;
  points?: string[];
}>();

const meta = computed(() => {
  switch (props.variant) {
    case 'definition':
      return { label: 'Definicja', icon: BookMarked, cls: 'is-definition' };
    case 'law':
      return { label: 'Prawo ekonomiczne', icon: Scale, cls: 'is-law' };
    case 'trap':
      return { label: 'Pułapka na kolokwium!', icon: AlertTriangle, cls: 'is-trap' };
    case 'tip':
      return { label: 'Jak to zrozumieć', icon: Lightbulb, cls: 'is-tip' };
    case 'example':
    default:
      return { label: 'Przykład', icon: Sparkles, cls: 'is-example' };
  }
});
</script>

<template>
  <aside class="callout" :class="meta.cls" :aria-label="`${meta.label}: ${title}`">
    <div class="callout-head">
      <component :is="meta.icon" :size="18" class="callout-icon" aria-hidden="true" />
      <span class="callout-kicker">{{ meta.label }}</span>
    </div>
    <p class="callout-title">{{ title }}</p>
    <p v-if="content" class="callout-body">{{ content }}</p>
    <slot />
    <ul v-if="points && points.length > 0" class="callout-points">
      <li v-for="(point, idx) in points" :key="idx">{{ point }}</li>
    </ul>
  </aside>
</template>

<style scoped>
.callout {
  margin-block: 1.25rem;
  padding: 1rem 1.2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  border-inline-start-width: 4px;
  background: var(--bg-surface);
}

.callout-head {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-block-end: 0.35rem;
}

.callout-kicker {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.callout-title {
  margin: 0 0 0.4rem;
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink-primary);
  line-height: 1.35;
}

.callout-body {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.65;
  color: var(--ink-secondary);
}

.callout-points {
  margin: 0.65rem 0 0;
  padding-inline-start: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.92rem;
  color: var(--ink-secondary);
}

.is-definition {
  background: var(--color-micro-soft);
  border-color: var(--color-micro-border);
  border-inline-start-color: var(--color-micro);
}
.is-definition .callout-head {
  color: var(--color-micro);
}

.is-law {
  background: var(--color-micro-soft);
  border-color: var(--color-micro-border);
  border-inline-start-color: var(--color-micro);
}
.is-law .callout-head {
  color: var(--color-micro);
}

.is-trap {
  background: var(--color-trap-soft);
  border-color: var(--color-trap-border);
  border-inline-start-color: var(--color-trap);
}
.is-trap .callout-head {
  color: var(--color-trap);
}

.is-tip {
  background: var(--color-tip-soft);
  border-color: var(--color-tip-border);
  border-inline-start-color: var(--color-tip);
}
.is-tip .callout-head {
  color: var(--color-tip);
}

.is-example {
  background: var(--color-macro-soft);
  border-color: var(--color-macro-border);
  border-inline-start-color: var(--color-macro);
}
.is-example .callout-head {
  color: var(--color-macro);
}
</style>
