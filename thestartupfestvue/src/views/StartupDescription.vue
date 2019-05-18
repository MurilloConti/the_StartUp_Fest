<template>
  <div>
    <div class="container" v-if="StartUp.Segment != null">      
      <div class="row">
        <div class="col text-center">
          <img
            :src="StartUp.Segment.Startups[0].imageUrl"
            :alt="StartUp.Segment.Startups[0].name"
            class="mt-3 img-thumbnail" style="max-height:400px"
          >
          <h2 class="pt-2 mt-3" style="font-weight:bold">{{StartUp.Segment.Startups[0].name}}</h2>
          <p class="text-muted">{{StartUp.Segment.code}}</p>
          <div class="row justify-content-center">
            <div class="col col-md-6 col-lg-4">
              <p class="text-justify citacao p-2 mt-3">
                <em>{{StartUp.Segment.Startups[0].description}}</em>
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
        <div class="col col-md-6 offset--md-4  m-5">
          <button class="btn btn-success form-control" v-on:click="showResults">Votar</button>
        </div>
      </div>
    </div>
    <Loading v-else></Loading>
  </div>
</template>
<script>
import rating from "@/components/Shared/RatingBar.vue";
import Loading from "@/components/Shared/Loading.vue";
import gql from "graphql-tag";
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
      StartUp: []
    };
  },
  async created() {
    if (this.$route.params.Id != null)
      await this.getStartUpInfo(this.$route.params.Id);
  },
  methods: {
    async getStartUpInfo(id) {
      const response = await this.$apollo.query({
        query: gql`
          query SegMents($id: ID!) {
            Segment(id: $id) {
              code
              Startups {
                name
                imageUrl
                description
              }
            }
          }
        `,
        variables: {
          id: id
        }
      });
      this.StartUp = response.data;
    },
    showResults: function() {
      this.$router.push({ name: "results" });
    }
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
