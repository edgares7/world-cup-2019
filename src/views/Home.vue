<template>
  <div class="home groups-view">
    <GroupTable
      v-for="(group, index) in getGroups"
      :group="group"
      :key="index"
    ></GroupTable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GroupTable from "@/components/GroupTable";
export default {
  name: "Home",
  components: {
    GroupTable
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
