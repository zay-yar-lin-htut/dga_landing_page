<template>
  <footer class="bg-[#002a1e] border-t border-white/10 py-16">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-16 mb-12">

        <!-- Left: Logos + mini mascot -->
        <div class="flex flex-col items-center md:items-start gap-4 md:ml-20">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-neo-green/20 border border-neo-green/60 flex items-center justify-center shadow-glow-green">
              <span class="text-neo-green font-heading font-bold text-xs">DGA</span>
            </div>
            <span class="text-white/40 font-thin text-lg">×</span>
            <span class="text-white font-heading font-semibold">Digital Wallet</span>
          </div>
          <div class="opacity-80" style="width: 150px; height: 150px;">
            <img
              :src="robotImage"
              alt="Ask AI robot mascot"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="text-white/40 text-xs text-center md:text-left">
            AI สมาร์ทตัวแรกใน Digital Wallet
          </p>
        </div>

        <!-- Center: Contact -->
        <div>
          <h4 class="font-heading font-semibold text-neo-green mb-5">
            {{ t('footer.contact_title') }}
          </h4>
          <ul class="space-y-3 text-white/65 text-sm">
            <li v-for="item in contactItems" :key="item">
              <span class="text-white/85">{{ t(`footer.contact_labels.${item}`) }}:</span>
              {{ t(`footer.contact_values.${item}`) }}
            </li>
          </ul>
        </div>

        <!-- Right: Quick links -->
        <div>
          <h4 class="font-heading font-semibold text-neo-green mb-5">
            {{ t('footer.services_title') }}
          </h4>
          <ul class="space-y-3 text-sm">
            <li v-for="item in serviceItems" :key="item" class="text-white/65">
              {{ t(`footer.services.${item}`) }}
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 pt-8 text-center">
        <div class="flex items-center justify-center gap-8 mb-6">
          <img
            :src="dgaFooterLogo"
            alt="DGA logo"
            class="h-10 w-auto object-contain"
          />
          <img
            :src="nectecFooterLogo"
            alt="NECTEC logo"
            class="h-8 w-auto object-contain"
          />
        </div>
        <p class="text-white/45 text-sm">{{ t('footer.copyright') }}</p>
        <p class="text-white/35 text-xs mt-1">{{ t('footer.tagline') }}</p>
        <p class="text-white/25 text-xs mt-1">ประเทศไทย | กรุงเทพฯ | สกุลเงินบาทไทย (฿ THB)</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import robotImage from '../../assets/robot.png'
import dgaFooterLogo from '../../assets/footer-logo-dga.webp'
import nectecFooterLogo from '../../assets/footer-logo-nectec.png'

const { t } = useI18n()

const contactItems = ['organization', 'address', 'email_value', 'general_inquiries', 'contact_center', 'hotline_value']
const serviceItems = ['consulting', 'gdx', 'citizen_portal', 'bizportal', 'tang_rath', 'dee_den', 'tuen_dee', 'document_wallet', 'jeng_rath']
</script>
