<template>
  <div>
    <div class="container" v-if="StartUp != null">
      <div class="row">
        <div class="col text-center">
          <img
            :src="StartUp.Url"
            :alt="StartUp.title"
            class="mt-3 img-thumbnail"
            style="max-height:400px"
          >
          <h2 class="pt-2 mt-3" style="font-weight:bold">{{StartUp.title}}</h2>
          <p class="text-muted">{{StartUp.text}}</p>
          <div class="row justify-content-center">
            <div class="col col-md-6 col-lg-4">
              <p class="text-justify citacao p-2 mt-3">
                <em>{{StartUp.description}}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <rating
            class="mb-3"
            ratingTitle="Proposta"
            SubTitle="A ideia / proposta agradou o ouvinte e teve um bom impacto ?"
          />
          <rating
            class="mb-3"
            ratingTitle="Apresentação/Pitch"
            SubTitle="A startup soube demonstrar a sua proposta ?"
          />
          <rating
            class="mb-5"
            ratingTitle="Desenvolvimento"
            SubTitle="No estagio atual do produto / serviço, atende bem a proposta ?"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-md-6 offset--md-4 m-5">
          <button
            class="btn btn-success form-control"
            v-on:click="validateVote"            
          >Finalizar</button>
        </div>
      </div>
    </div>
    <Loading v-else></Loading>
  </div>
</template>
<script>
import rating from "@/components/Shared/RatingBar.vue";
import Loading from "@/components/Shared/Loading.vue";
import { store } from "@/store.js";
import gql from "graphql-tag";
const fb = require("@/firebaseConfig.js");
export default {
  name: "StartupDescription",
  components: {
    rating,
    Loading
  },
  props: {
    Id: String
  },
  data() {
    return {
      StartUp: null
    };
  },
  methods: {
    saveToFirebase(grade, totVotes, docRef) {
      docRef
        .set({
          Grade: grade,
          ImgUrl: this.StartUp.Url,
          Segment: this.StartUp.text,
          TotalVotes: totVotes
        })
        .then(function() {})
        .catch(function(error) {
          console.error("Error writing document1: ", error);
        });
    },
    fetchFbData(docRef, grade, StartUp) {
      var actualGrade;
      var actualVotes;
      docRef
        .get()
        .then(function(doc) {
          if (doc.exists) {
            actualGrade = doc.data().Grade + grade;
            actualVotes = doc.data().TotalVotes + 1;
          } else {
            actualGrade = grade;
            actualVotes = 1;
          }
          docRef
            .set({
              Grade: actualGrade,
              ImgUrl: StartUp.Url,
              Segment: StartUp.text,
              TotalVotes: actualVotes
            })
            .then(function() {})
            .catch(function(error) {
              console.error("Error writing document1: ", error);
            });
        })
        .catch(function(error) {
          console.log("Error getting document2:", error);
        });
    },
    saveVotes() {
      var votouProp = this.fetchFbData(
        fb.propostasCollection.doc(this.StartUp.title),
        this.$store.state.gradeProposta,
        this.StartUp
      );
      var votouPitch = this.fetchFbData(
        fb.pitchCollection.doc(this.StartUp.title),
        this.$store.state.gradePitch,
        this.StartUp
      );
      var votouDsenv = this.fetchFbData(
        fb.desenvolvimentoCollection.doc(this.StartUp.title),
        this.$store.state.gradeDesenv,
        this.StartUp
      );
      this.showResults();
    },
    validateVote() {
      if (
        this.$store.gradeProposta > 0 &&
        this.$store.gradePitch > 0 &&
        this.$store.gradeDesenv > 0
      ) {
        this.saveVotes();
      } else {
        alert("Obrigatório votar nas 3 categorias.");
      }
    },
    showResults: function() {
      this.$router.push({ name: "results" });
    }
  },
  created() {
    this.StartUp = this.$store.state.startUp;
  }
};
</script>
<style scoped>
@import url(https://use.fontawesome.com/releases/v5.8.2/css/all.css);
.citacao {
  border-left: 3px solid #7e0378;
  font-size: 0.8em;
}
.star {
  font-size: 1.5em;
  border: #7e0378;
}
</style>
