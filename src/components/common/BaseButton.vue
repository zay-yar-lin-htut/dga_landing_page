<template>
  <button
    :class="[
      'inline-flex items-center justify-center px-6 py-3 rounded-full font-heading font-semibold text-white',
      'transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer',
      variant === 'primary'
        ? 'bg-neo-orange shadow-glow-orange hover:shadow-[0_0_32px_rgba(255,122,31,0.85)] btn-pulse'
        : 'bg-neo-green shadow-glow-green hover:shadow-[0_0_32px_rgba(0,217,111,0.85)]',
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>
