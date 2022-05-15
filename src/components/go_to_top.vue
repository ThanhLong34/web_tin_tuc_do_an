<template>
  <a href="#" class="btn_go_to_top">
    <i class="fa-solid fa-chevron-up"></i>
  </a>
</template>

<script>
export default {
  name: "GoToTop",
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.btn_go_to_top {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 32px;
  right: 32px;
  width: 40px;
  height: 40px;
  border: 2px solid $primaryColor;
  border-radius: 8px;
  color: $primaryColor;
  background-color: #fff;
}
</style>
