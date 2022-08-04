<script setup lang="ts">
import ViewHeader from './components/ViewHeader.vue'
import Section1 from './components/Section1.vue'
import Section3 from './components/Section3.vue'
import Section7 from './components/Section7.vue'
</script>

<template>
  <div class="view-container">
    <Cobe class="animated animate-slide-in-down" />
    <ViewHeader class="animated animate-slide-in-down" />
    <div class="view-content grid grid-rows-3 grid-cols-7 gap-5">
      <div class="row-span-1 col-span-2"></div>
      <div class="row-span-2 col-span-3"></div>
      <div class="row-span-1 col-span-2"></div>
      <div class="row-span-1 col-span-2"></div>
      <div class="row-span-1 col-span-2"></div>
      <div class="row-span-1 col-span-2">
        <Section1 class="animated animate-fade-in-top-left" />
      </div>
      <div class="row-span-1 col-span-3">
        <Section7 class="animated animate-fade-in-up" />
      </div>
      <div class="row-span-1 col-span-2">
        <Section3 class="animated animate-fade-in-right" />
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
name: Home
meta:
  title: 首页
</route>

<style lang="scss">
.view-container {
  height: 100%;
  width: 100%;
  background: {
    image: url('@/assets/images/bg.png');
    size: 100% 100%;
    repeat: no-repeat;
  }
  --header-h: 105px;
  .view-header {
    height: var(--header-h);
  }
  .view-content {
    margin-top: -20px;
    height: calc(100% - var(--header-h) + 20px);
    padding: 20px;
  }
}
</style>
