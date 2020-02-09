<template>
  <div class="group-table">
    <div class="group-table__title">Group {{ group.letter }}</div>
    <table class="group-table__table">
      <tr>
        <th colspan="2">Team</th>
        <th>MP</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GS</th>
        <th>GL</th>
        <th>GD</th>
        <th>Pts</th>
      </tr>
      <tr v-for="(team, index) in group.ordered_teams" :key="team.id">
        <td class="group-table__cell-index">{{ index + 1 }}</td>
        <td class="group-table__cell-team">
          <img
            :src="
              require(`@/assets/images/flags/${team.fifa_code.toLowerCase()}.png`)
            "
            alt=""
          />
          <span>{{ team.country }}</span>
        </td>
        <td>{{ team.games_played }}</td>
        <td>{{ team.wins }}</td>
        <td>{{ team.draws }}</td>
        <td>{{ team.losses }}</td>
        <td>{{ team.goals_for }}</td>
        <td>{{ team.goals_against }}</td>
        <td>{{ team.goal_differential }}</td>
        <td>{{ team.points }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "GroupTable",

  props: {
    group: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.group-table {
  padding-bottom: 20px;
  @media screen and (min-width: 48em) {
    width: 43%;
  }

  &__title {
    padding: 8px 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
  }
  &__table {
    width: 100%;
    border-spacing: 0;
    font-size: 10px;
    @media screen and (min-width: 48em) {
      font-size: 16px;
    }
    a {
      color: $c-black;
    }
    th {
      text-align: left;

      &:not(:nth-of-type(-n + 1)) {
        text-align: center;
      }
    }
    td {
      height: 30px;
      vertical-align: middle;
      border-bottom: 1px solid $c-gray-light;
      @media screen and (min-width: 48em) {
        height: 40px;
      }
      &:not(:nth-of-type(-n + 2)) {
        text-align: center;
        width: 7%;
        @media screen and (min-width: 48em) {
          max-width: 25px;
        }
      }
    }
  }
  &__cell-index {
    width: 15px;
  }
  &__cell-team {
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      margin: 0 6px 0 0;
    }
  }
}
</style>
