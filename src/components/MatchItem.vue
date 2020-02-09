<template>
  <div :class="elClasses">
    <div class="match-item__inner">
      <time class="match-item__time">{{ match.datetime }}</time>

      <div class="match-item__competitor match-item__competitor--left">
        <template v-if="match.home_team.code === 'TBD'">
          {{ match.home_team.team_tbd }}
        </template>
        <template v-else>
          <span>{{ match.home_team.country }}</span>
          <img
            :src="
              require(`@/assets/images/flags/${match.home_team.code.toLowerCase()}.png`)
            "
            alt=""
          />
        </template>
      </div>

      <span class="match-item__state">
        <span class="match-item__result">
          <template v-if="match.status !== 'future'">
            {{ match.home_team.goals }} : {{ match.away_team.goals }}
          </template>
          <template v-else> vs </template>
        </span>
      </span>

      <div class="match-item__competitor match-item__competitor--right">
        <template v-if="match.away_team.code === 'TBD'">
          {{ match.away_team.team_tbd }}
        </template>
        <template v-else>
          <img
            :src="
              require(`@/assets/images/flags/${match.away_team.code.toLowerCase()}.png`)
            "
            alt=""
          />
          <span>{{ match.away_team.country }}</span>
        </template>
      </div>

      <span class="match-item__progress">
        {{ match.time }}
      </span>

      <button class="match-item__angle">
        <icon class="fa-angle-down" name="angle-down"></icon>
        <icon class="fa-angle-up" name="angle-up"></icon>
      </button>
    </div>

    <div
      class="match-item__penalties"
      v-if="match.home_team.penalties && match.away_team.penalties"
    >
      {{ match.winner }} win on penalties ({{ match.home_team.penalties }}-{{
        match.away_team.penalties
      }})
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchItem",

  props: {
    match: {
      required: true
    }
  },

  computed: {
    elClasses() {
      return [
        "match-item",
        {
          "match-item--in-progress": this.match.status === "in progress"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.match {
  &-item {
    position: relative;
    padding: 4px 0;
    border-top: 1px solid #e5e5e5;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    cursor: pointer;
    @media screen and (min-width: 48em) {
      padding: 7px 0;
      font-size: 16px;
    }
    &__inner {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    &__time {
      position: absolute;
      left: 5px;
    }
    &__competitor {
      display: flex;
      align-items: center;
      width: 42%;
      &--left {
        justify-content: flex-end;
      }
      &--right {
        justify-content: flex-start;
      }
      img {
        width: 25px;
        height: 25px;
        margin: 0 3px;
        vertical-align: middle;
        @media screen and (min-width: 48em) {
          margin: 0 8px;
        }
      }
    }
    &__result {
      @media screen and (min-width: 48em) {
        display: inline-block;
        width: 35px;
      }
    }
    &--active {
      &-details {
        background: inherit;
        .match-item__angle .fa-angle-up {
          display: block;
        }
      }
    }
    &__progress {
      background: inherit;
      @media screen and (min-width: 48em) {
        right: 35px;
      }
    }
    &__angle {
      position: absolute;
      right: 8px;
      outline: none;
      .fa-angle-up {
        display: none;
      }
    }
  }
}
</style>
