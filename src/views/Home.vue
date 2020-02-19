<template>
  <div class="home">
    <h1>
      Website built on Vue that show results and standings from 2018 World Cup
    </h1>
    <div>
      <ul>
        <li>Edgar Esparza</li>
        <li>Front-End Developer @ Dimensional Innovations</li>
      </ul>
    </div>
    <div>
      <h2>What Did I Use</h2>
      <ul>
        <li>Vue + Vuex</li>
        <li>SASS</li>
        <li>Vanilla JS + Lodash</li>
        <li>vue-awesome - FontAwesome Vue Component</li>
        <li>vue-moment - Moment.js filters to normalize date and times</li>
        <li>
          <a href="https://world-cup-json-2018.herokuapp.com/"
            >https://world-cup-json-2018.herokuapp.com/</a
          >
          - for my data
        </li>
        <li>vue-tabs-component - a simple tabs component</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
}
h1 {
  font-size: 23px;
  font-weight: bold;
  padding-bottom: 15px;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 15px;
}
</style>
