<template>
  <div>
    <div class="card shadow rounded text-center mt-4 d-flex align-items-stretch">
      <div class="card-header p-0">
        <img :src="ImgUrl" alt class="img-fluid p-1 img-Card">
      </div>
      <div class="card-body">
        <p class="card-title fest-title">{{ Title }}</p>
        <p class="card-text fest-text">{{ Segment }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    Title: String,
    Segment: String,
    ImgUrl: String,
    Description: String
  },
  methods: {}
};
</script>
<style scoped>
.fest-title {
  font-weight: bold;
  font-size: 1.5em;
  color: #424242;
}
.fest-text {
  font-weight: bold;
  color: #757575;
}
.img-Card {
  max-height: 400px;
  max-width: 200px;
}
</style>
