<template>
  <div  class="star">
    <i :class="{ activeStar: isActive, deactivatedStar: !isActive}" class="fas fa-star p-1 fa-2x"></i>
  </div>
</template>
<script>
export default {
  name: "BtnStar",
  props: {
    isActive: Boolean    
  }
};
</script>
<style scoped>
.star {
  cursor: pointer;
}
.activeStar {
  color: #ffc400;
}
.deactivatedStar {
  color: #bdbdbd;
}
</style>