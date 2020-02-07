import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import _ from "lodash";

const request = axios.create({
  baseURL: "https://world-cup-json-2018.herokuapp.com"
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groups: null,
    matches: null,
    playersGoalScored: null,
    playersSaves: null
  },
  mutations: {
    SET_GROUPS(state, groups) {
      state.groups = groups;
    },

    SET_MATCHES(state, matches) {
      matches = _.orderBy(matches, ["datetime"], ["asc"]);
      state.matches = matches;
    },

    SET_PLAYER_GOAL_SCORED(state, data) {
      state.playersGoalScored = data;
    },

    SET_PLAYER_SAVES(state, data) {
      state.playersSaves = data;
    }
  },
  actions: {
    async fetchMatches({ commit }) {
      try {
        const response = await request.get("matches");

        commit("SET_MATCHES", response.data);
      } catch (e) {
        console.log(e);
      }
    },

    async fetchGroups({ commit }) {
      try {
        const response = await request.get("teams/group_results");

        commit("SET_GROUPS", response.data);
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    getGroups: state => state.groups,
    getMatches: state => state.matches,
    getPlayersGoalScored: state => state.playersGoalScored,
    getPlayersSaves: state => state.playersSaves
  },
  modules: {}
});
