<template>
  <div class="last-news-item">
    <!-- news image -->
    <div class="news-image">
      <img
        src="https://images.unsplash.com/photo-1651237130541-f6af6bfdaa3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="news image"
      />
    </div>
    <div class="news-info">
      <!-- news category -->
      <p class="news-category">Business</p>
      <!-- news title -->
      <h4 class="news-title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat dolor
        natus dolorum molestiae quas illo architecto? Blanditiis
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastNewsItem",
};
</script>

<style lang="scss" scoped>
.last-news-item {
  display: flex;
}
</style>
