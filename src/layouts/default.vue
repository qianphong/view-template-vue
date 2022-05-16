<script setup lang="ts">
import { useScale } from '@/composables/useScale'

const wrapper = ref<HTMLElement | undefined>()
const root = ref<HTMLDivElement | undefined>()
useScale(root)
</script>

<template>
  <div ref="wrapper" class="view-wrapper">
    <div ref="root">
      <Fullscreen :target="wrapper" />
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
.view-wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  user-select: none;
}
</style>
