<script lang="ts" setup></script>

<template>
  <div class="decorator">
    <div class="dot" />
    <div class="dot" />
    <div class="dot" />
    <div class="dot" />
  </div>
</template>

<style lang="scss">
.decorator {
  display: flex;
  .dot {
    position: relative;
    width: 12px;
    height: 12px;
    margin: 10px;
    border-radius: 50%;
    background-color: #22c8fc;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }
    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        opacity: 0.2 * $i;
        &::before {
          animation-delay: (5 - $i) * 0.2s;
        }
      }
    }
  }
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2);
  }
  80%,
  100% {
    opacity: 0;
  }
}
</style>
