<template>
  <div class="home">
    <div class="container" v-if="this.StartUps.length != 0">
      <NavBar NavTitle="Escolha sua StartUp!" :ShowHomeButton="false"></NavBar>
      <div class="row mt-5">
        <div class="col mt-3">
          <div class="card-deck">
            <Card
              class="d-md-flex align-items-md-stretch"
              v-for="(StartUp,index) in StartUps.allStartups"
              :key="StartUp.name"
              :Title="StartUp.name"
              :Segment="StartUp.Segment.name"
              :ImgUrl="StartUp.imageUrl"
              :Description="StartUp.description"
              v-on:click.native="goToDescriptionView(index)"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Shared/Card.vue";
import Loading from "@/components/Shared/Loading.vue";
import NavBar from "@/components/Shared/NavBar.vue";
import gql from "graphql-tag";
import { store } from "@/store.js";
const fb = require("../firebaseConfig.js");
export default {
  name: "home",
  components: {
    Card,
    Loading,
    NavBar
  },
  data() {
    return {
      StartUps: []
    };
  },
  methods: {
    loginFireBase() {
      fb.auth
        .signInAnonymously()
        .then(user => {
          this.$store.commit("setCurrentUser", user.user.uid);
        })
        .catch(err => {
          console.log(err);
        });
    },
    goToDescriptionView: function(index) {
      var startup = this.StartUps.allStartups[index];
      this.$store.commit("setSelectedStartUp", {
        title: startup.name,
        text: startup.Segment.name,
        Url: startup.imageUrl,
        description: startup.description
      });
      this.$router.push({ name: "StartupDescription" });
    }
  },
  async beforeCreate() {
    const response = await this.$apollo.query({
      query: gql`
        query allSegments {
          allStartups {
            name
            imageUrl
            description
            Segment {
              name
              id
            }
          }
        }
      `
    });
    this.StartUps = response.data;
  },
  created() {
    this.loginFireBase();
  }
};
</script>
<style>
</style>
