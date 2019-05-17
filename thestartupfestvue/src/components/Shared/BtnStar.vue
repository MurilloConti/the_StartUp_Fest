<template>
  <a class="star">
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
      Active: true
    };
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