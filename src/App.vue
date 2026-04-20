<script setup>
import Navbar      from './components/layout/Navbar.vue'
import PageFooter  from './components/layout/PageFooter.vue'
import Hero        from './components/sections/Hero.vue'
import Features    from './components/sections/Features.vue'
import HowItWorks  from './components/sections/HowItWorks.vue'
import PromoBanner from './components/sections/PromoBanner.vue'
import LoginDrawer from './components/common/LoginDrawer.vue'
</script>

<template>
  <div class="min-h-screen bg-neo-teal lg:pr-[26rem]">
    <Navbar />
    <LoginDrawer />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <PromoBanner />
    </main>
    <PageFooter />
  </div>
</template>

