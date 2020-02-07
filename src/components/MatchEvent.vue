<template>
  <div class="match-events">
    <template v-for="(event, index) in events">
      <div
        :key="index"
        v-if="event.team === 'home'"
        class="match-events__event match-events__event--home"
      >
        <span class="match-events__time">{{ event.time | time }}</span>
        <event-tag :type="event.type_of_event" />
        {{ event.player }}
      </div>

      <div
        :key="index"
        v-else
        class="match-events__event match-events__event--away"
      >
        {{ event.player }}
        <event-tag :type="event.type_of_event" />
        {{ event.time | time }}
      </div>
    </template>
  </div>
</template>

<script>
import _ from "lodash";
import EventTag from "@/components/EventTag";
export default {
  name: "MatchEvent",
  components: {
    EventTag
  },
  props: {
    homeTeam: {
      required: true
    },
    awayTeam: {
      required: true
    }
  },
  data() {
    return {
      events: []
    };
  },

  filters: {
    time(value) {
      return value[0] === "0" ? value.slice(1) : value;
    }
  },

  methods: {
    initEvents() {
      const homeEvents = this.homeTeam.map(el =>
        Object.assign(JSON.parse(JSON.stringify(el)), { team: "home" })
      );
      const awayEvents = this.awayTeam.map(el =>
        Object.assign(JSON.parse(JSON.stringify(el)), { team: "away" })
      );

      this.events = homeEvents.concat(awayEvents);
      this.events.map(el => {
        if (el.time.length === 2) {
          el.time = "0" + el.time;
        }
      });
      this.events = _.orderBy(this.events, ["time"], ["asc"]);
    }
  },

  mounted() {
    this.initEvents();
  }
};
</script>

<style lang="scss" scoped></style>
