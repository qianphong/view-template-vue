<script lang="ts" setup>
import StateItem from './StateItem.vue'
import { createRandom } from '@/utils'

const getRandom = createRandom(20, 5000)
const datas = ref<{ standby: number; work: number; shutdown: number }>({
  standby: 0,
  work: 0,
  shutdown: 0,
})

function getData() {
  datas.value.work = getRandom()
  datas.value.standby = getRandom()
  datas.value.shutdown = getRandom()
}
useIntervalFn(getData, 1000 * 10, { immediateCallback: true })
</script>
<template>
  <Card title="实时数据" :border="false">
    <div class="state-list">
      <StateItem class="standby" :value="datas.standby" text="A A" />
      <StateItem class="work" :value="datas.work" text="B B" />
      <StateItem class="shutdown" :value="datas.shutdown" text="C C" />
    </div>
  </Card>
</template>

<style lang="scss">
.state-list {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  .state-item {
    display: flex;
    height: 140px;
    width: 140px;
    position: relative;
    &.work {
      color: #44f0ce;
    }
    &.standby {
      color: #f0da44;
    }
    &.shutdown {
      color: #bc232a;
    }
    .state-item-icon {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
    }
    .state-item-content {
      height: 100%;
      width: 100%;
      font-size: 18px;
      text-align: center;
      position: relative;
      z-index: 99;
      > .state-item-count {
        font-size: 28px;
        margin: 40px 0 10px;
      }
    }
  }
}
</style>
