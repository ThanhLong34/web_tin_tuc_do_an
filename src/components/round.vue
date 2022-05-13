<template>
  <div class="round_container">
    <div class="row">
      <div class="col l-4 m-12 s-12">
        <div class="round_item">
          <a href="#">
            <img
              src="../assets/img/round.jpg"
              alt="new image"
              class="round_img"
            />
          </a>
          <div class="round_info">
            <a href="#" class="round_category category">TRAVEL</a>
            <a href="#" class="round_title">
              People with a migraine problem vulnerable to other diseases
            </a>
          </div>
        </div>
      </div>
      <div class="col l-4 m-12 s-12">
        <div class="round_item">
          <a href="#">
            <img
              src="../assets/img/round.jpg"
              alt="new image"
              class="round_img"
            />
          </a>
          <div class="round_info">
            <a href="#" class="round_category category">TRAVEL</a>
            <a href="#" class="round_title">
              People with a migraine problem vulnerable to other diseases
            </a>
          </div>
        </div>
      </div>
      <div class="col l-4 m-12 s-12">
        <div class="round_item">
          <a href="#">
            <img
              src="../assets/img/round.jpg"
              alt="new image"
              class="round_img"
            />
          </a>
          <div class="round_info">
            <a href="#" class="round_category category">TRAVEL</a>
            <a href="#" class="round_title">
              People with a migraine problem vulnerable to other diseases
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoundComponents",
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss";

.round_container {
  margin: 48px 0 16px;
}
.round_item {
  display: flex;
  margin-bottom: 32px;
}
.round_img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.round_info {
  margin: 0 16px;
  flex-grow: 1;
}
.round_category {
  margin-bottom: 8px;
  display: inline-block;
}
.round_title {
  display: block;
  font-weight: normal;
}
</style>
