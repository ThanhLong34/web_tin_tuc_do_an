<template>
  <div class="home-page grid wide">
    <h1>Welcome</h1>
    <SliderComponent />
    <RoundComponents />
    <div class="row">
      <LatestNewsItem />
      <PopularCoponent />
    </div>
    <LatestView />
    <GoToTop />
  </div>
</template>

<script>
import SliderComponent from "../components/slider.vue";
import RoundComponents from "../components/round.vue";
import LatestNewsItem from "../components/latest_news_item.vue";
import PopularCoponent from "../components/popular_news.vue";
import LatestView from "../components/latest_view.vue";
import GoToTop from "../components/go_to_top.vue";
export default {
  name: "HomePage",
  components: {
    SliderComponent,
    RoundComponents,
    LatestNewsItem,
    PopularCoponent,
    LatestView,
    GoToTop,
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  height: 1000px;
  margin: 0 auto;
}
</style>
