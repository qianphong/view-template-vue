<script lang="ts" setup>
const items = [
  {
    name: 'item 1',
    count: 56,
    percent: '61%',
  },
  {
    name: 'item 2',
    count: 19,
    percent: '21%',
  },
  {
    name: 'item 3',
    count: 4,
    percent: '4%',
  },
  {
    name: 'item 4',
    count: 3,
    percent: '3%',
  },
  {
    name: 'item 5',
    count: 2,
    percent: '2%',
  },
  {
    name: 'item 6',
    count: 2,
    percent: '2%',
  },
  {
    name: 'item 7',
    count: 1,
    percent: '1%',
  },
  {
    name: 'item 8',
    count: 1,
    percent: '1%',
  },
  {
    name: 'item 9',
    count: 1,
    percent: '1%',
  },
  {
    name: 'item 10',
    count: 1,
    percent: '1%',
  },
  {
    name: 'item 11',
    count: 1,
    percent: '1%',
  },
  {
    name: 'item 12',
    count: 1,
    percent: '1%',
  },
  {
    name: 'item 13',
    count: 1,
    percent: '1%',
  },
]
</script>

<template>
  <Card title="数据预览" :border="false">
    <ScrollBoard :list="items" :per-view="8" text="white">
      <template #header>
        <div class="h-full flex items-center" text="center sm">
          <span class="w-1/10">序号</span>
          <span class="w-4/5">名称</span>
          <span class="w-1/10">时间</span>
        </div>
      </template>
      <template #default="{ item, index }">
        <div
          class="h-full flex items-center"
          border="b gray-100 op-30"
          text="center sm"
        >
          <span class="w-1/10">{{ index + 1 }}</span>
          <span class="w-4/5">{{ item.name }}</span>
          <span class="w-1/10">{{ item.count }}</span>
        </div>
      </template>
    </ScrollBoard>
  </Card>
</template>
