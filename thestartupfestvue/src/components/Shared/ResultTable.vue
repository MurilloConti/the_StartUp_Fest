<template>
  <div>
    <h4 style="font-weight:bold" class="p-2 my-3">{{TableTitle}}</h4>
    <ResultCell
      v-for="(cell,index) in sorted_Candidates"
      :key="cell.Nome"
      :placing="index + 1"
      :CellGrade="cell.Grade"
      :cellTitle="cell.Nome"
      :ImgUrl="cell.ImgUrl"
      :cellSubTitle="cell.Segment"
      :TotalVotes="cell.TotalVotes"      
    ></ResultCell>
  </div>
</template>
<script>
import ResultCell from "@/components/Shared/ResultCell.vue";
export default {
  name: "ResultTable",
  components: {
    ResultCell
  },
  props: {
    TableTitle: String,
    rows: null
  },
  computed: {
    sorted_Candidates() {
      return this.rows.sort((a, b) => {
        return b.Grade - a.Grade;
      });
    }    
  },
};
</script>

<style scoped>
</style>
