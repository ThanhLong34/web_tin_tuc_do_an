<template>
  <!-- Navigator -->
  <HeaderComponent />
  <RouterView />
  <!-- home -->
  <!-- last news -->
  <!-- footer -->
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/header.vue";
import FooterComponent from "./components/footer.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {},
};
</script>

<style lang="scss">
@import url("./assets/scss/index.scss");
</style>
