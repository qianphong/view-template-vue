<script lang="ts" setup>
import VChart from 'vue-echarts'
import { createRandom } from '@/utils'

const data = ref<number[]>([])
const getRandom = createRandom(100, 10)
function getData() {
  const res: number[] = []
  for (let index = 0; index < 12; index++) res.push(getRandom())
  data.value = res
}
const option = computed<EChartsOption>(() => {
  return {
    grid: {
      top: 35,
      left: 40,
      bottom: 30,
      right: 30,
    },
    xAxis: {
      type: 'category',
      data: data.value.map((_, index) => index + 1),
      axisLine: {
        show: false,
      },
      axisTick: {
        lineStyle: {
          color: 'rgba(127, 214, 255, 1)',
        },
      },
      axisLabel: {
        formatter: '{value} 月',
        color: '#fff',
      },
    },
    yAxis: {
      name: '个',
      type: 'value',
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(127, 214, 255, 1)',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(127, 214, 255, 0.5)',
          type: 'dashed',
        },
      },
    },
    series: [
      {
        data: data.value,
        type: 'bar',
        barWidth: 20,
        itemStyle: {
          color: 'rgba(0, 180, 255, 1)',
        },
      },
    ],
  }
})
useIntervalFn(getData, 1000 * 10, { immediateCallback: true })
</script>

<template>
  <Card title="数据看板8">
    <VChart :option="option" autoresize />
  </Card>
</template>
