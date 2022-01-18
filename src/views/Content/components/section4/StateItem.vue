<script lang="ts" setup>
const props = defineProps({
  value: { type: Number, required: true },
  text: String,
})
const value = toRef(props, 'value')
const output = useTransition(value, {
  duration: 500,
})
</script>
<template>
  <div class="state-item">
    <div class="state-item-content">
      <div class="font-dseg7 state-item-count">{{ Math.round(output) }}</div>
      <div>{{ text }}</div>
    </div>
    <IconCustomSpin class="state-item-icon" />
  </div>
</template>
