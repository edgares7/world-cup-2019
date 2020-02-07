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

<style lang="scss" scoped></style>
