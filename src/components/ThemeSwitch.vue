<template>
  <div class="container" :style="getContainerStyle">
    <span
      :class="['material-icons-outlined', getButtonDirection]"
      @click="changeTheme"
    >
      {{ darkMode ? "nightlight" : "light_mode" }}
    </span>    
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ThemeSwitch",
  methods: {
    ...mapMutations(["setDarkMode"]),
    changeTheme() {
      this.setDarkMode(!this.darkMode);      
    },
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
    getButtonDirection() {
      return this.darkMode ? "right" : "left";
    },
    getContainerStyle() {
      return this.darkMode
        ? `background-color: rgba(133, 133, 133, .5)`
        : `background-color: rgba(32, 44, 55, .4);`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.container {
  min-width: 60px;
  min-height: 30px;

  display: flex;
  align-items: center;
  border-radius: 99999px;

  span {
    font-size: 1.8rem;
    padding: 0.7rem;
    color: #fff !important;
    border-radius: 50%;
    background: $darkModeBg;

    cursor: pointer;
    transition: all 0.5s ease-out;

    &.left {
      margin: 0;
      margin-right: 50%;
    }

    &.right {
      margin: 0;
      margin-left: 50%;
      transform: rotate(180deg);
    }
  }
}
</style>