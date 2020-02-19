<template>
  <div class="groups-view">
    <GroupTable
      v-for="(group, index) in getGroups"
      :group="group"
      :key="index"
    ></GroupTable>
    <loading-spinner v-if="!getGroups" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GroupTable from "@/components/GroupTable";
import LoadingSpinner from "@/components/LoadingSpinner";
export default {
  name: "Groups",
  components: {
    GroupTable,
    LoadingSpinner
  },
  computed: {
    ...mapGetters(["getGroups"])
  },
  methods: {
    ...mapActions({
      fetchGroups: "fetchGroups"
    })
  },
  created() {
    this.fetchGroups();
  }
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 48em) {
  .groups-view {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  > div {
    margin: 0 15px;
  }
}
</style>
