<script lang="ts" setup>
import dayjs from 'dayjs'

const now = useNow()
const nowStr = computed(() => dayjs(now.value).format('YYYY-MM-DD HH:mm:ss'))
</script>
<template>
  <div class="font-dseg7">{{ nowStr }}</div>
</template>

<style lang="scss">
@import '@fontsource/dseg7/classic-mini-700-italic';
.font-dseg7 {
  font-family: 'DSEG7';
}
</style>
