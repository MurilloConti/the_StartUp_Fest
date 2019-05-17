<template>
  <div  class="star">
    <i :class="{ activeStar: isActive, notActive: !isActive}" class="fas fa-star p-1"></i>
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
<style>
.star {
  cursor: pointer;
}
.activeStar {
  color: #ffc400;
}
.notActive {
  color: #bdbdbd;
}
</style>