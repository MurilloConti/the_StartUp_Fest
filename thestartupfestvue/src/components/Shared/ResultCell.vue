<template>
  <div class="row h-100 align-items-center justify-content-center cellBorder shadow-sm">
    <div class="col-2 text-center">
      <p class="cellplacing">{{placing}}º</p>
    </div>
    <div class="col-4 p-2">
      <img :src="ImgUrl" class="img-fluid img-thumbnail imgCell">
    </div>
    <div class="col text-left py-0 px-2">
      <p class="m-0 celltitle">{{cellTitle}}</p>
      <p class="m-0 text-muted cellSubTitle">{{cellSubTitle}}</p>
      <div class="row h-100 align-items-center">
        <div class="col-8 mb-3 pr-0">
          <i class="fas fa-star activeStar" v-if="Nota >= 1"></i>
          <i class="fas fa-star-half-alt activeStar" v-else-if="Nota > 0"></i>
          <i class="far fa-star activeStar" v-else></i>

          <i class="fas fa-star activeStar" v-if="Nota >= 2"></i>
          <i class="fas fa-star-half-alt activeStar" v-else-if="Nota > 1"></i>
          <i class="far fa-star activeStar" v-else></i>

          <i class="fas fa-star activeStar" v-if="Nota >= 3"></i>
          <i class="fas fa-star-half-alt activeStar" v-else-if="Nota > 2"></i>
          <i class="far fa-star activeStar" v-else></i>

          <i class="fas fa-star activeStar" v-if="Nota >= 4"></i>
          <i class="fas fa-star-half-alt activeStar" v-else-if="Nota > 3"></i>
          <i class="far fa-star activeStar" v-else></i>

          <i class="fas fa-star activeStar" v-if="Nota >= 5"></i>
          <i class="fas fa-star-half-alt activeStar" v-else-if="Nota > 4"></i>
          <i class="far fa-star activeStar" v-else></i>
        </div>
        <div class="col mb-2 text-left pl-0">
          <p>{{Nota.toFixed(1)}}/5</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCell",
  props: {
    placing: Number,
    cellTitle: String,
    ImgUrl: String,
    cellSubTitle: String,
    CellGrade: Number,
    TotalVotes: Number
  },
  computed: {
    Nota() {
      return (this.CellGrade / this.TotalVotes);    
    }
  }
};
</script>

<style scoped>
.cellBorder {
  border: 1px solid #eeeeee;
}
.cellplacing {
  font-weight: bold;
  font-size: 1.3em;
}
.celltitle {
  font-weight: bold;
  color: #424242;
}
.cellSubTitle {
  font-size: 0.6em;
  color: #424242;
}
.imgCell {
  max-width: 100px;
}
</style>
