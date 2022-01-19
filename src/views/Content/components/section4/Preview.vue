<script lang="ts" setup>
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
const modules = [Autoplay]
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
    <div class="company-header company-item">
      <div class="company-item-order">序号</div>
      <div class="company-item-name">名称</div>
      <div class="company-item-date">时间</div>
    </div>
    <Swiper
      class="company-swiper"
      :modules="modules"
      direction="vertical"
      :slides-per-view="5"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <SwiperSlide v-for="(item, index) in items" :key="index">
        <div class="company-item">
          <div class="company-item-order">{{ index + 1 }}</div>
          <div class="company-item-name">{{ item.name }}</div>
          <div class="company-item-date">{{ item.count }}</div>
        </div>
      </SwiperSlide>
    </Swiper>
  </Card>
</template>

<style lang="scss">
.company-swiper {
  height: calc(100% - 50px);
}
.company-header {
  background-color: transparent;
  height: 34px;
  margin-bottom: 16px;
}
.company-item {
  height: 38px;
  line-height: 38px;
  display: flex;
  align-items: center;
  background-color: rgba(60, 137, 175, 0.2);
  color: #fff;
  text-align: center;
  .company-item-order {
    flex-shrink: 0;
    width: 38px;
    height: 100%;
    background-color: rgba(60, 137, 175, 1);
  }
  .company-item-name {
    overflow: hidden;
    flex: 1 1 auto;
    padding: 0 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .company-item-date {
    flex-shrink: 0;
    width: 120px;
  }
}
</style>
