<template>
  <div class="col-12 text-center mt-4">
    <h3>{{ratingTitle}}</h3>
    <p class="subTitle">{{SubTitle}}</p>
    <div class="form-inline text-center justify-content-center">
      <btnStar :isActive="Active1" v-on:click.native="Activete(1,$event)"/>
      <btnStar :isActive="Active2" v-on:click.native="Activete(2,$event)"/>
      <btnStar :isActive="Active3" v-on:click.native="Activete(3,$event)"/>
      <btnStar :isActive="Active4" v-on:click.native="Activete(4,$event)"/>
      <btnStar :isActive="Active5" v-on:click.native="Activete(5,$event)"/>
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
    SubTitle: String
  },
  data() {
    return {
      Active1: false,
      Active2: false,
      Active3: false,
      Active4: false,
      Active5: false
    };
  },
  methods: {
    Activete: function(btn, e) {
      switch (btn) {
        case 1:
          this.Active1 = true;
          this.Active2 = false;
          this.Active3 = false;
          this.Active4 = false;
          this.Active5 = false;
          break;
        case 2:
          this.Active1 = true;
          this.Active2 = true;
          this.Active3 = false;
          this.Active4 = false;
          this.Active5 = false;
          break;
        case 3:
          this.Active1 = true;
          this.Active2 = true;
          this.Active3 = true;
          this.Active4 = false;
          this.Active5 = false;
          break;
        case 4:
          this.Active1 = true;
          this.Active2 = true;
          this.Active3 = true;
          this.Active4 = true;
          this.Active5 = false;
          break;
        case 5:
          this.Active1 = true;
          this.Active2 = true;
          this.Active3 = true;
          this.Active4 = true;
          this.Active5 = true;
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style>
.subTitle {
  font-size: 0.7em;
  font-weight: bold;
}
</style>