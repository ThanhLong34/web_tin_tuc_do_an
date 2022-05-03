<template>
  <nav class="navigator">
    <router-link class="nav-link" :to="{ name: 'home' }">Trang chủ</router-link>
    <router-link class="nav-link" :to="{ name: 'news_category' }"
      >Danh mục tin tức
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavigatorComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.nav-link {
  display: inline-block;
  margin: 0 5px;
  padding: 8px 15px;
  border-radius: 8px;
  box-shadow: 0 1px 30px rgba(0 0 0 / 10%);
  background: $primaryColor;
  color: $secondaryColor;
}
</style>
