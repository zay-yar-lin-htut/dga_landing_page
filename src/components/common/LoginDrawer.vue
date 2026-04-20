<template>
  <aside
    class="hidden lg:flex fixed right-0 top-0 h-full w-[26rem] z-40 bg-white shadow-2xl border-l border-black/5"
    aria-label="Login sidebar"
  >
    <div class="w-full h-full p-4 bg-[#f5f5f5] flex flex-col gap-3 overflow-hidden">
      <div class="bg-[#f5f5f5]">
        <div class="grid grid-cols-2 gap-2 rounded-xl bg-white p-1 border border-black/10">
          <button
            @click="activePanel = 'chat'"
            :class="[
              'rounded-lg px-3 py-2 text-sm font-heading font-semibold transition-colors',
              activePanel === 'chat' ? 'bg-neo-teal text-white' : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            {{ t('sidebar.switch.show_chat') }}
          </button>
          <button
            @click="activePanel = 'login'"
            :class="[
              'rounded-lg px-3 py-2 text-sm font-heading font-semibold transition-colors',
              activePanel === 'login' ? 'bg-neo-orange text-white' : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            {{ t('sidebar.switch.show_login') }}
          </button>
        </div>
      </div>

      <section
        v-if="activePanel === 'chat'"
        class="rounded-xl bg-[#d9d9d9] flex-1 min-h-0 flex flex-col"
      >
        <div class="h-full flex flex-col justify-between text-center px-4 pt-16 pb-6 overflow-y-auto">
          <div>
            <h3 class="text-4xl font-heading font-bold text-neo-teal mb-3">{{ t('sidebar.chat.greeting') }}</h3>
            <p class="text-5xl leading-tight font-heading font-bold text-neo-teal mb-6">
              {{ t('sidebar.chat.title_line1') }}
              <br />
              {{ t('sidebar.chat.title_line2') }}
            </p>
            <p class="text-gray-600 leading-relaxed">
              {{ t('sidebar.chat.description_line1') }}
              <br />
              {{ t('sidebar.chat.description_line2') }}
              <br />
              {{ t('sidebar.chat.description_line3') }}
            </p>
          </div>

          <div class="mt-10">
            <div class="flex flex-wrap justify-center gap-2 mb-6">
              <button
                v-for="(quick, i) in quickActions"
                :key="i"
                @click="chatInput = String(quick)"
                class="rounded-full border border-neo-teal/60 bg-white/80 px-3 py-1 text-xs text-neo-teal hover:bg-neo-teal/10 transition-colors"
              >
                {{ quick }}
              </button>
            </div>

            <textarea
              v-model="chatInput"
              :placeholder="t('sidebar.chat.input_placeholder')"
              maxlength="200"
              rows="3"
              class="w-full resize-none rounded-t-xl bg-[#efefef] px-3 py-2 text-left text-gray-700 text-sm outline-none"
            />
            <div class="rounded-b-xl bg-white border-t border-black/5 px-3 py-2 flex items-center justify-between">
              <span class="text-xs text-gray-400">{{ t('sidebar.chat.footer_note') }}</span>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-400">{{ chatCounter }} / 200</span>
                <button
                  type="button"
                  @click="sendChat"
                  :disabled="!chatInput.trim()"
                  :class="chatInput.trim() ? 'text-neo-teal hover:text-neo-teal' : 'text-neo-teal/30 cursor-not-allowed'"
                  class="text-neo-teal/60 hover:text-neo-teal transition-colors"
                  aria-label="Send"
                >
                  <svg viewBox="0 0 24 24" fill="none" class="w-5 h-5">
                    <path d="M4 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        v-if="activePanel === 'login'"
        class="rounded-xl bg-white p-5 border border-black/10 shadow-sm flex-1 min-h-0 overflow-y-auto"
      >
        <div class="flex flex-col items-center mb-4">
          <img :src="dgaLogo" alt="DGA" class="h-14 object-contain mb-2" />
          <h4 class="text-2xl font-heading font-bold text-[#1d2433]">{{ t('sidebar.login.title') }}</h4>
          <p class="text-sm text-gray-500">{{ t('sidebar.login.subtitle') }}</p>
          <span class="mt-2 rounded-full bg-[#fff4ee] text-[#ff6a1a] text-xs font-semibold px-3 py-1">• {{ t('sidebar.login.badge') }}</span>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-3">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">{{ t('sidebar.login.company_code') }}</label>
            <input v-model="companyCode" type="text" class="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-black" :placeholder="t('sidebar.login.company_code_ph')" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">{{ t('sidebar.login.username') }}</label>
            <input v-model="username" type="text" class="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-black" :placeholder="t('sidebar.login.username_ph')" />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="text-xs font-semibold text-gray-500">{{ t('sidebar.login.password') }}</label>
              <a href="https://ask-ai-adm-api-uat.researchinnodga.com/login" target="_blank" rel="noopener noreferrer" class="text-xs text-[#ff6a1a] hover:underline">{{ t('sidebar.login.forgot_password') }}</a>
            </div>
            <div class="relative">
              <input
                v-model="password"
                :type="showPwd ? 'text' : 'password'"
                class="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 pr-10 text-black"
                :placeholder="t('sidebar.login.password_ph')"
              />
              <button type="button" @click="showPwd = !showPwd" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">👁</button>
            </div>
          </div>

          <button type="submit" class="w-full rounded-xl bg-neo-orange text-white py-3 font-heading font-bold hover:opacity-95 transition-opacity">
            {{ t('sidebar.login.submit') }}
          </button>
        </form>

        <div class="grid grid-cols-2 gap-2 mt-4">
          <div class="rounded-xl border border-blue-300 bg-blue-50 p-3 text-center">
            <div class="font-semibold text-blue-800">{{ t('sidebar.login.id_boxes.thaiid_title') }}</div>
            <div class="text-xs text-blue-600">{{ t('sidebar.login.id_boxes.thaiid_subtitle') }}</div>
          </div>
          <div class="rounded-xl border border-green-300 bg-green-50 p-3 text-center">
            <div class="font-semibold text-green-800">{{ t('sidebar.login.id_boxes.digitalid_title') }}</div>
            <div class="text-xs text-green-600">{{ t('sidebar.login.id_boxes.digitalid_subtitle') }}</div>
          </div>
        </div>

        <div class="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-600">
          <div class="grid grid-cols-4 gap-2 font-semibold border-b border-gray-200 pb-2 mb-2">
            <span>{{ t('sidebar.login.table.username') }}</span>
            <span>{{ t('sidebar.login.table.password') }}</span>
            <span>{{ t('sidebar.login.table.role') }}</span>
            <span>{{ t('sidebar.login.table.result') }}</span>
          </div>
          <div class="grid grid-cols-4 gap-2 py-1">
            <span>superroct</span><span>admin123</span><span>{{ t('sidebar.login.roles.super_admin') }}</span><span class="text-blue-700">{{ t('sidebar.login.results.dashboard') }}</span>
          </div>
          <div class="grid grid-cols-4 gap-2 py-1">
            <span>admintest</span><span>admin123</span><span>{{ t('sidebar.login.roles.admin') }}</span><span class="text-blue-700">{{ t('sidebar.login.results.webportal') }}</span>
          </div>
        </div>
      </section>
    </div>
  </aside>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import dgaLogo from '../../assets/footer-logo-dga.webp'

const { t, tm } = useI18n()

const companyCode = ref('')
const username = ref('')
const password = ref('')
const showPwd  = ref(false)
const activePanel = ref('chat')
const chatInput = ref('')

const quickActions = computed(() => tm('sidebar.chat.quick_actions'))
const chatCounter = computed(() => chatInput.value.length)

function handleLogin() {
  window.open('https://ask-ai-adm-api-uat.researchinnodga.com/login', '_blank')
}

function sendChat() {
  if (!chatInput.value.trim()) return
  chatInput.value = ''
}
</script>
