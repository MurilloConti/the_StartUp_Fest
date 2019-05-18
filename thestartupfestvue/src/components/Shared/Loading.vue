<template>
  <div class="dvWait">
    <i class="fas fa-circle-notch fa-spin fa-3x Icon"></i>
  </div>
</template>
<script>
export default {
  name: "Loading",
  props: {}
};
</script>
<style scoped>
.dvWait {
  display: inline-block;
  position: fixed;
  z-index: 1003;
  height: 100%;
  width: 100%;
  background: rgba(4, 146, 146, 0.651);
}
.Icon {
  left: 50%;
  position: absolute;
  top: 50%;
  color: #ffffff;
}
</style>
