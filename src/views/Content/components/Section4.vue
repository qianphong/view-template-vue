<script lang="ts" setup>
import AMap from './section4/AMap.vue'
import Preview from './section4/Preview.vue'
</script>
<template>
  <div class="section-4">
    <AMap class="animate__animated animate__fadeInUp animate__fast" />
    <Preview class="animate__animated animate__fadeInUp animate__fast" />
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
