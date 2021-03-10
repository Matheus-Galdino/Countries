<template>
  <nav>
    <h1>Where in the world?</h1>
    <theme-switch />
  </nav>
</template>

<script>
import ThemeSwitch from "./ThemeSwitch";

export default {
  name: "Nav",
  components: {
    ThemeSwitch,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: $default-padding;    
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);

  p {
    display: flex;
    column-gap: 0.4rem;
    align-items: center;

    font-size: 1.6rem;
  }
}
</style>