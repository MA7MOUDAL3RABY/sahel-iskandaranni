<template>
  <div class="back-button d-block d-md-none">
    <v-btn v-if="$route.name != 'Home'">
      <router-link to="/" class="back-button-link text-decoration-none p-2">
        <span class="back-button-text">عودة للرئيسية</span>
        <v-icon>mdi-arrow-right</v-icon>
      </router-link>
    </v-btn>
  </div>
</template>

  <script>
export default {};
</script>

  <style scoped>
.back-button {
  position: fixed;
  top: 120px;
  right: 20px;
  z-index: 9999;
}

.back-button-text {
  margin-right: 5px;
  margin-top: 120px;
  font-size: 18px;
  font-weight: bold;
  color: #191919;
}
</style>
