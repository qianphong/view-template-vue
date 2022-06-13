<script lang="ts" setup>
import type { PropType } from 'vue'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
defineProps({
  perView: { type: Number, default: 5 },
  list: { type: Array as PropType<any[]>, default: () => [] },
})
const modules = [Autoplay]
</script>

<template>
  <div class="scroll-board">
    <div class="scroll-board-header">
      <slot name="header"></slot>
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
        <slot :item="item" :index="index"></slot>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss">
.scroll-board {
  height: 100%;
  .scroll-board-header {
    height: 32px;
    box-shadow: inset 0 0 30px rgba(51, 170, 255, 0.7);
  }
  > .swiper {
    height: calc(100% - 32px);
  }
}
</style>
