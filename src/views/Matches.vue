<template>
  <div class="matches">
    <tabs :options="{ useUrlFragment: false }">
      <tab name="Group phase">
        <template v-for="(match, index) in getStage('First stage')">
          <info-bar
            v-if="checkDate(index)"
            :key="'info' + index"
            :date="match.datetime"
          ></info-bar>
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="1/8 finals">
        <template v-for="(match, index) in getStage('Round of 16')">
          <info-bar
            v-if="checkDate(index)"
            :key="'info' + index"
            :date="match.datetime"
          ></info-bar>
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="Quarter finals">
        <template v-for="(match, index) in getStage('Quarter-finals')">
          <info-bar
            v-if="checkDate(index)"
            :key="'info' + index"
            :date="match.datetime"
          ></info-bar>
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="Semi finals">
        <template v-for="(match, index) in getStage('Semi-finals')">
          <info-bar
            v-if="checkDate(index)"
            :key="'info' + index"
            :date="match.datetime"
          ></info-bar>
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="Final">
        <template v-for="(match, index) in getStage('Final')">
          <info-bar
            v-if="checkDate(index)"
            :key="'info' + index"
            :date="match.datetime"
          ></info-bar>
          <match :key="index" :match="match" />
        </template>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import InfoBar from "@/components/InfoBar";
import Match from "@/components/Match";
export default {
  name: "Matches",
  components: {
    Match,
    InfoBar
  },
  computed: {
    ...mapGetters(["getMatches", "getStage"])
  },
  methods: {
    ...mapActions({
      fetchMatches: "fetchMatches",
      checkDate(index) {
        if (this.getMatches[index] && this.getMatches[index - 1]) {
          let current = this.getMatches[index].datetime;
          let prev = this.getMatches[index - 1].datetime;

          current = this.$moment(current).format("MM-DD-YYYY");
          prev = this.$moment(prev).format("MM-DD-YYYY");

          if (current === prev) {
            return false;
          }
        }
        return true;
      }
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
