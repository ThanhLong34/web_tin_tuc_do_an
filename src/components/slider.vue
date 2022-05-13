<template>
  <div class="slider_container">
    <!-- <div class="grid wide"> -->
    <a href="#" class="slider">
      <div class="slider_category category">MOBILE</div>
      <img src="../assets/img/slider_1.jpg" alt="" class="slider_img" />
      <div class="slider_bottom">
        <h1 class="slider_title">Apple Watch: What does the future hold?</h1>
        <hr />
        <div class="slider_desc">
          <div class="author">
            By
            <span class="author_name">BKNINJA</span>
          </div>
          <div class="date">
            <i class="fa-regular fa-clock"></i>
            May 1, 2022
          </div>
        </div>
      </div>
    </a>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss";

.slider {
  position: relative;
  display: block;
}
.slider_img {
  width: 100%;
  height: 450px;
}
.slider_bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 32px;
  hr {
    border-top: 1px;
  }
}
.slider_category {
  position: absolute;
  top: 32px;
  left: 32px;
}
.slider_title {
  text-align: center;
  margin-bottom: 24px;
}
.slider_desc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
}
.author,
.date {
  font-weight: normal;
}
.author_name {
  font-weight: bold;
}
</style>
