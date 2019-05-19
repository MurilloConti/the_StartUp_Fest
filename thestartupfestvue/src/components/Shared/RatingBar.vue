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
import { store } from "@/store.js";
export default {
  name: "RatingBar",
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
      e.preventDefault();
      switch (btn) {
        case 1:
          this.Active1 = true;
          this.Active2 = false;
          this.Active3 = false;
          this.Active4 = false;
          this.Active5 = false;
          this.saveRatingValue(1, this.ratingTitle);
          break;
        case 2:
          this.Active1 = true;
          this.Active2 = true;
          this.Active3 = false;
          this.Active4 = false;
          this.Active5 = false;
          this.saveRatingValue(2, this.ratingTitle);
          break;
        case 3:
          this.Active1 = true;
          this.Active2 = true;
          this.Active3 = true;
          this.Active4 = false;
          this.Active5 = false;
          this.saveRatingValue(3, this.ratingTitle);
          break;
        case 4:
          this.Active1 = true;
          this.Active2 = true;
          this.Active3 = true;
          this.Active4 = true;
          this.Active5 = false;
          this.saveRatingValue(4, this.ratingTitle);
          break;
        case 5:
          this.Active1 = true;
          this.Active2 = true;
          this.Active3 = true;
          this.Active4 = true;
          this.Active5 = true;
          this.saveRatingValue(5, this.ratingTitle);
          break;
        default:
          break;
      }
    },
    //This method change the grade of a specific categorie
    saveRatingValue(grade, title) {
      let path = "";
      if (title == "Proposta") path = "setPropostaGrade";
      else if (title == "Apresentação/Pitch") path = "setPitchGrade";
      else if (title == "Desenvolvimento") path = "setDesenvGrade";
      this.$store.commit(path, grade);
    }
  }
};
</script>
<style scoped>
.subTitle {
  font-size: 0.7em;
  font-weight: bold;
}
</style>