<script lang="ts" setup>
const nowStr = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
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
