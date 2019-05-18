<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-3 sticky-top">
        <h2>Resultados</h2>
      </div>
    </div>
    <ResultTable TableTitle="Proposta" :rows="Proposta"></ResultTable>
    <ResultTable TableTitle="Apresentação/pitch" :rows="Apresentacao"></ResultTable>
    <ResultTable TableTitle="Desenvolvimento" :rows="Desenvolvimento"></ResultTable>
  </div>
</template>

<script>
import ResultTable from "@/components/Shared/ResultTable.vue";
export default {
  components: {
    ResultTable
  },
  data() {
    return {
      Proposta: {
        StartUps: [
          {
            Nome: "Predify",
            Categoria: "Fintech",
            Nota: 3.2,
            ImgUrl:
              "http://www.sevna.com.br/site/wp-content/uploads/2018/08/MarcasAceleradas_predify.png"
          },
          {
            Nome: "HellFire Games",
            Categoria: "Games",
            Nota: 0.5,
            ImgUrl:
              "https://www.eaalim.com/download/wp-content/uploads/2014/01/hellfire.jpg"
          },
          {
            Nome: "TechFit",
            Categoria: "Health Tech",
            Nota: 1.8,
            ImgUrl:
              "https://thumb.lovemondays.com.br/image/40fa4baba2854c2fa7399bbb90debcc1/logos/4a835e/techfit.png"
          },
          {
            Nome: "AgroNow",
            Categoria: "BioTech",
            Nota: 4.6,
            ImgUrl:
              "https://static.wixstatic.com/media/0adf28_eec83b33056243a9a33440a10b5d7afd.png"
          }
        ]
      },
      Apresentacao: {
        StartUps: [
          {
            Nome: "Predify",
            Categoria: "Fintech",
            Nota: 3.2,
            ImgUrl:
              "http://www.sevna.com.br/site/wp-content/uploads/2018/08/MarcasAceleradas_predify.png"
          },
          {
            Nome: "HellFire Games",
            Categoria: "Games",
            Nota: 0.5,
            ImgUrl:
              "https://www.eaalim.com/download/wp-content/uploads/2014/01/hellfire.jpg"
          },
          {
            Nome: "TechFit",
            Categoria: "Health Tech",
            Nota: 1.8,
            ImgUrl:
              "https://thumb.lovemondays.com.br/image/40fa4baba2854c2fa7399bbb90debcc1/logos/4a835e/techfit.png"
          },
          {
            Nome: "AgroNow",
            Categoria: "BioTech",
            Nota: 4.6,
            ImgUrl:
              "https://static.wixstatic.com/media/0adf28_eec83b33056243a9a33440a10b5d7afd.png"
          }
        ]
      },
      Desenvolvimento: {
        StartUps: [
          {
            Nome: "Predify",
            Categoria: "Fintech",
            Nota: 3.5,
            ImgUrl:
              "http://www.sevna.com.br/site/wp-content/uploads/2018/08/MarcasAceleradas_predify.png"
          },
          {
            Nome: "HellFire Games",
            Categoria: "Games",
            Nota: 5,
            ImgUrl:
              "https://www.eaalim.com/download/wp-content/uploads/2014/01/hellfire.jpg"
          },
          {
            Nome: "TechFit",
            Categoria: "Health Tech",
            Nota: 2.8,
            ImgUrl:
              "https://thumb.lovemondays.com.br/image/40fa4baba2854c2fa7399bbb90debcc1/logos/4a835e/techfit.png"
          },
          {
            Nome: "AgroNow",
            Categoria: "BioTech",
            Nota: 4.6,
            ImgUrl:
              "https://static.wixstatic.com/media/0adf28_eec83b33056243a9a33440a10b5d7afd.png"
          }
        ]
      }
    };
  }
};
</script>
<style>
</style>
