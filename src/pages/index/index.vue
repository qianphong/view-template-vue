<script setup lang="ts">
import ViewHeader from './components/ViewHeader.vue'
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'
import Section3 from './components/Section3.vue'
import Section4 from './components/Section4.vue'
import Section5 from './components/Section5.vue'
import Section6 from './components/Section6.vue'
import Section7 from './components/Section7.vue'
import Section8 from './components/Section8.vue'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import TestModal from './components/TestModal.vue'

const modal = ref<InstanceType<typeof TestModal> | null>()
function show(company: any) {
  modal.value?.show()
}
</script>

<template>
  <div class="view-container">
    <Cobe class="animated animate-slide-in-down" />
    <TestModal ref="modal" />
    <ViewHeader class="animated animate-slide-in-down" />
    <div class="view-content grid grid-rows-3 grid-cols-7 gap-5">
      <div class="row-span-1 col-span-2">
        <Section1 class="animated animate-fade-in-top-left" />
      </div>
      <div class="row-span-2 col-span-3">
        <Section2 class="animated animate-fade-in-down" />
      </div>
      <div class="row-span-1 col-span-2">
        <Section3 class="animated animate-fade-in-right" />
      </div>
      <div class="row-span-1 col-span-2">
        <Section4 class="animated animate-fade-in-left" />
      </div>
      <div class="row-span-1 col-span-2">
        <Section5 class="animated animate-fade-in-right" />
      </div>
      <div class="row-span-1 col-span-2" @click="show">
        <Section6 class="animated animate-fade-in-left" />
      </div>
      <div class="row-span-1 col-span-3">
        <Section7 class="animated animate-fade-in-up" />
      </div>
      <div class="row-span-1 col-span-2">
        <Section8 class="animated animate-fade-in-right" />
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
