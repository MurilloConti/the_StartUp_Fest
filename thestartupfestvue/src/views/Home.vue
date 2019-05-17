<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="card-deck"
            v-for="StartUp in StartUps.allStartups"
            :key="StartUp.name"
          >
            <Card
              :CardTitle="StartUp.name"
              :CardText="StartUp.Segment.name"
              :ImgUrl="StartUp.imageUrl"
              :SegmentId="StartUp.Segment.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Shared/Card.vue";
import gql from "graphql-tag";
export default {
  name: "home",
  components: {
    Card
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
