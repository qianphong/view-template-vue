<script lang="ts" setup>
import type { PropType } from 'vue'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/autoplay'

defineProps({
  perView: { type: Number, default: 5 },
  list: { type: Array as PropType<any[]>, default: () => [] },
  headerHeight: { type: Number, default: 40 },
})
const modules = [Autoplay]
</script>

<template>
  <div class="scroll-board">
    <div class="scroll-board-header">
      <slot name="header" />
    </div>
    <Swiper
      :modules="modules"
      direction="vertical"
      :slides-per-view="perView"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <SwiperSlide v-for="(item, index) in list" :key="index">
        <slot :item="item" :index="index" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss">
.scroll-board {
  height: 100%;
  --header-h: v-bind(`${headerHeight}px`);
  .scroll-board-header {
    height: var(--header-h);
  }
  > .swiper {
    height: calc(100% - var(--header-h));
  }
}
</style>
