<template>
  <div class="latest_view">
    <div class="news_view">
      LATEST
      <span>REVIEWS</span>
      <hr />
    </div>
    <div class="row custom-gutter">
      <div class="col l-3 m-6 s-12">
        <div class="latest_view_item">
          <a href="#" class="view_item">
            <img src="../assets/img/latest_view.jpg" alt="" class="view_img" />
            <div class="view_item_post">
              <div class="view_category category">MOBILE</div>
              <div class="view_bottom">
                <h1 class="view_title">
                  Dell XPS 13 review (2018): Still the best Windows laptop
                </h1>
                <div class="view_desc">
                  <div class="date">
                    <i class="fa-regular fa-clock"></i>
                    May 1, 2022
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="col l-3 m-6 s-12 hide-on-mobile">
        <div class="latest_view_item">
          <a href="#" class="view_item">
            <img
              src="../assets/img/latest_view_2.jpg"
              alt=""
              class="view_img"
            />
            <div class="view_item_post">
              <div class="view_category category">MOBILE</div>
              <div class="view_bottom">
                <h1 class="view_title">
                  Dell XPS 13 review (2018): Still the best Windows laptop
                </h1>
                <div class="view_desc">
                  <div class="date">
                    <i class="fa-regular fa-clock"></i>
                    May 1, 2022
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="col l-3 m-6 s-12 hide-on-tablet hide-on-mobile">
        <div class="latest_view_item">
          <a href="#" class="view_item">
            <img
              src="../assets/img/latest_view_1.jpg"
              alt=""
              class="view_img"
            />
            <div class="view_item_post">
              <div class="view_category category">MOBILE</div>
              <div class="view_bottom">
                <h1 class="view_title">
                  Dell XPS 13 review (2018): Still the best Windows laptop
                </h1>
                <div class="view_desc">
                  <div class="date">
                    <i class="fa-regular fa-clock"></i>
                    May 1, 2022
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="col l-3 m-6 s-12 hide-on-tablet hide-on-mobile">
        <div class="latest_view_item">
          <a href="#" class="view_item">
            <img
              src="../assets/img/latest_view_3.jpg"
              alt=""
              class="view_img"
            />
            <div class="view_item_post">
              <div class="view_category category">MOBILE</div>
              <div class="view_bottom">
                <h1 class="view_title">
                  Dell XPS 13 review (2018): Still the best Windows laptop
                </h1>
                <div class="view_desc">
                  <div class="date">
                    <i class="fa-regular fa-clock"></i>
                    May 1, 2022
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestView",
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.latest_view {
}
.news_view {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 8px;
  span {
    font-weight: normal;
    margin: 0 8px;
  }
}
hr {
  border-top: 1px;
  flex-grow: 1;
}
.latest_view_item {
  .view_item {
    position: relative;
    display: block;
    overflow: hidden;
  }
  .view_img {
    width: unset;
    height: unset;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .view_item_post {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 32px 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.35);
  }
  .view_category {
    display: inline-block;
  }
  .view_title {
    text-align: center;
    margin: 14px 0;
  }
  .view_bottom {
    color: #fff;
    font-size: 13px;
  }
}
</style>
