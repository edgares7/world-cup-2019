<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <router-link active-class="active" tag="li" :to="{ name: 'Home' }" exact>
        <icon name="home"></icon>
        <div>Home</div>
      </router-link>

      <router-link active-class="active" tag="li" :to="{ name: 'Matches' }">
        <icon name="calendar-alt"></icon>
        <div>Matches</div>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNav",

  data() {
    return {
      $header: null
    };
  },

  methods: {
    onScroll() {
      if (window.innerWidth > 768) {
        if (
          window.pageYOffset >
          this.$header.offsetTop + this.$header.offsetHeight
        ) {
          this.$header.classList.add("main-nav--sticky");
        } else {
          this.$header.classList.remove("main-nav--sticky");
        }
      }
    }
  },

  created() {
    window.addEventListener("scroll", this.onScroll);
  },

  mounted() {
    this.$header = document.getElementsByClassName("main-nav")[0];
  },

  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss" scoped>
.main-nav {
  position: relative;
  z-index: 600;
  width: 100%;
  border-top: 1px solid $mercury;
  background: $venice-blue;
  @media screen and (min-width: 48em) {
    border: 0;
  }
  &--sticky {
    @media screen and (min-width: 48em) {
      position: fixed;
      top: 0;
    }
  }
  &__list {
    display: flex;
    margin: 0 auto;
    max-width: 960px;
    color: $white;
    text-align: center;
    @media screen and (min-width: 48em) {
      text-align: left;
    }
    .fa-icon {
      width: 20px;
      height: 20px;
      margin-bottom: 3px;
      @media screen and (min-width: 48em) {
        display: none;
      }
    }
    li {
      position: relative;
      width: 100%;
      padding: 10px 0;
      font-size: 12px;
      cursor: pointer;
      @media screen and (min-width: 48em) {
        width: auto;
        padding: 10px 15px;
      }
      &.active,
      &:hover {
        background: $green-vogue;
      }
    }
  }
}
</style>
