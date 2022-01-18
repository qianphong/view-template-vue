<script lang="ts" setup>
defineProps({
  title: String,
  border: { type: Boolean, default: true },
})
</script>

<template>
  <div class="card" :class="{ border: border }">
    <div v-if="title" class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  --header-h: 28px;
  --padding: 15px;
  position: relative;
  height: 100%;
  width: 100%;
  &.border {
    padding: var(--padding);
    background: linear-gradient(#00faff, #00faff) left top,
      linear-gradient(#00faff, #00faff) left top,
      linear-gradient(#00faff, #00faff) right top,
      linear-gradient(#00faff, #00faff) right top,
      linear-gradient(#00faff, #00faff) left bottom,
      linear-gradient(#00faff, #00faff) left bottom,
      linear-gradient(#00faff, #00faff) right bottom,
      linear-gradient(#00faff, #00faff) right bottom;
    background-repeat: no-repeat;
    background-size: 2px 20px, 20px 2px;
    border: 1px solid #00faff;
    box-shadow: inset 0 0 30px rgba(51, 170, 255, 0.7);
  }
  .card-header {
    position: relative;
    height: var(--header-h);
    line-height: var(--header-h);
    margin-bottom: var(--padding);
    color: #23cefd;
    font-size: 16px;
    padding: 0 20px;
    display: inline-block;
    box-shadow: inset 0 0 10px #5fd4ff;
  }
  .card-header + .card-body {
    height: calc(100% - var(--header-h) - var(--padding));
  }
  .card-body {
    height: 100%;
    position: relative;
  }
}
</style>
