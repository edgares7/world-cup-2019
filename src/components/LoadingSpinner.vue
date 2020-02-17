<template>
  <div class="loading-spinner">
    <div v-for="(i, index) in 12" :class="['circle-' + i]" :key="index"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner"
};
</script>

<style lang="scss" scoped>
.loading-spinner {
  @include absolute-center;
  @include circles;
  width: 80px;
  height: 80px;

  > div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &:before {
      display: block;
      width: 15%;
      height: 15%;
      margin: 0 auto;
      background-color: $cod-gray;
      border-radius: 100%;
      animation: circleFadeDelay 1.2s infinite ease-in-out both;
      content: "";
    }
  }
}
@keyframes circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
