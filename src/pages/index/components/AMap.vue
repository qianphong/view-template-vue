<script lang="ts" setup>
import VChart from 'vue-echarts'
import { registerMap } from 'echarts/core'
import { createRandom } from '@/utils'

registerMap('map', {
  svg: `
  <svg t="1642498720801" class="icon" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1341" width="128" height="128">
  </svg>
  `,
})

const r = 64

const getRandomX = createRandom(r * 2)

function getPos(r: number) {
  const x = getRandomX()
  const a = Math.abs(r - x)
  const b = Math.sqrt(Math.pow(r, 2) - Math.pow(a, 2))
  const c = Math.abs(r - b)
  const y = createRandom(b * 2)() + c
  return [x, y] as [number, number]
}

function getData() {
  const center = [r, r]
  const datas: { value: [number, number] }[] = []
  for (let index = 0; index < 30; index++) {
    datas.push({
      value: getPos(r),
    })
  }
  const datas2: { value: [number, number] }[] = []
  for (let index = 0; index < 30; index++) {
    datas2.push({
      value: getPos(r),
    })
  }
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
