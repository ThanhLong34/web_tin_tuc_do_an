<template>
  <!-- Navigator -->
  <NavigatorComponent />
  <RouterView />
</template>

<script>
import NavigatorComponent from "./components/navigator.vue";

export default {
  components: {
    NavigatorComponent,
  },
  setup() {},
};
</script>

<style lang="scss">
@import url("./assets/scss/index.scss");
</style>
