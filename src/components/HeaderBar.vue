<template>
  <header class="header-bar">
    <div class="header-bar__inner">
      <router-link :to="{ name: 'Home' }">
        <img
          class="header-bar__logo"
          src="@/assets/images/world-cup-logo.png"
          alt="logo"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar"
};
</script>

<style lang="scss" scoped>
.header-bar {
  padding: 8px;
  border-bottom: 1px solid $mercury;
  background: $white;
  &__inner {
    max-width: 960px;
    margin: 0 auto;
  }
  &__logo {
    max-width: 110px;
    margin-left: 8px;
  }
}
</style>
