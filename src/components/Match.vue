<template>
  <div class="match">
    <match-item @click.native="onItemClick" :match="match" :class="itemClass" />

    <div class="match__details" v-if="detailsActive">
      <tabs :options="{ useUrlFragment: false }">
        <tab name="Match info">
          <match-event
            :homeTeam="match.home_team_events"
            :awayTeam="match.away_team_events"
          />
          <p
            v-if="
              !match.home_team_events.length && !match.away_team_events.length
            "
          >
            There is no information.
          </p>
        </tab>
        <tab name="Statistics">
          <match-statistic
            :homeTeam="match.home_team_statistics"
            :awayTeam="match.away_team_statistics"
          />
          <p v-if="!match.home_team_statistics && !match.away_team_statistics">
            There is no information.
          </p>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import MatchItem from "@/components/MatchItem";
import MatchEvent from "@/components/MatchEvent";
import MatchStatistic from "@/components/MatchStatistic";
export default {
  name: "Match",
  components: {
    MatchItem,
    MatchEvent,
    MatchStatistic
  },
  props: {
    match: {
      required: true
    }
  },

  data() {
    return {
      detailsActive: false
    };
  },
  computed: {
    itemClass() {
      return {
        "match-item--active-details": this.detailsActive,
        "match-item--not-available-details": !(
          this.match.home_team_events && this.match.home_team_statistics
        )
      };
    }
  },

  methods: {
    onItemClick() {
      if (
        this.match.home_team_events.length ||
        this.match.home_team_statistics
      ) {
        this.detailsActive = !this.detailsActive;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
