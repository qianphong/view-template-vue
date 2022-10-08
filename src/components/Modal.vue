<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ show: boolean; customClass?: string }>(),
  { show: true },
)
const emit = defineEmits<{
  (e: 'update:show', show: boolean): void
  (e: 'beforeClose'): void
}>()

const show = useVModel(props, 'show', emit)

function close() {
  if (show.value) {
    emit('beforeClose')
    show.value = false
  }
}
</script>

<template>
  <Transition appear name="modal">
    <div v-show="show" class="modal" @click="close">
      <div class="modal-inner" :class="customClass" @click.stop>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.modal-leave-active,
.modal-enter-active {
  transition: opacity 0.3s ease;
  > .modal-inner {
    transition: transform 0.3s ease;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  &.modal > .modal-inner {
    transform: scale(0.5);
  }
}
.modal {
  position: absolute;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 0,
    rgba(0, 0, 0, 0.5) 960px,
    transparent 1000px,
    transparent 100%
  );
  background-repeat: no-repeat;
  z-index: 9999;
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
