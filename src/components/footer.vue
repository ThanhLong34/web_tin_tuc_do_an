<template>
  <footer class="footer-page">
    <div class="grid wide">
      <div class="row padding footer-page-top">
        <div class="col l-6">
          <div class="footer-page-top-left">
            <div class="footer-page-logo">
              <img src="../assets/img/logo-dai-hoc-da-latpng.png" alt="logo" />
            </div>
            <h2 class="footer-page-title-content">
              TRƯỜNG ĐẠI HỌC ĐÀ LẠT <br />
              <p>DALAT UNIVERSITY</p>
            </h2>
          </div>
        </div>
        <div class="col l-6">
          <div class="footer-page-nav">
            <NavigatorComponent class="footer-page-nav-content" />
          </div>
        </div>
      </div>
      <div class="row footer-page-bottom">
        <div class="col l-6">
          <div class="footer-page-bottom-left">
            <p>Copyright @ 2022</p>
          </div>
        </div>
        <div class="col l-6">
          <div class="footer-page-bottom-right">
            <div class="social">
              <div class="social-list">
                <a href="https://www.facebook.com/DalatUni">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </div>
              <div class="social-list">
                <a href="https://lms.dlu.edu.vn/">
                  <i class="fa-brands fa-google"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import NavigatorComponent from "../components/navigator.vue";
export default {
  name: "FooterComponent",
  components: {
    NavigatorComponent,
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
.footer-page {
  &-nav {
    padding: 5px 0;
    &-content {
      text-align: right;
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
  &-top {
    display: flex;
    align-items: center;
    &-left {
      display: flex;
      align-items: center;
    }
  }
  &-bottom {
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.284);
    &-left {
      font-size: 12px;
      font-weight: 500;
    }
  }
}
.social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &-list {
    padding: 10px;
    a {
      i:hover {
        color: $primaryColor;
      }
    }
  }
}
</style>
