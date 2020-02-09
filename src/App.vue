<template>
  <div id="app" class="app">
    <HeaderBar></HeaderBar>
    <MainNav></MainNav>
    <div class="app__content">
      <router-view />
      <BackToTop></BackToTop>
    </div>
  </div>
</template>
<script>
import HeaderBar from "@/components/HeaderBar/";
import MainNav from "@/components/MainNav/";
import BackToTop from "@/components/BackToTop/";

export default {
  name: "app",

  components: {
    HeaderBar,
    MainNav,
    BackToTop
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main";

.app {
  &__content {
    padding-bottom: 70px;
  }
  // .main-nav {
  //   position: fixed;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   margin: 0 auto;
  // }
}
</style>
