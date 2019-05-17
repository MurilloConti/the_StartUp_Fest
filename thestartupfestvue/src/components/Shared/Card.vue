<template>
  <a v-on:click="changeToVote">
    <div class="card shadow rounded text-center mt-4">
      <div class="card-header p-0">
        <img :src="ImgUrl" alt class="img-fluid p-1">
      </div>
      <div class="card-body">
        <p class="card-title fest-title">{{CardTitle}}</p>
        <p class="card-text fest-text">{{CardText}}</p>
      </div>
    </div>
  </a>
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
    changeToVote: function() {        
      this.$router.push({ name: 'voting', params: { Id: this.SegmentId } })
    }
  }
};
</script>
<style>
.fest-title {
  font-weight: bold;
  font-size: 1.5em;
  color: #424242;
}
.fest-text {
  font-weight: bold;
  color: #757575;
}
</style>