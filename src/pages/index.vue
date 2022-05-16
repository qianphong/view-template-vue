<script setup lang="ts">
import { ViewContent, ViewHeader } from '@/views'
</script>

<template>
  <div class="view-container">
    <Cobe class="animated animate-slide-in-down" />
    <ViewHeader class="animated animate-slide-in-down" />
    <ViewContent />
  </div>
</template>

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
  }
}
</style>
