<script setup lang="ts">
import { useScale } from '@/composables/useScale'
import { ViewContent, ViewHeader } from '@/views'

const wrapper = ref<HTMLElement | undefined>()
const root = ref<HTMLDivElement | undefined>()
useScale(root)
</script>

<template>
  <div ref="wrapper" class="view-wrapper">
    <div ref="root" class="view-container">
      <FullscreenToggle :target="wrapper" />
      <Cobe class="animate__animated animate__slideInDown animate__fast" />
      <ViewHeader
        class="animate__animated animate__slideInDown animate__fast"
      />
      <ViewContent />
    </div>
  </div>
</template>

<style lang="scss">
div {
  box-sizing: border-box;
}
.view-wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  user-select: none;
  .view-container {
    background: {
      image: url('@/assets/bg.png');
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
    }
  }
}
</style>
