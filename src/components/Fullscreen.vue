<script lang="ts" setup>
import type { MaybeElementRef } from '@vueuse/core'

const props = defineProps<{ target: MaybeElementRef }>()

// 如果是嵌套在 iframe 中则隐藏全屏
const isIframe = window.self !== window.top

const { isFullscreen, toggle } = useFullscreen(props.target)
</script>

<template>
  <button class="fullscreen-toggle" @click="toggle" v-if="!isIframe">
    <template v-if="isFullscreen">
      <i class="i-ant-design:fullscreen-exit-outlined fullscreen-icon"></i>
      <span>退出全屏</span>
    </template>
    <template v-else>
      <i class="i-ant-design:fullscreen-outlined fullscreen-icon"></i>
      <span>全屏显示</span>
    </template>
  </button>
</template>

<style lang="scss">
.fullscreen-toggle {
  position: absolute;
  z-index: 99;
  right: -82px;
  top: 48px;
  width: 130px;
  height: 40px;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgba(37, 99, 235, 0.8);
  outline: none;
  border: none;
  color: #fff;
  font-weight: bold;
  transition: right ease-in-out 0.3s;
  .fullscreen-icon {
    transition: transform ease-in-out 0.5s;
    width: 25px;
    height: 25px;
  }
  &:hover {
    right: 0px;
    .fullscreen-icon {
      transform: rotate(180deg);
    }
  }
}
</style>
