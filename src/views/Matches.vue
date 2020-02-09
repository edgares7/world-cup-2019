<template>
  <div class="matches">
    <tabs :options="{ useUrlFragment: false }">
      <tab name="Group phase">
        <template v-for="(match, index) in getStage('First stage')">
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="1/8 finals">
        <template v-for="(match, index) in getStage('Round of 16')">
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="Quarter finals">
        <template v-for="(match, index) in getStage('Quarter-finals')">
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="Semi finals">
        <template v-for="(match, index) in getStage('Semi-finals')">
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="Final">
        <template v-for="(match, index) in getStage('Final')">
          <match :key="index" :match="match" />
        </template>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Match from "@/components/Match";
export default {
  name: "Matches",
  components: {
    Match
  },
  computed: {
    ...mapGetters(["getMatches", "groupStage", "getStage"])
  },
  methods: {
    ...mapActions({
      fetchMatches: "fetchMatches"
    })
  },
  created() {
    this.fetchMatches();
  }
};
</script>

<style lang="scss" scoped>
.matches {
  .header-bar {
    margin-top: 10px;
  }
  > .tabs-component {
    > .tabs-component-tabs {
      display: flex;
      margin-bottom: 10px;

      .tabs-component-tab {
        display: flex;

        &.is-active {
          border-bottom: 2px solid $c-blue;
        }
        a {
          padding: 6px 8px;
          font-size: 12px;
          color: $c-blue;
        }
      }
    }
  }
}
</style>
