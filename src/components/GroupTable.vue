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

<style lang="scss" scoped></style>
