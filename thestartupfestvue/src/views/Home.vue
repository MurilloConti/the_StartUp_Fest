<template>
  <div class="home">
    <div class="container" v-if="this.StartUps.length != 0">
      <nav class="navbar fixed-top navbar-light bg-light justify-content-center p-3 shadow-sm">
        <h4 style="color:#424242;font-weight:bold">Escolha sua StartUp!</h4>
      </nav>
      <div class="row mt-5">
        <div class="col mt-3">
          <div class="card-deck">
            <Card
              class="d-md-flex align-items-md-stretch"
              v-for="StartUp in StartUps.allStartups"
              :key="StartUp.name"
              :CardTitle="StartUp.name"
              :CardText="StartUp.Segment.name"
              :ImgUrl="StartUp.imageUrl"
              :SegmentId="StartUp.Segment.id"
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
// @ is an alias to /src
import Card from "@/components/Shared/Card.vue";
import Loading from "@/components/Shared/Loading.vue";
import gql from "graphql-tag";
export default {
  name: "home",
  components: {
    Card,
    Loading
  },
  data() {
    return {
      StartUps: []
    };
  },
  async created() {
    const response = await this.$apollo.query({
      query: gql`
        query allSegments {
          allStartups {
            name
            imageUrl
            annualReceipt
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
  }
};
</script>
<style></style>
