<template>
  <div class="home">
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
