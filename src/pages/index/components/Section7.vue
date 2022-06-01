<script lang="ts" setup>
const items = [
  {
    name: '上海镇',
    count: 56,
    percent: '61%',
  },
  {
    name: '北京镇',
    count: 19,
    percent: '21%',
  },
  {
    name: '苏州街道',
    count: 4,
    percent: '4%',
  },
  {
    name: '常州镇',
    count: 3,
    percent: '3%',
  },
  {
    name: '徐州镇',
    count: 2,
    percent: '2%',
  },
  {
    name: '无锡镇',
    count: 2,
    percent: '2%',
  },
  {
    name: '南京镇',
    count: 1,
    percent: '1%',
  },
  {
    name: '镇江镇',
    count: 1,
    percent: '1%',
  },
  {
    name: '淮安街道',
    count: 1,
    percent: '1%',
  },
  {
    name: '连云港镇',
    count: 1,
    percent: '1%',
  },
  {
    name: '高新技术产业园',
    count: 1,
    percent: '1%',
  },
  {
    name: '茅台镇',
    count: 1,
    percent: '1%',
  },
  {
    name: '经济开发区',
    count: 1,
    percent: '1%',
  },
]
</script>

<template>
  <Card title="数据预览" :border="false">
    <ScrollBoard :list="items" :per-view="8" class="text-white">
      <template #header>
        <div class="h-full flex text-center text-sm items-center">
          <span class="w-1/10">序号</span>
          <span class="w-4/5">名称</span>
          <span class="w-1/10">时间</span>
        </div>
      </template>
      <template #default="{ item, index }">
        <div
          class="h-full flex items-center text-center border-b border-gray-100 border-opacity-30 text-sm"
        >
          <span class="w-1/10">{{ index + 1 }}</span>
          <span class="w-4/5">{{ item.name }}</span>
          <span class="w-1/10">{{ item.count }}</span>
        </div>
      </template>
    </ScrollBoard>
    <div class="company-header company-item">
      <div class="company-item-order">序号</div>
      <div class="company-item-name">名称</div>
      <div class="company-item-date">时间</div>
    </div>
  </Card>
</template>
