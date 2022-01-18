<script lang="ts" setup>
import VChart from 'vue-echarts'
import { registerMap } from 'echarts/core'
import { createRandom } from '@/utils'

registerMap('map', {
  svg: `
  <svg t="1642498720801" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1341" width="128" height="128">
  <path d="M642.53 729.22c-4.23-2.45-7.24-6.39-8.51-11.12-1.27-4.7-0.62-9.64 1.8-13.86L654 672.7c5.03-8.72 16.26-11.74 24.98-6.68l19.6 11.32 36.8-21.25v-21.93c0-10.08 8.22-18.3 18.3-18.3h36.36c10.08 0 18.3 8.22 18.3 18.3v22.73L845 678.06l16.61-9.6 0.29-0.51c13.72-23.88 5.49-54.45-18.31-68.25l-53.81-31.06V455.61l53.65-30.98c23.8-13.79 32.03-44.37 18.23-68.17l-49.61-85.91c-13.79-23.8-44.37-32.03-68.17-18.23l-52.2 30.17-100.03-57.76V162.7c0-27.51-22.42-49.94-49.93-49.94h-99.23c-27.51 0-49.93 22.42-49.93 49.94v59.86l-100.44 58-53.48-30.89c-23.8-13.8-54.45-5.57-68.17 18.23l-49.61 86.08c-6.61 11.54-8.39 25.01-4.92 37.83 3.47 12.91 11.69 23.64 23.23 30.33l51.79 29.93v119.71l-51.55 29.77c-11.53 6.62-19.76 17.43-23.23 30.33-3.47 12.91-1.7 26.38 4.92 37.83l49.62 85.91c6.61 11.54 17.42 19.77 30.33 23.23 4.36 1.13 8.71 1.69 13.07 1.69 8.63 0 17.18-2.26 24.85-6.69l53.16-30.66 99.95 57.68v60.42c0 27.51 22.43 49.94 49.94 49.94h99.22c27.51 0 49.94-22.42 49.94-49.94v-61.87l70.34-40.64v-18.61l-18.99-10.95zM491.3 636.8c-68.81 0-124.8-55.99-124.8-124.8s55.99-124.8 124.8-124.8c68.82 0 124.8 55.99 124.8 124.8s-55.99 124.8-124.8 124.8z" fill="#4B8AFF" p-id="1342">
  </path>
  <path d="M900.66 794.28l-19.72-11.38v-41.42l19.66-11.35c8.72-5.05 11.74-16.26 6.68-24.98l-18.18-31.48c-5.06-8.72-16.26-11.74-24.98-6.68l-2.52 1.45-16.61 9.6-36.66-21.17v-22.73c0-10.08-8.22-18.3-18.3-18.3h-36.36c-10.08 0-18.3 8.22-18.3 18.3v21.93l-36.8 21.25-19.6-11.32c-8.72-5.06-19.95-2.04-24.98 6.68l-18.18 31.54c-2.42 4.23-3.07 9.16-1.8 13.86 1.27 4.73 4.29 8.66 8.51 11.12l18.98 10.97V784.04l-18.89 10.91c-4.23 2.43-7.24 6.39-8.51 11.12-1.27 4.73-0.62 9.67 1.8 13.86l18.18 31.48c2.42 4.23 6.39 7.24 11.11 8.51 1.6 0.41 3.19 0.62 4.79 0.62 3.16 0 6.3-0.83 9.11-2.45l19.48-11.23L735.2 868v22.14c0 10.08 8.22 18.3 18.3 18.3h36.36c10.08 0 18.3-8.22 18.3-18.3v-22.67l36.69-21.19 19.33 11.17c2.81 1.63 5.94 2.45 9.1 2.45 1.6 0 3.19-0.21 4.79-0.62a18.21 18.21 0 0 0 11.11-8.51l18.18-31.48c5.03-8.75 2.02-19.95-6.7-25.01z m-129.72 21.46c-28.76 0-52.07-23.31-52.07-52.07 0-1.99 0.37-3.87 0.58-5.8 2.92-25.99 24.71-46.28 51.49-46.28 21.35 0 39.66 12.88 47.69 31.27 2.79 6.38 4.38 13.4 4.38 20.8 0 28.77-23.31 52.08-52.07 52.08z" fill="#B7D0FF" p-id="1343">
  </path>
  </svg>
  `,
})

const size = { h: 128, w: 128 }
const getRandomX = createRandom(size.w)
const getRandomY = createRandom(size.h)
function getData() {
  const center = [size.h / 2, size.w / 2]
  const datas: { value: [number, number] }[] = []
  for (let index = 0; index < 20; index++)
    datas.push({ value: [getRandomX(), getRandomY()] })
  const datas2: { value: [number, number] }[] = []
  for (let index = 0; index < 20; index++)
    datas2.push({ value: [getRandomX(), getRandomY()] })
  return { center, datas, datas2 }
}
const data = ref<ReturnType<typeof getData>>()
const option = computed<EChartsOption | null>(() => {
  if (data.value) {
    const { center, datas, datas2 } = data.value
    const lines = datas.map(item => {
      return {
        lineStyle: {
          curveness: 0.2,
        },
        coords: [item.value, center],
      }
    })
    const lines2 = datas2.map(item => {
      return {
        lineStyle: {
          curveness: 0.2,
        },
        coords: [item.value, center],
      }
    })
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      geo: {
        map: 'map',
        zoom: 1.26,
        label: {
          show: true,
          color: '#fff',
        },
        itemStyle: {
          areaColor: '#12235c',
          borderColor: '#2afbff',
          borderWidth: 1,
        },
        emphasis: {
          label: {
            color: '#fff',
          },
          itemStyle: {
            areaColor: '#1accee',
            borderWidth: 0,
          },
        },
      },
      series: [
        {
          name: '中心点',
          type: 'effectScatter',
          zlevel: 9,
          coordinateSystem: 'geo',
          rippleEffect: {
            period: 3,
            brushType: 'stroke',
            scale: 4,
          },
          itemStyle: {
            color: 'rgba(188, 35, 42, 1)',
          },
          symbolSize: 18,
          data: [center],
        },
        {
          name: '化工企业',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          rippleEffect: {
            period: 3,
            brushType: 'stroke',
            scale: 4,
          },
          itemStyle: {
            color: 'rgba(0, 180, 255, 1)',
          },
          symbolSize: 10,
          data: datas,
        },
        {
          name: '非化工企业',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          rippleEffect: {
            period: 3,
            brushType: 'stroke',
            scale: 4,
          },
          itemStyle: {
            color: 'rgba(8, 238, 138, 1)',
          },
          symbolSize: 10,
          data: datas2,
        },
        {
          type: 'lines',
          coordinateSystem: 'geo',
          zlevel: 2,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.2,
            symbolSize: 8,
            symbol: 'pin',
            loop: true,
          },
          lineStyle: {
            width: 1,
            color: 'rgba(0, 180, 255, 1)',
          },
          data: lines,
        },
        {
          type: 'lines',
          coordinateSystem: 'geo',
          zlevel: 3,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.2,
            symbolSize: 8,
            symbol: 'pin',
            loop: true,
          },
          lineStyle: {
            width: 1,
            color: 'rgba(8, 238, 138, 1)',
          },
          data: lines2,
        },
      ],
    }
  }
  return null
})

useIntervalFn(
  () => {
    data.value = getData()
  },
  1000 * 10,
  { immediateCallback: true },
)
</script>
<template>
  <div>
    <VChart v-if="option" :option="option" autoresize />
  </div>
</template>
