<template>
  <div class="matches">
    <tabs :options="{ useUrlFragment: false }">
      <tab name="Group phase">
        <template v-for="(match, index) in getStage('First stage')">
          <info-bar :key="'info' + index" :date="match.datetime"></info-bar>
          <match :key="index" :match="match"></match>
        </template>
      </tab>
      <tab name="Round of 16">
        <template v-for="(match, index) in getStage('Round of 16')">
          <info-bar :key="'info' + index" :date="match.datetime"></info-bar>
          <match :key="index" :match="match"></match>
        </template>
      </tab>
      <tab name="Quarter finals">
        <template v-for="(match, index) in getStage('Quarter-finals')">
          <info-bar :key="'info' + index" :date="match.datetime"></info-bar>
          <match :key="index" :match="match"></match>
        </template>
      </tab>
      <tab name="Semi finals">
        <template v-for="(match, index) in getStage('Semi-finals')">
          <info-bar :key="'info' + index" :date="match.datetime"></info-bar>
          <match :key="index" :match="match"></match>
        </template>
      </tab>
      <tab name="Final">
        <template v-for="(match, index) in getStage('Final')">
          <info-bar :key="'info' + index" :date="match.datetime"></info-bar>
          <match :key="index" :match="match"></match>
        </template>
      </tab>
    </tabs>
    <LoadingSpinner v-if="!getStage('First stage')"></LoadingSpinner>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import InfoBar from "@/components/InfoBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import Match from "@/components/Match";
export default {
  name: "Matches",
  components: {
    Match,
    InfoBar,
    LoadingSpinner
  },
  computed: {
    ...mapGetters(["getMatches", "getStage"])
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
  & > .tabs-component {
    & > .tabs-component-tabs {
      display: flex;
      margin-bottom: 10px;
      .tabs-component-tab {
        display: flex;
        &.is-active {
          border-bottom: 2px solid $venice-blue;
        }
        a {
          padding: 6px 8px;
          font-size: 12px;
          color: $venice-blue;
        }
      }
    }
  }
}
</style>
