<script lang="ts" setup>
import VChart from 'vue-echarts'
import { createRandom } from '@/utils'

const data = ref<number[]>([])
const getRandom = createRandom(100, 10)
function getData() {
  const res: number[] = []
  for (let index = 0; index < 8; index++) res.push(getRandom())
  data.value = res
}
const option = computed<EChartsOption>(() => {
  return {
    grid: {
      left: '12%',
      top: '5%',
      bottom: '12%',
      right: '8%',
    },
    xAxis: {
      data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行'],
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 129, 109,.1)',
          width: 1, // 这里是为了突出显示加上的
        },
      },
      axisLabel: {
        color: '#999',
        fontSize: 12,
      },
    },
    yAxis: {
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 129, 109, 0.1)',
          width: 1, // 这里是为了突出显示加上的
        },
      },
      axisLabel: {
        color: '#999',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 129, 109, 0.1)',
          width: 0.5,
          type: 'dashed',
        },
      },
    },
    series: [
      {
        type: 'pictorialBar',
        barCategoryGap: '0%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
          show: true,
          position: 'top',
          distance: 15,
          color: '#08DFFE',
          fontWeight: 'bolder',
          fontSize: 15,
        },
        emphasis: {
          itemStyle: {
            opacity: 1,
          },
        },
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#9A11FF',
              },
              {
                offset: 1,
                color: '#08DFFE',
              },
            ],
            global: false, //  缺省为  false
          },
        },
        data: data.value,
      },
    ],
  }
})
useIntervalFn(getData, 1000 * 10, { immediateCallback: true })
</script>

<template>
  <Card title="数据看板6">
    <VChart :option="option" autoresize />
  </Card>
</template>
