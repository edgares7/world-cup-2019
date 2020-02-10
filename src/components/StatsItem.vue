<template>
  <div class="stats-item" v-if="show">
    <div class="stats-item__label">{{ label }}</div>
    <table class="stats-item__table">
      <tr>
        <td class="stats-item__val">{{ awayVal }}</td>
        <td class="stats-item__progress">
          <div class="stats-item__progress-bar">
            <div
              class="stats-item__progress-bar__inner"
              :style="progress"
            ></div>
          </div>
        </td>
        <td class="stats-item__val">{{ homeVal }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "StatsItem",

  props: {
    label: {
      required: true
    },
    awayVal: {
      required: true
    },
    homeVal: {
      required: true
    }
  },

  computed: {
    show() {
      return !!this.awayVal || !!this.homeVal;
    },

    progress() {
      return {
        width: (this.awayVal * 100) / (this.awayVal + this.homeVal) + "%"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.stats-item {
  &__label {
    margin: 2px 0;
    font-size: 12px;
    text-align: center;
  }
  &__table {
    width: 100%;
    font-size: 12px;
  }
  &__val {
    min-width: 40px;
    text-align: center;
  }
  &__progress {
    position: relative;
    width: 100%;
  }
  &__progress-bar {
    width: 100%;
    height: 12px;
    background: $mine-shaft;
    &__inner {
      height: 100%;
      background: $curious-blue;
    }
  }
}
@media screen and (min-width: 48em) {
  .stats-item {
    &__label {
      font-size: 16px;
    }
    &__table {
      font-size: 16px;
    }
    &__progress-bar {
      height: 20px;
    }
  }
}
</style>
