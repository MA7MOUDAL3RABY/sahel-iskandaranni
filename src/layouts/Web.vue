<template>
  <div>
    <v-app>
      <app-header></app-header>
      <div class="my-10"></div>
      <div class="my-10"></div>
      <v-spacer></v-spacer>
      <v-container>
        <router-view></router-view>
      </v-container>

      <app-footer></app-footer>
    </v-app>
  </div>
</template>
<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss">
.v-toolbar__content {
  height: 100px !important;
}
</style>
