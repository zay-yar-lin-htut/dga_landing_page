<template>
  <svg
    :viewBox="icon.viewBox || '0 0 24 24'"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="['inline-block', sizeClass]"
    aria-hidden="true"
    v-html="icon.path"
  />
</template>

<script setup>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: String, default: 'md' },
})

const sizeClass = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
}[props.size] ?? 'w-10 h-10'

// All icons: stroke="#00D96F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
const icons = {
  // KYC / ID card
  kyc: {
    path: `
      <rect x="2" y="5" width="20" height="14" rx="2.5"
        stroke="#00D96F" stroke-width="1.6"
        style="filter:drop-shadow(0 0 4px rgba(0,217,111,0.7))"/>
      <circle cx="8" cy="11" r="2.2"
        stroke="#00D96F" stroke-width="1.5"
        style="filter:drop-shadow(0 0 3px rgba(0,217,111,0.6))"/>
      <path d="M4.5 16c0-1.66 1.57-3 3.5-3s3.5 1.34 3.5 3"
        stroke="#00D96F" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="14" y1="10" x2="20" y2="10"
        stroke="#00D96F" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="14" y1="14" x2="18" y2="14"
        stroke="#00D96F" stroke-width="1.5" stroke-linecap="round"/>
    `,
  },
  // AI / Robot head
  ai: {
    path: `
      <rect x="4" y="7" width="16" height="12" rx="3"
        stroke="#00D96F" stroke-width="1.6"
        style="filter:drop-shadow(0 0 5px rgba(0,217,111,0.7))"/>
      <path d="M12 3v4M9 3h6"
        stroke="#00D96F" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="9"  cy="13" r="1.5" fill="#00D96F"
        style="filter:drop-shadow(0 0 4px rgba(0,217,111,0.9))"/>
      <circle cx="15" cy="13" r="1.5" fill="#00D96F"
        style="filter:drop-shadow(0 0 4px rgba(0,217,111,0.9))"/>
      <path d="M9 17.5c1-.7 2-.7 3 0s2 .7 3 0"
        stroke="#00D96F" stroke-width="1.4" stroke-linecap="round"/>
      <rect x="1.5" y="10" width="2.5" height="5" rx="1.2"
        stroke="#00D96F" stroke-width="1.3"/>
      <rect x="20"  y="10" width="2.5" height="5" rx="1.2"
        stroke="#00D96F" stroke-width="1.3"/>
    `,
  },
  // Shield / Security
  security: {
    path: `
      <path d="M12 2L4 6v5c0 4.97 3.45 9.63 8 10.93C17.55 20.63 21 15.97 21 11V6l-8-4z"
        stroke="#00D96F" stroke-width="1.6" stroke-linejoin="round"
        style="filter:drop-shadow(0 0 5px rgba(0,217,111,0.6))"/>
      <polyline points="9,12 11,14 15,10"
        stroke="#00D96F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
        style="filter:drop-shadow(0 0 4px rgba(0,217,111,0.9))"/>
    `,
  },
  // Download / App store arrow
  download: {
    path: `
      <rect x="5" y="2" width="14" height="20" rx="3"
        stroke="#00D96F" stroke-width="1.6"
        style="filter:drop-shadow(0 0 4px rgba(0,217,111,0.6))"/>
      <line x1="12" y1="7" x2="12" y2="14"
        stroke="#00D96F" stroke-width="1.6" stroke-linecap="round"/>
      <polyline points="9,11.5 12,14.5 15,11.5"
        stroke="#00D96F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="8" y1="18" x2="16" y2="18"
        stroke="#00D96F" stroke-width="1.6" stroke-linecap="round"/>
    `,
  },
  // Gift / Reward
  gift: {
    path: `
      <rect x="3" y="9" width="18" height="13" rx="2"
        stroke="#00D96F" stroke-width="1.6"
        style="filter:drop-shadow(0 0 4px rgba(0,217,111,0.6))"/>
      <rect x="3" y="6" width="18" height="3" rx="1.5"
        stroke="#00D96F" stroke-width="1.5"/>
      <line x1="12" y1="6" x2="12" y2="22"
        stroke="#00D96F" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M12 6C12 6 9 2 7 4s1.5 2.5 5 2z"
        stroke="#00D96F" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M12 6C12 6 15 2 17 4s-1.5 2.5-5 2z"
        stroke="#00D96F" stroke-width="1.4" stroke-linecap="round"/>
    `,
  },
  // Phone icon
  phone: {
    path: `
      <rect x="5" y="2" width="14" height="20" rx="3"
        stroke="#00D96F" stroke-width="1.6"
        style="filter:drop-shadow(0 0 4px rgba(0,217,111,0.6))"/>
      <circle cx="12" cy="18" r="1" fill="#00D96F"/>
    `,
  },
  // Email / envelope
  email: {
    path: `
      <rect x="2" y="5" width="20" height="14" rx="2.5"
        stroke="#00D96F" stroke-width="1.6"
        style="filter:drop-shadow(0 0 4px rgba(0,217,111,0.6))"/>
      <polyline points="2,7 12,13 22,7"
        stroke="#00D96F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    `,
  },
  // Chat / Line bubble
  chat: {
    path: `
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
        stroke="#00D96F" stroke-width="1.6" stroke-linejoin="round"
        style="filter:drop-shadow(0 0 4px rgba(0,217,111,0.6))"/>
      <line x1="9"  y1="10" x2="15" y2="10"
        stroke="#00D96F" stroke-width="1.4" stroke-linecap="round"/>
      <line x1="9"  y1="13" x2="13" y2="13"
        stroke="#00D96F" stroke-width="1.4" stroke-linecap="round"/>
    `,
  },
}

const icon = icons[props.name] ?? icons['ai']
</script>
