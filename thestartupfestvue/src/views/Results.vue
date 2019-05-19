<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-3 sticky-top">
        <h2>Resultados</h2>
      </div>
    </div>
    <ResultTable TableTitle="Proposta" :rows="this.$store.state.propostas"></ResultTable>
    <ResultTable TableTitle="Apresentação/pitch" :rows="this.$store.state.apresentacoes"></ResultTable>
    <ResultTable TableTitle="Desenvolvimento" :rows="this.$store.state.desenvolvimentos"></ResultTable>
  </div>
</template>

<script>
import ResultTable from "@/components/Shared/ResultTable.vue";
const fb = require("@/firebaseConfig.js");
export default {
  components: {
    ResultTable
  },
  data() {
    return {
      Proposta: [],
      Apresentacao: [],
      Desenvolvimento: []
    };
  },
  created() {    
    this.Proposta = this.$store.state.propostas;   
    this.Apresentacao = this.$store.state.apresentacoes;
    this.Desenvolvimento = this.$store.state.desenvolvimentos;
  }
};
</script>
<style>
</style>
