<script setup lang="ts">
import createGlobe from 'cobe'

const canvas = ref<HTMLCanvasElement>()
const size = {
  height: 750,
  width: 750,
}
tryOnMounted(() => {
  let phi = 0
  createGlobe(canvas.value!, {
    devicePixelRatio: 1,
    width: size.width,
    height: size.height,
    phi: 0,
    theta: 0,
    dark: 2,
    diffuse: 1.2,
    mapSamples: 10000,
    mapBrightness: 6,
    baseColor: [20 / 255, 31 / 255, 59 / 255],
    markerColor: [230 / 255, 7 / 255, 7 / 255],
    glowColor: [51 / 255, 170 / 255, 255 / 255],
    markers: [{ location: [31.746005, 120.803566], size: 0.15 }],
    onRender: state => {
      state.phi = phi
      phi += 0.01
    },
  })
})
</script>

<template>
  <canvas
    ref="canvas"
    class="cobe"
    :style="{ width: `${size.width}px`, height: `${size.height}px` }"
  ></canvas>
</template>

<style lang="scss">
.cobe {
  position: absolute;
  top: 25px;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
