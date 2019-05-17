<template>
  <div class="col-12 text-center mt-4">
    <h3>{{ratingTitle}}</h3>
    <p class="subTitle">{{SubTitle}}</p>
    <div class="form-inline text-center justify-content-center">
      <btnStar :isActive="false"/>
      <btnStar :isActive="false"/>
      <btnStar :isActive="false"/>
      <btnStar :isActive="false"/>
      <btnStar :isActive="false"/>
    </div>
  </div>
</template>
<script>
import btnStar from "@/components/Shared/btnStar.vue";
export default {
  name: "Rating",
  components: {
    btnStar
  },
  props: {
    ratingTitle: String,
    SubTitle:String
  }
};
</script>
<style>
.subTitle{
font-size:.7em;
font-weight:bold
}
</style>