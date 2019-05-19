<template>
  <div>
    <nav
      class="navbar fixed-top navbar-light bg-light justify-content-center align-middle p-3 shadow-sm"
    >
      <div class="col-1" v-if="ShowHomeButton">
        <router-link to="/home" class="btn">
          <i class="fas fa-home"></i>
        </router-link>
      </div>
      <div class="col pt-2 d-flex align-items-center justify-content-center">
        <h4 class="NavTitle">{{NavTitle}}</h4>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    NavTitle: String,
    ShowHomeButton: Boolean
  }
};
</script>

<style scoped>
.btn{
color:#424242;
}
.NavTitle {
  color: #424242;
  font-weight: bold;
}
</style>
