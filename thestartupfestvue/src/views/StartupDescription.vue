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
          <button class="btn btn-success form-control" v-on:click="validateVote">Finalizar</button>
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
    fetchFbData(docRef, grade) {
      let actualGrade;
      let actualVotes;
      let that = this;
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
          that.saveToFirebase(docRef, actualGrade, actualVotes);
        })
        .catch(function(error) {
          console.log("Error getting document2:", error);
        });
    },
    saveToFirebase(docRef, actualGrade, actualVotes) {
      var that = this;
      docRef
        .set({
          Grade: actualGrade,
          ImgUrl: that.StartUp.Url,
          Segment: that.StartUp.text,
          TotalVotes: actualVotes
        })
        .then(function() {
          that.updateVotersList();
        })
        .catch(function(error) {
          console.error("Error writing document1: ", error);
        });
    },
    saveVotes() {
      var votouProp = this.fetchFbData(
        fb.propostasCollection.doc(this.StartUp.title),
        this.$store.state.gradeProposta
      );
      var votouPitch = this.fetchFbData(
        fb.pitchCollection.doc(this.StartUp.title),
        this.$store.state.gradePitch
      );
      var votouDsenv = this.fetchFbData(
        fb.desenvolvimentoCollection.doc(this.StartUp.title),
        this.$store.state.gradeDesenv
      );
      this.showResults();
    },
    updateVotersList() {
      var that = this;
      var objTitle = that.StartUp.title.replace(/[^\w\s]/gi, "");
      return new Promise(function(resolve, reject) {
        fb.UsersCollection.doc(that.$store.state.currentUser)
          .set({ [objTitle]: true }, { merge: true })
          .then(function(doc) {
            resolve(true);
          })
          .catch(function(error) {
            reject(error);
          });
      });
    },
    validateVote() {
      console.log("valida");
      var that = this;
      this.searchIfVoted().then(function(hasVoted) {
        if (hasVoted) {
          alert("Seu voto já foi contabilizado, Obrigado!");
        } else {
          if (
            that.$store.state.gradeProposta > 0 &&
            that.$store.state.gradePitch > 0 &&
            that.$store.state.gradeDesenv > 0
          ) {
            that.saveVotes();
          } else {
            alert("Obrigatório votar nas 3 categorias.");
          }
        }
      });
    },
    searchIfVoted() {
      var that = this;
      var objTitle = that.StartUp.title.replace(/[^\w\s]/gi, "");
      return new Promise(function(resolve, reject) {
        fb.UsersCollection.doc(that.$store.state.currentUser)
          .get()
          .then(function(doc) {
            if (doc.exists) {
              if (doc.data()[objTitle] != null && doc.data()[objTitle]) {
                resolve(true);
              } else resolve(false);
            } else {
              resolve(false);
            }
          })
          .catch(function(error) {
            reject(error);
          });
      });
    },
    showResults: function() {      
      this.$router.push({ name: "results" });
    }
  },
  created() {
    this.StartUp = this.$store.state.startUp;
    if (this.StartUp == null) this.$router.push({ name: "home" });
    else
    this.$store.dispatch('clearData');
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