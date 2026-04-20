<template>
  <nav class="fixed top-0 left-0 right-0 lg:right-[26rem] z-50 flex items-center justify-between px-6 py-4 bg-neo-teal/85 backdrop-blur-md border-b border-white/10">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <span class="text-neo-green font-heading font-bold text-xl tracking-tight">DGA</span>
      <span class="text-white/40 font-thin text-xl">×</span>
      <span class="text-white font-heading font-semibold text-xl">Digital Wallet</span>
    </div>

    <!-- Right side -->
    <div class="flex items-center gap-4">
      <!-- Language switcher -->
      <div class="flex rounded-full overflow-hidden border border-white/20">
        <button
          v-for="lang in ['th', 'en']"
          :key="lang"
          @click="locale = lang"
          :class="[
            'px-3 py-1 text-sm font-semibold transition-colors duration-150',
            locale === lang
              ? 'bg-neo-green text-white'
              : 'text-white/50 hover:text-white',
          ]"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>

      <a
        href="https://ask-ai-adm-api-uat.researchinnodga.com/login"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-5 py-2 rounded-full font-heading font-semibold text-white text-sm bg-neo-orange shadow-glow-orange hover:shadow-[0_0_32px_rgba(255,122,31,0.85)] btn-pulse transition-all duration-200 hover:scale-105 active:scale-95"
      >
        {{ t('nav.login') }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>
