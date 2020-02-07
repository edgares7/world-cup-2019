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

<style lang="scss" scoped></style>
