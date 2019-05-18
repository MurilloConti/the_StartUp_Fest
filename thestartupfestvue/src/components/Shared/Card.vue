<template>
  <div class="col" v-on:click="showDescription">
    <div class="card shadow rounded text-center mt-4 d-flex align-items-stretch">
      <div class="card-header p-0 ">
        <img :src="ImgUrl" alt class="img-fluid p-1 " />
      </div>
      <div class="card-body">
        <p class="card-title fest-title">{{ CardTitle }}</p>
        <p class="card-text fest-text">{{ CardText }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    CardTitle: String,
    CardText: String,
    ImgUrl: String,
    SegmentId: String
  },
  methods: {
    showDescription: function() {
      this.$router.push({ name: "StartupDescription", params: { Id: this.SegmentId } });
    }
  }
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
.card-img-top {
    width: 100%;
    height: 15vw;
    /* object-fit: cover; */
}
</style>
