<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="navbar fixed-top navbar-light bg-light justify-content-center align-middle p-3 shadow-sm">
        <div class="col-1">
           <router-link to="/home" style="color:#424242"><i class="fas fa-home"></i></router-link>
         </div>        
        <div class="col pt-2 d-flex align-items-center justify-content-center"><h4 style="color:#424242;font-weight:bold">Resultados</h4></div>
      </nav>
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
