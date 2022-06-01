<script lang="ts" setup>
import dayjs from 'dayjs'
import VChart from 'vue-echarts'
import { graphic } from 'echarts/core'
import { createRandom } from '@/utils'

type Res = { date: string; value: number }[]

const getRandom = createRandom(100)
const data = ref<Res>([])
function getData() {
  const date = dayjs()
  const res = []
  for (let index = 0; index < 7; index++) {
    res.push({
      date: date.subtract(index, 'day').format('YYYY/MM/DD'),
      value: getRandom(),
    })
  }
  data.value = res
}

const option = computed<EChartsOption>(() => {
  return {
    grid: {
      top: 28,
      left: 40,
      bottom: 35,
      right: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.value.map(item => item.date),
      axisLine: {
        show: false,
      },
      axisTick: {
        lineStyle: {
          color: 'rgba(127, 214, 255, 1)',
        },
      },
      axisLabel: {
        color: '#fff',
      },
    },
    yAxis: {
      type: 'value',
      name: '米',
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
        data: data.value.map(item => item.value),
        type: 'line',
        smooth: true,
        lineStyle: {
          color: new graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: 'rgba(1, 255, 156, 1)',
            },
            {
              offset: 0.5,
              color: 'rgba(81, 103, 249, 1)',
            },
            {
              offset: 1,
              color: 'rgba(178, 93, 255, 1)',
            },
          ]),
        },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: 'rgba(0, 254, 157, .5)',
            },
            {
              offset: 0.33,
              color: 'rgba(2, 191, 241, .5)',
            },
            {
              offset: 0.66,
              color: 'rgba(51, 156, 255, .5)',
            },
            {
              offset: 1,
              color: 'rgba(145, 127, 255, .5)',
            },
          ]),
        },
      },
    ],
  }
})

useIntervalFn(getData, 1000 * 10, { immediateCallback: true })
</script>

<template>
  <Card title="数据看板3">
    <VChart :option="option" autoresize />
  </Card>
</template>
