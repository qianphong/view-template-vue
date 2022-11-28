<script setup lang="ts">
import Section8 from './components/Section8.vue'
import Section3 from './components/Section3.vue'
import Section7 from './components/Section7.vue'
</script>

<template>
  <div class="view-container">
    <Cobe
      class="animated animate-slide-in-down"
      absolute
      top-10
      left-0
      right-0
      mx-a
    />
    <Header class="animated animate-slide-in-down" />
    <div class="view-content" grid="~ rows-3 cols-7 gap-5">
      <div row-span-1 col-span-2 />
      <div row-span-2 col-span-3 />
      <div row-span-1 col-span-2 />
      <div row-span-1 col-span-2 />
      <div row-span-1 col-span-2 />
      <div row-span-1 col-span-2>
        <Section8 class="animated animate-fade-in-top-left" />
      </div>
      <div row-span-1 col-span-3>
        <Section7 class="animated animate-fade-in-up" />
      </div>
      <div row-span-1 col-span-2>
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
