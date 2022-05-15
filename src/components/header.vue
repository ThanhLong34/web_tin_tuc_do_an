<template>
  <header class="header-page">
    <div class="grid wide">
      <div class="row padding">
        <div class="col l-6">
          <div class="header-page-top">
            <div class="header-page-logo">
              <img src="../assets/img/logo-dai-hoc-da-latpng.png" alt="logo" />
            </div>
            <h2 class="header-page-title-content">
              TRƯỜNG ĐẠI HỌC ĐÀ LẠT <br />
              <p>DALAT UNIVERSITY</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="header-page-bottom-wrap">
      <div class="grid wide">
        <div class="row header-page-bottom">
          <div class="header-page-nav">
            <NavigatorComponent class="header-page-nav-content" />
          </div>
          <div class="header-page-search">
            <div class="header-page-search-input">
              <input type="text" placeholder="Tìm kiếm ..." />
              <button>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavigatorComponent from "../components/navigator.vue";
export default {
  name: "HeaderComponent",
  components: {
    NavigatorComponent,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.header-page {
  &-nav {
    padding: 5px 0;
    &-content {
      text-align: left;
    }
  }
  &-logo {
    width: 20%;
    margin-right: 20px;
    margin-left: -12px;
  }
  &-title {
    text-align: left;
    text-justify: middle;
    &-content {
      color: $primaryColor;
      p {
        color: #000;
      }
    }
  }
  &-search {
    margin-right: 0;
    &-input {
      position: relative;
      top: 0%;
      right: 0%;
      input {
        background-color: #f0f3f5;
        border: none;
        display: inline;
        padding: 8px 10px;
        border-radius: 5px;
        &:focus {
          border: 1px solid $primaryColor;
        }
      }
      button {
        i {
          position: absolute;
          top: 27%;
          right: 7%;
        }
      }
    }
  }
  &-top {
    display: flex;
    align-items: center;
  }
  &-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-wrap {
      border-top: 2px solid $primaryColor;
      background-color: #fff;
    }
  }
}
</style>
