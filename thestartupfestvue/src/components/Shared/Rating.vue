<template>
  <div class="col-12 text-center mt-4">
    <h3>{{ratingTitle}}</h3>
    <p class="subTitle">{{SubTitle}}</p>
    <div class="form-inline text-center justify-content-center">
      <btnStar id="1" :isActive="false" @click="Activete(1,$event)"/>
      <btnStar id="2" :isActive="false" @click="Activete(2,$event)"/>
      <btnStar id="3" :isActive="false" @click="Activete(3,$event)"/>
      <btnStar id="4" :isActive="false" @click="Activete(4,$event)"/>
      <btnStar id="5" :isActive="false" @click="Activete(5,$event)"/>
    </div>
  </div>
</template>
<script>
import btnStar from "@/components/Shared/BtnStar.vue";
export default {
  name: "Rating",
  components: {
    btnStar
  },
  props: {
    ratingTitle: String,
    SubTitle:String
  },
 data() {
    return {
      Active:0
    };
  },
  methods: {
    Activete: function(btn,e) { 
        console.log(btn,e);
      //this.Active = !this.Active;
    }
  }
};
</script>
<style>
.subTitle{
font-size:.7em;
font-weight:bold
}
</style>