<script lang="ts" setup>
import AMap from './section4/AMap.vue'
import Preview from './section4/Preview.vue'
</script>
<template>
  <div class="section-4">
    <AMap class="animated animate-fade-in-up" />
    <Preview class="animated animate-fade-in-up" />
  </div>
</template>
<style lang="scss">
.section-4 {
  > div:nth-child(1) {
    height: 60%;
  }
  > div:nth-child(2) {
    height: 40%;
  }
}
</style>
