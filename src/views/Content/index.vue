<script lang="ts" setup>
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'
import Section3 from './components/Section3.vue'
import Section4 from './components/Section4.vue'
import Section5 from './components/Section5.vue'
import Section6 from './components/Section6.vue'
import Section7 from './components/Section7.vue'
</script>

<template>
  <div class="view-content">
    <Section1 class="animate__animated animate__fadeInTopLeft animate__fast" />
    <Section2 class="animate__animated animate__fadeInLeft animate__fast" />
    <Section3
      class="animate__animated animate__fadeInBottomLeft animate__fast"
    />
    <Section4 />
    <Section5 class="animate__animated animate__fadeInTopRight animate__fast" />
    <Section6 class="animate__animated animate__fadeInRight animate__fast" />
    <Section7
      class="animate__animated animate__fadeInBottomRight animate__fast"
    />
  </div>
</template>

<style lang="scss">
.view-content {
  padding: 20px;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 20px;
  > div {
    grid-column-start: span 2;
    &:nth-child(4) {
      grid-row-start: span 3;
      grid-column-start: span 3;
    }
  }
}
</style>
