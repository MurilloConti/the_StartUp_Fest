<template>
  <div class="container-fluid">
     <NavBar NavTitle="Resultados" :ShowHomeButton="true"></NavBar>
    <div class="row mt-5">
      <div class="col mt-5">
        <ResultTable TableTitle="Proposta" :rows="Proposta"></ResultTable>
        <ResultTable TableTitle="Apresentação/pitch" :rows="Apresentacao"></ResultTable>
        <ResultTable TableTitle="Desenvolvimento" :rows="Desenvolvimento"></ResultTable>
      </div>
    </div>
  </div>
</template>

<script>
import ResultTable from "@/components/Shared/ResultTable.vue";
import NavBar from "@/components/Shared/NavBar.vue";
const fb = require("@/firebaseConfig.js");
import { store } from "@/store.js";
export default {
  components: {
    ResultTable,
    NavBar
  },
  data() {
    return {
      Proposta: [],
      Apresentacao: [],
      Desenvolvimento: []
    };
  },
  beforeCreate() {
    var that = this;
    fb.propostasCollection.orderBy("Grade").onSnapshot(function(querySnapshot) {
      let propsArray = [];
      querySnapshot.forEach(function(doc) {
        propsArray.push(doc.data());
      });
      that.Proposta = propsArray;
    });
    fb.pitchCollection.orderBy("Grade").onSnapshot(function(querySnapshot) {
      let pitchArray = [];
      querySnapshot.forEach(function(doc) {
        pitchArray.push(doc.data());
      });
      that.Apresentacao = pitchArray;
    });
    fb.desenvolvimentoCollection
      .orderBy("Grade")
      .onSnapshot(function(querySnapshot) {
        let desenvArray = [];
        querySnapshot.forEach(function(doc) {
          desenvArray.push(doc.data());
        });
        that.Desenvolvimento = desenvArray;
      });
  }
};
</script>
<style>
</style>
