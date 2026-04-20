<template>
  <section class="py-24 bg-neo-teal-light/60">
    <div class="container mx-auto px-6">

      <h2 class="section-title">{{ t('features.title') }}</h2>

      <!-- 3 feature cards -->
      <div class="grid md:grid-cols-3 gap-8 mb-10">
        <GlassCard
          v-for="card in cards"
          :key="card.key"
          class="flex flex-col gap-5 hover:border-neo-green/30 hover:shadow-glow-green/20 transition-all duration-300"
        >
          <NeoIcon :name="card.icon" size="lg" />
          <h3 class="text-neo-green font-heading font-semibold text-xl leading-snug">
            {{ t(card.titleKey) }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(item, i) in tm(card.itemsKey)"
              :key="i"
              :class="['flex items-start gap-2', i === 0 ? 'text-white font-medium text-base' : 'text-white/75 text-base']"
            >
              <span class="text-neo-green mt-px shrink-0 font-bold">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </GlassCard>
      </div>

      <!-- Info card -->
      <GlassCard class="border-neo-blue/20 max-w-4xl mx-auto">
        <h3 class="text-neo-blue font-heading font-semibold text-lg mb-5">
          {{ t('features.info_title') }}
        </h3>
        <ul class="grid sm:grid-cols-2 gap-3">
          <li
            v-for="(item, i) in tm('features.info_items')"
            :key="i"
            class="flex items-start gap-2 text-white/75 text-sm"
          >
            <span class="text-neo-blue shrink-0">★</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </GlassCard>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import GlassCard from '../common/GlassCard.vue'
import NeoIcon   from '../common/NeoIcon.vue'

const { t, tm } = useI18n()

const cards = [
  { key: 'card1', icon: 'kyc',      titleKey: 'features.card1_title', itemsKey: 'features.card1_items' },
  { key: 'card2', icon: 'ai',       titleKey: 'features.card2_title', itemsKey: 'features.card2_items' },
  { key: 'card3', icon: 'security', titleKey: 'features.card3_title', itemsKey: 'features.card3_items' },
]
</script>
