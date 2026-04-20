<template>
  <section class="py-24 bg-gradient-to-b from-neo-teal to-neo-teal-light">
    <div class="container mx-auto px-6">

      <h2 class="section-title">{{ t('how.title') }}</h2>

      <!-- 4 steps -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
        <div
          v-for="step in steps"
          :key="step.num"
          class="flex flex-col items-center text-center"
        >
          <!-- Icon circle -->
          <div class="w-20 h-20 rounded-full bg-transparent border-2 border-neo-orange/50 shadow-glow-orange flex items-center justify-center mb-4">
            <NeoIcon :name="step.icon" size="md" />
          </div>

          <!-- Step number -->
          <div class="w-7 h-7 rounded-full bg-neo-teal border border-neo-green/50 flex items-center justify-center text-neo-green text-xs font-bold mb-3">
            {{ step.num }}
          </div>

          <h3 class="font-heading font-semibold text-white text-base mb-2">
            {{ t(step.titleKey) }}
          </h3>
          <p class="text-white/55 text-sm leading-relaxed">
            {{ t(step.detailKey) }}
          </p>
        </div>
      </div>

      <!-- Culture note -->
      <GlassCard class="text-center max-w-2xl mx-auto border-neo-blue/25">
        <p class="text-neo-blue text-sm leading-relaxed">
          🇹🇭 {{ t('how.culture_note') }}
        </p>
      </GlassCard>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import GlassCard from '../common/GlassCard.vue'
import NeoIcon   from '../common/NeoIcon.vue'

const { t } = useI18n()

const steps = [
  { num: 1, icon: 'download', titleKey: 'how.step1_title', detailKey: 'how.step1_detail' },
  { num: 2, icon: 'kyc',      titleKey: 'how.step2_title', detailKey: 'how.step2_detail' },
  { num: 3, icon: 'ai',       titleKey: 'how.step3_title', detailKey: 'how.step3_detail' },
  { num: 4, icon: 'gift',     titleKey: 'how.step4_title', detailKey: 'how.step4_detail' },
]
</script>
