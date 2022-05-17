<template>
  <nav class="navigator">
    <router-link class="nav-link" :to="{ name: 'home' }">Trang chủ</router-link>
    <router-link class="nav-link" :to="{ name: 'news_category' }"
      >Danh mục tin tức
    </router-link>
    <router-link class="nav-link" :to="{ name: 'news_detail' }"
      >Tin tức chi tiết
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

  padding: 8px 10px;
  margin-right: 10px;
  // box-shadow: 0 1px 30px rgba(0 0 0 / 10%);
  border-radius: 5px;
  text-align: center;
  border: 1px solid $primaryColor;
}
a.router-link-exact-active {
  background-color: $primaryColor !important;
  margin: 0 5px;
  padding: 8px 15px;
  border-radius: 8px;
  box-shadow: 0 1px 30px rgba(0 0 0 / 10%);
  background: $primaryColor;
  color: #fff;
}
</style>
