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

<style lang="scss" scoped>
.event-tag {
  display: flex;
  align-items: center;

  &--goal,
  &--goal-own,
  &--goal-penalty {
    .fa-icon {
      &.fa-icon-futbol {
        display: inline-block;
      }
    }
  }
  &--goal-own {
    color: $red;
  }
  &--goal-penalty {
    &:after {
      margin-left: 5px;
      color: $mine-shaft;
      content: "(Penalty)";
    }
  }
  &--yellow-card {
    width: 12px;
    height: 18px;
    background-color: $candlelight;
    border-radius: 2px;
  }

  &--red-card {
    width: 12px;
    height: 18px;
    background-color: $red;
    border-radius: 2px;
  }
  &--substitution-out {
    .fa-icon {
      &.fa-icon-angel-down {
        display: inline-block;
        color: $red;
      }
    }
  }
  &--substitution-in {
    .fa-icon {
      &.fa-icon-angel-up {
        display: inline-block;
        color: $mountain-meadow;
      }
    }
  }
  .fa-icon {
    display: none;
  }
}
</style>
