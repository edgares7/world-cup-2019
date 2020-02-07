<template>
  <div :class="elClass">
    <icon class="fa-icon-futbol" name="futbol"></icon>
    <icon class="fa-icon-angel-up" name="angle-up"></icon>
    <icon class="fa-icon-angel-down" name="angle-down"></icon>
  </div>
</template>

<script>
export default {
  name: "EventTag",

  props: {
    type: {
      required: true
    }
  },

  computed: {
    elClass() {
      return ["event-tag", `event-tag--${this.type}`];
    }
  }
};
</script>

<style lang="scss" scoped></style>
