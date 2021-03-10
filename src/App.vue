<template>
  <div :class="{ 'dark-theme': darkMode }">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
  methods: {
    ...mapMutations(["setDarkMode"]),
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
  async beforeMount() {   
    await this.$store.dispatch("setCountries");
  },
};
</script>


<style lang="scss">
@import "./styles/variables.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  > div {
    * {
      color: $lightModeText;
    }

    background: $lightModeBg;

    .input-container {
      color: $lightModeText;
    }

    &.dark-theme {
      background: $darkModeBg;

      * {
        color: $white;
      }

      .input-container {
        color: $white;
        background: $darkModeElements;

        select option {
          color: $white;
          background: $darkModeElements;
        }
      }
    }
  }
}
</style>
