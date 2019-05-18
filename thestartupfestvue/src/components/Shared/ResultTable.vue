<template>
  <div>
    <h4 style="font-weight:bold" class="p-2 my-3">{{TableTitle}}</h4>
    <ResultCell
      v-for="(cell,index) in sorted_Candidates"
      :key="cell.Nome"
      :placing="index + 1"
      :CellGrade="cell.Nota"
      :cellTitle="cell.Nome"
      :ImgUrl="cell.ImgUrl"
      :cellSubTitle="cell.Categoria"
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
    rows: Object
  },
  data() {
    return {
      info: []
    };
  },
  computed: {
    sorted_Candidates() {
      return this.info.StartUps.sort((a, b) => {
        return b.Nota - a.Nota;
      });
    }
  },
  created() {
    this.info = this.rows;
  }
};
</script>

<style scoped>
</style>
