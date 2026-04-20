<template>
  <section class="relative py-24 overflow-hidden bg-gradient-to-r from-neo-teal via-[#004d35] to-neo-teal border-y border-neo-green/40">
    <!-- Radial highlight -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.12)_0%,transparent_65%)] pointer-events-none" />

    <!-- Subtle dot pattern overlay -->
    <div class="absolute inset-0 opacity-10 pointer-events-none"
      style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 28px 28px;" />

    <!-- Neon border glow lines -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neo-green/60 to-transparent" />
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neo-green/60 to-transparent" />

    <div class="container mx-auto px-6 text-center relative z-10">
      <p class="text-white/80 font-heading font-semibold text-lg mb-3">
        {{ t('promo.dates') }}
      </p>

      <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">
        {{ t('promo.headline') }}
      </h2>

      <p class="text-white/90 text-xl font-medium mb-2">
        {{ t('promo.subtext') }}
      </p>

      <p class="text-white/60 text-sm mb-10">
        {{ t('promo.disclaimer') }}
      </p>

      <BaseButton variant="secondary" class="!text-lg !px-10 !py-4">
        {{ t('promo.cta') }}
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import BaseButton from '../common/BaseButton.vue'

const { t } = useI18n()
</script>
