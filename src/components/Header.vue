<script lang="ts" setup>
const title = import.meta.env.VITE_APP_TITLE || 'XXXX'
</script>

<template>
  <header class="view-header">
    <div class="view-header-left">
      <DigitalClock />
    </div>
    <div class="view-header-middle">
      <Decorator />
      {{ title }}
      <Decorator />
    </div>
    <div class="view-header-right">因网络等因素，数据可能延迟！</div>
  </header>
</template>

<style lang="scss">
.view-header {
  position: relative;
  .view-header-middle {
    height: 100%;
    width: 1200px;
    margin: auto;
    background: {
      image: url('@/assets/images/header.png');
      position: top center;
      repeat: no-repeat;
    }
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    color: #23cefd;
    font-size: 36px;
    font-weight: bold;
    position: relative;
    > .decorator {
      position: absolute;
      top: 0;
      &:first-child {
        left: 130px;
      }
      &:last-child {
        right: 130px;
        transform: rotate(180deg);
      }
    }
  }
  .view-header-left,
  .view-header-right {
    position: absolute;
    top: 8px;
    height: 30px;
    width: 404px;
    padding: 0 20px;
    line-height: 30px;
    font-size: 16px;
    color: rgba(35, 206, 253, 1);
  }
  .view-header-left {
    left: 45px;
  }
  .view-header-right {
    text-align: right;
    right: 45px;
  }
}
</style>
