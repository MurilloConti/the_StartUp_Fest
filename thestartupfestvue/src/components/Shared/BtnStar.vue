<template>
  <a v-on:click="Activete" class="star">
    <i :class="{ activeStar: this.Active, notActive: !this.Active}" class="fas fa-star p-1"></i>
  </a>
</template>
<script>
export default {
  name: "BtnStar",
  props: {
      isActive:Boolean
      },
  data() {
    return {
      Active: this.isActive
    };
  },
  methods: {
    Activete: function() {        
      this.Active = !this.Active;
    }
  }
};
</script>
<style>
.star {
  cursor: pointer;
}
.activeStar {
  color: #FFC400;
}
.notActive
{
    color: #BDBDBD
}
</style>