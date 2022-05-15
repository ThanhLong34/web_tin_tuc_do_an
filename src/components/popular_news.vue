<template>
  <div class="col l-3 m-12 s-12">
    <div class="popular">
      <div class="popular_category">
        POPULAR
        <span>POSTS</span>
      </div>
      <div class="popular_item">
        <div class="row no-gutter">
          <a href="#">
            <img
              src="../assets/img/popular.jpg"
              alt="news image"
              class="news_image"
            />
          </a>
        </div>
        <div class="news_info">
          <a href="#" class="news_category category">Business</a>
          <a href="#" class="news_title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            dolor natus dolorum molestiae quas illo architecto? Blanditiis
          </a>
          <div class="slider_desc">
            <div class="author">
              By
              <a href="#" class="author_name">BKNINJA</a>
            </div>
            <div class="date">
              <i class="fa-regular fa-clock"></i>
              May 1, 2022
            </div>
          </div>
        </div>
      </div>
      <div class="popular_item">
        <div class="row no-gutter">
          <a href="#">
            <img
              src="../assets/img/popular.jpg"
              alt="news image"
              class="news_image"
            />
          </a>
        </div>
        <div class="news_info">
          <a href="#" class="news_category category">Business</a>
          <a href="#" class="news_title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            dolor natus dolorum molestiae quas illo architecto? Blanditiis
          </a>
          <div class="slider_desc">
            <div class="author">
              By
              <a href="#" class="author_name">BKNINJA</a>
            </div>
            <div class="date">
              <i class="fa-regular fa-clock"></i>
              May 1, 2022
            </div>
          </div>
        </div>
      </div>
      <div class="popular_item">
        <div class="row no-gutter">
          <a href="#">
            <img
              src="../assets/img/popular.jpg"
              alt="news image"
              class="news_image"
            />
          </a>
        </div>
        <div class="news_info">
          <a href="#" class="news_category category">Business</a>
          <a href="#" class="news_title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            dolor natus dolorum molestiae quas illo architecto? Blanditiis
          </a>
          <div class="slider_desc">
            <div class="author">
              By
              <a href="#" class="author_name">BKNINJA</a>
            </div>
            <div class="date">
              <i class="fa-regular fa-clock"></i>
              May 1, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularCoponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss";

.popular_category {
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #fff;
  background-color: #777;
  padding: 8px;
  span {
    font-weight: normal;
    margin: 0 8px;
  }
}

.popular_item {
  margin: 16px 0;
}
.news_image {
  width: 100%;
  height: unset;
}
.news_category {
  display: inline-block;
  margin: 8px 0;
}

.news_title {
  display: block;
}

.slider_desc {
  display: flex;
  margin-top: 16px;
  font-size: 12px;
  color: gray;
}

.author {
  margin-right: 8px;
}

.author_name {
  color: gray;
}
</style>
