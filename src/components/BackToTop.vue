<template>
  <button :class="elClass" @click="onClick">
    <icon name="arrow-up" />
  </button>
</template>

<script>
import scroll from "@/utils/scroll";
export default {
  name: "BackToTop",

  data() {
    return {
      activeBelow: 100,
      active: false
    };
  },

  computed: {
    elClass() {
      return [
        "back-to-top",
        {
          "back-to-top--active": this.active
        }
      ];
    }
  },

  methods: {
    onClick() {
      scroll.scrollTo(0, 1000);
    },

    onScroll() {
      if (
        document.body.scrollTop > this.activeBelow ||
        document.documentElement.scrollTop > this.activeBelow
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  },

  created() {
    window.addEventListener("scroll", this.onScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss" scoped>
.back-to-top {
  display: none;
  position: fixed;
  right: 4px;
  bottom: 108px;
  width: 40px;
  padding: 18px 6px;
  outline: none;
  background: rgba(100, 100, 100, 0.9);
  color: $white;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 100;
  &:before {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 30px;
  }
  &:hover {
    background: $green-vogue;
  }
  &--active {
    display: block;
  }
}
</style>
