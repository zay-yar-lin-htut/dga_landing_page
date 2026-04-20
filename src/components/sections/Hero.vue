<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neo-teal via-neo-teal-light to-neo-teal">

    <!-- Radial ambient glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-neo-green/8 blur-3xl pointer-events-none" />
    <div class="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-neo-blue/5 blur-3xl pointer-events-none" />

    <!-- Animated sparkle particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="n in 20"
        :key="n"
        class="sparkle"
        :style="{
          left:   `${((n * 41 + 11) % 95)}%`,
          top:    `${((n * 61 + 7)  % 90)}%`,
          width:  `${3 + (n % 4)}px`,
          height: `${3 + (n % 4)}px`,
          '--delay': `${(n * 0.35) % 4}s`,
          '--dur':   `${2.5 + (n % 3) * 0.5}s`,
          opacity:   `${0.4 + (n % 5) * 0.12}`,
        }"
      />
    </div>

    <div class="container mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center relative z-10">

      <!-- Copy -->
      <div class="text-center md:text-left order-2 md:order-1 md:ml-40">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-4">
          {{ t('hero.headline_prefix') }}<br />
          <span class="inline-flex items-center gap-2">
            <span class="neon-text-green">{{ t('hero.headline_highlight') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24" fill="none" class="shrink-0">
              <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
        </h1>

        <p class="text-neo-blue font-heading font-semibold text-xl mb-5">
          {{ t('hero.subheadline') }}
        </p>

        <p class="text-white/72 text-base leading-relaxed mb-10 max-w-lg">
          {{ t('hero.body') }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
          <BaseButton variant="primary" class="text-sm">{{ t('hero.cta_primary') }}</BaseButton>
          <BaseButton variant="secondary" class="text-sm">{{ t('hero.cta_secondary') }}</BaseButton>
        </div>

        <!-- Trust badges -->
        <div class="flex flex-wrap items-center gap-3 justify-center md:justify-start">
          <span class="trust-badge">DGA</span>
          <span class="trust-badge">Digital Wallet</span>
          <span class="trust-badge trust-badge--green">ปลอดภัย ตามกฎหมาย BOT</span>
        </div>
      </div>

      <!-- Mascot -->
      <div class="flex justify-center order-1 md:order-2">
        <div class="mascot-glow w-72 h-72 md:w-96 md:h-96">
          <img
            :src="robotImage"
            alt="Ask AI robot mascot"
            class="object-contain"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import BaseButton   from '../common/BaseButton.vue'
import robotImage   from '../../assets/robot.png'

const { t } = useI18n()
</script>

<style scoped>
.trust-badge {
  @apply text-xs text-white/55 border border-white/20 rounded-full px-3 py-1;
}
.trust-badge--green {
  @apply text-neo-green border-neo-green/35;
}
</style>
