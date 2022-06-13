<script lang="ts" setup>
import Section6 from './Section6.vue'
const show = ref(false)

defineExpose({
  show() {
    show.value = true
  },
})
</script>

<template>
  <Modal v-model:show="show" custom-class="dashboard-modal">
    <div class="h-200 w-200">
      <Section6 />
    </div>
  </Modal>
</template>
