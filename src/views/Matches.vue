<template>
  <div class="matches">
    <tabs :options="{ useUrlFragment: false }">
      <tab name="Group phase">
        <template v-for="(match, index) in getMatches">
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="1/8 finals">
        <template v-for="(match, index) in getMatches">
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="Quarter finals">
        <template v-for="(match, index) in getMatches">
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="Semi finals">
        <template v-for="(match, index) in getMatches">
          <match :key="index" :match="match" />
        </template>
      </tab>
      <tab name="Final">
        <template v-for="(match, index) in getMatches">
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
    ...mapGetters(["getMatches"])
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

<style lang="scss" scoped></style>
